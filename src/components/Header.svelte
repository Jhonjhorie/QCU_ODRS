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

  function gotoLogin() {
    goto('/Student/Login');
  }

  function gotoAcc() {
    goto('/Student/Account');
  }
</script>

<header class="flex flex-col relative z-20 bg-white w-full">
  <div
    class="max-w-[1400px] mx-auto w-full flex items-center justify-between p-4 pt-4"
  >
    <div class="flex justify-center items-center gap-5">
      <a href="/">
        <div class="h-[70px] w-[70px]">
          <img class="bg-contain" src="/QCULOGO.png" alt="Quezon City University" />
        </div>
      </a>
      <div>
        <h3 class="text-2xl font-medium">Quezon City University</h3>
        <p class="text-sm italic">Good Life Start Here!</p>
      </div>
    </div>
    <div class="flex gap-2">
      <div class="dropdown dropdown-bottom dropdown-end">
        <div tabindex="0" role="button" class="btn p-2"><box-icon name='file' class="h-full w-full"></box-icon></div>
        <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box">
          <li><a on:click={gotoDashb}><box-icon name='dashboard' type='solid' ></box-icon>Dashboard</a></li>
          <li><a on:click={gotoDashR}><box-icon name='notepad'></box-icon>Document Request</a></li>
          <li><a on:click={gotoDashR}><box-icon name='help-circle'></box-icon>Tutorial</a></li>
        </ul>
      </div>
      <div class="dropdown dropdown-bottom dropdown-end">
        <div tabindex="1" role="button" class="btn p-2"><box-icon name='user-circle' class="h-full w-full"></box-icon></div>
        <ul tabindex="1" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box">
          <li><a on:click={gotoAcc}><box-icon name='user-detail' type='solid' ></box-icon>Account</a></li>
          <li><a on:click={authHandlers.logout}><box-icon name='log-out' ></box-icon>Log Out</a></li>
        </ul>
      </div>
    </div>
  </div>
  
</header>
<div class="w-full h-2 bg-blue-900 drop-shadow-md">

</div>
