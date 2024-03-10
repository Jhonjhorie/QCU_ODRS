<script>
    import SectionWrapper from "./SectionWrapper.svelte";
    import Header from "./Header.svelte";

    let docs = [{name:"TOR / Diploma", req:"Graduated and Complete Address"},{name:"TOR (Under Graduate)", req:"Last Academic Year Attended and Complete Address"},{name:"Grade Slip", req:"Academic Year and Semester"},{name:"Other Certifications", req:"Office requesting the document (e.g., DSWD, CHED)"},{name:"Authentication / Certified True Copy", req:"Clear copy of the Document and bring the Original Copy upon Claiming"}]
</script>

<SectionWrapper>
    <Header />
    <main class="flex flex-col
    items-center mt-5">
        <div class="card w-3/4 h-28 shadow-xl image-full">
            <figure><img src="QCU-Build.png" alt="Quezon City University" class="w-full h-full" /></figure>
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
                    </tr>
                  </thead>
                  <tbody>
                    <!-- row 1 -->
                    {#each docs as doc}
                    <tr class="hover:bg-slate-200">
                        <td>{doc.name}</td>
                        <td>{doc.req}</td>
                    </tr>
                    {/each}
                  </tbody>
                </table>
              </div>
            
            
            
        </div>
    </main>
</SectionWrapper>