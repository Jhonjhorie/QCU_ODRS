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
  import { getStorage, ref, uploadBytes,  getDownloadURL } from 'firebase/storage';
     //ito inadd ko 
  import { onMount } from 'svelte';

    let ReqDoc = "";
    let req = "";
    let price = "";
    let wallets = [];
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
    let errorD = false;
  
    let authenticating = false;
    let authenticatingD = false;
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
    
    // Initialize Firebase Storage
    const storage = getStorage();

    async function onChange() {
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
    let schedF;

    
    async function RequestDocBtn() {
    if(req == "authentication"){
      reqValue = "N/A"
    }
      
      authenticating = true;
      
      if(sched != null ){
      let schedA = sched.split('-')
      schedF = schedA[1]+'-'+schedA[2]+'-'+schedA[0];
      }
      if (schedF && reqValue && reqValue != "Select One") { // Check if schedF and reqValue are not null or undefined
    if (mop == "Online") {
      authenticating = false;
      model_online.showModal();
    } else {
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
          payment_status: "Not Paid",
          price: price,
        });
        authenticating = false;
        goto(`/Student/Dashboard`);
      } catch (err) {
        console.log("There was an auth error", err);
        authenticating = false;
        error = true;
      }
    }
      } else {
        console.log("sched or reqValue is null, cannot proceed.");
        authenticating = false;
        error = true;
      }
    }

    async function RequestDocBtnOnline() {
      authenticatingD = true;
      if(sched != null){
      let schedA = sched.split('-')
      schedF = schedA[1]+'-'+schedA[2]+'-'+schedA[0];
      }
      try {
        
        const docReqData = {
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
          payment_status: "Not Paid",
          price: price,
        };

        // Check if an image file is selected and the payment method is "Online"
        if (mop == "Online" && input.files.length > 0 && input != null) {
          const file = input.files[0];
          const storageRef = ref(storage, `images/${file.name}`);
          await uploadBytes(storageRef, file);

          const imageUrl = await getDownloadURL(storageRef);

         
        docReqData.imageUrl = imageUrl;
        const docReq = await addDoc(collection(db, "docRequests"), docReqData);
        authenticatingD = false;
        goto(`/Student/Dashboard`);
        }else{
        console.log("There was an auth error", err);
        authenticatingD = false;
        errorD = true;
        }

        
      } catch (err) {
        console.log("There was an auth error", err);
        authenticatingD = false;
        errorD = true;
      }
    }


    let btnColor = "bg-blue-900";
      //ito din
      const fetchData2 = async () => {
    try {
      const docRef = doc(db, 'wallet', "mXUA8IQeVxN70i8fJRaF");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        wallets = [{ id: docSnap.id, ...docSnap.data() }];
        console.log("Wallets data:", wallets);
        console.log("Wallets number field:", docSnap.data().number);
      } else {
        wallets = [];
      }
    } catch (error) {
      console.error("Error fetching wallet document:", error);
    }
  };
  // tas ito
  onMount(fetchData2);
    

</script>

