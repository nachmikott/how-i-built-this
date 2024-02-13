import{r as i}from"./index-DH5ua8nC.js";import"./_commonjsHelpers-Cpj98o6Y.js";var P={exports:{}},u={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C=i,N=Symbol.for("react.element"),O=Symbol.for("react.fragment"),E=Object.prototype.hasOwnProperty,R=C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,L={key:!0,ref:!0,__self:!0,__source:!0};function k(e,r,a){var o,t={},d=null,_=null;a!==void 0&&(d=""+a),r.key!==void 0&&(d=""+r.key),r.ref!==void 0&&(_=r.ref);for(o in r)E.call(r,o)&&!L.hasOwnProperty(o)&&(t[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps,r)t[o]===void 0&&(t[o]=r[o]);return{$$typeof:N,type:e,key:d,ref:_,props:t,_owner:R.current}}u.Fragment=O;u.jsx=k;u.jsxs=k;P.exports=u;var s=P.exports;const h=i.createContext({useHowIBuiltThis:!1,setUseHowIBuiltThis:()=>{}});function W({children:e}){const[r,a]=i.useState(!1);return s.jsx(h.Provider,{value:{useHowIBuiltThis:r,setUseHowIBuiltThis:a},children:e})}try{Provider.displayName="Provider",Provider.__docgenInfo={description:"",displayName:"Provider",props:{}}}catch{}function U({children:e}){const{useHowIBuiltThis:r}=i.useContext(h),a=r?"border border-2 border-info position-relative rounded":"",o=t=>{t==null||t.stopPropagation(),alert("Whatever!")};return s.jsxs("div",{className:a,children:[e,r&&s.jsx("button",{className:"position-absolute border rounded btn btn-primary",style:{bottom:"1px",right:"1px"},onClick:o,children:"?"})]})}try{Wrapper.displayName="Wrapper",Wrapper.__docgenInfo={description:"",displayName:"Wrapper",props:{}}}catch{}function z(){const{useHowIBuiltThis:e,setUseHowIBuiltThis:r}=i.useContext(h),a=`Turn ${e?"Off":"On"} How I Built This`,o=t=>{t==null||t.stopPropagation(),r(!e)};return s.jsx("button",{className:"position-absolute",style:{bottom:"10px",right:"10px"},onClick:o,children:a})}const g=["Doesnt Do Anything Yet","Seriously, Relax","First time pressing a button eh?"],m=({})=>{const[e,r]=i.useState(0);return s.jsxs(W,{children:[s.jsxs(U,{children:[s.jsx("span",{children:s.jsx("img",{src:"https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",alt:"picture of mountains"})}),s.jsx("button",{onClick:()=>{r(e<g.length-1?e+1:0)},children:g[e]})]}),s.jsx(z,{})]})};try{m.displayName="HowIBuiltThis",m.__docgenInfo={description:"Primary UI component for user interaction",displayName:"HowIBuiltThis",props:{}}}catch{}const $={title:"Example/HowIBuiltThis",component:m,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}}},n={args:{primary:!0,label:"HowIBuiltThis"}},l={args:{label:"HowIBuiltThis"}},c={args:{size:"large",label:"HowIBuiltThis"}},p={args:{size:"small",label:"HowIBuiltThis"}};var y,f,x;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'HowIBuiltThis'
  }
}`,...(x=(f=n.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var b,I,T;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'HowIBuiltThis'
  }
}`,...(T=(I=l.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var w,B,H;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: 'HowIBuiltThis'
  }
}`,...(H=(B=c.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var j,S,v;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: 'HowIBuiltThis'
  }
}`,...(v=(S=p.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};const A=["Primary","Secondary","Large","Small"];export{c as Large,n as Primary,l as Secondary,p as Small,A as __namedExportsOrder,$ as default};
