
<script>
// @ts-nocheck

  import SectionWrapper from "../SectionWrapper.svelte";
  import Header from "../Header.svelte";
  import StudDbBtn from "./StudDbBtn.svelte";
  import { getAuth } from "firebase/auth";
  import { doc, getDoc } from 'firebase/firestore';
  import { db } from "$lib/firebase/firebase";
  let email = "";
  let ln = "";
  let fn = "";
  let mn = "";
  let addr = "";
  let phn = "";
  let stdn = "";
  let prog = "";
  let status = "";
  
  const auth = getAuth();
  const user = auth.currentUser;
  if(user !== null){
  console.log('user exist:' + user.uid + user.email)
  
  const docRef = doc(db, "students", user.uid);
    if(docRef !== null){
      email = user.email;
      getDoc(docRef)
    .then((snapshot) => {
      let docSnap = snapshot;
      if (docSnap.exists()) {
        console.log('user existt doc')
        const data = docSnap.data();
        ln = data.lname;
        fn = data.fname;
        mn = data.mname;
        addr = data.addr;
        phn = data.phone_no;
        stdn = data.stud_no;
        prog = data.prog;
        if(data.status == 0){
          status = "Not Graduated";
        }else{
          status = "Graduated"
        }
        
      }else{
        console.log('no doc refasd')
      }
    })
    .catch((error) => {
      console.error("Error getting document:", error);
    });
    }
  }else{
    console.log('no user')
  }
  // let docSnap;

  // if (user !== null) {
  //   email = user.email;
  // }

</script>

<SectionWrapper>
  <Header />
  <StudDbBtn/>
  <main class="flex flex-col
  items-center mt-5">
        <div class="card card-compact justify-center w-3/4 bg-slate-100 mt-3 ">
        <div class=" bg-slate-900 rounded-md px-5 py-5 text-white glass w-full flex flex-row items-center justify-between">
            <h2 class="card-title">ACCOUNT</h2>
            <div class="btn btn-success glass text-white">
                <box-icon name='edit' type='solid' color='#ffffff' ></box-icon>
                Edit Profile
              </div>
        </div>
        <div class="flex flex-row py-5 px-10 shadow-2xl rounded-2xl">
            <div class="flex flex-col gap-1 w-full">
                <div class="form-control">
                  <!-- svelte-ignore a11y-label-has-associated-control -->
                  <label class="label">
                    <span class="label-text font-semibold">Last Name:</span>
                  </label>
                  <input bind:value={ln} type="text" class="bg-slate-300 text-black rounded-md p-3 font-light w-3/4 ml-5
                  " disabled />
                  </div>
                  <div class="form-control">
                    <!-- svelte-ignore a11y-label-has-associated-control -->
                    <label class="label">
                      <span class="label-text font-semibold">First Name:</span>
                    </label>
                    <input bind:value={fn} type="text" class="bg-slate-300 text-black rounded-md p-3 font-light w-3/4 ml-5
                    " disabled />
                    </div>
                    <div class="form-control">
                        <!-- svelte-ignore a11y-label-has-associated-control -->
                        <label class="label">
                          <span class="label-text font-semibold">Middle Name:</span>
                        </label>
                        <input bind:value={mn} type="text" class="bg-slate-300 text-black rounded-md p-3 font-light w-3/4 ml-5
                        " disabled />
                    </div>
                    <div class="form-control">
                            <!-- svelte-ignore a11y-label-has-associated-control -->
                            <label class="label">
                              <span class="label-text font-semibold">Address:</span>
                            </label>
                            <input bind:value={addr} type="text" class="bg-slate-300 text-black rounded-md p-3 font-light w-3/4 ml-5
                            " disabled />
                    </div>
                    <div class="form-control">
                        <!-- svelte-ignore a11y-label-has-associated-control -->
                        <label class="label">
                          <span class="label-text font-semibold">Phone Number:</span>
                        </label>
                        <input bind:value={phn} type="text" class="bg-slate-300 text-black rounded-md p-3 font-light w-3/4 ml-5
                        " disabled />
                </div>
            </div> 
            <div class="flex flex-col gap-1 w-full">
                <div class="form-control">
                    <!-- svelte-ignore a11y-label-has-associated-control -->
                    <label class="label">
                      <span class="label-text font-semibold">Email Address:</span>
                    </label>
                    <input bind:value={email} type="text" class="bg-slate-300 text-black rounded-md p-3 font-light w-3/4 ml-5
                    " disabled />
                </div>
                <div class="form-control">
                    <!-- svelte-ignore a11y-label-has-associated-control -->
                    <label class="label">
                      <span class="label-text font-semibold">Student:</span>
                    </label>
                    <input bind:value={stdn} type="text" class="bg-slate-300 text-black rounded-md p-3 font-light w-3/4 ml-5
                    " disabled />
                </div>
                <div class="form-control">
                    <!-- svelte-ignore a11y-label-has-associated-control -->
                    <label class="label">
                      <span class="label-text font-semibold">Status:</span>
                    </label>
                    <input bind:value={status} type="text" class="bg-slate-300 text-black rounded-md p-3 font-light w-3/4 ml-5
                    " disabled />
                </div>
                <div class="flex flex-col gap-1 w-full">
                    <div class="form-control">
                        <!-- svelte-ignore a11y-label-has-associated-control -->
                        <label class="label">
                          <span class="label-text font-semibold">Program:</span>
                        </label>
                        <input bind:value={prog} type="text" class="bg-slate-300 text-black rounded-md p-3 font-light w-3/4 ml-5
                        " disabled />
                    </div>
                </div>
            </div>

          </div>
    </div>
</main>
</SectionWrapper>
