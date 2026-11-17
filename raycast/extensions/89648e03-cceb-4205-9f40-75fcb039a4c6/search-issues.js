"use strict";var Wi=Object.create;var Ia=Object.defineProperty;var Ki=Object.getOwnPropertyDescriptor;var Yi=Object.getOwnPropertyNames;var Ji=Object.getPrototypeOf,Zi=Object.prototype.hasOwnProperty;var Ir=(e,t,a)=>()=>{if(a)throw a[0];try{return e&&(t=e(e=0)),t}catch(n){throw a=[n],n}};var D=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(a){throw t=0,a}},St=(e,t)=>{for(var a in t)Ia(e,a,{get:t[a],enumerable:!0})},ba=(e,t,a,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of Yi(t))!Zi.call(e,r)&&r!==a&&Ia(e,r,{get:()=>t[r],enumerable:!(n=Ki(t,r))||n.enumerable});return e},Y=(e,t,a)=>(ba(e,t,"default"),a&&ba(a,t,"default")),w=(e,t,a)=>(a=e!=null?Wi(Ji(e)):{},ba(t||!e||!e.__esModule?Ia(a,"default",{value:e,enumerable:!0}):a,e)),Xi=e=>ba(Ia({},"__esModule",{value:!0}),e);var yn=D(ga=>{"use strict";Object.defineProperty(ga,"__esModule",{value:!0});ga.useDeepMemo=void 0;var gr=require("react"),es=require("dequal/lite");function ts(e){let t=(0,gr.useRef)(e),a=(0,gr.useRef)(0);return(0,es.dequal)(e,t.current)||(t.current=e,a.current+=1),(0,gr.useMemo)(()=>t.current,[a.current])}ga.useDeepMemo=ts});var we=D(Ma=>{"use strict";Object.defineProperty(Ma,"__esModule",{value:!0});Ma.useLatest=void 0;var as=require("react");function rs(e){let t=(0,as.useRef)(e);return t.current=e,t}Ma.useLatest=rs});var Nt=D(Re=>{"use strict";var ns=Re&&Re.__createBinding||(Object.create?(function(e,t,a,n){n===void 0&&(n=a);var r=Object.getOwnPropertyDescriptor(t,a);(!r||("get"in r?!t.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,r)}):(function(e,t,a,n){n===void 0&&(n=a),e[n]=t[a]})),os=Re&&Re.__setModuleDefault||(Object.create?(function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}):function(e,t){e.default=t}),Sn=Re&&Re.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var a in e)a!=="default"&&Object.prototype.hasOwnProperty.call(e,a)&&ns(t,e,a);return os(t,e),t};Object.defineProperty(Re,"__esModule",{value:!0});Re.showFailureToast=void 0;var is=Sn(require("fs")),ss=Sn(require("path")),bt=require("@raycast/api");function us(e,t){let a=e instanceof Error?e.message:String(e);return(0,bt.showToast)({style:bt.Toast.Style.Failure,title:t?.title??"Something went wrong",message:t?.message??a,primaryAction:t?.primaryAction??dn(e),secondaryAction:t?.primaryAction?dn(e):void 0})}Re.showFailureToast=us;var dn=e=>{let t=!0,a="[Extension Name]...",n="";try{let u=JSON.parse(is.readFileSync(ss.join(bt.environment.assetsPath,"..","package.json"),"utf8"));a=`[${u.title}]...`,n=`https://raycast.com/${u.owner||u.author}/${u.name}`,(!u.owner||u.access==="public")&&(t=!1)}catch{}let r=bt.environment.isDevelopment||t,o=e instanceof Error?e?.stack||e?.message||"":String(e);return{title:r?"Copy Logs":"Report Error",onAction(u){u.hide(),r?bt.Clipboard.copy(o):(0,bt.open)(`https://github.com/raycast/extensions/issues/new?&labels=extension%2Cbug&template=extension_bug_report.yml&title=${encodeURIComponent(a)}&extension-url=${encodeURI(n)}&description=${encodeURIComponent(`#### Error:
\`\`\`
${o}
\`\`\`
`)}`)}}}});var It=D(ma=>{"use strict";Object.defineProperty(ma,"__esModule",{value:!0});ma.usePromise=void 0;var re=require("react"),Vt=require("@raycast/api"),ps=yn(),ze=we(),ls=Nt();function cs(e,t,a){let n=(0,re.useRef)(0),[r,o]=(0,re.useState)({isLoading:!0}),u=(0,ze.useLatest)(e),s=(0,ze.useLatest)(a?.abortable),i=(0,ze.useLatest)(t||[]),p=(0,ze.useLatest)(a?.onError),c=(0,ze.useLatest)(a?.onData),y=(0,ze.useLatest)(a?.onWillExecute),m=(0,ze.useLatest)(a?.failureToastOptions),f=(0,ze.useLatest)(r.data),l=(0,re.useRef)(),g=(0,re.useRef)({page:0}),I=(0,re.useRef)(!1),M=(0,re.useRef)(!0),R=(0,re.useRef)(50),S=(0,re.useCallback)((...G)=>{let B=++n.current;s.current&&(s.current.current?.abort(),s.current.current=new AbortController),y.current?.(G),o(x=>({...x,isLoading:!0}));let be=ys(u.current)(...G);function me(x){return x.name=="AbortError"||B===n.current&&(p.current?p.current(x):Vt.environment.launchType!==Vt.LaunchType.Background&&(0,ls.showFailureToast)(x,{title:"Failed to fetch latest data",primaryAction:{title:"Retry",onAction(ae){ae.hide(),l.current?.(...i.current||[])}},...m.current}),o({error:x,isLoading:!1})),x}return typeof be=="function"?(I.current=!0,be(g.current).then(({data:x,hasMore:ae,cursor:qt})=>(B===n.current&&(g.current&&(g.current.cursor=qt,g.current.lastItem=x?.[x.length-1]),c.current&&c.current(x,g.current),ae&&(R.current=x.length),M.current=ae,o(br=>g.current.page===0?{data:x,isLoading:!1}:{data:(br.data||[])?.concat(x),isLoading:!1})),x),x=>(M.current=!1,me(x)))):(I.current=!1,be.then(x=>(B===n.current&&(c.current&&c.current(x),o({data:x,isLoading:!1})),x),me))},[s,c,p,i,u,o,l,y,g,m]);l.current=S;let b=(0,re.useCallback)(()=>{g.current={page:0};let G=i.current||[];return S(...G)},[S,i]),P=(0,re.useCallback)(async(G,B)=>{let be;try{if(B?.optimisticUpdate){typeof B?.rollbackOnError!="function"&&B?.rollbackOnError!==!1&&(be=structuredClone(f.current?.value));let me=B.optimisticUpdate;o(x=>({...x,data:me(x.data)}))}return await G}catch(me){if(typeof B?.rollbackOnError=="function"){let x=B.rollbackOnError;o(ae=>({...ae,data:x(ae.data)}))}else B?.optimisticUpdate&&B?.rollbackOnError!==!1&&o(x=>({...x,data:be}));throw me}finally{B?.shouldRevalidateAfter!==!1&&(Vt.environment.launchType===Vt.LaunchType.Background||Vt.environment.commandMode==="menu-bar"?await b():b())}},[b,f,o]),E=(0,re.useCallback)(()=>{g.current.page+=1;let G=i.current||[];S(...G)},[g,i,S]);(0,re.useEffect)(()=>{g.current={page:0},a?.execute!==!1?S(...t||[]):s.current&&s.current.current?.abort()},[(0,ps.useDeepMemo)([t,a?.execute,S]),s,g]),(0,re.useEffect)(()=>()=>{s.current&&s.current.current?.abort()},[s]);let _=a?.execute!==!1?r.isLoading:!1,z={...r,isLoading:_},Se=I.current?{pageSize:R.current,hasMore:M.current,onLoadMore:E}:void 0;return{...z,revalidate:b,mutate:P,pagination:Se}}ma.usePromise=cs;function ys(e){return e===Promise.all||e===Promise.race||e===Promise.resolve||e===Promise.reject?e.bind(Promise):e}});var He=D(Ae=>{"use strict";var ds=Ae&&Ae.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Ae,"__esModule",{value:!0});Ae.hash=Ae.reviver=Ae.replacer=void 0;var Ss=ds(require("object-hash"));function bs(e,t){let a=this[e];return a instanceof Date?`__raycast_cached_date__${a.toString()}`:Buffer.isBuffer(a)?`__raycast_cached_buffer__${a.toString("base64")}`:t}Ae.replacer=bs;function Is(e,t){return typeof t=="string"&&t.startsWith("__raycast_cached_date__")?new Date(t.replace("__raycast_cached_date__","")):typeof t=="string"&&t.startsWith("__raycast_cached_buffer__")?Buffer.from(t.replace("__raycast_cached_buffer__",""),"base64"):t}Ae.reviver=Is;function gs(e,t){return(0,Ss.default)(e,{replacer:a=>a instanceof URLSearchParams?a.toString():a,...t})}Ae.hash=gs});var Aa=D(Ra=>{"use strict";Object.defineProperty(Ra,"__esModule",{value:!0});Ra.useCachedState=void 0;var Mr=require("react"),Ms=require("@raycast/api"),mr=we(),bn=He(),ms=Symbol("cache without namespace"),In=new Map;function Rs(e,t,a){let n=a?.cacheNamespace||ms,r=In.get(n)||In.set(n,new Ms.Cache({namespace:a?.cacheNamespace})).get(n);if(!r)throw new Error("Missing cache");let o=(0,mr.useLatest)(e),u=(0,mr.useLatest)(t),s=(0,Mr.useSyncExternalStore)(r.subscribe,()=>{try{return r.get(o.current)}catch(y){console.error("Could not get Cache data:",y);return}}),i=(0,Mr.useMemo)(()=>{if(typeof s<"u"){if(s==="undefined")return;try{return JSON.parse(s,bn.reviver)}catch(y){return console.warn("The cached data is corrupted",y),u.current}}else return u.current},[s,u]),p=(0,mr.useLatest)(i),c=(0,Mr.useCallback)(y=>{let m=typeof y=="function"?y(p.current):y;if(typeof m>"u")r.set(o.current,"undefined");else{let f=JSON.stringify(m,bn.replacer);r.set(o.current,f)}return m},[r,o,p]);return[i,c]}Ra.useCachedState=Rs});var kt=D(fa=>{"use strict";Object.defineProperty(fa,"__esModule",{value:!0});fa.useCachedPromise=void 0;var Ft=require("react"),As=Aa(),fs=It(),Ps=we(),gn=He(),gt=Symbol();function Es(e,t,a){let{initialData:n,keepPreviousData:r,internal_cacheKeySuffix:o,...u}=a||{},s=(0,Ft.useRef)(),[i,p]=(0,As.useCachedState)((0,gn.hash)(t||[])+o,gt,{cacheNamespace:(0,gn.hash)(e)}),c=(0,Ft.useRef)(i!==gt?i:n),y=(0,Ft.useRef)(void 0),{mutate:m,revalidate:f,...l}=(0,fs.usePromise)(e,t||[],{...u,onData(S,b){y.current=b,u.onData&&u.onData(S,b),!(b&&b.page>0)&&(s.current="promise",c.current=S,p(S))}}),g,I=l.pagination;y.current&&y.current.page>0&&l.data?g=l.data:s.current==="promise"?g=c.current:r&&i!==gt?(g=i,I&&(I.hasMore=!0,I.pageSize=i.length)):r&&i===gt?g=c.current:i!==gt?(g=i,I&&(I.hasMore=!0,I.pageSize=i.length)):g=n;let M=(0,Ps.useLatest)(g),R=(0,Ft.useCallback)(async(S,b)=>{let P;try{if(b?.optimisticUpdate){typeof b?.rollbackOnError!="function"&&b?.rollbackOnError!==!1&&(P=structuredClone(M.current));let E=b.optimisticUpdate(M.current);s.current="cache",c.current=E,p(E)}return await m(S,{shouldRevalidateAfter:b?.shouldRevalidateAfter})}catch(E){if(typeof b?.rollbackOnError=="function"){let _=b.rollbackOnError(M.current);s.current="cache",c.current=_,p(_)}else b?.optimisticUpdate&&b?.rollbackOnError!==!1&&(s.current="cache",c.current=P,p(P));throw E}},[p,m,M,c,s]);return(0,Ft.useEffect)(()=>{i!==gt&&(s.current="cache",c.current=i)},[i]),{data:g,isLoading:l.isLoading,error:l.error,mutate:y.current&&y.current.page>0?m:R,pagination:I,revalidate:f}}fa.useCachedPromise=Es});var Un=D((ge,xn)=>{"use strict";Object.defineProperty(ge,"__esModule",{value:!0});function At(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var Ie=At(require("stream")),An=At(require("http")),Ea=At(require("url")),fn=At(require("whatwg-url")),Cs=At(require("https")),tt=At(require("zlib")),hs=Ie.Readable,Oe=Symbol("buffer"),Rr=Symbol("type"),zt=class e{constructor(){this[Rr]="";let t=arguments[0],a=arguments[1],n=[],r=0;if(t){let u=t,s=Number(u.length);for(let i=0;i<s;i++){let p=u[i],c;p instanceof Buffer?c=p:ArrayBuffer.isView(p)?c=Buffer.from(p.buffer,p.byteOffset,p.byteLength):p instanceof ArrayBuffer?c=Buffer.from(p):p instanceof e?c=p[Oe]:c=Buffer.from(typeof p=="string"?p:String(p)),r+=c.length,n.push(c)}}this[Oe]=Buffer.concat(n);let o=a&&a.type!==void 0&&String(a.type).toLowerCase();o&&!/[^\u0020-\u007E]/.test(o)&&(this[Rr]=o)}get size(){return this[Oe].length}get type(){return this[Rr]}text(){return Promise.resolve(this[Oe].toString())}arrayBuffer(){let t=this[Oe],a=t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength);return Promise.resolve(a)}stream(){let t=new hs;return t._read=function(){},t.push(this[Oe]),t.push(null),t}toString(){return"[object Blob]"}slice(){let t=this.size,a=arguments[0],n=arguments[1],r,o;a===void 0?r=0:a<0?r=Math.max(t+a,0):r=Math.min(a,t),n===void 0?o=t:n<0?o=Math.max(t+n,0):o=Math.min(n,t);let u=Math.max(o-r,0),i=this[Oe].slice(r,r+u),p=new e([],{type:arguments[2]});return p[Oe]=i,p}};Object.defineProperties(zt.prototype,{size:{enumerable:!0},type:{enumerable:!0},slice:{enumerable:!0}});Object.defineProperty(zt.prototype,Symbol.toStringTag,{value:"Blob",writable:!1,enumerable:!1,configurable:!0});function j(e,t,a){Error.call(this,e),this.message=e,this.type=t,a&&(this.code=this.errno=a.code),Error.captureStackTrace(this,this.constructor)}j.prototype=Object.create(Error.prototype);j.prototype.constructor=j;j.prototype.name="FetchError";var Er;try{Er=require("encoding").convert}catch{}var Le=Symbol("Body internals"),Mn=Ie.PassThrough;function L(e){var t=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.size;let r=n===void 0?0:n;var o=a.timeout;let u=o===void 0?0:o;e==null?e=null:Pn(e)?e=Buffer.from(e.toString()):Gt(e)||Buffer.isBuffer(e)||(Object.prototype.toString.call(e)==="[object ArrayBuffer]"?e=Buffer.from(e):ArrayBuffer.isView(e)?e=Buffer.from(e.buffer,e.byteOffset,e.byteLength):e instanceof Ie||(e=Buffer.from(String(e)))),this[Le]={body:e,disturbed:!1,error:null},this.size=r,this.timeout=u,e instanceof Ie&&e.on("error",function(s){let i=s.name==="AbortError"?s:new j(`Invalid response body while trying to fetch ${t.url}: ${s.message}`,"system",s);t[Le].error=i})}L.prototype={get body(){return this[Le].body},get bodyUsed(){return this[Le].disturbed},arrayBuffer(){return Mt.call(this).then(function(e){return e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength)})},blob(){let e=this.headers&&this.headers.get("content-type")||"";return Mt.call(this).then(function(t){return Object.assign(new zt([],{type:e.toLowerCase()}),{[Oe]:t})})},json(){var e=this;return Mt.call(this).then(function(t){try{return JSON.parse(t.toString())}catch(a){return L.Promise.reject(new j(`invalid json response body at ${e.url} reason: ${a.message}`,"invalid-json"))}})},text(){return Mt.call(this).then(function(e){return e.toString()})},buffer(){return Mt.call(this)},textConverted(){var e=this;return Mt.call(this).then(function(t){return Ds(t,e.headers)})}};Object.defineProperties(L.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0}});L.mixIn=function(e){for(let t of Object.getOwnPropertyNames(L.prototype))if(!(t in e)){let a=Object.getOwnPropertyDescriptor(L.prototype,t);Object.defineProperty(e,t,a)}};function Mt(){var e=this;if(this[Le].disturbed)return L.Promise.reject(new TypeError(`body used already for: ${this.url}`));if(this[Le].disturbed=!0,this[Le].error)return L.Promise.reject(this[Le].error);let t=this.body;if(t===null)return L.Promise.resolve(Buffer.alloc(0));if(Gt(t)&&(t=t.stream()),Buffer.isBuffer(t))return L.Promise.resolve(t);if(!(t instanceof Ie))return L.Promise.resolve(Buffer.alloc(0));let a=[],n=0,r=!1;return new L.Promise(function(o,u){let s;e.timeout&&(s=setTimeout(function(){r=!0,u(new j(`Response timeout while trying to fetch ${e.url} (over ${e.timeout}ms)`,"body-timeout"))},e.timeout)),t.on("error",function(i){i.name==="AbortError"?(r=!0,u(i)):u(new j(`Invalid response body while trying to fetch ${e.url}: ${i.message}`,"system",i))}),t.on("data",function(i){if(!(r||i===null)){if(e.size&&n+i.length>e.size){r=!0,u(new j(`content size at ${e.url} over limit: ${e.size}`,"max-size"));return}n+=i.length,a.push(i)}}),t.on("end",function(){if(!r){clearTimeout(s);try{o(Buffer.concat(a,n))}catch(i){u(new j(`Could not create Buffer from response body for ${e.url}: ${i.message}`,"system",i))}}})})}function Ds(e,t){if(typeof Er!="function")throw new Error("The package `encoding` must be installed to use the textConverted() function");let a=t.get("content-type"),n="utf-8",r,o;return a&&(r=/charset=([^;]*)/i.exec(a)),o=e.slice(0,1024).toString(),!r&&o&&(r=/<meta.+?charset=(['"])(.+?)\1/i.exec(o)),!r&&o&&(r=/<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(o),r||(r=/<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(o),r&&r.pop()),r&&(r=/charset=(.*)/i.exec(r.pop()))),!r&&o&&(r=/<\?xml.+?encoding=(['"])(.+?)\1/i.exec(o)),r&&(n=r.pop(),(n==="gb2312"||n==="gbk")&&(n="gb18030")),Er(e,"UTF-8",n).toString()}function Pn(e){return typeof e!="object"||typeof e.append!="function"||typeof e.delete!="function"||typeof e.get!="function"||typeof e.getAll!="function"||typeof e.has!="function"||typeof e.set!="function"?!1:e.constructor.name==="URLSearchParams"||Object.prototype.toString.call(e)==="[object URLSearchParams]"||typeof e.sort=="function"}function Gt(e){return typeof e=="object"&&typeof e.arrayBuffer=="function"&&typeof e.type=="string"&&typeof e.stream=="function"&&typeof e.constructor=="function"&&typeof e.constructor.name=="string"&&/^(Blob|File)$/.test(e.constructor.name)&&/^(Blob|File)$/.test(e[Symbol.toStringTag])}function En(e){let t,a,n=e.body;if(e.bodyUsed)throw new Error("cannot clone body after it is used");return n instanceof Ie&&typeof n.getBoundary!="function"&&(t=new Mn,a=new Mn,n.pipe(t),n.pipe(a),e[Le].body=t,n=a),n}function Cn(e){return e===null?null:typeof e=="string"?"text/plain;charset=UTF-8":Pn(e)?"application/x-www-form-urlencoded;charset=UTF-8":Gt(e)?e.type||null:Buffer.isBuffer(e)||Object.prototype.toString.call(e)==="[object ArrayBuffer]"||ArrayBuffer.isView(e)?null:typeof e.getBoundary=="function"?`multipart/form-data;boundary=${e.getBoundary()}`:e instanceof Ie?null:"text/plain;charset=UTF-8"}function hn(e){let t=e.body;return t===null?0:Gt(t)?t.size:Buffer.isBuffer(t)?t.length:t&&typeof t.getLengthSync=="function"&&(t._lengthRetrievers&&t._lengthRetrievers.length==0||t.hasKnownLength&&t.hasKnownLength())?t.getLengthSync():null}function xs(e,t){let a=t.body;a===null?e.end():Gt(a)?a.stream().pipe(e):Buffer.isBuffer(a)?(e.write(a),e.end()):a.pipe(e)}L.Promise=global.Promise;var Dn=/[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/,Cr=/[^\t\x20-\x7e\x80-\xff]/;function jt(e){if(e=`${e}`,Dn.test(e)||e==="")throw new TypeError(`${e} is not a legal HTTP header name`)}function mn(e){if(e=`${e}`,Cr.test(e))throw new TypeError(`${e} is not a legal HTTP header value`)}function mt(e,t){t=t.toLowerCase();for(let a in e)if(a.toLowerCase()===t)return a}var O=Symbol("map"),pe=class e{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:void 0;if(this[O]=Object.create(null),t instanceof e){let a=t.raw(),n=Object.keys(a);for(let r of n)for(let o of a[r])this.append(r,o);return}if(t!=null)if(typeof t=="object"){let a=t[Symbol.iterator];if(a!=null){if(typeof a!="function")throw new TypeError("Header pairs must be iterable");let n=[];for(let r of t){if(typeof r!="object"||typeof r[Symbol.iterator]!="function")throw new TypeError("Each header pair must be iterable");n.push(Array.from(r))}for(let r of n){if(r.length!==2)throw new TypeError("Each header pair must be a name/value tuple");this.append(r[0],r[1])}}else for(let n of Object.keys(t)){let r=t[n];this.append(n,r)}}else throw new TypeError("Provided initializer must be an object")}get(t){t=`${t}`,jt(t);let a=mt(this[O],t);return a===void 0?null:this[O][a].join(", ")}forEach(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:void 0,n=hr(this),r=0;for(;r<n.length;){var o=n[r];let u=o[0],s=o[1];t.call(a,s,u,this),n=hr(this),r++}}set(t,a){t=`${t}`,a=`${a}`,jt(t),mn(a);let n=mt(this[O],t);this[O][n!==void 0?n:t]=[a]}append(t,a){t=`${t}`,a=`${a}`,jt(t),mn(a);let n=mt(this[O],t);n!==void 0?this[O][n].push(a):this[O][t]=[a]}has(t){return t=`${t}`,jt(t),mt(this[O],t)!==void 0}delete(t){t=`${t}`,jt(t);let a=mt(this[O],t);a!==void 0&&delete this[O][a]}raw(){return this[O]}keys(){return Ar(this,"key")}values(){return Ar(this,"value")}[Symbol.iterator](){return Ar(this,"key+value")}};pe.prototype.entries=pe.prototype[Symbol.iterator];Object.defineProperty(pe.prototype,Symbol.toStringTag,{value:"Headers",writable:!1,enumerable:!1,configurable:!0});Object.defineProperties(pe.prototype,{get:{enumerable:!0},forEach:{enumerable:!0},set:{enumerable:!0},append:{enumerable:!0},has:{enumerable:!0},delete:{enumerable:!0},keys:{enumerable:!0},values:{enumerable:!0},entries:{enumerable:!0}});function hr(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"key+value";return Object.keys(e[O]).sort().map(t==="key"?function(n){return n.toLowerCase()}:t==="value"?function(n){return e[O][n].join(", ")}:function(n){return[n.toLowerCase(),e[O][n].join(", ")]})}var Dr=Symbol("internal");function Ar(e,t){let a=Object.create(xr);return a[Dr]={target:e,kind:t,index:0},a}var xr=Object.setPrototypeOf({next(){if(!this||Object.getPrototypeOf(this)!==xr)throw new TypeError("Value of `this` is not a HeadersIterator");var e=this[Dr];let t=e.target,a=e.kind,n=e.index,r=hr(t,a),o=r.length;return n>=o?{value:void 0,done:!0}:(this[Dr].index=n+1,{value:r[n],done:!1})}},Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));Object.defineProperty(xr,Symbol.toStringTag,{value:"HeadersIterator",writable:!1,enumerable:!1,configurable:!0});function Us(e){let t=Object.assign({__proto__:null},e[O]),a=mt(e[O],"Host");return a!==void 0&&(t[a]=t[a][0]),t}function _s(e){let t=new pe;for(let a of Object.keys(e))if(!Dn.test(a))if(Array.isArray(e[a]))for(let n of e[a])Cr.test(n)||(t[O][a]===void 0?t[O][a]=[n]:t[O][a].push(n));else Cr.test(e[a])||(t[O][a]=[e[a]]);return t}var Ge=Symbol("Response internals"),vs=An.STATUS_CODES,ue=class e{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};L.call(this,t,a);let n=a.status||200,r=new pe(a.headers);if(t!=null&&!r.has("Content-Type")){let o=Cn(t);o&&r.append("Content-Type",o)}this[Ge]={url:a.url,status:n,statusText:a.statusText||vs[n],headers:r,counter:a.counter}}get url(){return this[Ge].url||""}get status(){return this[Ge].status}get ok(){return this[Ge].status>=200&&this[Ge].status<300}get redirected(){return this[Ge].counter>0}get statusText(){return this[Ge].statusText}get headers(){return this[Ge].headers}clone(){return new e(En(this),{url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected})}};L.mixIn(ue.prototype);Object.defineProperties(ue.prototype,{url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}});Object.defineProperty(ue.prototype,Symbol.toStringTag,{value:"Response",writable:!1,enumerable:!1,configurable:!0});var Be=Symbol("Request internals"),Ts=Ea.URL||fn.URL,ws=Ea.parse,Os=Ea.format;function fr(e){return/^[a-zA-Z][a-zA-Z\d+\-.]*:/.exec(e)&&(e=new Ts(e).toString()),ws(e)}var Bs="destroy"in Ie.Readable.prototype;function Pa(e){return typeof e=="object"&&typeof e[Be]=="object"}function Ls(e){let t=e&&typeof e=="object"&&Object.getPrototypeOf(e);return!!(t&&t.constructor.name==="AbortSignal")}var Qe=class e{constructor(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n;Pa(t)?n=fr(t.url):(t&&t.href?n=fr(t.href):n=fr(`${t}`),t={});let r=a.method||t.method||"GET";if(r=r.toUpperCase(),(a.body!=null||Pa(t)&&t.body!==null)&&(r==="GET"||r==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");let o=a.body!=null?a.body:Pa(t)&&t.body!==null?En(t):null;L.call(this,o,{timeout:a.timeout||t.timeout||0,size:a.size||t.size||0});let u=new pe(a.headers||t.headers||{});if(o!=null&&!u.has("Content-Type")){let i=Cn(o);i&&u.append("Content-Type",i)}let s=Pa(t)?t.signal:null;if("signal"in a&&(s=a.signal),s!=null&&!Ls(s))throw new TypeError("Expected signal to be an instanceof AbortSignal");this[Be]={method:r,redirect:a.redirect||t.redirect||"follow",headers:u,parsedURL:n,signal:s},this.follow=a.follow!==void 0?a.follow:t.follow!==void 0?t.follow:20,this.compress=a.compress!==void 0?a.compress:t.compress!==void 0?t.compress:!0,this.counter=a.counter||t.counter||0,this.agent=a.agent||t.agent}get method(){return this[Be].method}get url(){return Os(this[Be].parsedURL)}get headers(){return this[Be].headers}get redirect(){return this[Be].redirect}get signal(){return this[Be].signal}clone(){return new e(this)}};L.mixIn(Qe.prototype);Object.defineProperty(Qe.prototype,Symbol.toStringTag,{value:"Request",writable:!1,enumerable:!1,configurable:!0});Object.defineProperties(Qe.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0}});function qs(e){let t=e[Be].parsedURL,a=new pe(e[Be].headers);if(a.has("Accept")||a.set("Accept","*/*"),!t.protocol||!t.hostname)throw new TypeError("Only absolute URLs are supported");if(!/^https?:$/.test(t.protocol))throw new TypeError("Only HTTP(S) protocols are supported");if(e.signal&&e.body instanceof Ie.Readable&&!Bs)throw new Error("Cancellation of streamed requests with AbortSignal is not supported in node < 8");let n=null;if(e.body==null&&/^(POST|PUT)$/i.test(e.method)&&(n="0"),e.body!=null){let o=hn(e);typeof o=="number"&&(n=String(o))}n&&a.set("Content-Length",n),a.has("User-Agent")||a.set("User-Agent","node-fetch/1.0 (+https://github.com/bitinn/node-fetch)"),e.compress&&!a.has("Accept-Encoding")&&a.set("Accept-Encoding","gzip,deflate");let r=e.agent;return typeof r=="function"&&(r=r(t)),Object.assign({},t,{method:e.method,headers:Us(a),agent:r})}function Rt(e){Error.call(this,e),this.type="aborted",this.message=e,Error.captureStackTrace(this,this.constructor)}Rt.prototype=Object.create(Error.prototype);Rt.prototype.constructor=Rt;Rt.prototype.name="AbortError";var Ht=Ea.URL||fn.URL,Rn=Ie.PassThrough,Ns=function(t,a){let n=new Ht(a).hostname,r=new Ht(t).hostname;return n===r||n[n.length-r.length-1]==="."&&n.endsWith(r)},Vs=function(t,a){let n=new Ht(a).protocol,r=new Ht(t).protocol;return n===r};function $e(e,t){if(!$e.Promise)throw new Error("native promise missing, set fetch.Promise to your favorite alternative");return L.Promise=$e.Promise,new $e.Promise(function(a,n){let r=new Qe(e,t),o=qs(r),u=(o.protocol==="https:"?Cs:An).request,s=r.signal,i=null,p=function(){let g=new Rt("The user aborted a request.");n(g),r.body&&r.body instanceof Ie.Readable&&Pr(r.body,g),!(!i||!i.body)&&i.body.emit("error",g)};if(s&&s.aborted){p();return}let c=function(){p(),f()},y=u(o),m;s&&s.addEventListener("abort",c);function f(){y.abort(),s&&s.removeEventListener("abort",c),clearTimeout(m)}r.timeout&&y.once("socket",function(l){m=setTimeout(function(){n(new j(`network timeout at: ${r.url}`,"request-timeout")),f()},r.timeout)}),y.on("error",function(l){n(new j(`request to ${r.url} failed, reason: ${l.message}`,"system",l)),i&&i.body&&Pr(i.body,l),f()}),Fs(y,function(l){s&&s.aborted||i&&i.body&&Pr(i.body,l)}),parseInt(process.version.substring(1))<14&&y.on("socket",function(l){l.addListener("close",function(g){let I=l.listenerCount("data")>0;if(i&&I&&!g&&!(s&&s.aborted)){let M=new Error("Premature close");M.code="ERR_STREAM_PREMATURE_CLOSE",i.body.emit("error",M)}})}),y.on("response",function(l){clearTimeout(m);let g=_s(l.headers);if($e.isRedirect(l.statusCode)){let b=g.get("Location"),P=null;try{P=b===null?null:new Ht(b,r.url).toString()}catch{if(r.redirect!=="manual"){n(new j(`uri requested responds with an invalid redirect URL: ${b}`,"invalid-redirect")),f();return}}switch(r.redirect){case"error":n(new j(`uri requested responds with a redirect, redirect mode is set to error: ${r.url}`,"no-redirect")),f();return;case"manual":if(P!==null)try{g.set("Location",P)}catch(_){n(_)}break;case"follow":if(P===null)break;if(r.counter>=r.follow){n(new j(`maximum redirect reached at: ${r.url}`,"max-redirect")),f();return}let E={headers:new pe(r.headers),follow:r.follow,counter:r.counter+1,agent:r.agent,compress:r.compress,method:r.method,body:r.body,signal:r.signal,timeout:r.timeout,size:r.size};if(!Ns(r.url,P)||!Vs(r.url,P))for(let _ of["authorization","www-authenticate","cookie","cookie2"])E.headers.delete(_);if(l.statusCode!==303&&r.body&&hn(r)===null){n(new j("Cannot follow redirect with body being a readable stream","unsupported-redirect")),f();return}(l.statusCode===303||(l.statusCode===301||l.statusCode===302)&&r.method==="POST")&&(E.method="GET",E.body=void 0,E.headers.delete("content-length")),a($e(new Qe(P,E))),f();return}}l.once("end",function(){s&&s.removeEventListener("abort",c)});let I=l.pipe(new Rn),M={url:r.url,status:l.statusCode,statusText:l.statusMessage,headers:g,size:r.size,timeout:r.timeout,counter:r.counter},R=g.get("Content-Encoding");if(!r.compress||r.method==="HEAD"||R===null||l.statusCode===204||l.statusCode===304){i=new ue(I,M),a(i);return}let S={flush:tt.Z_SYNC_FLUSH,finishFlush:tt.Z_SYNC_FLUSH};if(R=="gzip"||R=="x-gzip"){I=I.pipe(tt.createGunzip(S)),i=new ue(I,M),a(i);return}if(R=="deflate"||R=="x-deflate"){let b=l.pipe(new Rn);b.once("data",function(P){(P[0]&15)===8?I=I.pipe(tt.createInflate()):I=I.pipe(tt.createInflateRaw()),i=new ue(I,M),a(i)}),b.on("end",function(){i||(i=new ue(I,M),a(i))});return}if(R=="br"&&typeof tt.createBrotliDecompress=="function"){I=I.pipe(tt.createBrotliDecompress()),i=new ue(I,M),a(i);return}i=new ue(I,M),a(i)}),xs(y,r)})}function Fs(e,t){let a;e.on("socket",function(n){a=n}),e.on("response",function(n){let r=n.headers;r["transfer-encoding"]==="chunked"&&!r["content-length"]&&n.once("close",function(o){if(a&&a.listenerCount("data")>0&&!o){let s=new Error("Premature close");s.code="ERR_STREAM_PREMATURE_CLOSE",t(s)}})})}function Pr(e,t){e.destroy?e.destroy(t):(e.emit("error",t),e.end())}$e.isRedirect=function(e){return e===301||e===302||e===303||e===307||e===308};$e.Promise=global.Promise;xn.exports=ge=$e;Object.defineProperty(ge,"__esModule",{value:!0});ge.default=ge;ge.Headers=pe;ge.Request=Qe;ge.Response=ue;ge.FetchError=j;ge.AbortError=Rt});var Qt=D((at,_n)=>{var $t=Un(),ks=$t.default||$t,Ca=function(e,t){return/^\/\//.test(e)&&(e="https:"+e),ks.call(this,e,t)};Ca.ponyfill=!0;_n.exports=at=Ca;at.fetch=Ca;at.Headers=$t.Headers;at.Request=$t.Request;at.Response=$t.Response;at.default=Ca});var Ur=D(ha=>{"use strict";Object.defineProperty(ha,"__esModule",{value:!0});ha.isJSON=void 0;function js(e){if(e){let t=Hs(e);if(!t)return!1;if(t.subtype==="json"||t.suffix==="json"||t.suffix&&/\bjson\b/i.test(t.suffix)||t.subtype&&/\bjson\b/i.test(t.subtype))return!0}return!1}ha.isJSON=js;var zs=/^([A-Za-z0-9][A-Za-z0-9!#$&^_-]{0,126})\/([A-Za-z0-9][A-Za-z0-9!#$&^_.+-]{0,126});?$/;function Hs(e){let t=e.indexOf(";"),a=t!==-1?e.slice(0,t).trim():e.trim(),n=zs.exec(a.toLowerCase().toLowerCase());if(!n)return;let r=n[1],o=n[2],u,s=o.lastIndexOf("+");return s!==-1&&(u=o.substring(s+1),o=o.substring(0,s)),{type:r,subtype:o,suffix:u}}});var On=D(Da=>{"use strict";Object.defineProperty(Da,"__esModule",{value:!0});Da.useFetch=void 0;var ft=require("react"),Gs=kt(),vn=we(),Tn=Qt(),$s=Ur(),wn=He();async function Qs(e){if(!e.ok)throw new Error(e.statusText);let t=e.headers.get("content-type");return t&&(0,$s.isJSON)(t)?await e.json():await e.text()}function Ws(e){return{data:e,hasMore:!1}}function Ks(e,t){let{parseResponse:a,mapResult:n,initialData:r,execute:o,keepPreviousData:u,onError:s,onData:i,onWillExecute:p,failureToastOptions:c,...y}=t||{},m={initialData:r,execute:o,keepPreviousData:u,onError:s,onData:i,onWillExecute:p,failureToastOptions:c},f=(0,vn.useLatest)(a||Qs),l=(0,vn.useLatest)(n||Ws),g=(0,ft.useRef)(),I=(0,ft.useRef)(),M=typeof e=="function"?e({page:0}):void 0;(!g.current||typeof I.current>"u"||I.current!==M)&&(g.current=e),I.current=M;let R=(0,ft.useRef)(),S=(0,ft.useCallback)((E,_)=>async z=>{let Se=await(0,Tn.fetch)(E(z),{signal:R.current?.signal,..._}),G=await f.current(Se);return l.current?.(G)},[f,l]),b=(0,ft.useCallback)(async(E,_)=>{let z=await(0,Tn.fetch)(E,{signal:R.current?.signal,..._}),Se=await f.current(z);return l.current(Se)?.data},[f,l]),P=(0,ft.useMemo)(()=>I.current?S:b,[I,b,S]);return(0,Gs.useCachedPromise)(P,[g.current,y],{...m,internal_cacheKeySuffix:I.current+(0,wn.hash)(l.current)+(0,wn.hash)(f.current),abortable:R})}Da.useFetch=Ks});var xa=D(le=>{"use strict";var Ys=le&&le.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(le,"__esModule",{value:!0});le.defaultParsing=le.handleOutput=le.getSpawnedResult=le.getSpawnedPromise=void 0;var Js=require("node:buffer"),qn=Ys(require("node:stream")),Zs=require("node:util"),Xs=require("signal-exit");function eu(e,{timeout:t}={}){let a=new Promise((s,i)=>{e.on("exit",(p,c)=>{s({exitCode:p,signal:c,timedOut:!1})}),e.on("error",p=>{i(p)}),e.stdin&&e.stdin.on("error",p=>{i(p)})});if(t===0||t===void 0)return a;let n,r=new Promise((s,i)=>{n=setTimeout(()=>{e.kill("SIGTERM"),i(Object.assign(new Error("Timed out"),{timedOut:!0,signal:"SIGTERM"}))},t)}),o=a.finally(()=>{clearTimeout(n)}),u=(0,Xs.onExit)(()=>{e.kill()});return Promise.race([r,o]).finally(()=>u())}le.getSpawnedPromise=eu;var _r=class extends Error{constructor(){super("The output is too big"),this.name="MaxBufferError"}},tu=(0,Zs.promisify)(qn.default.pipeline);function au(e){let{encoding:t}=e,a=t==="buffer",n=new qn.default.PassThrough({objectMode:!1});t&&t!=="buffer"&&n.setEncoding(t);let r=0,o=[];return n.on("data",u=>{o.push(u),r+=u.length}),n.getBufferedValue=()=>a?Buffer.concat(o,r):o.join(""),n.getBufferedLength=()=>r,n}async function Bn(e,t){let a=au(t);return await new Promise((n,r)=>{let o=u=>{u&&a.getBufferedLength()<=Js.constants.MAX_LENGTH&&(u.bufferedData=a.getBufferedValue()),r(u)};(async()=>{try{await tu(e,a),n()}catch(u){o(u)}})(),a.on("data",()=>{a.getBufferedLength()>1e3*1e3*80&&o(new _r)})}),a.getBufferedValue()}async function Ln(e,t){e.destroy();try{return await t}catch(a){return a.bufferedData}}async function ru({stdout:e,stderr:t},{encoding:a},n){let r=Bn(e,{encoding:a}),o=Bn(t,{encoding:a});try{return await Promise.all([n,r,o])}catch(u){return Promise.all([{error:u,exitCode:null,signal:u.signal,timedOut:u.timedOut||!1},Ln(e,r),Ln(t,o)])}}le.getSpawnedResult=ru;function nu(e){let t=typeof e=="string"?`
`:10,a=typeof e=="string"?"\r":13;return e[e.length-1]===t&&(e=e.slice(0,-1)),e[e.length-1]===a&&(e=e.slice(0,-1)),e}function ou(e,t){return e.stripFinalNewline?nu(t):t}le.handleOutput=ou;var iu=({timedOut:e,timeout:t,signal:a,exitCode:n})=>e?`timed out after ${t} milliseconds`:a!=null?`was killed with ${a}`:n!=null?`failed with exit code ${n}`:"failed",su=({stdout:e,stderr:t,error:a,signal:n,exitCode:r,command:o,timedOut:u,options:s,parentError:i})=>{let c=`Command ${iu({timedOut:u,timeout:s?.timeout,signal:n,exitCode:r})}: ${o}`,y=a?`${c}
${a.message}`:c,m=[y,t,e].filter(Boolean).join(`
`);return a?a.originalMessage=a.message:a=i,a.message=m,a.shortMessage=y,a.command=o,a.exitCode=r,a.signal=n,a.stdout=e,a.stderr=t,"bufferedData"in a&&delete a.bufferedData,a};function uu({stdout:e,stderr:t,error:a,exitCode:n,signal:r,timedOut:o,command:u,options:s,parentError:i}){if(a||n!==0||r!==null)throw su({error:a,exitCode:n,signal:r,stdout:e,stderr:t,command:u,timedOut:o,options:s,parentError:i});return e}le.defaultParsing=uu});var Vn=D(Pt=>{"use strict";var pu=Pt&&Pt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Pt,"__esModule",{value:!0});Pt.useExec=void 0;var lu=pu(require("node:child_process")),Nn=require("react"),cu=kt(),yu=we(),Wt=xa(),du=/ +/g;function Su(e,t){if(t)return[e,...t];let a=[];for(let n of e.trim().split(du)){let r=a[a.length-1];r&&r.endsWith("\\")?a[a.length-1]=`${r.slice(0,-1)} ${n}`:a.push(n)}return a}function bu(e,t,a){let{parseOutput:n,input:r,onData:o,onWillExecute:u,initialData:s,execute:i,keepPreviousData:p,onError:c,failureToastOptions:y,...m}=Array.isArray(t)?a||{}:t||{},f={initialData:s,execute:i,keepPreviousData:p,onError:c,onData:o,onWillExecute:u,failureToastOptions:y},l=(0,Nn.useRef)(),g=(0,yu.useLatest)(n||Wt.defaultParsing),I=(0,Nn.useCallback)(async(M,R,S,b)=>{let[P,...E]=Su(M,R),_=[P,...E].join(" "),z={stripFinalNewline:!0,...S,timeout:S?.timeout||1e4,signal:l.current?.signal,encoding:S?.encoding===null?"buffer":S?.encoding||"utf8",env:{PATH:"/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin",...process.env,...S?.env}},Se=lu.default.spawn(P,E,z),G=(0,Wt.getSpawnedPromise)(Se,z);b&&Se.stdin.end(b);let[{error:B,exitCode:be,signal:me,timedOut:x},ae,qt]=await(0,Wt.getSpawnedResult)(Se,z,G),br=(0,Wt.handleOutput)(z,ae),Qi=(0,Wt.handleOutput)(z,qt);return g.current({stdout:br,stderr:Qi,error:B,exitCode:be,signal:me,timedOut:x,command:_,options:z,parentError:new Error})},[g]);return(0,cu.useCachedPromise)(I,[e,Array.isArray(t)?t:[],m,r],{...f,abortable:l})}Pt.useExec=bu});var zn=D(Et=>{"use strict";var _a=Et&&Et.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Et,"__esModule",{value:!0});Et.useStreamJSON=void 0;var Iu=require("@raycast/api"),Fn=_a(Qt()),Jt=require("node:fs"),vr=require("node:fs/promises"),Ua=require("node:path"),kn=require("node:stream/promises"),Kt=require("react"),gu=_a(require("stream-chain")),Mu=require("stream-json"),mu=_a(require("stream-json/filters/Pick")),Ru=_a(require("stream-json/streamers/StreamArray")),jn=Ur(),Au=kt(),fu=He();async function Yt(e,t,a){if(typeof e=="object"||e.startsWith("http://")||e.startsWith("https://"))return await Pu(e,t,a);if(e.startsWith("file://"))return await Eu((0,Ua.normalize)(decodeURIComponent(new URL(e).pathname)),t,a?.signal?a.signal:void 0);throw new Error("Only HTTP(S) or file URLs are supported")}async function Pu(e,t,a){let n=await(0,Fn.default)(e,a);if(!n.ok)throw new Error("Failed to fetch URL");if(!(0,jn.isJSON)(n.headers.get("content-type")))throw new Error("URL does not return JSON");if(!n.body)throw new Error("Failed to retrieve expected JSON content: Response body is missing or inaccessible.");await(0,kn.pipeline)(n.body,(0,Jt.createWriteStream)(t),a?.signal?{signal:a.signal}:void 0)}async function Eu(e,t,a){await(0,kn.pipeline)((0,Jt.createReadStream)(e),(0,Jt.createWriteStream)(t),a?{signal:a}:void 0)}async function Cu(e,t,a,n,r){let o=(0,Ua.join)(t,a);try{await(0,vr.stat)(t)}catch{(0,Jt.mkdirSync)(t,{recursive:!0}),await Yt(e,o,r);return}if(n){await Yt(e,o,r);return}let u;try{u=await(0,vr.stat)(o)}catch{await Yt(e,o,r);return}if(typeof e=="object"||e.startsWith("http://")||e.startsWith("https://")){let s=await(0,Fn.default)(e,{...r,method:"HEAD"});if(!s.ok)throw new Error("Could not fetch URL");if(!(0,jn.isJSON)(s.headers.get("content-type")))throw new Error("URL does not return JSON");let i=Date.parse(s.headers.get("last-modified")??"");if(u.size===0||Number.isNaN(i)||i>u.mtimeMs){await Yt(e,o,r);return}}else if(e.startsWith("file://"))try{(await(0,vr.stat)((0,Ua.normalize)(decodeURIComponent(new URL(e).pathname)))).mtimeMs>u.mtimeMs&&await Yt(e,o,r)}catch{throw new Error("Source file could not be read")}else throw new Error("Only HTTP(S) or file URLs are supported")}async function*hu(e,t,a,n,r,o){let u=[],s=new gu.default([(0,Jt.createReadStream)(e),n?mu.default.withParser({filter:n}):(0,Mu.parser)(),new Ru.default,i=>o?.(i.value)??i.value]);a?.addEventListener("abort",()=>{s.destroy()});try{for await(let i of s){if(a?.aborted)return[];(!r||r(i))&&u.push(i),u.length>=t&&(yield u,u=[])}}catch(i){throw s.destroy(),i}return u.length>0&&(yield u),[]}function Du(e,t){let{initialData:a,execute:n,keepPreviousData:r,onError:o,onData:u,onWillExecute:s,failureToastOptions:i,dataPath:p,filter:c,transform:y,pageSize:m=20,...f}=t??{},l=(0,Kt.useRef)(),g=(0,Kt.useRef)(),I={initialData:a,execute:n,keepPreviousData:r,onError:o,onData:u,onWillExecute:s,failureToastOptions:i},M=(0,Kt.useRef)(null),R=(0,Kt.useRef)(null),S=(0,Kt.useRef)(!1);return(0,Au.useCachedPromise)((b,P,E,_,z,Se)=>async({page:G})=>{let B=(0,fu.hash)(b)+".json",be=Iu.environment.supportPath;if(G===0){R.current?.abort(),R.current=new AbortController;let ae=(0,Ua.join)(be,B),qt=!!(l.current&&l.current!==b&&g.current&&g.current===ae);l.current=b,g.current=ae,await Cu(b,be,B,qt,{...E,signal:R.current?.signal}),M.current=hu(ae,P,R.current?.signal,_,z,Se)}if(!M.current)return{hasMore:S.current,data:[]};let{value:me,done:x}=await M.current.next();return S.current=!x,{hasMore:S.current,data:me??[]}},[e,m,f,p,c,y],I)}Et.useStreamJSON=Du});var wr=D(fe=>{"use strict";var Tr=fe&&fe.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(fe,"__esModule",{value:!0});fe.baseExecuteSQL=fe.isPermissionError=fe.PermissionError=void 0;var xu=require("node:fs"),va=require("node:fs/promises"),Uu=Tr(require("node:os")),Hn=Tr(require("node:child_process")),Gn=Tr(require("node:path")),Ta=xa(),_u=He(),Oa=class extends Error{constructor(t){super(t),this.name="PermissionError"}};fe.PermissionError=Oa;function vu(e){return e instanceof Error&&e.name==="PermissionError"}fe.isPermissionError=vu;async function Tu(e,t,a){if(!(0,xu.existsSync)(e))throw new Error("The database does not exist");let n=a?.signal,r,o=Hn.default.spawn("sqlite3",["--json","--readonly",e,t],{signal:n}),u=(0,Ta.getSpawnedPromise)(o),[{error:s,exitCode:i,signal:p},c,y]=await(0,Ta.getSpawnedResult)(o,{encoding:"utf-8"},u);if(wa(n),y.match("(5)")||y.match("(14)")){if(!r){let m=Gn.default.join(Uu.default.tmpdir(),"useSQL",(0,_u.hash)(e));await(0,va.mkdir)(m,{recursive:!0}),wa(n),r=Gn.default.join(m,"db.db"),await(0,va.copyFile)(e,r),await(0,va.writeFile)(r+"-shm",""),await(0,va.writeFile)(r+"-wal",""),wa(n)}o=Hn.default.spawn("sqlite3",["--json","--readonly","--vfs","unix-none",r,t],{signal:n}),u=(0,Ta.getSpawnedPromise)(o),[{error:s,exitCode:i,signal:p},c,y]=await(0,Ta.getSpawnedResult)(o,{encoding:"utf-8"},u),wa(n)}if(s||i!==0||p!==null)throw y.includes("authorization denied")?new Oa("You do not have permission to access the database."):new Error(y||"Unknown error");return JSON.parse(c.trim()||"[]")}fe.baseExecuteSQL=Tu;function wa(e){if(e?.aborted){let t=new Error("aborted");throw t.name="AbortError",t}}});var Qn=D(Ct=>{"use strict";var wu=Ct&&Ct.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Ct,"__esModule",{value:!0});Ct.useSQL=void 0;var Pe=require("react/jsx-runtime"),$=require("@raycast/api"),Ou=require("node:fs"),Bu=wu(require("node:os")),Ba=require("react"),Lu=It(),qu=we(),Nu=Nt(),Or=wr();function Vu(e,t,a){let{permissionPriming:n,...r}=a||{},[o,u]=(0,Ba.useState)(),s=(0,qu.useLatest)(a||{}),i=(0,Ba.useRef)(),p=(0,Ba.useCallback)(y=>{console.error(y);let m=y instanceof Error&&y.message.includes("authorization denied")?new Or.PermissionError("You do not have permission to access the database."):y;(0,Or.isPermissionError)(m)?u((0,Pe.jsx)(Fu,{priming:s.current.permissionPriming})):s.current.onError?s.current.onError(m):$.environment.launchType!==$.LaunchType.Background&&(0,Nu.showFailureToast)(m,{title:"Cannot query the data"})},[s]),c=(0,Ba.useMemo)(()=>{if(!(0,Ou.existsSync)(e))throw new Error("The database does not exist");return async(y,m)=>{let f=i.current?.signal;return(0,Or.baseExecuteSQL)(y,m,{signal:f})}},[e]);return{...(0,Lu.usePromise)(c,[e,t],{...r,onError:p}),permissionView:o}}Ct.useSQL=Vu;var $n=parseInt(Bu.default.release().split(".")[0])>=22,Br=$n?"Settings":"Preferences";function Fu(e){let t=$n?{title:"Open System Settings -> Privacy",target:"x-apple.systempreferences:com.apple.preference.security?Privacy_AllFiles"}:{title:"Open System Preferences -> Security",target:"x-apple.systempreferences:com.apple.preference.security?Privacy_AllFiles"};return $.environment.commandMode==="menu-bar"?(0,Pe.jsxs)($.MenuBarExtra,{icon:$.Icon.Warning,title:$.environment.commandName,children:[(0,Pe.jsx)($.MenuBarExtra.Item,{title:"Raycast needs full disk access",tooltip:`You can revert this access in ${Br} whenever you want`}),e.priming?(0,Pe.jsx)($.MenuBarExtra.Item,{title:e.priming,tooltip:`You can revert this access in ${Br} whenever you want`}):null,(0,Pe.jsx)($.MenuBarExtra.Separator,{}),(0,Pe.jsx)($.MenuBarExtra.Item,{title:t.title,onAction:()=>(0,$.open)(t.target)})]}):(0,Pe.jsx)($.List,{children:(0,Pe.jsx)($.List.EmptyView,{icon:{source:{light:"https://raycast.com/uploads/extensions-utils-security-permissions-light.png",dark:"https://raycast.com/uploads/extensions-utils-security-permissions-dark.png"}},title:"Raycast needs full disk access.",description:`${e.priming?e.priming+`
`:""}You can revert this access in ${Br} whenever you want.`,actions:(0,Pe.jsx)($.ActionPanel,{children:(0,Pe.jsx)($.Action.Open,{...t})})})})}});var Kn=D(ht=>{"use strict";Object.defineProperty(ht,"__esModule",{value:!0});ht.useForm=ht.FormValidation=void 0;var qe=require("react"),Wn=we(),qr;(function(e){e.Required="required"})(qr||(ht.FormValidation=qr={}));function Lr(e,t){if(e){if(typeof e=="function")return e(t);if(e===qr.Required){let a=typeof t<"u"&&t!==null;if(a)switch(typeof t){case"string":a=t.length>0;break;case"object":Array.isArray(t)?a=t.length>0:t instanceof Date&&(a=t.getTime()>0);break;default:break}if(!a)return"The item is required"}}}function ku(e){let{onSubmit:t,validation:a,initialValues:n={}}=e,[r,o]=(0,qe.useState)(n),[u,s]=(0,qe.useState)({}),i=(0,qe.useRef)({}),p=(0,Wn.useLatest)(a||{}),c=(0,Wn.useLatest)(t),y=(0,qe.useCallback)(M=>{i.current[M]?.focus()},[i]),m=(0,qe.useCallback)(async M=>{let R=!1;for(let[b,P]of Object.entries(p.current)){let E=Lr(P,M[b]);E&&(R||(R={},y(b)),R[b]=E)}if(R)return s(R),!1;let S=await c.current(M);return typeof S=="boolean"?S:!0},[p,c,y]),f=(0,qe.useCallback)((M,R)=>{s(S=>({...S,[M]:R}))},[s]),l=(0,qe.useCallback)(function(M,R){o(S=>({...S,[M]:typeof R=="function"?R(S[M]):R}))},[o]),g=(0,qe.useMemo)(()=>new Proxy({},{get(M,R){let S=p.current[R],b=r[R];return{onChange(P){u[R]&&(Lr(S,P)||f(R,void 0)),l(R,P)},onBlur(P){let E=Lr(S,P.target.value);E&&f(R,E)},error:u[R],id:R,value:typeof b>"u"?null:b,ref:P=>{i.current[R]=P}}}}),[u,p,f,r,i,l]),I=(0,qe.useCallback)(M=>{s({}),Object.entries(i.current).forEach(([R,S])=>{M?.[R]||S?.reset()}),M&&o(M)},[o,s,i]);return{handleSubmit:m,setValidationError:f,setValue:l,values:r,itemProps:g,focus:y,reset:I}}ht.useForm=ku});var Jn=D(La=>{"use strict";Object.defineProperty(La,"__esModule",{value:!0});La.useAI=void 0;var Yn=require("react"),ju=require("@raycast/api"),zu=It();function Hu(e,t={}){let{creativity:a,stream:n,model:r,...o}=t,[u,s]=(0,Yn.useState)(""),i=(0,Yn.useRef)(),{isLoading:p,error:c,revalidate:y}=(0,zu.usePromise)(async(m,f,l)=>{s("");let g=ju.AI.ask(m,{creativity:f,model:r,signal:i.current?.signal});l===!1?s(await g):(g.on("data",I=>{s(M=>M+I)}),await g)},[e,a,n],{...o,abortable:i});return{isLoading:p,data:u,error:c,revalidate:y}}La.useAI=Hu});var eo=D(qa=>{"use strict";Object.defineProperty(qa,"__esModule",{value:!0});qa.useFrecencySorting=void 0;var Nr=require("react"),Zn=we(),Gu=Aa(),$u=10,Xn=1440*60*1e3,Qu=Math.log(2)/($u*Xn),Wu={Default:100,Embed:0,Bookmark:140};function Ku(e){let t=Date.now(),a=e?e.lastVisited:0,n=e?e.frecency:0,r=(t-a)/Xn,o=Wu.Default*Math.exp(-Qu*r),u=n+o;return{lastVisited:t,frecency:u}}var Yu=e=>{if(process.env.NODE_ENV!=="production"&&(typeof e!="object"||!e||!("id"in e)||typeof e.id!="string"))throw new Error("Specify a key function or make sure your items have an 'id' property");return e.id};function Ju(e,t){let a=(0,Zn.useLatest)(t?.key||Yu),n=(0,Zn.useLatest)(t?.sortUnvisited),[r,o]=(0,Gu.useCachedState)(`raycast_frecency_${t?.namespace}`,{}),u=(0,Nr.useCallback)(async function(c){let y=a.current(c);o(m=>{let f=m[y],l=Ku(f);return{...m,[y]:l}})},[a,o]),s=(0,Nr.useCallback)(async function(c){let y=a.current(c);o(m=>{let f={...m};return delete f[y],f})},[a,o]);return{data:(0,Nr.useMemo)(()=>e?e.sort((p,c)=>{let y=r[a.current(p)],m=r[a.current(c)];return y&&!m?-1:!y&&m?1:y&&m?m.frecency-y.frecency:n.current?n.current(p,c):0}):[],[r,e,a,n]),visitItem:u,resetRanking:s}}qa.useFrecencySorting=Ju});var ro=D(Na=>{"use strict";Object.defineProperty(Na,"__esModule",{value:!0});Na.useLocalStorage=void 0;var Vr=require("@raycast/api"),to=Nt(),ao=He(),Zu=It();function Xu(e,t){let{data:a,isLoading:n,mutate:r}=(0,Zu.usePromise)(async s=>{let i=await Vr.LocalStorage.getItem(s);return typeof i<"u"?JSON.parse(i,ao.reviver):t},[e]);async function o(s){try{await r(Vr.LocalStorage.setItem(e,JSON.stringify(s,ao.replacer)),{optimisticUpdate(i){return i}})}catch(i){await(0,to.showFailureToast)(i,{title:"Failed to set value in local storage"})}}async function u(){try{await r(Vr.LocalStorage.removeItem(e),{optimisticUpdate(){}})}catch(s){await(0,to.showFailureToast)(s,{title:"Failed to remove value from local storage"})}}return{value:a,setValue:o,removeValue:u,isLoading:n}}Na.useLocalStorage=Xu});var uo=D(Dt=>{"use strict";Object.defineProperty(Dt,"__esModule",{value:!0});Dt.slightlyLighterColor=Dt.slightlyDarkerColor=void 0;function ep(e){let t=0,a=0,n=0;if(e.length===4)t=parseInt(`${e[1]}${e[1]}`,16),a=parseInt(`${e[2]}${e[2]}`,16),n=parseInt(`${e[3]}${e[3]}`,16);else if(e.length===7)t=parseInt(`${e[1]}${e[2]}`,16),a=parseInt(`${e[3]}${e[4]}`,16),n=parseInt(`${e[5]}${e[6]}`,16);else throw new Error(`Malformed hex color: ${e}`);return{r:t,g:a,b:n}}function tp({r:e,g:t,b:a}){let n=e.toString(16),r=t.toString(16),o=a.toString(16);return n.length===1&&(n=`0${n}`),r.length===1&&(r=`0${r}`),o.length===1&&(o=`0${o}`),`#${n}${r}${o}`}function ap({r:e,g:t,b:a}){e/=255,t/=255,a/=255;let n=Math.min(e,t,a),r=Math.max(e,t,a),o=r-n,u=0,s=0,i=0;return o===0?u=0:r===e?u=(t-a)/o%6:r===t?u=(a-e)/o+2:u=(e-t)/o+4,u=Math.round(u*60),u<0&&(u+=360),i=(r+n)/2,s=o===0?0:o/(1-Math.abs(2*i-1)),s=+(s*100).toFixed(1),i=+(i*100).toFixed(1),{h:u,s,l:i}}function rp({h:e,s:t,l:a}){t/=100,a/=100;let n=(1-Math.abs(2*a-1))*t,r=n*(1-Math.abs(e/60%2-1)),o=a-n/2,u=0,s=0,i=0;return e>=0&&e<60?(u=n,s=r,i=0):e>=60&&e<120?(u=r,s=n,i=0):e>=120&&e<180?(u=0,s=n,i=r):e>=180&&e<240?(u=0,s=r,i=n):e>=240&&e<300?(u=r,s=0,i=n):e>=300&&e<360&&(u=n,s=0,i=r),u=Math.round((u+o)*255),s=Math.round((s+o)*255),i=Math.round((i+o)*255),{r:u,g:s,b:i}}function no(e){return ap(ep(e))}function oo(e){return tp(rp(e))}function io(e,t,a){return t<a?e<t?t:e>a?a:e:e<a?a:e>t?t:e}var so=12;function np(e){let t=no(e);return oo({h:t.h,s:t.s,l:io(t.l-so,0,100)})}Dt.slightlyDarkerColor=np;function op(e){let t=no(e);return oo({h:t.h,s:t.s,l:io(t.l+so,0,100)})}Dt.slightlyLighterColor=op});var co=D(Va=>{"use strict";Object.defineProperty(Va,"__esModule",{value:!0});Va.getAvatarIcon=void 0;var po=uo();function xt(e,t){let a=e.charCodeAt(t);if(Number.isNaN(a))return["",t];if(a<55296||a>57343)return[e.charAt(t),t];if(55296<=a&&a<=56319){if(e.length<=t+1)throw new Error("High surrogate without following low surrogate");let r=e.charCodeAt(t+1);if(56320>r||r>57343)throw new Error("High surrogate without following low surrogate");return[e.charAt(t)+e.charAt(t+1),t+1]}if(t===0)throw new Error("Low surrogate without preceding high surrogate");let n=e.charCodeAt(t-1);if(55296>n||n>56319)throw new Error("Low surrogate without preceding high surrogate");return[e.charAt(t+1),t+1]}var lo=["#DC829A","#D64854","#D47600","#D36CDD","#52A9E4","#7871E8","#70920F","#43B93A","#EB6B3E","#26B795","#D85A9B","#A067DC","#BD9500","#5385D9"];function ip(e,t){let a=e.trim().split(" "),n;if(a.length==1&&xt(a[0],0)[0])n=xt(a[0],0)[0];else if(a.length>1){let i=xt(a[0],0)[0]||"",p=xt(a[a.length-1],0)[0]??"";n=i+p}else n="";let r;if(t?.background)r=t?.background;else{let i=0,[p,c]=xt(n,0);for(;p;)i+=p.charCodeAt(0),[p,c]=xt(n,c+1);let y=i%lo.length;r=lo[y]}let u=50-0;return`data:image/svg+xml,${`<svg width="100px" height="100px">
  ${t?.gradient!==!1?`<defs>
      <linearGradient id="Gradient" x1="0.25" x2="0.75" y1="0" y2="1">
        <stop offset="0%" stop-color="${(0,po.slightlyLighterColor)(r)}"/>
        <stop offset="50%" stop-color="${r}"/>
        <stop offset="100%" stop-color="${(0,po.slightlyDarkerColor)(r)}"/>
      </linearGradient>
  </defs>`:""}
      <circle cx="50" cy="50" r="${u}" fill="${t?.gradient!==!1?"url(#Gradient)":r}" />
      ${n?`<text x="50" y="80" font-size="${u-1}" font-family="Inter, sans-serif" text-anchor="middle" fill="white">${n.toUpperCase()}</text>`:""}
    </svg>
  `.replaceAll(`
`,"")}`}Va.getAvatarIcon=ip});var So=D(Fa=>{"use strict";Object.defineProperty(Fa,"__esModule",{value:!0});Fa.getFavicon=void 0;var yo=require("@raycast/api"),sp=require("url");function up(e,t){try{let n=(typeof e=="string"?new sp.URL(e):e).hostname;return{source:`https://www.google.com/s2/favicons?sz=${t?.size??64}&domain=${n}`,fallback:t?.fallback??yo.Icon.Link,mask:t?.mask}}catch(a){return console.error(a),yo.Icon.Link}}Fa.getFavicon=up});var go=D(ka=>{"use strict";Object.defineProperty(ka,"__esModule",{value:!0});ka.getProgressIcon=void 0;var bo=require("@raycast/api");function Io(e,t,a,n){let r=(n-90)*Math.PI/180;return{x:e+a*Math.cos(r),y:t+a*Math.sin(r)}}function pp(e,t,a,n,r){let o=Io(e,t,a,r),u=Io(e,t,a,n),s=r-n<=180?"0":"1";return["M",o.x,o.y,"A",a,a,0,s,0,u.x,u.y].join(" ")}function lp(e,t=bo.Color.Red,a){let n=a?.background||(bo.environment.appearance==="light"?"black":"white"),r=a?.backgroundOpacity||.1,o=10,s=50-5-o/2;return`data:image/svg+xml,${`<svg width="100px" height="100px">
      <circle cx="50" cy="50" r="${s}" stroke-width="${o}" stroke="${e<1?n:t}" opacity="${e<1?r:"1"}" fill="none" />
      ${e>0&&e<1?`<path d="${pp(50,50,s,0,e*360)}" stroke="${t}" stroke-width="${o}" fill="none" />`:""}
    </svg>
  `.replaceAll(`
`,"")}`}ka.getProgressIcon=lp});var Mo=D(Ne=>{"use strict";var cp=Ne&&Ne.__createBinding||(Object.create?(function(e,t,a,n){n===void 0&&(n=a);var r=Object.getOwnPropertyDescriptor(t,a);(!r||("get"in r?!t.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,r)}):(function(e,t,a,n){n===void 0&&(n=a),e[n]=t[a]})),Fr=Ne&&Ne.__exportStar||function(e,t){for(var a in e)a!=="default"&&!Object.prototype.hasOwnProperty.call(t,a)&&cp(t,e,a)};Object.defineProperty(Ne,"__esModule",{value:!0});Fr(co(),Ne);Fr(So(),Ne);Fr(go(),Ne)});var mo=D(H=>{"use strict";Object.defineProperty(H,"__esModule",{value:!0});H.zoomService=H.slackService=H.linearService=H.jiraService=H.googleService=H.githubService=H.asanaService=void 0;var Q=require("@raycast/api"),rt=kr(),ja={asana:"1191201745684312",github:"7235fe8d42157f1f38c0",linear:"c8ff37b9225c3c9aefd7d66ea0e5b6f1",slack:"851756884692.5546927290212"},We=e=>`data:image/svg+xml,${e}`,nt={asana:We('<svg xmlns="http://www.w3.org/2000/svg" width="251" height="232" fill="none"><path fill="#F06A6A" d="M179.383 54.373c0 30.017-24.337 54.374-54.354 54.374-30.035 0-54.373-24.338-54.373-54.374C70.656 24.338 94.993 0 125.029 0c30.017 0 54.354 24.338 54.354 54.373ZM54.393 122.33C24.376 122.33.02 146.668.02 176.685c0 30.017 24.337 54.373 54.373 54.373 30.035 0 54.373-24.338 54.373-54.373 0-30.017-24.338-54.355-54.373-54.355Zm141.253 0c-30.035 0-54.373 24.338-54.373 54.374 0 30.035 24.338 54.373 54.373 54.373 30.017 0 54.374-24.338 54.374-54.373 0-30.036-24.338-54.374-54.374-54.374Z"/></svg>'),github:{source:We('<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>'),tintColor:Q.Color.PrimaryText},google:We('<svg xmlns="http://www.w3.org/2000/svg" style="display:block" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/><path fill="none" d="M0 0h48v48H0z"/></svg>'),jira:We('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="2361" height="2500" viewBox="2.59 0 214.091 224"><linearGradient id="a" x1="102.4" x2="56.15" y1="218.63" y2="172.39" gradientTransform="matrix(1 0 0 -1 0 264)" gradientUnits="userSpaceOnUse"><stop offset=".18" stop-color="#0052cc"/><stop offset="1" stop-color="#2684ff"/></linearGradient><linearGradient xlink:href="#a" id="b" x1="114.65" x2="160.81" y1="85.77" y2="131.92"/><path fill="#2684ff" d="M214.06 105.73 117.67 9.34 108.33 0 35.77 72.56 2.59 105.73a8.89 8.89 0 0 0 0 12.54l66.29 66.29L108.33 224l72.55-72.56 1.13-1.12 32.05-32a8.87 8.87 0 0 0 0-12.59zm-105.73 39.39L75.21 112l33.12-33.12L141.44 112z"/><path fill="url(#a)" d="M108.33 78.88a55.75 55.75 0 0 1-.24-78.61L35.62 72.71l39.44 39.44z"/><path fill="url(#b)" d="m141.53 111.91-33.2 33.21a55.77 55.77 0 0 1 0 78.86L181 151.35z"/></svg>'),linear:{source:{light:We('<svg xmlns="http://www.w3.org/2000/svg" fill="#222326" width="200" height="200" viewBox="0 0 100 100"><path d="M1.22541 61.5228c-.2225-.9485.90748-1.5459 1.59638-.857L39.3342 97.1782c.6889.6889.0915 1.8189-.857 1.5964C20.0515 94.4522 5.54779 79.9485 1.22541 61.5228ZM.00189135 46.8891c-.01764375.2833.08887215.5599.28957165.7606L52.3503 99.7085c.2007.2007.4773.3075.7606.2896 2.3692-.1476 4.6938-.46 6.9624-.9259.7645-.157 1.0301-1.0963.4782-1.6481L2.57595 39.4485c-.55186-.5519-1.49117-.2863-1.648174.4782-.465915 2.2686-.77832 4.5932-.92588465 6.9624ZM4.21093 29.7054c-.16649.3738-.08169.8106.20765 1.1l64.77602 64.776c.2894.2894.7262.3742 1.1.2077 1.7861-.7956 3.5171-1.6927 5.1855-2.684.5521-.328.6373-1.0867.1832-1.5407L8.43566 24.3367c-.45409-.4541-1.21271-.3689-1.54074.1832-.99132 1.6684-1.88843 3.3994-2.68399 5.1855ZM12.6587 18.074c-.3701-.3701-.393-.9637-.0443-1.3541C21.7795 6.45931 35.1114 0 49.9519 0 77.5927 0 100 22.4073 100 50.0481c0 14.8405-6.4593 28.1724-16.7199 37.3375-.3903.3487-.984.3258-1.3542-.0443L12.6587 18.074Z"/></svg>'),dark:We('<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="200" height="200" viewBox="0 0 100 100"><path d="M1.22541 61.5228c-.2225-.9485.90748-1.5459 1.59638-.857L39.3342 97.1782c.6889.6889.0915 1.8189-.857 1.5964C20.0515 94.4522 5.54779 79.9485 1.22541 61.5228ZM.00189135 46.8891c-.01764375.2833.08887215.5599.28957165.7606L52.3503 99.7085c.2007.2007.4773.3075.7606.2896 2.3692-.1476 4.6938-.46 6.9624-.9259.7645-.157 1.0301-1.0963.4782-1.6481L2.57595 39.4485c-.55186-.5519-1.49117-.2863-1.648174.4782-.465915 2.2686-.77832 4.5932-.92588465 6.9624ZM4.21093 29.7054c-.16649.3738-.08169.8106.20765 1.1l64.77602 64.776c.2894.2894.7262.3742 1.1.2077 1.7861-.7956 3.5171-1.6927 5.1855-2.684.5521-.328.6373-1.0867.1832-1.5407L8.43566 24.3367c-.45409-.4541-1.21271-.3689-1.54074.1832-.99132 1.6684-1.88843 3.3994-2.68399 5.1855ZM12.6587 18.074c-.3701-.3701-.393-.9637-.0443-1.3541C21.7795 6.45931 35.1114 0 49.9519 0 77.5927 0 100 22.4073 100 50.0481c0 14.8405-6.4593 28.1724-16.7199 37.3375-.3903.3487-.984.3258-1.3542-.0443L12.6587 18.074Z" /></svg>')}},slack:We('<svg xmlns="http://www.w3.org/2000/svg" viewBox="73 73 124 124"><style>.st0{fill:#e01e5a}.st1{fill:#36c5f0}.st2{fill:#2eb67d}.st3{fill:#ecb22e}</style><path d="M99.4 151.2c0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9h12.9v12.9zM105.9 151.2c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v32.3c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9v-32.3z" class="st0"/><path d="M118.8 99.4c-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v12.9h-12.9zM118.8 105.9c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H86.5c-7.1 0-12.9-5.8-12.9-12.9s5.8-12.9 12.9-12.9h32.3z" class="st1"/><path d="M170.6 118.8c0-7.1 5.8-12.9 12.9-12.9 7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9h-12.9v-12.9zM164.1 118.8c0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9V86.5c0-7.1 5.8-12.9 12.9-12.9 7.1 0 12.9 5.8 12.9 12.9v32.3z" class="st2"/><path d="M151.2 170.6c7.1 0 12.9 5.8 12.9 12.9 0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9v-12.9h12.9zM151.2 164.1c-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9h32.3c7.1 0 12.9 5.8 12.9 12.9 0 7.1-5.8 12.9-12.9 12.9h-32.3z" class="st3"/></svg>'),zoom:We('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 351.845 80"><path d="M73.786 78.835H10.88A10.842 10.842 0 0 1 .833 72.122a10.841 10.841 0 0 1 2.357-11.85L46.764 16.7h-31.23C6.954 16.699 0 9.744 0 1.165h58.014c4.414 0 8.357 2.634 10.046 6.712a10.843 10.843 0 0 1-2.356 11.85L22.13 63.302h36.122c8.58 0 15.534 6.955 15.534 15.534Zm278.059-48.544C351.845 13.588 338.256 0 321.553 0c-8.934 0-16.975 3.89-22.524 10.063C293.48 3.89 285.44 0 276.505 0c-16.703 0-30.291 13.588-30.291 30.291v48.544c8.579 0 15.534-6.955 15.534-15.534v-33.01c0-8.137 6.62-14.757 14.757-14.757s14.757 6.62 14.757 14.757v33.01c0 8.58 6.955 15.534 15.534 15.534V30.291c0-8.137 6.62-14.757 14.757-14.757s14.758 6.62 14.758 14.757v33.01c0 8.58 6.954 15.534 15.534 15.534V30.291ZM238.447 40c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.908-40 40-40 40 17.909 40 40Zm-15.534 0c0-13.512-10.954-24.466-24.466-24.466S173.98 26.488 173.98 40s10.953 24.466 24.466 24.466S222.913 53.512 222.913 40Zm-70.68 0c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.909-40 40-40 40 17.909 40 40Zm-15.534 0c0-13.512-10.954-24.466-24.466-24.466S87.767 26.488 87.767 40s10.954 24.466 24.466 24.466S136.699 53.512 136.699 40Z" style="fill:#0b5cff"/></svg>')},yp=e=>new rt.OAuthService({client:new Q.OAuth.PKCEClient({redirectMethod:Q.OAuth.RedirectMethod.Web,providerName:"Asana",providerIcon:nt.asana,providerId:"asana",description:"Connect your Asana account"}),clientId:e.clientId??ja.asana,authorizeUrl:e.authorizeUrl??"https://asana.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://asana.oauth.raycast.com/token",refreshTokenUrl:e.refreshTokenUrl??"https://asana.oauth.raycast.com/refresh-token",scope:e.scope,personalAccessToken:e.personalAccessToken,onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});H.asanaService=yp;var dp=e=>new rt.OAuthService({client:new Q.OAuth.PKCEClient({redirectMethod:Q.OAuth.RedirectMethod.Web,providerName:"GitHub",providerIcon:nt.github,providerId:"github",description:"Connect your GitHub account"}),clientId:e.clientId??ja.github,authorizeUrl:e.authorizeUrl??"https://github.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://github.oauth.raycast.com/token",refreshTokenUrl:e.refreshTokenUrl??"https://github.oauth.raycast.com/refresh-token",scope:e.scope,personalAccessToken:e.personalAccessToken,onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});H.githubService=dp;var Sp=e=>new rt.OAuthService({client:new Q.OAuth.PKCEClient({redirectMethod:Q.OAuth.RedirectMethod.AppURI,providerName:"Google",providerIcon:nt.google,providerId:"google",description:"Connect your Google account"}),clientId:e.clientId,authorizeUrl:e.authorizeUrl??"https://accounts.google.com/o/oauth2/v2/auth",tokenUrl:e.tokenUrl??"https://oauth2.googleapis.com/token",refreshTokenUrl:e.tokenUrl,scope:e.scope,personalAccessToken:e.personalAccessToken,bodyEncoding:e.bodyEncoding??"url-encoded",onAuthorize:e.onAuthorize,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});H.googleService=Sp;var bp=e=>new rt.OAuthService({client:new Q.OAuth.PKCEClient({redirectMethod:Q.OAuth.RedirectMethod.Web,providerName:"Jira",providerIcon:nt.jira,providerId:"jira",description:"Connect your Jira account"}),clientId:e.clientId,authorizeUrl:e.authorizeUrl??"https://auth.atlassian.com/authorize",tokenUrl:e.tokenUrl??"https://auth.atlassian.com/oauth/token",refreshTokenUrl:e.refreshTokenUrl,scope:e.scope,personalAccessToken:e.personalAccessToken,onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});H.jiraService=bp;var Ip=e=>new rt.OAuthService({client:new Q.OAuth.PKCEClient({redirectMethod:Q.OAuth.RedirectMethod.Web,providerName:"Linear",providerIcon:nt.linear,providerId:"linear",description:"Connect your Linear account"}),clientId:e.clientId??ja.linear,authorizeUrl:e.authorizeUrl??"https://linear.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://linear.oauth.raycast.com/token",refreshTokenUrl:e.refreshTokenUrl??"https://linear.oauth.raycast.com/refresh-token",scope:e.scope,extraParameters:{actor:"user"},onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});H.linearService=Ip;var gp=e=>new rt.OAuthService({client:new Q.OAuth.PKCEClient({redirectMethod:Q.OAuth.RedirectMethod.Web,providerName:"Slack",providerIcon:nt.slack,providerId:"slack",description:"Connect your Slack account"}),clientId:e.clientId??ja.slack,authorizeUrl:e.authorizeUrl??"https://slack.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://slack.oauth.raycast.com/token",refreshTokenUrl:e.tokenUrl??"https://slack.oauth.raycast.com/refresh-token",scope:"",extraParameters:{user_scope:e.scope},personalAccessToken:e.personalAccessToken,bodyEncoding:e.tokenUrl?e.bodyEncoding??"url-encoded":"json",onAuthorize:e.onAuthorize,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser??(t=>({access_token:t.authed_user.access_token,scope:t.authed_user.scope}))});H.slackService=gp;var Mp=e=>new rt.OAuthService({client:new Q.OAuth.PKCEClient({redirectMethod:Q.OAuth.RedirectMethod.Web,providerName:"Zoom",providerIcon:nt.zoom,providerId:"zoom",description:"Connect your Zoom account"}),clientId:e.clientId,authorizeUrl:e.authorizeUrl??"https://zoom.us/oauth/authorize",tokenUrl:e.tokenUrl??"https://zoom.us/oauth/token",refreshTokenUrl:e.refreshTokenUrl,scope:e.scope,personalAccessToken:e.personalAccessToken,bodyEncoding:e.bodyEncoding??"url-encoded",onAuthorize:e.onAuthorize,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});H.zoomService=Mp});var kr=D(Ut=>{"use strict";var mp=Ut&&Ut.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Ut,"__esModule",{value:!0});Ut.OAuthService=void 0;var Ro=mp(Qt()),ot=mo(),Ee=class{constructor(t){this.clientId=t.clientId,this.scope=Array.isArray(t.scope)?t.scope.join(" "):t.scope,this.personalAccessToken=t.personalAccessToken,this.bodyEncoding=t.bodyEncoding,this.client=t.client,this.extraParameters=t.extraParameters,this.authorizeUrl=t.authorizeUrl,this.tokenUrl=t.tokenUrl,this.refreshTokenUrl=t.refreshTokenUrl,this.onAuthorize=t.onAuthorize,this.tokenResponseParser=t.tokenResponseParser??(a=>a),this.tokenRefreshResponseParser=t.tokenRefreshResponseParser??(a=>a),this.authorize=this.authorize.bind(this)}async authorize(){let t=await this.client.getTokens();if(t?.accessToken){if(t.refreshToken&&t.isExpired()){let o=await this.refreshTokens({token:t.refreshToken});if(o)return await this.client.setTokens(o),o.access_token}return t.accessToken}let a=await this.client.authorizationRequest({endpoint:this.authorizeUrl,clientId:this.clientId,scope:this.scope,extraParameters:this.extraParameters}),{authorizationCode:n}=await this.client.authorize(a),r=await this.fetchTokens({authRequest:a,authorizationCode:n});return await this.client.setTokens(r),r.access_token}async fetchTokens({authRequest:t,authorizationCode:a}){let n;if(this.bodyEncoding==="url-encoded"){let u=new URLSearchParams;u.append("client_id",this.clientId),u.append("code",a),u.append("code_verifier",t.codeVerifier),u.append("grant_type","authorization_code"),u.append("redirect_uri",t.redirectURI),n={body:u}}else n={body:JSON.stringify({client_id:this.clientId,code:a,code_verifier:t.codeVerifier,grant_type:"authorization_code",redirect_uri:t.redirectURI}),headers:{"Content-Type":"application/json"}};let r=await(0,Ro.default)(this.tokenUrl,{method:"POST",...n});if(!r.ok){let u=await r.text();throw console.error("fetch tokens error:",u),new Error(`Error while fetching tokens: ${r.status} (${r.statusText})
${u}`)}let o=this.tokenResponseParser(await r.json());return Array.isArray(o.scope)?{...o,scope:o.scope.join(" ")}:o}async refreshTokens({token:t}){let a;if(this.bodyEncoding==="url-encoded"){let r=new URLSearchParams;r.append("client_id",this.clientId),r.append("refresh_token",t),r.append("grant_type","refresh_token"),a={body:r}}else a={body:JSON.stringify({client_id:this.clientId,refresh_token:t,grant_type:"refresh_token"}),headers:{"Content-Type":"application/json"}};let n=await(0,Ro.default)(this.refreshTokenUrl??this.tokenUrl,{method:"POST",...a});if(n.ok){let r=this.tokenRefreshResponseParser(await n.json());return r.refresh_token=r.refresh_token??t,r}else{let r=await n.text();console.error("refresh tokens error:",r),this.client.description=`${this.client.providerName} needs you to sign-in again. Press \u23CE or click the button below to continue.`,await this.client.removeTokens(),await this.authorize()}}};Ut.OAuthService=Ee;Ee.asana=ot.asanaService;Ee.github=ot.githubService;Ee.google=ot.googleService;Ee.jira=ot.jiraService;Ee.linear=ot.linearService;Ee.slack=ot.slackService;Ee.zoom=ot.zoomService});var Ao=D(_t=>{"use strict";Object.defineProperty(_t,"__esModule",{value:!0});_t.getAccessToken=_t.withAccessToken=void 0;var Rp=require("react/jsx-runtime"),Ap=require("@raycast/api"),Ke=null,it=null,jr=null,zr=null,Hr=null;function fp(e){return Ap.environment.commandMode==="no-view"?t=>async n=>{if(!Ke){Ke=e.personalAccessToken??await e.authorize(),it=e.personalAccessToken?"personal":"oauth";let r=(await e.client?.getTokens())?.idToken;e.onAuthorize&&await Promise.resolve(e.onAuthorize({token:Ke,type:it,idToken:r}))}return t(n)}:t=>{let a=n=>{e.personalAccessToken?(Ke=e.personalAccessToken,it="personal"):(jr||(jr=Gr(e.authorize())),Ke=jr.read(),it="oauth");let r;return e.client&&(zr||(zr=Gr(e.client.getTokens())),r=zr.read()?.idToken),!Hr&&e.onAuthorize&&(Hr=Gr(Promise.resolve(e.onAuthorize({token:Ke,type:it,idToken:r})))),Hr?.read(),(0,Rp.jsx)(t,{...n})};return a.displayName=`withAccessToken(${t.displayName||t.name})`,a}}_t.withAccessToken=fp;function Pp(){if(!Ke||!it)throw new Error("getAccessToken must be used when authenticated (eg. used inside `withAccessToken`)");return{token:Ke,type:it}}_t.getAccessToken=Pp;function Gr(e){let t="pending",a,n=e.then(o=>{t="success",a=o},o=>{t="error",a=o});return{read:()=>{switch(t){case"pending":throw n;case"error":throw a;default:return a}}}}});var Po=D(Ye=>{"use strict";var Ep=Ye&&Ye.__createBinding||(Object.create?(function(e,t,a,n){n===void 0&&(n=a);var r=Object.getOwnPropertyDescriptor(t,a);(!r||("get"in r?!t.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,r)}):(function(e,t,a,n){n===void 0&&(n=a),e[n]=t[a]})),fo=Ye&&Ye.__exportStar||function(e,t){for(var a in e)a!=="default"&&!Object.prototype.hasOwnProperty.call(t,a)&&Ep(t,e,a)};Object.defineProperty(Ye,"__esModule",{value:!0});fo(kr(),Ye);fo(Ao(),Ye)});var xo=D(ce=>{"use strict";var Eo=ce&&ce.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ce,"__esModule",{value:!0});ce.createDeeplink=ce.createExtensionDeeplink=ce.createScriptCommandDeeplink=ce.DeeplinkType=void 0;var Qr=require("@raycast/api"),Cp=Eo(require("node:fs")),hp=Eo(require("node:path")),$r;(function(e){e.ScriptCommand="script-command",e.Extension="extension"})($r||(ce.DeeplinkType=$r={}));function Co(){return Qr.environment.raycastVersion.includes("alpha")?"raycastinternal://":"raycast://"}function Dp(){let e=JSON.parse(Cp.default.readFileSync(hp.default.join(Qr.environment.assetsPath,"..","package.json"),"utf8"));return e.owner||e.author}function ho(e){let t=`${Co()}script-commands/${e.command}`;if(e.arguments){let a="";for(let n of e.arguments)a+="&arguments="+encodeURIComponent(n);t+="?"+a.substring(1)}return t}ce.createScriptCommandDeeplink=ho;function Do(e){let t=Dp(),a=Qr.environment.extensionName;"ownerOrAuthorName"in e&&"extensionName"in e&&(t=e.ownerOrAuthorName,a=e.extensionName);let n=`${Co()}extensions/${t}/${a}/${e.command}`,r="";return e.launchType&&(r+="&launchType="+encodeURIComponent(e.launchType)),e.arguments&&(r+="&arguments="+encodeURIComponent(JSON.stringify(e.arguments))),e.context&&(r+="&context="+encodeURIComponent(JSON.stringify(e.context))),e.fallbackText&&(r+="&fallbackText="+encodeURIComponent(e.fallbackText)),r&&(n+="?"+r.substring(1)),n}ce.createExtensionDeeplink=Do;function xp(e){return e.type===$r.ScriptCommand?ho(e):Do(e)}ce.createDeeplink=xp});var Uo=D(za=>{"use strict";Object.defineProperty(za,"__esModule",{value:!0});za.executeSQL=void 0;var Up=wr();function _p(e,t){return(0,Up.baseExecuteSQL)(e,t)}za.executeSQL=_p});var _o=D(vt=>{"use strict";var vp=vt&&vt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(vt,"__esModule",{value:!0});vt.runAppleScript=void 0;var Tp=vp(require("node:child_process")),Zt=xa();async function wp(e,t,a){let{humanReadableOutput:n,language:r,timeout:o,...u}=Array.isArray(t)?a||{}:t||{},s=n!==!1?[]:["-ss"];r==="JavaScript"&&s.push("-l","JavaScript"),Array.isArray(t)&&s.push("-",...t);let i=Tp.default.spawn("osascript",s,{...u,env:{PATH:"/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"}}),p=(0,Zt.getSpawnedPromise)(i,{timeout:o??1e4});i.stdin.end(e);let[{error:c,exitCode:y,signal:m,timedOut:f},l,g]=await(0,Zt.getSpawnedResult)(i,{encoding:"utf8"},p),I=(0,Zt.handleOutput)({stripFinalNewline:!0},l),M=(0,Zt.handleOutput)({stripFinalNewline:!0},g);return(0,Zt.defaultParsing)({stdout:I,stderr:M,error:c,exitCode:y,signal:m,timedOut:f,command:"osascript",options:a,parentError:new Error})}vt.runAppleScript=wp});var vo=D(Ga=>{"use strict";Object.defineProperty(Ga,"__esModule",{value:!0});Ga.withCache=void 0;var Op=require("@raycast/api"),Ha=He();function Bp(e,t){let a=new Op.Cache({namespace:(0,Ha.hash)(e)}),n=async(...r)=>{let o=(0,Ha.hash)(r||[])+t?.internal_cacheKeySuffix,u=a.get(o);if(u){let{data:i,timestamp:p}=JSON.parse(u,Ha.reviver);if(!(t?.maxAge&&Date.now()-p>t.maxAge)&&(!t?.validate||t.validate(i)))return i}let s=await e(...r);return a.set(o,JSON.stringify({data:s,timestamp:Date.now()},Ha.replacer)),s};return n.clearCache=()=>{a.clear()},n}Ga.withCache=Bp});var Ce=D(v=>{"use strict";var Lp=v&&v.__createBinding||(Object.create?(function(e,t,a,n){n===void 0&&(n=a);var r=Object.getOwnPropertyDescriptor(t,a);(!r||("get"in r?!t.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,r)}):(function(e,t,a,n){n===void 0&&(n=a),e[n]=t[a]})),q=v&&v.__exportStar||function(e,t){for(var a in e)a!=="default"&&!Object.prototype.hasOwnProperty.call(t,a)&&Lp(t,e,a)};Object.defineProperty(v,"__esModule",{value:!0});q(It(),v);q(Aa(),v);q(kt(),v);q(On(),v);q(Vn(),v);q(zn(),v);q(Qn(),v);q(Kn(),v);q(Jn(),v);q(eo(),v);q(ro(),v);q(Mo(),v);q(Po(),v);q(xo(),v);q(Uo(),v);q(_o(),v);q(Nt(),v);q(vo(),v)});var J={};St(J,{default:()=>zo.default});var zo,Za=Ir(()=>{Y(J,require("formdata-polyfill/esm.min.js"));zo=w(require("formdata-polyfill/esm.min.js"))});var ne={};St(ne,{default:()=>Qo.default});var Qo,Jr=Ir(()=>{Y(ne,require("fetch-blob/from.js"));Qo=w(require("fetch-blob/from.js"))});var Ko={};St(Ko,{toFormData:()=>rl});function al(e){let t=e.match(/\bfilename=("(.*?)"|([^()<>@,;:\\"/[\]?={}\s\t]+))($|;\s)/i);if(!t)return;let a=t[2]||t[3]||"",n=a.slice(a.lastIndexOf("\\")+1);return n=n.replace(/%22/g,'"'),n=n.replace(/&#(\d{4});/g,(r,o)=>String.fromCharCode(o)),n}async function rl(e,t){if(!/multipart/i.test(t))throw new TypeError("Failed to fetch");let a=t.match(/boundary=(?:"([^"]+)"|([^;]+))/i);if(!a)throw new TypeError("no or bad content-type header, no multipart boundary");let n=new Zr(a[1]||a[2]),r,o,u,s,i,p,c=[],y=new J.FormData,m=M=>{u+=I.decode(M,{stream:!0})},f=M=>{c.push(M)},l=()=>{let M=new ne.File(c,p,{type:i});y.append(s,M)},g=()=>{y.append(s,u)},I=new TextDecoder("utf-8");I.decode(),n.onPartBegin=function(){n.onPartData=m,n.onPartEnd=g,r="",o="",u="",s="",i="",p=null,c.length=0},n.onHeaderField=function(M){r+=I.decode(M,{stream:!0})},n.onHeaderValue=function(M){o+=I.decode(M,{stream:!0})},n.onHeaderEnd=function(){if(o+=I.decode(),r=r.toLowerCase(),r==="content-disposition"){let M=o.match(/\bname=("([^"]*)"|([^()<>@,;:\\"/[\]?={}\s\t]+))/i);M&&(s=M[2]||M[3]||""),p=al(o),p&&(n.onPartData=f,n.onPartEnd=l)}else r==="content-type"&&(i=o);o="",r=""};for await(let M of e)n.write(M);return n.end(),y}var he,U,Wo,Xe,er,tr,Jp,aa,Zp,Xp,el,tl,pt,Zr,Yo=Ir(()=>{Jr();Za();he=0,U={START_BOUNDARY:he++,HEADER_FIELD_START:he++,HEADER_FIELD:he++,HEADER_VALUE_START:he++,HEADER_VALUE:he++,HEADER_VALUE_ALMOST_DONE:he++,HEADERS_ALMOST_DONE:he++,PART_DATA_START:he++,PART_DATA:he++,END:he++},Wo=1,Xe={PART_BOUNDARY:Wo,LAST_BOUNDARY:Wo*=2},er=10,tr=13,Jp=32,aa=45,Zp=58,Xp=97,el=122,tl=e=>e|32,pt=()=>{},Zr=class{constructor(t){this.index=0,this.flags=0,this.onHeaderEnd=pt,this.onHeaderField=pt,this.onHeadersEnd=pt,this.onHeaderValue=pt,this.onPartBegin=pt,this.onPartData=pt,this.onPartEnd=pt,this.boundaryChars={},t=`\r
--`+t;let a=new Uint8Array(t.length);for(let n=0;n<t.length;n++)a[n]=t.charCodeAt(n),this.boundaryChars[a[n]]=!0;this.boundary=a,this.lookbehind=new Uint8Array(this.boundary.length+8),this.state=U.START_BOUNDARY}write(t){let a=0,n=t.length,r=this.index,{lookbehind:o,boundary:u,boundaryChars:s,index:i,state:p,flags:c}=this,y=this.boundary.length,m=y-1,f=t.length,l,g,I=b=>{this[b+"Mark"]=a},M=b=>{delete this[b+"Mark"]},R=(b,P,E,_)=>{(P===void 0||P!==E)&&this[b](_&&_.subarray(P,E))},S=(b,P)=>{let E=b+"Mark";E in this&&(P?(R(b,this[E],a,t),delete this[E]):(R(b,this[E],t.length,t),this[E]=0))};for(a=0;a<n;a++)switch(l=t[a],p){case U.START_BOUNDARY:if(i===u.length-2){if(l===aa)c|=Xe.LAST_BOUNDARY;else if(l!==tr)return;i++;break}else if(i-1===u.length-2){if(c&Xe.LAST_BOUNDARY&&l===aa)p=U.END,c=0;else if(!(c&Xe.LAST_BOUNDARY)&&l===er)i=0,R("onPartBegin"),p=U.HEADER_FIELD_START;else return;break}l!==u[i+2]&&(i=-2),l===u[i+2]&&i++;break;case U.HEADER_FIELD_START:p=U.HEADER_FIELD,I("onHeaderField"),i=0;case U.HEADER_FIELD:if(l===tr){M("onHeaderField"),p=U.HEADERS_ALMOST_DONE;break}if(i++,l===aa)break;if(l===Zp){if(i===1)return;S("onHeaderField",!0),p=U.HEADER_VALUE_START;break}if(g=tl(l),g<Xp||g>el)return;break;case U.HEADER_VALUE_START:if(l===Jp)break;I("onHeaderValue"),p=U.HEADER_VALUE;case U.HEADER_VALUE:l===tr&&(S("onHeaderValue",!0),R("onHeaderEnd"),p=U.HEADER_VALUE_ALMOST_DONE);break;case U.HEADER_VALUE_ALMOST_DONE:if(l!==er)return;p=U.HEADER_FIELD_START;break;case U.HEADERS_ALMOST_DONE:if(l!==er)return;R("onHeadersEnd"),p=U.PART_DATA_START;break;case U.PART_DATA_START:p=U.PART_DATA,I("onPartData");case U.PART_DATA:if(r=i,i===0){for(a+=m;a<f&&!(t[a]in s);)a+=y;a-=m,l=t[a]}if(i<u.length)u[i]===l?(i===0&&S("onPartData",!0),i++):i=0;else if(i===u.length)i++,l===tr?c|=Xe.PART_BOUNDARY:l===aa?c|=Xe.LAST_BOUNDARY:i=0;else if(i-1===u.length)if(c&Xe.PART_BOUNDARY){if(i=0,l===er){c&=~Xe.PART_BOUNDARY,R("onPartEnd"),R("onPartBegin"),p=U.HEADER_FIELD_START;break}}else c&Xe.LAST_BOUNDARY&&l===aa?(R("onPartEnd"),p=U.END,c=0):i=0;if(i>0)o[i-1]=l;else if(r>0){let b=new Uint8Array(o.buffer,o.byteOffset,o.byteLength);R("onPartData",0,r,b),r=0,I("onPartData"),a--}break;case U.END:break;default:throw new Error(`Unexpected state entered: ${p}`)}S("onHeaderField"),S("onHeaderValue"),S("onPartData"),this.index=i,this.state=p,this.flags=c}end(){if(this.state===U.HEADER_FIELD_START&&this.index===0||this.state===U.PART_DATA&&this.index===this.boundary.length)this.onPartEnd();else if(this.state!==U.END)throw new Error("MultipartParser.end(): stream ended unexpectedly")}}});var Nc={};St(Nc,{default:()=>qc});module.exports=Xi(Nc);var Sa=require("@raycast/api"),Sr=w(Ce()),$i=require("lodash"),cn=require("react");var Ri=require("@octokit/rest"),Ai=require("@raycast/api"),fi=w(Ce());var $a=JSON;var To=e=>e.toUpperCase(),wo=e=>{let t={};return e.forEach((a,n)=>{t[n]=a}),t};var Oo=(e,t,a)=>e.document?e:{document:e,variables:t,requestHeaders:a,signal:void 0},Bo=(e,t,a)=>e.query?e:{query:e,variables:t,requestHeaders:a,signal:void 0},Lo=(e,t)=>e.documents?e:{documents:e,requestHeaders:t,signal:void 0};var Qa=require("graphql"),qo=e=>{let t,a=e.definitions.filter(n=>n.kind==="OperationDefinition");return a.length===1&&(t=a[0]?.name?.value),t},st=e=>{if(typeof e=="string"){let a;try{let n=(0,Qa.parse)(e);a=qo(n)}catch{}return{query:e,operationName:a}}let t=qo(e);return{query:(0,Qa.print)(e),operationName:t}};var ut=class e extends Error{constructor(t,a){let n=`${e.extractMessage(t)}: ${JSON.stringify({response:t,request:a})}`;super(n),Object.setPrototypeOf(this,e.prototype),this.response=t,this.request=a,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,e)}static extractMessage(t){return t.errors?.[0]?.message??`GraphQL Error (Code: ${t.status})`}};var Ze=w(Qt(),1);var qp="connection_init",Np="connection_ack",Vo="ping",Fo="pong",Vp="subscribe",Fp="next",kp="error",ko="complete",Je=class e{get type(){return this._type}get id(){return this._id}get payload(){return this._payload}constructor(t,a,n){this._type=t,this._payload=a,this._id=n}get text(){let t={type:this.type};return this.id!=null&&this.id!=null&&(t.id=this.id),this.payload!=null&&this.payload!=null&&(t.payload=this.payload),JSON.stringify(t)}static parse(t,a){let{type:n,payload:r,id:o}=JSON.parse(t);return new e(n,a(r),o)}},Wa=class{constructor(t,{onInit:a,onAcknowledged:n,onPing:r,onPong:o}){this.socketState={acknowledged:!1,lastRequestId:0,subscriptions:{}},this.socket=t,t.addEventListener("open",async u=>{this.socketState.acknowledged=!1,this.socketState.subscriptions={},t.send(zp(a?await a():null).text)}),t.addEventListener("close",u=>{this.socketState.acknowledged=!1,this.socketState.subscriptions={}}),t.addEventListener("error",u=>{console.error(u)}),t.addEventListener("message",u=>{try{let s=jp(u.data);switch(s.type){case Np:{this.socketState.acknowledged?console.warn("Duplicate CONNECTION_ACK message ignored"):(this.socketState.acknowledged=!0,n&&n(s.payload));return}case Vo:{r?r(s.payload).then(y=>t.send(No(y).text)):t.send(No(null).text);return}case Fo:{o&&o(s.payload);return}}if(!this.socketState.acknowledged||s.id===void 0||s.id===null||!this.socketState.subscriptions[s.id])return;let{query:i,variables:p,subscriber:c}=this.socketState.subscriptions[s.id];switch(s.type){case Fp:{!s.payload.errors&&s.payload.data&&c.next&&c.next(s.payload.data),s.payload.errors&&c.error&&c.error(new ut({...s.payload,status:200},{query:i,variables:p}));return}case kp:{c.error&&c.error(new ut({errors:s.payload,status:200},{query:i,variables:p}));return}case ko:{c.complete&&c.complete(),delete this.socketState.subscriptions[s.id];return}}}catch(s){console.error(s),t.close(1006)}t.close(4400,"Unknown graphql-ws message.")})}makeSubscribe(t,a,n,r){let o=(this.socketState.lastRequestId++).toString();return this.socketState.subscriptions[o]={query:t,variables:r,subscriber:n},this.socket.send(Gp(o,{query:t,operationName:a,variables:r}).text),()=>{this.socket.send($p(o).text),delete this.socketState.subscriptions[o]}}rawRequest(t,a){return new Promise((n,r)=>{let o;this.rawSubscribe(t,{next:(u,s)=>o={data:u,extensions:s},error:r,complete:()=>n(o)},a)})}request(t,a){return new Promise((n,r)=>{let o;this.subscribe(t,{next:u=>o=u,error:r,complete:()=>n(o)},a)})}subscribe(t,a,n){let{query:r,operationName:o}=st(t);return this.makeSubscribe(r,o,a,n)}rawSubscribe(t,a,n){return this.makeSubscribe(t,void 0,a,n)}ping(t){this.socket.send(Hp(t).text)}close(){this.socket.close(1e3)}};Wa.PROTOCOL="graphql-transport-ws";function jp(e,t=a=>a){return Je.parse(e,t)}function zp(e){return new Je(qp,e)}function Hp(e){return new Je(Vo,e,void 0)}function No(e){return new Je(Fo,e,void 0)}function Gp(e,t){return new Je(Vp,t,e)}function $p(e){return new Je(ko,void 0,e)}var Tt=e=>{let t={};return e&&(typeof Headers<"u"&&e instanceof Headers||Ze&&Ze.Headers&&e instanceof Ze.Headers?t=wo(e):Array.isArray(e)?e.forEach(([a,n])=>{a&&n!==void 0&&(t[a]=n)}):t=e),t},jo=e=>e.replace(/([\s,]|#[^\n\r]+)+/g," ").trim(),Qp=e=>{if(!Array.isArray(e.query)){let n=e,r=[`query=${encodeURIComponent(jo(n.query))}`];return e.variables&&r.push(`variables=${encodeURIComponent(n.jsonSerializer.stringify(n.variables))}`),n.operationName&&r.push(`operationName=${encodeURIComponent(n.operationName)}`),r.join("&")}if(typeof e.variables<"u"&&!Array.isArray(e.variables))throw new Error("Cannot create query with given variable type, array expected");let t=e,a=e.query.reduce((n,r,o)=>(n.push({query:jo(r),variables:t.variables?t.jsonSerializer.stringify(t.variables[o]):void 0}),n),[]);return`query=${encodeURIComponent(t.jsonSerializer.stringify(a))}`},Wp=e=>async t=>{let{url:a,query:n,variables:r,operationName:o,fetch:u,fetchOptions:s,middleware:i}=t,p={...t.headers},c="",y;e==="POST"?(y=Kp(n,r,o,s.jsonSerializer),typeof y=="string"&&(p["Content-Type"]="application/json")):c=Qp({query:n,variables:r,operationName:o,jsonSerializer:s.jsonSerializer??$a});let m={method:e,headers:p,body:y,...s},f=a,l=m;if(i){let g=await Promise.resolve(i({...m,url:a,operationName:o,variables:r})),{url:I,...M}=g;f=I,l=M}return c&&(f=`${f}?${c}`),await u(f,l)},Ka=class{constructor(t,a={}){this.url=t,this.requestConfig=a,this.rawRequest=async(...n)=>{let[r,o,u]=n,s=Bo(r,o,u),{headers:i,fetch:p=Ze.default,method:c="POST",requestMiddleware:y,responseMiddleware:m,...f}=this.requestConfig,{url:l}=this;s.signal!==void 0&&(f.signal=s.signal);let{operationName:g}=st(s.query);return Wr({url:l,query:s.query,variables:s.variables,headers:{...Tt(Kr(i)),...Tt(s.requestHeaders)},operationName:g,fetch:p,method:c,fetchOptions:f,middleware:y}).then(I=>(m&&m(I),I)).catch(I=>{throw m&&m(I),I})}}async request(t,...a){let[n,r]=a,o=Oo(t,n,r),{headers:u,fetch:s=Ze.default,method:i="POST",requestMiddleware:p,responseMiddleware:c,...y}=this.requestConfig,{url:m}=this;o.signal!==void 0&&(y.signal=o.signal);let{query:f,operationName:l}=st(o.document);return Wr({url:m,query:f,variables:o.variables,headers:{...Tt(Kr(u)),...Tt(o.requestHeaders)},operationName:l,fetch:s,method:i,fetchOptions:y,middleware:p}).then(g=>(c&&c(g),g.data)).catch(g=>{throw c&&c(g),g})}batchRequests(t,a){let n=Lo(t,a),{headers:r,...o}=this.requestConfig;n.signal!==void 0&&(o.signal=n.signal);let u=n.documents.map(({document:i})=>st(i).query),s=n.documents.map(({variables:i})=>i);return Wr({url:this.url,query:u,variables:s,headers:{...Tt(Kr(r)),...Tt(n.requestHeaders)},operationName:void 0,fetch:this.requestConfig.fetch??Ze.default,method:this.requestConfig.method||"POST",fetchOptions:o,middleware:this.requestConfig.requestMiddleware}).then(i=>(this.requestConfig.responseMiddleware&&this.requestConfig.responseMiddleware(i),i.data)).catch(i=>{throw this.requestConfig.responseMiddleware&&this.requestConfig.responseMiddleware(i),i})}setHeaders(t){return this.requestConfig.headers=t,this}setHeader(t,a){let{headers:n}=this.requestConfig;return n?n[t]=a:this.requestConfig.headers={[t]:a},this}setEndpoint(t){return this.url=t,this}},Wr=async e=>{let{query:t,variables:a,fetchOptions:n}=e,r=Wp(To(e.method??"post")),o=Array.isArray(e.query),u=await r(e),s=await Yp(u,n.jsonSerializer??$a),i=Array.isArray(s)?!s.some(({data:c})=>!c):!!s.data,p=Array.isArray(s)||!s.errors||Array.isArray(s.errors)&&!s.errors.length||n.errorPolicy==="all"||n.errorPolicy==="ignore";if(u.ok&&p&&i){let{errors:c,...y}=(Array.isArray(s),s),m=n.errorPolicy==="ignore"?y:s;return{...o?{data:m}:m,headers:u.headers,status:u.status}}else{let c=typeof s=="string"?{error:s}:s;throw new ut({...c,status:u.status,headers:u.headers},{query:t,variables:a})}};var Kp=(e,t,a,n)=>{let r=n??$a;if(!Array.isArray(e))return r.stringify({query:e,variables:t,operationName:a});if(typeof t<"u"&&!Array.isArray(t))throw new Error("Cannot create request body with given variable type, array expected");let o=e.reduce((u,s,i)=>(u.push({query:s,variables:t?t[i]:void 0}),u),[]);return r.stringify(o)},Yp=async(e,t)=>{let a;return e.headers.forEach((n,r)=>{r.toLowerCase()==="content-type"&&(a=n)}),a&&(a.toLowerCase().startsWith("application/json")||a.toLowerCase().startsWith("application/graphql+json")||a.toLowerCase().startsWith("application/graphql-response+json"))?t.parse(await e.text()):e.text()},Kr=e=>typeof e=="function"?e():e;var ci=w(require("node:http"),1),yi=w(require("node:https"),1),ct=w(require("node:zlib"),1),se=w(require("node:stream"),1),oa=require("node:buffer");var Xt={};St(Xt,{default:()=>Ya.default});Y(Xt,require("data-uri-to-buffer"));var Ya=w(require("data-uri-to-buffer"));var ye=w(require("node:stream"),1),Fe=require("node:util"),oe=require("node:buffer");var ea={};St(ea,{default:()=>Ja.default});Y(ea,require("fetch-blob"));var Ja=w(require("fetch-blob"));Za();var Ve=class extends Error{constructor(t,a){super(t),Error.captureStackTrace(this,this.constructor),this.type=a}get name(){return this.constructor.name}get[Symbol.toStringTag](){return this.constructor.name}};var Z=class extends Ve{constructor(t,a,n){super(t,a),n&&(this.code=this.errno=n.code,this.erroredSysCall=n.syscall)}};var Xa=Symbol.toStringTag,Yr=e=>typeof e=="object"&&typeof e.append=="function"&&typeof e.delete=="function"&&typeof e.get=="function"&&typeof e.getAll=="function"&&typeof e.has=="function"&&typeof e.set=="function"&&typeof e.sort=="function"&&e[Xa]==="URLSearchParams",ta=e=>e&&typeof e=="object"&&typeof e.arrayBuffer=="function"&&typeof e.type=="string"&&typeof e.stream=="function"&&typeof e.constructor=="function"&&/^(Blob|File)$/.test(e[Xa]),Ho=e=>typeof e=="object"&&(e[Xa]==="AbortSignal"||e[Xa]==="EventTarget"),Go=(e,t)=>{let a=new URL(t).hostname,n=new URL(e).hostname;return a===n||a.endsWith(`.${n}`)},$o=(e,t)=>{let a=new URL(t).protocol,n=new URL(e).protocol;return a===n};var nl=(0,Fe.promisify)(ye.default.pipeline),X=Symbol("Body internals"),De=class{constructor(t,{size:a=0}={}){let n=null;t===null?t=null:Yr(t)?t=oe.Buffer.from(t.toString()):ta(t)||oe.Buffer.isBuffer(t)||(Fe.types.isAnyArrayBuffer(t)?t=oe.Buffer.from(t):ArrayBuffer.isView(t)?t=oe.Buffer.from(t.buffer,t.byteOffset,t.byteLength):t instanceof ye.default||(t instanceof J.FormData?(t=(0,J.formDataToBlob)(t),n=t.type.split("=")[1]):t=oe.Buffer.from(String(t))));let r=t;oe.Buffer.isBuffer(t)?r=ye.default.Readable.from(t):ta(t)&&(r=ye.default.Readable.from(t.stream())),this[X]={body:t,stream:r,boundary:n,disturbed:!1,error:null},this.size=a,t instanceof ye.default&&t.on("error",o=>{let u=o instanceof Ve?o:new Z(`Invalid response body while trying to fetch ${this.url}: ${o.message}`,"system",o);this[X].error=u})}get body(){return this[X].stream}get bodyUsed(){return this[X].disturbed}async arrayBuffer(){let{buffer:t,byteOffset:a,byteLength:n}=await Xr(this);return t.slice(a,a+n)}async formData(){let t=this.headers.get("content-type");if(t.startsWith("application/x-www-form-urlencoded")){let n=new J.FormData,r=new URLSearchParams(await this.text());for(let[o,u]of r)n.append(o,u);return n}let{toFormData:a}=await Promise.resolve().then(()=>(Yo(),Ko));return a(this.body,t)}async blob(){let t=this.headers&&this.headers.get("content-type")||this[X].body&&this[X].body.type||"",a=await this.arrayBuffer();return new Ja.default([a],{type:t})}async json(){let t=await this.text();return JSON.parse(t)}async text(){let t=await Xr(this);return new TextDecoder().decode(t)}buffer(){return Xr(this)}};De.prototype.buffer=(0,Fe.deprecate)(De.prototype.buffer,"Please use 'response.arrayBuffer()' instead of 'response.buffer()'","node-fetch#buffer");Object.defineProperties(De.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0},data:{get:(0,Fe.deprecate)(()=>{},"data doesn't exist, use json(), text(), arrayBuffer(), or body instead","https://github.com/node-fetch/node-fetch/issues/1000 (response)")}});async function Xr(e){if(e[X].disturbed)throw new TypeError(`body used already for: ${e.url}`);if(e[X].disturbed=!0,e[X].error)throw e[X].error;let{body:t}=e;if(t===null)return oe.Buffer.alloc(0);if(!(t instanceof ye.default))return oe.Buffer.alloc(0);let a=[],n=0;try{for await(let r of t){if(e.size>0&&n+r.length>e.size){let o=new Z(`content size at ${e.url} over limit: ${e.size}`,"max-size");throw t.destroy(o),o}n+=r.length,a.push(r)}}catch(r){throw r instanceof Ve?r:new Z(`Invalid response body while trying to fetch ${e.url}: ${r.message}`,"system",r)}if(t.readableEnded===!0||t._readableState.ended===!0)try{return a.every(r=>typeof r=="string")?oe.Buffer.from(a.join("")):oe.Buffer.concat(a,n)}catch(r){throw new Z(`Could not create Buffer from response body for ${e.url}: ${r.message}`,"system",r)}else throw new Z(`Premature close of server response while trying to fetch ${e.url}`)}var wt=(e,t)=>{let a,n,{body:r}=e[X];if(e.bodyUsed)throw new Error("cannot clone body after it is used");return r instanceof ye.default&&typeof r.getBoundary!="function"&&(a=new ye.PassThrough({highWaterMark:t}),n=new ye.PassThrough({highWaterMark:t}),r.pipe(a),r.pipe(n),e[X].stream=a,r=n),r},ol=(0,Fe.deprecate)(e=>e.getBoundary(),"form-data doesn't follow the spec and requires special treatment. Use alternative package","https://github.com/node-fetch/node-fetch/issues/1167"),ar=(e,t)=>e===null?null:typeof e=="string"?"text/plain;charset=UTF-8":Yr(e)?"application/x-www-form-urlencoded;charset=UTF-8":ta(e)?e.type||null:oe.Buffer.isBuffer(e)||Fe.types.isAnyArrayBuffer(e)||ArrayBuffer.isView(e)?null:e instanceof J.FormData?`multipart/form-data; boundary=${t[X].boundary}`:e&&typeof e.getBoundary=="function"?`multipart/form-data;boundary=${ol(e)}`:e instanceof ye.default?null:"text/plain;charset=UTF-8",Jo=e=>{let{body:t}=e[X];return t===null?0:ta(t)?t.size:oe.Buffer.isBuffer(t)?t.length:t&&typeof t.getLengthSync=="function"&&t.hasKnownLength&&t.hasKnownLength()?t.getLengthSync():null},Zo=async(e,{body:t})=>{t===null?e.end():await nl(t,e)};var en=require("node:util"),ra=w(require("node:http"),1),rr=typeof ra.default.validateHeaderName=="function"?ra.default.validateHeaderName:e=>{if(!/^[\^`\-\w!#$%&'*+.|~]+$/.test(e)){let t=new TypeError(`Header name must be a valid HTTP token [${e}]`);throw Object.defineProperty(t,"code",{value:"ERR_INVALID_HTTP_TOKEN"}),t}},tn=typeof ra.default.validateHeaderValue=="function"?ra.default.validateHeaderValue:(e,t)=>{if(/[^\t\u0020-\u007E\u0080-\u00FF]/.test(t)){let a=new TypeError(`Invalid character in header content ["${e}"]`);throw Object.defineProperty(a,"code",{value:"ERR_INVALID_CHAR"}),a}},ie=class e extends URLSearchParams{constructor(t){let a=[];if(t instanceof e){let n=t.raw();for(let[r,o]of Object.entries(n))a.push(...o.map(u=>[r,u]))}else if(t!=null)if(typeof t=="object"&&!en.types.isBoxedPrimitive(t)){let n=t[Symbol.iterator];if(n==null)a.push(...Object.entries(t));else{if(typeof n!="function")throw new TypeError("Header pairs must be iterable");a=[...t].map(r=>{if(typeof r!="object"||en.types.isBoxedPrimitive(r))throw new TypeError("Each header pair must be an iterable object");return[...r]}).map(r=>{if(r.length!==2)throw new TypeError("Each header pair must be a name/value tuple");return[...r]})}}else throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");return a=a.length>0?a.map(([n,r])=>(rr(n),tn(n,String(r)),[String(n).toLowerCase(),String(r)])):void 0,super(a),new Proxy(this,{get(n,r,o){switch(r){case"append":case"set":return(u,s)=>(rr(u),tn(u,String(s)),URLSearchParams.prototype[r].call(n,String(u).toLowerCase(),String(s)));case"delete":case"has":case"getAll":return u=>(rr(u),URLSearchParams.prototype[r].call(n,String(u).toLowerCase()));case"keys":return()=>(n.sort(),new Set(URLSearchParams.prototype.keys.call(n)).keys());default:return Reflect.get(n,r,o)}}})}get[Symbol.toStringTag](){return this.constructor.name}toString(){return Object.prototype.toString.call(this)}get(t){let a=this.getAll(t);if(a.length===0)return null;let n=a.join(", ");return/^content-encoding$/i.test(t)&&(n=n.toLowerCase()),n}forEach(t,a=void 0){for(let n of this.keys())Reflect.apply(t,a,[this.get(n),n,this])}*values(){for(let t of this.keys())yield this.get(t)}*entries(){for(let t of this.keys())yield[t,this.get(t)]}[Symbol.iterator](){return this.entries()}raw(){return[...this.keys()].reduce((t,a)=>(t[a]=this.getAll(a),t),{})}[Symbol.for("nodejs.util.inspect.custom")](){return[...this.keys()].reduce((t,a)=>{let n=this.getAll(a);return a==="host"?t[a]=n[0]:t[a]=n.length>1?n:n[0],t},{})}};Object.defineProperties(ie.prototype,["get","entries","forEach","values"].reduce((e,t)=>(e[t]={enumerable:!0},e),{}));function Xo(e=[]){return new ie(e.reduce((t,a,n,r)=>(n%2===0&&t.push(r.slice(n,n+2)),t),[]).filter(([t,a])=>{try{return rr(t),tn(t,String(a)),!0}catch{return!1}}))}var il=new Set([301,302,303,307,308]),nr=e=>il.has(e);var Me=Symbol("Response internals"),de=class e extends De{constructor(t=null,a={}){super(t,a);let n=a.status!=null?a.status:200,r=new ie(a.headers);if(t!==null&&!r.has("Content-Type")){let o=ar(t,this);o&&r.append("Content-Type",o)}this[Me]={type:"default",url:a.url,status:n,statusText:a.statusText||"",headers:r,counter:a.counter,highWaterMark:a.highWaterMark}}get type(){return this[Me].type}get url(){return this[Me].url||""}get status(){return this[Me].status}get ok(){return this[Me].status>=200&&this[Me].status<300}get redirected(){return this[Me].counter>0}get statusText(){return this[Me].statusText}get headers(){return this[Me].headers}get highWaterMark(){return this[Me].highWaterMark}clone(){return new e(wt(this,this.highWaterMark),{type:this.type,url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected,size:this.size,highWaterMark:this.highWaterMark})}static redirect(t,a=302){if(!nr(a))throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');return new e(null,{headers:{location:new URL(t).toString()},status:a})}static error(){let t=new e(null,{status:0,statusText:""});return t[Me].type="error",t}static json(t=void 0,a={}){let n=JSON.stringify(t);if(n===void 0)throw new TypeError("data is not JSON serializable");let r=new ie(a&&a.headers);return r.has("content-type")||r.set("content-type","application/json"),new e(n,{...a,headers:r})}get[Symbol.toStringTag](){return"Response"}};Object.defineProperties(de.prototype,{type:{enumerable:!0},url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}});var ui=require("node:url"),pi=require("node:util");var ei=e=>{if(e.search)return e.search;let t=e.href.length-1,a=e.hash||(e.href[t]==="#"?"#":"");return e.href[t-a.length]==="?"?"?":""};var ai=require("node:net");function ti(e,t=!1){return e==null||(e=new URL(e),/^(about|blob|data):$/.test(e.protocol))?"no-referrer":(e.username="",e.password="",e.hash="",t&&(e.pathname="",e.search=""),e)}var ri=new Set(["","no-referrer","no-referrer-when-downgrade","same-origin","origin","strict-origin","origin-when-cross-origin","strict-origin-when-cross-origin","unsafe-url"]),ni="strict-origin-when-cross-origin";function oi(e){if(!ri.has(e))throw new TypeError(`Invalid referrerPolicy: ${e}`);return e}function sl(e){if(/^(http|ws)s:$/.test(e.protocol))return!0;let t=e.host.replace(/(^\[)|(]$)/g,""),a=(0,ai.isIP)(t);return a===4&&/^127\./.test(t)||a===6&&/^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(t)?!0:e.host==="localhost"||e.host.endsWith(".localhost")?!1:e.protocol==="file:"}function Ot(e){return/^about:(blank|srcdoc)$/.test(e)||e.protocol==="data:"||/^(blob|filesystem):$/.test(e.protocol)?!0:sl(e)}function ii(e,{referrerURLCallback:t,referrerOriginCallback:a}={}){if(e.referrer==="no-referrer"||e.referrerPolicy==="")return null;let n=e.referrerPolicy;if(e.referrer==="about:client")return"no-referrer";let r=e.referrer,o=ti(r),u=ti(r,!0);o.toString().length>4096&&(o=u),t&&(o=t(o)),a&&(u=a(u));let s=new URL(e.url);switch(n){case"no-referrer":return"no-referrer";case"origin":return u;case"unsafe-url":return o;case"strict-origin":return Ot(o)&&!Ot(s)?"no-referrer":u.toString();case"strict-origin-when-cross-origin":return o.origin===s.origin?o:Ot(o)&&!Ot(s)?"no-referrer":u;case"same-origin":return o.origin===s.origin?o:"no-referrer";case"origin-when-cross-origin":return o.origin===s.origin?o:u;case"no-referrer-when-downgrade":return Ot(o)&&!Ot(s)?"no-referrer":o;default:throw new TypeError(`Invalid referrerPolicy: ${n}`)}}function si(e){let t=(e.get("referrer-policy")||"").split(/[,\s]+/),a="";for(let n of t)n&&ri.has(n)&&(a=n);return a}var N=Symbol("Request internals"),na=e=>typeof e=="object"&&typeof e[N]=="object",ul=(0,pi.deprecate)(()=>{},".data is not a valid RequestInit property, use .body instead","https://github.com/node-fetch/node-fetch/issues/1000 (request)"),lt=class e extends De{constructor(t,a={}){let n;if(na(t)?n=new URL(t.url):(n=new URL(t),t={}),n.username!==""||n.password!=="")throw new TypeError(`${n} is an url with embedded credentials.`);let r=a.method||t.method||"GET";if(/^(delete|get|head|options|post|put)$/i.test(r)&&(r=r.toUpperCase()),!na(a)&&"data"in a&&ul(),(a.body!=null||na(t)&&t.body!==null)&&(r==="GET"||r==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");let o=a.body?a.body:na(t)&&t.body!==null?wt(t):null;super(o,{size:a.size||t.size||0});let u=new ie(a.headers||t.headers||{});if(o!==null&&!u.has("Content-Type")){let p=ar(o,this);p&&u.set("Content-Type",p)}let s=na(t)?t.signal:null;if("signal"in a&&(s=a.signal),s!=null&&!Ho(s))throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");let i=a.referrer==null?t.referrer:a.referrer;if(i==="")i="no-referrer";else if(i){let p=new URL(i);i=/^about:(\/\/)?client$/.test(p)?"client":p}else i=void 0;this[N]={method:r,redirect:a.redirect||t.redirect||"follow",headers:u,parsedURL:n,signal:s,referrer:i},this.follow=a.follow===void 0?t.follow===void 0?20:t.follow:a.follow,this.compress=a.compress===void 0?t.compress===void 0?!0:t.compress:a.compress,this.counter=a.counter||t.counter||0,this.agent=a.agent||t.agent,this.highWaterMark=a.highWaterMark||t.highWaterMark||16384,this.insecureHTTPParser=a.insecureHTTPParser||t.insecureHTTPParser||!1,this.referrerPolicy=a.referrerPolicy||t.referrerPolicy||""}get method(){return this[N].method}get url(){return(0,ui.format)(this[N].parsedURL)}get headers(){return this[N].headers}get redirect(){return this[N].redirect}get signal(){return this[N].signal}get referrer(){if(this[N].referrer==="no-referrer")return"";if(this[N].referrer==="client")return"about:client";if(this[N].referrer)return this[N].referrer.toString()}get referrerPolicy(){return this[N].referrerPolicy}set referrerPolicy(t){this[N].referrerPolicy=oi(t)}clone(){return new e(this)}get[Symbol.toStringTag](){return"Request"}};Object.defineProperties(lt.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0},referrer:{enumerable:!0},referrerPolicy:{enumerable:!0}});var li=e=>{let{parsedURL:t}=e[N],a=new ie(e[N].headers);a.has("Accept")||a.set("Accept","*/*");let n=null;if(e.body===null&&/^(post|put)$/i.test(e.method)&&(n="0"),e.body!==null){let s=Jo(e);typeof s=="number"&&!Number.isNaN(s)&&(n=String(s))}n&&a.set("Content-Length",n),e.referrerPolicy===""&&(e.referrerPolicy=ni),e.referrer&&e.referrer!=="no-referrer"?e[N].referrer=ii(e):e[N].referrer="no-referrer",e[N].referrer instanceof URL&&a.set("Referer",e.referrer),a.has("User-Agent")||a.set("User-Agent","node-fetch"),e.compress&&!a.has("Accept-Encoding")&&a.set("Accept-Encoding","gzip, deflate, br");let{agent:r}=e;typeof r=="function"&&(r=r(t));let o=ei(t),u={path:t.pathname+o,method:e.method,headers:a[Symbol.for("nodejs.util.inspect.custom")](),insecureHTTPParser:e.insecureHTTPParser,agent:r};return{parsedURL:t,options:u}};var or=class extends Ve{constructor(t,a="aborted"){super(t,a)}};Za();Jr();var pl=new Set(["data:","http:","https:"]);async function ir(e,t){return new Promise((a,n)=>{let r=new lt(e,t),{parsedURL:o,options:u}=li(r);if(!pl.has(o.protocol))throw new TypeError(`node-fetch cannot load ${e}. URL scheme "${o.protocol.replace(/:$/,"")}" is not supported.`);if(o.protocol==="data:"){let l=(0,Ya.default)(r.url),g=new de(l,{headers:{"Content-Type":l.typeFull}});a(g);return}let s=(o.protocol==="https:"?yi.default:ci.default).request,{signal:i}=r,p=null,c=()=>{let l=new or("The operation was aborted.");n(l),r.body&&r.body instanceof se.default.Readable&&r.body.destroy(l),!(!p||!p.body)&&p.body.emit("error",l)};if(i&&i.aborted){c();return}let y=()=>{c(),f()},m=s(o.toString(),u);i&&i.addEventListener("abort",y);let f=()=>{m.abort(),i&&i.removeEventListener("abort",y)};m.on("error",l=>{n(new Z(`request to ${r.url} failed, reason: ${l.message}`,"system",l)),f()}),ll(m,l=>{p&&p.body&&p.body.destroy(l)}),process.version<"v14"&&m.on("socket",l=>{let g;l.prependListener("end",()=>{g=l._eventsCount}),l.prependListener("close",I=>{if(p&&g<l._eventsCount&&!I){let M=new Error("Premature close");M.code="ERR_STREAM_PREMATURE_CLOSE",p.body.emit("error",M)}})}),m.on("response",l=>{m.setTimeout(0);let g=Xo(l.rawHeaders);if(nr(l.statusCode)){let b=g.get("Location"),P=null;try{P=b===null?null:new URL(b,r.url)}catch{if(r.redirect!=="manual"){n(new Z(`uri requested responds with an invalid redirect URL: ${b}`,"invalid-redirect")),f();return}}switch(r.redirect){case"error":n(new Z(`uri requested responds with a redirect, redirect mode is set to error: ${r.url}`,"no-redirect")),f();return;case"manual":break;case"follow":{if(P===null)break;if(r.counter>=r.follow){n(new Z(`maximum redirect reached at: ${r.url}`,"max-redirect")),f();return}let E={headers:new ie(r.headers),follow:r.follow,counter:r.counter+1,agent:r.agent,compress:r.compress,method:r.method,body:wt(r),signal:r.signal,size:r.size,referrer:r.referrer,referrerPolicy:r.referrerPolicy};if(!Go(r.url,P)||!$o(r.url,P))for(let z of["authorization","www-authenticate","cookie","cookie2"])E.headers.delete(z);if(l.statusCode!==303&&r.body&&t.body instanceof se.default.Readable){n(new Z("Cannot follow redirect with body being a readable stream","unsupported-redirect")),f();return}(l.statusCode===303||(l.statusCode===301||l.statusCode===302)&&r.method==="POST")&&(E.method="GET",E.body=void 0,E.headers.delete("content-length"));let _=si(g);_&&(E.referrerPolicy=_),a(ir(new lt(P,E))),f();return}default:return n(new TypeError(`Redirect option '${r.redirect}' is not a valid value of RequestRedirect`))}}i&&l.once("end",()=>{i.removeEventListener("abort",y)});let I=(0,se.pipeline)(l,new se.PassThrough,b=>{b&&n(b)});process.version<"v12.10"&&l.on("aborted",y);let M={url:r.url,status:l.statusCode,statusText:l.statusMessage,headers:g,size:r.size,counter:r.counter,highWaterMark:r.highWaterMark},R=g.get("Content-Encoding");if(!r.compress||r.method==="HEAD"||R===null||l.statusCode===204||l.statusCode===304){p=new de(I,M),a(p);return}let S={flush:ct.default.Z_SYNC_FLUSH,finishFlush:ct.default.Z_SYNC_FLUSH};if(R==="gzip"||R==="x-gzip"){I=(0,se.pipeline)(I,ct.default.createGunzip(S),b=>{b&&n(b)}),p=new de(I,M),a(p);return}if(R==="deflate"||R==="x-deflate"){let b=(0,se.pipeline)(l,new se.PassThrough,P=>{P&&n(P)});b.once("data",P=>{(P[0]&15)===8?I=(0,se.pipeline)(I,ct.default.createInflate(),E=>{E&&n(E)}):I=(0,se.pipeline)(I,ct.default.createInflateRaw(),E=>{E&&n(E)}),p=new de(I,M),a(p)}),b.once("end",()=>{p||(p=new de(I,M),a(p))});return}if(R==="br"){I=(0,se.pipeline)(I,ct.default.createBrotliDecompress(),b=>{b&&n(b)}),p=new de(I,M),a(p);return}p=new de(I,M),a(p)}),Zo(m,r).catch(n)})}function ll(e,t){let a=oa.Buffer.from(`0\r
\r
`),n=!1,r=!1,o;e.on("response",u=>{let{headers:s}=u;n=s["transfer-encoding"]==="chunked"&&!s["content-length"]}),e.on("socket",u=>{let s=()=>{if(n&&!r){let p=new Error("Premature close");p.code="ERR_STREAM_PREMATURE_CLOSE",t(p)}},i=p=>{r=oa.Buffer.compare(p.slice(-5),a)===0,!r&&o&&(r=oa.Buffer.compare(o.slice(-3),a.slice(0,3))===0&&oa.Buffer.compare(p.slice(-2),a.slice(3))===0),o=p};u.prependListener("close",s),u.on("data",i),e.on("close",()=>{u.removeListener("close",s),u.removeListener("data",i)})})}var A=w(require("graphql-tag")),ia=A.default`
  fragment ShortRepositoryFields on Repository {
    id
    defaultBranchRef {
      target {
        oid
      }
    }
    nameWithOwner
    name
    owner {
      login
      avatarUrl(size: 64)
    }
    url
    mergeCommitAllowed
    squashMergeAllowed
    rebaseMergeAllowed
    autoMergeAllowed
  }
`,cl=A.default`
  fragment DiscussionFields on Discussion {
    id
    title
    bodyText
    publishedAt
    repository {
      ...ShortRepositoryFields
    }
    url
    upvoteCount
    category {
      name
      emoji
      emojiHTML
    }
    comments {
      totalCount
    }
    answer {
      bodyText
    }
    author {
      login
      avatarUrl
    }
  }
  ${ia}
`,xe=A.default`
  fragment UserFields on User {
    id
    avatarUrl
    name
    login
    isViewer
  }
`,sa=A.default`
  fragment AuthorFields on Actor {
    ... on Bot {
      id
      login
      avatarUrl(size: 64)
    }
    ... on User {
      ...UserFields
    }
    ... on Mannequin {
      id
      login
      avatarUrl(size: 64)
    }
    ... on Organization {
      id
      login
      name
      avatarUrl(size: 64)
    }
    ... on EnterpriseUserAccount {
      id
      login
      name
      avatarUrl(size: 64)
    }
  }
  ${xe}
`,sr=A.default`
  fragment IssueFields on Issue {
    id
    url
    title
    number
    closed
    state
    stateReason
    updatedAt
    author {
      ...AuthorFields
    }
    linkedBranches(first: 50) {
      totalCount
      nodes {
        ... on LinkedBranch {
          id
          ref {
            id
            name
          }
        }
      }
    }
    milestone {
      id
      title
    }
    repository {
      ...ShortRepositoryFields
    }
    comments(first: 0) {
      totalCount
    }
    assignees(first: 50) {
      totalCount
      nodes {
        ... on User {
          ...UserFields
        }
      }
    }
  }
  ${sa}
  ${ia}
  ${xe}
`,yl=A.default`
  fragment IssueDetailFields on Issue {
    id
    url
    title
    body
    number
    closed
    state
    stateReason
    updatedAt
    author {
      ...AuthorFields
    }
    labels(first: 50, orderBy: { field: NAME, direction: ASC }) {
      totalCount
      nodes {
        id
        name
        color
        isDefault
      }
    }
    linkedBranches(first: 50) {
      totalCount
      nodes {
        ... on LinkedBranch {
          id
          ref {
            name
          }
        }
      }
    }
    milestone {
      id
      title
    }
    repository {
      ...ShortRepositoryFields
    }
    assignees(first: 50) {
      totalCount
      nodes {
        ... on User {
          ...UserFields
        }
      }
    }
    projectsV2(first: 25) {
      totalCount
      nodes {
        id
        title
      }
    }
  }
  ${sa}
  ${ia}
  ${xe}
`,di=A.default`
  fragment IssueMentionFields on Issue {
    number
    title
    closed
    stateReason
    repository {
      nameWithOwner
    }
    author {
      login
    }
  }
`,Si=A.default`
  fragment PullRequestMentionFields on PullRequest {
    number
    title
    closed
    merged
    isDraft
    repository {
      nameWithOwner
    }
    author {
      login
    }
  }
`,bi=A.default`
  fragment RepositoryMentionFields on Repository {
    nameWithOwner
    description
    isPrivate
    isArchived
    owner {
      avatarUrl(size: 64)
    }
  }
`,dl=A.default`
  fragment ProjectViewerFields on ProjectV2View {
    id
    name
    number
  }
`,Ii=A.default`
  fragment ProjectFields on ProjectV2 {
    id
    title
    public
    number
    readme
    closed
    shortDescription
    url
    createdAt
    creator {
      ...AuthorFields
    }
    updatedAt
    views(first: 50) {
      totalCount
      nodes {
        ...ProjectViewerFields
      }
    }
    viewerCanClose
    viewerCanUpdate
    viewerCanReopen
  }
  ${sa}
  ${dl}
`,gi=A.default`
  fragment PullRequestFields on PullRequest {
    id
    title
    permalink
    merged
    number
    isDraft
    closed
    updatedAt
    mergeable
    milestone {
      id
      title
    }
    reviewDecision
    repository {
      ...ShortRepositoryFields
    }
    headRefName
    headRef {
      name
    }
    author {
      ...AuthorFields
    }
    comments(first: 0) {
      totalCount
    }
    reviewThreads(first: 100) {
      totalCount
      nodes {
        comments(first: 0) {
          totalCount
        }
      }
    }
    reviews(first: 100) {
      totalCount
      nodes {
        bodyText
      }
    }
    commits(last: 1) {
      nodes {
        commit {
          statusCheckRollup {
            state
          }
        }
      }
    }
    assignees(first: 50) {
      totalCount
      nodes {
        ... on User {
          ...UserFields
        }
      }
    }
    isMergeQueueEnabled
    isInMergeQueue
    mergeStateStatus
    autoMergeRequest {
      enabledAt
      mergeMethod
    }
  }
  ${ia}
  ${sa}
  ${xe}
`,Sl=A.default`
  fragment PullRequestDetailsFields on PullRequest {
    id
    title
    body
    permalink
    merged
    number
    isDraft
    closed
    createdAt
    updatedAt
    additions
    deletions
    mergeable
    isMergeQueueEnabled
    isInMergeQueue
    mergeStateStatus
    autoMergeRequest {
      enabledAt
      mergeMethod
    }
    milestone {
      id
      title
    }
    repository {
      ...ShortRepositoryFields
    }
    baseRefName
    baseRef {
      name
    }
    headRefName
    headRef {
      name
    }
    labels(first: 50, orderBy: { field: NAME, direction: ASC }) {
      totalCount
      nodes {
        id
        name
        color
      }
    }
    author {
      ...AuthorFields
    }
    comments(first: 0) {
      totalCount
    }
    reviewRequests(first: 50) {
      totalCount
      nodes {
        requestedReviewer {
          ... on Team {
            id
            teamName: name
            teamAvatarURL: avatarUrl(size: 64)
          }
          ... on User {
            id
            githubUsername: login
            userName: name
            userAvatarURL: avatarUrl(size: 64)
          }
          ... on Mannequin {
            id
            githubUsername: login
            userAvatarURL: avatarUrl(size: 64)
          }
        }
      }
    }
    reviews(first: 10, states: [PENDING, APPROVED, CHANGES_REQUESTED]) {
      totalCount
      nodes {
        state
        author {
          ...AuthorFields
        }
      }
    }
    commits(last: 1) {
      nodes {
        commit {
          statusCheckRollup {
            state
          }
        }
      }
    }
    assignees(first: 50) {
      totalCount
      nodes {
        ... on User {
          ...UserFields
        }
      }
    }
    projectsV2(first: 20) {
      totalCount
      nodes {
        id
        title
      }
    }
  }
  ${ia}
  ${sa}
  ${xe}
`,bl=A.default`
  fragment PullRequestCommitFields on PullRequest {
    commits(last: $numberOfItems, before: $before) {
      totalCount
      nodes {
        commit {
          id
          authoredDate
          message
          oid
          abbreviatedOid
          author {
            avatarUrl(size: 64)
            name
          }
          statusCheckRollup {
            state
          }
          url
          treeUrl
        }
      }
      pageInfo {
        hasPreviousPage
        startCursor
      }
    }
  }
`,Mi=A.default`
  fragment CommitFields on Commit {
    authoredDate
    oid
    message
  }
`,an=A.default`
  fragment ExtendedRepositoryFields on Repository {
    id
    nameWithOwner
    name
    owner {
      login
      avatarUrl(size: 64)
    }
    url
    updatedAt
    pushedAt
    stargazerCount
    isArchived
    isFork
    isPrivate
    viewerHasStarred
    primaryLanguage {
      id
      name
      color
    }
  }
`,Il=A.default`
  fragment ReleaseFields on Release {
    id
    description
    name
    publishedAt
    createdAt
    tagName
    url
  }
`,gl=A.default`
  mutation createLinkedBranch($input: CreateLinkedBranchInput!) {
    createLinkedBranch(input: $input) {
      clientMutationId
      linkedBranch {
        ref {
          id
          name
        }
      }
    }
  }
`,Ml=A.default`
  mutation createRef($input: CreateRefInput!) {
    createRef(input: $input) {
      clientMutationId
      ref {
        id
        name
      }
    }
  }
`,ml=A.default`
  mutation deleteLinkedBranch($input: DeleteLinkedBranchInput!) {
    deleteLinkedBranch(input: $input) {
      clientMutationId
    }
  }
`,Rl=A.default`
  query searchDiscussions($query: String!, $numberOfItems: Int!, $after: String) {
    searchDiscussions: search(query: $query, type: DISCUSSION, first: $numberOfItems, after: $after) {
      nodes {
        ...DiscussionFields
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
  ${cl}
`,Al=A.default`
  query getGitHubDiscussionNumber($filter: String!) {
    search(query: $filter, type: DISCUSSION, first: 1) {
      nodes {
        ... on Discussion {
          number
          url
        }
      }
    }
  }
`,fl=A.default`
  query repositoryCollaboratorsForIssues($owner: String!, $name: String!, $issueNumber: Int!) {
    repository(owner: $owner, name: $name) {
      collaborators(first: 25) {
        totalCount
        nodes {
          ... on User {
            ...UserFields
          }
        }
      }
      issue(number: $issueNumber) {
        assignees(first: 25) {
          totalCount
          nodes {
            id
          }
        }
      }
    }
  }
  ${xe}
`,Pl=A.default`
  query repositoryProjectsForIssues($owner: String!, $name: String!, $issueNumber: Int!) {
    repository(owner: $owner, name: $name) {
      projectsV2(first: 50, orderBy: { field: TITLE, direction: ASC }) {
        totalCount
        nodes {
          id
          title
          number
        }
      }
      issue(number: $issueNumber) {
        projectsV2(first: 50) {
          totalCount
          nodes {
            id
          }
        }
      }
    }
  }
`,El=A.default`
  query issueDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...IssueDetailFields
    }
  }
  ${yl}
`,Cl=A.default`
  query searchIssues($query: String!, $numberOfItems: Int!, $after: String) {
    search(query: $query, type: ISSUE, first: $numberOfItems, after: $after) {
      nodes {
        ...IssueFields
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
  ${sr}
`,hl=A.default`
  query issueByNumber($owner: String!, $name: String!, $issueNumber: Int!) {
    repository(owner: $owner, name: $name) {
      issue(number: $issueNumber) {
        ...IssueFields
      }
    }
  }
  ${sr}
`,Dl=A.default`
  mutation closeIssue($nodeId: ID!, $stateReason: IssueClosedStateReason!) {
    closeIssue(input: { issueId: $nodeId, stateReason: $stateReason }) {
      issue {
        id
      }
    }
  }
`,xl=A.default`
  mutation reopenIssue($nodeId: ID!) {
    reopenIssue(input: { issueId: $nodeId }) {
      issue {
        id
      }
    }
  }
`,Ul=A.default`
  mutation changeIssueAssignees($issueId: ID!, $assigneeIds: [ID!]) {
    updateIssue(input: { id: $issueId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,_l=A.default`
  mutation changeIssueMilestone($issueId: ID!, $milestoneId: ID) {
    updateIssue(input: { id: $issueId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,vl=A.default`
  mutation addIssueToProject($issueId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $issueId }) {
      clientMutationId
    }
  }
`,Tl=A.default`
  mutation createIssue(
    $repositoryId: ID!
    $title: String!
    $body: String!
    $assigneeIds: [ID!]!
    $labelIds: [ID!]!
    $milestoneId: ID
    $issueTypeId: ID
  ) {
    createIssue(
      input: {
        repositoryId: $repositoryId
        title: $title
        body: $body
        assigneeIds: $assigneeIds
        labelIds: $labelIds
        milestoneId: $milestoneId
        issueTypeId: $issueTypeId
      }
    ) {
      issue {
        ...IssueFields
      }
    }
  }
  ${sr}
`,wl=A.default`
  query searchIssueMentions($query: String!, $numberOfItems: Int!) {
    search(query: $query, type: ISSUE, first: $numberOfItems) {
      nodes {
        ... on Issue {
          ...IssueMentionFields
        }
      }
    }
  }
  ${di}
`,Ol=A.default`
  query searchPullRequestMentions($query: String!, $numberOfItems: Int!) {
    search(query: $query, type: ISSUE, first: $numberOfItems) {
      nodes {
        ... on PullRequest {
          ...PullRequestMentionFields
        }
      }
    }
  }
  ${Si}
`,Bl=A.default`
  query issueOrPullRequestMention($owner: String!, $name: String!, $number: Int!) {
    repository(owner: $owner, name: $name) {
      issueOrPullRequest(number: $number) {
        __typename
        ... on Issue {
          ...IssueMentionFields
        }
        ... on PullRequest {
          ...PullRequestMentionFields
        }
      }
    }
  }
  ${di}
  ${Si}
`,Ll=A.default`
  query searchRepositoryMentions($query: String!, $numberOfItems: Int!) {
    search(query: $query, type: REPOSITORY, first: $numberOfItems) {
      nodes {
        ... on Repository {
          ...RepositoryMentionFields
        }
      }
    }
  }
  ${bi}
`,ql=A.default`
  query viewerRepositoryMentions($numberOfItems: Int!) {
    viewer {
      repositories(
        first: $numberOfItems
        orderBy: { field: PUSHED_AT, direction: DESC }
        ownerAffiliations: [OWNER, COLLABORATOR, ORGANIZATION_MEMBER]
      ) {
        nodes {
          ...RepositoryMentionFields
        }
      }
    }
  }
  ${bi}
`,Nl=A.default`
  mutation changeProjectStatus($projectId: ID!, $closed: Boolean!) {
    updateProjectV2(input: { projectId: $projectId, closed: $closed }) {
      clientMutationId
    }
  }
`,Vl=A.default`
  query projectDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...ProjectFields
    }
  }
  ${Ii}
`,Fl=A.default`
  query searchPullRequests($query: String!, $numberOfItems: Int!, $after: String) {
    search(query: $query, type: ISSUE, first: $numberOfItems, after: $after) {
      edges {
        node {
          ...PullRequestFields
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
  ${gi}
`,kl=A.default`
  query pullRequestDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...PullRequestDetailsFields
    }
  }
  ${Sl}
`,jl=A.default`
  query repositoryCollaboratorsForPullRequests(
    $owner: String!
    $name: String!
    $pullRequestNumber: Int!
    $searchQuery: String
  ) {
    repository(owner: $owner, name: $name) {
      collaborators(first: 25, query: $searchQuery) {
        totalCount
        nodes {
          ... on User {
            ...UserFields
          }
        }
      }
      pullRequest(number: $pullRequestNumber) {
        assignees(first: 25) {
          totalCount
          nodes {
            id
          }
        }
      }
    }
  }
  ${xe}
`,zl=A.default`
  query repositoryProjectsForPullRequests($owner: String!, $name: String!, $pullRequestNumber: Int!) {
    repository(owner: $owner, name: $name) {
      projectsV2(first: 50, orderBy: { field: TITLE, direction: ASC }) {
        totalCount
        nodes {
          id
          title
          number
        }
      }
      pullRequest(number: $pullRequestNumber) {
        projectsV2(first: 50) {
          totalCount
          nodes {
            id
          }
        }
      }
    }
  }
`,Hl=A.default`
  query pullRequestCommits($nodeId: ID!, $numberOfItems: Int!, $before: String) {
    node(id: $nodeId) {
      ...PullRequestCommitFields
    }
  }
  ${bl}
`,Gl=A.default`
  mutation closePullRequest($nodeId: ID!) {
    closePullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,$l=A.default`
  mutation reopenPullRequest($nodeId: ID!) {
    reopenPullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Ql=A.default`
  mutation markPullRequestReadyForReview($nodeId: ID!) {
    markPullRequestReadyForReview(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Wl=A.default`
  mutation addPullRequestReview($nodeId: ID!, $event: PullRequestReviewEvent, $body: String) {
    addPullRequestReview(input: { pullRequestId: $nodeId, event: $event, body: $body }) {
      pullRequestReview {
        id
      }
    }
  }
`,Kl=A.default`
  mutation changePullRequestAssignees($pullRequestId: ID!, $assigneeIds: [ID!]) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,Yl=A.default`
  mutation changePullRequestMilestone($pullRequestId: ID!, $milestoneId: ID) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,Jl=A.default`
  mutation addPullRequestToProject($pullRequestId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $pullRequestId }) {
      clientMutationId
    }
  }
`,Zl=A.default`
  mutation requestReview($pullRequestId: ID!, $collaboratorId: ID!) {
    requestReviews(input: { pullRequestId: $pullRequestId, userIds: [$collaboratorId], union: true }) {
      clientMutationId
    }
  }
`,Xl=A.default`
  mutation mergePullRequest($nodeId: ID!, $method: PullRequestMergeMethod!) {
    mergePullRequest(input: { pullRequestId: $nodeId, mergeMethod: $method }) {
      pullRequest {
        nodeId: id
      }
    }
  }
`,ec=A.default`
  mutation addPullRequestToMergeQueue($nodeId: ID!) {
    enqueuePullRequest(input: { pullRequestId: $nodeId }) {
      __typename
    }
  }
`,tc=A.default`
  mutation removePullRequestFromMergeQueue($nodeId: ID!) {
    dequeuePullRequest(input: { id: $nodeId }) {
      __typename
    }
  }
`,ac=A.default`
  mutation enablePullRequestAutoMerge($nodeId: ID!, $mergeMethod: PullRequestMergeMethod) {
    enablePullRequestAutoMerge(input: { pullRequestId: $nodeId, mergeMethod: $mergeMethod }) {
      pullRequest {
        id
      }
    }
  }
`,rc=A.default`
  mutation disablePullRequestAutoMerge($nodeId: ID!) {
    disablePullRequestAutoMerge(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,nc=A.default`
  mutation createPullRequest(
    $repositoryId: ID!
    $into: String!
    $from: String!
    $title: String!
    $body: String!
    $isDraft: Boolean!
  ) {
    createPullRequest(
      input: {
        repositoryId: $repositoryId
        baseRefName: $into
        headRefName: $from
        title: $title
        body: $body
        draft: $isDraft
      }
    ) {
      pullRequest {
        id
      }
    }
  }
`,oc=A.default`
  mutation initPullRequest(
    $pullRequestId: ID!
    $reviewersIds: [ID!]!
    $assigneeIds: [ID!]!
    $labelsIds: [ID!]!
    $milestoneId: ID
  ) {
    requestReviews(input: { pullRequestId: $pullRequestId, userIds: $reviewersIds }) {
      pullRequest {
        id
        reviewRequests {
          totalCount
        }
      }
    }
    updatePullRequest(
      input: {
        pullRequestId: $pullRequestId
        assigneeIds: $assigneeIds
        labelIds: $labelsIds
        milestoneId: $milestoneId
      }
    ) {
      pullRequest {
        ...PullRequestFields
      }
    }
  }
  ${gi}
`,ic=A.default`
  query searchRepositories($query: String!, $numberOfItems: Int!, $after: String) {
    search(query: $query, first: $numberOfItems, after: $after, type: REPOSITORY) {
      nodes {
        ...ExtendedRepositoryFields
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
  ${an}
`,sc=A.default`
  query myLatestRepositories(
    $numberOfItems: Int!
    $after: String
    $orderByField: RepositoryOrderField!
    $orderByDirection: OrderDirection!
  ) {
    viewer {
      repositories(
        first: $numberOfItems
        after: $after
        orderBy: { field: $orderByField, direction: $orderByDirection }
      ) {
        nodes {
          ...ExtendedRepositoryFields
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
  ${an}
`,uc=A.default`
  query milestonesForRepository($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      milestones(first: 25, orderBy: { field: DUE_DATE, direction: ASC }) {
        totalCount
        nodes {
          id
          title
          number
        }
      }
    }
  }
`,pc=A.default`
  query commentsForPullRequest($owner: String!, $name: String!, $number: Int!) {
    repository(owner: $owner, name: $name) {
      pullRequest(number: $number) {
        comments(first: 100) {
          nodes {
            author {
              login
            }
            body
          }
        }
      }
    }
  }
`,lc=A.default`
  query dataForRepository($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      mergeCommitAllowed
      squashMergeAllowed
      rebaseMergeAllowed
      autoMergeAllowed
      defaultBranchRef {
        id
        name
        target {
          ...CommitFields
        }
      }
      issueTypes(orderBy: { direction: ASC, field: NAME }, first: 50) {
        totalCount
        nodes {
          id
          name
          color
          isEnabled
        }
      }
      refs(refPrefix: "refs/heads/", direction: ASC, first: 50) {
        totalCount
        nodes {
          id
          name
          target {
            ...CommitFields
          }
        }
      }
      collaborators(first: 50) {
        totalCount
        nodes {
          ...UserFields
        }
      }
      labels(first: 50) {
        totalCount
        nodes {
          id
          name
          color
          isDefault
        }
      }
      projectsV2(first: 50) {
        totalCount
        nodes {
          id
          title
        }
      }
      milestones(first: 50, states: OPEN, orderBy: { field: DUE_DATE, direction: ASC }) {
        totalCount
        nodes {
          id
          title
        }
      }
      owner {
        __typename
        ... on Organization {
          projectsV2(first: 50) {
            totalCount
            nodes {
              id
              title
            }
          }
        }
      }
      pullRequestTemplates {
        body
      }
      issueTemplates {
        name
        about
        title
        body
      }
    }
  }
  ${Mi}
  ${xe}
`,cc=A.default`
  query searchRepositoryBranches($owner: String!, $name: String!, $query: String!) {
    repository(owner: $owner, name: $name) {
      refs(refPrefix: "refs/heads/", direction: ASC, first: 50, query: $query) {
        nodes {
          id
          name
          target {
            ...CommitFields
          }
        }
      }
    }
  }
  ${Mi}
`,yc=A.default`
  query repositoryIssues($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      url
      defaultBranchRef {
        id
        name
        target {
          oid
        }
      }
      issues(first: 50, states: OPEN, orderBy: { field: CREATED_AT, direction: DESC }) {
        nodes {
          ...IssueFields
        }
      }
    }
  }
  ${sr}
`,dc=A.default`
  query repositoryReleases($name: String!, $owner: String!, $numberOfItems: Int!, $after: String) {
    repository(name: $name, owner: $owner) {
      ... on Repository {
        releases(first: $numberOfItems, after: $after, orderBy: { field: CREATED_AT, direction: DESC }) {
          nodes {
            ...ReleaseFields
          }
          pageInfo {
            endCursor
            hasNextPage
          }
        }
      }
    }
  }
  ${Il}
`,Sc=A.default`
  mutation addStar($repositoryId: ID!) {
    addStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,bc=A.default`
  mutation removeStar($repositoryId: ID!) {
    removeStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,Ic=A.default`
  query myStarredRepositories(
    $numberOfItems: Int!
    $after: String
    $orderByField: StarOrderField!
    $orderByDirection: OrderDirection!
  ) {
    viewer {
      starredRepositories(
        first: $numberOfItems
        after: $after
        orderBy: { field: $orderByField, direction: $orderByDirection }
      ) {
        nodes {
          ...ExtendedRepositoryFields
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  }
  ${an}
`,gc=A.default`
  query getViewer {
    viewer {
      ...UserFields
      organizations(first: 50) {
        totalCount
        nodes {
          avatarUrl
          login
        }
      }
      projectsV2(first: 50) {
        totalCount
        nodes {
          ...ProjectFields
        }
      }
    }
  }
  ${xe}
  ${Ii}
`,Mc=A.default`
  query getViewerStats {
    viewer {
      ...UserFields
      bio
      company
      location
      url
      websiteUrl
      createdAt
      followers {
        totalCount
      }
      following {
        totalCount
      }
      starredRepositories {
        totalCount
      }
      pullRequestsAuthored: pullRequests {
        totalCount
      }
      pullRequestsMerged: pullRequests(states: [MERGED]) {
        totalCount
      }
      pullRequestsOpen: pullRequests(states: [OPEN]) {
        totalCount
      }
      issuesAuthored: issues {
        totalCount
      }
      issuesOpen: issues(states: [OPEN]) {
        totalCount
      }
      contributionsCollection {
        totalCommitContributions
      }
      publicRepos: repositories(ownerAffiliations: OWNER, privacy: PUBLIC) {
        totalCount
      }
      ownedRepositories: repositories(ownerAffiliations: OWNER) {
        totalCount
      }
    }
    rateLimit {
      remaining
      limit
      used
      resetAt
    }
  }
  ${xe}
`,mc=A.default`
  query getViewerStatsDetails($repositoriesCount: Int = 100) {
    viewer {
      recentPullRequests: pullRequests(first: 5, orderBy: { field: UPDATED_AT, direction: DESC }) {
        nodes {
          id
          number
          title
          url
          state
          repository {
            nameWithOwner
          }
        }
      }
      recentOpenPullRequests: pullRequests(first: 5, states: [OPEN], orderBy: { field: UPDATED_AT, direction: DESC }) {
        nodes {
          id
          number
          title
          url
          repository {
            nameWithOwner
          }
        }
      }
      recentIssues: issues(first: 5, orderBy: { field: UPDATED_AT, direction: DESC }) {
        nodes {
          id
          number
          title
          url
          state
          repository {
            nameWithOwner
          }
        }
      }
      recentOpenIssues: issues(first: 5, states: [OPEN], orderBy: { field: UPDATED_AT, direction: DESC }) {
        nodes {
          id
          number
          title
          url
          repository {
            nameWithOwner
          }
        }
      }
      ownedRepositories: repositories(
        first: $repositoriesCount
        ownerAffiliations: OWNER
        orderBy: { field: STARGAZERS, direction: DESC }
      ) {
        nodes {
          id
          nameWithOwner
          url
          stargazerCount
          forkCount
        }
      }
      organizations(first: 20) {
        nodes {
          id
          login
          name
          avatarUrl
          url
        }
      }
    }
  }
`,Rc=(e,t,a,n)=>e();function mi(e,t=Rc){return{createLinkedBranch(a,n,r){return t(o=>e.request({document:gl,variables:a,requestHeaders:{...n,...o},signal:r}),"createLinkedBranch","mutation",a)},createRef(a,n,r){return t(o=>e.request({document:Ml,variables:a,requestHeaders:{...n,...o},signal:r}),"createRef","mutation",a)},deleteLinkedBranch(a,n,r){return t(o=>e.request({document:ml,variables:a,requestHeaders:{...n,...o},signal:r}),"deleteLinkedBranch","mutation",a)},searchDiscussions(a,n,r){return t(o=>e.request({document:Rl,variables:a,requestHeaders:{...n,...o},signal:r}),"searchDiscussions","query",a)},getGitHubDiscussionNumber(a,n,r){return t(o=>e.request({document:Al,variables:a,requestHeaders:{...n,...o},signal:r}),"getGitHubDiscussionNumber","query",a)},repositoryCollaboratorsForIssues(a,n,r){return t(o=>e.request({document:fl,variables:a,requestHeaders:{...n,...o},signal:r}),"repositoryCollaboratorsForIssues","query",a)},repositoryProjectsForIssues(a,n,r){return t(o=>e.request({document:Pl,variables:a,requestHeaders:{...n,...o},signal:r}),"repositoryProjectsForIssues","query",a)},issueDetails(a,n,r){return t(o=>e.request({document:El,variables:a,requestHeaders:{...n,...o},signal:r}),"issueDetails","query",a)},searchIssues(a,n,r){return t(o=>e.request({document:Cl,variables:a,requestHeaders:{...n,...o},signal:r}),"searchIssues","query",a)},issueByNumber(a,n,r){return t(o=>e.request({document:hl,variables:a,requestHeaders:{...n,...o},signal:r}),"issueByNumber","query",a)},closeIssue(a,n,r){return t(o=>e.request({document:Dl,variables:a,requestHeaders:{...n,...o},signal:r}),"closeIssue","mutation",a)},reopenIssue(a,n,r){return t(o=>e.request({document:xl,variables:a,requestHeaders:{...n,...o},signal:r}),"reopenIssue","mutation",a)},changeIssueAssignees(a,n,r){return t(o=>e.request({document:Ul,variables:a,requestHeaders:{...n,...o},signal:r}),"changeIssueAssignees","mutation",a)},changeIssueMilestone(a,n,r){return t(o=>e.request({document:_l,variables:a,requestHeaders:{...n,...o},signal:r}),"changeIssueMilestone","mutation",a)},addIssueToProject(a,n,r){return t(o=>e.request({document:vl,variables:a,requestHeaders:{...n,...o},signal:r}),"addIssueToProject","mutation",a)},createIssue(a,n,r){return t(o=>e.request({document:Tl,variables:a,requestHeaders:{...n,...o},signal:r}),"createIssue","mutation",a)},searchIssueMentions(a,n,r){return t(o=>e.request({document:wl,variables:a,requestHeaders:{...n,...o},signal:r}),"searchIssueMentions","query",a)},searchPullRequestMentions(a,n,r){return t(o=>e.request({document:Ol,variables:a,requestHeaders:{...n,...o},signal:r}),"searchPullRequestMentions","query",a)},issueOrPullRequestMention(a,n,r){return t(o=>e.request({document:Bl,variables:a,requestHeaders:{...n,...o},signal:r}),"issueOrPullRequestMention","query",a)},searchRepositoryMentions(a,n,r){return t(o=>e.request({document:Ll,variables:a,requestHeaders:{...n,...o},signal:r}),"searchRepositoryMentions","query",a)},viewerRepositoryMentions(a,n,r){return t(o=>e.request({document:ql,variables:a,requestHeaders:{...n,...o},signal:r}),"viewerRepositoryMentions","query",a)},changeProjectStatus(a,n,r){return t(o=>e.request({document:Nl,variables:a,requestHeaders:{...n,...o},signal:r}),"changeProjectStatus","mutation",a)},projectDetails(a,n,r){return t(o=>e.request({document:Vl,variables:a,requestHeaders:{...n,...o},signal:r}),"projectDetails","query",a)},searchPullRequests(a,n,r){return t(o=>e.request({document:Fl,variables:a,requestHeaders:{...n,...o},signal:r}),"searchPullRequests","query",a)},pullRequestDetails(a,n,r){return t(o=>e.request({document:kl,variables:a,requestHeaders:{...n,...o},signal:r}),"pullRequestDetails","query",a)},repositoryCollaboratorsForPullRequests(a,n,r){return t(o=>e.request({document:jl,variables:a,requestHeaders:{...n,...o},signal:r}),"repositoryCollaboratorsForPullRequests","query",a)},repositoryProjectsForPullRequests(a,n,r){return t(o=>e.request({document:zl,variables:a,requestHeaders:{...n,...o},signal:r}),"repositoryProjectsForPullRequests","query",a)},pullRequestCommits(a,n,r){return t(o=>e.request({document:Hl,variables:a,requestHeaders:{...n,...o},signal:r}),"pullRequestCommits","query",a)},closePullRequest(a,n,r){return t(o=>e.request({document:Gl,variables:a,requestHeaders:{...n,...o},signal:r}),"closePullRequest","mutation",a)},reopenPullRequest(a,n,r){return t(o=>e.request({document:$l,variables:a,requestHeaders:{...n,...o},signal:r}),"reopenPullRequest","mutation",a)},markPullRequestReadyForReview(a,n,r){return t(o=>e.request({document:Ql,variables:a,requestHeaders:{...n,...o},signal:r}),"markPullRequestReadyForReview","mutation",a)},addPullRequestReview(a,n,r){return t(o=>e.request({document:Wl,variables:a,requestHeaders:{...n,...o},signal:r}),"addPullRequestReview","mutation",a)},changePullRequestAssignees(a,n,r){return t(o=>e.request({document:Kl,variables:a,requestHeaders:{...n,...o},signal:r}),"changePullRequestAssignees","mutation",a)},changePullRequestMilestone(a,n,r){return t(o=>e.request({document:Yl,variables:a,requestHeaders:{...n,...o},signal:r}),"changePullRequestMilestone","mutation",a)},addPullRequestToProject(a,n,r){return t(o=>e.request({document:Jl,variables:a,requestHeaders:{...n,...o},signal:r}),"addPullRequestToProject","mutation",a)},requestReview(a,n,r){return t(o=>e.request({document:Zl,variables:a,requestHeaders:{...n,...o},signal:r}),"requestReview","mutation",a)},mergePullRequest(a,n,r){return t(o=>e.request({document:Xl,variables:a,requestHeaders:{...n,...o},signal:r}),"mergePullRequest","mutation",a)},addPullRequestToMergeQueue(a,n,r){return t(o=>e.request({document:ec,variables:a,requestHeaders:{...n,...o},signal:r}),"addPullRequestToMergeQueue","mutation",a)},removePullRequestFromMergeQueue(a,n,r){return t(o=>e.request({document:tc,variables:a,requestHeaders:{...n,...o},signal:r}),"removePullRequestFromMergeQueue","mutation",a)},enablePullRequestAutoMerge(a,n,r){return t(o=>e.request({document:ac,variables:a,requestHeaders:{...n,...o},signal:r}),"enablePullRequestAutoMerge","mutation",a)},disablePullRequestAutoMerge(a,n,r){return t(o=>e.request({document:rc,variables:a,requestHeaders:{...n,...o},signal:r}),"disablePullRequestAutoMerge","mutation",a)},createPullRequest(a,n,r){return t(o=>e.request({document:nc,variables:a,requestHeaders:{...n,...o},signal:r}),"createPullRequest","mutation",a)},initPullRequest(a,n,r){return t(o=>e.request({document:oc,variables:a,requestHeaders:{...n,...o},signal:r}),"initPullRequest","mutation",a)},searchRepositories(a,n,r){return t(o=>e.request({document:ic,variables:a,requestHeaders:{...n,...o},signal:r}),"searchRepositories","query",a)},myLatestRepositories(a,n,r){return t(o=>e.request({document:sc,variables:a,requestHeaders:{...n,...o},signal:r}),"myLatestRepositories","query",a)},milestonesForRepository(a,n,r){return t(o=>e.request({document:uc,variables:a,requestHeaders:{...n,...o},signal:r}),"milestonesForRepository","query",a)},commentsForPullRequest(a,n,r){return t(o=>e.request({document:pc,variables:a,requestHeaders:{...n,...o},signal:r}),"commentsForPullRequest","query",a)},dataForRepository(a,n,r){return t(o=>e.request({document:lc,variables:a,requestHeaders:{...n,...o},signal:r}),"dataForRepository","query",a)},searchRepositoryBranches(a,n,r){return t(o=>e.request({document:cc,variables:a,requestHeaders:{...n,...o},signal:r}),"searchRepositoryBranches","query",a)},repositoryIssues(a,n,r){return t(o=>e.request({document:yc,variables:a,requestHeaders:{...n,...o},signal:r}),"repositoryIssues","query",a)},repositoryReleases(a,n,r){return t(o=>e.request({document:dc,variables:a,requestHeaders:{...n,...o},signal:r}),"repositoryReleases","query",a)},addStar(a,n,r){return t(o=>e.request({document:Sc,variables:a,requestHeaders:{...n,...o},signal:r}),"addStar","mutation",a)},removeStar(a,n,r){return t(o=>e.request({document:bc,variables:a,requestHeaders:{...n,...o},signal:r}),"removeStar","mutation",a)},myStarredRepositories(a,n,r){return t(o=>e.request({document:Ic,variables:a,requestHeaders:{...n,...o},signal:r}),"myStarredRepositories","query",a)},getViewer(a,n,r){return t(o=>e.request({document:gc,variables:a,requestHeaders:{...n,...o},signal:r}),"getViewer","query",a)},getViewerStats(a,n,r){return t(o=>e.request({document:Mc,variables:a,requestHeaders:{...n,...o},signal:r}),"getViewerStats","query",a)},getViewerStatsDetails(a,n,r){return t(o=>e.request({document:mc,variables:a,requestHeaders:{...n,...o},signal:r}),"getViewerStatsDetails","query",a)}}}var rn=null,nn=null,Pi=null,Ac=(0,Ai.getPreferenceValues)();function fc({token:e,type:t}){let a=t==="personal"?`token ${e}`:`bearer ${e}`;Pi=e,rn=mi(new Ka("https://api.github.com/graphql",{headers:{authorization:a}})),nn=new Ri.Octokit({auth:e,request:{fetch:ir}})}var Ei=fi.OAuthService.github({personalAccessToken:Ac.personalAccessToken,scope:"notifications repo project read:org read:user read:packages",onAuthorize:fc});function W(){if(!rn||!nn)throw new Error("GitHub clients not initialized");return{github:rn,octokit:nn,token:Pi}}var Lt=require("@raycast/api");var C=require("@raycast/api"),yt=w(Ce()),ji=require("react");var V=require("@raycast/api"),Bi=w(Ce()),Li=require("date-fns");var Ci=require("@raycast/api"),Pc=require("lodash");var ua=require("@raycast/api");function Ue(e){return e?{icon:{source:e.avatarUrl??ua.Icon.Person,mask:ua.Image.Mask.Circle},text:(e.name?e.name:e.login)??"-"}:{icon:ua.Icon.Person,text:"Unknown"}}function hi(e){return[...new Map(e.map(t=>[t.id,t])).values()]}function Di(e){return e?.filter(t=>typeof t=="object"&&t!==null&&"id"in t)??[]}function Bt(e,t,{suffix:a="s",withNumber:n=!1}={}){let r=`${t}${e!==1?a:""}`;return n?`${e} ${r}`:r}var ke=require("@raycast/api");function ur(e){return e.stateReason==="NOT_PLANNED"?{icon:{source:"skip.svg",tintColor:ke.Color.SecondaryText},text:"Closed as not planned",color:ke.Color.Purple}:e.stateReason==="COMPLETED"?{icon:{source:"issue-closed.svg",tintColor:ke.Color.Purple},text:"Closed as completed",color:ke.Color.Purple}:e.closed?{icon:{source:"issue-closed.svg",tintColor:ke.Color.Purple},text:"Closed",color:ke.Color.Purple}:{icon:{source:"issue-open.svg",tintColor:ke.Color.Green},text:"Open",color:ke.Color.Green}}function pr(e){return Ue(e.author)}var xi=[{title:"Newest",value:"sort:created-desc"},{title:"Oldest",value:"sort:created-asc"},{title:"Most Commented",value:"sort:comments-desc"},{title:"Least Commented",value:"sort:comments-asc"},{title:"Recently Updated",value:"sort:updated-desc"},{title:"Least Recently Updated",value:"sort:updated-asc"},{title:"Best Match",value:"sort:relevance-desc"},{title:"\u{1F44D}",value:"sort:reactions-+1-desc"},{title:"\u{1F44E}",value:"sort:reactions--1-desc"},{title:"\u{1F604}",value:"sort:reactions-smile-desc"},{title:"\u{1F389}",value:"sort:reactions-tada-desc"},{title:"\u{1F641}",value:"sort:reactions-thinking_face-desc"},{title:"\u2764\uFE0F",value:"sort:reactions-heart-desc"},{title:"\u{1F680}",value:"sort:reactions-rocket-desc"},{title:"\u{1F440}",value:"sort:reactions-eyes-desc"}],Ui="sort:updated-desc",Ec=/\brepo:([A-Za-z0-9_.-]+)\/([A-Za-z0-9_.-]+)\b/i,Cc=/(?:https?:\/\/github\.com\/)?([A-Za-z0-9_.-]+)\/([A-Za-z0-9_.-]+)(?:\/issues\/|#)(\d+)\b/i,hc=/\b(?:repo|author|assignee|mentions|commenter|involves|team|label|milestone|project|status|head|base|language|is|type|state|user|org|sort|archived|no|review|draft|created|updated|closed|linked|in|comments|interactions|reactions):[^\s]+/gi;function _i(e,t){let a=e.match(Cc);if(a)return{owner:a[1],name:a[2],issueNumber:Number.parseInt(a[3],10)};let n=e.match(Ec),r=t?.replace(/^repo:/,""),o=n?`${n[1]}/${n[2]}`:r?.includes("/")?r:null;if(!o)return null;let s=e.replace(hc," ").replace(/\s+/g," ").trim().match(/^#?(\d+)$/)??e.match(/(?:^|\s)#(\d+)(?:\s|$)/);if(!s)return null;let[i,p]=o.split("/");return!i||!p?null:{owner:i,name:p,issueNumber:Number.parseInt(s[1],10)}}function vi(e){return e.replace(/(^|\s)#(\d+)(?=\s|$)/g,"$1$2").trim()}var Ti=w(Ce());function _e(){let{github:e}=W(),{data:t}=(0,Ti.useCachedPromise)(async()=>(await e.getViewer()).viewer);return t}var d=require("@raycast/api"),lr=w(Ce()),cr=require("react");function K(e){return e?.response?.errors?e.response.errors[0].message:e instanceof Error?e.message:String(e)}var ee=require("@raycast/api"),ve=require("react/jsx-runtime"),Oi=({sortQuery:e,setSortQuery:t,data:a})=>t?(0,ve.jsxs)(ee.ActionPanel.Submenu,{title:"Sort by",icon:ee.Icon.ArrowUp,shortcut:ee.Keyboard.Shortcut.Common.Duplicate,children:[a.filter(({value:n})=>!n.startsWith("sort:reaction")).map(({title:n,value:r})=>(0,ve.jsx)(wi,{title:n,value:r,sortQuery:e??"",setSortQuery:t},r||"relevance")),a.some(({value:n})=>n.startsWith("sort:reaction"))&&(0,ve.jsx)(ee.ActionPanel.Section,{title:"Most Reactions",children:a.filter(({value:n})=>n.startsWith("sort:reaction")).map(({title:n,value:r})=>(0,ve.jsx)(wi,{title:n,value:r,sortQuery:e??"",setSortQuery:t},r))})]}):(0,ve.jsx)(ve.Fragment,{}),wi=({title:e,value:t,sortQuery:a,setSortQuery:n})=>(0,ve.jsx)(ee.Action,{title:e,icon:a===t?{source:ee.Icon.CheckCircle,tintColor:ee.Color.Green}:ee.Icon.Circle,onAction:()=>n(t)});var h=require("react/jsx-runtime");function pa({issue:e,mutateList:t,mutateDetail:a,children:n,setSortQuery:r,sortQuery:o}){let{github:u}=W(),s=_e();async function i(){t&&await t(),a&&await a()}async function p(){try{await(0,d.showToast)({style:d.Toast.Style.Animated,title:`Reopening issue #${e.number}`}),await u.reopenIssue({nodeId:e.id}),await i(),await(0,d.showToast)({style:d.Toast.Style.Success,title:`Issue #${e.number} is now open`})}catch(S){await(0,d.showToast)({style:d.Toast.Style.Failure,title:"Failed reopening issue",message:K(S)})}}async function c(){try{await(0,d.showToast)({style:d.Toast.Style.Animated,title:`Closing issue #${e.number} as completed`}),await u.closeIssue({nodeId:e.id,stateReason:"COMPLETED"}),await i(),await(0,d.showToast)({style:d.Toast.Style.Success,title:`Issue #${e.number} closed as completed`})}catch(S){await(0,d.showToast)({style:d.Toast.Style.Failure,title:"Failed closing issue as completed",message:K(S)})}}async function y(){try{await(0,d.showToast)({style:d.Toast.Style.Animated,title:`Closing issue #${e.number} as not planned`}),await u.closeIssue({nodeId:e.id,stateReason:"NOT_PLANNED"}),await i(),await(0,d.showToast)({style:d.Toast.Style.Success,title:`Issue #${e.number} closed as not planned`})}catch(S){await(0,d.showToast)({style:d.Toast.Style.Failure,title:"Failed closing issue as not planned",message:K(S)})}}async function m(S){try{await(0,d.showToast)({style:d.Toast.Style.Animated,title:"Assigning to me"});let b=e.assignees.nodes?.filter(P=>!!P).map(P=>P?.id)??[];await u.changeIssueAssignees({issueId:e.id,assigneeIds:[...b,S]}),await i(),await(0,d.showToast)({style:d.Toast.Style.Success,title:"Assigned to me"})}catch(b){await(0,d.showToast)({style:d.Toast.Style.Failure,title:"Failed assigning to me",message:K(b)})}}async function f(S){try{await(0,d.showToast)({style:d.Toast.Style.Animated,title:"Un-assigning from me"});let b=e.assignees.nodes?.filter(P=>!!P).map(P=>P?.id)??[];await u.changeIssueAssignees({issueId:e.id,assigneeIds:b?.filter(P=>P!==S)}),await i(),await(0,d.showToast)({style:d.Toast.Style.Success,title:"Un-assigned from me"})}catch(b){await(0,d.showToast)({style:d.Toast.Style.Failure,title:"Failed un-assigning from me",message:K(b)})}}async function l(){try{await(0,d.showToast)({style:d.Toast.Style.Animated,title:`Creating branch for issue #${e.number}`});let S=e.repository.defaultBranchRef?.target?.oid;if(!S)throw new Error("Repository default branch commit SHA is unavailable");let P=(await u.createLinkedBranch({input:{issueId:e.id,oid:S}})).createLinkedBranch?.linkedBranch?.ref?.name;await i(),P&&await(0,d.showToast)({style:d.Toast.Style.Success,title:`${P} is created`,primaryAction:{title:"Copy Branch Name",shortcut:d.Keyboard.Shortcut.Common.Copy,onAction:()=>d.Clipboard.copy(P)}})}catch(S){await(0,d.showToast)({style:d.Toast.Style.Failure,title:"Failed creating a branch",message:K(S)})}}async function g(S,b){if(await(0,d.confirmAlert)({icon:d.Icon.Trash,title:"Delete the branch",message:`${b} will be deleted. Are you sure you want to proceed with the action?`,primaryAction:{title:"Confirm",style:d.Alert.ActionStyle.Destructive}}))try{await(0,d.showToast)({style:d.Toast.Style.Animated,title:"Deleting a branch"}),await u.deleteLinkedBranch({input:{linkedBranchId:S}}),await i(),await(0,d.showToast)({style:d.Toast.Style.Success,title:"Deleted the branch"})}catch(P){await(0,d.showToast)({style:d.Toast.Style.Failure,title:"Failed deleting the branch",message:K(P)})}}let I=Ue(s),M=e.assignees.nodes?.some(S=>S?.isViewer),R=e.linkedBranches?.nodes?.length?e.linkedBranches.nodes[0]:null;return(0,h.jsxs)(d.ActionPanel,{title:`#${e.number} in ${e.repository.nameWithOwner}`,children:[n,(0,h.jsx)(d.Action.OpenInBrowser,{url:e.url}),(0,h.jsxs)(d.ActionPanel.Section,{children:[s?(0,h.jsx)(d.Action,{title:M?"Unassign from Me":"Assign to Me",icon:I.icon,shortcut:{macOS:{modifiers:["cmd","shift"],key:"i"},Windows:{modifiers:["ctrl","shift"],key:"i"}},onAction:()=>M?f(s.id):m(s.id)}):null,(0,h.jsx)(Dc,{issue:e,mutate:i}),(0,h.jsx)(xc,{issue:e,mutate:i}),R?null:(0,h.jsx)(d.Action,{title:"Create Issue Branch",icon:{source:"branch.svg",tintColor:d.Color.PrimaryText},shortcut:{macOS:{modifiers:["cmd","shift"],key:"b"},Windows:{modifiers:["ctrl","shift"],key:"b"}},onAction:()=>l()}),(0,h.jsx)(Uc,{issue:e,mutate:i})]}),(0,h.jsx)(d.ActionPanel.Section,{children:e.closed?(0,h.jsx)(d.Action,{title:"Reopen Issue",icon:{source:"issue-reopened.svg",tintColor:d.Color.Green},onAction:p}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(d.Action,{title:"Close Issue as Completed",style:d.Action.Style.Destructive,icon:{source:"issue-closed.svg",tintColor:d.Color.Red},onAction:c}),(0,h.jsx)(d.Action,{title:"Close Issue as Not Planned",style:d.Action.Style.Destructive,icon:{source:"skip.svg",tintColor:d.Color.Red},onAction:y}),R?(0,h.jsx)(d.Action,{title:"Delete Issue Branch",style:d.Action.Style.Destructive,icon:{source:"branch.svg",tintColor:d.Color.Red},onAction:()=>g(R?.id||"",R.ref?.name??"")}):null]})}),(0,h.jsxs)(d.ActionPanel.Section,{children:[(0,h.jsx)(d.Action.CopyToClipboard,{content:e.number,title:"Copy Issue Number",shortcut:{macOS:{modifiers:["cmd","shift"],key:"."},Windows:{modifiers:["ctrl","shift"],key:"."}}}),(0,h.jsx)(d.Action.CopyToClipboard,{content:e.url,title:"Copy Issue URL",shortcut:{macOS:{modifiers:["cmd","shift"],key:","},Windows:{modifiers:["ctrl","shift"],key:","}}}),(0,h.jsx)(d.Action.CopyToClipboard,{content:e.title,title:"Copy Issue Title",shortcut:{macOS:{modifiers:["ctrl","shift"],key:","},Windows:{modifiers:["alt","shift"],key:","}}}),(0,h.jsx)(d.Action.CopyToClipboard,{content:`[${e.title}](${e.url})`,title:"Copy Markdown URL",shortcut:{macOS:{modifiers:["cmd","shift"],key:";"},Windows:{modifiers:["ctrl","shift"],key:";"}}}),R?.ref?.name?(0,h.jsx)(d.Action.CopyToClipboard,{content:R.ref?.name,title:"Copy Branch Name",shortcut:{macOS:{modifiers:["ctrl","shift"],key:"."},Windows:{modifiers:["alt","shift"],key:"."}}}):null]}),(0,h.jsxs)(d.ActionPanel.Section,{children:[(0,h.jsx)(Oi,{data:xi,sortQuery:o,setSortQuery:r}),(0,h.jsx)(d.Action,{icon:d.Icon.ArrowClockwise,title:"Refresh",onAction:i,shortcut:d.Keyboard.Shortcut.Common.Refresh})]})]})}function Dc({issue:e,mutate:t}){let{github:a}=W(),[n,r]=(0,cr.useState)(!1),{data:o,isLoading:u}=(0,lr.useCachedPromise)(async i=>a.repositoryCollaboratorsForIssues({owner:i.repository.owner.login,name:i.repository.name,issueNumber:i.number}),[e],{execute:n});async function s({id:i,text:p}){try{await(0,d.showToast)({style:d.Toast.Style.Animated,title:"Adding assignee",message:p});let c=o?.repository?.issue?.assignees.nodes?.filter(y=>!!y).map(y=>y?.id)??[];await a.changeIssueAssignees({issueId:e.id,assigneeIds:[...c,i]}),await t(),await(0,d.showToast)({style:d.Toast.Style.Success,title:"Added assignee",message:p})}catch(c){await(0,d.showToast)({style:d.Toast.Style.Failure,title:"Failed adding assignee",message:K(c)})}}return(0,h.jsx)(d.ActionPanel.Submenu,{title:"Add Assignee",icon:d.Icon.AddPerson,shortcut:{macOS:{modifiers:["cmd","shift"],key:"a"},Windows:{modifiers:["ctrl","shift"],key:"a"}},onOpen:()=>r(!0),children:u?(0,h.jsx)(d.Action,{title:"Loading\u2026"}):o?.repository?.collaborators?.nodes?.map(i=>{if(!i)return null;let p=Ue(i);return(0,h.jsx)(d.Action,{title:p.text,icon:p.icon,onAction:()=>s({id:i.id,text:p.text})},i.id)})})}function xc({issue:e,mutate:t}){let{github:a}=W(),[n,r]=(0,cr.useState)(!1),{data:o,isLoading:u}=(0,lr.useCachedPromise)(async i=>a.repositoryProjectsForIssues({owner:i.repository.owner.login,name:i.repository.name,issueNumber:i.number}),[e],{execute:n});async function s({id:i,text:p}){try{await(0,d.showToast)({style:d.Toast.Style.Animated,title:"Adding to project",message:p}),await a.addIssueToProject({issueId:e.id,projectId:i}),await t(),await(0,d.showToast)({style:d.Toast.Style.Success,title:"Added to project",message:p})}catch(c){await(0,d.showToast)({style:d.Toast.Style.Failure,title:"Failed adding to project",message:K(c)})}}return(0,h.jsx)(d.ActionPanel.Submenu,{title:"Add to Project",icon:{source:"project.svg",tintColor:d.Color.PrimaryText},shortcut:{macOS:{modifiers:["cmd","shift"],key:"p"},Windows:{modifiers:["ctrl","shift"],key:"p"}},onOpen:()=>r(!0),children:u?(0,h.jsx)(d.Action,{title:"Loading\u2026"}):o?.repository?.projectsV2.nodes?.map(i=>i?(0,h.jsx)(d.Action,{title:i.title,onAction:()=>s({id:i.id,text:i.title})},i.id):null)})}function Uc({issue:e,mutate:t}){let{github:a}=W(),[n,r]=(0,cr.useState)(!1),{data:o,isLoading:u}=(0,lr.useCachedPromise)(async p=>a.milestonesForRepository({owner:p.repository.owner.login,name:p.repository.name}),[e],{execute:n});async function s(){try{await(0,d.showToast)({style:d.Toast.Style.Animated,title:"Removing milestone"}),await a.changeIssueMilestone({issueId:e.id,milestoneId:null}),await t(),await(0,d.showToast)({style:d.Toast.Style.Success,title:"Removed milestone"})}catch(p){await(0,d.showToast)({style:d.Toast.Style.Failure,title:"Failed removing milestone",message:K(p)})}}async function i({id:p,text:c}){try{await(0,d.showToast)({style:d.Toast.Style.Animated,title:"Setting milestone",message:c}),await a.changeIssueMilestone({issueId:e.id,milestoneId:p}),await t(),await(0,d.showToast)({style:d.Toast.Style.Success,title:"Milestone set",message:c})}catch(y){await(0,d.showToast)({style:d.Toast.Style.Failure,title:"Failed setting milestone",message:K(y)})}}return(0,h.jsx)(d.ActionPanel.Submenu,{title:"Set Milestone",icon:{source:"milestone.svg",tintColor:d.Color.PrimaryText},shortcut:{macOS:{modifiers:["cmd","shift"],key:"m"},Windows:{modifiers:["ctrl","shift"],key:"m"}},onOpen:()=>r(!0),children:u?(0,h.jsx)(d.Action,{title:"Loading\u2026"}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(d.Action,{title:"No Milestone",onAction:()=>s()}),o?.repository?.milestones?.nodes?.map(p=>p?(0,h.jsx)(d.Action,{title:p.title,onAction:()=>i({id:p.id,text:p.title}),autoFocus:e.milestone?.id===p.id},p.id):null)]})})}var F=require("react/jsx-runtime");function la({initialIssue:e,mutateList:t}){let{github:a}=W(),n=_e(),{data:r,isLoading:o,mutate:u}=(0,Bi.useCachedPromise)(async y=>(await a.issueDetails({nodeId:y})).node,[e.id],{initialData:e}),s=`# ${r.title}`;r?.body&&(s+=`

${r.body}`);let i=ur(r),p=pr(r),c=r.linkedBranches.nodes?.length?r.linkedBranches.nodes[0]?.ref?.name:null;return(0,F.jsx)(V.Detail,{isLoading:o,markdown:s,navigationTitle:`#${r.number}`,metadata:(0,F.jsxs)(V.Detail.Metadata,{children:[(0,F.jsx)(V.Detail.Metadata.Label,{title:"Repository",text:r.repository.nameWithOwner}),(0,F.jsx)(V.Detail.Metadata.TagList,{title:"Status",children:(0,F.jsx)(V.Detail.Metadata.TagList.Item,{...i})}),c?(0,F.jsx)(V.Detail.Metadata.Label,{title:"Branch",icon:{source:"branch.svg",tintColor:V.Color.PrimaryText},text:c}):null,r.updatedAt?(0,F.jsx)(V.Detail.Metadata.Label,{title:"Updated",text:(0,Li.format)(new Date(r.updatedAt),"dd MMM")}):null,(0,F.jsx)(V.Detail.Metadata.Label,{title:"Author",...p}),r.assignees&&r.assignees.totalCount>0?(0,F.jsx)(V.Detail.Metadata.TagList,{title:Bt(r.assignees.totalCount,"Assignee"),children:r.assignees.nodes?.map(y=>{if(!y)return null;let m=Ue(y);return(0,F.jsx)(V.Detail.Metadata.TagList.Item,{...m},y.id)})}):null,r.labels&&r.labels.totalCount>0?(0,F.jsx)(V.Detail.Metadata.TagList,{title:Bt(r.labels.totalCount,"Label"),children:r.labels.nodes?.map(y=>y?(0,F.jsx)(V.Detail.Metadata.TagList.Item,{text:y.name,color:y.color},y.id):null)}):null,r.projectsV2&&r.projectsV2.totalCount>0?(0,F.jsx)(V.Detail.Metadata.TagList,{title:Bt(r.projectsV2.totalCount,"Project"),children:r.projectsV2.nodes?.map(y=>y?(0,F.jsx)(V.Detail.Metadata.TagList.Item,{text:y.title},y.id):null)}):null,r.milestone?(0,F.jsx)(V.Detail.Metadata.Label,{title:"Milestone",text:r.milestone.title}):null]}),actions:(0,F.jsx)(pa,{issue:r,viewer:n,mutateList:t,mutateDetail:u})})}var qi=w(Ce());var yr=(0,qi.withAccessToken)(Ei);var Fi=w(Ce());var dr=require("node:child_process");var Vi=require("node:util"),te=require("@raycast/api"),_c=w(Ce());function on(e){return[...e.userLogin?[`user:${e.userLogin}`]:[],...(e.orgLogins??[]).filter(a=>!!a).map(a=>`org:${a}`)].join(" ")}var BS=[{title:"github.dev",baseUrl:"https://github.dev/",icon:{source:"github-dev.svg",tintColor:te.Color.PrimaryText},shortcut:te.Keyboard.Shortcut.Common.Open},{title:"VS Code for the Web",baseUrl:"https://vscode.dev/github/",icon:{source:"vscode.svg",tintColor:te.Color.PrimaryText},shortcut:{macOS:{modifiers:["cmd"],key:"v"},Windows:{modifiers:["ctrl"],key:"v"}}},{title:"CodeSandbox",baseUrl:"https://codesandbox.io/s/github/",icon:{source:"codesandbox.svg",tintColor:te.Color.PrimaryText}},{title:"Replit",baseUrl:"https://repl.it/github/",icon:{source:"replit.svg",tintColor:te.Color.PrimaryText}},{title:"Gitpod",baseUrl:"https://gitpod.io/#https://github.com/",icon:{source:"gitpod.svg",tintColor:te.Color.PrimaryText}},{title:"Glitch",baseUrl:"https://glitch.com/edit/#!/import/github/",icon:{source:"glitch.svg",tintColor:te.Color.PrimaryText}},{title:"Sourcegraph",baseUrl:"https://sourcegraph.com/github.com/",icon:{source:"sourcegraph.svg",tintColor:te.Color.PrimaryText},shortcut:{macOS:{modifiers:["cmd"],key:"s"},Windows:{modifiers:["ctrl"],key:"s"}}},{title:"DeepWiki",baseUrl:"https://deepwiki.com/",icon:{source:"deepwiki.png"},shortcut:{macOS:{modifiers:["cmd"],key:"d"},Windows:{modifiers:["ctrl"],key:"d"}}},{title:"VS Code Remote Repositories",baseUrl:"vscode://GitHub.remotehub/open?url=https://github.com/",icon:{source:"vscode.svg",tintColor:te.Color.PrimaryText}}];var vc=[{title:"Relevance",value:""},{title:"Last Update",value:"sort:updated-desc"},{title:"Name",value:"sort:name-asc"},{title:"Stars",value:"sort:stars-desc"},{title:"Forks",value:"sort:forks-desc"}],Tc=[{title:"Last Pushed",value:"pushed_at:desc"},{title:"Name",value:"name:asc"},{title:"Stars",value:"stargazers:desc"}],wc=[{title:"Recently Starred",value:"starred_at:desc"},{title:"Oldest Starred",value:"starred_at:asc"}],LS=vc[0].value,qS=Tc[0].value,NS=wc[0].value;var VS=(0,Vi.promisify)(dr.execFile);var ca="\x1B",Ni="\x07",FS=new RegExp(`${ca}][^${Ni}${ca}]*(?:${Ni}|${ca}\\\\)`,"g"),kS=new RegExp(`${ca}\\[[0-9;?]*[A-Za-z]`,"g"),jS=new RegExp(`${ca}\\([0-9A-Za-z]`,"g");function ki(){let{github:e}=W(),n=["user:@me",..._e()?.organizations?.nodes?.flatMap(r=>r?.login?[`org:${r.login}`]:[])??[]].join(" ");return(0,Fi.useCachedPromise)(async r=>{let u=(await Promise.allSettled(r.split(" ").map(s=>e.searchRepositories({query:`${s} archived:false sort:updated-desc`,numberOfItems:100})))).flatMap(s=>s.status==="fulfilled"?s.value.search.nodes:[]);return[...new Map(u.map(s=>[s.id,s])).values()].sort((s,i)=>new Date(i.updatedAt).getTime()-new Date(s.updatedAt).getTime())},[n])}var T=require("react/jsx-runtime");function sn({draftValues:e}){let{push:t}=(0,C.useNavigation)(),{data:a}=ki(),{github:n}=W(),{openInBrowserAfterCreate:r}=(0,C.getPreferenceValues)(),{handleSubmit:o,itemProps:u,values:s,setValue:i,reset:p,focus:c}=(0,yt.useForm)({async onSubmit(S){let b=await(0,C.showToast)({style:C.Toast.Style.Animated,title:"Creating issue"});try{let E=(await n.createIssue({repositoryId:S.repository,title:S.title,body:S.description,assigneeIds:S.assignees,labelIds:S.labels,milestoneId:S.milestone||null,issueTypeId:S.issueType||null}))?.createIssue?.issue;if(E&&(await Promise.all(S.projects.map(_=>n.addIssueToProject({issueId:E.id,projectId:_}))),b.style=C.Toast.Style.Success,b.title="Created issue",b.primaryAction={title:"Open Issue",shortcut:C.Keyboard.Shortcut.Common.OpenWith,onAction:()=>t((0,T.jsx)(la,{initialIssue:E}))},b.secondaryAction={title:"Copy URL",shortcut:C.Keyboard.Shortcut.Common.Copy,onAction:()=>C.Clipboard.copy(E.url)},r))try{await(0,C.open)(E.url)}catch{}p({title:"",description:"",reviewers:[],assignees:[],labels:[],projects:[],milestone:"",issueType:""}),c("repository")}catch(P){b.style=C.Toast.Style.Failure,b.title="Failed creating issue",b.message=K(P)}},initialValues:{repository:e?.repository??"",title:e?.title??"",description:e?.description??"",reviewers:e?.reviewers??[],assignees:e?.assignees??[],labels:e?.labels??[],projects:e?.projects??[],milestone:e?.milestone??"",issueType:e?.issueType??""},validation:{repository:yt.FormValidation.Required,title:yt.FormValidation.Required}}),{data:y}=(0,yt.useCachedPromise)(S=>{let b=a?.find(P=>P.id===S);return b?n.dataForRepository({owner:b.owner.login,name:b.name}):Promise.resolve(null)},[s.repository],{execute:!!s.repository}),m=y?.repository?.collaborators?.nodes,f=y?.repository?.labels?.nodes,l=y?.repository?.projectsV2?.nodes??[],g=y?.repository?.owner?.__typename==="Organization"?y.repository.owner.projectsV2?.nodes??[]:[],I=[...l,...g].filter((S,b,P)=>S?P.findIndex(E=>E?.id===S.id)===b:!1),M=y?.repository?.milestones?.nodes,R=y?.repository?.issueTypes?.nodes?.filter(S=>S&&S.isEnabled);return(0,ji.useEffect)(()=>{i("description",""),i("assignees",[]),i("labels",[]),i("projects",[]),i("milestone",""),i("issueType","")},[s.repository]),(0,T.jsxs)(C.Form,{actions:(0,T.jsx)(C.ActionPanel,{children:(0,T.jsx)(C.Action.SubmitForm,{onSubmit:o,title:"Create Issue"})}),enableDrafts:!0,children:[(0,T.jsx)(C.Form.Dropdown,{...u.repository,title:"Repository",storeValue:!0,children:a?.map(S=>(0,T.jsx)(C.Form.Dropdown.Item,{title:S.nameWithOwner,value:S.id,icon:{source:S.owner.avatarUrl,mask:C.Image.Mask.Circle}},S.id))}),(0,T.jsx)(C.Form.Separator,{}),(0,T.jsx)(C.Form.TextField,{...u.title,title:"Title",placeholder:"Issue title"}),(0,T.jsx)(C.Form.TextArea,{...u.description,placeholder:"Issue description (e.g **bold**)",title:"Description",enableMarkdown:!0}),(0,T.jsx)(C.Form.TagPicker,{...u.assignees,title:"Assignees",children:m?.map(S=>{if(!S)return null;let b=Ue(S);return(0,T.jsx)(C.Form.TagPicker.Item,{icon:b.icon,title:b.text,value:S.id},S.id)})}),(0,T.jsx)(C.Form.TagPicker,{...u.labels,title:"Labels",children:f?.map(S=>S?(0,T.jsx)(C.Form.TagPicker.Item,{title:S.name,value:S.id,icon:{source:C.Icon.Dot,tintColor:S.color}},S.id):null)}),(0,T.jsx)(C.Form.TagPicker,{...u.projects,title:"Projects",children:I?.map(S=>S?(0,T.jsx)(C.Form.TagPicker.Item,{title:S.title,value:S.id},S.id):null)}),(0,T.jsxs)(C.Form.Dropdown,{...u.issueType,title:"Issue Type",children:[(0,T.jsx)(C.Form.Dropdown.Item,{value:"",title:"None"}),R?.map(S=>S?(0,T.jsx)(C.Form.Dropdown.Item,{icon:{source:C.Icon.Dot,tintColor:S.color},title:S.name,value:S.id},S.id):null)]}),(0,T.jsxs)(C.Form.Dropdown,{...u.milestone,title:"Milestone",children:[(0,T.jsx)(C.Form.Dropdown.Item,{value:"",title:"None"}),M?.map(S=>S?(0,T.jsx)(C.Form.Dropdown.Item,{title:S.title,value:S.id},S.id):null)]})]})}var tb=yr(sn);var ya=require("react/jsx-runtime");function un(){return(0,ya.jsx)(Lt.List.EmptyView,{title:"No issues found",actions:(0,ya.jsx)(Lt.ActionPanel,{children:(0,ya.jsx)(Lt.Action.Push,{title:"Create Issue",target:(0,ya.jsx)(sn,{})})})})}var je=require("@raycast/api"),zi=require("date-fns");var da=require("react/jsx-runtime");function pn({issue:e,viewer:t,mutateList:a,sortQuery:n,setSortQuery:r}){let o=new Date(e.updatedAt),u=pr(e),s=ur(e),i=[{date:o,tooltip:`Updated: ${(0,zi.format)(o,"EEEE d MMMM yyyy 'at' HH:mm")}`},{icon:u.icon,tooltip:`Author: ${u.text}`}];e.comments.totalCount>0&&i.unshift({text:`${e.comments.totalCount}`,icon:je.Icon.Bubble}),e.linkedBranches?.nodes?.length&&i.unshift({icon:{source:"branch.svg",tintColor:je.Color.SecondaryText},tooltip:e.linkedBranches.nodes[0]?.ref?.name});let p=[`${e.number}`];return e.author?.login&&p.push(e.author.login),(0,da.jsx)(je.List.Item,{title:e.title,subtitle:{value:`#${e.number}`,tooltip:`Repository: ${e.repository.nameWithOwner}`},icon:{value:s.icon,tooltip:`Status: ${s.text}`},keywords:p,accessories:i,actions:(0,da.jsx)(pa,{issue:e,mutateList:a,viewer:t,sortQuery:n,setSortQuery:r,children:(0,da.jsx)(je.Action.Push,{title:"Show Details",icon:je.Icon.Sidebar,target:(0,da.jsx)(la,{initialIssue:e,viewer:t,mutateList:a})})})},e.id)}var et=require("@raycast/api"),Oc=w(require("react")),Gi=require("react/jsx-runtime");function Bc(e){let t=e.min||1,a=e.max||100,n=e.default||10,o=(0,et.getPreferenceValues)()[e.name]||"",u=Number(o);return isNaN(u)||u<t||u>a?n:u}function Hi(){return Math.min(Bc({name:"numberOfResults",default:50}),25)}var k=require("@raycast/api");var Te=require("react/jsx-runtime");function ln(e){let t=_e(),a=t?.organizations?.nodes?.filter(o=>o!=null)??[],n=a.map(o=>o.login),r=a.length>1;return(0,Te.jsxs)(k.List.Dropdown,{tooltip:"Filter Repositories",onChange:e.onFilterChange,storeValue:!0,children:[(0,Te.jsxs)(k.List.Dropdown.Section,{children:[(0,Te.jsx)(k.List.Dropdown.Item,{title:"All Repositories",icon:k.Icon.List,value:""}),t&&a.length>0?(0,Te.jsx)(k.List.Dropdown.Item,{title:"My Repositories",icon:k.Icon.Person,value:on({userLogin:t.login,orgLogins:n})}):null,r?(0,Te.jsx)(k.List.Dropdown.Item,{title:"My Organizations",icon:k.Icon.Building,value:on({orgLogins:n})}):null]}),(0,Te.jsxs)(k.List.Dropdown.Section,{children:[t?(0,Te.jsx)(k.List.Dropdown.Item,{icon:{source:t.avatarUrl??k.Icon.PersonCircle,mask:k.Image.Mask.Circle},title:t.login,value:`user:${t.login}`}):null,a.map(o=>(0,Te.jsx)(k.List.Dropdown.Item,{icon:{source:o.avatarUrl??k.Icon.PersonCircle,mask:k.Image.Mask.Circle},title:o.login,value:`org:${o.login}`},o.login))]})]})}var dt=require("react/jsx-runtime");function Lc(){let{github:e}=W(),t=_e(),{defaultSearchTerms:a}=(0,Sa.getPreferenceValues)(),[n,r]=(0,cn.useState)((0,$i.trim)(a)+" "),[o,u]=(0,Sr.useCachedState)("sort-query",Ui,{cacheNamespace:"github-search-issue"}),[s,i]=(0,cn.useState)(null),{data:p,isLoading:c,mutate:y,pagination:m}=(0,Sr.useCachedPromise)((l,g,I)=>async({cursor:M})=>{if(!M){let S=_i(`${g??""} ${l}`);if(S)try{let b=await e.issueByNumber(S);if(b.repository?.issue)return{data:[b.repository.issue],hasMore:!1}}catch{}}let R=await e.searchIssues({numberOfItems:Hi(),query:`is:issue archived:false ${I} ${g??""} ${vi(l)}`,after:M});return{data:Di(R.search.nodes),hasMore:R.search.pageInfo.hasNextPage,cursor:R.search.pageInfo.endCursor??void 0}},[n,s,o],{keepPreviousData:!0}),f=hi(p??[]);return(0,dt.jsxs)(Sa.List,{isLoading:c,searchBarPlaceholder:"Search issues, or owner/repo#123",searchBarAccessory:(0,dt.jsx)(ln,{onFilterChange:i}),searchText:n,onSearchTextChange:r,throttle:!0,pagination:m,children:[p?(0,dt.jsx)(Sa.List.Section,{title:n?"Search Results":"Created Recently",subtitle:Bt(f.length,"issue",{withNumber:!0}),children:f.map(l=>(0,dt.jsx)(pn,{issue:l,viewer:t,mutateList:y,sortQuery:o,setSortQuery:u},l.id))}):null,(0,dt.jsx)(un,{})]})}var qc=yr(Lc);
