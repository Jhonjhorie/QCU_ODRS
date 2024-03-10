
<script>
    import SectionWrapper from "./SectionWrapper.svelte";
    import { goto } from "$app/navigation";
  function gotoLogin() {
		goto('/Student/Login');
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

  let progs = ['Bachelor Of Early Childhood Education (BECEd)', 'Bachelor Of Science In Industrial Engineering (IE)','Electronics Engineering (BSECE)','Bachelor Of Science In Entrepreneurship (BS Entrep)','Bachelor Of Science In Accountancy (BSA)','Bachelor Of Science In Information Technology','Bachelor Of Science In Information Systems','Bachelor Of Science In Computer Science']

</script>

<SectionWrapper>
  <header class="flex flex-col relative z-20 bg-white w-full">
    <div
      class="max-w-[1400px] mx-auto w-full flex items-center justify-between p-4 pt-4"
    >
      <div class="flex justify-center items-center gap-5">
        <a href="/">
          <div class="h-[70px] w-[70px]">
            <img class="bg-contain" src="/QCULOGO.png" alt="Quezon City University" />
          </div>
        </a>
        <div>
          <h3 class="text-2xl font-medium">Quezon City University</h3>
          <p class="text-sm italic">Good Life Start Here!</p>
        </div>
      </div>
    </div>
    
  </header>
  <div class="w-full h-2 bg-blue-900 drop-shadow-md"></div>
    <div class="flex flex-col justify-center items-center h-[80vh]">
      <div role="tablist" class="tabs tabs-lifted">
        <a role="tab" class="tab font-semibold" on:click={gotoLogin}>Login</a>
        <a role="tab" class="tab tab-active font-bold text-lg">Register</a>
      </div>
        <div class="card shrink-0 w-full max-w-6xl shadow-2xl bg-base-100">
            <form class="card-body flex flex-row gap-8">
              <div class="flex flex-col gap-1">
              <h3 class="underline">Personal Information</h3>
              <div class="form-control">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label class="label">
                  <span class="label-text">Last Name:</span>
                </label>
                <input bind:value={ln} type="text" placeholder="Last Name" class="input input-bordered" required />
              </div>
              <div class="form-control mt-2">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label class="label">
                  <span class="label-text">First Name:</span>
                </label>
                <input bind:value={fn} type="text" placeholder="First Name" class="input input-bordered" required />
              </div>
              <div class="form-control mt-2">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label class="label">
                  <span class="label-text">Middle Name:</span>
                </label>
                <input bind:value={mn} type="text" placeholder="Middle Name" class="input input-bordered" required />
              </div>
              <div class="form-control mt-2">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label class="label">
                  <span class="label-text">Address: </span>
                </label>
                <input bind:value={addr} type="text" placeholder="Address" class="input input-bordered" required />
                <p class="label-text-alt text-right text-xs text-thin text-slate-500 mt-1">No. | Street | Barangay | City | Zip Code</p>
   
              </div>
              
            </div>
            <div class="flex flex-col gap-1">
              <h3 class="underline">Educational Information</h3>
              <div class="form-control">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label class="label">
                  <span class="label-text">Phone Number:</span>
                </label>
                <input bind:value={phn} type="number" placeholder="Phone Number" class="input input-bordered no-arrow" required />
              </div>
            
              <div class="form-control mt-2">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label class="label">
                  <span class="label-text">Student Number:</span>
                </label>
                <input bind:value={stdn} type="number" placeholder="Student Number" class="input input-bordered" required />
              </div>
              <div class="form-control mt-2">
              <div class="dropdown dropdown-top">
                
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label class="label">
                  <span class="label-text">Program: </span>
                </label>
                <div tabindex="0" role="button" class="btn w-96">{prog}</div>
             
                <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
                <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-96">
                  {#each progs as progv}
                  <li><a on:click={() => prog = progv}>{progv}</a></li>
                  {/each}
                </ul>
              </div>
              </div>
              <div class="form-control mt-2">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label class="label">
                  <span class="label-text">Status: </span>
                </label>
                <label class="label cursor-pointer">
                  <span class="label-text">Not Graduate (Unfinished Degree)</span> 
                  <input type="radio" name="radio-10" class="radio checked:bg-blue-500" required checked value=0 bind:group={status}/>
                </label>
              </div>
              <div class="form-control">
                <label class="label cursor-pointer">
                  <span class="label-text">Graduated (Finished Degree)</span> 
                  <input type="radio" name="radio-10" class="radio checked:bg-green-500" required checked value=1 bind:group={status} />
                </label>
              </div>
       
              
            </div>
            <div class="flex flex-col gap-1">
              <h3 class="underline">Account Information</h3>
              
              <div class="form-control">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input bind:value={email} type="email" placeholder="Email" class="input input-bordered" required />
              </div>
              <div class="form-control mt-2">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label class="label">
                  <span class="label-text">Password</span>
                </label>
                <input bind:value={pass} type="password" placeholder="Password" class="input input-bordered" required />
              </div>
              <div class="form-control mt-2">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label class="label">
                  <span class="label-text">Confirm Password</span>
                </label>
                <input bind:value={cpass} type="password" placeholder="Confirm Password" class="input input-bordered" required />
              </div>
              
              <div class="form-control mt-5">
                <button class="btn bg-blue-900 text-white hover:text-black text-lg">Register</button>
              </div>
              <p class="text-xs text-thin text-slate-500 mt-2
              ">By using this service, you understood and agree to the QCU Online Services Terms of Use and Privacy Statement</p>
            </div>
            </form>
          </div>
    </div>
</SectionWrapper>
