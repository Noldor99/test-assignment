(self.webpackChunktest_tasks_12=self.webpackChunktest_tasks_12||[]).push([[438],{6805:function(t,e,n){"use strict";n.d(e,{Z:function(){return c}});var r=n(4165),i=n(5861),o=n(5671),a=n(3144),s=n(1044),c=function(){function t(){(0,o.Z)(this,t)}return(0,a.Z)(t,null,[{key:"getPage",value:function(){var t=(0,i.Z)((0,r.Z)().mark((function t(e,n){var i;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.ZP.get("https://frontend-test-assignment-api.abz.agency/api/v1/users",{params:{page:e,count:n}});case 2:return i=t.sent,t.abrupt("return",i);case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},{key:"getByPositions",value:function(){var t=(0,i.Z)((0,r.Z)().mark((function t(){var e;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.ZP.get("https://frontend-test-assignment-api.abz.agency/api/v1/positions");case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"getToken",value:function(){var t=(0,i.Z)((0,r.Z)().mark((function t(){var e;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.ZP.get("https://frontend-test-assignment-api.abz.agency/api/v1/token");case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()}]),t}()},2438:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return A}});var r=n(885),i=n(2831),o=n(1413),a=n(2791),s=n(1134),c="FileUpload_drop-container__FfI4E",u="FileUpload_drop-title__19EgF",l="FileUpload_upload__input__8AZlH",f="FileUpload_FileUploadError__5WDM3",h=n(184),p=function(){var t,e=(0,s.Gc)(),n=e.register,r=e.formState,i=r.errors,a=(r.isValid,null!==i&&void 0!==i&&i.photo?[{borderColor:"#CB3D40"},{display:"none"},{color:"#CB3D40"}]:[{borderColor:""},{display:"block"},{color:"#7E7E7E"}]);return(0,h.jsx)("div",{children:(0,h.jsxs)("label",{className:c,htmlFor:"picture",children:[(0,h.jsx)("span",{style:a[0],className:u,children:"Upload"}),(0,h.jsx)("input",(0,o.Z)((0,o.Z)({style:a[0],className:l,id:"picture"},n("photo")),{},{type:"file"})),(0,h.jsx)("div",{className:f,style:a[2],children:null===i||void 0===i||null===(t=i.picture)||void 0===t?void 0:t.message})]})})},d="ReInput_inputBox__Jwtwk",v=function(t){var e,n=t.header,r=t.nameInput,i=t.type,a=t.helperText,c=(0,s.Gc)({mode:"onCange"}),u=c.register,l=c.formState.errors,f=null!==l&&void 0!==l&&l[r]?[{borderColor:"#CB3D40"},{display:"none"},{color:"#CB3D40"}]:[{borderColor:"#D0CFCF"},{display:"block"},{color:"#7E7E7E"}];return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{className:d,children:[(0,h.jsx)("input",(0,o.Z)({style:f[0],type:i,name:r,required:"required"},u(r))),(0,h.jsx)("span",{style:f[2],children:n}),(0,h.jsx)("p",{style:f[1],children:a})]}),(0,h.jsx)("div",{style:f[2],children:null===l||void 0===l||null===(e=l[r])||void 0===e?void 0:e.message})]})},y=[{nameInput:"name",type:"text",header:"First Name",helperText:""},{nameInput:"email",type:"email",header:"Email",helperText:""},{nameInput:"phone",type:"text",header:"Phone",helperText:"+38 (XXX) XXX - XX - XX"}],m=function(){return(0,h.jsx)("div",{className:"pb-[25px]",children:y.map((function(t){var e=t.nameInput,n=t.type,r=t.header,i=t.helperText;return(0,h.jsx)(v,{nameInput:e,type:n,header:r,helperText:i},e)}))})},b=n(4165),g=n(5861),x="RadioInput_radio__container__747cr",w="RadioInput_radio__label__yYFdm",O="RadioInput_radio-box__jc6d+",j="RadioInput_radio-style__G0fqh",_=function(t){var e,n=t.id,r=t.name,i=t.checked,a=(0,s.Gc)(),c=a.register,u=a.formState.errors;return(0,h.jsxs)("div",{className:x,children:[(0,h.jsxs)("label",{className:w,children:[(0,h.jsx)("input",(0,o.Z)({className:O,type:"radio",name:"options",value:r,checked:i},c("position"))),(0,h.jsx)("span",{className:j}),r]},n),(0,h.jsx)("div",{children:null===u||void 0===u||null===(e=u[r])||void 0===e?void 0:e.message})]})},P=n(3374),S=n(1044),I=function(){var t=(0,a.useState)([]),e=(0,r.Z)(t,2),n=e[0],o=e[1],s=(0,P.U)((0,g.Z)((0,b.Z)().mark((function t(){var e;return(0,b.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S.ZP.get("https://frontend-test-assignment-api.abz.agency/api/v1/positions");case 2:e=t.sent,o(e.data.positions);case 4:case"end":return t.stop()}}),t)})))),c=(0,r.Z)(s,3),u=c[0],l=c[1];c[2];return(0,a.useEffect)((function(){u()}),[]),(0,h.jsxs)(h.Fragment,{children:[l&&(0,h.jsx)(i.Z,{}),n.map((function(t){var e=t.id,n=t.name,r=t.checked;return(0,h.jsx)(_,{id:e,name:n,checked:r},e)}))]})},Z="Form_form__container__4VAjV",M="Form_form__btn__Tu7gL",k="Form_form__title__fsZ0y",C="Form_form__success__+7CN+",E=n(4038),D=n(1425),F=n.n(D),N=function(){var t=(0,a.useState)({width:window.innerWidth,height:window.document.body.offsetHeight}),e=(0,r.Z)(t,2),n=e[0];e[1];return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(F(),{width:.97*n.width,height:n.height,tweenDuration:3e3,numberOfPieces:1200,gravity:1})})},T=(n(6805),S.ZP.create({baseURL:"https://frontend-test-assignment-api.abz.agency/api/v1/users"}));T.interceptors.request.use((function(t){return t.headers.token=localStorage.getItem("token"),t}));var R=function(){var t=(0,a.useState)(!1),e=(0,r.Z)(t,2),n=e[0],i=e[1],o=function(){var t=(0,a.useState)(!1),e=(0,r.Z)(t,2),n=e[0],i=e[1];return(0,a.useEffect)((function(){setTimeout((function(){i(!1)}),12e3)}),[n]),[n,i]}(),s=(0,r.Z)(o,2),c=s[0],u=s[1],l=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=(0,a.useState)(!0),i=(0,r.Z)(n,2),o=i[0],s=i[1],c=(0,a.useState)(),u=(0,r.Z)(c,2),l=u[0],f=u[1],h=(0,a.useState)(""),p=(0,r.Z)(h,2),d=p[0],v=p[1];(0,a.useEffect)((function(){e?m():s(!1)}),[]);var y=function(){m()},m=function(){s(!0),(0,S.ZP)(t).then((function(t){v(""),console.log(t),f(t.data)})).catch((function(t){v(t.message)})).finally((function(){return s(!1)}))};return[o,l,d,y]}({method:"GET",url:"https://frontend-test-assignment-api.abz.agency/api/v1/token"}),f=(0,r.Z)(l,4),h=f[0],p=f[1],d=(f[2],f[3],function(){var t=(0,g.Z)((0,b.Z)().mark((function t(e){var n,r;return(0,b.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T.post("",e);case 3:return n=t.sent,r=n.data,i(!0),u(!0),t.abrupt("return",r);case 10:t.prev=10,t.t0=t.catch(0),i(!1),u(!1),alert(t.t0.response.data.message);case 15:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}());return[n,function(t){console.log("first"),p&&localStorage.setItem("token",p.token),console.log(p);var e=new FormData;e.append("photo",t.photo[0]),e.append("phone",t.phone),e.append("position_id",4),e.append("email",t.email),e.append("name",t.name),d(e).then((function(t){return console.log(t)}))},h,c]},A=function(t){var e=t.methods,n=R(),o=(0,r.Z)(n,4),a=o[0],s=o[1],c=o[2],u=o[3];return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("form",{onSubmit:e.handleSubmit(s),children:[(0,h.jsx)("h2",{id:"post__request",className:k,children:"Working with POST request"}),(0,h.jsxs)("div",{className:Z,children:[(0,h.jsx)(m,{}),(0,h.jsx)(I,{}),(0,h.jsx)(p,{}),(0,h.jsx)("div",{className:M,children:c?(0,h.jsx)(i.Z,{}):(0,h.jsx)(E.Z,{children:"Sign up"})})]})]}),a&&(0,h.jsxs)("div",{children:[(0,h.jsx)("h2",{className:k,children:"User successfully registered"}),(0,h.jsxs)("div",{className:C,children:[u&&(0,h.jsx)(N,{}),(0,h.jsx)("img",{src:"./image/success-image.svg",alt:"nosing"})]})]})]})}},2831:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});n(2791);var r="Loader_loader__gyOz7",i=n(184),o=function(){return(0,i.jsx)("div",{className:r})}},4038:function(t,e,n){"use strict";n.d(e,{Z:function(){return c}});var r=n(1413),i=n(4925),o=(n(2791),"MyButton_myBtn__+q2Fb"),a=n(184),s=["children"],c=function(t){var e=t.children,n=(0,i.Z)(t,s);return(0,a.jsx)("button",(0,r.Z)((0,r.Z)({},n),{},{className:o,children:e}))}},3374:function(t,e,n){"use strict";n.d(e,{U:function(){return s}});var r=n(4165),i=n(5861),o=n(885),a=n(2791),s=function(t){var e=(0,a.useState)(!1),n=(0,o.Z)(e,2),s=n[0],c=n[1],u=(0,a.useState)(""),l=(0,o.Z)(u,2),f=l[0],h=l[1],p=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var n=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c(!0),e.next=4,t.apply(void 0,n);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),h(e.t0.message);case 9:return e.prev=9,c(!1),e.finish(9);case 12:case"end":return e.stop()}}),e,null,[[0,6,9,12]])})));return function(){return e.apply(this,arguments)}}();return[p,s,f]}},1425:function(t,e,n){var r;"undefined"!=typeof self&&self,t.exports=(r=n(2791),function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e){t.exports=r},function(t,e,n){"use strict";var r={linear:function(t,e,n,r){return(n-e)*t/r+e},easeInQuad:function(t,e,n,r){return(n-e)*(t/=r)*t+e},easeOutQuad:function(t,e,n,r){return-(n-e)*(t/=r)*(t-2)+e},easeInOutQuad:function(t,e,n,r){var i=n-e;return(t/=r/2)<1?i/2*t*t+e:-i/2*(--t*(t-2)-1)+e},easeInCubic:function(t,e,n,r){return(n-e)*(t/=r)*t*t+e},easeOutCubic:function(t,e,n,r){return(n-e)*((t=t/r-1)*t*t+1)+e},easeInOutCubic:function(t,e,n,r){var i=n-e;return(t/=r/2)<1?i/2*t*t*t+e:i/2*((t-=2)*t*t+2)+e},easeInQuart:function(t,e,n,r){return(n-e)*(t/=r)*t*t*t+e},easeOutQuart:function(t,e,n,r){return-(n-e)*((t=t/r-1)*t*t*t-1)+e},easeInOutQuart:function(t,e,n,r){var i=n-e;return(t/=r/2)<1?i/2*t*t*t*t+e:-i/2*((t-=2)*t*t*t-2)+e},easeInQuint:function(t,e,n,r){return(n-e)*(t/=r)*t*t*t*t+e},easeOutQuint:function(t,e,n,r){return(n-e)*((t=t/r-1)*t*t*t*t+1)+e},easeInOutQuint:function(t,e,n,r){var i=n-e;return(t/=r/2)<1?i/2*t*t*t*t*t+e:i/2*((t-=2)*t*t*t*t+2)+e},easeInSine:function(t,e,n,r){var i=n-e;return-i*Math.cos(t/r*(Math.PI/2))+i+e},easeOutSine:function(t,e,n,r){return(n-e)*Math.sin(t/r*(Math.PI/2))+e},easeInOutSine:function(t,e,n,r){return-(n-e)/2*(Math.cos(Math.PI*t/r)-1)+e},easeInExpo:function(t,e,n,r){return 0==t?e:(n-e)*Math.pow(2,10*(t/r-1))+e},easeOutExpo:function(t,e,n,r){var i=n-e;return t==r?e+i:i*(1-Math.pow(2,-10*t/r))+e},easeInOutExpo:function(t,e,n,r){var i=n-e;return 0===t?e:t===r?e+i:(t/=r/2)<1?i/2*Math.pow(2,10*(t-1))+e:i/2*(2-Math.pow(2,-10*--t))+e},easeInCirc:function(t,e,n,r){return-(n-e)*(Math.sqrt(1-(t/=r)*t)-1)+e},easeOutCirc:function(t,e,n,r){return(n-e)*Math.sqrt(1-(t=t/r-1)*t)+e},easeInOutCirc:function(t,e,n,r){var i=n-e;return(t/=r/2)<1?-i/2*(Math.sqrt(1-t*t)-1)+e:i/2*(Math.sqrt(1-(t-=2)*t)+1)+e},easeInElastic:function(t,e,n,r){var i,o,a,s=n-e;return a=1.70158,0===t?e:1==(t/=r)?e+s:((o=0)||(o=.3*r),(i=s)<Math.abs(s)?(i=s,a=o/4):a=o/(2*Math.PI)*Math.asin(s/i),-i*Math.pow(2,10*(t-=1))*Math.sin((t*r-a)*(2*Math.PI)/o)+e)},easeOutElastic:function(t,e,n,r){var i,o,a,s=n-e;return a=1.70158,0===t?e:1==(t/=r)?e+s:((o=0)||(o=.3*r),(i=s)<Math.abs(s)?(i=s,a=o/4):a=o/(2*Math.PI)*Math.asin(s/i),i*Math.pow(2,-10*t)*Math.sin((t*r-a)*(2*Math.PI)/o)+s+e)},easeInOutElastic:function(t,e,n,r){var i,o,a,s=n-e;return a=1.70158,0===t?e:2==(t/=r/2)?e+s:((o=0)||(o=r*(.3*1.5)),(i=s)<Math.abs(s)?(i=s,a=o/4):a=o/(2*Math.PI)*Math.asin(s/i),t<1?i*Math.pow(2,10*(t-=1))*Math.sin((t*r-a)*(2*Math.PI)/o)*-.5+e:i*Math.pow(2,-10*(t-=1))*Math.sin((t*r-a)*(2*Math.PI)/o)*.5+s+e)},easeInBack:function(t,e,n,r,i){return void 0===i&&(i=1.70158),(n-e)*(t/=r)*t*((i+1)*t-i)+e},easeOutBack:function(t,e,n,r,i){return void 0===i&&(i=1.70158),(n-e)*((t=t/r-1)*t*((i+1)*t+i)+1)+e},easeInOutBack:function(t,e,n,r,i){var o=n-e;return void 0===i&&(i=1.70158),(t/=r/2)<1?o/2*(t*t*((1+(i*=1.525))*t-i))+e:o/2*((t-=2)*t*((1+(i*=1.525))*t+i)+2)+e},easeInBounce:function(t,e,n,i){var o=n-e;return o-r.easeOutBounce(i-t,0,o,i)+e},easeOutBounce:function(t,e,n,r){var i=n-e;return(t/=r)<1/2.75?i*(7.5625*t*t)+e:t<2/2.75?i*(7.5625*(t-=1.5/2.75)*t+.75)+e:t<2.5/2.75?i*(7.5625*(t-=2.25/2.75)*t+.9375)+e:i*(7.5625*(t-=2.625/2.75)*t+.984375)+e},easeInOutBounce:function(t,e,n,i){var o=n-e;return t<i/2?.5*r.easeInBounce(2*t,0,o,i)+e:.5*r.easeOutBounce(2*t-i,0,o,i)+.5*o+e}};t.exports=r},function(t,e,n){t.exports=n(3)},function(t,e,n){"use strict";n.r(e),n.d(e,"ReactConfetti",(function(){return q}));var r,i,o=n(0),a=n.n(o),s=n(1),c=n.n(s);function u(t,e){return t+Math.random()*(e-t)}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}!function(t){t[t.Circle=0]="Circle",t[t.Square=1]="Square",t[t.Strip=2]="Strip"}(r||(r={})),function(t){t[t.Positive=1]="Positive",t[t.Negative=-1]="Negative"}(i||(i={}));var h=function(){function t(e,n,r,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,"context",void 0),f(this,"radius",void 0),f(this,"x",void 0),f(this,"y",void 0),f(this,"w",void 0),f(this,"h",void 0),f(this,"vx",void 0),f(this,"vy",void 0),f(this,"shape",void 0),f(this,"angle",void 0),f(this,"angularSpin",void 0),f(this,"color",void 0),f(this,"rotateY",void 0),f(this,"rotationDirection",void 0),f(this,"getOptions",void 0),this.getOptions=n;var a,s,c=this.getOptions(),l=c.colors,h=c.initialVelocityX,p=c.initialVelocityY;this.context=e,this.x=r,this.y=o,this.w=u(5,20),this.h=u(5,20),this.radius=u(5,10),this.vx="number"==typeof h?u(-h,h):u(h.min,h.max),this.vy="number"==typeof p?u(-p,0):u(p.min,p.max),this.shape=(a=0,s=2,Math.floor(a+Math.random()*(s-a+1))),this.angle=u(0,360)*Math.PI/180,this.angularSpin=u(-.2,.2),this.color=l[Math.floor(Math.random()*l.length)],this.rotateY=u(0,1),this.rotationDirection=u(0,1)?i.Positive:i.Negative}var e,n,o;return e=t,(n=[{key:"update",value:function(){var t=this.getOptions(),e=t.gravity,n=t.wind,o=t.friction,a=t.opacity,s=t.drawShape;this.x+=this.vx,this.y+=this.vy,this.vy+=e,this.vx+=n,this.vx*=o,this.vy*=o,this.rotateY>=1&&this.rotationDirection===i.Positive?this.rotationDirection=i.Negative:this.rotateY<=-1&&this.rotationDirection===i.Negative&&(this.rotationDirection=i.Positive);var c=.1*this.rotationDirection;if(this.rotateY+=c,this.angle+=this.angularSpin,this.context.save(),this.context.translate(this.x,this.y),this.context.rotate(this.angle),this.context.scale(1,this.rotateY),this.context.rotate(this.angle),this.context.beginPath(),this.context.fillStyle=this.color,this.context.strokeStyle=this.color,this.context.globalAlpha=a,this.context.lineCap="round",this.context.lineWidth=2,s&&"function"==typeof s)s.call(this,this.context);else switch(this.shape){case r.Circle:this.context.beginPath(),this.context.arc(0,0,this.radius,0,2*Math.PI),this.context.fill();break;case r.Square:this.context.fillRect(-this.w/2,-this.h/2,this.w,this.h);break;case r.Strip:this.context.fillRect(-this.w/6,-this.h/2,this.w/3,this.h)}this.context.closePath(),this.context.restore()}}])&&l(e.prototype,n),o&&l(e,o),t}();function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var d=function t(e,n){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,"canvas",void 0),p(this,"context",void 0),p(this,"getOptions",void 0),p(this,"x",0),p(this,"y",0),p(this,"w",0),p(this,"h",0),p(this,"lastNumberOfPieces",0),p(this,"tweenInitTime",Date.now()),p(this,"particles",[]),p(this,"particlesGenerated",0),p(this,"removeParticleAt",(function(t){r.particles.splice(t,1)})),p(this,"getParticle",(function(){var t=u(r.x,r.w+r.x),e=u(r.y,r.h+r.y);return new h(r.context,r.getOptions,t,e)})),p(this,"animate",(function(){var t=r.canvas,e=r.context,n=r.particlesGenerated,i=r.lastNumberOfPieces,o=r.getOptions(),a=o.run,s=o.recycle,c=o.numberOfPieces,u=o.debug,l=o.tweenFunction,f=o.tweenDuration;if(!a)return!1;var h=r.particles.length,p=s?h:n,d=Date.now();if(p<c){i!==c&&(r.tweenInitTime=d,r.lastNumberOfPieces=c);for(var v=r.tweenInitTime,y=l(d-v>f?f:Math.max(0,d-v),p,c,f),m=Math.round(y-p),b=0;b<m;b++)r.particles.push(r.getParticle());r.particlesGenerated+=m}return u&&(e.font="12px sans-serif",e.fillStyle="#333",e.textAlign="right",e.fillText("Particles: ".concat(h),t.width-10,t.height-20)),r.particles.forEach((function(e,n){e.update(),(e.y>t.height||e.y<-100||e.x>t.width+100||e.x<-100)&&(s&&p<=c?r.particles[n]=r.getParticle():r.removeParticleAt(n))})),h>0||p<c})),this.canvas=e;var i=this.canvas.getContext("2d");if(!i)throw new Error("Could not get canvas context");this.context=i,this.getOptions=n};function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(Object(n),!0).forEach((function(e){b(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function b(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var g={width:"undefined"!=typeof window?window.innerWidth:300,height:"undefined"!=typeof window?window.innerHeight:200,numberOfPieces:200,friction:.99,wind:0,gravity:.1,initialVelocityX:4,initialVelocityY:10,colors:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548"],opacity:1,debug:!1,tweenFunction:c.a.easeInOutQuad,tweenDuration:5e3,recycle:!0,run:!0},x=function(){function t(e,n){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),b(this,"canvas",void 0),b(this,"context",void 0),b(this,"_options",void 0),b(this,"generator",void 0),b(this,"rafId",void 0),b(this,"setOptionsWithDefaults",(function(t){var e={confettiSource:{x:0,y:0,w:r.canvas.width,h:0}};r._options=y(y(y({},e),g),t),Object.assign(r,t.confettiSource)})),b(this,"update",(function(){var t=r.options,e=t.run,n=t.onConfettiComplete,i=r.canvas,o=r.context;e&&(o.fillStyle="white",o.clearRect(0,0,i.width,i.height)),r.generator.animate()?r.rafId=requestAnimationFrame(r.update):(n&&"function"==typeof n&&r.generator.particlesGenerated>0&&n.call(r,r),r._options.run=!1)})),b(this,"reset",(function(){r.generator&&r.generator.particlesGenerated>0&&(r.generator.particlesGenerated=0,r.generator.particles=[],r.generator.lastNumberOfPieces=0)})),b(this,"stop",(function(){r.options={run:!1},r.rafId&&(cancelAnimationFrame(r.rafId),r.rafId=void 0)})),this.canvas=e;var i=this.canvas.getContext("2d");if(!i)throw new Error("Could not get canvas context");this.context=i,this.generator=new d(this.canvas,(function(){return r.options})),this.options=n,this.update()}var e,n,r;return e=t,(n=[{key:"options",get:function(){return this._options},set:function(t){var e=this._options&&this._options.run,n=this._options&&this._options.recycle;this.setOptionsWithDefaults(t),this.generator&&(Object.assign(this.generator,this.options.confettiSource),"boolean"==typeof t.recycle&&t.recycle&&!1===n&&(this.generator.lastNumberOfPieces=this.generator.particles.length)),"boolean"==typeof t.run&&t.run&&!1===e&&this.update()}}])&&m(e.prototype,n),r&&m(e,r),t}();function w(t){return function(t){if(Array.isArray(t))return Z(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||I(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(t){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function j(){return(j=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function _(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function P(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?_(Object(n),!0).forEach((function(e){T(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function S(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}return n}}(t,e)||I(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(t,e){if(t){if("string"==typeof t)return Z(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Z(t,e):void 0}}function Z(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function M(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function k(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function C(t,e){return(C=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function E(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=N(t);if(e){var i=N(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return D(this,n)}}function D(t,e){return!e||"object"!==O(e)&&"function"!=typeof e?F(t):e}function F(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function N(t){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function T(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var R=a.a.createRef(),A=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&C(t,e)}(o,t);var e,n,r,i=E(o);function o(t){var e;M(this,o);for(var n=arguments.length,r=new Array(n>1?n-1:0),s=1;s<n;s++)r[s-1]=arguments[s];return T(F(e=i.call.apply(i,[this,t].concat(r))),"canvas",a.a.createRef()),T(F(e),"confetti",void 0),e.canvas=t.canvasRef||R,e}return e=o,(n=[{key:"componentDidMount",value:function(){if(this.canvas.current){var t=B(this.props)[0];this.confetti=new x(this.canvas.current,t)}}},{key:"componentDidUpdate",value:function(){var t=B(this.props)[0];this.confetti&&(this.confetti.options=t)}},{key:"componentWillUnmount",value:function(){this.confetti&&this.confetti.stop(),this.confetti=void 0}},{key:"render",value:function(){var t=S(B(this.props),2),e=t[0],n=t[1],r=P({zIndex:2,position:"absolute",pointerEvents:"none",top:0,left:0,bottom:0,right:0},n.style);return a.a.createElement("canvas",j({width:e.width,height:e.height,ref:this.canvas},n,{style:r}))}}])&&k(e.prototype,n),r&&k(e,r),o}(o.Component);function B(t){var e={},n={},r=[].concat(w(Object.keys(g)),["confettiSource","drawShape","onConfettiComplete"]),i=["canvasRef"];for(var o in t){var a=t[o];r.includes(o)?e[o]=a:i.includes(o)?i[o]=a:n[o]=a}return[e,n,{}]}T(A,"defaultProps",P({},g)),T(A,"displayName","ReactConfetti");var q=a.a.forwardRef((function(t,e){return a.a.createElement(A,j({canvasRef:e},t))}));e.default=q}]).default)}}]);
//# sourceMappingURL=438.1fa2c06e.chunk.js.map