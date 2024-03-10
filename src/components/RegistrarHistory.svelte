<script>
    import SectionWrapper from "./SectionWrapper.svelte";
    import Header from "./Header.svelte";
    import Sidebar from "./RegistrarSidebar.svelte";
</script>
<SectionWrapper>
    <Header />
    <div class="flex flex-row gap-5 mx-auto w-full">
        <Sidebar />
        <div class="flex flex-col flex-1  mx-auto w-full">
            <h1 class="mt-2 text-2xl font-bold text-slate-900">HISTORY</h1>
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
                    <tr class="hover">
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
