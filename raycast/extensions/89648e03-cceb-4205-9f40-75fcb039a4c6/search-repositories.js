"use strict";var up=Object.create;var lr=Object.defineProperty;var pp=Object.getOwnPropertyDescriptor;var lp=Object.getOwnPropertyNames;var cp=Object.getPrototypeOf,yp=Object.prototype.hasOwnProperty;var Mn=(e,t,a)=>()=>{if(a)throw a[0];try{return e&&(t=e(e=0)),t}catch(n){throw a=[n],n}};var O=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(a){throw t=0,a}},ea=(e,t)=>{for(var a in t)lr(e,a,{get:t[a],enumerable:!0})},pr=(e,t,a,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of lp(t))!yp.call(e,r)&&r!==a&&lr(e,r,{get:()=>t[r],enumerable:!(n=pp(t,r))||n.enumerable});return e},me=(e,t,a)=>(pr(e,t,"default"),a&&pr(a,t,"default")),w=(e,t,a)=>(a=e!=null?up(cp(e)):{},pr(t||!e||!e.__esModule?lr(a,"default",{value:e,enumerable:!0}):a,e)),dp=e=>pr(lr({},"__esModule",{value:!0}),e);var Lo=O(cr=>{"use strict";Object.defineProperty(cr,"__esModule",{value:!0});cr.useDeepMemo=void 0;var Rn=require("react"),Sp=require("dequal/lite");function bp(e){let t=(0,Rn.useRef)(e),a=(0,Rn.useRef)(0);return(0,Sp.dequal)(e,t.current)||(t.current=e,a.current+=1),(0,Rn.useMemo)(()=>t.current,[a.current])}cr.useDeepMemo=bp});var ct=O(yr=>{"use strict";Object.defineProperty(yr,"__esModule",{value:!0});yr.useLatest=void 0;var gp=require("react");function Ip(e){let t=(0,gp.useRef)(e);return t.current=e,t}yr.useLatest=Ip});var xa=O(Ye=>{"use strict";var mp=Ye&&Ye.__createBinding||(Object.create?(function(e,t,a,n){n===void 0&&(n=a);var r=Object.getOwnPropertyDescriptor(t,a);(!r||("get"in r?!t.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,r)}):(function(e,t,a,n){n===void 0&&(n=a),e[n]=t[a]})),Mp=Ye&&Ye.__setModuleDefault||(Object.create?(function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}):function(e,t){e.default=t}),qo=Ye&&Ye.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var a in e)a!=="default"&&Object.prototype.hasOwnProperty.call(e,a)&&mp(t,e,a);return Mp(t,e),t};Object.defineProperty(Ye,"__esModule",{value:!0});Ye.showFailureToast=void 0;var Rp=qo(require("fs")),fp=qo(require("path")),ta=require("@raycast/api");function Ap(e,t){let a=e instanceof Error?e.message:String(e);return(0,ta.showToast)({style:ta.Toast.Style.Failure,title:t?.title??"Something went wrong",message:t?.message??a,primaryAction:t?.primaryAction??Bo(e),secondaryAction:t?.primaryAction?Bo(e):void 0})}Ye.showFailureToast=Ap;var Bo=e=>{let t=!0,a="[Extension Name]...",n="";try{let u=JSON.parse(Rp.readFileSync(fp.join(ta.environment.assetsPath,"..","package.json"),"utf8"));a=`[${u.title}]...`,n=`https://raycast.com/${u.owner||u.author}/${u.name}`,(!u.owner||u.access==="public")&&(t=!1)}catch{}let r=ta.environment.isDevelopment||t,o=e instanceof Error?e?.stack||e?.message||"":String(e);return{title:r?"Copy Logs":"Report Error",onAction(u){u.hide(),r?ta.Clipboard.copy(o):(0,ta.open)(`https://github.com/raycast/extensions/issues/new?&labels=extension%2Cbug&template=extension_bug_report.yml&title=${encodeURIComponent(a)}&extension-url=${encodeURI(n)}&description=${encodeURIComponent(`#### Error:
\`\`\`
${o}
\`\`\`
`)}`)}}}});var aa=O(dr=>{"use strict";Object.defineProperty(dr,"__esModule",{value:!0});dr.usePromise=void 0;var Ce=require("react"),va=require("@raycast/api"),Pp=Lo(),Et=ct(),Ep=xa();function hp(e,t,a){let n=(0,Ce.useRef)(0),[r,o]=(0,Ce.useState)({isLoading:!0}),u=(0,Et.useLatest)(e),s=(0,Et.useLatest)(a?.abortable),i=(0,Et.useLatest)(t||[]),p=(0,Et.useLatest)(a?.onError),l=(0,Et.useLatest)(a?.onData),c=(0,Et.useLatest)(a?.onWillExecute),S=(0,Et.useLatest)(a?.failureToastOptions),g=(0,Et.useLatest)(r.data),y=(0,Ce.useRef)(),M=(0,Ce.useRef)({page:0}),I=(0,Ce.useRef)(!1),m=(0,Ce.useRef)(!0),R=(0,Ce.useRef)(50),f=(0,Ce.useCallback)((...Q)=>{let j=++n.current;s.current&&(s.current.current?.abort(),s.current.current=new AbortController),c.current?.(Q),o(T=>({...T,isLoading:!0}));let Ee=Cp(u.current)(...Q);function he(T){return T.name=="AbortError"||j===n.current&&(p.current?p.current(T):va.environment.launchType!==va.LaunchType.Background&&(0,Ep.showFailureToast)(T,{title:"Failed to fetch latest data",primaryAction:{title:"Retry",onAction(ce){ce.hide(),y.current?.(...i.current||[])}},...S.current}),o({error:T,isLoading:!1})),T}return typeof Ee=="function"?(I.current=!0,Ee(M.current).then(({data:T,hasMore:ce,cursor:N})=>(j===n.current&&(M.current&&(M.current.cursor=N,M.current.lastItem=T?.[T.length-1]),l.current&&l.current(T,M.current),ce&&(R.current=T.length),m.current=ce,o(ye=>M.current.page===0?{data:T,isLoading:!1}:{data:(ye.data||[])?.concat(T),isLoading:!1})),T),T=>(m.current=!1,he(T)))):(I.current=!1,Ee.then(T=>(j===n.current&&(l.current&&l.current(T),o({data:T,isLoading:!1})),T),he))},[s,l,p,i,u,o,y,c,M,S]);y.current=f;let A=(0,Ce.useCallback)(()=>{M.current={page:0};let Q=i.current||[];return f(...Q)},[f,i]),E=(0,Ce.useCallback)(async(Q,j)=>{let Ee;try{if(j?.optimisticUpdate){typeof j?.rollbackOnError!="function"&&j?.rollbackOnError!==!1&&(Ee=structuredClone(g.current?.value));let he=j.optimisticUpdate;o(T=>({...T,data:he(T.data)}))}return await Q}catch(he){if(typeof j?.rollbackOnError=="function"){let T=j.rollbackOnError;o(ce=>({...ce,data:T(ce.data)}))}else j?.optimisticUpdate&&j?.rollbackOnError!==!1&&o(T=>({...T,data:Ee}));throw he}finally{j?.shouldRevalidateAfter!==!1&&(va.environment.launchType===va.LaunchType.Background||va.environment.commandMode==="menu-bar"?await A():A())}},[A,g,o]),D=(0,Ce.useCallback)(()=>{M.current.page+=1;let Q=i.current||[];f(...Q)},[M,i,f]);(0,Ce.useEffect)(()=>{M.current={page:0},a?.execute!==!1?f(...t||[]):s.current&&s.current.current?.abort()},[(0,Pp.useDeepMemo)([t,a?.execute,f]),s,M]),(0,Ce.useEffect)(()=>()=>{s.current&&s.current.current?.abort()},[s]);let B=a?.execute!==!1?r.isLoading:!1,H={...r,isLoading:B},q=I.current?{pageSize:R.current,hasMore:m.current,onLoadMore:D}:void 0;return{...H,revalidate:A,mutate:E,pagination:q}}dr.usePromise=hp;function Cp(e){return e===Promise.all||e===Promise.race||e===Promise.resolve||e===Promise.reject?e.bind(Promise):e}});var ht=O(Je=>{"use strict";var Dp=Je&&Je.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Je,"__esModule",{value:!0});Je.hash=Je.reviver=Je.replacer=void 0;var xp=Dp(require("object-hash"));function vp(e,t){let a=this[e];return a instanceof Date?`__raycast_cached_date__${a.toString()}`:Buffer.isBuffer(a)?`__raycast_cached_buffer__${a.toString("base64")}`:t}Je.replacer=vp;function Up(e,t){return typeof t=="string"&&t.startsWith("__raycast_cached_date__")?new Date(t.replace("__raycast_cached_date__","")):typeof t=="string"&&t.startsWith("__raycast_cached_buffer__")?Buffer.from(t.replace("__raycast_cached_buffer__",""),"base64"):t}Je.reviver=Up;function _p(e,t){return(0,xp.default)(e,{replacer:a=>a instanceof URLSearchParams?a.toString():a,...t})}Je.hash=_p});var br=O(Sr=>{"use strict";Object.defineProperty(Sr,"__esModule",{value:!0});Sr.useCachedState=void 0;var fn=require("react"),wp=require("@raycast/api"),An=ct(),No=ht(),Tp=Symbol("cache without namespace"),Vo=new Map;function Op(e,t,a){let n=a?.cacheNamespace||Tp,r=Vo.get(n)||Vo.set(n,new wp.Cache({namespace:a?.cacheNamespace})).get(n);if(!r)throw new Error("Missing cache");let o=(0,An.useLatest)(e),u=(0,An.useLatest)(t),s=(0,fn.useSyncExternalStore)(r.subscribe,()=>{try{return r.get(o.current)}catch(c){console.error("Could not get Cache data:",c);return}}),i=(0,fn.useMemo)(()=>{if(typeof s<"u"){if(s==="undefined")return;try{return JSON.parse(s,No.reviver)}catch(c){return console.warn("The cached data is corrupted",c),u.current}}else return u.current},[s,u]),p=(0,An.useLatest)(i),l=(0,fn.useCallback)(c=>{let S=typeof c=="function"?c(p.current):c;if(typeof S>"u")r.set(o.current,"undefined");else{let g=JSON.stringify(S,No.replacer);r.set(o.current,g)}return S},[r,o,p]);return[i,l]}Sr.useCachedState=Op});var _a=O(gr=>{"use strict";Object.defineProperty(gr,"__esModule",{value:!0});gr.useCachedPromise=void 0;var Ua=require("react"),Lp=br(),Bp=aa(),qp=ct(),Fo=ht(),ra=Symbol();function Np(e,t,a){let{initialData:n,keepPreviousData:r,internal_cacheKeySuffix:o,...u}=a||{},s=(0,Ua.useRef)(),[i,p]=(0,Lp.useCachedState)((0,Fo.hash)(t||[])+o,ra,{cacheNamespace:(0,Fo.hash)(e)}),l=(0,Ua.useRef)(i!==ra?i:n),c=(0,Ua.useRef)(void 0),{mutate:S,revalidate:g,...y}=(0,Bp.usePromise)(e,t||[],{...u,onData(f,A){c.current=A,u.onData&&u.onData(f,A),!(A&&A.page>0)&&(s.current="promise",l.current=f,p(f))}}),M,I=y.pagination;c.current&&c.current.page>0&&y.data?M=y.data:s.current==="promise"?M=l.current:r&&i!==ra?(M=i,I&&(I.hasMore=!0,I.pageSize=i.length)):r&&i===ra?M=l.current:i!==ra?(M=i,I&&(I.hasMore=!0,I.pageSize=i.length)):M=n;let m=(0,qp.useLatest)(M),R=(0,Ua.useCallback)(async(f,A)=>{let E;try{if(A?.optimisticUpdate){typeof A?.rollbackOnError!="function"&&A?.rollbackOnError!==!1&&(E=structuredClone(m.current));let D=A.optimisticUpdate(m.current);s.current="cache",l.current=D,p(D)}return await S(f,{shouldRevalidateAfter:A?.shouldRevalidateAfter})}catch(D){if(typeof A?.rollbackOnError=="function"){let B=A.rollbackOnError(m.current);s.current="cache",l.current=B,p(B)}else A?.optimisticUpdate&&A?.rollbackOnError!==!1&&(s.current="cache",l.current=E,p(E));throw D}},[p,S,m,l,s]);return(0,Ua.useEffect)(()=>{i!==ra&&(s.current="cache",l.current=i)},[i]),{data:M,isLoading:y.isLoading,error:y.error,mutate:c.current&&c.current.page>0?S:R,pagination:I,revalidate:g}}gr.useCachedPromise=Np});var Zo=O((Ge,Jo)=>{"use strict";Object.defineProperty(Ge,"__esModule",{value:!0});function sa(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var $e=sa(require("stream")),Ho=sa(require("http")),mr=sa(require("url")),$o=sa(require("whatwg-url")),Vp=sa(require("https")),Nt=sa(require("zlib")),Fp=$e.Readable,yt=Symbol("buffer"),Pn=Symbol("type"),Ta=class e{constructor(){this[Pn]="";let t=arguments[0],a=arguments[1],n=[],r=0;if(t){let u=t,s=Number(u.length);for(let i=0;i<s;i++){let p=u[i],l;p instanceof Buffer?l=p:ArrayBuffer.isView(p)?l=Buffer.from(p.buffer,p.byteOffset,p.byteLength):p instanceof ArrayBuffer?l=Buffer.from(p):p instanceof e?l=p[yt]:l=Buffer.from(typeof p=="string"?p:String(p)),r+=l.length,n.push(l)}}this[yt]=Buffer.concat(n);let o=a&&a.type!==void 0&&String(a.type).toLowerCase();o&&!/[^\u0020-\u007E]/.test(o)&&(this[Pn]=o)}get size(){return this[yt].length}get type(){return this[Pn]}text(){return Promise.resolve(this[yt].toString())}arrayBuffer(){let t=this[yt],a=t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength);return Promise.resolve(a)}stream(){let t=new Fp;return t._read=function(){},t.push(this[yt]),t.push(null),t}toString(){return"[object Blob]"}slice(){let t=this.size,a=arguments[0],n=arguments[1],r,o;a===void 0?r=0:a<0?r=Math.max(t+a,0):r=Math.min(a,t),n===void 0?o=t:n<0?o=Math.max(t+n,0):o=Math.min(n,t);let u=Math.max(o-r,0),i=this[yt].slice(r,r+u),p=new e([],{type:arguments[2]});return p[yt]=i,p}};Object.defineProperties(Ta.prototype,{size:{enumerable:!0},type:{enumerable:!0},slice:{enumerable:!0}});Object.defineProperty(Ta.prototype,Symbol.toStringTag,{value:"Blob",writable:!1,enumerable:!1,configurable:!0});function se(e,t,a){Error.call(this,e),this.message=e,this.type=t,a&&(this.code=this.errno=a.code),Error.captureStackTrace(this,this.constructor)}se.prototype=Object.create(Error.prototype);se.prototype.constructor=se;se.prototype.name="FetchError";var Dn;try{Dn=require("encoding").convert}catch{}var St=Symbol("Body internals"),ko=$e.PassThrough;function ee(e){var t=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.size;let r=n===void 0?0:n;var o=a.timeout;let u=o===void 0?0:o;e==null?e=null:Go(e)?e=Buffer.from(e.toString()):La(e)||Buffer.isBuffer(e)||(Object.prototype.toString.call(e)==="[object ArrayBuffer]"?e=Buffer.from(e):ArrayBuffer.isView(e)?e=Buffer.from(e.buffer,e.byteOffset,e.byteLength):e instanceof $e||(e=Buffer.from(String(e)))),this[St]={body:e,disturbed:!1,error:null},this.size=r,this.timeout=u,e instanceof $e&&e.on("error",function(s){let i=s.name==="AbortError"?s:new se(`Invalid response body while trying to fetch ${t.url}: ${s.message}`,"system",s);t[St].error=i})}ee.prototype={get body(){return this[St].body},get bodyUsed(){return this[St].disturbed},arrayBuffer(){return na.call(this).then(function(e){return e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength)})},blob(){let e=this.headers&&this.headers.get("content-type")||"";return na.call(this).then(function(t){return Object.assign(new Ta([],{type:e.toLowerCase()}),{[yt]:t})})},json(){var e=this;return na.call(this).then(function(t){try{return JSON.parse(t.toString())}catch(a){return ee.Promise.reject(new se(`invalid json response body at ${e.url} reason: ${a.message}`,"invalid-json"))}})},text(){return na.call(this).then(function(e){return e.toString()})},buffer(){return na.call(this)},textConverted(){var e=this;return na.call(this).then(function(t){return kp(t,e.headers)})}};Object.defineProperties(ee.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0}});ee.mixIn=function(e){for(let t of Object.getOwnPropertyNames(ee.prototype))if(!(t in e)){let a=Object.getOwnPropertyDescriptor(ee.prototype,t);Object.defineProperty(e,t,a)}};function na(){var e=this;if(this[St].disturbed)return ee.Promise.reject(new TypeError(`body used already for: ${this.url}`));if(this[St].disturbed=!0,this[St].error)return ee.Promise.reject(this[St].error);let t=this.body;if(t===null)return ee.Promise.resolve(Buffer.alloc(0));if(La(t)&&(t=t.stream()),Buffer.isBuffer(t))return ee.Promise.resolve(t);if(!(t instanceof $e))return ee.Promise.resolve(Buffer.alloc(0));let a=[],n=0,r=!1;return new ee.Promise(function(o,u){let s;e.timeout&&(s=setTimeout(function(){r=!0,u(new se(`Response timeout while trying to fetch ${e.url} (over ${e.timeout}ms)`,"body-timeout"))},e.timeout)),t.on("error",function(i){i.name==="AbortError"?(r=!0,u(i)):u(new se(`Invalid response body while trying to fetch ${e.url}: ${i.message}`,"system",i))}),t.on("data",function(i){if(!(r||i===null)){if(e.size&&n+i.length>e.size){r=!0,u(new se(`content size at ${e.url} over limit: ${e.size}`,"max-size"));return}n+=i.length,a.push(i)}}),t.on("end",function(){if(!r){clearTimeout(s);try{o(Buffer.concat(a,n))}catch(i){u(new se(`Could not create Buffer from response body for ${e.url}: ${i.message}`,"system",i))}}})})}function kp(e,t){if(typeof Dn!="function")throw new Error("The package `encoding` must be installed to use the textConverted() function");let a=t.get("content-type"),n="utf-8",r,o;return a&&(r=/charset=([^;]*)/i.exec(a)),o=e.slice(0,1024).toString(),!r&&o&&(r=/<meta.+?charset=(['"])(.+?)\1/i.exec(o)),!r&&o&&(r=/<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(o),r||(r=/<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(o),r&&r.pop()),r&&(r=/charset=(.*)/i.exec(r.pop()))),!r&&o&&(r=/<\?xml.+?encoding=(['"])(.+?)\1/i.exec(o)),r&&(n=r.pop(),(n==="gb2312"||n==="gbk")&&(n="gb18030")),Dn(e,"UTF-8",n).toString()}function Go(e){return typeof e!="object"||typeof e.append!="function"||typeof e.delete!="function"||typeof e.get!="function"||typeof e.getAll!="function"||typeof e.has!="function"||typeof e.set!="function"?!1:e.constructor.name==="URLSearchParams"||Object.prototype.toString.call(e)==="[object URLSearchParams]"||typeof e.sort=="function"}function La(e){return typeof e=="object"&&typeof e.arrayBuffer=="function"&&typeof e.type=="string"&&typeof e.stream=="function"&&typeof e.constructor=="function"&&typeof e.constructor.name=="string"&&/^(Blob|File)$/.test(e.constructor.name)&&/^(Blob|File)$/.test(e[Symbol.toStringTag])}function Qo(e){let t,a,n=e.body;if(e.bodyUsed)throw new Error("cannot clone body after it is used");return n instanceof $e&&typeof n.getBoundary!="function"&&(t=new ko,a=new ko,n.pipe(t),n.pipe(a),e[St].body=t,n=a),n}function Wo(e){return e===null?null:typeof e=="string"?"text/plain;charset=UTF-8":Go(e)?"application/x-www-form-urlencoded;charset=UTF-8":La(e)?e.type||null:Buffer.isBuffer(e)||Object.prototype.toString.call(e)==="[object ArrayBuffer]"||ArrayBuffer.isView(e)?null:typeof e.getBoundary=="function"?`multipart/form-data;boundary=${e.getBoundary()}`:e instanceof $e?null:"text/plain;charset=UTF-8"}function Ko(e){let t=e.body;return t===null?0:La(t)?t.size:Buffer.isBuffer(t)?t.length:t&&typeof t.getLengthSync=="function"&&(t._lengthRetrievers&&t._lengthRetrievers.length==0||t.hasKnownLength&&t.hasKnownLength())?t.getLengthSync():null}function jp(e,t){let a=t.body;a===null?e.end():La(a)?a.stream().pipe(e):Buffer.isBuffer(a)?(e.write(a),e.end()):a.pipe(e)}ee.Promise=global.Promise;var Yo=/[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/,xn=/[^\t\x20-\x7e\x80-\xff]/;function wa(e){if(e=`${e}`,Yo.test(e)||e==="")throw new TypeError(`${e} is not a legal HTTP header name`)}function jo(e){if(e=`${e}`,xn.test(e))throw new TypeError(`${e} is not a legal HTTP header value`)}function oa(e,t){t=t.toLowerCase();for(let a in e)if(a.toLowerCase()===t)return a}var Y=Symbol("map"),Oe=class e{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:void 0;if(this[Y]=Object.create(null),t instanceof e){let a=t.raw(),n=Object.keys(a);for(let r of n)for(let o of a[r])this.append(r,o);return}if(t!=null)if(typeof t=="object"){let a=t[Symbol.iterator];if(a!=null){if(typeof a!="function")throw new TypeError("Header pairs must be iterable");let n=[];for(let r of t){if(typeof r!="object"||typeof r[Symbol.iterator]!="function")throw new TypeError("Each header pair must be iterable");n.push(Array.from(r))}for(let r of n){if(r.length!==2)throw new TypeError("Each header pair must be a name/value tuple");this.append(r[0],r[1])}}else for(let n of Object.keys(t)){let r=t[n];this.append(n,r)}}else throw new TypeError("Provided initializer must be an object")}get(t){t=`${t}`,wa(t);let a=oa(this[Y],t);return a===void 0?null:this[Y][a].join(", ")}forEach(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:void 0,n=vn(this),r=0;for(;r<n.length;){var o=n[r];let u=o[0],s=o[1];t.call(a,s,u,this),n=vn(this),r++}}set(t,a){t=`${t}`,a=`${a}`,wa(t),jo(a);let n=oa(this[Y],t);this[Y][n!==void 0?n:t]=[a]}append(t,a){t=`${t}`,a=`${a}`,wa(t),jo(a);let n=oa(this[Y],t);n!==void 0?this[Y][n].push(a):this[Y][t]=[a]}has(t){return t=`${t}`,wa(t),oa(this[Y],t)!==void 0}delete(t){t=`${t}`,wa(t);let a=oa(this[Y],t);a!==void 0&&delete this[Y][a]}raw(){return this[Y]}keys(){return En(this,"key")}values(){return En(this,"value")}[Symbol.iterator](){return En(this,"key+value")}};Oe.prototype.entries=Oe.prototype[Symbol.iterator];Object.defineProperty(Oe.prototype,Symbol.toStringTag,{value:"Headers",writable:!1,enumerable:!1,configurable:!0});Object.defineProperties(Oe.prototype,{get:{enumerable:!0},forEach:{enumerable:!0},set:{enumerable:!0},append:{enumerable:!0},has:{enumerable:!0},delete:{enumerable:!0},keys:{enumerable:!0},values:{enumerable:!0},entries:{enumerable:!0}});function vn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"key+value";return Object.keys(e[Y]).sort().map(t==="key"?function(n){return n.toLowerCase()}:t==="value"?function(n){return e[Y][n].join(", ")}:function(n){return[n.toLowerCase(),e[Y][n].join(", ")]})}var Un=Symbol("internal");function En(e,t){let a=Object.create(_n);return a[Un]={target:e,kind:t,index:0},a}var _n=Object.setPrototypeOf({next(){if(!this||Object.getPrototypeOf(this)!==_n)throw new TypeError("Value of `this` is not a HeadersIterator");var e=this[Un];let t=e.target,a=e.kind,n=e.index,r=vn(t,a),o=r.length;return n>=o?{value:void 0,done:!0}:(this[Un].index=n+1,{value:r[n],done:!1})}},Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));Object.defineProperty(_n,Symbol.toStringTag,{value:"HeadersIterator",writable:!1,enumerable:!1,configurable:!0});function zp(e){let t=Object.assign({__proto__:null},e[Y]),a=oa(e[Y],"Host");return a!==void 0&&(t[a]=t[a][0]),t}function Hp(e){let t=new Oe;for(let a of Object.keys(e))if(!Yo.test(a))if(Array.isArray(e[a]))for(let n of e[a])xn.test(n)||(t[Y][a]===void 0?t[Y][a]=[n]:t[Y][a].push(n));else xn.test(e[a])||(t[Y][a]=[e[a]]);return t}var Ct=Symbol("Response internals"),$p=Ho.STATUS_CODES,Te=class e{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};ee.call(this,t,a);let n=a.status||200,r=new Oe(a.headers);if(t!=null&&!r.has("Content-Type")){let o=Wo(t);o&&r.append("Content-Type",o)}this[Ct]={url:a.url,status:n,statusText:a.statusText||$p[n],headers:r,counter:a.counter}}get url(){return this[Ct].url||""}get status(){return this[Ct].status}get ok(){return this[Ct].status>=200&&this[Ct].status<300}get redirected(){return this[Ct].counter>0}get statusText(){return this[Ct].statusText}get headers(){return this[Ct].headers}clone(){return new e(Qo(this),{url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected})}};ee.mixIn(Te.prototype);Object.defineProperties(Te.prototype,{url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}});Object.defineProperty(Te.prototype,Symbol.toStringTag,{value:"Response",writable:!1,enumerable:!1,configurable:!0});var dt=Symbol("Request internals"),Gp=mr.URL||$o.URL,Qp=mr.parse,Wp=mr.format;function hn(e){return/^[a-zA-Z][a-zA-Z\d+\-.]*:/.exec(e)&&(e=new Gp(e).toString()),Qp(e)}var Kp="destroy"in $e.Readable.prototype;function Ir(e){return typeof e=="object"&&typeof e[dt]=="object"}function Yp(e){let t=e&&typeof e=="object"&&Object.getPrototypeOf(e);return!!(t&&t.constructor.name==="AbortSignal")}var xt=class e{constructor(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n;Ir(t)?n=hn(t.url):(t&&t.href?n=hn(t.href):n=hn(`${t}`),t={});let r=a.method||t.method||"GET";if(r=r.toUpperCase(),(a.body!=null||Ir(t)&&t.body!==null)&&(r==="GET"||r==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");let o=a.body!=null?a.body:Ir(t)&&t.body!==null?Qo(t):null;ee.call(this,o,{timeout:a.timeout||t.timeout||0,size:a.size||t.size||0});let u=new Oe(a.headers||t.headers||{});if(o!=null&&!u.has("Content-Type")){let i=Wo(o);i&&u.append("Content-Type",i)}let s=Ir(t)?t.signal:null;if("signal"in a&&(s=a.signal),s!=null&&!Yp(s))throw new TypeError("Expected signal to be an instanceof AbortSignal");this[dt]={method:r,redirect:a.redirect||t.redirect||"follow",headers:u,parsedURL:n,signal:s},this.follow=a.follow!==void 0?a.follow:t.follow!==void 0?t.follow:20,this.compress=a.compress!==void 0?a.compress:t.compress!==void 0?t.compress:!0,this.counter=a.counter||t.counter||0,this.agent=a.agent||t.agent}get method(){return this[dt].method}get url(){return Wp(this[dt].parsedURL)}get headers(){return this[dt].headers}get redirect(){return this[dt].redirect}get signal(){return this[dt].signal}clone(){return new e(this)}};ee.mixIn(xt.prototype);Object.defineProperty(xt.prototype,Symbol.toStringTag,{value:"Request",writable:!1,enumerable:!1,configurable:!0});Object.defineProperties(xt.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0}});function Jp(e){let t=e[dt].parsedURL,a=new Oe(e[dt].headers);if(a.has("Accept")||a.set("Accept","*/*"),!t.protocol||!t.hostname)throw new TypeError("Only absolute URLs are supported");if(!/^https?:$/.test(t.protocol))throw new TypeError("Only HTTP(S) protocols are supported");if(e.signal&&e.body instanceof $e.Readable&&!Kp)throw new Error("Cancellation of streamed requests with AbortSignal is not supported in node < 8");let n=null;if(e.body==null&&/^(POST|PUT)$/i.test(e.method)&&(n="0"),e.body!=null){let o=Ko(e);typeof o=="number"&&(n=String(o))}n&&a.set("Content-Length",n),a.has("User-Agent")||a.set("User-Agent","node-fetch/1.0 (+https://github.com/bitinn/node-fetch)"),e.compress&&!a.has("Accept-Encoding")&&a.set("Accept-Encoding","gzip,deflate");let r=e.agent;return typeof r=="function"&&(r=r(t)),Object.assign({},t,{method:e.method,headers:zp(a),agent:r})}function ia(e){Error.call(this,e),this.type="aborted",this.message=e,Error.captureStackTrace(this,this.constructor)}ia.prototype=Object.create(Error.prototype);ia.prototype.constructor=ia;ia.prototype.name="AbortError";var Oa=mr.URL||$o.URL,zo=$e.PassThrough,Zp=function(t,a){let n=new Oa(a).hostname,r=new Oa(t).hostname;return n===r||n[n.length-r.length-1]==="."&&n.endsWith(r)},Xp=function(t,a){let n=new Oa(a).protocol,r=new Oa(t).protocol;return n===r};function Dt(e,t){if(!Dt.Promise)throw new Error("native promise missing, set fetch.Promise to your favorite alternative");return ee.Promise=Dt.Promise,new Dt.Promise(function(a,n){let r=new xt(e,t),o=Jp(r),u=(o.protocol==="https:"?Vp:Ho).request,s=r.signal,i=null,p=function(){let M=new ia("The user aborted a request.");n(M),r.body&&r.body instanceof $e.Readable&&Cn(r.body,M),!(!i||!i.body)&&i.body.emit("error",M)};if(s&&s.aborted){p();return}let l=function(){p(),g()},c=u(o),S;s&&s.addEventListener("abort",l);function g(){c.abort(),s&&s.removeEventListener("abort",l),clearTimeout(S)}r.timeout&&c.once("socket",function(y){S=setTimeout(function(){n(new se(`network timeout at: ${r.url}`,"request-timeout")),g()},r.timeout)}),c.on("error",function(y){n(new se(`request to ${r.url} failed, reason: ${y.message}`,"system",y)),i&&i.body&&Cn(i.body,y),g()}),el(c,function(y){s&&s.aborted||i&&i.body&&Cn(i.body,y)}),parseInt(process.version.substring(1))<14&&c.on("socket",function(y){y.addListener("close",function(M){let I=y.listenerCount("data")>0;if(i&&I&&!M&&!(s&&s.aborted)){let m=new Error("Premature close");m.code="ERR_STREAM_PREMATURE_CLOSE",i.body.emit("error",m)}})}),c.on("response",function(y){clearTimeout(S);let M=Hp(y.headers);if(Dt.isRedirect(y.statusCode)){let A=M.get("Location"),E=null;try{E=A===null?null:new Oa(A,r.url).toString()}catch{if(r.redirect!=="manual"){n(new se(`uri requested responds with an invalid redirect URL: ${A}`,"invalid-redirect")),g();return}}switch(r.redirect){case"error":n(new se(`uri requested responds with a redirect, redirect mode is set to error: ${r.url}`,"no-redirect")),g();return;case"manual":if(E!==null)try{M.set("Location",E)}catch(B){n(B)}break;case"follow":if(E===null)break;if(r.counter>=r.follow){n(new se(`maximum redirect reached at: ${r.url}`,"max-redirect")),g();return}let D={headers:new Oe(r.headers),follow:r.follow,counter:r.counter+1,agent:r.agent,compress:r.compress,method:r.method,body:r.body,signal:r.signal,timeout:r.timeout,size:r.size};if(!Zp(r.url,E)||!Xp(r.url,E))for(let B of["authorization","www-authenticate","cookie","cookie2"])D.headers.delete(B);if(y.statusCode!==303&&r.body&&Ko(r)===null){n(new se("Cannot follow redirect with body being a readable stream","unsupported-redirect")),g();return}(y.statusCode===303||(y.statusCode===301||y.statusCode===302)&&r.method==="POST")&&(D.method="GET",D.body=void 0,D.headers.delete("content-length")),a(Dt(new xt(E,D))),g();return}}y.once("end",function(){s&&s.removeEventListener("abort",l)});let I=y.pipe(new zo),m={url:r.url,status:y.statusCode,statusText:y.statusMessage,headers:M,size:r.size,timeout:r.timeout,counter:r.counter},R=M.get("Content-Encoding");if(!r.compress||r.method==="HEAD"||R===null||y.statusCode===204||y.statusCode===304){i=new Te(I,m),a(i);return}let f={flush:Nt.Z_SYNC_FLUSH,finishFlush:Nt.Z_SYNC_FLUSH};if(R=="gzip"||R=="x-gzip"){I=I.pipe(Nt.createGunzip(f)),i=new Te(I,m),a(i);return}if(R=="deflate"||R=="x-deflate"){let A=y.pipe(new zo);A.once("data",function(E){(E[0]&15)===8?I=I.pipe(Nt.createInflate()):I=I.pipe(Nt.createInflateRaw()),i=new Te(I,m),a(i)}),A.on("end",function(){i||(i=new Te(I,m),a(i))});return}if(R=="br"&&typeof Nt.createBrotliDecompress=="function"){I=I.pipe(Nt.createBrotliDecompress()),i=new Te(I,m),a(i);return}i=new Te(I,m),a(i)}),jp(c,r)})}function el(e,t){let a;e.on("socket",function(n){a=n}),e.on("response",function(n){let r=n.headers;r["transfer-encoding"]==="chunked"&&!r["content-length"]&&n.once("close",function(o){if(a&&a.listenerCount("data")>0&&!o){let s=new Error("Premature close");s.code="ERR_STREAM_PREMATURE_CLOSE",t(s)}})})}function Cn(e,t){e.destroy?e.destroy(t):(e.emit("error",t),e.end())}Dt.isRedirect=function(e){return e===301||e===302||e===303||e===307||e===308};Dt.Promise=global.Promise;Jo.exports=Ge=Dt;Object.defineProperty(Ge,"__esModule",{value:!0});Ge.default=Ge;Ge.Headers=Oe;Ge.Request=xt;Ge.Response=Te;Ge.FetchError=se;Ge.AbortError=ia});var qa=O((Vt,Xo)=>{var Ba=Zo(),tl=Ba.default||Ba,Mr=function(e,t){return/^\/\//.test(e)&&(e="https:"+e),tl.call(this,e,t)};Mr.ponyfill=!0;Xo.exports=Vt=Mr;Vt.fetch=Mr;Vt.Headers=Ba.Headers;Vt.Request=Ba.Request;Vt.Response=Ba.Response;Vt.default=Mr});var wn=O(Rr=>{"use strict";Object.defineProperty(Rr,"__esModule",{value:!0});Rr.isJSON=void 0;function al(e){if(e){let t=nl(e);if(!t)return!1;if(t.subtype==="json"||t.suffix==="json"||t.suffix&&/\bjson\b/i.test(t.suffix)||t.subtype&&/\bjson\b/i.test(t.subtype))return!0}return!1}Rr.isJSON=al;var rl=/^([A-Za-z0-9][A-Za-z0-9!#$&^_-]{0,126})\/([A-Za-z0-9][A-Za-z0-9!#$&^_.+-]{0,126});?$/;function nl(e){let t=e.indexOf(";"),a=t!==-1?e.slice(0,t).trim():e.trim(),n=rl.exec(a.toLowerCase().toLowerCase());if(!n)return;let r=n[1],o=n[2],u,s=o.lastIndexOf("+");return s!==-1&&(u=o.substring(s+1),o=o.substring(0,s)),{type:r,subtype:o,suffix:u}}});var ri=O(fr=>{"use strict";Object.defineProperty(fr,"__esModule",{value:!0});fr.useFetch=void 0;var ua=require("react"),ol=_a(),ei=ct(),ti=qa(),il=wn(),ai=ht();async function sl(e){if(!e.ok)throw new Error(e.statusText);let t=e.headers.get("content-type");return t&&(0,il.isJSON)(t)?await e.json():await e.text()}function ul(e){return{data:e,hasMore:!1}}function pl(e,t){let{parseResponse:a,mapResult:n,initialData:r,execute:o,keepPreviousData:u,onError:s,onData:i,onWillExecute:p,failureToastOptions:l,...c}=t||{},S={initialData:r,execute:o,keepPreviousData:u,onError:s,onData:i,onWillExecute:p,failureToastOptions:l},g=(0,ei.useLatest)(a||sl),y=(0,ei.useLatest)(n||ul),M=(0,ua.useRef)(),I=(0,ua.useRef)(),m=typeof e=="function"?e({page:0}):void 0;(!M.current||typeof I.current>"u"||I.current!==m)&&(M.current=e),I.current=m;let R=(0,ua.useRef)(),f=(0,ua.useCallback)((D,B)=>async H=>{let q=await(0,ti.fetch)(D(H),{signal:R.current?.signal,...B}),Q=await g.current(q);return y.current?.(Q)},[g,y]),A=(0,ua.useCallback)(async(D,B)=>{let H=await(0,ti.fetch)(D,{signal:R.current?.signal,...B}),q=await g.current(H);return y.current(q)?.data},[g,y]),E=(0,ua.useMemo)(()=>I.current?f:A,[I,A,f]);return(0,ol.useCachedPromise)(E,[M.current,c],{...S,internal_cacheKeySuffix:I.current+(0,ai.hash)(y.current)+(0,ai.hash)(g.current),abortable:R})}fr.useFetch=pl});var Ar=O(Le=>{"use strict";var ll=Le&&Le.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Le,"__esModule",{value:!0});Le.defaultParsing=Le.handleOutput=Le.getSpawnedResult=Le.getSpawnedPromise=void 0;var cl=require("node:buffer"),ii=ll(require("node:stream")),yl=require("node:util"),dl=require("signal-exit");function Sl(e,{timeout:t}={}){let a=new Promise((s,i)=>{e.on("exit",(p,l)=>{s({exitCode:p,signal:l,timedOut:!1})}),e.on("error",p=>{i(p)}),e.stdin&&e.stdin.on("error",p=>{i(p)})});if(t===0||t===void 0)return a;let n,r=new Promise((s,i)=>{n=setTimeout(()=>{e.kill("SIGTERM"),i(Object.assign(new Error("Timed out"),{timedOut:!0,signal:"SIGTERM"}))},t)}),o=a.finally(()=>{clearTimeout(n)}),u=(0,dl.onExit)(()=>{e.kill()});return Promise.race([r,o]).finally(()=>u())}Le.getSpawnedPromise=Sl;var Tn=class extends Error{constructor(){super("The output is too big"),this.name="MaxBufferError"}},bl=(0,yl.promisify)(ii.default.pipeline);function gl(e){let{encoding:t}=e,a=t==="buffer",n=new ii.default.PassThrough({objectMode:!1});t&&t!=="buffer"&&n.setEncoding(t);let r=0,o=[];return n.on("data",u=>{o.push(u),r+=u.length}),n.getBufferedValue=()=>a?Buffer.concat(o,r):o.join(""),n.getBufferedLength=()=>r,n}async function ni(e,t){let a=gl(t);return await new Promise((n,r)=>{let o=u=>{u&&a.getBufferedLength()<=cl.constants.MAX_LENGTH&&(u.bufferedData=a.getBufferedValue()),r(u)};(async()=>{try{await bl(e,a),n()}catch(u){o(u)}})(),a.on("data",()=>{a.getBufferedLength()>1e3*1e3*80&&o(new Tn)})}),a.getBufferedValue()}async function oi(e,t){e.destroy();try{return await t}catch(a){return a.bufferedData}}async function Il({stdout:e,stderr:t},{encoding:a},n){let r=ni(e,{encoding:a}),o=ni(t,{encoding:a});try{return await Promise.all([n,r,o])}catch(u){return Promise.all([{error:u,exitCode:null,signal:u.signal,timedOut:u.timedOut||!1},oi(e,r),oi(t,o)])}}Le.getSpawnedResult=Il;function ml(e){let t=typeof e=="string"?`
`:10,a=typeof e=="string"?"\r":13;return e[e.length-1]===t&&(e=e.slice(0,-1)),e[e.length-1]===a&&(e=e.slice(0,-1)),e}function Ml(e,t){return e.stripFinalNewline?ml(t):t}Le.handleOutput=Ml;var Rl=({timedOut:e,timeout:t,signal:a,exitCode:n})=>e?`timed out after ${t} milliseconds`:a!=null?`was killed with ${a}`:n!=null?`failed with exit code ${n}`:"failed",fl=({stdout:e,stderr:t,error:a,signal:n,exitCode:r,command:o,timedOut:u,options:s,parentError:i})=>{let l=`Command ${Rl({timedOut:u,timeout:s?.timeout,signal:n,exitCode:r})}: ${o}`,c=a?`${l}
${a.message}`:l,S=[c,t,e].filter(Boolean).join(`
`);return a?a.originalMessage=a.message:a=i,a.message=S,a.shortMessage=c,a.command=o,a.exitCode=r,a.signal=n,a.stdout=e,a.stderr=t,"bufferedData"in a&&delete a.bufferedData,a};function Al({stdout:e,stderr:t,error:a,exitCode:n,signal:r,timedOut:o,command:u,options:s,parentError:i}){if(a||n!==0||r!==null)throw fl({error:a,exitCode:n,signal:r,stdout:e,stderr:t,command:u,timedOut:o,options:s,parentError:i});return e}Le.defaultParsing=Al});var ui=O(pa=>{"use strict";var Pl=pa&&pa.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(pa,"__esModule",{value:!0});pa.useExec=void 0;var El=Pl(require("node:child_process")),si=require("react"),hl=_a(),Cl=ct(),Na=Ar(),Dl=/ +/g;function xl(e,t){if(t)return[e,...t];let a=[];for(let n of e.trim().split(Dl)){let r=a[a.length-1];r&&r.endsWith("\\")?a[a.length-1]=`${r.slice(0,-1)} ${n}`:a.push(n)}return a}function vl(e,t,a){let{parseOutput:n,input:r,onData:o,onWillExecute:u,initialData:s,execute:i,keepPreviousData:p,onError:l,failureToastOptions:c,...S}=Array.isArray(t)?a||{}:t||{},g={initialData:s,execute:i,keepPreviousData:p,onError:l,onData:o,onWillExecute:u,failureToastOptions:c},y=(0,si.useRef)(),M=(0,Cl.useLatest)(n||Na.defaultParsing),I=(0,si.useCallback)(async(m,R,f,A)=>{let[E,...D]=xl(m,R),B=[E,...D].join(" "),H={stripFinalNewline:!0,...f,timeout:f?.timeout||1e4,signal:y.current?.signal,encoding:f?.encoding===null?"buffer":f?.encoding||"utf8",env:{PATH:"/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin",...process.env,...f?.env}},q=El.default.spawn(E,D,H),Q=(0,Na.getSpawnedPromise)(q,H);A&&q.stdin.end(A);let[{error:j,exitCode:Ee,signal:he,timedOut:T},ce,N]=await(0,Na.getSpawnedResult)(q,H,Q),ye=(0,Na.handleOutput)(H,ce),He=(0,Na.handleOutput)(H,N);return M.current({stdout:ye,stderr:He,error:j,exitCode:Ee,signal:he,timedOut:T,command:B,options:H,parentError:new Error})},[M]);return(0,hl.useCachedPromise)(I,[e,Array.isArray(t)?t:[],S,r],{...g,abortable:y})}pa.useExec=vl});var yi=O(la=>{"use strict";var Er=la&&la.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(la,"__esModule",{value:!0});la.useStreamJSON=void 0;var Ul=require("@raycast/api"),pi=Er(qa()),ka=require("node:fs"),On=require("node:fs/promises"),Pr=require("node:path"),li=require("node:stream/promises"),Va=require("react"),_l=Er(require("stream-chain")),wl=require("stream-json"),Tl=Er(require("stream-json/filters/Pick")),Ol=Er(require("stream-json/streamers/StreamArray")),ci=wn(),Ll=_a(),Bl=ht();async function Fa(e,t,a){if(typeof e=="object"||e.startsWith("http://")||e.startsWith("https://"))return await ql(e,t,a);if(e.startsWith("file://"))return await Nl((0,Pr.normalize)(decodeURIComponent(new URL(e).pathname)),t,a?.signal?a.signal:void 0);throw new Error("Only HTTP(S) or file URLs are supported")}async function ql(e,t,a){let n=await(0,pi.default)(e,a);if(!n.ok)throw new Error("Failed to fetch URL");if(!(0,ci.isJSON)(n.headers.get("content-type")))throw new Error("URL does not return JSON");if(!n.body)throw new Error("Failed to retrieve expected JSON content: Response body is missing or inaccessible.");await(0,li.pipeline)(n.body,(0,ka.createWriteStream)(t),a?.signal?{signal:a.signal}:void 0)}async function Nl(e,t,a){await(0,li.pipeline)((0,ka.createReadStream)(e),(0,ka.createWriteStream)(t),a?{signal:a}:void 0)}async function Vl(e,t,a,n,r){let o=(0,Pr.join)(t,a);try{await(0,On.stat)(t)}catch{(0,ka.mkdirSync)(t,{recursive:!0}),await Fa(e,o,r);return}if(n){await Fa(e,o,r);return}let u;try{u=await(0,On.stat)(o)}catch{await Fa(e,o,r);return}if(typeof e=="object"||e.startsWith("http://")||e.startsWith("https://")){let s=await(0,pi.default)(e,{...r,method:"HEAD"});if(!s.ok)throw new Error("Could not fetch URL");if(!(0,ci.isJSON)(s.headers.get("content-type")))throw new Error("URL does not return JSON");let i=Date.parse(s.headers.get("last-modified")??"");if(u.size===0||Number.isNaN(i)||i>u.mtimeMs){await Fa(e,o,r);return}}else if(e.startsWith("file://"))try{(await(0,On.stat)((0,Pr.normalize)(decodeURIComponent(new URL(e).pathname)))).mtimeMs>u.mtimeMs&&await Fa(e,o,r)}catch{throw new Error("Source file could not be read")}else throw new Error("Only HTTP(S) or file URLs are supported")}async function*Fl(e,t,a,n,r,o){let u=[],s=new _l.default([(0,ka.createReadStream)(e),n?Tl.default.withParser({filter:n}):(0,wl.parser)(),new Ol.default,i=>o?.(i.value)??i.value]);a?.addEventListener("abort",()=>{s.destroy()});try{for await(let i of s){if(a?.aborted)return[];(!r||r(i))&&u.push(i),u.length>=t&&(yield u,u=[])}}catch(i){throw s.destroy(),i}return u.length>0&&(yield u),[]}function kl(e,t){let{initialData:a,execute:n,keepPreviousData:r,onError:o,onData:u,onWillExecute:s,failureToastOptions:i,dataPath:p,filter:l,transform:c,pageSize:S=20,...g}=t??{},y=(0,Va.useRef)(),M=(0,Va.useRef)(),I={initialData:a,execute:n,keepPreviousData:r,onError:o,onData:u,onWillExecute:s,failureToastOptions:i},m=(0,Va.useRef)(null),R=(0,Va.useRef)(null),f=(0,Va.useRef)(!1);return(0,Ll.useCachedPromise)((A,E,D,B,H,q)=>async({page:Q})=>{let j=(0,Bl.hash)(A)+".json",Ee=Ul.environment.supportPath;if(Q===0){R.current?.abort(),R.current=new AbortController;let ce=(0,Pr.join)(Ee,j),N=!!(y.current&&y.current!==A&&M.current&&M.current===ce);y.current=A,M.current=ce,await Vl(A,Ee,j,N,{...D,signal:R.current?.signal}),m.current=Fl(ce,E,R.current?.signal,B,H,q)}if(!m.current)return{hasMore:f.current,data:[]};let{value:he,done:T}=await m.current.next();return f.current=!T,{hasMore:f.current,data:he??[]}},[e,S,g,p,l,c],I)}la.useStreamJSON=kl});var Bn=O(Ze=>{"use strict";var Ln=Ze&&Ze.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Ze,"__esModule",{value:!0});Ze.baseExecuteSQL=Ze.isPermissionError=Ze.PermissionError=void 0;var jl=require("node:fs"),hr=require("node:fs/promises"),zl=Ln(require("node:os")),di=Ln(require("node:child_process")),Si=Ln(require("node:path")),Cr=Ar(),Hl=ht(),xr=class extends Error{constructor(t){super(t),this.name="PermissionError"}};Ze.PermissionError=xr;function $l(e){return e instanceof Error&&e.name==="PermissionError"}Ze.isPermissionError=$l;async function Gl(e,t,a){if(!(0,jl.existsSync)(e))throw new Error("The database does not exist");let n=a?.signal,r,o=di.default.spawn("sqlite3",["--json","--readonly",e,t],{signal:n}),u=(0,Cr.getSpawnedPromise)(o),[{error:s,exitCode:i,signal:p},l,c]=await(0,Cr.getSpawnedResult)(o,{encoding:"utf-8"},u);if(Dr(n),c.match("(5)")||c.match("(14)")){if(!r){let S=Si.default.join(zl.default.tmpdir(),"useSQL",(0,Hl.hash)(e));await(0,hr.mkdir)(S,{recursive:!0}),Dr(n),r=Si.default.join(S,"db.db"),await(0,hr.copyFile)(e,r),await(0,hr.writeFile)(r+"-shm",""),await(0,hr.writeFile)(r+"-wal",""),Dr(n)}o=di.default.spawn("sqlite3",["--json","--readonly","--vfs","unix-none",r,t],{signal:n}),u=(0,Cr.getSpawnedPromise)(o),[{error:s,exitCode:i,signal:p},l,c]=await(0,Cr.getSpawnedResult)(o,{encoding:"utf-8"},u),Dr(n)}if(s||i!==0||p!==null)throw c.includes("authorization denied")?new xr("You do not have permission to access the database."):new Error(c||"Unknown error");return JSON.parse(l.trim()||"[]")}Ze.baseExecuteSQL=Gl;function Dr(e){if(e?.aborted){let t=new Error("aborted");throw t.name="AbortError",t}}});var gi=O(ca=>{"use strict";var Ql=ca&&ca.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ca,"__esModule",{value:!0});ca.useSQL=void 0;var Xe=require("react/jsx-runtime"),de=require("@raycast/api"),Wl=require("node:fs"),Kl=Ql(require("node:os")),vr=require("react"),Yl=aa(),Jl=ct(),Zl=xa(),qn=Bn();function Xl(e,t,a){let{permissionPriming:n,...r}=a||{},[o,u]=(0,vr.useState)(),s=(0,Jl.useLatest)(a||{}),i=(0,vr.useRef)(),p=(0,vr.useCallback)(c=>{console.error(c);let S=c instanceof Error&&c.message.includes("authorization denied")?new qn.PermissionError("You do not have permission to access the database."):c;(0,qn.isPermissionError)(S)?u((0,Xe.jsx)(ec,{priming:s.current.permissionPriming})):s.current.onError?s.current.onError(S):de.environment.launchType!==de.LaunchType.Background&&(0,Zl.showFailureToast)(S,{title:"Cannot query the data"})},[s]),l=(0,vr.useMemo)(()=>{if(!(0,Wl.existsSync)(e))throw new Error("The database does not exist");return async(c,S)=>{let g=i.current?.signal;return(0,qn.baseExecuteSQL)(c,S,{signal:g})}},[e]);return{...(0,Yl.usePromise)(l,[e,t],{...r,onError:p}),permissionView:o}}ca.useSQL=Xl;var bi=parseInt(Kl.default.release().split(".")[0])>=22,Nn=bi?"Settings":"Preferences";function ec(e){let t=bi?{title:"Open System Settings -> Privacy",target:"x-apple.systempreferences:com.apple.preference.security?Privacy_AllFiles"}:{title:"Open System Preferences -> Security",target:"x-apple.systempreferences:com.apple.preference.security?Privacy_AllFiles"};return de.environment.commandMode==="menu-bar"?(0,Xe.jsxs)(de.MenuBarExtra,{icon:de.Icon.Warning,title:de.environment.commandName,children:[(0,Xe.jsx)(de.MenuBarExtra.Item,{title:"Raycast needs full disk access",tooltip:`You can revert this access in ${Nn} whenever you want`}),e.priming?(0,Xe.jsx)(de.MenuBarExtra.Item,{title:e.priming,tooltip:`You can revert this access in ${Nn} whenever you want`}):null,(0,Xe.jsx)(de.MenuBarExtra.Separator,{}),(0,Xe.jsx)(de.MenuBarExtra.Item,{title:t.title,onAction:()=>(0,de.open)(t.target)})]}):(0,Xe.jsx)(de.List,{children:(0,Xe.jsx)(de.List.EmptyView,{icon:{source:{light:"https://raycast.com/uploads/extensions-utils-security-permissions-light.png",dark:"https://raycast.com/uploads/extensions-utils-security-permissions-dark.png"}},title:"Raycast needs full disk access.",description:`${e.priming?e.priming+`
`:""}You can revert this access in ${Nn} whenever you want.`,actions:(0,Xe.jsx)(de.ActionPanel,{children:(0,Xe.jsx)(de.Action.Open,{...t})})})})}});var mi=O(ya=>{"use strict";Object.defineProperty(ya,"__esModule",{value:!0});ya.useForm=ya.FormValidation=void 0;var bt=require("react"),Ii=ct(),Fn;(function(e){e.Required="required"})(Fn||(ya.FormValidation=Fn={}));function Vn(e,t){if(e){if(typeof e=="function")return e(t);if(e===Fn.Required){let a=typeof t<"u"&&t!==null;if(a)switch(typeof t){case"string":a=t.length>0;break;case"object":Array.isArray(t)?a=t.length>0:t instanceof Date&&(a=t.getTime()>0);break;default:break}if(!a)return"The item is required"}}}function tc(e){let{onSubmit:t,validation:a,initialValues:n={}}=e,[r,o]=(0,bt.useState)(n),[u,s]=(0,bt.useState)({}),i=(0,bt.useRef)({}),p=(0,Ii.useLatest)(a||{}),l=(0,Ii.useLatest)(t),c=(0,bt.useCallback)(m=>{i.current[m]?.focus()},[i]),S=(0,bt.useCallback)(async m=>{let R=!1;for(let[A,E]of Object.entries(p.current)){let D=Vn(E,m[A]);D&&(R||(R={},c(A)),R[A]=D)}if(R)return s(R),!1;let f=await l.current(m);return typeof f=="boolean"?f:!0},[p,l,c]),g=(0,bt.useCallback)((m,R)=>{s(f=>({...f,[m]:R}))},[s]),y=(0,bt.useCallback)(function(m,R){o(f=>({...f,[m]:typeof R=="function"?R(f[m]):R}))},[o]),M=(0,bt.useMemo)(()=>new Proxy({},{get(m,R){let f=p.current[R],A=r[R];return{onChange(E){u[R]&&(Vn(f,E)||g(R,void 0)),y(R,E)},onBlur(E){let D=Vn(f,E.target.value);D&&g(R,D)},error:u[R],id:R,value:typeof A>"u"?null:A,ref:E=>{i.current[R]=E}}}}),[u,p,g,r,i,y]),I=(0,bt.useCallback)(m=>{s({}),Object.entries(i.current).forEach(([R,f])=>{m?.[R]||f?.reset()}),m&&o(m)},[o,s,i]);return{handleSubmit:S,setValidationError:g,setValue:y,values:r,itemProps:M,focus:c,reset:I}}ya.useForm=tc});var Ri=O(Ur=>{"use strict";Object.defineProperty(Ur,"__esModule",{value:!0});Ur.useAI=void 0;var Mi=require("react"),ac=require("@raycast/api"),rc=aa();function nc(e,t={}){let{creativity:a,stream:n,model:r,...o}=t,[u,s]=(0,Mi.useState)(""),i=(0,Mi.useRef)(),{isLoading:p,error:l,revalidate:c}=(0,rc.usePromise)(async(S,g,y)=>{s("");let M=ac.AI.ask(S,{creativity:g,model:r,signal:i.current?.signal});y===!1?s(await M):(M.on("data",I=>{s(m=>m+I)}),await M)},[e,a,n],{...o,abortable:i});return{isLoading:p,data:u,error:l,revalidate:c}}Ur.useAI=nc});var Pi=O(_r=>{"use strict";Object.defineProperty(_r,"__esModule",{value:!0});_r.useFrecencySorting=void 0;var kn=require("react"),fi=ct(),oc=br(),ic=10,Ai=1440*60*1e3,sc=Math.log(2)/(ic*Ai),uc={Default:100,Embed:0,Bookmark:140};function pc(e){let t=Date.now(),a=e?e.lastVisited:0,n=e?e.frecency:0,r=(t-a)/Ai,o=uc.Default*Math.exp(-sc*r),u=n+o;return{lastVisited:t,frecency:u}}var lc=e=>{if(process.env.NODE_ENV!=="production"&&(typeof e!="object"||!e||!("id"in e)||typeof e.id!="string"))throw new Error("Specify a key function or make sure your items have an 'id' property");return e.id};function cc(e,t){let a=(0,fi.useLatest)(t?.key||lc),n=(0,fi.useLatest)(t?.sortUnvisited),[r,o]=(0,oc.useCachedState)(`raycast_frecency_${t?.namespace}`,{}),u=(0,kn.useCallback)(async function(l){let c=a.current(l);o(S=>{let g=S[c],y=pc(g);return{...S,[c]:y}})},[a,o]),s=(0,kn.useCallback)(async function(l){let c=a.current(l);o(S=>{let g={...S};return delete g[c],g})},[a,o]);return{data:(0,kn.useMemo)(()=>e?e.sort((p,l)=>{let c=r[a.current(p)],S=r[a.current(l)];return c&&!S?-1:!c&&S?1:c&&S?S.frecency-c.frecency:n.current?n.current(p,l):0}):[],[r,e,a,n]),visitItem:u,resetRanking:s}}_r.useFrecencySorting=cc});var Ci=O(wr=>{"use strict";Object.defineProperty(wr,"__esModule",{value:!0});wr.useLocalStorage=void 0;var jn=require("@raycast/api"),Ei=xa(),hi=ht(),yc=aa();function dc(e,t){let{data:a,isLoading:n,mutate:r}=(0,yc.usePromise)(async s=>{let i=await jn.LocalStorage.getItem(s);return typeof i<"u"?JSON.parse(i,hi.reviver):t},[e]);async function o(s){try{await r(jn.LocalStorage.setItem(e,JSON.stringify(s,hi.replacer)),{optimisticUpdate(i){return i}})}catch(i){await(0,Ei.showFailureToast)(i,{title:"Failed to set value in local storage"})}}async function u(){try{await r(jn.LocalStorage.removeItem(e),{optimisticUpdate(){}})}catch(s){await(0,Ei.showFailureToast)(s,{title:"Failed to remove value from local storage"})}}return{value:a,setValue:o,removeValue:u,isLoading:n}}wr.useLocalStorage=dc});var _i=O(da=>{"use strict";Object.defineProperty(da,"__esModule",{value:!0});da.slightlyLighterColor=da.slightlyDarkerColor=void 0;function Sc(e){let t=0,a=0,n=0;if(e.length===4)t=parseInt(`${e[1]}${e[1]}`,16),a=parseInt(`${e[2]}${e[2]}`,16),n=parseInt(`${e[3]}${e[3]}`,16);else if(e.length===7)t=parseInt(`${e[1]}${e[2]}`,16),a=parseInt(`${e[3]}${e[4]}`,16),n=parseInt(`${e[5]}${e[6]}`,16);else throw new Error(`Malformed hex color: ${e}`);return{r:t,g:a,b:n}}function bc({r:e,g:t,b:a}){let n=e.toString(16),r=t.toString(16),o=a.toString(16);return n.length===1&&(n=`0${n}`),r.length===1&&(r=`0${r}`),o.length===1&&(o=`0${o}`),`#${n}${r}${o}`}function gc({r:e,g:t,b:a}){e/=255,t/=255,a/=255;let n=Math.min(e,t,a),r=Math.max(e,t,a),o=r-n,u=0,s=0,i=0;return o===0?u=0:r===e?u=(t-a)/o%6:r===t?u=(a-e)/o+2:u=(e-t)/o+4,u=Math.round(u*60),u<0&&(u+=360),i=(r+n)/2,s=o===0?0:o/(1-Math.abs(2*i-1)),s=+(s*100).toFixed(1),i=+(i*100).toFixed(1),{h:u,s,l:i}}function Ic({h:e,s:t,l:a}){t/=100,a/=100;let n=(1-Math.abs(2*a-1))*t,r=n*(1-Math.abs(e/60%2-1)),o=a-n/2,u=0,s=0,i=0;return e>=0&&e<60?(u=n,s=r,i=0):e>=60&&e<120?(u=r,s=n,i=0):e>=120&&e<180?(u=0,s=n,i=r):e>=180&&e<240?(u=0,s=r,i=n):e>=240&&e<300?(u=r,s=0,i=n):e>=300&&e<360&&(u=n,s=0,i=r),u=Math.round((u+o)*255),s=Math.round((s+o)*255),i=Math.round((i+o)*255),{r:u,g:s,b:i}}function Di(e){return gc(Sc(e))}function xi(e){return bc(Ic(e))}function vi(e,t,a){return t<a?e<t?t:e>a?a:e:e<a?a:e>t?t:e}var Ui=12;function mc(e){let t=Di(e);return xi({h:t.h,s:t.s,l:vi(t.l-Ui,0,100)})}da.slightlyDarkerColor=mc;function Mc(e){let t=Di(e);return xi({h:t.h,s:t.s,l:vi(t.l+Ui,0,100)})}da.slightlyLighterColor=Mc});var Oi=O(Tr=>{"use strict";Object.defineProperty(Tr,"__esModule",{value:!0});Tr.getAvatarIcon=void 0;var wi=_i();function Sa(e,t){let a=e.charCodeAt(t);if(Number.isNaN(a))return["",t];if(a<55296||a>57343)return[e.charAt(t),t];if(55296<=a&&a<=56319){if(e.length<=t+1)throw new Error("High surrogate without following low surrogate");let r=e.charCodeAt(t+1);if(56320>r||r>57343)throw new Error("High surrogate without following low surrogate");return[e.charAt(t)+e.charAt(t+1),t+1]}if(t===0)throw new Error("Low surrogate without preceding high surrogate");let n=e.charCodeAt(t-1);if(55296>n||n>56319)throw new Error("Low surrogate without preceding high surrogate");return[e.charAt(t+1),t+1]}var Ti=["#DC829A","#D64854","#D47600","#D36CDD","#52A9E4","#7871E8","#70920F","#43B93A","#EB6B3E","#26B795","#D85A9B","#A067DC","#BD9500","#5385D9"];function Rc(e,t){let a=e.trim().split(" "),n;if(a.length==1&&Sa(a[0],0)[0])n=Sa(a[0],0)[0];else if(a.length>1){let i=Sa(a[0],0)[0]||"",p=Sa(a[a.length-1],0)[0]??"";n=i+p}else n="";let r;if(t?.background)r=t?.background;else{let i=0,[p,l]=Sa(n,0);for(;p;)i+=p.charCodeAt(0),[p,l]=Sa(n,l+1);let c=i%Ti.length;r=Ti[c]}let u=50-0;return`data:image/svg+xml,${`<svg width="100px" height="100px">
  ${t?.gradient!==!1?`<defs>
      <linearGradient id="Gradient" x1="0.25" x2="0.75" y1="0" y2="1">
        <stop offset="0%" stop-color="${(0,wi.slightlyLighterColor)(r)}"/>
        <stop offset="50%" stop-color="${r}"/>
        <stop offset="100%" stop-color="${(0,wi.slightlyDarkerColor)(r)}"/>
      </linearGradient>
  </defs>`:""}
      <circle cx="50" cy="50" r="${u}" fill="${t?.gradient!==!1?"url(#Gradient)":r}" />
      ${n?`<text x="50" y="80" font-size="${u-1}" font-family="Inter, sans-serif" text-anchor="middle" fill="white">${n.toUpperCase()}</text>`:""}
    </svg>
  `.replaceAll(`
`,"")}`}Tr.getAvatarIcon=Rc});var Bi=O(Or=>{"use strict";Object.defineProperty(Or,"__esModule",{value:!0});Or.getFavicon=void 0;var Li=require("@raycast/api"),fc=require("url");function Ac(e,t){try{let n=(typeof e=="string"?new fc.URL(e):e).hostname;return{source:`https://www.google.com/s2/favicons?sz=${t?.size??64}&domain=${n}`,fallback:t?.fallback??Li.Icon.Link,mask:t?.mask}}catch(a){return console.error(a),Li.Icon.Link}}Or.getFavicon=Ac});var Vi=O(Lr=>{"use strict";Object.defineProperty(Lr,"__esModule",{value:!0});Lr.getProgressIcon=void 0;var qi=require("@raycast/api");function Ni(e,t,a,n){let r=(n-90)*Math.PI/180;return{x:e+a*Math.cos(r),y:t+a*Math.sin(r)}}function Pc(e,t,a,n,r){let o=Ni(e,t,a,r),u=Ni(e,t,a,n),s=r-n<=180?"0":"1";return["M",o.x,o.y,"A",a,a,0,s,0,u.x,u.y].join(" ")}function Ec(e,t=qi.Color.Red,a){let n=a?.background||(qi.environment.appearance==="light"?"black":"white"),r=a?.backgroundOpacity||.1,o=10,s=50-5-o/2;return`data:image/svg+xml,${`<svg width="100px" height="100px">
      <circle cx="50" cy="50" r="${s}" stroke-width="${o}" stroke="${e<1?n:t}" opacity="${e<1?r:"1"}" fill="none" />
      ${e>0&&e<1?`<path d="${Pc(50,50,s,0,e*360)}" stroke="${t}" stroke-width="${o}" fill="none" />`:""}
    </svg>
  `.replaceAll(`
`,"")}`}Lr.getProgressIcon=Ec});var Fi=O(gt=>{"use strict";var hc=gt&&gt.__createBinding||(Object.create?(function(e,t,a,n){n===void 0&&(n=a);var r=Object.getOwnPropertyDescriptor(t,a);(!r||("get"in r?!t.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,r)}):(function(e,t,a,n){n===void 0&&(n=a),e[n]=t[a]})),zn=gt&&gt.__exportStar||function(e,t){for(var a in e)a!=="default"&&!Object.prototype.hasOwnProperty.call(t,a)&&hc(t,e,a)};Object.defineProperty(gt,"__esModule",{value:!0});zn(Oi(),gt);zn(Bi(),gt);zn(Vi(),gt)});var ki=O(le=>{"use strict";Object.defineProperty(le,"__esModule",{value:!0});le.zoomService=le.slackService=le.linearService=le.jiraService=le.googleService=le.githubService=le.asanaService=void 0;var Se=require("@raycast/api"),Ft=Hn(),Br={asana:"1191201745684312",github:"7235fe8d42157f1f38c0",linear:"c8ff37b9225c3c9aefd7d66ea0e5b6f1",slack:"851756884692.5546927290212"},vt=e=>`data:image/svg+xml,${e}`,kt={asana:vt('<svg xmlns="http://www.w3.org/2000/svg" width="251" height="232" fill="none"><path fill="#F06A6A" d="M179.383 54.373c0 30.017-24.337 54.374-54.354 54.374-30.035 0-54.373-24.338-54.373-54.374C70.656 24.338 94.993 0 125.029 0c30.017 0 54.354 24.338 54.354 54.373ZM54.393 122.33C24.376 122.33.02 146.668.02 176.685c0 30.017 24.337 54.373 54.373 54.373 30.035 0 54.373-24.338 54.373-54.373 0-30.017-24.338-54.355-54.373-54.355Zm141.253 0c-30.035 0-54.373 24.338-54.373 54.374 0 30.035 24.338 54.373 54.373 54.373 30.017 0 54.374-24.338 54.374-54.373 0-30.036-24.338-54.374-54.374-54.374Z"/></svg>'),github:{source:vt('<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>'),tintColor:Se.Color.PrimaryText},google:vt('<svg xmlns="http://www.w3.org/2000/svg" style="display:block" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/><path fill="none" d="M0 0h48v48H0z"/></svg>'),jira:vt('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="2361" height="2500" viewBox="2.59 0 214.091 224"><linearGradient id="a" x1="102.4" x2="56.15" y1="218.63" y2="172.39" gradientTransform="matrix(1 0 0 -1 0 264)" gradientUnits="userSpaceOnUse"><stop offset=".18" stop-color="#0052cc"/><stop offset="1" stop-color="#2684ff"/></linearGradient><linearGradient xlink:href="#a" id="b" x1="114.65" x2="160.81" y1="85.77" y2="131.92"/><path fill="#2684ff" d="M214.06 105.73 117.67 9.34 108.33 0 35.77 72.56 2.59 105.73a8.89 8.89 0 0 0 0 12.54l66.29 66.29L108.33 224l72.55-72.56 1.13-1.12 32.05-32a8.87 8.87 0 0 0 0-12.59zm-105.73 39.39L75.21 112l33.12-33.12L141.44 112z"/><path fill="url(#a)" d="M108.33 78.88a55.75 55.75 0 0 1-.24-78.61L35.62 72.71l39.44 39.44z"/><path fill="url(#b)" d="m141.53 111.91-33.2 33.21a55.77 55.77 0 0 1 0 78.86L181 151.35z"/></svg>'),linear:{source:{light:vt('<svg xmlns="http://www.w3.org/2000/svg" fill="#222326" width="200" height="200" viewBox="0 0 100 100"><path d="M1.22541 61.5228c-.2225-.9485.90748-1.5459 1.59638-.857L39.3342 97.1782c.6889.6889.0915 1.8189-.857 1.5964C20.0515 94.4522 5.54779 79.9485 1.22541 61.5228ZM.00189135 46.8891c-.01764375.2833.08887215.5599.28957165.7606L52.3503 99.7085c.2007.2007.4773.3075.7606.2896 2.3692-.1476 4.6938-.46 6.9624-.9259.7645-.157 1.0301-1.0963.4782-1.6481L2.57595 39.4485c-.55186-.5519-1.49117-.2863-1.648174.4782-.465915 2.2686-.77832 4.5932-.92588465 6.9624ZM4.21093 29.7054c-.16649.3738-.08169.8106.20765 1.1l64.77602 64.776c.2894.2894.7262.3742 1.1.2077 1.7861-.7956 3.5171-1.6927 5.1855-2.684.5521-.328.6373-1.0867.1832-1.5407L8.43566 24.3367c-.45409-.4541-1.21271-.3689-1.54074.1832-.99132 1.6684-1.88843 3.3994-2.68399 5.1855ZM12.6587 18.074c-.3701-.3701-.393-.9637-.0443-1.3541C21.7795 6.45931 35.1114 0 49.9519 0 77.5927 0 100 22.4073 100 50.0481c0 14.8405-6.4593 28.1724-16.7199 37.3375-.3903.3487-.984.3258-1.3542-.0443L12.6587 18.074Z"/></svg>'),dark:vt('<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="200" height="200" viewBox="0 0 100 100"><path d="M1.22541 61.5228c-.2225-.9485.90748-1.5459 1.59638-.857L39.3342 97.1782c.6889.6889.0915 1.8189-.857 1.5964C20.0515 94.4522 5.54779 79.9485 1.22541 61.5228ZM.00189135 46.8891c-.01764375.2833.08887215.5599.28957165.7606L52.3503 99.7085c.2007.2007.4773.3075.7606.2896 2.3692-.1476 4.6938-.46 6.9624-.9259.7645-.157 1.0301-1.0963.4782-1.6481L2.57595 39.4485c-.55186-.5519-1.49117-.2863-1.648174.4782-.465915 2.2686-.77832 4.5932-.92588465 6.9624ZM4.21093 29.7054c-.16649.3738-.08169.8106.20765 1.1l64.77602 64.776c.2894.2894.7262.3742 1.1.2077 1.7861-.7956 3.5171-1.6927 5.1855-2.684.5521-.328.6373-1.0867.1832-1.5407L8.43566 24.3367c-.45409-.4541-1.21271-.3689-1.54074.1832-.99132 1.6684-1.88843 3.3994-2.68399 5.1855ZM12.6587 18.074c-.3701-.3701-.393-.9637-.0443-1.3541C21.7795 6.45931 35.1114 0 49.9519 0 77.5927 0 100 22.4073 100 50.0481c0 14.8405-6.4593 28.1724-16.7199 37.3375-.3903.3487-.984.3258-1.3542-.0443L12.6587 18.074Z" /></svg>')}},slack:vt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="73 73 124 124"><style>.st0{fill:#e01e5a}.st1{fill:#36c5f0}.st2{fill:#2eb67d}.st3{fill:#ecb22e}</style><path d="M99.4 151.2c0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9h12.9v12.9zM105.9 151.2c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v32.3c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9v-32.3z" class="st0"/><path d="M118.8 99.4c-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v12.9h-12.9zM118.8 105.9c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H86.5c-7.1 0-12.9-5.8-12.9-12.9s5.8-12.9 12.9-12.9h32.3z" class="st1"/><path d="M170.6 118.8c0-7.1 5.8-12.9 12.9-12.9 7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9h-12.9v-12.9zM164.1 118.8c0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9V86.5c0-7.1 5.8-12.9 12.9-12.9 7.1 0 12.9 5.8 12.9 12.9v32.3z" class="st2"/><path d="M151.2 170.6c7.1 0 12.9 5.8 12.9 12.9 0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9v-12.9h12.9zM151.2 164.1c-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9h32.3c7.1 0 12.9 5.8 12.9 12.9 0 7.1-5.8 12.9-12.9 12.9h-32.3z" class="st3"/></svg>'),zoom:vt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 351.845 80"><path d="M73.786 78.835H10.88A10.842 10.842 0 0 1 .833 72.122a10.841 10.841 0 0 1 2.357-11.85L46.764 16.7h-31.23C6.954 16.699 0 9.744 0 1.165h58.014c4.414 0 8.357 2.634 10.046 6.712a10.843 10.843 0 0 1-2.356 11.85L22.13 63.302h36.122c8.58 0 15.534 6.955 15.534 15.534Zm278.059-48.544C351.845 13.588 338.256 0 321.553 0c-8.934 0-16.975 3.89-22.524 10.063C293.48 3.89 285.44 0 276.505 0c-16.703 0-30.291 13.588-30.291 30.291v48.544c8.579 0 15.534-6.955 15.534-15.534v-33.01c0-8.137 6.62-14.757 14.757-14.757s14.757 6.62 14.757 14.757v33.01c0 8.58 6.955 15.534 15.534 15.534V30.291c0-8.137 6.62-14.757 14.757-14.757s14.758 6.62 14.758 14.757v33.01c0 8.58 6.954 15.534 15.534 15.534V30.291ZM238.447 40c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.908-40 40-40 40 17.909 40 40Zm-15.534 0c0-13.512-10.954-24.466-24.466-24.466S173.98 26.488 173.98 40s10.953 24.466 24.466 24.466S222.913 53.512 222.913 40Zm-70.68 0c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.909-40 40-40 40 17.909 40 40Zm-15.534 0c0-13.512-10.954-24.466-24.466-24.466S87.767 26.488 87.767 40s10.954 24.466 24.466 24.466S136.699 53.512 136.699 40Z" style="fill:#0b5cff"/></svg>')},Cc=e=>new Ft.OAuthService({client:new Se.OAuth.PKCEClient({redirectMethod:Se.OAuth.RedirectMethod.Web,providerName:"Asana",providerIcon:kt.asana,providerId:"asana",description:"Connect your Asana account"}),clientId:e.clientId??Br.asana,authorizeUrl:e.authorizeUrl??"https://asana.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://asana.oauth.raycast.com/token",refreshTokenUrl:e.refreshTokenUrl??"https://asana.oauth.raycast.com/refresh-token",scope:e.scope,personalAccessToken:e.personalAccessToken,onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});le.asanaService=Cc;var Dc=e=>new Ft.OAuthService({client:new Se.OAuth.PKCEClient({redirectMethod:Se.OAuth.RedirectMethod.Web,providerName:"GitHub",providerIcon:kt.github,providerId:"github",description:"Connect your GitHub account"}),clientId:e.clientId??Br.github,authorizeUrl:e.authorizeUrl??"https://github.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://github.oauth.raycast.com/token",refreshTokenUrl:e.refreshTokenUrl??"https://github.oauth.raycast.com/refresh-token",scope:e.scope,personalAccessToken:e.personalAccessToken,onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});le.githubService=Dc;var xc=e=>new Ft.OAuthService({client:new Se.OAuth.PKCEClient({redirectMethod:Se.OAuth.RedirectMethod.AppURI,providerName:"Google",providerIcon:kt.google,providerId:"google",description:"Connect your Google account"}),clientId:e.clientId,authorizeUrl:e.authorizeUrl??"https://accounts.google.com/o/oauth2/v2/auth",tokenUrl:e.tokenUrl??"https://oauth2.googleapis.com/token",refreshTokenUrl:e.tokenUrl,scope:e.scope,personalAccessToken:e.personalAccessToken,bodyEncoding:e.bodyEncoding??"url-encoded",onAuthorize:e.onAuthorize,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});le.googleService=xc;var vc=e=>new Ft.OAuthService({client:new Se.OAuth.PKCEClient({redirectMethod:Se.OAuth.RedirectMethod.Web,providerName:"Jira",providerIcon:kt.jira,providerId:"jira",description:"Connect your Jira account"}),clientId:e.clientId,authorizeUrl:e.authorizeUrl??"https://auth.atlassian.com/authorize",tokenUrl:e.tokenUrl??"https://auth.atlassian.com/oauth/token",refreshTokenUrl:e.refreshTokenUrl,scope:e.scope,personalAccessToken:e.personalAccessToken,onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});le.jiraService=vc;var Uc=e=>new Ft.OAuthService({client:new Se.OAuth.PKCEClient({redirectMethod:Se.OAuth.RedirectMethod.Web,providerName:"Linear",providerIcon:kt.linear,providerId:"linear",description:"Connect your Linear account"}),clientId:e.clientId??Br.linear,authorizeUrl:e.authorizeUrl??"https://linear.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://linear.oauth.raycast.com/token",refreshTokenUrl:e.refreshTokenUrl??"https://linear.oauth.raycast.com/refresh-token",scope:e.scope,extraParameters:{actor:"user"},onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});le.linearService=Uc;var _c=e=>new Ft.OAuthService({client:new Se.OAuth.PKCEClient({redirectMethod:Se.OAuth.RedirectMethod.Web,providerName:"Slack",providerIcon:kt.slack,providerId:"slack",description:"Connect your Slack account"}),clientId:e.clientId??Br.slack,authorizeUrl:e.authorizeUrl??"https://slack.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://slack.oauth.raycast.com/token",refreshTokenUrl:e.tokenUrl??"https://slack.oauth.raycast.com/refresh-token",scope:"",extraParameters:{user_scope:e.scope},personalAccessToken:e.personalAccessToken,bodyEncoding:e.tokenUrl?e.bodyEncoding??"url-encoded":"json",onAuthorize:e.onAuthorize,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser??(t=>({access_token:t.authed_user.access_token,scope:t.authed_user.scope}))});le.slackService=_c;var wc=e=>new Ft.OAuthService({client:new Se.OAuth.PKCEClient({redirectMethod:Se.OAuth.RedirectMethod.Web,providerName:"Zoom",providerIcon:kt.zoom,providerId:"zoom",description:"Connect your Zoom account"}),clientId:e.clientId,authorizeUrl:e.authorizeUrl??"https://zoom.us/oauth/authorize",tokenUrl:e.tokenUrl??"https://zoom.us/oauth/token",refreshTokenUrl:e.refreshTokenUrl,scope:e.scope,personalAccessToken:e.personalAccessToken,bodyEncoding:e.bodyEncoding??"url-encoded",onAuthorize:e.onAuthorize,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});le.zoomService=wc});var Hn=O(ba=>{"use strict";var Tc=ba&&ba.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ba,"__esModule",{value:!0});ba.OAuthService=void 0;var ji=Tc(qa()),jt=ki(),et=class{constructor(t){this.clientId=t.clientId,this.scope=Array.isArray(t.scope)?t.scope.join(" "):t.scope,this.personalAccessToken=t.personalAccessToken,this.bodyEncoding=t.bodyEncoding,this.client=t.client,this.extraParameters=t.extraParameters,this.authorizeUrl=t.authorizeUrl,this.tokenUrl=t.tokenUrl,this.refreshTokenUrl=t.refreshTokenUrl,this.onAuthorize=t.onAuthorize,this.tokenResponseParser=t.tokenResponseParser??(a=>a),this.tokenRefreshResponseParser=t.tokenRefreshResponseParser??(a=>a),this.authorize=this.authorize.bind(this)}async authorize(){let t=await this.client.getTokens();if(t?.accessToken){if(t.refreshToken&&t.isExpired()){let o=await this.refreshTokens({token:t.refreshToken});if(o)return await this.client.setTokens(o),o.access_token}return t.accessToken}let a=await this.client.authorizationRequest({endpoint:this.authorizeUrl,clientId:this.clientId,scope:this.scope,extraParameters:this.extraParameters}),{authorizationCode:n}=await this.client.authorize(a),r=await this.fetchTokens({authRequest:a,authorizationCode:n});return await this.client.setTokens(r),r.access_token}async fetchTokens({authRequest:t,authorizationCode:a}){let n;if(this.bodyEncoding==="url-encoded"){let u=new URLSearchParams;u.append("client_id",this.clientId),u.append("code",a),u.append("code_verifier",t.codeVerifier),u.append("grant_type","authorization_code"),u.append("redirect_uri",t.redirectURI),n={body:u}}else n={body:JSON.stringify({client_id:this.clientId,code:a,code_verifier:t.codeVerifier,grant_type:"authorization_code",redirect_uri:t.redirectURI}),headers:{"Content-Type":"application/json"}};let r=await(0,ji.default)(this.tokenUrl,{method:"POST",...n});if(!r.ok){let u=await r.text();throw console.error("fetch tokens error:",u),new Error(`Error while fetching tokens: ${r.status} (${r.statusText})
${u}`)}let o=this.tokenResponseParser(await r.json());return Array.isArray(o.scope)?{...o,scope:o.scope.join(" ")}:o}async refreshTokens({token:t}){let a;if(this.bodyEncoding==="url-encoded"){let r=new URLSearchParams;r.append("client_id",this.clientId),r.append("refresh_token",t),r.append("grant_type","refresh_token"),a={body:r}}else a={body:JSON.stringify({client_id:this.clientId,refresh_token:t,grant_type:"refresh_token"}),headers:{"Content-Type":"application/json"}};let n=await(0,ji.default)(this.refreshTokenUrl??this.tokenUrl,{method:"POST",...a});if(n.ok){let r=this.tokenRefreshResponseParser(await n.json());return r.refresh_token=r.refresh_token??t,r}else{let r=await n.text();console.error("refresh tokens error:",r),this.client.description=`${this.client.providerName} needs you to sign-in again. Press \u23CE or click the button below to continue.`,await this.client.removeTokens(),await this.authorize()}}};ba.OAuthService=et;et.asana=jt.asanaService;et.github=jt.githubService;et.google=jt.googleService;et.jira=jt.jiraService;et.linear=jt.linearService;et.slack=jt.slackService;et.zoom=jt.zoomService});var zi=O(ga=>{"use strict";Object.defineProperty(ga,"__esModule",{value:!0});ga.getAccessToken=ga.withAccessToken=void 0;var Oc=require("react/jsx-runtime"),Lc=require("@raycast/api"),Ut=null,zt=null,$n=null,Gn=null,Qn=null;function Bc(e){return Lc.environment.commandMode==="no-view"?t=>async n=>{if(!Ut){Ut=e.personalAccessToken??await e.authorize(),zt=e.personalAccessToken?"personal":"oauth";let r=(await e.client?.getTokens())?.idToken;e.onAuthorize&&await Promise.resolve(e.onAuthorize({token:Ut,type:zt,idToken:r}))}return t(n)}:t=>{let a=n=>{e.personalAccessToken?(Ut=e.personalAccessToken,zt="personal"):($n||($n=Wn(e.authorize())),Ut=$n.read(),zt="oauth");let r;return e.client&&(Gn||(Gn=Wn(e.client.getTokens())),r=Gn.read()?.idToken),!Qn&&e.onAuthorize&&(Qn=Wn(Promise.resolve(e.onAuthorize({token:Ut,type:zt,idToken:r})))),Qn?.read(),(0,Oc.jsx)(t,{...n})};return a.displayName=`withAccessToken(${t.displayName||t.name})`,a}}ga.withAccessToken=Bc;function qc(){if(!Ut||!zt)throw new Error("getAccessToken must be used when authenticated (eg. used inside `withAccessToken`)");return{token:Ut,type:zt}}ga.getAccessToken=qc;function Wn(e){let t="pending",a,n=e.then(o=>{t="success",a=o},o=>{t="error",a=o});return{read:()=>{switch(t){case"pending":throw n;case"error":throw a;default:return a}}}}});var $i=O(_t=>{"use strict";var Nc=_t&&_t.__createBinding||(Object.create?(function(e,t,a,n){n===void 0&&(n=a);var r=Object.getOwnPropertyDescriptor(t,a);(!r||("get"in r?!t.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,r)}):(function(e,t,a,n){n===void 0&&(n=a),e[n]=t[a]})),Hi=_t&&_t.__exportStar||function(e,t){for(var a in e)a!=="default"&&!Object.prototype.hasOwnProperty.call(t,a)&&Nc(t,e,a)};Object.defineProperty(_t,"__esModule",{value:!0});Hi(Hn(),_t);Hi(zi(),_t)});var Yi=O(Be=>{"use strict";var Gi=Be&&Be.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Be,"__esModule",{value:!0});Be.createDeeplink=Be.createExtensionDeeplink=Be.createScriptCommandDeeplink=Be.DeeplinkType=void 0;var Yn=require("@raycast/api"),Vc=Gi(require("node:fs")),Fc=Gi(require("node:path")),Kn;(function(e){e.ScriptCommand="script-command",e.Extension="extension"})(Kn||(Be.DeeplinkType=Kn={}));function Qi(){return Yn.environment.raycastVersion.includes("alpha")?"raycastinternal://":"raycast://"}function kc(){let e=JSON.parse(Vc.default.readFileSync(Fc.default.join(Yn.environment.assetsPath,"..","package.json"),"utf8"));return e.owner||e.author}function Wi(e){let t=`${Qi()}script-commands/${e.command}`;if(e.arguments){let a="";for(let n of e.arguments)a+="&arguments="+encodeURIComponent(n);t+="?"+a.substring(1)}return t}Be.createScriptCommandDeeplink=Wi;function Ki(e){let t=kc(),a=Yn.environment.extensionName;"ownerOrAuthorName"in e&&"extensionName"in e&&(t=e.ownerOrAuthorName,a=e.extensionName);let n=`${Qi()}extensions/${t}/${a}/${e.command}`,r="";return e.launchType&&(r+="&launchType="+encodeURIComponent(e.launchType)),e.arguments&&(r+="&arguments="+encodeURIComponent(JSON.stringify(e.arguments))),e.context&&(r+="&context="+encodeURIComponent(JSON.stringify(e.context))),e.fallbackText&&(r+="&fallbackText="+encodeURIComponent(e.fallbackText)),r&&(n+="?"+r.substring(1)),n}Be.createExtensionDeeplink=Ki;function jc(e){return e.type===Kn.ScriptCommand?Wi(e):Ki(e)}Be.createDeeplink=jc});var Ji=O(qr=>{"use strict";Object.defineProperty(qr,"__esModule",{value:!0});qr.executeSQL=void 0;var zc=Bn();function Hc(e,t){return(0,zc.baseExecuteSQL)(e,t)}qr.executeSQL=Hc});var Zi=O(Ia=>{"use strict";var $c=Ia&&Ia.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Ia,"__esModule",{value:!0});Ia.runAppleScript=void 0;var Gc=$c(require("node:child_process")),ja=Ar();async function Qc(e,t,a){let{humanReadableOutput:n,language:r,timeout:o,...u}=Array.isArray(t)?a||{}:t||{},s=n!==!1?[]:["-ss"];r==="JavaScript"&&s.push("-l","JavaScript"),Array.isArray(t)&&s.push("-",...t);let i=Gc.default.spawn("osascript",s,{...u,env:{PATH:"/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"}}),p=(0,ja.getSpawnedPromise)(i,{timeout:o??1e4});i.stdin.end(e);let[{error:l,exitCode:c,signal:S,timedOut:g},y,M]=await(0,ja.getSpawnedResult)(i,{encoding:"utf8"},p),I=(0,ja.handleOutput)({stripFinalNewline:!0},y),m=(0,ja.handleOutput)({stripFinalNewline:!0},M);return(0,ja.defaultParsing)({stdout:I,stderr:m,error:l,exitCode:c,signal:S,timedOut:g,command:"osascript",options:a,parentError:new Error})}Ia.runAppleScript=Qc});var Xi=O(Vr=>{"use strict";Object.defineProperty(Vr,"__esModule",{value:!0});Vr.withCache=void 0;var Wc=require("@raycast/api"),Nr=ht();function Kc(e,t){let a=new Wc.Cache({namespace:(0,Nr.hash)(e)}),n=async(...r)=>{let o=(0,Nr.hash)(r||[])+t?.internal_cacheKeySuffix,u=a.get(o);if(u){let{data:i,timestamp:p}=JSON.parse(u,Nr.reviver);if(!(t?.maxAge&&Date.now()-p>t.maxAge)&&(!t?.validate||t.validate(i)))return i}let s=await e(...r);return a.set(o,JSON.stringify({data:s,timestamp:Date.now()},Nr.replacer)),s};return n.clearCache=()=>{a.clear()},n}Vr.withCache=Kc});var K=O($=>{"use strict";var Yc=$&&$.__createBinding||(Object.create?(function(e,t,a,n){n===void 0&&(n=a);var r=Object.getOwnPropertyDescriptor(t,a);(!r||("get"in r?!t.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,r)}):(function(e,t,a,n){n===void 0&&(n=a),e[n]=t[a]})),te=$&&$.__exportStar||function(e,t){for(var a in e)a!=="default"&&!Object.prototype.hasOwnProperty.call(t,a)&&Yc(t,e,a)};Object.defineProperty($,"__esModule",{value:!0});te(aa(),$);te(br(),$);te(_a(),$);te(ri(),$);te(ui(),$);te(yi(),$);te(gi(),$);te(mi(),$);te(Ri(),$);te(Pi(),$);te(Ci(),$);te(Fi(),$);te($i(),$);te(Yi(),$);te(Ji(),$);te(Zi(),$);te(xa(),$);te(Xi(),$)});var Me={};ea(Me,{default:()=>cs.default});var cs,Gr=Mn(()=>{me(Me,require("formdata-polyfill/esm.min.js"));cs=w(require("formdata-polyfill/esm.min.js"))});var De={};ea(De,{default:()=>bs.default});var bs,eo=Mn(()=>{me(De,require("fetch-blob/from.js"));bs=w(require("fetch-blob/from.js"))});var Is={};ea(Is,{toFormData:()=>Iy});function gy(e){let t=e.match(/\bfilename=("(.*?)"|([^()<>@,;:\\"/[\]?={}\s\t]+))($|;\s)/i);if(!t)return;let a=t[2]||t[3]||"",n=a.slice(a.lastIndexOf("\\")+1);return n=n.replace(/%22/g,'"'),n=n.replace(/&#(\d{4});/g,(r,o)=>String.fromCharCode(o)),n}async function Iy(e,t){if(!/multipart/i.test(t))throw new TypeError("Failed to fetch");let a=t.match(/boundary=(?:"([^"]+)"|([^;]+))/i);if(!a)throw new TypeError("no or bad content-type header, no multipart boundary");let n=new to(a[1]||a[2]),r,o,u,s,i,p,l=[],c=new Me.FormData,S=m=>{u+=I.decode(m,{stream:!0})},g=m=>{l.push(m)},y=()=>{let m=new De.File(l,p,{type:i});c.append(s,m)},M=()=>{c.append(s,u)},I=new TextDecoder("utf-8");I.decode(),n.onPartBegin=function(){n.onPartData=S,n.onPartEnd=M,r="",o="",u="",s="",i="",p=null,l.length=0},n.onHeaderField=function(m){r+=I.decode(m,{stream:!0})},n.onHeaderValue=function(m){o+=I.decode(m,{stream:!0})},n.onHeaderEnd=function(){if(o+=I.decode(),r=r.toLowerCase(),r==="content-disposition"){let m=o.match(/\bname=("([^"]*)"|([^()<>@,;:\\"/[\]?={}\s\t]+))/i);m&&(s=m[2]||m[3]||""),p=gy(o),p&&(n.onPartData=g,n.onPartEnd=y)}else r==="content-type"&&(i=o);o="",r=""};for await(let m of e)n.write(m);return n.end(),c}var tt,F,gs,Ot,Wr,Kr,cy,Ga,yy,dy,Sy,by,Gt,to,ms=Mn(()=>{eo();Gr();tt=0,F={START_BOUNDARY:tt++,HEADER_FIELD_START:tt++,HEADER_FIELD:tt++,HEADER_VALUE_START:tt++,HEADER_VALUE:tt++,HEADER_VALUE_ALMOST_DONE:tt++,HEADERS_ALMOST_DONE:tt++,PART_DATA_START:tt++,PART_DATA:tt++,END:tt++},gs=1,Ot={PART_BOUNDARY:gs,LAST_BOUNDARY:gs*=2},Wr=10,Kr=13,cy=32,Ga=45,yy=58,dy=97,Sy=122,by=e=>e|32,Gt=()=>{},to=class{constructor(t){this.index=0,this.flags=0,this.onHeaderEnd=Gt,this.onHeaderField=Gt,this.onHeadersEnd=Gt,this.onHeaderValue=Gt,this.onPartBegin=Gt,this.onPartData=Gt,this.onPartEnd=Gt,this.boundaryChars={},t=`\r
--`+t;let a=new Uint8Array(t.length);for(let n=0;n<t.length;n++)a[n]=t.charCodeAt(n),this.boundaryChars[a[n]]=!0;this.boundary=a,this.lookbehind=new Uint8Array(this.boundary.length+8),this.state=F.START_BOUNDARY}write(t){let a=0,n=t.length,r=this.index,{lookbehind:o,boundary:u,boundaryChars:s,index:i,state:p,flags:l}=this,c=this.boundary.length,S=c-1,g=t.length,y,M,I=A=>{this[A+"Mark"]=a},m=A=>{delete this[A+"Mark"]},R=(A,E,D,B)=>{(E===void 0||E!==D)&&this[A](B&&B.subarray(E,D))},f=(A,E)=>{let D=A+"Mark";D in this&&(E?(R(A,this[D],a,t),delete this[D]):(R(A,this[D],t.length,t),this[D]=0))};for(a=0;a<n;a++)switch(y=t[a],p){case F.START_BOUNDARY:if(i===u.length-2){if(y===Ga)l|=Ot.LAST_BOUNDARY;else if(y!==Kr)return;i++;break}else if(i-1===u.length-2){if(l&Ot.LAST_BOUNDARY&&y===Ga)p=F.END,l=0;else if(!(l&Ot.LAST_BOUNDARY)&&y===Wr)i=0,R("onPartBegin"),p=F.HEADER_FIELD_START;else return;break}y!==u[i+2]&&(i=-2),y===u[i+2]&&i++;break;case F.HEADER_FIELD_START:p=F.HEADER_FIELD,I("onHeaderField"),i=0;case F.HEADER_FIELD:if(y===Kr){m("onHeaderField"),p=F.HEADERS_ALMOST_DONE;break}if(i++,y===Ga)break;if(y===yy){if(i===1)return;f("onHeaderField",!0),p=F.HEADER_VALUE_START;break}if(M=by(y),M<dy||M>Sy)return;break;case F.HEADER_VALUE_START:if(y===cy)break;I("onHeaderValue"),p=F.HEADER_VALUE;case F.HEADER_VALUE:y===Kr&&(f("onHeaderValue",!0),R("onHeaderEnd"),p=F.HEADER_VALUE_ALMOST_DONE);break;case F.HEADER_VALUE_ALMOST_DONE:if(y!==Wr)return;p=F.HEADER_FIELD_START;break;case F.HEADERS_ALMOST_DONE:if(y!==Wr)return;R("onHeadersEnd"),p=F.PART_DATA_START;break;case F.PART_DATA_START:p=F.PART_DATA,I("onPartData");case F.PART_DATA:if(r=i,i===0){for(a+=S;a<g&&!(t[a]in s);)a+=c;a-=S,y=t[a]}if(i<u.length)u[i]===y?(i===0&&f("onPartData",!0),i++):i=0;else if(i===u.length)i++,y===Kr?l|=Ot.PART_BOUNDARY:y===Ga?l|=Ot.LAST_BOUNDARY:i=0;else if(i-1===u.length)if(l&Ot.PART_BOUNDARY){if(i=0,y===Wr){l&=~Ot.PART_BOUNDARY,R("onPartEnd"),R("onPartBegin"),p=F.HEADER_FIELD_START;break}}else l&Ot.LAST_BOUNDARY&&y===Ga?(R("onPartEnd"),p=F.END,l=0):i=0;if(i>0)o[i-1]=y;else if(r>0){let A=new Uint8Array(o.buffer,o.byteOffset,o.byteLength);R("onPartData",0,r,A),r=0,I("onPartData"),a--}break;case F.END:break;default:throw new Error(`Unexpected state entered: ${p}`)}f("onHeaderField"),f("onHeaderValue"),f("onPartData"),this.index=i,this.state=p,this.flags=l}end(){if(this.state===F.HEADER_FIELD_START&&this.index===0||this.state===F.PART_DATA&&this.index===this.boundary.length)this.onPartEnd();else if(this.state!==F.END)throw new Error("MultipartParser.end(): stream ended unexpectedly")}}});var AS={};ea(AS,{default:()=>fS});module.exports=dp(AS);var Da=require("@raycast/api"),mn=w(K()),ze=require("react");var js=require("@octokit/rest"),zs=require("@raycast/api"),Hs=w(K());var Fr=JSON;var es=e=>e.toUpperCase(),ts=e=>{let t={};return e.forEach((a,n)=>{t[n]=a}),t};var as=(e,t,a)=>e.document?e:{document:e,variables:t,requestHeaders:a,signal:void 0},rs=(e,t,a)=>e.query?e:{query:e,variables:t,requestHeaders:a,signal:void 0},ns=(e,t)=>e.documents?e:{documents:e,requestHeaders:t,signal:void 0};var kr=require("graphql"),os=e=>{let t,a=e.definitions.filter(n=>n.kind==="OperationDefinition");return a.length===1&&(t=a[0]?.name?.value),t},Ht=e=>{if(typeof e=="string"){let a;try{let n=(0,kr.parse)(e);a=os(n)}catch{}return{query:e,operationName:a}}let t=os(e);return{query:(0,kr.print)(e),operationName:t}};var $t=class e extends Error{constructor(t,a){let n=`${e.extractMessage(t)}: ${JSON.stringify({response:t,request:a})}`;super(n),Object.setPrototypeOf(this,e.prototype),this.response=t,this.request=a,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,e)}static extractMessage(t){return t.errors?.[0]?.message??`GraphQL Error (Code: ${t.status})`}};var Tt=w(qa(),1);var Jc="connection_init",Zc="connection_ack",ss="ping",us="pong",Xc="subscribe",ey="next",ty="error",ps="complete",wt=class e{get type(){return this._type}get id(){return this._id}get payload(){return this._payload}constructor(t,a,n){this._type=t,this._payload=a,this._id=n}get text(){let t={type:this.type};return this.id!=null&&this.id!=null&&(t.id=this.id),this.payload!=null&&this.payload!=null&&(t.payload=this.payload),JSON.stringify(t)}static parse(t,a){let{type:n,payload:r,id:o}=JSON.parse(t);return new e(n,a(r),o)}},jr=class{constructor(t,{onInit:a,onAcknowledged:n,onPing:r,onPong:o}){this.socketState={acknowledged:!1,lastRequestId:0,subscriptions:{}},this.socket=t,t.addEventListener("open",async u=>{this.socketState.acknowledged=!1,this.socketState.subscriptions={},t.send(ry(a?await a():null).text)}),t.addEventListener("close",u=>{this.socketState.acknowledged=!1,this.socketState.subscriptions={}}),t.addEventListener("error",u=>{console.error(u)}),t.addEventListener("message",u=>{try{let s=ay(u.data);switch(s.type){case Zc:{this.socketState.acknowledged?console.warn("Duplicate CONNECTION_ACK message ignored"):(this.socketState.acknowledged=!0,n&&n(s.payload));return}case ss:{r?r(s.payload).then(c=>t.send(is(c).text)):t.send(is(null).text);return}case us:{o&&o(s.payload);return}}if(!this.socketState.acknowledged||s.id===void 0||s.id===null||!this.socketState.subscriptions[s.id])return;let{query:i,variables:p,subscriber:l}=this.socketState.subscriptions[s.id];switch(s.type){case ey:{!s.payload.errors&&s.payload.data&&l.next&&l.next(s.payload.data),s.payload.errors&&l.error&&l.error(new $t({...s.payload,status:200},{query:i,variables:p}));return}case ty:{l.error&&l.error(new $t({errors:s.payload,status:200},{query:i,variables:p}));return}case ps:{l.complete&&l.complete(),delete this.socketState.subscriptions[s.id];return}}}catch(s){console.error(s),t.close(1006)}t.close(4400,"Unknown graphql-ws message.")})}makeSubscribe(t,a,n,r){let o=(this.socketState.lastRequestId++).toString();return this.socketState.subscriptions[o]={query:t,variables:r,subscriber:n},this.socket.send(oy(o,{query:t,operationName:a,variables:r}).text),()=>{this.socket.send(iy(o).text),delete this.socketState.subscriptions[o]}}rawRequest(t,a){return new Promise((n,r)=>{let o;this.rawSubscribe(t,{next:(u,s)=>o={data:u,extensions:s},error:r,complete:()=>n(o)},a)})}request(t,a){return new Promise((n,r)=>{let o;this.subscribe(t,{next:u=>o=u,error:r,complete:()=>n(o)},a)})}subscribe(t,a,n){let{query:r,operationName:o}=Ht(t);return this.makeSubscribe(r,o,a,n)}rawSubscribe(t,a,n){return this.makeSubscribe(t,void 0,a,n)}ping(t){this.socket.send(ny(t).text)}close(){this.socket.close(1e3)}};jr.PROTOCOL="graphql-transport-ws";function ay(e,t=a=>a){return wt.parse(e,t)}function ry(e){return new wt(Jc,e)}function ny(e){return new wt(ss,e,void 0)}function is(e){return new wt(us,e,void 0)}function oy(e,t){return new wt(Xc,t,e)}function iy(e){return new wt(ps,void 0,e)}var ma=e=>{let t={};return e&&(typeof Headers<"u"&&e instanceof Headers||Tt&&Tt.Headers&&e instanceof Tt.Headers?t=ts(e):Array.isArray(e)?e.forEach(([a,n])=>{a&&n!==void 0&&(t[a]=n)}):t=e),t},ls=e=>e.replace(/([\s,]|#[^\n\r]+)+/g," ").trim(),sy=e=>{if(!Array.isArray(e.query)){let n=e,r=[`query=${encodeURIComponent(ls(n.query))}`];return e.variables&&r.push(`variables=${encodeURIComponent(n.jsonSerializer.stringify(n.variables))}`),n.operationName&&r.push(`operationName=${encodeURIComponent(n.operationName)}`),r.join("&")}if(typeof e.variables<"u"&&!Array.isArray(e.variables))throw new Error("Cannot create query with given variable type, array expected");let t=e,a=e.query.reduce((n,r,o)=>(n.push({query:ls(r),variables:t.variables?t.jsonSerializer.stringify(t.variables[o]):void 0}),n),[]);return`query=${encodeURIComponent(t.jsonSerializer.stringify(a))}`},uy=e=>async t=>{let{url:a,query:n,variables:r,operationName:o,fetch:u,fetchOptions:s,middleware:i}=t,p={...t.headers},l="",c;e==="POST"?(c=py(n,r,o,s.jsonSerializer),typeof c=="string"&&(p["Content-Type"]="application/json")):l=sy({query:n,variables:r,operationName:o,jsonSerializer:s.jsonSerializer??Fr});let S={method:e,headers:p,body:c,...s},g=a,y=S;if(i){let M=await Promise.resolve(i({...S,url:a,operationName:o,variables:r})),{url:I,...m}=M;g=I,y=m}return l&&(g=`${g}?${l}`),await u(g,y)},zr=class{constructor(t,a={}){this.url=t,this.requestConfig=a,this.rawRequest=async(...n)=>{let[r,o,u]=n,s=rs(r,o,u),{headers:i,fetch:p=Tt.default,method:l="POST",requestMiddleware:c,responseMiddleware:S,...g}=this.requestConfig,{url:y}=this;s.signal!==void 0&&(g.signal=s.signal);let{operationName:M}=Ht(s.query);return Jn({url:y,query:s.query,variables:s.variables,headers:{...ma(Zn(i)),...ma(s.requestHeaders)},operationName:M,fetch:p,method:l,fetchOptions:g,middleware:c}).then(I=>(S&&S(I),I)).catch(I=>{throw S&&S(I),I})}}async request(t,...a){let[n,r]=a,o=as(t,n,r),{headers:u,fetch:s=Tt.default,method:i="POST",requestMiddleware:p,responseMiddleware:l,...c}=this.requestConfig,{url:S}=this;o.signal!==void 0&&(c.signal=o.signal);let{query:g,operationName:y}=Ht(o.document);return Jn({url:S,query:g,variables:o.variables,headers:{...ma(Zn(u)),...ma(o.requestHeaders)},operationName:y,fetch:s,method:i,fetchOptions:c,middleware:p}).then(M=>(l&&l(M),M.data)).catch(M=>{throw l&&l(M),M})}batchRequests(t,a){let n=ns(t,a),{headers:r,...o}=this.requestConfig;n.signal!==void 0&&(o.signal=n.signal);let u=n.documents.map(({document:i})=>Ht(i).query),s=n.documents.map(({variables:i})=>i);return Jn({url:this.url,query:u,variables:s,headers:{...ma(Zn(r)),...ma(n.requestHeaders)},operationName:void 0,fetch:this.requestConfig.fetch??Tt.default,method:this.requestConfig.method||"POST",fetchOptions:o,middleware:this.requestConfig.requestMiddleware}).then(i=>(this.requestConfig.responseMiddleware&&this.requestConfig.responseMiddleware(i),i.data)).catch(i=>{throw this.requestConfig.responseMiddleware&&this.requestConfig.responseMiddleware(i),i})}setHeaders(t){return this.requestConfig.headers=t,this}setHeader(t,a){let{headers:n}=this.requestConfig;return n?n[t]=a:this.requestConfig.headers={[t]:a},this}setEndpoint(t){return this.url=t,this}},Jn=async e=>{let{query:t,variables:a,fetchOptions:n}=e,r=uy(es(e.method??"post")),o=Array.isArray(e.query),u=await r(e),s=await ly(u,n.jsonSerializer??Fr),i=Array.isArray(s)?!s.some(({data:l})=>!l):!!s.data,p=Array.isArray(s)||!s.errors||Array.isArray(s.errors)&&!s.errors.length||n.errorPolicy==="all"||n.errorPolicy==="ignore";if(u.ok&&p&&i){let{errors:l,...c}=(Array.isArray(s),s),S=n.errorPolicy==="ignore"?c:s;return{...o?{data:S}:S,headers:u.headers,status:u.status}}else{let l=typeof s=="string"?{error:s}:s;throw new $t({...l,status:u.status,headers:u.headers},{query:t,variables:a})}};var py=(e,t,a,n)=>{let r=n??Fr;if(!Array.isArray(e))return r.stringify({query:e,variables:t,operationName:a});if(typeof t<"u"&&!Array.isArray(t))throw new Error("Cannot create request body with given variable type, array expected");let o=e.reduce((u,s,i)=>(u.push({query:s,variables:t?t[i]:void 0}),u),[]);return r.stringify(o)},ly=async(e,t)=>{let a;return e.headers.forEach((n,r)=>{r.toLowerCase()==="content-type"&&(a=n)}),a&&(a.toLowerCase().startsWith("application/json")||a.toLowerCase().startsWith("application/graphql+json")||a.toLowerCase().startsWith("application/graphql-response+json"))?t.parse(await e.text()):e.text()},Zn=e=>typeof e=="function"?e():e;var Ts=w(require("node:http"),1),Os=w(require("node:https"),1),Wt=w(require("node:zlib"),1),Ue=w(require("node:stream"),1),Ka=require("node:buffer");var za={};ea(za,{default:()=>Hr.default});me(za,require("data-uri-to-buffer"));var Hr=w(require("data-uri-to-buffer"));var qe=w(require("node:stream"),1),mt=require("node:util"),xe=require("node:buffer");var Ha={};ea(Ha,{default:()=>$r.default});me(Ha,require("fetch-blob"));var $r=w(require("fetch-blob"));Gr();var It=class extends Error{constructor(t,a){super(t),Error.captureStackTrace(this,this.constructor),this.type=a}get name(){return this.constructor.name}get[Symbol.toStringTag](){return this.constructor.name}};var Re=class extends It{constructor(t,a,n){super(t,a),n&&(this.code=this.errno=n.code,this.erroredSysCall=n.syscall)}};var Qr=Symbol.toStringTag,Xn=e=>typeof e=="object"&&typeof e.append=="function"&&typeof e.delete=="function"&&typeof e.get=="function"&&typeof e.getAll=="function"&&typeof e.has=="function"&&typeof e.set=="function"&&typeof e.sort=="function"&&e[Qr]==="URLSearchParams",$a=e=>e&&typeof e=="object"&&typeof e.arrayBuffer=="function"&&typeof e.type=="string"&&typeof e.stream=="function"&&typeof e.constructor=="function"&&/^(Blob|File)$/.test(e[Qr]),ys=e=>typeof e=="object"&&(e[Qr]==="AbortSignal"||e[Qr]==="EventTarget"),ds=(e,t)=>{let a=new URL(t).hostname,n=new URL(e).hostname;return a===n||a.endsWith(`.${n}`)},Ss=(e,t)=>{let a=new URL(t).protocol,n=new URL(e).protocol;return a===n};var my=(0,mt.promisify)(qe.default.pipeline),fe=Symbol("Body internals"),at=class{constructor(t,{size:a=0}={}){let n=null;t===null?t=null:Xn(t)?t=xe.Buffer.from(t.toString()):$a(t)||xe.Buffer.isBuffer(t)||(mt.types.isAnyArrayBuffer(t)?t=xe.Buffer.from(t):ArrayBuffer.isView(t)?t=xe.Buffer.from(t.buffer,t.byteOffset,t.byteLength):t instanceof qe.default||(t instanceof Me.FormData?(t=(0,Me.formDataToBlob)(t),n=t.type.split("=")[1]):t=xe.Buffer.from(String(t))));let r=t;xe.Buffer.isBuffer(t)?r=qe.default.Readable.from(t):$a(t)&&(r=qe.default.Readable.from(t.stream())),this[fe]={body:t,stream:r,boundary:n,disturbed:!1,error:null},this.size=a,t instanceof qe.default&&t.on("error",o=>{let u=o instanceof It?o:new Re(`Invalid response body while trying to fetch ${this.url}: ${o.message}`,"system",o);this[fe].error=u})}get body(){return this[fe].stream}get bodyUsed(){return this[fe].disturbed}async arrayBuffer(){let{buffer:t,byteOffset:a,byteLength:n}=await ao(this);return t.slice(a,a+n)}async formData(){let t=this.headers.get("content-type");if(t.startsWith("application/x-www-form-urlencoded")){let n=new Me.FormData,r=new URLSearchParams(await this.text());for(let[o,u]of r)n.append(o,u);return n}let{toFormData:a}=await Promise.resolve().then(()=>(ms(),Is));return a(this.body,t)}async blob(){let t=this.headers&&this.headers.get("content-type")||this[fe].body&&this[fe].body.type||"",a=await this.arrayBuffer();return new $r.default([a],{type:t})}async json(){let t=await this.text();return JSON.parse(t)}async text(){let t=await ao(this);return new TextDecoder().decode(t)}buffer(){return ao(this)}};at.prototype.buffer=(0,mt.deprecate)(at.prototype.buffer,"Please use 'response.arrayBuffer()' instead of 'response.buffer()'","node-fetch#buffer");Object.defineProperties(at.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0},data:{get:(0,mt.deprecate)(()=>{},"data doesn't exist, use json(), text(), arrayBuffer(), or body instead","https://github.com/node-fetch/node-fetch/issues/1000 (response)")}});async function ao(e){if(e[fe].disturbed)throw new TypeError(`body used already for: ${e.url}`);if(e[fe].disturbed=!0,e[fe].error)throw e[fe].error;let{body:t}=e;if(t===null)return xe.Buffer.alloc(0);if(!(t instanceof qe.default))return xe.Buffer.alloc(0);let a=[],n=0;try{for await(let r of t){if(e.size>0&&n+r.length>e.size){let o=new Re(`content size at ${e.url} over limit: ${e.size}`,"max-size");throw t.destroy(o),o}n+=r.length,a.push(r)}}catch(r){throw r instanceof It?r:new Re(`Invalid response body while trying to fetch ${e.url}: ${r.message}`,"system",r)}if(t.readableEnded===!0||t._readableState.ended===!0)try{return a.every(r=>typeof r=="string")?xe.Buffer.from(a.join("")):xe.Buffer.concat(a,n)}catch(r){throw new Re(`Could not create Buffer from response body for ${e.url}: ${r.message}`,"system",r)}else throw new Re(`Premature close of server response while trying to fetch ${e.url}`)}var Ma=(e,t)=>{let a,n,{body:r}=e[fe];if(e.bodyUsed)throw new Error("cannot clone body after it is used");return r instanceof qe.default&&typeof r.getBoundary!="function"&&(a=new qe.PassThrough({highWaterMark:t}),n=new qe.PassThrough({highWaterMark:t}),r.pipe(a),r.pipe(n),e[fe].stream=a,r=n),r},My=(0,mt.deprecate)(e=>e.getBoundary(),"form-data doesn't follow the spec and requires special treatment. Use alternative package","https://github.com/node-fetch/node-fetch/issues/1167"),Yr=(e,t)=>e===null?null:typeof e=="string"?"text/plain;charset=UTF-8":Xn(e)?"application/x-www-form-urlencoded;charset=UTF-8":$a(e)?e.type||null:xe.Buffer.isBuffer(e)||mt.types.isAnyArrayBuffer(e)||ArrayBuffer.isView(e)?null:e instanceof Me.FormData?`multipart/form-data; boundary=${t[fe].boundary}`:e&&typeof e.getBoundary=="function"?`multipart/form-data;boundary=${My(e)}`:e instanceof qe.default?null:"text/plain;charset=UTF-8",Ms=e=>{let{body:t}=e[fe];return t===null?0:$a(t)?t.size:xe.Buffer.isBuffer(t)?t.length:t&&typeof t.getLengthSync=="function"&&t.hasKnownLength&&t.hasKnownLength()?t.getLengthSync():null},Rs=async(e,{body:t})=>{t===null?e.end():await my(t,e)};var ro=require("node:util"),Qa=w(require("node:http"),1),Jr=typeof Qa.default.validateHeaderName=="function"?Qa.default.validateHeaderName:e=>{if(!/^[\^`\-\w!#$%&'*+.|~]+$/.test(e)){let t=new TypeError(`Header name must be a valid HTTP token [${e}]`);throw Object.defineProperty(t,"code",{value:"ERR_INVALID_HTTP_TOKEN"}),t}},no=typeof Qa.default.validateHeaderValue=="function"?Qa.default.validateHeaderValue:(e,t)=>{if(/[^\t\u0020-\u007E\u0080-\u00FF]/.test(t)){let a=new TypeError(`Invalid character in header content ["${e}"]`);throw Object.defineProperty(a,"code",{value:"ERR_INVALID_CHAR"}),a}},ve=class e extends URLSearchParams{constructor(t){let a=[];if(t instanceof e){let n=t.raw();for(let[r,o]of Object.entries(n))a.push(...o.map(u=>[r,u]))}else if(t!=null)if(typeof t=="object"&&!ro.types.isBoxedPrimitive(t)){let n=t[Symbol.iterator];if(n==null)a.push(...Object.entries(t));else{if(typeof n!="function")throw new TypeError("Header pairs must be iterable");a=[...t].map(r=>{if(typeof r!="object"||ro.types.isBoxedPrimitive(r))throw new TypeError("Each header pair must be an iterable object");return[...r]}).map(r=>{if(r.length!==2)throw new TypeError("Each header pair must be a name/value tuple");return[...r]})}}else throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");return a=a.length>0?a.map(([n,r])=>(Jr(n),no(n,String(r)),[String(n).toLowerCase(),String(r)])):void 0,super(a),new Proxy(this,{get(n,r,o){switch(r){case"append":case"set":return(u,s)=>(Jr(u),no(u,String(s)),URLSearchParams.prototype[r].call(n,String(u).toLowerCase(),String(s)));case"delete":case"has":case"getAll":return u=>(Jr(u),URLSearchParams.prototype[r].call(n,String(u).toLowerCase()));case"keys":return()=>(n.sort(),new Set(URLSearchParams.prototype.keys.call(n)).keys());default:return Reflect.get(n,r,o)}}})}get[Symbol.toStringTag](){return this.constructor.name}toString(){return Object.prototype.toString.call(this)}get(t){let a=this.getAll(t);if(a.length===0)return null;let n=a.join(", ");return/^content-encoding$/i.test(t)&&(n=n.toLowerCase()),n}forEach(t,a=void 0){for(let n of this.keys())Reflect.apply(t,a,[this.get(n),n,this])}*values(){for(let t of this.keys())yield this.get(t)}*entries(){for(let t of this.keys())yield[t,this.get(t)]}[Symbol.iterator](){return this.entries()}raw(){return[...this.keys()].reduce((t,a)=>(t[a]=this.getAll(a),t),{})}[Symbol.for("nodejs.util.inspect.custom")](){return[...this.keys()].reduce((t,a)=>{let n=this.getAll(a);return a==="host"?t[a]=n[0]:t[a]=n.length>1?n:n[0],t},{})}};Object.defineProperties(ve.prototype,["get","entries","forEach","values"].reduce((e,t)=>(e[t]={enumerable:!0},e),{}));function fs(e=[]){return new ve(e.reduce((t,a,n,r)=>(n%2===0&&t.push(r.slice(n,n+2)),t),[]).filter(([t,a])=>{try{return Jr(t),no(t,String(a)),!0}catch{return!1}}))}var Ry=new Set([301,302,303,307,308]),Zr=e=>Ry.has(e);var Qe=Symbol("Response internals"),Ne=class e extends at{constructor(t=null,a={}){super(t,a);let n=a.status!=null?a.status:200,r=new ve(a.headers);if(t!==null&&!r.has("Content-Type")){let o=Yr(t,this);o&&r.append("Content-Type",o)}this[Qe]={type:"default",url:a.url,status:n,statusText:a.statusText||"",headers:r,counter:a.counter,highWaterMark:a.highWaterMark}}get type(){return this[Qe].type}get url(){return this[Qe].url||""}get status(){return this[Qe].status}get ok(){return this[Qe].status>=200&&this[Qe].status<300}get redirected(){return this[Qe].counter>0}get statusText(){return this[Qe].statusText}get headers(){return this[Qe].headers}get highWaterMark(){return this[Qe].highWaterMark}clone(){return new e(Ma(this,this.highWaterMark),{type:this.type,url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected,size:this.size,highWaterMark:this.highWaterMark})}static redirect(t,a=302){if(!Zr(a))throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');return new e(null,{headers:{location:new URL(t).toString()},status:a})}static error(){let t=new e(null,{status:0,statusText:""});return t[Qe].type="error",t}static json(t=void 0,a={}){let n=JSON.stringify(t);if(n===void 0)throw new TypeError("data is not JSON serializable");let r=new ve(a&&a.headers);return r.has("content-type")||r.set("content-type","application/json"),new e(n,{...a,headers:r})}get[Symbol.toStringTag](){return"Response"}};Object.defineProperties(Ne.prototype,{type:{enumerable:!0},url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}});var Us=require("node:url"),_s=require("node:util");var As=e=>{if(e.search)return e.search;let t=e.href.length-1,a=e.hash||(e.href[t]==="#"?"#":"");return e.href[t-a.length]==="?"?"?":""};var Es=require("node:net");function Ps(e,t=!1){return e==null||(e=new URL(e),/^(about|blob|data):$/.test(e.protocol))?"no-referrer":(e.username="",e.password="",e.hash="",t&&(e.pathname="",e.search=""),e)}var hs=new Set(["","no-referrer","no-referrer-when-downgrade","same-origin","origin","strict-origin","origin-when-cross-origin","strict-origin-when-cross-origin","unsafe-url"]),Cs="strict-origin-when-cross-origin";function Ds(e){if(!hs.has(e))throw new TypeError(`Invalid referrerPolicy: ${e}`);return e}function fy(e){if(/^(http|ws)s:$/.test(e.protocol))return!0;let t=e.host.replace(/(^\[)|(]$)/g,""),a=(0,Es.isIP)(t);return a===4&&/^127\./.test(t)||a===6&&/^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(t)?!0:e.host==="localhost"||e.host.endsWith(".localhost")?!1:e.protocol==="file:"}function Ra(e){return/^about:(blank|srcdoc)$/.test(e)||e.protocol==="data:"||/^(blob|filesystem):$/.test(e.protocol)?!0:fy(e)}function xs(e,{referrerURLCallback:t,referrerOriginCallback:a}={}){if(e.referrer==="no-referrer"||e.referrerPolicy==="")return null;let n=e.referrerPolicy;if(e.referrer==="about:client")return"no-referrer";let r=e.referrer,o=Ps(r),u=Ps(r,!0);o.toString().length>4096&&(o=u),t&&(o=t(o)),a&&(u=a(u));let s=new URL(e.url);switch(n){case"no-referrer":return"no-referrer";case"origin":return u;case"unsafe-url":return o;case"strict-origin":return Ra(o)&&!Ra(s)?"no-referrer":u.toString();case"strict-origin-when-cross-origin":return o.origin===s.origin?o:Ra(o)&&!Ra(s)?"no-referrer":u;case"same-origin":return o.origin===s.origin?o:"no-referrer";case"origin-when-cross-origin":return o.origin===s.origin?o:u;case"no-referrer-when-downgrade":return Ra(o)&&!Ra(s)?"no-referrer":o;default:throw new TypeError(`Invalid referrerPolicy: ${n}`)}}function vs(e){let t=(e.get("referrer-policy")||"").split(/[,\s]+/),a="";for(let n of t)n&&hs.has(n)&&(a=n);return a}var ae=Symbol("Request internals"),Wa=e=>typeof e=="object"&&typeof e[ae]=="object",Ay=(0,_s.deprecate)(()=>{},".data is not a valid RequestInit property, use .body instead","https://github.com/node-fetch/node-fetch/issues/1000 (request)"),Qt=class e extends at{constructor(t,a={}){let n;if(Wa(t)?n=new URL(t.url):(n=new URL(t),t={}),n.username!==""||n.password!=="")throw new TypeError(`${n} is an url with embedded credentials.`);let r=a.method||t.method||"GET";if(/^(delete|get|head|options|post|put)$/i.test(r)&&(r=r.toUpperCase()),!Wa(a)&&"data"in a&&Ay(),(a.body!=null||Wa(t)&&t.body!==null)&&(r==="GET"||r==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");let o=a.body?a.body:Wa(t)&&t.body!==null?Ma(t):null;super(o,{size:a.size||t.size||0});let u=new ve(a.headers||t.headers||{});if(o!==null&&!u.has("Content-Type")){let p=Yr(o,this);p&&u.set("Content-Type",p)}let s=Wa(t)?t.signal:null;if("signal"in a&&(s=a.signal),s!=null&&!ys(s))throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");let i=a.referrer==null?t.referrer:a.referrer;if(i==="")i="no-referrer";else if(i){let p=new URL(i);i=/^about:(\/\/)?client$/.test(p)?"client":p}else i=void 0;this[ae]={method:r,redirect:a.redirect||t.redirect||"follow",headers:u,parsedURL:n,signal:s,referrer:i},this.follow=a.follow===void 0?t.follow===void 0?20:t.follow:a.follow,this.compress=a.compress===void 0?t.compress===void 0?!0:t.compress:a.compress,this.counter=a.counter||t.counter||0,this.agent=a.agent||t.agent,this.highWaterMark=a.highWaterMark||t.highWaterMark||16384,this.insecureHTTPParser=a.insecureHTTPParser||t.insecureHTTPParser||!1,this.referrerPolicy=a.referrerPolicy||t.referrerPolicy||""}get method(){return this[ae].method}get url(){return(0,Us.format)(this[ae].parsedURL)}get headers(){return this[ae].headers}get redirect(){return this[ae].redirect}get signal(){return this[ae].signal}get referrer(){if(this[ae].referrer==="no-referrer")return"";if(this[ae].referrer==="client")return"about:client";if(this[ae].referrer)return this[ae].referrer.toString()}get referrerPolicy(){return this[ae].referrerPolicy}set referrerPolicy(t){this[ae].referrerPolicy=Ds(t)}clone(){return new e(this)}get[Symbol.toStringTag](){return"Request"}};Object.defineProperties(Qt.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0},referrer:{enumerable:!0},referrerPolicy:{enumerable:!0}});var ws=e=>{let{parsedURL:t}=e[ae],a=new ve(e[ae].headers);a.has("Accept")||a.set("Accept","*/*");let n=null;if(e.body===null&&/^(post|put)$/i.test(e.method)&&(n="0"),e.body!==null){let s=Ms(e);typeof s=="number"&&!Number.isNaN(s)&&(n=String(s))}n&&a.set("Content-Length",n),e.referrerPolicy===""&&(e.referrerPolicy=Cs),e.referrer&&e.referrer!=="no-referrer"?e[ae].referrer=xs(e):e[ae].referrer="no-referrer",e[ae].referrer instanceof URL&&a.set("Referer",e.referrer),a.has("User-Agent")||a.set("User-Agent","node-fetch"),e.compress&&!a.has("Accept-Encoding")&&a.set("Accept-Encoding","gzip, deflate, br");let{agent:r}=e;typeof r=="function"&&(r=r(t));let o=As(t),u={path:t.pathname+o,method:e.method,headers:a[Symbol.for("nodejs.util.inspect.custom")](),insecureHTTPParser:e.insecureHTTPParser,agent:r};return{parsedURL:t,options:u}};var Xr=class extends It{constructor(t,a="aborted"){super(t,a)}};Gr();eo();var Py=new Set(["data:","http:","https:"]);async function en(e,t){return new Promise((a,n)=>{let r=new Qt(e,t),{parsedURL:o,options:u}=ws(r);if(!Py.has(o.protocol))throw new TypeError(`node-fetch cannot load ${e}. URL scheme "${o.protocol.replace(/:$/,"")}" is not supported.`);if(o.protocol==="data:"){let y=(0,Hr.default)(r.url),M=new Ne(y,{headers:{"Content-Type":y.typeFull}});a(M);return}let s=(o.protocol==="https:"?Os.default:Ts.default).request,{signal:i}=r,p=null,l=()=>{let y=new Xr("The operation was aborted.");n(y),r.body&&r.body instanceof Ue.default.Readable&&r.body.destroy(y),!(!p||!p.body)&&p.body.emit("error",y)};if(i&&i.aborted){l();return}let c=()=>{l(),g()},S=s(o.toString(),u);i&&i.addEventListener("abort",c);let g=()=>{S.abort(),i&&i.removeEventListener("abort",c)};S.on("error",y=>{n(new Re(`request to ${r.url} failed, reason: ${y.message}`,"system",y)),g()}),Ey(S,y=>{p&&p.body&&p.body.destroy(y)}),process.version<"v14"&&S.on("socket",y=>{let M;y.prependListener("end",()=>{M=y._eventsCount}),y.prependListener("close",I=>{if(p&&M<y._eventsCount&&!I){let m=new Error("Premature close");m.code="ERR_STREAM_PREMATURE_CLOSE",p.body.emit("error",m)}})}),S.on("response",y=>{S.setTimeout(0);let M=fs(y.rawHeaders);if(Zr(y.statusCode)){let A=M.get("Location"),E=null;try{E=A===null?null:new URL(A,r.url)}catch{if(r.redirect!=="manual"){n(new Re(`uri requested responds with an invalid redirect URL: ${A}`,"invalid-redirect")),g();return}}switch(r.redirect){case"error":n(new Re(`uri requested responds with a redirect, redirect mode is set to error: ${r.url}`,"no-redirect")),g();return;case"manual":break;case"follow":{if(E===null)break;if(r.counter>=r.follow){n(new Re(`maximum redirect reached at: ${r.url}`,"max-redirect")),g();return}let D={headers:new ve(r.headers),follow:r.follow,counter:r.counter+1,agent:r.agent,compress:r.compress,method:r.method,body:Ma(r),signal:r.signal,size:r.size,referrer:r.referrer,referrerPolicy:r.referrerPolicy};if(!ds(r.url,E)||!Ss(r.url,E))for(let H of["authorization","www-authenticate","cookie","cookie2"])D.headers.delete(H);if(y.statusCode!==303&&r.body&&t.body instanceof Ue.default.Readable){n(new Re("Cannot follow redirect with body being a readable stream","unsupported-redirect")),g();return}(y.statusCode===303||(y.statusCode===301||y.statusCode===302)&&r.method==="POST")&&(D.method="GET",D.body=void 0,D.headers.delete("content-length"));let B=vs(M);B&&(D.referrerPolicy=B),a(en(new Qt(E,D))),g();return}default:return n(new TypeError(`Redirect option '${r.redirect}' is not a valid value of RequestRedirect`))}}i&&y.once("end",()=>{i.removeEventListener("abort",c)});let I=(0,Ue.pipeline)(y,new Ue.PassThrough,A=>{A&&n(A)});process.version<"v12.10"&&y.on("aborted",c);let m={url:r.url,status:y.statusCode,statusText:y.statusMessage,headers:M,size:r.size,counter:r.counter,highWaterMark:r.highWaterMark},R=M.get("Content-Encoding");if(!r.compress||r.method==="HEAD"||R===null||y.statusCode===204||y.statusCode===304){p=new Ne(I,m),a(p);return}let f={flush:Wt.default.Z_SYNC_FLUSH,finishFlush:Wt.default.Z_SYNC_FLUSH};if(R==="gzip"||R==="x-gzip"){I=(0,Ue.pipeline)(I,Wt.default.createGunzip(f),A=>{A&&n(A)}),p=new Ne(I,m),a(p);return}if(R==="deflate"||R==="x-deflate"){let A=(0,Ue.pipeline)(y,new Ue.PassThrough,E=>{E&&n(E)});A.once("data",E=>{(E[0]&15)===8?I=(0,Ue.pipeline)(I,Wt.default.createInflate(),D=>{D&&n(D)}):I=(0,Ue.pipeline)(I,Wt.default.createInflateRaw(),D=>{D&&n(D)}),p=new Ne(I,m),a(p)}),A.once("end",()=>{p||(p=new Ne(I,m),a(p))});return}if(R==="br"){I=(0,Ue.pipeline)(I,Wt.default.createBrotliDecompress(),A=>{A&&n(A)}),p=new Ne(I,m),a(p);return}p=new Ne(I,m),a(p)}),Rs(S,r).catch(n)})}function Ey(e,t){let a=Ka.Buffer.from(`0\r
\r
`),n=!1,r=!1,o;e.on("response",u=>{let{headers:s}=u;n=s["transfer-encoding"]==="chunked"&&!s["content-length"]}),e.on("socket",u=>{let s=()=>{if(n&&!r){let p=new Error("Premature close");p.code="ERR_STREAM_PREMATURE_CLOSE",t(p)}},i=p=>{r=Ka.Buffer.compare(p.slice(-5),a)===0,!r&&o&&(r=Ka.Buffer.compare(o.slice(-3),a.slice(0,3))===0&&Ka.Buffer.compare(p.slice(-2),a.slice(3))===0),o=p};u.prependListener("close",s),u.on("data",i),e.on("close",()=>{u.removeListener("close",s),u.removeListener("data",i)})})}var h=w(require("graphql-tag")),Ya=h.default`
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
`,hy=h.default`
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
  ${Ya}
`,rt=h.default`
  fragment UserFields on User {
    id
    avatarUrl
    name
    login
    isViewer
  }
`,Ja=h.default`
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
  ${rt}
`,tn=h.default`
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
  ${Ja}
  ${Ya}
  ${rt}
`,Cy=h.default`
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
  ${Ja}
  ${Ya}
  ${rt}
`,Ls=h.default`
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
`,Bs=h.default`
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
`,qs=h.default`
  fragment RepositoryMentionFields on Repository {
    nameWithOwner
    description
    isPrivate
    isArchived
    owner {
      avatarUrl(size: 64)
    }
  }
`,Dy=h.default`
  fragment ProjectViewerFields on ProjectV2View {
    id
    name
    number
  }
`,Ns=h.default`
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
  ${Ja}
  ${Dy}
`,Vs=h.default`
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
  ${Ya}
  ${Ja}
  ${rt}
`,xy=h.default`
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
  ${Ya}
  ${Ja}
  ${rt}
`,vy=h.default`
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
`,Fs=h.default`
  fragment CommitFields on Commit {
    authoredDate
    oid
    message
  }
`,oo=h.default`
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
`,Uy=h.default`
  fragment ReleaseFields on Release {
    id
    description
    name
    publishedAt
    createdAt
    tagName
    url
  }
`,_y=h.default`
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
`,wy=h.default`
  mutation createRef($input: CreateRefInput!) {
    createRef(input: $input) {
      clientMutationId
      ref {
        id
        name
      }
    }
  }
`,Ty=h.default`
  mutation deleteLinkedBranch($input: DeleteLinkedBranchInput!) {
    deleteLinkedBranch(input: $input) {
      clientMutationId
    }
  }
`,Oy=h.default`
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
  ${hy}
`,Ly=h.default`
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
`,By=h.default`
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
  ${rt}
`,qy=h.default`
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
`,Ny=h.default`
  query issueDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...IssueDetailFields
    }
  }
  ${Cy}
`,Vy=h.default`
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
  ${tn}
`,Fy=h.default`
  query issueByNumber($owner: String!, $name: String!, $issueNumber: Int!) {
    repository(owner: $owner, name: $name) {
      issue(number: $issueNumber) {
        ...IssueFields
      }
    }
  }
  ${tn}
`,ky=h.default`
  mutation closeIssue($nodeId: ID!, $stateReason: IssueClosedStateReason!) {
    closeIssue(input: { issueId: $nodeId, stateReason: $stateReason }) {
      issue {
        id
      }
    }
  }
`,jy=h.default`
  mutation reopenIssue($nodeId: ID!) {
    reopenIssue(input: { issueId: $nodeId }) {
      issue {
        id
      }
    }
  }
`,zy=h.default`
  mutation changeIssueAssignees($issueId: ID!, $assigneeIds: [ID!]) {
    updateIssue(input: { id: $issueId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,Hy=h.default`
  mutation changeIssueMilestone($issueId: ID!, $milestoneId: ID) {
    updateIssue(input: { id: $issueId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,$y=h.default`
  mutation addIssueToProject($issueId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $issueId }) {
      clientMutationId
    }
  }
`,Gy=h.default`
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
  ${tn}
`,Qy=h.default`
  query searchIssueMentions($query: String!, $numberOfItems: Int!) {
    search(query: $query, type: ISSUE, first: $numberOfItems) {
      nodes {
        ... on Issue {
          ...IssueMentionFields
        }
      }
    }
  }
  ${Ls}
`,Wy=h.default`
  query searchPullRequestMentions($query: String!, $numberOfItems: Int!) {
    search(query: $query, type: ISSUE, first: $numberOfItems) {
      nodes {
        ... on PullRequest {
          ...PullRequestMentionFields
        }
      }
    }
  }
  ${Bs}
`,Ky=h.default`
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
  ${Ls}
  ${Bs}
`,Yy=h.default`
  query searchRepositoryMentions($query: String!, $numberOfItems: Int!) {
    search(query: $query, type: REPOSITORY, first: $numberOfItems) {
      nodes {
        ... on Repository {
          ...RepositoryMentionFields
        }
      }
    }
  }
  ${qs}
`,Jy=h.default`
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
  ${qs}
`,Zy=h.default`
  mutation changeProjectStatus($projectId: ID!, $closed: Boolean!) {
    updateProjectV2(input: { projectId: $projectId, closed: $closed }) {
      clientMutationId
    }
  }
`,Xy=h.default`
  query projectDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...ProjectFields
    }
  }
  ${Ns}
`,ed=h.default`
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
  ${Vs}
`,td=h.default`
  query pullRequestDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...PullRequestDetailsFields
    }
  }
  ${xy}
