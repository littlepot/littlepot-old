// Generated by dart2js, the Dart to JavaScript compiler.
(function($){function dart(){this.x=0}var A=new dart
delete A.x
var B=new dart
delete B.x
var C=new dart
delete C.x
var D=new dart
delete D.x
var E=new dart
delete E.x
var F=new dart
delete F.x
var G=new dart
delete G.x
var H=new dart
delete H.x
var J=new dart
delete J.x
var K=new dart
delete K.x
var L=new dart
delete L.x
var M=new dart
delete M.x
var N=new dart
delete N.x
var O=new dart
delete O.x
var P=new dart
delete P.x
var Q=new dart
delete Q.x
var R=new dart
delete R.x
var S=new dart
delete S.x
var T=new dart
delete T.x
var U=new dart
delete U.x
var V=new dart
delete V.x
var W=new dart
delete W.x
var X=new dart
delete X.x
var Y=new dart
delete Y.x
var Z=new dart
delete Z.x
function I(){}
init()
$=I.p
var $$={}
;(function(a){"use strict"
function map(b){b={x:b}
delete b.x
return b}function processStatics(a3){for(var h in a3){if(!u.call(a3,h))continue
if(h==="^")continue
var g=a3[h]
var f=h.substring(0,1)
var e
if(f==="+"){v[e]=h.substring(1)
var d=a3[h]
if(d>0)a3[e].$reflectable=d
if(g&&g.length)init.typeInformation[e]=g}else if(f==="@"){h=h.substring(1)
$[h]["@"]=g}else if(f==="*"){n[e].$defaultValues=g
var c=a3.$methodsWithOptionalArguments
if(!c){a3.$methodsWithOptionalArguments=c={}}c[h]=e}else if(typeof g==="function"){n[e=h]=g
i.push(h)
init.globalFunctions[h]=g}else if(g.constructor===Array){addStubs(n,g,h,true,a3,i)}else{e=h
var b={}
var a0
for(var a1 in g){if(!u.call(g,a1))continue
f=a1.substring(0,1)
if(a1==="static"){processStatics(init.statics[h]=g[a1])}else if(f==="+"){w[a0]=a1.substring(1)
var d=g[a1]
if(d>0)g[a0].$reflectable=d}else if(f==="@"&&a1!=="@"){b[a1.substring(1)]["@"]=g[a1]}else if(f==="*"){b[a0].$defaultValues=g[a1]
var c=b.$methodsWithOptionalArguments
if(!c){b.$methodsWithOptionalArguments=c={}}c[a1]=a0}else{var a2=g[a1]
if(a1!=="^"&&a2!=null&&a2.constructor===Array&&a1!=="<>"){addStubs(b,a2,a1,false,g,[])}else{b[a0=a1]=a2}}}$$[h]=[n,b]
j.push(h)}}}function addStubs(b3,b4,b5,b6,b7,b8){var h,g=[b7[b5]=b3[b5]=h=b4[0]]
h.$stubName=b5
b8.push(b5)
for(var f=0;f<b4.length;f+=2){h=b4[f+1]
if(typeof h!="function")break
h.$stubName=b4[f+2]
g.push(h)
if(h.$stubName){b7[h.$stubName]=b3[h.$stubName]=h
b8.push(h.$stubName)}}for(var e=0;e<g.length;f++,e++){g[e].$callName=b4[f+1]}var d=b4[++f]
b4=b4.slice(++f)
var c=b4[0]
var b=c>>1
var a0=(c&1)===1
var a1=c===3
var a2=c===1
var a3=b4[1]
var a4=a3>>1
var a5=(a3&1)===1
var a6=b+a4!=g[0].length
var a7=b4[2]
var a8=2*a4+b+3
var a9=b4.length>a8
if(d){h=tearOff(g,b4,b6,b5,a6)
b3[b5].$getter=h
h.$getterStub=true
if(b6)init.globalFunctions[b5]=h
b7[d]=b3[d]=h
g.push(h)
if(d)b8.push(d)
h.$stubName=d
h.$callName=null
if(a6)init.interceptedNames[d]=true}if(a9){for(var e=0;e<g.length;e++){g[e].$reflectable=1
g[e].$reflectionInfo=b4}var b0=b6?init.mangledGlobalNames:init.mangledNames
var b1=b4[a8]
var b2=b1
if(d)b0[d]=b2
if(a1){b2+="="}else if(!a2){b2+=":"+b+":"+a4}b0[b5]=b2
g[0].$reflectionName=b2
g[0].$metadataIndex=a8+1
if(a4)b3[b1+"*"]=g[0]}}function tearOffGetterNoCsp(b,c,d,e){return e?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+d+z+++"(x) {"+"if (c === null) c = H.qm("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(b,c,d,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+d+z+++"() {"+"if (c === null) c = H.qm("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(b,c,d,H,null)}function tearOffGetterCsp(b,c,d,e){var h=null
return e?function(f){if(h===null)h=H.qm(this,b,c,false,[f],d)
return new h(this,b[0],f,d)}:function(){if(h===null)h=H.qm(this,b,c,false,[],d)
return new h(this,b[0],null,d)}}function tearOff(b,c,d,e,f){var h
return d?function(){if(h===void 0)h=H.qm(this,b,c,true,[],e).prototype
return h}:y(b,c,e,f)}var z=0
var y=typeof dart_precompiled=="function"?tearOffGetterCsp:tearOffGetterNoCsp
if(!init.libraries)init.libraries=[]
if(!init.mangledNames)init.mangledNames=map()
if(!init.mangledGlobalNames)init.mangledGlobalNames=map()
if(!init.statics)init.statics=map()
if(!init.typeInformation)init.typeInformation=map()
if(!init.globalFunctions)init.globalFunctions=map()
if(!init.interceptedNames)init.interceptedNames=map()
var x=init.libraries
var w=init.mangledNames
var v=init.mangledGlobalNames
var u=Object.prototype.hasOwnProperty
var t=a.length
for(var s=0;s<t;s++){var r=a[s]
var q=r[0]
var p=r[1]
var o=r[2]
var n=r[3]
var m=r[4]
var l=!!r[5]
var k=m&&m["^"]
var j=[]
var i=[]
processStatics(m)
x.push([q,p,j,i,o,k,l,n])}})([["_foreign_helper","dart:_foreign_helper",,H,{
"^":"",
FK:{
"^":"a;tT"}}],["_interceptors","dart:_interceptors",,J,{
"^":"",
x:function(a){return void 0},
Qu:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ks:function(a){var z,y,x,w
z=a[init.dispatchPropertyName]
if(z==null)if($.Bv==null){H.XD()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.b(P.SY("Return interceptor for "+H.d(y(a,z))))}w=H.w3(a)
if(w==null){y=Object.getPrototypeOf(a)
if(y==null||y===Object.prototype)return C.ZQ
else return C.vB}return w},
Gv:{
"^":"a;",
n:function(a,b){return a===b},
bu:function(a){return H.a5(a)},
"%":"AutocompleteErrorEvent|DOMError|ErrorEvent|Event|FileError|MediaError|MediaKeyError|NavigatorUserMediaError|PositionError|SQLError|SVGAnimatedLength|SpeechRecognitionError"},
yE:{
"^":"Gv;",
bu:function(a){return String(a)}},
CD:{
"^":"Gv;",
n:function(a,b){return!1},
bu:function(a){return"null"}},
Ue:{
"^":"Gv;"},
iC:{
"^":"Ue;"},
is:{
"^":"Ue;"},
Q:{
"^":"Gv;",
bu:function(a){return H.mx(a,"[","]")},
gB:function(a){return a.length},
$isQ:true},
P:{
"^":"Gv;",
bu:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
g:function(a,b){return a+b},
$islf:true,
static:{"^":"SA,N6"}},
im:{
"^":"P;",
$islf:true,
$isKN:true},
VA:{
"^":"P;",
$islf:true},
O:{
"^":"Gv;",
j:function(a,b){if(b>=a.length)throw H.b(P.N(b))
return a.charCodeAt(b)},
g:function(a,b){if(typeof b!=="string")throw H.b(P.u(b))
return a+b},
Nj:function(a,b,c){if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.vh(P.u(c))
if(b<0)throw H.b(P.N(b))
if(typeof c!=="number")return H.s(c)
if(b>c)throw H.b(P.N(b))
if(c>a.length)throw H.b(P.N(c))
return a.substring(b,c)},
yn:function(a,b){return this.Nj(a,b,null)},
bu:function(a){return a},
gB:function(a){return a.length},
$isqU:true}}],["_js_helper","dart:_js_helper",,H,{
"^":"",
d:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.AG(a)
if(typeof z!=="string")throw H.b(P.u(a))
return z},
lh:function(a){var z,y
z=C.w2(J.x(a))
if(z==="Object"){y=String(a.constructor).match(/^\s*function\s*(\S*)\s*\(/)[1]
if(typeof y==="string")z=/^\w+$/.test(y)?y:z}if(z.length>1&&C.xB.j(z,0)===36)z=C.xB.yn(z,1)
return(z+H.ia(H.oX(a),0,null)).replace(/[^<,> ]+/g,function(b){return init.mangledGlobalNames[b]||b})},
a5:function(a){return"Instance of '"+H.lh(a)+"'"},
s:function(a){throw H.b(P.u(a))},
e:function(a,b){if(a==null)J.q8(a)
if(typeof b!=="number"||Math.floor(b)!==b)H.s(b)
throw H.b(P.N(b))},
b:function(a){var z
if(a==null)a=new P.LK()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.Ju})
z.name=""}else z.toString=H.Ju
return z},
Ju:function(){return J.AG(this.dartException)},
vh:function(a){throw H.b(a)},
ft:function(a,b,c,d,e,f,g){var z=J.x(c)
if(z.n(c,0))return new H.dr(a).$0()
else if(z.n(c,1))return new H.TL(a,d).$0()
else if(z.n(c,2))return new H.KX(a,d,e).$0()
else if(z.n(c,3))return new H.uZ(a,d,e,f).$0()
else if(z.n(c,4))return new H.OQ(a,d,e,f,g).$0()
else throw H.b(P.FM("Unsupported number of arguments for wrapped closure"))},
tR:function(a,b){var z
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,$,H.ft)
a.$identity=z
return z},
iA:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
z.$stubName
y=z.$callName
z.$reflectionInfo=c
x=H.zh(z).AM
w=d?Object.create(new H.Bp().constructor.prototype):Object.create(new H.v(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(d)v=function(){this.$initialize()}
else if(typeof dart_precompiled=="function"){u=function(g,h,i,j){this.$initialize(g,h,i,j)}
v=u}else{u=$.yj
$.yj=J.WB(u,1)
u=new Function("a","b","c","d","this.$initialize(a,b,c,d);"+u)
v=u}w.constructor=v
v.prototype=w
u=!d
if(u){t=e.length==1&&!0
s=H.bx(a,z,t)
s.$reflectionInfo=c}else{w.$name=f
s=z
t=!1}if(typeof x=="number")r=function(g){return function(){return init.metadata[g]}}(x)
else if(u&&typeof x=="function"){q=t?H.yS:H.DV
r=function(g,h){return function(){return g.apply({$receiver:h(this)},arguments)}}(x,q)}else throw H.b("Error in reflectionInfo.")
w.$signature=r
w[y]=s
for(u=b.length,p=1;p<u;++p){o=b[p]
n=o.$callName
if(n!=null){m=d?o:H.bx(a,o,t)
w[n]=m}}w["call*"]=s
return v},
vq:function(a,b,c,d){var z=H.DV
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
bx:function(a,b,c){var z,y,x,w,v,u
if(c)return H.Hf(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
if(typeof dart_precompiled=="function"||!w||y>=27)return H.vq(y,!w,z,b)
if(y===0){w=$.mJ
if(w==null){w=H.E2("self")
$.mJ=w}w="return function(){return this."+H.d(w)+"."+H.d(z)+"();"
v=$.yj
$.yj=J.WB(v,1)
return new Function(w+H.d(v)+"}")()}u="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w="return function("+u+"){return this."
v=$.mJ
if(v==null){v=H.E2("self")
$.mJ=v}v=w+H.d(v)+"."+H.d(z)+"("+u+");"
w=$.yj
$.yj=J.WB(w,1)
return new Function(v+H.d(w)+"}")()},
Z4:function(a,b,c,d){var z,y
z=H.DV
y=H.yS
switch(b?-1:a){case 0:throw H.b(H.Ef("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
Hf:function(a,b){var z,y,x,w,v,u,t,s
z=H.oN()
y=$.P4
if(y==null){y=H.E2("receiver")
$.P4=y}x=b.$stubName
w=b.length
v=typeof dart_precompiled=="function"
u=a[x]
t=b==null?u==null:b===u
if(v||!t||w>=28)return H.Z4(w,!t,x,b)
if(w===1){y="return function(){return this."+H.d(z)+"."+H.d(x)+"(this."+H.d(y)+");"
t=$.yj
$.yj=J.WB(t,1)
return new Function(y+H.d(t)+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
y="return function("+s+"){return this."+H.d(z)+"."+H.d(x)+"(this."+H.d(y)+", "+s+");"
t=$.yj
$.yj=J.WB(t,1)
return new Function(y+H.d(t)+"}")()},
qm:function(a,b,c,d,e,f){b.fixed$length=init
c.fixed$length=init
return H.iA(a,b,c,!!d,e,f)},
eQ:function(a){throw H.b(P.Gz("Cyclic initialization for static "+H.d(a)))},
oX:function(a){if(a==null)return
return a.$builtinTypeInfo},
Ko:function(a,b){if(a==null)return"dynamic"
else if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.ia(a,1,b)
else if(typeof a=="function")return a.builtin$cls
else if(typeof a==="number"&&Math.floor(a)===a)return C.jn.bu(a)
else return},
ia:function(a,b,c){var z,y,x,w,v,u
if(a==null)return""
z=P.p9("")
for(y=b,x=!0,w=!0;y<a.length;++y){if(x)x=!1
else z.vM+=", "
v=a[y]
if(v!=null)w=!1
u=H.Ko(v,c)
z.vM+=typeof u==="string"?u:H.d(u)}return w?"":"<"+H.d(z)+">"},
or:function(a){var z=$.NF
return"Instance of "+(z==null?"<Unknown>":z.$1(a))},
wz:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
iw:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
w3:function(a){var z,y,x,w,v,u
z=$.NF.$1(a)
y=$.nw[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.vv[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=$.TX.$2(a,z)
if(z!=null){y=$.nw[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.vv[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.Va(x)
$.nw[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.vv[z]=x
return x}if(v==="-"){u=H.Va(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.Lc(a,x)
if(v==="*")throw H.b(P.SY(z))
if(init.leafTags[z]===true){u=H.Va(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.Lc(a,x)},
Lc:function(a,b){var z,y
z=Object.getPrototypeOf(a)
y=J.Qu(b,z,null,null)
Object.defineProperty(z,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return b},
Va:function(a){return J.Qu(a,!1,null,!!a.$isXj)},
VF:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return J.Qu(z,!1,null,!!z.$isXj)
else return J.Qu(z,c,null,null)},
XD:function(){if(!0===$.Bv)return
$.Bv=!0
H.Z1()},
Z1:function(){var z,y,x,w,v,u,t,s
$.nw=Object.create(null)
$.vv=Object.create(null)
H.kO()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.x7.$1(v)
if(u!=null){t=H.VF(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kO:function(){var z,y,x,w,v,u,t
z=C.MA()
z=H.ud(C.Mc,H.ud(C.hQ,H.ud(C.XQ,H.ud(C.XQ,H.ud(C.M1,H.ud(C.lR,H.ud(C.ur(C.w2),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.NF=new H.dC(v)
$.TX=new H.wN(u)
$.x7=new H.VX(t)},
ud:function(a,b){return a(b)||b},
FD:{
"^":"a;mr,Rn,XZ,Rv,hG,Mo,AM,NE",
static:{"^":"t4,FV,Oc,pv",zh:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z.fixed$length=init
z=z
y=z[0]
x=z[1]
return new H.FD(a,z,(y&1)===1,y>>1,x>>1,(x&1)===1,z[2],null)}}},
dr:{
"^":"Tp;a",
$0:function(){return this.a.$0()}},
TL:{
"^":"Tp;b,c",
$0:function(){return this.b.$1(this.c)}},
KX:{
"^":"Tp;d,e,f",
$0:function(){return this.d.$2(this.e,this.f)}},
uZ:{
"^":"Tp;UI,bK,Gq,Rm",
$0:function(){return this.UI.$3(this.bK,this.Gq,this.Rm)}},
OQ:{
"^":"Tp;w3,HZ,mG,xC,cj",
$0:function(){return this.w3.$4(this.HZ,this.mG,this.xC,this.cj)}},
Tp:{
"^":"a;",
bu:function(a){return"Closure"},
gKu:function(){return this}},
Bp:{
"^":"Tp;"},
v:{
"^":"Bp;nw,jm,cR,Vb",
n:function(a,b){return!1},
static:{"^":"mJ,P4",DV:function(a){return a.nw},yS:function(a){return a.cR},oN:function(){var z=$.mJ
if(z==null){z=H.E2("self")
$.mJ=z}return z},E2:function(a){var z,y,x,w,v
z=new H.v("self","target","receiver","name")
y=Object.getOwnPropertyNames(z)
y.fixed$length=init
x=y
for(y=x.length,w=0;w<y;++w){v=x[w]
if(z[v]===a)return v}}}},
Eq:{
"^":"Ge;G1",
bu:function(a){return"RuntimeError: "+H.d(this.G1)},
static:{Ef:function(a){return new H.Eq(a)}}},
dC:{
"^":"Tp;a",
$1:function(a){return this.a(a)}},
wN:{
"^":"Tp;b",
$2:function(a,b){return this.b(a,b)}},
VX:{
"^":"Tp;c",
$1:function(a){return this.c(a)}}}],["dart._internal","dart:_internal",,H,{
"^":"",
mx:function(a,b,c){var z,y,x,w
for(y=0;x=$.RM(),y<x.length;++y){x=x[y]
w=a
if(x==null?w==null:x===w)return H.d(b)+"..."+H.d(c)}z=P.p9("")
try{$.RM().push(a)
z.KF(b)
z.We(a,", ")
z.KF(c)}finally{x=$.RM()
if(0>=x.length)return H.e(x,0)
x.pop()}return z.gvM()},
a7:{
"^":"a;l6,SW,G7,lo",
G:function(){var z,y,x
z=this.l6
y=z.length
if(this.SW!==y)throw H.b(P.a4(z))
x=this.G7
if(x>=y){this.lo=null
return!1}this.lo=z[x]
this.G7=x+1
return!0}}}],["dart.core","dart:core",,P,{
"^":"",
hl:function(a){return H.a5(a)},
FM:function(a){return new P.HG(a)},
a2:{
"^":"a;",
bu:function(a){return this?"true":"false"}},
"+bool":0,
CP:{
"^":"lf;"},
"+double":0,
Ge:{
"^":"a;"},
LK:{
"^":"Ge;",
bu:function(a){return"Throw of null."}},
AT:{
"^":"Ge;G1",
bu:function(a){var z=this.G1
if(z!=null)return"Illegal argument(s): "+H.d(z)
return"Illegal argument(s)"},
static:{u:function(a){return new P.AT(a)}}},
bJ:{
"^":"AT;G1",
bu:function(a){return"RangeError: "+H.d(this.G1)},
static:{N:function(a){return new P.bJ("value "+H.d(a))}}},
ds:{
"^":"Ge;G1",
bu:function(a){var z=this.G1
return z!=null?"UnimplementedError: "+H.d(z):"UnimplementedError"},
static:{SY:function(a){return new P.ds(a)}}},
UV:{
"^":"Ge;YA",
bu:function(a){return"Concurrent modification during iteration: "+P.hl(this.YA)+"."},
static:{a4:function(a){return new P.UV(a)}}},
t7:{
"^":"Ge;Wo",
bu:function(a){return"Reading static variable '"+this.Wo+"' during its initialization"},
static:{Gz:function(a){return new P.t7(a)}}},
HG:{
"^":"a;G1",
bu:function(a){return"Exception: "+this.G1}},
KN:{
"^":"lf;",
$isKN:true},
"+int":0,
zM:{
"^":"a;"},
"+List":0,
c8:{
"^":"a;",
bu:function(a){return"null"}},
"+Null":0,
lf:{
"^":"a;",
$islf:true},
"+num":0,
a:{
"^":";",
n:function(a,b){return this===b},
bu:function(a){return H.a5(this)}},
qU:{
"^":"a;",
$isqU:true},
"+String":0,
Rn:{
"^":"a;vM<",
gB:function(a){return this.vM.length},
KF:function(a){this.vM+=typeof a==="string"?a:H.d(a)},
We:function(a,b){var z,y
z=new H.a7(a,a.length,0,null)
if(!z.G())return
if(b.length===0)do{y=z.lo
this.vM+=typeof y==="string"?y:H.d(y)}while(z.G())
else{this.KF(z.lo)
for(;z.G();){this.vM+=b
y=z.lo
this.vM+=typeof y==="string"?y:H.d(y)}}},
bu:function(a){return this.vM},
PD:function(a){this.vM=a},
static:{p9:function(a){var z=new P.Rn("")
z.PD(a)
return z}}}}],["dart.dom.html","dart:html",,W,{
"^":"",
qE:{
"^":"cv;",
"%":"HTMLAppletElement|HTMLAudioElement|HTMLBRElement|HTMLBaseElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLImageElement|HTMLInputElement|HTMLKeygenElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
Gh:{
"^":"qE;",
bu:function(a){return a.toString()},
"%":"HTMLAnchorElement"},
fY:{
"^":"qE;",
bu:function(a){return a.toString()},
"%":"HTMLAreaElement"},
Ny:{
"^":"qE;",
eW:function(a,b,c){return a.getContext(b)},
Bf:function(a,b){return this.eW(a,b,null)},
"%":"HTMLCanvasElement"},
Y5:{
"^":"Gv;",
"%":"WebGLRenderingContext;CanvasRenderingContext"},
Gc:{
"^":"Y5;",
zm:function(a,b,c,d,e){return a.rect(b,c,d,e)},
"%":"CanvasRenderingContext2D"},
Nh:{
"^":"Gv;",
bu:function(a){return a.toString()},
"%":"DOMException"},
cv:{
"^":"KV;",
bu:function(a){return a.localName},
"%":"SVGAElement|SVGAltGlyphDefElement|SVGAltGlyphElement|SVGAltGlyphItemElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGCursorElement|SVGDefsElement|SVGDescElement|SVGDiscardElement|SVGElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGFontElement|SVGFontFaceElement|SVGFontFaceFormatElement|SVGFontFaceNameElement|SVGFontFaceSrcElement|SVGFontFaceUriElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGGlyphElement|SVGGlyphRefElement|SVGGradientElement|SVGGraphicsElement|SVGHKernElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGMissingGlyphElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGVKernElement|SVGViewElement;Element"},
D0:{
"^":"Gv;",
"%":";EventTarget"},
Yu:{
"^":"qE;B:length=",
"%":"HTMLFormElement"},
KV:{
"^":"D0;",
bu:function(a){var z=a.nodeValue
return z==null?J.Gv.prototype.bu.call(this,a):z},
"%":"Document|HTMLDocument;Node"},
lp:{
"^":"qE;B:length=",
"%":"HTMLSelectElement"}}],["","file:///home/codio/workspace/dardo/web/dibu.dart",,B,{
"^":"",
Iq:function(){var z,y,x,w,v,u,t,s,r,q
z=document.querySelector("canvas")
y=new B.ck(z)
x=J.PB(z,"2d")
J.wL(x,0,0,z.width,z.height)
w=z.width
if(typeof w!=="number")return w.V()
v=w/2
w=z.height
if(typeof w!=="number")return w.V()
u=w/2
w=z.width
if(typeof w!=="number")return w.V()
t=w/2
w=z.height
if(typeof w!=="number")return w.V()
s=w/2
y.os(x,v,u,t,s)
w=v-t
r=u-s
y.DG(x,0,1.5707963267948966,w,r,t,s)
q=v+t
y.DG(x,1.5707963267948966,3.141592653589793,q,r,t,s)
r=u+s
y.DG(x,3.141592653589793,4.71238898038469,q,r,t,s)
y.DG(x,4.71238898038469,6.283185307179586,w,r,t,s)
z="Just testing... width: "+H.d(z.width)+", height: "+H.d(z.height)
x.fillText(z,100,100)
x.stroke()},
ck:{
"^":"a;qN",
os:function(a,b,c,d,e){var z
for(z=0.031415926535897934;z<6.283185307179586;){a.moveTo(b+d*Math.cos(z),c)
a.lineTo(b,c+e*Math.sin(z))
z+=0.031415926535897934}},
DG:function(a,b,c,d,e,f,g){var z
for(z=b;z<c;){a.moveTo(d+f*Math.cos(z),e)
a.lineTo(d,e+g*Math.sin(z))
z+=0.031415926535897934}}}},1],])
I.$finishClasses($$,$,null)
$$=null
J.Qc=function(a){if(typeof a=="number")return J.P.prototype
if(typeof a=="string")return J.O.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.is.prototype
return a}
J.RE=function(a){if(a==null)return a
if(typeof a!="object")return a
if(a instanceof P.a)return a
return J.ks(a)}
J.U6=function(a){if(typeof a=="string")return J.O.prototype
if(a==null)return a
if(a.constructor==Array)return J.Q.prototype
if(typeof a!="object")return a
if(a instanceof P.a)return a
return J.ks(a)}
J.x=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.im.prototype
return J.VA.prototype}if(typeof a=="string")return J.O.prototype
if(a==null)return J.CD.prototype
if(typeof a=="boolean")return J.yE.prototype
if(a.constructor==Array)return J.Q.prototype
if(typeof a!="object")return a
if(a instanceof P.a)return a
return J.ks(a)}
J.AG=function(a){return J.x(a).bu(a)}
J.PB=function(a,b){return J.RE(a).Bf(a,b)}
J.WB=function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.Qc(a).g(a,b)}
J.q8=function(a){return J.U6(a).gB(a)}
J.wL=function(a,b,c,d,e){return J.RE(a).zm(a,b,c,d,e)}
C.jn=J.im.prototype
C.xB=J.O.prototype
C.ZQ=J.iC.prototype
C.vB=J.is.prototype
C.Mc=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.lR=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
C.w2=function getTagFallback(o) {
  var constructor = o.constructor;
  if (typeof constructor == "function") {
    var name = constructor.name;
    if (typeof name == "string" &&
        name.length > 2 &&
        name !== "Object" &&
        name !== "Function.prototype") {
      return name;
    }
  }
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.XQ=function(hooks) { return hooks; }

C.ur=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
C.MA=function() {
  function typeNameInChrome(o) {
    var name = o.constructor.name;
    if (name) return name;
    var s = Object.prototype.toString.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = Object.prototype.toString.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: typeNameInChrome,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
C.M1=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
C.hQ=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
$.libraries_to_load = {}
$.yj=0
$.mJ=null
$.P4=null
$.NF=null
$.TX=null
$.x7=null
$.nw=null
$.vv=null
$.Bv=null
I.$lazy($,"_toStringList","Ml","RM",function(){return[]})

init.functionAliases={}
init.metadata=[];$=null
I = I.$finishIsolateConstructor(I)
$=new I()
function convertToFastObject(properties) {
  function MyClass() {};
  MyClass.prototype = properties;
  new MyClass();
  return properties;
}
A = convertToFastObject(A)
B = convertToFastObject(B)
C = convertToFastObject(C)
D = convertToFastObject(D)
E = convertToFastObject(E)
F = convertToFastObject(F)
G = convertToFastObject(G)
H = convertToFastObject(H)
J = convertToFastObject(J)
K = convertToFastObject(K)
L = convertToFastObject(L)
M = convertToFastObject(M)
N = convertToFastObject(N)
O = convertToFastObject(O)
P = convertToFastObject(P)
Q = convertToFastObject(Q)
R = convertToFastObject(R)
S = convertToFastObject(S)
T = convertToFastObject(T)
U = convertToFastObject(U)
V = convertToFastObject(V)
W = convertToFastObject(W)
X = convertToFastObject(X)
Y = convertToFastObject(Y)
Z = convertToFastObject(Z)
!function(){function intern(a){var u={}
u[a]=1
return Object.keys(convertToFastObject(u))[0]}init.getIsolateTag=function(a){return intern("___dart_"+a+init.isolateTag)}
var z="___dart_isolate_tags_"
var y=Object[z]||(Object[z]=Object.create(null))
var x="_ZxYxX"
for(var w=0;;w++){var v=intern(x+"_"+w+"_")
if(!(v in y)){y[v]=1
init.isolateTag=v
break}}}()
init.dispatchPropertyName=init.getIsolateTag("dispatch_record")
;(function (callback) {
  if (typeof document === "undefined") {
    callback(null);
    return;
  }
  if (document.currentScript) {
    callback(document.currentScript);
    return;
  }

  var scripts = document.scripts;
  function onLoad(event) {
    for (var i = 0; i < scripts.length; ++i) {
      scripts[i].removeEventListener("load", onLoad, false);
    }
    callback(event.target);
  }
  for (var i = 0; i < scripts.length; ++i) {
    scripts[i].addEventListener("load", onLoad, false);
  }
})(function(currentScript) {
  init.currentScript = currentScript;

  if (typeof dartMainRunner === "function") {
    dartMainRunner(B.Iq, []);
  } else {
    B.Iq([]);
  }
})
function init(){I.p={}
function generateAccessor(a,b,c){var y=a.split("-")
var x=y[0]
var w=x.length
var v=x.charCodeAt(w-1)
var u
if(y.length>1)u=true
else u=false
v=v>=60&&v<=64?v-59:v>=123&&v<=126?v-117:v>=37&&v<=43?v-27:0
if(v){var t=v&3
var s=v>>2
var r=x=x.substring(0,w-1)
var q=x.indexOf(":")
if(q>0){r=x.substring(0,q)
x=x.substring(q+1)}if(t){var p=t&2?"r":""
var o=t&1?"this":"r"
var n="return "+o+"."+x
var m=c+".prototype.g"+r+"="
var l="function("+p+"){"+n+"}"
if(u)b.push(m+"$reflectable("+l+");\n")
else b.push(m+l+";\n")}if(s){var p=s&2?"r,v":"v"
var o=s&1?"this":"r"
var n=o+"."+x+"=v"
var m=c+".prototype.s"+r+"="
var l="function("+p+"){"+n+"}"
if(u)b.push(m+"$reflectable("+l+");\n")
else b.push(m+l+";\n")}}return x}I.p.$generateAccessor=generateAccessor
function defineClass(a,b,c){var y=[]
var x="function "+b+"("
var w=""
for(var v=0;v<c.length;v++){if(v!=0)x+=", "
var u=generateAccessor(c[v],y,b)
var t="parameter_"+u
x+=t
w+="this."+u+" = "+t+";\n"}x+=") {\n"+w+"}\n"
x+=b+".builtin$cls=\""+a+"\";\n"
x+="$desc=$collectedClasses."+b+";\n"
x+="if($desc instanceof Array) $desc = $desc[1];\n"
x+=b+".prototype = $desc;\n"
if(typeof defineClass.name!="string"){x+=b+".name=\""+b+"\";\n"}x+=y.join("")
return x}var z=function(){function tmp(){}var y=Object.prototype.hasOwnProperty
return function(a,b){tmp.prototype=b.prototype
var x=new tmp()
var w=a.prototype
for(var v in w)if(y.call(w,v))x[v]=w[v]
x.constructor=a
a.prototype=x
return x}}()
I.$finishClasses=function(a,b,c){var y={}
if(!init.allClasses)init.allClasses={}
var x=init.allClasses
var w=Object.prototype.hasOwnProperty
if(typeof dart_precompiled=="function"){var v=dart_precompiled(a)}else{var u="function $reflectable(fn){fn.$reflectable=1;return fn};\n"+"var $desc;\n"
var t=[]}for(var s in a){if(w.call(a,s)){var r=a[s]
if(r instanceof Array)r=r[1]
var q=r["^"],p,o=s,n=q
if(typeof q=="string"){var m=q.split("/")
if(m.length==2){o=m[0]
n=m[1]}}var l=n.split(";")
n=l[1]==""?[]:l[1].split(",")
p=l[0]
m=p.split(":")
if(m.length==2){p=m[0]
var k=m[1]
if(k)r.$signature=function(d){return function(){return init.metadata[d]}}(k)}if(typeof dart_precompiled!="function"){u+=defineClass(o,s,n)
t.push(s)}if(p)y[s]=p}}if(typeof dart_precompiled!="function"){u+="return [\n  "+t.join(",\n  ")+"\n]"
var v=new Function("$collectedClasses",u)(a)
u=null}for(var j=0;j<v.length;j++){var i=v[j]
var s=i.name
var r=a[s]
var h=b
if(r instanceof Array){h=r[0]||b
r=r[1]}x[s]=i
h[s]=i}v=null
var g={}
init.interceptorsByTag=Object.create(null)
init.leafTags={}
function finishClass(a7){var f=Object.prototype.hasOwnProperty
if(f.call(g,a7))return
g[a7]=true
var e=y[a7]
if(!e||typeof e!="string")return
finishClass(e)
var d=x[a7]
var a0=x[e]
if(!a0)a0=c[e]
var a1=z(d,a0)
if(f.call(a1,"%")){var a2=a1["%"].split(";")
if(a2[0]){var a3=a2[0].split("|")
for(var a4=0;a4<a3.length;a4++){init.interceptorsByTag[a3[a4]]=d
init.leafTags[a3[a4]]=true}}if(a2[1]){a3=a2[1].split("|")
if(a2[2]){var a5=a2[2].split("|")
for(var a4=0;a4<a5.length;a4++){var a6=x[a5[a4]]
a6.$nativeSuperclassTag=a3[0]}}for(a4=0;a4<a3.length;a4++){init.interceptorsByTag[a3[a4]]=d
init.leafTags[a3[a4]]=false}}}}for(var s in y)finishClass(s)}
I.$lazy=function(a,b,c,d,e){var y={}
var x={}
a[c]=y
a[d]=function(){var w=$[c]
try{if(w===y){$[c]=x
try{w=$[c]=e()}finally{if(w===y)if($[c]===x)$[c]=null}}else{if(w===x)H.eQ(b)}return w}finally{$[d]=function(){return this[c]}}}}
I.$finishIsolateConstructor=function(a){var y=a.p
function Isolate(){var x=Object.prototype.hasOwnProperty
for(var w in y)if(x.call(y,w))this[w]=y[w]
function ForceEfficientMap(){}ForceEfficientMap.prototype=this
new ForceEfficientMap()}Isolate.prototype=a.prototype
Isolate.prototype.constructor=Isolate
Isolate.p=y
Isolate.$finishClasses=a.$finishClasses
return Isolate}}
})()
