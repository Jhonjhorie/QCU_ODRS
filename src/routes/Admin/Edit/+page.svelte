<script>
    import { goto } from "$app/navigation";
    import PHeader from '../../../components/Admin/pHeader2.svelte';
    import Psidebar from '../../../components/Admin/psidebar.svelte';
    import { onMount } from 'svelte';
    import { db } from '$lib/firebase/firebase';
    import { doc, getDoc, updateDoc } from 'firebase/firestore';

      function gotoDocuments () {
                  goto('/Admin/Documents')
      }
    

    /**
   * @type {string}
   */
     export let documents;

    let documentData = {};

    async function fetchDocument() {
        const documentRef = doc(db, 'document', documents); 
        const documentSnapshot = await getDoc(documentRef);
        if (documentSnapshot.exists()) {
            documentData = documentSnapshot.data();
        }
    }

    onMount(fetchDocument);

    async function updateDocument() {
        const documentRef = doc(db, 'document', documents);
        await updateDoc(documentRef, documentData);
        goto('/Admin/Documents');
    }
  </script>
  <style>
    ::placeholder{
      color: black;
    }
  </style>

  <div class="h-[105vh] w-full bg-slate-300">
      <PHeader/>
      <Psidebar/>
    
      <div class="ml-[300px] p-5 ">
        <h1 class="pl-0 text-[30px] text-black font-bold">MANAGE DOCUMENT</h1>
          
          <div class="h-[60vh] w-[67%] bg-slate-100  rounded-md shadow-md p-5 mx-auto mt-10">
              <div class="w-full pl-10 ">
                <h1 class=" text-slate-900 text-[25px]  font-bold ">DOCUMENT INFORMATION</h1>
              </div>
              <!--form for registrar entry-->
              <div class="flex gap-x-[10vh] w-full pl-[3vw]">
                  <div class="">
                  <label class="form-control w-full max-w-xs pt-5">
                      <div class="label">
                      <span class="label-text text-black font-medium text-[15px]">Title</span>
                      </div>
                      <input bind:value={documentData.doc_ID}> type="text" placeholder="Transcript of Records (TOR)" class="bg-slate-300 input input-bordered w-[18vw] max-w-xs border-slate-400 text-black" />  
                  </label>
                  <label class="form-control w-full max-w-xs pt-5">
                      <div class="label">
                      <span class="label-text text-black font-medium text-[15px]">Description</span>
                      </div>
                      <textarea class="textarea textarea-bordered bg-slate-300 w-[18vw] border-slate-400 text-black" placeholder="I LOVE YOU <3"></textarea>  
                  </label>
                  </div>
  
                  <div class="">
                    <label class="form-control w-full max-w-xs pt-5">
                      <div class="label">
                      <span class="label-text text-black font-medium text-[15px]">Price</span>
                      </div>
                      <input type="number" placeholder="310" class="bg-slate-300 input input-bordered w-[18vw] max-w-xs border-slate-400 text-black" />  
                  </label>
                  <label class="form-control w-full max-w-xs pt-5">
                      <div class="label">
                      <span class="label-text text-black font-medium text-[15px]">Requirements</span>
                      </div>
                      <textarea class="textarea textarea-bordered bg-slate-300 h-[10vh] w-[18vw] border-slate-400 text-black" placeholder="Year Graduated and complete address"></textarea>  
                  </label>
                  
                  </div>
              </div>
              <div class="pt-8 pl-2  float-right">
                 
                  <button onclick="my_modal_5.showModal()" class=" btn btn-active shadow-md hover:bg-red-800 ">DELETE</button>
                  <button on:click={gotoDocuments} class="ml-1 mr-14 btn btn-active shadow-md  ">BACK</button>
                  <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
                    <div class="modal-box">
                      <h3 class="font-bold text-lg text-red-700">Delete</h3>
                      <p class="py-4">Are you sure you want to DELETE this information?</p>
                      <div class="modal-action">
                        <form method="dialog">
                          <!-- if there is a button in form, it will close the modal -->
                          <button on:click={gotoDocuments} onclick="my_modal_2.showModal()" class="btn">Yes</button>
                          <button class="btn">Close</button>
                          <dialog id="my_modal_2" class="modal">
                            <div class="modal-box">
                              <p class="py-4">Account DELETED</p>
                            </div>
                            <form method="dialog" class="modal-backdrop">
                              <button>close</button>
                            </form>
                          </dialog>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </div>
                <div class="pt-8 float-right">
                  <button onclick="my_modal_4.showModal()" class="btn btn-active shadow-md hover:bg-green-800">UPDATE</button>
                  <dialog id="my_modal_4" class="modal modal-bottom sm:modal-middle">
                    <div class="modal-box">
                      <h3 class="font-bold text-lg text-green-700">Update</h3>
                      <p class="py-4">Are you sure you want to UPDATE this information?</p>
                      <div class="modal-action">
                        <form method="dialog">
                          <!-- if there is a button in form, it will close the modal -->
                          <button on:click={gotoDocuments} onclick="my_modal_1.showModal()" class="btn">Yes</button>
                          <button class="btn">Close</button>
                          <dialog id="my_modal_1" class="modal">
                            <div class="modal-box">
                              <p class="py-4">Account UPDATED</p>
                            </div>
                            <form method="dialog" class="modal-backdrop">
                              <button>close</button>
                            </form>
                          </dialog>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </div>
          </div>
                  
            </div>
            
   
          
       
  </div>