"use strict";(self.webpackChunktest_tasks_12=self.webpackChunktest_tasks_12||[]).push([[57],{6805:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(4165),a=n(5861),s=n(5671),c=n(3144),i=n(1044),u=function(){function e(){(0,s.Z)(this,e)}return(0,c.Z)(e,null,[{key:"getPage",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.ZP.get("https://frontend-test-assignment-api.abz.agency/api/v1/users",{params:{page:t,count:n}});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"getByPositions",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.ZP.get("https://frontend-test-assignment-api.abz.agency/api/v1/positions");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getToken",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.ZP.get("https://frontend-test-assignment-api.abz.agency/api/v1/token");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}()},1057:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var r=n(4165),a=n(2982),s=n(5861),c=n(885),i=n(2791),u=n(6805),o=n(3374),l=n(2831),d=n(4038),p="GetRequest_getrequest__USmaH",f="GetRequest_getrequest__container__kdtui",_="GetRequest_getrequest__btn__yKknw",m={card:"MyCard_card__TzHcw",card__body:"MyCard_card__body__+Siv-","card-img":"MyCard_card-img__rOv1R",name:"MyCard_name__yHeMn",email:"MyCard_email__G1DSJ",page:"MyCard_page__veTtO",page__end:"MyCard_page__end__JOyrh",hoverText:"MyCard_hoverText__mg9zT"},h=n(184),v=function(e){var t=e.User;return(0,h.jsx)("div",{className:m.card,children:(0,h.jsxs)("div",{className:m.card__body,children:[(0,h.jsx)("div",{className:m["card-img"],children:(0,h.jsx)("img",{src:t.photo,alt:"false image"})}),(0,h.jsx)("p",{className:m.name,title:t.name,children:t.name}),(0,h.jsx)("p",{className:m.position,title:t.position,children:t.position}),(0,h.jsx)("p",{className:m.email,title:t.email,children:t.email}),(0,h.jsx)("p",{className:m.tel,title:t.phone,children:t.phone})]})})},x=function(e){var t=e.users,n=(0,i.useState)("registration_timestamp"),r=(0,c.Z)(n,2),a=r[0],s=(r[1],function(e,t){return(0,i.useMemo)((function(){return t?t.sort((function(t,n){return t[e]>n[e]?-1:1})):t}),[e,t])}(a,t));return(0,h.jsx)(h.Fragment,{children:s.map((function(e){return(0,h.jsx)(v,{User:e},e.id)}))})},Z=n(8629),g=function(){var e=(0,i.useState)(!1),t=(0,c.Z)(e,2),n=t[0],r=t[1],a=(0,i.useRef)(null),s=(0,i.useContext)(Z.$).onScroll;return(0,i.useEffect)((function(){return n&&a.current.scrollIntoView({behavior:"smooth"}),r(!0)}),[s]),[a]},y=function(){var e=g(),t=(0,c.Z)(e,1)[0],n=(0,i.useState)([]),m=(0,c.Z)(n,2),v=m[0],Z=m[1],y=(0,i.useState)(0),j=(0,c.Z)(y,2),k=j[0],w=j[1],b=(0,i.useState)(6),N=(0,c.Z)(b,2),S=N[0],C=(N[1],(0,i.useState)(1)),M=(0,c.Z)(C,2),q=M[0],T=M[1],z=(0,o.U)(function(){var e=(0,s.Z)((0,r.Z)().mark((function e(t,n){var s,c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.getPage(t,n);case 2:s=e.sent,Z([].concat((0,a.Z)(v),(0,a.Z)(s.data.users))),c=s.data.total_pages,w(c);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),P=(0,c.Z)(z,3),G=P[0],R=P[1],U=P[2];return(0,i.useEffect)((function(){G(q,S)}),[q]),(0,h.jsxs)("div",{className:p,children:[(0,h.jsx)("h2",{id:"simple-test",ref:t,children:"Working with GET request"}),(0,h.jsx)("div",{className:f,children:(0,h.jsx)(x,{users:v})}),R&&(0,h.jsx)("div",{className:"flex items-center flex-col pt-[50px] pb-[50px]",children:(0,h.jsx)(l.Z,{})}),U&&(0,h.jsxs)("h1",{className:"text-center",children:["\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 $",U]}),(0,h.jsx)("div",{className:_,children:(0,h.jsx)("div",{className:q===k?"hidden":"",children:(0,h.jsx)("div",{className:"w-[120px]",children:(0,h.jsx)(d.Z,{onClick:function(e){return T(q+1)},children:"Show more"})})})})]})}},2831:function(e,t,n){n.d(t,{Z:function(){return s}});n(2791);var r="Loader_loader__gyOz7",a=n(184),s=function(){return(0,a.jsx)("div",{className:r})}},4038:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(1413),a=n(4925),s=(n(2791),"MyButton_myBtn__+q2Fb"),c=n(184),i=["children"],u=function(e){var t=e.children,n=(0,a.Z)(e,i);return(0,c.jsx)("button",(0,r.Z)((0,r.Z)({},n),{},{className:s,children:t}))}},3374:function(e,t,n){n.d(t,{U:function(){return i}});var r=n(4165),a=n(5861),s=n(885),c=n(2791),i=function(e){var t=(0,c.useState)(!1),n=(0,s.Z)(t,2),i=n[0],u=n[1],o=(0,c.useState)(""),l=(0,s.Z)(o,2),d=l[0],p=l[1],f=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(){var n=arguments;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,u(!0),t.next=4,e.apply(void 0,n);case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),p(t.t0.message);case 9:return t.prev=9,u(!1),t.finish(9);case 12:case"end":return t.stop()}}),t,null,[[0,6,9,12]])})));return function(){return t.apply(this,arguments)}}();return[f,i,d]}}}]);
//# sourceMappingURL=57.4dd24b30.chunk.js.map