import{_ as O,i as W,a as T,u as A,b as h,j as L,c as r,o,d,f as l,w as t,k as _,n as V,e as s,t as C,l as B,F as H,m as R,q as m,s as z,p as D,h as E,g as F,v as G,x as J,y as U}from"./index-fcbd3ec5.js";import{_ as j}from"./elephant-2166f6f7.js";const Q=[{label:"首页",index:"1",path:"/home",icon:"House"},{label:"日历",index:"6",path:"/wfcalendar",icon:"ChatDotSquare"}];const N=c=>(D("data-v-7a3e81c8"),c=c(),E(),c),X={id:"comAside"},Y=N(()=>s("img",{src:j,class:"imgSize"},null,-1)),Z=N(()=>s("img",{src:j,class:"imgSize"},null,-1)),ee=[Z],te=N(()=>s("div",{style:{height:"0.6rem"}},null,-1)),oe={class:"labelFontSize"},le={key:0,class:"labelFontSize"},se={class:"labelFontSize"},ne={__name:"ComAside",setup(c){W(a=>({cc5c8b94:p.value,"1de2b67c":k.value}));const n=T(),e=A(),b=h("KUAOS"),k=h("block"),f=h("#002766"),p=h("#FFF");f.value=e.color,p.value=e.textColor,L(()=>e.isCollapse,(a,i)=>{e.isCollapse==!1?k.value="block":k.value="none"},{immediate:!0,deep:!0}),L(()=>e.color,(a,i)=>{f.value=e.color},{immediate:!0,deep:!0}),L(()=>e.textColor,(a,i)=>{p.value=e.textColor},{immediate:!0,deep:!0});const y=(a,i)=>{},x=(a,i)=>{console.log(a,i)},S=(a,i)=>{console.log(a,i),i==0?(e.label=a.label,e.subLabel=""):i==1&&(e.label=a.label,e.subLabel=a.children[0].label)},g=(a,i)=>{};return(a,i)=>{const I=r("el-icon"),v=r("el-menu-item"),M=r("el-menu-item-group"),w=r("el-sub-menu"),q=r("el-menu");return o(),d("div",X,[l(q,{"default-active":_(n).currentRoute._value.fullPath||"/home",class:"el-menu-vertical-demo",onSelect:x,onOpen:y,onClose:g,"background-color":f.value,"text-color":p.value,"active-text-color":p.value,collapse:_(e).isCollapse,router:!0,"collapse-transition":!1},{default:t(()=>[_(e).isCollapse==!1?(o(),d("a",{key:0,class:"topIcon1",href:"home",style:V({backgroundColor:f.value})},[Y,s("div",{class:"title",style:V({color:p.value})},C(b.value),5)],4)):B("",!0),_(e).isCollapse==!0?(o(),d("a",{key:1,class:"topIcon2",href:"home",style:V({backgroundColor:f.value})},ee,4)):B("",!0),te,(o(!0),d(H,null,R(_(Q),(u,P)=>(o(),d("div",null,[u.children?(o(),m(w,{key:1,index:u.path},{title:t(()=>[l(I,{class:"iconSize"},{default:t(()=>[(o(),m(z(u.icon),{class:"fold-menu"}))]),_:2},1024),_(e).isCollapse==!1?(o(),d("span",le,C(u.label),1)):B("",!0)]),default:t(()=>[l(M,null,{default:t(()=>[(o(!0),d(H,null,R(u.children,($,Ee)=>(o(),m(v,{key:$.index,index:$.path,onClick:Ne=>S(u,1)},{title:t(()=>[s("span",se,C($.label),1)]),default:t(()=>[l(I,{class:"iconSize"},{default:t(()=>[(o(),m(z($.icon),{class:"fold-menu"}))]),_:2},1024)]),_:2},1032,["index","onClick"]))),128))]),_:2},1024)]),_:2},1032,["index"])):(o(),m(v,{key:0,index:u.path,onClick:$=>S(u,0)},{title:t(()=>[s("span",oe,C(u.label),1)]),default:t(()=>[l(I,{class:"iconSize"},{default:t(()=>[(o(),m(z(u.icon),{class:"fold-menu"}))]),_:2},1024)]),_:2},1032,["index","onClick"]))]))),256))]),_:1},8,["default-active","background-color","text-color","active-text-color","collapse"])])}}},ae=O(ne,[["__scopeId","data-v-7a3e81c8"]]),ce=[{name:"前言",href:"/study/foreword"},{name:"简介",href:"/study/intro"}];const _e=c=>(D("data-v-97a94d2c"),c=c(),E(),c),ue={id:"ComAsideOther"},ie={class:"title"},de={class:"user"},re=_e(()=>s("h4",{class:"catalogue"},"目录",-1)),pe={class:"catalogueOl"},me={class:"catalogueLi"},he=["onClick"],fe={__name:"ComAsideOther",setup(c){const n=T(),e=A(),b=h("KUAOS");h("block");const k=h("#002766"),f=h("#FFF");k.value=e.color,f.value=e.textColor;const p=y=>{y.includes("/study")?e.optionalState=1:e.optionalState=0,n.push(y)};return(y,x)=>(o(),d("div",ue,[s("div",ie,C(b.value),1),s("p",de,[F(" 作者： "),s("span",{style:{color:"#646cff"},onClick:x[0]||(x[0]=S=>p("/foreword"))}," Kuaos")]),re,s("ol",pe,[(o(!0),d(H,null,R(_(ce),(S,g)=>(o(),d("li",me,[s("span",{style:{color:"#646cff"},onClick:a=>p(S.href)},C(S.name),9,he)]))),256))])]))}},ve=O(fe,[["__scopeId","data-v-97a94d2c"]]);const Ce={id:"ComHeader"},be={class:"l-header"},ke={class:"r-header"},Se={style:{display:"flex","align-items":"center"}},ye={class:"name"},xe={__name:"ComHeader",setup(c){const n=T(),e=A(),b=h({}),k=h("Fold"),f=h("Open");b.value.name="管理员",console.log(b.value);const p=()=>{n.push({name:"login"}),G()},y=()=>{e.menuState==0?e.menuState=1:e.menuState=0},x=()=>{e.isCollapse==!0?e.isCollapse=!1:e.isCollapse=!0,e.isCollapse==!0?k.value="Expand":k.value="Fold"},S=()=>{e.menuState==0?e.optionalState=1:e.optionalState=0,e.menuState==0?e.menuState=1:e.menuState=0,e.menuState==0?n.push("/home"):n.push("/study/foreword")},g=()=>{e.tabBarState==0?e.tabBarState=1:e.tabBarState=0,e.tabBarState==0?f.value="Open":f.value="TurnOff",e.tabBarState==0?e.headerHeight="1rem":e.headerHeight="0.6rem"},a=h(!1),i=h("全屏"),I=()=>{let v=document.documentElement;a.value?(document.exitFullscreen?document.exitFullscreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen(),i.value="全屏"):(v.requestFullscreen?v.requestFullscreen():v.webkitRequestFullScreen?v.webkitRequestFullScreen():v.mozRequestFullScreen?v.mozRequestFullScreen():v.msRequestFullscreen&&v.msRequestFullscreen(),i.value="取消全屏"),a.value=!a.value};return(v,M)=>{const w=r("el-icon"),q=r("ArrowDown"),u=r("el-dropdown-item"),P=r("el-dropdown-menu"),$=r("el-dropdown");return o(),d("div",Ce,[s("div",be,[l(w,{class:"icon",size:25,onClick:x},{default:t(()=>[(o(),m(z(k.value)))]),_:1})]),s("div",ke,[l(w,{class:"icon",size:20,onClick:S},{default:t(()=>[(o(),m(z("Switch")))]),_:1}),l(w,{class:"icon",size:20,onClick:g},{default:t(()=>[(o(),m(z(f.value)))]),_:1}),l(w,{class:"icon",size:20,onClick:I},{default:t(()=>[(o(),m(z("FullScreen")))]),_:1}),l($,null,{dropdown:t(()=>[l(P,null,{default:t(()=>[l(u,{onClick:x},{default:t(()=>[F(" 菜单折叠 ")]),_:1}),l(u,{onClick:y},{default:t(()=>[F("切换菜单")]),_:1}),l(u,{onClick:g},{default:t(()=>[F(" 标签"+C(_(e).tabBarState==0?"(开)":"(关)"),1)]),_:1}),l(u,{onClick:I},{default:t(()=>[F(C(i.value),1)]),_:1}),l(u,{onClick:p},{default:t(()=>[F("退出")]),_:1})]),_:1})]),default:t(()=>[s("div",Se,[s("div",ye,C(b.value.name),1),l(w,null,{default:t(()=>[l(q)]),_:1})])]),_:1})])])}}},ge=O(xe,[["__scopeId","data-v-186ced38"]]);const we={class:"tab"},$e={class:"subTitle"},Fe={key:0},ze={__name:"tab",setup(c){const n=A();return(e,b)=>(o(),d("div",we,[s("div",{class:J(_(n).subLabel==""?"title":"")},C(_(n).label),3),s("div",$e,[_(n).subLabel!==""?(o(),d("span",Fe," / ")):B("",!0),F(C(_(n).subLabel),1)])]))}},Ie=O(ze,[["__scopeId","data-v-d150e4dd"]]);const K=c=>(D("data-v-97023d2e"),c=c(),E(),c),Be={class:"optional"},Oe=K(()=>s("div",{class:"optional-item"},"back to top",-1)),Ae=K(()=>s("div",{class:"optional-item"},"back to top",-1)),Ve=K(()=>s("div",{class:"optional-item"},"back to top",-1)),qe=[Oe,Ae,Ve],Le={__name:"optional",props:{title:{type:String}},setup(c){return A(),(n,e)=>(o(),d("div",Be,qe))}},He=O(Le,[["__scopeId","data-v-97023d2e"]]);const Re={id:"main"},Te={style:{height:"100%",overflow:"auto"}},De={__name:"main",setup(c){const n=A(),e=U(()=>n.isCollapse?"64px":"2.4rem"),b=U(()=>n.isCollapse?"0px":"2.8rem");return(k,f)=>{const p=r("el-aside"),y=r("el-header"),x=r("router-view"),S=r("el-main"),g=r("el-container");return o(),d("div",Re,[l(g,null,{default:t(()=>[_(n).menuState==0?(o(),m(p,{key:0,width:e.value,style:V({backgroundColor:_(n).color})},{default:t(()=>[l(ae)]),_:1},8,["width","style"])):(o(),m(p,{key:1,width:b.value,style:{"background-color":"#fff"}},{default:t(()=>[l(ve)]),_:1},8,["width"])),l(g,null,{default:t(()=>[l(y,{style:V([{"background-color":"#fff",padding:"0"},{height:_(n).headerHeight}])},{default:t(()=>[l(ge),_(n).tabBarState==0?(o(),m(Ie,{key:0})):B("",!0)]),_:1},8,["style"]),l(S,null,{default:t(()=>[s("div",Te,[l(x),_(n).optionalState==1?(o(),m(He,{key:0,class:"optional"})):B("",!0)])]),_:1})]),_:1})]),_:1})])}}},Pe=O(De,[["__scopeId","data-v-bcd4fdca"]]);export{Pe as default};
