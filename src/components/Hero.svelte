<script>
  import { goto } from "$app/navigation";
  import Header from "./Header.svelte";
  import SectionWrapper from "./SectionWrapper.svelte";
  
  function goToLog() {
		goto('/Login');
	}
</script>
<SectionWrapper>
  <main class=" flex flex-col">
  <div class="absolute top-24 right-20 bg-slate-100 bg-opacity-30 p-2 rounded-lg"><p class="text-md italic text-white">Good Life Start Here!</p></div>
  <div class="absolute top-56 right-20 bg-slate-100 bg-opacity-30 p-2 rounded-lg"><p class="text-md italic text-white">#QCU1</p></div>
  <div class="absolute top-40 right-20 bg-slate-100 bg-opacity-30 p-2 rounded-lg"><p class="text-md italic text-white">#1 Local University of Employable Graduates</p></div>
  <div class="hero h-[97vh] bg-cover" style="background-image: url('QCU CAMPUS.jpg');">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-center text-neutral-content gap-10">
      <img src="QCULOGO.png" class=" w-64 rounded-lg shadow-3xl p-5 bg-white bg-opacity-30" alt="" />
      <div class="text-left max-w-xl">
        <h1 class="mb-5 text-5xl font-bold">I LOVE YOU MAAM MACEH</h1>
        <p class="mb-5">For Students and Graduates of QCU San Bartolomeo (Main) <br />
          (Bachelor Degree / Traditional Undergrad) <br/>
          For Concerns, email us at registrar@qcu.edu.ph</p>
		<button class="btn btn-outline btn-error" on:click={goToLog}>Get Started</button>
      </div>
    </div>
  </div>
</main>
</SectionWrapper>
