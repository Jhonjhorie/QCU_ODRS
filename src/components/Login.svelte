<script>
// @ts-nocheck

    import SectionWrapper from "./SectionWrapper.svelte";
    import { goto } from "$app/navigation";
  import { authHandlers } from "../store/store";
  function gotoRegister() {
		goto('/Student/SignUp');
	}
  function gotoForget() {
		goto('/Login/ForgotP');
	}

  let email = "";
  let pass = "";
  let error = false;
  let authenticating = false; 

  async function handleAuthentication() {
    if(authenticating){
      return;
    }
    authenticating = true;

    try {
      error = false;
      await authHandlers.login(email, pass);
    }catch (err) {
      console.log("There was an auth error", err);
      error = true;
      authenticating = false;
    }finally{
      authenticating = false;
    }
  }


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
  
    <div class="flex flex-col justify-center items-center h-[70vh]">
        <div role="tablist" class="tabs tabs-lifted">
            <a role="tab" class="tab tab-active font-bold text-lg">Login</a>
            <a role="tab" class="tab font-semibold" on:click={gotoRegister}>Register</a>
          </div>
        <div class="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form class="card-body">
              <div class="form-control">
                <input bind:value={email} type="email" placeholder="Email" class="input input-bordered"  />
              </div>
              <div class="form-control mt-2">
                <input bind:value={pass} type="password" placeholder="Password" class="input input-bordered"  />
                
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label class="label justify-end">
                  <!-- svelte-ignore a11y-click-events-have-key-events -->
                  <a class="label-text-alt link link-hover" on:click={gotoForget}>Forgot password?</a>
                </label>
              </div>
              
              <div class="form-control mt-">
                <button class="btn bg-blue-900 text-white hover:text-black text-xl" on:click={handleAuthentication}>
                  {#if authenticating}
                  <span class="loading loading-dots loading-md"></span>
                  {:else}
                  Login
                  {/if}
                </button>
              </div>
              <p class="text-xs text-thin text-slate-500 mt-2
              ">By using this service, you understood and agree to the QCU Online Services Terms of Use and Privacy Statement</p>
            </form>
         
          </div>
          
      </div>
      {#if error}
      <div class="absolute bottom-10 w-full flex items-center justify-center">
      <div role="alert" class="alert alert-warning w-1/2">
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
        <span>The Information you have entered is not correct!</span>
      </div>
    </div>
      {/if}
</SectionWrapper>

