import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import "../../../../chunks/client.js";
import { P as PHeader2 } from "../../../../chunks/pHeader2.js";
import { P as Psidebar } from "../../../../chunks/psidebar.js";
import { P as PBoxesaccounts } from "../../../../chunks/pBoxesaccounts.js";
const css = {
  code: "input.svelte-wbk6pp::-moz-placeholder{color:black}input.svelte-wbk6pp::placeholder{color:black}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="h-[105vh] w-full bg-slate-300">${validate_component(PHeader2, "PHeader").$$render($$result, {}, {}, {})} ${validate_component(Psidebar, "Psidebar").$$render($$result, {}, {}, {})} <div class="ml-[300px] p-5 "><h1 class="pl-0 text-[30px] text-black font-bold" data-svelte-h="svelte-g9kau0">MANAGE ACCOUNTS<span class="float-end text-[20px] text-slate-600"></span></h1>  <div class="h-[200px] w-[200] flex gap-x-5">${validate_component(PBoxesaccounts, "PBoxesaccounts").$$render($$result, {}, {}, {})}  <div class="h-[70vh] w-[80%] bg-slate-100 mt-3 rounded-md shadow-md p-5"><div class="w-full pl-10 " data-svelte-h="svelte-dc8bto"><h1 class="text-slate-900 text-[25px] font-bold ">ACCOUNT INFORMATION</h1></div>  <div class="flex w-full pl-10 pr-10 pt-5 gap-14 " data-svelte-h="svelte-1jv2y0q"><div class="w-full p-1 "><label class="form-control w-full max-w-xs "><div class="label"><span class="label-text text-black text-[15px] font-medium ">Full name:</span></div> <input type="text" placeholder="Orosco Timotheo" class="text-black bg-slate-300 input w-full max-w-xs shadow-sm border-[0.5px] border-[#0a0a0a2b] svelte-wbk6pp"></label> <label class="form-control w-full max-w-xs pt-4 "><div class="label"><span class="label-text text-black text-[15px] font-medium">Username:</span></div> <input type="text" placeholder="REGISTRARCSS" class="text-black bg-slate-300 input w-full max-w-xs shadow-sm border-[0.5px] border-[#0a0a0a2b]  svelte-wbk6pp"></label></div> <div class="w-full p-1"><label class="form-control w-full max-w-xs "><div class="label"><span class="label-text text-black text-[15px] font-medium">Position:</span></div> <input type="text" placeholder="CSS reg1" class="text-black bg-slate-300 input w-full max-w-xs shadow-sm border-[0.5px] border-[#0a0a0a2b]  svelte-wbk6pp"></label> <label class="form-control w-full max-w-xs pt-4 "><div class="label"><span class="label-text text-black text-[15px] font-medium ">Pasword:</span></div> <input type="password" placeholder="MAHALKITA101" class="text-black bg-slate-300 input w-full max-w-xs shadow-sm border-[0.5px] border-[#0a0a0a2b] svelte-wbk6pp"></label></div></div> <div class="p-8 pr-14 float-right"><button onclick="my_modal_5.showModal()" class="btn btn-active shadow-md hover:bg-red-800 " data-svelte-h="svelte-18ef8l0">DELETE</button> <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle"><div class="modal-box"><h3 class="font-bold text-lg text-red-700" data-svelte-h="svelte-11z234r">Delete</h3> <p class="py-4" data-svelte-h="svelte-9xfcpg">Are you sure you want to DELETE this account?</p> <div class="modal-action"><form method="dialog"> <button onclick="my_modal_2.showModal()" class="btn" data-svelte-h="svelte-12o5dp7">Yes</button> <button class="btn" data-svelte-h="svelte-17cpapt">Close</button> <dialog id="my_modal_2" class="modal" data-svelte-h="svelte-fuor77"><div class="modal-box"><p class="py-4">Account DELETED</p></div> <form method="dialog" class="modal-backdrop"><button>close</button></form></dialog></form></div></div></dialog></div> <div class="pt-8 float-right"><button onclick="my_modal_4.showModal()" class="btn btn-active shadow-md hover:bg-green-800" data-svelte-h="svelte-dn3g3l">UPDATE</button> <dialog id="my_modal_4" class="modal modal-bottom sm:modal-middle"><div class="modal-box"><h3 class="font-bold text-lg text-green-700" data-svelte-h="svelte-tei9v5">Update</h3> <p class="py-4" data-svelte-h="svelte-mjslwy">Are you sure you want to UPDATE this account?</p> <div class="modal-action"><form method="dialog"> <button onclick="my_modal_1.showModal()" class="btn" data-svelte-h="svelte-1iiu6zo">Yes</button> <button class="btn" data-svelte-h="svelte-17cpapt">Close</button> <dialog id="my_modal_1" class="modal" data-svelte-h="svelte-yavcw0"><div class="modal-box"><p class="py-4">Account UPDATED</p></div> <form method="dialog" class="modal-backdrop"><button>close</button></form></dialog></form></div></div></dialog></div></div></div></div></div>`;
});
export {
  Page as default
};
