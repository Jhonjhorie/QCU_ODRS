<script>
// @ts-nocheck

    import SectionWrapper from "../SectionWrapper.svelte";
    import Header from "../Header.svelte";
    import { doc, collection, query, where, getDocs, getDoc } from "firebase/firestore";
  import StudRfBtn from "./StudRFBtn.svelte";
  import StudToBtn from "./StudToBtn.svelte";
  import { getAuth } from "firebase/auth";
  import { db } from "$lib/firebase/firebase";

  let docsRequests = [];
    let sortBy = {col: "id", ascending: true};
    // Check if there is a current user before accessing their UID
const auth = getAuth();
const user = auth.currentUser;
let authenticating = true;
async function fetchData() {
  
  if (user !== null) {
    let stud_no = "";
    const docRef = doc(db, "students", user.uid);
    if (docRef !== null) {
      try {
        const snapshot = await getDoc(docRef);
        let docSnap = snapshot;
        if (docSnap.exists()) {
          console.log('user exists doc');
          const data = docSnap.data();
          stud_no = data.stud_no;
          const q = query(collection(db, "docRequests"), where("student_Num", "==", stud_no));
          const querySnapshot = await getDocs(q);
          console.log('data user exists doc');
          docsRequests = querySnapshot.docs.map(doc => {
          const data = doc.data();
          return {
            tnum: doc.id,
            name: data.doc_ID,
            date: data.sched_Claim,
            status: data.status
          };
        });
        } else {
          console.log('no doc ref');
        }
      } catch (error) {
        console.error("Error getting document:", error);
      } finally {
        authenticating = false;
      }
    }
  } else {
    console.log("No authenticated user found");
  }
}
fetchData();
     $: sort = (column) => {
		
		if (sortBy.col == column) {
			sortBy.ascending = !sortBy.ascending
		} else {
			sortBy.col = column
			sortBy.ascending = true
		}
        let sortModifier = (sortBy.ascending) ? 1 : -1;
		
		// @ts-ignore
		let sort = (a, b) => 
			(a[column] < b[column]) 
			? -1 * sortModifier 
			: (a[column] > b[column]) 
			? 1 * sortModifier 
			: 0;
		
    docsRequests  = docsRequests.sort(sort);
    }
    
</script>

<SectionWrapper>
    <Header />  
   <StudRfBtn />
   <StudToBtn />
    <main class="flex flex-col
    items-center mt-5">
        <div class="card card-compact w-3/4 shadow-xl items-center bg-white">
            <p></p>
            <h2 class="card-title text-4xl w-full bg-slate-700 rounded-t-xl p-5 text-white glass">DASHBOARD</h2>
            
                <div class="px-2 pb-3 overflow-x-auto w-full">
                    <table class="table">
                      <!-- head -->
                      <thead>
                        <tr>
                            <th></th>
                            <th on:click={sort("tnum")}>Transaction Number</th>
                            <th on:click={sort("name")}>Document</th>
                            <th on:click={sort("date")}>Date</th>
                            <th on:click={sort("status")}>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <!-- row 1 -->
                        {#if !authenticating}
                        {#if docsRequests != null}
                          {#each docsRequests as doc, index}
                          <tr class="hover:bg-slate-200">
                              <td class="font-bold">{index + 1}</td>
                              <td>{doc.tnum}</td>
                              <td class="font-bold">{doc.name}</td>
                              <td class="font-bold">{doc.date}</td>
                              <td>
                              {#if doc.status == 2}
                              <ul class="steps w-full">
                                  <li class="step step-success"></li>
                                  <li class="step step-success"></li>
                                  <li class="step step-success font-bold">Completed</li>
                              </ul>
                              {:else if doc.status == 1}
                              <ul class="steps w-full">
                                  <li class="step step-warning"></li>
                                  <li class="step step-warning font-bold">Claiming</li>
                                  <li class="step"></li>
                              </ul>
                              {:else}
                              <ul class="steps w-full">
                                  <li class="step step-info font-bold">Confirmation</li>
                                  <li class="step"></li>
                                  <li class="step"></li>
                              </ul>
                              {/if}
                              </td>
                          </tr>
                          {/each}
                        {:else}
                        <center>No Document Requests</center>
                        {/if}
                        {/if}
                      </tbody>
                      
                    </table>
                    {#if authenticating}
                    <div class="h-full flex justify-center items-center">
                      <span class="h-14 w-10 loading loading-dots loading-md "></span>
                    </div>
                    {/if}
                  </div>


        </div>
    </main>
    </SectionWrapper>