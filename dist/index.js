"use strict";var n=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var i=n(function(O,s){
var f=require('@stdlib/blas-ext-base-dsumkbn2/dist').ndarray;function y(e,r,a,u){return e<=0?NaN:e===1||a===0?r[u]:f(e,r,a,u)/e}s.exports=y
});var d=n(function(g,v){
var b=require('@stdlib/strided-base-stride2offset/dist'),k=i();function p(e,r,a){return k(e,r,a,b(e,a))}v.exports=p
});var m=n(function(h,q){
var j=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=d(),x=i();j(o,"ndarray",x);q.exports=o
});var l=require("path").join,R=require('@stdlib/utils-try-require/dist'),_=m(),t,c=R(l(__dirname,"./native.js"));c instanceof Error?t=_:t=c;module.exports=t;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
