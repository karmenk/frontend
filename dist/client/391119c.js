(window.webpackJsonp=window.webpackJsonp||[]).push([[4,3],{440:function(t,e,n){var content=n(584);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(157).default)("141f8560",content,!0,{sourceMap:!1})},441:function(t,e,n){var content=n(586);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(157).default)("74d66a80",content,!0,{sourceMap:!1})},442:function(t,e,n){var content=n(588);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(157).default)("69a17c8e",content,!0,{sourceMap:!1})},443:function(t,e,n){var content=n(590);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(157).default)("66dbdb1a",content,!0,{sourceMap:!1})},444:function(t,e,n){"use strict";n.r(e);var r={computed:{user:function(){return(this.$store.state.auth||{}).username||null}},methods:{logOut:function(){var t=this;this.$store.dispatch("auth/reset").then((function(){t.$router.push("/login")}))}}},o=(n(583),n(42)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container header"},[t._m(0),t._v(" "),n("div",{staticClass:"account"},[t.user?n("p",[t._v("\n      Welcome, "+t._s(t.user)+"\n    ")]):t._e(),t._v(" "),t.user?n("div",{staticClass:"account-button"},[n("a",{staticClass:"btn primary",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.logOut()}}},[t._v("Log out")])]):t._e()])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v("Dashboard")])])}],!1,null,null,null);e.default=component.exports},445:function(t,e,n){"use strict";n.r(e);n(100),n(267),n(44),n(268),n(158),n(43),n(99);var r=n(446),o=n(447),l={components:{Card:r.default,Chart:o.default},props:{readings:{type:Array,default:null}},data:function(){return{chartData:{labels:["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23"],datasets:[{label:"Test",backgroundColor:"rgba(255, 206, 86, 1)",data:this.getData(this.readings)}]},chartOptions:{responsive:!0,maintainAspectRatio:!1,scales:{yAxes:[{ticks:{beginAtZero:!0}}]},legend:{display:!1}}}},methods:{getTotal:function(t){return t.map((function(t){return parseInt(t.reading)})).reduce((function(a,b){return a+b}),0)},getData:function(t){if(!t.length)return[];for(var e=t[0].time.slice(11,13),n=this.getLabels(),r=n.concat(n[0]).indexOf(e)+1,data=[],i=0;i<n.length;i++)if(i<r)data.push(0);else{if(i>=t.length+r)break;data.push(t[i-r].reading)}return data.slice(0,24)},getLabels:function(){return["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23"]},onClickButton:function(t){var e=new Date;if("today"===t)this.$emit("clicked",e.toISOString().split("T")[0]);else{var n=e.setDate(e.getDate()-1);console.log(new Date(n)),console.log("yesterday:",new Date(n).toISOString().split("T")[0]),this.$emit("clicked",new Date(n).toISOString().split("T")[0])}}}},c=(n(587),n(42)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container graph"},[n("div",{staticClass:"legend"},[n("Card",{attrs:{total:t.getTotal(t.readings)}}),t._v(" "),n("div",{staticClass:"day"},[n("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.onClickButton("yesterday")}}},[t._v("yesterday")]),t._v(" "),n("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.onClickButton("today")}}},[t._v("today")])])],1),t._v(" "),n("div",{staticClass:"chart"},[n("Chart",{attrs:{chartdata:t.chartData,options:t.chartOptions}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Card:n(446).default,Chart:n(447).default})},446:function(t,e,n){"use strict";n.r(e);n(591);var r={props:{total:{type:Number,default:0}}},o=(n(585),n(42)),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container card"},[e("div",[e("p",[this._v("Day total: "+this._s(this.total))])])])}),[],!1,null,null,null);e.default=component.exports},447:function(t,e,n){"use strict";n.r(e);var r={extends:n(596).a,props:{chartdata:{type:Object,default:null},options:{type:Object,default:null}},mounted:function(){this.renderChart(this.chartdata,this.options)}},o=n(42),component=Object(o.a)(r,void 0,void 0,!1,null,null,null);e.default=component.exports},583:function(t,e,n){"use strict";n(440)},584:function(t,e,n){(e=n(156)(!1)).push([t.i,".header{min-height:4rem;justify-content:space-between;background-color:#4682b4;color:#fff;padding:2rem 14rem}.account,.header{flex-direction:row;align-items:center}.account{display:flex}.account-button{margin:1rem;background-color:#18567d;padding:.6rem 1rem}.account-button a{text-decoration:none;color:#fff}",""]),t.exports=e},585:function(t,e,n){"use strict";n(441)},586:function(t,e,n){(e=n(156)(!1)).push([t.i,".card{background-color:#e8ecef;width:10rem;height:5rem;align-items:center;justify-content:center;color:#2f2f2f}",""]),t.exports=e},587:function(t,e,n){"use strict";n(442)},588:function(t,e,n){(e=n(156)(!1)).push([t.i,".graph{min-height:100vh;background-color:#f0f8ff;color:#000;flex-direction:column;padding:2rem 14rem}.legend{margin-bottom:3rem;display:flex;flex-direction:row}.chart{position:relative;left:50%;transform:translateX(-50%)}.day{display:flex;flex-grow:1;align-items:center;justify-content:space-evenly}.day a{color:#2f2f2f}",""]),t.exports=e},589:function(t,e,n){"use strict";n(443)},590:function(t,e,n){(e=n(156)(!1)).push([t.i,".dashboard{width:100vw;flex-direction:column}",""]),t.exports=e},592:function(t,e,n){var map={"./af":448,"./af.js":448,"./ar":449,"./ar-dz":450,"./ar-dz.js":450,"./ar-kw":451,"./ar-kw.js":451,"./ar-ly":452,"./ar-ly.js":452,"./ar-ma":453,"./ar-ma.js":453,"./ar-sa":454,"./ar-sa.js":454,"./ar-tn":455,"./ar-tn.js":455,"./ar.js":449,"./az":456,"./az.js":456,"./be":457,"./be.js":457,"./bg":458,"./bg.js":458,"./bm":459,"./bm.js":459,"./bn":460,"./bn-bd":461,"./bn-bd.js":461,"./bn.js":460,"./bo":462,"./bo.js":462,"./br":463,"./br.js":463,"./bs":464,"./bs.js":464,"./ca":465,"./ca.js":465,"./cs":466,"./cs.js":466,"./cv":467,"./cv.js":467,"./cy":468,"./cy.js":468,"./da":469,"./da.js":469,"./de":470,"./de-at":471,"./de-at.js":471,"./de-ch":472,"./de-ch.js":472,"./de.js":470,"./dv":473,"./dv.js":473,"./el":474,"./el.js":474,"./en-au":475,"./en-au.js":475,"./en-ca":476,"./en-ca.js":476,"./en-gb":477,"./en-gb.js":477,"./en-ie":478,"./en-ie.js":478,"./en-il":479,"./en-il.js":479,"./en-in":480,"./en-in.js":480,"./en-nz":481,"./en-nz.js":481,"./en-sg":482,"./en-sg.js":482,"./eo":483,"./eo.js":483,"./es":484,"./es-do":485,"./es-do.js":485,"./es-mx":486,"./es-mx.js":486,"./es-us":487,"./es-us.js":487,"./es.js":484,"./et":488,"./et.js":488,"./eu":489,"./eu.js":489,"./fa":490,"./fa.js":490,"./fi":491,"./fi.js":491,"./fil":492,"./fil.js":492,"./fo":493,"./fo.js":493,"./fr":494,"./fr-ca":495,"./fr-ca.js":495,"./fr-ch":496,"./fr-ch.js":496,"./fr.js":494,"./fy":497,"./fy.js":497,"./ga":498,"./ga.js":498,"./gd":499,"./gd.js":499,"./gl":500,"./gl.js":500,"./gom-deva":501,"./gom-deva.js":501,"./gom-latn":502,"./gom-latn.js":502,"./gu":503,"./gu.js":503,"./he":504,"./he.js":504,"./hi":505,"./hi.js":505,"./hr":506,"./hr.js":506,"./hu":507,"./hu.js":507,"./hy-am":508,"./hy-am.js":508,"./id":509,"./id.js":509,"./is":510,"./is.js":510,"./it":511,"./it-ch":512,"./it-ch.js":512,"./it.js":511,"./ja":513,"./ja.js":513,"./jv":514,"./jv.js":514,"./ka":515,"./ka.js":515,"./kk":516,"./kk.js":516,"./km":517,"./km.js":517,"./kn":518,"./kn.js":518,"./ko":519,"./ko.js":519,"./ku":520,"./ku.js":520,"./ky":521,"./ky.js":521,"./lb":522,"./lb.js":522,"./lo":523,"./lo.js":523,"./lt":524,"./lt.js":524,"./lv":525,"./lv.js":525,"./me":526,"./me.js":526,"./mi":527,"./mi.js":527,"./mk":528,"./mk.js":528,"./ml":529,"./ml.js":529,"./mn":530,"./mn.js":530,"./mr":531,"./mr.js":531,"./ms":532,"./ms-my":533,"./ms-my.js":533,"./ms.js":532,"./mt":534,"./mt.js":534,"./my":535,"./my.js":535,"./nb":536,"./nb.js":536,"./ne":537,"./ne.js":537,"./nl":538,"./nl-be":539,"./nl-be.js":539,"./nl.js":538,"./nn":540,"./nn.js":540,"./oc-lnc":541,"./oc-lnc.js":541,"./pa-in":542,"./pa-in.js":542,"./pl":543,"./pl.js":543,"./pt":544,"./pt-br":545,"./pt-br.js":545,"./pt.js":544,"./ro":546,"./ro.js":546,"./ru":547,"./ru.js":547,"./sd":548,"./sd.js":548,"./se":549,"./se.js":549,"./si":550,"./si.js":550,"./sk":551,"./sk.js":551,"./sl":552,"./sl.js":552,"./sq":553,"./sq.js":553,"./sr":554,"./sr-cyrl":555,"./sr-cyrl.js":555,"./sr.js":554,"./ss":556,"./ss.js":556,"./sv":557,"./sv.js":557,"./sw":558,"./sw.js":558,"./ta":559,"./ta.js":559,"./te":560,"./te.js":560,"./tet":561,"./tet.js":561,"./tg":562,"./tg.js":562,"./th":563,"./th.js":563,"./tk":564,"./tk.js":564,"./tl-ph":565,"./tl-ph.js":565,"./tlh":566,"./tlh.js":566,"./tr":567,"./tr.js":567,"./tzl":568,"./tzl.js":568,"./tzm":569,"./tzm-latn":570,"./tzm-latn.js":570,"./tzm.js":569,"./ug-cn":571,"./ug-cn.js":571,"./uk":572,"./uk.js":572,"./ur":573,"./ur.js":573,"./uz":574,"./uz-latn":575,"./uz-latn.js":575,"./uz.js":574,"./vi":576,"./vi.js":576,"./x-pseudo":577,"./x-pseudo.js":577,"./yo":578,"./yo.js":578,"./zh-cn":579,"./zh-cn.js":579,"./zh-hk":580,"./zh-hk.js":580,"./zh-mo":581,"./zh-mo.js":581,"./zh-tw":582,"./zh-tw.js":582};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=592},594:function(t,e,n){var content=n(603);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(157).default)("1b7833da",content,!0,{sourceMap:!1})},595:function(t,e,n){"use strict";n.r(e);var header=n(444),r=n(445),o={components:{Header:header.default,Graph:r.default},props:{readings:{type:Array,default:null}},methods:{newChart:function(t){this.$emit("clicked",t)}}},l=(n(589),n(42)),component=Object(l.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container dashboard"},[e("Header"),this._v(" "),e("Graph",{attrs:{readings:this.readings},on:{clicked:this.newChart}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:n(444).default,Graph:n(445).default})},602:function(t,e,n){"use strict";n(594)},603:function(t,e,n){(e=n(156)(!1)).push([t.i,".container{display:flex}",""]),t.exports=e},605:function(t,e,n){"use strict";n.r(e);n(43),n(99);var r=n(13),o=n.n(r),l=n(595),c=n(23),d={components:{Dashboard:l.default},data:function(){return{data:[],componentKey:0}},mounted:function(){this.newChart((new Date).toISOString().split("T")[0])},methods:{newChart:function(t){var e=this;o.a.get(void 0+"/reading/"+this.$store.state.auth.clientId+"?d="+t,{headers:{authorization:"JWT "+Object(c.a)()}}).then((function(t){e.data=t.data,e.componentKey+=1})).catch((function(){}))}}},j=(n(602),n(42)),component=Object(j.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("Dashboard",{key:this.componentKey,attrs:{readings:this.data},on:{clicked:this.newChart}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);