// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty,t=Object.prototype,e=t.toString,o=t.__defineGetter__,u=t.__defineSetter__,i=t.__lookupGetter__,a=t.__lookupSetter__;var f=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,f){var c,y,l,v;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof f||null===f||"[object Array]"===e.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((y="value"in f)&&(i.call(r,n)||a.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=f.value,r.__proto__=c):r[n]=f.value),l="get"in f,v="set"in f,y&&(l||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&o&&o.call(r,n,f.get),v&&u&&u.call(r,n,f.set),r};function c(r,n,t){f(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}var y=Math.sqrt;function l(r){return Math.abs(r)}function v(r){return r!=r}var p=Math.floor;function b(r){return p(r)===r}function A(r){return b(r/2)}function w(r){return A(r>0?r-1:r+1)}var _=Number.POSITIVE_INFINITY,d=Number.NEGATIVE_INFINITY;function m(r){return r===_||r===d}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var h=Object.prototype.toString;var U=Object.prototype.hasOwnProperty;var j="function"==typeof Symbol?Symbol.toStringTag:"";var F=s&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,o,u;if(null==r)return h.call(r);t=r[j],u=j,n=null!=(o=r)&&U.call(o,u);try{r[j]=void 0}catch(n){return h.call(r)}return e=h.call(r),n?r[j]=t:delete r[j],e}:function(r){return h.call(r)},g="function"==typeof Uint32Array;var I="function"==typeof Uint32Array?Uint32Array:null;var O,S="function"==typeof Uint32Array?Uint32Array:void 0;O=function(){var r,n,t;if("function"!=typeof I)return!1;try{n=new I(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(g&&t instanceof Uint32Array||"[object Uint32Array]"===F(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?S:function(){throw new Error("not implemented")};var E=O,N="function"==typeof Float64Array;var H="function"==typeof Float64Array?Float64Array:null;var T,G="function"==typeof Float64Array?Float64Array:void 0;T=function(){var r,n,t;if("function"!=typeof H)return!1;try{n=new H([1,3.14,-3.14,NaN]),t=n,r=(N&&t instanceof Float64Array||"[object Float64Array]"===F(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?G:function(){throw new Error("not implemented")};var P=T,M="function"==typeof Uint8Array;var L="function"==typeof Uint8Array?Uint8Array:null;var V,W="function"==typeof Uint8Array?Uint8Array:void 0;V=function(){var r,n,t;if("function"!=typeof L)return!1;try{n=new L(n=[1,3.14,-3.14,256,257]),t=n,r=(M&&t instanceof Uint8Array||"[object Uint8Array]"===F(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?W:function(){throw new Error("not implemented")};var k=V,x="function"==typeof Uint16Array;var Y="function"==typeof Uint16Array?Uint16Array:null;var q,C="function"==typeof Uint16Array?Uint16Array:void 0;q=function(){var r,n,t;if("function"!=typeof Y)return!1;try{n=new Y(n=[1,3.14,-3.14,65536,65537]),t=n,r=(x&&t instanceof Uint16Array||"[object Uint16Array]"===F(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?C:function(){throw new Error("not implemented")};var z,B={uint16:q,uint8:k};(z=new B.uint16(1))[0]=4660;var D,J,K=52===new B.uint8(z.buffer)[0];!0===K?(D=1,J=0):(D=0,J=1);var Q={HIGH:D,LOW:J},R=new P(1),X=new E(R.buffer),Z=Q.HIGH,$=Q.LOW;function rr(r,n){return R[0]=n,r[0]=X[Z],r[1]=X[$],r}function nr(r,n){return 1===arguments.length?rr([0,0],r):rr(r,n)}var tr=!0===K?0:1,er=new P(1),or=new E(er.buffer);function ur(r,n){return er[0]=r,or[tr]=n>>>0,er[0]}function ir(r){return 0|r}var ar,fr,cr=!0===K?1:0,yr=new P(1),lr=new E(yr.buffer);function vr(r){return yr[0]=r,lr[cr]}!0===K?(ar=1,fr=0):(ar=0,fr=1);var pr={HIGH:ar,LOW:fr},br=new P(1),Ar=new E(br.buffer),wr=pr.HIGH,_r=pr.LOW;function dr(r,n){return Ar[wr]=r,Ar[_r]=n,br[0]}var mr=[0,0];function sr(r,n){var t,e;return nr(mr,r),t=mr[0],t&=2147483647,e=vr(n),dr(t|=e&=2147483648,mr[1])}var hr=!0===K?1:0,Ur=new P(1),jr=new E(Ur.buffer);function Fr(r,n){return Ur[0]=r,jr[hr]=n>>>0,Ur[0]}var gr=[1,1.5],Ir=[0,.5849624872207642],Or=[0,1.350039202129749e-8];function Sr(r,n,t,e){return v(r)||m(r)?(n[e]=r,n[e+t]=0,n):0!==r&&l(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}c((function(r){return Sr(r,[0,0],1,0)}),"assign",Sr);var Er=[0,0],Nr=[0,0];function Hr(r,n){var t,e;return 0===n||0===r||v(r)||m(r)?r:(Sr(r,Er,1,0),n+=Er[1],n+=function(r){var n=vr(r);return(n=(2146435072&n)>>>20)-1023|0}(r=Er[0]),n<-1074?sr(0,r):n>1023?r<0?d:_:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,nr(Nr,r),t=Nr[0],t&=2148532223,e*dr(t|=n+1023<<20,Nr[1])))}var Tr=1e300,Gr=1e-300,Pr=[0,0],Mr=[0,0];function Lr(r,n){var t,e,o,u,i,a,f,c,p,A,s,h,U,j;if(v(r)||v(n))return NaN;if(nr(Pr,n),i=Pr[0],0===Pr[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return y(r);if(-.5===n)return 1/y(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(m(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:l(r)<1==(n===_)?0:_}(r,n)}if(nr(Pr,r),u=Pr[0],0===Pr[1]){if(0===u)return function(r,n){return n===d?_:n===_?0:n>0?w(n)?r:0:w(n)?sr(_,r):_}(r,n);if(1===r)return 1;if(-1===r&&w(n))return-1;if(m(r))return r===d?Lr(-0,-n):n<0?0:_}if(r<0&&!1===b(n))return(r-r)/(r-r);if(o=l(r),t=2147483647&u|0,e=2147483647&i|0,f=i>>>31|0,a=(a=u>>>31|0)&&w(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&vr(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===f?a*Tr*Tr:a*Gr*Gr;if(t>1072693248)return 0===f?a*Tr*Tr:a*Gr*Gr;s=function(r,n){var t,e,o,u,i,a;return t=(i=1.9259629911266175e-8*(o=n-1)-o*o*(0===(a=o)?.5:.5+a*(.25*a-.3333333333333333))*1.4426950408889634)-((e=ur(e=(u=1.4426950216293335*o)+i,0))-u),r[0]=e,r[1]=t,r}(Mr,o)}else s=function(r,n,t){var e,o,u,i,a,f,c,y,l,v,p,b,A,w,_,d,m,s,h,U,j;return s=0,t<1048576&&(s-=53,t=vr(n*=9007199254740992)),s+=(t>>20)-1023|0,t=1072693248|(h=1048575&t|0),h<=235662?U=0:h<767610?U=1:(U=0,s+=1,t-=1048576),i=ur(o=(d=(n=Fr(n,t))-(c=gr[U]))*(m=1/(n+c)),0),e=524288+(t>>1|536870912),f=Fr(0,e+=U<<18),_=(u=o*o)*u*(0===(j=u)?.5999999999999946:.5999999999999946+j*(.4285714285785502+j*(.33333332981837743+j*(.272728123808534+j*(.23066074577556175+.20697501780033842*j))))),f=ur(f=3+(u=i*i)+(_+=(a=m*(d-i*f-i*(n-(f-c))))*(i+o)),0),A=(p=-7.028461650952758e-9*(l=ur(l=(d=i*f)+(m=a*f+(_-(f-3-u))*o),0))+.9617966939259756*(m-(l-d))+Or[U])-((b=ur(b=(v=.9617967009544373*l)+p+(y=Ir[U])+(w=s),0))-w-y-v),r[0]=b,r[1]=A,r}(Mr,o,t);if(A=(n-(c=ur(n,0)))*s[0]+n*s[1],p=c*s[0],nr(Pr,h=A+p),U=ir(Pr[0]),j=ir(Pr[1]),U>=1083179008){if(0!=(U-1083179008|j))return a*Tr*Tr;if(A+8008566259537294e-32>h-p)return a*Tr*Tr}else if((2147483647&U)>=1083231232){if(0!=(U-3230714880|j))return a*Gr*Gr;if(A<=h-p)return a*Gr*Gr}return h=function(r,n,t){var e,o,u,i,a,f,c,y,l,v,p;return v=((l=2147483647&r|0)>>20)-1023|0,y=0,l>1071644672&&(e=((y=r+(1048576>>v+1)>>>0)&~(1048575>>(v=((2147483647&y)>>20)-1023|0)))>>>0,y=(1048575&y|1048576)>>20-v>>>0,r<0&&(y=-y),n-=u=Fr(0,e)),r=ir(r=vr(c=1-((c=(i=.6931471824645996*(u=ur(u=t+n,0)))+(a=.6931471805599453*(t-(u-n))+-1.904654299957768e-9*u))*(o=c-(u=c*c)*(0===(p=u)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(o-2)-((f=a-(c-i))+c*f)-c))),(r+=y<<20>>>0)>>20<=0?Hr(c,y):Fr(c,r)}(U,p,A),a*h}var Vr="function"==typeof Math.fround?Math.fround:null,Wr="function"==typeof Float32Array;var kr="function"==typeof Float32Array?Float32Array:null;var xr,Yr="function"==typeof Float32Array?Float32Array:void 0;xr=function(){var r,n,t;if("function"!=typeof kr)return!1;try{n=new kr([1,3.14,-3.14,5e40]),t=n,r=(Wr&&t instanceof Float32Array||"[object Float32Array]"===F(t))&&1===n[0]&&3.140000104904175===n[1]&&-3.140000104904175===n[2]&&n[3]===_}catch(n){r=!1}return r}()?Yr:function(){throw new Error("not implemented")};var qr=new xr(1);var Cr="function"==typeof Vr?Vr:function(r){return qr[0]=r,qr[0]};function zr(r,n,t){var e,o,u,i;if(r<=0||t<=0)return 0;if(1===r)return l(n[0]);for(e=0,o=1,r*=t,i=0;i<r;i+=t)0!==n[i]&&(e<(u=l(n[i]))?(o=Cr(1+o*Lr(e/u,2)),e=u):o=Cr(o+Lr(u/e,2)));return Cr(e*y(o))}function Br(r,n,t,e){var o,u,i,a,f;if(r<=0)return 0;if(1===r)return l(n[e]);for(a=e,o=0,u=1,f=0;f<r;f++)0!==n[a]&&(o<(i=l(n[a]))?(u=Cr(1+u*Lr(o/i,2)),o=i):u=Cr(u+Lr(i/o,2))),a+=t;return Cr(o*y(u))}c(zr,"ndarray",Br);export{zr as default,Br as ndarray};
//# sourceMappingURL=mod.js.map