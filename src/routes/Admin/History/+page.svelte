<script>


    import PHeader from '../../../components/Admin/pHeader2.svelte';
    import Psidebar from '../../../components/Admin/psidebar.svelte';
    import { onMount } from 'svelte';
    import { db } from "$lib/firebase/firebase";
    import { collection, getDocs} from "firebase/firestore";


    /**
   * @type {any[]}
   */
    let data = [];
    let totalRequests = 0;
    /**
   * @type {any[]}
   */
    let courses = [];
    let selectedCourse = "";
    /**
   * @type {any[]}
   */
    let filteredData = [];

    const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, 'docRequests'));
    data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    totalRequests = data.length;
    filteredData = data;
    courses = [...new Set(data.map(request => request.dept_Title))];
    };
    //filter course
    const filterRequests = () => {
        if (selectedCourse === "") {
           // Display all data if no course is selected
            filteredData = data;
        } else {
            filteredData = data.filter(request => request.dept_Title === selectedCourse);
        }
        updateTotalRequests();
    };
    //get selected course lenght
    const updateTotalRequests = () => {
        totalRequests = filteredData.length;
    };
    // @ts-ignore
    const timestampToDate = (timestamp) => {
      if (timestamp && timestamp.toDate) {
          return timestamp.toDate().toLocaleString(); 
      } else {
          return ""; 
      }
    };
   
   

onMount(() => {
        fetchData();
        filterRequests();
  });

</script>
<style>
    tr:nth-child(even){
    background-color: rgba(41, 40, 40, 0.319);
    
}
th {
  font-weight: 400;
  font-size: 15px;
  padding: 10px;
}
td {
  color: black
}
.expired {
  color: red;
}
</style>
<div class="h-[105vh] w-full bg-slate-300">
    <PHeader/>
    <Psidebar/>
  
    <div class="ml-[300px] p-5 ">
      <div class="flex justify-between">
        <h1 class="pl-0 text-[30px] text-black font-bold">HISTORY LOG</h1>
        <div class="-mt-3">
          <select bind:value={selectedCourse} on:change={filterRequests} class="mt-3 bg-slate-200  text-slate-900 text-sm  border border-gray-300 rounded px-3 py-2">
            <option value="" selected>All</option>
            {#each courses as course}
                <option value={course}>{course}</option>
            {/each}
          </select>
       </div>
        <div class="p-2 bg-slate-800 rounded-md text-slate-300 text-sm "> TOTAL : <span class="text-white text-xl ">{totalRequests}</span> </div>
      </div>
        <div class="mx-auto ">
       
<div class="h-[70vh] w-auto p-2 bg-slate-100 rounded-md mt-3 shadow-lg">
    <div class="overflow-x-auto w-auto h-[67.5vh] bg-slate-200">
        <table class="table table-xs">
        <thead class="sticky top-0 bg-slate-900 ">
            <tr >
            <th></th> 
            <th class="text-white">Name</th> 
            <th class="text-white">Course</th> 
            <th class="text-white">Document</th> 
            <th class="text-white">Request date </th>
            <th class="text-white">Claiming date</th>  
            <th class="text-white">Status</th>
            </tr>
        </thead> 
        <tbody>
          {#each filteredData as request, index}
            <tr>
              <td>{index + 1}</td>
              <td>{request.student_Name}</td>
              <td>{request.dept_Title}</td>
              <td>{request.doc_ID}</td>
              <td>{timestampToDate(request.date_Req)}</td>
              <td>{request.sched_Claim}</td>
              <td>
                {#if request.status == 0}
                  Pending
                {:else if request.status == 1}  
                  Claiming
                {:else}
                  Completed 
                {/if}
              </td>
            </tr>
          {/each}
        </tbody>
      
        </table>
      </div>
    </div>
  </div>
        
  
     
      
  </div>
</div>
  