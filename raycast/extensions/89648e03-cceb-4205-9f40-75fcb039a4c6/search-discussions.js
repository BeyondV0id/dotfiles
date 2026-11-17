"use strict";var Ri=Object.create;var Zt=Object.defineProperty;var Ai=Object.getOwnPropertyDescriptor;var fi=Object.getOwnPropertyNames;var Pi=Object.getPrototypeOf,Ei=Object.prototype.hasOwnProperty;var $a=(e,t,a)=>()=>{if(a)throw a[0];try{return e&&(t=e(e=0)),t}catch(r){throw a=[r],r}};var E=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(a){throw t=0,a}},tt=(e,t)=>{for(var a in t)Zt(e,a,{get:t[a],enumerable:!0})},Jt=(e,t,a,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of fi(t))!Ei.call(e,n)&&n!==a&&Zt(e,n,{get:()=>t[n],enumerable:!(r=Ai(t,n))||r.enumerable});return e},j=(e,t,a)=>(Jt(e,t,"default"),a&&Jt(a,t,"default")),v=(e,t,a)=>(a=e!=null?Ri(Pi(e)):{},Jt(t||!e||!e.__esModule?Zt(a,"default",{value:e,enumerable:!0}):a,e)),Ci=e=>Jt(Zt({},"__esModule",{value:!0}),e);var kr=E(Xt=>{"use strict";Object.defineProperty(Xt,"__esModule",{value:!0});Xt.useDeepMemo=void 0;var Qa=require("react"),hi=require("dequal/lite");function Di(e){let t=(0,Qa.useRef)(e),a=(0,Qa.useRef)(0);return(0,hi.dequal)(e,t.current)||(t.current=e,a.current+=1),(0,Qa.useMemo)(()=>t.current,[a.current])}Xt.useDeepMemo=Di});var Pe=E(ea=>{"use strict";Object.defineProperty(ea,"__esModule",{value:!0});ea.useLatest=void 0;var xi=require("react");function Ui(e){let t=(0,xi.useRef)(e);return t.current=e,t}ea.useLatest=Ui});var Et=E(ye=>{"use strict";var _i=ye&&ye.__createBinding||(Object.create?(function(e,t,a,r){r===void 0&&(r=a);var n=Object.getOwnPropertyDescriptor(t,a);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,n)}):(function(e,t,a,r){r===void 0&&(r=a),e[r]=t[a]})),vi=ye&&ye.__setModuleDefault||(Object.create?(function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}):function(e,t){e.default=t}),jr=ye&&ye.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var a in e)a!=="default"&&Object.prototype.hasOwnProperty.call(e,a)&&_i(t,e,a);return vi(t,e),t};Object.defineProperty(ye,"__esModule",{value:!0});ye.showFailureToast=void 0;var Ti=jr(require("fs")),wi=jr(require("path")),at=require("@raycast/api");function Oi(e,t){let a=e instanceof Error?e.message:String(e);return(0,at.showToast)({style:at.Toast.Style.Failure,title:t?.title??"Something went wrong",message:t?.message??a,primaryAction:t?.primaryAction??Fr(e),secondaryAction:t?.primaryAction?Fr(e):void 0})}ye.showFailureToast=Oi;var Fr=e=>{let t=!0,a="[Extension Name]...",r="";try{let i=JSON.parse(Ti.readFileSync(wi.join(at.environment.assetsPath,"..","package.json"),"utf8"));a=`[${i.title}]...`,r=`https://raycast.com/${i.owner||i.author}/${i.name}`,(!i.owner||i.access==="public")&&(t=!1)}catch{}let n=at.environment.isDevelopment||t,o=e instanceof Error?e?.stack||e?.message||"":String(e);return{title:n?"Copy Logs":"Report Error",onAction(i){i.hide(),n?at.Clipboard.copy(o):(0,at.open)(`https://github.com/raycast/extensions/issues/new?&labels=extension%2Cbug&template=extension_bug_report.yml&title=${encodeURIComponent(a)}&extension-url=${encodeURI(r)}&description=${encodeURIComponent(`#### Error:
\`\`\`
${o}
\`\`\`
`)}`)}}}});var rt=E(ta=>{"use strict";Object.defineProperty(ta,"__esModule",{value:!0});ta.usePromise=void 0;var W=require("react"),Ct=require("@raycast/api"),Bi=kr(),ve=Pe(),Li=Et();function qi(e,t,a){let r=(0,W.useRef)(0),[n,o]=(0,W.useState)({isLoading:!0}),i=(0,ve.useLatest)(e),s=(0,ve.useLatest)(a?.abortable),u=(0,ve.useLatest)(t||[]),p=(0,ve.useLatest)(a?.onError),c=(0,ve.useLatest)(a?.onData),y=(0,ve.useLatest)(a?.onWillExecute),g=(0,ve.useLatest)(a?.failureToastOptions),m=(0,ve.useLatest)(n.data),l=(0,W.useRef)(),S=(0,W.useRef)({page:0}),d=(0,W.useRef)(!1),b=(0,W.useRef)(!0),R=(0,W.useRef)(50),f=(0,W.useCallback)((...V)=>{let _=++r.current;s.current&&(s.current.current?.abort(),s.current.current=new AbortController),y.current?.(V),o(C=>({...C,isLoading:!0}));let se=Ni(i.current)(...V);function ce(C){return C.name=="AbortError"||_===r.current&&(p.current?p.current(C):Ct.environment.launchType!==Ct.LaunchType.Background&&(0,Li.showFailureToast)(C,{title:"Failed to fetch latest data",primaryAction:{title:"Retry",onAction(Q){Q.hide(),l.current?.(...u.current||[])}},...g.current}),o({error:C,isLoading:!1})),C}return typeof se=="function"?(d.current=!0,se(S.current).then(({data:C,hasMore:Q,cursor:Pt})=>(_===r.current&&(S.current&&(S.current.cursor=Pt,S.current.lastItem=C?.[C.length-1]),c.current&&c.current(C,S.current),Q&&(R.current=C.length),b.current=Q,o(Ga=>S.current.page===0?{data:C,isLoading:!1}:{data:(Ga.data||[])?.concat(C),isLoading:!1})),C),C=>(b.current=!1,ce(C)))):(d.current=!1,se.then(C=>(_===r.current&&(c.current&&c.current(C),o({data:C,isLoading:!1})),C),ce))},[s,c,p,u,i,o,l,y,S,g]);l.current=f;let M=(0,W.useCallback)(()=>{S.current={page:0};let V=u.current||[];return f(...V)},[f,u]),P=(0,W.useCallback)(async(V,_)=>{let se;try{if(_?.optimisticUpdate){typeof _?.rollbackOnError!="function"&&_?.rollbackOnError!==!1&&(se=structuredClone(m.current?.value));let ce=_.optimisticUpdate;o(C=>({...C,data:ce(C.data)}))}return await V}catch(ce){if(typeof _?.rollbackOnError=="function"){let C=_.rollbackOnError;o(Q=>({...Q,data:C(Q.data)}))}else _?.optimisticUpdate&&_?.rollbackOnError!==!1&&o(C=>({...C,data:se}));throw ce}finally{_?.shouldRevalidateAfter!==!1&&(Ct.environment.launchType===Ct.LaunchType.Background||Ct.environment.commandMode==="menu-bar"?await M():M())}},[M,m,o]),A=(0,W.useCallback)(()=>{S.current.page+=1;let V=u.current||[];f(...V)},[S,u,f]);(0,W.useEffect)(()=>{S.current={page:0},a?.execute!==!1?f(...t||[]):s.current&&s.current.current?.abort()},[(0,Bi.useDeepMemo)([t,a?.execute,f]),s,S]),(0,W.useEffect)(()=>()=>{s.current&&s.current.current?.abort()},[s]);let x=a?.execute!==!1?n.isLoading:!1,q={...n,isLoading:x},ie=d.current?{pageSize:R.current,hasMore:b.current,onLoadMore:A}:void 0;return{...q,revalidate:M,mutate:P,pagination:ie}}ta.usePromise=qi;function Ni(e){return e===Promise.all||e===Promise.race||e===Promise.resolve||e===Promise.reject?e.bind(Promise):e}});var Te=E(de=>{"use strict";var Vi=de&&de.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(de,"__esModule",{value:!0});de.hash=de.reviver=de.replacer=void 0;var ki=Vi(require("object-hash"));function Fi(e,t){let a=this[e];return a instanceof Date?`__raycast_cached_date__${a.toString()}`:Buffer.isBuffer(a)?`__raycast_cached_buffer__${a.toString("base64")}`:t}de.replacer=Fi;function ji(e,t){return typeof t=="string"&&t.startsWith("__raycast_cached_date__")?new Date(t.replace("__raycast_cached_date__","")):typeof t=="string"&&t.startsWith("__raycast_cached_buffer__")?Buffer.from(t.replace("__raycast_cached_buffer__",""),"base64"):t}de.reviver=ji;function zi(e,t){return(0,ki.default)(e,{replacer:a=>a instanceof URLSearchParams?a.toString():a,...t})}de.hash=zi});var ra=E(aa=>{"use strict";Object.defineProperty(aa,"__esModule",{value:!0});aa.useCachedState=void 0;var Wa=require("react"),Hi=require("@raycast/api"),Ka=Pe(),zr=Te(),Gi=Symbol("cache without namespace"),Hr=new Map;function $i(e,t,a){let r=a?.cacheNamespace||Gi,n=Hr.get(r)||Hr.set(r,new Hi.Cache({namespace:a?.cacheNamespace})).get(r);if(!n)throw new Error("Missing cache");let o=(0,Ka.useLatest)(e),i=(0,Ka.useLatest)(t),s=(0,Wa.useSyncExternalStore)(n.subscribe,()=>{try{return n.get(o.current)}catch(y){console.error("Could not get Cache data:",y);return}}),u=(0,Wa.useMemo)(()=>{if(typeof s<"u"){if(s==="undefined")return;try{return JSON.parse(s,zr.reviver)}catch(y){return console.warn("The cached data is corrupted",y),i.current}}else return i.current},[s,i]),p=(0,Ka.useLatest)(u),c=(0,Wa.useCallback)(y=>{let g=typeof y=="function"?y(p.current):y;if(typeof g>"u")n.set(o.current,"undefined");else{let m=JSON.stringify(g,zr.replacer);n.set(o.current,m)}return g},[n,o,p]);return[u,c]}aa.useCachedState=$i});var Dt=E(na=>{"use strict";Object.defineProperty(na,"__esModule",{value:!0});na.useCachedPromise=void 0;var ht=require("react"),Qi=ra(),Wi=rt(),Ki=Pe(),Gr=Te(),nt=Symbol();function Yi(e,t,a){let{initialData:r,keepPreviousData:n,internal_cacheKeySuffix:o,...i}=a||{},s=(0,ht.useRef)(),[u,p]=(0,Qi.useCachedState)((0,Gr.hash)(t||[])+o,nt,{cacheNamespace:(0,Gr.hash)(e)}),c=(0,ht.useRef)(u!==nt?u:r),y=(0,ht.useRef)(void 0),{mutate:g,revalidate:m,...l}=(0,Wi.usePromise)(e,t||[],{...i,onData(f,M){y.current=M,i.onData&&i.onData(f,M),!(M&&M.page>0)&&(s.current="promise",c.current=f,p(f))}}),S,d=l.pagination;y.current&&y.current.page>0&&l.data?S=l.data:s.current==="promise"?S=c.current:n&&u!==nt?(S=u,d&&(d.hasMore=!0,d.pageSize=u.length)):n&&u===nt?S=c.current:u!==nt?(S=u,d&&(d.hasMore=!0,d.pageSize=u.length)):S=r;let b=(0,Ki.useLatest)(S),R=(0,ht.useCallback)(async(f,M)=>{let P;try{if(M?.optimisticUpdate){typeof M?.rollbackOnError!="function"&&M?.rollbackOnError!==!1&&(P=structuredClone(b.current));let A=M.optimisticUpdate(b.current);s.current="cache",c.current=A,p(A)}return await g(f,{shouldRevalidateAfter:M?.shouldRevalidateAfter})}catch(A){if(typeof M?.rollbackOnError=="function"){let x=M.rollbackOnError(b.current);s.current="cache",c.current=x,p(x)}else M?.optimisticUpdate&&M?.rollbackOnError!==!1&&(s.current="cache",c.current=P,p(P));throw A}},[p,g,b,c,s]);return(0,ht.useEffect)(()=>{u!==nt&&(s.current="cache",c.current=u)},[u]),{data:S,isLoading:l.isLoading,error:l.error,mutate:y.current&&y.current.page>0?g:R,pagination:d,revalidate:m}}na.useCachedPromise=Yi});var rn=E((pe,an)=>{"use strict";Object.defineProperty(pe,"__esModule",{value:!0});function ut(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var ue=ut(require("stream")),Kr=ut(require("http")),ia=ut(require("url")),Yr=ut(require("whatwg-url")),Ji=ut(require("https")),ze=ut(require("zlib")),Zi=ue.Readable,Ee=Symbol("buffer"),Ya=Symbol("type"),Ut=class e{constructor(){this[Ya]="";let t=arguments[0],a=arguments[1],r=[],n=0;if(t){let i=t,s=Number(i.length);for(let u=0;u<s;u++){let p=i[u],c;p instanceof Buffer?c=p:ArrayBuffer.isView(p)?c=Buffer.from(p.buffer,p.byteOffset,p.byteLength):p instanceof ArrayBuffer?c=Buffer.from(p):p instanceof e?c=p[Ee]:c=Buffer.from(typeof p=="string"?p:String(p)),n+=c.length,r.push(c)}}this[Ee]=Buffer.concat(r);let o=a&&a.type!==void 0&&String(a.type).toLowerCase();o&&!/[^\u0020-\u007E]/.test(o)&&(this[Ya]=o)}get size(){return this[Ee].length}get type(){return this[Ya]}text(){return Promise.resolve(this[Ee].toString())}arrayBuffer(){let t=this[Ee],a=t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength);return Promise.resolve(a)}stream(){let t=new Zi;return t._read=function(){},t.push(this[Ee]),t.push(null),t}toString(){return"[object Blob]"}slice(){let t=this.size,a=arguments[0],r=arguments[1],n,o;a===void 0?n=0:a<0?n=Math.max(t+a,0):n=Math.min(a,t),r===void 0?o=t:r<0?o=Math.max(t+r,0):o=Math.min(r,t);let i=Math.max(o-n,0),u=this[Ee].slice(n,n+i),p=new e([],{type:arguments[2]});return p[Ee]=u,p}};Object.defineProperties(Ut.prototype,{size:{enumerable:!0},type:{enumerable:!0},slice:{enumerable:!0}});Object.defineProperty(Ut.prototype,Symbol.toStringTag,{value:"Blob",writable:!1,enumerable:!1,configurable:!0});function L(e,t,a){Error.call(this,e),this.message=e,this.type=t,a&&(this.code=this.errno=a.code),Error.captureStackTrace(this,this.constructor)}L.prototype=Object.create(Error.prototype);L.prototype.constructor=L;L.prototype.name="FetchError";var er;try{er=require("encoding").convert}catch{}var he=Symbol("Body internals"),$r=ue.PassThrough;function T(e){var t=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.size;let n=r===void 0?0:r;var o=a.timeout;let i=o===void 0?0:o;e==null?e=null:Jr(e)?e=Buffer.from(e.toString()):vt(e)||Buffer.isBuffer(e)||(Object.prototype.toString.call(e)==="[object ArrayBuffer]"?e=Buffer.from(e):ArrayBuffer.isView(e)?e=Buffer.from(e.buffer,e.byteOffset,e.byteLength):e instanceof ue||(e=Buffer.from(String(e)))),this[he]={body:e,disturbed:!1,error:null},this.size=n,this.timeout=i,e instanceof ue&&e.on("error",function(s){let u=s.name==="AbortError"?s:new L(`Invalid response body while trying to fetch ${t.url}: ${s.message}`,"system",s);t[he].error=u})}T.prototype={get body(){return this[he].body},get bodyUsed(){return this[he].disturbed},arrayBuffer(){return ot.call(this).then(function(e){return e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength)})},blob(){let e=this.headers&&this.headers.get("content-type")||"";return ot.call(this).then(function(t){return Object.assign(new Ut([],{type:e.toLowerCase()}),{[Ee]:t})})},json(){var e=this;return ot.call(this).then(function(t){try{return JSON.parse(t.toString())}catch(a){return T.Promise.reject(new L(`invalid json response body at ${e.url} reason: ${a.message}`,"invalid-json"))}})},text(){return ot.call(this).then(function(e){return e.toString()})},buffer(){return ot.call(this)},textConverted(){var e=this;return ot.call(this).then(function(t){return Xi(t,e.headers)})}};Object.defineProperties(T.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0}});T.mixIn=function(e){for(let t of Object.getOwnPropertyNames(T.prototype))if(!(t in e)){let a=Object.getOwnPropertyDescriptor(T.prototype,t);Object.defineProperty(e,t,a)}};function ot(){var e=this;if(this[he].disturbed)return T.Promise.reject(new TypeError(`body used already for: ${this.url}`));if(this[he].disturbed=!0,this[he].error)return T.Promise.reject(this[he].error);let t=this.body;if(t===null)return T.Promise.resolve(Buffer.alloc(0));if(vt(t)&&(t=t.stream()),Buffer.isBuffer(t))return T.Promise.resolve(t);if(!(t instanceof ue))return T.Promise.resolve(Buffer.alloc(0));let a=[],r=0,n=!1;return new T.Promise(function(o,i){let s;e.timeout&&(s=setTimeout(function(){n=!0,i(new L(`Response timeout while trying to fetch ${e.url} (over ${e.timeout}ms)`,"body-timeout"))},e.timeout)),t.on("error",function(u){u.name==="AbortError"?(n=!0,i(u)):i(new L(`Invalid response body while trying to fetch ${e.url}: ${u.message}`,"system",u))}),t.on("data",function(u){if(!(n||u===null)){if(e.size&&r+u.length>e.size){n=!0,i(new L(`content size at ${e.url} over limit: ${e.size}`,"max-size"));return}r+=u.length,a.push(u)}}),t.on("end",function(){if(!n){clearTimeout(s);try{o(Buffer.concat(a,r))}catch(u){i(new L(`Could not create Buffer from response body for ${e.url}: ${u.message}`,"system",u))}}})})}function Xi(e,t){if(typeof er!="function")throw new Error("The package `encoding` must be installed to use the textConverted() function");let a=t.get("content-type"),r="utf-8",n,o;return a&&(n=/charset=([^;]*)/i.exec(a)),o=e.slice(0,1024).toString(),!n&&o&&(n=/<meta.+?charset=(['"])(.+?)\1/i.exec(o)),!n&&o&&(n=/<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(o),n||(n=/<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(o),n&&n.pop()),n&&(n=/charset=(.*)/i.exec(n.pop()))),!n&&o&&(n=/<\?xml.+?encoding=(['"])(.+?)\1/i.exec(o)),n&&(r=n.pop(),(r==="gb2312"||r==="gbk")&&(r="gb18030")),er(e,"UTF-8",r).toString()}function Jr(e){return typeof e!="object"||typeof e.append!="function"||typeof e.delete!="function"||typeof e.get!="function"||typeof e.getAll!="function"||typeof e.has!="function"||typeof e.set!="function"?!1:e.constructor.name==="URLSearchParams"||Object.prototype.toString.call(e)==="[object URLSearchParams]"||typeof e.sort=="function"}function vt(e){return typeof e=="object"&&typeof e.arrayBuffer=="function"&&typeof e.type=="string"&&typeof e.stream=="function"&&typeof e.constructor=="function"&&typeof e.constructor.name=="string"&&/^(Blob|File)$/.test(e.constructor.name)&&/^(Blob|File)$/.test(e[Symbol.toStringTag])}function Zr(e){let t,a,r=e.body;if(e.bodyUsed)throw new Error("cannot clone body after it is used");return r instanceof ue&&typeof r.getBoundary!="function"&&(t=new $r,a=new $r,r.pipe(t),r.pipe(a),e[he].body=t,r=a),r}function Xr(e){return e===null?null:typeof e=="string"?"text/plain;charset=UTF-8":Jr(e)?"application/x-www-form-urlencoded;charset=UTF-8":vt(e)?e.type||null:Buffer.isBuffer(e)||Object.prototype.toString.call(e)==="[object ArrayBuffer]"||ArrayBuffer.isView(e)?null:typeof e.getBoundary=="function"?`multipart/form-data;boundary=${e.getBoundary()}`:e instanceof ue?null:"text/plain;charset=UTF-8"}function en(e){let t=e.body;return t===null?0:vt(t)?t.size:Buffer.isBuffer(t)?t.length:t&&typeof t.getLengthSync=="function"&&(t._lengthRetrievers&&t._lengthRetrievers.length==0||t.hasKnownLength&&t.hasKnownLength())?t.getLengthSync():null}function es(e,t){let a=t.body;a===null?e.end():vt(a)?a.stream().pipe(e):Buffer.isBuffer(a)?(e.write(a),e.end()):a.pipe(e)}T.Promise=global.Promise;var tn=/[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/,tr=/[^\t\x20-\x7e\x80-\xff]/;function xt(e){if(e=`${e}`,tn.test(e)||e==="")throw new TypeError(`${e} is not a legal HTTP header name`)}function Qr(e){if(e=`${e}`,tr.test(e))throw new TypeError(`${e} is not a legal HTTP header value`)}function it(e,t){t=t.toLowerCase();for(let a in e)if(a.toLowerCase()===t)return a}var U=Symbol("map"),te=class e{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:void 0;if(this[U]=Object.create(null),t instanceof e){let a=t.raw(),r=Object.keys(a);for(let n of r)for(let o of a[n])this.append(n,o);return}if(t!=null)if(typeof t=="object"){let a=t[Symbol.iterator];if(a!=null){if(typeof a!="function")throw new TypeError("Header pairs must be iterable");let r=[];for(let n of t){if(typeof n!="object"||typeof n[Symbol.iterator]!="function")throw new TypeError("Each header pair must be iterable");r.push(Array.from(n))}for(let n of r){if(n.length!==2)throw new TypeError("Each header pair must be a name/value tuple");this.append(n[0],n[1])}}else for(let r of Object.keys(t)){let n=t[r];this.append(r,n)}}else throw new TypeError("Provided initializer must be an object")}get(t){t=`${t}`,xt(t);let a=it(this[U],t);return a===void 0?null:this[U][a].join(", ")}forEach(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:void 0,r=ar(this),n=0;for(;n<r.length;){var o=r[n];let i=o[0],s=o[1];t.call(a,s,i,this),r=ar(this),n++}}set(t,a){t=`${t}`,a=`${a}`,xt(t),Qr(a);let r=it(this[U],t);this[U][r!==void 0?r:t]=[a]}append(t,a){t=`${t}`,a=`${a}`,xt(t),Qr(a);let r=it(this[U],t);r!==void 0?this[U][r].push(a):this[U][t]=[a]}has(t){return t=`${t}`,xt(t),it(this[U],t)!==void 0}delete(t){t=`${t}`,xt(t);let a=it(this[U],t);a!==void 0&&delete this[U][a]}raw(){return this[U]}keys(){return Ja(this,"key")}values(){return Ja(this,"value")}[Symbol.iterator](){return Ja(this,"key+value")}};te.prototype.entries=te.prototype[Symbol.iterator];Object.defineProperty(te.prototype,Symbol.toStringTag,{value:"Headers",writable:!1,enumerable:!1,configurable:!0});Object.defineProperties(te.prototype,{get:{enumerable:!0},forEach:{enumerable:!0},set:{enumerable:!0},append:{enumerable:!0},has:{enumerable:!0},delete:{enumerable:!0},keys:{enumerable:!0},values:{enumerable:!0},entries:{enumerable:!0}});function ar(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"key+value";return Object.keys(e[U]).sort().map(t==="key"?function(r){return r.toLowerCase()}:t==="value"?function(r){return e[U][r].join(", ")}:function(r){return[r.toLowerCase(),e[U][r].join(", ")]})}var rr=Symbol("internal");function Ja(e,t){let a=Object.create(nr);return a[rr]={target:e,kind:t,index:0},a}var nr=Object.setPrototypeOf({next(){if(!this||Object.getPrototypeOf(this)!==nr)throw new TypeError("Value of `this` is not a HeadersIterator");var e=this[rr];let t=e.target,a=e.kind,r=e.index,n=ar(t,a),o=n.length;return r>=o?{value:void 0,done:!0}:(this[rr].index=r+1,{value:n[r],done:!1})}},Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));Object.defineProperty(nr,Symbol.toStringTag,{value:"HeadersIterator",writable:!1,enumerable:!1,configurable:!0});function ts(e){let t=Object.assign({__proto__:null},e[U]),a=it(e[U],"Host");return a!==void 0&&(t[a]=t[a][0]),t}function as(e){let t=new te;for(let a of Object.keys(e))if(!tn.test(a))if(Array.isArray(e[a]))for(let r of e[a])tr.test(r)||(t[U][a]===void 0?t[U][a]=[r]:t[U][a].push(r));else tr.test(e[a])||(t[U][a]=[e[a]]);return t}var we=Symbol("Response internals"),rs=Kr.STATUS_CODES,ee=class e{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};T.call(this,t,a);let r=a.status||200,n=new te(a.headers);if(t!=null&&!n.has("Content-Type")){let o=Xr(t);o&&n.append("Content-Type",o)}this[we]={url:a.url,status:r,statusText:a.statusText||rs[r],headers:n,counter:a.counter}}get url(){return this[we].url||""}get status(){return this[we].status}get ok(){return this[we].status>=200&&this[we].status<300}get redirected(){return this[we].counter>0}get statusText(){return this[we].statusText}get headers(){return this[we].headers}clone(){return new e(Zr(this),{url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected})}};T.mixIn(ee.prototype);Object.defineProperties(ee.prototype,{url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}});Object.defineProperty(ee.prototype,Symbol.toStringTag,{value:"Response",writable:!1,enumerable:!1,configurable:!0});var Ce=Symbol("Request internals"),ns=ia.URL||Yr.URL,os=ia.parse,is=ia.format;function Za(e){return/^[a-zA-Z][a-zA-Z\d+\-.]*:/.exec(e)&&(e=new ns(e).toString()),os(e)}var ss="destroy"in ue.Readable.prototype;function oa(e){return typeof e=="object"&&typeof e[Ce]=="object"}function us(e){let t=e&&typeof e=="object"&&Object.getPrototypeOf(e);return!!(t&&t.constructor.name==="AbortSignal")}var Be=class e{constructor(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r;oa(t)?r=Za(t.url):(t&&t.href?r=Za(t.href):r=Za(`${t}`),t={});let n=a.method||t.method||"GET";if(n=n.toUpperCase(),(a.body!=null||oa(t)&&t.body!==null)&&(n==="GET"||n==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");let o=a.body!=null?a.body:oa(t)&&t.body!==null?Zr(t):null;T.call(this,o,{timeout:a.timeout||t.timeout||0,size:a.size||t.size||0});let i=new te(a.headers||t.headers||{});if(o!=null&&!i.has("Content-Type")){let u=Xr(o);u&&i.append("Content-Type",u)}let s=oa(t)?t.signal:null;if("signal"in a&&(s=a.signal),s!=null&&!us(s))throw new TypeError("Expected signal to be an instanceof AbortSignal");this[Ce]={method:n,redirect:a.redirect||t.redirect||"follow",headers:i,parsedURL:r,signal:s},this.follow=a.follow!==void 0?a.follow:t.follow!==void 0?t.follow:20,this.compress=a.compress!==void 0?a.compress:t.compress!==void 0?t.compress:!0,this.counter=a.counter||t.counter||0,this.agent=a.agent||t.agent}get method(){return this[Ce].method}get url(){return is(this[Ce].parsedURL)}get headers(){return this[Ce].headers}get redirect(){return this[Ce].redirect}get signal(){return this[Ce].signal}clone(){return new e(this)}};T.mixIn(Be.prototype);Object.defineProperty(Be.prototype,Symbol.toStringTag,{value:"Request",writable:!1,enumerable:!1,configurable:!0});Object.defineProperties(Be.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0}});function ps(e){let t=e[Ce].parsedURL,a=new te(e[Ce].headers);if(a.has("Accept")||a.set("Accept","*/*"),!t.protocol||!t.hostname)throw new TypeError("Only absolute URLs are supported");if(!/^https?:$/.test(t.protocol))throw new TypeError("Only HTTP(S) protocols are supported");if(e.signal&&e.body instanceof ue.Readable&&!ss)throw new Error("Cancellation of streamed requests with AbortSignal is not supported in node < 8");let r=null;if(e.body==null&&/^(POST|PUT)$/i.test(e.method)&&(r="0"),e.body!=null){let o=en(e);typeof o=="number"&&(r=String(o))}r&&a.set("Content-Length",r),a.has("User-Agent")||a.set("User-Agent","node-fetch/1.0 (+https://github.com/bitinn/node-fetch)"),e.compress&&!a.has("Accept-Encoding")&&a.set("Accept-Encoding","gzip,deflate");let n=e.agent;return typeof n=="function"&&(n=n(t)),Object.assign({},t,{method:e.method,headers:ts(a),agent:n})}function st(e){Error.call(this,e),this.type="aborted",this.message=e,Error.captureStackTrace(this,this.constructor)}st.prototype=Object.create(Error.prototype);st.prototype.constructor=st;st.prototype.name="AbortError";var _t=ia.URL||Yr.URL,Wr=ue.PassThrough,ls=function(t,a){let r=new _t(a).hostname,n=new _t(t).hostname;return r===n||r[r.length-n.length-1]==="."&&r.endsWith(n)},cs=function(t,a){let r=new _t(a).protocol,n=new _t(t).protocol;return r===n};function Oe(e,t){if(!Oe.Promise)throw new Error("native promise missing, set fetch.Promise to your favorite alternative");return T.Promise=Oe.Promise,new Oe.Promise(function(a,r){let n=new Be(e,t),o=ps(n),i=(o.protocol==="https:"?Ji:Kr).request,s=n.signal,u=null,p=function(){let S=new st("The user aborted a request.");r(S),n.body&&n.body instanceof ue.Readable&&Xa(n.body,S),!(!u||!u.body)&&u.body.emit("error",S)};if(s&&s.aborted){p();return}let c=function(){p(),m()},y=i(o),g;s&&s.addEventListener("abort",c);function m(){y.abort(),s&&s.removeEventListener("abort",c),clearTimeout(g)}n.timeout&&y.once("socket",function(l){g=setTimeout(function(){r(new L(`network timeout at: ${n.url}`,"request-timeout")),m()},n.timeout)}),y.on("error",function(l){r(new L(`request to ${n.url} failed, reason: ${l.message}`,"system",l)),u&&u.body&&Xa(u.body,l),m()}),ys(y,function(l){s&&s.aborted||u&&u.body&&Xa(u.body,l)}),parseInt(process.version.substring(1))<14&&y.on("socket",function(l){l.addListener("close",function(S){let d=l.listenerCount("data")>0;if(u&&d&&!S&&!(s&&s.aborted)){let b=new Error("Premature close");b.code="ERR_STREAM_PREMATURE_CLOSE",u.body.emit("error",b)}})}),y.on("response",function(l){clearTimeout(g);let S=as(l.headers);if(Oe.isRedirect(l.statusCode)){let M=S.get("Location"),P=null;try{P=M===null?null:new _t(M,n.url).toString()}catch{if(n.redirect!=="manual"){r(new L(`uri requested responds with an invalid redirect URL: ${M}`,"invalid-redirect")),m();return}}switch(n.redirect){case"error":r(new L(`uri requested responds with a redirect, redirect mode is set to error: ${n.url}`,"no-redirect")),m();return;case"manual":if(P!==null)try{S.set("Location",P)}catch(x){r(x)}break;case"follow":if(P===null)break;if(n.counter>=n.follow){r(new L(`maximum redirect reached at: ${n.url}`,"max-redirect")),m();return}let A={headers:new te(n.headers),follow:n.follow,counter:n.counter+1,agent:n.agent,compress:n.compress,method:n.method,body:n.body,signal:n.signal,timeout:n.timeout,size:n.size};if(!ls(n.url,P)||!cs(n.url,P))for(let x of["authorization","www-authenticate","cookie","cookie2"])A.headers.delete(x);if(l.statusCode!==303&&n.body&&en(n)===null){r(new L("Cannot follow redirect with body being a readable stream","unsupported-redirect")),m();return}(l.statusCode===303||(l.statusCode===301||l.statusCode===302)&&n.method==="POST")&&(A.method="GET",A.body=void 0,A.headers.delete("content-length")),a(Oe(new Be(P,A))),m();return}}l.once("end",function(){s&&s.removeEventListener("abort",c)});let d=l.pipe(new Wr),b={url:n.url,status:l.statusCode,statusText:l.statusMessage,headers:S,size:n.size,timeout:n.timeout,counter:n.counter},R=S.get("Content-Encoding");if(!n.compress||n.method==="HEAD"||R===null||l.statusCode===204||l.statusCode===304){u=new ee(d,b),a(u);return}let f={flush:ze.Z_SYNC_FLUSH,finishFlush:ze.Z_SYNC_FLUSH};if(R=="gzip"||R=="x-gzip"){d=d.pipe(ze.createGunzip(f)),u=new ee(d,b),a(u);return}if(R=="deflate"||R=="x-deflate"){let M=l.pipe(new Wr);M.once("data",function(P){(P[0]&15)===8?d=d.pipe(ze.createInflate()):d=d.pipe(ze.createInflateRaw()),u=new ee(d,b),a(u)}),M.on("end",function(){u||(u=new ee(d,b),a(u))});return}if(R=="br"&&typeof ze.createBrotliDecompress=="function"){d=d.pipe(ze.createBrotliDecompress()),u=new ee(d,b),a(u);return}u=new ee(d,b),a(u)}),es(y,n)})}function ys(e,t){let a;e.on("socket",function(r){a=r}),e.on("response",function(r){let n=r.headers;n["transfer-encoding"]==="chunked"&&!n["content-length"]&&r.once("close",function(o){if(a&&a.listenerCount("data")>0&&!o){let s=new Error("Premature close");s.code="ERR_STREAM_PREMATURE_CLOSE",t(s)}})})}function Xa(e,t){e.destroy?e.destroy(t):(e.emit("error",t),e.end())}Oe.isRedirect=function(e){return e===301||e===302||e===303||e===307||e===308};Oe.Promise=global.Promise;an.exports=pe=Oe;Object.defineProperty(pe,"__esModule",{value:!0});pe.default=pe;pe.Headers=te;pe.Request=Be;pe.Response=ee;pe.FetchError=L;pe.AbortError=st});var wt=E((He,nn)=>{var Tt=rn(),ds=Tt.default||Tt,sa=function(e,t){return/^\/\//.test(e)&&(e="https:"+e),ds.call(this,e,t)};sa.ponyfill=!0;nn.exports=He=sa;He.fetch=sa;He.Headers=Tt.Headers;He.Request=Tt.Request;He.Response=Tt.Response;He.default=sa});var or=E(ua=>{"use strict";Object.defineProperty(ua,"__esModule",{value:!0});ua.isJSON=void 0;function Ss(e){if(e){let t=Is(e);if(!t)return!1;if(t.subtype==="json"||t.suffix==="json"||t.suffix&&/\bjson\b/i.test(t.suffix)||t.subtype&&/\bjson\b/i.test(t.subtype))return!0}return!1}ua.isJSON=Ss;var bs=/^([A-Za-z0-9][A-Za-z0-9!#$&^_-]{0,126})\/([A-Za-z0-9][A-Za-z0-9!#$&^_.+-]{0,126});?$/;function Is(e){let t=e.indexOf(";"),a=t!==-1?e.slice(0,t).trim():e.trim(),r=bs.exec(a.toLowerCase().toLowerCase());if(!r)return;let n=r[1],o=r[2],i,s=o.lastIndexOf("+");return s!==-1&&(i=o.substring(s+1),o=o.substring(0,s)),{type:n,subtype:o,suffix:i}}});var pn=E(pa=>{"use strict";Object.defineProperty(pa,"__esModule",{value:!0});pa.useFetch=void 0;var pt=require("react"),gs=Dt(),on=Pe(),sn=wt(),Ms=or(),un=Te();async function ms(e){if(!e.ok)throw new Error(e.statusText);let t=e.headers.get("content-type");return t&&(0,Ms.isJSON)(t)?await e.json():await e.text()}function Rs(e){return{data:e,hasMore:!1}}function As(e,t){let{parseResponse:a,mapResult:r,initialData:n,execute:o,keepPreviousData:i,onError:s,onData:u,onWillExecute:p,failureToastOptions:c,...y}=t||{},g={initialData:n,execute:o,keepPreviousData:i,onError:s,onData:u,onWillExecute:p,failureToastOptions:c},m=(0,on.useLatest)(a||ms),l=(0,on.useLatest)(r||Rs),S=(0,pt.useRef)(),d=(0,pt.useRef)(),b=typeof e=="function"?e({page:0}):void 0;(!S.current||typeof d.current>"u"||d.current!==b)&&(S.current=e),d.current=b;let R=(0,pt.useRef)(),f=(0,pt.useCallback)((A,x)=>async q=>{let ie=await(0,sn.fetch)(A(q),{signal:R.current?.signal,...x}),V=await m.current(ie);return l.current?.(V)},[m,l]),M=(0,pt.useCallback)(async(A,x)=>{let q=await(0,sn.fetch)(A,{signal:R.current?.signal,...x}),ie=await m.current(q);return l.current(ie)?.data},[m,l]),P=(0,pt.useMemo)(()=>d.current?f:M,[d,M,f]);return(0,gs.useCachedPromise)(P,[S.current,y],{...g,internal_cacheKeySuffix:d.current+(0,un.hash)(l.current)+(0,un.hash)(m.current),abortable:R})}pa.useFetch=As});var la=E(ae=>{"use strict";var fs=ae&&ae.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ae,"__esModule",{value:!0});ae.defaultParsing=ae.handleOutput=ae.getSpawnedResult=ae.getSpawnedPromise=void 0;var Ps=require("node:buffer"),yn=fs(require("node:stream")),Es=require("node:util"),Cs=require("signal-exit");function hs(e,{timeout:t}={}){let a=new Promise((s,u)=>{e.on("exit",(p,c)=>{s({exitCode:p,signal:c,timedOut:!1})}),e.on("error",p=>{u(p)}),e.stdin&&e.stdin.on("error",p=>{u(p)})});if(t===0||t===void 0)return a;let r,n=new Promise((s,u)=>{r=setTimeout(()=>{e.kill("SIGTERM"),u(Object.assign(new Error("Timed out"),{timedOut:!0,signal:"SIGTERM"}))},t)}),o=a.finally(()=>{clearTimeout(r)}),i=(0,Cs.onExit)(()=>{e.kill()});return Promise.race([n,o]).finally(()=>i())}ae.getSpawnedPromise=hs;var ir=class extends Error{constructor(){super("The output is too big"),this.name="MaxBufferError"}},Ds=(0,Es.promisify)(yn.default.pipeline);function xs(e){let{encoding:t}=e,a=t==="buffer",r=new yn.default.PassThrough({objectMode:!1});t&&t!=="buffer"&&r.setEncoding(t);let n=0,o=[];return r.on("data",i=>{o.push(i),n+=i.length}),r.getBufferedValue=()=>a?Buffer.concat(o,n):o.join(""),r.getBufferedLength=()=>n,r}async function ln(e,t){let a=xs(t);return await new Promise((r,n)=>{let o=i=>{i&&a.getBufferedLength()<=Ps.constants.MAX_LENGTH&&(i.bufferedData=a.getBufferedValue()),n(i)};(async()=>{try{await Ds(e,a),r()}catch(i){o(i)}})(),a.on("data",()=>{a.getBufferedLength()>1e3*1e3*80&&o(new ir)})}),a.getBufferedValue()}async function cn(e,t){e.destroy();try{return await t}catch(a){return a.bufferedData}}async function Us({stdout:e,stderr:t},{encoding:a},r){let n=ln(e,{encoding:a}),o=ln(t,{encoding:a});try{return await Promise.all([r,n,o])}catch(i){return Promise.all([{error:i,exitCode:null,signal:i.signal,timedOut:i.timedOut||!1},cn(e,n),cn(t,o)])}}ae.getSpawnedResult=Us;function _s(e){let t=typeof e=="string"?`
`:10,a=typeof e=="string"?"\r":13;return e[e.length-1]===t&&(e=e.slice(0,-1)),e[e.length-1]===a&&(e=e.slice(0,-1)),e}function vs(e,t){return e.stripFinalNewline?_s(t):t}ae.handleOutput=vs;var Ts=({timedOut:e,timeout:t,signal:a,exitCode:r})=>e?`timed out after ${t} milliseconds`:a!=null?`was killed with ${a}`:r!=null?`failed with exit code ${r}`:"failed",ws=({stdout:e,stderr:t,error:a,signal:r,exitCode:n,command:o,timedOut:i,options:s,parentError:u})=>{let c=`Command ${Ts({timedOut:i,timeout:s?.timeout,signal:r,exitCode:n})}: ${o}`,y=a?`${c}
${a.message}`:c,g=[y,t,e].filter(Boolean).join(`
`);return a?a.originalMessage=a.message:a=u,a.message=g,a.shortMessage=y,a.command=o,a.exitCode=n,a.signal=r,a.stdout=e,a.stderr=t,"bufferedData"in a&&delete a.bufferedData,a};function Os({stdout:e,stderr:t,error:a,exitCode:r,signal:n,timedOut:o,command:i,options:s,parentError:u}){if(a||r!==0||n!==null)throw ws({error:a,exitCode:r,signal:n,stdout:e,stderr:t,command:i,timedOut:o,options:s,parentError:u});return e}ae.defaultParsing=Os});var Sn=E(lt=>{"use strict";var Bs=lt&&lt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(lt,"__esModule",{value:!0});lt.useExec=void 0;var Ls=Bs(require("node:child_process")),dn=require("react"),qs=Dt(),Ns=Pe(),Ot=la(),Vs=/ +/g;function ks(e,t){if(t)return[e,...t];let a=[];for(let r of e.trim().split(Vs)){let n=a[a.length-1];n&&n.endsWith("\\")?a[a.length-1]=`${n.slice(0,-1)} ${r}`:a.push(r)}return a}function Fs(e,t,a){let{parseOutput:r,input:n,onData:o,onWillExecute:i,initialData:s,execute:u,keepPreviousData:p,onError:c,failureToastOptions:y,...g}=Array.isArray(t)?a||{}:t||{},m={initialData:s,execute:u,keepPreviousData:p,onError:c,onData:o,onWillExecute:i,failureToastOptions:y},l=(0,dn.useRef)(),S=(0,Ns.useLatest)(r||Ot.defaultParsing),d=(0,dn.useCallback)(async(b,R,f,M)=>{let[P,...A]=ks(b,R),x=[P,...A].join(" "),q={stripFinalNewline:!0,...f,timeout:f?.timeout||1e4,signal:l.current?.signal,encoding:f?.encoding===null?"buffer":f?.encoding||"utf8",env:{PATH:"/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin",...process.env,...f?.env}},ie=Ls.default.spawn(P,A,q),V=(0,Ot.getSpawnedPromise)(ie,q);M&&ie.stdin.end(M);let[{error:_,exitCode:se,signal:ce,timedOut:C},Q,Pt]=await(0,Ot.getSpawnedResult)(ie,q,V),Ga=(0,Ot.handleOutput)(q,Q),mi=(0,Ot.handleOutput)(q,Pt);return S.current({stdout:Ga,stderr:mi,error:_,exitCode:se,signal:ce,timedOut:C,command:x,options:q,parentError:new Error})},[S]);return(0,qs.useCachedPromise)(d,[e,Array.isArray(t)?t:[],g,n],{...m,abortable:l})}lt.useExec=Fs});var Mn=E(ct=>{"use strict";var ya=ct&&ct.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ct,"__esModule",{value:!0});ct.useStreamJSON=void 0;var js=require("@raycast/api"),bn=ya(wt()),qt=require("node:fs"),sr=require("node:fs/promises"),ca=require("node:path"),In=require("node:stream/promises"),Bt=require("react"),zs=ya(require("stream-chain")),Hs=require("stream-json"),Gs=ya(require("stream-json/filters/Pick")),$s=ya(require("stream-json/streamers/StreamArray")),gn=or(),Qs=Dt(),Ws=Te();async function Lt(e,t,a){if(typeof e=="object"||e.startsWith("http://")||e.startsWith("https://"))return await Ks(e,t,a);if(e.startsWith("file://"))return await Ys((0,ca.normalize)(decodeURIComponent(new URL(e).pathname)),t,a?.signal?a.signal:void 0);throw new Error("Only HTTP(S) or file URLs are supported")}async function Ks(e,t,a){let r=await(0,bn.default)(e,a);if(!r.ok)throw new Error("Failed to fetch URL");if(!(0,gn.isJSON)(r.headers.get("content-type")))throw new Error("URL does not return JSON");if(!r.body)throw new Error("Failed to retrieve expected JSON content: Response body is missing or inaccessible.");await(0,In.pipeline)(r.body,(0,qt.createWriteStream)(t),a?.signal?{signal:a.signal}:void 0)}async function Ys(e,t,a){await(0,In.pipeline)((0,qt.createReadStream)(e),(0,qt.createWriteStream)(t),a?{signal:a}:void 0)}async function Js(e,t,a,r,n){let o=(0,ca.join)(t,a);try{await(0,sr.stat)(t)}catch{(0,qt.mkdirSync)(t,{recursive:!0}),await Lt(e,o,n);return}if(r){await Lt(e,o,n);return}let i;try{i=await(0,sr.stat)(o)}catch{await Lt(e,o,n);return}if(typeof e=="object"||e.startsWith("http://")||e.startsWith("https://")){let s=await(0,bn.default)(e,{...n,method:"HEAD"});if(!s.ok)throw new Error("Could not fetch URL");if(!(0,gn.isJSON)(s.headers.get("content-type")))throw new Error("URL does not return JSON");let u=Date.parse(s.headers.get("last-modified")??"");if(i.size===0||Number.isNaN(u)||u>i.mtimeMs){await Lt(e,o,n);return}}else if(e.startsWith("file://"))try{(await(0,sr.stat)((0,ca.normalize)(decodeURIComponent(new URL(e).pathname)))).mtimeMs>i.mtimeMs&&await Lt(e,o,n)}catch{throw new Error("Source file could not be read")}else throw new Error("Only HTTP(S) or file URLs are supported")}async function*Zs(e,t,a,r,n,o){let i=[],s=new zs.default([(0,qt.createReadStream)(e),r?Gs.default.withParser({filter:r}):(0,Hs.parser)(),new $s.default,u=>o?.(u.value)??u.value]);a?.addEventListener("abort",()=>{s.destroy()});try{for await(let u of s){if(a?.aborted)return[];(!n||n(u))&&i.push(u),i.length>=t&&(yield i,i=[])}}catch(u){throw s.destroy(),u}return i.length>0&&(yield i),[]}function Xs(e,t){let{initialData:a,execute:r,keepPreviousData:n,onError:o,onData:i,onWillExecute:s,failureToastOptions:u,dataPath:p,filter:c,transform:y,pageSize:g=20,...m}=t??{},l=(0,Bt.useRef)(),S=(0,Bt.useRef)(),d={initialData:a,execute:r,keepPreviousData:n,onError:o,onData:i,onWillExecute:s,failureToastOptions:u},b=(0,Bt.useRef)(null),R=(0,Bt.useRef)(null),f=(0,Bt.useRef)(!1);return(0,Qs.useCachedPromise)((M,P,A,x,q,ie)=>async({page:V})=>{let _=(0,Ws.hash)(M)+".json",se=js.environment.supportPath;if(V===0){R.current?.abort(),R.current=new AbortController;let Q=(0,ca.join)(se,_),Pt=!!(l.current&&l.current!==M&&S.current&&S.current===Q);l.current=M,S.current=Q,await Js(M,se,_,Pt,{...A,signal:R.current?.signal}),b.current=Zs(Q,P,R.current?.signal,x,q,ie)}if(!b.current)return{hasMore:f.current,data:[]};let{value:ce,done:C}=await b.current.next();return f.current=!C,{hasMore:f.current,data:ce??[]}},[e,g,m,p,c,y],d)}ct.useStreamJSON=Xs});var pr=E(Se=>{"use strict";var ur=Se&&Se.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Se,"__esModule",{value:!0});Se.baseExecuteSQL=Se.isPermissionError=Se.PermissionError=void 0;var eu=require("node:fs"),da=require("node:fs/promises"),tu=ur(require("node:os")),mn=ur(require("node:child_process")),Rn=ur(require("node:path")),Sa=la(),au=Te(),Ia=class extends Error{constructor(t){super(t),this.name="PermissionError"}};Se.PermissionError=Ia;function ru(e){return e instanceof Error&&e.name==="PermissionError"}Se.isPermissionError=ru;async function nu(e,t,a){if(!(0,eu.existsSync)(e))throw new Error("The database does not exist");let r=a?.signal,n,o=mn.default.spawn("sqlite3",["--json","--readonly",e,t],{signal:r}),i=(0,Sa.getSpawnedPromise)(o),[{error:s,exitCode:u,signal:p},c,y]=await(0,Sa.getSpawnedResult)(o,{encoding:"utf-8"},i);if(ba(r),y.match("(5)")||y.match("(14)")){if(!n){let g=Rn.default.join(tu.default.tmpdir(),"useSQL",(0,au.hash)(e));await(0,da.mkdir)(g,{recursive:!0}),ba(r),n=Rn.default.join(g,"db.db"),await(0,da.copyFile)(e,n),await(0,da.writeFile)(n+"-shm",""),await(0,da.writeFile)(n+"-wal",""),ba(r)}o=mn.default.spawn("sqlite3",["--json","--readonly","--vfs","unix-none",n,t],{signal:r}),i=(0,Sa.getSpawnedPromise)(o),[{error:s,exitCode:u,signal:p},c,y]=await(0,Sa.getSpawnedResult)(o,{encoding:"utf-8"},i),ba(r)}if(s||u!==0||p!==null)throw y.includes("authorization denied")?new Ia("You do not have permission to access the database."):new Error(y||"Unknown error");return JSON.parse(c.trim()||"[]")}Se.baseExecuteSQL=nu;function ba(e){if(e?.aborted){let t=new Error("aborted");throw t.name="AbortError",t}}});var fn=E(yt=>{"use strict";var ou=yt&&yt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(yt,"__esModule",{value:!0});yt.useSQL=void 0;var be=require("react/jsx-runtime"),k=require("@raycast/api"),iu=require("node:fs"),su=ou(require("node:os")),ga=require("react"),uu=rt(),pu=Pe(),lu=Et(),lr=pr();function cu(e,t,a){let{permissionPriming:r,...n}=a||{},[o,i]=(0,ga.useState)(),s=(0,pu.useLatest)(a||{}),u=(0,ga.useRef)(),p=(0,ga.useCallback)(y=>{console.error(y);let g=y instanceof Error&&y.message.includes("authorization denied")?new lr.PermissionError("You do not have permission to access the database."):y;(0,lr.isPermissionError)(g)?i((0,be.jsx)(yu,{priming:s.current.permissionPriming})):s.current.onError?s.current.onError(g):k.environment.launchType!==k.LaunchType.Background&&(0,lu.showFailureToast)(g,{title:"Cannot query the data"})},[s]),c=(0,ga.useMemo)(()=>{if(!(0,iu.existsSync)(e))throw new Error("The database does not exist");return async(y,g)=>{let m=u.current?.signal;return(0,lr.baseExecuteSQL)(y,g,{signal:m})}},[e]);return{...(0,uu.usePromise)(c,[e,t],{...n,onError:p}),permissionView:o}}yt.useSQL=cu;var An=parseInt(su.default.release().split(".")[0])>=22,cr=An?"Settings":"Preferences";function yu(e){let t=An?{title:"Open System Settings -> Privacy",target:"x-apple.systempreferences:com.apple.preference.security?Privacy_AllFiles"}:{title:"Open System Preferences -> Security",target:"x-apple.systempreferences:com.apple.preference.security?Privacy_AllFiles"};return k.environment.commandMode==="menu-bar"?(0,be.jsxs)(k.MenuBarExtra,{icon:k.Icon.Warning,title:k.environment.commandName,children:[(0,be.jsx)(k.MenuBarExtra.Item,{title:"Raycast needs full disk access",tooltip:`You can revert this access in ${cr} whenever you want`}),e.priming?(0,be.jsx)(k.MenuBarExtra.Item,{title:e.priming,tooltip:`You can revert this access in ${cr} whenever you want`}):null,(0,be.jsx)(k.MenuBarExtra.Separator,{}),(0,be.jsx)(k.MenuBarExtra.Item,{title:t.title,onAction:()=>(0,k.open)(t.target)})]}):(0,be.jsx)(k.List,{children:(0,be.jsx)(k.List.EmptyView,{icon:{source:{light:"https://raycast.com/uploads/extensions-utils-security-permissions-light.png",dark:"https://raycast.com/uploads/extensions-utils-security-permissions-dark.png"}},title:"Raycast needs full disk access.",description:`${e.priming?e.priming+`
`:""}You can revert this access in ${cr} whenever you want.`,actions:(0,be.jsx)(k.ActionPanel,{children:(0,be.jsx)(k.Action.Open,{...t})})})})}});var En=E(dt=>{"use strict";Object.defineProperty(dt,"__esModule",{value:!0});dt.useForm=dt.FormValidation=void 0;var De=require("react"),Pn=Pe(),dr;(function(e){e.Required="required"})(dr||(dt.FormValidation=dr={}));function yr(e,t){if(e){if(typeof e=="function")return e(t);if(e===dr.Required){let a=typeof t<"u"&&t!==null;if(a)switch(typeof t){case"string":a=t.length>0;break;case"object":Array.isArray(t)?a=t.length>0:t instanceof Date&&(a=t.getTime()>0);break;default:break}if(!a)return"The item is required"}}}function du(e){let{onSubmit:t,validation:a,initialValues:r={}}=e,[n,o]=(0,De.useState)(r),[i,s]=(0,De.useState)({}),u=(0,De.useRef)({}),p=(0,Pn.useLatest)(a||{}),c=(0,Pn.useLatest)(t),y=(0,De.useCallback)(b=>{u.current[b]?.focus()},[u]),g=(0,De.useCallback)(async b=>{let R=!1;for(let[M,P]of Object.entries(p.current)){let A=yr(P,b[M]);A&&(R||(R={},y(M)),R[M]=A)}if(R)return s(R),!1;let f=await c.current(b);return typeof f=="boolean"?f:!0},[p,c,y]),m=(0,De.useCallback)((b,R)=>{s(f=>({...f,[b]:R}))},[s]),l=(0,De.useCallback)(function(b,R){o(f=>({...f,[b]:typeof R=="function"?R(f[b]):R}))},[o]),S=(0,De.useMemo)(()=>new Proxy({},{get(b,R){let f=p.current[R],M=n[R];return{onChange(P){i[R]&&(yr(f,P)||m(R,void 0)),l(R,P)},onBlur(P){let A=yr(f,P.target.value);A&&m(R,A)},error:i[R],id:R,value:typeof M>"u"?null:M,ref:P=>{u.current[R]=P}}}}),[i,p,m,n,u,l]),d=(0,De.useCallback)(b=>{s({}),Object.entries(u.current).forEach(([R,f])=>{b?.[R]||f?.reset()}),b&&o(b)},[o,s,u]);return{handleSubmit:g,setValidationError:m,setValue:l,values:n,itemProps:S,focus:y,reset:d}}dt.useForm=du});var hn=E(Ma=>{"use strict";Object.defineProperty(Ma,"__esModule",{value:!0});Ma.useAI=void 0;var Cn=require("react"),Su=require("@raycast/api"),bu=rt();function Iu(e,t={}){let{creativity:a,stream:r,model:n,...o}=t,[i,s]=(0,Cn.useState)(""),u=(0,Cn.useRef)(),{isLoading:p,error:c,revalidate:y}=(0,bu.usePromise)(async(g,m,l)=>{s("");let S=Su.AI.ask(g,{creativity:m,model:n,signal:u.current?.signal});l===!1?s(await S):(S.on("data",d=>{s(b=>b+d)}),await S)},[e,a,r],{...o,abortable:u});return{isLoading:p,data:i,error:c,revalidate:y}}Ma.useAI=Iu});var Un=E(ma=>{"use strict";Object.defineProperty(ma,"__esModule",{value:!0});ma.useFrecencySorting=void 0;var Sr=require("react"),Dn=Pe(),gu=ra(),Mu=10,xn=1440*60*1e3,mu=Math.log(2)/(Mu*xn),Ru={Default:100,Embed:0,Bookmark:140};function Au(e){let t=Date.now(),a=e?e.lastVisited:0,r=e?e.frecency:0,n=(t-a)/xn,o=Ru.Default*Math.exp(-mu*n),i=r+o;return{lastVisited:t,frecency:i}}var fu=e=>{if(process.env.NODE_ENV!=="production"&&(typeof e!="object"||!e||!("id"in e)||typeof e.id!="string"))throw new Error("Specify a key function or make sure your items have an 'id' property");return e.id};function Pu(e,t){let a=(0,Dn.useLatest)(t?.key||fu),r=(0,Dn.useLatest)(t?.sortUnvisited),[n,o]=(0,gu.useCachedState)(`raycast_frecency_${t?.namespace}`,{}),i=(0,Sr.useCallback)(async function(c){let y=a.current(c);o(g=>{let m=g[y],l=Au(m);return{...g,[y]:l}})},[a,o]),s=(0,Sr.useCallback)(async function(c){let y=a.current(c);o(g=>{let m={...g};return delete m[y],m})},[a,o]);return{data:(0,Sr.useMemo)(()=>e?e.sort((p,c)=>{let y=n[a.current(p)],g=n[a.current(c)];return y&&!g?-1:!y&&g?1:y&&g?g.frecency-y.frecency:r.current?r.current(p,c):0}):[],[n,e,a,r]),visitItem:i,resetRanking:s}}ma.useFrecencySorting=Pu});var Tn=E(Ra=>{"use strict";Object.defineProperty(Ra,"__esModule",{value:!0});Ra.useLocalStorage=void 0;var br=require("@raycast/api"),_n=Et(),vn=Te(),Eu=rt();function Cu(e,t){let{data:a,isLoading:r,mutate:n}=(0,Eu.usePromise)(async s=>{let u=await br.LocalStorage.getItem(s);return typeof u<"u"?JSON.parse(u,vn.reviver):t},[e]);async function o(s){try{await n(br.LocalStorage.setItem(e,JSON.stringify(s,vn.replacer)),{optimisticUpdate(u){return u}})}catch(u){await(0,_n.showFailureToast)(u,{title:"Failed to set value in local storage"})}}async function i(){try{await n(br.LocalStorage.removeItem(e),{optimisticUpdate(){}})}catch(s){await(0,_n.showFailureToast)(s,{title:"Failed to remove value from local storage"})}}return{value:a,setValue:o,removeValue:i,isLoading:r}}Ra.useLocalStorage=Cu});var qn=E(St=>{"use strict";Object.defineProperty(St,"__esModule",{value:!0});St.slightlyLighterColor=St.slightlyDarkerColor=void 0;function hu(e){let t=0,a=0,r=0;if(e.length===4)t=parseInt(`${e[1]}${e[1]}`,16),a=parseInt(`${e[2]}${e[2]}`,16),r=parseInt(`${e[3]}${e[3]}`,16);else if(e.length===7)t=parseInt(`${e[1]}${e[2]}`,16),a=parseInt(`${e[3]}${e[4]}`,16),r=parseInt(`${e[5]}${e[6]}`,16);else throw new Error(`Malformed hex color: ${e}`);return{r:t,g:a,b:r}}function Du({r:e,g:t,b:a}){let r=e.toString(16),n=t.toString(16),o=a.toString(16);return r.length===1&&(r=`0${r}`),n.length===1&&(n=`0${n}`),o.length===1&&(o=`0${o}`),`#${r}${n}${o}`}function xu({r:e,g:t,b:a}){e/=255,t/=255,a/=255;let r=Math.min(e,t,a),n=Math.max(e,t,a),o=n-r,i=0,s=0,u=0;return o===0?i=0:n===e?i=(t-a)/o%6:n===t?i=(a-e)/o+2:i=(e-t)/o+4,i=Math.round(i*60),i<0&&(i+=360),u=(n+r)/2,s=o===0?0:o/(1-Math.abs(2*u-1)),s=+(s*100).toFixed(1),u=+(u*100).toFixed(1),{h:i,s,l:u}}function Uu({h:e,s:t,l:a}){t/=100,a/=100;let r=(1-Math.abs(2*a-1))*t,n=r*(1-Math.abs(e/60%2-1)),o=a-r/2,i=0,s=0,u=0;return e>=0&&e<60?(i=r,s=n,u=0):e>=60&&e<120?(i=n,s=r,u=0):e>=120&&e<180?(i=0,s=r,u=n):e>=180&&e<240?(i=0,s=n,u=r):e>=240&&e<300?(i=n,s=0,u=r):e>=300&&e<360&&(i=r,s=0,u=n),i=Math.round((i+o)*255),s=Math.round((s+o)*255),u=Math.round((u+o)*255),{r:i,g:s,b:u}}function wn(e){return xu(hu(e))}function On(e){return Du(Uu(e))}function Bn(e,t,a){return t<a?e<t?t:e>a?a:e:e<a?a:e>t?t:e}var Ln=12;function _u(e){let t=wn(e);return On({h:t.h,s:t.s,l:Bn(t.l-Ln,0,100)})}St.slightlyDarkerColor=_u;function vu(e){let t=wn(e);return On({h:t.h,s:t.s,l:Bn(t.l+Ln,0,100)})}St.slightlyLighterColor=vu});var kn=E(Aa=>{"use strict";Object.defineProperty(Aa,"__esModule",{value:!0});Aa.getAvatarIcon=void 0;var Nn=qn();function bt(e,t){let a=e.charCodeAt(t);if(Number.isNaN(a))return["",t];if(a<55296||a>57343)return[e.charAt(t),t];if(55296<=a&&a<=56319){if(e.length<=t+1)throw new Error("High surrogate without following low surrogate");let n=e.charCodeAt(t+1);if(56320>n||n>57343)throw new Error("High surrogate without following low surrogate");return[e.charAt(t)+e.charAt(t+1),t+1]}if(t===0)throw new Error("Low surrogate without preceding high surrogate");let r=e.charCodeAt(t-1);if(55296>r||r>56319)throw new Error("Low surrogate without preceding high surrogate");return[e.charAt(t+1),t+1]}var Vn=["#DC829A","#D64854","#D47600","#D36CDD","#52A9E4","#7871E8","#70920F","#43B93A","#EB6B3E","#26B795","#D85A9B","#A067DC","#BD9500","#5385D9"];function Tu(e,t){let a=e.trim().split(" "),r;if(a.length==1&&bt(a[0],0)[0])r=bt(a[0],0)[0];else if(a.length>1){let u=bt(a[0],0)[0]||"",p=bt(a[a.length-1],0)[0]??"";r=u+p}else r="";let n;if(t?.background)n=t?.background;else{let u=0,[p,c]=bt(r,0);for(;p;)u+=p.charCodeAt(0),[p,c]=bt(r,c+1);let y=u%Vn.length;n=Vn[y]}let i=50-0;return`data:image/svg+xml,${`<svg width="100px" height="100px">
  ${t?.gradient!==!1?`<defs>
      <linearGradient id="Gradient" x1="0.25" x2="0.75" y1="0" y2="1">
        <stop offset="0%" stop-color="${(0,Nn.slightlyLighterColor)(n)}"/>
        <stop offset="50%" stop-color="${n}"/>
        <stop offset="100%" stop-color="${(0,Nn.slightlyDarkerColor)(n)}"/>
      </linearGradient>
  </defs>`:""}
      <circle cx="50" cy="50" r="${i}" fill="${t?.gradient!==!1?"url(#Gradient)":n}" />
      ${r?`<text x="50" y="80" font-size="${i-1}" font-family="Inter, sans-serif" text-anchor="middle" fill="white">${r.toUpperCase()}</text>`:""}
    </svg>
  `.replaceAll(`
`,"")}`}Aa.getAvatarIcon=Tu});var jn=E(fa=>{"use strict";Object.defineProperty(fa,"__esModule",{value:!0});fa.getFavicon=void 0;var Fn=require("@raycast/api"),wu=require("url");function Ou(e,t){try{let r=(typeof e=="string"?new wu.URL(e):e).hostname;return{source:`https://www.google.com/s2/favicons?sz=${t?.size??64}&domain=${r}`,fallback:t?.fallback??Fn.Icon.Link,mask:t?.mask}}catch(a){return console.error(a),Fn.Icon.Link}}fa.getFavicon=Ou});var Gn=E(Pa=>{"use strict";Object.defineProperty(Pa,"__esModule",{value:!0});Pa.getProgressIcon=void 0;var zn=require("@raycast/api");function Hn(e,t,a,r){let n=(r-90)*Math.PI/180;return{x:e+a*Math.cos(n),y:t+a*Math.sin(n)}}function Bu(e,t,a,r,n){let o=Hn(e,t,a,n),i=Hn(e,t,a,r),s=n-r<=180?"0":"1";return["M",o.x,o.y,"A",a,a,0,s,0,i.x,i.y].join(" ")}function Lu(e,t=zn.Color.Red,a){let r=a?.background||(zn.environment.appearance==="light"?"black":"white"),n=a?.backgroundOpacity||.1,o=10,s=50-5-o/2;return`data:image/svg+xml,${`<svg width="100px" height="100px">
      <circle cx="50" cy="50" r="${s}" stroke-width="${o}" stroke="${e<1?r:t}" opacity="${e<1?n:"1"}" fill="none" />
      ${e>0&&e<1?`<path d="${Bu(50,50,s,0,e*360)}" stroke="${t}" stroke-width="${o}" fill="none" />`:""}
    </svg>
  `.replaceAll(`
`,"")}`}Pa.getProgressIcon=Lu});var $n=E(xe=>{"use strict";var qu=xe&&xe.__createBinding||(Object.create?(function(e,t,a,r){r===void 0&&(r=a);var n=Object.getOwnPropertyDescriptor(t,a);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,n)}):(function(e,t,a,r){r===void 0&&(r=a),e[r]=t[a]})),Ir=xe&&xe.__exportStar||function(e,t){for(var a in e)a!=="default"&&!Object.prototype.hasOwnProperty.call(t,a)&&qu(t,e,a)};Object.defineProperty(xe,"__esModule",{value:!0});Ir(kn(),xe);Ir(jn(),xe);Ir(Gn(),xe)});var Qn=E(N=>{"use strict";Object.defineProperty(N,"__esModule",{value:!0});N.zoomService=N.slackService=N.linearService=N.jiraService=N.googleService=N.githubService=N.asanaService=void 0;var F=require("@raycast/api"),Ge=gr(),Ea={asana:"1191201745684312",github:"7235fe8d42157f1f38c0",linear:"c8ff37b9225c3c9aefd7d66ea0e5b6f1",slack:"851756884692.5546927290212"},Le=e=>`data:image/svg+xml,${e}`,$e={asana:Le('<svg xmlns="http://www.w3.org/2000/svg" width="251" height="232" fill="none"><path fill="#F06A6A" d="M179.383 54.373c0 30.017-24.337 54.374-54.354 54.374-30.035 0-54.373-24.338-54.373-54.374C70.656 24.338 94.993 0 125.029 0c30.017 0 54.354 24.338 54.354 54.373ZM54.393 122.33C24.376 122.33.02 146.668.02 176.685c0 30.017 24.337 54.373 54.373 54.373 30.035 0 54.373-24.338 54.373-54.373 0-30.017-24.338-54.355-54.373-54.355Zm141.253 0c-30.035 0-54.373 24.338-54.373 54.374 0 30.035 24.338 54.373 54.373 54.373 30.017 0 54.374-24.338 54.374-54.373 0-30.036-24.338-54.374-54.374-54.374Z"/></svg>'),github:{source:Le('<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>'),tintColor:F.Color.PrimaryText},google:Le('<svg xmlns="http://www.w3.org/2000/svg" style="display:block" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/><path fill="none" d="M0 0h48v48H0z"/></svg>'),jira:Le('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="2361" height="2500" viewBox="2.59 0 214.091 224"><linearGradient id="a" x1="102.4" x2="56.15" y1="218.63" y2="172.39" gradientTransform="matrix(1 0 0 -1 0 264)" gradientUnits="userSpaceOnUse"><stop offset=".18" stop-color="#0052cc"/><stop offset="1" stop-color="#2684ff"/></linearGradient><linearGradient xlink:href="#a" id="b" x1="114.65" x2="160.81" y1="85.77" y2="131.92"/><path fill="#2684ff" d="M214.06 105.73 117.67 9.34 108.33 0 35.77 72.56 2.59 105.73a8.89 8.89 0 0 0 0 12.54l66.29 66.29L108.33 224l72.55-72.56 1.13-1.12 32.05-32a8.87 8.87 0 0 0 0-12.59zm-105.73 39.39L75.21 112l33.12-33.12L141.44 112z"/><path fill="url(#a)" d="M108.33 78.88a55.75 55.75 0 0 1-.24-78.61L35.62 72.71l39.44 39.44z"/><path fill="url(#b)" d="m141.53 111.91-33.2 33.21a55.77 55.77 0 0 1 0 78.86L181 151.35z"/></svg>'),linear:{source:{light:Le('<svg xmlns="http://www.w3.org/2000/svg" fill="#222326" width="200" height="200" viewBox="0 0 100 100"><path d="M1.22541 61.5228c-.2225-.9485.90748-1.5459 1.59638-.857L39.3342 97.1782c.6889.6889.0915 1.8189-.857 1.5964C20.0515 94.4522 5.54779 79.9485 1.22541 61.5228ZM.00189135 46.8891c-.01764375.2833.08887215.5599.28957165.7606L52.3503 99.7085c.2007.2007.4773.3075.7606.2896 2.3692-.1476 4.6938-.46 6.9624-.9259.7645-.157 1.0301-1.0963.4782-1.6481L2.57595 39.4485c-.55186-.5519-1.49117-.2863-1.648174.4782-.465915 2.2686-.77832 4.5932-.92588465 6.9624ZM4.21093 29.7054c-.16649.3738-.08169.8106.20765 1.1l64.77602 64.776c.2894.2894.7262.3742 1.1.2077 1.7861-.7956 3.5171-1.6927 5.1855-2.684.5521-.328.6373-1.0867.1832-1.5407L8.43566 24.3367c-.45409-.4541-1.21271-.3689-1.54074.1832-.99132 1.6684-1.88843 3.3994-2.68399 5.1855ZM12.6587 18.074c-.3701-.3701-.393-.9637-.0443-1.3541C21.7795 6.45931 35.1114 0 49.9519 0 77.5927 0 100 22.4073 100 50.0481c0 14.8405-6.4593 28.1724-16.7199 37.3375-.3903.3487-.984.3258-1.3542-.0443L12.6587 18.074Z"/></svg>'),dark:Le('<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="200" height="200" viewBox="0 0 100 100"><path d="M1.22541 61.5228c-.2225-.9485.90748-1.5459 1.59638-.857L39.3342 97.1782c.6889.6889.0915 1.8189-.857 1.5964C20.0515 94.4522 5.54779 79.9485 1.22541 61.5228ZM.00189135 46.8891c-.01764375.2833.08887215.5599.28957165.7606L52.3503 99.7085c.2007.2007.4773.3075.7606.2896 2.3692-.1476 4.6938-.46 6.9624-.9259.7645-.157 1.0301-1.0963.4782-1.6481L2.57595 39.4485c-.55186-.5519-1.49117-.2863-1.648174.4782-.465915 2.2686-.77832 4.5932-.92588465 6.9624ZM4.21093 29.7054c-.16649.3738-.08169.8106.20765 1.1l64.77602 64.776c.2894.2894.7262.3742 1.1.2077 1.7861-.7956 3.5171-1.6927 5.1855-2.684.5521-.328.6373-1.0867.1832-1.5407L8.43566 24.3367c-.45409-.4541-1.21271-.3689-1.54074.1832-.99132 1.6684-1.88843 3.3994-2.68399 5.1855ZM12.6587 18.074c-.3701-.3701-.393-.9637-.0443-1.3541C21.7795 6.45931 35.1114 0 49.9519 0 77.5927 0 100 22.4073 100 50.0481c0 14.8405-6.4593 28.1724-16.7199 37.3375-.3903.3487-.984.3258-1.3542-.0443L12.6587 18.074Z" /></svg>')}},slack:Le('<svg xmlns="http://www.w3.org/2000/svg" viewBox="73 73 124 124"><style>.st0{fill:#e01e5a}.st1{fill:#36c5f0}.st2{fill:#2eb67d}.st3{fill:#ecb22e}</style><path d="M99.4 151.2c0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9h12.9v12.9zM105.9 151.2c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v32.3c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9v-32.3z" class="st0"/><path d="M118.8 99.4c-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v12.9h-12.9zM118.8 105.9c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H86.5c-7.1 0-12.9-5.8-12.9-12.9s5.8-12.9 12.9-12.9h32.3z" class="st1"/><path d="M170.6 118.8c0-7.1 5.8-12.9 12.9-12.9 7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9h-12.9v-12.9zM164.1 118.8c0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9V86.5c0-7.1 5.8-12.9 12.9-12.9 7.1 0 12.9 5.8 12.9 12.9v32.3z" class="st2"/><path d="M151.2 170.6c7.1 0 12.9 5.8 12.9 12.9 0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9v-12.9h12.9zM151.2 164.1c-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9h32.3c7.1 0 12.9 5.8 12.9 12.9 0 7.1-5.8 12.9-12.9 12.9h-32.3z" class="st3"/></svg>'),zoom:Le('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 351.845 80"><path d="M73.786 78.835H10.88A10.842 10.842 0 0 1 .833 72.122a10.841 10.841 0 0 1 2.357-11.85L46.764 16.7h-31.23C6.954 16.699 0 9.744 0 1.165h58.014c4.414 0 8.357 2.634 10.046 6.712a10.843 10.843 0 0 1-2.356 11.85L22.13 63.302h36.122c8.58 0 15.534 6.955 15.534 15.534Zm278.059-48.544C351.845 13.588 338.256 0 321.553 0c-8.934 0-16.975 3.89-22.524 10.063C293.48 3.89 285.44 0 276.505 0c-16.703 0-30.291 13.588-30.291 30.291v48.544c8.579 0 15.534-6.955 15.534-15.534v-33.01c0-8.137 6.62-14.757 14.757-14.757s14.757 6.62 14.757 14.757v33.01c0 8.58 6.955 15.534 15.534 15.534V30.291c0-8.137 6.62-14.757 14.757-14.757s14.758 6.62 14.758 14.757v33.01c0 8.58 6.954 15.534 15.534 15.534V30.291ZM238.447 40c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.908-40 40-40 40 17.909 40 40Zm-15.534 0c0-13.512-10.954-24.466-24.466-24.466S173.98 26.488 173.98 40s10.953 24.466 24.466 24.466S222.913 53.512 222.913 40Zm-70.68 0c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.909-40 40-40 40 17.909 40 40Zm-15.534 0c0-13.512-10.954-24.466-24.466-24.466S87.767 26.488 87.767 40s10.954 24.466 24.466 24.466S136.699 53.512 136.699 40Z" style="fill:#0b5cff"/></svg>')},Nu=e=>new Ge.OAuthService({client:new F.OAuth.PKCEClient({redirectMethod:F.OAuth.RedirectMethod.Web,providerName:"Asana",providerIcon:$e.asana,providerId:"asana",description:"Connect your Asana account"}),clientId:e.clientId??Ea.asana,authorizeUrl:e.authorizeUrl??"https://asana.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://asana.oauth.raycast.com/token",refreshTokenUrl:e.refreshTokenUrl??"https://asana.oauth.raycast.com/refresh-token",scope:e.scope,personalAccessToken:e.personalAccessToken,onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});N.asanaService=Nu;var Vu=e=>new Ge.OAuthService({client:new F.OAuth.PKCEClient({redirectMethod:F.OAuth.RedirectMethod.Web,providerName:"GitHub",providerIcon:$e.github,providerId:"github",description:"Connect your GitHub account"}),clientId:e.clientId??Ea.github,authorizeUrl:e.authorizeUrl??"https://github.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://github.oauth.raycast.com/token",refreshTokenUrl:e.refreshTokenUrl??"https://github.oauth.raycast.com/refresh-token",scope:e.scope,personalAccessToken:e.personalAccessToken,onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});N.githubService=Vu;var ku=e=>new Ge.OAuthService({client:new F.OAuth.PKCEClient({redirectMethod:F.OAuth.RedirectMethod.AppURI,providerName:"Google",providerIcon:$e.google,providerId:"google",description:"Connect your Google account"}),clientId:e.clientId,authorizeUrl:e.authorizeUrl??"https://accounts.google.com/o/oauth2/v2/auth",tokenUrl:e.tokenUrl??"https://oauth2.googleapis.com/token",refreshTokenUrl:e.tokenUrl,scope:e.scope,personalAccessToken:e.personalAccessToken,bodyEncoding:e.bodyEncoding??"url-encoded",onAuthorize:e.onAuthorize,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});N.googleService=ku;var Fu=e=>new Ge.OAuthService({client:new F.OAuth.PKCEClient({redirectMethod:F.OAuth.RedirectMethod.Web,providerName:"Jira",providerIcon:$e.jira,providerId:"jira",description:"Connect your Jira account"}),clientId:e.clientId,authorizeUrl:e.authorizeUrl??"https://auth.atlassian.com/authorize",tokenUrl:e.tokenUrl??"https://auth.atlassian.com/oauth/token",refreshTokenUrl:e.refreshTokenUrl,scope:e.scope,personalAccessToken:e.personalAccessToken,onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});N.jiraService=Fu;var ju=e=>new Ge.OAuthService({client:new F.OAuth.PKCEClient({redirectMethod:F.OAuth.RedirectMethod.Web,providerName:"Linear",providerIcon:$e.linear,providerId:"linear",description:"Connect your Linear account"}),clientId:e.clientId??Ea.linear,authorizeUrl:e.authorizeUrl??"https://linear.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://linear.oauth.raycast.com/token",refreshTokenUrl:e.refreshTokenUrl??"https://linear.oauth.raycast.com/refresh-token",scope:e.scope,extraParameters:{actor:"user"},onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});N.linearService=ju;var zu=e=>new Ge.OAuthService({client:new F.OAuth.PKCEClient({redirectMethod:F.OAuth.RedirectMethod.Web,providerName:"Slack",providerIcon:$e.slack,providerId:"slack",description:"Connect your Slack account"}),clientId:e.clientId??Ea.slack,authorizeUrl:e.authorizeUrl??"https://slack.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://slack.oauth.raycast.com/token",refreshTokenUrl:e.tokenUrl??"https://slack.oauth.raycast.com/refresh-token",scope:"",extraParameters:{user_scope:e.scope},personalAccessToken:e.personalAccessToken,bodyEncoding:e.tokenUrl?e.bodyEncoding??"url-encoded":"json",onAuthorize:e.onAuthorize,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser??(t=>({access_token:t.authed_user.access_token,scope:t.authed_user.scope}))});N.slackService=zu;var Hu=e=>new Ge.OAuthService({client:new F.OAuth.PKCEClient({redirectMethod:F.OAuth.RedirectMethod.Web,providerName:"Zoom",providerIcon:$e.zoom,providerId:"zoom",description:"Connect your Zoom account"}),clientId:e.clientId,authorizeUrl:e.authorizeUrl??"https://zoom.us/oauth/authorize",tokenUrl:e.tokenUrl??"https://zoom.us/oauth/token",refreshTokenUrl:e.refreshTokenUrl,scope:e.scope,personalAccessToken:e.personalAccessToken,bodyEncoding:e.bodyEncoding??"url-encoded",onAuthorize:e.onAuthorize,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});N.zoomService=Hu});var gr=E(It=>{"use strict";var Gu=It&&It.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(It,"__esModule",{value:!0});It.OAuthService=void 0;var Wn=Gu(wt()),Qe=Qn(),Ie=class{constructor(t){this.clientId=t.clientId,this.scope=Array.isArray(t.scope)?t.scope.join(" "):t.scope,this.personalAccessToken=t.personalAccessToken,this.bodyEncoding=t.bodyEncoding,this.client=t.client,this.extraParameters=t.extraParameters,this.authorizeUrl=t.authorizeUrl,this.tokenUrl=t.tokenUrl,this.refreshTokenUrl=t.refreshTokenUrl,this.onAuthorize=t.onAuthorize,this.tokenResponseParser=t.tokenResponseParser??(a=>a),this.tokenRefreshResponseParser=t.tokenRefreshResponseParser??(a=>a),this.authorize=this.authorize.bind(this)}async authorize(){let t=await this.client.getTokens();if(t?.accessToken){if(t.refreshToken&&t.isExpired()){let o=await this.refreshTokens({token:t.refreshToken});if(o)return await this.client.setTokens(o),o.access_token}return t.accessToken}let a=await this.client.authorizationRequest({endpoint:this.authorizeUrl,clientId:this.clientId,scope:this.scope,extraParameters:this.extraParameters}),{authorizationCode:r}=await this.client.authorize(a),n=await this.fetchTokens({authRequest:a,authorizationCode:r});return await this.client.setTokens(n),n.access_token}async fetchTokens({authRequest:t,authorizationCode:a}){let r;if(this.bodyEncoding==="url-encoded"){let i=new URLSearchParams;i.append("client_id",this.clientId),i.append("code",a),i.append("code_verifier",t.codeVerifier),i.append("grant_type","authorization_code"),i.append("redirect_uri",t.redirectURI),r={body:i}}else r={body:JSON.stringify({client_id:this.clientId,code:a,code_verifier:t.codeVerifier,grant_type:"authorization_code",redirect_uri:t.redirectURI}),headers:{"Content-Type":"application/json"}};let n=await(0,Wn.default)(this.tokenUrl,{method:"POST",...r});if(!n.ok){let i=await n.text();throw console.error("fetch tokens error:",i),new Error(`Error while fetching tokens: ${n.status} (${n.statusText})
${i}`)}let o=this.tokenResponseParser(await n.json());return Array.isArray(o.scope)?{...o,scope:o.scope.join(" ")}:o}async refreshTokens({token:t}){let a;if(this.bodyEncoding==="url-encoded"){let n=new URLSearchParams;n.append("client_id",this.clientId),n.append("refresh_token",t),n.append("grant_type","refresh_token"),a={body:n}}else a={body:JSON.stringify({client_id:this.clientId,refresh_token:t,grant_type:"refresh_token"}),headers:{"Content-Type":"application/json"}};let r=await(0,Wn.default)(this.refreshTokenUrl??this.tokenUrl,{method:"POST",...a});if(r.ok){let n=this.tokenRefreshResponseParser(await r.json());return n.refresh_token=n.refresh_token??t,n}else{let n=await r.text();console.error("refresh tokens error:",n),this.client.description=`${this.client.providerName} needs you to sign-in again. Press \u23CE or click the button below to continue.`,await this.client.removeTokens(),await this.authorize()}}};It.OAuthService=Ie;Ie.asana=Qe.asanaService;Ie.github=Qe.githubService;Ie.google=Qe.googleService;Ie.jira=Qe.jiraService;Ie.linear=Qe.linearService;Ie.slack=Qe.slackService;Ie.zoom=Qe.zoomService});var Kn=E(gt=>{"use strict";Object.defineProperty(gt,"__esModule",{value:!0});gt.getAccessToken=gt.withAccessToken=void 0;var $u=require("react/jsx-runtime"),Qu=require("@raycast/api"),qe=null,We=null,Mr=null,mr=null,Rr=null;function Wu(e){return Qu.environment.commandMode==="no-view"?t=>async r=>{if(!qe){qe=e.personalAccessToken??await e.authorize(),We=e.personalAccessToken?"personal":"oauth";let n=(await e.client?.getTokens())?.idToken;e.onAuthorize&&await Promise.resolve(e.onAuthorize({token:qe,type:We,idToken:n}))}return t(r)}:t=>{let a=r=>{e.personalAccessToken?(qe=e.personalAccessToken,We="personal"):(Mr||(Mr=Ar(e.authorize())),qe=Mr.read(),We="oauth");let n;return e.client&&(mr||(mr=Ar(e.client.getTokens())),n=mr.read()?.idToken),!Rr&&e.onAuthorize&&(Rr=Ar(Promise.resolve(e.onAuthorize({token:qe,type:We,idToken:n})))),Rr?.read(),(0,$u.jsx)(t,{...r})};return a.displayName=`withAccessToken(${t.displayName||t.name})`,a}}gt.withAccessToken=Wu;function Ku(){if(!qe||!We)throw new Error("getAccessToken must be used when authenticated (eg. used inside `withAccessToken`)");return{token:qe,type:We}}gt.getAccessToken=Ku;function Ar(e){let t="pending",a,r=e.then(o=>{t="success",a=o},o=>{t="error",a=o});return{read:()=>{switch(t){case"pending":throw r;case"error":throw a;default:return a}}}}});var Jn=E(Ne=>{"use strict";var Yu=Ne&&Ne.__createBinding||(Object.create?(function(e,t,a,r){r===void 0&&(r=a);var n=Object.getOwnPropertyDescriptor(t,a);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,n)}):(function(e,t,a,r){r===void 0&&(r=a),e[r]=t[a]})),Yn=Ne&&Ne.__exportStar||function(e,t){for(var a in e)a!=="default"&&!Object.prototype.hasOwnProperty.call(t,a)&&Yu(t,e,a)};Object.defineProperty(Ne,"__esModule",{value:!0});Yn(gr(),Ne);Yn(Kn(),Ne)});var ao=E(re=>{"use strict";var Zn=re&&re.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(re,"__esModule",{value:!0});re.createDeeplink=re.createExtensionDeeplink=re.createScriptCommandDeeplink=re.DeeplinkType=void 0;var Pr=require("@raycast/api"),Ju=Zn(require("node:fs")),Zu=Zn(require("node:path")),fr;(function(e){e.ScriptCommand="script-command",e.Extension="extension"})(fr||(re.DeeplinkType=fr={}));function Xn(){return Pr.environment.raycastVersion.includes("alpha")?"raycastinternal://":"raycast://"}function Xu(){let e=JSON.parse(Ju.default.readFileSync(Zu.default.join(Pr.environment.assetsPath,"..","package.json"),"utf8"));return e.owner||e.author}function eo(e){let t=`${Xn()}script-commands/${e.command}`;if(e.arguments){let a="";for(let r of e.arguments)a+="&arguments="+encodeURIComponent(r);t+="?"+a.substring(1)}return t}re.createScriptCommandDeeplink=eo;function to(e){let t=Xu(),a=Pr.environment.extensionName;"ownerOrAuthorName"in e&&"extensionName"in e&&(t=e.ownerOrAuthorName,a=e.extensionName);let r=`${Xn()}extensions/${t}/${a}/${e.command}`,n="";return e.launchType&&(n+="&launchType="+encodeURIComponent(e.launchType)),e.arguments&&(n+="&arguments="+encodeURIComponent(JSON.stringify(e.arguments))),e.context&&(n+="&context="+encodeURIComponent(JSON.stringify(e.context))),e.fallbackText&&(n+="&fallbackText="+encodeURIComponent(e.fallbackText)),n&&(r+="?"+n.substring(1)),r}re.createExtensionDeeplink=to;function ep(e){return e.type===fr.ScriptCommand?eo(e):to(e)}re.createDeeplink=ep});var ro=E(Ca=>{"use strict";Object.defineProperty(Ca,"__esModule",{value:!0});Ca.executeSQL=void 0;var tp=pr();function ap(e,t){return(0,tp.baseExecuteSQL)(e,t)}Ca.executeSQL=ap});var no=E(Mt=>{"use strict";var rp=Mt&&Mt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Mt,"__esModule",{value:!0});Mt.runAppleScript=void 0;var np=rp(require("node:child_process")),Nt=la();async function op(e,t,a){let{humanReadableOutput:r,language:n,timeout:o,...i}=Array.isArray(t)?a||{}:t||{},s=r!==!1?[]:["-ss"];n==="JavaScript"&&s.push("-l","JavaScript"),Array.isArray(t)&&s.push("-",...t);let u=np.default.spawn("osascript",s,{...i,env:{PATH:"/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"}}),p=(0,Nt.getSpawnedPromise)(u,{timeout:o??1e4});u.stdin.end(e);let[{error:c,exitCode:y,signal:g,timedOut:m},l,S]=await(0,Nt.getSpawnedResult)(u,{encoding:"utf8"},p),d=(0,Nt.handleOutput)({stripFinalNewline:!0},l),b=(0,Nt.handleOutput)({stripFinalNewline:!0},S);return(0,Nt.defaultParsing)({stdout:d,stderr:b,error:c,exitCode:y,signal:g,timedOut:m,command:"osascript",options:a,parentError:new Error})}Mt.runAppleScript=op});var oo=E(Da=>{"use strict";Object.defineProperty(Da,"__esModule",{value:!0});Da.withCache=void 0;var ip=require("@raycast/api"),ha=Te();function sp(e,t){let a=new ip.Cache({namespace:(0,ha.hash)(e)}),r=async(...n)=>{let o=(0,ha.hash)(n||[])+t?.internal_cacheKeySuffix,i=a.get(o);if(i){let{data:u,timestamp:p}=JSON.parse(i,ha.reviver);if(!(t?.maxAge&&Date.now()-p>t.maxAge)&&(!t?.validate||t.validate(u)))return u}let s=await e(...n);return a.set(o,JSON.stringify({data:s,timestamp:Date.now()},ha.replacer)),s};return r.clearCache=()=>{a.clear()},r}Da.withCache=sp});var mt=E(D=>{"use strict";var up=D&&D.__createBinding||(Object.create?(function(e,t,a,r){r===void 0&&(r=a);var n=Object.getOwnPropertyDescriptor(t,a);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,n)}):(function(e,t,a,r){r===void 0&&(r=a),e[r]=t[a]})),w=D&&D.__exportStar||function(e,t){for(var a in e)a!=="default"&&!Object.prototype.hasOwnProperty.call(t,a)&&up(t,e,a)};Object.defineProperty(D,"__esModule",{value:!0});w(rt(),D);w(ra(),D);w(Dt(),D);w(pn(),D);w(Sn(),D);w(Mn(),D);w(fn(),D);w(En(),D);w(hn(),D);w(Un(),D);w(Tn(),D);w($n(),D);w(Jn(),D);w(ao(),D);w(ro(),D);w(no(),D);w(Et(),D);w(oo(),D)});var H={};tt(H,{default:()=>Eo.default});var Eo,Oa=$a(()=>{j(H,require("formdata-polyfill/esm.min.js"));Eo=v(require("formdata-polyfill/esm.min.js"))});var Y={};tt(Y,{default:()=>xo.default});var xo,_r=$a(()=>{j(Y,require("fetch-blob/from.js"));xo=v(require("fetch-blob/from.js"))});var _o={};tt(_o,{toFormData:()=>_p});function Up(e){let t=e.match(/\bfilename=("(.*?)"|([^()<>@,;:\\"/[\]?={}\s\t]+))($|;\s)/i);if(!t)return;let a=t[2]||t[3]||"",r=a.slice(a.lastIndexOf("\\")+1);return r=r.replace(/%22/g,'"'),r=r.replace(/&#(\d{4});/g,(n,o)=>String.fromCharCode(o)),r}async function _p(e,t){if(!/multipart/i.test(t))throw new TypeError("Failed to fetch");let a=t.match(/boundary=(?:"([^"]+)"|([^;]+))/i);if(!a)throw new TypeError("no or bad content-type header, no multipart boundary");let r=new vr(a[1]||a[2]),n,o,i,s,u,p,c=[],y=new H.FormData,g=b=>{i+=d.decode(b,{stream:!0})},m=b=>{c.push(b)},l=()=>{let b=new Y.File(c,p,{type:u});y.append(s,b)},S=()=>{y.append(s,i)},d=new TextDecoder("utf-8");d.decode(),r.onPartBegin=function(){r.onPartData=g,r.onPartEnd=S,n="",o="",i="",s="",u="",p=null,c.length=0},r.onHeaderField=function(b){n+=d.decode(b,{stream:!0})},r.onHeaderValue=function(b){o+=d.decode(b,{stream:!0})},r.onHeaderEnd=function(){if(o+=d.decode(),n=n.toLowerCase(),n==="content-disposition"){let b=o.match(/\bname=("([^"]*)"|([^()<>@,;:\\"/[\]?={}\s\t]+))/i);b&&(s=b[2]||b[3]||""),p=Up(o),p&&(r.onPartData=m,r.onPartEnd=l)}else n==="content-type"&&(u=o);o="",n=""};for await(let b of e)r.write(b);return r.end(),y}var me,h,Uo,Fe,La,qa,Ep,zt,Cp,hp,Dp,xp,Ze,vr,vo=$a(()=>{_r();Oa();me=0,h={START_BOUNDARY:me++,HEADER_FIELD_START:me++,HEADER_FIELD:me++,HEADER_VALUE_START:me++,HEADER_VALUE:me++,HEADER_VALUE_ALMOST_DONE:me++,HEADERS_ALMOST_DONE:me++,PART_DATA_START:me++,PART_DATA:me++,END:me++},Uo=1,Fe={PART_BOUNDARY:Uo,LAST_BOUNDARY:Uo*=2},La=10,qa=13,Ep=32,zt=45,Cp=58,hp=97,Dp=122,xp=e=>e|32,Ze=()=>{},vr=class{constructor(t){this.index=0,this.flags=0,this.onHeaderEnd=Ze,this.onHeaderField=Ze,this.onHeadersEnd=Ze,this.onHeaderValue=Ze,this.onPartBegin=Ze,this.onPartData=Ze,this.onPartEnd=Ze,this.boundaryChars={},t=`\r
--`+t;let a=new Uint8Array(t.length);for(let r=0;r<t.length;r++)a[r]=t.charCodeAt(r),this.boundaryChars[a[r]]=!0;this.boundary=a,this.lookbehind=new Uint8Array(this.boundary.length+8),this.state=h.START_BOUNDARY}write(t){let a=0,r=t.length,n=this.index,{lookbehind:o,boundary:i,boundaryChars:s,index:u,state:p,flags:c}=this,y=this.boundary.length,g=y-1,m=t.length,l,S,d=M=>{this[M+"Mark"]=a},b=M=>{delete this[M+"Mark"]},R=(M,P,A,x)=>{(P===void 0||P!==A)&&this[M](x&&x.subarray(P,A))},f=(M,P)=>{let A=M+"Mark";A in this&&(P?(R(M,this[A],a,t),delete this[A]):(R(M,this[A],t.length,t),this[A]=0))};for(a=0;a<r;a++)switch(l=t[a],p){case h.START_BOUNDARY:if(u===i.length-2){if(l===zt)c|=Fe.LAST_BOUNDARY;else if(l!==qa)return;u++;break}else if(u-1===i.length-2){if(c&Fe.LAST_BOUNDARY&&l===zt)p=h.END,c=0;else if(!(c&Fe.LAST_BOUNDARY)&&l===La)u=0,R("onPartBegin"),p=h.HEADER_FIELD_START;else return;break}l!==i[u+2]&&(u=-2),l===i[u+2]&&u++;break;case h.HEADER_FIELD_START:p=h.HEADER_FIELD,d("onHeaderField"),u=0;case h.HEADER_FIELD:if(l===qa){b("onHeaderField"),p=h.HEADERS_ALMOST_DONE;break}if(u++,l===zt)break;if(l===Cp){if(u===1)return;f("onHeaderField",!0),p=h.HEADER_VALUE_START;break}if(S=xp(l),S<hp||S>Dp)return;break;case h.HEADER_VALUE_START:if(l===Ep)break;d("onHeaderValue"),p=h.HEADER_VALUE;case h.HEADER_VALUE:l===qa&&(f("onHeaderValue",!0),R("onHeaderEnd"),p=h.HEADER_VALUE_ALMOST_DONE);break;case h.HEADER_VALUE_ALMOST_DONE:if(l!==La)return;p=h.HEADER_FIELD_START;break;case h.HEADERS_ALMOST_DONE:if(l!==La)return;R("onHeadersEnd"),p=h.PART_DATA_START;break;case h.PART_DATA_START:p=h.PART_DATA,d("onPartData");case h.PART_DATA:if(n=u,u===0){for(a+=g;a<m&&!(t[a]in s);)a+=y;a-=g,l=t[a]}if(u<i.length)i[u]===l?(u===0&&f("onPartData",!0),u++):u=0;else if(u===i.length)u++,l===qa?c|=Fe.PART_BOUNDARY:l===zt?c|=Fe.LAST_BOUNDARY:u=0;else if(u-1===i.length)if(c&Fe.PART_BOUNDARY){if(u=0,l===La){c&=~Fe.PART_BOUNDARY,R("onPartEnd"),R("onPartBegin"),p=h.HEADER_FIELD_START;break}}else c&Fe.LAST_BOUNDARY&&l===zt?(R("onPartEnd"),p=h.END,c=0):u=0;if(u>0)o[u-1]=l;else if(n>0){let M=new Uint8Array(o.buffer,o.byteOffset,o.byteLength);R("onPartData",0,n,M),n=0,d("onPartData"),a--}break;case h.END:break;default:throw new Error(`Unexpected state entered: ${p}`)}f("onHeaderField"),f("onHeaderValue"),f("onPartData"),this.index=u,this.state=p,this.flags=c}end(){if(this.state===h.HEADER_FIELD_START&&this.index===0||this.state===h.PART_DATA&&this.index===this.boundary.length)this.onPartEnd();else if(this.state!==h.END)throw new Error("MultipartParser.end(): stream ended unexpectedly")}}});var tc={};tt(tc,{default:()=>ec});module.exports=Ci(tc);var Yt=require("@raycast/api"),gi=v(mt()),Mi=require("lodash"),Vr=require("react");var K=require("@raycast/api"),lo=require("date-fns");var ge=require("date-fns"),Er=[{title:"Latest Activity",value:"sort:latest"},{title:"Date Created",value:"sort:date_created"},{title:"Top: Past Day",value:"sort:top created:>=1d"},{title:"Top: Past Week",value:"sort:top created:>=1w"},{title:"Top: Past Month",value:"sort:top created:>=1m"},{title:"Top: Past Year",value:"sort:top created:>=1y"},{title:"Top: All",value:"sort:top"}],io=Er[0].value,so=e=>{let t=new Date,a,r=e.match(/sort:top created:>=(\d+)([dwmy])/);if(!r)return e;let n=parseInt(r[1],10);switch(r[2]){case"d":a=(0,ge.subDays)(t,n);break;case"w":a=(0,ge.subWeeks)(t,n);break;case"m":a=(0,ge.subMonths)(t,n);break;case"y":a=(0,ge.subYears)(t,n);break;default:throw new Error("Unsupported time unit")}return`sort:top created:>=${(0,ge.format)(a,"yyyy-MM-dd")}`};var Vt=require("@raycast/api");function Cr(e){return e?{icon:{source:e.avatarUrl??Vt.Icon.Person,mask:Vt.Image.Mask.Circle},text:(e.name?e.name:e.login)??"-"}:{icon:Vt.Icon.Person,text:"Unknown"}}var z=require("@raycast/api"),Me=require("react/jsx-runtime"),po=({sortQuery:e,setSortQuery:t,data:a})=>t?(0,Me.jsxs)(z.ActionPanel.Submenu,{title:"Sort by",icon:z.Icon.ArrowUp,shortcut:z.Keyboard.Shortcut.Common.Duplicate,children:[a.filter(({value:r})=>!r.startsWith("sort:reaction")).map(({title:r,value:n})=>(0,Me.jsx)(uo,{title:r,value:n,sortQuery:e??"",setSortQuery:t},n||"relevance")),a.some(({value:r})=>r.startsWith("sort:reaction"))&&(0,Me.jsx)(z.ActionPanel.Section,{title:"Most Reactions",children:a.filter(({value:r})=>r.startsWith("sort:reaction")).map(({title:r,value:n})=>(0,Me.jsx)(uo,{title:r,value:n,sortQuery:e??"",setSortQuery:t},n))})]}):(0,Me.jsx)(Me.Fragment,{}),uo=({title:e,value:t,sortQuery:a,setSortQuery:r})=>(0,Me.jsx)(z.Action,{title:e,icon:a===t?{source:z.Icon.CheckCircle,tintColor:z.Color.Green}:z.Icon.Circle,onAction:()=>r(t)});var Ke=require("react/jsx-runtime");function pp(e){let t=e.category?.name?`Category: ${e.category?.name}`:"Unknown",a=e.category?.emojiHTML;if(!a)return{value:{source:e.repository?.owner?.avatarUrl},tooltip:t};let n=(()=>{let o=/fallback-src="(.*)"/,i=a.match(o);if(i)return i[1]})();return n&&{value:{source:n},tooltip:t}}function co(e){let t=e.discussion,a=Cr(t.author);return(0,Ke.jsx)(K.List.Item,{icon:pp(t),title:t.title,subtitle:t.repository?.nameWithOwner,accessories:[{icon:t.answer?{source:K.Icon.Checkmark,tintColor:K.Color.Green}:void 0,tooltip:t.answer?"Answered":void 0},{icon:K.Icon.ArrowUp,text:`${t.upvoteCount}`,tooltip:`${t.upvoteCount} Upvotes`},{text:t.comments?`${t.comments.totalCount}`:void 0,icon:t.comments?K.Icon.SpeechBubble:void 0,tooltip:t.comments?`Comments: ${t.comments.totalCount}`:void 0},...t.publishedAt?[{date:new Date(t.publishedAt),tooltip:(0,lo.format)(new Date(t.publishedAt),"EEEE d MMMM yyyy 'at' HH:mm")}]:[],{icon:a.icon,tooltip:a.text}],actions:(0,Ke.jsxs)(K.ActionPanel,{children:[(0,Ke.jsx)(K.Action.OpenInBrowser,{url:t.url}),(0,Ke.jsx)(K.ActionPanel.Section,{children:(0,Ke.jsx)(po,{data:Er,...e})})]})})}var B=require("@raycast/api");function hr(e){return[...e.userLogin?[`user:${e.userLogin}`]:[],...(e.orgLogins??[]).filter(a=>!!a).map(a=>`org:${a}`)].join(" ")}var ii=v(mt());var ti=require("@octokit/rest"),ai=require("@raycast/api"),ri=v(mt());var xa=JSON;var yo=e=>e.toUpperCase(),So=e=>{let t={};return e.forEach((a,r)=>{t[r]=a}),t};var bo=(e,t,a)=>e.document?e:{document:e,variables:t,requestHeaders:a,signal:void 0},Io=(e,t,a)=>e.query?e:{query:e,variables:t,requestHeaders:a,signal:void 0},go=(e,t)=>e.documents?e:{documents:e,requestHeaders:t,signal:void 0};var Ua=require("graphql"),Mo=e=>{let t,a=e.definitions.filter(r=>r.kind==="OperationDefinition");return a.length===1&&(t=a[0]?.name?.value),t},Ye=e=>{if(typeof e=="string"){let a;try{let r=(0,Ua.parse)(e);a=Mo(r)}catch{}return{query:e,operationName:a}}let t=Mo(e);return{query:(0,Ua.print)(e),operationName:t}};var Je=class e extends Error{constructor(t,a){let r=`${e.extractMessage(t)}: ${JSON.stringify({response:t,request:a})}`;super(r),Object.setPrototypeOf(this,e.prototype),this.response=t,this.request=a,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,e)}static extractMessage(t){return t.errors?.[0]?.message??`GraphQL Error (Code: ${t.status})`}};var ke=v(wt(),1);var lp="connection_init",cp="connection_ack",Ro="ping",Ao="pong",yp="subscribe",dp="next",Sp="error",fo="complete",Ve=class e{get type(){return this._type}get id(){return this._id}get payload(){return this._payload}constructor(t,a,r){this._type=t,this._payload=a,this._id=r}get text(){let t={type:this.type};return this.id!=null&&this.id!=null&&(t.id=this.id),this.payload!=null&&this.payload!=null&&(t.payload=this.payload),JSON.stringify(t)}static parse(t,a){let{type:r,payload:n,id:o}=JSON.parse(t);return new e(r,a(n),o)}},_a=class{constructor(t,{onInit:a,onAcknowledged:r,onPing:n,onPong:o}){this.socketState={acknowledged:!1,lastRequestId:0,subscriptions:{}},this.socket=t,t.addEventListener("open",async i=>{this.socketState.acknowledged=!1,this.socketState.subscriptions={},t.send(Ip(a?await a():null).text)}),t.addEventListener("close",i=>{this.socketState.acknowledged=!1,this.socketState.subscriptions={}}),t.addEventListener("error",i=>{console.error(i)}),t.addEventListener("message",i=>{try{let s=bp(i.data);switch(s.type){case cp:{this.socketState.acknowledged?console.warn("Duplicate CONNECTION_ACK message ignored"):(this.socketState.acknowledged=!0,r&&r(s.payload));return}case Ro:{n?n(s.payload).then(y=>t.send(mo(y).text)):t.send(mo(null).text);return}case Ao:{o&&o(s.payload);return}}if(!this.socketState.acknowledged||s.id===void 0||s.id===null||!this.socketState.subscriptions[s.id])return;let{query:u,variables:p,subscriber:c}=this.socketState.subscriptions[s.id];switch(s.type){case dp:{!s.payload.errors&&s.payload.data&&c.next&&c.next(s.payload.data),s.payload.errors&&c.error&&c.error(new Je({...s.payload,status:200},{query:u,variables:p}));return}case Sp:{c.error&&c.error(new Je({errors:s.payload,status:200},{query:u,variables:p}));return}case fo:{c.complete&&c.complete(),delete this.socketState.subscriptions[s.id];return}}}catch(s){console.error(s),t.close(1006)}t.close(4400,"Unknown graphql-ws message.")})}makeSubscribe(t,a,r,n){let o=(this.socketState.lastRequestId++).toString();return this.socketState.subscriptions[o]={query:t,variables:n,subscriber:r},this.socket.send(Mp(o,{query:t,operationName:a,variables:n}).text),()=>{this.socket.send(mp(o).text),delete this.socketState.subscriptions[o]}}rawRequest(t,a){return new Promise((r,n)=>{let o;this.rawSubscribe(t,{next:(i,s)=>o={data:i,extensions:s},error:n,complete:()=>r(o)},a)})}request(t,a){return new Promise((r,n)=>{let o;this.subscribe(t,{next:i=>o=i,error:n,complete:()=>r(o)},a)})}subscribe(t,a,r){let{query:n,operationName:o}=Ye(t);return this.makeSubscribe(n,o,a,r)}rawSubscribe(t,a,r){return this.makeSubscribe(t,void 0,a,r)}ping(t){this.socket.send(gp(t).text)}close(){this.socket.close(1e3)}};_a.PROTOCOL="graphql-transport-ws";function bp(e,t=a=>a){return Ve.parse(e,t)}function Ip(e){return new Ve(lp,e)}function gp(e){return new Ve(Ro,e,void 0)}function mo(e){return new Ve(Ao,e,void 0)}function Mp(e,t){return new Ve(yp,t,e)}function mp(e){return new Ve(fo,void 0,e)}var Rt=e=>{let t={};return e&&(typeof Headers<"u"&&e instanceof Headers||ke&&ke.Headers&&e instanceof ke.Headers?t=So(e):Array.isArray(e)?e.forEach(([a,r])=>{a&&r!==void 0&&(t[a]=r)}):t=e),t},Po=e=>e.replace(/([\s,]|#[^\n\r]+)+/g," ").trim(),Rp=e=>{if(!Array.isArray(e.query)){let r=e,n=[`query=${encodeURIComponent(Po(r.query))}`];return e.variables&&n.push(`variables=${encodeURIComponent(r.jsonSerializer.stringify(r.variables))}`),r.operationName&&n.push(`operationName=${encodeURIComponent(r.operationName)}`),n.join("&")}if(typeof e.variables<"u"&&!Array.isArray(e.variables))throw new Error("Cannot create query with given variable type, array expected");let t=e,a=e.query.reduce((r,n,o)=>(r.push({query:Po(n),variables:t.variables?t.jsonSerializer.stringify(t.variables[o]):void 0}),r),[]);return`query=${encodeURIComponent(t.jsonSerializer.stringify(a))}`},Ap=e=>async t=>{let{url:a,query:r,variables:n,operationName:o,fetch:i,fetchOptions:s,middleware:u}=t,p={...t.headers},c="",y;e==="POST"?(y=fp(r,n,o,s.jsonSerializer),typeof y=="string"&&(p["Content-Type"]="application/json")):c=Rp({query:r,variables:n,operationName:o,jsonSerializer:s.jsonSerializer??xa});let g={method:e,headers:p,body:y,...s},m=a,l=g;if(u){let S=await Promise.resolve(u({...g,url:a,operationName:o,variables:n})),{url:d,...b}=S;m=d,l=b}return c&&(m=`${m}?${c}`),await i(m,l)},va=class{constructor(t,a={}){this.url=t,this.requestConfig=a,this.rawRequest=async(...r)=>{let[n,o,i]=r,s=Io(n,o,i),{headers:u,fetch:p=ke.default,method:c="POST",requestMiddleware:y,responseMiddleware:g,...m}=this.requestConfig,{url:l}=this;s.signal!==void 0&&(m.signal=s.signal);let{operationName:S}=Ye(s.query);return Dr({url:l,query:s.query,variables:s.variables,headers:{...Rt(xr(u)),...Rt(s.requestHeaders)},operationName:S,fetch:p,method:c,fetchOptions:m,middleware:y}).then(d=>(g&&g(d),d)).catch(d=>{throw g&&g(d),d})}}async request(t,...a){let[r,n]=a,o=bo(t,r,n),{headers:i,fetch:s=ke.default,method:u="POST",requestMiddleware:p,responseMiddleware:c,...y}=this.requestConfig,{url:g}=this;o.signal!==void 0&&(y.signal=o.signal);let{query:m,operationName:l}=Ye(o.document);return Dr({url:g,query:m,variables:o.variables,headers:{...Rt(xr(i)),...Rt(o.requestHeaders)},operationName:l,fetch:s,method:u,fetchOptions:y,middleware:p}).then(S=>(c&&c(S),S.data)).catch(S=>{throw c&&c(S),S})}batchRequests(t,a){let r=go(t,a),{headers:n,...o}=this.requestConfig;r.signal!==void 0&&(o.signal=r.signal);let i=r.documents.map(({document:u})=>Ye(u).query),s=r.documents.map(({variables:u})=>u);return Dr({url:this.url,query:i,variables:s,headers:{...Rt(xr(n)),...Rt(r.requestHeaders)},operationName:void 0,fetch:this.requestConfig.fetch??ke.default,method:this.requestConfig.method||"POST",fetchOptions:o,middleware:this.requestConfig.requestMiddleware}).then(u=>(this.requestConfig.responseMiddleware&&this.requestConfig.responseMiddleware(u),u.data)).catch(u=>{throw this.requestConfig.responseMiddleware&&this.requestConfig.responseMiddleware(u),u})}setHeaders(t){return this.requestConfig.headers=t,this}setHeader(t,a){let{headers:r}=this.requestConfig;return r?r[t]=a:this.requestConfig.headers={[t]:a},this}setEndpoint(t){return this.url=t,this}},Dr=async e=>{let{query:t,variables:a,fetchOptions:r}=e,n=Ap(yo(e.method??"post")),o=Array.isArray(e.query),i=await n(e),s=await Pp(i,r.jsonSerializer??xa),u=Array.isArray(s)?!s.some(({data:c})=>!c):!!s.data,p=Array.isArray(s)||!s.errors||Array.isArray(s.errors)&&!s.errors.length||r.errorPolicy==="all"||r.errorPolicy==="ignore";if(i.ok&&p&&u){let{errors:c,...y}=(Array.isArray(s),s),g=r.errorPolicy==="ignore"?y:s;return{...o?{data:g}:g,headers:i.headers,status:i.status}}else{let c=typeof s=="string"?{error:s}:s;throw new Je({...c,status:i.status,headers:i.headers},{query:t,variables:a})}};var fp=(e,t,a,r)=>{let n=r??xa;if(!Array.isArray(e))return n.stringify({query:e,variables:t,operationName:a});if(typeof t<"u"&&!Array.isArray(t))throw new Error("Cannot create request body with given variable type, array expected");let o=e.reduce((i,s,u)=>(i.push({query:s,variables:t?t[u]:void 0}),i),[]);return n.stringify(o)},Pp=async(e,t)=>{let a;return e.headers.forEach((r,n)=>{n.toLowerCase()==="content-type"&&(a=r)}),a&&(a.toLowerCase().startsWith("application/json")||a.toLowerCase().startsWith("application/graphql+json")||a.toLowerCase().startsWith("application/graphql-response+json"))?t.parse(await e.text()):e.text()},xr=e=>typeof e=="function"?e():e;var $o=v(require("node:http"),1),Qo=v(require("node:https"),1),et=v(require("node:zlib"),1),X=v(require("node:stream"),1),$t=require("node:buffer");var kt={};tt(kt,{default:()=>Ta.default});j(kt,require("data-uri-to-buffer"));var Ta=v(require("data-uri-to-buffer"));var ne=v(require("node:stream"),1),_e=require("node:util"),J=require("node:buffer");var Ft={};tt(Ft,{default:()=>wa.default});j(Ft,require("fetch-blob"));var wa=v(require("fetch-blob"));Oa();var Ue=class extends Error{constructor(t,a){super(t),Error.captureStackTrace(this,this.constructor),this.type=a}get name(){return this.constructor.name}get[Symbol.toStringTag](){return this.constructor.name}};var G=class extends Ue{constructor(t,a,r){super(t,a),r&&(this.code=this.errno=r.code,this.erroredSysCall=r.syscall)}};var Ba=Symbol.toStringTag,Ur=e=>typeof e=="object"&&typeof e.append=="function"&&typeof e.delete=="function"&&typeof e.get=="function"&&typeof e.getAll=="function"&&typeof e.has=="function"&&typeof e.set=="function"&&typeof e.sort=="function"&&e[Ba]==="URLSearchParams",jt=e=>e&&typeof e=="object"&&typeof e.arrayBuffer=="function"&&typeof e.type=="string"&&typeof e.stream=="function"&&typeof e.constructor=="function"&&/^(Blob|File)$/.test(e[Ba]),Co=e=>typeof e=="object"&&(e[Ba]==="AbortSignal"||e[Ba]==="EventTarget"),ho=(e,t)=>{let a=new URL(t).hostname,r=new URL(e).hostname;return a===r||a.endsWith(`.${r}`)},Do=(e,t)=>{let a=new URL(t).protocol,r=new URL(e).protocol;return a===r};var vp=(0,_e.promisify)(ne.default.pipeline),$=Symbol("Body internals"),Re=class{constructor(t,{size:a=0}={}){let r=null;t===null?t=null:Ur(t)?t=J.Buffer.from(t.toString()):jt(t)||J.Buffer.isBuffer(t)||(_e.types.isAnyArrayBuffer(t)?t=J.Buffer.from(t):ArrayBuffer.isView(t)?t=J.Buffer.from(t.buffer,t.byteOffset,t.byteLength):t instanceof ne.default||(t instanceof H.FormData?(t=(0,H.formDataToBlob)(t),r=t.type.split("=")[1]):t=J.Buffer.from(String(t))));let n=t;J.Buffer.isBuffer(t)?n=ne.default.Readable.from(t):jt(t)&&(n=ne.default.Readable.from(t.stream())),this[$]={body:t,stream:n,boundary:r,disturbed:!1,error:null},this.size=a,t instanceof ne.default&&t.on("error",o=>{let i=o instanceof Ue?o:new G(`Invalid response body while trying to fetch ${this.url}: ${o.message}`,"system",o);this[$].error=i})}get body(){return this[$].stream}get bodyUsed(){return this[$].disturbed}async arrayBuffer(){let{buffer:t,byteOffset:a,byteLength:r}=await Tr(this);return t.slice(a,a+r)}async formData(){let t=this.headers.get("content-type");if(t.startsWith("application/x-www-form-urlencoded")){let r=new H.FormData,n=new URLSearchParams(await this.text());for(let[o,i]of n)r.append(o,i);return r}let{toFormData:a}=await Promise.resolve().then(()=>(vo(),_o));return a(this.body,t)}async blob(){let t=this.headers&&this.headers.get("content-type")||this[$].body&&this[$].body.type||"",a=await this.arrayBuffer();return new wa.default([a],{type:t})}async json(){let t=await this.text();return JSON.parse(t)}async text(){let t=await Tr(this);return new TextDecoder().decode(t)}buffer(){return Tr(this)}};Re.prototype.buffer=(0,_e.deprecate)(Re.prototype.buffer,"Please use 'response.arrayBuffer()' instead of 'response.buffer()'","node-fetch#buffer");Object.defineProperties(Re.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0},data:{get:(0,_e.deprecate)(()=>{},"data doesn't exist, use json(), text(), arrayBuffer(), or body instead","https://github.com/node-fetch/node-fetch/issues/1000 (response)")}});async function Tr(e){if(e[$].disturbed)throw new TypeError(`body used already for: ${e.url}`);if(e[$].disturbed=!0,e[$].error)throw e[$].error;let{body:t}=e;if(t===null)return J.Buffer.alloc(0);if(!(t instanceof ne.default))return J.Buffer.alloc(0);let a=[],r=0;try{for await(let n of t){if(e.size>0&&r+n.length>e.size){let o=new G(`content size at ${e.url} over limit: ${e.size}`,"max-size");throw t.destroy(o),o}r+=n.length,a.push(n)}}catch(n){throw n instanceof Ue?n:new G(`Invalid response body while trying to fetch ${e.url}: ${n.message}`,"system",n)}if(t.readableEnded===!0||t._readableState.ended===!0)try{return a.every(n=>typeof n=="string")?J.Buffer.from(a.join("")):J.Buffer.concat(a,r)}catch(n){throw new G(`Could not create Buffer from response body for ${e.url}: ${n.message}`,"system",n)}else throw new G(`Premature close of server response while trying to fetch ${e.url}`)}var At=(e,t)=>{let a,r,{body:n}=e[$];if(e.bodyUsed)throw new Error("cannot clone body after it is used");return n instanceof ne.default&&typeof n.getBoundary!="function"&&(a=new ne.PassThrough({highWaterMark:t}),r=new ne.PassThrough({highWaterMark:t}),n.pipe(a),n.pipe(r),e[$].stream=a,n=r),n},Tp=(0,_e.deprecate)(e=>e.getBoundary(),"form-data doesn't follow the spec and requires special treatment. Use alternative package","https://github.com/node-fetch/node-fetch/issues/1167"),Na=(e,t)=>e===null?null:typeof e=="string"?"text/plain;charset=UTF-8":Ur(e)?"application/x-www-form-urlencoded;charset=UTF-8":jt(e)?e.type||null:J.Buffer.isBuffer(e)||_e.types.isAnyArrayBuffer(e)||ArrayBuffer.isView(e)?null:e instanceof H.FormData?`multipart/form-data; boundary=${t[$].boundary}`:e&&typeof e.getBoundary=="function"?`multipart/form-data;boundary=${Tp(e)}`:e instanceof ne.default?null:"text/plain;charset=UTF-8",To=e=>{let{body:t}=e[$];return t===null?0:jt(t)?t.size:J.Buffer.isBuffer(t)?t.length:t&&typeof t.getLengthSync=="function"&&t.hasKnownLength&&t.hasKnownLength()?t.getLengthSync():null},wo=async(e,{body:t})=>{t===null?e.end():await vp(t,e)};var wr=require("node:util"),Ht=v(require("node:http"),1),Va=typeof Ht.default.validateHeaderName=="function"?Ht.default.validateHeaderName:e=>{if(!/^[\^`\-\w!#$%&'*+.|~]+$/.test(e)){let t=new TypeError(`Header name must be a valid HTTP token [${e}]`);throw Object.defineProperty(t,"code",{value:"ERR_INVALID_HTTP_TOKEN"}),t}},Or=typeof Ht.default.validateHeaderValue=="function"?Ht.default.validateHeaderValue:(e,t)=>{if(/[^\t\u0020-\u007E\u0080-\u00FF]/.test(t)){let a=new TypeError(`Invalid character in header content ["${e}"]`);throw Object.defineProperty(a,"code",{value:"ERR_INVALID_CHAR"}),a}},Z=class e extends URLSearchParams{constructor(t){let a=[];if(t instanceof e){let r=t.raw();for(let[n,o]of Object.entries(r))a.push(...o.map(i=>[n,i]))}else if(t!=null)if(typeof t=="object"&&!wr.types.isBoxedPrimitive(t)){let r=t[Symbol.iterator];if(r==null)a.push(...Object.entries(t));else{if(typeof r!="function")throw new TypeError("Header pairs must be iterable");a=[...t].map(n=>{if(typeof n!="object"||wr.types.isBoxedPrimitive(n))throw new TypeError("Each header pair must be an iterable object");return[...n]}).map(n=>{if(n.length!==2)throw new TypeError("Each header pair must be a name/value tuple");return[...n]})}}else throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");return a=a.length>0?a.map(([r,n])=>(Va(r),Or(r,String(n)),[String(r).toLowerCase(),String(n)])):void 0,super(a),new Proxy(this,{get(r,n,o){switch(n){case"append":case"set":return(i,s)=>(Va(i),Or(i,String(s)),URLSearchParams.prototype[n].call(r,String(i).toLowerCase(),String(s)));case"delete":case"has":case"getAll":return i=>(Va(i),URLSearchParams.prototype[n].call(r,String(i).toLowerCase()));case"keys":return()=>(r.sort(),new Set(URLSearchParams.prototype.keys.call(r)).keys());default:return Reflect.get(r,n,o)}}})}get[Symbol.toStringTag](){return this.constructor.name}toString(){return Object.prototype.toString.call(this)}get(t){let a=this.getAll(t);if(a.length===0)return null;let r=a.join(", ");return/^content-encoding$/i.test(t)&&(r=r.toLowerCase()),r}forEach(t,a=void 0){for(let r of this.keys())Reflect.apply(t,a,[this.get(r),r,this])}*values(){for(let t of this.keys())yield this.get(t)}*entries(){for(let t of this.keys())yield[t,this.get(t)]}[Symbol.iterator](){return this.entries()}raw(){return[...this.keys()].reduce((t,a)=>(t[a]=this.getAll(a),t),{})}[Symbol.for("nodejs.util.inspect.custom")](){return[...this.keys()].reduce((t,a)=>{let r=this.getAll(a);return a==="host"?t[a]=r[0]:t[a]=r.length>1?r:r[0],t},{})}};Object.defineProperties(Z.prototype,["get","entries","forEach","values"].reduce((e,t)=>(e[t]={enumerable:!0},e),{}));function Oo(e=[]){return new Z(e.reduce((t,a,r,n)=>(r%2===0&&t.push(n.slice(r,r+2)),t),[]).filter(([t,a])=>{try{return Va(t),Or(t,String(a)),!0}catch{return!1}}))}var wp=new Set([301,302,303,307,308]),ka=e=>wp.has(e);var le=Symbol("Response internals"),oe=class e extends Re{constructor(t=null,a={}){super(t,a);let r=a.status!=null?a.status:200,n=new Z(a.headers);if(t!==null&&!n.has("Content-Type")){let o=Na(t,this);o&&n.append("Content-Type",o)}this[le]={type:"default",url:a.url,status:r,statusText:a.statusText||"",headers:n,counter:a.counter,highWaterMark:a.highWaterMark}}get type(){return this[le].type}get url(){return this[le].url||""}get status(){return this[le].status}get ok(){return this[le].status>=200&&this[le].status<300}get redirected(){return this[le].counter>0}get statusText(){return this[le].statusText}get headers(){return this[le].headers}get highWaterMark(){return this[le].highWaterMark}clone(){return new e(At(this,this.highWaterMark),{type:this.type,url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected,size:this.size,highWaterMark:this.highWaterMark})}static redirect(t,a=302){if(!ka(a))throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');return new e(null,{headers:{location:new URL(t).toString()},status:a})}static error(){let t=new e(null,{status:0,statusText:""});return t[le].type="error",t}static json(t=void 0,a={}){let r=JSON.stringify(t);if(r===void 0)throw new TypeError("data is not JSON serializable");let n=new Z(a&&a.headers);return n.has("content-type")||n.set("content-type","application/json"),new e(r,{...a,headers:n})}get[Symbol.toStringTag](){return"Response"}};Object.defineProperties(oe.prototype,{type:{enumerable:!0},url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}});var zo=require("node:url"),Ho=require("node:util");var Bo=e=>{if(e.search)return e.search;let t=e.href.length-1,a=e.hash||(e.href[t]==="#"?"#":"");return e.href[t-a.length]==="?"?"?":""};var qo=require("node:net");function Lo(e,t=!1){return e==null||(e=new URL(e),/^(about|blob|data):$/.test(e.protocol))?"no-referrer":(e.username="",e.password="",e.hash="",t&&(e.pathname="",e.search=""),e)}var No=new Set(["","no-referrer","no-referrer-when-downgrade","same-origin","origin","strict-origin","origin-when-cross-origin","strict-origin-when-cross-origin","unsafe-url"]),Vo="strict-origin-when-cross-origin";function ko(e){if(!No.has(e))throw new TypeError(`Invalid referrerPolicy: ${e}`);return e}function Op(e){if(/^(http|ws)s:$/.test(e.protocol))return!0;let t=e.host.replace(/(^\[)|(]$)/g,""),a=(0,qo.isIP)(t);return a===4&&/^127\./.test(t)||a===6&&/^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(t)?!0:e.host==="localhost"||e.host.endsWith(".localhost")?!1:e.protocol==="file:"}function ft(e){return/^about:(blank|srcdoc)$/.test(e)||e.protocol==="data:"||/^(blob|filesystem):$/.test(e.protocol)?!0:Op(e)}function Fo(e,{referrerURLCallback:t,referrerOriginCallback:a}={}){if(e.referrer==="no-referrer"||e.referrerPolicy==="")return null;let r=e.referrerPolicy;if(e.referrer==="about:client")return"no-referrer";let n=e.referrer,o=Lo(n),i=Lo(n,!0);o.toString().length>4096&&(o=i),t&&(o=t(o)),a&&(i=a(i));let s=new URL(e.url);switch(r){case"no-referrer":return"no-referrer";case"origin":return i;case"unsafe-url":return o;case"strict-origin":return ft(o)&&!ft(s)?"no-referrer":i.toString();case"strict-origin-when-cross-origin":return o.origin===s.origin?o:ft(o)&&!ft(s)?"no-referrer":i;case"same-origin":return o.origin===s.origin?o:"no-referrer";case"origin-when-cross-origin":return o.origin===s.origin?o:i;case"no-referrer-when-downgrade":return ft(o)&&!ft(s)?"no-referrer":o;default:throw new TypeError(`Invalid referrerPolicy: ${r}`)}}function jo(e){let t=(e.get("referrer-policy")||"").split(/[,\s]+/),a="";for(let r of t)r&&No.has(r)&&(a=r);return a}var O=Symbol("Request internals"),Gt=e=>typeof e=="object"&&typeof e[O]=="object",Bp=(0,Ho.deprecate)(()=>{},".data is not a valid RequestInit property, use .body instead","https://github.com/node-fetch/node-fetch/issues/1000 (request)"),Xe=class e extends Re{constructor(t,a={}){let r;if(Gt(t)?r=new URL(t.url):(r=new URL(t),t={}),r.username!==""||r.password!=="")throw new TypeError(`${r} is an url with embedded credentials.`);let n=a.method||t.method||"GET";if(/^(delete|get|head|options|post|put)$/i.test(n)&&(n=n.toUpperCase()),!Gt(a)&&"data"in a&&Bp(),(a.body!=null||Gt(t)&&t.body!==null)&&(n==="GET"||n==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");let o=a.body?a.body:Gt(t)&&t.body!==null?At(t):null;super(o,{size:a.size||t.size||0});let i=new Z(a.headers||t.headers||{});if(o!==null&&!i.has("Content-Type")){let p=Na(o,this);p&&i.set("Content-Type",p)}let s=Gt(t)?t.signal:null;if("signal"in a&&(s=a.signal),s!=null&&!Co(s))throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");let u=a.referrer==null?t.referrer:a.referrer;if(u==="")u="no-referrer";else if(u){let p=new URL(u);u=/^about:(\/\/)?client$/.test(p)?"client":p}else u=void 0;this[O]={method:n,redirect:a.redirect||t.redirect||"follow",headers:i,parsedURL:r,signal:s,referrer:u},this.follow=a.follow===void 0?t.follow===void 0?20:t.follow:a.follow,this.compress=a.compress===void 0?t.compress===void 0?!0:t.compress:a.compress,this.counter=a.counter||t.counter||0,this.agent=a.agent||t.agent,this.highWaterMark=a.highWaterMark||t.highWaterMark||16384,this.insecureHTTPParser=a.insecureHTTPParser||t.insecureHTTPParser||!1,this.referrerPolicy=a.referrerPolicy||t.referrerPolicy||""}get method(){return this[O].method}get url(){return(0,zo.format)(this[O].parsedURL)}get headers(){return this[O].headers}get redirect(){return this[O].redirect}get signal(){return this[O].signal}get referrer(){if(this[O].referrer==="no-referrer")return"";if(this[O].referrer==="client")return"about:client";if(this[O].referrer)return this[O].referrer.toString()}get referrerPolicy(){return this[O].referrerPolicy}set referrerPolicy(t){this[O].referrerPolicy=ko(t)}clone(){return new e(this)}get[Symbol.toStringTag](){return"Request"}};Object.defineProperties(Xe.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0},referrer:{enumerable:!0},referrerPolicy:{enumerable:!0}});var Go=e=>{let{parsedURL:t}=e[O],a=new Z(e[O].headers);a.has("Accept")||a.set("Accept","*/*");let r=null;if(e.body===null&&/^(post|put)$/i.test(e.method)&&(r="0"),e.body!==null){let s=To(e);typeof s=="number"&&!Number.isNaN(s)&&(r=String(s))}r&&a.set("Content-Length",r),e.referrerPolicy===""&&(e.referrerPolicy=Vo),e.referrer&&e.referrer!=="no-referrer"?e[O].referrer=Fo(e):e[O].referrer="no-referrer",e[O].referrer instanceof URL&&a.set("Referer",e.referrer),a.has("User-Agent")||a.set("User-Agent","node-fetch"),e.compress&&!a.has("Accept-Encoding")&&a.set("Accept-Encoding","gzip, deflate, br");let{agent:n}=e;typeof n=="function"&&(n=n(t));let o=Bo(t),i={path:t.pathname+o,method:e.method,headers:a[Symbol.for("nodejs.util.inspect.custom")](),insecureHTTPParser:e.insecureHTTPParser,agent:n};return{parsedURL:t,options:i}};var Fa=class extends Ue{constructor(t,a="aborted"){super(t,a)}};Oa();_r();var Lp=new Set(["data:","http:","https:"]);async function ja(e,t){return new Promise((a,r)=>{let n=new Xe(e,t),{parsedURL:o,options:i}=Go(n);if(!Lp.has(o.protocol))throw new TypeError(`node-fetch cannot load ${e}. URL scheme "${o.protocol.replace(/:$/,"")}" is not supported.`);if(o.protocol==="data:"){let l=(0,Ta.default)(n.url),S=new oe(l,{headers:{"Content-Type":l.typeFull}});a(S);return}let s=(o.protocol==="https:"?Qo.default:$o.default).request,{signal:u}=n,p=null,c=()=>{let l=new Fa("The operation was aborted.");r(l),n.body&&n.body instanceof X.default.Readable&&n.body.destroy(l),!(!p||!p.body)&&p.body.emit("error",l)};if(u&&u.aborted){c();return}let y=()=>{c(),m()},g=s(o.toString(),i);u&&u.addEventListener("abort",y);let m=()=>{g.abort(),u&&u.removeEventListener("abort",y)};g.on("error",l=>{r(new G(`request to ${n.url} failed, reason: ${l.message}`,"system",l)),m()}),qp(g,l=>{p&&p.body&&p.body.destroy(l)}),process.version<"v14"&&g.on("socket",l=>{let S;l.prependListener("end",()=>{S=l._eventsCount}),l.prependListener("close",d=>{if(p&&S<l._eventsCount&&!d){let b=new Error("Premature close");b.code="ERR_STREAM_PREMATURE_CLOSE",p.body.emit("error",b)}})}),g.on("response",l=>{g.setTimeout(0);let S=Oo(l.rawHeaders);if(ka(l.statusCode)){let M=S.get("Location"),P=null;try{P=M===null?null:new URL(M,n.url)}catch{if(n.redirect!=="manual"){r(new G(`uri requested responds with an invalid redirect URL: ${M}`,"invalid-redirect")),m();return}}switch(n.redirect){case"error":r(new G(`uri requested responds with a redirect, redirect mode is set to error: ${n.url}`,"no-redirect")),m();return;case"manual":break;case"follow":{if(P===null)break;if(n.counter>=n.follow){r(new G(`maximum redirect reached at: ${n.url}`,"max-redirect")),m();return}let A={headers:new Z(n.headers),follow:n.follow,counter:n.counter+1,agent:n.agent,compress:n.compress,method:n.method,body:At(n),signal:n.signal,size:n.size,referrer:n.referrer,referrerPolicy:n.referrerPolicy};if(!ho(n.url,P)||!Do(n.url,P))for(let q of["authorization","www-authenticate","cookie","cookie2"])A.headers.delete(q);if(l.statusCode!==303&&n.body&&t.body instanceof X.default.Readable){r(new G("Cannot follow redirect with body being a readable stream","unsupported-redirect")),m();return}(l.statusCode===303||(l.statusCode===301||l.statusCode===302)&&n.method==="POST")&&(A.method="GET",A.body=void 0,A.headers.delete("content-length"));let x=jo(S);x&&(A.referrerPolicy=x),a(ja(new Xe(P,A))),m();return}default:return r(new TypeError(`Redirect option '${n.redirect}' is not a valid value of RequestRedirect`))}}u&&l.once("end",()=>{u.removeEventListener("abort",y)});let d=(0,X.pipeline)(l,new X.PassThrough,M=>{M&&r(M)});process.version<"v12.10"&&l.on("aborted",y);let b={url:n.url,status:l.statusCode,statusText:l.statusMessage,headers:S,size:n.size,counter:n.counter,highWaterMark:n.highWaterMark},R=S.get("Content-Encoding");if(!n.compress||n.method==="HEAD"||R===null||l.statusCode===204||l.statusCode===304){p=new oe(d,b),a(p);return}let f={flush:et.default.Z_SYNC_FLUSH,finishFlush:et.default.Z_SYNC_FLUSH};if(R==="gzip"||R==="x-gzip"){d=(0,X.pipeline)(d,et.default.createGunzip(f),M=>{M&&r(M)}),p=new oe(d,b),a(p);return}if(R==="deflate"||R==="x-deflate"){let M=(0,X.pipeline)(l,new X.PassThrough,P=>{P&&r(P)});M.once("data",P=>{(P[0]&15)===8?d=(0,X.pipeline)(d,et.default.createInflate(),A=>{A&&r(A)}):d=(0,X.pipeline)(d,et.default.createInflateRaw(),A=>{A&&r(A)}),p=new oe(d,b),a(p)}),M.once("end",()=>{p||(p=new oe(d,b),a(p))});return}if(R==="br"){d=(0,X.pipeline)(d,et.default.createBrotliDecompress(),M=>{M&&r(M)}),p=new oe(d,b),a(p);return}p=new oe(d,b),a(p)}),wo(g,n).catch(r)})}function qp(e,t){let a=$t.Buffer.from(`0\r
\r
`),r=!1,n=!1,o;e.on("response",i=>{let{headers:s}=i;r=s["transfer-encoding"]==="chunked"&&!s["content-length"]}),e.on("socket",i=>{let s=()=>{if(r&&!n){let p=new Error("Premature close");p.code="ERR_STREAM_PREMATURE_CLOSE",t(p)}},u=p=>{n=$t.Buffer.compare(p.slice(-5),a)===0,!n&&o&&(n=$t.Buffer.compare(o.slice(-3),a.slice(0,3))===0&&$t.Buffer.compare(p.slice(-2),a.slice(3))===0),o=p};i.prependListener("close",s),i.on("data",u),e.on("close",()=>{i.removeListener("close",s),i.removeListener("data",u)})})}var I=v(require("graphql-tag")),Qt=I.default`
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
`,Np=I.default`
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
  ${Qt}
`,Ae=I.default`
  fragment UserFields on User {
    id
    avatarUrl
    name
    login
    isViewer
  }
`,Wt=I.default`
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
  ${Ae}
`,za=I.default`
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
  ${Wt}
  ${Qt}
  ${Ae}
`,Vp=I.default`
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
  ${Wt}
  ${Qt}
  ${Ae}
`,Wo=I.default`
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
`,Ko=I.default`
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
`,Yo=I.default`
  fragment RepositoryMentionFields on Repository {
    nameWithOwner
    description
    isPrivate
    isArchived
    owner {
      avatarUrl(size: 64)
    }
  }
`,kp=I.default`
  fragment ProjectViewerFields on ProjectV2View {
    id
    name
    number
  }
`,Jo=I.default`
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
  ${Wt}
  ${kp}
`,Zo=I.default`
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
  ${Qt}
  ${Wt}
  ${Ae}
`,Fp=I.default`
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
  ${Qt}
  ${Wt}
  ${Ae}
`,jp=I.default`
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
`,Xo=I.default`
  fragment CommitFields on Commit {
    authoredDate
    oid
    message
  }
`,Br=I.default`
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
`,zp=I.default`
  fragment ReleaseFields on Release {
    id
    description
    name
    publishedAt
    createdAt
    tagName
    url
  }
`,Hp=I.default`
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
`,Gp=I.default`
  mutation createRef($input: CreateRefInput!) {
    createRef(input: $input) {
      clientMutationId
      ref {
        id
        name
      }
    }
  }
`,$p=I.default`
  mutation deleteLinkedBranch($input: DeleteLinkedBranchInput!) {
    deleteLinkedBranch(input: $input) {
      clientMutationId
    }
  }
`,Qp=I.default`
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
  ${Np}
`,Wp=I.default`
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
`,Kp=I.default`
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
  ${Ae}
`,Yp=I.default`
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
`,Jp=I.default`
  query issueDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...IssueDetailFields
    }
  }
  ${Vp}
`,Zp=I.default`
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
  ${za}
`,Xp=I.default`
  query issueByNumber($owner: String!, $name: String!, $issueNumber: Int!) {
    repository(owner: $owner, name: $name) {
      issue(number: $issueNumber) {
        ...IssueFields
      }
    }
  }
  ${za}
`,el=I.default`
  mutation closeIssue($nodeId: ID!, $stateReason: IssueClosedStateReason!) {
    closeIssue(input: { issueId: $nodeId, stateReason: $stateReason }) {
      issue {
        id
      }
    }
  }
`,tl=I.default`
  mutation reopenIssue($nodeId: ID!) {
    reopenIssue(input: { issueId: $nodeId }) {
      issue {
        id
      }
    }
  }
`,al=I.default`
  mutation changeIssueAssignees($issueId: ID!, $assigneeIds: [ID!]) {
    updateIssue(input: { id: $issueId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,rl=I.default`
  mutation changeIssueMilestone($issueId: ID!, $milestoneId: ID) {
    updateIssue(input: { id: $issueId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,nl=I.default`
  mutation addIssueToProject($issueId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $issueId }) {
      clientMutationId
    }
  }
`,ol=I.default`
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
  ${za}
`,il=I.default`
  query searchIssueMentions($query: String!, $numberOfItems: Int!) {
    search(query: $query, type: ISSUE, first: $numberOfItems) {
      nodes {
        ... on Issue {
          ...IssueMentionFields
        }
      }
    }
  }
  ${Wo}
`,sl=I.default`
  query searchPullRequestMentions($query: String!, $numberOfItems: Int!) {
    search(query: $query, type: ISSUE, first: $numberOfItems) {
      nodes {
        ... on PullRequest {
          ...PullRequestMentionFields
        }
      }
    }
  }
  ${Ko}
`,ul=I.default`
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
  ${Wo}
  ${Ko}
`,pl=I.default`
  query searchRepositoryMentions($query: String!, $numberOfItems: Int!) {
    search(query: $query, type: REPOSITORY, first: $numberOfItems) {
      nodes {
        ... on Repository {
          ...RepositoryMentionFields
        }
      }
    }
  }
  ${Yo}
`,ll=I.default`
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
  ${Yo}
`,cl=I.default`
  mutation changeProjectStatus($projectId: ID!, $closed: Boolean!) {
    updateProjectV2(input: { projectId: $projectId, closed: $closed }) {
      clientMutationId
    }
  }
`,yl=I.default`
  query projectDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...ProjectFields
    }
  }
  ${Jo}
`,dl=I.default`
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
  ${Zo}
`,Sl=I.default`
  query pullRequestDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...PullRequestDetailsFields
    }
  }
  ${Fp}