`,ad=h.default`
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
  ${rt}
`,rd=h.default`
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
`,nd=h.default`
  query pullRequestCommits($nodeId: ID!, $numberOfItems: Int!, $before: String) {
    node(id: $nodeId) {
      ...PullRequestCommitFields
    }
  }
  ${vy}
`,od=h.default`
  mutation closePullRequest($nodeId: ID!) {
    closePullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,id=h.default`
  mutation reopenPullRequest($nodeId: ID!) {
    reopenPullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,sd=h.default`
  mutation markPullRequestReadyForReview($nodeId: ID!) {
    markPullRequestReadyForReview(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,ud=h.default`
  mutation addPullRequestReview($nodeId: ID!, $event: PullRequestReviewEvent, $body: String) {
    addPullRequestReview(input: { pullRequestId: $nodeId, event: $event, body: $body }) {
      pullRequestReview {
        id
      }
    }
  }
`,pd=h.default`
  mutation changePullRequestAssignees($pullRequestId: ID!, $assigneeIds: [ID!]) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,ld=h.default`
  mutation changePullRequestMilestone($pullRequestId: ID!, $milestoneId: ID) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,cd=h.default`
  mutation addPullRequestToProject($pullRequestId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $pullRequestId }) {
      clientMutationId
    }
  }
`,yd=h.default`
  mutation requestReview($pullRequestId: ID!, $collaboratorId: ID!) {
    requestReviews(input: { pullRequestId: $pullRequestId, userIds: [$collaboratorId], union: true }) {
      clientMutationId
    }
  }
`,dd=h.default`
  mutation mergePullRequest($nodeId: ID!, $method: PullRequestMergeMethod!) {
    mergePullRequest(input: { pullRequestId: $nodeId, mergeMethod: $method }) {
      pullRequest {
        nodeId: id
      }
    }
  }
`,Sd=h.default`
  mutation addPullRequestToMergeQueue($nodeId: ID!) {
    enqueuePullRequest(input: { pullRequestId: $nodeId }) {
      __typename
    }
  }
`,bd=h.default`
  mutation removePullRequestFromMergeQueue($nodeId: ID!) {
    dequeuePullRequest(input: { id: $nodeId }) {
      __typename
    }
  }
`,gd=h.default`
  mutation enablePullRequestAutoMerge($nodeId: ID!, $mergeMethod: PullRequestMergeMethod) {
    enablePullRequestAutoMerge(input: { pullRequestId: $nodeId, mergeMethod: $mergeMethod }) {
      pullRequest {
        id
      }
    }
  }
`,Id=h.default`
  mutation disablePullRequestAutoMerge($nodeId: ID!) {
    disablePullRequestAutoMerge(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,md=h.default`
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
`,Md=h.default`
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
  ${Vs}
`,Rd=h.default`
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
  ${oo}
`,fd=h.default`
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
  ${oo}
`,Ad=h.default`
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
`,Pd=h.default`
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
`,Ed=h.default`
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
  ${Fs}
  ${rt}
`,hd=h.default`
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
  ${Fs}
`,Cd=h.default`
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
  ${tn}
`,Dd=h.default`
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
  ${Uy}
`,xd=h.default`
  mutation addStar($repositoryId: ID!) {
    addStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,vd=h.default`
  mutation removeStar($repositoryId: ID!) {
    removeStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,Ud=h.default`
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
  ${oo}
`,_d=h.default`
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
  ${rt}
  ${Ns}
`,wd=h.default`
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
  ${rt}
`,Td=h.default`
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
`,Od=(e,t,a,n)=>e();function ks(e,t=Od){return{createLinkedBranch(a,n,r){return t(o=>e.request({document:_y,variables:a,requestHeaders:{...n,...o},signal:r}),"createLinkedBranch","mutation",a)},createRef(a,n,r){return t(o=>e.request({document:wy,variables:a,requestHeaders:{...n,...o},signal:r}),"createRef","mutation",a)},deleteLinkedBranch(a,n,r){return t(o=>e.request({document:Ty,variables:a,requestHeaders:{...n,...o},signal:r}),"deleteLinkedBranch","mutation",a)},searchDiscussions(a,n,r){return t(o=>e.request({document:Oy,variables:a,requestHeaders:{...n,...o},signal:r}),"searchDiscussions","query",a)},getGitHubDiscussionNumber(a,n,r){return t(o=>e.request({document:Ly,variables:a,requestHeaders:{...n,...o},signal:r}),"getGitHubDiscussionNumber","query",a)},repositoryCollaboratorsForIssues(a,n,r){return t(o=>e.request({document:By,variables:a,requestHeaders:{...n,...o},signal:r}),"repositoryCollaboratorsForIssues","query",a)},repositoryProjectsForIssues(a,n,r){return t(o=>e.request({document:qy,variables:a,requestHeaders:{...n,...o},signal:r}),"repositoryProjectsForIssues","query",a)},issueDetails(a,n,r){return t(o=>e.request({document:Ny,variables:a,requestHeaders:{...n,...o},signal:r}),"issueDetails","query",a)},searchIssues(a,n,r){return t(o=>e.request({document:Vy,variables:a,requestHeaders:{...n,...o},signal:r}),"searchIssues","query",a)},issueByNumber(a,n,r){return t(o=>e.request({document:Fy,variables:a,requestHeaders:{...n,...o},signal:r}),"issueByNumber","query",a)},closeIssue(a,n,r){return t(o=>e.request({document:ky,variables:a,requestHeaders:{...n,...o},signal:r}),"closeIssue","mutation",a)},reopenIssue(a,n,r){return t(o=>e.request({document:jy,variables:a,requestHeaders:{...n,...o},signal:r}),"reopenIssue","mutation",a)},changeIssueAssignees(a,n,r){return t(o=>e.request({document:zy,variables:a,requestHeaders:{...n,...o},signal:r}),"changeIssueAssignees","mutation",a)},changeIssueMilestone(a,n,r){return t(o=>e.request({document:Hy,variables:a,requestHeaders:{...n,...o},signal:r}),"changeIssueMilestone","mutation",a)},addIssueToProject(a,n,r){return t(o=>e.request({document:$y,variables:a,requestHeaders:{...n,...o},signal:r}),"addIssueToProject","mutation",a)},createIssue(a,n,r){return t(o=>e.request({document:Gy,variables:a,requestHeaders:{...n,...o},signal:r}),"createIssue","mutation",a)},searchIssueMentions(a,n,r){return t(o=>e.request({document:Qy,variables:a,requestHeaders:{...n,...o},signal:r}),"searchIssueMentions","query",a)},searchPullRequestMentions(a,n,r){return t(o=>e.request({document:Wy,variables:a,requestHeaders:{...n,...o},signal:r}),"searchPullRequestMentions","query",a)},issueOrPullRequestMention(a,n,r){return t(o=>e.request({document:Ky,variables:a,requestHeaders:{...n,...o},signal:r}),"issueOrPullRequestMention","query",a)},searchRepositoryMentions(a,n,r){return t(o=>e.request({document:Yy,variables:a,requestHeaders:{...n,...o},signal:r}),"searchRepositoryMentions","query",a)},viewerRepositoryMentions(a,n,r){return t(o=>e.request({document:Jy,variables:a,requestHeaders:{...n,...o},signal:r}),"viewerRepositoryMentions","query",a)},changeProjectStatus(a,n,r){return t(o=>e.request({document:Zy,variables:a,requestHeaders:{...n,...o},signal:r}),"changeProjectStatus","mutation",a)},projectDetails(a,n,r){return t(o=>e.request({document:Xy,variables:a,requestHeaders:{...n,...o},signal:r}),"projectDetails","query",a)},searchPullRequests(a,n,r){return t(o=>e.request({document:ed,variables:a,requestHeaders:{...n,...o},signal:r}),"searchPullRequests","query",a)},pullRequestDetails(a,n,r){return t(o=>e.request({document:td,variables:a,requestHeaders:{...n,...o},signal:r}),"pullRequestDetails","query",a)},repositoryCollaboratorsForPullRequests(a,n,r){return t(o=>e.request({document:ad,variables:a,requestHeaders:{...n,...o},signal:r}),"repositoryCollaboratorsForPullRequests","query",a)},repositoryProjectsForPullRequests(a,n,r){return t(o=>e.request({document:rd,variables:a,requestHeaders:{...n,...o},signal:r}),"repositoryProjectsForPullRequests","query",a)},pullRequestCommits(a,n,r){return t(o=>e.request({document:nd,variables:a,requestHeaders:{...n,...o},signal:r}),"pullRequestCommits","query",a)},closePullRequest(a,n,r){return t(o=>e.request({document:od,variables:a,requestHeaders:{...n,...o},signal:r}),"closePullRequest","mutation",a)},reopenPullRequest(a,n,r){return t(o=>e.request({document:id,variables:a,requestHeaders:{...n,...o},signal:r}),"reopenPullRequest","mutation",a)},markPullRequestReadyForReview(a,n,r){return t(o=>e.request({document:sd,variables:a,requestHeaders:{...n,...o},signal:r}),"markPullRequestReadyForReview","mutation",a)},addPullRequestReview(a,n,r){return t(o=>e.request({document:ud,variables:a,requestHeaders:{...n,...o},signal:r}),"addPullRequestReview","mutation",a)},changePullRequestAssignees(a,n,r){return t(o=>e.request({document:pd,variables:a,requestHeaders:{...n,...o},signal:r}),"changePullRequestAssignees","mutation",a)},changePullRequestMilestone(a,n,r){return t(o=>e.request({document:ld,variables:a,requestHeaders:{...n,...o},signal:r}),"changePullRequestMilestone","mutation",a)},addPullRequestToProject(a,n,r){return t(o=>e.request({document:cd,variables:a,requestHeaders:{...n,...o},signal:r}),"addPullRequestToProject","mutation",a)},requestReview(a,n,r){return t(o=>e.request({document:yd,variables:a,requestHeaders:{...n,...o},signal:r}),"requestReview","mutation",a)},mergePullRequest(a,n,r){return t(o=>e.request({document:dd,variables:a,requestHeaders:{...n,...o},signal:r}),"mergePullRequest","mutation",a)},addPullRequestToMergeQueue(a,n,r){return t(o=>e.request({document:Sd,variables:a,requestHeaders:{...n,...o},signal:r}),"addPullRequestToMergeQueue","mutation",a)},removePullRequestFromMergeQueue(a,n,r){return t(o=>e.request({document:bd,variables:a,requestHeaders:{...n,...o},signal:r}),"removePullRequestFromMergeQueue","mutation",a)},enablePullRequestAutoMerge(a,n,r){return t(o=>e.request({document:gd,variables:a,requestHeaders:{...n,...o},signal:r}),"enablePullRequestAutoMerge","mutation",a)},disablePullRequestAutoMerge(a,n,r){return t(o=>e.request({document:Id,variables:a,requestHeaders:{...n,...o},signal:r}),"disablePullRequestAutoMerge","mutation",a)},createPullRequest(a,n,r){return t(o=>e.request({document:md,variables:a,requestHeaders:{...n,...o},signal:r}),"createPullRequest","mutation",a)},initPullRequest(a,n,r){return t(o=>e.request({document:Md,variables:a,requestHeaders:{...n,...o},signal:r}),"initPullRequest","mutation",a)},searchRepositories(a,n,r){return t(o=>e.request({document:Rd,variables:a,requestHeaders:{...n,...o},signal:r}),"searchRepositories","query",a)},myLatestRepositories(a,n,r){return t(o=>e.request({document:fd,variables:a,requestHeaders:{...n,...o},signal:r}),"myLatestRepositories","query",a)},milestonesForRepository(a,n,r){return t(o=>e.request({document:Ad,variables:a,requestHeaders:{...n,...o},signal:r}),"milestonesForRepository","query",a)},commentsForPullRequest(a,n,r){return t(o=>e.request({document:Pd,variables:a,requestHeaders:{...n,...o},signal:r}),"commentsForPullRequest","query",a)},dataForRepository(a,n,r){return t(o=>e.request({document:Ed,variables:a,requestHeaders:{...n,...o},signal:r}),"dataForRepository","query",a)},searchRepositoryBranches(a,n,r){return t(o=>e.request({document:hd,variables:a,requestHeaders:{...n,...o},signal:r}),"searchRepositoryBranches","query",a)},repositoryIssues(a,n,r){return t(o=>e.request({document:Cd,variables:a,requestHeaders:{...n,...o},signal:r}),"repositoryIssues","query",a)},repositoryReleases(a,n,r){return t(o=>e.request({document:Dd,variables:a,requestHeaders:{...n,...o},signal:r}),"repositoryReleases","query",a)},addStar(a,n,r){return t(o=>e.request({document:xd,variables:a,requestHeaders:{...n,...o},signal:r}),"addStar","mutation",a)},removeStar(a,n,r){return t(o=>e.request({document:vd,variables:a,requestHeaders:{...n,...o},signal:r}),"removeStar","mutation",a)},myStarredRepositories(a,n,r){return t(o=>e.request({document:Ud,variables:a,requestHeaders:{...n,...o},signal:r}),"myStarredRepositories","query",a)},getViewer(a,n,r){return t(o=>e.request({document:_d,variables:a,requestHeaders:{...n,...o},signal:r}),"getViewer","query",a)},getViewerStats(a,n,r){return t(o=>e.request({document:wd,variables:a,requestHeaders:{...n,...o},signal:r}),"getViewerStats","query",a)},getViewerStatsDetails(a,n,r){return t(o=>e.request({document:Td,variables:a,requestHeaders:{...n,...o},signal:r}),"getViewerStatsDetails","query",a)}}}var io=null,so=null,$s=null,Ld=(0,zs.getPreferenceValues)();function Bd({token:e,type:t}){let a=t==="personal"?`token ${e}`:`bearer ${e}`;$s=e,io=ks(new zr("https://api.github.com/graphql",{headers:{authorization:a}})),so=new js.Octokit({auth:e,request:{fetch:en}})}var Gs=Hs.OAuthService.github({personalAccessToken:Ld.personalAccessToken,scope:"notifications repo project read:org read:user read:packages",onAuthorize:Bd});function x(){if(!io||!so)throw new Error("GitHub clients not initialized");return{github:io,octokit:so,token:$s}}var Lt=require("@raycast/api"),qd=w(require("react")),Ws=require("react/jsx-runtime");function Nd(e){let t=e.min||1,a=e.max||100,n=e.default||10,o=(0,Lt.getPreferenceValues)()[e.name]||"",u=Number(o);return isNaN(u)||u<t||u>a?n:u}function Qs(){return Math.min(Nd({name:"numberOfResults",default:50}),25)}var Kt=require("@raycast/api"),Ys=require("lodash"),Js=require("react");function _(e){return e?.response?.errors?e.response.errors[0].message:e instanceof Error?e.message:String(e)}var Za=require("react/jsx-runtime"),Ks=["apollo-11","rails","gridsome","youtube-dl","iterm2","vscode","textmate","swift","tensorflow","grdb"];function uo({searchText:e,isLoading:t,error:a}){let n=(0,Js.useMemo)(()=>Ks[(0,Ys.random)(0,Ks.length-1)],[]);return a?(0,Za.jsx)(Kt.List.EmptyView,{icon:Kt.Icon.Warning,title:"Failed to Load Repositories",description:_(a)}):e.length>0&&t?(0,Za.jsx)(Kt.List.EmptyView,{title:"Searching repositories..."}):e.length>0&&!t?(0,Za.jsx)(Kt.List.EmptyView,{title:"No repositories found"}):(0,Za.jsx)(Kt.List.EmptyView,{title:`Type query e.g "${n}"`})}var Xt=require("@raycast/api"),qt=require("date-fns");var Xa=require("@raycast/api");function J(e){return e?{icon:{source:e.avatarUrl??Xa.Icon.Person,mask:Xa.Image.Mask.Circle},text:(e.name?e.name:e.login)??"-"}:{icon:Xa.Icon.Person,text:"Unknown"}}var P=require("@raycast/api"),op=w(K());var fa=require("node:child_process"),eu=require("node:fs"),tu=require("node:os"),au=require("node:util"),X=require("@raycast/api"),ru=w(K());function po(e){return[...e.userLogin?[`user:${e.userLogin}`]:[],...(e.orgLogins??[]).filter(a=>!!a).map(a=>`org:${a}`)].join(" ")}function Zs(e,t){let a=(t??"").split(/\s+/).map(r=>/^(?:user|org):(.+)$/i.exec(r)?.[1]?.toLowerCase()).filter(r=>!!r);if(a.length===0)return!0;let n=e.split("/")[0]?.toLowerCase();return a.includes(n)}var nu=[{title:"github.dev",baseUrl:"https://github.dev/",icon:{source:"github-dev.svg",tintColor:X.Color.PrimaryText},shortcut:X.Keyboard.Shortcut.Common.Open},{title:"VS Code for the Web",baseUrl:"https://vscode.dev/github/",icon:{source:"vscode.svg",tintColor:X.Color.PrimaryText},shortcut:{macOS:{modifiers:["cmd"],key:"v"},Windows:{modifiers:["ctrl"],key:"v"}}},{title:"CodeSandbox",baseUrl:"https://codesandbox.io/s/github/",icon:{source:"codesandbox.svg",tintColor:X.Color.PrimaryText}},{title:"Replit",baseUrl:"https://repl.it/github/",icon:{source:"replit.svg",tintColor:X.Color.PrimaryText}},{title:"Gitpod",baseUrl:"https://gitpod.io/#https://github.com/",icon:{source:"gitpod.svg",tintColor:X.Color.PrimaryText}},{title:"Glitch",baseUrl:"https://glitch.com/edit/#!/import/github/",icon:{source:"glitch.svg",tintColor:X.Color.PrimaryText}},{title:"Sourcegraph",baseUrl:"https://sourcegraph.com/github.com/",icon:{source:"sourcegraph.svg",tintColor:X.Color.PrimaryText},shortcut:{macOS:{modifiers:["cmd"],key:"s"},Windows:{modifiers:["ctrl"],key:"s"}}},{title:"DeepWiki",baseUrl:"https://deepwiki.com/",icon:{source:"deepwiki.png"},shortcut:{macOS:{modifiers:["cmd"],key:"d"},Windows:{modifiers:["ctrl"],key:"d"}}},{title:"VS Code Remote Repositories",baseUrl:"vscode://GitHub.remotehub/open?url=https://github.com/",icon:{source:"vscode.svg",tintColor:X.Color.PrimaryText}}],Vd=25;async function ou(e){let{application:t,baseClonePath:a,repositoryCloneProtocol:n}=(0,X.getPreferenceValues)(),r=t?.path.replaceAll(" ","\\ "),o=`${a}/${e.name}`,u=`open -a ${r} ${o}`,s=await(0,X.showToast)({title:`Opening ${e.name}`,message:`at ${o}`,style:X.Toast.Style.Animated});if(!(0,eu.existsSync)(o.replace("~",(0,tu.homedir)())))try{(0,fa.execFileSync)("git",tr(e.nameWithOwner,n),{cwd:a})}catch(i){s.style=X.Toast.Style.Failure,s.title="Error while cloning the repository",s.message=_(i),console.error(i);return}try{(0,fa.execSync)(u,{cwd:a})}catch(i){s.style=X.Toast.Style.Failure,s.title="Error while opening the repository",s.message=_(i),console.error(i);return}s.title="Code editor launched!",s.style=X.Toast.Style.Success}function iu(e,t){let[a,n]=(0,ru.useCachedState)("history",[]);function r(i){let p=[i,...a?.filter(l=>l.id!==i.id)??[]].slice(0,Vd);n(p)}function o(i){n(p=>(p??[]).map(l=>l.id===i.id?{...l,viewerHasStarred:i.viewerHasStarred,stargazerCount:i.stargazerCount}:l))}function u(i){n(p=>(p??[]).filter(l=>l.id!==i.id))}let s=a;return e&&(s=s.filter(i=>i.nameWithOwner.toLowerCase().includes(e.toLowerCase()))),t&&(s=s.filter(i=>Zs(i.nameWithOwner,t))),{data:s,visitRepository:r,updateRepository:o,removeRepository:u}}var co=[{title:"Relevance",value:""},{title:"Last Update",value:"sort:updated-desc"},{title:"Name",value:"sort:name-asc"},{title:"Stars",value:"sort:stars-desc"},{title:"Forks",value:"sort:forks-desc"}],Fd=[{title:"Last Pushed",value:"pushed_at:desc"},{title:"Name",value:"name:asc"},{title:"Stars",value:"stargazers:desc"}],kd=[{title:"Recently Starred",value:"starred_at:desc"},{title:"Oldest Starred",value:"starred_at:asc"}],su=co[0].value,vg=Fd[0].value,Ug=kd[0].value,uu=["https","ssh"],pu={https:"HTTPS",ssh:"SSH"},lu=["git","gh"],cu={git:"Git",gh:"GitHub CLI"},yu=(e,t,a)=>{let n=a?.gitFlags?.join(" ")??"",r=(a?.targetDir??"").replace(/"/g,'\\"'),o=bu(e,t),u=`git clone ${n} ${o}`;return r&&(u+=` "${r}"`),u},tr=(e,t,a)=>{let n=a?.gitFlags??[],r=a?.targetDir??"",o=["clone",...n,bu(e,t)];return r&&o.push(r),o},du=(e,t)=>{let a=t?.gitFlags??[],n=t?.targetDir??"",r=["repo","clone",e];return n&&r.push(n),a.length>0&&r.push("--",...a),r},lo=(0,au.promisify)(fa.execFile),jd=["/gh","\\gh","/gh.exe","\\gh.exe"],er="\x1B",Xs="\x07",zd=new RegExp(`${er}][^${Xs}${er}]*(?:${Xs}|${er}\\\\)`,"g"),Hd=new RegExp(`${er}\\[[0-9;?]*[A-Za-z]`,"g"),$d=new RegExp(`${er}\\([0-9A-Za-z]`,"g");function Gd(e){let t=e.replace(zd,"").replace(Hd,"").replace($d,"");for(let a of t.split(/\r?\n/)){let n=a.trim();if(!(!n||/^(alias|builtin|function)\s/i.test(n))&&jd.some(r=>n.endsWith(r)))return n}}async function Qd(){let e=process.env.SHELL;if(e)for(let t of["-l","-i"])try{let{stdout:a}=await lo(e,[t,"-c","command -v gh"],{timeout:5e3,maxBuffer:1048576}),n=Gd(a.toString());if(n)return n}catch{}return"gh"}async function Su(){let e=await Qd();try{await lo(e,["--version"])}catch{return{available:!1,reason:"not-installed"}}try{await lo(e,["auth","status"])}catch{return{available:!1,reason:"not-authenticated"}}return{available:!0,executable:e}}var bu=(e,t)=>t==="https"?`https://github.com/${e}.git`:`git@github.com:${e}.git`;function gu(e,t,a=""){if(!t)return e;let n=g=>g.replace(/^https:\/\/raw\.githubusercontent\.com\/([^/]+)\/([^/]+)\//,"https://github.com/$1/$2/blob/"),r=t.slice(0,t.lastIndexOf("/")+1),o=a?t.slice(0,t.length-a.length):r,u=n(r),s=n(o),i=g=>/^[a-z][a-z0-9+.-]*:/i.test(g)||g.startsWith("//")||g.startsWith("#"),p=(g,y,M)=>{let I=g.trim();if(!I||i(I))return g;try{return I.startsWith("/")?new URL(I.replace(/^\/+/,""),M).toString():new URL(I,y).toString()}catch{return g}},l="((?:\\([^)]*\\)|[^()\\s])+)([^)]*)",c=new RegExp(`!\\[([^\\]]*)\\]\\(${l}\\)`,"g"),S=new RegExp(`(?<!!)\\[([^\\]]+)\\]\\(${l}\\)`,"g");return e.replace(c,(g,y,M,I)=>`![${y}](${p(M,r,o)}${I})`).replace(S,(g,y,M,I)=>`[${y}](${p(M,u,s)}${I})`).replace(/(<img[^>]+src=["'])([^"']+)(["'])/gi,(g,y,M,I)=>`${y}${p(M,r,o)}${I}`).replace(/(<a[^>]+href=["'])([^"']+)(["'])/gi,(g,y,M,I)=>`${y}${p(M,u,s)}${I}`)}var an=require("child_process"),Iu=w(require("path")),yo=require("util"),z=require("@raycast/api"),nt=w(K()),mu=require("react");var ue=require("react/jsx-runtime");function So({repository:e}){let{octokit:t}=x(),{application:a,baseClonePath:n,repositoryCloneProtocol:r}=(0,z.getPreferenceValues)(),{data:o,isLoading:u}=(0,nt.useCachedPromise)(async c=>(await t.repos.listBranches({owner:c.owner.login,repo:c.name})).data.map(g=>g.name),[e]),{itemProps:s,handleSubmit:i,setValue:p,values:l}=(0,nt.useForm)({initialValues:{clonePath:n?[n]:[],cloneProtocol:r,cloneTool:"git"},async onSubmit(c){let S=e.name,g=Iu.default.join(c.clonePath[0],S);await(0,z.showToast)({title:`Cloning ${e.nameWithOwner} to ${g}`,style:z.Toast.Style.Animated});let y=c.branch?["-b",c.branch]:[],M=(0,yo.promisify)(an.exec),I=(0,yo.promisify)(an.execFile),m="gh";if(c.cloneTool==="gh"){let R=await Su();if(!R.available){R.reason==="not-installed"?await(0,nt.showFailureToast)(void 0,{title:"GitHub CLI is not installed",message:"Install it with `brew install gh` or visit https://cli.github.com, then try again."}):await(0,nt.showFailureToast)(void 0,{title:"GitHub CLI is not authenticated",message:"Run `gh auth login` in your terminal to authenticate, then try again."});return}m=R.executable}try{c.cloneTool==="gh"?await I(m,du(e.nameWithOwner,{gitFlags:y,targetDir:g})):await I("git",tr(e.nameWithOwner,c.cloneProtocol,{gitFlags:y,targetDir:g})),await(0,z.showToast)({style:z.Toast.Style.Success,title:"Repository cloned successfully",primaryAction:{title:"Open Repository",async onAction(){let f=`open -a ${a?.path.replaceAll(" ","\\ ")} ${g}`;await M(f),await(0,z.closeMainWindow)()}}})}catch(R){if(R instanceof Error&&R.message.includes("Repository not found")){await(0,nt.showFailureToast)(R,{title:"Repository not found",message:"You may not have access to this repository. Try using SSH instead of HTTPS."});return}if(R instanceof Error&&R.message.includes("already exists")){await(0,nt.showFailureToast)(R,{title:"The repository already exists",message:"Please choose a different directory to clone the repository."});return}await(0,nt.showFailureToast)(R,{title:"Failed cloning repository"})}}});return(0,mu.useEffect)(()=>{let c=o?.find(g=>g==="main"),S=o?.find(g=>g==="master");(c||S)&&p("branch",c??S??"")},[o]),(0,ue.jsxs)(z.Form,{isLoading:u,navigationTitle:`Clone ${e.nameWithOwner}`,actions:(0,ue.jsx)(z.ActionPanel,{children:(0,ue.jsx)(z.Action.SubmitForm,{title:"Clone and Open Repository",onSubmit:i})}),children:[(0,ue.jsx)(z.Form.Dropdown,{...s.cloneTool,title:"Clone Tool",children:lu.map(c=>(0,ue.jsx)(z.Form.Dropdown.Item,{value:c,title:cu[c]},c))}),(0,ue.jsx)(z.Form.Description,{title:"Clone Location",text:n?`Starts at your Default Clone Path (${n}). Choose another directory to override it for this clone.`:"Choose the directory where the repository should be cloned. Set a Default Clone Path in extension preferences to reuse a directory."}),(0,ue.jsx)(z.Form.FilePicker,{...s.clonePath,title:"Clone Path",allowMultipleSelection:!1,canChooseDirectories:!0,canChooseFiles:!1,storeValue:!0}),(0,ue.jsx)(z.Form.Dropdown,{...s.branch,title:"Branch Name",children:o?.map(c=>(0,ue.jsx)(z.Form.Dropdown.Item,{value:c,title:c},c))}),l.cloneTool==="gh"?(0,ue.jsx)(z.Form.Description,{title:"Authentication",text:"Cloning uses your existing GitHub CLI (gh) authentication and git protocol configuration. Run `gh auth login` in your terminal if you are not authenticated."}):(0,ue.jsx)(ue.Fragment,{children:(0,ue.jsx)(z.Form.Dropdown,{...s.cloneProtocol,title:"Repository Clone Protocol",storeValue:!0,children:uu.map(c=>(0,ue.jsx)(z.Form.Dropdown.Item,{value:c,title:pu[c]},c))})})]})}var rn=require("fs"),bo=w(require("path")),re=require("@raycast/api"),Aa=w(K()),Mu=require("react");var Mt=require("react/jsx-runtime");function go({repository:e}){let{octokit:t,token:a}=x(),{data:n,isLoading:r}=(0,Aa.useCachedPromise)(async i=>(await t.repos.listBranches({owner:i.owner.login,repo:i.name})).data.map(l=>l.name),[e]),{itemProps:o,handleSubmit:u,setValue:s}=(0,Aa.useForm)({async onSubmit(i){let p=e.url+"/archive/refs/heads/"+i.branch+".zip";await(0,re.showToast)({title:`Downloading ${e.nameWithOwner}`,style:re.Toast.Style.Animated});try{let l;if(e.isPrivate&&a){let m=`https://api.github.com/repos/${e.owner.login}/${e.name}/zipball/${i.branch}`;l=await fetch(m,{headers:{Authorization:`token ${a}`,Accept:"application/vnd.github.v3+json"},redirect:"follow"})}else l=await fetch(p);if(!l.ok)throw new Error(`HTTP error! status: ${l.status}`);let S=await(await l.blob()).arrayBuffer(),g=new Uint8Array(S),y=`${e.name}-${i.branch.replaceAll("/","-")}.zip`,M=bo.default.join(i.downloadPath[0],y),I=1;for(;(0,rn.existsSync)(M);)y=`${`${e.name}-${i.branch.replaceAll("/","-")}`} (${I}).zip`,M=bo.default.join(i.downloadPath[0],y),I++;(0,rn.writeFileSync)(M,g),await(0,re.showToast)({style:re.Toast.Style.Success,title:"Downloaded repository successfully",message:e.name,primaryAction:{title:"Show in Finder",async onAction(){await(0,re.showInFinder)(M)}}})}catch(l){await(0,Aa.showFailureToast)(l,{title:"Failed downloading repository",message:l instanceof Error?l.message:"Unknown error"});return}},validation:{downloadPath:i=>{if(!i||i.length===0)return"Please select a download path"},branch:i=>{if(!i||i.trim()==="")return"Please select a branch"}}});return(0,Mu.useEffect)(()=>{let i=n?.find(l=>l==="main"),p=n?.find(l=>l==="master");(i||p)&&s("branch",i??p??"")},[n]),(0,Mt.jsxs)(re.Form,{isLoading:r,navigationTitle:`Download ${e.nameWithOwner} as ZIP`,actions:(0,Mt.jsx)(re.ActionPanel,{children:(0,Mt.jsx)(re.Action.SubmitForm,{title:"Download ZIP",onSubmit:u})}),children:[(0,Mt.jsx)(re.Form.Description,{title:"ZIP Download",text:"Downloads a branch as a ZIP archive. To create a Git clone, use 'Clone with Options' instead."}),(0,Mt.jsx)(re.Form.FilePicker,{...o.downloadPath,title:"ZIP Save Location",allowMultipleSelection:!1,canChooseDirectories:!0,canChooseFiles:!1,storeValue:!0}),(0,Mt.jsx)(re.Form.Dropdown,{...o.branch,title:"Branch Name",children:n?.map(i=>(0,Mt.jsx)(re.Form.Dropdown.Item,{value:i,title:i},i))})]})}var pe=require("@raycast/api"),un=w(K()),Mo=require("react");var L=require("@raycast/api"),Ru=require("lodash");function nn(e){switch(e){case"SUCCESS":return{icon:"Check",text:"Success"};case"ERROR":case"FAILURE":return{icon:"Xmark",text:"Failure"};case"PENDING":return{icon:"Clock",text:"Pending"};default:return null}}function fu(e){switch(e){case"MERGE":return"Create Merge Commit";case"SQUASH":return"Squash and Merge";case"REBASE":return"Rebase and Merge";default:{let t=e;throw new Error(`Unknown merge method: ${t}`)}}}function ar(e){return e.merged?{icon:{source:"pull-request-merged.svg",tintColor:L.Color.Purple},text:"Merged",color:L.Color.Purple}:e.closed?{icon:{source:"pull-request-closed.svg",tintColor:L.Color.Red},text:"Closed",color:L.Color.Red}:e.isDraft?{icon:{source:"pull-request-draft.svg",tintColor:L.Color.SecondaryText},text:"Draft",color:L.Color.SecondaryText}:e.isInMergeQueue?{icon:{source:"pull-request-merge-queue.svg",tintColor:L.Color.Orange},text:"In Merge Queue",color:L.Color.Orange}:{icon:{source:"pull-request-open.svg",tintColor:L.Color.Green},text:"Open",color:L.Color.Green}}function on(e){return J(e.author)}function Au(e){let t=e.reviewRequests?.nodes?.map(n=>{let r=n?.requestedReviewer;if(r){let o;"userName"in r&&(o=r.userName),"teamName"in r&&(o=r.teamName);let u;"githubUsername"in r&&(u=r.githubUsername);let s;return"userAvatarURL"in r&&(s=r.userAvatarURL),"teamAvatarURL"in r&&(s=r.teamAvatarURL),{id:"id"in r?r.id:"",...J({name:o,login:u,avatarUrl:s})}}}),a=(0,Ru.uniqBy)(e.reviews?.nodes?.map(n=>({id:n?.author?.id,...J(n?.author)})),"id");return[...t??[],...a??[]]}function Pu(e){let t=e.comments.totalCount,a=e.reviews?.nodes?.reduce((r,o)=>r+(o?.bodyText===""?0:1),0)??0,n=e.reviewThreads.nodes?.map(r=>r?.comments.totalCount??0).reduce((r,o)=>r+o,0)??0;return t+a+n}function sn(e){let t=nn(e);return t?{icon:L.Icon[t.icon],tooltip:`Checks: ${t.text}`}:null}function Eu(e){switch(e){case"added":return{icon:{source:L.Icon.PlusCircle,tintColor:L.Color.Green},tooltip:"Added"};case"removed":return{icon:{source:L.Icon.MinusCircle,tintColor:L.Color.Red},tooltip:"Removed"};case"renamed":return{icon:{source:L.Icon.ArrowRight,tintColor:L.Color.SecondaryText},tooltip:"Renamed"};case"copied":return{icon:{source:L.Icon.CopyClipboard,tintColor:L.Color.SecondaryText},tooltip:"Copied"};case"unchanged":return{icon:{source:L.Icon.Circle,tintColor:L.Color.SecondaryText},tooltip:"Unchanged"};case"changed":return{icon:{source:L.Icon.Pencil,tintColor:L.Color.Orange},tooltip:"Changed"};default:return{icon:{source:L.Icon.Pencil,tintColor:L.Color.Orange},tooltip:"Modified"}}}var Io=400;function hu(e){let t=e.split(`
`);return t.length<=Io?{patch:e,remainingLines:0}:{patch:t.slice(0,Io).join(`
`),remainingLines:t.length-Io}}function Cu(e){switch(e){case"REVIEW_REQUIRED":return{icon:{source:L.Icon.Eye,tintColor:L.Color.Yellow},tooltip:"Review required"};case"CHANGES_REQUESTED":return{icon:{source:L.Icon.Pencil,tintColor:L.Color.Orange},tooltip:"Changes requested"};case"APPROVED":return{icon:{source:L.Icon.CheckCircle,tintColor:L.Color.Green},tooltip:"Approved"};default:return null}}var Du=[{title:"Newest",value:"sort:created-desc"},{title:"Oldest",value:"sort:created-asc"},{title:"Most Commented",value:"sort:comments-desc"},{title:"Least Commented",value:"sort:comments-asc"},{title:"Recently Updated",value:"sort:updated-desc"},{title:"Least Recently Updated",value:"sort:updated-asc"},{title:"Best Match",value:"sort:relevance-desc"},{title:"\u{1F44D}",value:"sort:reactions-+1-desc"},{title:"\u{1F44E}",value:"sort:reactions--1-desc"},{title:"\u{1F604}",value:"sort:reactions-smile-desc"},{title:"\u{1F389}",value:"sort:reactions-tada-desc"},{title:"\u{1F641}",value:"sort:reactions-thinking_face-desc"},{title:"\u2764\uFE0F",value:"sort:reactions-heart-desc"},{title:"\u{1F680}",value:"sort:reactions-rocket-desc"},{title:"\u{1F440}",value:"sort:reactions-eyes-desc"}],xu="sort:updated-desc";function ot(e){return[...new Map(e.map(t=>[t.id,t])).values()]}function vu(e){return e?.filter(t=>typeof t=="object"&&t!==null&&"id"in t)??[]}function Ve(e,t,{suffix:a="s",withNumber:n=!1}={}){let r=`${t}${e!==1?a:""}`;return n?`${e} ${r}`:r}var it=require("date-fns"),mo=[{title:"Latest Activity",value:"sort:latest"},{title:"Date Created",value:"sort:date_created"},{title:"Top: Past Day",value:"sort:top created:>=1d"},{title:"Top: Past Week",value:"sort:top created:>=1w"},{title:"Top: Past Month",value:"sort:top created:>=1m"},{title:"Top: Past Year",value:"sort:top created:>=1y"},{title:"Top: All",value:"sort:top"}],Uu=mo[0].value,_u=e=>{let t=new Date,a,n=e.match(/sort:top created:>=(\d+)([dwmy])/);if(!n)return e;let r=parseInt(n[1],10);switch(n[2]){case"d":a=(0,it.subDays)(t,r);break;case"w":a=(0,it.subWeeks)(t,r);break;case"m":a=(0,it.subMonths)(t,r);break;case"y":a=(0,it.subYears)(t,r);break;default:throw new Error("Unsupported time unit")}return`sort:top created:>=${(0,it.format)(a,"yyyy-MM-dd")}`};var _e=require("@raycast/api"),Tu=require("date-fns");var Ae=require("@raycast/api"),st=require("react/jsx-runtime"),Bt=({sortQuery:e,setSortQuery:t,data:a})=>t?(0,st.jsxs)(Ae.ActionPanel.Submenu,{title:"Sort by",icon:Ae.Icon.ArrowUp,shortcut:Ae.Keyboard.Shortcut.Common.Duplicate,children:[a.filter(({value:n})=>!n.startsWith("sort:reaction")).map(({title:n,value:r})=>(0,st.jsx)(wu,{title:n,value:r,sortQuery:e??"",setSortQuery:t},r||"relevance")),a.some(({value:n})=>n.startsWith("sort:reaction"))&&(0,st.jsx)(Ae.ActionPanel.Section,{title:"Most Reactions",children:a.filter(({value:n})=>n.startsWith("sort:reaction")).map(({title:n,value:r})=>(0,st.jsx)(wu,{title:n,value:r,sortQuery:e??"",setSortQuery:t},r))})]}):(0,st.jsx)(st.Fragment,{}),wu=({title:e,value:t,sortQuery:a,setSortQuery:n})=>(0,st.jsx)(Ae.Action,{title:e,icon:a===t?{source:Ae.Icon.CheckCircle,tintColor:Ae.Color.Green}:Ae.Icon.Circle,onAction:()=>n(t)});var Yt=require("react/jsx-runtime");function Kd(e){let t=e.category?.name?`Category: ${e.category?.name}`:"Unknown",a=e.category?.emojiHTML;if(!a)return{value:{source:e.repository?.owner?.avatarUrl},tooltip:t};let r=(()=>{let o=/fallback-src="(.*)"/,u=a.match(o);if(u)return u[1]})();return r&&{value:{source:r},tooltip:t}}function Ou(e){let t=e.discussion,a=J(t.author);return(0,Yt.jsx)(_e.List.Item,{icon:Kd(t),title:t.title,subtitle:t.repository?.nameWithOwner,accessories:[{icon:t.answer?{source:_e.Icon.Checkmark,tintColor:_e.Color.Green}:void 0,tooltip:t.answer?"Answered":void 0},{icon:_e.Icon.ArrowUp,text:`${t.upvoteCount}`,tooltip:`${t.upvoteCount} Upvotes`},{text:t.comments?`${t.comments.totalCount}`:void 0,icon:t.comments?_e.Icon.SpeechBubble:void 0,tooltip:t.comments?`Comments: ${t.comments.totalCount}`:void 0},...t.publishedAt?[{date:new Date(t.publishedAt),tooltip:(0,Tu.format)(new Date(t.publishedAt),"EEEE d MMMM yyyy 'at' HH:mm")}]:[],{icon:a.icon,tooltip:a.text}],actions:(0,Yt.jsxs)(_e.ActionPanel,{children:[(0,Yt.jsx)(_e.Action.OpenInBrowser,{url:t.url}),(0,Yt.jsx)(_e.ActionPanel.Section,{children:(0,Yt.jsx)(Bt,{data:mo,...e})})]})})}var Fe=require("react/jsx-runtime"),Yd=20;function Jd(e){return(0,Fe.jsxs)(pe.List.Dropdown,{tooltip:"Filter",value:e.value,onChange:e.onChange,children:[(0,Fe.jsx)(pe.List.Dropdown.Item,{value:"",title:"All",icon:pe.Icon.SpeechBubble}),(0,Fe.jsx)(pe.List.Dropdown.Item,{value:"answered",title:"Answered",icon:{source:pe.Icon.Checkmark,tintColor:pe.Color.Green}}),(0,Fe.jsx)(pe.List.Dropdown.Item,{value:"unanswered",title:"Unanswered",icon:pe.Icon.Circle}),(0,Fe.jsx)(pe.List.Dropdown.Item,{value:"locked",title:"Locked",icon:pe.Icon.Lock}),(0,Fe.jsx)(pe.List.Dropdown.Item,{value:"unlocked",title:"Unlocked",icon:pe.Icon.LockUnlocked})]})}function Lu(e){let{github:t}=x(),[a,n]=(0,Mo.useState)(""),[r,o]=(0,Mo.useState)(""),[u,s]=(0,un.useCachedState)("sort-query",Uu,{cacheNamespace:"github-repo-discussion"}),i=r.length>0?`is:${r}`:"",p=e.repository&&e.repository.length>0?`repo:${e.repository}`:"",{data:l,isLoading:c,pagination:S}=(0,un.useCachedPromise)((y,M,I)=>async m=>{let R=await t.searchDiscussions({query:`${p} ${M} ${_u(I)} ${y}`.replace(/\s+/g," ").trim(),numberOfItems:Yd,after:m.page>0?m.cursor:void 0});return{data:R.searchDiscussions.nodes?.map(f=>f)??[],hasMore:R.searchDiscussions.pageInfo.hasNextPage,cursor:R.searchDiscussions.pageInfo.endCursor??void 0}},[a,i,u]),g=ot(l??[]);return(0,Fe.jsx)(pe.List,{isLoading:c,onSearchTextChange:n,navigationTitle:e.repository,throttle:!0,pagination:S,searchBarAccessory:(0,Fe.jsx)(Jd,{value:r,onChange:o}),children:(0,Fe.jsx)(pe.List.Section,{title:"Discussions",subtitle:`${g.length}`,children:g.map(y=>(0,Fe.jsx)(Ou,{discussion:y,sortQuery:u,setSortQuery:s},y.id))})})}var We=require("@raycast/api"),or=w(K()),Hu=require("react");var Rt=require("@raycast/api");function pn(e){return e.stateReason==="NOT_PLANNED"?{icon:{source:"skip.svg",tintColor:Rt.Color.SecondaryText},text:"Closed as not planned",color:Rt.Color.Purple}:e.stateReason==="COMPLETED"?{icon:{source:"issue-closed.svg",tintColor:Rt.Color.Purple},text:"Closed as completed",color:Rt.Color.Purple}:e.closed?{icon:{source:"issue-closed.svg",tintColor:Rt.Color.Purple},text:"Closed",color:Rt.Color.Purple}:{icon:{source:"issue-open.svg",tintColor:Rt.Color.Green},text:"Open",color:Rt.Color.Green}}function ln(e){return J(e.author)}var Bu=[{title:"Newest",value:"sort:created-desc"},{title:"Oldest",value:"sort:created-asc"},{title:"Most Commented",value:"sort:comments-desc"},{title:"Least Commented",value:"sort:comments-asc"},{title:"Recently Updated",value:"sort:updated-desc"},{title:"Least Recently Updated",value:"sort:updated-asc"},{title:"Best Match",value:"sort:relevance-desc"},{title:"\u{1F44D}",value:"sort:reactions-+1-desc"},{title:"\u{1F44E}",value:"sort:reactions--1-desc"},{title:"\u{1F604}",value:"sort:reactions-smile-desc"},{title:"\u{1F389}",value:"sort:reactions-tada-desc"},{title:"\u{1F641}",value:"sort:reactions-thinking_face-desc"},{title:"\u2764\uFE0F",value:"sort:reactions-heart-desc"},{title:"\u{1F680}",value:"sort:reactions-rocket-desc"},{title:"\u{1F440}",value:"sort:reactions-eyes-desc"}],qu="sort:updated-desc",Zd=/\brepo:([A-Za-z0-9_.-]+)\/([A-Za-z0-9_.-]+)\b/i,Xd=/(?:https?:\/\/github\.com\/)?([A-Za-z0-9_.-]+)\/([A-Za-z0-9_.-]+)(?:\/issues\/|#)(\d+)\b/i,eS=/\b(?:repo|author|assignee|mentions|commenter|involves|team|label|milestone|project|status|head|base|language|is|type|state|user|org|sort|archived|no|review|draft|created|updated|closed|linked|in|comments|interactions|reactions):[^\s]+/gi;function Nu(e,t){let a=e.match(Xd);if(a)return{owner:a[1],name:a[2],issueNumber:Number.parseInt(a[3],10)};let n=e.match(Zd),r=t?.replace(/^repo:/,""),o=n?`${n[1]}/${n[2]}`:r?.includes("/")?r:null;if(!o)return null;let s=e.replace(eS," ").replace(/\s+/g," ").trim().match(/^#?(\d+)$/)??e.match(/(?:^|\s)#(\d+)(?:\s|$)/);if(!s)return null;let[i,p]=o.split("/");return!i||!p?null:{owner:i,name:p,issueNumber:Number.parseInt(s[1],10)}}function Vu(e){return e.replace(/(^|\s)#(\d+)(?=\s|$)/g,"$1$2").trim()}var At=require("@raycast/api"),zu=require("date-fns");var b=require("@raycast/api"),cn=w(K()),yn=require("react");var Fu=w(K());function ft(){let{github:e}=x(),{data:t}=(0,Fu.useCachedPromise)(async()=>(await e.getViewer()).viewer);return t}var U=require("react/jsx-runtime");function rr({issue:e,mutateList:t,mutateDetail:a,children:n,setSortQuery:r,sortQuery:o}){let{github:u}=x(),s=ft();async function i(){t&&await t(),a&&await a()}async function p(){try{await(0,b.showToast)({style:b.Toast.Style.Animated,title:`Reopening issue #${e.number}`}),await u.reopenIssue({nodeId:e.id}),await i(),await(0,b.showToast)({style:b.Toast.Style.Success,title:`Issue #${e.number} is now open`})}catch(f){await(0,b.showToast)({style:b.Toast.Style.Failure,title:"Failed reopening issue",message:_(f)})}}async function l(){try{await(0,b.showToast)({style:b.Toast.Style.Animated,title:`Closing issue #${e.number} as completed`}),await u.closeIssue({nodeId:e.id,stateReason:"COMPLETED"}),await i(),await(0,b.showToast)({style:b.Toast.Style.Success,title:`Issue #${e.number} closed as completed`})}catch(f){await(0,b.showToast)({style:b.Toast.Style.Failure,title:"Failed closing issue as completed",message:_(f)})}}async function c(){try{await(0,b.showToast)({style:b.Toast.Style.Animated,title:`Closing issue #${e.number} as not planned`}),await u.closeIssue({nodeId:e.id,stateReason:"NOT_PLANNED"}),await i(),await(0,b.showToast)({style:b.Toast.Style.Success,title:`Issue #${e.number} closed as not planned`})}catch(f){await(0,b.showToast)({style:b.Toast.Style.Failure,title:"Failed closing issue as not planned",message:_(f)})}}async function S(f){try{await(0,b.showToast)({style:b.Toast.Style.Animated,title:"Assigning to me"});let A=e.assignees.nodes?.filter(E=>!!E).map(E=>E?.id)??[];await u.changeIssueAssignees({issueId:e.id,assigneeIds:[...A,f]}),await i(),await(0,b.showToast)({style:b.Toast.Style.Success,title:"Assigned to me"})}catch(A){await(0,b.showToast)({style:b.Toast.Style.Failure,title:"Failed assigning to me",message:_(A)})}}async function g(f){try{await(0,b.showToast)({style:b.Toast.Style.Animated,title:"Un-assigning from me"});let A=e.assignees.nodes?.filter(E=>!!E).map(E=>E?.id)??[];await u.changeIssueAssignees({issueId:e.id,assigneeIds:A?.filter(E=>E!==f)}),await i(),await(0,b.showToast)({style:b.Toast.Style.Success,title:"Un-assigned from me"})}catch(A){await(0,b.showToast)({style:b.Toast.Style.Failure,title:"Failed un-assigning from me",message:_(A)})}}async function y(){try{await(0,b.showToast)({style:b.Toast.Style.Animated,title:`Creating branch for issue #${e.number}`});let f=e.repository.defaultBranchRef?.target?.oid;if(!f)throw new Error("Repository default branch commit SHA is unavailable");let E=(await u.createLinkedBranch({input:{issueId:e.id,oid:f}})).createLinkedBranch?.linkedBranch?.ref?.name;await i(),E&&await(0,b.showToast)({style:b.Toast.Style.Success,title:`${E} is created`,primaryAction:{title:"Copy Branch Name",shortcut:b.Keyboard.Shortcut.Common.Copy,onAction:()=>b.Clipboard.copy(E)}})}catch(f){await(0,b.showToast)({style:b.Toast.Style.Failure,title:"Failed creating a branch",message:_(f)})}}async function M(f,A){if(await(0,b.confirmAlert)({icon:b.Icon.Trash,title:"Delete the branch",message:`${A} will be deleted. Are you sure you want to proceed with the action?`,primaryAction:{title:"Confirm",style:b.Alert.ActionStyle.Destructive}}))try{await(0,b.showToast)({style:b.Toast.Style.Animated,title:"Deleting a branch"}),await u.deleteLinkedBranch({input:{linkedBranchId:f}}),await i(),await(0,b.showToast)({style:b.Toast.Style.Success,title:"Deleted the branch"})}catch(E){await(0,b.showToast)({style:b.Toast.Style.Failure,title:"Failed deleting the branch",message:_(E)})}}let I=J(s),m=e.assignees.nodes?.some(f=>f?.isViewer),R=e.linkedBranches?.nodes?.length?e.linkedBranches.nodes[0]:null;return(0,U.jsxs)(b.ActionPanel,{title:`#${e.number} in ${e.repository.nameWithOwner}`,children:[n,(0,U.jsx)(b.Action.OpenInBrowser,{url:e.url}),(0,U.jsxs)(b.ActionPanel.Section,{children:[s?(0,U.jsx)(b.Action,{title:m?"Unassign from Me":"Assign to Me",icon:I.icon,shortcut:{macOS:{modifiers:["cmd","shift"],key:"i"},Windows:{modifiers:["ctrl","shift"],key:"i"}},onAction:()=>m?g(s.id):S(s.id)}):null,(0,U.jsx)(tS,{issue:e,mutate:i}),(0,U.jsx)(aS,{issue:e,mutate:i}),R?null:(0,U.jsx)(b.Action,{title:"Create Issue Branch",icon:{source:"branch.svg",tintColor:b.Color.PrimaryText},shortcut:{macOS:{modifiers:["cmd","shift"],key:"b"},Windows:{modifiers:["ctrl","shift"],key:"b"}},onAction:()=>y()}),(0,U.jsx)(rS,{issue:e,mutate:i})]}),(0,U.jsx)(b.ActionPanel.Section,{children:e.closed?(0,U.jsx)(b.Action,{title:"Reopen Issue",icon:{source:"issue-reopened.svg",tintColor:b.Color.Green},onAction:p}):(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(b.Action,{title:"Close Issue as Completed",style:b.Action.Style.Destructive,icon:{source:"issue-closed.svg",tintColor:b.Color.Red},onAction:l}),(0,U.jsx)(b.Action,{title:"Close Issue as Not Planned",style:b.Action.Style.Destructive,icon:{source:"skip.svg",tintColor:b.Color.Red},onAction:c}),R?(0,U.jsx)(b.Action,{title:"Delete Issue Branch",style:b.Action.Style.Destructive,icon:{source:"branch.svg",tintColor:b.Color.Red},onAction:()=>M(R?.id||"",R.ref?.name??"")}):null]})}),(0,U.jsxs)(b.ActionPanel.Section,{children:[(0,U.jsx)(b.Action.CopyToClipboard,{content:e.number,title:"Copy Issue Number",shortcut:{macOS:{modifiers:["cmd","shift"],key:"."},Windows:{modifiers:["ctrl","shift"],key:"."}}}),(0,U.jsx)(b.Action.CopyToClipboard,{content:e.url,title:"Copy Issue URL",shortcut:{macOS:{modifiers:["cmd","shift"],key:","},Windows:{modifiers:["ctrl","shift"],key:","}}}),(0,U.jsx)(b.Action.CopyToClipboard,{content:e.title,title:"Copy Issue Title",shortcut:{macOS:{modifiers:["ctrl","shift"],key:","},Windows:{modifiers:["alt","shift"],key:","}}}),(0,U.jsx)(b.Action.CopyToClipboard,{content:`[${e.title}](${e.url})`,title:"Copy Markdown URL",shortcut:{macOS:{modifiers:["cmd","shift"],key:";"},Windows:{modifiers:["ctrl","shift"],key:";"}}}),R?.ref?.name?(0,U.jsx)(b.Action.CopyToClipboard,{content:R.ref?.name,title:"Copy Branch Name",shortcut:{macOS:{modifiers:["ctrl","shift"],key:"."},Windows:{modifiers:["alt","shift"],key:"."}}}):null]}),(0,U.jsxs)(b.ActionPanel.Section,{children:[(0,U.jsx)(Bt,{data:Bu,sortQuery:o,setSortQuery:r}),(0,U.jsx)(b.Action,{icon:b.Icon.ArrowClockwise,title:"Refresh",onAction:i,shortcut:b.Keyboard.Shortcut.Common.Refresh})]})]})}function tS({issue:e,mutate:t}){let{github:a}=x(),[n,r]=(0,yn.useState)(!1),{data:o,isLoading:u}=(0,cn.useCachedPromise)(async i=>a.repositoryCollaboratorsForIssues({owner:i.repository.owner.login,name:i.repository.name,issueNumber:i.number}),[e],{execute:n});async function s({id:i,text:p}){try{await(0,b.showToast)({style:b.Toast.Style.Animated,title:"Adding assignee",message:p});let l=o?.repository?.issue?.assignees.nodes?.filter(c=>!!c).map(c=>c?.id)??[];await a.changeIssueAssignees({issueId:e.id,assigneeIds:[...l,i]}),await t(),await(0,b.showToast)({style:b.Toast.Style.Success,title:"Added assignee",message:p})}catch(l){await(0,b.showToast)({style:b.Toast.Style.Failure,title:"Failed adding assignee",message:_(l)})}}return(0,U.jsx)(b.ActionPanel.Submenu,{title:"Add Assignee",icon:b.Icon.AddPerson,shortcut:{macOS:{modifiers:["cmd","shift"],key:"a"},Windows:{modifiers:["ctrl","shift"],key:"a"}},onOpen:()=>r(!0),children:u?(0,U.jsx)(b.Action,{title:"Loading\u2026"}):o?.repository?.collaborators?.nodes?.map(i=>{if(!i)return null;let p=J(i);return(0,U.jsx)(b.Action,{title:p.text,icon:p.icon,onAction:()=>s({id:i.id,text:p.text})},i.id)})})}function aS({issue:e,mutate:t}){let{github:a}=x(),[n,r]=(0,yn.useState)(!1),{data:o,isLoading:u}=(0,cn.useCachedPromise)(async i=>a.repositoryProjectsForIssues({owner:i.repository.owner.login,name:i.repository.name,issueNumber:i.number}),[e],{execute:n});async function s({id:i,text:p}){try{await(0,b.showToast)({style:b.Toast.Style.Animated,title:"Adding to project",message:p}),await a.addIssueToProject({issueId:e.id,projectId:i}),await t(),await(0,b.showToast)({style:b.Toast.Style.Success,title:"Added to project",message:p})}catch(l){await(0,b.showToast)({style:b.Toast.Style.Failure,title:"Failed adding to project",message:_(l)})}}return(0,U.jsx)(b.ActionPanel.Submenu,{title:"Add to Project",icon:{source:"project.svg",tintColor:b.Color.PrimaryText},shortcut:{macOS:{modifiers:["cmd","shift"],key:"p"},Windows:{modifiers:["ctrl","shift"],key:"p"}},onOpen:()=>r(!0),children:u?(0,U.jsx)(b.Action,{title:"Loading\u2026"}):o?.repository?.projectsV2.nodes?.map(i=>i?(0,U.jsx)(b.Action,{title:i.title,onAction:()=>s({id:i.id,text:i.title})},i.id):null)})}function rS({issue:e,mutate:t}){let{github:a}=x(),[n,r]=(0,yn.useState)(!1),{data:o,isLoading:u}=(0,cn.useCachedPromise)(async p=>a.milestonesForRepository({owner:p.repository.owner.login,name:p.repository.name}),[e],{execute:n});async function s(){try{await(0,b.showToast)({style:b.Toast.Style.Animated,title:"Removing milestone"}),await a.changeIssueMilestone({issueId:e.id,milestoneId:null}),await t(),await(0,b.showToast)({style:b.Toast.Style.Success,title:"Removed milestone"})}catch(p){await(0,b.showToast)({style:b.Toast.Style.Failure,title:"Failed removing milestone",message:_(p)})}}async function i({id:p,text:l}){try{await(0,b.showToast)({style:b.Toast.Style.Animated,title:"Setting milestone",message:l}),await a.changeIssueMilestone({issueId:e.id,milestoneId:p}),await t(),await(0,b.showToast)({style:b.Toast.Style.Success,title:"Milestone set",message:l})}catch(c){await(0,b.showToast)({style:b.Toast.Style.Failure,title:"Failed setting milestone",message:_(c)})}}return(0,U.jsx)(b.ActionPanel.Submenu,{title:"Set Milestone",icon:{source:"milestone.svg",tintColor:b.Color.PrimaryText},shortcut:{macOS:{modifiers:["cmd","shift"],key:"m"},Windows:{modifiers:["ctrl","shift"],key:"m"}},onOpen:()=>r(!0),children:u?(0,U.jsx)(b.Action,{title:"Loading\u2026"}):(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(b.Action,{title:"No Milestone",onAction:()=>s()}),o?.repository?.milestones?.nodes?.map(p=>p?(0,U.jsx)(b.Action,{title:p.title,onAction:()=>i({id:p.id,text:p.title}),autoFocus:e.milestone?.id===p.id},p.id):null)]})})}var ne=require("@raycast/api"),ku=w(K()),ju=require("date-fns");var oe=require("react/jsx-runtime");function Ro({initialIssue:e,mutateList:t}){let{github:a}=x(),n=ft(),{data:r,isLoading:o,mutate:u}=(0,ku.useCachedPromise)(async c=>(await a.issueDetails({nodeId:c})).node,[e.id],{initialData:e}),s=`# ${r.title}`;r?.body&&(s+=`

${r.body}`);let i=pn(r),p=ln(r),l=r.linkedBranches.nodes?.length?r.linkedBranches.nodes[0]?.ref?.name:null;return(0,oe.jsx)(ne.Detail,{isLoading:o,markdown:s,navigationTitle:`#${r.number}`,metadata:(0,oe.jsxs)(ne.Detail.Metadata,{children:[(0,oe.jsx)(ne.Detail.Metadata.Label,{title:"Repository",text:r.repository.nameWithOwner}),(0,oe.jsx)(ne.Detail.Metadata.TagList,{title:"Status",children:(0,oe.jsx)(ne.Detail.Metadata.TagList.Item,{...i})}),l?(0,oe.jsx)(ne.Detail.Metadata.Label,{title:"Branch",icon:{source:"branch.svg",tintColor:ne.Color.PrimaryText},text:l}):null,r.updatedAt?(0,oe.jsx)(ne.Detail.Metadata.Label,{title:"Updated",text:(0,ju.format)(new Date(r.updatedAt),"dd MMM")}):null,(0,oe.jsx)(ne.Detail.Metadata.Label,{title:"Author",...p}),r.assignees&&r.assignees.totalCount>0?(0,oe.jsx)(ne.Detail.Metadata.TagList,{title:Ve(r.assignees.totalCount,"Assignee"),children:r.assignees.nodes?.map(c=>{if(!c)return null;let S=J(c);return(0,oe.jsx)(ne.Detail.Metadata.TagList.Item,{...S},c.id)})}):null,r.labels&&r.labels.totalCount>0?(0,oe.jsx)(ne.Detail.Metadata.TagList,{title:Ve(r.labels.totalCount,"Label"),children:r.labels.nodes?.map(c=>c?(0,oe.jsx)(ne.Detail.Metadata.TagList.Item,{text:c.name,color:c.color},c.id):null)}):null,r.projectsV2&&r.projectsV2.totalCount>0?(0,oe.jsx)(ne.Detail.Metadata.TagList,{title:Ve(r.projectsV2.totalCount,"Project"),children:r.projectsV2.nodes?.map(c=>c?(0,oe.jsx)(ne.Detail.Metadata.TagList.Item,{text:c.title},c.id):null)}):null,r.milestone?(0,oe.jsx)(ne.Detail.Metadata.Label,{title:"Milestone",text:r.milestone.title}):null]}),actions:(0,oe.jsx)(rr,{issue:r,viewer:n,mutateList:t,mutateDetail:u})})}var nr=require("react/jsx-runtime");function fo({issue:e,viewer:t,mutateList:a,sortQuery:n,setSortQuery:r}){let o=new Date(e.updatedAt),u=ln(e),s=pn(e),i=[{date:o,tooltip:`Updated: ${(0,zu.format)(o,"EEEE d MMMM yyyy 'at' HH:mm")}`},{icon:u.icon,tooltip:`Author: ${u.text}`}];e.comments.totalCount>0&&i.unshift({text:`${e.comments.totalCount}`,icon:At.Icon.Bubble}),e.linkedBranches?.nodes?.length&&i.unshift({icon:{source:"branch.svg",tintColor:At.Color.SecondaryText},tooltip:e.linkedBranches.nodes[0]?.ref?.name});let p=[`${e.number}`];return e.author?.login&&p.push(e.author.login),(0,nr.jsx)(At.List.Item,{title:e.title,subtitle:{value:`#${e.number}`,tooltip:`Repository: ${e.repository.nameWithOwner}`},icon:{value:s.icon,tooltip:`Status: ${s.text}`},keywords:p,accessories:i,actions:(0,nr.jsx)(rr,{issue:e,mutateList:a,viewer:t,sortQuery:n,setSortQuery:r,children:(0,nr.jsx)(At.Action.Push,{title:"Show Details",icon:At.Icon.Sidebar,target:(0,nr.jsx)(Ro,{initialIssue:e,viewer:t,mutateList:a})})})},e.id)}var ut=require("react/jsx-runtime"),nS=20;function oS(e){return(0,ut.jsxs)(We.List.Dropdown,{tooltip:"Status",value:e.value,onChange:t=>e.onChange(t),children:[(0,ut.jsx)(We.List.Dropdown.Item,{value:"open",title:"Open",icon:{source:"issue-open.svg",tintColor:We.Color.Green}}),(0,ut.jsx)(We.List.Dropdown.Item,{value:"closed",title:"Closed",icon:{source:"issue-closed.svg",tintColor:We.Color.Purple}}),(0,ut.jsx)(We.List.Dropdown.Item,{value:"all",title:"All",icon:{source:"issue-open.svg",tintColor:We.Color.PrimaryText}})]})}function $u(e){let{github:t}=x(),[a,n]=(0,Hu.useState)(""),[r,o]=(0,or.useCachedState)("status-filter","open",{cacheNamespace:"github-repo-issue"}),[u,s]=(0,or.useCachedState)("sort-query",qu,{cacheNamespace:"github-repo-issue"}),i=e.repo&&e.repo.length>0?`repo:${e.repo}`:"",{data:p,isLoading:l,mutate:c,pagination:S}=(0,or.useCachedPromise)((y,M,I)=>async m=>{let R=I==="all"?"":`is:${I}`,f=Nu(y,e.repo);if(f&&m.page===0)try{let D=(await t.issueByNumber(f)).repository?.issue,B=I==="all"||(I==="closed"?D?.closed:!D?.closed);if(D&&B)return{data:[D],hasMore:!1}}catch{}let A=await t.searchIssues({query:`is:issue ${R} ${M} ${i} ${Vu(y)}`.replace(/\s+/g," ").trim(),numberOfItems:nS,after:m.page>0?m.cursor:void 0});return{data:A.search.nodes?.map(E=>E)??[],hasMore:A.search.pageInfo.hasNextPage,cursor:A.search.pageInfo.endCursor??void 0}},[a,u,r]),g=ot(p??[]);return(0,ut.jsx)(We.List,{isLoading:l,onSearchTextChange:n,navigationTitle:e.repo,searchBarPlaceholder:"Filter by title or #123",throttle:!0,pagination:S,searchBarAccessory:(0,ut.jsx)(oS,{value:r,onChange:o}),children:(0,ut.jsx)(We.List.Section,{title:"Issues",subtitle:`${g.length}`,children:g.map(y=>(0,ut.jsx)(fo,{issue:y,mutateList:c,sortQuery:u,setSortQuery:s},y.id))})})}var Ie=require("@raycast/api"),ur=w(K()),ep=require("react");var we=require("@raycast/api"),xo=require("date-fns"),Xu=require("react");var d=require("@raycast/api"),ha=w(K()),Ea=require("react");var W=require("@raycast/api"),dn=w(K());var pt=require("react/jsx-runtime");function Ao({pullRequest:e,mutate:t}){let{github:a}=x(),{pop:n}=(0,W.useNavigation)(),{handleSubmit:r,itemProps:o}=(0,dn.useForm)({async onSubmit(u){try{await(0,W.showToast)({style:W.Toast.Style.Animated,title:"Adding Review"}),await a.addPullRequestReview({nodeId:e.id,body:u.comment,event:u.event}),await t(),n(),await(0,W.showToast)({style:W.Toast.Style.Success,title:"Review added"})}catch(s){await(0,W.showToast)({style:W.Toast.Style.Failure,title:"Failed to add review",message:_(s)})}},validation:{comment:dn.FormValidation.Required}});return(0,pt.jsxs)(W.Form,{actions:(0,pt.jsx)(W.ActionPanel,{children:(0,pt.jsx)(W.Action.SubmitForm,{title:"Submit",icon:W.Icon.Plus,onSubmit:r})}),children:[(0,pt.jsx)(W.Form.TextArea,{...o.comment,title:"Comment",placeholder:"Add your comments here (markdown is supported)",enableMarkdown:!0}),(0,pt.jsxs)(W.Form.Dropdown,{...o.event,title:"Review Type",children:[(0,pt.jsx)(W.Form.Dropdown.Item,{title:"Comment",value:"COMMENT"}),(0,pt.jsx)(W.Form.Dropdown.Item,{title:"Approve",value:"APPROVE"}),(0,pt.jsx)(W.Form.Dropdown.Item,{title:"Request changes",value:"REQUEST_CHANGES"})]})]})}var Sn=require("node:child_process"),Gu=require("node:fs"),Qu=w(require("node:path")),Po=require("node:util"),V=require("@raycast/api"),Pa=w(K());var Jt=require("react/jsx-runtime");function Eo({pullRequest:e}){let{repositoryCloneProtocol:t}=(0,V.getPreferenceValues)(),{itemProps:a,handleSubmit:n}=(0,Pa.useForm)({async onSubmit(r){let o=e.repository.name,u=Qu.default.join(r.clonePath[0],o),s=e.headRef?.name||e.headRefName;if(!s){await(0,V.showToast)({style:V.Toast.Style.Failure,title:"Branch name not found",message:"Unable to determine the branch name for this pull request."});return}let i=(0,Po.promisify)(Sn.exec),p=(0,Po.promisify)(Sn.execFile);try{if((0,Gu.existsSync)(u)){await(0,V.showToast)({title:`Switching to branch ${s}`,message:`in ${u}`,style:V.Toast.Style.Animated});let{stdout:l}=await i("git remote",{cwd:u}),c=l.trim().split(`
`)[0]||"origin";await i(`git fetch ${c} ${s}`,{cwd:u}),await i(`git checkout ${s}`,{cwd:u}),await i(`git reset --hard ${c}/${s}`,{cwd:u}),await(0,V.showToast)({style:V.Toast.Style.Success,title:"Switched to branch successfully",message:`Now on ${s}`})}else await(0,V.showToast)({title:`Cloning ${e.repository.nameWithOwner}`,message:`to ${u}`,style:V.Toast.Style.Animated}),await p("git",tr(e.repository.nameWithOwner,t,{gitFlags:["-b",s],targetDir:u})),await(0,V.showToast)({style:V.Toast.Style.Success,title:"Repository cloned successfully",message:`Checked out ${s}`});await(0,V.open)(u),await(0,V.popToRoot)(),await(0,V.closeMainWindow)()}catch(l){if(l instanceof Error&&l.message.includes("Repository not found")){await(0,Pa.showFailureToast)(l,{title:"Repository not found",message:"You may not have access to this repository. Try using SSH instead of HTTPS."});return}if(l instanceof Error&&l.message.includes("already exists")){await(0,Pa.showFailureToast)(l,{title:"The repository already exists",message:"Please choose a different directory to clone the repository."});return}await(0,Pa.showFailureToast)(l,{title:"Failed checking out pull request"})}}});return(0,Jt.jsxs)(V.Form,{navigationTitle:`Check out PR #${e.number}`,actions:(0,Jt.jsx)(V.ActionPanel,{children:(0,Jt.jsx)(V.Action.SubmitForm,{title:"Check out Pull Request",onSubmit:n})}),children:[(0,Jt.jsx)(V.Form.Description,{title:"Repository",text:`${e.repository.nameWithOwner} - ${e.headRef?.name||e.headRefName}`}),(0,Jt.jsx)(V.Form.FilePicker,{...a.clonePath,title:"Clone Path",info:"Select the directory where the repository should be cloned. If the repository already exists, it will switch to the PR branch.",allowMultipleSelection:!1,canChooseDirectories:!0,canChooseFiles:!1,storeValue:!0})]})}var be=require("@raycast/api"),Wu=w(K()),bn=require("date-fns");var ke=require("react/jsx-runtime");function ho({pullRequest:e}){let{github:t}=x(),{data:a,isLoading:n,pagination:r}=(0,Wu.useCachedPromise)(u=>async({cursor:s})=>{let p=(await t.pullRequestCommits({nodeId:u.id,numberOfItems:25,before:s})).node,l=p.commits.nodes?.filter(c=>c!=null)??[];return l.sort((c,S)=>{let g=c.commit.authoredDate,y=S.commit.authoredDate;return(0,bn.compareDesc)(new Date(g),new Date(y))}),{data:l,hasMore:p.commits.pageInfo.hasPreviousPage,cursor:p.commits.pageInfo.startCursor??void 0}},[e]),o=[...new Map((a??[]).map(u=>[u.commit.id,u])).values()];return(0,ke.jsx)(be.List,{navigationTitle:`#${e.number} Commits`,isLoading:n,pagination:r,children:o.map(u=>{let s=u.commit,i=new Date(s.authoredDate),p=[{date:i,tooltip:(0,bn.format)(i,"EEEE d MMMM yyyy 'at' HH:mm")}];if(s.statusCheckRollup?.state){let c=sn(s.statusCheckRollup.state);c&&p.unshift(c)}let l;if(s.author){let c={source:s.author.avatarUrl,mask:be.Image.Mask.Circle};l=s.author.name?{value:c,tooltip:s.author.name}:c}return(0,ke.jsx)(be.List.Item,{title:s.message,subtitle:{value:s.abbreviatedOid,tooltip:s.oid},accessories:p,...l?{icon:l}:{},actions:(0,ke.jsxs)(be.ActionPanel,{children:[(0,ke.jsx)(be.Action.OpenInBrowser,{title:"Open Commit in Browser",url:s.url}),(0,ke.jsx)(be.Action.OpenInBrowser,{title:"Open Commit Tree in Browser",url:s.treeUrl}),(0,ke.jsxs)(be.ActionPanel.Section,{children:[(0,ke.jsx)(be.Action.CopyToClipboard,{content:s.url,title:"Copy Commit URL",shortcut:{macOS:{modifiers:["cmd","shift"],key:","},Windows:{modifiers:["ctrl","shift"],key:","}}}),(0,ke.jsx)(be.Action.CopyToClipboard,{content:s.oid,title:"Copy Commit Hash",shortcut:{macOS:{modifiers:["cmd","shift"],key:"."},Windows:{modifiers:["ctrl","shift"],key:"."}}}),(0,ke.jsx)(be.Action.CopyToClipboard,{content:s.treeUrl,title:"Copy Commit Tree URL",shortcut:{macOS:{modifiers:["ctrl","shift"],key:","},Windows:{modifiers:["alt","shift"],key:","}}}),(0,ke.jsx)(be.Action.CopyToClipboard,{content:s.message,title:"Copy Commit Message",shortcut:{macOS:{modifiers:["ctrl","shift"],key:"."},Windows:{modifiers:["alt","shift"],key:"."}}})]})]})},s.id)})})}var Yu=require("node:crypto"),Z=require("@raycast/api"),gn=w(K());var ge=require("react/jsx-runtime"),Ku=100,iS=4;function Co({pullRequest:e}){let{octokit:t}=x(),{data:a,isLoading:n,pagination:r}=(0,gn.useCachedPromise)((s,i,p)=>async({page:l})=>{let{data:c}=await t.pulls.listFiles({owner:s,repo:i,pull_number:p,per_page:Ku,page:l+1});return{data:c,hasMore:c.length===Ku}},[e.repository.owner.login,e.repository.name,e.number],{async onError(s){await(0,gn.showFailureToast)(s,{title:"Failed loading changed files"})}}),o=a??[],u="additions"in e&&"deletions"in e?`+${e.additions} \u2212${e.deletions}`:void 0;return(0,ge.jsxs)(Z.List,{isLoading:n,isShowingDetail:n||o.length>0,pagination:r,navigationTitle:`#${e.number} Diff`,children:[(0,ge.jsx)(Z.List.Section,{title:Ve(o.length,"file",{withNumber:!0}),subtitle:u,children:o.map(s=>{let i=Eu(s.status);return(0,ge.jsx)(Z.List.Item,{title:s.filename,icon:{value:i.icon,tooltip:i.tooltip},subtitle:s.previous_filename?{value:s.previous_filename,tooltip:`${s.previous_filename} \u2192 ${s.filename}`}:void 0,accessories:[{text:{value:`+${s.additions}`,color:Z.Color.Green}},{text:{value:`\u2212${s.deletions}`,color:Z.Color.Red}}],detail:(0,ge.jsx)(Z.List.Item.Detail,{markdown:sS(s)}),actions:(0,ge.jsxs)(Z.ActionPanel,{title:s.filename,children:[(0,ge.jsx)(Z.Action.OpenInBrowser,{title:"Open File Diff in Browser",url:`${e.permalink}/files#diff-${pS(s.filename)}`}),(0,ge.jsx)(Z.Action.OpenInBrowser,{title:"Open Diff in Browser",url:`${e.permalink}/files`}),(0,ge.jsxs)(Z.ActionPanel.Section,{children:[(0,ge.jsx)(Z.Action.CopyToClipboard,{content:s.filename,title:"Copy File Path",shortcut:{macOS:{modifiers:["cmd","shift"],key:"."},Windows:{modifiers:["ctrl","shift"],key:"."}}}),s.patch?(0,ge.jsx)(Z.Action.CopyToClipboard,{content:s.patch,title:"Copy Patch",shortcut:{macOS:{modifiers:["cmd","shift"],key:","},Windows:{modifiers:["ctrl","shift"],key:","}}}):null]})]})},s.sha+s.filename)})}),(0,ge.jsx)(Z.List.EmptyView,{icon:Z.Icon.CodeBlock,title:"No changed files",description:"This pull request does not change any files.",actions:(0,ge.jsx)(Z.ActionPanel,{children:(0,ge.jsx)(Z.Action.OpenInBrowser,{title:"Open Diff in Browser",url:`${e.permalink}/files`})})})]})}function sS(e){if(!e.patch)return"_No text diff available (binary or too large). Open on GitHub to view._";let{patch:t,remainingLines:a}=hu(e.patch),n=uS(t),r=`${n}diff
${t}
${n}`;return a===0?r:`${r}

_\u2026 truncated, ${Ve(a,"more line",{withNumber:!0})}. Open the file on GitHub for the full diff._`}function uS(e){let t=0;for(let[a]of e.matchAll(/`+/g))t=Math.max(t,a.length);return"`".repeat(Math.max(iS,t+1))}function pS(e){return(0,Yu.createHash)("sha256").update(e).digest("hex")}var C=require("react/jsx-runtime");function ir({pullRequest:e,viewer:t,mutateList:a,mutateDetail:n,children:r,sortQuery:o,setSortQuery:u}){let{github:s}=x();async function i(){a&&await a(),n&&await n()}async function p(){try{await(0,d.showToast)({style:d.Toast.Style.Animated,title:`Reopening pull request #${e.number}`}),await s.reopenPullRequest({nodeId:e.id}),await i(),await(0,d.showToast)({style:d.Toast.Style.Success,title:`Pull request #${e.number} is now open`})}catch(N){await(0,d.showToast)({style:d.Toast.Style.Failure,title:"Failed reopening pull request",message:_(N)})}}async function l(){try{await(0,d.showToast)({style:d.Toast.Style.Animated,title:`Marking pull request #${e.number} as ready for review`}),await s.markPullRequestReadyForReview({nodeId:e.id}),await i(),await(0,d.showToast)({style:d.Toast.Style.Success,title:`Pull request #${e.number} is ready for review`})}catch(N){await(0,d.showToast)({style:d.Toast.Style.Failure,title:"Failed marking pull request as ready for review",message:_(N)})}}async function c(){try{await(0,d.showToast)({style:d.Toast.Style.Animated,title:`Closing pull request #${e.number}`}),await s.closePullRequest({nodeId:e.id}),await i(),await(0,d.showToast)({style:d.Toast.Style.Success,title:`Pull request #${e.number} closed`})}catch(N){await(0,d.showToast)({style:d.Toast.Style.Failure,title:"Failed closing pull request",message:_(N)})}}async function S(N){try{await(0,d.showToast)({style:d.Toast.Style.Animated,title:`Merging pull request #${e.number}`}),await s.mergePullRequest({nodeId:e.id,method:N}),await i(),await(0,d.showToast)({style:d.Toast.Style.Success,title:`Pull request #${e.number} merged`})}catch(ye){await(0,d.showToast)({style:d.Toast.Style.Failure,title:"Failed merging pull request",message:_(ye)})}}async function g(){try{await(0,d.showToast)({style:d.Toast.Style.Animated,title:`Adding pull request #${e.number} to merge queue`}),await s.addPullRequestToMergeQueue({nodeId:e.id}),await i(),await(0,d.showToast)({style:d.Toast.Style.Success,title:`Pull request #${e.number} added to merge queue`})}catch(N){await(0,d.showToast)({style:d.Toast.Style.Failure,title:"Failed adding pull request to merge queue",message:_(N)})}}async function y(){try{await(0,d.showToast)({style:d.Toast.Style.Animated,title:`Removing pull request #${e.number} from merge queue`}),await s.removePullRequestFromMergeQueue({nodeId:e.id}),await i(),await(0,d.showToast)({style:d.Toast.Style.Success,title:`Pull request #${e.number} removed from merge queue`})}catch(N){await(0,d.showToast)({style:d.Toast.Style.Failure,title:"Failed removing pull request from merge queue",message:_(N)})}}async function M(N){try{await(0,d.showToast)({style:d.Toast.Style.Animated,title:`Enabling auto-merge for pull request #${e.number}`}),await s.enablePullRequestAutoMerge({nodeId:e.id,mergeMethod:N}),await i(),await(0,d.showToast)({style:d.Toast.Style.Success,title:`Auto-merge enabled for pull request #${e.number}`})}catch(ye){await(0,d.showToast)({style:d.Toast.Style.Failure,title:"Failed enabling auto-merge",message:_(ye)})}}async function I(){try{await(0,d.showToast)({style:d.Toast.Style.Animated,title:`Disabling auto-merge for pull request #${e.number}`}),await s.disablePullRequestAutoMerge({nodeId:e.id}),await i(),await(0,d.showToast)({style:d.Toast.Style.Success,title:`Auto-merge disabled for pull request #${e.number}`})}catch(N){await(0,d.showToast)({style:d.Toast.Style.Failure,title:"Failed disabling auto-merge",message:_(N)})}}async function m(N){try{await(0,d.showToast)({style:d.Toast.Style.Animated,title:"Assigning to me"});let ye=e.assignees.nodes?.filter(He=>!!He).map(He=>He?.id)??[];await s.changePullRequestAssignees({pullRequestId:e.id,assigneeIds:[...ye,N]}),await i(),await(0,d.showToast)({style:d.Toast.Style.Success,title:"Assigned to me"})}catch(ye){await(0,d.showToast)({style:d.Toast.Style.Failure,title:"Failed assigning to me",message:_(ye)})}}async function R(N){try{await(0,d.showToast)({style:d.Toast.Style.Animated,title:"Un-assigning from me"});let ye=e.assignees.nodes?.filter(He=>!!He).map(He=>He?.id)??[];await s.changePullRequestAssignees({pullRequestId:e.id,assigneeIds:ye?.filter(He=>He!==N)}),await i(),await(0,d.showToast)({style:d.Toast.Style.Success,title:"Un-assigned from me"})}catch(ye){await(0,d.showToast)({style:d.Toast.Style.Failure,title:"Failed un-assigning from me",message:_(ye)})}}let f=!e.closed&&!e.isDraft&&e.mergeable==="MERGEABLE"&&e.mergeStateStatus!=="BLOCKED",A=!e.closed&&!e.merged,E=e.author?"isViewer"in e.author?e.author.isViewer:e.author.login===t?.login:!1,D=A&&e.isDraft&&E,B=[e.repository.mergeCommitAllowed&&"MERGE",e.repository.squashMergeAllowed&&"SQUASH",e.repository.rebaseMergeAllowed&&"REBASE"].filter(Boolean),H=A&&e.repository.autoMergeAllowed,q=f||H,Q=J(t),j=e.assignees.nodes?.some(N=>N?.isViewer),{isOpenInBrowser:Ee}=(0,d.getPreferenceValues)(),he=(0,C.jsx)(d.Action.OpenInBrowser,{url:e.permalink}),[T,ce]=Ee?[he,r]:[r,he];return(0,C.jsxs)(d.ActionPanel,{title:`#${e.number} in ${e.repository.nameWithOwner}`,children:[T,ce,(0,C.jsx)(d.Action.Push,{icon:d.Icon.Document,title:"Add Review",shortcut:{macOS:{modifiers:["cmd","shift"],key:"r"},Windows:{modifiers:["ctrl","shift"],key:"r"}},target:(0,C.jsx)(Ao,{pullRequest:e,mutate:i})}),(0,C.jsx)(d.Action.Push,{icon:{source:"commit.svg",tintColor:d.Color.PrimaryText},title:"See Commits",shortcut:d.Keyboard.Shortcut.Common.Copy,target:(0,C.jsx)(ho,{pullRequest:e})}),(0,C.jsx)(d.Action.Push,{icon:d.Icon.CodeBlock,title:"View Diff",shortcut:d.Keyboard.Shortcut.Common.RemoveAll,target:(0,C.jsx)(Co,{pullRequest:e})}),(0,C.jsx)(d.Action.Push,{icon:d.Icon.Download,title:"Checkout Pull Request",shortcut:d.Keyboard.Shortcut.Common.OpenWith,target:(0,C.jsx)(Eo,{pullRequest:e})}),q&&(0,C.jsxs)(d.ActionPanel.Section,{children:[e.isMergeQueueEnabled&&f&&!e.isInMergeQueue&&(0,C.jsx)(d.Action,{title:"Add to Merge Queue",icon:{source:"pull-request-merged.svg",tintColor:d.Color.PrimaryText},shortcut:{macOS:{modifiers:["cmd","shift"],key:"enter"},Windows:{modifiers:["ctrl","shift"],key:"enter"}},onAction:()=>g()}),e.isMergeQueueEnabled&&e.isInMergeQueue&&(0,C.jsx)(d.Action,{title:"Remove from Merge Queue",icon:{source:"pull-request-merged.svg",tintColor:d.Color.PrimaryText},shortcut:{macOS:{modifiers:["cmd","shift"],key:"enter"},Windows:{modifiers:["ctrl","shift"],key:"enter"}},onAction:()=>y()}),!e.isMergeQueueEnabled&&f?(0,C.jsxs)(C.Fragment,{children:[e.repository.mergeCommitAllowed?(0,C.jsx)(d.Action,{title:"Create Merge Commit",icon:{source:"pull-request-merged.svg",tintColor:d.Color.PrimaryText},shortcut:{macOS:{modifiers:["cmd","shift"],key:"enter"},Windows:{modifiers:["ctrl","shift"],key:"enter"}},onAction:()=>S("MERGE")}):null,e.repository.squashMergeAllowed?(0,C.jsx)(d.Action,{title:"Squash and Merge",icon:{source:"pull-request-merged.svg",tintColor:d.Color.PrimaryText},shortcut:{macOS:{modifiers:["ctrl","shift"],key:"enter"},Windows:{modifiers:["ctrl","alt","shift"],key:"enter"}},onAction:()=>S("SQUASH")}):null,e.repository.rebaseMergeAllowed?(0,C.jsx)(d.Action,{title:"Rebase and Merge",icon:{source:"pull-request-merged.svg",tintColor:d.Color.PrimaryText},shortcut:{macOS:{modifiers:["opt","shift"],key:"enter"},Windows:{modifiers:["alt","shift"],key:"enter"}},onAction:()=>S("REBASE")}):null]}):null,H&&!e.autoMergeRequest&&B.length===1&&(0,C.jsx)(d.Action,{title:"Enable Auto-Merge",icon:{source:"pull-request-merged.svg",tintColor:d.Color.PrimaryText},onAction:()=>M(B[0])}),H&&!e.autoMergeRequest&&B.length>1&&(0,C.jsx)(d.ActionPanel.Submenu,{title:"Enable Auto-Merge",icon:{source:"pull-request-merged.svg",tintColor:d.Color.PrimaryText},children:B.map(N=>(0,C.jsx)(d.Action,{title:fu(N),onAction:()=>M(N)},N))}),A&&e.autoMergeRequest&&(0,C.jsx)(d.Action,{title:"Disable Auto-Merge",icon:{source:"pull-request-merged.svg",tintColor:d.Color.PrimaryText},onAction:()=>I()})]}),(0,C.jsxs)(d.ActionPanel.Section,{children:[(0,C.jsx)(lS,{pullRequest:e,mutate:i}),t?(0,C.jsx)(d.Action,{title:j?"Unassign from Me":"Assign to Me",icon:Q.icon,shortcut:{macOS:{modifiers:["cmd","shift"],key:"i"},Windows:{modifiers:["ctrl","shift"],key:"i"}},onAction:()=>j?R(t.id):m(t.id)}):null,(0,C.jsx)(cS,{pullRequest:e,mutate:i}),(0,C.jsx)(yS,{pullRequest:e,mutate:i}),(0,C.jsx)(dS,{pullRequest:e,mutate:i}),(0,C.jsx)(SS,{pullRequest:e,mutate:i})]}),(0,C.jsxs)(d.ActionPanel.Section,{children:[D?(0,C.jsx)(d.Action,{title:"Ready for Review",icon:{source:"pull-request-open.svg",tintColor:d.Color.PrimaryText},shortcut:{macOS:{modifiers:["cmd","shift"],key:"d"},Windows:{modifiers:["ctrl","shift"],key:"d"}},onAction:()=>l()}):null,e.closed&&!e.merged?(0,C.jsx)(d.Action,{title:"Reopen Pull Request",icon:{source:"pull-request-open.svg",tintColor:d.Color.PrimaryText},onAction:()=>p()}):null,e.closed?null:(0,C.jsx)(d.Action,{title:"Close Pull Request",style:d.Action.Style.Destructive,icon:d.Icon.XMarkCircle,onAction:()=>c()})]}),(0,C.jsxs)(d.ActionPanel.Section,{children:[(0,C.jsx)(d.Action.CopyToClipboard,{content:e.number,title:"Copy Pull Request Number",shortcut:{macOS:{modifiers:["cmd","shift"],key:"."},Windows:{modifiers:["ctrl","shift"],key:"."}}}),e.headRef?(0,C.jsx)(d.Action.CopyToClipboard,{content:e.headRef.name,title:"Copy Branch Name",shortcut:{macOS:{modifiers:["ctrl","shift"],key:"."},Windows:{modifiers:["alt","shift"],key:"."}}}):null,(0,C.jsx)(d.Action.CopyToClipboard,{content:e.permalink,title:"Copy Pull Request URL",shortcut:{macOS:{modifiers:["cmd","shift"],key:","},Windows:{modifiers:["ctrl","shift"],key:","}}}),(0,C.jsx)(d.Action.CopyToClipboard,{content:e.title,title:"Copy Pull Request Title",shortcut:{macOS:{modifiers:["ctrl","shift"],key:","},Windows:{modifiers:["alt","shift"],key:","}}}),(0,C.jsx)(d.Action.CopyToClipboard,{content:`[${e.title}](${e.permalink})`,title:"Copy Markdown URL",shortcut:{macOS:{modifiers:["cmd","shift"],key:";"},Windows:{modifiers:["ctrl","shift"],key:";"}}})]}),(0,C.jsxs)(d.ActionPanel.Section,{children:[(0,C.jsx)(Bt,{data:Du,sortQuery:o,setSortQuery:u}),(0,C.jsx)(d.Action,{icon:d.Icon.ArrowClockwise,title:"Refresh",onAction:i,shortcut:d.Keyboard.Shortcut.Common.Refresh})]})]})}function lS({pullRequest:e,mutate:t}){let{github:a}=x(),[n,r]=(0,Ea.useState)(!1),[o,u]=(0,Ea.useState)(""),{data:s,isLoading:i}=(0,ha.useCachedPromise)(async(l,c)=>a.repositoryCollaboratorsForPullRequests({owner:l.repository.owner.login,name:l.repository.name,pullRequestNumber:l.number,searchQuery:c}),[e,o],{execute:n});async function p({id:l,text:c}){try{await(0,d.showToast)({style:d.Toast.Style.Animated,title:"Requesting review",message:c}),await a.requestReview({pullRequestId:e.id,collaboratorId:l}),await t(),await(0,d.showToast)({style:d.Toast.Style.Success,title:"Requested review",message:c})}catch(S){await(0,d.showToast)({style:d.Toast.Style.Failure,title:"Failed requesting review",message:_(S)})}}return(0,C.jsx)(d.ActionPanel.Submenu,{title:"Request Review",icon:d.Icon.AddPerson,shortcut:{macOS:{modifiers:["ctrl","shift"],key:"r"},Windows:{modifiers:["alt","shift"],key:"r"}},onOpen:()=>r(!0),onSearchTextChange:u,isLoading:i,children:s?.repository?.collaborators?.nodes?.filter(l=>!l?.isViewer).map(l=>{if(!l)return null;let c=J(l);return(0,C.jsx)(d.Action,{title:c.text,icon:c.icon,onAction:()=>p({id:l.id,text:c.text})},l.id)})})}function cS({pullRequest:e,mutate:t}){let{github:a}=x(),[n,r]=(0,Ea.useState)(!1),{data:o,isLoading:u}=(0,ha.useCachedPromise)(async i=>a.repositoryCollaboratorsForPullRequests({owner:i.repository.owner.login,name:i.repository.name,pullRequestNumber:i.number}),[e],{execute:n});async function s({id:i,text:p}){try{await(0,d.showToast)({style:d.Toast.Style.Animated,title:"Adding assignee",message:p});let l=o?.repository?.pullRequest?.assignees.nodes?.filter(c=>!!c).map(c=>c?.id)??[];await a.changePullRequestAssignees({pullRequestId:e.id,assigneeIds:[...l,i]}),await t(),await(0,d.showToast)({style:d.Toast.Style.Success,title:"Added assignee",message:p})}catch(l){await(0,d.showToast)({style:d.Toast.Style.Failure,title:"Failed adding assignee",message:_(l)})}}return(0,C.jsx)(d.ActionPanel.Submenu,{title:"Add Assignee",icon:d.Icon.AddPerson,shortcut:{macOS:{modifiers:["cmd","shift"],key:"a"},Windows:{modifiers:["ctrl","shift"],key:"a"}},onOpen:()=>r(!0),children:u?(0,C.jsx)(d.Action,{title:"Loading\u2026"}):o?.repository?.collaborators?.nodes?.map(i=>{if(!i)return null;let p=J(i);return(0,C.jsx)(d.Action,{title:p.text,icon:p.icon,onAction:()=>s({id:i.id,text:p.text})},i.id)})})}function yS({pullRequest:e,mutate:t}){let{github:a}=x(),[n,r]=(0,Ea.useState)(!1),{data:o,isLoading:u}=(0,ha.useCachedPromise)(async i=>a.repositoryProjectsForPullRequests({owner:i.repository.owner.login,name:i.repository.name,pullRequestNumber:i.number}),[e],{execute:n});async function s({id:i,text:p}){try{await(0,d.showToast)({style:d.Toast.Style.Animated,title:"Adding to project",message:p}),await a.addPullRequestToProject({pullRequestId:e.id,projectId:i}),await t(),await(0,d.showToast)({style:d.Toast.Style.Success,title:"Added to project",message:p})}catch(l){await(0,d.showToast)({style:d.Toast.Style.Failure,title:"Failed adding to project",message:_(l)})}}return(0,C.jsx)(d.ActionPanel.Submenu,{title:"Add to Project",icon:{source:"project.svg",tintColor:d.Color.PrimaryText},shortcut:{macOS:{modifiers:["cmd","shift"],key:"p"},Windows:{modifiers:["ctrl","shift"],key:"p"}},onOpen:()=>r(!0),children:u?(0,C.jsx)(d.Action,{title:"Loading\u2026"}):o?.repository?.projectsV2.nodes?.map(i=>i?(0,C.jsx)(d.Action,{title:i.title,onAction:()=>s({id:i.id,text:i.title})},i.id):null)})}function dS({pullRequest:e,mutate:t}){let{github:a}=x(),[n,r]=(0,Ea.useState)(!1),{data:o,isLoading:u}=(0,ha.useCachedPromise)(async p=>a.milestonesForRepository({owner:p.repository.owner.login,name:p.repository.name}),[e],{execute:n});async function s(){try{await(0,d.showToast)({style:d.Toast.Style.Animated,title:"Removing milestone"}),await a.changePullRequestMilestone({pullRequestId:e.id,milestoneId:null}),await t(),await(0,d.showToast)({style:d.Toast.Style.Success,title:"Removed milestone"})}catch(p){await(0,d.showToast)({style:d.Toast.Style.Failure,title:"Failed removing milestone",message:_(p)})}}async function i({id:p,text:l}){try{await(0,d.showToast)({style:d.Toast.Style.Animated,title:"Setting milestone",message:l}),await a.changePullRequestMilestone({pullRequestId:e.id,milestoneId:p}),await t(),await(0,d.showToast)({style:d.Toast.Style.Success,title:"Milestone set",message:l})}catch(c){await(0,d.showToast)({style:d.Toast.Style.Failure,title:"Failed setting milestone",message:_(c)})}}return(0,C.jsx)(d.ActionPanel.Submenu,{title:"Set Milestone",icon:{source:"milestone.svg",tintColor:d.Color.PrimaryText},shortcut:{macOS:{modifiers:["cmd","shift"],key:"m"},Windows:{modifiers:["ctrl","shift"],key:"m"}},onOpen:()=>r(!0),children:u?(0,C.jsx)(d.Action,{title:"Loading\u2026"}):(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(d.Action,{title:"No Milestone",onAction:()=>s()}),o?.repository?.milestones?.nodes?.map(p=>p?(0,C.jsx)(d.Action,{title:p.title,onAction:()=>i({id:p.id,text:p.title}),autoFocus:e.milestone?.id===p.id},p.id):null)]})})}function SS({pullRequest:e}){let{github:t}=x(),{data:a,isLoading:n}=(0,ha.useCachedPromise)(async r=>{let s=(await t.commentsForPullRequest({owner:r.repository.owner.login,name:r.repository.name,number:r.number}))?.repository?.pullRequest?.comments.nodes?.filter(l=>l?.author?.login==="vercel");return s?.length?s.pop()?.body?.match(/\[Visit Preview\]\([^)]+\)/)?.[0]?.replace("[Visit Preview](","").replace(")","")??void 0:void 0},[e]);return(0,C.jsx)(C.Fragment,{children:n?(0,C.jsx)(d.Action,{title:"Loading\u2026"}):a&&(0,C.jsx)(d.Action.OpenInBrowser,{title:"Open Vercel Preview",shortcut:{macOS:{modifiers:["cmd","shift"],key:"v"},Windows:{modifiers:["ctrl","shift"],key:"v"}},url:a,icon:{source:"vercel.svg",tintColor:d.Color.PrimaryText}})})}var k=require("@raycast/api"),Ju=w(K()),Zu=require("date-fns");var G=require("react/jsx-runtime");function Do({initialPullRequest:e,mutateList:t}){let{github:a}=x(),n=ft(),{data:r,isLoading:o,mutate:u}=(0,Ju.useCachedPromise)(async S=>(await a.pullRequestDetails({nodeId:S})).node,[e.id],{initialData:e}),s=`# ${r.title}`;r?.body&&(s+=`

${r.body}`);let i=ar(r),p=nn(r.commits.nodes?.[0]?.commit.statusCheckRollup?.state),l=on(r),c=Au(r);return(0,G.jsx)(k.Detail,{isLoading:o,markdown:s,navigationTitle:`#${r.number}`,metadata:(0,G.jsxs)(k.Detail.Metadata,{children:[(0,G.jsx)(k.Detail.Metadata.Label,{title:"Repository",text:r.repository.nameWithOwner}),(0,G.jsxs)(k.Detail.Metadata.TagList,{title:"Status",children:[(0,G.jsx)(k.Detail.Metadata.TagList.Item,{...i}),r.autoMergeRequest&&(0,G.jsx)(k.Detail.Metadata.TagList.Item,{text:"Auto-merge",color:k.Color.Yellow})]}),p?(0,G.jsx)(k.Detail.Metadata.Label,{title:"Checks",text:p.text,icon:k.Icon[p.icon]}):null,(0,G.jsx)(k.Detail.Metadata.Label,{title:"From",text:r.headRef?.name??r.headRefName}),r.baseRef?(0,G.jsx)(k.Detail.Metadata.Label,{title:"Into",text:r.baseRef?.name??r.baseRefName}):null,r.additions&&r.deletions?(0,G.jsx)(k.Detail.Metadata.Label,{title:"Code Changes",text:`+${r.additions}  -${r.deletions}`}):null,r.createdAt?(0,G.jsx)(k.Detail.Metadata.Label,{title:"Created",text:(0,Zu.format)(new Date(r.createdAt),"dd MMM")}):null,(0,G.jsx)(k.Detail.Metadata.Label,{title:"Author",...l}),c.length>0?(0,G.jsx)(k.Detail.Metadata.TagList,{title:Ve(c.length,"Reviewer"),children:c.map(S=>S?(0,G.jsx)(k.Detail.Metadata.TagList.Item,{...S},S.id):null)}):null,r.assignees&&r.assignees.totalCount>0?(0,G.jsx)(k.Detail.Metadata.TagList,{title:Ve(r.assignees.totalCount,"Assignee"),children:r.assignees.nodes?.map(S=>{if(!S)return null;let g=J(S);return(0,G.jsx)(k.Detail.Metadata.TagList.Item,{...g},S.id)})}):null,r.labels&&r.labels.totalCount>0?(0,G.jsx)(k.Detail.Metadata.TagList,{title:Ve(r.labels.totalCount,"Label"),children:r.labels.nodes?.map(S=>S?(0,G.jsx)(k.Detail.Metadata.TagList.Item,{text:S.name,color:S.color},S.id):null)}):null,r.projectsV2&&r.projectsV2.totalCount>0?(0,G.jsx)(k.Detail.Metadata.TagList,{title:Ve(r.projectsV2.totalCount,"Project"),children:r.projectsV2.nodes?.map(S=>S?(0,G.jsx)(k.Detail.Metadata.TagList.Item,{text:S.title},S.id):null)}):null,r.milestone?(0,G.jsx)(k.Detail.Metadata.Label,{title:"Milestone",text:r.milestone.title}):null]}),actions:(0,G.jsx)(ir,{pullRequest:r,viewer:n,mutateList:t,mutateDetail:u})})}var sr=require("react/jsx-runtime");function vo({pullRequest:e,viewer:t,mutateList:a,sortQuery:n,setSortQuery:r,showAuthor:o=!1}){let u=new Date(e.updatedAt),s=(0,Xu.useMemo)(()=>Pu(e),[e]),i=o?on(e):null,p=ar(e),l=Cu(e.reviewDecision),c=[{text:(0,xo.format)(u,"MMM dd"),tooltip:`Updated: ${(0,xo.format)(u,"EEEE d MMMM yyyy 'at' HH:mm")}`}];if(c.unshift({text:{value:`${s}`,color:s>0?we.Color.PrimaryText:we.Color.SecondaryText},icon:we.Icon.Bubble}),c.unshift(l??{icon:{source:we.Icon.Circle,tintColor:we.Color.SecondaryText},tooltip:"No review requested"}),e.repository.autoMergeAllowed&&e.autoMergeRequest&&c.unshift({tag:{value:"Auto-merge",color:we.Color.Yellow}}),e.commits.nodes){let g=e.commits.nodes[0]?.commit.statusCheckRollup?.state,y=g?sn(g):null;y&&c.unshift(y)}i&&c.splice(c.length-1,0,{icon:i.icon,tooltip:`Author: ${i.text}`});let S=[`${e.number}`];return e.author?.login&&S.push(e.author.login),(0,sr.jsx)(we.List.Item,{title:e.title,subtitle:{value:`#${e.number}`,tooltip:`Repository: ${e.repository.nameWithOwner}`},icon:{value:p.icon,tooltip:`Status: ${p.text}`},keywords:S,accessories:c,actions:(0,sr.jsx)(ir,{pullRequest:e,viewer:t,mutateList:a,sortQuery:n,setSortQuery:r,children:(0,sr.jsx)(we.Action.Push,{title:"Show Details",icon:we.Icon.Sidebar,target:(0,sr.jsx)(Do,{initialPullRequest:e,viewer:t,mutateList:a})})})},e.id)}var je=require("react/jsx-runtime"),bS=20;function gS(e){return(0,je.jsxs)(Ie.List.Dropdown,{tooltip:"Status",value:e.value,onChange:t=>e.onChange(t),children:[(0,je.jsx)(Ie.List.Dropdown.Item,{value:"open",title:"Open",icon:{source:"pull-request-open.svg",tintColor:Ie.Color.Green}}),(0,je.jsx)(Ie.List.Dropdown.Item,{value:"merged",title:"Merged",icon:{source:"pull-request-merged.svg",tintColor:Ie.Color.Purple}}),(0,je.jsx)(Ie.List.Dropdown.Item,{value:"draft",title:"Draft",icon:{source:"pull-request-draft.svg",tintColor:Ie.Color.SecondaryText}}),(0,je.jsx)(Ie.List.Dropdown.Item,{value:"closed",title:"Closed",icon:{source:"pull-request-closed.svg",tintColor:Ie.Color.Red}}),(0,je.jsx)(Ie.List.Dropdown.Item,{value:"all",title:"All",icon:{source:"pull-request-open.svg",tintColor:Ie.Color.PrimaryText}})]})}function tp(e){let{github:t}=x(),[a,n]=(0,ep.useState)(""),[r,o]=(0,ur.useCachedState)("status-filter","open",{cacheNamespace:"github-repo-pr"}),[u,s]=(0,ur.useCachedState)("sort-query",xu,{cacheNamespace:"github-repo-pr"}),i=r==="all"?"":`is:${r}`,{data:p,isLoading:l,mutate:c,pagination:S}=(0,ur.useCachedPromise)((y,M,I,m)=>async R=>{let f=y&&y.length>0?`repo:${y}`:"",A=await t.searchPullRequests({query:`is:pr ${m} ${f} ${I} archived:false ${M}`.replace(/\s+/g," ").trim(),numberOfItems:bS,after:R.page>0?R.cursor:void 0});return{data:A.search.edges?.map(E=>E?.node).filter(E=>E!=null)??[],hasMore:A.search.pageInfo.hasNextPage,cursor:A.search.pageInfo.endCursor??void 0}},[e.repo,a,u,i]),g=ot(p??[]);return(0,je.jsx)(Ie.List,{isLoading:l,onSearchTextChange:n,navigationTitle:e.repo,throttle:!0,pagination:S,searchBarAccessory:(0,je.jsx)(gS,{value:r,onChange:o}),children:(0,je.jsx)(Ie.List.Section,{title:"Pull Requests",subtitle:`${g.length}`,children:g.map(y=>(0,je.jsx)(vo,{showAuthor:!0,pullRequest:y,mutateList:c,sortQuery:u,setSortQuery:s},y.id))})})}var Zt=require("@raycast/api");var ap=w(K());var IS=/\.(md|markdown|mdown|mkdn?)$/i;function rp(e){let{octokit:t}=x(),[a,n]=e.nameWithOwner.split("/");return(0,ap.useCachedPromise)(async(r,o)=>{try{let{data:u}=await t.repos.getReadme({owner:r,repo:o});if(u.encoding!=="base64"||!u.content)return{markdown:"> This README is too large to preview here. Open the repository in your browser to read it.",found:!0};let s=Buffer.from(u.content,"base64").toString("utf-8");return{markdown:IS.test(u.name)?gu(s,u.download_url??"",u.path):`\`\`\`
${s}
\`\`\``,found:!0}}catch(u){if(u.status===404)return{markdown:"",found:!1};throw u}},[a,n])}var Ca=require("react/jsx-runtime");function Uo({repository:e}){let{data:t,isLoading:a}=rp(e),n=t&&!t.found?`# ${e.nameWithOwner}

> This repository doesn't have a README.`:t?.markdown??"";return(0,Ca.jsx)(Zt.Detail,{isLoading:a,navigationTitle:`${e.nameWithOwner} \xB7 README`,markdown:n,actions:(0,Ca.jsxs)(Zt.ActionPanel,{title:e.nameWithOwner,children:[(0,Ca.jsx)(Zt.Action.OpenInBrowser,{url:e.url}),(0,Ca.jsx)(Zt.Action.CopyToClipboard,{content:e.url,title:"Copy Repository URL"})]})})}var Pe=require("@raycast/api"),np=w(K());var Ke=require("react/jsx-runtime"),mS=25;function _o(e){let{github:t}=x(),[a,n]=e.repository.nameWithOwner.split("/"),{data:r,isLoading:o,pagination:u}=(0,np.useCachedPromise)((i,p)=>async l=>{let S=(await t.repositoryReleases({owner:i,name:p,numberOfItems:mS,after:l.page>0?l.cursor:void 0})).repository?.releases;return{data:S?.nodes?.filter(g=>g!=null)??[],hasMore:S?.pageInfo?.hasNextPage??!1,cursor:S?.pageInfo?.endCursor??void 0}},[a,n]),s=ot(r??[]);return(0,Ke.jsx)(Pe.List,{isLoading:o,navigationTitle:e.repository.nameWithOwner,pagination:u,children:s.map(i=>(0,Ke.jsx)(Pe.List.Item,{title:i.name||i.tagName,subtitle:i.tagName,actions:(0,Ke.jsxs)(Pe.ActionPanel,{title:i.tagName,children:[i.description&&(0,Ke.jsx)(Pe.Action.Push,{icon:Pe.Icon.Eye,title:"View Release Detail",target:(0,Ke.jsx)(MS,{release:i})}),(0,Ke.jsx)(Pe.Action.OpenInBrowser,{url:i.url})]}),accessories:i.publishedAt?[{date:new Date(i.publishedAt),tooltip:`Published at: ${new Date(i.publishedAt).toLocaleString()}`}]:void 0},i.id))})}function MS(e){return(0,Ke.jsx)(Pe.Detail,{markdown:e.release.description,actions:(0,Ke.jsx)(Pe.ActionPanel,{title:e.release.tagName,children:(0,Ke.jsx)(Pe.Action.OpenInBrowser,{url:e.release.url})})})}var v=require("react/jsx-runtime");function wo({repository:e,mutateList:t,onVisit:a,onUpdate:n,onRemove:r,setSortQuery:o,sortQuery:u,sortTypesData:s}){let{github:i}=x(),{baseClonePath:p,repositoryCloneProtocol:l,application:c}=(0,P.getPreferenceValues)(),{vscodeBuild:S}=(0,P.getPreferenceValues)(),g=S||"vscode";function y(m){let R={...e,viewerHasStarred:m,stargazerCount:Math.max(0,e.stargazerCount+(m?1:-1))};return n?.(R),R}async function M(){await(0,P.showToast)({style:P.Toast.Style.Animated,title:"Starring repository",message:e.name});try{await i.addStar({repositoryId:e.id});let m=y(!0);await t(void 0,{optimisticUpdate(R){return Array.isArray(R)?R.map(f=>f.id===m.id?{...f,...m}:f):R}}),await(0,P.showToast)({style:P.Toast.Style.Success,title:"Starred repository",message:e.name})}catch(m){await(0,P.showToast)({style:P.Toast.Style.Failure,title:"Failed starring repository",message:_(m)})}}async function I(){await(0,P.showToast)({style:P.Toast.Style.Animated,title:"Removing star from repository",message:e.name});try{await i.removeStar({repositoryId:e.id});let m=y(!1);await t(void 0,{optimisticUpdate(R){return Array.isArray(R)?R.map(f=>f.id===m.id?{...f,...m}:f):R}}),await(0,P.showToast)({style:P.Toast.Style.Success,title:"Removed star from repository",message:e.name})}catch(m){await(0,P.showToast)({style:P.Toast.Style.Failure,title:"Failed removing star from repository",message:_(m)})}}return(0,v.jsxs)(P.ActionPanel,{title:e.nameWithOwner,children:[(0,v.jsxs)(P.ActionPanel.Section,{children:[(0,v.jsx)(P.Action.OpenInBrowser,{url:e.url,onOpen:()=>a(e)}),(0,v.jsx)(P.ActionPanel.Submenu,{icon:P.Icon.Globe,title:"Open in Web IDE",shortcut:P.Keyboard.Shortcut.Common.Open,children:nu.map(m=>(0,v.jsx)(P.Action.OpenInBrowser,{title:m.title,icon:m.icon||(0,op.getFavicon)(m.baseUrl),url:m.baseUrl+e.nameWithOwner,shortcut:m.shortcut,onOpen:()=>a(e)},m.title))}),p&&c&&(0,v.jsx)(P.Action,{icon:P.Icon.Terminal,title:"Clone and Open (Default Path)",onAction:()=>{a(e),ou(e)},shortcut:P.Keyboard.Shortcut.Common.CopyName}),(0,v.jsx)(P.Action.Push,{icon:P.Icon.Terminal,title:"Clone with Options (Choose Path)",target:(0,v.jsx)(So,{repository:e}),shortcut:{macOS:{modifiers:["cmd","opt","shift"],key:"c"},Windows:{modifiers:["ctrl","alt","shift"],key:"c"}},onPush:()=>a(e)}),(0,v.jsx)(P.Action.Push,{icon:P.Icon.Download,title:"Download as ZIP",target:(0,v.jsx)(go,{repository:e}),shortcut:{macOS:{modifiers:["cmd","shift"],key:"d"},Windows:{modifiers:["ctrl","shift"],key:"d"}},onPush:()=>a(e)}),(0,v.jsx)(P.Action.OpenInBrowser,{icon:{source:"vscode.svg",tintColor:P.Color.PrimaryText},title:"Clone in VS Code",url:`${g}://vscode.git/clone?url=${e.url}`,shortcut:P.Keyboard.Shortcut.Common.Copy,onOpen:()=>a(e)}),e.viewerHasStarred?(0,v.jsx)(P.Action,{title:"Unstar",icon:P.Icon.Star,onAction:I,shortcut:P.Keyboard.Shortcut.Common.Pin}):(0,v.jsx)(P.Action,{title:"Star",icon:{source:"star-filled.svg",tintColor:P.Color.PrimaryText},onAction:M,shortcut:P.Keyboard.Shortcut.Common.Pin})]}),(0,v.jsxs)(P.ActionPanel.Section,{title:"Open in Raycast",children:[(0,v.jsx)(P.Action.Push,{title:"Show Readme",icon:P.Icon.Book,shortcut:{macOS:{modifiers:["cmd","opt"],key:"r"},Windows:{modifiers:["ctrl","alt"],key:"r"}},target:(0,v.jsx)(Uo,{repository:e}),onPush:()=>a(e)}),(0,v.jsx)(P.Action.Push,{title:"Show Issues",icon:{source:"issue-open.svg",tintColor:P.Color.PrimaryText},shortcut:{macOS:{modifiers:["cmd"],key:"i"},Windows:{modifiers:["ctrl"],key:"i"}},target:(0,v.jsx)($u,{repo:e.nameWithOwner}),onPush:()=>a(e)}),(0,v.jsx)(P.Action.Push,{title:"Show Pull Requests",icon:{source:"pull-request-open.svg",tintColor:P.Color.PrimaryText},shortcut:{macOS:{modifiers:["cmd"],key:"m"},Windows:{modifiers:["ctrl"],key:"m"}},target:(0,v.jsx)(tp,{repo:e.nameWithOwner}),onPush:()=>a(e)}),(0,v.jsx)(P.Action.Push,{icon:P.Icon.List,title:"Show Releases",shortcut:{macOS:{modifiers:["cmd","shift"],key:"r"},Windows:{modifiers:["ctrl","shift"],key:"r"}},target:(0,v.jsx)(_o,{repository:e}),onPush:()=>a(e)}),(0,v.jsx)(P.Action.Push,{icon:P.Icon.SpeechBubble,title:"Show Discussions",shortcut:{macOS:{modifiers:["cmd","ctrl","opt"],key:"d"},Windows:{modifiers:["ctrl","alt"],key:"d"}},target:(0,v.jsx)(Lu,{repository:e.nameWithOwner}),onPush:()=>a(e)})]}),(0,v.jsxs)(P.ActionPanel.Section,{title:"Open in Browser",children:[(0,v.jsx)(P.Action.OpenInBrowser,{icon:{source:"pull-request-open.svg",tintColor:P.Color.PrimaryText},title:"Open Pull Requests",url:`${e.url}/pulls`,shortcut:{macOS:{modifiers:["cmd","shift"],key:"m"},Windows:{modifiers:["ctrl","shift"],key:"m"}},onOpen:()=>a(e)}),(0,v.jsx)(P.Action.OpenInBrowser,{icon:{source:"issue-open.svg",tintColor:P.Color.PrimaryText},title:"Open Issues",url:`${e.url}/issues`,shortcut:{macOS:{modifiers:["cmd","shift"],key:"i"},Windows:{modifiers:["ctrl","shift"],key:"i"}},onOpen:()=>a(e)}),(0,v.jsx)(P.Action.OpenInBrowser,{icon:{source:"book.svg",tintColor:P.Color.PrimaryText},title:"Open Wiki",url:`${e.url}/wiki`,shortcut:{macOS:{modifiers:["cmd","shift"],key:"w"},Windows:{modifiers:["ctrl","shift"],key:"w"}},onOpen:()=>a(e)}),(0,v.jsx)(P.Action.OpenInBrowser,{icon:{source:"project.svg",tintColor:P.Color.PrimaryText},title:"Open Projects",url:`${e.url}/projects`,shortcut:{macOS:{modifiers:["cmd","shift","opt"],key:"p"},Windows:{modifiers:["ctrl","shift","alt"],key:"p"}},onOpen:()=>a(e)}),(0,v.jsx)(P.Action.OpenInBrowser,{icon:P.Icon.SpeechBubble,title:"Open Discussions",url:`${e.url}/discussions`,onOpen:()=>a(e)})]}),(0,v.jsxs)(P.ActionPanel.Section,{children:[(0,v.jsx)(P.Action.CopyToClipboard,{content:e.url,title:"Copy Repository URL",shortcut:P.Keyboard.Shortcut.Common.CopyPath}),(0,v.jsx)(P.Action.CopyToClipboard,{content:yu(e.nameWithOwner,l),title:"Copy Clone Command",shortcut:{macOS:{modifiers:["cmd","shift"],key:"."},Windows:{modifiers:["ctrl","shift"],key:"."}}}),(0,v.jsx)(P.Action.CopyToClipboard,{content:e.nameWithOwner,title:"Copy Name with Owner",shortcut:P.Keyboard.Shortcut.Common.CopyName}),(0,v.jsx)(P.Action.CopyToClipboard,{content:e.name,title:"Copy Repository Name"}),(0,v.jsx)(P.Action.CopyToClipboard,{content:e.owner.login,title:"Copy Repository Owner"})]}),(0,v.jsx)(P.ActionPanel.Section,{children:(0,v.jsx)(Bt,{data:s,sortQuery:u,setSortQuery:o})}),r?(0,v.jsx)(P.ActionPanel.Section,{children:(0,v.jsx)(P.Action,{title:"Remove from Recently Visited",icon:P.Icon.Trash,style:P.Action.Style.Destructive,shortcut:P.Keyboard.Shortcut.Common.Remove,onAction:()=>r(e)})}):null]})}var To=require("react/jsx-runtime");function In({repository:e,mutateList:t,onVisit:a,onUpdate:n,onRemove:r,sortQuery:o,setSortQuery:u,sortTypesData:s}){let i=J(e.owner),p=e.stargazerCount,l=e.pushedAt?new Date(e.pushedAt):e.updatedAt?new Date(e.updatedAt):void 0,c=[],S=e.primaryLanguage,g=l?(0,qt.isToday)(l)?`${(0,qt.differenceInHours)(Date.now(),l)}h`:(0,qt.format)(l,"MMM d"):void 0;if(S||g){let M=[S?.name,g].filter(Boolean),I=[S?`Language: ${S.name}`:void 0,l?`Updated ${(0,qt.formatDistanceToNow)(l,{addSuffix:!0})}`:void 0].filter(Boolean);c.push({text:M.join(" \u2022 "),tooltip:I.join(" \u2022 ")})}e.isArchived&&c.unshift({tag:{value:"",color:Xt.Color.Orange},icon:Xt.Icon.Tray,tooltip:"This repository is archived"}),e.isFork&&c.unshift({icon:{source:"fork.svg",tintColor:Xt.Color.Purple},tooltip:"This repository is a fork"});let y=e.viewerHasStarred?"\u2605":"\u2606";return(0,To.jsx)(Xt.List.Item,{icon:i.icon,title:e.nameWithOwner,...p>0?{subtitle:{value:`${y} ${p}`,tooltip:e.viewerHasStarred?"Starred \xB7 Number of Stars":"Number of Stars"}}:{},accessories:c,actions:(0,To.jsx)(wo,{repository:e,onVisit:a,onUpdate:n,onRemove:r,mutateList:t,sortQuery:o,setSortQuery:u,sortTypesData:s})})}var ie=require("@raycast/api");var lt=require("react/jsx-runtime");function Oo(e){let t=ft(),a=t?.organizations?.nodes?.filter(o=>o!=null)??[],n=a.map(o=>o.login),r=a.length>1;return(0,lt.jsxs)(ie.List.Dropdown,{tooltip:"Filter Repositories",onChange:e.onFilterChange,storeValue:!0,children:[(0,lt.jsxs)(ie.List.Dropdown.Section,{children:[(0,lt.jsx)(ie.List.Dropdown.Item,{title:"All Repositories",icon:ie.Icon.List,value:""}),t&&a.length>0?(0,lt.jsx)(ie.List.Dropdown.Item,{title:"My Repositories",icon:ie.Icon.Person,value:po({userLogin:t.login,orgLogins:n})}):null,r?(0,lt.jsx)(ie.List.Dropdown.Item,{title:"My Organizations",icon:ie.Icon.Building,value:po({orgLogins:n})}):null]}),(0,lt.jsxs)(ie.List.Dropdown.Section,{children:[t?(0,lt.jsx)(ie.List.Dropdown.Item,{icon:{source:t.avatarUrl??ie.Icon.PersonCircle,mask:ie.Image.Mask.Circle},title:t.login,value:`user:${t.login}`}):null,a.map(o=>(0,lt.jsx)(ie.List.Dropdown.Item,{icon:{source:o.avatarUrl??ie.Icon.PersonCircle,mask:ie.Image.Mask.Circle},title:o.login,value:`org:${o.login}`},o.login))]})]})}var ip=w(K());var sp=(0,ip.withAccessToken)(Gs);var Pt=require("react/jsx-runtime");function RS(){let{github:e}=x(),t=(0,Da.getPreferenceValues)(),[a,n]=(0,ze.useState)(""),[r,o]=(0,ze.useState)(null),[u,s]=(0,mn.useCachedState)("sort-query",su,{cacheNamespace:"github-search-repo"}),i=co,{data:p,visitRepository:l,updateRepository:c,removeRepository:S}=iu(a,r),g=(0,ze.useMemo)(()=>`${r} ${a} ${u} fork:${t.includeForks} ${t.includeArchived?"":"archived:false"}`.toLowerCase(),[a,r,u,t.includeForks,t.includeArchived]),{data:y,isLoading:M,error:I,mutate:m,pagination:R}=(0,mn.useCachedPromise)(q=>async Q=>{if(!q)return{data:[],hasMore:!1};let j=await e.searchRepositories({query:q,numberOfItems:Qs(),after:Q.page>0?Q.cursor:void 0});return{data:vu(j.search.nodes),hasMore:j.search.pageInfo.hasNextPage,cursor:j.search.pageInfo.endCursor??void 0}},[a.trim()||r?.trim()?g:null],{keepPreviousData:!1}),f=(0,ze.useMemo)(()=>ot(y??[]),[y]),A=(0,ze.useMemo)(()=>new Set(f.map(q=>q.id)),[f]);(0,ze.useEffect)(()=>p.forEach(q=>f.find(Q=>Q.id===q.id&&l(Q))),[f]);let E=(0,ze.useMemo)(()=>p.filter(q=>A.has(q.id)),[p,A]),D=(0,ze.useMemo)(()=>new Set(E.map(q=>q.id)),[E]),B=(0,ze.useMemo)(()=>f.filter(q=>!D.has(q.id)),[D,f]),H=a.trim()&&f.length>0?E:p;return(0,Pt.jsxs)(Da.List,{isLoading:M,searchBarPlaceholder:"Search in public and private repositories",onSearchTextChange:n,searchBarAccessory:(0,Pt.jsx)(Oo,{onFilterChange:o}),throttle:!t.disableThrottle,pagination:R,children:[H.length>0?(0,Pt.jsx)(Da.List.Section,{title:a.trim()?"Visited Repositories":"Recent Visited Repositories",subtitle:String(H.length),children:H.map(q=>(0,Pt.jsx)(In,{repository:q,onVisit:l,onUpdate:c,onRemove:S,mutateList:m,sortQuery:u,setSortQuery:s,sortTypesData:i},q.id))}):null,y?(0,Pt.jsx)(Da.List.Section,{title:a?"Search Results":"Found Repositories",subtitle:`${B.length}`,children:B.map(q=>(0,Pt.jsx)(In,{repository:q,onVisit:l,onUpdate:c,mutateList:m,sortQuery:u,setSortQuery:s,sortTypesData:i},q.id))}):null,(0,Pt.jsx)(uo,{searchText:a,isLoading:M,error:I})]})}var fS=sp(RS);
