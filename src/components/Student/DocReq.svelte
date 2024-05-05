<script>
// @ts-nocheck

    import SectionWrapper from "../SectionWrapper.svelte";
    import Header from "../Header.svelte";
  import { goto } from "$app/navigation";
  import StudDbBtn from "./StudDbBtn.svelte";
  import StudToBtn from "./StudToBtn.svelte";
  import { doc, collection, query, where, getDocs, getDoc } from "firebase/firestore";
  import { db } from "$lib/firebase/firebase";

    let docs = [{id:"Diploma", name:"TOR / Diploma", req:"Graduated and Complete Address"},{id:"TOR(Undergrad)", name:"TOR (Under Graduate)", req:"Last Academic Year Attended and Complete Address"},{id:"GradeSlip", name:"Grade Slip", req:"Academic Year and Semester"},{id:"Certification", name:"Other Certifications", req:"Office requesting the document (e.g., DSWD, CHED)"},{id:"Authentication",name:"Authentication / Certified True Copy", req:"Clear copy of the Document and bring the Original Copy upon Claiming"}]

    let authenticating = false;

    async function fetchData() {
      if(authenticating){
      return;
      }
      authenticating = true; 
      try {
          const q = query(collection(db, "document"));
          const querySnapshot = await getDocs(q);
          console.log('document exists doc');
          docs = querySnapshot.docs.map(doc => {
          const data = doc.data();
          return {
            id: doc.id,
            name: data.doc_ID,
            price: data.price,
            req:data.requirements,
          };
        });
      } catch (error) {
        console.error("Error getting documents", error);
      } finally {
        authenticating = false;
      }
}
fetchData();

</script>

<SectionWrapper>
    <Header />
    <StudDbBtn />
    <StudToBtn />
    <main class="flex flex-col
    items-center  sm:mt-5 mt-2.5">
        <div class="card sm:w-3/4 w-[95%] h-10 sm:h-28 shadow-xl image-full">
            <figure><img src="/QCU-Build.png" class="w-full h-full" alt="QCU" /></figure>
            <div class="card-body flex justify-center items-center p-2 sm:p-8">
            <h1 class="card-title sm:text-5xl text-sm font-light italic">ONLINE DOCUMENT REQUEST SYSTEM</h1>
            
            </div>
        </div>
        <div class="card card-compact sm:w-3/4 w-[90%] bg-slate-100 mt-1 sm:mt-3">
    
            <h2 class="card-title text-md sm:text-xl bg-slate-900 rounded-md p-1.5 sm:p-2 text-white glass">AVAILABLE DOCUMENTS</h2>
            <div class="overflow-x-auto pb-3">
                <table class="table">
                  <!-- head -->
                  <thead>
                    <tr>
                      <th>Document</th>
                      <th>Requirement</th>
                      <th>Price</th>
                     
                    </tr>
                  </thead>
                  <tbody>
                    <!-- row 1 -->
                    {#if !authenticating}
                    {#each docs as doc}
                    <tr class="hover:bg-slate-200">
                      
                        <td class="text-xs sm:text-sm">{doc.name}</td>
                        <td class="text-[0.65rem] sm:text-sm">{doc.req}</td>
                        <td class="text-xs sm:text-sm font-bold">{doc.price}</td>
                        <td><button class="btn btn-success glass text-black w-full text-xs sm:text-sm" on:click={() => goto(`/Student/DocumentRequest/${doc.id}`)}>
                          <box-icon name='mail-send' ></box-icon>
                          Request</button></td>
                        
                    </tr>
                    {/each}
                    {/if}
                  </tbody>
                </table>
                {#if authenticating}
                <div class="h-full flex justify-center items-center">
                  <span class="h-14 w-10 loading loading-dots loading-md "></span>
                </div>
                {/if}
              </div>
            
            
            
        </div>
    </main>
</SectionWrapper>