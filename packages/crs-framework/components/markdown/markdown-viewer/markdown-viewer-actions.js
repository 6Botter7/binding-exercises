import"./markdown-viewer.js";class w{static async perform(a,r,t,s){await this[a.action]?.(a,r,t,s)}static async set_markdown(a,r,t,s){const e=await crs.dom.get_element(a,r,t,s),n=await crs.process.getValue(a.args.markdown,r,t,s),o=await crs.process.getValue(a.args.parameters,r,t,s);await e.set_markdown(n,o)}}crs.intent.markdown_viewer=w;export{w as MarkdownViewerActions};
