(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{302:function(t,o,e){var content=e(306);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(42).default)("7a0d8a69",content,!0,{sourceMap:!1})},305:function(t,o,e){"use strict";e(302)},306:function(t,o,e){var r=e(41)(!1);r.push([t.i,".cabeza-uno[data-v-415e2d84]{background-size:cover!important;background-position:50%!important;color:#fff;text-shadow:0 2.88307px 2.88307px rgba(0,0,0,.25);padding:60px}h1[data-v-415e2d84]{margin:0}.presentacion[data-v-415e2d84]{margin-top:6em;width:min(94vw,514px)}.botones[data-v-415e2d84]{margin-top:3em;display:flex;flex-direction:row;grid-gap:10px;gap:10px}.play[data-v-415e2d84]{height:14px}.verde[data-v-415e2d84]{background-color:#b6f772}.verde[data-v-415e2d84]:hover{background-color:#90e538}",""]),t.exports=r},309:function(t,o,e){"use strict";e.r(o);var r={name:"cabezaUno",props:["titulo","video","texto","color","yutu"],methods:{verVideo:function(){this.$store.commit("verEsteVideo",this.yutu),this.$store.commit("cambiarCinema")}}},n=(e(305),e(21)),component=Object(n.a)(r,(function(){var t=this,o=t._self._c;return o("div",{staticClass:"cabeza-uno",style:"background: linear-gradient(90deg, rgba(0, 0, 0, 0.69) 20.34%, rgba(0, 0, 0, 0) 96.35%), linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(/"+t.video+"bg.jpg); border-top: solid 8px "+t.$store.state.colores[t.color]},[o("N-Link",{attrs:{to:"/"}},[o("img",{attrs:{src:"/logo.png"}})]),o("div",{staticClass:"presentacion"},[o("h1",[t._v(t._s(t.titulo)+" ")]),o("p",[t._v(t._s(t.texto))]),o("div",{staticClass:"botones"},[o("button",{on:{click:t.verVideo}},[o("imgPlay",{staticClass:"play"}),o("span",[t._v("Reproducir")])],1),o("button",{staticClass:"verde",on:{click:function(o){return t.$store.commit("cambiarMasVideos")}}},[o("imgInfo"),o("span",[t._v("Más videos")])],1)])])],1)}),[],!1,null,"415e2d84",null);o.default=component.exports}}]);