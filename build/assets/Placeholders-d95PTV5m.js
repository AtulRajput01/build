import{r as R,_ as z,R as T,b as k,c as E,P as n,d as I,j as e}from"./index-CErVs8TI.js";import{e as a}from"./DefaultLayout-CLIM33Ml.js";import{a as m}from"./index.es-BAd8dvJx.js";import{R as A}from"./react-DOh6XfOk.js";import{C as B,a as S}from"./CRow-IDhkO6y1.js";import{C as r}from"./CCard-Dy9OhmDH.js";import{C as c}from"./CCardHeader-BXDeowVQ.js";import{C as o}from"./CCardBody-CYNstEXG.js";import{C as u,a as C,b}from"./CCardTitle-Bg9V-FxF.js";import"./index-BSgzabWx.js";import"./cil-user-Ddrdy7PS.js";import"./cil-lock-locked-DmxpJbVL.js";var O=["xxl","xl","lg","md","sm","xs"],s=R.forwardRef(function(l,w){var i,N=l.children,j=l.animation,p=l.as,v=p===void 0?"span":p,P=l.className,f=l.color,g=l.size,d=z(l,["children","animation","as","className","color","size"]),x=[];return O.forEach(function(t){var h=d[t];delete d[t];var y=t==="xs"?"":"-".concat(t);typeof h=="number"&&x.push("col".concat(y,"-").concat(h)),typeof h=="boolean"&&x.push("col".concat(y))}),T.createElement(v,k({className:E(j?"placeholder-".concat(j):"placeholder",(i={},i["bg-".concat(f)]=f,i["placeholder-".concat(g)]=g,i),x,P)},d,{ref:w}),N)});s.propTypes={animation:n.oneOf(["glow","wave"]),as:n.elementType,children:n.node,className:n.string,color:I,size:n.oneOf(["xs","sm","lg"])};s.displayName="CPlaceholder";const Q=()=>e.jsx(B,{children:e.jsxs(S,{xs:12,children:[e.jsxs(r,{className:"mb-4",children:[e.jsx(c,{children:e.jsx("strong",{children:"React Placeholder"})}),e.jsxs(o,{children:[e.jsx("p",{className:"text-body-secondary small",children:'In the example below, we take a typical card component and recreate it with placeholders applied to create a "loading card". Size and proportions are the same between the two.'}),e.jsx(a,{href:"components/placeholder",children:e.jsxs("div",{className:"d-flex justify-content-around p-3",children:[e.jsxs(r,{style:{width:"18rem"},children:[e.jsx(u,{orientation:"top",src:A}),e.jsxs(o,{children:[e.jsx(C,{children:"Card title"}),e.jsx(b,{children:"Some quick example text to build on the card title and make up the bulk of the card's content."}),e.jsx(m,{color:"primary",href:"#",children:"Go somewhere"})]})]}),e.jsxs(r,{style:{width:"18rem"},children:[e.jsxs(u,{component:"svg",orientation:"top",width:"100%",height:"162",xmlns:"",role:"img","aria-label":"Placeholder",preserveAspectRatio:"xMidYMid slice",focusable:"false",children:[e.jsx("title",{children:"Placeholder"}),e.jsx("rect",{width:"100%",height:"100%",fill:"#868e96"})]}),e.jsxs(o,{children:[e.jsx(s,{component:C,animation:"glow",xs:7,children:e.jsx(s,{xs:6})}),e.jsxs(s,{component:b,animation:"glow",children:[e.jsx(s,{xs:7}),e.jsx(s,{xs:4}),e.jsx(s,{xs:4}),e.jsx(s,{xs:6}),e.jsx(s,{xs:8})]}),e.jsx(s,{color:"primary",component:m,disabled:!0,href:"#",tabIndex:-1,xs:6})]})]})]})})]})]}),e.jsxs(r,{className:"mb-4",children:[e.jsx(c,{children:e.jsx("strong",{children:"React Placeholder"})}),e.jsxs(o,{children:[e.jsxs("p",{className:"text-body-secondary small",children:["Create placeholders with the ",e.jsx("code",{children:"<CPlaceholder>"})," component and a grid column propx (e.g., ",e.jsxs("code",{children:["xs=",6]}),") to set the ",e.jsx("code",{children:"width"}),". They can replace the text inside an element or be added as a modifier class to an existing component."]}),e.jsxs(a,{href:"components/placeholder",children:[e.jsx("p",{"aria-hidden":"true",children:e.jsx(s,{xs:6})}),e.jsx(s,{color:"primary",component:m,"aria-hidden":"true",disabled:!0,href:"#",tabIndex:-1,xs:4})]})]})]}),e.jsxs(r,{className:"mb-4",children:[e.jsxs(c,{children:[e.jsx("strong",{children:"React Placeholder"})," ",e.jsx("small",{children:" Width"})]}),e.jsxs(o,{children:[e.jsxs("p",{className:"text-body-secondary small",children:["You can change the ",e.jsx("code",{children:"width"})," through grid column classes, width utilities, or inline styles."]}),e.jsxs(a,{href:"components/placeholder#width",children:[e.jsx(s,{xs:6}),e.jsx(s,{className:"w-75"}),e.jsx(s,{style:{width:"30%"}})]})]})]}),e.jsxs(r,{className:"mb-4",children:[e.jsxs(c,{children:[e.jsx("strong",{children:"React Placeholder"})," ",e.jsx("small",{children:" Color"})]}),e.jsxs(o,{children:[e.jsxs("p",{className:"text-body-secondary small",children:["By default, the ",e.jsx("code",{children:"<CPlaceholder>"})," uses ",e.jsx("code",{children:"currentColor"}),". This can be overridden with a custom color or utility class."]}),e.jsxs(a,{href:"components/placeholder#color",children:[e.jsx(s,{xs:12}),e.jsx(s,{color:"primary",xs:12}),e.jsx(s,{color:"secondary",xs:12}),e.jsx(s,{color:"success",xs:12}),e.jsx(s,{color:"danger",xs:12}),e.jsx(s,{color:"warning",xs:12}),e.jsx(s,{color:"info",xs:12}),e.jsx(s,{color:"light",xs:12}),e.jsx(s,{color:"dark",xs:12})]})]})]}),e.jsxs(r,{className:"mb-4",children:[e.jsxs(c,{children:[e.jsx("strong",{children:"React Placeholder"})," ",e.jsx("small",{children:" Sizing"})]}),e.jsxs(o,{children:[e.jsxs("p",{className:"text-body-secondary small",children:["The size of ",e.jsx("code",{children:"<CPlaceholder>"}),"s are based on the typographic style of the parent element. Customize them with ",e.jsx("code",{children:"size"})," prop: ",e.jsx("code",{children:"lg"}),","," ",e.jsx("code",{children:"sm"}),", or ",e.jsx("code",{children:"xs"}),"."]}),e.jsxs(a,{href:"components/placeholder#sizing",children:[e.jsx(s,{xs:12,size:"lg"}),e.jsx(s,{xs:12}),e.jsx(s,{xs:12,size:"sm"}),e.jsx(s,{xs:12,size:"xs"})]})]})]}),e.jsxs(r,{className:"mb-4",children:[e.jsxs(c,{children:[e.jsx("strong",{children:"React Placeholder"})," ",e.jsx("small",{children:" Animation"})]}),e.jsxs(o,{children:[e.jsxs("p",{className:"text-body-secondary small",children:["Animate placeholders with ",e.jsx("code",{children:'animation="glow"'})," or"," ",e.jsx("code",{children:'animation="wave"'})," to better convey the perception of something being ",e.jsx("em",{children:"actively"})," loaded."]}),e.jsxs(a,{href:"components/placeholder#animation",children:[e.jsx(s,{component:"p",animation:"glow",children:e.jsx(s,{xs:12})}),e.jsx(s,{component:"p",animation:"wave",children:e.jsx(s,{xs:12})})]})]})]})]})});export{Q as default};
