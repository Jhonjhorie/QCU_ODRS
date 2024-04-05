<script>
// @ts-nocheck

  import SectionWrapper from "../../../components/SectionWrapper.svelte";
  import Header from "../../../components/Registrar/RegistrarHeader.svelte";
  import Sidebar from "../../../components/Registrar/RegistrarSidebar.svelte";
  import { goto } from "$app/navigation";
  import { db } from "$lib/firebase/firebase";
  import { collection, query, where, getDocs, doc, updateDoc } from 'firebase/firestore';


  let requests = [];

  async function fetchRequests() {
    const q = query(collection(db, 'docRequests'), where('dept_Title', '==', 'Bachelor Of Science In Computer Science'));

    try {
      const querySnapshot = await getDocs(q);
      requests = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      console.error('Error fetching requests:', error);
    }
  }

  fetchRequests();

  function gotoInfo(id) {
    goto(`/Registrar/RequestInfo?id=${id}`);
  }
</script>

<main class="flex flex-col">
  <SectionWrapper>
    <Header />
    <div class="flex flex-row gap-5 mx-auto w-full">
      <Sidebar />
    
  <div class="flex flex-col flex-1 mx-auto w-full">
    <h1 class="p-3 text-[30px] text-black font-bold">REQUESTS</h1>

    <div class="h-[70vh] w-auto p-2 bg-slate-100 rounded-md shadow-lg">
      <div class="overflow-x-auto w-auto h-[67.5vh] bg-slate-200">
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
                <td>{request.date_Req}</td>
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
          </tbody>
        </table>
      </div>
    </div>
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