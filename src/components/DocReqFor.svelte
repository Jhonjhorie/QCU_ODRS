<script>
    import SectionWrapper from "./SectionWrapper.svelte";
    import Header from "./Header.svelte";
  import { page } from "$app/stores";
  import StudRfBtn from "./StudRFBtn.svelte";
  import StudDbBtn from "./StudDbBtn.svelte";
    
    const ReqDoc = $page.params.document;
    let req = "";
    if(ReqDoc == "Diploma"){
        req = "Graduated";
    }else if(ReqDoc == "TOR(Undergrad)"){
        req = "Undergrad"
    }else if(ReqDoc == "GradeSlip"){
        req = "YearSem"
    }else if(ReqDoc == "Certification"){
        req = "Certification"
    }else if(ReqDoc == "Authentication"){
        req = "Authentication"
    }
    let yearr = "Select Year";
    let semm = "Select Semester";
    let certt = "Select Certification"
    const Year = ["1st Year", "2nd Year", "3rd Year", "4th Year"];
    const Sem = ["1st Sem", "2nd Sem"]
    const Cert = ["Certification of Excellence","Certification of Honors", "Certification of High Honors", "Certification of Highest Honors"];
    let copy ="";

    

</script>

<SectionWrapper>
    <Header />
    <StudDbBtn />

    <StudRfBtn />
    <main class="flex flex-col
    items-center mt-5">
    <div class="card card-compact w-1/3 bg-slate-100 mt-3">
        <h2 class="card-title bg-slate-900 rounded-md px-5 py-5 text-white glass">Request For {ReqDoc}</h2>
        
            <form class="card-body px-5 py-10">
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Student ID:</span>
                      </label>
                  <input type="number" placeholder="Student ID" class="input input-bordered"  />
                </div>
                <div class="form-control mt-2">
                    <label class="label">
                        <span class="label-text">Full Name:</span>
                      </label>
                    <input type="text" placeholder="ex: Last Name, First Name Middle Initial" class="input input-bordered"  />
                </div>

                {#if req == "Graduated"}
                    <div class="form-control mt-2">
                        <label class="label">
                            <span class="label-text">Year Graduated:</span>
                        </label>
                        <input type="number" placeholder="ex: 2020" class="input input-bordered"  />
                    </div>
                  
                {/if}
                {#if req == "Undergrad"}
                    <div class="form-control mt-2">
                        <label class="label">
                            <span class="label-text">Last Academic Year Attended:</span>
                        </label>
                        <input type="number" placeholder="ex: 2020" class="input input-bordered"  />
                    </div>
                 
                {/if}
                {#if req == "YearSem"}
                <div class="form-control mt-2 flex flex-row w-full gap-2">
                    <div class="dropdown dropdown-top w-1/2">
                      
                      <!-- svelte-ignore a11y-label-has-associated-control -->
                      <label class="label">
                        <span class="label-text">Year: </span>
                      </label>
                      <div tabindex="0" role="button" class="btn w-full">{yearr}</div>
                   
                      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
                      <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-96">
                        {#each Year as item}
                        <li><a on:click={() => yearr = item}>{item}</a></li>
                        {/each}
                      </ul>
                    </div>
                    <div class="dropdown dropdown-top w-1/2">
                      
                        <!-- svelte-ignore a11y-label-has-associated-control -->
                        <label class="label">
                          <span class="label-text">Semester: </span>
                        </label>
                        <div tabindex="0" role="button" class="btn w-full">{semm}</div>
                     
                        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
                        <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-96">
                          {#each Sem as item}
                          <li><a on:click={() => semm = item}>{item}</a></li>
                          {/each}
                        </ul>
                      </div>
                </div>
                
                {/if}
                {#if req == "Certification"}
                <div class="form-control mt-2 flex">
                    <div class="dropdown dropdown-top">
                      
                      <!-- svelte-ignore a11y-label-has-associated-control -->
                      <label class="label">
                        <span class="label-text">Certification: </span>
                      </label>
                      <div tabindex="0" role="button" class="btn w-full">{certt}</div>
                   
                      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
                      <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-96">
                        {#each Cert as item}
                        <li><a on:click={() => certt = item}>{item}</a></li>
                        {/each}
                      </ul>
                    </div>
                    
                </div>
                {/if}
                {#if req == "Authentication"}
                {/if}
                <div class="form-control mt-2 flex flex-row gap-2">
                  <label class="label cursor-pointer gap-5">
                    <input type="radio" name="radio-10" class="radio checked:bg-blue-500" required checked value=0 bind:group={copy}/>
                    <span class="label-text">Soft Copy</span> 
                  </label>
                  <label class="label cursor-pointer gap-5">   
                      <input type="radio" name="radio-10" class="radio checked:bg-green-500" required checked value=1 bind:group={copy} />
                      <span class="label-text">Hard Copy</span> 
                  </label>
                </div>
                <div class="form-control my-5 items-end">
                  <button class="btn bg-blue-900 w-60 text-white hover:text-black text-xl glass">Submit</button>
                </div>
               
              </form>
        
    </div>
    </main>
</SectionWrapper>