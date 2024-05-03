<script>
    // @ts-nocheck
    
      import Header from "../../../components/Registrar/RegistrarHeader.svelte";
      import { goto } from "$app/navigation";
      import SectionWrapper from "../../../components/SectionWrapper.svelte";
      import { onMount } from "svelte";
      import { db } from "$lib/firebase/firebase";
      import { doc, getDoc, updateDoc } from 'firebase/firestore';
    
      // Declare variables and functions
      let toastMessage = "";
      let imageUrl = ""; 
    
      function gotoRequests() {
        goto("/Registrar/Requests");
      }
    
      function gotoHistory() {
        goto("/Registrar/History");
      }
    
      let status = "select";
      let nstatus;
      let pstatus;
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
            pstatus = requestDetails.payment_status;
            imageUrl = requestDetails.imageUrl || ""; 
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
          }, 2000); 
        } catch (error) {
          console.error("Error updating status:", error);
        }
      }
    
      async function editpaymentStatus(newStatus) {
        try {
          const docRef = doc(db, "docRequests", requestId);
          await updateDoc(docRef, { payment_status: newStatus });
          status = newStatus;
          toastMessage = "Payment status updated successfully!";
          setTimeout(() => {
            toastMessage = "";
          }, 2000); 
        } catch (error) {
          console.error("Error updating status:", error);
        }
      }
      let showPreview = false;
    
      function togglePreview() {
        showPreview = !showPreview;
      }
      function submit(nStatus,pStatus){
        editpaymentStatus(pStatus)
        editStatus(parseInt(nStatus))
      }
    </script>
    
    <main class="flex flex-col">
      <SectionWrapper>
        <Header />
        <div class="px-80 pt-5">
          <div class="bg-base-300">
            <h3 class="p-5 font-bold">REQUEST DETAILS</h3>
    
            <div class="flex w-auto justify-center bg-slate-200">
              <div class="flex flex-col">
                <h1 class="p-1 pt-2 font-bold text-black">REQUEST FOR {requestDetails.doc_ID || ''}</h1>
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
    
                <div class="flex flex-row gap-20">
                  <label class="form-control w-full max-w-xs">
                    <div class="label">
                      <p class="label-text">Payment Method: <span class="font-bold">{requestDetails.payment}</span>   </p>
                    </div>
                    <select class="select select-bordered w-full max-w-xs" bind:value={pstatus} disabled>
                      <option value="" selected>Set Payment Status</option>
                      <option value="Not Paid">Not Paid</option>
                      <option value="Paid">Paid</option>
                    </select>
                  </label>
                  <label class="form-control w-full max-w-xs" on:click={togglePreview}>
                    <div class="label">
                      <span class="label-text">Proof of Payment:</span>
                    </div>
                    {#if imageUrl}
                      <img src={imageUrl} alt="Request Image" class="w-auto h-40 cursor-pointer" />
                    {:else}
                      <p>No image available</p>
                    {/if}
                  
                    {#if showPreview}
                      <div class="fixed top-10 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
                        <div class="relative">
                          <button class="absolute top-0 right-0 text-white px-2 py-1" on:click={togglePreview}>Close</button>
                          <img src={imageUrl} alt="Request Image" class="max-w-lg max-h-lg" />
                        </div>
                      </div>
                    {/if}
                  </label>
    
                  <label class="form-control w-full max-w-xs">
                    <div class="label">
                      <span class="label-text">Select Status:</span >
                    </div>
                    <select class="select select-bordered w-full max-w-xs" bind:value={nstatus} disabled>
                      <option value="" selected>Set Request Status</option>
                      <option value=0>Mark as Pending</option>
                      <option value=1>Mark as to Claim</option>
                      <option value=2>Mark as Complete</option>
                    </select>
                  </label>
                </div>
    
                
                <hr />
    
                <div class="flex flex-row gap-20">
    
    
                </div>
    
                <div class="flex flex-row gap-20 py-5 justify-center">
                  <button class="btn btn-success hover" on:click={submit(nstatus,pstatus)}>Submit</button>
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
    