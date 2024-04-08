<script>
    import PHeader from '../../../components/Admin/pHeader2.svelte';
    import Psidebar from '../../../components/Admin/psidebar.svelte';
    import { collection, addDoc } from "firebase/firestore"; 
    import { goto } from '$app/navigation';
    import { db } from "$lib/firebase/firebase";


    let doc_ID= '';
    let description = '';
    let price = '';
    let requirements = '';
    let reqData = '';
    let authenticating = false;

    const Requirements_data = ['yearGrad', 'lastYear', 'yearSem', 'certification', 'authentication'];
 
    let doc_iderror = false;

    function gotoDocuments() {
        goto('/Admin/Documents');
    }

    async function addDocument() {
        if(authenticating){
        return;
        }
        authenticating = true; 

        if (!doc_ID.trim() || !description.trim() || !requirements.trim() || !reqData.trim() ) {
            console.log("One or more fields are empty!");
                doc_iderror = true;
                authenticating = false;
                setTimeout(() => {
                    doc_iderror = false;
                }, 3000); 
             return;
        }


        try {
            const docRef = await addDoc(collection(db, 'document'), {
                doc_ID,
                description,
                price,
                requirements,
                reqData
            });
                console.log('Document written with ID: ', docRef.id);
                goto('/Admin/Documents');
            } catch (e) {
                console.error('Error adding document: ', e);
            } 
    }

</script>
<style>

</style>
<main class="h-full w-full bg-slate-300s">
<div class="h-[105vh] w-full bg-slate-300">
    <PHeader/>
    <Psidebar/>

    <div class="ml-[300px] p-5 ">
    <h1 class="pl-0 text-[30px] text-black font-bold">MANAGE DOCUMENT</h1>


    <div class="mx-auto pl-31  w-full pt-10 pl-[15%] pr-[15%]">
        <div class="w-full md:w-auto mx-auto h-auto bg-slate-100 shadow-md rounded-md md:pl-10 pt-5 pb-10">
            <div class="text-center md:text-left">
                <h1 class="text-slate-800 font-bold text-3xl md:text-[25px]">ADD DOCUMENT</h1>
            </div>
            <div class="flex flex-col md:flex-row gap-2 md:gap-x-[10vh] w-full md:pl-[3vw]">
                <div class="w-full md:w-auto">
                    <label class="form-control pt-5">
                        <span class="label-text text-black font-medium text-lg">Title</span>
                        <input required bind:value={doc_ID} type="text" placeholder="Type here" class="bg-slate-300 input input-bordered w-full max-w-xs md:w-[18vw] border-slate-400 text-black" />
                    </label>
                    <label class="form-control pt-5">
                        <span class="label-text text-black font-medium text-lg">Requirements_data</span>
                        <select bind:value={reqData} class="select select-bordered w-full max-w-xs text-black bg-slate-300 shadow-sm border-[0.5px] border-[#0a0a0a2b]" >
                            <option value="" disabled selected hidden class="text-slate-600 ">Select requirement data</option>
                            {#each Requirements_data as Reqdata}
                              <option>{Reqdata}</option>
                            {/each}
                        </select>
                    </label>
                    <label class="form-control pt-5">
                        <span class="label-text text-black font-medium text-lg">Price</span>
                        <input bind:value={price} type="number" placeholder="Type here" class="bg-slate-300 input input-bordered w-full max-w-xs md:w-[18vw] border-slate-400 text-black" />
                    </label>
                </div>
                <div class="w-full md:w-auto">
                    <label class="form-control pt-5">
                        <span class="label-text text-black font-medium text-lg">Description</span>
                        <textarea bind:value={description} class="textarea textarea-bordered bg-slate-300 w-full md:w-[18vw] border-slate-400 text-black" placeholder="Description"></textarea>
                    </label>
                    <label class="form-control pt-5">
                        <span class="label-text text-black font-medium text-lg">Requirements</span>
                        <textarea bind:value={requirements} class="textarea textarea-bordered bg-slate-300 h-[10vh] w-full md:w-[18vw] border-slate-400 text-black" placeholder="Requirements"></textarea>
                    </label>
                    <div class="flex justify-center md:justify-start pt-14 ">
                        <button on:click={gotoDocuments} class="h-10 rounded-md w-full md:w-[15vh] bg-slate-900 hover:bg-slate-800 text-slate-200 md:ml-0 md:mr-4">BACK</button>
                        <button on:click={addDocument} class="ml-0 md:ml-4 h-10 rounded-md w-full md:w-[15vh] bg-slate-900 hover:bg-slate-800 text-slate-200">
                            {#if authenticating}
                            <span class="loading loading-dots loading-sm bg-slate-300 w-[18px] "></span>
                            {:else}
                                SUBMIT
                            {/if} 
                        </button>
                    </div>
                </div>
            </div>
           
            {#if doc_iderror}
            <div class="pl-5 shadow-md  shadow-[#ff656583] text-slate-100 text-[15px] font-bold
             bg-red-600 w-[47.5%] mt-2 p-2 rounded-md absolute">"Fields cannot be empty"</div>
            {/if}
        </div>
    
    
    </div>
</div>
</main>