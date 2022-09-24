(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerpolicy&&(l.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?l.credentials="include":o.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function O(){}function X(e){return e()}function K(){return Object.create(null)}function E(e){e.forEach(X)}function ce(e){return typeof e=="function"}function Y(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let F;function z(e,t){return F||(F=document.createElement("a")),F.href=t,e===F.href}function ie(e){return Object.keys(e).length===0}function d(e,t){e.appendChild(t)}function Z(e,t,n){e.insertBefore(t,n||null)}function I(e){e.parentNode.removeChild(e)}function ae(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function x(e){return document.createElement(e)}function P(e){return document.createTextNode(e)}function L(){return P(" ")}function G(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function h(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function se(e){return Array.from(e.childNodes)}function J(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let T;function j(e){T=e}const q=[],Q=[],A=[],U=[],ue=Promise.resolve();let M=!1;function fe(){M||(M=!0,ue.then(ee))}function S(e){A.push(e)}const D=new Set;let R=0;function ee(){const e=T;do{for(;R<q.length;){const t=q[R];R++,j(t),de(t.$$)}for(j(null),q.length=0,R=0;Q.length;)Q.pop()();for(let t=0;t<A.length;t+=1){const n=A[t];D.has(n)||(D.add(n),n())}A.length=0}while(q.length);for(;U.length;)U.pop()();M=!1,D.clear(),j(e)}function de(e){if(e.fragment!==null){e.update(),E(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(S)}}const N=new Set;let k;function he(){k={r:0,c:[],p:k}}function me(){k.r||E(k.c),k=k.p}function C(e,t){e&&e.i&&(N.delete(e),e.i(t))}function B(e,t,n,r){if(e&&e.o){if(N.has(e))return;N.add(e),k.c.push(()=>{N.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function ge(e){e&&e.c()}function te(e,t,n,r){const{fragment:o,on_mount:l,on_destroy:i,after_update:m}=e.$$;o&&o.m(t,n),r||S(()=>{const u=l.map(X).filter(ce);i?i.push(...u):E(u),e.$$.on_mount=[]}),m.forEach(S)}function ne(e,t){const n=e.$$;n.fragment!==null&&(E(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function pe(e,t){e.$$.dirty[0]===-1&&(q.push(e),fe(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function re(e,t,n,r,o,l,i,m=[-1]){const u=T;j(e);const c=e.$$={fragment:null,ctx:null,props:l,update:O,not_equal:o,bound:K(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:K(),dirty:m,skip_bound:!1,root:t.target||u.$$.root};i&&i(c.root);let v=!1;if(c.ctx=n?n(e,t.props||{},(g,_,...y)=>{const w=y.length?y[0]:_;return c.ctx&&o(c.ctx[g],c.ctx[g]=w)&&(!c.skip_bound&&c.bound[g]&&c.bound[g](w),v&&pe(e,g)),_}):[],c.update(),v=!0,E(c.before_update),c.fragment=r?r(c.ctx):!1,t.target){if(t.hydrate){const g=se(t.target);c.fragment&&c.fragment.l(g),g.forEach(I)}else c.fragment&&c.fragment.c();t.intro&&C(e.$$.fragment),te(e,t.target,t.anchor,t.customElement),ee()}j(u)}class oe{$destroy(){ne(this,1),this.$destroy=O}$on(t,n){const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!ie(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function _e(e){let t,n,r,o,l,i,m,u,c=e[0].name+"",v,g,_,y=e[0].species+"",w;return{c(){t=x("div"),n=x("div"),r=x("img"),i=L(),m=x("div"),u=x("h2"),v=P(c),g=L(),_=x("p"),w=P(y),h(r,"class","w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"),z(r.src,o=e[0].image)||h(r,"src",o),h(r,"alt",l=e[0].name),h(u,"class","text-white title-font font-medium"),h(_,"class","text-gray-600"),h(m,"class","flex-grow"),h(n,"class","h-full flex items-center border-gray-800 border p-4 rounded-lg"),h(t,"class","p-2 lg:w-1/3 md:w-1/2 w-full")},m($,p){Z($,t,p),d(t,n),d(n,r),d(n,i),d(n,m),d(m,u),d(u,v),d(m,g),d(m,_),d(_,w)},p($,[p]){p&1&&!z(r.src,o=$[0].image)&&h(r,"src",o),p&1&&l!==(l=$[0].name)&&h(r,"alt",l),p&1&&c!==(c=$[0].name+"")&&J(v,c),p&1&&y!==(y=$[0].species+"")&&J(w,y)},i:O,o:O,d($){$&&I(t)}}}function ye(e,t,n){let{characterDataFromRequest:r}=t;return e.$$set=o=>{"characterDataFromRequest"in o&&n(0,r=o.characterDataFromRequest)},[r]}class be extends oe{constructor(t){super(),re(this,t,ye,_e,Y,{characterDataFromRequest:0})}}function V(e,t,n){const r=e.slice();return r[5]=t[n],r}function W(e){let t,n;return t=new be({props:{characterDataFromRequest:e[5]}}),{c(){ge(t.$$.fragment)},m(r,o){te(t,r,o),n=!0},p(r,o){const l={};o&1&&(l.characterDataFromRequest=r[5]),t.$set(l)},i(r){n||(C(t.$$.fragment,r),n=!0)},o(r){B(t.$$.fragment,r),n=!1},d(r){ne(t,r)}}}function xe(e){let t,n,r,o,l,i,m,u,c,v,g,_,y,w,$,p=e[0],s=[];for(let a=0;a<p.length;a+=1)s[a]=W(V(e,p,a));const le=a=>B(s[a],1,1,()=>{s[a]=null});return{c(){t=x("main"),n=x("div"),r=x("div"),r.innerHTML=`<h1 class="sm:text-5xl text-2xl font-medium title-font mb-4 text-white">Rick and Morty - Characters</h1> 
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Follow wacky travels through time-space and parallel universes with
        Rick, a scientist with a drinking problem, and his grandson Morty, a
        teenager not as bright as his grandfather.</p>`,o=L(),l=x("div"),i=x("button"),m=P("Prev"),c=L(),v=x("button"),v.textContent="Next",g=L(),_=x("div");for(let a=0;a<s.length;a+=1)s[a].c();h(r,"class","flex flex-col text-center w-full mb-20"),i.disabled=u=e[1]<=1,h(i,"class","bg-gray-800 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"),h(v,"class","bg-gray-800 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"),h(l,"class","flex justify-between mb-4"),h(_,"class","flex flex-wrap -m-2"),h(n,"class","container px-5 py-24 mx-auto"),h(t,"class","text-gray-400 bg-gray-900 body-font")},m(a,b){Z(a,t,b),d(t,n),d(n,r),d(n,o),d(n,l),d(l,i),d(i,m),d(l,c),d(l,v),d(n,g),d(n,_);for(let f=0;f<s.length;f+=1)s[f].m(_,null);y=!0,w||($=[G(i,"click",e[3]),G(v,"click",e[2])],w=!0)},p(a,[b]){if((!y||b&2&&u!==(u=a[1]<=1))&&(i.disabled=u),b&1){p=a[0];let f;for(f=0;f<p.length;f+=1){const H=V(a,p,f);s[f]?(s[f].p(H,b),C(s[f],1)):(s[f]=W(H),s[f].c(),C(s[f],1),s[f].m(_,null))}for(he(),f=p.length;f<s.length;f+=1)le(f);me()}},i(a){if(!y){for(let b=0;b<p.length;b+=1)C(s[b]);y=!0}},o(a){s=s.filter(Boolean);for(let b=0;b<s.length;b+=1)B(s[b]);y=!1},d(a){a&&I(t),ae(s,a),w=!1,E($)}}}function ve(e,t,n){let r=[],o=1;async function l(){const u=await fetch("https://rickandmortyapi.com/api/character?page="+o),{results:c}=await u.json();n(0,r=c),console.log(r)}l();function i(){n(1,o++,o),l()}function m(){n(1,o--,o),l()}return[r,o,i,m]}class $e extends oe{constructor(t){super(),re(this,t,ve,xe,Y,{})}}new $e({target:document.getElementById("app")});
