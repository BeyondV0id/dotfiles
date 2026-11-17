"use strict";var Ii=Object.create;var Yt=Object.defineProperty;var gi=Object.getOwnPropertyDescriptor;var Mi=Object.getOwnPropertyNames;var mi=Object.getPrototypeOf,Ri=Object.prototype.hasOwnProperty;var Ga=(e,t,a)=>()=>{if(a)throw a[0];try{return e&&(t=e(e=0)),t}catch(r){throw a=[r],r}};var h=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(a){throw t=0,a}},et=(e,t)=>{for(var a in t)Yt(e,a,{get:t[a],enumerable:!0})},Kt=(e,t,a,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Mi(t))!Ri.call(e,n)&&n!==a&&Yt(e,n,{get:()=>t[n],enumerable:!(r=gi(t,n))||r.enumerable});return e},$=(e,t,a)=>(Kt(e,t,"default"),a&&Kt(a,t,"default")),V=(e,t,a)=>(a=e!=null?Ii(mi(e)):{},Kt(t||!e||!e.__esModule?Yt(a,"default",{value:e,enumerable:!0}):a,e)),Ai=e=>Kt(Yt({},"__esModule",{value:!0}),e);var Qr=h(Zt=>{"use strict";Object.defineProperty(Zt,"__esModule",{value:!0});Zt.useDeepMemo=void 0;var Qa=require("react"),Os=require("dequal/lite");function Bs(e){let t=(0,Qa.useRef)(e),a=(0,Qa.useRef)(0);return(0,Os.dequal)(e,t.current)||(t.current=e,a.current+=1),(0,Qa.useMemo)(()=>t.current,[a.current])}Zt.useDeepMemo=Bs});var Pe=h(Xt=>{"use strict";Object.defineProperty(Xt,"__esModule",{value:!0});Xt.useLatest=void 0;var qs=require("react");function Ls(e){let t=(0,qs.useRef)(e);return t.current=e,t}Xt.useLatest=Ls});var Ct=h(be=>{"use strict";var Ns=be&&be.__createBinding||(Object.create?(function(e,t,a,r){r===void 0&&(r=a);var n=Object.getOwnPropertyDescriptor(t,a);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,n)}):(function(e,t,a,r){r===void 0&&(r=a),e[r]=t[a]})),Vs=be&&be.__setModuleDefault||(Object.create?(function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}):function(e,t){e.default=t}),Kr=be&&be.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var a in e)a!=="default"&&Object.prototype.hasOwnProperty.call(e,a)&&Ns(t,e,a);return Vs(t,e),t};Object.defineProperty(be,"__esModule",{value:!0});be.showFailureToast=void 0;var ks=Kr(require("fs")),js=Kr(require("path")),at=require("@raycast/api");function Fs(e,t){let a=e instanceof Error?e.message:String(e);return(0,at.showToast)({style:at.Toast.Style.Failure,title:t?.title??"Something went wrong",message:t?.message??a,primaryAction:t?.primaryAction??Wr(e),secondaryAction:t?.primaryAction?Wr(e):void 0})}be.showFailureToast=Fs;var Wr=e=>{let t=!0,a="[Extension Name]...",r="";try{let u=JSON.parse(ks.readFileSync(js.join(at.environment.assetsPath,"..","package.json"),"utf8"));a=`[${u.title}]...`,r=`https://raycast.com/${u.owner||u.author}/${u.name}`,(!u.owner||u.access==="public")&&(t=!1)}catch{}let n=at.environment.isDevelopment||t,o=e instanceof Error?e?.stack||e?.message||"":String(e);return{title:n?"Copy Logs":"Report Error",onAction(u){u.hide(),n?at.Clipboard.copy(o):(0,at.open)(`https://github.com/raycast/extensions/issues/new?&labels=extension%2Cbug&template=extension_bug_report.yml&title=${encodeURIComponent(a)}&extension-url=${encodeURI(r)}&description=${encodeURIComponent(`#### Error:
\`\`\`
${o}
\`\`\`
`)}`)}}}});var rt=h(ea=>{"use strict";Object.defineProperty(ea,"__esModule",{value:!0});ea.usePromise=void 0;var J=require("react"),ht=require("@raycast/api"),zs=Qr(),Te=Pe(),Hs=Ct();function Gs(e,t,a){let r=(0,J.useRef)(0),[n,o]=(0,J.useState)({isLoading:!0}),u=(0,Te.useLatest)(e),i=(0,Te.useLatest)(a?.abortable),s=(0,Te.useLatest)(t||[]),p=(0,Te.useLatest)(a?.onError),y=(0,Te.useLatest)(a?.onData),d=(0,Te.useLatest)(a?.onWillExecute),g=(0,Te.useLatest)(a?.failureToastOptions),S=(0,Te.useLatest)(n.data),c=(0,J.useRef)(),b=(0,J.useRef)({page:0}),I=(0,J.useRef)(!1),l=(0,J.useRef)(!0),A=(0,J.useRef)(50),P=(0,J.useCallback)((...z)=>{let w=++r.current;i.current&&(i.current.current?.abort(),i.current.current=new AbortController),d.current?.(z),o(D=>({...D,isLoading:!0}));let pe=$s(u.current)(...z);function de(D){return D.name=="AbortError"||w===r.current&&(p.current?p.current(D):ht.environment.launchType!==ht.LaunchType.Background&&(0,Hs.showFailureToast)(D,{title:"Failed to fetch latest data",primaryAction:{title:"Retry",onAction(Y){Y.hide(),c.current?.(...s.current||[])}},...g.current}),o({error:D,isLoading:!1})),D}return typeof pe=="function"?(I.current=!0,pe(b.current).then(({data:D,hasMore:Y,cursor:ft})=>(w===r.current&&(b.current&&(b.current.cursor=ft,b.current.lastItem=D?.[D.length-1]),y.current&&y.current(D,b.current),Y&&(A.current=D.length),l.current=Y,o(Ha=>b.current.page===0?{data:D,isLoading:!1}:{data:(Ha.data||[])?.concat(D),isLoading:!1})),D),D=>(l.current=!1,de(D)))):(I.current=!1,pe.then(D=>(w===r.current&&(y.current&&y.current(D),o({data:D,isLoading:!1})),D),de))},[i,y,p,s,u,o,c,d,b,g]);c.current=P;let m=(0,J.useCallback)(()=>{b.current={page:0};let z=s.current||[];return P(...z)},[P,s]),C=(0,J.useCallback)(async(z,w)=>{let pe;try{if(w?.optimisticUpdate){typeof w?.rollbackOnError!="function"&&w?.rollbackOnError!==!1&&(pe=structuredClone(S.current?.value));let de=w.optimisticUpdate;o(D=>({...D,data:de(D.data)}))}return await z}catch(de){if(typeof w?.rollbackOnError=="function"){let D=w.rollbackOnError;o(Y=>({...Y,data:D(Y.data)}))}else w?.optimisticUpdate&&w?.rollbackOnError!==!1&&o(D=>({...D,data:pe}));throw de}finally{w?.shouldRevalidateAfter!==!1&&(ht.environment.launchType===ht.LaunchType.Background||ht.environment.commandMode==="menu-bar"?await m():m())}},[m,S,o]),f=(0,J.useCallback)(()=>{b.current.page+=1;let z=s.current||[];P(...z)},[b,s,P]);(0,J.useEffect)(()=>{b.current={page:0},a?.execute!==!1?P(...t||[]):i.current&&i.current.current?.abort()},[(0,zs.useDeepMemo)([t,a?.execute,P]),i,b]),(0,J.useEffect)(()=>()=>{i.current&&i.current.current?.abort()},[i]);let v=a?.execute!==!1?n.isLoading:!1,j={...n,isLoading:v},ue=I.current?{pageSize:A.current,hasMore:l.current,onLoadMore:f}:void 0;return{...j,revalidate:m,mutate:C,pagination:ue}}ea.usePromise=Gs;function $s(e){return e===Promise.all||e===Promise.race||e===Promise.resolve||e===Promise.reject?e.bind(Promise):e}});var we=h(Ie=>{"use strict";var Qs=Ie&&Ie.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Ie,"__esModule",{value:!0});Ie.hash=Ie.reviver=Ie.replacer=void 0;var Ws=Qs(require("object-hash"));function Ks(e,t){let a=this[e];return a instanceof Date?`__raycast_cached_date__${a.toString()}`:Buffer.isBuffer(a)?`__raycast_cached_buffer__${a.toString("base64")}`:t}Ie.replacer=Ks;function Ys(e,t){return typeof t=="string"&&t.startsWith("__raycast_cached_date__")?new Date(t.replace("__raycast_cached_date__","")):typeof t=="string"&&t.startsWith("__raycast_cached_buffer__")?Buffer.from(t.replace("__raycast_cached_buffer__",""),"base64"):t}Ie.reviver=Ys;function Js(e,t){return(0,Ws.default)(e,{replacer:a=>a instanceof URLSearchParams?a.toString():a,...t})}Ie.hash=Js});var aa=h(ta=>{"use strict";Object.defineProperty(ta,"__esModule",{value:!0});ta.useCachedState=void 0;var Wa=require("react"),Zs=require("@raycast/api"),Ka=Pe(),Yr=we(),Xs=Symbol("cache without namespace"),Jr=new Map;function eu(e,t,a){let r=a?.cacheNamespace||Xs,n=Jr.get(r)||Jr.set(r,new Zs.Cache({namespace:a?.cacheNamespace})).get(r);if(!n)throw new Error("Missing cache");let o=(0,Ka.useLatest)(e),u=(0,Ka.useLatest)(t),i=(0,Wa.useSyncExternalStore)(n.subscribe,()=>{try{return n.get(o.current)}catch(d){console.error("Could not get Cache data:",d);return}}),s=(0,Wa.useMemo)(()=>{if(typeof i<"u"){if(i==="undefined")return;try{return JSON.parse(i,Yr.reviver)}catch(d){return console.warn("The cached data is corrupted",d),u.current}}else return u.current},[i,u]),p=(0,Ka.useLatest)(s),y=(0,Wa.useCallback)(d=>{let g=typeof d=="function"?d(p.current):d;if(typeof g>"u")n.set(o.current,"undefined");else{let S=JSON.stringify(g,Yr.replacer);n.set(o.current,S)}return g},[n,o,p]);return[s,y]}ta.useCachedState=eu});var xt=h(ra=>{"use strict";Object.defineProperty(ra,"__esModule",{value:!0});ra.useCachedPromise=void 0;var Dt=require("react"),tu=aa(),au=rt(),ru=Pe(),Zr=we(),nt=Symbol();function nu(e,t,a){let{initialData:r,keepPreviousData:n,internal_cacheKeySuffix:o,...u}=a||{},i=(0,Dt.useRef)(),[s,p]=(0,tu.useCachedState)((0,Zr.hash)(t||[])+o,nt,{cacheNamespace:(0,Zr.hash)(e)}),y=(0,Dt.useRef)(s!==nt?s:r),d=(0,Dt.useRef)(void 0),{mutate:g,revalidate:S,...c}=(0,au.usePromise)(e,t||[],{...u,onData(P,m){d.current=m,u.onData&&u.onData(P,m),!(m&&m.page>0)&&(i.current="promise",y.current=P,p(P))}}),b,I=c.pagination;d.current&&d.current.page>0&&c.data?b=c.data:i.current==="promise"?b=y.current:n&&s!==nt?(b=s,I&&(I.hasMore=!0,I.pageSize=s.length)):n&&s===nt?b=y.current:s!==nt?(b=s,I&&(I.hasMore=!0,I.pageSize=s.length)):b=r;let l=(0,ru.useLatest)(b),A=(0,Dt.useCallback)(async(P,m)=>{let C;try{if(m?.optimisticUpdate){typeof m?.rollbackOnError!="function"&&m?.rollbackOnError!==!1&&(C=structuredClone(l.current));let f=m.optimisticUpdate(l.current);i.current="cache",y.current=f,p(f)}return await g(P,{shouldRevalidateAfter:m?.shouldRevalidateAfter})}catch(f){if(typeof m?.rollbackOnError=="function"){let v=m.rollbackOnError(l.current);i.current="cache",y.current=v,p(v)}else m?.optimisticUpdate&&m?.rollbackOnError!==!1&&(i.current="cache",y.current=C,p(C));throw f}},[p,g,l,y,i]);return(0,Dt.useEffect)(()=>{s!==nt&&(i.current="cache",y.current=s)},[s]),{data:b,isLoading:c.isLoading,error:c.error,mutate:d.current&&d.current.page>0?g:A,pagination:I,revalidate:S}}ra.useCachedPromise=nu});var cn=h((ce,ln)=>{"use strict";Object.defineProperty(ce,"__esModule",{value:!0});function ut(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var le=ut(require("stream")),an=ut(require("http")),oa=ut(require("url")),rn=ut(require("whatwg-url")),ou=ut(require("https")),ze=ut(require("zlib")),iu=le.Readable,Ee=Symbol("buffer"),Ya=Symbol("type"),_t=class e{constructor(){this[Ya]="";let t=arguments[0],a=arguments[1],r=[],n=0;if(t){let u=t,i=Number(u.length);for(let s=0;s<i;s++){let p=u[s],y;p instanceof Buffer?y=p:ArrayBuffer.isView(p)?y=Buffer.from(p.buffer,p.byteOffset,p.byteLength):p instanceof ArrayBuffer?y=Buffer.from(p):p instanceof e?y=p[Ee]:y=Buffer.from(typeof p=="string"?p:String(p)),n+=y.length,r.push(y)}}this[Ee]=Buffer.concat(r);let o=a&&a.type!==void 0&&String(a.type).toLowerCase();o&&!/[^\u0020-\u007E]/.test(o)&&(this[Ya]=o)}get size(){return this[Ee].length}get type(){return this[Ya]}text(){return Promise.resolve(this[Ee].toString())}arrayBuffer(){let t=this[Ee],a=t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength);return Promise.resolve(a)}stream(){let t=new iu;return t._read=function(){},t.push(this[Ee]),t.push(null),t}toString(){return"[object Blob]"}slice(){let t=this.size,a=arguments[0],r=arguments[1],n,o;a===void 0?n=0:a<0?n=Math.max(t+a,0):n=Math.min(a,t),r===void 0?o=t:r<0?o=Math.max(t+r,0):o=Math.min(r,t);let u=Math.max(o-n,0),s=this[Ee].slice(n,n+u),p=new e([],{type:arguments[2]});return p[Ee]=s,p}};Object.defineProperties(_t.prototype,{size:{enumerable:!0},type:{enumerable:!0},slice:{enumerable:!0}});Object.defineProperty(_t.prototype,Symbol.toStringTag,{value:"Blob",writable:!1,enumerable:!1,configurable:!0});function k(e,t,a){Error.call(this,e),this.message=e,this.type=t,a&&(this.code=this.errno=a.code),Error.captureStackTrace(this,this.constructor)}k.prototype=Object.create(Error.prototype);k.prototype.constructor=k;k.prototype.name="FetchError";var er;try{er=require("encoding").convert}catch{}var he=Symbol("Body internals"),Xr=le.PassThrough;function B(e){var t=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.size;let n=r===void 0?0:r;var o=a.timeout;let u=o===void 0?0:o;e==null?e=null:nn(e)?e=Buffer.from(e.toString()):Tt(e)||Buffer.isBuffer(e)||(Object.prototype.toString.call(e)==="[object ArrayBuffer]"?e=Buffer.from(e):ArrayBuffer.isView(e)?e=Buffer.from(e.buffer,e.byteOffset,e.byteLength):e instanceof le||(e=Buffer.from(String(e)))),this[he]={body:e,disturbed:!1,error:null},this.size=n,this.timeout=u,e instanceof le&&e.on("error",function(i){let s=i.name==="AbortError"?i:new k(`Invalid response body while trying to fetch ${t.url}: ${i.message}`,"system",i);t[he].error=s})}B.prototype={get body(){return this[he].body},get bodyUsed(){return this[he].disturbed},arrayBuffer(){return ot.call(this).then(function(e){return e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength)})},blob(){let e=this.headers&&this.headers.get("content-type")||"";return ot.call(this).then(function(t){return Object.assign(new _t([],{type:e.toLowerCase()}),{[Ee]:t})})},json(){var e=this;return ot.call(this).then(function(t){try{return JSON.parse(t.toString())}catch(a){return B.Promise.reject(new k(`invalid json response body at ${e.url} reason: ${a.message}`,"invalid-json"))}})},text(){return ot.call(this).then(function(e){return e.toString()})},buffer(){return ot.call(this)},textConverted(){var e=this;return ot.call(this).then(function(t){return su(t,e.headers)})}};Object.defineProperties(B.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0}});B.mixIn=function(e){for(let t of Object.getOwnPropertyNames(B.prototype))if(!(t in e)){let a=Object.getOwnPropertyDescriptor(B.prototype,t);Object.defineProperty(e,t,a)}};function ot(){var e=this;if(this[he].disturbed)return B.Promise.reject(new TypeError(`body used already for: ${this.url}`));if(this[he].disturbed=!0,this[he].error)return B.Promise.reject(this[he].error);let t=this.body;if(t===null)return B.Promise.resolve(Buffer.alloc(0));if(Tt(t)&&(t=t.stream()),Buffer.isBuffer(t))return B.Promise.resolve(t);if(!(t instanceof le))return B.Promise.resolve(Buffer.alloc(0));let a=[],r=0,n=!1;return new B.Promise(function(o,u){let i;e.timeout&&(i=setTimeout(function(){n=!0,u(new k(`Response timeout while trying to fetch ${e.url} (over ${e.timeout}ms)`,"body-timeout"))},e.timeout)),t.on("error",function(s){s.name==="AbortError"?(n=!0,u(s)):u(new k(`Invalid response body while trying to fetch ${e.url}: ${s.message}`,"system",s))}),t.on("data",function(s){if(!(n||s===null)){if(e.size&&r+s.length>e.size){n=!0,u(new k(`content size at ${e.url} over limit: ${e.size}`,"max-size"));return}r+=s.length,a.push(s)}}),t.on("end",function(){if(!n){clearTimeout(i);try{o(Buffer.concat(a,r))}catch(s){u(new k(`Could not create Buffer from response body for ${e.url}: ${s.message}`,"system",s))}}})})}function su(e,t){if(typeof er!="function")throw new Error("The package `encoding` must be installed to use the textConverted() function");let a=t.get("content-type"),r="utf-8",n,o;return a&&(n=/charset=([^;]*)/i.exec(a)),o=e.slice(0,1024).toString(),!n&&o&&(n=/<meta.+?charset=(['"])(.+?)\1/i.exec(o)),!n&&o&&(n=/<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(o),n||(n=/<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(o),n&&n.pop()),n&&(n=/charset=(.*)/i.exec(n.pop()))),!n&&o&&(n=/<\?xml.+?encoding=(['"])(.+?)\1/i.exec(o)),n&&(r=n.pop(),(r==="gb2312"||r==="gbk")&&(r="gb18030")),er(e,"UTF-8",r).toString()}function nn(e){return typeof e!="object"||typeof e.append!="function"||typeof e.delete!="function"||typeof e.get!="function"||typeof e.getAll!="function"||typeof e.has!="function"||typeof e.set!="function"?!1:e.constructor.name==="URLSearchParams"||Object.prototype.toString.call(e)==="[object URLSearchParams]"||typeof e.sort=="function"}function Tt(e){return typeof e=="object"&&typeof e.arrayBuffer=="function"&&typeof e.type=="string"&&typeof e.stream=="function"&&typeof e.constructor=="function"&&typeof e.constructor.name=="string"&&/^(Blob|File)$/.test(e.constructor.name)&&/^(Blob|File)$/.test(e[Symbol.toStringTag])}function on(e){let t,a,r=e.body;if(e.bodyUsed)throw new Error("cannot clone body after it is used");return r instanceof le&&typeof r.getBoundary!="function"&&(t=new Xr,a=new Xr,r.pipe(t),r.pipe(a),e[he].body=t,r=a),r}function sn(e){return e===null?null:typeof e=="string"?"text/plain;charset=UTF-8":nn(e)?"application/x-www-form-urlencoded;charset=UTF-8":Tt(e)?e.type||null:Buffer.isBuffer(e)||Object.prototype.toString.call(e)==="[object ArrayBuffer]"||ArrayBuffer.isView(e)?null:typeof e.getBoundary=="function"?`multipart/form-data;boundary=${e.getBoundary()}`:e instanceof le?null:"text/plain;charset=UTF-8"}function un(e){let t=e.body;return t===null?0:Tt(t)?t.size:Buffer.isBuffer(t)?t.length:t&&typeof t.getLengthSync=="function"&&(t._lengthRetrievers&&t._lengthRetrievers.length==0||t.hasKnownLength&&t.hasKnownLength())?t.getLengthSync():null}function uu(e,t){let a=t.body;a===null?e.end():Tt(a)?a.stream().pipe(e):Buffer.isBuffer(a)?(e.write(a),e.end()):a.pipe(e)}B.Promise=global.Promise;var pn=/[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/,tr=/[^\t\x20-\x7e\x80-\xff]/;function Ut(e){if(e=`${e}`,pn.test(e)||e==="")throw new TypeError(`${e} is not a legal HTTP header name`)}function en(e){if(e=`${e}`,tr.test(e))throw new TypeError(`${e} is not a legal HTTP header value`)}function it(e,t){t=t.toLowerCase();for(let a in e)if(a.toLowerCase()===t)return a}var T=Symbol("map"),re=class e{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:void 0;if(this[T]=Object.create(null),t instanceof e){let a=t.raw(),r=Object.keys(a);for(let n of r)for(let o of a[n])this.append(n,o);return}if(t!=null)if(typeof t=="object"){let a=t[Symbol.iterator];if(a!=null){if(typeof a!="function")throw new TypeError("Header pairs must be iterable");let r=[];for(let n of t){if(typeof n!="object"||typeof n[Symbol.iterator]!="function")throw new TypeError("Each header pair must be iterable");r.push(Array.from(n))}for(let n of r){if(n.length!==2)throw new TypeError("Each header pair must be a name/value tuple");this.append(n[0],n[1])}}else for(let r of Object.keys(t)){let n=t[r];this.append(r,n)}}else throw new TypeError("Provided initializer must be an object")}get(t){t=`${t}`,Ut(t);let a=it(this[T],t);return a===void 0?null:this[T][a].join(", ")}forEach(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:void 0,r=ar(this),n=0;for(;n<r.length;){var o=r[n];let u=o[0],i=o[1];t.call(a,i,u,this),r=ar(this),n++}}set(t,a){t=`${t}`,a=`${a}`,Ut(t),en(a);let r=it(this[T],t);this[T][r!==void 0?r:t]=[a]}append(t,a){t=`${t}`,a=`${a}`,Ut(t),en(a);let r=it(this[T],t);r!==void 0?this[T][r].push(a):this[T][t]=[a]}has(t){return t=`${t}`,Ut(t),it(this[T],t)!==void 0}delete(t){t=`${t}`,Ut(t);let a=it(this[T],t);a!==void 0&&delete this[T][a]}raw(){return this[T]}keys(){return Ja(this,"key")}values(){return Ja(this,"value")}[Symbol.iterator](){return Ja(this,"key+value")}};re.prototype.entries=re.prototype[Symbol.iterator];Object.defineProperty(re.prototype,Symbol.toStringTag,{value:"Headers",writable:!1,enumerable:!1,configurable:!0});Object.defineProperties(re.prototype,{get:{enumerable:!0},forEach:{enumerable:!0},set:{enumerable:!0},append:{enumerable:!0},has:{enumerable:!0},delete:{enumerable:!0},keys:{enumerable:!0},values:{enumerable:!0},entries:{enumerable:!0}});function ar(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"key+value";return Object.keys(e[T]).sort().map(t==="key"?function(r){return r.toLowerCase()}:t==="value"?function(r){return e[T][r].join(", ")}:function(r){return[r.toLowerCase(),e[T][r].join(", ")]})}var rr=Symbol("internal");function Ja(e,t){let a=Object.create(nr);return a[rr]={target:e,kind:t,index:0},a}var nr=Object.setPrototypeOf({next(){if(!this||Object.getPrototypeOf(this)!==nr)throw new TypeError("Value of `this` is not a HeadersIterator");var e=this[rr];let t=e.target,a=e.kind,r=e.index,n=ar(t,a),o=n.length;return r>=o?{value:void 0,done:!0}:(this[rr].index=r+1,{value:n[r],done:!1})}},Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));Object.defineProperty(nr,Symbol.toStringTag,{value:"HeadersIterator",writable:!1,enumerable:!1,configurable:!0});function pu(e){let t=Object.assign({__proto__:null},e[T]),a=it(e[T],"Host");return a!==void 0&&(t[a]=t[a][0]),t}function lu(e){let t=new re;for(let a of Object.keys(e))if(!pn.test(a))if(Array.isArray(e[a]))for(let r of e[a])tr.test(r)||(t[T][a]===void 0?t[T][a]=[r]:t[T][a].push(r));else tr.test(e[a])||(t[T][a]=[e[a]]);return t}var Oe=Symbol("Response internals"),cu=an.STATUS_CODES,ae=class e{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};B.call(this,t,a);let r=a.status||200,n=new re(a.headers);if(t!=null&&!n.has("Content-Type")){let o=sn(t);o&&n.append("Content-Type",o)}this[Oe]={url:a.url,status:r,statusText:a.statusText||cu[r],headers:n,counter:a.counter}}get url(){return this[Oe].url||""}get status(){return this[Oe].status}get ok(){return this[Oe].status>=200&&this[Oe].status<300}get redirected(){return this[Oe].counter>0}get statusText(){return this[Oe].statusText}get headers(){return this[Oe].headers}clone(){return new e(on(this),{url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected})}};B.mixIn(ae.prototype);Object.defineProperties(ae.prototype,{url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}});Object.defineProperty(ae.prototype,Symbol.toStringTag,{value:"Response",writable:!1,enumerable:!1,configurable:!0});var Ce=Symbol("Request internals"),yu=oa.URL||rn.URL,du=oa.parse,Su=oa.format;function Za(e){return/^[a-zA-Z][a-zA-Z\d+\-.]*:/.exec(e)&&(e=new yu(e).toString()),du(e)}var bu="destroy"in le.Readable.prototype;function na(e){return typeof e=="object"&&typeof e[Ce]=="object"}function Iu(e){let t=e&&typeof e=="object"&&Object.getPrototypeOf(e);return!!(t&&t.constructor.name==="AbortSignal")}var qe=class e{constructor(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r;na(t)?r=Za(t.url):(t&&t.href?r=Za(t.href):r=Za(`${t}`),t={});let n=a.method||t.method||"GET";if(n=n.toUpperCase(),(a.body!=null||na(t)&&t.body!==null)&&(n==="GET"||n==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");let o=a.body!=null?a.body:na(t)&&t.body!==null?on(t):null;B.call(this,o,{timeout:a.timeout||t.timeout||0,size:a.size||t.size||0});let u=new re(a.headers||t.headers||{});if(o!=null&&!u.has("Content-Type")){let s=sn(o);s&&u.append("Content-Type",s)}let i=na(t)?t.signal:null;if("signal"in a&&(i=a.signal),i!=null&&!Iu(i))throw new TypeError("Expected signal to be an instanceof AbortSignal");this[Ce]={method:n,redirect:a.redirect||t.redirect||"follow",headers:u,parsedURL:r,signal:i},this.follow=a.follow!==void 0?a.follow:t.follow!==void 0?t.follow:20,this.compress=a.compress!==void 0?a.compress:t.compress!==void 0?t.compress:!0,this.counter=a.counter||t.counter||0,this.agent=a.agent||t.agent}get method(){return this[Ce].method}get url(){return Su(this[Ce].parsedURL)}get headers(){return this[Ce].headers}get redirect(){return this[Ce].redirect}get signal(){return this[Ce].signal}clone(){return new e(this)}};B.mixIn(qe.prototype);Object.defineProperty(qe.prototype,Symbol.toStringTag,{value:"Request",writable:!1,enumerable:!1,configurable:!0});Object.defineProperties(qe.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0}});function gu(e){let t=e[Ce].parsedURL,a=new re(e[Ce].headers);if(a.has("Accept")||a.set("Accept","*/*"),!t.protocol||!t.hostname)throw new TypeError("Only absolute URLs are supported");if(!/^https?:$/.test(t.protocol))throw new TypeError("Only HTTP(S) protocols are supported");if(e.signal&&e.body instanceof le.Readable&&!bu)throw new Error("Cancellation of streamed requests with AbortSignal is not supported in node < 8");let r=null;if(e.body==null&&/^(POST|PUT)$/i.test(e.method)&&(r="0"),e.body!=null){let o=un(e);typeof o=="number"&&(r=String(o))}r&&a.set("Content-Length",r),a.has("User-Agent")||a.set("User-Agent","node-fetch/1.0 (+https://github.com/bitinn/node-fetch)"),e.compress&&!a.has("Accept-Encoding")&&a.set("Accept-Encoding","gzip,deflate");let n=e.agent;return typeof n=="function"&&(n=n(t)),Object.assign({},t,{method:e.method,headers:pu(a),agent:n})}function st(e){Error.call(this,e),this.type="aborted",this.message=e,Error.captureStackTrace(this,this.constructor)}st.prototype=Object.create(Error.prototype);st.prototype.constructor=st;st.prototype.name="AbortError";var vt=oa.URL||rn.URL,tn=le.PassThrough,Mu=function(t,a){let r=new vt(a).hostname,n=new vt(t).hostname;return r===n||r[r.length-n.length-1]==="."&&r.endsWith(n)},mu=function(t,a){let r=new vt(a).protocol,n=new vt(t).protocol;return r===n};function Be(e,t){if(!Be.Promise)throw new Error("native promise missing, set fetch.Promise to your favorite alternative");return B.Promise=Be.Promise,new Be.Promise(function(a,r){let n=new qe(e,t),o=gu(n),u=(o.protocol==="https:"?ou:an).request,i=n.signal,s=null,p=function(){let b=new st("The user aborted a request.");r(b),n.body&&n.body instanceof le.Readable&&Xa(n.body,b),!(!s||!s.body)&&s.body.emit("error",b)};if(i&&i.aborted){p();return}let y=function(){p(),S()},d=u(o),g;i&&i.addEventListener("abort",y);function S(){d.abort(),i&&i.removeEventListener("abort",y),clearTimeout(g)}n.timeout&&d.once("socket",function(c){g=setTimeout(function(){r(new k(`network timeout at: ${n.url}`,"request-timeout")),S()},n.timeout)}),d.on("error",function(c){r(new k(`request to ${n.url} failed, reason: ${c.message}`,"system",c)),s&&s.body&&Xa(s.body,c),S()}),Ru(d,function(c){i&&i.aborted||s&&s.body&&Xa(s.body,c)}),parseInt(process.version.substring(1))<14&&d.on("socket",function(c){c.addListener("close",function(b){let I=c.listenerCount("data")>0;if(s&&I&&!b&&!(i&&i.aborted)){let l=new Error("Premature close");l.code="ERR_STREAM_PREMATURE_CLOSE",s.body.emit("error",l)}})}),d.on("response",function(c){clearTimeout(g);let b=lu(c.headers);if(Be.isRedirect(c.statusCode)){let m=b.get("Location"),C=null;try{C=m===null?null:new vt(m,n.url).toString()}catch{if(n.redirect!=="manual"){r(new k(`uri requested responds with an invalid redirect URL: ${m}`,"invalid-redirect")),S();return}}switch(n.redirect){case"error":r(new k(`uri requested responds with a redirect, redirect mode is set to error: ${n.url}`,"no-redirect")),S();return;case"manual":if(C!==null)try{b.set("Location",C)}catch(v){r(v)}break;case"follow":if(C===null)break;if(n.counter>=n.follow){r(new k(`maximum redirect reached at: ${n.url}`,"max-redirect")),S();return}let f={headers:new re(n.headers),follow:n.follow,counter:n.counter+1,agent:n.agent,compress:n.compress,method:n.method,body:n.body,signal:n.signal,timeout:n.timeout,size:n.size};if(!Mu(n.url,C)||!mu(n.url,C))for(let v of["authorization","www-authenticate","cookie","cookie2"])f.headers.delete(v);if(c.statusCode!==303&&n.body&&un(n)===null){r(new k("Cannot follow redirect with body being a readable stream","unsupported-redirect")),S();return}(c.statusCode===303||(c.statusCode===301||c.statusCode===302)&&n.method==="POST")&&(f.method="GET",f.body=void 0,f.headers.delete("content-length")),a(Be(new qe(C,f))),S();return}}c.once("end",function(){i&&i.removeEventListener("abort",y)});let I=c.pipe(new tn),l={url:n.url,status:c.statusCode,statusText:c.statusMessage,headers:b,size:n.size,timeout:n.timeout,counter:n.counter},A=b.get("Content-Encoding");if(!n.compress||n.method==="HEAD"||A===null||c.statusCode===204||c.statusCode===304){s=new ae(I,l),a(s);return}let P={flush:ze.Z_SYNC_FLUSH,finishFlush:ze.Z_SYNC_FLUSH};if(A=="gzip"||A=="x-gzip"){I=I.pipe(ze.createGunzip(P)),s=new ae(I,l),a(s);return}if(A=="deflate"||A=="x-deflate"){let m=c.pipe(new tn);m.once("data",function(C){(C[0]&15)===8?I=I.pipe(ze.createInflate()):I=I.pipe(ze.createInflateRaw()),s=new ae(I,l),a(s)}),m.on("end",function(){s||(s=new ae(I,l),a(s))});return}if(A=="br"&&typeof ze.createBrotliDecompress=="function"){I=I.pipe(ze.createBrotliDecompress()),s=new ae(I,l),a(s);return}s=new ae(I,l),a(s)}),uu(d,n)})}function Ru(e,t){let a;e.on("socket",function(r){a=r}),e.on("response",function(r){let n=r.headers;n["transfer-encoding"]==="chunked"&&!n["content-length"]&&r.once("close",function(o){if(a&&a.listenerCount("data")>0&&!o){let i=new Error("Premature close");i.code="ERR_STREAM_PREMATURE_CLOSE",t(i)}})})}function Xa(e,t){e.destroy?e.destroy(t):(e.emit("error",t),e.end())}Be.isRedirect=function(e){return e===301||e===302||e===303||e===307||e===308};Be.Promise=global.Promise;ln.exports=ce=Be;Object.defineProperty(ce,"__esModule",{value:!0});ce.default=ce;ce.Headers=re;ce.Request=qe;ce.Response=ae;ce.FetchError=k;ce.AbortError=st});var Ot=h((He,yn)=>{var wt=cn(),Au=wt.default||wt,ia=function(e,t){return/^\/\//.test(e)&&(e="https:"+e),Au.call(this,e,t)};ia.ponyfill=!0;yn.exports=He=ia;He.fetch=ia;He.Headers=wt.Headers;He.Request=wt.Request;He.Response=wt.Response;He.default=ia});var or=h(sa=>{"use strict";Object.defineProperty(sa,"__esModule",{value:!0});sa.isJSON=void 0;function fu(e){if(e){let t=Eu(e);if(!t)return!1;if(t.subtype==="json"||t.suffix==="json"||t.suffix&&/\bjson\b/i.test(t.suffix)||t.subtype&&/\bjson\b/i.test(t.subtype))return!0}return!1}sa.isJSON=fu;var Pu=/^([A-Za-z0-9][A-Za-z0-9!#$&^_-]{0,126})\/([A-Za-z0-9][A-Za-z0-9!#$&^_.+-]{0,126});?$/;function Eu(e){let t=e.indexOf(";"),a=t!==-1?e.slice(0,t).trim():e.trim(),r=Pu.exec(a.toLowerCase().toLowerCase());if(!r)return;let n=r[1],o=r[2],u,i=o.lastIndexOf("+");return i!==-1&&(u=o.substring(i+1),o=o.substring(0,i)),{type:n,subtype:o,suffix:u}}});var In=h(ua=>{"use strict";Object.defineProperty(ua,"__esModule",{value:!0});ua.useFetch=void 0;var pt=require("react"),Cu=xt(),dn=Pe(),Sn=Ot(),hu=or(),bn=we();async function Du(e){if(!e.ok)throw new Error(e.statusText);let t=e.headers.get("content-type");return t&&(0,hu.isJSON)(t)?await e.json():await e.text()}function xu(e){return{data:e,hasMore:!1}}function Uu(e,t){let{parseResponse:a,mapResult:r,initialData:n,execute:o,keepPreviousData:u,onError:i,onData:s,onWillExecute:p,failureToastOptions:y,...d}=t||{},g={initialData:n,execute:o,keepPreviousData:u,onError:i,onData:s,onWillExecute:p,failureToastOptions:y},S=(0,dn.useLatest)(a||Du),c=(0,dn.useLatest)(r||xu),b=(0,pt.useRef)(),I=(0,pt.useRef)(),l=typeof e=="function"?e({page:0}):void 0;(!b.current||typeof I.current>"u"||I.current!==l)&&(b.current=e),I.current=l;let A=(0,pt.useRef)(),P=(0,pt.useCallback)((f,v)=>async j=>{let ue=await(0,Sn.fetch)(f(j),{signal:A.current?.signal,...v}),z=await S.current(ue);return c.current?.(z)},[S,c]),m=(0,pt.useCallback)(async(f,v)=>{let j=await(0,Sn.fetch)(f,{signal:A.current?.signal,...v}),ue=await S.current(j);return c.current(ue)?.data},[S,c]),C=(0,pt.useMemo)(()=>I.current?P:m,[I,m,P]);return(0,Cu.useCachedPromise)(C,[b.current,d],{...g,internal_cacheKeySuffix:I.current+(0,bn.hash)(c.current)+(0,bn.hash)(S.current),abortable:A})}ua.useFetch=Uu});var pa=h(ne=>{"use strict";var _u=ne&&ne.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ne,"__esModule",{value:!0});ne.defaultParsing=ne.handleOutput=ne.getSpawnedResult=ne.getSpawnedPromise=void 0;var vu=require("node:buffer"),mn=_u(require("node:stream")),Tu=require("node:util"),wu=require("signal-exit");function Ou(e,{timeout:t}={}){let a=new Promise((i,s)=>{e.on("exit",(p,y)=>{i({exitCode:p,signal:y,timedOut:!1})}),e.on("error",p=>{s(p)}),e.stdin&&e.stdin.on("error",p=>{s(p)})});if(t===0||t===void 0)return a;let r,n=new Promise((i,s)=>{r=setTimeout(()=>{e.kill("SIGTERM"),s(Object.assign(new Error("Timed out"),{timedOut:!0,signal:"SIGTERM"}))},t)}),o=a.finally(()=>{clearTimeout(r)}),u=(0,wu.onExit)(()=>{e.kill()});return Promise.race([n,o]).finally(()=>u())}ne.getSpawnedPromise=Ou;var ir=class extends Error{constructor(){super("The output is too big"),this.name="MaxBufferError"}},Bu=(0,Tu.promisify)(mn.default.pipeline);function qu(e){let{encoding:t}=e,a=t==="buffer",r=new mn.default.PassThrough({objectMode:!1});t&&t!=="buffer"&&r.setEncoding(t);let n=0,o=[];return r.on("data",u=>{o.push(u),n+=u.length}),r.getBufferedValue=()=>a?Buffer.concat(o,n):o.join(""),r.getBufferedLength=()=>n,r}async function gn(e,t){let a=qu(t);return await new Promise((r,n)=>{let o=u=>{u&&a.getBufferedLength()<=vu.constants.MAX_LENGTH&&(u.bufferedData=a.getBufferedValue()),n(u)};(async()=>{try{await Bu(e,a),r()}catch(u){o(u)}})(),a.on("data",()=>{a.getBufferedLength()>1e3*1e3*80&&o(new ir)})}),a.getBufferedValue()}async function Mn(e,t){e.destroy();try{return await t}catch(a){return a.bufferedData}}async function Lu({stdout:e,stderr:t},{encoding:a},r){let n=gn(e,{encoding:a}),o=gn(t,{encoding:a});try{return await Promise.all([r,n,o])}catch(u){return Promise.all([{error:u,exitCode:null,signal:u.signal,timedOut:u.timedOut||!1},Mn(e,n),Mn(t,o)])}}ne.getSpawnedResult=Lu;function Nu(e){let t=typeof e=="string"?`
`:10,a=typeof e=="string"?"\r":13;return e[e.length-1]===t&&(e=e.slice(0,-1)),e[e.length-1]===a&&(e=e.slice(0,-1)),e}function Vu(e,t){return e.stripFinalNewline?Nu(t):t}ne.handleOutput=Vu;var ku=({timedOut:e,timeout:t,signal:a,exitCode:r})=>e?`timed out after ${t} milliseconds`:a!=null?`was killed with ${a}`:r!=null?`failed with exit code ${r}`:"failed",ju=({stdout:e,stderr:t,error:a,signal:r,exitCode:n,command:o,timedOut:u,options:i,parentError:s})=>{let y=`Command ${ku({timedOut:u,timeout:i?.timeout,signal:r,exitCode:n})}: ${o}`,d=a?`${y}
${a.message}`:y,g=[d,t,e].filter(Boolean).join(`
`);return a?a.originalMessage=a.message:a=s,a.message=g,a.shortMessage=d,a.command=o,a.exitCode=n,a.signal=r,a.stdout=e,a.stderr=t,"bufferedData"in a&&delete a.bufferedData,a};function Fu({stdout:e,stderr:t,error:a,exitCode:r,signal:n,timedOut:o,command:u,options:i,parentError:s}){if(a||r!==0||n!==null)throw ju({error:a,exitCode:r,signal:n,stdout:e,stderr:t,command:u,timedOut:o,options:i,parentError:s});return e}ne.defaultParsing=Fu});var An=h(lt=>{"use strict";var zu=lt&&lt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(lt,"__esModule",{value:!0});lt.useExec=void 0;var Hu=zu(require("node:child_process")),Rn=require("react"),Gu=xt(),$u=Pe(),Bt=pa(),Qu=/ +/g;function Wu(e,t){if(t)return[e,...t];let a=[];for(let r of e.trim().split(Qu)){let n=a[a.length-1];n&&n.endsWith("\\")?a[a.length-1]=`${n.slice(0,-1)} ${r}`:a.push(r)}return a}function Ku(e,t,a){let{parseOutput:r,input:n,onData:o,onWillExecute:u,initialData:i,execute:s,keepPreviousData:p,onError:y,failureToastOptions:d,...g}=Array.isArray(t)?a||{}:t||{},S={initialData:i,execute:s,keepPreviousData:p,onError:y,onData:o,onWillExecute:u,failureToastOptions:d},c=(0,Rn.useRef)(),b=(0,$u.useLatest)(r||Bt.defaultParsing),I=(0,Rn.useCallback)(async(l,A,P,m)=>{let[C,...f]=Wu(l,A),v=[C,...f].join(" "),j={stripFinalNewline:!0,...P,timeout:P?.timeout||1e4,signal:c.current?.signal,encoding:P?.encoding===null?"buffer":P?.encoding||"utf8",env:{PATH:"/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin",...process.env,...P?.env}},ue=Hu.default.spawn(C,f,j),z=(0,Bt.getSpawnedPromise)(ue,j);m&&ue.stdin.end(m);let[{error:w,exitCode:pe,signal:de,timedOut:D},Y,ft]=await(0,Bt.getSpawnedResult)(ue,j,z),Ha=(0,Bt.handleOutput)(j,Y),bi=(0,Bt.handleOutput)(j,ft);return b.current({stdout:Ha,stderr:bi,error:w,exitCode:pe,signal:de,timedOut:D,command:v,options:j,parentError:new Error})},[b]);return(0,Gu.useCachedPromise)(I,[e,Array.isArray(t)?t:[],g,n],{...S,abortable:c})}lt.useExec=Ku});var Cn=h(ct=>{"use strict";var ca=ct&&ct.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ct,"__esModule",{value:!0});ct.useStreamJSON=void 0;var Yu=require("@raycast/api"),fn=ca(Ot()),Nt=require("node:fs"),sr=require("node:fs/promises"),la=require("node:path"),Pn=require("node:stream/promises"),qt=require("react"),Ju=ca(require("stream-chain")),Zu=require("stream-json"),Xu=ca(require("stream-json/filters/Pick")),ep=ca(require("stream-json/streamers/StreamArray")),En=or(),tp=xt(),ap=we();async function Lt(e,t,a){if(typeof e=="object"||e.startsWith("http://")||e.startsWith("https://"))return await rp(e,t,a);if(e.startsWith("file://"))return await np((0,la.normalize)(decodeURIComponent(new URL(e).pathname)),t,a?.signal?a.signal:void 0);throw new Error("Only HTTP(S) or file URLs are supported")}async function rp(e,t,a){let r=await(0,fn.default)(e,a);if(!r.ok)throw new Error("Failed to fetch URL");if(!(0,En.isJSON)(r.headers.get("content-type")))throw new Error("URL does not return JSON");if(!r.body)throw new Error("Failed to retrieve expected JSON content: Response body is missing or inaccessible.");await(0,Pn.pipeline)(r.body,(0,Nt.createWriteStream)(t),a?.signal?{signal:a.signal}:void 0)}async function np(e,t,a){await(0,Pn.pipeline)((0,Nt.createReadStream)(e),(0,Nt.createWriteStream)(t),a?{signal:a}:void 0)}async function op(e,t,a,r,n){let o=(0,la.join)(t,a);try{await(0,sr.stat)(t)}catch{(0,Nt.mkdirSync)(t,{recursive:!0}),await Lt(e,o,n);return}if(r){await Lt(e,o,n);return}let u;try{u=await(0,sr.stat)(o)}catch{await Lt(e,o,n);return}if(typeof e=="object"||e.startsWith("http://")||e.startsWith("https://")){let i=await(0,fn.default)(e,{...n,method:"HEAD"});if(!i.ok)throw new Error("Could not fetch URL");if(!(0,En.isJSON)(i.headers.get("content-type")))throw new Error("URL does not return JSON");let s=Date.parse(i.headers.get("last-modified")??"");if(u.size===0||Number.isNaN(s)||s>u.mtimeMs){await Lt(e,o,n);return}}else if(e.startsWith("file://"))try{(await(0,sr.stat)((0,la.normalize)(decodeURIComponent(new URL(e).pathname)))).mtimeMs>u.mtimeMs&&await Lt(e,o,n)}catch{throw new Error("Source file could not be read")}else throw new Error("Only HTTP(S) or file URLs are supported")}async function*ip(e,t,a,r,n,o){let u=[],i=new Ju.default([(0,Nt.createReadStream)(e),r?Xu.default.withParser({filter:r}):(0,Zu.parser)(),new ep.default,s=>o?.(s.value)??s.value]);a?.addEventListener("abort",()=>{i.destroy()});try{for await(let s of i){if(a?.aborted)return[];(!n||n(s))&&u.push(s),u.length>=t&&(yield u,u=[])}}catch(s){throw i.destroy(),s}return u.length>0&&(yield u),[]}function sp(e,t){let{initialData:a,execute:r,keepPreviousData:n,onError:o,onData:u,onWillExecute:i,failureToastOptions:s,dataPath:p,filter:y,transform:d,pageSize:g=20,...S}=t??{},c=(0,qt.useRef)(),b=(0,qt.useRef)(),I={initialData:a,execute:r,keepPreviousData:n,onError:o,onData:u,onWillExecute:i,failureToastOptions:s},l=(0,qt.useRef)(null),A=(0,qt.useRef)(null),P=(0,qt.useRef)(!1);return(0,tp.useCachedPromise)((m,C,f,v,j,ue)=>async({page:z})=>{let w=(0,ap.hash)(m)+".json",pe=Yu.environment.supportPath;if(z===0){A.current?.abort(),A.current=new AbortController;let Y=(0,la.join)(pe,w),ft=!!(c.current&&c.current!==m&&b.current&&b.current===Y);c.current=m,b.current=Y,await op(m,pe,w,ft,{...f,signal:A.current?.signal}),l.current=ip(Y,C,A.current?.signal,v,j,ue)}if(!l.current)return{hasMore:P.current,data:[]};let{value:de,done:D}=await l.current.next();return P.current=!D,{hasMore:P.current,data:de??[]}},[e,g,S,p,y,d],I)}ct.useStreamJSON=sp});var pr=h(ge=>{"use strict";var ur=ge&&ge.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ge,"__esModule",{value:!0});ge.baseExecuteSQL=ge.isPermissionError=ge.PermissionError=void 0;var up=require("node:fs"),ya=require("node:fs/promises"),pp=ur(require("node:os")),hn=ur(require("node:child_process")),Dn=ur(require("node:path")),da=pa(),lp=we(),ba=class extends Error{constructor(t){super(t),this.name="PermissionError"}};ge.PermissionError=ba;function cp(e){return e instanceof Error&&e.name==="PermissionError"}ge.isPermissionError=cp;async function yp(e,t,a){if(!(0,up.existsSync)(e))throw new Error("The database does not exist");let r=a?.signal,n,o=hn.default.spawn("sqlite3",["--json","--readonly",e,t],{signal:r}),u=(0,da.getSpawnedPromise)(o),[{error:i,exitCode:s,signal:p},y,d]=await(0,da.getSpawnedResult)(o,{encoding:"utf-8"},u);if(Sa(r),d.match("(5)")||d.match("(14)")){if(!n){let g=Dn.default.join(pp.default.tmpdir(),"useSQL",(0,lp.hash)(e));await(0,ya.mkdir)(g,{recursive:!0}),Sa(r),n=Dn.default.join(g,"db.db"),await(0,ya.copyFile)(e,n),await(0,ya.writeFile)(n+"-shm",""),await(0,ya.writeFile)(n+"-wal",""),Sa(r)}o=hn.default.spawn("sqlite3",["--json","--readonly","--vfs","unix-none",n,t],{signal:r}),u=(0,da.getSpawnedPromise)(o),[{error:i,exitCode:s,signal:p},y,d]=await(0,da.getSpawnedResult)(o,{encoding:"utf-8"},u),Sa(r)}if(i||s!==0||p!==null)throw d.includes("authorization denied")?new ba("You do not have permission to access the database."):new Error(d||"Unknown error");return JSON.parse(y.trim()||"[]")}ge.baseExecuteSQL=yp;function Sa(e){if(e?.aborted){let t=new Error("aborted");throw t.name="AbortError",t}}});var Un=h(yt=>{"use strict";var dp=yt&&yt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(yt,"__esModule",{value:!0});yt.useSQL=void 0;var Me=require("react/jsx-runtime"),H=require("@raycast/api"),Sp=require("node:fs"),bp=dp(require("node:os")),Ia=require("react"),Ip=rt(),gp=Pe(),Mp=Ct(),lr=pr();function mp(e,t,a){let{permissionPriming:r,...n}=a||{},[o,u]=(0,Ia.useState)(),i=(0,gp.useLatest)(a||{}),s=(0,Ia.useRef)(),p=(0,Ia.useCallback)(d=>{console.error(d);let g=d instanceof Error&&d.message.includes("authorization denied")?new lr.PermissionError("You do not have permission to access the database."):d;(0,lr.isPermissionError)(g)?u((0,Me.jsx)(Rp,{priming:i.current.permissionPriming})):i.current.onError?i.current.onError(g):H.environment.launchType!==H.LaunchType.Background&&(0,Mp.showFailureToast)(g,{title:"Cannot query the data"})},[i]),y=(0,Ia.useMemo)(()=>{if(!(0,Sp.existsSync)(e))throw new Error("The database does not exist");return async(d,g)=>{let S=s.current?.signal;return(0,lr.baseExecuteSQL)(d,g,{signal:S})}},[e]);return{...(0,Ip.usePromise)(y,[e,t],{...n,onError:p}),permissionView:o}}yt.useSQL=mp;var xn=parseInt(bp.default.release().split(".")[0])>=22,cr=xn?"Settings":"Preferences";function Rp(e){let t=xn?{title:"Open System Settings -> Privacy",target:"x-apple.systempreferences:com.apple.preference.security?Privacy_AllFiles"}:{title:"Open System Preferences -> Security",target:"x-apple.systempreferences:com.apple.preference.security?Privacy_AllFiles"};return H.environment.commandMode==="menu-bar"?(0,Me.jsxs)(H.MenuBarExtra,{icon:H.Icon.Warning,title:H.environment.commandName,children:[(0,Me.jsx)(H.MenuBarExtra.Item,{title:"Raycast needs full disk access",tooltip:`You can revert this access in ${cr} whenever you want`}),e.priming?(0,Me.jsx)(H.MenuBarExtra.Item,{title:e.priming,tooltip:`You can revert this access in ${cr} whenever you want`}):null,(0,Me.jsx)(H.MenuBarExtra.Separator,{}),(0,Me.jsx)(H.MenuBarExtra.Item,{title:t.title,onAction:()=>(0,H.open)(t.target)})]}):(0,Me.jsx)(H.List,{children:(0,Me.jsx)(H.List.EmptyView,{icon:{source:{light:"https://raycast.com/uploads/extensions-utils-security-permissions-light.png",dark:"https://raycast.com/uploads/extensions-utils-security-permissions-dark.png"}},title:"Raycast needs full disk access.",description:`${e.priming?e.priming+`
`:""}You can revert this access in ${cr} whenever you want.`,actions:(0,Me.jsx)(H.ActionPanel,{children:(0,Me.jsx)(H.Action.Open,{...t})})})})}});var vn=h(dt=>{"use strict";Object.defineProperty(dt,"__esModule",{value:!0});dt.useForm=dt.FormValidation=void 0;var De=require("react"),_n=Pe(),dr;(function(e){e.Required="required"})(dr||(dt.FormValidation=dr={}));function yr(e,t){if(e){if(typeof e=="function")return e(t);if(e===dr.Required){let a=typeof t<"u"&&t!==null;if(a)switch(typeof t){case"string":a=t.length>0;break;case"object":Array.isArray(t)?a=t.length>0:t instanceof Date&&(a=t.getTime()>0);break;default:break}if(!a)return"The item is required"}}}function Ap(e){let{onSubmit:t,validation:a,initialValues:r={}}=e,[n,o]=(0,De.useState)(r),[u,i]=(0,De.useState)({}),s=(0,De.useRef)({}),p=(0,_n.useLatest)(a||{}),y=(0,_n.useLatest)(t),d=(0,De.useCallback)(l=>{s.current[l]?.focus()},[s]),g=(0,De.useCallback)(async l=>{let A=!1;for(let[m,C]of Object.entries(p.current)){let f=yr(C,l[m]);f&&(A||(A={},d(m)),A[m]=f)}if(A)return i(A),!1;let P=await y.current(l);return typeof P=="boolean"?P:!0},[p,y,d]),S=(0,De.useCallback)((l,A)=>{i(P=>({...P,[l]:A}))},[i]),c=(0,De.useCallback)(function(l,A){o(P=>({...P,[l]:typeof A=="function"?A(P[l]):A}))},[o]),b=(0,De.useMemo)(()=>new Proxy({},{get(l,A){let P=p.current[A],m=n[A];return{onChange(C){u[A]&&(yr(P,C)||S(A,void 0)),c(A,C)},onBlur(C){let f=yr(P,C.target.value);f&&S(A,f)},error:u[A],id:A,value:typeof m>"u"?null:m,ref:C=>{s.current[A]=C}}}}),[u,p,S,n,s,c]),I=(0,De.useCallback)(l=>{i({}),Object.entries(s.current).forEach(([A,P])=>{l?.[A]||P?.reset()}),l&&o(l)},[o,i,s]);return{handleSubmit:g,setValidationError:S,setValue:c,values:n,itemProps:b,focus:d,reset:I}}dt.useForm=Ap});var wn=h(ga=>{"use strict";Object.defineProperty(ga,"__esModule",{value:!0});ga.useAI=void 0;var Tn=require("react"),fp=require("@raycast/api"),Pp=rt();function Ep(e,t={}){let{creativity:a,stream:r,model:n,...o}=t,[u,i]=(0,Tn.useState)(""),s=(0,Tn.useRef)(),{isLoading:p,error:y,revalidate:d}=(0,Pp.usePromise)(async(g,S,c)=>{i("");let b=fp.AI.ask(g,{creativity:S,model:n,signal:s.current?.signal});c===!1?i(await b):(b.on("data",I=>{i(l=>l+I)}),await b)},[e,a,r],{...o,abortable:s});return{isLoading:p,data:u,error:y,revalidate:d}}ga.useAI=Ep});var qn=h(Ma=>{"use strict";Object.defineProperty(Ma,"__esModule",{value:!0});Ma.useFrecencySorting=void 0;var Sr=require("react"),On=Pe(),Cp=aa(),hp=10,Bn=1440*60*1e3,Dp=Math.log(2)/(hp*Bn),xp={Default:100,Embed:0,Bookmark:140};function Up(e){let t=Date.now(),a=e?e.lastVisited:0,r=e?e.frecency:0,n=(t-a)/Bn,o=xp.Default*Math.exp(-Dp*n),u=r+o;return{lastVisited:t,frecency:u}}var _p=e=>{if(process.env.NODE_ENV!=="production"&&(typeof e!="object"||!e||!("id"in e)||typeof e.id!="string"))throw new Error("Specify a key function or make sure your items have an 'id' property");return e.id};function vp(e,t){let a=(0,On.useLatest)(t?.key||_p),r=(0,On.useLatest)(t?.sortUnvisited),[n,o]=(0,Cp.useCachedState)(`raycast_frecency_${t?.namespace}`,{}),u=(0,Sr.useCallback)(async function(y){let d=a.current(y);o(g=>{let S=g[d],c=Up(S);return{...g,[d]:c}})},[a,o]),i=(0,Sr.useCallback)(async function(y){let d=a.current(y);o(g=>{let S={...g};return delete S[d],S})},[a,o]);return{data:(0,Sr.useMemo)(()=>e?e.sort((p,y)=>{let d=n[a.current(p)],g=n[a.current(y)];return d&&!g?-1:!d&&g?1:d&&g?g.frecency-d.frecency:r.current?r.current(p,y):0}):[],[n,e,a,r]),visitItem:u,resetRanking:i}}Ma.useFrecencySorting=vp});var Vn=h(ma=>{"use strict";Object.defineProperty(ma,"__esModule",{value:!0});ma.useLocalStorage=void 0;var br=require("@raycast/api"),Ln=Ct(),Nn=we(),Tp=rt();function wp(e,t){let{data:a,isLoading:r,mutate:n}=(0,Tp.usePromise)(async i=>{let s=await br.LocalStorage.getItem(i);return typeof s<"u"?JSON.parse(s,Nn.reviver):t},[e]);async function o(i){try{await n(br.LocalStorage.setItem(e,JSON.stringify(i,Nn.replacer)),{optimisticUpdate(s){return s}})}catch(s){await(0,Ln.showFailureToast)(s,{title:"Failed to set value in local storage"})}}async function u(){try{await n(br.LocalStorage.removeItem(e),{optimisticUpdate(){}})}catch(i){await(0,Ln.showFailureToast)(i,{title:"Failed to remove value from local storage"})}}return{value:a,setValue:o,removeValue:u,isLoading:r}}ma.useLocalStorage=wp});var Hn=h(St=>{"use strict";Object.defineProperty(St,"__esModule",{value:!0});St.slightlyLighterColor=St.slightlyDarkerColor=void 0;function Op(e){let t=0,a=0,r=0;if(e.length===4)t=parseInt(`${e[1]}${e[1]}`,16),a=parseInt(`${e[2]}${e[2]}`,16),r=parseInt(`${e[3]}${e[3]}`,16);else if(e.length===7)t=parseInt(`${e[1]}${e[2]}`,16),a=parseInt(`${e[3]}${e[4]}`,16),r=parseInt(`${e[5]}${e[6]}`,16);else throw new Error(`Malformed hex color: ${e}`);return{r:t,g:a,b:r}}function Bp({r:e,g:t,b:a}){let r=e.toString(16),n=t.toString(16),o=a.toString(16);return r.length===1&&(r=`0${r}`),n.length===1&&(n=`0${n}`),o.length===1&&(o=`0${o}`),`#${r}${n}${o}`}function qp({r:e,g:t,b:a}){e/=255,t/=255,a/=255;let r=Math.min(e,t,a),n=Math.max(e,t,a),o=n-r,u=0,i=0,s=0;return o===0?u=0:n===e?u=(t-a)/o%6:n===t?u=(a-e)/o+2:u=(e-t)/o+4,u=Math.round(u*60),u<0&&(u+=360),s=(n+r)/2,i=o===0?0:o/(1-Math.abs(2*s-1)),i=+(i*100).toFixed(1),s=+(s*100).toFixed(1),{h:u,s:i,l:s}}function Lp({h:e,s:t,l:a}){t/=100,a/=100;let r=(1-Math.abs(2*a-1))*t,n=r*(1-Math.abs(e/60%2-1)),o=a-r/2,u=0,i=0,s=0;return e>=0&&e<60?(u=r,i=n,s=0):e>=60&&e<120?(u=n,i=r,s=0):e>=120&&e<180?(u=0,i=r,s=n):e>=180&&e<240?(u=0,i=n,s=r):e>=240&&e<300?(u=n,i=0,s=r):e>=300&&e<360&&(u=r,i=0,s=n),u=Math.round((u+o)*255),i=Math.round((i+o)*255),s=Math.round((s+o)*255),{r:u,g:i,b:s}}function kn(e){return qp(Op(e))}function jn(e){return Bp(Lp(e))}function Fn(e,t,a){return t<a?e<t?t:e>a?a:e:e<a?a:e>t?t:e}var zn=12;function Np(e){let t=kn(e);return jn({h:t.h,s:t.s,l:Fn(t.l-zn,0,100)})}St.slightlyDarkerColor=Np;function Vp(e){let t=kn(e);return jn({h:t.h,s:t.s,l:Fn(t.l+zn,0,100)})}St.slightlyLighterColor=Vp});var Qn=h(Ra=>{"use strict";Object.defineProperty(Ra,"__esModule",{value:!0});Ra.getAvatarIcon=void 0;var Gn=Hn();function bt(e,t){let a=e.charCodeAt(t);if(Number.isNaN(a))return["",t];if(a<55296||a>57343)return[e.charAt(t),t];if(55296<=a&&a<=56319){if(e.length<=t+1)throw new Error("High surrogate without following low surrogate");let n=e.charCodeAt(t+1);if(56320>n||n>57343)throw new Error("High surrogate without following low surrogate");return[e.charAt(t)+e.charAt(t+1),t+1]}if(t===0)throw new Error("Low surrogate without preceding high surrogate");let r=e.charCodeAt(t-1);if(55296>r||r>56319)throw new Error("Low surrogate without preceding high surrogate");return[e.charAt(t+1),t+1]}var $n=["#DC829A","#D64854","#D47600","#D36CDD","#52A9E4","#7871E8","#70920F","#43B93A","#EB6B3E","#26B795","#D85A9B","#A067DC","#BD9500","#5385D9"];function kp(e,t){let a=e.trim().split(" "),r;if(a.length==1&&bt(a[0],0)[0])r=bt(a[0],0)[0];else if(a.length>1){let s=bt(a[0],0)[0]||"",p=bt(a[a.length-1],0)[0]??"";r=s+p}else r="";let n;if(t?.background)n=t?.background;else{let s=0,[p,y]=bt(r,0);for(;p;)s+=p.charCodeAt(0),[p,y]=bt(r,y+1);let d=s%$n.length;n=$n[d]}let u=50-0;return`data:image/svg+xml,${`<svg width="100px" height="100px">
  ${t?.gradient!==!1?`<defs>
      <linearGradient id="Gradient" x1="0.25" x2="0.75" y1="0" y2="1">
        <stop offset="0%" stop-color="${(0,Gn.slightlyLighterColor)(n)}"/>
        <stop offset="50%" stop-color="${n}"/>
        <stop offset="100%" stop-color="${(0,Gn.slightlyDarkerColor)(n)}"/>
      </linearGradient>
  </defs>`:""}
      <circle cx="50" cy="50" r="${u}" fill="${t?.gradient!==!1?"url(#Gradient)":n}" />
      ${r?`<text x="50" y="80" font-size="${u-1}" font-family="Inter, sans-serif" text-anchor="middle" fill="white">${r.toUpperCase()}</text>`:""}
    </svg>
  `.replaceAll(`
`,"")}`}Ra.getAvatarIcon=kp});var Kn=h(Aa=>{"use strict";Object.defineProperty(Aa,"__esModule",{value:!0});Aa.getFavicon=void 0;var Wn=require("@raycast/api"),jp=require("url");function Fp(e,t){try{let r=(typeof e=="string"?new jp.URL(e):e).hostname;return{source:`https://www.google.com/s2/favicons?sz=${t?.size??64}&domain=${r}`,fallback:t?.fallback??Wn.Icon.Link,mask:t?.mask}}catch(a){return console.error(a),Wn.Icon.Link}}Aa.getFavicon=Fp});var Zn=h(fa=>{"use strict";Object.defineProperty(fa,"__esModule",{value:!0});fa.getProgressIcon=void 0;var Yn=require("@raycast/api");function Jn(e,t,a,r){let n=(r-90)*Math.PI/180;return{x:e+a*Math.cos(n),y:t+a*Math.sin(n)}}function zp(e,t,a,r,n){let o=Jn(e,t,a,n),u=Jn(e,t,a,r),i=n-r<=180?"0":"1";return["M",o.x,o.y,"A",a,a,0,i,0,u.x,u.y].join(" ")}function Hp(e,t=Yn.Color.Red,a){let r=a?.background||(Yn.environment.appearance==="light"?"black":"white"),n=a?.backgroundOpacity||.1,o=10,i=50-5-o/2;return`data:image/svg+xml,${`<svg width="100px" height="100px">
      <circle cx="50" cy="50" r="${i}" stroke-width="${o}" stroke="${e<1?r:t}" opacity="${e<1?n:"1"}" fill="none" />
      ${e>0&&e<1?`<path d="${zp(50,50,i,0,e*360)}" stroke="${t}" stroke-width="${o}" fill="none" />`:""}
    </svg>
  `.replaceAll(`
`,"")}`}fa.getProgressIcon=Hp});var Xn=h(xe=>{"use strict";var Gp=xe&&xe.__createBinding||(Object.create?(function(e,t,a,r){r===void 0&&(r=a);var n=Object.getOwnPropertyDescriptor(t,a);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,n)}):(function(e,t,a,r){r===void 0&&(r=a),e[r]=t[a]})),Ir=xe&&xe.__exportStar||function(e,t){for(var a in e)a!=="default"&&!Object.prototype.hasOwnProperty.call(t,a)&&Gp(t,e,a)};Object.defineProperty(xe,"__esModule",{value:!0});Ir(Qn(),xe);Ir(Kn(),xe);Ir(Zn(),xe)});var eo=h(F=>{"use strict";Object.defineProperty(F,"__esModule",{value:!0});F.zoomService=F.slackService=F.linearService=F.jiraService=F.googleService=F.githubService=F.asanaService=void 0;var G=require("@raycast/api"),Ge=gr(),Pa={asana:"1191201745684312",github:"7235fe8d42157f1f38c0",linear:"c8ff37b9225c3c9aefd7d66ea0e5b6f1",slack:"851756884692.5546927290212"},Le=e=>`data:image/svg+xml,${e}`,$e={asana:Le('<svg xmlns="http://www.w3.org/2000/svg" width="251" height="232" fill="none"><path fill="#F06A6A" d="M179.383 54.373c0 30.017-24.337 54.374-54.354 54.374-30.035 0-54.373-24.338-54.373-54.374C70.656 24.338 94.993 0 125.029 0c30.017 0 54.354 24.338 54.354 54.373ZM54.393 122.33C24.376 122.33.02 146.668.02 176.685c0 30.017 24.337 54.373 54.373 54.373 30.035 0 54.373-24.338 54.373-54.373 0-30.017-24.338-54.355-54.373-54.355Zm141.253 0c-30.035 0-54.373 24.338-54.373 54.374 0 30.035 24.338 54.373 54.373 54.373 30.017 0 54.374-24.338 54.374-54.373 0-30.036-24.338-54.374-54.374-54.374Z"/></svg>'),github:{source:Le('<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>'),tintColor:G.Color.PrimaryText},google:Le('<svg xmlns="http://www.w3.org/2000/svg" style="display:block" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/><path fill="none" d="M0 0h48v48H0z"/></svg>'),jira:Le('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="2361" height="2500" viewBox="2.59 0 214.091 224"><linearGradient id="a" x1="102.4" x2="56.15" y1="218.63" y2="172.39" gradientTransform="matrix(1 0 0 -1 0 264)" gradientUnits="userSpaceOnUse"><stop offset=".18" stop-color="#0052cc"/><stop offset="1" stop-color="#2684ff"/></linearGradient><linearGradient xlink:href="#a" id="b" x1="114.65" x2="160.81" y1="85.77" y2="131.92"/><path fill="#2684ff" d="M214.06 105.73 117.67 9.34 108.33 0 35.77 72.56 2.59 105.73a8.89 8.89 0 0 0 0 12.54l66.29 66.29L108.33 224l72.55-72.56 1.13-1.12 32.05-32a8.87 8.87 0 0 0 0-12.59zm-105.73 39.39L75.21 112l33.12-33.12L141.44 112z"/><path fill="url(#a)" d="M108.33 78.88a55.75 55.75 0 0 1-.24-78.61L35.62 72.71l39.44 39.44z"/><path fill="url(#b)" d="m141.53 111.91-33.2 33.21a55.77 55.77 0 0 1 0 78.86L181 151.35z"/></svg>'),linear:{source:{light:Le('<svg xmlns="http://www.w3.org/2000/svg" fill="#222326" width="200" height="200" viewBox="0 0 100 100"><path d="M1.22541 61.5228c-.2225-.9485.90748-1.5459 1.59638-.857L39.3342 97.1782c.6889.6889.0915 1.8189-.857 1.5964C20.0515 94.4522 5.54779 79.9485 1.22541 61.5228ZM.00189135 46.8891c-.01764375.2833.08887215.5599.28957165.7606L52.3503 99.7085c.2007.2007.4773.3075.7606.2896 2.3692-.1476 4.6938-.46 6.9624-.9259.7645-.157 1.0301-1.0963.4782-1.6481L2.57595 39.4485c-.55186-.5519-1.49117-.2863-1.648174.4782-.465915 2.2686-.77832 4.5932-.92588465 6.9624ZM4.21093 29.7054c-.16649.3738-.08169.8106.20765 1.1l64.77602 64.776c.2894.2894.7262.3742 1.1.2077 1.7861-.7956 3.5171-1.6927 5.1855-2.684.5521-.328.6373-1.0867.1832-1.5407L8.43566 24.3367c-.45409-.4541-1.21271-.3689-1.54074.1832-.99132 1.6684-1.88843 3.3994-2.68399 5.1855ZM12.6587 18.074c-.3701-.3701-.393-.9637-.0443-1.3541C21.7795 6.45931 35.1114 0 49.9519 0 77.5927 0 100 22.4073 100 50.0481c0 14.8405-6.4593 28.1724-16.7199 37.3375-.3903.3487-.984.3258-1.3542-.0443L12.6587 18.074Z"/></svg>'),dark:Le('<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="200" height="200" viewBox="0 0 100 100"><path d="M1.22541 61.5228c-.2225-.9485.90748-1.5459 1.59638-.857L39.3342 97.1782c.6889.6889.0915 1.8189-.857 1.5964C20.0515 94.4522 5.54779 79.9485 1.22541 61.5228ZM.00189135 46.8891c-.01764375.2833.08887215.5599.28957165.7606L52.3503 99.7085c.2007.2007.4773.3075.7606.2896 2.3692-.1476 4.6938-.46 6.9624-.9259.7645-.157 1.0301-1.0963.4782-1.6481L2.57595 39.4485c-.55186-.5519-1.49117-.2863-1.648174.4782-.465915 2.2686-.77832 4.5932-.92588465 6.9624ZM4.21093 29.7054c-.16649.3738-.08169.8106.20765 1.1l64.77602 64.776c.2894.2894.7262.3742 1.1.2077 1.7861-.7956 3.5171-1.6927 5.1855-2.684.5521-.328.6373-1.0867.1832-1.5407L8.43566 24.3367c-.45409-.4541-1.21271-.3689-1.54074.1832-.99132 1.6684-1.88843 3.3994-2.68399 5.1855ZM12.6587 18.074c-.3701-.3701-.393-.9637-.0443-1.3541C21.7795 6.45931 35.1114 0 49.9519 0 77.5927 0 100 22.4073 100 50.0481c0 14.8405-6.4593 28.1724-16.7199 37.3375-.3903.3487-.984.3258-1.3542-.0443L12.6587 18.074Z" /></svg>')}},slack:Le('<svg xmlns="http://www.w3.org/2000/svg" viewBox="73 73 124 124"><style>.st0{fill:#e01e5a}.st1{fill:#36c5f0}.st2{fill:#2eb67d}.st3{fill:#ecb22e}</style><path d="M99.4 151.2c0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9h12.9v12.9zM105.9 151.2c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v32.3c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9v-32.3z" class="st0"/><path d="M118.8 99.4c-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v12.9h-12.9zM118.8 105.9c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H86.5c-7.1 0-12.9-5.8-12.9-12.9s5.8-12.9 12.9-12.9h32.3z" class="st1"/><path d="M170.6 118.8c0-7.1 5.8-12.9 12.9-12.9 7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9h-12.9v-12.9zM164.1 118.8c0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9V86.5c0-7.1 5.8-12.9 12.9-12.9 7.1 0 12.9 5.8 12.9 12.9v32.3z" class="st2"/><path d="M151.2 170.6c7.1 0 12.9 5.8 12.9 12.9 0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9v-12.9h12.9zM151.2 164.1c-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9h32.3c7.1 0 12.9 5.8 12.9 12.9 0 7.1-5.8 12.9-12.9 12.9h-32.3z" class="st3"/></svg>'),zoom:Le('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 351.845 80"><path d="M73.786 78.835H10.88A10.842 10.842 0 0 1 .833 72.122a10.841 10.841 0 0 1 2.357-11.85L46.764 16.7h-31.23C6.954 16.699 0 9.744 0 1.165h58.014c4.414 0 8.357 2.634 10.046 6.712a10.843 10.843 0 0 1-2.356 11.85L22.13 63.302h36.122c8.58 0 15.534 6.955 15.534 15.534Zm278.059-48.544C351.845 13.588 338.256 0 321.553 0c-8.934 0-16.975 3.89-22.524 10.063C293.48 3.89 285.44 0 276.505 0c-16.703 0-30.291 13.588-30.291 30.291v48.544c8.579 0 15.534-6.955 15.534-15.534v-33.01c0-8.137 6.62-14.757 14.757-14.757s14.757 6.62 14.757 14.757v33.01c0 8.58 6.955 15.534 15.534 15.534V30.291c0-8.137 6.62-14.757 14.757-14.757s14.758 6.62 14.758 14.757v33.01c0 8.58 6.954 15.534 15.534 15.534V30.291ZM238.447 40c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.908-40 40-40 40 17.909 40 40Zm-15.534 0c0-13.512-10.954-24.466-24.466-24.466S173.98 26.488 173.98 40s10.953 24.466 24.466 24.466S222.913 53.512 222.913 40Zm-70.68 0c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.909-40 40-40 40 17.909 40 40Zm-15.534 0c0-13.512-10.954-24.466-24.466-24.466S87.767 26.488 87.767 40s10.954 24.466 24.466 24.466S136.699 53.512 136.699 40Z" style="fill:#0b5cff"/></svg>')},$p=e=>new Ge.OAuthService({client:new G.OAuth.PKCEClient({redirectMethod:G.OAuth.RedirectMethod.Web,providerName:"Asana",providerIcon:$e.asana,providerId:"asana",description:"Connect your Asana account"}),clientId:e.clientId??Pa.asana,authorizeUrl:e.authorizeUrl??"https://asana.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://asana.oauth.raycast.com/token",refreshTokenUrl:e.refreshTokenUrl??"https://asana.oauth.raycast.com/refresh-token",scope:e.scope,personalAccessToken:e.personalAccessToken,onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});F.asanaService=$p;var Qp=e=>new Ge.OAuthService({client:new G.OAuth.PKCEClient({redirectMethod:G.OAuth.RedirectMethod.Web,providerName:"GitHub",providerIcon:$e.github,providerId:"github",description:"Connect your GitHub account"}),clientId:e.clientId??Pa.github,authorizeUrl:e.authorizeUrl??"https://github.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://github.oauth.raycast.com/token",refreshTokenUrl:e.refreshTokenUrl??"https://github.oauth.raycast.com/refresh-token",scope:e.scope,personalAccessToken:e.personalAccessToken,onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});F.githubService=Qp;var Wp=e=>new Ge.OAuthService({client:new G.OAuth.PKCEClient({redirectMethod:G.OAuth.RedirectMethod.AppURI,providerName:"Google",providerIcon:$e.google,providerId:"google",description:"Connect your Google account"}),clientId:e.clientId,authorizeUrl:e.authorizeUrl??"https://accounts.google.com/o/oauth2/v2/auth",tokenUrl:e.tokenUrl??"https://oauth2.googleapis.com/token",refreshTokenUrl:e.tokenUrl,scope:e.scope,personalAccessToken:e.personalAccessToken,bodyEncoding:e.bodyEncoding??"url-encoded",onAuthorize:e.onAuthorize,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});F.googleService=Wp;var Kp=e=>new Ge.OAuthService({client:new G.OAuth.PKCEClient({redirectMethod:G.OAuth.RedirectMethod.Web,providerName:"Jira",providerIcon:$e.jira,providerId:"jira",description:"Connect your Jira account"}),clientId:e.clientId,authorizeUrl:e.authorizeUrl??"https://auth.atlassian.com/authorize",tokenUrl:e.tokenUrl??"https://auth.atlassian.com/oauth/token",refreshTokenUrl:e.refreshTokenUrl,scope:e.scope,personalAccessToken:e.personalAccessToken,onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});F.jiraService=Kp;var Yp=e=>new Ge.OAuthService({client:new G.OAuth.PKCEClient({redirectMethod:G.OAuth.RedirectMethod.Web,providerName:"Linear",providerIcon:$e.linear,providerId:"linear",description:"Connect your Linear account"}),clientId:e.clientId??Pa.linear,authorizeUrl:e.authorizeUrl??"https://linear.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://linear.oauth.raycast.com/token",refreshTokenUrl:e.refreshTokenUrl??"https://linear.oauth.raycast.com/refresh-token",scope:e.scope,extraParameters:{actor:"user"},onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});F.linearService=Yp;var Jp=e=>new Ge.OAuthService({client:new G.OAuth.PKCEClient({redirectMethod:G.OAuth.RedirectMethod.Web,providerName:"Slack",providerIcon:$e.slack,providerId:"slack",description:"Connect your Slack account"}),clientId:e.clientId??Pa.slack,authorizeUrl:e.authorizeUrl??"https://slack.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://slack.oauth.raycast.com/token",refreshTokenUrl:e.tokenUrl??"https://slack.oauth.raycast.com/refresh-token",scope:"",extraParameters:{user_scope:e.scope},personalAccessToken:e.personalAccessToken,bodyEncoding:e.tokenUrl?e.bodyEncoding??"url-encoded":"json",onAuthorize:e.onAuthorize,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser??(t=>({access_token:t.authed_user.access_token,scope:t.authed_user.scope}))});F.slackService=Jp;var Zp=e=>new Ge.OAuthService({client:new G.OAuth.PKCEClient({redirectMethod:G.OAuth.RedirectMethod.Web,providerName:"Zoom",providerIcon:$e.zoom,providerId:"zoom",description:"Connect your Zoom account"}),clientId:e.clientId,authorizeUrl:e.authorizeUrl??"https://zoom.us/oauth/authorize",tokenUrl:e.tokenUrl??"https://zoom.us/oauth/token",refreshTokenUrl:e.refreshTokenUrl,scope:e.scope,personalAccessToken:e.personalAccessToken,bodyEncoding:e.bodyEncoding??"url-encoded",onAuthorize:e.onAuthorize,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});F.zoomService=Zp});var gr=h(It=>{"use strict";var Xp=It&&It.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(It,"__esModule",{value:!0});It.OAuthService=void 0;var to=Xp(Ot()),Qe=eo(),me=class{constructor(t){this.clientId=t.clientId,this.scope=Array.isArray(t.scope)?t.scope.join(" "):t.scope,this.personalAccessToken=t.personalAccessToken,this.bodyEncoding=t.bodyEncoding,this.client=t.client,this.extraParameters=t.extraParameters,this.authorizeUrl=t.authorizeUrl,this.tokenUrl=t.tokenUrl,this.refreshTokenUrl=t.refreshTokenUrl,this.onAuthorize=t.onAuthorize,this.tokenResponseParser=t.tokenResponseParser??(a=>a),this.tokenRefreshResponseParser=t.tokenRefreshResponseParser??(a=>a),this.authorize=this.authorize.bind(this)}async authorize(){let t=await this.client.getTokens();if(t?.accessToken){if(t.refreshToken&&t.isExpired()){let o=await this.refreshTokens({token:t.refreshToken});if(o)return await this.client.setTokens(o),o.access_token}return t.accessToken}let a=await this.client.authorizationRequest({endpoint:this.authorizeUrl,clientId:this.clientId,scope:this.scope,extraParameters:this.extraParameters}),{authorizationCode:r}=await this.client.authorize(a),n=await this.fetchTokens({authRequest:a,authorizationCode:r});return await this.client.setTokens(n),n.access_token}async fetchTokens({authRequest:t,authorizationCode:a}){let r;if(this.bodyEncoding==="url-encoded"){let u=new URLSearchParams;u.append("client_id",this.clientId),u.append("code",a),u.append("code_verifier",t.codeVerifier),u.append("grant_type","authorization_code"),u.append("redirect_uri",t.redirectURI),r={body:u}}else r={body:JSON.stringify({client_id:this.clientId,code:a,code_verifier:t.codeVerifier,grant_type:"authorization_code",redirect_uri:t.redirectURI}),headers:{"Content-Type":"application/json"}};let n=await(0,to.default)(this.tokenUrl,{method:"POST",...r});if(!n.ok){let u=await n.text();throw console.error("fetch tokens error:",u),new Error(`Error while fetching tokens: ${n.status} (${n.statusText})
${u}`)}let o=this.tokenResponseParser(await n.json());return Array.isArray(o.scope)?{...o,scope:o.scope.join(" ")}:o}async refreshTokens({token:t}){let a;if(this.bodyEncoding==="url-encoded"){let n=new URLSearchParams;n.append("client_id",this.clientId),n.append("refresh_token",t),n.append("grant_type","refresh_token"),a={body:n}}else a={body:JSON.stringify({client_id:this.clientId,refresh_token:t,grant_type:"refresh_token"}),headers:{"Content-Type":"application/json"}};let r=await(0,to.default)(this.refreshTokenUrl??this.tokenUrl,{method:"POST",...a});if(r.ok){let n=this.tokenRefreshResponseParser(await r.json());return n.refresh_token=n.refresh_token??t,n}else{let n=await r.text();console.error("refresh tokens error:",n),this.client.description=`${this.client.providerName} needs you to sign-in again. Press \u23CE or click the button below to continue.`,await this.client.removeTokens(),await this.authorize()}}};It.OAuthService=me;me.asana=Qe.asanaService;me.github=Qe.githubService;me.google=Qe.googleService;me.jira=Qe.jiraService;me.linear=Qe.linearService;me.slack=Qe.slackService;me.zoom=Qe.zoomService});var ao=h(gt=>{"use strict";Object.defineProperty(gt,"__esModule",{value:!0});gt.getAccessToken=gt.withAccessToken=void 0;var el=require("react/jsx-runtime"),tl=require("@raycast/api"),Ne=null,We=null,Mr=null,mr=null,Rr=null;function al(e){return tl.environment.commandMode==="no-view"?t=>async r=>{if(!Ne){Ne=e.personalAccessToken??await e.authorize(),We=e.personalAccessToken?"personal":"oauth";let n=(await e.client?.getTokens())?.idToken;e.onAuthorize&&await Promise.resolve(e.onAuthorize({token:Ne,type:We,idToken:n}))}return t(r)}:t=>{let a=r=>{e.personalAccessToken?(Ne=e.personalAccessToken,We="personal"):(Mr||(Mr=Ar(e.authorize())),Ne=Mr.read(),We="oauth");let n;return e.client&&(mr||(mr=Ar(e.client.getTokens())),n=mr.read()?.idToken),!Rr&&e.onAuthorize&&(Rr=Ar(Promise.resolve(e.onAuthorize({token:Ne,type:We,idToken:n})))),Rr?.read(),(0,el.jsx)(t,{...r})};return a.displayName=`withAccessToken(${t.displayName||t.name})`,a}}gt.withAccessToken=al;function rl(){if(!Ne||!We)throw new Error("getAccessToken must be used when authenticated (eg. used inside `withAccessToken`)");return{token:Ne,type:We}}gt.getAccessToken=rl;function Ar(e){let t="pending",a,r=e.then(o=>{t="success",a=o},o=>{t="error",a=o});return{read:()=>{switch(t){case"pending":throw r;case"error":throw a;default:return a}}}}});var no=h(Ve=>{"use strict";var nl=Ve&&Ve.__createBinding||(Object.create?(function(e,t,a,r){r===void 0&&(r=a);var n=Object.getOwnPropertyDescriptor(t,a);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,n)}):(function(e,t,a,r){r===void 0&&(r=a),e[r]=t[a]})),ro=Ve&&Ve.__exportStar||function(e,t){for(var a in e)a!=="default"&&!Object.prototype.hasOwnProperty.call(t,a)&&nl(t,e,a)};Object.defineProperty(Ve,"__esModule",{value:!0});ro(gr(),Ve);ro(ao(),Ve)});var po=h(oe=>{"use strict";var oo=oe&&oe.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(oe,"__esModule",{value:!0});oe.createDeeplink=oe.createExtensionDeeplink=oe.createScriptCommandDeeplink=oe.DeeplinkType=void 0;var Pr=require("@raycast/api"),ol=oo(require("node:fs")),il=oo(require("node:path")),fr;(function(e){e.ScriptCommand="script-command",e.Extension="extension"})(fr||(oe.DeeplinkType=fr={}));function io(){return Pr.environment.raycastVersion.includes("alpha")?"raycastinternal://":"raycast://"}function sl(){let e=JSON.parse(ol.default.readFileSync(il.default.join(Pr.environment.assetsPath,"..","package.json"),"utf8"));return e.owner||e.author}function so(e){let t=`${io()}script-commands/${e.command}`;if(e.arguments){let a="";for(let r of e.arguments)a+="&arguments="+encodeURIComponent(r);t+="?"+a.substring(1)}return t}oe.createScriptCommandDeeplink=so;function uo(e){let t=sl(),a=Pr.environment.extensionName;"ownerOrAuthorName"in e&&"extensionName"in e&&(t=e.ownerOrAuthorName,a=e.extensionName);let r=`${io()}extensions/${t}/${a}/${e.command}`,n="";return e.launchType&&(n+="&launchType="+encodeURIComponent(e.launchType)),e.arguments&&(n+="&arguments="+encodeURIComponent(JSON.stringify(e.arguments))),e.context&&(n+="&context="+encodeURIComponent(JSON.stringify(e.context))),e.fallbackText&&(n+="&fallbackText="+encodeURIComponent(e.fallbackText)),n&&(r+="?"+n.substring(1)),r}oe.createExtensionDeeplink=uo;function ul(e){return e.type===fr.ScriptCommand?so(e):uo(e)}oe.createDeeplink=ul});var lo=h(Ea=>{"use strict";Object.defineProperty(Ea,"__esModule",{value:!0});Ea.executeSQL=void 0;var pl=pr();function ll(e,t){return(0,pl.baseExecuteSQL)(e,t)}Ea.executeSQL=ll});var co=h(Mt=>{"use strict";var cl=Mt&&Mt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Mt,"__esModule",{value:!0});Mt.runAppleScript=void 0;var yl=cl(require("node:child_process")),Vt=pa();async function dl(e,t,a){let{humanReadableOutput:r,language:n,timeout:o,...u}=Array.isArray(t)?a||{}:t||{},i=r!==!1?[]:["-ss"];n==="JavaScript"&&i.push("-l","JavaScript"),Array.isArray(t)&&i.push("-",...t);let s=yl.default.spawn("osascript",i,{...u,env:{PATH:"/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"}}),p=(0,Vt.getSpawnedPromise)(s,{timeout:o??1e4});s.stdin.end(e);let[{error:y,exitCode:d,signal:g,timedOut:S},c,b]=await(0,Vt.getSpawnedResult)(s,{encoding:"utf8"},p),I=(0,Vt.handleOutput)({stripFinalNewline:!0},c),l=(0,Vt.handleOutput)({stripFinalNewline:!0},b);return(0,Vt.defaultParsing)({stdout:I,stderr:l,error:y,exitCode:d,signal:g,timedOut:S,command:"osascript",options:a,parentError:new Error})}Mt.runAppleScript=dl});var yo=h(ha=>{"use strict";Object.defineProperty(ha,"__esModule",{value:!0});ha.withCache=void 0;var Sl=require("@raycast/api"),Ca=we();function bl(e,t){let a=new Sl.Cache({namespace:(0,Ca.hash)(e)}),r=async(...n)=>{let o=(0,Ca.hash)(n||[])+t?.internal_cacheKeySuffix,u=a.get(o);if(u){let{data:s,timestamp:p}=JSON.parse(u,Ca.reviver);if(!(t?.maxAge&&Date.now()-p>t.maxAge)&&(!t?.validate||t.validate(s)))return s}let i=await e(...n);return a.set(o,JSON.stringify({data:i,timestamp:Date.now()},Ca.replacer)),i};return r.clearCache=()=>{a.clear()},r}ha.withCache=bl});var kt=h(_=>{"use strict";var Il=_&&_.__createBinding||(Object.create?(function(e,t,a,r){r===void 0&&(r=a);var n=Object.getOwnPropertyDescriptor(t,a);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,n)}):(function(e,t,a,r){r===void 0&&(r=a),e[r]=t[a]})),q=_&&_.__exportStar||function(e,t){for(var a in e)a!=="default"&&!Object.prototype.hasOwnProperty.call(t,a)&&Il(t,e,a)};Object.defineProperty(_,"__esModule",{value:!0});q(rt(),_);q(aa(),_);q(xt(),_);q(In(),_);q(An(),_);q(Cn(),_);q(Un(),_);q(vn(),_);q(wn(),_);q(qn(),_);q(Vn(),_);q(Xn(),_);q(no(),_);q(po(),_);q(lo(),_);q(co(),_);q(Ct(),_);q(yo(),_)});var Q={};et(Q,{default:()=>Co.default});var Co,wa=Ga(()=>{$(Q,require("formdata-polyfill/esm.min.js"));Co=V(require("formdata-polyfill/esm.min.js"))});var Z={};et(Z,{default:()=>Uo.default});var Uo,Dr=Ga(()=>{$(Z,require("fetch-blob/from.js"));Uo=V(require("fetch-blob/from.js"))});var vo={};et(vo,{toFormData:()=>Ll});function ql(e){let t=e.match(/\bfilename=("(.*?)"|([^()<>@,;:\\"/[\]?={}\s\t]+))($|;\s)/i);if(!t)return;let a=t[2]||t[3]||"",r=a.slice(a.lastIndexOf("\\")+1);return r=r.replace(/%22/g,'"'),r=r.replace(/&#(\d{4});/g,(n,o)=>String.fromCharCode(o)),r}async function Ll(e,t){if(!/multipart/i.test(t))throw new TypeError("Failed to fetch");let a=t.match(/boundary=(?:"([^"]+)"|([^;]+))/i);if(!a)throw new TypeError("no or bad content-type header, no multipart boundary");let r=new xr(a[1]||a[2]),n,o,u,i,s,p,y=[],d=new Q.FormData,g=l=>{u+=I.decode(l,{stream:!0})},S=l=>{y.push(l)},c=()=>{let l=new Z.File(y,p,{type:s});d.append(i,l)},b=()=>{d.append(i,u)},I=new TextDecoder("utf-8");I.decode(),r.onPartBegin=function(){r.onPartData=g,r.onPartEnd=b,n="",o="",u="",i="",s="",p=null,y.length=0},r.onHeaderField=function(l){n+=I.decode(l,{stream:!0})},r.onHeaderValue=function(l){o+=I.decode(l,{stream:!0})},r.onHeaderEnd=function(){if(o+=I.decode(),n=n.toLowerCase(),n==="content-disposition"){let l=o.match(/\bname=("([^"]*)"|([^()<>@,;:\\"/[\]?={}\s\t]+))/i);l&&(i=l[2]||l[3]||""),p=ql(o),p&&(r.onPartData=S,r.onPartEnd=c)}else n==="content-type"&&(s=o);o="",n=""};for await(let l of e)r.write(l);return r.end(),d}var Re,U,_o,Fe,Ba,qa,vl,Ht,Tl,wl,Ol,Bl,Je,xr,To=Ga(()=>{Dr();wa();Re=0,U={START_BOUNDARY:Re++,HEADER_FIELD_START:Re++,HEADER_FIELD:Re++,HEADER_VALUE_START:Re++,HEADER_VALUE:Re++,HEADER_VALUE_ALMOST_DONE:Re++,HEADERS_ALMOST_DONE:Re++,PART_DATA_START:Re++,PART_DATA:Re++,END:Re++},_o=1,Fe={PART_BOUNDARY:_o,LAST_BOUNDARY:_o*=2},Ba=10,qa=13,vl=32,Ht=45,Tl=58,wl=97,Ol=122,Bl=e=>e|32,Je=()=>{},xr=class{constructor(t){this.index=0,this.flags=0,this.onHeaderEnd=Je,this.onHeaderField=Je,this.onHeadersEnd=Je,this.onHeaderValue=Je,this.onPartBegin=Je,this.onPartData=Je,this.onPartEnd=Je,this.boundaryChars={},t=`\r
--`+t;let a=new Uint8Array(t.length);for(let r=0;r<t.length;r++)a[r]=t.charCodeAt(r),this.boundaryChars[a[r]]=!0;this.boundary=a,this.lookbehind=new Uint8Array(this.boundary.length+8),this.state=U.START_BOUNDARY}write(t){let a=0,r=t.length,n=this.index,{lookbehind:o,boundary:u,boundaryChars:i,index:s,state:p,flags:y}=this,d=this.boundary.length,g=d-1,S=t.length,c,b,I=m=>{this[m+"Mark"]=a},l=m=>{delete this[m+"Mark"]},A=(m,C,f,v)=>{(C===void 0||C!==f)&&this[m](v&&v.subarray(C,f))},P=(m,C)=>{let f=m+"Mark";f in this&&(C?(A(m,this[f],a,t),delete this[f]):(A(m,this[f],t.length,t),this[f]=0))};for(a=0;a<r;a++)switch(c=t[a],p){case U.START_BOUNDARY:if(s===u.length-2){if(c===Ht)y|=Fe.LAST_BOUNDARY;else if(c!==qa)return;s++;break}else if(s-1===u.length-2){if(y&Fe.LAST_BOUNDARY&&c===Ht)p=U.END,y=0;else if(!(y&Fe.LAST_BOUNDARY)&&c===Ba)s=0,A("onPartBegin"),p=U.HEADER_FIELD_START;else return;break}c!==u[s+2]&&(s=-2),c===u[s+2]&&s++;break;case U.HEADER_FIELD_START:p=U.HEADER_FIELD,I("onHeaderField"),s=0;case U.HEADER_FIELD:if(c===qa){l("onHeaderField"),p=U.HEADERS_ALMOST_DONE;break}if(s++,c===Ht)break;if(c===Tl){if(s===1)return;P("onHeaderField",!0),p=U.HEADER_VALUE_START;break}if(b=Bl(c),b<wl||b>Ol)return;break;case U.HEADER_VALUE_START:if(c===vl)break;I("onHeaderValue"),p=U.HEADER_VALUE;case U.HEADER_VALUE:c===qa&&(P("onHeaderValue",!0),A("onHeaderEnd"),p=U.HEADER_VALUE_ALMOST_DONE);break;case U.HEADER_VALUE_ALMOST_DONE:if(c!==Ba)return;p=U.HEADER_FIELD_START;break;case U.HEADERS_ALMOST_DONE:if(c!==Ba)return;A("onHeadersEnd"),p=U.PART_DATA_START;break;case U.PART_DATA_START:p=U.PART_DATA,I("onPartData");case U.PART_DATA:if(n=s,s===0){for(a+=g;a<S&&!(t[a]in i);)a+=d;a-=g,c=t[a]}if(s<u.length)u[s]===c?(s===0&&P("onPartData",!0),s++):s=0;else if(s===u.length)s++,c===qa?y|=Fe.PART_BOUNDARY:c===Ht?y|=Fe.LAST_BOUNDARY:s=0;else if(s-1===u.length)if(y&Fe.PART_BOUNDARY){if(s=0,c===Ba){y&=~Fe.PART_BOUNDARY,A("onPartEnd"),A("onPartBegin"),p=U.HEADER_FIELD_START;break}}else y&Fe.LAST_BOUNDARY&&c===Ht?(A("onPartEnd"),p=U.END,y=0):s=0;if(s>0)o[s-1]=c;else if(n>0){let m=new Uint8Array(o.buffer,o.byteOffset,o.byteLength);A("onPartData",0,n,m),n=0,I("onPartData"),a--}break;case U.END:break;default:throw new Error(`Unexpected state entered: ${p}`)}P("onHeaderField"),P("onHeaderValue"),P("onPartData"),this.index=s,this.state=p,this.flags=y}end(){if(this.state===U.HEADER_FIELD_START&&this.index===0||this.state===U.PART_DATA&&this.index===this.boundary.length)this.onPartEnd();else if(this.state!==U.END)throw new Error("MultipartParser.end(): stream ended unexpectedly")}}});var Xl={};et(Xl,{default:()=>Zl});module.exports=Ai(Xl);var R=require("@raycast/api"),Si=require("date-fns");var O=require("@raycast/api"),qr=V(require("react")),ve=require("react/jsx-runtime");function fi(e,t=100){return e.length>t?e.slice(0,t)+" ...":e}function Lr(e){let t=e.error,a=()=>{(0,O.launchCommand)({name:O.environment.commandName,type:O.LaunchType.UserInitiated})};return(0,ve.jsx)(O.MenuBarExtra,{icon:e.icon,isLoading:e.isLoading,title:e.title,tooltip:e.tooltip,children:t?(0,ve.jsx)(x,{title:`Error: ${t}`,icon:{source:O.Icon.Warning},onAction:a}):e.children})}function x(e){return(0,ve.jsx)(O.MenuBarExtra.Item,{title:fi(e.title),icon:e.icon,subtitle:e.subtitle,shortcut:e.shortcut,onAction:e.onAction,tooltip:e.tooltip})}function Pi(e,t){if(!t)return{shown:e,hidden:0};if(qr.default.isValidElement(e))return{shown:[e],hidden:0};let a=e;if(!a||a.length<=0)return{shown:void 0,hidden:0};let r=t||10,n=a.slice(0,r),o=a.length-n.length;return{shown:n,hidden:o}}function Nr(e,t){if(!(!e||e.length<=0))return e.join(t)}function fe(e){let t=Nr([e.title,e.subtitle].filter(o=>o)," "),{shown:a,hidden:r}=Pi(e.children,e.maxChildren),n=a===void 0||a.length<=0;return(0,ve.jsxs)(O.MenuBarExtra.Section,{title:t,children:[a,r>0&&e.moreElement&&e.moreElement(r),n&&e.emptyElement&&e.emptyElement]})}function tt(e){let t=Nr([e.title,e.subtitle].filter(a=>a)," ")||"";return(0,ve.jsx)(O.MenuBarExtra.Submenu,{title:t,icon:e.icon,children:e.children})}function Vr(){return(0,ve.jsx)(O.MenuBarExtra.Item,{title:"Configure Command",shortcut:{macOS:{modifiers:["cmd"],key:","},Windows:{modifiers:["ctrl"],key:","}},icon:O.Icon.Gear,onAction:()=>(0,O.openCommandPreferences)()})}var M=V(require("graphql-tag")),Pt=M.default`
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
`,Ei=M.default`
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
  ${Pt}
`,Se=M.default`
  fragment UserFields on User {
    id
    avatarUrl
    name
    login
    isViewer
  }
`,Et=M.default`
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
  ${Se}
`,Jt=M.default`
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
  ${Et}
  ${Pt}
  ${Se}
`,Ci=M.default`
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
  ${Et}
  ${Pt}
  ${Se}
`,kr=M.default`
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
`,jr=M.default`
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
`,Fr=M.default`
  fragment RepositoryMentionFields on Repository {
    nameWithOwner
    description
    isPrivate
    isArchived
    owner {
      avatarUrl(size: 64)
    }
  }
`,hi=M.default`
  fragment ProjectViewerFields on ProjectV2View {
    id
    name
    number
  }
`,zr=M.default`
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
  ${Et}
  ${hi}
`,Hr=M.default`
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
  ${Pt}
  ${Et}
  ${Se}
`,Di=M.default`
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
  ${Pt}
  ${Et}
  ${Se}
`,xi=M.default`
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
`,Gr=M.default`
  fragment CommitFields on Commit {
    authoredDate
    oid
    message
  }
`,$a=M.default`
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
`,Ui=M.default`
  fragment ReleaseFields on Release {
    id
    description
    name
    publishedAt
    createdAt
    tagName
    url
  }
`,_i=M.default`
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
`,vi=M.default`
  mutation createRef($input: CreateRefInput!) {
    createRef(input: $input) {
      clientMutationId
      ref {
        id
        name
      }
    }
  }
`,Ti=M.default`
  mutation deleteLinkedBranch($input: DeleteLinkedBranchInput!) {
    deleteLinkedBranch(input: $input) {
      clientMutationId
    }
  }
`,wi=M.default`
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
  ${Ei}
`,Oi=M.default`
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
`,Bi=M.default`
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
  ${Se}
`,qi=M.default`
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
`,Li=M.default`
  query issueDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...IssueDetailFields
    }
  }
  ${Ci}
`,Ni=M.default`
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
  ${Jt}
`,Vi=M.default`
  query issueByNumber($owner: String!, $name: String!, $issueNumber: Int!) {
    repository(owner: $owner, name: $name) {
      issue(number: $issueNumber) {
        ...IssueFields
      }
    }
  }
  ${Jt}
`,ki=M.default`
  mutation closeIssue($nodeId: ID!, $stateReason: IssueClosedStateReason!) {
    closeIssue(input: { issueId: $nodeId, stateReason: $stateReason }) {
      issue {
        id
      }
    }
  }
`,ji=M.default`
  mutation reopenIssue($nodeId: ID!) {
    reopenIssue(input: { issueId: $nodeId }) {
      issue {
        id
      }
    }
  }
`,Fi=M.default`
  mutation changeIssueAssignees($issueId: ID!, $assigneeIds: [ID!]) {
    updateIssue(input: { id: $issueId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,zi=M.default`
  mutation changeIssueMilestone($issueId: ID!, $milestoneId: ID) {
    updateIssue(input: { id: $issueId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,Hi=M.default`
  mutation addIssueToProject($issueId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $issueId }) {
      clientMutationId
    }
  }
`,Gi=M.default`
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
  ${Jt}
`,$i=M.default`
  query searchIssueMentions($query: String!, $numberOfItems: Int!) {
    search(query: $query, type: ISSUE, first: $numberOfItems) {
      nodes {
        ... on Issue {
          ...IssueMentionFields
        }
      }
    }
  }
  ${kr}
`,Qi=M.default`
  query searchPullRequestMentions($query: String!, $numberOfItems: Int!) {
    search(query: $query, type: ISSUE, first: $numberOfItems) {
      nodes {
        ... on PullRequest {
          ...PullRequestMentionFields
        }
      }
    }
  }
  ${jr}
`,Wi=M.default`
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
  ${kr}
  ${jr}
`,Ki=M.default`
  query searchRepositoryMentions($query: String!, $numberOfItems: Int!) {
    search(query: $query, type: REPOSITORY, first: $numberOfItems) {
      nodes {
        ... on Repository {
          ...RepositoryMentionFields
        }
      }
    }
  }
  ${Fr}
`,Yi=M.default`
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
  ${Fr}
`,Ji=M.default`
  mutation changeProjectStatus($projectId: ID!, $closed: Boolean!) {
    updateProjectV2(input: { projectId: $projectId, closed: $closed }) {
      clientMutationId
    }
  }
`,Zi=M.default`
  query projectDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...ProjectFields
    }
  }
  ${zr}
`,Xi=M.default`
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
  ${Hr}
`,es=M.default`
  query pullRequestDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...PullRequestDetailsFields
    }
  }
  ${Di}
