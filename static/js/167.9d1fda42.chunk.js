"use strict";(self.webpackChunkreact_task3=self.webpackChunkreact_task3||[]).push([[167],{4336:function(e,s,i){i.r(s),i.d(s,{default:function(){return Y}});var l=i(9119),t=i.p+"static/media/background.cd79c1da25f682a8de19.png",a=i(184);var c=function(e){return(0,a.jsx)("section",{children:(0,a.jsxs)("div",{className:"overlay mb-8",children:[(0,a.jsx)("img",{id:"background",src:t,alt:"background",className:"img-fluid mx-auto d-flex",style:{width:"100%",height:"90vh"}}),(0,a.jsx)("div",{className:"overlay-text mx-auto px-4 py-5 d-flex",children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-12",children:(0,a.jsx)("p",{id:"subtitle",className:"lead mb-0 mb-lg-3",style:{fontWeight:"600",fontSize:"16px",lineHeight:"24px",letterSpacing:"3px",color:"#333333"},children:"New Arrival"})}),(0,a.jsx)("div",{className:"col-12",children:(0,a.jsxs)("h2",{id:"title",className:"mb-1 mb-lg-3 yellow-text",style:{fontWeight:"600",fontSize:"52px",lineHeight:"65px"},children:["Discover Our ",(0,a.jsx)("br",{id:"break"}),"New Collection"]})}),(0,a.jsx)("div",{className:"col-12",children:(0,a.jsx)("p",{id:"subtitle",className:"pb-lg-4 normal-poppins",style:{color:"#333333"},children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, assumenda."})}),(0,a.jsx)("div",{className:"col-12",children:(0,a.jsx)(l.Z,{className:"px-5 py-2 py-lg-3",text:"BUY NOW"})})]})})]})})},n=i(4165),o=i(5861),r=i(9439),d=i(2791),m=i(7430),p=i(9234);var x=function(e){return(0,a.jsxs)("div",{className:"btn px-0 card-overlay-poppins",children:[(0,a.jsx)(p.Z,{iconName:e.icon})," ",e.text]})};var h=function(e){return(0,a.jsx)("div",{className:"mask",children:(0,a.jsxs)("div",{className:"container hover p-0",children:[(0,a.jsx)("div",{className:"col-12 mb-3",children:(0,a.jsx)(m.Z,{className:"col-8 btn border-0 bg-white card-overlay-poppins",text:"Add to cart"})}),(0,a.jsxs)("div",{className:"d-flex flex-wrap justify-content-evenly",children:[(0,a.jsx)(x,{icon:"bi bi-share-fill",text:"Share"}),(0,a.jsx)(x,{icon:"bi bi-arrow-left-right",text:"Compare"}),(0,a.jsx)(x,{icon:"bi bi-heart",text:"Like"})]})]})})};var u=function(e){var s="".concat("Rp"," ").concat(e.item.price.toLocaleString(void 0,{minimumFractionDigits:3})),i=e.item.price*(1-e.item.discount/100);return i="".concat("Rp"," ").concat(i.toLocaleString(void 0,{minimumFractionDigits:3})),(0,a.jsx)("div",{className:"col-12 col-lg-3 col-md-6 text-center pb-4",children:(0,a.jsxs)("div",{className:"bg-image hover-overlay shadow-1-strong d-flex flex-column h-100",children:[(0,a.jsxs)("div",{style:{position:"relative"},children:[(0,a.jsx)("img",{src:e.item.src,alt:e.item.alt,className:"img-fluid w-100",style:{height:"350px"}}),(0,a.jsx)("div",{style:{position:"absolute",top:"10%",right:"10%"},children:(e.item.discount||e.item.new)&&(0,a.jsx)("div",{className:"rounded-circle text-white card-subtitle-poppins",style:{backgroundColor:"".concat(e.item.discount?"#e97171":"").concat(e.item.new?"#2ec1ac":""),width:"48px",height:"48px"},children:(0,a.jsxs)("span",{className:"",style:{position:"relative",top:"25%"},children:[e.item.discount&&"-".concat(e.item.discount,"%"),e.item.new&&"New"]})})})]}),(0,a.jsx)("div",{className:"card-body px-3 pt-3 pb-4 d-flex flex-column",style:{backgroundColor:"#f4f5f7"},children:(0,a.jsxs)("div",{className:"my-auto",children:[(0,a.jsx)("h5",{className:"card-title text-start card-title-poppins",children:e.item.name}),(0,a.jsx)("p",{className:"card-text text-start card-subtitle-poppins",children:e.item.description}),(0,a.jsxs)("h6",{className:"card-title d-flex justify-content-between card-price-poppins",children:[e.item.discount?i:s,e.item.discount&&(0,a.jsx)("strike",{className:"card-price-old-poppins",children:s})]})]})}),(0,a.jsx)(h,{})]})})},f=i(1243);var g=function(e){var s=(0,d.useState)(4),i=(0,r.Z)(s,2),l=i[0],t=i[1],c=(0,d.useState)([]),p=(0,r.Z)(c,2),x=p[0],h=p[1],g=(0,d.useState)(!1),j=(0,r.Z)(g,2),b=j[0],N=j[1],v=(0,d.useCallback)((0,o.Z)((0,n.Z)().mark((function e(){var s,i;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.Z.get("".concat("https://react-11af9-default-rtdb.firebaseio.com","/products.json"));case 3:s=e.sent,N(l>=Object.keys(s.data).length),i=Object.keys(s.data).slice(0,l).map((function(e){return(0,a.jsx)(u,{item:s.data[e]},e)})),h(i),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])}))),[l]);return(0,d.useEffect)((function(){v()}),[v]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"container-lg px-lg-0 px-5 py-3",children:(0,a.jsx)("div",{className:"row",children:x})}),(0,a.jsx)("div",{className:"d-flex justify-content-center pb-2",children:(0,a.jsx)(m.Z,{text:"Show More",onClick:function(){t((function(e){return e+4}))},hidden:b})})]})};var j=function(e){return(0,a.jsx)("section",{className:"mb-5",children:(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{children:(0,a.jsx)("h1",{className:"text-center",style:{fontWeight:"700",fontSize:"40px",lineHeight:"48px",color:"#3a3a3a"},children:"Our Products"})}),(0,a.jsx)(g,{})]})})},b=i(4817);var N=function(e){return(0,a.jsx)("div",{className:"hover-zoom ".concat(e.className&&e.className),children:e.children})},v=i.p+"static/media/room1.55355d38f0474f11d275.png",y=i.p+"static/media/room2.ff9df5d097063d7400c7.png";var w=function(e){return(0,a.jsx)("section",{className:"mb-5",children:(0,a.jsx)("div",{className:"py-5 text-center text-md-start",style:{background:"#fcf8f3"},children:(0,a.jsx)("div",{className:"container-fluid widescreen",style:{paddingInlineStart:"7%"},children:(0,a.jsxs)("div",{className:"row justify-content-between",children:[(0,a.jsxs)("div",{className:"col-12 col-md-4 my-auto",children:[(0,a.jsx)("h1",{style:{fontWeight:"700",fontSize:"40px",lineHeight:"48px"},children:"50+ Beautiful rooms inspirations"}),(0,a.jsx)("p",{className:"normal-poppins",children:"Our designer already made a lot of beautiful prototipe of rooms that inspire you"}),(0,a.jsx)(l.Z,{className:"mb-3",text:"Explore more"})]}),(0,a.jsx)("div",{className:"col-12 col-md-8 my-auto",children:(0,a.jsxs)("div",{className:"row justify-content-around",children:[(0,a.jsx)(N,{className:"col-6 p-0 pe-2 text-end",children:(0,a.jsx)("img",{src:v,alt:"room",className:"img-fluid"})}),(0,a.jsxs)("div",{className:"col-6 col-md-5 d-flex flex-column justify-content-between p-0 ps-1 pe-3 text-start",children:[(0,a.jsx)("div",{className:"col-12 hover-zoom",children:(0,a.jsx)("img",{src:y,alt:"room",className:"img-fluid"})}),(0,a.jsxs)("div",{className:"col-12",children:[(0,a.jsx)(b.Z,{className:"m-0 pe-2",name:"photos",id:"photo1",value:"photo1",checked:"true"}),(0,a.jsx)(b.Z,{className:"m-0 pe-2",name:"photos",id:"photo2",value:"photo2"}),(0,a.jsx)(b.Z,{className:"m-0 pe-2",name:"photos",id:"photo3",value:"photo3"}),(0,a.jsx)(b.Z,{className:"m-0 pe-2",name:"photos",id:"photo4",value:"photo4"})]})]})]})})]})})})})},k=i.p+"static/media/img1.ceeee501a16dc708a797.png",S=i.p+"static/media/img2.a3c3e98875b7dfe36b77.png",z=i.p+"static/media/img3.ad9003e7171a8acea2df.png",C=i.p+"static/media/img4.91055ddc455519fcae42.png",Z=i.p+"static/media/img5.177afefdf8f8caac07d1.png",H=i.p+"static/media/img6.bd7f343f248afd66e549.png",W=i.p+"static/media/img7.eb9532874752132d7c01.png",F=i.p+"static/media/img8.a8f7e8f1f525d74a9af5.png",L=i.p+"static/media/img9.bc7a3aa5230bb03bf1cb.png";var R=function(e){return(0,a.jsx)("div",{className:"container-fluid widescreen p-0 m-0 mx-auto",children:(0,a.jsxs)("div",{className:"row p-0 m-0",children:[(0,a.jsxs)("div",{className:"col-5 p-0 m-0",children:[(0,a.jsxs)("div",{className:"row p-0 m-0",children:[(0,a.jsx)(N,{className:"col-2 p-0 m-0 hover-zoom-small",children:(0,a.jsx)("img",{src:k,alt:"1",className:"img-fluid w-100 pe-1 pb-1 pe-md-2 pb-md-2 pe-lg-3 pb-lg-3"})}),(0,a.jsx)(N,{className:"col-10 p-0 m-0 align-self-end hover-zoom-small",children:(0,a.jsx)("img",{src:S,alt:"2",className:"img-fluid w-100 pe-1 pb-1 pe-md-2 pb-md-2 pe-lg-3 pb-lg-3"})})]}),(0,a.jsxs)("div",{className:"row p-0 m-0",children:[(0,a.jsx)(N,{className:"col-4 p-0 m-0 hover-zoom-small",children:(0,a.jsx)("img",{src:z,alt:"3",className:"img-fluid w-100 pe-1 pb-1 pe-md-2 pb-md-2 pe-lg-3 pb-lg-3"})}),(0,a.jsx)(N,{className:"col-8 p-0 m-0 hover-zoom-small",children:(0,a.jsx)("img",{src:C,alt:"4",className:"img-fluid w-100 pe-1 pb-1 pe-md-2 pb-md-2 pe-lg-3 pb-lg-3"})})]})]}),(0,a.jsx)(N,{className:"col-2 p-0 m-0 align-self-center hover-zoom-small",children:(0,a.jsx)("img",{src:Z,alt:"5",className:"img-fluid w-100"})}),(0,a.jsxs)("div",{className:"col-5 p-0 m-0",children:[(0,a.jsxs)("div",{className:"row p-0 m-0",children:[(0,a.jsx)(N,{className:"col-6 p-0 m-0 align-self-end hover-zoom-small",children:(0,a.jsx)("img",{src:H,alt:"6",className:"img-fluid w-100 ps-1 pb-1 ps-md-2 pb-md-2 ps-lg-3 pb-lg-3"})}),(0,a.jsx)(N,{className:"col-6 p-0 m-0 hover-zoom-small",children:(0,a.jsx)("img",{src:W,alt:"7",className:"img-fluid w-100 ps-1 pb-1 ps-md-2 pb-md-2 ps-lg-3 pb-lg-3"})})]}),(0,a.jsxs)("div",{className:"row p-0 m-0",children:[(0,a.jsx)(N,{className:"col-4 p-0 m-0 hover-zoom-small",children:(0,a.jsx)("img",{src:F,alt:"8",className:"img-fluid w-100 ps-1 pb-1 ps-md-2 pb-md-2 ps-lg-3 pb-lg-3"})}),(0,a.jsx)(N,{className:"col-6 p-0 m-0 hover-zoom-small",children:(0,a.jsx)("img",{src:L,alt:"9",className:"img-fluid w-100 ps-1 pb-1 ps-md-2 pb-md-2 ps-lg-3 pb-lg-3"})})]})]})]})})};var B=function(e){return(0,a.jsxs)("section",{className:"mb-5",style:{overflow:"hidden"},children:[(0,a.jsxs)("div",{className:"my-5",children:[(0,a.jsx)("h5",{className:"text-center",style:{fontWeight:"600",fontSize:"20px",lineHeight:"30px"},children:"Share your setup with"}),(0,a.jsx)("h1",{className:"text-center extra-small",style:{fontWeight:"700",fontSize:"40px",lineHeight:"48px"},children:"#FuniroFurniture"})]}),(0,a.jsx)(R,{})]})},O=i(5596);function A(e){var s=e.list.map((function(s,i){return(0,a.jsx)("li",{className:"nav-item mb-2",children:(0,a.jsx)(O.Z,{name:s,style:{border:"3px solid transparent",boxSizing:"border-box",width:"max-content"}})},"".concat(e.title).concat(i))}));return(0,a.jsx)("div",{className:"col-6 col-lg-2 d-flex d-lg-inline justify-content-center justify-content-lg-center mb-4",children:(0,a.jsxs)("ul",{className:"nav flex-column gap-2 gap-lg-5",children:[(0,a.jsx)("li",{className:"nav-item",children:(0,a.jsx)("h5",{className:"normal-poppins",style:{color:"#9f9f9f"},children:e.title})}),s]})})}var D=d.memo(A);var E=function(e){return(0,a.jsx)("section",{children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("footer",{children:[(0,a.jsxs)("div",{className:"row",children:[(0,a.jsxs)("div",{className:"col-12 col-lg-4 mb-3 mb-lg-5 text-center text-lg-start",children:[(0,a.jsx)("h5",{className:"text-black mb-4 mb-lg-5",style:{fontWeight:"700",fontSize:"24px",lineHeight:"36px"},children:"Furino."}),(0,a.jsx)("p",{className:"m-0",style:{fontWeight:"400",fontSize:"16px",lineHeight:"24px",color:"#9f9f9f"},children:"400 University Drive Suite 200 Coral Gables, FL 33134 USA"})]}),(0,a.jsx)(D,{title:"Links",list:(0,d.useMemo)((function(){return["Home","Shop","About","Contact"]}),[])}),(0,a.jsx)(D,{title:"Help",list:(0,d.useMemo)((function(){return["Payment Options","Returns","Pricing","Privacy Policies"]}),[])}),(0,a.jsx)("div",{className:"col-12 col-lg-4 mb-3",children:(0,a.jsxs)("form",{children:[(0,a.jsx)("h5",{className:"mb-3 mb-lg-5 normal-poppins",style:{color:"#9f9f9f"},children:"Newsletter"}),(0,a.jsxs)("div",{className:"d-flex flex-sm-row w-100 gap-2",children:[(0,a.jsx)("label",{htmlFor:"newsletter",className:"visually-hidden",children:"Email address"}),(0,a.jsx)("input",{id:"newsletter",type:"text",className:"form-control border-start-0 border-end-0 border-top-0 bold-underlined2",style:{borderRadius:"0",borderColor:"black",border:"1px solid black",boxSizing:"border-box"},placeholder:"Enter Your Email Address"}),(0,a.jsx)("button",{className:"btn btn-outline border-start-0 border-end-0 border-top-0 bold-underlined",type:"button",style:{fontWeight:"500",fontSize:"14px",lineHeight:"21px",borderRadius:"0",color:"black",borderColor:"black",border:"1px solid black",boxSizing:"border-box"},children:"SUBSCRIBE"})]})]})})]}),(0,a.jsx)("div",{className:"d-flex flex-sm-row justify-content-center justify-content-lg-between py-4 my-4 border-top mb-0",children:(0,a.jsx)("p",{className:"normal-poppins text-center mb-0",children:"2023 furino. All rights reserved"})})]})})})},P=i.p+"static/media/dining.099610650a4a43ade535.png",_=i.p+"static/media/living.9e830c5dc316fb166dde.png",U=i.p+"static/media/bed.56a0baa8f3360e43db2d.png";var M=function(e){return(0,a.jsxs)("section",{className:"mb-5",children:[(0,a.jsxs)("div",{className:"my-5",children:[(0,a.jsx)("h1",{className:"text-center",style:{fontWeight:"700",fontSize:"32px",lineHeight:"48px",color:"#333333"},children:"Browse The Range"}),(0,a.jsx)("p",{className:"text-center px-5",style:{fontWeight:"400",fontSize:"20px",lineHeight:"30px",color:"#666666"},children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, mollitia!"})]}),(0,a.jsx)("div",{className:"container-lg px-5",children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsxs)(N,{className:"col-12 col-lg-4 text-center",children:[(0,a.jsx)("img",{src:P,alt:"Dining Room",className:"img-fluid mb-4"}),(0,a.jsx)("p",{className:"text-center",style:{fontWeight:"600",fontSize:"24px",lineHeight:"36px",color:"#333333"},children:"Dining"})]}),(0,a.jsxs)(N,{className:"col-12 col-lg-4 text-center",children:[(0,a.jsx)("img",{src:_,alt:"Living Room",className:"img-fluid mb-4"}),(0,a.jsx)("p",{className:"text-center",style:{fontWeight:"600",fontSize:"24px",lineHeight:"36px",color:"#333333"},children:"Living"})]}),(0,a.jsxs)(N,{className:"col-12 col-lg-4 text-center",children:[(0,a.jsx)("img",{src:U,alt:"Bedroom",className:"img-fluid mb-4"}),(0,a.jsx)("p",{className:"text-center",style:{fontWeight:"600",fontSize:"24px",lineHeight:"36px",color:"#333333"},children:"Bedroom"})]})]})})]})},I="Furino_furino__+Nnt5";var Y=function(e){return document.title="Furino",(0,a.jsxs)("div",{className:I,children:[(0,a.jsx)(c,{}),(0,a.jsx)(M,{}),(0,a.jsx)(j,{}),(0,a.jsx)(w,{}),(0,a.jsx)(B,{}),(0,a.jsx)(E,{})]})}},9119:function(e,s,i){var l=i(184);s.Z=function(e){return(0,l.jsx)("button",{className:"btn yellow-button ".concat(e.className&&e.className),style:{fontWeight:"650",fontSize:"16px",lineHeight:"24px"},onClick:e.onClick,hidden:e.hidden,type:e.type,disabled:e.disabled,children:e.text})}},7430:function(e,s,i){var l=i(184);s.Z=function(e){return(0,l.jsx)("div",{className:"btn yellow-button-outline ".concat(e.className&&e.className),style:{fontWeight:"700",fontSize:"16px",lineHeight:"24px"},onClick:e.onClick,hidden:e.hidden,children:e.text})}},4817:function(e,s,i){var l=i(184);s.Z=function(e){return(0,l.jsxs)("div",{className:"form-check form-check-inline ".concat(e.className&&e.className),children:[(0,l.jsx)("input",{className:"radio-button",type:"radio",name:e.name,id:e.id,value:e.value,defaultChecked:e.checked,onClick:e.onClick,onChange:e.onChange}),e.label&&(0,l.jsx)("label",{class:"form-check-label",for:e.id,children:e.value})]})}}}]);
//# sourceMappingURL=167.9d1fda42.chunk.js.map