
<script>
    import { goto } from "$app/navigation";
    import { authHandlers, authStore } from "../../store/store";
    import { getAuth } from "firebase/auth";
    import { db } from "$lib/firebase/firebase";
    import { doc, getDoc } from 'firebase/firestore';
    import { onMount } from "svelte";
    
    function gotoDashboard() {
		goto('/Registrar/Dashboard');
	}
  function gotoRequests() {
		goto('/Registrar/Requests');
	}
  function gotoHistory() {
		goto('/Registrar/History');
	}

    /**
   * @type {import("@firebase/auth").User | null}
   */
    let user;
    /**
   * @type {import("@firebase/firestore").DocumentData | null}
   */
    let userData = null;
    let dept = "" ;
    let name = "Loading...";
    const auth = getAuth();
    onMount(async () => {
      user = auth.currentUser;
      
      if (user) {
        console.log('User exists:', user.uid, user.email);
        const docRef = doc(db, "registrar", user.uid);
  
        try {
          const snapshot = await getDoc(docRef);
          if (snapshot.exists()) {
            console.log('Document exists');
            const data = snapshot.data();
            console.log('User Department:', data.department_name);
            userData = data;
            dept = data.department_name;
            name = data.fullname;
          } else {
            console.log('Document does not exist');
          }
        } catch (error) {
          console.error("Error getting document:", error);
        }
      } else {
        console.log('User not logged in');
      }
    });
</script>


<div class="h-screen w-[300px] bg-white z-20 shadow-xl" >
    <h1 class="text-black font-semibold text-[25px] text-center pt-2">REGISTRAR</h1>
    <div class="pt-2">
   
        <img src="/user.png" class="w-[130px] h-[130px] rounded-full mx-auto" alt="" />
    </div>

    {#if name === "Loading..."}
    <span class="loading loading-dots loading-md w-[25px] py-8 bg-blue-900 text-black block mx-auto"></span>
    {:else}
    <h1 class="text-black font-semibold text-[25px] text-center pt-2">
      {name}
    </h1>
    <h1 class="text-black font-semibold text-[15px] text-center pb-2 pt-0" > {dept}  </h1>

        {/if}



    <div class="h-1 w-[250px] bg-[#2f2f2ff0] mx-auto "> </div>

    <ul class="justify-end ">
        <li class="pt-4 text-center">
            <button class="h-[40px] rounded-[10px] hover:bg-slate-800 text-white hover:scale-95 btn-wide bg-slate-900" on:click={gotoDashboard}>DASHBOARD</button> 
        </li>
        <li class="pt-3 text-center">
            <button class="h-[40px] rounded-[10px] hover:bg-slate-800 text-white hover:scale-95 btn-wide bg-slate-900" on:click={gotoRequests} >REQUESTS</button>
        </li>
        <li class="pt-3 text-center">
            <button class="h-[40px] rounded-[10px] hover:bg-slate-800 text-white hover:scale-95 btn-wide bg-slate-900" on:click={gotoHistory}>HISTORY</button>
        </li> 
       
        <li class="fixed pl-5 pb-5 bottom-0">
            <button  class="h-[40px] rounded-[10px] hover:bg-slate-800 text-white hover:scale-95  btn-wide bg-slate-900" on:click={authHandlers.logout}>LOGOUT</button>
        </li> 
    </ul>
    
</div>
