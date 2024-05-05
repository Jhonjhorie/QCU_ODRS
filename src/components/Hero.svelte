<script>
  import { goto } from "$app/navigation";
  import Header from "./Header.svelte";
  import SectionWrapper from "./SectionWrapper.svelte";
  
  function goToLog() {
		goto('/Login');
	}
</script>
  <main class="h-full flex flex-col justify-center items-center">
    <div class="hero h-[calc(100vh-23px)] sm:h-[97vh] bg-cover" style="background-image: url('QCU CAMPUS.jpg');">
      <div class="hero-overlay bg-opacity-60">
      </div>
        <div class="hero-content flex-col-reverse sm:flex-row flex text-center text-neutral-content gap-10">
          <img src="QCULOGO.png" class=" sm:w-64 w-48  shadow-3xl p-5 bg-white bg-opacity-30  rounded-full drop-shadow-2xl" alt="" />
          <div class="text-left max-w-xl">
            <h1 class="mt-16 sm:mt-0 mb-3 sm:mb-5 text-white text-4xl sm:text-5xl font-bold">DOCHUB</h1>
            <p class="sm:mb-5 mb-3 sm:text-sm text-xs sm:w-auto w-[80%]">For Students and Graduates of QCU San Bartolomeo (Main) <br />
              (Bachelor Degree / Traditional Undergrad) <br/>
              For Concerns, email us at registrar@qcu.edu.ph</p>
        <button class="btn btn-outline btn-error  sm:p-3 p-2 sm:text-sm text-xs" on:click={goToLog}>Get Started</button>
        
          </div>
        </div>
    </div>
    <div class="absolute top-28 right-5 sm:right-20 bg-slate-100 bg-opacity-30 p-2 rounded-lg">
      <p class="text-xs sm:text-lg italic text-white">Good Life Start Here!</p>
    </div>
    <div class="absolute top-44 right-5 sm:right-20 bg-slate-100 bg-opacity-30 p-2 rounded-lg">
      <p class="text-xs sm:text-lg italic text-white">#1QCU</p>
    </div>
    <div class="absolute top-10 right-5 sm:right-20 bg-slate-100 bg-opacity-30 p-2 rounded-lg">
      <p class="text-xs sm:text-lg italic text-white">#1 Local University of Employable Graduates</p>
    </div>
</main>
