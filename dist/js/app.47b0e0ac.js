(function(){"use strict";var e={2043:function(e,a,t){var n=t(5130),o=t(6768),l=t(4232),i=t.p+"img/data_source.a7445993.jpg",s=t.p+"img/logo_g.fc0ddf12.png",r=t.p+"img/logo_m.c875dc6c.png";const d={id:"app"},c=(0,o.Fv)('<header><nav class="navbar fixed-top navbar-expand-lg navbar-dark" style="background-color:#6abf69;"><div class="container-fluid"><a class="navbar-brand" href="./home.html">台東減碳x慢食遊</a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarNav"><ul class="navbar-nav"><li class="nav-item"><a class="nav-link" href="./carbon_info.html">減碳資訊及平台介紹</a></li><li class="nav-item"><a class="nav-link active" aria-current="page" href="index.html">碳排計算機</a></li><li class="nav-item"><a class="nav-link" href="./slowfood_info.html">慢食趣</a></li><li class="nav-item"><a class="nav-link" href="./restaurent_info.html">餐廳介紹</a></li></ul></div></div></nav></header><div class="top"><h1>碳排計算機</h1><p>計算您餐點的碳排放量，助力環保</p></div>',2),u={class:"ingredient-selection"},m=(0,o.Lk)("h2",null,[(0,o.eW)("食材類 "),(0,o.Lk)("small",{style:{"font-size":"0.4em",color:"gray","margin-left":"4px"}},"(按 + 可新增)")],-1),v=["onUpdate:modelValue","onChange"],g=(0,o.Lk)("option",{value:""},"選擇種類",-1),p=["value"],b=["onUpdate:modelValue","onChange"],f=(0,o.Lk)("option",{value:""},"選擇名稱",-1),h=["value"],k=["onUpdate:modelValue","onInput","placeholder"],y={class:"ingredient-selection"},_=(0,o.Lk)("h2",null,"能源類",-1),L=["onUpdate:modelValue","onChange"],C=(0,o.Lk)("option",{value:""},"選擇種類",-1),E=["value"],w=["onUpdate:modelValue","onChange"],F=(0,o.Lk)("option",{value:""},"選擇名稱",-1),x=["value"],X=["onUpdate:modelValue","onInput","placeholder"],I={class:"ingredient-selection"},K=(0,o.Lk)("h2",null,"運輸類",-1),O=["onUpdate:modelValue","onChange"],U=(0,o.Lk)("option",{value:""},"選擇種類",-1),V=["value"],M=["onUpdate:modelValue","onChange"],R=(0,o.Lk)("option",{value:""},"選擇名稱",-1),D=["value"],T=["onUpdate:modelValue","onInput","placeholder"],j={class:"button-group"},S={class:"results"},A=(0,o.Lk)("h2",null,"總碳排放量",-1),W={id:"total-emission"},P={class:"comparison"},B={id:"trees-saved"},J={class:"chart-container-wrapper"},N={class:"Chart-container"},Q={key:0,id:"emissionChart"},$={key:0,type:"button",class:"btn btn-dark details-btn","data-bs-toggle":"modal","data-bs-target":"#detailsModal"},z={class:"modal fade",id:"detailsModal",tabindex:"-1","aria-labelledby":"detailsModalLabel","aria-hidden":"true"},Y={class:"modal-dialog modal-lg"},q={class:"modal-content"},G=(0,o.Lk)("div",{class:"modal-header"},[(0,o.Lk)("h5",{class:"modal-title",id:"detailsModalLabel"},"計算詳細資料"),(0,o.Lk)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),H={class:"modal-body"},Z={class:"table"},ee=(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[(0,o.Lk)("th",{scope:"col"},"名稱"),(0,o.Lk)("th",{scope:"col"},"重量/距離"),(0,o.Lk)("th",{scope:"col"},"碳排放量(kg CO₂e)"),(0,o.Lk)("th",{scope:"col"},"資料來源"),(0,o.Lk)("th",{scope:"col"},[(0,o.eW)("資料分級 "),(0,o.Lk)("i",{class:"bi bi-info-circle",style:{cursor:"pointer"},"data-bs-toggle":"modal","data-bs-target":"#infoModal"})])])],-1),ae=(0,o.Lk)("tr",null,[(0,o.Lk)("td",{colspan:"5"},[(0,o.Lk)("strong",null,"食材類")])],-1),te=(0,o.Lk)("tr",null,[(0,o.Lk)("td",{colspan:"5"},[(0,o.Lk)("strong",null,"能源類")])],-1),ne=(0,o.Lk)("tr",null,[(0,o.Lk)("td",{colspan:"5"},[(0,o.Lk)("strong",null,"運輸類")])],-1),oe=(0,o.Lk)("div",{class:"modal-footer"},[(0,o.Lk)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"關閉")],-1),le=(0,o.Fv)('<div class="modal fade" id="infoModal" tabindex="-1" aria-labelledby="infoModalLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="infoModalLabel">資料來源分級說明</h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body"><img src="'+i+'" alt="資料來源分級說明" class="img-fluid"></div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-bs-dismiss="modal">關閉</button></div></div></div></div>',1),ie=(0,o.Fv)('<footer class="custom-footer"><div class="container"><div class="row"><div class="d-md-none text-center position-relative"><div class="mb-3"><img src="'+s+'" alt="First Logo" class="footer-logo"></div><div class="mb-3 footer-text-container"><p class="footer-text text-center"> © 113數位發展部公民科技試驗場域開發案 <br> Developed by 減碳慢食小餐館 </p></div><div class="small-logo"><img src="'+r+'" alt="MODA Logo" class="footer-logo"></div></div><div class="d-none d-md-flex col-md-6 text-md-start text-center logo-container"><div><img src="'+s+'" alt="First Logo" class="footer-logo"></div><div><p class="footer-text"> © 113數位發展部公民科技試驗場域開發案 <br> Developed by 減碳慢食小餐館 </p></div></div><div class="d-none d-md-flex col-md-6 text-md-end text-center logo-container"><div style="margin-left:auto;"><img src="'+r+'" alt="MODA Logo" class="footer-logo"></div></div></div></div></footer>',1);function se(e,a,t,i,s,r){return(0,o.uX)(),(0,o.CE)("div",d,[c,(0,o.Lk)("main",null,[(0,o.Lk)("section",u,[m,((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(i.ingredientsForFood,((e,t)=>((0,o.uX)(),(0,o.CE)("div",{class:"ingredient-row",key:t},[(0,o.bo)((0,o.Lk)("select",{class:"ingredient-category","onUpdate:modelValue":a=>e.category=a,onChange:e=>i.fetchItems(t,"food")},[g,((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(i.categories.filter((e=>2===e.category_type)),(e=>((0,o.uX)(),(0,o.CE)("option",{key:e.category_id,value:e.category_id},(0,l.v_)(e.category_name),9,p)))),128))],40,v),[[n.u1,e.category]]),(0,o.bo)((0,o.Lk)("select",{class:"ingredient-name","onUpdate:modelValue":a=>e.name=a,onChange:e=>i.updateCarbonEmission(t,"food")},[f,((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.items,(e=>((0,o.uX)(),(0,o.CE)("option",{key:e.item_id,value:e.item_id},(0,l.v_)(e.item_name),9,h)))),128))],40,b),[[n.u1,e.name]]),(0,o.bo)((0,o.Lk)("input",{type:"number",class:"ingredient-weight","onUpdate:modelValue":a=>e.weight=a,onInput:e=>i.updateCarbonEmission(t,"food"),placeholder:e.unit||"請輸入數值"},null,40,k),[[n.Jo,e.weight,void 0,{number:!0}]]),(0,o.Lk)("button",{class:"add-row",onClick:a[0]||(a[0]=e=>i.addRow("food"))},"+")])))),128))])]),(0,o.Lk)("main",null,[(0,o.Lk)("section",y,[_,((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(i.ingredientsForEnergy,((e,t)=>((0,o.uX)(),(0,o.CE)("div",{class:"ingredient-row",key:t},[(0,o.bo)((0,o.Lk)("select",{class:"ingredient-category","onUpdate:modelValue":a=>e.category=a,onChange:e=>i.fetchItems(t,"energy")},[C,((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(i.categories.filter((e=>3===e.category_type)),(e=>((0,o.uX)(),(0,o.CE)("option",{key:e.category_id,value:e.category_id},(0,l.v_)(e.category_name),9,E)))),128))],40,L),[[n.u1,e.category]]),(0,o.bo)((0,o.Lk)("select",{class:"ingredient-name","onUpdate:modelValue":a=>e.name=a,onChange:e=>i.updateCarbonEmission(t,"energy")},[F,((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.items,(e=>((0,o.uX)(),(0,o.CE)("option",{key:e.item_id,value:e.item_id},(0,l.v_)(e.item_name),9,x)))),128))],40,w),[[n.u1,e.name]]),(0,o.bo)((0,o.Lk)("input",{type:"number",class:"ingredient-weight","onUpdate:modelValue":a=>e.weight=a,onInput:e=>i.updateCarbonEmission(t,"energy"),placeholder:e.unit||"請輸入數值"},null,40,X),[[n.Jo,e.weight,void 0,{number:!0}]]),(0,o.Lk)("button",{class:"add-row",onClick:a[1]||(a[1]=e=>i.addRow("energy"))},"+")])))),128))])]),(0,o.Lk)("main",null,[(0,o.Lk)("section",I,[K,((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(i.ingredientsForTransport,((e,t)=>((0,o.uX)(),(0,o.CE)("div",{class:"ingredient-row",key:t},[(0,o.bo)((0,o.Lk)("select",{class:"ingredient-category","onUpdate:modelValue":a=>e.category=a,onChange:e=>i.fetchItems(t,"transport")},[U,((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(i.categories.filter((e=>1===e.category_type)),(e=>((0,o.uX)(),(0,o.CE)("option",{key:e.category_id,value:e.category_id},(0,l.v_)(e.category_name),9,V)))),128))],40,O),[[n.u1,e.category]]),(0,o.bo)((0,o.Lk)("select",{class:"ingredient-name","onUpdate:modelValue":a=>e.name=a,onChange:e=>i.updateCarbonEmission(t,"transport")},[R,((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.items,(e=>((0,o.uX)(),(0,o.CE)("option",{key:e.item_id,value:e.item_id},(0,l.v_)(e.item_name),9,D)))),128))],40,M),[[n.u1,e.name]]),(0,o.bo)((0,o.Lk)("input",{type:"number",class:"ingredient-weight","onUpdate:modelValue":a=>e.weight=a,onInput:e=>i.updateCarbonEmission(t,"transport"),placeholder:e.unit||"請輸入數值"},null,40,T),[[n.Jo,e.weight,void 0,{number:!0}]]),(0,o.Lk)("button",{class:"add-row",onClick:a[2]||(a[2]=e=>i.addRow("transport"))},"+")])))),128))])]),(0,o.Lk)("main",null,[(0,o.Lk)("div",j,[(0,o.Lk)("button",{class:"reset-button",onClick:a[3]||(a[3]=(...e)=>i.resetCalculator&&i.resetCalculator(...e))},"重新計算"),(0,o.Lk)("button",{class:"calculate-button",onClick:a[4]||(a[4]=(...e)=>i.calculateEmissions&&i.calculateEmissions(...e))},"計算碳排放")]),(0,o.Lk)("section",S,[A,(0,o.Lk)("p",W,(0,l.v_)(i.totalEmission.toFixed(2))+" kg CO₂e",1),(0,o.Lk)("div",P,[(0,o.Lk)("p",null,[(0,o.Lk)("span",B,(0,l.v_)(i.treesSaved),1),(0,o.eW)(" 棵樹木一個月的吸收量")])]),(0,o.Lk)("div",J,[(0,o.Lk)("div",N,[i.totalEmission>0?((0,o.uX)(),(0,o.CE)("canvas",Q)):(0,o.Q3)("",!0)])]),(0,o.Lk)("div",null,[i.totalEmission>0?((0,o.uX)(),(0,o.CE)("button",$," 詳細資料 ")):(0,o.Q3)("",!0)])]),(0,o.Lk)("div",z,[(0,o.Lk)("div",Y,[(0,o.Lk)("div",q,[G,(0,o.Lk)("div",H,[(0,o.Lk)("table",Z,[ee,(0,o.Lk)("tbody",null,[ae,((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(i.foodData,(e=>((0,o.uX)(),(0,o.CE)("tr",{key:e.item_name},[(0,o.Lk)("td",null,(0,l.v_)(e.item_name),1),(0,o.Lk)("td",null,(0,l.v_)(e.input_value),1),(0,o.Lk)("td",null,(0,l.v_)(e.carbon_emission.toFixed(4)),1),(0,o.Lk)("td",null,(0,l.v_)(e.source),1),(0,o.Lk)("td",null,(0,l.v_)(e.level),1)])))),128)),te,((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(i.energyData,(e=>((0,o.uX)(),(0,o.CE)("tr",{key:e.item_name},[(0,o.Lk)("td",null,(0,l.v_)(e.item_name),1),(0,o.Lk)("td",null,(0,l.v_)(e.input_value),1),(0,o.Lk)("td",null,(0,l.v_)(e.carbon_emission.toFixed(4)),1),(0,o.Lk)("td",null,(0,l.v_)(e.source),1),(0,o.Lk)("td",null,(0,l.v_)(e.level),1)])))),128)),ne,((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(i.transportData,(e=>((0,o.uX)(),(0,o.CE)("tr",{key:e.item_name},[(0,o.Lk)("td",null,(0,l.v_)(e.item_name),1),(0,o.Lk)("td",null,(0,l.v_)(e.input_value),1),(0,o.Lk)("td",null,(0,l.v_)(e.carbon_emission.toFixed(4)),1),(0,o.Lk)("td",null,(0,l.v_)(e.source),1),(0,o.Lk)("td",null,(0,l.v_)(e.level),1)])))),128))])])]),oe])])]),le]),ie])}t(4114);var re=t(144),de=t(4781),ce=t(6912);t(323);ce.t1.register(...ce.$L);var ue={setup(){const e=(0,re.KR)([]),a="7",t="1",n=(0,re.KR)([{category:"",name:"",weight:"",items:[],carbon_emission:0}]),l=(0,re.KR)([{category:a,name:"",weight:"",items:[],carbon_emission:0}]),i=(0,re.KR)([{category:t,name:"",weight:"",items:[],carbon_emission:0}]),s=(0,re.KR)(0),r=(0,re.KR)(0),d=(0,re.KR)(0),c=(0,re.KR)(null),u=()=>{de.A.get("http://localhost:3001/api/categories").then((a=>{e.value=a.data;const t=e.value.find((e=>"烹煮能源類"===e.category_name));t&&(l.value[0].category=t.category_id,m(0,"energy"));const n=e.value.find((e=>"運輸類"===e.category_name));n&&(i.value[0].category=n.category_id,m(0,"transport"))})).catch((e=>{console.error("There was an error fetching categories!",e)}))},m=(e,a)=>{let t;"food"===a?t=n:"energy"===a?t=l:"transport"===a&&(t=i);const o=t.value[e].category;o&&de.A.get(`http://localhost:3001/api/items/${o}`).then((a=>{t.value[e].items=a.data,t.value[e].name=""})).catch((e=>{console.error("There was an error fetching items!",e)}))};u();const v=(e,a)=>{let t;"food"===a?t=n:"energy"===a?t=l:"transport"===a&&(t=i);const o=t.value[e];o.weight<0&&(alert("重量不可為負值！"),o.weight=0);const s=o.items.find((e=>e.item_id===o.name));s?(o.carbon_emission=s.carbon_emission*o.weight,o.unit=s.unit||""):(o.carbon_emission=0,o.unit="")},g=e=>{let a=null;"food"===e?(a={category:"",name:"",weight:"",items:[],carbon_emission:0},n.value.push(a),m(n.value.length-1,"food")):"energy"===e?(a={category:"7",name:"",weight:"",items:[],carbon_emission:0},l.value.push(a),m(l.value.length-1,"energy")):"transport"===e&&(a={category:"1",name:"",weight:"",items:[],carbon_emission:0},i.value.push(a),m(i.value.length-1,"transport"))},p=(0,re.KR)([]),b=(0,o.EW)((()=>p.value.filter((e=>"食材類"===e.category)))),f=(0,o.EW)((()=>p.value.filter((e=>"能源類"===e.category)))),h=(0,o.EW)((()=>p.value.filter((e=>"運輸類"===e.category)))),k=()=>{const e=n.value.reduce(((e,a)=>e+a.carbon_emission),0),a=l.value.reduce(((e,a)=>e+a.carbon_emission),0),t=i.value.reduce(((e,a)=>e+a.carbon_emission),0);s.value=e+a+t,r.value=5*s.value,d.value=(s.value/.625).toFixed(1),p.value=[...n.value.map((e=>({category:"食材類",item_name:e.items.find((a=>a.item_id===e.name))?.item_name||"",input_value:e.weight,carbon_emission:e.carbon_emission,source:e.items.find((a=>a.item_id===e.name))?.source||"未知來源",level:e.items.find((a=>a.item_id===e.name))?.level||"未知"}))),...l.value.map((e=>({category:"能源類",item_name:e.items.find((a=>a.item_id===e.name))?.item_name||"",input_value:e.weight,carbon_emission:e.carbon_emission,source:e.items.find((a=>a.item_id===e.name))?.source||"未知來源",level:e.items.find((a=>a.item_id===e.name))?.level||"未知"}))),...i.value.map((e=>({category:"運輸類",item_name:e.items.find((a=>a.item_id===e.name))?.item_name||"",input_value:e.weight,carbon_emission:e.carbon_emission,source:e.items.find((a=>a.item_id===e.name))?.source||"未知來源",level:e.items.find((a=>a.item_id===e.name))?.level||"未知"})))],s.value>0&&(0,o.dY)((()=>{y(e,a,t)}))},y=(e,a,t)=>{const n=document.getElementById("emissionChart")?.getContext("2d");n?(c.value&&c.value.destroy(),c.value=new ce.t1(n,{type:"pie",data:{labels:["食材類","能源類","運輸類"],datasets:[{label:"碳排放比例",data:[e/s.value*100,a/s.value*100,t/s.value*100],backgroundColor:["#FF6384","#36A2EB","#FFCE56"],hoverOffset:4}]},options:{responsive:!0,plugins:{legend:{position:"bottom"},tooltip:{callbacks:{label:function(e){return e.label+": "+e.raw.toFixed(2)+"%"}}}}}})):console.error("Canvas element not found")},_=()=>{n.value=[{category:"",name:"",weight:"",items:[],carbon_emission:0}],l.value=[{category:"7",name:"",weight:"",items:[],carbon_emission:0}],m(0,"energy"),i.value=[{category:"1",name:"",weight:"",items:[],carbon_emission:0}],m(0,"transport"),s.value=0,r.value=0,d.value=0,c.value&&c.value.destroy()};return u(),{categories:e,ingredientsForFood:n,ingredientsForEnergy:l,ingredientsForTransport:i,totalEmission:s,carTravel:r,treesSaved:d,fetchItems:m,updateCarbonEmission:v,addRow:g,calculateEmissions:k,resetCalculator:_,detailedData:p,foodData:b,energyData:f,transportData:h}},mounted(){const e=document.getElementById("emissionChart");e&&(e.height=400)}},me=t(1241);const ve=(0,me.A)(ue,[["render",se]]);var ge=ve;(0,n.Ef)(ge).mount("#app")}},a={};function t(n){var o=a[n];if(void 0!==o)return o.exports;var l=a[n]={exports:{}};return e[n].call(l.exports,l,l.exports,t),l.exports}t.m=e,function(){var e=[];t.O=function(a,n,o,l){if(!n){var i=1/0;for(c=0;c<e.length;c++){n=e[c][0],o=e[c][1],l=e[c][2];for(var s=!0,r=0;r<n.length;r++)(!1&l||i>=l)&&Object.keys(t.O).every((function(e){return t.O[e](n[r])}))?n.splice(r--,1):(s=!1,l<i&&(i=l));if(s){e.splice(c--,1);var d=o();void 0!==d&&(a=d)}}return a}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[n,o,l]}}(),function(){t.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(a,{a:a}),a}}(),function(){t.d=function(e,a){for(var n in a)t.o(a,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:a[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p=""}(),function(){var e={524:0};t.O.j=function(a){return 0===e[a]};var a=function(a,n){var o,l,i=n[0],s=n[1],r=n[2],d=0;if(i.some((function(a){return 0!==e[a]}))){for(o in s)t.o(s,o)&&(t.m[o]=s[o]);if(r)var c=r(t)}for(a&&a(n);d<i.length;d++)l=i[d],t.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return t.O(c)},n=self["webpackChunkcarbon_calculator"]=self["webpackChunkcarbon_calculator"]||[];n.forEach(a.bind(null,0)),n.push=a.bind(null,n.push.bind(n))}();var n=t.O(void 0,[504],(function(){return t(2043)}));n=t.O(n)})();
//# sourceMappingURL=app.47b0e0ac.js.map