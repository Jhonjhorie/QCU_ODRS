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
    items-center mt-5">
        <div class="card w-3/4 h-28 shadow-xl image-full">
            <figure><img src="/QCU-Build.png" class="w-full h-full" /></figure>
            <div class="card-body flex justify-center items-center">
            <h1 class="card-title text-5xl font-light italic">ONLINE DOCUMENT REQUEST SYSTEM</h1>
            
            </div>
        </div>
        <div class="card card-compact w-3/4  bg-slate-100 mt-3">
    
            <h2 class="card-title bg-slate-900 rounded-md p-2 text-white glass">AVAILABLE DOCUMENTS</h2>
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
                      
                        <td>{doc.name}</td>
                        <td>{doc.req}</td>
                        <td>{doc.price}</td>
                        <button class="btn btn-success my-2 glass text-black w-full" on:click={() => goto(`/Student/DocumentRequest/${doc.id}`)}>
                          <box-icon name='mail-send' ></box-icon>
                          Request</button>
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