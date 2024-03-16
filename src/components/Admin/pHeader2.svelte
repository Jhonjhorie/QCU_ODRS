<script>
     import { goto } from '$app/navigation';

     function gotoAdminEdit () {
                goto('/Admin/pAccedit')
    }
</script>

<header class="z-20 top-0 bg-white h-[100px] border-b-[10px] border-[#000450] shadow-lg sticky ">
    <div class="flex ">
        <img src="/QCULOGO.png" alt="logo" class="h-[70px] w-[70px] ml-10 mt-3">
        <div class="ml-5">
            <h1 class="text-[30px] mt-3 mb-[-30px] font-semibold text-black"> Quezon City University </h1><br/>
            <span class="italic font-medium text-[18px] text-black">Good Life Starts Here!</span>
        </div>
        
        <div class=" right-0 justify-end absolute pr-5 ">
            <div class="p-5">
                <img on:click={gotoAdminEdit} src="/user.png" class=" cursor-pointer w-[50px] h-[50px] rounded-full ring-offset-base-100 ring-offset-2 mx-auto" alt="pao" />
            </div>
        </div>
    </div>   
</header>