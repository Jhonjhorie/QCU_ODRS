<script>
   
    import PHeader from '../../../components/Admin/pHeader2.svelte';
    import Psidebar from '../../../components/Admin/psidebar.svelte';

    import Livetime from '../../../components/Admin/pLivetime.svelte';


</script>
<style>
    ::placeholder {
        color: black;
    }
</style>


<div class="h-[105vh] w-full bg-slate-300  " >
    <PHeader/>
    <Psidebar/>
 
    <div class="ml-[300px] p-5 h-[70vh] ">
        <h1 class="pl-0 text-[30px] text-black font-bold">ADMIN ACCOUNT</h1>
            <div class="  w-[100%] ">
                <div class=" h-[55vh] w-[50vw] bg-slate-100 mx-auto mt-10 rounded-md ">
                    <div class="pt-5">
                        <img src="/cute.jpg" class=" w-[130px] h-[130px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mx-auto shadow-xl "  alt="pao" />
                    </div>

                    <div class=" flex w-full pl-10 pr-10 pt-5 gap-5 ">
                        <div class="w-full p-1 ">
                          <label class="form-control w-full max-w-xs  ">
                            <div class="label">
                              <span class="label-text text-black text-[15px] font-medium ">Full name:</span>
                            </div>
                            <input  type="text" placeholder="Haewon Mahal"  class="text-black bg-slate-300 input w-full max-w-xs shadow-sm border-[0.5px] border-[#0a0a0a2b]" required />
                          </label>
            
                          <label class="form-control w-full max-w-xs pt-4 ">
                            <div class="label">
                              <span class="label-text text-black text-[15px] font-medium">Email:</span>
                            </div>
                            <input disabled type="text" placeholder="admin@example.com"  class="text-black bg-slate-300 input w-full max-w-xs shadow-sm border-[0.5px] border-[#0a0a0a2b] " />
                          </label>
            
                         
                        </div>
                        <div class="w-full  p-1">
                          <label class="form-control w-full max-w-xs ">
                            <div class="label">
                              <span class="label-text text-black text-[15px] font-medium ">Pasword:</span>
                            </div>
                            <input  type="password" placeholder="admin123"  class="text-black bg-slate-300 input w-full max-w-xs shadow-sm border-[0.5px] border-[#0a0a0a2b]" />
                          </label>   
                          <div class="label">
                            <span class="label-text text-slate-600 text-[15px] font-medium pt-4">Change password?</span>
                          </div>
                          <div class="float-right">
                            <button  onclick="my_modal_1.showModal()" class="h-12 rounded-md w-[40vh] bg-slate-900 hover:bg-slate-800 text-slate-200">UPDATE</button>
                        
                            <dialog id="my_modal_1" class="modal">
                                <div class="modal-box">
                                <h3 class="font-bold text-lg">Update</h3>
                                <p class="py-4">Are you sure to UPDATE Admin Password?</p>
                                <div class="modal-action">
                                    <form method="dialog">
                                    <!-- if there is a button in form, it will close the modal -->
                                    <button class="btn hover:bg-green-700">YES</button>
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
    

</div>  