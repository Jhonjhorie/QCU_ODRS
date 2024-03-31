<script>
// @ts-nocheck

    import SectionWrapper from "../SectionWrapper.svelte";
    import Header from "../Header.svelte";
    import { getAuth} from "firebase/auth";
  import { doc, getDoc, collection, addDoc, Timestamp } from 'firebase/firestore';
  import { db } from "$lib/firebase/firebase";
  import { page } from "$app/stores";
  import StudRfBtn from "./StudRFBtn.svelte";
  import StudDbBtn from "./StudDbBtn.svelte";
  import { goto } from "$app/navigation";
    
    const ReqDoc = $page.params.document;
    let req = "";
    let ReqDocc = ReqDoc;
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

    let studNum = "Loading...";
    let fullName = "Loading...";
    let dept;
    let reqValue = "Select One";
    let phone = "Loading...";
    let error = false;
    let authenticating = false;
    
    const Year = ["1st Year, 1st Sem","1st Year, 2nd Sem", "2nd Year, 1st Sem", "2nd Year, 2nd Sem", "3rd Year, 1st Sem","3rd Year, 2nd Sem", "4th Year, 1st Sem", "4th Year, 2nd Sem", "Irregular"];
    const Cert = ["Certification of Excellence","Certification of Honors", "Certification of High Honors", "Certification of Highest Honors"];
    const today = new Date().toISOString().split("T")[0];
    let sched;
    const datearr = String(today).split('-');
    const month = parseInt(datearr[1]) + 1;

    let maxx = '';
    if(month < 10) maxx = datearr[0] + '-' + '0' + month + '-' + datearr[2]
    else maxx = datearr[0] + '-' + month + '-' + datearr[2]
    
  const auth = getAuth();
  const user = auth.currentUser;

  console.log('user exist:' + user.uid + user.email)
  
  const docRef = doc(db, "students", user.uid);
    if(docRef !== null){
      getDoc(docRef)
    .then((snapshot) => {
      let docSnap = snapshot;
      if (docSnap.exists()) {
        console.log('user existt doc')
        const data = docSnap.data();
        fullName = data.lname + ", " + data.fname + " " + data.mname;
        phone = data.phone_no;
        studNum = data.stud_no;
        dept = data.prog;
      }else{
        console.log('no doc refasd')
      }
    })
    .catch((error) => {
      console.error("Error getting document:", error);
    });
    }

    async function RequestDocBtn() {
      if(authenticating){
      return;
      }
      authenticating = true; 
      try {
        const docReq = await addDoc(collection(db, "docRequests"), {
        doc_ID: ReqDocc,
        dept_Title: dept,
        student_Num: studNum,
        student_Name: fullName,
        phone_num: phone,
        req_data: reqValue,
        status: 0,
        date_Req: Timestamp.fromDate(new Date()),
        sched_Claim: sched
        });
      } catch (err) {
        console.log("There was an auth error", err);
        error = true;
      } finally {
        authenticating = false;
        goto(`/Student/Dashboard`);
      }
    }
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
              <div class="flex flex-row gap-2">
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Student ID:</span>
                      </label>
                  <input type="text" bind:value={studNum} placeholder="Student ID" class="input input-bordered w-3/4" disabled />
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Phone Number:</span>
                      </label>
                    <input type="text" bind:value={phone} placeholder="ex: Last Name, First Name Middle Initial" class="input input-bordered w-3/4" disabled />
                </div>
              </div>
                <div class="form-control mt-2">
                    <label class="label">
                        <span class="label-text">Full Name:</span>
                      </label>
                    <input type="text" bind:value={fullName} placeholder="ex: Last Name, First Name Middle Initial" class="input input-bordered" disabled />
                </div>
                

                {#if req == "Graduated"}
                    <div class="form-control mt-2">
                        <label class="label">
                            <span class="label-text">Year Graduated:</span>
                        </label>
                        <input type="number" bind:value={reqValue} placeholder="ex: 2020" class="input input-bordered"  />
                    </div>
                  
                {/if}
                {#if req == "Undergrad"}
                    <div class="form-control mt-2">
                        <label class="label">
                            <span class="label-text">Last Academic Year Attended:</span>
                        </label>
                        <input type="number" bind:value={reqValue} placeholder="ex: 2020" class="input input-bordered"  />
                    </div>
                 
                {/if}
                {#if req == "YearSem"}
                <div class="form-control mt-2 flex">
                    <div class="dropdown dropdown-top">
                      
                      <!-- svelte-ignore a11y-label-has-associated-control -->
                      <label class="label">
                        <span class="label-text">Year and Sem: </span>
                      </label>
                      <div tabindex="0" role="button" class="btn w-full">{reqValue}</div>
                   
                      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
                      <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-96">
                        {#each Year as item}
                        <li><a on:click={() => reqValue = item}>{item}</a></li>
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
                      <div tabindex="0" role="button" class="btn w-full">{reqValue}</div>
                   
                      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
                      <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-96">
                        {#each Cert as item}
                        <li><a on:click={() => reqValue = item}>{item}</a></li>
                        {/each}
                      </ul>
                    </div>
                    
                </div>
                {/if}
                {#if req == "Authentication"}
                {/if}
                <div class="form-control mt-2 flex flex-row gap-2">
                  <label class="label">
                    <span class="label-text">Date to Claim: </span>
                  </label>
         
                    <input type="date" min={today} class="input bordered w-3/4  items-center flex" max={maxx} bind:value={sched}/>
                    
                </div>
                <div class="form-control my-5 items-end">
                  <button class="btn bg-blue-900 w-60 text-white hover:text-black text-xl glass" on:click={RequestDocBtn}>
                    {#if authenticating}
                    <span class="loading loading-dots loading-md"></span>
                    {:else}
                    Submit
                    {/if}
                  </button>
                </div>
               
              </form>
        
    </div>
    {#if error}
    <div class="absolute bottom-10 w-full flex items-center justify-center">
    <div role="alert" class="alert alert-warning w-1/2">
      <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
      <span>The Information you have entered is not correct!</span>
    </div>
  </div>
    {/if}
    </main>
</SectionWrapper>