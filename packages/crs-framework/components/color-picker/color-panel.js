class s extends HTMLCanvasElement{#e;#t;static get observedAttributes(){return["value"]}async connectedCallback(){this.#e="rgba(255,0,0,1)",requestAnimationFrame(()=>{const t=getComputedStyle(this);this.width=Number(t.width.replace("px","")),this.height=Number(t.height.replace("px","")),this.#t=this.getContext("2d",{willReadFrequently:!0}),this.#i()})}async disconnectedCallback(){this.#e=null,this.#t=null}#i(){if(this.#t==null)return;this.#t.fillStyle=this.#e,this.#t.fillRect(0,0,this.width,this.height);const t=this.#t.createLinearGradient(0,0,this.width,0);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(1,"rgba(255,255,255,0)"),this.#t.fillStyle=t,this.#t.fillRect(0,0,this.width,this.height);const e=this.#t.createLinearGradient(0,0,0,this.height);e.addColorStop(0,"rgba(0,0,0,0)"),e.addColorStop(1,"rgba(0,0,0,1)"),this.#t.fillStyle=e,this.#t.fillRect(0,0,this.width,this.height)}async attributeChangedCallback(t,e,i){const a=await crs.call("colors","hex_to_rgb",{hex:i});this.#e=`rgba(${a.r}, ${a.g}, ${a.b}, 1)`,this.#i()}async pushUpdate(t){this.#e=`rgba(${t.r}, ${t.g}, ${t.b}, 1)`,this.#i()}get(t,e){const i=this.#t.getImageData(t,e,1,1).data;return{r:i[0],g:i[1],b:i[2]}}}customElements.define("color-panel",s,{extends:"canvas"});
