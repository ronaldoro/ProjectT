(function(t){function e(e){for(var r,i,o=e[0],u=e[1],c=e[2],f=0,d=[];f<o.length;f++)i=o[f],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&d.push(s[i][0]),s[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(d.length)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,o=1;o<n.length;o++){var u=n[o];0!==s[u]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},s={app:0},a=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var l=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0dba":function(t,e,n){t.exports=n.p+"img/startLogo.010d539b.png"},"36a7":function(t,e,n){},"55c0":function(t,e,n){"use strict";n("36a7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"content",attrs:{id:"content"}},[n("Header"),n("router-view"),n("Footer")],1)])},a=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"HeaderSection"},[t._v(" 역휘는 광고칸 ")])},o=[],u={name:"Header"},c=u,l=(n("8df4"),n("2877")),f=Object(l["a"])(c,i,o,!1,null,"db717bd2",null),d=f.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"FooterSection"},[t._v(" 역휘도 광고칸 ")])},h=[],p={name:"Footer"},b=p,_=(n("feef"),Object(l["a"])(b,v,h,!1,null,"72b42547",null)),w=_.exports,m={name:"Home",components:{Header:d,Footer:w}},g=m,x=Object(l["a"])(g,s,a,!1,null,null,null),S=x.exports,y=n("8c4f"),C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"HomebackGround"},[t._m(0),t._m(1),t._m(2),n("div",[n("button",{staticClass:"startNonvisual startPen startBrush",attrs:{type:"button"},on:{click:t.start,mouseover:t.over2}},[t._v("테스트 시작")])]),t._m(3)])},I=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"subTitle"},[t._v(" MBTI로 알아보는"),n("br")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",{staticClass:"Title"},[t._v("내가 무한도전 멤버라면 ?")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("img",{staticClass:"imageLogo",attrs:{src:n("0dba")}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"adText"},[t._v(" 광고 문의"),n("br"),t._v(" wnsh3131@naver.com"),n("br"),t._v(" All Right Reserved. 2021. J&S."),n("br")])}],O={data:function(){return{answerIndex:"1",answerString1:"1-1번 답변을 선택합니다."}},methods:{start:function(){this.$router.push({path:"InfiniteChallenge_Question"})}}},$=O,j=(n("55c0"),Object(l["a"])($,C,I,!1,null,"5c6ac71e",null)),E=j.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"HomebackGround"},[n("div",[n("h1",{staticClass:"qustionText"},[t._v(t._s(t.questionString))])]),n("div",[n("button",{staticClass:"answerNonvisual answerPen answerBrush",attrs:{type:"button"},on:{click:t.answer1}},[t._v(t._s(t.answerString1))])]),n("div",[n("button",{staticClass:"answer2Nonvisual answerPen answer2Brush",attrs:{type:"button"},on:{click:t.answer2,mouseover:t.over2}},[t._v(t._s(t.answerString2))])]),t._m(0)])},T=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"adText"},[t._v(" 광고 문의"),n("br"),t._v(" wnsh3131@naver.com"),n("br"),t._v(" All Right Reserved. 2021. J&S."),n("br")])}],k={data:function(){return{answerIndex:"1",questionString:"1번 질문입니다.",answerString1:"1-1번 답변을 선택합니다.",answerString2:"1-2번 답변을 선택합니다.",answerClass:"answerNonvisual answerPen"}},methods:{answer1:function(){var t=parseInt(this.answerIndex,10);t+=1,t>5&&this.$router.push({path:"about"}),this.answerIndex=t,this.questionString=this.answerIndex+"번 질문입니다.",this.answerString1=this.answerIndex+"-1번 답변을 선택합니다.",this.answerString2=this.answerIndex+"-2번 답변을 선택합니다."},answer2:function(){var t=parseInt(this.answerIndex,10);t+=1,t>5&&this.$router.push({path:"about"}),this.answerIndex=t,this.questionString=this.answerIndex+"번 질문입니다.",this.answerString1=this.answerIndex+"-1번 답변을 선택합니다.",this.answerString2=this.answerIndex+"-2번 답변을 선택합니다."},over2:function(){}}},H=k,q=(n("a4cc"),Object(l["a"])(H,P,T,!1,null,"9de699f2",null)),M=q.exports,B=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},F=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("테스트 종료!!")])])}],J={},N=J,R=Object(l["a"])(N,B,F,!1,null,null,null),A=R.exports;r["default"].use(y["a"]);var G=new y["a"]({routes:[{path:"/",component:E},{path:"/InfiniteChallenge_Question",component:M},{path:"/about",component:A}]}),L=G,Q=n("5f5b"),z=n("b1e0");n("f9e3"),n("2dd8");r["default"].use(Q["a"]),r["default"].use(z["a"]),r["default"].config.productionTip=!1,new r["default"]({router:L,render:function(t){return t(S)}}).$mount("#app")},"5bb5":function(t,e,n){},"8df4":function(t,e,n){"use strict";n("5bb5")},a4cc:function(t,e,n){"use strict";n("dbd4")},dbd4:function(t,e,n){},ead5:function(t,e,n){},feef:function(t,e,n){"use strict";n("ead5")}});
//# sourceMappingURL=app.ffb8106c.js.map