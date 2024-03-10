<script>
   
    import PHeader from '../../components/pHeader2.svelte';
    import Psidebar from '../../components/psidebar.svelte';
    import { goto } from '$app/navigation';
    import Livetime from '../../components/pLivetime.svelte';
    import Cute from '../../image/cute.jpg';

</script>

<div class="h-[105vh] w-full bg-slate-300  " >
    <PHeader/>
    <Psidebar/>
 
    <div class="ml-[300px] p-5 h-[70vh] ">
        <h1 class="pl-0 text-[30px] text-black font-bold">DASHBOARD</h1>
        
            <Livetime/>
        
    </div>
    

</div>  