`,ts=M.default`
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
  ${Se}
`,as=M.default`
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
`,rs=M.default`
  query pullRequestCommits($nodeId: ID!, $numberOfItems: Int!, $before: String) {
    node(id: $nodeId) {
      ...PullRequestCommitFields
    }
  }
  ${xi}
`,ns=M.default`
  mutation closePullRequest($nodeId: ID!) {
    closePullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,os=M.default`
  mutation reopenPullRequest($nodeId: ID!) {
    reopenPullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,is=M.default`
  mutation markPullRequestReadyForReview($nodeId: ID!) {
    markPullRequestReadyForReview(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,ss=M.default`
  mutation addPullRequestReview($nodeId: ID!, $event: PullRequestReviewEvent, $body: String) {
    addPullRequestReview(input: { pullRequestId: $nodeId, event: $event, body: $body }) {
      pullRequestReview {
        id
      }
    }
  }
`,us=M.default`
  mutation changePullRequestAssignees($pullRequestId: ID!, $assigneeIds: [ID!]) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,ps=M.default`
  mutation changePullRequestMilestone($pullRequestId: ID!, $milestoneId: ID) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,ls=M.default`
  mutation addPullRequestToProject($pullRequestId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $pullRequestId }) {
      clientMutationId
    }
  }
`,cs=M.default`
  mutation requestReview($pullRequestId: ID!, $collaboratorId: ID!) {
    requestReviews(input: { pullRequestId: $pullRequestId, userIds: [$collaboratorId], union: true }) {
      clientMutationId
    }
  }
`,ys=M.default`
  mutation mergePullRequest($nodeId: ID!, $method: PullRequestMergeMethod!) {
    mergePullRequest(input: { pullRequestId: $nodeId, mergeMethod: $method }) {
      pullRequest {
        nodeId: id
      }
    }
  }
`,ds=M.default`
  mutation addPullRequestToMergeQueue($nodeId: ID!) {
    enqueuePullRequest(input: { pullRequestId: $nodeId }) {
      __typename
    }
  }
`,Ss=M.default`
  mutation removePullRequestFromMergeQueue($nodeId: ID!) {
    dequeuePullRequest(input: { id: $nodeId }) {
      __typename
    }
  }
`,bs=M.default`
  mutation enablePullRequestAutoMerge($nodeId: ID!, $mergeMethod: PullRequestMergeMethod) {
    enablePullRequestAutoMerge(input: { pullRequestId: $nodeId, mergeMethod: $mergeMethod }) {
      pullRequest {
        id
      }
    }
  }
`,Is=M.default`
  mutation disablePullRequestAutoMerge($nodeId: ID!) {
    disablePullRequestAutoMerge(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,gs=M.default`
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
`,Ms=M.default`
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
  ${Hr}
`,ms=M.default`
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
  ${$a}
`,Rs=M.default`
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
  ${$a}
`,As=M.default`
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
`,fs=M.default`
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
`,Ps=M.default`
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
  ${Gr}
  ${Se}
`,Es=M.default`
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
  ${Gr}
`,Cs=M.default`
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
  ${Jt}
`,hs=M.default`
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
  ${Ui}
`,Ds=M.default`
  mutation addStar($repositoryId: ID!) {
    addStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,xs=M.default`
  mutation removeStar($repositoryId: ID!) {
    removeStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,Us=M.default`
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
  ${$a}
`,_s=M.default`
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
  ${Se}
  ${zr}
`,vs=M.default`
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
  ${Se}
`,Ts=M.default`
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
`,ws=(e,t,a,r)=>e();function $r(e,t=ws){return{createLinkedBranch(a,r,n){return t(o=>e.request({document:_i,variables:a,requestHeaders:{...r,...o},signal:n}),"createLinkedBranch","mutation",a)},createRef(a,r,n){return t(o=>e.request({document:vi,variables:a,requestHeaders:{...r,...o},signal:n}),"createRef","mutation",a)},deleteLinkedBranch(a,r,n){return t(o=>e.request({document:Ti,variables:a,requestHeaders:{...r,...o},signal:n}),"deleteLinkedBranch","mutation",a)},searchDiscussions(a,r,n){return t(o=>e.request({document:wi,variables:a,requestHeaders:{...r,...o},signal:n}),"searchDiscussions","query",a)},getGitHubDiscussionNumber(a,r,n){return t(o=>e.request({document:Oi,variables:a,requestHeaders:{...r,...o},signal:n}),"getGitHubDiscussionNumber","query",a)},repositoryCollaboratorsForIssues(a,r,n){return t(o=>e.request({document:Bi,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryCollaboratorsForIssues","query",a)},repositoryProjectsForIssues(a,r,n){return t(o=>e.request({document:qi,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryProjectsForIssues","query",a)},issueDetails(a,r,n){return t(o=>e.request({document:Li,variables:a,requestHeaders:{...r,...o},signal:n}),"issueDetails","query",a)},searchIssues(a,r,n){return t(o=>e.request({document:Ni,variables:a,requestHeaders:{...r,...o},signal:n}),"searchIssues","query",a)},issueByNumber(a,r,n){return t(o=>e.request({document:Vi,variables:a,requestHeaders:{...r,...o},signal:n}),"issueByNumber","query",a)},closeIssue(a,r,n){return t(o=>e.request({document:ki,variables:a,requestHeaders:{...r,...o},signal:n}),"closeIssue","mutation",a)},reopenIssue(a,r,n){return t(o=>e.request({document:ji,variables:a,requestHeaders:{...r,...o},signal:n}),"reopenIssue","mutation",a)},changeIssueAssignees(a,r,n){return t(o=>e.request({document:Fi,variables:a,requestHeaders:{...r,...o},signal:n}),"changeIssueAssignees","mutation",a)},changeIssueMilestone(a,r,n){return t(o=>e.request({document:zi,variables:a,requestHeaders:{...r,...o},signal:n}),"changeIssueMilestone","mutation",a)},addIssueToProject(a,r,n){return t(o=>e.request({document:Hi,variables:a,requestHeaders:{...r,...o},signal:n}),"addIssueToProject","mutation",a)},createIssue(a,r,n){return t(o=>e.request({document:Gi,variables:a,requestHeaders:{...r,...o},signal:n}),"createIssue","mutation",a)},searchIssueMentions(a,r,n){return t(o=>e.request({document:$i,variables:a,requestHeaders:{...r,...o},signal:n}),"searchIssueMentions","query",a)},searchPullRequestMentions(a,r,n){return t(o=>e.request({document:Qi,variables:a,requestHeaders:{...r,...o},signal:n}),"searchPullRequestMentions","query",a)},issueOrPullRequestMention(a,r,n){return t(o=>e.request({document:Wi,variables:a,requestHeaders:{...r,...o},signal:n}),"issueOrPullRequestMention","query",a)},searchRepositoryMentions(a,r,n){return t(o=>e.request({document:Ki,variables:a,requestHeaders:{...r,...o},signal:n}),"searchRepositoryMentions","query",a)},viewerRepositoryMentions(a,r,n){return t(o=>e.request({document:Yi,variables:a,requestHeaders:{...r,...o},signal:n}),"viewerRepositoryMentions","query",a)},changeProjectStatus(a,r,n){return t(o=>e.request({document:Ji,variables:a,requestHeaders:{...r,...o},signal:n}),"changeProjectStatus","mutation",a)},projectDetails(a,r,n){return t(o=>e.request({document:Zi,variables:a,requestHeaders:{...r,...o},signal:n}),"projectDetails","query",a)},searchPullRequests(a,r,n){return t(o=>e.request({document:Xi,variables:a,requestHeaders:{...r,...o},signal:n}),"searchPullRequests","query",a)},pullRequestDetails(a,r,n){return t(o=>e.request({document:es,variables:a,requestHeaders:{...r,...o},signal:n}),"pullRequestDetails","query",a)},repositoryCollaboratorsForPullRequests(a,r,n){return t(o=>e.request({document:ts,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryCollaboratorsForPullRequests","query",a)},repositoryProjectsForPullRequests(a,r,n){return t(o=>e.request({document:as,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryProjectsForPullRequests","query",a)},pullRequestCommits(a,r,n){return t(o=>e.request({document:rs,variables:a,requestHeaders:{...r,...o},signal:n}),"pullRequestCommits","query",a)},closePullRequest(a,r,n){return t(o=>e.request({document:ns,variables:a,requestHeaders:{...r,...o},signal:n}),"closePullRequest","mutation",a)},reopenPullRequest(a,r,n){return t(o=>e.request({document:os,variables:a,requestHeaders:{...r,...o},signal:n}),"reopenPullRequest","mutation",a)},markPullRequestReadyForReview(a,r,n){return t(o=>e.request({document:is,variables:a,requestHeaders:{...r,...o},signal:n}),"markPullRequestReadyForReview","mutation",a)},addPullRequestReview(a,r,n){return t(o=>e.request({document:ss,variables:a,requestHeaders:{...r,...o},signal:n}),"addPullRequestReview","mutation",a)},changePullRequestAssignees(a,r,n){return t(o=>e.request({document:us,variables:a,requestHeaders:{...r,...o},signal:n}),"changePullRequestAssignees","mutation",a)},changePullRequestMilestone(a,r,n){return t(o=>e.request({document:ps,variables:a,requestHeaders:{...r,...o},signal:n}),"changePullRequestMilestone","mutation",a)},addPullRequestToProject(a,r,n){return t(o=>e.request({document:ls,variables:a,requestHeaders:{...r,...o},signal:n}),"addPullRequestToProject","mutation",a)},requestReview(a,r,n){return t(o=>e.request({document:cs,variables:a,requestHeaders:{...r,...o},signal:n}),"requestReview","mutation",a)},mergePullRequest(a,r,n){return t(o=>e.request({document:ys,variables:a,requestHeaders:{...r,...o},signal:n}),"mergePullRequest","mutation",a)},addPullRequestToMergeQueue(a,r,n){return t(o=>e.request({document:ds,variables:a,requestHeaders:{...r,...o},signal:n}),"addPullRequestToMergeQueue","mutation",a)},removePullRequestFromMergeQueue(a,r,n){return t(o=>e.request({document:Ss,variables:a,requestHeaders:{...r,...o},signal:n}),"removePullRequestFromMergeQueue","mutation",a)},enablePullRequestAutoMerge(a,r,n){return t(o=>e.request({document:bs,variables:a,requestHeaders:{...r,...o},signal:n}),"enablePullRequestAutoMerge","mutation",a)},disablePullRequestAutoMerge(a,r,n){return t(o=>e.request({document:Is,variables:a,requestHeaders:{...r,...o},signal:n}),"disablePullRequestAutoMerge","mutation",a)},createPullRequest(a,r,n){return t(o=>e.request({document:gs,variables:a,requestHeaders:{...r,...o},signal:n}),"createPullRequest","mutation",a)},initPullRequest(a,r,n){return t(o=>e.request({document:Ms,variables:a,requestHeaders:{...r,...o},signal:n}),"initPullRequest","mutation",a)},searchRepositories(a,r,n){return t(o=>e.request({document:ms,variables:a,requestHeaders:{...r,...o},signal:n}),"searchRepositories","query",a)},myLatestRepositories(a,r,n){return t(o=>e.request({document:Rs,variables:a,requestHeaders:{...r,...o},signal:n}),"myLatestRepositories","query",a)},milestonesForRepository(a,r,n){return t(o=>e.request({document:As,variables:a,requestHeaders:{...r,...o},signal:n}),"milestonesForRepository","query",a)},commentsForPullRequest(a,r,n){return t(o=>e.request({document:fs,variables:a,requestHeaders:{...r,...o},signal:n}),"commentsForPullRequest","query",a)},dataForRepository(a,r,n){return t(o=>e.request({document:Ps,variables:a,requestHeaders:{...r,...o},signal:n}),"dataForRepository","query",a)},searchRepositoryBranches(a,r,n){return t(o=>e.request({document:Es,variables:a,requestHeaders:{...r,...o},signal:n}),"searchRepositoryBranches","query",a)},repositoryIssues(a,r,n){return t(o=>e.request({document:Cs,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryIssues","query",a)},repositoryReleases(a,r,n){return t(o=>e.request({document:hs,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryReleases","query",a)},addStar(a,r,n){return t(o=>e.request({document:Ds,variables:a,requestHeaders:{...r,...o},signal:n}),"addStar","mutation",a)},removeStar(a,r,n){return t(o=>e.request({document:xs,variables:a,requestHeaders:{...r,...o},signal:n}),"removeStar","mutation",a)},myStarredRepositories(a,r,n){return t(o=>e.request({document:Us,variables:a,requestHeaders:{...r,...o},signal:n}),"myStarredRepositories","query",a)},getViewer(a,r,n){return t(o=>e.request({document:_s,variables:a,requestHeaders:{...r,...o},signal:n}),"getViewer","query",a)},getViewerStats(a,r,n){return t(o=>e.request({document:vs,variables:a,requestHeaders:{...r,...o},signal:n}),"getViewerStats","query",a)},getViewerStatsDetails(a,r,n){return t(o=>e.request({document:Ts,variables:a,requestHeaders:{...r,...o},signal:n}),"getViewerStatsDetails","query",a)}}}var ti=V(kt());var Ko=require("@octokit/rest"),Yo=require("@raycast/api"),Jo=V(kt());var Da=JSON;var So=e=>e.toUpperCase(),bo=e=>{let t={};return e.forEach((a,r)=>{t[r]=a}),t};var Io=(e,t,a)=>e.document?e:{document:e,variables:t,requestHeaders:a,signal:void 0},go=(e,t,a)=>e.query?e:{query:e,variables:t,requestHeaders:a,signal:void 0},Mo=(e,t)=>e.documents?e:{documents:e,requestHeaders:t,signal:void 0};var xa=require("graphql"),mo=e=>{let t,a=e.definitions.filter(r=>r.kind==="OperationDefinition");return a.length===1&&(t=a[0]?.name?.value),t},Ke=e=>{if(typeof e=="string"){let a;try{let r=(0,xa.parse)(e);a=mo(r)}catch{}return{query:e,operationName:a}}let t=mo(e);return{query:(0,xa.print)(e),operationName:t}};var Ye=class e extends Error{constructor(t,a){let r=`${e.extractMessage(t)}: ${JSON.stringify({response:t,request:a})}`;super(r),Object.setPrototypeOf(this,e.prototype),this.response=t,this.request=a,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,e)}static extractMessage(t){return t.errors?.[0]?.message??`GraphQL Error (Code: ${t.status})`}};var je=V(Ot(),1);var gl="connection_init",Ml="connection_ack",Ao="ping",fo="pong",ml="subscribe",Rl="next",Al="error",Po="complete",ke=class e{get type(){return this._type}get id(){return this._id}get payload(){return this._payload}constructor(t,a,r){this._type=t,this._payload=a,this._id=r}get text(){let t={type:this.type};return this.id!=null&&this.id!=null&&(t.id=this.id),this.payload!=null&&this.payload!=null&&(t.payload=this.payload),JSON.stringify(t)}static parse(t,a){let{type:r,payload:n,id:o}=JSON.parse(t);return new e(r,a(n),o)}},Ua=class{constructor(t,{onInit:a,onAcknowledged:r,onPing:n,onPong:o}){this.socketState={acknowledged:!1,lastRequestId:0,subscriptions:{}},this.socket=t,t.addEventListener("open",async u=>{this.socketState.acknowledged=!1,this.socketState.subscriptions={},t.send(Pl(a?await a():null).text)}),t.addEventListener("close",u=>{this.socketState.acknowledged=!1,this.socketState.subscriptions={}}),t.addEventListener("error",u=>{console.error(u)}),t.addEventListener("message",u=>{try{let i=fl(u.data);switch(i.type){case Ml:{this.socketState.acknowledged?console.warn("Duplicate CONNECTION_ACK message ignored"):(this.socketState.acknowledged=!0,r&&r(i.payload));return}case Ao:{n?n(i.payload).then(d=>t.send(Ro(d).text)):t.send(Ro(null).text);return}case fo:{o&&o(i.payload);return}}if(!this.socketState.acknowledged||i.id===void 0||i.id===null||!this.socketState.subscriptions[i.id])return;let{query:s,variables:p,subscriber:y}=this.socketState.subscriptions[i.id];switch(i.type){case Rl:{!i.payload.errors&&i.payload.data&&y.next&&y.next(i.payload.data),i.payload.errors&&y.error&&y.error(new Ye({...i.payload,status:200},{query:s,variables:p}));return}case Al:{y.error&&y.error(new Ye({errors:i.payload,status:200},{query:s,variables:p}));return}case Po:{y.complete&&y.complete(),delete this.socketState.subscriptions[i.id];return}}}catch(i){console.error(i),t.close(1006)}t.close(4400,"Unknown graphql-ws message.")})}makeSubscribe(t,a,r,n){let o=(this.socketState.lastRequestId++).toString();return this.socketState.subscriptions[o]={query:t,variables:n,subscriber:r},this.socket.send(Cl(o,{query:t,operationName:a,variables:n}).text),()=>{this.socket.send(hl(o).text),delete this.socketState.subscriptions[o]}}rawRequest(t,a){return new Promise((r,n)=>{let o;this.rawSubscribe(t,{next:(u,i)=>o={data:u,extensions:i},error:n,complete:()=>r(o)},a)})}request(t,a){return new Promise((r,n)=>{let o;this.subscribe(t,{next:u=>o=u,error:n,complete:()=>r(o)},a)})}subscribe(t,a,r){let{query:n,operationName:o}=Ke(t);return this.makeSubscribe(n,o,a,r)}rawSubscribe(t,a,r){return this.makeSubscribe(t,void 0,a,r)}ping(t){this.socket.send(El(t).text)}close(){this.socket.close(1e3)}};Ua.PROTOCOL="graphql-transport-ws";function fl(e,t=a=>a){return ke.parse(e,t)}function Pl(e){return new ke(gl,e)}function El(e){return new ke(Ao,e,void 0)}function Ro(e){return new ke(fo,e,void 0)}function Cl(e,t){return new ke(ml,t,e)}function hl(e){return new ke(Po,void 0,e)}var mt=e=>{let t={};return e&&(typeof Headers<"u"&&e instanceof Headers||je&&je.Headers&&e instanceof je.Headers?t=bo(e):Array.isArray(e)?e.forEach(([a,r])=>{a&&r!==void 0&&(t[a]=r)}):t=e),t},Eo=e=>e.replace(/([\s,]|#[^\n\r]+)+/g," ").trim(),Dl=e=>{if(!Array.isArray(e.query)){let r=e,n=[`query=${encodeURIComponent(Eo(r.query))}`];return e.variables&&n.push(`variables=${encodeURIComponent(r.jsonSerializer.stringify(r.variables))}`),r.operationName&&n.push(`operationName=${encodeURIComponent(r.operationName)}`),n.join("&")}if(typeof e.variables<"u"&&!Array.isArray(e.variables))throw new Error("Cannot create query with given variable type, array expected");let t=e,a=e.query.reduce((r,n,o)=>(r.push({query:Eo(n),variables:t.variables?t.jsonSerializer.stringify(t.variables[o]):void 0}),r),[]);return`query=${encodeURIComponent(t.jsonSerializer.stringify(a))}`},xl=e=>async t=>{let{url:a,query:r,variables:n,operationName:o,fetch:u,fetchOptions:i,middleware:s}=t,p={...t.headers},y="",d;e==="POST"?(d=Ul(r,n,o,i.jsonSerializer),typeof d=="string"&&(p["Content-Type"]="application/json")):y=Dl({query:r,variables:n,operationName:o,jsonSerializer:i.jsonSerializer??Da});let g={method:e,headers:p,body:d,...i},S=a,c=g;if(s){let b=await Promise.resolve(s({...g,url:a,operationName:o,variables:n})),{url:I,...l}=b;S=I,c=l}return y&&(S=`${S}?${y}`),await u(S,c)},_a=class{constructor(t,a={}){this.url=t,this.requestConfig=a,this.rawRequest=async(...r)=>{let[n,o,u]=r,i=go(n,o,u),{headers:s,fetch:p=je.default,method:y="POST",requestMiddleware:d,responseMiddleware:g,...S}=this.requestConfig,{url:c}=this;i.signal!==void 0&&(S.signal=i.signal);let{operationName:b}=Ke(i.query);return Er({url:c,query:i.query,variables:i.variables,headers:{...mt(Cr(s)),...mt(i.requestHeaders)},operationName:b,fetch:p,method:y,fetchOptions:S,middleware:d}).then(I=>(g&&g(I),I)).catch(I=>{throw g&&g(I),I})}}async request(t,...a){let[r,n]=a,o=Io(t,r,n),{headers:u,fetch:i=je.default,method:s="POST",requestMiddleware:p,responseMiddleware:y,...d}=this.requestConfig,{url:g}=this;o.signal!==void 0&&(d.signal=o.signal);let{query:S,operationName:c}=Ke(o.document);return Er({url:g,query:S,variables:o.variables,headers:{...mt(Cr(u)),...mt(o.requestHeaders)},operationName:c,fetch:i,method:s,fetchOptions:d,middleware:p}).then(b=>(y&&y(b),b.data)).catch(b=>{throw y&&y(b),b})}batchRequests(t,a){let r=Mo(t,a),{headers:n,...o}=this.requestConfig;r.signal!==void 0&&(o.signal=r.signal);let u=r.documents.map(({document:s})=>Ke(s).query),i=r.documents.map(({variables:s})=>s);return Er({url:this.url,query:u,variables:i,headers:{...mt(Cr(n)),...mt(r.requestHeaders)},operationName:void 0,fetch:this.requestConfig.fetch??je.default,method:this.requestConfig.method||"POST",fetchOptions:o,middleware:this.requestConfig.requestMiddleware}).then(s=>(this.requestConfig.responseMiddleware&&this.requestConfig.responseMiddleware(s),s.data)).catch(s=>{throw this.requestConfig.responseMiddleware&&this.requestConfig.responseMiddleware(s),s})}setHeaders(t){return this.requestConfig.headers=t,this}setHeader(t,a){let{headers:r}=this.requestConfig;return r?r[t]=a:this.requestConfig.headers={[t]:a},this}setEndpoint(t){return this.url=t,this}},Er=async e=>{let{query:t,variables:a,fetchOptions:r}=e,n=xl(So(e.method??"post")),o=Array.isArray(e.query),u=await n(e),i=await _l(u,r.jsonSerializer??Da),s=Array.isArray(i)?!i.some(({data:y})=>!y):!!i.data,p=Array.isArray(i)||!i.errors||Array.isArray(i.errors)&&!i.errors.length||r.errorPolicy==="all"||r.errorPolicy==="ignore";if(u.ok&&p&&s){let{errors:y,...d}=(Array.isArray(i),i),g=r.errorPolicy==="ignore"?d:i;return{...o?{data:g}:g,headers:u.headers,status:u.status}}else{let y=typeof i=="string"?{error:i}:i;throw new Ye({...y,status:u.status,headers:u.headers},{query:t,variables:a})}};var Ul=(e,t,a,r)=>{let n=r??Da;if(!Array.isArray(e))return n.stringify({query:e,variables:t,operationName:a});if(typeof t<"u"&&!Array.isArray(t))throw new Error("Cannot create request body with given variable type, array expected");let o=e.reduce((u,i,s)=>(u.push({query:i,variables:t?t[s]:void 0}),u),[]);return n.stringify(o)},_l=async(e,t)=>{let a;return e.headers.forEach((r,n)=>{n.toLowerCase()==="content-type"&&(a=r)}),a&&(a.toLowerCase().startsWith("application/json")||a.toLowerCase().startsWith("application/graphql+json")||a.toLowerCase().startsWith("application/graphql-response+json"))?t.parse(await e.text()):e.text()},Cr=e=>typeof e=="function"?e():e;var Qo=V(require("node:http"),1),Wo=V(require("node:https"),1),Xe=V(require("node:zlib"),1),te=V(require("node:stream"),1),Qt=require("node:buffer");var jt={};et(jt,{default:()=>va.default});$(jt,require("data-uri-to-buffer"));var va=V(require("data-uri-to-buffer"));var ie=V(require("node:stream"),1),_e=require("node:util"),X=require("node:buffer");var Ft={};et(Ft,{default:()=>Ta.default});$(Ft,require("fetch-blob"));var Ta=V(require("fetch-blob"));wa();var Ue=class extends Error{constructor(t,a){super(t),Error.captureStackTrace(this,this.constructor),this.type=a}get name(){return this.constructor.name}get[Symbol.toStringTag](){return this.constructor.name}};var W=class extends Ue{constructor(t,a,r){super(t,a),r&&(this.code=this.errno=r.code,this.erroredSysCall=r.syscall)}};var Oa=Symbol.toStringTag,hr=e=>typeof e=="object"&&typeof e.append=="function"&&typeof e.delete=="function"&&typeof e.get=="function"&&typeof e.getAll=="function"&&typeof e.has=="function"&&typeof e.set=="function"&&typeof e.sort=="function"&&e[Oa]==="URLSearchParams",zt=e=>e&&typeof e=="object"&&typeof e.arrayBuffer=="function"&&typeof e.type=="string"&&typeof e.stream=="function"&&typeof e.constructor=="function"&&/^(Blob|File)$/.test(e[Oa]),ho=e=>typeof e=="object"&&(e[Oa]==="AbortSignal"||e[Oa]==="EventTarget"),Do=(e,t)=>{let a=new URL(t).hostname,r=new URL(e).hostname;return a===r||a.endsWith(`.${r}`)},xo=(e,t)=>{let a=new URL(t).protocol,r=new URL(e).protocol;return a===r};var Nl=(0,_e.promisify)(ie.default.pipeline),K=Symbol("Body internals"),Ae=class{constructor(t,{size:a=0}={}){let r=null;t===null?t=null:hr(t)?t=X.Buffer.from(t.toString()):zt(t)||X.Buffer.isBuffer(t)||(_e.types.isAnyArrayBuffer(t)?t=X.Buffer.from(t):ArrayBuffer.isView(t)?t=X.Buffer.from(t.buffer,t.byteOffset,t.byteLength):t instanceof ie.default||(t instanceof Q.FormData?(t=(0,Q.formDataToBlob)(t),r=t.type.split("=")[1]):t=X.Buffer.from(String(t))));let n=t;X.Buffer.isBuffer(t)?n=ie.default.Readable.from(t):zt(t)&&(n=ie.default.Readable.from(t.stream())),this[K]={body:t,stream:n,boundary:r,disturbed:!1,error:null},this.size=a,t instanceof ie.default&&t.on("error",o=>{let u=o instanceof Ue?o:new W(`Invalid response body while trying to fetch ${this.url}: ${o.message}`,"system",o);this[K].error=u})}get body(){return this[K].stream}get bodyUsed(){return this[K].disturbed}async arrayBuffer(){let{buffer:t,byteOffset:a,byteLength:r}=await Ur(this);return t.slice(a,a+r)}async formData(){let t=this.headers.get("content-type");if(t.startsWith("application/x-www-form-urlencoded")){let r=new Q.FormData,n=new URLSearchParams(await this.text());for(let[o,u]of n)r.append(o,u);return r}let{toFormData:a}=await Promise.resolve().then(()=>(To(),vo));return a(this.body,t)}async blob(){let t=this.headers&&this.headers.get("content-type")||this[K].body&&this[K].body.type||"",a=await this.arrayBuffer();return new Ta.default([a],{type:t})}async json(){let t=await this.text();return JSON.parse(t)}async text(){let t=await Ur(this);return new TextDecoder().decode(t)}buffer(){return Ur(this)}};Ae.prototype.buffer=(0,_e.deprecate)(Ae.prototype.buffer,"Please use 'response.arrayBuffer()' instead of 'response.buffer()'","node-fetch#buffer");Object.defineProperties(Ae.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0},data:{get:(0,_e.deprecate)(()=>{},"data doesn't exist, use json(), text(), arrayBuffer(), or body instead","https://github.com/node-fetch/node-fetch/issues/1000 (response)")}});async function Ur(e){if(e[K].disturbed)throw new TypeError(`body used already for: ${e.url}`);if(e[K].disturbed=!0,e[K].error)throw e[K].error;let{body:t}=e;if(t===null)return X.Buffer.alloc(0);if(!(t instanceof ie.default))return X.Buffer.alloc(0);let a=[],r=0;try{for await(let n of t){if(e.size>0&&r+n.length>e.size){let o=new W(`content size at ${e.url} over limit: ${e.size}`,"max-size");throw t.destroy(o),o}r+=n.length,a.push(n)}}catch(n){throw n instanceof Ue?n:new W(`Invalid response body while trying to fetch ${e.url}: ${n.message}`,"system",n)}if(t.readableEnded===!0||t._readableState.ended===!0)try{return a.every(n=>typeof n=="string")?X.Buffer.from(a.join("")):X.Buffer.concat(a,r)}catch(n){throw new W(`Could not create Buffer from response body for ${e.url}: ${n.message}`,"system",n)}else throw new W(`Premature close of server response while trying to fetch ${e.url}`)}var Rt=(e,t)=>{let a,r,{body:n}=e[K];if(e.bodyUsed)throw new Error("cannot clone body after it is used");return n instanceof ie.default&&typeof n.getBoundary!="function"&&(a=new ie.PassThrough({highWaterMark:t}),r=new ie.PassThrough({highWaterMark:t}),n.pipe(a),n.pipe(r),e[K].stream=a,n=r),n},Vl=(0,_e.deprecate)(e=>e.getBoundary(),"form-data doesn't follow the spec and requires special treatment. Use alternative package","https://github.com/node-fetch/node-fetch/issues/1167"),La=(e,t)=>e===null?null:typeof e=="string"?"text/plain;charset=UTF-8":hr(e)?"application/x-www-form-urlencoded;charset=UTF-8":zt(e)?e.type||null:X.Buffer.isBuffer(e)||_e.types.isAnyArrayBuffer(e)||ArrayBuffer.isView(e)?null:e instanceof Q.FormData?`multipart/form-data; boundary=${t[K].boundary}`:e&&typeof e.getBoundary=="function"?`multipart/form-data;boundary=${Vl(e)}`:e instanceof ie.default?null:"text/plain;charset=UTF-8",wo=e=>{let{body:t}=e[K];return t===null?0:zt(t)?t.size:X.Buffer.isBuffer(t)?t.length:t&&typeof t.getLengthSync=="function"&&t.hasKnownLength&&t.hasKnownLength()?t.getLengthSync():null},Oo=async(e,{body:t})=>{t===null?e.end():await Nl(t,e)};var _r=require("node:util"),Gt=V(require("node:http"),1),Na=typeof Gt.default.validateHeaderName=="function"?Gt.default.validateHeaderName:e=>{if(!/^[\^`\-\w!#$%&'*+.|~]+$/.test(e)){let t=new TypeError(`Header name must be a valid HTTP token [${e}]`);throw Object.defineProperty(t,"code",{value:"ERR_INVALID_HTTP_TOKEN"}),t}},vr=typeof Gt.default.validateHeaderValue=="function"?Gt.default.validateHeaderValue:(e,t)=>{if(/[^\t\u0020-\u007E\u0080-\u00FF]/.test(t)){let a=new TypeError(`Invalid character in header content ["${e}"]`);throw Object.defineProperty(a,"code",{value:"ERR_INVALID_CHAR"}),a}},ee=class e extends URLSearchParams{constructor(t){let a=[];if(t instanceof e){let r=t.raw();for(let[n,o]of Object.entries(r))a.push(...o.map(u=>[n,u]))}else if(t!=null)if(typeof t=="object"&&!_r.types.isBoxedPrimitive(t)){let r=t[Symbol.iterator];if(r==null)a.push(...Object.entries(t));else{if(typeof r!="function")throw new TypeError("Header pairs must be iterable");a=[...t].map(n=>{if(typeof n!="object"||_r.types.isBoxedPrimitive(n))throw new TypeError("Each header pair must be an iterable object");return[...n]}).map(n=>{if(n.length!==2)throw new TypeError("Each header pair must be a name/value tuple");return[...n]})}}else throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");return a=a.length>0?a.map(([r,n])=>(Na(r),vr(r,String(n)),[String(r).toLowerCase(),String(n)])):void 0,super(a),new Proxy(this,{get(r,n,o){switch(n){case"append":case"set":return(u,i)=>(Na(u),vr(u,String(i)),URLSearchParams.prototype[n].call(r,String(u).toLowerCase(),String(i)));case"delete":case"has":case"getAll":return u=>(Na(u),URLSearchParams.prototype[n].call(r,String(u).toLowerCase()));case"keys":return()=>(r.sort(),new Set(URLSearchParams.prototype.keys.call(r)).keys());default:return Reflect.get(r,n,o)}}})}get[Symbol.toStringTag](){return this.constructor.name}toString(){return Object.prototype.toString.call(this)}get(t){let a=this.getAll(t);if(a.length===0)return null;let r=a.join(", ");return/^content-encoding$/i.test(t)&&(r=r.toLowerCase()),r}forEach(t,a=void 0){for(let r of this.keys())Reflect.apply(t,a,[this.get(r),r,this])}*values(){for(let t of this.keys())yield this.get(t)}*entries(){for(let t of this.keys())yield[t,this.get(t)]}[Symbol.iterator](){return this.entries()}raw(){return[...this.keys()].reduce((t,a)=>(t[a]=this.getAll(a),t),{})}[Symbol.for("nodejs.util.inspect.custom")](){return[...this.keys()].reduce((t,a)=>{let r=this.getAll(a);return a==="host"?t[a]=r[0]:t[a]=r.length>1?r:r[0],t},{})}};Object.defineProperties(ee.prototype,["get","entries","forEach","values"].reduce((e,t)=>(e[t]={enumerable:!0},e),{}));function Bo(e=[]){return new ee(e.reduce((t,a,r,n)=>(r%2===0&&t.push(n.slice(r,r+2)),t),[]).filter(([t,a])=>{try{return Na(t),vr(t,String(a)),!0}catch{return!1}}))}var kl=new Set([301,302,303,307,308]),Va=e=>kl.has(e);var ye=Symbol("Response internals"),se=class e extends Ae{constructor(t=null,a={}){super(t,a);let r=a.status!=null?a.status:200,n=new ee(a.headers);if(t!==null&&!n.has("Content-Type")){let o=La(t,this);o&&n.append("Content-Type",o)}this[ye]={type:"default",url:a.url,status:r,statusText:a.statusText||"",headers:n,counter:a.counter,highWaterMark:a.highWaterMark}}get type(){return this[ye].type}get url(){return this[ye].url||""}get status(){return this[ye].status}get ok(){return this[ye].status>=200&&this[ye].status<300}get redirected(){return this[ye].counter>0}get statusText(){return this[ye].statusText}get headers(){return this[ye].headers}get highWaterMark(){return this[ye].highWaterMark}clone(){return new e(Rt(this,this.highWaterMark),{type:this.type,url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected,size:this.size,highWaterMark:this.highWaterMark})}static redirect(t,a=302){if(!Va(a))throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');return new e(null,{headers:{location:new URL(t).toString()},status:a})}static error(){let t=new e(null,{status:0,statusText:""});return t[ye].type="error",t}static json(t=void 0,a={}){let r=JSON.stringify(t);if(r===void 0)throw new TypeError("data is not JSON serializable");let n=new ee(a&&a.headers);return n.has("content-type")||n.set("content-type","application/json"),new e(r,{...a,headers:n})}get[Symbol.toStringTag](){return"Response"}};Object.defineProperties(se.prototype,{type:{enumerable:!0},url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}});var Ho=require("node:url"),Go=require("node:util");var qo=e=>{if(e.search)return e.search;let t=e.href.length-1,a=e.hash||(e.href[t]==="#"?"#":"");return e.href[t-a.length]==="?"?"?":""};var No=require("node:net");function Lo(e,t=!1){return e==null||(e=new URL(e),/^(about|blob|data):$/.test(e.protocol))?"no-referrer":(e.username="",e.password="",e.hash="",t&&(e.pathname="",e.search=""),e)}var Vo=new Set(["","no-referrer","no-referrer-when-downgrade","same-origin","origin","strict-origin","origin-when-cross-origin","strict-origin-when-cross-origin","unsafe-url"]),ko="strict-origin-when-cross-origin";function jo(e){if(!Vo.has(e))throw new TypeError(`Invalid referrerPolicy: ${e}`);return e}function jl(e){if(/^(http|ws)s:$/.test(e.protocol))return!0;let t=e.host.replace(/(^\[)|(]$)/g,""),a=(0,No.isIP)(t);return a===4&&/^127\./.test(t)||a===6&&/^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(t)?!0:e.host==="localhost"||e.host.endsWith(".localhost")?!1:e.protocol==="file:"}function At(e){return/^about:(blank|srcdoc)$/.test(e)||e.protocol==="data:"||/^(blob|filesystem):$/.test(e.protocol)?!0:jl(e)}function Fo(e,{referrerURLCallback:t,referrerOriginCallback:a}={}){if(e.referrer==="no-referrer"||e.referrerPolicy==="")return null;let r=e.referrerPolicy;if(e.referrer==="about:client")return"no-referrer";let n=e.referrer,o=Lo(n),u=Lo(n,!0);o.toString().length>4096&&(o=u),t&&(o=t(o)),a&&(u=a(u));let i=new URL(e.url);switch(r){case"no-referrer":return"no-referrer";case"origin":return u;case"unsafe-url":return o;case"strict-origin":return At(o)&&!At(i)?"no-referrer":u.toString();case"strict-origin-when-cross-origin":return o.origin===i.origin?o:At(o)&&!At(i)?"no-referrer":u;case"same-origin":return o.origin===i.origin?o:"no-referrer";case"origin-when-cross-origin":return o.origin===i.origin?o:u;case"no-referrer-when-downgrade":return At(o)&&!At(i)?"no-referrer":o;default:throw new TypeError(`Invalid referrerPolicy: ${r}`)}}function zo(e){let t=(e.get("referrer-policy")||"").split(/[,\s]+/),a="";for(let r of t)r&&Vo.has(r)&&(a=r);return a}var L=Symbol("Request internals"),$t=e=>typeof e=="object"&&typeof e[L]=="object",Fl=(0,Go.deprecate)(()=>{},".data is not a valid RequestInit property, use .body instead","https://github.com/node-fetch/node-fetch/issues/1000 (request)"),Ze=class e extends Ae{constructor(t,a={}){let r;if($t(t)?r=new URL(t.url):(r=new URL(t),t={}),r.username!==""||r.password!=="")throw new TypeError(`${r} is an url with embedded credentials.`);let n=a.method||t.method||"GET";if(/^(delete|get|head|options|post|put)$/i.test(n)&&(n=n.toUpperCase()),!$t(a)&&"data"in a&&Fl(),(a.body!=null||$t(t)&&t.body!==null)&&(n==="GET"||n==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");let o=a.body?a.body:$t(t)&&t.body!==null?Rt(t):null;super(o,{size:a.size||t.size||0});let u=new ee(a.headers||t.headers||{});if(o!==null&&!u.has("Content-Type")){let p=La(o,this);p&&u.set("Content-Type",p)}let i=$t(t)?t.signal:null;if("signal"in a&&(i=a.signal),i!=null&&!ho(i))throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");let s=a.referrer==null?t.referrer:a.referrer;if(s==="")s="no-referrer";else if(s){let p=new URL(s);s=/^about:(\/\/)?client$/.test(p)?"client":p}else s=void 0;this[L]={method:n,redirect:a.redirect||t.redirect||"follow",headers:u,parsedURL:r,signal:i,referrer:s},this.follow=a.follow===void 0?t.follow===void 0?20:t.follow:a.follow,this.compress=a.compress===void 0?t.compress===void 0?!0:t.compress:a.compress,this.counter=a.counter||t.counter||0,this.agent=a.agent||t.agent,this.highWaterMark=a.highWaterMark||t.highWaterMark||16384,this.insecureHTTPParser=a.insecureHTTPParser||t.insecureHTTPParser||!1,this.referrerPolicy=a.referrerPolicy||t.referrerPolicy||""}get method(){return this[L].method}get url(){return(0,Ho.format)(this[L].parsedURL)}get headers(){return this[L].headers}get redirect(){return this[L].redirect}get signal(){return this[L].signal}get referrer(){if(this[L].referrer==="no-referrer")return"";if(this[L].referrer==="client")return"about:client";if(this[L].referrer)return this[L].referrer.toString()}get referrerPolicy(){return this[L].referrerPolicy}set referrerPolicy(t){this[L].referrerPolicy=jo(t)}clone(){return new e(this)}get[Symbol.toStringTag](){return"Request"}};Object.defineProperties(Ze.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0},referrer:{enumerable:!0},referrerPolicy:{enumerable:!0}});var $o=e=>{let{parsedURL:t}=e[L],a=new ee(e[L].headers);a.has("Accept")||a.set("Accept","*/*");let r=null;if(e.body===null&&/^(post|put)$/i.test(e.method)&&(r="0"),e.body!==null){let i=wo(e);typeof i=="number"&&!Number.isNaN(i)&&(r=String(i))}r&&a.set("Content-Length",r),e.referrerPolicy===""&&(e.referrerPolicy=ko),e.referrer&&e.referrer!=="no-referrer"?e[L].referrer=Fo(e):e[L].referrer="no-referrer",e[L].referrer instanceof URL&&a.set("Referer",e.referrer),a.has("User-Agent")||a.set("User-Agent","node-fetch"),e.compress&&!a.has("Accept-Encoding")&&a.set("Accept-Encoding","gzip, deflate, br");let{agent:n}=e;typeof n=="function"&&(n=n(t));let o=qo(t),u={path:t.pathname+o,method:e.method,headers:a[Symbol.for("nodejs.util.inspect.custom")](),insecureHTTPParser:e.insecureHTTPParser,agent:n};return{parsedURL:t,options:u}};var ka=class extends Ue{constructor(t,a="aborted"){super(t,a)}};wa();Dr();var zl=new Set(["data:","http:","https:"]);async function ja(e,t){return new Promise((a,r)=>{let n=new Ze(e,t),{parsedURL:o,options:u}=$o(n);if(!zl.has(o.protocol))throw new TypeError(`node-fetch cannot load ${e}. URL scheme "${o.protocol.replace(/:$/,"")}" is not supported.`);if(o.protocol==="data:"){let c=(0,va.default)(n.url),b=new se(c,{headers:{"Content-Type":c.typeFull}});a(b);return}let i=(o.protocol==="https:"?Wo.default:Qo.default).request,{signal:s}=n,p=null,y=()=>{let c=new ka("The operation was aborted.");r(c),n.body&&n.body instanceof te.default.Readable&&n.body.destroy(c),!(!p||!p.body)&&p.body.emit("error",c)};if(s&&s.aborted){y();return}let d=()=>{y(),S()},g=i(o.toString(),u);s&&s.addEventListener("abort",d);let S=()=>{g.abort(),s&&s.removeEventListener("abort",d)};g.on("error",c=>{r(new W(`request to ${n.url} failed, reason: ${c.message}`,"system",c)),S()}),Hl(g,c=>{p&&p.body&&p.body.destroy(c)}),process.version<"v14"&&g.on("socket",c=>{let b;c.prependListener("end",()=>{b=c._eventsCount}),c.prependListener("close",I=>{if(p&&b<c._eventsCount&&!I){let l=new Error("Premature close");l.code="ERR_STREAM_PREMATURE_CLOSE",p.body.emit("error",l)}})}),g.on("response",c=>{g.setTimeout(0);let b=Bo(c.rawHeaders);if(Va(c.statusCode)){let m=b.get("Location"),C=null;try{C=m===null?null:new URL(m,n.url)}catch{if(n.redirect!=="manual"){r(new W(`uri requested responds with an invalid redirect URL: ${m}`,"invalid-redirect")),S();return}}switch(n.redirect){case"error":r(new W(`uri requested responds with a redirect, redirect mode is set to error: ${n.url}`,"no-redirect")),S();return;case"manual":break;case"follow":{if(C===null)break;if(n.counter>=n.follow){r(new W(`maximum redirect reached at: ${n.url}`,"max-redirect")),S();return}let f={headers:new ee(n.headers),follow:n.follow,counter:n.counter+1,agent:n.agent,compress:n.compress,method:n.method,body:Rt(n),signal:n.signal,size:n.size,referrer:n.referrer,referrerPolicy:n.referrerPolicy};if(!Do(n.url,C)||!xo(n.url,C))for(let j of["authorization","www-authenticate","cookie","cookie2"])f.headers.delete(j);if(c.statusCode!==303&&n.body&&t.body instanceof te.default.Readable){r(new W("Cannot follow redirect with body being a readable stream","unsupported-redirect")),S();return}(c.statusCode===303||(c.statusCode===301||c.statusCode===302)&&n.method==="POST")&&(f.method="GET",f.body=void 0,f.headers.delete("content-length"));let v=zo(b);v&&(f.referrerPolicy=v),a(ja(new Ze(C,f))),S();return}default:return r(new TypeError(`Redirect option '${n.redirect}' is not a valid value of RequestRedirect`))}}s&&c.once("end",()=>{s.removeEventListener("abort",d)});let I=(0,te.pipeline)(c,new te.PassThrough,m=>{m&&r(m)});process.version<"v12.10"&&c.on("aborted",d);let l={url:n.url,status:c.statusCode,statusText:c.statusMessage,headers:b,size:n.size,counter:n.counter,highWaterMark:n.highWaterMark},A=b.get("Content-Encoding");if(!n.compress||n.method==="HEAD"||A===null||c.statusCode===204||c.statusCode===304){p=new se(I,l),a(p);return}let P={flush:Xe.default.Z_SYNC_FLUSH,finishFlush:Xe.default.Z_SYNC_FLUSH};if(A==="gzip"||A==="x-gzip"){I=(0,te.pipeline)(I,Xe.default.createGunzip(P),m=>{m&&r(m)}),p=new se(I,l),a(p);return}if(A==="deflate"||A==="x-deflate"){let m=(0,te.pipeline)(c,new te.PassThrough,C=>{C&&r(C)});m.once("data",C=>{(C[0]&15)===8?I=(0,te.pipeline)(I,Xe.default.createInflate(),f=>{f&&r(f)}):I=(0,te.pipeline)(I,Xe.default.createInflateRaw(),f=>{f&&r(f)}),p=new se(I,l),a(p)}),m.once("end",()=>{p||(p=new se(I,l),a(p))});return}if(A==="br"){I=(0,te.pipeline)(I,Xe.default.createBrotliDecompress(),m=>{m&&r(m)}),p=new se(I,l),a(p);return}p=new se(I,l),a(p)}),Oo(g,n).catch(r)})}function Hl(e,t){let a=Qt.Buffer.from(`0\r
\r
`),r=!1,n=!1,o;e.on("response",u=>{let{headers:i}=u;r=i["transfer-encoding"]==="chunked"&&!i["content-length"]}),e.on("socket",u=>{let i=()=>{if(r&&!n){let p=new Error("Premature close");p.code="ERR_STREAM_PREMATURE_CLOSE",t(p)}},s=p=>{n=Qt.Buffer.compare(p.slice(-5),a)===0,!n&&o&&(n=Qt.Buffer.compare(o.slice(-3),a.slice(0,3))===0&&Qt.Buffer.compare(p.slice(-2),a.slice(3))===0),o=p};u.prependListener("close",i),u.on("data",s),e.on("close",()=>{u.removeListener("close",i),u.removeListener("data",s)})})}var Tr=null,wr=null,Zo=null,Gl=(0,Yo.getPreferenceValues)();function $l({token:e,type:t}){let a=t==="personal"?`token ${e}`:`bearer ${e}`;Zo=e,Tr=$r(new _a("https://api.github.com/graphql",{headers:{authorization:a}})),wr=new Ko.Octokit({auth:e,request:{fetch:ja}})}var Xo=Jo.OAuthService.github({personalAccessToken:Gl.personalAccessToken,scope:"notifications repo project read:org read:user read:packages",onAuthorize:$l});function ei(){if(!Tr||!wr)throw new Error("GitHub clients not initialized");return{github:Tr,octokit:wr,token:Zo}}var ai=(0,ti.withAccessToken)(Xo);var Br=require("@raycast/api"),Wt=V(kt()),Or=require("react"),oi="my-stats-menu:stars-snapshot";async function ri(){let e=await Br.LocalStorage.getItem(oi);if(!e)return null;try{let t=JSON.parse(e);return typeof t=="object"&&t!=null?t:null}catch{return null}}async function Fa(e){await Br.LocalStorage.setItem(oi,JSON.stringify(e))}function ni(e){return e.reduce((t,a)=>(t[a.id]=a.stargazerCount,t),{})}function ii(e,t){let{data:a,revalidate:r}=(0,Wt.useCachedPromise)(async(u,i)=>{if(!i||!u||u.length===0)return{totalNewStars:0,perRepoNew:[]};let s=await ri();if(s===null)return await Fa(ni(u)),{totalNewStars:0,perRepoNew:[]};let p=[],y=0,d={...s},g=!1;for(let S of u){let c=s[S.id];if(c===void 0){d[S.id]=S.stargazerCount,g=!0;continue}let b=S.stargazerCount-c;b>0?(p.push({id:S.id,nameWithOwner:S.nameWithOwner,url:S.url,delta:b,current:S.stargazerCount}),y+=b):b<0&&(d[S.id]=S.stargazerCount,g=!0)}return g&&await Fa(d),p.sort((S,c)=>c.delta-S.delta),{totalNewStars:y,perRepoNew:p}},[e,t],{execute:t,keepPreviousData:!0}),n=(0,Or.useCallback)(async()=>{if(e)try{await Fa(ni(e)),await r()}catch(u){await(0,Wt.showFailureToast)(u,{title:"Could not mark stars as seen"})}},[e,r]),o=(0,Or.useCallback)(async u=>{if(e)try{let i=e.find(p=>p.id===u);if(!i)return;let s=await ri()??{};s[u]=i.stargazerCount,await Fa(s),await r()}catch(i){await(0,Wt.showFailureToast)(i,{title:"Could not mark repository as seen"})}},[e,r]);return{totalNewStars:a?.totalNewStars??0,perRepoNew:a?.perRepoNew??[],markRepoSeen:o,markAllSeen:n}}var li=require("node:crypto"),za=require("@raycast/api"),ci=V(kt()),yi=require("react");var si={"15m":900*1e3,"30m":1800*1e3,"1h":3600*1e3,"2h":7200*1e3},ui="last-fetch-ms",pi="last-result";function Ql(e){return`my-stats-menu:${e?(0,li.createHash)("sha256").update(e).digest("hex").slice(0,12):"anonymous"}`}function di(){let{github:e,token:t}=ei(),{refreshFrequency:a}=(0,za.getPreferenceValues)(),r=(0,yi.useMemo)(()=>new za.Cache({namespace:Ql(t)}),[t]),n=async()=>{let[{viewer:o,rateLimit:u},{viewer:i}]=await Promise.all([e.getViewerStats(),e.getViewerStatsDetails({repositoriesCount:100})]),s=i.ownedRepositories.nodes??[],p=s.reduce((l,A)=>l+(A?.stargazerCount??0),0),y=s.reduce((l,A)=>l+(A?.forkCount??0),0),d=o.ownedRepositories.totalCount>s.length,g=s.filter(l=>l!=null).map(l=>({id:l.id,nameWithOwner:l.nameWithOwner,url:l.url,stargazerCount:l.stargazerCount})),S=o.pullRequestsAuthored.totalCount,c=o.pullRequestsMerged.totalCount,b=S>0?Math.round(c/S*100):0,I={profile:{id:o.id,login:o.login,name:o.name,avatarUrl:o.avatarUrl,url:o.url,bio:o.bio,company:o.company,location:o.location,websiteUrl:o.websiteUrl,createdAt:o.createdAt},social:{followers:o.followers.totalCount,following:o.following.totalCount,starred:o.starredRepositories.totalCount,starsReceived:p,forksReceived:y,ownedReposPartial:d},activity:{prsAuthored:S,prsMerged:c,prsOpen:o.pullRequestsOpen.totalCount,mergeRate:b,issuesAuthored:o.issuesAuthored.totalCount,issuesOpen:o.issuesOpen.totalCount,commitsYear:o.contributionsCollection.totalCommitContributions},operational:{publicRepos:o.publicRepos.totalCount,ownedRepos:o.ownedRepositories.totalCount},organizations:i.organizations.nodes?.filter(l=>l!=null)??[],ownedReposBreakdown:g,recent:{pullRequests:(i.recentPullRequests.nodes??[]).filter(l=>l!=null),openPullRequests:(i.recentOpenPullRequests.nodes??[]).filter(l=>l!=null),issues:(i.recentIssues.nodes??[]).filter(l=>l!=null),openIssues:(i.recentOpenIssues.nodes??[]).filter(l=>l!=null)},rateLimit:u?{remaining:u.remaining,limit:u.limit,used:u.used,resetAt:u.resetAt}:null};return r.set(ui,String(Date.now())),r.set(pi,JSON.stringify(I)),I};return(0,ci.useCachedPromise)(async()=>{let o=si[a??"30m"]??si["30m"],u=r.get(ui),i=r.get(pi);if(u&&i){let s=parseInt(u,10);if(Number.isFinite(s)&&Date.now()-s<o)try{return JSON.parse(i)}catch{}}return n()})}var E=require("react/jsx-runtime");function N(e){return e.toLocaleString()}function Wl(e){let t=new Date(e);return Number.isNaN(t.getTime())?"soon":t.getTime()-Date.now()<=0?"now":`in ${(0,Si.formatDistanceToNowStrict)(t)}`}function Kl(e){switch(e){case"OPEN":return{source:"pull-request-open.svg",tintColor:R.Color.Green};case"MERGED":return{source:"pull-request-merged.svg",tintColor:R.Color.Purple};case"CLOSED":return{source:"pull-request-closed.svg",tintColor:R.Color.Red}}}function Yl(e){switch(e){case"OPEN":return{source:"issue-open.svg",tintColor:R.Color.Green};case"CLOSED":return{source:"issue-closed.svg",tintColor:R.Color.Red}}}function Jl(){let{titleMetric:e,useAvatarAsIcon:t,notifyOnNewStars:a}=(0,R.getPreferenceValues)(),{data:r,isLoading:n,error:o}=di(),{totalNewStars:u,perRepoNew:i,markRepoSeen:s,markAllSeen:p}=ii(r?.ownedReposBreakdown,a),y=l=>{if(r)switch(l){case"followers":return r.social.followers;case"stars":return r.social.starsReceived;case"prsOpen":return r.activity.prsOpen;case"issuesOpen":return r.activity.issuesOpen;case"none":return}},d=(()=>{if(a&&u>0)return`\u2605+${u}`;let l=y(e);return l===void 0?void 0:N(l)})(),g=r?.profile.login,S=r?.profile.url??(g?`https://github.com/${g}`:"https://github.com"),c=(l,A)=>`https://github.com/search?type=${l}&q=${encodeURIComponent(A)}`,b="Aggregated over the top 100 owned repositories by stars",I=t&&r?.profile.avatarUrl?{source:r.profile.avatarUrl,mask:R.Image.Mask.Circle}:{source:"github.svg",tintColor:R.Color.PrimaryText};return(0,E.jsxs)(Lr,{title:d,icon:I,tooltip:r?.profile.name?`${r.profile.name} (@${r.profile.login})`:"GitHub Stats",isLoading:n,error:o?.message,children:[r&&(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(fe,{children:(0,E.jsx)(x,{title:r.profile.name??r.profile.login,subtitle:`@${r.profile.login}`,icon:{source:r.profile.avatarUrl,mask:R.Image.Mask.Circle},tooltip:r.profile.bio??void 0,onAction:()=>(0,R.open)(S)})}),a&&i.length>0&&(0,E.jsxs)(fe,{title:`What's New \xB7 +${u} \u2605`,children:[i.map(l=>(0,E.jsx)(x,{title:l.nameWithOwner,subtitle:`+${l.delta} \u2605 (now ${N(l.current)})`,icon:{source:R.Icon.Star,tintColor:R.Color.Yellow},onAction:async()=>{await(0,R.open)(`${l.url}/stargazers`),await s(l.id)}},l.id)),(0,E.jsx)(x,{title:"Mark All as Seen",icon:R.Icon.Check,shortcut:{macOS:{modifiers:["cmd"],key:"k"},Windows:{modifiers:["ctrl"],key:"k"}},onAction:p})]}),(0,E.jsxs)(fe,{title:"Social",children:[(0,E.jsx)(x,{title:"Followers",subtitle:N(r.social.followers),icon:R.Icon.Person,onAction:()=>(0,R.open)(`${S}?tab=followers`)}),(0,E.jsx)(x,{title:"Following",subtitle:N(r.social.following),icon:R.Icon.PersonCircle,onAction:()=>(0,R.open)(`${S}?tab=following`)}),(0,E.jsx)(x,{title:"Stars Received",subtitle:r.social.ownedReposPartial?`${N(r.social.starsReceived)}+`:N(r.social.starsReceived),icon:R.Icon.Star,tooltip:r.social.ownedReposPartial?b:void 0,onAction:()=>(0,R.open)(`${S}?tab=repositories`)}),(0,E.jsx)(x,{title:"Starred Repositories",subtitle:N(r.social.starred),icon:R.Icon.Bookmark,onAction:()=>(0,R.open)(`${S}?tab=stars`)})]}),(0,E.jsxs)(fe,{title:"Activity",children:[(0,E.jsxs)(tt,{title:"PRs Authored",subtitle:N(r.activity.prsAuthored),icon:{source:"pull-request-open.svg",tintColor:R.Color.PrimaryText},children:[r.recent?.pullRequests&&r.recent.pullRequests.length>0?r.recent.pullRequests.map(l=>(0,E.jsx)(x,{title:`#${l.number} ${l.title}`,subtitle:l.repository.nameWithOwner,icon:Kl(l.state),onAction:()=>(0,R.open)(l.url)},l.id)):(0,E.jsx)(x,{title:"No recent pull requests",icon:R.Icon.Info}),(0,E.jsx)(x,{title:"View All Authored PRs",icon:R.Icon.MagnifyingGlass,onAction:()=>(0,R.open)(c("pullrequests",`is:pr author:${r.profile.login}`))})]}),(0,E.jsx)(x,{title:"PRs Merged",subtitle:`${N(r.activity.prsMerged)} (${r.activity.mergeRate}%)`,icon:{source:"pull-request-merged.svg",tintColor:R.Color.PrimaryText},tooltip:`${r.activity.mergeRate}% of authored PRs were merged`,onAction:()=>(0,R.open)(c("pullrequests",`is:pr is:merged author:${r.profile.login}`))}),(0,E.jsxs)(tt,{title:"Issues Authored",subtitle:N(r.activity.issuesAuthored),icon:{source:"issue-open.svg",tintColor:R.Color.PrimaryText},children:[r.recent?.issues&&r.recent.issues.length>0?r.recent.issues.map(l=>(0,E.jsx)(x,{title:`#${l.number} ${l.title}`,subtitle:l.repository.nameWithOwner,icon:Yl(l.state),onAction:()=>(0,R.open)(l.url)},l.id)):(0,E.jsx)(x,{title:"No recent issues",icon:R.Icon.Info}),(0,E.jsx)(x,{title:"View All Authored Issues",icon:R.Icon.MagnifyingGlass,onAction:()=>(0,R.open)(c("issues",`is:issue author:${r.profile.login}`))})]}),(0,E.jsx)(x,{title:"Commits (last year)",subtitle:N(r.activity.commitsYear),icon:{source:"commit.svg",tintColor:R.Color.PrimaryText},onAction:()=>(0,R.open)(c("commits",`author:${r.profile.login}`))})]}),(0,E.jsxs)(fe,{title:"Operational",children:[(0,E.jsx)(x,{title:"Public Repos",subtitle:N(r.operational.publicRepos),icon:R.Icon.Folder,onAction:()=>(0,R.open)(`${S}?tab=repositories`)}),(0,E.jsx)(x,{title:"Forks Received",subtitle:r.social.ownedReposPartial?`${N(r.social.forksReceived)}+`:N(r.social.forksReceived),icon:{source:"branch.svg",tintColor:R.Color.PrimaryText},tooltip:r.social.ownedReposPartial?b:void 0,onAction:()=>(0,R.open)(`${S}?tab=repositories`)}),(0,E.jsxs)(tt,{title:"Open PRs",subtitle:N(r.activity.prsOpen),icon:{source:"pull-request-open.svg",tintColor:R.Color.Green},children:[r.recent?.openPullRequests&&r.recent.openPullRequests.length>0?r.recent.openPullRequests.map(l=>(0,E.jsx)(x,{title:`#${l.number} ${l.title}`,subtitle:l.repository.nameWithOwner,icon:{source:"pull-request-open.svg",tintColor:R.Color.Green},onAction:()=>(0,R.open)(l.url)},l.id)):(0,E.jsx)(x,{title:"No open pull requests",icon:R.Icon.Info}),(0,E.jsx)(x,{title:"View All Open PRs",icon:R.Icon.MagnifyingGlass,onAction:()=>(0,R.open)(c("pullrequests",`is:pr is:open author:${r.profile.login}`))})]}),(0,E.jsxs)(tt,{title:"Open Issues",subtitle:N(r.activity.issuesOpen),icon:{source:"issue-open.svg",tintColor:R.Color.Green},children:[r.recent?.openIssues&&r.recent.openIssues.length>0?r.recent.openIssues.map(l=>(0,E.jsx)(x,{title:`#${l.number} ${l.title}`,subtitle:l.repository.nameWithOwner,icon:{source:"issue-open.svg",tintColor:R.Color.Green},onAction:()=>(0,R.open)(l.url)},l.id)):(0,E.jsx)(x,{title:"No open issues",icon:R.Icon.Info}),(0,E.jsx)(x,{title:"View All Open Issues",icon:R.Icon.MagnifyingGlass,onAction:()=>(0,R.open)(c("issues",`is:issue is:open author:${r.profile.login}`))})]})]}),r.organizations.length>0&&(0,E.jsx)(fe,{title:"Organizations",children:r.organizations.map(l=>(0,E.jsxs)(tt,{title:l.name??l.login,icon:{source:l.avatarUrl,mask:R.Image.Mask.Circle},children:[(0,E.jsx)(x,{title:"Open Profile",subtitle:`@${l.login}`,icon:R.Icon.Globe,onAction:()=>(0,R.open)(l.url)}),(0,E.jsx)(x,{title:"Repositories",icon:R.Icon.Folder,onAction:()=>(0,R.open)(`https://github.com/orgs/${l.login}/repositories`)}),(0,E.jsx)(x,{title:"People",icon:R.Icon.PersonCircle,onAction:()=>(0,R.open)(`https://github.com/orgs/${l.login}/people`)}),(0,E.jsx)(x,{title:"Projects",icon:R.Icon.Goal,onAction:()=>(0,R.open)(`https://github.com/orgs/${l.login}/projects`)})]},l.id))}),r.rateLimit&&(0,E.jsx)(fe,{title:"API",children:(0,E.jsx)(x,{title:"Rate Limit",subtitle:`${N(r.rateLimit.remaining)} / ${N(r.rateLimit.limit)}`,icon:R.Icon.Gauge,tooltip:`Resets ${Wl(r.rateLimit.resetAt)}`,onAction:()=>(0,R.open)("https://docs.github.com/en/rest/rate-limit")})})]}),(0,E.jsxs)(fe,{children:[(0,E.jsx)(x,{title:"Open Profile on GitHub",icon:R.Icon.Globe,shortcut:R.Keyboard.Shortcut.Common.Open,onAction:()=>(0,R.open)(S)}),(0,E.jsx)(Vr,{})]})]})}var Zl=ai(Jl);
