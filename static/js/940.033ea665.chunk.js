"use strict";(self.webpackChunktaskpro=self.webpackChunktaskpro||[]).push([[940],{1940:function(n,e,r){r.r(e),r.d(e,{default:function(){return en}});var t,i,a,o,s,l,c,d,p,x,m,h,u=r(7689),g=r(5861),f=r(9439),w=r(4687),v=r.n(w),j=r(2791),b=r(9434),Z=r(5705),y=r(5206),k=r(5822),N=r(6727),q=N.Ry().shape({name:N.Z_().required("Name is required"),email:N.Z_().min(6,"Email must be at least 6 characters").email("Invalid email").required("Email is required"),password:N.Z_().min(6,"Password must be at least 6 characters").required("Password is required")}),z=N.Ry().shape({email:N.Z_().min(6,"Password must be at least 6 characters").email("Invalid email").required("Email is required"),password:N.Z_().min(6,"Password must be at least 6 characters").required("Password is required")}),I=r(168),P=r(1087),S=r(9202),C=S.Z.div(t||(t=(0,I.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  width: 100%;\n  background: var(--welcomeBgColor);\n  background-repeat: no-repeat;\n  background-size: cover;\n"]))),E=S.Z.div(i||(i=(0,I.Z)(["\n  background: var(--welcome-background-color);\n  border-radius: 8px;\n  padding: 40px;\n\n  @media screen and (max-width: 768px) {\n    padding: 24px;\n  }\n"]))),R=S.Z.div(a||(a=(0,I.Z)(["\n  display: flex;\n"]))),U=(0,S.Z)(P.rU)(o||(o=(0,I.Z)(["\n  margin-right: 14px;\n\n  font-style: normal;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 27px;\n  letter-spacing: -0.02em;\n  color: var(--welcome-hover-text-color);\n"]))),_=(0,S.Z)(P.rU)(s||(s=(0,I.Z)(["\n  left: 160px;\n  top: 40px;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 27px;\n  letter-spacing: -0.02em;\n  color: rgba(255, 255, 255, 0.3);\n"]))),L=S.Z.div(l||(l=(0,I.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 40px;\n  gap: 14px;\n\n  input {\n    width: 287px;\n    height: 49px;\n    left: 40px;\n    top: 107px;\n\n    color: var(--welcome-hover-text-color);\n    background: #1f1f1f;\n    opacity: 0.4;\n    border: 1px solid #bedbb0;\n    padding-left: 18px;\n    box-shadow: 0px 4px 16px rgba(22, 22, 22, 0.08);\n    border-radius: 8px;\n\n    outline: none;\n\n    @media screen and (min-width: 768px) {\n      width: 326px;\n    }\n  }\n"]))),A=S.Z.div(c||(c=(0,I.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n"]))),B=S.Z.span(d||(d=(0,I.Z)(["\n  position: absolute;\n  right: 18px;\n  top: 19px;\n  cursor: pointer;\n"]))),D=S.Z.img(p||(p=(0,I.Z)(["\n  width: 16.5px;\n  height: 16px;\n  top: 50%;\n  right: 4px;\n"]))),J=S.Z.svg(x||(x=(0,I.Z)(["\n  width: 16.5px;\n  height: 16px;\n  top: 50%;\n  right: 4px;\n"]))),V=S.Z.button(m||(m=(0,I.Z)(["\n  width: 100%;\n  height: 49px;\n  margin-top: 24px;\n\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 21px;\n  letter-spacing: -0.02em;\n\n  text-align: center;\n\n  background: #bedbb0;\n  border-radius: 8px;\n  color: var(--welcome-title-color);\n  cursor: pointer;\n\n  @media screen and (max-width: 768px) {\n    width: 287px;\n  }\n"]))),F=(0,S.Z)(Z.Bc)(h||(h=(0,I.Z)(["\n  font-size: 14px;\n  color: #bedbb070;\n"]))),O=r(7609);var G=r.p+"static/media/eye-hide.accfc4141682c117e0a89ff4d886ee4d.svg",H=r(3329);var K,M,Q,T=function(){var n=(0,u.s0)(),e=(0,b.I0)(),r=(0,j.useState)(!1),t=(0,f.Z)(r,2),i=t[0],a=t[1],o=function(){var r=(0,g.Z)(v().mark((function r(t){var i,a;return v().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.preventDefault(),i={name:t.target.elements.name.value,email:t.target.elements.email.value,password:t.target.elements.password.value},r.next=4,e((0,k.z2)(i));case 4:(a=r.sent).error?(0,y.Am)(a.payload):n("/home");case 6:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}();return(0,H.jsx)(C,{children:(0,H.jsx)("form",{onSubmit:o,children:(0,H.jsx)(Z.J9,{initialValues:{name:"",email:"",password:""},validationSchema:q,children:(0,H.jsxs)(E,{children:[(0,H.jsxs)(R,{children:[(0,H.jsx)(U,{to:"/register",underline:"none",children:"Registration"}),(0,H.jsx)(_,{to:"/login",underline:"none",children:"Log In"})]}),(0,H.jsxs)(L,{children:[(0,H.jsx)(Z.gN,{autoFocus:!0,name:"name",type:"text",placeholder:"Name"}),(0,H.jsx)(F,{name:"name",component:"div"}),(0,H.jsx)(Z.gN,{name:"email",type:"email",placeholder:"Email"}),(0,H.jsx)(F,{name:"email",component:"div"}),(0,H.jsxs)(A,{children:[(0,H.jsx)(Z.gN,{name:"password",type:i?"text":"password",placeholder:"Password"}),(0,H.jsx)(F,{name:"password",component:"div"}),(0,H.jsx)(B,{className:"".concat(B," ").concat(D),onClick:function(){a(!i)},children:i?(0,H.jsx)(D,{src:G}):(0,H.jsx)(J,{children:(0,H.jsx)("use",{stroke:"gray",href:"".concat(O.Z,"#icon-eye")})})})]})]}),(0,H.jsx)(V,{type:"submit",children:"Register Now"})]})})})})},W=function(n){return n.auth.token},X=(0,S.Z)(P.rU)(K||(K=(0,I.Z)(["\n  margin-right: 14px;\n\n  font-style: normal;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 27px;\n  letter-spacing: -0.02em;\n  color: rgba(255, 255, 255, 0.3);\n"]))),Y=(0,S.Z)(P.rU)(M||(M=(0,I.Z)(["\n  left: 160px;\n  top: 40px;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 27px;\n  letter-spacing: -0.02em;\n  color: var(--welcome-hover-text-color);\n"]))),$=S.Z.button(Q||(Q=(0,I.Z)(["\n  width: 100%;\n  height: 49px;\n  margin-top: 24px;\n\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 21px;\n  letter-spacing: -0.02em;\n\n  text-align: center;\n\n  background: #bedbb0;\n  border-radius: 8px;\n  color: var(--welcome-title-color);\n  cursor: pointer;\n\n  @media screen and (max-width: 768px) {\n    width: 287px;\n  }\n"])));var nn=function(){var n=(0,u.s0)(),e=(0,j.useState)(!1),r=(0,f.Z)(e,2),t=r[0],i=r[1],a=(0,b.I0)(),o=function(){var e=(0,g.Z)(v().mark((function e(r){var t,i;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),t={email:r.target.elements.email.value,password:r.target.elements.password.value},e.next=4,a((0,k.x4)(t,W));case 4:(i=e.sent).error?y.Am.error(i.payload):n("/home");case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,H.jsx)(C,{children:(0,H.jsx)("form",{onSubmit:o,children:(0,H.jsx)(Z.J9,{initialValues:{email:"",password:""},validationSchema:z,children:(0,H.jsxs)(E,{children:[(0,H.jsxs)(R,{children:[(0,H.jsx)(X,{to:"/register",underline:"none",children:"Registration"}),(0,H.jsx)(Y,{to:"/login",underline:"none",children:"Log In"})]}),(0,H.jsxs)(L,{children:[(0,H.jsx)(Z.gN,{name:"email",type:"email",placeholder:"Email"}),(0,H.jsx)(F,{name:"email",component:"div"}),(0,H.jsxs)(A,{children:[(0,H.jsx)(Z.gN,{name:"password",type:t?"text":"password",placeholder:"Password"}),(0,H.jsx)(F,{name:"password",component:"div"}),(0,H.jsx)(B,{className:"".concat(B," ").concat(D),onClick:function(){i(!t)},children:t?(0,H.jsx)(D,{src:G}):(0,H.jsx)(J,{children:(0,H.jsx)("use",{stroke:"gray",href:"".concat(O.Z,"#icon-eye")})})})]})]}),(0,H.jsx)($,{children:"Log In Now"})]})})})})},en=function(){var n=(0,u.UO)().register;return(0,H.jsxs)("div",{children:["register"===n&&(0,H.jsx)(T,{}),"login"===n&&(0,H.jsx)(nn,{}),(0,H.jsx)(y.Ix,{})]})}}}]);
//# sourceMappingURL=940.033ea665.chunk.js.map