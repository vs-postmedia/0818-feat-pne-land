var we=Object.defineProperty;var _e=(e,t,n)=>t in e?we(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var le=(e,t,n)=>(_e(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const p of r.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&i(p)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();function J(){}function ge(e){return e()}function pe(){return Object.create(null)}function ie(e){e.forEach(ge)}function me(e){return typeof e=="function"}function Ee(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let se;function he(e,t){return e===t?!0:(se||(se=document.createElement("a")),se.href=t,e===se.href)}function xe(e){return Object.keys(e).length===0}function m(e,t){e.appendChild(t)}function C(e,t,n){e.insertBefore(t,n||null)}function A(e){e.parentNode&&e.parentNode.removeChild(e)}function y(e){return document.createElement(e)}function ke(e){return document.createTextNode(e)}function M(){return ke(" ")}function a(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Se(e){return Array.from(e.childNodes)}let te;function ee(e){te=e}function Te(){if(!te)throw new Error("Function called outside component initialization");return te}function Oe(e){Te().$$.on_mount.push(e)}const U=[],L=[];let K=[];const ve=[],Pe=Promise.resolve();let ue=!1;function Me(){ue||(ue=!0,Pe.then(be))}function de(e){K.push(e)}const ae=new Set;let Y=0;function be(){if(Y!==0)return;const e=te;do{try{for(;Y<U.length;){const t=U[Y];Y++,ee(t),Le(t.$$)}}catch(t){throw U.length=0,Y=0,t}for(ee(null),U.length=0,Y=0;L.length;)L.pop()();for(let t=0;t<K.length;t+=1){const n=K[t];ae.has(n)||(ae.add(n),n())}K.length=0}while(U.length);for(;ve.length;)ve.pop()();ue=!1,ae.clear(),ee(e)}function Le(e){if(e.fragment!==null){e.update(),ie(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(de)}}function He(e){const t=[],n=[];K.forEach(i=>e.indexOf(i)===-1?t.push(i):n.push(i)),n.forEach(i=>i()),K=t}const Ae=new Set;function Ne(e,t){e&&e.i&&(Ae.delete(e),e.i(t))}function $e(e,t,n){const{fragment:i,after_update:o}=e.$$;i&&i.m(t,n),de(()=>{const r=e.$$.on_mount.map(ge).filter(me);e.$$.on_destroy?e.$$.on_destroy.push(...r):ie(r),e.$$.on_mount=[]}),o.forEach(de)}function Ce(e,t){const n=e.$$;n.fragment!==null&&(He(n.after_update),ie(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Be(e,t){e.$$.dirty[0]===-1&&(U.push(e),Me(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function qe(e,t,n,i,o,r,p,E=[-1]){const w=te;ee(e);const h=e.$$={fragment:null,ctx:[],props:r,update:J,not_equal:o,bound:pe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(w?w.$$.context:[])),callbacks:pe(),dirty:E,skip_bound:!1,root:t.target||w.$$.root};p&&p(h.root);let d=!1;if(h.ctx=n?n(e,t.props||{},(v,H,...b)=>{const x=b.length?b[0]:H;return h.ctx&&o(h.ctx[v],h.ctx[v]=x)&&(!h.skip_bound&&h.bound[v]&&h.bound[v](x),d&&Be(e,v)),H}):[],h.update(),d=!0,ie(h.before_update),h.fragment=i?i(h.ctx):!1,t.target){if(t.hydrate){const v=Se(t.target);h.fragment&&h.fragment.l(v),v.forEach(A)}else h.fragment&&h.fragment.c();t.intro&&Ne(e.$$.fragment),$e(e,t.target,t.anchor),be()}ee(w)}class Ie{constructor(){le(this,"$$");le(this,"$$set")}$destroy(){Ce(this,1),this.$destroy=J}$on(t,n){if(!me(n))return J;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const o=i.indexOf(n);o!==-1&&i.splice(o,1)}}$set(t){this.$$set&&!xe(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ze="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ze);function Re(e,t=document){return typeof e=="string"?Array.from(t.querySelectorAll(e)):e instanceof Element?[e]:e instanceof NodeList?Array.from(e):e instanceof Array?e:[]}function De(e){const t=document.createElement("div");t.className=`scrollama__debug-step ${e}`,t.style.position="fixed",t.style.left="0",t.style.width="100%",t.style.zIndex="9999",t.style.borderTop="2px solid black",t.style.borderBottom="2px solid black";const n=document.createElement("p");return n.style.position="absolute",n.style.left="0",n.style.height="1px",n.style.width="100%",n.style.borderTop="1px dashed black",t.appendChild(n),document.body.appendChild(t),t}function We({id:e,step:t,marginTop:n}){const{index:i,height:o}=t,r=`scrollama__debug-step--${e}-${i}`;let p=document.querySelector(`.${r}`);p||(p=De(r)),p.style.top=`${n*-1}px`,p.style.height=`${o}px`,p.querySelector("p").style.top=`${o/2}px`}function Fe(){const e="abcdefghijklmnopqrstuvwxyz",t=Date.now(),n=[];for(let i=0;i<6;i+=1){const o=e[Math.floor(Math.random()*e.length)];n.push(o)}return`${n.join("")}${t}`}function oe(e){console.error(`scrollama error: ${e}`)}function Z(e){return+e.getAttribute("data-scrollama-index")}function je(e,t){const n=Math.ceil(e/t),i=[],o=1/n;for(let r=0;r<n+1;r+=1)i.push(r*o);return i}function ce(e){if(typeof e=="string"&&e.indexOf("px")>0){const t=+e.replace("px","");return isNaN(t)?(err("offset value must be in 'px' format. Fallback to 0.5."),{format:"percent",value:.5}):{format:"pixels",value:t}}else if(typeof e=="number"||!isNaN(+e))return e>1&&err("offset value is greater than 1. Fallback to 1."),e<0&&err("offset value is lower than 0. Fallback to 0."),{format:"percent",value:Math.min(Math.max(0,e),1)};return null}function Ve(e){e.forEach(t=>t.node.setAttribute("data-scrollama-index",t.index))}function Ye(e){const{top:t}=e.getBoundingClientRect(),n=window.pageYOffset,i=document.body.clientTop||0;return t+n-i}let G,re,B;function ye(e){const t=e?e.scrollTop:window.pageYOffset;G!==t&&(G=t,G>re?B="down":G<re&&(B="up"),re=G)}function Ue(e){G=0,re=0,document.addEventListener("scroll",()=>ye(e))}function Ge(){let e={},t=Fe(),n=[],i,o,r,p=0,E=!1,w=!1,h=!1,d=!1,v=[];function H(){e={stepEnter:()=>{},stepExit:()=>{},stepProgress:()=>{}},v=[]}function b(s){s&&!E&&z(),!s&&E&&T(),E=s}function x(s,c){const u=Z(s),g=n[u];c!==void 0&&(g.progress=c);const _={element:s,index:u,progress:c,direction:B};g.state==="enter"&&e.stepProgress(_)}function k(s,c=!0){const u=Z(s),g=n[u],_={element:s,index:u,direction:B};g.direction=B,g.state="enter",v[u]||e.stepEnter(_),d&&(v[u]=!0)}function D(s,c=!0){const u=Z(s),g=n[u];if(!g.state)return!1;const _={element:s,index:u,direction:B};w&&(B==="down"&&g.progress<1?x(s,1):B==="up"&&g.progress>0&&x(s,0)),g.direction=B,g.state="exit",e.stepExit(_)}function S([s]){const c=Z(s.target),u=n[c],g=s.target.offsetHeight;g!==u.height&&(u.height=g,N(u),q(u),$(u))}function W([s]){ye(o);const{isIntersecting:c,target:u}=s;c?k(u):D(u)}function l([s]){const c=Z(s.target),u=n[c],{isIntersecting:g,intersectionRatio:_,target:I}=s;g&&u.state==="enter"&&x(I,_)}function N({observers:s}){Object.keys(s).map(c=>{s[c].disconnect()})}function T(){n.forEach(N)}function $(s){const c=new ResizeObserver(S);c.observe(s.node),s.observers.resize=c}function O(){n.forEach($)}function q(s){const c=window.innerHeight,u=s.offset||i,g=u.format==="pixels"?1:c,_=u.value*g,I=s.height/2-_,j=s.height/2-(c-_),V={rootMargin:`${I}px 0px ${j}px 0px`,threshold:.5,root:r},fe=new IntersectionObserver(W,V);fe.observe(s.node),s.observers.step=fe,h&&We({id:t,step:s,marginTop:I,marginBottom:j})}function P(){n.forEach(q)}function Q(s){const c=window.innerHeight,u=s.offset||i,g=u.format==="pixels"?1:c,_=u.value*g,I=-_+s.height,j=_-c,X=`${I}px 0px ${j}px 0px`,ne=je(s.height,p),R={rootMargin:X,threshold:ne},V=new IntersectionObserver(l,R);V.observe(s.node),s.observers.progress=V}function F(){n.forEach(Q)}function z(){T(),O(),P(),w&&F()}const f={};return f.setup=({step:s,parent:c,offset:u=.5,threshold:g=4,progress:_=!1,once:I=!1,debug:j=!1,container:X=void 0,root:ne=null})=>(Ue(X),n=Re(s,c).map((R,V)=>({index:V,direction:void 0,height:R.offsetHeight,node:R,observers:{},offset:ce(R.dataset.offset),top:Ye(R),progress:0,state:void 0})),n.length?(w=_,d=I,h=j,p=Math.max(1,+g),i=ce(u),o=X,r=ne,H(),Ve(n),b(!0),f):(oe("no step elements"),f)),f.enable=()=>(b(!0),f),f.disable=()=>(b(!1),f),f.destroy=()=>(b(!1),H(),f),f.resize=()=>(z(),f),f.offset=s=>s==null?i.value:(i=ce(s),z(),f),f.onStepEnter=s=>(typeof s=="function"?e.stepEnter=s:oe("onStepEnter requires a function"),f),f.onStepExit=s=>(typeof s=="function"?e.stepExit=s:oe("onStepExit requires a function"),f),f.onStepProgress=s=>(typeof s=="function"?e.stepProgress=s:oe("onStepProgress requires a function"),f),f}function Je(e){let t,n,i,o,r,p,E,w,h,d,v,H,b,x,k,D,S,W,l,N,T,$,O,q,P,Q,F,z,f;return{c(){t=y("header"),t.innerHTML='<h1 class="svelte-1v8w01i">Hastings Park, an $80M business</h1> <p class="subhead svelte-1v8w01i">The PNE’s annual fair first opened in 1910. At nearly a half-kilometre square, it was one of the largest of its kind in North America.</p>',n=M(),i=y("div"),o=y("video"),r=y("source"),E=y("source"),h=M(),d=y("div"),v=y("div"),v.innerHTML='<div class="copy svelte-1v8w01i"><p>During the Second World War the fair was shut down and the site was used to detain Japanese Canadians. Several plaques now commemorate the roughly 8,000 people who were detained at buildings around the 0.7-square-kilometre site.</p></div>',H=M(),b=y("div"),b.innerHTML='<div class="copy svelte-1v8w01i"><h2 class="svelte-1v8w01i">PNE Forum</h2> <p class="section-subhead svelte-1v8w01i">Built 1931</p> <p>The art deco heritage building is a multi-use facility used mainly for commercial video shoots. During the Second World War, Japanese Canadian men and teen boys were detained here.</p> <h2 class="svelte-1v8w01i">Garden Auditorium</h2> <p class="section-subhead svelte-1v8w01i">Built 1939-40</p> <p>The streamlined art moderne heritage building hosts events and classes by CircusWest Performing Arts Society.</p></div>',x=M(),k=y("div"),k.innerHTML='<div class="copy svelte-1v8w01i"><h2 class="svelte-1v8w01i">Pacific Coliseum</h2> <p class="section-subhead svelte-1v8w01i">Built 1968</p> <p>The 17,500-seat facility hosts sports, concerts and special events. It was home to the Vancouver Canucks from 1970-1995.</p></div>',D=M(),S=y("div"),S.innerHTML='<div class="copy svelte-1v8w01i"><h2 class="svelte-1v8w01i">Agrodome</h2> <p class="section-subhead svelte-1v8w01i">Built 1963</p> <p>The 2,700-seat facility houses an ice skating rink for minor hockey and figure skating events as well as agricultural shows.</p> <h2 class="svelte-1v8w01i">Livestock building</h2> <p class="section-subhead svelte-1v8w01i">Built 1929-39</p> <p>The art moderne heritage building is used mainly for filming and storage. During the Second World War, over 3,000 Japanese Canadian women and children were detained here.</p></div>',W=M(),l=y("div"),l.innerHTML='<div class="copy svelte-1v8w01i"><h2 class="svelte-1v8w01i">Hastings racecourse</h2> <p class="section-subhead svelte-1v8w01i">Built 1892</p> <p>Officials have talked for years about ‘greening’ the track, which covers nearly 30% of the park.</p></div>',N=M(),T=y("div"),T.innerHTML='<div class="copy svelte-1v8w01i"><h2 class="svelte-1v8w01i">Parking and roads</h2> <p>Roughly 25% of Hastings Park is made up of roads and parking spaces.</p></div>',$=M(),O=y("div"),O.innerHTML='<div class="copy svelte-1v8w01i"><h2 class="svelte-1v8w01i">Playland</h2> <p class="section-subhead svelte-1v8w01i">Built 1958</p> <p>Originally located at the Coliseum site, the park was renamed and moved to its current location in 1958 – the same year the popular wooden rol ler coaster was built.</p></div>',q=M(),P=y("div"),P.innerHTML='<div class="copy svelte-1v8w01i"><p>Today, the fair hosts half a million people or more each year. Hastings Park’s aging buildings host film productions, live events, concerts, trade shows and are leased to tenants like CircusWest and Great Canadian Casino.</p></div>',Q=M(),F=y("main"),F.innerHTML="",z=M(),f=y("footer"),f.innerHTML='<p class="source svelte-1v8w01i">Source: Pacific National Exhibition, HastingsPark1942.ca, Google Earth, City of Vancouver</p>',a(t,"class","svelte-1v8w01i"),he(r.src,p=Ke)||a(r,"src",p),a(r,"type","video/mp4"),he(E.src,w=Qe)||a(E,"src",w),a(E,"type","video/webm"),a(o,"preload","auto"),a(o,"class","svelte-1v8w01i"),a(i,"class","video-container svelte-1v8w01i"),a(v,"class","section svelte-1v8w01i"),a(v,"data-start","0"),a(v,"data-end","1.5"),a(b,"class","section svelte-1v8w01i"),a(b,"data-start","1.5"),a(b,"data-end","9"),a(k,"class","section svelte-1v8w01i"),a(k,"data-start","9"),a(k,"data-end","16"),a(S,"class","section svelte-1v8w01i"),a(S,"data-start","16"),a(S,"data-end","22"),a(l,"class","section svelte-1v8w01i"),a(l,"data-start","22"),a(l,"data-end","26"),a(T,"class","section svelte-1v8w01i"),a(T,"data-start","26"),a(T,"data-end","33"),a(O,"class","section svelte-1v8w01i"),a(O,"data-start","33"),a(O,"data-end","38"),a(P,"class","section svelte-1v8w01i"),a(P,"data-start","38"),a(P,"data-end","45"),a(d,"id","scrollytelling"),a(d,"class","svelte-1v8w01i"),a(f,"class","svelte-1v8w01i")},m(s,c){C(s,t,c),C(s,n,c),C(s,i,c),m(i,o),m(o,r),m(o,E),e[2](o),C(s,h,c),C(s,d,c),m(d,v),e[3](v),m(d,H),m(d,b),e[4](b),m(d,x),m(d,k),e[5](k),m(d,D),m(d,S),e[6](S),m(d,W),m(d,l),e[7](l),m(d,N),m(d,T),e[8](T),m(d,$),m(d,O),e[9](O),m(d,q),m(d,P),e[10](P),C(s,Q,c),C(s,F,c),C(s,z,c),C(s,f,c)},p:J,i:J,o:J,d(s){s&&(A(t),A(n),A(i),A(h),A(d),A(Q),A(F),A(z),A(f)),e[2](null),e[3](null),e[4](null),e[5](null),e[6](null),e[7](null),e[8](null),e[9](null),e[10](null)}}}const Ke=".src/video/pne-flyover-labels-lores.mp4",Qe=".src/video/pne-flyover-labels-lores.webm";function Xe(e,t,n){const i={}.NODE_ENV;let o,r=[],p=null,E=!1;function w(){if(!p||!E)return;const l=p.offsetTop,N=p.offsetHeight,$=(window.scrollY+window.innerHeight/2-l)/N,O=parseFloat(p.getAttribute("data-end")),q=parseFloat(p.getAttribute("data-start"));if($>=0&&$<=1){const P=q+(O-q)*$;n(0,o.currentTime=P,o)}}async function h(){const l=Ge();o&&n(0,o.muted=!0,o),l.setup({step:".section",offset:.5,debug:!1}).onStepEnter(({element:N})=>{p=N,w()}),window.addEventListener("scroll",w),window.addEventListener("resize",l.resize),o.addEventListener("loadeddata",()=>{n(0,o.muted=!0,o),E=!0,w()}),o.addEventListener("canplay",()=>{o.pause()})}Oe(h);function d(l){L[l?"unshift":"push"](()=>{o=l,n(0,o)})}function v(l){L[l?"unshift":"push"](()=>{r=l,n(1,r)})}function H(l){L[l?"unshift":"push"](()=>{r=l,n(1,r)})}function b(l){L[l?"unshift":"push"](()=>{r=l,n(1,r)})}function x(l){L[l?"unshift":"push"](()=>{r=l,n(1,r)})}function k(l){L[l?"unshift":"push"](()=>{r=l,n(1,r)})}function D(l){L[l?"unshift":"push"](()=>{r=l,n(1,r)})}function S(l){L[l?"unshift":"push"](()=>{r=l,n(1,r)})}function W(l){L[l?"unshift":"push"](()=>{r=l,n(1,r)})}return console.log(i),console.log("Environment:",{BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}),console.log("MODE:","production"),[o,r,d,v,H,b,x,k,D,S,W]}class Ze extends Ie{constructor(t){super(),qe(this,t,Xe,Je,Ee,{})}}new Ze({target:document.getElementById("app")});
