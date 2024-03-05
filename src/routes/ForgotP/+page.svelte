<script>
    import SectionWrapper from "./../../components/SectionWrapper.svelte";
    import Header from "./../../components/Header.svelte";
    import { goto } from "$app/navigation";


    function gotoLogin() {
		goto('/Login');
	}
</script>

<main class="flex flex-col">
<SectionWrapper>
    <Header/>
    <div class="flex flex-col justify-center items-center h-[70vh]">
        <div role="tablist" class="tabs tabs-lifted">
            <a role="tab" class="tab tab-active font-bold text-lg">Forgot Password</a>
          </div>
        <div class="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form class="card-body">
              <div class="form-control">
                <input type="email" placeholder="Enter Email" class="input input-bordered" required />
              </div>
              
              <div class="form-control mt-4">
                <button class="btn bg-blue-900 text-white hover:text-black text-xl">Submit</button>
              </div>
               <!-- svelte-ignore a11y-label-has-associated-control -->
               <label class="label justify-end">
                <a class="label-text-alt link link-hover" on:click={gotoLogin}>Remember password?</a>
              </label>
          
            </form>
          </div>
      </div>
</SectionWrapper>
</main>