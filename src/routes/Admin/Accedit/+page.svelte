<script>
// @ts-nocheck   
    import PHeader from '../../../components/Admin/pHeader2.svelte';
    import Psidebar from '../../../components/Admin/psidebar.svelte';
    import { EmailAuthProvider, getAuth, reauthenticateWithCredential, updatePassword  } from "firebase/auth";
    import { onMount } from 'svelte';
    // @ts-ignore
    import { doc, getDoc, updateDoc } from 'firebase/firestore';
    import { db } from "$lib/firebase/firebase";

//View

  let email = "loading...";
  let fn = "loading...";
  let emaild;
  let fnd;

  let submit = "UPDATE";
  let isSubmitting = false;
  let updateSuccess = false;
  let newPassword = "";
  let newFullName = "";
  let oldPassword = "";
  let oldPasswordError = "";
    

    const auth = getAuth();
    const user = auth.currentUser;

    // @ts-ignore
    onMount(async () => {
    if (user) {
        const docRef = doc(db, "user", "cHxJxP1NwobZ7afjGWTGI1kMDXJ2");
        const snapshot = await getDoc(docRef);
        if (snapshot.exists()) {
            const data = snapshot.data();
            emaild = data.email;
            fnd = data.fullname;
            fn = fnd;
            email = emaild;
        }
    }
  });

  async function updateUserPassword() {
    try {
        if (!user) {
            throw new Error("User not authenticated");
        }

        const credential = EmailAuthProvider.credential(user.email, oldPassword);
        await reauthenticateWithCredential(user, credential);

        if (!newFullName.trim() && !newPassword.trim()) {
          console.log("Nothing to update");
          oldPasswordError = "Nothing to update.";
          return;
        }

        isSubmitting = true;
        if (newFullName) {
            await updateDoc(doc(db, "user", user.uid), { fullname: newFullName });
            console.log("Full name updated successfully!");
            
           
        }

        if (newPassword) {
            if (!newPassword.trim()) {
                throw new Error("New password cannot be empty");
            }
            await updatePassword(user, newPassword);
            console.log("Password updated successfully!");
          
        }
        document.getElementById("my_modal_3").close();
        updateSuccess = true;
        
        isSubmitting = false;
        newFullName = "";
        newPassword = "";
        oldPassword = "";
        setTimeout(() => {
          updateSuccess = false;
        }, 3000); 
        
    } catch (error) {
       // console.error("Error updating password: ", error);
        isSubmitting = false; 
        if (error.code === "auth/wrong-password") {
            oldPasswordError = "Incorrect old password.";
        }
          else  if (!newFullName.trim() && !newPassword.trim()) {
          console.log("Nothing to update");
          oldPasswordError = "Nothing to update.";
        }
         else if (oldPassword.trim() === "") {
            oldPasswordError = "Old password cannot be empty.";
        } else {
          oldPasswordError = "Incorrect old password.";
        }
        setTimeout(() => {
            oldPasswordError = "";
        }, 3000);         
    }           
}

</script>
<style>
    ::placeholder {
        font-size: 13px;
        color: rgba(0, 0, 0, 0.411);
    }
    :disabled {
      background-color: rgb(210, 209, 209);
      border: 0.5px solid #0a0a0a2b;
      
    }

</style>


<div class="h-[105vh] w-full bg-slate-300  " >
    <PHeader/>
    <Psidebar/>
 
    <div class="ml-[300px] p-5 h-[70vh] ">
        <h1 class="pl-0 text-[30px] text-black font-bold">ADMIN ACCOUNT</h1>
            <div class="  w-[100%] ">

                <!-- Alert if success -->
        
              
                <div class=" h-[64vh] w-[30vw] bg-slate-100 mx-auto mt-10 rounded-md shadow-xl z-10">
                 
                 
                  <!--MODAL-->
                  <button class=" float-right top-0 p-2 cursor-pointer  hover:rounded-sm edit hover:fill-primary" onclick="my_modal_3.showModal()"><box-icon type='solid' name='edit'></box-icon></button>
                  <dialog id="my_modal_3" class="modal modal1 ">
                    <div class="modal-box absolute h-[64%] w-[30%] justify-center bg-slate-300">
                      <form method="dialog">
                        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-slate-700">✕</button>
                      </form>
                      <h3 class="font-bold text-lg text-center text-slate-800">EDIT ACCOUNT DETAIL?</h3>
                      <div class="w-full  p-5">
                        <label class="form-control w-full max-w-xs  ">
                          <div class="label">
                            <span class="label-text text-black text-[15px] font-medium ">New Fullname:</span>
                          </div>
                          <input bind:value={newFullName} type="text" placeholder="type new fullname (optional)"  class=" text-black bg-slate-300 input w-full max-w-xs shadow-sm border-[0.5px] border-[#0a0a0a36]" required />
                        </label>
                        <label class="form-control w-full max-w-xs ">
                          <div class="label">
                            <span class="label-text text-black text-[15px] font-medium  ">Old Password:</span>
                          </div>
                          <input bind:value={oldPassword} type="password" placeholder="type old password (required)"  class="  text-black bg-slate-300 input w-full max-w-xs shadow-sm border-[0.5px] border-[#0a0a0a36]" />
                        </label>  
                        <label class="form-control w-full max-w-xs ">
                          <div class="label">
                            <span class="label-text text-black text-[15px] font-medium  ">New Password:</span>
                          </div>
                          <input bind:value={newPassword} type="password" placeholder="type new password (optional)"  class="  text-black bg-slate-300 input w-full max-w-xs shadow-sm border-[0.5px] border-[#0a0a0a36]" />
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

                    <div class="pt-7 pl-[10%]  ">
                        <img src="/cute.jpg" class=" w-[130px] h-[130px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mx-auto shadow-xl "  alt="pao" />
                    </div>
                    
                  
                        <div class="w-full p-1 ">
                          <label class="form-control w-full max-w-xs mx-auto  ">
                            <div class="label">
                              <span class="label-text text-black text-[15px] font-medium ">Full name:</span>
                            </div>
                            <div ></div>
                            <input bind:value={fn} type="text" placeholder=""  class="text-black bg-slate-300 input w-full max-w-xs shadow-sm border-[0.5px] border-[#0a0a0a2b]" required />
                          </label>
            
                          <label class="form-control w-full max-w-xs pt-4 mx-auto">
                            <div class="label">
                              <span class="label-text text-black text-[15px] font-medium">Email:</span>
                            </div>
                            <input bind:value={email} type="text" placeholder=""  class="text-black bg-slate-300 input w-full max-w-xs shadow-sm border-[0.5px] border-[#0a0a0a2b] " />
                          </label>

                          <label class="form-control w-full max-w-xs  pt-4  mx-auto">
                            <div class="label">
                              <span class="label-text text-black text-[15px] font-medium ">Password: <span class="text-slate-400 font-medium text-[12px] ">(hidden)</span> </span>
                            </div>
                            <input disabled  type="password" placeholder="newpass"  class=" input w-full max-w-xs shadow-sm border-[0.5px] border-[#0a0a0a2b]" />
                          </label>      
                        </div>
                       
                        
                
                </div>

            </div>
            {#if updateSuccess} 
            <div role="alert" class="alert alert-success w-[50%] mx-auto mt-3 z-20 " >
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Account updated successfully!</span>
            </div>
            {/if}
        
    </div>
    

</div>  