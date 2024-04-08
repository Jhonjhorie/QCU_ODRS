<script>
  import PHeader from '../../../components/Admin/pHeader2.svelte';
  import Psidebar from '../../../components/Admin/psidebar.svelte';
  import PBoxesaccounts from '../../../components/Admin/pBoxesaccounts.svelte';
  import { doc, setDoc, collection } from 'firebase/firestore';
  import { auth } from "$lib/firebase/firebase";
  import { createUserWithEmailAndPassword } from 'firebase/auth';
  import { db } from "$lib/firebase/firebase";
  import { goto } from '$app/navigation';


  let fn = "";
  let un = "";
  let pass = "";
  let cpass = "";
  let dept = "";

  let authenticating = false;
  let error = false;
  let emailError = false;
  let emailErrorInvalid = false;
  let fnerror = false;
  let passerror = false; 
  let depterror = false;
  let missingpasserror = false;

  const departments = ['BECEd', 'BSIE', 'BSECE', 'BS Entrep', 'BSA', 'BSIT', 'BSIS', 'BSCS'];
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  async function handleAuthentication() {
    if(authenticating){
      return;
    }
    authenticating = true; 

    //fullname error
    if (!fn.trim()){
      console.log("fullname is empty!");
      fnerror = true;
      error = true;
      authenticating = false;
      return
    } else {
      fnerror = false;
      error = false;
    }
    //email error
    if (!un.trim() ){
      console.log("Email is empty!");
      emailError = true;
      emailErrorInvalid = false;
      authenticating = false;
      return;
    } else if (!emailRegex.test(un)) {
      console.log("Invalid email format");
      emailErrorInvalid = true;
      emailError = false;
      authenticating = false;
      return;
    } else {
      emailError = false;
      emailErrorInvalid = false;
    }
    //department error
     if (!dept.trim() ) {
      console.log("Select a department");
      depterror = true;
      authenticating = false;
      return
    } else {
      depterror = false;
    }
    //password error
    if (!pass.trim()) {
      console.log("password don't match!");
      missingpasserror = true;
      authenticating = false;
      return
    } else {
      missingpasserror = false;
    }
    //confirm password error
     if (pass !== cpass) {
      console.log("password don't match!");
      passerror = true;
      authenticating = false;
      return
    } else {
      passerror = false;
    }
    
    //add registrar

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, un, pass);
      console.log("userCredential:", userCredential); 
       const user = userCredential.user;

       await Promise.all([
        setDoc(doc(db,'user', user.uid), {
          role: "registrar",
          email: un,
        }),
        setDoc(doc(db, 'registrar', user.uid), {
          email: un,
          fullname: fn,
          department_name: dept,
        }),
        setDoc(doc(db, 'department', user.uid), {
          department_name: dept,
        })
      ]);
      goto('/Admin/Accounts');
      } catch (err) {
      console.log("There was an auth error", err);
      error = true;
  
    } finally {
      authenticating = false;
    }
  
  }

</script>

<style>

</style>


