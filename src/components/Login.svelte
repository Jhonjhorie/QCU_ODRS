<script>
    import SectionWrapper from "./SectionWrapper.svelte";
    import Header from "./Header.svelte";
    import { goto } from "$app/navigation";
  function gotoRegister() {
		goto('/SignUp');
	}
  function gotoForget() {
		goto('/ForgotP');
	}
  function gotoDashb() {
		goto('/StudentDashboard');
	}

</script>

<SectionWrapper>
    <Header />
    <div class="flex flex-col justify-center items-center h-[70vh]">
        <div role="tablist" class="tabs tabs-lifted">
            <a role="tab" class="tab tab-active font-bold text-lg">Login</a>
            <a role="tab" class="tab font-semibold" on:click={gotoRegister}>Register</a>
          </div>
        <div class="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form class="card-body">
              <div class="form-control">
                <input type="email" placeholder="Email" class="input input-bordered" required />
              </div>
              <div class="form-control mt-2">
                <input type="password" placeholder="Password" class="input input-bordered" required />
                
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label class="label justify-end">
                  <a href="/" class="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              
              <div class="form-control mt-">
                <button class="btn bg-blue-900 text-white hover:text-black text-xl">Login</button>
              </div>
              <p class="text-xs text-thin text-slate-500 mt-2
              ">By using this service, you understood and agree to the QCU Online Services Terms of Use and Privacy Statement</p>
            </form>
          </div>
      </div>
</SectionWrapper>