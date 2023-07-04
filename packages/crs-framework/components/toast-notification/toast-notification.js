import{loadHTML as r}from"./../../src/load-resources.js";class l extends HTMLElement{#t=this.#i.bind(this);#o=Object.freeze({success:"check-circle",warning:"warning",error:"error",info:"info"});constructor(){super(),this.attachShadow({mode:"open"})}async connectedCallback(){this.shadowRoot.innerHTML=await r(import.meta.url),requestAnimationFrame(()=>this.load())}async load(){this.shadowRoot.addEventListener("click",this.#t)}async disconnectedCallback(){this.shadowRoot.removeEventListener("click",this.#t),this.shadowRoot.innerHTML="",this.#t=null}async#i(e){const t=e.composedPath(),o=t[0],i=t[1];o.id==="btnClose"&&await this.#e(i)}async#e(e){const t=e.querySelector("#btnAction");t!=null&&(t.onclick=null),e.remove(),await crs.call("fixed_position","set",{element:this,position:this.dataset.position,margin:this.dataset.margin})}#n(e,t){return new Promise(o=>{const i=setTimeout(async()=>{clearTimeout(i),await this.#e(e),o()},t)})}async show(e,t,o,i){const n=this.shadowRoot.querySelector("#toast-notification-item").content.cloneNode(!0).children[0];n.dataset.severity=o,n.querySelector("#message").innerText=t;const s=n.querySelector("#btnAction");if(i==null)s.remove();else{s.textContent=i.caption,s.onclick=i.callback;const c=n.querySelector("#btnClose");c.style.borderLeft="var(--border)"}const a=n.querySelector("icon");a.textContent=this.#o[o],a.dataset.severity=o,t.indexOf(`
`)!==-1&&(a.style.alignSelf="flex-start"),this.shadowRoot.appendChild(n),await crs.call("fixed_position","set",{element:this,position:this.dataset.position,margin:this.dataset.margin}),await this.#n(n,e)}}customElements.define("toast-notification",l);
