"use strict";var Bs=Object.create;var Ba=Object.defineProperty;var Ls=Object.getOwnPropertyDescriptor;var qs=Object.getOwnPropertyNames;var Ns=Object.getPrototypeOf,Vs=Object.prototype.hasOwnProperty;var kr=(e,t,a)=>()=>{if(a)throw a[0];try{return e&&(t=e(e=0)),t}catch(n){throw a=[n],n}};var _=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(a){throw t=0,a}},Tt=(e,t)=>{for(var a in t)Ba(e,a,{get:t[a],enumerable:!0})},Oa=(e,t,a,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of qs(t))!Vs.call(e,r)&&r!==a&&Ba(e,r,{get:()=>t[r],enumerable:!(n=Ls(t,r))||n.enumerable});return e},ce=(e,t,a)=>(Oa(e,t,"default"),a&&Oa(a,t,"default")),B=(e,t,a)=>(a=e!=null?Bs(Ns(e)):{},Oa(t||!e||!e.__esModule?Ba(a,"default",{value:e,enumerable:!0}):a,e)),ks=e=>Oa(Ba({},"__esModule",{value:!0}),e);var Hn=_(La=>{"use strict";Object.defineProperty(La,"__esModule",{value:!0});La.useDeepMemo=void 0;var Fr=require("react"),Fs=require("dequal/lite");function js(e){let t=(0,Fr.useRef)(e),a=(0,Fr.useRef)(0);return(0,Fs.dequal)(e,t.current)||(t.current=e,a.current+=1),(0,Fr.useMemo)(()=>t.current,[a.current])}La.useDeepMemo=js});var We=_(qa=>{"use strict";Object.defineProperty(qa,"__esModule",{value:!0});qa.useLatest=void 0;var zs=require("react");function Hs(e){let t=(0,zs.useRef)(e);return t.current=e,t}qa.useLatest=Hs});var ra=_(Le=>{"use strict";var Gs=Le&&Le.__createBinding||(Object.create?(function(e,t,a,n){n===void 0&&(n=a);var r=Object.getOwnPropertyDescriptor(t,a);(!r||("get"in r?!t.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,r)}):(function(e,t,a,n){n===void 0&&(n=a),e[n]=t[a]})),$s=Le&&Le.__setModuleDefault||(Object.create?(function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}):function(e,t){e.default=t}),$n=Le&&Le.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var a in e)a!=="default"&&Object.prototype.hasOwnProperty.call(e,a)&&Gs(t,e,a);return $s(t,e),t};Object.defineProperty(Le,"__esModule",{value:!0});Le.showFailureToast=void 0;var Qs=$n(require("fs")),Ws=$n(require("path")),wt=require("@raycast/api");function Ks(e,t){let a=e instanceof Error?e.message:String(e);return(0,wt.showToast)({style:wt.Toast.Style.Failure,title:t?.title??"Something went wrong",message:t?.message??a,primaryAction:t?.primaryAction??Gn(e),secondaryAction:t?.primaryAction?Gn(e):void 0})}Le.showFailureToast=Ks;var Gn=e=>{let t=!0,a="[Extension Name]...",n="";try{let u=JSON.parse(Qs.readFileSync(Ws.join(wt.environment.assetsPath,"..","package.json"),"utf8"));a=`[${u.title}]...`,n=`https://raycast.com/${u.owner||u.author}/${u.name}`,(!u.owner||u.access==="public")&&(t=!1)}catch{}let r=wt.environment.isDevelopment||t,o=e instanceof Error?e?.stack||e?.message||"":String(e);return{title:r?"Copy Logs":"Report Error",onAction(u){u.hide(),r?wt.Clipboard.copy(o):(0,wt.open)(`https://github.com/raycast/extensions/issues/new?&labels=extension%2Cbug&template=extension_bug_report.yml&title=${encodeURIComponent(a)}&extension-url=${encodeURI(n)}&description=${encodeURIComponent(`#### Error:
\`\`\`
${o}
\`\`\`
`)}`)}}}});var Ot=_(Na=>{"use strict";Object.defineProperty(Na,"__esModule",{value:!0});Na.usePromise=void 0;var Me=require("react"),na=require("@raycast/api"),Ys=Hn(),nt=We(),Js=ra();function Zs(e,t,a){let n=(0,Me.useRef)(0),[r,o]=(0,Me.useState)({isLoading:!0}),u=(0,nt.useLatest)(e),i=(0,nt.useLatest)(a?.abortable),s=(0,nt.useLatest)(t||[]),p=(0,nt.useLatest)(a?.onError),l=(0,nt.useLatest)(a?.onData),y=(0,nt.useLatest)(a?.onWillExecute),S=(0,nt.useLatest)(a?.failureToastOptions),m=(0,nt.useLatest)(r.data),d=(0,Me.useRef)(),g=(0,Me.useRef)({page:0}),b=(0,Me.useRef)(!1),I=(0,Me.useRef)(!0),A=(0,Me.useRef)(50),P=(0,Me.useCallback)((...W)=>{let F=++n.current;i.current&&(i.current.current?.abort(),i.current.current=new AbortController),y.current?.(W),o(x=>({...x,isLoading:!0}));let ne=Xs(u.current)(...W);function oe(x){return x.name=="AbortError"||F===n.current&&(p.current?p.current(x):na.environment.launchType!==na.LaunchType.Background&&(0,Js.showFailureToast)(x,{title:"Failed to fetch latest data",primaryAction:{title:"Retry",onAction(X){X.hide(),d.current?.(...s.current||[])}},...S.current}),o({error:x,isLoading:!1})),x}return typeof ne=="function"?(b.current=!0,ne(g.current).then(({data:x,hasMore:X,cursor:U})=>(F===n.current&&(g.current&&(g.current.cursor=U,g.current.lastItem=x?.[x.length-1]),l.current&&l.current(x,g.current),X&&(A.current=x.length),I.current=X,o(ee=>g.current.page===0?{data:x,isLoading:!1}:{data:(ee.data||[])?.concat(x),isLoading:!1})),x),x=>(I.current=!1,oe(x)))):(b.current=!1,ne.then(x=>(F===n.current&&(l.current&&l.current(x),o({data:x,isLoading:!1})),x),oe))},[i,l,p,s,u,o,d,y,g,S]);d.current=P;let M=(0,Me.useCallback)(()=>{g.current={page:0};let W=s.current||[];return P(...W)},[P,s]),h=(0,Me.useCallback)(async(W,F)=>{let ne;try{if(F?.optimisticUpdate){typeof F?.rollbackOnError!="function"&&F?.rollbackOnError!==!1&&(ne=structuredClone(m.current?.value));let oe=F.optimisticUpdate;o(x=>({...x,data:oe(x.data)}))}return await W}catch(oe){if(typeof F?.rollbackOnError=="function"){let x=F.rollbackOnError;o(X=>({...X,data:x(X.data)}))}else F?.optimisticUpdate&&F?.rollbackOnError!==!1&&o(x=>({...x,data:ne}));throw oe}finally{F?.shouldRevalidateAfter!==!1&&(na.environment.launchType===na.LaunchType.Background||na.environment.commandMode==="menu-bar"?await M():M())}},[M,m,o]),C=(0,Me.useCallback)(()=>{g.current.page+=1;let W=s.current||[];P(...W)},[g,s,P]);(0,Me.useEffect)(()=>{g.current={page:0},a?.execute!==!1?P(...t||[]):i.current&&i.current.current?.abort()},[(0,Ys.useDeepMemo)([t,a?.execute,P]),i,g]),(0,Me.useEffect)(()=>()=>{i.current&&i.current.current?.abort()},[i]);let w=a?.execute!==!1?r.isLoading:!1,H={...r,isLoading:w},ae=b.current?{pageSize:A.current,hasMore:I.current,onLoadMore:C}:void 0;return{...H,revalidate:M,mutate:h,pagination:ae}}Na.usePromise=Zs;function Xs(e){return e===Promise.all||e===Promise.race||e===Promise.resolve||e===Promise.reject?e.bind(Promise):e}});var ot=_(qe=>{"use strict";var eu=qe&&qe.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(qe,"__esModule",{value:!0});qe.hash=qe.reviver=qe.replacer=void 0;var tu=eu(require("object-hash"));function au(e,t){let a=this[e];return a instanceof Date?`__raycast_cached_date__${a.toString()}`:Buffer.isBuffer(a)?`__raycast_cached_buffer__${a.toString("base64")}`:t}qe.replacer=au;function ru(e,t){return typeof t=="string"&&t.startsWith("__raycast_cached_date__")?new Date(t.replace("__raycast_cached_date__","")):typeof t=="string"&&t.startsWith("__raycast_cached_buffer__")?Buffer.from(t.replace("__raycast_cached_buffer__",""),"base64"):t}qe.reviver=ru;function nu(e,t){return(0,tu.default)(e,{replacer:a=>a instanceof URLSearchParams?a.toString():a,...t})}qe.hash=nu});var ka=_(Va=>{"use strict";Object.defineProperty(Va,"__esModule",{value:!0});Va.useCachedState=void 0;var jr=require("react"),ou=require("@raycast/api"),zr=We(),Qn=ot(),iu=Symbol("cache without namespace"),Wn=new Map;function su(e,t,a){let n=a?.cacheNamespace||iu,r=Wn.get(n)||Wn.set(n,new ou.Cache({namespace:a?.cacheNamespace})).get(n);if(!r)throw new Error("Missing cache");let o=(0,zr.useLatest)(e),u=(0,zr.useLatest)(t),i=(0,jr.useSyncExternalStore)(r.subscribe,()=>{try{return r.get(o.current)}catch(y){console.error("Could not get Cache data:",y);return}}),s=(0,jr.useMemo)(()=>{if(typeof i<"u"){if(i==="undefined")return;try{return JSON.parse(i,Qn.reviver)}catch(y){return console.warn("The cached data is corrupted",y),u.current}}else return u.current},[i,u]),p=(0,zr.useLatest)(s),l=(0,jr.useCallback)(y=>{let S=typeof y=="function"?y(p.current):y;if(typeof S>"u")r.set(o.current,"undefined");else{let m=JSON.stringify(S,Qn.replacer);r.set(o.current,m)}return S},[r,o,p]);return[s,l]}Va.useCachedState=su});var ia=_(Fa=>{"use strict";Object.defineProperty(Fa,"__esModule",{value:!0});Fa.useCachedPromise=void 0;var oa=require("react"),uu=ka(),pu=Ot(),lu=We(),Kn=ot(),Bt=Symbol();function cu(e,t,a){let{initialData:n,keepPreviousData:r,internal_cacheKeySuffix:o,...u}=a||{},i=(0,oa.useRef)(),[s,p]=(0,uu.useCachedState)((0,Kn.hash)(t||[])+o,Bt,{cacheNamespace:(0,Kn.hash)(e)}),l=(0,oa.useRef)(s!==Bt?s:n),y=(0,oa.useRef)(void 0),{mutate:S,revalidate:m,...d}=(0,pu.usePromise)(e,t||[],{...u,onData(P,M){y.current=M,u.onData&&u.onData(P,M),!(M&&M.page>0)&&(i.current="promise",l.current=P,p(P))}}),g,b=d.pagination;y.current&&y.current.page>0&&d.data?g=d.data:i.current==="promise"?g=l.current:r&&s!==Bt?(g=s,b&&(b.hasMore=!0,b.pageSize=s.length)):r&&s===Bt?g=l.current:s!==Bt?(g=s,b&&(b.hasMore=!0,b.pageSize=s.length)):g=n;let I=(0,lu.useLatest)(g),A=(0,oa.useCallback)(async(P,M)=>{let h;try{if(M?.optimisticUpdate){typeof M?.rollbackOnError!="function"&&M?.rollbackOnError!==!1&&(h=structuredClone(I.current));let C=M.optimisticUpdate(I.current);i.current="cache",l.current=C,p(C)}return await S(P,{shouldRevalidateAfter:M?.shouldRevalidateAfter})}catch(C){if(typeof M?.rollbackOnError=="function"){let w=M.rollbackOnError(I.current);i.current="cache",l.current=w,p(w)}else M?.optimisticUpdate&&M?.rollbackOnError!==!1&&(i.current="cache",l.current=h,p(h));throw C}},[p,S,I,l,i]);return(0,oa.useEffect)(()=>{s!==Bt&&(i.current="cache",l.current=s)},[s]),{data:g,isLoading:d.isLoading,error:d.error,mutate:y.current&&y.current.page>0?S:A,pagination:b,revalidate:m}}Fa.useCachedPromise=cu});var so=_((we,io)=>{"use strict";Object.defineProperty(we,"__esModule",{value:!0});function Vt(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var Te=Vt(require("stream")),Xn=Vt(require("http")),za=Vt(require("url")),eo=Vt(require("whatwg-url")),yu=Vt(require("https")),It=Vt(require("zlib")),du=Te.Readable,Ke=Symbol("buffer"),Hr=Symbol("type"),ua=class e{constructor(){this[Hr]="";let t=arguments[0],a=arguments[1],n=[],r=0;if(t){let u=t,i=Number(u.length);for(let s=0;s<i;s++){let p=u[s],l;p instanceof Buffer?l=p:ArrayBuffer.isView(p)?l=Buffer.from(p.buffer,p.byteOffset,p.byteLength):p instanceof ArrayBuffer?l=Buffer.from(p):p instanceof e?l=p[Ke]:l=Buffer.from(typeof p=="string"?p:String(p)),r+=l.length,n.push(l)}}this[Ke]=Buffer.concat(n);let o=a&&a.type!==void 0&&String(a.type).toLowerCase();o&&!/[^\u0020-\u007E]/.test(o)&&(this[Hr]=o)}get size(){return this[Ke].length}get type(){return this[Hr]}text(){return Promise.resolve(this[Ke].toString())}arrayBuffer(){let t=this[Ke],a=t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength);return Promise.resolve(a)}stream(){let t=new du;return t._read=function(){},t.push(this[Ke]),t.push(null),t}toString(){return"[object Blob]"}slice(){let t=this.size,a=arguments[0],n=arguments[1],r,o;a===void 0?r=0:a<0?r=Math.max(t+a,0):r=Math.min(a,t),n===void 0?o=t:n<0?o=Math.max(t+n,0):o=Math.min(n,t);let u=Math.max(o-r,0),s=this[Ke].slice(r,r+u),p=new e([],{type:arguments[2]});return p[Ke]=s,p}};Object.defineProperties(ua.prototype,{size:{enumerable:!0},type:{enumerable:!0},slice:{enumerable:!0}});Object.defineProperty(ua.prototype,Symbol.toStringTag,{value:"Blob",writable:!1,enumerable:!1,configurable:!0});function te(e,t,a){Error.call(this,e),this.message=e,this.type=t,a&&(this.code=this.errno=a.code),Error.captureStackTrace(this,this.constructor)}te.prototype=Object.create(Error.prototype);te.prototype.constructor=te;te.prototype.name="FetchError";var Wr;try{Wr=require("encoding").convert}catch{}var Je=Symbol("Body internals"),Yn=Te.PassThrough;function K(e){var t=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.size;let r=n===void 0?0:n;var o=a.timeout;let u=o===void 0?0:o;e==null?e=null:to(e)?e=Buffer.from(e.toString()):la(e)||Buffer.isBuffer(e)||(Object.prototype.toString.call(e)==="[object ArrayBuffer]"?e=Buffer.from(e):ArrayBuffer.isView(e)?e=Buffer.from(e.buffer,e.byteOffset,e.byteLength):e instanceof Te||(e=Buffer.from(String(e)))),this[Je]={body:e,disturbed:!1,error:null},this.size=r,this.timeout=u,e instanceof Te&&e.on("error",function(i){let s=i.name==="AbortError"?i:new te(`Invalid response body while trying to fetch ${t.url}: ${i.message}`,"system",i);t[Je].error=s})}K.prototype={get body(){return this[Je].body},get bodyUsed(){return this[Je].disturbed},arrayBuffer(){return Lt.call(this).then(function(e){return e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength)})},blob(){let e=this.headers&&this.headers.get("content-type")||"";return Lt.call(this).then(function(t){return Object.assign(new ua([],{type:e.toLowerCase()}),{[Ke]:t})})},json(){var e=this;return Lt.call(this).then(function(t){try{return JSON.parse(t.toString())}catch(a){return K.Promise.reject(new te(`invalid json response body at ${e.url} reason: ${a.message}`,"invalid-json"))}})},text(){return Lt.call(this).then(function(e){return e.toString()})},buffer(){return Lt.call(this)},textConverted(){var e=this;return Lt.call(this).then(function(t){return Su(t,e.headers)})}};Object.defineProperties(K.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0}});K.mixIn=function(e){for(let t of Object.getOwnPropertyNames(K.prototype))if(!(t in e)){let a=Object.getOwnPropertyDescriptor(K.prototype,t);Object.defineProperty(e,t,a)}};function Lt(){var e=this;if(this[Je].disturbed)return K.Promise.reject(new TypeError(`body used already for: ${this.url}`));if(this[Je].disturbed=!0,this[Je].error)return K.Promise.reject(this[Je].error);let t=this.body;if(t===null)return K.Promise.resolve(Buffer.alloc(0));if(la(t)&&(t=t.stream()),Buffer.isBuffer(t))return K.Promise.resolve(t);if(!(t instanceof Te))return K.Promise.resolve(Buffer.alloc(0));let a=[],n=0,r=!1;return new K.Promise(function(o,u){let i;e.timeout&&(i=setTimeout(function(){r=!0,u(new te(`Response timeout while trying to fetch ${e.url} (over ${e.timeout}ms)`,"body-timeout"))},e.timeout)),t.on("error",function(s){s.name==="AbortError"?(r=!0,u(s)):u(new te(`Invalid response body while trying to fetch ${e.url}: ${s.message}`,"system",s))}),t.on("data",function(s){if(!(r||s===null)){if(e.size&&n+s.length>e.size){r=!0,u(new te(`content size at ${e.url} over limit: ${e.size}`,"max-size"));return}n+=s.length,a.push(s)}}),t.on("end",function(){if(!r){clearTimeout(i);try{o(Buffer.concat(a,n))}catch(s){u(new te(`Could not create Buffer from response body for ${e.url}: ${s.message}`,"system",s))}}})})}function Su(e,t){if(typeof Wr!="function")throw new Error("The package `encoding` must be installed to use the textConverted() function");let a=t.get("content-type"),n="utf-8",r,o;return a&&(r=/charset=([^;]*)/i.exec(a)),o=e.slice(0,1024).toString(),!r&&o&&(r=/<meta.+?charset=(['"])(.+?)\1/i.exec(o)),!r&&o&&(r=/<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(o),r||(r=/<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(o),r&&r.pop()),r&&(r=/charset=(.*)/i.exec(r.pop()))),!r&&o&&(r=/<\?xml.+?encoding=(['"])(.+?)\1/i.exec(o)),r&&(n=r.pop(),(n==="gb2312"||n==="gbk")&&(n="gb18030")),Wr(e,"UTF-8",n).toString()}function to(e){return typeof e!="object"||typeof e.append!="function"||typeof e.delete!="function"||typeof e.get!="function"||typeof e.getAll!="function"||typeof e.has!="function"||typeof e.set!="function"?!1:e.constructor.name==="URLSearchParams"||Object.prototype.toString.call(e)==="[object URLSearchParams]"||typeof e.sort=="function"}function la(e){return typeof e=="object"&&typeof e.arrayBuffer=="function"&&typeof e.type=="string"&&typeof e.stream=="function"&&typeof e.constructor=="function"&&typeof e.constructor.name=="string"&&/^(Blob|File)$/.test(e.constructor.name)&&/^(Blob|File)$/.test(e[Symbol.toStringTag])}function ao(e){let t,a,n=e.body;if(e.bodyUsed)throw new Error("cannot clone body after it is used");return n instanceof Te&&typeof n.getBoundary!="function"&&(t=new Yn,a=new Yn,n.pipe(t),n.pipe(a),e[Je].body=t,n=a),n}function ro(e){return e===null?null:typeof e=="string"?"text/plain;charset=UTF-8":to(e)?"application/x-www-form-urlencoded;charset=UTF-8":la(e)?e.type||null:Buffer.isBuffer(e)||Object.prototype.toString.call(e)==="[object ArrayBuffer]"||ArrayBuffer.isView(e)?null:typeof e.getBoundary=="function"?`multipart/form-data;boundary=${e.getBoundary()}`:e instanceof Te?null:"text/plain;charset=UTF-8"}function no(e){let t=e.body;return t===null?0:la(t)?t.size:Buffer.isBuffer(t)?t.length:t&&typeof t.getLengthSync=="function"&&(t._lengthRetrievers&&t._lengthRetrievers.length==0||t.hasKnownLength&&t.hasKnownLength())?t.getLengthSync():null}function bu(e,t){let a=t.body;a===null?e.end():la(a)?a.stream().pipe(e):Buffer.isBuffer(a)?(e.write(a),e.end()):a.pipe(e)}K.Promise=global.Promise;var oo=/[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/,Kr=/[^\t\x20-\x7e\x80-\xff]/;function sa(e){if(e=`${e}`,oo.test(e)||e==="")throw new TypeError(`${e} is not a legal HTTP header name`)}function Jn(e){if(e=`${e}`,Kr.test(e))throw new TypeError(`${e} is not a legal HTTP header value`)}function qt(e,t){t=t.toLowerCase();for(let a in e)if(a.toLowerCase()===t)return a}var $=Symbol("map"),he=class e{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:void 0;if(this[$]=Object.create(null),t instanceof e){let a=t.raw(),n=Object.keys(a);for(let r of n)for(let o of a[r])this.append(r,o);return}if(t!=null)if(typeof t=="object"){let a=t[Symbol.iterator];if(a!=null){if(typeof a!="function")throw new TypeError("Header pairs must be iterable");let n=[];for(let r of t){if(typeof r!="object"||typeof r[Symbol.iterator]!="function")throw new TypeError("Each header pair must be iterable");n.push(Array.from(r))}for(let r of n){if(r.length!==2)throw new TypeError("Each header pair must be a name/value tuple");this.append(r[0],r[1])}}else for(let n of Object.keys(t)){let r=t[n];this.append(n,r)}}else throw new TypeError("Provided initializer must be an object")}get(t){t=`${t}`,sa(t);let a=qt(this[$],t);return a===void 0?null:this[$][a].join(", ")}forEach(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:void 0,n=Yr(this),r=0;for(;r<n.length;){var o=n[r];let u=o[0],i=o[1];t.call(a,i,u,this),n=Yr(this),r++}}set(t,a){t=`${t}`,a=`${a}`,sa(t),Jn(a);let n=qt(this[$],t);this[$][n!==void 0?n:t]=[a]}append(t,a){t=`${t}`,a=`${a}`,sa(t),Jn(a);let n=qt(this[$],t);n!==void 0?this[$][n].push(a):this[$][t]=[a]}has(t){return t=`${t}`,sa(t),qt(this[$],t)!==void 0}delete(t){t=`${t}`,sa(t);let a=qt(this[$],t);a!==void 0&&delete this[$][a]}raw(){return this[$]}keys(){return Gr(this,"key")}values(){return Gr(this,"value")}[Symbol.iterator](){return Gr(this,"key+value")}};he.prototype.entries=he.prototype[Symbol.iterator];Object.defineProperty(he.prototype,Symbol.toStringTag,{value:"Headers",writable:!1,enumerable:!1,configurable:!0});Object.defineProperties(he.prototype,{get:{enumerable:!0},forEach:{enumerable:!0},set:{enumerable:!0},append:{enumerable:!0},has:{enumerable:!0},delete:{enumerable:!0},keys:{enumerable:!0},values:{enumerable:!0},entries:{enumerable:!0}});function Yr(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"key+value";return Object.keys(e[$]).sort().map(t==="key"?function(n){return n.toLowerCase()}:t==="value"?function(n){return e[$][n].join(", ")}:function(n){return[n.toLowerCase(),e[$][n].join(", ")]})}var Jr=Symbol("internal");function Gr(e,t){let a=Object.create(Zr);return a[Jr]={target:e,kind:t,index:0},a}var Zr=Object.setPrototypeOf({next(){if(!this||Object.getPrototypeOf(this)!==Zr)throw new TypeError("Value of `this` is not a HeadersIterator");var e=this[Jr];let t=e.target,a=e.kind,n=e.index,r=Yr(t,a),o=r.length;return n>=o?{value:void 0,done:!0}:(this[Jr].index=n+1,{value:r[n],done:!1})}},Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));Object.defineProperty(Zr,Symbol.toStringTag,{value:"HeadersIterator",writable:!1,enumerable:!1,configurable:!0});function gu(e){let t=Object.assign({__proto__:null},e[$]),a=qt(e[$],"Host");return a!==void 0&&(t[a]=t[a][0]),t}function Iu(e){let t=new he;for(let a of Object.keys(e))if(!oo.test(a))if(Array.isArray(e[a]))for(let n of e[a])Kr.test(n)||(t[$][a]===void 0?t[$][a]=[n]:t[$][a].push(n));else Kr.test(e[a])||(t[$][a]=[e[a]]);return t}var it=Symbol("Response internals"),Mu=Xn.STATUS_CODES,Ce=class e{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};K.call(this,t,a);let n=a.status||200,r=new he(a.headers);if(t!=null&&!r.has("Content-Type")){let o=ro(t);o&&r.append("Content-Type",o)}this[it]={url:a.url,status:n,statusText:a.statusText||Mu[n],headers:r,counter:a.counter}}get url(){return this[it].url||""}get status(){return this[it].status}get ok(){return this[it].status>=200&&this[it].status<300}get redirected(){return this[it].counter>0}get statusText(){return this[it].statusText}get headers(){return this[it].headers}clone(){return new e(ao(this),{url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected})}};K.mixIn(Ce.prototype);Object.defineProperties(Ce.prototype,{url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}});Object.defineProperty(Ce.prototype,Symbol.toStringTag,{value:"Response",writable:!1,enumerable:!1,configurable:!0});var Ye=Symbol("Request internals"),mu=za.URL||eo.URL,Ru=za.parse,Au=za.format;function $r(e){return/^[a-zA-Z][a-zA-Z\d+\-.]*:/.exec(e)&&(e=new mu(e).toString()),Ru(e)}var fu="destroy"in Te.Readable.prototype;function ja(e){return typeof e=="object"&&typeof e[Ye]=="object"}function Pu(e){let t=e&&typeof e=="object"&&Object.getPrototypeOf(e);return!!(t&&t.constructor.name==="AbortSignal")}var ut=class e{constructor(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n;ja(t)?n=$r(t.url):(t&&t.href?n=$r(t.href):n=$r(`${t}`),t={});let r=a.method||t.method||"GET";if(r=r.toUpperCase(),(a.body!=null||ja(t)&&t.body!==null)&&(r==="GET"||r==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");let o=a.body!=null?a.body:ja(t)&&t.body!==null?ao(t):null;K.call(this,o,{timeout:a.timeout||t.timeout||0,size:a.size||t.size||0});let u=new he(a.headers||t.headers||{});if(o!=null&&!u.has("Content-Type")){let s=ro(o);s&&u.append("Content-Type",s)}let i=ja(t)?t.signal:null;if("signal"in a&&(i=a.signal),i!=null&&!Pu(i))throw new TypeError("Expected signal to be an instanceof AbortSignal");this[Ye]={method:r,redirect:a.redirect||t.redirect||"follow",headers:u,parsedURL:n,signal:i},this.follow=a.follow!==void 0?a.follow:t.follow!==void 0?t.follow:20,this.compress=a.compress!==void 0?a.compress:t.compress!==void 0?t.compress:!0,this.counter=a.counter||t.counter||0,this.agent=a.agent||t.agent}get method(){return this[Ye].method}get url(){return Au(this[Ye].parsedURL)}get headers(){return this[Ye].headers}get redirect(){return this[Ye].redirect}get signal(){return this[Ye].signal}clone(){return new e(this)}};K.mixIn(ut.prototype);Object.defineProperty(ut.prototype,Symbol.toStringTag,{value:"Request",writable:!1,enumerable:!1,configurable:!0});Object.defineProperties(ut.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0}});function Eu(e){let t=e[Ye].parsedURL,a=new he(e[Ye].headers);if(a.has("Accept")||a.set("Accept","*/*"),!t.protocol||!t.hostname)throw new TypeError("Only absolute URLs are supported");if(!/^https?:$/.test(t.protocol))throw new TypeError("Only HTTP(S) protocols are supported");if(e.signal&&e.body instanceof Te.Readable&&!fu)throw new Error("Cancellation of streamed requests with AbortSignal is not supported in node < 8");let n=null;if(e.body==null&&/^(POST|PUT)$/i.test(e.method)&&(n="0"),e.body!=null){let o=no(e);typeof o=="number"&&(n=String(o))}n&&a.set("Content-Length",n),a.has("User-Agent")||a.set("User-Agent","node-fetch/1.0 (+https://github.com/bitinn/node-fetch)"),e.compress&&!a.has("Accept-Encoding")&&a.set("Accept-Encoding","gzip,deflate");let r=e.agent;return typeof r=="function"&&(r=r(t)),Object.assign({},t,{method:e.method,headers:gu(a),agent:r})}function Nt(e){Error.call(this,e),this.type="aborted",this.message=e,Error.captureStackTrace(this,this.constructor)}Nt.prototype=Object.create(Error.prototype);Nt.prototype.constructor=Nt;Nt.prototype.name="AbortError";var pa=za.URL||eo.URL,Zn=Te.PassThrough,Cu=function(t,a){let n=new pa(a).hostname,r=new pa(t).hostname;return n===r||n[n.length-r.length-1]==="."&&n.endsWith(r)},hu=function(t,a){let n=new pa(a).protocol,r=new pa(t).protocol;return n===r};function st(e,t){if(!st.Promise)throw new Error("native promise missing, set fetch.Promise to your favorite alternative");return K.Promise=st.Promise,new st.Promise(function(a,n){let r=new ut(e,t),o=Eu(r),u=(o.protocol==="https:"?yu:Xn).request,i=r.signal,s=null,p=function(){let g=new Nt("The user aborted a request.");n(g),r.body&&r.body instanceof Te.Readable&&Qr(r.body,g),!(!s||!s.body)&&s.body.emit("error",g)};if(i&&i.aborted){p();return}let l=function(){p(),m()},y=u(o),S;i&&i.addEventListener("abort",l);function m(){y.abort(),i&&i.removeEventListener("abort",l),clearTimeout(S)}r.timeout&&y.once("socket",function(d){S=setTimeout(function(){n(new te(`network timeout at: ${r.url}`,"request-timeout")),m()},r.timeout)}),y.on("error",function(d){n(new te(`request to ${r.url} failed, reason: ${d.message}`,"system",d)),s&&s.body&&Qr(s.body,d),m()}),Du(y,function(d){i&&i.aborted||s&&s.body&&Qr(s.body,d)}),parseInt(process.version.substring(1))<14&&y.on("socket",function(d){d.addListener("close",function(g){let b=d.listenerCount("data")>0;if(s&&b&&!g&&!(i&&i.aborted)){let I=new Error("Premature close");I.code="ERR_STREAM_PREMATURE_CLOSE",s.body.emit("error",I)}})}),y.on("response",function(d){clearTimeout(S);let g=Iu(d.headers);if(st.isRedirect(d.statusCode)){let M=g.get("Location"),h=null;try{h=M===null?null:new pa(M,r.url).toString()}catch{if(r.redirect!=="manual"){n(new te(`uri requested responds with an invalid redirect URL: ${M}`,"invalid-redirect")),m();return}}switch(r.redirect){case"error":n(new te(`uri requested responds with a redirect, redirect mode is set to error: ${r.url}`,"no-redirect")),m();return;case"manual":if(h!==null)try{g.set("Location",h)}catch(w){n(w)}break;case"follow":if(h===null)break;if(r.counter>=r.follow){n(new te(`maximum redirect reached at: ${r.url}`,"max-redirect")),m();return}let C={headers:new he(r.headers),follow:r.follow,counter:r.counter+1,agent:r.agent,compress:r.compress,method:r.method,body:r.body,signal:r.signal,timeout:r.timeout,size:r.size};if(!Cu(r.url,h)||!hu(r.url,h))for(let w of["authorization","www-authenticate","cookie","cookie2"])C.headers.delete(w);if(d.statusCode!==303&&r.body&&no(r)===null){n(new te("Cannot follow redirect with body being a readable stream","unsupported-redirect")),m();return}(d.statusCode===303||(d.statusCode===301||d.statusCode===302)&&r.method==="POST")&&(C.method="GET",C.body=void 0,C.headers.delete("content-length")),a(st(new ut(h,C))),m();return}}d.once("end",function(){i&&i.removeEventListener("abort",l)});let b=d.pipe(new Zn),I={url:r.url,status:d.statusCode,statusText:d.statusMessage,headers:g,size:r.size,timeout:r.timeout,counter:r.counter},A=g.get("Content-Encoding");if(!r.compress||r.method==="HEAD"||A===null||d.statusCode===204||d.statusCode===304){s=new Ce(b,I),a(s);return}let P={flush:It.Z_SYNC_FLUSH,finishFlush:It.Z_SYNC_FLUSH};if(A=="gzip"||A=="x-gzip"){b=b.pipe(It.createGunzip(P)),s=new Ce(b,I),a(s);return}if(A=="deflate"||A=="x-deflate"){let M=d.pipe(new Zn);M.once("data",function(h){(h[0]&15)===8?b=b.pipe(It.createInflate()):b=b.pipe(It.createInflateRaw()),s=new Ce(b,I),a(s)}),M.on("end",function(){s||(s=new Ce(b,I),a(s))});return}if(A=="br"&&typeof It.createBrotliDecompress=="function"){b=b.pipe(It.createBrotliDecompress()),s=new Ce(b,I),a(s);return}s=new Ce(b,I),a(s)}),bu(y,r)})}function Du(e,t){let a;e.on("socket",function(n){a=n}),e.on("response",function(n){let r=n.headers;r["transfer-encoding"]==="chunked"&&!r["content-length"]&&n.once("close",function(o){if(a&&a.listenerCount("data")>0&&!o){let i=new Error("Premature close");i.code="ERR_STREAM_PREMATURE_CLOSE",t(i)}})})}function Qr(e,t){e.destroy?e.destroy(t):(e.emit("error",t),e.end())}st.isRedirect=function(e){return e===301||e===302||e===303||e===307||e===308};st.Promise=global.Promise;io.exports=we=st;Object.defineProperty(we,"__esModule",{value:!0});we.default=we;we.Headers=he;we.Request=ut;we.Response=Ce;we.FetchError=te;we.AbortError=Nt});var ya=_((Mt,uo)=>{var ca=so(),xu=ca.default||ca,Ha=function(e,t){return/^\/\//.test(e)&&(e="https:"+e),xu.call(this,e,t)};Ha.ponyfill=!0;uo.exports=Mt=Ha;Mt.fetch=Ha;Mt.Headers=ca.Headers;Mt.Request=ca.Request;Mt.Response=ca.Response;Mt.default=Ha});var Xr=_(Ga=>{"use strict";Object.defineProperty(Ga,"__esModule",{value:!0});Ga.isJSON=void 0;function Uu(e){if(e){let t=vu(e);if(!t)return!1;if(t.subtype==="json"||t.suffix==="json"||t.suffix&&/\bjson\b/i.test(t.suffix)||t.subtype&&/\bjson\b/i.test(t.subtype))return!0}return!1}Ga.isJSON=Uu;var _u=/^([A-Za-z0-9][A-Za-z0-9!#$&^_-]{0,126})\/([A-Za-z0-9][A-Za-z0-9!#$&^_.+-]{0,126});?$/;function vu(e){let t=e.indexOf(";"),a=t!==-1?e.slice(0,t).trim():e.trim(),n=_u.exec(a.toLowerCase().toLowerCase());if(!n)return;let r=n[1],o=n[2],u,i=o.lastIndexOf("+");return i!==-1&&(u=o.substring(i+1),o=o.substring(0,i)),{type:r,subtype:o,suffix:u}}});var yo=_($a=>{"use strict";Object.defineProperty($a,"__esModule",{value:!0});$a.useFetch=void 0;var kt=require("react"),Tu=ia(),po=We(),lo=ya(),wu=Xr(),co=ot();async function Ou(e){if(!e.ok)throw new Error(e.statusText);let t=e.headers.get("content-type");return t&&(0,wu.isJSON)(t)?await e.json():await e.text()}function Bu(e){return{data:e,hasMore:!1}}function Lu(e,t){let{parseResponse:a,mapResult:n,initialData:r,execute:o,keepPreviousData:u,onError:i,onData:s,onWillExecute:p,failureToastOptions:l,...y}=t||{},S={initialData:r,execute:o,keepPreviousData:u,onError:i,onData:s,onWillExecute:p,failureToastOptions:l},m=(0,po.useLatest)(a||Ou),d=(0,po.useLatest)(n||Bu),g=(0,kt.useRef)(),b=(0,kt.useRef)(),I=typeof e=="function"?e({page:0}):void 0;(!g.current||typeof b.current>"u"||b.current!==I)&&(g.current=e),b.current=I;let A=(0,kt.useRef)(),P=(0,kt.useCallback)((C,w)=>async H=>{let ae=await(0,lo.fetch)(C(H),{signal:A.current?.signal,...w}),W=await m.current(ae);return d.current?.(W)},[m,d]),M=(0,kt.useCallback)(async(C,w)=>{let H=await(0,lo.fetch)(C,{signal:A.current?.signal,...w}),ae=await m.current(H);return d.current(ae)?.data},[m,d]),h=(0,kt.useMemo)(()=>b.current?P:M,[b,M,P]);return(0,Tu.useCachedPromise)(h,[g.current,y],{...S,internal_cacheKeySuffix:b.current+(0,co.hash)(d.current)+(0,co.hash)(m.current),abortable:A})}$a.useFetch=Lu});var Qa=_(De=>{"use strict";var qu=De&&De.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(De,"__esModule",{value:!0});De.defaultParsing=De.handleOutput=De.getSpawnedResult=De.getSpawnedPromise=void 0;var Nu=require("node:buffer"),go=qu(require("node:stream")),Vu=require("node:util"),ku=require("signal-exit");function Fu(e,{timeout:t}={}){let a=new Promise((i,s)=>{e.on("exit",(p,l)=>{i({exitCode:p,signal:l,timedOut:!1})}),e.on("error",p=>{s(p)}),e.stdin&&e.stdin.on("error",p=>{s(p)})});if(t===0||t===void 0)return a;let n,r=new Promise((i,s)=>{n=setTimeout(()=>{e.kill("SIGTERM"),s(Object.assign(new Error("Timed out"),{timedOut:!0,signal:"SIGTERM"}))},t)}),o=a.finally(()=>{clearTimeout(n)}),u=(0,ku.onExit)(()=>{e.kill()});return Promise.race([r,o]).finally(()=>u())}De.getSpawnedPromise=Fu;var en=class extends Error{constructor(){super("The output is too big"),this.name="MaxBufferError"}},ju=(0,Vu.promisify)(go.default.pipeline);function zu(e){let{encoding:t}=e,a=t==="buffer",n=new go.default.PassThrough({objectMode:!1});t&&t!=="buffer"&&n.setEncoding(t);let r=0,o=[];return n.on("data",u=>{o.push(u),r+=u.length}),n.getBufferedValue=()=>a?Buffer.concat(o,r):o.join(""),n.getBufferedLength=()=>r,n}async function So(e,t){let a=zu(t);return await new Promise((n,r)=>{let o=u=>{u&&a.getBufferedLength()<=Nu.constants.MAX_LENGTH&&(u.bufferedData=a.getBufferedValue()),r(u)};(async()=>{try{await ju(e,a),n()}catch(u){o(u)}})(),a.on("data",()=>{a.getBufferedLength()>1e3*1e3*80&&o(new en)})}),a.getBufferedValue()}async function bo(e,t){e.destroy();try{return await t}catch(a){return a.bufferedData}}async function Hu({stdout:e,stderr:t},{encoding:a},n){let r=So(e,{encoding:a}),o=So(t,{encoding:a});try{return await Promise.all([n,r,o])}catch(u){return Promise.all([{error:u,exitCode:null,signal:u.signal,timedOut:u.timedOut||!1},bo(e,r),bo(t,o)])}}De.getSpawnedResult=Hu;function Gu(e){let t=typeof e=="string"?`
`:10,a=typeof e=="string"?"\r":13;return e[e.length-1]===t&&(e=e.slice(0,-1)),e[e.length-1]===a&&(e=e.slice(0,-1)),e}function $u(e,t){return e.stripFinalNewline?Gu(t):t}De.handleOutput=$u;var Qu=({timedOut:e,timeout:t,signal:a,exitCode:n})=>e?`timed out after ${t} milliseconds`:a!=null?`was killed with ${a}`:n!=null?`failed with exit code ${n}`:"failed",Wu=({stdout:e,stderr:t,error:a,signal:n,exitCode:r,command:o,timedOut:u,options:i,parentError:s})=>{let l=`Command ${Qu({timedOut:u,timeout:i?.timeout,signal:n,exitCode:r})}: ${o}`,y=a?`${l}
${a.message}`:l,S=[y,t,e].filter(Boolean).join(`
`);return a?a.originalMessage=a.message:a=s,a.message=S,a.shortMessage=y,a.command=o,a.exitCode=r,a.signal=n,a.stdout=e,a.stderr=t,"bufferedData"in a&&delete a.bufferedData,a};function Ku({stdout:e,stderr:t,error:a,exitCode:n,signal:r,timedOut:o,command:u,options:i,parentError:s}){if(a||n!==0||r!==null)throw Wu({error:a,exitCode:n,signal:r,stdout:e,stderr:t,command:u,timedOut:o,options:i,parentError:s});return e}De.defaultParsing=Ku});var Mo=_(Ft=>{"use strict";var Yu=Ft&&Ft.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Ft,"__esModule",{value:!0});Ft.useExec=void 0;var Ju=Yu(require("node:child_process")),Io=require("react"),Zu=ia(),Xu=We(),da=Qa(),ep=/ +/g;function tp(e,t){if(t)return[e,...t];let a=[];for(let n of e.trim().split(ep)){let r=a[a.length-1];r&&r.endsWith("\\")?a[a.length-1]=`${r.slice(0,-1)} ${n}`:a.push(n)}return a}function ap(e,t,a){let{parseOutput:n,input:r,onData:o,onWillExecute:u,initialData:i,execute:s,keepPreviousData:p,onError:l,failureToastOptions:y,...S}=Array.isArray(t)?a||{}:t||{},m={initialData:i,execute:s,keepPreviousData:p,onError:l,onData:o,onWillExecute:u,failureToastOptions:y},d=(0,Io.useRef)(),g=(0,Xu.useLatest)(n||da.defaultParsing),b=(0,Io.useCallback)(async(I,A,P,M)=>{let[h,...C]=tp(I,A),w=[h,...C].join(" "),H={stripFinalNewline:!0,...P,timeout:P?.timeout||1e4,signal:d.current?.signal,encoding:P?.encoding===null?"buffer":P?.encoding||"utf8",env:{PATH:"/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin",...process.env,...P?.env}},ae=Ju.default.spawn(h,C,H),W=(0,da.getSpawnedPromise)(ae,H);M&&ae.stdin.end(M);let[{error:F,exitCode:ne,signal:oe,timedOut:x},X,U]=await(0,da.getSpawnedResult)(ae,H,W),ee=(0,da.handleOutput)(H,X),le=(0,da.handleOutput)(H,U);return g.current({stdout:ee,stderr:le,error:F,exitCode:ne,signal:oe,timedOut:x,command:w,options:H,parentError:new Error})},[g]);return(0,Zu.useCachedPromise)(b,[e,Array.isArray(t)?t:[],S,r],{...m,abortable:d})}Ft.useExec=ap});var fo=_(jt=>{"use strict";var Ka=jt&&jt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(jt,"__esModule",{value:!0});jt.useStreamJSON=void 0;var rp=require("@raycast/api"),mo=Ka(ya()),ga=require("node:fs"),tn=require("node:fs/promises"),Wa=require("node:path"),Ro=require("node:stream/promises"),Sa=require("react"),np=Ka(require("stream-chain")),op=require("stream-json"),ip=Ka(require("stream-json/filters/Pick")),sp=Ka(require("stream-json/streamers/StreamArray")),Ao=Xr(),up=ia(),pp=ot();async function ba(e,t,a){if(typeof e=="object"||e.startsWith("http://")||e.startsWith("https://"))return await lp(e,t,a);if(e.startsWith("file://"))return await cp((0,Wa.normalize)(decodeURIComponent(new URL(e).pathname)),t,a?.signal?a.signal:void 0);throw new Error("Only HTTP(S) or file URLs are supported")}async function lp(e,t,a){let n=await(0,mo.default)(e,a);if(!n.ok)throw new Error("Failed to fetch URL");if(!(0,Ao.isJSON)(n.headers.get("content-type")))throw new Error("URL does not return JSON");if(!n.body)throw new Error("Failed to retrieve expected JSON content: Response body is missing or inaccessible.");await(0,Ro.pipeline)(n.body,(0,ga.createWriteStream)(t),a?.signal?{signal:a.signal}:void 0)}async function cp(e,t,a){await(0,Ro.pipeline)((0,ga.createReadStream)(e),(0,ga.createWriteStream)(t),a?{signal:a}:void 0)}async function yp(e,t,a,n,r){let o=(0,Wa.join)(t,a);try{await(0,tn.stat)(t)}catch{(0,ga.mkdirSync)(t,{recursive:!0}),await ba(e,o,r);return}if(n){await ba(e,o,r);return}let u;try{u=await(0,tn.stat)(o)}catch{await ba(e,o,r);return}if(typeof e=="object"||e.startsWith("http://")||e.startsWith("https://")){let i=await(0,mo.default)(e,{...r,method:"HEAD"});if(!i.ok)throw new Error("Could not fetch URL");if(!(0,Ao.isJSON)(i.headers.get("content-type")))throw new Error("URL does not return JSON");let s=Date.parse(i.headers.get("last-modified")??"");if(u.size===0||Number.isNaN(s)||s>u.mtimeMs){await ba(e,o,r);return}}else if(e.startsWith("file://"))try{(await(0,tn.stat)((0,Wa.normalize)(decodeURIComponent(new URL(e).pathname)))).mtimeMs>u.mtimeMs&&await ba(e,o,r)}catch{throw new Error("Source file could not be read")}else throw new Error("Only HTTP(S) or file URLs are supported")}async function*dp(e,t,a,n,r,o){let u=[],i=new np.default([(0,ga.createReadStream)(e),n?ip.default.withParser({filter:n}):(0,op.parser)(),new sp.default,s=>o?.(s.value)??s.value]);a?.addEventListener("abort",()=>{i.destroy()});try{for await(let s of i){if(a?.aborted)return[];(!r||r(s))&&u.push(s),u.length>=t&&(yield u,u=[])}}catch(s){throw i.destroy(),s}return u.length>0&&(yield u),[]}function Sp(e,t){let{initialData:a,execute:n,keepPreviousData:r,onError:o,onData:u,onWillExecute:i,failureToastOptions:s,dataPath:p,filter:l,transform:y,pageSize:S=20,...m}=t??{},d=(0,Sa.useRef)(),g=(0,Sa.useRef)(),b={initialData:a,execute:n,keepPreviousData:r,onError:o,onData:u,onWillExecute:i,failureToastOptions:s},I=(0,Sa.useRef)(null),A=(0,Sa.useRef)(null),P=(0,Sa.useRef)(!1);return(0,up.useCachedPromise)((M,h,C,w,H,ae)=>async({page:W})=>{let F=(0,pp.hash)(M)+".json",ne=rp.environment.supportPath;if(W===0){A.current?.abort(),A.current=new AbortController;let X=(0,Wa.join)(ne,F),U=!!(d.current&&d.current!==M&&g.current&&g.current===X);d.current=M,g.current=X,await yp(M,ne,F,U,{...C,signal:A.current?.signal}),I.current=dp(X,h,A.current?.signal,w,H,ae)}if(!I.current)return{hasMore:P.current,data:[]};let{value:oe,done:x}=await I.current.next();return P.current=!x,{hasMore:P.current,data:oe??[]}},[e,S,m,p,l,y],b)}jt.useStreamJSON=Sp});var rn=_(Ne=>{"use strict";var an=Ne&&Ne.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Ne,"__esModule",{value:!0});Ne.baseExecuteSQL=Ne.isPermissionError=Ne.PermissionError=void 0;var bp=require("node:fs"),Ya=require("node:fs/promises"),gp=an(require("node:os")),Po=an(require("node:child_process")),Eo=an(require("node:path")),Ja=Qa(),Ip=ot(),Xa=class extends Error{constructor(t){super(t),this.name="PermissionError"}};Ne.PermissionError=Xa;function Mp(e){return e instanceof Error&&e.name==="PermissionError"}Ne.isPermissionError=Mp;async function mp(e,t,a){if(!(0,bp.existsSync)(e))throw new Error("The database does not exist");let n=a?.signal,r,o=Po.default.spawn("sqlite3",["--json","--readonly",e,t],{signal:n}),u=(0,Ja.getSpawnedPromise)(o),[{error:i,exitCode:s,signal:p},l,y]=await(0,Ja.getSpawnedResult)(o,{encoding:"utf-8"},u);if(Za(n),y.match("(5)")||y.match("(14)")){if(!r){let S=Eo.default.join(gp.default.tmpdir(),"useSQL",(0,Ip.hash)(e));await(0,Ya.mkdir)(S,{recursive:!0}),Za(n),r=Eo.default.join(S,"db.db"),await(0,Ya.copyFile)(e,r),await(0,Ya.writeFile)(r+"-shm",""),await(0,Ya.writeFile)(r+"-wal",""),Za(n)}o=Po.default.spawn("sqlite3",["--json","--readonly","--vfs","unix-none",r,t],{signal:n}),u=(0,Ja.getSpawnedPromise)(o),[{error:i,exitCode:s,signal:p},l,y]=await(0,Ja.getSpawnedResult)(o,{encoding:"utf-8"},u),Za(n)}if(i||s!==0||p!==null)throw y.includes("authorization denied")?new Xa("You do not have permission to access the database."):new Error(y||"Unknown error");return JSON.parse(l.trim()||"[]")}Ne.baseExecuteSQL=mp;function Za(e){if(e?.aborted){let t=new Error("aborted");throw t.name="AbortError",t}}});var ho=_(zt=>{"use strict";var Rp=zt&&zt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(zt,"__esModule",{value:!0});zt.useSQL=void 0;var Ve=require("react/jsx-runtime"),ie=require("@raycast/api"),Ap=require("node:fs"),fp=Rp(require("node:os")),er=require("react"),Pp=Ot(),Ep=We(),Cp=ra(),nn=rn();function hp(e,t,a){let{permissionPriming:n,...r}=a||{},[o,u]=(0,er.useState)(),i=(0,Ep.useLatest)(a||{}),s=(0,er.useRef)(),p=(0,er.useCallback)(y=>{console.error(y);let S=y instanceof Error&&y.message.includes("authorization denied")?new nn.PermissionError("You do not have permission to access the database."):y;(0,nn.isPermissionError)(S)?u((0,Ve.jsx)(Dp,{priming:i.current.permissionPriming})):i.current.onError?i.current.onError(S):ie.environment.launchType!==ie.LaunchType.Background&&(0,Cp.showFailureToast)(S,{title:"Cannot query the data"})},[i]),l=(0,er.useMemo)(()=>{if(!(0,Ap.existsSync)(e))throw new Error("The database does not exist");return async(y,S)=>{let m=s.current?.signal;return(0,nn.baseExecuteSQL)(y,S,{signal:m})}},[e]);return{...(0,Pp.usePromise)(l,[e,t],{...r,onError:p}),permissionView:o}}zt.useSQL=hp;var Co=parseInt(fp.default.release().split(".")[0])>=22,on=Co?"Settings":"Preferences";function Dp(e){let t=Co?{title:"Open System Settings -> Privacy",target:"x-apple.systempreferences:com.apple.preference.security?Privacy_AllFiles"}:{title:"Open System Preferences -> Security",target:"x-apple.systempreferences:com.apple.preference.security?Privacy_AllFiles"};return ie.environment.commandMode==="menu-bar"?(0,Ve.jsxs)(ie.MenuBarExtra,{icon:ie.Icon.Warning,title:ie.environment.commandName,children:[(0,Ve.jsx)(ie.MenuBarExtra.Item,{title:"Raycast needs full disk access",tooltip:`You can revert this access in ${on} whenever you want`}),e.priming?(0,Ve.jsx)(ie.MenuBarExtra.Item,{title:e.priming,tooltip:`You can revert this access in ${on} whenever you want`}):null,(0,Ve.jsx)(ie.MenuBarExtra.Separator,{}),(0,Ve.jsx)(ie.MenuBarExtra.Item,{title:t.title,onAction:()=>(0,ie.open)(t.target)})]}):(0,Ve.jsx)(ie.List,{children:(0,Ve.jsx)(ie.List.EmptyView,{icon:{source:{light:"https://raycast.com/uploads/extensions-utils-security-permissions-light.png",dark:"https://raycast.com/uploads/extensions-utils-security-permissions-dark.png"}},title:"Raycast needs full disk access.",description:`${e.priming?e.priming+`
`:""}You can revert this access in ${on} whenever you want.`,actions:(0,Ve.jsx)(ie.ActionPanel,{children:(0,Ve.jsx)(ie.Action.Open,{...t})})})})}});var xo=_(Ht=>{"use strict";Object.defineProperty(Ht,"__esModule",{value:!0});Ht.useForm=Ht.FormValidation=void 0;var Ze=require("react"),Do=We(),un;(function(e){e.Required="required"})(un||(Ht.FormValidation=un={}));function sn(e,t){if(e){if(typeof e=="function")return e(t);if(e===un.Required){let a=typeof t<"u"&&t!==null;if(a)switch(typeof t){case"string":a=t.length>0;break;case"object":Array.isArray(t)?a=t.length>0:t instanceof Date&&(a=t.getTime()>0);break;default:break}if(!a)return"The item is required"}}}function xp(e){let{onSubmit:t,validation:a,initialValues:n={}}=e,[r,o]=(0,Ze.useState)(n),[u,i]=(0,Ze.useState)({}),s=(0,Ze.useRef)({}),p=(0,Do.useLatest)(a||{}),l=(0,Do.useLatest)(t),y=(0,Ze.useCallback)(I=>{s.current[I]?.focus()},[s]),S=(0,Ze.useCallback)(async I=>{let A=!1;for(let[M,h]of Object.entries(p.current)){let C=sn(h,I[M]);C&&(A||(A={},y(M)),A[M]=C)}if(A)return i(A),!1;let P=await l.current(I);return typeof P=="boolean"?P:!0},[p,l,y]),m=(0,Ze.useCallback)((I,A)=>{i(P=>({...P,[I]:A}))},[i]),d=(0,Ze.useCallback)(function(I,A){o(P=>({...P,[I]:typeof A=="function"?A(P[I]):A}))},[o]),g=(0,Ze.useMemo)(()=>new Proxy({},{get(I,A){let P=p.current[A],M=r[A];return{onChange(h){u[A]&&(sn(P,h)||m(A,void 0)),d(A,h)},onBlur(h){let C=sn(P,h.target.value);C&&m(A,C)},error:u[A],id:A,value:typeof M>"u"?null:M,ref:h=>{s.current[A]=h}}}}),[u,p,m,r,s,d]),b=(0,Ze.useCallback)(I=>{i({}),Object.entries(s.current).forEach(([A,P])=>{I?.[A]||P?.reset()}),I&&o(I)},[o,i,s]);return{handleSubmit:S,setValidationError:m,setValue:d,values:r,itemProps:g,focus:y,reset:b}}Ht.useForm=xp});var _o=_(tr=>{"use strict";Object.defineProperty(tr,"__esModule",{value:!0});tr.useAI=void 0;var Uo=require("react"),Up=require("@raycast/api"),_p=Ot();function vp(e,t={}){let{creativity:a,stream:n,model:r,...o}=t,[u,i]=(0,Uo.useState)(""),s=(0,Uo.useRef)(),{isLoading:p,error:l,revalidate:y}=(0,_p.usePromise)(async(S,m,d)=>{i("");let g=Up.AI.ask(S,{creativity:m,model:r,signal:s.current?.signal});d===!1?i(await g):(g.on("data",b=>{i(I=>I+b)}),await g)},[e,a,n],{...o,abortable:s});return{isLoading:p,data:u,error:l,revalidate:y}}tr.useAI=vp});var wo=_(ar=>{"use strict";Object.defineProperty(ar,"__esModule",{value:!0});ar.useFrecencySorting=void 0;var pn=require("react"),vo=We(),Tp=ka(),wp=10,To=1440*60*1e3,Op=Math.log(2)/(wp*To),Bp={Default:100,Embed:0,Bookmark:140};function Lp(e){let t=Date.now(),a=e?e.lastVisited:0,n=e?e.frecency:0,r=(t-a)/To,o=Bp.Default*Math.exp(-Op*r),u=n+o;return{lastVisited:t,frecency:u}}var qp=e=>{if(process.env.NODE_ENV!=="production"&&(typeof e!="object"||!e||!("id"in e)||typeof e.id!="string"))throw new Error("Specify a key function or make sure your items have an 'id' property");return e.id};function Np(e,t){let a=(0,vo.useLatest)(t?.key||qp),n=(0,vo.useLatest)(t?.sortUnvisited),[r,o]=(0,Tp.useCachedState)(`raycast_frecency_${t?.namespace}`,{}),u=(0,pn.useCallback)(async function(l){let y=a.current(l);o(S=>{let m=S[y],d=Lp(m);return{...S,[y]:d}})},[a,o]),i=(0,pn.useCallback)(async function(l){let y=a.current(l);o(S=>{let m={...S};return delete m[y],m})},[a,o]);return{data:(0,pn.useMemo)(()=>e?e.sort((p,l)=>{let y=r[a.current(p)],S=r[a.current(l)];return y&&!S?-1:!y&&S?1:y&&S?S.frecency-y.frecency:n.current?n.current(p,l):0}):[],[r,e,a,n]),visitItem:u,resetRanking:i}}ar.useFrecencySorting=Np});var Lo=_(rr=>{"use strict";Object.defineProperty(rr,"__esModule",{value:!0});rr.useLocalStorage=void 0;var ln=require("@raycast/api"),Oo=ra(),Bo=ot(),Vp=Ot();function kp(e,t){let{data:a,isLoading:n,mutate:r}=(0,Vp.usePromise)(async i=>{let s=await ln.LocalStorage.getItem(i);return typeof s<"u"?JSON.parse(s,Bo.reviver):t},[e]);async function o(i){try{await r(ln.LocalStorage.setItem(e,JSON.stringify(i,Bo.replacer)),{optimisticUpdate(s){return s}})}catch(s){await(0,Oo.showFailureToast)(s,{title:"Failed to set value in local storage"})}}async function u(){try{await r(ln.LocalStorage.removeItem(e),{optimisticUpdate(){}})}catch(i){await(0,Oo.showFailureToast)(i,{title:"Failed to remove value from local storage"})}}return{value:a,setValue:o,removeValue:u,isLoading:n}}rr.useLocalStorage=kp});var Fo=_(Gt=>{"use strict";Object.defineProperty(Gt,"__esModule",{value:!0});Gt.slightlyLighterColor=Gt.slightlyDarkerColor=void 0;function Fp(e){let t=0,a=0,n=0;if(e.length===4)t=parseInt(`${e[1]}${e[1]}`,16),a=parseInt(`${e[2]}${e[2]}`,16),n=parseInt(`${e[3]}${e[3]}`,16);else if(e.length===7)t=parseInt(`${e[1]}${e[2]}`,16),a=parseInt(`${e[3]}${e[4]}`,16),n=parseInt(`${e[5]}${e[6]}`,16);else throw new Error(`Malformed hex color: ${e}`);return{r:t,g:a,b:n}}function jp({r:e,g:t,b:a}){let n=e.toString(16),r=t.toString(16),o=a.toString(16);return n.length===1&&(n=`0${n}`),r.length===1&&(r=`0${r}`),o.length===1&&(o=`0${o}`),`#${n}${r}${o}`}function zp({r:e,g:t,b:a}){e/=255,t/=255,a/=255;let n=Math.min(e,t,a),r=Math.max(e,t,a),o=r-n,u=0,i=0,s=0;return o===0?u=0:r===e?u=(t-a)/o%6:r===t?u=(a-e)/o+2:u=(e-t)/o+4,u=Math.round(u*60),u<0&&(u+=360),s=(r+n)/2,i=o===0?0:o/(1-Math.abs(2*s-1)),i=+(i*100).toFixed(1),s=+(s*100).toFixed(1),{h:u,s:i,l:s}}function Hp({h:e,s:t,l:a}){t/=100,a/=100;let n=(1-Math.abs(2*a-1))*t,r=n*(1-Math.abs(e/60%2-1)),o=a-n/2,u=0,i=0,s=0;return e>=0&&e<60?(u=n,i=r,s=0):e>=60&&e<120?(u=r,i=n,s=0):e>=120&&e<180?(u=0,i=n,s=r):e>=180&&e<240?(u=0,i=r,s=n):e>=240&&e<300?(u=r,i=0,s=n):e>=300&&e<360&&(u=n,i=0,s=r),u=Math.round((u+o)*255),i=Math.round((i+o)*255),s=Math.round((s+o)*255),{r:u,g:i,b:s}}function qo(e){return zp(Fp(e))}function No(e){return jp(Hp(e))}function Vo(e,t,a){return t<a?e<t?t:e>a?a:e:e<a?a:e>t?t:e}var ko=12;function Gp(e){let t=qo(e);return No({h:t.h,s:t.s,l:Vo(t.l-ko,0,100)})}Gt.slightlyDarkerColor=Gp;function $p(e){let t=qo(e);return No({h:t.h,s:t.s,l:Vo(t.l+ko,0,100)})}Gt.slightlyLighterColor=$p});var Ho=_(nr=>{"use strict";Object.defineProperty(nr,"__esModule",{value:!0});nr.getAvatarIcon=void 0;var jo=Fo();function $t(e,t){let a=e.charCodeAt(t);if(Number.isNaN(a))return["",t];if(a<55296||a>57343)return[e.charAt(t),t];if(55296<=a&&a<=56319){if(e.length<=t+1)throw new Error("High surrogate without following low surrogate");let r=e.charCodeAt(t+1);if(56320>r||r>57343)throw new Error("High surrogate without following low surrogate");return[e.charAt(t)+e.charAt(t+1),t+1]}if(t===0)throw new Error("Low surrogate without preceding high surrogate");let n=e.charCodeAt(t-1);if(55296>n||n>56319)throw new Error("Low surrogate without preceding high surrogate");return[e.charAt(t+1),t+1]}var zo=["#DC829A","#D64854","#D47600","#D36CDD","#52A9E4","#7871E8","#70920F","#43B93A","#EB6B3E","#26B795","#D85A9B","#A067DC","#BD9500","#5385D9"];function Qp(e,t){let a=e.trim().split(" "),n;if(a.length==1&&$t(a[0],0)[0])n=$t(a[0],0)[0];else if(a.length>1){let s=$t(a[0],0)[0]||"",p=$t(a[a.length-1],0)[0]??"";n=s+p}else n="";let r;if(t?.background)r=t?.background;else{let s=0,[p,l]=$t(n,0);for(;p;)s+=p.charCodeAt(0),[p,l]=$t(n,l+1);let y=s%zo.length;r=zo[y]}let u=50-0;return`data:image/svg+xml,${`<svg width="100px" height="100px">
  ${t?.gradient!==!1?`<defs>
      <linearGradient id="Gradient" x1="0.25" x2="0.75" y1="0" y2="1">
        <stop offset="0%" stop-color="${(0,jo.slightlyLighterColor)(r)}"/>
        <stop offset="50%" stop-color="${r}"/>
        <stop offset="100%" stop-color="${(0,jo.slightlyDarkerColor)(r)}"/>
      </linearGradient>
  </defs>`:""}
      <circle cx="50" cy="50" r="${u}" fill="${t?.gradient!==!1?"url(#Gradient)":r}" />
      ${n?`<text x="50" y="80" font-size="${u-1}" font-family="Inter, sans-serif" text-anchor="middle" fill="white">${n.toUpperCase()}</text>`:""}
    </svg>
  `.replaceAll(`
`,"")}`}nr.getAvatarIcon=Qp});var $o=_(or=>{"use strict";Object.defineProperty(or,"__esModule",{value:!0});or.getFavicon=void 0;var Go=require("@raycast/api"),Wp=require("url");function Kp(e,t){try{let n=(typeof e=="string"?new Wp.URL(e):e).hostname;return{source:`https://www.google.com/s2/favicons?sz=${t?.size??64}&domain=${n}`,fallback:t?.fallback??Go.Icon.Link,mask:t?.mask}}catch(a){return console.error(a),Go.Icon.Link}}or.getFavicon=Kp});var Ko=_(ir=>{"use strict";Object.defineProperty(ir,"__esModule",{value:!0});ir.getProgressIcon=void 0;var Qo=require("@raycast/api");function Wo(e,t,a,n){let r=(n-90)*Math.PI/180;return{x:e+a*Math.cos(r),y:t+a*Math.sin(r)}}function Yp(e,t,a,n,r){let o=Wo(e,t,a,r),u=Wo(e,t,a,n),i=r-n<=180?"0":"1";return["M",o.x,o.y,"A",a,a,0,i,0,u.x,u.y].join(" ")}function Jp(e,t=Qo.Color.Red,a){let n=a?.background||(Qo.environment.appearance==="light"?"black":"white"),r=a?.backgroundOpacity||.1,o=10,i=50-5-o/2;return`data:image/svg+xml,${`<svg width="100px" height="100px">
      <circle cx="50" cy="50" r="${i}" stroke-width="${o}" stroke="${e<1?n:t}" opacity="${e<1?r:"1"}" fill="none" />
      ${e>0&&e<1?`<path d="${Yp(50,50,i,0,e*360)}" stroke="${t}" stroke-width="${o}" fill="none" />`:""}
    </svg>
  `.replaceAll(`
`,"")}`}ir.getProgressIcon=Jp});var Yo=_(Xe=>{"use strict";var Zp=Xe&&Xe.__createBinding||(Object.create?(function(e,t,a,n){n===void 0&&(n=a);var r=Object.getOwnPropertyDescriptor(t,a);(!r||("get"in r?!t.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,r)}):(function(e,t,a,n){n===void 0&&(n=a),e[n]=t[a]})),cn=Xe&&Xe.__exportStar||function(e,t){for(var a in e)a!=="default"&&!Object.prototype.hasOwnProperty.call(t,a)&&Zp(t,e,a)};Object.defineProperty(Xe,"__esModule",{value:!0});cn(Ho(),Xe);cn($o(),Xe);cn(Ko(),Xe)});var Jo=_(re=>{"use strict";Object.defineProperty(re,"__esModule",{value:!0});re.zoomService=re.slackService=re.linearService=re.jiraService=re.googleService=re.githubService=re.asanaService=void 0;var se=require("@raycast/api"),mt=yn(),sr={asana:"1191201745684312",github:"7235fe8d42157f1f38c0",linear:"c8ff37b9225c3c9aefd7d66ea0e5b6f1",slack:"851756884692.5546927290212"},pt=e=>`data:image/svg+xml,${e}`,Rt={asana:pt('<svg xmlns="http://www.w3.org/2000/svg" width="251" height="232" fill="none"><path fill="#F06A6A" d="M179.383 54.373c0 30.017-24.337 54.374-54.354 54.374-30.035 0-54.373-24.338-54.373-54.374C70.656 24.338 94.993 0 125.029 0c30.017 0 54.354 24.338 54.354 54.373ZM54.393 122.33C24.376 122.33.02 146.668.02 176.685c0 30.017 24.337 54.373 54.373 54.373 30.035 0 54.373-24.338 54.373-54.373 0-30.017-24.338-54.355-54.373-54.355Zm141.253 0c-30.035 0-54.373 24.338-54.373 54.374 0 30.035 24.338 54.373 54.373 54.373 30.017 0 54.374-24.338 54.374-54.373 0-30.036-24.338-54.374-54.374-54.374Z"/></svg>'),github:{source:pt('<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>'),tintColor:se.Color.PrimaryText},google:pt('<svg xmlns="http://www.w3.org/2000/svg" style="display:block" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/><path fill="none" d="M0 0h48v48H0z"/></svg>'),jira:pt('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="2361" height="2500" viewBox="2.59 0 214.091 224"><linearGradient id="a" x1="102.4" x2="56.15" y1="218.63" y2="172.39" gradientTransform="matrix(1 0 0 -1 0 264)" gradientUnits="userSpaceOnUse"><stop offset=".18" stop-color="#0052cc"/><stop offset="1" stop-color="#2684ff"/></linearGradient><linearGradient xlink:href="#a" id="b" x1="114.65" x2="160.81" y1="85.77" y2="131.92"/><path fill="#2684ff" d="M214.06 105.73 117.67 9.34 108.33 0 35.77 72.56 2.59 105.73a8.89 8.89 0 0 0 0 12.54l66.29 66.29L108.33 224l72.55-72.56 1.13-1.12 32.05-32a8.87 8.87 0 0 0 0-12.59zm-105.73 39.39L75.21 112l33.12-33.12L141.44 112z"/><path fill="url(#a)" d="M108.33 78.88a55.75 55.75 0 0 1-.24-78.61L35.62 72.71l39.44 39.44z"/><path fill="url(#b)" d="m141.53 111.91-33.2 33.21a55.77 55.77 0 0 1 0 78.86L181 151.35z"/></svg>'),linear:{source:{light:pt('<svg xmlns="http://www.w3.org/2000/svg" fill="#222326" width="200" height="200" viewBox="0 0 100 100"><path d="M1.22541 61.5228c-.2225-.9485.90748-1.5459 1.59638-.857L39.3342 97.1782c.6889.6889.0915 1.8189-.857 1.5964C20.0515 94.4522 5.54779 79.9485 1.22541 61.5228ZM.00189135 46.8891c-.01764375.2833.08887215.5599.28957165.7606L52.3503 99.7085c.2007.2007.4773.3075.7606.2896 2.3692-.1476 4.6938-.46 6.9624-.9259.7645-.157 1.0301-1.0963.4782-1.6481L2.57595 39.4485c-.55186-.5519-1.49117-.2863-1.648174.4782-.465915 2.2686-.77832 4.5932-.92588465 6.9624ZM4.21093 29.7054c-.16649.3738-.08169.8106.20765 1.1l64.77602 64.776c.2894.2894.7262.3742 1.1.2077 1.7861-.7956 3.5171-1.6927 5.1855-2.684.5521-.328.6373-1.0867.1832-1.5407L8.43566 24.3367c-.45409-.4541-1.21271-.3689-1.54074.1832-.99132 1.6684-1.88843 3.3994-2.68399 5.1855ZM12.6587 18.074c-.3701-.3701-.393-.9637-.0443-1.3541C21.7795 6.45931 35.1114 0 49.9519 0 77.5927 0 100 22.4073 100 50.0481c0 14.8405-6.4593 28.1724-16.7199 37.3375-.3903.3487-.984.3258-1.3542-.0443L12.6587 18.074Z"/></svg>'),dark:pt('<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="200" height="200" viewBox="0 0 100 100"><path d="M1.22541 61.5228c-.2225-.9485.90748-1.5459 1.59638-.857L39.3342 97.1782c.6889.6889.0915 1.8189-.857 1.5964C20.0515 94.4522 5.54779 79.9485 1.22541 61.5228ZM.00189135 46.8891c-.01764375.2833.08887215.5599.28957165.7606L52.3503 99.7085c.2007.2007.4773.3075.7606.2896 2.3692-.1476 4.6938-.46 6.9624-.9259.7645-.157 1.0301-1.0963.4782-1.6481L2.57595 39.4485c-.55186-.5519-1.49117-.2863-1.648174.4782-.465915 2.2686-.77832 4.5932-.92588465 6.9624ZM4.21093 29.7054c-.16649.3738-.08169.8106.20765 1.1l64.77602 64.776c.2894.2894.7262.3742 1.1.2077 1.7861-.7956 3.5171-1.6927 5.1855-2.684.5521-.328.6373-1.0867.1832-1.5407L8.43566 24.3367c-.45409-.4541-1.21271-.3689-1.54074.1832-.99132 1.6684-1.88843 3.3994-2.68399 5.1855ZM12.6587 18.074c-.3701-.3701-.393-.9637-.0443-1.3541C21.7795 6.45931 35.1114 0 49.9519 0 77.5927 0 100 22.4073 100 50.0481c0 14.8405-6.4593 28.1724-16.7199 37.3375-.3903.3487-.984.3258-1.3542-.0443L12.6587 18.074Z" /></svg>')}},slack:pt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="73 73 124 124"><style>.st0{fill:#e01e5a}.st1{fill:#36c5f0}.st2{fill:#2eb67d}.st3{fill:#ecb22e}</style><path d="M99.4 151.2c0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9h12.9v12.9zM105.9 151.2c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v32.3c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9v-32.3z" class="st0"/><path d="M118.8 99.4c-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v12.9h-12.9zM118.8 105.9c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H86.5c-7.1 0-12.9-5.8-12.9-12.9s5.8-12.9 12.9-12.9h32.3z" class="st1"/><path d="M170.6 118.8c0-7.1 5.8-12.9 12.9-12.9 7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9h-12.9v-12.9zM164.1 118.8c0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9V86.5c0-7.1 5.8-12.9 12.9-12.9 7.1 0 12.9 5.8 12.9 12.9v32.3z" class="st2"/><path d="M151.2 170.6c7.1 0 12.9 5.8 12.9 12.9 0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9v-12.9h12.9zM151.2 164.1c-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9h32.3c7.1 0 12.9 5.8 12.9 12.9 0 7.1-5.8 12.9-12.9 12.9h-32.3z" class="st3"/></svg>'),zoom:pt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 351.845 80"><path d="M73.786 78.835H10.88A10.842 10.842 0 0 1 .833 72.122a10.841 10.841 0 0 1 2.357-11.85L46.764 16.7h-31.23C6.954 16.699 0 9.744 0 1.165h58.014c4.414 0 8.357 2.634 10.046 6.712a10.843 10.843 0 0 1-2.356 11.85L22.13 63.302h36.122c8.58 0 15.534 6.955 15.534 15.534Zm278.059-48.544C351.845 13.588 338.256 0 321.553 0c-8.934 0-16.975 3.89-22.524 10.063C293.48 3.89 285.44 0 276.505 0c-16.703 0-30.291 13.588-30.291 30.291v48.544c8.579 0 15.534-6.955 15.534-15.534v-33.01c0-8.137 6.62-14.757 14.757-14.757s14.757 6.62 14.757 14.757v33.01c0 8.58 6.955 15.534 15.534 15.534V30.291c0-8.137 6.62-14.757 14.757-14.757s14.758 6.62 14.758 14.757v33.01c0 8.58 6.954 15.534 15.534 15.534V30.291ZM238.447 40c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.908-40 40-40 40 17.909 40 40Zm-15.534 0c0-13.512-10.954-24.466-24.466-24.466S173.98 26.488 173.98 40s10.953 24.466 24.466 24.466S222.913 53.512 222.913 40Zm-70.68 0c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.909-40 40-40 40 17.909 40 40Zm-15.534 0c0-13.512-10.954-24.466-24.466-24.466S87.767 26.488 87.767 40s10.954 24.466 24.466 24.466S136.699 53.512 136.699 40Z" style="fill:#0b5cff"/></svg>')},Xp=e=>new mt.OAuthService({client:new se.OAuth.PKCEClient({redirectMethod:se.OAuth.RedirectMethod.Web,providerName:"Asana",providerIcon:Rt.asana,providerId:"asana",description:"Connect your Asana account"}),clientId:e.clientId??sr.asana,authorizeUrl:e.authorizeUrl??"https://asana.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://asana.oauth.raycast.com/token",refreshTokenUrl:e.refreshTokenUrl??"https://asana.oauth.raycast.com/refresh-token",scope:e.scope,personalAccessToken:e.personalAccessToken,onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});re.asanaService=Xp;var el=e=>new mt.OAuthService({client:new se.OAuth.PKCEClient({redirectMethod:se.OAuth.RedirectMethod.Web,providerName:"GitHub",providerIcon:Rt.github,providerId:"github",description:"Connect your GitHub account"}),clientId:e.clientId??sr.github,authorizeUrl:e.authorizeUrl??"https://github.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://github.oauth.raycast.com/token",refreshTokenUrl:e.refreshTokenUrl??"https://github.oauth.raycast.com/refresh-token",scope:e.scope,personalAccessToken:e.personalAccessToken,onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});re.githubService=el;var tl=e=>new mt.OAuthService({client:new se.OAuth.PKCEClient({redirectMethod:se.OAuth.RedirectMethod.AppURI,providerName:"Google",providerIcon:Rt.google,providerId:"google",description:"Connect your Google account"}),clientId:e.clientId,authorizeUrl:e.authorizeUrl??"https://accounts.google.com/o/oauth2/v2/auth",tokenUrl:e.tokenUrl??"https://oauth2.googleapis.com/token",refreshTokenUrl:e.tokenUrl,scope:e.scope,personalAccessToken:e.personalAccessToken,bodyEncoding:e.bodyEncoding??"url-encoded",onAuthorize:e.onAuthorize,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});re.googleService=tl;var al=e=>new mt.OAuthService({client:new se.OAuth.PKCEClient({redirectMethod:se.OAuth.RedirectMethod.Web,providerName:"Jira",providerIcon:Rt.jira,providerId:"jira",description:"Connect your Jira account"}),clientId:e.clientId,authorizeUrl:e.authorizeUrl??"https://auth.atlassian.com/authorize",tokenUrl:e.tokenUrl??"https://auth.atlassian.com/oauth/token",refreshTokenUrl:e.refreshTokenUrl,scope:e.scope,personalAccessToken:e.personalAccessToken,onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});re.jiraService=al;var rl=e=>new mt.OAuthService({client:new se.OAuth.PKCEClient({redirectMethod:se.OAuth.RedirectMethod.Web,providerName:"Linear",providerIcon:Rt.linear,providerId:"linear",description:"Connect your Linear account"}),clientId:e.clientId??sr.linear,authorizeUrl:e.authorizeUrl??"https://linear.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://linear.oauth.raycast.com/token",refreshTokenUrl:e.refreshTokenUrl??"https://linear.oauth.raycast.com/refresh-token",scope:e.scope,extraParameters:{actor:"user"},onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});re.linearService=rl;var nl=e=>new mt.OAuthService({client:new se.OAuth.PKCEClient({redirectMethod:se.OAuth.RedirectMethod.Web,providerName:"Slack",providerIcon:Rt.slack,providerId:"slack",description:"Connect your Slack account"}),clientId:e.clientId??sr.slack,authorizeUrl:e.authorizeUrl??"https://slack.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://slack.oauth.raycast.com/token",refreshTokenUrl:e.tokenUrl??"https://slack.oauth.raycast.com/refresh-token",scope:"",extraParameters:{user_scope:e.scope},personalAccessToken:e.personalAccessToken,bodyEncoding:e.tokenUrl?e.bodyEncoding??"url-encoded":"json",onAuthorize:e.onAuthorize,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser??(t=>({access_token:t.authed_user.access_token,scope:t.authed_user.scope}))});re.slackService=nl;var ol=e=>new mt.OAuthService({client:new se.OAuth.PKCEClient({redirectMethod:se.OAuth.RedirectMethod.Web,providerName:"Zoom",providerIcon:Rt.zoom,providerId:"zoom",description:"Connect your Zoom account"}),clientId:e.clientId,authorizeUrl:e.authorizeUrl??"https://zoom.us/oauth/authorize",tokenUrl:e.tokenUrl??"https://zoom.us/oauth/token",refreshTokenUrl:e.refreshTokenUrl,scope:e.scope,personalAccessToken:e.personalAccessToken,bodyEncoding:e.bodyEncoding??"url-encoded",onAuthorize:e.onAuthorize,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});re.zoomService=ol});var yn=_(Qt=>{"use strict";var il=Qt&&Qt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Qt,"__esModule",{value:!0});Qt.OAuthService=void 0;var Zo=il(ya()),At=Jo(),ke=class{constructor(t){this.clientId=t.clientId,this.scope=Array.isArray(t.scope)?t.scope.join(" "):t.scope,this.personalAccessToken=t.personalAccessToken,this.bodyEncoding=t.bodyEncoding,this.client=t.client,this.extraParameters=t.extraParameters,this.authorizeUrl=t.authorizeUrl,this.tokenUrl=t.tokenUrl,this.refreshTokenUrl=t.refreshTokenUrl,this.onAuthorize=t.onAuthorize,this.tokenResponseParser=t.tokenResponseParser??(a=>a),this.tokenRefreshResponseParser=t.tokenRefreshResponseParser??(a=>a),this.authorize=this.authorize.bind(this)}async authorize(){let t=await this.client.getTokens();if(t?.accessToken){if(t.refreshToken&&t.isExpired()){let o=await this.refreshTokens({token:t.refreshToken});if(o)return await this.client.setTokens(o),o.access_token}return t.accessToken}let a=await this.client.authorizationRequest({endpoint:this.authorizeUrl,clientId:this.clientId,scope:this.scope,extraParameters:this.extraParameters}),{authorizationCode:n}=await this.client.authorize(a),r=await this.fetchTokens({authRequest:a,authorizationCode:n});return await this.client.setTokens(r),r.access_token}async fetchTokens({authRequest:t,authorizationCode:a}){let n;if(this.bodyEncoding==="url-encoded"){let u=new URLSearchParams;u.append("client_id",this.clientId),u.append("code",a),u.append("code_verifier",t.codeVerifier),u.append("grant_type","authorization_code"),u.append("redirect_uri",t.redirectURI),n={body:u}}else n={body:JSON.stringify({client_id:this.clientId,code:a,code_verifier:t.codeVerifier,grant_type:"authorization_code",redirect_uri:t.redirectURI}),headers:{"Content-Type":"application/json"}};let r=await(0,Zo.default)(this.tokenUrl,{method:"POST",...n});if(!r.ok){let u=await r.text();throw console.error("fetch tokens error:",u),new Error(`Error while fetching tokens: ${r.status} (${r.statusText})
${u}`)}let o=this.tokenResponseParser(await r.json());return Array.isArray(o.scope)?{...o,scope:o.scope.join(" ")}:o}async refreshTokens({token:t}){let a;if(this.bodyEncoding==="url-encoded"){let r=new URLSearchParams;r.append("client_id",this.clientId),r.append("refresh_token",t),r.append("grant_type","refresh_token"),a={body:r}}else a={body:JSON.stringify({client_id:this.clientId,refresh_token:t,grant_type:"refresh_token"}),headers:{"Content-Type":"application/json"}};let n=await(0,Zo.default)(this.refreshTokenUrl??this.tokenUrl,{method:"POST",...a});if(n.ok){let r=this.tokenRefreshResponseParser(await n.json());return r.refresh_token=r.refresh_token??t,r}else{let r=await n.text();console.error("refresh tokens error:",r),this.client.description=`${this.client.providerName} needs you to sign-in again. Press \u23CE or click the button below to continue.`,await this.client.removeTokens(),await this.authorize()}}};Qt.OAuthService=ke;ke.asana=At.asanaService;ke.github=At.githubService;ke.google=At.googleService;ke.jira=At.jiraService;ke.linear=At.linearService;ke.slack=At.slackService;ke.zoom=At.zoomService});var Xo=_(Wt=>{"use strict";Object.defineProperty(Wt,"__esModule",{value:!0});Wt.getAccessToken=Wt.withAccessToken=void 0;var sl=require("react/jsx-runtime"),ul=require("@raycast/api"),lt=null,ft=null,dn=null,Sn=null,bn=null;function pl(e){return ul.environment.commandMode==="no-view"?t=>async n=>{if(!lt){lt=e.personalAccessToken??await e.authorize(),ft=e.personalAccessToken?"personal":"oauth";let r=(await e.client?.getTokens())?.idToken;e.onAuthorize&&await Promise.resolve(e.onAuthorize({token:lt,type:ft,idToken:r}))}return t(n)}:t=>{let a=n=>{e.personalAccessToken?(lt=e.personalAccessToken,ft="personal"):(dn||(dn=gn(e.authorize())),lt=dn.read(),ft="oauth");let r;return e.client&&(Sn||(Sn=gn(e.client.getTokens())),r=Sn.read()?.idToken),!bn&&e.onAuthorize&&(bn=gn(Promise.resolve(e.onAuthorize({token:lt,type:ft,idToken:r})))),bn?.read(),(0,sl.jsx)(t,{...n})};return a.displayName=`withAccessToken(${t.displayName||t.name})`,a}}Wt.withAccessToken=pl;function ll(){if(!lt||!ft)throw new Error("getAccessToken must be used when authenticated (eg. used inside `withAccessToken`)");return{token:lt,type:ft}}Wt.getAccessToken=ll;function gn(e){let t="pending",a,n=e.then(o=>{t="success",a=o},o=>{t="error",a=o});return{read:()=>{switch(t){case"pending":throw n;case"error":throw a;default:return a}}}}});var ti=_(ct=>{"use strict";var cl=ct&&ct.__createBinding||(Object.create?(function(e,t,a,n){n===void 0&&(n=a);var r=Object.getOwnPropertyDescriptor(t,a);(!r||("get"in r?!t.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,r)}):(function(e,t,a,n){n===void 0&&(n=a),e[n]=t[a]})),ei=ct&&ct.__exportStar||function(e,t){for(var a in e)a!=="default"&&!Object.prototype.hasOwnProperty.call(t,a)&&cl(t,e,a)};Object.defineProperty(ct,"__esModule",{value:!0});ei(yn(),ct);ei(Xo(),ct)});var ii=_(xe=>{"use strict";var ai=xe&&xe.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(xe,"__esModule",{value:!0});xe.createDeeplink=xe.createExtensionDeeplink=xe.createScriptCommandDeeplink=xe.DeeplinkType=void 0;var Mn=require("@raycast/api"),yl=ai(require("node:fs")),dl=ai(require("node:path")),In;(function(e){e.ScriptCommand="script-command",e.Extension="extension"})(In||(xe.DeeplinkType=In={}));function ri(){return Mn.environment.raycastVersion.includes("alpha")?"raycastinternal://":"raycast://"}function Sl(){let e=JSON.parse(yl.default.readFileSync(dl.default.join(Mn.environment.assetsPath,"..","package.json"),"utf8"));return e.owner||e.author}function ni(e){let t=`${ri()}script-commands/${e.command}`;if(e.arguments){let a="";for(let n of e.arguments)a+="&arguments="+encodeURIComponent(n);t+="?"+a.substring(1)}return t}xe.createScriptCommandDeeplink=ni;function oi(e){let t=Sl(),a=Mn.environment.extensionName;"ownerOrAuthorName"in e&&"extensionName"in e&&(t=e.ownerOrAuthorName,a=e.extensionName);let n=`${ri()}extensions/${t}/${a}/${e.command}`,r="";return e.launchType&&(r+="&launchType="+encodeURIComponent(e.launchType)),e.arguments&&(r+="&arguments="+encodeURIComponent(JSON.stringify(e.arguments))),e.context&&(r+="&context="+encodeURIComponent(JSON.stringify(e.context))),e.fallbackText&&(r+="&fallbackText="+encodeURIComponent(e.fallbackText)),r&&(n+="?"+r.substring(1)),n}xe.createExtensionDeeplink=oi;function bl(e){return e.type===In.ScriptCommand?ni(e):oi(e)}xe.createDeeplink=bl});var si=_(ur=>{"use strict";Object.defineProperty(ur,"__esModule",{value:!0});ur.executeSQL=void 0;var gl=rn();function Il(e,t){return(0,gl.baseExecuteSQL)(e,t)}ur.executeSQL=Il});var ui=_(Kt=>{"use strict";var Ml=Kt&&Kt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Kt,"__esModule",{value:!0});Kt.runAppleScript=void 0;var ml=Ml(require("node:child_process")),Ia=Qa();async function Rl(e,t,a){let{humanReadableOutput:n,language:r,timeout:o,...u}=Array.isArray(t)?a||{}:t||{},i=n!==!1?[]:["-ss"];r==="JavaScript"&&i.push("-l","JavaScript"),Array.isArray(t)&&i.push("-",...t);let s=ml.default.spawn("osascript",i,{...u,env:{PATH:"/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"}}),p=(0,Ia.getSpawnedPromise)(s,{timeout:o??1e4});s.stdin.end(e);let[{error:l,exitCode:y,signal:S,timedOut:m},d,g]=await(0,Ia.getSpawnedResult)(s,{encoding:"utf8"},p),b=(0,Ia.handleOutput)({stripFinalNewline:!0},d),I=(0,Ia.handleOutput)({stripFinalNewline:!0},g);return(0,Ia.defaultParsing)({stdout:b,stderr:I,error:l,exitCode:y,signal:S,timedOut:m,command:"osascript",options:a,parentError:new Error})}Kt.runAppleScript=Rl});var pi=_(lr=>{"use strict";Object.defineProperty(lr,"__esModule",{value:!0});lr.withCache=void 0;var Al=require("@raycast/api"),pr=ot();function fl(e,t){let a=new Al.Cache({namespace:(0,pr.hash)(e)}),n=async(...r)=>{let o=(0,pr.hash)(r||[])+t?.internal_cacheKeySuffix,u=a.get(o);if(u){let{data:s,timestamp:p}=JSON.parse(u,pr.reviver);if(!(t?.maxAge&&Date.now()-p>t.maxAge)&&(!t?.validate||t.validate(s)))return s}let i=await e(...r);return a.set(o,JSON.stringify({data:i,timestamp:Date.now()},pr.replacer)),i};return n.clearCache=()=>{a.clear()},n}lr.withCache=fl});var ye=_(N=>{"use strict";var Pl=N&&N.__createBinding||(Object.create?(function(e,t,a,n){n===void 0&&(n=a);var r=Object.getOwnPropertyDescriptor(t,a);(!r||("get"in r?!t.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,r)}):(function(e,t,a,n){n===void 0&&(n=a),e[n]=t[a]})),Y=N&&N.__exportStar||function(e,t){for(var a in e)a!=="default"&&!Object.prototype.hasOwnProperty.call(t,a)&&Pl(t,e,a)};Object.defineProperty(N,"__esModule",{value:!0});Y(Ot(),N);Y(ka(),N);Y(ia(),N);Y(yo(),N);Y(Mo(),N);Y(fo(),N);Y(ho(),N);Y(xo(),N);Y(_o(),N);Y(wo(),N);Y(Lo(),N);Y(Yo(),N);Y(ti(),N);Y(ii(),N);Y(si(),N);Y(ui(),N);Y(ra(),N);Y(pi(),N)});var de={};Tt(de,{default:()=>Ai.default});var Ai,Ir=kr(()=>{ce(de,require("formdata-polyfill/esm.min.js"));Ai=B(require("formdata-polyfill/esm.min.js"))});var me={};Tt(me,{default:()=>Ci.default});var Ci,fn=kr(()=>{ce(me,require("fetch-blob/from.js"));Ci=B(require("fetch-blob/from.js"))});var Di={};Tt(Di,{toFormData:()=>Hl});function zl(e){let t=e.match(/\bfilename=("(.*?)"|([^()<>@,;:\\"/[\]?={}\s\t]+))($|;\s)/i);if(!t)return;let a=t[2]||t[3]||"",n=a.slice(a.lastIndexOf("\\")+1);return n=n.replace(/%22/g,'"'),n=n.replace(/&#(\d{4});/g,(r,o)=>String.fromCharCode(o)),n}async function Hl(e,t){if(!/multipart/i.test(t))throw new TypeError("Failed to fetch");let a=t.match(/boundary=(?:"([^"]+)"|([^;]+))/i);if(!a)throw new TypeError("no or bad content-type header, no multipart boundary");let n=new Pn(a[1]||a[2]),r,o,u,i,s,p,l=[],y=new de.FormData,S=I=>{u+=b.decode(I,{stream:!0})},m=I=>{l.push(I)},d=()=>{let I=new me.File(l,p,{type:s});y.append(i,I)},g=()=>{y.append(i,u)},b=new TextDecoder("utf-8");b.decode(),n.onPartBegin=function(){n.onPartData=S,n.onPartEnd=g,r="",o="",u="",i="",s="",p=null,l.length=0},n.onHeaderField=function(I){r+=b.decode(I,{stream:!0})},n.onHeaderValue=function(I){o+=b.decode(I,{stream:!0})},n.onHeaderEnd=function(){if(o+=b.decode(),r=r.toLowerCase(),r==="content-disposition"){let I=o.match(/\bname=("([^"]*)"|([^()<>@,;:\\"/[\]?={}\s\t]+))/i);I&&(i=I[2]||I[3]||""),p=zl(o),p&&(n.onPartData=m,n.onPartEnd=d)}else r==="content-type"&&(s=o);o="",r=""};for await(let I of e)n.write(I);return n.end(),y}var Fe,L,hi,St,mr,Rr,Nl,Aa,Vl,kl,Fl,jl,Ct,Pn,xi=kr(()=>{fn();Ir();Fe=0,L={START_BOUNDARY:Fe++,HEADER_FIELD_START:Fe++,HEADER_FIELD:Fe++,HEADER_VALUE_START:Fe++,HEADER_VALUE:Fe++,HEADER_VALUE_ALMOST_DONE:Fe++,HEADERS_ALMOST_DONE:Fe++,PART_DATA_START:Fe++,PART_DATA:Fe++,END:Fe++},hi=1,St={PART_BOUNDARY:hi,LAST_BOUNDARY:hi*=2},mr=10,Rr=13,Nl=32,Aa=45,Vl=58,kl=97,Fl=122,jl=e=>e|32,Ct=()=>{},Pn=class{constructor(t){this.index=0,this.flags=0,this.onHeaderEnd=Ct,this.onHeaderField=Ct,this.onHeadersEnd=Ct,this.onHeaderValue=Ct,this.onPartBegin=Ct,this.onPartData=Ct,this.onPartEnd=Ct,this.boundaryChars={},t=`\r
--`+t;let a=new Uint8Array(t.length);for(let n=0;n<t.length;n++)a[n]=t.charCodeAt(n),this.boundaryChars[a[n]]=!0;this.boundary=a,this.lookbehind=new Uint8Array(this.boundary.length+8),this.state=L.START_BOUNDARY}write(t){let a=0,n=t.length,r=this.index,{lookbehind:o,boundary:u,boundaryChars:i,index:s,state:p,flags:l}=this,y=this.boundary.length,S=y-1,m=t.length,d,g,b=M=>{this[M+"Mark"]=a},I=M=>{delete this[M+"Mark"]},A=(M,h,C,w)=>{(h===void 0||h!==C)&&this[M](w&&w.subarray(h,C))},P=(M,h)=>{let C=M+"Mark";C in this&&(h?(A(M,this[C],a,t),delete this[C]):(A(M,this[C],t.length,t),this[C]=0))};for(a=0;a<n;a++)switch(d=t[a],p){case L.START_BOUNDARY:if(s===u.length-2){if(d===Aa)l|=St.LAST_BOUNDARY;else if(d!==Rr)return;s++;break}else if(s-1===u.length-2){if(l&St.LAST_BOUNDARY&&d===Aa)p=L.END,l=0;else if(!(l&St.LAST_BOUNDARY)&&d===mr)s=0,A("onPartBegin"),p=L.HEADER_FIELD_START;else return;break}d!==u[s+2]&&(s=-2),d===u[s+2]&&s++;break;case L.HEADER_FIELD_START:p=L.HEADER_FIELD,b("onHeaderField"),s=0;case L.HEADER_FIELD:if(d===Rr){I("onHeaderField"),p=L.HEADERS_ALMOST_DONE;break}if(s++,d===Aa)break;if(d===Vl){if(s===1)return;P("onHeaderField",!0),p=L.HEADER_VALUE_START;break}if(g=jl(d),g<kl||g>Fl)return;break;case L.HEADER_VALUE_START:if(d===Nl)break;b("onHeaderValue"),p=L.HEADER_VALUE;case L.HEADER_VALUE:d===Rr&&(P("onHeaderValue",!0),A("onHeaderEnd"),p=L.HEADER_VALUE_ALMOST_DONE);break;case L.HEADER_VALUE_ALMOST_DONE:if(d!==mr)return;p=L.HEADER_FIELD_START;break;case L.HEADERS_ALMOST_DONE:if(d!==mr)return;A("onHeadersEnd"),p=L.PART_DATA_START;break;case L.PART_DATA_START:p=L.PART_DATA,b("onPartData");case L.PART_DATA:if(r=s,s===0){for(a+=S;a<m&&!(t[a]in i);)a+=y;a-=S,d=t[a]}if(s<u.length)u[s]===d?(s===0&&P("onPartData",!0),s++):s=0;else if(s===u.length)s++,d===Rr?l|=St.PART_BOUNDARY:d===Aa?l|=St.LAST_BOUNDARY:s=0;else if(s-1===u.length)if(l&St.PART_BOUNDARY){if(s=0,d===mr){l&=~St.PART_BOUNDARY,A("onPartEnd"),A("onPartBegin"),p=L.HEADER_FIELD_START;break}}else l&St.LAST_BOUNDARY&&d===Aa?(A("onPartEnd"),p=L.END,l=0):s=0;if(s>0)o[s-1]=d;else if(r>0){let M=new Uint8Array(o.buffer,o.byteOffset,o.byteLength);A("onPartData",0,r,M),r=0,b("onPartData"),a--}break;case L.END:break;default:throw new Error(`Unexpected state entered: ${p}`)}P("onHeaderField"),P("onHeaderValue"),P("onPartData"),this.index=s,this.state=p,this.flags=l}end(){if(this.state===L.HEADER_FIELD_START&&this.index===0||this.state===L.PART_DATA&&this.index===this.boundary.length)this.onPartEnd();else if(this.state!==L.END)throw new Error("MultipartParser.end(): stream ended unexpectedly")}}});var xy={};Tt(xy,{default:()=>Dy});module.exports=ks(xy);var wa=require("@raycast/api"),qr=B(ye()),ws=require("lodash"),zn=require("react");var Zi=require("@octokit/rest"),Xi=require("@raycast/api"),es=B(ye());var cr=JSON;var li=e=>e.toUpperCase(),ci=e=>{let t={};return e.forEach((a,n)=>{t[n]=a}),t};var yi=(e,t,a)=>e.document?e:{document:e,variables:t,requestHeaders:a,signal:void 0},di=(e,t,a)=>e.query?e:{query:e,variables:t,requestHeaders:a,signal:void 0},Si=(e,t)=>e.documents?e:{documents:e,requestHeaders:t,signal:void 0};var yr=require("graphql"),bi=e=>{let t,a=e.definitions.filter(n=>n.kind==="OperationDefinition");return a.length===1&&(t=a[0]?.name?.value),t},Pt=e=>{if(typeof e=="string"){let a;try{let n=(0,yr.parse)(e);a=bi(n)}catch{}return{query:e,operationName:a}}let t=bi(e);return{query:(0,yr.print)(e),operationName:t}};var Et=class e extends Error{constructor(t,a){let n=`${e.extractMessage(t)}: ${JSON.stringify({response:t,request:a})}`;super(n),Object.setPrototypeOf(this,e.prototype),this.response=t,this.request=a,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,e)}static extractMessage(t){return t.errors?.[0]?.message??`GraphQL Error (Code: ${t.status})`}};var dt=B(ya(),1);var El="connection_init",Cl="connection_ack",Ii="ping",Mi="pong",hl="subscribe",Dl="next",xl="error",mi="complete",yt=class e{get type(){return this._type}get id(){return this._id}get payload(){return this._payload}constructor(t,a,n){this._type=t,this._payload=a,this._id=n}get text(){let t={type:this.type};return this.id!=null&&this.id!=null&&(t.id=this.id),this.payload!=null&&this.payload!=null&&(t.payload=this.payload),JSON.stringify(t)}static parse(t,a){let{type:n,payload:r,id:o}=JSON.parse(t);return new e(n,a(r),o)}},dr=class{constructor(t,{onInit:a,onAcknowledged:n,onPing:r,onPong:o}){this.socketState={acknowledged:!1,lastRequestId:0,subscriptions:{}},this.socket=t,t.addEventListener("open",async u=>{this.socketState.acknowledged=!1,this.socketState.subscriptions={},t.send(_l(a?await a():null).text)}),t.addEventListener("close",u=>{this.socketState.acknowledged=!1,this.socketState.subscriptions={}}),t.addEventListener("error",u=>{console.error(u)}),t.addEventListener("message",u=>{try{let i=Ul(u.data);switch(i.type){case Cl:{this.socketState.acknowledged?console.warn("Duplicate CONNECTION_ACK message ignored"):(this.socketState.acknowledged=!0,n&&n(i.payload));return}case Ii:{r?r(i.payload).then(y=>t.send(gi(y).text)):t.send(gi(null).text);return}case Mi:{o&&o(i.payload);return}}if(!this.socketState.acknowledged||i.id===void 0||i.id===null||!this.socketState.subscriptions[i.id])return;let{query:s,variables:p,subscriber:l}=this.socketState.subscriptions[i.id];switch(i.type){case Dl:{!i.payload.errors&&i.payload.data&&l.next&&l.next(i.payload.data),i.payload.errors&&l.error&&l.error(new Et({...i.payload,status:200},{query:s,variables:p}));return}case xl:{l.error&&l.error(new Et({errors:i.payload,status:200},{query:s,variables:p}));return}case mi:{l.complete&&l.complete(),delete this.socketState.subscriptions[i.id];return}}}catch(i){console.error(i),t.close(1006)}t.close(4400,"Unknown graphql-ws message.")})}makeSubscribe(t,a,n,r){let o=(this.socketState.lastRequestId++).toString();return this.socketState.subscriptions[o]={query:t,variables:r,subscriber:n},this.socket.send(Tl(o,{query:t,operationName:a,variables:r}).text),()=>{this.socket.send(wl(o).text),delete this.socketState.subscriptions[o]}}rawRequest(t,a){return new Promise((n,r)=>{let o;this.rawSubscribe(t,{next:(u,i)=>o={data:u,extensions:i},error:r,complete:()=>n(o)},a)})}request(t,a){return new Promise((n,r)=>{let o;this.subscribe(t,{next:u=>o=u,error:r,complete:()=>n(o)},a)})}subscribe(t,a,n){let{query:r,operationName:o}=Pt(t);return this.makeSubscribe(r,o,a,n)}rawSubscribe(t,a,n){return this.makeSubscribe(t,void 0,a,n)}ping(t){this.socket.send(vl(t).text)}close(){this.socket.close(1e3)}};dr.PROTOCOL="graphql-transport-ws";function Ul(e,t=a=>a){return yt.parse(e,t)}function _l(e){return new yt(El,e)}function vl(e){return new yt(Ii,e,void 0)}function gi(e){return new yt(Mi,e,void 0)}function Tl(e,t){return new yt(hl,t,e)}function wl(e){return new yt(mi,void 0,e)}var Yt=e=>{let t={};return e&&(typeof Headers<"u"&&e instanceof Headers||dt&&dt.Headers&&e instanceof dt.Headers?t=ci(e):Array.isArray(e)?e.forEach(([a,n])=>{a&&n!==void 0&&(t[a]=n)}):t=e),t},Ri=e=>e.replace(/([\s,]|#[^\n\r]+)+/g," ").trim(),Ol=e=>{if(!Array.isArray(e.query)){let n=e,r=[`query=${encodeURIComponent(Ri(n.query))}`];return e.variables&&r.push(`variables=${encodeURIComponent(n.jsonSerializer.stringify(n.variables))}`),n.operationName&&r.push(`operationName=${encodeURIComponent(n.operationName)}`),r.join("&")}if(typeof e.variables<"u"&&!Array.isArray(e.variables))throw new Error("Cannot create query with given variable type, array expected");let t=e,a=e.query.reduce((n,r,o)=>(n.push({query:Ri(r),variables:t.variables?t.jsonSerializer.stringify(t.variables[o]):void 0}),n),[]);return`query=${encodeURIComponent(t.jsonSerializer.stringify(a))}`},Bl=e=>async t=>{let{url:a,query:n,variables:r,operationName:o,fetch:u,fetchOptions:i,middleware:s}=t,p={...t.headers},l="",y;e==="POST"?(y=Ll(n,r,o,i.jsonSerializer),typeof y=="string"&&(p["Content-Type"]="application/json")):l=Ol({query:n,variables:r,operationName:o,jsonSerializer:i.jsonSerializer??cr});let S={method:e,headers:p,body:y,...i},m=a,d=S;if(s){let g=await Promise.resolve(s({...S,url:a,operationName:o,variables:r})),{url:b,...I}=g;m=b,d=I}return l&&(m=`${m}?${l}`),await u(m,d)},Sr=class{constructor(t,a={}){this.url=t,this.requestConfig=a,this.rawRequest=async(...n)=>{let[r,o,u]=n,i=di(r,o,u),{headers:s,fetch:p=dt.default,method:l="POST",requestMiddleware:y,responseMiddleware:S,...m}=this.requestConfig,{url:d}=this;i.signal!==void 0&&(m.signal=i.signal);let{operationName:g}=Pt(i.query);return mn({url:d,query:i.query,variables:i.variables,headers:{...Yt(Rn(s)),...Yt(i.requestHeaders)},operationName:g,fetch:p,method:l,fetchOptions:m,middleware:y}).then(b=>(S&&S(b),b)).catch(b=>{throw S&&S(b),b})}}async request(t,...a){let[n,r]=a,o=yi(t,n,r),{headers:u,fetch:i=dt.default,method:s="POST",requestMiddleware:p,responseMiddleware:l,...y}=this.requestConfig,{url:S}=this;o.signal!==void 0&&(y.signal=o.signal);let{query:m,operationName:d}=Pt(o.document);return mn({url:S,query:m,variables:o.variables,headers:{...Yt(Rn(u)),...Yt(o.requestHeaders)},operationName:d,fetch:i,method:s,fetchOptions:y,middleware:p}).then(g=>(l&&l(g),g.data)).catch(g=>{throw l&&l(g),g})}batchRequests(t,a){let n=Si(t,a),{headers:r,...o}=this.requestConfig;n.signal!==void 0&&(o.signal=n.signal);let u=n.documents.map(({document:s})=>Pt(s).query),i=n.documents.map(({variables:s})=>s);return mn({url:this.url,query:u,variables:i,headers:{...Yt(Rn(r)),...Yt(n.requestHeaders)},operationName:void 0,fetch:this.requestConfig.fetch??dt.default,method:this.requestConfig.method||"POST",fetchOptions:o,middleware:this.requestConfig.requestMiddleware}).then(s=>(this.requestConfig.responseMiddleware&&this.requestConfig.responseMiddleware(s),s.data)).catch(s=>{throw this.requestConfig.responseMiddleware&&this.requestConfig.responseMiddleware(s),s})}setHeaders(t){return this.requestConfig.headers=t,this}setHeader(t,a){let{headers:n}=this.requestConfig;return n?n[t]=a:this.requestConfig.headers={[t]:a},this}setEndpoint(t){return this.url=t,this}},mn=async e=>{let{query:t,variables:a,fetchOptions:n}=e,r=Bl(li(e.method??"post")),o=Array.isArray(e.query),u=await r(e),i=await ql(u,n.jsonSerializer??cr),s=Array.isArray(i)?!i.some(({data:l})=>!l):!!i.data,p=Array.isArray(i)||!i.errors||Array.isArray(i.errors)&&!i.errors.length||n.errorPolicy==="all"||n.errorPolicy==="ignore";if(u.ok&&p&&s){let{errors:l,...y}=(Array.isArray(i),i),S=n.errorPolicy==="ignore"?y:i;return{...o?{data:S}:S,headers:u.headers,status:u.status}}else{let l=typeof i=="string"?{error:i}:i;throw new Et({...l,status:u.status,headers:u.headers},{query:t,variables:a})}};var Ll=(e,t,a,n)=>{let r=n??cr;if(!Array.isArray(e))return r.stringify({query:e,variables:t,operationName:a});if(typeof t<"u"&&!Array.isArray(t))throw new Error("Cannot create request body with given variable type, array expected");let o=e.reduce((u,i,s)=>(u.push({query:i,variables:t?t[s]:void 0}),u),[]);return r.stringify(o)},ql=async(e,t)=>{let a;return e.headers.forEach((n,r)=>{r.toLowerCase()==="content-type"&&(a=n)}),a&&(a.toLowerCase().startsWith("application/json")||a.toLowerCase().startsWith("application/graphql+json")||a.toLowerCase().startsWith("application/graphql-response+json"))?t.parse(await e.text()):e.text()},Rn=e=>typeof e=="function"?e():e;var zi=B(require("node:http"),1),Hi=B(require("node:https"),1),Dt=B(require("node:zlib"),1),fe=B(require("node:stream"),1),Ea=require("node:buffer");var Ma={};Tt(Ma,{default:()=>br.default});ce(Ma,require("data-uri-to-buffer"));var br=B(require("data-uri-to-buffer"));var Ue=B(require("node:stream"),1),tt=require("node:util"),Re=require("node:buffer");var ma={};Tt(ma,{default:()=>gr.default});ce(ma,require("fetch-blob"));var gr=B(require("fetch-blob"));Ir();var et=class extends Error{constructor(t,a){super(t),Error.captureStackTrace(this,this.constructor),this.type=a}get name(){return this.constructor.name}get[Symbol.toStringTag](){return this.constructor.name}};var Se=class extends et{constructor(t,a,n){super(t,a),n&&(this.code=this.errno=n.code,this.erroredSysCall=n.syscall)}};var Mr=Symbol.toStringTag,An=e=>typeof e=="object"&&typeof e.append=="function"&&typeof e.delete=="function"&&typeof e.get=="function"&&typeof e.getAll=="function"&&typeof e.has=="function"&&typeof e.set=="function"&&typeof e.sort=="function"&&e[Mr]==="URLSearchParams",Ra=e=>e&&typeof e=="object"&&typeof e.arrayBuffer=="function"&&typeof e.type=="string"&&typeof e.stream=="function"&&typeof e.constructor=="function"&&/^(Blob|File)$/.test(e[Mr]),fi=e=>typeof e=="object"&&(e[Mr]==="AbortSignal"||e[Mr]==="EventTarget"),Pi=(e,t)=>{let a=new URL(t).hostname,n=new URL(e).hostname;return a===n||a.endsWith(`.${n}`)},Ei=(e,t)=>{let a=new URL(t).protocol,n=new URL(e).protocol;return a===n};var Gl=(0,tt.promisify)(Ue.default.pipeline),be=Symbol("Body internals"),je=class{constructor(t,{size:a=0}={}){let n=null;t===null?t=null:An(t)?t=Re.Buffer.from(t.toString()):Ra(t)||Re.Buffer.isBuffer(t)||(tt.types.isAnyArrayBuffer(t)?t=Re.Buffer.from(t):ArrayBuffer.isView(t)?t=Re.Buffer.from(t.buffer,t.byteOffset,t.byteLength):t instanceof Ue.default||(t instanceof de.FormData?(t=(0,de.formDataToBlob)(t),n=t.type.split("=")[1]):t=Re.Buffer.from(String(t))));let r=t;Re.Buffer.isBuffer(t)?r=Ue.default.Readable.from(t):Ra(t)&&(r=Ue.default.Readable.from(t.stream())),this[be]={body:t,stream:r,boundary:n,disturbed:!1,error:null},this.size=a,t instanceof Ue.default&&t.on("error",o=>{let u=o instanceof et?o:new Se(`Invalid response body while trying to fetch ${this.url}: ${o.message}`,"system",o);this[be].error=u})}get body(){return this[be].stream}get bodyUsed(){return this[be].disturbed}async arrayBuffer(){let{buffer:t,byteOffset:a,byteLength:n}=await En(this);return t.slice(a,a+n)}async formData(){let t=this.headers.get("content-type");if(t.startsWith("application/x-www-form-urlencoded")){let n=new de.FormData,r=new URLSearchParams(await this.text());for(let[o,u]of r)n.append(o,u);return n}let{toFormData:a}=await Promise.resolve().then(()=>(xi(),Di));return a(this.body,t)}async blob(){let t=this.headers&&this.headers.get("content-type")||this[be].body&&this[be].body.type||"",a=await this.arrayBuffer();return new gr.default([a],{type:t})}async json(){let t=await this.text();return JSON.parse(t)}async text(){let t=await En(this);return new TextDecoder().decode(t)}buffer(){return En(this)}};je.prototype.buffer=(0,tt.deprecate)(je.prototype.buffer,"Please use 'response.arrayBuffer()' instead of 'response.buffer()'","node-fetch#buffer");Object.defineProperties(je.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0},data:{get:(0,tt.deprecate)(()=>{},"data doesn't exist, use json(), text(), arrayBuffer(), or body instead","https://github.com/node-fetch/node-fetch/issues/1000 (response)")}});async function En(e){if(e[be].disturbed)throw new TypeError(`body used already for: ${e.url}`);if(e[be].disturbed=!0,e[be].error)throw e[be].error;let{body:t}=e;if(t===null)return Re.Buffer.alloc(0);if(!(t instanceof Ue.default))return Re.Buffer.alloc(0);let a=[],n=0;try{for await(let r of t){if(e.size>0&&n+r.length>e.size){let o=new Se(`content size at ${e.url} over limit: ${e.size}`,"max-size");throw t.destroy(o),o}n+=r.length,a.push(r)}}catch(r){throw r instanceof et?r:new Se(`Invalid response body while trying to fetch ${e.url}: ${r.message}`,"system",r)}if(t.readableEnded===!0||t._readableState.ended===!0)try{return a.every(r=>typeof r=="string")?Re.Buffer.from(a.join("")):Re.Buffer.concat(a,n)}catch(r){throw new Se(`Could not create Buffer from response body for ${e.url}: ${r.message}`,"system",r)}else throw new Se(`Premature close of server response while trying to fetch ${e.url}`)}var Jt=(e,t)=>{let a,n,{body:r}=e[be];if(e.bodyUsed)throw new Error("cannot clone body after it is used");return r instanceof Ue.default&&typeof r.getBoundary!="function"&&(a=new Ue.PassThrough({highWaterMark:t}),n=new Ue.PassThrough({highWaterMark:t}),r.pipe(a),r.pipe(n),e[be].stream=a,r=n),r},$l=(0,tt.deprecate)(e=>e.getBoundary(),"form-data doesn't follow the spec and requires special treatment. Use alternative package","https://github.com/node-fetch/node-fetch/issues/1167"),Ar=(e,t)=>e===null?null:typeof e=="string"?"text/plain;charset=UTF-8":An(e)?"application/x-www-form-urlencoded;charset=UTF-8":Ra(e)?e.type||null:Re.Buffer.isBuffer(e)||tt.types.isAnyArrayBuffer(e)||ArrayBuffer.isView(e)?null:e instanceof de.FormData?`multipart/form-data; boundary=${t[be].boundary}`:e&&typeof e.getBoundary=="function"?`multipart/form-data;boundary=${$l(e)}`:e instanceof Ue.default?null:"text/plain;charset=UTF-8",Ui=e=>{let{body:t}=e[be];return t===null?0:Ra(t)?t.size:Re.Buffer.isBuffer(t)?t.length:t&&typeof t.getLengthSync=="function"&&t.hasKnownLength&&t.hasKnownLength()?t.getLengthSync():null},_i=async(e,{body:t})=>{t===null?e.end():await Gl(t,e)};var Cn=require("node:util"),fa=B(require("node:http"),1),fr=typeof fa.default.validateHeaderName=="function"?fa.default.validateHeaderName:e=>{if(!/^[\^`\-\w!#$%&'*+.|~]+$/.test(e)){let t=new TypeError(`Header name must be a valid HTTP token [${e}]`);throw Object.defineProperty(t,"code",{value:"ERR_INVALID_HTTP_TOKEN"}),t}},hn=typeof fa.default.validateHeaderValue=="function"?fa.default.validateHeaderValue:(e,t)=>{if(/[^\t\u0020-\u007E\u0080-\u00FF]/.test(t)){let a=new TypeError(`Invalid character in header content ["${e}"]`);throw Object.defineProperty(a,"code",{value:"ERR_INVALID_CHAR"}),a}},Ae=class e extends URLSearchParams{constructor(t){let a=[];if(t instanceof e){let n=t.raw();for(let[r,o]of Object.entries(n))a.push(...o.map(u=>[r,u]))}else if(t!=null)if(typeof t=="object"&&!Cn.types.isBoxedPrimitive(t)){let n=t[Symbol.iterator];if(n==null)a.push(...Object.entries(t));else{if(typeof n!="function")throw new TypeError("Header pairs must be iterable");a=[...t].map(r=>{if(typeof r!="object"||Cn.types.isBoxedPrimitive(r))throw new TypeError("Each header pair must be an iterable object");return[...r]}).map(r=>{if(r.length!==2)throw new TypeError("Each header pair must be a name/value tuple");return[...r]})}}else throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");return a=a.length>0?a.map(([n,r])=>(fr(n),hn(n,String(r)),[String(n).toLowerCase(),String(r)])):void 0,super(a),new Proxy(this,{get(n,r,o){switch(r){case"append":case"set":return(u,i)=>(fr(u),hn(u,String(i)),URLSearchParams.prototype[r].call(n,String(u).toLowerCase(),String(i)));case"delete":case"has":case"getAll":return u=>(fr(u),URLSearchParams.prototype[r].call(n,String(u).toLowerCase()));case"keys":return()=>(n.sort(),new Set(URLSearchParams.prototype.keys.call(n)).keys());default:return Reflect.get(n,r,o)}}})}get[Symbol.toStringTag](){return this.constructor.name}toString(){return Object.prototype.toString.call(this)}get(t){let a=this.getAll(t);if(a.length===0)return null;let n=a.join(", ");return/^content-encoding$/i.test(t)&&(n=n.toLowerCase()),n}forEach(t,a=void 0){for(let n of this.keys())Reflect.apply(t,a,[this.get(n),n,this])}*values(){for(let t of this.keys())yield this.get(t)}*entries(){for(let t of this.keys())yield[t,this.get(t)]}[Symbol.iterator](){return this.entries()}raw(){return[...this.keys()].reduce((t,a)=>(t[a]=this.getAll(a),t),{})}[Symbol.for("nodejs.util.inspect.custom")](){return[...this.keys()].reduce((t,a)=>{let n=this.getAll(a);return a==="host"?t[a]=n[0]:t[a]=n.length>1?n:n[0],t},{})}};Object.defineProperties(Ae.prototype,["get","entries","forEach","values"].reduce((e,t)=>(e[t]={enumerable:!0},e),{}));function vi(e=[]){return new Ae(e.reduce((t,a,n,r)=>(n%2===0&&t.push(r.slice(n,n+2)),t),[]).filter(([t,a])=>{try{return fr(t),hn(t,String(a)),!0}catch{return!1}}))}var Ql=new Set([301,302,303,307,308]),Pr=e=>Ql.has(e);var Oe=Symbol("Response internals"),_e=class e extends je{constructor(t=null,a={}){super(t,a);let n=a.status!=null?a.status:200,r=new Ae(a.headers);if(t!==null&&!r.has("Content-Type")){let o=Ar(t,this);o&&r.append("Content-Type",o)}this[Oe]={type:"default",url:a.url,status:n,statusText:a.statusText||"",headers:r,counter:a.counter,highWaterMark:a.highWaterMark}}get type(){return this[Oe].type}get url(){return this[Oe].url||""}get status(){return this[Oe].status}get ok(){return this[Oe].status>=200&&this[Oe].status<300}get redirected(){return this[Oe].counter>0}get statusText(){return this[Oe].statusText}get headers(){return this[Oe].headers}get highWaterMark(){return this[Oe].highWaterMark}clone(){return new e(Jt(this,this.highWaterMark),{type:this.type,url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected,size:this.size,highWaterMark:this.highWaterMark})}static redirect(t,a=302){if(!Pr(a))throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');return new e(null,{headers:{location:new URL(t).toString()},status:a})}static error(){let t=new e(null,{status:0,statusText:""});return t[Oe].type="error",t}static json(t=void 0,a={}){let n=JSON.stringify(t);if(n===void 0)throw new TypeError("data is not JSON serializable");let r=new Ae(a&&a.headers);return r.has("content-type")||r.set("content-type","application/json"),new e(n,{...a,headers:r})}get[Symbol.toStringTag](){return"Response"}};Object.defineProperties(_e.prototype,{type:{enumerable:!0},url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}});var ki=require("node:url"),Fi=require("node:util");var Ti=e=>{if(e.search)return e.search;let t=e.href.length-1,a=e.hash||(e.href[t]==="#"?"#":"");return e.href[t-a.length]==="?"?"?":""};var Oi=require("node:net");function wi(e,t=!1){return e==null||(e=new URL(e),/^(about|blob|data):$/.test(e.protocol))?"no-referrer":(e.username="",e.password="",e.hash="",t&&(e.pathname="",e.search=""),e)}var Bi=new Set(["","no-referrer","no-referrer-when-downgrade","same-origin","origin","strict-origin","origin-when-cross-origin","strict-origin-when-cross-origin","unsafe-url"]),Li="strict-origin-when-cross-origin";function qi(e){if(!Bi.has(e))throw new TypeError(`Invalid referrerPolicy: ${e}`);return e}function Wl(e){if(/^(http|ws)s:$/.test(e.protocol))return!0;let t=e.host.replace(/(^\[)|(]$)/g,""),a=(0,Oi.isIP)(t);return a===4&&/^127\./.test(t)||a===6&&/^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(t)?!0:e.host==="localhost"||e.host.endsWith(".localhost")?!1:e.protocol==="file:"}function Zt(e){return/^about:(blank|srcdoc)$/.test(e)||e.protocol==="data:"||/^(blob|filesystem):$/.test(e.protocol)?!0:Wl(e)}function Ni(e,{referrerURLCallback:t,referrerOriginCallback:a}={}){if(e.referrer==="no-referrer"||e.referrerPolicy==="")return null;let n=e.referrerPolicy;if(e.referrer==="about:client")return"no-referrer";let r=e.referrer,o=wi(r),u=wi(r,!0);o.toString().length>4096&&(o=u),t&&(o=t(o)),a&&(u=a(u));let i=new URL(e.url);switch(n){case"no-referrer":return"no-referrer";case"origin":return u;case"unsafe-url":return o;case"strict-origin":return Zt(o)&&!Zt(i)?"no-referrer":u.toString();case"strict-origin-when-cross-origin":return o.origin===i.origin?o:Zt(o)&&!Zt(i)?"no-referrer":u;case"same-origin":return o.origin===i.origin?o:"no-referrer";case"origin-when-cross-origin":return o.origin===i.origin?o:u;case"no-referrer-when-downgrade":return Zt(o)&&!Zt(i)?"no-referrer":o;default:throw new TypeError(`Invalid referrerPolicy: ${n}`)}}function Vi(e){let t=(e.get("referrer-policy")||"").split(/[,\s]+/),a="";for(let n of t)n&&Bi.has(n)&&(a=n);return a}var J=Symbol("Request internals"),Pa=e=>typeof e=="object"&&typeof e[J]=="object",Kl=(0,Fi.deprecate)(()=>{},".data is not a valid RequestInit property, use .body instead","https://github.com/node-fetch/node-fetch/issues/1000 (request)"),ht=class e extends je{constructor(t,a={}){let n;if(Pa(t)?n=new URL(t.url):(n=new URL(t),t={}),n.username!==""||n.password!=="")throw new TypeError(`${n} is an url with embedded credentials.`);let r=a.method||t.method||"GET";if(/^(delete|get|head|options|post|put)$/i.test(r)&&(r=r.toUpperCase()),!Pa(a)&&"data"in a&&Kl(),(a.body!=null||Pa(t)&&t.body!==null)&&(r==="GET"||r==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");let o=a.body?a.body:Pa(t)&&t.body!==null?Jt(t):null;super(o,{size:a.size||t.size||0});let u=new Ae(a.headers||t.headers||{});if(o!==null&&!u.has("Content-Type")){let p=Ar(o,this);p&&u.set("Content-Type",p)}let i=Pa(t)?t.signal:null;if("signal"in a&&(i=a.signal),i!=null&&!fi(i))throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");let s=a.referrer==null?t.referrer:a.referrer;if(s==="")s="no-referrer";else if(s){let p=new URL(s);s=/^about:(\/\/)?client$/.test(p)?"client":p}else s=void 0;this[J]={method:r,redirect:a.redirect||t.redirect||"follow",headers:u,parsedURL:n,signal:i,referrer:s},this.follow=a.follow===void 0?t.follow===void 0?20:t.follow:a.follow,this.compress=a.compress===void 0?t.compress===void 0?!0:t.compress:a.compress,this.counter=a.counter||t.counter||0,this.agent=a.agent||t.agent,this.highWaterMark=a.highWaterMark||t.highWaterMark||16384,this.insecureHTTPParser=a.insecureHTTPParser||t.insecureHTTPParser||!1,this.referrerPolicy=a.referrerPolicy||t.referrerPolicy||""}get method(){return this[J].method}get url(){return(0,ki.format)(this[J].parsedURL)}get headers(){return this[J].headers}get redirect(){return this[J].redirect}get signal(){return this[J].signal}get referrer(){if(this[J].referrer==="no-referrer")return"";if(this[J].referrer==="client")return"about:client";if(this[J].referrer)return this[J].referrer.toString()}get referrerPolicy(){return this[J].referrerPolicy}set referrerPolicy(t){this[J].referrerPolicy=qi(t)}clone(){return new e(this)}get[Symbol.toStringTag](){return"Request"}};Object.defineProperties(ht.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0},referrer:{enumerable:!0},referrerPolicy:{enumerable:!0}});var ji=e=>{let{parsedURL:t}=e[J],a=new Ae(e[J].headers);a.has("Accept")||a.set("Accept","*/*");let n=null;if(e.body===null&&/^(post|put)$/i.test(e.method)&&(n="0"),e.body!==null){let i=Ui(e);typeof i=="number"&&!Number.isNaN(i)&&(n=String(i))}n&&a.set("Content-Length",n),e.referrerPolicy===""&&(e.referrerPolicy=Li),e.referrer&&e.referrer!=="no-referrer"?e[J].referrer=Ni(e):e[J].referrer="no-referrer",e[J].referrer instanceof URL&&a.set("Referer",e.referrer),a.has("User-Agent")||a.set("User-Agent","node-fetch"),e.compress&&!a.has("Accept-Encoding")&&a.set("Accept-Encoding","gzip, deflate, br");let{agent:r}=e;typeof r=="function"&&(r=r(t));let o=Ti(t),u={path:t.pathname+o,method:e.method,headers:a[Symbol.for("nodejs.util.inspect.custom")](),insecureHTTPParser:e.insecureHTTPParser,agent:r};return{parsedURL:t,options:u}};var Er=class extends et{constructor(t,a="aborted"){super(t,a)}};Ir();fn();var Yl=new Set(["data:","http:","https:"]);async function Cr(e,t){return new Promise((a,n)=>{let r=new ht(e,t),{parsedURL:o,options:u}=ji(r);if(!Yl.has(o.protocol))throw new TypeError(`node-fetch cannot load ${e}. URL scheme "${o.protocol.replace(/:$/,"")}" is not supported.`);if(o.protocol==="data:"){let d=(0,br.default)(r.url),g=new _e(d,{headers:{"Content-Type":d.typeFull}});a(g);return}let i=(o.protocol==="https:"?Hi.default:zi.default).request,{signal:s}=r,p=null,l=()=>{let d=new Er("The operation was aborted.");n(d),r.body&&r.body instanceof fe.default.Readable&&r.body.destroy(d),!(!p||!p.body)&&p.body.emit("error",d)};if(s&&s.aborted){l();return}let y=()=>{l(),m()},S=i(o.toString(),u);s&&s.addEventListener("abort",y);let m=()=>{S.abort(),s&&s.removeEventListener("abort",y)};S.on("error",d=>{n(new Se(`request to ${r.url} failed, reason: ${d.message}`,"system",d)),m()}),Jl(S,d=>{p&&p.body&&p.body.destroy(d)}),process.version<"v14"&&S.on("socket",d=>{let g;d.prependListener("end",()=>{g=d._eventsCount}),d.prependListener("close",b=>{if(p&&g<d._eventsCount&&!b){let I=new Error("Premature close");I.code="ERR_STREAM_PREMATURE_CLOSE",p.body.emit("error",I)}})}),S.on("response",d=>{S.setTimeout(0);let g=vi(d.rawHeaders);if(Pr(d.statusCode)){let M=g.get("Location"),h=null;try{h=M===null?null:new URL(M,r.url)}catch{if(r.redirect!=="manual"){n(new Se(`uri requested responds with an invalid redirect URL: ${M}`,"invalid-redirect")),m();return}}switch(r.redirect){case"error":n(new Se(`uri requested responds with a redirect, redirect mode is set to error: ${r.url}`,"no-redirect")),m();return;case"manual":break;case"follow":{if(h===null)break;if(r.counter>=r.follow){n(new Se(`maximum redirect reached at: ${r.url}`,"max-redirect")),m();return}let C={headers:new Ae(r.headers),follow:r.follow,counter:r.counter+1,agent:r.agent,compress:r.compress,method:r.method,body:Jt(r),signal:r.signal,size:r.size,referrer:r.referrer,referrerPolicy:r.referrerPolicy};if(!Pi(r.url,h)||!Ei(r.url,h))for(let H of["authorization","www-authenticate","cookie","cookie2"])C.headers.delete(H);if(d.statusCode!==303&&r.body&&t.body instanceof fe.default.Readable){n(new Se("Cannot follow redirect with body being a readable stream","unsupported-redirect")),m();return}(d.statusCode===303||(d.statusCode===301||d.statusCode===302)&&r.method==="POST")&&(C.method="GET",C.body=void 0,C.headers.delete("content-length"));let w=Vi(g);w&&(C.referrerPolicy=w),a(Cr(new ht(h,C))),m();return}default:return n(new TypeError(`Redirect option '${r.redirect}' is not a valid value of RequestRedirect`))}}s&&d.once("end",()=>{s.removeEventListener("abort",y)});let b=(0,fe.pipeline)(d,new fe.PassThrough,M=>{M&&n(M)});process.version<"v12.10"&&d.on("aborted",y);let I={url:r.url,status:d.statusCode,statusText:d.statusMessage,headers:g,size:r.size,counter:r.counter,highWaterMark:r.highWaterMark},A=g.get("Content-Encoding");if(!r.compress||r.method==="HEAD"||A===null||d.statusCode===204||d.statusCode===304){p=new _e(b,I),a(p);return}let P={flush:Dt.default.Z_SYNC_FLUSH,finishFlush:Dt.default.Z_SYNC_FLUSH};if(A==="gzip"||A==="x-gzip"){b=(0,fe.pipeline)(b,Dt.default.createGunzip(P),M=>{M&&n(M)}),p=new _e(b,I),a(p);return}if(A==="deflate"||A==="x-deflate"){let M=(0,fe.pipeline)(d,new fe.PassThrough,h=>{h&&n(h)});M.once("data",h=>{(h[0]&15)===8?b=(0,fe.pipeline)(b,Dt.default.createInflate(),C=>{C&&n(C)}):b=(0,fe.pipeline)(b,Dt.default.createInflateRaw(),C=>{C&&n(C)}),p=new _e(b,I),a(p)}),M.once("end",()=>{p||(p=new _e(b,I),a(p))});return}if(A==="br"){b=(0,fe.pipeline)(b,Dt.default.createBrotliDecompress(),M=>{M&&n(M)}),p=new _e(b,I),a(p);return}p=new _e(b,I),a(p)}),_i(S,r).catch(n)})}function Jl(e,t){let a=Ea.Buffer.from(`0\r
\r
`),n=!1,r=!1,o;e.on("response",u=>{let{headers:i}=u;n=i["transfer-encoding"]==="chunked"&&!i["content-length"]}),e.on("socket",u=>{let i=()=>{if(n&&!r){let p=new Error("Premature close");p.code="ERR_STREAM_PREMATURE_CLOSE",t(p)}},s=p=>{r=Ea.Buffer.compare(p.slice(-5),a)===0,!r&&o&&(r=Ea.Buffer.compare(o.slice(-3),a.slice(0,3))===0&&Ea.Buffer.compare(p.slice(-2),a.slice(3))===0),o=p};u.prependListener("close",i),u.on("data",s),e.on("close",()=>{u.removeListener("close",i),u.removeListener("data",s)})})}var R=B(require("graphql-tag")),Ca=R.default`
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
`,Zl=R.default`
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
  ${Ca}
`,ze=R.default`
  fragment UserFields on User {
    id
    avatarUrl
    name
    login
    isViewer
  }
`,ha=R.default`
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
  ${ze}
`,hr=R.default`
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
  ${ha}
  ${Ca}
  ${ze}
`,Xl=R.default`
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
  ${ha}
  ${Ca}
  ${ze}
`,Gi=R.default`
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
`,$i=R.default`
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
`,Qi=R.default`
  fragment RepositoryMentionFields on Repository {
    nameWithOwner
    description
    isPrivate
    isArchived
    owner {
      avatarUrl(size: 64)
    }
  }
`,ec=R.default`
  fragment ProjectViewerFields on ProjectV2View {
    id
    name
    number
  }
`,Wi=R.default`
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
  ${ha}
  ${ec}
`,Ki=R.default`
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
  ${Ca}
  ${ha}
  ${ze}
`,tc=R.default`
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
  ${Ca}
  ${ha}
  ${ze}
`,ac=R.default`
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
`,Yi=R.default`
  fragment CommitFields on Commit {
    authoredDate
    oid
    message
  }
`,Dn=R.default`
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
`,rc=R.default`
  fragment ReleaseFields on Release {
    id
    description
    name
    publishedAt
    createdAt
    tagName
    url
  }
`,nc=R.default`
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
`,oc=R.default`
  mutation createRef($input: CreateRefInput!) {
    createRef(input: $input) {
      clientMutationId
      ref {
        id
        name
      }
    }
  }
`,ic=R.default`
  mutation deleteLinkedBranch($input: DeleteLinkedBranchInput!) {
    deleteLinkedBranch(input: $input) {
      clientMutationId
    }
  }
`,sc=R.default`
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
  ${Zl}
`,uc=R.default`
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
`,pc=R.default`
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
  ${ze}
`,lc=R.default`
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
`,cc=R.default`
  query issueDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...IssueDetailFields
    }
  }
  ${Xl}
`,yc=R.default`
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
  ${hr}
`,dc=R.default`
  query issueByNumber($owner: String!, $name: String!, $issueNumber: Int!) {
    repository(owner: $owner, name: $name) {
      issue(number: $issueNumber) {
        ...IssueFields
      }
    }
  }
  ${hr}
`,Sc=R.default`
  mutation closeIssue($nodeId: ID!, $stateReason: IssueClosedStateReason!) {
    closeIssue(input: { issueId: $nodeId, stateReason: $stateReason }) {
      issue {
        id
      }
    }
  }
`,bc=R.default`
  mutation reopenIssue($nodeId: ID!) {
    reopenIssue(input: { issueId: $nodeId }) {
      issue {
        id
      }
    }
  }
`,gc=R.default`
  mutation changeIssueAssignees($issueId: ID!, $assigneeIds: [ID!]) {
    updateIssue(input: { id: $issueId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,Ic=R.default`
  mutation changeIssueMilestone($issueId: ID!, $milestoneId: ID) {
    updateIssue(input: { id: $issueId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,Mc=R.default`
  mutation addIssueToProject($issueId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $issueId }) {
      clientMutationId
    }
  }
`,mc=R.default`
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
  ${hr}
`,Rc=R.default`
  query searchIssueMentions($query: String!, $numberOfItems: Int!) {
    search(query: $query, type: ISSUE, first: $numberOfItems) {
      nodes {
        ... on Issue {
          ...IssueMentionFields
        }
      }
    }
  }
  ${Gi}
`,Ac=R.default`
  query searchPullRequestMentions($query: String!, $numberOfItems: Int!) {
    search(query: $query, type: ISSUE, first: $numberOfItems) {
      nodes {
        ... on PullRequest {
          ...PullRequestMentionFields
        }
      }
    }
  }
  ${$i}
`,fc=R.default`
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
  ${Gi}
  ${$i}
`,Pc=R.default`
  query searchRepositoryMentions($query: String!, $numberOfItems: Int!) {
    search(query: $query, type: REPOSITORY, first: $numberOfItems) {
      nodes {
        ... on Repository {
          ...RepositoryMentionFields
        }
      }
    }
  }
  ${Qi}
`,Ec=R.default`
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
  ${Qi}
`,Cc=R.default`
  mutation changeProjectStatus($projectId: ID!, $closed: Boolean!) {
    updateProjectV2(input: { projectId: $projectId, closed: $closed }) {
      clientMutationId
    }
  }
`,hc=R.default`
  query projectDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...ProjectFields
    }
  }
  ${Wi}
`,Dc=R.default`
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
  ${Ki}
`,xc=R.default`
  query pullRequestDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...PullRequestDetailsFields
    }
  }
  ${tc}
