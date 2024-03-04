
<script>
    import SectionWrapper from "./SectionWrapper.svelte";
    import Header from "./Header.svelte";
    import { goto } from "$app/navigation";
  function gotoLogin() {
		goto('/Login');
	}
</script>

<SectionWrapper>
    <Header />
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
                <input type="text" placeholder="Last Name" class="input input-bordered" required />
              </div>
              <div class="form-control mt-2">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label class="label">
                  <span class="label-text">First Name:</span>
                </label>
                <input type="text" placeholder="Last Name" class="input input-bordered" required />
              </div>
              <div class="form-control mt-2">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label class="label">
                  <span class="label-text">Middle Name:</span>
                </label>
                <input type="text" placeholder="Last Name" class="input input-bordered" required />
              </div>
              <div class="form-control mt-2">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label class="label">
                  <span class="label-text">Address: </span>
                </label>
                <input type="text" placeholder="Address" class="input input-bordered" required />
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
                <input type="number" placeholder="Phone Number" class="input input-bordered no-arrow" required />
              </div>
            
              <div class="form-control mt-2">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label class="label">
                  <span class="label-text">Student Number:</span>
                </label>
                <input type="number" placeholder="Student Number" class="input input-bordered" required />
              </div>
              <div class="form-control mt-2">
              <div class="dropdown dropdown-top">
                
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label class="label">
                  <span class="label-text">Program: </span>
                </label>
                <div tabindex="0" role="button" class="btn w-96">Select One</div>
             
                <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
                <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-96">
                  <li><a>Bachelor Of Early Childhood Education (BECEd)</a></li>
                  <li><a>Bachelor Of Science In Industrial Engineering (IE) </a></li>
 
                  <li><a>Electronics Engineering (BSECE)</a></li>
                  <li><a>Bachelor Of Science In Entrepreneurship (BS Entrep)</a></li>
                  <li><a>Bachelor Of Science In Accountancy (BSA)</a></li>
                  <li><a>Bachelor Of Science In Information Technology</a></li>
                  <li><a>Bachelor Of Science In Information Systems</a></li>
                  <li><a>Bachelor Of Science In Computer Science</a></li>
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
                  <input type="radio" name="radio-10" class="radio checked:bg-green-500" checked />
                </label>
              </div>
              <div class="form-control">
                <label class="label cursor-pointer">
                  <span class="label-text">Graduated (Finished Degree)</span> 
                  <input type="radio" name="radio-10" class="radio checked:bg-blue-500" checked />
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
                <input type="email" placeholder="Email" class="input input-bordered" required />
              </div>
              <div class="form-control mt-2">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label class="label">
                  <span class="label-text">Password</span>
                </label>
                <input type="password" placeholder="Password" class="input input-bordered" required />
              </div>
              <div class="form-control mt-2">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label class="label">
                  <span class="label-text">Confirm Password</span>
                </label>
                <input type="cpassword" placeholder="Confirm Password" class="input input-bordered" required />
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
