<script>
  // Import necessary components
  import SectionWrapper from "../../../components/SectionWrapper.svelte";
  import Header from "../../../components/Registrar/RegistrarHeader.svelte";
  import Sidebar from "../../../components/Registrar/RegistrarSidebar.svelte";
  import Search from "../../../components/Registrar/RegistrarSearch.svelte";
  import Requests from "../../../components/Registrar/RegistrarRequests.svelte";
  import { writable } from 'svelte/store';

  let textsdas = 'Search';
  let isSearchVisible = writable(true); 
  function toggleVisibility() {
    isSearchVisible.update(value => !value);
    textsdas = 'Back'
  }
</script>

<main class="flex flex-col">
  <SectionWrapper>
    <Header />
    <div class="flex flex-row gap-5 mx-auto w-full">
      <Sidebar />      

      <div class="flex flex-col flex-1 mx-auto w-full">
        <div class="flex justify-between">


          <h1 class="p-3 text-3xl text-black font-bold">REQUESTS</h1>
          <div class="flex mr-4 items-center gap-2">
            <button class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" on:click={toggleVisibility}>{textsdas} --></button>
          </div>
        </div>

        {#if $isSearchVisible}
        
        <Requests />
        {:else}
        <Search />
        {/if}
      </div>

    </div>
  </SectionWrapper>
</main>
