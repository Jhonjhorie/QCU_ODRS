<script>
    // @ts-nocheck
    import SectionWrapper from "../../../components/SectionWrapper.svelte";
  import Header from "../../../components/Registrar/RegistrarHeader.svelte";
  import Sidebar from "../../../components/Registrar/RegistrarSidebar.svelte";
  import { getAuth, reauthenticateWithCredential, updatePassword, EmailAuthProvider } from 'firebase/auth';

  import { goto } from "$app/navigation";
  import { db } from "$lib/firebase/firebase";
  import { doc, getDoc } from 'firebase/firestore';

  import { onMount } from "svelte";
  
  function gotoDashboard() {
  goto('/Registrar/Dashboard');
  }
  function gotoRequests() {
    goto('/Registrar/Requests');
  }
  function gotoHistory() {
    goto('/Registrar/History');
  }

  /**
 * @type {import("@firebase/auth").User | null}
 */
  let user;
  /**
 * @type {import("@firebase/firestore").DocumentData | null}
 */
  let userData = null;
  /**
 * @type {any}
 */
  let dept;
  /**
 * @type {any}
 */  let oldPasswordError = "";

  let submit = "UPDATE";
  let isSubmitting = false;
  let updateSuccess = false;
  let name;
  let email;
  let newPassword = "";
  let newFullName = "";
  let oldPassword = "";
  let newPasswordConfirmation = "";

  const auth = getAuth();

  onMount(async () => {
    user = auth.currentUser;
    
    if (user) {
      console.log('User exists:', user.uid, user.email);
      const docRef = doc(db, "registrar", user.uid);

      try {
        const snapshot = await getDoc(docRef);
        if (snapshot.exists()) {
          console.log('Document exists');
          const data = snapshot.data();
          console.log('User Department:', data.Dept);
          userData = data;
          dept = data.department_name;
          name = data.fullname;
          email = data.email;
        } else {
          console.log('Document does not exist');
        }
      } catch (error) {
        console.error("Error getting document:", error);
      }
    } else {
      console.log('User not logged in');
    }
  });



  async function updateUserPassword() {
    try {
        if (!user) {
            throw new Error("User not authenticated");
        }

        // Check if new password and confirmation match
        if (newPassword !== newPasswordConfirmation) {
            throw new Error("New password and confirmation do not match");
        }

        // Reauthenticate user with old password
        const credential = EmailAuthProvider.credential(user.email, oldPassword);
        await reauthenticateWithCredential(user, credential);

        // Update password
        await updatePassword(user, newPassword);
        alert("Password updated successfully!");
          
        document.getElementById("my_modal_3").close();
        updateSuccess = true;
        
        isSubmitting = false;
        newFullName = "";
        newPassword = "";
        newPasswordConfirmation = "";
        oldPassword = "";
        setTimeout(() => {
            updateSuccess = false;
        }, 3000); 
    } catch (error) {
        console.error("Error updating password: ", error);
        isSubmitting = false; 
        if (error.code === "auth/wrong-password") {
            oldPasswordError = "Incorrect old password.";
        } else if (error.code === "auth/weak-password") {
            oldPasswordError = "New password is too weak.";
        } else if (error.message === "New password and confirmation do not match") {
            oldPasswordError = "New password and confirmation do not match.";
        } else {
            oldPasswordError = "An error occurred while updating password.";
        }
        setTimeout(() => {
            oldPasswordError = "";
        }, 3000);         
    }           
}


</script>

