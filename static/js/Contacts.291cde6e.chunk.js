"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[315],{9743:function(n,e,t){t.r(e),t.d(e,{default:function(){return vn}});var r,i,a,o,s,c,l=t(8623),d=(t(5462),t(168)),p=t(6031),u=t(8836),x=p.ZP.div(r||(r=(0,d.Z)(["\n  position: relative;\n  width: 1400px;\n  height: 100%;\n  margin: 0 auto;\n"]))),h=p.ZP.div(i||(i=(0,d.Z)(["\n  position: absolute;\n  top: 150px;\n  left: 175px;\n  width: 1000px;\n  height: 500px;\n  display: flex;\n  border-radius: 5px;\n  margin: 0 auto;\n  padding: 20px 20px 20px 0;\n  background-image: url(",");\n  background-position: center;\n  background-size: cover;\n"])),u),g=p.ZP.div(a||(a=(0,d.Z)(["\n  width: 450px;\n  height: 500px;\n"]))),f=p.ZP.h1(o||(o=(0,d.Z)(["\n  font-size: 32px;\n  font-weight: 500;\n  line-height: 1.62;\n  letter-spacing: 0.03em;\n  text-transform: uppercase;\n  text-align: center;\n  color: #232323;\n  margin-top: 100px;\n"]))),m=p.ZP.h2(s||(s=(0,d.Z)(["\n  font-size: 30px;\n  font-weight: 500;\n  line-height: 1.62;\n  letter-spacing: 0.03em;\n  text-transform: uppercase;\n  text-align: center;\n  margin-bottom: 10px;\n  color: #232323;\n"]))),b=p.ZP.div(c||(c=(0,d.Z)(["\n  width: 600px;\n  height: 460px;\n  padding: 20px 20px;\n  border-radius: 5px;\n  background-color: rgba(255, 255, 255, 0.4738270308123249);\n"]))),Z=t(1413),w=t(5048),j=t(3649),v=t(3661),k=t(885),y=t(2791),C=t(5650);var P=t.p+"static/media/delete.b95cc962503956499147169cb7b129ba.svg";var z=t.p+"static/media/change.c462996cdc6b0c10e64063d8f99dd6ea.svg";var S=t.p+"static/media/send.a3e21461f722f522daa49881706d1b55.svg";var A,L,T,F,N,G,M,_,I,q,K,Y,B,D,J,R,$,E,H=t.p+"static/media/cancel.c893b922699d5860fe03c6c38abb637d.svg",O=p.ZP.li(A||(A=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 15px;\n  font-size: 16px;\n  font-weight: 400;\n  letter-spacing: 0.03em;\n  color: #232323;\n  padding: 0 10px 0 15px;\n  &:not(:last-child) {\n    margin-bottom: 10px;\n  }\n  &:nth-child(2n + 1) {\n    background-color: rgba(255, 255, 255, 0.3);\n    border-radius: 5px;\n  }\n"]))),Q=p.ZP.button(L||(L=(0,d.Z)(["\n  cursor: pointer;\n  border-color: transparent;\n  background-color: transparent;\n  outline: none;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  padding: 0;\n  &:hover,\n  &:focus {\n    transform: scale(1.1);\n  }\n"]))),U=p.ZP.button(T||(T=(0,d.Z)(["\n  cursor: pointer;\n  border-color: transparent;\n  background-color: transparent;\n  outline: none;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  margin-right: 20px;\n  margin-left: auto;\n  padding: 0;\n  &:hover,\n  &:focus {\n    transform: scale(1.1);\n  }\n"]))),V=p.ZP.button(F||(F=(0,d.Z)(["\n  cursor: pointer;\n  border-color: transparent;\n  background-color: transparent;\n  outline: none;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  margin-right: 25px;\n  margin-left: auto;\n  padding: 0;\n  &:hover,\n  &:focus {\n    transform: scale(1.1);\n  }\n"]))),W=p.ZP.div(N||(N=(0,d.Z)(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  padding-right: 5px;\n"]))),X=p.ZP.input(G||(G=(0,d.Z)(["\n  width: 160px;\n  height: 30px;\n  background-color: #ffffff;\n  border-color: transparent;\n  border-radius: 5px;\n  outline: none;\n  &:first-child {\n    margin-right: 20px;\n  }\n"]))),nn=p.ZP.div(M||(M=(0,d.Z)(["\n  font-size: 20px;\n  font-family: Georgia, 'Times New Roman', Times, serif;\n"]))),en=p.ZP.span(_||(_=(0,d.Z)(["\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n"]))),tn=t(3329),rn=function(n){var e=n.id,t=n.name,r=n.number,i=(0,y.useState)(!1),a=(0,k.Z)(i,2),o=a[0],s=a[1],c=(0,y.useState)(t),l=(0,k.Z)(c,2),d=l[0],p=l[1],u=(0,y.useState)(r),x=(0,k.Z)(u,2),h=x[0],g=x[1],f=(0,j.Nt)(),m=(0,k.Z)(f,2),b=m[0],Z=m[1].isLoading,w=(0,j.mG)(),v=(0,k.Z)(w,1)[0];return(0,tn.jsx)(O,{children:o?(0,tn.jsxs)(W,{children:[(0,tn.jsx)(X,{type:"text",value:d,onChange:function(n){return p(n.currentTarget.value)}}),(0,tn.jsx)(X,{type:"text",value:h,onChange:function(n){return g(n.currentTarget.value)}}),(0,tn.jsx)(V,{type:"button",onClick:function(){0!==d.length&&(v({id:e,name:d}),s(!1),0!==h.length&&(v({id:e,number:h}),s(!1),s(!1)))},children:(0,tn.jsx)("img",{src:S,alt:"send",width:"20"})}),(0,tn.jsx)(Q,{type:"button",onClick:function(){return s(!1)},children:(0,tn.jsx)("img",{src:H,alt:"cancel",width:"20"})})]}):(0,tn.jsxs)(tn.Fragment,{children:[(0,tn.jsxs)(nn,{children:[t,": ",(0,tn.jsx)(en,{children:r})]}),(0,tn.jsx)(U,{type:"button",onClick:function(){s(!0)},children:Z?(0,tn.jsx)(C.s5,{strokeColor:"#232323",width:"12"}):(0,tn.jsx)("img",{src:z,alt:"change",width:"20"})}),(0,tn.jsx)(Q,{onClick:function(){return b(e)},children:Z?(0,tn.jsx)(C.s5,{strokeColor:"#232323",width:"12"}):(0,tn.jsx)("img",{src:P,alt:"delete",width:"30"})})]})})},an=function(){return(0,tn.jsx)("div",{style:on,children:(0,tn.jsx)(C.s5,{strokeColor:"#eeecec"})})},on={display:"flex",justifyContent:"center",alignItems:"center"},sn=p.ZP.ul(I||(I=(0,d.Z)(["\n  height: 240px;\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  padding: 0px 20px;\n  overflow: auto;\n  &::-webkit-scrollbar-button {\n    background-image: url(&#39;&#39;);\n    background-repeat: no-repeat;\n    width: 5px;\n    height: 0px;\n  }\n\n  &::-webkit-scrollbar-thumb {\n    -webkit-border-radius: 0px;\n    border-radius: 3px;\n    background-color: #ababa9;\n  }\n\n  &::-webkit-resizer {\n    background-image: url(&#39;&#39;);\n    background-repeat: no-repeat;\n    width: 4px;\n    height: 0px;\n  }\n\n  &::-webkit-scrollbar {\n    width: 4px;\n  }\n"]))),cn=p.ZP.h2(q||(q=(0,d.Z)(["\n  font-size: 24px;\n  font-weight: 500;\n  line-height: 1.62;\n  letter-spacing: 0.03em;\n  text-align: center;\n  color: #232323;\n"]))),ln=function(){var n=(0,j.wY)(),e=n.data,t=n.error,r=n.isLoading,i=(0,w.v9)(v.zK),a=e&&e.filter((function(n){return n.name.toLowerCase().includes(i.toLowerCase())})),o=e&&!r&&a.length>0,s=t&&404===t.originalStatus;return(0,tn.jsxs)(sn,{children:[o&&a.map((function(n){return(0,tn.jsx)(rn,(0,Z.Z)({},n),n.id)})),r&&(0,tn.jsx)(an,{}),s&&(0,tn.jsx)(cn,{children:" Not Found!"})]})},dn=t(5984),pn=p.ZP.form(K||(K=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),un=p.ZP.label(Y||(Y=(0,d.Z)(["\n  width: 350px;\n  font-size: 16px;\n  font-weight: 400;\n  letter-spacing: 0.03em;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 5px;\n  cursor: pointer;\n  outline: none;\n  color: #232323;\n"]))),xn=p.ZP.input(B||(B=(0,d.Z)(["\n  width: 350px;\n  height: 25px;\n  border-color: transparent;\n  border-radius: 3px;\n  margin-bottom: 20px;\n  outline: none;\n  padding: 5px;\n"]))),hn=p.ZP.button(D||(D=(0,d.Z)(["\n  width: 362px;\n  height: 39px;\n  font-size: 16px;\n  font-weight: 500;\n  letter-spacing: 0.03em;\n  text-transform: uppercase;\n  background-color: #232323;\n  color: #ffffff;\n  border-color: transparent;\n  border-radius: 3px;\n  cursor: pointer;\n  outline: none;\n  &:hover,\n  &:focus {\n    background-color: #ffffff;\n    color: #232323;\n    border-color: transparent;\n  }\n"]))),gn=function(){var n=(0,y.useState)(""),e=(0,k.Z)(n,2),t=e[0],r=e[1],i=(0,y.useState)(""),a=(0,k.Z)(i,2),o=a[0],s=a[1],c=(0,j.wY)().data,d=(0,j.Lr)(),p=(0,k.Z)(d,1)[0],u=(0,dn.x0)(4),x=(0,dn.x0)(4),h=function(n){var e=n.target,t=e.name,i=e.value;switch(t){case"name":r(i);break;case"number":s(i);break;default:return}},g=function(){r(""),s("")};return(0,tn.jsxs)(pn,{onSubmit:function(n){n.preventDefault();var e,r={id:(0,dn.x0)(4),name:t,number:o};e=r,c.map((function(n){return n.name.toLowerCase()})).includes(e.name.toLowerCase())?l.Am.error("".concat(e.name," is already in contacts.")):(p(e),g(),l.Am.success("Contact, ".concat(e.name," successfully added")))},children:[(0,tn.jsx)(un,{htmlFor:x,children:"Name"}),(0,tn.jsx)(xn,{id:x,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",value:t,onChange:h,required:!0}),(0,tn.jsx)(un,{htmlFor:u,children:"Number"}),(0,tn.jsx)(xn,{id:u,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",value:o,onChange:h,required:!0}),(0,tn.jsx)(hn,{type:"submit",children:"Add Contact"})]})},fn=p.ZP.div(J||(J=(0,d.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 30px;\n  z-index: 2;\n"]))),mn=p.ZP.label(R||(R=(0,d.Z)(["\n  font-size: 18px;\n  font-weight: 400;\n  letter-spacing: 0.03em;\n  text-align: center;\n  margin-bottom: 20px;\n  color: #232323;\n"]))),bn=p.ZP.input($||($=(0,d.Z)(["\n  width: 450px;\n  height: 20px;\n  outline: none;\n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: 0.03em;\n  text-transform: uppercase;\n  border-color: transparent;\n  border-radius: 3px;\n  padding: 5px 5px 5px 30px;\n"]))),Zn=p.ZP.img(E||(E=(0,d.Z)(["\n  position: absolute;\n  top: 51px;\n  left: 30px;\n"])));var wn=t.p+"static/media/search.9c1dc03549b541e7d43c968f3efd4fab.svg",jn=function(){var n=(0,w.I0)(),e=(0,w.v9)(v.zK);return(0,tn.jsxs)(fn,{children:[(0,tn.jsx)(mn,{name:"filter",children:"Find contacts by name"}),(0,tn.jsx)(bn,{type:"text",name:"filter",value:e,onChange:function(e){n((0,v.M6)(e.currentTarget.value.trim()))}}),(0,tn.jsx)(Zn,{src:wn,alt:"search",width:"16"})]})},vn=function(){return(0,tn.jsxs)(x,{children:[(0,tn.jsxs)(h,{children:[(0,tn.jsxs)(g,{children:[(0,tn.jsx)(f,{children:"Phonebook"}),(0,tn.jsx)(gn,{})]}),(0,tn.jsxs)(b,{children:[(0,tn.jsx)(m,{children:"Contacts"}),(0,tn.jsx)(jn,{}),(0,tn.jsx)(ln,{})]})]}),(0,tn.jsx)(l.Ix,{autoClose:3e3})]})}},8836:function(n,e,t){n.exports=t.p+"static/media/background.e17606760d8f53f1d92e.jpg"}}]);
//# sourceMappingURL=Contacts.291cde6e.chunk.js.map