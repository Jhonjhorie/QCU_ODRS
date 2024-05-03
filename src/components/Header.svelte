<script>
  import { goto } from "$app/navigation";
  import { authHandlers } from "../store/store.js";

  let userName = "Childish Reymark";
  
  function gotoDashb() {
		goto('/Student/Dashboard');
	}
  function gotoDashR() {
		goto('/Student/DocumentRequest');
	}

  function gotoTutorial() {
    goto('/Student/Tutorial');
  }

  function gotoAcc() {
    goto('/Student/Account');
  }
</script>

<header class="flex flex-col z-50 bg-white w-full  h-auto sticky top-0">
  <div
    class="max-w-[1400px] mx-auto w-full flex items-center justify-between p-2 sm:p-4 h-14 sm:h-auto"
  >
    <div class="flex justify-center items-center gap-3 sm:gap-5">
      <a href="/">
        <div class="h-9 w-9 sm:h-[50px] sm:w-[50px]">
          <img class="bg-contain" src="/QCULOGO.png" alt="Quezon City University" />
        </div>
      </a>
      <div>
        <h3 class="text-xs sm:text-2xl font-medium">Quezon City University</h3>
        <p class="text-[0.5rem] sm:text-sm italic">Good Life Start Here! QCU#1</p>
      </div>
    </div>
    <div class="flex sm:gap-2 gap-0">
      <div class="dropdown dropdown-bottom dropdown-end">
        <div tabindex="0" role="button" class="btn p-1 sm:p-2 sm:h-full sm:w-full w-3/4"><box-icon name='file' class="h-full w-full"></box-icon></div>
        <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box">
          <li><a on:click={gotoDashb}><box-icon name='dashboard' type='solid' ></box-icon>Dashboard</a></li>
          <li><a on:click={gotoDashR}><box-icon name='notepad'></box-icon>Document Request</a></li>
          <li><a on:click={gotoTutorial}><box-icon name='help-circle'></box-icon>Tutorial</a></li>
        </ul>
      </div>
      <div class="dropdown dropdown-bottom dropdown-end">
        <div tabindex="1" role="button" class="btn p-1 sm:p-2 sm:h-full sm:w-full w-3/4"><box-icon name='user-circle' class="h-full w-full"></box-icon></div>
        <ul tabindex="1" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box">
          <li><a on:click={gotoAcc}><box-icon name='user-detail' type='solid' ></box-icon>Account</a></li>
          <li><a on:click={authHandlers.logout}><box-icon name='log-out' ></box-icon>Log Out</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div class=" absolute bottom-0 w-full h-0.5 sm:h-1 bg-blue-900 drop-shadow-md"></div>
  
</header>
<div class="w-full h-1 sm:h-2 sm:mt-[-4px] mt-[-2px] bg-blue-900 drop-shadow-md">

</div>
