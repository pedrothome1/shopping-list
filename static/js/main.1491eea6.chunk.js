(window["webpackJsonpshopping-list"]=window["webpackJsonpshopping-list"]||[]).push([[0],{56:function(e,t,n){e.exports=n(67)},61:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(9),r=n.n(i),c=(n(61),n(46)),l=n(119),s=n(120),u=n(28),m=n(116),d=n(115),f=n(117),h=n(118),p=n(111),g=n(112),b=n(113),v=n(109),E=n(110),w=n(123),y=n(122),x=n(43),k=Object(x.a)(function(){return{quantityTh:{width:"160px"},nameTd:{width:"100%"},minusPlusCellContainer:{display:"flex",justifyContent:"flex-end"}}}),C=n(107),S=n(44),I=n.n(S),j=n(45),N=n.n(j),O=Object(x.a)(function(){return{box:{display:"flex"},middle:{minWidth:"35px",display:"flex",alignItems:"center",justifyContent:"center",borderTop:"1px solid rgba(0, 0, 0, 0.14)",borderBottom:"1px solid rgba(0, 0, 0, 0.14)"},buttonLeft:{minWidth:"35px",borderTopRightRadius:0,borderBottomRightRadius:0,boxShadow:"none"},buttonRight:{minWidth:"35px",borderTopLeftRadius:0,borderBottomLeftRadius:0,boxShadow:"none"}}});function T(e){var t=e.value,n=e.onChange,a=e.disableLeftButton,i=O();return o.a.createElement(y.a,{component:"span",className:i.box},o.a.createElement(C.a,{onClick:function(){n(t-1)},className:i.buttonLeft,disabled:a,size:"small",variant:"contained",color:"secondary"},o.a.createElement(I.a,{fontSize:"small"})),o.a.createElement(y.a,{component:"span",className:i.middle},t),o.a.createElement(C.a,{onClick:function(){n(t+1)},className:i.buttonRight,size:"small",variant:"contained",color:"primary"},o.a.createElement(N.a,{fontSize:"small"})))}function B(e){var t=e.items,n=e.selected,a=e.onItemQuantityChange,i=e.onItemsSelection,r=k();var c={disabled:t.length<2,checked:t.length>1&&n.length===t.length};return o.a.createElement(p.a,null,o.a.createElement(g.a,null,o.a.createElement(v.a,null,o.a.createElement(E.a,{padding:"checkbox"},o.a.createElement(w.a,{disabled:c.disabled,checked:c.checked,onChange:function(e){e.target.checked?i(t.map(function(e){return e.id})):i([])}})),o.a.createElement(E.a,null,"Item"),o.a.createElement(E.a,{className:r.quantityTh},"Quantity"))),o.a.createElement(b.a,null,0===t.length?o.a.createElement(v.a,null,o.a.createElement(E.a,{colSpan:3},"There are no items yet.")):t.map(function(e){return o.a.createElement(v.a,{key:e.id},o.a.createElement(E.a,{padding:"checkbox"},o.a.createElement(w.a,{checked:n.includes(e.id),onChange:function(t){return function(e,t){t.target.checked?i(n.concat(e.id)):i(n.filter(function(t){return t!==e.id}))}(e,t)}})),o.a.createElement(E.a,{className:r.nameTd},e.name),o.a.createElement(E.a,{className:r.quantityTd},o.a.createElement(y.a,{className:r.minusPlusCellContainer},o.a.createElement(T,{value:e.quantity,onChange:function(t){return function(e,t){a(e,t)}(e,t)},disableLeftButton:1===e.quantity}))))})))}var D=n(114),R=n(121),A=Object(x.a)(function(){return{itemInput:{width:"100%"},button:{width:"100%"}}});function W(e){var t=e.showDeleteButton,n=e.onAdd,i=e.onDelete,r=A(),c=Object(a.useState)(""),l=Object(u.a)(c,2),s=l[0],m=l[1];function d(e){m(e.target.value)}var f=t?o.a.createElement(D.a,{item:!0,xs:12},o.a.createElement(C.a,{onClick:i,className:r.button,type:"button",variant:"contained",color:"secondary"},"Delete selected")):o.a.createElement(o.a.Fragment,null,o.a.createElement(D.a,{item:!0,xs:9},o.a.createElement(R.a,{onChange:d,value:s,className:r.itemInput,label:"Type the item name"})),o.a.createElement(D.a,{item:!0,xs:3},o.a.createElement(C.a,{className:r.button,type:"submit",variant:"contained",color:"primary"},"Add")));return o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),n(s),m("")}},o.a.createElement(D.a,{container:!0,alignItems:"flex-end",spacing:2},f))}var L=Object(x.a)(function(e){return{container:{marginTop:e.spacing(2),marginBottom:e.spacing(2)},paper:{marginBottom:e.spacing(2)}}});function q(e){var t=e.items,n=e.selected,i=e.showDeleteButton,r=e.onItemQuantityChange,c=e.onItemsSelection,l=e.onAdd,s=e.onDelete,u=L();return Object(a.useEffect)(function(){return window.scrollTo(0,document.body.scrollHeight)}),o.a.createElement(m.a,{className:u.container},o.a.createElement(d.a,{className:u.paper},o.a.createElement(f.a,null,o.a.createElement(h.a,{variant:"h6"},"Shopping list")),o.a.createElement(B,{items:t,selected:n,onItemQuantityChange:r,onItemsSelection:c})),o.a.createElement(W,{showDeleteButton:i,onAdd:l,onDelete:s}))}var Q=1;function z(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],i=t[1],r=Object(a.useState)([]),c=Object(u.a)(r,2),l=c[0],s=c[1];function m(e){var t={items:e,nextId:Q};window.localStorage.setItem("data",JSON.stringify(t))}Object(a.useEffect)(function(){var e=window.localStorage.getItem("data");if(e){var t=JSON.parse(e);Q=t.nextId,i(t.items)}},[]);var d=l.length>0;return o.a.createElement(q,{items:n,selected:l,showDeleteButton:d,onItemQuantityChange:function(e,t){if(!(t<1)){e.quantity=t;var a=n.slice();m(a),i(a)}},onItemsSelection:s,onAdd:function(e){var t=e.trim();if(""!==t){var a=n.concat({id:Q++,name:t,quantity:1});m(a),i(a)}},onDelete:function(){var e=l.slice(),t=n.filter(function(t){return!e.includes(t.id)});m(t),s([]),i(t)}})}var J=Object(c.a)({palette:{primary:{main:"#556080",contrastText:"#ffffff"},secondary:{main:"#D8625E",contrastText:"#ffffff"}}});var P=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function U(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(o.a.createElement(function(){return o.a.createElement(l.a,{theme:J},o.a.createElement(s.a,null),o.a.createElement(z,null))},null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/shopping-list",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/shopping-list","/service-worker.js");P?(!function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):U(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):U(t,e)})}}()}},[[56,1,2]]]);
//# sourceMappingURL=main.1491eea6.chunk.js.map