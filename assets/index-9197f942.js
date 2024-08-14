var be=Object.defineProperty;var _e=(e,t,n)=>t in e?be(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ae=(e,t,n)=>(_e(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const p of a.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&o(p)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();function K(){}function ge(e){return e()}function pe(){return Object.create(null)}function ie(e){e.forEach(ge)}function ye(e){return typeof e=="function"}function we(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let se;function ze(e,t){return e===t?!0:(se||(se=document.createElement("a")),se.href=t,e===se.href)}function Ee(e){return Object.keys(e).length===0}function b(e,t){e.appendChild(t)}function N(e,t,n){e.insertBefore(t,n||null)}function H(e){e.parentNode&&e.parentNode.removeChild(e)}function E(e){return document.createElement(e)}function Te(e){return document.createTextNode(e)}function L(){return Te(" ")}function u(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ke(e){return Array.from(e.childNodes)}let te;function ee(e){te=e}function xe(){if(!te)throw new Error("Function called outside component initialization");return te}function Se(e){xe().$$.on_mount.push(e)}const J=[],M=[];let U=[];const he=[],Oe=Promise.resolve();let ue=!1;function Pe(){ue||(ue=!0,Oe.then(ve))}function de(e){U.push(e)}const le=new Set;let V=0;function ve(){if(V!==0)return;const e=te;do{try{for(;V<J.length;){const t=J[V];V++,ee(t),Le(t.$$)}}catch(t){throw J.length=0,V=0,t}for(ee(null),J.length=0,V=0;M.length;)M.pop()();for(let t=0;t<U.length;t+=1){const n=U[t];le.has(n)||(le.add(n),n())}U.length=0}while(J.length);for(;he.length;)he.pop()();ue=!1,le.clear(),ee(e)}function Le(e){if(e.fragment!==null){e.update(),ie(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(de)}}function Me(e){const t=[],n=[];U.forEach(o=>e.indexOf(o)===-1?t.push(o):n.push(o)),n.forEach(o=>o()),U=t}const He=new Set;function Ae(e,t){e&&e.i&&(He.delete(e),e.i(t))}function $e(e,t,n){const{fragment:o,after_update:s}=e.$$;o&&o.m(t,n),de(()=>{const a=e.$$.on_mount.map(ge).filter(ye);e.$$.on_destroy?e.$$.on_destroy.push(...a):ie(a),e.$$.on_mount=[]}),s.forEach(de)}function Ne(e,t){const n=e.$$;n.fragment!==null&&(Me(n.after_update),ie(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ce(e,t){e.$$.dirty[0]===-1&&(J.push(e),Pe(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Be(e,t,n,o,s,a,p,l=[-1]){const y=te;ee(e);const d=e.$$={fragment:null,ctx:[],props:a,update:K,not_equal:s,bound:pe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(y?y.$$.context:[])),callbacks:pe(),dirty:l,skip_bound:!1,root:t.target||y.$$.root};p&&p(d.root);let _=!1;if(d.ctx=n?n(e,t.props||{},(v,w,...x)=>{const m=x.length?x[0]:w;return d.ctx&&s(d.ctx[v],d.ctx[v]=m)&&(!d.skip_bound&&d.bound[v]&&d.bound[v](m),_&&Ce(e,v)),w}):[],d.update(),_=!0,ie(d.before_update),d.fragment=o?o(d.ctx):!1,t.target){if(t.hydrate){const v=ke(t.target);d.fragment&&d.fragment.l(v),v.forEach(H)}else d.fragment&&d.fragment.c();t.intro&&Ae(e.$$.fragment),$e(e,t.target,t.anchor),ve()}ee(y)}class qe{constructor(){ae(this,"$$");ae(this,"$$set")}$destroy(){Ne(this,1),this.$destroy=K}$on(t,n){if(!ye(n))return K;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const s=o.indexOf(n);s!==-1&&o.splice(s,1)}}$set(t){this.$$set&&!Ee(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Ie="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Ie);function Fe(e,t=document){return typeof e=="string"?Array.from(t.querySelectorAll(e)):e instanceof Element?[e]:e instanceof NodeList?Array.from(e):e instanceof Array?e:[]}function Re(e){const t=document.createElement("div");t.className=`scrollama__debug-step ${e}`,t.style.position="fixed",t.style.left="0",t.style.width="100%",t.style.zIndex="9999",t.style.borderTop="2px solid black",t.style.borderBottom="2px solid black";const n=document.createElement("p");return n.style.position="absolute",n.style.left="0",n.style.height="1px",n.style.width="100%",n.style.borderTop="1px dashed black",t.appendChild(n),document.body.appendChild(t),t}function We({id:e,step:t,marginTop:n}){const{index:o,height:s}=t,a=`scrollama__debug-step--${e}-${o}`;let p=document.querySelector(`.${a}`);p||(p=Re(a)),p.style.top=`${n*-1}px`,p.style.height=`${s}px`,p.querySelector("p").style.top=`${s/2}px`}function je(){const e="abcdefghijklmnopqrstuvwxyz",t=Date.now(),n=[];for(let o=0;o<6;o+=1){const s=e[Math.floor(Math.random()*e.length)];n.push(s)}return`${n.join("")}${t}`}function re(e){console.error(`scrollama error: ${e}`)}function Z(e){return+e.getAttribute("data-scrollama-index")}function De(e,t){const n=Math.ceil(e/t),o=[],s=1/n;for(let a=0;a<n+1;a+=1)o.push(a*s);return o}function ce(e){if(typeof e=="string"&&e.indexOf("px")>0){const t=+e.replace("px","");return isNaN(t)?(err("offset value must be in 'px' format. Fallback to 0.5."),{format:"percent",value:.5}):{format:"pixels",value:t}}else if(typeof e=="number"||!isNaN(+e))return e>1&&err("offset value is greater than 1. Fallback to 1."),e<0&&err("offset value is lower than 0. Fallback to 0."),{format:"percent",value:Math.min(Math.max(0,e),1)};return null}function Ye(e){e.forEach(t=>t.node.setAttribute("data-scrollama-index",t.index))}function Ve(e){const{top:t}=e.getBoundingClientRect(),n=window.pageYOffset,o=document.body.clientTop||0;return t+n-o}let G,oe,C;function me(e){const t=e?e.scrollTop:window.pageYOffset;G!==t&&(G=t,G>oe?C="down":G<oe&&(C="up"),oe=G)}function Je(e){G=0,oe=0,document.addEventListener("scroll",()=>me(e))}function Ge(){let e={},t=je(),n=[],o,s,a,p=0,l=!1,y=!1,d=!1,_=!1,v=[];function w(){e={stepEnter:()=>{},stepExit:()=>{},stepProgress:()=>{}},v=[]}function x(r){r&&!l&&k(),!r&&l&&A(),l=r}function m(r,f){const c=Z(r),h=n[c];f!==void 0&&(h.progress=f);const z={element:r,index:c,progress:f,direction:C};h.state==="enter"&&e.stepProgress(z)}function R(r,f=!0){const c=Z(r),h=n[c],z={element:r,index:c,direction:C};h.direction=C,h.state="enter",v[c]||e.stepEnter(z),_&&(v[c]=!0)}function O(r,f=!0){const c=Z(r),h=n[c];if(!h.state)return!1;const z={element:r,index:c,direction:C};y&&(C==="down"&&h.progress<1?m(r,1):C==="up"&&h.progress>0&&m(r,0)),h.direction=C,h.state="exit",e.stepExit(z)}function W([r]){const f=Z(r.target),c=n[f],h=r.target.offsetHeight;h!==c.height&&(c.height=h,P(c),$(c),S(c))}function i([r]){me(s);const{isIntersecting:f,target:c}=r;f?R(c):O(c)}function B([r]){const f=Z(r.target),c=n[f],{isIntersecting:h,intersectionRatio:z,target:I}=r;h&&c.state==="enter"&&m(I,z)}function P({observers:r}){Object.keys(r).map(f=>{r[f].disconnect()})}function A(){n.forEach(P)}function S(r){const f=new ResizeObserver(W);f.observe(r.node),r.observers.resize=f}function q(){n.forEach(S)}function $(r){const f=window.innerHeight,c=r.offset||o,h=c.format==="pixels"?1:f,z=c.value*h,I=r.height/2-z,D=r.height/2-(f-z),Y={rootMargin:`${I}px 0px ${D}px 0px`,threshold:.5,root:a},fe=new IntersectionObserver(i,Y);fe.observe(r.node),r.observers.step=fe,d&&We({id:t,step:r,marginTop:I,marginBottom:D})}function Q(){n.forEach($)}function j(r){const f=window.innerHeight,c=r.offset||o,h=c.format==="pixels"?1:f,z=c.value*h,I=-z+r.height,D=z-f,X=`${I}px 0px ${D}px 0px`,ne=De(r.height,p),F={rootMargin:X,threshold:ne},Y=new IntersectionObserver(B,F);Y.observe(r.node),r.observers.progress=Y}function T(){n.forEach(j)}function k(){A(),q(),Q(),y&&T()}const g={};return g.setup=({step:r,parent:f,offset:c=.5,threshold:h=4,progress:z=!1,once:I=!1,debug:D=!1,container:X=void 0,root:ne=null})=>(Je(X),n=Fe(r,f).map((F,Y)=>({index:Y,direction:void 0,height:F.offsetHeight,node:F,observers:{},offset:ce(F.dataset.offset),top:Ve(F),progress:0,state:void 0})),n.length?(y=z,_=I,d=D,p=Math.max(1,+h),o=ce(c),s=X,a=ne,w(),Ye(n),x(!0),g):(re("no step elements"),g)),g.enable=()=>(x(!0),g),g.disable=()=>(x(!1),g),g.destroy=()=>(x(!1),w(),g),g.resize=()=>(k(),g),g.offset=r=>r==null?o.value:(o=ce(r),k(),g),g.onStepEnter=r=>(typeof r=="function"?e.stepEnter=r:re("onStepEnter requires a function"),g),g.onStepExit=r=>(typeof r=="function"?e.stepExit=r:re("onStepExit requires a function"),g),g.onStepProgress=r=>(typeof r=="function"?e.stepProgress=r:re("onStepProgress requires a function"),g),g}function Ke(e){let t,n,o,s,a,p,l,y,d,_,v,w,x,m,R,O,W,i,B,P,A,S,q,$,Q,j;return{c(){t=E("header"),t.innerHTML='<h1 class="svelte-92ty5z">Hastings Park, an $80M business</h1> <p class="subhead svelte-92ty5z">The PNE’s annual fair first opened in 1910. At nearly a half-kilometre square, it was one of the largest of its kind in North America.</p>',n=L(),o=E("div"),s=E("video"),p=L(),l=E("div"),y=E("div"),y.innerHTML='<div class="copy svelte-92ty5z"><p>During the Second World War the fair was shut down and the site was used to detain Japanese Canadians. Several plaques now commemorate the roughly 8,000 people who were detained at buildings around the 0.7-square-kilometre site.</p></div>',d=L(),_=E("div"),_.innerHTML='<div class="copy svelte-92ty5z"><h2 class="svelte-92ty5z">PNE Forum</h2> <p class="section-subhead svelte-92ty5z">Built 1931</p> <p>The art deco heritage building is a multi-use facility used mainly for commercial video shoots. During the Second World War, Japanese Canadian men and teen boys were detained here.</p> <h2 class="svelte-92ty5z">Garden Auditorium</h2> <p class="section-subhead svelte-92ty5z">Built 1939-40</p> <p>The streamlined art moderne heritage building hosts events and classes by CircusWest Performing Arts Society.</p></div>',v=L(),w=E("div"),w.innerHTML='<div class="copy svelte-92ty5z"><h2 class="svelte-92ty5z">Pacific Coliseum</h2> <p class="section-subhead svelte-92ty5z">Built 1968</p> <p>The 17,500-seat facility hosts sports, concerts and special events. It was home to the Vancouver Canucks from 1970-1995.</p></div>',x=L(),m=E("div"),m.innerHTML='<div class="copy svelte-92ty5z"><h2 class="svelte-92ty5z">Agrodome</h2> <p class="section-subhead svelte-92ty5z">Built 1963</p> <p>The 2,700-seat facility houses an ice skating rink for minor hockey and figure skating events as well as agricultural shows.</p> <h2 class="svelte-92ty5z">Livestock building</h2> <p class="section-subhead svelte-92ty5z">Built 1929-39</p> <p>The art moderne heritage building is used mainly for filming and storage. During the Second World War, over 3,000 Japanese Canadian women and children were detained here.</p></div>',R=L(),O=E("div"),O.innerHTML='<div class="copy svelte-92ty5z"><h2 class="svelte-92ty5z">Hastings racecourse</h2> <p class="section-subhead svelte-92ty5z">Built 1892</p> <p>Officials have talked for years about ‘greening’ the track, which covers nearly 30% of the park.</p></div>',W=L(),i=E("div"),i.innerHTML='<div class="copy svelte-92ty5z"><h2 class="svelte-92ty5z">Parking and roads</h2> <p>Roughly 25% of Hastings Park is made up of roads and parking spaces.</p></div>',B=L(),P=E("div"),P.innerHTML='<div class="copy svelte-92ty5z"><h2 class="svelte-92ty5z">Playland</h2> <p class="section-subhead svelte-92ty5z">Built 1958</p> <p>Originally located at the Coliseum site, the park was renamed and moved to its current location in 1958 – the same year the popular wooden rol ler coaster was built.</p></div>',A=L(),S=E("div"),S.innerHTML='<div class="copy svelte-92ty5z"><p>Today, the fair hosts half a million people or more each year. Hastings Park’s aging buildings host film productions, live events, concerts, trade shows and are leased to tenants like CircusWest and Great Canadian Casino.</p></div>',q=L(),$=E("main"),$.innerHTML="",Q=L(),j=E("footer"),j.innerHTML='<p class="source">Source:  <a href="https:vancouversun.com" target="_blank">TK</a></p>',u(t,"class","svelte-92ty5z"),ze(s.src,a=Ue)||u(s,"src",a),u(s,"class","svelte-92ty5z"),u(o,"class","video-container svelte-92ty5z"),u(y,"class","section svelte-92ty5z"),u(y,"data-start","0"),u(y,"data-end","1.5"),u(_,"class","section svelte-92ty5z"),u(_,"data-start","1.5"),u(_,"data-end","9"),u(w,"class","section svelte-92ty5z"),u(w,"data-start","9"),u(w,"data-end","16"),u(m,"class","section svelte-92ty5z"),u(m,"data-start","16"),u(m,"data-end","22"),u(O,"class","section svelte-92ty5z"),u(O,"data-start","22"),u(O,"data-end","26"),u(i,"class","section svelte-92ty5z"),u(i,"data-start","26"),u(i,"data-end","33"),u(P,"class","section svelte-92ty5z"),u(P,"data-start","33"),u(P,"data-end","38"),u(S,"class","section svelte-92ty5z"),u(S,"data-start","38"),u(S,"data-end","45"),u(l,"id","scrollytelling")},m(T,k){N(T,t,k),N(T,n,k),N(T,o,k),b(o,s),e[2](s),N(T,p,k),N(T,l,k),b(l,y),e[3](y),b(l,d),b(l,_),e[4](_),b(l,v),b(l,w),e[5](w),b(l,x),b(l,m),e[6](m),b(l,R),b(l,O),e[7](O),b(l,W),b(l,i),e[8](i),b(l,B),b(l,P),e[9](P),b(l,A),b(l,S),e[10](S),N(T,q,k),N(T,$,k),N(T,Q,k),N(T,j,k)},p:K,i:K,o:K,d(T){T&&(H(t),H(n),H(o),H(p),H(l),H(q),H($),H(Q),H(j)),e[2](null),e[3](null),e[4](null),e[5](null),e[6](null),e[7](null),e[8](null),e[9](null),e[10](null)}}}const Ue="src/video/pne-flyover-labels-lores.mp4";function Qe(e,t,n){let o,s=[],a=null,p=!1;function l(){if(!a||!p)return;const i=a.offsetTop,B=a.offsetHeight,A=(window.scrollY+window.innerHeight/2-i)/B,S=parseFloat(a.getAttribute("data-end")),q=parseFloat(a.getAttribute("data-start"));if(A>=0&&A<=1){const $=q+(S-q)*A;n(0,o.currentTime=$,o)}}async function y(){const i=Ge();o&&n(0,o.muted=!0,o),i.setup({step:".section",offset:.5,debug:!1}).onStepEnter(({element:B})=>{a=B,l()}),window.addEventListener("scroll",l),window.addEventListener("resize",i.resize),o.addEventListener("loadeddata",()=>{n(0,o.muted=!0,o),p=!0,l()}),o.addEventListener("canplay",()=>{o.pause()})}Se(y);function d(i){M[i?"unshift":"push"](()=>{o=i,n(0,o)})}function _(i){M[i?"unshift":"push"](()=>{s=i,n(1,s)})}function v(i){M[i?"unshift":"push"](()=>{s=i,n(1,s)})}function w(i){M[i?"unshift":"push"](()=>{s=i,n(1,s)})}function x(i){M[i?"unshift":"push"](()=>{s=i,n(1,s)})}function m(i){M[i?"unshift":"push"](()=>{s=i,n(1,s)})}function R(i){M[i?"unshift":"push"](()=>{s=i,n(1,s)})}function O(i){M[i?"unshift":"push"](()=>{s=i,n(1,s)})}function W(i){M[i?"unshift":"push"](()=>{s=i,n(1,s)})}return[o,s,d,_,v,w,x,m,R,O,W]}class Xe extends qe{constructor(t){super(),Be(this,t,Qe,Ke,we,{})}}new Xe({target:document.getElementById("app")});
