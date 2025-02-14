import{s as K,n as V,d as b,w as Q,i as L,b as g,r as v,c as E,e as B,g as M,B as x,h as k,j as I,k as U,o as X,a as j,F as Y,f as P,t as z,v as Z,D as F,G as ee}from"./DptCN1eL.js";import{e as q}from"./D6YF6ztN.js";import{S as te,i as ie}from"./92oxic9D.js";import{w as A}from"./Cy3-0ISO.js";import"./SLVMguDr.js";const fe=A([]),J=A([]);J.set([{id:1,title:"Mysterious Note",description:"Found in the study. Handwriting appears shaky.",type:"note",color:"#ffd700"},{id:2,title:"Broken Watch",description:"Stopped at exactly 10:47 PM. Found near the body.",type:"evidence",color:"#ff9999",connections:[1,3]},{id:3,title:"Strange Symbol",description:"Carved into the mansion's front door. Matches victim's pendant.",type:"clue",color:"#98fb98",connections:[2]}]);function ne(t,e={}){function o(){t.style.cursor="pointer",e.highlight&&(t.style.filter="brightness(1.2)")}function i(){t.style.cursor="default",e.highlight&&(t.style.filter="none")}function n(d){e.onClick&&e.onClick(d)}return t.addEventListener("mouseenter",o),t.addEventListener("mouseleave",i),t.addEventListener("click",n),{destroy(){t.removeEventListener("mouseenter",o),t.removeEventListener("mouseleave",i),t.removeEventListener("click",n)}}}function G(t,e,o){const i=t.slice();return i[6]=e[o],i}function H(t){let e,o="No evidence collected yet...";return{c(){e=k("div"),e.textContent=o,this.h()},l(i){e=E(i,"DIV",{class:!0,"data-svelte-h":!0}),x(e)!=="svelte-pic2cr"&&(e.textContent=o),this.h()},h(){v(e,"class","empty-state svelte-1s7drmi")},m(i,n){L(i,e,n)},d(i){i&&b(e)}}}function N(t){let e,o;return{c(){e=k("img"),this.h()},l(i){e=E(i,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){F(e.src,o=t[6].image)||v(e,"src",o),v(e,"alt",""),v(e,"class","mt-2 w-full rounded")},m(i,n){L(i,e,n)},p(i,n){n&2&&!F(e.src,o=i[6].image)&&v(e,"src",o)},d(i){i&&b(e)}}}function O(t){let e,o,i,n,d=t[6].title+"",h,p,r,c=t[6].description+"",l,a,u,s,_,y,C,$,m=t[6].image&&N(t);function D(){return t[2](t[6])}return{c(){e=k("div"),o=k("div"),i=I(),n=k("h3"),h=z(d),p=I(),r=k("p"),l=z(c),a=I(),m&&m.c(),u=I(),this.h()},l(w){e=E(w,"DIV",{id:!0,class:!0,style:!0});var f=B(e);o=E(f,"DIV",{class:!0}),B(o).forEach(b),i=M(f),n=E(f,"H3",{class:!0});var R=B(n);h=P(R,d),R.forEach(b),p=M(f),r=E(f,"P",{class:!0});var S=B(r);l=P(S,c),S.forEach(b),a=M(f),m&&m.l(f),u=M(f),f.forEach(b),this.h()},h(){v(o,"class","pin svelte-1s7drmi"),v(n,"class","text-lg font-bold text-burton-charcoal"),v(r,"class","text-sm mt-2"),v(e,"id",s="clue-"+t[6].id),v(e,"class","evidence-note svelte-1s7drmi"),v(e,"style",_=Object.entries(T()).map(W).join(";")+`;background-color: ${t[6].color||"#fff9e6"};`)},m(w,f){L(w,e,f),g(e,o),g(e,i),g(e,n),g(n,h),g(e,p),g(e,r),g(r,l),g(e,a),m&&m.m(e,null),g(e,u),C||($=Y(y=ne.call(null,e,{highlight:!0,onClick:D})),C=!0)},p(w,f){t=w,f&2&&d!==(d=t[6].title+"")&&j(h,d),f&2&&c!==(c=t[6].description+"")&&j(l,c),t[6].image?m?m.p(t,f):(m=N(t),m.c(),m.m(e,u)):m&&(m.d(1),m=null),f&2&&s!==(s="clue-"+t[6].id)&&v(e,"id",s),f&2&&_!==(_=Object.entries(T()).map(W).join(";")+`;background-color: ${t[6].color||"#fff9e6"};`)&&v(e,"style",_),y&&ee(y.update)&&f&2&&y.update.call(null,{highlight:!0,onClick:D})},d(w){w&&b(e),m&&m.d(),C=!1,$()}}}function le(t){let e,o,i,n,d="Evidence Board",h,p,r=t[1].length===0&&H(),c=q(t[1]),l=[];for(let a=0;a<c.length;a+=1)l[a]=O(G(t,c,a));return{c(){e=k("div"),o=k("div"),i=I(),n=k("div"),n.textContent=d,h=I(),r&&r.c(),p=I();for(let a=0;a<l.length;a+=1)l[a].c();this.h()},l(a){e=E(a,"DIV",{class:!0});var u=B(e);o=E(u,"DIV",{class:!0}),B(o).forEach(b),i=M(u),n=E(u,"DIV",{class:!0,"data-svelte-h":!0}),x(n)!=="svelte-1dfcksb"&&(n.textContent=d),h=M(u),r&&r.l(u),p=M(u);for(let s=0;s<l.length;s+=1)l[s].l(u);u.forEach(b),this.h()},h(){v(o,"class","cork-texture svelte-1s7drmi"),v(n,"class","board-title svelte-1s7drmi"),v(e,"class","evidence-board svelte-1s7drmi")},m(a,u){L(a,e,u),g(e,o),g(e,i),g(e,n),g(e,h),r&&r.m(e,null),g(e,p);for(let s=0;s<l.length;s+=1)l[s]&&l[s].m(e,null);t[3](e)},p(a,[u]){if(a[1].length===0?r||(r=H(),r.c(),r.m(e,p)):r&&(r.d(1),r=null),u&2){c=q(a[1]);let s;for(s=0;s<c.length;s+=1){const _=G(a,c,s);l[s]?l[s].p(_,u):(l[s]=O(_),l[s].c(),l[s].m(e,null))}for(;s<l.length;s+=1)l[s].d(1);l.length=c.length}},i:V,o:V,d(a){a&&b(e),r&&r.d(),Q(l,a),t[3](null)}}}function T(){return{top:`${Math.random()*60+20}%`,left:`${Math.random()*60+20}%`,transform:`rotate(${Math.random()*10-5}deg)`,"--random":Math.random()}}function se(t){console.log("Clue clicked:",t)}const W=([t,e])=>`${t}: ${e}`;function oe(t,e,o){let i;U(t,J,c=>o(1,i=c));let n,d,h;X(()=>{if(!n)return;d=document.createElement("canvas"),d.style.position="absolute",d.style.inset="0",d.style.pointerEvents="none",d.style.zIndex="1",h=d.getContext("2d"),n.appendChild(d);const c=()=>{const l=n.getBoundingClientRect();d.width=l.width,d.height=l.height,h.clearRect(0,0,d.width,d.height),h.strokeStyle="#ff000055",h.lineWidth=2,i.forEach(a=>{if(a.connections){const u=document.getElementById(`clue-${a.id}`);a.connections.forEach(s=>{const _=document.getElementById(`clue-${s}`);if(u&&_){const y=u.getBoundingClientRect(),C=_.getBoundingClientRect();h.beginPath(),h.moveTo(y.left-l.left+y.width/2,y.top-l.top+y.height/2),h.lineTo(C.left-l.left+C.width/2,C.top-l.top+C.height/2),h.stroke()}})}})};return c(),window.addEventListener("resize",c),()=>{window.removeEventListener("resize",c)}});const p=c=>se(c);function r(c){Z[c?"unshift":"push"](()=>{n=c,o(0,n)})}return[n,i,p,r]}class he extends te{constructor(e){super(),ie(this,e,oe,le,K,{})}}export{he as E,fe as i};
//# sourceMappingURL=C2qgC4ZJ.js.map
