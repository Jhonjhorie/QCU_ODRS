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
    

    let ReqDoc = "";
    let req = "";
    let price = "";
    let authenticating2 = true;
    async function fetchData() {
      authenticating2 = true; 
      try {
    const docRef2 = doc(db, "document", $page.params.document);
    if(docRef2 !== null){
      getDoc(docRef2)
    .then((snapshot) => {
      let docSnap = snapshot;
      if (docSnap.exists()) {
        console.log('document existt')
        const data = docSnap.data();
        ReqDoc = data.doc_ID,
        req = data.reqData
        price = data.price
      }else{
        console.log('no doc refasd')
      }
    })
    .catch((error) => {
      console.error("Error getting document:", error);
    });
    }} catch (error) {
        console.error("Error getting documents", error);
      } finally {
        authenticating2 = false;
      }
    }
    fetchData();

    let studNum = "Loading...";
    let fullName = "Loading...";
    let dept;
    let reqValue = "Select One";
    let phone = "Loading...";
    let error = false;
 
    let authenticating = false;
    let mop = "Cash";
    
    const Year = ["1st Year, 1st Sem","1st Year, 2nd Sem", "2nd Year, 1st Sem", "2nd Year, 2nd Sem", "3rd Year, 1st Sem","3rd Year, 2nd Sem", "4th Year, 1st Sem", "4th Year, 2nd Sem", "Irregular"];
    const Cert = ["Certification of Excellence","Certification of Honors", "Certification of High Honors", "Certification of Highest Honors"];
    const today = new Date().toISOString().split("T")[0];
    let sched;
    const datearr = String(today).split('-');
    const month = parseInt(datearr[1]) + 1;

    let maxx = '';
    if(month < 10) maxx = datearr[0] + '-' + '0' + month + '-' + datearr[2]
    else maxx = datearr[0] + '-' + month + '-' + datearr[2]
    
    let input;
    let container;
    let image;
    let placeholder;
	  let showImage = false;

    function onChange() {
      const file = input.files[0];
      
      if (file) {
        showImage = true;

        const reader = new FileReader();
        reader.addEventListener("load", function () {
          image.setAttribute("src", reader.result);
        });
        reader.readAsDataURL(file);
        
        return;
      } 
      showImage = false; 
    }

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
      let schedA = sched.split('-')
      let schedF = schedA[1]+'-'+schedA[2]+'-'+schedA[0];
      if(mop == "Online"){
        authenticating = false;
        model_online.showModal();
      }
      else{
      try {
        const docReq = await addDoc(collection(db, "docRequests"), {
        doc_ID: ReqDoc,
        dept_Title: dept,
        student_Num: studNum,
        student_Name: fullName,
        phone_num: phone,
        req_data: reqValue,
        status: 0,
        date_Req: Timestamp.fromDate(new Date()),
        sched_Claim: schedF,
        payment: mop,
        payment_status:"Not Paid",
        price:price,
        });
      } catch (err) {
        console.log("There was an auth error", err);
        error = true;
      } finally {
        authenticating = false;
        goto(`/Student/Dashboard`);
      }
    }
    }

    let btnColor = "bg-blue-900";
    
</script>

