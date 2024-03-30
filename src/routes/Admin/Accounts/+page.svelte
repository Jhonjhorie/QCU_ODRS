<script>
// @ts-nocheck
  import PHeader from '../../../components/Admin/pHeader2.svelte';
  import Psidebar from '../../../components/Admin/psidebar.svelte';
  import PBoxesaccounts from '../../../components/Admin/pBoxesaccounts.svelte';
  import { onMount } from 'svelte';
  import { db } from "$lib/firebase/firebase";
  import { collection, getDocs, deleteDoc, doc  } from "firebase/firestore";


// Variable
    /**0
     * @type {any[]}
     */
  let data = [];
  /**
   * @type {{ fullname: any; email: any; department_name: any; } | null}
   */
  let selectedUser = null; 
  let showModal = false;
  let deleting = false;

  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, 'registrar'));
    data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  };
  const showUserDetails = (/** @type {{ fullname: any; 
    email: any; department_name: any; department_name: any; } 
    | null} */ user) => {
    selectedUser = user;
    showModal = true;
  };
  const deleteRegistrarAccount = async () => {
  if (selectedUser && typeof selectedUser.id) { 
    console.log("Deleting user with ID:", selectedUser.id); 
    deleting = true;
    try {
      await deleteDoc(doc(db, 'registrar', selectedUser.id));
      // @ts-ignore
      data = data.filter(user => user.id !== selectedUser.id);
      // Close the modal
      showModal = false;
    } catch (error) {
      console.error("Error deleting user:", error);
    } finally {
      deleting = false; 
    }
  } else {
    console.error("Invalid user ID:", selectedUser); 
  }
};
  

  onMount(fetchData);

</script>


<div class="h-[105vh] w-full bg-slate-300">
  <PHeader/>
  <Psidebar/>

  <div class="ml-[300px] p-5 ">
    <h1 class="pl-0 text-[30px] text-black font-bold">MANAGE ACCOUNTS<span class="float-end text-[20px] text-slate-600">REGISTRARS' ACCOUNT</span></h1>
    <!-- CONTAINER --> 
    <div class="h-[200px] w-[200] flex gap-x-5">
      <PBoxesaccounts/>
     
      
      <!-- registrar --> 
     
      <div class="h-[70vh] w-[80%] bg-slate-100 mx-auto mt-3 rounded-md shadow-md p-5  flex ">     
        <div class="overflow-x-auto  w-[200%]">
          <table class="table ">
            <!-- head -->
            <thead class="top-0 sticky bg-slate-900 z-30">
              <tr>
             
                <th class="text-white text-[15px]">FULL NAME</th>
                <th class="text-white text-[15px]">DEPARTMENT</th>
                <th class="text-white text-[15px]">EMAIL</th>
                <th class="text-white text-[15px]">MANAGE</th>
              </tr>
            </thead>
            <tbody> 
              <!-- row 1 -->
              {#each data as registrar}
              <tr>
              
                <td>
                  <div class="flex items-center gap-3">
                    <div class="avatar">
                      <div class=" w-12 h-12">
                        <img src="/ICON.png" alt=""/>
                      </div>
                    </div>
                   
                    <div>   
                      
                      <div class="text font-bold text-black">{registrar.fullname}</div>
                    
                      <div class="text text-sm opacity-50 text-black font-bold">QCU</div>
                    </div>
                  </div>
                </td>
                <td>
                
                  <span class="badge badge-ghost badge-sm h-7 ">{registrar.department_name}</span>
            
                </td>
                
                <td class="text-black">{registrar.email}</td>
              
                <th>
                 <button on:click={() => showUserDetails(registrar)} class="text-black btn btn-ghost btn-xs hover:bg-[#000450] hover:text-teal-100">DETAILS</button>
                 {#if showModal }
                
                 <dialog id="modal" class="modal" open>

                  <div class="modal-box bg-slate-200">
                    <h3 class="font-bold text-lg text-center w-full text-black ">EDIT REGISTRAR INFORMATION</h3>
                    <div class="">
                     
                        {#if selectedUser}
                        <label class="flex w-full max-w-xs pt-3">
                          <div class="label">
                          <span class="label-text text-black font-medium text-[15px] w-[8vw] ">Fullname :</span>
                          </div>
                          <input bind:value={selectedUser.fullname} type="text" placeholder="" class="bg-slate-300 input input-bordered w-[18vw] max-w-xs border-slate-400 text-black" />  
                        </label>
                        <label class="flex w-full max-w-xs pt-3">
                          <div class="label">
                          <span class="label-text text-black font-medium text-[15px] w-[8vw] ">Email :</span>
                          </div>
                          <input bind:value={selectedUser.email}  type="email" placeholder="" class="bg-slate-300 input input-bordered w-[18vw] max-w-xs border-slate-400 text-black" />  
                        </label>
                        <label class="flex w-full max-w-xs pt-3">
                          <div class="label">
                          <span class="label-text text-black font-medium text-[15px] w-[8vw] ">Department :</span>
                          </div>
                          <input bind:value={selectedUser.department_name}  type="text" placeholder="" class="bg-slate-300 input input-bordered w-[18vw] max-w-xs border-slate-400 text-black" />  
                        </label>
                    {/if}
 

                 
                    </div>
                    <div class="modal-action">
                      <form method="dialog">
                        {#if deleting}
                        <span>Loading...</span>
                       {:else}
                       <button 
                       on:click={() => {
                         const confirmDelete = confirm("Are you sure you want to delete this Registrar Account?");
                         if (confirmDelete) {
                          deleteRegistrarAccount(selectedUser.id);
                           showModal = false; 
                         }
                       }} 
                       class="hover:text-slate-100 hover:bg-red-600 p-1 px-2 rounded-sm duration-200 shadow-md h-[40px]"
                      >
                        Delete
                      </button>
                       {/if}
                        <button on:click={() => showModal = false} class="w-[100px]  bg-slate-700 hover:text-slate-100 hover:bg-slate-500 p-1 px-2 rounded-sm duration-200 shadow-md h-[40px] ">Cancel</button>
                      </form>
                    </div>
                  </div>
                </dialog>

                {/if}
                </th>
              </tr>
     
              {/each}
            </tbody>
            <!-- foot -->     
          </table>
        </div>  
      </div>  

    </div>

   
    
  </div>

</div>
