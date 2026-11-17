"use strict";var di=Object.create;var Wt=Object.defineProperty;var Si=Object.getOwnPropertyDescriptor;var bi=Object.getOwnPropertyNames;var Ii=Object.getPrototypeOf,gi=Object.prototype.hasOwnProperty;var Fa=(e,t,a)=>()=>{if(a)throw a[0];try{return e&&(t=e(e=0)),t}catch(r){throw a=[r],r}};var E=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(a){throw t=0,a}},Xe=(e,t)=>{for(var a in t)Wt(e,a,{get:t[a],enumerable:!0})},Qt=(e,t,a,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of bi(t))!gi.call(e,n)&&n!==a&&Wt(e,n,{get:()=>t[n],enumerable:!(r=Si(t,n))||r.enumerable});return e},j=(e,t,a)=>(Qt(e,t,"default"),a&&Qt(a,t,"default")),O=(e,t,a)=>(a=e!=null?di(Ii(e)):{},Qt(t||!e||!e.__esModule?Wt(a,"default",{value:e,enumerable:!0}):a,e)),Mi=e=>Qt(Wt({},"__esModule",{value:!0}),e);var Or=E(Kt=>{"use strict";Object.defineProperty(Kt,"__esModule",{value:!0});Kt.useDeepMemo=void 0;var za=require("react"),mi=require("dequal/lite");function Ri(e){let t=(0,za.useRef)(e),a=(0,za.useRef)(0);return(0,mi.dequal)(e,t.current)||(t.current=e,a.current+=1),(0,za.useMemo)(()=>t.current,[a.current])}Kt.useDeepMemo=Ri});var Ae=E(Yt=>{"use strict";Object.defineProperty(Yt,"__esModule",{value:!0});Yt.useLatest=void 0;var Ai=require("react");function fi(e){let t=(0,Ai.useRef)(e);return t.current=e,t}Yt.useLatest=fi});var At=E(ce=>{"use strict";var Pi=ce&&ce.__createBinding||(Object.create?(function(e,t,a,r){r===void 0&&(r=a);var n=Object.getOwnPropertyDescriptor(t,a);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,n)}):(function(e,t,a,r){r===void 0&&(r=a),e[r]=t[a]})),Ei=ce&&ce.__setModuleDefault||(Object.create?(function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}):function(e,t){e.default=t}),Lr=ce&&ce.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var a in e)a!=="default"&&Object.prototype.hasOwnProperty.call(e,a)&&Pi(t,e,a);return Ei(t,e),t};Object.defineProperty(ce,"__esModule",{value:!0});ce.showFailureToast=void 0;var Ci=Lr(require("fs")),hi=Lr(require("path")),et=require("@raycast/api");function Di(e,t){let a=e instanceof Error?e.message:String(e);return(0,et.showToast)({style:et.Toast.Style.Failure,title:t?.title??"Something went wrong",message:t?.message??a,primaryAction:t?.primaryAction??Br(e),secondaryAction:t?.primaryAction?Br(e):void 0})}ce.showFailureToast=Di;var Br=e=>{let t=!0,a="[Extension Name]...",r="";try{let i=JSON.parse(Ci.readFileSync(hi.join(et.environment.assetsPath,"..","package.json"),"utf8"));a=`[${i.title}]...`,r=`https://raycast.com/${i.owner||i.author}/${i.name}`,(!i.owner||i.access==="public")&&(t=!1)}catch{}let n=et.environment.isDevelopment||t,o=e instanceof Error?e?.stack||e?.message||"":String(e);return{title:n?"Copy Logs":"Report Error",onAction(i){i.hide(),n?et.Clipboard.copy(o):(0,et.open)(`https://github.com/raycast/extensions/issues/new?&labels=extension%2Cbug&template=extension_bug_report.yml&title=${encodeURIComponent(a)}&extension-url=${encodeURI(r)}&description=${encodeURIComponent(`#### Error:
\`\`\`
${o}
\`\`\`
`)}`)}}}});var tt=E(Jt=>{"use strict";Object.defineProperty(Jt,"__esModule",{value:!0});Jt.usePromise=void 0;var Q=require("react"),ft=require("@raycast/api"),xi=Or(),Ue=Ae(),Ui=At();function _i(e,t,a){let r=(0,Q.useRef)(0),[n,o]=(0,Q.useState)({isLoading:!0}),i=(0,Ue.useLatest)(e),s=(0,Ue.useLatest)(a?.abortable),u=(0,Ue.useLatest)(t||[]),p=(0,Ue.useLatest)(a?.onError),c=(0,Ue.useLatest)(a?.onData),y=(0,Ue.useLatest)(a?.onWillExecute),g=(0,Ue.useLatest)(a?.failureToastOptions),m=(0,Ue.useLatest)(n.data),l=(0,Q.useRef)(),S=(0,Q.useRef)({page:0}),d=(0,Q.useRef)(!1),b=(0,Q.useRef)(!0),R=(0,Q.useRef)(50),f=(0,Q.useCallback)((...N)=>{let _=++r.current;s.current&&(s.current.current?.abort(),s.current.current=new AbortController),y.current?.(N),o(C=>({...C,isLoading:!0}));let ie=vi(i.current)(...N);function le(C){return C.name=="AbortError"||_===r.current&&(p.current?p.current(C):ft.environment.launchType!==ft.LaunchType.Background&&(0,Ui.showFailureToast)(C,{title:"Failed to fetch latest data",primaryAction:{title:"Retry",onAction($){$.hide(),l.current?.(...u.current||[])}},...g.current}),o({error:C,isLoading:!1})),C}return typeof ie=="function"?(d.current=!0,ie(S.current).then(({data:C,hasMore:$,cursor:Rt})=>(_===r.current&&(S.current&&(S.current.cursor=Rt,S.current.lastItem=C?.[C.length-1]),c.current&&c.current(C,S.current),$&&(R.current=C.length),b.current=$,o(ja=>S.current.page===0?{data:C,isLoading:!1}:{data:(ja.data||[])?.concat(C),isLoading:!1})),C),C=>(b.current=!1,le(C)))):(d.current=!1,ie.then(C=>(_===r.current&&(c.current&&c.current(C),o({data:C,isLoading:!1})),C),le))},[s,c,p,u,i,o,l,y,S,g]);l.current=f;let M=(0,Q.useCallback)(()=>{S.current={page:0};let N=u.current||[];return f(...N)},[f,u]),P=(0,Q.useCallback)(async(N,_)=>{let ie;try{if(_?.optimisticUpdate){typeof _?.rollbackOnError!="function"&&_?.rollbackOnError!==!1&&(ie=structuredClone(m.current?.value));let le=_.optimisticUpdate;o(C=>({...C,data:le(C.data)}))}return await N}catch(le){if(typeof _?.rollbackOnError=="function"){let C=_.rollbackOnError;o($=>({...$,data:C($.data)}))}else _?.optimisticUpdate&&_?.rollbackOnError!==!1&&o(C=>({...C,data:ie}));throw le}finally{_?.shouldRevalidateAfter!==!1&&(ft.environment.launchType===ft.LaunchType.Background||ft.environment.commandMode==="menu-bar"?await M():M())}},[M,m,o]),A=(0,Q.useCallback)(()=>{S.current.page+=1;let N=u.current||[];f(...N)},[S,u,f]);(0,Q.useEffect)(()=>{S.current={page:0},a?.execute!==!1?f(...t||[]):s.current&&s.current.current?.abort()},[(0,xi.useDeepMemo)([t,a?.execute,f]),s,S]),(0,Q.useEffect)(()=>()=>{s.current&&s.current.current?.abort()},[s]);let x=a?.execute!==!1?n.isLoading:!1,L={...n,isLoading:x},oe=d.current?{pageSize:R.current,hasMore:b.current,onLoadMore:A}:void 0;return{...L,revalidate:M,mutate:P,pagination:oe}}Jt.usePromise=_i;function vi(e){return e===Promise.all||e===Promise.race||e===Promise.resolve||e===Promise.reject?e.bind(Promise):e}});var _e=E(ye=>{"use strict";var Ti=ye&&ye.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ye,"__esModule",{value:!0});ye.hash=ye.reviver=ye.replacer=void 0;var wi=Ti(require("object-hash"));function Oi(e,t){let a=this[e];return a instanceof Date?`__raycast_cached_date__${a.toString()}`:Buffer.isBuffer(a)?`__raycast_cached_buffer__${a.toString("base64")}`:t}ye.replacer=Oi;function Bi(e,t){return typeof t=="string"&&t.startsWith("__raycast_cached_date__")?new Date(t.replace("__raycast_cached_date__","")):typeof t=="string"&&t.startsWith("__raycast_cached_buffer__")?Buffer.from(t.replace("__raycast_cached_buffer__",""),"base64"):t}ye.reviver=Bi;function Li(e,t){return(0,wi.default)(e,{replacer:a=>a instanceof URLSearchParams?a.toString():a,...t})}ye.hash=Li});var Xt=E(Zt=>{"use strict";Object.defineProperty(Zt,"__esModule",{value:!0});Zt.useCachedState=void 0;var Ha=require("react"),qi=require("@raycast/api"),Ga=Ae(),qr=_e(),Ni=Symbol("cache without namespace"),Nr=new Map;function Vi(e,t,a){let r=a?.cacheNamespace||Ni,n=Nr.get(r)||Nr.set(r,new qi.Cache({namespace:a?.cacheNamespace})).get(r);if(!n)throw new Error("Missing cache");let o=(0,Ga.useLatest)(e),i=(0,Ga.useLatest)(t),s=(0,Ha.useSyncExternalStore)(n.subscribe,()=>{try{return n.get(o.current)}catch(y){console.error("Could not get Cache data:",y);return}}),u=(0,Ha.useMemo)(()=>{if(typeof s<"u"){if(s==="undefined")return;try{return JSON.parse(s,qr.reviver)}catch(y){return console.warn("The cached data is corrupted",y),i.current}}else return i.current},[s,i]),p=(0,Ga.useLatest)(u),c=(0,Ha.useCallback)(y=>{let g=typeof y=="function"?y(p.current):y;if(typeof g>"u")n.set(o.current,"undefined");else{let m=JSON.stringify(g,qr.replacer);n.set(o.current,m)}return g},[n,o,p]);return[u,c]}Zt.useCachedState=Vi});var Et=E(ea=>{"use strict";Object.defineProperty(ea,"__esModule",{value:!0});ea.useCachedPromise=void 0;var Pt=require("react"),ki=Xt(),ji=tt(),Fi=Ae(),Vr=_e(),at=Symbol();function zi(e,t,a){let{initialData:r,keepPreviousData:n,internal_cacheKeySuffix:o,...i}=a||{},s=(0,Pt.useRef)(),[u,p]=(0,ki.useCachedState)((0,Vr.hash)(t||[])+o,at,{cacheNamespace:(0,Vr.hash)(e)}),c=(0,Pt.useRef)(u!==at?u:r),y=(0,Pt.useRef)(void 0),{mutate:g,revalidate:m,...l}=(0,ji.usePromise)(e,t||[],{...i,onData(f,M){y.current=M,i.onData&&i.onData(f,M),!(M&&M.page>0)&&(s.current="promise",c.current=f,p(f))}}),S,d=l.pagination;y.current&&y.current.page>0&&l.data?S=l.data:s.current==="promise"?S=c.current:n&&u!==at?(S=u,d&&(d.hasMore=!0,d.pageSize=u.length)):n&&u===at?S=c.current:u!==at?(S=u,d&&(d.hasMore=!0,d.pageSize=u.length)):S=r;let b=(0,Fi.useLatest)(S),R=(0,Pt.useCallback)(async(f,M)=>{let P;try{if(M?.optimisticUpdate){typeof M?.rollbackOnError!="function"&&M?.rollbackOnError!==!1&&(P=structuredClone(b.current));let A=M.optimisticUpdate(b.current);s.current="cache",c.current=A,p(A)}return await g(f,{shouldRevalidateAfter:M?.shouldRevalidateAfter})}catch(A){if(typeof M?.rollbackOnError=="function"){let x=M.rollbackOnError(b.current);s.current="cache",c.current=x,p(x)}else M?.optimisticUpdate&&M?.rollbackOnError!==!1&&(s.current="cache",c.current=P,p(P));throw A}},[p,g,b,c,s]);return(0,Pt.useEffect)(()=>{u!==at&&(s.current="cache",c.current=u)},[u]),{data:S,isLoading:l.isLoading,error:l.error,mutate:y.current&&y.current.page>0?g:R,pagination:d,revalidate:m}}ea.useCachedPromise=zi});var Jr=E((ue,Yr)=>{"use strict";Object.defineProperty(ue,"__esModule",{value:!0});function it(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var se=it(require("stream")),zr=it(require("http")),aa=it(require("url")),Hr=it(require("whatwg-url")),Hi=it(require("https")),je=it(require("zlib")),Gi=se.Readable,fe=Symbol("buffer"),$a=Symbol("type"),ht=class e{constructor(){this[$a]="";let t=arguments[0],a=arguments[1],r=[],n=0;if(t){let i=t,s=Number(i.length);for(let u=0;u<s;u++){let p=i[u],c;p instanceof Buffer?c=p:ArrayBuffer.isView(p)?c=Buffer.from(p.buffer,p.byteOffset,p.byteLength):p instanceof ArrayBuffer?c=Buffer.from(p):p instanceof e?c=p[fe]:c=Buffer.from(typeof p=="string"?p:String(p)),n+=c.length,r.push(c)}}this[fe]=Buffer.concat(r);let o=a&&a.type!==void 0&&String(a.type).toLowerCase();o&&!/[^\u0020-\u007E]/.test(o)&&(this[$a]=o)}get size(){return this[fe].length}get type(){return this[$a]}text(){return Promise.resolve(this[fe].toString())}arrayBuffer(){let t=this[fe],a=t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength);return Promise.resolve(a)}stream(){let t=new Gi;return t._read=function(){},t.push(this[fe]),t.push(null),t}toString(){return"[object Blob]"}slice(){let t=this.size,a=arguments[0],r=arguments[1],n,o;a===void 0?n=0:a<0?n=Math.max(t+a,0):n=Math.min(a,t),r===void 0?o=t:r<0?o=Math.max(t+r,0):o=Math.min(r,t);let i=Math.max(o-n,0),u=this[fe].slice(n,n+i),p=new e([],{type:arguments[2]});return p[fe]=u,p}};Object.defineProperties(ht.prototype,{size:{enumerable:!0},type:{enumerable:!0},slice:{enumerable:!0}});Object.defineProperty(ht.prototype,Symbol.toStringTag,{value:"Blob",writable:!1,enumerable:!1,configurable:!0});function B(e,t,a){Error.call(this,e),this.message=e,this.type=t,a&&(this.code=this.errno=a.code),Error.captureStackTrace(this,this.constructor)}B.prototype=Object.create(Error.prototype);B.prototype.constructor=B;B.prototype.name="FetchError";var Ya;try{Ya=require("encoding").convert}catch{}var Ee=Symbol("Body internals"),kr=se.PassThrough;function v(e){var t=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.size;let n=r===void 0?0:r;var o=a.timeout;let i=o===void 0?0:o;e==null?e=null:Gr(e)?e=Buffer.from(e.toString()):xt(e)||Buffer.isBuffer(e)||(Object.prototype.toString.call(e)==="[object ArrayBuffer]"?e=Buffer.from(e):ArrayBuffer.isView(e)?e=Buffer.from(e.buffer,e.byteOffset,e.byteLength):e instanceof se||(e=Buffer.from(String(e)))),this[Ee]={body:e,disturbed:!1,error:null},this.size=n,this.timeout=i,e instanceof se&&e.on("error",function(s){let u=s.name==="AbortError"?s:new B(`Invalid response body while trying to fetch ${t.url}: ${s.message}`,"system",s);t[Ee].error=u})}v.prototype={get body(){return this[Ee].body},get bodyUsed(){return this[Ee].disturbed},arrayBuffer(){return rt.call(this).then(function(e){return e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength)})},blob(){let e=this.headers&&this.headers.get("content-type")||"";return rt.call(this).then(function(t){return Object.assign(new ht([],{type:e.toLowerCase()}),{[fe]:t})})},json(){var e=this;return rt.call(this).then(function(t){try{return JSON.parse(t.toString())}catch(a){return v.Promise.reject(new B(`invalid json response body at ${e.url} reason: ${a.message}`,"invalid-json"))}})},text(){return rt.call(this).then(function(e){return e.toString()})},buffer(){return rt.call(this)},textConverted(){var e=this;return rt.call(this).then(function(t){return $i(t,e.headers)})}};Object.defineProperties(v.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0}});v.mixIn=function(e){for(let t of Object.getOwnPropertyNames(v.prototype))if(!(t in e)){let a=Object.getOwnPropertyDescriptor(v.prototype,t);Object.defineProperty(e,t,a)}};function rt(){var e=this;if(this[Ee].disturbed)return v.Promise.reject(new TypeError(`body used already for: ${this.url}`));if(this[Ee].disturbed=!0,this[Ee].error)return v.Promise.reject(this[Ee].error);let t=this.body;if(t===null)return v.Promise.resolve(Buffer.alloc(0));if(xt(t)&&(t=t.stream()),Buffer.isBuffer(t))return v.Promise.resolve(t);if(!(t instanceof se))return v.Promise.resolve(Buffer.alloc(0));let a=[],r=0,n=!1;return new v.Promise(function(o,i){let s;e.timeout&&(s=setTimeout(function(){n=!0,i(new B(`Response timeout while trying to fetch ${e.url} (over ${e.timeout}ms)`,"body-timeout"))},e.timeout)),t.on("error",function(u){u.name==="AbortError"?(n=!0,i(u)):i(new B(`Invalid response body while trying to fetch ${e.url}: ${u.message}`,"system",u))}),t.on("data",function(u){if(!(n||u===null)){if(e.size&&r+u.length>e.size){n=!0,i(new B(`content size at ${e.url} over limit: ${e.size}`,"max-size"));return}r+=u.length,a.push(u)}}),t.on("end",function(){if(!n){clearTimeout(s);try{o(Buffer.concat(a,r))}catch(u){i(new B(`Could not create Buffer from response body for ${e.url}: ${u.message}`,"system",u))}}})})}function $i(e,t){if(typeof Ya!="function")throw new Error("The package `encoding` must be installed to use the textConverted() function");let a=t.get("content-type"),r="utf-8",n,o;return a&&(n=/charset=([^;]*)/i.exec(a)),o=e.slice(0,1024).toString(),!n&&o&&(n=/<meta.+?charset=(['"])(.+?)\1/i.exec(o)),!n&&o&&(n=/<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(o),n||(n=/<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(o),n&&n.pop()),n&&(n=/charset=(.*)/i.exec(n.pop()))),!n&&o&&(n=/<\?xml.+?encoding=(['"])(.+?)\1/i.exec(o)),n&&(r=n.pop(),(r==="gb2312"||r==="gbk")&&(r="gb18030")),Ya(e,"UTF-8",r).toString()}function Gr(e){return typeof e!="object"||typeof e.append!="function"||typeof e.delete!="function"||typeof e.get!="function"||typeof e.getAll!="function"||typeof e.has!="function"||typeof e.set!="function"?!1:e.constructor.name==="URLSearchParams"||Object.prototype.toString.call(e)==="[object URLSearchParams]"||typeof e.sort=="function"}function xt(e){return typeof e=="object"&&typeof e.arrayBuffer=="function"&&typeof e.type=="string"&&typeof e.stream=="function"&&typeof e.constructor=="function"&&typeof e.constructor.name=="string"&&/^(Blob|File)$/.test(e.constructor.name)&&/^(Blob|File)$/.test(e[Symbol.toStringTag])}function $r(e){let t,a,r=e.body;if(e.bodyUsed)throw new Error("cannot clone body after it is used");return r instanceof se&&typeof r.getBoundary!="function"&&(t=new kr,a=new kr,r.pipe(t),r.pipe(a),e[Ee].body=t,r=a),r}function Qr(e){return e===null?null:typeof e=="string"?"text/plain;charset=UTF-8":Gr(e)?"application/x-www-form-urlencoded;charset=UTF-8":xt(e)?e.type||null:Buffer.isBuffer(e)||Object.prototype.toString.call(e)==="[object ArrayBuffer]"||ArrayBuffer.isView(e)?null:typeof e.getBoundary=="function"?`multipart/form-data;boundary=${e.getBoundary()}`:e instanceof se?null:"text/plain;charset=UTF-8"}function Wr(e){let t=e.body;return t===null?0:xt(t)?t.size:Buffer.isBuffer(t)?t.length:t&&typeof t.getLengthSync=="function"&&(t._lengthRetrievers&&t._lengthRetrievers.length==0||t.hasKnownLength&&t.hasKnownLength())?t.getLengthSync():null}function Qi(e,t){let a=t.body;a===null?e.end():xt(a)?a.stream().pipe(e):Buffer.isBuffer(a)?(e.write(a),e.end()):a.pipe(e)}v.Promise=global.Promise;var Kr=/[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/,Ja=/[^\t\x20-\x7e\x80-\xff]/;function Ct(e){if(e=`${e}`,Kr.test(e)||e==="")throw new TypeError(`${e} is not a legal HTTP header name`)}function jr(e){if(e=`${e}`,Ja.test(e))throw new TypeError(`${e} is not a legal HTTP header value`)}function nt(e,t){t=t.toLowerCase();for(let a in e)if(a.toLowerCase()===t)return a}var U=Symbol("map"),ee=class e{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:void 0;if(this[U]=Object.create(null),t instanceof e){let a=t.raw(),r=Object.keys(a);for(let n of r)for(let o of a[n])this.append(n,o);return}if(t!=null)if(typeof t=="object"){let a=t[Symbol.iterator];if(a!=null){if(typeof a!="function")throw new TypeError("Header pairs must be iterable");let r=[];for(let n of t){if(typeof n!="object"||typeof n[Symbol.iterator]!="function")throw new TypeError("Each header pair must be iterable");r.push(Array.from(n))}for(let n of r){if(n.length!==2)throw new TypeError("Each header pair must be a name/value tuple");this.append(n[0],n[1])}}else for(let r of Object.keys(t)){let n=t[r];this.append(r,n)}}else throw new TypeError("Provided initializer must be an object")}get(t){t=`${t}`,Ct(t);let a=nt(this[U],t);return a===void 0?null:this[U][a].join(", ")}forEach(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:void 0,r=Za(this),n=0;for(;n<r.length;){var o=r[n];let i=o[0],s=o[1];t.call(a,s,i,this),r=Za(this),n++}}set(t,a){t=`${t}`,a=`${a}`,Ct(t),jr(a);let r=nt(this[U],t);this[U][r!==void 0?r:t]=[a]}append(t,a){t=`${t}`,a=`${a}`,Ct(t),jr(a);let r=nt(this[U],t);r!==void 0?this[U][r].push(a):this[U][t]=[a]}has(t){return t=`${t}`,Ct(t),nt(this[U],t)!==void 0}delete(t){t=`${t}`,Ct(t);let a=nt(this[U],t);a!==void 0&&delete this[U][a]}raw(){return this[U]}keys(){return Qa(this,"key")}values(){return Qa(this,"value")}[Symbol.iterator](){return Qa(this,"key+value")}};ee.prototype.entries=ee.prototype[Symbol.iterator];Object.defineProperty(ee.prototype,Symbol.toStringTag,{value:"Headers",writable:!1,enumerable:!1,configurable:!0});Object.defineProperties(ee.prototype,{get:{enumerable:!0},forEach:{enumerable:!0},set:{enumerable:!0},append:{enumerable:!0},has:{enumerable:!0},delete:{enumerable:!0},keys:{enumerable:!0},values:{enumerable:!0},entries:{enumerable:!0}});function Za(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"key+value";return Object.keys(e[U]).sort().map(t==="key"?function(r){return r.toLowerCase()}:t==="value"?function(r){return e[U][r].join(", ")}:function(r){return[r.toLowerCase(),e[U][r].join(", ")]})}var Xa=Symbol("internal");function Qa(e,t){let a=Object.create(er);return a[Xa]={target:e,kind:t,index:0},a}var er=Object.setPrototypeOf({next(){if(!this||Object.getPrototypeOf(this)!==er)throw new TypeError("Value of `this` is not a HeadersIterator");var e=this[Xa];let t=e.target,a=e.kind,r=e.index,n=Za(t,a),o=n.length;return r>=o?{value:void 0,done:!0}:(this[Xa].index=r+1,{value:n[r],done:!1})}},Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));Object.defineProperty(er,Symbol.toStringTag,{value:"HeadersIterator",writable:!1,enumerable:!1,configurable:!0});function Wi(e){let t=Object.assign({__proto__:null},e[U]),a=nt(e[U],"Host");return a!==void 0&&(t[a]=t[a][0]),t}function Ki(e){let t=new ee;for(let a of Object.keys(e))if(!Kr.test(a))if(Array.isArray(e[a]))for(let r of e[a])Ja.test(r)||(t[U][a]===void 0?t[U][a]=[r]:t[U][a].push(r));else Ja.test(e[a])||(t[U][a]=[e[a]]);return t}var ve=Symbol("Response internals"),Yi=zr.STATUS_CODES,X=class e{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};v.call(this,t,a);let r=a.status||200,n=new ee(a.headers);if(t!=null&&!n.has("Content-Type")){let o=Qr(t);o&&n.append("Content-Type",o)}this[ve]={url:a.url,status:r,statusText:a.statusText||Yi[r],headers:n,counter:a.counter}}get url(){return this[ve].url||""}get status(){return this[ve].status}get ok(){return this[ve].status>=200&&this[ve].status<300}get redirected(){return this[ve].counter>0}get statusText(){return this[ve].statusText}get headers(){return this[ve].headers}clone(){return new e($r(this),{url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected})}};v.mixIn(X.prototype);Object.defineProperties(X.prototype,{url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}});Object.defineProperty(X.prototype,Symbol.toStringTag,{value:"Response",writable:!1,enumerable:!1,configurable:!0});var Pe=Symbol("Request internals"),Ji=aa.URL||Hr.URL,Zi=aa.parse,Xi=aa.format;function Wa(e){return/^[a-zA-Z][a-zA-Z\d+\-.]*:/.exec(e)&&(e=new Ji(e).toString()),Zi(e)}var es="destroy"in se.Readable.prototype;function ta(e){return typeof e=="object"&&typeof e[Pe]=="object"}function ts(e){let t=e&&typeof e=="object"&&Object.getPrototypeOf(e);return!!(t&&t.constructor.name==="AbortSignal")}var we=class e{constructor(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r;ta(t)?r=Wa(t.url):(t&&t.href?r=Wa(t.href):r=Wa(`${t}`),t={});let n=a.method||t.method||"GET";if(n=n.toUpperCase(),(a.body!=null||ta(t)&&t.body!==null)&&(n==="GET"||n==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");let o=a.body!=null?a.body:ta(t)&&t.body!==null?$r(t):null;v.call(this,o,{timeout:a.timeout||t.timeout||0,size:a.size||t.size||0});let i=new ee(a.headers||t.headers||{});if(o!=null&&!i.has("Content-Type")){let u=Qr(o);u&&i.append("Content-Type",u)}let s=ta(t)?t.signal:null;if("signal"in a&&(s=a.signal),s!=null&&!ts(s))throw new TypeError("Expected signal to be an instanceof AbortSignal");this[Pe]={method:n,redirect:a.redirect||t.redirect||"follow",headers:i,parsedURL:r,signal:s},this.follow=a.follow!==void 0?a.follow:t.follow!==void 0?t.follow:20,this.compress=a.compress!==void 0?a.compress:t.compress!==void 0?t.compress:!0,this.counter=a.counter||t.counter||0,this.agent=a.agent||t.agent}get method(){return this[Pe].method}get url(){return Xi(this[Pe].parsedURL)}get headers(){return this[Pe].headers}get redirect(){return this[Pe].redirect}get signal(){return this[Pe].signal}clone(){return new e(this)}};v.mixIn(we.prototype);Object.defineProperty(we.prototype,Symbol.toStringTag,{value:"Request",writable:!1,enumerable:!1,configurable:!0});Object.defineProperties(we.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0}});function as(e){let t=e[Pe].parsedURL,a=new ee(e[Pe].headers);if(a.has("Accept")||a.set("Accept","*/*"),!t.protocol||!t.hostname)throw new TypeError("Only absolute URLs are supported");if(!/^https?:$/.test(t.protocol))throw new TypeError("Only HTTP(S) protocols are supported");if(e.signal&&e.body instanceof se.Readable&&!es)throw new Error("Cancellation of streamed requests with AbortSignal is not supported in node < 8");let r=null;if(e.body==null&&/^(POST|PUT)$/i.test(e.method)&&(r="0"),e.body!=null){let o=Wr(e);typeof o=="number"&&(r=String(o))}r&&a.set("Content-Length",r),a.has("User-Agent")||a.set("User-Agent","node-fetch/1.0 (+https://github.com/bitinn/node-fetch)"),e.compress&&!a.has("Accept-Encoding")&&a.set("Accept-Encoding","gzip,deflate");let n=e.agent;return typeof n=="function"&&(n=n(t)),Object.assign({},t,{method:e.method,headers:Wi(a),agent:n})}function ot(e){Error.call(this,e),this.type="aborted",this.message=e,Error.captureStackTrace(this,this.constructor)}ot.prototype=Object.create(Error.prototype);ot.prototype.constructor=ot;ot.prototype.name="AbortError";var Dt=aa.URL||Hr.URL,Fr=se.PassThrough,rs=function(t,a){let r=new Dt(a).hostname,n=new Dt(t).hostname;return r===n||r[r.length-n.length-1]==="."&&r.endsWith(n)},ns=function(t,a){let r=new Dt(a).protocol,n=new Dt(t).protocol;return r===n};function Te(e,t){if(!Te.Promise)throw new Error("native promise missing, set fetch.Promise to your favorite alternative");return v.Promise=Te.Promise,new Te.Promise(function(a,r){let n=new we(e,t),o=as(n),i=(o.protocol==="https:"?Hi:zr).request,s=n.signal,u=null,p=function(){let S=new ot("The user aborted a request.");r(S),n.body&&n.body instanceof se.Readable&&Ka(n.body,S),!(!u||!u.body)&&u.body.emit("error",S)};if(s&&s.aborted){p();return}let c=function(){p(),m()},y=i(o),g;s&&s.addEventListener("abort",c);function m(){y.abort(),s&&s.removeEventListener("abort",c),clearTimeout(g)}n.timeout&&y.once("socket",function(l){g=setTimeout(function(){r(new B(`network timeout at: ${n.url}`,"request-timeout")),m()},n.timeout)}),y.on("error",function(l){r(new B(`request to ${n.url} failed, reason: ${l.message}`,"system",l)),u&&u.body&&Ka(u.body,l),m()}),os(y,function(l){s&&s.aborted||u&&u.body&&Ka(u.body,l)}),parseInt(process.version.substring(1))<14&&y.on("socket",function(l){l.addListener("close",function(S){let d=l.listenerCount("data")>0;if(u&&d&&!S&&!(s&&s.aborted)){let b=new Error("Premature close");b.code="ERR_STREAM_PREMATURE_CLOSE",u.body.emit("error",b)}})}),y.on("response",function(l){clearTimeout(g);let S=Ki(l.headers);if(Te.isRedirect(l.statusCode)){let M=S.get("Location"),P=null;try{P=M===null?null:new Dt(M,n.url).toString()}catch{if(n.redirect!=="manual"){r(new B(`uri requested responds with an invalid redirect URL: ${M}`,"invalid-redirect")),m();return}}switch(n.redirect){case"error":r(new B(`uri requested responds with a redirect, redirect mode is set to error: ${n.url}`,"no-redirect")),m();return;case"manual":if(P!==null)try{S.set("Location",P)}catch(x){r(x)}break;case"follow":if(P===null)break;if(n.counter>=n.follow){r(new B(`maximum redirect reached at: ${n.url}`,"max-redirect")),m();return}let A={headers:new ee(n.headers),follow:n.follow,counter:n.counter+1,agent:n.agent,compress:n.compress,method:n.method,body:n.body,signal:n.signal,timeout:n.timeout,size:n.size};if(!rs(n.url,P)||!ns(n.url,P))for(let x of["authorization","www-authenticate","cookie","cookie2"])A.headers.delete(x);if(l.statusCode!==303&&n.body&&Wr(n)===null){r(new B("Cannot follow redirect with body being a readable stream","unsupported-redirect")),m();return}(l.statusCode===303||(l.statusCode===301||l.statusCode===302)&&n.method==="POST")&&(A.method="GET",A.body=void 0,A.headers.delete("content-length")),a(Te(new we(P,A))),m();return}}l.once("end",function(){s&&s.removeEventListener("abort",c)});let d=l.pipe(new Fr),b={url:n.url,status:l.statusCode,statusText:l.statusMessage,headers:S,size:n.size,timeout:n.timeout,counter:n.counter},R=S.get("Content-Encoding");if(!n.compress||n.method==="HEAD"||R===null||l.statusCode===204||l.statusCode===304){u=new X(d,b),a(u);return}let f={flush:je.Z_SYNC_FLUSH,finishFlush:je.Z_SYNC_FLUSH};if(R=="gzip"||R=="x-gzip"){d=d.pipe(je.createGunzip(f)),u=new X(d,b),a(u);return}if(R=="deflate"||R=="x-deflate"){let M=l.pipe(new Fr);M.once("data",function(P){(P[0]&15)===8?d=d.pipe(je.createInflate()):d=d.pipe(je.createInflateRaw()),u=new X(d,b),a(u)}),M.on("end",function(){u||(u=new X(d,b),a(u))});return}if(R=="br"&&typeof je.createBrotliDecompress=="function"){d=d.pipe(je.createBrotliDecompress()),u=new X(d,b),a(u);return}u=new X(d,b),a(u)}),Qi(y,n)})}function os(e,t){let a;e.on("socket",function(r){a=r}),e.on("response",function(r){let n=r.headers;n["transfer-encoding"]==="chunked"&&!n["content-length"]&&r.once("close",function(o){if(a&&a.listenerCount("data")>0&&!o){let s=new Error("Premature close");s.code="ERR_STREAM_PREMATURE_CLOSE",t(s)}})})}function Ka(e,t){e.destroy?e.destroy(t):(e.emit("error",t),e.end())}Te.isRedirect=function(e){return e===301||e===302||e===303||e===307||e===308};Te.Promise=global.Promise;Yr.exports=ue=Te;Object.defineProperty(ue,"__esModule",{value:!0});ue.default=ue;ue.Headers=ee;ue.Request=we;ue.Response=X;ue.FetchError=B;ue.AbortError=ot});var _t=E((Fe,Zr)=>{var Ut=Jr(),is=Ut.default||Ut,ra=function(e,t){return/^\/\//.test(e)&&(e="https:"+e),is.call(this,e,t)};ra.ponyfill=!0;Zr.exports=Fe=ra;Fe.fetch=ra;Fe.Headers=Ut.Headers;Fe.Request=Ut.Request;Fe.Response=Ut.Response;Fe.default=ra});var tr=E(na=>{"use strict";Object.defineProperty(na,"__esModule",{value:!0});na.isJSON=void 0;function ss(e){if(e){let t=ps(e);if(!t)return!1;if(t.subtype==="json"||t.suffix==="json"||t.suffix&&/\bjson\b/i.test(t.suffix)||t.subtype&&/\bjson\b/i.test(t.subtype))return!0}return!1}na.isJSON=ss;var us=/^([A-Za-z0-9][A-Za-z0-9!#$&^_-]{0,126})\/([A-Za-z0-9][A-Za-z0-9!#$&^_.+-]{0,126});?$/;function ps(e){let t=e.indexOf(";"),a=t!==-1?e.slice(0,t).trim():e.trim(),r=us.exec(a.toLowerCase().toLowerCase());if(!r)return;let n=r[1],o=r[2],i,s=o.lastIndexOf("+");return s!==-1&&(i=o.substring(s+1),o=o.substring(0,s)),{type:n,subtype:o,suffix:i}}});var an=E(oa=>{"use strict";Object.defineProperty(oa,"__esModule",{value:!0});oa.useFetch=void 0;var st=require("react"),ls=Et(),Xr=Ae(),en=_t(),cs=tr(),tn=_e();async function ys(e){if(!e.ok)throw new Error(e.statusText);let t=e.headers.get("content-type");return t&&(0,cs.isJSON)(t)?await e.json():await e.text()}function ds(e){return{data:e,hasMore:!1}}function Ss(e,t){let{parseResponse:a,mapResult:r,initialData:n,execute:o,keepPreviousData:i,onError:s,onData:u,onWillExecute:p,failureToastOptions:c,...y}=t||{},g={initialData:n,execute:o,keepPreviousData:i,onError:s,onData:u,onWillExecute:p,failureToastOptions:c},m=(0,Xr.useLatest)(a||ys),l=(0,Xr.useLatest)(r||ds),S=(0,st.useRef)(),d=(0,st.useRef)(),b=typeof e=="function"?e({page:0}):void 0;(!S.current||typeof d.current>"u"||d.current!==b)&&(S.current=e),d.current=b;let R=(0,st.useRef)(),f=(0,st.useCallback)((A,x)=>async L=>{let oe=await(0,en.fetch)(A(L),{signal:R.current?.signal,...x}),N=await m.current(oe);return l.current?.(N)},[m,l]),M=(0,st.useCallback)(async(A,x)=>{let L=await(0,en.fetch)(A,{signal:R.current?.signal,...x}),oe=await m.current(L);return l.current(oe)?.data},[m,l]),P=(0,st.useMemo)(()=>d.current?f:M,[d,M,f]);return(0,ls.useCachedPromise)(P,[S.current,y],{...g,internal_cacheKeySuffix:d.current+(0,tn.hash)(l.current)+(0,tn.hash)(m.current),abortable:R})}oa.useFetch=Ss});var ia=E(te=>{"use strict";var bs=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(te,"__esModule",{value:!0});te.defaultParsing=te.handleOutput=te.getSpawnedResult=te.getSpawnedPromise=void 0;var Is=require("node:buffer"),on=bs(require("node:stream")),gs=require("node:util"),Ms=require("signal-exit");function ms(e,{timeout:t}={}){let a=new Promise((s,u)=>{e.on("exit",(p,c)=>{s({exitCode:p,signal:c,timedOut:!1})}),e.on("error",p=>{u(p)}),e.stdin&&e.stdin.on("error",p=>{u(p)})});if(t===0||t===void 0)return a;let r,n=new Promise((s,u)=>{r=setTimeout(()=>{e.kill("SIGTERM"),u(Object.assign(new Error("Timed out"),{timedOut:!0,signal:"SIGTERM"}))},t)}),o=a.finally(()=>{clearTimeout(r)}),i=(0,Ms.onExit)(()=>{e.kill()});return Promise.race([n,o]).finally(()=>i())}te.getSpawnedPromise=ms;var ar=class extends Error{constructor(){super("The output is too big"),this.name="MaxBufferError"}},Rs=(0,gs.promisify)(on.default.pipeline);function As(e){let{encoding:t}=e,a=t==="buffer",r=new on.default.PassThrough({objectMode:!1});t&&t!=="buffer"&&r.setEncoding(t);let n=0,o=[];return r.on("data",i=>{o.push(i),n+=i.length}),r.getBufferedValue=()=>a?Buffer.concat(o,n):o.join(""),r.getBufferedLength=()=>n,r}async function rn(e,t){let a=As(t);return await new Promise((r,n)=>{let o=i=>{i&&a.getBufferedLength()<=Is.constants.MAX_LENGTH&&(i.bufferedData=a.getBufferedValue()),n(i)};(async()=>{try{await Rs(e,a),r()}catch(i){o(i)}})(),a.on("data",()=>{a.getBufferedLength()>1e3*1e3*80&&o(new ar)})}),a.getBufferedValue()}async function nn(e,t){e.destroy();try{return await t}catch(a){return a.bufferedData}}async function fs({stdout:e,stderr:t},{encoding:a},r){let n=rn(e,{encoding:a}),o=rn(t,{encoding:a});try{return await Promise.all([r,n,o])}catch(i){return Promise.all([{error:i,exitCode:null,signal:i.signal,timedOut:i.timedOut||!1},nn(e,n),nn(t,o)])}}te.getSpawnedResult=fs;function Ps(e){let t=typeof e=="string"?`
`:10,a=typeof e=="string"?"\r":13;return e[e.length-1]===t&&(e=e.slice(0,-1)),e[e.length-1]===a&&(e=e.slice(0,-1)),e}function Es(e,t){return e.stripFinalNewline?Ps(t):t}te.handleOutput=Es;var Cs=({timedOut:e,timeout:t,signal:a,exitCode:r})=>e?`timed out after ${t} milliseconds`:a!=null?`was killed with ${a}`:r!=null?`failed with exit code ${r}`:"failed",hs=({stdout:e,stderr:t,error:a,signal:r,exitCode:n,command:o,timedOut:i,options:s,parentError:u})=>{let c=`Command ${Cs({timedOut:i,timeout:s?.timeout,signal:r,exitCode:n})}: ${o}`,y=a?`${c}
${a.message}`:c,g=[y,t,e].filter(Boolean).join(`
`);return a?a.originalMessage=a.message:a=u,a.message=g,a.shortMessage=y,a.command=o,a.exitCode=n,a.signal=r,a.stdout=e,a.stderr=t,"bufferedData"in a&&delete a.bufferedData,a};function Ds({stdout:e,stderr:t,error:a,exitCode:r,signal:n,timedOut:o,command:i,options:s,parentError:u}){if(a||r!==0||n!==null)throw hs({error:a,exitCode:r,signal:n,stdout:e,stderr:t,command:i,timedOut:o,options:s,parentError:u});return e}te.defaultParsing=Ds});var un=E(ut=>{"use strict";var xs=ut&&ut.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ut,"__esModule",{value:!0});ut.useExec=void 0;var Us=xs(require("node:child_process")),sn=require("react"),_s=Et(),vs=Ae(),vt=ia(),Ts=/ +/g;function ws(e,t){if(t)return[e,...t];let a=[];for(let r of e.trim().split(Ts)){let n=a[a.length-1];n&&n.endsWith("\\")?a[a.length-1]=`${n.slice(0,-1)} ${r}`:a.push(r)}return a}function Os(e,t,a){let{parseOutput:r,input:n,onData:o,onWillExecute:i,initialData:s,execute:u,keepPreviousData:p,onError:c,failureToastOptions:y,...g}=Array.isArray(t)?a||{}:t||{},m={initialData:s,execute:u,keepPreviousData:p,onError:c,onData:o,onWillExecute:i,failureToastOptions:y},l=(0,sn.useRef)(),S=(0,vs.useLatest)(r||vt.defaultParsing),d=(0,sn.useCallback)(async(b,R,f,M)=>{let[P,...A]=ws(b,R),x=[P,...A].join(" "),L={stripFinalNewline:!0,...f,timeout:f?.timeout||1e4,signal:l.current?.signal,encoding:f?.encoding===null?"buffer":f?.encoding||"utf8",env:{PATH:"/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin",...process.env,...f?.env}},oe=Us.default.spawn(P,A,L),N=(0,vt.getSpawnedPromise)(oe,L);M&&oe.stdin.end(M);let[{error:_,exitCode:ie,signal:le,timedOut:C},$,Rt]=await(0,vt.getSpawnedResult)(oe,L,N),ja=(0,vt.handleOutput)(L,$),yi=(0,vt.handleOutput)(L,Rt);return S.current({stdout:ja,stderr:yi,error:_,exitCode:ie,signal:le,timedOut:C,command:x,options:L,parentError:new Error})},[S]);return(0,_s.useCachedPromise)(d,[e,Array.isArray(t)?t:[],g,n],{...m,abortable:l})}ut.useExec=Os});var yn=E(pt=>{"use strict";var ua=pt&&pt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(pt,"__esModule",{value:!0});pt.useStreamJSON=void 0;var Bs=require("@raycast/api"),pn=ua(_t()),Ot=require("node:fs"),rr=require("node:fs/promises"),sa=require("node:path"),ln=require("node:stream/promises"),Tt=require("react"),Ls=ua(require("stream-chain")),qs=require("stream-json"),Ns=ua(require("stream-json/filters/Pick")),Vs=ua(require("stream-json/streamers/StreamArray")),cn=tr(),ks=Et(),js=_e();async function wt(e,t,a){if(typeof e=="object"||e.startsWith("http://")||e.startsWith("https://"))return await Fs(e,t,a);if(e.startsWith("file://"))return await zs((0,sa.normalize)(decodeURIComponent(new URL(e).pathname)),t,a?.signal?a.signal:void 0);throw new Error("Only HTTP(S) or file URLs are supported")}async function Fs(e,t,a){let r=await(0,pn.default)(e,a);if(!r.ok)throw new Error("Failed to fetch URL");if(!(0,cn.isJSON)(r.headers.get("content-type")))throw new Error("URL does not return JSON");if(!r.body)throw new Error("Failed to retrieve expected JSON content: Response body is missing or inaccessible.");await(0,ln.pipeline)(r.body,(0,Ot.createWriteStream)(t),a?.signal?{signal:a.signal}:void 0)}async function zs(e,t,a){await(0,ln.pipeline)((0,Ot.createReadStream)(e),(0,Ot.createWriteStream)(t),a?{signal:a}:void 0)}async function Hs(e,t,a,r,n){let o=(0,sa.join)(t,a);try{await(0,rr.stat)(t)}catch{(0,Ot.mkdirSync)(t,{recursive:!0}),await wt(e,o,n);return}if(r){await wt(e,o,n);return}let i;try{i=await(0,rr.stat)(o)}catch{await wt(e,o,n);return}if(typeof e=="object"||e.startsWith("http://")||e.startsWith("https://")){let s=await(0,pn.default)(e,{...n,method:"HEAD"});if(!s.ok)throw new Error("Could not fetch URL");if(!(0,cn.isJSON)(s.headers.get("content-type")))throw new Error("URL does not return JSON");let u=Date.parse(s.headers.get("last-modified")??"");if(i.size===0||Number.isNaN(u)||u>i.mtimeMs){await wt(e,o,n);return}}else if(e.startsWith("file://"))try{(await(0,rr.stat)((0,sa.normalize)(decodeURIComponent(new URL(e).pathname)))).mtimeMs>i.mtimeMs&&await wt(e,o,n)}catch{throw new Error("Source file could not be read")}else throw new Error("Only HTTP(S) or file URLs are supported")}async function*Gs(e,t,a,r,n,o){let i=[],s=new Ls.default([(0,Ot.createReadStream)(e),r?Ns.default.withParser({filter:r}):(0,qs.parser)(),new Vs.default,u=>o?.(u.value)??u.value]);a?.addEventListener("abort",()=>{s.destroy()});try{for await(let u of s){if(a?.aborted)return[];(!n||n(u))&&i.push(u),i.length>=t&&(yield i,i=[])}}catch(u){throw s.destroy(),u}return i.length>0&&(yield i),[]}function $s(e,t){let{initialData:a,execute:r,keepPreviousData:n,onError:o,onData:i,onWillExecute:s,failureToastOptions:u,dataPath:p,filter:c,transform:y,pageSize:g=20,...m}=t??{},l=(0,Tt.useRef)(),S=(0,Tt.useRef)(),d={initialData:a,execute:r,keepPreviousData:n,onError:o,onData:i,onWillExecute:s,failureToastOptions:u},b=(0,Tt.useRef)(null),R=(0,Tt.useRef)(null),f=(0,Tt.useRef)(!1);return(0,ks.useCachedPromise)((M,P,A,x,L,oe)=>async({page:N})=>{let _=(0,js.hash)(M)+".json",ie=Bs.environment.supportPath;if(N===0){R.current?.abort(),R.current=new AbortController;let $=(0,sa.join)(ie,_),Rt=!!(l.current&&l.current!==M&&S.current&&S.current===$);l.current=M,S.current=$,await Hs(M,ie,_,Rt,{...A,signal:R.current?.signal}),b.current=Gs($,P,R.current?.signal,x,L,oe)}if(!b.current)return{hasMore:f.current,data:[]};let{value:le,done:C}=await b.current.next();return f.current=!C,{hasMore:f.current,data:le??[]}},[e,g,m,p,c,y],d)}pt.useStreamJSON=$s});var or=E(de=>{"use strict";var nr=de&&de.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(de,"__esModule",{value:!0});de.baseExecuteSQL=de.isPermissionError=de.PermissionError=void 0;var Qs=require("node:fs"),pa=require("node:fs/promises"),Ws=nr(require("node:os")),dn=nr(require("node:child_process")),Sn=nr(require("node:path")),la=ia(),Ks=_e(),ya=class extends Error{constructor(t){super(t),this.name="PermissionError"}};de.PermissionError=ya;function Ys(e){return e instanceof Error&&e.name==="PermissionError"}de.isPermissionError=Ys;async function Js(e,t,a){if(!(0,Qs.existsSync)(e))throw new Error("The database does not exist");let r=a?.signal,n,o=dn.default.spawn("sqlite3",["--json","--readonly",e,t],{signal:r}),i=(0,la.getSpawnedPromise)(o),[{error:s,exitCode:u,signal:p},c,y]=await(0,la.getSpawnedResult)(o,{encoding:"utf-8"},i);if(ca(r),y.match("(5)")||y.match("(14)")){if(!n){let g=Sn.default.join(Ws.default.tmpdir(),"useSQL",(0,Ks.hash)(e));await(0,pa.mkdir)(g,{recursive:!0}),ca(r),n=Sn.default.join(g,"db.db"),await(0,pa.copyFile)(e,n),await(0,pa.writeFile)(n+"-shm",""),await(0,pa.writeFile)(n+"-wal",""),ca(r)}o=dn.default.spawn("sqlite3",["--json","--readonly","--vfs","unix-none",n,t],{signal:r}),i=(0,la.getSpawnedPromise)(o),[{error:s,exitCode:u,signal:p},c,y]=await(0,la.getSpawnedResult)(o,{encoding:"utf-8"},i),ca(r)}if(s||u!==0||p!==null)throw y.includes("authorization denied")?new ya("You do not have permission to access the database."):new Error(y||"Unknown error");return JSON.parse(c.trim()||"[]")}de.baseExecuteSQL=Js;function ca(e){if(e?.aborted){let t=new Error("aborted");throw t.name="AbortError",t}}});var In=E(lt=>{"use strict";var Zs=lt&&lt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(lt,"__esModule",{value:!0});lt.useSQL=void 0;var Se=require("react/jsx-runtime"),V=require("@raycast/api"),Xs=require("node:fs"),eu=Zs(require("node:os")),da=require("react"),tu=tt(),au=Ae(),ru=At(),ir=or();function nu(e,t,a){let{permissionPriming:r,...n}=a||{},[o,i]=(0,da.useState)(),s=(0,au.useLatest)(a||{}),u=(0,da.useRef)(),p=(0,da.useCallback)(y=>{console.error(y);let g=y instanceof Error&&y.message.includes("authorization denied")?new ir.PermissionError("You do not have permission to access the database."):y;(0,ir.isPermissionError)(g)?i((0,Se.jsx)(ou,{priming:s.current.permissionPriming})):s.current.onError?s.current.onError(g):V.environment.launchType!==V.LaunchType.Background&&(0,ru.showFailureToast)(g,{title:"Cannot query the data"})},[s]),c=(0,da.useMemo)(()=>{if(!(0,Xs.existsSync)(e))throw new Error("The database does not exist");return async(y,g)=>{let m=u.current?.signal;return(0,ir.baseExecuteSQL)(y,g,{signal:m})}},[e]);return{...(0,tu.usePromise)(c,[e,t],{...n,onError:p}),permissionView:o}}lt.useSQL=nu;var bn=parseInt(eu.default.release().split(".")[0])>=22,sr=bn?"Settings":"Preferences";function ou(e){let t=bn?{title:"Open System Settings -> Privacy",target:"x-apple.systempreferences:com.apple.preference.security?Privacy_AllFiles"}:{title:"Open System Preferences -> Security",target:"x-apple.systempreferences:com.apple.preference.security?Privacy_AllFiles"};return V.environment.commandMode==="menu-bar"?(0,Se.jsxs)(V.MenuBarExtra,{icon:V.Icon.Warning,title:V.environment.commandName,children:[(0,Se.jsx)(V.MenuBarExtra.Item,{title:"Raycast needs full disk access",tooltip:`You can revert this access in ${sr} whenever you want`}),e.priming?(0,Se.jsx)(V.MenuBarExtra.Item,{title:e.priming,tooltip:`You can revert this access in ${sr} whenever you want`}):null,(0,Se.jsx)(V.MenuBarExtra.Separator,{}),(0,Se.jsx)(V.MenuBarExtra.Item,{title:t.title,onAction:()=>(0,V.open)(t.target)})]}):(0,Se.jsx)(V.List,{children:(0,Se.jsx)(V.List.EmptyView,{icon:{source:{light:"https://raycast.com/uploads/extensions-utils-security-permissions-light.png",dark:"https://raycast.com/uploads/extensions-utils-security-permissions-dark.png"}},title:"Raycast needs full disk access.",description:`${e.priming?e.priming+`
`:""}You can revert this access in ${sr} whenever you want.`,actions:(0,Se.jsx)(V.ActionPanel,{children:(0,Se.jsx)(V.Action.Open,{...t})})})})}});var Mn=E(ct=>{"use strict";Object.defineProperty(ct,"__esModule",{value:!0});ct.useForm=ct.FormValidation=void 0;var Ce=require("react"),gn=Ae(),pr;(function(e){e.Required="required"})(pr||(ct.FormValidation=pr={}));function ur(e,t){if(e){if(typeof e=="function")return e(t);if(e===pr.Required){let a=typeof t<"u"&&t!==null;if(a)switch(typeof t){case"string":a=t.length>0;break;case"object":Array.isArray(t)?a=t.length>0:t instanceof Date&&(a=t.getTime()>0);break;default:break}if(!a)return"The item is required"}}}function iu(e){let{onSubmit:t,validation:a,initialValues:r={}}=e,[n,o]=(0,Ce.useState)(r),[i,s]=(0,Ce.useState)({}),u=(0,Ce.useRef)({}),p=(0,gn.useLatest)(a||{}),c=(0,gn.useLatest)(t),y=(0,Ce.useCallback)(b=>{u.current[b]?.focus()},[u]),g=(0,Ce.useCallback)(async b=>{let R=!1;for(let[M,P]of Object.entries(p.current)){let A=ur(P,b[M]);A&&(R||(R={},y(M)),R[M]=A)}if(R)return s(R),!1;let f=await c.current(b);return typeof f=="boolean"?f:!0},[p,c,y]),m=(0,Ce.useCallback)((b,R)=>{s(f=>({...f,[b]:R}))},[s]),l=(0,Ce.useCallback)(function(b,R){o(f=>({...f,[b]:typeof R=="function"?R(f[b]):R}))},[o]),S=(0,Ce.useMemo)(()=>new Proxy({},{get(b,R){let f=p.current[R],M=n[R];return{onChange(P){i[R]&&(ur(f,P)||m(R,void 0)),l(R,P)},onBlur(P){let A=ur(f,P.target.value);A&&m(R,A)},error:i[R],id:R,value:typeof M>"u"?null:M,ref:P=>{u.current[R]=P}}}}),[i,p,m,n,u,l]),d=(0,Ce.useCallback)(b=>{s({}),Object.entries(u.current).forEach(([R,f])=>{b?.[R]||f?.reset()}),b&&o(b)},[o,s,u]);return{handleSubmit:g,setValidationError:m,setValue:l,values:n,itemProps:S,focus:y,reset:d}}ct.useForm=iu});var Rn=E(Sa=>{"use strict";Object.defineProperty(Sa,"__esModule",{value:!0});Sa.useAI=void 0;var mn=require("react"),su=require("@raycast/api"),uu=tt();function pu(e,t={}){let{creativity:a,stream:r,model:n,...o}=t,[i,s]=(0,mn.useState)(""),u=(0,mn.useRef)(),{isLoading:p,error:c,revalidate:y}=(0,uu.usePromise)(async(g,m,l)=>{s("");let S=su.AI.ask(g,{creativity:m,model:n,signal:u.current?.signal});l===!1?s(await S):(S.on("data",d=>{s(b=>b+d)}),await S)},[e,a,r],{...o,abortable:u});return{isLoading:p,data:i,error:c,revalidate:y}}Sa.useAI=pu});var Pn=E(ba=>{"use strict";Object.defineProperty(ba,"__esModule",{value:!0});ba.useFrecencySorting=void 0;var lr=require("react"),An=Ae(),lu=Xt(),cu=10,fn=1440*60*1e3,yu=Math.log(2)/(cu*fn),du={Default:100,Embed:0,Bookmark:140};function Su(e){let t=Date.now(),a=e?e.lastVisited:0,r=e?e.frecency:0,n=(t-a)/fn,o=du.Default*Math.exp(-yu*n),i=r+o;return{lastVisited:t,frecency:i}}var bu=e=>{if(process.env.NODE_ENV!=="production"&&(typeof e!="object"||!e||!("id"in e)||typeof e.id!="string"))throw new Error("Specify a key function or make sure your items have an 'id' property");return e.id};function Iu(e,t){let a=(0,An.useLatest)(t?.key||bu),r=(0,An.useLatest)(t?.sortUnvisited),[n,o]=(0,lu.useCachedState)(`raycast_frecency_${t?.namespace}`,{}),i=(0,lr.useCallback)(async function(c){let y=a.current(c);o(g=>{let m=g[y],l=Su(m);return{...g,[y]:l}})},[a,o]),s=(0,lr.useCallback)(async function(c){let y=a.current(c);o(g=>{let m={...g};return delete m[y],m})},[a,o]);return{data:(0,lr.useMemo)(()=>e?e.sort((p,c)=>{let y=n[a.current(p)],g=n[a.current(c)];return y&&!g?-1:!y&&g?1:y&&g?g.frecency-y.frecency:r.current?r.current(p,c):0}):[],[n,e,a,r]),visitItem:i,resetRanking:s}}ba.useFrecencySorting=Iu});var hn=E(Ia=>{"use strict";Object.defineProperty(Ia,"__esModule",{value:!0});Ia.useLocalStorage=void 0;var cr=require("@raycast/api"),En=At(),Cn=_e(),gu=tt();function Mu(e,t){let{data:a,isLoading:r,mutate:n}=(0,gu.usePromise)(async s=>{let u=await cr.LocalStorage.getItem(s);return typeof u<"u"?JSON.parse(u,Cn.reviver):t},[e]);async function o(s){try{await n(cr.LocalStorage.setItem(e,JSON.stringify(s,Cn.replacer)),{optimisticUpdate(u){return u}})}catch(u){await(0,En.showFailureToast)(u,{title:"Failed to set value in local storage"})}}async function i(){try{await n(cr.LocalStorage.removeItem(e),{optimisticUpdate(){}})}catch(s){await(0,En.showFailureToast)(s,{title:"Failed to remove value from local storage"})}}return{value:a,setValue:o,removeValue:i,isLoading:r}}Ia.useLocalStorage=Mu});var vn=E(yt=>{"use strict";Object.defineProperty(yt,"__esModule",{value:!0});yt.slightlyLighterColor=yt.slightlyDarkerColor=void 0;function mu(e){let t=0,a=0,r=0;if(e.length===4)t=parseInt(`${e[1]}${e[1]}`,16),a=parseInt(`${e[2]}${e[2]}`,16),r=parseInt(`${e[3]}${e[3]}`,16);else if(e.length===7)t=parseInt(`${e[1]}${e[2]}`,16),a=parseInt(`${e[3]}${e[4]}`,16),r=parseInt(`${e[5]}${e[6]}`,16);else throw new Error(`Malformed hex color: ${e}`);return{r:t,g:a,b:r}}function Ru({r:e,g:t,b:a}){let r=e.toString(16),n=t.toString(16),o=a.toString(16);return r.length===1&&(r=`0${r}`),n.length===1&&(n=`0${n}`),o.length===1&&(o=`0${o}`),`#${r}${n}${o}`}function Au({r:e,g:t,b:a}){e/=255,t/=255,a/=255;let r=Math.min(e,t,a),n=Math.max(e,t,a),o=n-r,i=0,s=0,u=0;return o===0?i=0:n===e?i=(t-a)/o%6:n===t?i=(a-e)/o+2:i=(e-t)/o+4,i=Math.round(i*60),i<0&&(i+=360),u=(n+r)/2,s=o===0?0:o/(1-Math.abs(2*u-1)),s=+(s*100).toFixed(1),u=+(u*100).toFixed(1),{h:i,s,l:u}}function fu({h:e,s:t,l:a}){t/=100,a/=100;let r=(1-Math.abs(2*a-1))*t,n=r*(1-Math.abs(e/60%2-1)),o=a-r/2,i=0,s=0,u=0;return e>=0&&e<60?(i=r,s=n,u=0):e>=60&&e<120?(i=n,s=r,u=0):e>=120&&e<180?(i=0,s=r,u=n):e>=180&&e<240?(i=0,s=n,u=r):e>=240&&e<300?(i=n,s=0,u=r):e>=300&&e<360&&(i=r,s=0,u=n),i=Math.round((i+o)*255),s=Math.round((s+o)*255),u=Math.round((u+o)*255),{r:i,g:s,b:u}}function Dn(e){return Au(mu(e))}function xn(e){return Ru(fu(e))}function Un(e,t,a){return t<a?e<t?t:e>a?a:e:e<a?a:e>t?t:e}var _n=12;function Pu(e){let t=Dn(e);return xn({h:t.h,s:t.s,l:Un(t.l-_n,0,100)})}yt.slightlyDarkerColor=Pu;function Eu(e){let t=Dn(e);return xn({h:t.h,s:t.s,l:Un(t.l+_n,0,100)})}yt.slightlyLighterColor=Eu});var On=E(ga=>{"use strict";Object.defineProperty(ga,"__esModule",{value:!0});ga.getAvatarIcon=void 0;var Tn=vn();function dt(e,t){let a=e.charCodeAt(t);if(Number.isNaN(a))return["",t];if(a<55296||a>57343)return[e.charAt(t),t];if(55296<=a&&a<=56319){if(e.length<=t+1)throw new Error("High surrogate without following low surrogate");let n=e.charCodeAt(t+1);if(56320>n||n>57343)throw new Error("High surrogate without following low surrogate");return[e.charAt(t)+e.charAt(t+1),t+1]}if(t===0)throw new Error("Low surrogate without preceding high surrogate");let r=e.charCodeAt(t-1);if(55296>r||r>56319)throw new Error("Low surrogate without preceding high surrogate");return[e.charAt(t+1),t+1]}var wn=["#DC829A","#D64854","#D47600","#D36CDD","#52A9E4","#7871E8","#70920F","#43B93A","#EB6B3E","#26B795","#D85A9B","#A067DC","#BD9500","#5385D9"];function Cu(e,t){let a=e.trim().split(" "),r;if(a.length==1&&dt(a[0],0)[0])r=dt(a[0],0)[0];else if(a.length>1){let u=dt(a[0],0)[0]||"",p=dt(a[a.length-1],0)[0]??"";r=u+p}else r="";let n;if(t?.background)n=t?.background;else{let u=0,[p,c]=dt(r,0);for(;p;)u+=p.charCodeAt(0),[p,c]=dt(r,c+1);let y=u%wn.length;n=wn[y]}let i=50-0;return`data:image/svg+xml,${`<svg width="100px" height="100px">
  ${t?.gradient!==!1?`<defs>
      <linearGradient id="Gradient" x1="0.25" x2="0.75" y1="0" y2="1">
        <stop offset="0%" stop-color="${(0,Tn.slightlyLighterColor)(n)}"/>
        <stop offset="50%" stop-color="${n}"/>
        <stop offset="100%" stop-color="${(0,Tn.slightlyDarkerColor)(n)}"/>
      </linearGradient>
  </defs>`:""}
      <circle cx="50" cy="50" r="${i}" fill="${t?.gradient!==!1?"url(#Gradient)":n}" />
      ${r?`<text x="50" y="80" font-size="${i-1}" font-family="Inter, sans-serif" text-anchor="middle" fill="white">${r.toUpperCase()}</text>`:""}
    </svg>
  `.replaceAll(`
`,"")}`}ga.getAvatarIcon=Cu});var Ln=E(Ma=>{"use strict";Object.defineProperty(Ma,"__esModule",{value:!0});Ma.getFavicon=void 0;var Bn=require("@raycast/api"),hu=require("url");function Du(e,t){try{let r=(typeof e=="string"?new hu.URL(e):e).hostname;return{source:`https://www.google.com/s2/favicons?sz=${t?.size??64}&domain=${r}`,fallback:t?.fallback??Bn.Icon.Link,mask:t?.mask}}catch(a){return console.error(a),Bn.Icon.Link}}Ma.getFavicon=Du});var Vn=E(ma=>{"use strict";Object.defineProperty(ma,"__esModule",{value:!0});ma.getProgressIcon=void 0;var qn=require("@raycast/api");function Nn(e,t,a,r){let n=(r-90)*Math.PI/180;return{x:e+a*Math.cos(n),y:t+a*Math.sin(n)}}function xu(e,t,a,r,n){let o=Nn(e,t,a,n),i=Nn(e,t,a,r),s=n-r<=180?"0":"1";return["M",o.x,o.y,"A",a,a,0,s,0,i.x,i.y].join(" ")}function Uu(e,t=qn.Color.Red,a){let r=a?.background||(qn.environment.appearance==="light"?"black":"white"),n=a?.backgroundOpacity||.1,o=10,s=50-5-o/2;return`data:image/svg+xml,${`<svg width="100px" height="100px">
      <circle cx="50" cy="50" r="${s}" stroke-width="${o}" stroke="${e<1?r:t}" opacity="${e<1?n:"1"}" fill="none" />
      ${e>0&&e<1?`<path d="${xu(50,50,s,0,e*360)}" stroke="${t}" stroke-width="${o}" fill="none" />`:""}
    </svg>
  `.replaceAll(`
`,"")}`}ma.getProgressIcon=Uu});var kn=E(he=>{"use strict";var _u=he&&he.__createBinding||(Object.create?(function(e,t,a,r){r===void 0&&(r=a);var n=Object.getOwnPropertyDescriptor(t,a);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,n)}):(function(e,t,a,r){r===void 0&&(r=a),e[r]=t[a]})),yr=he&&he.__exportStar||function(e,t){for(var a in e)a!=="default"&&!Object.prototype.hasOwnProperty.call(t,a)&&_u(t,e,a)};Object.defineProperty(he,"__esModule",{value:!0});yr(On(),he);yr(Ln(),he);yr(Vn(),he)});var jn=E(q=>{"use strict";Object.defineProperty(q,"__esModule",{value:!0});q.zoomService=q.slackService=q.linearService=q.jiraService=q.googleService=q.githubService=q.asanaService=void 0;var k=require("@raycast/api"),ze=dr(),Ra={asana:"1191201745684312",github:"7235fe8d42157f1f38c0",linear:"c8ff37b9225c3c9aefd7d66ea0e5b6f1",slack:"851756884692.5546927290212"},Oe=e=>`data:image/svg+xml,${e}`,He={asana:Oe('<svg xmlns="http://www.w3.org/2000/svg" width="251" height="232" fill="none"><path fill="#F06A6A" d="M179.383 54.373c0 30.017-24.337 54.374-54.354 54.374-30.035 0-54.373-24.338-54.373-54.374C70.656 24.338 94.993 0 125.029 0c30.017 0 54.354 24.338 54.354 54.373ZM54.393 122.33C24.376 122.33.02 146.668.02 176.685c0 30.017 24.337 54.373 54.373 54.373 30.035 0 54.373-24.338 54.373-54.373 0-30.017-24.338-54.355-54.373-54.355Zm141.253 0c-30.035 0-54.373 24.338-54.373 54.374 0 30.035 24.338 54.373 54.373 54.373 30.017 0 54.374-24.338 54.374-54.373 0-30.036-24.338-54.374-54.374-54.374Z"/></svg>'),github:{source:Oe('<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>'),tintColor:k.Color.PrimaryText},google:Oe('<svg xmlns="http://www.w3.org/2000/svg" style="display:block" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/><path fill="none" d="M0 0h48v48H0z"/></svg>'),jira:Oe('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="2361" height="2500" viewBox="2.59 0 214.091 224"><linearGradient id="a" x1="102.4" x2="56.15" y1="218.63" y2="172.39" gradientTransform="matrix(1 0 0 -1 0 264)" gradientUnits="userSpaceOnUse"><stop offset=".18" stop-color="#0052cc"/><stop offset="1" stop-color="#2684ff"/></linearGradient><linearGradient xlink:href="#a" id="b" x1="114.65" x2="160.81" y1="85.77" y2="131.92"/><path fill="#2684ff" d="M214.06 105.73 117.67 9.34 108.33 0 35.77 72.56 2.59 105.73a8.89 8.89 0 0 0 0 12.54l66.29 66.29L108.33 224l72.55-72.56 1.13-1.12 32.05-32a8.87 8.87 0 0 0 0-12.59zm-105.73 39.39L75.21 112l33.12-33.12L141.44 112z"/><path fill="url(#a)" d="M108.33 78.88a55.75 55.75 0 0 1-.24-78.61L35.62 72.71l39.44 39.44z"/><path fill="url(#b)" d="m141.53 111.91-33.2 33.21a55.77 55.77 0 0 1 0 78.86L181 151.35z"/></svg>'),linear:{source:{light:Oe('<svg xmlns="http://www.w3.org/2000/svg" fill="#222326" width="200" height="200" viewBox="0 0 100 100"><path d="M1.22541 61.5228c-.2225-.9485.90748-1.5459 1.59638-.857L39.3342 97.1782c.6889.6889.0915 1.8189-.857 1.5964C20.0515 94.4522 5.54779 79.9485 1.22541 61.5228ZM.00189135 46.8891c-.01764375.2833.08887215.5599.28957165.7606L52.3503 99.7085c.2007.2007.4773.3075.7606.2896 2.3692-.1476 4.6938-.46 6.9624-.9259.7645-.157 1.0301-1.0963.4782-1.6481L2.57595 39.4485c-.55186-.5519-1.49117-.2863-1.648174.4782-.465915 2.2686-.77832 4.5932-.92588465 6.9624ZM4.21093 29.7054c-.16649.3738-.08169.8106.20765 1.1l64.77602 64.776c.2894.2894.7262.3742 1.1.2077 1.7861-.7956 3.5171-1.6927 5.1855-2.684.5521-.328.6373-1.0867.1832-1.5407L8.43566 24.3367c-.45409-.4541-1.21271-.3689-1.54074.1832-.99132 1.6684-1.88843 3.3994-2.68399 5.1855ZM12.6587 18.074c-.3701-.3701-.393-.9637-.0443-1.3541C21.7795 6.45931 35.1114 0 49.9519 0 77.5927 0 100 22.4073 100 50.0481c0 14.8405-6.4593 28.1724-16.7199 37.3375-.3903.3487-.984.3258-1.3542-.0443L12.6587 18.074Z"/></svg>'),dark:Oe('<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="200" height="200" viewBox="0 0 100 100"><path d="M1.22541 61.5228c-.2225-.9485.90748-1.5459 1.59638-.857L39.3342 97.1782c.6889.6889.0915 1.8189-.857 1.5964C20.0515 94.4522 5.54779 79.9485 1.22541 61.5228ZM.00189135 46.8891c-.01764375.2833.08887215.5599.28957165.7606L52.3503 99.7085c.2007.2007.4773.3075.7606.2896 2.3692-.1476 4.6938-.46 6.9624-.9259.7645-.157 1.0301-1.0963.4782-1.6481L2.57595 39.4485c-.55186-.5519-1.49117-.2863-1.648174.4782-.465915 2.2686-.77832 4.5932-.92588465 6.9624ZM4.21093 29.7054c-.16649.3738-.08169.8106.20765 1.1l64.77602 64.776c.2894.2894.7262.3742 1.1.2077 1.7861-.7956 3.5171-1.6927 5.1855-2.684.5521-.328.6373-1.0867.1832-1.5407L8.43566 24.3367c-.45409-.4541-1.21271-.3689-1.54074.1832-.99132 1.6684-1.88843 3.3994-2.68399 5.1855ZM12.6587 18.074c-.3701-.3701-.393-.9637-.0443-1.3541C21.7795 6.45931 35.1114 0 49.9519 0 77.5927 0 100 22.4073 100 50.0481c0 14.8405-6.4593 28.1724-16.7199 37.3375-.3903.3487-.984.3258-1.3542-.0443L12.6587 18.074Z" /></svg>')}},slack:Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="73 73 124 124"><style>.st0{fill:#e01e5a}.st1{fill:#36c5f0}.st2{fill:#2eb67d}.st3{fill:#ecb22e}</style><path d="M99.4 151.2c0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9h12.9v12.9zM105.9 151.2c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v32.3c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9v-32.3z" class="st0"/><path d="M118.8 99.4c-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v12.9h-12.9zM118.8 105.9c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H86.5c-7.1 0-12.9-5.8-12.9-12.9s5.8-12.9 12.9-12.9h32.3z" class="st1"/><path d="M170.6 118.8c0-7.1 5.8-12.9 12.9-12.9 7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9h-12.9v-12.9zM164.1 118.8c0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9V86.5c0-7.1 5.8-12.9 12.9-12.9 7.1 0 12.9 5.8 12.9 12.9v32.3z" class="st2"/><path d="M151.2 170.6c7.1 0 12.9 5.8 12.9 12.9 0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9v-12.9h12.9zM151.2 164.1c-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9h32.3c7.1 0 12.9 5.8 12.9 12.9 0 7.1-5.8 12.9-12.9 12.9h-32.3z" class="st3"/></svg>'),zoom:Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 351.845 80"><path d="M73.786 78.835H10.88A10.842 10.842 0 0 1 .833 72.122a10.841 10.841 0 0 1 2.357-11.85L46.764 16.7h-31.23C6.954 16.699 0 9.744 0 1.165h58.014c4.414 0 8.357 2.634 10.046 6.712a10.843 10.843 0 0 1-2.356 11.85L22.13 63.302h36.122c8.58 0 15.534 6.955 15.534 15.534Zm278.059-48.544C351.845 13.588 338.256 0 321.553 0c-8.934 0-16.975 3.89-22.524 10.063C293.48 3.89 285.44 0 276.505 0c-16.703 0-30.291 13.588-30.291 30.291v48.544c8.579 0 15.534-6.955 15.534-15.534v-33.01c0-8.137 6.62-14.757 14.757-14.757s14.757 6.62 14.757 14.757v33.01c0 8.58 6.955 15.534 15.534 15.534V30.291c0-8.137 6.62-14.757 14.757-14.757s14.758 6.62 14.758 14.757v33.01c0 8.58 6.954 15.534 15.534 15.534V30.291ZM238.447 40c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.908-40 40-40 40 17.909 40 40Zm-15.534 0c0-13.512-10.954-24.466-24.466-24.466S173.98 26.488 173.98 40s10.953 24.466 24.466 24.466S222.913 53.512 222.913 40Zm-70.68 0c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.909-40 40-40 40 17.909 40 40Zm-15.534 0c0-13.512-10.954-24.466-24.466-24.466S87.767 26.488 87.767 40s10.954 24.466 24.466 24.466S136.699 53.512 136.699 40Z" style="fill:#0b5cff"/></svg>')},vu=e=>new ze.OAuthService({client:new k.OAuth.PKCEClient({redirectMethod:k.OAuth.RedirectMethod.Web,providerName:"Asana",providerIcon:He.asana,providerId:"asana",description:"Connect your Asana account"}),clientId:e.clientId??Ra.asana,authorizeUrl:e.authorizeUrl??"https://asana.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://asana.oauth.raycast.com/token",refreshTokenUrl:e.refreshTokenUrl??"https://asana.oauth.raycast.com/refresh-token",scope:e.scope,personalAccessToken:e.personalAccessToken,onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});q.asanaService=vu;var Tu=e=>new ze.OAuthService({client:new k.OAuth.PKCEClient({redirectMethod:k.OAuth.RedirectMethod.Web,providerName:"GitHub",providerIcon:He.github,providerId:"github",description:"Connect your GitHub account"}),clientId:e.clientId??Ra.github,authorizeUrl:e.authorizeUrl??"https://github.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://github.oauth.raycast.com/token",refreshTokenUrl:e.refreshTokenUrl??"https://github.oauth.raycast.com/refresh-token",scope:e.scope,personalAccessToken:e.personalAccessToken,onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});q.githubService=Tu;var wu=e=>new ze.OAuthService({client:new k.OAuth.PKCEClient({redirectMethod:k.OAuth.RedirectMethod.AppURI,providerName:"Google",providerIcon:He.google,providerId:"google",description:"Connect your Google account"}),clientId:e.clientId,authorizeUrl:e.authorizeUrl??"https://accounts.google.com/o/oauth2/v2/auth",tokenUrl:e.tokenUrl??"https://oauth2.googleapis.com/token",refreshTokenUrl:e.tokenUrl,scope:e.scope,personalAccessToken:e.personalAccessToken,bodyEncoding:e.bodyEncoding??"url-encoded",onAuthorize:e.onAuthorize,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});q.googleService=wu;var Ou=e=>new ze.OAuthService({client:new k.OAuth.PKCEClient({redirectMethod:k.OAuth.RedirectMethod.Web,providerName:"Jira",providerIcon:He.jira,providerId:"jira",description:"Connect your Jira account"}),clientId:e.clientId,authorizeUrl:e.authorizeUrl??"https://auth.atlassian.com/authorize",tokenUrl:e.tokenUrl??"https://auth.atlassian.com/oauth/token",refreshTokenUrl:e.refreshTokenUrl,scope:e.scope,personalAccessToken:e.personalAccessToken,onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});q.jiraService=Ou;var Bu=e=>new ze.OAuthService({client:new k.OAuth.PKCEClient({redirectMethod:k.OAuth.RedirectMethod.Web,providerName:"Linear",providerIcon:He.linear,providerId:"linear",description:"Connect your Linear account"}),clientId:e.clientId??Ra.linear,authorizeUrl:e.authorizeUrl??"https://linear.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://linear.oauth.raycast.com/token",refreshTokenUrl:e.refreshTokenUrl??"https://linear.oauth.raycast.com/refresh-token",scope:e.scope,extraParameters:{actor:"user"},onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});q.linearService=Bu;var Lu=e=>new ze.OAuthService({client:new k.OAuth.PKCEClient({redirectMethod:k.OAuth.RedirectMethod.Web,providerName:"Slack",providerIcon:He.slack,providerId:"slack",description:"Connect your Slack account"}),clientId:e.clientId??Ra.slack,authorizeUrl:e.authorizeUrl??"https://slack.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://slack.oauth.raycast.com/token",refreshTokenUrl:e.tokenUrl??"https://slack.oauth.raycast.com/refresh-token",scope:"",extraParameters:{user_scope:e.scope},personalAccessToken:e.personalAccessToken,bodyEncoding:e.tokenUrl?e.bodyEncoding??"url-encoded":"json",onAuthorize:e.onAuthorize,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser??(t=>({access_token:t.authed_user.access_token,scope:t.authed_user.scope}))});q.slackService=Lu;var qu=e=>new ze.OAuthService({client:new k.OAuth.PKCEClient({redirectMethod:k.OAuth.RedirectMethod.Web,providerName:"Zoom",providerIcon:He.zoom,providerId:"zoom",description:"Connect your Zoom account"}),clientId:e.clientId,authorizeUrl:e.authorizeUrl??"https://zoom.us/oauth/authorize",tokenUrl:e.tokenUrl??"https://zoom.us/oauth/token",refreshTokenUrl:e.refreshTokenUrl,scope:e.scope,personalAccessToken:e.personalAccessToken,bodyEncoding:e.bodyEncoding??"url-encoded",onAuthorize:e.onAuthorize,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});q.zoomService=qu});var dr=E(St=>{"use strict";var Nu=St&&St.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(St,"__esModule",{value:!0});St.OAuthService=void 0;var Fn=Nu(_t()),Ge=jn(),be=class{constructor(t){this.clientId=t.clientId,this.scope=Array.isArray(t.scope)?t.scope.join(" "):t.scope,this.personalAccessToken=t.personalAccessToken,this.bodyEncoding=t.bodyEncoding,this.client=t.client,this.extraParameters=t.extraParameters,this.authorizeUrl=t.authorizeUrl,this.tokenUrl=t.tokenUrl,this.refreshTokenUrl=t.refreshTokenUrl,this.onAuthorize=t.onAuthorize,this.tokenResponseParser=t.tokenResponseParser??(a=>a),this.tokenRefreshResponseParser=t.tokenRefreshResponseParser??(a=>a),this.authorize=this.authorize.bind(this)}async authorize(){let t=await this.client.getTokens();if(t?.accessToken){if(t.refreshToken&&t.isExpired()){let o=await this.refreshTokens({token:t.refreshToken});if(o)return await this.client.setTokens(o),o.access_token}return t.accessToken}let a=await this.client.authorizationRequest({endpoint:this.authorizeUrl,clientId:this.clientId,scope:this.scope,extraParameters:this.extraParameters}),{authorizationCode:r}=await this.client.authorize(a),n=await this.fetchTokens({authRequest:a,authorizationCode:r});return await this.client.setTokens(n),n.access_token}async fetchTokens({authRequest:t,authorizationCode:a}){let r;if(this.bodyEncoding==="url-encoded"){let i=new URLSearchParams;i.append("client_id",this.clientId),i.append("code",a),i.append("code_verifier",t.codeVerifier),i.append("grant_type","authorization_code"),i.append("redirect_uri",t.redirectURI),r={body:i}}else r={body:JSON.stringify({client_id:this.clientId,code:a,code_verifier:t.codeVerifier,grant_type:"authorization_code",redirect_uri:t.redirectURI}),headers:{"Content-Type":"application/json"}};let n=await(0,Fn.default)(this.tokenUrl,{method:"POST",...r});if(!n.ok){let i=await n.text();throw console.error("fetch tokens error:",i),new Error(`Error while fetching tokens: ${n.status} (${n.statusText})
${i}`)}let o=this.tokenResponseParser(await n.json());return Array.isArray(o.scope)?{...o,scope:o.scope.join(" ")}:o}async refreshTokens({token:t}){let a;if(this.bodyEncoding==="url-encoded"){let n=new URLSearchParams;n.append("client_id",this.clientId),n.append("refresh_token",t),n.append("grant_type","refresh_token"),a={body:n}}else a={body:JSON.stringify({client_id:this.clientId,refresh_token:t,grant_type:"refresh_token"}),headers:{"Content-Type":"application/json"}};let r=await(0,Fn.default)(this.refreshTokenUrl??this.tokenUrl,{method:"POST",...a});if(r.ok){let n=this.tokenRefreshResponseParser(await r.json());return n.refresh_token=n.refresh_token??t,n}else{let n=await r.text();console.error("refresh tokens error:",n),this.client.description=`${this.client.providerName} needs you to sign-in again. Press \u23CE or click the button below to continue.`,await this.client.removeTokens(),await this.authorize()}}};St.OAuthService=be;be.asana=Ge.asanaService;be.github=Ge.githubService;be.google=Ge.googleService;be.jira=Ge.jiraService;be.linear=Ge.linearService;be.slack=Ge.slackService;be.zoom=Ge.zoomService});var zn=E(bt=>{"use strict";Object.defineProperty(bt,"__esModule",{value:!0});bt.getAccessToken=bt.withAccessToken=void 0;var Vu=require("react/jsx-runtime"),ku=require("@raycast/api"),Be=null,$e=null,Sr=null,br=null,Ir=null;function ju(e){return ku.environment.commandMode==="no-view"?t=>async r=>{if(!Be){Be=e.personalAccessToken??await e.authorize(),$e=e.personalAccessToken?"personal":"oauth";let n=(await e.client?.getTokens())?.idToken;e.onAuthorize&&await Promise.resolve(e.onAuthorize({token:Be,type:$e,idToken:n}))}return t(r)}:t=>{let a=r=>{e.personalAccessToken?(Be=e.personalAccessToken,$e="personal"):(Sr||(Sr=gr(e.authorize())),Be=Sr.read(),$e="oauth");let n;return e.client&&(br||(br=gr(e.client.getTokens())),n=br.read()?.idToken),!Ir&&e.onAuthorize&&(Ir=gr(Promise.resolve(e.onAuthorize({token:Be,type:$e,idToken:n})))),Ir?.read(),(0,Vu.jsx)(t,{...r})};return a.displayName=`withAccessToken(${t.displayName||t.name})`,a}}bt.withAccessToken=ju;function Fu(){if(!Be||!$e)throw new Error("getAccessToken must be used when authenticated (eg. used inside `withAccessToken`)");return{token:Be,type:$e}}bt.getAccessToken=Fu;function gr(e){let t="pending",a,r=e.then(o=>{t="success",a=o},o=>{t="error",a=o});return{read:()=>{switch(t){case"pending":throw r;case"error":throw a;default:return a}}}}});var Gn=E(Le=>{"use strict";var zu=Le&&Le.__createBinding||(Object.create?(function(e,t,a,r){r===void 0&&(r=a);var n=Object.getOwnPropertyDescriptor(t,a);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,n)}):(function(e,t,a,r){r===void 0&&(r=a),e[r]=t[a]})),Hn=Le&&Le.__exportStar||function(e,t){for(var a in e)a!=="default"&&!Object.prototype.hasOwnProperty.call(t,a)&&zu(t,e,a)};Object.defineProperty(Le,"__esModule",{value:!0});Hn(dr(),Le);Hn(zn(),Le)});var Yn=E(ae=>{"use strict";var $n=ae&&ae.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ae,"__esModule",{value:!0});ae.createDeeplink=ae.createExtensionDeeplink=ae.createScriptCommandDeeplink=ae.DeeplinkType=void 0;var mr=require("@raycast/api"),Hu=$n(require("node:fs")),Gu=$n(require("node:path")),Mr;(function(e){e.ScriptCommand="script-command",e.Extension="extension"})(Mr||(ae.DeeplinkType=Mr={}));function Qn(){return mr.environment.raycastVersion.includes("alpha")?"raycastinternal://":"raycast://"}function $u(){let e=JSON.parse(Hu.default.readFileSync(Gu.default.join(mr.environment.assetsPath,"..","package.json"),"utf8"));return e.owner||e.author}function Wn(e){let t=`${Qn()}script-commands/${e.command}`;if(e.arguments){let a="";for(let r of e.arguments)a+="&arguments="+encodeURIComponent(r);t+="?"+a.substring(1)}return t}ae.createScriptCommandDeeplink=Wn;function Kn(e){let t=$u(),a=mr.environment.extensionName;"ownerOrAuthorName"in e&&"extensionName"in e&&(t=e.ownerOrAuthorName,a=e.extensionName);let r=`${Qn()}extensions/${t}/${a}/${e.command}`,n="";return e.launchType&&(n+="&launchType="+encodeURIComponent(e.launchType)),e.arguments&&(n+="&arguments="+encodeURIComponent(JSON.stringify(e.arguments))),e.context&&(n+="&context="+encodeURIComponent(JSON.stringify(e.context))),e.fallbackText&&(n+="&fallbackText="+encodeURIComponent(e.fallbackText)),n&&(r+="?"+n.substring(1)),r}ae.createExtensionDeeplink=Kn;function Qu(e){return e.type===Mr.ScriptCommand?Wn(e):Kn(e)}ae.createDeeplink=Qu});var Jn=E(Aa=>{"use strict";Object.defineProperty(Aa,"__esModule",{value:!0});Aa.executeSQL=void 0;var Wu=or();function Ku(e,t){return(0,Wu.baseExecuteSQL)(e,t)}Aa.executeSQL=Ku});var Zn=E(It=>{"use strict";var Yu=It&&It.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(It,"__esModule",{value:!0});It.runAppleScript=void 0;var Ju=Yu(require("node:child_process")),Bt=ia();async function Zu(e,t,a){let{humanReadableOutput:r,language:n,timeout:o,...i}=Array.isArray(t)?a||{}:t||{},s=r!==!1?[]:["-ss"];n==="JavaScript"&&s.push("-l","JavaScript"),Array.isArray(t)&&s.push("-",...t);let u=Ju.default.spawn("osascript",s,{...i,env:{PATH:"/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"}}),p=(0,Bt.getSpawnedPromise)(u,{timeout:o??1e4});u.stdin.end(e);let[{error:c,exitCode:y,signal:g,timedOut:m},l,S]=await(0,Bt.getSpawnedResult)(u,{encoding:"utf8"},p),d=(0,Bt.handleOutput)({stripFinalNewline:!0},l),b=(0,Bt.handleOutput)({stripFinalNewline:!0},S);return(0,Bt.defaultParsing)({stdout:d,stderr:b,error:c,exitCode:y,signal:g,timedOut:m,command:"osascript",options:a,parentError:new Error})}It.runAppleScript=Zu});var Xn=E(Pa=>{"use strict";Object.defineProperty(Pa,"__esModule",{value:!0});Pa.withCache=void 0;var Xu=require("@raycast/api"),fa=_e();function ep(e,t){let a=new Xu.Cache({namespace:(0,fa.hash)(e)}),r=async(...n)=>{let o=(0,fa.hash)(n||[])+t?.internal_cacheKeySuffix,i=a.get(o);if(i){let{data:u,timestamp:p}=JSON.parse(i,fa.reviver);if(!(t?.maxAge&&Date.now()-p>t.maxAge)&&(!t?.validate||t.validate(u)))return u}let s=await e(...n);return a.set(o,JSON.stringify({data:s,timestamp:Date.now()},fa.replacer)),s};return r.clearCache=()=>{a.clear()},r}Pa.withCache=ep});var Lt=E(D=>{"use strict";var tp=D&&D.__createBinding||(Object.create?(function(e,t,a,r){r===void 0&&(r=a);var n=Object.getOwnPropertyDescriptor(t,a);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,n)}):(function(e,t,a,r){r===void 0&&(r=a),e[r]=t[a]})),T=D&&D.__exportStar||function(e,t){for(var a in e)a!=="default"&&!Object.prototype.hasOwnProperty.call(t,a)&&tp(t,e,a)};Object.defineProperty(D,"__esModule",{value:!0});T(tt(),D);T(Xt(),D);T(Et(),D);T(an(),D);T(un(),D);T(yn(),D);T(In(),D);T(Mn(),D);T(Rn(),D);T(Pn(),D);T(hn(),D);T(kn(),D);T(Gn(),D);T(Yn(),D);T(Jn(),D);T(Zn(),D);T(At(),D);T(Xn(),D)});var z={};Xe(z,{default:()=>xo.default});var xo,va=Fa(()=>{j(z,require("formdata-polyfill/esm.min.js"));xo=O(require("formdata-polyfill/esm.min.js"))});var K={};Xe(K,{default:()=>To.default});var To,hr=Fa(()=>{j(K,require("fetch-blob/from.js"));To=O(require("fetch-blob/from.js"))});var Oo={};Xe(Oo,{toFormData:()=>Ol});function wl(e){let t=e.match(/\bfilename=("(.*?)"|([^()<>@,;:\\"/[\]?={}\s\t]+))($|;\s)/i);if(!t)return;let a=t[2]||t[3]||"",r=a.slice(a.lastIndexOf("\\")+1);return r=r.replace(/%22/g,'"'),r=r.replace(/&#(\d{4});/g,(n,o)=>String.fromCharCode(o)),r}async function Ol(e,t){if(!/multipart/i.test(t))throw new TypeError("Failed to fetch");let a=t.match(/boundary=(?:"([^"]+)"|([^;]+))/i);if(!a)throw new TypeError("no or bad content-type header, no multipart boundary");let r=new Dr(a[1]||a[2]),n,o,i,s,u,p,c=[],y=new z.FormData,g=b=>{i+=d.decode(b,{stream:!0})},m=b=>{c.push(b)},l=()=>{let b=new K.File(c,p,{type:u});y.append(s,b)},S=()=>{y.append(s,i)},d=new TextDecoder("utf-8");d.decode(),r.onPartBegin=function(){r.onPartData=g,r.onPartEnd=S,n="",o="",i="",s="",u="",p=null,c.length=0},r.onHeaderField=function(b){n+=d.decode(b,{stream:!0})},r.onHeaderValue=function(b){o+=d.decode(b,{stream:!0})},r.onHeaderEnd=function(){if(o+=d.decode(),n=n.toLowerCase(),n==="content-disposition"){let b=o.match(/\bname=("([^"]*)"|([^()<>@,;:\\"/[\]?={}\s\t]+))/i);b&&(s=b[2]||b[3]||""),p=wl(o),p&&(r.onPartData=m,r.onPartEnd=l)}else n==="content-type"&&(u=o);o="",n=""};for await(let b of e)r.write(b);return r.end(),y}var me,h,wo,Ve,wa,Oa,xl,zt,Ul,_l,vl,Tl,Ye,Dr,Bo=Fa(()=>{hr();va();me=0,h={START_BOUNDARY:me++,HEADER_FIELD_START:me++,HEADER_FIELD:me++,HEADER_VALUE_START:me++,HEADER_VALUE:me++,HEADER_VALUE_ALMOST_DONE:me++,HEADERS_ALMOST_DONE:me++,PART_DATA_START:me++,PART_DATA:me++,END:me++},wo=1,Ve={PART_BOUNDARY:wo,LAST_BOUNDARY:wo*=2},wa=10,Oa=13,xl=32,zt=45,Ul=58,_l=97,vl=122,Tl=e=>e|32,Ye=()=>{},Dr=class{constructor(t){this.index=0,this.flags=0,this.onHeaderEnd=Ye,this.onHeaderField=Ye,this.onHeadersEnd=Ye,this.onHeaderValue=Ye,this.onPartBegin=Ye,this.onPartData=Ye,this.onPartEnd=Ye,this.boundaryChars={},t=`\r
--`+t;let a=new Uint8Array(t.length);for(let r=0;r<t.length;r++)a[r]=t.charCodeAt(r),this.boundaryChars[a[r]]=!0;this.boundary=a,this.lookbehind=new Uint8Array(this.boundary.length+8),this.state=h.START_BOUNDARY}write(t){let a=0,r=t.length,n=this.index,{lookbehind:o,boundary:i,boundaryChars:s,index:u,state:p,flags:c}=this,y=this.boundary.length,g=y-1,m=t.length,l,S,d=M=>{this[M+"Mark"]=a},b=M=>{delete this[M+"Mark"]},R=(M,P,A,x)=>{(P===void 0||P!==A)&&this[M](x&&x.subarray(P,A))},f=(M,P)=>{let A=M+"Mark";A in this&&(P?(R(M,this[A],a,t),delete this[A]):(R(M,this[A],t.length,t),this[A]=0))};for(a=0;a<r;a++)switch(l=t[a],p){case h.START_BOUNDARY:if(u===i.length-2){if(l===zt)c|=Ve.LAST_BOUNDARY;else if(l!==Oa)return;u++;break}else if(u-1===i.length-2){if(c&Ve.LAST_BOUNDARY&&l===zt)p=h.END,c=0;else if(!(c&Ve.LAST_BOUNDARY)&&l===wa)u=0,R("onPartBegin"),p=h.HEADER_FIELD_START;else return;break}l!==i[u+2]&&(u=-2),l===i[u+2]&&u++;break;case h.HEADER_FIELD_START:p=h.HEADER_FIELD,d("onHeaderField"),u=0;case h.HEADER_FIELD:if(l===Oa){b("onHeaderField"),p=h.HEADERS_ALMOST_DONE;break}if(u++,l===zt)break;if(l===Ul){if(u===1)return;f("onHeaderField",!0),p=h.HEADER_VALUE_START;break}if(S=Tl(l),S<_l||S>vl)return;break;case h.HEADER_VALUE_START:if(l===xl)break;d("onHeaderValue"),p=h.HEADER_VALUE;case h.HEADER_VALUE:l===Oa&&(f("onHeaderValue",!0),R("onHeaderEnd"),p=h.HEADER_VALUE_ALMOST_DONE);break;case h.HEADER_VALUE_ALMOST_DONE:if(l!==wa)return;p=h.HEADER_FIELD_START;break;case h.HEADERS_ALMOST_DONE:if(l!==wa)return;R("onHeadersEnd"),p=h.PART_DATA_START;break;case h.PART_DATA_START:p=h.PART_DATA,d("onPartData");case h.PART_DATA:if(n=u,u===0){for(a+=g;a<m&&!(t[a]in s);)a+=y;a-=g,l=t[a]}if(u<i.length)i[u]===l?(u===0&&f("onPartData",!0),u++):u=0;else if(u===i.length)u++,l===Oa?c|=Ve.PART_BOUNDARY:l===zt?c|=Ve.LAST_BOUNDARY:u=0;else if(u-1===i.length)if(c&Ve.PART_BOUNDARY){if(u=0,l===wa){c&=~Ve.PART_BOUNDARY,R("onPartEnd"),R("onPartBegin"),p=h.HEADER_FIELD_START;break}}else c&Ve.LAST_BOUNDARY&&l===zt?(R("onPartEnd"),p=h.END,c=0):u=0;if(u>0)o[u-1]=l;else if(n>0){let M=new Uint8Array(o.buffer,o.byteOffset,o.byteLength);R("onPartData",0,n,M),n=0,d("onPartData"),a--}break;case h.END:break;default:throw new Error(`Unexpected state entered: ${p}`)}f("onHeaderField"),f("onHeaderValue"),f("onPartData"),this.index=u,this.state=p,this.flags=c}end(){if(this.state===h.HEADER_FIELD_START&&this.index===0||this.state===h.PART_DATA&&this.index===this.boundary.length)this.onPartEnd();else if(this.state!==h.END)throw new Error("MultipartParser.end(): stream ended unexpectedly")}}});var Wl={};Xe(Wl,{default:()=>Ql});module.exports=Mi(Wl);var wr=require("@raycast/api"),li=O(Lt()),ci=require("react");var W=require("@raycast/api"),no=require("date-fns");var Ie=require("date-fns"),Rr=[{title:"Latest Activity",value:"sort:latest"},{title:"Date Created",value:"sort:date_created"},{title:"Top: Past Day",value:"sort:top created:>=1d"},{title:"Top: Past Week",value:"sort:top created:>=1w"},{title:"Top: Past Month",value:"sort:top created:>=1m"},{title:"Top: Past Year",value:"sort:top created:>=1y"},{title:"Top: All",value:"sort:top"}],eo=Rr[0].value,to=e=>{let t=new Date,a,r=e.match(/sort:top created:>=(\d+)([dwmy])/);if(!r)return e;let n=parseInt(r[1],10);switch(r[2]){case"d":a=(0,Ie.subDays)(t,n);break;case"w":a=(0,Ie.subWeeks)(t,n);break;case"m":a=(0,Ie.subMonths)(t,n);break;case"y":a=(0,Ie.subYears)(t,n);break;default:throw new Error("Unsupported time unit")}return`sort:top created:>=${(0,Ie.format)(a,"yyyy-MM-dd")}`};var qt=require("@raycast/api");function Ar(e){return e?{icon:{source:e.avatarUrl??qt.Icon.Person,mask:qt.Image.Mask.Circle},text:(e.name?e.name:e.login)??"-"}:{icon:qt.Icon.Person,text:"Unknown"}}var F=require("@raycast/api"),ge=require("react/jsx-runtime"),ro=({sortQuery:e,setSortQuery:t,data:a})=>t?(0,ge.jsxs)(F.ActionPanel.Submenu,{title:"Sort by",icon:F.Icon.ArrowUp,shortcut:F.Keyboard.Shortcut.Common.Duplicate,children:[a.filter(({value:r})=>!r.startsWith("sort:reaction")).map(({title:r,value:n})=>(0,ge.jsx)(ao,{title:r,value:n,sortQuery:e??"",setSortQuery:t},n||"relevance")),a.some(({value:r})=>r.startsWith("sort:reaction"))&&(0,ge.jsx)(F.ActionPanel.Section,{title:"Most Reactions",children:a.filter(({value:r})=>r.startsWith("sort:reaction")).map(({title:r,value:n})=>(0,ge.jsx)(ao,{title:r,value:n,sortQuery:e??"",setSortQuery:t},n))})]}):(0,ge.jsx)(ge.Fragment,{}),ao=({title:e,value:t,sortQuery:a,setSortQuery:r})=>(0,ge.jsx)(F.Action,{title:e,icon:a===t?{source:F.Icon.CheckCircle,tintColor:F.Color.Green}:F.Icon.Circle,onAction:()=>r(t)});var Qe=require("react/jsx-runtime");function ap(e){let t=e.category?.name?`Category: ${e.category?.name}`:"Unknown",a=e.category?.emojiHTML;if(!a)return{value:{source:e.repository?.owner?.avatarUrl},tooltip:t};let n=(()=>{let o=/fallback-src="(.*)"/,i=a.match(o);if(i)return i[1]})();return n&&{value:{source:n},tooltip:t}}function oo(e){let t=e.discussion,a=Ar(t.author);return(0,Qe.jsx)(W.List.Item,{icon:ap(t),title:t.title,subtitle:t.repository?.nameWithOwner,accessories:[{icon:t.answer?{source:W.Icon.Checkmark,tintColor:W.Color.Green}:void 0,tooltip:t.answer?"Answered":void 0},{icon:W.Icon.ArrowUp,text:`${t.upvoteCount}`,tooltip:`${t.upvoteCount} Upvotes`},{text:t.comments?`${t.comments.totalCount}`:void 0,icon:t.comments?W.Icon.SpeechBubble:void 0,tooltip:t.comments?`Comments: ${t.comments.totalCount}`:void 0},...t.publishedAt?[{date:new Date(t.publishedAt),tooltip:(0,no.format)(new Date(t.publishedAt),"EEEE d MMMM yyyy 'at' HH:mm")}]:[],{icon:a.icon,tooltip:a.text}],actions:(0,Qe.jsxs)(W.ActionPanel,{children:[(0,Qe.jsx)(W.Action.OpenInBrowser,{url:t.url}),(0,Qe.jsx)(W.ActionPanel.Section,{children:(0,Qe.jsx)(ro,{data:Rr,...e})})]})})}var So=require("@raycast/api"),dl=require("lodash");var I=O(require("graphql-tag")),Nt=I.default`
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
`,rp=I.default`
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
  ${Nt}
`,Me=I.default`
  fragment UserFields on User {
    id
    avatarUrl
    name
    login
    isViewer
  }
`,Vt=I.default`
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
  ${Me}
`,Ea=I.default`
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
  ${Vt}
  ${Nt}
  ${Me}
`,np=I.default`
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
  ${Vt}
  ${Nt}
  ${Me}
`,io=I.default`
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
`,so=I.default`
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
`,uo=I.default`
  fragment RepositoryMentionFields on Repository {
    nameWithOwner
    description
    isPrivate
    isArchived
    owner {
      avatarUrl(size: 64)
    }
  }
`,op=I.default`
  fragment ProjectViewerFields on ProjectV2View {
    id
    name
    number
  }
`,po=I.default`
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
  ${Vt}
  ${op}
`,lo=I.default`
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
  ${Nt}
  ${Vt}
  ${Me}
`,ip=I.default`
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
  ${Nt}
  ${Vt}
  ${Me}
`,sp=I.default`
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
`,co=I.default`
  fragment CommitFields on Commit {
    authoredDate
    oid
    message
  }
`,fr=I.default`
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
`,up=I.default`
  fragment ReleaseFields on Release {
    id
    description
    name
    publishedAt
    createdAt
    tagName
    url
  }
`,pp=I.default`
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
`,lp=I.default`
  mutation createRef($input: CreateRefInput!) {
    createRef(input: $input) {
      clientMutationId
      ref {
        id
        name
      }
    }
  }
`,cp=I.default`
  mutation deleteLinkedBranch($input: DeleteLinkedBranchInput!) {
    deleteLinkedBranch(input: $input) {
      clientMutationId
    }
  }
`,yp=I.default`
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
  ${rp}
`,dp=I.default`
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
`,Sp=I.default`
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
  ${Me}
`,bp=I.default`
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
`,Ip=I.default`
  query issueDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...IssueDetailFields
    }
  }
  ${np}
`,gp=I.default`
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
  ${Ea}
`,Mp=I.default`
  query issueByNumber($owner: String!, $name: String!, $issueNumber: Int!) {
    repository(owner: $owner, name: $name) {
      issue(number: $issueNumber) {
        ...IssueFields
      }
    }
  }
  ${Ea}
`,mp=I.default`
  mutation closeIssue($nodeId: ID!, $stateReason: IssueClosedStateReason!) {
    closeIssue(input: { issueId: $nodeId, stateReason: $stateReason }) {
      issue {
        id
      }
    }
  }
`,Rp=I.default`
  mutation reopenIssue($nodeId: ID!) {
    reopenIssue(input: { issueId: $nodeId }) {
      issue {
        id
      }
    }
  }
`,Ap=I.default`
  mutation changeIssueAssignees($issueId: ID!, $assigneeIds: [ID!]) {
    updateIssue(input: { id: $issueId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,fp=I.default`
  mutation changeIssueMilestone($issueId: ID!, $milestoneId: ID) {
    updateIssue(input: { id: $issueId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,Pp=I.default`
  mutation addIssueToProject($issueId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $issueId }) {
      clientMutationId
    }
  }
`,Ep=I.default`
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
  ${Ea}
`,Cp=I.default`
  query searchIssueMentions($query: String!, $numberOfItems: Int!) {
    search(query: $query, type: ISSUE, first: $numberOfItems) {
      nodes {
        ... on Issue {
          ...IssueMentionFields
        }
      }
    }
  }
  ${io}
`,hp=I.default`
  query searchPullRequestMentions($query: String!, $numberOfItems: Int!) {
    search(query: $query, type: ISSUE, first: $numberOfItems) {
      nodes {
        ... on PullRequest {
          ...PullRequestMentionFields
        }
      }
    }
  }
  ${so}
`,Dp=I.default`
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
  ${io}
  ${so}
`,xp=I.default`
  query searchRepositoryMentions($query: String!, $numberOfItems: Int!) {
    search(query: $query, type: REPOSITORY, first: $numberOfItems) {
      nodes {
        ... on Repository {
          ...RepositoryMentionFields
        }
      }
    }
  }
  ${uo}
`,Up=I.default`
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
  ${uo}
`,_p=I.default`
  mutation changeProjectStatus($projectId: ID!, $closed: Boolean!) {
    updateProjectV2(input: { projectId: $projectId, closed: $closed }) {
      clientMutationId
    }
  }
`,vp=I.default`
  query projectDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...ProjectFields
    }
  }
  ${po}
`,Tp=I.default`
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
  ${lo}
`,wp=I.default`
  query pullRequestDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...PullRequestDetailsFields
    }
  }
  ${ip}
