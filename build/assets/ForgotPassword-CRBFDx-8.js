import{r as t,u as x,j as s}from"./index-CErVs8TI.js";import{a as h}from"./index-BSgzabWx.js";import{b as C,c as u,a as j}from"./index.es-BAd8dvJx.js";import{C as i,a as l}from"./CRow-IDhkO6y1.js";import{C as w}from"./CCardGroup-CeqQgzd4.js";import{C as f}from"./CCard-Dy9OhmDH.js";import{C as N}from"./CCardBody-CYNstEXG.js";import{C as g}from"./CForm-DHqBRf0Y.js";import{C as y,a as P}from"./CInputGroupText-DvICOxYj.js";import{c as v}from"./cil-lock-locked-DmxpJbVL.js";import{C as R}from"./CFormInput-DLpCIeKK.js";import"./CFormControlWrapper-CyGeNpXM.js";import"./CFormControlValidation-D-DFYRS7.js";import"./CFormLabel-DmMQvSiy.js";const b="http://localhost:5000/api/auth/resetPassword",z=()=>{const[a,m]=t.useState(""),[o,n]=t.useState(""),[c,r]=t.useState(""),d=x(),p=async()=>{try{const e=await h.post(b,{newPassword:a});n(e.data.message),r(""),d("/login")}catch(e){n(""),e.response&&e.response.data?r(e.response.data.message):r("Failed to reset password")}};return s.jsx("div",{className:"bg-body-tertiary min-vh-100 d-flex flex-row align-items-center",children:s.jsx(C,{className:"d-flex justify-content-center align-items-center min-vh-100",children:s.jsx(i,{className:"justify-content-center",children:s.jsx(l,{md:15,children:s.jsx(w,{className:"shadow-lg",children:s.jsx(f,{className:"p-4",children:s.jsx(N,{children:s.jsxs(g,{children:[s.jsx("h1",{className:"text-center",children:"Reset Password"}),s.jsx("p",{className:"text-body-secondary text-center",children:"Enter your new password"}),o&&s.jsx("p",{className:"text-success text-center",children:o}),c&&s.jsx("p",{className:"text-danger text-center",children:c}),s.jsxs(y,{className:"mb-4",children:[s.jsx(P,{children:s.jsx(u,{icon:v})}),s.jsx(R,{type:"password",placeholder:"New Password",autoComplete:"new-password",value:a,onChange:e=>m(e.target.value),required:!0})]}),s.jsx(i,{className:"justify-content-center",children:s.jsx(l,{xs:12,className:"text-center",children:s.jsx(j,{color:"primary",className:"px-4",onClick:p,children:"Reset Password"})})})]})})})})})})})})};export{z as default};
