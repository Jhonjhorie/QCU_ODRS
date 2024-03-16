import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import "../../chunks/client.js";
import { S as SectionWrapper } from "../../chunks/SectionWrapper.js";
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(SectionWrapper, "SectionWrapper").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="absolute top-8 right-10" data-svelte-h="svelte-1o6xvb2"><p class="text-lg italic text-white">Good Life Start Here!</p></div> <div class="hero min-h-screen bg-cover" style="background-image: url('QCU CAMPUS.jpg');"><div class="hero-overlay bg-opacity-60"></div> <div class="hero-content text-center text-neutral-content gap-10"><img src="QCULOGO.png" class="w-52 rounded-lg shadow-2xl" alt=""> <div class="text-left max-w-xl"><h1 class="mb-5 text-5xl font-bold" data-svelte-h="svelte-4e2bi8">I LOVE YOU MAAM MACEH</h1> <p class="mb-5" data-svelte-h="svelte-1ucqwp8">For Students and Graduates of QCU San Bartolomeo (Main) <br>
          (Bachelor Degree / Traditional Undergrad) <br>
          For Concerns, email us at registrar@qcu.edu.ph</p> <button class="btn btn-outline btn-error" data-svelte-h="svelte-qhlxhy">Student Page</button> <button class="btn btn-outline btn-error" data-svelte-h="svelte-1l3gaby">Registrar Page</button> <button class="btn btn-outline btn-error" data-svelte-h="svelte-gtkm91">Admin Page</button></div></div></div>`;
    }
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main class="flex flex-col">${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})}</main>`;
});
export {
  Page as default
};