<SectionWrapper>
    <Header />
    <StudDbBtn />

    <StudRfBtn />
    <main class="flex flex-col
    items-center mt-5">
    <div class="card card-compact w-1/3 bg-slate-100 mt-3">
      {#if !authenticating2}
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
                

                {#if req == "yearGrad"}
                    <div class="form-control mt-2">
                        <label class="label">
                            <span class="label-text">Year Graduated:</span>
                        </label>
                        <input type="number" bind:value={reqValue} placeholder="ex: 2020" class="input input-bordered"  />
                    </div>
                  
                {/if}
                {#if req == "lastYear"}
                    <div class="form-control mt-2">
                        <label class="label">
                            <span class="label-text">Last Academic Year Attended:</span>
                        </label>
                        <input type="number" bind:value={reqValue} placeholder="ex: 2020" class="input input-bordered"  />
                    </div>
                 
                {/if}
                {#if req == "yearSem"}
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
                {#if req == "certification"}
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
                {#if req == "authentication"}
                {/if}
                <div class="form-control mt-2 flex flex-row gap-2">
                  <label class="label">
                    <span class="label-text">Date to Claim: </span>
                  </label>
         
                    <input type="date" min={today} class="input bordered w-3/4  items-center flex" max={maxx} bind:value={sched}/>
                    
                </div>
                <div class="flex flex-row gap-4">
                <div class="form-control">
                  <label class="label cursor-pointer gap-4">
                    <span class="label-text">Cash</span> 
                    <input type="radio" on:change={()=>{mop="Cash", btnColor = "bg-blue-900"}} name="radio-10" class="radio checked:bg-blue-500" checked />
                  </label>
                </div>
                <div class="form-control">
                  <label class="label cursor-pointer gap-4">
                    <span class="label-text">Gcash/Maya</span> 
                    <input type="radio" on:change={()=>{mop="Online", btnColor = "bg-green-700"}} name="radio-10" class="radio checked:bg-green-500" />
                  </label>
                </div>
                <div class="form-control">
                  <label class="label gap-10">
                    <span class="label-text">Price</span> 
                    <span class=" font-bold ">{price}</span>
                  </label>
                </div>
                
              </div>
                <div class="form-control my-4 h-14 justify-end items-center flex flex-row gap-1">
                  {#if mop=="Online"}
                  <label class="label flex flex-col items-end">
                    <span class="label-text text-xs">Gcash/Maya:</span>
                    <span class="font-bold text-green-500 mb-2">09193629016 - Timothy O.</span>
                  </label>
                  {:else}
                  <label class="label flex flex-col items-end">
                    <span class="label-text text-xs"></span>
                    <span class="font-bold text-[#677ab0]">Pay as you Claim</span>
                  </label>
                  {/if}

                  <button class="btn {btnColor} w-60 text-white hover:text-black text-xl glass" on:click={RequestDocBtn}>
                    {#if authenticating}
                    <span class="loading loading-dots loading-md"></span>
                    {:else}
                    {#if mop == "Cash"}
                    Submit
                    {:else}
                    Send Receipt
                    {/if}
                    {/if}
                  </button>
                </div>
               
              </form>
          
              {/if}
              {#if authenticating2}
              <div class="h-full flex justify-center items-center">
                <span class="h-14 w-10 loading loading-dots loading-md "></span>
              </div>
              {/if}
              
    </div>
    {#if error}
    <div class="absolute bottom-10 w-full flex items-center justify-center">
    <div role="alert" class="alert alert-warning w-1/2">
      <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
      <span>The Information you have entered is not correct!</span>
    </div>
  </div>
    {/if}
    <!-- Open the modal using ID.showModal() method -->
<dialog id="model_online" class="modal modal-bottom sm:modal-middle sm:w-full min-h-3/4 py-2 sm:p-2">
  <div class="modal-box w-full min-h-full flex flex-col justify-between">
    <div>
    <h3 class="font-bold text-2xl">Confirmation</h3>
    <input
      bind:this={input}
      on:change={onChange}
      type="file"
      class="w-3/4 mb-2 mt-3"
    />
    <div class="w-full h-3/4 overflow-auto">
      <div bind:this={container} class="w-full h-[520px] border-2 border-[#ddd] mt-3 flex items-center justify-center">
        {#if showImage}
          <img bind:this={image} src="" alt="Preview" class="w-full" />
        {:else}
          <span bind:this={placeholder}>Image Preview</span>
        {/if}
      </div>
    </div>
  </div>
  <div class="flex flex-row justify-between items-end">
    <div>
      <label class="label flex flex-col justify-end items-start">
        <span class="label-text text-xs">Gcash/Maya:</span>
        <span class="font-bold text-green-500 mb-2">09193629016 - Timothy O.</span>
      </label>
    </div>
    <div class="modal-action flex flex-col items-end gap-2">
      <span class="label-text text-green-800">Make sure it is readable</span>
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn btn-error">Cancel</button>
        <button class="btn btn-success">Submit</button>
      </form>
    </div>
  </div>
</div>
</dialog>
    </main>
</SectionWrapper>