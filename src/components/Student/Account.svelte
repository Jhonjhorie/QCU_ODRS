
<script>
// @ts-nocheck

  import SectionWrapper from "../SectionWrapper.svelte";
  import Header from "../Header.svelte";
  import StudDbBtn from "./StudDbBtn.svelte";
  import { getAuth, updateEmail, updatePassword } from "firebase/auth";
  import { doc, getDoc, updateDoc } from 'firebase/firestore';
  import { db } from "$lib/firebase/firebase";
  import { error, text } from "@sveltejs/kit";
  import { authHandlers } from "../../store/store";

  let email;
  let pass;
  let cpass;
  let emailc;
  let ln = "Loading...";
  let fn = "Loading...";
  let mn = "Loading...";
  let addr = "Loading...";
  let phn = "Loading...";
  let stdn = "Loading...";
  let prog = "Loading...";
  let status = "Loading...";
  let lnc = "";
  let fnc = "";
  let mnc = "";
  let addrc = "";
  let phnc = "";
  let stdnc = "";
  let progc = "";
  let statusc = "";
  let edit = false;
  let bg = edit ? 'bg-white' : 'bg-blue-900'
  let color = edit ? 'text-black' : 'text-white';
  let progs = ['Bachelor Of Early Childhood Education (BECEd)', 'Bachelor Of Science In Industrial Engineering (IE)','Electronics Engineering (BSECE)','Bachelor Of Science In Entrepreneurship (BS Entrep)','Bachelor Of Science In Accountancy (BSA)','Bachelor Of Science In Information Technology','Bachelor Of Science In Information Systems','Bachelor Of Science In Computer Science']
  let oldpass;
  let errorA = false;
  let authenticating = false; 
  let succF = false;

 

  const auth = getAuth();
  const user = auth.currentUser;

  console.log('user exist:' + user.uid + user.email)
  
  const docRef = doc(db, "students", user.uid);
    if(docRef !== null){
      emailc = user.email;
      getDoc(docRef)
    .then((snapshot) => {
      let docSnap = snapshot;
      if (docSnap.exists()) {
        console.log('user existt doc')
        const data = docSnap.data();
        lnc = data.lname;
        fnc = data.fname;
        mnc = data.mname;
        addrc = data.addr;
        phnc = data.phone_no;
        stdnc = data.stud_no;
        progc = data.prog;
        statusc = data.status;
        ln = lnc;
        fn = fnc;
        mn = mnc;
        addr = addrc;
        phn = phnc;
        stdn = stdnc;
        prog = progc;
        if(data.status == 0){
          statusc = "Not Graduated";
        }else if(data.status == 1){
          statusc = "Graduated";
        }else{
          statusc = data.status;
        }
        status = statusc;
      }else{
        console.log('no doc refasd')
      }
    })
    .catch((error) => {
      console.error("Error getting document:", error);
    });
    }
  
    async function handleOldPass() {
    if(authenticating){
      return;
    }
    authenticating = true;
    if(pass != null && cpass != null && pass == cpass){
    try {
      errorA = false;
      await authHandlers.login(user.email, oldpass);
        updatePassword(auth.currentUser, pass).catch((err) => {
          console.log("there was an change password error", err)
        });
      
      succF = true;
    }catch (err) {
      console.log("There was an auth error", err);
      errorA = true;
      authenticating = false;
    }finally{
      authenticating = false;
      oldpass ="";
      pass ="";
      cpass ="";
    }
    }else{
      errorA = true;
      authenticating = false;
    }
    }
  function edits() {
    edit = !edit
    bg = edit ? 'bg-white' : 'bg-blue-900'
    color = edit ? 'text-black' : 'text-white'
  }

  function cancel(){
    
    ln = lnc;
    fn = fnc;
    mn = mnc;
    addr = addrc;
    phn = phnc;
    stdn = stdnc;
    prog = progc;
    status = statusc;
    edit = !edit
    color = edit ? 'text-black' : 'text-white'
    bg = edit ? 'bg-white' : 'bg-blue-900'
  }

  async function saveUpdate(){
    try {
    await updateDoc(docRef, {
      fname: fn,
      lname: ln,
      mname: mn,
      addr: addr,
      phone_no: phn,
      stud_no: stdn,
      prog: prog,
      status: status,
    })} catch {
      throw error;
    }finally{
      edit = !edit
      color = edit ? 'text-black' : 'text-white'
      bg = edit ? 'bg-white' : 'bg-blue-900'
    }
  }

