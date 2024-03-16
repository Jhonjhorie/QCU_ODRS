import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../../chunks/ssr.js";
import { S as SectionWrapper } from "../../../../chunks/SectionWrapper.js";
import "../../../../chunks/client.js";
import "../../../../chunks/firebase.js";
import "firebase/auth";
const Login = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email = "";
  let pass = "";
  return `${validate_component(SectionWrapper, "SectionWrapper").$$render($$result, {}, {}, {
    default: () => {
      return `<header class="flex flex-col relative z-20 bg-white w-full" data-svelte-h="svelte-m8kdt9"><div class="max-w-[1400px] mx-auto w-full flex items-center justify-between p-4 pt-4"><div class="flex justify-center items-center gap-5"><a href="/"><div class="h-[70px] w-[70px]"><img class="bg-contain" src="/QCULOGO.png" alt="Quezon City University"></div></a> <div><h3 class="text-2xl font-medium">Quezon City University</h3> <p class="text-sm italic">Good Life Start Here!</p></div></div></div></header> <div class="w-full h-2 bg-blue-900 drop-shadow-md"></div> <div class="flex flex-col justify-center items-center h-[70vh]"><div role="tablist" class="tabs tabs-lifted"><a role="tab" class="tab tab-active font-bold text-lg" data-svelte-h="svelte-1pi5agn">Login</a> <a role="tab" class="tab font-semibold" data-svelte-h="svelte-4mx0ae">Register</a></div> <div class="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100"><form class="card-body"><div class="form-control"><input type="email" placeholder="Email" class="input input-bordered"${add_attribute("value", email, 0)}></div> <div class="form-control mt-2"><input type="password" placeholder="Password" class="input input-bordered"${add_attribute("value", pass, 0)}>  <label class="label justify-end"> <a class="label-text-alt link link-hover" data-svelte-h="svelte-lmbujh">Forgot password?</a></label></div> <div class="form-control mt-"><button class="btn bg-blue-900 text-white hover:text-black text-xl">${`Login`}</button></div> <p class="text-xs text-thin text-slate-500 mt-2 " data-svelte-h="svelte-11kkn4s">By using this service, you understood and agree to the QCU Online Services Terms of Use and Privacy Statement</p></form></div></div> ${``}`;
    }
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main class="flex flex-col">${validate_component(Login, "Login").$$render($$result, {}, {}, {})}</main>`;
});
export {
  Page as default
};
