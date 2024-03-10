<script>
  import PHeader from '../../components/pHeader2.svelte';
  import Psidebar from '../../components/psidebar.svelte';
  import PBoxesaccounts from '../../components/pBoxesaccounts.svelte';
  import PRegistrar from '../../components/pRegistrar.svelte';

</script>


<div class="h-[105vh] w-full bg-slate-300">
  <PHeader/>
  <Psidebar/>

  <div class="ml-[300px] p-5 ">
    <h1 class="pl-0 text-[30px] text-black font-bold">MANAGE ACCOUNTS<span class="float-end text-[20px] text-slate-600">REGISTRARS' ACCOUNT</span></h1>
    <!-- CONTAINER --> 
    <div class="h-[200px] w-[200] flex gap-x-5">
      <PBoxesaccounts/>
     
      
      <!-- registrar --> 
     
      <div class="h-[70vh] w-[80%] bg-slate-100 mx-auto mt-3 rounded-md shadow-md p-5  flex ">     
       <PRegistrar/>    
      </div>  

    </div>

   
    
  </div>

</div>