<script>
// @ts-nocheck

  // Import necessary components
  import SectionWrapper from "../../../components/SectionWrapper.svelte";
  import Header from "../../../components/Registrar/RegistrarHeader.svelte";
  import Sidebar from "../../../components/Registrar/RegistrarSidebar.svelte";
  import Search from "../../../components/Registrar/RegistrarSearch.svelte";
  import Requests from "../../../components/Registrar/RegistrarRequests.svelte";
  import { writable } from 'svelte/store';

  let textsdas = 'Search';
  let isSearchVisible = writable(true); 
  function toggleVisibility() {
    isSearchVisible.update(value => !value);
    textsdas = 'Back'
  }





  import { goto } from "$app/navigation";
  import { authHandlers, authStore } from "../../../store/store";
  import { getAuth } from "firebase/auth";
  import { db } from "$lib/firebase/firebase";
  import { doc, getDoc } from 'firebase/firestore';
  import { onMount } from "svelte";
    
  function gotoDashboard() {
		goto('/Registrar/Dashboard');
	}
  function gotoRequests() {
		goto('/Registrar/Requests');
	}
  function gotoHistory() {
		goto('/Registrar/History');
	}

    /**
   * @type {import("@firebase/auth").User | null}
   */
    let user;
    /**
   * @type {import("@firebase/firestore").DocumentData | null}
   */
    let userData = null;
    let name = "Loading...";
    let dept = "" ;
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
            fetchRequests(dept);

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






  import {
    collection,
    query,
    where,
    getDocs,
    updateDoc,
    orderBy,
  } from "firebase/firestore";

  let requests = [];
  let loading = true;
  
  async function CCSfetchRequests() {
    const q = query(
      collection(db, "docRequests"),
      where("dept_Title", "in", [
        "Bachelor Of Science In Computer Science",
        "Bachelor Of Science In Information Technology",
        "Bachelor Of Science In Information Systems",
      ]),
      where("status", "!=", 2),
      orderBy("date_Req", "asc")
    );

    try {
      const querySnapshot = await getDocs(q);
      requests = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

    } catch (error) {
      console.error("Error fetching requests:", error);
    } finally {
      loading = false;
    }
  }

  async function COEfetchRequests() {
    const q = query(
      collection(db, "docRequests"),
      where("dept_Title", "in", [
        "Electronics Engineering (BSECE)",
        "Bachelor Of Science In Industrial Engineering (IE)",
      ]),
      where("status", "!=", 2),
      orderBy("date_Req", "asc")
    );

    try {
      const querySnapshot = await getDocs(q);
      requests = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

    } catch (error) {
      console.error("Error fetching requests:", error);
    } finally {
      loading = false;
    }
  }

  async function COEDfetchRequests() {
    const q = query(
      collection(db, "docRequests"),
      where(
        "dept_Title",
        "==",
        "Bachelor Of Early Childhood Education (BECEd)"
      ),
      where("status", "!=", 2),
      orderBy("date_Req", "asc")
    );

    try {
      const querySnapshot = await getDocs(q);
      requests = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

    } catch (error) {
      console.error("Error fetching requests:", error);
    } finally {
      loading = false;
    }
  }

  async function CBAAfetchRequests() {
    const q = query(
      collection(db, "docRequests"),
      where("dept_Title", "in", [
        "Bachelor Of Science In Entrepreneurship (BS Entrep)",
        "Bachelor Of Science In Accountancy (BSA)",
      ]),
      where("status", "!=", 2),
      orderBy("date_Req", "asc")
    );

    try {
      const querySnapshot = await getDocs(q);
      requests = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

    } catch (error) {
      console.error("Error fetching requests:", error);
    } finally {
      loading = false;
    }
  }

  function gotoInfo(id) {
    goto(`/Registrar/RequestInfo?id=${id}`);
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

      <!-- side bar -->
    
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
      <!-- side bar -->


      <div class="flex flex-col flex-1 mx-auto w-full">
        <div class="flex justify-between">


          <h1 class="p-3 text-3xl text-black font-bold">REQUESTS</h1>
          <div class="flex mr-4 items-center gap-2">
            <button class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" on:click={toggleVisibility}>{textsdas} --></button>
          </div>
        </div>





        {#if $isSearchVisible}



        <div class="h-[70vh] w-auto p-2 bg-slate-100 rounded-md shadow-lg mr-4">
          <div class="overflow-x-auto w-auto h-[67.5vh] bg-slate-200">
            {#if loading}
              <div class="flex justify-center items-center h-[70vh]">
                <span class="h-14 w-10 loading loading-dots loading-md"></span>
              </div>
            {:else}
              <table class="table table-xs">
                <!-- head -->
                <thead>
                  <tr>
                    <th></th>
                    <th>Transaction Number</th>
                    <th>Student Name</th>
                    <th>Student No.</th>
                    <th>Document Requested</th>
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <!-- body -->
                <tbody>
                  {#each requests as request, index}
                    <tr class="hover:bg-gray-400" on:click={() => gotoInfo(request.id)}>
                      <th>{index + 1}</th>
                      <td>{request.id}</td>
                      <td>{request.student_Name}</td>
                      <td>{request.student_Num}</td>
                      <td>{request.doc_ID}</td>
                      <td>{request.date_Req.toDate().toLocaleDateString("en-US")}</td>
                      <td>
                        {#if request.status == 2}
                          <ul class="steps w-full">
                            <li class="step step-success"></li>
                            <li class="step step-success"></li>
                            <li class="step step-success font-bold">Completed</li>
                          </ul>
                        {:else if request.status == 1}
                          <ul class="steps w-full">
                            <li class="step step-warning"></li>
                            <li class="step step-warning font-bold">Claiming</li>
                            <li class="step"></li>
                          </ul>
                        {:else}
                          <ul class="steps w-full">
                            <li class="step step-info font-bold">Pending</li>
                            <li class="step"></li>
                            <li class="step"></li>
                          </ul>
                        {/if}
                      </td>
                    </tr>
                  {/each}
                </tbody>
              </table>
            {/if}
          </div>
        </div>
        
        {:else}
        <Search />
        {/if}
      </div>

    </div>
  </SectionWrapper>
  
</main>

<style>
  th {
    font-weight: bold;
    font-size: 15px;
    padding: 10px;
    color: black;
  }

  td {
    color: black;
  }
</style>
