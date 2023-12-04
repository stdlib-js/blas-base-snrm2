"use strict";var l=function(s,e){return function(){return e||s((e={exports:{}}).exports,e),e.exports}};var y=l(function(D,p){
var _=require('@stdlib/math-base-special-sqrtf/dist'),m=require('@stdlib/math-base-special-absf/dist'),u=require('@stdlib/number-float64-base-to-float32/dist');function E(s,e,f){var t,r,a,i,v;if(s<=0||f<=0)return 0;if(s===1)return m(e[0]);for(t=0,r=1,s*=f,v=0;v<s;v+=f)e[v]!==0&&(a=m(e[v]),t<a?(i=u(t/a),r=u(1+u(r*u(i*i))),t=a):(i=u(a/t),r=u(r+u(i*i))));return u(t*_(r))}p.exports=E
});var b=l(function(G,x){
var O=require('@stdlib/math-base-special-sqrtf/dist'),j=require('@stdlib/math-base-special-absf/dist'),n=require('@stdlib/number-float64-base-to-float32/dist');function g(s,e,f,t){var r,a,i,v,q,o;if(s<=0)return 0;if(s===1)return j(e[t]);for(v=t,r=0,a=1,o=0;o<s;o++)e[v]!==0&&(i=j(e[v]),r<i?(q=n(r/i),a=n(1+n(a*n(q*q))),r=i):(q=n(i/r),a=n(a+n(q*q)))),v+=f;return n(r*O(a))}x.exports=g
});var R=l(function(H,F){
var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=y(),k=b();h(d,"ndarray",k);F.exports=d
});var w=require("path").join,z=require('@stdlib/utils-try-require/dist'),A=require('@stdlib/assert-is-error/dist'),B=R(),c,T=z(w(__dirname,"./native.js"));A(T)?c=B:c=T;module.exports=c;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
