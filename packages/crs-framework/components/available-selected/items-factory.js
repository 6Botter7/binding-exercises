class r{static async#e(a,e,t){return await this.createElement("li",a,{classes:[e],dataset:{id:t}})}static async#t(a,e,t){await this.createElement("button",a,{classes:["icon"],dataset:{action:e},text_content:t})}static async#a(a,e){return await this.createElement("label",a,{text_content:e})}static async#s(a,e){const t=document.createElement("template"),i=["${",a.dataset.idField||"id","}"].join(""),s=await this.#e(t,e,i),n=await this.#a(null,i);a.dataset.drag==="true"&&e==="selected"&&(await this.#t(s,"drag","drag-hori"),n.dataset.action="drag"),s.appendChild(n),a.dataset.drillDown==="true"&&e==="selected"&&(await this.#t(s,"drill","chevron-right"),n.dataset.action="drill");const l=e==="available"?"add-circle-outline":"minus-circle-outline";return await this.#t(s,"toggle",l),t}static async#n(a,e,t){const i=document.createElement("template"),s=document.createElement("ul");for(const n of e[t]){const l=await crs.call("html","create",{html:a.innerHTML,ctx:n});await s.appendChild(l)}return i.content.appendChild(s),i}static async createElement(a,e,t){return await crs.call("dom","create_element",{parent:e,tag_name:a,classes:t.classes||[],dataset:t.dataset||{},attributes:t.attributes||{},text_content:t.text_content||null})}static async createTemplate(a,e,t,i){const s=await this.#s(a,t),n=await this.#n(s,i,t);return n.dataset.id=t,e==t&&(n.dataset.default="true"),n}}export{r as ItemsFactory};