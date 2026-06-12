"use strict";var b=function(s,i){return function(){try{return i||s((i={exports:{}}).exports,i),i.exports}catch(u){throw (i=0, u)}};};var g=b(function(Q,A){
var _=require('@stdlib/constants-float32-max/dist'),e=require('@stdlib/number-float64-base-to-float32/dist'),X=require('@stdlib/math-base-special-absf/dist'),d=require('@stdlib/math-base-special-abs2f/dist'),p=require('@stdlib/math-base-special-sqrtf/dist'),h=108420217e-27,k=450359963e7,E=377789319e14,m=132348898e-31;function w(s,i,u,l){var o,n,v,r,a,q,x,f,t,c,y;if(s<=0)return 0;for(c=l,o=!0,n=0,v=0,r=0,a=0,f=1,y=0;y<s;y++)t=X(i[c]),t>k?(v=e(v+d(t*m)),o=!1):t<h?o&&(a=e(a+d(t*E))):r=e(r+e(t*t)),c+=u;return v>0?((r>0||r>_||r!==r)&&(v=e(v+e(e(r*m)*m))),f=e(1/m),n=v):a>0?r>0||r>_||r!==r?(r=p(r),a=e(p(a)/E),a>r?(x=r,q=a):(x=a,q=r),f=1,n=e(e(q*q)*e(1+d(x/q)))):(f=e(1/E),n=a):(f=1,n=r),e(p(n)*f)}A.exports=w
});var R=b(function(S,O){
var z=require('@stdlib/strided-base-stride2offset/dist'),B=g();function C(s,i,u){var l=z(s,u);return B(s,i,u,l)}O.exports=C
});var M=b(function(U,L){
var D=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),F=R(),G=g();D(F,"ndarray",G);L.exports=F
});var H=require("path").join,I=require('@stdlib/utils-try-require/dist'),J=require('@stdlib/assert-is-error/dist'),K=M(),j,T=I(H(__dirname,"./native.js"));J(T)?j=K:j=T;module.exports=j;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