`,Op=I.default`
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
  ${Me}
`,Bp=I.default`
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
`,Lp=I.default`
  query pullRequestCommits($nodeId: ID!, $numberOfItems: Int!, $before: String) {
    node(id: $nodeId) {
      ...PullRequestCommitFields
    }
  }
  ${sp}
`,qp=I.default`
  mutation closePullRequest($nodeId: ID!) {
    closePullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Np=I.default`
  mutation reopenPullRequest($nodeId: ID!) {
    reopenPullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Vp=I.default`
  mutation markPullRequestReadyForReview($nodeId: ID!) {
    markPullRequestReadyForReview(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,kp=I.default`
  mutation addPullRequestReview($nodeId: ID!, $event: PullRequestReviewEvent, $body: String) {
    addPullRequestReview(input: { pullRequestId: $nodeId, event: $event, body: $body }) {
      pullRequestReview {
        id
      }
    }
  }
`,jp=I.default`
  mutation changePullRequestAssignees($pullRequestId: ID!, $assigneeIds: [ID!]) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,Fp=I.default`
  mutation changePullRequestMilestone($pullRequestId: ID!, $milestoneId: ID) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,zp=I.default`
  mutation addPullRequestToProject($pullRequestId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $pullRequestId }) {
      clientMutationId
    }
  }
`,Hp=I.default`
  mutation requestReview($pullRequestId: ID!, $collaboratorId: ID!) {
    requestReviews(input: { pullRequestId: $pullRequestId, userIds: [$collaboratorId], union: true }) {
      clientMutationId
    }
  }
`,Gp=I.default`
  mutation mergePullRequest($nodeId: ID!, $method: PullRequestMergeMethod!) {
    mergePullRequest(input: { pullRequestId: $nodeId, mergeMethod: $method }) {
      pullRequest {
        nodeId: id
      }
    }
  }
`,$p=I.default`
  mutation addPullRequestToMergeQueue($nodeId: ID!) {
    enqueuePullRequest(input: { pullRequestId: $nodeId }) {
      __typename
    }
  }
`,Qp=I.default`
  mutation removePullRequestFromMergeQueue($nodeId: ID!) {
    dequeuePullRequest(input: { id: $nodeId }) {
      __typename
    }
  }
`,Wp=I.default`
  mutation enablePullRequestAutoMerge($nodeId: ID!, $mergeMethod: PullRequestMergeMethod) {
    enablePullRequestAutoMerge(input: { pullRequestId: $nodeId, mergeMethod: $mergeMethod }) {
      pullRequest {
        id
      }
    }
  }
`,Kp=I.default`
  mutation disablePullRequestAutoMerge($nodeId: ID!) {
    disablePullRequestAutoMerge(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Yp=I.default`
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
`,Jp=I.default`
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
  ${lo}
`,Zp=I.default`
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
  ${fr}
`,Xp=I.default`
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
  ${fr}
`,el=I.default`
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
`,tl=I.default`
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
`,al=I.default`
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
  ${co}
  ${Me}
`,rl=I.default`
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
  ${co}
`,nl=I.default`
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
  ${Ea}
`,ol=I.default`
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
  ${up}
`,il=I.default`
  mutation addStar($repositoryId: ID!) {
    addStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,sl=I.default`
  mutation removeStar($repositoryId: ID!) {
    removeStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,ul=I.default`
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
  ${fr}
`,pl=I.default`
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
  ${Me}
  ${po}
`,ll=I.default`
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
  ${Me}
`,cl=I.default`
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
`,yl=(e,t,a,r)=>e();function yo(e,t=yl){return{createLinkedBranch(a,r,n){return t(o=>e.request({document:pp,variables:a,requestHeaders:{...r,...o},signal:n}),"createLinkedBranch","mutation",a)},createRef(a,r,n){return t(o=>e.request({document:lp,variables:a,requestHeaders:{...r,...o},signal:n}),"createRef","mutation",a)},deleteLinkedBranch(a,r,n){return t(o=>e.request({document:cp,variables:a,requestHeaders:{...r,...o},signal:n}),"deleteLinkedBranch","mutation",a)},searchDiscussions(a,r,n){return t(o=>e.request({document:yp,variables:a,requestHeaders:{...r,...o},signal:n}),"searchDiscussions","query",a)},getGitHubDiscussionNumber(a,r,n){return t(o=>e.request({document:dp,variables:a,requestHeaders:{...r,...o},signal:n}),"getGitHubDiscussionNumber","query",a)},repositoryCollaboratorsForIssues(a,r,n){return t(o=>e.request({document:Sp,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryCollaboratorsForIssues","query",a)},repositoryProjectsForIssues(a,r,n){return t(o=>e.request({document:bp,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryProjectsForIssues","query",a)},issueDetails(a,r,n){return t(o=>e.request({document:Ip,variables:a,requestHeaders:{...r,...o},signal:n}),"issueDetails","query",a)},searchIssues(a,r,n){return t(o=>e.request({document:gp,variables:a,requestHeaders:{...r,...o},signal:n}),"searchIssues","query",a)},issueByNumber(a,r,n){return t(o=>e.request({document:Mp,variables:a,requestHeaders:{...r,...o},signal:n}),"issueByNumber","query",a)},closeIssue(a,r,n){return t(o=>e.request({document:mp,variables:a,requestHeaders:{...r,...o},signal:n}),"closeIssue","mutation",a)},reopenIssue(a,r,n){return t(o=>e.request({document:Rp,variables:a,requestHeaders:{...r,...o},signal:n}),"reopenIssue","mutation",a)},changeIssueAssignees(a,r,n){return t(o=>e.request({document:Ap,variables:a,requestHeaders:{...r,...o},signal:n}),"changeIssueAssignees","mutation",a)},changeIssueMilestone(a,r,n){return t(o=>e.request({document:fp,variables:a,requestHeaders:{...r,...o},signal:n}),"changeIssueMilestone","mutation",a)},addIssueToProject(a,r,n){return t(o=>e.request({document:Pp,variables:a,requestHeaders:{...r,...o},signal:n}),"addIssueToProject","mutation",a)},createIssue(a,r,n){return t(o=>e.request({document:Ep,variables:a,requestHeaders:{...r,...o},signal:n}),"createIssue","mutation",a)},searchIssueMentions(a,r,n){return t(o=>e.request({document:Cp,variables:a,requestHeaders:{...r,...o},signal:n}),"searchIssueMentions","query",a)},searchPullRequestMentions(a,r,n){return t(o=>e.request({document:hp,variables:a,requestHeaders:{...r,...o},signal:n}),"searchPullRequestMentions","query",a)},issueOrPullRequestMention(a,r,n){return t(o=>e.request({document:Dp,variables:a,requestHeaders:{...r,...o},signal:n}),"issueOrPullRequestMention","query",a)},searchRepositoryMentions(a,r,n){return t(o=>e.request({document:xp,variables:a,requestHeaders:{...r,...o},signal:n}),"searchRepositoryMentions","query",a)},viewerRepositoryMentions(a,r,n){return t(o=>e.request({document:Up,variables:a,requestHeaders:{...r,...o},signal:n}),"viewerRepositoryMentions","query",a)},changeProjectStatus(a,r,n){return t(o=>e.request({document:_p,variables:a,requestHeaders:{...r,...o},signal:n}),"changeProjectStatus","mutation",a)},projectDetails(a,r,n){return t(o=>e.request({document:vp,variables:a,requestHeaders:{...r,...o},signal:n}),"projectDetails","query",a)},searchPullRequests(a,r,n){return t(o=>e.request({document:Tp,variables:a,requestHeaders:{...r,...o},signal:n}),"searchPullRequests","query",a)},pullRequestDetails(a,r,n){return t(o=>e.request({document:wp,variables:a,requestHeaders:{...r,...o},signal:n}),"pullRequestDetails","query",a)},repositoryCollaboratorsForPullRequests(a,r,n){return t(o=>e.request({document:Op,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryCollaboratorsForPullRequests","query",a)},repositoryProjectsForPullRequests(a,r,n){return t(o=>e.request({document:Bp,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryProjectsForPullRequests","query",a)},pullRequestCommits(a,r,n){return t(o=>e.request({document:Lp,variables:a,requestHeaders:{...r,...o},signal:n}),"pullRequestCommits","query",a)},closePullRequest(a,r,n){return t(o=>e.request({document:qp,variables:a,requestHeaders:{...r,...o},signal:n}),"closePullRequest","mutation",a)},reopenPullRequest(a,r,n){return t(o=>e.request({document:Np,variables:a,requestHeaders:{...r,...o},signal:n}),"reopenPullRequest","mutation",a)},markPullRequestReadyForReview(a,r,n){return t(o=>e.request({document:Vp,variables:a,requestHeaders:{...r,...o},signal:n}),"markPullRequestReadyForReview","mutation",a)},addPullRequestReview(a,r,n){return t(o=>e.request({document:kp,variables:a,requestHeaders:{...r,...o},signal:n}),"addPullRequestReview","mutation",a)},changePullRequestAssignees(a,r,n){return t(o=>e.request({document:jp,variables:a,requestHeaders:{...r,...o},signal:n}),"changePullRequestAssignees","mutation",a)},changePullRequestMilestone(a,r,n){return t(o=>e.request({document:Fp,variables:a,requestHeaders:{...r,...o},signal:n}),"changePullRequestMilestone","mutation",a)},addPullRequestToProject(a,r,n){return t(o=>e.request({document:zp,variables:a,requestHeaders:{...r,...o},signal:n}),"addPullRequestToProject","mutation",a)},requestReview(a,r,n){return t(o=>e.request({document:Hp,variables:a,requestHeaders:{...r,...o},signal:n}),"requestReview","mutation",a)},mergePullRequest(a,r,n){return t(o=>e.request({document:Gp,variables:a,requestHeaders:{...r,...o},signal:n}),"mergePullRequest","mutation",a)},addPullRequestToMergeQueue(a,r,n){return t(o=>e.request({document:$p,variables:a,requestHeaders:{...r,...o},signal:n}),"addPullRequestToMergeQueue","mutation",a)},removePullRequestFromMergeQueue(a,r,n){return t(o=>e.request({document:Qp,variables:a,requestHeaders:{...r,...o},signal:n}),"removePullRequestFromMergeQueue","mutation",a)},enablePullRequestAutoMerge(a,r,n){return t(o=>e.request({document:Wp,variables:a,requestHeaders:{...r,...o},signal:n}),"enablePullRequestAutoMerge","mutation",a)},disablePullRequestAutoMerge(a,r,n){return t(o=>e.request({document:Kp,variables:a,requestHeaders:{...r,...o},signal:n}),"disablePullRequestAutoMerge","mutation",a)},createPullRequest(a,r,n){return t(o=>e.request({document:Yp,variables:a,requestHeaders:{...r,...o},signal:n}),"createPullRequest","mutation",a)},initPullRequest(a,r,n){return t(o=>e.request({document:Jp,variables:a,requestHeaders:{...r,...o},signal:n}),"initPullRequest","mutation",a)},searchRepositories(a,r,n){return t(o=>e.request({document:Zp,variables:a,requestHeaders:{...r,...o},signal:n}),"searchRepositories","query",a)},myLatestRepositories(a,r,n){return t(o=>e.request({document:Xp,variables:a,requestHeaders:{...r,...o},signal:n}),"myLatestRepositories","query",a)},milestonesForRepository(a,r,n){return t(o=>e.request({document:el,variables:a,requestHeaders:{...r,...o},signal:n}),"milestonesForRepository","query",a)},commentsForPullRequest(a,r,n){return t(o=>e.request({document:tl,variables:a,requestHeaders:{...r,...o},signal:n}),"commentsForPullRequest","query",a)},dataForRepository(a,r,n){return t(o=>e.request({document:al,variables:a,requestHeaders:{...r,...o},signal:n}),"dataForRepository","query",a)},searchRepositoryBranches(a,r,n){return t(o=>e.request({document:rl,variables:a,requestHeaders:{...r,...o},signal:n}),"searchRepositoryBranches","query",a)},repositoryIssues(a,r,n){return t(o=>e.request({document:nl,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryIssues","query",a)},repositoryReleases(a,r,n){return t(o=>e.request({document:ol,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryReleases","query",a)},addStar(a,r,n){return t(o=>e.request({document:il,variables:a,requestHeaders:{...r,...o},signal:n}),"addStar","mutation",a)},removeStar(a,r,n){return t(o=>e.request({document:sl,variables:a,requestHeaders:{...r,...o},signal:n}),"removeStar","mutation",a)},myStarredRepositories(a,r,n){return t(o=>e.request({document:ul,variables:a,requestHeaders:{...r,...o},signal:n}),"myStarredRepositories","query",a)},getViewer(a,r,n){return t(o=>e.request({document:pl,variables:a,requestHeaders:{...r,...o},signal:n}),"getViewer","query",a)},getViewerStats(a,r,n){return t(o=>e.request({document:ll,variables:a,requestHeaders:{...r,...o},signal:n}),"getViewerStats","query",a)},getViewerStatsDetails(a,r,n){return t(o=>e.request({document:cl,variables:a,requestHeaders:{...r,...o},signal:n}),"getViewerStatsDetails","query",a)}}}function bo(e){return[...new Map(e.map(t=>[t.id,t])).values()]}function Io(e){return e?.filter(t=>typeof t=="object"&&t!==null&&"id"in t)??[]}var ni=O(Lt());var Zo=require("@octokit/rest"),Xo=require("@raycast/api"),ei=O(Lt());var Ca=JSON;var go=e=>e.toUpperCase(),Mo=e=>{let t={};return e.forEach((a,r)=>{t[r]=a}),t};var mo=(e,t,a)=>e.document?e:{document:e,variables:t,requestHeaders:a,signal:void 0},Ro=(e,t,a)=>e.query?e:{query:e,variables:t,requestHeaders:a,signal:void 0},Ao=(e,t)=>e.documents?e:{documents:e,requestHeaders:t,signal:void 0};var ha=require("graphql"),fo=e=>{let t,a=e.definitions.filter(r=>r.kind==="OperationDefinition");return a.length===1&&(t=a[0]?.name?.value),t},We=e=>{if(typeof e=="string"){let a;try{let r=(0,ha.parse)(e);a=fo(r)}catch{}return{query:e,operationName:a}}let t=fo(e);return{query:(0,ha.print)(e),operationName:t}};var Ke=class e extends Error{constructor(t,a){let r=`${e.extractMessage(t)}: ${JSON.stringify({response:t,request:a})}`;super(r),Object.setPrototypeOf(this,e.prototype),this.response=t,this.request=a,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,e)}static extractMessage(t){return t.errors?.[0]?.message??`GraphQL Error (Code: ${t.status})`}};var Ne=O(_t(),1);var Sl="connection_init",bl="connection_ack",Eo="ping",Co="pong",Il="subscribe",gl="next",Ml="error",ho="complete",qe=class e{get type(){return this._type}get id(){return this._id}get payload(){return this._payload}constructor(t,a,r){this._type=t,this._payload=a,this._id=r}get text(){let t={type:this.type};return this.id!=null&&this.id!=null&&(t.id=this.id),this.payload!=null&&this.payload!=null&&(t.payload=this.payload),JSON.stringify(t)}static parse(t,a){let{type:r,payload:n,id:o}=JSON.parse(t);return new e(r,a(n),o)}},Da=class{constructor(t,{onInit:a,onAcknowledged:r,onPing:n,onPong:o}){this.socketState={acknowledged:!1,lastRequestId:0,subscriptions:{}},this.socket=t,t.addEventListener("open",async i=>{this.socketState.acknowledged=!1,this.socketState.subscriptions={},t.send(Rl(a?await a():null).text)}),t.addEventListener("close",i=>{this.socketState.acknowledged=!1,this.socketState.subscriptions={}}),t.addEventListener("error",i=>{console.error(i)}),t.addEventListener("message",i=>{try{let s=ml(i.data);switch(s.type){case bl:{this.socketState.acknowledged?console.warn("Duplicate CONNECTION_ACK message ignored"):(this.socketState.acknowledged=!0,r&&r(s.payload));return}case Eo:{n?n(s.payload).then(y=>t.send(Po(y).text)):t.send(Po(null).text);return}case Co:{o&&o(s.payload);return}}if(!this.socketState.acknowledged||s.id===void 0||s.id===null||!this.socketState.subscriptions[s.id])return;let{query:u,variables:p,subscriber:c}=this.socketState.subscriptions[s.id];switch(s.type){case gl:{!s.payload.errors&&s.payload.data&&c.next&&c.next(s.payload.data),s.payload.errors&&c.error&&c.error(new Ke({...s.payload,status:200},{query:u,variables:p}));return}case Ml:{c.error&&c.error(new Ke({errors:s.payload,status:200},{query:u,variables:p}));return}case ho:{c.complete&&c.complete(),delete this.socketState.subscriptions[s.id];return}}}catch(s){console.error(s),t.close(1006)}t.close(4400,"Unknown graphql-ws message.")})}makeSubscribe(t,a,r,n){let o=(this.socketState.lastRequestId++).toString();return this.socketState.subscriptions[o]={query:t,variables:n,subscriber:r},this.socket.send(fl(o,{query:t,operationName:a,variables:n}).text),()=>{this.socket.send(Pl(o).text),delete this.socketState.subscriptions[o]}}rawRequest(t,a){return new Promise((r,n)=>{let o;this.rawSubscribe(t,{next:(i,s)=>o={data:i,extensions:s},error:n,complete:()=>r(o)},a)})}request(t,a){return new Promise((r,n)=>{let o;this.subscribe(t,{next:i=>o=i,error:n,complete:()=>r(o)},a)})}subscribe(t,a,r){let{query:n,operationName:o}=We(t);return this.makeSubscribe(n,o,a,r)}rawSubscribe(t,a,r){return this.makeSubscribe(t,void 0,a,r)}ping(t){this.socket.send(Al(t).text)}close(){this.socket.close(1e3)}};Da.PROTOCOL="graphql-transport-ws";function ml(e,t=a=>a){return qe.parse(e,t)}function Rl(e){return new qe(Sl,e)}function Al(e){return new qe(Eo,e,void 0)}function Po(e){return new qe(Co,e,void 0)}function fl(e,t){return new qe(Il,t,e)}function Pl(e){return new qe(ho,void 0,e)}var gt=e=>{let t={};return e&&(typeof Headers<"u"&&e instanceof Headers||Ne&&Ne.Headers&&e instanceof Ne.Headers?t=Mo(e):Array.isArray(e)?e.forEach(([a,r])=>{a&&r!==void 0&&(t[a]=r)}):t=e),t},Do=e=>e.replace(/([\s,]|#[^\n\r]+)+/g," ").trim(),El=e=>{if(!Array.isArray(e.query)){let r=e,n=[`query=${encodeURIComponent(Do(r.query))}`];return e.variables&&n.push(`variables=${encodeURIComponent(r.jsonSerializer.stringify(r.variables))}`),r.operationName&&n.push(`operationName=${encodeURIComponent(r.operationName)}`),n.join("&")}if(typeof e.variables<"u"&&!Array.isArray(e.variables))throw new Error("Cannot create query with given variable type, array expected");let t=e,a=e.query.reduce((r,n,o)=>(r.push({query:Do(n),variables:t.variables?t.jsonSerializer.stringify(t.variables[o]):void 0}),r),[]);return`query=${encodeURIComponent(t.jsonSerializer.stringify(a))}`},Cl=e=>async t=>{let{url:a,query:r,variables:n,operationName:o,fetch:i,fetchOptions:s,middleware:u}=t,p={...t.headers},c="",y;e==="POST"?(y=hl(r,n,o,s.jsonSerializer),typeof y=="string"&&(p["Content-Type"]="application/json")):c=El({query:r,variables:n,operationName:o,jsonSerializer:s.jsonSerializer??Ca});let g={method:e,headers:p,body:y,...s},m=a,l=g;if(u){let S=await Promise.resolve(u({...g,url:a,operationName:o,variables:n})),{url:d,...b}=S;m=d,l=b}return c&&(m=`${m}?${c}`),await i(m,l)},xa=class{constructor(t,a={}){this.url=t,this.requestConfig=a,this.rawRequest=async(...r)=>{let[n,o,i]=r,s=Ro(n,o,i),{headers:u,fetch:p=Ne.default,method:c="POST",requestMiddleware:y,responseMiddleware:g,...m}=this.requestConfig,{url:l}=this;s.signal!==void 0&&(m.signal=s.signal);let{operationName:S}=We(s.query);return Pr({url:l,query:s.query,variables:s.variables,headers:{...gt(Er(u)),...gt(s.requestHeaders)},operationName:S,fetch:p,method:c,fetchOptions:m,middleware:y}).then(d=>(g&&g(d),d)).catch(d=>{throw g&&g(d),d})}}async request(t,...a){let[r,n]=a,o=mo(t,r,n),{headers:i,fetch:s=Ne.default,method:u="POST",requestMiddleware:p,responseMiddleware:c,...y}=this.requestConfig,{url:g}=this;o.signal!==void 0&&(y.signal=o.signal);let{query:m,operationName:l}=We(o.document);return Pr({url:g,query:m,variables:o.variables,headers:{...gt(Er(i)),...gt(o.requestHeaders)},operationName:l,fetch:s,method:u,fetchOptions:y,middleware:p}).then(S=>(c&&c(S),S.data)).catch(S=>{throw c&&c(S),S})}batchRequests(t,a){let r=Ao(t,a),{headers:n,...o}=this.requestConfig;r.signal!==void 0&&(o.signal=r.signal);let i=r.documents.map(({document:u})=>We(u).query),s=r.documents.map(({variables:u})=>u);return Pr({url:this.url,query:i,variables:s,headers:{...gt(Er(n)),...gt(r.requestHeaders)},operationName:void 0,fetch:this.requestConfig.fetch??Ne.default,method:this.requestConfig.method||"POST",fetchOptions:o,middleware:this.requestConfig.requestMiddleware}).then(u=>(this.requestConfig.responseMiddleware&&this.requestConfig.responseMiddleware(u),u.data)).catch(u=>{throw this.requestConfig.responseMiddleware&&this.requestConfig.responseMiddleware(u),u})}setHeaders(t){return this.requestConfig.headers=t,this}setHeader(t,a){let{headers:r}=this.requestConfig;return r?r[t]=a:this.requestConfig.headers={[t]:a},this}setEndpoint(t){return this.url=t,this}},Pr=async e=>{let{query:t,variables:a,fetchOptions:r}=e,n=Cl(go(e.method??"post")),o=Array.isArray(e.query),i=await n(e),s=await Dl(i,r.jsonSerializer??Ca),u=Array.isArray(s)?!s.some(({data:c})=>!c):!!s.data,p=Array.isArray(s)||!s.errors||Array.isArray(s.errors)&&!s.errors.length||r.errorPolicy==="all"||r.errorPolicy==="ignore";if(i.ok&&p&&u){let{errors:c,...y}=(Array.isArray(s),s),g=r.errorPolicy==="ignore"?y:s;return{...o?{data:g}:g,headers:i.headers,status:i.status}}else{let c=typeof s=="string"?{error:s}:s;throw new Ke({...c,status:i.status,headers:i.headers},{query:t,variables:a})}};var hl=(e,t,a,r)=>{let n=r??Ca;if(!Array.isArray(e))return n.stringify({query:e,variables:t,operationName:a});if(typeof t<"u"&&!Array.isArray(t))throw new Error("Cannot create request body with given variable type, array expected");let o=e.reduce((i,s,u)=>(i.push({query:s,variables:t?t[u]:void 0}),i),[]);return n.stringify(o)},Dl=async(e,t)=>{let a;return e.headers.forEach((r,n)=>{n.toLowerCase()==="content-type"&&(a=r)}),a&&(a.toLowerCase().startsWith("application/json")||a.toLowerCase().startsWith("application/graphql+json")||a.toLowerCase().startsWith("application/graphql-response+json"))?t.parse(await e.text()):e.text()},Er=e=>typeof e=="function"?e():e;var Yo=O(require("node:http"),1),Jo=O(require("node:https"),1),Ze=O(require("node:zlib"),1),Z=O(require("node:stream"),1),$t=require("node:buffer");var kt={};Xe(kt,{default:()=>Ua.default});j(kt,require("data-uri-to-buffer"));var Ua=O(require("data-uri-to-buffer"));var re=O(require("node:stream"),1),xe=require("node:util"),Y=require("node:buffer");var jt={};Xe(jt,{default:()=>_a.default});j(jt,require("fetch-blob"));var _a=O(require("fetch-blob"));va();var De=class extends Error{constructor(t,a){super(t),Error.captureStackTrace(this,this.constructor),this.type=a}get name(){return this.constructor.name}get[Symbol.toStringTag](){return this.constructor.name}};var H=class extends De{constructor(t,a,r){super(t,a),r&&(this.code=this.errno=r.code,this.erroredSysCall=r.syscall)}};var Ta=Symbol.toStringTag,Cr=e=>typeof e=="object"&&typeof e.append=="function"&&typeof e.delete=="function"&&typeof e.get=="function"&&typeof e.getAll=="function"&&typeof e.has=="function"&&typeof e.set=="function"&&typeof e.sort=="function"&&e[Ta]==="URLSearchParams",Ft=e=>e&&typeof e=="object"&&typeof e.arrayBuffer=="function"&&typeof e.type=="string"&&typeof e.stream=="function"&&typeof e.constructor=="function"&&/^(Blob|File)$/.test(e[Ta]),Uo=e=>typeof e=="object"&&(e[Ta]==="AbortSignal"||e[Ta]==="EventTarget"),_o=(e,t)=>{let a=new URL(t).hostname,r=new URL(e).hostname;return a===r||a.endsWith(`.${r}`)},vo=(e,t)=>{let a=new URL(t).protocol,r=new URL(e).protocol;return a===r};var Bl=(0,xe.promisify)(re.default.pipeline),G=Symbol("Body internals"),Re=class{constructor(t,{size:a=0}={}){let r=null;t===null?t=null:Cr(t)?t=Y.Buffer.from(t.toString()):Ft(t)||Y.Buffer.isBuffer(t)||(xe.types.isAnyArrayBuffer(t)?t=Y.Buffer.from(t):ArrayBuffer.isView(t)?t=Y.Buffer.from(t.buffer,t.byteOffset,t.byteLength):t instanceof re.default||(t instanceof z.FormData?(t=(0,z.formDataToBlob)(t),r=t.type.split("=")[1]):t=Y.Buffer.from(String(t))));let n=t;Y.Buffer.isBuffer(t)?n=re.default.Readable.from(t):Ft(t)&&(n=re.default.Readable.from(t.stream())),this[G]={body:t,stream:n,boundary:r,disturbed:!1,error:null},this.size=a,t instanceof re.default&&t.on("error",o=>{let i=o instanceof De?o:new H(`Invalid response body while trying to fetch ${this.url}: ${o.message}`,"system",o);this[G].error=i})}get body(){return this[G].stream}get bodyUsed(){return this[G].disturbed}async arrayBuffer(){let{buffer:t,byteOffset:a,byteLength:r}=await xr(this);return t.slice(a,a+r)}async formData(){let t=this.headers.get("content-type");if(t.startsWith("application/x-www-form-urlencoded")){let r=new z.FormData,n=new URLSearchParams(await this.text());for(let[o,i]of n)r.append(o,i);return r}let{toFormData:a}=await Promise.resolve().then(()=>(Bo(),Oo));return a(this.body,t)}async blob(){let t=this.headers&&this.headers.get("content-type")||this[G].body&&this[G].body.type||"",a=await this.arrayBuffer();return new _a.default([a],{type:t})}async json(){let t=await this.text();return JSON.parse(t)}async text(){let t=await xr(this);return new TextDecoder().decode(t)}buffer(){return xr(this)}};Re.prototype.buffer=(0,xe.deprecate)(Re.prototype.buffer,"Please use 'response.arrayBuffer()' instead of 'response.buffer()'","node-fetch#buffer");Object.defineProperties(Re.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0},data:{get:(0,xe.deprecate)(()=>{},"data doesn't exist, use json(), text(), arrayBuffer(), or body instead","https://github.com/node-fetch/node-fetch/issues/1000 (response)")}});async function xr(e){if(e[G].disturbed)throw new TypeError(`body used already for: ${e.url}`);if(e[G].disturbed=!0,e[G].error)throw e[G].error;let{body:t}=e;if(t===null)return Y.Buffer.alloc(0);if(!(t instanceof re.default))return Y.Buffer.alloc(0);let a=[],r=0;try{for await(let n of t){if(e.size>0&&r+n.length>e.size){let o=new H(`content size at ${e.url} over limit: ${e.size}`,"max-size");throw t.destroy(o),o}r+=n.length,a.push(n)}}catch(n){throw n instanceof De?n:new H(`Invalid response body while trying to fetch ${e.url}: ${n.message}`,"system",n)}if(t.readableEnded===!0||t._readableState.ended===!0)try{return a.every(n=>typeof n=="string")?Y.Buffer.from(a.join("")):Y.Buffer.concat(a,r)}catch(n){throw new H(`Could not create Buffer from response body for ${e.url}: ${n.message}`,"system",n)}else throw new H(`Premature close of server response while trying to fetch ${e.url}`)}var Mt=(e,t)=>{let a,r,{body:n}=e[G];if(e.bodyUsed)throw new Error("cannot clone body after it is used");return n instanceof re.default&&typeof n.getBoundary!="function"&&(a=new re.PassThrough({highWaterMark:t}),r=new re.PassThrough({highWaterMark:t}),n.pipe(a),n.pipe(r),e[G].stream=a,n=r),n},Ll=(0,xe.deprecate)(e=>e.getBoundary(),"form-data doesn't follow the spec and requires special treatment. Use alternative package","https://github.com/node-fetch/node-fetch/issues/1167"),Ba=(e,t)=>e===null?null:typeof e=="string"?"text/plain;charset=UTF-8":Cr(e)?"application/x-www-form-urlencoded;charset=UTF-8":Ft(e)?e.type||null:Y.Buffer.isBuffer(e)||xe.types.isAnyArrayBuffer(e)||ArrayBuffer.isView(e)?null:e instanceof z.FormData?`multipart/form-data; boundary=${t[G].boundary}`:e&&typeof e.getBoundary=="function"?`multipart/form-data;boundary=${Ll(e)}`:e instanceof re.default?null:"text/plain;charset=UTF-8",Lo=e=>{let{body:t}=e[G];return t===null?0:Ft(t)?t.size:Y.Buffer.isBuffer(t)?t.length:t&&typeof t.getLengthSync=="function"&&t.hasKnownLength&&t.hasKnownLength()?t.getLengthSync():null},qo=async(e,{body:t})=>{t===null?e.end():await Bl(t,e)};var Ur=require("node:util"),Ht=O(require("node:http"),1),La=typeof Ht.default.validateHeaderName=="function"?Ht.default.validateHeaderName:e=>{if(!/^[\^`\-\w!#$%&'*+.|~]+$/.test(e)){let t=new TypeError(`Header name must be a valid HTTP token [${e}]`);throw Object.defineProperty(t,"code",{value:"ERR_INVALID_HTTP_TOKEN"}),t}},_r=typeof Ht.default.validateHeaderValue=="function"?Ht.default.validateHeaderValue:(e,t)=>{if(/[^\t\u0020-\u007E\u0080-\u00FF]/.test(t)){let a=new TypeError(`Invalid character in header content ["${e}"]`);throw Object.defineProperty(a,"code",{value:"ERR_INVALID_CHAR"}),a}},J=class e extends URLSearchParams{constructor(t){let a=[];if(t instanceof e){let r=t.raw();for(let[n,o]of Object.entries(r))a.push(...o.map(i=>[n,i]))}else if(t!=null)if(typeof t=="object"&&!Ur.types.isBoxedPrimitive(t)){let r=t[Symbol.iterator];if(r==null)a.push(...Object.entries(t));else{if(typeof r!="function")throw new TypeError("Header pairs must be iterable");a=[...t].map(n=>{if(typeof n!="object"||Ur.types.isBoxedPrimitive(n))throw new TypeError("Each header pair must be an iterable object");return[...n]}).map(n=>{if(n.length!==2)throw new TypeError("Each header pair must be a name/value tuple");return[...n]})}}else throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");return a=a.length>0?a.map(([r,n])=>(La(r),_r(r,String(n)),[String(r).toLowerCase(),String(n)])):void 0,super(a),new Proxy(this,{get(r,n,o){switch(n){case"append":case"set":return(i,s)=>(La(i),_r(i,String(s)),URLSearchParams.prototype[n].call(r,String(i).toLowerCase(),String(s)));case"delete":case"has":case"getAll":return i=>(La(i),URLSearchParams.prototype[n].call(r,String(i).toLowerCase()));case"keys":return()=>(r.sort(),new Set(URLSearchParams.prototype.keys.call(r)).keys());default:return Reflect.get(r,n,o)}}})}get[Symbol.toStringTag](){return this.constructor.name}toString(){return Object.prototype.toString.call(this)}get(t){let a=this.getAll(t);if(a.length===0)return null;let r=a.join(", ");return/^content-encoding$/i.test(t)&&(r=r.toLowerCase()),r}forEach(t,a=void 0){for(let r of this.keys())Reflect.apply(t,a,[this.get(r),r,this])}*values(){for(let t of this.keys())yield this.get(t)}*entries(){for(let t of this.keys())yield[t,this.get(t)]}[Symbol.iterator](){return this.entries()}raw(){return[...this.keys()].reduce((t,a)=>(t[a]=this.getAll(a),t),{})}[Symbol.for("nodejs.util.inspect.custom")](){return[...this.keys()].reduce((t,a)=>{let r=this.getAll(a);return a==="host"?t[a]=r[0]:t[a]=r.length>1?r:r[0],t},{})}};Object.defineProperties(J.prototype,["get","entries","forEach","values"].reduce((e,t)=>(e[t]={enumerable:!0},e),{}));function No(e=[]){return new J(e.reduce((t,a,r,n)=>(r%2===0&&t.push(n.slice(r,r+2)),t),[]).filter(([t,a])=>{try{return La(t),_r(t,String(a)),!0}catch{return!1}}))}var ql=new Set([301,302,303,307,308]),qa=e=>ql.has(e);var pe=Symbol("Response internals"),ne=class e extends Re{constructor(t=null,a={}){super(t,a);let r=a.status!=null?a.status:200,n=new J(a.headers);if(t!==null&&!n.has("Content-Type")){let o=Ba(t,this);o&&n.append("Content-Type",o)}this[pe]={type:"default",url:a.url,status:r,statusText:a.statusText||"",headers:n,counter:a.counter,highWaterMark:a.highWaterMark}}get type(){return this[pe].type}get url(){return this[pe].url||""}get status(){return this[pe].status}get ok(){return this[pe].status>=200&&this[pe].status<300}get redirected(){return this[pe].counter>0}get statusText(){return this[pe].statusText}get headers(){return this[pe].headers}get highWaterMark(){return this[pe].highWaterMark}clone(){return new e(Mt(this,this.highWaterMark),{type:this.type,url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected,size:this.size,highWaterMark:this.highWaterMark})}static redirect(t,a=302){if(!qa(a))throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');return new e(null,{headers:{location:new URL(t).toString()},status:a})}static error(){let t=new e(null,{status:0,statusText:""});return t[pe].type="error",t}static json(t=void 0,a={}){let r=JSON.stringify(t);if(r===void 0)throw new TypeError("data is not JSON serializable");let n=new J(a&&a.headers);return n.has("content-type")||n.set("content-type","application/json"),new e(r,{...a,headers:n})}get[Symbol.toStringTag](){return"Response"}};Object.defineProperties(ne.prototype,{type:{enumerable:!0},url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}});var Qo=require("node:url"),Wo=require("node:util");var Vo=e=>{if(e.search)return e.search;let t=e.href.length-1,a=e.hash||(e.href[t]==="#"?"#":"");return e.href[t-a.length]==="?"?"?":""};var jo=require("node:net");function ko(e,t=!1){return e==null||(e=new URL(e),/^(about|blob|data):$/.test(e.protocol))?"no-referrer":(e.username="",e.password="",e.hash="",t&&(e.pathname="",e.search=""),e)}var Fo=new Set(["","no-referrer","no-referrer-when-downgrade","same-origin","origin","strict-origin","origin-when-cross-origin","strict-origin-when-cross-origin","unsafe-url"]),zo="strict-origin-when-cross-origin";function Ho(e){if(!Fo.has(e))throw new TypeError(`Invalid referrerPolicy: ${e}`);return e}function Nl(e){if(/^(http|ws)s:$/.test(e.protocol))return!0;let t=e.host.replace(/(^\[)|(]$)/g,""),a=(0,jo.isIP)(t);return a===4&&/^127\./.test(t)||a===6&&/^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(t)?!0:e.host==="localhost"||e.host.endsWith(".localhost")?!1:e.protocol==="file:"}function mt(e){return/^about:(blank|srcdoc)$/.test(e)||e.protocol==="data:"||/^(blob|filesystem):$/.test(e.protocol)?!0:Nl(e)}function Go(e,{referrerURLCallback:t,referrerOriginCallback:a}={}){if(e.referrer==="no-referrer"||e.referrerPolicy==="")return null;let r=e.referrerPolicy;if(e.referrer==="about:client")return"no-referrer";let n=e.referrer,o=ko(n),i=ko(n,!0);o.toString().length>4096&&(o=i),t&&(o=t(o)),a&&(i=a(i));let s=new URL(e.url);switch(r){case"no-referrer":return"no-referrer";case"origin":return i;case"unsafe-url":return o;case"strict-origin":return mt(o)&&!mt(s)?"no-referrer":i.toString();case"strict-origin-when-cross-origin":return o.origin===s.origin?o:mt(o)&&!mt(s)?"no-referrer":i;case"same-origin":return o.origin===s.origin?o:"no-referrer";case"origin-when-cross-origin":return o.origin===s.origin?o:i;case"no-referrer-when-downgrade":return mt(o)&&!mt(s)?"no-referrer":o;default:throw new TypeError(`Invalid referrerPolicy: ${r}`)}}function $o(e){let t=(e.get("referrer-policy")||"").split(/[,\s]+/),a="";for(let r of t)r&&Fo.has(r)&&(a=r);return a}var w=Symbol("Request internals"),Gt=e=>typeof e=="object"&&typeof e[w]=="object",Vl=(0,Wo.deprecate)(()=>{},".data is not a valid RequestInit property, use .body instead","https://github.com/node-fetch/node-fetch/issues/1000 (request)"),Je=class e extends Re{constructor(t,a={}){let r;if(Gt(t)?r=new URL(t.url):(r=new URL(t),t={}),r.username!==""||r.password!=="")throw new TypeError(`${r} is an url with embedded credentials.`);let n=a.method||t.method||"GET";if(/^(delete|get|head|options|post|put)$/i.test(n)&&(n=n.toUpperCase()),!Gt(a)&&"data"in a&&Vl(),(a.body!=null||Gt(t)&&t.body!==null)&&(n==="GET"||n==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");let o=a.body?a.body:Gt(t)&&t.body!==null?Mt(t):null;super(o,{size:a.size||t.size||0});let i=new J(a.headers||t.headers||{});if(o!==null&&!i.has("Content-Type")){let p=Ba(o,this);p&&i.set("Content-Type",p)}let s=Gt(t)?t.signal:null;if("signal"in a&&(s=a.signal),s!=null&&!Uo(s))throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");let u=a.referrer==null?t.referrer:a.referrer;if(u==="")u="no-referrer";else if(u){let p=new URL(u);u=/^about:(\/\/)?client$/.test(p)?"client":p}else u=void 0;this[w]={method:n,redirect:a.redirect||t.redirect||"follow",headers:i,parsedURL:r,signal:s,referrer:u},this.follow=a.follow===void 0?t.follow===void 0?20:t.follow:a.follow,this.compress=a.compress===void 0?t.compress===void 0?!0:t.compress:a.compress,this.counter=a.counter||t.counter||0,this.agent=a.agent||t.agent,this.highWaterMark=a.highWaterMark||t.highWaterMark||16384,this.insecureHTTPParser=a.insecureHTTPParser||t.insecureHTTPParser||!1,this.referrerPolicy=a.referrerPolicy||t.referrerPolicy||""}get method(){return this[w].method}get url(){return(0,Qo.format)(this[w].parsedURL)}get headers(){return this[w].headers}get redirect(){return this[w].redirect}get signal(){return this[w].signal}get referrer(){if(this[w].referrer==="no-referrer")return"";if(this[w].referrer==="client")return"about:client";if(this[w].referrer)return this[w].referrer.toString()}get referrerPolicy(){return this[w].referrerPolicy}set referrerPolicy(t){this[w].referrerPolicy=Ho(t)}clone(){return new e(this)}get[Symbol.toStringTag](){return"Request"}};Object.defineProperties(Je.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0},referrer:{enumerable:!0},referrerPolicy:{enumerable:!0}});var Ko=e=>{let{parsedURL:t}=e[w],a=new J(e[w].headers);a.has("Accept")||a.set("Accept","*/*");let r=null;if(e.body===null&&/^(post|put)$/i.test(e.method)&&(r="0"),e.body!==null){let s=Lo(e);typeof s=="number"&&!Number.isNaN(s)&&(r=String(s))}r&&a.set("Content-Length",r),e.referrerPolicy===""&&(e.referrerPolicy=zo),e.referrer&&e.referrer!=="no-referrer"?e[w].referrer=Go(e):e[w].referrer="no-referrer",e[w].referrer instanceof URL&&a.set("Referer",e.referrer),a.has("User-Agent")||a.set("User-Agent","node-fetch"),e.compress&&!a.has("Accept-Encoding")&&a.set("Accept-Encoding","gzip, deflate, br");let{agent:n}=e;typeof n=="function"&&(n=n(t));let o=Vo(t),i={path:t.pathname+o,method:e.method,headers:a[Symbol.for("nodejs.util.inspect.custom")](),insecureHTTPParser:e.insecureHTTPParser,agent:n};return{parsedURL:t,options:i}};var Na=class extends De{constructor(t,a="aborted"){super(t,a)}};va();hr();var kl=new Set(["data:","http:","https:"]);async function Va(e,t){return new Promise((a,r)=>{let n=new Je(e,t),{parsedURL:o,options:i}=Ko(n);if(!kl.has(o.protocol))throw new TypeError(`node-fetch cannot load ${e}. URL scheme "${o.protocol.replace(/:$/,"")}" is not supported.`);if(o.protocol==="data:"){let l=(0,Ua.default)(n.url),S=new ne(l,{headers:{"Content-Type":l.typeFull}});a(S);return}let s=(o.protocol==="https:"?Jo.default:Yo.default).request,{signal:u}=n,p=null,c=()=>{let l=new Na("The operation was aborted.");r(l),n.body&&n.body instanceof Z.default.Readable&&n.body.destroy(l),!(!p||!p.body)&&p.body.emit("error",l)};if(u&&u.aborted){c();return}let y=()=>{c(),m()},g=s(o.toString(),i);u&&u.addEventListener("abort",y);let m=()=>{g.abort(),u&&u.removeEventListener("abort",y)};g.on("error",l=>{r(new H(`request to ${n.url} failed, reason: ${l.message}`,"system",l)),m()}),jl(g,l=>{p&&p.body&&p.body.destroy(l)}),process.version<"v14"&&g.on("socket",l=>{let S;l.prependListener("end",()=>{S=l._eventsCount}),l.prependListener("close",d=>{if(p&&S<l._eventsCount&&!d){let b=new Error("Premature close");b.code="ERR_STREAM_PREMATURE_CLOSE",p.body.emit("error",b)}})}),g.on("response",l=>{g.setTimeout(0);let S=No(l.rawHeaders);if(qa(l.statusCode)){let M=S.get("Location"),P=null;try{P=M===null?null:new URL(M,n.url)}catch{if(n.redirect!=="manual"){r(new H(`uri requested responds with an invalid redirect URL: ${M}`,"invalid-redirect")),m();return}}switch(n.redirect){case"error":r(new H(`uri requested responds with a redirect, redirect mode is set to error: ${n.url}`,"no-redirect")),m();return;case"manual":break;case"follow":{if(P===null)break;if(n.counter>=n.follow){r(new H(`maximum redirect reached at: ${n.url}`,"max-redirect")),m();return}let A={headers:new J(n.headers),follow:n.follow,counter:n.counter+1,agent:n.agent,compress:n.compress,method:n.method,body:Mt(n),signal:n.signal,size:n.size,referrer:n.referrer,referrerPolicy:n.referrerPolicy};if(!_o(n.url,P)||!vo(n.url,P))for(let L of["authorization","www-authenticate","cookie","cookie2"])A.headers.delete(L);if(l.statusCode!==303&&n.body&&t.body instanceof Z.default.Readable){r(new H("Cannot follow redirect with body being a readable stream","unsupported-redirect")),m();return}(l.statusCode===303||(l.statusCode===301||l.statusCode===302)&&n.method==="POST")&&(A.method="GET",A.body=void 0,A.headers.delete("content-length"));let x=$o(S);x&&(A.referrerPolicy=x),a(Va(new Je(P,A))),m();return}default:return r(new TypeError(`Redirect option '${n.redirect}' is not a valid value of RequestRedirect`))}}u&&l.once("end",()=>{u.removeEventListener("abort",y)});let d=(0,Z.pipeline)(l,new Z.PassThrough,M=>{M&&r(M)});process.version<"v12.10"&&l.on("aborted",y);let b={url:n.url,status:l.statusCode,statusText:l.statusMessage,headers:S,size:n.size,counter:n.counter,highWaterMark:n.highWaterMark},R=S.get("Content-Encoding");if(!n.compress||n.method==="HEAD"||R===null||l.statusCode===204||l.statusCode===304){p=new ne(d,b),a(p);return}let f={flush:Ze.default.Z_SYNC_FLUSH,finishFlush:Ze.default.Z_SYNC_FLUSH};if(R==="gzip"||R==="x-gzip"){d=(0,Z.pipeline)(d,Ze.default.createGunzip(f),M=>{M&&r(M)}),p=new ne(d,b),a(p);return}if(R==="deflate"||R==="x-deflate"){let M=(0,Z.pipeline)(l,new Z.PassThrough,P=>{P&&r(P)});M.once("data",P=>{(P[0]&15)===8?d=(0,Z.pipeline)(d,Ze.default.createInflate(),A=>{A&&r(A)}):d=(0,Z.pipeline)(d,Ze.default.createInflateRaw(),A=>{A&&r(A)}),p=new ne(d,b),a(p)}),M.once("end",()=>{p||(p=new ne(d,b),a(p))});return}if(R==="br"){d=(0,Z.pipeline)(d,Ze.default.createBrotliDecompress(),M=>{M&&r(M)}),p=new ne(d,b),a(p);return}p=new ne(d,b),a(p)}),qo(g,n).catch(r)})}function jl(e,t){let a=$t.Buffer.from(`0\r
\r
`),r=!1,n=!1,o;e.on("response",i=>{let{headers:s}=i;r=s["transfer-encoding"]==="chunked"&&!s["content-length"]}),e.on("socket",i=>{let s=()=>{if(r&&!n){let p=new Error("Premature close");p.code="ERR_STREAM_PREMATURE_CLOSE",t(p)}},u=p=>{n=$t.Buffer.compare(p.slice(-5),a)===0,!n&&o&&(n=$t.Buffer.compare(o.slice(-3),a.slice(0,3))===0&&$t.Buffer.compare(p.slice(-2),a.slice(3))===0),o=p};i.prependListener("close",s),i.on("data",u),e.on("close",()=>{i.removeListener("close",s),i.removeListener("data",u)})})}var vr=null,Tr=null,ti=null,Fl=(0,Xo.getPreferenceValues)();function zl({token:e,type:t}){let a=t==="personal"?`token ${e}`:`bearer ${e}`;ti=e,vr=yo(new xa("https://api.github.com/graphql",{headers:{authorization:a}})),Tr=new Zo.Octokit({auth:e,request:{fetch:Va}})}var ai=ei.OAuthService.github({personalAccessToken:Fl.personalAccessToken,scope:"notifications repo project read:org read:user read:packages",onAuthorize:zl});function ri(){if(!vr||!Tr)throw new Error("GitHub clients not initialized");return{github:vr,octokit:Tr,token:ti}}var oi=(0,ni.withAccessToken)(ai);var ui=O(Lt());var ke=require("@raycast/api"),Hl=O(require("react")),si=require("react/jsx-runtime");function Gl(e){let t=e.min||1,a=e.max||100,r=e.default||10,o=(0,ke.getPreferenceValues)()[e.name]||"",i=Number(o);return isNaN(i)||i<t||i>a?r:i}function ii(){return Math.min(Gl({name:"numberOfResults",default:50}),25)}function pi(e){let{github:t}=ri();return(0,ui.useCachedPromise)(a=>async({cursor:r})=>{let n=await t.searchDiscussions({query:a,numberOfItems:ii(),after:r});return{data:Io(n.searchDiscussions.nodes),hasMore:n.searchDiscussions.pageInfo.hasNextPage,cursor:n.searchDiscussions.pageInfo.endCursor??void 0}},[e])}var ka=require("react/jsx-runtime");function $l(){let[e,t]=(0,ci.useState)(""),[a,r]=(0,li.useCachedState)("sort-query",eo,{cacheNamespace:"github-my-discussion"}),{data:n,isLoading:o,pagination:i}=pi(`author:@me ${to(a)} ${e}`),s=bo(n??[]);return(0,ka.jsx)(wr.List,{isLoading:o,onSearchTextChange:t,throttle:!0,pagination:i,children:(0,ka.jsx)(wr.List.Section,{title:e.length>0?"Found Discussions":"Your Discussions",subtitle:`${s.length}`,children:s.map(u=>(0,ka.jsx)(oo,{discussion:u,sortQuery:a,setSortQuery:r},u.id))})})}var Ql=oi($l);
