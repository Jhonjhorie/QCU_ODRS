import { c as create_ssr_component, v as validate_component, d as add_attribute, e as escape, f as each } from "../../../../chunks/ssr.js";
import { S as SectionWrapper } from "../../../../chunks/SectionWrapper.js";
import "../../../../chunks/client.js";
const SignUp = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email = "";
  let pass = "";
  let cpass = "";
  let ln = "";
  let fn = "";
  let mn = "";
  let addr = "";
  let phn = "";
  let stdn = "";
  let prog = "Select Course";
  let progs = [
    "Bachelor Of Early Childhood Education (BECEd)",
    "Bachelor Of Science In Industrial Engineering (IE)",
    "Electronics Engineering (BSECE)",
    "Bachelor Of Science In Entrepreneurship (BS Entrep)",
    "Bachelor Of Science In Accountancy (BSA)",
    "Bachelor Of Science In Information Technology",
    "Bachelor Of Science In Information Systems",
    "Bachelor Of Science In Computer Science"
  ];
  return `${validate_component(SectionWrapper, "SectionWrapper").$$render($$result, {}, {}, {
    default: () => {
      return `<header class="flex flex-col relative z-20 bg-white w-full" data-svelte-h="svelte-m8kdt9"><div class="max-w-[1400px] mx-auto w-full flex items-center justify-between p-4 pt-4"><div class="flex justify-center items-center gap-5"><a href="/"><div class="h-[70px] w-[70px]"><img class="bg-contain" src="/QCULOGO.png" alt="Quezon City University"></div></a> <div><h3 class="text-2xl font-medium">Quezon City University</h3> <p class="text-sm italic">Good Life Start Here!</p></div></div></div></header> <div class="w-full h-2 bg-blue-900 drop-shadow-md"></div> <div class="flex flex-col justify-center items-center h-[80vh]"><div role="tablist" class="tabs tabs-lifted"><a role="tab" class="tab font-semibold" data-svelte-h="svelte-4c7e8u">Login</a> <a role="tab" class="tab tab-active font-bold text-lg" data-svelte-h="svelte-1acekyv">Register</a></div> <div class="card shrink-0 w-full max-w-6xl shadow-2xl bg-base-100"><form class="card-body flex flex-row gap-8"><div class="flex flex-col gap-1"><h3 class="underline" data-svelte-h="svelte-1156qpl">Personal Information</h3> <div class="form-control"> <label class="label" data-svelte-h="svelte-cpk8uo"><span class="label-text">Last Name:</span></label> <input type="text" placeholder="Last Name" class="input input-bordered" required${add_attribute("value", ln, 0)}></div> <div class="form-control mt-2"> <label class="label" data-svelte-h="svelte-o3cbnq"><span class="label-text">First Name:</span></label> <input type="text" placeholder="First Name" class="input input-bordered" required${add_attribute("value", fn, 0)}></div> <div class="form-control mt-2"> <label class="label" data-svelte-h="svelte-1qvbd7r"><span class="label-text">Middle Name:</span></label> <input type="text" placeholder="Middle Name" class="input input-bordered" required${add_attribute("value", mn, 0)}></div> <div class="form-control mt-2"> <label class="label" data-svelte-h="svelte-y7hlqx"><span class="label-text">Address:</span></label> <input type="text" placeholder="Address" class="input input-bordered" required${add_attribute("value", addr, 0)}> <p class="label-text-alt text-right text-xs text-thin text-slate-500 mt-1" data-svelte-h="svelte-1wq9zvx">No. | Street | Barangay | City | Zip Code</p></div></div> <div class="flex flex-col gap-1"><h3 class="underline" data-svelte-h="svelte-1bnsibq">Educational Information</h3> <div class="form-control"> <label class="label" data-svelte-h="svelte-1qj5rgu"><span class="label-text">Phone Number:</span></label> <input type="number" placeholder="Phone Number" class="input input-bordered no-arrow" required${add_attribute("value", phn, 0)}></div> <div class="form-control mt-2"> <label class="label" data-svelte-h="svelte-1jykf8p"><span class="label-text">Student Number:</span></label> <input type="number" placeholder="Student Number" class="input input-bordered" required${add_attribute("value", stdn, 0)}></div> <div class="form-control mt-2"><div class="dropdown dropdown-top"> <label class="label" data-svelte-h="svelte-fuw3fx"><span class="label-text">Program:</span></label> <div tabindex="0" role="button" class="btn w-96">${escape(prog)}</div>  <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-96">${each(progs, (progv) => {
        return `<li><a>${escape(progv)}</a></li>`;
      })}</ul></div></div> <div class="form-control mt-2"> <label class="label" data-svelte-h="svelte-addrvt"><span class="label-text">Status:</span></label> <label class="label cursor-pointer"><span class="label-text" data-svelte-h="svelte-8hamk3">Not Graduate (Unfinished Degree)</span> <input type="radio" name="radio-10" class="radio checked:bg-blue-500" required checked value="0"${""}></label></div> <div class="form-control"><label class="label cursor-pointer"><span class="label-text" data-svelte-h="svelte-et1dlx">Graduated (Finished Degree)</span> <input type="radio" name="radio-10" class="radio checked:bg-green-500" required checked value="1"${""}></label></div></div> <div class="flex flex-col gap-1"><h3 class="underline" data-svelte-h="svelte-jd5oi6">Account Information</h3> <div class="form-control"> <label class="label" data-svelte-h="svelte-g6gxnj"><span class="label-text">Email</span></label> <input type="email" placeholder="Email" class="input input-bordered" required${add_attribute("value", email, 0)}></div> <div class="form-control mt-2"> <label class="label" data-svelte-h="svelte-15hib8m"><span class="label-text">Password</span></label> <input type="password" placeholder="Password" class="input input-bordered" required${add_attribute("value", pass, 0)}></div> <div class="form-control mt-2"> <label class="label" data-svelte-h="svelte-1ujlwmq"><span class="label-text">Confirm Password</span></label> <input type="password" placeholder="Confirm Password" class="input input-bordered" required${add_attribute("value", cpass, 0)}></div> <div class="form-control mt-5" data-svelte-h="svelte-ayvbzo"><button class="btn bg-blue-900 text-white hover:text-black text-lg">Register</button></div> <p class="text-xs text-thin text-slate-500 mt-2 " data-svelte-h="svelte-11kkn4s">By using this service, you understood and agree to the QCU Online Services Terms of Use and Privacy Statement</p></div></form></div></div>`;
    }
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main class="flex flex-col">${validate_component(SignUp, "SignUp").$$render($$result, {}, {}, {})}</main>`;
});
export {
  Page as default
};
