"use strict";var Zu=Object.create;var or=Object.defineProperty;var Xu=Object.getOwnPropertyDescriptor;var ep=Object.getOwnPropertyNames;var tp=Object.getPrototypeOf,ap=Object.prototype.hasOwnProperty;var bn=(e,t,a)=>()=>{if(a)throw a[0];try{return e&&(t=e(e=0)),t}catch(n){throw a=[n],n}};var O=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(a){throw t=0,a}},Jt=(e,t)=>{for(var a in t)or(e,a,{get:t[a],enumerable:!0})},nr=(e,t,a,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of ep(t))!ap.call(e,r)&&r!==a&&or(e,r,{get:()=>t[r],enumerable:!(n=Xu(t,r))||n.enumerable});return e},ge=(e,t,a)=>(nr(e,t,"default"),a&&nr(a,t,"default")),_=(e,t,a)=>(a=e!=null?Zu(tp(e)):{},nr(t||!e||!e.__esModule?or(a,"default",{value:e,enumerable:!0}):a,e)),rp=e=>nr(or({},"__esModule",{value:!0}),e);var xo=O(ir=>{"use strict";Object.defineProperty(ir,"__esModule",{value:!0});ir.useDeepMemo=void 0;var gn=require("react"),np=require("dequal/lite");function op(e){let t=(0,gn.useRef)(e),a=(0,gn.useRef)(0);return(0,np.dequal)(e,t.current)||(t.current=e,a.current+=1),(0,gn.useMemo)(()=>t.current,[a.current])}ir.useDeepMemo=op});var ut=O(sr=>{"use strict";Object.defineProperty(sr,"__esModule",{value:!0});sr.useLatest=void 0;var ip=require("react");function sp(e){let t=(0,ip.useRef)(e);return t.current=e,t}sr.useLatest=sp});var Ea=O(We=>{"use strict";var up=We&&We.__createBinding||(Object.create?(function(e,t,a,n){n===void 0&&(n=a);var r=Object.getOwnPropertyDescriptor(t,a);(!r||("get"in r?!t.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,r)}):(function(e,t,a,n){n===void 0&&(n=a),e[n]=t[a]})),pp=We&&We.__setModuleDefault||(Object.create?(function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}):function(e,t){e.default=t}),Uo=We&&We.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var a in e)a!=="default"&&Object.prototype.hasOwnProperty.call(e,a)&&up(t,e,a);return pp(t,e),t};Object.defineProperty(We,"__esModule",{value:!0});We.showFailureToast=void 0;var lp=Uo(require("fs")),cp=Uo(require("path")),Zt=require("@raycast/api");function yp(e,t){let a=e instanceof Error?e.message:String(e);return(0,Zt.showToast)({style:Zt.Toast.Style.Failure,title:t?.title??"Something went wrong",message:t?.message??a,primaryAction:t?.primaryAction??vo(e),secondaryAction:t?.primaryAction?vo(e):void 0})}We.showFailureToast=yp;var vo=e=>{let t=!0,a="[Extension Name]...",n="";try{let u=JSON.parse(lp.readFileSync(cp.join(Zt.environment.assetsPath,"..","package.json"),"utf8"));a=`[${u.title}]...`,n=`https://raycast.com/${u.owner||u.author}/${u.name}`,(!u.owner||u.access==="public")&&(t=!1)}catch{}let r=Zt.environment.isDevelopment||t,o=e instanceof Error?e?.stack||e?.message||"":String(e);return{title:r?"Copy Logs":"Report Error",onAction(u){u.hide(),r?Zt.Clipboard.copy(o):(0,Zt.open)(`https://github.com/raycast/extensions/issues/new?&labels=extension%2Cbug&template=extension_bug_report.yml&title=${encodeURIComponent(a)}&extension-url=${encodeURI(n)}&description=${encodeURIComponent(`#### Error:
\`\`\`
${o}
\`\`\`
`)}`)}}}});var Xt=O(ur=>{"use strict";Object.defineProperty(ur,"__esModule",{value:!0});ur.usePromise=void 0;var he=require("react"),ha=require("@raycast/api"),dp=xo(),Mt=ut(),Sp=Ea();function bp(e,t,a){let n=(0,he.useRef)(0),[r,o]=(0,he.useState)({isLoading:!0}),u=(0,Mt.useLatest)(e),s=(0,Mt.useLatest)(a?.abortable),i=(0,Mt.useLatest)(t||[]),p=(0,Mt.useLatest)(a?.onError),l=(0,Mt.useLatest)(a?.onData),c=(0,Mt.useLatest)(a?.onWillExecute),S=(0,Mt.useLatest)(a?.failureToastOptions),g=(0,Mt.useLatest)(r.data),y=(0,he.useRef)(),M=(0,he.useRef)({page:0}),m=(0,he.useRef)(!1),b=(0,he.useRef)(!0),R=(0,he.useRef)(50),A=(0,he.useCallback)((...ne)=>{let G=++n.current;s.current&&(s.current.current?.abort(),s.current.current=new AbortController),c.current?.(ne),o(T=>({...T,isLoading:!0}));let Pe=gp(u.current)(...ne);function Ee(T){return T.name=="AbortError"||G===n.current&&(p.current?p.current(T):ha.environment.launchType!==ha.LaunchType.Background&&(0,Sp.showFailureToast)(T,{title:"Failed to fetch latest data",primaryAction:{title:"Retry",onAction(pe){pe.hide(),y.current?.(...i.current||[])}},...S.current}),o({error:T,isLoading:!1})),T}return typeof Pe=="function"?(m.current=!0,Pe(M.current).then(({data:T,hasMore:pe,cursor:B})=>(G===n.current&&(M.current&&(M.current.cursor=B,M.current.lastItem=T?.[T.length-1]),l.current&&l.current(T,M.current),pe&&(R.current=T.length),b.current=pe,o(le=>M.current.page===0?{data:T,isLoading:!1}:{data:(le.data||[])?.concat(T),isLoading:!1})),T),T=>(b.current=!1,Ee(T)))):(m.current=!1,Pe.then(T=>(G===n.current&&(l.current&&l.current(T),o({data:T,isLoading:!1})),T),Ee))},[s,l,p,i,u,o,y,c,M,S]);y.current=A;let f=(0,he.useCallback)(()=>{M.current={page:0};let ne=i.current||[];return A(...ne)},[A,i]),E=(0,he.useCallback)(async(ne,G)=>{let Pe;try{if(G?.optimisticUpdate){typeof G?.rollbackOnError!="function"&&G?.rollbackOnError!==!1&&(Pe=structuredClone(g.current?.value));let Ee=G.optimisticUpdate;o(T=>({...T,data:Ee(T.data)}))}return await ne}catch(Ee){if(typeof G?.rollbackOnError=="function"){let T=G.rollbackOnError;o(pe=>({...pe,data:T(pe.data)}))}else G?.optimisticUpdate&&G?.rollbackOnError!==!1&&o(T=>({...T,data:Pe}));throw Ee}finally{G?.shouldRevalidateAfter!==!1&&(ha.environment.launchType===ha.LaunchType.Background||ha.environment.commandMode==="menu-bar"?await f():f())}},[f,g,o]),D=(0,he.useCallback)(()=>{M.current.page+=1;let ne=i.current||[];A(...ne)},[M,i,A]);(0,he.useEffect)(()=>{M.current={page:0},a?.execute!==!1?A(...t||[]):s.current&&s.current.current?.abort()},[(0,dp.useDeepMemo)([t,a?.execute,A]),s,M]),(0,he.useEffect)(()=>()=>{s.current&&s.current.current?.abort()},[s]);let q=a?.execute!==!1?r.isLoading:!1,Y={...r,isLoading:q},Ae=m.current?{pageSize:R.current,hasMore:b.current,onLoadMore:D}:void 0;return{...Y,revalidate:f,mutate:E,pagination:Ae}}ur.usePromise=bp;function gp(e){return e===Promise.all||e===Promise.race||e===Promise.resolve||e===Promise.reject?e.bind(Promise):e}});var Rt=O(Ke=>{"use strict";var Ip=Ke&&Ke.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Ke,"__esModule",{value:!0});Ke.hash=Ke.reviver=Ke.replacer=void 0;var mp=Ip(require("object-hash"));function Mp(e,t){let a=this[e];return a instanceof Date?`__raycast_cached_date__${a.toString()}`:Buffer.isBuffer(a)?`__raycast_cached_buffer__${a.toString("base64")}`:t}Ke.replacer=Mp;function Rp(e,t){return typeof t=="string"&&t.startsWith("__raycast_cached_date__")?new Date(t.replace("__raycast_cached_date__","")):typeof t=="string"&&t.startsWith("__raycast_cached_buffer__")?Buffer.from(t.replace("__raycast_cached_buffer__",""),"base64"):t}Ke.reviver=Rp;function fp(e,t){return(0,mp.default)(e,{replacer:a=>a instanceof URLSearchParams?a.toString():a,...t})}Ke.hash=fp});var lr=O(pr=>{"use strict";Object.defineProperty(pr,"__esModule",{value:!0});pr.useCachedState=void 0;var In=require("react"),Ap=require("@raycast/api"),mn=ut(),_o=Rt(),Pp=Symbol("cache without namespace"),wo=new Map;function Ep(e,t,a){let n=a?.cacheNamespace||Pp,r=wo.get(n)||wo.set(n,new Ap.Cache({namespace:a?.cacheNamespace})).get(n);if(!r)throw new Error("Missing cache");let o=(0,mn.useLatest)(e),u=(0,mn.useLatest)(t),s=(0,In.useSyncExternalStore)(r.subscribe,()=>{try{return r.get(o.current)}catch(c){console.error("Could not get Cache data:",c);return}}),i=(0,In.useMemo)(()=>{if(typeof s<"u"){if(s==="undefined")return;try{return JSON.parse(s,_o.reviver)}catch(c){return console.warn("The cached data is corrupted",c),u.current}}else return u.current},[s,u]),p=(0,mn.useLatest)(i),l=(0,In.useCallback)(c=>{let S=typeof c=="function"?c(p.current):c;if(typeof S>"u")r.set(o.current,"undefined");else{let g=JSON.stringify(S,_o.replacer);r.set(o.current,g)}return S},[r,o,p]);return[i,l]}pr.useCachedState=Ep});var Da=O(cr=>{"use strict";Object.defineProperty(cr,"__esModule",{value:!0});cr.useCachedPromise=void 0;var Ca=require("react"),hp=lr(),Cp=Xt(),Dp=ut(),To=Rt(),ea=Symbol();function xp(e,t,a){let{initialData:n,keepPreviousData:r,internal_cacheKeySuffix:o,...u}=a||{},s=(0,Ca.useRef)(),[i,p]=(0,hp.useCachedState)((0,To.hash)(t||[])+o,ea,{cacheNamespace:(0,To.hash)(e)}),l=(0,Ca.useRef)(i!==ea?i:n),c=(0,Ca.useRef)(void 0),{mutate:S,revalidate:g,...y}=(0,Cp.usePromise)(e,t||[],{...u,onData(A,f){c.current=f,u.onData&&u.onData(A,f),!(f&&f.page>0)&&(s.current="promise",l.current=A,p(A))}}),M,m=y.pagination;c.current&&c.current.page>0&&y.data?M=y.data:s.current==="promise"?M=l.current:r&&i!==ea?(M=i,m&&(m.hasMore=!0,m.pageSize=i.length)):r&&i===ea?M=l.current:i!==ea?(M=i,m&&(m.hasMore=!0,m.pageSize=i.length)):M=n;let b=(0,Dp.useLatest)(M),R=(0,Ca.useCallback)(async(A,f)=>{let E;try{if(f?.optimisticUpdate){typeof f?.rollbackOnError!="function"&&f?.rollbackOnError!==!1&&(E=structuredClone(b.current));let D=f.optimisticUpdate(b.current);s.current="cache",l.current=D,p(D)}return await S(A,{shouldRevalidateAfter:f?.shouldRevalidateAfter})}catch(D){if(typeof f?.rollbackOnError=="function"){let q=f.rollbackOnError(b.current);s.current="cache",l.current=q,p(q)}else f?.optimisticUpdate&&f?.rollbackOnError!==!1&&(s.current="cache",l.current=E,p(E));throw D}},[p,S,b,l,s]);return(0,Ca.useEffect)(()=>{i!==ea&&(s.current="cache",l.current=i)},[i]),{data:M,isLoading:y.isLoading,error:y.error,mutate:c.current&&c.current.page>0?S:R,pagination:m,revalidate:g}}cr.useCachedPromise=xp});var $o=O((He,Ho)=>{"use strict";Object.defineProperty(He,"__esModule",{value:!0});function na(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var ze=na(require("stream")),qo=na(require("http")),dr=na(require("url")),No=na(require("whatwg-url")),vp=na(require("https")),Ot=na(require("zlib")),Up=ze.Readable,pt=Symbol("buffer"),Mn=Symbol("type"),va=class e{constructor(){this[Mn]="";let t=arguments[0],a=arguments[1],n=[],r=0;if(t){let u=t,s=Number(u.length);for(let i=0;i<s;i++){let p=u[i],l;p instanceof Buffer?l=p:ArrayBuffer.isView(p)?l=Buffer.from(p.buffer,p.byteOffset,p.byteLength):p instanceof ArrayBuffer?l=Buffer.from(p):p instanceof e?l=p[pt]:l=Buffer.from(typeof p=="string"?p:String(p)),r+=l.length,n.push(l)}}this[pt]=Buffer.concat(n);let o=a&&a.type!==void 0&&String(a.type).toLowerCase();o&&!/[^\u0020-\u007E]/.test(o)&&(this[Mn]=o)}get size(){return this[pt].length}get type(){return this[Mn]}text(){return Promise.resolve(this[pt].toString())}arrayBuffer(){let t=this[pt],a=t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength);return Promise.resolve(a)}stream(){let t=new Up;return t._read=function(){},t.push(this[pt]),t.push(null),t}toString(){return"[object Blob]"}slice(){let t=this.size,a=arguments[0],n=arguments[1],r,o;a===void 0?r=0:a<0?r=Math.max(t+a,0):r=Math.min(a,t),n===void 0?o=t:n<0?o=Math.max(t+n,0):o=Math.min(n,t);let u=Math.max(o-r,0),i=this[pt].slice(r,r+u),p=new e([],{type:arguments[2]});return p[pt]=i,p}};Object.defineProperties(va.prototype,{size:{enumerable:!0},type:{enumerable:!0},slice:{enumerable:!0}});Object.defineProperty(va.prototype,Symbol.toStringTag,{value:"Blob",writable:!1,enumerable:!1,configurable:!0});function oe(e,t,a){Error.call(this,e),this.message=e,this.type=t,a&&(this.code=this.errno=a.code),Error.captureStackTrace(this,this.constructor)}oe.prototype=Object.create(Error.prototype);oe.prototype.constructor=oe;oe.prototype.name="FetchError";var Pn;try{Pn=require("encoding").convert}catch{}var ct=Symbol("Body internals"),Oo=ze.PassThrough;function Z(e){var t=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.size;let r=n===void 0?0:n;var o=a.timeout;let u=o===void 0?0:o;e==null?e=null:Vo(e)?e=Buffer.from(e.toString()):_a(e)||Buffer.isBuffer(e)||(Object.prototype.toString.call(e)==="[object ArrayBuffer]"?e=Buffer.from(e):ArrayBuffer.isView(e)?e=Buffer.from(e.buffer,e.byteOffset,e.byteLength):e instanceof ze||(e=Buffer.from(String(e)))),this[ct]={body:e,disturbed:!1,error:null},this.size=r,this.timeout=u,e instanceof ze&&e.on("error",function(s){let i=s.name==="AbortError"?s:new oe(`Invalid response body while trying to fetch ${t.url}: ${s.message}`,"system",s);t[ct].error=i})}Z.prototype={get body(){return this[ct].body},get bodyUsed(){return this[ct].disturbed},arrayBuffer(){return ta.call(this).then(function(e){return e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength)})},blob(){let e=this.headers&&this.headers.get("content-type")||"";return ta.call(this).then(function(t){return Object.assign(new va([],{type:e.toLowerCase()}),{[pt]:t})})},json(){var e=this;return ta.call(this).then(function(t){try{return JSON.parse(t.toString())}catch(a){return Z.Promise.reject(new oe(`invalid json response body at ${e.url} reason: ${a.message}`,"invalid-json"))}})},text(){return ta.call(this).then(function(e){return e.toString()})},buffer(){return ta.call(this)},textConverted(){var e=this;return ta.call(this).then(function(t){return _p(t,e.headers)})}};Object.defineProperties(Z.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0}});Z.mixIn=function(e){for(let t of Object.getOwnPropertyNames(Z.prototype))if(!(t in e)){let a=Object.getOwnPropertyDescriptor(Z.prototype,t);Object.defineProperty(e,t,a)}};function ta(){var e=this;if(this[ct].disturbed)return Z.Promise.reject(new TypeError(`body used already for: ${this.url}`));if(this[ct].disturbed=!0,this[ct].error)return Z.Promise.reject(this[ct].error);let t=this.body;if(t===null)return Z.Promise.resolve(Buffer.alloc(0));if(_a(t)&&(t=t.stream()),Buffer.isBuffer(t))return Z.Promise.resolve(t);if(!(t instanceof ze))return Z.Promise.resolve(Buffer.alloc(0));let a=[],n=0,r=!1;return new Z.Promise(function(o,u){let s;e.timeout&&(s=setTimeout(function(){r=!0,u(new oe(`Response timeout while trying to fetch ${e.url} (over ${e.timeout}ms)`,"body-timeout"))},e.timeout)),t.on("error",function(i){i.name==="AbortError"?(r=!0,u(i)):u(new oe(`Invalid response body while trying to fetch ${e.url}: ${i.message}`,"system",i))}),t.on("data",function(i){if(!(r||i===null)){if(e.size&&n+i.length>e.size){r=!0,u(new oe(`content size at ${e.url} over limit: ${e.size}`,"max-size"));return}n+=i.length,a.push(i)}}),t.on("end",function(){if(!r){clearTimeout(s);try{o(Buffer.concat(a,n))}catch(i){u(new oe(`Could not create Buffer from response body for ${e.url}: ${i.message}`,"system",i))}}})})}function _p(e,t){if(typeof Pn!="function")throw new Error("The package `encoding` must be installed to use the textConverted() function");let a=t.get("content-type"),n="utf-8",r,o;return a&&(r=/charset=([^;]*)/i.exec(a)),o=e.slice(0,1024).toString(),!r&&o&&(r=/<meta.+?charset=(['"])(.+?)\1/i.exec(o)),!r&&o&&(r=/<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(o),r||(r=/<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(o),r&&r.pop()),r&&(r=/charset=(.*)/i.exec(r.pop()))),!r&&o&&(r=/<\?xml.+?encoding=(['"])(.+?)\1/i.exec(o)),r&&(n=r.pop(),(n==="gb2312"||n==="gbk")&&(n="gb18030")),Pn(e,"UTF-8",n).toString()}function Vo(e){return typeof e!="object"||typeof e.append!="function"||typeof e.delete!="function"||typeof e.get!="function"||typeof e.getAll!="function"||typeof e.has!="function"||typeof e.set!="function"?!1:e.constructor.name==="URLSearchParams"||Object.prototype.toString.call(e)==="[object URLSearchParams]"||typeof e.sort=="function"}function _a(e){return typeof e=="object"&&typeof e.arrayBuffer=="function"&&typeof e.type=="string"&&typeof e.stream=="function"&&typeof e.constructor=="function"&&typeof e.constructor.name=="string"&&/^(Blob|File)$/.test(e.constructor.name)&&/^(Blob|File)$/.test(e[Symbol.toStringTag])}function Fo(e){let t,a,n=e.body;if(e.bodyUsed)throw new Error("cannot clone body after it is used");return n instanceof ze&&typeof n.getBoundary!="function"&&(t=new Oo,a=new Oo,n.pipe(t),n.pipe(a),e[ct].body=t,n=a),n}function ko(e){return e===null?null:typeof e=="string"?"text/plain;charset=UTF-8":Vo(e)?"application/x-www-form-urlencoded;charset=UTF-8":_a(e)?e.type||null:Buffer.isBuffer(e)||Object.prototype.toString.call(e)==="[object ArrayBuffer]"||ArrayBuffer.isView(e)?null:typeof e.getBoundary=="function"?`multipart/form-data;boundary=${e.getBoundary()}`:e instanceof ze?null:"text/plain;charset=UTF-8"}function jo(e){let t=e.body;return t===null?0:_a(t)?t.size:Buffer.isBuffer(t)?t.length:t&&typeof t.getLengthSync=="function"&&(t._lengthRetrievers&&t._lengthRetrievers.length==0||t.hasKnownLength&&t.hasKnownLength())?t.getLengthSync():null}function wp(e,t){let a=t.body;a===null?e.end():_a(a)?a.stream().pipe(e):Buffer.isBuffer(a)?(e.write(a),e.end()):a.pipe(e)}Z.Promise=global.Promise;var zo=/[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/,En=/[^\t\x20-\x7e\x80-\xff]/;function xa(e){if(e=`${e}`,zo.test(e)||e==="")throw new TypeError(`${e} is not a legal HTTP header name`)}function Lo(e){if(e=`${e}`,En.test(e))throw new TypeError(`${e} is not a legal HTTP header value`)}function aa(e,t){t=t.toLowerCase();for(let a in e)if(a.toLowerCase()===t)return a}var Q=Symbol("map"),Te=class e{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:void 0;if(this[Q]=Object.create(null),t instanceof e){let a=t.raw(),n=Object.keys(a);for(let r of n)for(let o of a[r])this.append(r,o);return}if(t!=null)if(typeof t=="object"){let a=t[Symbol.iterator];if(a!=null){if(typeof a!="function")throw new TypeError("Header pairs must be iterable");let n=[];for(let r of t){if(typeof r!="object"||typeof r[Symbol.iterator]!="function")throw new TypeError("Each header pair must be iterable");n.push(Array.from(r))}for(let r of n){if(r.length!==2)throw new TypeError("Each header pair must be a name/value tuple");this.append(r[0],r[1])}}else for(let n of Object.keys(t)){let r=t[n];this.append(n,r)}}else throw new TypeError("Provided initializer must be an object")}get(t){t=`${t}`,xa(t);let a=aa(this[Q],t);return a===void 0?null:this[Q][a].join(", ")}forEach(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:void 0,n=hn(this),r=0;for(;r<n.length;){var o=n[r];let u=o[0],s=o[1];t.call(a,s,u,this),n=hn(this),r++}}set(t,a){t=`${t}`,a=`${a}`,xa(t),Lo(a);let n=aa(this[Q],t);this[Q][n!==void 0?n:t]=[a]}append(t,a){t=`${t}`,a=`${a}`,xa(t),Lo(a);let n=aa(this[Q],t);n!==void 0?this[Q][n].push(a):this[Q][t]=[a]}has(t){return t=`${t}`,xa(t),aa(this[Q],t)!==void 0}delete(t){t=`${t}`,xa(t);let a=aa(this[Q],t);a!==void 0&&delete this[Q][a]}raw(){return this[Q]}keys(){return Rn(this,"key")}values(){return Rn(this,"value")}[Symbol.iterator](){return Rn(this,"key+value")}};Te.prototype.entries=Te.prototype[Symbol.iterator];Object.defineProperty(Te.prototype,Symbol.toStringTag,{value:"Headers",writable:!1,enumerable:!1,configurable:!0});Object.defineProperties(Te.prototype,{get:{enumerable:!0},forEach:{enumerable:!0},set:{enumerable:!0},append:{enumerable:!0},has:{enumerable:!0},delete:{enumerable:!0},keys:{enumerable:!0},values:{enumerable:!0},entries:{enumerable:!0}});function hn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"key+value";return Object.keys(e[Q]).sort().map(t==="key"?function(n){return n.toLowerCase()}:t==="value"?function(n){return e[Q][n].join(", ")}:function(n){return[n.toLowerCase(),e[Q][n].join(", ")]})}var Cn=Symbol("internal");function Rn(e,t){let a=Object.create(Dn);return a[Cn]={target:e,kind:t,index:0},a}var Dn=Object.setPrototypeOf({next(){if(!this||Object.getPrototypeOf(this)!==Dn)throw new TypeError("Value of `this` is not a HeadersIterator");var e=this[Cn];let t=e.target,a=e.kind,n=e.index,r=hn(t,a),o=r.length;return n>=o?{value:void 0,done:!0}:(this[Cn].index=n+1,{value:r[n],done:!1})}},Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));Object.defineProperty(Dn,Symbol.toStringTag,{value:"HeadersIterator",writable:!1,enumerable:!1,configurable:!0});function Tp(e){let t=Object.assign({__proto__:null},e[Q]),a=aa(e[Q],"Host");return a!==void 0&&(t[a]=t[a][0]),t}function Op(e){let t=new Te;for(let a of Object.keys(e))if(!zo.test(a))if(Array.isArray(e[a]))for(let n of e[a])En.test(n)||(t[Q][a]===void 0?t[Q][a]=[n]:t[Q][a].push(n));else En.test(e[a])||(t[Q][a]=[e[a]]);return t}var ft=Symbol("Response internals"),Lp=qo.STATUS_CODES,we=class e{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Z.call(this,t,a);let n=a.status||200,r=new Te(a.headers);if(t!=null&&!r.has("Content-Type")){let o=ko(t);o&&r.append("Content-Type",o)}this[ft]={url:a.url,status:n,statusText:a.statusText||Lp[n],headers:r,counter:a.counter}}get url(){return this[ft].url||""}get status(){return this[ft].status}get ok(){return this[ft].status>=200&&this[ft].status<300}get redirected(){return this[ft].counter>0}get statusText(){return this[ft].statusText}get headers(){return this[ft].headers}clone(){return new e(Fo(this),{url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected})}};Z.mixIn(we.prototype);Object.defineProperties(we.prototype,{url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}});Object.defineProperty(we.prototype,Symbol.toStringTag,{value:"Response",writable:!1,enumerable:!1,configurable:!0});var lt=Symbol("Request internals"),Bp=dr.URL||No.URL,qp=dr.parse,Np=dr.format;function fn(e){return/^[a-zA-Z][a-zA-Z\d+\-.]*:/.exec(e)&&(e=new Bp(e).toString()),qp(e)}var Vp="destroy"in ze.Readable.prototype;function yr(e){return typeof e=="object"&&typeof e[lt]=="object"}function Fp(e){let t=e&&typeof e=="object"&&Object.getPrototypeOf(e);return!!(t&&t.constructor.name==="AbortSignal")}var Pt=class e{constructor(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n;yr(t)?n=fn(t.url):(t&&t.href?n=fn(t.href):n=fn(`${t}`),t={});let r=a.method||t.method||"GET";if(r=r.toUpperCase(),(a.body!=null||yr(t)&&t.body!==null)&&(r==="GET"||r==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");let o=a.body!=null?a.body:yr(t)&&t.body!==null?Fo(t):null;Z.call(this,o,{timeout:a.timeout||t.timeout||0,size:a.size||t.size||0});let u=new Te(a.headers||t.headers||{});if(o!=null&&!u.has("Content-Type")){let i=ko(o);i&&u.append("Content-Type",i)}let s=yr(t)?t.signal:null;if("signal"in a&&(s=a.signal),s!=null&&!Fp(s))throw new TypeError("Expected signal to be an instanceof AbortSignal");this[lt]={method:r,redirect:a.redirect||t.redirect||"follow",headers:u,parsedURL:n,signal:s},this.follow=a.follow!==void 0?a.follow:t.follow!==void 0?t.follow:20,this.compress=a.compress!==void 0?a.compress:t.compress!==void 0?t.compress:!0,this.counter=a.counter||t.counter||0,this.agent=a.agent||t.agent}get method(){return this[lt].method}get url(){return Np(this[lt].parsedURL)}get headers(){return this[lt].headers}get redirect(){return this[lt].redirect}get signal(){return this[lt].signal}clone(){return new e(this)}};Z.mixIn(Pt.prototype);Object.defineProperty(Pt.prototype,Symbol.toStringTag,{value:"Request",writable:!1,enumerable:!1,configurable:!0});Object.defineProperties(Pt.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0}});function kp(e){let t=e[lt].parsedURL,a=new Te(e[lt].headers);if(a.has("Accept")||a.set("Accept","*/*"),!t.protocol||!t.hostname)throw new TypeError("Only absolute URLs are supported");if(!/^https?:$/.test(t.protocol))throw new TypeError("Only HTTP(S) protocols are supported");if(e.signal&&e.body instanceof ze.Readable&&!Vp)throw new Error("Cancellation of streamed requests with AbortSignal is not supported in node < 8");let n=null;if(e.body==null&&/^(POST|PUT)$/i.test(e.method)&&(n="0"),e.body!=null){let o=jo(e);typeof o=="number"&&(n=String(o))}n&&a.set("Content-Length",n),a.has("User-Agent")||a.set("User-Agent","node-fetch/1.0 (+https://github.com/bitinn/node-fetch)"),e.compress&&!a.has("Accept-Encoding")&&a.set("Accept-Encoding","gzip,deflate");let r=e.agent;return typeof r=="function"&&(r=r(t)),Object.assign({},t,{method:e.method,headers:Tp(a),agent:r})}function ra(e){Error.call(this,e),this.type="aborted",this.message=e,Error.captureStackTrace(this,this.constructor)}ra.prototype=Object.create(Error.prototype);ra.prototype.constructor=ra;ra.prototype.name="AbortError";var Ua=dr.URL||No.URL,Bo=ze.PassThrough,jp=function(t,a){let n=new Ua(a).hostname,r=new Ua(t).hostname;return n===r||n[n.length-r.length-1]==="."&&n.endsWith(r)},zp=function(t,a){let n=new Ua(a).protocol,r=new Ua(t).protocol;return n===r};function At(e,t){if(!At.Promise)throw new Error("native promise missing, set fetch.Promise to your favorite alternative");return Z.Promise=At.Promise,new At.Promise(function(a,n){let r=new Pt(e,t),o=kp(r),u=(o.protocol==="https:"?vp:qo).request,s=r.signal,i=null,p=function(){let M=new ra("The user aborted a request.");n(M),r.body&&r.body instanceof ze.Readable&&An(r.body,M),!(!i||!i.body)&&i.body.emit("error",M)};if(s&&s.aborted){p();return}let l=function(){p(),g()},c=u(o),S;s&&s.addEventListener("abort",l);function g(){c.abort(),s&&s.removeEventListener("abort",l),clearTimeout(S)}r.timeout&&c.once("socket",function(y){S=setTimeout(function(){n(new oe(`network timeout at: ${r.url}`,"request-timeout")),g()},r.timeout)}),c.on("error",function(y){n(new oe(`request to ${r.url} failed, reason: ${y.message}`,"system",y)),i&&i.body&&An(i.body,y),g()}),Hp(c,function(y){s&&s.aborted||i&&i.body&&An(i.body,y)}),parseInt(process.version.substring(1))<14&&c.on("socket",function(y){y.addListener("close",function(M){let m=y.listenerCount("data")>0;if(i&&m&&!M&&!(s&&s.aborted)){let b=new Error("Premature close");b.code="ERR_STREAM_PREMATURE_CLOSE",i.body.emit("error",b)}})}),c.on("response",function(y){clearTimeout(S);let M=Op(y.headers);if(At.isRedirect(y.statusCode)){let f=M.get("Location"),E=null;try{E=f===null?null:new Ua(f,r.url).toString()}catch{if(r.redirect!=="manual"){n(new oe(`uri requested responds with an invalid redirect URL: ${f}`,"invalid-redirect")),g();return}}switch(r.redirect){case"error":n(new oe(`uri requested responds with a redirect, redirect mode is set to error: ${r.url}`,"no-redirect")),g();return;case"manual":if(E!==null)try{M.set("Location",E)}catch(q){n(q)}break;case"follow":if(E===null)break;if(r.counter>=r.follow){n(new oe(`maximum redirect reached at: ${r.url}`,"max-redirect")),g();return}let D={headers:new Te(r.headers),follow:r.follow,counter:r.counter+1,agent:r.agent,compress:r.compress,method:r.method,body:r.body,signal:r.signal,timeout:r.timeout,size:r.size};if(!jp(r.url,E)||!zp(r.url,E))for(let q of["authorization","www-authenticate","cookie","cookie2"])D.headers.delete(q);if(y.statusCode!==303&&r.body&&jo(r)===null){n(new oe("Cannot follow redirect with body being a readable stream","unsupported-redirect")),g();return}(y.statusCode===303||(y.statusCode===301||y.statusCode===302)&&r.method==="POST")&&(D.method="GET",D.body=void 0,D.headers.delete("content-length")),a(At(new Pt(E,D))),g();return}}y.once("end",function(){s&&s.removeEventListener("abort",l)});let m=y.pipe(new Bo),b={url:r.url,status:y.statusCode,statusText:y.statusMessage,headers:M,size:r.size,timeout:r.timeout,counter:r.counter},R=M.get("Content-Encoding");if(!r.compress||r.method==="HEAD"||R===null||y.statusCode===204||y.statusCode===304){i=new we(m,b),a(i);return}let A={flush:Ot.Z_SYNC_FLUSH,finishFlush:Ot.Z_SYNC_FLUSH};if(R=="gzip"||R=="x-gzip"){m=m.pipe(Ot.createGunzip(A)),i=new we(m,b),a(i);return}if(R=="deflate"||R=="x-deflate"){let f=y.pipe(new Bo);f.once("data",function(E){(E[0]&15)===8?m=m.pipe(Ot.createInflate()):m=m.pipe(Ot.createInflateRaw()),i=new we(m,b),a(i)}),f.on("end",function(){i||(i=new we(m,b),a(i))});return}if(R=="br"&&typeof Ot.createBrotliDecompress=="function"){m=m.pipe(Ot.createBrotliDecompress()),i=new we(m,b),a(i);return}i=new we(m,b),a(i)}),wp(c,r)})}function Hp(e,t){let a;e.on("socket",function(n){a=n}),e.on("response",function(n){let r=n.headers;r["transfer-encoding"]==="chunked"&&!r["content-length"]&&n.once("close",function(o){if(a&&a.listenerCount("data")>0&&!o){let s=new Error("Premature close");s.code="ERR_STREAM_PREMATURE_CLOSE",t(s)}})})}function An(e,t){e.destroy?e.destroy(t):(e.emit("error",t),e.end())}At.isRedirect=function(e){return e===301||e===302||e===303||e===307||e===308};At.Promise=global.Promise;Ho.exports=He=At;Object.defineProperty(He,"__esModule",{value:!0});He.default=He;He.Headers=Te;He.Request=Pt;He.Response=we;He.FetchError=oe;He.AbortError=ra});var Ta=O((Lt,Go)=>{var wa=$o(),$p=wa.default||wa,Sr=function(e,t){return/^\/\//.test(e)&&(e="https:"+e),$p.call(this,e,t)};Sr.ponyfill=!0;Go.exports=Lt=Sr;Lt.fetch=Sr;Lt.Headers=wa.Headers;Lt.Request=wa.Request;Lt.Response=wa.Response;Lt.default=Sr});var xn=O(br=>{"use strict";Object.defineProperty(br,"__esModule",{value:!0});br.isJSON=void 0;function Gp(e){if(e){let t=Wp(e);if(!t)return!1;if(t.subtype==="json"||t.suffix==="json"||t.suffix&&/\bjson\b/i.test(t.suffix)||t.subtype&&/\bjson\b/i.test(t.subtype))return!0}return!1}br.isJSON=Gp;var Qp=/^([A-Za-z0-9][A-Za-z0-9!#$&^_-]{0,126})\/([A-Za-z0-9][A-Za-z0-9!#$&^_.+-]{0,126});?$/;function Wp(e){let t=e.indexOf(";"),a=t!==-1?e.slice(0,t).trim():e.trim(),n=Qp.exec(a.toLowerCase().toLowerCase());if(!n)return;let r=n[1],o=n[2],u,s=o.lastIndexOf("+");return s!==-1&&(u=o.substring(s+1),o=o.substring(0,s)),{type:r,subtype:o,suffix:u}}});var Yo=O(gr=>{"use strict";Object.defineProperty(gr,"__esModule",{value:!0});gr.useFetch=void 0;var oa=require("react"),Kp=Da(),Qo=ut(),Wo=Ta(),Yp=xn(),Ko=Rt();async function Jp(e){if(!e.ok)throw new Error(e.statusText);let t=e.headers.get("content-type");return t&&(0,Yp.isJSON)(t)?await e.json():await e.text()}function Zp(e){return{data:e,hasMore:!1}}function Xp(e,t){let{parseResponse:a,mapResult:n,initialData:r,execute:o,keepPreviousData:u,onError:s,onData:i,onWillExecute:p,failureToastOptions:l,...c}=t||{},S={initialData:r,execute:o,keepPreviousData:u,onError:s,onData:i,onWillExecute:p,failureToastOptions:l},g=(0,Qo.useLatest)(a||Jp),y=(0,Qo.useLatest)(n||Zp),M=(0,oa.useRef)(),m=(0,oa.useRef)(),b=typeof e=="function"?e({page:0}):void 0;(!M.current||typeof m.current>"u"||m.current!==b)&&(M.current=e),m.current=b;let R=(0,oa.useRef)(),A=(0,oa.useCallback)((D,q)=>async Y=>{let Ae=await(0,Wo.fetch)(D(Y),{signal:R.current?.signal,...q}),ne=await g.current(Ae);return y.current?.(ne)},[g,y]),f=(0,oa.useCallback)(async(D,q)=>{let Y=await(0,Wo.fetch)(D,{signal:R.current?.signal,...q}),Ae=await g.current(Y);return y.current(Ae)?.data},[g,y]),E=(0,oa.useMemo)(()=>m.current?A:f,[m,f,A]);return(0,Kp.useCachedPromise)(E,[M.current,c],{...S,internal_cacheKeySuffix:m.current+(0,Ko.hash)(y.current)+(0,Ko.hash)(g.current),abortable:R})}gr.useFetch=Xp});var Ir=O(Oe=>{"use strict";var el=Oe&&Oe.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Oe,"__esModule",{value:!0});Oe.defaultParsing=Oe.handleOutput=Oe.getSpawnedResult=Oe.getSpawnedPromise=void 0;var tl=require("node:buffer"),Xo=el(require("node:stream")),al=require("node:util"),rl=require("signal-exit");function nl(e,{timeout:t}={}){let a=new Promise((s,i)=>{e.on("exit",(p,l)=>{s({exitCode:p,signal:l,timedOut:!1})}),e.on("error",p=>{i(p)}),e.stdin&&e.stdin.on("error",p=>{i(p)})});if(t===0||t===void 0)return a;let n,r=new Promise((s,i)=>{n=setTimeout(()=>{e.kill("SIGTERM"),i(Object.assign(new Error("Timed out"),{timedOut:!0,signal:"SIGTERM"}))},t)}),o=a.finally(()=>{clearTimeout(n)}),u=(0,rl.onExit)(()=>{e.kill()});return Promise.race([r,o]).finally(()=>u())}Oe.getSpawnedPromise=nl;var vn=class extends Error{constructor(){super("The output is too big"),this.name="MaxBufferError"}},ol=(0,al.promisify)(Xo.default.pipeline);function il(e){let{encoding:t}=e,a=t==="buffer",n=new Xo.default.PassThrough({objectMode:!1});t&&t!=="buffer"&&n.setEncoding(t);let r=0,o=[];return n.on("data",u=>{o.push(u),r+=u.length}),n.getBufferedValue=()=>a?Buffer.concat(o,r):o.join(""),n.getBufferedLength=()=>r,n}async function Jo(e,t){let a=il(t);return await new Promise((n,r)=>{let o=u=>{u&&a.getBufferedLength()<=tl.constants.MAX_LENGTH&&(u.bufferedData=a.getBufferedValue()),r(u)};(async()=>{try{await ol(e,a),n()}catch(u){o(u)}})(),a.on("data",()=>{a.getBufferedLength()>1e3*1e3*80&&o(new vn)})}),a.getBufferedValue()}async function Zo(e,t){e.destroy();try{return await t}catch(a){return a.bufferedData}}async function sl({stdout:e,stderr:t},{encoding:a},n){let r=Jo(e,{encoding:a}),o=Jo(t,{encoding:a});try{return await Promise.all([n,r,o])}catch(u){return Promise.all([{error:u,exitCode:null,signal:u.signal,timedOut:u.timedOut||!1},Zo(e,r),Zo(t,o)])}}Oe.getSpawnedResult=sl;function ul(e){let t=typeof e=="string"?`
`:10,a=typeof e=="string"?"\r":13;return e[e.length-1]===t&&(e=e.slice(0,-1)),e[e.length-1]===a&&(e=e.slice(0,-1)),e}function pl(e,t){return e.stripFinalNewline?ul(t):t}Oe.handleOutput=pl;var ll=({timedOut:e,timeout:t,signal:a,exitCode:n})=>e?`timed out after ${t} milliseconds`:a!=null?`was killed with ${a}`:n!=null?`failed with exit code ${n}`:"failed",cl=({stdout:e,stderr:t,error:a,signal:n,exitCode:r,command:o,timedOut:u,options:s,parentError:i})=>{let l=`Command ${ll({timedOut:u,timeout:s?.timeout,signal:n,exitCode:r})}: ${o}`,c=a?`${l}
${a.message}`:l,S=[c,t,e].filter(Boolean).join(`
`);return a?a.originalMessage=a.message:a=i,a.message=S,a.shortMessage=c,a.command=o,a.exitCode=r,a.signal=n,a.stdout=e,a.stderr=t,"bufferedData"in a&&delete a.bufferedData,a};function yl({stdout:e,stderr:t,error:a,exitCode:n,signal:r,timedOut:o,command:u,options:s,parentError:i}){if(a||n!==0||r!==null)throw cl({error:a,exitCode:n,signal:r,stdout:e,stderr:t,command:u,timedOut:o,options:s,parentError:i});return e}Oe.defaultParsing=yl});var ti=O(ia=>{"use strict";var dl=ia&&ia.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ia,"__esModule",{value:!0});ia.useExec=void 0;var Sl=dl(require("node:child_process")),ei=require("react"),bl=Da(),gl=ut(),Oa=Ir(),Il=/ +/g;function ml(e,t){if(t)return[e,...t];let a=[];for(let n of e.trim().split(Il)){let r=a[a.length-1];r&&r.endsWith("\\")?a[a.length-1]=`${r.slice(0,-1)} ${n}`:a.push(n)}return a}function Ml(e,t,a){let{parseOutput:n,input:r,onData:o,onWillExecute:u,initialData:s,execute:i,keepPreviousData:p,onError:l,failureToastOptions:c,...S}=Array.isArray(t)?a||{}:t||{},g={initialData:s,execute:i,keepPreviousData:p,onError:l,onData:o,onWillExecute:u,failureToastOptions:c},y=(0,ei.useRef)(),M=(0,gl.useLatest)(n||Oa.defaultParsing),m=(0,ei.useCallback)(async(b,R,A,f)=>{let[E,...D]=ml(b,R),q=[E,...D].join(" "),Y={stripFinalNewline:!0,...A,timeout:A?.timeout||1e4,signal:y.current?.signal,encoding:A?.encoding===null?"buffer":A?.encoding||"utf8",env:{PATH:"/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin",...process.env,...A?.env}},Ae=Sl.default.spawn(E,D,Y),ne=(0,Oa.getSpawnedPromise)(Ae,Y);f&&Ae.stdin.end(f);let[{error:G,exitCode:Pe,signal:Ee,timedOut:T},pe,B]=await(0,Oa.getSpawnedResult)(Ae,Y,ne),le=(0,Oa.handleOutput)(Y,pe),je=(0,Oa.handleOutput)(Y,B);return M.current({stdout:le,stderr:je,error:G,exitCode:Pe,signal:Ee,timedOut:T,command:q,options:Y,parentError:new Error})},[M]);return(0,bl.useCachedPromise)(m,[e,Array.isArray(t)?t:[],S,r],{...g,abortable:y})}ia.useExec=Ml});var oi=O(sa=>{"use strict";var Mr=sa&&sa.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(sa,"__esModule",{value:!0});sa.useStreamJSON=void 0;var Rl=require("@raycast/api"),ai=Mr(Ta()),qa=require("node:fs"),Un=require("node:fs/promises"),mr=require("node:path"),ri=require("node:stream/promises"),La=require("react"),fl=Mr(require("stream-chain")),Al=require("stream-json"),Pl=Mr(require("stream-json/filters/Pick")),El=Mr(require("stream-json/streamers/StreamArray")),ni=xn(),hl=Da(),Cl=Rt();async function Ba(e,t,a){if(typeof e=="object"||e.startsWith("http://")||e.startsWith("https://"))return await Dl(e,t,a);if(e.startsWith("file://"))return await xl((0,mr.normalize)(decodeURIComponent(new URL(e).pathname)),t,a?.signal?a.signal:void 0);throw new Error("Only HTTP(S) or file URLs are supported")}async function Dl(e,t,a){let n=await(0,ai.default)(e,a);if(!n.ok)throw new Error("Failed to fetch URL");if(!(0,ni.isJSON)(n.headers.get("content-type")))throw new Error("URL does not return JSON");if(!n.body)throw new Error("Failed to retrieve expected JSON content: Response body is missing or inaccessible.");await(0,ri.pipeline)(n.body,(0,qa.createWriteStream)(t),a?.signal?{signal:a.signal}:void 0)}async function xl(e,t,a){await(0,ri.pipeline)((0,qa.createReadStream)(e),(0,qa.createWriteStream)(t),a?{signal:a}:void 0)}async function vl(e,t,a,n,r){let o=(0,mr.join)(t,a);try{await(0,Un.stat)(t)}catch{(0,qa.mkdirSync)(t,{recursive:!0}),await Ba(e,o,r);return}if(n){await Ba(e,o,r);return}let u;try{u=await(0,Un.stat)(o)}catch{await Ba(e,o,r);return}if(typeof e=="object"||e.startsWith("http://")||e.startsWith("https://")){let s=await(0,ai.default)(e,{...r,method:"HEAD"});if(!s.ok)throw new Error("Could not fetch URL");if(!(0,ni.isJSON)(s.headers.get("content-type")))throw new Error("URL does not return JSON");let i=Date.parse(s.headers.get("last-modified")??"");if(u.size===0||Number.isNaN(i)||i>u.mtimeMs){await Ba(e,o,r);return}}else if(e.startsWith("file://"))try{(await(0,Un.stat)((0,mr.normalize)(decodeURIComponent(new URL(e).pathname)))).mtimeMs>u.mtimeMs&&await Ba(e,o,r)}catch{throw new Error("Source file could not be read")}else throw new Error("Only HTTP(S) or file URLs are supported")}async function*Ul(e,t,a,n,r,o){let u=[],s=new fl.default([(0,qa.createReadStream)(e),n?Pl.default.withParser({filter:n}):(0,Al.parser)(),new El.default,i=>o?.(i.value)??i.value]);a?.addEventListener("abort",()=>{s.destroy()});try{for await(let i of s){if(a?.aborted)return[];(!r||r(i))&&u.push(i),u.length>=t&&(yield u,u=[])}}catch(i){throw s.destroy(),i}return u.length>0&&(yield u),[]}function _l(e,t){let{initialData:a,execute:n,keepPreviousData:r,onError:o,onData:u,onWillExecute:s,failureToastOptions:i,dataPath:p,filter:l,transform:c,pageSize:S=20,...g}=t??{},y=(0,La.useRef)(),M=(0,La.useRef)(),m={initialData:a,execute:n,keepPreviousData:r,onError:o,onData:u,onWillExecute:s,failureToastOptions:i},b=(0,La.useRef)(null),R=(0,La.useRef)(null),A=(0,La.useRef)(!1);return(0,hl.useCachedPromise)((f,E,D,q,Y,Ae)=>async({page:ne})=>{let G=(0,Cl.hash)(f)+".json",Pe=Rl.environment.supportPath;if(ne===0){R.current?.abort(),R.current=new AbortController;let pe=(0,mr.join)(Pe,G),B=!!(y.current&&y.current!==f&&M.current&&M.current===pe);y.current=f,M.current=pe,await vl(f,Pe,G,B,{...D,signal:R.current?.signal}),b.current=Ul(pe,E,R.current?.signal,q,Y,Ae)}if(!b.current)return{hasMore:A.current,data:[]};let{value:Ee,done:T}=await b.current.next();return A.current=!T,{hasMore:A.current,data:Ee??[]}},[e,S,g,p,l,c],m)}sa.useStreamJSON=_l});var wn=O(Ye=>{"use strict";var _n=Ye&&Ye.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Ye,"__esModule",{value:!0});Ye.baseExecuteSQL=Ye.isPermissionError=Ye.PermissionError=void 0;var wl=require("node:fs"),Rr=require("node:fs/promises"),Tl=_n(require("node:os")),ii=_n(require("node:child_process")),si=_n(require("node:path")),fr=Ir(),Ol=Rt(),Pr=class extends Error{constructor(t){super(t),this.name="PermissionError"}};Ye.PermissionError=Pr;function Ll(e){return e instanceof Error&&e.name==="PermissionError"}Ye.isPermissionError=Ll;async function Bl(e,t,a){if(!(0,wl.existsSync)(e))throw new Error("The database does not exist");let n=a?.signal,r,o=ii.default.spawn("sqlite3",["--json","--readonly",e,t],{signal:n}),u=(0,fr.getSpawnedPromise)(o),[{error:s,exitCode:i,signal:p},l,c]=await(0,fr.getSpawnedResult)(o,{encoding:"utf-8"},u);if(Ar(n),c.match("(5)")||c.match("(14)")){if(!r){let S=si.default.join(Tl.default.tmpdir(),"useSQL",(0,Ol.hash)(e));await(0,Rr.mkdir)(S,{recursive:!0}),Ar(n),r=si.default.join(S,"db.db"),await(0,Rr.copyFile)(e,r),await(0,Rr.writeFile)(r+"-shm",""),await(0,Rr.writeFile)(r+"-wal",""),Ar(n)}o=ii.default.spawn("sqlite3",["--json","--readonly","--vfs","unix-none",r,t],{signal:n}),u=(0,fr.getSpawnedPromise)(o),[{error:s,exitCode:i,signal:p},l,c]=await(0,fr.getSpawnedResult)(o,{encoding:"utf-8"},u),Ar(n)}if(s||i!==0||p!==null)throw c.includes("authorization denied")?new Pr("You do not have permission to access the database."):new Error(c||"Unknown error");return JSON.parse(l.trim()||"[]")}Ye.baseExecuteSQL=Bl;function Ar(e){if(e?.aborted){let t=new Error("aborted");throw t.name="AbortError",t}}});var pi=O(ua=>{"use strict";var ql=ua&&ua.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ua,"__esModule",{value:!0});ua.useSQL=void 0;var Je=require("react/jsx-runtime"),ce=require("@raycast/api"),Nl=require("node:fs"),Vl=ql(require("node:os")),Er=require("react"),Fl=Xt(),kl=ut(),jl=Ea(),Tn=wn();function zl(e,t,a){let{permissionPriming:n,...r}=a||{},[o,u]=(0,Er.useState)(),s=(0,kl.useLatest)(a||{}),i=(0,Er.useRef)(),p=(0,Er.useCallback)(c=>{console.error(c);let S=c instanceof Error&&c.message.includes("authorization denied")?new Tn.PermissionError("You do not have permission to access the database."):c;(0,Tn.isPermissionError)(S)?u((0,Je.jsx)(Hl,{priming:s.current.permissionPriming})):s.current.onError?s.current.onError(S):ce.environment.launchType!==ce.LaunchType.Background&&(0,jl.showFailureToast)(S,{title:"Cannot query the data"})},[s]),l=(0,Er.useMemo)(()=>{if(!(0,Nl.existsSync)(e))throw new Error("The database does not exist");return async(c,S)=>{let g=i.current?.signal;return(0,Tn.baseExecuteSQL)(c,S,{signal:g})}},[e]);return{...(0,Fl.usePromise)(l,[e,t],{...r,onError:p}),permissionView:o}}ua.useSQL=zl;var ui=parseInt(Vl.default.release().split(".")[0])>=22,On=ui?"Settings":"Preferences";function Hl(e){let t=ui?{title:"Open System Settings -> Privacy",target:"x-apple.systempreferences:com.apple.preference.security?Privacy_AllFiles"}:{title:"Open System Preferences -> Security",target:"x-apple.systempreferences:com.apple.preference.security?Privacy_AllFiles"};return ce.environment.commandMode==="menu-bar"?(0,Je.jsxs)(ce.MenuBarExtra,{icon:ce.Icon.Warning,title:ce.environment.commandName,children:[(0,Je.jsx)(ce.MenuBarExtra.Item,{title:"Raycast needs full disk access",tooltip:`You can revert this access in ${On} whenever you want`}),e.priming?(0,Je.jsx)(ce.MenuBarExtra.Item,{title:e.priming,tooltip:`You can revert this access in ${On} whenever you want`}):null,(0,Je.jsx)(ce.MenuBarExtra.Separator,{}),(0,Je.jsx)(ce.MenuBarExtra.Item,{title:t.title,onAction:()=>(0,ce.open)(t.target)})]}):(0,Je.jsx)(ce.List,{children:(0,Je.jsx)(ce.List.EmptyView,{icon:{source:{light:"https://raycast.com/uploads/extensions-utils-security-permissions-light.png",dark:"https://raycast.com/uploads/extensions-utils-security-permissions-dark.png"}},title:"Raycast needs full disk access.",description:`${e.priming?e.priming+`
`:""}You can revert this access in ${On} whenever you want.`,actions:(0,Je.jsx)(ce.ActionPanel,{children:(0,Je.jsx)(ce.Action.Open,{...t})})})})}});var ci=O(pa=>{"use strict";Object.defineProperty(pa,"__esModule",{value:!0});pa.useForm=pa.FormValidation=void 0;var yt=require("react"),li=ut(),Bn;(function(e){e.Required="required"})(Bn||(pa.FormValidation=Bn={}));function Ln(e,t){if(e){if(typeof e=="function")return e(t);if(e===Bn.Required){let a=typeof t<"u"&&t!==null;if(a)switch(typeof t){case"string":a=t.length>0;break;case"object":Array.isArray(t)?a=t.length>0:t instanceof Date&&(a=t.getTime()>0);break;default:break}if(!a)return"The item is required"}}}function $l(e){let{onSubmit:t,validation:a,initialValues:n={}}=e,[r,o]=(0,yt.useState)(n),[u,s]=(0,yt.useState)({}),i=(0,yt.useRef)({}),p=(0,li.useLatest)(a||{}),l=(0,li.useLatest)(t),c=(0,yt.useCallback)(b=>{i.current[b]?.focus()},[i]),S=(0,yt.useCallback)(async b=>{let R=!1;for(let[f,E]of Object.entries(p.current)){let D=Ln(E,b[f]);D&&(R||(R={},c(f)),R[f]=D)}if(R)return s(R),!1;let A=await l.current(b);return typeof A=="boolean"?A:!0},[p,l,c]),g=(0,yt.useCallback)((b,R)=>{s(A=>({...A,[b]:R}))},[s]),y=(0,yt.useCallback)(function(b,R){o(A=>({...A,[b]:typeof R=="function"?R(A[b]):R}))},[o]),M=(0,yt.useMemo)(()=>new Proxy({},{get(b,R){let A=p.current[R],f=r[R];return{onChange(E){u[R]&&(Ln(A,E)||g(R,void 0)),y(R,E)},onBlur(E){let D=Ln(A,E.target.value);D&&g(R,D)},error:u[R],id:R,value:typeof f>"u"?null:f,ref:E=>{i.current[R]=E}}}}),[u,p,g,r,i,y]),m=(0,yt.useCallback)(b=>{s({}),Object.entries(i.current).forEach(([R,A])=>{b?.[R]||A?.reset()}),b&&o(b)},[o,s,i]);return{handleSubmit:S,setValidationError:g,setValue:y,values:r,itemProps:M,focus:c,reset:m}}pa.useForm=$l});var di=O(hr=>{"use strict";Object.defineProperty(hr,"__esModule",{value:!0});hr.useAI=void 0;var yi=require("react"),Gl=require("@raycast/api"),Ql=Xt();function Wl(e,t={}){let{creativity:a,stream:n,model:r,...o}=t,[u,s]=(0,yi.useState)(""),i=(0,yi.useRef)(),{isLoading:p,error:l,revalidate:c}=(0,Ql.usePromise)(async(S,g,y)=>{s("");let M=Gl.AI.ask(S,{creativity:g,model:r,signal:i.current?.signal});y===!1?s(await M):(M.on("data",m=>{s(b=>b+m)}),await M)},[e,a,n],{...o,abortable:i});return{isLoading:p,data:u,error:l,revalidate:c}}hr.useAI=Wl});var gi=O(Cr=>{"use strict";Object.defineProperty(Cr,"__esModule",{value:!0});Cr.useFrecencySorting=void 0;var qn=require("react"),Si=ut(),Kl=lr(),Yl=10,bi=1440*60*1e3,Jl=Math.log(2)/(Yl*bi),Zl={Default:100,Embed:0,Bookmark:140};function Xl(e){let t=Date.now(),a=e?e.lastVisited:0,n=e?e.frecency:0,r=(t-a)/bi,o=Zl.Default*Math.exp(-Jl*r),u=n+o;return{lastVisited:t,frecency:u}}var ec=e=>{if(process.env.NODE_ENV!=="production"&&(typeof e!="object"||!e||!("id"in e)||typeof e.id!="string"))throw new Error("Specify a key function or make sure your items have an 'id' property");return e.id};function tc(e,t){let a=(0,Si.useLatest)(t?.key||ec),n=(0,Si.useLatest)(t?.sortUnvisited),[r,o]=(0,Kl.useCachedState)(`raycast_frecency_${t?.namespace}`,{}),u=(0,qn.useCallback)(async function(l){let c=a.current(l);o(S=>{let g=S[c],y=Xl(g);return{...S,[c]:y}})},[a,o]),s=(0,qn.useCallback)(async function(l){let c=a.current(l);o(S=>{let g={...S};return delete g[c],g})},[a,o]);return{data:(0,qn.useMemo)(()=>e?e.sort((p,l)=>{let c=r[a.current(p)],S=r[a.current(l)];return c&&!S?-1:!c&&S?1:c&&S?S.frecency-c.frecency:n.current?n.current(p,l):0}):[],[r,e,a,n]),visitItem:u,resetRanking:s}}Cr.useFrecencySorting=tc});var Mi=O(Dr=>{"use strict";Object.defineProperty(Dr,"__esModule",{value:!0});Dr.useLocalStorage=void 0;var Nn=require("@raycast/api"),Ii=Ea(),mi=Rt(),ac=Xt();function rc(e,t){let{data:a,isLoading:n,mutate:r}=(0,ac.usePromise)(async s=>{let i=await Nn.LocalStorage.getItem(s);return typeof i<"u"?JSON.parse(i,mi.reviver):t},[e]);async function o(s){try{await r(Nn.LocalStorage.setItem(e,JSON.stringify(s,mi.replacer)),{optimisticUpdate(i){return i}})}catch(i){await(0,Ii.showFailureToast)(i,{title:"Failed to set value in local storage"})}}async function u(){try{await r(Nn.LocalStorage.removeItem(e),{optimisticUpdate(){}})}catch(s){await(0,Ii.showFailureToast)(s,{title:"Failed to remove value from local storage"})}}return{value:a,setValue:o,removeValue:u,isLoading:n}}Dr.useLocalStorage=rc});var Ei=O(la=>{"use strict";Object.defineProperty(la,"__esModule",{value:!0});la.slightlyLighterColor=la.slightlyDarkerColor=void 0;function nc(e){let t=0,a=0,n=0;if(e.length===4)t=parseInt(`${e[1]}${e[1]}`,16),a=parseInt(`${e[2]}${e[2]}`,16),n=parseInt(`${e[3]}${e[3]}`,16);else if(e.length===7)t=parseInt(`${e[1]}${e[2]}`,16),a=parseInt(`${e[3]}${e[4]}`,16),n=parseInt(`${e[5]}${e[6]}`,16);else throw new Error(`Malformed hex color: ${e}`);return{r:t,g:a,b:n}}function oc({r:e,g:t,b:a}){let n=e.toString(16),r=t.toString(16),o=a.toString(16);return n.length===1&&(n=`0${n}`),r.length===1&&(r=`0${r}`),o.length===1&&(o=`0${o}`),`#${n}${r}${o}`}function ic({r:e,g:t,b:a}){e/=255,t/=255,a/=255;let n=Math.min(e,t,a),r=Math.max(e,t,a),o=r-n,u=0,s=0,i=0;return o===0?u=0:r===e?u=(t-a)/o%6:r===t?u=(a-e)/o+2:u=(e-t)/o+4,u=Math.round(u*60),u<0&&(u+=360),i=(r+n)/2,s=o===0?0:o/(1-Math.abs(2*i-1)),s=+(s*100).toFixed(1),i=+(i*100).toFixed(1),{h:u,s,l:i}}function sc({h:e,s:t,l:a}){t/=100,a/=100;let n=(1-Math.abs(2*a-1))*t,r=n*(1-Math.abs(e/60%2-1)),o=a-n/2,u=0,s=0,i=0;return e>=0&&e<60?(u=n,s=r,i=0):e>=60&&e<120?(u=r,s=n,i=0):e>=120&&e<180?(u=0,s=n,i=r):e>=180&&e<240?(u=0,s=r,i=n):e>=240&&e<300?(u=r,s=0,i=n):e>=300&&e<360&&(u=n,s=0,i=r),u=Math.round((u+o)*255),s=Math.round((s+o)*255),i=Math.round((i+o)*255),{r:u,g:s,b:i}}function Ri(e){return ic(nc(e))}function fi(e){return oc(sc(e))}function Ai(e,t,a){return t<a?e<t?t:e>a?a:e:e<a?a:e>t?t:e}var Pi=12;function uc(e){let t=Ri(e);return fi({h:t.h,s:t.s,l:Ai(t.l-Pi,0,100)})}la.slightlyDarkerColor=uc;function pc(e){let t=Ri(e);return fi({h:t.h,s:t.s,l:Ai(t.l+Pi,0,100)})}la.slightlyLighterColor=pc});var Di=O(xr=>{"use strict";Object.defineProperty(xr,"__esModule",{value:!0});xr.getAvatarIcon=void 0;var hi=Ei();function ca(e,t){let a=e.charCodeAt(t);if(Number.isNaN(a))return["",t];if(a<55296||a>57343)return[e.charAt(t),t];if(55296<=a&&a<=56319){if(e.length<=t+1)throw new Error("High surrogate without following low surrogate");let r=e.charCodeAt(t+1);if(56320>r||r>57343)throw new Error("High surrogate without following low surrogate");return[e.charAt(t)+e.charAt(t+1),t+1]}if(t===0)throw new Error("Low surrogate without preceding high surrogate");let n=e.charCodeAt(t-1);if(55296>n||n>56319)throw new Error("Low surrogate without preceding high surrogate");return[e.charAt(t+1),t+1]}var Ci=["#DC829A","#D64854","#D47600","#D36CDD","#52A9E4","#7871E8","#70920F","#43B93A","#EB6B3E","#26B795","#D85A9B","#A067DC","#BD9500","#5385D9"];function lc(e,t){let a=e.trim().split(" "),n;if(a.length==1&&ca(a[0],0)[0])n=ca(a[0],0)[0];else if(a.length>1){let i=ca(a[0],0)[0]||"",p=ca(a[a.length-1],0)[0]??"";n=i+p}else n="";let r;if(t?.background)r=t?.background;else{let i=0,[p,l]=ca(n,0);for(;p;)i+=p.charCodeAt(0),[p,l]=ca(n,l+1);let c=i%Ci.length;r=Ci[c]}let u=50-0;return`data:image/svg+xml,${`<svg width="100px" height="100px">
  ${t?.gradient!==!1?`<defs>
      <linearGradient id="Gradient" x1="0.25" x2="0.75" y1="0" y2="1">
        <stop offset="0%" stop-color="${(0,hi.slightlyLighterColor)(r)}"/>
        <stop offset="50%" stop-color="${r}"/>
        <stop offset="100%" stop-color="${(0,hi.slightlyDarkerColor)(r)}"/>
      </linearGradient>
  </defs>`:""}
      <circle cx="50" cy="50" r="${u}" fill="${t?.gradient!==!1?"url(#Gradient)":r}" />
      ${n?`<text x="50" y="80" font-size="${u-1}" font-family="Inter, sans-serif" text-anchor="middle" fill="white">${n.toUpperCase()}</text>`:""}
    </svg>
  `.replaceAll(`
`,"")}`}xr.getAvatarIcon=lc});var vi=O(vr=>{"use strict";Object.defineProperty(vr,"__esModule",{value:!0});vr.getFavicon=void 0;var xi=require("@raycast/api"),cc=require("url");function yc(e,t){try{let n=(typeof e=="string"?new cc.URL(e):e).hostname;return{source:`https://www.google.com/s2/favicons?sz=${t?.size??64}&domain=${n}`,fallback:t?.fallback??xi.Icon.Link,mask:t?.mask}}catch(a){return console.error(a),xi.Icon.Link}}vr.getFavicon=yc});var wi=O(Ur=>{"use strict";Object.defineProperty(Ur,"__esModule",{value:!0});Ur.getProgressIcon=void 0;var Ui=require("@raycast/api");function _i(e,t,a,n){let r=(n-90)*Math.PI/180;return{x:e+a*Math.cos(r),y:t+a*Math.sin(r)}}function dc(e,t,a,n,r){let o=_i(e,t,a,r),u=_i(e,t,a,n),s=r-n<=180?"0":"1";return["M",o.x,o.y,"A",a,a,0,s,0,u.x,u.y].join(" ")}function Sc(e,t=Ui.Color.Red,a){let n=a?.background||(Ui.environment.appearance==="light"?"black":"white"),r=a?.backgroundOpacity||.1,o=10,s=50-5-o/2;return`data:image/svg+xml,${`<svg width="100px" height="100px">
      <circle cx="50" cy="50" r="${s}" stroke-width="${o}" stroke="${e<1?n:t}" opacity="${e<1?r:"1"}" fill="none" />
      ${e>0&&e<1?`<path d="${dc(50,50,s,0,e*360)}" stroke="${t}" stroke-width="${o}" fill="none" />`:""}
    </svg>
  `.replaceAll(`
`,"")}`}Ur.getProgressIcon=Sc});var Ti=O(dt=>{"use strict";var bc=dt&&dt.__createBinding||(Object.create?(function(e,t,a,n){n===void 0&&(n=a);var r=Object.getOwnPropertyDescriptor(t,a);(!r||("get"in r?!t.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,r)}):(function(e,t,a,n){n===void 0&&(n=a),e[n]=t[a]})),Vn=dt&&dt.__exportStar||function(e,t){for(var a in e)a!=="default"&&!Object.prototype.hasOwnProperty.call(t,a)&&bc(t,e,a)};Object.defineProperty(dt,"__esModule",{value:!0});Vn(Di(),dt);Vn(vi(),dt);Vn(wi(),dt)});var Oi=O(ue=>{"use strict";Object.defineProperty(ue,"__esModule",{value:!0});ue.zoomService=ue.slackService=ue.linearService=ue.jiraService=ue.googleService=ue.githubService=ue.asanaService=void 0;var ye=require("@raycast/api"),Bt=Fn(),_r={asana:"1191201745684312",github:"7235fe8d42157f1f38c0",linear:"c8ff37b9225c3c9aefd7d66ea0e5b6f1",slack:"851756884692.5546927290212"},Et=e=>`data:image/svg+xml,${e}`,qt={asana:Et('<svg xmlns="http://www.w3.org/2000/svg" width="251" height="232" fill="none"><path fill="#F06A6A" d="M179.383 54.373c0 30.017-24.337 54.374-54.354 54.374-30.035 0-54.373-24.338-54.373-54.374C70.656 24.338 94.993 0 125.029 0c30.017 0 54.354 24.338 54.354 54.373ZM54.393 122.33C24.376 122.33.02 146.668.02 176.685c0 30.017 24.337 54.373 54.373 54.373 30.035 0 54.373-24.338 54.373-54.373 0-30.017-24.338-54.355-54.373-54.355Zm141.253 0c-30.035 0-54.373 24.338-54.373 54.374 0 30.035 24.338 54.373 54.373 54.373 30.017 0 54.374-24.338 54.374-54.373 0-30.036-24.338-54.374-54.374-54.374Z"/></svg>'),github:{source:Et('<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>'),tintColor:ye.Color.PrimaryText},google:Et('<svg xmlns="http://www.w3.org/2000/svg" style="display:block" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/><path fill="none" d="M0 0h48v48H0z"/></svg>'),jira:Et('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="2361" height="2500" viewBox="2.59 0 214.091 224"><linearGradient id="a" x1="102.4" x2="56.15" y1="218.63" y2="172.39" gradientTransform="matrix(1 0 0 -1 0 264)" gradientUnits="userSpaceOnUse"><stop offset=".18" stop-color="#0052cc"/><stop offset="1" stop-color="#2684ff"/></linearGradient><linearGradient xlink:href="#a" id="b" x1="114.65" x2="160.81" y1="85.77" y2="131.92"/><path fill="#2684ff" d="M214.06 105.73 117.67 9.34 108.33 0 35.77 72.56 2.59 105.73a8.89 8.89 0 0 0 0 12.54l66.29 66.29L108.33 224l72.55-72.56 1.13-1.12 32.05-32a8.87 8.87 0 0 0 0-12.59zm-105.73 39.39L75.21 112l33.12-33.12L141.44 112z"/><path fill="url(#a)" d="M108.33 78.88a55.75 55.75 0 0 1-.24-78.61L35.62 72.71l39.44 39.44z"/><path fill="url(#b)" d="m141.53 111.91-33.2 33.21a55.77 55.77 0 0 1 0 78.86L181 151.35z"/></svg>'),linear:{source:{light:Et('<svg xmlns="http://www.w3.org/2000/svg" fill="#222326" width="200" height="200" viewBox="0 0 100 100"><path d="M1.22541 61.5228c-.2225-.9485.90748-1.5459 1.59638-.857L39.3342 97.1782c.6889.6889.0915 1.8189-.857 1.5964C20.0515 94.4522 5.54779 79.9485 1.22541 61.5228ZM.00189135 46.8891c-.01764375.2833.08887215.5599.28957165.7606L52.3503 99.7085c.2007.2007.4773.3075.7606.2896 2.3692-.1476 4.6938-.46 6.9624-.9259.7645-.157 1.0301-1.0963.4782-1.6481L2.57595 39.4485c-.55186-.5519-1.49117-.2863-1.648174.4782-.465915 2.2686-.77832 4.5932-.92588465 6.9624ZM4.21093 29.7054c-.16649.3738-.08169.8106.20765 1.1l64.77602 64.776c.2894.2894.7262.3742 1.1.2077 1.7861-.7956 3.5171-1.6927 5.1855-2.684.5521-.328.6373-1.0867.1832-1.5407L8.43566 24.3367c-.45409-.4541-1.21271-.3689-1.54074.1832-.99132 1.6684-1.88843 3.3994-2.68399 5.1855ZM12.6587 18.074c-.3701-.3701-.393-.9637-.0443-1.3541C21.7795 6.45931 35.1114 0 49.9519 0 77.5927 0 100 22.4073 100 50.0481c0 14.8405-6.4593 28.1724-16.7199 37.3375-.3903.3487-.984.3258-1.3542-.0443L12.6587 18.074Z"/></svg>'),dark:Et('<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="200" height="200" viewBox="0 0 100 100"><path d="M1.22541 61.5228c-.2225-.9485.90748-1.5459 1.59638-.857L39.3342 97.1782c.6889.6889.0915 1.8189-.857 1.5964C20.0515 94.4522 5.54779 79.9485 1.22541 61.5228ZM.00189135 46.8891c-.01764375.2833.08887215.5599.28957165.7606L52.3503 99.7085c.2007.2007.4773.3075.7606.2896 2.3692-.1476 4.6938-.46 6.9624-.9259.7645-.157 1.0301-1.0963.4782-1.6481L2.57595 39.4485c-.55186-.5519-1.49117-.2863-1.648174.4782-.465915 2.2686-.77832 4.5932-.92588465 6.9624ZM4.21093 29.7054c-.16649.3738-.08169.8106.20765 1.1l64.77602 64.776c.2894.2894.7262.3742 1.1.2077 1.7861-.7956 3.5171-1.6927 5.1855-2.684.5521-.328.6373-1.0867.1832-1.5407L8.43566 24.3367c-.45409-.4541-1.21271-.3689-1.54074.1832-.99132 1.6684-1.88843 3.3994-2.68399 5.1855ZM12.6587 18.074c-.3701-.3701-.393-.9637-.0443-1.3541C21.7795 6.45931 35.1114 0 49.9519 0 77.5927 0 100 22.4073 100 50.0481c0 14.8405-6.4593 28.1724-16.7199 37.3375-.3903.3487-.984.3258-1.3542-.0443L12.6587 18.074Z" /></svg>')}},slack:Et('<svg xmlns="http://www.w3.org/2000/svg" viewBox="73 73 124 124"><style>.st0{fill:#e01e5a}.st1{fill:#36c5f0}.st2{fill:#2eb67d}.st3{fill:#ecb22e}</style><path d="M99.4 151.2c0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9h12.9v12.9zM105.9 151.2c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v32.3c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9v-32.3z" class="st0"/><path d="M118.8 99.4c-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v12.9h-12.9zM118.8 105.9c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H86.5c-7.1 0-12.9-5.8-12.9-12.9s5.8-12.9 12.9-12.9h32.3z" class="st1"/><path d="M170.6 118.8c0-7.1 5.8-12.9 12.9-12.9 7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9h-12.9v-12.9zM164.1 118.8c0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9V86.5c0-7.1 5.8-12.9 12.9-12.9 7.1 0 12.9 5.8 12.9 12.9v32.3z" class="st2"/><path d="M151.2 170.6c7.1 0 12.9 5.8 12.9 12.9 0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9v-12.9h12.9zM151.2 164.1c-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9h32.3c7.1 0 12.9 5.8 12.9 12.9 0 7.1-5.8 12.9-12.9 12.9h-32.3z" class="st3"/></svg>'),zoom:Et('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 351.845 80"><path d="M73.786 78.835H10.88A10.842 10.842 0 0 1 .833 72.122a10.841 10.841 0 0 1 2.357-11.85L46.764 16.7h-31.23C6.954 16.699 0 9.744 0 1.165h58.014c4.414 0 8.357 2.634 10.046 6.712a10.843 10.843 0 0 1-2.356 11.85L22.13 63.302h36.122c8.58 0 15.534 6.955 15.534 15.534Zm278.059-48.544C351.845 13.588 338.256 0 321.553 0c-8.934 0-16.975 3.89-22.524 10.063C293.48 3.89 285.44 0 276.505 0c-16.703 0-30.291 13.588-30.291 30.291v48.544c8.579 0 15.534-6.955 15.534-15.534v-33.01c0-8.137 6.62-14.757 14.757-14.757s14.757 6.62 14.757 14.757v33.01c0 8.58 6.955 15.534 15.534 15.534V30.291c0-8.137 6.62-14.757 14.757-14.757s14.758 6.62 14.758 14.757v33.01c0 8.58 6.954 15.534 15.534 15.534V30.291ZM238.447 40c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.908-40 40-40 40 17.909 40 40Zm-15.534 0c0-13.512-10.954-24.466-24.466-24.466S173.98 26.488 173.98 40s10.953 24.466 24.466 24.466S222.913 53.512 222.913 40Zm-70.68 0c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.909-40 40-40 40 17.909 40 40Zm-15.534 0c0-13.512-10.954-24.466-24.466-24.466S87.767 26.488 87.767 40s10.954 24.466 24.466 24.466S136.699 53.512 136.699 40Z" style="fill:#0b5cff"/></svg>')},gc=e=>new Bt.OAuthService({client:new ye.OAuth.PKCEClient({redirectMethod:ye.OAuth.RedirectMethod.Web,providerName:"Asana",providerIcon:qt.asana,providerId:"asana",description:"Connect your Asana account"}),clientId:e.clientId??_r.asana,authorizeUrl:e.authorizeUrl??"https://asana.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://asana.oauth.raycast.com/token",refreshTokenUrl:e.refreshTokenUrl??"https://asana.oauth.raycast.com/refresh-token",scope:e.scope,personalAccessToken:e.personalAccessToken,onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});ue.asanaService=gc;var Ic=e=>new Bt.OAuthService({client:new ye.OAuth.PKCEClient({redirectMethod:ye.OAuth.RedirectMethod.Web,providerName:"GitHub",providerIcon:qt.github,providerId:"github",description:"Connect your GitHub account"}),clientId:e.clientId??_r.github,authorizeUrl:e.authorizeUrl??"https://github.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://github.oauth.raycast.com/token",refreshTokenUrl:e.refreshTokenUrl??"https://github.oauth.raycast.com/refresh-token",scope:e.scope,personalAccessToken:e.personalAccessToken,onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});ue.githubService=Ic;var mc=e=>new Bt.OAuthService({client:new ye.OAuth.PKCEClient({redirectMethod:ye.OAuth.RedirectMethod.AppURI,providerName:"Google",providerIcon:qt.google,providerId:"google",description:"Connect your Google account"}),clientId:e.clientId,authorizeUrl:e.authorizeUrl??"https://accounts.google.com/o/oauth2/v2/auth",tokenUrl:e.tokenUrl??"https://oauth2.googleapis.com/token",refreshTokenUrl:e.tokenUrl,scope:e.scope,personalAccessToken:e.personalAccessToken,bodyEncoding:e.bodyEncoding??"url-encoded",onAuthorize:e.onAuthorize,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});ue.googleService=mc;var Mc=e=>new Bt.OAuthService({client:new ye.OAuth.PKCEClient({redirectMethod:ye.OAuth.RedirectMethod.Web,providerName:"Jira",providerIcon:qt.jira,providerId:"jira",description:"Connect your Jira account"}),clientId:e.clientId,authorizeUrl:e.authorizeUrl??"https://auth.atlassian.com/authorize",tokenUrl:e.tokenUrl??"https://auth.atlassian.com/oauth/token",refreshTokenUrl:e.refreshTokenUrl,scope:e.scope,personalAccessToken:e.personalAccessToken,onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});ue.jiraService=Mc;var Rc=e=>new Bt.OAuthService({client:new ye.OAuth.PKCEClient({redirectMethod:ye.OAuth.RedirectMethod.Web,providerName:"Linear",providerIcon:qt.linear,providerId:"linear",description:"Connect your Linear account"}),clientId:e.clientId??_r.linear,authorizeUrl:e.authorizeUrl??"https://linear.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://linear.oauth.raycast.com/token",refreshTokenUrl:e.refreshTokenUrl??"https://linear.oauth.raycast.com/refresh-token",scope:e.scope,extraParameters:{actor:"user"},onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});ue.linearService=Rc;var fc=e=>new Bt.OAuthService({client:new ye.OAuth.PKCEClient({redirectMethod:ye.OAuth.RedirectMethod.Web,providerName:"Slack",providerIcon:qt.slack,providerId:"slack",description:"Connect your Slack account"}),clientId:e.clientId??_r.slack,authorizeUrl:e.authorizeUrl??"https://slack.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://slack.oauth.raycast.com/token",refreshTokenUrl:e.tokenUrl??"https://slack.oauth.raycast.com/refresh-token",scope:"",extraParameters:{user_scope:e.scope},personalAccessToken:e.personalAccessToken,bodyEncoding:e.tokenUrl?e.bodyEncoding??"url-encoded":"json",onAuthorize:e.onAuthorize,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser??(t=>({access_token:t.authed_user.access_token,scope:t.authed_user.scope}))});ue.slackService=fc;var Ac=e=>new Bt.OAuthService({client:new ye.OAuth.PKCEClient({redirectMethod:ye.OAuth.RedirectMethod.Web,providerName:"Zoom",providerIcon:qt.zoom,providerId:"zoom",description:"Connect your Zoom account"}),clientId:e.clientId,authorizeUrl:e.authorizeUrl??"https://zoom.us/oauth/authorize",tokenUrl:e.tokenUrl??"https://zoom.us/oauth/token",refreshTokenUrl:e.refreshTokenUrl,scope:e.scope,personalAccessToken:e.personalAccessToken,bodyEncoding:e.bodyEncoding??"url-encoded",onAuthorize:e.onAuthorize,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});ue.zoomService=Ac});var Fn=O(ya=>{"use strict";var Pc=ya&&ya.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ya,"__esModule",{value:!0});ya.OAuthService=void 0;var Li=Pc(Ta()),Nt=Oi(),Ze=class{constructor(t){this.clientId=t.clientId,this.scope=Array.isArray(t.scope)?t.scope.join(" "):t.scope,this.personalAccessToken=t.personalAccessToken,this.bodyEncoding=t.bodyEncoding,this.client=t.client,this.extraParameters=t.extraParameters,this.authorizeUrl=t.authorizeUrl,this.tokenUrl=t.tokenUrl,this.refreshTokenUrl=t.refreshTokenUrl,this.onAuthorize=t.onAuthorize,this.tokenResponseParser=t.tokenResponseParser??(a=>a),this.tokenRefreshResponseParser=t.tokenRefreshResponseParser??(a=>a),this.authorize=this.authorize.bind(this)}async authorize(){let t=await this.client.getTokens();if(t?.accessToken){if(t.refreshToken&&t.isExpired()){let o=await this.refreshTokens({token:t.refreshToken});if(o)return await this.client.setTokens(o),o.access_token}return t.accessToken}let a=await this.client.authorizationRequest({endpoint:this.authorizeUrl,clientId:this.clientId,scope:this.scope,extraParameters:this.extraParameters}),{authorizationCode:n}=await this.client.authorize(a),r=await this.fetchTokens({authRequest:a,authorizationCode:n});return await this.client.setTokens(r),r.access_token}async fetchTokens({authRequest:t,authorizationCode:a}){let n;if(this.bodyEncoding==="url-encoded"){let u=new URLSearchParams;u.append("client_id",this.clientId),u.append("code",a),u.append("code_verifier",t.codeVerifier),u.append("grant_type","authorization_code"),u.append("redirect_uri",t.redirectURI),n={body:u}}else n={body:JSON.stringify({client_id:this.clientId,code:a,code_verifier:t.codeVerifier,grant_type:"authorization_code",redirect_uri:t.redirectURI}),headers:{"Content-Type":"application/json"}};let r=await(0,Li.default)(this.tokenUrl,{method:"POST",...n});if(!r.ok){let u=await r.text();throw console.error("fetch tokens error:",u),new Error(`Error while fetching tokens: ${r.status} (${r.statusText})
${u}`)}let o=this.tokenResponseParser(await r.json());return Array.isArray(o.scope)?{...o,scope:o.scope.join(" ")}:o}async refreshTokens({token:t}){let a;if(this.bodyEncoding==="url-encoded"){let r=new URLSearchParams;r.append("client_id",this.clientId),r.append("refresh_token",t),r.append("grant_type","refresh_token"),a={body:r}}else a={body:JSON.stringify({client_id:this.clientId,refresh_token:t,grant_type:"refresh_token"}),headers:{"Content-Type":"application/json"}};let n=await(0,Li.default)(this.refreshTokenUrl??this.tokenUrl,{method:"POST",...a});if(n.ok){let r=this.tokenRefreshResponseParser(await n.json());return r.refresh_token=r.refresh_token??t,r}else{let r=await n.text();console.error("refresh tokens error:",r),this.client.description=`${this.client.providerName} needs you to sign-in again. Press \u23CE or click the button below to continue.`,await this.client.removeTokens(),await this.authorize()}}};ya.OAuthService=Ze;Ze.asana=Nt.asanaService;Ze.github=Nt.githubService;Ze.google=Nt.googleService;Ze.jira=Nt.jiraService;Ze.linear=Nt.linearService;Ze.slack=Nt.slackService;Ze.zoom=Nt.zoomService});var Bi=O(da=>{"use strict";Object.defineProperty(da,"__esModule",{value:!0});da.getAccessToken=da.withAccessToken=void 0;var Ec=require("react/jsx-runtime"),hc=require("@raycast/api"),ht=null,Vt=null,kn=null,jn=null,zn=null;function Cc(e){return hc.environment.commandMode==="no-view"?t=>async n=>{if(!ht){ht=e.personalAccessToken??await e.authorize(),Vt=e.personalAccessToken?"personal":"oauth";let r=(await e.client?.getTokens())?.idToken;e.onAuthorize&&await Promise.resolve(e.onAuthorize({token:ht,type:Vt,idToken:r}))}return t(n)}:t=>{let a=n=>{e.personalAccessToken?(ht=e.personalAccessToken,Vt="personal"):(kn||(kn=Hn(e.authorize())),ht=kn.read(),Vt="oauth");let r;return e.client&&(jn||(jn=Hn(e.client.getTokens())),r=jn.read()?.idToken),!zn&&e.onAuthorize&&(zn=Hn(Promise.resolve(e.onAuthorize({token:ht,type:Vt,idToken:r})))),zn?.read(),(0,Ec.jsx)(t,{...n})};return a.displayName=`withAccessToken(${t.displayName||t.name})`,a}}da.withAccessToken=Cc;function Dc(){if(!ht||!Vt)throw new Error("getAccessToken must be used when authenticated (eg. used inside `withAccessToken`)");return{token:ht,type:Vt}}da.getAccessToken=Dc;function Hn(e){let t="pending",a,n=e.then(o=>{t="success",a=o},o=>{t="error",a=o});return{read:()=>{switch(t){case"pending":throw n;case"error":throw a;default:return a}}}}});var Ni=O(Ct=>{"use strict";var xc=Ct&&Ct.__createBinding||(Object.create?(function(e,t,a,n){n===void 0&&(n=a);var r=Object.getOwnPropertyDescriptor(t,a);(!r||("get"in r?!t.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,r)}):(function(e,t,a,n){n===void 0&&(n=a),e[n]=t[a]})),qi=Ct&&Ct.__exportStar||function(e,t){for(var a in e)a!=="default"&&!Object.prototype.hasOwnProperty.call(t,a)&&xc(t,e,a)};Object.defineProperty(Ct,"__esModule",{value:!0});qi(Fn(),Ct);qi(Bi(),Ct)});var zi=O(Le=>{"use strict";var Vi=Le&&Le.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Le,"__esModule",{value:!0});Le.createDeeplink=Le.createExtensionDeeplink=Le.createScriptCommandDeeplink=Le.DeeplinkType=void 0;var Gn=require("@raycast/api"),vc=Vi(require("node:fs")),Uc=Vi(require("node:path")),$n;(function(e){e.ScriptCommand="script-command",e.Extension="extension"})($n||(Le.DeeplinkType=$n={}));function Fi(){return Gn.environment.raycastVersion.includes("alpha")?"raycastinternal://":"raycast://"}function _c(){let e=JSON.parse(vc.default.readFileSync(Uc.default.join(Gn.environment.assetsPath,"..","package.json"),"utf8"));return e.owner||e.author}function ki(e){let t=`${Fi()}script-commands/${e.command}`;if(e.arguments){let a="";for(let n of e.arguments)a+="&arguments="+encodeURIComponent(n);t+="?"+a.substring(1)}return t}Le.createScriptCommandDeeplink=ki;function ji(e){let t=_c(),a=Gn.environment.extensionName;"ownerOrAuthorName"in e&&"extensionName"in e&&(t=e.ownerOrAuthorName,a=e.extensionName);let n=`${Fi()}extensions/${t}/${a}/${e.command}`,r="";return e.launchType&&(r+="&launchType="+encodeURIComponent(e.launchType)),e.arguments&&(r+="&arguments="+encodeURIComponent(JSON.stringify(e.arguments))),e.context&&(r+="&context="+encodeURIComponent(JSON.stringify(e.context))),e.fallbackText&&(r+="&fallbackText="+encodeURIComponent(e.fallbackText)),r&&(n+="?"+r.substring(1)),n}Le.createExtensionDeeplink=ji;function wc(e){return e.type===$n.ScriptCommand?ki(e):ji(e)}Le.createDeeplink=wc});var Hi=O(wr=>{"use strict";Object.defineProperty(wr,"__esModule",{value:!0});wr.executeSQL=void 0;var Tc=wn();function Oc(e,t){return(0,Tc.baseExecuteSQL)(e,t)}wr.executeSQL=Oc});var $i=O(Sa=>{"use strict";var Lc=Sa&&Sa.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Sa,"__esModule",{value:!0});Sa.runAppleScript=void 0;var Bc=Lc(require("node:child_process")),Na=Ir();async function qc(e,t,a){let{humanReadableOutput:n,language:r,timeout:o,...u}=Array.isArray(t)?a||{}:t||{},s=n!==!1?[]:["-ss"];r==="JavaScript"&&s.push("-l","JavaScript"),Array.isArray(t)&&s.push("-",...t);let i=Bc.default.spawn("osascript",s,{...u,env:{PATH:"/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"}}),p=(0,Na.getSpawnedPromise)(i,{timeout:o??1e4});i.stdin.end(e);let[{error:l,exitCode:c,signal:S,timedOut:g},y,M]=await(0,Na.getSpawnedResult)(i,{encoding:"utf8"},p),m=(0,Na.handleOutput)({stripFinalNewline:!0},y),b=(0,Na.handleOutput)({stripFinalNewline:!0},M);return(0,Na.defaultParsing)({stdout:m,stderr:b,error:l,exitCode:c,signal:S,timedOut:g,command:"osascript",options:a,parentError:new Error})}Sa.runAppleScript=qc});var Gi=O(Or=>{"use strict";Object.defineProperty(Or,"__esModule",{value:!0});Or.withCache=void 0;var Nc=require("@raycast/api"),Tr=Rt();function Vc(e,t){let a=new Nc.Cache({namespace:(0,Tr.hash)(e)}),n=async(...r)=>{let o=(0,Tr.hash)(r||[])+t?.internal_cacheKeySuffix,u=a.get(o);if(u){let{data:i,timestamp:p}=JSON.parse(u,Tr.reviver);if(!(t?.maxAge&&Date.now()-p>t.maxAge)&&(!t?.validate||t.validate(i)))return i}let s=await e(...r);return a.set(o,JSON.stringify({data:s,timestamp:Date.now()},Tr.replacer)),s};return n.clearCache=()=>{a.clear()},n}Or.withCache=Vc});var $=O(j=>{"use strict";var Fc=j&&j.__createBinding||(Object.create?(function(e,t,a,n){n===void 0&&(n=a);var r=Object.getOwnPropertyDescriptor(t,a);(!r||("get"in r?!t.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,r)}):(function(e,t,a,n){n===void 0&&(n=a),e[n]=t[a]})),X=j&&j.__exportStar||function(e,t){for(var a in e)a!=="default"&&!Object.prototype.hasOwnProperty.call(t,a)&&Fc(t,e,a)};Object.defineProperty(j,"__esModule",{value:!0});X(Xt(),j);X(lr(),j);X(Da(),j);X(Yo(),j);X(ti(),j);X(oi(),j);X(pi(),j);X(ci(),j);X(di(),j);X(gi(),j);X(Mi(),j);X(Ti(),j);X(Ni(),j);X(zi(),j);X(Hi(),j);X($i(),j);X(Ea(),j);X(Gi(),j)});var Ie={};Jt(Ie,{default:()=>ns.default});var ns,kr=bn(()=>{ge(Ie,require("formdata-polyfill/esm.min.js"));ns=_(require("formdata-polyfill/esm.min.js"))});var Ce={};Jt(Ce,{default:()=>us.default});var us,Yn=bn(()=>{ge(Ce,require("fetch-blob/from.js"));us=_(require("fetch-blob/from.js"))});var ls={};Jt(ls,{toFormData:()=>sy});function iy(e){let t=e.match(/\bfilename=("(.*?)"|([^()<>@,;:\\"/[\]?={}\s\t]+))($|;\s)/i);if(!t)return;let a=t[2]||t[3]||"",n=a.slice(a.lastIndexOf("\\")+1);return n=n.replace(/%22/g,'"'),n=n.replace(/&#(\d{4});/g,(r,o)=>String.fromCharCode(o)),n}async function sy(e,t){if(!/multipart/i.test(t))throw new TypeError("Failed to fetch");let a=t.match(/boundary=(?:"([^"]+)"|([^;]+))/i);if(!a)throw new TypeError("no or bad content-type header, no multipart boundary");let n=new Jn(a[1]||a[2]),r,o,u,s,i,p,l=[],c=new Ie.FormData,S=b=>{u+=m.decode(b,{stream:!0})},g=b=>{l.push(b)},y=()=>{let b=new Ce.File(l,p,{type:i});c.append(s,b)},M=()=>{c.append(s,u)},m=new TextDecoder("utf-8");m.decode(),n.onPartBegin=function(){n.onPartData=S,n.onPartEnd=M,r="",o="",u="",s="",i="",p=null,l.length=0},n.onHeaderField=function(b){r+=m.decode(b,{stream:!0})},n.onHeaderValue=function(b){o+=m.decode(b,{stream:!0})},n.onHeaderEnd=function(){if(o+=m.decode(),r=r.toLowerCase(),r==="content-disposition"){let b=o.match(/\bname=("([^"]*)"|([^()<>@,;:\\"/[\]?={}\s\t]+))/i);b&&(s=b[2]||b[3]||""),p=iy(o),p&&(n.onPartData=g,n.onPartEnd=y)}else r==="content-type"&&(i=o);o="",r=""};for await(let b of e)n.write(b);return n.end(),c}var Xe,V,ps,vt,zr,Hr,ty,ja,ay,ry,ny,oy,jt,Jn,cs=bn(()=>{Yn();kr();Xe=0,V={START_BOUNDARY:Xe++,HEADER_FIELD_START:Xe++,HEADER_FIELD:Xe++,HEADER_VALUE_START:Xe++,HEADER_VALUE:Xe++,HEADER_VALUE_ALMOST_DONE:Xe++,HEADERS_ALMOST_DONE:Xe++,PART_DATA_START:Xe++,PART_DATA:Xe++,END:Xe++},ps=1,vt={PART_BOUNDARY:ps,LAST_BOUNDARY:ps*=2},zr=10,Hr=13,ty=32,ja=45,ay=58,ry=97,ny=122,oy=e=>e|32,jt=()=>{},Jn=class{constructor(t){this.index=0,this.flags=0,this.onHeaderEnd=jt,this.onHeaderField=jt,this.onHeadersEnd=jt,this.onHeaderValue=jt,this.onPartBegin=jt,this.onPartData=jt,this.onPartEnd=jt,this.boundaryChars={},t=`\r
--`+t;let a=new Uint8Array(t.length);for(let n=0;n<t.length;n++)a[n]=t.charCodeAt(n),this.boundaryChars[a[n]]=!0;this.boundary=a,this.lookbehind=new Uint8Array(this.boundary.length+8),this.state=V.START_BOUNDARY}write(t){let a=0,n=t.length,r=this.index,{lookbehind:o,boundary:u,boundaryChars:s,index:i,state:p,flags:l}=this,c=this.boundary.length,S=c-1,g=t.length,y,M,m=f=>{this[f+"Mark"]=a},b=f=>{delete this[f+"Mark"]},R=(f,E,D,q)=>{(E===void 0||E!==D)&&this[f](q&&q.subarray(E,D))},A=(f,E)=>{let D=f+"Mark";D in this&&(E?(R(f,this[D],a,t),delete this[D]):(R(f,this[D],t.length,t),this[D]=0))};for(a=0;a<n;a++)switch(y=t[a],p){case V.START_BOUNDARY:if(i===u.length-2){if(y===ja)l|=vt.LAST_BOUNDARY;else if(y!==Hr)return;i++;break}else if(i-1===u.length-2){if(l&vt.LAST_BOUNDARY&&y===ja)p=V.END,l=0;else if(!(l&vt.LAST_BOUNDARY)&&y===zr)i=0,R("onPartBegin"),p=V.HEADER_FIELD_START;else return;break}y!==u[i+2]&&(i=-2),y===u[i+2]&&i++;break;case V.HEADER_FIELD_START:p=V.HEADER_FIELD,m("onHeaderField"),i=0;case V.HEADER_FIELD:if(y===Hr){b("onHeaderField"),p=V.HEADERS_ALMOST_DONE;break}if(i++,y===ja)break;if(y===ay){if(i===1)return;A("onHeaderField",!0),p=V.HEADER_VALUE_START;break}if(M=oy(y),M<ry||M>ny)return;break;case V.HEADER_VALUE_START:if(y===ty)break;m("onHeaderValue"),p=V.HEADER_VALUE;case V.HEADER_VALUE:y===Hr&&(A("onHeaderValue",!0),R("onHeaderEnd"),p=V.HEADER_VALUE_ALMOST_DONE);break;case V.HEADER_VALUE_ALMOST_DONE:if(y!==zr)return;p=V.HEADER_FIELD_START;break;case V.HEADERS_ALMOST_DONE:if(y!==zr)return;R("onHeadersEnd"),p=V.PART_DATA_START;break;case V.PART_DATA_START:p=V.PART_DATA,m("onPartData");case V.PART_DATA:if(r=i,i===0){for(a+=S;a<g&&!(t[a]in s);)a+=c;a-=S,y=t[a]}if(i<u.length)u[i]===y?(i===0&&A("onPartData",!0),i++):i=0;else if(i===u.length)i++,y===Hr?l|=vt.PART_BOUNDARY:y===ja?l|=vt.LAST_BOUNDARY:i=0;else if(i-1===u.length)if(l&vt.PART_BOUNDARY){if(i=0,y===zr){l&=~vt.PART_BOUNDARY,R("onPartEnd"),R("onPartBegin"),p=V.HEADER_FIELD_START;break}}else l&vt.LAST_BOUNDARY&&y===ja?(R("onPartEnd"),p=V.END,l=0):i=0;if(i>0)o[i-1]=y;else if(r>0){let f=new Uint8Array(o.buffer,o.byteOffset,o.byteLength);R("onPartData",0,r,f),r=0,m("onPartData"),a--}break;case V.END:break;default:throw new Error(`Unexpected state entered: ${p}`)}A("onHeaderField"),A("onHeaderValue"),A("onPartData"),this.index=i,this.state=p,this.flags=l}end(){if(this.state===V.HEADER_FIELD_START&&this.index===0||this.state===V.PART_DATA&&this.index===this.boundary.length)this.onPartEnd();else if(this.state!==V.END)throw new Error("MultipartParser.end(): stream ended unexpectedly")}}});var yS={};Jt(yS,{default:()=>cS});module.exports=rp(yS);var dn=require("@raycast/api"),Sn=_($()),Tt=require("react");var Ls=require("@octokit/rest"),Bs=require("@raycast/api"),qs=_($());var Lr=JSON;var Qi=e=>e.toUpperCase(),Wi=e=>{let t={};return e.forEach((a,n)=>{t[n]=a}),t};var Ki=(e,t,a)=>e.document?e:{document:e,variables:t,requestHeaders:a,signal:void 0},Yi=(e,t,a)=>e.query?e:{query:e,variables:t,requestHeaders:a,signal:void 0},Ji=(e,t)=>e.documents?e:{documents:e,requestHeaders:t,signal:void 0};var Br=require("graphql"),Zi=e=>{let t,a=e.definitions.filter(n=>n.kind==="OperationDefinition");return a.length===1&&(t=a[0]?.name?.value),t},Ft=e=>{if(typeof e=="string"){let a;try{let n=(0,Br.parse)(e);a=Zi(n)}catch{}return{query:e,operationName:a}}let t=Zi(e);return{query:(0,Br.print)(e),operationName:t}};var kt=class e extends Error{constructor(t,a){let n=`${e.extractMessage(t)}: ${JSON.stringify({response:t,request:a})}`;super(n),Object.setPrototypeOf(this,e.prototype),this.response=t,this.request=a,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,e)}static extractMessage(t){return t.errors?.[0]?.message??`GraphQL Error (Code: ${t.status})`}};var xt=_(Ta(),1);var kc="connection_init",jc="connection_ack",es="ping",ts="pong",zc="subscribe",Hc="next",$c="error",as="complete",Dt=class e{get type(){return this._type}get id(){return this._id}get payload(){return this._payload}constructor(t,a,n){this._type=t,this._payload=a,this._id=n}get text(){let t={type:this.type};return this.id!=null&&this.id!=null&&(t.id=this.id),this.payload!=null&&this.payload!=null&&(t.payload=this.payload),JSON.stringify(t)}static parse(t,a){let{type:n,payload:r,id:o}=JSON.parse(t);return new e(n,a(r),o)}},qr=class{constructor(t,{onInit:a,onAcknowledged:n,onPing:r,onPong:o}){this.socketState={acknowledged:!1,lastRequestId:0,subscriptions:{}},this.socket=t,t.addEventListener("open",async u=>{this.socketState.acknowledged=!1,this.socketState.subscriptions={},t.send(Qc(a?await a():null).text)}),t.addEventListener("close",u=>{this.socketState.acknowledged=!1,this.socketState.subscriptions={}}),t.addEventListener("error",u=>{console.error(u)}),t.addEventListener("message",u=>{try{let s=Gc(u.data);switch(s.type){case jc:{this.socketState.acknowledged?console.warn("Duplicate CONNECTION_ACK message ignored"):(this.socketState.acknowledged=!0,n&&n(s.payload));return}case es:{r?r(s.payload).then(c=>t.send(Xi(c).text)):t.send(Xi(null).text);return}case ts:{o&&o(s.payload);return}}if(!this.socketState.acknowledged||s.id===void 0||s.id===null||!this.socketState.subscriptions[s.id])return;let{query:i,variables:p,subscriber:l}=this.socketState.subscriptions[s.id];switch(s.type){case Hc:{!s.payload.errors&&s.payload.data&&l.next&&l.next(s.payload.data),s.payload.errors&&l.error&&l.error(new kt({...s.payload,status:200},{query:i,variables:p}));return}case $c:{l.error&&l.error(new kt({errors:s.payload,status:200},{query:i,variables:p}));return}case as:{l.complete&&l.complete(),delete this.socketState.subscriptions[s.id];return}}}catch(s){console.error(s),t.close(1006)}t.close(4400,"Unknown graphql-ws message.")})}makeSubscribe(t,a,n,r){let o=(this.socketState.lastRequestId++).toString();return this.socketState.subscriptions[o]={query:t,variables:r,subscriber:n},this.socket.send(Kc(o,{query:t,operationName:a,variables:r}).text),()=>{this.socket.send(Yc(o).text),delete this.socketState.subscriptions[o]}}rawRequest(t,a){return new Promise((n,r)=>{let o;this.rawSubscribe(t,{next:(u,s)=>o={data:u,extensions:s},error:r,complete:()=>n(o)},a)})}request(t,a){return new Promise((n,r)=>{let o;this.subscribe(t,{next:u=>o=u,error:r,complete:()=>n(o)},a)})}subscribe(t,a,n){let{query:r,operationName:o}=Ft(t);return this.makeSubscribe(r,o,a,n)}rawSubscribe(t,a,n){return this.makeSubscribe(t,void 0,a,n)}ping(t){this.socket.send(Wc(t).text)}close(){this.socket.close(1e3)}};qr.PROTOCOL="graphql-transport-ws";function Gc(e,t=a=>a){return Dt.parse(e,t)}function Qc(e){return new Dt(kc,e)}function Wc(e){return new Dt(es,e,void 0)}function Xi(e){return new Dt(ts,e,void 0)}function Kc(e,t){return new Dt(zc,t,e)}function Yc(e){return new Dt(as,void 0,e)}var ba=e=>{let t={};return e&&(typeof Headers<"u"&&e instanceof Headers||xt&&xt.Headers&&e instanceof xt.Headers?t=Wi(e):Array.isArray(e)?e.forEach(([a,n])=>{a&&n!==void 0&&(t[a]=n)}):t=e),t},rs=e=>e.replace(/([\s,]|#[^\n\r]+)+/g," ").trim(),Jc=e=>{if(!Array.isArray(e.query)){let n=e,r=[`query=${encodeURIComponent(rs(n.query))}`];return e.variables&&r.push(`variables=${encodeURIComponent(n.jsonSerializer.stringify(n.variables))}`),n.operationName&&r.push(`operationName=${encodeURIComponent(n.operationName)}`),r.join("&")}if(typeof e.variables<"u"&&!Array.isArray(e.variables))throw new Error("Cannot create query with given variable type, array expected");let t=e,a=e.query.reduce((n,r,o)=>(n.push({query:rs(r),variables:t.variables?t.jsonSerializer.stringify(t.variables[o]):void 0}),n),[]);return`query=${encodeURIComponent(t.jsonSerializer.stringify(a))}`},Zc=e=>async t=>{let{url:a,query:n,variables:r,operationName:o,fetch:u,fetchOptions:s,middleware:i}=t,p={...t.headers},l="",c;e==="POST"?(c=Xc(n,r,o,s.jsonSerializer),typeof c=="string"&&(p["Content-Type"]="application/json")):l=Jc({query:n,variables:r,operationName:o,jsonSerializer:s.jsonSerializer??Lr});let S={method:e,headers:p,body:c,...s},g=a,y=S;if(i){let M=await Promise.resolve(i({...S,url:a,operationName:o,variables:r})),{url:m,...b}=M;g=m,y=b}return l&&(g=`${g}?${l}`),await u(g,y)},Nr=class{constructor(t,a={}){this.url=t,this.requestConfig=a,this.rawRequest=async(...n)=>{let[r,o,u]=n,s=Yi(r,o,u),{headers:i,fetch:p=xt.default,method:l="POST",requestMiddleware:c,responseMiddleware:S,...g}=this.requestConfig,{url:y}=this;s.signal!==void 0&&(g.signal=s.signal);let{operationName:M}=Ft(s.query);return Qn({url:y,query:s.query,variables:s.variables,headers:{...ba(Wn(i)),...ba(s.requestHeaders)},operationName:M,fetch:p,method:l,fetchOptions:g,middleware:c}).then(m=>(S&&S(m),m)).catch(m=>{throw S&&S(m),m})}}async request(t,...a){let[n,r]=a,o=Ki(t,n,r),{headers:u,fetch:s=xt.default,method:i="POST",requestMiddleware:p,responseMiddleware:l,...c}=this.requestConfig,{url:S}=this;o.signal!==void 0&&(c.signal=o.signal);let{query:g,operationName:y}=Ft(o.document);return Qn({url:S,query:g,variables:o.variables,headers:{...ba(Wn(u)),...ba(o.requestHeaders)},operationName:y,fetch:s,method:i,fetchOptions:c,middleware:p}).then(M=>(l&&l(M),M.data)).catch(M=>{throw l&&l(M),M})}batchRequests(t,a){let n=Ji(t,a),{headers:r,...o}=this.requestConfig;n.signal!==void 0&&(o.signal=n.signal);let u=n.documents.map(({document:i})=>Ft(i).query),s=n.documents.map(({variables:i})=>i);return Qn({url:this.url,query:u,variables:s,headers:{...ba(Wn(r)),...ba(n.requestHeaders)},operationName:void 0,fetch:this.requestConfig.fetch??xt.default,method:this.requestConfig.method||"POST",fetchOptions:o,middleware:this.requestConfig.requestMiddleware}).then(i=>(this.requestConfig.responseMiddleware&&this.requestConfig.responseMiddleware(i),i.data)).catch(i=>{throw this.requestConfig.responseMiddleware&&this.requestConfig.responseMiddleware(i),i})}setHeaders(t){return this.requestConfig.headers=t,this}setHeader(t,a){let{headers:n}=this.requestConfig;return n?n[t]=a:this.requestConfig.headers={[t]:a},this}setEndpoint(t){return this.url=t,this}},Qn=async e=>{let{query:t,variables:a,fetchOptions:n}=e,r=Zc(Qi(e.method??"post")),o=Array.isArray(e.query),u=await r(e),s=await ey(u,n.jsonSerializer??Lr),i=Array.isArray(s)?!s.some(({data:l})=>!l):!!s.data,p=Array.isArray(s)||!s.errors||Array.isArray(s.errors)&&!s.errors.length||n.errorPolicy==="all"||n.errorPolicy==="ignore";if(u.ok&&p&&i){let{errors:l,...c}=(Array.isArray(s),s),S=n.errorPolicy==="ignore"?c:s;return{...o?{data:S}:S,headers:u.headers,status:u.status}}else{let l=typeof s=="string"?{error:s}:s;throw new kt({...l,status:u.status,headers:u.headers},{query:t,variables:a})}};var Xc=(e,t,a,n)=>{let r=n??Lr;if(!Array.isArray(e))return r.stringify({query:e,variables:t,operationName:a});if(typeof t<"u"&&!Array.isArray(t))throw new Error("Cannot create request body with given variable type, array expected");let o=e.reduce((u,s,i)=>(u.push({query:s,variables:t?t[i]:void 0}),u),[]);return r.stringify(o)},ey=async(e,t)=>{let a;return e.headers.forEach((n,r)=>{r.toLowerCase()==="content-type"&&(a=n)}),a&&(a.toLowerCase().startsWith("application/json")||a.toLowerCase().startsWith("application/graphql+json")||a.toLowerCase().startsWith("application/graphql-response+json"))?t.parse(await e.text()):e.text()},Wn=e=>typeof e=="function"?e():e;var Cs=_(require("node:http"),1),Ds=_(require("node:https"),1),Ht=_(require("node:zlib"),1),ve=_(require("node:stream"),1),$a=require("node:buffer");var Va={};Jt(Va,{default:()=>Vr.default});ge(Va,require("data-uri-to-buffer"));var Vr=_(require("data-uri-to-buffer"));var Be=_(require("node:stream"),1),bt=require("node:util"),De=require("node:buffer");var Fa={};Jt(Fa,{default:()=>Fr.default});ge(Fa,require("fetch-blob"));var Fr=_(require("fetch-blob"));kr();var St=class extends Error{constructor(t,a){super(t),Error.captureStackTrace(this,this.constructor),this.type=a}get name(){return this.constructor.name}get[Symbol.toStringTag](){return this.constructor.name}};var me=class extends St{constructor(t,a,n){super(t,a),n&&(this.code=this.errno=n.code,this.erroredSysCall=n.syscall)}};var jr=Symbol.toStringTag,Kn=e=>typeof e=="object"&&typeof e.append=="function"&&typeof e.delete=="function"&&typeof e.get=="function"&&typeof e.getAll=="function"&&typeof e.has=="function"&&typeof e.set=="function"&&typeof e.sort=="function"&&e[jr]==="URLSearchParams",ka=e=>e&&typeof e=="object"&&typeof e.arrayBuffer=="function"&&typeof e.type=="string"&&typeof e.stream=="function"&&typeof e.constructor=="function"&&/^(Blob|File)$/.test(e[jr]),os=e=>typeof e=="object"&&(e[jr]==="AbortSignal"||e[jr]==="EventTarget"),is=(e,t)=>{let a=new URL(t).hostname,n=new URL(e).hostname;return a===n||a.endsWith(`.${n}`)},ss=(e,t)=>{let a=new URL(t).protocol,n=new URL(e).protocol;return a===n};var uy=(0,bt.promisify)(Be.default.pipeline),Me=Symbol("Body internals"),et=class{constructor(t,{size:a=0}={}){let n=null;t===null?t=null:Kn(t)?t=De.Buffer.from(t.toString()):ka(t)||De.Buffer.isBuffer(t)||(bt.types.isAnyArrayBuffer(t)?t=De.Buffer.from(t):ArrayBuffer.isView(t)?t=De.Buffer.from(t.buffer,t.byteOffset,t.byteLength):t instanceof Be.default||(t instanceof Ie.FormData?(t=(0,Ie.formDataToBlob)(t),n=t.type.split("=")[1]):t=De.Buffer.from(String(t))));let r=t;De.Buffer.isBuffer(t)?r=Be.default.Readable.from(t):ka(t)&&(r=Be.default.Readable.from(t.stream())),this[Me]={body:t,stream:r,boundary:n,disturbed:!1,error:null},this.size=a,t instanceof Be.default&&t.on("error",o=>{let u=o instanceof St?o:new me(`Invalid response body while trying to fetch ${this.url}: ${o.message}`,"system",o);this[Me].error=u})}get body(){return this[Me].stream}get bodyUsed(){return this[Me].disturbed}async arrayBuffer(){let{buffer:t,byteOffset:a,byteLength:n}=await Zn(this);return t.slice(a,a+n)}async formData(){let t=this.headers.get("content-type");if(t.startsWith("application/x-www-form-urlencoded")){let n=new Ie.FormData,r=new URLSearchParams(await this.text());for(let[o,u]of r)n.append(o,u);return n}let{toFormData:a}=await Promise.resolve().then(()=>(cs(),ls));return a(this.body,t)}async blob(){let t=this.headers&&this.headers.get("content-type")||this[Me].body&&this[Me].body.type||"",a=await this.arrayBuffer();return new Fr.default([a],{type:t})}async json(){let t=await this.text();return JSON.parse(t)}async text(){let t=await Zn(this);return new TextDecoder().decode(t)}buffer(){return Zn(this)}};et.prototype.buffer=(0,bt.deprecate)(et.prototype.buffer,"Please use 'response.arrayBuffer()' instead of 'response.buffer()'","node-fetch#buffer");Object.defineProperties(et.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0},data:{get:(0,bt.deprecate)(()=>{},"data doesn't exist, use json(), text(), arrayBuffer(), or body instead","https://github.com/node-fetch/node-fetch/issues/1000 (response)")}});async function Zn(e){if(e[Me].disturbed)throw new TypeError(`body used already for: ${e.url}`);if(e[Me].disturbed=!0,e[Me].error)throw e[Me].error;let{body:t}=e;if(t===null)return De.Buffer.alloc(0);if(!(t instanceof Be.default))return De.Buffer.alloc(0);let a=[],n=0;try{for await(let r of t){if(e.size>0&&n+r.length>e.size){let o=new me(`content size at ${e.url} over limit: ${e.size}`,"max-size");throw t.destroy(o),o}n+=r.length,a.push(r)}}catch(r){throw r instanceof St?r:new me(`Invalid response body while trying to fetch ${e.url}: ${r.message}`,"system",r)}if(t.readableEnded===!0||t._readableState.ended===!0)try{return a.every(r=>typeof r=="string")?De.Buffer.from(a.join("")):De.Buffer.concat(a,n)}catch(r){throw new me(`Could not create Buffer from response body for ${e.url}: ${r.message}`,"system",r)}else throw new me(`Premature close of server response while trying to fetch ${e.url}`)}var ga=(e,t)=>{let a,n,{body:r}=e[Me];if(e.bodyUsed)throw new Error("cannot clone body after it is used");return r instanceof Be.default&&typeof r.getBoundary!="function"&&(a=new Be.PassThrough({highWaterMark:t}),n=new Be.PassThrough({highWaterMark:t}),r.pipe(a),r.pipe(n),e[Me].stream=a,r=n),r},py=(0,bt.deprecate)(e=>e.getBoundary(),"form-data doesn't follow the spec and requires special treatment. Use alternative package","https://github.com/node-fetch/node-fetch/issues/1167"),$r=(e,t)=>e===null?null:typeof e=="string"?"text/plain;charset=UTF-8":Kn(e)?"application/x-www-form-urlencoded;charset=UTF-8":ka(e)?e.type||null:De.Buffer.isBuffer(e)||bt.types.isAnyArrayBuffer(e)||ArrayBuffer.isView(e)?null:e instanceof Ie.FormData?`multipart/form-data; boundary=${t[Me].boundary}`:e&&typeof e.getBoundary=="function"?`multipart/form-data;boundary=${py(e)}`:e instanceof Be.default?null:"text/plain;charset=UTF-8",ys=e=>{let{body:t}=e[Me];return t===null?0:ka(t)?t.size:De.Buffer.isBuffer(t)?t.length:t&&typeof t.getLengthSync=="function"&&t.hasKnownLength&&t.hasKnownLength()?t.getLengthSync():null},ds=async(e,{body:t})=>{t===null?e.end():await uy(t,e)};var Xn=require("node:util"),za=_(require("node:http"),1),Gr=typeof za.default.validateHeaderName=="function"?za.default.validateHeaderName:e=>{if(!/^[\^`\-\w!#$%&'*+.|~]+$/.test(e)){let t=new TypeError(`Header name must be a valid HTTP token [${e}]`);throw Object.defineProperty(t,"code",{value:"ERR_INVALID_HTTP_TOKEN"}),t}},eo=typeof za.default.validateHeaderValue=="function"?za.default.validateHeaderValue:(e,t)=>{if(/[^\t\u0020-\u007E\u0080-\u00FF]/.test(t)){let a=new TypeError(`Invalid character in header content ["${e}"]`);throw Object.defineProperty(a,"code",{value:"ERR_INVALID_CHAR"}),a}},xe=class e extends URLSearchParams{constructor(t){let a=[];if(t instanceof e){let n=t.raw();for(let[r,o]of Object.entries(n))a.push(...o.map(u=>[r,u]))}else if(t!=null)if(typeof t=="object"&&!Xn.types.isBoxedPrimitive(t)){let n=t[Symbol.iterator];if(n==null)a.push(...Object.entries(t));else{if(typeof n!="function")throw new TypeError("Header pairs must be iterable");a=[...t].map(r=>{if(typeof r!="object"||Xn.types.isBoxedPrimitive(r))throw new TypeError("Each header pair must be an iterable object");return[...r]}).map(r=>{if(r.length!==2)throw new TypeError("Each header pair must be a name/value tuple");return[...r]})}}else throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");return a=a.length>0?a.map(([n,r])=>(Gr(n),eo(n,String(r)),[String(n).toLowerCase(),String(r)])):void 0,super(a),new Proxy(this,{get(n,r,o){switch(r){case"append":case"set":return(u,s)=>(Gr(u),eo(u,String(s)),URLSearchParams.prototype[r].call(n,String(u).toLowerCase(),String(s)));case"delete":case"has":case"getAll":return u=>(Gr(u),URLSearchParams.prototype[r].call(n,String(u).toLowerCase()));case"keys":return()=>(n.sort(),new Set(URLSearchParams.prototype.keys.call(n)).keys());default:return Reflect.get(n,r,o)}}})}get[Symbol.toStringTag](){return this.constructor.name}toString(){return Object.prototype.toString.call(this)}get(t){let a=this.getAll(t);if(a.length===0)return null;let n=a.join(", ");return/^content-encoding$/i.test(t)&&(n=n.toLowerCase()),n}forEach(t,a=void 0){for(let n of this.keys())Reflect.apply(t,a,[this.get(n),n,this])}*values(){for(let t of this.keys())yield this.get(t)}*entries(){for(let t of this.keys())yield[t,this.get(t)]}[Symbol.iterator](){return this.entries()}raw(){return[...this.keys()].reduce((t,a)=>(t[a]=this.getAll(a),t),{})}[Symbol.for("nodejs.util.inspect.custom")](){return[...this.keys()].reduce((t,a)=>{let n=this.getAll(a);return a==="host"?t[a]=n[0]:t[a]=n.length>1?n:n[0],t},{})}};Object.defineProperties(xe.prototype,["get","entries","forEach","values"].reduce((e,t)=>(e[t]={enumerable:!0},e),{}));function Ss(e=[]){return new xe(e.reduce((t,a,n,r)=>(n%2===0&&t.push(r.slice(n,n+2)),t),[]).filter(([t,a])=>{try{return Gr(t),eo(t,String(a)),!0}catch{return!1}}))}var ly=new Set([301,302,303,307,308]),Qr=e=>ly.has(e);var $e=Symbol("Response internals"),qe=class e extends et{constructor(t=null,a={}){super(t,a);let n=a.status!=null?a.status:200,r=new xe(a.headers);if(t!==null&&!r.has("Content-Type")){let o=$r(t,this);o&&r.append("Content-Type",o)}this[$e]={type:"default",url:a.url,status:n,statusText:a.statusText||"",headers:r,counter:a.counter,highWaterMark:a.highWaterMark}}get type(){return this[$e].type}get url(){return this[$e].url||""}get status(){return this[$e].status}get ok(){return this[$e].status>=200&&this[$e].status<300}get redirected(){return this[$e].counter>0}get statusText(){return this[$e].statusText}get headers(){return this[$e].headers}get highWaterMark(){return this[$e].highWaterMark}clone(){return new e(ga(this,this.highWaterMark),{type:this.type,url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected,size:this.size,highWaterMark:this.highWaterMark})}static redirect(t,a=302){if(!Qr(a))throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');return new e(null,{headers:{location:new URL(t).toString()},status:a})}static error(){let t=new e(null,{status:0,statusText:""});return t[$e].type="error",t}static json(t=void 0,a={}){let n=JSON.stringify(t);if(n===void 0)throw new TypeError("data is not JSON serializable");let r=new xe(a&&a.headers);return r.has("content-type")||r.set("content-type","application/json"),new e(n,{...a,headers:r})}get[Symbol.toStringTag](){return"Response"}};Object.defineProperties(qe.prototype,{type:{enumerable:!0},url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}});var Ps=require("node:url"),Es=require("node:util");var bs=e=>{if(e.search)return e.search;let t=e.href.length-1,a=e.hash||(e.href[t]==="#"?"#":"");return e.href[t-a.length]==="?"?"?":""};var Is=require("node:net");function gs(e,t=!1){return e==null||(e=new URL(e),/^(about|blob|data):$/.test(e.protocol))?"no-referrer":(e.username="",e.password="",e.hash="",t&&(e.pathname="",e.search=""),e)}var ms=new Set(["","no-referrer","no-referrer-when-downgrade","same-origin","origin","strict-origin","origin-when-cross-origin","strict-origin-when-cross-origin","unsafe-url"]),Ms="strict-origin-when-cross-origin";function Rs(e){if(!ms.has(e))throw new TypeError(`Invalid referrerPolicy: ${e}`);return e}function cy(e){if(/^(http|ws)s:$/.test(e.protocol))return!0;let t=e.host.replace(/(^\[)|(]$)/g,""),a=(0,Is.isIP)(t);return a===4&&/^127\./.test(t)||a===6&&/^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(t)?!0:e.host==="localhost"||e.host.endsWith(".localhost")?!1:e.protocol==="file:"}function Ia(e){return/^about:(blank|srcdoc)$/.test(e)||e.protocol==="data:"||/^(blob|filesystem):$/.test(e.protocol)?!0:cy(e)}function fs(e,{referrerURLCallback:t,referrerOriginCallback:a}={}){if(e.referrer==="no-referrer"||e.referrerPolicy==="")return null;let n=e.referrerPolicy;if(e.referrer==="about:client")return"no-referrer";let r=e.referrer,o=gs(r),u=gs(r,!0);o.toString().length>4096&&(o=u),t&&(o=t(o)),a&&(u=a(u));let s=new URL(e.url);switch(n){case"no-referrer":return"no-referrer";case"origin":return u;case"unsafe-url":return o;case"strict-origin":return Ia(o)&&!Ia(s)?"no-referrer":u.toString();case"strict-origin-when-cross-origin":return o.origin===s.origin?o:Ia(o)&&!Ia(s)?"no-referrer":u;case"same-origin":return o.origin===s.origin?o:"no-referrer";case"origin-when-cross-origin":return o.origin===s.origin?o:u;case"no-referrer-when-downgrade":return Ia(o)&&!Ia(s)?"no-referrer":o;default:throw new TypeError(`Invalid referrerPolicy: ${n}`)}}function As(e){let t=(e.get("referrer-policy")||"").split(/[,\s]+/),a="";for(let n of t)n&&ms.has(n)&&(a=n);return a}var ee=Symbol("Request internals"),Ha=e=>typeof e=="object"&&typeof e[ee]=="object",yy=(0,Es.deprecate)(()=>{},".data is not a valid RequestInit property, use .body instead","https://github.com/node-fetch/node-fetch/issues/1000 (request)"),zt=class e extends et{constructor(t,a={}){let n;if(Ha(t)?n=new URL(t.url):(n=new URL(t),t={}),n.username!==""||n.password!=="")throw new TypeError(`${n} is an url with embedded credentials.`);let r=a.method||t.method||"GET";if(/^(delete|get|head|options|post|put)$/i.test(r)&&(r=r.toUpperCase()),!Ha(a)&&"data"in a&&yy(),(a.body!=null||Ha(t)&&t.body!==null)&&(r==="GET"||r==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");let o=a.body?a.body:Ha(t)&&t.body!==null?ga(t):null;super(o,{size:a.size||t.size||0});let u=new xe(a.headers||t.headers||{});if(o!==null&&!u.has("Content-Type")){let p=$r(o,this);p&&u.set("Content-Type",p)}let s=Ha(t)?t.signal:null;if("signal"in a&&(s=a.signal),s!=null&&!os(s))throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");let i=a.referrer==null?t.referrer:a.referrer;if(i==="")i="no-referrer";else if(i){let p=new URL(i);i=/^about:(\/\/)?client$/.test(p)?"client":p}else i=void 0;this[ee]={method:r,redirect:a.redirect||t.redirect||"follow",headers:u,parsedURL:n,signal:s,referrer:i},this.follow=a.follow===void 0?t.follow===void 0?20:t.follow:a.follow,this.compress=a.compress===void 0?t.compress===void 0?!0:t.compress:a.compress,this.counter=a.counter||t.counter||0,this.agent=a.agent||t.agent,this.highWaterMark=a.highWaterMark||t.highWaterMark||16384,this.insecureHTTPParser=a.insecureHTTPParser||t.insecureHTTPParser||!1,this.referrerPolicy=a.referrerPolicy||t.referrerPolicy||""}get method(){return this[ee].method}get url(){return(0,Ps.format)(this[ee].parsedURL)}get headers(){return this[ee].headers}get redirect(){return this[ee].redirect}get signal(){return this[ee].signal}get referrer(){if(this[ee].referrer==="no-referrer")return"";if(this[ee].referrer==="client")return"about:client";if(this[ee].referrer)return this[ee].referrer.toString()}get referrerPolicy(){return this[ee].referrerPolicy}set referrerPolicy(t){this[ee].referrerPolicy=Rs(t)}clone(){return new e(this)}get[Symbol.toStringTag](){return"Request"}};Object.defineProperties(zt.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0},referrer:{enumerable:!0},referrerPolicy:{enumerable:!0}});var hs=e=>{let{parsedURL:t}=e[ee],a=new xe(e[ee].headers);a.has("Accept")||a.set("Accept","*/*");let n=null;if(e.body===null&&/^(post|put)$/i.test(e.method)&&(n="0"),e.body!==null){let s=ys(e);typeof s=="number"&&!Number.isNaN(s)&&(n=String(s))}n&&a.set("Content-Length",n),e.referrerPolicy===""&&(e.referrerPolicy=Ms),e.referrer&&e.referrer!=="no-referrer"?e[ee].referrer=fs(e):e[ee].referrer="no-referrer",e[ee].referrer instanceof URL&&a.set("Referer",e.referrer),a.has("User-Agent")||a.set("User-Agent","node-fetch"),e.compress&&!a.has("Accept-Encoding")&&a.set("Accept-Encoding","gzip, deflate, br");let{agent:r}=e;typeof r=="function"&&(r=r(t));let o=bs(t),u={path:t.pathname+o,method:e.method,headers:a[Symbol.for("nodejs.util.inspect.custom")](),insecureHTTPParser:e.insecureHTTPParser,agent:r};return{parsedURL:t,options:u}};var Wr=class extends St{constructor(t,a="aborted"){super(t,a)}};kr();Yn();var dy=new Set(["data:","http:","https:"]);async function Kr(e,t){return new Promise((a,n)=>{let r=new zt(e,t),{parsedURL:o,options:u}=hs(r);if(!dy.has(o.protocol))throw new TypeError(`node-fetch cannot load ${e}. URL scheme "${o.protocol.replace(/:$/,"")}" is not supported.`);if(o.protocol==="data:"){let y=(0,Vr.default)(r.url),M=new qe(y,{headers:{"Content-Type":y.typeFull}});a(M);return}let s=(o.protocol==="https:"?Ds.default:Cs.default).request,{signal:i}=r,p=null,l=()=>{let y=new Wr("The operation was aborted.");n(y),r.body&&r.body instanceof ve.default.Readable&&r.body.destroy(y),!(!p||!p.body)&&p.body.emit("error",y)};if(i&&i.aborted){l();return}let c=()=>{l(),g()},S=s(o.toString(),u);i&&i.addEventListener("abort",c);let g=()=>{S.abort(),i&&i.removeEventListener("abort",c)};S.on("error",y=>{n(new me(`request to ${r.url} failed, reason: ${y.message}`,"system",y)),g()}),Sy(S,y=>{p&&p.body&&p.body.destroy(y)}),process.version<"v14"&&S.on("socket",y=>{let M;y.prependListener("end",()=>{M=y._eventsCount}),y.prependListener("close",m=>{if(p&&M<y._eventsCount&&!m){let b=new Error("Premature close");b.code="ERR_STREAM_PREMATURE_CLOSE",p.body.emit("error",b)}})}),S.on("response",y=>{S.setTimeout(0);let M=Ss(y.rawHeaders);if(Qr(y.statusCode)){let f=M.get("Location"),E=null;try{E=f===null?null:new URL(f,r.url)}catch{if(r.redirect!=="manual"){n(new me(`uri requested responds with an invalid redirect URL: ${f}`,"invalid-redirect")),g();return}}switch(r.redirect){case"error":n(new me(`uri requested responds with a redirect, redirect mode is set to error: ${r.url}`,"no-redirect")),g();return;case"manual":break;case"follow":{if(E===null)break;if(r.counter>=r.follow){n(new me(`maximum redirect reached at: ${r.url}`,"max-redirect")),g();return}let D={headers:new xe(r.headers),follow:r.follow,counter:r.counter+1,agent:r.agent,compress:r.compress,method:r.method,body:ga(r),signal:r.signal,size:r.size,referrer:r.referrer,referrerPolicy:r.referrerPolicy};if(!is(r.url,E)||!ss(r.url,E))for(let Y of["authorization","www-authenticate","cookie","cookie2"])D.headers.delete(Y);if(y.statusCode!==303&&r.body&&t.body instanceof ve.default.Readable){n(new me("Cannot follow redirect with body being a readable stream","unsupported-redirect")),g();return}(y.statusCode===303||(y.statusCode===301||y.statusCode===302)&&r.method==="POST")&&(D.method="GET",D.body=void 0,D.headers.delete("content-length"));let q=As(M);q&&(D.referrerPolicy=q),a(Kr(new zt(E,D))),g();return}default:return n(new TypeError(`Redirect option '${r.redirect}' is not a valid value of RequestRedirect`))}}i&&y.once("end",()=>{i.removeEventListener("abort",c)});let m=(0,ve.pipeline)(y,new ve.PassThrough,f=>{f&&n(f)});process.version<"v12.10"&&y.on("aborted",c);let b={url:r.url,status:y.statusCode,statusText:y.statusMessage,headers:M,size:r.size,counter:r.counter,highWaterMark:r.highWaterMark},R=M.get("Content-Encoding");if(!r.compress||r.method==="HEAD"||R===null||y.statusCode===204||y.statusCode===304){p=new qe(m,b),a(p);return}let A={flush:Ht.default.Z_SYNC_FLUSH,finishFlush:Ht.default.Z_SYNC_FLUSH};if(R==="gzip"||R==="x-gzip"){m=(0,ve.pipeline)(m,Ht.default.createGunzip(A),f=>{f&&n(f)}),p=new qe(m,b),a(p);return}if(R==="deflate"||R==="x-deflate"){let f=(0,ve.pipeline)(y,new ve.PassThrough,E=>{E&&n(E)});f.once("data",E=>{(E[0]&15)===8?m=(0,ve.pipeline)(m,Ht.default.createInflate(),D=>{D&&n(D)}):m=(0,ve.pipeline)(m,Ht.default.createInflateRaw(),D=>{D&&n(D)}),p=new qe(m,b),a(p)}),f.once("end",()=>{p||(p=new qe(m,b),a(p))});return}if(R==="br"){m=(0,ve.pipeline)(m,Ht.default.createBrotliDecompress(),f=>{f&&n(f)}),p=new qe(m,b),a(p);return}p=new qe(m,b),a(p)}),ds(S,r).catch(n)})}function Sy(e,t){let a=$a.Buffer.from(`0\r
\r
`),n=!1,r=!1,o;e.on("response",u=>{let{headers:s}=u;n=s["transfer-encoding"]==="chunked"&&!s["content-length"]}),e.on("socket",u=>{let s=()=>{if(n&&!r){let p=new Error("Premature close");p.code="ERR_STREAM_PREMATURE_CLOSE",t(p)}},i=p=>{r=$a.Buffer.compare(p.slice(-5),a)===0,!r&&o&&(r=$a.Buffer.compare(o.slice(-3),a.slice(0,3))===0&&$a.Buffer.compare(p.slice(-2),a.slice(3))===0),o=p};u.prependListener("close",s),u.on("data",i),e.on("close",()=>{u.removeListener("close",s),u.removeListener("data",i)})})}var h=_(require("graphql-tag")),Ga=h.default`
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
`,by=h.default`
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
  ${Ga}
`,tt=h.default`
  fragment UserFields on User {
    id
    avatarUrl
    name
    login
    isViewer
  }
`,Qa=h.default`
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
  ${tt}
`,Yr=h.default`
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
  ${Qa}
  ${Ga}
  ${tt}
`,gy=h.default`
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
  ${Qa}
  ${Ga}
  ${tt}
`,xs=h.default`
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
`,vs=h.default`
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
`,Us=h.default`
  fragment RepositoryMentionFields on Repository {
    nameWithOwner
    description
    isPrivate
    isArchived
    owner {
      avatarUrl(size: 64)
    }
  }
`,Iy=h.default`
  fragment ProjectViewerFields on ProjectV2View {
    id
    name
    number
  }
`,_s=h.default`
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
  ${Qa}
  ${Iy}
`,ws=h.default`
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
  ${Ga}
  ${Qa}
  ${tt}
`,my=h.default`
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
  ${Ga}
  ${Qa}
  ${tt}
`,My=h.default`
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
`,Ts=h.default`
  fragment CommitFields on Commit {
    authoredDate
    oid
    message
  }
`,to=h.default`
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
`,Ry=h.default`
  fragment ReleaseFields on Release {
    id
    description
    name
    publishedAt
    createdAt
    tagName
    url
  }
`,fy=h.default`
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
`,Ay=h.default`
  mutation createRef($input: CreateRefInput!) {
    createRef(input: $input) {
      clientMutationId
      ref {
        id
        name
      }
    }
  }
`,Py=h.default`
  mutation deleteLinkedBranch($input: DeleteLinkedBranchInput!) {
    deleteLinkedBranch(input: $input) {
      clientMutationId
    }
  }
`,Ey=h.default`
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
  ${by}
`,hy=h.default`
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
`,Cy=h.default`
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
  ${tt}
`,Dy=h.default`
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
`,xy=h.default`
  query issueDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...IssueDetailFields
    }
  }
  ${gy}
`,vy=h.default`
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
  ${Yr}
`,Uy=h.default`
  query issueByNumber($owner: String!, $name: String!, $issueNumber: Int!) {
    repository(owner: $owner, name: $name) {
      issue(number: $issueNumber) {
        ...IssueFields
      }
    }
  }
  ${Yr}
`,_y=h.default`
  mutation closeIssue($nodeId: ID!, $stateReason: IssueClosedStateReason!) {
    closeIssue(input: { issueId: $nodeId, stateReason: $stateReason }) {
      issue {
        id
      }
    }
  }
`,wy=h.default`
  mutation reopenIssue($nodeId: ID!) {
    reopenIssue(input: { issueId: $nodeId }) {
      issue {
        id
      }
    }
  }
`,Ty=h.default`
  mutation changeIssueAssignees($issueId: ID!, $assigneeIds: [ID!]) {
    updateIssue(input: { id: $issueId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,Oy=h.default`
  mutation changeIssueMilestone($issueId: ID!, $milestoneId: ID) {
    updateIssue(input: { id: $issueId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,Ly=h.default`
  mutation addIssueToProject($issueId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $issueId }) {
      clientMutationId
    }
  }
`,By=h.default`
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
  ${Yr}
`,qy=h.default`
  query searchIssueMentions($query: String!, $numberOfItems: Int!) {
    search(query: $query, type: ISSUE, first: $numberOfItems) {
      nodes {
        ... on Issue {
          ...IssueMentionFields
        }
      }
    }
  }
  ${xs}
`,Ny=h.default`
  query searchPullRequestMentions($query: String!, $numberOfItems: Int!) {
    search(query: $query, type: ISSUE, first: $numberOfItems) {
      nodes {
        ... on PullRequest {
          ...PullRequestMentionFields
        }
      }
    }
  }
  ${vs}
`,Vy=h.default`
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
  ${xs}
  ${vs}
`,Fy=h.default`
  query searchRepositoryMentions($query: String!, $numberOfItems: Int!) {
    search(query: $query, type: REPOSITORY, first: $numberOfItems) {
      nodes {
        ... on Repository {
          ...RepositoryMentionFields
        }
      }
    }
  }
  ${Us}
`,ky=h.default`
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
  ${Us}
`,jy=h.default`
  mutation changeProjectStatus($projectId: ID!, $closed: Boolean!) {
    updateProjectV2(input: { projectId: $projectId, closed: $closed }) {
      clientMutationId
    }
  }
`,zy=h.default`
  query projectDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...ProjectFields
    }
  }
  ${_s}
`,Hy=h.default`
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
  ${ws}
`,$y=h.default`
  query pullRequestDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...PullRequestDetailsFields
    }
  }
  ${my}
`,Gy=h.default`
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
  ${tt}
`,Qy=h.default`
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
`,Wy=h.default`
  query pullRequestCommits($nodeId: ID!, $numberOfItems: Int!, $before: String) {
    node(id: $nodeId) {
      ...PullRequestCommitFields
    }
  }
  ${My}
`,Ky=h.default`
  mutation closePullRequest($nodeId: ID!) {
    closePullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Yy=h.default`
  mutation reopenPullRequest($nodeId: ID!) {
    reopenPullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Jy=h.default`
  mutation markPullRequestReadyForReview($nodeId: ID!) {
    markPullRequestReadyForReview(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Zy=h.default`
  mutation addPullRequestReview($nodeId: ID!, $event: PullRequestReviewEvent, $body: String) {
    addPullRequestReview(input: { pullRequestId: $nodeId, event: $event, body: $body }) {
      pullRequestReview {
        id
      }
    }
  }
`,Xy=h.default`
  mutation changePullRequestAssignees($pullRequestId: ID!, $assigneeIds: [ID!]) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,ed=h.default`
  mutation changePullRequestMilestone($pullRequestId: ID!, $milestoneId: ID) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,td=h.default`
  mutation addPullRequestToProject($pullRequestId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $pullRequestId }) {
      clientMutationId
    }
  }
`,ad=h.default`
  mutation requestReview($pullRequestId: ID!, $collaboratorId: ID!) {
    requestReviews(input: { pullRequestId: $pullRequestId, userIds: [$collaboratorId], union: true }) {
      clientMutationId
    }
  }
`,rd=h.default`
  mutation mergePullRequest($nodeId: ID!, $method: PullRequestMergeMethod!) {
    mergePullRequest(input: { pullRequestId: $nodeId, mergeMethod: $method }) {
      pullRequest {
        nodeId: id
      }
    }
  }
`,nd=h.default`
  mutation addPullRequestToMergeQueue($nodeId: ID!) {
    enqueuePullRequest(input: { pullRequestId: $nodeId }) {
      __typename
    }
  }
`,od=h.default`
  mutation removePullRequestFromMergeQueue($nodeId: ID!) {
    dequeuePullRequest(input: { id: $nodeId }) {
      __typename
    }
  }
`,id=h.default`
  mutation enablePullRequestAutoMerge($nodeId: ID!, $mergeMethod: PullRequestMergeMethod) {
    enablePullRequestAutoMerge(input: { pullRequestId: $nodeId, mergeMethod: $mergeMethod }) {
      pullRequest {
        id
      }
    }
  }
`,sd=h.default`
  mutation disablePullRequestAutoMerge($nodeId: ID!) {
    disablePullRequestAutoMerge(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,ud=h.default`
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
`,pd=h.default`
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
  ${ws}
`,ld=h.default`
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
  ${to}
`,cd=h.default`
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
  ${to}
`,yd=h.default`
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
`,dd=h.default`
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
`,Sd=h.default`
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
  ${Ts}
  ${tt}
`,bd=h.default`
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
  ${Ts}
`,gd=h.default`
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
  ${Yr}
`,Id=h.default`
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
  ${Ry}
`,md=h.default`
  mutation addStar($repositoryId: ID!) {
    addStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,Md=h.default`
  mutation removeStar($repositoryId: ID!) {
    removeStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,Rd=h.default`
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
  ${to}
`,fd=h.default`
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
  ${tt}
  ${_s}
`,Ad=h.default`
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
  ${tt}
`,Pd=h.default`
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
`,Ed=(e,t,a,n)=>e();function Os(e,t=Ed){return{createLinkedBranch(a,n,r){return t(o=>e.request({document:fy,variables:a,requestHeaders:{...n,...o},signal:r}),"createLinkedBranch","mutation",a)},createRef(a,n,r){return t(o=>e.request({document:Ay,variables:a,requestHeaders:{...n,...o},signal:r}),"createRef","mutation",a)},deleteLinkedBranch(a,n,r){return t(o=>e.request({document:Py,variables:a,requestHeaders:{...n,...o},signal:r}),"deleteLinkedBranch","mutation",a)},searchDiscussions(a,n,r){return t(o=>e.request({document:Ey,variables:a,requestHeaders:{...n,...o},signal:r}),"searchDiscussions","query",a)},getGitHubDiscussionNumber(a,n,r){return t(o=>e.request({document:hy,variables:a,requestHeaders:{...n,...o},signal:r}),"getGitHubDiscussionNumber","query",a)},repositoryCollaboratorsForIssues(a,n,r){return t(o=>e.request({document:Cy,variables:a,requestHeaders:{...n,...o},signal:r}),"repositoryCollaboratorsForIssues","query",a)},repositoryProjectsForIssues(a,n,r){return t(o=>e.request({document:Dy,variables:a,requestHeaders:{...n,...o},signal:r}),"repositoryProjectsForIssues","query",a)},issueDetails(a,n,r){return t(o=>e.request({document:xy,variables:a,requestHeaders:{...n,...o},signal:r}),"issueDetails","query",a)},searchIssues(a,n,r){return t(o=>e.request({document:vy,variables:a,requestHeaders:{...n,...o},signal:r}),"searchIssues","query",a)},issueByNumber(a,n,r){return t(o=>e.request({document:Uy,variables:a,requestHeaders:{...n,...o},signal:r}),"issueByNumber","query",a)},closeIssue(a,n,r){return t(o=>e.request({document:_y,variables:a,requestHeaders:{...n,...o},signal:r}),"closeIssue","mutation",a)},reopenIssue(a,n,r){return t(o=>e.request({document:wy,variables:a,requestHeaders:{...n,...o},signal:r}),"reopenIssue","mutation",a)},changeIssueAssignees(a,n,r){return t(o=>e.request({document:Ty,variables:a,requestHeaders:{...n,...o},signal:r}),"changeIssueAssignees","mutation",a)},changeIssueMilestone(a,n,r){return t(o=>e.request({document:Oy,variables:a,requestHeaders:{...n,...o},signal:r}),"changeIssueMilestone","mutation",a)},addIssueToProject(a,n,r){return t(o=>e.request({document:Ly,variables:a,requestHeaders:{...n,...o},signal:r}),"addIssueToProject","mutation",a)},createIssue(a,n,r){return t(o=>e.request({document:By,variables:a,requestHeaders:{...n,...o},signal:r}),"createIssue","mutation",a)},searchIssueMentions(a,n,r){return t(o=>e.request({document:qy,variables:a,requestHeaders:{...n,...o},signal:r}),"searchIssueMentions","query",a)},searchPullRequestMentions(a,n,r){return t(o=>e.request({document:Ny,variables:a,requestHeaders:{...n,...o},signal:r}),"searchPullRequestMentions","query",a)},issueOrPullRequestMention(a,n,r){return t(o=>e.request({document:Vy,variables:a,requestHeaders:{...n,...o},signal:r}),"issueOrPullRequestMention","query",a)},searchRepositoryMentions(a,n,r){return t(o=>e.request({document:Fy,variables:a,requestHeaders:{...n,...o},signal:r}),"searchRepositoryMentions","query",a)},viewerRepositoryMentions(a,n,r){return t(o=>e.request({document:ky,variables:a,requestHeaders:{...n,...o},signal:r}),"viewerRepositoryMentions","query",a)},changeProjectStatus(a,n,r){return t(o=>e.request({document:jy,variables:a,requestHeaders:{...n,...o},signal:r}),"changeProjectStatus","mutation",a)},projectDetails(a,n,r){return t(o=>e.request({document:zy,variables:a,requestHeaders:{...n,...o},signal:r}),"projectDetails","query",a)},searchPullRequests(a,n,r){return t(o=>e.request({document:Hy,variables:a,requestHeaders:{...n,...o},signal:r}),"searchPullRequests","query",a)},pullRequestDetails(a,n,r){return t(o=>e.request({document:$y,variables:a,requestHeaders:{...n,...o},signal:r}),"pullRequestDetails","query",a)},repositoryCollaboratorsForPullRequests(a,n,r){return t(o=>e.request({document:Gy,variables:a,requestHeaders:{...n,...o},signal:r}),"repositoryCollaboratorsForPullRequests","query",a)},repositoryProjectsForPullRequests(a,n,r){return t(o=>e.request({document:Qy,variables:a,requestHeaders:{...n,...o},signal:r}),"repositoryProjectsForPullRequests","query",a)},pullRequestCommits(a,n,r){return t(o=>e.request({document:Wy,variables:a,requestHeaders:{...n,...o},signal:r}),"pullRequestCommits","query",a)},closePullRequest(a,n,r){return t(o=>e.request({document:Ky,variables:a,requestHeaders:{...n,...o},signal:r}),"closePullRequest","mutation",a)},reopenPullRequest(a,n,r){return t(o=>e.request({document:Yy,variables:a,requestHeaders:{...n,...o},signal:r}),"reopenPullRequest","mutation",a)},markPullRequestReadyForReview(a,n,r){return t(o=>e.request({document:Jy,variables:a,requestHeaders:{...n,...o},signal:r}),"markPullRequestReadyForReview","mutation",a)},addPullRequestReview(a,n,r){return t(o=>e.request({document:Zy,variables:a,requestHeaders:{...n,...o},signal:r}),"addPullRequestReview","mutation",a)},changePullRequestAssignees(a,n,r){return t(o=>e.request({document:Xy,variables:a,requestHeaders:{...n,...o},signal:r}),"changePullRequestAssignees","mutation",a)},changePullRequestMilestone(a,n,r){return t(o=>e.request({document:ed,variables:a,requestHeaders:{...n,...o},signal:r}),"changePullRequestMilestone","mutation",a)},addPullRequestToProject(a,n,r){return t(o=>e.request({document:td,variables:a,requestHeaders:{...n,...o},signal:r}),"addPullRequestToProject","mutation",a)},requestReview(a,n,r){return t(o=>e.request({document:ad,variables:a,requestHeaders:{...n,...o},signal:r}),"requestReview","mutation",a)},mergePullRequest(a,n,r){return t(o=>e.request({document:rd,variables:a,requestHeaders:{...n,...o},signal:r}),"mergePullRequest","mutation",a)},addPullRequestToMergeQueue(a,n,r){return t(o=>e.request({document:nd,variables:a,requestHeaders:{...n,...o},signal:r}),"addPullRequestToMergeQueue","mutation",a)},removePullRequestFromMergeQueue(a,n,r){return t(o=>e.request({document:od,variables:a,requestHeaders:{...n,...o},signal:r}),"removePullRequestFromMergeQueue","mutation",a)},enablePullRequestAutoMerge(a,n,r){return t(o=>e.request({document:id,variables:a,requestHeaders:{...n,...o},signal:r}),"enablePullRequestAutoMerge","mutation",a)},disablePullRequestAutoMerge(a,n,r){return t(o=>e.request({document:sd,variables:a,requestHeaders:{...n,...o},signal:r}),"disablePullRequestAutoMerge","mutation",a)},createPullRequest(a,n,r){return t(o=>e.request({document:ud,variables:a,requestHeaders:{...n,...o},signal:r}),"createPullRequest","mutation",a)},initPullRequest(a,n,r){return t(o=>e.request({document:pd,variables:a,requestHeaders:{...n,...o},signal:r}),"initPullRequest","mutation",a)},searchRepositories(a,n,r){return t(o=>e.request({document:ld,variables:a,requestHeaders:{...n,...o},signal:r}),"searchRepositories","query",a)},myLatestRepositories(a,n,r){return t(o=>e.request({document:cd,variables:a,requestHeaders:{...n,...o},signal:r}),"myLatestRepositories","query",a)},milestonesForRepository(a,n,r){return t(o=>e.request({document:yd,variables:a,requestHeaders:{...n,...o},signal:r}),"milestonesForRepository","query",a)},commentsForPullRequest(a,n,r){return t(o=>e.request({document:dd,variables:a,requestHeaders:{...n,...o},signal:r}),"commentsForPullRequest","query",a)},dataForRepository(a,n,r){return t(o=>e.request({document:Sd,variables:a,requestHeaders:{...n,...o},signal:r}),"dataForRepository","query",a)},searchRepositoryBranches(a,n,r){return t(o=>e.request({document:bd,variables:a,requestHeaders:{...n,...o},signal:r}),"searchRepositoryBranches","query",a)},repositoryIssues(a,n,r){return t(o=>e.request({document:gd,variables:a,requestHeaders:{...n,...o},signal:r}),"repositoryIssues","query",a)},repositoryReleases(a,n,r){return t(o=>e.request({document:Id,variables:a,requestHeaders:{...n,...o},signal:r}),"repositoryReleases","query",a)},addStar(a,n,r){return t(o=>e.request({document:md,variables:a,requestHeaders:{...n,...o},signal:r}),"addStar","mutation",a)},removeStar(a,n,r){return t(o=>e.request({document:Md,variables:a,requestHeaders:{...n,...o},signal:r}),"removeStar","mutation",a)},myStarredRepositories(a,n,r){return t(o=>e.request({document:Rd,variables:a,requestHeaders:{...n,...o},signal:r}),"myStarredRepositories","query",a)},getViewer(a,n,r){return t(o=>e.request({document:fd,variables:a,requestHeaders:{...n,...o},signal:r}),"getViewer","query",a)},getViewerStats(a,n,r){return t(o=>e.request({document:Ad,variables:a,requestHeaders:{...n,...o},signal:r}),"getViewerStats","query",a)},getViewerStatsDetails(a,n,r){return t(o=>e.request({document:Pd,variables:a,requestHeaders:{...n,...o},signal:r}),"getViewerStatsDetails","query",a)}}}var ao=null,ro=null,Ns=null,hd=(0,Bs.getPreferenceValues)();function Cd({token:e,type:t}){let a=t==="personal"?`token ${e}`:`bearer ${e}`;Ns=e,ao=Os(new Nr("https://api.github.com/graphql",{headers:{authorization:a}})),ro=new Ls.Octokit({auth:e,request:{fetch:Kr}})}var Vs=qs.OAuthService.github({personalAccessToken:hd.personalAccessToken,scope:"notifications repo project read:org read:user read:packages",onAuthorize:Cd});function x(){if(!ao||!ro)throw new Error("GitHub clients not initialized");return{github:ao,octokit:ro,token:Ns}}var Ut=require("@raycast/api"),Dd=_(require("react")),ks=require("react/jsx-runtime");function xd(e){let t=e.min||1,a=e.max||100,n=e.default||10,o=(0,Ut.getPreferenceValues)()[e.name]||"",u=Number(o);return isNaN(u)||u<t||u>a?n:u}function Fs(){return Math.min(xd({name:"numberOfResults",default:50}),25)}var Kt=require("@raycast/api"),wt=require("date-fns");var Wa=require("@raycast/api");function W(e){return e?{icon:{source:e.avatarUrl??Wa.Icon.Person,mask:Wa.Image.Mask.Circle},text:(e.name?e.name:e.login)??"-"}:{icon:Wa.Icon.Person,text:"Unknown"}}var P=require("@raycast/api"),Ku=_($());function w(e){return e?.response?.errors?e.response.errors[0].message:e instanceof Error?e.message:String(e)}var ma=require("node:child_process"),Hs=require("node:fs"),$s=require("node:os"),Gs=require("node:util"),J=require("@raycast/api"),Qs=_($());function js(e,t){let a=(t??"").split(/\s+/).map(r=>/^(?:user|org):(.+)$/i.exec(r)?.[1]?.toLowerCase()).filter(r=>!!r);if(a.length===0)return!0;let n=e.split("/")[0]?.toLowerCase();return a.includes(n)}var Ws=[{title:"github.dev",baseUrl:"https://github.dev/",icon:{source:"github-dev.svg",tintColor:J.Color.PrimaryText},shortcut:J.Keyboard.Shortcut.Common.Open},{title:"VS Code for the Web",baseUrl:"https://vscode.dev/github/",icon:{source:"vscode.svg",tintColor:J.Color.PrimaryText},shortcut:{macOS:{modifiers:["cmd"],key:"v"},Windows:{modifiers:["ctrl"],key:"v"}}},{title:"CodeSandbox",baseUrl:"https://codesandbox.io/s/github/",icon:{source:"codesandbox.svg",tintColor:J.Color.PrimaryText}},{title:"Replit",baseUrl:"https://repl.it/github/",icon:{source:"replit.svg",tintColor:J.Color.PrimaryText}},{title:"Gitpod",baseUrl:"https://gitpod.io/#https://github.com/",icon:{source:"gitpod.svg",tintColor:J.Color.PrimaryText}},{title:"Glitch",baseUrl:"https://glitch.com/edit/#!/import/github/",icon:{source:"glitch.svg",tintColor:J.Color.PrimaryText}},{title:"Sourcegraph",baseUrl:"https://sourcegraph.com/github.com/",icon:{source:"sourcegraph.svg",tintColor:J.Color.PrimaryText},shortcut:{macOS:{modifiers:["cmd"],key:"s"},Windows:{modifiers:["ctrl"],key:"s"}}},{title:"DeepWiki",baseUrl:"https://deepwiki.com/",icon:{source:"deepwiki.png"},shortcut:{macOS:{modifiers:["cmd"],key:"d"},Windows:{modifiers:["ctrl"],key:"d"}}},{title:"VS Code Remote Repositories",baseUrl:"vscode://GitHub.remotehub/open?url=https://github.com/",icon:{source:"vscode.svg",tintColor:J.Color.PrimaryText}}],vd=25;async function Ks(e){let{application:t,baseClonePath:a,repositoryCloneProtocol:n}=(0,J.getPreferenceValues)(),r=t?.path.replaceAll(" ","\\ "),o=`${a}/${e.name}`,u=`open -a ${r} ${o}`,s=await(0,J.showToast)({title:`Opening ${e.name}`,message:`at ${o}`,style:J.Toast.Style.Animated});if(!(0,Hs.existsSync)(o.replace("~",(0,$s.homedir)())))try{(0,ma.execFileSync)("git",Ya(e.nameWithOwner,n),{cwd:a})}catch(i){s.style=J.Toast.Style.Failure,s.title="Error while cloning the repository",s.message=w(i),console.error(i);return}try{(0,ma.execSync)(u,{cwd:a})}catch(i){s.style=J.Toast.Style.Failure,s.title="Error while opening the repository",s.message=w(i),console.error(i);return}s.title="Code editor launched!",s.style=J.Toast.Style.Success}function Ys(e,t){let[a,n]=(0,Qs.useCachedState)("history",[]);function r(i){let p=[i,...a?.filter(l=>l.id!==i.id)??[]].slice(0,vd);n(p)}function o(i){n(p=>(p??[]).map(l=>l.id===i.id?{...l,viewerHasStarred:i.viewerHasStarred,stargazerCount:i.stargazerCount}:l))}function u(i){n(p=>(p??[]).filter(l=>l.id!==i.id))}let s=a;return e&&(s=s.filter(i=>i.nameWithOwner.toLowerCase().includes(e.toLowerCase()))),t&&(s=s.filter(i=>js(i.nameWithOwner,t))),{data:s,visitRepository:r,updateRepository:o,removeRepository:u}}var Ud=[{title:"Relevance",value:""},{title:"Last Update",value:"sort:updated-desc"},{title:"Name",value:"sort:name-asc"},{title:"Stars",value:"sort:stars-desc"},{title:"Forks",value:"sort:forks-desc"}],oo=[{title:"Last Pushed",value:"pushed_at:desc"},{title:"Name",value:"name:asc"},{title:"Stars",value:"stargazers:desc"}],_d=[{title:"Recently Starred",value:"starred_at:desc"},{title:"Oldest Starred",value:"starred_at:asc"}],Ig=Ud[0].value,Js=oo[0].value,mg=_d[0].value,Zs=["https","ssh"],Xs={https:"HTTPS",ssh:"SSH"},eu=["git","gh"],tu={git:"Git",gh:"GitHub CLI"},au=(e,t,a)=>{let n=a?.gitFlags?.join(" ")??"",r=(a?.targetDir??"").replace(/"/g,'\\"'),o=ou(e,t),u=`git clone ${n} ${o}`;return r&&(u+=` "${r}"`),u},Ya=(e,t,a)=>{let n=a?.gitFlags??[],r=a?.targetDir??"",o=["clone",...n,ou(e,t)];return r&&o.push(r),o},ru=(e,t)=>{let a=t?.gitFlags??[],n=t?.targetDir??"",r=["repo","clone",e];return n&&r.push(n),a.length>0&&r.push("--",...a),r},no=(0,Gs.promisify)(ma.execFile),wd=["/gh","\\gh","/gh.exe","\\gh.exe"],Ka="\x1B",zs="\x07",Td=new RegExp(`${Ka}][^${zs}${Ka}]*(?:${zs}|${Ka}\\\\)`,"g"),Od=new RegExp(`${Ka}\\[[0-9;?]*[A-Za-z]`,"g"),Ld=new RegExp(`${Ka}\\([0-9A-Za-z]`,"g");function Bd(e){let t=e.replace(Td,"").replace(Od,"").replace(Ld,"");for(let a of t.split(/\r?\n/)){let n=a.trim();if(!(!n||/^(alias|builtin|function)\s/i.test(n))&&wd.some(r=>n.endsWith(r)))return n}}async function qd(){let e=process.env.SHELL;if(e)for(let t of["-l","-i"])try{let{stdout:a}=await no(e,[t,"-c","command -v gh"],{timeout:5e3,maxBuffer:1048576}),n=Bd(a.toString());if(n)return n}catch{}return"gh"}async function nu(){let e=await qd();try{await no(e,["--version"])}catch{return{available:!1,reason:"not-installed"}}try{await no(e,["auth","status"])}catch{return{available:!1,reason:"not-authenticated"}}return{available:!0,executable:e}}var ou=(e,t)=>t==="https"?`https://github.com/${e}.git`:`git@github.com:${e}.git`;function iu(e,t,a=""){if(!t)return e;let n=g=>g.replace(/^https:\/\/raw\.githubusercontent\.com\/([^/]+)\/([^/]+)\//,"https://github.com/$1/$2/blob/"),r=t.slice(0,t.lastIndexOf("/")+1),o=a?t.slice(0,t.length-a.length):r,u=n(r),s=n(o),i=g=>/^[a-z][a-z0-9+.-]*:/i.test(g)||g.startsWith("//")||g.startsWith("#"),p=(g,y,M)=>{let m=g.trim();if(!m||i(m))return g;try{return m.startsWith("/")?new URL(m.replace(/^\/+/,""),M).toString():new URL(m,y).toString()}catch{return g}},l="((?:\\([^)]*\\)|[^()\\s])+)([^)]*)",c=new RegExp(`!\\[([^\\]]*)\\]\\(${l}\\)`,"g"),S=new RegExp(`(?<!!)\\[([^\\]]+)\\]\\(${l}\\)`,"g");return e.replace(c,(g,y,M,m)=>`![${y}](${p(M,r,o)}${m})`).replace(S,(g,y,M,m)=>`[${y}](${p(M,u,s)}${m})`).replace(/(<img[^>]+src=["'])([^"']+)(["'])/gi,(g,y,M,m)=>`${y}${p(M,r,o)}${m}`).replace(/(<a[^>]+href=["'])([^"']+)(["'])/gi,(g,y,M,m)=>`${y}${p(M,u,s)}${m}`)}var Jr=require("child_process"),su=_(require("path")),io=require("util"),k=require("@raycast/api"),at=_($()),uu=require("react");var ie=require("react/jsx-runtime");function so({repository:e}){let{octokit:t}=x(),{application:a,baseClonePath:n,repositoryCloneProtocol:r}=(0,k.getPreferenceValues)(),{data:o,isLoading:u}=(0,at.useCachedPromise)(async c=>(await t.repos.listBranches({owner:c.owner.login,repo:c.name})).data.map(g=>g.name),[e]),{itemProps:s,handleSubmit:i,setValue:p,values:l}=(0,at.useForm)({initialValues:{clonePath:n?[n]:[],cloneProtocol:r,cloneTool:"git"},async onSubmit(c){let S=e.name,g=su.default.join(c.clonePath[0],S);await(0,k.showToast)({title:`Cloning ${e.nameWithOwner} to ${g}`,style:k.Toast.Style.Animated});let y=c.branch?["-b",c.branch]:[],M=(0,io.promisify)(Jr.exec),m=(0,io.promisify)(Jr.execFile),b="gh";if(c.cloneTool==="gh"){let R=await nu();if(!R.available){R.reason==="not-installed"?await(0,at.showFailureToast)(void 0,{title:"GitHub CLI is not installed",message:"Install it with `brew install gh` or visit https://cli.github.com, then try again."}):await(0,at.showFailureToast)(void 0,{title:"GitHub CLI is not authenticated",message:"Run `gh auth login` in your terminal to authenticate, then try again."});return}b=R.executable}try{c.cloneTool==="gh"?await m(b,ru(e.nameWithOwner,{gitFlags:y,targetDir:g})):await m("git",Ya(e.nameWithOwner,c.cloneProtocol,{gitFlags:y,targetDir:g})),await(0,k.showToast)({style:k.Toast.Style.Success,title:"Repository cloned successfully",primaryAction:{title:"Open Repository",async onAction(){let A=`open -a ${a?.path.replaceAll(" ","\\ ")} ${g}`;await M(A),await(0,k.closeMainWindow)()}}})}catch(R){if(R instanceof Error&&R.message.includes("Repository not found")){await(0,at.showFailureToast)(R,{title:"Repository not found",message:"You may not have access to this repository. Try using SSH instead of HTTPS."});return}if(R instanceof Error&&R.message.includes("already exists")){await(0,at.showFailureToast)(R,{title:"The repository already exists",message:"Please choose a different directory to clone the repository."});return}await(0,at.showFailureToast)(R,{title:"Failed cloning repository"})}}});return(0,uu.useEffect)(()=>{let c=o?.find(g=>g==="main"),S=o?.find(g=>g==="master");(c||S)&&p("branch",c??S??"")},[o]),(0,ie.jsxs)(k.Form,{isLoading:u,navigationTitle:`Clone ${e.nameWithOwner}`,actions:(0,ie.jsx)(k.ActionPanel,{children:(0,ie.jsx)(k.Action.SubmitForm,{title:"Clone and Open Repository",onSubmit:i})}),children:[(0,ie.jsx)(k.Form.Dropdown,{...s.cloneTool,title:"Clone Tool",children:eu.map(c=>(0,ie.jsx)(k.Form.Dropdown.Item,{value:c,title:tu[c]},c))}),(0,ie.jsx)(k.Form.Description,{title:"Clone Location",text:n?`Starts at your Default Clone Path (${n}). Choose another directory to override it for this clone.`:"Choose the directory where the repository should be cloned. Set a Default Clone Path in extension preferences to reuse a directory."}),(0,ie.jsx)(k.Form.FilePicker,{...s.clonePath,title:"Clone Path",allowMultipleSelection:!1,canChooseDirectories:!0,canChooseFiles:!1,storeValue:!0}),(0,ie.jsx)(k.Form.Dropdown,{...s.branch,title:"Branch Name",children:o?.map(c=>(0,ie.jsx)(k.Form.Dropdown.Item,{value:c,title:c},c))}),l.cloneTool==="gh"?(0,ie.jsx)(k.Form.Description,{title:"Authentication",text:"Cloning uses your existing GitHub CLI (gh) authentication and git protocol configuration. Run `gh auth login` in your terminal if you are not authenticated."}):(0,ie.jsx)(ie.Fragment,{children:(0,ie.jsx)(k.Form.Dropdown,{...s.cloneProtocol,title:"Repository Clone Protocol",storeValue:!0,children:Zs.map(c=>(0,ie.jsx)(k.Form.Dropdown.Item,{value:c,title:Xs[c]},c))})})]})}var Zr=require("fs"),uo=_(require("path")),te=require("@raycast/api"),Ma=_($()),pu=require("react");var gt=require("react/jsx-runtime");function po({repository:e}){let{octokit:t,token:a}=x(),{data:n,isLoading:r}=(0,Ma.useCachedPromise)(async i=>(await t.repos.listBranches({owner:i.owner.login,repo:i.name})).data.map(l=>l.name),[e]),{itemProps:o,handleSubmit:u,setValue:s}=(0,Ma.useForm)({async onSubmit(i){let p=e.url+"/archive/refs/heads/"+i.branch+".zip";await(0,te.showToast)({title:`Downloading ${e.nameWithOwner}`,style:te.Toast.Style.Animated});try{let l;if(e.isPrivate&&a){let b=`https://api.github.com/repos/${e.owner.login}/${e.name}/zipball/${i.branch}`;l=await fetch(b,{headers:{Authorization:`token ${a}`,Accept:"application/vnd.github.v3+json"},redirect:"follow"})}else l=await fetch(p);if(!l.ok)throw new Error(`HTTP error! status: ${l.status}`);let S=await(await l.blob()).arrayBuffer(),g=new Uint8Array(S),y=`${e.name}-${i.branch.replaceAll("/","-")}.zip`,M=uo.default.join(i.downloadPath[0],y),m=1;for(;(0,Zr.existsSync)(M);)y=`${`${e.name}-${i.branch.replaceAll("/","-")}`} (${m}).zip`,M=uo.default.join(i.downloadPath[0],y),m++;(0,Zr.writeFileSync)(M,g),await(0,te.showToast)({style:te.Toast.Style.Success,title:"Downloaded repository successfully",message:e.name,primaryAction:{title:"Show in Finder",async onAction(){await(0,te.showInFinder)(M)}}})}catch(l){await(0,Ma.showFailureToast)(l,{title:"Failed downloading repository",message:l instanceof Error?l.message:"Unknown error"});return}},validation:{downloadPath:i=>{if(!i||i.length===0)return"Please select a download path"},branch:i=>{if(!i||i.trim()==="")return"Please select a branch"}}});return(0,pu.useEffect)(()=>{let i=n?.find(l=>l==="main"),p=n?.find(l=>l==="master");(i||p)&&s("branch",i??p??"")},[n]),(0,gt.jsxs)(te.Form,{isLoading:r,navigationTitle:`Download ${e.nameWithOwner} as ZIP`,actions:(0,gt.jsx)(te.ActionPanel,{children:(0,gt.jsx)(te.Action.SubmitForm,{title:"Download ZIP",onSubmit:u})}),children:[(0,gt.jsx)(te.Form.Description,{title:"ZIP Download",text:"Downloads a branch as a ZIP archive. To create a Git clone, use 'Clone with Options' instead."}),(0,gt.jsx)(te.Form.FilePicker,{...o.downloadPath,title:"ZIP Save Location",allowMultipleSelection:!1,canChooseDirectories:!0,canChooseFiles:!1,storeValue:!0}),(0,gt.jsx)(te.Form.Dropdown,{...o.branch,title:"Branch Name",children:n?.map(i=>(0,gt.jsx)(te.Form.Dropdown.Item,{value:i,title:i},i))})]})}var se=require("@raycast/api"),an=_($()),yo=require("react");var L=require("@raycast/api"),lu=require("lodash");function Xr(e){switch(e){case"SUCCESS":return{icon:"Check",text:"Success"};case"ERROR":case"FAILURE":return{icon:"Xmark",text:"Failure"};case"PENDING":return{icon:"Clock",text:"Pending"};default:return null}}function cu(e){switch(e){case"MERGE":return"Create Merge Commit";case"SQUASH":return"Squash and Merge";case"REBASE":return"Rebase and Merge";default:{let t=e;throw new Error(`Unknown merge method: ${t}`)}}}function Ja(e){return e.merged?{icon:{source:"pull-request-merged.svg",tintColor:L.Color.Purple},text:"Merged",color:L.Color.Purple}:e.closed?{icon:{source:"pull-request-closed.svg",tintColor:L.Color.Red},text:"Closed",color:L.Color.Red}:e.isDraft?{icon:{source:"pull-request-draft.svg",tintColor:L.Color.SecondaryText},text:"Draft",color:L.Color.SecondaryText}:e.isInMergeQueue?{icon:{source:"pull-request-merge-queue.svg",tintColor:L.Color.Orange},text:"In Merge Queue",color:L.Color.Orange}:{icon:{source:"pull-request-open.svg",tintColor:L.Color.Green},text:"Open",color:L.Color.Green}}function en(e){return W(e.author)}function yu(e){let t=e.reviewRequests?.nodes?.map(n=>{let r=n?.requestedReviewer;if(r){let o;"userName"in r&&(o=r.userName),"teamName"in r&&(o=r.teamName);let u;"githubUsername"in r&&(u=r.githubUsername);let s;return"userAvatarURL"in r&&(s=r.userAvatarURL),"teamAvatarURL"in r&&(s=r.teamAvatarURL),{id:"id"in r?r.id:"",...W({name:o,login:u,avatarUrl:s})}}}),a=(0,lu.uniqBy)(e.reviews?.nodes?.map(n=>({id:n?.author?.id,...W(n?.author)})),"id");return[...t??[],...a??[]]}function du(e){let t=e.comments.totalCount,a=e.reviews?.nodes?.reduce((r,o)=>r+(o?.bodyText===""?0:1),0)??0,n=e.reviewThreads.nodes?.map(r=>r?.comments.totalCount??0).reduce((r,o)=>r+o,0)??0;return t+a+n}function tn(e){let t=Xr(e);return t?{icon:L.Icon[t.icon],tooltip:`Checks: ${t.text}`}:null}function Su(e){switch(e){case"added":return{icon:{source:L.Icon.PlusCircle,tintColor:L.Color.Green},tooltip:"Added"};case"removed":return{icon:{source:L.Icon.MinusCircle,tintColor:L.Color.Red},tooltip:"Removed"};case"renamed":return{icon:{source:L.Icon.ArrowRight,tintColor:L.Color.SecondaryText},tooltip:"Renamed"};case"copied":return{icon:{source:L.Icon.CopyClipboard,tintColor:L.Color.SecondaryText},tooltip:"Copied"};case"unchanged":return{icon:{source:L.Icon.Circle,tintColor:L.Color.SecondaryText},tooltip:"Unchanged"};case"changed":return{icon:{source:L.Icon.Pencil,tintColor:L.Color.Orange},tooltip:"Changed"};default:return{icon:{source:L.Icon.Pencil,tintColor:L.Color.Orange},tooltip:"Modified"}}}var lo=400;function bu(e){let t=e.split(`
`);return t.length<=lo?{patch:e,remainingLines:0}:{patch:t.slice(0,lo).join(`
`),remainingLines:t.length-lo}}function gu(e){switch(e){case"REVIEW_REQUIRED":return{icon:{source:L.Icon.Eye,tintColor:L.Color.Yellow},tooltip:"Review required"};case"CHANGES_REQUESTED":return{icon:{source:L.Icon.Pencil,tintColor:L.Color.Orange},tooltip:"Changes requested"};case"APPROVED":return{icon:{source:L.Icon.CheckCircle,tintColor:L.Color.Green},tooltip:"Approved"};default:return null}}var Iu=[{title:"Newest",value:"sort:created-desc"},{title:"Oldest",value:"sort:created-asc"},{title:"Most Commented",value:"sort:comments-desc"},{title:"Least Commented",value:"sort:comments-asc"},{title:"Recently Updated",value:"sort:updated-desc"},{title:"Least Recently Updated",value:"sort:updated-asc"},{title:"Best Match",value:"sort:relevance-desc"},{title:"\u{1F44D}",value:"sort:reactions-+1-desc"},{title:"\u{1F44E}",value:"sort:reactions--1-desc"},{title:"\u{1F604}",value:"sort:reactions-smile-desc"},{title:"\u{1F389}",value:"sort:reactions-tada-desc"},{title:"\u{1F641}",value:"sort:reactions-thinking_face-desc"},{title:"\u2764\uFE0F",value:"sort:reactions-heart-desc"},{title:"\u{1F680}",value:"sort:reactions-rocket-desc"},{title:"\u{1F440}",value:"sort:reactions-eyes-desc"}],mu="sort:updated-desc";function rt(e){return[...new Map(e.map(t=>[t.id,t])).values()]}function Mu(e){return e?.filter(t=>typeof t=="object"&&t!==null&&"id"in t)??[]}function Ne(e,t,{suffix:a="s",withNumber:n=!1}={}){let r=`${t}${e!==1?a:""}`;return n?`${e} ${r}`:r}var nt=require("date-fns"),co=[{title:"Latest Activity",value:"sort:latest"},{title:"Date Created",value:"sort:date_created"},{title:"Top: Past Day",value:"sort:top created:>=1d"},{title:"Top: Past Week",value:"sort:top created:>=1w"},{title:"Top: Past Month",value:"sort:top created:>=1m"},{title:"Top: Past Year",value:"sort:top created:>=1y"},{title:"Top: All",value:"sort:top"}],Ru=co[0].value,fu=e=>{let t=new Date,a,n=e.match(/sort:top created:>=(\d+)([dwmy])/);if(!n)return e;let r=parseInt(n[1],10);switch(n[2]){case"d":a=(0,nt.subDays)(t,r);break;case"w":a=(0,nt.subWeeks)(t,r);break;case"m":a=(0,nt.subMonths)(t,r);break;case"y":a=(0,nt.subYears)(t,r);break;default:throw new Error("Unsupported time unit")}return`sort:top created:>=${(0,nt.format)(a,"yyyy-MM-dd")}`};var Ue=require("@raycast/api"),Pu=require("date-fns");var Re=require("@raycast/api"),ot=require("react/jsx-runtime"),_t=({sortQuery:e,setSortQuery:t,data:a})=>t?(0,ot.jsxs)(Re.ActionPanel.Submenu,{title:"Sort by",icon:Re.Icon.ArrowUp,shortcut:Re.Keyboard.Shortcut.Common.Duplicate,children:[a.filter(({value:n})=>!n.startsWith("sort:reaction")).map(({title:n,value:r})=>(0,ot.jsx)(Au,{title:n,value:r,sortQuery:e??"",setSortQuery:t},r||"relevance")),a.some(({value:n})=>n.startsWith("sort:reaction"))&&(0,ot.jsx)(Re.ActionPanel.Section,{title:"Most Reactions",children:a.filter(({value:n})=>n.startsWith("sort:reaction")).map(({title:n,value:r})=>(0,ot.jsx)(Au,{title:n,value:r,sortQuery:e??"",setSortQuery:t},r))})]}):(0,ot.jsx)(ot.Fragment,{}),Au=({title:e,value:t,sortQuery:a,setSortQuery:n})=>(0,ot.jsx)(Re.Action,{title:e,icon:a===t?{source:Re.Icon.CheckCircle,tintColor:Re.Color.Green}:Re.Icon.Circle,onAction:()=>n(t)});var $t=require("react/jsx-runtime");function Vd(e){let t=e.category?.name?`Category: ${e.category?.name}`:"Unknown",a=e.category?.emojiHTML;if(!a)return{value:{source:e.repository?.owner?.avatarUrl},tooltip:t};let r=(()=>{let o=/fallback-src="(.*)"/,u=a.match(o);if(u)return u[1]})();return r&&{value:{source:r},tooltip:t}}function Eu(e){let t=e.discussion,a=W(t.author);return(0,$t.jsx)(Ue.List.Item,{icon:Vd(t),title:t.title,subtitle:t.repository?.nameWithOwner,accessories:[{icon:t.answer?{source:Ue.Icon.Checkmark,tintColor:Ue.Color.Green}:void 0,tooltip:t.answer?"Answered":void 0},{icon:Ue.Icon.ArrowUp,text:`${t.upvoteCount}`,tooltip:`${t.upvoteCount} Upvotes`},{text:t.comments?`${t.comments.totalCount}`:void 0,icon:t.comments?Ue.Icon.SpeechBubble:void 0,tooltip:t.comments?`Comments: ${t.comments.totalCount}`:void 0},...t.publishedAt?[{date:new Date(t.publishedAt),tooltip:(0,Pu.format)(new Date(t.publishedAt),"EEEE d MMMM yyyy 'at' HH:mm")}]:[],{icon:a.icon,tooltip:a.text}],actions:(0,$t.jsxs)(Ue.ActionPanel,{children:[(0,$t.jsx)(Ue.Action.OpenInBrowser,{url:t.url}),(0,$t.jsx)(Ue.ActionPanel.Section,{children:(0,$t.jsx)(_t,{data:co,...e})})]})})}var Ve=require("react/jsx-runtime"),Fd=20;function kd(e){return(0,Ve.jsxs)(se.List.Dropdown,{tooltip:"Filter",value:e.value,onChange:e.onChange,children:[(0,Ve.jsx)(se.List.Dropdown.Item,{value:"",title:"All",icon:se.Icon.SpeechBubble}),(0,Ve.jsx)(se.List.Dropdown.Item,{value:"answered",title:"Answered",icon:{source:se.Icon.Checkmark,tintColor:se.Color.Green}}),(0,Ve.jsx)(se.List.Dropdown.Item,{value:"unanswered",title:"Unanswered",icon:se.Icon.Circle}),(0,Ve.jsx)(se.List.Dropdown.Item,{value:"locked",title:"Locked",icon:se.Icon.Lock}),(0,Ve.jsx)(se.List.Dropdown.Item,{value:"unlocked",title:"Unlocked",icon:se.Icon.LockUnlocked})]})}function hu(e){let{github:t}=x(),[a,n]=(0,yo.useState)(""),[r,o]=(0,yo.useState)(""),[u,s]=(0,an.useCachedState)("sort-query",Ru,{cacheNamespace:"github-repo-discussion"}),i=r.length>0?`is:${r}`:"",p=e.repository&&e.repository.length>0?`repo:${e.repository}`:"",{data:l,isLoading:c,pagination:S}=(0,an.useCachedPromise)((y,M,m)=>async b=>{let R=await t.searchDiscussions({query:`${p} ${M} ${fu(m)} ${y}`.replace(/\s+/g," ").trim(),numberOfItems:Fd,after:b.page>0?b.cursor:void 0});return{data:R.searchDiscussions.nodes?.map(A=>A)??[],hasMore:R.searchDiscussions.pageInfo.hasNextPage,cursor:R.searchDiscussions.pageInfo.endCursor??void 0}},[a,i,u]),g=rt(l??[]);return(0,Ve.jsx)(se.List,{isLoading:c,onSearchTextChange:n,navigationTitle:e.repository,throttle:!0,pagination:S,searchBarAccessory:(0,Ve.jsx)(kd,{value:r,onChange:o}),children:(0,Ve.jsx)(se.List.Section,{title:"Discussions",subtitle:`${g.length}`,children:g.map(y=>(0,Ve.jsx)(Eu,{discussion:y,sortQuery:u,setSortQuery:s},y.id))})})}var Ge=require("@raycast/api"),er=_($()),Ou=require("react");var It=require("@raycast/api");function rn(e){return e.stateReason==="NOT_PLANNED"?{icon:{source:"skip.svg",tintColor:It.Color.SecondaryText},text:"Closed as not planned",color:It.Color.Purple}:e.stateReason==="COMPLETED"?{icon:{source:"issue-closed.svg",tintColor:It.Color.Purple},text:"Closed as completed",color:It.Color.Purple}:e.closed?{icon:{source:"issue-closed.svg",tintColor:It.Color.Purple},text:"Closed",color:It.Color.Purple}:{icon:{source:"issue-open.svg",tintColor:It.Color.Green},text:"Open",color:It.Color.Green}}function nn(e){return W(e.author)}var Cu=[{title:"Newest",value:"sort:created-desc"},{title:"Oldest",value:"sort:created-asc"},{title:"Most Commented",value:"sort:comments-desc"},{title:"Least Commented",value:"sort:comments-asc"},{title:"Recently Updated",value:"sort:updated-desc"},{title:"Least Recently Updated",value:"sort:updated-asc"},{title:"Best Match",value:"sort:relevance-desc"},{title:"\u{1F44D}",value:"sort:reactions-+1-desc"},{title:"\u{1F44E}",value:"sort:reactions--1-desc"},{title:"\u{1F604}",value:"sort:reactions-smile-desc"},{title:"\u{1F389}",value:"sort:reactions-tada-desc"},{title:"\u{1F641}",value:"sort:reactions-thinking_face-desc"},{title:"\u2764\uFE0F",value:"sort:reactions-heart-desc"},{title:"\u{1F680}",value:"sort:reactions-rocket-desc"},{title:"\u{1F440}",value:"sort:reactions-eyes-desc"}],Du="sort:updated-desc",jd=/\brepo:([A-Za-z0-9_.-]+)\/([A-Za-z0-9_.-]+)\b/i,zd=/(?:https?:\/\/github\.com\/)?([A-Za-z0-9_.-]+)\/([A-Za-z0-9_.-]+)(?:\/issues\/|#)(\d+)\b/i,Hd=/\b(?:repo|author|assignee|mentions|commenter|involves|team|label|milestone|project|status|head|base|language|is|type|state|user|org|sort|archived|no|review|draft|created|updated|closed|linked|in|comments|interactions|reactions):[^\s]+/gi;function xu(e,t){let a=e.match(zd);if(a)return{owner:a[1],name:a[2],issueNumber:Number.parseInt(a[3],10)};let n=e.match(jd),r=t?.replace(/^repo:/,""),o=n?`${n[1]}/${n[2]}`:r?.includes("/")?r:null;if(!o)return null;let s=e.replace(Hd," ").replace(/\s+/g," ").trim().match(/^#?(\d+)$/)??e.match(/(?:^|\s)#(\d+)(?:\s|$)/);if(!s)return null;let[i,p]=o.split("/");return!i||!p?null:{owner:i,name:p,issueNumber:Number.parseInt(s[1],10)}}function vu(e){return e.replace(/(^|\s)#(\d+)(?=\s|$)/g,"$1$2").trim()}var mt=require("@raycast/api"),Tu=require("date-fns");var I=require("@raycast/api"),on=_($()),sn=require("react");var Uu=_($());function Gt(){let{github:e}=x(),{data:t}=(0,Uu.useCachedPromise)(async()=>(await e.getViewer()).viewer);return t}var U=require("react/jsx-runtime");function Za({issue:e,mutateList:t,mutateDetail:a,children:n,setSortQuery:r,sortQuery:o}){let{github:u}=x(),s=Gt();async function i(){t&&await t(),a&&await a()}async function p(){try{await(0,I.showToast)({style:I.Toast.Style.Animated,title:`Reopening issue #${e.number}`}),await u.reopenIssue({nodeId:e.id}),await i(),await(0,I.showToast)({style:I.Toast.Style.Success,title:`Issue #${e.number} is now open`})}catch(A){await(0,I.showToast)({style:I.Toast.Style.Failure,title:"Failed reopening issue",message:w(A)})}}async function l(){try{await(0,I.showToast)({style:I.Toast.Style.Animated,title:`Closing issue #${e.number} as completed`}),await u.closeIssue({nodeId:e.id,stateReason:"COMPLETED"}),await i(),await(0,I.showToast)({style:I.Toast.Style.Success,title:`Issue #${e.number} closed as completed`})}catch(A){await(0,I.showToast)({style:I.Toast.Style.Failure,title:"Failed closing issue as completed",message:w(A)})}}async function c(){try{await(0,I.showToast)({style:I.Toast.Style.Animated,title:`Closing issue #${e.number} as not planned`}),await u.closeIssue({nodeId:e.id,stateReason:"NOT_PLANNED"}),await i(),await(0,I.showToast)({style:I.Toast.Style.Success,title:`Issue #${e.number} closed as not planned`})}catch(A){await(0,I.showToast)({style:I.Toast.Style.Failure,title:"Failed closing issue as not planned",message:w(A)})}}async function S(A){try{await(0,I.showToast)({style:I.Toast.Style.Animated,title:"Assigning to me"});let f=e.assignees.nodes?.filter(E=>!!E).map(E=>E?.id)??[];await u.changeIssueAssignees({issueId:e.id,assigneeIds:[...f,A]}),await i(),await(0,I.showToast)({style:I.Toast.Style.Success,title:"Assigned to me"})}catch(f){await(0,I.showToast)({style:I.Toast.Style.Failure,title:"Failed assigning to me",message:w(f)})}}async function g(A){try{await(0,I.showToast)({style:I.Toast.Style.Animated,title:"Un-assigning from me"});let f=e.assignees.nodes?.filter(E=>!!E).map(E=>E?.id)??[];await u.changeIssueAssignees({issueId:e.id,assigneeIds:f?.filter(E=>E!==A)}),await i(),await(0,I.showToast)({style:I.Toast.Style.Success,title:"Un-assigned from me"})}catch(f){await(0,I.showToast)({style:I.Toast.Style.Failure,title:"Failed un-assigning from me",message:w(f)})}}async function y(){try{await(0,I.showToast)({style:I.Toast.Style.Animated,title:`Creating branch for issue #${e.number}`});let A=e.repository.defaultBranchRef?.target?.oid;if(!A)throw new Error("Repository default branch commit SHA is unavailable");let E=(await u.createLinkedBranch({input:{issueId:e.id,oid:A}})).createLinkedBranch?.linkedBranch?.ref?.name;await i(),E&&await(0,I.showToast)({style:I.Toast.Style.Success,title:`${E} is created`,primaryAction:{title:"Copy Branch Name",shortcut:I.Keyboard.Shortcut.Common.Copy,onAction:()=>I.Clipboard.copy(E)}})}catch(A){await(0,I.showToast)({style:I.Toast.Style.Failure,title:"Failed creating a branch",message:w(A)})}}async function M(A,f){if(await(0,I.confirmAlert)({icon:I.Icon.Trash,title:"Delete the branch",message:`${f} will be deleted. Are you sure you want to proceed with the action?`,primaryAction:{title:"Confirm",style:I.Alert.ActionStyle.Destructive}}))try{await(0,I.showToast)({style:I.Toast.Style.Animated,title:"Deleting a branch"}),await u.deleteLinkedBranch({input:{linkedBranchId:A}}),await i(),await(0,I.showToast)({style:I.Toast.Style.Success,title:"Deleted the branch"})}catch(E){await(0,I.showToast)({style:I.Toast.Style.Failure,title:"Failed deleting the branch",message:w(E)})}}let m=W(s),b=e.assignees.nodes?.some(A=>A?.isViewer),R=e.linkedBranches?.nodes?.length?e.linkedBranches.nodes[0]:null;return(0,U.jsxs)(I.ActionPanel,{title:`#${e.number} in ${e.repository.nameWithOwner}`,children:[n,(0,U.jsx)(I.Action.OpenInBrowser,{url:e.url}),(0,U.jsxs)(I.ActionPanel.Section,{children:[s?(0,U.jsx)(I.Action,{title:b?"Unassign from Me":"Assign to Me",icon:m.icon,shortcut:{macOS:{modifiers:["cmd","shift"],key:"i"},Windows:{modifiers:["ctrl","shift"],key:"i"}},onAction:()=>b?g(s.id):S(s.id)}):null,(0,U.jsx)($d,{issue:e,mutate:i}),(0,U.jsx)(Gd,{issue:e,mutate:i}),R?null:(0,U.jsx)(I.Action,{title:"Create Issue Branch",icon:{source:"branch.svg",tintColor:I.Color.PrimaryText},shortcut:{macOS:{modifiers:["cmd","shift"],key:"b"},Windows:{modifiers:["ctrl","shift"],key:"b"}},onAction:()=>y()}),(0,U.jsx)(Qd,{issue:e,mutate:i})]}),(0,U.jsx)(I.ActionPanel.Section,{children:e.closed?(0,U.jsx)(I.Action,{title:"Reopen Issue",icon:{source:"issue-reopened.svg",tintColor:I.Color.Green},onAction:p}):(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(I.Action,{title:"Close Issue as Completed",style:I.Action.Style.Destructive,icon:{source:"issue-closed.svg",tintColor:I.Color.Red},onAction:l}),(0,U.jsx)(I.Action,{title:"Close Issue as Not Planned",style:I.Action.Style.Destructive,icon:{source:"skip.svg",tintColor:I.Color.Red},onAction:c}),R?(0,U.jsx)(I.Action,{title:"Delete Issue Branch",style:I.Action.Style.Destructive,icon:{source:"branch.svg",tintColor:I.Color.Red},onAction:()=>M(R?.id||"",R.ref?.name??"")}):null]})}),(0,U.jsxs)(I.ActionPanel.Section,{children:[(0,U.jsx)(I.Action.CopyToClipboard,{content:e.number,title:"Copy Issue Number",shortcut:{macOS:{modifiers:["cmd","shift"],key:"."},Windows:{modifiers:["ctrl","shift"],key:"."}}}),(0,U.jsx)(I.Action.CopyToClipboard,{content:e.url,title:"Copy Issue URL",shortcut:{macOS:{modifiers:["cmd","shift"],key:","},Windows:{modifiers:["ctrl","shift"],key:","}}}),(0,U.jsx)(I.Action.CopyToClipboard,{content:e.title,title:"Copy Issue Title",shortcut:{macOS:{modifiers:["ctrl","shift"],key:","},Windows:{modifiers:["alt","shift"],key:","}}}),(0,U.jsx)(I.Action.CopyToClipboard,{content:`[${e.title}](${e.url})`,title:"Copy Markdown URL",shortcut:{macOS:{modifiers:["cmd","shift"],key:";"},Windows:{modifiers:["ctrl","shift"],key:";"}}}),R?.ref?.name?(0,U.jsx)(I.Action.CopyToClipboard,{content:R.ref?.name,title:"Copy Branch Name",shortcut:{macOS:{modifiers:["ctrl","shift"],key:"."},Windows:{modifiers:["alt","shift"],key:"."}}}):null]}),(0,U.jsxs)(I.ActionPanel.Section,{children:[(0,U.jsx)(_t,{data:Cu,sortQuery:o,setSortQuery:r}),(0,U.jsx)(I.Action,{icon:I.Icon.ArrowClockwise,title:"Refresh",onAction:i,shortcut:I.Keyboard.Shortcut.Common.Refresh})]})]})}function $d({issue:e,mutate:t}){let{github:a}=x(),[n,r]=(0,sn.useState)(!1),{data:o,isLoading:u}=(0,on.useCachedPromise)(async i=>a.repositoryCollaboratorsForIssues({owner:i.repository.owner.login,name:i.repository.name,issueNumber:i.number}),[e],{execute:n});async function s({id:i,text:p}){try{await(0,I.showToast)({style:I.Toast.Style.Animated,title:"Adding assignee",message:p});let l=o?.repository?.issue?.assignees.nodes?.filter(c=>!!c).map(c=>c?.id)??[];await a.changeIssueAssignees({issueId:e.id,assigneeIds:[...l,i]}),await t(),await(0,I.showToast)({style:I.Toast.Style.Success,title:"Added assignee",message:p})}catch(l){await(0,I.showToast)({style:I.Toast.Style.Failure,title:"Failed adding assignee",message:w(l)})}}return(0,U.jsx)(I.ActionPanel.Submenu,{title:"Add Assignee",icon:I.Icon.AddPerson,shortcut:{macOS:{modifiers:["cmd","shift"],key:"a"},Windows:{modifiers:["ctrl","shift"],key:"a"}},onOpen:()=>r(!0),children:u?(0,U.jsx)(I.Action,{title:"Loading\u2026"}):o?.repository?.collaborators?.nodes?.map(i=>{if(!i)return null;let p=W(i);return(0,U.jsx)(I.Action,{title:p.text,icon:p.icon,onAction:()=>s({id:i.id,text:p.text})},i.id)})})}function Gd({issue:e,mutate:t}){let{github:a}=x(),[n,r]=(0,sn.useState)(!1),{data:o,isLoading:u}=(0,on.useCachedPromise)(async i=>a.repositoryProjectsForIssues({owner:i.repository.owner.login,name:i.repository.name,issueNumber:i.number}),[e],{execute:n});async function s({id:i,text:p}){try{await(0,I.showToast)({style:I.Toast.Style.Animated,title:"Adding to project",message:p}),await a.addIssueToProject({issueId:e.id,projectId:i}),await t(),await(0,I.showToast)({style:I.Toast.Style.Success,title:"Added to project",message:p})}catch(l){await(0,I.showToast)({style:I.Toast.Style.Failure,title:"Failed adding to project",message:w(l)})}}return(0,U.jsx)(I.ActionPanel.Submenu,{title:"Add to Project",icon:{source:"project.svg",tintColor:I.Color.PrimaryText},shortcut:{macOS:{modifiers:["cmd","shift"],key:"p"},Windows:{modifiers:["ctrl","shift"],key:"p"}},onOpen:()=>r(!0),children:u?(0,U.jsx)(I.Action,{title:"Loading\u2026"}):o?.repository?.projectsV2.nodes?.map(i=>i?(0,U.jsx)(I.Action,{title:i.title,onAction:()=>s({id:i.id,text:i.title})},i.id):null)})}function Qd({issue:e,mutate:t}){let{github:a}=x(),[n,r]=(0,sn.useState)(!1),{data:o,isLoading:u}=(0,on.useCachedPromise)(async p=>a.milestonesForRepository({owner:p.repository.owner.login,name:p.repository.name}),[e],{execute:n});async function s(){try{await(0,I.showToast)({style:I.Toast.Style.Animated,title:"Removing milestone"}),await a.changeIssueMilestone({issueId:e.id,milestoneId:null}),await t(),await(0,I.showToast)({style:I.Toast.Style.Success,title:"Removed milestone"})}catch(p){await(0,I.showToast)({style:I.Toast.Style.Failure,title:"Failed removing milestone",message:w(p)})}}async function i({id:p,text:l}){try{await(0,I.showToast)({style:I.Toast.Style.Animated,title:"Setting milestone",message:l}),await a.changeIssueMilestone({issueId:e.id,milestoneId:p}),await t(),await(0,I.showToast)({style:I.Toast.Style.Success,title:"Milestone set",message:l})}catch(c){await(0,I.showToast)({style:I.Toast.Style.Failure,title:"Failed setting milestone",message:w(c)})}}return(0,U.jsx)(I.ActionPanel.Submenu,{title:"Set Milestone",icon:{source:"milestone.svg",tintColor:I.Color.PrimaryText},shortcut:{macOS:{modifiers:["cmd","shift"],key:"m"},Windows:{modifiers:["ctrl","shift"],key:"m"}},onOpen:()=>r(!0),children:u?(0,U.jsx)(I.Action,{title:"Loading\u2026"}):(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(I.Action,{title:"No Milestone",onAction:()=>s()}),o?.repository?.milestones?.nodes?.map(p=>p?(0,U.jsx)(I.Action,{title:p.title,onAction:()=>i({id:p.id,text:p.title}),autoFocus:e.milestone?.id===p.id},p.id):null)]})})}var ae=require("@raycast/api"),_u=_($()),wu=require("date-fns");var re=require("react/jsx-runtime");function So({initialIssue:e,mutateList:t}){let{github:a}=x(),n=Gt(),{data:r,isLoading:o,mutate:u}=(0,_u.useCachedPromise)(async c=>(await a.issueDetails({nodeId:c})).node,[e.id],{initialData:e}),s=`# ${r.title}`;r?.body&&(s+=`

${r.body}`);let i=rn(r),p=nn(r),l=r.linkedBranches.nodes?.length?r.linkedBranches.nodes[0]?.ref?.name:null;return(0,re.jsx)(ae.Detail,{isLoading:o,markdown:s,navigationTitle:`#${r.number}`,metadata:(0,re.jsxs)(ae.Detail.Metadata,{children:[(0,re.jsx)(ae.Detail.Metadata.Label,{title:"Repository",text:r.repository.nameWithOwner}),(0,re.jsx)(ae.Detail.Metadata.TagList,{title:"Status",children:(0,re.jsx)(ae.Detail.Metadata.TagList.Item,{...i})}),l?(0,re.jsx)(ae.Detail.Metadata.Label,{title:"Branch",icon:{source:"branch.svg",tintColor:ae.Color.PrimaryText},text:l}):null,r.updatedAt?(0,re.jsx)(ae.Detail.Metadata.Label,{title:"Updated",text:(0,wu.format)(new Date(r.updatedAt),"dd MMM")}):null,(0,re.jsx)(ae.Detail.Metadata.Label,{title:"Author",...p}),r.assignees&&r.assignees.totalCount>0?(0,re.jsx)(ae.Detail.Metadata.TagList,{title:Ne(r.assignees.totalCount,"Assignee"),children:r.assignees.nodes?.map(c=>{if(!c)return null;let S=W(c);return(0,re.jsx)(ae.Detail.Metadata.TagList.Item,{...S},c.id)})}):null,r.labels&&r.labels.totalCount>0?(0,re.jsx)(ae.Detail.Metadata.TagList,{title:Ne(r.labels.totalCount,"Label"),children:r.labels.nodes?.map(c=>c?(0,re.jsx)(ae.Detail.Metadata.TagList.Item,{text:c.name,color:c.color},c.id):null)}):null,r.projectsV2&&r.projectsV2.totalCount>0?(0,re.jsx)(ae.Detail.Metadata.TagList,{title:Ne(r.projectsV2.totalCount,"Project"),children:r.projectsV2.nodes?.map(c=>c?(0,re.jsx)(ae.Detail.Metadata.TagList.Item,{text:c.title},c.id):null)}):null,r.milestone?(0,re.jsx)(ae.Detail.Metadata.Label,{title:"Milestone",text:r.milestone.title}):null]}),actions:(0,re.jsx)(Za,{issue:r,viewer:n,mutateList:t,mutateDetail:u})})}var Xa=require("react/jsx-runtime");function bo({issue:e,viewer:t,mutateList:a,sortQuery:n,setSortQuery:r}){let o=new Date(e.updatedAt),u=nn(e),s=rn(e),i=[{date:o,tooltip:`Updated: ${(0,Tu.format)(o,"EEEE d MMMM yyyy 'at' HH:mm")}`},{icon:u.icon,tooltip:`Author: ${u.text}`}];e.comments.totalCount>0&&i.unshift({text:`${e.comments.totalCount}`,icon:mt.Icon.Bubble}),e.linkedBranches?.nodes?.length&&i.unshift({icon:{source:"branch.svg",tintColor:mt.Color.SecondaryText},tooltip:e.linkedBranches.nodes[0]?.ref?.name});let p=[`${e.number}`];return e.author?.login&&p.push(e.author.login),(0,Xa.jsx)(mt.List.Item,{title:e.title,subtitle:{value:`#${e.number}`,tooltip:`Repository: ${e.repository.nameWithOwner}`},icon:{value:s.icon,tooltip:`Status: ${s.text}`},keywords:p,accessories:i,actions:(0,Xa.jsx)(Za,{issue:e,mutateList:a,viewer:t,sortQuery:n,setSortQuery:r,children:(0,Xa.jsx)(mt.Action.Push,{title:"Show Details",icon:mt.Icon.Sidebar,target:(0,Xa.jsx)(So,{initialIssue:e,viewer:t,mutateList:a})})})},e.id)}var it=require("react/jsx-runtime"),Wd=20;function Kd(e){return(0,it.jsxs)(Ge.List.Dropdown,{tooltip:"Status",value:e.value,onChange:t=>e.onChange(t),children:[(0,it.jsx)(Ge.List.Dropdown.Item,{value:"open",title:"Open",icon:{source:"issue-open.svg",tintColor:Ge.Color.Green}}),(0,it.jsx)(Ge.List.Dropdown.Item,{value:"closed",title:"Closed",icon:{source:"issue-closed.svg",tintColor:Ge.Color.Purple}}),(0,it.jsx)(Ge.List.Dropdown.Item,{value:"all",title:"All",icon:{source:"issue-open.svg",tintColor:Ge.Color.PrimaryText}})]})}function Lu(e){let{github:t}=x(),[a,n]=(0,Ou.useState)(""),[r,o]=(0,er.useCachedState)("status-filter","open",{cacheNamespace:"github-repo-issue"}),[u,s]=(0,er.useCachedState)("sort-query",Du,{cacheNamespace:"github-repo-issue"}),i=e.repo&&e.repo.length>0?`repo:${e.repo}`:"",{data:p,isLoading:l,mutate:c,pagination:S}=(0,er.useCachedPromise)((y,M,m)=>async b=>{let R=m==="all"?"":`is:${m}`,A=xu(y,e.repo);if(A&&b.page===0)try{let D=(await t.issueByNumber(A)).repository?.issue,q=m==="all"||(m==="closed"?D?.closed:!D?.closed);if(D&&q)return{data:[D],hasMore:!1}}catch{}let f=await t.searchIssues({query:`is:issue ${R} ${M} ${i} ${vu(y)}`.replace(/\s+/g," ").trim(),numberOfItems:Wd,after:b.page>0?b.cursor:void 0});return{data:f.search.nodes?.map(E=>E)??[],hasMore:f.search.pageInfo.hasNextPage,cursor:f.search.pageInfo.endCursor??void 0}},[a,u,r]),g=rt(p??[]);return(0,it.jsx)(Ge.List,{isLoading:l,onSearchTextChange:n,navigationTitle:e.repo,searchBarPlaceholder:"Filter by title or #123",throttle:!0,pagination:S,searchBarAccessory:(0,it.jsx)(Kd,{value:r,onChange:o}),children:(0,it.jsx)(Ge.List.Section,{title:"Issues",subtitle:`${g.length}`,children:g.map(y=>(0,it.jsx)(bo,{issue:y,mutateList:c,sortQuery:u,setSortQuery:s},y.id))})})}var be=require("@raycast/api"),rr=_($()),Hu=require("react");var _e=require("@raycast/api"),Ao=require("date-fns"),zu=require("react");var d=require("@raycast/api"),Aa=_($()),fa=require("react");var H=require("@raycast/api"),un=_($());var st=require("react/jsx-runtime");function go({pullRequest:e,mutate:t}){let{github:a}=x(),{pop:n}=(0,H.useNavigation)(),{handleSubmit:r,itemProps:o}=(0,un.useForm)({async onSubmit(u){try{await(0,H.showToast)({style:H.Toast.Style.Animated,title:"Adding Review"}),await a.addPullRequestReview({nodeId:e.id,body:u.comment,event:u.event}),await t(),n(),await(0,H.showToast)({style:H.Toast.Style.Success,title:"Review added"})}catch(s){await(0,H.showToast)({style:H.Toast.Style.Failure,title:"Failed to add review",message:w(s)})}},validation:{comment:un.FormValidation.Required}});return(0,st.jsxs)(H.Form,{actions:(0,st.jsx)(H.ActionPanel,{children:(0,st.jsx)(H.Action.SubmitForm,{title:"Submit",icon:H.Icon.Plus,onSubmit:r})}),children:[(0,st.jsx)(H.Form.TextArea,{...o.comment,title:"Comment",placeholder:"Add your comments here (markdown is supported)",enableMarkdown:!0}),(0,st.jsxs)(H.Form.Dropdown,{...o.event,title:"Review Type",children:[(0,st.jsx)(H.Form.Dropdown.Item,{title:"Comment",value:"COMMENT"}),(0,st.jsx)(H.Form.Dropdown.Item,{title:"Approve",value:"APPROVE"}),(0,st.jsx)(H.Form.Dropdown.Item,{title:"Request changes",value:"REQUEST_CHANGES"})]})]})}var pn=require("node:child_process"),Bu=require("node:fs"),qu=_(require("node:path")),Io=require("node:util"),N=require("@raycast/api"),Ra=_($());var Qt=require("react/jsx-runtime");function mo({pullRequest:e}){let{repositoryCloneProtocol:t}=(0,N.getPreferenceValues)(),{itemProps:a,handleSubmit:n}=(0,Ra.useForm)({async onSubmit(r){let o=e.repository.name,u=qu.default.join(r.clonePath[0],o),s=e.headRef?.name||e.headRefName;if(!s){await(0,N.showToast)({style:N.Toast.Style.Failure,title:"Branch name not found",message:"Unable to determine the branch name for this pull request."});return}let i=(0,Io.promisify)(pn.exec),p=(0,Io.promisify)(pn.execFile);try{if((0,Bu.existsSync)(u)){await(0,N.showToast)({title:`Switching to branch ${s}`,message:`in ${u}`,style:N.Toast.Style.Animated});let{stdout:l}=await i("git remote",{cwd:u}),c=l.trim().split(`
`)[0]||"origin";await i(`git fetch ${c} ${s}`,{cwd:u}),await i(`git checkout ${s}`,{cwd:u}),await i(`git reset --hard ${c}/${s}`,{cwd:u}),await(0,N.showToast)({style:N.Toast.Style.Success,title:"Switched to branch successfully",message:`Now on ${s}`})}else await(0,N.showToast)({title:`Cloning ${e.repository.nameWithOwner}`,message:`to ${u}`,style:N.Toast.Style.Animated}),await p("git",Ya(e.repository.nameWithOwner,t,{gitFlags:["-b",s],targetDir:u})),await(0,N.showToast)({style:N.Toast.Style.Success,title:"Repository cloned successfully",message:`Checked out ${s}`});await(0,N.open)(u),await(0,N.popToRoot)(),await(0,N.closeMainWindow)()}catch(l){if(l instanceof Error&&l.message.includes("Repository not found")){await(0,Ra.showFailureToast)(l,{title:"Repository not found",message:"You may not have access to this repository. Try using SSH instead of HTTPS."});return}if(l instanceof Error&&l.message.includes("already exists")){await(0,Ra.showFailureToast)(l,{title:"The repository already exists",message:"Please choose a different directory to clone the repository."});return}await(0,Ra.showFailureToast)(l,{title:"Failed checking out pull request"})}}});return(0,Qt.jsxs)(N.Form,{navigationTitle:`Check out PR #${e.number}`,actions:(0,Qt.jsx)(N.ActionPanel,{children:(0,Qt.jsx)(N.Action.SubmitForm,{title:"Check out Pull Request",onSubmit:n})}),children:[(0,Qt.jsx)(N.Form.Description,{title:"Repository",text:`${e.repository.nameWithOwner} - ${e.headRef?.name||e.headRefName}`}),(0,Qt.jsx)(N.Form.FilePicker,{...a.clonePath,title:"Clone Path",info:"Select the directory where the repository should be cloned. If the repository already exists, it will switch to the PR branch.",allowMultipleSelection:!1,canChooseDirectories:!0,canChooseFiles:!1,storeValue:!0})]})}var de=require("@raycast/api"),Nu=_($()),ln=require("date-fns");var Fe=require("react/jsx-runtime");function Mo({pullRequest:e}){let{github:t}=x(),{data:a,isLoading:n,pagination:r}=(0,Nu.useCachedPromise)(u=>async({cursor:s})=>{let p=(await t.pullRequestCommits({nodeId:u.id,numberOfItems:25,before:s})).node,l=p.commits.nodes?.filter(c=>c!=null)??[];return l.sort((c,S)=>{let g=c.commit.authoredDate,y=S.commit.authoredDate;return(0,ln.compareDesc)(new Date(g),new Date(y))}),{data:l,hasMore:p.commits.pageInfo.hasPreviousPage,cursor:p.commits.pageInfo.startCursor??void 0}},[e]),o=[...new Map((a??[]).map(u=>[u.commit.id,u])).values()];return(0,Fe.jsx)(de.List,{navigationTitle:`#${e.number} Commits`,isLoading:n,pagination:r,children:o.map(u=>{let s=u.commit,i=new Date(s.authoredDate),p=[{date:i,tooltip:(0,ln.format)(i,"EEEE d MMMM yyyy 'at' HH:mm")}];if(s.statusCheckRollup?.state){let c=tn(s.statusCheckRollup.state);c&&p.unshift(c)}let l;if(s.author){let c={source:s.author.avatarUrl,mask:de.Image.Mask.Circle};l=s.author.name?{value:c,tooltip:s.author.name}:c}return(0,Fe.jsx)(de.List.Item,{title:s.message,subtitle:{value:s.abbreviatedOid,tooltip:s.oid},accessories:p,...l?{icon:l}:{},actions:(0,Fe.jsxs)(de.ActionPanel,{children:[(0,Fe.jsx)(de.Action.OpenInBrowser,{title:"Open Commit in Browser",url:s.url}),(0,Fe.jsx)(de.Action.OpenInBrowser,{title:"Open Commit Tree in Browser",url:s.treeUrl}),(0,Fe.jsxs)(de.ActionPanel.Section,{children:[(0,Fe.jsx)(de.Action.CopyToClipboard,{content:s.url,title:"Copy Commit URL",shortcut:{macOS:{modifiers:["cmd","shift"],key:","},Windows:{modifiers:["ctrl","shift"],key:","}}}),(0,Fe.jsx)(de.Action.CopyToClipboard,{content:s.oid,title:"Copy Commit Hash",shortcut:{macOS:{modifiers:["cmd","shift"],key:"."},Windows:{modifiers:["ctrl","shift"],key:"."}}}),(0,Fe.jsx)(de.Action.CopyToClipboard,{content:s.treeUrl,title:"Copy Commit Tree URL",shortcut:{macOS:{modifiers:["ctrl","shift"],key:","},Windows:{modifiers:["alt","shift"],key:","}}}),(0,Fe.jsx)(de.Action.CopyToClipboard,{content:s.message,title:"Copy Commit Message",shortcut:{macOS:{modifiers:["ctrl","shift"],key:"."},Windows:{modifiers:["alt","shift"],key:"."}}})]})]})},s.id)})})}var Fu=require("node:crypto"),K=require("@raycast/api"),cn=_($());var Se=require("react/jsx-runtime"),Vu=100,Yd=4;function Ro({pullRequest:e}){let{octokit:t}=x(),{data:a,isLoading:n,pagination:r}=(0,cn.useCachedPromise)((s,i,p)=>async({page:l})=>{let{data:c}=await t.pulls.listFiles({owner:s,repo:i,pull_number:p,per_page:Vu,page:l+1});return{data:c,hasMore:c.length===Vu}},[e.repository.owner.login,e.repository.name,e.number],{async onError(s){await(0,cn.showFailureToast)(s,{title:"Failed loading changed files"})}}),o=a??[],u="additions"in e&&"deletions"in e?`+${e.additions} \u2212${e.deletions}`:void 0;return(0,Se.jsxs)(K.List,{isLoading:n,isShowingDetail:n||o.length>0,pagination:r,navigationTitle:`#${e.number} Diff`,children:[(0,Se.jsx)(K.List.Section,{title:Ne(o.length,"file",{withNumber:!0}),subtitle:u,children:o.map(s=>{let i=Su(s.status);return(0,Se.jsx)(K.List.Item,{title:s.filename,icon:{value:i.icon,tooltip:i.tooltip},subtitle:s.previous_filename?{value:s.previous_filename,tooltip:`${s.previous_filename} \u2192 ${s.filename}`}:void 0,accessories:[{text:{value:`+${s.additions}`,color:K.Color.Green}},{text:{value:`\u2212${s.deletions}`,color:K.Color.Red}}],detail:(0,Se.jsx)(K.List.Item.Detail,{markdown:Jd(s)}),actions:(0,Se.jsxs)(K.ActionPanel,{title:s.filename,children:[(0,Se.jsx)(K.Action.OpenInBrowser,{title:"Open File Diff in Browser",url:`${e.permalink}/files#diff-${Xd(s.filename)}`}),(0,Se.jsx)(K.Action.OpenInBrowser,{title:"Open Diff in Browser",url:`${e.permalink}/files`}),(0,Se.jsxs)(K.ActionPanel.Section,{children:[(0,Se.jsx)(K.Action.CopyToClipboard,{content:s.filename,title:"Copy File Path",shortcut:{macOS:{modifiers:["cmd","shift"],key:"."},Windows:{modifiers:["ctrl","shift"],key:"."}}}),s.patch?(0,Se.jsx)(K.Action.CopyToClipboard,{content:s.patch,title:"Copy Patch",shortcut:{macOS:{modifiers:["cmd","shift"],key:","},Windows:{modifiers:["ctrl","shift"],key:","}}}):null]})]})},s.sha+s.filename)})}),(0,Se.jsx)(K.List.EmptyView,{icon:K.Icon.CodeBlock,title:"No changed files",description:"This pull request does not change any files.",actions:(0,Se.jsx)(K.ActionPanel,{children:(0,Se.jsx)(K.Action.OpenInBrowser,{title:"Open Diff in Browser",url:`${e.permalink}/files`})})})]})}function Jd(e){if(!e.patch)return"_No text diff available (binary or too large). Open on GitHub to view._";let{patch:t,remainingLines:a}=bu(e.patch),n=Zd(t),r=`${n}diff
${t}
${n}`;return a===0?r:`${r}

_\u2026 truncated, ${Ne(a,"more line",{withNumber:!0})}. Open the file on GitHub for the full diff._`}function Zd(e){let t=0;for(let[a]of e.matchAll(/`+/g))t=Math.max(t,a.length);return"`".repeat(Math.max(Yd,t+1))}function Xd(e){return(0,Fu.createHash)("sha256").update(e).digest("hex")}var C=require("react/jsx-runtime");function tr({pullRequest:e,viewer:t,mutateList:a,mutateDetail:n,children:r,sortQuery:o,setSortQuery:u}){let{github:s}=x();async function i(){a&&await a(),n&&await n()}async function p(){try{await(0,d.showToast)({style:d.Toast.Style.Animated,title:`Reopening pull request #${e.number}`}),await s.reopenPullRequest({nodeId:e.id}),await i(),await(0,d.showToast)({style:d.Toast.Style.Success,title:`Pull request #${e.number} is now open`})}catch(B){await(0,d.showToast)({style:d.Toast.Style.Failure,title:"Failed reopening pull request",message:w(B)})}}async function l(){try{await(0,d.showToast)({style:d.Toast.Style.Animated,title:`Marking pull request #${e.number} as ready for review`}),await s.markPullRequestReadyForReview({nodeId:e.id}),await i(),await(0,d.showToast)({style:d.Toast.Style.Success,title:`Pull request #${e.number} is ready for review`})}catch(B){await(0,d.showToast)({style:d.Toast.Style.Failure,title:"Failed marking pull request as ready for review",message:w(B)})}}async function c(){try{await(0,d.showToast)({style:d.Toast.Style.Animated,title:`Closing pull request #${e.number}`}),await s.closePullRequest({nodeId:e.id}),await i(),await(0,d.showToast)({style:d.Toast.Style.Success,title:`Pull request #${e.number} closed`})}catch(B){await(0,d.showToast)({style:d.Toast.Style.Failure,title:"Failed closing pull request",message:w(B)})}}async function S(B){try{await(0,d.showToast)({style:d.Toast.Style.Animated,title:`Merging pull request #${e.number}`}),await s.mergePullRequest({nodeId:e.id,method:B}),await i(),await(0,d.showToast)({style:d.Toast.Style.Success,title:`Pull request #${e.number} merged`})}catch(le){await(0,d.showToast)({style:d.Toast.Style.Failure,title:"Failed merging pull request",message:w(le)})}}async function g(){try{await(0,d.showToast)({style:d.Toast.Style.Animated,title:`Adding pull request #${e.number} to merge queue`}),await s.addPullRequestToMergeQueue({nodeId:e.id}),await i(),await(0,d.showToast)({style:d.Toast.Style.Success,title:`Pull request #${e.number} added to merge queue`})}catch(B){await(0,d.showToast)({style:d.Toast.Style.Failure,title:"Failed adding pull request to merge queue",message:w(B)})}}async function y(){try{await(0,d.showToast)({style:d.Toast.Style.Animated,title:`Removing pull request #${e.number} from merge queue`}),await s.removePullRequestFromMergeQueue({nodeId:e.id}),await i(),await(0,d.showToast)({style:d.Toast.Style.Success,title:`Pull request #${e.number} removed from merge queue`})}catch(B){await(0,d.showToast)({style:d.Toast.Style.Failure,title:"Failed removing pull request from merge queue",message:w(B)})}}async function M(B){try{await(0,d.showToast)({style:d.Toast.Style.Animated,title:`Enabling auto-merge for pull request #${e.number}`}),await s.enablePullRequestAutoMerge({nodeId:e.id,mergeMethod:B}),await i(),await(0,d.showToast)({style:d.Toast.Style.Success,title:`Auto-merge enabled for pull request #${e.number}`})}catch(le){await(0,d.showToast)({style:d.Toast.Style.Failure,title:"Failed enabling auto-merge",message:w(le)})}}async function m(){try{await(0,d.showToast)({style:d.Toast.Style.Animated,title:`Disabling auto-merge for pull request #${e.number}`}),await s.disablePullRequestAutoMerge({nodeId:e.id}),await i(),await(0,d.showToast)({style:d.Toast.Style.Success,title:`Auto-merge disabled for pull request #${e.number}`})}catch(B){await(0,d.showToast)({style:d.Toast.Style.Failure,title:"Failed disabling auto-merge",message:w(B)})}}async function b(B){try{await(0,d.showToast)({style:d.Toast.Style.Animated,title:"Assigning to me"});let le=e.assignees.nodes?.filter(je=>!!je).map(je=>je?.id)??[];await s.changePullRequestAssignees({pullRequestId:e.id,assigneeIds:[...le,B]}),await i(),await(0,d.showToast)({style:d.Toast.Style.Success,title:"Assigned to me"})}catch(le){await(0,d.showToast)({style:d.Toast.Style.Failure,title:"Failed assigning to me",message:w(le)})}}async function R(B){try{await(0,d.showToast)({style:d.Toast.Style.Animated,title:"Un-assigning from me"});let le=e.assignees.nodes?.filter(je=>!!je).map(je=>je?.id)??[];await s.changePullRequestAssignees({pullRequestId:e.id,assigneeIds:le?.filter(je=>je!==B)}),await i(),await(0,d.showToast)({style:d.Toast.Style.Success,title:"Un-assigned from me"})}catch(le){await(0,d.showToast)({style:d.Toast.Style.Failure,title:"Failed un-assigning from me",message:w(le)})}}let A=!e.closed&&!e.isDraft&&e.mergeable==="MERGEABLE"&&e.mergeStateStatus!=="BLOCKED",f=!e.closed&&!e.merged,E=e.author?"isViewer"in e.author?e.author.isViewer:e.author.login===t?.login:!1,D=f&&e.isDraft&&E,q=[e.repository.mergeCommitAllowed&&"MERGE",e.repository.squashMergeAllowed&&"SQUASH",e.repository.rebaseMergeAllowed&&"REBASE"].filter(Boolean),Y=f&&e.repository.autoMergeAllowed,Ae=A||Y,ne=W(t),G=e.assignees.nodes?.some(B=>B?.isViewer),{isOpenInBrowser:Pe}=(0,d.getPreferenceValues)(),Ee=(0,C.jsx)(d.Action.OpenInBrowser,{url:e.permalink}),[T,pe]=Pe?[Ee,r]:[r,Ee];return(0,C.jsxs)(d.ActionPanel,{title:`#${e.number} in ${e.repository.nameWithOwner}`,children:[T,pe,(0,C.jsx)(d.Action.Push,{icon:d.Icon.Document,title:"Add Review",shortcut:{macOS:{modifiers:["cmd","shift"],key:"r"},Windows:{modifiers:["ctrl","shift"],key:"r"}},target:(0,C.jsx)(go,{pullRequest:e,mutate:i})}),(0,C.jsx)(d.Action.Push,{icon:{source:"commit.svg",tintColor:d.Color.PrimaryText},title:"See Commits",shortcut:d.Keyboard.Shortcut.Common.Copy,target:(0,C.jsx)(Mo,{pullRequest:e})}),(0,C.jsx)(d.Action.Push,{icon:d.Icon.CodeBlock,title:"View Diff",shortcut:d.Keyboard.Shortcut.Common.RemoveAll,target:(0,C.jsx)(Ro,{pullRequest:e})}),(0,C.jsx)(d.Action.Push,{icon:d.Icon.Download,title:"Checkout Pull Request",shortcut:d.Keyboard.Shortcut.Common.OpenWith,target:(0,C.jsx)(mo,{pullRequest:e})}),Ae&&(0,C.jsxs)(d.ActionPanel.Section,{children:[e.isMergeQueueEnabled&&A&&!e.isInMergeQueue&&(0,C.jsx)(d.Action,{title:"Add to Merge Queue",icon:{source:"pull-request-merged.svg",tintColor:d.Color.PrimaryText},shortcut:{macOS:{modifiers:["cmd","shift"],key:"enter"},Windows:{modifiers:["ctrl","shift"],key:"enter"}},onAction:()=>g()}),e.isMergeQueueEnabled&&e.isInMergeQueue&&(0,C.jsx)(d.Action,{title:"Remove from Merge Queue",icon:{source:"pull-request-merged.svg",tintColor:d.Color.PrimaryText},shortcut:{macOS:{modifiers:["cmd","shift"],key:"enter"},Windows:{modifiers:["ctrl","shift"],key:"enter"}},onAction:()=>y()}),!e.isMergeQueueEnabled&&A?(0,C.jsxs)(C.Fragment,{children:[e.repository.mergeCommitAllowed?(0,C.jsx)(d.Action,{title:"Create Merge Commit",icon:{source:"pull-request-merged.svg",tintColor:d.Color.PrimaryText},shortcut:{macOS:{modifiers:["cmd","shift"],key:"enter"},Windows:{modifiers:["ctrl","shift"],key:"enter"}},onAction:()=>S("MERGE")}):null,e.repository.squashMergeAllowed?(0,C.jsx)(d.Action,{title:"Squash and Merge",icon:{source:"pull-request-merged.svg",tintColor:d.Color.PrimaryText},shortcut:{macOS:{modifiers:["ctrl","shift"],key:"enter"},Windows:{modifiers:["ctrl","alt","shift"],key:"enter"}},onAction:()=>S("SQUASH")}):null,e.repository.rebaseMergeAllowed?(0,C.jsx)(d.Action,{title:"Rebase and Merge",icon:{source:"pull-request-merged.svg",tintColor:d.Color.PrimaryText},shortcut:{macOS:{modifiers:["opt","shift"],key:"enter"},Windows:{modifiers:["alt","shift"],key:"enter"}},onAction:()=>S("REBASE")}):null]}):null,Y&&!e.autoMergeRequest&&q.length===1&&(0,C.jsx)(d.Action,{title:"Enable Auto-Merge",icon:{source:"pull-request-merged.svg",tintColor:d.Color.PrimaryText},onAction:()=>M(q[0])}),Y&&!e.autoMergeRequest&&q.length>1&&(0,C.jsx)(d.ActionPanel.Submenu,{title:"Enable Auto-Merge",icon:{source:"pull-request-merged.svg",tintColor:d.Color.PrimaryText},children:q.map(B=>(0,C.jsx)(d.Action,{title:cu(B),onAction:()=>M(B)},B))}),f&&e.autoMergeRequest&&(0,C.jsx)(d.Action,{title:"Disable Auto-Merge",icon:{source:"pull-request-merged.svg",tintColor:d.Color.PrimaryText},onAction:()=>m()})]}),(0,C.jsxs)(d.ActionPanel.Section,{children:[(0,C.jsx)(eS,{pullRequest:e,mutate:i}),t?(0,C.jsx)(d.Action,{title:G?"Unassign from Me":"Assign to Me",icon:ne.icon,shortcut:{macOS:{modifiers:["cmd","shift"],key:"i"},Windows:{modifiers:["ctrl","shift"],key:"i"}},onAction:()=>G?R(t.id):b(t.id)}):null,(0,C.jsx)(tS,{pullRequest:e,mutate:i}),(0,C.jsx)(aS,{pullRequest:e,mutate:i}),(0,C.jsx)(rS,{pullRequest:e,mutate:i}),(0,C.jsx)(nS,{pullRequest:e,mutate:i})]}),(0,C.jsxs)(d.ActionPanel.Section,{children:[D?(0,C.jsx)(d.Action,{title:"Ready for Review",icon:{source:"pull-request-open.svg",tintColor:d.Color.PrimaryText},shortcut:{macOS:{modifiers:["cmd","shift"],key:"d"},Windows:{modifiers:["ctrl","shift"],key:"d"}},onAction:()=>l()}):null,e.closed&&!e.merged?(0,C.jsx)(d.Action,{title:"Reopen Pull Request",icon:{source:"pull-request-open.svg",tintColor:d.Color.PrimaryText},onAction:()=>p()}):null,e.closed?null:(0,C.jsx)(d.Action,{title:"Close Pull Request",style:d.Action.Style.Destructive,icon:d.Icon.XMarkCircle,onAction:()=>c()})]}),(0,C.jsxs)(d.ActionPanel.Section,{children:[(0,C.jsx)(d.Action.CopyToClipboard,{content:e.number,title:"Copy Pull Request Number",shortcut:{macOS:{modifiers:["cmd","shift"],key:"."},Windows:{modifiers:["ctrl","shift"],key:"."}}}),e.headRef?(0,C.jsx)(d.Action.CopyToClipboard,{content:e.headRef.name,title:"Copy Branch Name",shortcut:{macOS:{modifiers:["ctrl","shift"],key:"."},Windows:{modifiers:["alt","shift"],key:"."}}}):null,(0,C.jsx)(d.Action.CopyToClipboard,{content:e.permalink,title:"Copy Pull Request URL",shortcut:{macOS:{modifiers:["cmd","shift"],key:","},Windows:{modifiers:["ctrl","shift"],key:","}}}),(0,C.jsx)(d.Action.CopyToClipboard,{content:e.title,title:"Copy Pull Request Title",shortcut:{macOS:{modifiers:["ctrl","shift"],key:","},Windows:{modifiers:["alt","shift"],key:","}}}),(0,C.jsx)(d.Action.CopyToClipboard,{content:`[${e.title}](${e.permalink})`,title:"Copy Markdown URL",shortcut:{macOS:{modifiers:["cmd","shift"],key:";"},Windows:{modifiers:["ctrl","shift"],key:";"}}})]}),(0,C.jsxs)(d.ActionPanel.Section,{children:[(0,C.jsx)(_t,{data:Iu,sortQuery:o,setSortQuery:u}),(0,C.jsx)(d.Action,{icon:d.Icon.ArrowClockwise,title:"Refresh",onAction:i,shortcut:d.Keyboard.Shortcut.Common.Refresh})]})]})}function eS({pullRequest:e,mutate:t}){let{github:a}=x(),[n,r]=(0,fa.useState)(!1),[o,u]=(0,fa.useState)(""),{data:s,isLoading:i}=(0,Aa.useCachedPromise)(async(l,c)=>a.repositoryCollaboratorsForPullRequests({owner:l.repository.owner.login,name:l.repository.name,pullRequestNumber:l.number,searchQuery:c}),[e,o],{execute:n});async function p({id:l,text:c}){try{await(0,d.showToast)({style:d.Toast.Style.Animated,title:"Requesting review",message:c}),await a.requestReview({pullRequestId:e.id,collaboratorId:l}),await t(),await(0,d.showToast)({style:d.Toast.Style.Success,title:"Requested review",message:c})}catch(S){await(0,d.showToast)({style:d.Toast.Style.Failure,title:"Failed requesting review",message:w(S)})}}return(0,C.jsx)(d.ActionPanel.Submenu,{title:"Request Review",icon:d.Icon.AddPerson,shortcut:{macOS:{modifiers:["ctrl","shift"],key:"r"},Windows:{modifiers:["alt","shift"],key:"r"}},onOpen:()=>r(!0),onSearchTextChange:u,isLoading:i,children:s?.repository?.collaborators?.nodes?.filter(l=>!l?.isViewer).map(l=>{if(!l)return null;let c=W(l);return(0,C.jsx)(d.Action,{title:c.text,icon:c.icon,onAction:()=>p({id:l.id,text:c.text})},l.id)})})}function tS({pullRequest:e,mutate:t}){let{github:a}=x(),[n,r]=(0,fa.useState)(!1),{data:o,isLoading:u}=(0,Aa.useCachedPromise)(async i=>a.repositoryCollaboratorsForPullRequests({owner:i.repository.owner.login,name:i.repository.name,pullRequestNumber:i.number}),[e],{execute:n});async function s({id:i,text:p}){try{await(0,d.showToast)({style:d.Toast.Style.Animated,title:"Adding assignee",message:p});let l=o?.repository?.pullRequest?.assignees.nodes?.filter(c=>!!c).map(c=>c?.id)??[];await a.changePullRequestAssignees({pullRequestId:e.id,assigneeIds:[...l,i]}),await t(),await(0,d.showToast)({style:d.Toast.Style.Success,title:"Added assignee",message:p})}catch(l){await(0,d.showToast)({style:d.Toast.Style.Failure,title:"Failed adding assignee",message:w(l)})}}return(0,C.jsx)(d.ActionPanel.Submenu,{title:"Add Assignee",icon:d.Icon.AddPerson,shortcut:{macOS:{modifiers:["cmd","shift"],key:"a"},Windows:{modifiers:["ctrl","shift"],key:"a"}},onOpen:()=>r(!0),children:u?(0,C.jsx)(d.Action,{title:"Loading\u2026"}):o?.repository?.collaborators?.nodes?.map(i=>{if(!i)return null;let p=W(i);return(0,C.jsx)(d.Action,{title:p.text,icon:p.icon,onAction:()=>s({id:i.id,text:p.text})},i.id)})})}function aS({pullRequest:e,mutate:t}){let{github:a}=x(),[n,r]=(0,fa.useState)(!1),{data:o,isLoading:u}=(0,Aa.useCachedPromise)(async i=>a.repositoryProjectsForPullRequests({owner:i.repository.owner.login,name:i.repository.name,pullRequestNumber:i.number}),[e],{execute:n});async function s({id:i,text:p}){try{await(0,d.showToast)({style:d.Toast.Style.Animated,title:"Adding to project",message:p}),await a.addPullRequestToProject({pullRequestId:e.id,projectId:i}),await t(),await(0,d.showToast)({style:d.Toast.Style.Success,title:"Added to project",message:p})}catch(l){await(0,d.showToast)({style:d.Toast.Style.Failure,title:"Failed adding to project",message:w(l)})}}return(0,C.jsx)(d.ActionPanel.Submenu,{title:"Add to Project",icon:{source:"project.svg",tintColor:d.Color.PrimaryText},shortcut:{macOS:{modifiers:["cmd","shift"],key:"p"},Windows:{modifiers:["ctrl","shift"],key:"p"}},onOpen:()=>r(!0),children:u?(0,C.jsx)(d.Action,{title:"Loading\u2026"}):o?.repository?.projectsV2.nodes?.map(i=>i?(0,C.jsx)(d.Action,{title:i.title,onAction:()=>s({id:i.id,text:i.title})},i.id):null)})}function rS({pullRequest:e,mutate:t}){let{github:a}=x(),[n,r]=(0,fa.useState)(!1),{data:o,isLoading:u}=(0,Aa.useCachedPromise)(async p=>a.milestonesForRepository({owner:p.repository.owner.login,name:p.repository.name}),[e],{execute:n});async function s(){try{await(0,d.showToast)({style:d.Toast.Style.Animated,title:"Removing milestone"}),await a.changePullRequestMilestone({pullRequestId:e.id,milestoneId:null}),await t(),await(0,d.showToast)({style:d.Toast.Style.Success,title:"Removed milestone"})}catch(p){await(0,d.showToast)({style:d.Toast.Style.Failure,title:"Failed removing milestone",message:w(p)})}}async function i({id:p,text:l}){try{await(0,d.showToast)({style:d.Toast.Style.Animated,title:"Setting milestone",message:l}),await a.changePullRequestMilestone({pullRequestId:e.id,milestoneId:p}),await t(),await(0,d.showToast)({style:d.Toast.Style.Success,title:"Milestone set",message:l})}catch(c){await(0,d.showToast)({style:d.Toast.Style.Failure,title:"Failed setting milestone",message:w(c)})}}return(0,C.jsx)(d.ActionPanel.Submenu,{title:"Set Milestone",icon:{source:"milestone.svg",tintColor:d.Color.PrimaryText},shortcut:{macOS:{modifiers:["cmd","shift"],key:"m"},Windows:{modifiers:["ctrl","shift"],key:"m"}},onOpen:()=>r(!0),children:u?(0,C.jsx)(d.Action,{title:"Loading\u2026"}):(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(d.Action,{title:"No Milestone",onAction:()=>s()}),o?.repository?.milestones?.nodes?.map(p=>p?(0,C.jsx)(d.Action,{title:p.title,onAction:()=>i({id:p.id,text:p.title}),autoFocus:e.milestone?.id===p.id},p.id):null)]})})}function nS({pullRequest:e}){let{github:t}=x(),{data:a,isLoading:n}=(0,Aa.useCachedPromise)(async r=>{let s=(await t.commentsForPullRequest({owner:r.repository.owner.login,name:r.repository.name,number:r.number}))?.repository?.pullRequest?.comments.nodes?.filter(l=>l?.author?.login==="vercel");return s?.length?s.pop()?.body?.match(/\[Visit Preview\]\([^)]+\)/)?.[0]?.replace("[Visit Preview](","").replace(")","")??void 0:void 0},[e]);return(0,C.jsx)(C.Fragment,{children:n?(0,C.jsx)(d.Action,{title:"Loading\u2026"}):a&&(0,C.jsx)(d.Action.OpenInBrowser,{title:"Open Vercel Preview",shortcut:{macOS:{modifiers:["cmd","shift"],key:"v"},Windows:{modifiers:["ctrl","shift"],key:"v"}},url:a,icon:{source:"vercel.svg",tintColor:d.Color.PrimaryText}})})}var F=require("@raycast/api"),ku=_($()),ju=require("date-fns");var z=require("react/jsx-runtime");function fo({initialPullRequest:e,mutateList:t}){let{github:a}=x(),n=Gt(),{data:r,isLoading:o,mutate:u}=(0,ku.useCachedPromise)(async S=>(await a.pullRequestDetails({nodeId:S})).node,[e.id],{initialData:e}),s=`# ${r.title}`;r?.body&&(s+=`

${r.body}`);let i=Ja(r),p=Xr(r.commits.nodes?.[0]?.commit.statusCheckRollup?.state),l=en(r),c=yu(r);return(0,z.jsx)(F.Detail,{isLoading:o,markdown:s,navigationTitle:`#${r.number}`,metadata:(0,z.jsxs)(F.Detail.Metadata,{children:[(0,z.jsx)(F.Detail.Metadata.Label,{title:"Repository",text:r.repository.nameWithOwner}),(0,z.jsxs)(F.Detail.Metadata.TagList,{title:"Status",children:[(0,z.jsx)(F.Detail.Metadata.TagList.Item,{...i}),r.autoMergeRequest&&(0,z.jsx)(F.Detail.Metadata.TagList.Item,{text:"Auto-merge",color:F.Color.Yellow})]}),p?(0,z.jsx)(F.Detail.Metadata.Label,{title:"Checks",text:p.text,icon:F.Icon[p.icon]}):null,(0,z.jsx)(F.Detail.Metadata.Label,{title:"From",text:r.headRef?.name??r.headRefName}),r.baseRef?(0,z.jsx)(F.Detail.Metadata.Label,{title:"Into",text:r.baseRef?.name??r.baseRefName}):null,r.additions&&r.deletions?(0,z.jsx)(F.Detail.Metadata.Label,{title:"Code Changes",text:`+${r.additions}  -${r.deletions}`}):null,r.createdAt?(0,z.jsx)(F.Detail.Metadata.Label,{title:"Created",text:(0,ju.format)(new Date(r.createdAt),"dd MMM")}):null,(0,z.jsx)(F.Detail.Metadata.Label,{title:"Author",...l}),c.length>0?(0,z.jsx)(F.Detail.Metadata.TagList,{title:Ne(c.length,"Reviewer"),children:c.map(S=>S?(0,z.jsx)(F.Detail.Metadata.TagList.Item,{...S},S.id):null)}):null,r.assignees&&r.assignees.totalCount>0?(0,z.jsx)(F.Detail.Metadata.TagList,{title:Ne(r.assignees.totalCount,"Assignee"),children:r.assignees.nodes?.map(S=>{if(!S)return null;let g=W(S);return(0,z.jsx)(F.Detail.Metadata.TagList.Item,{...g},S.id)})}):null,r.labels&&r.labels.totalCount>0?(0,z.jsx)(F.Detail.Metadata.TagList,{title:Ne(r.labels.totalCount,"Label"),children:r.labels.nodes?.map(S=>S?(0,z.jsx)(F.Detail.Metadata.TagList.Item,{text:S.name,color:S.color},S.id):null)}):null,r.projectsV2&&r.projectsV2.totalCount>0?(0,z.jsx)(F.Detail.Metadata.TagList,{title:Ne(r.projectsV2.totalCount,"Project"),children:r.projectsV2.nodes?.map(S=>S?(0,z.jsx)(F.Detail.Metadata.TagList.Item,{text:S.title},S.id):null)}):null,r.milestone?(0,z.jsx)(F.Detail.Metadata.Label,{title:"Milestone",text:r.milestone.title}):null]}),actions:(0,z.jsx)(tr,{pullRequest:r,viewer:n,mutateList:t,mutateDetail:u})})}var ar=require("react/jsx-runtime");function Po({pullRequest:e,viewer:t,mutateList:a,sortQuery:n,setSortQuery:r,showAuthor:o=!1}){let u=new Date(e.updatedAt),s=(0,zu.useMemo)(()=>du(e),[e]),i=o?en(e):null,p=Ja(e),l=gu(e.reviewDecision),c=[{text:(0,Ao.format)(u,"MMM dd"),tooltip:`Updated: ${(0,Ao.format)(u,"EEEE d MMMM yyyy 'at' HH:mm")}`}];if(c.unshift({text:{value:`${s}`,color:s>0?_e.Color.PrimaryText:_e.Color.SecondaryText},icon:_e.Icon.Bubble}),c.unshift(l??{icon:{source:_e.Icon.Circle,tintColor:_e.Color.SecondaryText},tooltip:"No review requested"}),e.repository.autoMergeAllowed&&e.autoMergeRequest&&c.unshift({tag:{value:"Auto-merge",color:_e.Color.Yellow}}),e.commits.nodes){let g=e.commits.nodes[0]?.commit.statusCheckRollup?.state,y=g?tn(g):null;y&&c.unshift(y)}i&&c.splice(c.length-1,0,{icon:i.icon,tooltip:`Author: ${i.text}`});let S=[`${e.number}`];return e.author?.login&&S.push(e.author.login),(0,ar.jsx)(_e.List.Item,{title:e.title,subtitle:{value:`#${e.number}`,tooltip:`Repository: ${e.repository.nameWithOwner}`},icon:{value:p.icon,tooltip:`Status: ${p.text}`},keywords:S,accessories:c,actions:(0,ar.jsx)(tr,{pullRequest:e,viewer:t,mutateList:a,sortQuery:n,setSortQuery:r,children:(0,ar.jsx)(_e.Action.Push,{title:"Show Details",icon:_e.Icon.Sidebar,target:(0,ar.jsx)(fo,{initialPullRequest:e,viewer:t,mutateList:a})})})},e.id)}var ke=require("react/jsx-runtime"),oS=20;function iS(e){return(0,ke.jsxs)(be.List.Dropdown,{tooltip:"Status",value:e.value,onChange:t=>e.onChange(t),children:[(0,ke.jsx)(be.List.Dropdown.Item,{value:"open",title:"Open",icon:{source:"pull-request-open.svg",tintColor:be.Color.Green}}),(0,ke.jsx)(be.List.Dropdown.Item,{value:"merged",title:"Merged",icon:{source:"pull-request-merged.svg",tintColor:be.Color.Purple}}),(0,ke.jsx)(be.List.Dropdown.Item,{value:"draft",title:"Draft",icon:{source:"pull-request-draft.svg",tintColor:be.Color.SecondaryText}}),(0,ke.jsx)(be.List.Dropdown.Item,{value:"closed",title:"Closed",icon:{source:"pull-request-closed.svg",tintColor:be.Color.Red}}),(0,ke.jsx)(be.List.Dropdown.Item,{value:"all",title:"All",icon:{source:"pull-request-open.svg",tintColor:be.Color.PrimaryText}})]})}function $u(e){let{github:t}=x(),[a,n]=(0,Hu.useState)(""),[r,o]=(0,rr.useCachedState)("status-filter","open",{cacheNamespace:"github-repo-pr"}),[u,s]=(0,rr.useCachedState)("sort-query",mu,{cacheNamespace:"github-repo-pr"}),i=r==="all"?"":`is:${r}`,{data:p,isLoading:l,mutate:c,pagination:S}=(0,rr.useCachedPromise)((y,M,m,b)=>async R=>{let A=y&&y.length>0?`repo:${y}`:"",f=await t.searchPullRequests({query:`is:pr ${b} ${A} ${m} archived:false ${M}`.replace(/\s+/g," ").trim(),numberOfItems:oS,after:R.page>0?R.cursor:void 0});return{data:f.search.edges?.map(E=>E?.node).filter(E=>E!=null)??[],hasMore:f.search.pageInfo.hasNextPage,cursor:f.search.pageInfo.endCursor??void 0}},[e.repo,a,u,i]),g=rt(p??[]);return(0,ke.jsx)(be.List,{isLoading:l,onSearchTextChange:n,navigationTitle:e.repo,throttle:!0,pagination:S,searchBarAccessory:(0,ke.jsx)(iS,{value:r,onChange:o}),children:(0,ke.jsx)(be.List.Section,{title:"Pull Requests",subtitle:`${g.length}`,children:g.map(y=>(0,ke.jsx)(Po,{showAuthor:!0,pullRequest:y,mutateList:c,sortQuery:u,setSortQuery:s},y.id))})})}var Wt=require("@raycast/api");var Gu=_($());var sS=/\.(md|markdown|mdown|mkdn?)$/i;function Qu(e){let{octokit:t}=x(),[a,n]=e.nameWithOwner.split("/");return(0,Gu.useCachedPromise)(async(r,o)=>{try{let{data:u}=await t.repos.getReadme({owner:r,repo:o});if(u.encoding!=="base64"||!u.content)return{markdown:"> This README is too large to preview here. Open the repository in your browser to read it.",found:!0};let s=Buffer.from(u.content,"base64").toString("utf-8");return{markdown:sS.test(u.name)?iu(s,u.download_url??"",u.path):`\`\`\`
${s}
\`\`\``,found:!0}}catch(u){if(u.status===404)return{markdown:"",found:!1};throw u}},[a,n])}var Pa=require("react/jsx-runtime");function Eo({repository:e}){let{data:t,isLoading:a}=Qu(e),n=t&&!t.found?`# ${e.nameWithOwner}

> This repository doesn't have a README.`:t?.markdown??"";return(0,Pa.jsx)(Wt.Detail,{isLoading:a,navigationTitle:`${e.nameWithOwner} \xB7 README`,markdown:n,actions:(0,Pa.jsxs)(Wt.ActionPanel,{title:e.nameWithOwner,children:[(0,Pa.jsx)(Wt.Action.OpenInBrowser,{url:e.url}),(0,Pa.jsx)(Wt.Action.CopyToClipboard,{content:e.url,title:"Copy Repository URL"})]})})}var fe=require("@raycast/api"),Wu=_($());var Qe=require("react/jsx-runtime"),uS=25;function ho(e){let{github:t}=x(),[a,n]=e.repository.nameWithOwner.split("/"),{data:r,isLoading:o,pagination:u}=(0,Wu.useCachedPromise)((i,p)=>async l=>{let S=(await t.repositoryReleases({owner:i,name:p,numberOfItems:uS,after:l.page>0?l.cursor:void 0})).repository?.releases;return{data:S?.nodes?.filter(g=>g!=null)??[],hasMore:S?.pageInfo?.hasNextPage??!1,cursor:S?.pageInfo?.endCursor??void 0}},[a,n]),s=rt(r??[]);return(0,Qe.jsx)(fe.List,{isLoading:o,navigationTitle:e.repository.nameWithOwner,pagination:u,children:s.map(i=>(0,Qe.jsx)(fe.List.Item,{title:i.name||i.tagName,subtitle:i.tagName,actions:(0,Qe.jsxs)(fe.ActionPanel,{title:i.tagName,children:[i.description&&(0,Qe.jsx)(fe.Action.Push,{icon:fe.Icon.Eye,title:"View Release Detail",target:(0,Qe.jsx)(pS,{release:i})}),(0,Qe.jsx)(fe.Action.OpenInBrowser,{url:i.url})]}),accessories:i.publishedAt?[{date:new Date(i.publishedAt),tooltip:`Published at: ${new Date(i.publishedAt).toLocaleString()}`}]:void 0},i.id))})}function pS(e){return(0,Qe.jsx)(fe.Detail,{markdown:e.release.description,actions:(0,Qe.jsx)(fe.ActionPanel,{title:e.release.tagName,children:(0,Qe.jsx)(fe.Action.OpenInBrowser,{url:e.release.url})})})}var v=require("react/jsx-runtime");function Co({repository:e,mutateList:t,onVisit:a,onUpdate:n,onRemove:r,setSortQuery:o,sortQuery:u,sortTypesData:s}){let{github:i}=x(),{baseClonePath:p,repositoryCloneProtocol:l,application:c}=(0,P.getPreferenceValues)(),{vscodeBuild:S}=(0,P.getPreferenceValues)(),g=S||"vscode";function y(b){let R={...e,viewerHasStarred:b,stargazerCount:Math.max(0,e.stargazerCount+(b?1:-1))};return n?.(R),R}async function M(){await(0,P.showToast)({style:P.Toast.Style.Animated,title:"Starring repository",message:e.name});try{await i.addStar({repositoryId:e.id});let b=y(!0);await t(void 0,{optimisticUpdate(R){return Array.isArray(R)?R.map(A=>A.id===b.id?{...A,...b}:A):R}}),await(0,P.showToast)({style:P.Toast.Style.Success,title:"Starred repository",message:e.name})}catch(b){await(0,P.showToast)({style:P.Toast.Style.Failure,title:"Failed starring repository",message:w(b)})}}async function m(){await(0,P.showToast)({style:P.Toast.Style.Animated,title:"Removing star from repository",message:e.name});try{await i.removeStar({repositoryId:e.id});let b=y(!1);await t(void 0,{optimisticUpdate(R){return Array.isArray(R)?R.map(A=>A.id===b.id?{...A,...b}:A):R}}),await(0,P.showToast)({style:P.Toast.Style.Success,title:"Removed star from repository",message:e.name})}catch(b){await(0,P.showToast)({style:P.Toast.Style.Failure,title:"Failed removing star from repository",message:w(b)})}}return(0,v.jsxs)(P.ActionPanel,{title:e.nameWithOwner,children:[(0,v.jsxs)(P.ActionPanel.Section,{children:[(0,v.jsx)(P.Action.OpenInBrowser,{url:e.url,onOpen:()=>a(e)}),(0,v.jsx)(P.ActionPanel.Submenu,{icon:P.Icon.Globe,title:"Open in Web IDE",shortcut:P.Keyboard.Shortcut.Common.Open,children:Ws.map(b=>(0,v.jsx)(P.Action.OpenInBrowser,{title:b.title,icon:b.icon||(0,Ku.getFavicon)(b.baseUrl),url:b.baseUrl+e.nameWithOwner,shortcut:b.shortcut,onOpen:()=>a(e)},b.title))}),p&&c&&(0,v.jsx)(P.Action,{icon:P.Icon.Terminal,title:"Clone and Open (Default Path)",onAction:()=>{a(e),Ks(e)},shortcut:P.Keyboard.Shortcut.Common.CopyName}),(0,v.jsx)(P.Action.Push,{icon:P.Icon.Terminal,title:"Clone with Options (Choose Path)",target:(0,v.jsx)(so,{repository:e}),shortcut:{macOS:{modifiers:["cmd","opt","shift"],key:"c"},Windows:{modifiers:["ctrl","alt","shift"],key:"c"}},onPush:()=>a(e)}),(0,v.jsx)(P.Action.Push,{icon:P.Icon.Download,title:"Download as ZIP",target:(0,v.jsx)(po,{repository:e}),shortcut:{macOS:{modifiers:["cmd","shift"],key:"d"},Windows:{modifiers:["ctrl","shift"],key:"d"}},onPush:()=>a(e)}),(0,v.jsx)(P.Action.OpenInBrowser,{icon:{source:"vscode.svg",tintColor:P.Color.PrimaryText},title:"Clone in VS Code",url:`${g}://vscode.git/clone?url=${e.url}`,shortcut:P.Keyboard.Shortcut.Common.Copy,onOpen:()=>a(e)}),e.viewerHasStarred?(0,v.jsx)(P.Action,{title:"Unstar",icon:P.Icon.Star,onAction:m,shortcut:P.Keyboard.Shortcut.Common.Pin}):(0,v.jsx)(P.Action,{title:"Star",icon:{source:"star-filled.svg",tintColor:P.Color.PrimaryText},onAction:M,shortcut:P.Keyboard.Shortcut.Common.Pin})]}),(0,v.jsxs)(P.ActionPanel.Section,{title:"Open in Raycast",children:[(0,v.jsx)(P.Action.Push,{title:"Show Readme",icon:P.Icon.Book,shortcut:{macOS:{modifiers:["cmd","opt"],key:"r"},Windows:{modifiers:["ctrl","alt"],key:"r"}},target:(0,v.jsx)(Eo,{repository:e}),onPush:()=>a(e)}),(0,v.jsx)(P.Action.Push,{title:"Show Issues",icon:{source:"issue-open.svg",tintColor:P.Color.PrimaryText},shortcut:{macOS:{modifiers:["cmd"],key:"i"},Windows:{modifiers:["ctrl"],key:"i"}},target:(0,v.jsx)(Lu,{repo:e.nameWithOwner}),onPush:()=>a(e)}),(0,v.jsx)(P.Action.Push,{title:"Show Pull Requests",icon:{source:"pull-request-open.svg",tintColor:P.Color.PrimaryText},shortcut:{macOS:{modifiers:["cmd"],key:"m"},Windows:{modifiers:["ctrl"],key:"m"}},target:(0,v.jsx)($u,{repo:e.nameWithOwner}),onPush:()=>a(e)}),(0,v.jsx)(P.Action.Push,{icon:P.Icon.List,title:"Show Releases",shortcut:{macOS:{modifiers:["cmd","shift"],key:"r"},Windows:{modifiers:["ctrl","shift"],key:"r"}},target:(0,v.jsx)(ho,{repository:e}),onPush:()=>a(e)}),(0,v.jsx)(P.Action.Push,{icon:P.Icon.SpeechBubble,title:"Show Discussions",shortcut:{macOS:{modifiers:["cmd","ctrl","opt"],key:"d"},Windows:{modifiers:["ctrl","alt"],key:"d"}},target:(0,v.jsx)(hu,{repository:e.nameWithOwner}),onPush:()=>a(e)})]}),(0,v.jsxs)(P.ActionPanel.Section,{title:"Open in Browser",children:[(0,v.jsx)(P.Action.OpenInBrowser,{icon:{source:"pull-request-open.svg",tintColor:P.Color.PrimaryText},title:"Open Pull Requests",url:`${e.url}/pulls`,shortcut:{macOS:{modifiers:["cmd","shift"],key:"m"},Windows:{modifiers:["ctrl","shift"],key:"m"}},onOpen:()=>a(e)}),(0,v.jsx)(P.Action.OpenInBrowser,{icon:{source:"issue-open.svg",tintColor:P.Color.PrimaryText},title:"Open Issues",url:`${e.url}/issues`,shortcut:{macOS:{modifiers:["cmd","shift"],key:"i"},Windows:{modifiers:["ctrl","shift"],key:"i"}},onOpen:()=>a(e)}),(0,v.jsx)(P.Action.OpenInBrowser,{icon:{source:"book.svg",tintColor:P.Color.PrimaryText},title:"Open Wiki",url:`${e.url}/wiki`,shortcut:{macOS:{modifiers:["cmd","shift"],key:"w"},Windows:{modifiers:["ctrl","shift"],key:"w"}},onOpen:()=>a(e)}),(0,v.jsx)(P.Action.OpenInBrowser,{icon:{source:"project.svg",tintColor:P.Color.PrimaryText},title:"Open Projects",url:`${e.url}/projects`,shortcut:{macOS:{modifiers:["cmd","shift","opt"],key:"p"},Windows:{modifiers:["ctrl","shift","alt"],key:"p"}},onOpen:()=>a(e)}),(0,v.jsx)(P.Action.OpenInBrowser,{icon:P.Icon.SpeechBubble,title:"Open Discussions",url:`${e.url}/discussions`,onOpen:()=>a(e)})]}),(0,v.jsxs)(P.ActionPanel.Section,{children:[(0,v.jsx)(P.Action.CopyToClipboard,{content:e.url,title:"Copy Repository URL",shortcut:P.Keyboard.Shortcut.Common.CopyPath}),(0,v.jsx)(P.Action.CopyToClipboard,{content:au(e.nameWithOwner,l),title:"Copy Clone Command",shortcut:{macOS:{modifiers:["cmd","shift"],key:"."},Windows:{modifiers:["ctrl","shift"],key:"."}}}),(0,v.jsx)(P.Action.CopyToClipboard,{content:e.nameWithOwner,title:"Copy Name with Owner",shortcut:P.Keyboard.Shortcut.Common.CopyName}),(0,v.jsx)(P.Action.CopyToClipboard,{content:e.name,title:"Copy Repository Name"}),(0,v.jsx)(P.Action.CopyToClipboard,{content:e.owner.login,title:"Copy Repository Owner"})]}),(0,v.jsx)(P.ActionPanel.Section,{children:(0,v.jsx)(_t,{data:s,sortQuery:u,setSortQuery:o})}),r?(0,v.jsx)(P.ActionPanel.Section,{children:(0,v.jsx)(P.Action,{title:"Remove from Recently Visited",icon:P.Icon.Trash,style:P.Action.Style.Destructive,shortcut:P.Keyboard.Shortcut.Common.Remove,onAction:()=>r(e)})}):null]})}var Do=require("react/jsx-runtime");function yn({repository:e,mutateList:t,onVisit:a,onUpdate:n,onRemove:r,sortQuery:o,setSortQuery:u,sortTypesData:s}){let i=W(e.owner),p=e.stargazerCount,l=e.pushedAt?new Date(e.pushedAt):e.updatedAt?new Date(e.updatedAt):void 0,c=[],S=e.primaryLanguage,g=l?(0,wt.isToday)(l)?`${(0,wt.differenceInHours)(Date.now(),l)}h`:(0,wt.format)(l,"MMM d"):void 0;if(S||g){let M=[S?.name,g].filter(Boolean),m=[S?`Language: ${S.name}`:void 0,l?`Updated ${(0,wt.formatDistanceToNow)(l,{addSuffix:!0})}`:void 0].filter(Boolean);c.push({text:M.join(" \u2022 "),tooltip:m.join(" \u2022 ")})}e.isArchived&&c.unshift({tag:{value:"",color:Kt.Color.Orange},icon:Kt.Icon.Tray,tooltip:"This repository is archived"}),e.isFork&&c.unshift({icon:{source:"fork.svg",tintColor:Kt.Color.Purple},tooltip:"This repository is a fork"});let y=e.viewerHasStarred?"\u2605":"\u2606";return(0,Do.jsx)(Kt.List.Item,{icon:i.icon,title:e.nameWithOwner,...p>0?{subtitle:{value:`${y} ${p}`,tooltip:e.viewerHasStarred?"Starred \xB7 Number of Stars":"Number of Stars"}}:{},accessories:c,actions:(0,Do.jsx)(Co,{repository:e,onVisit:a,onUpdate:n,onRemove:r,mutateList:t,sortQuery:o,setSortQuery:u,sortTypesData:s})})}var Yu=_($());var Ju=(0,Yu.withAccessToken)(Vs);var Yt=require("react/jsx-runtime");function lS(){let{github:e}=x(),{data:t,visitRepository:a,updateRepository:n,removeRepository:r}=Ys(void 0,null),[o,u]=(0,Sn.useCachedState)("sort-query",Js,{cacheNamespace:"github-my-latest-repo"}),s=oo,{data:i,isLoading:p,mutate:l,pagination:c}=(0,Sn.useCachedPromise)(b=>async({cursor:R})=>{let A=b.split(":")[0].toUpperCase(),f=b.split(":")[1].toUpperCase(),E=await e.myLatestRepositories({numberOfItems:Fs(),after:R,orderByField:A,orderByDirection:f});return{data:Mu(E.viewer.repositories.nodes),hasMore:E.viewer.repositories.pageInfo.hasNextPage,cursor:E.viewer.repositories.pageInfo.endCursor??void 0}},[o],{keepPreviousData:!0}),S=(0,Tt.useMemo)(()=>rt(i??[]),[i]),g=(0,Tt.useMemo)(()=>new Set(S.map(b=>b.id)),[S]);(0,Tt.useEffect)(()=>t.forEach(b=>S.find(R=>R.id===b.id&&a(R))),[S]);let y=(0,Tt.useMemo)(()=>t.filter(b=>g.has(b.id)),[t,g]),M=(0,Tt.useMemo)(()=>new Set(y.map(b=>b.id)),[y]),m=(0,Tt.useMemo)(()=>S.filter(b=>!M.has(b.id)),[M,S]);return(0,Yt.jsxs)(dn.List,{isLoading:p,throttle:!0,pagination:c,children:[(0,Yt.jsx)(dn.List.Section,{title:"Visited Repositories",subtitle:y?String(y.length):void 0,children:y.map(b=>(0,Yt.jsx)(yn,{repository:b,mutateList:l,onVisit:a,onUpdate:n,onRemove:r,sortQuery:o,setSortQuery:u,sortTypesData:s},b.id))}),i?(0,Yt.jsx)(dn.List.Section,{title:"My Latest Repositories",subtitle:`${m.length}`,children:m.map(b=>(0,Yt.jsx)(yn,{repository:b,mutateList:l,onVisit:a,onUpdate:n,sortQuery:o,setSortQuery:u,sortTypesData:s},b.id))}):null]})}var cS=Ju(lS);
