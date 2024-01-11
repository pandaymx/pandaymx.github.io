import{a6 as t}from"./app-uJUcxmLb.js";var a={provider:"Waline",dark:'html[data-theme="dark"]',serverURL:"https://comment.ppmb.xyz"};const o=async()=>{try{const{pageviewCount:e}=await t(()=>import("./app-uJUcxmLb.js").then(r=>r.a7),__vite__mapDeps([]));return e({serverURL:a.serverURL})}catch{console.error("@waline/client is not installed!");return}};export{o as updatePageview};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}