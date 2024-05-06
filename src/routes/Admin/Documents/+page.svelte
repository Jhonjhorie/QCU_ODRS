<script>
// @ts-nocheck
  import PHeader from '../../../components/Admin/pHeader2.svelte';
  import Psidebar from '../../../components/Admin/psidebar.svelte';
  import { db } from "$lib/firebase/firebase";
  import { collection, getDocs, deleteDoc, doc, updateDoc, getDoc } from "firebase/firestore";
  import { onMount } from 'svelte';
  import { goto } from "$app/navigation";

    function gotoAdds (){
              goto('/Admin/AddDocs')
    }
    function gotoEdit (){
              goto('/Admin/Edit') 
    }

    //local variables
    /**
   * @type {any[]}
   */
    let documents = [];
    let deleting = false;
    let updating = false;
    let documentToDelete = null;
    let reqData = '';
    /**
   * @type {{ id: any; doc_ID: any; price: any; description: any; requirements: any; } | null}
   */
    let documentToUpdate = null;
    let showModal = false;
    let authenticating = false;
    let updated = false;
    let updates = false;
    let wallets = [];
    let showModal2 = document.getElementById("money");
    let shown = showModal2;
    
   
    
    const Requirements_data = ['yearGrad', 'lastYear', 'yearSem', 'certification', 'authentication'];
    //display data ahahah
    const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, 'document'));
    documents = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    };
    
    function closeModal() {
      showModal = false
    }
  
  
    const fetchData2 = async () => {
    try {
        const docRef = doc(db, 'wallet', "mXUA8IQeVxN70i8fJRaF");
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
      
            wallets = [{ id: docSnap.id, ...docSnap.data() }];
            console.log("Wallets data:", wallets);
            console.log("Wallets number field:", docSnap.data().number);
        } else {
    
            wallets = []; 
        }
    } catch (error) {
        console.error("Error fetching wallet document:", error);
    }
    };
    async function updatePhoneNumber(event) {
        event.preventDefault(); 

        try {

            const walletId = wallets[0].id;
            const newData = {
                number: event.target.querySelector('input[type="number"]').value
            };
            await updateDoc(doc(db, 'wallet', walletId), newData);

            console.log('Phone number updated successfully:', newData.number);
            const modal = document.getElementById('money');
            modal.close();
            updates = true;
            setTimeout(() => {
              updates = false;
            }, 3000);
        } catch (error) {
            console.error('Error updating phone number:', error);
        }
    }

    //onclick edit ahahah
    const editDocument = (/** 
    @type {{ id: any; doc_ID: any; price: any; description: any; requirements: any; } | null}
    */ document) => {
    documentToUpdate = document; 
    showModal = true; 
   };

    //onclick update ahahah
    // @ts-ignore
    const updateDocument = async (id, newData) => {
    updating = true;
    if(authenticating){
      return;
    }
    authenticating = true; 
    
    try {
        await updateDoc(doc(db, 'document', id), newData);
        documents = documents.map(document => {
    
          if (document.id === id) {
                return {
                    ...document,
                    ...newData
                };
            }
            else {
                return document;
            }
           

        });
        console.log('Document Updated!');
        showModal = false;
        updated = true;
        
    } catch (error) {
        console.error('Error updating document:', error);
    } finally {
        updating = false;
        authenticating = false;
    }
    setTimeout(() => {
          updated = false;
        }, 3000);

       
};

    //onclick delete ahahaha
    // @ts-ignore
    const deleteDocument = async (id) => {
    deleting = true;
    try {
      await deleteDoc(doc(db, 'document', id));
      documents = documents.filter(document => document.id !== id);
      console.log('Document Deleted!');
    } catch (error) {
      console.error("Error deleting document: ", error);
    } finally {
      deleting = false; 
      documentToDelete = null;
    }
   };



  // Fetch wallet data when the component mounts
  onMount(() => {
    fetchData();  
    fetchData2();

  });



</script>
<style>
    td {
        color: black;
        font-weight: 500;
    }
    th {
        font-size: 15px;
    }
</style>