<div class="h-[105vh] w-full bg-slate-300">
  <PHeader/>
  <Psidebar/>

  <div class="ml-[300px] p-5 ">
    <h1 class="pl-0 text-[30px] text-black font-bold">MANAGE ACCOUNTS</h1>
    <!-- CONTAINER --> 
    <div class="  flex gap-x-5">
      <PBoxesaccounts/>
     
      <!--ADD REGISTRAR ACCOUNT-->
      <div class="h-[70vh] w-[80%] bg-slate-100  mt-3 rounded-md shadow-md p-5">
        <div class="w-full pl-10 ">
          <h1 class=" text-slate-900 text-[25px]  font-bold ">ADD REGISTRAR ACCOUNT</h1>
        </div>
        <!--form for registrar entry-->
        <div class=" flex w-full pl-10 pr-10 pt-5 gap-14 ">
            <div class="w-full p-1 ">
              <label class="form-control w-full max-w-xs  ">
                <div class="label">
                  <span class="label-text text-black text-[15px] font-medium ">Full name:</span>
                </div>
                <input bind:value={fn} id="fuln" type="text" placeholder="Type here"  class="{'error'}  text-black bg-slate-300 input w-full max-w-xs shadow-sm border-[0.5px] border-[#0a0a0a2b]" required />
              </label>
              {#if fnerror}
              <div class="text-red-500 text-[12px]">"The full name field is required."</div>
              {/if}

              <label class="form-control w-full max-w-xs pt-4 ">
                <div class="label">
                  <span class="label-text text-black text-[15px] font-medium">Username:</span>
                </div>
                <input bind:value={un} id="emad" type="text" placeholder="name@educ.com"  class="text-black bg-slate-300 input w-full max-w-xs shadow-sm border-[0.5px] border-[#0a0a0a2b]  " required />
                <div class="label">
                  <span class="label-text-alt">
                    {#if emailErrorInvalid}
                    <div class="text-red-500 text-[12px]">"Enter a valid email address."</div>
                    {/if}
                    {#if emailError}
                    <div class="text-red-500 text-[12px]">"Enter a email address."</div>
                    {/if}
                  </span>
                  <span class="label-text-alt text-slate-600">Example@educ.com</span>
                </div>
                   
              
                
              </label>
              <label class="form-control w-full max-w-xs ">
                <div class="label">
                  <span class="label-text text-black text-[15px] font-medium">Department:</span>
                </div>
                  <select id="depart"  bind:value={dept} class="select select-bordered w-full max-w-xs text-black bg-slate-300 shadow-sm border-[0.5px] border-[#0a0a0a2b]" >
                    <option value="" disabled selected hidden class="text-slate-600">Select department</option>
                    {#each departments as department}
                      <option>{department}</option>
                    {/each}
                  </select>
              </label>
              {#if depterror}
              <div class="text-red-500 text-[12px]  ">"Please choose your department."</div>
              {/if}

             
            </div>
            <div class="w-full  p-1">
              <label class="form-control w-full max-w-xs ">
                <div class="label">
                  <span class="label-text text-black text-[15px] font-medium ">Pasword:</span>
                </div>
                <input id="passs" bind:value={pass} type="password" placeholder="Type here"  class="text-black bg-slate-300 input w-full max-w-xs shadow-sm border-[0.5px] border-[#0a0a0a2b]" required/>
              </label>
              {#if missingpasserror}
              <div class="text-red-500 text-[12px] ">"Please input password"</div>
              {/if}
              
              <label class="form-control w-full max-w-xs pt-4">
                <div class="label">
                  <span class="label-text text-black text-[15px] font-medium ">Confirm Pasword:</span>
                </div>
                <input id="cpasss" bind:value={cpass} type="password" placeholder="Type here"  class="text-black bg-slate-300 input w-full max-w-xs shadow-sm border-[0.5px] border-[#0a0a0a2b]" required/>
              </label> 
              {#if missingpasserror}
              <div class="text-red-500 text-[12px] ">"Please input password"</div>
              {/if}
              {#if passerror}
              <div class="text-red-500 text-[12px] ">"Passwords don't match. Please try again."</div>
              {/if}
          
              
            </div>
            
      </div>
          <div class="mt-2 pr-14 float-right ">
            <button on:click={handleAuthentication} class="btn btn-active shadow-md">
              {#if authenticating}
                <span class="loading loading-dots loading-sm bg-slate-300 w-[18px] "></span>
              {:else}
                SUBMIT
              {/if}   
            </button>    
          </div>
          <div class="text-center">
            <!--ERRORS HAPPEN SOMETIMES WHEN WE MADE MISTAKES BUT THAT'S FINE AS LONG YOU STILL LOVE YOUR
              SELF YOU CAN FIX THOSE MISTAKES, BELIEVE IN YOURSELF, SLEEPWELL-->  
              
              
           
          </div>

      </div>  
    
      
  
    </div>

   
    
  </div>

</div>