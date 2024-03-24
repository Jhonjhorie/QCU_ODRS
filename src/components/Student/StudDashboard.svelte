<script>
// @ts-nocheck

    import SectionWrapper from "../SectionWrapper.svelte";
    import Header from "../Header.svelte";

  import StudRfBtn from "./StudRFBtn.svelte";
  import { deleteDoc } from "firebase/firestore";
  import StudToBtn from "./StudToBtn.svelte";


    let docsStatus = [{tnum: 109098284, name:"TOR / Diploma", status:0},
    {tnum: 219098284, name:"TOR / Diploma", status:0},{tnum: 119098284, name:"Grade Slip", status:1},
    {tnum: 519098284, name:"Other Certifications", status:1},{tnum: 329098284, name:"Authentication", status:2}
    ];
    let sortBy = {col: "id", ascending: true};

   // @ts-ignore
     $: sort = (column) => {
		
		if (sortBy.col == column) {
			sortBy.ascending = !sortBy.ascending
		} else {
			sortBy.col = column
			sortBy.ascending = true
		}
        let sortModifier = (sortBy.ascending) ? 1 : -1;
		
		// @ts-ignore
		let sort = (a, b) => 
			(a[column] < b[column]) 
			? -1 * sortModifier 
			: (a[column] > b[column]) 
			? 1 * sortModifier 
			: 0;
		
		docsStatus = docsStatus.sort(sort);
    }
    
</script>

<SectionWrapper>
    <Header />  
   <StudRfBtn />
   <StudToBtn />
    <main class="flex flex-col
    items-center mt-5">
        <div class="card card-compact w-3/4 shadow-xl items-center bg-white">
            <p></p>
            <h2 class="card-title text-4xl w-full bg-slate-700 rounded-t-xl p-5 text-white glass">DASHBOARD</h2>
            
                <div class="px-2 pb-3 overflow-x-auto w-full">
                    <table class="table">
                      <!-- head -->
                      <thead>
                        <tr>
                            <th></th>
                            <th on:click={sort("tnum")}>Transaction Number</th>
                            <th on:click={sort("name")}>Document</th>
                            <th on:click={sort("status")}>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <!-- row 1 -->
                        {#each docsStatus as doc, index}
                        <tr class="hover:bg-slate-200">
                            <td class="font-bold">{index + 1}</td>
                            <td>{doc.tnum}</td>
                            <td class="font-bold">{doc.name}</td>
                            <td>
                            {#if doc.status == 2}
                            <ul class="steps w-full">
                                <li class="step step-success"></li>
                                <li class="step step-success"></li>
                                <li class="step step-success font-bold">Completed</li>
                            </ul>
                            {:else if doc.status == 1}
                            <ul class="steps w-full">
                                <li class="step step-warning"></li>
                                <li class="step step-warning font-bold">Claiming</li>
                                <li class="step"></li>
                            </ul>
                            {:else}
                            <ul class="steps w-full">
                                <li class="step step-info font-bold">Confirmation</li>
                                <li class="step"></li>
                                <li class="step"></li>
                            </ul>
                            {/if}
                            </td>
                        </tr>
                        {/each}
                      </tbody>
                    </table>
                  </div>


        </div>
    </main>
    </SectionWrapper>