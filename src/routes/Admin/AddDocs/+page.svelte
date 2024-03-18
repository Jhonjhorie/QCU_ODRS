<script>
// @ts-nocheck


 import PHeader from '../../../components/Admin/pHeader2.svelte';
    import Psidebar from '../../../components/Admin/psidebar.svelte';
    import { goto } from '$app/navigation';

    function gotoDocuments (){
                goto('/Admin/Documents')
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
                        <input type="text" placeholder="Type here" class="bg-slate-300 input input-bordered w-[18vw] max-w-xs border-slate-400 text-black" />  
                    </label>
                    <label class="form-control w-full max-w-xs pt-5">
                        <div class="label">
                        <span class="label-text text-black font-medium text-[15px]">Description</span>
                        </div>
                        <textarea class="textarea textarea-bordered bg-slate-300 w-[18vw] border-slate-400 text-black" placeholder="Bio"></textarea>  
                    </label>
                    </div>

                    <div class="">
                        <label class="form-control w-full max-w-xs pt-5">
                            <div class="label">
                            <span class="label-text text-black font-medium text-[15px]">Price</span>
                            </div>
                            <input type="number" placeholder="Type here" class="bg-slate-300 input input-bordered w-[18vw] max-w-xs border-slate-400 text-black" />  
                        </label>
                        <label class="form-control w-full max-w-xs pt-5">
                            <div class="label">
                            <span class="label-text text-black font-medium text-[15px]">Requirements</span>
                            </div>
                            <textarea class="textarea textarea-bordered bg-slate-300 h-[10vh] w-[18vw] border-slate-400 text-black" placeholder="Bio"></textarea>  
                        </label>
                    
                    </div>
                </div>
                <div class="pt-5 pr-[75px] p-10 ">
                    <div class="float-right ">
                        <button  on:click={gotoDocuments} class="h-10 rounded-md w-[15vh] bg-slate-900 hover:bg-slate-800 text-slate-200">BACK</button>
                        <button  onclick="my_modal_1.showModal()" class="ml-4 h-10 rounded-md w-[15vh] bg-slate-900 hover:bg-slate-800 text-slate-200">SUBMIT</button>
                    
                        <dialog id="my_modal_1" class="modal">
                            <div class="modal-box">
                            <h3 class="font-bold text-lg">ADD</h3>
                            <p class="py-4">Are you sure to add this document?</p>
                            <div class="modal-action">
                                <form method="dialog">
                                <!-- if there is a button in form, it will close the modal -->
                                <button on:click={gotoDocuments} class="btn hover:bg-green-700">YES</button>
                                <button class="btn ">No</button>
                                </form>
                            </div>
                            </div>
                        </dialog>
                    </div>
                </div>
            </div>
        </div>
        
    
    
    </div>
</div>
</main>