import{I as v,_ as l}from"./IconPark.402beefe.js";import{j as i,c as x,F as w,s as g,g as a,h as u,i as s,u as t,H as r,q as y,l as d,J as m}from"./vendor.9760fa8a.js";import{c as f,P as A,e as z}from"./index.373df683.js";import{_ as D}from"./plugin-vue_export-helper.21dcd24c.js";import{L as N,P as B,D as L,M as C}from"./PlayTwo.fe71fa6d.js";import{P as j}from"./PlayOne.e72f474c.js";var P=v("add",!1,function(e){return i("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},[i("rect",{x:"6",y:"6",width:"36",height:"36",rx:"3",fill:e.colors[1],stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linejoin":e.strokeLinejoin},null),i("path",{d:"M24 16V32",stroke:e.colors[2],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),i("path",{d:"M16 24L32 24",stroke:e.colors[2],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null)])}),Q=v("more",!1,function(e){return i("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},[i("circle",{cx:"12",cy:"24",r:"3",fill:e.colors[0]},null),i("circle",{cx:"24",cy:"24",r:"3",fill:e.colors[0]},null),i("circle",{cx:"36",cy:"24",r:"3",fill:e.colors[0]},null)])});const F={class:"flex-shrink-0 flex-1 flex items-center justify-between pr-5"},M={class:"items-center flex flex-1 w-10 flex-shrink-0"},$={class:"truncate",style:{"max-width":"75%"}},b={class:"hidden icon-action flex-shrink-0"},I={class:"flex items-center gap-x-1.5 text-gray-400 ml-2"},S={class:"w-9/12 truncate"},q={class:"w-9/12 truncate"},T={class:"w-20 flex-shrink-0"},V={class:"w-20 truncate"},W=x({props:{song:null,showArName:{type:Boolean},showAlName:{type:Boolean}},setup(e){const c=w(),{play:h}=f(),{id:k}=g(f());return(E,n)=>(a(),u("div",{class:m(["flex song-item items-center w-full hover-bg-main",{playing:t(k)===e.song.id}]),onDblclick:n[4]||(n[4]=o=>t(h)(e.song.id))},[s("div",F,[s("div",M,[i(l,{icon:t(N),size:"16",class:"text-gray-500 mr-1 cursor-pointer hover:text-red-400"},null,8,["icon"]),s("div",$,[s("small",null,r(e.song.name),1)]),e.song.mv>0?(a(),y(l,{key:0,class:"ml-2 text-orange-400 cursor-pointer",size:"16",icon:t(B),onClick:n[0]||(n[0]=o=>t(c).push({name:t(A).mvDetail,query:{id:e.song.mv}}))},null,8,["icon"])):d("",!0)]),s("div",b,[s("div",I,[i(l,{title:"\u64AD\u653E",icon:t(j),size:"20",class:"hover-text",onClick:n[1]||(n[1]=o=>t(h)(e.song.id))},null,8,["icon"]),i(l,{title:"\u6DFB\u52A0\u5230",icon:t(P),size:"16",class:"hover-text"},null,8,["icon"]),i(l,{title:"\u4E0B\u8F7D",icon:t(L),size:"16",class:"hover-text"},null,8,["icon"]),i(l,{title:"\u66F4\u591A\u64CD\u4F5C",icon:t(C),size:"16",class:"hover-text"},null,8,["icon"])])])]),e.showArName?(a(),u("div",{key:0,class:m(["flex-shrink-0",{"w-1/4":e.showAlName,"w-1/3":!e.showAlName}])},[s("div",S,[s("small",{class:"truncate max-w-full hover-text",onClick:n[2]||(n[2]=o=>t(c).push({name:"artistDetail",query:{id:e.song.ar.first().id}}))},r(e.song.ar.first().name),1)])],2)):d("",!0),e.showAlName?(a(),u("div",{key:1,class:m(["flex-shrink-0",{"w-1/4":e.showArName,"w-1/3":!e.showArName}])},[s("div",q,[s("small",{class:"truncate hover-text",onClick:n[3]||(n[3]=o=>t(c).push({name:"album",query:{id:e.song.al.id}}))},r(e.song.al.name),1)])],2)):d("",!0),s("div",T,[s("div",V,[s("small",null,r(t(z)(e.song.dt/1e3)),1)])])],34))}});var U=D(W,[["__scopeId","data-v-938b689c"]]);export{Q as M,U as S};
