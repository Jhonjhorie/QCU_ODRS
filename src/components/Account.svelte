
<script>
    import SectionWrapper from "./SectionWrapper.svelte";
    import { goto } from "$app/navigation";
  import Header from "./Header.svelte";
  import StudDbBtn from "./Student/StudDbBtn.svelte";
  function gotoLogin() {
		goto('/Student/Login');
	}

  let email = "jolina@gmail.com";
  let ln = "Salan";
  let fn = "Jolina";
  let mn = "Flores";
  let addr = "RD. 5 Bagong Silangan Quezon City";
  let phn = "09123456789";
  let stdn = "21-1946";
  let prog = "Bachelor of Science in Information Technology";
  let status = "Student";

</script>

<SectionWrapper>
  <Header />
  <StudDbBtn/>
  <main class="flex flex-col
  items-center mt-5">
        <div class="card card-compact justify-center w-3/4 bg-slate-100 mt-3 ">
        <div class=" bg-slate-900 rounded-md px-5 py-5 text-white glass w-full flex flex-row items-center justify-between">
            <h2 class="card-title">ACCOUNT</h2>
            <div class="btn btn-success glass text-white">
                <box-icon name='edit' type='solid' color='#ffffff' ></box-icon>
                Edit Profile
              </div>
        </div>
        <div class="flex flex-row py-5 px-10 shadow-2xl rounded-2xl">
            <div class="flex flex-col gap-1 w-full">
                <div class="form-control">
                  <!-- svelte-ignore a11y-label-has-associated-control -->
                  <label class="label">
                    <span class="label-text font-semibold">Last Name:</span>
                  </label>
                  <input bind:value={ln} type="text" class="bg-slate-300 text-black rounded-md p-3 font-light w-3/4 ml-5
                  " disabled />
                  </div>
                  <div class="form-control">
                    <!-- svelte-ignore a11y-label-has-associated-control -->
                    <label class="label">
                      <span class="label-text font-semibold">First Name:</span>
                    </label>
                    <input bind:value={fn} type="text" class="bg-slate-300 text-black rounded-md p-3 font-light w-3/4 ml-5
                    " disabled />
                    </div>
                    <div class="form-control">
                        <!-- svelte-ignore a11y-label-has-associated-control -->
                        <label class="label">
                          <span class="label-text font-semibold">Middle Name:</span>
                        </label>
                        <input bind:value={mn} type="text" class="bg-slate-300 text-black rounded-md p-3 font-light w-3/4 ml-5
                        " disabled />
                    </div>
                    <div class="form-control">
                            <!-- svelte-ignore a11y-label-has-associated-control -->
                            <label class="label">
                              <span class="label-text font-semibold">Address:</span>
                            </label>
                            <input bind:value={addr} type="text" class="bg-slate-300 text-black rounded-md p-3 font-light w-3/4 ml-5
                            " disabled />
                    </div>
                    <div class="form-control">
                        <!-- svelte-ignore a11y-label-has-associated-control -->
                        <label class="label">
                          <span class="label-text font-semibold">Phone Number:</span>
                        </label>
                        <input bind:value={phn} type="text" class="bg-slate-300 text-black rounded-md p-3 font-light w-3/4 ml-5
                        " disabled />
                </div>
            </div> 
            <div class="flex flex-col gap-1 w-full">
                <div class="form-control">
                    <!-- svelte-ignore a11y-label-has-associated-control -->
                    <label class="label">
                      <span class="label-text font-semibold">Email Address:</span>
                    </label>
                    <input bind:value={email} type="text" class="bg-slate-300 text-black rounded-md p-3 font-light w-3/4 ml-5
                    " disabled />
                </div>
                <div class="form-control">
                    <!-- svelte-ignore a11y-label-has-associated-control -->
                    <label class="label">
                      <span class="label-text font-semibold">Student:</span>
                    </label>
                    <input bind:value={stdn} type="text" class="bg-slate-300 text-black rounded-md p-3 font-light w-3/4 ml-5
                    " disabled />
                </div>
                <div class="form-control">
                    <!-- svelte-ignore a11y-label-has-associated-control -->
                    <label class="label">
                      <span class="label-text font-semibold">Status:</span>
                    </label>
                    <input bind:value={status} type="text" class="bg-slate-300 text-black rounded-md p-3 font-light w-3/4 ml-5
                    " disabled />
                </div>
                <div class="flex flex-col gap-1 w-full">
                    <div class="form-control">
                        <!-- svelte-ignore a11y-label-has-associated-control -->
                        <label class="label">
                          <span class="label-text font-semibold">Program:</span>
                        </label>
                        <input bind:value={prog} type="text" class="bg-slate-300 text-black rounded-md p-3 font-light w-3/4 ml-5
                        " disabled />
                    </div>
                </div>
            </div>

          </div>
    </div>
</main>
</SectionWrapper>
