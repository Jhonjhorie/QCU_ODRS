<script>
    import SectionWrapper from "./SectionWrapper.svelte";
    import Header from "./Header.svelte";
    import Sidebar from "./RegistrarSidebar.svelte";
    import { onMount } from 'svelte';
  
    let time = '';
    let currentDate = '';
    let currentDay = '';

onMount(() => {
  updateDateTime();
  updateTime();
  setInterval(updateTime, 1000);
});

function updateTime() {
  const now = new Date();
  const hours = String(now.getHours() % 12 || 12).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const ampm = now.getHours() >= 12 ? 'PM' : 'AM';
  time = `${hours}:${minutes}:${seconds} ${ampm}`;
}
function updateDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: '2-digit'
    });
    const day = now.toLocaleDateString('en-US', { weekday: 'long' });
    currentDate = date;
    currentDay = day;
  }

  </script>
  
  
<SectionWrapper>
    <Header />
    <div class="flex flex-row gap-5 mx-auto w-full">
        <Sidebar />

        <div class="flex flex-col flex-1  mx-auto w-full">
            <h1 class="mt-2 text-2xl font-bold text-slate-900">DASHBOARD</h1>
            <div class="text-center">

                <p class="text-6xl text-slate-900">{time}</p>
                <p class="text-4xl text-slate-900">{currentDate}</p>
                <p class="text-4xl text-slate-900">{currentDay}</p>


            </div>
            <div class="flex flex-row gap-5  mt-5">
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body items-center text-center">
                    <h2 class="card-title">Pending Request</h2>
                    <p>10</p>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body items-center text-center">
                    <h2 class="card-title">Completed Request</h2>
                    <p>10</p>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body items-center text-center">
                    <h2 class="card-title">Scheduled Request</h2>
                    <p>10</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</SectionWrapper>