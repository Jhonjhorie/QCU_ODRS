import{s as q,n as O}from"../chunks/scheduler.MQulC-dI.js";import{S as Q,i as R,e as o,k as U,c,a as w,l as F,d as r,n,g as $,o as G,q as P,r as B,u as N,s as y,m as C,f as E,h as u,p as W}from"../chunks/index.KfVzBilI.js";import{S as J}from"../chunks/SectionWrapper.BeRDYptP.js";import{g as K}from"../chunks/entry.Cde8vRDK.js";function X(L){let e,i='<div class="max-w-[1400px] mx-auto w-full flex items-center justify-between p-4 pt-4"><div class="flex justify-center items-center gap-5"><a href="/"><div class="h-[70px] w-[70px]"><img class="bg-contain" src="/QCULOGO.png" alt="Quezon City University"/></div></a> <div><h3 class="text-2xl font-medium">Quezon City University</h3> <p class="text-sm italic">Good Life Start Here!</p></div></div></div>',m,t,a,l,p,D='<a role="tab" class="tab tab-active font-bold text-lg">Forgot Password</a>',H,b,d,h,I='<input type="email" placeholder="Enter Email" class="input input-bordered" required=""/>',M,x,S='<button class="btn bg-blue-900 text-white hover:text-black text-xl">Submit</button>',T,_,v,V="Remember password?",k,j;return{c(){e=o("header"),e.innerHTML=i,m=y(),t=o("div"),a=y(),l=o("div"),p=o("div"),p.innerHTML=D,H=y(),b=o("div"),d=o("form"),h=o("div"),h.innerHTML=I,M=y(),x=o("div"),x.innerHTML=S,T=y(),_=o("label"),v=o("a"),v.textContent=V,this.h()},l(s){e=c(s,"HEADER",{class:!0,"data-svelte-h":!0}),C(e)!=="svelte-1l74x7l"&&(e.innerHTML=i),m=E(s),t=c(s,"DIV",{class:!0}),w(t).forEach(r),a=E(s),l=c(s,"DIV",{class:!0});var f=w(l);p=c(f,"DIV",{role:!0,class:!0,"data-svelte-h":!0}),C(p)!=="svelte-1fvk4bl"&&(p.innerHTML=D),H=E(f),b=c(f,"DIV",{class:!0});var z=w(b);d=c(z,"FORM",{class:!0});var g=w(d);h=c(g,"DIV",{class:!0,"data-svelte-h":!0}),C(h)!=="svelte-mz09d1"&&(h.innerHTML=I),M=E(g),x=c(g,"DIV",{class:!0,"data-svelte-h":!0}),C(x)!=="svelte-1mdu5mh"&&(x.innerHTML=S),T=E(g),_=c(g,"LABEL",{class:!0});var A=w(_);v=c(A,"A",{class:!0,"data-svelte-h":!0}),C(v)!=="svelte-1jluaox"&&(v.textContent=V),A.forEach(r),g.forEach(r),z.forEach(r),f.forEach(r),this.h()},h(){n(e,"class","flex flex-col relative z-20 bg-white w-full"),n(t,"class","w-full h-2 bg-blue-900 drop-shadow-md"),n(p,"role","tablist"),n(p,"class","tabs tabs-lifted"),n(h,"class","form-control"),n(x,"class","form-control mt-4"),n(v,"class","label-text-alt link link-hover"),n(_,"class","label justify-end"),n(d,"class","card-body"),n(b,"class","card shrink-0 w-full max-w-sm shadow-2xl bg-base-100"),n(l,"class","flex flex-col justify-center items-center h-[70vh]")},m(s,f){$(s,e,f),$(s,m,f),$(s,t,f),$(s,a,f),$(s,l,f),u(l,p),u(l,H),u(l,b),u(b,d),u(d,h),u(d,M),u(d,x),u(d,T),u(d,_),u(_,v),k||(j=W(v,"click",L[0]),k=!0)},p:O,d(s){s&&(r(e),r(m),r(t),r(a),r(l)),k=!1,j()}}}function Y(L){let e,i,m;return i=new J({props:{$$slots:{default:[X]},$$scope:{ctx:L}}}),{c(){e=o("main"),U(i.$$.fragment),this.h()},l(t){e=c(t,"MAIN",{class:!0});var a=w(e);F(i.$$.fragment,a),a.forEach(r),this.h()},h(){n(e,"class","flex flex-col")},m(t,a){$(t,e,a),G(i,e,null),m=!0},p(t,[a]){const l={};a&2&&(l.$$scope={dirty:a,ctx:t}),i.$set(l)},i(t){m||(P(i.$$.fragment,t),m=!0)},o(t){B(i.$$.fragment,t),m=!1},d(t){t&&r(e),N(i)}}}function Z(L){function e(){K("/Student/Login")}return[e]}class le extends Q{constructor(e){super(),R(this,e,Z,Y,q,{})}}export{le as component};