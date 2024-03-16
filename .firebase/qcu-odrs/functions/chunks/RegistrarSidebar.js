import { c as create_ssr_component } from "./ssr.js";
import "./client.js";
const RegistrarSidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="h-full w-[300px] bg-white z-20 shadow-xl"><div class="pt-7" data-svelte-h="svelte-11wui9t"><img src="/cute.jpg" class="w-[130px] h-[130px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mx-auto" alt=""></div> <h1 class="text-black font-semibold text-[25px] text-center pt-2" data-svelte-h="svelte-1ebv9dr">Registrar</h1> <h1 class="text-black font-semibold text-[15px] text-center pb-2 pt-0" data-svelte-h="svelte-338rrk">Rieluminous</h1> <div class="h-1 w-[250px] bg-[#2f2f2ff0] mx-auto " data-svelte-h="svelte-1qyc4lq"></div> <ul class="justify-end "><li class="pt-4 text-center"><button class="h-[40px] rounded-[10px] hover:bg-slate-800 text-white hover:scale-95 btn-wide bg-slate-900" data-svelte-h="svelte-8c8241">DASHBOARD</button></li> <li class="pt-3 text-center"><button class="h-[40px] rounded-[10px] hover:bg-slate-800 text-white hover:scale-95 btn-wide bg-slate-900" data-svelte-h="svelte-1y46hzz">REQUESTS</button></li> <li class="pt-3 text-center"><button class="h-[40px] rounded-[10px] hover:bg-slate-800 text-white hover:scale-95 btn-wide bg-slate-900" data-svelte-h="svelte-1h0urkh">HISTORY</button></li> <li class="pt-20 mt-16 pb-5 text-center"><button class="h-[40px] rounded-[10px] hover:bg-slate-800 text-white hover:scale-95 btn-wide bg-slate-900" data-svelte-h="svelte-sbsc74">LOGOUT</button></li></ul></div>`;
});
export {
  RegistrarSidebar as R
};
