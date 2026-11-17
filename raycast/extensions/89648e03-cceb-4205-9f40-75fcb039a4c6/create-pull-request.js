"use strict";var cs=Object.create;var fa=Object.defineProperty;var ys=Object.getOwnPropertyDescriptor;var ds=Object.getOwnPropertyNames;var Ss=Object.getPrototypeOf,bs=Object.prototype.hasOwnProperty;var Er=(e,t,a)=>()=>{if(a)throw a[0];try{return e&&(t=e(e=0)),t}catch(n){throw a=[n],n}};var U=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(a){throw t=0,a}},Ct=(e,t)=>{for(var a in t)fa(e,a,{get:t[a],enumerable:!0})},Aa=(e,t,a,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of ds(t))!bs.call(e,r)&&r!==a&&fa(e,r,{get:()=>t[r],enumerable:!(n=ys(t,r))||n.enumerable});return e},le=(e,t,a)=>(Aa(e,t,"default"),a&&Aa(a,t,"default")),L=(e,t,a)=>(a=e!=null?cs(Ss(e)):{},Aa(t||!e||!e.__esModule?fa(a,"default",{value:e,enumerable:!0}):a,e)),Is=e=>Aa(fa({},"__esModule",{value:!0}),e);var En=U(Pa=>{"use strict";Object.defineProperty(Pa,"__esModule",{value:!0});Pa.useDeepMemo=void 0;var Cr=require("react"),gs=require("dequal/lite");function Ms(e){let t=(0,Cr.useRef)(e),a=(0,Cr.useRef)(0);return(0,gs.dequal)(e,t.current)||(t.current=e,a.current+=1),(0,Cr.useMemo)(()=>t.current,[a.current])}Pa.useDeepMemo=Ms});var He=U(Ea=>{"use strict";Object.defineProperty(Ea,"__esModule",{value:!0});Ea.useLatest=void 0;var ms=require("react");function Rs(e){let t=(0,ms.useRef)(e);return t.current=e,t}Ea.useLatest=Rs});var Kt=U(Oe=>{"use strict";var As=Oe&&Oe.__createBinding||(Object.create?(function(e,t,a,n){n===void 0&&(n=a);var r=Object.getOwnPropertyDescriptor(t,a);(!r||("get"in r?!t.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,r)}):(function(e,t,a,n){n===void 0&&(n=a),e[n]=t[a]})),fs=Oe&&Oe.__setModuleDefault||(Object.create?(function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}):function(e,t){e.default=t}),hn=Oe&&Oe.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var a in e)a!=="default"&&Object.prototype.hasOwnProperty.call(e,a)&&As(t,e,a);return fs(t,e),t};Object.defineProperty(Oe,"__esModule",{value:!0});Oe.showFailureToast=void 0;var Ps=hn(require("fs")),Es=hn(require("path")),ht=require("@raycast/api");function Cs(e,t){let a=e instanceof Error?e.message:String(e);return(0,ht.showToast)({style:ht.Toast.Style.Failure,title:t?.title??"Something went wrong",message:t?.message??a,primaryAction:t?.primaryAction??Cn(e),secondaryAction:t?.primaryAction?Cn(e):void 0})}Oe.showFailureToast=Cs;var Cn=e=>{let t=!0,a="[Extension Name]...",n="";try{let u=JSON.parse(Ps.readFileSync(Es.join(ht.environment.assetsPath,"..","package.json"),"utf8"));a=`[${u.title}]...`,n=`https://raycast.com/${u.owner||u.author}/${u.name}`,(!u.owner||u.access==="public")&&(t=!1)}catch{}let r=ht.environment.isDevelopment||t,o=e instanceof Error?e?.stack||e?.message||"":String(e);return{title:r?"Copy Logs":"Report Error",onAction(u){u.hide(),r?ht.Clipboard.copy(o):(0,ht.open)(`https://github.com/raycast/extensions/issues/new?&labels=extension%2Cbug&template=extension_bug_report.yml&title=${encodeURIComponent(a)}&extension-url=${encodeURI(n)}&description=${encodeURIComponent(`#### Error:
\`\`\`
${o}
\`\`\`
`)}`)}}}});var Dt=U(Ca=>{"use strict";Object.defineProperty(Ca,"__esModule",{value:!0});Ca.usePromise=void 0;var Ie=require("react"),Yt=require("@raycast/api"),hs=En(),Xe=He(),Ds=Kt();function xs(e,t,a){let n=(0,Ie.useRef)(0),[r,o]=(0,Ie.useState)({isLoading:!0}),u=(0,Xe.useLatest)(e),i=(0,Xe.useLatest)(a?.abortable),s=(0,Xe.useLatest)(t||[]),p=(0,Xe.useLatest)(a?.onError),l=(0,Xe.useLatest)(a?.onData),y=(0,Xe.useLatest)(a?.onWillExecute),S=(0,Xe.useLatest)(a?.failureToastOptions),R=(0,Xe.useLatest)(r.data),d=(0,Ie.useRef)(),I=(0,Ie.useRef)({page:0}),b=(0,Ie.useRef)(!1),g=(0,Ie.useRef)(!0),f=(0,Ie.useRef)(50),E=(0,Ie.useCallback)((...W)=>{let k=++n.current;i.current&&(i.current.current?.abort(),i.current.current=new AbortController),y.current?.(W),o(x=>({...x,isLoading:!0}));let re=_s(u.current)(...W);function ne(x){return x.name=="AbortError"||k===n.current&&(p.current?p.current(x):Yt.environment.launchType!==Yt.LaunchType.Background&&(0,Ds.showFailureToast)(x,{title:"Failed to fetch latest data",primaryAction:{title:"Retry",onAction(Z){Z.hide(),d.current?.(...s.current||[])}},...S.current}),o({error:x,isLoading:!1})),x}return typeof re=="function"?(b.current=!0,re(I.current).then(({data:x,hasMore:Z,cursor:_})=>(k===n.current&&(I.current&&(I.current.cursor=_,I.current.lastItem=x?.[x.length-1]),l.current&&l.current(x,I.current),Z&&(f.current=x.length),g.current=Z,o(X=>I.current.page===0?{data:x,isLoading:!1}:{data:(X.data||[])?.concat(x),isLoading:!1})),x),x=>(g.current=!1,ne(x)))):(b.current=!1,re.then(x=>(k===n.current&&(l.current&&l.current(x),o({data:x,isLoading:!1})),x),ne))},[i,l,p,s,u,o,d,y,I,S]);d.current=E;let M=(0,Ie.useCallback)(()=>{I.current={page:0};let W=s.current||[];return E(...W)},[E,s]),h=(0,Ie.useCallback)(async(W,k)=>{let re;try{if(k?.optimisticUpdate){typeof k?.rollbackOnError!="function"&&k?.rollbackOnError!==!1&&(re=structuredClone(R.current?.value));let ne=k.optimisticUpdate;o(x=>({...x,data:ne(x.data)}))}return await W}catch(ne){if(typeof k?.rollbackOnError=="function"){let x=k.rollbackOnError;o(Z=>({...Z,data:x(Z.data)}))}else k?.optimisticUpdate&&k?.rollbackOnError!==!1&&o(x=>({...x,data:re}));throw ne}finally{k?.shouldRevalidateAfter!==!1&&(Yt.environment.launchType===Yt.LaunchType.Background||Yt.environment.commandMode==="menu-bar"?await M():M())}},[M,R,o]),C=(0,Ie.useCallback)(()=>{I.current.page+=1;let W=s.current||[];E(...W)},[I,s,E]);(0,Ie.useEffect)(()=>{I.current={page:0},a?.execute!==!1?E(...t||[]):i.current&&i.current.current?.abort()},[(0,hs.useDeepMemo)([t,a?.execute,E]),i,I]),(0,Ie.useEffect)(()=>()=>{i.current&&i.current.current?.abort()},[i]);let T=a?.execute!==!1?r.isLoading:!1,j={...r,isLoading:T},te=b.current?{pageSize:f.current,hasMore:g.current,onLoadMore:C}:void 0;return{...j,revalidate:M,mutate:h,pagination:te}}Ca.usePromise=xs;function _s(e){return e===Promise.all||e===Promise.race||e===Promise.resolve||e===Promise.reject?e.bind(Promise):e}});var et=U(Be=>{"use strict";var Us=Be&&Be.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Be,"__esModule",{value:!0});Be.hash=Be.reviver=Be.replacer=void 0;var vs=Us(require("object-hash"));function Ts(e,t){let a=this[e];return a instanceof Date?`__raycast_cached_date__${a.toString()}`:Buffer.isBuffer(a)?`__raycast_cached_buffer__${a.toString("base64")}`:t}Be.replacer=Ts;function ws(e,t){return typeof t=="string"&&t.startsWith("__raycast_cached_date__")?new Date(t.replace("__raycast_cached_date__","")):typeof t=="string"&&t.startsWith("__raycast_cached_buffer__")?Buffer.from(t.replace("__raycast_cached_buffer__",""),"base64"):t}Be.reviver=ws;function Os(e,t){return(0,vs.default)(e,{replacer:a=>a instanceof URLSearchParams?a.toString():a,...t})}Be.hash=Os});var Da=U(ha=>{"use strict";Object.defineProperty(ha,"__esModule",{value:!0});ha.useCachedState=void 0;var hr=require("react"),Bs=require("@raycast/api"),Dr=He(),Dn=et(),qs=Symbol("cache without namespace"),xn=new Map;function Ls(e,t,a){let n=a?.cacheNamespace||qs,r=xn.get(n)||xn.set(n,new Bs.Cache({namespace:a?.cacheNamespace})).get(n);if(!r)throw new Error("Missing cache");let o=(0,Dr.useLatest)(e),u=(0,Dr.useLatest)(t),i=(0,hr.useSyncExternalStore)(r.subscribe,()=>{try{return r.get(o.current)}catch(y){console.error("Could not get Cache data:",y);return}}),s=(0,hr.useMemo)(()=>{if(typeof i<"u"){if(i==="undefined")return;try{return JSON.parse(i,Dn.reviver)}catch(y){return console.warn("The cached data is corrupted",y),u.current}}else return u.current},[i,u]),p=(0,Dr.useLatest)(s),l=(0,hr.useCallback)(y=>{let S=typeof y=="function"?y(p.current):y;if(typeof S>"u")r.set(o.current,"undefined");else{let R=JSON.stringify(S,Dn.replacer);r.set(o.current,R)}return S},[r,o,p]);return[s,l]}ha.useCachedState=Ls});var Zt=U(xa=>{"use strict";Object.defineProperty(xa,"__esModule",{value:!0});xa.useCachedPromise=void 0;var Jt=require("react"),Ns=Da(),Vs=Dt(),ks=He(),_n=et(),xt=Symbol();function Fs(e,t,a){let{initialData:n,keepPreviousData:r,internal_cacheKeySuffix:o,...u}=a||{},i=(0,Jt.useRef)(),[s,p]=(0,Ns.useCachedState)((0,_n.hash)(t||[])+o,xt,{cacheNamespace:(0,_n.hash)(e)}),l=(0,Jt.useRef)(s!==xt?s:n),y=(0,Jt.useRef)(void 0),{mutate:S,revalidate:R,...d}=(0,Vs.usePromise)(e,t||[],{...u,onData(E,M){y.current=M,u.onData&&u.onData(E,M),!(M&&M.page>0)&&(i.current="promise",l.current=E,p(E))}}),I,b=d.pagination;y.current&&y.current.page>0&&d.data?I=d.data:i.current==="promise"?I=l.current:r&&s!==xt?(I=s,b&&(b.hasMore=!0,b.pageSize=s.length)):r&&s===xt?I=l.current:s!==xt?(I=s,b&&(b.hasMore=!0,b.pageSize=s.length)):I=n;let g=(0,ks.useLatest)(I),f=(0,Jt.useCallback)(async(E,M)=>{let h;try{if(M?.optimisticUpdate){typeof M?.rollbackOnError!="function"&&M?.rollbackOnError!==!1&&(h=structuredClone(g.current));let C=M.optimisticUpdate(g.current);i.current="cache",l.current=C,p(C)}return await S(E,{shouldRevalidateAfter:M?.shouldRevalidateAfter})}catch(C){if(typeof M?.rollbackOnError=="function"){let T=M.rollbackOnError(g.current);i.current="cache",l.current=T,p(T)}else M?.optimisticUpdate&&M?.rollbackOnError!==!1&&(i.current="cache",l.current=h,p(h));throw C}},[p,S,g,l,i]);return(0,Jt.useEffect)(()=>{s!==xt&&(i.current="cache",l.current=s)},[s]),{data:I,isLoading:d.isLoading,error:d.error,mutate:y.current&&y.current.page>0?S:f,pagination:b,revalidate:R}}xa.useCachedPromise=Fs});var Fn=U((ve,kn)=>{"use strict";Object.defineProperty(ve,"__esModule",{value:!0});function Tt(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var Ue=Tt(require("stream")),wn=Tt(require("http")),Ua=Tt(require("url")),On=Tt(require("whatwg-url")),js=Tt(require("https")),ct=Tt(require("zlib")),zs=Ue.Readable,Ge=Symbol("buffer"),xr=Symbol("type"),ea=class e{constructor(){this[xr]="";let t=arguments[0],a=arguments[1],n=[],r=0;if(t){let u=t,i=Number(u.length);for(let s=0;s<i;s++){let p=u[s],l;p instanceof Buffer?l=p:ArrayBuffer.isView(p)?l=Buffer.from(p.buffer,p.byteOffset,p.byteLength):p instanceof ArrayBuffer?l=Buffer.from(p):p instanceof e?l=p[Ge]:l=Buffer.from(typeof p=="string"?p:String(p)),r+=l.length,n.push(l)}}this[Ge]=Buffer.concat(n);let o=a&&a.type!==void 0&&String(a.type).toLowerCase();o&&!/[^\u0020-\u007E]/.test(o)&&(this[xr]=o)}get size(){return this[Ge].length}get type(){return this[xr]}text(){return Promise.resolve(this[Ge].toString())}arrayBuffer(){let t=this[Ge],a=t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength);return Promise.resolve(a)}stream(){let t=new zs;return t._read=function(){},t.push(this[Ge]),t.push(null),t}toString(){return"[object Blob]"}slice(){let t=this.size,a=arguments[0],n=arguments[1],r,o;a===void 0?r=0:a<0?r=Math.max(t+a,0):r=Math.min(a,t),n===void 0?o=t:n<0?o=Math.max(t+n,0):o=Math.min(n,t);let u=Math.max(o-r,0),s=this[Ge].slice(r,r+u),p=new e([],{type:arguments[2]});return p[Ge]=s,p}};Object.defineProperties(ea.prototype,{size:{enumerable:!0},type:{enumerable:!0},slice:{enumerable:!0}});Object.defineProperty(ea.prototype,Symbol.toStringTag,{value:"Blob",writable:!1,enumerable:!1,configurable:!0});function ee(e,t,a){Error.call(this,e),this.message=e,this.type=t,a&&(this.code=this.errno=a.code),Error.captureStackTrace(this,this.constructor)}ee.prototype=Object.create(Error.prototype);ee.prototype.constructor=ee;ee.prototype.name="FetchError";var Tr;try{Tr=require("encoding").convert}catch{}var Qe=Symbol("Body internals"),Un=Ue.PassThrough;function K(e){var t=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.size;let r=n===void 0?0:n;var o=a.timeout;let u=o===void 0?0:o;e==null?e=null:Bn(e)?e=Buffer.from(e.toString()):aa(e)||Buffer.isBuffer(e)||(Object.prototype.toString.call(e)==="[object ArrayBuffer]"?e=Buffer.from(e):ArrayBuffer.isView(e)?e=Buffer.from(e.buffer,e.byteOffset,e.byteLength):e instanceof Ue||(e=Buffer.from(String(e)))),this[Qe]={body:e,disturbed:!1,error:null},this.size=r,this.timeout=u,e instanceof Ue&&e.on("error",function(i){let s=i.name==="AbortError"?i:new ee(`Invalid response body while trying to fetch ${t.url}: ${i.message}`,"system",i);t[Qe].error=s})}K.prototype={get body(){return this[Qe].body},get bodyUsed(){return this[Qe].disturbed},arrayBuffer(){return _t.call(this).then(function(e){return e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength)})},blob(){let e=this.headers&&this.headers.get("content-type")||"";return _t.call(this).then(function(t){return Object.assign(new ea([],{type:e.toLowerCase()}),{[Ge]:t})})},json(){var e=this;return _t.call(this).then(function(t){try{return JSON.parse(t.toString())}catch(a){return K.Promise.reject(new ee(`invalid json response body at ${e.url} reason: ${a.message}`,"invalid-json"))}})},text(){return _t.call(this).then(function(e){return e.toString()})},buffer(){return _t.call(this)},textConverted(){var e=this;return _t.call(this).then(function(t){return Hs(t,e.headers)})}};Object.defineProperties(K.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0}});K.mixIn=function(e){for(let t of Object.getOwnPropertyNames(K.prototype))if(!(t in e)){let a=Object.getOwnPropertyDescriptor(K.prototype,t);Object.defineProperty(e,t,a)}};function _t(){var e=this;if(this[Qe].disturbed)return K.Promise.reject(new TypeError(`body used already for: ${this.url}`));if(this[Qe].disturbed=!0,this[Qe].error)return K.Promise.reject(this[Qe].error);let t=this.body;if(t===null)return K.Promise.resolve(Buffer.alloc(0));if(aa(t)&&(t=t.stream()),Buffer.isBuffer(t))return K.Promise.resolve(t);if(!(t instanceof Ue))return K.Promise.resolve(Buffer.alloc(0));let a=[],n=0,r=!1;return new K.Promise(function(o,u){let i;e.timeout&&(i=setTimeout(function(){r=!0,u(new ee(`Response timeout while trying to fetch ${e.url} (over ${e.timeout}ms)`,"body-timeout"))},e.timeout)),t.on("error",function(s){s.name==="AbortError"?(r=!0,u(s)):u(new ee(`Invalid response body while trying to fetch ${e.url}: ${s.message}`,"system",s))}),t.on("data",function(s){if(!(r||s===null)){if(e.size&&n+s.length>e.size){r=!0,u(new ee(`content size at ${e.url} over limit: ${e.size}`,"max-size"));return}n+=s.length,a.push(s)}}),t.on("end",function(){if(!r){clearTimeout(i);try{o(Buffer.concat(a,n))}catch(s){u(new ee(`Could not create Buffer from response body for ${e.url}: ${s.message}`,"system",s))}}})})}function Hs(e,t){if(typeof Tr!="function")throw new Error("The package `encoding` must be installed to use the textConverted() function");let a=t.get("content-type"),n="utf-8",r,o;return a&&(r=/charset=([^;]*)/i.exec(a)),o=e.slice(0,1024).toString(),!r&&o&&(r=/<meta.+?charset=(['"])(.+?)\1/i.exec(o)),!r&&o&&(r=/<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(o),r||(r=/<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(o),r&&r.pop()),r&&(r=/charset=(.*)/i.exec(r.pop()))),!r&&o&&(r=/<\?xml.+?encoding=(['"])(.+?)\1/i.exec(o)),r&&(n=r.pop(),(n==="gb2312"||n==="gbk")&&(n="gb18030")),Tr(e,"UTF-8",n).toString()}function Bn(e){return typeof e!="object"||typeof e.append!="function"||typeof e.delete!="function"||typeof e.get!="function"||typeof e.getAll!="function"||typeof e.has!="function"||typeof e.set!="function"?!1:e.constructor.name==="URLSearchParams"||Object.prototype.toString.call(e)==="[object URLSearchParams]"||typeof e.sort=="function"}function aa(e){return typeof e=="object"&&typeof e.arrayBuffer=="function"&&typeof e.type=="string"&&typeof e.stream=="function"&&typeof e.constructor=="function"&&typeof e.constructor.name=="string"&&/^(Blob|File)$/.test(e.constructor.name)&&/^(Blob|File)$/.test(e[Symbol.toStringTag])}function qn(e){let t,a,n=e.body;if(e.bodyUsed)throw new Error("cannot clone body after it is used");return n instanceof Ue&&typeof n.getBoundary!="function"&&(t=new Un,a=new Un,n.pipe(t),n.pipe(a),e[Qe].body=t,n=a),n}function Ln(e){return e===null?null:typeof e=="string"?"text/plain;charset=UTF-8":Bn(e)?"application/x-www-form-urlencoded;charset=UTF-8":aa(e)?e.type||null:Buffer.isBuffer(e)||Object.prototype.toString.call(e)==="[object ArrayBuffer]"||ArrayBuffer.isView(e)?null:typeof e.getBoundary=="function"?`multipart/form-data;boundary=${e.getBoundary()}`:e instanceof Ue?null:"text/plain;charset=UTF-8"}function Nn(e){let t=e.body;return t===null?0:aa(t)?t.size:Buffer.isBuffer(t)?t.length:t&&typeof t.getLengthSync=="function"&&(t._lengthRetrievers&&t._lengthRetrievers.length==0||t.hasKnownLength&&t.hasKnownLength())?t.getLengthSync():null}function Gs(e,t){let a=t.body;a===null?e.end():aa(a)?a.stream().pipe(e):Buffer.isBuffer(a)?(e.write(a),e.end()):a.pipe(e)}K.Promise=global.Promise;var Vn=/[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/,wr=/[^\t\x20-\x7e\x80-\xff]/;function Xt(e){if(e=`${e}`,Vn.test(e)||e==="")throw new TypeError(`${e} is not a legal HTTP header name`)}function vn(e){if(e=`${e}`,wr.test(e))throw new TypeError(`${e} is not a legal HTTP header value`)}function Ut(e,t){t=t.toLowerCase();for(let a in e)if(a.toLowerCase()===t)return a}var G=Symbol("map"),Ee=class e{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:void 0;if(this[G]=Object.create(null),t instanceof e){let a=t.raw(),n=Object.keys(a);for(let r of n)for(let o of a[r])this.append(r,o);return}if(t!=null)if(typeof t=="object"){let a=t[Symbol.iterator];if(a!=null){if(typeof a!="function")throw new TypeError("Header pairs must be iterable");let n=[];for(let r of t){if(typeof r!="object"||typeof r[Symbol.iterator]!="function")throw new TypeError("Each header pair must be iterable");n.push(Array.from(r))}for(let r of n){if(r.length!==2)throw new TypeError("Each header pair must be a name/value tuple");this.append(r[0],r[1])}}else for(let n of Object.keys(t)){let r=t[n];this.append(n,r)}}else throw new TypeError("Provided initializer must be an object")}get(t){t=`${t}`,Xt(t);let a=Ut(this[G],t);return a===void 0?null:this[G][a].join(", ")}forEach(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:void 0,n=Or(this),r=0;for(;r<n.length;){var o=n[r];let u=o[0],i=o[1];t.call(a,i,u,this),n=Or(this),r++}}set(t,a){t=`${t}`,a=`${a}`,Xt(t),vn(a);let n=Ut(this[G],t);this[G][n!==void 0?n:t]=[a]}append(t,a){t=`${t}`,a=`${a}`,Xt(t),vn(a);let n=Ut(this[G],t);n!==void 0?this[G][n].push(a):this[G][t]=[a]}has(t){return t=`${t}`,Xt(t),Ut(this[G],t)!==void 0}delete(t){t=`${t}`,Xt(t);let a=Ut(this[G],t);a!==void 0&&delete this[G][a]}raw(){return this[G]}keys(){return _r(this,"key")}values(){return _r(this,"value")}[Symbol.iterator](){return _r(this,"key+value")}};Ee.prototype.entries=Ee.prototype[Symbol.iterator];Object.defineProperty(Ee.prototype,Symbol.toStringTag,{value:"Headers",writable:!1,enumerable:!1,configurable:!0});Object.defineProperties(Ee.prototype,{get:{enumerable:!0},forEach:{enumerable:!0},set:{enumerable:!0},append:{enumerable:!0},has:{enumerable:!0},delete:{enumerable:!0},keys:{enumerable:!0},values:{enumerable:!0},entries:{enumerable:!0}});function Or(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"key+value";return Object.keys(e[G]).sort().map(t==="key"?function(n){return n.toLowerCase()}:t==="value"?function(n){return e[G][n].join(", ")}:function(n){return[n.toLowerCase(),e[G][n].join(", ")]})}var Br=Symbol("internal");function _r(e,t){let a=Object.create(qr);return a[Br]={target:e,kind:t,index:0},a}var qr=Object.setPrototypeOf({next(){if(!this||Object.getPrototypeOf(this)!==qr)throw new TypeError("Value of `this` is not a HeadersIterator");var e=this[Br];let t=e.target,a=e.kind,n=e.index,r=Or(t,a),o=r.length;return n>=o?{value:void 0,done:!0}:(this[Br].index=n+1,{value:r[n],done:!1})}},Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));Object.defineProperty(qr,Symbol.toStringTag,{value:"HeadersIterator",writable:!1,enumerable:!1,configurable:!0});function $s(e){let t=Object.assign({__proto__:null},e[G]),a=Ut(e[G],"Host");return a!==void 0&&(t[a]=t[a][0]),t}function Qs(e){let t=new Ee;for(let a of Object.keys(e))if(!Vn.test(a))if(Array.isArray(e[a]))for(let n of e[a])wr.test(n)||(t[G][a]===void 0?t[G][a]=[n]:t[G][a].push(n));else wr.test(e[a])||(t[G][a]=[e[a]]);return t}var tt=Symbol("Response internals"),Ws=wn.STATUS_CODES,Pe=class e{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};K.call(this,t,a);let n=a.status||200,r=new Ee(a.headers);if(t!=null&&!r.has("Content-Type")){let o=Ln(t);o&&r.append("Content-Type",o)}this[tt]={url:a.url,status:n,statusText:a.statusText||Ws[n],headers:r,counter:a.counter}}get url(){return this[tt].url||""}get status(){return this[tt].status}get ok(){return this[tt].status>=200&&this[tt].status<300}get redirected(){return this[tt].counter>0}get statusText(){return this[tt].statusText}get headers(){return this[tt].headers}clone(){return new e(qn(this),{url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected})}};K.mixIn(Pe.prototype);Object.defineProperties(Pe.prototype,{url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}});Object.defineProperty(Pe.prototype,Symbol.toStringTag,{value:"Response",writable:!1,enumerable:!1,configurable:!0});var $e=Symbol("Request internals"),Ks=Ua.URL||On.URL,Ys=Ua.parse,Js=Ua.format;function Ur(e){return/^[a-zA-Z][a-zA-Z\d+\-.]*:/.exec(e)&&(e=new Ks(e).toString()),Ys(e)}var Zs="destroy"in Ue.Readable.prototype;function _a(e){return typeof e=="object"&&typeof e[$e]=="object"}function Xs(e){let t=e&&typeof e=="object"&&Object.getPrototypeOf(e);return!!(t&&t.constructor.name==="AbortSignal")}var rt=class e{constructor(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n;_a(t)?n=Ur(t.url):(t&&t.href?n=Ur(t.href):n=Ur(`${t}`),t={});let r=a.method||t.method||"GET";if(r=r.toUpperCase(),(a.body!=null||_a(t)&&t.body!==null)&&(r==="GET"||r==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");let o=a.body!=null?a.body:_a(t)&&t.body!==null?qn(t):null;K.call(this,o,{timeout:a.timeout||t.timeout||0,size:a.size||t.size||0});let u=new Ee(a.headers||t.headers||{});if(o!=null&&!u.has("Content-Type")){let s=Ln(o);s&&u.append("Content-Type",s)}let i=_a(t)?t.signal:null;if("signal"in a&&(i=a.signal),i!=null&&!Xs(i))throw new TypeError("Expected signal to be an instanceof AbortSignal");this[$e]={method:r,redirect:a.redirect||t.redirect||"follow",headers:u,parsedURL:n,signal:i},this.follow=a.follow!==void 0?a.follow:t.follow!==void 0?t.follow:20,this.compress=a.compress!==void 0?a.compress:t.compress!==void 0?t.compress:!0,this.counter=a.counter||t.counter||0,this.agent=a.agent||t.agent}get method(){return this[$e].method}get url(){return Js(this[$e].parsedURL)}get headers(){return this[$e].headers}get redirect(){return this[$e].redirect}get signal(){return this[$e].signal}clone(){return new e(this)}};K.mixIn(rt.prototype);Object.defineProperty(rt.prototype,Symbol.toStringTag,{value:"Request",writable:!1,enumerable:!1,configurable:!0});Object.defineProperties(rt.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0}});function eu(e){let t=e[$e].parsedURL,a=new Ee(e[$e].headers);if(a.has("Accept")||a.set("Accept","*/*"),!t.protocol||!t.hostname)throw new TypeError("Only absolute URLs are supported");if(!/^https?:$/.test(t.protocol))throw new TypeError("Only HTTP(S) protocols are supported");if(e.signal&&e.body instanceof Ue.Readable&&!Zs)throw new Error("Cancellation of streamed requests with AbortSignal is not supported in node < 8");let n=null;if(e.body==null&&/^(POST|PUT)$/i.test(e.method)&&(n="0"),e.body!=null){let o=Nn(e);typeof o=="number"&&(n=String(o))}n&&a.set("Content-Length",n),a.has("User-Agent")||a.set("User-Agent","node-fetch/1.0 (+https://github.com/bitinn/node-fetch)"),e.compress&&!a.has("Accept-Encoding")&&a.set("Accept-Encoding","gzip,deflate");let r=e.agent;return typeof r=="function"&&(r=r(t)),Object.assign({},t,{method:e.method,headers:$s(a),agent:r})}function vt(e){Error.call(this,e),this.type="aborted",this.message=e,Error.captureStackTrace(this,this.constructor)}vt.prototype=Object.create(Error.prototype);vt.prototype.constructor=vt;vt.prototype.name="AbortError";var ta=Ua.URL||On.URL,Tn=Ue.PassThrough,tu=function(t,a){let n=new ta(a).hostname,r=new ta(t).hostname;return n===r||n[n.length-r.length-1]==="."&&n.endsWith(r)},au=function(t,a){let n=new ta(a).protocol,r=new ta(t).protocol;return n===r};function at(e,t){if(!at.Promise)throw new Error("native promise missing, set fetch.Promise to your favorite alternative");return K.Promise=at.Promise,new at.Promise(function(a,n){let r=new rt(e,t),o=eu(r),u=(o.protocol==="https:"?js:wn).request,i=r.signal,s=null,p=function(){let I=new vt("The user aborted a request.");n(I),r.body&&r.body instanceof Ue.Readable&&vr(r.body,I),!(!s||!s.body)&&s.body.emit("error",I)};if(i&&i.aborted){p();return}let l=function(){p(),R()},y=u(o),S;i&&i.addEventListener("abort",l);function R(){y.abort(),i&&i.removeEventListener("abort",l),clearTimeout(S)}r.timeout&&y.once("socket",function(d){S=setTimeout(function(){n(new ee(`network timeout at: ${r.url}`,"request-timeout")),R()},r.timeout)}),y.on("error",function(d){n(new ee(`request to ${r.url} failed, reason: ${d.message}`,"system",d)),s&&s.body&&vr(s.body,d),R()}),ru(y,function(d){i&&i.aborted||s&&s.body&&vr(s.body,d)}),parseInt(process.version.substring(1))<14&&y.on("socket",function(d){d.addListener("close",function(I){let b=d.listenerCount("data")>0;if(s&&b&&!I&&!(i&&i.aborted)){let g=new Error("Premature close");g.code="ERR_STREAM_PREMATURE_CLOSE",s.body.emit("error",g)}})}),y.on("response",function(d){clearTimeout(S);let I=Qs(d.headers);if(at.isRedirect(d.statusCode)){let M=I.get("Location"),h=null;try{h=M===null?null:new ta(M,r.url).toString()}catch{if(r.redirect!=="manual"){n(new ee(`uri requested responds with an invalid redirect URL: ${M}`,"invalid-redirect")),R();return}}switch(r.redirect){case"error":n(new ee(`uri requested responds with a redirect, redirect mode is set to error: ${r.url}`,"no-redirect")),R();return;case"manual":if(h!==null)try{I.set("Location",h)}catch(T){n(T)}break;case"follow":if(h===null)break;if(r.counter>=r.follow){n(new ee(`maximum redirect reached at: ${r.url}`,"max-redirect")),R();return}let C={headers:new Ee(r.headers),follow:r.follow,counter:r.counter+1,agent:r.agent,compress:r.compress,method:r.method,body:r.body,signal:r.signal,timeout:r.timeout,size:r.size};if(!tu(r.url,h)||!au(r.url,h))for(let T of["authorization","www-authenticate","cookie","cookie2"])C.headers.delete(T);if(d.statusCode!==303&&r.body&&Nn(r)===null){n(new ee("Cannot follow redirect with body being a readable stream","unsupported-redirect")),R();return}(d.statusCode===303||(d.statusCode===301||d.statusCode===302)&&r.method==="POST")&&(C.method="GET",C.body=void 0,C.headers.delete("content-length")),a(at(new rt(h,C))),R();return}}d.once("end",function(){i&&i.removeEventListener("abort",l)});let b=d.pipe(new Tn),g={url:r.url,status:d.statusCode,statusText:d.statusMessage,headers:I,size:r.size,timeout:r.timeout,counter:r.counter},f=I.get("Content-Encoding");if(!r.compress||r.method==="HEAD"||f===null||d.statusCode===204||d.statusCode===304){s=new Pe(b,g),a(s);return}let E={flush:ct.Z_SYNC_FLUSH,finishFlush:ct.Z_SYNC_FLUSH};if(f=="gzip"||f=="x-gzip"){b=b.pipe(ct.createGunzip(E)),s=new Pe(b,g),a(s);return}if(f=="deflate"||f=="x-deflate"){let M=d.pipe(new Tn);M.once("data",function(h){(h[0]&15)===8?b=b.pipe(ct.createInflate()):b=b.pipe(ct.createInflateRaw()),s=new Pe(b,g),a(s)}),M.on("end",function(){s||(s=new Pe(b,g),a(s))});return}if(f=="br"&&typeof ct.createBrotliDecompress=="function"){b=b.pipe(ct.createBrotliDecompress()),s=new Pe(b,g),a(s);return}s=new Pe(b,g),a(s)}),Gs(y,r)})}function ru(e,t){let a;e.on("socket",function(n){a=n}),e.on("response",function(n){let r=n.headers;r["transfer-encoding"]==="chunked"&&!r["content-length"]&&n.once("close",function(o){if(a&&a.listenerCount("data")>0&&!o){let i=new Error("Premature close");i.code="ERR_STREAM_PREMATURE_CLOSE",t(i)}})})}function vr(e,t){e.destroy?e.destroy(t):(e.emit("error",t),e.end())}at.isRedirect=function(e){return e===301||e===302||e===303||e===307||e===308};at.Promise=global.Promise;kn.exports=ve=at;Object.defineProperty(ve,"__esModule",{value:!0});ve.default=ve;ve.Headers=Ee;ve.Request=rt;ve.Response=Pe;ve.FetchError=ee;ve.AbortError=vt});var na=U((yt,jn)=>{var ra=Fn(),nu=ra.default||ra,va=function(e,t){return/^\/\//.test(e)&&(e="https:"+e),nu.call(this,e,t)};va.ponyfill=!0;jn.exports=yt=va;yt.fetch=va;yt.Headers=ra.Headers;yt.Request=ra.Request;yt.Response=ra.Response;yt.default=va});var Lr=U(Ta=>{"use strict";Object.defineProperty(Ta,"__esModule",{value:!0});Ta.isJSON=void 0;function ou(e){if(e){let t=su(e);if(!t)return!1;if(t.subtype==="json"||t.suffix==="json"||t.suffix&&/\bjson\b/i.test(t.suffix)||t.subtype&&/\bjson\b/i.test(t.subtype))return!0}return!1}Ta.isJSON=ou;var iu=/^([A-Za-z0-9][A-Za-z0-9!#$&^_-]{0,126})\/([A-Za-z0-9][A-Za-z0-9!#$&^_.+-]{0,126});?$/;function su(e){let t=e.indexOf(";"),a=t!==-1?e.slice(0,t).trim():e.trim(),n=iu.exec(a.toLowerCase().toLowerCase());if(!n)return;let r=n[1],o=n[2],u,i=o.lastIndexOf("+");return i!==-1&&(u=o.substring(i+1),o=o.substring(0,i)),{type:r,subtype:o,suffix:u}}});var $n=U(wa=>{"use strict";Object.defineProperty(wa,"__esModule",{value:!0});wa.useFetch=void 0;var wt=require("react"),uu=Zt(),zn=He(),Hn=na(),pu=Lr(),Gn=et();async function lu(e){if(!e.ok)throw new Error(e.statusText);let t=e.headers.get("content-type");return t&&(0,pu.isJSON)(t)?await e.json():await e.text()}function cu(e){return{data:e,hasMore:!1}}function yu(e,t){let{parseResponse:a,mapResult:n,initialData:r,execute:o,keepPreviousData:u,onError:i,onData:s,onWillExecute:p,failureToastOptions:l,...y}=t||{},S={initialData:r,execute:o,keepPreviousData:u,onError:i,onData:s,onWillExecute:p,failureToastOptions:l},R=(0,zn.useLatest)(a||lu),d=(0,zn.useLatest)(n||cu),I=(0,wt.useRef)(),b=(0,wt.useRef)(),g=typeof e=="function"?e({page:0}):void 0;(!I.current||typeof b.current>"u"||b.current!==g)&&(I.current=e),b.current=g;let f=(0,wt.useRef)(),E=(0,wt.useCallback)((C,T)=>async j=>{let te=await(0,Hn.fetch)(C(j),{signal:f.current?.signal,...T}),W=await R.current(te);return d.current?.(W)},[R,d]),M=(0,wt.useCallback)(async(C,T)=>{let j=await(0,Hn.fetch)(C,{signal:f.current?.signal,...T}),te=await R.current(j);return d.current(te)?.data},[R,d]),h=(0,wt.useMemo)(()=>b.current?E:M,[b,M,E]);return(0,uu.useCachedPromise)(h,[I.current,y],{...S,internal_cacheKeySuffix:b.current+(0,Gn.hash)(d.current)+(0,Gn.hash)(R.current),abortable:f})}wa.useFetch=yu});var Oa=U(Ce=>{"use strict";var du=Ce&&Ce.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Ce,"__esModule",{value:!0});Ce.defaultParsing=Ce.handleOutput=Ce.getSpawnedResult=Ce.getSpawnedPromise=void 0;var Su=require("node:buffer"),Kn=du(require("node:stream")),bu=require("node:util"),Iu=require("signal-exit");function gu(e,{timeout:t}={}){let a=new Promise((i,s)=>{e.on("exit",(p,l)=>{i({exitCode:p,signal:l,timedOut:!1})}),e.on("error",p=>{s(p)}),e.stdin&&e.stdin.on("error",p=>{s(p)})});if(t===0||t===void 0)return a;let n,r=new Promise((i,s)=>{n=setTimeout(()=>{e.kill("SIGTERM"),s(Object.assign(new Error("Timed out"),{timedOut:!0,signal:"SIGTERM"}))},t)}),o=a.finally(()=>{clearTimeout(n)}),u=(0,Iu.onExit)(()=>{e.kill()});return Promise.race([r,o]).finally(()=>u())}Ce.getSpawnedPromise=gu;var Nr=class extends Error{constructor(){super("The output is too big"),this.name="MaxBufferError"}},Mu=(0,bu.promisify)(Kn.default.pipeline);function mu(e){let{encoding:t}=e,a=t==="buffer",n=new Kn.default.PassThrough({objectMode:!1});t&&t!=="buffer"&&n.setEncoding(t);let r=0,o=[];return n.on("data",u=>{o.push(u),r+=u.length}),n.getBufferedValue=()=>a?Buffer.concat(o,r):o.join(""),n.getBufferedLength=()=>r,n}async function Qn(e,t){let a=mu(t);return await new Promise((n,r)=>{let o=u=>{u&&a.getBufferedLength()<=Su.constants.MAX_LENGTH&&(u.bufferedData=a.getBufferedValue()),r(u)};(async()=>{try{await Mu(e,a),n()}catch(u){o(u)}})(),a.on("data",()=>{a.getBufferedLength()>1e3*1e3*80&&o(new Nr)})}),a.getBufferedValue()}async function Wn(e,t){e.destroy();try{return await t}catch(a){return a.bufferedData}}async function Ru({stdout:e,stderr:t},{encoding:a},n){let r=Qn(e,{encoding:a}),o=Qn(t,{encoding:a});try{return await Promise.all([n,r,o])}catch(u){return Promise.all([{error:u,exitCode:null,signal:u.signal,timedOut:u.timedOut||!1},Wn(e,r),Wn(t,o)])}}Ce.getSpawnedResult=Ru;function Au(e){let t=typeof e=="string"?`
`:10,a=typeof e=="string"?"\r":13;return e[e.length-1]===t&&(e=e.slice(0,-1)),e[e.length-1]===a&&(e=e.slice(0,-1)),e}function fu(e,t){return e.stripFinalNewline?Au(t):t}Ce.handleOutput=fu;var Pu=({timedOut:e,timeout:t,signal:a,exitCode:n})=>e?`timed out after ${t} milliseconds`:a!=null?`was killed with ${a}`:n!=null?`failed with exit code ${n}`:"failed",Eu=({stdout:e,stderr:t,error:a,signal:n,exitCode:r,command:o,timedOut:u,options:i,parentError:s})=>{let l=`Command ${Pu({timedOut:u,timeout:i?.timeout,signal:n,exitCode:r})}: ${o}`,y=a?`${l}
${a.message}`:l,S=[y,t,e].filter(Boolean).join(`
`);return a?a.originalMessage=a.message:a=s,a.message=S,a.shortMessage=y,a.command=o,a.exitCode=r,a.signal=n,a.stdout=e,a.stderr=t,"bufferedData"in a&&delete a.bufferedData,a};function Cu({stdout:e,stderr:t,error:a,exitCode:n,signal:r,timedOut:o,command:u,options:i,parentError:s}){if(a||n!==0||r!==null)throw Eu({error:a,exitCode:n,signal:r,stdout:e,stderr:t,command:u,timedOut:o,options:i,parentError:s});return e}Ce.defaultParsing=Cu});var Jn=U(Ot=>{"use strict";var hu=Ot&&Ot.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Ot,"__esModule",{value:!0});Ot.useExec=void 0;var Du=hu(require("node:child_process")),Yn=require("react"),xu=Zt(),_u=He(),oa=Oa(),Uu=/ +/g;function vu(e,t){if(t)return[e,...t];let a=[];for(let n of e.trim().split(Uu)){let r=a[a.length-1];r&&r.endsWith("\\")?a[a.length-1]=`${r.slice(0,-1)} ${n}`:a.push(n)}return a}function Tu(e,t,a){let{parseOutput:n,input:r,onData:o,onWillExecute:u,initialData:i,execute:s,keepPreviousData:p,onError:l,failureToastOptions:y,...S}=Array.isArray(t)?a||{}:t||{},R={initialData:i,execute:s,keepPreviousData:p,onError:l,onData:o,onWillExecute:u,failureToastOptions:y},d=(0,Yn.useRef)(),I=(0,_u.useLatest)(n||oa.defaultParsing),b=(0,Yn.useCallback)(async(g,f,E,M)=>{let[h,...C]=vu(g,f),T=[h,...C].join(" "),j={stripFinalNewline:!0,...E,timeout:E?.timeout||1e4,signal:d.current?.signal,encoding:E?.encoding===null?"buffer":E?.encoding||"utf8",env:{PATH:"/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin",...process.env,...E?.env}},te=Du.default.spawn(h,C,j),W=(0,oa.getSpawnedPromise)(te,j);M&&te.stdin.end(M);let[{error:k,exitCode:re,signal:ne,timedOut:x},Z,_]=await(0,oa.getSpawnedResult)(te,j,W),X=(0,oa.handleOutput)(j,Z),pe=(0,oa.handleOutput)(j,_);return I.current({stdout:X,stderr:pe,error:k,exitCode:re,signal:ne,timedOut:x,command:T,options:j,parentError:new Error})},[I]);return(0,xu.useCachedPromise)(b,[e,Array.isArray(t)?t:[],S,r],{...R,abortable:d})}Ot.useExec=Tu});var to=U(Bt=>{"use strict";var qa=Bt&&Bt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Bt,"__esModule",{value:!0});Bt.useStreamJSON=void 0;var wu=require("@raycast/api"),Zn=qa(na()),ua=require("node:fs"),Vr=require("node:fs/promises"),Ba=require("node:path"),Xn=require("node:stream/promises"),ia=require("react"),Ou=qa(require("stream-chain")),Bu=require("stream-json"),qu=qa(require("stream-json/filters/Pick")),Lu=qa(require("stream-json/streamers/StreamArray")),eo=Lr(),Nu=Zt(),Vu=et();async function sa(e,t,a){if(typeof e=="object"||e.startsWith("http://")||e.startsWith("https://"))return await ku(e,t,a);if(e.startsWith("file://"))return await Fu((0,Ba.normalize)(decodeURIComponent(new URL(e).pathname)),t,a?.signal?a.signal:void 0);throw new Error("Only HTTP(S) or file URLs are supported")}async function ku(e,t,a){let n=await(0,Zn.default)(e,a);if(!n.ok)throw new Error("Failed to fetch URL");if(!(0,eo.isJSON)(n.headers.get("content-type")))throw new Error("URL does not return JSON");if(!n.body)throw new Error("Failed to retrieve expected JSON content: Response body is missing or inaccessible.");await(0,Xn.pipeline)(n.body,(0,ua.createWriteStream)(t),a?.signal?{signal:a.signal}:void 0)}async function Fu(e,t,a){await(0,Xn.pipeline)((0,ua.createReadStream)(e),(0,ua.createWriteStream)(t),a?{signal:a}:void 0)}async function ju(e,t,a,n,r){let o=(0,Ba.join)(t,a);try{await(0,Vr.stat)(t)}catch{(0,ua.mkdirSync)(t,{recursive:!0}),await sa(e,o,r);return}if(n){await sa(e,o,r);return}let u;try{u=await(0,Vr.stat)(o)}catch{await sa(e,o,r);return}if(typeof e=="object"||e.startsWith("http://")||e.startsWith("https://")){let i=await(0,Zn.default)(e,{...r,method:"HEAD"});if(!i.ok)throw new Error("Could not fetch URL");if(!(0,eo.isJSON)(i.headers.get("content-type")))throw new Error("URL does not return JSON");let s=Date.parse(i.headers.get("last-modified")??"");if(u.size===0||Number.isNaN(s)||s>u.mtimeMs){await sa(e,o,r);return}}else if(e.startsWith("file://"))try{(await(0,Vr.stat)((0,Ba.normalize)(decodeURIComponent(new URL(e).pathname)))).mtimeMs>u.mtimeMs&&await sa(e,o,r)}catch{throw new Error("Source file could not be read")}else throw new Error("Only HTTP(S) or file URLs are supported")}async function*zu(e,t,a,n,r,o){let u=[],i=new Ou.default([(0,ua.createReadStream)(e),n?qu.default.withParser({filter:n}):(0,Bu.parser)(),new Lu.default,s=>o?.(s.value)??s.value]);a?.addEventListener("abort",()=>{i.destroy()});try{for await(let s of i){if(a?.aborted)return[];(!r||r(s))&&u.push(s),u.length>=t&&(yield u,u=[])}}catch(s){throw i.destroy(),s}return u.length>0&&(yield u),[]}function Hu(e,t){let{initialData:a,execute:n,keepPreviousData:r,onError:o,onData:u,onWillExecute:i,failureToastOptions:s,dataPath:p,filter:l,transform:y,pageSize:S=20,...R}=t??{},d=(0,ia.useRef)(),I=(0,ia.useRef)(),b={initialData:a,execute:n,keepPreviousData:r,onError:o,onData:u,onWillExecute:i,failureToastOptions:s},g=(0,ia.useRef)(null),f=(0,ia.useRef)(null),E=(0,ia.useRef)(!1);return(0,Nu.useCachedPromise)((M,h,C,T,j,te)=>async({page:W})=>{let k=(0,Vu.hash)(M)+".json",re=wu.environment.supportPath;if(W===0){f.current?.abort(),f.current=new AbortController;let Z=(0,Ba.join)(re,k),_=!!(d.current&&d.current!==M&&I.current&&I.current===Z);d.current=M,I.current=Z,await ju(M,re,k,_,{...C,signal:f.current?.signal}),g.current=zu(Z,h,f.current?.signal,T,j,te)}if(!g.current)return{hasMore:E.current,data:[]};let{value:ne,done:x}=await g.current.next();return E.current=!x,{hasMore:E.current,data:ne??[]}},[e,S,R,p,l,y],b)}Bt.useStreamJSON=Hu});var Fr=U(qe=>{"use strict";var kr=qe&&qe.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(qe,"__esModule",{value:!0});qe.baseExecuteSQL=qe.isPermissionError=qe.PermissionError=void 0;var Gu=require("node:fs"),La=require("node:fs/promises"),$u=kr(require("node:os")),ao=kr(require("node:child_process")),ro=kr(require("node:path")),Na=Oa(),Qu=et(),ka=class extends Error{constructor(t){super(t),this.name="PermissionError"}};qe.PermissionError=ka;function Wu(e){return e instanceof Error&&e.name==="PermissionError"}qe.isPermissionError=Wu;async function Ku(e,t,a){if(!(0,Gu.existsSync)(e))throw new Error("The database does not exist");let n=a?.signal,r,o=ao.default.spawn("sqlite3",["--json","--readonly",e,t],{signal:n}),u=(0,Na.getSpawnedPromise)(o),[{error:i,exitCode:s,signal:p},l,y]=await(0,Na.getSpawnedResult)(o,{encoding:"utf-8"},u);if(Va(n),y.match("(5)")||y.match("(14)")){if(!r){let S=ro.default.join($u.default.tmpdir(),"useSQL",(0,Qu.hash)(e));await(0,La.mkdir)(S,{recursive:!0}),Va(n),r=ro.default.join(S,"db.db"),await(0,La.copyFile)(e,r),await(0,La.writeFile)(r+"-shm",""),await(0,La.writeFile)(r+"-wal",""),Va(n)}o=ao.default.spawn("sqlite3",["--json","--readonly","--vfs","unix-none",r,t],{signal:n}),u=(0,Na.getSpawnedPromise)(o),[{error:i,exitCode:s,signal:p},l,y]=await(0,Na.getSpawnedResult)(o,{encoding:"utf-8"},u),Va(n)}if(i||s!==0||p!==null)throw y.includes("authorization denied")?new ka("You do not have permission to access the database."):new Error(y||"Unknown error");return JSON.parse(l.trim()||"[]")}qe.baseExecuteSQL=Ku;function Va(e){if(e?.aborted){let t=new Error("aborted");throw t.name="AbortError",t}}});var oo=U(qt=>{"use strict";var Yu=qt&&qt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(qt,"__esModule",{value:!0});qt.useSQL=void 0;var Le=require("react/jsx-runtime"),oe=require("@raycast/api"),Ju=require("node:fs"),Zu=Yu(require("node:os")),Fa=require("react"),Xu=Dt(),ep=He(),tp=Kt(),jr=Fr();function ap(e,t,a){let{permissionPriming:n,...r}=a||{},[o,u]=(0,Fa.useState)(),i=(0,ep.useLatest)(a||{}),s=(0,Fa.useRef)(),p=(0,Fa.useCallback)(y=>{console.error(y);let S=y instanceof Error&&y.message.includes("authorization denied")?new jr.PermissionError("You do not have permission to access the database."):y;(0,jr.isPermissionError)(S)?u((0,Le.jsx)(rp,{priming:i.current.permissionPriming})):i.current.onError?i.current.onError(S):oe.environment.launchType!==oe.LaunchType.Background&&(0,tp.showFailureToast)(S,{title:"Cannot query the data"})},[i]),l=(0,Fa.useMemo)(()=>{if(!(0,Ju.existsSync)(e))throw new Error("The database does not exist");return async(y,S)=>{let R=s.current?.signal;return(0,jr.baseExecuteSQL)(y,S,{signal:R})}},[e]);return{...(0,Xu.usePromise)(l,[e,t],{...r,onError:p}),permissionView:o}}qt.useSQL=ap;var no=parseInt(Zu.default.release().split(".")[0])>=22,zr=no?"Settings":"Preferences";function rp(e){let t=no?{title:"Open System Settings -> Privacy",target:"x-apple.systempreferences:com.apple.preference.security?Privacy_AllFiles"}:{title:"Open System Preferences -> Security",target:"x-apple.systempreferences:com.apple.preference.security?Privacy_AllFiles"};return oe.environment.commandMode==="menu-bar"?(0,Le.jsxs)(oe.MenuBarExtra,{icon:oe.Icon.Warning,title:oe.environment.commandName,children:[(0,Le.jsx)(oe.MenuBarExtra.Item,{title:"Raycast needs full disk access",tooltip:`You can revert this access in ${zr} whenever you want`}),e.priming?(0,Le.jsx)(oe.MenuBarExtra.Item,{title:e.priming,tooltip:`You can revert this access in ${zr} whenever you want`}):null,(0,Le.jsx)(oe.MenuBarExtra.Separator,{}),(0,Le.jsx)(oe.MenuBarExtra.Item,{title:t.title,onAction:()=>(0,oe.open)(t.target)})]}):(0,Le.jsx)(oe.List,{children:(0,Le.jsx)(oe.List.EmptyView,{icon:{source:{light:"https://raycast.com/uploads/extensions-utils-security-permissions-light.png",dark:"https://raycast.com/uploads/extensions-utils-security-permissions-dark.png"}},title:"Raycast needs full disk access.",description:`${e.priming?e.priming+`
`:""}You can revert this access in ${zr} whenever you want.`,actions:(0,Le.jsx)(oe.ActionPanel,{children:(0,Le.jsx)(oe.Action.Open,{...t})})})})}});var so=U(Lt=>{"use strict";Object.defineProperty(Lt,"__esModule",{value:!0});Lt.useForm=Lt.FormValidation=void 0;var We=require("react"),io=He(),Gr;(function(e){e.Required="required"})(Gr||(Lt.FormValidation=Gr={}));function Hr(e,t){if(e){if(typeof e=="function")return e(t);if(e===Gr.Required){let a=typeof t<"u"&&t!==null;if(a)switch(typeof t){case"string":a=t.length>0;break;case"object":Array.isArray(t)?a=t.length>0:t instanceof Date&&(a=t.getTime()>0);break;default:break}if(!a)return"The item is required"}}}function np(e){let{onSubmit:t,validation:a,initialValues:n={}}=e,[r,o]=(0,We.useState)(n),[u,i]=(0,We.useState)({}),s=(0,We.useRef)({}),p=(0,io.useLatest)(a||{}),l=(0,io.useLatest)(t),y=(0,We.useCallback)(g=>{s.current[g]?.focus()},[s]),S=(0,We.useCallback)(async g=>{let f=!1;for(let[M,h]of Object.entries(p.current)){let C=Hr(h,g[M]);C&&(f||(f={},y(M)),f[M]=C)}if(f)return i(f),!1;let E=await l.current(g);return typeof E=="boolean"?E:!0},[p,l,y]),R=(0,We.useCallback)((g,f)=>{i(E=>({...E,[g]:f}))},[i]),d=(0,We.useCallback)(function(g,f){o(E=>({...E,[g]:typeof f=="function"?f(E[g]):f}))},[o]),I=(0,We.useMemo)(()=>new Proxy({},{get(g,f){let E=p.current[f],M=r[f];return{onChange(h){u[f]&&(Hr(E,h)||R(f,void 0)),d(f,h)},onBlur(h){let C=Hr(E,h.target.value);C&&R(f,C)},error:u[f],id:f,value:typeof M>"u"?null:M,ref:h=>{s.current[f]=h}}}}),[u,p,R,r,s,d]),b=(0,We.useCallback)(g=>{i({}),Object.entries(s.current).forEach(([f,E])=>{g?.[f]||E?.reset()}),g&&o(g)},[o,i,s]);return{handleSubmit:S,setValidationError:R,setValue:d,values:r,itemProps:I,focus:y,reset:b}}Lt.useForm=np});var po=U(ja=>{"use strict";Object.defineProperty(ja,"__esModule",{value:!0});ja.useAI=void 0;var uo=require("react"),op=require("@raycast/api"),ip=Dt();function sp(e,t={}){let{creativity:a,stream:n,model:r,...o}=t,[u,i]=(0,uo.useState)(""),s=(0,uo.useRef)(),{isLoading:p,error:l,revalidate:y}=(0,ip.usePromise)(async(S,R,d)=>{i("");let I=op.AI.ask(S,{creativity:R,model:r,signal:s.current?.signal});d===!1?i(await I):(I.on("data",b=>{i(g=>g+b)}),await I)},[e,a,n],{...o,abortable:s});return{isLoading:p,data:u,error:l,revalidate:y}}ja.useAI=sp});var yo=U(za=>{"use strict";Object.defineProperty(za,"__esModule",{value:!0});za.useFrecencySorting=void 0;var $r=require("react"),lo=He(),up=Da(),pp=10,co=1440*60*1e3,lp=Math.log(2)/(pp*co),cp={Default:100,Embed:0,Bookmark:140};function yp(e){let t=Date.now(),a=e?e.lastVisited:0,n=e?e.frecency:0,r=(t-a)/co,o=cp.Default*Math.exp(-lp*r),u=n+o;return{lastVisited:t,frecency:u}}var dp=e=>{if(process.env.NODE_ENV!=="production"&&(typeof e!="object"||!e||!("id"in e)||typeof e.id!="string"))throw new Error("Specify a key function or make sure your items have an 'id' property");return e.id};function Sp(e,t){let a=(0,lo.useLatest)(t?.key||dp),n=(0,lo.useLatest)(t?.sortUnvisited),[r,o]=(0,up.useCachedState)(`raycast_frecency_${t?.namespace}`,{}),u=(0,$r.useCallback)(async function(l){let y=a.current(l);o(S=>{let R=S[y],d=yp(R);return{...S,[y]:d}})},[a,o]),i=(0,$r.useCallback)(async function(l){let y=a.current(l);o(S=>{let R={...S};return delete R[y],R})},[a,o]);return{data:(0,$r.useMemo)(()=>e?e.sort((p,l)=>{let y=r[a.current(p)],S=r[a.current(l)];return y&&!S?-1:!y&&S?1:y&&S?S.frecency-y.frecency:n.current?n.current(p,l):0}):[],[r,e,a,n]),visitItem:u,resetRanking:i}}za.useFrecencySorting=Sp});var Io=U(Ha=>{"use strict";Object.defineProperty(Ha,"__esModule",{value:!0});Ha.useLocalStorage=void 0;var Qr=require("@raycast/api"),So=Kt(),bo=et(),bp=Dt();function Ip(e,t){let{data:a,isLoading:n,mutate:r}=(0,bp.usePromise)(async i=>{let s=await Qr.LocalStorage.getItem(i);return typeof s<"u"?JSON.parse(s,bo.reviver):t},[e]);async function o(i){try{await r(Qr.LocalStorage.setItem(e,JSON.stringify(i,bo.replacer)),{optimisticUpdate(s){return s}})}catch(s){await(0,So.showFailureToast)(s,{title:"Failed to set value in local storage"})}}async function u(){try{await r(Qr.LocalStorage.removeItem(e),{optimisticUpdate(){}})}catch(i){await(0,So.showFailureToast)(i,{title:"Failed to remove value from local storage"})}}return{value:a,setValue:o,removeValue:u,isLoading:n}}Ha.useLocalStorage=Ip});var Ao=U(Nt=>{"use strict";Object.defineProperty(Nt,"__esModule",{value:!0});Nt.slightlyLighterColor=Nt.slightlyDarkerColor=void 0;function gp(e){let t=0,a=0,n=0;if(e.length===4)t=parseInt(`${e[1]}${e[1]}`,16),a=parseInt(`${e[2]}${e[2]}`,16),n=parseInt(`${e[3]}${e[3]}`,16);else if(e.length===7)t=parseInt(`${e[1]}${e[2]}`,16),a=parseInt(`${e[3]}${e[4]}`,16),n=parseInt(`${e[5]}${e[6]}`,16);else throw new Error(`Malformed hex color: ${e}`);return{r:t,g:a,b:n}}function Mp({r:e,g:t,b:a}){let n=e.toString(16),r=t.toString(16),o=a.toString(16);return n.length===1&&(n=`0${n}`),r.length===1&&(r=`0${r}`),o.length===1&&(o=`0${o}`),`#${n}${r}${o}`}function mp({r:e,g:t,b:a}){e/=255,t/=255,a/=255;let n=Math.min(e,t,a),r=Math.max(e,t,a),o=r-n,u=0,i=0,s=0;return o===0?u=0:r===e?u=(t-a)/o%6:r===t?u=(a-e)/o+2:u=(e-t)/o+4,u=Math.round(u*60),u<0&&(u+=360),s=(r+n)/2,i=o===0?0:o/(1-Math.abs(2*s-1)),i=+(i*100).toFixed(1),s=+(s*100).toFixed(1),{h:u,s:i,l:s}}function Rp({h:e,s:t,l:a}){t/=100,a/=100;let n=(1-Math.abs(2*a-1))*t,r=n*(1-Math.abs(e/60%2-1)),o=a-n/2,u=0,i=0,s=0;return e>=0&&e<60?(u=n,i=r,s=0):e>=60&&e<120?(u=r,i=n,s=0):e>=120&&e<180?(u=0,i=n,s=r):e>=180&&e<240?(u=0,i=r,s=n):e>=240&&e<300?(u=r,i=0,s=n):e>=300&&e<360&&(u=n,i=0,s=r),u=Math.round((u+o)*255),i=Math.round((i+o)*255),s=Math.round((s+o)*255),{r:u,g:i,b:s}}function go(e){return mp(gp(e))}function Mo(e){return Mp(Rp(e))}function mo(e,t,a){return t<a?e<t?t:e>a?a:e:e<a?a:e>t?t:e}var Ro=12;function Ap(e){let t=go(e);return Mo({h:t.h,s:t.s,l:mo(t.l-Ro,0,100)})}Nt.slightlyDarkerColor=Ap;function fp(e){let t=go(e);return Mo({h:t.h,s:t.s,l:mo(t.l+Ro,0,100)})}Nt.slightlyLighterColor=fp});var Eo=U(Ga=>{"use strict";Object.defineProperty(Ga,"__esModule",{value:!0});Ga.getAvatarIcon=void 0;var fo=Ao();function Vt(e,t){let a=e.charCodeAt(t);if(Number.isNaN(a))return["",t];if(a<55296||a>57343)return[e.charAt(t),t];if(55296<=a&&a<=56319){if(e.length<=t+1)throw new Error("High surrogate without following low surrogate");let r=e.charCodeAt(t+1);if(56320>r||r>57343)throw new Error("High surrogate without following low surrogate");return[e.charAt(t)+e.charAt(t+1),t+1]}if(t===0)throw new Error("Low surrogate without preceding high surrogate");let n=e.charCodeAt(t-1);if(55296>n||n>56319)throw new Error("Low surrogate without preceding high surrogate");return[e.charAt(t+1),t+1]}var Po=["#DC829A","#D64854","#D47600","#D36CDD","#52A9E4","#7871E8","#70920F","#43B93A","#EB6B3E","#26B795","#D85A9B","#A067DC","#BD9500","#5385D9"];function Pp(e,t){let a=e.trim().split(" "),n;if(a.length==1&&Vt(a[0],0)[0])n=Vt(a[0],0)[0];else if(a.length>1){let s=Vt(a[0],0)[0]||"",p=Vt(a[a.length-1],0)[0]??"";n=s+p}else n="";let r;if(t?.background)r=t?.background;else{let s=0,[p,l]=Vt(n,0);for(;p;)s+=p.charCodeAt(0),[p,l]=Vt(n,l+1);let y=s%Po.length;r=Po[y]}let u=50-0;return`data:image/svg+xml,${`<svg width="100px" height="100px">
  ${t?.gradient!==!1?`<defs>
      <linearGradient id="Gradient" x1="0.25" x2="0.75" y1="0" y2="1">
        <stop offset="0%" stop-color="${(0,fo.slightlyLighterColor)(r)}"/>
        <stop offset="50%" stop-color="${r}"/>
        <stop offset="100%" stop-color="${(0,fo.slightlyDarkerColor)(r)}"/>
      </linearGradient>
  </defs>`:""}
      <circle cx="50" cy="50" r="${u}" fill="${t?.gradient!==!1?"url(#Gradient)":r}" />
      ${n?`<text x="50" y="80" font-size="${u-1}" font-family="Inter, sans-serif" text-anchor="middle" fill="white">${n.toUpperCase()}</text>`:""}
    </svg>
  `.replaceAll(`
`,"")}`}Ga.getAvatarIcon=Pp});var ho=U($a=>{"use strict";Object.defineProperty($a,"__esModule",{value:!0});$a.getFavicon=void 0;var Co=require("@raycast/api"),Ep=require("url");function Cp(e,t){try{let n=(typeof e=="string"?new Ep.URL(e):e).hostname;return{source:`https://www.google.com/s2/favicons?sz=${t?.size??64}&domain=${n}`,fallback:t?.fallback??Co.Icon.Link,mask:t?.mask}}catch(a){return console.error(a),Co.Icon.Link}}$a.getFavicon=Cp});var _o=U(Qa=>{"use strict";Object.defineProperty(Qa,"__esModule",{value:!0});Qa.getProgressIcon=void 0;var Do=require("@raycast/api");function xo(e,t,a,n){let r=(n-90)*Math.PI/180;return{x:e+a*Math.cos(r),y:t+a*Math.sin(r)}}function hp(e,t,a,n,r){let o=xo(e,t,a,r),u=xo(e,t,a,n),i=r-n<=180?"0":"1";return["M",o.x,o.y,"A",a,a,0,i,0,u.x,u.y].join(" ")}function Dp(e,t=Do.Color.Red,a){let n=a?.background||(Do.environment.appearance==="light"?"black":"white"),r=a?.backgroundOpacity||.1,o=10,i=50-5-o/2;return`data:image/svg+xml,${`<svg width="100px" height="100px">
      <circle cx="50" cy="50" r="${i}" stroke-width="${o}" stroke="${e<1?n:t}" opacity="${e<1?r:"1"}" fill="none" />
      ${e>0&&e<1?`<path d="${hp(50,50,i,0,e*360)}" stroke="${t}" stroke-width="${o}" fill="none" />`:""}
    </svg>
  `.replaceAll(`
`,"")}`}Qa.getProgressIcon=Dp});var Uo=U(Ke=>{"use strict";var xp=Ke&&Ke.__createBinding||(Object.create?(function(e,t,a,n){n===void 0&&(n=a);var r=Object.getOwnPropertyDescriptor(t,a);(!r||("get"in r?!t.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,r)}):(function(e,t,a,n){n===void 0&&(n=a),e[n]=t[a]})),Wr=Ke&&Ke.__exportStar||function(e,t){for(var a in e)a!=="default"&&!Object.prototype.hasOwnProperty.call(t,a)&&xp(t,e,a)};Object.defineProperty(Ke,"__esModule",{value:!0});Wr(Eo(),Ke);Wr(ho(),Ke);Wr(_o(),Ke)});var vo=U(ae=>{"use strict";Object.defineProperty(ae,"__esModule",{value:!0});ae.zoomService=ae.slackService=ae.linearService=ae.jiraService=ae.googleService=ae.githubService=ae.asanaService=void 0;var ie=require("@raycast/api"),dt=Kr(),Wa={asana:"1191201745684312",github:"7235fe8d42157f1f38c0",linear:"c8ff37b9225c3c9aefd7d66ea0e5b6f1",slack:"851756884692.5546927290212"},nt=e=>`data:image/svg+xml,${e}`,St={asana:nt('<svg xmlns="http://www.w3.org/2000/svg" width="251" height="232" fill="none"><path fill="#F06A6A" d="M179.383 54.373c0 30.017-24.337 54.374-54.354 54.374-30.035 0-54.373-24.338-54.373-54.374C70.656 24.338 94.993 0 125.029 0c30.017 0 54.354 24.338 54.354 54.373ZM54.393 122.33C24.376 122.33.02 146.668.02 176.685c0 30.017 24.337 54.373 54.373 54.373 30.035 0 54.373-24.338 54.373-54.373 0-30.017-24.338-54.355-54.373-54.355Zm141.253 0c-30.035 0-54.373 24.338-54.373 54.374 0 30.035 24.338 54.373 54.373 54.373 30.017 0 54.374-24.338 54.374-54.373 0-30.036-24.338-54.374-54.374-54.374Z"/></svg>'),github:{source:nt('<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>'),tintColor:ie.Color.PrimaryText},google:nt('<svg xmlns="http://www.w3.org/2000/svg" style="display:block" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/><path fill="none" d="M0 0h48v48H0z"/></svg>'),jira:nt('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="2361" height="2500" viewBox="2.59 0 214.091 224"><linearGradient id="a" x1="102.4" x2="56.15" y1="218.63" y2="172.39" gradientTransform="matrix(1 0 0 -1 0 264)" gradientUnits="userSpaceOnUse"><stop offset=".18" stop-color="#0052cc"/><stop offset="1" stop-color="#2684ff"/></linearGradient><linearGradient xlink:href="#a" id="b" x1="114.65" x2="160.81" y1="85.77" y2="131.92"/><path fill="#2684ff" d="M214.06 105.73 117.67 9.34 108.33 0 35.77 72.56 2.59 105.73a8.89 8.89 0 0 0 0 12.54l66.29 66.29L108.33 224l72.55-72.56 1.13-1.12 32.05-32a8.87 8.87 0 0 0 0-12.59zm-105.73 39.39L75.21 112l33.12-33.12L141.44 112z"/><path fill="url(#a)" d="M108.33 78.88a55.75 55.75 0 0 1-.24-78.61L35.62 72.71l39.44 39.44z"/><path fill="url(#b)" d="m141.53 111.91-33.2 33.21a55.77 55.77 0 0 1 0 78.86L181 151.35z"/></svg>'),linear:{source:{light:nt('<svg xmlns="http://www.w3.org/2000/svg" fill="#222326" width="200" height="200" viewBox="0 0 100 100"><path d="M1.22541 61.5228c-.2225-.9485.90748-1.5459 1.59638-.857L39.3342 97.1782c.6889.6889.0915 1.8189-.857 1.5964C20.0515 94.4522 5.54779 79.9485 1.22541 61.5228ZM.00189135 46.8891c-.01764375.2833.08887215.5599.28957165.7606L52.3503 99.7085c.2007.2007.4773.3075.7606.2896 2.3692-.1476 4.6938-.46 6.9624-.9259.7645-.157 1.0301-1.0963.4782-1.6481L2.57595 39.4485c-.55186-.5519-1.49117-.2863-1.648174.4782-.465915 2.2686-.77832 4.5932-.92588465 6.9624ZM4.21093 29.7054c-.16649.3738-.08169.8106.20765 1.1l64.77602 64.776c.2894.2894.7262.3742 1.1.2077 1.7861-.7956 3.5171-1.6927 5.1855-2.684.5521-.328.6373-1.0867.1832-1.5407L8.43566 24.3367c-.45409-.4541-1.21271-.3689-1.54074.1832-.99132 1.6684-1.88843 3.3994-2.68399 5.1855ZM12.6587 18.074c-.3701-.3701-.393-.9637-.0443-1.3541C21.7795 6.45931 35.1114 0 49.9519 0 77.5927 0 100 22.4073 100 50.0481c0 14.8405-6.4593 28.1724-16.7199 37.3375-.3903.3487-.984.3258-1.3542-.0443L12.6587 18.074Z"/></svg>'),dark:nt('<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="200" height="200" viewBox="0 0 100 100"><path d="M1.22541 61.5228c-.2225-.9485.90748-1.5459 1.59638-.857L39.3342 97.1782c.6889.6889.0915 1.8189-.857 1.5964C20.0515 94.4522 5.54779 79.9485 1.22541 61.5228ZM.00189135 46.8891c-.01764375.2833.08887215.5599.28957165.7606L52.3503 99.7085c.2007.2007.4773.3075.7606.2896 2.3692-.1476 4.6938-.46 6.9624-.9259.7645-.157 1.0301-1.0963.4782-1.6481L2.57595 39.4485c-.55186-.5519-1.49117-.2863-1.648174.4782-.465915 2.2686-.77832 4.5932-.92588465 6.9624ZM4.21093 29.7054c-.16649.3738-.08169.8106.20765 1.1l64.77602 64.776c.2894.2894.7262.3742 1.1.2077 1.7861-.7956 3.5171-1.6927 5.1855-2.684.5521-.328.6373-1.0867.1832-1.5407L8.43566 24.3367c-.45409-.4541-1.21271-.3689-1.54074.1832-.99132 1.6684-1.88843 3.3994-2.68399 5.1855ZM12.6587 18.074c-.3701-.3701-.393-.9637-.0443-1.3541C21.7795 6.45931 35.1114 0 49.9519 0 77.5927 0 100 22.4073 100 50.0481c0 14.8405-6.4593 28.1724-16.7199 37.3375-.3903.3487-.984.3258-1.3542-.0443L12.6587 18.074Z" /></svg>')}},slack:nt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="73 73 124 124"><style>.st0{fill:#e01e5a}.st1{fill:#36c5f0}.st2{fill:#2eb67d}.st3{fill:#ecb22e}</style><path d="M99.4 151.2c0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9h12.9v12.9zM105.9 151.2c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v32.3c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9v-32.3z" class="st0"/><path d="M118.8 99.4c-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v12.9h-12.9zM118.8 105.9c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H86.5c-7.1 0-12.9-5.8-12.9-12.9s5.8-12.9 12.9-12.9h32.3z" class="st1"/><path d="M170.6 118.8c0-7.1 5.8-12.9 12.9-12.9 7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9h-12.9v-12.9zM164.1 118.8c0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9V86.5c0-7.1 5.8-12.9 12.9-12.9 7.1 0 12.9 5.8 12.9 12.9v32.3z" class="st2"/><path d="M151.2 170.6c7.1 0 12.9 5.8 12.9 12.9 0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9v-12.9h12.9zM151.2 164.1c-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9h32.3c7.1 0 12.9 5.8 12.9 12.9 0 7.1-5.8 12.9-12.9 12.9h-32.3z" class="st3"/></svg>'),zoom:nt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 351.845 80"><path d="M73.786 78.835H10.88A10.842 10.842 0 0 1 .833 72.122a10.841 10.841 0 0 1 2.357-11.85L46.764 16.7h-31.23C6.954 16.699 0 9.744 0 1.165h58.014c4.414 0 8.357 2.634 10.046 6.712a10.843 10.843 0 0 1-2.356 11.85L22.13 63.302h36.122c8.58 0 15.534 6.955 15.534 15.534Zm278.059-48.544C351.845 13.588 338.256 0 321.553 0c-8.934 0-16.975 3.89-22.524 10.063C293.48 3.89 285.44 0 276.505 0c-16.703 0-30.291 13.588-30.291 30.291v48.544c8.579 0 15.534-6.955 15.534-15.534v-33.01c0-8.137 6.62-14.757 14.757-14.757s14.757 6.62 14.757 14.757v33.01c0 8.58 6.955 15.534 15.534 15.534V30.291c0-8.137 6.62-14.757 14.757-14.757s14.758 6.62 14.758 14.757v33.01c0 8.58 6.954 15.534 15.534 15.534V30.291ZM238.447 40c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.908-40 40-40 40 17.909 40 40Zm-15.534 0c0-13.512-10.954-24.466-24.466-24.466S173.98 26.488 173.98 40s10.953 24.466 24.466 24.466S222.913 53.512 222.913 40Zm-70.68 0c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.909-40 40-40 40 17.909 40 40Zm-15.534 0c0-13.512-10.954-24.466-24.466-24.466S87.767 26.488 87.767 40s10.954 24.466 24.466 24.466S136.699 53.512 136.699 40Z" style="fill:#0b5cff"/></svg>')},_p=e=>new dt.OAuthService({client:new ie.OAuth.PKCEClient({redirectMethod:ie.OAuth.RedirectMethod.Web,providerName:"Asana",providerIcon:St.asana,providerId:"asana",description:"Connect your Asana account"}),clientId:e.clientId??Wa.asana,authorizeUrl:e.authorizeUrl??"https://asana.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://asana.oauth.raycast.com/token",refreshTokenUrl:e.refreshTokenUrl??"https://asana.oauth.raycast.com/refresh-token",scope:e.scope,personalAccessToken:e.personalAccessToken,onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});ae.asanaService=_p;var Up=e=>new dt.OAuthService({client:new ie.OAuth.PKCEClient({redirectMethod:ie.OAuth.RedirectMethod.Web,providerName:"GitHub",providerIcon:St.github,providerId:"github",description:"Connect your GitHub account"}),clientId:e.clientId??Wa.github,authorizeUrl:e.authorizeUrl??"https://github.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://github.oauth.raycast.com/token",refreshTokenUrl:e.refreshTokenUrl??"https://github.oauth.raycast.com/refresh-token",scope:e.scope,personalAccessToken:e.personalAccessToken,onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});ae.githubService=Up;var vp=e=>new dt.OAuthService({client:new ie.OAuth.PKCEClient({redirectMethod:ie.OAuth.RedirectMethod.AppURI,providerName:"Google",providerIcon:St.google,providerId:"google",description:"Connect your Google account"}),clientId:e.clientId,authorizeUrl:e.authorizeUrl??"https://accounts.google.com/o/oauth2/v2/auth",tokenUrl:e.tokenUrl??"https://oauth2.googleapis.com/token",refreshTokenUrl:e.tokenUrl,scope:e.scope,personalAccessToken:e.personalAccessToken,bodyEncoding:e.bodyEncoding??"url-encoded",onAuthorize:e.onAuthorize,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});ae.googleService=vp;var Tp=e=>new dt.OAuthService({client:new ie.OAuth.PKCEClient({redirectMethod:ie.OAuth.RedirectMethod.Web,providerName:"Jira",providerIcon:St.jira,providerId:"jira",description:"Connect your Jira account"}),clientId:e.clientId,authorizeUrl:e.authorizeUrl??"https://auth.atlassian.com/authorize",tokenUrl:e.tokenUrl??"https://auth.atlassian.com/oauth/token",refreshTokenUrl:e.refreshTokenUrl,scope:e.scope,personalAccessToken:e.personalAccessToken,onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});ae.jiraService=Tp;var wp=e=>new dt.OAuthService({client:new ie.OAuth.PKCEClient({redirectMethod:ie.OAuth.RedirectMethod.Web,providerName:"Linear",providerIcon:St.linear,providerId:"linear",description:"Connect your Linear account"}),clientId:e.clientId??Wa.linear,authorizeUrl:e.authorizeUrl??"https://linear.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://linear.oauth.raycast.com/token",refreshTokenUrl:e.refreshTokenUrl??"https://linear.oauth.raycast.com/refresh-token",scope:e.scope,extraParameters:{actor:"user"},onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});ae.linearService=wp;var Op=e=>new dt.OAuthService({client:new ie.OAuth.PKCEClient({redirectMethod:ie.OAuth.RedirectMethod.Web,providerName:"Slack",providerIcon:St.slack,providerId:"slack",description:"Connect your Slack account"}),clientId:e.clientId??Wa.slack,authorizeUrl:e.authorizeUrl??"https://slack.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://slack.oauth.raycast.com/token",refreshTokenUrl:e.tokenUrl??"https://slack.oauth.raycast.com/refresh-token",scope:"",extraParameters:{user_scope:e.scope},personalAccessToken:e.personalAccessToken,bodyEncoding:e.tokenUrl?e.bodyEncoding??"url-encoded":"json",onAuthorize:e.onAuthorize,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser??(t=>({access_token:t.authed_user.access_token,scope:t.authed_user.scope}))});ae.slackService=Op;var Bp=e=>new dt.OAuthService({client:new ie.OAuth.PKCEClient({redirectMethod:ie.OAuth.RedirectMethod.Web,providerName:"Zoom",providerIcon:St.zoom,providerId:"zoom",description:"Connect your Zoom account"}),clientId:e.clientId,authorizeUrl:e.authorizeUrl??"https://zoom.us/oauth/authorize",tokenUrl:e.tokenUrl??"https://zoom.us/oauth/token",refreshTokenUrl:e.refreshTokenUrl,scope:e.scope,personalAccessToken:e.personalAccessToken,bodyEncoding:e.bodyEncoding??"url-encoded",onAuthorize:e.onAuthorize,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});ae.zoomService=Bp});var Kr=U(kt=>{"use strict";var qp=kt&&kt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(kt,"__esModule",{value:!0});kt.OAuthService=void 0;var To=qp(na()),bt=vo(),Ne=class{constructor(t){this.clientId=t.clientId,this.scope=Array.isArray(t.scope)?t.scope.join(" "):t.scope,this.personalAccessToken=t.personalAccessToken,this.bodyEncoding=t.bodyEncoding,this.client=t.client,this.extraParameters=t.extraParameters,this.authorizeUrl=t.authorizeUrl,this.tokenUrl=t.tokenUrl,this.refreshTokenUrl=t.refreshTokenUrl,this.onAuthorize=t.onAuthorize,this.tokenResponseParser=t.tokenResponseParser??(a=>a),this.tokenRefreshResponseParser=t.tokenRefreshResponseParser??(a=>a),this.authorize=this.authorize.bind(this)}async authorize(){let t=await this.client.getTokens();if(t?.accessToken){if(t.refreshToken&&t.isExpired()){let o=await this.refreshTokens({token:t.refreshToken});if(o)return await this.client.setTokens(o),o.access_token}return t.accessToken}let a=await this.client.authorizationRequest({endpoint:this.authorizeUrl,clientId:this.clientId,scope:this.scope,extraParameters:this.extraParameters}),{authorizationCode:n}=await this.client.authorize(a),r=await this.fetchTokens({authRequest:a,authorizationCode:n});return await this.client.setTokens(r),r.access_token}async fetchTokens({authRequest:t,authorizationCode:a}){let n;if(this.bodyEncoding==="url-encoded"){let u=new URLSearchParams;u.append("client_id",this.clientId),u.append("code",a),u.append("code_verifier",t.codeVerifier),u.append("grant_type","authorization_code"),u.append("redirect_uri",t.redirectURI),n={body:u}}else n={body:JSON.stringify({client_id:this.clientId,code:a,code_verifier:t.codeVerifier,grant_type:"authorization_code",redirect_uri:t.redirectURI}),headers:{"Content-Type":"application/json"}};let r=await(0,To.default)(this.tokenUrl,{method:"POST",...n});if(!r.ok){let u=await r.text();throw console.error("fetch tokens error:",u),new Error(`Error while fetching tokens: ${r.status} (${r.statusText})
${u}`)}let o=this.tokenResponseParser(await r.json());return Array.isArray(o.scope)?{...o,scope:o.scope.join(" ")}:o}async refreshTokens({token:t}){let a;if(this.bodyEncoding==="url-encoded"){let r=new URLSearchParams;r.append("client_id",this.clientId),r.append("refresh_token",t),r.append("grant_type","refresh_token"),a={body:r}}else a={body:JSON.stringify({client_id:this.clientId,refresh_token:t,grant_type:"refresh_token"}),headers:{"Content-Type":"application/json"}};let n=await(0,To.default)(this.refreshTokenUrl??this.tokenUrl,{method:"POST",...a});if(n.ok){let r=this.tokenRefreshResponseParser(await n.json());return r.refresh_token=r.refresh_token??t,r}else{let r=await n.text();console.error("refresh tokens error:",r),this.client.description=`${this.client.providerName} needs you to sign-in again. Press \u23CE or click the button below to continue.`,await this.client.removeTokens(),await this.authorize()}}};kt.OAuthService=Ne;Ne.asana=bt.asanaService;Ne.github=bt.githubService;Ne.google=bt.googleService;Ne.jira=bt.jiraService;Ne.linear=bt.linearService;Ne.slack=bt.slackService;Ne.zoom=bt.zoomService});var wo=U(Ft=>{"use strict";Object.defineProperty(Ft,"__esModule",{value:!0});Ft.getAccessToken=Ft.withAccessToken=void 0;var Lp=require("react/jsx-runtime"),Np=require("@raycast/api"),ot=null,It=null,Yr=null,Jr=null,Zr=null;function Vp(e){return Np.environment.commandMode==="no-view"?t=>async n=>{if(!ot){ot=e.personalAccessToken??await e.authorize(),It=e.personalAccessToken?"personal":"oauth";let r=(await e.client?.getTokens())?.idToken;e.onAuthorize&&await Promise.resolve(e.onAuthorize({token:ot,type:It,idToken:r}))}return t(n)}:t=>{let a=n=>{e.personalAccessToken?(ot=e.personalAccessToken,It="personal"):(Yr||(Yr=Xr(e.authorize())),ot=Yr.read(),It="oauth");let r;return e.client&&(Jr||(Jr=Xr(e.client.getTokens())),r=Jr.read()?.idToken),!Zr&&e.onAuthorize&&(Zr=Xr(Promise.resolve(e.onAuthorize({token:ot,type:It,idToken:r})))),Zr?.read(),(0,Lp.jsx)(t,{...n})};return a.displayName=`withAccessToken(${t.displayName||t.name})`,a}}Ft.withAccessToken=Vp;function kp(){if(!ot||!It)throw new Error("getAccessToken must be used when authenticated (eg. used inside `withAccessToken`)");return{token:ot,type:It}}Ft.getAccessToken=kp;function Xr(e){let t="pending",a,n=e.then(o=>{t="success",a=o},o=>{t="error",a=o});return{read:()=>{switch(t){case"pending":throw n;case"error":throw a;default:return a}}}}});var Bo=U(it=>{"use strict";var Fp=it&&it.__createBinding||(Object.create?(function(e,t,a,n){n===void 0&&(n=a);var r=Object.getOwnPropertyDescriptor(t,a);(!r||("get"in r?!t.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,r)}):(function(e,t,a,n){n===void 0&&(n=a),e[n]=t[a]})),Oo=it&&it.__exportStar||function(e,t){for(var a in e)a!=="default"&&!Object.prototype.hasOwnProperty.call(t,a)&&Fp(t,e,a)};Object.defineProperty(it,"__esModule",{value:!0});Oo(Kr(),it);Oo(wo(),it)});var ko=U(he=>{"use strict";var qo=he&&he.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(he,"__esModule",{value:!0});he.createDeeplink=he.createExtensionDeeplink=he.createScriptCommandDeeplink=he.DeeplinkType=void 0;var tn=require("@raycast/api"),jp=qo(require("node:fs")),zp=qo(require("node:path")),en;(function(e){e.ScriptCommand="script-command",e.Extension="extension"})(en||(he.DeeplinkType=en={}));function Lo(){return tn.environment.raycastVersion.includes("alpha")?"raycastinternal://":"raycast://"}function Hp(){let e=JSON.parse(jp.default.readFileSync(zp.default.join(tn.environment.assetsPath,"..","package.json"),"utf8"));return e.owner||e.author}function No(e){let t=`${Lo()}script-commands/${e.command}`;if(e.arguments){let a="";for(let n of e.arguments)a+="&arguments="+encodeURIComponent(n);t+="?"+a.substring(1)}return t}he.createScriptCommandDeeplink=No;function Vo(e){let t=Hp(),a=tn.environment.extensionName;"ownerOrAuthorName"in e&&"extensionName"in e&&(t=e.ownerOrAuthorName,a=e.extensionName);let n=`${Lo()}extensions/${t}/${a}/${e.command}`,r="";return e.launchType&&(r+="&launchType="+encodeURIComponent(e.launchType)),e.arguments&&(r+="&arguments="+encodeURIComponent(JSON.stringify(e.arguments))),e.context&&(r+="&context="+encodeURIComponent(JSON.stringify(e.context))),e.fallbackText&&(r+="&fallbackText="+encodeURIComponent(e.fallbackText)),r&&(n+="?"+r.substring(1)),n}he.createExtensionDeeplink=Vo;function Gp(e){return e.type===en.ScriptCommand?No(e):Vo(e)}he.createDeeplink=Gp});var Fo=U(Ka=>{"use strict";Object.defineProperty(Ka,"__esModule",{value:!0});Ka.executeSQL=void 0;var $p=Fr();function Qp(e,t){return(0,$p.baseExecuteSQL)(e,t)}Ka.executeSQL=Qp});var jo=U(jt=>{"use strict";var Wp=jt&&jt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(jt,"__esModule",{value:!0});jt.runAppleScript=void 0;var Kp=Wp(require("node:child_process")),pa=Oa();async function Yp(e,t,a){let{humanReadableOutput:n,language:r,timeout:o,...u}=Array.isArray(t)?a||{}:t||{},i=n!==!1?[]:["-ss"];r==="JavaScript"&&i.push("-l","JavaScript"),Array.isArray(t)&&i.push("-",...t);let s=Kp.default.spawn("osascript",i,{...u,env:{PATH:"/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"}}),p=(0,pa.getSpawnedPromise)(s,{timeout:o??1e4});s.stdin.end(e);let[{error:l,exitCode:y,signal:S,timedOut:R},d,I]=await(0,pa.getSpawnedResult)(s,{encoding:"utf8"},p),b=(0,pa.handleOutput)({stripFinalNewline:!0},d),g=(0,pa.handleOutput)({stripFinalNewline:!0},I);return(0,pa.defaultParsing)({stdout:b,stderr:g,error:l,exitCode:y,signal:S,timedOut:R,command:"osascript",options:a,parentError:new Error})}jt.runAppleScript=Yp});var zo=U(Ja=>{"use strict";Object.defineProperty(Ja,"__esModule",{value:!0});Ja.withCache=void 0;var Jp=require("@raycast/api"),Ya=et();function Zp(e,t){let a=new Jp.Cache({namespace:(0,Ya.hash)(e)}),n=async(...r)=>{let o=(0,Ya.hash)(r||[])+t?.internal_cacheKeySuffix,u=a.get(o);if(u){let{data:s,timestamp:p}=JSON.parse(u,Ya.reviver);if(!(t?.maxAge&&Date.now()-p>t.maxAge)&&(!t?.validate||t.validate(s)))return s}let i=await e(...r);return a.set(o,JSON.stringify({data:i,timestamp:Date.now()},Ya.replacer)),i};return n.clearCache=()=>{a.clear()},n}Ja.withCache=Zp});var ge=U(N=>{"use strict";var Xp=N&&N.__createBinding||(Object.create?(function(e,t,a,n){n===void 0&&(n=a);var r=Object.getOwnPropertyDescriptor(t,a);(!r||("get"in r?!t.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,r)}):(function(e,t,a,n){n===void 0&&(n=a),e[n]=t[a]})),Y=N&&N.__exportStar||function(e,t){for(var a in e)a!=="default"&&!Object.prototype.hasOwnProperty.call(t,a)&&Xp(t,e,a)};Object.defineProperty(N,"__esModule",{value:!0});Y(Dt(),N);Y(Da(),N);Y(Zt(),N);Y($n(),N);Y(Jn(),N);Y(to(),N);Y(oo(),N);Y(so(),N);Y(po(),N);Y(yo(),N);Y(Io(),N);Y(Uo(),N);Y(Bo(),N);Y(ko(),N);Y(Fo(),N);Y(jo(),N);Y(Kt(),N);Y(zo(),N)});var ce={};Ct(ce,{default:()=>ti.default});var ti,nr=Er(()=>{le(ce,require("formdata-polyfill/esm.min.js"));ti=L(require("formdata-polyfill/esm.min.js"))});var Me={};Ct(Me,{default:()=>oi.default});var oi,on=Er(()=>{le(Me,require("fetch-blob/from.js"));oi=L(require("fetch-blob/from.js"))});var si={};Ct(si,{toFormData:()=>Rl});function ml(e){let t=e.match(/\bfilename=("(.*?)"|([^()<>@,;:\\"/[\]?={}\s\t]+))($|;\s)/i);if(!t)return;let a=t[2]||t[3]||"",n=a.slice(a.lastIndexOf("\\")+1);return n=n.replace(/%22/g,'"'),n=n.replace(/&#(\d{4});/g,(r,o)=>String.fromCharCode(o)),n}async function Rl(e,t){if(!/multipart/i.test(t))throw new TypeError("Failed to fetch");let a=t.match(/boundary=(?:"([^"]+)"|([^;]+))/i);if(!a)throw new TypeError("no or bad content-type header, no multipart boundary");let n=new sn(a[1]||a[2]),r,o,u,i,s,p,l=[],y=new ce.FormData,S=g=>{u+=b.decode(g,{stream:!0})},R=g=>{l.push(g)},d=()=>{let g=new Me.File(l,p,{type:s});y.append(i,g)},I=()=>{y.append(i,u)},b=new TextDecoder("utf-8");b.decode(),n.onPartBegin=function(){n.onPartData=S,n.onPartEnd=I,r="",o="",u="",i="",s="",p=null,l.length=0},n.onHeaderField=function(g){r+=b.decode(g,{stream:!0})},n.onHeaderValue=function(g){o+=b.decode(g,{stream:!0})},n.onHeaderEnd=function(){if(o+=b.decode(),r=r.toLowerCase(),r==="content-disposition"){let g=o.match(/\bname=("([^"]*)"|([^()<>@,;:\\"/[\]?={}\s\t]+))/i);g&&(i=g[2]||g[3]||""),p=ml(o),p&&(n.onPartData=R,n.onPartEnd=d)}else r==="content-type"&&(s=o);o="",r=""};for await(let g of e)n.write(g);return n.end(),y}var Ve,B,ii,pt,ir,sr,Sl,da,bl,Il,gl,Ml,mt,sn,ui=Er(()=>{on();nr();Ve=0,B={START_BOUNDARY:Ve++,HEADER_FIELD_START:Ve++,HEADER_FIELD:Ve++,HEADER_VALUE_START:Ve++,HEADER_VALUE:Ve++,HEADER_VALUE_ALMOST_DONE:Ve++,HEADERS_ALMOST_DONE:Ve++,PART_DATA_START:Ve++,PART_DATA:Ve++,END:Ve++},ii=1,pt={PART_BOUNDARY:ii,LAST_BOUNDARY:ii*=2},ir=10,sr=13,Sl=32,da=45,bl=58,Il=97,gl=122,Ml=e=>e|32,mt=()=>{},sn=class{constructor(t){this.index=0,this.flags=0,this.onHeaderEnd=mt,this.onHeaderField=mt,this.onHeadersEnd=mt,this.onHeaderValue=mt,this.onPartBegin=mt,this.onPartData=mt,this.onPartEnd=mt,this.boundaryChars={},t=`\r
--`+t;let a=new Uint8Array(t.length);for(let n=0;n<t.length;n++)a[n]=t.charCodeAt(n),this.boundaryChars[a[n]]=!0;this.boundary=a,this.lookbehind=new Uint8Array(this.boundary.length+8),this.state=B.START_BOUNDARY}write(t){let a=0,n=t.length,r=this.index,{lookbehind:o,boundary:u,boundaryChars:i,index:s,state:p,flags:l}=this,y=this.boundary.length,S=y-1,R=t.length,d,I,b=M=>{this[M+"Mark"]=a},g=M=>{delete this[M+"Mark"]},f=(M,h,C,T)=>{(h===void 0||h!==C)&&this[M](T&&T.subarray(h,C))},E=(M,h)=>{let C=M+"Mark";C in this&&(h?(f(M,this[C],a,t),delete this[C]):(f(M,this[C],t.length,t),this[C]=0))};for(a=0;a<n;a++)switch(d=t[a],p){case B.START_BOUNDARY:if(s===u.length-2){if(d===da)l|=pt.LAST_BOUNDARY;else if(d!==sr)return;s++;break}else if(s-1===u.length-2){if(l&pt.LAST_BOUNDARY&&d===da)p=B.END,l=0;else if(!(l&pt.LAST_BOUNDARY)&&d===ir)s=0,f("onPartBegin"),p=B.HEADER_FIELD_START;else return;break}d!==u[s+2]&&(s=-2),d===u[s+2]&&s++;break;case B.HEADER_FIELD_START:p=B.HEADER_FIELD,b("onHeaderField"),s=0;case B.HEADER_FIELD:if(d===sr){g("onHeaderField"),p=B.HEADERS_ALMOST_DONE;break}if(s++,d===da)break;if(d===bl){if(s===1)return;E("onHeaderField",!0),p=B.HEADER_VALUE_START;break}if(I=Ml(d),I<Il||I>gl)return;break;case B.HEADER_VALUE_START:if(d===Sl)break;b("onHeaderValue"),p=B.HEADER_VALUE;case B.HEADER_VALUE:d===sr&&(E("onHeaderValue",!0),f("onHeaderEnd"),p=B.HEADER_VALUE_ALMOST_DONE);break;case B.HEADER_VALUE_ALMOST_DONE:if(d!==ir)return;p=B.HEADER_FIELD_START;break;case B.HEADERS_ALMOST_DONE:if(d!==ir)return;f("onHeadersEnd"),p=B.PART_DATA_START;break;case B.PART_DATA_START:p=B.PART_DATA,b("onPartData");case B.PART_DATA:if(r=s,s===0){for(a+=S;a<R&&!(t[a]in i);)a+=y;a-=S,d=t[a]}if(s<u.length)u[s]===d?(s===0&&E("onPartData",!0),s++):s=0;else if(s===u.length)s++,d===sr?l|=pt.PART_BOUNDARY:d===da?l|=pt.LAST_BOUNDARY:s=0;else if(s-1===u.length)if(l&pt.PART_BOUNDARY){if(s=0,d===ir){l&=~pt.PART_BOUNDARY,f("onPartEnd"),f("onPartBegin"),p=B.HEADER_FIELD_START;break}}else l&pt.LAST_BOUNDARY&&d===da?(f("onPartEnd"),p=B.END,l=0):s=0;if(s>0)o[s-1]=d;else if(r>0){let M=new Uint8Array(o.buffer,o.byteOffset,o.byteLength);f("onPartData",0,r,M),r=0,b("onPartData"),a--}break;case B.END:break;default:throw new Error(`Unexpected state entered: ${p}`)}E("onHeaderField"),E("onHeaderValue"),E("onPartData"),this.index=s,this.state=p,this.flags=l}end(){if(this.state===B.HEADER_FIELD_START&&this.index===0||this.state===B.PART_DATA&&this.index===this.boundary.length)this.onPartEnd();else if(this.state!==B.END)throw new Error("MultipartParser.end(): stream ended unexpectedly")}}});var ty={};Ct(ty,{PullRequestForm:()=>ps,default:()=>ey});module.exports=Is(ty);var D=require("@raycast/api"),we=L(ge()),Pt=require("react");var Ti=require("@octokit/rest"),wi=require("@raycast/api"),Oi=L(ge());var Za=JSON;var Ho=e=>e.toUpperCase(),Go=e=>{let t={};return e.forEach((a,n)=>{t[n]=a}),t};var $o=(e,t,a)=>e.document?e:{document:e,variables:t,requestHeaders:a,signal:void 0},Qo=(e,t,a)=>e.query?e:{query:e,variables:t,requestHeaders:a,signal:void 0},Wo=(e,t)=>e.documents?e:{documents:e,requestHeaders:t,signal:void 0};var Xa=require("graphql"),Ko=e=>{let t,a=e.definitions.filter(n=>n.kind==="OperationDefinition");return a.length===1&&(t=a[0]?.name?.value),t},gt=e=>{if(typeof e=="string"){let a;try{let n=(0,Xa.parse)(e);a=Ko(n)}catch{}return{query:e,operationName:a}}let t=Ko(e);return{query:(0,Xa.print)(e),operationName:t}};var Mt=class e extends Error{constructor(t,a){let n=`${e.extractMessage(t)}: ${JSON.stringify({response:t,request:a})}`;super(n),Object.setPrototypeOf(this,e.prototype),this.response=t,this.request=a,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,e)}static extractMessage(t){return t.errors?.[0]?.message??`GraphQL Error (Code: ${t.status})`}};var ut=L(na(),1);var el="connection_init",tl="connection_ack",Jo="ping",Zo="pong",al="subscribe",rl="next",nl="error",Xo="complete",st=class e{get type(){return this._type}get id(){return this._id}get payload(){return this._payload}constructor(t,a,n){this._type=t,this._payload=a,this._id=n}get text(){let t={type:this.type};return this.id!=null&&this.id!=null&&(t.id=this.id),this.payload!=null&&this.payload!=null&&(t.payload=this.payload),JSON.stringify(t)}static parse(t,a){let{type:n,payload:r,id:o}=JSON.parse(t);return new e(n,a(r),o)}},er=class{constructor(t,{onInit:a,onAcknowledged:n,onPing:r,onPong:o}){this.socketState={acknowledged:!1,lastRequestId:0,subscriptions:{}},this.socket=t,t.addEventListener("open",async u=>{this.socketState.acknowledged=!1,this.socketState.subscriptions={},t.send(il(a?await a():null).text)}),t.addEventListener("close",u=>{this.socketState.acknowledged=!1,this.socketState.subscriptions={}}),t.addEventListener("error",u=>{console.error(u)}),t.addEventListener("message",u=>{try{let i=ol(u.data);switch(i.type){case tl:{this.socketState.acknowledged?console.warn("Duplicate CONNECTION_ACK message ignored"):(this.socketState.acknowledged=!0,n&&n(i.payload));return}case Jo:{r?r(i.payload).then(y=>t.send(Yo(y).text)):t.send(Yo(null).text);return}case Zo:{o&&o(i.payload);return}}if(!this.socketState.acknowledged||i.id===void 0||i.id===null||!this.socketState.subscriptions[i.id])return;let{query:s,variables:p,subscriber:l}=this.socketState.subscriptions[i.id];switch(i.type){case rl:{!i.payload.errors&&i.payload.data&&l.next&&l.next(i.payload.data),i.payload.errors&&l.error&&l.error(new Mt({...i.payload,status:200},{query:s,variables:p}));return}case nl:{l.error&&l.error(new Mt({errors:i.payload,status:200},{query:s,variables:p}));return}case Xo:{l.complete&&l.complete(),delete this.socketState.subscriptions[i.id];return}}}catch(i){console.error(i),t.close(1006)}t.close(4400,"Unknown graphql-ws message.")})}makeSubscribe(t,a,n,r){let o=(this.socketState.lastRequestId++).toString();return this.socketState.subscriptions[o]={query:t,variables:r,subscriber:n},this.socket.send(ul(o,{query:t,operationName:a,variables:r}).text),()=>{this.socket.send(pl(o).text),delete this.socketState.subscriptions[o]}}rawRequest(t,a){return new Promise((n,r)=>{let o;this.rawSubscribe(t,{next:(u,i)=>o={data:u,extensions:i},error:r,complete:()=>n(o)},a)})}request(t,a){return new Promise((n,r)=>{let o;this.subscribe(t,{next:u=>o=u,error:r,complete:()=>n(o)},a)})}subscribe(t,a,n){let{query:r,operationName:o}=gt(t);return this.makeSubscribe(r,o,a,n)}rawSubscribe(t,a,n){return this.makeSubscribe(t,void 0,a,n)}ping(t){this.socket.send(sl(t).text)}close(){this.socket.close(1e3)}};er.PROTOCOL="graphql-transport-ws";function ol(e,t=a=>a){return st.parse(e,t)}function il(e){return new st(el,e)}function sl(e){return new st(Jo,e,void 0)}function Yo(e){return new st(Zo,e,void 0)}function ul(e,t){return new st(al,t,e)}function pl(e){return new st(Xo,void 0,e)}var zt=e=>{let t={};return e&&(typeof Headers<"u"&&e instanceof Headers||ut&&ut.Headers&&e instanceof ut.Headers?t=Go(e):Array.isArray(e)?e.forEach(([a,n])=>{a&&n!==void 0&&(t[a]=n)}):t=e),t},ei=e=>e.replace(/([\s,]|#[^\n\r]+)+/g," ").trim(),ll=e=>{if(!Array.isArray(e.query)){let n=e,r=[`query=${encodeURIComponent(ei(n.query))}`];return e.variables&&r.push(`variables=${encodeURIComponent(n.jsonSerializer.stringify(n.variables))}`),n.operationName&&r.push(`operationName=${encodeURIComponent(n.operationName)}`),r.join("&")}if(typeof e.variables<"u"&&!Array.isArray(e.variables))throw new Error("Cannot create query with given variable type, array expected");let t=e,a=e.query.reduce((n,r,o)=>(n.push({query:ei(r),variables:t.variables?t.jsonSerializer.stringify(t.variables[o]):void 0}),n),[]);return`query=${encodeURIComponent(t.jsonSerializer.stringify(a))}`},cl=e=>async t=>{let{url:a,query:n,variables:r,operationName:o,fetch:u,fetchOptions:i,middleware:s}=t,p={...t.headers},l="",y;e==="POST"?(y=yl(n,r,o,i.jsonSerializer),typeof y=="string"&&(p["Content-Type"]="application/json")):l=ll({query:n,variables:r,operationName:o,jsonSerializer:i.jsonSerializer??Za});let S={method:e,headers:p,body:y,...i},R=a,d=S;if(s){let I=await Promise.resolve(s({...S,url:a,operationName:o,variables:r})),{url:b,...g}=I;R=b,d=g}return l&&(R=`${R}?${l}`),await u(R,d)},tr=class{constructor(t,a={}){this.url=t,this.requestConfig=a,this.rawRequest=async(...n)=>{let[r,o,u]=n,i=Qo(r,o,u),{headers:s,fetch:p=ut.default,method:l="POST",requestMiddleware:y,responseMiddleware:S,...R}=this.requestConfig,{url:d}=this;i.signal!==void 0&&(R.signal=i.signal);let{operationName:I}=gt(i.query);return an({url:d,query:i.query,variables:i.variables,headers:{...zt(rn(s)),...zt(i.requestHeaders)},operationName:I,fetch:p,method:l,fetchOptions:R,middleware:y}).then(b=>(S&&S(b),b)).catch(b=>{throw S&&S(b),b})}}async request(t,...a){let[n,r]=a,o=$o(t,n,r),{headers:u,fetch:i=ut.default,method:s="POST",requestMiddleware:p,responseMiddleware:l,...y}=this.requestConfig,{url:S}=this;o.signal!==void 0&&(y.signal=o.signal);let{query:R,operationName:d}=gt(o.document);return an({url:S,query:R,variables:o.variables,headers:{...zt(rn(u)),...zt(o.requestHeaders)},operationName:d,fetch:i,method:s,fetchOptions:y,middleware:p}).then(I=>(l&&l(I),I.data)).catch(I=>{throw l&&l(I),I})}batchRequests(t,a){let n=Wo(t,a),{headers:r,...o}=this.requestConfig;n.signal!==void 0&&(o.signal=n.signal);let u=n.documents.map(({document:s})=>gt(s).query),i=n.documents.map(({variables:s})=>s);return an({url:this.url,query:u,variables:i,headers:{...zt(rn(r)),...zt(n.requestHeaders)},operationName:void 0,fetch:this.requestConfig.fetch??ut.default,method:this.requestConfig.method||"POST",fetchOptions:o,middleware:this.requestConfig.requestMiddleware}).then(s=>(this.requestConfig.responseMiddleware&&this.requestConfig.responseMiddleware(s),s.data)).catch(s=>{throw this.requestConfig.responseMiddleware&&this.requestConfig.responseMiddleware(s),s})}setHeaders(t){return this.requestConfig.headers=t,this}setHeader(t,a){let{headers:n}=this.requestConfig;return n?n[t]=a:this.requestConfig.headers={[t]:a},this}setEndpoint(t){return this.url=t,this}},an=async e=>{let{query:t,variables:a,fetchOptions:n}=e,r=cl(Ho(e.method??"post")),o=Array.isArray(e.query),u=await r(e),i=await dl(u,n.jsonSerializer??Za),s=Array.isArray(i)?!i.some(({data:l})=>!l):!!i.data,p=Array.isArray(i)||!i.errors||Array.isArray(i.errors)&&!i.errors.length||n.errorPolicy==="all"||n.errorPolicy==="ignore";if(u.ok&&p&&s){let{errors:l,...y}=(Array.isArray(i),i),S=n.errorPolicy==="ignore"?y:i;return{...o?{data:S}:S,headers:u.headers,status:u.status}}else{let l=typeof i=="string"?{error:i}:i;throw new Mt({...l,status:u.status,headers:u.headers},{query:t,variables:a})}};var yl=(e,t,a,n)=>{let r=n??Za;if(!Array.isArray(e))return r.stringify({query:e,variables:t,operationName:a});if(typeof t<"u"&&!Array.isArray(t))throw new Error("Cannot create request body with given variable type, array expected");let o=e.reduce((u,i,s)=>(u.push({query:i,variables:t?t[s]:void 0}),u),[]);return r.stringify(o)},dl=async(e,t)=>{let a;return e.headers.forEach((n,r)=>{r.toLowerCase()==="content-type"&&(a=n)}),a&&(a.toLowerCase().startsWith("application/json")||a.toLowerCase().startsWith("application/graphql+json")||a.toLowerCase().startsWith("application/graphql-response+json"))?t.parse(await e.text()):e.text()},rn=e=>typeof e=="function"?e():e;var Pi=L(require("node:http"),1),Ei=L(require("node:https"),1),At=L(require("node:zlib"),1),Ae=L(require("node:stream"),1),Ia=require("node:buffer");var la={};Ct(la,{default:()=>ar.default});le(la,require("data-uri-to-buffer"));var ar=L(require("data-uri-to-buffer"));var De=L(require("node:stream"),1),Je=require("node:util"),me=require("node:buffer");var ca={};Ct(ca,{default:()=>rr.default});le(ca,require("fetch-blob"));var rr=L(require("fetch-blob"));nr();var Ye=class extends Error{constructor(t,a){super(t),Error.captureStackTrace(this,this.constructor),this.type=a}get name(){return this.constructor.name}get[Symbol.toStringTag](){return this.constructor.name}};var ye=class extends Ye{constructor(t,a,n){super(t,a),n&&(this.code=this.errno=n.code,this.erroredSysCall=n.syscall)}};var or=Symbol.toStringTag,nn=e=>typeof e=="object"&&typeof e.append=="function"&&typeof e.delete=="function"&&typeof e.get=="function"&&typeof e.getAll=="function"&&typeof e.has=="function"&&typeof e.set=="function"&&typeof e.sort=="function"&&e[or]==="URLSearchParams",ya=e=>e&&typeof e=="object"&&typeof e.arrayBuffer=="function"&&typeof e.type=="string"&&typeof e.stream=="function"&&typeof e.constructor=="function"&&/^(Blob|File)$/.test(e[or]),ai=e=>typeof e=="object"&&(e[or]==="AbortSignal"||e[or]==="EventTarget"),ri=(e,t)=>{let a=new URL(t).hostname,n=new URL(e).hostname;return a===n||a.endsWith(`.${n}`)},ni=(e,t)=>{let a=new URL(t).protocol,n=new URL(e).protocol;return a===n};var Al=(0,Je.promisify)(De.default.pipeline),de=Symbol("Body internals"),ke=class{constructor(t,{size:a=0}={}){let n=null;t===null?t=null:nn(t)?t=me.Buffer.from(t.toString()):ya(t)||me.Buffer.isBuffer(t)||(Je.types.isAnyArrayBuffer(t)?t=me.Buffer.from(t):ArrayBuffer.isView(t)?t=me.Buffer.from(t.buffer,t.byteOffset,t.byteLength):t instanceof De.default||(t instanceof ce.FormData?(t=(0,ce.formDataToBlob)(t),n=t.type.split("=")[1]):t=me.Buffer.from(String(t))));let r=t;me.Buffer.isBuffer(t)?r=De.default.Readable.from(t):ya(t)&&(r=De.default.Readable.from(t.stream())),this[de]={body:t,stream:r,boundary:n,disturbed:!1,error:null},this.size=a,t instanceof De.default&&t.on("error",o=>{let u=o instanceof Ye?o:new ye(`Invalid response body while trying to fetch ${this.url}: ${o.message}`,"system",o);this[de].error=u})}get body(){return this[de].stream}get bodyUsed(){return this[de].disturbed}async arrayBuffer(){let{buffer:t,byteOffset:a,byteLength:n}=await un(this);return t.slice(a,a+n)}async formData(){let t=this.headers.get("content-type");if(t.startsWith("application/x-www-form-urlencoded")){let n=new ce.FormData,r=new URLSearchParams(await this.text());for(let[o,u]of r)n.append(o,u);return n}let{toFormData:a}=await Promise.resolve().then(()=>(ui(),si));return a(this.body,t)}async blob(){let t=this.headers&&this.headers.get("content-type")||this[de].body&&this[de].body.type||"",a=await this.arrayBuffer();return new rr.default([a],{type:t})}async json(){let t=await this.text();return JSON.parse(t)}async text(){let t=await un(this);return new TextDecoder().decode(t)}buffer(){return un(this)}};ke.prototype.buffer=(0,Je.deprecate)(ke.prototype.buffer,"Please use 'response.arrayBuffer()' instead of 'response.buffer()'","node-fetch#buffer");Object.defineProperties(ke.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0},data:{get:(0,Je.deprecate)(()=>{},"data doesn't exist, use json(), text(), arrayBuffer(), or body instead","https://github.com/node-fetch/node-fetch/issues/1000 (response)")}});async function un(e){if(e[de].disturbed)throw new TypeError(`body used already for: ${e.url}`);if(e[de].disturbed=!0,e[de].error)throw e[de].error;let{body:t}=e;if(t===null)return me.Buffer.alloc(0);if(!(t instanceof De.default))return me.Buffer.alloc(0);let a=[],n=0;try{for await(let r of t){if(e.size>0&&n+r.length>e.size){let o=new ye(`content size at ${e.url} over limit: ${e.size}`,"max-size");throw t.destroy(o),o}n+=r.length,a.push(r)}}catch(r){throw r instanceof Ye?r:new ye(`Invalid response body while trying to fetch ${e.url}: ${r.message}`,"system",r)}if(t.readableEnded===!0||t._readableState.ended===!0)try{return a.every(r=>typeof r=="string")?me.Buffer.from(a.join("")):me.Buffer.concat(a,n)}catch(r){throw new ye(`Could not create Buffer from response body for ${e.url}: ${r.message}`,"system",r)}else throw new ye(`Premature close of server response while trying to fetch ${e.url}`)}var Ht=(e,t)=>{let a,n,{body:r}=e[de];if(e.bodyUsed)throw new Error("cannot clone body after it is used");return r instanceof De.default&&typeof r.getBoundary!="function"&&(a=new De.PassThrough({highWaterMark:t}),n=new De.PassThrough({highWaterMark:t}),r.pipe(a),r.pipe(n),e[de].stream=a,r=n),r},fl=(0,Je.deprecate)(e=>e.getBoundary(),"form-data doesn't follow the spec and requires special treatment. Use alternative package","https://github.com/node-fetch/node-fetch/issues/1167"),ur=(e,t)=>e===null?null:typeof e=="string"?"text/plain;charset=UTF-8":nn(e)?"application/x-www-form-urlencoded;charset=UTF-8":ya(e)?e.type||null:me.Buffer.isBuffer(e)||Je.types.isAnyArrayBuffer(e)||ArrayBuffer.isView(e)?null:e instanceof ce.FormData?`multipart/form-data; boundary=${t[de].boundary}`:e&&typeof e.getBoundary=="function"?`multipart/form-data;boundary=${fl(e)}`:e instanceof De.default?null:"text/plain;charset=UTF-8",pi=e=>{let{body:t}=e[de];return t===null?0:ya(t)?t.size:me.Buffer.isBuffer(t)?t.length:t&&typeof t.getLengthSync=="function"&&t.hasKnownLength&&t.hasKnownLength()?t.getLengthSync():null},li=async(e,{body:t})=>{t===null?e.end():await Al(t,e)};var pn=require("node:util"),Sa=L(require("node:http"),1),pr=typeof Sa.default.validateHeaderName=="function"?Sa.default.validateHeaderName:e=>{if(!/^[\^`\-\w!#$%&'*+.|~]+$/.test(e)){let t=new TypeError(`Header name must be a valid HTTP token [${e}]`);throw Object.defineProperty(t,"code",{value:"ERR_INVALID_HTTP_TOKEN"}),t}},ln=typeof Sa.default.validateHeaderValue=="function"?Sa.default.validateHeaderValue:(e,t)=>{if(/[^\t\u0020-\u007E\u0080-\u00FF]/.test(t)){let a=new TypeError(`Invalid character in header content ["${e}"]`);throw Object.defineProperty(a,"code",{value:"ERR_INVALID_CHAR"}),a}},Re=class e extends URLSearchParams{constructor(t){let a=[];if(t instanceof e){let n=t.raw();for(let[r,o]of Object.entries(n))a.push(...o.map(u=>[r,u]))}else if(t!=null)if(typeof t=="object"&&!pn.types.isBoxedPrimitive(t)){let n=t[Symbol.iterator];if(n==null)a.push(...Object.entries(t));else{if(typeof n!="function")throw new TypeError("Header pairs must be iterable");a=[...t].map(r=>{if(typeof r!="object"||pn.types.isBoxedPrimitive(r))throw new TypeError("Each header pair must be an iterable object");return[...r]}).map(r=>{if(r.length!==2)throw new TypeError("Each header pair must be a name/value tuple");return[...r]})}}else throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");return a=a.length>0?a.map(([n,r])=>(pr(n),ln(n,String(r)),[String(n).toLowerCase(),String(r)])):void 0,super(a),new Proxy(this,{get(n,r,o){switch(r){case"append":case"set":return(u,i)=>(pr(u),ln(u,String(i)),URLSearchParams.prototype[r].call(n,String(u).toLowerCase(),String(i)));case"delete":case"has":case"getAll":return u=>(pr(u),URLSearchParams.prototype[r].call(n,String(u).toLowerCase()));case"keys":return()=>(n.sort(),new Set(URLSearchParams.prototype.keys.call(n)).keys());default:return Reflect.get(n,r,o)}}})}get[Symbol.toStringTag](){return this.constructor.name}toString(){return Object.prototype.toString.call(this)}get(t){let a=this.getAll(t);if(a.length===0)return null;let n=a.join(", ");return/^content-encoding$/i.test(t)&&(n=n.toLowerCase()),n}forEach(t,a=void 0){for(let n of this.keys())Reflect.apply(t,a,[this.get(n),n,this])}*values(){for(let t of this.keys())yield this.get(t)}*entries(){for(let t of this.keys())yield[t,this.get(t)]}[Symbol.iterator](){return this.entries()}raw(){return[...this.keys()].reduce((t,a)=>(t[a]=this.getAll(a),t),{})}[Symbol.for("nodejs.util.inspect.custom")](){return[...this.keys()].reduce((t,a)=>{let n=this.getAll(a);return a==="host"?t[a]=n[0]:t[a]=n.length>1?n:n[0],t},{})}};Object.defineProperties(Re.prototype,["get","entries","forEach","values"].reduce((e,t)=>(e[t]={enumerable:!0},e),{}));function ci(e=[]){return new Re(e.reduce((t,a,n,r)=>(n%2===0&&t.push(r.slice(n,n+2)),t),[]).filter(([t,a])=>{try{return pr(t),ln(t,String(a)),!0}catch{return!1}}))}var Pl=new Set([301,302,303,307,308]),lr=e=>Pl.has(e);var Te=Symbol("Response internals"),xe=class e extends ke{constructor(t=null,a={}){super(t,a);let n=a.status!=null?a.status:200,r=new Re(a.headers);if(t!==null&&!r.has("Content-Type")){let o=ur(t,this);o&&r.append("Content-Type",o)}this[Te]={type:"default",url:a.url,status:n,statusText:a.statusText||"",headers:r,counter:a.counter,highWaterMark:a.highWaterMark}}get type(){return this[Te].type}get url(){return this[Te].url||""}get status(){return this[Te].status}get ok(){return this[Te].status>=200&&this[Te].status<300}get redirected(){return this[Te].counter>0}get statusText(){return this[Te].statusText}get headers(){return this[Te].headers}get highWaterMark(){return this[Te].highWaterMark}clone(){return new e(Ht(this,this.highWaterMark),{type:this.type,url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected,size:this.size,highWaterMark:this.highWaterMark})}static redirect(t,a=302){if(!lr(a))throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');return new e(null,{headers:{location:new URL(t).toString()},status:a})}static error(){let t=new e(null,{status:0,statusText:""});return t[Te].type="error",t}static json(t=void 0,a={}){let n=JSON.stringify(t);if(n===void 0)throw new TypeError("data is not JSON serializable");let r=new Re(a&&a.headers);return r.has("content-type")||r.set("content-type","application/json"),new e(n,{...a,headers:r})}get[Symbol.toStringTag](){return"Response"}};Object.defineProperties(xe.prototype,{type:{enumerable:!0},url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}});var Ri=require("node:url"),Ai=require("node:util");var yi=e=>{if(e.search)return e.search;let t=e.href.length-1,a=e.hash||(e.href[t]==="#"?"#":"");return e.href[t-a.length]==="?"?"?":""};var Si=require("node:net");function di(e,t=!1){return e==null||(e=new URL(e),/^(about|blob|data):$/.test(e.protocol))?"no-referrer":(e.username="",e.password="",e.hash="",t&&(e.pathname="",e.search=""),e)}var bi=new Set(["","no-referrer","no-referrer-when-downgrade","same-origin","origin","strict-origin","origin-when-cross-origin","strict-origin-when-cross-origin","unsafe-url"]),Ii="strict-origin-when-cross-origin";function gi(e){if(!bi.has(e))throw new TypeError(`Invalid referrerPolicy: ${e}`);return e}function El(e){if(/^(http|ws)s:$/.test(e.protocol))return!0;let t=e.host.replace(/(^\[)|(]$)/g,""),a=(0,Si.isIP)(t);return a===4&&/^127\./.test(t)||a===6&&/^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(t)?!0:e.host==="localhost"||e.host.endsWith(".localhost")?!1:e.protocol==="file:"}function Gt(e){return/^about:(blank|srcdoc)$/.test(e)||e.protocol==="data:"||/^(blob|filesystem):$/.test(e.protocol)?!0:El(e)}function Mi(e,{referrerURLCallback:t,referrerOriginCallback:a}={}){if(e.referrer==="no-referrer"||e.referrerPolicy==="")return null;let n=e.referrerPolicy;if(e.referrer==="about:client")return"no-referrer";let r=e.referrer,o=di(r),u=di(r,!0);o.toString().length>4096&&(o=u),t&&(o=t(o)),a&&(u=a(u));let i=new URL(e.url);switch(n){case"no-referrer":return"no-referrer";case"origin":return u;case"unsafe-url":return o;case"strict-origin":return Gt(o)&&!Gt(i)?"no-referrer":u.toString();case"strict-origin-when-cross-origin":return o.origin===i.origin?o:Gt(o)&&!Gt(i)?"no-referrer":u;case"same-origin":return o.origin===i.origin?o:"no-referrer";case"origin-when-cross-origin":return o.origin===i.origin?o:u;case"no-referrer-when-downgrade":return Gt(o)&&!Gt(i)?"no-referrer":o;default:throw new TypeError(`Invalid referrerPolicy: ${n}`)}}function mi(e){let t=(e.get("referrer-policy")||"").split(/[,\s]+/),a="";for(let n of t)n&&bi.has(n)&&(a=n);return a}var J=Symbol("Request internals"),ba=e=>typeof e=="object"&&typeof e[J]=="object",Cl=(0,Ai.deprecate)(()=>{},".data is not a valid RequestInit property, use .body instead","https://github.com/node-fetch/node-fetch/issues/1000 (request)"),Rt=class e extends ke{constructor(t,a={}){let n;if(ba(t)?n=new URL(t.url):(n=new URL(t),t={}),n.username!==""||n.password!=="")throw new TypeError(`${n} is an url with embedded credentials.`);let r=a.method||t.method||"GET";if(/^(delete|get|head|options|post|put)$/i.test(r)&&(r=r.toUpperCase()),!ba(a)&&"data"in a&&Cl(),(a.body!=null||ba(t)&&t.body!==null)&&(r==="GET"||r==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");let o=a.body?a.body:ba(t)&&t.body!==null?Ht(t):null;super(o,{size:a.size||t.size||0});let u=new Re(a.headers||t.headers||{});if(o!==null&&!u.has("Content-Type")){let p=ur(o,this);p&&u.set("Content-Type",p)}let i=ba(t)?t.signal:null;if("signal"in a&&(i=a.signal),i!=null&&!ai(i))throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");let s=a.referrer==null?t.referrer:a.referrer;if(s==="")s="no-referrer";else if(s){let p=new URL(s);s=/^about:(\/\/)?client$/.test(p)?"client":p}else s=void 0;this[J]={method:r,redirect:a.redirect||t.redirect||"follow",headers:u,parsedURL:n,signal:i,referrer:s},this.follow=a.follow===void 0?t.follow===void 0?20:t.follow:a.follow,this.compress=a.compress===void 0?t.compress===void 0?!0:t.compress:a.compress,this.counter=a.counter||t.counter||0,this.agent=a.agent||t.agent,this.highWaterMark=a.highWaterMark||t.highWaterMark||16384,this.insecureHTTPParser=a.insecureHTTPParser||t.insecureHTTPParser||!1,this.referrerPolicy=a.referrerPolicy||t.referrerPolicy||""}get method(){return this[J].method}get url(){return(0,Ri.format)(this[J].parsedURL)}get headers(){return this[J].headers}get redirect(){return this[J].redirect}get signal(){return this[J].signal}get referrer(){if(this[J].referrer==="no-referrer")return"";if(this[J].referrer==="client")return"about:client";if(this[J].referrer)return this[J].referrer.toString()}get referrerPolicy(){return this[J].referrerPolicy}set referrerPolicy(t){this[J].referrerPolicy=gi(t)}clone(){return new e(this)}get[Symbol.toStringTag](){return"Request"}};Object.defineProperties(Rt.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0},referrer:{enumerable:!0},referrerPolicy:{enumerable:!0}});var fi=e=>{let{parsedURL:t}=e[J],a=new Re(e[J].headers);a.has("Accept")||a.set("Accept","*/*");let n=null;if(e.body===null&&/^(post|put)$/i.test(e.method)&&(n="0"),e.body!==null){let i=pi(e);typeof i=="number"&&!Number.isNaN(i)&&(n=String(i))}n&&a.set("Content-Length",n),e.referrerPolicy===""&&(e.referrerPolicy=Ii),e.referrer&&e.referrer!=="no-referrer"?e[J].referrer=Mi(e):e[J].referrer="no-referrer",e[J].referrer instanceof URL&&a.set("Referer",e.referrer),a.has("User-Agent")||a.set("User-Agent","node-fetch"),e.compress&&!a.has("Accept-Encoding")&&a.set("Accept-Encoding","gzip, deflate, br");let{agent:r}=e;typeof r=="function"&&(r=r(t));let o=yi(t),u={path:t.pathname+o,method:e.method,headers:a[Symbol.for("nodejs.util.inspect.custom")](),insecureHTTPParser:e.insecureHTTPParser,agent:r};return{parsedURL:t,options:u}};var cr=class extends Ye{constructor(t,a="aborted"){super(t,a)}};nr();on();var hl=new Set(["data:","http:","https:"]);async function yr(e,t){return new Promise((a,n)=>{let r=new Rt(e,t),{parsedURL:o,options:u}=fi(r);if(!hl.has(o.protocol))throw new TypeError(`node-fetch cannot load ${e}. URL scheme "${o.protocol.replace(/:$/,"")}" is not supported.`);if(o.protocol==="data:"){let d=(0,ar.default)(r.url),I=new xe(d,{headers:{"Content-Type":d.typeFull}});a(I);return}let i=(o.protocol==="https:"?Ei.default:Pi.default).request,{signal:s}=r,p=null,l=()=>{let d=new cr("The operation was aborted.");n(d),r.body&&r.body instanceof Ae.default.Readable&&r.body.destroy(d),!(!p||!p.body)&&p.body.emit("error",d)};if(s&&s.aborted){l();return}let y=()=>{l(),R()},S=i(o.toString(),u);s&&s.addEventListener("abort",y);let R=()=>{S.abort(),s&&s.removeEventListener("abort",y)};S.on("error",d=>{n(new ye(`request to ${r.url} failed, reason: ${d.message}`,"system",d)),R()}),Dl(S,d=>{p&&p.body&&p.body.destroy(d)}),process.version<"v14"&&S.on("socket",d=>{let I;d.prependListener("end",()=>{I=d._eventsCount}),d.prependListener("close",b=>{if(p&&I<d._eventsCount&&!b){let g=new Error("Premature close");g.code="ERR_STREAM_PREMATURE_CLOSE",p.body.emit("error",g)}})}),S.on("response",d=>{S.setTimeout(0);let I=ci(d.rawHeaders);if(lr(d.statusCode)){let M=I.get("Location"),h=null;try{h=M===null?null:new URL(M,r.url)}catch{if(r.redirect!=="manual"){n(new ye(`uri requested responds with an invalid redirect URL: ${M}`,"invalid-redirect")),R();return}}switch(r.redirect){case"error":n(new ye(`uri requested responds with a redirect, redirect mode is set to error: ${r.url}`,"no-redirect")),R();return;case"manual":break;case"follow":{if(h===null)break;if(r.counter>=r.follow){n(new ye(`maximum redirect reached at: ${r.url}`,"max-redirect")),R();return}let C={headers:new Re(r.headers),follow:r.follow,counter:r.counter+1,agent:r.agent,compress:r.compress,method:r.method,body:Ht(r),signal:r.signal,size:r.size,referrer:r.referrer,referrerPolicy:r.referrerPolicy};if(!ri(r.url,h)||!ni(r.url,h))for(let j of["authorization","www-authenticate","cookie","cookie2"])C.headers.delete(j);if(d.statusCode!==303&&r.body&&t.body instanceof Ae.default.Readable){n(new ye("Cannot follow redirect with body being a readable stream","unsupported-redirect")),R();return}(d.statusCode===303||(d.statusCode===301||d.statusCode===302)&&r.method==="POST")&&(C.method="GET",C.body=void 0,C.headers.delete("content-length"));let T=mi(I);T&&(C.referrerPolicy=T),a(yr(new Rt(h,C))),R();return}default:return n(new TypeError(`Redirect option '${r.redirect}' is not a valid value of RequestRedirect`))}}s&&d.once("end",()=>{s.removeEventListener("abort",y)});let b=(0,Ae.pipeline)(d,new Ae.PassThrough,M=>{M&&n(M)});process.version<"v12.10"&&d.on("aborted",y);let g={url:r.url,status:d.statusCode,statusText:d.statusMessage,headers:I,size:r.size,counter:r.counter,highWaterMark:r.highWaterMark},f=I.get("Content-Encoding");if(!r.compress||r.method==="HEAD"||f===null||d.statusCode===204||d.statusCode===304){p=new xe(b,g),a(p);return}let E={flush:At.default.Z_SYNC_FLUSH,finishFlush:At.default.Z_SYNC_FLUSH};if(f==="gzip"||f==="x-gzip"){b=(0,Ae.pipeline)(b,At.default.createGunzip(E),M=>{M&&n(M)}),p=new xe(b,g),a(p);return}if(f==="deflate"||f==="x-deflate"){let M=(0,Ae.pipeline)(d,new Ae.PassThrough,h=>{h&&n(h)});M.once("data",h=>{(h[0]&15)===8?b=(0,Ae.pipeline)(b,At.default.createInflate(),C=>{C&&n(C)}):b=(0,Ae.pipeline)(b,At.default.createInflateRaw(),C=>{C&&n(C)}),p=new xe(b,g),a(p)}),M.once("end",()=>{p||(p=new xe(b,g),a(p))});return}if(f==="br"){b=(0,Ae.pipeline)(b,At.default.createBrotliDecompress(),M=>{M&&n(M)}),p=new xe(b,g),a(p);return}p=new xe(b,g),a(p)}),li(S,r).catch(n)})}function Dl(e,t){let a=Ia.Buffer.from(`0\r
\r
`),n=!1,r=!1,o;e.on("response",u=>{let{headers:i}=u;n=i["transfer-encoding"]==="chunked"&&!i["content-length"]}),e.on("socket",u=>{let i=()=>{if(n&&!r){let p=new Error("Premature close");p.code="ERR_STREAM_PREMATURE_CLOSE",t(p)}},s=p=>{r=Ia.Buffer.compare(p.slice(-5),a)===0,!r&&o&&(r=Ia.Buffer.compare(o.slice(-3),a.slice(0,3))===0&&Ia.Buffer.compare(p.slice(-2),a.slice(3))===0),o=p};u.prependListener("close",i),u.on("data",s),e.on("close",()=>{u.removeListener("close",i),u.removeListener("data",s)})})}var m=L(require("graphql-tag")),ga=m.default`
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
`,xl=m.default`
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
  ${ga}
`,Fe=m.default`
  fragment UserFields on User {
    id
    avatarUrl
    name
    login
    isViewer
  }
`,Ma=m.default`
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
  ${Fe}
`,dr=m.default`
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
  ${Ma}
  ${ga}
  ${Fe}
`,_l=m.default`
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
  ${Ma}
  ${ga}
  ${Fe}
`,Ci=m.default`
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
`,hi=m.default`
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
`,Di=m.default`
  fragment RepositoryMentionFields on Repository {
    nameWithOwner
    description
    isPrivate
    isArchived
    owner {
      avatarUrl(size: 64)
    }
  }
`,Ul=m.default`
  fragment ProjectViewerFields on ProjectV2View {
    id
    name
    number
  }
`,xi=m.default`
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
  ${Ma}
  ${Ul}
`,_i=m.default`
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
  ${ga}
  ${Ma}
  ${Fe}
`,vl=m.default`
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
  ${ga}
  ${Ma}
  ${Fe}
`,Tl=m.default`
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
`,Ui=m.default`
  fragment CommitFields on Commit {
    authoredDate
    oid
    message
  }
`,cn=m.default`
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
`,wl=m.default`
  fragment ReleaseFields on Release {
    id
    description
    name
    publishedAt
    createdAt
    tagName
    url
  }
`,Ol=m.default`
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
`,Bl=m.default`
  mutation createRef($input: CreateRefInput!) {
    createRef(input: $input) {
      clientMutationId
      ref {
        id
        name
      }
    }
  }
`,ql=m.default`
  mutation deleteLinkedBranch($input: DeleteLinkedBranchInput!) {
    deleteLinkedBranch(input: $input) {
      clientMutationId
    }
  }
`,Ll=m.default`
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
  ${xl}
`,Nl=m.default`
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
`,Vl=m.default`
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
  ${Fe}
`,kl=m.default`
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
`,Fl=m.default`
  query issueDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...IssueDetailFields
    }
  }
  ${_l}
`,jl=m.default`
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
  ${dr}
`,zl=m.default`
  query issueByNumber($owner: String!, $name: String!, $issueNumber: Int!) {
    repository(owner: $owner, name: $name) {
      issue(number: $issueNumber) {
        ...IssueFields
      }
    }
  }
  ${dr}
`,Hl=m.default`
  mutation closeIssue($nodeId: ID!, $stateReason: IssueClosedStateReason!) {
    closeIssue(input: { issueId: $nodeId, stateReason: $stateReason }) {
      issue {
        id
      }
    }
  }
`,Gl=m.default`
  mutation reopenIssue($nodeId: ID!) {
    reopenIssue(input: { issueId: $nodeId }) {
      issue {
        id
      }
    }
  }
`,$l=m.default`
  mutation changeIssueAssignees($issueId: ID!, $assigneeIds: [ID!]) {
    updateIssue(input: { id: $issueId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,Ql=m.default`
  mutation changeIssueMilestone($issueId: ID!, $milestoneId: ID) {
    updateIssue(input: { id: $issueId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,Wl=m.default`
  mutation addIssueToProject($issueId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $issueId }) {
      clientMutationId
    }
  }
`,Kl=m.default`
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
  ${dr}
`,Yl=m.default`
  query searchIssueMentions($query: String!, $numberOfItems: Int!) {
    search(query: $query, type: ISSUE, first: $numberOfItems) {
      nodes {
        ... on Issue {
          ...IssueMentionFields
        }
      }
    }
  }
  ${Ci}
`,Jl=m.default`
  query searchPullRequestMentions($query: String!, $numberOfItems: Int!) {
    search(query: $query, type: ISSUE, first: $numberOfItems) {
      nodes {
        ... on PullRequest {
          ...PullRequestMentionFields
        }
      }
    }
  }
  ${hi}
`,Zl=m.default`
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
  ${Ci}
  ${hi}
`,Xl=m.default`
  query searchRepositoryMentions($query: String!, $numberOfItems: Int!) {
    search(query: $query, type: REPOSITORY, first: $numberOfItems) {
      nodes {
        ... on Repository {
          ...RepositoryMentionFields
        }
      }
    }
  }
  ${Di}
`,ec=m.default`
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
  ${Di}
`,tc=m.default`
  mutation changeProjectStatus($projectId: ID!, $closed: Boolean!) {
    updateProjectV2(input: { projectId: $projectId, closed: $closed }) {
      clientMutationId
    }
  }
`,ac=m.default`
  query projectDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...ProjectFields
    }
  }
  ${xi}
`,rc=m.default`
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
  ${_i}
`,nc=m.default`
  query pullRequestDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...PullRequestDetailsFields
    }
  }
  ${vl}
