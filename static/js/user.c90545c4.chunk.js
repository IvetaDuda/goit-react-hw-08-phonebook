"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[378],{725:function(n,e,t){t.r(e),t.d(e,{default:function(){return ke}});var r=t(5048),i=t(7017),o=t(5985),a=(t(5462),t(885)),s=t(2791);var d,p,x,c,l,h,u,f,g,m,b,w,Z,v,j,y,k,P,z,C,Y,M,B,D,S,I,A,F,O,L,_,E,R,H,T,N,U,J,q,X,$,K,W,G,Q,V,nn=function(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=(0,s.useState)(n),t=(0,a.Z)(e,2),r=t[0],i=t[1],o=function(){return i(!0)},d=function(){return i(!1)},p=function(){return i((function(n){return!n}))};return{isModalOpen:r,openModal:o,closeModal:d,toggleModal:p}},en=t(4599),tn=t(9354),rn=t(168),on=t(7691),an=on.ZP.div(d||(d=(0,rn.Z)(["\n  width: 250px;\n  height: 300px;\n  position: relative;\n  display: block;\n  overflow: hidden;\n  border-radius: 10px;\n  cursor: pointer;\n  box-shadow: 13px 13px 5px -4px rgba(0, 0, 0, 0.39);\n  @media screen and (min-width: 768px) {\n    width: 270px;\n    height: 320px;\n  }\n  @media screen and (min-width: 1400px) {\n    width: 350px;\n    height: 420px;\n  }\n"]))),sn=on.ZP.span(p||(p=(0,rn.Z)(["\n  width: 500px;\n  height: 200px;\n  background: #fff;\n  display: block;\n  position: absolute;\n  bottom: -140px;\n  left: -110px;\n  transform: rotate(30deg);\n  z-index: 5;\n  opacity: 0.9;\n  transition: all 0.3s ease-in-out;\n  &::before {\n    content: '';\n    display: block;\n    width: 100%;\n    height: 100%;\n    position: relative;\n    background: #c96106;\n    transform: translateY(10px);\n    z-index: 2;\n    transition: all 0.3s ease-in-out;\n    transition-delay: 0.1s;\n  }\n  @media screen and (min-width: 768px) {\n    width: 400px;\n    height: 200px;\n    background: #fff;\n    display: block;\n    position: absolute;\n    bottom: -110px;\n    left: -90px;\n    transform: rotate(30deg);\n    z-index: 5;\n    opacity: 0.9;\n    transition: all 0.3s ease-in-out;\n    &::before {\n      content: '';\n      display: block;\n      width: 100%;\n      height: 100%;\n      position: relative;\n      /* background: #f07306; */\n      background: #c96106;\n      transform: translateY(10px);\n      z-index: 2;\n      transition: all 0.3s ease-in-out;\n      transition-delay: 0.1s;\n    }\n  }\n\n  @media screen and (min-width: 1400px) {\n    width: 500px;\n    height: 200px;\n    top: 175%;\n    left: -85px;\n    &::before {\n      background: #c96106;\n      transform: translateY(200px);\n    }\n    ",":hover & {\n      top: 330px;\n      &::before {\n        transform: translateY(15px);\n      }\n    }\n  }\n"])),an),dn=on.ZP.span(x||(x=(0,rn.Z)(["\n  display: none;\n  @media screen and (min-width: 1400px) {\n    border-top: 220px solid transparent;\n    border-bottom: 190px solid transparent;\n    border-right: 288px solid #fff;\n    opacity: 0.9;\n    position: absolute;\n    display: block;\n    top: 0;\n    right: -100%;\n    transition: all 0.3s ease-in-out;\n    z-index: 2;\n    &::before {\n      border-top: 220px solid transparent;\n      border-bottom: 190px solid transparent;\n      border-right: 288px solid #64b7b2;\n      /* border-right: 288px solid #57ccfd; */\n      position: absolute;\n      content: '';\n      display: block;\n      top: -220px;\n      right: -612px;\n      transition: all 0.3s ease-in-out;\n      transition-delay: 0.2s;\n    }\n    ",":hover & {\n      right: -30%;\n      &::before {\n        right: -312px;\n      }\n    }\n  }\n"])),an),pn=on.ZP.img(c||(c=(0,rn.Z)(["\n  position: absolute;\n  top: 50%;\n  transform: translate(0, -50%);\n  z-index: 1;\n  width: 100%;\n  border-radius: 10px;\n"]))),xn=on.ZP.div(l||(l=(0,rn.Z)(["\n  position: absolute;\n  top: 50%;\n  transform: translate(0, -50%);\n  width: 100%;\n  height: 100%;\n  background: radial-gradient(\n    circle,\n    rgba(255, 255, 255, 1) 0%,\n    rgba(241, 237, 222, 0) 60%\n  );\n  box-shadow: inset 0px 0px 92px -27px rgba(133, 119, 72, 1);\n"]))),cn=on.ZP.div(h||(h=(0,rn.Z)(["\n  position: relative;\n  transform: rotate(-30deg);\n  z-index: 10;\n"]))),ln=on.ZP.div(u||(u=(0,rn.Z)(["\n  position: absolute;\n  bottom: 150px;\n  left: 180px;\n  @media screen and (min-width: 768px) {\n    bottom: 120px;\n    left: 160px;\n  }\n"]))),hn=on.ZP.h1(f||(f=(0,rn.Z)(["\n  color: #ffffff;\n  font-size: 24px;\n  @media screen and (min-width: 768px) {\n    font-size: 26px;\n  }\n  @media screen and (min-width: 1400px) {\n    font-size: 40px;\n  }\n"]))),un=on.ZP.button(g||(g=(0,rn.Z)(["\n  cursor: pointer;\n  background-color: transparent;\n  border: none;\n"]))),fn=on.ZP.svg(m||(m=(0,rn.Z)(["\n  width: 25px;\n  height: 25px;\n  margin-right: 5px;\n  fill: #ffffff;\n  margin: 0;\n  @media screen and (min-width: 768px) {\n    width: 25px;\n    height: 25px;\n  }\n  @media screen and (min-width: 1400px) {\n    width: 40px;\n    height: 40px;\n  }\n"]))),gn=t(4164),mn=on.ZP.div(b||(b=(0,rn.Z)(["\n  position: fixed;\n  top: 0rem;\n  left: 0rem;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  /* background-color: rgba(0, 0, 0, 0.15); */\n  background-color: rgba(0, 0, 0, 0.643);\n  overflow-y: scroll;\n  z-index: 100;\n"]))),bn=(on.ZP.div(w||(w=(0,rn.Z)(["\n  background-color: rgba(0, 0, 0, 0.643);\n"]))),t(3329)),wn=document.getElementById("modal"),Zn=function(n){return(0,s.useEffect)((function(){var e=function(e){"Escape"===e.code&&n.onCloseModal()};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}}),[n]),(0,gn.createPortal)((0,bn.jsx)(mn,{onClick:function(e){e.currentTarget===e.target&&n.onCloseModal()},children:n.children}),wn)},vn=t(5861),jn=t(4687),yn=t.n(jn),kn=on.ZP.div(Z||(Z=(0,rn.Z)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 300px;\n  height: 380px;\n  padding: 20px;\n  box-shadow: 13px 13px 5px -4px rgba(0, 0, 0, 0.39);\n  background-color: ",";\n  border-radius: 10px;\n  @media screen and (min-width: 1400px) {\n    width: 400px;\n    height: 500px;\n  }\n"])),(function(n){return n.theme.avatarModalBackround})),Pn=on.ZP.button(v||(v=(0,rn.Z)(["\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  width: 40px;\n  height: 40px;\n  background-color: transparent;\n  border-radius: 50%;\n  border: none;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    background-color: rgba(255, 255, 255, 0.3);\n  }\n"]))),zn=on.ZP.svg(j||(j=(0,rn.Z)(["\n  width: 20px;\n  height: 20px;\n  fill: ",";\n  transform: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  ",":hover & {\n    fill: ",";\n  }\n"])),(function(n){return n.theme.avatarModalCancleSvg}),Pn,(function(n){return n.theme.avatarModalCancleSvgHover})),Cn=on.ZP.div(y||(y=(0,rn.Z)(["\n  position: relative;\n  width: 250px;\n  height: 320px;\n  text-align: center;\n  background: ",";\n  border: 2px solid #ffffff;\n\n  box-shadow: ",";\n  /* border: ","; */\n  border-radius: 10px;\n  overflow: hidden;\n  cursor: pointer;\n  transform: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  @media screen and (min-width: 1400px) {\n    width: 350px;\n    height: 420px;\n  }\n"])),(function(n){return n.theme.avatarModalBackroundBox}),(function(n){return n.theme.AvatarContainerShadow}),(function(n){return n.theme.AvatarContainerBorder})),Yn=on.ZP.div(k||(k=(0,rn.Z)(["\n  width: 100%;\n  height: 100%;\n  transform: filter 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  ",":hover & {\n    filter: blur(5px);\n  }\n"])),Cn),Mn=on.ZP.img(P||(P=(0,rn.Z)(["\n  position: absolute;\n  top: 50%;\n  transform: translate(0, -50%);\n  width: 100%;\n  border-radius: 10px;\n"]))),Bn=on.ZP.div(z||(z=(0,rn.Z)(["\n  display: none;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  transform: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  ",":hover & {\n    background-color: ",";\n    display: block;\n  }\n"])),Cn,(function(n){return n.theme.avatarModalBackroundHover})),Dn=on.ZP.input(C||(C=(0,rn.Z)(["\n  max-width: 0;\n  opacity: 0;\n  visibility: hidden;\n  position: absolute;\n"]))),Sn=on.ZP.label(Y||(Y=(0,rn.Z)(["\n  display: block;\n  width: 100%;\n  height: 100%;\n  border-color: transparent;\n  outline: none;\n  cursor: pointer;\n"]))),In=on.ZP.svg(M||(M=(0,rn.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 42%;\n  transform: translate(0, -50%);\n  width: 40px;\n  height: 40px;\n  fill: #ffffff;\n  margin: 0;\n  z-index: 1;\n  @media screen and (min-width: 768px) {\n    width: 40px;\n    height: 40px;\n    fill: #ffffff;\n  }\n"]))),An=on.ZP.h2(B||(B=(0,rn.Z)(["\n  font-weight: 400;\n  font-size: 24px;\n  color: #ffffff;\n"]))),Fn=on.ZP.button(D||(D=(0,rn.Z)(["\n  position: absolute;\n  bottom: 10px;\n  right: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  width: 40px;\n  height: 40px;\n  background-color: transparent;\n  border-radius: 50%;\n  border: 2px solid green;\n  transform: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    background-color: green;\n  }\n"]))),On=on.ZP.svg(S||(S=(0,rn.Z)(["\n  width: 30px;\n  height: 30px;\n  margin-right: 5px;\n  fill: green;\n  margin: 0;\n  width: 30px;\n  height: 30px;\n  transform: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  ",":hover & {\n    fill: #ffffff;\n  }\n"])),Fn),Ln=function(n){var e=n.onCloseModal,t=n.onAvatarImg,r=(0,s.useState)(t),o=(0,a.Z)(r,2),d=o[0],p=o[1],x=(0,s.useState)(null),c=(0,a.Z)(x,2),l=c[0],h=c[1],u=(0,s.useState)(!1),f=(0,a.Z)(u,2),g=f[0],m=f[1],b=(0,i.lq)(),w=(0,a.Z)(b,1)[0],Z=function(){var n=(0,vn.Z)(yn().mark((function n(e){var t,r;return yn().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:m(!0),t=e.target.files[0],p(URL.createObjectURL(t)),(r=new FormData).append("avatar",t),h(r);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=(0,vn.Z)(yn().mark((function n(){return yn().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:w(l),e();case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,bn.jsxs)(kn,{children:[(0,bn.jsx)(Pn,{onClick:e,children:(0,bn.jsx)(zn,{children:(0,bn.jsx)("use",{href:tn.Z+"#icon-cancel"})})}),(0,bn.jsxs)(Cn,{children:[(0,bn.jsx)(Yn,{children:(0,bn.jsx)(Mn,{src:d,alt:"avatar"})}),(0,bn.jsxs)(Bn,{children:[(0,bn.jsx)(Dn,{type:"file",id:"input_file",accept:"image/*",name:"avatar",onChange:function(n){return Z(n)}}),(0,bn.jsx)(Sn,{htmlFor:"input_file",children:(0,bn.jsx)(In,{children:(0,bn.jsx)("use",{href:tn.Z+"#icon-image"})})}),(0,bn.jsx)(An,{children:"Download image"})]})]}),g&&(0,bn.jsx)(Fn,{onClick:v,children:(0,bn.jsx)(On,{children:(0,bn.jsx)("use",{href:tn.Z+"#icon-check_mark"})})})]})},_n=function(){var n=nn(),e=n.isModalOpen,t=n.closeModal,o=n.toggleModal,a=(0,r.v9)((function(n){return n.users})),s=a.name,d=a.token,p=(0,i.XC)(d,{skip:!d}).data,x=p.avatarURL?"https://phonebook-server-h3zp.onrender.com/".concat(p.avatarURL):en;return(0,bn.jsxs)(an,{children:[(0,bn.jsx)(pn,{src:x,alt:"avatar"}),(0,bn.jsx)(xn,{avatarImg:x}),(0,bn.jsx)(sn,{children:(0,bn.jsx)(cn,{children:(0,bn.jsxs)(ln,{children:[(0,bn.jsx)(un,{type:"button",onClick:o,children:(0,bn.jsx)(fn,{children:(0,bn.jsx)("use",{href:tn.Z+"#icon-camera"})})}),(0,bn.jsx)(hn,{children:s})]})})}),(0,bn.jsx)(dn,{}),e&&(0,bn.jsx)(Zn,{onCloseModal:t,children:(0,bn.jsx)(Ln,{onCloseModal:t,onAvatarImg:x})})]})},En=on.ZP.div(I||(I=(0,rn.Z)(["\n  max-width: 600px;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  margin: 0 auto;\n"]))),Rn=on.ZP.h2(A||(A=(0,rn.Z)(["\n  font-weight: 400;\n  font-size: 32px;\n  color: ",";\n"])),(function(n){return n.theme.userConfirmation})),Hn=function(){return(0,bn.jsx)(En,{children:(0,bn.jsx)(Rn,{children:"You have received a letter confirming your registration. After that, refresh the page and Log In."})})},Tn=on.ZP.li(F||(F=(0,rn.Z)(["\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.33;\n  letter-spacing: 0.04em;\n  color: #212121;\n  /* display: grid; */\n  /* grid-template-columns: 80px 230px 30px; */\n  display: flex;\n  justify-content: space-between;\n\n  padding: 5px 10px;\n  &:nth-child(2n + 1) {\n    background-color: rgba(255, 255, 255, 0.4);\n    border-radius: 5px;\n    padding: 5px 10px;\n  }\n  &:not(:last-child) {\n    margin-bottom: 5px;\n  }\n  @media screen and (min-width: 768px) {\n    display: grid;\n    grid-template-columns: 80px 200px 30px;\n  }\n  @media screen and (min-width: 1400px) {\n    grid-template-columns: 80px 230px 30px;\n    &:not(:last-child) {\n      margin-bottom: 15px;\n    }\n  }\n"]))),Nn=on.ZP.p(O||(O=(0,rn.Z)(["\n  margin-right: 10px;\n  &::first-letter {\n    text-transform: uppercase;\n  }\n  @media screen and (min-width: 768px) {\n    margin: 0;\n  }\n"]))),Un=on.ZP.span(L||(L=(0,rn.Z)(["\n  /* word-wrap: break-word; */\n  text-overflow: ellipsis;\n  white-space: wrap;\n  overflow: hidden;\n"]))),Jn=on.ZP.button(_||(_=(0,rn.Z)(["\n  cursor: pointer;\n  background-color: transparent;\n  border: none;\n  z-index: 20;\n"]))),qn=on.ZP.svg(E||(E=(0,rn.Z)(["\n  width: 20px;\n  height: 20px;\n  fill: #2b2b2f;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    fill 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    fill: #c96106;\n    transform: scale(1.1);\n  }\n"]))),Xn=on.ZP.input(R||(R=(0,rn.Z)(["\n  width: 200px;\n  padding: 2px 5px;\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 1.33;\n  letter-spacing: 0.04em;\n  color: #212121;\n  border-color: transparent;\n  border-radius: 5px;\n  outline: none;\n  @media screen and (min-width: 768px) {\n    width: 170px;\n  }\n  @media screen and (min-width: 1400px) {\n    width: 200px;\n  }\n"]))),$n=function(n){var e=n.userPhone,t=(0,s.useState)(""),r=(0,a.Z)(t,2),d=r[0],p=r[1],x=(0,s.useState)(!1),c=(0,a.Z)(x,2),l=c[0],h=c[1],u=(0,i.Bg)(),f=(0,a.Z)(u,1)[0];return(0,bn.jsxs)(Tn,{children:[(0,bn.jsx)(Nn,{children:"Phone:"}),l?(0,bn.jsxs)(bn.Fragment,{children:[(0,bn.jsx)(Xn,{type:"text",min:"13",pattern:"/^\\+380\\d{9}$/",value:d,name:e,onChange:function(n){p(""),n.currentTarget.value!==d&&p(n.currentTarget.value)}}),(0,bn.jsx)(Jn,{type:"button",onClick:function(){0!==d.length&&e!==d&&"+380000000000"!==d?(f({userPhone:d}).unwrap().then((function(n){return o.Am.success("Your phone number has been successfully changed")})).catch((function(n){return o.Am.error("Incorrect phone number format")})),h(!1)):h(!1)},children:(0,bn.jsx)(qn,{children:(0,bn.jsx)("use",{href:tn.Z+"#icon-send"})})})]}):(0,bn.jsxs)(bn.Fragment,{children:[e?(0,bn.jsx)("span",{children:e}):(0,bn.jsx)("span",{children:"+380000000000"}),(0,bn.jsx)(Jn,{type:"button",onClick:function(){return h(!0),p(e||"+380000000000")},children:(0,bn.jsx)(qn,{children:(0,bn.jsx)("use",{href:tn.Z+"#icon-change"})})})]})]})},Kn=t(4942),Wn=function(n){var e=n.value,t=n.text,r=(0,s.useState)(e),d=(0,a.Z)(r,2),p=d[0],x=d[1],c=(0,s.useState)(!1),l=(0,a.Z)(c,2),h=l[0],u=l[1],f=(0,i.Bg)(),g=(0,a.Z)(f,1)[0];return(0,bn.jsxs)(Tn,{children:[(0,bn.jsxs)(Nn,{children:[t,":"]}),h?(0,bn.jsxs)(bn.Fragment,{children:[(0,bn.jsx)(Xn,{type:"text",value:p,name:p,onChange:function(n){n.currentTarget.value!==p&&x(n.currentTarget.value)}}),(0,bn.jsx)(Jn,{type:"button",onClick:function(){0!==p.length&&e!==p?(g((0,Kn.Z)({},t,p)).unwrap().then((function(n){return o.Am.success("Your ".concat(t," has been successfully changed"))})).catch((function(n){return o.Am.error("Invalid value")})),u(!1)):u(!1)},children:(0,bn.jsx)(qn,{children:(0,bn.jsx)("use",{href:tn.Z+"#icon-send"})})})]}):(0,bn.jsxs)(bn.Fragment,{children:[(0,bn.jsx)(Un,{children:e}),(0,bn.jsx)(Jn,{type:"button",onClick:function(){return u(!0)},children:(0,bn.jsx)(qn,{children:(0,bn.jsx)("use",{href:tn.Z+"#icon-change"})})})]})]})},Gn=on.ZP.div(H||(H=(0,rn.Z)(["\n  width: 100%;\n  height: 340px;\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.21);\n  @media screen and (min-width: 768px) {\n    position: absolute;\n    top: 30px;\n    width: 350px;\n    right: 30px;\n    height: 260px;\n  }\n  @media screen and (min-width: 1400px) {\n    position: absolute;\n    top: 40px;\n    right: 40px;\n    width: 380px;\n    height: 340px;\n    border-radius: 10px;\n    background: rgba(255, 255, 255, 0.21);\n  }\n"]))),Qn=on.ZP.ul(T||(T=(0,rn.Z)(["\n  list-style: none;\n  padding: 20px 10px;\n"]))),Vn=t(1413),ne=t(7892),ee=t.n(ne),te=t(900),re=t(6571),ie=t(4554),oe=t(6417),ae=t(5763),se=on.ZP.input(N||(N=(0,rn.Z)(["\n  width: 160px;\n  padding: 2px 5px;\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 1.33;\n  letter-spacing: 0.04em;\n  color: #212121;\n  border-color: transparent;\n  border-radius: 5px;\n  outline: none;\n\n  @media screen and (min-width: 768px) {\n    width: 140px;\n  }\n  @media screen and (min-width: 1400px) {\n    width: 160px;\n  }\n"]))),de=function(n){var e=n.onHandleDate,t=n.onBirthday,r=(0,s.useState)(ee()(t,"DD.MM.YYYY")),i=(0,a.Z)(r,2),o=i[0],d=i[1],p=(0,s.useState)(!1),x=(0,a.Z)(p,2),c=x[0],l=x[1];return(0,s.useEffect)((function(){document.querySelector("body").scrollWidth>767&&l(!0)}),[l]),(0,bn.jsx)(re._,{dateAdapter:te.y,children:c?(0,bn.jsx)(ae.$,{value:o,minDate:ee()("1922-01-01"),maxDate:ee()(Date.now()),inputFormat:"DD.MM.YYYY",onChange:function(n){null!==n&&(d(n),e(JSON.stringify(n.format("DD.MM.YYYY"))))},renderInput:function(n){var e=n.inputRef,t=n.inputProps,r=n.InputProps,i=n.params;return(0,bn.jsxs)(ie.Z,{sx:{display:"flex",alignItems:"center",zIndex:"20"},children:[(0,bn.jsx)(se,(0,Vn.Z)((0,Vn.Z)({},i),{},{type:"data",ref:e},t)),null===r||void 0===r?void 0:r.endAdornment]})}}):(0,bn.jsx)(oe.O,{value:o,inputFormat:"DD.MM.YYYY",maxDate:ee()(Date.now()),onChange:function(n){d(n),null!==n&&e(JSON.stringify(n.format("DD.MM.YYYY")))},renderInput:function(n){var e=n.inputRef,t=n.inputProps,r=n.InputProps,i=n.params;return(0,bn.jsxs)(ie.Z,{sx:{display:"flex",alignItems:"center",zIndex:"20"},children:[(0,bn.jsx)(se,(0,Vn.Z)((0,Vn.Z)({},i),{},{type:"data",ref:e},t)),null===r||void 0===r?void 0:r.endAdornment]})}})})},pe=function(n){var e=n.userBirthday,t=(0,s.useState)(""),r=(0,a.Z)(t,2),d=r[0],p=r[1],x=(0,s.useState)(!1),c=(0,a.Z)(x,2),l=c[0],h=c[1],u=(0,i.Bg)(),f=(0,a.Z)(u,1)[0];return(0,bn.jsxs)(Tn,{children:[(0,bn.jsx)(Nn,{children:"Birthday:"}),l?(0,bn.jsxs)(bn.Fragment,{children:[(0,bn.jsx)(de,{onHandleDate:function(n){p(n)},onBirthday:e}),(0,bn.jsx)(Jn,{type:"button",onClick:function(){if(0!==d.length&&e!==d){var n=JSON.parse(d);f({userBirthday:n}).unwrap().then((function(n){return o.Am.success("Your birthday has been successfully changed")})).catch((function(n){return o.Am.error("Incorrect birthday format")})),h(!1)}else h(!1)},children:(0,bn.jsx)(qn,{children:(0,bn.jsx)("use",{href:tn.Z+"#icon-send"})})})]}):(0,bn.jsxs)(bn.Fragment,{children:[e?(0,bn.jsx)("span",{children:e}):(0,bn.jsx)("span",{children:"00.00.0000"}),(0,bn.jsx)(Jn,{type:"button",onClick:function(){return h(!0)},children:(0,bn.jsx)(qn,{children:(0,bn.jsx)("use",{href:tn.Z+"#icon-change"})})})]})]})},xe=function(n){var e=n.name,t=n.email,r=n.userPhone,i=n.userBirthday;return(0,bn.jsx)(Gn,{children:(0,bn.jsxs)(Qn,{children:[(0,bn.jsx)(Wn,{value:e,text:"name"}),(0,bn.jsx)($n,{userPhone:r}),(0,bn.jsx)(Wn,{value:t,text:"email"}),(0,bn.jsx)(pe,{userBirthday:i})]})})},ce=t(3504),le=(0,on.ZP)(ce.OL)(U||(U=(0,rn.Z)(["\n  position: absolute;\n  bottom: -20px;\n  right: 10px;\n  z-index: 3;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  text-decoration: none;\n  @media screen and (min-width: 768px) {\n    bottom: 5px;\n    right: 10px;\n  }\n  @media screen and (min-width: 1400px) {\n    bottom: 10px;\n    right: 20px;\n  }\n"]))),he=on.ZP.h2(J||(J=(0,rn.Z)(["\n  color: #62b3ae;\n  font-weight: 400;\n  font-size: 24px;\n  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.72);\n  @media screen and (min-width: 768px) {\n    font-size: 18px;\n  }\n  @media screen and (min-width: 1400px) {\n    font-size: 24px;\n  }\n"]))),ue=on.ZP.svg(q||(q=(0,rn.Z)(["\n  width: 30px;\n  height: 25px;\n  fill: #62b3ae;\n  animation: arrow 2000ms infinite;\n  @keyframes arrow {\n    50% {\n      margin-right: 10px;\n    }\n  }\n"]))),fe=function(){return(0,bn.jsxs)(le,{to:"/contacts",children:[(0,bn.jsx)(he,{children:"PHONEBOOK"}),(0,bn.jsx)(ue,{children:(0,bn.jsx)("use",{href:tn.Z+"#icon-arrow-right"})})]})},ge=t(8836),me=on.ZP.div(X||(X=(0,rn.Z)(["\n  position: relative;\n  height: 100%;\n  padding: 0px 15px;\n\n  @media screen and (min-width: 768px) {\n    padding: 0;\n    align-items: center;\n  }\n"]))),be=on.ZP.div($||($=(0,rn.Z)(["\n  width: 100%;\n  margin: 0 auto;\n  position: relative;\n  padding-top: 110px;\n"]))),we=on.ZP.div(K||(K=(0,rn.Z)(["\n  margin-bottom: 40px;\n  display: flex;\n  justify-content: center;\n  @media screen and (min-width: 768px) {\n    position: absolute;\n    top: -30px;\n    left: -30px;\n    z-index: 1;\n  }\n  @media screen and (min-width: 1400px) {\n    position: absolute;\n    top: -40px;\n    left: -40px;\n    z-index: 1;\n  }\n"]))),Ze=on.ZP.div(W||(W=(0,rn.Z)(["\n  height: 100%;\n  position: relative;\n  width: 100%;\n  box-shadow: 13px 13px 5px -4px rgba(0, 0, 0, 0.39);\n  background-image: url(",");\n  background-color: #ece5ce;\n  padding: 30px 0;\n\n  background-position: center;\n  background-size: cover;\n  border-radius: 10px;\n  @media screen and (min-width: 768px) {\n    position: absolute;\n    top: 180px;\n    left: 80px;\n    width: 640px;\n    height: 320px;\n    padding: 0;\n  }\n  @media screen and (min-width: 1400px) {\n    position: absolute;\n    top: 180px;\n    left: 320px;\n    width: 780px;\n    height: 420px;\n  }\n"])),ge),ve=on.ZP.div(G||(G=(0,rn.Z)(["\n  position: relative;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  padding: 0 10px;\n"]))),je=on.ZP.div(Q||(Q=(0,rn.Z)(["\n  position: absolute;\n  bottom: -40px;\n  right: -11px;\n  width: 0;\n  height: 0;\n  border-bottom: 190px solid #fff7e6;\n  border-left: 355px solid transparent;\n  /* border-bottom-right-radius: 9px; */\n  box-shadow: 13px 13px 5px -4px rgba(0, 0, 0, 0.39);\n\n  z-index: 2;\n  &::after {\n    position: absolute;\n    bottom: -191px;\n    right: -1px;\n    content: '';\n    width: 0;\n    height: 0;\n    border-bottom: 178px solid #001a1a;\n    border-left: 335px solid transparent;\n    /* border-bottom-right-radius: 8px; */\n  }\n  @media screen and (min-width: 768px) {\n    position: absolute;\n    bottom: -10px;\n    right: -10px;\n    width: 0;\n    height: 0;\n    border-bottom: 150px solid #fff7e6;\n    border-left: 305px solid transparent;\n    /* border-bottom-right-radius: 9px; */\n    box-shadow: 13px 13px 5px -4px rgba(0, 0, 0, 0.39);\n\n    z-index: 2;\n    &::after {\n      position: absolute;\n      bottom: -151px;\n      right: -1px;\n      content: '';\n      width: 0;\n      height: 0;\n      border-bottom: 135px solid #001a1a;\n      border-left: 278px solid transparent;\n      /* border-bottom-right-radius: 8px; */\n    }\n  }\n  @media screen and (min-width: 1400px) {\n    position: absolute;\n    bottom: -10px;\n    right: -10px;\n    width: 0;\n    height: 0;\n    border-bottom: 190px solid #fff7e6;\n    border-left: 355px solid transparent;\n    /* border-bottom-right-radius: 9px; */\n    box-shadow: 13px 13px 5px -4px rgba(0, 0, 0, 0.39);\n\n    z-index: 2;\n    &::after {\n      content: '';\n      display: block;\n      position: absolute;\n      bottom: -191px;\n      right: -1px;\n      width: 0;\n      height: 0;\n      border-bottom: 178px solid #001a1a;\n      border-left: 335px solid transparent;\n      /* border-bottom-right-radius: 8px; */\n    }\n  }\n"]))),ye=on.ZP.div(V||(V=(0,rn.Z)(["\n  position: absolute;\n  bottom: -40px;\n  right: -10px;\n  width: 354px;\n  height: 189px;\n  background-color: #fff7e6;\n  border-bottom-right-radius: 9px;\n  z-index: -1;\n  @media screen and (min-width: 768px) {\n    bottom: -10px;\n    right: -10px;\n    width: 304px;\n    height: 149px;\n  }\n  @media screen and (min-width: 1400px) {\n    width: 354px;\n    height: 189px;\n  }\n"]))),ke=function(){var n=(0,r.v9)((function(n){return n.users})),e=n.name,t=n.email,a=n.token,s=n.userPhone,d=n.userBirthday,p=(0,i.XC)(a,{skip:!a}),x=p.data,c=p.isFetching;return(0,bn.jsxs)(me,{children:[!a&&(0,bn.jsx)(Hn,{}),x&&!c&&(0,bn.jsx)(be,{children:(0,bn.jsxs)(Ze,{children:[(0,bn.jsx)(we,{children:(0,bn.jsx)(_n,{})}),(0,bn.jsxs)(ve,{children:[(0,bn.jsx)(xe,{name:e,email:t,userPhone:s,userBirthday:d}),(0,bn.jsx)(fe,{}),(0,bn.jsx)(je,{}),(0,bn.jsx)(ye,{})]})]})}),(0,bn.jsx)(o.Ix,{autoClose:3e3,theme:"dark"})]})}},8836:function(n,e,t){n.exports=t.p+"static/media/background.e17606760d8f53f1d92e.jpg"}}]);
//# sourceMappingURL=user.c90545c4.chunk.js.map