<div class="h-[105vh] w-full bg-slate-300">
    <PHeader/>
    <Psidebar/>
  
    <div class="ml-[300px] p-5 ">
      <h1 class="pl-0 text-[30px] text-black font-bold">MANAGE DOCUMENT</h1>
      
        <div class="flex w-[100%] justify-between ">
          <div class="pt-2 pb-3">
            <button on:click={gotoAdds} class="btn w-[200px] bg-slate-900 hover:bg-slate-800 text-slate-200">ADD DOCUMENT</button>
          </div>
          <div class="pt-2 pb-3">
            <button onclick="money.showModal()" class="ml-2 btn w-[200px] bg-slate-900 hover:bg-slate-800 text-slate-200">E-Wallet<box-icon name='wallet' type='solid' color='#FFAE00' ></box-icon></button>
          </div>
          {#if updated}
          <div class="absolute w-[30%] right-5 ">
            <div class="w-[100%] bg-green-600 rounded-md flex items-center p-2">
              <box-icon name='check-circle' class="w-10 h-10 ml-2 fill-white bg-green-900 rounded-full  "></box-icon>
              <span class="text-slate-100 text-[17px] font-semibold pl-3"> Document Updated!</span>
            </div>
          </div>
          
          {/if}
          {#if updates}
          <div class="absolute w-[30%] right-5 ">
            <div class="w-[100%] bg-green-600 rounded-md flex items-center p-2">
              <box-icon name='check-circle' class="w-10 h-10 ml-2 fill-white bg-green-900 rounded-full  "></box-icon>
              <span class="text-slate-100 text-[17px] font-semibold pl-3"> E-wallet Updated!</span>
            </div>
          </div>
          {/if}
        
          <dialog id="money" class="modal">
            <div class="modal-box bg-slate-300">
              <div class="flex justify-between">
                <div class="">
                  <h3 class="font-bold text-lg text-center text-slate-950">Input your E-wallet here</h3>
                </div>
               
              </div>   
              <p class="py-4 text-slate-950 ">Phone number:</p>
              {#if wallets.length > 0}
              <form on:submit|preventDefault={updatePhoneNumber} method="dialog">
                  <input type="number" bind:value={wallets[0].number} class="w-full h-10 rounded-md text-black p-2 bg-slate-100 border border-black">
                  <div class="modal-action">
                      <button id="updatenumber" type="submit" class="p-3 rounded-md text-white bg-green-600">UPDATE</button>
                  </div>
              </form>
          {:else}
              <input type="number" class="w-full h-10 rounded-md text-black p-2 bg-slate-100 border border-black">
          {/if}
            </div>
            <form method="dialog" class="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        </div>
        <div class="w-[100%] h-[65vh] bg-slate-100 shadow-md rounded-md ">
          <div class="overflow-x-auto">
            <table class="table">
              <!-- head -->
            <thead class="sticky top-0 bg-slate-900">
              <tr>
                <th class="text-white font-light">Documents</th>
                <th class="text-white font-light">Requirement</th>
                <th class="text-white font-light">Price</th>
                <th class="text-white font-light w-52  ">Manage</th>
              </tr>
            </thead>
            <tbody>
              {#each documents as document}
                <tr>
                  <td>{document.doc_ID}</td>
                  <td>{document.requirements}</td>
                  <td>{document.price}</td>

                  <td><button on:click={() => editDocument(document)} class="hover:text-slate-100 hover:bg-green-600 p-1 px-2 rounded-sm duration-200 shadow-md ">Edit</button>
                    {#if showModal && documentToUpdate.id === document.id}
                      <dialog id="modal" class="modal" open>
                        <div class="modal-box bg-slate-200">
                          <h3 class="font-bold text-lg text-center w-full">EDIT DOCUMENT INFORMATION</h3>
                          <div class="">
                            <div class="">
                              <label class="flex w-full max-w-xs pt-3">
                                <div class="label">
                                <span class="label-text text-black font-medium text-[15px] w-[8vw] ">Title :</span>
                                </div>
                                <input bind:value={documentToUpdate.doc_ID}  type="text" placeholder="" class="bg-slate-300 input input-bordered w-[18vw] max-w-xs border-slate-400 text-black" />  
                              </label>
                              <label class="flex w-full max-w-xs pt-3">
                                <div class="label">
                                <span class="label-text text-black font-medium text-[15px] w-[8vw] ">Price :</span>
                                </div>
                                <input bind:value={documentToUpdate.price}  type="number" placeholder="" class="bg-slate-300 input input-bordered w-[18vw] max-w-xs border-slate-400 text-black" />  
                              </label>
                              <label class="flex w-full max-w-xs pt-3">
                                <div class="label">
                                <span class="label-text text-black font-medium text-[15px] w-[8vw] ">Reqdata :</span>
                                </div>
                                <select bind:value={documentToUpdate.reqData}  class="select select-bordered w-full max-w-xs text-black bg-slate-300 shadow-sm border-[0.5px] border-[#0a0a0a2b]" >
                                  <option value="" disabled selected hidden class="text-slate-600 ">Select requirement data</option>
                                  {#each Requirements_data as Reqdata}
                                    <option>{Reqdata}</option>
                                  {/each}
                                </select>
                              </label>
                            </div>

                            <div class="">
                              <label class="flex w-full max-w-xs pt-3">
                                <div class="label">
                                <span class="label-text text-black font-medium text-[15px] w-[8vw] ">Description :</span>
                                </div>
                                <textarea bind:value={documentToUpdate.description} class="textarea textarea-bordered bg-slate-300   border-slate-400 text-black" placeholder=""></textarea>  
                              </label>
                              <label class="flex w-full max-w-xs pt-3">
                                <div class="label">
                                <span class="label-text text-black font-medium text-[15px] w-[8vw]  ">Requirements :</span>
                                </div>
                                <textarea  bind:value={documentToUpdate.requirements} class="textarea textarea-bordered bg-slate-300 h-[10vh] w-[18vw] border-slate-400 text-black" placeholder=""></textarea>  
                              </label>
                            </div>
                          </div>
                          <div class=" float-right mt-5 ">
                          <button on:click={updateDocument(document.id, documentToUpdate)} class="w-[100px] h-[40px]  bg-slate-700 hover:text-slate-100 hover:bg-blue-600 p-1 px-2 rounded-sm duration-200 shadow-md ">
                          {#if authenticating}
                            <span class="loading loading-dots loading-sm bg-slate-300 w-[18px]  "></span>
                          {:else}
                            Update
                          {/if}   
                          </button>
                          <button on:click={() => showModal = false} class="w-[100px]  bg-slate-700 hover:text-slate-100 hover:bg-slate-500 p-1 px-2 rounded-sm duration-200 shadow-md h-[40px] ">Cancel</button>
                          </div>
                        </div>
                      </dialog>
                    {/if}
                    {#if deleting}
                      <span>Loading...</span>
                     {:else}
                     <button 
                     on:click={() => {
                       const confirmDelete = confirm("Are you sure you want to delete this document?");
                       if (confirmDelete) {
                         deleteDocument(document.id);
                         showModal = false; 
                       }
                     }} 
                     class="hover:text-slate-100 hover:bg-red-600 p-1 px-2 rounded-sm duration-200 shadow-md "
                    >
                      Delete
                    </button>
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