`,oc=m.default`
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
  ${Fe}
`,ic=m.default`
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
`,sc=m.default`
  query pullRequestCommits($nodeId: ID!, $numberOfItems: Int!, $before: String) {
    node(id: $nodeId) {
      ...PullRequestCommitFields
    }
  }
  ${Tl}
`,uc=m.default`
  mutation closePullRequest($nodeId: ID!) {
    closePullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,pc=m.default`
  mutation reopenPullRequest($nodeId: ID!) {
    reopenPullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,lc=m.default`
  mutation markPullRequestReadyForReview($nodeId: ID!) {
    markPullRequestReadyForReview(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,cc=m.default`
  mutation addPullRequestReview($nodeId: ID!, $event: PullRequestReviewEvent, $body: String) {
    addPullRequestReview(input: { pullRequestId: $nodeId, event: $event, body: $body }) {
      pullRequestReview {
        id
      }
    }
  }
`,yc=m.default`
  mutation changePullRequestAssignees($pullRequestId: ID!, $assigneeIds: [ID!]) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,dc=m.default`
  mutation changePullRequestMilestone($pullRequestId: ID!, $milestoneId: ID) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,Sc=m.default`
  mutation addPullRequestToProject($pullRequestId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $pullRequestId }) {
      clientMutationId
    }
  }
`,bc=m.default`
  mutation requestReview($pullRequestId: ID!, $collaboratorId: ID!) {
    requestReviews(input: { pullRequestId: $pullRequestId, userIds: [$collaboratorId], union: true }) {
      clientMutationId
    }
  }
`,Ic=m.default`
  mutation mergePullRequest($nodeId: ID!, $method: PullRequestMergeMethod!) {
    mergePullRequest(input: { pullRequestId: $nodeId, mergeMethod: $method }) {
      pullRequest {
        nodeId: id
      }
    }
  }
`,gc=m.default`
  mutation addPullRequestToMergeQueue($nodeId: ID!) {
    enqueuePullRequest(input: { pullRequestId: $nodeId }) {
      __typename
    }
  }
`,Mc=m.default`
  mutation removePullRequestFromMergeQueue($nodeId: ID!) {
    dequeuePullRequest(input: { id: $nodeId }) {
      __typename
    }
  }
`,mc=m.default`
  mutation enablePullRequestAutoMerge($nodeId: ID!, $mergeMethod: PullRequestMergeMethod) {
    enablePullRequestAutoMerge(input: { pullRequestId: $nodeId, mergeMethod: $mergeMethod }) {
      pullRequest {
        id
      }
    }
  }
`,Rc=m.default`
  mutation disablePullRequestAutoMerge($nodeId: ID!) {
    disablePullRequestAutoMerge(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Ac=m.default`
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
`,fc=m.default`
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
  ${_i}
`,Pc=m.default`
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
  ${cn}
`,Ec=m.default`
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
  ${cn}
`,Cc=m.default`
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
`,hc=m.default`
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
`,Dc=m.default`
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
  ${Ui}
  ${Fe}
`,xc=m.default`
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
  ${Ui}
`,_c=m.default`
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
  ${dr}
`,Uc=m.default`
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
  ${wl}
`,vc=m.default`
  mutation addStar($repositoryId: ID!) {
    addStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,Tc=m.default`
  mutation removeStar($repositoryId: ID!) {
    removeStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,wc=m.default`
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
  ${cn}
`,Oc=m.default`
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
  ${Fe}
  ${xi}
`,Bc=m.default`
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
  ${Fe}
`,qc=m.default`
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
`,Lc=(e,t,a,n)=>e();function vi(e,t=Lc){return{createLinkedBranch(a,n,r){return t(o=>e.request({document:Ol,variables:a,requestHeaders:{...n,...o},signal:r}),"createLinkedBranch","mutation",a)},createRef(a,n,r){return t(o=>e.request({document:Bl,variables:a,requestHeaders:{...n,...o},signal:r}),"createRef","mutation",a)},deleteLinkedBranch(a,n,r){return t(o=>e.request({document:ql,variables:a,requestHeaders:{...n,...o},signal:r}),"deleteLinkedBranch","mutation",a)},searchDiscussions(a,n,r){return t(o=>e.request({document:Ll,variables:a,requestHeaders:{...n,...o},signal:r}),"searchDiscussions","query",a)},getGitHubDiscussionNumber(a,n,r){return t(o=>e.request({document:Nl,variables:a,requestHeaders:{...n,...o},signal:r}),"getGitHubDiscussionNumber","query",a)},repositoryCollaboratorsForIssues(a,n,r){return t(o=>e.request({document:Vl,variables:a,requestHeaders:{...n,...o},signal:r}),"repositoryCollaboratorsForIssues","query",a)},repositoryProjectsForIssues(a,n,r){return t(o=>e.request({document:kl,variables:a,requestHeaders:{...n,...o},signal:r}),"repositoryProjectsForIssues","query",a)},issueDetails(a,n,r){return t(o=>e.request({document:Fl,variables:a,requestHeaders:{...n,...o},signal:r}),"issueDetails","query",a)},searchIssues(a,n,r){return t(o=>e.request({document:jl,variables:a,requestHeaders:{...n,...o},signal:r}),"searchIssues","query",a)},issueByNumber(a,n,r){return t(o=>e.request({document:zl,variables:a,requestHeaders:{...n,...o},signal:r}),"issueByNumber","query",a)},closeIssue(a,n,r){return t(o=>e.request({document:Hl,variables:a,requestHeaders:{...n,...o},signal:r}),"closeIssue","mutation",a)},reopenIssue(a,n,r){return t(o=>e.request({document:Gl,variables:a,requestHeaders:{...n,...o},signal:r}),"reopenIssue","mutation",a)},changeIssueAssignees(a,n,r){return t(o=>e.request({document:$l,variables:a,requestHeaders:{...n,...o},signal:r}),"changeIssueAssignees","mutation",a)},changeIssueMilestone(a,n,r){return t(o=>e.request({document:Ql,variables:a,requestHeaders:{...n,...o},signal:r}),"changeIssueMilestone","mutation",a)},addIssueToProject(a,n,r){return t(o=>e.request({document:Wl,variables:a,requestHeaders:{...n,...o},signal:r}),"addIssueToProject","mutation",a)},createIssue(a,n,r){return t(o=>e.request({document:Kl,variables:a,requestHeaders:{...n,...o},signal:r}),"createIssue","mutation",a)},searchIssueMentions(a,n,r){return t(o=>e.request({document:Yl,variables:a,requestHeaders:{...n,...o},signal:r}),"searchIssueMentions","query",a)},searchPullRequestMentions(a,n,r){return t(o=>e.request({document:Jl,variables:a,requestHeaders:{...n,...o},signal:r}),"searchPullRequestMentions","query",a)},issueOrPullRequestMention(a,n,r){return t(o=>e.request({document:Zl,variables:a,requestHeaders:{...n,...o},signal:r}),"issueOrPullRequestMention","query",a)},searchRepositoryMentions(a,n,r){return t(o=>e.request({document:Xl,variables:a,requestHeaders:{...n,...o},signal:r}),"searchRepositoryMentions","query",a)},viewerRepositoryMentions(a,n,r){return t(o=>e.request({document:ec,variables:a,requestHeaders:{...n,...o},signal:r}),"viewerRepositoryMentions","query",a)},changeProjectStatus(a,n,r){return t(o=>e.request({document:tc,variables:a,requestHeaders:{...n,...o},signal:r}),"changeProjectStatus","mutation",a)},projectDetails(a,n,r){return t(o=>e.request({document:ac,variables:a,requestHeaders:{...n,...o},signal:r}),"projectDetails","query",a)},searchPullRequests(a,n,r){return t(o=>e.request({document:rc,variables:a,requestHeaders:{...n,...o},signal:r}),"searchPullRequests","query",a)},pullRequestDetails(a,n,r){return t(o=>e.request({document:nc,variables:a,requestHeaders:{...n,...o},signal:r}),"pullRequestDetails","query",a)},repositoryCollaboratorsForPullRequests(a,n,r){return t(o=>e.request({document:oc,variables:a,requestHeaders:{...n,...o},signal:r}),"repositoryCollaboratorsForPullRequests","query",a)},repositoryProjectsForPullRequests(a,n,r){return t(o=>e.request({document:ic,variables:a,requestHeaders:{...n,...o},signal:r}),"repositoryProjectsForPullRequests","query",a)},pullRequestCommits(a,n,r){return t(o=>e.request({document:sc,variables:a,requestHeaders:{...n,...o},signal:r}),"pullRequestCommits","query",a)},closePullRequest(a,n,r){return t(o=>e.request({document:uc,variables:a,requestHeaders:{...n,...o},signal:r}),"closePullRequest","mutation",a)},reopenPullRequest(a,n,r){return t(o=>e.request({document:pc,variables:a,requestHeaders:{...n,...o},signal:r}),"reopenPullRequest","mutation",a)},markPullRequestReadyForReview(a,n,r){return t(o=>e.request({document:lc,variables:a,requestHeaders:{...n,...o},signal:r}),"markPullRequestReadyForReview","mutation",a)},addPullRequestReview(a,n,r){return t(o=>e.request({document:cc,variables:a,requestHeaders:{...n,...o},signal:r}),"addPullRequestReview","mutation",a)},changePullRequestAssignees(a,n,r){return t(o=>e.request({document:yc,variables:a,requestHeaders:{...n,...o},signal:r}),"changePullRequestAssignees","mutation",a)},changePullRequestMilestone(a,n,r){return t(o=>e.request({document:dc,variables:a,requestHeaders:{...n,...o},signal:r}),"changePullRequestMilestone","mutation",a)},addPullRequestToProject(a,n,r){return t(o=>e.request({document:Sc,variables:a,requestHeaders:{...n,...o},signal:r}),"addPullRequestToProject","mutation",a)},requestReview(a,n,r){return t(o=>e.request({document:bc,variables:a,requestHeaders:{...n,...o},signal:r}),"requestReview","mutation",a)},mergePullRequest(a,n,r){return t(o=>e.request({document:Ic,variables:a,requestHeaders:{...n,...o},signal:r}),"mergePullRequest","mutation",a)},addPullRequestToMergeQueue(a,n,r){return t(o=>e.request({document:gc,variables:a,requestHeaders:{...n,...o},signal:r}),"addPullRequestToMergeQueue","mutation",a)},removePullRequestFromMergeQueue(a,n,r){return t(o=>e.request({document:Mc,variables:a,requestHeaders:{...n,...o},signal:r}),"removePullRequestFromMergeQueue","mutation",a)},enablePullRequestAutoMerge(a,n,r){return t(o=>e.request({document:mc,variables:a,requestHeaders:{...n,...o},signal:r}),"enablePullRequestAutoMerge","mutation",a)},disablePullRequestAutoMerge(a,n,r){return t(o=>e.request({document:Rc,variables:a,requestHeaders:{...n,...o},signal:r}),"disablePullRequestAutoMerge","mutation",a)},createPullRequest(a,n,r){return t(o=>e.request({document:Ac,variables:a,requestHeaders:{...n,...o},signal:r}),"createPullRequest","mutation",a)},initPullRequest(a,n,r){return t(o=>e.request({document:fc,variables:a,requestHeaders:{...n,...o},signal:r}),"initPullRequest","mutation",a)},searchRepositories(a,n,r){return t(o=>e.request({document:Pc,variables:a,requestHeaders:{...n,...o},signal:r}),"searchRepositories","query",a)},myLatestRepositories(a,n,r){return t(o=>e.request({document:Ec,variables:a,requestHeaders:{...n,...o},signal:r}),"myLatestRepositories","query",a)},milestonesForRepository(a,n,r){return t(o=>e.request({document:Cc,variables:a,requestHeaders:{...n,...o},signal:r}),"milestonesForRepository","query",a)},commentsForPullRequest(a,n,r){return t(o=>e.request({document:hc,variables:a,requestHeaders:{...n,...o},signal:r}),"commentsForPullRequest","query",a)},dataForRepository(a,n,r){return t(o=>e.request({document:Dc,variables:a,requestHeaders:{...n,...o},signal:r}),"dataForRepository","query",a)},searchRepositoryBranches(a,n,r){return t(o=>e.request({document:xc,variables:a,requestHeaders:{...n,...o},signal:r}),"searchRepositoryBranches","query",a)},repositoryIssues(a,n,r){return t(o=>e.request({document:_c,variables:a,requestHeaders:{...n,...o},signal:r}),"repositoryIssues","query",a)},repositoryReleases(a,n,r){return t(o=>e.request({document:Uc,variables:a,requestHeaders:{...n,...o},signal:r}),"repositoryReleases","query",a)},addStar(a,n,r){return t(o=>e.request({document:vc,variables:a,requestHeaders:{...n,...o},signal:r}),"addStar","mutation",a)},removeStar(a,n,r){return t(o=>e.request({document:Tc,variables:a,requestHeaders:{...n,...o},signal:r}),"removeStar","mutation",a)},myStarredRepositories(a,n,r){return t(o=>e.request({document:wc,variables:a,requestHeaders:{...n,...o},signal:r}),"myStarredRepositories","query",a)},getViewer(a,n,r){return t(o=>e.request({document:Oc,variables:a,requestHeaders:{...n,...o},signal:r}),"getViewer","query",a)},getViewerStats(a,n,r){return t(o=>e.request({document:Bc,variables:a,requestHeaders:{...n,...o},signal:r}),"getViewerStats","query",a)},getViewerStatsDetails(a,n,r){return t(o=>e.request({document:qc,variables:a,requestHeaders:{...n,...o},signal:r}),"getViewerStatsDetails","query",a)}}}var yn=null,dn=null,Bi=null,Nc=(0,wi.getPreferenceValues)();function Vc({token:e,type:t}){let a=t==="personal"?`token ${e}`:`bearer ${e}`;Bi=e,yn=vi(new tr("https://api.github.com/graphql",{headers:{authorization:a}})),dn=new Ti.Octokit({auth:e,request:{fetch:yr}})}var qi=Oi.OAuthService.github({personalAccessToken:Nc.personalAccessToken,scope:"notifications repo project read:org read:user read:packages",onAuthorize:Vc});function $(){if(!yn||!dn)throw new Error("GitHub clients not initialized");return{github:yn,octokit:dn,token:Bi}}var q=require("@raycast/api"),as=L(ge()),rs=require("date-fns");var O=require("@raycast/api"),Ni=require("lodash");function Sr(e){switch(e){case"SUCCESS":return{icon:"Check",text:"Success"};case"ERROR":case"FAILURE":return{icon:"Xmark",text:"Failure"};case"PENDING":return{icon:"Clock",text:"Pending"};default:return null}}var ma=require("@raycast/api");function fe(e){return e?{icon:{source:e.avatarUrl??ma.Icon.Person,mask:ma.Image.Mask.Circle},text:(e.name?e.name:e.login)??"-"}:{icon:ma.Icon.Person,text:"Unknown"}}function br(e){switch(e){case"MERGE":return"Create Merge Commit";case"SQUASH":return"Squash and Merge";case"REBASE":return"Rebase and Merge";default:{let t=e;throw new Error(`Unknown merge method: ${t}`)}}}function bn(e){return e.merged?{icon:{source:"pull-request-merged.svg",tintColor:O.Color.Purple},text:"Merged",color:O.Color.Purple}:e.closed?{icon:{source:"pull-request-closed.svg",tintColor:O.Color.Red},text:"Closed",color:O.Color.Red}:e.isDraft?{icon:{source:"pull-request-draft.svg",tintColor:O.Color.SecondaryText},text:"Draft",color:O.Color.SecondaryText}:e.isInMergeQueue?{icon:{source:"pull-request-merge-queue.svg",tintColor:O.Color.Orange},text:"In Merge Queue",color:O.Color.Orange}:{icon:{source:"pull-request-open.svg",tintColor:O.Color.Green},text:"Open",color:O.Color.Green}}function Vi(e){return fe(e.author)}function ki(e){let t=e.reviewRequests?.nodes?.map(n=>{let r=n?.requestedReviewer;if(r){let o;"userName"in r&&(o=r.userName),"teamName"in r&&(o=r.teamName);let u;"githubUsername"in r&&(u=r.githubUsername);let i;return"userAvatarURL"in r&&(i=r.userAvatarURL),"teamAvatarURL"in r&&(i=r.teamAvatarURL),{id:"id"in r?r.id:"",...fe({name:o,login:u,avatarUrl:i})}}}),a=(0,Ni.uniqBy)(e.reviews?.nodes?.map(n=>({id:n?.author?.id,...fe(n?.author)})),"id");return[...t??[],...a??[]]}function Fi(e){let t=Sr(e);return t?{icon:O.Icon[t.icon],tooltip:`Checks: ${t.text}`}:null}function ji(e){switch(e){case"added":return{icon:{source:O.Icon.PlusCircle,tintColor:O.Color.Green},tooltip:"Added"};case"removed":return{icon:{source:O.Icon.MinusCircle,tintColor:O.Color.Red},tooltip:"Removed"};case"renamed":return{icon:{source:O.Icon.ArrowRight,tintColor:O.Color.SecondaryText},tooltip:"Renamed"};case"copied":return{icon:{source:O.Icon.CopyClipboard,tintColor:O.Color.SecondaryText},tooltip:"Copied"};case"unchanged":return{icon:{source:O.Icon.Circle,tintColor:O.Color.SecondaryText},tooltip:"Unchanged"};case"changed":return{icon:{source:O.Icon.Pencil,tintColor:O.Color.Orange},tooltip:"Changed"};default:return{icon:{source:O.Icon.Pencil,tintColor:O.Color.Orange},tooltip:"Modified"}}}var Sn=400;function zi(e){let t=e.split(`
`);return t.length<=Sn?{patch:e,remainingLines:0}:{patch:t.slice(0,Sn).join(`
`),remainingLines:t.length-Sn}}var Hi=[{title:"Newest",value:"sort:created-desc"},{title:"Oldest",value:"sort:created-asc"},{title:"Most Commented",value:"sort:comments-desc"},{title:"Least Commented",value:"sort:comments-asc"},{title:"Recently Updated",value:"sort:updated-desc"},{title:"Least Recently Updated",value:"sort:updated-asc"},{title:"Best Match",value:"sort:relevance-desc"},{title:"\u{1F44D}",value:"sort:reactions-+1-desc"},{title:"\u{1F44E}",value:"sort:reactions--1-desc"},{title:"\u{1F604}",value:"sort:reactions-smile-desc"},{title:"\u{1F389}",value:"sort:reactions-tada-desc"},{title:"\u{1F641}",value:"sort:reactions-thinking_face-desc"},{title:"\u2764\uFE0F",value:"sort:reactions-heart-desc"},{title:"\u{1F680}",value:"sort:reactions-rocket-desc"},{title:"\u{1F440}",value:"sort:reactions-eyes-desc"}];function lt(e,t,{suffix:a="s",withNumber:n=!1}={}){let r=`${t}${e!==1?a:""}`;return n?`${e} ${r}`:r}var Gi=L(ge());function Ir(){let{github:e}=$(),{data:t}=(0,Gi.useCachedPromise)(async()=>(await e.getViewer()).viewer);return t}var c=require("@raycast/api"),Wt=L(ge()),Qt=require("react");function H(e){return e?.response?.errors?e.response.errors[0].message:e instanceof Error?e.message:String(e)}var F=require("@raycast/api"),gr=L(ge());var je=require("react/jsx-runtime");function In({pullRequest:e,mutate:t}){let{github:a}=$(),{pop:n}=(0,F.useNavigation)(),{handleSubmit:r,itemProps:o}=(0,gr.useForm)({async onSubmit(u){try{await(0,F.showToast)({style:F.Toast.Style.Animated,title:"Adding Review"}),await a.addPullRequestReview({nodeId:e.id,body:u.comment,event:u.event}),await t(),n(),await(0,F.showToast)({style:F.Toast.Style.Success,title:"Review added"})}catch(i){await(0,F.showToast)({style:F.Toast.Style.Failure,title:"Failed to add review",message:H(i)})}},validation:{comment:gr.FormValidation.Required}});return(0,je.jsxs)(F.Form,{actions:(0,je.jsx)(F.ActionPanel,{children:(0,je.jsx)(F.Action.SubmitForm,{title:"Submit",icon:F.Icon.Plus,onSubmit:r})}),children:[(0,je.jsx)(F.Form.TextArea,{...o.comment,title:"Comment",placeholder:"Add your comments here (markdown is supported)",enableMarkdown:!0}),(0,je.jsxs)(F.Form.Dropdown,{...o.event,title:"Review Type",children:[(0,je.jsx)(F.Form.Dropdown.Item,{title:"Comment",value:"COMMENT"}),(0,je.jsx)(F.Form.Dropdown.Item,{title:"Approve",value:"APPROVE"}),(0,je.jsx)(F.Form.Dropdown.Item,{title:"Request changes",value:"REQUEST_CHANGES"})]})]})}var mr=require("node:child_process"),Ki=require("node:fs"),Yi=L(require("node:path")),gn=require("node:util"),w=require("@raycast/api"),$t=L(ge());var Mr=require("node:child_process");var Qi=require("node:util"),Se=require("@raycast/api"),kc=L(ge());var PS=[{title:"github.dev",baseUrl:"https://github.dev/",icon:{source:"github-dev.svg",tintColor:Se.Color.PrimaryText},shortcut:Se.Keyboard.Shortcut.Common.Open},{title:"VS Code for the Web",baseUrl:"https://vscode.dev/github/",icon:{source:"vscode.svg",tintColor:Se.Color.PrimaryText},shortcut:{macOS:{modifiers:["cmd"],key:"v"},Windows:{modifiers:["ctrl"],key:"v"}}},{title:"CodeSandbox",baseUrl:"https://codesandbox.io/s/github/",icon:{source:"codesandbox.svg",tintColor:Se.Color.PrimaryText}},{title:"Replit",baseUrl:"https://repl.it/github/",icon:{source:"replit.svg",tintColor:Se.Color.PrimaryText}},{title:"Gitpod",baseUrl:"https://gitpod.io/#https://github.com/",icon:{source:"gitpod.svg",tintColor:Se.Color.PrimaryText}},{title:"Glitch",baseUrl:"https://glitch.com/edit/#!/import/github/",icon:{source:"glitch.svg",tintColor:Se.Color.PrimaryText}},{title:"Sourcegraph",baseUrl:"https://sourcegraph.com/github.com/",icon:{source:"sourcegraph.svg",tintColor:Se.Color.PrimaryText},shortcut:{macOS:{modifiers:["cmd"],key:"s"},Windows:{modifiers:["ctrl"],key:"s"}}},{title:"DeepWiki",baseUrl:"https://deepwiki.com/",icon:{source:"deepwiki.png"},shortcut:{macOS:{modifiers:["cmd"],key:"d"},Windows:{modifiers:["ctrl"],key:"d"}}},{title:"VS Code Remote Repositories",baseUrl:"vscode://GitHub.remotehub/open?url=https://github.com/",icon:{source:"vscode.svg",tintColor:Se.Color.PrimaryText}}];var Fc=[{title:"Relevance",value:""},{title:"Last Update",value:"sort:updated-desc"},{title:"Name",value:"sort:name-asc"},{title:"Stars",value:"sort:stars-desc"},{title:"Forks",value:"sort:forks-desc"}],jc=[{title:"Last Pushed",value:"pushed_at:desc"},{title:"Name",value:"name:asc"},{title:"Stars",value:"stargazers:desc"}],zc=[{title:"Recently Starred",value:"starred_at:desc"},{title:"Oldest Starred",value:"starred_at:asc"}],ES=Fc[0].value,CS=jc[0].value,hS=zc[0].value;var Wi=(e,t,a)=>{let n=a?.gitFlags??[],r=a?.targetDir??"",o=["clone",...n,Hc(e,t)];return r&&o.push(r),o};var DS=(0,Qi.promisify)(Mr.execFile);var Ra="\x1B",$i="\x07",xS=new RegExp(`${Ra}][^${$i}${Ra}]*(?:${$i}|${Ra}\\\\)`,"g"),_S=new RegExp(`${Ra}\\[[0-9;?]*[A-Za-z]`,"g"),US=new RegExp(`${Ra}\\([0-9A-Za-z]`,"g");var Hc=(e,t)=>t==="https"?`https://github.com/${e}.git`:`git@github.com:${e}.git`;var ft=require("react/jsx-runtime");function Mn({pullRequest:e}){let{repositoryCloneProtocol:t}=(0,w.getPreferenceValues)(),{itemProps:a,handleSubmit:n}=(0,$t.useForm)({async onSubmit(r){let o=e.repository.name,u=Yi.default.join(r.clonePath[0],o),i=e.headRef?.name||e.headRefName;if(!i){await(0,w.showToast)({style:w.Toast.Style.Failure,title:"Branch name not found",message:"Unable to determine the branch name for this pull request."});return}let s=(0,gn.promisify)(mr.exec),p=(0,gn.promisify)(mr.execFile);try{if((0,Ki.existsSync)(u)){await(0,w.showToast)({title:`Switching to branch ${i}`,message:`in ${u}`,style:w.Toast.Style.Animated});let{stdout:l}=await s("git remote",{cwd:u}),y=l.trim().split(`
`)[0]||"origin";await s(`git fetch ${y} ${i}`,{cwd:u}),await s(`git checkout ${i}`,{cwd:u}),await s(`git reset --hard ${y}/${i}`,{cwd:u}),await(0,w.showToast)({style:w.Toast.Style.Success,title:"Switched to branch successfully",message:`Now on ${i}`})}else await(0,w.showToast)({title:`Cloning ${e.repository.nameWithOwner}`,message:`to ${u}`,style:w.Toast.Style.Animated}),await p("git",Wi(e.repository.nameWithOwner,t,{gitFlags:["-b",i],targetDir:u})),await(0,w.showToast)({style:w.Toast.Style.Success,title:"Repository cloned successfully",message:`Checked out ${i}`});await(0,w.open)(u),await(0,w.popToRoot)(),await(0,w.closeMainWindow)()}catch(l){if(l instanceof Error&&l.message.includes("Repository not found")){await(0,$t.showFailureToast)(l,{title:"Repository not found",message:"You may not have access to this repository. Try using SSH instead of HTTPS."});return}if(l instanceof Error&&l.message.includes("already exists")){await(0,$t.showFailureToast)(l,{title:"The repository already exists",message:"Please choose a different directory to clone the repository."});return}await(0,$t.showFailureToast)(l,{title:"Failed checking out pull request"})}}});return(0,ft.jsxs)(w.Form,{navigationTitle:`Check out PR #${e.number}`,actions:(0,ft.jsx)(w.ActionPanel,{children:(0,ft.jsx)(w.Action.SubmitForm,{title:"Check out Pull Request",onSubmit:n})}),children:[(0,ft.jsx)(w.Form.Description,{title:"Repository",text:`${e.repository.nameWithOwner} - ${e.headRef?.name||e.headRefName}`}),(0,ft.jsx)(w.Form.FilePicker,{...a.clonePath,title:"Clone Path",info:"Select the directory where the repository should be cloned. If the repository already exists, it will switch to the PR branch.",allowMultipleSelection:!1,canChooseDirectories:!0,canChooseFiles:!1,storeValue:!0})]})}var se=require("@raycast/api"),Ji=L(ge()),Rr=require("date-fns");var _e=require("react/jsx-runtime");function mn({pullRequest:e}){let{github:t}=$(),{data:a,isLoading:n,pagination:r}=(0,Ji.useCachedPromise)(u=>async({cursor:i})=>{let p=(await t.pullRequestCommits({nodeId:u.id,numberOfItems:25,before:i})).node,l=p.commits.nodes?.filter(y=>y!=null)??[];return l.sort((y,S)=>{let R=y.commit.authoredDate,d=S.commit.authoredDate;return(0,Rr.compareDesc)(new Date(R),new Date(d))}),{data:l,hasMore:p.commits.pageInfo.hasPreviousPage,cursor:p.commits.pageInfo.startCursor??void 0}},[e]),o=[...new Map((a??[]).map(u=>[u.commit.id,u])).values()];return(0,_e.jsx)(se.List,{navigationTitle:`#${e.number} Commits`,isLoading:n,pagination:r,children:o.map(u=>{let i=u.commit,s=new Date(i.authoredDate),p=[{date:s,tooltip:(0,Rr.format)(s,"EEEE d MMMM yyyy 'at' HH:mm")}];if(i.statusCheckRollup?.state){let y=Fi(i.statusCheckRollup.state);y&&p.unshift(y)}let l;if(i.author){let y={source:i.author.avatarUrl,mask:se.Image.Mask.Circle};l=i.author.name?{value:y,tooltip:i.author.name}:y}return(0,_e.jsx)(se.List.Item,{title:i.message,subtitle:{value:i.abbreviatedOid,tooltip:i.oid},accessories:p,...l?{icon:l}:{},actions:(0,_e.jsxs)(se.ActionPanel,{children:[(0,_e.jsx)(se.Action.OpenInBrowser,{title:"Open Commit in Browser",url:i.url}),(0,_e.jsx)(se.Action.OpenInBrowser,{title:"Open Commit Tree in Browser",url:i.treeUrl}),(0,_e.jsxs)(se.ActionPanel.Section,{children:[(0,_e.jsx)(se.Action.CopyToClipboard,{content:i.url,title:"Copy Commit URL",shortcut:{macOS:{modifiers:["cmd","shift"],key:","},Windows:{modifiers:["ctrl","shift"],key:","}}}),(0,_e.jsx)(se.Action.CopyToClipboard,{content:i.oid,title:"Copy Commit Hash",shortcut:{macOS:{modifiers:["cmd","shift"],key:"."},Windows:{modifiers:["ctrl","shift"],key:"."}}}),(0,_e.jsx)(se.Action.CopyToClipboard,{content:i.treeUrl,title:"Copy Commit Tree URL",shortcut:{macOS:{modifiers:["ctrl","shift"],key:","},Windows:{modifiers:["alt","shift"],key:","}}}),(0,_e.jsx)(se.Action.CopyToClipboard,{content:i.message,title:"Copy Commit Message",shortcut:{macOS:{modifiers:["ctrl","shift"],key:"."},Windows:{modifiers:["alt","shift"],key:"."}}})]})]})},i.id)})})}var Xi=require("node:crypto"),Q=require("@raycast/api"),Ar=L(ge());var ue=require("react/jsx-runtime"),Zi=100,Gc=4;function Rn({pullRequest:e}){let{octokit:t}=$(),{data:a,isLoading:n,pagination:r}=(0,Ar.useCachedPromise)((i,s,p)=>async({page:l})=>{let{data:y}=await t.pulls.listFiles({owner:i,repo:s,pull_number:p,per_page:Zi,page:l+1});return{data:y,hasMore:y.length===Zi}},[e.repository.owner.login,e.repository.name,e.number],{async onError(i){await(0,Ar.showFailureToast)(i,{title:"Failed loading changed files"})}}),o=a??[],u="additions"in e&&"deletions"in e?`+${e.additions} \u2212${e.deletions}`:void 0;return(0,ue.jsxs)(Q.List,{isLoading:n,isShowingDetail:n||o.length>0,pagination:r,navigationTitle:`#${e.number} Diff`,children:[(0,ue.jsx)(Q.List.Section,{title:lt(o.length,"file",{withNumber:!0}),subtitle:u,children:o.map(i=>{let s=ji(i.status);return(0,ue.jsx)(Q.List.Item,{title:i.filename,icon:{value:s.icon,tooltip:s.tooltip},subtitle:i.previous_filename?{value:i.previous_filename,tooltip:`${i.previous_filename} \u2192 ${i.filename}`}:void 0,accessories:[{text:{value:`+${i.additions}`,color:Q.Color.Green}},{text:{value:`\u2212${i.deletions}`,color:Q.Color.Red}}],detail:(0,ue.jsx)(Q.List.Item.Detail,{markdown:$c(i)}),actions:(0,ue.jsxs)(Q.ActionPanel,{title:i.filename,children:[(0,ue.jsx)(Q.Action.OpenInBrowser,{title:"Open File Diff in Browser",url:`${e.permalink}/files#diff-${Wc(i.filename)}`}),(0,ue.jsx)(Q.Action.OpenInBrowser,{title:"Open Diff in Browser",url:`${e.permalink}/files`}),(0,ue.jsxs)(Q.ActionPanel.Section,{children:[(0,ue.jsx)(Q.Action.CopyToClipboard,{content:i.filename,title:"Copy File Path",shortcut:{macOS:{modifiers:["cmd","shift"],key:"."},Windows:{modifiers:["ctrl","shift"],key:"."}}}),i.patch?(0,ue.jsx)(Q.Action.CopyToClipboard,{content:i.patch,title:"Copy Patch",shortcut:{macOS:{modifiers:["cmd","shift"],key:","},Windows:{modifiers:["ctrl","shift"],key:","}}}):null]})]})},i.sha+i.filename)})}),(0,ue.jsx)(Q.List.EmptyView,{icon:Q.Icon.CodeBlock,title:"No changed files",description:"This pull request does not change any files.",actions:(0,ue.jsx)(Q.ActionPanel,{children:(0,ue.jsx)(Q.Action.OpenInBrowser,{title:"Open Diff in Browser",url:`${e.permalink}/files`})})})]})}function $c(e){if(!e.patch)return"_No text diff available (binary or too large). Open on GitHub to view._";let{patch:t,remainingLines:a}=zi(e.patch),n=Qc(t),r=`${n}diff
${t}
${n}`;return a===0?r:`${r}

_\u2026 truncated, ${lt(a,"more line",{withNumber:!0})}. Open the file on GitHub for the full diff._`}function Qc(e){let t=0;for(let[a]of e.matchAll(/`+/g))t=Math.max(t,a.length);return"`".repeat(Math.max(Gc,t+1))}function Wc(e){return(0,Xi.createHash)("sha256").update(e).digest("hex")}var be=require("@raycast/api"),ze=require("react/jsx-runtime"),ts=({sortQuery:e,setSortQuery:t,data:a})=>t?(0,ze.jsxs)(be.ActionPanel.Submenu,{title:"Sort by",icon:be.Icon.ArrowUp,shortcut:be.Keyboard.Shortcut.Common.Duplicate,children:[a.filter(({value:n})=>!n.startsWith("sort:reaction")).map(({title:n,value:r})=>(0,ze.jsx)(es,{title:n,value:r,sortQuery:e??"",setSortQuery:t},r||"relevance")),a.some(({value:n})=>n.startsWith("sort:reaction"))&&(0,ze.jsx)(be.ActionPanel.Section,{title:"Most Reactions",children:a.filter(({value:n})=>n.startsWith("sort:reaction")).map(({title:n,value:r})=>(0,ze.jsx)(es,{title:n,value:r,sortQuery:e??"",setSortQuery:t},r))})]}):(0,ze.jsx)(ze.Fragment,{}),es=({title:e,value:t,sortQuery:a,setSortQuery:n})=>(0,ze.jsx)(be.Action,{title:e,icon:a===t?{source:be.Icon.CheckCircle,tintColor:be.Color.Green}:be.Icon.Circle,onAction:()=>n(t)});var P=require("react/jsx-runtime");function An({pullRequest:e,viewer:t,mutateList:a,mutateDetail:n,children:r,sortQuery:o,setSortQuery:u}){let{github:i}=$();async function s(){a&&await a(),n&&await n()}async function p(){try{await(0,c.showToast)({style:c.Toast.Style.Animated,title:`Reopening pull request #${e.number}`}),await i.reopenPullRequest({nodeId:e.id}),await s(),await(0,c.showToast)({style:c.Toast.Style.Success,title:`Pull request #${e.number} is now open`})}catch(_){await(0,c.showToast)({style:c.Toast.Style.Failure,title:"Failed reopening pull request",message:H(_)})}}async function l(){try{await(0,c.showToast)({style:c.Toast.Style.Animated,title:`Marking pull request #${e.number} as ready for review`}),await i.markPullRequestReadyForReview({nodeId:e.id}),await s(),await(0,c.showToast)({style:c.Toast.Style.Success,title:`Pull request #${e.number} is ready for review`})}catch(_){await(0,c.showToast)({style:c.Toast.Style.Failure,title:"Failed marking pull request as ready for review",message:H(_)})}}async function y(){try{await(0,c.showToast)({style:c.Toast.Style.Animated,title:`Closing pull request #${e.number}`}),await i.closePullRequest({nodeId:e.id}),await s(),await(0,c.showToast)({style:c.Toast.Style.Success,title:`Pull request #${e.number} closed`})}catch(_){await(0,c.showToast)({style:c.Toast.Style.Failure,title:"Failed closing pull request",message:H(_)})}}async function S(_){try{await(0,c.showToast)({style:c.Toast.Style.Animated,title:`Merging pull request #${e.number}`}),await i.mergePullRequest({nodeId:e.id,method:_}),await s(),await(0,c.showToast)({style:c.Toast.Style.Success,title:`Pull request #${e.number} merged`})}catch(X){await(0,c.showToast)({style:c.Toast.Style.Failure,title:"Failed merging pull request",message:H(X)})}}async function R(){try{await(0,c.showToast)({style:c.Toast.Style.Animated,title:`Adding pull request #${e.number} to merge queue`}),await i.addPullRequestToMergeQueue({nodeId:e.id}),await s(),await(0,c.showToast)({style:c.Toast.Style.Success,title:`Pull request #${e.number} added to merge queue`})}catch(_){await(0,c.showToast)({style:c.Toast.Style.Failure,title:"Failed adding pull request to merge queue",message:H(_)})}}async function d(){try{await(0,c.showToast)({style:c.Toast.Style.Animated,title:`Removing pull request #${e.number} from merge queue`}),await i.removePullRequestFromMergeQueue({nodeId:e.id}),await s(),await(0,c.showToast)({style:c.Toast.Style.Success,title:`Pull request #${e.number} removed from merge queue`})}catch(_){await(0,c.showToast)({style:c.Toast.Style.Failure,title:"Failed removing pull request from merge queue",message:H(_)})}}async function I(_){try{await(0,c.showToast)({style:c.Toast.Style.Animated,title:`Enabling auto-merge for pull request #${e.number}`}),await i.enablePullRequestAutoMerge({nodeId:e.id,mergeMethod:_}),await s(),await(0,c.showToast)({style:c.Toast.Style.Success,title:`Auto-merge enabled for pull request #${e.number}`})}catch(X){await(0,c.showToast)({style:c.Toast.Style.Failure,title:"Failed enabling auto-merge",message:H(X)})}}async function b(){try{await(0,c.showToast)({style:c.Toast.Style.Animated,title:`Disabling auto-merge for pull request #${e.number}`}),await i.disablePullRequestAutoMerge({nodeId:e.id}),await s(),await(0,c.showToast)({style:c.Toast.Style.Success,title:`Auto-merge disabled for pull request #${e.number}`})}catch(_){await(0,c.showToast)({style:c.Toast.Style.Failure,title:"Failed disabling auto-merge",message:H(_)})}}async function g(_){try{await(0,c.showToast)({style:c.Toast.Style.Animated,title:"Assigning to me"});let X=e.assignees.nodes?.filter(pe=>!!pe).map(pe=>pe?.id)??[];await i.changePullRequestAssignees({pullRequestId:e.id,assigneeIds:[...X,_]}),await s(),await(0,c.showToast)({style:c.Toast.Style.Success,title:"Assigned to me"})}catch(X){await(0,c.showToast)({style:c.Toast.Style.Failure,title:"Failed assigning to me",message:H(X)})}}async function f(_){try{await(0,c.showToast)({style:c.Toast.Style.Animated,title:"Un-assigning from me"});let X=e.assignees.nodes?.filter(pe=>!!pe).map(pe=>pe?.id)??[];await i.changePullRequestAssignees({pullRequestId:e.id,assigneeIds:X?.filter(pe=>pe!==_)}),await s(),await(0,c.showToast)({style:c.Toast.Style.Success,title:"Un-assigned from me"})}catch(X){await(0,c.showToast)({style:c.Toast.Style.Failure,title:"Failed un-assigning from me",message:H(X)})}}let E=!e.closed&&!e.isDraft&&e.mergeable==="MERGEABLE"&&e.mergeStateStatus!=="BLOCKED",M=!e.closed&&!e.merged,h=e.author?"isViewer"in e.author?e.author.isViewer:e.author.login===t?.login:!1,C=M&&e.isDraft&&h,T=[e.repository.mergeCommitAllowed&&"MERGE",e.repository.squashMergeAllowed&&"SQUASH",e.repository.rebaseMergeAllowed&&"REBASE"].filter(Boolean),j=M&&e.repository.autoMergeAllowed,te=E||j,W=fe(t),k=e.assignees.nodes?.some(_=>_?.isViewer),{isOpenInBrowser:re}=(0,c.getPreferenceValues)(),ne=(0,P.jsx)(c.Action.OpenInBrowser,{url:e.permalink}),[x,Z]=re?[ne,r]:[r,ne];return(0,P.jsxs)(c.ActionPanel,{title:`#${e.number} in ${e.repository.nameWithOwner}`,children:[x,Z,(0,P.jsx)(c.Action.Push,{icon:c.Icon.Document,title:"Add Review",shortcut:{macOS:{modifiers:["cmd","shift"],key:"r"},Windows:{modifiers:["ctrl","shift"],key:"r"}},target:(0,P.jsx)(In,{pullRequest:e,mutate:s})}),(0,P.jsx)(c.Action.Push,{icon:{source:"commit.svg",tintColor:c.Color.PrimaryText},title:"See Commits",shortcut:c.Keyboard.Shortcut.Common.Copy,target:(0,P.jsx)(mn,{pullRequest:e})}),(0,P.jsx)(c.Action.Push,{icon:c.Icon.CodeBlock,title:"View Diff",shortcut:c.Keyboard.Shortcut.Common.RemoveAll,target:(0,P.jsx)(Rn,{pullRequest:e})}),(0,P.jsx)(c.Action.Push,{icon:c.Icon.Download,title:"Checkout Pull Request",shortcut:c.Keyboard.Shortcut.Common.OpenWith,target:(0,P.jsx)(Mn,{pullRequest:e})}),te&&(0,P.jsxs)(c.ActionPanel.Section,{children:[e.isMergeQueueEnabled&&E&&!e.isInMergeQueue&&(0,P.jsx)(c.Action,{title:"Add to Merge Queue",icon:{source:"pull-request-merged.svg",tintColor:c.Color.PrimaryText},shortcut:{macOS:{modifiers:["cmd","shift"],key:"enter"},Windows:{modifiers:["ctrl","shift"],key:"enter"}},onAction:()=>R()}),e.isMergeQueueEnabled&&e.isInMergeQueue&&(0,P.jsx)(c.Action,{title:"Remove from Merge Queue",icon:{source:"pull-request-merged.svg",tintColor:c.Color.PrimaryText},shortcut:{macOS:{modifiers:["cmd","shift"],key:"enter"},Windows:{modifiers:["ctrl","shift"],key:"enter"}},onAction:()=>d()}),!e.isMergeQueueEnabled&&E?(0,P.jsxs)(P.Fragment,{children:[e.repository.mergeCommitAllowed?(0,P.jsx)(c.Action,{title:"Create Merge Commit",icon:{source:"pull-request-merged.svg",tintColor:c.Color.PrimaryText},shortcut:{macOS:{modifiers:["cmd","shift"],key:"enter"},Windows:{modifiers:["ctrl","shift"],key:"enter"}},onAction:()=>S("MERGE")}):null,e.repository.squashMergeAllowed?(0,P.jsx)(c.Action,{title:"Squash and Merge",icon:{source:"pull-request-merged.svg",tintColor:c.Color.PrimaryText},shortcut:{macOS:{modifiers:["ctrl","shift"],key:"enter"},Windows:{modifiers:["ctrl","alt","shift"],key:"enter"}},onAction:()=>S("SQUASH")}):null,e.repository.rebaseMergeAllowed?(0,P.jsx)(c.Action,{title:"Rebase and Merge",icon:{source:"pull-request-merged.svg",tintColor:c.Color.PrimaryText},shortcut:{macOS:{modifiers:["opt","shift"],key:"enter"},Windows:{modifiers:["alt","shift"],key:"enter"}},onAction:()=>S("REBASE")}):null]}):null,j&&!e.autoMergeRequest&&T.length===1&&(0,P.jsx)(c.Action,{title:"Enable Auto-Merge",icon:{source:"pull-request-merged.svg",tintColor:c.Color.PrimaryText},onAction:()=>I(T[0])}),j&&!e.autoMergeRequest&&T.length>1&&(0,P.jsx)(c.ActionPanel.Submenu,{title:"Enable Auto-Merge",icon:{source:"pull-request-merged.svg",tintColor:c.Color.PrimaryText},children:T.map(_=>(0,P.jsx)(c.Action,{title:br(_),onAction:()=>I(_)},_))}),M&&e.autoMergeRequest&&(0,P.jsx)(c.Action,{title:"Disable Auto-Merge",icon:{source:"pull-request-merged.svg",tintColor:c.Color.PrimaryText},onAction:()=>b()})]}),(0,P.jsxs)(c.ActionPanel.Section,{children:[(0,P.jsx)(Kc,{pullRequest:e,mutate:s}),t?(0,P.jsx)(c.Action,{title:k?"Unassign from Me":"Assign to Me",icon:W.icon,shortcut:{macOS:{modifiers:["cmd","shift"],key:"i"},Windows:{modifiers:["ctrl","shift"],key:"i"}},onAction:()=>k?f(t.id):g(t.id)}):null,(0,P.jsx)(Yc,{pullRequest:e,mutate:s}),(0,P.jsx)(Jc,{pullRequest:e,mutate:s}),(0,P.jsx)(Zc,{pullRequest:e,mutate:s}),(0,P.jsx)(Xc,{pullRequest:e,mutate:s})]}),(0,P.jsxs)(c.ActionPanel.Section,{children:[C?(0,P.jsx)(c.Action,{title:"Ready for Review",icon:{source:"pull-request-open.svg",tintColor:c.Color.PrimaryText},shortcut:{macOS:{modifiers:["cmd","shift"],key:"d"},Windows:{modifiers:["ctrl","shift"],key:"d"}},onAction:()=>l()}):null,e.closed&&!e.merged?(0,P.jsx)(c.Action,{title:"Reopen Pull Request",icon:{source:"pull-request-open.svg",tintColor:c.Color.PrimaryText},onAction:()=>p()}):null,e.closed?null:(0,P.jsx)(c.Action,{title:"Close Pull Request",style:c.Action.Style.Destructive,icon:c.Icon.XMarkCircle,onAction:()=>y()})]}),(0,P.jsxs)(c.ActionPanel.Section,{children:[(0,P.jsx)(c.Action.CopyToClipboard,{content:e.number,title:"Copy Pull Request Number",shortcut:{macOS:{modifiers:["cmd","shift"],key:"."},Windows:{modifiers:["ctrl","shift"],key:"."}}}),e.headRef?(0,P.jsx)(c.Action.CopyToClipboard,{content:e.headRef.name,title:"Copy Branch Name",shortcut:{macOS:{modifiers:["ctrl","shift"],key:"."},Windows:{modifiers:["alt","shift"],key:"."}}}):null,(0,P.jsx)(c.Action.CopyToClipboard,{content:e.permalink,title:"Copy Pull Request URL",shortcut:{macOS:{modifiers:["cmd","shift"],key:","},Windows:{modifiers:["ctrl","shift"],key:","}}}),(0,P.jsx)(c.Action.CopyToClipboard,{content:e.title,title:"Copy Pull Request Title",shortcut:{macOS:{modifiers:["ctrl","shift"],key:","},Windows:{modifiers:["alt","shift"],key:","}}}),(0,P.jsx)(c.Action.CopyToClipboard,{content:`[${e.title}](${e.permalink})`,title:"Copy Markdown URL",shortcut:{macOS:{modifiers:["cmd","shift"],key:";"},Windows:{modifiers:["ctrl","shift"],key:";"}}})]}),(0,P.jsxs)(c.ActionPanel.Section,{children:[(0,P.jsx)(ts,{data:Hi,sortQuery:o,setSortQuery:u}),(0,P.jsx)(c.Action,{icon:c.Icon.ArrowClockwise,title:"Refresh",onAction:s,shortcut:c.Keyboard.Shortcut.Common.Refresh})]})]})}function Kc({pullRequest:e,mutate:t}){let{github:a}=$(),[n,r]=(0,Qt.useState)(!1),[o,u]=(0,Qt.useState)(""),{data:i,isLoading:s}=(0,Wt.useCachedPromise)(async(l,y)=>a.repositoryCollaboratorsForPullRequests({owner:l.repository.owner.login,name:l.repository.name,pullRequestNumber:l.number,searchQuery:y}),[e,o],{execute:n});async function p({id:l,text:y}){try{await(0,c.showToast)({style:c.Toast.Style.Animated,title:"Requesting review",message:y}),await a.requestReview({pullRequestId:e.id,collaboratorId:l}),await t(),await(0,c.showToast)({style:c.Toast.Style.Success,title:"Requested review",message:y})}catch(S){await(0,c.showToast)({style:c.Toast.Style.Failure,title:"Failed requesting review",message:H(S)})}}return(0,P.jsx)(c.ActionPanel.Submenu,{title:"Request Review",icon:c.Icon.AddPerson,shortcut:{macOS:{modifiers:["ctrl","shift"],key:"r"},Windows:{modifiers:["alt","shift"],key:"r"}},onOpen:()=>r(!0),onSearchTextChange:u,isLoading:s,children:i?.repository?.collaborators?.nodes?.filter(l=>!l?.isViewer).map(l=>{if(!l)return null;let y=fe(l);return(0,P.jsx)(c.Action,{title:y.text,icon:y.icon,onAction:()=>p({id:l.id,text:y.text})},l.id)})})}function Yc({pullRequest:e,mutate:t}){let{github:a}=$(),[n,r]=(0,Qt.useState)(!1),{data:o,isLoading:u}=(0,Wt.useCachedPromise)(async s=>a.repositoryCollaboratorsForPullRequests({owner:s.repository.owner.login,name:s.repository.name,pullRequestNumber:s.number}),[e],{execute:n});async function i({id:s,text:p}){try{await(0,c.showToast)({style:c.Toast.Style.Animated,title:"Adding assignee",message:p});let l=o?.repository?.pullRequest?.assignees.nodes?.filter(y=>!!y).map(y=>y?.id)??[];await a.changePullRequestAssignees({pullRequestId:e.id,assigneeIds:[...l,s]}),await t(),await(0,c.showToast)({style:c.Toast.Style.Success,title:"Added assignee",message:p})}catch(l){await(0,c.showToast)({style:c.Toast.Style.Failure,title:"Failed adding assignee",message:H(l)})}}return(0,P.jsx)(c.ActionPanel.Submenu,{title:"Add Assignee",icon:c.Icon.AddPerson,shortcut:{macOS:{modifiers:["cmd","shift"],key:"a"},Windows:{modifiers:["ctrl","shift"],key:"a"}},onOpen:()=>r(!0),children:u?(0,P.jsx)(c.Action,{title:"Loading\u2026"}):o?.repository?.collaborators?.nodes?.map(s=>{if(!s)return null;let p=fe(s);return(0,P.jsx)(c.Action,{title:p.text,icon:p.icon,onAction:()=>i({id:s.id,text:p.text})},s.id)})})}function Jc({pullRequest:e,mutate:t}){let{github:a}=$(),[n,r]=(0,Qt.useState)(!1),{data:o,isLoading:u}=(0,Wt.useCachedPromise)(async s=>a.repositoryProjectsForPullRequests({owner:s.repository.owner.login,name:s.repository.name,pullRequestNumber:s.number}),[e],{execute:n});async function i({id:s,text:p}){try{await(0,c.showToast)({style:c.Toast.Style.Animated,title:"Adding to project",message:p}),await a.addPullRequestToProject({pullRequestId:e.id,projectId:s}),await t(),await(0,c.showToast)({style:c.Toast.Style.Success,title:"Added to project",message:p})}catch(l){await(0,c.showToast)({style:c.Toast.Style.Failure,title:"Failed adding to project",message:H(l)})}}return(0,P.jsx)(c.ActionPanel.Submenu,{title:"Add to Project",icon:{source:"project.svg",tintColor:c.Color.PrimaryText},shortcut:{macOS:{modifiers:["cmd","shift"],key:"p"},Windows:{modifiers:["ctrl","shift"],key:"p"}},onOpen:()=>r(!0),children:u?(0,P.jsx)(c.Action,{title:"Loading\u2026"}):o?.repository?.projectsV2.nodes?.map(s=>s?(0,P.jsx)(c.Action,{title:s.title,onAction:()=>i({id:s.id,text:s.title})},s.id):null)})}function Zc({pullRequest:e,mutate:t}){let{github:a}=$(),[n,r]=(0,Qt.useState)(!1),{data:o,isLoading:u}=(0,Wt.useCachedPromise)(async p=>a.milestonesForRepository({owner:p.repository.owner.login,name:p.repository.name}),[e],{execute:n});async function i(){try{await(0,c.showToast)({style:c.Toast.Style.Animated,title:"Removing milestone"}),await a.changePullRequestMilestone({pullRequestId:e.id,milestoneId:null}),await t(),await(0,c.showToast)({style:c.Toast.Style.Success,title:"Removed milestone"})}catch(p){await(0,c.showToast)({style:c.Toast.Style.Failure,title:"Failed removing milestone",message:H(p)})}}async function s({id:p,text:l}){try{await(0,c.showToast)({style:c.Toast.Style.Animated,title:"Setting milestone",message:l}),await a.changePullRequestMilestone({pullRequestId:e.id,milestoneId:p}),await t(),await(0,c.showToast)({style:c.Toast.Style.Success,title:"Milestone set",message:l})}catch(y){await(0,c.showToast)({style:c.Toast.Style.Failure,title:"Failed setting milestone",message:H(y)})}}return(0,P.jsx)(c.ActionPanel.Submenu,{title:"Set Milestone",icon:{source:"milestone.svg",tintColor:c.Color.PrimaryText},shortcut:{macOS:{modifiers:["cmd","shift"],key:"m"},Windows:{modifiers:["ctrl","shift"],key:"m"}},onOpen:()=>r(!0),children:u?(0,P.jsx)(c.Action,{title:"Loading\u2026"}):(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(c.Action,{title:"No Milestone",onAction:()=>i()}),o?.repository?.milestones?.nodes?.map(p=>p?(0,P.jsx)(c.Action,{title:p.title,onAction:()=>s({id:p.id,text:p.title}),autoFocus:e.milestone?.id===p.id},p.id):null)]})})}function Xc({pullRequest:e}){let{github:t}=$(),{data:a,isLoading:n}=(0,Wt.useCachedPromise)(async r=>{let i=(await t.commentsForPullRequest({owner:r.repository.owner.login,name:r.repository.name,number:r.number}))?.repository?.pullRequest?.comments.nodes?.filter(l=>l?.author?.login==="vercel");return i?.length?i.pop()?.body?.match(/\[Visit Preview\]\([^)]+\)/)?.[0]?.replace("[Visit Preview](","").replace(")","")??void 0:void 0},[e]);return(0,P.jsx)(P.Fragment,{children:n?(0,P.jsx)(c.Action,{title:"Loading\u2026"}):a&&(0,P.jsx)(c.Action.OpenInBrowser,{title:"Open Vercel Preview",shortcut:{macOS:{modifiers:["cmd","shift"],key:"v"},Windows:{modifiers:["ctrl","shift"],key:"v"}},url:a,icon:{source:"vercel.svg",tintColor:c.Color.PrimaryText}})})}var V=require("react/jsx-runtime");function fn({initialPullRequest:e,mutateList:t}){let{github:a}=$(),n=Ir(),{data:r,isLoading:o,mutate:u}=(0,as.useCachedPromise)(async S=>(await a.pullRequestDetails({nodeId:S})).node,[e.id],{initialData:e}),i=`# ${r.title}`;r?.body&&(i+=`

${r.body}`);let s=bn(r),p=Sr(r.commits.nodes?.[0]?.commit.statusCheckRollup?.state),l=Vi(r),y=ki(r);return(0,V.jsx)(q.Detail,{isLoading:o,markdown:i,navigationTitle:`#${r.number}`,metadata:(0,V.jsxs)(q.Detail.Metadata,{children:[(0,V.jsx)(q.Detail.Metadata.Label,{title:"Repository",text:r.repository.nameWithOwner}),(0,V.jsxs)(q.Detail.Metadata.TagList,{title:"Status",children:[(0,V.jsx)(q.Detail.Metadata.TagList.Item,{...s}),r.autoMergeRequest&&(0,V.jsx)(q.Detail.Metadata.TagList.Item,{text:"Auto-merge",color:q.Color.Yellow})]}),p?(0,V.jsx)(q.Detail.Metadata.Label,{title:"Checks",text:p.text,icon:q.Icon[p.icon]}):null,(0,V.jsx)(q.Detail.Metadata.Label,{title:"From",text:r.headRef?.name??r.headRefName}),r.baseRef?(0,V.jsx)(q.Detail.Metadata.Label,{title:"Into",text:r.baseRef?.name??r.baseRefName}):null,r.additions&&r.deletions?(0,V.jsx)(q.Detail.Metadata.Label,{title:"Code Changes",text:`+${r.additions}  -${r.deletions}`}):null,r.createdAt?(0,V.jsx)(q.Detail.Metadata.Label,{title:"Created",text:(0,rs.format)(new Date(r.createdAt),"dd MMM")}):null,(0,V.jsx)(q.Detail.Metadata.Label,{title:"Author",...l}),y.length>0?(0,V.jsx)(q.Detail.Metadata.TagList,{title:lt(y.length,"Reviewer"),children:y.map(S=>S?(0,V.jsx)(q.Detail.Metadata.TagList.Item,{...S},S.id):null)}):null,r.assignees&&r.assignees.totalCount>0?(0,V.jsx)(q.Detail.Metadata.TagList,{title:lt(r.assignees.totalCount,"Assignee"),children:r.assignees.nodes?.map(S=>{if(!S)return null;let R=fe(S);return(0,V.jsx)(q.Detail.Metadata.TagList.Item,{...R},S.id)})}):null,r.labels&&r.labels.totalCount>0?(0,V.jsx)(q.Detail.Metadata.TagList,{title:lt(r.labels.totalCount,"Label"),children:r.labels.nodes?.map(S=>S?(0,V.jsx)(q.Detail.Metadata.TagList.Item,{text:S.name,color:S.color},S.id):null)}):null,r.projectsV2&&r.projectsV2.totalCount>0?(0,V.jsx)(q.Detail.Metadata.TagList,{title:lt(r.projectsV2.totalCount,"Project"),children:r.projectsV2.nodes?.map(S=>S?(0,V.jsx)(q.Detail.Metadata.TagList.Item,{text:S.title},S.id):null)}):null,r.milestone?(0,V.jsx)(q.Detail.Metadata.Label,{title:"Milestone",text:r.milestone.title}):null]}),actions:(0,V.jsx)(An,{pullRequest:r,viewer:n,mutateList:t,mutateDetail:u})})}var ns=L(ge());var os=(0,ns.withAccessToken)(qi);var is=L(ge());function ss(){let{github:e}=$(),n=["user:@me",...Ir()?.organizations?.nodes?.flatMap(r=>r?.login?[`org:${r.login}`]:[])??[]].join(" ");return(0,is.useCachedPromise)(async r=>{let u=(await Promise.allSettled(r.split(" ").map(i=>e.searchRepositories({query:`${i} archived:false sort:updated-desc`,numberOfItems:100})))).flatMap(i=>i.status==="fulfilled"?i.value.search.nodes:[]);return[...new Map(u.map(i=>[i.id,i])).values()].sort((i,s)=>new Date(s.updatedAt).getTime()-new Date(i.updatedAt).getTime())},[n])}var v=require("react/jsx-runtime"),Pn=e=>e?e.reduce((t,a)=>(a?.id&&a?.name&&t.push({id:a.id,name:a.name}),t),[]):[],us=(e,t,a)=>{if(!a||e.some(o=>o.name===a))return e;let r=t.find(o=>o.name===a);return r?[...e,r]:[...e,{id:`virtual-${a}`,name:a}]};function ps({draftValues:e}){let{push:t}=(0,D.useNavigation)(),{data:a}=ss(),{github:n}=$(),[r,o]=(0,Pt.useState)(""),[u,i]=(0,Pt.useState)(""),{handleSubmit:s,itemProps:p,values:l,setValue:y,reset:S,focus:R}=(0,we.useForm)({async onSubmit(A){let z=await(0,D.showToast)({style:D.Toast.Style.Animated,title:"Creating pull request"});try{let Et=(await n.createPullRequest({repositoryId:A.repository,from:A.from,into:A.into,title:A.title,body:A.description,isDraft:A.draft}))?.createPullRequest?.pullRequest?.id;if(Et){let ls=await n.initPullRequest({pullRequestId:Et,reviewersIds:A.reviewers,assigneeIds:A.assignees,labelsIds:A.labels,milestoneId:A.milestone||null});await Promise.all(A.projects.map(Pr=>n.addPullRequestToProject({pullRequestId:Et,projectId:Pr})));let fr=ls?.updatePullRequest?.pullRequest;if(z.style=D.Toast.Style.Success,z.title="Created pull request",A.autoMerge)try{await n.enablePullRequestAutoMerge({nodeId:Et,mergeMethod:A.autoMergeMethod||g[0]})}catch(Pr){z.style=D.Toast.Style.Success,z.title="Created pull request, but auto-merge failed",z.message=H(Pr)}fr&&(z.primaryAction={title:"Open Pull Request",shortcut:D.Keyboard.Shortcut.Common.OpenWith,onAction:()=>t((0,v.jsx)(fn,{initialPullRequest:fr}))},z.secondaryAction={title:"Copy URL",shortcut:D.Keyboard.Shortcut.Common.Copy,onAction:()=>D.Clipboard.copy(fr.permalink)})}S({title:"",from:"",into:"",draft:!1,autoMerge:!1,autoMergeMethod:"",description:"",reviewers:[],assignees:[],labels:[],projects:[],milestone:""}),R("repository")}catch(Ze){z.style=D.Toast.Style.Failure,z.title="Failed creating pull request",z.message=H(Ze)}},initialValues:{repository:e?.repository??"",from:e?.from??"",into:e?.into??"",draft:e?.draft??!1,autoMerge:e?.autoMerge??!1,autoMergeMethod:e?.autoMergeMethod??"",title:e?.title??"",description:e?.description??"",reviewers:e?.reviewers??[],assignees:e?.assignees??[],labels:e?.labels??[],projects:e?.projects??[],milestone:e?.milestone??""},validation:{repository:we.FormValidation.Required,from:we.FormValidation.Required,into:we.FormValidation.Required,title:we.FormValidation.Required}}),{data:d,isLoading:I}=(0,we.useCachedPromise)(A=>{let z=a?.find(Ze=>Ze.id===A);return z?n.dataForRepository({owner:z.owner.login,name:z.name}):Promise.resolve(null)},[l.repository],{execute:!!l.repository}),b=d?.repository?.autoMergeAllowed??!1,g=[d?.repository?.mergeCommitAllowed&&"MERGE",d?.repository?.squashMergeAllowed&&"SQUASH",d?.repository?.rebaseMergeAllowed&&"REBASE"].filter(Boolean),f=d?.repository?.defaultBranchRef,E=f?.name??"",M=d?.repository?.collaborators?.nodes,h=M?.filter(A=>!A?.isViewer),C=d?.repository?.labels?.nodes,T=d?.repository?.projectsV2?.nodes,j=d?.repository?.milestones?.nodes,te=(A,z)=>{let Ze=a?.find(Et=>Et.id===A);return Ze?n.searchRepositoryBranches({owner:Ze.owner.login,name:Ze.name,query:z.trim()}):Promise.resolve(null)},{data:W,isLoading:k}=(0,we.useCachedPromise)(te,[l.repository,r],{execute:!!l.repository&&r.trim().length>0}),{data:re,isLoading:ne}=(0,we.useCachedPromise)(te,[l.repository,u],{execute:!!l.repository&&u.trim().length>0}),x=Pn(d?.repository?.refs?.nodes),Z=Pn(W?.repository?.refs?.nodes??d?.repository?.refs?.nodes),_=us(Z,x,l.from),X=Pn(re?.repository?.refs?.nodes??d?.repository?.refs?.nodes),pe=us(X.filter(A=>A.name!==l.from),x,l.into);return(0,Pt.useEffect)(()=>{let A=d?.repository?.pullRequestTemplates?.[0];A&&A.body&&!l.description&&y("description",A.body),f&&y("into",f.name)},[d]),(0,Pt.useEffect)(()=>{l.from&&l.into&&l.from===l.into&&(E&&E!==l.from?y("into",E):y("into",""))},[l.from,l.into,E]),(0,Pt.useEffect)(()=>{y("from",""),y("into",""),y("description",""),y("reviewers",[]),y("assignees",[]),y("labels",[]),y("projects",[]),y("milestone","")},[l.repository]),(0,v.jsxs)(D.Form,{actions:(0,v.jsx)(D.ActionPanel,{children:(0,v.jsx)(D.Action.SubmitForm,{onSubmit:s,title:"Create Pull Request"})}),enableDrafts:!0,isLoading:I,children:[(0,v.jsx)(D.Form.Dropdown,{...p.repository,title:"Repository",storeValue:!0,children:a?.map(A=>(0,v.jsx)(D.Form.Dropdown.Item,{title:A.nameWithOwner,value:A.id,icon:{source:A.owner.avatarUrl,mask:D.Image.Mask.Circle}},A.id))}),(0,v.jsx)(D.Form.Dropdown,{...p.from,title:"From",isLoading:k,throttle:!0,onSearchTextChange:o,children:_?_.map(A=>A?(0,v.jsx)(D.Form.Dropdown.Item,{title:A.name,value:A.name},A?.id):null):null}),(0,v.jsx)(D.Form.Dropdown,{...p.into,title:"Into",storeValue:!0,isLoading:ne,throttle:!0,onSearchTextChange:i,children:pe?pe.map(A=>A?(0,v.jsx)(D.Form.Dropdown.Item,{title:A.name,value:A.name},A?.id):null):null}),(0,v.jsx)(D.Form.Checkbox,{...p.draft,label:"As draft"}),b&&(0,v.jsx)(D.Form.Checkbox,{...p.autoMerge,label:"Enable auto-merge"}),b&&l.autoMerge&&g.length>1&&(0,v.jsx)(D.Form.Dropdown,{...p.autoMergeMethod,title:"Auto-merge Method",children:g.map(A=>(0,v.jsx)(D.Form.Dropdown.Item,{title:br(A),value:A},A))}),(0,v.jsx)(D.Form.Separator,{}),(0,v.jsx)(D.Form.TextField,{...p.title,title:"Title",placeholder:"Pull request title"}),(0,v.jsx)(D.Form.TextArea,{...p.description,placeholder:"Pull request description (e.g **bold**)",title:"Description",enableMarkdown:!0}),(0,v.jsx)(D.Form.TagPicker,{...p.reviewers,title:"Reviewers",children:h?.map(A=>{if(!A)return null;let z=fe(A);return(0,v.jsx)(D.Form.TagPicker.Item,{icon:z.icon,title:z.text,value:A.id},A.id)})}),(0,v.jsx)(D.Form.TagPicker,{...p.assignees,title:"Assignees",children:M?.map(A=>{if(!A)return null;let z=fe(A);return(0,v.jsx)(D.Form.TagPicker.Item,{icon:z.icon,title:z.text,value:A.id},A.id)})}),(0,v.jsx)(D.Form.TagPicker,{...p.labels,title:"Labels",children:C?.map(A=>A?(0,v.jsx)(D.Form.TagPicker.Item,{title:A.name,value:A.id,icon:{source:D.Icon.Dot,tintColor:A.color}},A.id):null)}),(0,v.jsx)(D.Form.TagPicker,{...p.projects,title:"Projects",children:T?.map(A=>A?(0,v.jsx)(D.Form.TagPicker.Item,{title:A.title,value:A.id},A.id):null)}),(0,v.jsxs)(D.Form.Dropdown,{...p.milestone,title:"Milestone",children:[(0,v.jsx)(D.Form.Dropdown.Item,{value:"",title:"None"}),j?.map(A=>A?(0,v.jsx)(D.Form.Dropdown.Item,{title:A.title,value:A.id},A.id):null)]})]})}var ey=os(ps);0&&(module.exports={PullRequestForm});
