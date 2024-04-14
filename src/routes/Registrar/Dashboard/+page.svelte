<script>
  import SectionWrapper from "../../../components/SectionWrapper.svelte";
  import Header from "../../../components/Registrar/RegistrarHeader.svelte";
  import Sidebar from "../../../components/Registrar/RegistrarSidebar.svelte";
  import { goto } from "$app/navigation";
  import { db } from "$lib/firebase/firebase";
  import { collection, query, where, getDocs } from 'firebase/firestore';
  import { onMount, onDestroy } from "svelte";

  let currentDate = new Date();
  let currentTime = new Date();
  let currentYear = new Date();
  let requests = [];
  let numDocumentsRequested = "..."; 
  let numCompleteDocReq = "...";
  let numPendingDocReq = "...";


  const updateTime = () => {
    currentTime = new Date();
  };

  const interval = setInterval(updateTime, 1000);

  onMount(() => {
    updateTime();
  });

  onDestroy(() => {
    clearInterval(interval);
  });


  
  function gotoInfo() {
    goto("/Registrar/Request");
  }
  function gotoHistory() {
    goto("/Registrar/Request");
  }


  async function fetchRequests() {
    const q = query(collection(db, 'docRequests'), 
                    where('status', '==', 0));
    const qpending = query(collection(db, 'docRequests'), 
                    where('status', '==', 1));    
    const qcomplete = query(collection(db, 'docRequests'), 
                    where('status', '==', 2));    
    try {
      const querySnapshot = await getDocs(q);
      requests = querySnapshot.docs.map(doc => doc.data());
      numDocumentsRequested = requests.length.toString();
      const PendingDocReq = await getDocs(qpending);
      requests = PendingDocReq.docs.map(doc => doc.data());
      numPendingDocReq = requests.length.toString();
      const CompletedDocReq = await getDocs(qcomplete);
      requests = CompletedDocReq.docs.map(doc => doc.data());
      numCompleteDocReq = requests.length.toString();
    } catch (error) {
      console.error('Error fetching requests:', error);
    }
  }

  fetchRequests();
</script>

<main class="flex flex-col">
  <SectionWrapper>
    <Header />
    <div class="flex flex-row gap-5 mx-auto w-full">
      <Sidebar />

      <div class="flex flex-col flex-1 mx-auto w-full">
        <h1 class="p-4 text-[30px] text-black font-bold">DASHBOARD</h1>

        <div class="text-[90px] text-black font-bold text-center">
          {currentTime.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
        <div class="text-[30px] text-black font-semibold text-center">
          {currentDate.toLocaleDateString([], {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </div>
        <div class="text-[30px] text-black font-semibold text-center">
          {currentYear.toLocaleDateString([], { weekday: "long" })}
        </div>


          <div class="flex gap-10 text-center mx-auto p-5 justify-center pt-10">
            <div class="h-[200px] w-[300px] bg-slate-100 rounded-lg shadow-lg p-5"> 
              {#if numDocumentsRequested === "..."}
              <span class="loading loading-ring loading-lg w-[105px] bg-blue-900  "></span>
              {:else}
               <h1 class="text-[#101010c4] font-semibold text-[100px]">{numDocumentsRequested}</h1>
              {/if}
                <h2 class="text-black font-bold text-[20px] ">Pending Request</h2>
            </div>
        
            <div class="h-[200px] w-[300px] bg-slate-100 rounded-lg shadow-lg p-5"> 
              {#if numCompleteDocReq === "..."}
              <span class="loading loading-ring loading-lg w-[105px] bg-blue-900  "></span>
              {:else}
                <h1 class="text-[#101010c4] font-semibold text-[100px]">{numCompleteDocReq}</h1>
              {/if}  
                <h2 class="text-black font-bold text-[20px] ">Completed Request</h2>
            </div>
        
            <div class="h-[200px] w-[300px] bg-slate-100 rounded-lg shadow-lg p-5">
              {#if numPendingDocReq === "..."}
              <span class="loading loading-ring loading-lg w-[105px] bg-blue-900  "></span>
              {:else}
              <h1 class="text-[#101010c4] font-semibold text-[100px]">{numPendingDocReq}</h1>
              {/if}
               
                <h2 class="text-black font-bold text-[20px] ">Scheduled Request</h2> 
            </div>
          </div>

        </div>
      </div>

  </SectionWrapper>
</main>
