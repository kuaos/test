import{_ as V}from"./elephant-2166f6f7.js";import{_ as y,u as D,a as k,r as p,b as f,c as i,o as I,d as S,e,f as l,w as o,g as B,p as R,h as U,E as g}from"./index-f7d66c57.js";const q=""+new URL("user-df00387a.svg",import.meta.url).href,C=""+new URL("password-c0b05aae.svg",import.meta.url).href;const s=r=>(R("data-v-d7da5e23"),r=r(),U(),r),E={class:"login"},N=s(()=>e("div",{class:"loginicon"},[e("img",{src:V,class:"image"}),e("div",{class:"title"},"kuaos管理平台")],-1)),T={class:"loginFrom"},F=s(()=>e("div",{class:"title"},"登录",-1)),L=s(()=>e("div",null,null,-1)),M=s(()=>e("div",{style:{width:"0.12rem"}},null,-1)),$=s(()=>e("img",{src:q},null,-1)),j=s(()=>e("div",{class:"inputTitle"},"用户名",-1)),z=s(()=>e("div",null,null,-1)),A=s(()=>e("div",{style:{width:"0.12rem"}},null,-1)),G=s(()=>e("img",{src:C},null,-1)),H=s(()=>e("div",{class:"inputTitle"},"密码",-1)),J={__name:"login",setup(r){D();const h=k(),a=p({formData:{phone:"18757790338",password:"123456"}}),m=f(""),d=f(!1),v=p({phone:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:3,max:15,message:"请输入3到15个字符的的用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:5,max:16,message:"请输入5到16位密码",trigger:"blur"}]}),b=async _=>{d.value=!0,_&&await _.validate((t,u)=>{t?(console.log("submit!"),g({message:"登录成功",type:"success"}),h.push("/home")):(g.error("请输入用户名和密码"),d.value=!1)})};return(_,t)=>{const u=i("el-input"),c=i("el-form-item"),w=i("el-button"),x=i("el-form");return I(),S("div",E,[N,e("div",T,[F,l(x,{ref_key:"ruleFormRef",ref:m,rules:v,model:a.formData,class:"form","hide-required-asterisk":""},{default:o(()=>[l(c,{label:"用户名","label-width":"0",prop:"phone"},{label:o(()=>[L]),default:o(()=>[l(u,{modelValue:a.formData.phone,"onUpdate:modelValue":t[0]||(t[0]=n=>a.formData.phone=n),placeholder:"请输入用户名",clearable:""},{prefix:o(()=>[M,$,j]),_:1},8,["modelValue"])]),_:1}),l(c,{label:"密码","label-width":"0",prop:"password"},{label:o(()=>[z]),default:o(()=>[l(u,{type:"password",modelValue:a.formData.password,"onUpdate:modelValue":t[1]||(t[1]=n=>a.formData.password=n),placeholder:"请输入密码","show-password":"",clearable:""},{prefix:o(()=>[A,G,H]),_:1},8,["modelValue"])]),_:1}),l(c,null,{default:o(()=>[l(w,{class:"loginBtn",onClick:t[2]||(t[2]=n=>b(m.value)),loading:d.value},{default:o(()=>[B(" 登录 ")]),_:1},8,["loading"])]),_:1})]),_:1},8,["rules","model"])])])}}},P=y(J,[["__scopeId","data-v-d7da5e23"]]);export{P as default};
