// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,t=Object.prototype,e=t.toString,o=t.__defineGetter__,i=t.__defineSetter__,u=t.__lookupGetter__,f=t.__lookupSetter__,a=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,a){var c,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof a||null===a||"[object Array]"===e.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((l="value"in a)&&(u.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=a.value,r.__proto__=c):r[n]=a.value),y="get"in a,p="set"in a,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(r,n,a.get),p&&i&&i.call(r,n,a.set),r};function c(r,n,t){a(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}var l=Math.sqrt;function y(r){return Math.abs(r)}function p(r){return r!=r}var v=Math.floor;function s(r){return v(r)===r}function b(r){return s(r/2)}function A(r){return b(r>0?r-1:r+1)}var d=Number.POSITIVE_INFINITY,w=Number.NEGATIVE_INFINITY;function m(r){return r===d||r===w}var _,h="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),g=Object.prototype.toString,U=Object.prototype.hasOwnProperty,j="function"==typeof Symbol?Symbol.toStringTag:"",F=h&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,o,i;if(null==r)return g.call(r);t=r[j],i=j,n=null!=(o=r)&&U.call(o,i);try{r[j]=void 0}catch(n){return g.call(r)}return e=g.call(r),n?r[j]=t:delete r[j],e}:function(r){return g.call(r)},I="function"==typeof Uint32Array,O="function"==typeof Uint32Array?Uint32Array:null,S="function"==typeof Uint32Array?Uint32Array:void 0;_=function(){var r,n,t;if("function"!=typeof O)return!1;try{n=new O(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(I&&t instanceof Uint32Array||"[object Uint32Array]"===F(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?S:function(){throw new Error("not implemented")};var E,N=_,T="function"==typeof Float64Array,H="function"==typeof Float64Array?Float64Array:null,G="function"==typeof Float64Array?Float64Array:void 0;E=function(){var r,n,t;if("function"!=typeof H)return!1;try{n=new H([1,3.14,-3.14,NaN]),t=n,r=(T&&t instanceof Float64Array||"[object Float64Array]"===F(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?G:function(){throw new Error("not implemented")};var P,M=E,L="function"==typeof Uint8Array,V="function"==typeof Uint8Array?Uint8Array:null,W="function"==typeof Uint8Array?Uint8Array:void 0;P=function(){var r,n,t;if("function"!=typeof V)return!1;try{n=new V(n=[1,3.14,-3.14,256,257]),t=n,r=(L&&t instanceof Uint8Array||"[object Uint8Array]"===F(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?W:function(){throw new Error("not implemented")};var x,k=P,Y="function"==typeof Uint16Array,q="function"==typeof Uint16Array?Uint16Array:null,C="function"==typeof Uint16Array?Uint16Array:void 0;x=function(){var r,n,t;if("function"!=typeof q)return!1;try{n=new q(n=[1,3.14,-3.14,65536,65537]),t=n,r=(Y&&t instanceof Uint16Array||"[object Uint16Array]"===F(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?C:function(){throw new Error("not implemented")};var z,B={uint16:x,uint8:k};(z=new B.uint16(1))[0]=4660;var D,J,K=52===new B.uint8(z.buffer)[0];!0===K?(D=1,J=0):(D=0,J=1);var Q={HIGH:D,LOW:J},R=new M(1),X=new N(R.buffer),Z=Q.HIGH,$=Q.LOW;function rr(r,n,t,e){return R[0]=r,n[e]=X[Z],n[e+t]=X[$],n}function nr(r){return rr(r,[0,0],1,0)}c(nr,"assign",rr);var tr=!0===K?0:1,er=new M(1),or=new N(er.buffer);function ir(r,n){return er[0]=r,or[tr]=n>>>0,er[0]}function ur(r){return 0|r}var fr,ar,cr=2147483647,lr=!0===K?1:0,yr=new M(1),pr=new N(yr.buffer);function vr(r){return yr[0]=r,pr[lr]}!0===K?(fr=1,ar=0):(fr=0,ar=1);var sr={HIGH:fr,LOW:ar},br=new M(1),Ar=new N(br.buffer),dr=sr.HIGH,wr=sr.LOW;function mr(r,n){return Ar[dr]=r,Ar[wr]=n,br[0]}var _r=[0,0];function hr(r,n){var t,e;return nr.assign(r,_r,1,0),t=_r[0],t&=cr,e=vr(n),mr(t|=e&=2147483648,_r[1])}var gr=!0===K?1:0,Ur=new M(1),jr=new N(Ur.buffer);function Fr(r,n){return Ur[0]=r,jr[gr]=n>>>0,Ur[0]}var Ir=1023,Or=1048576,Sr=[1,1.5],Er=[0,.5849624872207642],Nr=[0,1.350039202129749e-8];function Tr(r,n,t,e){return p(r)||m(r)?(n[e]=r,n[e+t]=0,n):0!==r&&y(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}c((function(r){return Tr(r,[0,0],1,0)}),"assign",Tr);var Hr=[0,0],Gr=[0,0];function Pr(r,n){var t,e;return 0===n||0===r||p(r)||m(r)?r:(Tr(r,Hr,1,0),n+=Hr[1],n+=function(r){var n=vr(r);return(n=(2146435072&n)>>>20)-Ir|0}(r=Hr[0]),n<-1074?hr(0,r):n>1023?r<0?w:d:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,nr.assign(r,Gr,1,0),t=Gr[0],t&=2148532223,e*mr(t|=n+Ir<<20,Gr[1])))}var Mr=1048575,Lr=1048576,Vr=1083179008,Wr=1e300,xr=1e-300,kr=[0,0],Yr=[0,0];function qr(r,n){var t,e,o,i,u,f,a,c,v,b,_,h,g,U;if(p(r)||p(n))return NaN;if(nr.assign(n,kr,1,0),u=kr[0],0===kr[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return l(r);if(-.5===n)return 1/l(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(m(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:y(r)<1==(n===d)?0:d}(r,n)}if(nr.assign(r,kr,1,0),i=kr[0],0===kr[1]){if(0===i)return function(r,n){return n===w?d:n===d?0:n>0?A(n)?r:0:A(n)?hr(d,r):d}(r,n);if(1===r)return 1;if(-1===r&&A(n))return-1;if(m(r))return r===w?qr(-0,-n):n<0?0:d}if(r<0&&!1===s(n))return(r-r)/(r-r);if(o=y(r),t=i&cr|0,e=u&cr|0,a=u>>>31|0,f=(f=i>>>31|0)&&A(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(vr(r)&cr)<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?f*Wr*Wr:f*xr*xr;if(t>1072693248)return 0===a?f*Wr*Wr:f*xr*xr;_=function(r,n){var t,e,o,i,u,f;return t=(u=1.9259629911266175e-8*(o=n-1)-o*o*(0===(f=o)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=ir(e=(i=1.4426950216293335*o)+u,0))-i),r[0]=e,r[1]=t,r}(Yr,o)}else _=function(r,n,t){var e,o,i,u,f,a,c,l,y,p,v,s,b,A,d,w,m,_,h,g,U;return _=0,t<Or&&(_-=53,t=vr(n*=9007199254740992)),_+=(t>>20)-Ir|0,t=1072693248|(h=1048575&t|0),h<=235662?g=0:h<767610?g=1:(g=0,_+=1,t-=Or),u=ir(o=(w=(n=Fr(n,t))-(c=Sr[g]))*(m=1/(n+c)),0),e=524288+(t>>1|536870912),a=Fr(0,e+=g<<18),d=(i=o*o)*i*(0===(U=i)?.5999999999999946:.5999999999999946+U*(.4285714285785502+U*(.33333332981837743+U*(.272728123808534+U*(.23066074577556175+.20697501780033842*U))))),a=ir(a=3+(i=u*u)+(d+=(f=m*(w-u*a-u*(n-(a-c))))*(u+o)),0),b=(v=-7.028461650952758e-9*(y=ir(y=(w=u*a)+(m=f*a+(d-(a-3-i))*o),0))+.9617966939259756*(m-(y-w))+Nr[g])-((s=ir(s=(p=.9617967009544373*y)+v+(l=Er[g])+(A=_),0))-A-l-p),r[0]=s,r[1]=b,r}(Yr,o,t);if(h=(b=(n-(c=ir(n,0)))*_[0]+n*_[1])+(v=c*_[0]),nr.assign(h,kr,1,0),g=ur(kr[0]),U=ur(kr[1]),g>=Vr){if(0!=(g-Vr|U))return f*Wr*Wr;if(b+8008566259537294e-32>h-v)return f*Wr*Wr}else if((g&cr)>=1083231232){if(0!=(g-3230714880|U))return f*xr*xr;if(b<=h-v)return f*xr*xr}return h=function(r,n,t){var e,o,i,u,f,a,c,l,y,p;return y=((l=r&cr|0)>>20)-Ir|0,c=0,l>1071644672&&(o=Fr(0,((c=r+(Lr>>y+1)>>>0)&~(Mr>>(y=((c&cr)>>20)-Ir|0)))>>>0),c=(c&Mr|Lr)>>20-y>>>0,r<0&&(c=-c),n-=o),r=ur(r=vr(a=1-((a=(i=.6931471824645996*(o=ir(o=t+n,0)))+(u=.6931471805599453*(t-(o-n))+-1.904654299957768e-9*o))*(e=a-(o=a*a)*(0===(p=o)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=u-(a-i))+a*f)-a))),(r+=c<<20>>>0)>>20<=0?Pr(a,c):Fr(a,r)}(g,v,b),f*h}var Cr,zr="function"==typeof Math.fround?Math.fround:null,Br="function"==typeof Float32Array,Dr="function"==typeof Float32Array?Float32Array:null,Jr="function"==typeof Float32Array?Float32Array:void 0;Cr=function(){var r,n,t;if("function"!=typeof Dr)return!1;try{n=new Dr([1,3.14,-3.14,5e40]),t=n,r=(Br&&t instanceof Float32Array||"[object Float32Array]"===F(t))&&1===n[0]&&3.140000104904175===n[1]&&-3.140000104904175===n[2]&&n[3]===d}catch(n){r=!1}return r}()?Jr:function(){throw new Error("not implemented")};var Kr=new Cr(1),Qr="function"==typeof zr?zr:function(r){return Kr[0]=r,Kr[0]};function Rr(r,n,t){var e,o,i,u;if(r<=0||t<=0)return 0;if(1===r)return y(n[0]);for(e=0,o=1,r*=t,u=0;u<r;u+=t)0!==n[u]&&(e<(i=y(n[u]))?(o=Qr(1+o*qr(e/i,2)),e=i):o=Qr(o+qr(i/e,2)));return Qr(e*l(o))}return c(Rr,"ndarray",(function(r,n,t,e){var o,i,u,f,a;if(r<=0)return 0;if(1===r)return y(n[e]);for(f=e,o=0,i=1,a=0;a<r;a++)0!==n[f]&&(o<(u=y(n[f]))?(i=Qr(1+i*qr(o/u,2)),o=u):i=Qr(i+qr(u/o,2))),f+=t;return Qr(o*l(i))})),Rr},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).snrm2=n();
//# sourceMappingURL=browser.js.map