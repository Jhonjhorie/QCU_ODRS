<script>
// @ts-nocheck

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


  

  function gotoHistory() {
    goto("/Registrar/History");
  }





    import { authHandlers, authStore } from "../../../store/store";
    import { getAuth } from "firebase/auth";
    import { doc, getDoc } from 'firebase/firestore';
    
    function gotoDashboard() {
		goto('/Registrar/Dashboard');
    }
    function gotoRequests() {
      goto('/Registrar/Requests');
    }


    /**
   * @type {import("@firebase/auth").User | null}
   */
    let user;
    /**
   * @type {import("@firebase/firestore").DocumentData | null}
   */
    let userData = null;
    let dept = "" ;
    let name = "Loading...";
    const auth = getAuth();
    onMount(async () => {
      user = auth.currentUser;
      
      if (user) {
        console.log('User exists:', user.uid, user.email);
        const docRef = doc(db, "registrar", user.uid);
  
        try {
          const snapshot = await getDoc(docRef);
          if (snapshot.exists()) {
            console.log('Document exists');
            const data = snapshot.data();
            console.log('User Department:', data.department_name);
            userData = data;
            dept = data.department_name;
            name = data.fullname;
            fetchRequests(dept)
          } else {
            console.log('Document does not exist');
          }
        } catch (error) {
          console.error("Error getting document:", error);
        }
      } else {
        console.log('User not logged in');
      }
    });




    
  async function CCSfetchRequests() {
    const q = query(collection(db, 'docRequests'), 
                    where("dept_Title", "in", [
                      "Bachelor Of Science In Computer Science",
                      "Bachelor Of Science In Information Technology",
                      "Bachelor Of Science In Information Systems",
                    ]),
                    where('status', '==', 0));
    const qpending = query(collection(db, 'docRequests'), 
                    where("dept_Title", "in", [
                      "Bachelor Of Science In Computer Science",
                      "Bachelor Of Science In Information Technology",
                      "Bachelor Of Science In Information Systems",
                    ]),
                    where('status', '==', 1));    
    const qcomplete = query(collection(db, 'docRequests'), 
                    where("dept_Title", "in", [
                      "Bachelor Of Science In Computer Science",
                      "Bachelor Of Science In Information Technology",
                      "Bachelor Of Science In Information Systems",
                    ]),
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
  async function CBAAfetchRequests() {
    const q = query(collection(db, 'docRequests'), 
                    where("dept_Title", "in", [
                        "Bachelor Of Science In Entrepreneurship (BS Entrep)",
                        "Bachelor Of Science In Accountancy (BSA)",
                      ]),
                    where('status', '==', 0));
    const qpending = query(collection(db, 'docRequests'), 
                    where("dept_Title", "in", [
                        "Bachelor Of Science In Entrepreneurship (BS Entrep)",
                        "Bachelor Of Science In Accountancy (BSA)",
                      ]),
                    where('status', '==', 1));    
    const qcomplete = query(collection(db, 'docRequests'), 
                    where("dept_Title", "in", [
                        "Bachelor Of Science In Entrepreneurship (BS Entrep)",
                        "Bachelor Of Science In Accountancy (BSA)",
                      ]), 
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
  async function COEfetchRequests() {
    const q = query(collection(db, 'docRequests'), 
                    where("dept_Title", "in", [
                        "Electronics Engineering (BSECE)",
                        "Bachelor Of Science In Industrial Engineering (IE)",
                      ]),
                    where('status', '==', 0));
    const qpending = query(collection(db, 'docRequests'), 
                    where("dept_Title", "in", [
                        "Electronics Engineering (BSECE)",
                        "Bachelor Of Science In Industrial Engineering (IE)",
                      ]),
                    where('status', '==', 1));    
    const qcomplete = query(collection(db, 'docRequests'), 
                    where("dept_Title", "in", [
                        "Electronics Engineering (BSECE)",
                        "Bachelor Of Science In Industrial Engineering (IE)",
                      ]), 
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
  async function COEDfetchRequests() {
    const q = query(collection(db, 'docRequests'), 
                    where(
                        "dept_Title",
                        "==",
                        "Bachelor Of Early Childhood Education (BECEd)"
                      ),
                    where('status', '==', 0));
    const qpending = query(collection(db, 'docRequests'), 
                    where(
                        "dept_Title",
                        "==",
                        "Bachelor Of Early Childhood Education (BECEd)"
                      ),
                    where('status', '==', 1));    
    const qcomplete = query(collection(db, 'docRequests'), 
                    where(
                        "dept_Title",
                        "==",
                        "Bachelor Of Early Childhood Education (BECEd)"
                      ),
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


  async function fetchRequests(dept) {
    switch (dept) {
      case "CCS":
        await CCSfetchRequests();
        break;
      case "CBAA":
        await CBAAfetchRequests();
        break;
      case "COE":
        await COEfetchRequests();
        break;
      case "COED":
        await COEDfetchRequests();
        break;
      default:
        console.error("Invalid department:", dept);
        break;
    }
  }

</script>

<main class="flex flex-col">
  <SectionWrapper>
    <Header />
    <div class="flex flex-row gap-5 mx-auto w-full">

      <div class="h-screen w-[300px] bg-white z-20 shadow-xl" >
        <h1 class="text-black font-semibold text-[25px] text-center pt-2">REGISTRAR</h1>
        <div class="pt-2">
       
            <img src="/user.png" class="w-[130px] h-[130px] rounded-full mx-auto" alt="" />
        </div>
    
        {#if name === "Loading..."}
        <span class="loading loading-dots loading-md w-[25px] py-8 bg-blue-900 text-black block mx-auto"></span>
        {:else}
        <h1 class="text-black font-semibold text-[25px] text-center pt-2">
          {name}
        </h1>
        <h1 class="text-black font-semibold text-[15px] text-center pb-2 pt-0" > {dept}  </h1>
    
            {/if}
    
    
    
        <div class="h-1 w-[250px] bg-[#2f2f2ff0] mx-auto "> </div>
    
        <ul class="justify-end ">
            <li class="pt-4 text-center">
                <button class="h-[40px] rounded-[10px] hover:bg-slate-800 text-white hover:scale-95 btn-wide bg-slate-900" on:click={gotoDashboard}>DASHBOARD</button> 
            </li>
            <li class="pt-3 text-center">
                <button class="h-[40px] rounded-[10px] hover:bg-slate-800 text-white hover:scale-95 btn-wide bg-slate-900" on:click={gotoRequests} >REQUESTS</button>
            </li>
            <li class="pt-3 text-center">
                <button class="h-[40px] rounded-[10px] hover:bg-slate-800 text-white hover:scale-95 btn-wide bg-slate-900" on:click={gotoHistory}>HISTORY</button>
            </li> 
           
            <li class="fixed pl-5 pb-5 bottom-0">
                <button  class="h-[40px] rounded-[10px] hover:bg-slate-800 text-white hover:scale-95  btn-wide bg-slate-900" on:click={authHandlers.logout}>LOGOUT</button>
            </li> 
        </ul>
        
    </div>
    
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
