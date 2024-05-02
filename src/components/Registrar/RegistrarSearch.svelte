<script>
  // @ts-nocheck

  import { writable, derived } from "svelte/store";
  import { goto } from "$app/navigation";
  import { db } from "$lib/firebase/firebase";
  import {
    collection,
    query,
    where,
    getDocs,
    doc,
    updateDoc,
    orderBy,
  } from "firebase/firestore";

  let searchText = writable("");
  let requests = derived(searchText, ($searchText, set) => {
    if ($searchText === "") return;
    const fetchRequests = async () => {
      const q = query(
        collection(db, "docRequests"),
        where("student_Num", "==", $searchText)
      );

      try {
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        set(data);
      } catch (error) {
        console.error("Error fetching requests:", error);
      }
    };
    fetchRequests();
  });

  function gotoInfo(id) {
    goto(`/Registrar/RequestInfo?id=${id}`);
  }

  function search() {
    searchText.set($searchText);
  }
</script>



      <div class="flex flex-col flex-1 mx-auto w-full">

        <div class="flex mr-4 items-center gap-2">
          <h2 class="p-3 text-xl text-black">Search:</h2>
          <input
            type="text"
            class="p-2 my-2 rounded-md border border-gray-400"
            placeholder="Input Student ID..."
            bind:value={$searchText}
            on:input={search}/>
      </div>
        {#if $requests === undefined}
          <div class="flex justify-center flex=col items-center h-[70vh] pb-40">
            <h1>Waiting for Input</h1>
            <span class="h-14 w-10 loading loading-dots loading-md"></span>
          </div>
        {:else}
          <div class="h-[70vh] w-auto p-2 bg-slate-100 rounded-md shadow-lg mr-4">
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
                  {#each $requests as request, index}
                    <tr
                      class="hover:bg-gray-400"
                      on:click={() => gotoInfo(request.id)}
                    >
                      <th>{index + 1}</th>
                      <td>{request.id}</td>
                      <td>{request.student_Name}</td>
                      <td>{request.student_Num}</td>
                      <td>{request.doc_ID}</td>
                      <td
                        >{request.date_Req
                          .toDate()
                          .toLocaleDateString("en-US")}</td
                      >
                      <td>
                        {#if request.status == 2}
                          <ul class="steps w-full">
                            <li class="step step-success"></li>
                            <li class="step step-success"></li>
                            <li class="step step-success font-bold">
                              Completed
                            </li>
                          </ul>
                        {:else if request.status == 1}
                          <ul class="steps w-full">
                            <li class="step step-warning"></li>
                            <li class="step step-warning font-bold">
                              Claiming
                            </li>
                            <li class="step"></li>
                          </ul>
                        {:else}
                          <ul class="steps w-full">
                            <li class="step step-info font-bold">
                              Confirmation
                            </li>
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
        {/if}
      </div>
  

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
