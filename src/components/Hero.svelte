<script>
  import { goto } from "$app/navigation";
  import Header from "./Header.svelte";
  import SectionWrapper from "./SectionWrapper.svelte";
  
  function goToLog() {
		goto('/Login');
	}
</script>
<SectionWrapper>
  <div class="bg-slate-100 w-full h-8"></div>
  <div class="absolute top-2 right-10"><p class="text-md italic text-blank">Good Life Start Here!</p></div>
  <div class="hero min-h-[95vh] bg-cover" style="background-image: url('QCU CAMPUS.jpg');">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-center text-neutral-content gap-10">
      <img src="QCULOGO.png" class=" w-64 rounded-lg shadow-3xl p-5 bg-white bg-opacity-50" alt="" />
      <div class="text-left max-w-xl">
        <h1 class="mb-5 text-5xl font-bold">I LOVE YOU MAAM MACEH</h1>
        <p class="mb-5">For Students and Graduates of QCU San Bartolomeo (Main) <br />
          (Bachelor Degree / Traditional Undergrad) <br/>
          For Concerns, email us at registrar@qcu.edu.ph</p>
		<button class="btn btn-outline btn-error" on:click={goToLog}>Get Started</button>
      </div>
    </div>
  </div>
</SectionWrapper>
