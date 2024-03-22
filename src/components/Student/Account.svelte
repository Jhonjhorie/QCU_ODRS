
<script>
// @ts-nocheck

  import SectionWrapper from "../SectionWrapper.svelte";
  import Header from "../Header.svelte";
  import StudDbBtn from "./StudDbBtn.svelte";
  import { getAuth } from "firebase/auth";
  import { doc, getDoc, updateDoc } from 'firebase/firestore';
  import { db } from "$lib/firebase/firebase";
  import { error, text } from "@sveltejs/kit";
  let email = "Loading...";
  let ln = "Loading...";
  let fn = "Loading...";
  let mn = "Loading...";
  let addr = "Loading...";
  let phn = "Loading...";
  let stdn = "Loading...";
  let prog = "Loading...";
  let status = "Loading...";
  let emailc = "Loading...";
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

  const auth = getAuth();
  const user = auth.currentUser;

  console.log('user exist:' + user.uid + user.email)
  
  const docRef = doc(db, "students", user.uid);
    if(docRef !== null){
      email = user.email;
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
        }else{
          statusc = "Graduated"
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

  function ChangeLogin(){

  }
</script>

<SectionWrapper>
  <Header />
  <StudDbBtn/>
  <main class="flex flex-col
  items-center mt-5">
        <div class="card card-compact justify-center w-3/4 bg-slate-200 mt-3 ">
        <div class=" bg-slate-900 rounded-md px-5 py-5 text-white glass w-full flex flex-row items-center justify-between">
            <h2 class="card-title">ACCOUNT</h2>
            {#if !edit}
            <div class="btn btn-success glass text-white w-40" on:click={edits}>
                <box-icon name='edit' type='solid' color='#ffffff' ></box-icon>
                Edit Profile
              </div>
              {:else}
              <div class="btn btn-error text-white w-40" on:click={cancel}>
                <box-icon name='window-close' type='solid' color='#ffffff' ></box-icon>
                Cancel Edit
            </div>
              {/if}
            
            
            
        </div>
        <div class="flex flex-row py-5 px-10 shadow-2xl rounded-2xl">
            <div class="flex flex-col gap-1 w-full">
                <div class="form-control">
                  <!-- svelte-ignore a11y-label-has-associated-control -->
                  <label class="label">
                    <span class="label-text font-semibold">Last Name:</span>
                  </label>

                  <input bind:value={ln} type="text" class="{bg} {color} text-sm rounded-md p-3 w-3/4 ml-5 transition duration-300 ease-in-out
                  " disabled={edit ? false : true}>
                  </div>
                  <div class="form-control">
                    <!-- svelte-ignore a11y-label-has-associated-control -->
                    <label class="label">
                      <span class="label-text font-semibold">First Name:</span>
                    </label>
                    <input bind:value={fn} type="text" class="{bg} {color} text-sm rounded-md p-3 transition duration-300 ease-in-out w-3/4 ml-5
                    " disabled={edit ? false : true} />
                    </div>
                    <div class="form-control">
                        <!-- svelte-ignore a11y-label-has-associated-control -->
                        <label class="label">
                          <span class="label-text font-semibold">Middle Name:</span>
                        </label>
                        <input bind:value={mn} type="text" class="{bg} {color} text-sm rounded-md p-3 transition duration-300 ease-in-out w-3/4 ml-5
                        " disabled={edit ? false : true} />
                    </div>
                    <div class="form-control">
                            <!-- svelte-ignore a11y-label-has-associated-control -->
                            <label class="label">
                              <span class="label-text font-semibold">Address:</span>
                            </label>
                            <input bind:value={addr} type="text" class="{bg} {color} text-sm rounded-md p-3 transition duration-300 ease-in-out w-3/4 ml-5
                            " disabled={edit ? false : true} />
                    </div>
                    <div class="form-control">
                        <!-- svelte-ignore a11y-label-has-associated-control -->
                        <label class="label">
                          <span class="label-text font-semibold">Phone Number:</span>
                        </label>
                        <input bind:value={phn} type="text" class="{bg} {color} text-sm rounded-md p-3 transition duration-300 ease-in-out w-3/4 ml-5
                        " disabled={edit ? false : true} />
                </div>
            </div> 
            <div class="flex flex-col gap-1 w-full">
                <div class="form-control">
                    <!-- svelte-ignore a11y-label-has-associated-control -->
                    <label class="label">
                      <span class="label-text font-semibold">Student:</span>
                    </label>
                    <input bind:value={stdn} type="text" class="{bg} {color} text-sm rounded-md p-3 transition duration-300 ease-in-out w-3/4 ml-5
                    " disabled={edit ? false : true} />
                </div>
                <div class="form-control">
                    <div class="dropdown dropdown-top">
                      <!-- svelte-ignore a11y-label-has-associated-control -->
                      <label class="label">
                        <span class="label-text font-semibold">Status: </span>
                      </label>
                      <div tabindex="0" role="button" class="{bg} {color} text-sm rounded-md p-3 transition duration-300 ease-in-out w-3/4 ml-5" disabled={edit ? false : true}>{status}</div>
                   
                      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
                      {#if edit}
                      <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-96"> 
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
                        <span class="label-text font-semibold">Program: </span>
                      </label>
                      <div tabindex="0" role="button" class="{bg} {color} text-sm rounded-md p-3 transition duration-300 ease-in-out w-3/4 ml-5" disabled={edit ? false : true}>{prog}</div>
                   
                      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
                      {#if edit}
                      <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-96"> 
                        {#each progs as progv}
                          <li><a on:click={() => prog = progv}>{progv}</a></li>
                        {/each}
                      </ul>
                      {/if}
                      </div>
                    </div>
                    <div class="form-control justify-center mt-8 ml-5 items-end">
                      <!-- svelte-ignore a11y-label-has-associated-control -->
                      <div class="btn bg-blue-800 glass   text-white group hover:text-black w-60" on:click={ChangeLogin}>
                        <box-icon name='edit' type='solid' color='#ffffff' class="bg-transparent group-hover:bg-black p-1 w-8 h-8 rounded transition duration-300" ></box-icon>
                         Edit Login Credentials
                     </div>
                  </div>
                {#if edit}
                <div class="flex flex-col gap-1 w-full items-end justify-center mt-5">
                  <div class="btn bg-slate-800 btn-success glass text-white w-60" on:click={saveUpdate}>
                     <box-icon name='edit' type='solid' color='#ffffff' ></box-icon>
                      Update Profile
                  </div>
                </div>
                {/if}
            </div>

          </div>
    </div>
</main>
</SectionWrapper>
