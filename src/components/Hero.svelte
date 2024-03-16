<script>
  import { goto } from "$app/navigation";
  import SectionWrapper from "./SectionWrapper.svelte";
  function goToLog() {
		goto('/Login');
	}
 
</script>

<SectionWrapper>
  <div class="absolute top-8 right-10"><p class="text-lg italic text-white">Good Life Start Here!</p></div>
  <div class="hero min-h-screen bg-cover" style="background-image: url('QCU CAMPUS.jpg');">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-center text-neutral-content gap-10">
      <img src="QCULOGO.png" class=" w-52 rounded-lg shadow-2xl" alt="" />
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