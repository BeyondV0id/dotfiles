"use strict";var Xo=Object.create;var kt=Object.defineProperty;var ei=Object.getOwnPropertyDescriptor;var ti=Object.getOwnPropertyNames;var ai=Object.getPrototypeOf,ri=Object.prototype.hasOwnProperty;var wa=(e,t,a)=>()=>{if(a)throw a[0];try{return e&&(t=e(e=0)),t}catch(n){throw a=[n],n}};var E=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(a){throw t=0,a}},Qe=(e,t)=>{for(var a in t)kt(e,a,{get:t[a],enumerable:!0})},Vt=(e,t,a,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of ti(t))!ri.call(e,r)&&r!==a&&kt(e,r,{get:()=>t[r],enumerable:!(n=ei(t,r))||n.enumerable});return e},k=(e,t,a)=>(Vt(e,t,"default"),a&&Vt(a,t,"default")),j=(e,t,a)=>(a=e!=null?Xo(ai(e)):{},Vt(t||!e||!e.__esModule?kt(a,"default",{value:e,enumerable:!0}):a,e)),ni=e=>Vt(kt({},"__esModule",{value:!0}),e);var Dr=E(jt=>{"use strict";Object.defineProperty(jt,"__esModule",{value:!0});jt.useDeepMemo=void 0;var Oa=require("react"),oi=require("dequal/lite");function ii(e){let t=(0,Oa.useRef)(e),a=(0,Oa.useRef)(0);return(0,oi.dequal)(e,t.current)||(t.current=e,a.current+=1),(0,Oa.useMemo)(()=>t.current,[a.current])}jt.useDeepMemo=ii});var ge=E(Ft=>{"use strict";Object.defineProperty(Ft,"__esModule",{value:!0});Ft.useLatest=void 0;var si=require("react");function ui(e){let t=(0,si.useRef)(e);return t.current=e,t}Ft.useLatest=ui});var bt=E(pe=>{"use strict";var pi=pe&&pe.__createBinding||(Object.create?(function(e,t,a,n){n===void 0&&(n=a);var r=Object.getOwnPropertyDescriptor(t,a);(!r||("get"in r?!t.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,r)}):(function(e,t,a,n){n===void 0&&(n=a),e[n]=t[a]})),li=pe&&pe.__setModuleDefault||(Object.create?(function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}):function(e,t){e.default=t}),_r=pe&&pe.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var a in e)a!=="default"&&Object.prototype.hasOwnProperty.call(e,a)&&pi(t,e,a);return li(t,e),t};Object.defineProperty(pe,"__esModule",{value:!0});pe.showFailureToast=void 0;var ci=_r(require("fs")),yi=_r(require("path")),We=require("@raycast/api");function di(e,t){let a=e instanceof Error?e.message:String(e);return(0,We.showToast)({style:We.Toast.Style.Failure,title:t?.title??"Something went wrong",message:t?.message??a,primaryAction:t?.primaryAction??xr(e),secondaryAction:t?.primaryAction?xr(e):void 0})}pe.showFailureToast=di;var xr=e=>{let t=!0,a="[Extension Name]...",n="";try{let u=JSON.parse(ci.readFileSync(yi.join(We.environment.assetsPath,"..","package.json"),"utf8"));a=`[${u.title}]...`,n=`https://raycast.com/${u.owner||u.author}/${u.name}`,(!u.owner||u.access==="public")&&(t=!1)}catch{}let r=We.environment.isDevelopment||t,o=e instanceof Error?e?.stack||e?.message||"":String(e);return{title:r?"Copy Logs":"Report Error",onAction(u){u.hide(),r?We.Clipboard.copy(o):(0,We.open)(`https://github.com/raycast/extensions/issues/new?&labels=extension%2Cbug&template=extension_bug_report.yml&title=${encodeURIComponent(a)}&extension-url=${encodeURI(n)}&description=${encodeURIComponent(`#### Error:
\`\`\`
${o}
\`\`\`
`)}`)}}}});var Ke=E(zt=>{"use strict";Object.defineProperty(zt,"__esModule",{value:!0});zt.usePromise=void 0;var $=require("react"),It=require("@raycast/api"),Si=Dr(),Ce=ge(),bi=bt();function Ii(e,t,a){let n=(0,$.useRef)(0),[r,o]=(0,$.useState)({isLoading:!0}),u=(0,Ce.useLatest)(e),i=(0,Ce.useLatest)(a?.abortable),s=(0,Ce.useLatest)(t||[]),p=(0,Ce.useLatest)(a?.onError),c=(0,Ce.useLatest)(a?.onData),y=(0,Ce.useLatest)(a?.onWillExecute),g=(0,Ce.useLatest)(a?.failureToastOptions),m=(0,Ce.useLatest)(r.data),l=(0,$.useRef)(),S=(0,$.useRef)({page:0}),d=(0,$.useRef)(!1),b=(0,$.useRef)(!0),R=(0,$.useRef)(50),f=(0,$.useCallback)((...q)=>{let U=++n.current;i.current&&(i.current.current?.abort(),i.current.current=new AbortController),y.current?.(q),o(C=>({...C,isLoading:!0}));let ne=gi(u.current)(...q);function ue(C){return C.name=="AbortError"||U===n.current&&(p.current?p.current(C):It.environment.launchType!==It.LaunchType.Background&&(0,bi.showFailureToast)(C,{title:"Failed to fetch latest data",primaryAction:{title:"Retry",onAction(G){G.hide(),l.current?.(...s.current||[])}},...g.current}),o({error:C,isLoading:!1})),C}return typeof ne=="function"?(d.current=!0,ne(S.current).then(({data:C,hasMore:G,cursor:St})=>(U===n.current&&(S.current&&(S.current.cursor=St,S.current.lastItem=C?.[C.length-1]),c.current&&c.current(C,S.current),G&&(R.current=C.length),b.current=G,o(Ta=>S.current.page===0?{data:C,isLoading:!1}:{data:(Ta.data||[])?.concat(C),isLoading:!1})),C),C=>(b.current=!1,ue(C)))):(d.current=!1,ne.then(C=>(U===n.current&&(c.current&&c.current(C),o({data:C,isLoading:!1})),C),ue))},[i,c,p,s,u,o,l,y,S,g]);l.current=f;let M=(0,$.useCallback)(()=>{S.current={page:0};let q=s.current||[];return f(...q)},[f,s]),P=(0,$.useCallback)(async(q,U)=>{let ne;try{if(U?.optimisticUpdate){typeof U?.rollbackOnError!="function"&&U?.rollbackOnError!==!1&&(ne=structuredClone(m.current?.value));let ue=U.optimisticUpdate;o(C=>({...C,data:ue(C.data)}))}return await q}catch(ue){if(typeof U?.rollbackOnError=="function"){let C=U.rollbackOnError;o(G=>({...G,data:C(G.data)}))}else U?.optimisticUpdate&&U?.rollbackOnError!==!1&&o(C=>({...C,data:ne}));throw ue}finally{U?.shouldRevalidateAfter!==!1&&(It.environment.launchType===It.LaunchType.Background||It.environment.commandMode==="menu-bar"?await M():M())}},[M,m,o]),A=(0,$.useCallback)(()=>{S.current.page+=1;let q=s.current||[];f(...q)},[S,s,f]);(0,$.useEffect)(()=>{S.current={page:0},a?.execute!==!1?f(...t||[]):i.current&&i.current.current?.abort()},[(0,Si.useDeepMemo)([t,a?.execute,f]),i,S]),(0,$.useEffect)(()=>()=>{i.current&&i.current.current?.abort()},[i]);let x=a?.execute!==!1?r.isLoading:!1,B={...r,isLoading:x},re=d.current?{pageSize:R.current,hasMore:b.current,onLoadMore:A}:void 0;return{...B,revalidate:M,mutate:P,pagination:re}}zt.usePromise=Ii;function gi(e){return e===Promise.all||e===Promise.race||e===Promise.resolve||e===Promise.reject?e.bind(Promise):e}});var he=E(le=>{"use strict";var Mi=le&&le.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(le,"__esModule",{value:!0});le.hash=le.reviver=le.replacer=void 0;var mi=Mi(require("object-hash"));function Ri(e,t){let a=this[e];return a instanceof Date?`__raycast_cached_date__${a.toString()}`:Buffer.isBuffer(a)?`__raycast_cached_buffer__${a.toString("base64")}`:t}le.replacer=Ri;function Ai(e,t){return typeof t=="string"&&t.startsWith("__raycast_cached_date__")?new Date(t.replace("__raycast_cached_date__","")):typeof t=="string"&&t.startsWith("__raycast_cached_buffer__")?Buffer.from(t.replace("__raycast_cached_buffer__",""),"base64"):t}le.reviver=Ai;function fi(e,t){return(0,mi.default)(e,{replacer:a=>a instanceof URLSearchParams?a.toString():a,...t})}le.hash=fi});var Gt=E(Ht=>{"use strict";Object.defineProperty(Ht,"__esModule",{value:!0});Ht.useCachedState=void 0;var Ba=require("react"),Pi=require("@raycast/api"),La=ge(),Ur=he(),Ei=Symbol("cache without namespace"),vr=new Map;function Ci(e,t,a){let n=a?.cacheNamespace||Ei,r=vr.get(n)||vr.set(n,new Pi.Cache({namespace:a?.cacheNamespace})).get(n);if(!r)throw new Error("Missing cache");let o=(0,La.useLatest)(e),u=(0,La.useLatest)(t),i=(0,Ba.useSyncExternalStore)(r.subscribe,()=>{try{return r.get(o.current)}catch(y){console.error("Could not get Cache data:",y);return}}),s=(0,Ba.useMemo)(()=>{if(typeof i<"u"){if(i==="undefined")return;try{return JSON.parse(i,Ur.reviver)}catch(y){return console.warn("The cached data is corrupted",y),u.current}}else return u.current},[i,u]),p=(0,La.useLatest)(s),c=(0,Ba.useCallback)(y=>{let g=typeof y=="function"?y(p.current):y;if(typeof g>"u")r.set(o.current,"undefined");else{let m=JSON.stringify(g,Ur.replacer);r.set(o.current,m)}return g},[r,o,p]);return[s,c]}Ht.useCachedState=Ci});var Mt=E($t=>{"use strict";Object.defineProperty($t,"__esModule",{value:!0});$t.useCachedPromise=void 0;var gt=require("react"),hi=Gt(),Di=Ke(),xi=ge(),Tr=he(),Ye=Symbol();function _i(e,t,a){let{initialData:n,keepPreviousData:r,internal_cacheKeySuffix:o,...u}=a||{},i=(0,gt.useRef)(),[s,p]=(0,hi.useCachedState)((0,Tr.hash)(t||[])+o,Ye,{cacheNamespace:(0,Tr.hash)(e)}),c=(0,gt.useRef)(s!==Ye?s:n),y=(0,gt.useRef)(void 0),{mutate:g,revalidate:m,...l}=(0,Di.usePromise)(e,t||[],{...u,onData(f,M){y.current=M,u.onData&&u.onData(f,M),!(M&&M.page>0)&&(i.current="promise",c.current=f,p(f))}}),S,d=l.pagination;y.current&&y.current.page>0&&l.data?S=l.data:i.current==="promise"?S=c.current:r&&s!==Ye?(S=s,d&&(d.hasMore=!0,d.pageSize=s.length)):r&&s===Ye?S=c.current:s!==Ye?(S=s,d&&(d.hasMore=!0,d.pageSize=s.length)):S=n;let b=(0,xi.useLatest)(S),R=(0,gt.useCallback)(async(f,M)=>{let P;try{if(M?.optimisticUpdate){typeof M?.rollbackOnError!="function"&&M?.rollbackOnError!==!1&&(P=structuredClone(b.current));let A=M.optimisticUpdate(b.current);i.current="cache",c.current=A,p(A)}return await g(f,{shouldRevalidateAfter:M?.shouldRevalidateAfter})}catch(A){if(typeof M?.rollbackOnError=="function"){let x=M.rollbackOnError(b.current);i.current="cache",c.current=x,p(x)}else M?.optimisticUpdate&&M?.rollbackOnError!==!1&&(i.current="cache",c.current=P,p(P));throw A}},[p,g,b,c,i]);return(0,gt.useEffect)(()=>{s!==Ye&&(i.current="cache",c.current=s)},[s]),{data:S,isLoading:l.isLoading,error:l.error,mutate:y.current&&y.current.page>0?g:R,pagination:d,revalidate:m}}$t.useCachedPromise=_i});var Hr=E((ie,zr)=>{"use strict";Object.defineProperty(ie,"__esModule",{value:!0});function et(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var oe=et(require("stream")),Lr=et(require("http")),Wt=et(require("url")),qr=et(require("whatwg-url")),Ui=et(require("https")),Le=et(require("zlib")),vi=oe.Readable,Me=Symbol("buffer"),qa=Symbol("type"),Rt=class e{constructor(){this[qa]="";let t=arguments[0],a=arguments[1],n=[],r=0;if(t){let u=t,i=Number(u.length);for(let s=0;s<i;s++){let p=u[s],c;p instanceof Buffer?c=p:ArrayBuffer.isView(p)?c=Buffer.from(p.buffer,p.byteOffset,p.byteLength):p instanceof ArrayBuffer?c=Buffer.from(p):p instanceof e?c=p[Me]:c=Buffer.from(typeof p=="string"?p:String(p)),r+=c.length,n.push(c)}}this[Me]=Buffer.concat(n);let o=a&&a.type!==void 0&&String(a.type).toLowerCase();o&&!/[^\u0020-\u007E]/.test(o)&&(this[qa]=o)}get size(){return this[Me].length}get type(){return this[qa]}text(){return Promise.resolve(this[Me].toString())}arrayBuffer(){let t=this[Me],a=t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength);return Promise.resolve(a)}stream(){let t=new vi;return t._read=function(){},t.push(this[Me]),t.push(null),t}toString(){return"[object Blob]"}slice(){let t=this.size,a=arguments[0],n=arguments[1],r,o;a===void 0?r=0:a<0?r=Math.max(t+a,0):r=Math.min(a,t),n===void 0?o=t:n<0?o=Math.max(t+n,0):o=Math.min(n,t);let u=Math.max(o-r,0),s=this[Me].slice(r,r+u),p=new e([],{type:arguments[2]});return p[Me]=s,p}};Object.defineProperties(Rt.prototype,{size:{enumerable:!0},type:{enumerable:!0},slice:{enumerable:!0}});Object.defineProperty(Rt.prototype,Symbol.toStringTag,{value:"Blob",writable:!1,enumerable:!1,configurable:!0});function O(e,t,a){Error.call(this,e),this.message=e,this.type=t,a&&(this.code=this.errno=a.code),Error.captureStackTrace(this,this.constructor)}O.prototype=Object.create(Error.prototype);O.prototype.constructor=O;O.prototype.name="FetchError";var ja;try{ja=require("encoding").convert}catch{}var Re=Symbol("Body internals"),wr=oe.PassThrough;function v(e){var t=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.size;let r=n===void 0?0:n;var o=a.timeout;let u=o===void 0?0:o;e==null?e=null:Nr(e)?e=Buffer.from(e.toString()):ft(e)||Buffer.isBuffer(e)||(Object.prototype.toString.call(e)==="[object ArrayBuffer]"?e=Buffer.from(e):ArrayBuffer.isView(e)?e=Buffer.from(e.buffer,e.byteOffset,e.byteLength):e instanceof oe||(e=Buffer.from(String(e)))),this[Re]={body:e,disturbed:!1,error:null},this.size=r,this.timeout=u,e instanceof oe&&e.on("error",function(i){let s=i.name==="AbortError"?i:new O(`Invalid response body while trying to fetch ${t.url}: ${i.message}`,"system",i);t[Re].error=s})}v.prototype={get body(){return this[Re].body},get bodyUsed(){return this[Re].disturbed},arrayBuffer(){return Je.call(this).then(function(e){return e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength)})},blob(){let e=this.headers&&this.headers.get("content-type")||"";return Je.call(this).then(function(t){return Object.assign(new Rt([],{type:e.toLowerCase()}),{[Me]:t})})},json(){var e=this;return Je.call(this).then(function(t){try{return JSON.parse(t.toString())}catch(a){return v.Promise.reject(new O(`invalid json response body at ${e.url} reason: ${a.message}`,"invalid-json"))}})},text(){return Je.call(this).then(function(e){return e.toString()})},buffer(){return Je.call(this)},textConverted(){var e=this;return Je.call(this).then(function(t){return Ti(t,e.headers)})}};Object.defineProperties(v.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0}});v.mixIn=function(e){for(let t of Object.getOwnPropertyNames(v.prototype))if(!(t in e)){let a=Object.getOwnPropertyDescriptor(v.prototype,t);Object.defineProperty(e,t,a)}};function Je(){var e=this;if(this[Re].disturbed)return v.Promise.reject(new TypeError(`body used already for: ${this.url}`));if(this[Re].disturbed=!0,this[Re].error)return v.Promise.reject(this[Re].error);let t=this.body;if(t===null)return v.Promise.resolve(Buffer.alloc(0));if(ft(t)&&(t=t.stream()),Buffer.isBuffer(t))return v.Promise.resolve(t);if(!(t instanceof oe))return v.Promise.resolve(Buffer.alloc(0));let a=[],n=0,r=!1;return new v.Promise(function(o,u){let i;e.timeout&&(i=setTimeout(function(){r=!0,u(new O(`Response timeout while trying to fetch ${e.url} (over ${e.timeout}ms)`,"body-timeout"))},e.timeout)),t.on("error",function(s){s.name==="AbortError"?(r=!0,u(s)):u(new O(`Invalid response body while trying to fetch ${e.url}: ${s.message}`,"system",s))}),t.on("data",function(s){if(!(r||s===null)){if(e.size&&n+s.length>e.size){r=!0,u(new O(`content size at ${e.url} over limit: ${e.size}`,"max-size"));return}n+=s.length,a.push(s)}}),t.on("end",function(){if(!r){clearTimeout(i);try{o(Buffer.concat(a,n))}catch(s){u(new O(`Could not create Buffer from response body for ${e.url}: ${s.message}`,"system",s))}}})})}function Ti(e,t){if(typeof ja!="function")throw new Error("The package `encoding` must be installed to use the textConverted() function");let a=t.get("content-type"),n="utf-8",r,o;return a&&(r=/charset=([^;]*)/i.exec(a)),o=e.slice(0,1024).toString(),!r&&o&&(r=/<meta.+?charset=(['"])(.+?)\1/i.exec(o)),!r&&o&&(r=/<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(o),r||(r=/<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(o),r&&r.pop()),r&&(r=/charset=(.*)/i.exec(r.pop()))),!r&&o&&(r=/<\?xml.+?encoding=(['"])(.+?)\1/i.exec(o)),r&&(n=r.pop(),(n==="gb2312"||n==="gbk")&&(n="gb18030")),ja(e,"UTF-8",n).toString()}function Nr(e){return typeof e!="object"||typeof e.append!="function"||typeof e.delete!="function"||typeof e.get!="function"||typeof e.getAll!="function"||typeof e.has!="function"||typeof e.set!="function"?!1:e.constructor.name==="URLSearchParams"||Object.prototype.toString.call(e)==="[object URLSearchParams]"||typeof e.sort=="function"}function ft(e){return typeof e=="object"&&typeof e.arrayBuffer=="function"&&typeof e.type=="string"&&typeof e.stream=="function"&&typeof e.constructor=="function"&&typeof e.constructor.name=="string"&&/^(Blob|File)$/.test(e.constructor.name)&&/^(Blob|File)$/.test(e[Symbol.toStringTag])}function Vr(e){let t,a,n=e.body;if(e.bodyUsed)throw new Error("cannot clone body after it is used");return n instanceof oe&&typeof n.getBoundary!="function"&&(t=new wr,a=new wr,n.pipe(t),n.pipe(a),e[Re].body=t,n=a),n}function kr(e){return e===null?null:typeof e=="string"?"text/plain;charset=UTF-8":Nr(e)?"application/x-www-form-urlencoded;charset=UTF-8":ft(e)?e.type||null:Buffer.isBuffer(e)||Object.prototype.toString.call(e)==="[object ArrayBuffer]"||ArrayBuffer.isView(e)?null:typeof e.getBoundary=="function"?`multipart/form-data;boundary=${e.getBoundary()}`:e instanceof oe?null:"text/plain;charset=UTF-8"}function jr(e){let t=e.body;return t===null?0:ft(t)?t.size:Buffer.isBuffer(t)?t.length:t&&typeof t.getLengthSync=="function"&&(t._lengthRetrievers&&t._lengthRetrievers.length==0||t.hasKnownLength&&t.hasKnownLength())?t.getLengthSync():null}function wi(e,t){let a=t.body;a===null?e.end():ft(a)?a.stream().pipe(e):Buffer.isBuffer(a)?(e.write(a),e.end()):a.pipe(e)}v.Promise=global.Promise;var Fr=/[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/,Fa=/[^\t\x20-\x7e\x80-\xff]/;function mt(e){if(e=`${e}`,Fr.test(e)||e==="")throw new TypeError(`${e} is not a legal HTTP header name`)}function Or(e){if(e=`${e}`,Fa.test(e))throw new TypeError(`${e} is not a legal HTTP header value`)}function Ze(e,t){t=t.toLowerCase();for(let a in e)if(a.toLowerCase()===t)return a}var _=Symbol("map"),Z=class e{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:void 0;if(this[_]=Object.create(null),t instanceof e){let a=t.raw(),n=Object.keys(a);for(let r of n)for(let o of a[r])this.append(r,o);return}if(t!=null)if(typeof t=="object"){let a=t[Symbol.iterator];if(a!=null){if(typeof a!="function")throw new TypeError("Header pairs must be iterable");let n=[];for(let r of t){if(typeof r!="object"||typeof r[Symbol.iterator]!="function")throw new TypeError("Each header pair must be iterable");n.push(Array.from(r))}for(let r of n){if(r.length!==2)throw new TypeError("Each header pair must be a name/value tuple");this.append(r[0],r[1])}}else for(let n of Object.keys(t)){let r=t[n];this.append(n,r)}}else throw new TypeError("Provided initializer must be an object")}get(t){t=`${t}`,mt(t);let a=Ze(this[_],t);return a===void 0?null:this[_][a].join(", ")}forEach(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:void 0,n=za(this),r=0;for(;r<n.length;){var o=n[r];let u=o[0],i=o[1];t.call(a,i,u,this),n=za(this),r++}}set(t,a){t=`${t}`,a=`${a}`,mt(t),Or(a);let n=Ze(this[_],t);this[_][n!==void 0?n:t]=[a]}append(t,a){t=`${t}`,a=`${a}`,mt(t),Or(a);let n=Ze(this[_],t);n!==void 0?this[_][n].push(a):this[_][t]=[a]}has(t){return t=`${t}`,mt(t),Ze(this[_],t)!==void 0}delete(t){t=`${t}`,mt(t);let a=Ze(this[_],t);a!==void 0&&delete this[_][a]}raw(){return this[_]}keys(){return Na(this,"key")}values(){return Na(this,"value")}[Symbol.iterator](){return Na(this,"key+value")}};Z.prototype.entries=Z.prototype[Symbol.iterator];Object.defineProperty(Z.prototype,Symbol.toStringTag,{value:"Headers",writable:!1,enumerable:!1,configurable:!0});Object.defineProperties(Z.prototype,{get:{enumerable:!0},forEach:{enumerable:!0},set:{enumerable:!0},append:{enumerable:!0},has:{enumerable:!0},delete:{enumerable:!0},keys:{enumerable:!0},values:{enumerable:!0},entries:{enumerable:!0}});function za(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"key+value";return Object.keys(e[_]).sort().map(t==="key"?function(n){return n.toLowerCase()}:t==="value"?function(n){return e[_][n].join(", ")}:function(n){return[n.toLowerCase(),e[_][n].join(", ")]})}var Ha=Symbol("internal");function Na(e,t){let a=Object.create(Ga);return a[Ha]={target:e,kind:t,index:0},a}var Ga=Object.setPrototypeOf({next(){if(!this||Object.getPrototypeOf(this)!==Ga)throw new TypeError("Value of `this` is not a HeadersIterator");var e=this[Ha];let t=e.target,a=e.kind,n=e.index,r=za(t,a),o=r.length;return n>=o?{value:void 0,done:!0}:(this[Ha].index=n+1,{value:r[n],done:!1})}},Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));Object.defineProperty(Ga,Symbol.toStringTag,{value:"HeadersIterator",writable:!1,enumerable:!1,configurable:!0});function Oi(e){let t=Object.assign({__proto__:null},e[_]),a=Ze(e[_],"Host");return a!==void 0&&(t[a]=t[a][0]),t}function Bi(e){let t=new Z;for(let a of Object.keys(e))if(!Fr.test(a))if(Array.isArray(e[a]))for(let n of e[a])Fa.test(n)||(t[_][a]===void 0?t[_][a]=[n]:t[_][a].push(n));else Fa.test(e[a])||(t[_][a]=[e[a]]);return t}var De=Symbol("Response internals"),Li=Lr.STATUS_CODES,J=class e{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};v.call(this,t,a);let n=a.status||200,r=new Z(a.headers);if(t!=null&&!r.has("Content-Type")){let o=kr(t);o&&r.append("Content-Type",o)}this[De]={url:a.url,status:n,statusText:a.statusText||Li[n],headers:r,counter:a.counter}}get url(){return this[De].url||""}get status(){return this[De].status}get ok(){return this[De].status>=200&&this[De].status<300}get redirected(){return this[De].counter>0}get statusText(){return this[De].statusText}get headers(){return this[De].headers}clone(){return new e(Vr(this),{url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected})}};v.mixIn(J.prototype);Object.defineProperties(J.prototype,{url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}});Object.defineProperty(J.prototype,Symbol.toStringTag,{value:"Response",writable:!1,enumerable:!1,configurable:!0});var me=Symbol("Request internals"),qi=Wt.URL||qr.URL,Ni=Wt.parse,Vi=Wt.format;function Va(e){return/^[a-zA-Z][a-zA-Z\d+\-.]*:/.exec(e)&&(e=new qi(e).toString()),Ni(e)}var ki="destroy"in oe.Readable.prototype;function Qt(e){return typeof e=="object"&&typeof e[me]=="object"}function ji(e){let t=e&&typeof e=="object"&&Object.getPrototypeOf(e);return!!(t&&t.constructor.name==="AbortSignal")}var _e=class e{constructor(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n;Qt(t)?n=Va(t.url):(t&&t.href?n=Va(t.href):n=Va(`${t}`),t={});let r=a.method||t.method||"GET";if(r=r.toUpperCase(),(a.body!=null||Qt(t)&&t.body!==null)&&(r==="GET"||r==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");let o=a.body!=null?a.body:Qt(t)&&t.body!==null?Vr(t):null;v.call(this,o,{timeout:a.timeout||t.timeout||0,size:a.size||t.size||0});let u=new Z(a.headers||t.headers||{});if(o!=null&&!u.has("Content-Type")){let s=kr(o);s&&u.append("Content-Type",s)}let i=Qt(t)?t.signal:null;if("signal"in a&&(i=a.signal),i!=null&&!ji(i))throw new TypeError("Expected signal to be an instanceof AbortSignal");this[me]={method:r,redirect:a.redirect||t.redirect||"follow",headers:u,parsedURL:n,signal:i},this.follow=a.follow!==void 0?a.follow:t.follow!==void 0?t.follow:20,this.compress=a.compress!==void 0?a.compress:t.compress!==void 0?t.compress:!0,this.counter=a.counter||t.counter||0,this.agent=a.agent||t.agent}get method(){return this[me].method}get url(){return Vi(this[me].parsedURL)}get headers(){return this[me].headers}get redirect(){return this[me].redirect}get signal(){return this[me].signal}clone(){return new e(this)}};v.mixIn(_e.prototype);Object.defineProperty(_e.prototype,Symbol.toStringTag,{value:"Request",writable:!1,enumerable:!1,configurable:!0});Object.defineProperties(_e.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0}});function Fi(e){let t=e[me].parsedURL,a=new Z(e[me].headers);if(a.has("Accept")||a.set("Accept","*/*"),!t.protocol||!t.hostname)throw new TypeError("Only absolute URLs are supported");if(!/^https?:$/.test(t.protocol))throw new TypeError("Only HTTP(S) protocols are supported");if(e.signal&&e.body instanceof oe.Readable&&!ki)throw new Error("Cancellation of streamed requests with AbortSignal is not supported in node < 8");let n=null;if(e.body==null&&/^(POST|PUT)$/i.test(e.method)&&(n="0"),e.body!=null){let o=jr(e);typeof o=="number"&&(n=String(o))}n&&a.set("Content-Length",n),a.has("User-Agent")||a.set("User-Agent","node-fetch/1.0 (+https://github.com/bitinn/node-fetch)"),e.compress&&!a.has("Accept-Encoding")&&a.set("Accept-Encoding","gzip,deflate");let r=e.agent;return typeof r=="function"&&(r=r(t)),Object.assign({},t,{method:e.method,headers:Oi(a),agent:r})}function Xe(e){Error.call(this,e),this.type="aborted",this.message=e,Error.captureStackTrace(this,this.constructor)}Xe.prototype=Object.create(Error.prototype);Xe.prototype.constructor=Xe;Xe.prototype.name="AbortError";var At=Wt.URL||qr.URL,Br=oe.PassThrough,zi=function(t,a){let n=new At(a).hostname,r=new At(t).hostname;return n===r||n[n.length-r.length-1]==="."&&n.endsWith(r)},Hi=function(t,a){let n=new At(a).protocol,r=new At(t).protocol;return n===r};function xe(e,t){if(!xe.Promise)throw new Error("native promise missing, set fetch.Promise to your favorite alternative");return v.Promise=xe.Promise,new xe.Promise(function(a,n){let r=new _e(e,t),o=Fi(r),u=(o.protocol==="https:"?Ui:Lr).request,i=r.signal,s=null,p=function(){let S=new Xe("The user aborted a request.");n(S),r.body&&r.body instanceof oe.Readable&&ka(r.body,S),!(!s||!s.body)&&s.body.emit("error",S)};if(i&&i.aborted){p();return}let c=function(){p(),m()},y=u(o),g;i&&i.addEventListener("abort",c);function m(){y.abort(),i&&i.removeEventListener("abort",c),clearTimeout(g)}r.timeout&&y.once("socket",function(l){g=setTimeout(function(){n(new O(`network timeout at: ${r.url}`,"request-timeout")),m()},r.timeout)}),y.on("error",function(l){n(new O(`request to ${r.url} failed, reason: ${l.message}`,"system",l)),s&&s.body&&ka(s.body,l),m()}),Gi(y,function(l){i&&i.aborted||s&&s.body&&ka(s.body,l)}),parseInt(process.version.substring(1))<14&&y.on("socket",function(l){l.addListener("close",function(S){let d=l.listenerCount("data")>0;if(s&&d&&!S&&!(i&&i.aborted)){let b=new Error("Premature close");b.code="ERR_STREAM_PREMATURE_CLOSE",s.body.emit("error",b)}})}),y.on("response",function(l){clearTimeout(g);let S=Bi(l.headers);if(xe.isRedirect(l.statusCode)){let M=S.get("Location"),P=null;try{P=M===null?null:new At(M,r.url).toString()}catch{if(r.redirect!=="manual"){n(new O(`uri requested responds with an invalid redirect URL: ${M}`,"invalid-redirect")),m();return}}switch(r.redirect){case"error":n(new O(`uri requested responds with a redirect, redirect mode is set to error: ${r.url}`,"no-redirect")),m();return;case"manual":if(P!==null)try{S.set("Location",P)}catch(x){n(x)}break;case"follow":if(P===null)break;if(r.counter>=r.follow){n(new O(`maximum redirect reached at: ${r.url}`,"max-redirect")),m();return}let A={headers:new Z(r.headers),follow:r.follow,counter:r.counter+1,agent:r.agent,compress:r.compress,method:r.method,body:r.body,signal:r.signal,timeout:r.timeout,size:r.size};if(!zi(r.url,P)||!Hi(r.url,P))for(let x of["authorization","www-authenticate","cookie","cookie2"])A.headers.delete(x);if(l.statusCode!==303&&r.body&&jr(r)===null){n(new O("Cannot follow redirect with body being a readable stream","unsupported-redirect")),m();return}(l.statusCode===303||(l.statusCode===301||l.statusCode===302)&&r.method==="POST")&&(A.method="GET",A.body=void 0,A.headers.delete("content-length")),a(xe(new _e(P,A))),m();return}}l.once("end",function(){i&&i.removeEventListener("abort",c)});let d=l.pipe(new Br),b={url:r.url,status:l.statusCode,statusText:l.statusMessage,headers:S,size:r.size,timeout:r.timeout,counter:r.counter},R=S.get("Content-Encoding");if(!r.compress||r.method==="HEAD"||R===null||l.statusCode===204||l.statusCode===304){s=new J(d,b),a(s);return}let f={flush:Le.Z_SYNC_FLUSH,finishFlush:Le.Z_SYNC_FLUSH};if(R=="gzip"||R=="x-gzip"){d=d.pipe(Le.createGunzip(f)),s=new J(d,b),a(s);return}if(R=="deflate"||R=="x-deflate"){let M=l.pipe(new Br);M.once("data",function(P){(P[0]&15)===8?d=d.pipe(Le.createInflate()):d=d.pipe(Le.createInflateRaw()),s=new J(d,b),a(s)}),M.on("end",function(){s||(s=new J(d,b),a(s))});return}if(R=="br"&&typeof Le.createBrotliDecompress=="function"){d=d.pipe(Le.createBrotliDecompress()),s=new J(d,b),a(s);return}s=new J(d,b),a(s)}),wi(y,r)})}function Gi(e,t){let a;e.on("socket",function(n){a=n}),e.on("response",function(n){let r=n.headers;r["transfer-encoding"]==="chunked"&&!r["content-length"]&&n.once("close",function(o){if(a&&a.listenerCount("data")>0&&!o){let i=new Error("Premature close");i.code="ERR_STREAM_PREMATURE_CLOSE",t(i)}})})}function ka(e,t){e.destroy?e.destroy(t):(e.emit("error",t),e.end())}xe.isRedirect=function(e){return e===301||e===302||e===303||e===307||e===308};xe.Promise=global.Promise;zr.exports=ie=xe;Object.defineProperty(ie,"__esModule",{value:!0});ie.default=ie;ie.Headers=Z;ie.Request=_e;ie.Response=J;ie.FetchError=O;ie.AbortError=Xe});var Et=E((qe,Gr)=>{var Pt=Hr(),$i=Pt.default||Pt,Kt=function(e,t){return/^\/\//.test(e)&&(e="https:"+e),$i.call(this,e,t)};Kt.ponyfill=!0;Gr.exports=qe=Kt;qe.fetch=Kt;qe.Headers=Pt.Headers;qe.Request=Pt.Request;qe.Response=Pt.Response;qe.default=Kt});var $a=E(Yt=>{"use strict";Object.defineProperty(Yt,"__esModule",{value:!0});Yt.isJSON=void 0;function Qi(e){if(e){let t=Ki(e);if(!t)return!1;if(t.subtype==="json"||t.suffix==="json"||t.suffix&&/\bjson\b/i.test(t.suffix)||t.subtype&&/\bjson\b/i.test(t.subtype))return!0}return!1}Yt.isJSON=Qi;var Wi=/^([A-Za-z0-9][A-Za-z0-9!#$&^_-]{0,126})\/([A-Za-z0-9][A-Za-z0-9!#$&^_.+-]{0,126});?$/;function Ki(e){let t=e.indexOf(";"),a=t!==-1?e.slice(0,t).trim():e.trim(),n=Wi.exec(a.toLowerCase().toLowerCase());if(!n)return;let r=n[1],o=n[2],u,i=o.lastIndexOf("+");return i!==-1&&(u=o.substring(i+1),o=o.substring(0,i)),{type:r,subtype:o,suffix:u}}});var Kr=E(Jt=>{"use strict";Object.defineProperty(Jt,"__esModule",{value:!0});Jt.useFetch=void 0;var tt=require("react"),Yi=Mt(),$r=ge(),Qr=Et(),Ji=$a(),Wr=he();async function Zi(e){if(!e.ok)throw new Error(e.statusText);let t=e.headers.get("content-type");return t&&(0,Ji.isJSON)(t)?await e.json():await e.text()}function Xi(e){return{data:e,hasMore:!1}}function es(e,t){let{parseResponse:a,mapResult:n,initialData:r,execute:o,keepPreviousData:u,onError:i,onData:s,onWillExecute:p,failureToastOptions:c,...y}=t||{},g={initialData:r,execute:o,keepPreviousData:u,onError:i,onData:s,onWillExecute:p,failureToastOptions:c},m=(0,$r.useLatest)(a||Zi),l=(0,$r.useLatest)(n||Xi),S=(0,tt.useRef)(),d=(0,tt.useRef)(),b=typeof e=="function"?e({page:0}):void 0;(!S.current||typeof d.current>"u"||d.current!==b)&&(S.current=e),d.current=b;let R=(0,tt.useRef)(),f=(0,tt.useCallback)((A,x)=>async B=>{let re=await(0,Qr.fetch)(A(B),{signal:R.current?.signal,...x}),q=await m.current(re);return l.current?.(q)},[m,l]),M=(0,tt.useCallback)(async(A,x)=>{let B=await(0,Qr.fetch)(A,{signal:R.current?.signal,...x}),re=await m.current(B);return l.current(re)?.data},[m,l]),P=(0,tt.useMemo)(()=>d.current?f:M,[d,M,f]);return(0,Yi.useCachedPromise)(P,[S.current,y],{...g,internal_cacheKeySuffix:d.current+(0,Wr.hash)(l.current)+(0,Wr.hash)(m.current),abortable:R})}Jt.useFetch=es});var Zt=E(X=>{"use strict";var ts=X&&X.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(X,"__esModule",{value:!0});X.defaultParsing=X.handleOutput=X.getSpawnedResult=X.getSpawnedPromise=void 0;var as=require("node:buffer"),Zr=ts(require("node:stream")),rs=require("node:util"),ns=require("signal-exit");function os(e,{timeout:t}={}){let a=new Promise((i,s)=>{e.on("exit",(p,c)=>{i({exitCode:p,signal:c,timedOut:!1})}),e.on("error",p=>{s(p)}),e.stdin&&e.stdin.on("error",p=>{s(p)})});if(t===0||t===void 0)return a;let n,r=new Promise((i,s)=>{n=setTimeout(()=>{e.kill("SIGTERM"),s(Object.assign(new Error("Timed out"),{timedOut:!0,signal:"SIGTERM"}))},t)}),o=a.finally(()=>{clearTimeout(n)}),u=(0,ns.onExit)(()=>{e.kill()});return Promise.race([r,o]).finally(()=>u())}X.getSpawnedPromise=os;var Qa=class extends Error{constructor(){super("The output is too big"),this.name="MaxBufferError"}},is=(0,rs.promisify)(Zr.default.pipeline);function ss(e){let{encoding:t}=e,a=t==="buffer",n=new Zr.default.PassThrough({objectMode:!1});t&&t!=="buffer"&&n.setEncoding(t);let r=0,o=[];return n.on("data",u=>{o.push(u),r+=u.length}),n.getBufferedValue=()=>a?Buffer.concat(o,r):o.join(""),n.getBufferedLength=()=>r,n}async function Yr(e,t){let a=ss(t);return await new Promise((n,r)=>{let o=u=>{u&&a.getBufferedLength()<=as.constants.MAX_LENGTH&&(u.bufferedData=a.getBufferedValue()),r(u)};(async()=>{try{await is(e,a),n()}catch(u){o(u)}})(),a.on("data",()=>{a.getBufferedLength()>1e3*1e3*80&&o(new Qa)})}),a.getBufferedValue()}async function Jr(e,t){e.destroy();try{return await t}catch(a){return a.bufferedData}}async function us({stdout:e,stderr:t},{encoding:a},n){let r=Yr(e,{encoding:a}),o=Yr(t,{encoding:a});try{return await Promise.all([n,r,o])}catch(u){return Promise.all([{error:u,exitCode:null,signal:u.signal,timedOut:u.timedOut||!1},Jr(e,r),Jr(t,o)])}}X.getSpawnedResult=us;function ps(e){let t=typeof e=="string"?`
`:10,a=typeof e=="string"?"\r":13;return e[e.length-1]===t&&(e=e.slice(0,-1)),e[e.length-1]===a&&(e=e.slice(0,-1)),e}function ls(e,t){return e.stripFinalNewline?ps(t):t}X.handleOutput=ls;var cs=({timedOut:e,timeout:t,signal:a,exitCode:n})=>e?`timed out after ${t} milliseconds`:a!=null?`was killed with ${a}`:n!=null?`failed with exit code ${n}`:"failed",ys=({stdout:e,stderr:t,error:a,signal:n,exitCode:r,command:o,timedOut:u,options:i,parentError:s})=>{let c=`Command ${cs({timedOut:u,timeout:i?.timeout,signal:n,exitCode:r})}: ${o}`,y=a?`${c}
${a.message}`:c,g=[y,t,e].filter(Boolean).join(`
`);return a?a.originalMessage=a.message:a=s,a.message=g,a.shortMessage=y,a.command=o,a.exitCode=r,a.signal=n,a.stdout=e,a.stderr=t,"bufferedData"in a&&delete a.bufferedData,a};function ds({stdout:e,stderr:t,error:a,exitCode:n,signal:r,timedOut:o,command:u,options:i,parentError:s}){if(a||n!==0||r!==null)throw ys({error:a,exitCode:n,signal:r,stdout:e,stderr:t,command:u,timedOut:o,options:i,parentError:s});return e}X.defaultParsing=ds});var en=E(at=>{"use strict";var Ss=at&&at.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(at,"__esModule",{value:!0});at.useExec=void 0;var bs=Ss(require("node:child_process")),Xr=require("react"),Is=Mt(),gs=ge(),Ct=Zt(),Ms=/ +/g;function ms(e,t){if(t)return[e,...t];let a=[];for(let n of e.trim().split(Ms)){let r=a[a.length-1];r&&r.endsWith("\\")?a[a.length-1]=`${r.slice(0,-1)} ${n}`:a.push(n)}return a}function Rs(e,t,a){let{parseOutput:n,input:r,onData:o,onWillExecute:u,initialData:i,execute:s,keepPreviousData:p,onError:c,failureToastOptions:y,...g}=Array.isArray(t)?a||{}:t||{},m={initialData:i,execute:s,keepPreviousData:p,onError:c,onData:o,onWillExecute:u,failureToastOptions:y},l=(0,Xr.useRef)(),S=(0,gs.useLatest)(n||Ct.defaultParsing),d=(0,Xr.useCallback)(async(b,R,f,M)=>{let[P,...A]=ms(b,R),x=[P,...A].join(" "),B={stripFinalNewline:!0,...f,timeout:f?.timeout||1e4,signal:l.current?.signal,encoding:f?.encoding===null?"buffer":f?.encoding||"utf8",env:{PATH:"/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin",...process.env,...f?.env}},re=bs.default.spawn(P,A,B),q=(0,Ct.getSpawnedPromise)(re,B);M&&re.stdin.end(M);let[{error:U,exitCode:ne,signal:ue,timedOut:C},G,St]=await(0,Ct.getSpawnedResult)(re,B,q),Ta=(0,Ct.handleOutput)(B,G),Zo=(0,Ct.handleOutput)(B,St);return S.current({stdout:Ta,stderr:Zo,error:U,exitCode:ne,signal:ue,timedOut:C,command:x,options:B,parentError:new Error})},[S]);return(0,Is.useCachedPromise)(d,[e,Array.isArray(t)?t:[],g,r],{...m,abortable:l})}at.useExec=Rs});var nn=E(rt=>{"use strict";var ea=rt&&rt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(rt,"__esModule",{value:!0});rt.useStreamJSON=void 0;var As=require("@raycast/api"),tn=ea(Et()),xt=require("node:fs"),Wa=require("node:fs/promises"),Xt=require("node:path"),an=require("node:stream/promises"),ht=require("react"),fs=ea(require("stream-chain")),Ps=require("stream-json"),Es=ea(require("stream-json/filters/Pick")),Cs=ea(require("stream-json/streamers/StreamArray")),rn=$a(),hs=Mt(),Ds=he();async function Dt(e,t,a){if(typeof e=="object"||e.startsWith("http://")||e.startsWith("https://"))return await xs(e,t,a);if(e.startsWith("file://"))return await _s((0,Xt.normalize)(decodeURIComponent(new URL(e).pathname)),t,a?.signal?a.signal:void 0);throw new Error("Only HTTP(S) or file URLs are supported")}async function xs(e,t,a){let n=await(0,tn.default)(e,a);if(!n.ok)throw new Error("Failed to fetch URL");if(!(0,rn.isJSON)(n.headers.get("content-type")))throw new Error("URL does not return JSON");if(!n.body)throw new Error("Failed to retrieve expected JSON content: Response body is missing or inaccessible.");await(0,an.pipeline)(n.body,(0,xt.createWriteStream)(t),a?.signal?{signal:a.signal}:void 0)}async function _s(e,t,a){await(0,an.pipeline)((0,xt.createReadStream)(e),(0,xt.createWriteStream)(t),a?{signal:a}:void 0)}async function Us(e,t,a,n,r){let o=(0,Xt.join)(t,a);try{await(0,Wa.stat)(t)}catch{(0,xt.mkdirSync)(t,{recursive:!0}),await Dt(e,o,r);return}if(n){await Dt(e,o,r);return}let u;try{u=await(0,Wa.stat)(o)}catch{await Dt(e,o,r);return}if(typeof e=="object"||e.startsWith("http://")||e.startsWith("https://")){let i=await(0,tn.default)(e,{...r,method:"HEAD"});if(!i.ok)throw new Error("Could not fetch URL");if(!(0,rn.isJSON)(i.headers.get("content-type")))throw new Error("URL does not return JSON");let s=Date.parse(i.headers.get("last-modified")??"");if(u.size===0||Number.isNaN(s)||s>u.mtimeMs){await Dt(e,o,r);return}}else if(e.startsWith("file://"))try{(await(0,Wa.stat)((0,Xt.normalize)(decodeURIComponent(new URL(e).pathname)))).mtimeMs>u.mtimeMs&&await Dt(e,o,r)}catch{throw new Error("Source file could not be read")}else throw new Error("Only HTTP(S) or file URLs are supported")}async function*vs(e,t,a,n,r,o){let u=[],i=new fs.default([(0,xt.createReadStream)(e),n?Es.default.withParser({filter:n}):(0,Ps.parser)(),new Cs.default,s=>o?.(s.value)??s.value]);a?.addEventListener("abort",()=>{i.destroy()});try{for await(let s of i){if(a?.aborted)return[];(!r||r(s))&&u.push(s),u.length>=t&&(yield u,u=[])}}catch(s){throw i.destroy(),s}return u.length>0&&(yield u),[]}function Ts(e,t){let{initialData:a,execute:n,keepPreviousData:r,onError:o,onData:u,onWillExecute:i,failureToastOptions:s,dataPath:p,filter:c,transform:y,pageSize:g=20,...m}=t??{},l=(0,ht.useRef)(),S=(0,ht.useRef)(),d={initialData:a,execute:n,keepPreviousData:r,onError:o,onData:u,onWillExecute:i,failureToastOptions:s},b=(0,ht.useRef)(null),R=(0,ht.useRef)(null),f=(0,ht.useRef)(!1);return(0,hs.useCachedPromise)((M,P,A,x,B,re)=>async({page:q})=>{let U=(0,Ds.hash)(M)+".json",ne=As.environment.supportPath;if(q===0){R.current?.abort(),R.current=new AbortController;let G=(0,Xt.join)(ne,U),St=!!(l.current&&l.current!==M&&S.current&&S.current===G);l.current=M,S.current=G,await Us(M,ne,U,St,{...A,signal:R.current?.signal}),b.current=vs(G,P,R.current?.signal,x,B,re)}if(!b.current)return{hasMore:f.current,data:[]};let{value:ue,done:C}=await b.current.next();return f.current=!C,{hasMore:f.current,data:ue??[]}},[e,g,m,p,c,y],d)}rt.useStreamJSON=Ts});var Ya=E(ce=>{"use strict";var Ka=ce&&ce.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ce,"__esModule",{value:!0});ce.baseExecuteSQL=ce.isPermissionError=ce.PermissionError=void 0;var ws=require("node:fs"),ta=require("node:fs/promises"),Os=Ka(require("node:os")),on=Ka(require("node:child_process")),sn=Ka(require("node:path")),aa=Zt(),Bs=he(),na=class extends Error{constructor(t){super(t),this.name="PermissionError"}};ce.PermissionError=na;function Ls(e){return e instanceof Error&&e.name==="PermissionError"}ce.isPermissionError=Ls;async function qs(e,t,a){if(!(0,ws.existsSync)(e))throw new Error("The database does not exist");let n=a?.signal,r,o=on.default.spawn("sqlite3",["--json","--readonly",e,t],{signal:n}),u=(0,aa.getSpawnedPromise)(o),[{error:i,exitCode:s,signal:p},c,y]=await(0,aa.getSpawnedResult)(o,{encoding:"utf-8"},u);if(ra(n),y.match("(5)")||y.match("(14)")){if(!r){let g=sn.default.join(Os.default.tmpdir(),"useSQL",(0,Bs.hash)(e));await(0,ta.mkdir)(g,{recursive:!0}),ra(n),r=sn.default.join(g,"db.db"),await(0,ta.copyFile)(e,r),await(0,ta.writeFile)(r+"-shm",""),await(0,ta.writeFile)(r+"-wal",""),ra(n)}o=on.default.spawn("sqlite3",["--json","--readonly","--vfs","unix-none",r,t],{signal:n}),u=(0,aa.getSpawnedPromise)(o),[{error:i,exitCode:s,signal:p},c,y]=await(0,aa.getSpawnedResult)(o,{encoding:"utf-8"},u),ra(n)}if(i||s!==0||p!==null)throw y.includes("authorization denied")?new na("You do not have permission to access the database."):new Error(y||"Unknown error");return JSON.parse(c.trim()||"[]")}ce.baseExecuteSQL=qs;function ra(e){if(e?.aborted){let t=new Error("aborted");throw t.name="AbortError",t}}});var pn=E(nt=>{"use strict";var Ns=nt&&nt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(nt,"__esModule",{value:!0});nt.useSQL=void 0;var ye=require("react/jsx-runtime"),N=require("@raycast/api"),Vs=require("node:fs"),ks=Ns(require("node:os")),oa=require("react"),js=Ke(),Fs=ge(),zs=bt(),Ja=Ya();function Hs(e,t,a){let{permissionPriming:n,...r}=a||{},[o,u]=(0,oa.useState)(),i=(0,Fs.useLatest)(a||{}),s=(0,oa.useRef)(),p=(0,oa.useCallback)(y=>{console.error(y);let g=y instanceof Error&&y.message.includes("authorization denied")?new Ja.PermissionError("You do not have permission to access the database."):y;(0,Ja.isPermissionError)(g)?u((0,ye.jsx)(Gs,{priming:i.current.permissionPriming})):i.current.onError?i.current.onError(g):N.environment.launchType!==N.LaunchType.Background&&(0,zs.showFailureToast)(g,{title:"Cannot query the data"})},[i]),c=(0,oa.useMemo)(()=>{if(!(0,Vs.existsSync)(e))throw new Error("The database does not exist");return async(y,g)=>{let m=s.current?.signal;return(0,Ja.baseExecuteSQL)(y,g,{signal:m})}},[e]);return{...(0,js.usePromise)(c,[e,t],{...r,onError:p}),permissionView:o}}nt.useSQL=Hs;var un=parseInt(ks.default.release().split(".")[0])>=22,Za=un?"Settings":"Preferences";function Gs(e){let t=un?{title:"Open System Settings -> Privacy",target:"x-apple.systempreferences:com.apple.preference.security?Privacy_AllFiles"}:{title:"Open System Preferences -> Security",target:"x-apple.systempreferences:com.apple.preference.security?Privacy_AllFiles"};return N.environment.commandMode==="menu-bar"?(0,ye.jsxs)(N.MenuBarExtra,{icon:N.Icon.Warning,title:N.environment.commandName,children:[(0,ye.jsx)(N.MenuBarExtra.Item,{title:"Raycast needs full disk access",tooltip:`You can revert this access in ${Za} whenever you want`}),e.priming?(0,ye.jsx)(N.MenuBarExtra.Item,{title:e.priming,tooltip:`You can revert this access in ${Za} whenever you want`}):null,(0,ye.jsx)(N.MenuBarExtra.Separator,{}),(0,ye.jsx)(N.MenuBarExtra.Item,{title:t.title,onAction:()=>(0,N.open)(t.target)})]}):(0,ye.jsx)(N.List,{children:(0,ye.jsx)(N.List.EmptyView,{icon:{source:{light:"https://raycast.com/uploads/extensions-utils-security-permissions-light.png",dark:"https://raycast.com/uploads/extensions-utils-security-permissions-dark.png"}},title:"Raycast needs full disk access.",description:`${e.priming?e.priming+`
`:""}You can revert this access in ${Za} whenever you want.`,actions:(0,ye.jsx)(N.ActionPanel,{children:(0,ye.jsx)(N.Action.Open,{...t})})})})}});var cn=E(ot=>{"use strict";Object.defineProperty(ot,"__esModule",{value:!0});ot.useForm=ot.FormValidation=void 0;var Ae=require("react"),ln=ge(),er;(function(e){e.Required="required"})(er||(ot.FormValidation=er={}));function Xa(e,t){if(e){if(typeof e=="function")return e(t);if(e===er.Required){let a=typeof t<"u"&&t!==null;if(a)switch(typeof t){case"string":a=t.length>0;break;case"object":Array.isArray(t)?a=t.length>0:t instanceof Date&&(a=t.getTime()>0);break;default:break}if(!a)return"The item is required"}}}function $s(e){let{onSubmit:t,validation:a,initialValues:n={}}=e,[r,o]=(0,Ae.useState)(n),[u,i]=(0,Ae.useState)({}),s=(0,Ae.useRef)({}),p=(0,ln.useLatest)(a||{}),c=(0,ln.useLatest)(t),y=(0,Ae.useCallback)(b=>{s.current[b]?.focus()},[s]),g=(0,Ae.useCallback)(async b=>{let R=!1;for(let[M,P]of Object.entries(p.current)){let A=Xa(P,b[M]);A&&(R||(R={},y(M)),R[M]=A)}if(R)return i(R),!1;let f=await c.current(b);return typeof f=="boolean"?f:!0},[p,c,y]),m=(0,Ae.useCallback)((b,R)=>{i(f=>({...f,[b]:R}))},[i]),l=(0,Ae.useCallback)(function(b,R){o(f=>({...f,[b]:typeof R=="function"?R(f[b]):R}))},[o]),S=(0,Ae.useMemo)(()=>new Proxy({},{get(b,R){let f=p.current[R],M=r[R];return{onChange(P){u[R]&&(Xa(f,P)||m(R,void 0)),l(R,P)},onBlur(P){let A=Xa(f,P.target.value);A&&m(R,A)},error:u[R],id:R,value:typeof M>"u"?null:M,ref:P=>{s.current[R]=P}}}}),[u,p,m,r,s,l]),d=(0,Ae.useCallback)(b=>{i({}),Object.entries(s.current).forEach(([R,f])=>{b?.[R]||f?.reset()}),b&&o(b)},[o,i,s]);return{handleSubmit:g,setValidationError:m,setValue:l,values:r,itemProps:S,focus:y,reset:d}}ot.useForm=$s});var dn=E(ia=>{"use strict";Object.defineProperty(ia,"__esModule",{value:!0});ia.useAI=void 0;var yn=require("react"),Qs=require("@raycast/api"),Ws=Ke();function Ks(e,t={}){let{creativity:a,stream:n,model:r,...o}=t,[u,i]=(0,yn.useState)(""),s=(0,yn.useRef)(),{isLoading:p,error:c,revalidate:y}=(0,Ws.usePromise)(async(g,m,l)=>{i("");let S=Qs.AI.ask(g,{creativity:m,model:r,signal:s.current?.signal});l===!1?i(await S):(S.on("data",d=>{i(b=>b+d)}),await S)},[e,a,n],{...o,abortable:s});return{isLoading:p,data:u,error:c,revalidate:y}}ia.useAI=Ks});var In=E(sa=>{"use strict";Object.defineProperty(sa,"__esModule",{value:!0});sa.useFrecencySorting=void 0;var tr=require("react"),Sn=ge(),Ys=Gt(),Js=10,bn=1440*60*1e3,Zs=Math.log(2)/(Js*bn),Xs={Default:100,Embed:0,Bookmark:140};function eu(e){let t=Date.now(),a=e?e.lastVisited:0,n=e?e.frecency:0,r=(t-a)/bn,o=Xs.Default*Math.exp(-Zs*r),u=n+o;return{lastVisited:t,frecency:u}}var tu=e=>{if(process.env.NODE_ENV!=="production"&&(typeof e!="object"||!e||!("id"in e)||typeof e.id!="string"))throw new Error("Specify a key function or make sure your items have an 'id' property");return e.id};function au(e,t){let a=(0,Sn.useLatest)(t?.key||tu),n=(0,Sn.useLatest)(t?.sortUnvisited),[r,o]=(0,Ys.useCachedState)(`raycast_frecency_${t?.namespace}`,{}),u=(0,tr.useCallback)(async function(c){let y=a.current(c);o(g=>{let m=g[y],l=eu(m);return{...g,[y]:l}})},[a,o]),i=(0,tr.useCallback)(async function(c){let y=a.current(c);o(g=>{let m={...g};return delete m[y],m})},[a,o]);return{data:(0,tr.useMemo)(()=>e?e.sort((p,c)=>{let y=r[a.current(p)],g=r[a.current(c)];return y&&!g?-1:!y&&g?1:y&&g?g.frecency-y.frecency:n.current?n.current(p,c):0}):[],[r,e,a,n]),visitItem:u,resetRanking:i}}sa.useFrecencySorting=au});var mn=E(ua=>{"use strict";Object.defineProperty(ua,"__esModule",{value:!0});ua.useLocalStorage=void 0;var ar=require("@raycast/api"),gn=bt(),Mn=he(),ru=Ke();function nu(e,t){let{data:a,isLoading:n,mutate:r}=(0,ru.usePromise)(async i=>{let s=await ar.LocalStorage.getItem(i);return typeof s<"u"?JSON.parse(s,Mn.reviver):t},[e]);async function o(i){try{await r(ar.LocalStorage.setItem(e,JSON.stringify(i,Mn.replacer)),{optimisticUpdate(s){return s}})}catch(s){await(0,gn.showFailureToast)(s,{title:"Failed to set value in local storage"})}}async function u(){try{await r(ar.LocalStorage.removeItem(e),{optimisticUpdate(){}})}catch(i){await(0,gn.showFailureToast)(i,{title:"Failed to remove value from local storage"})}}return{value:a,setValue:o,removeValue:u,isLoading:n}}ua.useLocalStorage=nu});var En=E(it=>{"use strict";Object.defineProperty(it,"__esModule",{value:!0});it.slightlyLighterColor=it.slightlyDarkerColor=void 0;function ou(e){let t=0,a=0,n=0;if(e.length===4)t=parseInt(`${e[1]}${e[1]}`,16),a=parseInt(`${e[2]}${e[2]}`,16),n=parseInt(`${e[3]}${e[3]}`,16);else if(e.length===7)t=parseInt(`${e[1]}${e[2]}`,16),a=parseInt(`${e[3]}${e[4]}`,16),n=parseInt(`${e[5]}${e[6]}`,16);else throw new Error(`Malformed hex color: ${e}`);return{r:t,g:a,b:n}}function iu({r:e,g:t,b:a}){let n=e.toString(16),r=t.toString(16),o=a.toString(16);return n.length===1&&(n=`0${n}`),r.length===1&&(r=`0${r}`),o.length===1&&(o=`0${o}`),`#${n}${r}${o}`}function su({r:e,g:t,b:a}){e/=255,t/=255,a/=255;let n=Math.min(e,t,a),r=Math.max(e,t,a),o=r-n,u=0,i=0,s=0;return o===0?u=0:r===e?u=(t-a)/o%6:r===t?u=(a-e)/o+2:u=(e-t)/o+4,u=Math.round(u*60),u<0&&(u+=360),s=(r+n)/2,i=o===0?0:o/(1-Math.abs(2*s-1)),i=+(i*100).toFixed(1),s=+(s*100).toFixed(1),{h:u,s:i,l:s}}function uu({h:e,s:t,l:a}){t/=100,a/=100;let n=(1-Math.abs(2*a-1))*t,r=n*(1-Math.abs(e/60%2-1)),o=a-n/2,u=0,i=0,s=0;return e>=0&&e<60?(u=n,i=r,s=0):e>=60&&e<120?(u=r,i=n,s=0):e>=120&&e<180?(u=0,i=n,s=r):e>=180&&e<240?(u=0,i=r,s=n):e>=240&&e<300?(u=r,i=0,s=n):e>=300&&e<360&&(u=n,i=0,s=r),u=Math.round((u+o)*255),i=Math.round((i+o)*255),s=Math.round((s+o)*255),{r:u,g:i,b:s}}function Rn(e){return su(ou(e))}function An(e){return iu(uu(e))}function fn(e,t,a){return t<a?e<t?t:e>a?a:e:e<a?a:e>t?t:e}var Pn=12;function pu(e){let t=Rn(e);return An({h:t.h,s:t.s,l:fn(t.l-Pn,0,100)})}it.slightlyDarkerColor=pu;function lu(e){let t=Rn(e);return An({h:t.h,s:t.s,l:fn(t.l+Pn,0,100)})}it.slightlyLighterColor=lu});var Dn=E(pa=>{"use strict";Object.defineProperty(pa,"__esModule",{value:!0});pa.getAvatarIcon=void 0;var Cn=En();function st(e,t){let a=e.charCodeAt(t);if(Number.isNaN(a))return["",t];if(a<55296||a>57343)return[e.charAt(t),t];if(55296<=a&&a<=56319){if(e.length<=t+1)throw new Error("High surrogate without following low surrogate");let r=e.charCodeAt(t+1);if(56320>r||r>57343)throw new Error("High surrogate without following low surrogate");return[e.charAt(t)+e.charAt(t+1),t+1]}if(t===0)throw new Error("Low surrogate without preceding high surrogate");let n=e.charCodeAt(t-1);if(55296>n||n>56319)throw new Error("Low surrogate without preceding high surrogate");return[e.charAt(t+1),t+1]}var hn=["#DC829A","#D64854","#D47600","#D36CDD","#52A9E4","#7871E8","#70920F","#43B93A","#EB6B3E","#26B795","#D85A9B","#A067DC","#BD9500","#5385D9"];function cu(e,t){let a=e.trim().split(" "),n;if(a.length==1&&st(a[0],0)[0])n=st(a[0],0)[0];else if(a.length>1){let s=st(a[0],0)[0]||"",p=st(a[a.length-1],0)[0]??"";n=s+p}else n="";let r;if(t?.background)r=t?.background;else{let s=0,[p,c]=st(n,0);for(;p;)s+=p.charCodeAt(0),[p,c]=st(n,c+1);let y=s%hn.length;r=hn[y]}let u=50-0;return`data:image/svg+xml,${`<svg width="100px" height="100px">
  ${t?.gradient!==!1?`<defs>
      <linearGradient id="Gradient" x1="0.25" x2="0.75" y1="0" y2="1">
        <stop offset="0%" stop-color="${(0,Cn.slightlyLighterColor)(r)}"/>
        <stop offset="50%" stop-color="${r}"/>
        <stop offset="100%" stop-color="${(0,Cn.slightlyDarkerColor)(r)}"/>
      </linearGradient>
  </defs>`:""}
      <circle cx="50" cy="50" r="${u}" fill="${t?.gradient!==!1?"url(#Gradient)":r}" />
      ${n?`<text x="50" y="80" font-size="${u-1}" font-family="Inter, sans-serif" text-anchor="middle" fill="white">${n.toUpperCase()}</text>`:""}
    </svg>
  `.replaceAll(`
`,"")}`}pa.getAvatarIcon=cu});var _n=E(la=>{"use strict";Object.defineProperty(la,"__esModule",{value:!0});la.getFavicon=void 0;var xn=require("@raycast/api"),yu=require("url");function du(e,t){try{let n=(typeof e=="string"?new yu.URL(e):e).hostname;return{source:`https://www.google.com/s2/favicons?sz=${t?.size??64}&domain=${n}`,fallback:t?.fallback??xn.Icon.Link,mask:t?.mask}}catch(a){return console.error(a),xn.Icon.Link}}la.getFavicon=du});var Tn=E(ca=>{"use strict";Object.defineProperty(ca,"__esModule",{value:!0});ca.getProgressIcon=void 0;var Un=require("@raycast/api");function vn(e,t,a,n){let r=(n-90)*Math.PI/180;return{x:e+a*Math.cos(r),y:t+a*Math.sin(r)}}function Su(e,t,a,n,r){let o=vn(e,t,a,r),u=vn(e,t,a,n),i=r-n<=180?"0":"1";return["M",o.x,o.y,"A",a,a,0,i,0,u.x,u.y].join(" ")}function bu(e,t=Un.Color.Red,a){let n=a?.background||(Un.environment.appearance==="light"?"black":"white"),r=a?.backgroundOpacity||.1,o=10,i=50-5-o/2;return`data:image/svg+xml,${`<svg width="100px" height="100px">
      <circle cx="50" cy="50" r="${i}" stroke-width="${o}" stroke="${e<1?n:t}" opacity="${e<1?r:"1"}" fill="none" />
      ${e>0&&e<1?`<path d="${Su(50,50,i,0,e*360)}" stroke="${t}" stroke-width="${o}" fill="none" />`:""}
    </svg>
  `.replaceAll(`
`,"")}`}ca.getProgressIcon=bu});var wn=E(fe=>{"use strict";var Iu=fe&&fe.__createBinding||(Object.create?(function(e,t,a,n){n===void 0&&(n=a);var r=Object.getOwnPropertyDescriptor(t,a);(!r||("get"in r?!t.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,r)}):(function(e,t,a,n){n===void 0&&(n=a),e[n]=t[a]})),rr=fe&&fe.__exportStar||function(e,t){for(var a in e)a!=="default"&&!Object.prototype.hasOwnProperty.call(t,a)&&Iu(t,e,a)};Object.defineProperty(fe,"__esModule",{value:!0});rr(Dn(),fe);rr(_n(),fe);rr(Tn(),fe)});var On=E(L=>{"use strict";Object.defineProperty(L,"__esModule",{value:!0});L.zoomService=L.slackService=L.linearService=L.jiraService=L.googleService=L.githubService=L.asanaService=void 0;var V=require("@raycast/api"),Ne=nr(),ya={asana:"1191201745684312",github:"7235fe8d42157f1f38c0",linear:"c8ff37b9225c3c9aefd7d66ea0e5b6f1",slack:"851756884692.5546927290212"},Ue=e=>`data:image/svg+xml,${e}`,Ve={asana:Ue('<svg xmlns="http://www.w3.org/2000/svg" width="251" height="232" fill="none"><path fill="#F06A6A" d="M179.383 54.373c0 30.017-24.337 54.374-54.354 54.374-30.035 0-54.373-24.338-54.373-54.374C70.656 24.338 94.993 0 125.029 0c30.017 0 54.354 24.338 54.354 54.373ZM54.393 122.33C24.376 122.33.02 146.668.02 176.685c0 30.017 24.337 54.373 54.373 54.373 30.035 0 54.373-24.338 54.373-54.373 0-30.017-24.338-54.355-54.373-54.355Zm141.253 0c-30.035 0-54.373 24.338-54.373 54.374 0 30.035 24.338 54.373 54.373 54.373 30.017 0 54.374-24.338 54.374-54.373 0-30.036-24.338-54.374-54.374-54.374Z"/></svg>'),github:{source:Ue('<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>'),tintColor:V.Color.PrimaryText},google:Ue('<svg xmlns="http://www.w3.org/2000/svg" style="display:block" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/><path fill="none" d="M0 0h48v48H0z"/></svg>'),jira:Ue('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="2361" height="2500" viewBox="2.59 0 214.091 224"><linearGradient id="a" x1="102.4" x2="56.15" y1="218.63" y2="172.39" gradientTransform="matrix(1 0 0 -1 0 264)" gradientUnits="userSpaceOnUse"><stop offset=".18" stop-color="#0052cc"/><stop offset="1" stop-color="#2684ff"/></linearGradient><linearGradient xlink:href="#a" id="b" x1="114.65" x2="160.81" y1="85.77" y2="131.92"/><path fill="#2684ff" d="M214.06 105.73 117.67 9.34 108.33 0 35.77 72.56 2.59 105.73a8.89 8.89 0 0 0 0 12.54l66.29 66.29L108.33 224l72.55-72.56 1.13-1.12 32.05-32a8.87 8.87 0 0 0 0-12.59zm-105.73 39.39L75.21 112l33.12-33.12L141.44 112z"/><path fill="url(#a)" d="M108.33 78.88a55.75 55.75 0 0 1-.24-78.61L35.62 72.71l39.44 39.44z"/><path fill="url(#b)" d="m141.53 111.91-33.2 33.21a55.77 55.77 0 0 1 0 78.86L181 151.35z"/></svg>'),linear:{source:{light:Ue('<svg xmlns="http://www.w3.org/2000/svg" fill="#222326" width="200" height="200" viewBox="0 0 100 100"><path d="M1.22541 61.5228c-.2225-.9485.90748-1.5459 1.59638-.857L39.3342 97.1782c.6889.6889.0915 1.8189-.857 1.5964C20.0515 94.4522 5.54779 79.9485 1.22541 61.5228ZM.00189135 46.8891c-.01764375.2833.08887215.5599.28957165.7606L52.3503 99.7085c.2007.2007.4773.3075.7606.2896 2.3692-.1476 4.6938-.46 6.9624-.9259.7645-.157 1.0301-1.0963.4782-1.6481L2.57595 39.4485c-.55186-.5519-1.49117-.2863-1.648174.4782-.465915 2.2686-.77832 4.5932-.92588465 6.9624ZM4.21093 29.7054c-.16649.3738-.08169.8106.20765 1.1l64.77602 64.776c.2894.2894.7262.3742 1.1.2077 1.7861-.7956 3.5171-1.6927 5.1855-2.684.5521-.328.6373-1.0867.1832-1.5407L8.43566 24.3367c-.45409-.4541-1.21271-.3689-1.54074.1832-.99132 1.6684-1.88843 3.3994-2.68399 5.1855ZM12.6587 18.074c-.3701-.3701-.393-.9637-.0443-1.3541C21.7795 6.45931 35.1114 0 49.9519 0 77.5927 0 100 22.4073 100 50.0481c0 14.8405-6.4593 28.1724-16.7199 37.3375-.3903.3487-.984.3258-1.3542-.0443L12.6587 18.074Z"/></svg>'),dark:Ue('<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="200" height="200" viewBox="0 0 100 100"><path d="M1.22541 61.5228c-.2225-.9485.90748-1.5459 1.59638-.857L39.3342 97.1782c.6889.6889.0915 1.8189-.857 1.5964C20.0515 94.4522 5.54779 79.9485 1.22541 61.5228ZM.00189135 46.8891c-.01764375.2833.08887215.5599.28957165.7606L52.3503 99.7085c.2007.2007.4773.3075.7606.2896 2.3692-.1476 4.6938-.46 6.9624-.9259.7645-.157 1.0301-1.0963.4782-1.6481L2.57595 39.4485c-.55186-.5519-1.49117-.2863-1.648174.4782-.465915 2.2686-.77832 4.5932-.92588465 6.9624ZM4.21093 29.7054c-.16649.3738-.08169.8106.20765 1.1l64.77602 64.776c.2894.2894.7262.3742 1.1.2077 1.7861-.7956 3.5171-1.6927 5.1855-2.684.5521-.328.6373-1.0867.1832-1.5407L8.43566 24.3367c-.45409-.4541-1.21271-.3689-1.54074.1832-.99132 1.6684-1.88843 3.3994-2.68399 5.1855ZM12.6587 18.074c-.3701-.3701-.393-.9637-.0443-1.3541C21.7795 6.45931 35.1114 0 49.9519 0 77.5927 0 100 22.4073 100 50.0481c0 14.8405-6.4593 28.1724-16.7199 37.3375-.3903.3487-.984.3258-1.3542-.0443L12.6587 18.074Z" /></svg>')}},slack:Ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="73 73 124 124"><style>.st0{fill:#e01e5a}.st1{fill:#36c5f0}.st2{fill:#2eb67d}.st3{fill:#ecb22e}</style><path d="M99.4 151.2c0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9h12.9v12.9zM105.9 151.2c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v32.3c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9v-32.3z" class="st0"/><path d="M118.8 99.4c-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v12.9h-12.9zM118.8 105.9c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H86.5c-7.1 0-12.9-5.8-12.9-12.9s5.8-12.9 12.9-12.9h32.3z" class="st1"/><path d="M170.6 118.8c0-7.1 5.8-12.9 12.9-12.9 7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9h-12.9v-12.9zM164.1 118.8c0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9V86.5c0-7.1 5.8-12.9 12.9-12.9 7.1 0 12.9 5.8 12.9 12.9v32.3z" class="st2"/><path d="M151.2 170.6c7.1 0 12.9 5.8 12.9 12.9 0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9v-12.9h12.9zM151.2 164.1c-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9h32.3c7.1 0 12.9 5.8 12.9 12.9 0 7.1-5.8 12.9-12.9 12.9h-32.3z" class="st3"/></svg>'),zoom:Ue('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 351.845 80"><path d="M73.786 78.835H10.88A10.842 10.842 0 0 1 .833 72.122a10.841 10.841 0 0 1 2.357-11.85L46.764 16.7h-31.23C6.954 16.699 0 9.744 0 1.165h58.014c4.414 0 8.357 2.634 10.046 6.712a10.843 10.843 0 0 1-2.356 11.85L22.13 63.302h36.122c8.58 0 15.534 6.955 15.534 15.534Zm278.059-48.544C351.845 13.588 338.256 0 321.553 0c-8.934 0-16.975 3.89-22.524 10.063C293.48 3.89 285.44 0 276.505 0c-16.703 0-30.291 13.588-30.291 30.291v48.544c8.579 0 15.534-6.955 15.534-15.534v-33.01c0-8.137 6.62-14.757 14.757-14.757s14.757 6.62 14.757 14.757v33.01c0 8.58 6.955 15.534 15.534 15.534V30.291c0-8.137 6.62-14.757 14.757-14.757s14.758 6.62 14.758 14.757v33.01c0 8.58 6.954 15.534 15.534 15.534V30.291ZM238.447 40c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.908-40 40-40 40 17.909 40 40Zm-15.534 0c0-13.512-10.954-24.466-24.466-24.466S173.98 26.488 173.98 40s10.953 24.466 24.466 24.466S222.913 53.512 222.913 40Zm-70.68 0c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.909-40 40-40 40 17.909 40 40Zm-15.534 0c0-13.512-10.954-24.466-24.466-24.466S87.767 26.488 87.767 40s10.954 24.466 24.466 24.466S136.699 53.512 136.699 40Z" style="fill:#0b5cff"/></svg>')},gu=e=>new Ne.OAuthService({client:new V.OAuth.PKCEClient({redirectMethod:V.OAuth.RedirectMethod.Web,providerName:"Asana",providerIcon:Ve.asana,providerId:"asana",description:"Connect your Asana account"}),clientId:e.clientId??ya.asana,authorizeUrl:e.authorizeUrl??"https://asana.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://asana.oauth.raycast.com/token",refreshTokenUrl:e.refreshTokenUrl??"https://asana.oauth.raycast.com/refresh-token",scope:e.scope,personalAccessToken:e.personalAccessToken,onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});L.asanaService=gu;var Mu=e=>new Ne.OAuthService({client:new V.OAuth.PKCEClient({redirectMethod:V.OAuth.RedirectMethod.Web,providerName:"GitHub",providerIcon:Ve.github,providerId:"github",description:"Connect your GitHub account"}),clientId:e.clientId??ya.github,authorizeUrl:e.authorizeUrl??"https://github.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://github.oauth.raycast.com/token",refreshTokenUrl:e.refreshTokenUrl??"https://github.oauth.raycast.com/refresh-token",scope:e.scope,personalAccessToken:e.personalAccessToken,onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});L.githubService=Mu;var mu=e=>new Ne.OAuthService({client:new V.OAuth.PKCEClient({redirectMethod:V.OAuth.RedirectMethod.AppURI,providerName:"Google",providerIcon:Ve.google,providerId:"google",description:"Connect your Google account"}),clientId:e.clientId,authorizeUrl:e.authorizeUrl??"https://accounts.google.com/o/oauth2/v2/auth",tokenUrl:e.tokenUrl??"https://oauth2.googleapis.com/token",refreshTokenUrl:e.tokenUrl,scope:e.scope,personalAccessToken:e.personalAccessToken,bodyEncoding:e.bodyEncoding??"url-encoded",onAuthorize:e.onAuthorize,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});L.googleService=mu;var Ru=e=>new Ne.OAuthService({client:new V.OAuth.PKCEClient({redirectMethod:V.OAuth.RedirectMethod.Web,providerName:"Jira",providerIcon:Ve.jira,providerId:"jira",description:"Connect your Jira account"}),clientId:e.clientId,authorizeUrl:e.authorizeUrl??"https://auth.atlassian.com/authorize",tokenUrl:e.tokenUrl??"https://auth.atlassian.com/oauth/token",refreshTokenUrl:e.refreshTokenUrl,scope:e.scope,personalAccessToken:e.personalAccessToken,onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});L.jiraService=Ru;var Au=e=>new Ne.OAuthService({client:new V.OAuth.PKCEClient({redirectMethod:V.OAuth.RedirectMethod.Web,providerName:"Linear",providerIcon:Ve.linear,providerId:"linear",description:"Connect your Linear account"}),clientId:e.clientId??ya.linear,authorizeUrl:e.authorizeUrl??"https://linear.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://linear.oauth.raycast.com/token",refreshTokenUrl:e.refreshTokenUrl??"https://linear.oauth.raycast.com/refresh-token",scope:e.scope,extraParameters:{actor:"user"},onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});L.linearService=Au;var fu=e=>new Ne.OAuthService({client:new V.OAuth.PKCEClient({redirectMethod:V.OAuth.RedirectMethod.Web,providerName:"Slack",providerIcon:Ve.slack,providerId:"slack",description:"Connect your Slack account"}),clientId:e.clientId??ya.slack,authorizeUrl:e.authorizeUrl??"https://slack.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://slack.oauth.raycast.com/token",refreshTokenUrl:e.tokenUrl??"https://slack.oauth.raycast.com/refresh-token",scope:"",extraParameters:{user_scope:e.scope},personalAccessToken:e.personalAccessToken,bodyEncoding:e.tokenUrl?e.bodyEncoding??"url-encoded":"json",onAuthorize:e.onAuthorize,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser??(t=>({access_token:t.authed_user.access_token,scope:t.authed_user.scope}))});L.slackService=fu;var Pu=e=>new Ne.OAuthService({client:new V.OAuth.PKCEClient({redirectMethod:V.OAuth.RedirectMethod.Web,providerName:"Zoom",providerIcon:Ve.zoom,providerId:"zoom",description:"Connect your Zoom account"}),clientId:e.clientId,authorizeUrl:e.authorizeUrl??"https://zoom.us/oauth/authorize",tokenUrl:e.tokenUrl??"https://zoom.us/oauth/token",refreshTokenUrl:e.refreshTokenUrl,scope:e.scope,personalAccessToken:e.personalAccessToken,bodyEncoding:e.bodyEncoding??"url-encoded",onAuthorize:e.onAuthorize,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});L.zoomService=Pu});var nr=E(ut=>{"use strict";var Eu=ut&&ut.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ut,"__esModule",{value:!0});ut.OAuthService=void 0;var Bn=Eu(Et()),ke=On(),de=class{constructor(t){this.clientId=t.clientId,this.scope=Array.isArray(t.scope)?t.scope.join(" "):t.scope,this.personalAccessToken=t.personalAccessToken,this.bodyEncoding=t.bodyEncoding,this.client=t.client,this.extraParameters=t.extraParameters,this.authorizeUrl=t.authorizeUrl,this.tokenUrl=t.tokenUrl,this.refreshTokenUrl=t.refreshTokenUrl,this.onAuthorize=t.onAuthorize,this.tokenResponseParser=t.tokenResponseParser??(a=>a),this.tokenRefreshResponseParser=t.tokenRefreshResponseParser??(a=>a),this.authorize=this.authorize.bind(this)}async authorize(){let t=await this.client.getTokens();if(t?.accessToken){if(t.refreshToken&&t.isExpired()){let o=await this.refreshTokens({token:t.refreshToken});if(o)return await this.client.setTokens(o),o.access_token}return t.accessToken}let a=await this.client.authorizationRequest({endpoint:this.authorizeUrl,clientId:this.clientId,scope:this.scope,extraParameters:this.extraParameters}),{authorizationCode:n}=await this.client.authorize(a),r=await this.fetchTokens({authRequest:a,authorizationCode:n});return await this.client.setTokens(r),r.access_token}async fetchTokens({authRequest:t,authorizationCode:a}){let n;if(this.bodyEncoding==="url-encoded"){let u=new URLSearchParams;u.append("client_id",this.clientId),u.append("code",a),u.append("code_verifier",t.codeVerifier),u.append("grant_type","authorization_code"),u.append("redirect_uri",t.redirectURI),n={body:u}}else n={body:JSON.stringify({client_id:this.clientId,code:a,code_verifier:t.codeVerifier,grant_type:"authorization_code",redirect_uri:t.redirectURI}),headers:{"Content-Type":"application/json"}};let r=await(0,Bn.default)(this.tokenUrl,{method:"POST",...n});if(!r.ok){let u=await r.text();throw console.error("fetch tokens error:",u),new Error(`Error while fetching tokens: ${r.status} (${r.statusText})
${u}`)}let o=this.tokenResponseParser(await r.json());return Array.isArray(o.scope)?{...o,scope:o.scope.join(" ")}:o}async refreshTokens({token:t}){let a;if(this.bodyEncoding==="url-encoded"){let r=new URLSearchParams;r.append("client_id",this.clientId),r.append("refresh_token",t),r.append("grant_type","refresh_token"),a={body:r}}else a={body:JSON.stringify({client_id:this.clientId,refresh_token:t,grant_type:"refresh_token"}),headers:{"Content-Type":"application/json"}};let n=await(0,Bn.default)(this.refreshTokenUrl??this.tokenUrl,{method:"POST",...a});if(n.ok){let r=this.tokenRefreshResponseParser(await n.json());return r.refresh_token=r.refresh_token??t,r}else{let r=await n.text();console.error("refresh tokens error:",r),this.client.description=`${this.client.providerName} needs you to sign-in again. Press \u23CE or click the button below to continue.`,await this.client.removeTokens(),await this.authorize()}}};ut.OAuthService=de;de.asana=ke.asanaService;de.github=ke.githubService;de.google=ke.googleService;de.jira=ke.jiraService;de.linear=ke.linearService;de.slack=ke.slackService;de.zoom=ke.zoomService});var Ln=E(pt=>{"use strict";Object.defineProperty(pt,"__esModule",{value:!0});pt.getAccessToken=pt.withAccessToken=void 0;var Cu=require("react/jsx-runtime"),hu=require("@raycast/api"),ve=null,je=null,or=null,ir=null,sr=null;function Du(e){return hu.environment.commandMode==="no-view"?t=>async n=>{if(!ve){ve=e.personalAccessToken??await e.authorize(),je=e.personalAccessToken?"personal":"oauth";let r=(await e.client?.getTokens())?.idToken;e.onAuthorize&&await Promise.resolve(e.onAuthorize({token:ve,type:je,idToken:r}))}return t(n)}:t=>{let a=n=>{e.personalAccessToken?(ve=e.personalAccessToken,je="personal"):(or||(or=ur(e.authorize())),ve=or.read(),je="oauth");let r;return e.client&&(ir||(ir=ur(e.client.getTokens())),r=ir.read()?.idToken),!sr&&e.onAuthorize&&(sr=ur(Promise.resolve(e.onAuthorize({token:ve,type:je,idToken:r})))),sr?.read(),(0,Cu.jsx)(t,{...n})};return a.displayName=`withAccessToken(${t.displayName||t.name})`,a}}pt.withAccessToken=Du;function xu(){if(!ve||!je)throw new Error("getAccessToken must be used when authenticated (eg. used inside `withAccessToken`)");return{token:ve,type:je}}pt.getAccessToken=xu;function ur(e){let t="pending",a,n=e.then(o=>{t="success",a=o},o=>{t="error",a=o});return{read:()=>{switch(t){case"pending":throw n;case"error":throw a;default:return a}}}}});var Nn=E(Te=>{"use strict";var _u=Te&&Te.__createBinding||(Object.create?(function(e,t,a,n){n===void 0&&(n=a);var r=Object.getOwnPropertyDescriptor(t,a);(!r||("get"in r?!t.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,r)}):(function(e,t,a,n){n===void 0&&(n=a),e[n]=t[a]})),qn=Te&&Te.__exportStar||function(e,t){for(var a in e)a!=="default"&&!Object.prototype.hasOwnProperty.call(t,a)&&_u(t,e,a)};Object.defineProperty(Te,"__esModule",{value:!0});qn(nr(),Te);qn(Ln(),Te)});var zn=E(ee=>{"use strict";var Vn=ee&&ee.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ee,"__esModule",{value:!0});ee.createDeeplink=ee.createExtensionDeeplink=ee.createScriptCommandDeeplink=ee.DeeplinkType=void 0;var lr=require("@raycast/api"),Uu=Vn(require("node:fs")),vu=Vn(require("node:path")),pr;(function(e){e.ScriptCommand="script-command",e.Extension="extension"})(pr||(ee.DeeplinkType=pr={}));function kn(){return lr.environment.raycastVersion.includes("alpha")?"raycastinternal://":"raycast://"}function Tu(){let e=JSON.parse(Uu.default.readFileSync(vu.default.join(lr.environment.assetsPath,"..","package.json"),"utf8"));return e.owner||e.author}function jn(e){let t=`${kn()}script-commands/${e.command}`;if(e.arguments){let a="";for(let n of e.arguments)a+="&arguments="+encodeURIComponent(n);t+="?"+a.substring(1)}return t}ee.createScriptCommandDeeplink=jn;function Fn(e){let t=Tu(),a=lr.environment.extensionName;"ownerOrAuthorName"in e&&"extensionName"in e&&(t=e.ownerOrAuthorName,a=e.extensionName);let n=`${kn()}extensions/${t}/${a}/${e.command}`,r="";return e.launchType&&(r+="&launchType="+encodeURIComponent(e.launchType)),e.arguments&&(r+="&arguments="+encodeURIComponent(JSON.stringify(e.arguments))),e.context&&(r+="&context="+encodeURIComponent(JSON.stringify(e.context))),e.fallbackText&&(r+="&fallbackText="+encodeURIComponent(e.fallbackText)),r&&(n+="?"+r.substring(1)),n}ee.createExtensionDeeplink=Fn;function wu(e){return e.type===pr.ScriptCommand?jn(e):Fn(e)}ee.createDeeplink=wu});var Hn=E(da=>{"use strict";Object.defineProperty(da,"__esModule",{value:!0});da.executeSQL=void 0;var Ou=Ya();function Bu(e,t){return(0,Ou.baseExecuteSQL)(e,t)}da.executeSQL=Bu});var Gn=E(lt=>{"use strict";var Lu=lt&&lt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(lt,"__esModule",{value:!0});lt.runAppleScript=void 0;var qu=Lu(require("node:child_process")),_t=Zt();async function Nu(e,t,a){let{humanReadableOutput:n,language:r,timeout:o,...u}=Array.isArray(t)?a||{}:t||{},i=n!==!1?[]:["-ss"];r==="JavaScript"&&i.push("-l","JavaScript"),Array.isArray(t)&&i.push("-",...t);let s=qu.default.spawn("osascript",i,{...u,env:{PATH:"/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"}}),p=(0,_t.getSpawnedPromise)(s,{timeout:o??1e4});s.stdin.end(e);let[{error:c,exitCode:y,signal:g,timedOut:m},l,S]=await(0,_t.getSpawnedResult)(s,{encoding:"utf8"},p),d=(0,_t.handleOutput)({stripFinalNewline:!0},l),b=(0,_t.handleOutput)({stripFinalNewline:!0},S);return(0,_t.defaultParsing)({stdout:d,stderr:b,error:c,exitCode:y,signal:g,timedOut:m,command:"osascript",options:a,parentError:new Error})}lt.runAppleScript=Nu});var $n=E(ba=>{"use strict";Object.defineProperty(ba,"__esModule",{value:!0});ba.withCache=void 0;var Vu=require("@raycast/api"),Sa=he();function ku(e,t){let a=new Vu.Cache({namespace:(0,Sa.hash)(e)}),n=async(...r)=>{let o=(0,Sa.hash)(r||[])+t?.internal_cacheKeySuffix,u=a.get(o);if(u){let{data:s,timestamp:p}=JSON.parse(u,Sa.reviver);if(!(t?.maxAge&&Date.now()-p>t.maxAge)&&(!t?.validate||t.validate(s)))return s}let i=await e(...r);return a.set(o,JSON.stringify({data:i,timestamp:Date.now()},Sa.replacer)),i};return n.clearCache=()=>{a.clear()},n}ba.withCache=ku});var cr=E(D=>{"use strict";var ju=D&&D.__createBinding||(Object.create?(function(e,t,a,n){n===void 0&&(n=a);var r=Object.getOwnPropertyDescriptor(t,a);(!r||("get"in r?!t.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,r)}):(function(e,t,a,n){n===void 0&&(n=a),e[n]=t[a]})),T=D&&D.__exportStar||function(e,t){for(var a in e)a!=="default"&&!Object.prototype.hasOwnProperty.call(t,a)&&ju(t,e,a)};Object.defineProperty(D,"__esModule",{value:!0});T(Ke(),D);T(Gt(),D);T(Mt(),D);T(Kr(),D);T(en(),D);T(nn(),D);T(pn(),D);T(cn(),D);T(dn(),D);T(In(),D);T(mn(),D);T(wn(),D);T(Nn(),D);T(zn(),D);T(Hn(),D);T(Gn(),D);T(bt(),D);T($n(),D)});var F={};Qe(F,{default:()=>no.default});var no,fa=wa(()=>{k(F,require("formdata-polyfill/esm.min.js"));no=j(require("formdata-polyfill/esm.min.js"))});var Q={};Qe(Q,{default:()=>uo.default});var uo,br=wa(()=>{k(Q,require("fetch-blob/from.js"));uo=j(require("fetch-blob/from.js"))});var lo={};Qe(lo,{toFormData:()=>up});function sp(e){let t=e.match(/\bfilename=("(.*?)"|([^()<>@,;:\\"/[\]?={}\s\t]+))($|;\s)/i);if(!t)return;let a=t[2]||t[3]||"",n=a.slice(a.lastIndexOf("\\")+1);return n=n.replace(/%22/g,'"'),n=n.replace(/&#(\d{4});/g,(r,o)=>String.fromCharCode(o)),n}async function up(e,t){if(!/multipart/i.test(t))throw new TypeError("Failed to fetch");let a=t.match(/boundary=(?:"([^"]+)"|([^;]+))/i);if(!a)throw new TypeError("no or bad content-type header, no multipart boundary");let n=new Ir(a[1]||a[2]),r,o,u,i,s,p,c=[],y=new F.FormData,g=b=>{u+=d.decode(b,{stream:!0})},m=b=>{c.push(b)},l=()=>{let b=new Q.File(c,p,{type:s});y.append(i,b)},S=()=>{y.append(i,u)},d=new TextDecoder("utf-8");d.decode(),n.onPartBegin=function(){n.onPartData=g,n.onPartEnd=S,r="",o="",u="",i="",s="",p=null,c.length=0},n.onHeaderField=function(b){r+=d.decode(b,{stream:!0})},n.onHeaderValue=function(b){o+=d.decode(b,{stream:!0})},n.onHeaderEnd=function(){if(o+=d.decode(),r=r.toLowerCase(),r==="content-disposition"){let b=o.match(/\bname=("([^"]*)"|([^()<>@,;:\\"/[\]?={}\s\t]+))/i);b&&(i=b[2]||b[3]||""),p=sp(o),p&&(n.onPartData=m,n.onPartEnd=l)}else r==="content-type"&&(s=o);o="",r=""};for await(let b of e)n.write(b);return n.end(),y}var Se,h,po,Be,Ea,Ca,ap,wt,rp,np,op,ip,He,Ir,co=wa(()=>{br();fa();Se=0,h={START_BOUNDARY:Se++,HEADER_FIELD_START:Se++,HEADER_FIELD:Se++,HEADER_VALUE_START:Se++,HEADER_VALUE:Se++,HEADER_VALUE_ALMOST_DONE:Se++,HEADERS_ALMOST_DONE:Se++,PART_DATA_START:Se++,PART_DATA:Se++,END:Se++},po=1,Be={PART_BOUNDARY:po,LAST_BOUNDARY:po*=2},Ea=10,Ca=13,ap=32,wt=45,rp=58,np=97,op=122,ip=e=>e|32,He=()=>{},Ir=class{constructor(t){this.index=0,this.flags=0,this.onHeaderEnd=He,this.onHeaderField=He,this.onHeadersEnd=He,this.onHeaderValue=He,this.onPartBegin=He,this.onPartData=He,this.onPartEnd=He,this.boundaryChars={},t=`\r
--`+t;let a=new Uint8Array(t.length);for(let n=0;n<t.length;n++)a[n]=t.charCodeAt(n),this.boundaryChars[a[n]]=!0;this.boundary=a,this.lookbehind=new Uint8Array(this.boundary.length+8),this.state=h.START_BOUNDARY}write(t){let a=0,n=t.length,r=this.index,{lookbehind:o,boundary:u,boundaryChars:i,index:s,state:p,flags:c}=this,y=this.boundary.length,g=y-1,m=t.length,l,S,d=M=>{this[M+"Mark"]=a},b=M=>{delete this[M+"Mark"]},R=(M,P,A,x)=>{(P===void 0||P!==A)&&this[M](x&&x.subarray(P,A))},f=(M,P)=>{let A=M+"Mark";A in this&&(P?(R(M,this[A],a,t),delete this[A]):(R(M,this[A],t.length,t),this[A]=0))};for(a=0;a<n;a++)switch(l=t[a],p){case h.START_BOUNDARY:if(s===u.length-2){if(l===wt)c|=Be.LAST_BOUNDARY;else if(l!==Ca)return;s++;break}else if(s-1===u.length-2){if(c&Be.LAST_BOUNDARY&&l===wt)p=h.END,c=0;else if(!(c&Be.LAST_BOUNDARY)&&l===Ea)s=0,R("onPartBegin"),p=h.HEADER_FIELD_START;else return;break}l!==u[s+2]&&(s=-2),l===u[s+2]&&s++;break;case h.HEADER_FIELD_START:p=h.HEADER_FIELD,d("onHeaderField"),s=0;case h.HEADER_FIELD:if(l===Ca){b("onHeaderField"),p=h.HEADERS_ALMOST_DONE;break}if(s++,l===wt)break;if(l===rp){if(s===1)return;f("onHeaderField",!0),p=h.HEADER_VALUE_START;break}if(S=ip(l),S<np||S>op)return;break;case h.HEADER_VALUE_START:if(l===ap)break;d("onHeaderValue"),p=h.HEADER_VALUE;case h.HEADER_VALUE:l===Ca&&(f("onHeaderValue",!0),R("onHeaderEnd"),p=h.HEADER_VALUE_ALMOST_DONE);break;case h.HEADER_VALUE_ALMOST_DONE:if(l!==Ea)return;p=h.HEADER_FIELD_START;break;case h.HEADERS_ALMOST_DONE:if(l!==Ea)return;R("onHeadersEnd"),p=h.PART_DATA_START;break;case h.PART_DATA_START:p=h.PART_DATA,d("onPartData");case h.PART_DATA:if(r=s,s===0){for(a+=g;a<m&&!(t[a]in i);)a+=y;a-=g,l=t[a]}if(s<u.length)u[s]===l?(s===0&&f("onPartData",!0),s++):s=0;else if(s===u.length)s++,l===Ca?c|=Be.PART_BOUNDARY:l===wt?c|=Be.LAST_BOUNDARY:s=0;else if(s-1===u.length)if(c&Be.PART_BOUNDARY){if(s=0,l===Ea){c&=~Be.PART_BOUNDARY,R("onPartEnd"),R("onPartBegin"),p=h.HEADER_FIELD_START;break}}else c&Be.LAST_BOUNDARY&&l===wt?(R("onPartEnd"),p=h.END,c=0):s=0;if(s>0)o[s-1]=l;else if(r>0){let M=new Uint8Array(o.buffer,o.byteOffset,o.byteLength);R("onPartData",0,r,M),r=0,d("onPartData"),a--}break;case h.END:break;default:throw new Error(`Unexpected state entered: ${p}`)}f("onHeaderField"),f("onHeaderValue"),f("onPartData"),this.index=s,this.state=p,this.flags=c}end(){if(this.state===h.HEADER_FIELD_START&&this.index===0||this.state===h.PART_DATA&&this.index===this.boundary.length)this.onPartEnd();else if(this.state!==h.END)throw new Error("MultipartParser.end(): stream ended unexpectedly")}}});var Ol={};Qe(Ol,{default:()=>wl});module.exports=ni(Ol);var Lo=require("@octokit/rest"),qo=require("@raycast/api"),No=j(cr());var Ia=JSON;var Qn=e=>e.toUpperCase(),Wn=e=>{let t={};return e.forEach((a,n)=>{t[n]=a}),t};var Kn=(e,t,a)=>e.document?e:{document:e,variables:t,requestHeaders:a,signal:void 0},Yn=(e,t,a)=>e.query?e:{query:e,variables:t,requestHeaders:a,signal:void 0},Jn=(e,t)=>e.documents?e:{documents:e,requestHeaders:t,signal:void 0};var ga=require("graphql"),Zn=e=>{let t,a=e.definitions.filter(n=>n.kind==="OperationDefinition");return a.length===1&&(t=a[0]?.name?.value),t},Fe=e=>{if(typeof e=="string"){let a;try{let n=(0,ga.parse)(e);a=Zn(n)}catch{}return{query:e,operationName:a}}let t=Zn(e);return{query:(0,ga.print)(e),operationName:t}};var ze=class e extends Error{constructor(t,a){let n=`${e.extractMessage(t)}: ${JSON.stringify({response:t,request:a})}`;super(n),Object.setPrototypeOf(this,e.prototype),this.response=t,this.request=a,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,e)}static extractMessage(t){return t.errors?.[0]?.message??`GraphQL Error (Code: ${t.status})`}};var Oe=j(Et(),1);var Fu="connection_init",zu="connection_ack",eo="ping",to="pong",Hu="subscribe",Gu="next",$u="error",ao="complete",we=class e{get type(){return this._type}get id(){return this._id}get payload(){return this._payload}constructor(t,a,n){this._type=t,this._payload=a,this._id=n}get text(){let t={type:this.type};return this.id!=null&&this.id!=null&&(t.id=this.id),this.payload!=null&&this.payload!=null&&(t.payload=this.payload),JSON.stringify(t)}static parse(t,a){let{type:n,payload:r,id:o}=JSON.parse(t);return new e(n,a(r),o)}},Ma=class{constructor(t,{onInit:a,onAcknowledged:n,onPing:r,onPong:o}){this.socketState={acknowledged:!1,lastRequestId:0,subscriptions:{}},this.socket=t,t.addEventListener("open",async u=>{this.socketState.acknowledged=!1,this.socketState.subscriptions={},t.send(Wu(a?await a():null).text)}),t.addEventListener("close",u=>{this.socketState.acknowledged=!1,this.socketState.subscriptions={}}),t.addEventListener("error",u=>{console.error(u)}),t.addEventListener("message",u=>{try{let i=Qu(u.data);switch(i.type){case zu:{this.socketState.acknowledged?console.warn("Duplicate CONNECTION_ACK message ignored"):(this.socketState.acknowledged=!0,n&&n(i.payload));return}case eo:{r?r(i.payload).then(y=>t.send(Xn(y).text)):t.send(Xn(null).text);return}case to:{o&&o(i.payload);return}}if(!this.socketState.acknowledged||i.id===void 0||i.id===null||!this.socketState.subscriptions[i.id])return;let{query:s,variables:p,subscriber:c}=this.socketState.subscriptions[i.id];switch(i.type){case Gu:{!i.payload.errors&&i.payload.data&&c.next&&c.next(i.payload.data),i.payload.errors&&c.error&&c.error(new ze({...i.payload,status:200},{query:s,variables:p}));return}case $u:{c.error&&c.error(new ze({errors:i.payload,status:200},{query:s,variables:p}));return}case ao:{c.complete&&c.complete(),delete this.socketState.subscriptions[i.id];return}}}catch(i){console.error(i),t.close(1006)}t.close(4400,"Unknown graphql-ws message.")})}makeSubscribe(t,a,n,r){let o=(this.socketState.lastRequestId++).toString();return this.socketState.subscriptions[o]={query:t,variables:r,subscriber:n},this.socket.send(Yu(o,{query:t,operationName:a,variables:r}).text),()=>{this.socket.send(Ju(o).text),delete this.socketState.subscriptions[o]}}rawRequest(t,a){return new Promise((n,r)=>{let o;this.rawSubscribe(t,{next:(u,i)=>o={data:u,extensions:i},error:r,complete:()=>n(o)},a)})}request(t,a){return new Promise((n,r)=>{let o;this.subscribe(t,{next:u=>o=u,error:r,complete:()=>n(o)},a)})}subscribe(t,a,n){let{query:r,operationName:o}=Fe(t);return this.makeSubscribe(r,o,a,n)}rawSubscribe(t,a,n){return this.makeSubscribe(t,void 0,a,n)}ping(t){this.socket.send(Ku(t).text)}close(){this.socket.close(1e3)}};Ma.PROTOCOL="graphql-transport-ws";function Qu(e,t=a=>a){return we.parse(e,t)}function Wu(e){return new we(Fu,e)}function Ku(e){return new we(eo,e,void 0)}function Xn(e){return new we(to,e,void 0)}function Yu(e,t){return new we(Hu,t,e)}function Ju(e){return new we(ao,void 0,e)}var ct=e=>{let t={};return e&&(typeof Headers<"u"&&e instanceof Headers||Oe&&Oe.Headers&&e instanceof Oe.Headers?t=Wn(e):Array.isArray(e)?e.forEach(([a,n])=>{a&&n!==void 0&&(t[a]=n)}):t=e),t},ro=e=>e.replace(/([\s,]|#[^\n\r]+)+/g," ").trim(),Zu=e=>{if(!Array.isArray(e.query)){let n=e,r=[`query=${encodeURIComponent(ro(n.query))}`];return e.variables&&r.push(`variables=${encodeURIComponent(n.jsonSerializer.stringify(n.variables))}`),n.operationName&&r.push(`operationName=${encodeURIComponent(n.operationName)}`),r.join("&")}if(typeof e.variables<"u"&&!Array.isArray(e.variables))throw new Error("Cannot create query with given variable type, array expected");let t=e,a=e.query.reduce((n,r,o)=>(n.push({query:ro(r),variables:t.variables?t.jsonSerializer.stringify(t.variables[o]):void 0}),n),[]);return`query=${encodeURIComponent(t.jsonSerializer.stringify(a))}`},Xu=e=>async t=>{let{url:a,query:n,variables:r,operationName:o,fetch:u,fetchOptions:i,middleware:s}=t,p={...t.headers},c="",y;e==="POST"?(y=ep(n,r,o,i.jsonSerializer),typeof y=="string"&&(p["Content-Type"]="application/json")):c=Zu({query:n,variables:r,operationName:o,jsonSerializer:i.jsonSerializer??Ia});let g={method:e,headers:p,body:y,...i},m=a,l=g;if(s){let S=await Promise.resolve(s({...g,url:a,operationName:o,variables:r})),{url:d,...b}=S;m=d,l=b}return c&&(m=`${m}?${c}`),await u(m,l)},ma=class{constructor(t,a={}){this.url=t,this.requestConfig=a,this.rawRequest=async(...n)=>{let[r,o,u]=n,i=Yn(r,o,u),{headers:s,fetch:p=Oe.default,method:c="POST",requestMiddleware:y,responseMiddleware:g,...m}=this.requestConfig,{url:l}=this;i.signal!==void 0&&(m.signal=i.signal);let{operationName:S}=Fe(i.query);return yr({url:l,query:i.query,variables:i.variables,headers:{...ct(dr(s)),...ct(i.requestHeaders)},operationName:S,fetch:p,method:c,fetchOptions:m,middleware:y}).then(d=>(g&&g(d),d)).catch(d=>{throw g&&g(d),d})}}async request(t,...a){let[n,r]=a,o=Kn(t,n,r),{headers:u,fetch:i=Oe.default,method:s="POST",requestMiddleware:p,responseMiddleware:c,...y}=this.requestConfig,{url:g}=this;o.signal!==void 0&&(y.signal=o.signal);let{query:m,operationName:l}=Fe(o.document);return yr({url:g,query:m,variables:o.variables,headers:{...ct(dr(u)),...ct(o.requestHeaders)},operationName:l,fetch:i,method:s,fetchOptions:y,middleware:p}).then(S=>(c&&c(S),S.data)).catch(S=>{throw c&&c(S),S})}batchRequests(t,a){let n=Jn(t,a),{headers:r,...o}=this.requestConfig;n.signal!==void 0&&(o.signal=n.signal);let u=n.documents.map(({document:s})=>Fe(s).query),i=n.documents.map(({variables:s})=>s);return yr({url:this.url,query:u,variables:i,headers:{...ct(dr(r)),...ct(n.requestHeaders)},operationName:void 0,fetch:this.requestConfig.fetch??Oe.default,method:this.requestConfig.method||"POST",fetchOptions:o,middleware:this.requestConfig.requestMiddleware}).then(s=>(this.requestConfig.responseMiddleware&&this.requestConfig.responseMiddleware(s),s.data)).catch(s=>{throw this.requestConfig.responseMiddleware&&this.requestConfig.responseMiddleware(s),s})}setHeaders(t){return this.requestConfig.headers=t,this}setHeader(t,a){let{headers:n}=this.requestConfig;return n?n[t]=a:this.requestConfig.headers={[t]:a},this}setEndpoint(t){return this.url=t,this}},yr=async e=>{let{query:t,variables:a,fetchOptions:n}=e,r=Xu(Qn(e.method??"post")),o=Array.isArray(e.query),u=await r(e),i=await tp(u,n.jsonSerializer??Ia),s=Array.isArray(i)?!i.some(({data:c})=>!c):!!i.data,p=Array.isArray(i)||!i.errors||Array.isArray(i.errors)&&!i.errors.length||n.errorPolicy==="all"||n.errorPolicy==="ignore";if(u.ok&&p&&s){let{errors:c,...y}=(Array.isArray(i),i),g=n.errorPolicy==="ignore"?y:i;return{...o?{data:g}:g,headers:u.headers,status:u.status}}else{let c=typeof i=="string"?{error:i}:i;throw new ze({...c,status:u.status,headers:u.headers},{query:t,variables:a})}};var ep=(e,t,a,n)=>{let r=n??Ia;if(!Array.isArray(e))return r.stringify({query:e,variables:t,operationName:a});if(typeof t<"u"&&!Array.isArray(t))throw new Error("Cannot create request body with given variable type, array expected");let o=e.reduce((u,i,s)=>(u.push({query:i,variables:t?t[s]:void 0}),u),[]);return r.stringify(o)},tp=async(e,t)=>{let a;return e.headers.forEach((n,r)=>{r.toLowerCase()==="content-type"&&(a=n)}),a&&(a.toLowerCase().startsWith("application/json")||a.toLowerCase().startsWith("application/graphql+json")||a.toLowerCase().startsWith("application/graphql-response+json"))?t.parse(await e.text()):e.text()},dr=e=>typeof e=="function"?e():e;var Do=j(require("node:http"),1),xo=j(require("node:https"),1),$e=j(require("node:zlib"),1),Y=j(require("node:stream"),1),Lt=require("node:buffer");var Ut={};Qe(Ut,{default:()=>Ra.default});k(Ut,require("data-uri-to-buffer"));var Ra=j(require("data-uri-to-buffer"));var te=j(require("node:stream"),1),Ee=require("node:util"),W=require("node:buffer");var vt={};Qe(vt,{default:()=>Aa.default});k(vt,require("fetch-blob"));var Aa=j(require("fetch-blob"));fa();var Pe=class extends Error{constructor(t,a){super(t),Error.captureStackTrace(this,this.constructor),this.type=a}get name(){return this.constructor.name}get[Symbol.toStringTag](){return this.constructor.name}};var z=class extends Pe{constructor(t,a,n){super(t,a),n&&(this.code=this.errno=n.code,this.erroredSysCall=n.syscall)}};var Pa=Symbol.toStringTag,Sr=e=>typeof e=="object"&&typeof e.append=="function"&&typeof e.delete=="function"&&typeof e.get=="function"&&typeof e.getAll=="function"&&typeof e.has=="function"&&typeof e.set=="function"&&typeof e.sort=="function"&&e[Pa]==="URLSearchParams",Tt=e=>e&&typeof e=="object"&&typeof e.arrayBuffer=="function"&&typeof e.type=="string"&&typeof e.stream=="function"&&typeof e.constructor=="function"&&/^(Blob|File)$/.test(e[Pa]),oo=e=>typeof e=="object"&&(e[Pa]==="AbortSignal"||e[Pa]==="EventTarget"),io=(e,t)=>{let a=new URL(t).hostname,n=new URL(e).hostname;return a===n||a.endsWith(`.${n}`)},so=(e,t)=>{let a=new URL(t).protocol,n=new URL(e).protocol;return a===n};var pp=(0,Ee.promisify)(te.default.pipeline),H=Symbol("Body internals"),be=class{constructor(t,{size:a=0}={}){let n=null;t===null?t=null:Sr(t)?t=W.Buffer.from(t.toString()):Tt(t)||W.Buffer.isBuffer(t)||(Ee.types.isAnyArrayBuffer(t)?t=W.Buffer.from(t):ArrayBuffer.isView(t)?t=W.Buffer.from(t.buffer,t.byteOffset,t.byteLength):t instanceof te.default||(t instanceof F.FormData?(t=(0,F.formDataToBlob)(t),n=t.type.split("=")[1]):t=W.Buffer.from(String(t))));let r=t;W.Buffer.isBuffer(t)?r=te.default.Readable.from(t):Tt(t)&&(r=te.default.Readable.from(t.stream())),this[H]={body:t,stream:r,boundary:n,disturbed:!1,error:null},this.size=a,t instanceof te.default&&t.on("error",o=>{let u=o instanceof Pe?o:new z(`Invalid response body while trying to fetch ${this.url}: ${o.message}`,"system",o);this[H].error=u})}get body(){return this[H].stream}get bodyUsed(){return this[H].disturbed}async arrayBuffer(){let{buffer:t,byteOffset:a,byteLength:n}=await gr(this);return t.slice(a,a+n)}async formData(){let t=this.headers.get("content-type");if(t.startsWith("application/x-www-form-urlencoded")){let n=new F.FormData,r=new URLSearchParams(await this.text());for(let[o,u]of r)n.append(o,u);return n}let{toFormData:a}=await Promise.resolve().then(()=>(co(),lo));return a(this.body,t)}async blob(){let t=this.headers&&this.headers.get("content-type")||this[H].body&&this[H].body.type||"",a=await this.arrayBuffer();return new Aa.default([a],{type:t})}async json(){let t=await this.text();return JSON.parse(t)}async text(){let t=await gr(this);return new TextDecoder().decode(t)}buffer(){return gr(this)}};be.prototype.buffer=(0,Ee.deprecate)(be.prototype.buffer,"Please use 'response.arrayBuffer()' instead of 'response.buffer()'","node-fetch#buffer");Object.defineProperties(be.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0},data:{get:(0,Ee.deprecate)(()=>{},"data doesn't exist, use json(), text(), arrayBuffer(), or body instead","https://github.com/node-fetch/node-fetch/issues/1000 (response)")}});async function gr(e){if(e[H].disturbed)throw new TypeError(`body used already for: ${e.url}`);if(e[H].disturbed=!0,e[H].error)throw e[H].error;let{body:t}=e;if(t===null)return W.Buffer.alloc(0);if(!(t instanceof te.default))return W.Buffer.alloc(0);let a=[],n=0;try{for await(let r of t){if(e.size>0&&n+r.length>e.size){let o=new z(`content size at ${e.url} over limit: ${e.size}`,"max-size");throw t.destroy(o),o}n+=r.length,a.push(r)}}catch(r){throw r instanceof Pe?r:new z(`Invalid response body while trying to fetch ${e.url}: ${r.message}`,"system",r)}if(t.readableEnded===!0||t._readableState.ended===!0)try{return a.every(r=>typeof r=="string")?W.Buffer.from(a.join("")):W.Buffer.concat(a,n)}catch(r){throw new z(`Could not create Buffer from response body for ${e.url}: ${r.message}`,"system",r)}else throw new z(`Premature close of server response while trying to fetch ${e.url}`)}var yt=(e,t)=>{let a,n,{body:r}=e[H];if(e.bodyUsed)throw new Error("cannot clone body after it is used");return r instanceof te.default&&typeof r.getBoundary!="function"&&(a=new te.PassThrough({highWaterMark:t}),n=new te.PassThrough({highWaterMark:t}),r.pipe(a),r.pipe(n),e[H].stream=a,r=n),r},lp=(0,Ee.deprecate)(e=>e.getBoundary(),"form-data doesn't follow the spec and requires special treatment. Use alternative package","https://github.com/node-fetch/node-fetch/issues/1167"),ha=(e,t)=>e===null?null:typeof e=="string"?"text/plain;charset=UTF-8":Sr(e)?"application/x-www-form-urlencoded;charset=UTF-8":Tt(e)?e.type||null:W.Buffer.isBuffer(e)||Ee.types.isAnyArrayBuffer(e)||ArrayBuffer.isView(e)?null:e instanceof F.FormData?`multipart/form-data; boundary=${t[H].boundary}`:e&&typeof e.getBoundary=="function"?`multipart/form-data;boundary=${lp(e)}`:e instanceof te.default?null:"text/plain;charset=UTF-8",yo=e=>{let{body:t}=e[H];return t===null?0:Tt(t)?t.size:W.Buffer.isBuffer(t)?t.length:t&&typeof t.getLengthSync=="function"&&t.hasKnownLength&&t.hasKnownLength()?t.getLengthSync():null},So=async(e,{body:t})=>{t===null?e.end():await pp(t,e)};var Mr=require("node:util"),Ot=j(require("node:http"),1),Da=typeof Ot.default.validateHeaderName=="function"?Ot.default.validateHeaderName:e=>{if(!/^[\^`\-\w!#$%&'*+.|~]+$/.test(e)){let t=new TypeError(`Header name must be a valid HTTP token [${e}]`);throw Object.defineProperty(t,"code",{value:"ERR_INVALID_HTTP_TOKEN"}),t}},mr=typeof Ot.default.validateHeaderValue=="function"?Ot.default.validateHeaderValue:(e,t)=>{if(/[^\t\u0020-\u007E\u0080-\u00FF]/.test(t)){let a=new TypeError(`Invalid character in header content ["${e}"]`);throw Object.defineProperty(a,"code",{value:"ERR_INVALID_CHAR"}),a}},K=class e extends URLSearchParams{constructor(t){let a=[];if(t instanceof e){let n=t.raw();for(let[r,o]of Object.entries(n))a.push(...o.map(u=>[r,u]))}else if(t!=null)if(typeof t=="object"&&!Mr.types.isBoxedPrimitive(t)){let n=t[Symbol.iterator];if(n==null)a.push(...Object.entries(t));else{if(typeof n!="function")throw new TypeError("Header pairs must be iterable");a=[...t].map(r=>{if(typeof r!="object"||Mr.types.isBoxedPrimitive(r))throw new TypeError("Each header pair must be an iterable object");return[...r]}).map(r=>{if(r.length!==2)throw new TypeError("Each header pair must be a name/value tuple");return[...r]})}}else throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");return a=a.length>0?a.map(([n,r])=>(Da(n),mr(n,String(r)),[String(n).toLowerCase(),String(r)])):void 0,super(a),new Proxy(this,{get(n,r,o){switch(r){case"append":case"set":return(u,i)=>(Da(u),mr(u,String(i)),URLSearchParams.prototype[r].call(n,String(u).toLowerCase(),String(i)));case"delete":case"has":case"getAll":return u=>(Da(u),URLSearchParams.prototype[r].call(n,String(u).toLowerCase()));case"keys":return()=>(n.sort(),new Set(URLSearchParams.prototype.keys.call(n)).keys());default:return Reflect.get(n,r,o)}}})}get[Symbol.toStringTag](){return this.constructor.name}toString(){return Object.prototype.toString.call(this)}get(t){let a=this.getAll(t);if(a.length===0)return null;let n=a.join(", ");return/^content-encoding$/i.test(t)&&(n=n.toLowerCase()),n}forEach(t,a=void 0){for(let n of this.keys())Reflect.apply(t,a,[this.get(n),n,this])}*values(){for(let t of this.keys())yield this.get(t)}*entries(){for(let t of this.keys())yield[t,this.get(t)]}[Symbol.iterator](){return this.entries()}raw(){return[...this.keys()].reduce((t,a)=>(t[a]=this.getAll(a),t),{})}[Symbol.for("nodejs.util.inspect.custom")](){return[...this.keys()].reduce((t,a)=>{let n=this.getAll(a);return a==="host"?t[a]=n[0]:t[a]=n.length>1?n:n[0],t},{})}};Object.defineProperties(K.prototype,["get","entries","forEach","values"].reduce((e,t)=>(e[t]={enumerable:!0},e),{}));function bo(e=[]){return new K(e.reduce((t,a,n,r)=>(n%2===0&&t.push(r.slice(n,n+2)),t),[]).filter(([t,a])=>{try{return Da(t),mr(t,String(a)),!0}catch{return!1}}))}var cp=new Set([301,302,303,307,308]),xa=e=>cp.has(e);var se=Symbol("Response internals"),ae=class e extends be{constructor(t=null,a={}){super(t,a);let n=a.status!=null?a.status:200,r=new K(a.headers);if(t!==null&&!r.has("Content-Type")){let o=ha(t,this);o&&r.append("Content-Type",o)}this[se]={type:"default",url:a.url,status:n,statusText:a.statusText||"",headers:r,counter:a.counter,highWaterMark:a.highWaterMark}}get type(){return this[se].type}get url(){return this[se].url||""}get status(){return this[se].status}get ok(){return this[se].status>=200&&this[se].status<300}get redirected(){return this[se].counter>0}get statusText(){return this[se].statusText}get headers(){return this[se].headers}get highWaterMark(){return this[se].highWaterMark}clone(){return new e(yt(this,this.highWaterMark),{type:this.type,url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected,size:this.size,highWaterMark:this.highWaterMark})}static redirect(t,a=302){if(!xa(a))throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');return new e(null,{headers:{location:new URL(t).toString()},status:a})}static error(){let t=new e(null,{status:0,statusText:""});return t[se].type="error",t}static json(t=void 0,a={}){let n=JSON.stringify(t);if(n===void 0)throw new TypeError("data is not JSON serializable");let r=new K(a&&a.headers);return r.has("content-type")||r.set("content-type","application/json"),new e(n,{...a,headers:r})}get[Symbol.toStringTag](){return"Response"}};Object.defineProperties(ae.prototype,{type:{enumerable:!0},url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}});var Eo=require("node:url"),Co=require("node:util");var Io=e=>{if(e.search)return e.search;let t=e.href.length-1,a=e.hash||(e.href[t]==="#"?"#":"");return e.href[t-a.length]==="?"?"?":""};var Mo=require("node:net");function go(e,t=!1){return e==null||(e=new URL(e),/^(about|blob|data):$/.test(e.protocol))?"no-referrer":(e.username="",e.password="",e.hash="",t&&(e.pathname="",e.search=""),e)}var mo=new Set(["","no-referrer","no-referrer-when-downgrade","same-origin","origin","strict-origin","origin-when-cross-origin","strict-origin-when-cross-origin","unsafe-url"]),Ro="strict-origin-when-cross-origin";function Ao(e){if(!mo.has(e))throw new TypeError(`Invalid referrerPolicy: ${e}`);return e}function yp(e){if(/^(http|ws)s:$/.test(e.protocol))return!0;let t=e.host.replace(/(^\[)|(]$)/g,""),a=(0,Mo.isIP)(t);return a===4&&/^127\./.test(t)||a===6&&/^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(t)?!0:e.host==="localhost"||e.host.endsWith(".localhost")?!1:e.protocol==="file:"}function dt(e){return/^about:(blank|srcdoc)$/.test(e)||e.protocol==="data:"||/^(blob|filesystem):$/.test(e.protocol)?!0:yp(e)}function fo(e,{referrerURLCallback:t,referrerOriginCallback:a}={}){if(e.referrer==="no-referrer"||e.referrerPolicy==="")return null;let n=e.referrerPolicy;if(e.referrer==="about:client")return"no-referrer";let r=e.referrer,o=go(r),u=go(r,!0);o.toString().length>4096&&(o=u),t&&(o=t(o)),a&&(u=a(u));let i=new URL(e.url);switch(n){case"no-referrer":return"no-referrer";case"origin":return u;case"unsafe-url":return o;case"strict-origin":return dt(o)&&!dt(i)?"no-referrer":u.toString();case"strict-origin-when-cross-origin":return o.origin===i.origin?o:dt(o)&&!dt(i)?"no-referrer":u;case"same-origin":return o.origin===i.origin?o:"no-referrer";case"origin-when-cross-origin":return o.origin===i.origin?o:u;case"no-referrer-when-downgrade":return dt(o)&&!dt(i)?"no-referrer":o;default:throw new TypeError(`Invalid referrerPolicy: ${n}`)}}function Po(e){let t=(e.get("referrer-policy")||"").split(/[,\s]+/),a="";for(let n of t)n&&mo.has(n)&&(a=n);return a}var w=Symbol("Request internals"),Bt=e=>typeof e=="object"&&typeof e[w]=="object",dp=(0,Co.deprecate)(()=>{},".data is not a valid RequestInit property, use .body instead","https://github.com/node-fetch/node-fetch/issues/1000 (request)"),Ge=class e extends be{constructor(t,a={}){let n;if(Bt(t)?n=new URL(t.url):(n=new URL(t),t={}),n.username!==""||n.password!=="")throw new TypeError(`${n} is an url with embedded credentials.`);let r=a.method||t.method||"GET";if(/^(delete|get|head|options|post|put)$/i.test(r)&&(r=r.toUpperCase()),!Bt(a)&&"data"in a&&dp(),(a.body!=null||Bt(t)&&t.body!==null)&&(r==="GET"||r==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");let o=a.body?a.body:Bt(t)&&t.body!==null?yt(t):null;super(o,{size:a.size||t.size||0});let u=new K(a.headers||t.headers||{});if(o!==null&&!u.has("Content-Type")){let p=ha(o,this);p&&u.set("Content-Type",p)}let i=Bt(t)?t.signal:null;if("signal"in a&&(i=a.signal),i!=null&&!oo(i))throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");let s=a.referrer==null?t.referrer:a.referrer;if(s==="")s="no-referrer";else if(s){let p=new URL(s);s=/^about:(\/\/)?client$/.test(p)?"client":p}else s=void 0;this[w]={method:r,redirect:a.redirect||t.redirect||"follow",headers:u,parsedURL:n,signal:i,referrer:s},this.follow=a.follow===void 0?t.follow===void 0?20:t.follow:a.follow,this.compress=a.compress===void 0?t.compress===void 0?!0:t.compress:a.compress,this.counter=a.counter||t.counter||0,this.agent=a.agent||t.agent,this.highWaterMark=a.highWaterMark||t.highWaterMark||16384,this.insecureHTTPParser=a.insecureHTTPParser||t.insecureHTTPParser||!1,this.referrerPolicy=a.referrerPolicy||t.referrerPolicy||""}get method(){return this[w].method}get url(){return(0,Eo.format)(this[w].parsedURL)}get headers(){return this[w].headers}get redirect(){return this[w].redirect}get signal(){return this[w].signal}get referrer(){if(this[w].referrer==="no-referrer")return"";if(this[w].referrer==="client")return"about:client";if(this[w].referrer)return this[w].referrer.toString()}get referrerPolicy(){return this[w].referrerPolicy}set referrerPolicy(t){this[w].referrerPolicy=Ao(t)}clone(){return new e(this)}get[Symbol.toStringTag](){return"Request"}};Object.defineProperties(Ge.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0},referrer:{enumerable:!0},referrerPolicy:{enumerable:!0}});var ho=e=>{let{parsedURL:t}=e[w],a=new K(e[w].headers);a.has("Accept")||a.set("Accept","*/*");let n=null;if(e.body===null&&/^(post|put)$/i.test(e.method)&&(n="0"),e.body!==null){let i=yo(e);typeof i=="number"&&!Number.isNaN(i)&&(n=String(i))}n&&a.set("Content-Length",n),e.referrerPolicy===""&&(e.referrerPolicy=Ro),e.referrer&&e.referrer!=="no-referrer"?e[w].referrer=fo(e):e[w].referrer="no-referrer",e[w].referrer instanceof URL&&a.set("Referer",e.referrer),a.has("User-Agent")||a.set("User-Agent","node-fetch"),e.compress&&!a.has("Accept-Encoding")&&a.set("Accept-Encoding","gzip, deflate, br");let{agent:r}=e;typeof r=="function"&&(r=r(t));let o=Io(t),u={path:t.pathname+o,method:e.method,headers:a[Symbol.for("nodejs.util.inspect.custom")](),insecureHTTPParser:e.insecureHTTPParser,agent:r};return{parsedURL:t,options:u}};var _a=class extends Pe{constructor(t,a="aborted"){super(t,a)}};fa();br();var Sp=new Set(["data:","http:","https:"]);async function Ua(e,t){return new Promise((a,n)=>{let r=new Ge(e,t),{parsedURL:o,options:u}=ho(r);if(!Sp.has(o.protocol))throw new TypeError(`node-fetch cannot load ${e}. URL scheme "${o.protocol.replace(/:$/,"")}" is not supported.`);if(o.protocol==="data:"){let l=(0,Ra.default)(r.url),S=new ae(l,{headers:{"Content-Type":l.typeFull}});a(S);return}let i=(o.protocol==="https:"?xo.default:Do.default).request,{signal:s}=r,p=null,c=()=>{let l=new _a("The operation was aborted.");n(l),r.body&&r.body instanceof Y.default.Readable&&r.body.destroy(l),!(!p||!p.body)&&p.body.emit("error",l)};if(s&&s.aborted){c();return}let y=()=>{c(),m()},g=i(o.toString(),u);s&&s.addEventListener("abort",y);let m=()=>{g.abort(),s&&s.removeEventListener("abort",y)};g.on("error",l=>{n(new z(`request to ${r.url} failed, reason: ${l.message}`,"system",l)),m()}),bp(g,l=>{p&&p.body&&p.body.destroy(l)}),process.version<"v14"&&g.on("socket",l=>{let S;l.prependListener("end",()=>{S=l._eventsCount}),l.prependListener("close",d=>{if(p&&S<l._eventsCount&&!d){let b=new Error("Premature close");b.code="ERR_STREAM_PREMATURE_CLOSE",p.body.emit("error",b)}})}),g.on("response",l=>{g.setTimeout(0);let S=bo(l.rawHeaders);if(xa(l.statusCode)){let M=S.get("Location"),P=null;try{P=M===null?null:new URL(M,r.url)}catch{if(r.redirect!=="manual"){n(new z(`uri requested responds with an invalid redirect URL: ${M}`,"invalid-redirect")),m();return}}switch(r.redirect){case"error":n(new z(`uri requested responds with a redirect, redirect mode is set to error: ${r.url}`,"no-redirect")),m();return;case"manual":break;case"follow":{if(P===null)break;if(r.counter>=r.follow){n(new z(`maximum redirect reached at: ${r.url}`,"max-redirect")),m();return}let A={headers:new K(r.headers),follow:r.follow,counter:r.counter+1,agent:r.agent,compress:r.compress,method:r.method,body:yt(r),signal:r.signal,size:r.size,referrer:r.referrer,referrerPolicy:r.referrerPolicy};if(!io(r.url,P)||!so(r.url,P))for(let B of["authorization","www-authenticate","cookie","cookie2"])A.headers.delete(B);if(l.statusCode!==303&&r.body&&t.body instanceof Y.default.Readable){n(new z("Cannot follow redirect with body being a readable stream","unsupported-redirect")),m();return}(l.statusCode===303||(l.statusCode===301||l.statusCode===302)&&r.method==="POST")&&(A.method="GET",A.body=void 0,A.headers.delete("content-length"));let x=Po(S);x&&(A.referrerPolicy=x),a(Ua(new Ge(P,A))),m();return}default:return n(new TypeError(`Redirect option '${r.redirect}' is not a valid value of RequestRedirect`))}}s&&l.once("end",()=>{s.removeEventListener("abort",y)});let d=(0,Y.pipeline)(l,new Y.PassThrough,M=>{M&&n(M)});process.version<"v12.10"&&l.on("aborted",y);let b={url:r.url,status:l.statusCode,statusText:l.statusMessage,headers:S,size:r.size,counter:r.counter,highWaterMark:r.highWaterMark},R=S.get("Content-Encoding");if(!r.compress||r.method==="HEAD"||R===null||l.statusCode===204||l.statusCode===304){p=new ae(d,b),a(p);return}let f={flush:$e.default.Z_SYNC_FLUSH,finishFlush:$e.default.Z_SYNC_FLUSH};if(R==="gzip"||R==="x-gzip"){d=(0,Y.pipeline)(d,$e.default.createGunzip(f),M=>{M&&n(M)}),p=new ae(d,b),a(p);return}if(R==="deflate"||R==="x-deflate"){let M=(0,Y.pipeline)(l,new Y.PassThrough,P=>{P&&n(P)});M.once("data",P=>{(P[0]&15)===8?d=(0,Y.pipeline)(d,$e.default.createInflate(),A=>{A&&n(A)}):d=(0,Y.pipeline)(d,$e.default.createInflateRaw(),A=>{A&&n(A)}),p=new ae(d,b),a(p)}),M.once("end",()=>{p||(p=new ae(d,b),a(p))});return}if(R==="br"){d=(0,Y.pipeline)(d,$e.default.createBrotliDecompress(),M=>{M&&n(M)}),p=new ae(d,b),a(p);return}p=new ae(d,b),a(p)}),So(g,r).catch(n)})}function bp(e,t){let a=Lt.Buffer.from(`0\r
\r
`),n=!1,r=!1,o;e.on("response",u=>{let{headers:i}=u;n=i["transfer-encoding"]==="chunked"&&!i["content-length"]}),e.on("socket",u=>{let i=()=>{if(n&&!r){let p=new Error("Premature close");p.code="ERR_STREAM_PREMATURE_CLOSE",t(p)}},s=p=>{r=Lt.Buffer.compare(p.slice(-5),a)===0,!r&&o&&(r=Lt.Buffer.compare(o.slice(-3),a.slice(0,3))===0&&Lt.Buffer.compare(p.slice(-2),a.slice(3))===0),o=p};u.prependListener("close",i),u.on("data",s),e.on("close",()=>{u.removeListener("close",i),u.removeListener("data",s)})})}var I=j(require("graphql-tag")),qt=I.default`
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
`,Ip=I.default`
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
  ${qt}
`,Ie=I.default`
  fragment UserFields on User {
    id
    avatarUrl
    name
    login
    isViewer
  }
`,Nt=I.default`
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
  ${Ie}
`,va=I.default`
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
  ${Nt}
  ${qt}
  ${Ie}
`,gp=I.default`
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
  ${Nt}
  ${qt}
  ${Ie}
`,_o=I.default`
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
`,Uo=I.default`
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
`,vo=I.default`
  fragment RepositoryMentionFields on Repository {
    nameWithOwner
    description
    isPrivate
    isArchived
    owner {
      avatarUrl(size: 64)
    }
  }
`,Mp=I.default`
  fragment ProjectViewerFields on ProjectV2View {
    id
    name
    number
  }
`,To=I.default`
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
  ${Nt}
  ${Mp}
`,wo=I.default`
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
  ${qt}
  ${Nt}
  ${Ie}
`,mp=I.default`
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
  ${qt}
  ${Nt}
  ${Ie}
`,Rp=I.default`
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
`,Oo=I.default`
  fragment CommitFields on Commit {
    authoredDate
    oid
    message
  }
`,Rr=I.default`
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
`,Ap=I.default`
  fragment ReleaseFields on Release {
    id
    description
    name
    publishedAt
    createdAt
    tagName
    url
  }
`,fp=I.default`
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
`,Pp=I.default`
  mutation createRef($input: CreateRefInput!) {
    createRef(input: $input) {
      clientMutationId
      ref {
        id
        name
      }
    }
  }
`,Ep=I.default`
  mutation deleteLinkedBranch($input: DeleteLinkedBranchInput!) {
    deleteLinkedBranch(input: $input) {
      clientMutationId
    }
  }
`,Cp=I.default`
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
  ${Ip}
`,hp=I.default`
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
`,Dp=I.default`
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
  ${Ie}
`,xp=I.default`
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
`,_p=I.default`
  query issueDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...IssueDetailFields
    }
  }
  ${gp}
`,Up=I.default`
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
  ${va}
`,vp=I.default`
  query issueByNumber($owner: String!, $name: String!, $issueNumber: Int!) {
    repository(owner: $owner, name: $name) {
      issue(number: $issueNumber) {
        ...IssueFields
      }
    }
  }
  ${va}
`,Tp=I.default`
  mutation closeIssue($nodeId: ID!, $stateReason: IssueClosedStateReason!) {
    closeIssue(input: { issueId: $nodeId, stateReason: $stateReason }) {
      issue {
        id
      }
    }
  }
`,wp=I.default`
  mutation reopenIssue($nodeId: ID!) {
    reopenIssue(input: { issueId: $nodeId }) {
      issue {
        id
      }
    }
  }
`,Op=I.default`
  mutation changeIssueAssignees($issueId: ID!, $assigneeIds: [ID!]) {
    updateIssue(input: { id: $issueId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,Bp=I.default`
  mutation changeIssueMilestone($issueId: ID!, $milestoneId: ID) {
    updateIssue(input: { id: $issueId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,Lp=I.default`
  mutation addIssueToProject($issueId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $issueId }) {
      clientMutationId
    }
  }
`,qp=I.default`
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
  ${va}
`,Np=I.default`
  query searchIssueMentions($query: String!, $numberOfItems: Int!) {
    search(query: $query, type: ISSUE, first: $numberOfItems) {
      nodes {
        ... on Issue {
          ...IssueMentionFields
        }
      }
    }
  }
  ${_o}
`,Vp=I.default`
  query searchPullRequestMentions($query: String!, $numberOfItems: Int!) {
    search(query: $query, type: ISSUE, first: $numberOfItems) {
      nodes {
        ... on PullRequest {
          ...PullRequestMentionFields
        }
      }
    }
  }
  ${Uo}
`,kp=I.default`
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
  ${_o}
  ${Uo}
`,jp=I.default`
  query searchRepositoryMentions($query: String!, $numberOfItems: Int!) {
    search(query: $query, type: REPOSITORY, first: $numberOfItems) {
      nodes {
        ... on Repository {
          ...RepositoryMentionFields
        }
      }
    }
  }
  ${vo}
`,Fp=I.default`
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
  ${vo}
`,zp=I.default`
  mutation changeProjectStatus($projectId: ID!, $closed: Boolean!) {
    updateProjectV2(input: { projectId: $projectId, closed: $closed }) {
      clientMutationId
    }
  }
`,Hp=I.default`
  query projectDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...ProjectFields
    }
  }
  ${To}
`,Gp=I.default`
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
  ${wo}
`,$p=I.default`
  query pullRequestDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...PullRequestDetailsFields
    }
  }
  ${mp}
