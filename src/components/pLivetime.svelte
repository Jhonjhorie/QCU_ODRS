<script>
    import { onMount, onDestroy } from 'svelte';
  
    let currentDate = new Date();
    let currentTime = new Date();
    let currentYear = new Date();
  

    const updateTime = () => {
      currentTime = new Date();
    };
  
    const interval = setInterval(updateTime, 1000);

  
    onMount(() => {
      // Start updating the time when the component is mounted
      updateTime();

    });
  
    onDestroy(() => {
      // Clear the interval when the component is destroyed
      clearInterval(interval);
 
    });
</script>

  <div class="text-[90px] text-black font-bold text-center">  
    {currentTime.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}
  </div>
  <div class="text-[30px] text-black font-semibold text-center" >
    {currentDate.toLocaleDateString([], { month: 'long', day: 'numeric', year: 'numeric' })}
  </div>
  <div class="text-[30px] text-black font-semibold text-center" >
    {currentYear.toLocaleDateString([], { weekday: 'long'  })}
  </div>

  <div class="flex gap-10 text-center mx-auto p-5 justify-center pt-10">
    <div class="h-[200px] w-[300px] bg-slate-100 rounded-lg shadow-lg"> 
        <h1 class="text-[#101010c4] font-semibold text-[100px]">34</h1>
        <h2 class="text-black font-bold text-[20px] ">Total User</h2>
    </div>
    <div class="h-[200px] w-[300px] bg-slate-100 rounded-lg shadow-lg"> 
        <h1 class="text-[#101010c4] font-semibold text-[100px]">6</h1>
        <h2 class="text-black font-bold text-[20px] ">Documents</h2>
    </div>
    <div class="h-[200px] w-[300px] bg-slate-100 rounded-lg shadow-lg">
        <h1 class="text-[#101010c4] font-semibold text-[100px]">4</h1>
        <h2 class="text-black font-bold text-[20px] ">Total Registrar</h2> </div>
  </div>

   
  