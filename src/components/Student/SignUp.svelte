
<script>
// @ts-nocheck


  import SectionWrapper from "../SectionWrapper.svelte";
  import { goto } from "$app/navigation";
  import { auth } from "$lib/firebase/firebase";
  import { createUserWithEmailAndPassword } from "firebase/auth";
  import { doc, setDoc } from 'firebase/firestore';
  import { db } from "$lib/firebase/firebase";
  import HeaderBase from "../HeaderBase.svelte";

  
  function gotoLogin() {
		goto('/Login');
	}


  let email = "";
  let pass = "";
  let cpass = "";
  let ln = "";
  let fn = "";
  let mn = "";
  let addr = "";
  let phn = "";
  let stdn = "";
  let prog = "Select Course";
  let status = "";
  let error = false;
  let authenticating = false;

  let progs = ['Bachelor Of Early Childhood Education (BECEd)', 'Bachelor Of Science In Industrial Engineering (IE)','Electronics Engineering (BSECE)','Bachelor Of Science In Entrepreneurship (BS Entrep)','Bachelor Of Science In Accountancy (BSA)','Bachelor Of Science In Information Technology','Bachelor Of Science In Information Systems','Bachelor Of Science In Computer Science']

  async function handleAuthentication() {  
    if(authenticating){
      return;
    }
    authenticating = true; 
    
    try {
      await createUserWithEmailAndPassword(auth,email, pass).then((userCredential) => {
        const user = userCredential.user;
        setDoc(doc(db,'user', user.uid), {
          email: email,
          role: "student"
        })
        setDoc(doc(db, 'students', user.uid), {
          fname: fn,
          lname: ln,
          mname: mn,
          addr: addr,
          phone_no: phn,
          stud_no: stdn,
          prog: prog,
          status: status,
          uid: user.uid
        });
      });
    } catch (err) {
      console.log("There was an auth error", err);
      error = true;
    } finally {
      authenticating = false;
    }
  
  }

</script>