`,Qp=I.default`
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
  ${Ie}
`,Wp=I.default`
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
`,Kp=I.default`
  query pullRequestCommits($nodeId: ID!, $numberOfItems: Int!, $before: String) {
    node(id: $nodeId) {
      ...PullRequestCommitFields
    }
  }
  ${Rp}
`,Yp=I.default`
  mutation closePullRequest($nodeId: ID!) {
    closePullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Jp=I.default`
  mutation reopenPullRequest($nodeId: ID!) {
    reopenPullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Zp=I.default`
  mutation markPullRequestReadyForReview($nodeId: ID!) {
    markPullRequestReadyForReview(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Xp=I.default`
  mutation addPullRequestReview($nodeId: ID!, $event: PullRequestReviewEvent, $body: String) {
    addPullRequestReview(input: { pullRequestId: $nodeId, event: $event, body: $body }) {
      pullRequestReview {
        id
      }
    }
  }
`,el=I.default`
  mutation changePullRequestAssignees($pullRequestId: ID!, $assigneeIds: [ID!]) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,tl=I.default`
  mutation changePullRequestMilestone($pullRequestId: ID!, $milestoneId: ID) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,al=I.default`
  mutation addPullRequestToProject($pullRequestId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $pullRequestId }) {
      clientMutationId
    }
  }
`,rl=I.default`
  mutation requestReview($pullRequestId: ID!, $collaboratorId: ID!) {
    requestReviews(input: { pullRequestId: $pullRequestId, userIds: [$collaboratorId], union: true }) {
      clientMutationId
    }
  }
`,nl=I.default`
  mutation mergePullRequest($nodeId: ID!, $method: PullRequestMergeMethod!) {
    mergePullRequest(input: { pullRequestId: $nodeId, mergeMethod: $method }) {
      pullRequest {
        nodeId: id
      }
    }
  }
`,ol=I.default`
  mutation addPullRequestToMergeQueue($nodeId: ID!) {
    enqueuePullRequest(input: { pullRequestId: $nodeId }) {
      __typename
    }
  }
`,il=I.default`
  mutation removePullRequestFromMergeQueue($nodeId: ID!) {
    dequeuePullRequest(input: { id: $nodeId }) {
      __typename
    }
  }
`,sl=I.default`
  mutation enablePullRequestAutoMerge($nodeId: ID!, $mergeMethod: PullRequestMergeMethod) {
    enablePullRequestAutoMerge(input: { pullRequestId: $nodeId, mergeMethod: $mergeMethod }) {
      pullRequest {
        id
      }
    }
  }
`,ul=I.default`
  mutation disablePullRequestAutoMerge($nodeId: ID!) {
    disablePullRequestAutoMerge(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,pl=I.default`
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
`,ll=I.default`
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
  ${wo}
`,cl=I.default`
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
  ${Rr}
`,yl=I.default`
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
  ${Rr}
`,dl=I.default`
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
`,Sl=I.default`
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
`,bl=I.default`
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
  ${Oo}
  ${Ie}
`,Il=I.default`
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
  ${Oo}
`,gl=I.default`
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
  ${va}
`,Ml=I.default`
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
  ${Ap}
`,ml=I.default`
  mutation addStar($repositoryId: ID!) {
    addStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,Rl=I.default`
  mutation removeStar($repositoryId: ID!) {
    removeStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,Al=I.default`
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
  ${Rr}
`,fl=I.default`
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
  ${Ie}
  ${To}
`,Pl=I.default`
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
  ${Ie}
`,El=I.default`
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
`,Cl=(e,t,a,n)=>e();function Bo(e,t=Cl){return{createLinkedBranch(a,n,r){return t(o=>e.request({document:fp,variables:a,requestHeaders:{...n,...o},signal:r}),"createLinkedBranch","mutation",a)},createRef(a,n,r){return t(o=>e.request({document:Pp,variables:a,requestHeaders:{...n,...o},signal:r}),"createRef","mutation",a)},deleteLinkedBranch(a,n,r){return t(o=>e.request({document:Ep,variables:a,requestHeaders:{...n,...o},signal:r}),"deleteLinkedBranch","mutation",a)},searchDiscussions(a,n,r){return t(o=>e.request({document:Cp,variables:a,requestHeaders:{...n,...o},signal:r}),"searchDiscussions","query",a)},getGitHubDiscussionNumber(a,n,r){return t(o=>e.request({document:hp,variables:a,requestHeaders:{...n,...o},signal:r}),"getGitHubDiscussionNumber","query",a)},repositoryCollaboratorsForIssues(a,n,r){return t(o=>e.request({document:Dp,variables:a,requestHeaders:{...n,...o},signal:r}),"repositoryCollaboratorsForIssues","query",a)},repositoryProjectsForIssues(a,n,r){return t(o=>e.request({document:xp,variables:a,requestHeaders:{...n,...o},signal:r}),"repositoryProjectsForIssues","query",a)},issueDetails(a,n,r){return t(o=>e.request({document:_p,variables:a,requestHeaders:{...n,...o},signal:r}),"issueDetails","query",a)},searchIssues(a,n,r){return t(o=>e.request({document:Up,variables:a,requestHeaders:{...n,...o},signal:r}),"searchIssues","query",a)},issueByNumber(a,n,r){return t(o=>e.request({document:vp,variables:a,requestHeaders:{...n,...o},signal:r}),"issueByNumber","query",a)},closeIssue(a,n,r){return t(o=>e.request({document:Tp,variables:a,requestHeaders:{...n,...o},signal:r}),"closeIssue","mutation",a)},reopenIssue(a,n,r){return t(o=>e.request({document:wp,variables:a,requestHeaders:{...n,...o},signal:r}),"reopenIssue","mutation",a)},changeIssueAssignees(a,n,r){return t(o=>e.request({document:Op,variables:a,requestHeaders:{...n,...o},signal:r}),"changeIssueAssignees","mutation",a)},changeIssueMilestone(a,n,r){return t(o=>e.request({document:Bp,variables:a,requestHeaders:{...n,...o},signal:r}),"changeIssueMilestone","mutation",a)},addIssueToProject(a,n,r){return t(o=>e.request({document:Lp,variables:a,requestHeaders:{...n,...o},signal:r}),"addIssueToProject","mutation",a)},createIssue(a,n,r){return t(o=>e.request({document:qp,variables:a,requestHeaders:{...n,...o},signal:r}),"createIssue","mutation",a)},searchIssueMentions(a,n,r){return t(o=>e.request({document:Np,variables:a,requestHeaders:{...n,...o},signal:r}),"searchIssueMentions","query",a)},searchPullRequestMentions(a,n,r){return t(o=>e.request({document:Vp,variables:a,requestHeaders:{...n,...o},signal:r}),"searchPullRequestMentions","query",a)},issueOrPullRequestMention(a,n,r){return t(o=>e.request({document:kp,variables:a,requestHeaders:{...n,...o},signal:r}),"issueOrPullRequestMention","query",a)},searchRepositoryMentions(a,n,r){return t(o=>e.request({document:jp,variables:a,requestHeaders:{...n,...o},signal:r}),"searchRepositoryMentions","query",a)},viewerRepositoryMentions(a,n,r){return t(o=>e.request({document:Fp,variables:a,requestHeaders:{...n,...o},signal:r}),"viewerRepositoryMentions","query",a)},changeProjectStatus(a,n,r){return t(o=>e.request({document:zp,variables:a,requestHeaders:{...n,...o},signal:r}),"changeProjectStatus","mutation",a)},projectDetails(a,n,r){return t(o=>e.request({document:Hp,variables:a,requestHeaders:{...n,...o},signal:r}),"projectDetails","query",a)},searchPullRequests(a,n,r){return t(o=>e.request({document:Gp,variables:a,requestHeaders:{...n,...o},signal:r}),"searchPullRequests","query",a)},pullRequestDetails(a,n,r){return t(o=>e.request({document:$p,variables:a,requestHeaders:{...n,...o},signal:r}),"pullRequestDetails","query",a)},repositoryCollaboratorsForPullRequests(a,n,r){return t(o=>e.request({document:Qp,variables:a,requestHeaders:{...n,...o},signal:r}),"repositoryCollaboratorsForPullRequests","query",a)},repositoryProjectsForPullRequests(a,n,r){return t(o=>e.request({document:Wp,variables:a,requestHeaders:{...n,...o},signal:r}),"repositoryProjectsForPullRequests","query",a)},pullRequestCommits(a,n,r){return t(o=>e.request({document:Kp,variables:a,requestHeaders:{...n,...o},signal:r}),"pullRequestCommits","query",a)},closePullRequest(a,n,r){return t(o=>e.request({document:Yp,variables:a,requestHeaders:{...n,...o},signal:r}),"closePullRequest","mutation",a)},reopenPullRequest(a,n,r){return t(o=>e.request({document:Jp,variables:a,requestHeaders:{...n,...o},signal:r}),"reopenPullRequest","mutation",a)},markPullRequestReadyForReview(a,n,r){return t(o=>e.request({document:Zp,variables:a,requestHeaders:{...n,...o},signal:r}),"markPullRequestReadyForReview","mutation",a)},addPullRequestReview(a,n,r){return t(o=>e.request({document:Xp,variables:a,requestHeaders:{...n,...o},signal:r}),"addPullRequestReview","mutation",a)},changePullRequestAssignees(a,n,r){return t(o=>e.request({document:el,variables:a,requestHeaders:{...n,...o},signal:r}),"changePullRequestAssignees","mutation",a)},changePullRequestMilestone(a,n,r){return t(o=>e.request({document:tl,variables:a,requestHeaders:{...n,...o},signal:r}),"changePullRequestMilestone","mutation",a)},addPullRequestToProject(a,n,r){return t(o=>e.request({document:al,variables:a,requestHeaders:{...n,...o},signal:r}),"addPullRequestToProject","mutation",a)},requestReview(a,n,r){return t(o=>e.request({document:rl,variables:a,requestHeaders:{...n,...o},signal:r}),"requestReview","mutation",a)},mergePullRequest(a,n,r){return t(o=>e.request({document:nl,variables:a,requestHeaders:{...n,...o},signal:r}),"mergePullRequest","mutation",a)},addPullRequestToMergeQueue(a,n,r){return t(o=>e.request({document:ol,variables:a,requestHeaders:{...n,...o},signal:r}),"addPullRequestToMergeQueue","mutation",a)},removePullRequestFromMergeQueue(a,n,r){return t(o=>e.request({document:il,variables:a,requestHeaders:{...n,...o},signal:r}),"removePullRequestFromMergeQueue","mutation",a)},enablePullRequestAutoMerge(a,n,r){return t(o=>e.request({document:sl,variables:a,requestHeaders:{...n,...o},signal:r}),"enablePullRequestAutoMerge","mutation",a)},disablePullRequestAutoMerge(a,n,r){return t(o=>e.request({document:ul,variables:a,requestHeaders:{...n,...o},signal:r}),"disablePullRequestAutoMerge","mutation",a)},createPullRequest(a,n,r){return t(o=>e.request({document:pl,variables:a,requestHeaders:{...n,...o},signal:r}),"createPullRequest","mutation",a)},initPullRequest(a,n,r){return t(o=>e.request({document:ll,variables:a,requestHeaders:{...n,...o},signal:r}),"initPullRequest","mutation",a)},searchRepositories(a,n,r){return t(o=>e.request({document:cl,variables:a,requestHeaders:{...n,...o},signal:r}),"searchRepositories","query",a)},myLatestRepositories(a,n,r){return t(o=>e.request({document:yl,variables:a,requestHeaders:{...n,...o},signal:r}),"myLatestRepositories","query",a)},milestonesForRepository(a,n,r){return t(o=>e.request({document:dl,variables:a,requestHeaders:{...n,...o},signal:r}),"milestonesForRepository","query",a)},commentsForPullRequest(a,n,r){return t(o=>e.request({document:Sl,variables:a,requestHeaders:{...n,...o},signal:r}),"commentsForPullRequest","query",a)},dataForRepository(a,n,r){return t(o=>e.request({document:bl,variables:a,requestHeaders:{...n,...o},signal:r}),"dataForRepository","query",a)},searchRepositoryBranches(a,n,r){return t(o=>e.request({document:Il,variables:a,requestHeaders:{...n,...o},signal:r}),"searchRepositoryBranches","query",a)},repositoryIssues(a,n,r){return t(o=>e.request({document:gl,variables:a,requestHeaders:{...n,...o},signal:r}),"repositoryIssues","query",a)},repositoryReleases(a,n,r){return t(o=>e.request({document:Ml,variables:a,requestHeaders:{...n,...o},signal:r}),"repositoryReleases","query",a)},addStar(a,n,r){return t(o=>e.request({document:ml,variables:a,requestHeaders:{...n,...o},signal:r}),"addStar","mutation",a)},removeStar(a,n,r){return t(o=>e.request({document:Rl,variables:a,requestHeaders:{...n,...o},signal:r}),"removeStar","mutation",a)},myStarredRepositories(a,n,r){return t(o=>e.request({document:Al,variables:a,requestHeaders:{...n,...o},signal:r}),"myStarredRepositories","query",a)},getViewer(a,n,r){return t(o=>e.request({document:fl,variables:a,requestHeaders:{...n,...o},signal:r}),"getViewer","query",a)},getViewerStats(a,n,r){return t(o=>e.request({document:Pl,variables:a,requestHeaders:{...n,...o},signal:r}),"getViewerStats","query",a)},getViewerStatsDetails(a,n,r){return t(o=>e.request({document:El,variables:a,requestHeaders:{...n,...o},signal:r}),"getViewerStatsDetails","query",a)}}}var Ar=null,fr=null,Vo=null,hl=(0,qo.getPreferenceValues)();function Dl({token:e,type:t}){let a=t==="personal"?`token ${e}`:`bearer ${e}`;Vo=e,Ar=Bo(new ma("https://api.github.com/graphql",{headers:{authorization:a}})),fr=new Lo.Octokit({auth:e,request:{fetch:Ua}})}var ko=No.OAuthService.github({personalAccessToken:hl.personalAccessToken,scope:"notifications repo project read:org read:user read:packages",onAuthorize:Dl});function jo(){if(!Ar||!fr)throw new Error("GitHub clients not initialized");return{github:Ar,octokit:fr,token:Vo}}var Er="[A-Za-z0-9](?:[A-Za-z0-9-]{0,38})",Cr="[A-Za-z0-9._-]{1,100}",zo="[1-9][0-9]{0,9}",xl=new RegExp(`^github://(issues|pulls)/(${Er})/(${Cr})/(${zo})$`),_l=new RegExp(`^github://repos/(${Er})/(${Cr})$`),Uy=new RegExp(`^(?:https?://github\\.com/)?(${Er})/(${Cr})(?:#|/(?:issues|pull)/)(${zo})(?:[/?#].*)?$`,"i");function Fo(e){return e!=="."&&e!==".."}function Ho(e){let t=xl.exec(e);if(t&&Fo(t[3]))return{kind:t[1]==="issues"?"issue":"pullRequest",owner:t[2],name:t[3],number:Number(t[4])};let a=_l.exec(e);if(a&&Fo(a[2]))return{kind:"repository",owner:a[1],name:a[2]};throw new Error("Invalid GitHub mention URI.")}function Ul(e){return e.closed?e.stateReason==="NOT_PLANNED"?"Closed as not planned":e.stateReason==="DUPLICATE"?"Closed as duplicate":"Closed":"Open"}function vl(e){return e.merged?"Merged":e.closed?"Closed":e.isDraft?"Draft":"Open"}function Go(e){if(e)return e.length>8e3?`${e.slice(0,8e3)}

[Truncated]`:e}var Pr=e=>(e??[]).flatMap(t=>t?.login?[t.login]:[]),Tl=e=>(e??[]).flatMap(t=>t?.slug?[t.slug]:[]),$o=e=>(e??[]).flatMap(t=>{let a=typeof t=="string"?t:t.name;return a?[a]:[]});function hr(e){return{text:JSON.stringify(e,null,2),mimeType:"application/json"}}function Qo(e,t){return hr({repository:e,number:t.number,title:t.title,status:Ul({closed:t.state==="closed",stateReason:t.state_reason?.toUpperCase()??null}),url:t.html_url,author:t.user?.login,assignees:Pr(t.assignees),labels:$o(t.labels),milestone:t.milestone?.title,comments:t.comments,createdAt:t.created_at,updatedAt:t.updated_at,closedAt:t.closed_at??void 0,body:Go(t.body)})}function Wo(e,t){return hr({repository:e,number:t.number,title:t.title,status:vl({closed:t.state==="closed",merged:t.merged===!0||!!t.merged_at,isDraft:t.draft===!0}),url:t.html_url,author:t.user?.login,base:t.base.ref,head:t.head.ref,mergeableState:t.mergeable_state,assignees:Pr(t.assignees),requestedReviewers:[...Pr(t.requested_reviewers),...Tl(t.requested_teams)],labels:$o(t.labels),milestone:t.milestone?.title,commits:t.commits,changedFiles:t.changed_files,additions:t.additions,deletions:t.deletions,comments:t.comments,reviewComments:t.review_comments,createdAt:t.created_at,updatedAt:t.updated_at,closedAt:t.closed_at??void 0,body:Go(t.body)})}function Ko(e){return hr({name:e.full_name,description:e.description??void 0,url:e.html_url,homepage:e.homepage||void 0,private:e.private===!0,archived:e.archived===!0,fork:e.fork===!0,defaultBranch:e.default_branch,language:e.language??void 0,topics:e.topics??[],stars:e.stargazers_count,forks:e.forks_count,openIssuesAndPullRequests:e.open_issues_count,pushedAt:e.pushed_at??void 0,updatedAt:e.updated_at??void 0})}var Yo=j(cr());var Jo=(0,Yo.withAccessToken)(ko);var wl=Jo(async({uri:e})=>{let t=Ho(e),{octokit:a}=jo(),n=`${t.owner}/${t.name}`;switch(t.kind){case"issue":{let{data:r}=await a.issues.get({owner:t.owner,repo:t.name,issue_number:t.number});return Qo(n,r)}case"pullRequest":{let{data:r}=await a.pulls.get({owner:t.owner,repo:t.name,pull_number:t.number});return Wo(n,r)}case"repository":{let{data:r}=await a.repos.get({owner:t.owner,repo:t.name});return Ko(r)}}});
