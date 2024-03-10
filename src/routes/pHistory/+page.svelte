<script>
        import PHeader from '../../components/pHeader2.svelte';
        import Psidebar from '../../components/psidebar.svelte';
        import PHistory from "../../components/phistory.svelte";
</script>

<div class="h-[105vh] w-full bg-slate-300">
    <PHeader/>
    <Psidebar/>
  
    <div class="ml-[300px] p-5 ">
      <h1 class="pl-0 text-[30px] text-black font-bold">HISTORY LOG</h1>
        <div class="mx-auto ">
            <PHistory/>
        </div>
        
  
     
      
    </div>
</div>
  