`,bl=I.default`
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
  ${Ae}
`,Il=I.default`
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
`,gl=I.default`
  query pullRequestCommits($nodeId: ID!, $numberOfItems: Int!, $before: String) {
    node(id: $nodeId) {
      ...PullRequestCommitFields
    }
  }
  ${jp}
`,Ml=I.default`
  mutation closePullRequest($nodeId: ID!) {
    closePullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,ml=I.default`
  mutation reopenPullRequest($nodeId: ID!) {
    reopenPullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Rl=I.default`
  mutation markPullRequestReadyForReview($nodeId: ID!) {
    markPullRequestReadyForReview(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Al=I.default`
  mutation addPullRequestReview($nodeId: ID!, $event: PullRequestReviewEvent, $body: String) {
    addPullRequestReview(input: { pullRequestId: $nodeId, event: $event, body: $body }) {
      pullRequestReview {
        id
      }
    }
  }
`,fl=I.default`
  mutation changePullRequestAssignees($pullRequestId: ID!, $assigneeIds: [ID!]) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,Pl=I.default`
  mutation changePullRequestMilestone($pullRequestId: ID!, $milestoneId: ID) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,El=I.default`
  mutation addPullRequestToProject($pullRequestId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $pullRequestId }) {
      clientMutationId
    }
  }
`,Cl=I.default`
  mutation requestReview($pullRequestId: ID!, $collaboratorId: ID!) {
    requestReviews(input: { pullRequestId: $pullRequestId, userIds: [$collaboratorId], union: true }) {
      clientMutationId
    }
  }
`,hl=I.default`
  mutation mergePullRequest($nodeId: ID!, $method: PullRequestMergeMethod!) {
    mergePullRequest(input: { pullRequestId: $nodeId, mergeMethod: $method }) {
      pullRequest {
        nodeId: id
      }
    }
  }
`,Dl=I.default`
  mutation addPullRequestToMergeQueue($nodeId: ID!) {
    enqueuePullRequest(input: { pullRequestId: $nodeId }) {
      __typename
    }
  }
`,xl=I.default`
  mutation removePullRequestFromMergeQueue($nodeId: ID!) {
    dequeuePullRequest(input: { id: $nodeId }) {
      __typename
    }
  }
`,Ul=I.default`
  mutation enablePullRequestAutoMerge($nodeId: ID!, $mergeMethod: PullRequestMergeMethod) {
    enablePullRequestAutoMerge(input: { pullRequestId: $nodeId, mergeMethod: $mergeMethod }) {
      pullRequest {
        id
      }
    }
  }
`,_l=I.default`
  mutation disablePullRequestAutoMerge($nodeId: ID!) {
    disablePullRequestAutoMerge(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,vl=I.default`
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
`,Tl=I.default`
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
  ${Zo}
`,wl=I.default`
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
  ${Br}
`,Ol=I.default`
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
  ${Br}
`,Bl=I.default`
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
`,Ll=I.default`
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
`,ql=I.default`
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
  ${Xo}
  ${Ae}
`,Nl=I.default`
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
  ${Xo}
`,Vl=I.default`
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
  ${za}
`,kl=I.default`
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
  ${zp}
`,Fl=I.default`
  mutation addStar($repositoryId: ID!) {
    addStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,jl=I.default`
  mutation removeStar($repositoryId: ID!) {
    removeStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,zl=I.default`
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
  ${Br}
`,Hl=I.default`
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
  ${Ae}
  ${Jo}
`,Gl=I.default`
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
  ${Ae}
`,$l=I.default`
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
`,Ql=(e,t,a,r)=>e();function ei(e,t=Ql){return{createLinkedBranch(a,r,n){return t(o=>e.request({document:Hp,variables:a,requestHeaders:{...r,...o},signal:n}),"createLinkedBranch","mutation",a)},createRef(a,r,n){return t(o=>e.request({document:Gp,variables:a,requestHeaders:{...r,...o},signal:n}),"createRef","mutation",a)},deleteLinkedBranch(a,r,n){return t(o=>e.request({document:$p,variables:a,requestHeaders:{...r,...o},signal:n}),"deleteLinkedBranch","mutation",a)},searchDiscussions(a,r,n){return t(o=>e.request({document:Qp,variables:a,requestHeaders:{...r,...o},signal:n}),"searchDiscussions","query",a)},getGitHubDiscussionNumber(a,r,n){return t(o=>e.request({document:Wp,variables:a,requestHeaders:{...r,...o},signal:n}),"getGitHubDiscussionNumber","query",a)},repositoryCollaboratorsForIssues(a,r,n){return t(o=>e.request({document:Kp,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryCollaboratorsForIssues","query",a)},repositoryProjectsForIssues(a,r,n){return t(o=>e.request({document:Yp,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryProjectsForIssues","query",a)},issueDetails(a,r,n){return t(o=>e.request({document:Jp,variables:a,requestHeaders:{...r,...o},signal:n}),"issueDetails","query",a)},searchIssues(a,r,n){return t(o=>e.request({document:Zp,variables:a,requestHeaders:{...r,...o},signal:n}),"searchIssues","query",a)},issueByNumber(a,r,n){return t(o=>e.request({document:Xp,variables:a,requestHeaders:{...r,...o},signal:n}),"issueByNumber","query",a)},closeIssue(a,r,n){return t(o=>e.request({document:el,variables:a,requestHeaders:{...r,...o},signal:n}),"closeIssue","mutation",a)},reopenIssue(a,r,n){return t(o=>e.request({document:tl,variables:a,requestHeaders:{...r,...o},signal:n}),"reopenIssue","mutation",a)},changeIssueAssignees(a,r,n){return t(o=>e.request({document:al,variables:a,requestHeaders:{...r,...o},signal:n}),"changeIssueAssignees","mutation",a)},changeIssueMilestone(a,r,n){return t(o=>e.request({document:rl,variables:a,requestHeaders:{...r,...o},signal:n}),"changeIssueMilestone","mutation",a)},addIssueToProject(a,r,n){return t(o=>e.request({document:nl,variables:a,requestHeaders:{...r,...o},signal:n}),"addIssueToProject","mutation",a)},createIssue(a,r,n){return t(o=>e.request({document:ol,variables:a,requestHeaders:{...r,...o},signal:n}),"createIssue","mutation",a)},searchIssueMentions(a,r,n){return t(o=>e.request({document:il,variables:a,requestHeaders:{...r,...o},signal:n}),"searchIssueMentions","query",a)},searchPullRequestMentions(a,r,n){return t(o=>e.request({document:sl,variables:a,requestHeaders:{...r,...o},signal:n}),"searchPullRequestMentions","query",a)},issueOrPullRequestMention(a,r,n){return t(o=>e.request({document:ul,variables:a,requestHeaders:{...r,...o},signal:n}),"issueOrPullRequestMention","query",a)},searchRepositoryMentions(a,r,n){return t(o=>e.request({document:pl,variables:a,requestHeaders:{...r,...o},signal:n}),"searchRepositoryMentions","query",a)},viewerRepositoryMentions(a,r,n){return t(o=>e.request({document:ll,variables:a,requestHeaders:{...r,...o},signal:n}),"viewerRepositoryMentions","query",a)},changeProjectStatus(a,r,n){return t(o=>e.request({document:cl,variables:a,requestHeaders:{...r,...o},signal:n}),"changeProjectStatus","mutation",a)},projectDetails(a,r,n){return t(o=>e.request({document:yl,variables:a,requestHeaders:{...r,...o},signal:n}),"projectDetails","query",a)},searchPullRequests(a,r,n){return t(o=>e.request({document:dl,variables:a,requestHeaders:{...r,...o},signal:n}),"searchPullRequests","query",a)},pullRequestDetails(a,r,n){return t(o=>e.request({document:Sl,variables:a,requestHeaders:{...r,...o},signal:n}),"pullRequestDetails","query",a)},repositoryCollaboratorsForPullRequests(a,r,n){return t(o=>e.request({document:bl,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryCollaboratorsForPullRequests","query",a)},repositoryProjectsForPullRequests(a,r,n){return t(o=>e.request({document:Il,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryProjectsForPullRequests","query",a)},pullRequestCommits(a,r,n){return t(o=>e.request({document:gl,variables:a,requestHeaders:{...r,...o},signal:n}),"pullRequestCommits","query",a)},closePullRequest(a,r,n){return t(o=>e.request({document:Ml,variables:a,requestHeaders:{...r,...o},signal:n}),"closePullRequest","mutation",a)},reopenPullRequest(a,r,n){return t(o=>e.request({document:ml,variables:a,requestHeaders:{...r,...o},signal:n}),"reopenPullRequest","mutation",a)},markPullRequestReadyForReview(a,r,n){return t(o=>e.request({document:Rl,variables:a,requestHeaders:{...r,...o},signal:n}),"markPullRequestReadyForReview","mutation",a)},addPullRequestReview(a,r,n){return t(o=>e.request({document:Al,variables:a,requestHeaders:{...r,...o},signal:n}),"addPullRequestReview","mutation",a)},changePullRequestAssignees(a,r,n){return t(o=>e.request({document:fl,variables:a,requestHeaders:{...r,...o},signal:n}),"changePullRequestAssignees","mutation",a)},changePullRequestMilestone(a,r,n){return t(o=>e.request({document:Pl,variables:a,requestHeaders:{...r,...o},signal:n}),"changePullRequestMilestone","mutation",a)},addPullRequestToProject(a,r,n){return t(o=>e.request({document:El,variables:a,requestHeaders:{...r,...o},signal:n}),"addPullRequestToProject","mutation",a)},requestReview(a,r,n){return t(o=>e.request({document:Cl,variables:a,requestHeaders:{...r,...o},signal:n}),"requestReview","mutation",a)},mergePullRequest(a,r,n){return t(o=>e.request({document:hl,variables:a,requestHeaders:{...r,...o},signal:n}),"mergePullRequest","mutation",a)},addPullRequestToMergeQueue(a,r,n){return t(o=>e.request({document:Dl,variables:a,requestHeaders:{...r,...o},signal:n}),"addPullRequestToMergeQueue","mutation",a)},removePullRequestFromMergeQueue(a,r,n){return t(o=>e.request({document:xl,variables:a,requestHeaders:{...r,...o},signal:n}),"removePullRequestFromMergeQueue","mutation",a)},enablePullRequestAutoMerge(a,r,n){return t(o=>e.request({document:Ul,variables:a,requestHeaders:{...r,...o},signal:n}),"enablePullRequestAutoMerge","mutation",a)},disablePullRequestAutoMerge(a,r,n){return t(o=>e.request({document:_l,variables:a,requestHeaders:{...r,...o},signal:n}),"disablePullRequestAutoMerge","mutation",a)},createPullRequest(a,r,n){return t(o=>e.request({document:vl,variables:a,requestHeaders:{...r,...o},signal:n}),"createPullRequest","mutation",a)},initPullRequest(a,r,n){return t(o=>e.request({document:Tl,variables:a,requestHeaders:{...r,...o},signal:n}),"initPullRequest","mutation",a)},searchRepositories(a,r,n){return t(o=>e.request({document:wl,variables:a,requestHeaders:{...r,...o},signal:n}),"searchRepositories","query",a)},myLatestRepositories(a,r,n){return t(o=>e.request({document:Ol,variables:a,requestHeaders:{...r,...o},signal:n}),"myLatestRepositories","query",a)},milestonesForRepository(a,r,n){return t(o=>e.request({document:Bl,variables:a,requestHeaders:{...r,...o},signal:n}),"milestonesForRepository","query",a)},commentsForPullRequest(a,r,n){return t(o=>e.request({document:Ll,variables:a,requestHeaders:{...r,...o},signal:n}),"commentsForPullRequest","query",a)},dataForRepository(a,r,n){return t(o=>e.request({document:ql,variables:a,requestHeaders:{...r,...o},signal:n}),"dataForRepository","query",a)},searchRepositoryBranches(a,r,n){return t(o=>e.request({document:Nl,variables:a,requestHeaders:{...r,...o},signal:n}),"searchRepositoryBranches","query",a)},repositoryIssues(a,r,n){return t(o=>e.request({document:Vl,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryIssues","query",a)},repositoryReleases(a,r,n){return t(o=>e.request({document:kl,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryReleases","query",a)},addStar(a,r,n){return t(o=>e.request({document:Fl,variables:a,requestHeaders:{...r,...o},signal:n}),"addStar","mutation",a)},removeStar(a,r,n){return t(o=>e.request({document:jl,variables:a,requestHeaders:{...r,...o},signal:n}),"removeStar","mutation",a)},myStarredRepositories(a,r,n){return t(o=>e.request({document:zl,variables:a,requestHeaders:{...r,...o},signal:n}),"myStarredRepositories","query",a)},getViewer(a,r,n){return t(o=>e.request({document:Hl,variables:a,requestHeaders:{...r,...o},signal:n}),"getViewer","query",a)},getViewerStats(a,r,n){return t(o=>e.request({document:Gl,variables:a,requestHeaders:{...r,...o},signal:n}),"getViewerStats","query",a)},getViewerStatsDetails(a,r,n){return t(o=>e.request({document:$l,variables:a,requestHeaders:{...r,...o},signal:n}),"getViewerStatsDetails","query",a)}}}var Lr=null,qr=null,ni=null,Wl=(0,ai.getPreferenceValues)();function Kl({token:e,type:t}){let a=t==="personal"?`token ${e}`:`bearer ${e}`;ni=e,Lr=ei(new va("https://api.github.com/graphql",{headers:{authorization:a}})),qr=new ti.Octokit({auth:e,request:{fetch:ja}})}var oi=ri.OAuthService.github({personalAccessToken:Wl.personalAccessToken,scope:"notifications repo project read:org read:user read:packages",onAuthorize:Kl});function Ha(){if(!Lr||!qr)throw new Error("GitHub clients not initialized");return{github:Lr,octokit:qr,token:ni}}function si(){let{github:e}=Ha(),{data:t}=(0,ii.useCachedPromise)(async()=>(await e.getViewer()).viewer);return t}var fe=require("react/jsx-runtime");function Nr(e){let t=si(),a=t?.organizations?.nodes?.filter(o=>o!=null)??[],r=a.map(o=>o.login),n=a.length>1;return(0,fe.jsxs)(B.List.Dropdown,{tooltip:"Filter Repositories",onChange:e.onFilterChange,storeValue:!0,children:[(0,fe.jsxs)(B.List.Dropdown.Section,{children:[(0,fe.jsx)(B.List.Dropdown.Item,{title:"All Repositories",icon:B.Icon.List,value:""}),t&&a.length>0?(0,fe.jsx)(B.List.Dropdown.Item,{title:"My Repositories",icon:B.Icon.Person,value:hr({userLogin:t.login,orgLogins:r})}):null,n?(0,fe.jsx)(B.List.Dropdown.Item,{title:"My Organizations",icon:B.Icon.Building,value:hr({orgLogins:r})}):null]}),(0,fe.jsxs)(B.List.Dropdown.Section,{children:[t?(0,fe.jsx)(B.List.Dropdown.Item,{icon:{source:t.avatarUrl??B.Icon.PersonCircle,mask:B.Image.Mask.Circle},title:t.login,value:`user:${t.login}`}):null,a.map(o=>(0,fe.jsx)(B.List.Dropdown.Item,{icon:{source:o.avatarUrl??B.Icon.PersonCircle,mask:B.Image.Mask.Circle},title:o.login,value:`org:${o.login}`},o.login))]})]})}var ui=require("@raycast/api"),Yl=require("lodash");function pi(e){return[...new Map(e.map(t=>[t.id,t])).values()]}function li(e){return e?.filter(t=>typeof t=="object"&&t!==null&&"id"in t)??[]}var ci=v(mt());var yi=(0,ci.withAccessToken)(oi);var bi=v(mt());var je=require("@raycast/api"),Jl=v(require("react")),Si=require("react/jsx-runtime");function Zl(e){let t=e.min||1,a=e.max||100,r=e.default||10,o=(0,je.getPreferenceValues)()[e.name]||"",i=Number(o);return isNaN(i)||i<t||i>a?r:i}function di(){return Math.min(Zl({name:"numberOfResults",default:50}),25)}function Ii(e){let{github:t}=Ha();return(0,bi.useCachedPromise)(a=>async({cursor:r})=>{let n=await t.searchDiscussions({query:a,numberOfItems:di(),after:r});return{data:li(n.searchDiscussions.nodes),hasMore:n.searchDiscussions.pageInfo.hasNextPage,cursor:n.searchDiscussions.pageInfo.endCursor??void 0}},[e])}var Kt=require("react/jsx-runtime");function Xl(){let{defaultSearchTerms:e}=(0,Yt.getPreferenceValues)(),[t,a]=(0,Vr.useState)((0,Mi.trim)(e)+" "),[r,n]=(0,Vr.useState)(null),[o,i]=(0,gi.useCachedState)("sort-query",io,{cacheNamespace:"github-search-discussion"}),{data:s,isLoading:u,pagination:p}=Ii(`${r} ${so(o)} ${t}`),c=pi(s??[]);return(0,Kt.jsx)(Yt.List,{isLoading:u,onSearchTextChange:a,searchText:t,searchBarAccessory:(0,Kt.jsx)(Nr,{onFilterChange:n}),throttle:!0,pagination:p,children:(0,Kt.jsx)(Yt.List.Section,{title:t.length>0?"Found Discussions":"Recent Discussions",subtitle:`${c.length}`,children:c.map(y=>(0,Kt.jsx)(co,{discussion:y,sortQuery:o,setSortQuery:i},y.id))})})}var ec=yi(Xl);
