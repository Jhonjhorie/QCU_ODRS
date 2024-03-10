<script>
    import { goto } from '$app/navigation';

    import Iconpic from '../image/ICON.png';
    
    
    function gotoDetails (){
              goto('/pDetailsaccount')
    }
    
</script>
<style>
    tr:nth-child(even){
    background-color: rgba(41, 40, 40, 0.319);
    
}
th {
  font-weight: 400;
}
</style>
<div class="overflow-x-auto  w-[200%]">
  <table class="table ">
    <!-- head -->
    <thead class="top-0 sticky bg-slate-900 z-30">
      <tr>
     
        <th class="text-white text-[15px]">FULL NAME</th>
        <th class="text-white text-[15px]">POSITION</th>
        <th class="text-white text-[15px]">ID</th>
        <th class="text-white text-[15px]">MANAGE</th>
      </tr>
    </thead>
    <tbody> 
      <!-- row 1 -->
      <tr>
      
        <td>
          <div class="flex items-center gap-3">
            <div class="avatar">
              <div class=" w-12 h-12">
                <img src={Iconpic} alt=""/>
              </div>
            </div>
            <div>
              <div class="text font-bold text-black">Hart Hagerty</div>
              <div class="text text-sm opacity-50 text-black font-bold">QCU</div>
            </div>
          </div>
        </td>
        <td>
          
          <span class="badge badge-ghost badge-sm h-7 ">CCS registrar 1</span>
        </td>
        <td class="text-black">REG-101</td>
        <th>
          <button on:click={gotoDetails} class="text-black btn btn-ghost btn-xs hover:bg-[#000450] hover:text-teal-100">DETAILS</button>
        </th>
      </tr>
      <!-- row 2 -->
      <tr>
      
        <td>
          <div class="flex items-center gap-3">
            <div class="avatar">
              <div class="mask mask-squircle w-12 h-12 ">
                <img src={Iconpic} alt=""/>
              </div>
            </div>
            <div>
              <div class="text font-bold text-black">Hart Hagerty</div>
              <div class="text text-sm opacity-50 text-black font-bold">QCU</div>
            </div>
          </div>
        </td>
        <td>
          
          <span class="badge badge-ghost badge-sm h-7">CCS registrar 2</span>
        </td>
        <td class="text-black">REG-102</td>
        <th>
          <button class="text-black btn btn-ghost btn-xs hover:bg-[#000450] hover:text-teal-100">DETAILS</button>
        </th>
      </tr>
      <!-- row 3 -->
      <tr>
       
        <td>
          <div class="flex items-center gap-3">
            <div class="avatar">
              <div class="mask mask-squircle w-12 h-12">
                <img src={Iconpic} alt=""/>
              </div>
            </div>
            <div>
              <div class="font-bold text-black">Marjy Ferencz</div>
              <div class="text text-sm opacity-50 text-black font-bold">QCU</div>
            </div>
          </div>
        </td>
        <td>
          
          <span class="badge badge-ghost badge-sm h-7">EDUK registrar 1</span>
        </td>
        <td class="text-black">REG-103</td>
        <th>
          <button class="text-black btn btn-ghost btn-xs hover:bg-[#000450] hover:text-teal-100">DETAILS</button>
        </th>
      </tr>
      <!-- row 4 -->
      <tr>
        
        <td>
          <div class="flex items-center gap-3">
            <div class="avatar">
              <div class="mask mask-squircle w-12 h-12">
                <img src={Iconpic} alt=""/>
              </div>
            </div>
            <div>
              <div class="font-bold text-black">Yancy Tear</div>
              <div class="text text-sm opacity-50 text-black font-bold">QCU</div>
            </div>
          </div>
        </td>
        <td>
         
          <span class="badge badge-ghost badge-sm h-7">CBAA registrar 1</span>
        </td>
        <td class="text-black">REG-104</td>
        <th>
          <button class="text-black btn btn-ghost btn-xs hover:bg-[#000450] hover:text-teal-100">DETAILS</button>
        </th>
      </tr>
      <tr>
        
        <td>
          <div class="flex items-center gap-3">
            <div class="avatar">
              <div class="mask mask-squircle w-12 h-12">
                <img src={Iconpic} alt=""/>
              </div>
            </div>
            <div>
              <div class="font-bold text-black">Baby Calma</div>
              <div class="text text-sm opacity-50 text-black font-bold">QCU</div>
            </div>
          </div>
        </td>
        <td>
          
          <span class="badge badge-ghost badge-sm h-7">COE registrar 1</span>
        </td>
        <td class="text-black">REG-105</td>
        <th>
          <button class="text-black btn btn-ghost btn-xs hover:bg-[#000450] hover:text-teal-100">DETAILS</button>
        </th>
      </tr>
      <tr>
        
        <td>
          <div class="flex items-center gap-3">
            <div class="avatar">
              <div class="mask mask-squircle w-12 h-12">
                <img src={Iconpic} alt=""/>
              </div>
            </div>
            <div>
              <div class="font-bold text-black">Brice Swyre</div>
              <div class="text text-sm opacity-50 text-black font-bold">QCU</div>
            </div>
          </div>
        </td>
        <td>
          
          <span class="badge badge-ghost badge-sm h-7">COE registrar 1</span>
        </td>
        <td class="text-black">REG-106</td>
        <th>
          <button class="text-black btn btn-ghost btn-xs hover:bg-[#000450] hover:text-teal-100">DETAILS</button>
        </th>
      </tr>
      <tr>
        
        <td>
          <div class="flex items-center gap-3">
            <div class="avatar">
              <div class="mask mask-squircle w-12 h-12">
                <img src={Iconpic} alt=""/>
              </div>
            </div>
            <div>
              <div class="font-bold text-black">Brice Swyre</div>
              <div class="text text-sm opacity-50 text-black font-bold">QCU</div>
            </div>
          </div>
        </td>
        <td>
          
          <span class="badge badge-ghost badge-sm h-7">COE registrar 1</span>
        </td>
        <td class="text-black">REG-107</td>
        <th>
          <button class="text-black btn btn-ghost btn-xs hover:bg-[#000450] hover:text-teal-100">DETAILS</button>
        </th>
      </tr>
    </tbody>
    <!-- foot -->
   
    
  </table>
</div>