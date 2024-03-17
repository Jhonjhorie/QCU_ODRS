<script>
    import SectionWrapper from "../../components/SectionWrapper.svelte";
</script>

<main class="flex flex-col">
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
            <a role="tab" class="tab tab-active font-bold text-lg">Change Password</a>
          </div>
        <div class="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form class="card-body">
              <div class="form-control">
                <input type="password" placeholder="Type New Password" class="input input-bordered" required />
              </div>
              <div class="form-control mt-2">
                <input type="password" placeholder="Confirm New Password" class="input input-bordered" required />
              </div>
              
              <div class="form-control mt-4">
                <button class="btn bg-blue-900 text-white hover:text-black text-xl">Submit</button>
              </div>
               <!-- svelte-ignore a11y-label-has-associated-control -->
          
            </form>
          </div>
      </div>
</SectionWrapper>
</main>