<script>


  import Header from "../../../components/Registrar/RegistrarHeader.svelte";
  import { goto } from "$app/navigation";
  import SectionWrapper from "../../../components/SectionWrapper.svelte";
  function gotoRequests() {
    goto("/Registrar/Requests");
  }
  function gotoHistory() {
    goto("/Registrar/History");
  }

  let status = "select";
</script>

<main class="flex flex-col">
  <SectionWrapper>
    <Header />
    <div class="px-60 pt-5">
      <div class="bg-base-300">
        <h1 class="p-5 font-bold">REQUEST FOR DIPLOMA</h1>

        <div class="flex justify-center bg-slate-200">
          <div class="flex flex-col">
            <h1 class="p-1 pt-2 font-bold">SOFT COPY</h1>
            <div class="flex flex-row gap-20">
              <label class="form-control w-full max-w-xs">
                <div class="label">
                  <span class="label-text">Student Id</span>
                </div>
                <input
                  type="text"
                  placeholder="21-2017"
                  class="input input-bordered w-full max-w-xs"
                  disabled
                />
              </label>
              <label class="form-control w-full max-w-xs">
                <div class="label">
                  <span class="label-text">Full Name</span>
                </div>
                <input
                  type="text"
                  placeholder="Quiling, Jhon Jhorie A."
                  class="input input-bordered w-full max-w-xs text-gray-50"
                  disabled
                />
              </label>
            </div>

            <div class="flex flex-row gap-20">
              <label class="form-control w-full max-w-xs">
                <div class="label">
                  <span class="label-text">Year Graduated</span>
                </div>
                <input
                  type="text"
                  placeholder="2025"
                  class="input input-bordered w-full max-w-xs"
                  disabled
                />
              </label>
              <label class="form-control w-full max-w-xs">
                <div class="label">
                  <span class="label-text">Request</span>
                </div>
                <input
                  type="text"
                  placeholder="Diploma"
                  class="input input-bordered w-full max-w-xs text-gray-50"
                  disabled
                />
              </label>
            </div>

            <hr />

            <div class="flex flex-row gap-20">
              <label class="form-control w-full max-w-xs">
                <div class="label">
                  <span class="label-text">Upload Document</span>
                </div>
                <input
                  type="file"
                  class="file-input file-input-bordered w-full max-w-xs"
                />
              </label>

              <!-- svelte-ignore a11y-label-has-associated-control -->
              <label class="form-control w-full max-w-xs">
                <div class="label">
                  <span class="label-text">Select Status</span>
                </div>
                <details class="dropdown">
                  <summary class="m-1 btn btn-wide">{status}</summary>
                  <ul
                    class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52"
                  >
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <li>
                      <a on:click={() => (status = "Complete")}>Complete</a>
                    </li>
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <li>
                      <a on:click={() => (status = "Pending")}>Pending</a>
                    </li>
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <li><a on:click={() => (status = "Error")}>Error</a></li>
                  </ul>
                </details>
              </label>
            </div>

            <div class="flex flex-row gap-20 py-5 justify-center">
              <button class="btn hover" on:click={gotoHistory}>Submit</button>
              <button class="btn hover" on:click={gotoRequests}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SectionWrapper>
</main>