<main class="flex flex-col">
  <SectionWrapper>
    <Header />
    <div class="flex flex-row gap-5 mx-auto w-full">
        <Sidebar />
        <div class="flex flex-col flex-1 mx-auto w-full">

          <h1 class="p-3 py-5 text-[30px] text-black font-bold">
            REGISTRAR ACCOUNT
          </h1>
            <div class="h-[55vh] w-[50vw]  bg-slate-100 mx-auto rounded-md">

              <h1 class="text-center pt-10 text-black">PROFILE</h1>

              <div class=" flex w-full pl-10 pr-10 pt-5 gap-5">
                
                <div class="w-full p-1">
                  <label class="form-control w-full max-w-xs">
                    <div class="label">
                      <span
                        class="label-text text-black text-[15px] font-medium"
                        >Full name:</span
                      >
                    </div>
                    <input
                    disabled
                      type="text"
                      placeholder="Name"
                      class="text-black bg-slate-300 input w-full max-w-xs shadow-sm border-[0.5px] border-[#0a0a0a2b]"
                      value={name}
                      required
                    />
                  </label>

                  <label class="form-control w-full max-w-xs pt-4">
                    <div class="label">
                      <span
                        class="label-text text-black text-[15px] font-medium"
                        >Email:</span
                      >
                    </div>
                    <input
                      disabled
                      type="text"
                      placeholder="Email"
                      class="text-white bg-slate-300 input w-full max-w-xs shadow-sm border-[0.5px] border-[#0a0a0a2b]"
                      value="{email}" dis
                    />
                  </label>
                </div>
                <div class="w-full p-1">
                  <label class="form-control w-full max-w-xs">
                    <div class="label">
                      <span
                        class="label-text text-black text-[15px] font-medium"
                        >Department:</span
                      >
                    </div>
                    <input
                    disabled
                    bind:value={dept}
                      type="text"
                      placeholder=""
                      class="text-black bg-slate-300 input w-full max-w-xs shadow-sm border-[0.5px] border-[#0a0a0a2b]"
                    />
                  </label>
                  <div class="label">
                    <span
                      class="label-text text-slate-600 text-[15px] font-medium pt-4"
                      >Change password?</span
                    >
                  </div>
                  <div class="float-right">
                    <button
                    onclick="my_modal_3.showModal()"
                      class="h-12 rounded-md w-[45vh] bg-blue-800 hover:bg-info text-slate-200"
                      >UPDATE</button
                    >
                  <!--MODAL-->
                  <dialog id="my_modal_3" class="modal modal1 ">
                    <div class="modal-box absolute h-[64%] w-[30%] justify-center bg-slate-300">
                      <form method="dialog">
                        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-slate-700">✕</button>
                      </form>
                      <h3 class="font-bold text-lg text-center text-slate-800">Change Password?</h3>
                      <div class="w-full  p-5">
                        <label class="form-control w-full max-w-xs ">
                          <div class="label">
                            <span class="label-text text-black text-[15px] font-medium  ">Enter Old Password:</span>
                          </div>
                          <input type="password"  bind:value={oldPassword} class="  text-black bg-slate-100 input w-full max-w-xs shadow-sm border-[0.5px] border-[#0a0a0a36]" />
                        </label>  
                        <label class="form-control w-full max-w-xs ">
                          <div class="label">
                            <span class="label-text text-black text-[15px] font-medium  ">New Password:</span>
                          </div>
                          <input  type="password"  bind:value={newPassword} class="  text-black bg-slate-100 input w-full max-w-xs shadow-sm border-[0.5px] border-[#0a0a0a36]" />
                        </label>  
                        <label class="form-control w-full max-w-xs ">
                          <div class="label">
                            <span class="label-text text-black text-[15px] font-medium  ">Confirm New Password:</span>
                          </div>
                          <input  type="password" bind:value={newPasswordConfirmation}  class="  text-black bg-slate-100 input w-full max-w-xs shadow-sm border-[0.5px] border-[#0a0a0a36]" />
                        </label>    
                         
                        <div class="label">
                          <span class="label-text text-slate-600 text-[13px] font-medium pt-4 ">Update changes? </span>
                        </div>
                       
                          
                         <button on:click={updateUserPassword}  class="h-12 rounded-md w-[93%] bg-slate-900 hover:bg-slate-800 text-slate-200">
                            {#if isSubmitting}
                            <span class="loading loading-dots loading-sm bg-slate-300 w-[18px] "></span>
                        {:else}
                            {submit}
                        {/if}
                        </button>
                         {#if oldPasswordError}
                          <div class=" w-[90%] mt-1">
                             <div class="text-red-600 text-[13px] text-center">{oldPasswordError}</div>
                          </div>
                              
                          {/if} 
                    </div>
                  </dialog>
                  <!--MODAL-->

                  
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
</SectionWrapper>
</main>

<style>
  ::placeholder {
    color: black;
  }
</style>