`,Uc=R.default`
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
  ${ze}
`,_c=R.default`
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
`,vc=R.default`
  query pullRequestCommits($nodeId: ID!, $numberOfItems: Int!, $before: String) {
    node(id: $nodeId) {
      ...PullRequestCommitFields
    }
  }
  ${ac}
`,Tc=R.default`
  mutation closePullRequest($nodeId: ID!) {
    closePullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,wc=R.default`
  mutation reopenPullRequest($nodeId: ID!) {
    reopenPullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Oc=R.default`
  mutation markPullRequestReadyForReview($nodeId: ID!) {
    markPullRequestReadyForReview(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Bc=R.default`
  mutation addPullRequestReview($nodeId: ID!, $event: PullRequestReviewEvent, $body: String) {
    addPullRequestReview(input: { pullRequestId: $nodeId, event: $event, body: $body }) {
      pullRequestReview {
        id
      }
    }
  }
`,Lc=R.default`
  mutation changePullRequestAssignees($pullRequestId: ID!, $assigneeIds: [ID!]) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,qc=R.default`
  mutation changePullRequestMilestone($pullRequestId: ID!, $milestoneId: ID) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,Nc=R.default`
  mutation addPullRequestToProject($pullRequestId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $pullRequestId }) {
      clientMutationId
    }
  }
`,Vc=R.default`
  mutation requestReview($pullRequestId: ID!, $collaboratorId: ID!) {
    requestReviews(input: { pullRequestId: $pullRequestId, userIds: [$collaboratorId], union: true }) {
      clientMutationId
    }
  }
`,kc=R.default`
  mutation mergePullRequest($nodeId: ID!, $method: PullRequestMergeMethod!) {
    mergePullRequest(input: { pullRequestId: $nodeId, mergeMethod: $method }) {
      pullRequest {
        nodeId: id
      }
    }
  }
`,Fc=R.default`
  mutation addPullRequestToMergeQueue($nodeId: ID!) {
    enqueuePullRequest(input: { pullRequestId: $nodeId }) {
      __typename
    }
  }
`,jc=R.default`
  mutation removePullRequestFromMergeQueue($nodeId: ID!) {
    dequeuePullRequest(input: { id: $nodeId }) {
      __typename
    }
  }
`,zc=R.default`
  mutation enablePullRequestAutoMerge($nodeId: ID!, $mergeMethod: PullRequestMergeMethod) {
    enablePullRequestAutoMerge(input: { pullRequestId: $nodeId, mergeMethod: $mergeMethod }) {
      pullRequest {
        id
      }
    }
  }
`,Hc=R.default`
  mutation disablePullRequestAutoMerge($nodeId: ID!) {
    disablePullRequestAutoMerge(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Gc=R.default`
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
`,$c=R.default`
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
  ${Ki}
`,Qc=R.default`
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
  ${Dn}
`,Wc=R.default`
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
  ${Dn}
`,Kc=R.default`
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
`,Yc=R.default`
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
`,Jc=R.default`
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
  ${Yi}
  ${ze}
`,Zc=R.default`
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
  ${Yi}
`,Xc=R.default`
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
  ${hr}
`,ey=R.default`
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
  ${rc}
`,ty=R.default`
  mutation addStar($repositoryId: ID!) {
    addStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,ay=R.default`
  mutation removeStar($repositoryId: ID!) {
    removeStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,ry=R.default`
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
  ${Dn}
`,ny=R.default`
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
  ${ze}
  ${Wi}
`,oy=R.default`
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
  ${ze}
`,iy=R.default`
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
`,sy=(e,t,a,n)=>e();function Ji(e,t=sy){return{createLinkedBranch(a,n,r){return t(o=>e.request({document:nc,variables:a,requestHeaders:{...n,...o},signal:r}),"createLinkedBranch","mutation",a)},createRef(a,n,r){return t(o=>e.request({document:oc,variables:a,requestHeaders:{...n,...o},signal:r}),"createRef","mutation",a)},deleteLinkedBranch(a,n,r){return t(o=>e.request({document:ic,variables:a,requestHeaders:{...n,...o},signal:r}),"deleteLinkedBranch","mutation",a)},searchDiscussions(a,n,r){return t(o=>e.request({document:sc,variables:a,requestHeaders:{...n,...o},signal:r}),"searchDiscussions","query",a)},getGitHubDiscussionNumber(a,n,r){return t(o=>e.request({document:uc,variables:a,requestHeaders:{...n,...o},signal:r}),"getGitHubDiscussionNumber","query",a)},repositoryCollaboratorsForIssues(a,n,r){return t(o=>e.request({document:pc,variables:a,requestHeaders:{...n,...o},signal:r}),"repositoryCollaboratorsForIssues","query",a)},repositoryProjectsForIssues(a,n,r){return t(o=>e.request({document:lc,variables:a,requestHeaders:{...n,...o},signal:r}),"repositoryProjectsForIssues","query",a)},issueDetails(a,n,r){return t(o=>e.request({document:cc,variables:a,requestHeaders:{...n,...o},signal:r}),"issueDetails","query",a)},searchIssues(a,n,r){return t(o=>e.request({document:yc,variables:a,requestHeaders:{...n,...o},signal:r}),"searchIssues","query",a)},issueByNumber(a,n,r){return t(o=>e.request({document:dc,variables:a,requestHeaders:{...n,...o},signal:r}),"issueByNumber","query",a)},closeIssue(a,n,r){return t(o=>e.request({document:Sc,variables:a,requestHeaders:{...n,...o},signal:r}),"closeIssue","mutation",a)},reopenIssue(a,n,r){return t(o=>e.request({document:bc,variables:a,requestHeaders:{...n,...o},signal:r}),"reopenIssue","mutation",a)},changeIssueAssignees(a,n,r){return t(o=>e.request({document:gc,variables:a,requestHeaders:{...n,...o},signal:r}),"changeIssueAssignees","mutation",a)},changeIssueMilestone(a,n,r){return t(o=>e.request({document:Ic,variables:a,requestHeaders:{...n,...o},signal:r}),"changeIssueMilestone","mutation",a)},addIssueToProject(a,n,r){return t(o=>e.request({document:Mc,variables:a,requestHeaders:{...n,...o},signal:r}),"addIssueToProject","mutation",a)},createIssue(a,n,r){return t(o=>e.request({document:mc,variables:a,requestHeaders:{...n,...o},signal:r}),"createIssue","mutation",a)},searchIssueMentions(a,n,r){return t(o=>e.request({document:Rc,variables:a,requestHeaders:{...n,...o},signal:r}),"searchIssueMentions","query",a)},searchPullRequestMentions(a,n,r){return t(o=>e.request({document:Ac,variables:a,requestHeaders:{...n,...o},signal:r}),"searchPullRequestMentions","query",a)},issueOrPullRequestMention(a,n,r){return t(o=>e.request({document:fc,variables:a,requestHeaders:{...n,...o},signal:r}),"issueOrPullRequestMention","query",a)},searchRepositoryMentions(a,n,r){return t(o=>e.request({document:Pc,variables:a,requestHeaders:{...n,...o},signal:r}),"searchRepositoryMentions","query",a)},viewerRepositoryMentions(a,n,r){return t(o=>e.request({document:Ec,variables:a,requestHeaders:{...n,...o},signal:r}),"viewerRepositoryMentions","query",a)},changeProjectStatus(a,n,r){return t(o=>e.request({document:Cc,variables:a,requestHeaders:{...n,...o},signal:r}),"changeProjectStatus","mutation",a)},projectDetails(a,n,r){return t(o=>e.request({document:hc,variables:a,requestHeaders:{...n,...o},signal:r}),"projectDetails","query",a)},searchPullRequests(a,n,r){return t(o=>e.request({document:Dc,variables:a,requestHeaders:{...n,...o},signal:r}),"searchPullRequests","query",a)},pullRequestDetails(a,n,r){return t(o=>e.request({document:xc,variables:a,requestHeaders:{...n,...o},signal:r}),"pullRequestDetails","query",a)},repositoryCollaboratorsForPullRequests(a,n,r){return t(o=>e.request({document:Uc,variables:a,requestHeaders:{...n,...o},signal:r}),"repositoryCollaboratorsForPullRequests","query",a)},repositoryProjectsForPullRequests(a,n,r){return t(o=>e.request({document:_c,variables:a,requestHeaders:{...n,...o},signal:r}),"repositoryProjectsForPullRequests","query",a)},pullRequestCommits(a,n,r){return t(o=>e.request({document:vc,variables:a,requestHeaders:{...n,...o},signal:r}),"pullRequestCommits","query",a)},closePullRequest(a,n,r){return t(o=>e.request({document:Tc,variables:a,requestHeaders:{...n,...o},signal:r}),"closePullRequest","mutation",a)},reopenPullRequest(a,n,r){return t(o=>e.request({document:wc,variables:a,requestHeaders:{...n,...o},signal:r}),"reopenPullRequest","mutation",a)},markPullRequestReadyForReview(a,n,r){return t(o=>e.request({document:Oc,variables:a,requestHeaders:{...n,...o},signal:r}),"markPullRequestReadyForReview","mutation",a)},addPullRequestReview(a,n,r){return t(o=>e.request({document:Bc,variables:a,requestHeaders:{...n,...o},signal:r}),"addPullRequestReview","mutation",a)},changePullRequestAssignees(a,n,r){return t(o=>e.request({document:Lc,variables:a,requestHeaders:{...n,...o},signal:r}),"changePullRequestAssignees","mutation",a)},changePullRequestMilestone(a,n,r){return t(o=>e.request({document:qc,variables:a,requestHeaders:{...n,...o},signal:r}),"changePullRequestMilestone","mutation",a)},addPullRequestToProject(a,n,r){return t(o=>e.request({document:Nc,variables:a,requestHeaders:{...n,...o},signal:r}),"addPullRequestToProject","mutation",a)},requestReview(a,n,r){return t(o=>e.request({document:Vc,variables:a,requestHeaders:{...n,...o},signal:r}),"requestReview","mutation",a)},mergePullRequest(a,n,r){return t(o=>e.request({document:kc,variables:a,requestHeaders:{...n,...o},signal:r}),"mergePullRequest","mutation",a)},addPullRequestToMergeQueue(a,n,r){return t(o=>e.request({document:Fc,variables:a,requestHeaders:{...n,...o},signal:r}),"addPullRequestToMergeQueue","mutation",a)},removePullRequestFromMergeQueue(a,n,r){return t(o=>e.request({document:jc,variables:a,requestHeaders:{...n,...o},signal:r}),"removePullRequestFromMergeQueue","mutation",a)},enablePullRequestAutoMerge(a,n,r){return t(o=>e.request({document:zc,variables:a,requestHeaders:{...n,...o},signal:r}),"enablePullRequestAutoMerge","mutation",a)},disablePullRequestAutoMerge(a,n,r){return t(o=>e.request({document:Hc,variables:a,requestHeaders:{...n,...o},signal:r}),"disablePullRequestAutoMerge","mutation",a)},createPullRequest(a,n,r){return t(o=>e.request({document:Gc,variables:a,requestHeaders:{...n,...o},signal:r}),"createPullRequest","mutation",a)},initPullRequest(a,n,r){return t(o=>e.request({document:$c,variables:a,requestHeaders:{...n,...o},signal:r}),"initPullRequest","mutation",a)},searchRepositories(a,n,r){return t(o=>e.request({document:Qc,variables:a,requestHeaders:{...n,...o},signal:r}),"searchRepositories","query",a)},myLatestRepositories(a,n,r){return t(o=>e.request({document:Wc,variables:a,requestHeaders:{...n,...o},signal:r}),"myLatestRepositories","query",a)},milestonesForRepository(a,n,r){return t(o=>e.request({document:Kc,variables:a,requestHeaders:{...n,...o},signal:r}),"milestonesForRepository","query",a)},commentsForPullRequest(a,n,r){return t(o=>e.request({document:Yc,variables:a,requestHeaders:{...n,...o},signal:r}),"commentsForPullRequest","query",a)},dataForRepository(a,n,r){return t(o=>e.request({document:Jc,variables:a,requestHeaders:{...n,...o},signal:r}),"dataForRepository","query",a)},searchRepositoryBranches(a,n,r){return t(o=>e.request({document:Zc,variables:a,requestHeaders:{...n,...o},signal:r}),"searchRepositoryBranches","query",a)},repositoryIssues(a,n,r){return t(o=>e.request({document:Xc,variables:a,requestHeaders:{...n,...o},signal:r}),"repositoryIssues","query",a)},repositoryReleases(a,n,r){return t(o=>e.request({document:ey,variables:a,requestHeaders:{...n,...o},signal:r}),"repositoryReleases","query",a)},addStar(a,n,r){return t(o=>e.request({document:ty,variables:a,requestHeaders:{...n,...o},signal:r}),"addStar","mutation",a)},removeStar(a,n,r){return t(o=>e.request({document:ay,variables:a,requestHeaders:{...n,...o},signal:r}),"removeStar","mutation",a)},myStarredRepositories(a,n,r){return t(o=>e.request({document:ry,variables:a,requestHeaders:{...n,...o},signal:r}),"myStarredRepositories","query",a)},getViewer(a,n,r){return t(o=>e.request({document:ny,variables:a,requestHeaders:{...n,...o},signal:r}),"getViewer","query",a)},getViewerStats(a,n,r){return t(o=>e.request({document:oy,variables:a,requestHeaders:{...n,...o},signal:r}),"getViewerStats","query",a)},getViewerStatsDetails(a,n,r){return t(o=>e.request({document:iy,variables:a,requestHeaders:{...n,...o},signal:r}),"getViewerStatsDetails","query",a)}}}var xn=null,Un=null,ts=null,uy=(0,Xi.getPreferenceValues)();function py({token:e,type:t}){let a=t==="personal"?`token ${e}`:`bearer ${e}`;ts=e,xn=Ji(new Sr("https://api.github.com/graphql",{headers:{authorization:a}})),Un=new Zi.Octokit({auth:e,request:{fetch:Cr}})}var as=es.OAuthService.github({personalAccessToken:uy.personalAccessToken,scope:"notifications repo project read:org read:user read:packages",onAuthorize:py});function j(){if(!xn||!Un)throw new Error("GitHub clients not initialized");return{github:xn,octokit:Un,token:ts}}var bt=require("@raycast/api"),ly=B(require("react")),ns=require("react/jsx-runtime");function cy(e){let t=e.min||1,a=e.max||100,n=e.default||10,o=(0,bt.getPreferenceValues)()[e.name]||"",u=Number(o);return isNaN(u)||u<t||u>a?n:u}function rs(){return Math.min(cy({name:"numberOfResults",default:50}),25)}var at=require("@raycast/api");var D=require("@raycast/api"),Be=B(ye()),Ut=require("react");var q=require("@raycast/api"),hs=B(ye()),Ds=require("date-fns");var v=require("@raycast/api"),is=require("lodash");function Dr(e){switch(e){case"SUCCESS":return{icon:"Check",text:"Success"};case"ERROR":case"FAILURE":return{icon:"Xmark",text:"Failure"};case"PENDING":return{icon:"Clock",text:"Pending"};default:return null}}var Da=require("@raycast/api");function Pe(e){return e?{icon:{source:e.avatarUrl??Da.Icon.Person,mask:Da.Image.Mask.Circle},text:(e.name?e.name:e.login)??"-"}:{icon:Da.Icon.Person,text:"Unknown"}}function xr(e){switch(e){case"MERGE":return"Create Merge Commit";case"SQUASH":return"Squash and Merge";case"REBASE":return"Rebase and Merge";default:{let t=e;throw new Error(`Unknown merge method: ${t}`)}}}function xa(e){return e.merged?{icon:{source:"pull-request-merged.svg",tintColor:v.Color.Purple},text:"Merged",color:v.Color.Purple}:e.closed?{icon:{source:"pull-request-closed.svg",tintColor:v.Color.Red},text:"Closed",color:v.Color.Red}:e.isDraft?{icon:{source:"pull-request-draft.svg",tintColor:v.Color.SecondaryText},text:"Draft",color:v.Color.SecondaryText}:e.isInMergeQueue?{icon:{source:"pull-request-merge-queue.svg",tintColor:v.Color.Orange},text:"In Merge Queue",color:v.Color.Orange}:{icon:{source:"pull-request-open.svg",tintColor:v.Color.Green},text:"Open",color:v.Color.Green}}function Ur(e){return Pe(e.author)}function ss(e){let t=e.reviewRequests?.nodes?.map(n=>{let r=n?.requestedReviewer;if(r){let o;"userName"in r&&(o=r.userName),"teamName"in r&&(o=r.teamName);let u;"githubUsername"in r&&(u=r.githubUsername);let i;return"userAvatarURL"in r&&(i=r.userAvatarURL),"teamAvatarURL"in r&&(i=r.teamAvatarURL),{id:"id"in r?r.id:"",...Pe({name:o,login:u,avatarUrl:i})}}}),a=(0,is.uniqBy)(e.reviews?.nodes?.map(n=>({id:n?.author?.id,...Pe(n?.author)})),"id");return[...t??[],...a??[]]}function us(e){let t=e.comments.totalCount,a=e.reviews?.nodes?.reduce((r,o)=>r+(o?.bodyText===""?0:1),0)??0,n=e.reviewThreads.nodes?.map(r=>r?.comments.totalCount??0).reduce((r,o)=>r+o,0)??0;return t+a+n}function _r(e){let t=Dr(e);return t?{icon:v.Icon[t.icon],tooltip:`Checks: ${t.text}`}:null}function ps(e){switch(e){case"added":return{icon:{source:v.Icon.PlusCircle,tintColor:v.Color.Green},tooltip:"Added"};case"removed":return{icon:{source:v.Icon.MinusCircle,tintColor:v.Color.Red},tooltip:"Removed"};case"renamed":return{icon:{source:v.Icon.ArrowRight,tintColor:v.Color.SecondaryText},tooltip:"Renamed"};case"copied":return{icon:{source:v.Icon.CopyClipboard,tintColor:v.Color.SecondaryText},tooltip:"Copied"};case"unchanged":return{icon:{source:v.Icon.Circle,tintColor:v.Color.SecondaryText},tooltip:"Unchanged"};case"changed":return{icon:{source:v.Icon.Pencil,tintColor:v.Color.Orange},tooltip:"Changed"};default:return{icon:{source:v.Icon.Pencil,tintColor:v.Color.Orange},tooltip:"Modified"}}}var _n=400;function ls(e){let t=e.split(`
`);return t.length<=_n?{patch:e,remainingLines:0}:{patch:t.slice(0,_n).join(`
`),remainingLines:t.length-_n}}function cs(e){switch(e){case"REVIEW_REQUIRED":return{icon:{source:v.Icon.Eye,tintColor:v.Color.Yellow},tooltip:"Review required"};case"CHANGES_REQUESTED":return{icon:{source:v.Icon.Pencil,tintColor:v.Color.Orange},tooltip:"Changes requested"};case"APPROVED":return{icon:{source:v.Icon.CheckCircle,tintColor:v.Color.Green},tooltip:"Approved"};default:return null}}var ys=[{title:"Newest",value:"sort:created-desc"},{title:"Oldest",value:"sort:created-asc"},{title:"Most Commented",value:"sort:comments-desc"},{title:"Least Commented",value:"sort:comments-asc"},{title:"Recently Updated",value:"sort:updated-desc"},{title:"Least Recently Updated",value:"sort:updated-asc"},{title:"Best Match",value:"sort:relevance-desc"},{title:"\u{1F44D}",value:"sort:reactions-+1-desc"},{title:"\u{1F44E}",value:"sort:reactions--1-desc"},{title:"\u{1F604}",value:"sort:reactions-smile-desc"},{title:"\u{1F389}",value:"sort:reactions-tada-desc"},{title:"\u{1F641}",value:"sort:reactions-thinking_face-desc"},{title:"\u2764\uFE0F",value:"sort:reactions-heart-desc"},{title:"\u{1F680}",value:"sort:reactions-rocket-desc"},{title:"\u{1F440}",value:"sort:reactions-eyes-desc"}],ds="sort:updated-desc";function Ss(e){return[...new Map(e.map(t=>[t.id,t])).values()]}function He(e,t,{suffix:a="s",withNumber:n=!1}={}){let r=`${t}${e!==1?a:""}`;return n?`${e} ${r}`:r}var bs=B(ye());function gt(){let{github:e}=j(),{data:t}=(0,bs.useCachedPromise)(async()=>(await e.getViewer()).viewer);return t}var c=require("@raycast/api"),ta=B(ye()),ea=require("react");function V(e){return e?.response?.errors?e.response.errors[0].message:e instanceof Error?e.message:String(e)}var z=require("@raycast/api"),vr=B(ye());var Ge=require("react/jsx-runtime");function vn({pullRequest:e,mutate:t}){let{github:a}=j(),{pop:n}=(0,z.useNavigation)(),{handleSubmit:r,itemProps:o}=(0,vr.useForm)({async onSubmit(u){try{await(0,z.showToast)({style:z.Toast.Style.Animated,title:"Adding Review"}),await a.addPullRequestReview({nodeId:e.id,body:u.comment,event:u.event}),await t(),n(),await(0,z.showToast)({style:z.Toast.Style.Success,title:"Review added"})}catch(i){await(0,z.showToast)({style:z.Toast.Style.Failure,title:"Failed to add review",message:V(i)})}},validation:{comment:vr.FormValidation.Required}});return(0,Ge.jsxs)(z.Form,{actions:(0,Ge.jsx)(z.ActionPanel,{children:(0,Ge.jsx)(z.Action.SubmitForm,{title:"Submit",icon:z.Icon.Plus,onSubmit:r})}),children:[(0,Ge.jsx)(z.Form.TextArea,{...o.comment,title:"Comment",placeholder:"Add your comments here (markdown is supported)",enableMarkdown:!0}),(0,Ge.jsxs)(z.Form.Dropdown,{...o.event,title:"Review Type",children:[(0,Ge.jsx)(z.Form.Dropdown.Item,{title:"Comment",value:"COMMENT"}),(0,Ge.jsx)(z.Form.Dropdown.Item,{title:"Approve",value:"APPROVE"}),(0,Ge.jsx)(z.Form.Dropdown.Item,{title:"Request changes",value:"REQUEST_CHANGES"})]})]})}var wr=require("node:child_process"),ms=require("node:fs"),Rs=B(require("node:path")),wn=require("node:util"),O=require("@raycast/api"),Xt=B(ye());var Tr=require("node:child_process");var Is=require("node:util"),ge=require("@raycast/api"),yy=B(ye());function Tn(e){return[...e.userLogin?[`user:${e.userLogin}`]:[],...(e.orgLogins??[]).filter(a=>!!a).map(a=>`org:${a}`)].join(" ")}var eb=[{title:"github.dev",baseUrl:"https://github.dev/",icon:{source:"github-dev.svg",tintColor:ge.Color.PrimaryText},shortcut:ge.Keyboard.Shortcut.Common.Open},{title:"VS Code for the Web",baseUrl:"https://vscode.dev/github/",icon:{source:"vscode.svg",tintColor:ge.Color.PrimaryText},shortcut:{macOS:{modifiers:["cmd"],key:"v"},Windows:{modifiers:["ctrl"],key:"v"}}},{title:"CodeSandbox",baseUrl:"https://codesandbox.io/s/github/",icon:{source:"codesandbox.svg",tintColor:ge.Color.PrimaryText}},{title:"Replit",baseUrl:"https://repl.it/github/",icon:{source:"replit.svg",tintColor:ge.Color.PrimaryText}},{title:"Gitpod",baseUrl:"https://gitpod.io/#https://github.com/",icon:{source:"gitpod.svg",tintColor:ge.Color.PrimaryText}},{title:"Glitch",baseUrl:"https://glitch.com/edit/#!/import/github/",icon:{source:"glitch.svg",tintColor:ge.Color.PrimaryText}},{title:"Sourcegraph",baseUrl:"https://sourcegraph.com/github.com/",icon:{source:"sourcegraph.svg",tintColor:ge.Color.PrimaryText},shortcut:{macOS:{modifiers:["cmd"],key:"s"},Windows:{modifiers:["ctrl"],key:"s"}}},{title:"DeepWiki",baseUrl:"https://deepwiki.com/",icon:{source:"deepwiki.png"},shortcut:{macOS:{modifiers:["cmd"],key:"d"},Windows:{modifiers:["ctrl"],key:"d"}}},{title:"VS Code Remote Repositories",baseUrl:"vscode://GitHub.remotehub/open?url=https://github.com/",icon:{source:"vscode.svg",tintColor:ge.Color.PrimaryText}}];var dy=[{title:"Relevance",value:""},{title:"Last Update",value:"sort:updated-desc"},{title:"Name",value:"sort:name-asc"},{title:"Stars",value:"sort:stars-desc"},{title:"Forks",value:"sort:forks-desc"}],Sy=[{title:"Last Pushed",value:"pushed_at:desc"},{title:"Name",value:"name:asc"},{title:"Stars",value:"stargazers:desc"}],by=[{title:"Recently Starred",value:"starred_at:desc"},{title:"Oldest Starred",value:"starred_at:asc"}],tb=dy[0].value,ab=Sy[0].value,rb=by[0].value;var Ms=(e,t,a)=>{let n=a?.gitFlags??[],r=a?.targetDir??"",o=["clone",...n,gy(e,t)];return r&&o.push(r),o};var nb=(0,Is.promisify)(Tr.execFile);var Ua="\x1B",gs="\x07",ob=new RegExp(`${Ua}][^${gs}${Ua}]*(?:${gs}|${Ua}\\\\)`,"g"),ib=new RegExp(`${Ua}\\[[0-9;?]*[A-Za-z]`,"g"),sb=new RegExp(`${Ua}\\([0-9A-Za-z]`,"g");var gy=(e,t)=>t==="https"?`https://github.com/${e}.git`:`git@github.com:${e}.git`;var xt=require("react/jsx-runtime");function On({pullRequest:e}){let{repositoryCloneProtocol:t}=(0,O.getPreferenceValues)(),{itemProps:a,handleSubmit:n}=(0,Xt.useForm)({async onSubmit(r){let o=e.repository.name,u=Rs.default.join(r.clonePath[0],o),i=e.headRef?.name||e.headRefName;if(!i){await(0,O.showToast)({style:O.Toast.Style.Failure,title:"Branch name not found",message:"Unable to determine the branch name for this pull request."});return}let s=(0,wn.promisify)(wr.exec),p=(0,wn.promisify)(wr.execFile);try{if((0,ms.existsSync)(u)){await(0,O.showToast)({title:`Switching to branch ${i}`,message:`in ${u}`,style:O.Toast.Style.Animated});let{stdout:l}=await s("git remote",{cwd:u}),y=l.trim().split(`
`)[0]||"origin";await s(`git fetch ${y} ${i}`,{cwd:u}),await s(`git checkout ${i}`,{cwd:u}),await s(`git reset --hard ${y}/${i}`,{cwd:u}),await(0,O.showToast)({style:O.Toast.Style.Success,title:"Switched to branch successfully",message:`Now on ${i}`})}else await(0,O.showToast)({title:`Cloning ${e.repository.nameWithOwner}`,message:`to ${u}`,style:O.Toast.Style.Animated}),await p("git",Ms(e.repository.nameWithOwner,t,{gitFlags:["-b",i],targetDir:u})),await(0,O.showToast)({style:O.Toast.Style.Success,title:"Repository cloned successfully",message:`Checked out ${i}`});await(0,O.open)(u),await(0,O.popToRoot)(),await(0,O.closeMainWindow)()}catch(l){if(l instanceof Error&&l.message.includes("Repository not found")){await(0,Xt.showFailureToast)(l,{title:"Repository not found",message:"You may not have access to this repository. Try using SSH instead of HTTPS."});return}if(l instanceof Error&&l.message.includes("already exists")){await(0,Xt.showFailureToast)(l,{title:"The repository already exists",message:"Please choose a different directory to clone the repository."});return}await(0,Xt.showFailureToast)(l,{title:"Failed checking out pull request"})}}});return(0,xt.jsxs)(O.Form,{navigationTitle:`Check out PR #${e.number}`,actions:(0,xt.jsx)(O.ActionPanel,{children:(0,xt.jsx)(O.Action.SubmitForm,{title:"Check out Pull Request",onSubmit:n})}),children:[(0,xt.jsx)(O.Form.Description,{title:"Repository",text:`${e.repository.nameWithOwner} - ${e.headRef?.name||e.headRefName}`}),(0,xt.jsx)(O.Form.FilePicker,{...a.clonePath,title:"Clone Path",info:"Select the directory where the repository should be cloned. If the repository already exists, it will switch to the PR branch.",allowMultipleSelection:!1,canChooseDirectories:!0,canChooseFiles:!1,storeValue:!0})]})}var ue=require("@raycast/api"),As=B(ye()),Or=require("date-fns");var ve=require("react/jsx-runtime");function Bn({pullRequest:e}){let{github:t}=j(),{data:a,isLoading:n,pagination:r}=(0,As.useCachedPromise)(u=>async({cursor:i})=>{let p=(await t.pullRequestCommits({nodeId:u.id,numberOfItems:25,before:i})).node,l=p.commits.nodes?.filter(y=>y!=null)??[];return l.sort((y,S)=>{let m=y.commit.authoredDate,d=S.commit.authoredDate;return(0,Or.compareDesc)(new Date(m),new Date(d))}),{data:l,hasMore:p.commits.pageInfo.hasPreviousPage,cursor:p.commits.pageInfo.startCursor??void 0}},[e]),o=[...new Map((a??[]).map(u=>[u.commit.id,u])).values()];return(0,ve.jsx)(ue.List,{navigationTitle:`#${e.number} Commits`,isLoading:n,pagination:r,children:o.map(u=>{let i=u.commit,s=new Date(i.authoredDate),p=[{date:s,tooltip:(0,Or.format)(s,"EEEE d MMMM yyyy 'at' HH:mm")}];if(i.statusCheckRollup?.state){let y=_r(i.statusCheckRollup.state);y&&p.unshift(y)}let l;if(i.author){let y={source:i.author.avatarUrl,mask:ue.Image.Mask.Circle};l=i.author.name?{value:y,tooltip:i.author.name}:y}return(0,ve.jsx)(ue.List.Item,{title:i.message,subtitle:{value:i.abbreviatedOid,tooltip:i.oid},accessories:p,...l?{icon:l}:{},actions:(0,ve.jsxs)(ue.ActionPanel,{children:[(0,ve.jsx)(ue.Action.OpenInBrowser,{title:"Open Commit in Browser",url:i.url}),(0,ve.jsx)(ue.Action.OpenInBrowser,{title:"Open Commit Tree in Browser",url:i.treeUrl}),(0,ve.jsxs)(ue.ActionPanel.Section,{children:[(0,ve.jsx)(ue.Action.CopyToClipboard,{content:i.url,title:"Copy Commit URL",shortcut:{macOS:{modifiers:["cmd","shift"],key:","},Windows:{modifiers:["ctrl","shift"],key:","}}}),(0,ve.jsx)(ue.Action.CopyToClipboard,{content:i.oid,title:"Copy Commit Hash",shortcut:{macOS:{modifiers:["cmd","shift"],key:"."},Windows:{modifiers:["ctrl","shift"],key:"."}}}),(0,ve.jsx)(ue.Action.CopyToClipboard,{content:i.treeUrl,title:"Copy Commit Tree URL",shortcut:{macOS:{modifiers:["ctrl","shift"],key:","},Windows:{modifiers:["alt","shift"],key:","}}}),(0,ve.jsx)(ue.Action.CopyToClipboard,{content:i.message,title:"Copy Commit Message",shortcut:{macOS:{modifiers:["ctrl","shift"],key:"."},Windows:{modifiers:["alt","shift"],key:"."}}})]})]})},i.id)})})}var Ps=require("node:crypto"),Q=require("@raycast/api"),Br=B(ye());var pe=require("react/jsx-runtime"),fs=100,Iy=4;function Ln({pullRequest:e}){let{octokit:t}=j(),{data:a,isLoading:n,pagination:r}=(0,Br.useCachedPromise)((i,s,p)=>async({page:l})=>{let{data:y}=await t.pulls.listFiles({owner:i,repo:s,pull_number:p,per_page:fs,page:l+1});return{data:y,hasMore:y.length===fs}},[e.repository.owner.login,e.repository.name,e.number],{async onError(i){await(0,Br.showFailureToast)(i,{title:"Failed loading changed files"})}}),o=a??[],u="additions"in e&&"deletions"in e?`+${e.additions} \u2212${e.deletions}`:void 0;return(0,pe.jsxs)(Q.List,{isLoading:n,isShowingDetail:n||o.length>0,pagination:r,navigationTitle:`#${e.number} Diff`,children:[(0,pe.jsx)(Q.List.Section,{title:He(o.length,"file",{withNumber:!0}),subtitle:u,children:o.map(i=>{let s=ps(i.status);return(0,pe.jsx)(Q.List.Item,{title:i.filename,icon:{value:s.icon,tooltip:s.tooltip},subtitle:i.previous_filename?{value:i.previous_filename,tooltip:`${i.previous_filename} \u2192 ${i.filename}`}:void 0,accessories:[{text:{value:`+${i.additions}`,color:Q.Color.Green}},{text:{value:`\u2212${i.deletions}`,color:Q.Color.Red}}],detail:(0,pe.jsx)(Q.List.Item.Detail,{markdown:My(i)}),actions:(0,pe.jsxs)(Q.ActionPanel,{title:i.filename,children:[(0,pe.jsx)(Q.Action.OpenInBrowser,{title:"Open File Diff in Browser",url:`${e.permalink}/files#diff-${Ry(i.filename)}`}),(0,pe.jsx)(Q.Action.OpenInBrowser,{title:"Open Diff in Browser",url:`${e.permalink}/files`}),(0,pe.jsxs)(Q.ActionPanel.Section,{children:[(0,pe.jsx)(Q.Action.CopyToClipboard,{content:i.filename,title:"Copy File Path",shortcut:{macOS:{modifiers:["cmd","shift"],key:"."},Windows:{modifiers:["ctrl","shift"],key:"."}}}),i.patch?(0,pe.jsx)(Q.Action.CopyToClipboard,{content:i.patch,title:"Copy Patch",shortcut:{macOS:{modifiers:["cmd","shift"],key:","},Windows:{modifiers:["ctrl","shift"],key:","}}}):null]})]})},i.sha+i.filename)})}),(0,pe.jsx)(Q.List.EmptyView,{icon:Q.Icon.CodeBlock,title:"No changed files",description:"This pull request does not change any files.",actions:(0,pe.jsx)(Q.ActionPanel,{children:(0,pe.jsx)(Q.Action.OpenInBrowser,{title:"Open Diff in Browser",url:`${e.permalink}/files`})})})]})}function My(e){if(!e.patch)return"_No text diff available (binary or too large). Open on GitHub to view._";let{patch:t,remainingLines:a}=ls(e.patch),n=my(t),r=`${n}diff
${t}
${n}`;return a===0?r:`${r}

_\u2026 truncated, ${He(a,"more line",{withNumber:!0})}. Open the file on GitHub for the full diff._`}function my(e){let t=0;for(let[a]of e.matchAll(/`+/g))t=Math.max(t,a.length);return"`".repeat(Math.max(Iy,t+1))}function Ry(e){return(0,Ps.createHash)("sha256").update(e).digest("hex")}var Ie=require("@raycast/api"),$e=require("react/jsx-runtime"),Cs=({sortQuery:e,setSortQuery:t,data:a})=>t?(0,$e.jsxs)(Ie.ActionPanel.Submenu,{title:"Sort by",icon:Ie.Icon.ArrowUp,shortcut:Ie.Keyboard.Shortcut.Common.Duplicate,children:[a.filter(({value:n})=>!n.startsWith("sort:reaction")).map(({title:n,value:r})=>(0,$e.jsx)(Es,{title:n,value:r,sortQuery:e??"",setSortQuery:t},r||"relevance")),a.some(({value:n})=>n.startsWith("sort:reaction"))&&(0,$e.jsx)(Ie.ActionPanel.Section,{title:"Most Reactions",children:a.filter(({value:n})=>n.startsWith("sort:reaction")).map(({title:n,value:r})=>(0,$e.jsx)(Es,{title:n,value:r,sortQuery:e??"",setSortQuery:t},r))})]}):(0,$e.jsx)($e.Fragment,{}),Es=({title:e,value:t,sortQuery:a,setSortQuery:n})=>(0,$e.jsx)(Ie.Action,{title:e,icon:a===t?{source:Ie.Icon.CheckCircle,tintColor:Ie.Color.Green}:Ie.Icon.Circle,onAction:()=>n(t)});var E=require("react/jsx-runtime");function _a({pullRequest:e,viewer:t,mutateList:a,mutateDetail:n,children:r,sortQuery:o,setSortQuery:u}){let{github:i}=j();async function s(){a&&await a(),n&&await n()}async function p(){try{await(0,c.showToast)({style:c.Toast.Style.Animated,title:`Reopening pull request #${e.number}`}),await i.reopenPullRequest({nodeId:e.id}),await s(),await(0,c.showToast)({style:c.Toast.Style.Success,title:`Pull request #${e.number} is now open`})}catch(U){await(0,c.showToast)({style:c.Toast.Style.Failure,title:"Failed reopening pull request",message:V(U)})}}async function l(){try{await(0,c.showToast)({style:c.Toast.Style.Animated,title:`Marking pull request #${e.number} as ready for review`}),await i.markPullRequestReadyForReview({nodeId:e.id}),await s(),await(0,c.showToast)({style:c.Toast.Style.Success,title:`Pull request #${e.number} is ready for review`})}catch(U){await(0,c.showToast)({style:c.Toast.Style.Failure,title:"Failed marking pull request as ready for review",message:V(U)})}}async function y(){try{await(0,c.showToast)({style:c.Toast.Style.Animated,title:`Closing pull request #${e.number}`}),await i.closePullRequest({nodeId:e.id}),await s(),await(0,c.showToast)({style:c.Toast.Style.Success,title:`Pull request #${e.number} closed`})}catch(U){await(0,c.showToast)({style:c.Toast.Style.Failure,title:"Failed closing pull request",message:V(U)})}}async function S(U){try{await(0,c.showToast)({style:c.Toast.Style.Animated,title:`Merging pull request #${e.number}`}),await i.mergePullRequest({nodeId:e.id,method:U}),await s(),await(0,c.showToast)({style:c.Toast.Style.Success,title:`Pull request #${e.number} merged`})}catch(ee){await(0,c.showToast)({style:c.Toast.Style.Failure,title:"Failed merging pull request",message:V(ee)})}}async function m(){try{await(0,c.showToast)({style:c.Toast.Style.Animated,title:`Adding pull request #${e.number} to merge queue`}),await i.addPullRequestToMergeQueue({nodeId:e.id}),await s(),await(0,c.showToast)({style:c.Toast.Style.Success,title:`Pull request #${e.number} added to merge queue`})}catch(U){await(0,c.showToast)({style:c.Toast.Style.Failure,title:"Failed adding pull request to merge queue",message:V(U)})}}async function d(){try{await(0,c.showToast)({style:c.Toast.Style.Animated,title:`Removing pull request #${e.number} from merge queue`}),await i.removePullRequestFromMergeQueue({nodeId:e.id}),await s(),await(0,c.showToast)({style:c.Toast.Style.Success,title:`Pull request #${e.number} removed from merge queue`})}catch(U){await(0,c.showToast)({style:c.Toast.Style.Failure,title:"Failed removing pull request from merge queue",message:V(U)})}}async function g(U){try{await(0,c.showToast)({style:c.Toast.Style.Animated,title:`Enabling auto-merge for pull request #${e.number}`}),await i.enablePullRequestAutoMerge({nodeId:e.id,mergeMethod:U}),await s(),await(0,c.showToast)({style:c.Toast.Style.Success,title:`Auto-merge enabled for pull request #${e.number}`})}catch(ee){await(0,c.showToast)({style:c.Toast.Style.Failure,title:"Failed enabling auto-merge",message:V(ee)})}}async function b(){try{await(0,c.showToast)({style:c.Toast.Style.Animated,title:`Disabling auto-merge for pull request #${e.number}`}),await i.disablePullRequestAutoMerge({nodeId:e.id}),await s(),await(0,c.showToast)({style:c.Toast.Style.Success,title:`Auto-merge disabled for pull request #${e.number}`})}catch(U){await(0,c.showToast)({style:c.Toast.Style.Failure,title:"Failed disabling auto-merge",message:V(U)})}}async function I(U){try{await(0,c.showToast)({style:c.Toast.Style.Animated,title:"Assigning to me"});let ee=e.assignees.nodes?.filter(le=>!!le).map(le=>le?.id)??[];await i.changePullRequestAssignees({pullRequestId:e.id,assigneeIds:[...ee,U]}),await s(),await(0,c.showToast)({style:c.Toast.Style.Success,title:"Assigned to me"})}catch(ee){await(0,c.showToast)({style:c.Toast.Style.Failure,title:"Failed assigning to me",message:V(ee)})}}async function A(U){try{await(0,c.showToast)({style:c.Toast.Style.Animated,title:"Un-assigning from me"});let ee=e.assignees.nodes?.filter(le=>!!le).map(le=>le?.id)??[];await i.changePullRequestAssignees({pullRequestId:e.id,assigneeIds:ee?.filter(le=>le!==U)}),await s(),await(0,c.showToast)({style:c.Toast.Style.Success,title:"Un-assigned from me"})}catch(ee){await(0,c.showToast)({style:c.Toast.Style.Failure,title:"Failed un-assigning from me",message:V(ee)})}}let P=!e.closed&&!e.isDraft&&e.mergeable==="MERGEABLE"&&e.mergeStateStatus!=="BLOCKED",M=!e.closed&&!e.merged,h=e.author?"isViewer"in e.author?e.author.isViewer:e.author.login===t?.login:!1,C=M&&e.isDraft&&h,w=[e.repository.mergeCommitAllowed&&"MERGE",e.repository.squashMergeAllowed&&"SQUASH",e.repository.rebaseMergeAllowed&&"REBASE"].filter(Boolean),H=M&&e.repository.autoMergeAllowed,ae=P||H,W=Pe(t),F=e.assignees.nodes?.some(U=>U?.isViewer),{isOpenInBrowser:ne}=(0,c.getPreferenceValues)(),oe=(0,E.jsx)(c.Action.OpenInBrowser,{url:e.permalink}),[x,X]=ne?[oe,r]:[r,oe];return(0,E.jsxs)(c.ActionPanel,{title:`#${e.number} in ${e.repository.nameWithOwner}`,children:[x,X,(0,E.jsx)(c.Action.Push,{icon:c.Icon.Document,title:"Add Review",shortcut:{macOS:{modifiers:["cmd","shift"],key:"r"},Windows:{modifiers:["ctrl","shift"],key:"r"}},target:(0,E.jsx)(vn,{pullRequest:e,mutate:s})}),(0,E.jsx)(c.Action.Push,{icon:{source:"commit.svg",tintColor:c.Color.PrimaryText},title:"See Commits",shortcut:c.Keyboard.Shortcut.Common.Copy,target:(0,E.jsx)(Bn,{pullRequest:e})}),(0,E.jsx)(c.Action.Push,{icon:c.Icon.CodeBlock,title:"View Diff",shortcut:c.Keyboard.Shortcut.Common.RemoveAll,target:(0,E.jsx)(Ln,{pullRequest:e})}),(0,E.jsx)(c.Action.Push,{icon:c.Icon.Download,title:"Checkout Pull Request",shortcut:c.Keyboard.Shortcut.Common.OpenWith,target:(0,E.jsx)(On,{pullRequest:e})}),ae&&(0,E.jsxs)(c.ActionPanel.Section,{children:[e.isMergeQueueEnabled&&P&&!e.isInMergeQueue&&(0,E.jsx)(c.Action,{title:"Add to Merge Queue",icon:{source:"pull-request-merged.svg",tintColor:c.Color.PrimaryText},shortcut:{macOS:{modifiers:["cmd","shift"],key:"enter"},Windows:{modifiers:["ctrl","shift"],key:"enter"}},onAction:()=>m()}),e.isMergeQueueEnabled&&e.isInMergeQueue&&(0,E.jsx)(c.Action,{title:"Remove from Merge Queue",icon:{source:"pull-request-merged.svg",tintColor:c.Color.PrimaryText},shortcut:{macOS:{modifiers:["cmd","shift"],key:"enter"},Windows:{modifiers:["ctrl","shift"],key:"enter"}},onAction:()=>d()}),!e.isMergeQueueEnabled&&P?(0,E.jsxs)(E.Fragment,{children:[e.repository.mergeCommitAllowed?(0,E.jsx)(c.Action,{title:"Create Merge Commit",icon:{source:"pull-request-merged.svg",tintColor:c.Color.PrimaryText},shortcut:{macOS:{modifiers:["cmd","shift"],key:"enter"},Windows:{modifiers:["ctrl","shift"],key:"enter"}},onAction:()=>S("MERGE")}):null,e.repository.squashMergeAllowed?(0,E.jsx)(c.Action,{title:"Squash and Merge",icon:{source:"pull-request-merged.svg",tintColor:c.Color.PrimaryText},shortcut:{macOS:{modifiers:["ctrl","shift"],key:"enter"},Windows:{modifiers:["ctrl","alt","shift"],key:"enter"}},onAction:()=>S("SQUASH")}):null,e.repository.rebaseMergeAllowed?(0,E.jsx)(c.Action,{title:"Rebase and Merge",icon:{source:"pull-request-merged.svg",tintColor:c.Color.PrimaryText},shortcut:{macOS:{modifiers:["opt","shift"],key:"enter"},Windows:{modifiers:["alt","shift"],key:"enter"}},onAction:()=>S("REBASE")}):null]}):null,H&&!e.autoMergeRequest&&w.length===1&&(0,E.jsx)(c.Action,{title:"Enable Auto-Merge",icon:{source:"pull-request-merged.svg",tintColor:c.Color.PrimaryText},onAction:()=>g(w[0])}),H&&!e.autoMergeRequest&&w.length>1&&(0,E.jsx)(c.ActionPanel.Submenu,{title:"Enable Auto-Merge",icon:{source:"pull-request-merged.svg",tintColor:c.Color.PrimaryText},children:w.map(U=>(0,E.jsx)(c.Action,{title:xr(U),onAction:()=>g(U)},U))}),M&&e.autoMergeRequest&&(0,E.jsx)(c.Action,{title:"Disable Auto-Merge",icon:{source:"pull-request-merged.svg",tintColor:c.Color.PrimaryText},onAction:()=>b()})]}),(0,E.jsxs)(c.ActionPanel.Section,{children:[(0,E.jsx)(Ay,{pullRequest:e,mutate:s}),t?(0,E.jsx)(c.Action,{title:F?"Unassign from Me":"Assign to Me",icon:W.icon,shortcut:{macOS:{modifiers:["cmd","shift"],key:"i"},Windows:{modifiers:["ctrl","shift"],key:"i"}},onAction:()=>F?A(t.id):I(t.id)}):null,(0,E.jsx)(fy,{pullRequest:e,mutate:s}),(0,E.jsx)(Py,{pullRequest:e,mutate:s}),(0,E.jsx)(Ey,{pullRequest:e,mutate:s}),(0,E.jsx)(Cy,{pullRequest:e,mutate:s})]}),(0,E.jsxs)(c.ActionPanel.Section,{children:[C?(0,E.jsx)(c.Action,{title:"Ready for Review",icon:{source:"pull-request-open.svg",tintColor:c.Color.PrimaryText},shortcut:{macOS:{modifiers:["cmd","shift"],key:"d"},Windows:{modifiers:["ctrl","shift"],key:"d"}},onAction:()=>l()}):null,e.closed&&!e.merged?(0,E.jsx)(c.Action,{title:"Reopen Pull Request",icon:{source:"pull-request-open.svg",tintColor:c.Color.PrimaryText},onAction:()=>p()}):null,e.closed?null:(0,E.jsx)(c.Action,{title:"Close Pull Request",style:c.Action.Style.Destructive,icon:c.Icon.XMarkCircle,onAction:()=>y()})]}),(0,E.jsxs)(c.ActionPanel.Section,{children:[(0,E.jsx)(c.Action.CopyToClipboard,{content:e.number,title:"Copy Pull Request Number",shortcut:{macOS:{modifiers:["cmd","shift"],key:"."},Windows:{modifiers:["ctrl","shift"],key:"."}}}),e.headRef?(0,E.jsx)(c.Action.CopyToClipboard,{content:e.headRef.name,title:"Copy Branch Name",shortcut:{macOS:{modifiers:["ctrl","shift"],key:"."},Windows:{modifiers:["alt","shift"],key:"."}}}):null,(0,E.jsx)(c.Action.CopyToClipboard,{content:e.permalink,title:"Copy Pull Request URL",shortcut:{macOS:{modifiers:["cmd","shift"],key:","},Windows:{modifiers:["ctrl","shift"],key:","}}}),(0,E.jsx)(c.Action.CopyToClipboard,{content:e.title,title:"Copy Pull Request Title",shortcut:{macOS:{modifiers:["ctrl","shift"],key:","},Windows:{modifiers:["alt","shift"],key:","}}}),(0,E.jsx)(c.Action.CopyToClipboard,{content:`[${e.title}](${e.permalink})`,title:"Copy Markdown URL",shortcut:{macOS:{modifiers:["cmd","shift"],key:";"},Windows:{modifiers:["ctrl","shift"],key:";"}}})]}),(0,E.jsxs)(c.ActionPanel.Section,{children:[(0,E.jsx)(Cs,{data:ys,sortQuery:o,setSortQuery:u}),(0,E.jsx)(c.Action,{icon:c.Icon.ArrowClockwise,title:"Refresh",onAction:s,shortcut:c.Keyboard.Shortcut.Common.Refresh})]})]})}function Ay({pullRequest:e,mutate:t}){let{github:a}=j(),[n,r]=(0,ea.useState)(!1),[o,u]=(0,ea.useState)(""),{data:i,isLoading:s}=(0,ta.useCachedPromise)(async(l,y)=>a.repositoryCollaboratorsForPullRequests({owner:l.repository.owner.login,name:l.repository.name,pullRequestNumber:l.number,searchQuery:y}),[e,o],{execute:n});async function p({id:l,text:y}){try{await(0,c.showToast)({style:c.Toast.Style.Animated,title:"Requesting review",message:y}),await a.requestReview({pullRequestId:e.id,collaboratorId:l}),await t(),await(0,c.showToast)({style:c.Toast.Style.Success,title:"Requested review",message:y})}catch(S){await(0,c.showToast)({style:c.Toast.Style.Failure,title:"Failed requesting review",message:V(S)})}}return(0,E.jsx)(c.ActionPanel.Submenu,{title:"Request Review",icon:c.Icon.AddPerson,shortcut:{macOS:{modifiers:["ctrl","shift"],key:"r"},Windows:{modifiers:["alt","shift"],key:"r"}},onOpen:()=>r(!0),onSearchTextChange:u,isLoading:s,children:i?.repository?.collaborators?.nodes?.filter(l=>!l?.isViewer).map(l=>{if(!l)return null;let y=Pe(l);return(0,E.jsx)(c.Action,{title:y.text,icon:y.icon,onAction:()=>p({id:l.id,text:y.text})},l.id)})})}function fy({pullRequest:e,mutate:t}){let{github:a}=j(),[n,r]=(0,ea.useState)(!1),{data:o,isLoading:u}=(0,ta.useCachedPromise)(async s=>a.repositoryCollaboratorsForPullRequests({owner:s.repository.owner.login,name:s.repository.name,pullRequestNumber:s.number}),[e],{execute:n});async function i({id:s,text:p}){try{await(0,c.showToast)({style:c.Toast.Style.Animated,title:"Adding assignee",message:p});let l=o?.repository?.pullRequest?.assignees.nodes?.filter(y=>!!y).map(y=>y?.id)??[];await a.changePullRequestAssignees({pullRequestId:e.id,assigneeIds:[...l,s]}),await t(),await(0,c.showToast)({style:c.Toast.Style.Success,title:"Added assignee",message:p})}catch(l){await(0,c.showToast)({style:c.Toast.Style.Failure,title:"Failed adding assignee",message:V(l)})}}return(0,E.jsx)(c.ActionPanel.Submenu,{title:"Add Assignee",icon:c.Icon.AddPerson,shortcut:{macOS:{modifiers:["cmd","shift"],key:"a"},Windows:{modifiers:["ctrl","shift"],key:"a"}},onOpen:()=>r(!0),children:u?(0,E.jsx)(c.Action,{title:"Loading\u2026"}):o?.repository?.collaborators?.nodes?.map(s=>{if(!s)return null;let p=Pe(s);return(0,E.jsx)(c.Action,{title:p.text,icon:p.icon,onAction:()=>i({id:s.id,text:p.text})},s.id)})})}function Py({pullRequest:e,mutate:t}){let{github:a}=j(),[n,r]=(0,ea.useState)(!1),{data:o,isLoading:u}=(0,ta.useCachedPromise)(async s=>a.repositoryProjectsForPullRequests({owner:s.repository.owner.login,name:s.repository.name,pullRequestNumber:s.number}),[e],{execute:n});async function i({id:s,text:p}){try{await(0,c.showToast)({style:c.Toast.Style.Animated,title:"Adding to project",message:p}),await a.addPullRequestToProject({pullRequestId:e.id,projectId:s}),await t(),await(0,c.showToast)({style:c.Toast.Style.Success,title:"Added to project",message:p})}catch(l){await(0,c.showToast)({style:c.Toast.Style.Failure,title:"Failed adding to project",message:V(l)})}}return(0,E.jsx)(c.ActionPanel.Submenu,{title:"Add to Project",icon:{source:"project.svg",tintColor:c.Color.PrimaryText},shortcut:{macOS:{modifiers:["cmd","shift"],key:"p"},Windows:{modifiers:["ctrl","shift"],key:"p"}},onOpen:()=>r(!0),children:u?(0,E.jsx)(c.Action,{title:"Loading\u2026"}):o?.repository?.projectsV2.nodes?.map(s=>s?(0,E.jsx)(c.Action,{title:s.title,onAction:()=>i({id:s.id,text:s.title})},s.id):null)})}function Ey({pullRequest:e,mutate:t}){let{github:a}=j(),[n,r]=(0,ea.useState)(!1),{data:o,isLoading:u}=(0,ta.useCachedPromise)(async p=>a.milestonesForRepository({owner:p.repository.owner.login,name:p.repository.name}),[e],{execute:n});async function i(){try{await(0,c.showToast)({style:c.Toast.Style.Animated,title:"Removing milestone"}),await a.changePullRequestMilestone({pullRequestId:e.id,milestoneId:null}),await t(),await(0,c.showToast)({style:c.Toast.Style.Success,title:"Removed milestone"})}catch(p){await(0,c.showToast)({style:c.Toast.Style.Failure,title:"Failed removing milestone",message:V(p)})}}async function s({id:p,text:l}){try{await(0,c.showToast)({style:c.Toast.Style.Animated,title:"Setting milestone",message:l}),await a.changePullRequestMilestone({pullRequestId:e.id,milestoneId:p}),await t(),await(0,c.showToast)({style:c.Toast.Style.Success,title:"Milestone set",message:l})}catch(y){await(0,c.showToast)({style:c.Toast.Style.Failure,title:"Failed setting milestone",message:V(y)})}}return(0,E.jsx)(c.ActionPanel.Submenu,{title:"Set Milestone",icon:{source:"milestone.svg",tintColor:c.Color.PrimaryText},shortcut:{macOS:{modifiers:["cmd","shift"],key:"m"},Windows:{modifiers:["ctrl","shift"],key:"m"}},onOpen:()=>r(!0),children:u?(0,E.jsx)(c.Action,{title:"Loading\u2026"}):(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(c.Action,{title:"No Milestone",onAction:()=>i()}),o?.repository?.milestones?.nodes?.map(p=>p?(0,E.jsx)(c.Action,{title:p.title,onAction:()=>s({id:p.id,text:p.title}),autoFocus:e.milestone?.id===p.id},p.id):null)]})})}function Cy({pullRequest:e}){let{github:t}=j(),{data:a,isLoading:n}=(0,ta.useCachedPromise)(async r=>{let i=(await t.commentsForPullRequest({owner:r.repository.owner.login,name:r.repository.name,number:r.number}))?.repository?.pullRequest?.comments.nodes?.filter(l=>l?.author?.login==="vercel");return i?.length?i.pop()?.body?.match(/\[Visit Preview\]\([^)]+\)/)?.[0]?.replace("[Visit Preview](","").replace(")","")??void 0:void 0},[e]);return(0,E.jsx)(E.Fragment,{children:n?(0,E.jsx)(c.Action,{title:"Loading\u2026"}):a&&(0,E.jsx)(c.Action.OpenInBrowser,{title:"Open Vercel Preview",shortcut:{macOS:{modifiers:["cmd","shift"],key:"v"},Windows:{modifiers:["ctrl","shift"],key:"v"}},url:a,icon:{source:"vercel.svg",tintColor:c.Color.PrimaryText}})})}var k=require("react/jsx-runtime");function va({initialPullRequest:e,mutateList:t}){let{github:a}=j(),n=gt(),{data:r,isLoading:o,mutate:u}=(0,hs.useCachedPromise)(async S=>(await a.pullRequestDetails({nodeId:S})).node,[e.id],{initialData:e}),i=`# ${r.title}`;r?.body&&(i+=`

${r.body}`);let s=xa(r),p=Dr(r.commits.nodes?.[0]?.commit.statusCheckRollup?.state),l=Ur(r),y=ss(r);return(0,k.jsx)(q.Detail,{isLoading:o,markdown:i,navigationTitle:`#${r.number}`,metadata:(0,k.jsxs)(q.Detail.Metadata,{children:[(0,k.jsx)(q.Detail.Metadata.Label,{title:"Repository",text:r.repository.nameWithOwner}),(0,k.jsxs)(q.Detail.Metadata.TagList,{title:"Status",children:[(0,k.jsx)(q.Detail.Metadata.TagList.Item,{...s}),r.autoMergeRequest&&(0,k.jsx)(q.Detail.Metadata.TagList.Item,{text:"Auto-merge",color:q.Color.Yellow})]}),p?(0,k.jsx)(q.Detail.Metadata.Label,{title:"Checks",text:p.text,icon:q.Icon[p.icon]}):null,(0,k.jsx)(q.Detail.Metadata.Label,{title:"From",text:r.headRef?.name??r.headRefName}),r.baseRef?(0,k.jsx)(q.Detail.Metadata.Label,{title:"Into",text:r.baseRef?.name??r.baseRefName}):null,r.additions&&r.deletions?(0,k.jsx)(q.Detail.Metadata.Label,{title:"Code Changes",text:`+${r.additions}  -${r.deletions}`}):null,r.createdAt?(0,k.jsx)(q.Detail.Metadata.Label,{title:"Created",text:(0,Ds.format)(new Date(r.createdAt),"dd MMM")}):null,(0,k.jsx)(q.Detail.Metadata.Label,{title:"Author",...l}),y.length>0?(0,k.jsx)(q.Detail.Metadata.TagList,{title:He(y.length,"Reviewer"),children:y.map(S=>S?(0,k.jsx)(q.Detail.Metadata.TagList.Item,{...S},S.id):null)}):null,r.assignees&&r.assignees.totalCount>0?(0,k.jsx)(q.Detail.Metadata.TagList,{title:He(r.assignees.totalCount,"Assignee"),children:r.assignees.nodes?.map(S=>{if(!S)return null;let m=Pe(S);return(0,k.jsx)(q.Detail.Metadata.TagList.Item,{...m},S.id)})}):null,r.labels&&r.labels.totalCount>0?(0,k.jsx)(q.Detail.Metadata.TagList,{title:He(r.labels.totalCount,"Label"),children:r.labels.nodes?.map(S=>S?(0,k.jsx)(q.Detail.Metadata.TagList.Item,{text:S.name,color:S.color},S.id):null)}):null,r.projectsV2&&r.projectsV2.totalCount>0?(0,k.jsx)(q.Detail.Metadata.TagList,{title:He(r.projectsV2.totalCount,"Project"),children:r.projectsV2.nodes?.map(S=>S?(0,k.jsx)(q.Detail.Metadata.TagList.Item,{text:S.title},S.id):null)}):null,r.milestone?(0,k.jsx)(q.Detail.Metadata.Label,{title:"Milestone",text:r.milestone.title}):null]}),actions:(0,k.jsx)(_a,{pullRequest:r,viewer:n,mutateList:t,mutateDetail:u})})}var xs=B(ye());var Lr=(0,xs.withAccessToken)(as);var Us=B(ye());function _s(){let{github:e}=j(),n=["user:@me",...gt()?.organizations?.nodes?.flatMap(r=>r?.login?[`org:${r.login}`]:[])??[]].join(" ");return(0,Us.useCachedPromise)(async r=>{let u=(await Promise.allSettled(r.split(" ").map(i=>e.searchRepositories({query:`${i} archived:false sort:updated-desc`,numberOfItems:100})))).flatMap(i=>i.status==="fulfilled"?i.value.search.nodes:[]);return[...new Map(u.map(i=>[i.id,i])).values()].sort((i,s)=>new Date(s.updatedAt).getTime()-new Date(i.updatedAt).getTime())},[n])}var T=require("react/jsx-runtime"),qn=e=>e?e.reduce((t,a)=>(a?.id&&a?.name&&t.push({id:a.id,name:a.name}),t),[]):[],vs=(e,t,a)=>{if(!a||e.some(o=>o.name===a))return e;let r=t.find(o=>o.name===a);return r?[...e,r]:[...e,{id:`virtual-${a}`,name:a}]};function Nn({draftValues:e}){let{push:t}=(0,D.useNavigation)(),{data:a}=_s(),{github:n}=j(),[r,o]=(0,Ut.useState)(""),[u,i]=(0,Ut.useState)(""),{handleSubmit:s,itemProps:p,values:l,setValue:y,reset:S,focus:m}=(0,Be.useForm)({async onSubmit(f){let G=await(0,D.showToast)({style:D.Toast.Style.Animated,title:"Creating pull request"});try{let vt=(await n.createPullRequest({repositoryId:f.repository,from:f.from,into:f.into,title:f.title,body:f.description,isDraft:f.draft}))?.createPullRequest?.pullRequest?.id;if(vt){let Os=await n.initPullRequest({pullRequestId:vt,reviewersIds:f.reviewers,assigneeIds:f.assignees,labelsIds:f.labels,milestoneId:f.milestone||null});await Promise.all(f.projects.map(Vr=>n.addPullRequestToProject({pullRequestId:vt,projectId:Vr})));let Nr=Os?.updatePullRequest?.pullRequest;if(G.style=D.Toast.Style.Success,G.title="Created pull request",f.autoMerge)try{await n.enablePullRequestAutoMerge({nodeId:vt,mergeMethod:f.autoMergeMethod||I[0]})}catch(Vr){G.style=D.Toast.Style.Success,G.title="Created pull request, but auto-merge failed",G.message=V(Vr)}Nr&&(G.primaryAction={title:"Open Pull Request",shortcut:D.Keyboard.Shortcut.Common.OpenWith,onAction:()=>t((0,T.jsx)(va,{initialPullRequest:Nr}))},G.secondaryAction={title:"Copy URL",shortcut:D.Keyboard.Shortcut.Common.Copy,onAction:()=>D.Clipboard.copy(Nr.permalink)})}S({title:"",from:"",into:"",draft:!1,autoMerge:!1,autoMergeMethod:"",description:"",reviewers:[],assignees:[],labels:[],projects:[],milestone:""}),m("repository")}catch(rt){G.style=D.Toast.Style.Failure,G.title="Failed creating pull request",G.message=V(rt)}},initialValues:{repository:e?.repository??"",from:e?.from??"",into:e?.into??"",draft:e?.draft??!1,autoMerge:e?.autoMerge??!1,autoMergeMethod:e?.autoMergeMethod??"",title:e?.title??"",description:e?.description??"",reviewers:e?.reviewers??[],assignees:e?.assignees??[],labels:e?.labels??[],projects:e?.projects??[],milestone:e?.milestone??""},validation:{repository:Be.FormValidation.Required,from:Be.FormValidation.Required,into:Be.FormValidation.Required,title:Be.FormValidation.Required}}),{data:d,isLoading:g}=(0,Be.useCachedPromise)(f=>{let G=a?.find(rt=>rt.id===f);return G?n.dataForRepository({owner:G.owner.login,name:G.name}):Promise.resolve(null)},[l.repository],{execute:!!l.repository}),b=d?.repository?.autoMergeAllowed??!1,I=[d?.repository?.mergeCommitAllowed&&"MERGE",d?.repository?.squashMergeAllowed&&"SQUASH",d?.repository?.rebaseMergeAllowed&&"REBASE"].filter(Boolean),A=d?.repository?.defaultBranchRef,P=A?.name??"",M=d?.repository?.collaborators?.nodes,h=M?.filter(f=>!f?.isViewer),C=d?.repository?.labels?.nodes,w=d?.repository?.projectsV2?.nodes,H=d?.repository?.milestones?.nodes,ae=(f,G)=>{let rt=a?.find(vt=>vt.id===f);return rt?n.searchRepositoryBranches({owner:rt.owner.login,name:rt.name,query:G.trim()}):Promise.resolve(null)},{data:W,isLoading:F}=(0,Be.useCachedPromise)(ae,[l.repository,r],{execute:!!l.repository&&r.trim().length>0}),{data:ne,isLoading:oe}=(0,Be.useCachedPromise)(ae,[l.repository,u],{execute:!!l.repository&&u.trim().length>0}),x=qn(d?.repository?.refs?.nodes),X=qn(W?.repository?.refs?.nodes??d?.repository?.refs?.nodes),U=vs(X,x,l.from),ee=qn(ne?.repository?.refs?.nodes??d?.repository?.refs?.nodes),le=vs(ee.filter(f=>f.name!==l.from),x,l.into);return(0,Ut.useEffect)(()=>{let f=d?.repository?.pullRequestTemplates?.[0];f&&f.body&&!l.description&&y("description",f.body),A&&y("into",A.name)},[d]),(0,Ut.useEffect)(()=>{l.from&&l.into&&l.from===l.into&&(P&&P!==l.from?y("into",P):y("into",""))},[l.from,l.into,P]),(0,Ut.useEffect)(()=>{y("from",""),y("into",""),y("description",""),y("reviewers",[]),y("assignees",[]),y("labels",[]),y("projects",[]),y("milestone","")},[l.repository]),(0,T.jsxs)(D.Form,{actions:(0,T.jsx)(D.ActionPanel,{children:(0,T.jsx)(D.Action.SubmitForm,{onSubmit:s,title:"Create Pull Request"})}),enableDrafts:!0,isLoading:g,children:[(0,T.jsx)(D.Form.Dropdown,{...p.repository,title:"Repository",storeValue:!0,children:a?.map(f=>(0,T.jsx)(D.Form.Dropdown.Item,{title:f.nameWithOwner,value:f.id,icon:{source:f.owner.avatarUrl,mask:D.Image.Mask.Circle}},f.id))}),(0,T.jsx)(D.Form.Dropdown,{...p.from,title:"From",isLoading:F,throttle:!0,onSearchTextChange:o,children:U?U.map(f=>f?(0,T.jsx)(D.Form.Dropdown.Item,{title:f.name,value:f.name},f?.id):null):null}),(0,T.jsx)(D.Form.Dropdown,{...p.into,title:"Into",storeValue:!0,isLoading:oe,throttle:!0,onSearchTextChange:i,children:le?le.map(f=>f?(0,T.jsx)(D.Form.Dropdown.Item,{title:f.name,value:f.name},f?.id):null):null}),(0,T.jsx)(D.Form.Checkbox,{...p.draft,label:"As draft"}),b&&(0,T.jsx)(D.Form.Checkbox,{...p.autoMerge,label:"Enable auto-merge"}),b&&l.autoMerge&&I.length>1&&(0,T.jsx)(D.Form.Dropdown,{...p.autoMergeMethod,title:"Auto-merge Method",children:I.map(f=>(0,T.jsx)(D.Form.Dropdown.Item,{title:xr(f),value:f},f))}),(0,T.jsx)(D.Form.Separator,{}),(0,T.jsx)(D.Form.TextField,{...p.title,title:"Title",placeholder:"Pull request title"}),(0,T.jsx)(D.Form.TextArea,{...p.description,placeholder:"Pull request description (e.g **bold**)",title:"Description",enableMarkdown:!0}),(0,T.jsx)(D.Form.TagPicker,{...p.reviewers,title:"Reviewers",children:h?.map(f=>{if(!f)return null;let G=Pe(f);return(0,T.jsx)(D.Form.TagPicker.Item,{icon:G.icon,title:G.text,value:f.id},f.id)})}),(0,T.jsx)(D.Form.TagPicker,{...p.assignees,title:"Assignees",children:M?.map(f=>{if(!f)return null;let G=Pe(f);return(0,T.jsx)(D.Form.TagPicker.Item,{icon:G.icon,title:G.text,value:f.id},f.id)})}),(0,T.jsx)(D.Form.TagPicker,{...p.labels,title:"Labels",children:C?.map(f=>f?(0,T.jsx)(D.Form.TagPicker.Item,{title:f.name,value:f.id,icon:{source:D.Icon.Dot,tintColor:f.color}},f.id):null)}),(0,T.jsx)(D.Form.TagPicker,{...p.projects,title:"Projects",children:w?.map(f=>f?(0,T.jsx)(D.Form.TagPicker.Item,{title:f.title,value:f.id},f.id):null)}),(0,T.jsxs)(D.Form.Dropdown,{...p.milestone,title:"Milestone",children:[(0,T.jsx)(D.Form.Dropdown.Item,{value:"",title:"None"}),H?.map(f=>f?(0,T.jsx)(D.Form.Dropdown.Item,{title:f.title,value:f.id},f.id):null)]})]})}var lg=Lr(Nn);var aa=require("react/jsx-runtime");function Vn({error:e}){return e?(0,aa.jsx)(at.List.EmptyView,{icon:at.Icon.Warning,title:"Failed to Load Pull Requests",description:V(e)}):(0,aa.jsx)(at.List.EmptyView,{title:"No pull requests found",actions:(0,aa.jsx)(at.ActionPanel,{children:(0,aa.jsx)(at.Action.Push,{title:"Create Pull Request",target:(0,aa.jsx)(Nn,{})})})})}var Ee=require("@raycast/api"),kn=require("date-fns"),Ts=require("react");var Ta=require("react/jsx-runtime");function Fn({pullRequest:e,viewer:t,mutateList:a,sortQuery:n,setSortQuery:r,showAuthor:o=!1}){let u=new Date(e.updatedAt),i=(0,Ts.useMemo)(()=>us(e),[e]),s=o?Ur(e):null,p=xa(e),l=cs(e.reviewDecision),y=[{text:(0,kn.format)(u,"MMM dd"),tooltip:`Updated: ${(0,kn.format)(u,"EEEE d MMMM yyyy 'at' HH:mm")}`}];if(y.unshift({text:{value:`${i}`,color:i>0?Ee.Color.PrimaryText:Ee.Color.SecondaryText},icon:Ee.Icon.Bubble}),y.unshift(l??{icon:{source:Ee.Icon.Circle,tintColor:Ee.Color.SecondaryText},tooltip:"No review requested"}),e.repository.autoMergeAllowed&&e.autoMergeRequest&&y.unshift({tag:{value:"Auto-merge",color:Ee.Color.Yellow}}),e.commits.nodes){let m=e.commits.nodes[0]?.commit.statusCheckRollup?.state,d=m?_r(m):null;d&&y.unshift(d)}s&&y.splice(y.length-1,0,{icon:s.icon,tooltip:`Author: ${s.text}`});let S=[`${e.number}`];return e.author?.login&&S.push(e.author.login),(0,Ta.jsx)(Ee.List.Item,{title:e.title,subtitle:{value:`#${e.number}`,tooltip:`Repository: ${e.repository.nameWithOwner}`},icon:{value:p.icon,tooltip:`Status: ${p.text}`},keywords:S,accessories:y,actions:(0,Ta.jsx)(_a,{pullRequest:e,viewer:t,mutateList:a,sortQuery:n,setSortQuery:r,children:(0,Ta.jsx)(Ee.Action.Push,{title:"Show Details",icon:Ee.Icon.Sidebar,target:(0,Ta.jsx)(va,{initialPullRequest:e,viewer:t,mutateList:a})})})},e.id)}var Z=require("@raycast/api");var Qe=require("react/jsx-runtime");function jn(e){let t=gt(),a=t?.organizations?.nodes?.filter(o=>o!=null)??[],n=a.map(o=>o.login),r=a.length>1;return(0,Qe.jsxs)(Z.List.Dropdown,{tooltip:"Filter Repositories",onChange:e.onFilterChange,storeValue:!0,children:[(0,Qe.jsxs)(Z.List.Dropdown.Section,{children:[(0,Qe.jsx)(Z.List.Dropdown.Item,{title:"All Repositories",icon:Z.Icon.List,value:""}),t&&a.length>0?(0,Qe.jsx)(Z.List.Dropdown.Item,{title:"My Repositories",icon:Z.Icon.Person,value:Tn({userLogin:t.login,orgLogins:n})}):null,r?(0,Qe.jsx)(Z.List.Dropdown.Item,{title:"My Organizations",icon:Z.Icon.Building,value:Tn({orgLogins:n})}):null]}),(0,Qe.jsxs)(Z.List.Dropdown.Section,{children:[t?(0,Qe.jsx)(Z.List.Dropdown.Item,{icon:{source:t.avatarUrl??Z.Icon.PersonCircle,mask:Z.Image.Mask.Circle},title:t.login,value:`user:${t.login}`}):null,a.map(o=>(0,Qe.jsx)(Z.List.Dropdown.Item,{icon:{source:o.avatarUrl??Z.Icon.PersonCircle,mask:Z.Image.Mask.Circle},title:o.login,value:`org:${o.login}`},o.login))]})]})}var _t=require("react/jsx-runtime");function hy(){let{github:e}=j(),t=gt(),{defaultSearchTerms:a}=(0,wa.getPreferenceValues)(),[n,r]=(0,zn.useState)((0,ws.trim)(a)+" "),[o,u]=(0,qr.useCachedState)("sort-query",ds,{cacheNamespace:"github-search-pr"}),[i,s]=(0,zn.useState)(null),{data:p,isLoading:l,error:y,mutate:S,pagination:m}=(0,qr.useCachedPromise)((g,b,I)=>async({cursor:A})=>{let P=await e.searchPullRequests({numberOfItems:rs(),query:`is:pr archived:false ${I} ${b} ${g}`,after:A});return{data:P.search.edges?.map(M=>M?.node).filter(M=>M!=null)??[],hasMore:P.search.pageInfo.hasNextPage,cursor:P.search.pageInfo.endCursor??void 0}},[n,i,o],{keepPreviousData:!0}),d=Ss(p??[]);return(0,_t.jsxs)(wa.List,{isLoading:l,searchBarPlaceholder:"Globally search pull requests across repositories",searchBarAccessory:(0,_t.jsx)(jn,{onFilterChange:s}),searchText:n,onSearchTextChange:r,throttle:!0,pagination:m,children:[p?(0,_t.jsx)(wa.List.Section,{title:n?"Search Results":"Created Recently",subtitle:He(d.length,"pull request",{withNumber:!0}),children:d.map(g=>(0,_t.jsx)(Fn,{showAuthor:!0,pullRequest:g,viewer:t,mutateList:S,sortQuery:o,setSortQuery:u},g.id))}):null,(0,_t.jsx)(Vn,{error:y})]})}var Dy=Lr(hy);
