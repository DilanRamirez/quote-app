(this["webpackJsonpquotes-generator"]=this["webpackJsonpquotes-generator"]||[]).push([[0],{52:function(e,t,a){},54:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(3),c=a(1),r=a(15),s=a.n(r),i=(a(52),a(13)),o=a.n(i),u=a(16),l=a(14),j=(a(90),a(86)),d=a(87),h=a(22),b=a(8),p=a(19),x=(a(54),a(89));a(55);function f(e){var t=e.images,a=(e.author,e.quote),c=e.quoteAuthor,r=t.length>0?t.map((function(e,t){return Object(n.jsxs)(x.a.Item,{children:[Object(n.jsx)("img",{className:"d-block w-100 carousel-img",src:e,alt:"First slide",style:{height:"30vh !important",width:"40vh !important"}}),Object(n.jsx)(x.a.Caption,{className:"caption d-flex h-100-2 align-items-center justify-content-center",children:Object(n.jsxs)("div",{className:"quote-info",children:[Object(n.jsx)("h1",{className:"quote-text",children:a[t]}),Object(n.jsxs)("h4",{className:"author-text",children:[" - ",c[t]]})]})})]},t)})):null;return Object(n.jsx)("div",{children:Object(n.jsx)(j.a,{className:"container-carousel",children:Object(n.jsx)(x.a,{interval:8e3,children:r})})})}var O=a(43),m=a(91),v=a(44),g=a.n(v),w=a(45);function N(e){var t=e.images,a=e.author,r=e.quote,s=(e.quoteAuthor,Object(c.useState)([])),i=Object(l.a)(s,2),o=i[0],u=i[1],d=Object(c.useState)(""),h=Object(l.a)(d,2),b=(h[0],h[1]),x=t.length>0?t.map((function(e,t){return Object(n.jsx)(g.a,{height:200,offset:100,id:t,children:Object(n.jsx)(m.a,{className:" single-quote",onClick:function(){return b(r[t])},children:Object(n.jsxs)(j.a,{className:"d-flex flex-row",children:[Object(n.jsx)(m.a.Img,{variant:"top",src:e,style:{height:55,width:55,display:"flex",margin:"auto",borderRadius:12}}),Object(n.jsx)(m.a.Body,{children:Object(n.jsx)("div",{children:Object(n.jsxs)("p",{className:"single-quote-text",children:[r[t]," -"," ",Object(n.jsx)("p",{style:{color:"rgb(43 43 43)",fontSize:"11px"},children:a[t]})]})})}),Object(n.jsx)("h4",{style:{display:"flex",margin:"auto"},children:Object(n.jsx)("i",{id:t,onClick:function(){return function(e){u((function(t){return Object(O.a)({},e,!t[e])}))}(t)},children:o[t]?Object(n.jsx)(p.b,{}):Object(n.jsx)(w.a,{})})})]})})},t)})):null;return Object(n.jsx)("div",{children:x})}var y=a(88),q=a.p+"static/media/welcomePic.c79bba4d.jpg";function k(){return Object(n.jsx)("div",{children:Object(n.jsxs)(j.a,{className:"welcome-container",children:[Object(n.jsx)("h1",{children:"Welcome"}),Object(n.jsx)("p",{style:{color:"#adadad"},children:"Discover new famous quotes"}),Object(n.jsx)(d.a,{style:{height:"30%",padding:"10px",marginBottom:"7rem",marginTop:"5rem"},src:q}),Object(n.jsx)(y.a,{style:{backgroundColor:"#ff4f5a",border:"#ff4f5a",width:"8rem",borderRadius:"1rem"},children:Object(n.jsx)(h.b,{to:"/Quotes",children:"Start"})})]})})}var S=a(29),C=a.n(S),A=function(){var e=Object(u.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.get("https://picsum.photos/v2/list?limit=100?blur=2");case 3:return t=e.sent,a={url:t.data.map((function(e){return e.download_url})),author:t.data.map((function(e){return e.author}))},console.log(a),e.abrupt("return",a);case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(u.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.get("https://type.fit/api/quotes");case 3:return t=e.sent,a={text:t.data.slice(0,100).map((function(e){return e.text})),author:t.data.slice(0,100).map((function(e){return e.author}))},console.log(a),e.abrupt("return",a);case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),a=t[0],r=t[1],s=Object(c.useState)([]),i=Object(l.a)(s,2),d=i[0],h=i[1],b=Object(c.useState)([]),p=Object(l.a)(b,2),x=p[0],O=p[1],m=Object(c.useState)([]),v=Object(l.a)(m,2),g=v[0],w=v[1];return Object(c.useEffect)((function(){var e=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A();case 2:t=e.sent,r(t.url),h(t.author);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F();case 2:t=e.sent,O(t.text),w(t.author);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(),t()}),[]),Object(n.jsxs)("div",{children:[Object(n.jsx)(I,{}),Object(n.jsx)("div",{className:"spacer"}),Object(n.jsx)("div",{style:{padding:"15px",borderRadius:"2rem"},children:Object(n.jsx)(f,{images:a,author:d,quote:x,quoteAuthor:g})}),Object(n.jsx)("div",{className:"spacer"}),Object(n.jsx)(j.a,{className:"card-container",children:Object(n.jsx)(N,{images:a,author:d,quote:x,quoteAuthor:g})})]})},I=function(){return Object(n.jsxs)("div",{className:"header",children:[Object(n.jsxs)("div",{className:"icon-title",children:[Object(n.jsx)(p.a,{className:"back-icon",onClick:function(){return window.location.href="/quote-app/"}}),Object(n.jsx)("h4",{children:"Your Quotes"})]}),Object(n.jsx)(d.a,{src:"https://avatars.dicebear.com/4.5/api/avataaars/tfd.svg",className:"avatar"})]})};var P=function(){return Object(n.jsx)(h.a,{basename:"/",children:Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)("div",{className:"welcome",children:[Object(n.jsx)(b.a,{path:"/",exact:!0,component:k}),Object(n.jsx)(b.a,{path:"/Quotes",component:B})]})})})},Q=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,92)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};a(83);s.a.render(Object(n.jsx)(P,{}),document.getElementById("root")),Q()}},[[84,1,2]]]);
//# sourceMappingURL=main.fe122a37.chunk.js.map