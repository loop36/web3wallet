(this.webpackJsonpwebwallet=this.webpackJsonpwebwallet||[]).push([[0],{42:function(e,t,c){},43:function(e,t,c){},48:function(e,t){},49:function(e,t){},57:function(e,t,c){"use strict";c.r(t);var n=c(7),s=c.n(n),l=c(29),a=c.n(l),r=(c(42),c(43),c(14)),i=c(3),o=function(e){return Object(i.jsxs)("div",{className:"h-30 my-8 flex flex-col justify-center self-center ",children:[Object(i.jsx)("label",{for:e.id,className:" self-start",children:e.title}),Object(i.jsx)("input",{className:"shadow appearance-none border-purple-300 border-2  rounded w-full py-2 px-3 text-primaryColor leading-tight focus:outline-none focus:shadow-outline",id:e.id,type:e.type,placeholder:e.pHolder,value:e.val,onChange:e.onChangeHandle})]})},j=c(1),d=c.n(j),b=c(21),x=c(19),h=new(c(35).a)({supportedChainIds:[1,3,4,5,42,97]}),u=c(34),f=function(e){return Object(i.jsx)("div",{className:"bg-secondaryColor justify-center self-center p-3 text-center   shadow-2xl text-primaryColor rounded-lg  tracking-wide",children:e.children})},O=function(e){return Object(i.jsxs)("div",{className:"fixed z-10 overflow-y-auto top-0 w-full text-center pt-auto bg-transparent h-screen left-0 ",id:"modal",children:[Object(i.jsx)("div",{className:"absolute flex justify-center self-center z-30 h-screen w-screen ",children:e.children}),Object(i.jsx)("div",{className:"fixed z-0 w-screen h-screen bg-primaryColor opacity-80 "})]})},m=function(e){return Object(i.jsx)("div",{className:" ",children:Object(i.jsx)("button",{className:"rounded-md ".concat(e.color," px-4 py-2 text-white"),onClick:e.click,children:e.children})})},p="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAB1UlEQVR42u2XSVPCQBCFnzchEnZw+StKCfKLKcvCFVCCgKxuyFGxyoueBK5Ywx7Sk5lJ8EbPjbz+XhJmujvAJjbxH5HCO06xo5SjI4sejmWkR/jFCCMY0KXxftyPcwZIiaSHUzxbNQQl8eV5jsAigf5cylYZASE+iAdTTh8JvvjLJGWrKniKEOqWnE++vGgRsxcV4urDaBAZOb5BAFUioYkI5+XUCHUDYbtHDqBCJLUQtSijaBPKus3zEntisV6xZ1LF8Kj4OoldbV6dJYsYngiFwsnRUSIAb9gfX43j2R2ehYYcAeniAHG8EFeK8KlWJB/uSIsu8WsempOi58U1AbOuW8XCaLK4EuILzvETi0tb/Dk8bruDBxdcfNY9fmKRJfFn2F5Ph6PPNisLwXXgdfJcq7Ukh/g1WGgoCLdpSa1EqOJdWPhgELAq2ZIM9UqkIU92qxBnTyla0LW0MW0nfrLrKVjQ+OZSr3Vl4RXi+RYSXcGLGwk8fwIRWND4FmcQcWCRkbx7u7luhAzf4EP67hcW1tmux5cnMVjBR4SbYtVigKTM1wFbbQn85L9YzNdDnIjksxG+g13pgzmzGCItI0/jBxViGrWLMAx8y+FZbG0+VDehEH/QEmfkPJ30ewAAAABJRU5ErkJggg==",g=function(e){return Object(i.jsx)(f,{children:Object(i.jsxs)("div",{className:"w-96 flex gap-4 flex-col p-4",children:[Object(i.jsxs)("div",{className:"flex mb-2",children:[Object(i.jsx)("h3",{className:"text-xl font-bold text-left flex-1 ",children:" Wallet Details"})," ",Object(i.jsx)("span",{className:"text-right flex-none ",children:Object(i.jsx)("img",{src:p,alt:"close",width:"20px",onClick:e.disconnect})})]}),Object(i.jsxs)("table",{className:"self-center mx-auto justify-center text-center h-52  w-80 mb-5 ",children:[Object(i.jsxs)("tr",{className:" border-b-2 mb-12 ",children:[Object(i.jsx)("th",{className:"w-1/2 text-left",children:"Key"}),Object(i.jsx)("th",{className:"text-right",children:" Value"})]}),Object(i.jsxs)("tr",{className:" border-b-2 mb-3 p-3",children:[Object(i.jsx)("td",{className:"text-left",children:"Account "}),Object(i.jsxs)("td",{className:"text-right",children:[e.acc.substr(0,5),"$","...","$",e.acc.substr(38,42)]})]}),Object(i.jsxs)("tr",{className:" border-b-2 mb-3 ",children:[Object(i.jsx)("td",{className:"text-left",children:"Chain ID"}),Object(i.jsx)("td",{className:"text-right",children:e.chain})]}),Object(i.jsxs)("tr",{className:" border-b-2 mb-3 ",children:[Object(i.jsx)("td",{className:"text-left",children:"Balance"}),Object(i.jsx)("td",{className:"text-right",children:e.balance})]})]}),Object(i.jsx)(m,{click:e.disconnect,color:"bg-red-500",children:" Disconnect"})]})})},w=function(e){var t=Object(x.b)(),c=t.active,s=t.account,l=t.library,a=t.activate,o=t.deactivate,j=t.chainId,w=Object(n.useState)(!1),N=Object(r.a)(w,2),v=N[0],C=N[1],A=Object(n.useState)(),y=Object(r.a)(A,2),k=y[0],B=y[1];function E(){return(E=Object(b.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a(h);case 3:C(!0),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:return e.prev=9,e.finish(9);case 11:case"end":return e.stop()}}),e,null,[[0,6,9,11]])})))).apply(this,arguments)}function F(){return(F=Object(b.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{o(),C(!1)}catch(t){console.log(t)}case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){console.log(c),s&&l.getBalance(s).then((function(e){var t=Object(u.a)(e);B(t)}))}),[l,s,v]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(O,{children:Object(i.jsx)(f,{children:Object(i.jsxs)("div",{className:" w-80 h-30 flex flex-col gap-2",children:[Object(i.jsxs)("div",{className:"flex ",children:[Object(i.jsxs)("h4",{className:" flex-1 self-start text-left ml-3 font-bold",children:[" ","Wallet Details"]}),Object(i.jsx)("span",{className:" self-end flex-none mb-5",children:Object(i.jsx)("img",{src:p,alt:"close",width:"15px",onClick:e.close})})]}),Object(i.jsxs)("p",{className:"mb-4 text-left ml-3 text-red-600 font-light tracking-normal",children:[" ","Wallet not Connected . Please Click Connect now button"]}),Object(i.jsxs)("div",{className:"ml-3 flex justify-center w-96 gap-4 self-center",children:[Object(i.jsx)(m,{click:function(){return E.apply(this,arguments)},color:"bg-blue-500",children:Object(i.jsx)("p",{className:" w-32",children:"Connect"})}),Object(i.jsx)(m,{click:e.close,color:"bg-red-600",children:Object(i.jsx)("p",{className:"w-24",children:"Cancel"})})]})]})})}),v&&c?Object(i.jsxs)(O,{children:[" ",Object(i.jsx)(g,{disconnect:function(){return F.apply(this,arguments)},acc:s,balance:k,chain:j})]}):""]})},N=function(){var e=Object(n.useState)(),t=Object(r.a)(e,2),c=t[0],s=t[1],l=Object(n.useState)(),a=Object(r.a)(l,2),j=a[0],d=a[1],b=Object(n.useState)(!1),x=Object(r.a)(b,2),h=x[0],u=x[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(f,{children:Object(i.jsxs)("div",{className:" w-60 md:w-96 mx-4 h-80 text-center",children:[Object(i.jsx)("h2",{className:" font-semibold text-2xl ",children:"Crypto Converter"}),Object(i.jsx)(o,{type:"text",title:"NEP",id:"NEP",pHolder:"0.00",val:c,onChangeHandle:function(e){var t,c=e.target.value;t=(3*c).toFixed(2),s(c),d(t)}}),Object(i.jsx)(o,{type:"text",title:"BNB",id:"BNB",pHolder:"0.00",val:j,onChangeHandle:function(e){var t,c=e.target.value;t=parseFloat(c/3).toFixed(2),s(t),d(c)}}),Object(i.jsxs)("p",{style:{color:"blue",cursor:"pointer"},onClick:function(){u(!0)},children:[" ","Check Wallet Detail"]})]})}),h?Object(i.jsx)(w,{close:function(){u(!1)}}):""]})},v=c(61),C=c.p+"static/media/logo.8c3b4c93.svg",A=function(e){return Object(i.jsxs)("div",{className:"flex flex-col w-screen h-screen  bg-primaryColor ",children:[Object(i.jsx)("img",{src:C,alt:"Logo",className:"flex-shrink w-60 md:w-96 self-center m-10"}),e.children]})},y=function(e){var t=new v.a(e);return t.pollingInterval=1e3,t};var k=function(){return Object(i.jsx)(x.a,{getLibrary:y,children:Object(i.jsx)(A,{children:Object(i.jsx)(N,{})})})},B=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,62)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,l=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),l(e),a(e)}))};a.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(k,{})}),document.getElementById("root")),B()}},[[57,1,2]]]);
//# sourceMappingURL=main.cd8099ff.chunk.js.map