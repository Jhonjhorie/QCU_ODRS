<script>
// @ts-nocheck
  import Header from "../../../components/Registrar/RegistrarHeader.svelte";
  import { goto } from "$app/navigation";
  import SectionWrapper from "../../../components/SectionWrapper.svelte";
  import { onMount } from "svelte";
  import { db } from "$lib/firebase/firebase";
  import { doc, getDoc, updateDoc } from 'firebase/firestore';

  let toastMessage = "";

  function gotoRequests() {
    goto("/Registrar/Requests");
  }

  function gotoHistory() {
    goto("/Registrar/History");
  }

  let status = "select";
  let requestId;
  let requestDetails = {};

  onMount(async () => {
    const urlParams = new URLSearchParams(window.location.search);
    requestId = urlParams.get('id');

    try {
      const docRef = doc(db, "docRequests", requestId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        requestDetails = docSnap.data();
        status = requestDetails.status || "select";
      } else {
        console.log("No such document exists!");
      }
    } catch (error) {
      console.error("Error fetching document:", error);
    }
  });

  async function editStatus(newStatus) {
    try {
      const docRef = doc(db, "docRequests", requestId);
      await updateDoc(docRef, { status: newStatus });
      status = newStatus;
      toastMessage = "Status updated successfully!";
      setTimeout(() => {
        toastMessage = "";
        gotoRequests();
      }, 3000); // Hide toast after 3 seconds and redirect
    } catch (error) {
      console.error("Error updating status:", error);
    }
  }
</script>

<main class="flex flex-col">
  <SectionWrapper>
    <Header />
    <div class="px-60 pt-5">
      <div class="bg-base-300">
        <h1 class="p-5 font-bold">REQUEST FOR DIPLOMA</h1>

        <div class="flex justify-center bg-slate-200">
          <div class="flex flex-col">
            <h1 class="p-1 pt-2 font-bold">SOFT COPY</h1>
            <div class="flex flex-row gap-20">
              <label class="form-control w-full max-w-xs">
                <div class="label">
                  <span class="label-text">Student Id</span>
                </div>
                <input
                  type="text"
                  placeholder="Loading..."
                  class="input input-bordered w-full max-w-xs"
                  disabled
                  value={requestDetails.student_Num || ''}
                />
              </label>
              <label class="form-control w-full max-w-xs">
                <div class="label">
                  <span class="label-text">Full Name</span>
                </div>
                <input
                  type="text"
                  placeholder="Loading..."
                  class="input input-bordered w-full max-w-xs text-gray-50"
                  disabled
                  value={requestDetails.student_Name || ''}
                />
              </label>
            </div>

            <div class="flex flex-row gap-20">
              <label class="form-control w-full max-w-xs">
                <div class="label">
                  <span class="label-text">Year</span>
                </div>
                <input
                  type="text"
                  placeholder="Loading..."
                  class="input input-bordered w-full max-w-xs"
                  disabled
                  value={requestDetails.req_data || ''}
                />
              </label>
              <label class="form-control w-full max-w-xs">
                <div class="label">
                  <span class="label-text">Request</span>
                </div>
                <input
                  type="text"
                  placeholder="Loading..."
                  class="input input-bordered w-full max-w-xs text-gray-50"
                  disabled
                  value={requestDetails.doc_ID || ''}
                />
              </label>
            </div>

            <hr />

            <div class="flex flex-row gap-20">


              <!-- svelte-ignore a11y-label-has-associated-control -->
              <label class="form-control w-full max-w-xs ">
                <div class="label">
                  <span class="label-text">Select Status</span>
                </div>       
                <div class="flex flex-row gap-20">
                  <button class="btn btn-success hover" on:click={() => editStatus("Complete")}>Mark as Complete</button>
                  <button class="btn btn-warning hover" on:click={() => editStatus("Pending")}>Mark as Pending</button>
                  <button class="btn btn-error hover" on:click={() => editStatus("Error")}>Mark as Error</button>
                </div>
              </label>
            </div>

            <div class="flex flex-row gap-20 py-5 justify-center">
              <button class="btn hover" on:click={gotoHistory}>Submit</button>
              <button class="btn hover" on:click={gotoRequests}>Cancel</button>
            </div>
            {#if toastMessage}
            <div class="fixed bottom-5 left-5 bg-green-500 text-white p-3 rounded">
              {toastMessage}
            </div>
          {/if}
          </div>
        </div>
      </div>
    </div>
  </SectionWrapper>
</main>
