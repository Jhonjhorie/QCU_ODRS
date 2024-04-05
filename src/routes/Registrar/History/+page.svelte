<script>
  import SectionWrapper from "../../../components/SectionWrapper.svelte";
  import Header from "../../../components/Registrar/RegistrarHeader.svelte";
  import Sidebar from "../../../components/Registrar/RegistrarSidebar.svelte";
 import { goto } from "$app/navigation";
  import { db } from "$lib/firebase/firebase";
  import { collection, query, where, getDocs } from 'firebase/firestore';
  
  function gotoInfo() {
    goto("/Registrar/RequestInfo");
  }


  /**
   * @type {any[]}
   */
  let requests = [];

  async function fetchRequests() {
    const q = query(collection(db, 'docRequests'), 
                    where('dept_Title', '==', 'Bachelor Of Science In Computer Science'),
                    where('status', '==', 'Complete'));    
    try {
      const querySnapshot = await getDocs(q);
      requests = querySnapshot.docs.map(doc => doc.data());
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
        <h1 class="p-3 text-[30px] text-black font-bold">HISTORY</h1>
      
        <div class="h-[70vh] w-auto p-2 bg-slate-100 rounded-md shadow-lg">
          <div class="overflow-x-auto w-auto h-[67.5vh] bg-slate-200">
            <table class="table table-xs">
              <!-- head -->
              <thead>
                <tr>
                  <th></th>
                  <th>Transaction Number</th>
                  <th>Document Requested</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <!-- body -->
              <tbody>
                {#each requests as request, index (request.id)}
                  <tr class="hover:bg-blue-700" on:click={gotoInfo}>
                    <th>{index + 1}</th>
                    <td>{request.student_Num}</td>
                    <td>{request.doc_ID}</td>
                    <td>{request.date_Req}</td>
                    <td>{request.status}</td>
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
