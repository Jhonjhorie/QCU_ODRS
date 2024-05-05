<script>
// @ts-nocheck

  import SectionWrapper from "../SectionWrapper.svelte";
  import Header from "../Header.svelte";
  import { doc, collection, query, where, getDocs, getDoc, updateDoc } from "firebase/firestore";
  import StudRfBtn from "./StudRFBtn.svelte";
  import StudToBtn from "./StudToBtn.svelte";
  import { getAuth, onAuthStateChanged } from "firebase/auth";
  import { db } from "$lib/firebase/firebase";
  import { onMount } from "svelte";
  

  let docsRequests = [];
  let sortBy = {col: "id", ascending: true};
    // Check if there is a current user before accessing their UID

let authenticating = true;
let authenticating2 = false;
let cancelAlert = false;
let docTnum = "";
let docModal = false;
const auth = getAuth();

const CancelModal = async (docId, docStatus) => {
  docTnum = docId;
  if(docStatus == 3 || docStatus == 2){
    docModal = true;
  }else {
    docModal = false;
  }
  my_modal_1.showModal();
}

const CancelDoc = async () => {
  try {
    authenticating2 = true;
    const docRef = doc(db, "docRequests", docTnum);
    await updateDoc(docRef, {
      status: 3 
    });
    
    await fetchData();
    cancelAlert = true;
  } catch (error) {
    console.error("Error cancelling document:", error);
    authenticating2 = false;
  }finally{
    my_modal_1.close();
    authenticating2 = false;

  }
};

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
                              {:else if doc.status == 0}
                              <ul class="steps w-full">
                                  <li data-content="?" class="step step-info">Pending</li>
                                  <li data-content="!" class="step step-neutral"></li>
                               
                              </ul>
                              {:else}
                                <ul class="steps w-full">
                                <li data-content="X" class="step step-error">Cancelled</li>
                                </ul>
                              {/if}
                              </td>

                              <td>
                                <div class="dropdown dropdown-bottom dropdown-end">
                                  <div tabindex="0" role="button" class="btn p-1 sm:p-2 sm:h-full sm:w-full w-3/4"><box-icon name='dots-vertical-rounded' color='#455264' ></box-icon></div>
                                  <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
                                  <ul tabindex="0" class="dropdown-content z-[10] menu p-2 shadow bg-base-100 rounded-box">
                                    <li><a on:click={() => CancelModal(doc.tnum, doc.status)}><box-icon type='solid' name='message-square-x'></box-icon>Cancel</a></li>
                                </div>
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
        <dialog id="my_modal_1" class="modal">
          <div class="modal-box">
            <div class="absolute right-5 p-0 w-10 flex items-center btn" onclick="my_modal_1.close()"><box-icon name='x' type='solid' size='sm'></box-icon></div>
                  <form class="card-body flex flex-col gap-2 sm:gap-3 p-2 sm:p-5">
                    {#if docModal}
                      <h3>Cannot be Cancel</h3>            
                      <div class="form-control mt-2">
                        <button class="btn bg-blue-900 text-white hover:text-black text-md sm:text-xl" onclick="my_modal_1.close()">
                        Close
                        </button>
                      </div>

                      {:else}
                      <h3>Are you sure you want to Cancel this Request?</h3>            
                      <div class="form-control mt-2">
                        <button class="btn bg-blue-900 text-white hover:text-black text-md sm:text-xl" on:click={() => CancelDoc()}>
                          {#if authenticating2}
                          <span class="loading loading-dots loading-sm sm:loading-md "></span>
                          {:else}
                          Delete Document
                          {/if}
                        </button>
                      </div>
               
                    {/if}
                  </form>
            </div>
        </dialog>
    </main>
    {#if cancelAlert}
    <div class="absolute bottom-8 sm:bottom-10 w-full flex items-center justify-center z-10">
      <div role="alert" class="alert alert-success sm:w-1/2 w-[90%] text-xs sm:text-md flex items-center gap-2 p-2 sm:p-4 sm:rounded-xl rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
        <span class="text-[0.65rem] sm:text-md">Successfully Cancelled</span>
 
      </div>
      <button class="btn p-0 sm:w-6 w-5 absolute right-2 sm:right-[22rem]" on:click={() => cancelAlert = false}><box-icon name='x' type='solid' size='sm'></box-icon></button>
    </div>
   
    {/if}
    </SectionWrapper>