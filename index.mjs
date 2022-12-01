// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.0.7-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@v0.0.7-esm/index.mjs";function i(t,i,d){var m,a,o,l;if(t<=0||d<=0)return 0;if(1===t)return r(i[0]);for(m=0,a=1,t*=d,l=0;l<t;l+=d)0!==i[l]&&(m<(o=r(i[l]))?(a=n(1+a*s(m/o,2)),m=o):a=n(a+s(o/m,2)));return n(m*e(a))}function d(t,i,d,m){var a,o,l,f,p;if(t<=0)return 0;if(1===t)return r(i[m]);for(f=m,a=0,o=1,p=0;p<t;p++)0!==i[f]&&(a<(l=r(i[f]))?(o=n(1+o*s(a/l,2)),a=l):o=n(o+s(l/a,2))),f+=d;return n(a*e(o))}t(i,"ndarray",d);export{i as default,d as ndarray};
//# sourceMappingURL=index.mjs.map
