"use strict";var q=function(s,e){return function(){return e||s((e={exports:{}}).exports,e),e.exports}};var y=q(function(G,p){
var _=require('@stdlib/math-base-special-sqrt/dist'),c=require('@stdlib/math-base-special-abs/dist'),m=require('@stdlib/math-base-special-pow/dist'),o=require('@stdlib/number-float64-base-to-float32/dist');function E(s,e,t){var u,r,a,i;if(s<=0||t<=0)return 0;if(s===1)return c(e[0]);for(u=0,r=1,s*=t,i=0;i<s;i+=t)e[i]!==0&&(a=c(e[i]),u<a?(r=o(1+r*m(u/a,2)),u=a):r=o(r+m(a/u,2)));return o(u*_(r))}p.exports=E
});var d=q(function(H,b){
var O=require('@stdlib/math-base-special-sqrt/dist'),j=require('@stdlib/math-base-special-abs/dist'),x=require('@stdlib/math-base-special-pow/dist'),f=require('@stdlib/number-float64-base-to-float32/dist');function g(s,e,t,u){var r,a,i,v,n;if(s<=0)return 0;if(s===1)return j(e[u]);for(v=u,r=0,a=1,n=0;n<s;n++)e[v]!==0&&(i=j(e[v]),r<i?(a=f(1+a*x(r/i,2)),r=i):a=f(a+x(i/r,2))),v+=t;return f(r*O(a))}b.exports=g
});var R=q(function(I,F){
var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),w=y(),k=d();h(w,"ndarray",k);F.exports=w
});var z=require("path").join,A=require('@stdlib/utils-try-require/dist'),B=require('@stdlib/assert-is-error/dist'),C=R(),l,T=A(z(__dirname,"./native.js"));B(T)?l=C:l=T;module.exports=l;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