</script>
<SectionWrapper>
  <Header />
  <StudDbBtn/>

  <main class="flex flex-col
  items-center mt-2.5 sm:mt-5">
        <div class="card card-compact justify-center w-full sm:px-0 px-1 sm:w-3/4  bg-slate-200 ">
        <div class=" bg-slate-900 rounded-md h-15 sm:p-5 p-2 text-white glass w-full flex flex-row items-center justify-between">
            <h2 class="card-title text-sm sm:text-xl">ACCOUNT</h2>
            {#if !edit}
            <div class="btn btn-success glass text-white w-40 text-xs sm:text-md p-0.5 sm:p-3" on:click={edits}>
                <box-icon name='edit' type='solid' color='#ffffff' class="scale-75 sm:scale-100" ></box-icon>
                Edit Profile
              </div>
              {:else}
              <div class="btn btn-error text-white w-40 text-xs sm:text-md p-0.5 sm:p-3" on:click={cancel}>
                <box-icon name='window-close' type='solid' color='#ffffff' class="scale-75 sm:scale-100" ></box-icon>
                Cancel Edit
            </div>
              {/if}
            
            
            
        </div>
        <div class="flex flex-col sm:flex-row sm:py-5 sm:px-10 py-2 px-5 shadow-2xl rounded-2xl">
            <div class="flex flex-col gap-1 w-full">
                <div class="form-control">
                  <!-- svelte-ignore a11y-label-has-associated-control -->
                  <label class="label">
                    <span class="label-text text-xs sm:text-sm font-semibold">Last Name:</span>
                  </label>

                  <input bind:value={ln} type="text" class="{bg} {color} text-sm rounded-md p-3 sm:w-3/4 w-[90%] ml-5 transition duration-300 ease-in-out
                  " disabled={edit ? false : true} required>
                  </div>
                  <div class="form-control">
                    <!-- svelte-ignore a11y-label-has-associated-control -->
                    <label class="label">
                      <span class="label-text text-xs sm:text-sm  font-semibold">First Name:</span>
                    </label>
                    <input bind:value={fn} type="text" class="{bg} {color} text-sm rounded-md p-3 transition duration-300 ease-in-out sm:w-3/4 w-[90%] ml-5
                    " disabled={edit ? false : true} required/>
                    </div>
                    <div class="form-control">
                        <!-- svelte-ignore a11y-label-has-associated-control -->
                        <label class="label">
                          <span class="label-text text-xs sm:text-sm  font-semibold">Middle Name:</span>
                        </label>
                        <input bind:value={mn} type="text" class="{bg} {color} text-sm rounded-md p-3 transition duration-300 ease-in-out sm:w-3/4 w-[90%] ml-5
                        " disabled={edit ? false : true} required />
                    </div>
                    <div class="form-control">
                      <!-- svelte-ignore a11y-label-has-associated-control -->
                      <label class="label">
                        <span class="label-text  text-xs sm:text-sm font-semibold">Address:</span>
                      </label>
                      <textarea 
                      bind:value={addr} 
                      class="{bg} {color} text-xs sm:text-sm rounded-md p-3 transition duration-300 ease-in-out sm:w-3/4 w-[90%] ml-5" 
                      disabled={edit ? false : true} required 
                      rows="4" 
                      ></textarea>
                    </div>
                    <div class="form-control">
                        <!-- svelte-ignore a11y-label-has-associated-control -->
                        <label class="label">
                          <span class="label-text text-xs sm:text-sm font-semibold">Phone Number:</span>
                        </label>
                        <input bind:value={phn} type="text" class="{bg} {color} text-sm rounded-md p-3 transition duration-300 ease-in-out sm:w-3/4 w-[90%] ml-5
                        " disabled={edit ? false : true} required />
                </div>
            </div> 
            <div class="flex flex-col gap-1 w-full">
                <div class="form-control">
                    <!-- svelte-ignore a11y-label-has-associated-control -->
                    <label class="label">
                      <span class="label-text text-xs sm:text-sm font-semibold">Student Number:</span>
                    </label>
                    <input bind:value={stdn} type="text" class="{bg} {color} text-sm rounded-md p-3 transition duration-300 ease-in-out sm:w-3/4 w-[90%] ml-5
                    " disabled={edit ? false : true} required />
                </div>
                <div class="form-control">
                    <div class="dropdown dropdown-top">
                      <!-- svelte-ignore a11y-label-has-associated-control -->
                      <label class="label">
                        <span class="label-text font-semibold text-xs sm:text-sm">Status: </span>
                      </label>
                      <div tabindex="0" role="button" class="{bg} {color} text-sm rounded-md p-3 transition duration-300 ease-in-out sm:w-3/4 w-[90%] ml-5" disabled={edit ? false : true} required>{status}</div>
                   
                      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
                      {#if edit}
                      <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-70 sm:w-96"> 
                        <li><a on:click={(event) => status = event.target.innerText}>Graduated</a></li>
                        <li><a on:click={(event) => status = event.target.innerText}>Not Graduated</a></li>
                      </ul>
                      {/if}
                    </div>
                   
                </div>
           
                    <div class="form-control">
                      <div class="dropdown dropdown-top">
                        <!-- svelte-ignore a11y-label-has-associated-control -->
                      <label class="label">
                        <span class="label-text text-xs sm:text-sm font-semibold">Program: </span>
                      </label>
                      <div tabindex="0" role="button" class="{bg} {color} text-xs sm:text-sm rounded-md p-3 transition duration-300 ease-in-out sm:w-3/4 w-[90%] ml-5" disabled={edit ? false : true} required>{prog}</div>
                   
                      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
                      {#if edit}
                      <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 text-xs sm:text-sm rounded-box w-70 sm:w-96"> 
                        {#each progs as progv}
                          <li><a on:click={() => prog = progv}>{progv}</a></li>
                        {/each}
                      </ul>
                      {/if}
                      </div>
                    </div>
                    <div class="form-control justify-center sm:mt-5 mt-2 ml-5 items-end">
                      <!-- svelte-ignore a11y-label-has-associated-control -->
                      <div class="btn bg-blue-800 glass text-white group hover:text-black sm:w-60 w-[12.5rem] text-xs sm:text-sm" onclick="my_modal_1.showModal()">
                        <box-icon name='edit' type='solid' color='#ffffff' class="bg-transparent group-hover:bg-black p-1 w-8 h-8 rounded transition duration-300 scale-90 sm:scale-100" ></box-icon>
                         Edit Login Credentials
                     </div>
                  </div>
                {#if edit}
                <div class="flex flex-col gap-1 w-full items-end justify-center sm:mt-5 mt-1.5">
                  <div class="btn bg-slate-800 btn-success glass text-white sm:w-60 w-[12.5rem] text-xs sm:text-sm" on:click={saveUpdate}>
                     <box-icon name='edit' type='solid' color='#ffffff' class="scale-90 sm:scale-100"></box-icon>
                      Update Profile
                  </div>
                </div>
                {/if}
            </div>

          </div>
    </div>
</main>
</SectionWrapper>


<dialog id="my_modal_1" class="modal">
  <div class="modal-box">
    <div class="absolute right-5 p-0 w-10 flex items-center btn" onclick="my_modal_1.close()"><box-icon name='x' type='solid' size='sm'></box-icon></div>
          <form class="card-body flex flex-col gap-2 sm:gap-3 p-2 sm:p-5">
            <h3>Change Login Credentials</h3>
            <label class="label">
              <span class="label-text text-xs sm:text-sm">Old Password:</span>
            </label>
            <div class="form-control">
              <input bind:value={oldpass} type="password" placeholder="Current Password" class="input input-bordered" required /> 
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text text-xs sm:text-sm">New Password:</span>
              </label>
              <input bind:value={pass} type="password" placeholder="New Password" class="input input-bordered" required />   
            </div> 
            <div class="form-control">
              <label class="label">
                <span class="label-text text-xs sm:text-sm">Confirm New Password:</span>
              </label>
              <input bind:value={cpass} type="password" placeholder="Confirm New Password" class="input input-bordered" required />
            </div>
            <div class="form-control mt-2">
              <button class="btn bg-blue-900 text-white hover:text-black text-md sm:text-xl" on:click={handleOldPass}>
                {#if authenticating}
                <span class="loading loading-dots loading-sm sm:loading-md "></span>
                {:else}
                Change Login Credentials
                {/if}
              </button>
            </div>
        </form>
       
        
    </div>
    {#if errorA}
    <div class="absolute bottom-8 sm:bottom-10 w-full flex items-center justify-center">
      <div role="alert" class="alert alert-warning sm:w-1/2 w-[90%] text-xs sm:text-md flex items-center gap-2 p-2 sm:p-4 sm:rounded-xl rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
        <span class="text-[0.65rem] sm:text-md">The Information you have entered is not correct!</span>
        <button class="btn p-0 sm:w-6 w-5  absolute right-2" on:click={() => errorA = false}><box-icon name='x' type='solid' size='sm'></box-icon></button>
      </div>
    </div>
    {/if}
    {#if succF}
    <div class="absolute bottom-8 sm:bottom-10 w-full flex items-center justify-center">
      <div role="alert" class="alert alert-success sm:w-1/2 w-[90%] text-xs sm:text-md flex items-center gap-2 p-2 sm:p-4 sm:rounded-xl rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
        <span class="text-[0.65rem] sm:text-md">Login Credentials Successfully updated</span>
        <button class="btn" onclick="my_modal_1.close()" on:click={() => succF = false}>Close</button>
      </div>
    </div>
    {/if}

</dialog>

