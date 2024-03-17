<script>
  import SectionWrapper from "../../../components/SectionWrapper.svelte";
  import Header from "../../../components/Admin/pHeader2.svelte";
  import Sidebar from "../../../components/Registrar/RegistrarSidebar.svelte";
  import { goto } from "$app/navigation";

  function gotoInfo() {
    goto("/Registrar/RequestInfo");
  }
</script>

<main class="flex flex-col">
  <SectionWrapper>
    <Header />
    <div class="flex flex-row gap-5 mx-auto w-full">
      <Sidebar />
      <div class="flex flex-col flex-1 mx-auto w-full">
        <h1 class="p-3 text-[30px] text-black font-bold">REQUESTS</h1>

        <div class="h-[70vh] w-auto p-2 bg-slate-100 rounded-md shadow-lg">
          <div class="overflow-x-auto w-auto h-[67.5vh] bg-slate-200">
            <table class="table table-xs">
              <!-- head -->
              <thead>
                <tr>
                  <th></th>
                  <th>Transaction Number</th>
                  <th>Document Requested</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
              <!-- svelte-ignore a11y-click-events-have-key-events -->
              <tbody on:click={gotoInfo}>
                <!-- row 1 -->
                <tr class="hover:bg-blue-700">
                  <th>1</th>
                  <td>10002321</td>
                  <td>Diploma</td>
                  <td>2/10/2024</td>
                  <td>For Validation</td>
                </tr>
                <!-- row 2 -->
                <tr class="hover:bg-blue-700">
                  <th>2</th>
                  <td>12022781</td>
                  <td>TOR</td>
                  <td>2/10/2024</td>
                  <td>For Release</td>
                </tr>
                <!-- row 3 -->
                <tr class="hover:bg-blue-700">
                  <th>3</th>
                  <td>10092643</td>
                  <td>Diploma</td>
                  <td>2/10/2024</td>
                  <td>Error</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </SectionWrapper>
</main>

<style>
    tr:nth-child(even) {
      background-color: rgba(41, 40, 40, 0.319);
    }
    th {
      font-weight: bold;
      font-size: 15px;
      padding: 10px;
      color: black;
    }
    td {
      color: black;
    }
  </style>