<script>

  import PHeader from '../../../components/Admin/pHeader2.svelte';
  import Psidebar from '../../../components/Admin/psidebar.svelte';
  import PBoxesaccounts from '../../../components/Admin/pBoxesaccounts.svelte';
  import { onMount } from 'svelte';
  import { auth, db } from "$lib/firebase/firebase";
  import { collection, getDocs, deleteDoc, doc, updateDoc, getDoc } from "firebase/firestore";
  import { reauthenticateWithCredential, EmailAuthProvider, updatePassword } from "firebase/auth";

  

  let newpass = '';
  let adminPassword = '';
  let nothingerror = false;

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

 /* const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, 'registrar'));
    data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  };*/
  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'registrar'));
      data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const showUserDetails = (/** @type {{ fullname: any; 
    email: any; department_name: any; department_name: any; } 
    | null} */ user) => {
    selectedUser = user;
    showModal = true;
  };
  const deleteRegistrarAccount = async () => {// @ts-ignore
  if (selectedUser && typeof selectedUser.id) { // @ts-ignore
    console.log("Deleting user with ID:", selectedUser.id); 
    deleting = true;
    try {// @ts-ignore
      await deleteDoc(doc(db, 'registrar', selectedUser.id));
      // @ts-ignore
      data = data.filter(user => user.id !== selectedUser.id);
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

  const updateRegistrarInformation = async () => {
      try {
          console.log("Updating registrar information...");

          if (!selectedUser) {
              console.error("selectedUser is not available.");
              return;
          }
          const docRef = doc(db, "registrar", selectedUser.id);
          const docSnap = await getDoc(docRef);
          const existingData = docSnap.data();

          //check if the data doesn't change
          // @ts-ignore
          if (selectedUser.fullname === existingData.fullname &&
          // @ts-ignore
              selectedUser.email === existingData.email &&
              // @ts-ignore
              selectedUser.department_name === existingData.department_name) {
              console.log("Selected user's data matches the data in the Firestore document. No update required.");
              nothingerror = true;
              setTimeout(() => {
                nothingerror = false;
              }, 3000);
              return;
          }
          
          // Update registrar information in Firestore
          await updateDoc(doc(db, "registrar", selectedUser.id), {
              fullname: selectedUser.fullname,
              email: selectedUser.email,
              department_name: selectedUser.department_name,
          });
          console.log("Registrar information updated in Firestore.");
          location.reload();

        

          // Close the modal
          showModal = false;
      } catch (error) {
          console.error("Error updating registrar information:", error.message);
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
                        <form on:submit|preventDefault={updateRegistrarInformation}>
                        <label class="flex w-full max-w-xs pt-3">
                          <div class="label">
                          <span class="label-text text-black font-medium text-[15px] w-[8vw] ">Fullname :</span>
                          </div>
                          <input bind:value={selectedUser.fullname} type="text" placeholder="" class="bg-slate-300 input input-bordered w-auto max-w-xs border-slate-400 text-black" />  
                        </label>
                        <label class="flex w-full max-w-xs pt-3">
                          <div class="label">
                          <span class="label-text text-black font-medium text-[15px] w-[8vw] ">Email :</span>
                          </div>
                          <input bind:value={selectedUser.email}  type="email" placeholder="" class="bg-slate-300 input input-bordered w-auto max-w-xs border-slate-400 text-black" />  
                        </label>
                        <label class="flex w-full max-w-xs pt-3">
                          <div class="label">
                          <span class="label-text text-black font-medium text-[15px] w-[8vw] ">Department :</span>
                          </div>
                          <input bind:value={selectedUser.department_name}  type="text" placeholder="" class="bg-slate-300 input input-bordered w-auto max-w-xs border-slate-400 text-black" />  
                        </label>
                        {#if nothingerror}
                          <div id="" class="nochanges text-sm text-red-600 font-normal w-full m-2">
                            <div class="text-center">Nothing to update!</div> 
                          </div>
                        {/if}
                       
                        </form>
                    {/if}
 

                 
                    </div>
                    <div class="modal-action flex justify-around">
              
                      <div class="">
                        <button on:click={updateRegistrarInformation} class="w-[100px] hover:bg-green-600  bg-slate-700 hover:text-slate-100  p-1 px-2 rounded-sm duration-200 shadow-md h-[40px]">
                          Update 
                        </button>
                      </div>
                      <div class="">
                          <form method="dialog">
                            {#if deleting}
                            <span>Loading...</span>
                          {:else}
                          <button 
                          on:click={() => {
                            const confirmDelete = confirm("Are you sure you want to delete this Registrar Account?");
                            if (confirmDelete) {// @ts-ignore
                              deleteRegistrarAccount(selectedUser.id);
                              showModal = false; 
                            }
                          }} 
                          class="hover:text-slate-100 hover:bg-red-600 p-1 px-2  rounded-sm duration-300 shadow-md h-[40px]"
                          >
                            Delete
                          </button>
                      
                        {/if}
                        
                        </form>
                      </div>
                      <div class="">
                        <button on:click={() => showModal = false} class="w-[100px]  bg-slate-700 hover:text-slate-100 hover:bg-slate-500 p-1 px-2 rounded-sm duration-200 shadow-md h-[40px] ">Cancel</button>
                      </div>
                  </div>
                </dialog>

                {/if}
                </th>
              </tr>
     
              {/each}
            </tbody>
      
      <!-- <dialog id="my_modal_pass" class="modal bg-black bg-opacity-85  ">
                <div class="modal-box bg-slate-300">
                  <h3 class="font-bold text-lg text-black">UPDATE REGISTRAR PASSWORD</h3>
                
                  <br>
                  <div class="text-sm font-medium text-black">Enter admin password:</div>
                  <input type="password" class="w-full p-3 bg-slate-200 border border-slate-600 rounded-md" placeholder="Enter admin password">
                  <div class="text-sm font-medium mt-4 text-black">Enter new password:</div>
                  <input type="text" class="w-full p-3 bg-slate-200 border border-slate-600 rounded-md" placeholder="input new user password">

                  <div class="modal-action">
                    <form method="dialog">
                      <button  class="btn hover:bg-green-600 text-white ">Update</button>
                      <button class="btn text-white">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>-->
            
            <!-- foot -->     
          </table>
        </div>  
      </div>  

    </div>

   
    
  </div>

</div>
