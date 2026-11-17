"use strict";var ld=Object.create;var Pr=Object.defineProperty;var pd=Object.getOwnPropertyDescriptor;var cd=Object.getOwnPropertyNames;var yd=Object.getPrototypeOf,dd=Object.prototype.hasOwnProperty;var Io=(t,e,a)=>()=>{if(a)throw a[0];try{return t&&(e=t(t=0)),e}catch(r){throw a=[r],r}};var f=(t,e)=>()=>{try{return e||t((e={exports:{}}).exports,e),e.exports}catch(a){throw e=0,a}},kt=(t,e)=>{for(var a in e)Pr(t,a,{get:e[a],enumerable:!0})},hr=(t,e,a,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of cd(e))!dd.call(t,n)&&n!==a&&Pr(t,n,{get:()=>e[n],enumerable:!(r=pd(e,n))||r.enumerable});return t},re=(t,e,a)=>(hr(t,e,"default"),a&&hr(a,e,"default")),j=(t,e,a)=>(a=t!=null?ld(yd(t)):{},hr(e||!t||!t.__esModule?Pr(a,"default",{value:t,enumerable:!0}):a,t)),Sd=t=>hr(Pr({},"__esModule",{value:!0}),t);var Hs=f(Er=>{"use strict";Object.defineProperty(Er,"__esModule",{value:!0});Er.useDeepMemo=void 0;var Mo=require("react"),bd=require("dequal/lite");function gd(t){let e=(0,Mo.useRef)(t),a=(0,Mo.useRef)(0);return(0,bd.dequal)(t,e.current)||(e.current=t,a.current+=1),(0,Mo.useMemo)(()=>e.current,[a.current])}Er.useDeepMemo=gd});var Fe=f(Cr=>{"use strict";Object.defineProperty(Cr,"__esModule",{value:!0});Cr.useLatest=void 0;var Id=require("react");function Md(t){let e=(0,Id.useRef)(t);return e.current=t,e}Cr.useLatest=Md});var ma=f(Ue=>{"use strict";var md=Ue&&Ue.__createBinding||(Object.create?(function(t,e,a,r){r===void 0&&(r=a);var n=Object.getOwnPropertyDescriptor(e,a);(!n||("get"in n?!e.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return e[a]}}),Object.defineProperty(t,r,n)}):(function(t,e,a,r){r===void 0&&(r=a),t[r]=e[a]})),fd=Ue&&Ue.__setModuleDefault||(Object.create?(function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}):function(t,e){t.default=e}),Qs=Ue&&Ue.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var a in t)a!=="default"&&Object.prototype.hasOwnProperty.call(t,a)&&md(e,t,a);return fd(e,t),e};Object.defineProperty(Ue,"__esModule",{value:!0});Ue.showFailureToast=void 0;var Rd=Qs(require("fs")),Ad=Qs(require("path")),Vt=require("@raycast/api");function hd(t,e){let a=t instanceof Error?t.message:String(t);return(0,Vt.showToast)({style:Vt.Toast.Style.Failure,title:e?.title??"Something went wrong",message:e?.message??a,primaryAction:e?.primaryAction??Gs(t),secondaryAction:e?.primaryAction?Gs(t):void 0})}Ue.showFailureToast=hd;var Gs=t=>{let e=!0,a="[Extension Name]...",r="";try{let i=JSON.parse(Rd.readFileSync(Ad.join(Vt.environment.assetsPath,"..","package.json"),"utf8"));a=`[${i.title}]...`,r=`https://raycast.com/${i.owner||i.author}/${i.name}`,(!i.owner||i.access==="public")&&(e=!1)}catch{}let n=Vt.environment.isDevelopment||e,o=t instanceof Error?t?.stack||t?.message||"":String(t);return{title:n?"Copy Logs":"Report Error",onAction(i){i.hide(),n?Vt.Clipboard.copy(o):(0,Vt.open)(`https://github.com/raycast/extensions/issues/new?&labels=extension%2Cbug&template=extension_bug_report.yml&title=${encodeURIComponent(a)}&extension-url=${encodeURI(r)}&description=${encodeURIComponent(`#### Error:
\`\`\`
${o}
\`\`\`
`)}`)}}}});var Ft=f(Dr=>{"use strict";Object.defineProperty(Dr,"__esModule",{value:!0});Dr.usePromise=void 0;var pe=require("react"),fa=require("@raycast/api"),Pd=Hs(),Xe=Fe(),Ed=ma();function Cd(t,e,a){let r=(0,pe.useRef)(0),[n,o]=(0,pe.useState)({isLoading:!0}),i=(0,Xe.useLatest)(t),s=(0,Xe.useLatest)(a?.abortable),u=(0,Xe.useLatest)(e||[]),l=(0,Xe.useLatest)(a?.onError),c=(0,Xe.useLatest)(a?.onData),p=(0,Xe.useLatest)(a?.onWillExecute),y=(0,Xe.useLatest)(a?.failureToastOptions),g=(0,Xe.useLatest)(n.data),S=(0,pe.useRef)(),d=(0,pe.useRef)({page:0}),b=(0,pe.useRef)(!1),I=(0,pe.useRef)(!0),M=(0,pe.useRef)(50),R=(0,pe.useCallback)((...O)=>{let v=++r.current;s.current&&(s.current.current?.abort(),s.current.current=new AbortController),p.current?.(O),o(w=>({...w,isLoading:!0}));let U=Dd(i.current)(...O);function Y(w){return w.name=="AbortError"||v===r.current&&(l.current?l.current(w):fa.environment.launchType!==fa.LaunchType.Background&&(0,Ed.showFailureToast)(w,{title:"Failed to fetch latest data",primaryAction:{title:"Retry",onAction(X){X.hide(),S.current?.(...u.current||[])}},...y.current}),o({error:w,isLoading:!1})),w}return typeof U=="function"?(b.current=!0,U(d.current).then(({data:w,hasMore:X,cursor:Ze})=>(v===r.current&&(d.current&&(d.current.cursor=Ze,d.current.lastItem=w?.[w.length-1]),c.current&&c.current(w,d.current),X&&(M.current=w.length),I.current=X,o(ge=>d.current.page===0?{data:w,isLoading:!1}:{data:(ge.data||[])?.concat(w),isLoading:!1})),w),w=>(I.current=!1,Y(w)))):(b.current=!1,U.then(w=>(v===r.current&&(c.current&&c.current(w),o({data:w,isLoading:!1})),w),Y))},[s,c,l,u,i,o,S,p,d,y]);S.current=R;let m=(0,pe.useCallback)(()=>{d.current={page:0};let O=u.current||[];return R(...O)},[R,u]),h=(0,pe.useCallback)(async(O,v)=>{let U;try{if(v?.optimisticUpdate){typeof v?.rollbackOnError!="function"&&v?.rollbackOnError!==!1&&(U=structuredClone(g.current?.value));let Y=v.optimisticUpdate;o(w=>({...w,data:Y(w.data)}))}return await O}catch(Y){if(typeof v?.rollbackOnError=="function"){let w=v.rollbackOnError;o(X=>({...X,data:w(X.data)}))}else v?.optimisticUpdate&&v?.rollbackOnError!==!1&&o(w=>({...w,data:U}));throw Y}finally{v?.shouldRevalidateAfter!==!1&&(fa.environment.launchType===fa.LaunchType.Background||fa.environment.commandMode==="menu-bar"?await m():m())}},[m,g,o]),A=(0,pe.useCallback)(()=>{d.current.page+=1;let O=u.current||[];R(...O)},[d,u,R]);(0,pe.useEffect)(()=>{d.current={page:0},a?.execute!==!1?R(...e||[]):s.current&&s.current.current?.abort()},[(0,Pd.useDeepMemo)([e,a?.execute,R]),s,d]),(0,pe.useEffect)(()=>()=>{s.current&&s.current.current?.abort()},[s]);let D=a?.execute!==!1?n.isLoading:!1,P={...n,isLoading:D},x=b.current?{pageSize:M.current,hasMore:I.current,onLoadMore:A}:void 0;return{...P,revalidate:m,mutate:h,pagination:x}}Dr.usePromise=Cd;function Dd(t){return t===Promise.all||t===Promise.race||t===Promise.resolve||t===Promise.reject?t.bind(Promise):t}});var et=f(we=>{"use strict";var vd=we&&we.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(we,"__esModule",{value:!0});we.hash=we.reviver=we.replacer=void 0;var _d=vd(require("object-hash"));function xd(t,e){let a=this[t];return a instanceof Date?`__raycast_cached_date__${a.toString()}`:Buffer.isBuffer(a)?`__raycast_cached_buffer__${a.toString("base64")}`:e}we.replacer=xd;function Ud(t,e){return typeof e=="string"&&e.startsWith("__raycast_cached_date__")?new Date(e.replace("__raycast_cached_date__","")):typeof e=="string"&&e.startsWith("__raycast_cached_buffer__")?Buffer.from(e.replace("__raycast_cached_buffer__",""),"base64"):e}we.reviver=Ud;function wd(t,e){return(0,_d.default)(t,{replacer:a=>a instanceof URLSearchParams?a.toString():a,...e})}we.hash=wd});var _r=f(vr=>{"use strict";Object.defineProperty(vr,"__esModule",{value:!0});vr.useCachedState=void 0;var mo=require("react"),Td=require("@raycast/api"),fo=Fe(),Ws=et(),Od=Symbol("cache without namespace"),Ks=new Map;function Ld(t,e,a){let r=a?.cacheNamespace||Od,n=Ks.get(r)||Ks.set(r,new Td.Cache({namespace:a?.cacheNamespace})).get(r);if(!n)throw new Error("Missing cache");let o=(0,fo.useLatest)(t),i=(0,fo.useLatest)(e),s=(0,mo.useSyncExternalStore)(n.subscribe,()=>{try{return n.get(o.current)}catch(p){console.error("Could not get Cache data:",p);return}}),u=(0,mo.useMemo)(()=>{if(typeof s<"u"){if(s==="undefined")return;try{return JSON.parse(s,Ws.reviver)}catch(p){return console.warn("The cached data is corrupted",p),i.current}}else return i.current},[s,i]),l=(0,fo.useLatest)(u),c=(0,mo.useCallback)(p=>{let y=typeof p=="function"?p(l.current):p;if(typeof y>"u")n.set(o.current,"undefined");else{let g=JSON.stringify(y,Ws.replacer);n.set(o.current,g)}return y},[n,o,l]);return[u,c]}vr.useCachedState=Ld});var Aa=f(xr=>{"use strict";Object.defineProperty(xr,"__esModule",{value:!0});xr.useCachedPromise=void 0;var Ra=require("react"),qd=_r(),Bd=Ft(),Nd=Fe(),Ys=et(),jt=Symbol();function kd(t,e,a){let{initialData:r,keepPreviousData:n,internal_cacheKeySuffix:o,...i}=a||{},s=(0,Ra.useRef)(),[u,l]=(0,qd.useCachedState)((0,Ys.hash)(e||[])+o,jt,{cacheNamespace:(0,Ys.hash)(t)}),c=(0,Ra.useRef)(u!==jt?u:r),p=(0,Ra.useRef)(void 0),{mutate:y,revalidate:g,...S}=(0,Bd.usePromise)(t,e||[],{...i,onData(R,m){p.current=m,i.onData&&i.onData(R,m),!(m&&m.page>0)&&(s.current="promise",c.current=R,l(R))}}),d,b=S.pagination;p.current&&p.current.page>0&&S.data?d=S.data:s.current==="promise"?d=c.current:n&&u!==jt?(d=u,b&&(b.hasMore=!0,b.pageSize=u.length)):n&&u===jt?d=c.current:u!==jt?(d=u,b&&(b.hasMore=!0,b.pageSize=u.length)):d=r;let I=(0,Nd.useLatest)(d),M=(0,Ra.useCallback)(async(R,m)=>{let h;try{if(m?.optimisticUpdate){typeof m?.rollbackOnError!="function"&&m?.rollbackOnError!==!1&&(h=structuredClone(I.current));let A=m.optimisticUpdate(I.current);s.current="cache",c.current=A,l(A)}return await y(R,{shouldRevalidateAfter:m?.shouldRevalidateAfter})}catch(A){if(typeof m?.rollbackOnError=="function"){let D=m.rollbackOnError(I.current);s.current="cache",c.current=D,l(D)}else m?.optimisticUpdate&&m?.rollbackOnError!==!1&&(s.current="cache",c.current=h,l(h));throw A}},[l,y,I,c,s]);return(0,Ra.useEffect)(()=>{u!==jt&&(s.current="cache",c.current=u)},[u]),{data:d,isLoading:S.isLoading,error:S.error,mutate:p.current&&p.current.page>0?y:M,pagination:b,revalidate:g}}xr.useCachedPromise=kd});var uu=f((De,su)=>{"use strict";Object.defineProperty(De,"__esModule",{value:!0});function Gt(t){return t&&typeof t=="object"&&"default"in t?t.default:t}var Ce=Gt(require("stream")),eu=Gt(require("http")),wr=Gt(require("url")),tu=Gt(require("whatwg-url")),Vd=Gt(require("https")),At=Gt(require("zlib")),Fd=Ce.Readable,je=Symbol("buffer"),Ro=Symbol("type"),Pa=class t{constructor(){this[Ro]="";let e=arguments[0],a=arguments[1],r=[],n=0;if(e){let i=e,s=Number(i.length);for(let u=0;u<s;u++){let l=i[u],c;l instanceof Buffer?c=l:ArrayBuffer.isView(l)?c=Buffer.from(l.buffer,l.byteOffset,l.byteLength):l instanceof ArrayBuffer?c=Buffer.from(l):l instanceof t?c=l[je]:c=Buffer.from(typeof l=="string"?l:String(l)),n+=c.length,r.push(c)}}this[je]=Buffer.concat(r);let o=a&&a.type!==void 0&&String(a.type).toLowerCase();o&&!/[^\u0020-\u007E]/.test(o)&&(this[Ro]=o)}get size(){return this[je].length}get type(){return this[Ro]}text(){return Promise.resolve(this[je].toString())}arrayBuffer(){let e=this[je],a=e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength);return Promise.resolve(a)}stream(){let e=new Fd;return e._read=function(){},e.push(this[je]),e.push(null),e}toString(){return"[object Blob]"}slice(){let e=this.size,a=arguments[0],r=arguments[1],n,o;a===void 0?n=0:a<0?n=Math.max(e+a,0):n=Math.min(a,e),r===void 0?o=e:r<0?o=Math.max(e+r,0):o=Math.min(r,e);let i=Math.max(o-n,0),u=this[je].slice(n,n+i),l=new t([],{type:arguments[2]});return l[je]=u,l}};Object.defineProperties(Pa.prototype,{size:{enumerable:!0},type:{enumerable:!0},slice:{enumerable:!0}});Object.defineProperty(Pa.prototype,Symbol.toStringTag,{value:"Blob",writable:!1,enumerable:!1,configurable:!0});function W(t,e,a){Error.call(this,t),this.message=t,this.type=e,a&&(this.code=this.errno=a.code),Error.captureStackTrace(this,this.constructor)}W.prototype=Object.create(Error.prototype);W.prototype.constructor=W;W.prototype.name="FetchError";var Eo;try{Eo=require("encoding").convert}catch{}var $e=Symbol("Body internals"),Js=Ce.PassThrough;function H(t){var e=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.size;let n=r===void 0?0:r;var o=a.timeout;let i=o===void 0?0:o;t==null?t=null:au(t)?t=Buffer.from(t.toString()):Ca(t)||Buffer.isBuffer(t)||(Object.prototype.toString.call(t)==="[object ArrayBuffer]"?t=Buffer.from(t):ArrayBuffer.isView(t)?t=Buffer.from(t.buffer,t.byteOffset,t.byteLength):t instanceof Ce||(t=Buffer.from(String(t)))),this[$e]={body:t,disturbed:!1,error:null},this.size=n,this.timeout=i,t instanceof Ce&&t.on("error",function(s){let u=s.name==="AbortError"?s:new W(`Invalid response body while trying to fetch ${e.url}: ${s.message}`,"system",s);e[$e].error=u})}H.prototype={get body(){return this[$e].body},get bodyUsed(){return this[$e].disturbed},arrayBuffer(){return zt.call(this).then(function(t){return t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength)})},blob(){let t=this.headers&&this.headers.get("content-type")||"";return zt.call(this).then(function(e){return Object.assign(new Pa([],{type:t.toLowerCase()}),{[je]:e})})},json(){var t=this;return zt.call(this).then(function(e){try{return JSON.parse(e.toString())}catch(a){return H.Promise.reject(new W(`invalid json response body at ${t.url} reason: ${a.message}`,"invalid-json"))}})},text(){return zt.call(this).then(function(t){return t.toString()})},buffer(){return zt.call(this)},textConverted(){var t=this;return zt.call(this).then(function(e){return jd(e,t.headers)})}};Object.defineProperties(H.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0}});H.mixIn=function(t){for(let e of Object.getOwnPropertyNames(H.prototype))if(!(e in t)){let a=Object.getOwnPropertyDescriptor(H.prototype,e);Object.defineProperty(t,e,a)}};function zt(){var t=this;if(this[$e].disturbed)return H.Promise.reject(new TypeError(`body used already for: ${this.url}`));if(this[$e].disturbed=!0,this[$e].error)return H.Promise.reject(this[$e].error);let e=this.body;if(e===null)return H.Promise.resolve(Buffer.alloc(0));if(Ca(e)&&(e=e.stream()),Buffer.isBuffer(e))return H.Promise.resolve(e);if(!(e instanceof Ce))return H.Promise.resolve(Buffer.alloc(0));let a=[],r=0,n=!1;return new H.Promise(function(o,i){let s;t.timeout&&(s=setTimeout(function(){n=!0,i(new W(`Response timeout while trying to fetch ${t.url} (over ${t.timeout}ms)`,"body-timeout"))},t.timeout)),e.on("error",function(u){u.name==="AbortError"?(n=!0,i(u)):i(new W(`Invalid response body while trying to fetch ${t.url}: ${u.message}`,"system",u))}),e.on("data",function(u){if(!(n||u===null)){if(t.size&&r+u.length>t.size){n=!0,i(new W(`content size at ${t.url} over limit: ${t.size}`,"max-size"));return}r+=u.length,a.push(u)}}),e.on("end",function(){if(!n){clearTimeout(s);try{o(Buffer.concat(a,r))}catch(u){i(new W(`Could not create Buffer from response body for ${t.url}: ${u.message}`,"system",u))}}})})}function jd(t,e){if(typeof Eo!="function")throw new Error("The package `encoding` must be installed to use the textConverted() function");let a=e.get("content-type"),r="utf-8",n,o;return a&&(n=/charset=([^;]*)/i.exec(a)),o=t.slice(0,1024).toString(),!n&&o&&(n=/<meta.+?charset=(['"])(.+?)\1/i.exec(o)),!n&&o&&(n=/<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(o),n||(n=/<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(o),n&&n.pop()),n&&(n=/charset=(.*)/i.exec(n.pop()))),!n&&o&&(n=/<\?xml.+?encoding=(['"])(.+?)\1/i.exec(o)),n&&(r=n.pop(),(r==="gb2312"||r==="gbk")&&(r="gb18030")),Eo(t,"UTF-8",r).toString()}function au(t){return typeof t!="object"||typeof t.append!="function"||typeof t.delete!="function"||typeof t.get!="function"||typeof t.getAll!="function"||typeof t.has!="function"||typeof t.set!="function"?!1:t.constructor.name==="URLSearchParams"||Object.prototype.toString.call(t)==="[object URLSearchParams]"||typeof t.sort=="function"}function Ca(t){return typeof t=="object"&&typeof t.arrayBuffer=="function"&&typeof t.type=="string"&&typeof t.stream=="function"&&typeof t.constructor=="function"&&typeof t.constructor.name=="string"&&/^(Blob|File)$/.test(t.constructor.name)&&/^(Blob|File)$/.test(t[Symbol.toStringTag])}function ru(t){let e,a,r=t.body;if(t.bodyUsed)throw new Error("cannot clone body after it is used");return r instanceof Ce&&typeof r.getBoundary!="function"&&(e=new Js,a=new Js,r.pipe(e),r.pipe(a),t[$e].body=e,r=a),r}function nu(t){return t===null?null:typeof t=="string"?"text/plain;charset=UTF-8":au(t)?"application/x-www-form-urlencoded;charset=UTF-8":Ca(t)?t.type||null:Buffer.isBuffer(t)||Object.prototype.toString.call(t)==="[object ArrayBuffer]"||ArrayBuffer.isView(t)?null:typeof t.getBoundary=="function"?`multipart/form-data;boundary=${t.getBoundary()}`:t instanceof Ce?null:"text/plain;charset=UTF-8"}function ou(t){let e=t.body;return e===null?0:Ca(e)?e.size:Buffer.isBuffer(e)?e.length:e&&typeof e.getLengthSync=="function"&&(e._lengthRetrievers&&e._lengthRetrievers.length==0||e.hasKnownLength&&e.hasKnownLength())?e.getLengthSync():null}function zd(t,e){let a=e.body;a===null?t.end():Ca(a)?a.stream().pipe(t):Buffer.isBuffer(a)?(t.write(a),t.end()):a.pipe(t)}H.Promise=global.Promise;var iu=/[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/,Co=/[^\t\x20-\x7e\x80-\xff]/;function ha(t){if(t=`${t}`,iu.test(t)||t==="")throw new TypeError(`${t} is not a legal HTTP header name`)}function Zs(t){if(t=`${t}`,Co.test(t))throw new TypeError(`${t} is not a legal HTTP header value`)}function $t(t,e){e=e.toLowerCase();for(let a in t)if(a.toLowerCase()===e)return a}var F=Symbol("map"),me=class t{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:void 0;if(this[F]=Object.create(null),e instanceof t){let a=e.raw(),r=Object.keys(a);for(let n of r)for(let o of a[n])this.append(n,o);return}if(e!=null)if(typeof e=="object"){let a=e[Symbol.iterator];if(a!=null){if(typeof a!="function")throw new TypeError("Header pairs must be iterable");let r=[];for(let n of e){if(typeof n!="object"||typeof n[Symbol.iterator]!="function")throw new TypeError("Each header pair must be iterable");r.push(Array.from(n))}for(let n of r){if(n.length!==2)throw new TypeError("Each header pair must be a name/value tuple");this.append(n[0],n[1])}}else for(let r of Object.keys(e)){let n=e[r];this.append(r,n)}}else throw new TypeError("Provided initializer must be an object")}get(e){e=`${e}`,ha(e);let a=$t(this[F],e);return a===void 0?null:this[F][a].join(", ")}forEach(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:void 0,r=Do(this),n=0;for(;n<r.length;){var o=r[n];let i=o[0],s=o[1];e.call(a,s,i,this),r=Do(this),n++}}set(e,a){e=`${e}`,a=`${a}`,ha(e),Zs(a);let r=$t(this[F],e);this[F][r!==void 0?r:e]=[a]}append(e,a){e=`${e}`,a=`${a}`,ha(e),Zs(a);let r=$t(this[F],e);r!==void 0?this[F][r].push(a):this[F][e]=[a]}has(e){return e=`${e}`,ha(e),$t(this[F],e)!==void 0}delete(e){e=`${e}`,ha(e);let a=$t(this[F],e);a!==void 0&&delete this[F][a]}raw(){return this[F]}keys(){return Ao(this,"key")}values(){return Ao(this,"value")}[Symbol.iterator](){return Ao(this,"key+value")}};me.prototype.entries=me.prototype[Symbol.iterator];Object.defineProperty(me.prototype,Symbol.toStringTag,{value:"Headers",writable:!1,enumerable:!1,configurable:!0});Object.defineProperties(me.prototype,{get:{enumerable:!0},forEach:{enumerable:!0},set:{enumerable:!0},append:{enumerable:!0},has:{enumerable:!0},delete:{enumerable:!0},keys:{enumerable:!0},values:{enumerable:!0},entries:{enumerable:!0}});function Do(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"key+value";return Object.keys(t[F]).sort().map(e==="key"?function(r){return r.toLowerCase()}:e==="value"?function(r){return t[F][r].join(", ")}:function(r){return[r.toLowerCase(),t[F][r].join(", ")]})}var vo=Symbol("internal");function Ao(t,e){let a=Object.create(_o);return a[vo]={target:t,kind:e,index:0},a}var _o=Object.setPrototypeOf({next(){if(!this||Object.getPrototypeOf(this)!==_o)throw new TypeError("Value of `this` is not a HeadersIterator");var t=this[vo];let e=t.target,a=t.kind,r=t.index,n=Do(e,a),o=n.length;return r>=o?{value:void 0,done:!0}:(this[vo].index=r+1,{value:n[r],done:!1})}},Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));Object.defineProperty(_o,Symbol.toStringTag,{value:"HeadersIterator",writable:!1,enumerable:!1,configurable:!0});function $d(t){let e=Object.assign({__proto__:null},t[F]),a=$t(t[F],"Host");return a!==void 0&&(e[a]=e[a][0]),e}function Hd(t){let e=new me;for(let a of Object.keys(t))if(!iu.test(a))if(Array.isArray(t[a]))for(let r of t[a])Co.test(r)||(e[F][a]===void 0?e[F][a]=[r]:e[F][a].push(r));else Co.test(t[a])||(e[F][a]=[t[a]]);return e}var tt=Symbol("Response internals"),Gd=eu.STATUS_CODES,Me=class t{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};H.call(this,e,a);let r=a.status||200,n=new me(a.headers);if(e!=null&&!n.has("Content-Type")){let o=nu(e);o&&n.append("Content-Type",o)}this[tt]={url:a.url,status:r,statusText:a.statusText||Gd[r],headers:n,counter:a.counter}}get url(){return this[tt].url||""}get status(){return this[tt].status}get ok(){return this[tt].status>=200&&this[tt].status<300}get redirected(){return this[tt].counter>0}get statusText(){return this[tt].statusText}get headers(){return this[tt].headers}clone(){return new t(ru(this),{url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected})}};H.mixIn(Me.prototype);Object.defineProperties(Me.prototype,{url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}});Object.defineProperty(Me.prototype,Symbol.toStringTag,{value:"Response",writable:!1,enumerable:!1,configurable:!0});var ze=Symbol("Request internals"),Qd=wr.URL||tu.URL,Wd=wr.parse,Kd=wr.format;function ho(t){return/^[a-zA-Z][a-zA-Z\d+\-.]*:/.exec(t)&&(t=new Qd(t).toString()),Wd(t)}var Yd="destroy"in Ce.Readable.prototype;function Ur(t){return typeof t=="object"&&typeof t[ze]=="object"}function Jd(t){let e=t&&typeof t=="object"&&Object.getPrototypeOf(t);return!!(e&&e.constructor.name==="AbortSignal")}var rt=class t{constructor(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r;Ur(e)?r=ho(e.url):(e&&e.href?r=ho(e.href):r=ho(`${e}`),e={});let n=a.method||e.method||"GET";if(n=n.toUpperCase(),(a.body!=null||Ur(e)&&e.body!==null)&&(n==="GET"||n==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");let o=a.body!=null?a.body:Ur(e)&&e.body!==null?ru(e):null;H.call(this,o,{timeout:a.timeout||e.timeout||0,size:a.size||e.size||0});let i=new me(a.headers||e.headers||{});if(o!=null&&!i.has("Content-Type")){let u=nu(o);u&&i.append("Content-Type",u)}let s=Ur(e)?e.signal:null;if("signal"in a&&(s=a.signal),s!=null&&!Jd(s))throw new TypeError("Expected signal to be an instanceof AbortSignal");this[ze]={method:n,redirect:a.redirect||e.redirect||"follow",headers:i,parsedURL:r,signal:s},this.follow=a.follow!==void 0?a.follow:e.follow!==void 0?e.follow:20,this.compress=a.compress!==void 0?a.compress:e.compress!==void 0?e.compress:!0,this.counter=a.counter||e.counter||0,this.agent=a.agent||e.agent}get method(){return this[ze].method}get url(){return Kd(this[ze].parsedURL)}get headers(){return this[ze].headers}get redirect(){return this[ze].redirect}get signal(){return this[ze].signal}clone(){return new t(this)}};H.mixIn(rt.prototype);Object.defineProperty(rt.prototype,Symbol.toStringTag,{value:"Request",writable:!1,enumerable:!1,configurable:!0});Object.defineProperties(rt.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0}});function Zd(t){let e=t[ze].parsedURL,a=new me(t[ze].headers);if(a.has("Accept")||a.set("Accept","*/*"),!e.protocol||!e.hostname)throw new TypeError("Only absolute URLs are supported");if(!/^https?:$/.test(e.protocol))throw new TypeError("Only HTTP(S) protocols are supported");if(t.signal&&t.body instanceof Ce.Readable&&!Yd)throw new Error("Cancellation of streamed requests with AbortSignal is not supported in node < 8");let r=null;if(t.body==null&&/^(POST|PUT)$/i.test(t.method)&&(r="0"),t.body!=null){let o=ou(t);typeof o=="number"&&(r=String(o))}r&&a.set("Content-Length",r),a.has("User-Agent")||a.set("User-Agent","node-fetch/1.0 (+https://github.com/bitinn/node-fetch)"),t.compress&&!a.has("Accept-Encoding")&&a.set("Accept-Encoding","gzip,deflate");let n=t.agent;return typeof n=="function"&&(n=n(e)),Object.assign({},e,{method:t.method,headers:$d(a),agent:n})}function Ht(t){Error.call(this,t),this.type="aborted",this.message=t,Error.captureStackTrace(this,this.constructor)}Ht.prototype=Object.create(Error.prototype);Ht.prototype.constructor=Ht;Ht.prototype.name="AbortError";var Ea=wr.URL||tu.URL,Xs=Ce.PassThrough,Xd=function(e,a){let r=new Ea(a).hostname,n=new Ea(e).hostname;return r===n||r[r.length-n.length-1]==="."&&r.endsWith(n)},eS=function(e,a){let r=new Ea(a).protocol,n=new Ea(e).protocol;return r===n};function at(t,e){if(!at.Promise)throw new Error("native promise missing, set fetch.Promise to your favorite alternative");return H.Promise=at.Promise,new at.Promise(function(a,r){let n=new rt(t,e),o=Zd(n),i=(o.protocol==="https:"?Vd:eu).request,s=n.signal,u=null,l=function(){let d=new Ht("The user aborted a request.");r(d),n.body&&n.body instanceof Ce.Readable&&Po(n.body,d),!(!u||!u.body)&&u.body.emit("error",d)};if(s&&s.aborted){l();return}let c=function(){l(),g()},p=i(o),y;s&&s.addEventListener("abort",c);function g(){p.abort(),s&&s.removeEventListener("abort",c),clearTimeout(y)}n.timeout&&p.once("socket",function(S){y=setTimeout(function(){r(new W(`network timeout at: ${n.url}`,"request-timeout")),g()},n.timeout)}),p.on("error",function(S){r(new W(`request to ${n.url} failed, reason: ${S.message}`,"system",S)),u&&u.body&&Po(u.body,S),g()}),tS(p,function(S){s&&s.aborted||u&&u.body&&Po(u.body,S)}),parseInt(process.version.substring(1))<14&&p.on("socket",function(S){S.addListener("close",function(d){let b=S.listenerCount("data")>0;if(u&&b&&!d&&!(s&&s.aborted)){let I=new Error("Premature close");I.code="ERR_STREAM_PREMATURE_CLOSE",u.body.emit("error",I)}})}),p.on("response",function(S){clearTimeout(y);let d=Hd(S.headers);if(at.isRedirect(S.statusCode)){let m=d.get("Location"),h=null;try{h=m===null?null:new Ea(m,n.url).toString()}catch{if(n.redirect!=="manual"){r(new W(`uri requested responds with an invalid redirect URL: ${m}`,"invalid-redirect")),g();return}}switch(n.redirect){case"error":r(new W(`uri requested responds with a redirect, redirect mode is set to error: ${n.url}`,"no-redirect")),g();return;case"manual":if(h!==null)try{d.set("Location",h)}catch(D){r(D)}break;case"follow":if(h===null)break;if(n.counter>=n.follow){r(new W(`maximum redirect reached at: ${n.url}`,"max-redirect")),g();return}let A={headers:new me(n.headers),follow:n.follow,counter:n.counter+1,agent:n.agent,compress:n.compress,method:n.method,body:n.body,signal:n.signal,timeout:n.timeout,size:n.size};if(!Xd(n.url,h)||!eS(n.url,h))for(let D of["authorization","www-authenticate","cookie","cookie2"])A.headers.delete(D);if(S.statusCode!==303&&n.body&&ou(n)===null){r(new W("Cannot follow redirect with body being a readable stream","unsupported-redirect")),g();return}(S.statusCode===303||(S.statusCode===301||S.statusCode===302)&&n.method==="POST")&&(A.method="GET",A.body=void 0,A.headers.delete("content-length")),a(at(new rt(h,A))),g();return}}S.once("end",function(){s&&s.removeEventListener("abort",c)});let b=S.pipe(new Xs),I={url:n.url,status:S.statusCode,statusText:S.statusMessage,headers:d,size:n.size,timeout:n.timeout,counter:n.counter},M=d.get("Content-Encoding");if(!n.compress||n.method==="HEAD"||M===null||S.statusCode===204||S.statusCode===304){u=new Me(b,I),a(u);return}let R={flush:At.Z_SYNC_FLUSH,finishFlush:At.Z_SYNC_FLUSH};if(M=="gzip"||M=="x-gzip"){b=b.pipe(At.createGunzip(R)),u=new Me(b,I),a(u);return}if(M=="deflate"||M=="x-deflate"){let m=S.pipe(new Xs);m.once("data",function(h){(h[0]&15)===8?b=b.pipe(At.createInflate()):b=b.pipe(At.createInflateRaw()),u=new Me(b,I),a(u)}),m.on("end",function(){u||(u=new Me(b,I),a(u))});return}if(M=="br"&&typeof At.createBrotliDecompress=="function"){b=b.pipe(At.createBrotliDecompress()),u=new Me(b,I),a(u);return}u=new Me(b,I),a(u)}),zd(p,n)})}function tS(t,e){let a;t.on("socket",function(r){a=r}),t.on("response",function(r){let n=r.headers;n["transfer-encoding"]==="chunked"&&!n["content-length"]&&r.once("close",function(o){if(a&&a.listenerCount("data")>0&&!o){let s=new Error("Premature close");s.code="ERR_STREAM_PREMATURE_CLOSE",e(s)}})})}function Po(t,e){t.destroy?t.destroy(e):(t.emit("error",e),t.end())}at.isRedirect=function(t){return t===301||t===302||t===303||t===307||t===308};at.Promise=global.Promise;su.exports=De=at;Object.defineProperty(De,"__esModule",{value:!0});De.default=De;De.Headers=me;De.Request=rt;De.Response=Me;De.FetchError=W;De.AbortError=Ht});var va=f((ht,lu)=>{var Da=uu(),aS=Da.default||Da,Tr=function(t,e){return/^\/\//.test(t)&&(t="https:"+t),aS.call(this,t,e)};Tr.ponyfill=!0;lu.exports=ht=Tr;ht.fetch=Tr;ht.Headers=Da.Headers;ht.Request=Da.Request;ht.Response=Da.Response;ht.default=Tr});var xo=f(Or=>{"use strict";Object.defineProperty(Or,"__esModule",{value:!0});Or.isJSON=void 0;function rS(t){if(t){let e=oS(t);if(!e)return!1;if(e.subtype==="json"||e.suffix==="json"||e.suffix&&/\bjson\b/i.test(e.suffix)||e.subtype&&/\bjson\b/i.test(e.subtype))return!0}return!1}Or.isJSON=rS;var nS=/^([A-Za-z0-9][A-Za-z0-9!#$&^_-]{0,126})\/([A-Za-z0-9][A-Za-z0-9!#$&^_.+-]{0,126});?$/;function oS(t){let e=t.indexOf(";"),a=e!==-1?t.slice(0,e).trim():t.trim(),r=nS.exec(a.toLowerCase().toLowerCase());if(!r)return;let n=r[1],o=r[2],i,s=o.lastIndexOf("+");return s!==-1&&(i=o.substring(s+1),o=o.substring(0,s)),{type:n,subtype:o,suffix:i}}});var du=f(Lr=>{"use strict";Object.defineProperty(Lr,"__esModule",{value:!0});Lr.useFetch=void 0;var Qt=require("react"),iS=Aa(),pu=Fe(),cu=va(),sS=xo(),yu=et();async function uS(t){if(!t.ok)throw new Error(t.statusText);let e=t.headers.get("content-type");return e&&(0,sS.isJSON)(e)?await t.json():await t.text()}function lS(t){return{data:t,hasMore:!1}}function pS(t,e){let{parseResponse:a,mapResult:r,initialData:n,execute:o,keepPreviousData:i,onError:s,onData:u,onWillExecute:l,failureToastOptions:c,...p}=e||{},y={initialData:n,execute:o,keepPreviousData:i,onError:s,onData:u,onWillExecute:l,failureToastOptions:c},g=(0,pu.useLatest)(a||uS),S=(0,pu.useLatest)(r||lS),d=(0,Qt.useRef)(),b=(0,Qt.useRef)(),I=typeof t=="function"?t({page:0}):void 0;(!d.current||typeof b.current>"u"||b.current!==I)&&(d.current=t),b.current=I;let M=(0,Qt.useRef)(),R=(0,Qt.useCallback)((A,D)=>async P=>{let x=await(0,cu.fetch)(A(P),{signal:M.current?.signal,...D}),O=await g.current(x);return S.current?.(O)},[g,S]),m=(0,Qt.useCallback)(async(A,D)=>{let P=await(0,cu.fetch)(A,{signal:M.current?.signal,...D}),x=await g.current(P);return S.current(x)?.data},[g,S]),h=(0,Qt.useMemo)(()=>b.current?R:m,[b,m,R]);return(0,iS.useCachedPromise)(h,[d.current,p],{...y,internal_cacheKeySuffix:b.current+(0,yu.hash)(S.current)+(0,yu.hash)(g.current),abortable:M})}Lr.useFetch=pS});var qr=f(fe=>{"use strict";var cS=fe&&fe.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(fe,"__esModule",{value:!0});fe.defaultParsing=fe.handleOutput=fe.getSpawnedResult=fe.getSpawnedPromise=void 0;var yS=require("node:buffer"),gu=cS(require("node:stream")),dS=require("node:util"),SS=require("signal-exit");function bS(t,{timeout:e}={}){let a=new Promise((s,u)=>{t.on("exit",(l,c)=>{s({exitCode:l,signal:c,timedOut:!1})}),t.on("error",l=>{u(l)}),t.stdin&&t.stdin.on("error",l=>{u(l)})});if(e===0||e===void 0)return a;let r,n=new Promise((s,u)=>{r=setTimeout(()=>{t.kill("SIGTERM"),u(Object.assign(new Error("Timed out"),{timedOut:!0,signal:"SIGTERM"}))},e)}),o=a.finally(()=>{clearTimeout(r)}),i=(0,SS.onExit)(()=>{t.kill()});return Promise.race([n,o]).finally(()=>i())}fe.getSpawnedPromise=bS;var Uo=class extends Error{constructor(){super("The output is too big"),this.name="MaxBufferError"}},gS=(0,dS.promisify)(gu.default.pipeline);function IS(t){let{encoding:e}=t,a=e==="buffer",r=new gu.default.PassThrough({objectMode:!1});e&&e!=="buffer"&&r.setEncoding(e);let n=0,o=[];return r.on("data",i=>{o.push(i),n+=i.length}),r.getBufferedValue=()=>a?Buffer.concat(o,n):o.join(""),r.getBufferedLength=()=>n,r}async function Su(t,e){let a=IS(e);return await new Promise((r,n)=>{let o=i=>{i&&a.getBufferedLength()<=yS.constants.MAX_LENGTH&&(i.bufferedData=a.getBufferedValue()),n(i)};(async()=>{try{await gS(t,a),r()}catch(i){o(i)}})(),a.on("data",()=>{a.getBufferedLength()>1e3*1e3*80&&o(new Uo)})}),a.getBufferedValue()}async function bu(t,e){t.destroy();try{return await e}catch(a){return a.bufferedData}}async function MS({stdout:t,stderr:e},{encoding:a},r){let n=Su(t,{encoding:a}),o=Su(e,{encoding:a});try{return await Promise.all([r,n,o])}catch(i){return Promise.all([{error:i,exitCode:null,signal:i.signal,timedOut:i.timedOut||!1},bu(t,n),bu(e,o)])}}fe.getSpawnedResult=MS;function mS(t){let e=typeof t=="string"?`
`:10,a=typeof t=="string"?"\r":13;return t[t.length-1]===e&&(t=t.slice(0,-1)),t[t.length-1]===a&&(t=t.slice(0,-1)),t}function fS(t,e){return t.stripFinalNewline?mS(e):e}fe.handleOutput=fS;var RS=({timedOut:t,timeout:e,signal:a,exitCode:r})=>t?`timed out after ${e} milliseconds`:a!=null?`was killed with ${a}`:r!=null?`failed with exit code ${r}`:"failed",AS=({stdout:t,stderr:e,error:a,signal:r,exitCode:n,command:o,timedOut:i,options:s,parentError:u})=>{let c=`Command ${RS({timedOut:i,timeout:s?.timeout,signal:r,exitCode:n})}: ${o}`,p=a?`${c}
${a.message}`:c,y=[p,e,t].filter(Boolean).join(`
`);return a?a.originalMessage=a.message:a=u,a.message=y,a.shortMessage=p,a.command=o,a.exitCode=n,a.signal=r,a.stdout=t,a.stderr=e,"bufferedData"in a&&delete a.bufferedData,a};function hS({stdout:t,stderr:e,error:a,exitCode:r,signal:n,timedOut:o,command:i,options:s,parentError:u}){if(a||r!==0||n!==null)throw AS({error:a,exitCode:r,signal:n,stdout:t,stderr:e,command:i,timedOut:o,options:s,parentError:u});return t}fe.defaultParsing=hS});var Mu=f(Wt=>{"use strict";var PS=Wt&&Wt.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Wt,"__esModule",{value:!0});Wt.useExec=void 0;var ES=PS(require("node:child_process")),Iu=require("react"),CS=Aa(),DS=Fe(),_a=qr(),vS=/ +/g;function _S(t,e){if(e)return[t,...e];let a=[];for(let r of t.trim().split(vS)){let n=a[a.length-1];n&&n.endsWith("\\")?a[a.length-1]=`${n.slice(0,-1)} ${r}`:a.push(r)}return a}function xS(t,e,a){let{parseOutput:r,input:n,onData:o,onWillExecute:i,initialData:s,execute:u,keepPreviousData:l,onError:c,failureToastOptions:p,...y}=Array.isArray(e)?a||{}:e||{},g={initialData:s,execute:u,keepPreviousData:l,onError:c,onData:o,onWillExecute:i,failureToastOptions:p},S=(0,Iu.useRef)(),d=(0,DS.useLatest)(r||_a.defaultParsing),b=(0,Iu.useCallback)(async(I,M,R,m)=>{let[h,...A]=_S(I,M),D=[h,...A].join(" "),P={stripFinalNewline:!0,...R,timeout:R?.timeout||1e4,signal:S.current?.signal,encoding:R?.encoding===null?"buffer":R?.encoding||"utf8",env:{PATH:"/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin",...process.env,...R?.env}},x=ES.default.spawn(h,A,P),O=(0,_a.getSpawnedPromise)(x,P);m&&x.stdin.end(m);let[{error:v,exitCode:U,signal:Y,timedOut:w},X,Ze]=await(0,_a.getSpawnedResult)(x,P,O),ge=(0,_a.handleOutput)(P,X),Rr=(0,_a.handleOutput)(P,Ze);return d.current({stdout:ge,stderr:Rr,error:v,exitCode:U,signal:Y,timedOut:w,command:D,options:P,parentError:new Error})},[d]);return(0,CS.useCachedPromise)(b,[t,Array.isArray(e)?e:[],y,n],{...g,abortable:S})}Wt.useExec=xS});var Au=f(Kt=>{"use strict";var Nr=Kt&&Kt.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Kt,"__esModule",{value:!0});Kt.useStreamJSON=void 0;var US=require("@raycast/api"),mu=Nr(va()),wa=require("node:fs"),wo=require("node:fs/promises"),Br=require("node:path"),fu=require("node:stream/promises"),xa=require("react"),wS=Nr(require("stream-chain")),TS=require("stream-json"),OS=Nr(require("stream-json/filters/Pick")),LS=Nr(require("stream-json/streamers/StreamArray")),Ru=xo(),qS=Aa(),BS=et();async function Ua(t,e,a){if(typeof t=="object"||t.startsWith("http://")||t.startsWith("https://"))return await NS(t,e,a);if(t.startsWith("file://"))return await kS((0,Br.normalize)(decodeURIComponent(new URL(t).pathname)),e,a?.signal?a.signal:void 0);throw new Error("Only HTTP(S) or file URLs are supported")}async function NS(t,e,a){let r=await(0,mu.default)(t,a);if(!r.ok)throw new Error("Failed to fetch URL");if(!(0,Ru.isJSON)(r.headers.get("content-type")))throw new Error("URL does not return JSON");if(!r.body)throw new Error("Failed to retrieve expected JSON content: Response body is missing or inaccessible.");await(0,fu.pipeline)(r.body,(0,wa.createWriteStream)(e),a?.signal?{signal:a.signal}:void 0)}async function kS(t,e,a){await(0,fu.pipeline)((0,wa.createReadStream)(t),(0,wa.createWriteStream)(e),a?{signal:a}:void 0)}async function VS(t,e,a,r,n){let o=(0,Br.join)(e,a);try{await(0,wo.stat)(e)}catch{(0,wa.mkdirSync)(e,{recursive:!0}),await Ua(t,o,n);return}if(r){await Ua(t,o,n);return}let i;try{i=await(0,wo.stat)(o)}catch{await Ua(t,o,n);return}if(typeof t=="object"||t.startsWith("http://")||t.startsWith("https://")){let s=await(0,mu.default)(t,{...n,method:"HEAD"});if(!s.ok)throw new Error("Could not fetch URL");if(!(0,Ru.isJSON)(s.headers.get("content-type")))throw new Error("URL does not return JSON");let u=Date.parse(s.headers.get("last-modified")??"");if(i.size===0||Number.isNaN(u)||u>i.mtimeMs){await Ua(t,o,n);return}}else if(t.startsWith("file://"))try{(await(0,wo.stat)((0,Br.normalize)(decodeURIComponent(new URL(t).pathname)))).mtimeMs>i.mtimeMs&&await Ua(t,o,n)}catch{throw new Error("Source file could not be read")}else throw new Error("Only HTTP(S) or file URLs are supported")}async function*FS(t,e,a,r,n,o){let i=[],s=new wS.default([(0,wa.createReadStream)(t),r?OS.default.withParser({filter:r}):(0,TS.parser)(),new LS.default,u=>o?.(u.value)??u.value]);a?.addEventListener("abort",()=>{s.destroy()});try{for await(let u of s){if(a?.aborted)return[];(!n||n(u))&&i.push(u),i.length>=e&&(yield i,i=[])}}catch(u){throw s.destroy(),u}return i.length>0&&(yield i),[]}function jS(t,e){let{initialData:a,execute:r,keepPreviousData:n,onError:o,onData:i,onWillExecute:s,failureToastOptions:u,dataPath:l,filter:c,transform:p,pageSize:y=20,...g}=e??{},S=(0,xa.useRef)(),d=(0,xa.useRef)(),b={initialData:a,execute:r,keepPreviousData:n,onError:o,onData:i,onWillExecute:s,failureToastOptions:u},I=(0,xa.useRef)(null),M=(0,xa.useRef)(null),R=(0,xa.useRef)(!1);return(0,qS.useCachedPromise)((m,h,A,D,P,x)=>async({page:O})=>{let v=(0,BS.hash)(m)+".json",U=US.environment.supportPath;if(O===0){M.current?.abort(),M.current=new AbortController;let X=(0,Br.join)(U,v),Ze=!!(S.current&&S.current!==m&&d.current&&d.current===X);S.current=m,d.current=X,await VS(m,U,v,Ze,{...A,signal:M.current?.signal}),I.current=FS(X,h,M.current?.signal,D,P,x)}if(!I.current)return{hasMore:R.current,data:[]};let{value:Y,done:w}=await I.current.next();return R.current=!w,{hasMore:R.current,data:Y??[]}},[t,y,g,l,c,p],b)}Kt.useStreamJSON=jS});var Oo=f(Te=>{"use strict";var To=Te&&Te.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Te,"__esModule",{value:!0});Te.baseExecuteSQL=Te.isPermissionError=Te.PermissionError=void 0;var zS=require("node:fs"),kr=require("node:fs/promises"),$S=To(require("node:os")),hu=To(require("node:child_process")),Pu=To(require("node:path")),Vr=qr(),HS=et(),jr=class extends Error{constructor(e){super(e),this.name="PermissionError"}};Te.PermissionError=jr;function GS(t){return t instanceof Error&&t.name==="PermissionError"}Te.isPermissionError=GS;async function QS(t,e,a){if(!(0,zS.existsSync)(t))throw new Error("The database does not exist");let r=a?.signal,n,o=hu.default.spawn("sqlite3",["--json","--readonly",t,e],{signal:r}),i=(0,Vr.getSpawnedPromise)(o),[{error:s,exitCode:u,signal:l},c,p]=await(0,Vr.getSpawnedResult)(o,{encoding:"utf-8"},i);if(Fr(r),p.match("(5)")||p.match("(14)")){if(!n){let y=Pu.default.join($S.default.tmpdir(),"useSQL",(0,HS.hash)(t));await(0,kr.mkdir)(y,{recursive:!0}),Fr(r),n=Pu.default.join(y,"db.db"),await(0,kr.copyFile)(t,n),await(0,kr.writeFile)(n+"-shm",""),await(0,kr.writeFile)(n+"-wal",""),Fr(r)}o=hu.default.spawn("sqlite3",["--json","--readonly","--vfs","unix-none",n,e],{signal:r}),i=(0,Vr.getSpawnedPromise)(o),[{error:s,exitCode:u,signal:l},c,p]=await(0,Vr.getSpawnedResult)(o,{encoding:"utf-8"},i),Fr(r)}if(s||u!==0||l!==null)throw p.includes("authorization denied")?new jr("You do not have permission to access the database."):new Error(p||"Unknown error");return JSON.parse(c.trim()||"[]")}Te.baseExecuteSQL=QS;function Fr(t){if(t?.aborted){let e=new Error("aborted");throw e.name="AbortError",e}}});var Cu=f(Yt=>{"use strict";var WS=Yt&&Yt.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Yt,"__esModule",{value:!0});Yt.useSQL=void 0;var Oe=require("react/jsx-runtime"),te=require("@raycast/api"),KS=require("node:fs"),YS=WS(require("node:os")),zr=require("react"),JS=Ft(),ZS=Fe(),XS=ma(),Lo=Oo();function eb(t,e,a){let{permissionPriming:r,...n}=a||{},[o,i]=(0,zr.useState)(),s=(0,ZS.useLatest)(a||{}),u=(0,zr.useRef)(),l=(0,zr.useCallback)(p=>{console.error(p);let y=p instanceof Error&&p.message.includes("authorization denied")?new Lo.PermissionError("You do not have permission to access the database."):p;(0,Lo.isPermissionError)(y)?i((0,Oe.jsx)(tb,{priming:s.current.permissionPriming})):s.current.onError?s.current.onError(y):te.environment.launchType!==te.LaunchType.Background&&(0,XS.showFailureToast)(y,{title:"Cannot query the data"})},[s]),c=(0,zr.useMemo)(()=>{if(!(0,KS.existsSync)(t))throw new Error("The database does not exist");return async(p,y)=>{let g=u.current?.signal;return(0,Lo.baseExecuteSQL)(p,y,{signal:g})}},[t]);return{...(0,JS.usePromise)(c,[t,e],{...n,onError:l}),permissionView:o}}Yt.useSQL=eb;var Eu=parseInt(YS.default.release().split(".")[0])>=22,qo=Eu?"Settings":"Preferences";function tb(t){let e=Eu?{title:"Open System Settings -> Privacy",target:"x-apple.systempreferences:com.apple.preference.security?Privacy_AllFiles"}:{title:"Open System Preferences -> Security",target:"x-apple.systempreferences:com.apple.preference.security?Privacy_AllFiles"};return te.environment.commandMode==="menu-bar"?(0,Oe.jsxs)(te.MenuBarExtra,{icon:te.Icon.Warning,title:te.environment.commandName,children:[(0,Oe.jsx)(te.MenuBarExtra.Item,{title:"Raycast needs full disk access",tooltip:`You can revert this access in ${qo} whenever you want`}),t.priming?(0,Oe.jsx)(te.MenuBarExtra.Item,{title:t.priming,tooltip:`You can revert this access in ${qo} whenever you want`}):null,(0,Oe.jsx)(te.MenuBarExtra.Separator,{}),(0,Oe.jsx)(te.MenuBarExtra.Item,{title:e.title,onAction:()=>(0,te.open)(e.target)})]}):(0,Oe.jsx)(te.List,{children:(0,Oe.jsx)(te.List.EmptyView,{icon:{source:{light:"https://raycast.com/uploads/extensions-utils-security-permissions-light.png",dark:"https://raycast.com/uploads/extensions-utils-security-permissions-dark.png"}},title:"Raycast needs full disk access.",description:`${t.priming?t.priming+`
`:""}You can revert this access in ${qo} whenever you want.`,actions:(0,Oe.jsx)(te.ActionPanel,{children:(0,Oe.jsx)(te.Action.Open,{...e})})})})}});var vu=f(Jt=>{"use strict";Object.defineProperty(Jt,"__esModule",{value:!0});Jt.useForm=Jt.FormValidation=void 0;var He=require("react"),Du=Fe(),No;(function(t){t.Required="required"})(No||(Jt.FormValidation=No={}));function Bo(t,e){if(t){if(typeof t=="function")return t(e);if(t===No.Required){let a=typeof e<"u"&&e!==null;if(a)switch(typeof e){case"string":a=e.length>0;break;case"object":Array.isArray(e)?a=e.length>0:e instanceof Date&&(a=e.getTime()>0);break;default:break}if(!a)return"The item is required"}}}function ab(t){let{onSubmit:e,validation:a,initialValues:r={}}=t,[n,o]=(0,He.useState)(r),[i,s]=(0,He.useState)({}),u=(0,He.useRef)({}),l=(0,Du.useLatest)(a||{}),c=(0,Du.useLatest)(e),p=(0,He.useCallback)(I=>{u.current[I]?.focus()},[u]),y=(0,He.useCallback)(async I=>{let M=!1;for(let[m,h]of Object.entries(l.current)){let A=Bo(h,I[m]);A&&(M||(M={},p(m)),M[m]=A)}if(M)return s(M),!1;let R=await c.current(I);return typeof R=="boolean"?R:!0},[l,c,p]),g=(0,He.useCallback)((I,M)=>{s(R=>({...R,[I]:M}))},[s]),S=(0,He.useCallback)(function(I,M){o(R=>({...R,[I]:typeof M=="function"?M(R[I]):M}))},[o]),d=(0,He.useMemo)(()=>new Proxy({},{get(I,M){let R=l.current[M],m=n[M];return{onChange(h){i[M]&&(Bo(R,h)||g(M,void 0)),S(M,h)},onBlur(h){let A=Bo(R,h.target.value);A&&g(M,A)},error:i[M],id:M,value:typeof m>"u"?null:m,ref:h=>{u.current[M]=h}}}}),[i,l,g,n,u,S]),b=(0,He.useCallback)(I=>{s({}),Object.entries(u.current).forEach(([M,R])=>{I?.[M]||R?.reset()}),I&&o(I)},[o,s,u]);return{handleSubmit:y,setValidationError:g,setValue:S,values:n,itemProps:d,focus:p,reset:b}}Jt.useForm=ab});var xu=f($r=>{"use strict";Object.defineProperty($r,"__esModule",{value:!0});$r.useAI=void 0;var _u=require("react"),rb=require("@raycast/api"),nb=Ft();function ob(t,e={}){let{creativity:a,stream:r,model:n,...o}=e,[i,s]=(0,_u.useState)(""),u=(0,_u.useRef)(),{isLoading:l,error:c,revalidate:p}=(0,nb.usePromise)(async(y,g,S)=>{s("");let d=rb.AI.ask(y,{creativity:g,model:n,signal:u.current?.signal});S===!1?s(await d):(d.on("data",b=>{s(I=>I+b)}),await d)},[t,a,r],{...o,abortable:u});return{isLoading:l,data:i,error:c,revalidate:p}}$r.useAI=ob});var Tu=f(Hr=>{"use strict";Object.defineProperty(Hr,"__esModule",{value:!0});Hr.useFrecencySorting=void 0;var ko=require("react"),Uu=Fe(),ib=_r(),sb=10,wu=1440*60*1e3,ub=Math.log(2)/(sb*wu),lb={Default:100,Embed:0,Bookmark:140};function pb(t){let e=Date.now(),a=t?t.lastVisited:0,r=t?t.frecency:0,n=(e-a)/wu,o=lb.Default*Math.exp(-ub*n),i=r+o;return{lastVisited:e,frecency:i}}var cb=t=>{if(process.env.NODE_ENV!=="production"&&(typeof t!="object"||!t||!("id"in t)||typeof t.id!="string"))throw new Error("Specify a key function or make sure your items have an 'id' property");return t.id};function yb(t,e){let a=(0,Uu.useLatest)(e?.key||cb),r=(0,Uu.useLatest)(e?.sortUnvisited),[n,o]=(0,ib.useCachedState)(`raycast_frecency_${e?.namespace}`,{}),i=(0,ko.useCallback)(async function(c){let p=a.current(c);o(y=>{let g=y[p],S=pb(g);return{...y,[p]:S}})},[a,o]),s=(0,ko.useCallback)(async function(c){let p=a.current(c);o(y=>{let g={...y};return delete g[p],g})},[a,o]);return{data:(0,ko.useMemo)(()=>t?t.sort((l,c)=>{let p=n[a.current(l)],y=n[a.current(c)];return p&&!y?-1:!p&&y?1:p&&y?y.frecency-p.frecency:r.current?r.current(l,c):0}):[],[n,t,a,r]),visitItem:i,resetRanking:s}}Hr.useFrecencySorting=yb});var qu=f(Gr=>{"use strict";Object.defineProperty(Gr,"__esModule",{value:!0});Gr.useLocalStorage=void 0;var Vo=require("@raycast/api"),Ou=ma(),Lu=et(),db=Ft();function Sb(t,e){let{data:a,isLoading:r,mutate:n}=(0,db.usePromise)(async s=>{let u=await Vo.LocalStorage.getItem(s);return typeof u<"u"?JSON.parse(u,Lu.reviver):e},[t]);async function o(s){try{await n(Vo.LocalStorage.setItem(t,JSON.stringify(s,Lu.replacer)),{optimisticUpdate(u){return u}})}catch(u){await(0,Ou.showFailureToast)(u,{title:"Failed to set value in local storage"})}}async function i(){try{await n(Vo.LocalStorage.removeItem(t),{optimisticUpdate(){}})}catch(s){await(0,Ou.showFailureToast)(s,{title:"Failed to remove value from local storage"})}}return{value:a,setValue:o,removeValue:i,isLoading:r}}Gr.useLocalStorage=Sb});var Fu=f(Zt=>{"use strict";Object.defineProperty(Zt,"__esModule",{value:!0});Zt.slightlyLighterColor=Zt.slightlyDarkerColor=void 0;function bb(t){let e=0,a=0,r=0;if(t.length===4)e=parseInt(`${t[1]}${t[1]}`,16),a=parseInt(`${t[2]}${t[2]}`,16),r=parseInt(`${t[3]}${t[3]}`,16);else if(t.length===7)e=parseInt(`${t[1]}${t[2]}`,16),a=parseInt(`${t[3]}${t[4]}`,16),r=parseInt(`${t[5]}${t[6]}`,16);else throw new Error(`Malformed hex color: ${t}`);return{r:e,g:a,b:r}}function gb({r:t,g:e,b:a}){let r=t.toString(16),n=e.toString(16),o=a.toString(16);return r.length===1&&(r=`0${r}`),n.length===1&&(n=`0${n}`),o.length===1&&(o=`0${o}`),`#${r}${n}${o}`}function Ib({r:t,g:e,b:a}){t/=255,e/=255,a/=255;let r=Math.min(t,e,a),n=Math.max(t,e,a),o=n-r,i=0,s=0,u=0;return o===0?i=0:n===t?i=(e-a)/o%6:n===e?i=(a-t)/o+2:i=(t-e)/o+4,i=Math.round(i*60),i<0&&(i+=360),u=(n+r)/2,s=o===0?0:o/(1-Math.abs(2*u-1)),s=+(s*100).toFixed(1),u=+(u*100).toFixed(1),{h:i,s,l:u}}function Mb({h:t,s:e,l:a}){e/=100,a/=100;let r=(1-Math.abs(2*a-1))*e,n=r*(1-Math.abs(t/60%2-1)),o=a-r/2,i=0,s=0,u=0;return t>=0&&t<60?(i=r,s=n,u=0):t>=60&&t<120?(i=n,s=r,u=0):t>=120&&t<180?(i=0,s=r,u=n):t>=180&&t<240?(i=0,s=n,u=r):t>=240&&t<300?(i=n,s=0,u=r):t>=300&&t<360&&(i=r,s=0,u=n),i=Math.round((i+o)*255),s=Math.round((s+o)*255),u=Math.round((u+o)*255),{r:i,g:s,b:u}}function Bu(t){return Ib(bb(t))}function Nu(t){return gb(Mb(t))}function ku(t,e,a){return e<a?t<e?e:t>a?a:t:t<a?a:t>e?e:t}var Vu=12;function mb(t){let e=Bu(t);return Nu({h:e.h,s:e.s,l:ku(e.l-Vu,0,100)})}Zt.slightlyDarkerColor=mb;function fb(t){let e=Bu(t);return Nu({h:e.h,s:e.s,l:ku(e.l+Vu,0,100)})}Zt.slightlyLighterColor=fb});var $u=f(Qr=>{"use strict";Object.defineProperty(Qr,"__esModule",{value:!0});Qr.getAvatarIcon=void 0;var ju=Fu();function Xt(t,e){let a=t.charCodeAt(e);if(Number.isNaN(a))return["",e];if(a<55296||a>57343)return[t.charAt(e),e];if(55296<=a&&a<=56319){if(t.length<=e+1)throw new Error("High surrogate without following low surrogate");let n=t.charCodeAt(e+1);if(56320>n||n>57343)throw new Error("High surrogate without following low surrogate");return[t.charAt(e)+t.charAt(e+1),e+1]}if(e===0)throw new Error("Low surrogate without preceding high surrogate");let r=t.charCodeAt(e-1);if(55296>r||r>56319)throw new Error("Low surrogate without preceding high surrogate");return[t.charAt(e+1),e+1]}var zu=["#DC829A","#D64854","#D47600","#D36CDD","#52A9E4","#7871E8","#70920F","#43B93A","#EB6B3E","#26B795","#D85A9B","#A067DC","#BD9500","#5385D9"];function Rb(t,e){let a=t.trim().split(" "),r;if(a.length==1&&Xt(a[0],0)[0])r=Xt(a[0],0)[0];else if(a.length>1){let u=Xt(a[0],0)[0]||"",l=Xt(a[a.length-1],0)[0]??"";r=u+l}else r="";let n;if(e?.background)n=e?.background;else{let u=0,[l,c]=Xt(r,0);for(;l;)u+=l.charCodeAt(0),[l,c]=Xt(r,c+1);let p=u%zu.length;n=zu[p]}let i=50-0;return`data:image/svg+xml,${`<svg width="100px" height="100px">
  ${e?.gradient!==!1?`<defs>
      <linearGradient id="Gradient" x1="0.25" x2="0.75" y1="0" y2="1">
        <stop offset="0%" stop-color="${(0,ju.slightlyLighterColor)(n)}"/>
        <stop offset="50%" stop-color="${n}"/>
        <stop offset="100%" stop-color="${(0,ju.slightlyDarkerColor)(n)}"/>
      </linearGradient>
  </defs>`:""}
      <circle cx="50" cy="50" r="${i}" fill="${e?.gradient!==!1?"url(#Gradient)":n}" />
      ${r?`<text x="50" y="80" font-size="${i-1}" font-family="Inter, sans-serif" text-anchor="middle" fill="white">${r.toUpperCase()}</text>`:""}
    </svg>
  `.replaceAll(`
`,"")}`}Qr.getAvatarIcon=Rb});var Gu=f(Wr=>{"use strict";Object.defineProperty(Wr,"__esModule",{value:!0});Wr.getFavicon=void 0;var Hu=require("@raycast/api"),Ab=require("url");function hb(t,e){try{let r=(typeof t=="string"?new Ab.URL(t):t).hostname;return{source:`https://www.google.com/s2/favicons?sz=${e?.size??64}&domain=${r}`,fallback:e?.fallback??Hu.Icon.Link,mask:e?.mask}}catch(a){return console.error(a),Hu.Icon.Link}}Wr.getFavicon=hb});var Ku=f(Kr=>{"use strict";Object.defineProperty(Kr,"__esModule",{value:!0});Kr.getProgressIcon=void 0;var Qu=require("@raycast/api");function Wu(t,e,a,r){let n=(r-90)*Math.PI/180;return{x:t+a*Math.cos(n),y:e+a*Math.sin(n)}}function Pb(t,e,a,r,n){let o=Wu(t,e,a,n),i=Wu(t,e,a,r),s=n-r<=180?"0":"1";return["M",o.x,o.y,"A",a,a,0,s,0,i.x,i.y].join(" ")}function Eb(t,e=Qu.Color.Red,a){let r=a?.background||(Qu.environment.appearance==="light"?"black":"white"),n=a?.backgroundOpacity||.1,o=10,s=50-5-o/2;return`data:image/svg+xml,${`<svg width="100px" height="100px">
      <circle cx="50" cy="50" r="${s}" stroke-width="${o}" stroke="${t<1?r:e}" opacity="${t<1?n:"1"}" fill="none" />
      ${t>0&&t<1?`<path d="${Pb(50,50,s,0,t*360)}" stroke="${e}" stroke-width="${o}" fill="none" />`:""}
    </svg>
  `.replaceAll(`
`,"")}`}Kr.getProgressIcon=Eb});var Yu=f(Ge=>{"use strict";var Cb=Ge&&Ge.__createBinding||(Object.create?(function(t,e,a,r){r===void 0&&(r=a);var n=Object.getOwnPropertyDescriptor(e,a);(!n||("get"in n?!e.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return e[a]}}),Object.defineProperty(t,r,n)}):(function(t,e,a,r){r===void 0&&(r=a),t[r]=e[a]})),Fo=Ge&&Ge.__exportStar||function(t,e){for(var a in t)a!=="default"&&!Object.prototype.hasOwnProperty.call(e,a)&&Cb(e,t,a)};Object.defineProperty(Ge,"__esModule",{value:!0});Fo($u(),Ge);Fo(Gu(),Ge);Fo(Ku(),Ge)});var Ju=f(Z=>{"use strict";Object.defineProperty(Z,"__esModule",{value:!0});Z.zoomService=Z.slackService=Z.linearService=Z.jiraService=Z.googleService=Z.githubService=Z.asanaService=void 0;var ae=require("@raycast/api"),Pt=jo(),Yr={asana:"1191201745684312",github:"7235fe8d42157f1f38c0",linear:"c8ff37b9225c3c9aefd7d66ea0e5b6f1",slack:"851756884692.5546927290212"},nt=t=>`data:image/svg+xml,${t}`,Et={asana:nt('<svg xmlns="http://www.w3.org/2000/svg" width="251" height="232" fill="none"><path fill="#F06A6A" d="M179.383 54.373c0 30.017-24.337 54.374-54.354 54.374-30.035 0-54.373-24.338-54.373-54.374C70.656 24.338 94.993 0 125.029 0c30.017 0 54.354 24.338 54.354 54.373ZM54.393 122.33C24.376 122.33.02 146.668.02 176.685c0 30.017 24.337 54.373 54.373 54.373 30.035 0 54.373-24.338 54.373-54.373 0-30.017-24.338-54.355-54.373-54.355Zm141.253 0c-30.035 0-54.373 24.338-54.373 54.374 0 30.035 24.338 54.373 54.373 54.373 30.017 0 54.374-24.338 54.374-54.373 0-30.036-24.338-54.374-54.374-54.374Z"/></svg>'),github:{source:nt('<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>'),tintColor:ae.Color.PrimaryText},google:nt('<svg xmlns="http://www.w3.org/2000/svg" style="display:block" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/><path fill="none" d="M0 0h48v48H0z"/></svg>'),jira:nt('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="2361" height="2500" viewBox="2.59 0 214.091 224"><linearGradient id="a" x1="102.4" x2="56.15" y1="218.63" y2="172.39" gradientTransform="matrix(1 0 0 -1 0 264)" gradientUnits="userSpaceOnUse"><stop offset=".18" stop-color="#0052cc"/><stop offset="1" stop-color="#2684ff"/></linearGradient><linearGradient xlink:href="#a" id="b" x1="114.65" x2="160.81" y1="85.77" y2="131.92"/><path fill="#2684ff" d="M214.06 105.73 117.67 9.34 108.33 0 35.77 72.56 2.59 105.73a8.89 8.89 0 0 0 0 12.54l66.29 66.29L108.33 224l72.55-72.56 1.13-1.12 32.05-32a8.87 8.87 0 0 0 0-12.59zm-105.73 39.39L75.21 112l33.12-33.12L141.44 112z"/><path fill="url(#a)" d="M108.33 78.88a55.75 55.75 0 0 1-.24-78.61L35.62 72.71l39.44 39.44z"/><path fill="url(#b)" d="m141.53 111.91-33.2 33.21a55.77 55.77 0 0 1 0 78.86L181 151.35z"/></svg>'),linear:{source:{light:nt('<svg xmlns="http://www.w3.org/2000/svg" fill="#222326" width="200" height="200" viewBox="0 0 100 100"><path d="M1.22541 61.5228c-.2225-.9485.90748-1.5459 1.59638-.857L39.3342 97.1782c.6889.6889.0915 1.8189-.857 1.5964C20.0515 94.4522 5.54779 79.9485 1.22541 61.5228ZM.00189135 46.8891c-.01764375.2833.08887215.5599.28957165.7606L52.3503 99.7085c.2007.2007.4773.3075.7606.2896 2.3692-.1476 4.6938-.46 6.9624-.9259.7645-.157 1.0301-1.0963.4782-1.6481L2.57595 39.4485c-.55186-.5519-1.49117-.2863-1.648174.4782-.465915 2.2686-.77832 4.5932-.92588465 6.9624ZM4.21093 29.7054c-.16649.3738-.08169.8106.20765 1.1l64.77602 64.776c.2894.2894.7262.3742 1.1.2077 1.7861-.7956 3.5171-1.6927 5.1855-2.684.5521-.328.6373-1.0867.1832-1.5407L8.43566 24.3367c-.45409-.4541-1.21271-.3689-1.54074.1832-.99132 1.6684-1.88843 3.3994-2.68399 5.1855ZM12.6587 18.074c-.3701-.3701-.393-.9637-.0443-1.3541C21.7795 6.45931 35.1114 0 49.9519 0 77.5927 0 100 22.4073 100 50.0481c0 14.8405-6.4593 28.1724-16.7199 37.3375-.3903.3487-.984.3258-1.3542-.0443L12.6587 18.074Z"/></svg>'),dark:nt('<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="200" height="200" viewBox="0 0 100 100"><path d="M1.22541 61.5228c-.2225-.9485.90748-1.5459 1.59638-.857L39.3342 97.1782c.6889.6889.0915 1.8189-.857 1.5964C20.0515 94.4522 5.54779 79.9485 1.22541 61.5228ZM.00189135 46.8891c-.01764375.2833.08887215.5599.28957165.7606L52.3503 99.7085c.2007.2007.4773.3075.7606.2896 2.3692-.1476 4.6938-.46 6.9624-.9259.7645-.157 1.0301-1.0963.4782-1.6481L2.57595 39.4485c-.55186-.5519-1.49117-.2863-1.648174.4782-.465915 2.2686-.77832 4.5932-.92588465 6.9624ZM4.21093 29.7054c-.16649.3738-.08169.8106.20765 1.1l64.77602 64.776c.2894.2894.7262.3742 1.1.2077 1.7861-.7956 3.5171-1.6927 5.1855-2.684.5521-.328.6373-1.0867.1832-1.5407L8.43566 24.3367c-.45409-.4541-1.21271-.3689-1.54074.1832-.99132 1.6684-1.88843 3.3994-2.68399 5.1855ZM12.6587 18.074c-.3701-.3701-.393-.9637-.0443-1.3541C21.7795 6.45931 35.1114 0 49.9519 0 77.5927 0 100 22.4073 100 50.0481c0 14.8405-6.4593 28.1724-16.7199 37.3375-.3903.3487-.984.3258-1.3542-.0443L12.6587 18.074Z" /></svg>')}},slack:nt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="73 73 124 124"><style>.st0{fill:#e01e5a}.st1{fill:#36c5f0}.st2{fill:#2eb67d}.st3{fill:#ecb22e}</style><path d="M99.4 151.2c0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9h12.9v12.9zM105.9 151.2c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v32.3c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9v-32.3z" class="st0"/><path d="M118.8 99.4c-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v12.9h-12.9zM118.8 105.9c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H86.5c-7.1 0-12.9-5.8-12.9-12.9s5.8-12.9 12.9-12.9h32.3z" class="st1"/><path d="M170.6 118.8c0-7.1 5.8-12.9 12.9-12.9 7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9h-12.9v-12.9zM164.1 118.8c0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9V86.5c0-7.1 5.8-12.9 12.9-12.9 7.1 0 12.9 5.8 12.9 12.9v32.3z" class="st2"/><path d="M151.2 170.6c7.1 0 12.9 5.8 12.9 12.9 0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9v-12.9h12.9zM151.2 164.1c-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9h32.3c7.1 0 12.9 5.8 12.9 12.9 0 7.1-5.8 12.9-12.9 12.9h-32.3z" class="st3"/></svg>'),zoom:nt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 351.845 80"><path d="M73.786 78.835H10.88A10.842 10.842 0 0 1 .833 72.122a10.841 10.841 0 0 1 2.357-11.85L46.764 16.7h-31.23C6.954 16.699 0 9.744 0 1.165h58.014c4.414 0 8.357 2.634 10.046 6.712a10.843 10.843 0 0 1-2.356 11.85L22.13 63.302h36.122c8.58 0 15.534 6.955 15.534 15.534Zm278.059-48.544C351.845 13.588 338.256 0 321.553 0c-8.934 0-16.975 3.89-22.524 10.063C293.48 3.89 285.44 0 276.505 0c-16.703 0-30.291 13.588-30.291 30.291v48.544c8.579 0 15.534-6.955 15.534-15.534v-33.01c0-8.137 6.62-14.757 14.757-14.757s14.757 6.62 14.757 14.757v33.01c0 8.58 6.955 15.534 15.534 15.534V30.291c0-8.137 6.62-14.757 14.757-14.757s14.758 6.62 14.758 14.757v33.01c0 8.58 6.954 15.534 15.534 15.534V30.291ZM238.447 40c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.908-40 40-40 40 17.909 40 40Zm-15.534 0c0-13.512-10.954-24.466-24.466-24.466S173.98 26.488 173.98 40s10.953 24.466 24.466 24.466S222.913 53.512 222.913 40Zm-70.68 0c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.909-40 40-40 40 17.909 40 40Zm-15.534 0c0-13.512-10.954-24.466-24.466-24.466S87.767 26.488 87.767 40s10.954 24.466 24.466 24.466S136.699 53.512 136.699 40Z" style="fill:#0b5cff"/></svg>')},Db=t=>new Pt.OAuthService({client:new ae.OAuth.PKCEClient({redirectMethod:ae.OAuth.RedirectMethod.Web,providerName:"Asana",providerIcon:Et.asana,providerId:"asana",description:"Connect your Asana account"}),clientId:t.clientId??Yr.asana,authorizeUrl:t.authorizeUrl??"https://asana.oauth.raycast.com/authorize",tokenUrl:t.tokenUrl??"https://asana.oauth.raycast.com/token",refreshTokenUrl:t.refreshTokenUrl??"https://asana.oauth.raycast.com/refresh-token",scope:t.scope,personalAccessToken:t.personalAccessToken,onAuthorize:t.onAuthorize,bodyEncoding:t.bodyEncoding,tokenRefreshResponseParser:t.tokenRefreshResponseParser,tokenResponseParser:t.tokenResponseParser});Z.asanaService=Db;var vb=t=>new Pt.OAuthService({client:new ae.OAuth.PKCEClient({redirectMethod:ae.OAuth.RedirectMethod.Web,providerName:"GitHub",providerIcon:Et.github,providerId:"github",description:"Connect your GitHub account"}),clientId:t.clientId??Yr.github,authorizeUrl:t.authorizeUrl??"https://github.oauth.raycast.com/authorize",tokenUrl:t.tokenUrl??"https://github.oauth.raycast.com/token",refreshTokenUrl:t.refreshTokenUrl??"https://github.oauth.raycast.com/refresh-token",scope:t.scope,personalAccessToken:t.personalAccessToken,onAuthorize:t.onAuthorize,bodyEncoding:t.bodyEncoding,tokenRefreshResponseParser:t.tokenRefreshResponseParser,tokenResponseParser:t.tokenResponseParser});Z.githubService=vb;var _b=t=>new Pt.OAuthService({client:new ae.OAuth.PKCEClient({redirectMethod:ae.OAuth.RedirectMethod.AppURI,providerName:"Google",providerIcon:Et.google,providerId:"google",description:"Connect your Google account"}),clientId:t.clientId,authorizeUrl:t.authorizeUrl??"https://accounts.google.com/o/oauth2/v2/auth",tokenUrl:t.tokenUrl??"https://oauth2.googleapis.com/token",refreshTokenUrl:t.tokenUrl,scope:t.scope,personalAccessToken:t.personalAccessToken,bodyEncoding:t.bodyEncoding??"url-encoded",onAuthorize:t.onAuthorize,tokenRefreshResponseParser:t.tokenRefreshResponseParser,tokenResponseParser:t.tokenResponseParser});Z.googleService=_b;var xb=t=>new Pt.OAuthService({client:new ae.OAuth.PKCEClient({redirectMethod:ae.OAuth.RedirectMethod.Web,providerName:"Jira",providerIcon:Et.jira,providerId:"jira",description:"Connect your Jira account"}),clientId:t.clientId,authorizeUrl:t.authorizeUrl??"https://auth.atlassian.com/authorize",tokenUrl:t.tokenUrl??"https://auth.atlassian.com/oauth/token",refreshTokenUrl:t.refreshTokenUrl,scope:t.scope,personalAccessToken:t.personalAccessToken,onAuthorize:t.onAuthorize,bodyEncoding:t.bodyEncoding,tokenRefreshResponseParser:t.tokenRefreshResponseParser,tokenResponseParser:t.tokenResponseParser});Z.jiraService=xb;var Ub=t=>new Pt.OAuthService({client:new ae.OAuth.PKCEClient({redirectMethod:ae.OAuth.RedirectMethod.Web,providerName:"Linear",providerIcon:Et.linear,providerId:"linear",description:"Connect your Linear account"}),clientId:t.clientId??Yr.linear,authorizeUrl:t.authorizeUrl??"https://linear.oauth.raycast.com/authorize",tokenUrl:t.tokenUrl??"https://linear.oauth.raycast.com/token",refreshTokenUrl:t.refreshTokenUrl??"https://linear.oauth.raycast.com/refresh-token",scope:t.scope,extraParameters:{actor:"user"},onAuthorize:t.onAuthorize,bodyEncoding:t.bodyEncoding,tokenRefreshResponseParser:t.tokenRefreshResponseParser,tokenResponseParser:t.tokenResponseParser});Z.linearService=Ub;var wb=t=>new Pt.OAuthService({client:new ae.OAuth.PKCEClient({redirectMethod:ae.OAuth.RedirectMethod.Web,providerName:"Slack",providerIcon:Et.slack,providerId:"slack",description:"Connect your Slack account"}),clientId:t.clientId??Yr.slack,authorizeUrl:t.authorizeUrl??"https://slack.oauth.raycast.com/authorize",tokenUrl:t.tokenUrl??"https://slack.oauth.raycast.com/token",refreshTokenUrl:t.tokenUrl??"https://slack.oauth.raycast.com/refresh-token",scope:"",extraParameters:{user_scope:t.scope},personalAccessToken:t.personalAccessToken,bodyEncoding:t.tokenUrl?t.bodyEncoding??"url-encoded":"json",onAuthorize:t.onAuthorize,tokenRefreshResponseParser:t.tokenRefreshResponseParser,tokenResponseParser:t.tokenResponseParser??(e=>({access_token:e.authed_user.access_token,scope:e.authed_user.scope}))});Z.slackService=wb;var Tb=t=>new Pt.OAuthService({client:new ae.OAuth.PKCEClient({redirectMethod:ae.OAuth.RedirectMethod.Web,providerName:"Zoom",providerIcon:Et.zoom,providerId:"zoom",description:"Connect your Zoom account"}),clientId:t.clientId,authorizeUrl:t.authorizeUrl??"https://zoom.us/oauth/authorize",tokenUrl:t.tokenUrl??"https://zoom.us/oauth/token",refreshTokenUrl:t.refreshTokenUrl,scope:t.scope,personalAccessToken:t.personalAccessToken,bodyEncoding:t.bodyEncoding??"url-encoded",onAuthorize:t.onAuthorize,tokenRefreshResponseParser:t.tokenRefreshResponseParser,tokenResponseParser:t.tokenResponseParser});Z.zoomService=Tb});var jo=f(ea=>{"use strict";var Ob=ea&&ea.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(ea,"__esModule",{value:!0});ea.OAuthService=void 0;var Zu=Ob(va()),Ct=Ju(),Le=class{constructor(e){this.clientId=e.clientId,this.scope=Array.isArray(e.scope)?e.scope.join(" "):e.scope,this.personalAccessToken=e.personalAccessToken,this.bodyEncoding=e.bodyEncoding,this.client=e.client,this.extraParameters=e.extraParameters,this.authorizeUrl=e.authorizeUrl,this.tokenUrl=e.tokenUrl,this.refreshTokenUrl=e.refreshTokenUrl,this.onAuthorize=e.onAuthorize,this.tokenResponseParser=e.tokenResponseParser??(a=>a),this.tokenRefreshResponseParser=e.tokenRefreshResponseParser??(a=>a),this.authorize=this.authorize.bind(this)}async authorize(){let e=await this.client.getTokens();if(e?.accessToken){if(e.refreshToken&&e.isExpired()){let o=await this.refreshTokens({token:e.refreshToken});if(o)return await this.client.setTokens(o),o.access_token}return e.accessToken}let a=await this.client.authorizationRequest({endpoint:this.authorizeUrl,clientId:this.clientId,scope:this.scope,extraParameters:this.extraParameters}),{authorizationCode:r}=await this.client.authorize(a),n=await this.fetchTokens({authRequest:a,authorizationCode:r});return await this.client.setTokens(n),n.access_token}async fetchTokens({authRequest:e,authorizationCode:a}){let r;if(this.bodyEncoding==="url-encoded"){let i=new URLSearchParams;i.append("client_id",this.clientId),i.append("code",a),i.append("code_verifier",e.codeVerifier),i.append("grant_type","authorization_code"),i.append("redirect_uri",e.redirectURI),r={body:i}}else r={body:JSON.stringify({client_id:this.clientId,code:a,code_verifier:e.codeVerifier,grant_type:"authorization_code",redirect_uri:e.redirectURI}),headers:{"Content-Type":"application/json"}};let n=await(0,Zu.default)(this.tokenUrl,{method:"POST",...r});if(!n.ok){let i=await n.text();throw console.error("fetch tokens error:",i),new Error(`Error while fetching tokens: ${n.status} (${n.statusText})
${i}`)}let o=this.tokenResponseParser(await n.json());return Array.isArray(o.scope)?{...o,scope:o.scope.join(" ")}:o}async refreshTokens({token:e}){let a;if(this.bodyEncoding==="url-encoded"){let n=new URLSearchParams;n.append("client_id",this.clientId),n.append("refresh_token",e),n.append("grant_type","refresh_token"),a={body:n}}else a={body:JSON.stringify({client_id:this.clientId,refresh_token:e,grant_type:"refresh_token"}),headers:{"Content-Type":"application/json"}};let r=await(0,Zu.default)(this.refreshTokenUrl??this.tokenUrl,{method:"POST",...a});if(r.ok){let n=this.tokenRefreshResponseParser(await r.json());return n.refresh_token=n.refresh_token??e,n}else{let n=await r.text();console.error("refresh tokens error:",n),this.client.description=`${this.client.providerName} needs you to sign-in again. Press \u23CE or click the button below to continue.`,await this.client.removeTokens(),await this.authorize()}}};ea.OAuthService=Le;Le.asana=Ct.asanaService;Le.github=Ct.githubService;Le.google=Ct.googleService;Le.jira=Ct.jiraService;Le.linear=Ct.linearService;Le.slack=Ct.slackService;Le.zoom=Ct.zoomService});var Xu=f(ta=>{"use strict";Object.defineProperty(ta,"__esModule",{value:!0});ta.getAccessToken=ta.withAccessToken=void 0;var Lb=require("react/jsx-runtime"),qb=require("@raycast/api"),ot=null,Dt=null,zo=null,$o=null,Ho=null;function Bb(t){return qb.environment.commandMode==="no-view"?e=>async r=>{if(!ot){ot=t.personalAccessToken??await t.authorize(),Dt=t.personalAccessToken?"personal":"oauth";let n=(await t.client?.getTokens())?.idToken;t.onAuthorize&&await Promise.resolve(t.onAuthorize({token:ot,type:Dt,idToken:n}))}return e(r)}:e=>{let a=r=>{t.personalAccessToken?(ot=t.personalAccessToken,Dt="personal"):(zo||(zo=Go(t.authorize())),ot=zo.read(),Dt="oauth");let n;return t.client&&($o||($o=Go(t.client.getTokens())),n=$o.read()?.idToken),!Ho&&t.onAuthorize&&(Ho=Go(Promise.resolve(t.onAuthorize({token:ot,type:Dt,idToken:n})))),Ho?.read(),(0,Lb.jsx)(e,{...r})};return a.displayName=`withAccessToken(${e.displayName||e.name})`,a}}ta.withAccessToken=Bb;function Nb(){if(!ot||!Dt)throw new Error("getAccessToken must be used when authenticated (eg. used inside `withAccessToken`)");return{token:ot,type:Dt}}ta.getAccessToken=Nb;function Go(t){let e="pending",a,r=t.then(o=>{e="success",a=o},o=>{e="error",a=o});return{read:()=>{switch(e){case"pending":throw r;case"error":throw a;default:return a}}}}});var tl=f(it=>{"use strict";var kb=it&&it.__createBinding||(Object.create?(function(t,e,a,r){r===void 0&&(r=a);var n=Object.getOwnPropertyDescriptor(e,a);(!n||("get"in n?!e.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return e[a]}}),Object.defineProperty(t,r,n)}):(function(t,e,a,r){r===void 0&&(r=a),t[r]=e[a]})),el=it&&it.__exportStar||function(t,e){for(var a in t)a!=="default"&&!Object.prototype.hasOwnProperty.call(e,a)&&kb(e,t,a)};Object.defineProperty(it,"__esModule",{value:!0});el(jo(),it);el(Xu(),it)});var il=f(Re=>{"use strict";var al=Re&&Re.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Re,"__esModule",{value:!0});Re.createDeeplink=Re.createExtensionDeeplink=Re.createScriptCommandDeeplink=Re.DeeplinkType=void 0;var Wo=require("@raycast/api"),Vb=al(require("node:fs")),Fb=al(require("node:path")),Qo;(function(t){t.ScriptCommand="script-command",t.Extension="extension"})(Qo||(Re.DeeplinkType=Qo={}));function rl(){return Wo.environment.raycastVersion.includes("alpha")?"raycastinternal://":"raycast://"}function jb(){let t=JSON.parse(Vb.default.readFileSync(Fb.default.join(Wo.environment.assetsPath,"..","package.json"),"utf8"));return t.owner||t.author}function nl(t){let e=`${rl()}script-commands/${t.command}`;if(t.arguments){let a="";for(let r of t.arguments)a+="&arguments="+encodeURIComponent(r);e+="?"+a.substring(1)}return e}Re.createScriptCommandDeeplink=nl;function ol(t){let e=jb(),a=Wo.environment.extensionName;"ownerOrAuthorName"in t&&"extensionName"in t&&(e=t.ownerOrAuthorName,a=t.extensionName);let r=`${rl()}extensions/${e}/${a}/${t.command}`,n="";return t.launchType&&(n+="&launchType="+encodeURIComponent(t.launchType)),t.arguments&&(n+="&arguments="+encodeURIComponent(JSON.stringify(t.arguments))),t.context&&(n+="&context="+encodeURIComponent(JSON.stringify(t.context))),t.fallbackText&&(n+="&fallbackText="+encodeURIComponent(t.fallbackText)),n&&(r+="?"+n.substring(1)),r}Re.createExtensionDeeplink=ol;function zb(t){return t.type===Qo.ScriptCommand?nl(t):ol(t)}Re.createDeeplink=zb});var sl=f(Jr=>{"use strict";Object.defineProperty(Jr,"__esModule",{value:!0});Jr.executeSQL=void 0;var $b=Oo();function Hb(t,e){return(0,$b.baseExecuteSQL)(t,e)}Jr.executeSQL=Hb});var ul=f(aa=>{"use strict";var Gb=aa&&aa.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(aa,"__esModule",{value:!0});aa.runAppleScript=void 0;var Qb=Gb(require("node:child_process")),Ta=qr();async function Wb(t,e,a){let{humanReadableOutput:r,language:n,timeout:o,...i}=Array.isArray(e)?a||{}:e||{},s=r!==!1?[]:["-ss"];n==="JavaScript"&&s.push("-l","JavaScript"),Array.isArray(e)&&s.push("-",...e);let u=Qb.default.spawn("osascript",s,{...i,env:{PATH:"/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"}}),l=(0,Ta.getSpawnedPromise)(u,{timeout:o??1e4});u.stdin.end(t);let[{error:c,exitCode:p,signal:y,timedOut:g},S,d]=await(0,Ta.getSpawnedResult)(u,{encoding:"utf8"},l),b=(0,Ta.handleOutput)({stripFinalNewline:!0},S),I=(0,Ta.handleOutput)({stripFinalNewline:!0},d);return(0,Ta.defaultParsing)({stdout:b,stderr:I,error:c,exitCode:p,signal:y,timedOut:g,command:"osascript",options:a,parentError:new Error})}aa.runAppleScript=Wb});var ll=f(Xr=>{"use strict";Object.defineProperty(Xr,"__esModule",{value:!0});Xr.withCache=void 0;var Kb=require("@raycast/api"),Zr=et();function Yb(t,e){let a=new Kb.Cache({namespace:(0,Zr.hash)(t)}),r=async(...n)=>{let o=(0,Zr.hash)(n||[])+e?.internal_cacheKeySuffix,i=a.get(o);if(i){let{data:u,timestamp:l}=JSON.parse(i,Zr.reviver);if(!(e?.maxAge&&Date.now()-l>e.maxAge)&&(!e?.validate||e.validate(u)))return u}let s=await t(...n);return a.set(o,JSON.stringify({data:s,timestamp:Date.now()},Zr.replacer)),s};return r.clearCache=()=>{a.clear()},r}Xr.withCache=Yb});var st=f(N=>{"use strict";var Jb=N&&N.__createBinding||(Object.create?(function(t,e,a,r){r===void 0&&(r=a);var n=Object.getOwnPropertyDescriptor(e,a);(!n||("get"in n?!e.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return e[a]}}),Object.defineProperty(t,r,n)}):(function(t,e,a,r){r===void 0&&(r=a),t[r]=e[a]})),G=N&&N.__exportStar||function(t,e){for(var a in t)a!=="default"&&!Object.prototype.hasOwnProperty.call(e,a)&&Jb(e,t,a)};Object.defineProperty(N,"__esModule",{value:!0});G(Ft(),N);G(_r(),N);G(Aa(),N);G(du(),N);G(Mu(),N);G(Au(),N);G(Cu(),N);G(vu(),N);G(xu(),N);G(Tu(),N);G(qu(),N);G(Yu(),N);G(tl(),N);G(il(),N);G(sl(),N);G(ul(),N);G(ma(),N);G(ll(),N)});var ne={};kt(ne,{default:()=>Rl.default});var Rl,sn=Io(()=>{re(ne,require("formdata-polyfill/esm.min.js"));Rl=j(require("formdata-polyfill/esm.min.js"))});var ce={};kt(ce,{default:()=>El.default});var El,Zo=Io(()=>{re(ce,require("fetch-blob/from.js"));El=j(require("fetch-blob/from.js"))});var Dl={};kt(Dl,{toFormData:()=>Mg});function Ig(t){let e=t.match(/\bfilename=("(.*?)"|([^()<>@,;:\\"/[\]?={}\s\t]+))($|;\s)/i);if(!e)return;let a=e[2]||e[3]||"",r=a.slice(a.lastIndexOf("\\")+1);return r=r.replace(/%22/g,'"'),r=r.replace(/&#(\d{4});/g,(n,o)=>String.fromCharCode(o)),r}async function Mg(t,e){if(!/multipart/i.test(e))throw new TypeError("Failed to fetch");let a=e.match(/boundary=(?:"([^"]+)"|([^;]+))/i);if(!a)throw new TypeError("no or bad content-type header, no multipart boundary");let r=new Xo(a[1]||a[2]),n,o,i,s,u,l,c=[],p=new ne.FormData,y=I=>{i+=b.decode(I,{stream:!0})},g=I=>{c.push(I)},S=()=>{let I=new ce.File(c,l,{type:u});p.append(s,I)},d=()=>{p.append(s,i)},b=new TextDecoder("utf-8");b.decode(),r.onPartBegin=function(){r.onPartData=y,r.onPartEnd=d,n="",o="",i="",s="",u="",l=null,c.length=0},r.onHeaderField=function(I){n+=b.decode(I,{stream:!0})},r.onHeaderValue=function(I){o+=b.decode(I,{stream:!0})},r.onHeaderEnd=function(){if(o+=b.decode(),n=n.toLowerCase(),n==="content-disposition"){let I=o.match(/\bname=("([^"]*)"|([^()<>@,;:\\"/[\]?={}\s\t]+))/i);I&&(s=I[2]||I[3]||""),l=Ig(o),l&&(r.onPartData=g,r.onPartEnd=S)}else n==="content-type"&&(u=o);o="",n=""};for await(let I of t)r.write(I);return r.end(),p}var qe,q,Cl,pt,ln,pn,yg,Ba,dg,Sg,bg,gg,xt,Xo,vl=Io(()=>{Zo();sn();qe=0,q={START_BOUNDARY:qe++,HEADER_FIELD_START:qe++,HEADER_FIELD:qe++,HEADER_VALUE_START:qe++,HEADER_VALUE:qe++,HEADER_VALUE_ALMOST_DONE:qe++,HEADERS_ALMOST_DONE:qe++,PART_DATA_START:qe++,PART_DATA:qe++,END:qe++},Cl=1,pt={PART_BOUNDARY:Cl,LAST_BOUNDARY:Cl*=2},ln=10,pn=13,yg=32,Ba=45,dg=58,Sg=97,bg=122,gg=t=>t|32,xt=()=>{},Xo=class{constructor(e){this.index=0,this.flags=0,this.onHeaderEnd=xt,this.onHeaderField=xt,this.onHeadersEnd=xt,this.onHeaderValue=xt,this.onPartBegin=xt,this.onPartData=xt,this.onPartEnd=xt,this.boundaryChars={},e=`\r
--`+e;let a=new Uint8Array(e.length);for(let r=0;r<e.length;r++)a[r]=e.charCodeAt(r),this.boundaryChars[a[r]]=!0;this.boundary=a,this.lookbehind=new Uint8Array(this.boundary.length+8),this.state=q.START_BOUNDARY}write(e){let a=0,r=e.length,n=this.index,{lookbehind:o,boundary:i,boundaryChars:s,index:u,state:l,flags:c}=this,p=this.boundary.length,y=p-1,g=e.length,S,d,b=m=>{this[m+"Mark"]=a},I=m=>{delete this[m+"Mark"]},M=(m,h,A,D)=>{(h===void 0||h!==A)&&this[m](D&&D.subarray(h,A))},R=(m,h)=>{let A=m+"Mark";A in this&&(h?(M(m,this[A],a,e),delete this[A]):(M(m,this[A],e.length,e),this[A]=0))};for(a=0;a<r;a++)switch(S=e[a],l){case q.START_BOUNDARY:if(u===i.length-2){if(S===Ba)c|=pt.LAST_BOUNDARY;else if(S!==pn)return;u++;break}else if(u-1===i.length-2){if(c&pt.LAST_BOUNDARY&&S===Ba)l=q.END,c=0;else if(!(c&pt.LAST_BOUNDARY)&&S===ln)u=0,M("onPartBegin"),l=q.HEADER_FIELD_START;else return;break}S!==i[u+2]&&(u=-2),S===i[u+2]&&u++;break;case q.HEADER_FIELD_START:l=q.HEADER_FIELD,b("onHeaderField"),u=0;case q.HEADER_FIELD:if(S===pn){I("onHeaderField"),l=q.HEADERS_ALMOST_DONE;break}if(u++,S===Ba)break;if(S===dg){if(u===1)return;R("onHeaderField",!0),l=q.HEADER_VALUE_START;break}if(d=gg(S),d<Sg||d>bg)return;break;case q.HEADER_VALUE_START:if(S===yg)break;b("onHeaderValue"),l=q.HEADER_VALUE;case q.HEADER_VALUE:S===pn&&(R("onHeaderValue",!0),M("onHeaderEnd"),l=q.HEADER_VALUE_ALMOST_DONE);break;case q.HEADER_VALUE_ALMOST_DONE:if(S!==ln)return;l=q.HEADER_FIELD_START;break;case q.HEADERS_ALMOST_DONE:if(S!==ln)return;M("onHeadersEnd"),l=q.PART_DATA_START;break;case q.PART_DATA_START:l=q.PART_DATA,b("onPartData");case q.PART_DATA:if(n=u,u===0){for(a+=y;a<g&&!(e[a]in s);)a+=p;a-=y,S=e[a]}if(u<i.length)i[u]===S?(u===0&&R("onPartData",!0),u++):u=0;else if(u===i.length)u++,S===pn?c|=pt.PART_BOUNDARY:S===Ba?c|=pt.LAST_BOUNDARY:u=0;else if(u-1===i.length)if(c&pt.PART_BOUNDARY){if(u=0,S===ln){c&=~pt.PART_BOUNDARY,M("onPartEnd"),M("onPartBegin"),l=q.HEADER_FIELD_START;break}}else c&pt.LAST_BOUNDARY&&S===Ba?(M("onPartEnd"),l=q.END,c=0):u=0;if(u>0)o[u-1]=S;else if(n>0){let m=new Uint8Array(o.buffer,o.byteOffset,o.byteLength);M("onPartData",0,n,m),n=0,b("onPartData"),a--}break;case q.END:break;default:throw new Error(`Unexpected state entered: ${l}`)}R("onHeaderField"),R("onHeaderValue"),R("onPartData"),this.index=u,this.state=l,this.flags=c}end(){if(this.state===q.HEADER_FIELD_START&&this.index===0||this.state===q.PART_DATA&&this.index===this.boundary.length)this.onPartEnd();else if(this.state!==q.END)throw new Error("MultipartParser.end(): stream ended unexpectedly")}}});var T=f(K=>{"use strict";var ii=Symbol.for("yaml.alias"),ip=Symbol.for("yaml.document"),Mn=Symbol.for("yaml.map"),sp=Symbol.for("yaml.pair"),si=Symbol.for("yaml.scalar"),mn=Symbol.for("yaml.seq"),Ye=Symbol.for("yaml.node.type"),NI=t=>!!t&&typeof t=="object"&&t[Ye]===ii,kI=t=>!!t&&typeof t=="object"&&t[Ye]===ip,VI=t=>!!t&&typeof t=="object"&&t[Ye]===Mn,FI=t=>!!t&&typeof t=="object"&&t[Ye]===sp,up=t=>!!t&&typeof t=="object"&&t[Ye]===si,jI=t=>!!t&&typeof t=="object"&&t[Ye]===mn;function lp(t){if(t&&typeof t=="object")switch(t[Ye]){case Mn:case mn:return!0}return!1}function zI(t){if(t&&typeof t=="object")switch(t[Ye]){case ii:case Mn:case si:case mn:return!0}return!1}var $I=t=>(up(t)||lp(t))&&!!t.anchor;K.ALIAS=ii;K.DOC=ip;K.MAP=Mn;K.NODE_TYPE=Ye;K.PAIR=sp;K.SCALAR=si;K.SEQ=mn;K.hasAnchor=$I;K.isAlias=NI;K.isCollection=lp;K.isDocument=kI;K.isMap=VI;K.isNode=zI;K.isPair=FI;K.isScalar=up;K.isSeq=jI});var za=f(ui=>{"use strict";var $=T(),se=Symbol("break visit"),pp=Symbol("skip children"),ke=Symbol("remove node");function fn(t,e){let a=cp(e);$.isDocument(t)?ia(null,t.contents,a,Object.freeze([t]))===ke&&(t.contents=null):ia(null,t,a,Object.freeze([]))}fn.BREAK=se;fn.SKIP=pp;fn.REMOVE=ke;function ia(t,e,a,r){let n=yp(t,e,a,r);if($.isNode(n)||$.isPair(n))return dp(t,r,n),ia(t,n,a,r);if(typeof n!="symbol"){if($.isCollection(e)){r=Object.freeze(r.concat(e));for(let o=0;o<e.items.length;++o){let i=ia(o,e.items[o],a,r);if(typeof i=="number")o=i-1;else{if(i===se)return se;i===ke&&(e.items.splice(o,1),o-=1)}}}else if($.isPair(e)){r=Object.freeze(r.concat(e));let o=ia("key",e.key,a,r);if(o===se)return se;o===ke&&(e.key=null);let i=ia("value",e.value,a,r);if(i===se)return se;i===ke&&(e.value=null)}}return n}async function Rn(t,e){let a=cp(e);$.isDocument(t)?await sa(null,t.contents,a,Object.freeze([t]))===ke&&(t.contents=null):await sa(null,t,a,Object.freeze([]))}Rn.BREAK=se;Rn.SKIP=pp;Rn.REMOVE=ke;async function sa(t,e,a,r){let n=await yp(t,e,a,r);if($.isNode(n)||$.isPair(n))return dp(t,r,n),sa(t,n,a,r);if(typeof n!="symbol"){if($.isCollection(e)){r=Object.freeze(r.concat(e));for(let o=0;o<e.items.length;++o){let i=await sa(o,e.items[o],a,r);if(typeof i=="number")o=i-1;else{if(i===se)return se;i===ke&&(e.items.splice(o,1),o-=1)}}}else if($.isPair(e)){r=Object.freeze(r.concat(e));let o=await sa("key",e.key,a,r);if(o===se)return se;o===ke&&(e.key=null);let i=await sa("value",e.value,a,r);if(i===se)return se;i===ke&&(e.value=null)}}return n}function cp(t){return typeof t=="object"&&(t.Collection||t.Node||t.Value)?Object.assign({Alias:t.Node,Map:t.Node,Scalar:t.Node,Seq:t.Node},t.Value&&{Map:t.Value,Scalar:t.Value,Seq:t.Value},t.Collection&&{Map:t.Collection,Seq:t.Collection},t):t}function yp(t,e,a,r){if(typeof a=="function")return a(t,e,r);if($.isMap(e))return a.Map?.(t,e,r);if($.isSeq(e))return a.Seq?.(t,e,r);if($.isPair(e))return a.Pair?.(t,e,r);if($.isScalar(e))return a.Scalar?.(t,e,r);if($.isAlias(e))return a.Alias?.(t,e,r)}function dp(t,e,a){let r=e[e.length-1];if($.isCollection(r))r.items[t]=a;else if($.isPair(r))t==="key"?r.key=a:r.value=a;else if($.isDocument(r))r.contents=a;else{let n=$.isAlias(r)?"alias":"scalar";throw new Error(`Cannot replace node with ${n} parent`)}}ui.visit=fn;ui.visitAsync=Rn});var li=f(bp=>{"use strict";var Sp=T(),HI=za(),GI={"!":"%21",",":"%2C","[":"%5B","]":"%5D","{":"%7B","}":"%7D"},QI=t=>t.replace(/[!,[\]{}]/g,e=>GI[e]),$a=class t{constructor(e,a){this.docStart=null,this.docEnd=!1,this.yaml=Object.assign({},t.defaultYaml,e),this.tags=Object.assign({},t.defaultTags,a)}clone(){let e=new t(this.yaml,this.tags);return e.docStart=this.docStart,e}atDocument(){let e=new t(this.yaml,this.tags);switch(this.yaml.version){case"1.1":this.atNextDocument=!0;break;case"1.2":this.atNextDocument=!1,this.yaml={explicit:t.defaultYaml.explicit,version:"1.2"},this.tags=Object.assign({},t.defaultTags);break}return e}add(e,a){this.atNextDocument&&(this.yaml={explicit:t.defaultYaml.explicit,version:"1.1"},this.tags=Object.assign({},t.defaultTags),this.atNextDocument=!1);let r=e.trim().split(/[ \t]+/),n=r.shift();switch(n){case"%TAG":{if(r.length!==2&&(a(0,"%TAG directive should contain exactly two parts"),r.length<2))return!1;let[o,i]=r;return this.tags[o]=i,!0}case"%YAML":{if(this.yaml.explicit=!0,r.length!==1)return a(0,"%YAML directive should contain exactly one part"),!1;let[o]=r;if(o==="1.1"||o==="1.2")return this.yaml.version=o,!0;{let i=/^\d+\.\d+$/.test(o);return a(6,`Unsupported YAML version ${o}`,i),!1}}default:return a(0,`Unknown directive ${n}`,!0),!1}}tagName(e,a){if(e==="!")return"!";if(e[0]!=="!")return a(`Not a valid tag: ${e}`),null;if(e[1]==="<"){let i=e.slice(2,-1);return i==="!"||i==="!!"?(a(`Verbatim tags aren't resolved, so ${e} is invalid.`),null):(e[e.length-1]!==">"&&a("Verbatim tags must end with a >"),i)}let[,r,n]=e.match(/^(.*!)([^!]*)$/s);n||a(`The ${e} tag has no suffix`);let o=this.tags[r];if(o)try{return o+decodeURIComponent(n)}catch(i){return a(String(i)),null}return r==="!"?e:(a(`Could not resolve tag: ${e}`),null)}tagString(e){for(let[a,r]of Object.entries(this.tags))if(e.startsWith(r))return a+QI(e.substring(r.length));return e[0]==="!"?e:`!<${e}>`}toString(e){let a=this.yaml.explicit?[`%YAML ${this.yaml.version||"1.2"}`]:[],r=Object.entries(this.tags),n;if(e&&r.length>0&&Sp.isNode(e.contents)){let o={};HI.visit(e.contents,(i,s)=>{Sp.isNode(s)&&s.tag&&(o[s.tag]=!0)}),n=Object.keys(o)}else n=[];for(let[o,i]of r)o==="!!"&&i==="tag:yaml.org,2002:"||(!e||n.some(s=>s.startsWith(i)))&&a.push(`%TAG ${o} ${i}`);return a.join(`
`)}};$a.defaultYaml={explicit:!1,version:"1.2"};$a.defaultTags={"!!":"tag:yaml.org,2002:"};bp.Directives=$a});var An=f(Ha=>{"use strict";var gp=T(),WI=za();function KI(t){if(/[\x00-\x19\s,[\]{}]/.test(t)){let a=`Anchor must not contain whitespace or control characters: ${JSON.stringify(t)}`;throw new Error(a)}return!0}function Ip(t){let e=new Set;return WI.visit(t,{Value(a,r){r.anchor&&e.add(r.anchor)}}),e}function Mp(t,e){for(let a=1;;++a){let r=`${t}${a}`;if(!e.has(r))return r}}function YI(t,e){let a=[],r=new Map,n=null;return{onAnchor:o=>{a.push(o),n??(n=Ip(t));let i=Mp(e,n);return n.add(i),i},setAnchors:()=>{for(let o of a){let i=r.get(o);if(typeof i=="object"&&i.anchor&&(gp.isScalar(i.node)||gp.isCollection(i.node)))i.node.anchor=i.anchor;else{let s=new Error("Failed to resolve repeated object (this should not happen)");throw s.source=o,s}}},sourceObjects:r}}Ha.anchorIsValid=KI;Ha.anchorNames=Ip;Ha.createNodeAnchors=YI;Ha.findNewAnchor=Mp});var pi=f(mp=>{"use strict";function Ga(t,e,a,r){if(r&&typeof r=="object")if(Array.isArray(r))for(let n=0,o=r.length;n<o;++n){let i=r[n],s=Ga(t,r,String(n),i);s===void 0?delete r[n]:s!==i&&(r[n]=s)}else if(r instanceof Map)for(let n of Array.from(r.keys())){let o=r.get(n),i=Ga(t,r,n,o);i===void 0?r.delete(n):i!==o&&r.set(n,i)}else if(r instanceof Set)for(let n of Array.from(r)){let o=Ga(t,r,n,n);o===void 0?r.delete(n):o!==n&&(r.delete(n),r.add(o))}else for(let[n,o]of Object.entries(r)){let i=Ga(t,r,n,o);i===void 0?delete r[n]:i!==o&&(r[n]=i)}return t.call(e,a,r)}mp.applyReviver=Ga});var ct=f(Rp=>{"use strict";var JI=T();function fp(t,e,a){if(Array.isArray(t))return t.map((r,n)=>fp(r,String(n),a));if(t&&typeof t.toJSON=="function"){if(!a||!JI.hasAnchor(t))return t.toJSON(e,a);let r={aliasCount:0,count:1,res:void 0};a.anchors.set(t,r),a.onCreate=o=>{r.res=o,delete a.onCreate};let n=t.toJSON(e,a);return a.onCreate&&a.onCreate(n),n}return typeof t=="bigint"&&!a?.keep?Number(t):t}Rp.toJS=fp});var hn=f(hp=>{"use strict";var ZI=pi(),Ap=T(),XI=ct(),ci=class{constructor(e){Object.defineProperty(this,Ap.NODE_TYPE,{value:e})}clone(){let e=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return this.range&&(e.range=this.range.slice()),e}toJS(e,{mapAsMap:a,maxAliasCount:r,onAnchor:n,reviver:o}={}){if(!Ap.isDocument(e))throw new TypeError("A document argument is required");let i={anchors:new Map,doc:e,keep:!0,mapAsMap:a===!0,mapKeyWarned:!1,maxAliasCount:typeof r=="number"?r:100},s=XI.toJS(this,"",i);if(typeof n=="function")for(let{count:u,res:l}of i.anchors.values())n(l,u);return typeof o=="function"?ZI.applyReviver(o,{"":s},"",s):s}};hp.NodeBase=ci});var Qa=f(Pp=>{"use strict";var eM=An(),tM=za(),ua=T(),aM=hn(),rM=ct(),yi=class extends aM.NodeBase{constructor(e){super(ua.ALIAS),this.source=e,Object.defineProperty(this,"tag",{set(){throw new Error("Alias nodes cannot have tags")}})}resolve(e,a){let r;a?.aliasResolveCache?r=a.aliasResolveCache:(r=[],tM.visit(e,{Node:(o,i)=>{(ua.isAlias(i)||ua.hasAnchor(i))&&r.push(i)}}),a&&(a.aliasResolveCache=r));let n;for(let o of r){if(o===this)break;o.anchor===this.source&&(n=o)}return n}toJSON(e,a){if(!a)return{source:this.source};let{anchors:r,doc:n,maxAliasCount:o}=a,i=this.resolve(n,a);if(!i){let u=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new ReferenceError(u)}let s=r.get(i);if(s||(rM.toJS(i,null,a),s=r.get(i)),s?.res===void 0){let u="This should not happen: Alias anchor was not resolved?";throw new ReferenceError(u)}if(o>=0&&(s.count+=1,s.aliasCount===0&&(s.aliasCount=Pn(n,i,r)),s.count*s.aliasCount>o)){let u="Excessive alias count indicates a resource exhaustion attack";throw new ReferenceError(u)}return s.res}toString(e,a,r){let n=`*${this.source}`;if(e){if(eM.anchorIsValid(this.source),e.options.verifyAliasOrder&&!e.anchors.has(this.source)){let o=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new Error(o)}if(e.implicitKey)return`${n} `}return n}};function Pn(t,e,a){if(ua.isAlias(e)){let r=e.resolve(t),n=a&&r&&a.get(r);return n?n.count*n.aliasCount:0}else if(ua.isCollection(e)){let r=0;for(let n of e.items){let o=Pn(t,n,a);o>r&&(r=o)}return r}else if(ua.isPair(e)){let r=Pn(t,e.key,a),n=Pn(t,e.value,a);return Math.max(r,n)}return 1}Pp.Alias=yi});var z=f(di=>{"use strict";var nM=T(),oM=hn(),iM=ct(),sM=t=>!t||typeof t!="function"&&typeof t!="object",yt=class extends oM.NodeBase{constructor(e){super(nM.SCALAR),this.value=e}toJSON(e,a){return a?.keep?this.value:iM.toJS(this.value,e,a)}toString(){return String(this.value)}};yt.BLOCK_FOLDED="BLOCK_FOLDED";yt.BLOCK_LITERAL="BLOCK_LITERAL";yt.PLAIN="PLAIN";yt.QUOTE_DOUBLE="QUOTE_DOUBLE";yt.QUOTE_SINGLE="QUOTE_SINGLE";di.Scalar=yt;di.isScalarValue=sM});var Wa=f(Cp=>{"use strict";var uM=Qa(),Tt=T(),Ep=z(),lM="tag:yaml.org,2002:";function pM(t,e,a){if(e){let r=a.filter(o=>o.tag===e),n=r.find(o=>!o.format)??r[0];if(!n)throw new Error(`Tag ${e} not found`);return n}return a.find(r=>r.identify?.(t)&&!r.format)}function cM(t,e,a){if(Tt.isDocument(t)&&(t=t.contents),Tt.isNode(t))return t;if(Tt.isPair(t)){let p=a.schema[Tt.MAP].createNode?.(a.schema,null,a);return p.items.push(t),p}(t instanceof String||t instanceof Number||t instanceof Boolean||typeof BigInt<"u"&&t instanceof BigInt)&&(t=t.valueOf());let{aliasDuplicateObjects:r,onAnchor:n,onTagObj:o,schema:i,sourceObjects:s}=a,u;if(r&&t&&typeof t=="object"){if(u=s.get(t),u)return u.anchor??(u.anchor=n(t)),new uM.Alias(u.anchor);u={anchor:null,node:null},s.set(t,u)}e?.startsWith("!!")&&(e=lM+e.slice(2));let l=pM(t,e,i.tags);if(!l){if(t&&typeof t.toJSON=="function"&&(t=t.toJSON()),!t||typeof t!="object"){let p=new Ep.Scalar(t);return u&&(u.node=p),p}l=t instanceof Map?i[Tt.MAP]:Symbol.iterator in Object(t)?i[Tt.SEQ]:i[Tt.MAP]}o&&(o(l),delete a.onTagObj);let c=l?.createNode?l.createNode(a.schema,t,a):typeof l?.nodeClass?.from=="function"?l.nodeClass.from(a.schema,t,a):new Ep.Scalar(t);return e?c.tag=e:l.default||(c.tag=l.tag),u&&(u.node=c),c}Cp.createNode=cM});var Cn=f(En=>{"use strict";var yM=Wa(),Ve=T(),dM=hn();function Si(t,e,a){let r=a;for(let n=e.length-1;n>=0;--n){let o=e[n];if(typeof o=="number"&&Number.isInteger(o)&&o>=0){let i=[];i[o]=r,r=i}else r=new Map([[o,r]])}return yM.createNode(r,void 0,{aliasDuplicateObjects:!1,keepUndefined:!1,onAnchor:()=>{throw new Error("This should not happen, please report a bug.")},schema:t,sourceObjects:new Map})}var Dp=t=>t==null||typeof t=="object"&&!!t[Symbol.iterator]().next().done,bi=class extends dM.NodeBase{constructor(e,a){super(e),Object.defineProperty(this,"schema",{value:a,configurable:!0,enumerable:!1,writable:!0})}clone(e){let a=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return e&&(a.schema=e),a.items=a.items.map(r=>Ve.isNode(r)||Ve.isPair(r)?r.clone(e):r),this.range&&(a.range=this.range.slice()),a}addIn(e,a){if(Dp(e))this.add(a);else{let[r,...n]=e,o=this.get(r,!0);if(Ve.isCollection(o))o.addIn(n,a);else if(o===void 0&&this.schema)this.set(r,Si(this.schema,n,a));else throw new Error(`Expected YAML collection at ${r}. Remaining path: ${n}`)}}deleteIn(e){let[a,...r]=e;if(r.length===0)return this.delete(a);let n=this.get(a,!0);if(Ve.isCollection(n))return n.deleteIn(r);throw new Error(`Expected YAML collection at ${a}. Remaining path: ${r}`)}getIn(e,a){let[r,...n]=e,o=this.get(r,!0);return n.length===0?!a&&Ve.isScalar(o)?o.value:o:Ve.isCollection(o)?o.getIn(n,a):void 0}hasAllNullValues(e){return this.items.every(a=>{if(!Ve.isPair(a))return!1;let r=a.value;return r==null||e&&Ve.isScalar(r)&&r.value==null&&!r.commentBefore&&!r.comment&&!r.tag})}hasIn(e){let[a,...r]=e;if(r.length===0)return this.has(a);let n=this.get(a,!0);return Ve.isCollection(n)?n.hasIn(r):!1}setIn(e,a){let[r,...n]=e;if(n.length===0)this.set(r,a);else{let o=this.get(r,!0);if(Ve.isCollection(o))o.setIn(n,a);else if(o===void 0&&this.schema)this.set(r,Si(this.schema,n,a));else throw new Error(`Expected YAML collection at ${r}. Remaining path: ${n}`)}}};En.Collection=bi;En.collectionFromPath=Si;En.isEmptyPath=Dp});var Ka=f(Dn=>{"use strict";var SM=t=>t.replace(/^(?!$)(?: $)?/gm,"#");function gi(t,e){return/^\n+$/.test(t)?t.substring(1):e?t.replace(/^(?! *$)/gm,e):t}var bM=(t,e,a)=>t.endsWith(`
`)?gi(a,e):a.includes(`
`)?`
`+gi(a,e):(t.endsWith(" ")?"":" ")+a;Dn.indentComment=gi;Dn.lineComment=bM;Dn.stringifyComment=SM});var _p=f(Ya=>{"use strict";var gM="flow",Ii="block",vn="quoted";function IM(t,e,a="flow",{indentAtStart:r,lineWidth:n=80,minContentWidth:o=20,onFold:i,onOverflow:s}={}){if(!n||n<0)return t;n<o&&(o=0);let u=Math.max(1+o,1+n-e.length);if(t.length<=u)return t;let l=[],c={},p=n-e.length;typeof r=="number"&&(r>n-Math.max(2,o)?l.push(0):p=n-r);let y,g,S=!1,d=-1,b=-1,I=-1;a===Ii&&(d=vp(t,d,e.length),d!==-1&&(p=d+u));for(let R;R=t[d+=1];){if(a===vn&&R==="\\"){switch(b=d,t[d+1]){case"x":d+=3;break;case"u":d+=5;break;case"U":d+=9;break;default:d+=1}I=d}if(R===`
`)a===Ii&&(d=vp(t,d,e.length)),p=d+e.length+u,y=void 0;else{if(R===" "&&g&&g!==" "&&g!==`
`&&g!=="	"){let m=t[d+1];m&&m!==" "&&m!==`
`&&m!=="	"&&(y=d)}if(d>=p)if(y)l.push(y),p=y+u,y=void 0;else if(a===vn){for(;g===" "||g==="	";)g=R,R=t[d+=1],S=!0;let m=d>I+1?d-2:b-1;if(c[m])return t;l.push(m),c[m]=!0,p=m+u,y=void 0}else S=!0}g=R}if(S&&s&&s(),l.length===0)return t;i&&i();let M=t.slice(0,l[0]);for(let R=0;R<l.length;++R){let m=l[R],h=l[R+1]||t.length;m===0?M=`
${e}${t.slice(0,h)}`:(a===vn&&c[m]&&(M+=`${t[m]}\\`),M+=`
${e}${t.slice(m+1,h)}`)}return M}function vp(t,e,a){let r=e,n=e+1,o=t[n];for(;o===" "||o==="	";)if(e<n+a)o=t[++e];else{do o=t[++e];while(o&&o!==`
`);r=e,n=e+1,o=t[n]}return r}Ya.FOLD_BLOCK=Ii;Ya.FOLD_FLOW=gM;Ya.FOLD_QUOTED=vn;Ya.foldFlowLines=IM});var Za=f(xp=>{"use strict";var _e=z(),dt=_p(),xn=(t,e)=>({indentAtStart:e?t.indent.length:t.indentAtStart,lineWidth:t.options.lineWidth,minContentWidth:t.options.minContentWidth}),Un=t=>/^(%|---|\.\.\.)/m.test(t);function MM(t,e,a){if(!e||e<0)return!1;let r=e-a,n=t.length;if(n<=r)return!1;for(let o=0,i=0;o<n;++o)if(t[o]===`
`){if(o-i>r)return!0;if(i=o+1,n-i<=r)return!1}return!0}function Ja(t,e){let a=JSON.stringify(t);if(e.options.doubleQuotedAsJSON)return a;let{implicitKey:r}=e,n=e.options.doubleQuotedMinMultiLineLength,o=e.indent||(Un(t)?"  ":""),i="",s=0;for(let u=0,l=a[u];l;l=a[++u])if(l===" "&&a[u+1]==="\\"&&a[u+2]==="n"&&(i+=a.slice(s,u)+"\\ ",u+=1,s=u,l="\\"),l==="\\")switch(a[u+1]){case"u":{i+=a.slice(s,u);let c=a.substr(u+2,4);switch(c){case"0000":i+="\\0";break;case"0007":i+="\\a";break;case"000b":i+="\\v";break;case"001b":i+="\\e";break;case"0085":i+="\\N";break;case"00a0":i+="\\_";break;case"2028":i+="\\L";break;case"2029":i+="\\P";break;default:c.substr(0,2)==="00"?i+="\\x"+c.substr(2):i+=a.substr(u,6)}u+=5,s=u+1}break;case"n":if(r||a[u+2]==='"'||a.length<n)u+=1;else{for(i+=a.slice(s,u)+`

`;a[u+2]==="\\"&&a[u+3]==="n"&&a[u+4]!=='"';)i+=`
`,u+=2;i+=o,a[u+2]===" "&&(i+="\\"),u+=1,s=u+1}break;default:u+=1}return i=s?i+a.slice(s):a,r?i:dt.foldFlowLines(i,o,dt.FOLD_QUOTED,xn(e,!1))}function Mi(t,e){if(e.options.singleQuote===!1||e.implicitKey&&t.includes(`
`)||/[ \t]\n|\n[ \t]/.test(t))return Ja(t,e);let a=e.indent||(Un(t)?"  ":""),r="'"+t.replace(/'/g,"''").replace(/\n+/g,`$&
${a}`)+"'";return e.implicitKey?r:dt.foldFlowLines(r,a,dt.FOLD_FLOW,xn(e,!1))}function la(t,e){let{singleQuote:a}=e.options,r;if(a===!1)r=Ja;else{let n=t.includes('"'),o=t.includes("'");n&&!o?r=Mi:o&&!n?r=Ja:r=a?Mi:Ja}return r(t,e)}var mi;try{mi=new RegExp(`(^|(?<!
))
+(?!
|$)`,"g")}catch{mi=/\n+(?!\n|$)/g}function _n({comment:t,type:e,value:a},r,n,o){let{blockQuote:i,commentString:s,lineWidth:u}=r.options;if(!i||/\n[\t ]+$/.test(a))return la(a,r);let l=r.indent||(r.forceBlockIndent||Un(a)?"  ":""),c=i==="literal"?!0:i==="folded"||e===_e.Scalar.BLOCK_FOLDED?!1:e===_e.Scalar.BLOCK_LITERAL?!0:!MM(a,u,l.length);if(!a)return c?`|
`:`>
`;let p,y;for(y=a.length;y>0;--y){let h=a[y-1];if(h!==`
`&&h!=="	"&&h!==" ")break}let g=a.substring(y),S=g.indexOf(`
`);S===-1?p="-":a===g||S!==g.length-1?(p="+",o&&o()):p="",g&&(a=a.slice(0,-g.length),g[g.length-1]===`
`&&(g=g.slice(0,-1)),g=g.replace(mi,`$&${l}`));let d=!1,b,I=-1;for(b=0;b<a.length;++b){let h=a[b];if(h===" ")d=!0;else if(h===`
`)I=b;else break}let M=a.substring(0,I<b?I+1:b);M&&(a=a.substring(M.length),M=M.replace(/\n+/g,`$&${l}`));let m=(d?l?"2":"1":"")+p;if(t&&(m+=" "+s(t.replace(/ ?[\r\n]+/g," ")),n&&n()),!c){let h=a.replace(/\n+/g,`
$&`).replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g,"$1$2").replace(/\n+/g,`$&${l}`),A=!1,D=xn(r,!0);i!=="folded"&&e!==_e.Scalar.BLOCK_FOLDED&&(D.onOverflow=()=>{A=!0});let P=dt.foldFlowLines(`${M}${h}${g}`,l,dt.FOLD_BLOCK,D);if(!A)return`>${m}
${l}${P}`}return a=a.replace(/\n+/g,`$&${l}`),`|${m}
${l}${M}${a}${g}`}function mM(t,e,a,r){let{type:n,value:o}=t,{actualString:i,implicitKey:s,indent:u,indentStep:l,inFlow:c}=e;if(s&&o.includes(`
`)||c&&/[[\]{},]/.test(o))return la(o,e);if(/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(o))return s||c||!o.includes(`
`)?la(o,e):_n(t,e,a,r);if(!s&&!c&&n!==_e.Scalar.PLAIN&&o.includes(`
`))return _n(t,e,a,r);if(Un(o)){if(u==="")return e.forceBlockIndent=!0,_n(t,e,a,r);if(s&&u===l)return la(o,e)}let p=o.replace(/\n+/g,`$&
${u}`);if(i){let y=d=>d.default&&d.tag!=="tag:yaml.org,2002:str"&&d.test?.test(p),{compat:g,tags:S}=e.doc.schema;if(S.some(y)||g?.some(y))return la(o,e)}return s?p:dt.foldFlowLines(p,u,dt.FOLD_FLOW,xn(e,!1))}function fM(t,e,a,r){let{implicitKey:n,inFlow:o}=e,i=typeof t.value=="string"?t:Object.assign({},t,{value:String(t.value)}),{type:s}=t;s!==_e.Scalar.QUOTE_DOUBLE&&/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(i.value)&&(s=_e.Scalar.QUOTE_DOUBLE);let u=c=>{switch(c){case _e.Scalar.BLOCK_FOLDED:case _e.Scalar.BLOCK_LITERAL:return n||o?la(i.value,e):_n(i,e,a,r);case _e.Scalar.QUOTE_DOUBLE:return Ja(i.value,e);case _e.Scalar.QUOTE_SINGLE:return Mi(i.value,e);case _e.Scalar.PLAIN:return mM(i,e,a,r);default:return null}},l=u(s);if(l===null){let{defaultKeyType:c,defaultStringType:p}=e.options,y=n&&c||p;if(l=u(y),l===null)throw new Error(`Unsupported default string type ${y}`)}return l}xp.stringifyString=fM});var Xa=f(fi=>{"use strict";var RM=An(),St=T(),AM=Ka(),hM=Za();function PM(t,e){let a=Object.assign({blockQuote:!0,commentString:AM.stringifyComment,defaultKeyType:null,defaultStringType:"PLAIN",directives:null,doubleQuotedAsJSON:!1,doubleQuotedMinMultiLineLength:40,falseStr:"false",flowCollectionPadding:!0,indentSeq:!0,lineWidth:80,minContentWidth:20,nullStr:"null",simpleKeys:!1,singleQuote:null,trailingComma:!1,trueStr:"true",verifyAliasOrder:!0},t.schema.toStringOptions,e),r;switch(a.collectionStyle){case"block":r=!1;break;case"flow":r=!0;break;default:r=null}return{anchors:new Set,doc:t,flowCollectionPadding:a.flowCollectionPadding?" ":"",indent:"",indentStep:typeof a.indent=="number"?" ".repeat(a.indent):"  ",inFlow:r,options:a}}function EM(t,e){if(e.tag){let n=t.filter(o=>o.tag===e.tag);if(n.length>0)return n.find(o=>o.format===e.format)??n[0]}let a,r;if(St.isScalar(e)){r=e.value;let n=t.filter(o=>o.identify?.(r));if(n.length>1){let o=n.filter(i=>i.test);o.length>0&&(n=o)}a=n.find(o=>o.format===e.format)??n.find(o=>!o.format)}else r=e,a=t.find(n=>n.nodeClass&&r instanceof n.nodeClass);if(!a){let n=r?.constructor?.name??(r===null?"null":typeof r);throw new Error(`Tag not resolved for ${n} value`)}return a}function CM(t,e,{anchors:a,doc:r}){if(!r.directives)return"";let n=[],o=(St.isScalar(t)||St.isCollection(t))&&t.anchor;o&&RM.anchorIsValid(o)&&(a.add(o),n.push(`&${o}`));let i=t.tag??(e.default?null:e.tag);return i&&n.push(r.directives.tagString(i)),n.join(" ")}function DM(t,e,a,r){if(St.isPair(t))return t.toString(e,a,r);if(St.isAlias(t)){if(e.doc.directives)return t.toString(e);if(e.resolvedAliases?.has(t))throw new TypeError("Cannot stringify circular structure without alias nodes");e.resolvedAliases?e.resolvedAliases.add(t):e.resolvedAliases=new Set([t]),t=t.resolve(e.doc)}let n,o=St.isNode(t)?t:e.doc.createNode(t,{onTagObj:u=>n=u});n??(n=EM(e.doc.schema.tags,o));let i=CM(o,n,e);i.length>0&&(e.indentAtStart=(e.indentAtStart??0)+i.length+1);let s=typeof n.stringify=="function"?n.stringify(o,e,a,r):St.isScalar(o)?hM.stringifyString(o,e,a,r):o.toString(e,a,r);return i?St.isScalar(o)||s[0]==="{"||s[0]==="["?`${i} ${s}`:`${i}
${e.indent}${s}`:s}fi.createStringifyContext=PM;fi.stringify=DM});var Op=f(Tp=>{"use strict";var Je=T(),Up=z(),wp=Xa(),er=Ka();function vM({key:t,value:e},a,r,n){let{allNullValues:o,doc:i,indent:s,indentStep:u,options:{commentString:l,indentSeq:c,simpleKeys:p}}=a,y=Je.isNode(t)&&t.comment||null;if(p){if(y)throw new Error("With simple keys, key nodes cannot have comments");if(Je.isCollection(t)||!Je.isNode(t)&&typeof t=="object"){let D="With simple keys, collection cannot be used as a key value";throw new Error(D)}}let g=!p&&(!t||y&&e==null&&!a.inFlow||Je.isCollection(t)||(Je.isScalar(t)?t.type===Up.Scalar.BLOCK_FOLDED||t.type===Up.Scalar.BLOCK_LITERAL:typeof t=="object"));a=Object.assign({},a,{allNullValues:!1,implicitKey:!g&&(p||!o),indent:s+u});let S=!1,d=!1,b=wp.stringify(t,a,()=>S=!0,()=>d=!0);if(!g&&!a.inFlow&&b.length>1024){if(p)throw new Error("With simple keys, single line scalar must not span more than 1024 characters");g=!0}if(a.inFlow){if(o||e==null)return S&&r&&r(),b===""?"?":g?`? ${b}`:b}else if(o&&!p||e==null&&g)return b=`? ${b}`,y&&!S?b+=er.lineComment(b,a.indent,l(y)):d&&n&&n(),b;S&&(y=null),g?(y&&(b+=er.lineComment(b,a.indent,l(y))),b=`? ${b}
${s}:`):(b=`${b}:`,y&&(b+=er.lineComment(b,a.indent,l(y))));let I,M,R;Je.isNode(e)?(I=!!e.spaceBefore,M=e.commentBefore,R=e.comment):(I=!1,M=null,R=null,e&&typeof e=="object"&&(e=i.createNode(e))),a.implicitKey=!1,!g&&!y&&Je.isScalar(e)&&(a.indentAtStart=b.length+1),d=!1,!c&&u.length>=2&&!a.inFlow&&!g&&Je.isSeq(e)&&!e.flow&&!e.tag&&!e.anchor&&(a.indent=a.indent.substring(2));let m=!1,h=wp.stringify(e,a,()=>m=!0,()=>d=!0),A=" ";if(y||I||M){if(A=I?`
`:"",M){let D=l(M);A+=`
${er.indentComment(D,a.indent)}`}h===""&&!a.inFlow?A===`
`&&R&&(A=`

`):A+=`
${a.indent}`}else if(!g&&Je.isCollection(e)){let D=h[0],P=h.indexOf(`
`),x=P!==-1,O=a.inFlow??e.flow??e.items.length===0;if(x||!O){let v=!1;if(x&&(D==="&"||D==="!")){let U=h.indexOf(" ");D==="&"&&U!==-1&&U<P&&h[U+1]==="!"&&(U=h.indexOf(" ",U+1)),(U===-1||P<U)&&(v=!0)}v||(A=`
${a.indent}`)}}else(h===""||h[0]===`
`)&&(A="");return b+=A+h,a.inFlow?m&&r&&r():R&&!m?b+=er.lineComment(b,a.indent,l(R)):d&&n&&n(),b}Tp.stringifyPair=vM});var Ai=f(Ri=>{"use strict";var Lp=require("process");function _M(t,...e){t==="debug"&&console.log(...e)}function xM(t,e){(t==="debug"||t==="warn")&&(typeof Lp.emitWarning=="function"?Lp.emitWarning(e):console.warn(e))}Ri.debug=_M;Ri.warn=xM});var Ln=f(On=>{"use strict";var tr=T(),qp=z(),wn="<<",Tn={identify:t=>t===wn||typeof t=="symbol"&&t.description===wn,default:"key",tag:"tag:yaml.org,2002:merge",test:/^<<$/,resolve:()=>Object.assign(new qp.Scalar(Symbol(wn)),{addToJSMap:Bp}),stringify:()=>wn},UM=(t,e)=>(Tn.identify(e)||tr.isScalar(e)&&(!e.type||e.type===qp.Scalar.PLAIN)&&Tn.identify(e.value))&&t?.doc.schema.tags.some(a=>a.tag===Tn.tag&&a.default);function Bp(t,e,a){if(a=t&&tr.isAlias(a)?a.resolve(t.doc):a,tr.isSeq(a))for(let r of a.items)hi(t,e,r);else if(Array.isArray(a))for(let r of a)hi(t,e,r);else hi(t,e,a)}function hi(t,e,a){let r=t&&tr.isAlias(a)?a.resolve(t.doc):a;if(!tr.isMap(r))throw new Error("Merge sources must be maps or map aliases");let n=r.toJSON(null,t,Map);for(let[o,i]of n)e instanceof Map?e.has(o)||e.set(o,i):e instanceof Set?e.add(o):Object.prototype.hasOwnProperty.call(e,o)||Object.defineProperty(e,o,{value:i,writable:!0,enumerable:!0,configurable:!0});return e}On.addMergeToJSMap=Bp;On.isMergeKey=UM;On.merge=Tn});var Ei=f(Vp=>{"use strict";var wM=Ai(),Np=Ln(),TM=Xa(),kp=T(),Pi=ct();function OM(t,e,{key:a,value:r}){if(kp.isNode(a)&&a.addToJSMap)a.addToJSMap(t,e,r);else if(Np.isMergeKey(t,a))Np.addMergeToJSMap(t,e,r);else{let n=Pi.toJS(a,"",t);if(e instanceof Map)e.set(n,Pi.toJS(r,n,t));else if(e instanceof Set)e.add(n);else{let o=LM(a,n,t),i=Pi.toJS(r,o,t);o in e?Object.defineProperty(e,o,{value:i,writable:!0,enumerable:!0,configurable:!0}):e[o]=i}}return e}function LM(t,e,a){if(e===null)return"";if(typeof e!="object")return String(e);if(kp.isNode(t)&&a?.doc){let r=TM.createStringifyContext(a.doc,{});r.anchors=new Set;for(let o of a.anchors.keys())r.anchors.add(o.anchor);r.inFlow=!0,r.inStringifyKey=!0;let n=t.toString(r);if(!a.mapKeyWarned){let o=JSON.stringify(n);o.length>40&&(o=o.substring(0,36)+'..."'),wM.warn(a.doc.options.logLevel,`Keys with collection values will be stringified due to JS Object restrictions: ${o}. Set mapAsMap: true to use object keys.`),a.mapKeyWarned=!0}return n}return JSON.stringify(e)}Vp.addPairToJSMap=OM});var bt=f(Ci=>{"use strict";var Fp=Wa(),qM=Op(),BM=Ei(),qn=T();function NM(t,e,a){let r=Fp.createNode(t,void 0,a),n=Fp.createNode(e,void 0,a);return new Bn(r,n)}var Bn=class t{constructor(e,a=null){Object.defineProperty(this,qn.NODE_TYPE,{value:qn.PAIR}),this.key=e,this.value=a}clone(e){let{key:a,value:r}=this;return qn.isNode(a)&&(a=a.clone(e)),qn.isNode(r)&&(r=r.clone(e)),new t(a,r)}toJSON(e,a){let r=a?.mapAsMap?new Map:{};return BM.addPairToJSMap(a,r,this)}toString(e,a,r){return e?.doc?qM.stringifyPair(this,e,a,r):JSON.stringify(this)}};Ci.Pair=Bn;Ci.createPair=NM});var Di=f(zp=>{"use strict";var Ot=T(),jp=Xa(),Nn=Ka();function kM(t,e,a){return(e.inFlow??t.flow?FM:VM)(t,e,a)}function VM({comment:t,items:e},a,{blockItemPrefix:r,flowChars:n,itemIndent:o,onChompKeep:i,onComment:s}){let{indent:u,options:{commentString:l}}=a,c=Object.assign({},a,{indent:o,type:null}),p=!1,y=[];for(let S=0;S<e.length;++S){let d=e[S],b=null;if(Ot.isNode(d))!p&&d.spaceBefore&&y.push(""),kn(a,y,d.commentBefore,p),d.comment&&(b=d.comment);else if(Ot.isPair(d)){let M=Ot.isNode(d.key)?d.key:null;M&&(!p&&M.spaceBefore&&y.push(""),kn(a,y,M.commentBefore,p))}p=!1;let I=jp.stringify(d,c,()=>b=null,()=>p=!0);b&&(I+=Nn.lineComment(I,o,l(b))),p&&b&&(p=!1),y.push(r+I)}let g;if(y.length===0)g=n.start+n.end;else{g=y[0];for(let S=1;S<y.length;++S){let d=y[S];g+=d?`
${u}${d}`:`
`}}return t?(g+=`
`+Nn.indentComment(l(t),u),s&&s()):p&&i&&i(),g}function FM({items:t},e,{flowChars:a,itemIndent:r}){let{indent:n,indentStep:o,flowCollectionPadding:i,options:{commentString:s}}=e;r+=o;let u=Object.assign({},e,{indent:r,inFlow:!0,type:null}),l=!1,c=0,p=[];for(let S=0;S<t.length;++S){let d=t[S],b=null;if(Ot.isNode(d))d.spaceBefore&&p.push(""),kn(e,p,d.commentBefore,!1),d.comment&&(b=d.comment);else if(Ot.isPair(d)){let M=Ot.isNode(d.key)?d.key:null;M&&(M.spaceBefore&&p.push(""),kn(e,p,M.commentBefore,!1),M.comment&&(l=!0));let R=Ot.isNode(d.value)?d.value:null;R?(R.comment&&(b=R.comment),R.commentBefore&&(l=!0)):d.value==null&&M?.comment&&(b=M.comment)}b&&(l=!0);let I=jp.stringify(d,u,()=>b=null);l||(l=p.length>c||I.includes(`
`)),S<t.length-1?I+=",":e.options.trailingComma&&(e.options.lineWidth>0&&(l||(l=p.reduce((M,R)=>M+R.length+2,2)+(I.length+2)>e.options.lineWidth)),l&&(I+=",")),b&&(I+=Nn.lineComment(I,r,s(b))),p.push(I),c=p.length}let{start:y,end:g}=a;if(p.length===0)return y+g;if(!l){let S=p.reduce((d,b)=>d+b.length+2,2);l=e.options.lineWidth>0&&S>e.options.lineWidth}if(l){let S=y;for(let d of p)S+=d?`
${o}${n}${d}`:`
`;return`${S}
${n}${g}`}else return`${y}${i}${p.join(" ")}${i}${g}`}function kn({indent:t,options:{commentString:e}},a,r,n){if(r&&n&&(r=r.replace(/^\n+/,"")),r){let o=Nn.indentComment(e(r),t);a.push(o.trimStart())}}zp.stringifyCollection=kM});var It=f(_i=>{"use strict";var jM=Di(),zM=Ei(),$M=Cn(),gt=T(),Vn=bt(),HM=z();function ar(t,e){let a=gt.isScalar(e)?e.value:e;for(let r of t)if(gt.isPair(r)&&(r.key===e||r.key===a||gt.isScalar(r.key)&&r.key.value===a))return r}var vi=class extends $M.Collection{static get tagName(){return"tag:yaml.org,2002:map"}constructor(e){super(gt.MAP,e),this.items=[]}static from(e,a,r){let{keepUndefined:n,replacer:o}=r,i=new this(e),s=(u,l)=>{if(typeof o=="function")l=o.call(a,u,l);else if(Array.isArray(o)&&!o.includes(u))return;(l!==void 0||n)&&i.items.push(Vn.createPair(u,l,r))};if(a instanceof Map)for(let[u,l]of a)s(u,l);else if(a&&typeof a=="object")for(let u of Object.keys(a))s(u,a[u]);return typeof e.sortMapEntries=="function"&&i.items.sort(e.sortMapEntries),i}add(e,a){let r;gt.isPair(e)?r=e:!e||typeof e!="object"||!("key"in e)?r=new Vn.Pair(e,e?.value):r=new Vn.Pair(e.key,e.value);let n=ar(this.items,r.key),o=this.schema?.sortMapEntries;if(n){if(!a)throw new Error(`Key ${r.key} already set`);gt.isScalar(n.value)&&HM.isScalarValue(r.value)?n.value.value=r.value:n.value=r.value}else if(o){let i=this.items.findIndex(s=>o(r,s)<0);i===-1?this.items.push(r):this.items.splice(i,0,r)}else this.items.push(r)}delete(e){let a=ar(this.items,e);return a?this.items.splice(this.items.indexOf(a),1).length>0:!1}get(e,a){let n=ar(this.items,e)?.value;return(!a&&gt.isScalar(n)?n.value:n)??void 0}has(e){return!!ar(this.items,e)}set(e,a){this.add(new Vn.Pair(e,a),!0)}toJSON(e,a,r){let n=r?new r:a?.mapAsMap?new Map:{};a?.onCreate&&a.onCreate(n);for(let o of this.items)zM.addPairToJSMap(a,n,o);return n}toString(e,a,r){if(!e)return JSON.stringify(this);for(let n of this.items)if(!gt.isPair(n))throw new Error(`Map items must all be pairs; found ${JSON.stringify(n)} instead`);return!e.allNullValues&&this.hasAllNullValues(!1)&&(e=Object.assign({},e,{allNullValues:!0})),jM.stringifyCollection(this,e,{blockItemPrefix:"",flowChars:{start:"{",end:"}"},itemIndent:e.indent||"",onChompKeep:r,onComment:a})}};_i.YAMLMap=vi;_i.findPair=ar});var pa=f(Hp=>{"use strict";var GM=T(),$p=It(),QM={collection:"map",default:!0,nodeClass:$p.YAMLMap,tag:"tag:yaml.org,2002:map",resolve(t,e){return GM.isMap(t)||e("Expected a mapping for this tag"),t},createNode:(t,e,a)=>$p.YAMLMap.from(t,e,a)};Hp.map=QM});var Mt=f(Gp=>{"use strict";var WM=Wa(),KM=Di(),YM=Cn(),jn=T(),JM=z(),ZM=ct(),xi=class extends YM.Collection{static get tagName(){return"tag:yaml.org,2002:seq"}constructor(e){super(jn.SEQ,e),this.items=[]}add(e){this.items.push(e)}delete(e){let a=Fn(e);return typeof a!="number"?!1:this.items.splice(a,1).length>0}get(e,a){let r=Fn(e);if(typeof r!="number")return;let n=this.items[r];return!a&&jn.isScalar(n)?n.value:n}has(e){let a=Fn(e);return typeof a=="number"&&a<this.items.length}set(e,a){let r=Fn(e);if(typeof r!="number")throw new Error(`Expected a valid index, not ${e}.`);let n=this.items[r];jn.isScalar(n)&&JM.isScalarValue(a)?n.value=a:this.items[r]=a}toJSON(e,a){let r=[];a?.onCreate&&a.onCreate(r);let n=0;for(let o of this.items)r.push(ZM.toJS(o,String(n++),a));return r}toString(e,a,r){return e?KM.stringifyCollection(this,e,{blockItemPrefix:"- ",flowChars:{start:"[",end:"]"},itemIndent:(e.indent||"")+"  ",onChompKeep:r,onComment:a}):JSON.stringify(this)}static from(e,a,r){let{replacer:n}=r,o=new this(e);if(a&&Symbol.iterator in Object(a)){let i=0;for(let s of a){if(typeof n=="function"){let u=a instanceof Set?s:String(i++);s=n.call(a,u,s)}o.items.push(WM.createNode(s,void 0,r))}}return o}};function Fn(t){let e=jn.isScalar(t)?t.value:t;return e&&typeof e=="string"&&(e=Number(e)),typeof e=="number"&&Number.isInteger(e)&&e>=0?e:null}Gp.YAMLSeq=xi});var ca=f(Wp=>{"use strict";var XM=T(),Qp=Mt(),em={collection:"seq",default:!0,nodeClass:Qp.YAMLSeq,tag:"tag:yaml.org,2002:seq",resolve(t,e){return XM.isSeq(t)||e("Expected a sequence for this tag"),t},createNode:(t,e,a)=>Qp.YAMLSeq.from(t,e,a)};Wp.seq=em});var rr=f(Kp=>{"use strict";var tm=Za(),am={identify:t=>typeof t=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:t=>t,stringify(t,e,a,r){return e=Object.assign({actualString:!0},e),tm.stringifyString(t,e,a,r)}};Kp.string=am});var zn=f(Zp=>{"use strict";var Yp=z(),Jp={identify:t=>t==null,createNode:()=>new Yp.Scalar(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^(?:~|[Nn]ull|NULL)?$/,resolve:()=>new Yp.Scalar(null),stringify:({source:t},e)=>typeof t=="string"&&Jp.test.test(t)?t:e.options.nullStr};Zp.nullTag=Jp});var Ui=f(ec=>{"use strict";var rm=z(),Xp={identify:t=>typeof t=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,resolve:t=>new rm.Scalar(t[0]==="t"||t[0]==="T"),stringify({source:t,value:e},a){if(t&&Xp.test.test(t)){let r=t[0]==="t"||t[0]==="T";if(e===r)return t}return e?a.options.trueStr:a.options.falseStr}};ec.boolTag=Xp});var ya=f(tc=>{"use strict";function nm({format:t,minFractionDigits:e,tag:a,value:r}){if(typeof r=="bigint")return String(r);let n=typeof r=="number"?r:Number(r);if(!isFinite(n))return isNaN(n)?".nan":n<0?"-.inf":".inf";let o=Object.is(r,-0)?"-0":JSON.stringify(r);if(!t&&e&&(!a||a==="tag:yaml.org,2002:float")&&/^\d/.test(o)){let i=o.indexOf(".");i<0&&(i=o.length,o+=".");let s=e-(o.length-i-1);for(;s-- >0;)o+="0"}return o}tc.stringifyNumber=nm});var Ti=f($n=>{"use strict";var om=z(),wi=ya(),im={identify:t=>typeof t=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:t=>t.slice(-3).toLowerCase()==="nan"?NaN:t[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:wi.stringifyNumber},sm={identify:t=>typeof t=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,resolve:t=>parseFloat(t),stringify(t){let e=Number(t.value);return isFinite(e)?e.toExponential():wi.stringifyNumber(t)}},um={identify:t=>typeof t=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,resolve(t){let e=new om.Scalar(parseFloat(t)),a=t.indexOf(".");return a!==-1&&t[t.length-1]==="0"&&(e.minFractionDigits=t.length-a-1),e},stringify:wi.stringifyNumber};$n.float=um;$n.floatExp=sm;$n.floatNaN=im});var Li=f(Gn=>{"use strict";var ac=ya(),Hn=t=>typeof t=="bigint"||Number.isInteger(t),Oi=(t,e,a,{intAsBigInt:r})=>r?BigInt(t):parseInt(t.substring(e),a);function rc(t,e,a){let{value:r}=t;return Hn(r)&&r>=0?a+r.toString(e):ac.stringifyNumber(t)}var lm={identify:t=>Hn(t)&&t>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^0o[0-7]+$/,resolve:(t,e,a)=>Oi(t,2,8,a),stringify:t=>rc(t,8,"0o")},pm={identify:Hn,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9]+$/,resolve:(t,e,a)=>Oi(t,0,10,a),stringify:ac.stringifyNumber},cm={identify:t=>Hn(t)&&t>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^0x[0-9a-fA-F]+$/,resolve:(t,e,a)=>Oi(t,2,16,a),stringify:t=>rc(t,16,"0x")};Gn.int=pm;Gn.intHex=cm;Gn.intOct=lm});var oc=f(nc=>{"use strict";var ym=pa(),dm=zn(),Sm=ca(),bm=rr(),gm=Ui(),qi=Ti(),Bi=Li(),Im=[ym.map,Sm.seq,bm.string,dm.nullTag,gm.boolTag,Bi.intOct,Bi.int,Bi.intHex,qi.floatNaN,qi.floatExp,qi.float];nc.schema=Im});var uc=f(sc=>{"use strict";var Mm=z(),mm=pa(),fm=ca();function ic(t){return typeof t=="bigint"||Number.isInteger(t)}var Qn=({value:t})=>JSON.stringify(t),Rm=[{identify:t=>typeof t=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:t=>t,stringify:Qn},{identify:t=>t==null,createNode:()=>new Mm.Scalar(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^null$/,resolve:()=>null,stringify:Qn},{identify:t=>typeof t=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^true$|^false$/,resolve:t=>t==="true",stringify:Qn},{identify:ic,default:!0,tag:"tag:yaml.org,2002:int",test:/^-?(?:0|[1-9][0-9]*)$/,resolve:(t,e,{intAsBigInt:a})=>a?BigInt(t):parseInt(t,10),stringify:({value:t})=>ic(t)?t.toString():JSON.stringify(t)},{identify:t=>typeof t=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,resolve:t=>parseFloat(t),stringify:Qn}],Am={default:!0,tag:"",test:/^/,resolve(t,e){return e(`Unresolved plain scalar ${JSON.stringify(t)}`),t}},hm=[mm.map,fm.seq].concat(Rm,Am);sc.schema=hm});var ki=f(lc=>{"use strict";var nr=require("buffer"),Ni=z(),Pm=Za(),Em={identify:t=>t instanceof Uint8Array,default:!1,tag:"tag:yaml.org,2002:binary",resolve(t,e){if(typeof nr.Buffer=="function")return nr.Buffer.from(t,"base64");if(typeof atob=="function"){let a=atob(t.replace(/[\n\r]/g,"")),r=new Uint8Array(a.length);for(let n=0;n<a.length;++n)r[n]=a.charCodeAt(n);return r}else return e("This environment does not support reading binary tags; either Buffer or atob is required"),t},stringify({comment:t,type:e,value:a},r,n,o){if(!a)return"";let i=a,s;if(typeof nr.Buffer=="function")s=i instanceof nr.Buffer?i.toString("base64"):nr.Buffer.from(i.buffer).toString("base64");else if(typeof btoa=="function"){let u="";for(let l=0;l<i.length;++l)u+=String.fromCharCode(i[l]);s=btoa(u)}else throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");if(e??(e=Ni.Scalar.BLOCK_LITERAL),e!==Ni.Scalar.QUOTE_DOUBLE){let u=Math.max(r.options.lineWidth-r.indent.length,r.options.minContentWidth),l=Math.ceil(s.length/u),c=new Array(l);for(let p=0,y=0;p<l;++p,y+=u)c[p]=s.substr(y,u);s=c.join(e===Ni.Scalar.BLOCK_LITERAL?`
`:" ")}return Pm.stringifyString({comment:t,type:e,value:s},r,n,o)}};lc.binary=Em});var Yn=f(Kn=>{"use strict";var Wn=T(),Vi=bt(),Cm=z(),Dm=Mt();function pc(t,e){if(Wn.isSeq(t))for(let a=0;a<t.items.length;++a){let r=t.items[a];if(!Wn.isPair(r)){if(Wn.isMap(r)){r.items.length>1&&e("Each pair must have its own sequence indicator");let n=r.items[0]||new Vi.Pair(new Cm.Scalar(null));if(r.commentBefore&&(n.key.commentBefore=n.key.commentBefore?`${r.commentBefore}
${n.key.commentBefore}`:r.commentBefore),r.comment){let o=n.value??n.key;o.comment=o.comment?`${r.comment}
${o.comment}`:r.comment}r=n}t.items[a]=Wn.isPair(r)?r:new Vi.Pair(r)}}else e("Expected a sequence for this tag");return t}function cc(t,e,a){let{replacer:r}=a,n=new Dm.YAMLSeq(t);n.tag="tag:yaml.org,2002:pairs";let o=0;if(e&&Symbol.iterator in Object(e))for(let i of e){typeof r=="function"&&(i=r.call(e,String(o++),i));let s,u;if(Array.isArray(i))if(i.length===2)s=i[0],u=i[1];else throw new TypeError(`Expected [key, value] tuple: ${i}`);else if(i&&i instanceof Object){let l=Object.keys(i);if(l.length===1)s=l[0],u=i[s];else throw new TypeError(`Expected tuple with one key, not ${l.length} keys`)}else s=i;n.items.push(Vi.createPair(s,u,a))}return n}var vm={collection:"seq",default:!1,tag:"tag:yaml.org,2002:pairs",resolve:pc,createNode:cc};Kn.createPairs=cc;Kn.pairs=vm;Kn.resolvePairs=pc});var zi=f(ji=>{"use strict";var yc=T(),Fi=ct(),or=It(),_m=Mt(),dc=Yn(),Lt=class t extends _m.YAMLSeq{constructor(){super(),this.add=or.YAMLMap.prototype.add.bind(this),this.delete=or.YAMLMap.prototype.delete.bind(this),this.get=or.YAMLMap.prototype.get.bind(this),this.has=or.YAMLMap.prototype.has.bind(this),this.set=or.YAMLMap.prototype.set.bind(this),this.tag=t.tag}toJSON(e,a){if(!a)return super.toJSON(e);let r=new Map;a?.onCreate&&a.onCreate(r);for(let n of this.items){let o,i;if(yc.isPair(n)?(o=Fi.toJS(n.key,"",a),i=Fi.toJS(n.value,o,a)):o=Fi.toJS(n,"",a),r.has(o))throw new Error("Ordered maps must not include duplicate keys");r.set(o,i)}return r}static from(e,a,r){let n=dc.createPairs(e,a,r),o=new this;return o.items=n.items,o}};Lt.tag="tag:yaml.org,2002:omap";var xm={collection:"seq",identify:t=>t instanceof Map,nodeClass:Lt,default:!1,tag:"tag:yaml.org,2002:omap",resolve(t,e){let a=dc.resolvePairs(t,e),r=[];for(let{key:n}of a.items)yc.isScalar(n)&&(r.includes(n.value)?e(`Ordered maps must not include duplicate keys: ${n.value}`):r.push(n.value));return Object.assign(new Lt,a)},createNode:(t,e,a)=>Lt.from(t,e,a)};ji.YAMLOMap=Lt;ji.omap=xm});var Mc=f($i=>{"use strict";var Sc=z();function bc({value:t,source:e},a){return e&&(t?gc:Ic).test.test(e)?e:t?a.options.trueStr:a.options.falseStr}var gc={identify:t=>t===!0,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,resolve:()=>new Sc.Scalar(!0),stringify:bc},Ic={identify:t=>t===!1,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/,resolve:()=>new Sc.Scalar(!1),stringify:bc};$i.falseTag=Ic;$i.trueTag=gc});var mc=f(Jn=>{"use strict";var Um=z(),Hi=ya(),wm={identify:t=>typeof t=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,resolve:t=>t.slice(-3).toLowerCase()==="nan"?NaN:t[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:Hi.stringifyNumber},Tm={identify:t=>typeof t=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,resolve:t=>parseFloat(t.replace(/_/g,"")),stringify(t){let e=Number(t.value);return isFinite(e)?e.toExponential():Hi.stringifyNumber(t)}},Om={identify:t=>typeof t=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,resolve(t){let e=new Um.Scalar(parseFloat(t.replace(/_/g,""))),a=t.indexOf(".");if(a!==-1){let r=t.substring(a+1).replace(/_/g,"");r[r.length-1]==="0"&&(e.minFractionDigits=r.length)}return e},stringify:Hi.stringifyNumber};Jn.float=Om;Jn.floatExp=Tm;Jn.floatNaN=wm});var Rc=f(sr=>{"use strict";var fc=ya(),ir=t=>typeof t=="bigint"||Number.isInteger(t);function Zn(t,e,a,{intAsBigInt:r}){let n=t[0];if((n==="-"||n==="+")&&(e+=1),t=t.substring(e).replace(/_/g,""),r){switch(a){case 2:t=`0b${t}`;break;case 8:t=`0o${t}`;break;case 16:t=`0x${t}`;break}let i=BigInt(t);return n==="-"?BigInt(-1)*i:i}let o=parseInt(t,a);return n==="-"?-1*o:o}function Gi(t,e,a){let{value:r}=t;if(ir(r)){let n=r.toString(e);return r<0?"-"+a+n.substr(1):a+n}return fc.stringifyNumber(t)}var Lm={identify:ir,default:!0,tag:"tag:yaml.org,2002:int",format:"BIN",test:/^[-+]?0b[0-1_]+$/,resolve:(t,e,a)=>Zn(t,2,2,a),stringify:t=>Gi(t,2,"0b")},qm={identify:ir,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^[-+]?0[0-7_]+$/,resolve:(t,e,a)=>Zn(t,1,8,a),stringify:t=>Gi(t,8,"0")},Bm={identify:ir,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9][0-9_]*$/,resolve:(t,e,a)=>Zn(t,0,10,a),stringify:fc.stringifyNumber},Nm={identify:ir,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^[-+]?0x[0-9a-fA-F_]+$/,resolve:(t,e,a)=>Zn(t,2,16,a),stringify:t=>Gi(t,16,"0x")};sr.int=Bm;sr.intBin=Lm;sr.intHex=Nm;sr.intOct=qm});var Wi=f(Qi=>{"use strict";var to=T(),Xn=bt(),eo=It(),qt=class t extends eo.YAMLMap{constructor(e){super(e),this.tag=t.tag}add(e){let a;to.isPair(e)?a=e:e&&typeof e=="object"&&"key"in e&&"value"in e&&e.value===null?a=new Xn.Pair(e.key,null):a=new Xn.Pair(e,null),eo.findPair(this.items,a.key)||this.items.push(a)}get(e,a){let r=eo.findPair(this.items,e);return!a&&to.isPair(r)?to.isScalar(r.key)?r.key.value:r.key:r}set(e,a){if(typeof a!="boolean")throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof a}`);let r=eo.findPair(this.items,e);r&&!a?this.items.splice(this.items.indexOf(r),1):!r&&a&&this.items.push(new Xn.Pair(e))}toJSON(e,a){return super.toJSON(e,a,Set)}toString(e,a,r){if(!e)return JSON.stringify(this);if(this.hasAllNullValues(!0))return super.toString(Object.assign({},e,{allNullValues:!0}),a,r);throw new Error("Set items must all have null values")}static from(e,a,r){let{replacer:n}=r,o=new this(e);if(a&&Symbol.iterator in Object(a))for(let i of a)typeof n=="function"&&(i=n.call(a,i,i)),o.items.push(Xn.createPair(i,null,r));return o}};qt.tag="tag:yaml.org,2002:set";var km={collection:"map",identify:t=>t instanceof Set,nodeClass:qt,default:!1,tag:"tag:yaml.org,2002:set",createNode:(t,e,a)=>qt.from(t,e,a),resolve(t,e){if(to.isMap(t)){if(t.hasAllNullValues(!0))return Object.assign(new qt,t);e("Set items must all have null values")}else e("Expected a mapping for this tag");return t}};Qi.YAMLSet=qt;Qi.set=km});var Yi=f(ao=>{"use strict";var Vm=ya();function Ki(t,e){let a=t[0],r=a==="-"||a==="+"?t.substring(1):t,n=i=>e?BigInt(i):Number(i),o=r.replace(/_/g,"").split(":").reduce((i,s)=>i*n(60)+n(s),n(0));return a==="-"?n(-1)*o:o}function Ac(t){let{value:e}=t,a=i=>i;if(typeof e=="bigint")a=i=>BigInt(i);else if(isNaN(e)||!isFinite(e))return Vm.stringifyNumber(t);let r="";e<0&&(r="-",e*=a(-1));let n=a(60),o=[e%n];return e<60?o.unshift(0):(e=(e-o[0])/n,o.unshift(e%n),e>=60&&(e=(e-o[0])/n,o.unshift(e))),r+o.map(i=>String(i).padStart(2,"0")).join(":").replace(/000000\d*$/,"")}var Fm={identify:t=>typeof t=="bigint"||Number.isInteger(t),default:!0,tag:"tag:yaml.org,2002:int",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,resolve:(t,e,{intAsBigInt:a})=>Ki(t,a),stringify:Ac},jm={identify:t=>typeof t=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,resolve:t=>Ki(t,!1),stringify:Ac},hc={identify:t=>t instanceof Date,default:!0,tag:"tag:yaml.org,2002:timestamp",test:RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"),resolve(t){let e=t.match(hc.test);if(!e)throw new Error("!!timestamp expects a date, starting with yyyy-mm-dd");let[,a,r,n,o,i,s]=e.map(Number),u=e[7]?Number((e[7]+"00").substr(1,3)):0,l=Date.UTC(a,r-1,n,o||0,i||0,s||0,u),c=e[8];if(c&&c!=="Z"){let p=Ki(c,!1);Math.abs(p)<30&&(p*=60),l-=6e4*p}return new Date(l)},stringify:({value:t})=>t?.toISOString().replace(/(T00:00:00)?\.000Z$/,"")??""};ao.floatTime=jm;ao.intTime=Fm;ao.timestamp=hc});var Cc=f(Ec=>{"use strict";var zm=pa(),$m=zn(),Hm=ca(),Gm=rr(),Qm=ki(),Pc=Mc(),Ji=mc(),ro=Rc(),Wm=Ln(),Km=zi(),Ym=Yn(),Jm=Wi(),Zi=Yi(),Zm=[zm.map,Hm.seq,Gm.string,$m.nullTag,Pc.trueTag,Pc.falseTag,ro.intBin,ro.intOct,ro.int,ro.intHex,Ji.floatNaN,Ji.floatExp,Ji.float,Qm.binary,Wm.merge,Km.omap,Ym.pairs,Jm.set,Zi.intTime,Zi.floatTime,Zi.timestamp];Ec.schema=Zm});var qc=f(ts=>{"use strict";var xc=pa(),Xm=zn(),Uc=ca(),ef=rr(),tf=Ui(),Xi=Ti(),es=Li(),af=oc(),rf=uc(),wc=ki(),ur=Ln(),Tc=zi(),Oc=Yn(),Dc=Cc(),Lc=Wi(),no=Yi(),vc=new Map([["core",af.schema],["failsafe",[xc.map,Uc.seq,ef.string]],["json",rf.schema],["yaml11",Dc.schema],["yaml-1.1",Dc.schema]]),_c={binary:wc.binary,bool:tf.boolTag,float:Xi.float,floatExp:Xi.floatExp,floatNaN:Xi.floatNaN,floatTime:no.floatTime,int:es.int,intHex:es.intHex,intOct:es.intOct,intTime:no.intTime,map:xc.map,merge:ur.merge,null:Xm.nullTag,omap:Tc.omap,pairs:Oc.pairs,seq:Uc.seq,set:Lc.set,timestamp:no.timestamp},nf={"tag:yaml.org,2002:binary":wc.binary,"tag:yaml.org,2002:merge":ur.merge,"tag:yaml.org,2002:omap":Tc.omap,"tag:yaml.org,2002:pairs":Oc.pairs,"tag:yaml.org,2002:set":Lc.set,"tag:yaml.org,2002:timestamp":no.timestamp};function of(t,e,a){let r=vc.get(e);if(r&&!t)return a&&!r.includes(ur.merge)?r.concat(ur.merge):r.slice();let n=r;if(!n)if(Array.isArray(t))n=[];else{let o=Array.from(vc.keys()).filter(i=>i!=="yaml11").map(i=>JSON.stringify(i)).join(", ");throw new Error(`Unknown schema "${e}"; use one of ${o} or define customTags array`)}if(Array.isArray(t))for(let o of t)n=n.concat(o);else typeof t=="function"&&(n=t(n.slice()));return a&&(n=n.concat(ur.merge)),n.reduce((o,i)=>{let s=typeof i=="string"?_c[i]:i;if(!s){let u=JSON.stringify(i),l=Object.keys(_c).map(c=>JSON.stringify(c)).join(", ");throw new Error(`Unknown custom tag ${u}; use one of ${l}`)}return o.includes(s)||o.push(s),o},[])}ts.coreKnownTags=nf;ts.getTags=of});var ns=f(Bc=>{"use strict";var as=T(),sf=pa(),uf=ca(),lf=rr(),oo=qc(),pf=(t,e)=>t.key<e.key?-1:t.key>e.key?1:0,rs=class t{constructor({compat:e,customTags:a,merge:r,resolveKnownTags:n,schema:o,sortMapEntries:i,toStringDefaults:s}){this.compat=Array.isArray(e)?oo.getTags(e,"compat"):e?oo.getTags(null,e):null,this.name=typeof o=="string"&&o||"core",this.knownTags=n?oo.coreKnownTags:{},this.tags=oo.getTags(a,this.name,r),this.toStringOptions=s??null,Object.defineProperty(this,as.MAP,{value:sf.map}),Object.defineProperty(this,as.SCALAR,{value:lf.string}),Object.defineProperty(this,as.SEQ,{value:uf.seq}),this.sortMapEntries=typeof i=="function"?i:i===!0?pf:null}clone(){let e=Object.create(t.prototype,Object.getOwnPropertyDescriptors(this));return e.tags=this.tags.slice(),e}};Bc.Schema=rs});var kc=f(Nc=>{"use strict";var cf=T(),os=Xa(),lr=Ka();function yf(t,e){let a=[],r=e.directives===!0;if(e.directives!==!1&&t.directives){let u=t.directives.toString(t);u?(a.push(u),r=!0):t.directives.docStart&&(r=!0)}r&&a.push("---");let n=os.createStringifyContext(t,e),{commentString:o}=n.options;if(t.commentBefore){a.length!==1&&a.unshift("");let u=o(t.commentBefore);a.unshift(lr.indentComment(u,""))}let i=!1,s=null;if(t.contents){if(cf.isNode(t.contents)){if(t.contents.spaceBefore&&r&&a.push(""),t.contents.commentBefore){let c=o(t.contents.commentBefore);a.push(lr.indentComment(c,""))}n.forceBlockIndent=!!t.comment,s=t.contents.comment}let u=s?void 0:()=>i=!0,l=os.stringify(t.contents,n,()=>s=null,u);s&&(l+=lr.lineComment(l,"",o(s))),(l[0]==="|"||l[0]===">")&&a[a.length-1]==="---"?a[a.length-1]=`--- ${l}`:a.push(l)}else a.push(os.stringify(t.contents,n));if(t.directives?.docEnd)if(t.comment){let u=o(t.comment);u.includes(`
`)?(a.push("..."),a.push(lr.indentComment(u,""))):a.push(`... ${u}`)}else a.push("...");else{let u=t.comment;u&&i&&(u=u.replace(/^\n+/,"")),u&&((!i||s)&&a[a.length-1]!==""&&a.push(""),a.push(lr.indentComment(o(u),"")))}return a.join(`
`)+`
`}Nc.stringifyDocument=yf});var pr=f(Vc=>{"use strict";var df=Qa(),da=Cn(),Pe=T(),Sf=bt(),bf=ct(),gf=ns(),If=kc(),is=An(),Mf=pi(),mf=Wa(),ss=li(),us=class t{constructor(e,a,r){this.commentBefore=null,this.comment=null,this.errors=[],this.warnings=[],Object.defineProperty(this,Pe.NODE_TYPE,{value:Pe.DOC});let n=null;typeof a=="function"||Array.isArray(a)?n=a:r===void 0&&a&&(r=a,a=void 0);let o=Object.assign({intAsBigInt:!1,keepSourceTokens:!1,logLevel:"warn",prettyErrors:!0,strict:!0,stringKeys:!1,uniqueKeys:!0,version:"1.2"},r);this.options=o;let{version:i}=o;r?._directives?(this.directives=r._directives.atDocument(),this.directives.yaml.explicit&&(i=this.directives.yaml.version)):this.directives=new ss.Directives({version:i}),this.setSchema(i,r),this.contents=e===void 0?null:this.createNode(e,n,r)}clone(){let e=Object.create(t.prototype,{[Pe.NODE_TYPE]:{value:Pe.DOC}});return e.commentBefore=this.commentBefore,e.comment=this.comment,e.errors=this.errors.slice(),e.warnings=this.warnings.slice(),e.options=Object.assign({},this.options),this.directives&&(e.directives=this.directives.clone()),e.schema=this.schema.clone(),e.contents=Pe.isNode(this.contents)?this.contents.clone(e.schema):this.contents,this.range&&(e.range=this.range.slice()),e}add(e){Sa(this.contents)&&this.contents.add(e)}addIn(e,a){Sa(this.contents)&&this.contents.addIn(e,a)}createAlias(e,a){if(!e.anchor){let r=is.anchorNames(this);e.anchor=!a||r.has(a)?is.findNewAnchor(a||"a",r):a}return new df.Alias(e.anchor)}createNode(e,a,r){let n;if(typeof a=="function")e=a.call({"":e},"",e),n=a;else if(Array.isArray(a)){let b=M=>typeof M=="number"||M instanceof String||M instanceof Number,I=a.filter(b).map(String);I.length>0&&(a=a.concat(I)),n=a}else r===void 0&&a&&(r=a,a=void 0);let{aliasDuplicateObjects:o,anchorPrefix:i,flow:s,keepUndefined:u,onTagObj:l,tag:c}=r??{},{onAnchor:p,setAnchors:y,sourceObjects:g}=is.createNodeAnchors(this,i||"a"),S={aliasDuplicateObjects:o??!0,keepUndefined:u??!1,onAnchor:p,onTagObj:l,replacer:n,schema:this.schema,sourceObjects:g},d=mf.createNode(e,c,S);return s&&Pe.isCollection(d)&&(d.flow=!0),y(),d}createPair(e,a,r={}){let n=this.createNode(e,null,r),o=this.createNode(a,null,r);return new Sf.Pair(n,o)}delete(e){return Sa(this.contents)?this.contents.delete(e):!1}deleteIn(e){return da.isEmptyPath(e)?this.contents==null?!1:(this.contents=null,!0):Sa(this.contents)?this.contents.deleteIn(e):!1}get(e,a){return Pe.isCollection(this.contents)?this.contents.get(e,a):void 0}getIn(e,a){return da.isEmptyPath(e)?!a&&Pe.isScalar(this.contents)?this.contents.value:this.contents:Pe.isCollection(this.contents)?this.contents.getIn(e,a):void 0}has(e){return Pe.isCollection(this.contents)?this.contents.has(e):!1}hasIn(e){return da.isEmptyPath(e)?this.contents!==void 0:Pe.isCollection(this.contents)?this.contents.hasIn(e):!1}set(e,a){this.contents==null?this.contents=da.collectionFromPath(this.schema,[e],a):Sa(this.contents)&&this.contents.set(e,a)}setIn(e,a){da.isEmptyPath(e)?this.contents=a:this.contents==null?this.contents=da.collectionFromPath(this.schema,Array.from(e),a):Sa(this.contents)&&this.contents.setIn(e,a)}setSchema(e,a={}){typeof e=="number"&&(e=String(e));let r;switch(e){case"1.1":this.directives?this.directives.yaml.version="1.1":this.directives=new ss.Directives({version:"1.1"}),r={resolveKnownTags:!1,schema:"yaml-1.1"};break;case"1.2":case"next":this.directives?this.directives.yaml.version=e:this.directives=new ss.Directives({version:e}),r={resolveKnownTags:!0,schema:"core"};break;case null:this.directives&&delete this.directives,r=null;break;default:{let n=JSON.stringify(e);throw new Error(`Expected '1.1', '1.2' or null as first argument, but found: ${n}`)}}if(a.schema instanceof Object)this.schema=a.schema;else if(r)this.schema=new gf.Schema(Object.assign(r,a));else throw new Error("With a null YAML version, the { schema: Schema } option is required")}toJS({json:e,jsonArg:a,mapAsMap:r,maxAliasCount:n,onAnchor:o,reviver:i}={}){let s={anchors:new Map,doc:this,keep:!e,mapAsMap:r===!0,mapKeyWarned:!1,maxAliasCount:typeof n=="number"?n:100},u=bf.toJS(this.contents,a??"",s);if(typeof o=="function")for(let{count:l,res:c}of s.anchors.values())o(c,l);return typeof i=="function"?Mf.applyReviver(i,{"":u},"",u):u}toJSON(e,a){return this.toJS({json:!0,jsonArg:e,mapAsMap:!1,onAnchor:a})}toString(e={}){if(this.errors.length>0)throw new Error("Document with errors cannot be stringified");if("indent"in e&&(!Number.isInteger(e.indent)||Number(e.indent)<=0)){let a=JSON.stringify(e.indent);throw new Error(`"indent" option must be a positive integer, not ${a}`)}return If.stringifyDocument(this,e)}};function Sa(t){if(Pe.isCollection(t))return!0;throw new Error("Expected a YAML collection as document contents")}Vc.Document=us});var dr=f(yr=>{"use strict";var cr=class extends Error{constructor(e,a,r,n){super(),this.name=e,this.code=r,this.message=n,this.pos=a}},ls=class extends cr{constructor(e,a,r){super("YAMLParseError",e,a,r)}},ps=class extends cr{constructor(e,a,r){super("YAMLWarning",e,a,r)}},ff=(t,e)=>a=>{if(a.pos[0]===-1)return;a.linePos=a.pos.map(s=>e.linePos(s));let{line:r,col:n}=a.linePos[0];a.message+=` at line ${r}, column ${n}`;let o=n-1,i=t.substring(e.lineStarts[r-1],e.lineStarts[r]).replace(/[\n\r]+$/,"");if(o>=60&&i.length>80){let s=Math.min(o-39,i.length-79);i="\u2026"+i.substring(s),o-=s-1}if(i.length>80&&(i=i.substring(0,79)+"\u2026"),r>1&&/^ *$/.test(i.substring(0,o))){let s=t.substring(e.lineStarts[r-2],e.lineStarts[r-1]);s.length>80&&(s=s.substring(0,79)+`\u2026
`),i=s+i}if(/[^ ]/.test(i)){let s=1,u=a.linePos[1];u?.line===r&&u.col>n&&(s=Math.max(1,Math.min(u.col-n,80-o)));let l=" ".repeat(o)+"^".repeat(s);a.message+=`:

${i}
${l}
`}};yr.YAMLError=cr;yr.YAMLParseError=ls;yr.YAMLWarning=ps;yr.prettifyError=ff});var Sr=f(Fc=>{"use strict";function Rf(t,{flow:e,indicator:a,next:r,offset:n,onError:o,parentIndent:i,startOnNewline:s}){let u=!1,l=s,c=s,p="",y="",g=!1,S=!1,d=null,b=null,I=null,M=null,R=null,m=null,h=null;for(let P of t)switch(S&&(P.type!=="space"&&P.type!=="newline"&&P.type!=="comma"&&o(P.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),S=!1),d&&(l&&P.type!=="comment"&&P.type!=="newline"&&o(d,"TAB_AS_INDENT","Tabs are not allowed as indentation"),d=null),P.type){case"space":!e&&(a!=="doc-start"||r?.type!=="flow-collection")&&P.source.includes("	")&&(d=P),c=!0;break;case"comment":{c||o(P,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");let x=P.source.substring(1)||" ";p?p+=y+x:p=x,y="",l=!1;break}case"newline":l?p?p+=P.source:(!m||a!=="seq-item-ind")&&(u=!0):y+=P.source,l=!0,g=!0,(b||I)&&(M=P),c=!0;break;case"anchor":b&&o(P,"MULTIPLE_ANCHORS","A node can have at most one anchor"),P.source.endsWith(":")&&o(P.offset+P.source.length-1,"BAD_ALIAS","Anchor ending in : is ambiguous",!0),b=P,h??(h=P.offset),l=!1,c=!1,S=!0;break;case"tag":{I&&o(P,"MULTIPLE_TAGS","A node can have at most one tag"),I=P,h??(h=P.offset),l=!1,c=!1,S=!0;break}case a:(b||I)&&o(P,"BAD_PROP_ORDER",`Anchors and tags must be after the ${P.source} indicator`),m&&o(P,"UNEXPECTED_TOKEN",`Unexpected ${P.source} in ${e??"collection"}`),m=P,l=a==="seq-item-ind"||a==="explicit-key-ind",c=!1;break;case"comma":if(e){R&&o(P,"UNEXPECTED_TOKEN",`Unexpected , in ${e}`),R=P,l=!1,c=!1;break}default:o(P,"UNEXPECTED_TOKEN",`Unexpected ${P.type} token`),l=!1,c=!1}let A=t[t.length-1],D=A?A.offset+A.source.length:n;return S&&r&&r.type!=="space"&&r.type!=="newline"&&r.type!=="comma"&&(r.type!=="scalar"||r.source!=="")&&o(r.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),d&&(l&&d.indent<=i||r?.type==="block-map"||r?.type==="block-seq")&&o(d,"TAB_AS_INDENT","Tabs are not allowed as indentation"),{comma:R,found:m,spaceBefore:u,comment:p,hasNewline:g,anchor:b,tag:I,newlineAfterProp:M,end:D,start:h??D}}Fc.resolveProps=Rf});var io=f(jc=>{"use strict";function cs(t){if(!t)return null;switch(t.type){case"alias":case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":if(t.source.includes(`
`))return!0;if(t.end){for(let e of t.end)if(e.type==="newline")return!0}return!1;case"flow-collection":for(let e of t.items){for(let a of e.start)if(a.type==="newline")return!0;if(e.sep){for(let a of e.sep)if(a.type==="newline")return!0}if(cs(e.key)||cs(e.value))return!0}return!1;default:return!0}}jc.containsNewline=cs});var ys=f(zc=>{"use strict";var Af=io();function hf(t,e,a){if(e?.type==="flow-collection"){let r=e.end[0];r.indent===t&&(r.source==="]"||r.source==="}")&&Af.containsNewline(e)&&a(r,"BAD_INDENT","Flow end indicator should be more indented than parent",!0)}}zc.flowIndentCheck=hf});var ds=f(Hc=>{"use strict";var $c=T();function Pf(t,e,a){let{uniqueKeys:r}=t.options;if(r===!1)return!1;let n=typeof r=="function"?r:(o,i)=>o===i||$c.isScalar(o)&&$c.isScalar(i)&&o.value===i.value;return e.some(o=>n(o.key,a))}Hc.mapIncludes=Pf});var Jc=f(Yc=>{"use strict";var Gc=bt(),Ef=It(),Qc=Sr(),Cf=io(),Wc=ys(),Df=ds(),Kc="All mapping items must start at the same column";function vf({composeNode:t,composeEmptyNode:e},a,r,n,o){let i=o?.nodeClass??Ef.YAMLMap,s=new i(a.schema);a.atRoot&&(a.atRoot=!1);let u=r.offset,l=null;for(let c of r.items){let{start:p,key:y,sep:g,value:S}=c,d=Qc.resolveProps(p,{indicator:"explicit-key-ind",next:y??g?.[0],offset:u,onError:n,parentIndent:r.indent,startOnNewline:!0}),b=!d.found;if(b){if(y&&(y.type==="block-seq"?n(u,"BLOCK_AS_IMPLICIT_KEY","A block sequence may not be used as an implicit map key"):"indent"in y&&y.indent!==r.indent&&n(u,"BAD_INDENT",Kc)),!d.anchor&&!d.tag&&!g){l=d.end,d.comment&&(s.comment?s.comment+=`
`+d.comment:s.comment=d.comment);continue}(d.newlineAfterProp||Cf.containsNewline(y))&&n(y??p[p.length-1],"MULTILINE_IMPLICIT_KEY","Implicit keys need to be on a single line")}else d.found?.indent!==r.indent&&n(u,"BAD_INDENT",Kc);a.atKey=!0;let I=d.end,M=y?t(a,y,d,n):e(a,I,p,null,d,n);a.schema.compat&&Wc.flowIndentCheck(r.indent,y,n),a.atKey=!1,Df.mapIncludes(a,s.items,M)&&n(I,"DUPLICATE_KEY","Map keys must be unique");let R=Qc.resolveProps(g??[],{indicator:"map-value-ind",next:S,offset:M.range[2],onError:n,parentIndent:r.indent,startOnNewline:!y||y.type==="block-scalar"});if(u=R.end,R.found){b&&(S?.type==="block-map"&&!R.hasNewline&&n(u,"BLOCK_AS_IMPLICIT_KEY","Nested mappings are not allowed in compact mappings"),a.options.strict&&d.start<R.found.offset-1024&&n(M.range,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit block mapping key"));let m=S?t(a,S,R,n):e(a,u,g,null,R,n);a.schema.compat&&Wc.flowIndentCheck(r.indent,S,n),u=m.range[2];let h=new Gc.Pair(M,m);a.options.keepSourceTokens&&(h.srcToken=c),s.items.push(h)}else{b&&n(M.range,"MISSING_CHAR","Implicit map keys need to be followed by map values"),R.comment&&(M.comment?M.comment+=`
`+R.comment:M.comment=R.comment);let m=new Gc.Pair(M);a.options.keepSourceTokens&&(m.srcToken=c),s.items.push(m)}}return l&&l<u&&n(l,"IMPOSSIBLE","Map comment with trailing content"),s.range=[r.offset,u,l??u],s}Yc.resolveBlockMap=vf});var Xc=f(Zc=>{"use strict";var _f=Mt(),xf=Sr(),Uf=ys();function wf({composeNode:t,composeEmptyNode:e},a,r,n,o){let i=o?.nodeClass??_f.YAMLSeq,s=new i(a.schema);a.atRoot&&(a.atRoot=!1),a.atKey&&(a.atKey=!1);let u=r.offset,l=null;for(let{start:c,value:p}of r.items){let y=xf.resolveProps(c,{indicator:"seq-item-ind",next:p,offset:u,onError:n,parentIndent:r.indent,startOnNewline:!0});if(!y.found)if(y.anchor||y.tag||p)p?.type==="block-seq"?n(y.end,"BAD_INDENT","All sequence items must start at the same column"):n(u,"MISSING_CHAR","Sequence item without - indicator");else{l=y.end,y.comment&&(s.comment=y.comment);continue}let g=p?t(a,p,y,n):e(a,y.end,c,null,y,n);a.schema.compat&&Uf.flowIndentCheck(r.indent,p,n),u=g.range[2],s.items.push(g)}return s.range=[r.offset,u,l??u],s}Zc.resolveBlockSeq=wf});var ba=f(ey=>{"use strict";function Tf(t,e,a,r){let n="";if(t){let o=!1,i="";for(let s of t){let{source:u,type:l}=s;switch(l){case"space":o=!0;break;case"comment":{a&&!o&&r(s,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");let c=u.substring(1)||" ";n?n+=i+c:n=c,i="";break}case"newline":n&&(i+=u),o=!0;break;default:r(s,"UNEXPECTED_TOKEN",`Unexpected ${l} at node end`)}e+=u.length}}return{comment:n,offset:e}}ey.resolveEnd=Tf});var ny=f(ry=>{"use strict";var Of=T(),Lf=bt(),ty=It(),qf=Mt(),Bf=ba(),ay=Sr(),Nf=io(),kf=ds(),Ss="Block collections are not allowed within flow collections",bs=t=>t&&(t.type==="block-map"||t.type==="block-seq");function Vf({composeNode:t,composeEmptyNode:e},a,r,n,o){let i=r.start.source==="{",s=i?"flow map":"flow sequence",u=o?.nodeClass??(i?ty.YAMLMap:qf.YAMLSeq),l=new u(a.schema);l.flow=!0;let c=a.atRoot;c&&(a.atRoot=!1),a.atKey&&(a.atKey=!1);let p=r.offset+r.start.source.length;for(let b=0;b<r.items.length;++b){let I=r.items[b],{start:M,key:R,sep:m,value:h}=I,A=ay.resolveProps(M,{flow:s,indicator:"explicit-key-ind",next:R??m?.[0],offset:p,onError:n,parentIndent:r.indent,startOnNewline:!1});if(!A.found){if(!A.anchor&&!A.tag&&!m&&!h){b===0&&A.comma?n(A.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${s}`):b<r.items.length-1&&n(A.start,"UNEXPECTED_TOKEN",`Unexpected empty item in ${s}`),A.comment&&(l.comment?l.comment+=`
`+A.comment:l.comment=A.comment),p=A.end;continue}!i&&a.options.strict&&Nf.containsNewline(R)&&n(R,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line")}if(b===0)A.comma&&n(A.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${s}`);else if(A.comma||n(A.start,"MISSING_CHAR",`Missing , between ${s} items`),A.comment){let D="";e:for(let P of M)switch(P.type){case"comma":case"space":break;case"comment":D=P.source.substring(1);break e;default:break e}if(D){let P=l.items[l.items.length-1];Of.isPair(P)&&(P=P.value??P.key),P.comment?P.comment+=`
`+D:P.comment=D,A.comment=A.comment.substring(D.length+1)}}if(!i&&!m&&!A.found){let D=h?t(a,h,A,n):e(a,A.end,m,null,A,n);l.items.push(D),p=D.range[2],bs(h)&&n(D.range,"BLOCK_IN_FLOW",Ss)}else{a.atKey=!0;let D=A.end,P=R?t(a,R,A,n):e(a,D,M,null,A,n);bs(R)&&n(P.range,"BLOCK_IN_FLOW",Ss),a.atKey=!1;let x=ay.resolveProps(m??[],{flow:s,indicator:"map-value-ind",next:h,offset:P.range[2],onError:n,parentIndent:r.indent,startOnNewline:!1});if(x.found){if(!i&&!A.found&&a.options.strict){if(m)for(let U of m){if(U===x.found)break;if(U.type==="newline"){n(U,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line");break}}A.start<x.found.offset-1024&&n(x.found,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit flow sequence key")}}else h&&("source"in h&&h.source?.[0]===":"?n(h,"MISSING_CHAR",`Missing space after : in ${s}`):n(x.start,"MISSING_CHAR",`Missing , or : between ${s} items`));let O=h?t(a,h,x,n):x.found?e(a,x.end,m,null,x,n):null;O?bs(h)&&n(O.range,"BLOCK_IN_FLOW",Ss):x.comment&&(P.comment?P.comment+=`
`+x.comment:P.comment=x.comment);let v=new Lf.Pair(P,O);if(a.options.keepSourceTokens&&(v.srcToken=I),i){let U=l;kf.mapIncludes(a,U.items,P)&&n(D,"DUPLICATE_KEY","Map keys must be unique"),U.items.push(v)}else{let U=new ty.YAMLMap(a.schema);U.flow=!0,U.items.push(v);let Y=(O??P).range;U.range=[P.range[0],Y[1],Y[2]],l.items.push(U)}p=O?O.range[2]:x.end}}let y=i?"}":"]",[g,...S]=r.end,d=p;if(g?.source===y)d=g.offset+g.source.length;else{let b=s[0].toUpperCase()+s.substring(1),I=c?`${b} must end with a ${y}`:`${b} in block collection must be sufficiently indented and end with a ${y}`;n(p,c?"MISSING_CHAR":"BAD_INDENT",I),g&&g.source.length!==1&&S.unshift(g)}if(S.length>0){let b=Bf.resolveEnd(S,d,a.options.strict,n);b.comment&&(l.comment?l.comment+=`
`+b.comment:l.comment=b.comment),l.range=[r.offset,d,b.offset]}else l.range=[r.offset,d,d];return l}ry.resolveFlowCollection=Vf});var iy=f(oy=>{"use strict";var Ff=T(),jf=z(),zf=It(),$f=Mt(),Hf=Jc(),Gf=Xc(),Qf=ny();function gs(t,e,a,r,n,o){let i=a.type==="block-map"?Hf.resolveBlockMap(t,e,a,r,o):a.type==="block-seq"?Gf.resolveBlockSeq(t,e,a,r,o):Qf.resolveFlowCollection(t,e,a,r,o),s=i.constructor;return n==="!"||n===s.tagName?(i.tag=s.tagName,i):(n&&(i.tag=n),i)}function Wf(t,e,a,r,n){let o=r.tag,i=o?e.directives.tagName(o.source,y=>n(o,"TAG_RESOLVE_FAILED",y)):null;if(a.type==="block-seq"){let{anchor:y,newlineAfterProp:g}=r,S=y&&o?y.offset>o.offset?y:o:y??o;S&&(!g||g.offset<S.offset)&&n(S,"MISSING_CHAR","Missing newline after block sequence props")}let s=a.type==="block-map"?"map":a.type==="block-seq"?"seq":a.start.source==="{"?"map":"seq";if(!o||!i||i==="!"||i===zf.YAMLMap.tagName&&s==="map"||i===$f.YAMLSeq.tagName&&s==="seq")return gs(t,e,a,n,i);let u=e.schema.tags.find(y=>y.tag===i&&y.collection===s);if(!u){let y=e.schema.knownTags[i];if(y?.collection===s)e.schema.tags.push(Object.assign({},y,{default:!1})),u=y;else return y?n(o,"BAD_COLLECTION_TYPE",`${y.tag} used for ${s} collection, but expects ${y.collection??"scalar"}`,!0):n(o,"TAG_RESOLVE_FAILED",`Unresolved tag: ${i}`,!0),gs(t,e,a,n,i)}let l=gs(t,e,a,n,i,u),c=u.resolve?.(l,y=>n(o,"TAG_RESOLVE_FAILED",y),e.options)??l,p=Ff.isNode(c)?c:new jf.Scalar(c);return p.range=l.range,p.tag=i,u?.format&&(p.format=u.format),p}oy.composeCollection=Wf});var Ms=f(sy=>{"use strict";var Is=z();function Kf(t,e,a){let r=e.offset,n=Yf(e,t.options.strict,a);if(!n)return{value:"",type:null,comment:"",range:[r,r,r]};let o=n.mode===">"?Is.Scalar.BLOCK_FOLDED:Is.Scalar.BLOCK_LITERAL,i=e.source?Jf(e.source):[],s=i.length;for(let d=i.length-1;d>=0;--d){let b=i[d][1];if(b===""||b==="\r")s=d;else break}if(s===0){let d=n.chomp==="+"&&i.length>0?`
`.repeat(Math.max(1,i.length-1)):"",b=r+n.length;return e.source&&(b+=e.source.length),{value:d,type:o,comment:n.comment,range:[r,b,b]}}let u=e.indent+n.indent,l=e.offset+n.length,c=0;for(let d=0;d<s;++d){let[b,I]=i[d];if(I===""||I==="\r")n.indent===0&&b.length>u&&(u=b.length);else{b.length<u&&a(l+b.length,"MISSING_CHAR","Block scalars with more-indented leading empty lines must use an explicit indentation indicator"),n.indent===0&&(u=b.length),c=d,u===0&&!t.atRoot&&a(l,"BAD_INDENT","Block scalar values in collections must be indented");break}l+=b.length+I.length+1}for(let d=i.length-1;d>=s;--d)i[d][0].length>u&&(s=d+1);let p="",y="",g=!1;for(let d=0;d<c;++d)p+=i[d][0].slice(u)+`
`;for(let d=c;d<s;++d){let[b,I]=i[d];l+=b.length+I.length+1;let M=I[I.length-1]==="\r";if(M&&(I=I.slice(0,-1)),I&&b.length<u){let m=`Block scalar lines must not be less indented than their ${n.indent?"explicit indentation indicator":"first line"}`;a(l-I.length-(M?2:1),"BAD_INDENT",m),b=""}o===Is.Scalar.BLOCK_LITERAL?(p+=y+b.slice(u)+I,y=`
`):b.length>u||I[0]==="	"?(y===" "?y=`
`:!g&&y===`
`&&(y=`

`),p+=y+b.slice(u)+I,y=`
`,g=!0):I===""?y===`
`?p+=`
`:y=`
`:(p+=y+I,y=" ",g=!1)}switch(n.chomp){case"-":break;case"+":for(let d=s;d<i.length;++d)p+=`
`+i[d][0].slice(u);p[p.length-1]!==`
`&&(p+=`
`);break;default:p+=`
`}let S=r+n.length+e.source.length;return{value:p,type:o,comment:n.comment,range:[r,S,S]}}function Yf({offset:t,props:e},a,r){if(e[0].type!=="block-scalar-header")return r(e[0],"IMPOSSIBLE","Block scalar header not found"),null;let{source:n}=e[0],o=n[0],i=0,s="",u=-1;for(let y=1;y<n.length;++y){let g=n[y];if(!s&&(g==="-"||g==="+"))s=g;else{let S=Number(g);!i&&S?i=S:u===-1&&(u=t+y)}}u!==-1&&r(u,"UNEXPECTED_TOKEN",`Block scalar header includes extra characters: ${n}`);let l=!1,c="",p=n.length;for(let y=1;y<e.length;++y){let g=e[y];switch(g.type){case"space":l=!0;case"newline":p+=g.source.length;break;case"comment":a&&!l&&r(g,"MISSING_CHAR","Comments must be separated from other tokens by white space characters"),p+=g.source.length,c=g.source.substring(1);break;case"error":r(g,"UNEXPECTED_TOKEN",g.message),p+=g.source.length;break;default:{let S=`Unexpected token in block scalar header: ${g.type}`;r(g,"UNEXPECTED_TOKEN",S);let d=g.source;d&&typeof d=="string"&&(p+=d.length)}}}return{mode:o,indent:i,chomp:s,comment:c,length:p}}function Jf(t){let e=t.split(/\n( *)/),a=e[0],r=a.match(/^( *)/),o=[r?.[1]?[r[1],a.slice(r[1].length)]:["",a]];for(let i=1;i<e.length;i+=2)o.push([e[i],e[i+1]]);return o}sy.resolveBlockScalar=Kf});var fs=f(ly=>{"use strict";var ms=z(),Zf=ba();function Xf(t,e,a){let{offset:r,type:n,source:o,end:i}=t,s,u,l=(y,g,S)=>a(r+y,g,S);switch(n){case"scalar":s=ms.Scalar.PLAIN,u=eR(o,l);break;case"single-quoted-scalar":s=ms.Scalar.QUOTE_SINGLE,u=tR(o,l);break;case"double-quoted-scalar":s=ms.Scalar.QUOTE_DOUBLE,u=aR(o,l);break;default:return a(t,"UNEXPECTED_TOKEN",`Expected a flow scalar value, but found: ${n}`),{value:"",type:null,comment:"",range:[r,r+o.length,r+o.length]}}let c=r+o.length,p=Zf.resolveEnd(i,c,e,a);return{value:u,type:s,comment:p.comment,range:[r,c,p.offset]}}function eR(t,e){let a="";switch(t[0]){case"	":a="a tab character";break;case",":a="flow indicator character ,";break;case"%":a="directive indicator character %";break;case"|":case">":{a=`block scalar indicator ${t[0]}`;break}case"@":case"`":{a=`reserved character ${t[0]}`;break}}return a&&e(0,"BAD_SCALAR_START",`Plain value cannot start with ${a}`),uy(t)}function tR(t,e){return(t[t.length-1]!=="'"||t.length===1)&&e(t.length,"MISSING_CHAR","Missing closing 'quote"),uy(t.slice(1,-1)).replace(/''/g,"'")}function uy(t){let e,a;try{e=new RegExp(`(.*?)(?<![ 	])[ 	]*\r?
`,"sy"),a=new RegExp(`[ 	]*(.*?)(?:(?<![ 	])[ 	]*)?\r?
`,"sy")}catch{e=/(.*?)[ \t]*\r?\n/sy,a=/[ \t]*(.*?)[ \t]*\r?\n/sy}let r=e.exec(t);if(!r)return t;let n=r[1],o=" ",i=e.lastIndex;for(a.lastIndex=i;r=a.exec(t);)r[1]===""?o===`
`?n+=o:o=`
`:(n+=o+r[1],o=" "),i=a.lastIndex;let s=/[ \t]*(.*)/sy;return s.lastIndex=i,r=s.exec(t),n+o+(r?.[1]??"")}function aR(t,e){let a="";for(let r=1;r<t.length-1;++r){let n=t[r];if(!(n==="\r"&&t[r+1]===`
`))if(n===`
`){let{fold:o,offset:i}=rR(t,r);a+=o,r=i}else if(n==="\\"){let o=t[++r],i=nR[o];if(i)a+=i;else if(o===`
`)for(o=t[r+1];o===" "||o==="	";)o=t[++r+1];else if(o==="\r"&&t[r+1]===`
`)for(o=t[++r+1];o===" "||o==="	";)o=t[++r+1];else if(o==="x"||o==="u"||o==="U"){let s={x:2,u:4,U:8}[o];a+=oR(t,r+1,s,e),r+=s}else{let s=t.substr(r-1,2);e(r-1,"BAD_DQ_ESCAPE",`Invalid escape sequence ${s}`),a+=s}}else if(n===" "||n==="	"){let o=r,i=t[r+1];for(;i===" "||i==="	";)i=t[++r+1];i!==`
`&&!(i==="\r"&&t[r+2]===`
`)&&(a+=r>o?t.slice(o,r+1):n)}else a+=n}return(t[t.length-1]!=='"'||t.length===1)&&e(t.length,"MISSING_CHAR",'Missing closing "quote'),a}function rR(t,e){let a="",r=t[e+1];for(;(r===" "||r==="	"||r===`
`||r==="\r")&&!(r==="\r"&&t[e+2]!==`
`);)r===`
`&&(a+=`
`),e+=1,r=t[e+1];return a||(a=" "),{fold:a,offset:e}}var nR={0:"\0",a:"\x07",b:"\b",e:"\x1B",f:"\f",n:`
`,r:"\r",t:"	",v:"\v",N:"\x85",_:"\xA0",L:"\u2028",P:"\u2029"," ":" ",'"':'"',"/":"/","\\":"\\","	":"	"};function oR(t,e,a,r){let n=t.substr(e,a),i=n.length===a&&/^[0-9a-fA-F]+$/.test(n)?parseInt(n,16):NaN;if(isNaN(i)){let s=t.substr(e-2,a+2);return r(e-2,"BAD_DQ_ESCAPE",`Invalid escape sequence ${s}`),s}return String.fromCodePoint(i)}ly.resolveFlowScalar=Xf});var yy=f(cy=>{"use strict";var Bt=T(),py=z(),iR=Ms(),sR=fs();function uR(t,e,a,r){let{value:n,type:o,comment:i,range:s}=e.type==="block-scalar"?iR.resolveBlockScalar(t,e,r):sR.resolveFlowScalar(e,t.options.strict,r),u=a?t.directives.tagName(a.source,p=>r(a,"TAG_RESOLVE_FAILED",p)):null,l;t.options.stringKeys&&t.atKey?l=t.schema[Bt.SCALAR]:u?l=lR(t.schema,n,u,a,r):e.type==="scalar"?l=pR(t,n,e,r):l=t.schema[Bt.SCALAR];let c;try{let p=l.resolve(n,y=>r(a??e,"TAG_RESOLVE_FAILED",y),t.options);c=Bt.isScalar(p)?p:new py.Scalar(p)}catch(p){let y=p instanceof Error?p.message:String(p);r(a??e,"TAG_RESOLVE_FAILED",y),c=new py.Scalar(n)}return c.range=s,c.source=n,o&&(c.type=o),u&&(c.tag=u),l.format&&(c.format=l.format),i&&(c.comment=i),c}function lR(t,e,a,r,n){if(a==="!")return t[Bt.SCALAR];let o=[];for(let s of t.tags)if(!s.collection&&s.tag===a)if(s.default&&s.test)o.push(s);else return s;for(let s of o)if(s.test?.test(e))return s;let i=t.knownTags[a];return i&&!i.collection?(t.tags.push(Object.assign({},i,{default:!1,test:void 0})),i):(n(r,"TAG_RESOLVE_FAILED",`Unresolved tag: ${a}`,a!=="tag:yaml.org,2002:str"),t[Bt.SCALAR])}function pR({atKey:t,directives:e,schema:a},r,n,o){let i=a.tags.find(s=>(s.default===!0||t&&s.default==="key")&&s.test?.test(r))||a[Bt.SCALAR];if(a.compat){let s=a.compat.find(u=>u.default&&u.test?.test(r))??a[Bt.SCALAR];if(i.tag!==s.tag){let u=e.tagString(i.tag),l=e.tagString(s.tag),c=`Value may be parsed as either ${u} or ${l}`;o(n,"TAG_RESOLVE_FAILED",c,!0)}}return i}cy.composeScalar=uR});var Sy=f(dy=>{"use strict";function cR(t,e,a){if(e){a??(a=e.length);for(let r=a-1;r>=0;--r){let n=e[r];switch(n.type){case"space":case"comment":case"newline":t-=n.source.length;continue}for(n=e[++r];n?.type==="space";)t+=n.source.length,n=e[++r];break}}return t}dy.emptyScalarPosition=cR});var Iy=f(As=>{"use strict";var yR=Qa(),dR=T(),SR=iy(),by=yy(),bR=ba(),gR=Sy(),IR={composeNode:gy,composeEmptyNode:Rs};function gy(t,e,a,r){let n=t.atKey,{spaceBefore:o,comment:i,anchor:s,tag:u}=a,l,c=!0;switch(e.type){case"alias":l=MR(t,e,r),(s||u)&&r(e,"ALIAS_PROPS","An alias node must not specify any properties");break;case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"block-scalar":l=by.composeScalar(t,e,u,r),s&&(l.anchor=s.source.substring(1));break;case"block-map":case"block-seq":case"flow-collection":try{l=SR.composeCollection(IR,t,e,a,r),s&&(l.anchor=s.source.substring(1))}catch(p){let y=p instanceof Error?p.message:String(p);r(e,"RESOURCE_EXHAUSTION",y)}break;default:{let p=e.type==="error"?e.message:`Unsupported token (type: ${e.type})`;r(e,"UNEXPECTED_TOKEN",p),c=!1}}return l??(l=Rs(t,e.offset,void 0,null,a,r)),s&&l.anchor===""&&r(s,"BAD_ALIAS","Anchor cannot be an empty string"),n&&t.options.stringKeys&&(!dR.isScalar(l)||typeof l.value!="string"||l.tag&&l.tag!=="tag:yaml.org,2002:str")&&r(u??e,"NON_STRING_KEY","With stringKeys, all keys must be strings"),o&&(l.spaceBefore=!0),i&&(e.type==="scalar"&&e.source===""?l.comment=i:l.commentBefore=i),t.options.keepSourceTokens&&c&&(l.srcToken=e),l}function Rs(t,e,a,r,{spaceBefore:n,comment:o,anchor:i,tag:s,end:u},l){let c={type:"scalar",offset:gR.emptyScalarPosition(e,a,r),indent:-1,source:""},p=by.composeScalar(t,c,s,l);return i&&(p.anchor=i.source.substring(1),p.anchor===""&&l(i,"BAD_ALIAS","Anchor cannot be an empty string")),n&&(p.spaceBefore=!0),o&&(p.comment=o,p.range[2]=u),p}function MR({options:t},{offset:e,source:a,end:r},n){let o=new yR.Alias(a.substring(1));o.source===""&&n(e,"BAD_ALIAS","Alias cannot be an empty string"),o.source.endsWith(":")&&n(e+a.length-1,"BAD_ALIAS","Alias ending in : is ambiguous",!0);let i=e+a.length,s=bR.resolveEnd(r,i,t.strict,n);return o.range=[e,i,s.offset],s.comment&&(o.comment=s.comment),o}As.composeEmptyNode=Rs;As.composeNode=gy});var fy=f(my=>{"use strict";var mR=pr(),My=Iy(),fR=ba(),RR=Sr();function AR(t,e,{offset:a,start:r,value:n,end:o},i){let s=Object.assign({_directives:e},t),u=new mR.Document(void 0,s),l={atKey:!1,atRoot:!0,directives:u.directives,options:u.options,schema:u.schema},c=RR.resolveProps(r,{indicator:"doc-start",next:n??o?.[0],offset:a,onError:i,parentIndent:0,startOnNewline:!0});c.found&&(u.directives.docStart=!0,n&&(n.type==="block-map"||n.type==="block-seq")&&!c.hasNewline&&i(c.end,"MISSING_CHAR","Block collection cannot start on same line with directives-end marker")),u.contents=n?My.composeNode(l,n,c,i):My.composeEmptyNode(l,c.end,r,null,c,i);let p=u.contents.range[2],y=fR.resolveEnd(o,p,!1,i);return y.comment&&(u.comment=y.comment),u.range=[a,p,y.offset],u}my.composeDoc=AR});var Ps=f(hy=>{"use strict";var hR=require("process"),PR=li(),ER=pr(),br=dr(),Ry=T(),CR=fy(),DR=ba();function gr(t){if(typeof t=="number")return[t,t+1];if(Array.isArray(t))return t.length===2?t:[t[0],t[1]];let{offset:e,source:a}=t;return[e,e+(typeof a=="string"?a.length:1)]}function Ay(t){let e="",a=!1,r=!1;for(let n=0;n<t.length;++n){let o=t[n];switch(o[0]){case"#":e+=(e===""?"":r?`

`:`
`)+(o.substring(1)||" "),a=!0,r=!1;break;case"%":t[n+1]?.[0]!=="#"&&(n+=1),a=!1;break;default:a||(r=!0),a=!1}}return{comment:e,afterEmptyLine:r}}var hs=class{constructor(e={}){this.doc=null,this.atDirectives=!1,this.prelude=[],this.errors=[],this.warnings=[],this.onError=(a,r,n,o)=>{let i=gr(a);o?this.warnings.push(new br.YAMLWarning(i,r,n)):this.errors.push(new br.YAMLParseError(i,r,n))},this.directives=new PR.Directives({version:e.version||"1.2"}),this.options=e}decorate(e,a){let{comment:r,afterEmptyLine:n}=Ay(this.prelude);if(r){let o=e.contents;if(a)e.comment=e.comment?`${e.comment}
${r}`:r;else if(n||e.directives.docStart||!o)e.commentBefore=r;else if(Ry.isCollection(o)&&!o.flow&&o.items.length>0){let i=o.items[0];Ry.isPair(i)&&(i=i.key);let s=i.commentBefore;i.commentBefore=s?`${r}
${s}`:r}else{let i=o.commentBefore;o.commentBefore=i?`${r}
${i}`:r}}a?(Array.prototype.push.apply(e.errors,this.errors),Array.prototype.push.apply(e.warnings,this.warnings)):(e.errors=this.errors,e.warnings=this.warnings),this.prelude=[],this.errors=[],this.warnings=[]}streamInfo(){return{comment:Ay(this.prelude).comment,directives:this.directives,errors:this.errors,warnings:this.warnings}}*compose(e,a=!1,r=-1){for(let n of e)yield*this.next(n);yield*this.end(a,r)}*next(e){switch(hR.env.LOG_STREAM&&console.dir(e,{depth:null}),e.type){case"directive":this.directives.add(e.source,(a,r,n)=>{let o=gr(e);o[0]+=a,this.onError(o,"BAD_DIRECTIVE",r,n)}),this.prelude.push(e.source),this.atDirectives=!0;break;case"document":{let a=CR.composeDoc(this.options,this.directives,e,this.onError);this.atDirectives&&!a.directives.docStart&&this.onError(e,"MISSING_CHAR","Missing directives-end/doc-start indicator line"),this.decorate(a,!1),this.doc&&(yield this.doc),this.doc=a,this.atDirectives=!1;break}case"byte-order-mark":case"space":break;case"comment":case"newline":this.prelude.push(e.source);break;case"error":{let a=e.source?`${e.message}: ${JSON.stringify(e.source)}`:e.message,r=new br.YAMLParseError(gr(e),"UNEXPECTED_TOKEN",a);this.atDirectives||!this.doc?this.errors.push(r):this.doc.errors.push(r);break}case"doc-end":{if(!this.doc){let r="Unexpected doc-end without preceding document";this.errors.push(new br.YAMLParseError(gr(e),"UNEXPECTED_TOKEN",r));break}this.doc.directives.docEnd=!0;let a=DR.resolveEnd(e.end,e.offset+e.source.length,this.doc.options.strict,this.onError);if(this.decorate(this.doc,!0),a.comment){let r=this.doc.comment;this.doc.comment=r?`${r}
${a.comment}`:a.comment}this.doc.range[2]=a.offset;break}default:this.errors.push(new br.YAMLParseError(gr(e),"UNEXPECTED_TOKEN",`Unsupported token ${e.type}`))}}*end(e=!1,a=-1){if(this.doc)this.decorate(this.doc,!0),yield this.doc,this.doc=null;else if(e){let r=Object.assign({_directives:this.directives},this.options),n=new ER.Document(void 0,r);this.atDirectives&&this.onError(a,"MISSING_CHAR","Missing directives-end indicator line"),n.range=[0,a,a],this.decorate(n,!1),yield n}}};hy.Composer=hs});var Cy=f(so=>{"use strict";var vR=Ms(),_R=fs(),xR=dr(),Py=Za();function UR(t,e=!0,a){if(t){let r=(n,o,i)=>{let s=typeof n=="number"?n:Array.isArray(n)?n[0]:n.offset;if(a)a(s,o,i);else throw new xR.YAMLParseError([s,s+1],o,i)};switch(t.type){case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return _R.resolveFlowScalar(t,e,r);case"block-scalar":return vR.resolveBlockScalar({options:{strict:e}},t,r)}}return null}function wR(t,e){let{implicitKey:a=!1,indent:r,inFlow:n=!1,offset:o=-1,type:i="PLAIN"}=e,s=Py.stringifyString({type:i,value:t},{implicitKey:a,indent:r>0?" ".repeat(r):"",inFlow:n,options:{blockQuote:!0,lineWidth:-1}}),u=e.end??[{type:"newline",offset:-1,indent:r,source:`
`}];switch(s[0]){case"|":case">":{let l=s.indexOf(`
`),c=s.substring(0,l),p=s.substring(l+1)+`
`,y=[{type:"block-scalar-header",offset:o,indent:r,source:c}];return Ey(y,u)||y.push({type:"newline",offset:-1,indent:r,source:`
`}),{type:"block-scalar",offset:o,indent:r,props:y,source:p}}case'"':return{type:"double-quoted-scalar",offset:o,indent:r,source:s,end:u};case"'":return{type:"single-quoted-scalar",offset:o,indent:r,source:s,end:u};default:return{type:"scalar",offset:o,indent:r,source:s,end:u}}}function TR(t,e,a={}){let{afterKey:r=!1,implicitKey:n=!1,inFlow:o=!1,type:i}=a,s="indent"in t?t.indent:null;if(r&&typeof s=="number"&&(s+=2),!i)switch(t.type){case"single-quoted-scalar":i="QUOTE_SINGLE";break;case"double-quoted-scalar":i="QUOTE_DOUBLE";break;case"block-scalar":{let l=t.props[0];if(l.type!=="block-scalar-header")throw new Error("Invalid block scalar header");i=l.source[0]===">"?"BLOCK_FOLDED":"BLOCK_LITERAL";break}default:i="PLAIN"}let u=Py.stringifyString({type:i,value:e},{implicitKey:n||s===null,indent:s!==null&&s>0?" ".repeat(s):"",inFlow:o,options:{blockQuote:!0,lineWidth:-1}});switch(u[0]){case"|":case">":OR(t,u);break;case'"':Es(t,u,"double-quoted-scalar");break;case"'":Es(t,u,"single-quoted-scalar");break;default:Es(t,u,"scalar")}}function OR(t,e){let a=e.indexOf(`
`),r=e.substring(0,a),n=e.substring(a+1)+`
`;if(t.type==="block-scalar"){let o=t.props[0];if(o.type!=="block-scalar-header")throw new Error("Invalid block scalar header");o.source=r,t.source=n}else{let{offset:o}=t,i="indent"in t?t.indent:-1,s=[{type:"block-scalar-header",offset:o,indent:i,source:r}];Ey(s,"end"in t?t.end:void 0)||s.push({type:"newline",offset:-1,indent:i,source:`
`});for(let u of Object.keys(t))u!=="type"&&u!=="offset"&&delete t[u];Object.assign(t,{type:"block-scalar",indent:i,props:s,source:n})}}function Ey(t,e){if(e)for(let a of e)switch(a.type){case"space":case"comment":t.push(a);break;case"newline":return t.push(a),!0}return!1}function Es(t,e,a){switch(t.type){case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":t.type=a,t.source=e;break;case"block-scalar":{let r=t.props.slice(1),n=e.length;t.props[0].type==="block-scalar-header"&&(n-=t.props[0].source.length);for(let o of r)o.offset+=n;delete t.props,Object.assign(t,{type:a,source:e,end:r});break}case"block-map":case"block-seq":{let n={type:"newline",offset:t.offset+e.length,indent:t.indent,source:`
`};delete t.items,Object.assign(t,{type:a,source:e,end:[n]});break}default:{let r="indent"in t?t.indent:-1,n="end"in t&&Array.isArray(t.end)?t.end.filter(o=>o.type==="space"||o.type==="comment"||o.type==="newline"):[];for(let o of Object.keys(t))o!=="type"&&o!=="offset"&&delete t[o];Object.assign(t,{type:a,indent:r,source:e,end:n})}}}so.createScalarToken=wR;so.resolveAsScalar=UR;so.setScalarValue=TR});var vy=f(Dy=>{"use strict";var LR=t=>"type"in t?lo(t):uo(t);function lo(t){switch(t.type){case"block-scalar":{let e="";for(let a of t.props)e+=lo(a);return e+t.source}case"block-map":case"block-seq":{let e="";for(let a of t.items)e+=uo(a);return e}case"flow-collection":{let e=t.start.source;for(let a of t.items)e+=uo(a);for(let a of t.end)e+=a.source;return e}case"document":{let e=uo(t);if(t.end)for(let a of t.end)e+=a.source;return e}default:{let e=t.source;if("end"in t&&t.end)for(let a of t.end)e+=a.source;return e}}}function uo({start:t,key:e,sep:a,value:r}){let n="";for(let o of t)n+=o.source;if(e&&(n+=lo(e)),a)for(let o of a)n+=o.source;return r&&(n+=lo(r)),n}Dy.stringify=LR});var wy=f(Uy=>{"use strict";var Cs=Symbol("break visit"),qR=Symbol("skip children"),_y=Symbol("remove item");function Nt(t,e){"type"in t&&t.type==="document"&&(t={start:t.start,value:t.value}),xy(Object.freeze([]),t,e)}Nt.BREAK=Cs;Nt.SKIP=qR;Nt.REMOVE=_y;Nt.itemAtPath=(t,e)=>{let a=t;for(let[r,n]of e){let o=a?.[r];if(o&&"items"in o)a=o.items[n];else return}return a};Nt.parentCollection=(t,e)=>{let a=Nt.itemAtPath(t,e.slice(0,-1)),r=e[e.length-1][0],n=a?.[r];if(n&&"items"in n)return n;throw new Error("Parent collection not found")};function xy(t,e,a){let r=a(e,t);if(typeof r=="symbol")return r;for(let n of["key","value"]){let o=e[n];if(o&&"items"in o){for(let i=0;i<o.items.length;++i){let s=xy(Object.freeze(t.concat([[n,i]])),o.items[i],a);if(typeof s=="number")i=s-1;else{if(s===Cs)return Cs;s===_y&&(o.items.splice(i,1),i-=1)}}typeof r=="function"&&n==="key"&&(r=r(e,t))}}return typeof r=="function"?r(e,t):r}Uy.visit=Nt});var po=f(ue=>{"use strict";var Ds=Cy(),BR=vy(),NR=wy(),vs="\uFEFF",_s="",xs="",Us="",kR=t=>!!t&&"items"in t,VR=t=>!!t&&(t.type==="scalar"||t.type==="single-quoted-scalar"||t.type==="double-quoted-scalar"||t.type==="block-scalar");function FR(t){switch(t){case vs:return"<BOM>";case _s:return"<DOC>";case xs:return"<FLOW_END>";case Us:return"<SCALAR>";default:return JSON.stringify(t)}}function jR(t){switch(t){case vs:return"byte-order-mark";case _s:return"doc-mode";case xs:return"flow-error-end";case Us:return"scalar";case"---":return"doc-start";case"...":return"doc-end";case"":case`
`:case`\r
`:return"newline";case"-":return"seq-item-ind";case"?":return"explicit-key-ind";case":":return"map-value-ind";case"{":return"flow-map-start";case"}":return"flow-map-end";case"[":return"flow-seq-start";case"]":return"flow-seq-end";case",":return"comma"}switch(t[0]){case" ":case"	":return"space";case"#":return"comment";case"%":return"directive-line";case"*":return"alias";case"&":return"anchor";case"!":return"tag";case"'":return"single-quoted-scalar";case'"':return"double-quoted-scalar";case"|":case">":return"block-scalar-header"}return null}ue.createScalarToken=Ds.createScalarToken;ue.resolveAsScalar=Ds.resolveAsScalar;ue.setScalarValue=Ds.setScalarValue;ue.stringify=BR.stringify;ue.visit=NR.visit;ue.BOM=vs;ue.DOCUMENT=_s;ue.FLOW_END=xs;ue.SCALAR=Us;ue.isCollection=kR;ue.isScalar=VR;ue.prettyToken=FR;ue.tokenType=jR});var Os=f(Oy=>{"use strict";var Ir=po();function xe(t){switch(t){case void 0:case" ":case`
`:case"\r":case"	":return!0;default:return!1}}var Ty=new Set("0123456789ABCDEFabcdef"),zR=new Set("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()"),co=new Set(",[]{}"),$R=new Set(` ,[]{}
\r	`),ws=t=>!t||$R.has(t),Ts=class{constructor(){this.atEnd=!1,this.blockScalarIndent=-1,this.blockScalarKeep=!1,this.buffer="",this.flowKey=!1,this.flowLevel=0,this.indentNext=0,this.indentValue=0,this.lineEndPos=null,this.next=null,this.pos=0}*lex(e,a=!1){if(e){if(typeof e!="string")throw TypeError("source is not a string");this.buffer=this.buffer?this.buffer+e:e,this.lineEndPos=null}this.atEnd=!a;let r=this.next??"stream";for(;r&&(a||this.hasChars(1));)r=yield*this.parseNext(r)}atLineEnd(){let e=this.pos,a=this.buffer[e];for(;a===" "||a==="	";)a=this.buffer[++e];return!a||a==="#"||a===`
`?!0:a==="\r"?this.buffer[e+1]===`
`:!1}charAt(e){return this.buffer[this.pos+e]}continueScalar(e){let a=this.buffer[e];if(this.indentNext>0){let r=0;for(;a===" ";)a=this.buffer[++r+e];if(a==="\r"){let n=this.buffer[r+e+1];if(n===`
`||!n&&!this.atEnd)return e+r+1}return a===`
`||r>=this.indentNext||!a&&!this.atEnd?e+r:-1}if(a==="-"||a==="."){let r=this.buffer.substr(e,3);if((r==="---"||r==="...")&&xe(this.buffer[e+3]))return-1}return e}getLine(){let e=this.lineEndPos;return(typeof e!="number"||e!==-1&&e<this.pos)&&(e=this.buffer.indexOf(`
`,this.pos),this.lineEndPos=e),e===-1?this.atEnd?this.buffer.substring(this.pos):null:(this.buffer[e-1]==="\r"&&(e-=1),this.buffer.substring(this.pos,e))}hasChars(e){return this.pos+e<=this.buffer.length}setNext(e){return this.buffer=this.buffer.substring(this.pos),this.pos=0,this.lineEndPos=null,this.next=e,null}peek(e){return this.buffer.substr(this.pos,e)}*parseNext(e){switch(e){case"stream":return yield*this.parseStream();case"line-start":return yield*this.parseLineStart();case"block-start":return yield*this.parseBlockStart();case"doc":return yield*this.parseDocument();case"flow":return yield*this.parseFlowCollection();case"quoted-scalar":return yield*this.parseQuotedScalar();case"block-scalar":return yield*this.parseBlockScalar();case"plain-scalar":return yield*this.parsePlainScalar()}}*parseStream(){let e=this.getLine();if(e===null)return this.setNext("stream");if(e[0]===Ir.BOM&&(yield*this.pushCount(1),e=e.substring(1)),e[0]==="%"){let a=e.length,r=e.indexOf("#");for(;r!==-1;){let o=e[r-1];if(o===" "||o==="	"){a=r-1;break}else r=e.indexOf("#",r+1)}for(;;){let o=e[a-1];if(o===" "||o==="	")a-=1;else break}let n=(yield*this.pushCount(a))+(yield*this.pushSpaces(!0));return yield*this.pushCount(e.length-n),this.pushNewline(),"stream"}if(this.atLineEnd()){let a=yield*this.pushSpaces(!0);return yield*this.pushCount(e.length-a),yield*this.pushNewline(),"stream"}return yield Ir.DOCUMENT,yield*this.parseLineStart()}*parseLineStart(){let e=this.charAt(0);if(!e&&!this.atEnd)return this.setNext("line-start");if(e==="-"||e==="."){if(!this.atEnd&&!this.hasChars(4))return this.setNext("line-start");let a=this.peek(3);if((a==="---"||a==="...")&&xe(this.charAt(3)))return yield*this.pushCount(3),this.indentValue=0,this.indentNext=0,a==="---"?"doc":"stream"}return this.indentValue=yield*this.pushSpaces(!1),this.indentNext>this.indentValue&&!xe(this.charAt(1))&&(this.indentNext=this.indentValue),yield*this.parseBlockStart()}*parseBlockStart(){let[e,a]=this.peek(2);if(!a&&!this.atEnd)return this.setNext("block-start");if((e==="-"||e==="?"||e===":")&&xe(a)){let r=(yield*this.pushCount(1))+(yield*this.pushSpaces(!0));return this.indentNext=this.indentValue+1,this.indentValue+=r,yield*this.parseBlockStart()}return"doc"}*parseDocument(){yield*this.pushSpaces(!0);let e=this.getLine();if(e===null)return this.setNext("doc");let a=yield*this.pushIndicators();switch(e[a]){case"#":yield*this.pushCount(e.length-a);case void 0:return yield*this.pushNewline(),yield*this.parseLineStart();case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel=1,"flow";case"}":case"]":return yield*this.pushCount(1),"doc";case"*":return yield*this.pushUntil(ws),"doc";case'"':case"'":return yield*this.parseQuotedScalar();case"|":case">":return a+=yield*this.parseBlockScalarHeader(),a+=yield*this.pushSpaces(!0),yield*this.pushCount(e.length-a),yield*this.pushNewline(),yield*this.parseBlockScalar();default:return yield*this.parsePlainScalar()}}*parseFlowCollection(){let e,a,r=-1;do e=yield*this.pushNewline(),e>0?(a=yield*this.pushSpaces(!1),this.indentValue=r=a):a=0,a+=yield*this.pushSpaces(!0);while(e+a>0);let n=this.getLine();if(n===null)return this.setNext("flow");if((r!==-1&&r<this.indentNext&&n[0]!=="#"||r===0&&(n.startsWith("---")||n.startsWith("..."))&&xe(n[3]))&&!(r===this.indentNext-1&&this.flowLevel===1&&(n[0]==="]"||n[0]==="}")))return this.flowLevel=0,yield Ir.FLOW_END,yield*this.parseLineStart();let o=0;for(;n[o]===",";)o+=yield*this.pushCount(1),o+=yield*this.pushSpaces(!0),this.flowKey=!1;switch(o+=yield*this.pushIndicators(),n[o]){case void 0:return"flow";case"#":return yield*this.pushCount(n.length-o),"flow";case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel+=1,"flow";case"}":case"]":return yield*this.pushCount(1),this.flowKey=!0,this.flowLevel-=1,this.flowLevel?"flow":"doc";case"*":return yield*this.pushUntil(ws),"flow";case'"':case"'":return this.flowKey=!0,yield*this.parseQuotedScalar();case":":{let i=this.charAt(1);if(this.flowKey||xe(i)||i===",")return this.flowKey=!1,yield*this.pushCount(1),yield*this.pushSpaces(!0),"flow"}default:return this.flowKey=!1,yield*this.parsePlainScalar()}}*parseQuotedScalar(){let e=this.charAt(0),a=this.buffer.indexOf(e,this.pos+1);if(e==="'")for(;a!==-1&&this.buffer[a+1]==="'";)a=this.buffer.indexOf("'",a+2);else for(;a!==-1;){let o=0;for(;this.buffer[a-1-o]==="\\";)o+=1;if(o%2===0)break;a=this.buffer.indexOf('"',a+1)}let r=this.buffer.substring(0,a),n=r.indexOf(`
`,this.pos);if(n!==-1){for(;n!==-1;){let o=this.continueScalar(n+1);if(o===-1)break;n=r.indexOf(`
`,o)}n!==-1&&(a=n-(r[n-1]==="\r"?2:1))}if(a===-1){if(!this.atEnd)return this.setNext("quoted-scalar");a=this.buffer.length}return yield*this.pushToIndex(a+1,!1),this.flowLevel?"flow":"doc"}*parseBlockScalarHeader(){this.blockScalarIndent=-1,this.blockScalarKeep=!1;let e=this.pos;for(;;){let a=this.buffer[++e];if(a==="+")this.blockScalarKeep=!0;else if(a>"0"&&a<="9")this.blockScalarIndent=Number(a)-1;else if(a!=="-")break}return yield*this.pushUntil(a=>xe(a)||a==="#")}*parseBlockScalar(){let e=this.pos-1,a=0,r;e:for(let o=this.pos;r=this.buffer[o];++o)switch(r){case" ":a+=1;break;case`
`:e=o,a=0;break;case"\r":{let i=this.buffer[o+1];if(!i&&!this.atEnd)return this.setNext("block-scalar");if(i===`
`)break}default:break e}if(!r&&!this.atEnd)return this.setNext("block-scalar");if(a>=this.indentNext){this.blockScalarIndent===-1?this.indentNext=a:this.indentNext=this.blockScalarIndent+(this.indentNext===0?1:this.indentNext);do{let o=this.continueScalar(e+1);if(o===-1)break;e=this.buffer.indexOf(`
`,o)}while(e!==-1);if(e===-1){if(!this.atEnd)return this.setNext("block-scalar");e=this.buffer.length}}let n=e+1;for(r=this.buffer[n];r===" ";)r=this.buffer[++n];if(r==="	"){for(;r==="	"||r===" "||r==="\r"||r===`
`;)r=this.buffer[++n];e=n-1}else if(!this.blockScalarKeep)do{let o=e-1,i=this.buffer[o];i==="\r"&&(i=this.buffer[--o]);let s=o;for(;i===" ";)i=this.buffer[--o];if(i===`
`&&o>=this.pos&&o+1+a>s)e=o;else break}while(!0);return yield Ir.SCALAR,yield*this.pushToIndex(e+1,!0),yield*this.parseLineStart()}*parsePlainScalar(){let e=this.flowLevel>0,a=this.pos-1,r=this.pos-1,n;for(;n=this.buffer[++r];)if(n===":"){let o=this.buffer[r+1];if(xe(o)||e&&co.has(o))break;a=r}else if(xe(n)){let o=this.buffer[r+1];if(n==="\r"&&(o===`
`?(r+=1,n=`
`,o=this.buffer[r+1]):a=r),o==="#"||e&&co.has(o))break;if(n===`
`){let i=this.continueScalar(r+1);if(i===-1)break;r=Math.max(r,i-2)}}else{if(e&&co.has(n))break;a=r}return!n&&!this.atEnd?this.setNext("plain-scalar"):(yield Ir.SCALAR,yield*this.pushToIndex(a+1,!0),e?"flow":"doc")}*pushCount(e){return e>0?(yield this.buffer.substr(this.pos,e),this.pos+=e,e):0}*pushToIndex(e,a){let r=this.buffer.slice(this.pos,e);return r?(yield r,this.pos+=r.length,r.length):(a&&(yield""),0)}*pushIndicators(){switch(this.charAt(0)){case"!":return(yield*this.pushTag())+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators());case"&":return(yield*this.pushUntil(ws))+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators());case"-":case"?":case":":{let e=this.flowLevel>0,a=this.charAt(1);if(xe(a)||e&&co.has(a))return e?this.flowKey&&(this.flowKey=!1):this.indentNext=this.indentValue+1,(yield*this.pushCount(1))+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators())}}return 0}*pushTag(){if(this.charAt(1)==="<"){let e=this.pos+2,a=this.buffer[e];for(;!xe(a)&&a!==">";)a=this.buffer[++e];return yield*this.pushToIndex(a===">"?e+1:e,!1)}else{let e=this.pos+1,a=this.buffer[e];for(;a;)if(zR.has(a))a=this.buffer[++e];else if(a==="%"&&Ty.has(this.buffer[e+1])&&Ty.has(this.buffer[e+2]))a=this.buffer[e+=3];else break;return yield*this.pushToIndex(e,!1)}}*pushNewline(){let e=this.buffer[this.pos];return e===`
`?yield*this.pushCount(1):e==="\r"&&this.charAt(1)===`
`?yield*this.pushCount(2):0}*pushSpaces(e){let a=this.pos-1,r;do r=this.buffer[++a];while(r===" "||e&&r==="	");let n=a-this.pos;return n>0&&(yield this.buffer.substr(this.pos,n),this.pos=a),n}*pushUntil(e){let a=this.pos,r=this.buffer[a];for(;!e(r);)r=this.buffer[++a];return yield*this.pushToIndex(a,!1)}};Oy.Lexer=Ts});var qs=f(Ly=>{"use strict";var Ls=class{constructor(){this.lineStarts=[],this.addNewLine=e=>this.lineStarts.push(e),this.linePos=e=>{let a=0,r=this.lineStarts.length;for(;a<r;){let o=a+r>>1;this.lineStarts[o]<e?a=o+1:r=o}if(this.lineStarts[a]===e)return{line:a+1,col:1};if(a===0)return{line:0,col:e};let n=this.lineStarts[a-1];return{line:a,col:e-n+1}}}};Ly.LineCounter=Ls});var Ns=f(Vy=>{"use strict";var HR=require("process"),qy=po(),GR=Os();function mt(t,e){for(let a=0;a<t.length;++a)if(t[a].type===e)return!0;return!1}function By(t){for(let e=0;e<t.length;++e)switch(t[e].type){case"space":case"comment":case"newline":break;default:return e}return-1}function ky(t){switch(t?.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"flow-collection":return!0;default:return!1}}function yo(t){switch(t.type){case"document":return t.start;case"block-map":{let e=t.items[t.items.length-1];return e.sep??e.start}case"block-seq":return t.items[t.items.length-1].start;default:return[]}}function ga(t){if(t.length===0)return[];let e=t.length;e:for(;--e>=0;)switch(t[e].type){case"doc-start":case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":case"newline":break e}for(;t[++e]?.type==="space";);return t.splice(e,t.length)}function Ny(t){if(t.start.type==="flow-seq-start")for(let e of t.items)e.sep&&!e.value&&!mt(e.start,"explicit-key-ind")&&!mt(e.sep,"map-value-ind")&&(e.key&&(e.value=e.key),delete e.key,ky(e.value)?e.value.end?Array.prototype.push.apply(e.value.end,e.sep):e.value.end=e.sep:Array.prototype.push.apply(e.start,e.sep),delete e.sep)}var Bs=class{constructor(e){this.atNewLine=!0,this.atScalar=!1,this.indent=0,this.offset=0,this.onKeyLine=!1,this.stack=[],this.source="",this.type="",this.lexer=new GR.Lexer,this.onNewLine=e}*parse(e,a=!1){this.onNewLine&&this.offset===0&&this.onNewLine(0);for(let r of this.lexer.lex(e,a))yield*this.next(r);a||(yield*this.end())}*next(e){if(this.source=e,HR.env.LOG_TOKENS&&console.log("|",qy.prettyToken(e)),this.atScalar){this.atScalar=!1,yield*this.step(),this.offset+=e.length;return}let a=qy.tokenType(e);if(a)if(a==="scalar")this.atNewLine=!1,this.atScalar=!0,this.type="scalar";else{switch(this.type=a,yield*this.step(),a){case"newline":this.atNewLine=!0,this.indent=0,this.onNewLine&&this.onNewLine(this.offset+e.length);break;case"space":this.atNewLine&&e[0]===" "&&(this.indent+=e.length);break;case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":this.atNewLine&&(this.indent+=e.length);break;case"doc-mode":case"flow-error-end":return;default:this.atNewLine=!1}this.offset+=e.length}else{let r=`Not a YAML token: ${e}`;yield*this.pop({type:"error",offset:this.offset,message:r,source:e}),this.offset+=e.length}}*end(){for(;this.stack.length>0;)yield*this.pop()}get sourceToken(){return{type:this.type,offset:this.offset,indent:this.indent,source:this.source}}*step(){let e=this.peek(1);if(this.type==="doc-end"&&e?.type!=="doc-end"){for(;this.stack.length>0;)yield*this.pop();this.stack.push({type:"doc-end",offset:this.offset,source:this.source});return}if(!e)return yield*this.stream();switch(e.type){case"document":return yield*this.document(e);case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return yield*this.scalar(e);case"block-scalar":return yield*this.blockScalar(e);case"block-map":return yield*this.blockMap(e);case"block-seq":return yield*this.blockSequence(e);case"flow-collection":return yield*this.flowCollection(e);case"doc-end":return yield*this.documentEnd(e)}yield*this.pop()}peek(e){return this.stack[this.stack.length-e]}*pop(e){let a=e??this.stack.pop();if(!a)yield{type:"error",offset:this.offset,source:"",message:"Tried to pop an empty stack"};else if(this.stack.length===0)yield a;else{let r=this.peek(1);switch(a.type==="block-scalar"?a.indent="indent"in r?r.indent:0:a.type==="flow-collection"&&r.type==="document"&&(a.indent=0),a.type==="flow-collection"&&Ny(a),r.type){case"document":r.value=a;break;case"block-scalar":r.props.push(a);break;case"block-map":{let n=r.items[r.items.length-1];if(n.value){r.items.push({start:[],key:a,sep:[]}),this.onKeyLine=!0;return}else if(n.sep)n.value=a;else{Object.assign(n,{key:a,sep:[]}),this.onKeyLine=!n.explicitKey;return}break}case"block-seq":{let n=r.items[r.items.length-1];n.value?r.items.push({start:[],value:a}):n.value=a;break}case"flow-collection":{let n=r.items[r.items.length-1];!n||n.value?r.items.push({start:[],key:a,sep:[]}):n.sep?n.value=a:Object.assign(n,{key:a,sep:[]});return}default:yield*this.pop(),yield*this.pop(a)}if((r.type==="document"||r.type==="block-map"||r.type==="block-seq")&&(a.type==="block-map"||a.type==="block-seq")){let n=a.items[a.items.length-1];n&&!n.sep&&!n.value&&n.start.length>0&&By(n.start)===-1&&(a.indent===0||n.start.every(o=>o.type!=="comment"||o.indent<a.indent))&&(r.type==="document"?r.end=n.start:r.items.push({start:n.start}),a.items.splice(-1,1))}}}*stream(){switch(this.type){case"directive-line":yield{type:"directive",offset:this.offset,source:this.source};return;case"byte-order-mark":case"space":case"comment":case"newline":yield this.sourceToken;return;case"doc-mode":case"doc-start":{let e={type:"document",offset:this.offset,start:[]};this.type==="doc-start"&&e.start.push(this.sourceToken),this.stack.push(e);return}}yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML stream`,source:this.source}}*document(e){if(e.value)return yield*this.lineEnd(e);switch(this.type){case"doc-start":{By(e.start)!==-1?(yield*this.pop(),yield*this.step()):e.start.push(this.sourceToken);return}case"anchor":case"tag":case"space":case"comment":case"newline":e.start.push(this.sourceToken);return}let a=this.startBlockValue(e);a?this.stack.push(a):yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML document`,source:this.source}}*scalar(e){if(this.type==="map-value-ind"){let a=yo(this.peek(2)),r=ga(a),n;e.end?(n=e.end,n.push(this.sourceToken),delete e.end):n=[this.sourceToken];let o={type:"block-map",offset:e.offset,indent:e.indent,items:[{start:r,key:e,sep:n}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=o}else yield*this.lineEnd(e)}*blockScalar(e){switch(this.type){case"space":case"comment":case"newline":e.props.push(this.sourceToken);return;case"scalar":if(e.source=this.source,this.atNewLine=!0,this.indent=0,this.onNewLine){let a=this.source.indexOf(`
`)+1;for(;a!==0;)this.onNewLine(this.offset+a),a=this.source.indexOf(`
`,a)+1}yield*this.pop();break;default:yield*this.pop(),yield*this.step()}}*blockMap(e){let a=e.items[e.items.length-1];switch(this.type){case"newline":if(this.onKeyLine=!1,a.value){let r="end"in a.value?a.value.end:void 0;(Array.isArray(r)?r[r.length-1]:void 0)?.type==="comment"?r?.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else a.sep?a.sep.push(this.sourceToken):a.start.push(this.sourceToken);return;case"space":case"comment":if(a.value)e.items.push({start:[this.sourceToken]});else if(a.sep)a.sep.push(this.sourceToken);else{if(this.atIndentedComment(a.start,e.indent)){let n=e.items[e.items.length-2]?.value?.end;if(Array.isArray(n)){Array.prototype.push.apply(n,a.start),n.push(this.sourceToken),e.items.pop();return}}a.start.push(this.sourceToken)}return}if(this.indent>=e.indent){let r=!this.onKeyLine&&this.indent===e.indent,n=r&&(a.sep||a.explicitKey)&&this.type!=="seq-item-ind",o=[];if(n&&a.sep&&!a.value){let i=[];for(let s=0;s<a.sep.length;++s){let u=a.sep[s];switch(u.type){case"newline":i.push(s);break;case"space":break;case"comment":u.indent>e.indent&&(i.length=0);break;default:i.length=0}}i.length>=2&&(o=a.sep.splice(i[1]))}switch(this.type){case"anchor":case"tag":n||a.value?(o.push(this.sourceToken),e.items.push({start:o}),this.onKeyLine=!0):a.sep?a.sep.push(this.sourceToken):a.start.push(this.sourceToken);return;case"explicit-key-ind":!a.sep&&!a.explicitKey?(a.start.push(this.sourceToken),a.explicitKey=!0):n||a.value?(o.push(this.sourceToken),e.items.push({start:o,explicitKey:!0})):this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken],explicitKey:!0}]}),this.onKeyLine=!0;return;case"map-value-ind":if(a.explicitKey)if(a.sep)if(a.value)e.items.push({start:[],key:null,sep:[this.sourceToken]});else if(mt(a.sep,"map-value-ind"))this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:o,key:null,sep:[this.sourceToken]}]});else if(ky(a.key)&&!mt(a.sep,"newline")){let i=ga(a.start),s=a.key,u=a.sep;u.push(this.sourceToken),delete a.key,delete a.sep,this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:i,key:s,sep:u}]})}else o.length>0?a.sep=a.sep.concat(o,this.sourceToken):a.sep.push(this.sourceToken);else if(mt(a.start,"newline"))Object.assign(a,{key:null,sep:[this.sourceToken]});else{let i=ga(a.start);this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:i,key:null,sep:[this.sourceToken]}]})}else a.sep?a.value||n?e.items.push({start:o,key:null,sep:[this.sourceToken]}):mt(a.sep,"map-value-ind")?this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[],key:null,sep:[this.sourceToken]}]}):a.sep.push(this.sourceToken):Object.assign(a,{key:null,sep:[this.sourceToken]});this.onKeyLine=!0;return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{let i=this.flowScalar(this.type);n||a.value?(e.items.push({start:o,key:i,sep:[]}),this.onKeyLine=!0):a.sep?this.stack.push(i):(Object.assign(a,{key:i,sep:[]}),this.onKeyLine=!0);return}default:{let i=this.startBlockValue(e);if(i){if(i.type==="block-seq"){if(!a.explicitKey&&a.sep&&!mt(a.sep,"newline")){yield*this.pop({type:"error",offset:this.offset,message:"Unexpected block-seq-ind on same line with key",source:this.source});return}}else r&&e.items.push({start:o});this.stack.push(i);return}}}}yield*this.pop(),yield*this.step()}*blockSequence(e){let a=e.items[e.items.length-1];switch(this.type){case"newline":if(a.value){let r="end"in a.value?a.value.end:void 0;(Array.isArray(r)?r[r.length-1]:void 0)?.type==="comment"?r?.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else a.start.push(this.sourceToken);return;case"space":case"comment":if(a.value)e.items.push({start:[this.sourceToken]});else{if(this.atIndentedComment(a.start,e.indent)){let n=e.items[e.items.length-2]?.value?.end;if(Array.isArray(n)){Array.prototype.push.apply(n,a.start),n.push(this.sourceToken),e.items.pop();return}}a.start.push(this.sourceToken)}return;case"anchor":case"tag":if(a.value||this.indent<=e.indent)break;a.start.push(this.sourceToken);return;case"seq-item-ind":if(this.indent!==e.indent)break;a.value||mt(a.start,"seq-item-ind")?e.items.push({start:[this.sourceToken]}):a.start.push(this.sourceToken);return}if(this.indent>e.indent){let r=this.startBlockValue(e);if(r){this.stack.push(r);return}}yield*this.pop(),yield*this.step()}*flowCollection(e){let a=e.items[e.items.length-1];if(this.type==="flow-error-end"){let r;do yield*this.pop(),r=this.peek(1);while(r?.type==="flow-collection")}else if(e.end.length===0){switch(this.type){case"comma":case"explicit-key-ind":!a||a.sep?e.items.push({start:[this.sourceToken]}):a.start.push(this.sourceToken);return;case"map-value-ind":!a||a.value?e.items.push({start:[],key:null,sep:[this.sourceToken]}):a.sep?a.sep.push(this.sourceToken):Object.assign(a,{key:null,sep:[this.sourceToken]});return;case"space":case"comment":case"newline":case"anchor":case"tag":!a||a.value?e.items.push({start:[this.sourceToken]}):a.sep?a.sep.push(this.sourceToken):a.start.push(this.sourceToken);return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{let n=this.flowScalar(this.type);!a||a.value?e.items.push({start:[],key:n,sep:[]}):a.sep?this.stack.push(n):Object.assign(a,{key:n,sep:[]});return}case"flow-map-end":case"flow-seq-end":e.end.push(this.sourceToken);return}let r=this.startBlockValue(e);r?this.stack.push(r):(yield*this.pop(),yield*this.step())}else{let r=this.peek(2);if(r.type==="block-map"&&(this.type==="map-value-ind"&&r.indent===e.indent||this.type==="newline"&&!r.items[r.items.length-1].sep))yield*this.pop(),yield*this.step();else if(this.type==="map-value-ind"&&r.type!=="flow-collection"){let n=yo(r),o=ga(n);Ny(e);let i=e.end.splice(1,e.end.length);i.push(this.sourceToken);let s={type:"block-map",offset:e.offset,indent:e.indent,items:[{start:o,key:e,sep:i}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=s}else yield*this.lineEnd(e)}}flowScalar(e){if(this.onNewLine){let a=this.source.indexOf(`
`)+1;for(;a!==0;)this.onNewLine(this.offset+a),a=this.source.indexOf(`
`,a)+1}return{type:e,offset:this.offset,indent:this.indent,source:this.source}}startBlockValue(e){switch(this.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return this.flowScalar(this.type);case"block-scalar-header":return{type:"block-scalar",offset:this.offset,indent:this.indent,props:[this.sourceToken],source:""};case"flow-map-start":case"flow-seq-start":return{type:"flow-collection",offset:this.offset,indent:this.indent,start:this.sourceToken,items:[],end:[]};case"seq-item-ind":return{type:"block-seq",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken]}]};case"explicit-key-ind":{this.onKeyLine=!0;let a=yo(e),r=ga(a);return r.push(this.sourceToken),{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:r,explicitKey:!0}]}}case"map-value-ind":{this.onKeyLine=!0;let a=yo(e),r=ga(a);return{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:r,key:null,sep:[this.sourceToken]}]}}}return null}atIndentedComment(e,a){return this.type!=="comment"||this.indent<=a?!1:e.every(r=>r.type==="newline"||r.type==="space")}*documentEnd(e){this.type!=="doc-mode"&&(e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop()))}*lineEnd(e){switch(this.type){case"comma":case"doc-start":case"doc-end":case"flow-seq-end":case"flow-map-end":case"map-value-ind":yield*this.pop(),yield*this.step();break;case"newline":this.onKeyLine=!1;default:e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop())}}};Vy.Parser=Bs});var Hy=f(mr=>{"use strict";var Fy=Ps(),QR=pr(),Mr=dr(),WR=Ai(),KR=T(),YR=qs(),jy=Ns();function zy(t){let e=t.prettyErrors!==!1;return{lineCounter:t.lineCounter||e&&new YR.LineCounter||null,prettyErrors:e}}function JR(t,e={}){let{lineCounter:a,prettyErrors:r}=zy(e),n=new jy.Parser(a?.addNewLine),o=new Fy.Composer(e),i=Array.from(o.compose(n.parse(t)));if(r&&a)for(let s of i)s.errors.forEach(Mr.prettifyError(t,a)),s.warnings.forEach(Mr.prettifyError(t,a));return i.length>0?i:Object.assign([],{empty:!0},o.streamInfo())}function $y(t,e={}){let{lineCounter:a,prettyErrors:r}=zy(e),n=new jy.Parser(a?.addNewLine),o=new Fy.Composer(e),i=null;for(let s of o.compose(n.parse(t),!0,t.length))if(!i)i=s;else if(i.options.logLevel!=="silent"){i.errors.push(new Mr.YAMLParseError(s.range.slice(0,2),"MULTIPLE_DOCS","Source contains multiple documents; please use YAML.parseAllDocuments()"));break}return r&&a&&(i.errors.forEach(Mr.prettifyError(t,a)),i.warnings.forEach(Mr.prettifyError(t,a))),i}function ZR(t,e,a){let r;typeof e=="function"?r=e:a===void 0&&e&&typeof e=="object"&&(a=e);let n=$y(t,a);if(!n)return null;if(n.warnings.forEach(o=>WR.warn(n.options.logLevel,o)),n.errors.length>0){if(n.options.logLevel!=="silent")throw n.errors[0];n.errors=[]}return n.toJS(Object.assign({reviver:r},a))}function XR(t,e,a){let r=null;if(typeof e=="function"||Array.isArray(e)?r=e:a===void 0&&e&&(a=e),typeof a=="string"&&(a=a.length),typeof a=="number"){let n=Math.round(a);a=n<1?void 0:n>8?{indent:8}:{indent:n}}if(t===void 0){let{keepUndefined:n}=a??e??{};if(!n)return}return KR.isDocument(t)&&!r?t.toString(a):new QR.Document(t,r,a).toString(a)}mr.parse=ZR;mr.parseAllDocuments=JR;mr.parseDocument=$y;mr.stringify=XR});var Qy=f(L=>{"use strict";var eA=Ps(),tA=pr(),aA=ns(),ks=dr(),rA=Qa(),ft=T(),nA=bt(),oA=z(),iA=It(),sA=Mt(),uA=po(),lA=Os(),pA=qs(),cA=Ns(),So=Hy(),Gy=za();L.Composer=eA.Composer;L.Document=tA.Document;L.Schema=aA.Schema;L.YAMLError=ks.YAMLError;L.YAMLParseError=ks.YAMLParseError;L.YAMLWarning=ks.YAMLWarning;L.Alias=rA.Alias;L.isAlias=ft.isAlias;L.isCollection=ft.isCollection;L.isDocument=ft.isDocument;L.isMap=ft.isMap;L.isNode=ft.isNode;L.isPair=ft.isPair;L.isScalar=ft.isScalar;L.isSeq=ft.isSeq;L.Pair=nA.Pair;L.Scalar=oA.Scalar;L.YAMLMap=iA.YAMLMap;L.YAMLSeq=sA.YAMLSeq;L.CST=uA;L.Lexer=lA.Lexer;L.LineCounter=pA.LineCounter;L.Parser=cA.Parser;L.parse=So.parse;L.parseAllDocuments=So.parseAllDocuments;L.parseDocument=So.parseDocument;L.stringify=So.stringify;L.visit=Gy.visit;L.visitAsync=Gy.visitAsync});var RA={};kt(RA,{default:()=>fA});module.exports=Sd(RA);var _=require("@raycast/api"),Ee=j(st()),be=require("react");var Zl=require("@octokit/rest"),Xl=require("@raycast/api"),ep=j(st());var en=JSON;var pl=t=>t.toUpperCase(),cl=t=>{let e={};return t.forEach((a,r)=>{e[r]=a}),e};var yl=(t,e,a)=>t.document?t:{document:t,variables:e,requestHeaders:a,signal:void 0},dl=(t,e,a)=>t.query?t:{query:t,variables:e,requestHeaders:a,signal:void 0},Sl=(t,e)=>t.documents?t:{documents:t,requestHeaders:e,signal:void 0};var tn=require("graphql"),bl=t=>{let e,a=t.definitions.filter(r=>r.kind==="OperationDefinition");return a.length===1&&(e=a[0]?.name?.value),e},vt=t=>{if(typeof t=="string"){let a;try{let r=(0,tn.parse)(t);a=bl(r)}catch{}return{query:t,operationName:a}}let e=bl(t);return{query:(0,tn.print)(t),operationName:e}};var _t=class t extends Error{constructor(e,a){let r=`${t.extractMessage(e)}: ${JSON.stringify({response:e,request:a})}`;super(r),Object.setPrototypeOf(this,t.prototype),this.response=e,this.request=a,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,t)}static extractMessage(e){return e.errors?.[0]?.message??`GraphQL Error (Code: ${e.status})`}};var lt=j(va(),1);var Zb="connection_init",Xb="connection_ack",Il="ping",Ml="pong",eg="subscribe",tg="next",ag="error",ml="complete",ut=class t{get type(){return this._type}get id(){return this._id}get payload(){return this._payload}constructor(e,a,r){this._type=e,this._payload=a,this._id=r}get text(){let e={type:this.type};return this.id!=null&&this.id!=null&&(e.id=this.id),this.payload!=null&&this.payload!=null&&(e.payload=this.payload),JSON.stringify(e)}static parse(e,a){let{type:r,payload:n,id:o}=JSON.parse(e);return new t(r,a(n),o)}},an=class{constructor(e,{onInit:a,onAcknowledged:r,onPing:n,onPong:o}){this.socketState={acknowledged:!1,lastRequestId:0,subscriptions:{}},this.socket=e,e.addEventListener("open",async i=>{this.socketState.acknowledged=!1,this.socketState.subscriptions={},e.send(ng(a?await a():null).text)}),e.addEventListener("close",i=>{this.socketState.acknowledged=!1,this.socketState.subscriptions={}}),e.addEventListener("error",i=>{console.error(i)}),e.addEventListener("message",i=>{try{let s=rg(i.data);switch(s.type){case Xb:{this.socketState.acknowledged?console.warn("Duplicate CONNECTION_ACK message ignored"):(this.socketState.acknowledged=!0,r&&r(s.payload));return}case Il:{n?n(s.payload).then(p=>e.send(gl(p).text)):e.send(gl(null).text);return}case Ml:{o&&o(s.payload);return}}if(!this.socketState.acknowledged||s.id===void 0||s.id===null||!this.socketState.subscriptions[s.id])return;let{query:u,variables:l,subscriber:c}=this.socketState.subscriptions[s.id];switch(s.type){case tg:{!s.payload.errors&&s.payload.data&&c.next&&c.next(s.payload.data),s.payload.errors&&c.error&&c.error(new _t({...s.payload,status:200},{query:u,variables:l}));return}case ag:{c.error&&c.error(new _t({errors:s.payload,status:200},{query:u,variables:l}));return}case ml:{c.complete&&c.complete(),delete this.socketState.subscriptions[s.id];return}}}catch(s){console.error(s),e.close(1006)}e.close(4400,"Unknown graphql-ws message.")})}makeSubscribe(e,a,r,n){let o=(this.socketState.lastRequestId++).toString();return this.socketState.subscriptions[o]={query:e,variables:n,subscriber:r},this.socket.send(ig(o,{query:e,operationName:a,variables:n}).text),()=>{this.socket.send(sg(o).text),delete this.socketState.subscriptions[o]}}rawRequest(e,a){return new Promise((r,n)=>{let o;this.rawSubscribe(e,{next:(i,s)=>o={data:i,extensions:s},error:n,complete:()=>r(o)},a)})}request(e,a){return new Promise((r,n)=>{let o;this.subscribe(e,{next:i=>o=i,error:n,complete:()=>r(o)},a)})}subscribe(e,a,r){let{query:n,operationName:o}=vt(e);return this.makeSubscribe(n,o,a,r)}rawSubscribe(e,a,r){return this.makeSubscribe(e,void 0,a,r)}ping(e){this.socket.send(og(e).text)}close(){this.socket.close(1e3)}};an.PROTOCOL="graphql-transport-ws";function rg(t,e=a=>a){return ut.parse(t,e)}function ng(t){return new ut(Zb,t)}function og(t){return new ut(Il,t,void 0)}function gl(t){return new ut(Ml,t,void 0)}function ig(t,e){return new ut(eg,e,t)}function sg(t){return new ut(ml,void 0,t)}var ra=t=>{let e={};return t&&(typeof Headers<"u"&&t instanceof Headers||lt&&lt.Headers&&t instanceof lt.Headers?e=cl(t):Array.isArray(t)?t.forEach(([a,r])=>{a&&r!==void 0&&(e[a]=r)}):e=t),e},fl=t=>t.replace(/([\s,]|#[^\n\r]+)+/g," ").trim(),ug=t=>{if(!Array.isArray(t.query)){let r=t,n=[`query=${encodeURIComponent(fl(r.query))}`];return t.variables&&n.push(`variables=${encodeURIComponent(r.jsonSerializer.stringify(r.variables))}`),r.operationName&&n.push(`operationName=${encodeURIComponent(r.operationName)}`),n.join("&")}if(typeof t.variables<"u"&&!Array.isArray(t.variables))throw new Error("Cannot create query with given variable type, array expected");let e=t,a=t.query.reduce((r,n,o)=>(r.push({query:fl(n),variables:e.variables?e.jsonSerializer.stringify(e.variables[o]):void 0}),r),[]);return`query=${encodeURIComponent(e.jsonSerializer.stringify(a))}`},lg=t=>async e=>{let{url:a,query:r,variables:n,operationName:o,fetch:i,fetchOptions:s,middleware:u}=e,l={...e.headers},c="",p;t==="POST"?(p=pg(r,n,o,s.jsonSerializer),typeof p=="string"&&(l["Content-Type"]="application/json")):c=ug({query:r,variables:n,operationName:o,jsonSerializer:s.jsonSerializer??en});let y={method:t,headers:l,body:p,...s},g=a,S=y;if(u){let d=await Promise.resolve(u({...y,url:a,operationName:o,variables:n})),{url:b,...I}=d;g=b,S=I}return c&&(g=`${g}?${c}`),await i(g,S)},rn=class{constructor(e,a={}){this.url=e,this.requestConfig=a,this.rawRequest=async(...r)=>{let[n,o,i]=r,s=dl(n,o,i),{headers:u,fetch:l=lt.default,method:c="POST",requestMiddleware:p,responseMiddleware:y,...g}=this.requestConfig,{url:S}=this;s.signal!==void 0&&(g.signal=s.signal);let{operationName:d}=vt(s.query);return Ko({url:S,query:s.query,variables:s.variables,headers:{...ra(Yo(u)),...ra(s.requestHeaders)},operationName:d,fetch:l,method:c,fetchOptions:g,middleware:p}).then(b=>(y&&y(b),b)).catch(b=>{throw y&&y(b),b})}}async request(e,...a){let[r,n]=a,o=yl(e,r,n),{headers:i,fetch:s=lt.default,method:u="POST",requestMiddleware:l,responseMiddleware:c,...p}=this.requestConfig,{url:y}=this;o.signal!==void 0&&(p.signal=o.signal);let{query:g,operationName:S}=vt(o.document);return Ko({url:y,query:g,variables:o.variables,headers:{...ra(Yo(i)),...ra(o.requestHeaders)},operationName:S,fetch:s,method:u,fetchOptions:p,middleware:l}).then(d=>(c&&c(d),d.data)).catch(d=>{throw c&&c(d),d})}batchRequests(e,a){let r=Sl(e,a),{headers:n,...o}=this.requestConfig;r.signal!==void 0&&(o.signal=r.signal);let i=r.documents.map(({document:u})=>vt(u).query),s=r.documents.map(({variables:u})=>u);return Ko({url:this.url,query:i,variables:s,headers:{...ra(Yo(n)),...ra(r.requestHeaders)},operationName:void 0,fetch:this.requestConfig.fetch??lt.default,method:this.requestConfig.method||"POST",fetchOptions:o,middleware:this.requestConfig.requestMiddleware}).then(u=>(this.requestConfig.responseMiddleware&&this.requestConfig.responseMiddleware(u),u.data)).catch(u=>{throw this.requestConfig.responseMiddleware&&this.requestConfig.responseMiddleware(u),u})}setHeaders(e){return this.requestConfig.headers=e,this}setHeader(e,a){let{headers:r}=this.requestConfig;return r?r[e]=a:this.requestConfig.headers={[e]:a},this}setEndpoint(e){return this.url=e,this}},Ko=async t=>{let{query:e,variables:a,fetchOptions:r}=t,n=lg(pl(t.method??"post")),o=Array.isArray(t.query),i=await n(t),s=await cg(i,r.jsonSerializer??en),u=Array.isArray(s)?!s.some(({data:c})=>!c):!!s.data,l=Array.isArray(s)||!s.errors||Array.isArray(s.errors)&&!s.errors.length||r.errorPolicy==="all"||r.errorPolicy==="ignore";if(i.ok&&l&&u){let{errors:c,...p}=(Array.isArray(s),s),y=r.errorPolicy==="ignore"?p:s;return{...o?{data:y}:y,headers:i.headers,status:i.status}}else{let c=typeof s=="string"?{error:s}:s;throw new _t({...c,status:i.status,headers:i.headers},{query:e,variables:a})}};var pg=(t,e,a,r)=>{let n=r??en;if(!Array.isArray(t))return n.stringify({query:t,variables:e,operationName:a});if(typeof e<"u"&&!Array.isArray(e))throw new Error("Cannot create request body with given variable type, array expected");let o=t.reduce((i,s,u)=>(i.push({query:s,variables:e?e[u]:void 0}),i),[]);return n.stringify(o)},cg=async(t,e)=>{let a;return t.headers.forEach((r,n)=>{n.toLowerCase()==="content-type"&&(a=r)}),a&&(a.toLowerCase().startsWith("application/json")||a.toLowerCase().startsWith("application/graphql+json")||a.toLowerCase().startsWith("application/graphql-response+json"))?e.parse(await t.text()):t.text()},Yo=t=>typeof t=="function"?t():t;var zl=j(require("node:http"),1),$l=j(require("node:https"),1),wt=j(require("node:zlib"),1),Se=j(require("node:stream"),1),Va=require("node:buffer");var Oa={};kt(Oa,{default:()=>nn.default});re(Oa,require("data-uri-to-buffer"));var nn=j(require("data-uri-to-buffer"));var Ae=j(require("node:stream"),1),We=require("node:util"),ye=require("node:buffer");var La={};kt(La,{default:()=>on.default});re(La,require("fetch-blob"));var on=j(require("fetch-blob"));sn();var Qe=class extends Error{constructor(e,a){super(e),Error.captureStackTrace(this,this.constructor),this.type=a}get name(){return this.constructor.name}get[Symbol.toStringTag](){return this.constructor.name}};var oe=class extends Qe{constructor(e,a,r){super(e,a),r&&(this.code=this.errno=r.code,this.erroredSysCall=r.syscall)}};var un=Symbol.toStringTag,Jo=t=>typeof t=="object"&&typeof t.append=="function"&&typeof t.delete=="function"&&typeof t.get=="function"&&typeof t.getAll=="function"&&typeof t.has=="function"&&typeof t.set=="function"&&typeof t.sort=="function"&&t[un]==="URLSearchParams",qa=t=>t&&typeof t=="object"&&typeof t.arrayBuffer=="function"&&typeof t.type=="string"&&typeof t.stream=="function"&&typeof t.constructor=="function"&&/^(Blob|File)$/.test(t[un]),Al=t=>typeof t=="object"&&(t[un]==="AbortSignal"||t[un]==="EventTarget"),hl=(t,e)=>{let a=new URL(e).hostname,r=new URL(t).hostname;return a===r||a.endsWith(`.${r}`)},Pl=(t,e)=>{let a=new URL(e).protocol,r=new URL(t).protocol;return a===r};var mg=(0,We.promisify)(Ae.default.pipeline),ie=Symbol("Body internals"),Be=class{constructor(e,{size:a=0}={}){let r=null;e===null?e=null:Jo(e)?e=ye.Buffer.from(e.toString()):qa(e)||ye.Buffer.isBuffer(e)||(We.types.isAnyArrayBuffer(e)?e=ye.Buffer.from(e):ArrayBuffer.isView(e)?e=ye.Buffer.from(e.buffer,e.byteOffset,e.byteLength):e instanceof Ae.default||(e instanceof ne.FormData?(e=(0,ne.formDataToBlob)(e),r=e.type.split("=")[1]):e=ye.Buffer.from(String(e))));let n=e;ye.Buffer.isBuffer(e)?n=Ae.default.Readable.from(e):qa(e)&&(n=Ae.default.Readable.from(e.stream())),this[ie]={body:e,stream:n,boundary:r,disturbed:!1,error:null},this.size=a,e instanceof Ae.default&&e.on("error",o=>{let i=o instanceof Qe?o:new oe(`Invalid response body while trying to fetch ${this.url}: ${o.message}`,"system",o);this[ie].error=i})}get body(){return this[ie].stream}get bodyUsed(){return this[ie].disturbed}async arrayBuffer(){let{buffer:e,byteOffset:a,byteLength:r}=await ei(this);return e.slice(a,a+r)}async formData(){let e=this.headers.get("content-type");if(e.startsWith("application/x-www-form-urlencoded")){let r=new ne.FormData,n=new URLSearchParams(await this.text());for(let[o,i]of n)r.append(o,i);return r}let{toFormData:a}=await Promise.resolve().then(()=>(vl(),Dl));return a(this.body,e)}async blob(){let e=this.headers&&this.headers.get("content-type")||this[ie].body&&this[ie].body.type||"",a=await this.arrayBuffer();return new on.default([a],{type:e})}async json(){let e=await this.text();return JSON.parse(e)}async text(){let e=await ei(this);return new TextDecoder().decode(e)}buffer(){return ei(this)}};Be.prototype.buffer=(0,We.deprecate)(Be.prototype.buffer,"Please use 'response.arrayBuffer()' instead of 'response.buffer()'","node-fetch#buffer");Object.defineProperties(Be.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0},data:{get:(0,We.deprecate)(()=>{},"data doesn't exist, use json(), text(), arrayBuffer(), or body instead","https://github.com/node-fetch/node-fetch/issues/1000 (response)")}});async function ei(t){if(t[ie].disturbed)throw new TypeError(`body used already for: ${t.url}`);if(t[ie].disturbed=!0,t[ie].error)throw t[ie].error;let{body:e}=t;if(e===null)return ye.Buffer.alloc(0);if(!(e instanceof Ae.default))return ye.Buffer.alloc(0);let a=[],r=0;try{for await(let n of e){if(t.size>0&&r+n.length>t.size){let o=new oe(`content size at ${t.url} over limit: ${t.size}`,"max-size");throw e.destroy(o),o}r+=n.length,a.push(n)}}catch(n){throw n instanceof Qe?n:new oe(`Invalid response body while trying to fetch ${t.url}: ${n.message}`,"system",n)}if(e.readableEnded===!0||e._readableState.ended===!0)try{return a.every(n=>typeof n=="string")?ye.Buffer.from(a.join("")):ye.Buffer.concat(a,r)}catch(n){throw new oe(`Could not create Buffer from response body for ${t.url}: ${n.message}`,"system",n)}else throw new oe(`Premature close of server response while trying to fetch ${t.url}`)}var na=(t,e)=>{let a,r,{body:n}=t[ie];if(t.bodyUsed)throw new Error("cannot clone body after it is used");return n instanceof Ae.default&&typeof n.getBoundary!="function"&&(a=new Ae.PassThrough({highWaterMark:e}),r=new Ae.PassThrough({highWaterMark:e}),n.pipe(a),n.pipe(r),t[ie].stream=a,n=r),n},fg=(0,We.deprecate)(t=>t.getBoundary(),"form-data doesn't follow the spec and requires special treatment. Use alternative package","https://github.com/node-fetch/node-fetch/issues/1167"),cn=(t,e)=>t===null?null:typeof t=="string"?"text/plain;charset=UTF-8":Jo(t)?"application/x-www-form-urlencoded;charset=UTF-8":qa(t)?t.type||null:ye.Buffer.isBuffer(t)||We.types.isAnyArrayBuffer(t)||ArrayBuffer.isView(t)?null:t instanceof ne.FormData?`multipart/form-data; boundary=${e[ie].boundary}`:t&&typeof t.getBoundary=="function"?`multipart/form-data;boundary=${fg(t)}`:t instanceof Ae.default?null:"text/plain;charset=UTF-8",_l=t=>{let{body:e}=t[ie];return e===null?0:qa(e)?e.size:ye.Buffer.isBuffer(e)?e.length:e&&typeof e.getLengthSync=="function"&&e.hasKnownLength&&e.hasKnownLength()?e.getLengthSync():null},xl=async(t,{body:e})=>{e===null?t.end():await mg(e,t)};var ti=require("node:util"),Na=j(require("node:http"),1),yn=typeof Na.default.validateHeaderName=="function"?Na.default.validateHeaderName:t=>{if(!/^[\^`\-\w!#$%&'*+.|~]+$/.test(t)){let e=new TypeError(`Header name must be a valid HTTP token [${t}]`);throw Object.defineProperty(e,"code",{value:"ERR_INVALID_HTTP_TOKEN"}),e}},ai=typeof Na.default.validateHeaderValue=="function"?Na.default.validateHeaderValue:(t,e)=>{if(/[^\t\u0020-\u007E\u0080-\u00FF]/.test(e)){let a=new TypeError(`Invalid character in header content ["${t}"]`);throw Object.defineProperty(a,"code",{value:"ERR_INVALID_CHAR"}),a}},de=class t extends URLSearchParams{constructor(e){let a=[];if(e instanceof t){let r=e.raw();for(let[n,o]of Object.entries(r))a.push(...o.map(i=>[n,i]))}else if(e!=null)if(typeof e=="object"&&!ti.types.isBoxedPrimitive(e)){let r=e[Symbol.iterator];if(r==null)a.push(...Object.entries(e));else{if(typeof r!="function")throw new TypeError("Header pairs must be iterable");a=[...e].map(n=>{if(typeof n!="object"||ti.types.isBoxedPrimitive(n))throw new TypeError("Each header pair must be an iterable object");return[...n]}).map(n=>{if(n.length!==2)throw new TypeError("Each header pair must be a name/value tuple");return[...n]})}}else throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");return a=a.length>0?a.map(([r,n])=>(yn(r),ai(r,String(n)),[String(r).toLowerCase(),String(n)])):void 0,super(a),new Proxy(this,{get(r,n,o){switch(n){case"append":case"set":return(i,s)=>(yn(i),ai(i,String(s)),URLSearchParams.prototype[n].call(r,String(i).toLowerCase(),String(s)));case"delete":case"has":case"getAll":return i=>(yn(i),URLSearchParams.prototype[n].call(r,String(i).toLowerCase()));case"keys":return()=>(r.sort(),new Set(URLSearchParams.prototype.keys.call(r)).keys());default:return Reflect.get(r,n,o)}}})}get[Symbol.toStringTag](){return this.constructor.name}toString(){return Object.prototype.toString.call(this)}get(e){let a=this.getAll(e);if(a.length===0)return null;let r=a.join(", ");return/^content-encoding$/i.test(e)&&(r=r.toLowerCase()),r}forEach(e,a=void 0){for(let r of this.keys())Reflect.apply(e,a,[this.get(r),r,this])}*values(){for(let e of this.keys())yield this.get(e)}*entries(){for(let e of this.keys())yield[e,this.get(e)]}[Symbol.iterator](){return this.entries()}raw(){return[...this.keys()].reduce((e,a)=>(e[a]=this.getAll(a),e),{})}[Symbol.for("nodejs.util.inspect.custom")](){return[...this.keys()].reduce((e,a)=>{let r=this.getAll(a);return a==="host"?e[a]=r[0]:e[a]=r.length>1?r:r[0],e},{})}};Object.defineProperties(de.prototype,["get","entries","forEach","values"].reduce((t,e)=>(t[e]={enumerable:!0},t),{}));function Ul(t=[]){return new de(t.reduce((e,a,r,n)=>(r%2===0&&e.push(n.slice(r,r+2)),e),[]).filter(([e,a])=>{try{return yn(e),ai(e,String(a)),!0}catch{return!1}}))}var Rg=new Set([301,302,303,307,308]),dn=t=>Rg.has(t);var ve=Symbol("Response internals"),he=class t extends Be{constructor(e=null,a={}){super(e,a);let r=a.status!=null?a.status:200,n=new de(a.headers);if(e!==null&&!n.has("Content-Type")){let o=cn(e,this);o&&n.append("Content-Type",o)}this[ve]={type:"default",url:a.url,status:r,statusText:a.statusText||"",headers:n,counter:a.counter,highWaterMark:a.highWaterMark}}get type(){return this[ve].type}get url(){return this[ve].url||""}get status(){return this[ve].status}get ok(){return this[ve].status>=200&&this[ve].status<300}get redirected(){return this[ve].counter>0}get statusText(){return this[ve].statusText}get headers(){return this[ve].headers}get highWaterMark(){return this[ve].highWaterMark}clone(){return new t(na(this,this.highWaterMark),{type:this.type,url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected,size:this.size,highWaterMark:this.highWaterMark})}static redirect(e,a=302){if(!dn(a))throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');return new t(null,{headers:{location:new URL(e).toString()},status:a})}static error(){let e=new t(null,{status:0,statusText:""});return e[ve].type="error",e}static json(e=void 0,a={}){let r=JSON.stringify(e);if(r===void 0)throw new TypeError("data is not JSON serializable");let n=new de(a&&a.headers);return n.has("content-type")||n.set("content-type","application/json"),new t(r,{...a,headers:n})}get[Symbol.toStringTag](){return"Response"}};Object.defineProperties(he.prototype,{type:{enumerable:!0},url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}});var Vl=require("node:url"),Fl=require("node:util");var wl=t=>{if(t.search)return t.search;let e=t.href.length-1,a=t.hash||(t.href[e]==="#"?"#":"");return t.href[e-a.length]==="?"?"?":""};var Ol=require("node:net");function Tl(t,e=!1){return t==null||(t=new URL(t),/^(about|blob|data):$/.test(t.protocol))?"no-referrer":(t.username="",t.password="",t.hash="",e&&(t.pathname="",t.search=""),t)}var Ll=new Set(["","no-referrer","no-referrer-when-downgrade","same-origin","origin","strict-origin","origin-when-cross-origin","strict-origin-when-cross-origin","unsafe-url"]),ql="strict-origin-when-cross-origin";function Bl(t){if(!Ll.has(t))throw new TypeError(`Invalid referrerPolicy: ${t}`);return t}function Ag(t){if(/^(http|ws)s:$/.test(t.protocol))return!0;let e=t.host.replace(/(^\[)|(]$)/g,""),a=(0,Ol.isIP)(e);return a===4&&/^127\./.test(e)||a===6&&/^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(e)?!0:t.host==="localhost"||t.host.endsWith(".localhost")?!1:t.protocol==="file:"}function oa(t){return/^about:(blank|srcdoc)$/.test(t)||t.protocol==="data:"||/^(blob|filesystem):$/.test(t.protocol)?!0:Ag(t)}function Nl(t,{referrerURLCallback:e,referrerOriginCallback:a}={}){if(t.referrer==="no-referrer"||t.referrerPolicy==="")return null;let r=t.referrerPolicy;if(t.referrer==="about:client")return"no-referrer";let n=t.referrer,o=Tl(n),i=Tl(n,!0);o.toString().length>4096&&(o=i),e&&(o=e(o)),a&&(i=a(i));let s=new URL(t.url);switch(r){case"no-referrer":return"no-referrer";case"origin":return i;case"unsafe-url":return o;case"strict-origin":return oa(o)&&!oa(s)?"no-referrer":i.toString();case"strict-origin-when-cross-origin":return o.origin===s.origin?o:oa(o)&&!oa(s)?"no-referrer":i;case"same-origin":return o.origin===s.origin?o:"no-referrer";case"origin-when-cross-origin":return o.origin===s.origin?o:i;case"no-referrer-when-downgrade":return oa(o)&&!oa(s)?"no-referrer":o;default:throw new TypeError(`Invalid referrerPolicy: ${r}`)}}function kl(t){let e=(t.get("referrer-policy")||"").split(/[,\s]+/),a="";for(let r of e)r&&Ll.has(r)&&(a=r);return a}var Q=Symbol("Request internals"),ka=t=>typeof t=="object"&&typeof t[Q]=="object",hg=(0,Fl.deprecate)(()=>{},".data is not a valid RequestInit property, use .body instead","https://github.com/node-fetch/node-fetch/issues/1000 (request)"),Ut=class t extends Be{constructor(e,a={}){let r;if(ka(e)?r=new URL(e.url):(r=new URL(e),e={}),r.username!==""||r.password!=="")throw new TypeError(`${r} is an url with embedded credentials.`);let n=a.method||e.method||"GET";if(/^(delete|get|head|options|post|put)$/i.test(n)&&(n=n.toUpperCase()),!ka(a)&&"data"in a&&hg(),(a.body!=null||ka(e)&&e.body!==null)&&(n==="GET"||n==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");let o=a.body?a.body:ka(e)&&e.body!==null?na(e):null;super(o,{size:a.size||e.size||0});let i=new de(a.headers||e.headers||{});if(o!==null&&!i.has("Content-Type")){let l=cn(o,this);l&&i.set("Content-Type",l)}let s=ka(e)?e.signal:null;if("signal"in a&&(s=a.signal),s!=null&&!Al(s))throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");let u=a.referrer==null?e.referrer:a.referrer;if(u==="")u="no-referrer";else if(u){let l=new URL(u);u=/^about:(\/\/)?client$/.test(l)?"client":l}else u=void 0;this[Q]={method:n,redirect:a.redirect||e.redirect||"follow",headers:i,parsedURL:r,signal:s,referrer:u},this.follow=a.follow===void 0?e.follow===void 0?20:e.follow:a.follow,this.compress=a.compress===void 0?e.compress===void 0?!0:e.compress:a.compress,this.counter=a.counter||e.counter||0,this.agent=a.agent||e.agent,this.highWaterMark=a.highWaterMark||e.highWaterMark||16384,this.insecureHTTPParser=a.insecureHTTPParser||e.insecureHTTPParser||!1,this.referrerPolicy=a.referrerPolicy||e.referrerPolicy||""}get method(){return this[Q].method}get url(){return(0,Vl.format)(this[Q].parsedURL)}get headers(){return this[Q].headers}get redirect(){return this[Q].redirect}get signal(){return this[Q].signal}get referrer(){if(this[Q].referrer==="no-referrer")return"";if(this[Q].referrer==="client")return"about:client";if(this[Q].referrer)return this[Q].referrer.toString()}get referrerPolicy(){return this[Q].referrerPolicy}set referrerPolicy(e){this[Q].referrerPolicy=Bl(e)}clone(){return new t(this)}get[Symbol.toStringTag](){return"Request"}};Object.defineProperties(Ut.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0},referrer:{enumerable:!0},referrerPolicy:{enumerable:!0}});var jl=t=>{let{parsedURL:e}=t[Q],a=new de(t[Q].headers);a.has("Accept")||a.set("Accept","*/*");let r=null;if(t.body===null&&/^(post|put)$/i.test(t.method)&&(r="0"),t.body!==null){let s=_l(t);typeof s=="number"&&!Number.isNaN(s)&&(r=String(s))}r&&a.set("Content-Length",r),t.referrerPolicy===""&&(t.referrerPolicy=ql),t.referrer&&t.referrer!=="no-referrer"?t[Q].referrer=Nl(t):t[Q].referrer="no-referrer",t[Q].referrer instanceof URL&&a.set("Referer",t.referrer),a.has("User-Agent")||a.set("User-Agent","node-fetch"),t.compress&&!a.has("Accept-Encoding")&&a.set("Accept-Encoding","gzip, deflate, br");let{agent:n}=t;typeof n=="function"&&(n=n(e));let o=wl(e),i={path:e.pathname+o,method:t.method,headers:a[Symbol.for("nodejs.util.inspect.custom")](),insecureHTTPParser:t.insecureHTTPParser,agent:n};return{parsedURL:e,options:i}};var Sn=class extends Qe{constructor(e,a="aborted"){super(e,a)}};sn();Zo();var Pg=new Set(["data:","http:","https:"]);async function bn(t,e){return new Promise((a,r)=>{let n=new Ut(t,e),{parsedURL:o,options:i}=jl(n);if(!Pg.has(o.protocol))throw new TypeError(`node-fetch cannot load ${t}. URL scheme "${o.protocol.replace(/:$/,"")}" is not supported.`);if(o.protocol==="data:"){let S=(0,nn.default)(n.url),d=new he(S,{headers:{"Content-Type":S.typeFull}});a(d);return}let s=(o.protocol==="https:"?$l.default:zl.default).request,{signal:u}=n,l=null,c=()=>{let S=new Sn("The operation was aborted.");r(S),n.body&&n.body instanceof Se.default.Readable&&n.body.destroy(S),!(!l||!l.body)&&l.body.emit("error",S)};if(u&&u.aborted){c();return}let p=()=>{c(),g()},y=s(o.toString(),i);u&&u.addEventListener("abort",p);let g=()=>{y.abort(),u&&u.removeEventListener("abort",p)};y.on("error",S=>{r(new oe(`request to ${n.url} failed, reason: ${S.message}`,"system",S)),g()}),Eg(y,S=>{l&&l.body&&l.body.destroy(S)}),process.version<"v14"&&y.on("socket",S=>{let d;S.prependListener("end",()=>{d=S._eventsCount}),S.prependListener("close",b=>{if(l&&d<S._eventsCount&&!b){let I=new Error("Premature close");I.code="ERR_STREAM_PREMATURE_CLOSE",l.body.emit("error",I)}})}),y.on("response",S=>{y.setTimeout(0);let d=Ul(S.rawHeaders);if(dn(S.statusCode)){let m=d.get("Location"),h=null;try{h=m===null?null:new URL(m,n.url)}catch{if(n.redirect!=="manual"){r(new oe(`uri requested responds with an invalid redirect URL: ${m}`,"invalid-redirect")),g();return}}switch(n.redirect){case"error":r(new oe(`uri requested responds with a redirect, redirect mode is set to error: ${n.url}`,"no-redirect")),g();return;case"manual":break;case"follow":{if(h===null)break;if(n.counter>=n.follow){r(new oe(`maximum redirect reached at: ${n.url}`,"max-redirect")),g();return}let A={headers:new de(n.headers),follow:n.follow,counter:n.counter+1,agent:n.agent,compress:n.compress,method:n.method,body:na(n),signal:n.signal,size:n.size,referrer:n.referrer,referrerPolicy:n.referrerPolicy};if(!hl(n.url,h)||!Pl(n.url,h))for(let P of["authorization","www-authenticate","cookie","cookie2"])A.headers.delete(P);if(S.statusCode!==303&&n.body&&e.body instanceof Se.default.Readable){r(new oe("Cannot follow redirect with body being a readable stream","unsupported-redirect")),g();return}(S.statusCode===303||(S.statusCode===301||S.statusCode===302)&&n.method==="POST")&&(A.method="GET",A.body=void 0,A.headers.delete("content-length"));let D=kl(d);D&&(A.referrerPolicy=D),a(bn(new Ut(h,A))),g();return}default:return r(new TypeError(`Redirect option '${n.redirect}' is not a valid value of RequestRedirect`))}}u&&S.once("end",()=>{u.removeEventListener("abort",p)});let b=(0,Se.pipeline)(S,new Se.PassThrough,m=>{m&&r(m)});process.version<"v12.10"&&S.on("aborted",p);let I={url:n.url,status:S.statusCode,statusText:S.statusMessage,headers:d,size:n.size,counter:n.counter,highWaterMark:n.highWaterMark},M=d.get("Content-Encoding");if(!n.compress||n.method==="HEAD"||M===null||S.statusCode===204||S.statusCode===304){l=new he(b,I),a(l);return}let R={flush:wt.default.Z_SYNC_FLUSH,finishFlush:wt.default.Z_SYNC_FLUSH};if(M==="gzip"||M==="x-gzip"){b=(0,Se.pipeline)(b,wt.default.createGunzip(R),m=>{m&&r(m)}),l=new he(b,I),a(l);return}if(M==="deflate"||M==="x-deflate"){let m=(0,Se.pipeline)(S,new Se.PassThrough,h=>{h&&r(h)});m.once("data",h=>{(h[0]&15)===8?b=(0,Se.pipeline)(b,wt.default.createInflate(),A=>{A&&r(A)}):b=(0,Se.pipeline)(b,wt.default.createInflateRaw(),A=>{A&&r(A)}),l=new he(b,I),a(l)}),m.once("end",()=>{l||(l=new he(b,I),a(l))});return}if(M==="br"){b=(0,Se.pipeline)(b,wt.default.createBrotliDecompress(),m=>{m&&r(m)}),l=new he(b,I),a(l);return}l=new he(b,I),a(l)}),xl(y,n).catch(r)})}function Eg(t,e){let a=Va.Buffer.from(`0\r
\r
`),r=!1,n=!1,o;t.on("response",i=>{let{headers:s}=i;r=s["transfer-encoding"]==="chunked"&&!s["content-length"]}),t.on("socket",i=>{let s=()=>{if(r&&!n){let l=new Error("Premature close");l.code="ERR_STREAM_PREMATURE_CLOSE",e(l)}},u=l=>{n=Va.Buffer.compare(l.slice(-5),a)===0,!n&&o&&(n=Va.Buffer.compare(o.slice(-3),a.slice(0,3))===0&&Va.Buffer.compare(l.slice(-2),a.slice(3))===0),o=l};i.prependListener("close",s),i.on("data",u),t.on("close",()=>{i.removeListener("close",s),i.removeListener("data",u)})})}var E=j(require("graphql-tag")),Fa=E.default`
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
`,Cg=E.default`
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
  ${Fa}
`,Ne=E.default`
  fragment UserFields on User {
    id
    avatarUrl
    name
    login
    isViewer
  }
`,ja=E.default`
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
  ${Ne}
`,gn=E.default`
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
  ${ja}
  ${Fa}
  ${Ne}
`,Dg=E.default`
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
  ${ja}
  ${Fa}
  ${Ne}
`,Hl=E.default`
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
`,Gl=E.default`
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
`,Ql=E.default`
  fragment RepositoryMentionFields on Repository {
    nameWithOwner
    description
    isPrivate
    isArchived
    owner {
      avatarUrl(size: 64)
    }
  }
`,vg=E.default`
  fragment ProjectViewerFields on ProjectV2View {
    id
    name
    number
  }
`,Wl=E.default`
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
  ${ja}
  ${vg}
`,Kl=E.default`
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
  ${Fa}
  ${ja}
  ${Ne}
`,_g=E.default`
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
  ${Fa}
  ${ja}
  ${Ne}
`,xg=E.default`
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
`,Yl=E.default`
  fragment CommitFields on Commit {
    authoredDate
    oid
    message
  }
`,ri=E.default`
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
`,Ug=E.default`
  fragment ReleaseFields on Release {
    id
    description
    name
    publishedAt
    createdAt
    tagName
    url
  }
`,wg=E.default`
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
`,Tg=E.default`
  mutation createRef($input: CreateRefInput!) {
    createRef(input: $input) {
      clientMutationId
      ref {
        id
        name
      }
    }
  }
`,Og=E.default`
  mutation deleteLinkedBranch($input: DeleteLinkedBranchInput!) {
    deleteLinkedBranch(input: $input) {
      clientMutationId
    }
  }
`,Lg=E.default`
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
  ${Cg}
`,qg=E.default`
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
`,Bg=E.default`
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
  ${Ne}
`,Ng=E.default`
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
`,kg=E.default`
  query issueDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...IssueDetailFields
    }
  }
  ${Dg}
`,Vg=E.default`
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
  ${gn}
`,Fg=E.default`
  query issueByNumber($owner: String!, $name: String!, $issueNumber: Int!) {
    repository(owner: $owner, name: $name) {
      issue(number: $issueNumber) {
        ...IssueFields
      }
    }
  }
  ${gn}
`,jg=E.default`
  mutation closeIssue($nodeId: ID!, $stateReason: IssueClosedStateReason!) {
    closeIssue(input: { issueId: $nodeId, stateReason: $stateReason }) {
      issue {
        id
      }
    }
  }
`,zg=E.default`
  mutation reopenIssue($nodeId: ID!) {
    reopenIssue(input: { issueId: $nodeId }) {
      issue {
        id
      }
    }
  }
`,$g=E.default`
  mutation changeIssueAssignees($issueId: ID!, $assigneeIds: [ID!]) {
    updateIssue(input: { id: $issueId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,Hg=E.default`
  mutation changeIssueMilestone($issueId: ID!, $milestoneId: ID) {
    updateIssue(input: { id: $issueId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,Gg=E.default`
  mutation addIssueToProject($issueId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $issueId }) {
      clientMutationId
    }
  }
`,Qg=E.default`
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
  ${gn}
`,Wg=E.default`
  query searchIssueMentions($query: String!, $numberOfItems: Int!) {
    search(query: $query, type: ISSUE, first: $numberOfItems) {
      nodes {
        ... on Issue {
          ...IssueMentionFields
        }
      }
    }
  }
  ${Hl}
`,Kg=E.default`
  query searchPullRequestMentions($query: String!, $numberOfItems: Int!) {
    search(query: $query, type: ISSUE, first: $numberOfItems) {
      nodes {
        ... on PullRequest {
          ...PullRequestMentionFields
        }
      }
    }
  }
  ${Gl}
`,Yg=E.default`
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
  ${Hl}
  ${Gl}
`,Jg=E.default`
  query searchRepositoryMentions($query: String!, $numberOfItems: Int!) {
    search(query: $query, type: REPOSITORY, first: $numberOfItems) {
      nodes {
        ... on Repository {
          ...RepositoryMentionFields
        }
      }
    }
  }
  ${Ql}
`,Zg=E.default`
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
  ${Ql}
`,Xg=E.default`
  mutation changeProjectStatus($projectId: ID!, $closed: Boolean!) {
    updateProjectV2(input: { projectId: $projectId, closed: $closed }) {
      clientMutationId
    }
  }
`,eI=E.default`
  query projectDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...ProjectFields
    }
  }
  ${Wl}
`,tI=E.default`
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
  ${Kl}
`,aI=E.default`
  query pullRequestDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...PullRequestDetailsFields
    }
  }
  ${_g}
`,rI=E.default`
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
  ${Ne}
`,nI=E.default`
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
`,oI=E.default`
  query pullRequestCommits($nodeId: ID!, $numberOfItems: Int!, $before: String) {
    node(id: $nodeId) {
      ...PullRequestCommitFields
    }
  }
  ${xg}
`,iI=E.default`
  mutation closePullRequest($nodeId: ID!) {
    closePullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,sI=E.default`
  mutation reopenPullRequest($nodeId: ID!) {
    reopenPullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,uI=E.default`
  mutation markPullRequestReadyForReview($nodeId: ID!) {
    markPullRequestReadyForReview(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,lI=E.default`
  mutation addPullRequestReview($nodeId: ID!, $event: PullRequestReviewEvent, $body: String) {
    addPullRequestReview(input: { pullRequestId: $nodeId, event: $event, body: $body }) {
      pullRequestReview {
        id
      }
    }
  }
`,pI=E.default`
  mutation changePullRequestAssignees($pullRequestId: ID!, $assigneeIds: [ID!]) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,cI=E.default`
  mutation changePullRequestMilestone($pullRequestId: ID!, $milestoneId: ID) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,yI=E.default`
  mutation addPullRequestToProject($pullRequestId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $pullRequestId }) {
      clientMutationId
    }
  }
`,dI=E.default`
  mutation requestReview($pullRequestId: ID!, $collaboratorId: ID!) {
    requestReviews(input: { pullRequestId: $pullRequestId, userIds: [$collaboratorId], union: true }) {
      clientMutationId
    }
  }
`,SI=E.default`
  mutation mergePullRequest($nodeId: ID!, $method: PullRequestMergeMethod!) {
    mergePullRequest(input: { pullRequestId: $nodeId, mergeMethod: $method }) {
      pullRequest {
        nodeId: id
      }
    }
  }
`,bI=E.default`
  mutation addPullRequestToMergeQueue($nodeId: ID!) {
    enqueuePullRequest(input: { pullRequestId: $nodeId }) {
      __typename
    }
  }
`,gI=E.default`
  mutation removePullRequestFromMergeQueue($nodeId: ID!) {
    dequeuePullRequest(input: { id: $nodeId }) {
      __typename
    }
  }
`,II=E.default`
  mutation enablePullRequestAutoMerge($nodeId: ID!, $mergeMethod: PullRequestMergeMethod) {
    enablePullRequestAutoMerge(input: { pullRequestId: $nodeId, mergeMethod: $mergeMethod }) {
      pullRequest {
        id
      }
    }
  }
`,MI=E.default`
  mutation disablePullRequestAutoMerge($nodeId: ID!) {
    disablePullRequestAutoMerge(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,mI=E.default`
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
`,fI=E.default`
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
  ${Kl}
`,RI=E.default`
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
  ${ri}
`,AI=E.default`
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
  ${ri}
`,hI=E.default`
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
`,PI=E.default`
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
`,EI=E.default`
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
  ${Yl}
  ${Ne}
`,CI=E.default`
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
  ${Yl}
`,DI=E.default`
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
  ${gn}
`,vI=E.default`
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
  ${Ug}
`,_I=E.default`
  mutation addStar($repositoryId: ID!) {
    addStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,xI=E.default`
  mutation removeStar($repositoryId: ID!) {
    removeStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,UI=E.default`
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
  ${ri}
`,wI=E.default`
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
  ${Ne}
  ${Wl}
`,TI=E.default`
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
  ${Ne}
`,OI=E.default`
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
`,LI=(t,e,a,r)=>t();function Jl(t,e=LI){return{createLinkedBranch(a,r,n){return e(o=>t.request({document:wg,variables:a,requestHeaders:{...r,...o},signal:n}),"createLinkedBranch","mutation",a)},createRef(a,r,n){return e(o=>t.request({document:Tg,variables:a,requestHeaders:{...r,...o},signal:n}),"createRef","mutation",a)},deleteLinkedBranch(a,r,n){return e(o=>t.request({document:Og,variables:a,requestHeaders:{...r,...o},signal:n}),"deleteLinkedBranch","mutation",a)},searchDiscussions(a,r,n){return e(o=>t.request({document:Lg,variables:a,requestHeaders:{...r,...o},signal:n}),"searchDiscussions","query",a)},getGitHubDiscussionNumber(a,r,n){return e(o=>t.request({document:qg,variables:a,requestHeaders:{...r,...o},signal:n}),"getGitHubDiscussionNumber","query",a)},repositoryCollaboratorsForIssues(a,r,n){return e(o=>t.request({document:Bg,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryCollaboratorsForIssues","query",a)},repositoryProjectsForIssues(a,r,n){return e(o=>t.request({document:Ng,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryProjectsForIssues","query",a)},issueDetails(a,r,n){return e(o=>t.request({document:kg,variables:a,requestHeaders:{...r,...o},signal:n}),"issueDetails","query",a)},searchIssues(a,r,n){return e(o=>t.request({document:Vg,variables:a,requestHeaders:{...r,...o},signal:n}),"searchIssues","query",a)},issueByNumber(a,r,n){return e(o=>t.request({document:Fg,variables:a,requestHeaders:{...r,...o},signal:n}),"issueByNumber","query",a)},closeIssue(a,r,n){return e(o=>t.request({document:jg,variables:a,requestHeaders:{...r,...o},signal:n}),"closeIssue","mutation",a)},reopenIssue(a,r,n){return e(o=>t.request({document:zg,variables:a,requestHeaders:{...r,...o},signal:n}),"reopenIssue","mutation",a)},changeIssueAssignees(a,r,n){return e(o=>t.request({document:$g,variables:a,requestHeaders:{...r,...o},signal:n}),"changeIssueAssignees","mutation",a)},changeIssueMilestone(a,r,n){return e(o=>t.request({document:Hg,variables:a,requestHeaders:{...r,...o},signal:n}),"changeIssueMilestone","mutation",a)},addIssueToProject(a,r,n){return e(o=>t.request({document:Gg,variables:a,requestHeaders:{...r,...o},signal:n}),"addIssueToProject","mutation",a)},createIssue(a,r,n){return e(o=>t.request({document:Qg,variables:a,requestHeaders:{...r,...o},signal:n}),"createIssue","mutation",a)},searchIssueMentions(a,r,n){return e(o=>t.request({document:Wg,variables:a,requestHeaders:{...r,...o},signal:n}),"searchIssueMentions","query",a)},searchPullRequestMentions(a,r,n){return e(o=>t.request({document:Kg,variables:a,requestHeaders:{...r,...o},signal:n}),"searchPullRequestMentions","query",a)},issueOrPullRequestMention(a,r,n){return e(o=>t.request({document:Yg,variables:a,requestHeaders:{...r,...o},signal:n}),"issueOrPullRequestMention","query",a)},searchRepositoryMentions(a,r,n){return e(o=>t.request({document:Jg,variables:a,requestHeaders:{...r,...o},signal:n}),"searchRepositoryMentions","query",a)},viewerRepositoryMentions(a,r,n){return e(o=>t.request({document:Zg,variables:a,requestHeaders:{...r,...o},signal:n}),"viewerRepositoryMentions","query",a)},changeProjectStatus(a,r,n){return e(o=>t.request({document:Xg,variables:a,requestHeaders:{...r,...o},signal:n}),"changeProjectStatus","mutation",a)},projectDetails(a,r,n){return e(o=>t.request({document:eI,variables:a,requestHeaders:{...r,...o},signal:n}),"projectDetails","query",a)},searchPullRequests(a,r,n){return e(o=>t.request({document:tI,variables:a,requestHeaders:{...r,...o},signal:n}),"searchPullRequests","query",a)},pullRequestDetails(a,r,n){return e(o=>t.request({document:aI,variables:a,requestHeaders:{...r,...o},signal:n}),"pullRequestDetails","query",a)},repositoryCollaboratorsForPullRequests(a,r,n){return e(o=>t.request({document:rI,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryCollaboratorsForPullRequests","query",a)},repositoryProjectsForPullRequests(a,r,n){return e(o=>t.request({document:nI,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryProjectsForPullRequests","query",a)},pullRequestCommits(a,r,n){return e(o=>t.request({document:oI,variables:a,requestHeaders:{...r,...o},signal:n}),"pullRequestCommits","query",a)},closePullRequest(a,r,n){return e(o=>t.request({document:iI,variables:a,requestHeaders:{...r,...o},signal:n}),"closePullRequest","mutation",a)},reopenPullRequest(a,r,n){return e(o=>t.request({document:sI,variables:a,requestHeaders:{...r,...o},signal:n}),"reopenPullRequest","mutation",a)},markPullRequestReadyForReview(a,r,n){return e(o=>t.request({document:uI,variables:a,requestHeaders:{...r,...o},signal:n}),"markPullRequestReadyForReview","mutation",a)},addPullRequestReview(a,r,n){return e(o=>t.request({document:lI,variables:a,requestHeaders:{...r,...o},signal:n}),"addPullRequestReview","mutation",a)},changePullRequestAssignees(a,r,n){return e(o=>t.request({document:pI,variables:a,requestHeaders:{...r,...o},signal:n}),"changePullRequestAssignees","mutation",a)},changePullRequestMilestone(a,r,n){return e(o=>t.request({document:cI,variables:a,requestHeaders:{...r,...o},signal:n}),"changePullRequestMilestone","mutation",a)},addPullRequestToProject(a,r,n){return e(o=>t.request({document:yI,variables:a,requestHeaders:{...r,...o},signal:n}),"addPullRequestToProject","mutation",a)},requestReview(a,r,n){return e(o=>t.request({document:dI,variables:a,requestHeaders:{...r,...o},signal:n}),"requestReview","mutation",a)},mergePullRequest(a,r,n){return e(o=>t.request({document:SI,variables:a,requestHeaders:{...r,...o},signal:n}),"mergePullRequest","mutation",a)},addPullRequestToMergeQueue(a,r,n){return e(o=>t.request({document:bI,variables:a,requestHeaders:{...r,...o},signal:n}),"addPullRequestToMergeQueue","mutation",a)},removePullRequestFromMergeQueue(a,r,n){return e(o=>t.request({document:gI,variables:a,requestHeaders:{...r,...o},signal:n}),"removePullRequestFromMergeQueue","mutation",a)},enablePullRequestAutoMerge(a,r,n){return e(o=>t.request({document:II,variables:a,requestHeaders:{...r,...o},signal:n}),"enablePullRequestAutoMerge","mutation",a)},disablePullRequestAutoMerge(a,r,n){return e(o=>t.request({document:MI,variables:a,requestHeaders:{...r,...o},signal:n}),"disablePullRequestAutoMerge","mutation",a)},createPullRequest(a,r,n){return e(o=>t.request({document:mI,variables:a,requestHeaders:{...r,...o},signal:n}),"createPullRequest","mutation",a)},initPullRequest(a,r,n){return e(o=>t.request({document:fI,variables:a,requestHeaders:{...r,...o},signal:n}),"initPullRequest","mutation",a)},searchRepositories(a,r,n){return e(o=>t.request({document:RI,variables:a,requestHeaders:{...r,...o},signal:n}),"searchRepositories","query",a)},myLatestRepositories(a,r,n){return e(o=>t.request({document:AI,variables:a,requestHeaders:{...r,...o},signal:n}),"myLatestRepositories","query",a)},milestonesForRepository(a,r,n){return e(o=>t.request({document:hI,variables:a,requestHeaders:{...r,...o},signal:n}),"milestonesForRepository","query",a)},commentsForPullRequest(a,r,n){return e(o=>t.request({document:PI,variables:a,requestHeaders:{...r,...o},signal:n}),"commentsForPullRequest","query",a)},dataForRepository(a,r,n){return e(o=>t.request({document:EI,variables:a,requestHeaders:{...r,...o},signal:n}),"dataForRepository","query",a)},searchRepositoryBranches(a,r,n){return e(o=>t.request({document:CI,variables:a,requestHeaders:{...r,...o},signal:n}),"searchRepositoryBranches","query",a)},repositoryIssues(a,r,n){return e(o=>t.request({document:DI,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryIssues","query",a)},repositoryReleases(a,r,n){return e(o=>t.request({document:vI,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryReleases","query",a)},addStar(a,r,n){return e(o=>t.request({document:_I,variables:a,requestHeaders:{...r,...o},signal:n}),"addStar","mutation",a)},removeStar(a,r,n){return e(o=>t.request({document:xI,variables:a,requestHeaders:{...r,...o},signal:n}),"removeStar","mutation",a)},myStarredRepositories(a,r,n){return e(o=>t.request({document:UI,variables:a,requestHeaders:{...r,...o},signal:n}),"myStarredRepositories","query",a)},getViewer(a,r,n){return e(o=>t.request({document:wI,variables:a,requestHeaders:{...r,...o},signal:n}),"getViewer","query",a)},getViewerStats(a,r,n){return e(o=>t.request({document:TI,variables:a,requestHeaders:{...r,...o},signal:n}),"getViewerStats","query",a)},getViewerStatsDetails(a,r,n){return e(o=>t.request({document:OI,variables:a,requestHeaders:{...r,...o},signal:n}),"getViewerStatsDetails","query",a)}}}var ni=null,oi=null,tp=null,qI=(0,Xl.getPreferenceValues)();function BI({token:t,type:e}){let a=e==="personal"?`token ${t}`:`bearer ${t}`;tp=t,ni=Jl(new rn("https://api.github.com/graphql",{headers:{authorization:a}})),oi=new Zl.Octokit({auth:t,request:{fetch:bn}})}var ap=ep.OAuthService.github({personalAccessToken:qI.personalAccessToken,scope:"notifications repo project read:org read:user read:packages",onAuthorize:BI});function Ke(){if(!ni||!oi)throw new Error("GitHub clients not initialized");return{github:ni,octokit:oi,token:tp}}function rp(t,e,a,r){let n=a.trim().toLowerCase(),o=n?t.filter(u=>u.toLowerCase().includes(n)):t,i=n?[...e??[],...o]:o,s=[...new Set(i)];return r&&!s.includes(r)?[r,...s]:s}function In(t){return t?.response?.errors?t.response.errors[0].message:t instanceof Error?t.message:String(t)}var np=j(st());var op=(0,np.withAccessToken)(ap);var Wy=j(Qy()),yA=new Set(["choice","boolean","environment","string"]);function Ky(t){try{return(0,Wy.parse)(t)}catch{return null}}function Yy(t){if(!t||typeof t!="object")return null;let e=t,a=e.on??e.true;if(a===void 0)return null;if(typeof a=="string")return a==="workflow_dispatch"?[]:null;if(Array.isArray(a))return a.includes("workflow_dispatch")?[]:null;if(typeof a!="object"||a===null)return null;let r=a.workflow_dispatch;if(r===void 0)return null;if(!r||typeof r!="object")return[];let n=r.inputs;return!n||typeof n!="object"?[]:Object.entries(n).map(([o,i])=>{let s=i??{},u=typeof s.type=="string"?s.type:"string",l=yA.has(u)?u:"string";return{name:o,description:typeof s.description=="string"?s.description:void 0,required:s.required===!0,defaultValue:s.default!=null?String(s.default):void 0,type:l,options:Array.isArray(s.options)?s.options.map(String):void 0}})}var td=j(st());var bo=require("node:child_process");var Zy=require("node:util"),le=require("@raycast/api"),dA=j(st());var $E=[{title:"github.dev",baseUrl:"https://github.dev/",icon:{source:"github-dev.svg",tintColor:le.Color.PrimaryText},shortcut:le.Keyboard.Shortcut.Common.Open},{title:"VS Code for the Web",baseUrl:"https://vscode.dev/github/",icon:{source:"vscode.svg",tintColor:le.Color.PrimaryText},shortcut:{macOS:{modifiers:["cmd"],key:"v"},Windows:{modifiers:["ctrl"],key:"v"}}},{title:"CodeSandbox",baseUrl:"https://codesandbox.io/s/github/",icon:{source:"codesandbox.svg",tintColor:le.Color.PrimaryText}},{title:"Replit",baseUrl:"https://repl.it/github/",icon:{source:"replit.svg",tintColor:le.Color.PrimaryText}},{title:"Gitpod",baseUrl:"https://gitpod.io/#https://github.com/",icon:{source:"gitpod.svg",tintColor:le.Color.PrimaryText}},{title:"Glitch",baseUrl:"https://glitch.com/edit/#!/import/github/",icon:{source:"glitch.svg",tintColor:le.Color.PrimaryText}},{title:"Sourcegraph",baseUrl:"https://sourcegraph.com/github.com/",icon:{source:"sourcegraph.svg",tintColor:le.Color.PrimaryText},shortcut:{macOS:{modifiers:["cmd"],key:"s"},Windows:{modifiers:["ctrl"],key:"s"}}},{title:"DeepWiki",baseUrl:"https://deepwiki.com/",icon:{source:"deepwiki.png"},shortcut:{macOS:{modifiers:["cmd"],key:"d"},Windows:{modifiers:["ctrl"],key:"d"}}},{title:"VS Code Remote Repositories",baseUrl:"vscode://GitHub.remotehub/open?url=https://github.com/",icon:{source:"vscode.svg",tintColor:le.Color.PrimaryText}}];var SA=[{title:"Relevance",value:""},{title:"Last Update",value:"sort:updated-desc"},{title:"Name",value:"sort:name-asc"},{title:"Stars",value:"sort:stars-desc"},{title:"Forks",value:"sort:forks-desc"}],bA=[{title:"Last Pushed",value:"pushed_at:desc"},{title:"Name",value:"name:asc"},{title:"Stars",value:"stargazers:desc"}],gA=[{title:"Recently Starred",value:"starred_at:desc"},{title:"Oldest Starred",value:"starred_at:asc"}],HE=SA[0].value,GE=bA[0].value,QE=gA[0].value;var WE=(0,Zy.promisify)(bo.execFile);var fr="\x1B",Jy="\x07",KE=new RegExp(`${fr}][^${Jy}${fr}]*(?:${Jy}|${fr}\\\\)`,"g"),YE=new RegExp(`${fr}\\[[0-9;?]*[A-Za-z]`,"g"),JE=new RegExp(`${fr}\\([0-9A-Za-z]`,"g");var Xy=j(st());function ed(){let{github:t}=Ke(),{data:e}=(0,Xy.useCachedPromise)(async()=>(await t.getViewer()).viewer);return e}function ad(){let{github:t}=Ke(),r=["user:@me",...ed()?.organizations?.nodes?.flatMap(n=>n?.login?[`org:${n.login}`]:[])??[]].join(" ");return(0,td.useCachedPromise)(async n=>{let i=(await Promise.allSettled(n.split(" ").map(s=>t.searchRepositories({query:`${s} archived:false sort:updated-desc`,numberOfItems:100})))).flatMap(s=>s.status==="fulfilled"?s.value.search.nodes:[]);return[...new Map(i.map(s=>[s.id,s])).values()].sort((s,u)=>new Date(u.updatedAt).getTime()-new Date(s.updatedAt).getTime())},[r])}var Vs=j(st());var rd=100,IA=3;function nd(t){let{octokit:e}=Ke(),[a,r]=(t??"").split("/");return(0,Vs.useCachedPromise)(async(n,o)=>{let s=(async()=>{let p=[];for(let y=1;y<=IA;y++){let{data:g}=await e.repos.listBranches({owner:n,repo:o,per_page:rd,page:y});if(p.push(...g.map(S=>S.name)),g.length<rd)break}return p})().catch(p=>{if(p.status===409)return[];throw p}),[{data:u},l]=await Promise.all([e.repos.get({owner:n,repo:o}),s]),c=u.default_branch;return{branches:[c,...l.filter(p=>p!==c)],defaultBranch:c}},[a,r],{execute:!!(a&&r)})}function od(t,e){let{github:a}=Ke(),[r,n]=(t??"").split("/"),o=e.trim();return(0,Vs.useCachedPromise)(async(i,s,u)=>((await a.searchRepositoryBranches({owner:i,name:s,query:u})).repository?.refs?.nodes??[]).flatMap(c=>c?.name?[c.name]:[]),[r,n,o],{execute:!!(r&&n&&o)})}var k=require("react/jsx-runtime"),id=10;function MA(t){return t.type==="string"||t.type==="environment"||t.type==="choice"&&!t.options?.length}function mA(){let{octokit:t}=Ke(),{data:e,isLoading:a}=ad(),{value:r,setValue:n,isLoading:o}=(0,Ee.useLocalStorage)("dispatch-workflow-repository",""),{handleSubmit:i,itemProps:s,values:u,setValue:l}=(0,Ee.useForm)({async onSubmit(C){if(!c||!v)return;let B=v.inputs.find(Ie=>Ie.required&&MA(Ie)&&!C[`input_${Ie.name}`]?.trim());if(B){await(0,_.showToast)({style:_.Toast.Style.Failure,title:`${B.name} is required`});return}let V={};for(let Ie of v.inputs){let ee=C[`input_${Ie.name}`];ee!==void 0&&ee!==""&&(V[Ie.name]=ee)}let J=await(0,_.showToast)({style:_.Toast.Style.Animated,title:"Dispatching workflow"});try{await t.actions.createWorkflowDispatch({owner:c.owner.login,repo:c.name,workflow_id:v.id,ref:C.ref,inputs:V}),J.style=_.Toast.Style.Success,J.title="Dispatched workflow",J.message=`${v.name} on ${C.ref}`,J.primaryAction={title:"Open Actions in Browser",shortcut:_.Keyboard.Shortcut.Common.OpenWith,onAction:()=>(0,_.open)(`${c.url}/actions`)}}catch(Ie){let ee=Ie.status;J.style=_.Toast.Style.Failure,J.title="Failed dispatching workflow",J.message=ee===404?"The workflow is not dispatchable on this ref (it may lack the workflow_dispatch trigger there).":In(Ie)}},initialValues:{repository:"",workflowId:"",ref:""},validation:{repository:Ee.FormValidation.Required,workflowId:Ee.FormValidation.Required,ref:Ee.FormValidation.Required}});(0,be.useEffect)(()=>{o||!e||u.repository||!r||e.some(C=>C.id===r)&&l("repository",r)},[o,e,r,u.repository]);let c=e?.find(C=>C.id===u.repository),p=c?.owner.login??"",y=c?.name??"",[g,S]=(0,be.useState)(""),{data:d,isLoading:b}=nd(c?.nameWithOwner),{data:I,isLoading:M}=od(c?.nameWithOwner,g),R=d?.defaultBranch??"",m=(0,be.useMemo)(()=>rp(d?.branches??[],I,g,u.ref),[d?.branches,I,g,u.ref]),{data:h,isLoading:A,error:D,revalidate:P}=(0,Ee.useCachedPromise)(async(C,B)=>{let V=[];for(let ee=1;;ee+=1){let{data:Ma}=await t.actions.listRepoWorkflows({owner:C,repo:B,per_page:100,page:ee});if(V.push(...Ma.workflows),V.length>=Ma.total_count||Ma.workflows.length===0)break}let J=[],Ie=0;for(let ee=0;ee<V.length;ee+=id){let Ma=V.slice(ee,ee+id);J.push(...await Promise.all(Ma.map(async Rt=>{if(!Rt.path.startsWith(".github/workflows/"))return null;try{let{data:Ar}=await t.repos.getContent({owner:C,repo:B,path:Rt.path});if(Array.isArray(Ar)||Ar.type!=="file"||typeof Ar.content!="string")return null;let ud=Buffer.from(Ar.content,"base64").toString("utf8"),$s=Yy(Ky(ud));return $s?{id:Rt.id,name:Rt.name,path:Rt.path,state:Rt.state,htmlUrl:Rt.html_url,inputs:$s}:null}catch{return Ie+=1,null}})))}return{workflows:J.filter(ee=>ee!==null),failedCount:Ie}},[p,y],{execute:!!(p&&y)}),x=h?.workflows??[],O=h?.failedCount??0,v=x.find(C=>String(C.id)===u.workflowId),U=D?In(D):null,Y=c?.nameWithOwner??"",{value:w,setValue:X,isLoading:Ze}=(0,Ee.useLocalStorage)("pinned-workflows",{}),ge=w?.[Y]??[],Rr=v?ge.includes(v.id):!1,Ia=(0,be.useMemo)(()=>{if(ge.length===0)return x;let C=new Map(ge.map((B,V)=>[B,V]));return[...x].sort((B,V)=>(C.get(B.id)??Number.MAX_SAFE_INTEGER)-(C.get(V.id)??Number.MAX_SAFE_INTEGER))},[x,ge]);async function sd(C){let B=ge.includes(C.id)?ge.filter(V=>V!==C.id):[C.id,...ge];await X({...w??{},[Y]:B})}let{data:Fs,isLoading:go}=(0,Ee.useCachedPromise)(async(C,B,V)=>{let{data:J}=await t.actions.listWorkflowRuns({owner:C,repo:B,workflow_id:V,per_page:1});return J.workflow_runs[0]?.head_branch??null},[p,y,v?.id??0],{execute:!!(p&&y&&v)}),js=(0,be.useRef)(""),zs=(0,be.useRef)("");return(0,be.useEffect)(()=>{A||Ze||!h||u.workflowId&&h.workflows.some(C=>String(C.id)===u.workflowId)||l("workflowId",Ia.length>0?String(Ia[0].id):"")},[u.workflowId,h,A,Ze,Ia]),(0,be.useEffect)(()=>{if(!u.repository||!v||!R||go)return;let C=`${u.repository}:${v.id}`;js.current!==C&&(js.current=C,l("ref",Fs??R))},[u.repository,v?.id,R,Fs,go]),(0,be.useEffect)(()=>{if(!v)return;let C=String(v.id);if(zs.current!==C){zs.current=C;for(let B of v.inputs){let V=B.type==="choice"?B.options?.[0]??"":B.type==="boolean"?"false":"";l(`input_${B.name}`,B.defaultValue??V)}}},[v?.id]),(0,k.jsxs)(_.Form,{actions:(0,k.jsxs)(_.ActionPanel,{children:[(0,k.jsx)(_.Action.SubmitForm,{title:"Dispatch Workflow",icon:_.Icon.Play,onSubmit:i}),O>0||U?(0,k.jsx)(_.Action,{title:"Retry Loading Workflows",icon:_.Icon.ArrowClockwise,onAction:()=>P()}):null,v?(0,k.jsx)(_.Action,{title:Rr?"Unpin Workflow":"Pin Workflow",icon:Rr?_.Icon.PinDisabled:_.Icon.Pin,shortcut:_.Keyboard.Shortcut.Common.Pin,onAction:()=>sd(v)}):null,v?(0,k.jsx)(_.Action.OpenInBrowser,{title:"Open Workflow in Browser",url:v.htmlUrl}):null]}),isLoading:a||o||A||b||go,children:[(0,k.jsx)(_.Form.Dropdown,{...s.repository,title:"Repository",autoFocus:!0,onChange:C=>{l("repository",C),C&&n(C)},children:e?.map(C=>(0,k.jsx)(_.Form.Dropdown.Item,{title:C.nameWithOwner,value:C.id,icon:{source:C.owner.avatarUrl,mask:_.Image.Mask.Circle}},C.id))}),(0,k.jsx)(_.Form.Dropdown,{...s.workflowId,title:"Workflow",isLoading:A,info:"Only workflows declaring the workflow_dispatch trigger can be dispatched manually. Pin workflows to sort them first.",children:Ia.length>0?Ia.map(C=>(0,k.jsx)(_.Form.Dropdown.Item,{value:String(C.id),title:C.name,keywords:[C.path,C.state],icon:ge.includes(C.id)?_.Icon.Pin:void 0},C.id)):(0,k.jsx)(_.Form.Dropdown.Item,{value:"",title:U?"Failed to load workflows":O>0?"Could not read workflow files":"No dispatchable workflows found"})}),U?(0,k.jsx)(_.Form.Description,{title:"Could not load workflows",text:U}):null,O>0?(0,k.jsx)(_.Form.Description,{title:"Some workflow files could not be read",text:`${O} workflow ${O===1?"file":"files"} failed to load, so this list may be incomplete.`}):null,(0,k.jsx)(_.Form.Dropdown,{...s.ref,title:"Ref",isLoading:b||M,throttle:!0,onSearchTextChange:S,children:m.map(C=>(0,k.jsx)(_.Form.Dropdown.Item,{value:C,title:C},C))}),v?.inputs.length?(0,k.jsx)(_.Form.Separator,{}):null,v?.inputs.map(C=>{let B=s[`input_${C.name}`],V={id:B.id,title:C.name,info:C.description};return C.type==="choice"&&C.options?.length?(0,k.jsx)(_.Form.Dropdown,{...V,...B,children:C.options.map(J=>(0,k.jsx)(_.Form.Dropdown.Item,{value:J,title:J},J))},C.name):C.type==="boolean"?(0,k.jsxs)(_.Form.Dropdown,{...V,...B,children:[(0,k.jsx)(_.Form.Dropdown.Item,{value:"true",title:"true"}),(0,k.jsx)(_.Form.Dropdown.Item,{value:"false",title:"false"})]},C.name):(0,k.jsx)(_.Form.TextField,{...V,...B,placeholder:C.defaultValue},C.name)})]})}var fA=op(mA);
