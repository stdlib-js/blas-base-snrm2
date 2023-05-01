// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty,t=Object.prototype,e=t.toString,o=t.__defineGetter__,i=t.__defineSetter__,u=t.__lookupGetter__,a=t.__lookupSetter__;var f=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,f){var c,y,l,v;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof f||null===f||"[object Array]"===e.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((y="value"in f)&&(u.call(r,n)||a.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=f.value,r.__proto__=c):r[n]=f.value),l="get"in f,v="set"in f,y&&(l||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&o&&o.call(r,n,f.get),v&&i&&i.call(r,n,f.set),r};function c(r,n,t){f(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}var y=Math.sqrt;function l(r){return Math.abs(r)}function v(r){return r!=r}var p=Math.floor;function b(r){return p(r)===r}function s(r){return b(r/2)}function A(r){return s(r>0?r-1:r+1)}var w=Number.POSITIVE_INFINITY,_=Number.NEGATIVE_INFINITY;function d(r){return r===w||r===_}var m="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var h=Object.prototype.toString;var U=Object.prototype.hasOwnProperty;var g="function"==typeof Symbol?Symbol.toStringTag:"";var j=m&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,o,i;if(null==r)return h.call(r);t=r[g],i=g,n=null!=(o=r)&&U.call(o,i);try{r[g]=void 0}catch(n){return h.call(r)}return e=h.call(r),n?r[g]=t:delete r[g],e}:function(r){return h.call(r)},F="function"==typeof Uint32Array;var I="function"==typeof Uint32Array?Uint32Array:null;var O,S="function"==typeof Uint32Array?Uint32Array:void 0;O=function(){var r,n,t;if("function"!=typeof I)return!1;try{n=new I(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(F&&t instanceof Uint32Array||"[object Uint32Array]"===j(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?S:function(){throw new Error("not implemented")};var E=O,N="function"==typeof Float64Array;var H="function"==typeof Float64Array?Float64Array:null;var T,G="function"==typeof Float64Array?Float64Array:void 0;T=function(){var r,n,t;if("function"!=typeof H)return!1;try{n=new H([1,3.14,-3.14,NaN]),t=n,r=(N&&t instanceof Float64Array||"[object Float64Array]"===j(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?G:function(){throw new Error("not implemented")};var P=T,M="function"==typeof Uint8Array;var L="function"==typeof Uint8Array?Uint8Array:null;var V,W="function"==typeof Uint8Array?Uint8Array:void 0;V=function(){var r,n,t;if("function"!=typeof L)return!1;try{n=new L(n=[1,3.14,-3.14,256,257]),t=n,r=(M&&t instanceof Uint8Array||"[object Uint8Array]"===j(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?W:function(){throw new Error("not implemented")};var k=V,x="function"==typeof Uint16Array;var Y="function"==typeof Uint16Array?Uint16Array:null;var q,C="function"==typeof Uint16Array?Uint16Array:void 0;q=function(){var r,n,t;if("function"!=typeof Y)return!1;try{n=new Y(n=[1,3.14,-3.14,65536,65537]),t=n,r=(x&&t instanceof Uint16Array||"[object Uint16Array]"===j(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?C:function(){throw new Error("not implemented")};var z,B={uint16:q,uint8:k};(z=new B.uint16(1))[0]=4660;var D,J,K=52===new B.uint8(z.buffer)[0];!0===K?(D=1,J=0):(D=0,J=1);var Q={HIGH:D,LOW:J},R=new P(1),X=new E(R.buffer),Z=Q.HIGH,$=Q.LOW;function rr(r,n,t,e){return R[0]=r,n[e]=X[Z],n[e+t]=X[$],n}function nr(r){return rr(r,[0,0],1,0)}c(nr,"assign",rr);var tr=!0===K?0:1,er=new P(1),or=new E(er.buffer);function ir(r,n){return er[0]=r,or[tr]=n>>>0,er[0]}function ur(r){return 0|r}var ar,fr,cr=!0===K?1:0,yr=new P(1),lr=new E(yr.buffer);function vr(r){return yr[0]=r,lr[cr]}!0===K?(ar=1,fr=0):(ar=0,fr=1);var pr={HIGH:ar,LOW:fr},br=new P(1),sr=new E(br.buffer),Ar=pr.HIGH,wr=pr.LOW;function _r(r,n){return sr[Ar]=r,sr[wr]=n,br[0]}var dr=[0,0];function mr(r,n){var t,e;return nr.assign(r,dr,1,0),t=dr[0],t&=2147483647,e=vr(n),_r(t|=e&=2147483648,dr[1])}var hr=!0===K?1:0,Ur=new P(1),gr=new E(Ur.buffer);function jr(r,n){return Ur[0]=r,gr[hr]=n>>>0,Ur[0]}var Fr=[1,1.5],Ir=[0,.5849624872207642],Or=[0,1.350039202129749e-8];function Sr(r,n,t,e){return v(r)||d(r)?(n[e]=r,n[e+t]=0,n):0!==r&&l(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}c((function(r){return Sr(r,[0,0],1,0)}),"assign",Sr);var Er=[0,0],Nr=[0,0];function Hr(r,n){var t,e;return 0===n||0===r||v(r)||d(r)?r:(Sr(r,Er,1,0),n+=Er[1],n+=function(r){var n=vr(r);return(n=(2146435072&n)>>>20)-1023|0}(r=Er[0]),n<-1074?mr(0,r):n>1023?r<0?_:w:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,nr.assign(r,Nr,1,0),t=Nr[0],t&=2148532223,e*_r(t|=n+1023<<20,Nr[1])))}var Tr=1e300,Gr=1e-300,Pr=[0,0],Mr=[0,0];function Lr(r,n){var t,e,o,i,u,a,f,c,p,s,m,h,U,g;if(v(r)||v(n))return NaN;if(nr.assign(n,Pr,1,0),u=Pr[0],0===Pr[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return y(r);if(-.5===n)return 1/y(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(d(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:l(r)<1==(n===w)?0:w}(r,n)}if(nr.assign(r,Pr,1,0),i=Pr[0],0===Pr[1]){if(0===i)return function(r,n){return n===_?w:n===w?0:n>0?A(n)?r:0:A(n)?mr(w,r):w}(r,n);if(1===r)return 1;if(-1===r&&A(n))return-1;if(d(r))return r===_?Lr(-0,-n):n<0?0:w}if(r<0&&!1===b(n))return(r-r)/(r-r);if(o=l(r),t=2147483647&i|0,e=2147483647&u|0,f=u>>>31|0,a=(a=i>>>31|0)&&A(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&vr(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===f?a*Tr*Tr:a*Gr*Gr;if(t>1072693248)return 0===f?a*Tr*Tr:a*Gr*Gr;m=function(r,n){var t,e,o,i,u,a;return t=(u=1.9259629911266175e-8*(o=n-1)-o*o*(0===(a=o)?.5:.5+a*(.25*a-.3333333333333333))*1.4426950408889634)-((e=ir(e=(i=1.4426950216293335*o)+u,0))-i),r[0]=e,r[1]=t,r}(Mr,o)}else m=function(r,n,t){var e,o,i,u,a,f,c,y,l,v,p,b,s,A,w,_,d,m,h,U,g;return m=0,t<1048576&&(m-=53,t=vr(n*=9007199254740992)),m+=(t>>20)-1023|0,t=1072693248|(h=1048575&t|0),h<=235662?U=0:h<767610?U=1:(U=0,m+=1,t-=1048576),u=ir(o=(_=(n=jr(n,t))-(c=Fr[U]))*(d=1/(n+c)),0),e=524288+(t>>1|536870912),f=jr(0,e+=U<<18),w=(i=o*o)*i*(0===(g=i)?.5999999999999946:.5999999999999946+g*(.4285714285785502+g*(.33333332981837743+g*(.272728123808534+g*(.23066074577556175+.20697501780033842*g))))),f=ir(f=3+(i=u*u)+(w+=(a=d*(_-u*f-u*(n-(f-c))))*(u+o)),0),s=(p=-7.028461650952758e-9*(l=ir(l=(_=u*f)+(d=a*f+(w-(f-3-i))*o),0))+.9617966939259756*(d-(l-_))+Or[U])-((b=ir(b=(v=.9617967009544373*l)+p+(y=Ir[U])+(A=m),0))-A-y-v),r[0]=b,r[1]=s,r}(Mr,o,t);if(h=(s=(n-(c=ir(n,0)))*m[0]+n*m[1])+(p=c*m[0]),nr.assign(h,Pr,1,0),U=ur(Pr[0]),g=ur(Pr[1]),U>=1083179008){if(0!=(U-1083179008|g))return a*Tr*Tr;if(s+8008566259537294e-32>h-p)return a*Tr*Tr}else if((2147483647&U)>=1083231232){if(0!=(U-3230714880|g))return a*Gr*Gr;if(s<=h-p)return a*Gr*Gr}return h=function(r,n,t){var e,o,i,u,a,f,c,y,l,v,p;return v=((l=2147483647&r|0)>>20)-1023|0,y=0,l>1071644672&&(e=((y=r+(1048576>>v+1)>>>0)&~(1048575>>(v=((2147483647&y)>>20)-1023|0)))>>>0,y=(1048575&y|1048576)>>20-v>>>0,r<0&&(y=-y),n-=i=jr(0,e)),r=ur(r=vr(c=1-((c=(u=.6931471824645996*(i=ir(i=t+n,0)))+(a=.6931471805599453*(t-(i-n))+-1.904654299957768e-9*i))*(o=c-(i=c*c)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(o-2)-((f=a-(c-u))+c*f)-c))),(r+=y<<20>>>0)>>20<=0?Hr(c,y):jr(c,r)}(U,p,s),a*h}var Vr="function"==typeof Math.fround?Math.fround:null,Wr="function"==typeof Float32Array;var kr="function"==typeof Float32Array?Float32Array:null;var xr,Yr="function"==typeof Float32Array?Float32Array:void 0;xr=function(){var r,n,t;if("function"!=typeof kr)return!1;try{n=new kr([1,3.14,-3.14,5e40]),t=n,r=(Wr&&t instanceof Float32Array||"[object Float32Array]"===j(t))&&1===n[0]&&3.140000104904175===n[1]&&-3.140000104904175===n[2]&&n[3]===w}catch(n){r=!1}return r}()?Yr:function(){throw new Error("not implemented")};var qr=new xr(1);var Cr="function"==typeof Vr?Vr:function(r){return qr[0]=r,qr[0]};function zr(r,n,t){var e,o,i,u;if(r<=0||t<=0)return 0;if(1===r)return l(n[0]);for(e=0,o=1,r*=t,u=0;u<r;u+=t)0!==n[u]&&(e<(i=l(n[u]))?(o=Cr(1+o*Lr(e/i,2)),e=i):o=Cr(o+Lr(i/e,2)));return Cr(e*y(o))}function Br(r,n,t,e){var o,i,u,a,f;if(r<=0)return 0;if(1===r)return l(n[e]);for(a=e,o=0,i=1,f=0;f<r;f++)0!==n[a]&&(o<(u=l(n[a]))?(i=Cr(1+i*Lr(o/u,2)),o=u):i=Cr(i+Lr(u/o,2))),a+=t;return Cr(o*y(i))}c(zr,"ndarray",Br);export{zr as default,Br as ndarray};
//# sourceMappingURL=mod.js.map