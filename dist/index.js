"use strict";var b=function(s,i){return function(){return i||s((i={exports:{}}).exports,i),i.exports}};var g=b(function(Q,A){
var _=require('@stdlib/constants-float32-max/dist'),e=require('@stdlib/number-float64-base-to-float32/dist'),X=require('@stdlib/math-base-special-absf/dist'),d=require('@stdlib/math-base-special-abs2f/dist'),p=require('@stdlib/math-base-special-sqrtf/dist'),h=108420217e-27,k=450359963e7,E=377789319e14,m=132348898e-31;function w(s,i,q,l){var o,u,v,r,a,f,x,n,t,c,y;if(s<=0)return 0;for(c=l,o=!0,u=0,v=0,r=0,a=0,n=1,y=0;y<s;y++)t=X(i[c]),t>k?(v=e(v+d(t*m)),o=!1):t<h?o&&(a=e(a+d(t*E))):r=e(r+e(t*t)),c+=q;return v>0?((r>0||r>_||r!==r)&&(v=e(v+e(e(r*m)*m))),n=e(1/m),u=v):a>0?r>0||r>_||r!==r?(r=p(r),a=e(p(a)/E),a>r?(x=r,f=a):(x=a,f=r),n=1,u=e(e(f*f)*e(1+d(x/f)))):(n=e(1/E),u=a):(n=1,u=r),e(p(u)*n)}A.exports=w
});var R=b(function(S,O){
var z=require('@stdlib/strided-base-stride2offset/dist'),B=g();function C(s,i,q){var l=z(s,q);return B(s,i,q,l)}O.exports=C
});var M=b(function(U,L){
var D=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),F=R(),G=g();D(F,"ndarray",G);L.exports=F
});var H=require("path").join,I=require('@stdlib/utils-try-require/dist'),J=require('@stdlib/assert-is-error/dist'),K=M(),j,T=I(H(__dirname,"./native.js"));J(T)?j=K:j=T;module.exports=j;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
