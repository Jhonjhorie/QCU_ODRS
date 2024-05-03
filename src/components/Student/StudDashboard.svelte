<script>
// @ts-nocheck

  import SectionWrapper from "../SectionWrapper.svelte";
  import Header from "../Header.svelte";
  import { doc, collection, query, where, getDocs, getDoc } from "firebase/firestore";
  import StudRfBtn from "./StudRFBtn.svelte";
  import StudToBtn from "./StudToBtn.svelte";
  import { getAuth, onAuthStateChanged } from "firebase/auth";
  import { db } from "$lib/firebase/firebase";
  import { onMount } from "svelte";
  

  let docsRequests = [];
  let sortBy = {col: "id", ascending: true};
    // Check if there is a current user before accessing their UID

let authenticating = true;
const auth = getAuth();

const fetchData = async () => {
  const user = auth.currentUser;
  if (user !== null) {
    let stud_no = "";
    const docRef = doc(db, "students", user.uid);
    try {
      if (docRef !== null) {
        const snapshot = await getDoc(docRef);
        let docSnap = snapshot;
        if (docSnap.exists()) {
          console.log('user exists doc');
          const data = docSnap.data();
          stud_no = data.stud_no;
          const q = query(collection(db, "docRequests"), where("student_Num", "==", stud_no));
          const querySnapshot = await getDocs(q);
          console.log('data user exists doc');
          docsRequests = querySnapshot.docs.map(doc => ({
            tnum: doc.id,
            name: doc.data().doc_ID,
            date: doc.data().sched_Claim,
            price: doc.data().price,
            status: doc.data().status
          }));
        } else {
          console.log('no doc ref');
        }
      } else {
        console.log("No authenticated user found");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      authenticating = false;
    }
  }
};

onMount(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      fetchData();
    }
    unsubscribe(); 
  });
});

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
    items-start sm:px-5 px-0.5 sm:mt-5 mt-2.5">
        <div class="card card-compact sm:w-[90%] w-full shadow-xl items-center bg-white h-[540px] sm:h-[600px]">
           
            <h2 class="card-title sm:text-4xl text-sm w-full bg-slate-700 rounded-t-xl sm:p-5 p-2.5 text-white glass">DASHBOARD</h2>
            
                <div class="sm:px-2 px-0.5 sm:pb-3 pb-3  overflow-x-auto w-full">
                    <table class="table">
                      <!-- head -->
                      <thead>
                        <tr>
                            <th></th>
                            <th on:click={sort("tnum")}>Transaction Number</th>
                            <th on:click={sort("name")}>Document</th>
                            <th on:click={sort("price")}>Price</th>
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
                              <td class="font-bold text-xs sm:text-sm">{index + 1}</td>
                              <td class="text-xs sm:text-sm">{doc.tnum}</td>
                              <td class="text-xs sm:text-sm">{doc.name}</td>
                              <td class="text-xs sm:text-sm">{doc.price}</td>
                              <td class="font-bold text-xs sm:text-sm">{doc.date}</td>
                              <td>
                              {#if doc.status == 1}
                              <ul class="steps w-full">
                                <li data-content="!" class="step step-warning">Claiming</li>
                                <li data-content="✓" class="step step-neutral"></li>
                            </ul>
                              
                              {:else if doc.status == 2}
                              <ul class="steps w-full">    
                                <li data-content="✓" class="step step-success">Completed</li>
                            </ul>
                              {:else}
                              <ul class="steps w-full">
                                  <li data-content="?" class="step step-info">Pending</li>
                                  <li data-content="!" class="step step-neutral"></li>
                               
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
                    <div class="h-full flex justify-center items-center mt-[-15px]">
                      <span class="sm:h-14 sm:w-10 h-7 w-5 loading loading-dots loading-md "></span>
                    </div>
                    {/if}
                  </div>


        </div>
    </main>
    </SectionWrapper>