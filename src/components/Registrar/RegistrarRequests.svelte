<script>
    import SectionWrapper from "../SectionWrapper.svelte";
    import Header from "../Admin/pHeader2.svelte";
    import Sidebar from "./RegistrarSidebar.svelte";
    import { goto } from "$app/navigation";

    function gotoInfo() {
		goto('/Registrar/RegistrarRequestInfo');
	}
</script>
<style>

th {
font-weight: 400;
font-size: 15px;
padding: 10px;
color: black

}
td {
color: black
}
</style>
<SectionWrapper>
    <Header />
    <div class="flex flex-row gap-5 mx-auto w-full">
        <Sidebar />
        <div class="flex flex-col flex-1  mx-auto w-full">
            <h1 class="pl-0 text-[30px] text-black font-bold">REQUESTS</h1>
            <div class="overflow-x-auto">
                <table class="table">
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
</SectionWrapper>
