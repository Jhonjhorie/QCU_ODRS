<script>
    import SectionWrapper from "../SectionWrapper.svelte";
    import Header from "../Admin/pHeader2.svelte";
    import Sidebar from "./RegistrarSidebar.svelte";
</script>
<style>
  tr:nth-child(even){
  background-color: rgba(41, 40, 40, 0.319);
  
}
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
          <h1 class="pl-0 text-[30px] text-black font-bold">HISTORY</h1>
          <div class="overflow-x-auto">
                <table class="table ">
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
                  <tbody>
                    <!-- row 1 -->
                    <tr>
                      <th>1</th>
                      <td>10002321</td>
                      <td>Diploma</td>
                      <td>2/10/2024</td>
                      <td>For Validation</td>
                    </tr>

                  </tbody>
                </table>
              </div>
        </div>
    </div>
</SectionWrapper>
