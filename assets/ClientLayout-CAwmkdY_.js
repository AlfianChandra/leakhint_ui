import{l as t,s as D,v as g,C as w,_ as O,a as V}from"./AsideDrawer.vue_vue_type_script_setup_true_lang-DIinVCuI.js";import{s as $}from"./index-C4M3oTbD.js";import{s as v,a as C,r as U,u as k}from"./index-BhwggLZE.js";import{B,s as H,c as R,o as A,r as M,m as z,d as y,u as F,a as T,b as W,F as G,e as a,f as e,n as u,w as f,g as o,t as r,h as _,i as h,j as Y,k as j}from"./index-CQzuYrLM.js";import{s as q}from"./index-BriKqftw.js";import{t as c}from"./themeStore-B6gkL7KO.js";import{e as x}from"./emitter-E5P-NQ8u.js";import"./index-CrE_e86m.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-CfBu_2iE.js";var Q=`
    .p-iftalabel {
        display: block;
        position: relative;
    }

    .p-iftalabel label {
        position: absolute;
        pointer-events: none;
        top: dt('iftalabel.top');
        transition-property: all;
        transition-timing-function: ease;
        line-height: 1;
        font-size: dt('iftalabel.font.size');
        font-weight: dt('iftalabel.font.weight');
        inset-inline-start: dt('iftalabel.position.x');
        color: dt('iftalabel.color');
        transition-duration: dt('iftalabel.transition.duration');
    }

    .p-iftalabel .p-inputtext,
    .p-iftalabel .p-textarea,
    .p-iftalabel .p-select-label,
    .p-iftalabel .p-multiselect-label,
    .p-iftalabel .p-autocomplete-input-multiple,
    .p-iftalabel .p-cascadeselect-label,
    .p-iftalabel .p-treeselect-label {
        padding-block-start: dt('iftalabel.input.padding.top');
        padding-block-end: dt('iftalabel.input.padding.bottom');
    }

    .p-iftalabel:has(.p-invalid) label {
        color: dt('iftalabel.invalid.color');
    }

    .p-iftalabel:has(input:focus) label,
    .p-iftalabel:has(input:-webkit-autofill) label,
    .p-iftalabel:has(textarea:focus) label,
    .p-iftalabel:has(.p-inputwrapper-focus) label {
        color: dt('iftalabel.focus.color');
    }

    .p-iftalabel .p-inputicon {
        top: dt('iftalabel.input.padding.top');
        transform: translateY(25%);
        margin-top: 0;
    }
`,J={root:"p-iftalabel"},K=B.extend({name:"iftalabel",style:Q,classes:J}),X={name:"BaseIftaLabel",extends:H,style:K,provide:function(){return{$pcIftaLabel:this,$parentInstance:this}}},E={name:"IftaLabel",extends:X,inheritAttrs:!1};function Z(p,s,m,l,L,d){return A(),R("span",z({class:p.cx("root")},p.ptmi("root")),[M(p.$slots,"default")],16)}E.render=Z;const ee={style:{display:"flex","flex-flow":"column",gap:"1rem"}},te={style:{margin:"0",padding:"0"}},ae={style:{"font-size":"12px",width:"380px"}},le={style:{padding:"0",margin:"0"}},oe=y({__name:"RegisterDialog",setup(p){const s=F(),m=T(!1),l=T({name:"",email:"",password:"",phone:""}),L=T(null),d=T(!1),S=()=>{x.on("showRegister",()=>{d.value=!0})},N=()=>{if(g.validateName(l.value.name)===!1){s.add({severity:"error",...t.getAlert("FE_INVALID_NAME").alert,life:3e3});return}if(!g.validateEmail(l.value.email)){s.add({severity:"error",...t.getAlert("FE_INVALID_EMAIL",!1).alert,life:3e3});return}if(!g.validatePassword(l.value.password)){s.add({severity:"error",...t.getAlert("FE_INVALID_PASSWORD",!1).alert,life:3e3});return}if(!g.validatePhone(l.value.phone)){s.add({severity:"error",...t.getAlert("FE_INVALID_PHONE",!1).alert,life:3e3});return}if(!m.value){s.add({severity:"error",...t.getAlert("FE_PRIVACY_AGREEMENT_REQUIRED").alert,life:3e3});return}U.authPost("register",l.value).then(b=>{l.value={name:"",email:"",password:"",phone:""},s.add({severity:"success",...t.getAlert(b.successCode,!0).alert,life:3e3}),d.value=!1}).catch(b=>{s.add({severity:"error",...t.getAlert(b,!1).alert,life:3e3})})},P=()=>{d.value=!1,x.emit("showLogin")};return W(()=>{S()}),(b,n)=>{const I=h("fasicon");return A(),R(G,null,[a(e($),{visible:d.value,"onUpdate:visible":n[6]||(n[6]=i=>d.value=i),draggable:!0,header:e(t).getText("REGISTER_DIALOG_HEADER"),style:u([{background:`${e(c).isDark?"rgba(0,0,0,0.7)":"rgba(255,255,255,0.7)"}`},{"backdrop-filter":"blur(4px)","-webkit-backdrop-filter":"blur(4px)",width:"30vw"}])},{default:f(()=>[o("div",ee,[o("p",te,r(e(t).getText("REGISTER_DIALOG_SUBHEADER")),1),a(e(E),null,{default:f(()=>[o("label",null,r(e(t).getText("REGISTER_DIALOG_INPUT_NAME_LABEL")),1),a(e(v),{modelValue:l.value.name,"onUpdate:modelValue":n[0]||(n[0]=i=>l.value.name=i),style:{width:"100%"},placeholder:e(t).getText("REGISTER_DIALOG_INPUT_NAME_PLC")},null,8,["modelValue","placeholder"]),o("span",{style:u([{color:`${e(c).activePrimaryColor}`},{"font-size":"12px"}])},[a(I,{icon:"info-circle"}),_(" "+r(e(t).getText("REGISTER_DIALOG_NAME_HINT")),1)],4)]),_:1}),a(e(E),null,{default:f(()=>[o("label",null,r(e(t).getText("REGISTER_DIALOG_INPUT_EMAIL_LABEL")),1),a(e(v),{modelValue:l.value.email,"onUpdate:modelValue":n[1]||(n[1]=i=>l.value.email=i),style:{width:"100%"},placeholder:e(t).getText("REGISTER_DIALOG_INPUT_EMAIL_PLC")},null,8,["modelValue","placeholder"]),o("span",{style:u([{color:`${e(c).activePrimaryColor}`},{"font-size":"12px"}])},[a(I,{icon:"info-circle"}),_(" "+r(e(t).getText("REGISTER_DIALOG_EMAIL_HINT")),1)],4)]),_:1}),a(e(E),null,{default:f(()=>[o("label",null,r(e(t).getText("REGISTER_DIALOG_INPUT_PASSWORD_LABEL")),1),a(e(v),{modelValue:l.value.password,"onUpdate:modelValue":n[2]||(n[2]=i=>l.value.password=i),style:{width:"100%"},type:"password",placeholder:e(t).getText("REGISTER_DIALOG_INPUT_PASSWORD_PLC")},null,8,["modelValue","placeholder"]),o("span",{style:u([{color:`${e(c).activePrimaryColor}`},{"font-size":"12px"}])},[a(I,{icon:"info-circle"}),_(" "+r(e(t).getText("REGISTER_DIALOG_PASSWORD_HINT")),1)],4)]),_:1}),a(e(E),null,{default:f(()=>[o("label",null,r(e(t).getText("REGISTER_DIALOG_INPUT_PHONE_LABEL")),1),a(e(v),{modelValue:l.value.phone,"onUpdate:modelValue":n[3]||(n[3]=i=>l.value.phone=i),style:{width:"100%"},placeholder:e(t).getText("REGISTER_DIALOG_INPUT_PHONE_PLC")},null,8,["modelValue","placeholder"]),o("span",{style:u([{color:`${e(c).activePrimaryColor}`},{"font-size":"12px"}])},[a(I,{icon:"info-circle"}),_(" "+r(e(t).getText("REGISTER_DIALOG_PHONE_HINT")),1)],4)]),_:1}),o("div",{style:{display:"flex","flex-flow":"row nowrap","align-items":"center",gap:"0.5rem"},ref_key:"tosBox",ref:L},[a(e(q),{modelValue:m.value,"onUpdate:modelValue":n[4]||(n[4]=i=>m.value=i)},null,8,["modelValue"]),o("span",ae,r(e(t).getText("REGISTER_DIALOG_PRIVACY_AGREEMENT")),1)],512),a(e(C),{onClick:n[5]||(n[5]=i=>N())},{default:f(()=>[_(r(e(t).getText("REGISTER_DIALOG_BUTTON_REGISTER")),1)]),_:1}),o("p",le,[_(r(e(t).getText("REGISTER_DIALOG_HAVE_ACCOUNT"))+" ",1),o("a",{onClick:P,href:"javascript:;",style:u([{"text-decoration":"none","font-weight":"bold"},{color:`${e(c).activePrimaryColor}`}])},r(e(t).getText("REGISTER_DIALOG_TO_LOGIN")),5)])])]),_:1},8,["visible","header","style"]),a(e(D))],64)}}}),ne={style:{width:"100%","box-sizing":"border-box","padding-top":"7.5rem"}},Ee=y({__name:"ClientLayout",setup(p){return(s,m)=>{const l=h("RouterView");return A(),R(G,null,[a(w),o("div",ne,[a(l)]),a(O),a(oe),e(k).isAdmin()?(A(),Y(V,{key:0})):j("",!0)],64)}}});export{Ee as default};