<SectionWrapper>
 <HeaderBase></HeaderBase>
    <div class="flex flex-col mt-11 items-center min-h-[80vh]">
      <div role="tablist" class="tabs tabs-lifted">
        <a role="tab" class="tab font-semibold" on:click={gotoLogin}>Login</a>
        <a role="tab" class="tab tab-active font-bold text-lg">Register</a>
      </div>
        <div class="card shrink-0 w-full max-w-full sm:max-w-6xl shadow-2xl bg-base-100">
            <form class="card-body flex flex-col sm:flex-row gap-8">
              <div class="flex flex-col gap-1">
              <h3 class="underline text-sm sm:text-xl">Personal Information</h3>
              <div class="form-control">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label class="label">
                  <span class="label-text text-xs sm:text-sm">Last Name:</span>
                </label>
                <input bind:value={ln} type="text" placeholder="Last Name" class="input input-bordered text-xs sm:text-sm" required />
              </div>
              <div class="form-control mt-2">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label class="label">
                  <span class="label-text text-xs sm:text-sm">First Name:</span>
                </label>
                <input bind:value={fn} type="text" placeholder="First Name" class="input input-bordered text-xs sm:text-sm" required />
              </div>
              <div class="form-control mt-2">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label class="label">
                  <span class="label-text text-xs sm:text-sm">Middle Name:</span>
                </label>
                <input bind:value={mn} type="text" placeholder="Middle Name" class="input input-bordered  text-xs sm:text-sm" required />
              </div>
              <div class="form-control mt-2">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label class="label">
                  <span class="label-text  text-xs sm:text-sm">Address: </span>
                </label>
                <textarea 
                bind:value={addr} 
                class="input input-bordered resize-none h-20" 
                
                rows="4" ></textarea required>
                <p class="label-text-alt text-right  text-[0.65rem] sm:text-xs text-thin  text-slate-500 mt-1">No. | Street | Barangay | City | Zip Code</p>
   
              </div>
              
            </div>
            <div class="flex flex-col gap-1">
              <h3 class="underline text-sm sm:text-xl">Educational Information</h3>
              <div class="form-control">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label class="label">
                  <span class="label-text  text-xs sm:text-sm">Phone Number:</span>
                </label>
                <input bind:value={phn} type="text" placeholder="Phone Number" class="input input-bordered no-arrow  text-xs sm:text-sm" required />
              </div>
            
              <div class="form-control mt-2">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label class="label">
                  <span class="label-text  text-xs sm:text-sm">Student Number:</span>
                </label>
                <input bind:value={stdn} type="text" placeholder="Student Number" class="input input-bordered  text-xs sm:text-sm" required />
              </div>
              <div class="form-control mt-2">
              <div class="dropdown dropdown-top">
                
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label class="label">
                  <span class="label-text  text-xs sm:text-sm">Program: </span>
                </label>
                <div tabindex="0" role="button" class="btn w-full">{prog}</div>
             
                <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
                <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box text-xs sm:text-sm w-80 sm:w-96">
                  {#each progs as progv}
                  <li><a on:click={() => prog = progv}>{progv}</a></li>
                  {/each}
                </ul>
              </div>
              </div>
              <div class="form-control mt-2">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label class="label">
                  <span class="label-text  text-xs sm:text-sm">Status: </span>
                </label>
                <label class="label cursor-pointer">
                  <span class="label-text  text-xs sm:text-sm">Not Graduate (Unfinished Degree)</span> 
                  <input type="radio" name="radio-10" class="radio checked:bg-blue-500" required checked value="Not Graduated" bind:group={status}/>
                </label>
              </div>
              <div class="form-control">
                <label class="label cursor-pointer">
                  <span class="label-text text-xs sm:text-sm">Graduated (Finished Degree)</span> 
                  <input type="radio" name="radio-10" class="radio checked:bg-green-500 " required checked value="Graduated" bind:group={status} />
                </label>
              </div>
       
              
            </div>
            <div class="flex flex-col gap-1">
              <h3 class="underline text-sm sm:text-xl">Account Information</h3>
              
              <div class="form-control">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label class="label">
                  <span class="label-text text-xs sm:text-sm">Email</span>
                </label>
                <input bind:value={email} type="email" placeholder="Email" class="input input-bordered text-xs sm:text-sm" required />
              </div>
              <div class="form-control mt-2">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label class="label">
                  <span class="label-text text-xs sm:text-sm">Password</span>
                </label>
                <input bind:value={pass} type="password" placeholder="Password" class="input input-bordered text-xs sm:text-sm" required />
              </div>
              <div class="form-control mt-2">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label class="label">
                  <span class="label-text text-xs sm:text-sm">Confirm Password</span>
                </label>
                <input bind:value={cpass} type="password" placeholder="Confirm Password" class="input input-bordered  text-xs sm:text-sm" required />
              </div>
              
              <div class="form-control mt-5">
                <button class="btn bg-blue-900 text-white hover:text-black text-lg" on:click={handleAuthentication}>
                  {#if authenticating}
                  <span class="loading loading-dots loading-md"></span>
                  {:else}
                  Register
                  {/if}</button>
              </div>
              <p class=" text-[0.65rem] sm:text-xs text-thin text-slate-500 mt-2
              ">By using this service, you understood and agree to the 
              <a onclick="terms_modal.showModal()" class="underline">QCU Online Services Terms of Use and Privacy Statement</a>.
            </div>
            </form>
          </div>
    </div>
    <dialog id="terms_modal" class="modal modal-bottom sm:modal-middle w-full min-h-full pt-2 sm:px-1 sm:pt-1">
      <div class="modal-box w-full min-h-[75%] flex flex-col gap-1 sm:gap-2 p-3 sm:p-4">
          <h3 class="font-bold text-md sm:text-2xl">Proof of Payment</h3>
          <div class="overflow-y-auto">
          <div class="flex flex-col justify-center items-center w-full px-3 sm:px-3">
            <p class="text-xs sm:text-sm text-justify">
              <b>Dear QCU Student or Alumni,</b><br/><br/>
              We extend a warm welcome to you as you explore the QCU Online Document Request System. Before you proceed, we want to ensure that you are fully informed about the terms and conditions of use and how we handle your personal information as a valued member of the QCU community.<br/><br/>
              
              <b>Terms of Use:</b><br/>
              As a student or alumni of QCU, by accessing and using the QCU Online Document Request System, you agree to adhere to our Terms of Use. These terms outline the guidelines and expectations for your use of the system, <br/><br/>including but not limited to:<br/>
            </p>
              <ul class="list-disc text-xs sm:text-sm text-justify leading-4 list-inside">
                <li>Your responsibilities and obligations as a user of the system.</li>
                <li>Prohibited actions and activities.</li>
                <li>Intellectual property rights pertaining to the content and materials available through the system.</li>
                <li>Disclaimers and limitations of liability.</li>
              </ul>
              <p class="text-xs sm:text-sm text-justify">
                <br/>
              We encourage you to review these terms carefully to ensure compliance and understanding before utilizing the system's features.<br/><br/>
              
              <b>Privacy Statement:</b><br/>
              At QCU, we prioritize the protection of your privacy and the security of your personal information. Our Privacy Statement governs how we collect, use, disclose, and protect the personal information you provide to us when using the QCU Online Document Request System. 
              <br/><br/>
              This includes:
              </p>
              <ul class="list-disc text-xs sm:text-sm text-justify leading-4 list-inside">
                <li>The types of personal information we collect and the purposes for which we collect it.</li>
                <li>How we use and process your personal information.</li>
                <li>Circumstances under which we may share your personal information with third parties.</li>
                <li>Your rights and options regarding the collection and use of your personal information.</li>
                <li>Our commitment to data security and confidentiality.</li>
              </ul>
              <p class="text-xs sm:text-sm text-justify">
                <br/>
              By continuing to use the QCU Online Document Request System, you indicate your acceptance of our Privacy Statement and consent to the collection, use, and disclosure of your personal information as outlined therein.<br/><br/>
              
              If you have any questions or concerns about our Terms of Use or Privacy Statement, please feel free to reach out to us for clarification.<br/><br/>
              
              Thank you for choosing the QCU Online Document Request System. We are committed to providing you with a seamless and secure document request experience tailored to the needs of our QCU students and alumni community.<br/><br/>
              
              Warm regards,<br/>
              <b>Dead Programmer Society</b>
            </p>
            
            <div class="modal-action">
              <form method="dialog">
                <!-- if there is a button in form, it will close the modal -->
                <button class="btn w-full">I love you Maceh</button>
              </form>
            </div>
          </div>
        </div>
      
      </div>
      <form method="dialog" class="modal-backdrop">
        <button>close</button>
      </form>
  </dialog>
</SectionWrapper>
