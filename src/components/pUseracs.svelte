<script>
    import Pic2 from '../image/jelly-avatar-icon.png';
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
         
            <th class="text-slate-200 text-[15px]">FULL NAME</th>
            <th class="text-slate-200 text-[15px]">COURSE</th>
            <th class="text-slate-200 text-[15px]">STUDENT ID</th>
          </tr>
        </thead>
        <tbody> 
          <!-- row 1 -->
          <tr>
          
            <td>
              <div class="flex items-center gap-3">
                <div class="avatar">
                  <div class=" w-12 h-12">
                    <img src={Pic2} alt=""/>
                  </div>
                </div>
                <div>
                  <div class="font-medium text-black">Hart Hagerty</div>
               
                </div>
              </div>
            </td>
            <td>
              
              <span class="badge badge-ghost bg-slate-600 text-white badge-sm h-7">ENTREP</span>
            </td>
            <td class="text-black">20-2020</td>
          
          </tr>
          <!-- row 2 -->
          <tr>
          
            <td>
              <div class="flex items-center gap-3">
                <div class="avatar">
                  <div class=" w-12 h-12">
                    <img src={Pic2} alt=""/>
                  </div>
                </div>
                <div>
                  <div class="text font-medium text-black">Liz cute</div>
                  
                </div>
              </div>
            </td>
            <td>
              
              <span class="badge badge-ghost bg-slate-600 text-white  badge-sm h-7">BSIT</span>
            </td>
            <td class="text-black">19-2012</td>
           
          </tr>
          <!-- row 3 -->
          <tr>
           
            <td>
              <div class="flex items-center gap-3">
                <div class="avatar">
                  <div class=" w-12 h-12">
                    <img src={Pic2} alt=""/>
                  </div>
                </div>
                <div>
                  <div class="font-medium text-black">BABY CALMA JR.</div>
                 
                </div>
              </div>
            </td>
            <td>
              
              <span class="badge badge-ghost bg-slate-600 text-white badge-sm h-7">BSA</span>
            </td>
            <td class="text-black">19-1023</td>
           
          </tr>
          <!-- row 4 -->
          
        </tbody>
        <!-- foot -->
       
        
      </table>
    </div>