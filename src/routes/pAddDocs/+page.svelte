<script>
 import PHeader from '../../components/pHeader2.svelte';
    import Psidebar from '../../components/psidebar.svelte';
    import { goto } from '$app/navigation';

    function gotoDocuments (){
                goto('/pDocumentss')
    }

</script>
<main class="h-full w-full bg-slate-300s">
<div class="h-[105vh] w-full bg-slate-300">
    <PHeader/>
    <Psidebar/>

    <div class="ml-[300px] p-5 ">
    <h1 class="pl-0 text-[30px] text-black font-bold">MANAGE DOCUMENT</h1>

        <div class="pt-2 pb-3">
        <button on:click={gotoDocuments}  class="btn w-[200px] bg-slate-900 hover:bg-slate-800 text-slate-200">BACK</button>
        </div>

    <div class="mx-auto pl-31  w-full">

        <div class="w-[750px] h-96 bg-slate-100 shadow-md rounded-md pl-10 pt-5">
                <div class="">
                    <h1 class="text-slate-800 font-bold text-[25px]  ">ADD DOCUMENT</h1>
                </div>
                <div class="flex gap-x-[10vh] w-full pl-[3vw]">
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
                            <span class="label-text text-black font-medium text-[15px]">Requirements</span>
                            </div>
                            <textarea class="textarea textarea-bordered bg-slate-300 h-[25vh] w-[18vw] border-slate-400 text-black" placeholder="Bio"></textarea>  
                        </label>
                    
                    </div>
                </div>
                <div class="pt-5 pr-[75px] p-10 w-full">
                    <div class="float-right">
                        <button  onclick="my_modal_1.showModal()" class="h-10 rounded-md w-[20vh] bg-slate-900 hover:bg-slate-800 text-slate-200">SUBMIT</button>
                    
                        <dialog id="my_modal_1" class="modal">
                            <div class="modal-box">
                            <h3 class="font-bold text-lg">Hello!</h3>
                            <p class="py-4">Press ESC key or click the button below to close</p>
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