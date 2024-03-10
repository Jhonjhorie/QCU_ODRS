<script>
  import PHeader from '../../../components/pHeader2.svelte';
  import Psidebar from '../../../components/psidebar.svelte';


    import { goto } from "$app/navigation";

    function gotoAdds (){
              goto('/Admin/pAddDocs')
    }
    function gotoEdit (){
              goto('/Admin/pEdit')
    }
</script>
<style>
    td {
        color: black;
        font-weight: 500;
    }
    th {
        font-size: 15px;
    }
</style>

<div class="h-[105vh] w-full bg-slate-300">
    <PHeader/>
    <Psidebar/>
  
    <div class="ml-[300px] p-5 ">
      <h1 class="pl-0 text-[30px] text-black font-bold">MANAGE DOCUMENT</h1>

        <div class="pt-2 pb-3">
          <button on:click={gotoAdds} class="btn w-[200px] bg-slate-900 hover:bg-slate-800 text-slate-200">ADD DOCUMENT</button>
        </div>

     
        <div class="w-[100%] h-[65vh] bg-slate-100 shadow-md rounded-md ">
          <div class="overflow-x-auto">
            <table class="table">
              <!-- head -->
            <thead class="sticky top-0 bg-slate-900">
              <tr>
                <th class="text-white font-light">Documents</th>
                <th class="text-white font-light">Requirement</th>
                <th class="text-white font-light">Manage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Transcript of Records (TOR)</td>
                <td>Year Graduated and complete address</td>
                <td><button on:click={gotoEdit} class="hover:text-slate-100 hover:bg-slate-600 p-1 px-2 rounded-sm duration-200 shadow-md ">Edit</button></td>
              </tr>
              <tr>
                <td>Diploma</td>
                <td>Year Graduated and complete address</td>
                <td><button on:click={gotoEdit} class="hover:text-slate-100 hover:bg-slate-600 p-1 px-2 rounded-sm duration-200 shadow-md ">Edit</button></td>
              </tr>
              <tr>
                <td>Transcript of Records (TOR) - Undergraduate</td>
                <td>Last Academic Year Attended and complete address</td>
                <td><button  class="hover:text-slate-100 hover:bg-slate-600 p-1 px-2 rounded-sm duration-200 shadow-md ">Edit</button></td>
              </tr>
              <tr>
                <td>Grade Slip</td>
                <td>Academic Year and Semester</td>
                <td><button class="hover:text-slate-100 hover:bg-slate-600 p-1 px-2 rounded-sm duration-200 shadow-md ">Edit</button></td>
              </tr>
              <tr>
                <td>Authentication / Certified True Copy</td>
                <td>Send a clear copy of the document and bring the Original Copy upon claiming</td>
                <td><button class="hover:text-slate-100 hover:bg-slate-600 p-1 px-2 rounded-sm duration-200 shadow-sm  ">Edit</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      </div>
     

</div>