<script>        
import { goto } from "$app/navigation";
  import { authHandlers } from "../../store/store";
 
  




  function gotoDashboard() {
		goto('/Registrar/Dashboard');
	}
  function gotoRequests() {
		goto('/Registrar/RegistrarRequests');
	}
  function gotoHistory() {
		goto('/Registrar/RegistrarHistory');
	}
  function gotoLogin() {
		goto('/Student/Login');
	}


    let Fullname = 'Registrar';
    let Department = 'Department';
    
 
</script>




<div class="h-screen fixed w-[300px] bg-white z-20 shadow-xl" >
    <div class="pt-7">
        <img src="/cute.jpg" class="w-[130px] h-[130px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mx-auto" alt="" />
    </div>
       
    
    <h1 class="text-black font-semibold text-[25px] text-center pt-2" > {Fullname}</h1>
    <h1 class="text-black font-semibold text-[15px] text-center pb-2 pt-0" > {Department}</h1>

 
    <div class="h-1 w-[250px] bg-[#2f2f2ff0] mx-auto "> </div>

    <ul class="justify-end ">
        <li class="pt-4 text-center">
            <button class="h-[40px] rounded-[10px] hover:bg-slate-800 text-white hover:scale-95 btn-wide bg-slate-900" on:click={gotoDashboard}>DASHBOARD</button> 
        </li>
        <li class="pt-3 text-center">
            <button class="h-[40px] rounded-[10px] hover:bg-slate-800 text-white hover:scale-95 btn-wide bg-slate-900" on:click={gotoRequests} >REQUESTS</button>
        </li>
        <li class="pt-3 text-center">
            <button class="h-[40px] rounded-[10px] hover:bg-slate-800 text-white hover:scale-95 btn-wide bg-slate-900" on:click={gotoHistory}>HISTORY</button>
        </li> 
       
        <li class="fixed pl-5 pb-5 bottom-0">
            <button  class="h-[40px] rounded-[10px] hover:bg-slate-800 text-white hover:scale-95  btn-wide bg-slate-900" on:click={authHandlers.logout}>LOGOUT</button>
        </li> 
    </ul>
    
</div>