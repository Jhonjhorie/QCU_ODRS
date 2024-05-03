<script>
  // @ts-nocheck

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
      orderBy("date_Req", "desc")
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
      orderBy("date_Req", "desc")
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
      orderBy("date_Req", "desc")
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
      orderBy("date_Req", "desc")
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

  
  CCSfetchRequests();
</script>



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
