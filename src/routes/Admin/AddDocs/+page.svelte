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
    let authenticating = false;
 
    let doc_iderror = false;

    function gotoDocuments() {
        goto('/Admin/Documents');
    }

    async function addDocument() {
        if(authenticating){
        return;
        }
        authenticating = true; 

        if (!doc_ID.trim() || !description.trim() || !requirements.trim()) {
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
                requirements
            });
                console.log('Document written with ID: ', docRef.id);
                goto('/Admin/Documents');
            } catch (e) {
                console.error('Error adding document: ', e);
            } 
    }

</script>
<main class="h-full w-full bg-slate-300s">
<div class="h-[105vh] w-full bg-slate-300">
    <PHeader/>
    <Psidebar/>

    <div class="ml-[300px] p-5 ">
    <h1 class="pl-0 text-[30px] text-black font-bold">MANAGE DOCUMENT</h1>


    <div class="mx-auto pl-31  w-full pt-10">

        <div class="w-[750px] mx-auto h-96 bg-slate-100 shadow-md rounded-md pl-10 pt-5">
                <div class="">
                    <h1 class="text-slate-800 font-bold text-[25px]  ">ADD DOCUMENT</h1>
                </div>
                <div class="flex gap-x-[10vh] w-full pl-[3vw] ">
                    <div class="">
                    <label class="form-control w-full max-w-xs pt-5">
                        <div class="label">
                        <span class="label-text text-black font-medium text-[15px]">Title</span>
                        </div>
                        <input required bind:value={doc_ID} type="text" placeholder="Type here" class="bg-slate-300 input input-bordered w-[18vw] max-w-xs border-slate-400 text-black" />  
                    </label>
                  
                    <label class="form-control w-full max-w-xs pt-5">
                        <div class="label">
                        <span class="label-text text-black font-medium text-[15px]">Description</span>
                        </div>
                        <textarea bind:value={description} class="textarea textarea-bordered bg-slate-300 w-[18vw] border-slate-400 text-black" placeholder="Bio"></textarea>  
                    </label>
                    </div>

                    <div class="">
                        <label class="form-control w-full max-w-xs pt-5">
                            <div class="label">
                            <span class="label-text text-black font-medium text-[15px]">Price</span>
                            </div>
                            <input bind:value={price} type="number" placeholder="Type here" class="bg-slate-300 input input-bordered w-[18vw] max-w-xs border-slate-400 text-black" />  
                        </label>
                        <label class="form-control w-full max-w-xs pt-5">
                            <div class="label">
                            <span class="label-text text-black font-medium text-[15px]">Requirements</span>
                            </div>
                            <textarea  bind:value={requirements} class="textarea textarea-bordered bg-slate-300 h-[10vh] w-[18vw] border-slate-400 text-black" placeholder="Bio"></textarea>  
                        </label>
                    
                    </div>
                </div>
                <div class="pt-5 pr-[75px] p-10 ">
                    <div class="float-right ">
                        <button  on:click={gotoDocuments} class="h-10 rounded-md w-[15vh] bg-slate-900 hover:bg-slate-800 text-slate-200">BACK</button>
                        <button  on:click={addDocument}  class="ml-4 h-10 rounded-md w-[15vh] bg-slate-900 hover:bg-slate-800 text-slate-200">
                          {#if authenticating}
                            <span class="loading loading-dots loading-sm bg-slate-300 w-[18px] "></span>
                          {:else}
                            SUBMIT
                          {/if} 
                        </button>
                    </div>
                </div>
                {#if doc_iderror}
              <div class="pl-5 shadow-md  shadow-[#ff656583] text-slate-100 text-[15px] font-bold bg-red-600 w-[94.5%] mt-2 p-2 rounded-md ">"Fields cannot be empty"</div>
              {/if}
            </div>
        </div>
        
    
    
    </div>
</div>
</main>