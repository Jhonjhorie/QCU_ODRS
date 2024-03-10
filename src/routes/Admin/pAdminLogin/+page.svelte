<script>

    import { goto } from '$app/navigation';
    import Header from '../../../components/pHeader.svelte';

    //Goto pages
    function gotoForgot  () {
                goto('/changepass');
    }

    function gotoAdmin () {
                goto('/Admin/pAdminDashboard');
    }

    // Static variables for email and password
    const correctEmail = 'admin@gmail.com';
    const correctPassword = 'admineduc0101';
    
    let emailInput = '';
    let passwordInput = '';
    let showError = false;
    let showError1 = false;

    function login() {
        if (emailInput === '' || passwordInput === '') {
              showError1 = true;
              setTimeout(() => {
                  showError1 = false;
              }, 3000); 
              return;
          }
        if (emailInput === correctEmail && passwordInput === correctPassword) {
            gotoAdmin();
        } else {
            showError = true;
            setTimeout(() => {
                showError = false;
            }, 3000);
        }
    }
 

</script>

<div class="home">
   <main class=" h-screen w-full bg-slate-300  ">
    <Header/>

    <div class="box h-[400px] w-[400px] bg-white mt-[7%] mx-auto shadow-md rounded-xl  ">
        <div class="text-center pt-[30px]">
                <span class="text-[35px] md:text-[35px] text-black font-bold  ">ADMIN</span>
        </div>

        <label class="input input-bordered flex items-center gap-2 bg-slate-200 w-[80%] mx-auto mt-7 text-black rounded-[5px] border-[0.2px] border-slate-400 h-[13%]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
            <input type="email" class="grow" placeholder="email address" bind:value={emailInput}  required/>
        </label>

        <label class="input input-bordered flex items-center gap-2 bg-slate-200 w-[80%] mx-auto mt-6 text-black rounded-[5px] border-[0.2px] border-slate-400 h-[13%]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path fill-rule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clip-rule="evenodd" /></svg>
            <input type="password" class="grow" placeholder="password" bind:value={passwordInput}  required/>
        </label>

        <div class="mt-3 float-right mr-[40px]"><a href="#" on:click={gotoForgot} class="link text-[14px] no-underline font-medium text-black hover:text-[#000460] hover:underline  ">Forgot Account?</a> <br/></div>


        <center><button on:click={login} class="btn mt-4 w-[80%] bg-[#000460] text-[22px] text-white">Login</button></center>
        {#if showError}
        <div class="w-[400px] mx-auto pt-5">
          <div role="alert" class="alert alert-warning ">
              <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              <span>"Invalid login credentials. Please try again."</span>
          </div>
        </div>
        {/if}
        {#if showError1}
        <div class="w-[400px] mx-auto pt-5">
          <div role="alert" class="alert alert-warning bg-red-400 ">
              <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              <span>"Oops, looks like something is missing!"</span>
          </div>
        </div>
        {/if}
    </div>
        
        
   </main>
</div> 