<SectionWrapper>
    <Header />
    <StudDbBtn />

    <StudRfBtn />
    <main class="flex flex-col
    items-center sm:mt-5 mt-2.5">
    <div class="card card-compact w-full sm:px-1 px-0.5 sm:w-1/3 bg-slate-100">
      {#if !authenticating2}
        <h2 class="card-title bg-slate-900 rounded-md sm:p-5 p-2.5 text-sm sm:text-xl text-white glass">Request For {ReqDoc}</h2>
        
            <form class="card-body px-2 py-5 sm:py-10">
              <div class="flex flex-row gap-2">
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Student ID:</span>
                      </label>
                  <input type="text" bind:value={studNum} placeholder="Student ID" class="input input-bordered w-full text-sm sm:text-md" disabled />
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Phone Number:</span>
                      </label>
                    <input type="text" bind:value={phone} placeholder="ex: Last Name, First Name Middle Initial" class="input input-bordered w-full text-sm sm:text-md" disabled />
                </div>
              </div>
                <div class="form-control sm:mt-2 mt-1">
                    <label class="label">
                        <span class="label-text">Full Name:</span>
                      </label>
                    <input type="text" bind:value={fullName} placeholder="ex: Last Name, First Name Middle Initial" class="input input-bordered text-sm sm:text-md" disabled />
                </div>
                

                {#if req == "yearGrad"}
                    <div class="form-control sm:mt-2 mt-1">
                        <label class="label">
                            <span class="label-text">Year Graduated:</span>
                        </label>
                        <input type="number" bind:value={reqValue} placeholder="ex: 2020" class="input input-bordered text-sm sm:text-md"  />
                    </div>
                  
                {/if}
                {#if req == "lastYear"}
                    <div class="form-control sm:mt-2 mt-1">
                        <label class="label">
                            <span class="label-text text-sm sm:text-md">Last Academic Year Attended:</span>
                        </label>
                        <input type="number" bind:value={reqValue} placeholder="ex: 2020" class="input input-bordered text-sm sm:text-md"  />
                    </div>
                 
                {/if}
                {#if req == "yearSem"}
                <div class="form-control sm:mt-2 mt-1 flex">
                    <div class="dropdown dropdown-top">
                      
                      <!-- svelte-ignore a11y-label-has-associated-control -->
                      <label class="label">
                        <span class="label-text text-sm sm:text-md">Year and Sem: </span>
                      </label>
                      <div tabindex="0" role="button" class="btn w-full text-sm sm:text-md">{reqValue}</div>
                   
                      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
                      <ul tabindex="0" class="dropdown-content z-[99] menu p-2 shadow bg-base-100 rounded-box w-96">
                        {#each Year as item}
                        <li><a on:click={() => reqValue = item}>{item}</a></li>
                        {/each}
                      </ul>
                    </div>
                </div>
                
                {/if}
                {#if req == "certification"}
                <div class="form-control sm:mt-2 mt-1 flex">
                    <div class="dropdown dropdown-top">
                      
                      <!-- svelte-ignore a11y-label-has-associated-control -->
                      <label class="label">
                        <span class="label-text text-sm sm:text-md">Certification: </span>
                      </label>
                      <div tabindex="0" role="button" class="btn w-full text-sm sm:text-md">{reqValue}</div>
                   
                      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
                      <ul tabindex="0" class="dropdown-content z-[99] menu p-2 shadow bg-base-100 rounded-box w-96">
                        {#each Cert as item}
                        <li><a on:click={() => reqValue = item}>{item}</a></li>
                        {/each}
                      </ul>
                    </div>
                    
                </div>
                {/if}
                {#if req == "authentication"}
                {/if}
                <div class="form-control sm:mt-2 mt-1 flex flex-row gap-1 sm:gap-2 justify-between">
                  <label class="label">
                    <span class="label-text text-xs sm:text-md">Date to Claim: </span>
                  </label>
         
                    <input type="date" min={today} class="input bordered sm:w-3/4 w-4/6 items-center flex text-xs sm:text-md" max={maxx} bind:value={sched}/>
                    
                </div>
                <div class="flex flex-row gap-2 sm:gap-8">
                <div class="form-control flex-2">
                  <label class="label cursor-pointer gap-2 sm:gap-4gap-4">
                    <span class="label-text text-xs sm:text-md">Cash</span> 
                    <input type="radio" on:change={()=>{mop="Cash", btnColor = "bg-blue-900"}} name="radio-10" class="radio checked:bg-blue-500" checked />
                  </label>
                </div>
                <div class="form-control flex-2">
                  <label class="label cursor-pointer gap-2 sm:gap-4">
                    <span class="label-text text-xs sm:text-md">Gcash/Maya</span> 
                    <input type="radio" on:change={()=>{mop="Online", btnColor = "bg-green-700"}} name="radio-10" class="radio checked:bg-green-500" />
                  </label>
                </div>
                <div class="form-control flex-1">
                  <label class="label gap-5 flex  flex-row justify-between">
                    <span class="label-text text-xs sm:text-md">Price</span> 
                    <span class=" font-bold ">{price}</span>
                  </label>
                </div>
              </div>
                <div class="form-control mt-1 sm:my-4 h-14 justify-end items-center flex flex-row gap-1">
                  {#if mop=="Online"}
                  <label class="label flex flex-col items-end">

                    <span class="label-text text-xs">Gcash/Maya:</span>
                   
                    <span class="font-bold text-green-500 mb-2">
                      <span id="updatedPhoneNumber">{#if wallets.length > 0}{wallets[0].number}{/if}</span> - Timothy O.
                    </span>
             

                  </label>
                  {:else}
                  <label class="label flex flex-col items-end">
                    <span class="label-text text-xs font-bold text-[#677ab0] text-end">Pay as you Claim</span>
                  
                  </label>
                  {/if}

                  <button class="btn {btnColor} w-32 sm:w-60 text-white hover:text-black sm:text-xl text-md glass" on:click={RequestDocBtn}>
                    {#if authenticating}
                    <span class="loading loading-dots loading-sm sm:loading-md"></span>
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
    <div class="absolute bottom-9 sm:bottom-10 w-full flex justify-center">
      <div role="alert" class="alert alert-warning sm:w-1/2 w-[90%] text-xs sm:text-md flex items-center gap-2 p-2 sm:p-4 sm:rounded-xl rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
        <span class="text-[0.65rem] sm:text-md">Please provide required information!</span>
      </div>
      <button class="btn p-0 sm:w-6 w-5  sm:relative absolute right-2 sm:right-[-29rem]" on:click={() => error = false}><box-icon name='x' type='solid' size='sm'></box-icon></button>

    </div>
    {/if}
    <!-- Open the modal using ID.showModal() method -->
<dialog id="model_online" class="modal modal-bottom sm:modal-middle w-full min-h-full pt-2 sm:px-1 sm:pt-1">
    <div class="modal-box w-full min-h-[75%] flex flex-col gap-1 sm:gap-2 p-3 sm:p-4">
        <h3 class="font-bold text-md sm:text-2xl">Proof of Payment</h3>
        <div class="flex flex-row justify-center items-center w-full">
          <div class="sm:w-[243px] sm:h-[432px] w-[180px] h-[320px] overflow-auto flex items-center justify-center">
              <div bind:this={container} class="w-full h-full border-2 border-[#ddd] flex items-center justify-center">
                {#if showImage}
                  <img bind:this={image} src="" alt="Preview" class="w-full" />
                {:else}
                  <span bind:this={placeholder}>Image Preview</span>
                {/if}
              </div>
          </div>
        </div>
        <label class="form-control w-full my-0 py-0">
          <div class="label">
            <span class="label-text text-xs sm:text-sm">Image</span>
            <span class="label-text-alt text-xs sm:text-sm"></span>
          </div>
          <input
          bind:this={input}
          on:change={onChange}
          type="file"
          class="w-full h-[30px] file-input file-input-bordered text-xs sm:text-sm"
          accept="image/*"
          required
        />
          <div class="label">
            <span class="label-text-alt text-xs sm:text-sm"></span>
            <span class="label-text-alt text-xs sm:text-sm">Make sure it is readable</span>
          </div>
        </label>
        
      <div class="flex flex-row justify-between items-end py-0 my-0">
        <div>
          <!-- svelte-ignore a11y-label-has-associated-control -->
          <label class="label flex flex-col justify-end items-start">
            <span class="label-text text-[0.65rem] sm:text-xs">Gcash/Maya:</span>
            <span class="font-bold text-green-500 text-xs sm:text-sm">09193629016 - Timothy O.</span>
          </label>
        </div>
        <div class="modal-action flex flex-col items-end gap-2">
        
          <form method="dialog">
            <!-- if there is a button in form, it will close the modal -->
            <button class="btn btn-error text-xs sm:text-sm p-2 sm:p-3">Cancel</button>
            <button class="btn btn-success text-xs sm:text-sm p-2 sm:p-3" on:click={RequestDocBtnOnline}>
              {#if authenticatingD}
              <span class="loading loading-dots loading-md"></span>
              {:else}
              Submit
              {/if}
            </button>
          </form>
        </div>
      </div>
    </div>
    
</dialog>
{#if errorD}

    <div class="absolute bottom-9 sm:bottom-10 w-full flex items-center justify-center">
      <div role="alert" class="alert alert-warning sm:w-1/2 w-[90%] text-xs sm:text-md flex items-center gap-2 p-2 sm:p-4 sm:rounded-xl rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
        <span class="text-[0.65rem] sm:text-md">Please Provide a Picture</span>
       
    </div>
   
  </div>
  <button class="btn p-0 sm:w-6 w-5 sm:relative absolute right-2 sm:right-[-29rem]" on:click={() => errorD = false}><box-icon name='x' type='solid' size='sm'></box-icon></button>
    {/if}
    </main>
</SectionWrapper>