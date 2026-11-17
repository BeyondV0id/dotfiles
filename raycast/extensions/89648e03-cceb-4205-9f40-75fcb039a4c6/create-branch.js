"use strict";var oi=Object.create;var Qt=Object.defineProperty;var ii=Object.getOwnPropertyDescriptor;var si=Object.getOwnPropertyNames;var ui=Object.getPrototypeOf,pi=Object.prototype.hasOwnProperty;var ja=(e,t,a)=>()=>{if(a)throw a[0];try{return e&&(t=e(e=0)),t}catch(n){throw a=[n],n}};var E=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(a){throw t=0,a}},Ze=(e,t)=>{for(var a in t)Qt(e,a,{get:t[a],enumerable:!0})},$t=(e,t,a,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of si(t))!pi.call(e,r)&&r!==a&&Qt(e,r,{get:()=>t[r],enumerable:!(n=ii(t,r))||n.enumerable});return e},j=(e,t,a)=>($t(e,t,"default"),a&&$t(a,t,"default")),T=(e,t,a)=>(a=e!=null?oi(ui(e)):{},$t(t||!e||!e.__esModule?Qt(a,"default",{value:e,enumerable:!0}):a,e)),li=e=>$t(Qt({},"__esModule",{value:!0}),e);var Tr=E(Wt=>{"use strict";Object.defineProperty(Wt,"__esModule",{value:!0});Wt.useDeepMemo=void 0;var za=require("react"),ci=require("dequal/lite");function yi(e){let t=(0,za.useRef)(e),a=(0,za.useRef)(0);return(0,ci.dequal)(e,t.current)||(t.current=e,a.current+=1),(0,za.useMemo)(()=>t.current,[a.current])}Wt.useDeepMemo=yi});var Re=E(Kt=>{"use strict";Object.defineProperty(Kt,"__esModule",{value:!0});Kt.useLatest=void 0;var di=require("react");function Si(e){let t=(0,di.useRef)(e);return t.current=e,t}Kt.useLatest=Si});var At=E(ye=>{"use strict";var bi=ye&&ye.__createBinding||(Object.create?(function(e,t,a,n){n===void 0&&(n=a);var r=Object.getOwnPropertyDescriptor(t,a);(!r||("get"in r?!t.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,r)}):(function(e,t,a,n){n===void 0&&(n=a),e[n]=t[a]})),Ii=ye&&ye.__setModuleDefault||(Object.create?(function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}):function(e,t){e.default=t}),Or=ye&&ye.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var a in e)a!=="default"&&Object.prototype.hasOwnProperty.call(e,a)&&bi(t,e,a);return Ii(t,e),t};Object.defineProperty(ye,"__esModule",{value:!0});ye.showFailureToast=void 0;var gi=Or(require("fs")),Mi=Or(require("path")),Xe=require("@raycast/api");function mi(e,t){let a=e instanceof Error?e.message:String(e);return(0,Xe.showToast)({style:Xe.Toast.Style.Failure,title:t?.title??"Something went wrong",message:t?.message??a,primaryAction:t?.primaryAction??wr(e),secondaryAction:t?.primaryAction?wr(e):void 0})}ye.showFailureToast=mi;var wr=e=>{let t=!0,a="[Extension Name]...",n="";try{let s=JSON.parse(gi.readFileSync(Mi.join(Xe.environment.assetsPath,"..","package.json"),"utf8"));a=`[${s.title}]...`,n=`https://raycast.com/${s.owner||s.author}/${s.name}`,(!s.owner||s.access==="public")&&(t=!1)}catch{}let r=Xe.environment.isDevelopment||t,o=e instanceof Error?e?.stack||e?.message||"":String(e);return{title:r?"Copy Logs":"Report Error",onAction(s){s.hide(),r?Xe.Clipboard.copy(o):(0,Xe.open)(`https://github.com/raycast/extensions/issues/new?&labels=extension%2Cbug&template=extension_bug_report.yml&title=${encodeURIComponent(a)}&extension-url=${encodeURI(n)}&description=${encodeURIComponent(`#### Error:
\`\`\`
${o}
\`\`\`
`)}`)}}}});var et=E(Yt=>{"use strict";Object.defineProperty(Yt,"__esModule",{value:!0});Yt.usePromise=void 0;var W=require("react"),ft=require("@raycast/api"),Ri=Tr(),_e=Re(),Ai=At();function fi(e,t,a){let n=(0,W.useRef)(0),[r,o]=(0,W.useState)({isLoading:!0}),s=(0,_e.useLatest)(e),i=(0,_e.useLatest)(a?.abortable),u=(0,_e.useLatest)(t||[]),p=(0,_e.useLatest)(a?.onError),y=(0,_e.useLatest)(a?.onData),c=(0,_e.useLatest)(a?.onWillExecute),d=(0,_e.useLatest)(a?.failureToastOptions),m=(0,_e.useLatest)(r.data),l=(0,W.useRef)(),b=(0,W.useRef)({page:0}),S=(0,W.useRef)(!1),I=(0,W.useRef)(!0),R=(0,W.useRef)(50),f=(0,W.useCallback)((...V)=>{let v=++n.current;i.current&&(i.current.current?.abort(),i.current.current=new AbortController),c.current?.(V),o(C=>({...C,isLoading:!0}));let se=Pi(s.current)(...V);function ce(C){return C.name=="AbortError"||v===n.current&&(p.current?p.current(C):ft.environment.launchType!==ft.LaunchType.Background&&(0,Ai.showFailureToast)(C,{title:"Failed to fetch latest data",primaryAction:{title:"Retry",onAction(Q){Q.hide(),l.current?.(...u.current||[])}},...d.current}),o({error:C,isLoading:!1})),C}return typeof se=="function"?(S.current=!0,se(b.current).then(({data:C,hasMore:Q,cursor:Rt})=>(v===n.current&&(b.current&&(b.current.cursor=Rt,b.current.lastItem=C?.[C.length-1]),y.current&&y.current(C,b.current),Q&&(R.current=C.length),I.current=Q,o(Fa=>b.current.page===0?{data:C,isLoading:!1}:{data:(Fa.data||[])?.concat(C),isLoading:!1})),C),C=>(I.current=!1,ce(C)))):(S.current=!1,se.then(C=>(v===n.current&&(y.current&&y.current(C),o({data:C,isLoading:!1})),C),ce))},[i,y,p,u,s,o,l,c,b,d]);l.current=f;let M=(0,W.useCallback)(()=>{b.current={page:0};let V=u.current||[];return f(...V)},[f,u]),P=(0,W.useCallback)(async(V,v)=>{let se;try{if(v?.optimisticUpdate){typeof v?.rollbackOnError!="function"&&v?.rollbackOnError!==!1&&(se=structuredClone(m.current?.value));let ce=v.optimisticUpdate;o(C=>({...C,data:ce(C.data)}))}return await V}catch(ce){if(typeof v?.rollbackOnError=="function"){let C=v.rollbackOnError;o(Q=>({...Q,data:C(Q.data)}))}else v?.optimisticUpdate&&v?.rollbackOnError!==!1&&o(C=>({...C,data:se}));throw ce}finally{v?.shouldRevalidateAfter!==!1&&(ft.environment.launchType===ft.LaunchType.Background||ft.environment.commandMode==="menu-bar"?await M():M())}},[M,m,o]),A=(0,W.useCallback)(()=>{b.current.page+=1;let V=u.current||[];f(...V)},[b,u,f]);(0,W.useEffect)(()=>{b.current={page:0},a?.execute!==!1?f(...t||[]):i.current&&i.current.current?.abort()},[(0,Ri.useDeepMemo)([t,a?.execute,f]),i,b]),(0,W.useEffect)(()=>()=>{i.current&&i.current.current?.abort()},[i]);let _=a?.execute!==!1?r.isLoading:!1,q={...r,isLoading:_},ie=S.current?{pageSize:R.current,hasMore:I.current,onLoadMore:A}:void 0;return{...q,revalidate:M,mutate:P,pagination:ie}}Yt.usePromise=fi;function Pi(e){return e===Promise.all||e===Promise.race||e===Promise.resolve||e===Promise.reject?e.bind(Promise):e}});var Ue=E(de=>{"use strict";var Ei=de&&de.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(de,"__esModule",{value:!0});de.hash=de.reviver=de.replacer=void 0;var Ci=Ei(require("object-hash"));function hi(e,t){let a=this[e];return a instanceof Date?`__raycast_cached_date__${a.toString()}`:Buffer.isBuffer(a)?`__raycast_cached_buffer__${a.toString("base64")}`:t}de.replacer=hi;function Di(e,t){return typeof t=="string"&&t.startsWith("__raycast_cached_date__")?new Date(t.replace("__raycast_cached_date__","")):typeof t=="string"&&t.startsWith("__raycast_cached_buffer__")?Buffer.from(t.replace("__raycast_cached_buffer__",""),"base64"):t}de.reviver=Di;function xi(e,t){return(0,Ci.default)(e,{replacer:a=>a instanceof URLSearchParams?a.toString():a,...t})}de.hash=xi});var Zt=E(Jt=>{"use strict";Object.defineProperty(Jt,"__esModule",{value:!0});Jt.useCachedState=void 0;var Ha=require("react"),_i=require("@raycast/api"),Ga=Re(),Br=Ue(),Ui=Symbol("cache without namespace"),Lr=new Map;function vi(e,t,a){let n=a?.cacheNamespace||Ui,r=Lr.get(n)||Lr.set(n,new _i.Cache({namespace:a?.cacheNamespace})).get(n);if(!r)throw new Error("Missing cache");let o=(0,Ga.useLatest)(e),s=(0,Ga.useLatest)(t),i=(0,Ha.useSyncExternalStore)(r.subscribe,()=>{try{return r.get(o.current)}catch(c){console.error("Could not get Cache data:",c);return}}),u=(0,Ha.useMemo)(()=>{if(typeof i<"u"){if(i==="undefined")return;try{return JSON.parse(i,Br.reviver)}catch(c){return console.warn("The cached data is corrupted",c),s.current}}else return s.current},[i,s]),p=(0,Ga.useLatest)(u),y=(0,Ha.useCallback)(c=>{let d=typeof c=="function"?c(p.current):c;if(typeof d>"u")r.set(o.current,"undefined");else{let m=JSON.stringify(d,Br.replacer);r.set(o.current,m)}return d},[r,o,p]);return[u,y]}Jt.useCachedState=vi});var Et=E(Xt=>{"use strict";Object.defineProperty(Xt,"__esModule",{value:!0});Xt.useCachedPromise=void 0;var Pt=require("react"),Ti=Zt(),wi=et(),Oi=Re(),qr=Ue(),tt=Symbol();function Bi(e,t,a){let{initialData:n,keepPreviousData:r,internal_cacheKeySuffix:o,...s}=a||{},i=(0,Pt.useRef)(),[u,p]=(0,Ti.useCachedState)((0,qr.hash)(t||[])+o,tt,{cacheNamespace:(0,qr.hash)(e)}),y=(0,Pt.useRef)(u!==tt?u:n),c=(0,Pt.useRef)(void 0),{mutate:d,revalidate:m,...l}=(0,wi.usePromise)(e,t||[],{...s,onData(f,M){c.current=M,s.onData&&s.onData(f,M),!(M&&M.page>0)&&(i.current="promise",y.current=f,p(f))}}),b,S=l.pagination;c.current&&c.current.page>0&&l.data?b=l.data:i.current==="promise"?b=y.current:r&&u!==tt?(b=u,S&&(S.hasMore=!0,S.pageSize=u.length)):r&&u===tt?b=y.current:u!==tt?(b=u,S&&(S.hasMore=!0,S.pageSize=u.length)):b=n;let I=(0,Oi.useLatest)(b),R=(0,Pt.useCallback)(async(f,M)=>{let P;try{if(M?.optimisticUpdate){typeof M?.rollbackOnError!="function"&&M?.rollbackOnError!==!1&&(P=structuredClone(I.current));let A=M.optimisticUpdate(I.current);i.current="cache",y.current=A,p(A)}return await d(f,{shouldRevalidateAfter:M?.shouldRevalidateAfter})}catch(A){if(typeof M?.rollbackOnError=="function"){let _=M.rollbackOnError(I.current);i.current="cache",y.current=_,p(_)}else M?.optimisticUpdate&&M?.rollbackOnError!==!1&&(i.current="cache",y.current=P,p(P));throw A}},[p,d,I,y,i]);return(0,Pt.useEffect)(()=>{u!==tt&&(i.current="cache",y.current=u)},[u]),{data:b,isLoading:l.isLoading,error:l.error,mutate:c.current&&c.current.page>0?d:R,pagination:S,revalidate:m}}Xt.useCachedPromise=Bi});var Kr=E((pe,Wr)=>{"use strict";Object.defineProperty(pe,"__esModule",{value:!0});function ot(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var ue=ot(require("stream")),Fr=ot(require("http")),ta=ot(require("url")),jr=ot(require("whatwg-url")),Li=ot(require("https")),ke=ot(require("zlib")),qi=ue.Readable,Ae=Symbol("buffer"),$a=Symbol("type"),ht=class e{constructor(){this[$a]="";let t=arguments[0],a=arguments[1],n=[],r=0;if(t){let s=t,i=Number(s.length);for(let u=0;u<i;u++){let p=s[u],y;p instanceof Buffer?y=p:ArrayBuffer.isView(p)?y=Buffer.from(p.buffer,p.byteOffset,p.byteLength):p instanceof ArrayBuffer?y=Buffer.from(p):p instanceof e?y=p[Ae]:y=Buffer.from(typeof p=="string"?p:String(p)),r+=y.length,n.push(y)}}this[Ae]=Buffer.concat(n);let o=a&&a.type!==void 0&&String(a.type).toLowerCase();o&&!/[^\u0020-\u007E]/.test(o)&&(this[$a]=o)}get size(){return this[Ae].length}get type(){return this[$a]}text(){return Promise.resolve(this[Ae].toString())}arrayBuffer(){let t=this[Ae],a=t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength);return Promise.resolve(a)}stream(){let t=new qi;return t._read=function(){},t.push(this[Ae]),t.push(null),t}toString(){return"[object Blob]"}slice(){let t=this.size,a=arguments[0],n=arguments[1],r,o;a===void 0?r=0:a<0?r=Math.max(t+a,0):r=Math.min(a,t),n===void 0?o=t:n<0?o=Math.max(t+n,0):o=Math.min(n,t);let s=Math.max(o-r,0),u=this[Ae].slice(r,r+s),p=new e([],{type:arguments[2]});return p[Ae]=u,p}};Object.defineProperties(ht.prototype,{size:{enumerable:!0},type:{enumerable:!0},slice:{enumerable:!0}});Object.defineProperty(ht.prototype,Symbol.toStringTag,{value:"Blob",writable:!1,enumerable:!1,configurable:!0});function L(e,t,a){Error.call(this,e),this.message=e,this.type=t,a&&(this.code=this.errno=a.code),Error.captureStackTrace(this,this.constructor)}L.prototype=Object.create(Error.prototype);L.prototype.constructor=L;L.prototype.name="FetchError";var Ya;try{Ya=require("encoding").convert}catch{}var Pe=Symbol("Body internals"),Nr=ue.PassThrough;function w(e){var t=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.size;let r=n===void 0?0:n;var o=a.timeout;let s=o===void 0?0:o;e==null?e=null:zr(e)?e=Buffer.from(e.toString()):xt(e)||Buffer.isBuffer(e)||(Object.prototype.toString.call(e)==="[object ArrayBuffer]"?e=Buffer.from(e):ArrayBuffer.isView(e)?e=Buffer.from(e.buffer,e.byteOffset,e.byteLength):e instanceof ue||(e=Buffer.from(String(e)))),this[Pe]={body:e,disturbed:!1,error:null},this.size=r,this.timeout=s,e instanceof ue&&e.on("error",function(i){let u=i.name==="AbortError"?i:new L(`Invalid response body while trying to fetch ${t.url}: ${i.message}`,"system",i);t[Pe].error=u})}w.prototype={get body(){return this[Pe].body},get bodyUsed(){return this[Pe].disturbed},arrayBuffer(){return at.call(this).then(function(e){return e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength)})},blob(){let e=this.headers&&this.headers.get("content-type")||"";return at.call(this).then(function(t){return Object.assign(new ht([],{type:e.toLowerCase()}),{[Ae]:t})})},json(){var e=this;return at.call(this).then(function(t){try{return JSON.parse(t.toString())}catch(a){return w.Promise.reject(new L(`invalid json response body at ${e.url} reason: ${a.message}`,"invalid-json"))}})},text(){return at.call(this).then(function(e){return e.toString()})},buffer(){return at.call(this)},textConverted(){var e=this;return at.call(this).then(function(t){return Ni(t,e.headers)})}};Object.defineProperties(w.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0}});w.mixIn=function(e){for(let t of Object.getOwnPropertyNames(w.prototype))if(!(t in e)){let a=Object.getOwnPropertyDescriptor(w.prototype,t);Object.defineProperty(e,t,a)}};function at(){var e=this;if(this[Pe].disturbed)return w.Promise.reject(new TypeError(`body used already for: ${this.url}`));if(this[Pe].disturbed=!0,this[Pe].error)return w.Promise.reject(this[Pe].error);let t=this.body;if(t===null)return w.Promise.resolve(Buffer.alloc(0));if(xt(t)&&(t=t.stream()),Buffer.isBuffer(t))return w.Promise.resolve(t);if(!(t instanceof ue))return w.Promise.resolve(Buffer.alloc(0));let a=[],n=0,r=!1;return new w.Promise(function(o,s){let i;e.timeout&&(i=setTimeout(function(){r=!0,s(new L(`Response timeout while trying to fetch ${e.url} (over ${e.timeout}ms)`,"body-timeout"))},e.timeout)),t.on("error",function(u){u.name==="AbortError"?(r=!0,s(u)):s(new L(`Invalid response body while trying to fetch ${e.url}: ${u.message}`,"system",u))}),t.on("data",function(u){if(!(r||u===null)){if(e.size&&n+u.length>e.size){r=!0,s(new L(`content size at ${e.url} over limit: ${e.size}`,"max-size"));return}n+=u.length,a.push(u)}}),t.on("end",function(){if(!r){clearTimeout(i);try{o(Buffer.concat(a,n))}catch(u){s(new L(`Could not create Buffer from response body for ${e.url}: ${u.message}`,"system",u))}}})})}function Ni(e,t){if(typeof Ya!="function")throw new Error("The package `encoding` must be installed to use the textConverted() function");let a=t.get("content-type"),n="utf-8",r,o;return a&&(r=/charset=([^;]*)/i.exec(a)),o=e.slice(0,1024).toString(),!r&&o&&(r=/<meta.+?charset=(['"])(.+?)\1/i.exec(o)),!r&&o&&(r=/<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(o),r||(r=/<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(o),r&&r.pop()),r&&(r=/charset=(.*)/i.exec(r.pop()))),!r&&o&&(r=/<\?xml.+?encoding=(['"])(.+?)\1/i.exec(o)),r&&(n=r.pop(),(n==="gb2312"||n==="gbk")&&(n="gb18030")),Ya(e,"UTF-8",n).toString()}function zr(e){return typeof e!="object"||typeof e.append!="function"||typeof e.delete!="function"||typeof e.get!="function"||typeof e.getAll!="function"||typeof e.has!="function"||typeof e.set!="function"?!1:e.constructor.name==="URLSearchParams"||Object.prototype.toString.call(e)==="[object URLSearchParams]"||typeof e.sort=="function"}function xt(e){return typeof e=="object"&&typeof e.arrayBuffer=="function"&&typeof e.type=="string"&&typeof e.stream=="function"&&typeof e.constructor=="function"&&typeof e.constructor.name=="string"&&/^(Blob|File)$/.test(e.constructor.name)&&/^(Blob|File)$/.test(e[Symbol.toStringTag])}function Hr(e){let t,a,n=e.body;if(e.bodyUsed)throw new Error("cannot clone body after it is used");return n instanceof ue&&typeof n.getBoundary!="function"&&(t=new Nr,a=new Nr,n.pipe(t),n.pipe(a),e[Pe].body=t,n=a),n}function Gr(e){return e===null?null:typeof e=="string"?"text/plain;charset=UTF-8":zr(e)?"application/x-www-form-urlencoded;charset=UTF-8":xt(e)?e.type||null:Buffer.isBuffer(e)||Object.prototype.toString.call(e)==="[object ArrayBuffer]"||ArrayBuffer.isView(e)?null:typeof e.getBoundary=="function"?`multipart/form-data;boundary=${e.getBoundary()}`:e instanceof ue?null:"text/plain;charset=UTF-8"}function $r(e){let t=e.body;return t===null?0:xt(t)?t.size:Buffer.isBuffer(t)?t.length:t&&typeof t.getLengthSync=="function"&&(t._lengthRetrievers&&t._lengthRetrievers.length==0||t.hasKnownLength&&t.hasKnownLength())?t.getLengthSync():null}function Vi(e,t){let a=t.body;a===null?e.end():xt(a)?a.stream().pipe(e):Buffer.isBuffer(a)?(e.write(a),e.end()):a.pipe(e)}w.Promise=global.Promise;var Qr=/[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/,Ja=/[^\t\x20-\x7e\x80-\xff]/;function Ct(e){if(e=`${e}`,Qr.test(e)||e==="")throw new TypeError(`${e} is not a legal HTTP header name`)}function Vr(e){if(e=`${e}`,Ja.test(e))throw new TypeError(`${e} is not a legal HTTP header value`)}function rt(e,t){t=t.toLowerCase();for(let a in e)if(a.toLowerCase()===t)return a}var U=Symbol("map"),ee=class e{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:void 0;if(this[U]=Object.create(null),t instanceof e){let a=t.raw(),n=Object.keys(a);for(let r of n)for(let o of a[r])this.append(r,o);return}if(t!=null)if(typeof t=="object"){let a=t[Symbol.iterator];if(a!=null){if(typeof a!="function")throw new TypeError("Header pairs must be iterable");let n=[];for(let r of t){if(typeof r!="object"||typeof r[Symbol.iterator]!="function")throw new TypeError("Each header pair must be iterable");n.push(Array.from(r))}for(let r of n){if(r.length!==2)throw new TypeError("Each header pair must be a name/value tuple");this.append(r[0],r[1])}}else for(let n of Object.keys(t)){let r=t[n];this.append(n,r)}}else throw new TypeError("Provided initializer must be an object")}get(t){t=`${t}`,Ct(t);let a=rt(this[U],t);return a===void 0?null:this[U][a].join(", ")}forEach(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:void 0,n=Za(this),r=0;for(;r<n.length;){var o=n[r];let s=o[0],i=o[1];t.call(a,i,s,this),n=Za(this),r++}}set(t,a){t=`${t}`,a=`${a}`,Ct(t),Vr(a);let n=rt(this[U],t);this[U][n!==void 0?n:t]=[a]}append(t,a){t=`${t}`,a=`${a}`,Ct(t),Vr(a);let n=rt(this[U],t);n!==void 0?this[U][n].push(a):this[U][t]=[a]}has(t){return t=`${t}`,Ct(t),rt(this[U],t)!==void 0}delete(t){t=`${t}`,Ct(t);let a=rt(this[U],t);a!==void 0&&delete this[U][a]}raw(){return this[U]}keys(){return Qa(this,"key")}values(){return Qa(this,"value")}[Symbol.iterator](){return Qa(this,"key+value")}};ee.prototype.entries=ee.prototype[Symbol.iterator];Object.defineProperty(ee.prototype,Symbol.toStringTag,{value:"Headers",writable:!1,enumerable:!1,configurable:!0});Object.defineProperties(ee.prototype,{get:{enumerable:!0},forEach:{enumerable:!0},set:{enumerable:!0},append:{enumerable:!0},has:{enumerable:!0},delete:{enumerable:!0},keys:{enumerable:!0},values:{enumerable:!0},entries:{enumerable:!0}});function Za(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"key+value";return Object.keys(e[U]).sort().map(t==="key"?function(n){return n.toLowerCase()}:t==="value"?function(n){return e[U][n].join(", ")}:function(n){return[n.toLowerCase(),e[U][n].join(", ")]})}var Xa=Symbol("internal");function Qa(e,t){let a=Object.create(er);return a[Xa]={target:e,kind:t,index:0},a}var er=Object.setPrototypeOf({next(){if(!this||Object.getPrototypeOf(this)!==er)throw new TypeError("Value of `this` is not a HeadersIterator");var e=this[Xa];let t=e.target,a=e.kind,n=e.index,r=Za(t,a),o=r.length;return n>=o?{value:void 0,done:!0}:(this[Xa].index=n+1,{value:r[n],done:!1})}},Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));Object.defineProperty(er,Symbol.toStringTag,{value:"HeadersIterator",writable:!1,enumerable:!1,configurable:!0});function ki(e){let t=Object.assign({__proto__:null},e[U]),a=rt(e[U],"Host");return a!==void 0&&(t[a]=t[a][0]),t}function Fi(e){let t=new ee;for(let a of Object.keys(e))if(!Qr.test(a))if(Array.isArray(e[a]))for(let n of e[a])Ja.test(n)||(t[U][a]===void 0?t[U][a]=[n]:t[U][a].push(n));else Ja.test(e[a])||(t[U][a]=[e[a]]);return t}var ve=Symbol("Response internals"),ji=Fr.STATUS_CODES,X=class e{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};w.call(this,t,a);let n=a.status||200,r=new ee(a.headers);if(t!=null&&!r.has("Content-Type")){let o=Gr(t);o&&r.append("Content-Type",o)}this[ve]={url:a.url,status:n,statusText:a.statusText||ji[n],headers:r,counter:a.counter}}get url(){return this[ve].url||""}get status(){return this[ve].status}get ok(){return this[ve].status>=200&&this[ve].status<300}get redirected(){return this[ve].counter>0}get statusText(){return this[ve].statusText}get headers(){return this[ve].headers}clone(){return new e(Hr(this),{url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected})}};w.mixIn(X.prototype);Object.defineProperties(X.prototype,{url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}});Object.defineProperty(X.prototype,Symbol.toStringTag,{value:"Response",writable:!1,enumerable:!1,configurable:!0});var fe=Symbol("Request internals"),zi=ta.URL||jr.URL,Hi=ta.parse,Gi=ta.format;function Wa(e){return/^[a-zA-Z][a-zA-Z\d+\-.]*:/.exec(e)&&(e=new zi(e).toString()),Hi(e)}var $i="destroy"in ue.Readable.prototype;function ea(e){return typeof e=="object"&&typeof e[fe]=="object"}function Qi(e){let t=e&&typeof e=="object"&&Object.getPrototypeOf(e);return!!(t&&t.constructor.name==="AbortSignal")}var we=class e{constructor(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n;ea(t)?n=Wa(t.url):(t&&t.href?n=Wa(t.href):n=Wa(`${t}`),t={});let r=a.method||t.method||"GET";if(r=r.toUpperCase(),(a.body!=null||ea(t)&&t.body!==null)&&(r==="GET"||r==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");let o=a.body!=null?a.body:ea(t)&&t.body!==null?Hr(t):null;w.call(this,o,{timeout:a.timeout||t.timeout||0,size:a.size||t.size||0});let s=new ee(a.headers||t.headers||{});if(o!=null&&!s.has("Content-Type")){let u=Gr(o);u&&s.append("Content-Type",u)}let i=ea(t)?t.signal:null;if("signal"in a&&(i=a.signal),i!=null&&!Qi(i))throw new TypeError("Expected signal to be an instanceof AbortSignal");this[fe]={method:r,redirect:a.redirect||t.redirect||"follow",headers:s,parsedURL:n,signal:i},this.follow=a.follow!==void 0?a.follow:t.follow!==void 0?t.follow:20,this.compress=a.compress!==void 0?a.compress:t.compress!==void 0?t.compress:!0,this.counter=a.counter||t.counter||0,this.agent=a.agent||t.agent}get method(){return this[fe].method}get url(){return Gi(this[fe].parsedURL)}get headers(){return this[fe].headers}get redirect(){return this[fe].redirect}get signal(){return this[fe].signal}clone(){return new e(this)}};w.mixIn(we.prototype);Object.defineProperty(we.prototype,Symbol.toStringTag,{value:"Request",writable:!1,enumerable:!1,configurable:!0});Object.defineProperties(we.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0}});function Wi(e){let t=e[fe].parsedURL,a=new ee(e[fe].headers);if(a.has("Accept")||a.set("Accept","*/*"),!t.protocol||!t.hostname)throw new TypeError("Only absolute URLs are supported");if(!/^https?:$/.test(t.protocol))throw new TypeError("Only HTTP(S) protocols are supported");if(e.signal&&e.body instanceof ue.Readable&&!$i)throw new Error("Cancellation of streamed requests with AbortSignal is not supported in node < 8");let n=null;if(e.body==null&&/^(POST|PUT)$/i.test(e.method)&&(n="0"),e.body!=null){let o=$r(e);typeof o=="number"&&(n=String(o))}n&&a.set("Content-Length",n),a.has("User-Agent")||a.set("User-Agent","node-fetch/1.0 (+https://github.com/bitinn/node-fetch)"),e.compress&&!a.has("Accept-Encoding")&&a.set("Accept-Encoding","gzip,deflate");let r=e.agent;return typeof r=="function"&&(r=r(t)),Object.assign({},t,{method:e.method,headers:ki(a),agent:r})}function nt(e){Error.call(this,e),this.type="aborted",this.message=e,Error.captureStackTrace(this,this.constructor)}nt.prototype=Object.create(Error.prototype);nt.prototype.constructor=nt;nt.prototype.name="AbortError";var Dt=ta.URL||jr.URL,kr=ue.PassThrough,Ki=function(t,a){let n=new Dt(a).hostname,r=new Dt(t).hostname;return n===r||n[n.length-r.length-1]==="."&&n.endsWith(r)},Yi=function(t,a){let n=new Dt(a).protocol,r=new Dt(t).protocol;return n===r};function Te(e,t){if(!Te.Promise)throw new Error("native promise missing, set fetch.Promise to your favorite alternative");return w.Promise=Te.Promise,new Te.Promise(function(a,n){let r=new we(e,t),o=Wi(r),s=(o.protocol==="https:"?Li:Fr).request,i=r.signal,u=null,p=function(){let b=new nt("The user aborted a request.");n(b),r.body&&r.body instanceof ue.Readable&&Ka(r.body,b),!(!u||!u.body)&&u.body.emit("error",b)};if(i&&i.aborted){p();return}let y=function(){p(),m()},c=s(o),d;i&&i.addEventListener("abort",y);function m(){c.abort(),i&&i.removeEventListener("abort",y),clearTimeout(d)}r.timeout&&c.once("socket",function(l){d=setTimeout(function(){n(new L(`network timeout at: ${r.url}`,"request-timeout")),m()},r.timeout)}),c.on("error",function(l){n(new L(`request to ${r.url} failed, reason: ${l.message}`,"system",l)),u&&u.body&&Ka(u.body,l),m()}),Ji(c,function(l){i&&i.aborted||u&&u.body&&Ka(u.body,l)}),parseInt(process.version.substring(1))<14&&c.on("socket",function(l){l.addListener("close",function(b){let S=l.listenerCount("data")>0;if(u&&S&&!b&&!(i&&i.aborted)){let I=new Error("Premature close");I.code="ERR_STREAM_PREMATURE_CLOSE",u.body.emit("error",I)}})}),c.on("response",function(l){clearTimeout(d);let b=Fi(l.headers);if(Te.isRedirect(l.statusCode)){let M=b.get("Location"),P=null;try{P=M===null?null:new Dt(M,r.url).toString()}catch{if(r.redirect!=="manual"){n(new L(`uri requested responds with an invalid redirect URL: ${M}`,"invalid-redirect")),m();return}}switch(r.redirect){case"error":n(new L(`uri requested responds with a redirect, redirect mode is set to error: ${r.url}`,"no-redirect")),m();return;case"manual":if(P!==null)try{b.set("Location",P)}catch(_){n(_)}break;case"follow":if(P===null)break;if(r.counter>=r.follow){n(new L(`maximum redirect reached at: ${r.url}`,"max-redirect")),m();return}let A={headers:new ee(r.headers),follow:r.follow,counter:r.counter+1,agent:r.agent,compress:r.compress,method:r.method,body:r.body,signal:r.signal,timeout:r.timeout,size:r.size};if(!Ki(r.url,P)||!Yi(r.url,P))for(let _ of["authorization","www-authenticate","cookie","cookie2"])A.headers.delete(_);if(l.statusCode!==303&&r.body&&$r(r)===null){n(new L("Cannot follow redirect with body being a readable stream","unsupported-redirect")),m();return}(l.statusCode===303||(l.statusCode===301||l.statusCode===302)&&r.method==="POST")&&(A.method="GET",A.body=void 0,A.headers.delete("content-length")),a(Te(new we(P,A))),m();return}}l.once("end",function(){i&&i.removeEventListener("abort",y)});let S=l.pipe(new kr),I={url:r.url,status:l.statusCode,statusText:l.statusMessage,headers:b,size:r.size,timeout:r.timeout,counter:r.counter},R=b.get("Content-Encoding");if(!r.compress||r.method==="HEAD"||R===null||l.statusCode===204||l.statusCode===304){u=new X(S,I),a(u);return}let f={flush:ke.Z_SYNC_FLUSH,finishFlush:ke.Z_SYNC_FLUSH};if(R=="gzip"||R=="x-gzip"){S=S.pipe(ke.createGunzip(f)),u=new X(S,I),a(u);return}if(R=="deflate"||R=="x-deflate"){let M=l.pipe(new kr);M.once("data",function(P){(P[0]&15)===8?S=S.pipe(ke.createInflate()):S=S.pipe(ke.createInflateRaw()),u=new X(S,I),a(u)}),M.on("end",function(){u||(u=new X(S,I),a(u))});return}if(R=="br"&&typeof ke.createBrotliDecompress=="function"){S=S.pipe(ke.createBrotliDecompress()),u=new X(S,I),a(u);return}u=new X(S,I),a(u)}),Vi(c,r)})}function Ji(e,t){let a;e.on("socket",function(n){a=n}),e.on("response",function(n){let r=n.headers;r["transfer-encoding"]==="chunked"&&!r["content-length"]&&n.once("close",function(o){if(a&&a.listenerCount("data")>0&&!o){let i=new Error("Premature close");i.code="ERR_STREAM_PREMATURE_CLOSE",t(i)}})})}function Ka(e,t){e.destroy?e.destroy(t):(e.emit("error",t),e.end())}Te.isRedirect=function(e){return e===301||e===302||e===303||e===307||e===308};Te.Promise=global.Promise;Wr.exports=pe=Te;Object.defineProperty(pe,"__esModule",{value:!0});pe.default=pe;pe.Headers=ee;pe.Request=we;pe.Response=X;pe.FetchError=L;pe.AbortError=nt});var Ut=E((Fe,Yr)=>{var _t=Kr(),Zi=_t.default||_t,aa=function(e,t){return/^\/\//.test(e)&&(e="https:"+e),Zi.call(this,e,t)};aa.ponyfill=!0;Yr.exports=Fe=aa;Fe.fetch=aa;Fe.Headers=_t.Headers;Fe.Request=_t.Request;Fe.Response=_t.Response;Fe.default=aa});var tr=E(ra=>{"use strict";Object.defineProperty(ra,"__esModule",{value:!0});ra.isJSON=void 0;function Xi(e){if(e){let t=ts(e);if(!t)return!1;if(t.subtype==="json"||t.suffix==="json"||t.suffix&&/\bjson\b/i.test(t.suffix)||t.subtype&&/\bjson\b/i.test(t.subtype))return!0}return!1}ra.isJSON=Xi;var es=/^([A-Za-z0-9][A-Za-z0-9!#$&^_-]{0,126})\/([A-Za-z0-9][A-Za-z0-9!#$&^_.+-]{0,126});?$/;function ts(e){let t=e.indexOf(";"),a=t!==-1?e.slice(0,t).trim():e.trim(),n=es.exec(a.toLowerCase().toLowerCase());if(!n)return;let r=n[1],o=n[2],s,i=o.lastIndexOf("+");return i!==-1&&(s=o.substring(i+1),o=o.substring(0,i)),{type:r,subtype:o,suffix:s}}});var en=E(na=>{"use strict";Object.defineProperty(na,"__esModule",{value:!0});na.useFetch=void 0;var it=require("react"),as=Et(),Jr=Re(),Zr=Ut(),rs=tr(),Xr=Ue();async function ns(e){if(!e.ok)throw new Error(e.statusText);let t=e.headers.get("content-type");return t&&(0,rs.isJSON)(t)?await e.json():await e.text()}function os(e){return{data:e,hasMore:!1}}function is(e,t){let{parseResponse:a,mapResult:n,initialData:r,execute:o,keepPreviousData:s,onError:i,onData:u,onWillExecute:p,failureToastOptions:y,...c}=t||{},d={initialData:r,execute:o,keepPreviousData:s,onError:i,onData:u,onWillExecute:p,failureToastOptions:y},m=(0,Jr.useLatest)(a||ns),l=(0,Jr.useLatest)(n||os),b=(0,it.useRef)(),S=(0,it.useRef)(),I=typeof e=="function"?e({page:0}):void 0;(!b.current||typeof S.current>"u"||S.current!==I)&&(b.current=e),S.current=I;let R=(0,it.useRef)(),f=(0,it.useCallback)((A,_)=>async q=>{let ie=await(0,Zr.fetch)(A(q),{signal:R.current?.signal,..._}),V=await m.current(ie);return l.current?.(V)},[m,l]),M=(0,it.useCallback)(async(A,_)=>{let q=await(0,Zr.fetch)(A,{signal:R.current?.signal,..._}),ie=await m.current(q);return l.current(ie)?.data},[m,l]),P=(0,it.useMemo)(()=>S.current?f:M,[S,M,f]);return(0,as.useCachedPromise)(P,[b.current,c],{...d,internal_cacheKeySuffix:S.current+(0,Xr.hash)(l.current)+(0,Xr.hash)(m.current),abortable:R})}na.useFetch=is});var oa=E(te=>{"use strict";var ss=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(te,"__esModule",{value:!0});te.defaultParsing=te.handleOutput=te.getSpawnedResult=te.getSpawnedPromise=void 0;var us=require("node:buffer"),rn=ss(require("node:stream")),ps=require("node:util"),ls=require("signal-exit");function cs(e,{timeout:t}={}){let a=new Promise((i,u)=>{e.on("exit",(p,y)=>{i({exitCode:p,signal:y,timedOut:!1})}),e.on("error",p=>{u(p)}),e.stdin&&e.stdin.on("error",p=>{u(p)})});if(t===0||t===void 0)return a;let n,r=new Promise((i,u)=>{n=setTimeout(()=>{e.kill("SIGTERM"),u(Object.assign(new Error("Timed out"),{timedOut:!0,signal:"SIGTERM"}))},t)}),o=a.finally(()=>{clearTimeout(n)}),s=(0,ls.onExit)(()=>{e.kill()});return Promise.race([r,o]).finally(()=>s())}te.getSpawnedPromise=cs;var ar=class extends Error{constructor(){super("The output is too big"),this.name="MaxBufferError"}},ys=(0,ps.promisify)(rn.default.pipeline);function ds(e){let{encoding:t}=e,a=t==="buffer",n=new rn.default.PassThrough({objectMode:!1});t&&t!=="buffer"&&n.setEncoding(t);let r=0,o=[];return n.on("data",s=>{o.push(s),r+=s.length}),n.getBufferedValue=()=>a?Buffer.concat(o,r):o.join(""),n.getBufferedLength=()=>r,n}async function tn(e,t){let a=ds(t);return await new Promise((n,r)=>{let o=s=>{s&&a.getBufferedLength()<=us.constants.MAX_LENGTH&&(s.bufferedData=a.getBufferedValue()),r(s)};(async()=>{try{await ys(e,a),n()}catch(s){o(s)}})(),a.on("data",()=>{a.getBufferedLength()>1e3*1e3*80&&o(new ar)})}),a.getBufferedValue()}async function an(e,t){e.destroy();try{return await t}catch(a){return a.bufferedData}}async function Ss({stdout:e,stderr:t},{encoding:a},n){let r=tn(e,{encoding:a}),o=tn(t,{encoding:a});try{return await Promise.all([n,r,o])}catch(s){return Promise.all([{error:s,exitCode:null,signal:s.signal,timedOut:s.timedOut||!1},an(e,r),an(t,o)])}}te.getSpawnedResult=Ss;function bs(e){let t=typeof e=="string"?`
`:10,a=typeof e=="string"?"\r":13;return e[e.length-1]===t&&(e=e.slice(0,-1)),e[e.length-1]===a&&(e=e.slice(0,-1)),e}function Is(e,t){return e.stripFinalNewline?bs(t):t}te.handleOutput=Is;var gs=({timedOut:e,timeout:t,signal:a,exitCode:n})=>e?`timed out after ${t} milliseconds`:a!=null?`was killed with ${a}`:n!=null?`failed with exit code ${n}`:"failed",Ms=({stdout:e,stderr:t,error:a,signal:n,exitCode:r,command:o,timedOut:s,options:i,parentError:u})=>{let y=`Command ${gs({timedOut:s,timeout:i?.timeout,signal:n,exitCode:r})}: ${o}`,c=a?`${y}
${a.message}`:y,d=[c,t,e].filter(Boolean).join(`
`);return a?a.originalMessage=a.message:a=u,a.message=d,a.shortMessage=c,a.command=o,a.exitCode=r,a.signal=n,a.stdout=e,a.stderr=t,"bufferedData"in a&&delete a.bufferedData,a};function ms({stdout:e,stderr:t,error:a,exitCode:n,signal:r,timedOut:o,command:s,options:i,parentError:u}){if(a||n!==0||r!==null)throw Ms({error:a,exitCode:n,signal:r,stdout:e,stderr:t,command:s,timedOut:o,options:i,parentError:u});return e}te.defaultParsing=ms});var on=E(st=>{"use strict";var Rs=st&&st.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(st,"__esModule",{value:!0});st.useExec=void 0;var As=Rs(require("node:child_process")),nn=require("react"),fs=Et(),Ps=Re(),vt=oa(),Es=/ +/g;function Cs(e,t){if(t)return[e,...t];let a=[];for(let n of e.trim().split(Es)){let r=a[a.length-1];r&&r.endsWith("\\")?a[a.length-1]=`${r.slice(0,-1)} ${n}`:a.push(n)}return a}function hs(e,t,a){let{parseOutput:n,input:r,onData:o,onWillExecute:s,initialData:i,execute:u,keepPreviousData:p,onError:y,failureToastOptions:c,...d}=Array.isArray(t)?a||{}:t||{},m={initialData:i,execute:u,keepPreviousData:p,onError:y,onData:o,onWillExecute:s,failureToastOptions:c},l=(0,nn.useRef)(),b=(0,Ps.useLatest)(n||vt.defaultParsing),S=(0,nn.useCallback)(async(I,R,f,M)=>{let[P,...A]=Cs(I,R),_=[P,...A].join(" "),q={stripFinalNewline:!0,...f,timeout:f?.timeout||1e4,signal:l.current?.signal,encoding:f?.encoding===null?"buffer":f?.encoding||"utf8",env:{PATH:"/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin",...process.env,...f?.env}},ie=As.default.spawn(P,A,q),V=(0,vt.getSpawnedPromise)(ie,q);M&&ie.stdin.end(M);let[{error:v,exitCode:se,signal:ce,timedOut:C},Q,Rt]=await(0,vt.getSpawnedResult)(ie,q,V),Fa=(0,vt.handleOutput)(q,Q),ni=(0,vt.handleOutput)(q,Rt);return b.current({stdout:Fa,stderr:ni,error:v,exitCode:se,signal:ce,timedOut:C,command:_,options:q,parentError:new Error})},[b]);return(0,fs.useCachedPromise)(S,[e,Array.isArray(t)?t:[],d,r],{...m,abortable:l})}st.useExec=hs});var ln=E(ut=>{"use strict";var sa=ut&&ut.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ut,"__esModule",{value:!0});ut.useStreamJSON=void 0;var Ds=require("@raycast/api"),sn=sa(Ut()),Ot=require("node:fs"),rr=require("node:fs/promises"),ia=require("node:path"),un=require("node:stream/promises"),Tt=require("react"),xs=sa(require("stream-chain")),_s=require("stream-json"),Us=sa(require("stream-json/filters/Pick")),vs=sa(require("stream-json/streamers/StreamArray")),pn=tr(),Ts=Et(),ws=Ue();async function wt(e,t,a){if(typeof e=="object"||e.startsWith("http://")||e.startsWith("https://"))return await Os(e,t,a);if(e.startsWith("file://"))return await Bs((0,ia.normalize)(decodeURIComponent(new URL(e).pathname)),t,a?.signal?a.signal:void 0);throw new Error("Only HTTP(S) or file URLs are supported")}async function Os(e,t,a){let n=await(0,sn.default)(e,a);if(!n.ok)throw new Error("Failed to fetch URL");if(!(0,pn.isJSON)(n.headers.get("content-type")))throw new Error("URL does not return JSON");if(!n.body)throw new Error("Failed to retrieve expected JSON content: Response body is missing or inaccessible.");await(0,un.pipeline)(n.body,(0,Ot.createWriteStream)(t),a?.signal?{signal:a.signal}:void 0)}async function Bs(e,t,a){await(0,un.pipeline)((0,Ot.createReadStream)(e),(0,Ot.createWriteStream)(t),a?{signal:a}:void 0)}async function Ls(e,t,a,n,r){let o=(0,ia.join)(t,a);try{await(0,rr.stat)(t)}catch{(0,Ot.mkdirSync)(t,{recursive:!0}),await wt(e,o,r);return}if(n){await wt(e,o,r);return}let s;try{s=await(0,rr.stat)(o)}catch{await wt(e,o,r);return}if(typeof e=="object"||e.startsWith("http://")||e.startsWith("https://")){let i=await(0,sn.default)(e,{...r,method:"HEAD"});if(!i.ok)throw new Error("Could not fetch URL");if(!(0,pn.isJSON)(i.headers.get("content-type")))throw new Error("URL does not return JSON");let u=Date.parse(i.headers.get("last-modified")??"");if(s.size===0||Number.isNaN(u)||u>s.mtimeMs){await wt(e,o,r);return}}else if(e.startsWith("file://"))try{(await(0,rr.stat)((0,ia.normalize)(decodeURIComponent(new URL(e).pathname)))).mtimeMs>s.mtimeMs&&await wt(e,o,r)}catch{throw new Error("Source file could not be read")}else throw new Error("Only HTTP(S) or file URLs are supported")}async function*qs(e,t,a,n,r,o){let s=[],i=new xs.default([(0,Ot.createReadStream)(e),n?Us.default.withParser({filter:n}):(0,_s.parser)(),new vs.default,u=>o?.(u.value)??u.value]);a?.addEventListener("abort",()=>{i.destroy()});try{for await(let u of i){if(a?.aborted)return[];(!r||r(u))&&s.push(u),s.length>=t&&(yield s,s=[])}}catch(u){throw i.destroy(),u}return s.length>0&&(yield s),[]}function Ns(e,t){let{initialData:a,execute:n,keepPreviousData:r,onError:o,onData:s,onWillExecute:i,failureToastOptions:u,dataPath:p,filter:y,transform:c,pageSize:d=20,...m}=t??{},l=(0,Tt.useRef)(),b=(0,Tt.useRef)(),S={initialData:a,execute:n,keepPreviousData:r,onError:o,onData:s,onWillExecute:i,failureToastOptions:u},I=(0,Tt.useRef)(null),R=(0,Tt.useRef)(null),f=(0,Tt.useRef)(!1);return(0,Ts.useCachedPromise)((M,P,A,_,q,ie)=>async({page:V})=>{let v=(0,ws.hash)(M)+".json",se=Ds.environment.supportPath;if(V===0){R.current?.abort(),R.current=new AbortController;let Q=(0,ia.join)(se,v),Rt=!!(l.current&&l.current!==M&&b.current&&b.current===Q);l.current=M,b.current=Q,await Ls(M,se,v,Rt,{...A,signal:R.current?.signal}),I.current=qs(Q,P,R.current?.signal,_,q,ie)}if(!I.current)return{hasMore:f.current,data:[]};let{value:ce,done:C}=await I.current.next();return f.current=!C,{hasMore:f.current,data:ce??[]}},[e,d,m,p,y,c],S)}ut.useStreamJSON=Ns});var or=E(Se=>{"use strict";var nr=Se&&Se.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Se,"__esModule",{value:!0});Se.baseExecuteSQL=Se.isPermissionError=Se.PermissionError=void 0;var Vs=require("node:fs"),ua=require("node:fs/promises"),ks=nr(require("node:os")),cn=nr(require("node:child_process")),yn=nr(require("node:path")),pa=oa(),Fs=Ue(),ca=class extends Error{constructor(t){super(t),this.name="PermissionError"}};Se.PermissionError=ca;function js(e){return e instanceof Error&&e.name==="PermissionError"}Se.isPermissionError=js;async function zs(e,t,a){if(!(0,Vs.existsSync)(e))throw new Error("The database does not exist");let n=a?.signal,r,o=cn.default.spawn("sqlite3",["--json","--readonly",e,t],{signal:n}),s=(0,pa.getSpawnedPromise)(o),[{error:i,exitCode:u,signal:p},y,c]=await(0,pa.getSpawnedResult)(o,{encoding:"utf-8"},s);if(la(n),c.match("(5)")||c.match("(14)")){if(!r){let d=yn.default.join(ks.default.tmpdir(),"useSQL",(0,Fs.hash)(e));await(0,ua.mkdir)(d,{recursive:!0}),la(n),r=yn.default.join(d,"db.db"),await(0,ua.copyFile)(e,r),await(0,ua.writeFile)(r+"-shm",""),await(0,ua.writeFile)(r+"-wal",""),la(n)}o=cn.default.spawn("sqlite3",["--json","--readonly","--vfs","unix-none",r,t],{signal:n}),s=(0,pa.getSpawnedPromise)(o),[{error:i,exitCode:u,signal:p},y,c]=await(0,pa.getSpawnedResult)(o,{encoding:"utf-8"},s),la(n)}if(i||u!==0||p!==null)throw c.includes("authorization denied")?new ca("You do not have permission to access the database."):new Error(c||"Unknown error");return JSON.parse(y.trim()||"[]")}Se.baseExecuteSQL=zs;function la(e){if(e?.aborted){let t=new Error("aborted");throw t.name="AbortError",t}}});var Sn=E(pt=>{"use strict";var Hs=pt&&pt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(pt,"__esModule",{value:!0});pt.useSQL=void 0;var be=require("react/jsx-runtime"),k=require("@raycast/api"),Gs=require("node:fs"),$s=Hs(require("node:os")),ya=require("react"),Qs=et(),Ws=Re(),Ks=At(),ir=or();function Ys(e,t,a){let{permissionPriming:n,...r}=a||{},[o,s]=(0,ya.useState)(),i=(0,Ws.useLatest)(a||{}),u=(0,ya.useRef)(),p=(0,ya.useCallback)(c=>{console.error(c);let d=c instanceof Error&&c.message.includes("authorization denied")?new ir.PermissionError("You do not have permission to access the database."):c;(0,ir.isPermissionError)(d)?s((0,be.jsx)(Js,{priming:i.current.permissionPriming})):i.current.onError?i.current.onError(d):k.environment.launchType!==k.LaunchType.Background&&(0,Ks.showFailureToast)(d,{title:"Cannot query the data"})},[i]),y=(0,ya.useMemo)(()=>{if(!(0,Gs.existsSync)(e))throw new Error("The database does not exist");return async(c,d)=>{let m=u.current?.signal;return(0,ir.baseExecuteSQL)(c,d,{signal:m})}},[e]);return{...(0,Qs.usePromise)(y,[e,t],{...r,onError:p}),permissionView:o}}pt.useSQL=Ys;var dn=parseInt($s.default.release().split(".")[0])>=22,sr=dn?"Settings":"Preferences";function Js(e){let t=dn?{title:"Open System Settings -> Privacy",target:"x-apple.systempreferences:com.apple.preference.security?Privacy_AllFiles"}:{title:"Open System Preferences -> Security",target:"x-apple.systempreferences:com.apple.preference.security?Privacy_AllFiles"};return k.environment.commandMode==="menu-bar"?(0,be.jsxs)(k.MenuBarExtra,{icon:k.Icon.Warning,title:k.environment.commandName,children:[(0,be.jsx)(k.MenuBarExtra.Item,{title:"Raycast needs full disk access",tooltip:`You can revert this access in ${sr} whenever you want`}),e.priming?(0,be.jsx)(k.MenuBarExtra.Item,{title:e.priming,tooltip:`You can revert this access in ${sr} whenever you want`}):null,(0,be.jsx)(k.MenuBarExtra.Separator,{}),(0,be.jsx)(k.MenuBarExtra.Item,{title:t.title,onAction:()=>(0,k.open)(t.target)})]}):(0,be.jsx)(k.List,{children:(0,be.jsx)(k.List.EmptyView,{icon:{source:{light:"https://raycast.com/uploads/extensions-utils-security-permissions-light.png",dark:"https://raycast.com/uploads/extensions-utils-security-permissions-dark.png"}},title:"Raycast needs full disk access.",description:`${e.priming?e.priming+`
`:""}You can revert this access in ${sr} whenever you want.`,actions:(0,be.jsx)(k.ActionPanel,{children:(0,be.jsx)(k.Action.Open,{...t})})})})}});var In=E(lt=>{"use strict";Object.defineProperty(lt,"__esModule",{value:!0});lt.useForm=lt.FormValidation=void 0;var Ee=require("react"),bn=Re(),pr;(function(e){e.Required="required"})(pr||(lt.FormValidation=pr={}));function ur(e,t){if(e){if(typeof e=="function")return e(t);if(e===pr.Required){let a=typeof t<"u"&&t!==null;if(a)switch(typeof t){case"string":a=t.length>0;break;case"object":Array.isArray(t)?a=t.length>0:t instanceof Date&&(a=t.getTime()>0);break;default:break}if(!a)return"The item is required"}}}function Zs(e){let{onSubmit:t,validation:a,initialValues:n={}}=e,[r,o]=(0,Ee.useState)(n),[s,i]=(0,Ee.useState)({}),u=(0,Ee.useRef)({}),p=(0,bn.useLatest)(a||{}),y=(0,bn.useLatest)(t),c=(0,Ee.useCallback)(I=>{u.current[I]?.focus()},[u]),d=(0,Ee.useCallback)(async I=>{let R=!1;for(let[M,P]of Object.entries(p.current)){let A=ur(P,I[M]);A&&(R||(R={},c(M)),R[M]=A)}if(R)return i(R),!1;let f=await y.current(I);return typeof f=="boolean"?f:!0},[p,y,c]),m=(0,Ee.useCallback)((I,R)=>{i(f=>({...f,[I]:R}))},[i]),l=(0,Ee.useCallback)(function(I,R){o(f=>({...f,[I]:typeof R=="function"?R(f[I]):R}))},[o]),b=(0,Ee.useMemo)(()=>new Proxy({},{get(I,R){let f=p.current[R],M=r[R];return{onChange(P){s[R]&&(ur(f,P)||m(R,void 0)),l(R,P)},onBlur(P){let A=ur(f,P.target.value);A&&m(R,A)},error:s[R],id:R,value:typeof M>"u"?null:M,ref:P=>{u.current[R]=P}}}}),[s,p,m,r,u,l]),S=(0,Ee.useCallback)(I=>{i({}),Object.entries(u.current).forEach(([R,f])=>{I?.[R]||f?.reset()}),I&&o(I)},[o,i,u]);return{handleSubmit:d,setValidationError:m,setValue:l,values:r,itemProps:b,focus:c,reset:S}}lt.useForm=Zs});var Mn=E(da=>{"use strict";Object.defineProperty(da,"__esModule",{value:!0});da.useAI=void 0;var gn=require("react"),Xs=require("@raycast/api"),eu=et();function tu(e,t={}){let{creativity:a,stream:n,model:r,...o}=t,[s,i]=(0,gn.useState)(""),u=(0,gn.useRef)(),{isLoading:p,error:y,revalidate:c}=(0,eu.usePromise)(async(d,m,l)=>{i("");let b=Xs.AI.ask(d,{creativity:m,model:r,signal:u.current?.signal});l===!1?i(await b):(b.on("data",S=>{i(I=>I+S)}),await b)},[e,a,n],{...o,abortable:u});return{isLoading:p,data:s,error:y,revalidate:c}}da.useAI=tu});var An=E(Sa=>{"use strict";Object.defineProperty(Sa,"__esModule",{value:!0});Sa.useFrecencySorting=void 0;var lr=require("react"),mn=Re(),au=Zt(),ru=10,Rn=1440*60*1e3,nu=Math.log(2)/(ru*Rn),ou={Default:100,Embed:0,Bookmark:140};function iu(e){let t=Date.now(),a=e?e.lastVisited:0,n=e?e.frecency:0,r=(t-a)/Rn,o=ou.Default*Math.exp(-nu*r),s=n+o;return{lastVisited:t,frecency:s}}var su=e=>{if(process.env.NODE_ENV!=="production"&&(typeof e!="object"||!e||!("id"in e)||typeof e.id!="string"))throw new Error("Specify a key function or make sure your items have an 'id' property");return e.id};function uu(e,t){let a=(0,mn.useLatest)(t?.key||su),n=(0,mn.useLatest)(t?.sortUnvisited),[r,o]=(0,au.useCachedState)(`raycast_frecency_${t?.namespace}`,{}),s=(0,lr.useCallback)(async function(y){let c=a.current(y);o(d=>{let m=d[c],l=iu(m);return{...d,[c]:l}})},[a,o]),i=(0,lr.useCallback)(async function(y){let c=a.current(y);o(d=>{let m={...d};return delete m[c],m})},[a,o]);return{data:(0,lr.useMemo)(()=>e?e.sort((p,y)=>{let c=r[a.current(p)],d=r[a.current(y)];return c&&!d?-1:!c&&d?1:c&&d?d.frecency-c.frecency:n.current?n.current(p,y):0}):[],[r,e,a,n]),visitItem:s,resetRanking:i}}Sa.useFrecencySorting=uu});var En=E(ba=>{"use strict";Object.defineProperty(ba,"__esModule",{value:!0});ba.useLocalStorage=void 0;var cr=require("@raycast/api"),fn=At(),Pn=Ue(),pu=et();function lu(e,t){let{data:a,isLoading:n,mutate:r}=(0,pu.usePromise)(async i=>{let u=await cr.LocalStorage.getItem(i);return typeof u<"u"?JSON.parse(u,Pn.reviver):t},[e]);async function o(i){try{await r(cr.LocalStorage.setItem(e,JSON.stringify(i,Pn.replacer)),{optimisticUpdate(u){return u}})}catch(u){await(0,fn.showFailureToast)(u,{title:"Failed to set value in local storage"})}}async function s(){try{await r(cr.LocalStorage.removeItem(e),{optimisticUpdate(){}})}catch(i){await(0,fn.showFailureToast)(i,{title:"Failed to remove value from local storage"})}}return{value:a,setValue:o,removeValue:s,isLoading:n}}ba.useLocalStorage=lu});var _n=E(ct=>{"use strict";Object.defineProperty(ct,"__esModule",{value:!0});ct.slightlyLighterColor=ct.slightlyDarkerColor=void 0;function cu(e){let t=0,a=0,n=0;if(e.length===4)t=parseInt(`${e[1]}${e[1]}`,16),a=parseInt(`${e[2]}${e[2]}`,16),n=parseInt(`${e[3]}${e[3]}`,16);else if(e.length===7)t=parseInt(`${e[1]}${e[2]}`,16),a=parseInt(`${e[3]}${e[4]}`,16),n=parseInt(`${e[5]}${e[6]}`,16);else throw new Error(`Malformed hex color: ${e}`);return{r:t,g:a,b:n}}function yu({r:e,g:t,b:a}){let n=e.toString(16),r=t.toString(16),o=a.toString(16);return n.length===1&&(n=`0${n}`),r.length===1&&(r=`0${r}`),o.length===1&&(o=`0${o}`),`#${n}${r}${o}`}function du({r:e,g:t,b:a}){e/=255,t/=255,a/=255;let n=Math.min(e,t,a),r=Math.max(e,t,a),o=r-n,s=0,i=0,u=0;return o===0?s=0:r===e?s=(t-a)/o%6:r===t?s=(a-e)/o+2:s=(e-t)/o+4,s=Math.round(s*60),s<0&&(s+=360),u=(r+n)/2,i=o===0?0:o/(1-Math.abs(2*u-1)),i=+(i*100).toFixed(1),u=+(u*100).toFixed(1),{h:s,s:i,l:u}}function Su({h:e,s:t,l:a}){t/=100,a/=100;let n=(1-Math.abs(2*a-1))*t,r=n*(1-Math.abs(e/60%2-1)),o=a-n/2,s=0,i=0,u=0;return e>=0&&e<60?(s=n,i=r,u=0):e>=60&&e<120?(s=r,i=n,u=0):e>=120&&e<180?(s=0,i=n,u=r):e>=180&&e<240?(s=0,i=r,u=n):e>=240&&e<300?(s=r,i=0,u=n):e>=300&&e<360&&(s=n,i=0,u=r),s=Math.round((s+o)*255),i=Math.round((i+o)*255),u=Math.round((u+o)*255),{r:s,g:i,b:u}}function Cn(e){return du(cu(e))}function hn(e){return yu(Su(e))}function Dn(e,t,a){return t<a?e<t?t:e>a?a:e:e<a?a:e>t?t:e}var xn=12;function bu(e){let t=Cn(e);return hn({h:t.h,s:t.s,l:Dn(t.l-xn,0,100)})}ct.slightlyDarkerColor=bu;function Iu(e){let t=Cn(e);return hn({h:t.h,s:t.s,l:Dn(t.l+xn,0,100)})}ct.slightlyLighterColor=Iu});var Tn=E(Ia=>{"use strict";Object.defineProperty(Ia,"__esModule",{value:!0});Ia.getAvatarIcon=void 0;var Un=_n();function yt(e,t){let a=e.charCodeAt(t);if(Number.isNaN(a))return["",t];if(a<55296||a>57343)return[e.charAt(t),t];if(55296<=a&&a<=56319){if(e.length<=t+1)throw new Error("High surrogate without following low surrogate");let r=e.charCodeAt(t+1);if(56320>r||r>57343)throw new Error("High surrogate without following low surrogate");return[e.charAt(t)+e.charAt(t+1),t+1]}if(t===0)throw new Error("Low surrogate without preceding high surrogate");let n=e.charCodeAt(t-1);if(55296>n||n>56319)throw new Error("Low surrogate without preceding high surrogate");return[e.charAt(t+1),t+1]}var vn=["#DC829A","#D64854","#D47600","#D36CDD","#52A9E4","#7871E8","#70920F","#43B93A","#EB6B3E","#26B795","#D85A9B","#A067DC","#BD9500","#5385D9"];function gu(e,t){let a=e.trim().split(" "),n;if(a.length==1&&yt(a[0],0)[0])n=yt(a[0],0)[0];else if(a.length>1){let u=yt(a[0],0)[0]||"",p=yt(a[a.length-1],0)[0]??"";n=u+p}else n="";let r;if(t?.background)r=t?.background;else{let u=0,[p,y]=yt(n,0);for(;p;)u+=p.charCodeAt(0),[p,y]=yt(n,y+1);let c=u%vn.length;r=vn[c]}let s=50-0;return`data:image/svg+xml,${`<svg width="100px" height="100px">
  ${t?.gradient!==!1?`<defs>
      <linearGradient id="Gradient" x1="0.25" x2="0.75" y1="0" y2="1">
        <stop offset="0%" stop-color="${(0,Un.slightlyLighterColor)(r)}"/>
        <stop offset="50%" stop-color="${r}"/>
        <stop offset="100%" stop-color="${(0,Un.slightlyDarkerColor)(r)}"/>
      </linearGradient>
  </defs>`:""}
      <circle cx="50" cy="50" r="${s}" fill="${t?.gradient!==!1?"url(#Gradient)":r}" />
      ${n?`<text x="50" y="80" font-size="${s-1}" font-family="Inter, sans-serif" text-anchor="middle" fill="white">${n.toUpperCase()}</text>`:""}
    </svg>
  `.replaceAll(`
`,"")}`}Ia.getAvatarIcon=gu});var On=E(ga=>{"use strict";Object.defineProperty(ga,"__esModule",{value:!0});ga.getFavicon=void 0;var wn=require("@raycast/api"),Mu=require("url");function mu(e,t){try{let n=(typeof e=="string"?new Mu.URL(e):e).hostname;return{source:`https://www.google.com/s2/favicons?sz=${t?.size??64}&domain=${n}`,fallback:t?.fallback??wn.Icon.Link,mask:t?.mask}}catch(a){return console.error(a),wn.Icon.Link}}ga.getFavicon=mu});var qn=E(Ma=>{"use strict";Object.defineProperty(Ma,"__esModule",{value:!0});Ma.getProgressIcon=void 0;var Bn=require("@raycast/api");function Ln(e,t,a,n){let r=(n-90)*Math.PI/180;return{x:e+a*Math.cos(r),y:t+a*Math.sin(r)}}function Ru(e,t,a,n,r){let o=Ln(e,t,a,r),s=Ln(e,t,a,n),i=r-n<=180?"0":"1";return["M",o.x,o.y,"A",a,a,0,i,0,s.x,s.y].join(" ")}function Au(e,t=Bn.Color.Red,a){let n=a?.background||(Bn.environment.appearance==="light"?"black":"white"),r=a?.backgroundOpacity||.1,o=10,i=50-5-o/2;return`data:image/svg+xml,${`<svg width="100px" height="100px">
      <circle cx="50" cy="50" r="${i}" stroke-width="${o}" stroke="${e<1?n:t}" opacity="${e<1?r:"1"}" fill="none" />
      ${e>0&&e<1?`<path d="${Ru(50,50,i,0,e*360)}" stroke="${t}" stroke-width="${o}" fill="none" />`:""}
    </svg>
  `.replaceAll(`
`,"")}`}Ma.getProgressIcon=Au});var Nn=E(Ce=>{"use strict";var fu=Ce&&Ce.__createBinding||(Object.create?(function(e,t,a,n){n===void 0&&(n=a);var r=Object.getOwnPropertyDescriptor(t,a);(!r||("get"in r?!t.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,r)}):(function(e,t,a,n){n===void 0&&(n=a),e[n]=t[a]})),yr=Ce&&Ce.__exportStar||function(e,t){for(var a in e)a!=="default"&&!Object.prototype.hasOwnProperty.call(t,a)&&fu(t,e,a)};Object.defineProperty(Ce,"__esModule",{value:!0});yr(Tn(),Ce);yr(On(),Ce);yr(qn(),Ce)});var Vn=E(N=>{"use strict";Object.defineProperty(N,"__esModule",{value:!0});N.zoomService=N.slackService=N.linearService=N.jiraService=N.googleService=N.githubService=N.asanaService=void 0;var F=require("@raycast/api"),je=dr(),ma={asana:"1191201745684312",github:"7235fe8d42157f1f38c0",linear:"c8ff37b9225c3c9aefd7d66ea0e5b6f1",slack:"851756884692.5546927290212"},Oe=e=>`data:image/svg+xml,${e}`,ze={asana:Oe('<svg xmlns="http://www.w3.org/2000/svg" width="251" height="232" fill="none"><path fill="#F06A6A" d="M179.383 54.373c0 30.017-24.337 54.374-54.354 54.374-30.035 0-54.373-24.338-54.373-54.374C70.656 24.338 94.993 0 125.029 0c30.017 0 54.354 24.338 54.354 54.373ZM54.393 122.33C24.376 122.33.02 146.668.02 176.685c0 30.017 24.337 54.373 54.373 54.373 30.035 0 54.373-24.338 54.373-54.373 0-30.017-24.338-54.355-54.373-54.355Zm141.253 0c-30.035 0-54.373 24.338-54.373 54.374 0 30.035 24.338 54.373 54.373 54.373 30.017 0 54.374-24.338 54.374-54.373 0-30.036-24.338-54.374-54.374-54.374Z"/></svg>'),github:{source:Oe('<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>'),tintColor:F.Color.PrimaryText},google:Oe('<svg xmlns="http://www.w3.org/2000/svg" style="display:block" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/><path fill="none" d="M0 0h48v48H0z"/></svg>'),jira:Oe('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="2361" height="2500" viewBox="2.59 0 214.091 224"><linearGradient id="a" x1="102.4" x2="56.15" y1="218.63" y2="172.39" gradientTransform="matrix(1 0 0 -1 0 264)" gradientUnits="userSpaceOnUse"><stop offset=".18" stop-color="#0052cc"/><stop offset="1" stop-color="#2684ff"/></linearGradient><linearGradient xlink:href="#a" id="b" x1="114.65" x2="160.81" y1="85.77" y2="131.92"/><path fill="#2684ff" d="M214.06 105.73 117.67 9.34 108.33 0 35.77 72.56 2.59 105.73a8.89 8.89 0 0 0 0 12.54l66.29 66.29L108.33 224l72.55-72.56 1.13-1.12 32.05-32a8.87 8.87 0 0 0 0-12.59zm-105.73 39.39L75.21 112l33.12-33.12L141.44 112z"/><path fill="url(#a)" d="M108.33 78.88a55.75 55.75 0 0 1-.24-78.61L35.62 72.71l39.44 39.44z"/><path fill="url(#b)" d="m141.53 111.91-33.2 33.21a55.77 55.77 0 0 1 0 78.86L181 151.35z"/></svg>'),linear:{source:{light:Oe('<svg xmlns="http://www.w3.org/2000/svg" fill="#222326" width="200" height="200" viewBox="0 0 100 100"><path d="M1.22541 61.5228c-.2225-.9485.90748-1.5459 1.59638-.857L39.3342 97.1782c.6889.6889.0915 1.8189-.857 1.5964C20.0515 94.4522 5.54779 79.9485 1.22541 61.5228ZM.00189135 46.8891c-.01764375.2833.08887215.5599.28957165.7606L52.3503 99.7085c.2007.2007.4773.3075.7606.2896 2.3692-.1476 4.6938-.46 6.9624-.9259.7645-.157 1.0301-1.0963.4782-1.6481L2.57595 39.4485c-.55186-.5519-1.49117-.2863-1.648174.4782-.465915 2.2686-.77832 4.5932-.92588465 6.9624ZM4.21093 29.7054c-.16649.3738-.08169.8106.20765 1.1l64.77602 64.776c.2894.2894.7262.3742 1.1.2077 1.7861-.7956 3.5171-1.6927 5.1855-2.684.5521-.328.6373-1.0867.1832-1.5407L8.43566 24.3367c-.45409-.4541-1.21271-.3689-1.54074.1832-.99132 1.6684-1.88843 3.3994-2.68399 5.1855ZM12.6587 18.074c-.3701-.3701-.393-.9637-.0443-1.3541C21.7795 6.45931 35.1114 0 49.9519 0 77.5927 0 100 22.4073 100 50.0481c0 14.8405-6.4593 28.1724-16.7199 37.3375-.3903.3487-.984.3258-1.3542-.0443L12.6587 18.074Z"/></svg>'),dark:Oe('<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="200" height="200" viewBox="0 0 100 100"><path d="M1.22541 61.5228c-.2225-.9485.90748-1.5459 1.59638-.857L39.3342 97.1782c.6889.6889.0915 1.8189-.857 1.5964C20.0515 94.4522 5.54779 79.9485 1.22541 61.5228ZM.00189135 46.8891c-.01764375.2833.08887215.5599.28957165.7606L52.3503 99.7085c.2007.2007.4773.3075.7606.2896 2.3692-.1476 4.6938-.46 6.9624-.9259.7645-.157 1.0301-1.0963.4782-1.6481L2.57595 39.4485c-.55186-.5519-1.49117-.2863-1.648174.4782-.465915 2.2686-.77832 4.5932-.92588465 6.9624ZM4.21093 29.7054c-.16649.3738-.08169.8106.20765 1.1l64.77602 64.776c.2894.2894.7262.3742 1.1.2077 1.7861-.7956 3.5171-1.6927 5.1855-2.684.5521-.328.6373-1.0867.1832-1.5407L8.43566 24.3367c-.45409-.4541-1.21271-.3689-1.54074.1832-.99132 1.6684-1.88843 3.3994-2.68399 5.1855ZM12.6587 18.074c-.3701-.3701-.393-.9637-.0443-1.3541C21.7795 6.45931 35.1114 0 49.9519 0 77.5927 0 100 22.4073 100 50.0481c0 14.8405-6.4593 28.1724-16.7199 37.3375-.3903.3487-.984.3258-1.3542-.0443L12.6587 18.074Z" /></svg>')}},slack:Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="73 73 124 124"><style>.st0{fill:#e01e5a}.st1{fill:#36c5f0}.st2{fill:#2eb67d}.st3{fill:#ecb22e}</style><path d="M99.4 151.2c0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9h12.9v12.9zM105.9 151.2c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v32.3c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9v-32.3z" class="st0"/><path d="M118.8 99.4c-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v12.9h-12.9zM118.8 105.9c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H86.5c-7.1 0-12.9-5.8-12.9-12.9s5.8-12.9 12.9-12.9h32.3z" class="st1"/><path d="M170.6 118.8c0-7.1 5.8-12.9 12.9-12.9 7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9h-12.9v-12.9zM164.1 118.8c0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9V86.5c0-7.1 5.8-12.9 12.9-12.9 7.1 0 12.9 5.8 12.9 12.9v32.3z" class="st2"/><path d="M151.2 170.6c7.1 0 12.9 5.8 12.9 12.9 0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9v-12.9h12.9zM151.2 164.1c-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9h32.3c7.1 0 12.9 5.8 12.9 12.9 0 7.1-5.8 12.9-12.9 12.9h-32.3z" class="st3"/></svg>'),zoom:Oe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 351.845 80"><path d="M73.786 78.835H10.88A10.842 10.842 0 0 1 .833 72.122a10.841 10.841 0 0 1 2.357-11.85L46.764 16.7h-31.23C6.954 16.699 0 9.744 0 1.165h58.014c4.414 0 8.357 2.634 10.046 6.712a10.843 10.843 0 0 1-2.356 11.85L22.13 63.302h36.122c8.58 0 15.534 6.955 15.534 15.534Zm278.059-48.544C351.845 13.588 338.256 0 321.553 0c-8.934 0-16.975 3.89-22.524 10.063C293.48 3.89 285.44 0 276.505 0c-16.703 0-30.291 13.588-30.291 30.291v48.544c8.579 0 15.534-6.955 15.534-15.534v-33.01c0-8.137 6.62-14.757 14.757-14.757s14.757 6.62 14.757 14.757v33.01c0 8.58 6.955 15.534 15.534 15.534V30.291c0-8.137 6.62-14.757 14.757-14.757s14.758 6.62 14.758 14.757v33.01c0 8.58 6.954 15.534 15.534 15.534V30.291ZM238.447 40c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.908-40 40-40 40 17.909 40 40Zm-15.534 0c0-13.512-10.954-24.466-24.466-24.466S173.98 26.488 173.98 40s10.953 24.466 24.466 24.466S222.913 53.512 222.913 40Zm-70.68 0c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.909-40 40-40 40 17.909 40 40Zm-15.534 0c0-13.512-10.954-24.466-24.466-24.466S87.767 26.488 87.767 40s10.954 24.466 24.466 24.466S136.699 53.512 136.699 40Z" style="fill:#0b5cff"/></svg>')},Pu=e=>new je.OAuthService({client:new F.OAuth.PKCEClient({redirectMethod:F.OAuth.RedirectMethod.Web,providerName:"Asana",providerIcon:ze.asana,providerId:"asana",description:"Connect your Asana account"}),clientId:e.clientId??ma.asana,authorizeUrl:e.authorizeUrl??"https://asana.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://asana.oauth.raycast.com/token",refreshTokenUrl:e.refreshTokenUrl??"https://asana.oauth.raycast.com/refresh-token",scope:e.scope,personalAccessToken:e.personalAccessToken,onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});N.asanaService=Pu;var Eu=e=>new je.OAuthService({client:new F.OAuth.PKCEClient({redirectMethod:F.OAuth.RedirectMethod.Web,providerName:"GitHub",providerIcon:ze.github,providerId:"github",description:"Connect your GitHub account"}),clientId:e.clientId??ma.github,authorizeUrl:e.authorizeUrl??"https://github.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://github.oauth.raycast.com/token",refreshTokenUrl:e.refreshTokenUrl??"https://github.oauth.raycast.com/refresh-token",scope:e.scope,personalAccessToken:e.personalAccessToken,onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});N.githubService=Eu;var Cu=e=>new je.OAuthService({client:new F.OAuth.PKCEClient({redirectMethod:F.OAuth.RedirectMethod.AppURI,providerName:"Google",providerIcon:ze.google,providerId:"google",description:"Connect your Google account"}),clientId:e.clientId,authorizeUrl:e.authorizeUrl??"https://accounts.google.com/o/oauth2/v2/auth",tokenUrl:e.tokenUrl??"https://oauth2.googleapis.com/token",refreshTokenUrl:e.tokenUrl,scope:e.scope,personalAccessToken:e.personalAccessToken,bodyEncoding:e.bodyEncoding??"url-encoded",onAuthorize:e.onAuthorize,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});N.googleService=Cu;var hu=e=>new je.OAuthService({client:new F.OAuth.PKCEClient({redirectMethod:F.OAuth.RedirectMethod.Web,providerName:"Jira",providerIcon:ze.jira,providerId:"jira",description:"Connect your Jira account"}),clientId:e.clientId,authorizeUrl:e.authorizeUrl??"https://auth.atlassian.com/authorize",tokenUrl:e.tokenUrl??"https://auth.atlassian.com/oauth/token",refreshTokenUrl:e.refreshTokenUrl,scope:e.scope,personalAccessToken:e.personalAccessToken,onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});N.jiraService=hu;var Du=e=>new je.OAuthService({client:new F.OAuth.PKCEClient({redirectMethod:F.OAuth.RedirectMethod.Web,providerName:"Linear",providerIcon:ze.linear,providerId:"linear",description:"Connect your Linear account"}),clientId:e.clientId??ma.linear,authorizeUrl:e.authorizeUrl??"https://linear.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://linear.oauth.raycast.com/token",refreshTokenUrl:e.refreshTokenUrl??"https://linear.oauth.raycast.com/refresh-token",scope:e.scope,extraParameters:{actor:"user"},onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});N.linearService=Du;var xu=e=>new je.OAuthService({client:new F.OAuth.PKCEClient({redirectMethod:F.OAuth.RedirectMethod.Web,providerName:"Slack",providerIcon:ze.slack,providerId:"slack",description:"Connect your Slack account"}),clientId:e.clientId??ma.slack,authorizeUrl:e.authorizeUrl??"https://slack.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://slack.oauth.raycast.com/token",refreshTokenUrl:e.tokenUrl??"https://slack.oauth.raycast.com/refresh-token",scope:"",extraParameters:{user_scope:e.scope},personalAccessToken:e.personalAccessToken,bodyEncoding:e.tokenUrl?e.bodyEncoding??"url-encoded":"json",onAuthorize:e.onAuthorize,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser??(t=>({access_token:t.authed_user.access_token,scope:t.authed_user.scope}))});N.slackService=xu;var _u=e=>new je.OAuthService({client:new F.OAuth.PKCEClient({redirectMethod:F.OAuth.RedirectMethod.Web,providerName:"Zoom",providerIcon:ze.zoom,providerId:"zoom",description:"Connect your Zoom account"}),clientId:e.clientId,authorizeUrl:e.authorizeUrl??"https://zoom.us/oauth/authorize",tokenUrl:e.tokenUrl??"https://zoom.us/oauth/token",refreshTokenUrl:e.refreshTokenUrl,scope:e.scope,personalAccessToken:e.personalAccessToken,bodyEncoding:e.bodyEncoding??"url-encoded",onAuthorize:e.onAuthorize,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});N.zoomService=_u});var dr=E(dt=>{"use strict";var Uu=dt&&dt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(dt,"__esModule",{value:!0});dt.OAuthService=void 0;var kn=Uu(Ut()),He=Vn(),Ie=class{constructor(t){this.clientId=t.clientId,this.scope=Array.isArray(t.scope)?t.scope.join(" "):t.scope,this.personalAccessToken=t.personalAccessToken,this.bodyEncoding=t.bodyEncoding,this.client=t.client,this.extraParameters=t.extraParameters,this.authorizeUrl=t.authorizeUrl,this.tokenUrl=t.tokenUrl,this.refreshTokenUrl=t.refreshTokenUrl,this.onAuthorize=t.onAuthorize,this.tokenResponseParser=t.tokenResponseParser??(a=>a),this.tokenRefreshResponseParser=t.tokenRefreshResponseParser??(a=>a),this.authorize=this.authorize.bind(this)}async authorize(){let t=await this.client.getTokens();if(t?.accessToken){if(t.refreshToken&&t.isExpired()){let o=await this.refreshTokens({token:t.refreshToken});if(o)return await this.client.setTokens(o),o.access_token}return t.accessToken}let a=await this.client.authorizationRequest({endpoint:this.authorizeUrl,clientId:this.clientId,scope:this.scope,extraParameters:this.extraParameters}),{authorizationCode:n}=await this.client.authorize(a),r=await this.fetchTokens({authRequest:a,authorizationCode:n});return await this.client.setTokens(r),r.access_token}async fetchTokens({authRequest:t,authorizationCode:a}){let n;if(this.bodyEncoding==="url-encoded"){let s=new URLSearchParams;s.append("client_id",this.clientId),s.append("code",a),s.append("code_verifier",t.codeVerifier),s.append("grant_type","authorization_code"),s.append("redirect_uri",t.redirectURI),n={body:s}}else n={body:JSON.stringify({client_id:this.clientId,code:a,code_verifier:t.codeVerifier,grant_type:"authorization_code",redirect_uri:t.redirectURI}),headers:{"Content-Type":"application/json"}};let r=await(0,kn.default)(this.tokenUrl,{method:"POST",...n});if(!r.ok){let s=await r.text();throw console.error("fetch tokens error:",s),new Error(`Error while fetching tokens: ${r.status} (${r.statusText})
${s}`)}let o=this.tokenResponseParser(await r.json());return Array.isArray(o.scope)?{...o,scope:o.scope.join(" ")}:o}async refreshTokens({token:t}){let a;if(this.bodyEncoding==="url-encoded"){let r=new URLSearchParams;r.append("client_id",this.clientId),r.append("refresh_token",t),r.append("grant_type","refresh_token"),a={body:r}}else a={body:JSON.stringify({client_id:this.clientId,refresh_token:t,grant_type:"refresh_token"}),headers:{"Content-Type":"application/json"}};let n=await(0,kn.default)(this.refreshTokenUrl??this.tokenUrl,{method:"POST",...a});if(n.ok){let r=this.tokenRefreshResponseParser(await n.json());return r.refresh_token=r.refresh_token??t,r}else{let r=await n.text();console.error("refresh tokens error:",r),this.client.description=`${this.client.providerName} needs you to sign-in again. Press \u23CE or click the button below to continue.`,await this.client.removeTokens(),await this.authorize()}}};dt.OAuthService=Ie;Ie.asana=He.asanaService;Ie.github=He.githubService;Ie.google=He.googleService;Ie.jira=He.jiraService;Ie.linear=He.linearService;Ie.slack=He.slackService;Ie.zoom=He.zoomService});var Fn=E(St=>{"use strict";Object.defineProperty(St,"__esModule",{value:!0});St.getAccessToken=St.withAccessToken=void 0;var vu=require("react/jsx-runtime"),Tu=require("@raycast/api"),Be=null,Ge=null,Sr=null,br=null,Ir=null;function wu(e){return Tu.environment.commandMode==="no-view"?t=>async n=>{if(!Be){Be=e.personalAccessToken??await e.authorize(),Ge=e.personalAccessToken?"personal":"oauth";let r=(await e.client?.getTokens())?.idToken;e.onAuthorize&&await Promise.resolve(e.onAuthorize({token:Be,type:Ge,idToken:r}))}return t(n)}:t=>{let a=n=>{e.personalAccessToken?(Be=e.personalAccessToken,Ge="personal"):(Sr||(Sr=gr(e.authorize())),Be=Sr.read(),Ge="oauth");let r;return e.client&&(br||(br=gr(e.client.getTokens())),r=br.read()?.idToken),!Ir&&e.onAuthorize&&(Ir=gr(Promise.resolve(e.onAuthorize({token:Be,type:Ge,idToken:r})))),Ir?.read(),(0,vu.jsx)(t,{...n})};return a.displayName=`withAccessToken(${t.displayName||t.name})`,a}}St.withAccessToken=wu;function Ou(){if(!Be||!Ge)throw new Error("getAccessToken must be used when authenticated (eg. used inside `withAccessToken`)");return{token:Be,type:Ge}}St.getAccessToken=Ou;function gr(e){let t="pending",a,n=e.then(o=>{t="success",a=o},o=>{t="error",a=o});return{read:()=>{switch(t){case"pending":throw n;case"error":throw a;default:return a}}}}});var zn=E(Le=>{"use strict";var Bu=Le&&Le.__createBinding||(Object.create?(function(e,t,a,n){n===void 0&&(n=a);var r=Object.getOwnPropertyDescriptor(t,a);(!r||("get"in r?!t.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,r)}):(function(e,t,a,n){n===void 0&&(n=a),e[n]=t[a]})),jn=Le&&Le.__exportStar||function(e,t){for(var a in e)a!=="default"&&!Object.prototype.hasOwnProperty.call(t,a)&&Bu(t,e,a)};Object.defineProperty(Le,"__esModule",{value:!0});jn(dr(),Le);jn(Fn(),Le)});var Wn=E(ae=>{"use strict";var Hn=ae&&ae.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ae,"__esModule",{value:!0});ae.createDeeplink=ae.createExtensionDeeplink=ae.createScriptCommandDeeplink=ae.DeeplinkType=void 0;var mr=require("@raycast/api"),Lu=Hn(require("node:fs")),qu=Hn(require("node:path")),Mr;(function(e){e.ScriptCommand="script-command",e.Extension="extension"})(Mr||(ae.DeeplinkType=Mr={}));function Gn(){return mr.environment.raycastVersion.includes("alpha")?"raycastinternal://":"raycast://"}function Nu(){let e=JSON.parse(Lu.default.readFileSync(qu.default.join(mr.environment.assetsPath,"..","package.json"),"utf8"));return e.owner||e.author}function $n(e){let t=`${Gn()}script-commands/${e.command}`;if(e.arguments){let a="";for(let n of e.arguments)a+="&arguments="+encodeURIComponent(n);t+="?"+a.substring(1)}return t}ae.createScriptCommandDeeplink=$n;function Qn(e){let t=Nu(),a=mr.environment.extensionName;"ownerOrAuthorName"in e&&"extensionName"in e&&(t=e.ownerOrAuthorName,a=e.extensionName);let n=`${Gn()}extensions/${t}/${a}/${e.command}`,r="";return e.launchType&&(r+="&launchType="+encodeURIComponent(e.launchType)),e.arguments&&(r+="&arguments="+encodeURIComponent(JSON.stringify(e.arguments))),e.context&&(r+="&context="+encodeURIComponent(JSON.stringify(e.context))),e.fallbackText&&(r+="&fallbackText="+encodeURIComponent(e.fallbackText)),r&&(n+="?"+r.substring(1)),n}ae.createExtensionDeeplink=Qn;function Vu(e){return e.type===Mr.ScriptCommand?$n(e):Qn(e)}ae.createDeeplink=Vu});var Kn=E(Ra=>{"use strict";Object.defineProperty(Ra,"__esModule",{value:!0});Ra.executeSQL=void 0;var ku=or();function Fu(e,t){return(0,ku.baseExecuteSQL)(e,t)}Ra.executeSQL=Fu});var Yn=E(bt=>{"use strict";var ju=bt&&bt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(bt,"__esModule",{value:!0});bt.runAppleScript=void 0;var zu=ju(require("node:child_process")),Bt=oa();async function Hu(e,t,a){let{humanReadableOutput:n,language:r,timeout:o,...s}=Array.isArray(t)?a||{}:t||{},i=n!==!1?[]:["-ss"];r==="JavaScript"&&i.push("-l","JavaScript"),Array.isArray(t)&&i.push("-",...t);let u=zu.default.spawn("osascript",i,{...s,env:{PATH:"/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"}}),p=(0,Bt.getSpawnedPromise)(u,{timeout:o??1e4});u.stdin.end(e);let[{error:y,exitCode:c,signal:d,timedOut:m},l,b]=await(0,Bt.getSpawnedResult)(u,{encoding:"utf8"},p),S=(0,Bt.handleOutput)({stripFinalNewline:!0},l),I=(0,Bt.handleOutput)({stripFinalNewline:!0},b);return(0,Bt.defaultParsing)({stdout:S,stderr:I,error:y,exitCode:c,signal:d,timedOut:m,command:"osascript",options:a,parentError:new Error})}bt.runAppleScript=Hu});var Jn=E(fa=>{"use strict";Object.defineProperty(fa,"__esModule",{value:!0});fa.withCache=void 0;var Gu=require("@raycast/api"),Aa=Ue();function $u(e,t){let a=new Gu.Cache({namespace:(0,Aa.hash)(e)}),n=async(...r)=>{let o=(0,Aa.hash)(r||[])+t?.internal_cacheKeySuffix,s=a.get(o);if(s){let{data:u,timestamp:p}=JSON.parse(s,Aa.reviver);if(!(t?.maxAge&&Date.now()-p>t.maxAge)&&(!t?.validate||t.validate(u)))return u}let i=await e(...r);return a.set(o,JSON.stringify({data:i,timestamp:Date.now()},Aa.replacer)),i};return n.clearCache=()=>{a.clear()},n}fa.withCache=$u});var $e=E(x=>{"use strict";var Qu=x&&x.__createBinding||(Object.create?(function(e,t,a,n){n===void 0&&(n=a);var r=Object.getOwnPropertyDescriptor(t,a);(!r||("get"in r?!t.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,r)}):(function(e,t,a,n){n===void 0&&(n=a),e[n]=t[a]})),O=x&&x.__exportStar||function(e,t){for(var a in e)a!=="default"&&!Object.prototype.hasOwnProperty.call(t,a)&&Qu(t,e,a)};Object.defineProperty(x,"__esModule",{value:!0});O(et(),x);O(Zt(),x);O(Et(),x);O(en(),x);O(on(),x);O(ln(),x);O(Sn(),x);O(In(),x);O(Mn(),x);O(An(),x);O(En(),x);O(Nn(),x);O(zn(),x);O(Wn(),x);O(Kn(),x);O(Yn(),x);O(At(),x);O(Jn(),x)});var z={};Ze(z,{default:()=>po.default});var po,_a=ja(()=>{j(z,require("formdata-polyfill/esm.min.js"));po=T(require("formdata-polyfill/esm.min.js"))});var K={};Ze(K,{default:()=>So.default});var So,Pr=ja(()=>{j(K,require("fetch-blob/from.js"));So=T(require("fetch-blob/from.js"))});var Io={};Ze(Io,{toFormData:()=>Sp});function dp(e){let t=e.match(/\bfilename=("(.*?)"|([^()<>@,;:\\"/[\]?={}\s\t]+))($|;\s)/i);if(!t)return;let a=t[2]||t[3]||"",n=a.slice(a.lastIndexOf("\\")+1);return n=n.replace(/%22/g,'"'),n=n.replace(/&#(\d{4});/g,(r,o)=>String.fromCharCode(o)),n}async function Sp(e,t){if(!/multipart/i.test(t))throw new TypeError("Failed to fetch");let a=t.match(/boundary=(?:"([^"]+)"|([^;]+))/i);if(!a)throw new TypeError("no or bad content-type header, no multipart boundary");let n=new Er(a[1]||a[2]),r,o,s,i,u,p,y=[],c=new z.FormData,d=I=>{s+=S.decode(I,{stream:!0})},m=I=>{y.push(I)},l=()=>{let I=new K.File(y,p,{type:u});c.append(i,I)},b=()=>{c.append(i,s)},S=new TextDecoder("utf-8");S.decode(),n.onPartBegin=function(){n.onPartData=d,n.onPartEnd=b,r="",o="",s="",i="",u="",p=null,y.length=0},n.onHeaderField=function(I){r+=S.decode(I,{stream:!0})},n.onHeaderValue=function(I){o+=S.decode(I,{stream:!0})},n.onHeaderEnd=function(){if(o+=S.decode(),r=r.toLowerCase(),r==="content-disposition"){let I=o.match(/\bname=("([^"]*)"|([^()<>@,;:\\"/[\]?={}\s\t]+))/i);I&&(i=I[2]||I[3]||""),p=dp(o),p&&(n.onPartData=m,n.onPartEnd=l)}else r==="content-type"&&(u=o);o="",r=""};for await(let I of e)n.write(I);return n.end(),c}var ge,D,bo,Ve,va,Ta,up,Vt,pp,lp,cp,yp,Ke,Er,go=ja(()=>{Pr();_a();ge=0,D={START_BOUNDARY:ge++,HEADER_FIELD_START:ge++,HEADER_FIELD:ge++,HEADER_VALUE_START:ge++,HEADER_VALUE:ge++,HEADER_VALUE_ALMOST_DONE:ge++,HEADERS_ALMOST_DONE:ge++,PART_DATA_START:ge++,PART_DATA:ge++,END:ge++},bo=1,Ve={PART_BOUNDARY:bo,LAST_BOUNDARY:bo*=2},va=10,Ta=13,up=32,Vt=45,pp=58,lp=97,cp=122,yp=e=>e|32,Ke=()=>{},Er=class{constructor(t){this.index=0,this.flags=0,this.onHeaderEnd=Ke,this.onHeaderField=Ke,this.onHeadersEnd=Ke,this.onHeaderValue=Ke,this.onPartBegin=Ke,this.onPartData=Ke,this.onPartEnd=Ke,this.boundaryChars={},t=`\r
--`+t;let a=new Uint8Array(t.length);for(let n=0;n<t.length;n++)a[n]=t.charCodeAt(n),this.boundaryChars[a[n]]=!0;this.boundary=a,this.lookbehind=new Uint8Array(this.boundary.length+8),this.state=D.START_BOUNDARY}write(t){let a=0,n=t.length,r=this.index,{lookbehind:o,boundary:s,boundaryChars:i,index:u,state:p,flags:y}=this,c=this.boundary.length,d=c-1,m=t.length,l,b,S=M=>{this[M+"Mark"]=a},I=M=>{delete this[M+"Mark"]},R=(M,P,A,_)=>{(P===void 0||P!==A)&&this[M](_&&_.subarray(P,A))},f=(M,P)=>{let A=M+"Mark";A in this&&(P?(R(M,this[A],a,t),delete this[A]):(R(M,this[A],t.length,t),this[A]=0))};for(a=0;a<n;a++)switch(l=t[a],p){case D.START_BOUNDARY:if(u===s.length-2){if(l===Vt)y|=Ve.LAST_BOUNDARY;else if(l!==Ta)return;u++;break}else if(u-1===s.length-2){if(y&Ve.LAST_BOUNDARY&&l===Vt)p=D.END,y=0;else if(!(y&Ve.LAST_BOUNDARY)&&l===va)u=0,R("onPartBegin"),p=D.HEADER_FIELD_START;else return;break}l!==s[u+2]&&(u=-2),l===s[u+2]&&u++;break;case D.HEADER_FIELD_START:p=D.HEADER_FIELD,S("onHeaderField"),u=0;case D.HEADER_FIELD:if(l===Ta){I("onHeaderField"),p=D.HEADERS_ALMOST_DONE;break}if(u++,l===Vt)break;if(l===pp){if(u===1)return;f("onHeaderField",!0),p=D.HEADER_VALUE_START;break}if(b=yp(l),b<lp||b>cp)return;break;case D.HEADER_VALUE_START:if(l===up)break;S("onHeaderValue"),p=D.HEADER_VALUE;case D.HEADER_VALUE:l===Ta&&(f("onHeaderValue",!0),R("onHeaderEnd"),p=D.HEADER_VALUE_ALMOST_DONE);break;case D.HEADER_VALUE_ALMOST_DONE:if(l!==va)return;p=D.HEADER_FIELD_START;break;case D.HEADERS_ALMOST_DONE:if(l!==va)return;R("onHeadersEnd"),p=D.PART_DATA_START;break;case D.PART_DATA_START:p=D.PART_DATA,S("onPartData");case D.PART_DATA:if(r=u,u===0){for(a+=d;a<m&&!(t[a]in i);)a+=c;a-=d,l=t[a]}if(u<s.length)s[u]===l?(u===0&&f("onPartData",!0),u++):u=0;else if(u===s.length)u++,l===Ta?y|=Ve.PART_BOUNDARY:l===Vt?y|=Ve.LAST_BOUNDARY:u=0;else if(u-1===s.length)if(y&Ve.PART_BOUNDARY){if(u=0,l===va){y&=~Ve.PART_BOUNDARY,R("onPartEnd"),R("onPartBegin"),p=D.HEADER_FIELD_START;break}}else y&Ve.LAST_BOUNDARY&&l===Vt?(R("onPartEnd"),p=D.END,y=0):u=0;if(u>0)o[u-1]=l;else if(r>0){let M=new Uint8Array(o.buffer,o.byteOffset,o.byteLength);R("onPartData",0,r,M),r=0,S("onPartData"),a--}break;case D.END:break;default:throw new Error(`Unexpected state entered: ${p}`)}f("onHeaderField"),f("onHeaderValue"),f("onPartData"),this.index=u,this.state=p,this.flags=y}end(){if(this.state===D.HEADER_FIELD_START&&this.index===0||this.state===D.PART_DATA&&this.index===this.boundary.length)this.onPartEnd();else if(this.state!==D.END)throw new Error("MultipartParser.end(): stream ended unexpectedly")}}});var Vl={};Ze(Vl,{BranchForm:()=>ri,default:()=>Nl});module.exports=li(Vl);var h=require("@raycast/api"),ka=T($e()),ai=require("react");var Fo=require("@octokit/rest"),jo=require("@raycast/api"),zo=T($e());var Pa=JSON;var Zn=e=>e.toUpperCase(),Xn=e=>{let t={};return e.forEach((a,n)=>{t[n]=a}),t};var eo=(e,t,a)=>e.document?e:{document:e,variables:t,requestHeaders:a,signal:void 0},to=(e,t,a)=>e.query?e:{query:e,variables:t,requestHeaders:a,signal:void 0},ao=(e,t)=>e.documents?e:{documents:e,requestHeaders:t,signal:void 0};var Ea=require("graphql"),ro=e=>{let t,a=e.definitions.filter(n=>n.kind==="OperationDefinition");return a.length===1&&(t=a[0]?.name?.value),t},Qe=e=>{if(typeof e=="string"){let a;try{let n=(0,Ea.parse)(e);a=ro(n)}catch{}return{query:e,operationName:a}}let t=ro(e);return{query:(0,Ea.print)(e),operationName:t}};var We=class e extends Error{constructor(t,a){let n=`${e.extractMessage(t)}: ${JSON.stringify({response:t,request:a})}`;super(n),Object.setPrototypeOf(this,e.prototype),this.response=t,this.request=a,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,e)}static extractMessage(t){return t.errors?.[0]?.message??`GraphQL Error (Code: ${t.status})`}};var Ne=T(Ut(),1);var Wu="connection_init",Ku="connection_ack",oo="ping",io="pong",Yu="subscribe",Ju="next",Zu="error",so="complete",qe=class e{get type(){return this._type}get id(){return this._id}get payload(){return this._payload}constructor(t,a,n){this._type=t,this._payload=a,this._id=n}get text(){let t={type:this.type};return this.id!=null&&this.id!=null&&(t.id=this.id),this.payload!=null&&this.payload!=null&&(t.payload=this.payload),JSON.stringify(t)}static parse(t,a){let{type:n,payload:r,id:o}=JSON.parse(t);return new e(n,a(r),o)}},Ca=class{constructor(t,{onInit:a,onAcknowledged:n,onPing:r,onPong:o}){this.socketState={acknowledged:!1,lastRequestId:0,subscriptions:{}},this.socket=t,t.addEventListener("open",async s=>{this.socketState.acknowledged=!1,this.socketState.subscriptions={},t.send(ep(a?await a():null).text)}),t.addEventListener("close",s=>{this.socketState.acknowledged=!1,this.socketState.subscriptions={}}),t.addEventListener("error",s=>{console.error(s)}),t.addEventListener("message",s=>{try{let i=Xu(s.data);switch(i.type){case Ku:{this.socketState.acknowledged?console.warn("Duplicate CONNECTION_ACK message ignored"):(this.socketState.acknowledged=!0,n&&n(i.payload));return}case oo:{r?r(i.payload).then(c=>t.send(no(c).text)):t.send(no(null).text);return}case io:{o&&o(i.payload);return}}if(!this.socketState.acknowledged||i.id===void 0||i.id===null||!this.socketState.subscriptions[i.id])return;let{query:u,variables:p,subscriber:y}=this.socketState.subscriptions[i.id];switch(i.type){case Ju:{!i.payload.errors&&i.payload.data&&y.next&&y.next(i.payload.data),i.payload.errors&&y.error&&y.error(new We({...i.payload,status:200},{query:u,variables:p}));return}case Zu:{y.error&&y.error(new We({errors:i.payload,status:200},{query:u,variables:p}));return}case so:{y.complete&&y.complete(),delete this.socketState.subscriptions[i.id];return}}}catch(i){console.error(i),t.close(1006)}t.close(4400,"Unknown graphql-ws message.")})}makeSubscribe(t,a,n,r){let o=(this.socketState.lastRequestId++).toString();return this.socketState.subscriptions[o]={query:t,variables:r,subscriber:n},this.socket.send(ap(o,{query:t,operationName:a,variables:r}).text),()=>{this.socket.send(rp(o).text),delete this.socketState.subscriptions[o]}}rawRequest(t,a){return new Promise((n,r)=>{let o;this.rawSubscribe(t,{next:(s,i)=>o={data:s,extensions:i},error:r,complete:()=>n(o)},a)})}request(t,a){return new Promise((n,r)=>{let o;this.subscribe(t,{next:s=>o=s,error:r,complete:()=>n(o)},a)})}subscribe(t,a,n){let{query:r,operationName:o}=Qe(t);return this.makeSubscribe(r,o,a,n)}rawSubscribe(t,a,n){return this.makeSubscribe(t,void 0,a,n)}ping(t){this.socket.send(tp(t).text)}close(){this.socket.close(1e3)}};Ca.PROTOCOL="graphql-transport-ws";function Xu(e,t=a=>a){return qe.parse(e,t)}function ep(e){return new qe(Wu,e)}function tp(e){return new qe(oo,e,void 0)}function no(e){return new qe(io,e,void 0)}function ap(e,t){return new qe(Yu,t,e)}function rp(e){return new qe(so,void 0,e)}var It=e=>{let t={};return e&&(typeof Headers<"u"&&e instanceof Headers||Ne&&Ne.Headers&&e instanceof Ne.Headers?t=Xn(e):Array.isArray(e)?e.forEach(([a,n])=>{a&&n!==void 0&&(t[a]=n)}):t=e),t},uo=e=>e.replace(/([\s,]|#[^\n\r]+)+/g," ").trim(),np=e=>{if(!Array.isArray(e.query)){let n=e,r=[`query=${encodeURIComponent(uo(n.query))}`];return e.variables&&r.push(`variables=${encodeURIComponent(n.jsonSerializer.stringify(n.variables))}`),n.operationName&&r.push(`operationName=${encodeURIComponent(n.operationName)}`),r.join("&")}if(typeof e.variables<"u"&&!Array.isArray(e.variables))throw new Error("Cannot create query with given variable type, array expected");let t=e,a=e.query.reduce((n,r,o)=>(n.push({query:uo(r),variables:t.variables?t.jsonSerializer.stringify(t.variables[o]):void 0}),n),[]);return`query=${encodeURIComponent(t.jsonSerializer.stringify(a))}`},op=e=>async t=>{let{url:a,query:n,variables:r,operationName:o,fetch:s,fetchOptions:i,middleware:u}=t,p={...t.headers},y="",c;e==="POST"?(c=ip(n,r,o,i.jsonSerializer),typeof c=="string"&&(p["Content-Type"]="application/json")):y=np({query:n,variables:r,operationName:o,jsonSerializer:i.jsonSerializer??Pa});let d={method:e,headers:p,body:c,...i},m=a,l=d;if(u){let b=await Promise.resolve(u({...d,url:a,operationName:o,variables:r})),{url:S,...I}=b;m=S,l=I}return y&&(m=`${m}?${y}`),await s(m,l)},ha=class{constructor(t,a={}){this.url=t,this.requestConfig=a,this.rawRequest=async(...n)=>{let[r,o,s]=n,i=to(r,o,s),{headers:u,fetch:p=Ne.default,method:y="POST",requestMiddleware:c,responseMiddleware:d,...m}=this.requestConfig,{url:l}=this;i.signal!==void 0&&(m.signal=i.signal);let{operationName:b}=Qe(i.query);return Rr({url:l,query:i.query,variables:i.variables,headers:{...It(Ar(u)),...It(i.requestHeaders)},operationName:b,fetch:p,method:y,fetchOptions:m,middleware:c}).then(S=>(d&&d(S),S)).catch(S=>{throw d&&d(S),S})}}async request(t,...a){let[n,r]=a,o=eo(t,n,r),{headers:s,fetch:i=Ne.default,method:u="POST",requestMiddleware:p,responseMiddleware:y,...c}=this.requestConfig,{url:d}=this;o.signal!==void 0&&(c.signal=o.signal);let{query:m,operationName:l}=Qe(o.document);return Rr({url:d,query:m,variables:o.variables,headers:{...It(Ar(s)),...It(o.requestHeaders)},operationName:l,fetch:i,method:u,fetchOptions:c,middleware:p}).then(b=>(y&&y(b),b.data)).catch(b=>{throw y&&y(b),b})}batchRequests(t,a){let n=ao(t,a),{headers:r,...o}=this.requestConfig;n.signal!==void 0&&(o.signal=n.signal);let s=n.documents.map(({document:u})=>Qe(u).query),i=n.documents.map(({variables:u})=>u);return Rr({url:this.url,query:s,variables:i,headers:{...It(Ar(r)),...It(n.requestHeaders)},operationName:void 0,fetch:this.requestConfig.fetch??Ne.default,method:this.requestConfig.method||"POST",fetchOptions:o,middleware:this.requestConfig.requestMiddleware}).then(u=>(this.requestConfig.responseMiddleware&&this.requestConfig.responseMiddleware(u),u.data)).catch(u=>{throw this.requestConfig.responseMiddleware&&this.requestConfig.responseMiddleware(u),u})}setHeaders(t){return this.requestConfig.headers=t,this}setHeader(t,a){let{headers:n}=this.requestConfig;return n?n[t]=a:this.requestConfig.headers={[t]:a},this}setEndpoint(t){return this.url=t,this}},Rr=async e=>{let{query:t,variables:a,fetchOptions:n}=e,r=op(Zn(e.method??"post")),o=Array.isArray(e.query),s=await r(e),i=await sp(s,n.jsonSerializer??Pa),u=Array.isArray(i)?!i.some(({data:y})=>!y):!!i.data,p=Array.isArray(i)||!i.errors||Array.isArray(i.errors)&&!i.errors.length||n.errorPolicy==="all"||n.errorPolicy==="ignore";if(s.ok&&p&&u){let{errors:y,...c}=(Array.isArray(i),i),d=n.errorPolicy==="ignore"?c:i;return{...o?{data:d}:d,headers:s.headers,status:s.status}}else{let y=typeof i=="string"?{error:i}:i;throw new We({...y,status:s.status,headers:s.headers},{query:t,variables:a})}};var ip=(e,t,a,n)=>{let r=n??Pa;if(!Array.isArray(e))return r.stringify({query:e,variables:t,operationName:a});if(typeof t<"u"&&!Array.isArray(t))throw new Error("Cannot create request body with given variable type, array expected");let o=e.reduce((s,i,u)=>(s.push({query:i,variables:t?t[u]:void 0}),s),[]);return r.stringify(o)},sp=async(e,t)=>{let a;return e.headers.forEach((n,r)=>{r.toLowerCase()==="content-type"&&(a=n)}),a&&(a.toLowerCase().startsWith("application/json")||a.toLowerCase().startsWith("application/graphql+json")||a.toLowerCase().startsWith("application/graphql-response+json"))?t.parse(await e.text()):e.text()},Ar=e=>typeof e=="function"?e():e;var To=T(require("node:http"),1),wo=T(require("node:https"),1),Je=T(require("node:zlib"),1),Z=T(require("node:stream"),1),jt=require("node:buffer");var Lt={};Ze(Lt,{default:()=>Da.default});j(Lt,require("data-uri-to-buffer"));var Da=T(require("data-uri-to-buffer"));var re=T(require("node:stream"),1),De=require("node:util"),Y=require("node:buffer");var qt={};Ze(qt,{default:()=>xa.default});j(qt,require("fetch-blob"));var xa=T(require("fetch-blob"));_a();var he=class extends Error{constructor(t,a){super(t),Error.captureStackTrace(this,this.constructor),this.type=a}get name(){return this.constructor.name}get[Symbol.toStringTag](){return this.constructor.name}};var H=class extends he{constructor(t,a,n){super(t,a),n&&(this.code=this.errno=n.code,this.erroredSysCall=n.syscall)}};var Ua=Symbol.toStringTag,fr=e=>typeof e=="object"&&typeof e.append=="function"&&typeof e.delete=="function"&&typeof e.get=="function"&&typeof e.getAll=="function"&&typeof e.has=="function"&&typeof e.set=="function"&&typeof e.sort=="function"&&e[Ua]==="URLSearchParams",Nt=e=>e&&typeof e=="object"&&typeof e.arrayBuffer=="function"&&typeof e.type=="string"&&typeof e.stream=="function"&&typeof e.constructor=="function"&&/^(Blob|File)$/.test(e[Ua]),lo=e=>typeof e=="object"&&(e[Ua]==="AbortSignal"||e[Ua]==="EventTarget"),co=(e,t)=>{let a=new URL(t).hostname,n=new URL(e).hostname;return a===n||a.endsWith(`.${n}`)},yo=(e,t)=>{let a=new URL(t).protocol,n=new URL(e).protocol;return a===n};var bp=(0,De.promisify)(re.default.pipeline),G=Symbol("Body internals"),Me=class{constructor(t,{size:a=0}={}){let n=null;t===null?t=null:fr(t)?t=Y.Buffer.from(t.toString()):Nt(t)||Y.Buffer.isBuffer(t)||(De.types.isAnyArrayBuffer(t)?t=Y.Buffer.from(t):ArrayBuffer.isView(t)?t=Y.Buffer.from(t.buffer,t.byteOffset,t.byteLength):t instanceof re.default||(t instanceof z.FormData?(t=(0,z.formDataToBlob)(t),n=t.type.split("=")[1]):t=Y.Buffer.from(String(t))));let r=t;Y.Buffer.isBuffer(t)?r=re.default.Readable.from(t):Nt(t)&&(r=re.default.Readable.from(t.stream())),this[G]={body:t,stream:r,boundary:n,disturbed:!1,error:null},this.size=a,t instanceof re.default&&t.on("error",o=>{let s=o instanceof he?o:new H(`Invalid response body while trying to fetch ${this.url}: ${o.message}`,"system",o);this[G].error=s})}get body(){return this[G].stream}get bodyUsed(){return this[G].disturbed}async arrayBuffer(){let{buffer:t,byteOffset:a,byteLength:n}=await Cr(this);return t.slice(a,a+n)}async formData(){let t=this.headers.get("content-type");if(t.startsWith("application/x-www-form-urlencoded")){let n=new z.FormData,r=new URLSearchParams(await this.text());for(let[o,s]of r)n.append(o,s);return n}let{toFormData:a}=await Promise.resolve().then(()=>(go(),Io));return a(this.body,t)}async blob(){let t=this.headers&&this.headers.get("content-type")||this[G].body&&this[G].body.type||"",a=await this.arrayBuffer();return new xa.default([a],{type:t})}async json(){let t=await this.text();return JSON.parse(t)}async text(){let t=await Cr(this);return new TextDecoder().decode(t)}buffer(){return Cr(this)}};Me.prototype.buffer=(0,De.deprecate)(Me.prototype.buffer,"Please use 'response.arrayBuffer()' instead of 'response.buffer()'","node-fetch#buffer");Object.defineProperties(Me.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0},data:{get:(0,De.deprecate)(()=>{},"data doesn't exist, use json(), text(), arrayBuffer(), or body instead","https://github.com/node-fetch/node-fetch/issues/1000 (response)")}});async function Cr(e){if(e[G].disturbed)throw new TypeError(`body used already for: ${e.url}`);if(e[G].disturbed=!0,e[G].error)throw e[G].error;let{body:t}=e;if(t===null)return Y.Buffer.alloc(0);if(!(t instanceof re.default))return Y.Buffer.alloc(0);let a=[],n=0;try{for await(let r of t){if(e.size>0&&n+r.length>e.size){let o=new H(`content size at ${e.url} over limit: ${e.size}`,"max-size");throw t.destroy(o),o}n+=r.length,a.push(r)}}catch(r){throw r instanceof he?r:new H(`Invalid response body while trying to fetch ${e.url}: ${r.message}`,"system",r)}if(t.readableEnded===!0||t._readableState.ended===!0)try{return a.every(r=>typeof r=="string")?Y.Buffer.from(a.join("")):Y.Buffer.concat(a,n)}catch(r){throw new H(`Could not create Buffer from response body for ${e.url}: ${r.message}`,"system",r)}else throw new H(`Premature close of server response while trying to fetch ${e.url}`)}var gt=(e,t)=>{let a,n,{body:r}=e[G];if(e.bodyUsed)throw new Error("cannot clone body after it is used");return r instanceof re.default&&typeof r.getBoundary!="function"&&(a=new re.PassThrough({highWaterMark:t}),n=new re.PassThrough({highWaterMark:t}),r.pipe(a),r.pipe(n),e[G].stream=a,r=n),r},Ip=(0,De.deprecate)(e=>e.getBoundary(),"form-data doesn't follow the spec and requires special treatment. Use alternative package","https://github.com/node-fetch/node-fetch/issues/1167"),wa=(e,t)=>e===null?null:typeof e=="string"?"text/plain;charset=UTF-8":fr(e)?"application/x-www-form-urlencoded;charset=UTF-8":Nt(e)?e.type||null:Y.Buffer.isBuffer(e)||De.types.isAnyArrayBuffer(e)||ArrayBuffer.isView(e)?null:e instanceof z.FormData?`multipart/form-data; boundary=${t[G].boundary}`:e&&typeof e.getBoundary=="function"?`multipart/form-data;boundary=${Ip(e)}`:e instanceof re.default?null:"text/plain;charset=UTF-8",Mo=e=>{let{body:t}=e[G];return t===null?0:Nt(t)?t.size:Y.Buffer.isBuffer(t)?t.length:t&&typeof t.getLengthSync=="function"&&t.hasKnownLength&&t.hasKnownLength()?t.getLengthSync():null},mo=async(e,{body:t})=>{t===null?e.end():await bp(t,e)};var hr=require("node:util"),kt=T(require("node:http"),1),Oa=typeof kt.default.validateHeaderName=="function"?kt.default.validateHeaderName:e=>{if(!/^[\^`\-\w!#$%&'*+.|~]+$/.test(e)){let t=new TypeError(`Header name must be a valid HTTP token [${e}]`);throw Object.defineProperty(t,"code",{value:"ERR_INVALID_HTTP_TOKEN"}),t}},Dr=typeof kt.default.validateHeaderValue=="function"?kt.default.validateHeaderValue:(e,t)=>{if(/[^\t\u0020-\u007E\u0080-\u00FF]/.test(t)){let a=new TypeError(`Invalid character in header content ["${e}"]`);throw Object.defineProperty(a,"code",{value:"ERR_INVALID_CHAR"}),a}},J=class e extends URLSearchParams{constructor(t){let a=[];if(t instanceof e){let n=t.raw();for(let[r,o]of Object.entries(n))a.push(...o.map(s=>[r,s]))}else if(t!=null)if(typeof t=="object"&&!hr.types.isBoxedPrimitive(t)){let n=t[Symbol.iterator];if(n==null)a.push(...Object.entries(t));else{if(typeof n!="function")throw new TypeError("Header pairs must be iterable");a=[...t].map(r=>{if(typeof r!="object"||hr.types.isBoxedPrimitive(r))throw new TypeError("Each header pair must be an iterable object");return[...r]}).map(r=>{if(r.length!==2)throw new TypeError("Each header pair must be a name/value tuple");return[...r]})}}else throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");return a=a.length>0?a.map(([n,r])=>(Oa(n),Dr(n,String(r)),[String(n).toLowerCase(),String(r)])):void 0,super(a),new Proxy(this,{get(n,r,o){switch(r){case"append":case"set":return(s,i)=>(Oa(s),Dr(s,String(i)),URLSearchParams.prototype[r].call(n,String(s).toLowerCase(),String(i)));case"delete":case"has":case"getAll":return s=>(Oa(s),URLSearchParams.prototype[r].call(n,String(s).toLowerCase()));case"keys":return()=>(n.sort(),new Set(URLSearchParams.prototype.keys.call(n)).keys());default:return Reflect.get(n,r,o)}}})}get[Symbol.toStringTag](){return this.constructor.name}toString(){return Object.prototype.toString.call(this)}get(t){let a=this.getAll(t);if(a.length===0)return null;let n=a.join(", ");return/^content-encoding$/i.test(t)&&(n=n.toLowerCase()),n}forEach(t,a=void 0){for(let n of this.keys())Reflect.apply(t,a,[this.get(n),n,this])}*values(){for(let t of this.keys())yield this.get(t)}*entries(){for(let t of this.keys())yield[t,this.get(t)]}[Symbol.iterator](){return this.entries()}raw(){return[...this.keys()].reduce((t,a)=>(t[a]=this.getAll(a),t),{})}[Symbol.for("nodejs.util.inspect.custom")](){return[...this.keys()].reduce((t,a)=>{let n=this.getAll(a);return a==="host"?t[a]=n[0]:t[a]=n.length>1?n:n[0],t},{})}};Object.defineProperties(J.prototype,["get","entries","forEach","values"].reduce((e,t)=>(e[t]={enumerable:!0},e),{}));function Ro(e=[]){return new J(e.reduce((t,a,n,r)=>(n%2===0&&t.push(r.slice(n,n+2)),t),[]).filter(([t,a])=>{try{return Oa(t),Dr(t,String(a)),!0}catch{return!1}}))}var gp=new Set([301,302,303,307,308]),Ba=e=>gp.has(e);var le=Symbol("Response internals"),ne=class e extends Me{constructor(t=null,a={}){super(t,a);let n=a.status!=null?a.status:200,r=new J(a.headers);if(t!==null&&!r.has("Content-Type")){let o=wa(t,this);o&&r.append("Content-Type",o)}this[le]={type:"default",url:a.url,status:n,statusText:a.statusText||"",headers:r,counter:a.counter,highWaterMark:a.highWaterMark}}get type(){return this[le].type}get url(){return this[le].url||""}get status(){return this[le].status}get ok(){return this[le].status>=200&&this[le].status<300}get redirected(){return this[le].counter>0}get statusText(){return this[le].statusText}get headers(){return this[le].headers}get highWaterMark(){return this[le].highWaterMark}clone(){return new e(gt(this,this.highWaterMark),{type:this.type,url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected,size:this.size,highWaterMark:this.highWaterMark})}static redirect(t,a=302){if(!Ba(a))throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');return new e(null,{headers:{location:new URL(t).toString()},status:a})}static error(){let t=new e(null,{status:0,statusText:""});return t[le].type="error",t}static json(t=void 0,a={}){let n=JSON.stringify(t);if(n===void 0)throw new TypeError("data is not JSON serializable");let r=new J(a&&a.headers);return r.has("content-type")||r.set("content-type","application/json"),new e(n,{...a,headers:r})}get[Symbol.toStringTag](){return"Response"}};Object.defineProperties(ne.prototype,{type:{enumerable:!0},url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}});var _o=require("node:url"),Uo=require("node:util");var Ao=e=>{if(e.search)return e.search;let t=e.href.length-1,a=e.hash||(e.href[t]==="#"?"#":"");return e.href[t-a.length]==="?"?"?":""};var Po=require("node:net");function fo(e,t=!1){return e==null||(e=new URL(e),/^(about|blob|data):$/.test(e.protocol))?"no-referrer":(e.username="",e.password="",e.hash="",t&&(e.pathname="",e.search=""),e)}var Eo=new Set(["","no-referrer","no-referrer-when-downgrade","same-origin","origin","strict-origin","origin-when-cross-origin","strict-origin-when-cross-origin","unsafe-url"]),Co="strict-origin-when-cross-origin";function ho(e){if(!Eo.has(e))throw new TypeError(`Invalid referrerPolicy: ${e}`);return e}function Mp(e){if(/^(http|ws)s:$/.test(e.protocol))return!0;let t=e.host.replace(/(^\[)|(]$)/g,""),a=(0,Po.isIP)(t);return a===4&&/^127\./.test(t)||a===6&&/^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(t)?!0:e.host==="localhost"||e.host.endsWith(".localhost")?!1:e.protocol==="file:"}function Mt(e){return/^about:(blank|srcdoc)$/.test(e)||e.protocol==="data:"||/^(blob|filesystem):$/.test(e.protocol)?!0:Mp(e)}function Do(e,{referrerURLCallback:t,referrerOriginCallback:a}={}){if(e.referrer==="no-referrer"||e.referrerPolicy==="")return null;let n=e.referrerPolicy;if(e.referrer==="about:client")return"no-referrer";let r=e.referrer,o=fo(r),s=fo(r,!0);o.toString().length>4096&&(o=s),t&&(o=t(o)),a&&(s=a(s));let i=new URL(e.url);switch(n){case"no-referrer":return"no-referrer";case"origin":return s;case"unsafe-url":return o;case"strict-origin":return Mt(o)&&!Mt(i)?"no-referrer":s.toString();case"strict-origin-when-cross-origin":return o.origin===i.origin?o:Mt(o)&&!Mt(i)?"no-referrer":s;case"same-origin":return o.origin===i.origin?o:"no-referrer";case"origin-when-cross-origin":return o.origin===i.origin?o:s;case"no-referrer-when-downgrade":return Mt(o)&&!Mt(i)?"no-referrer":o;default:throw new TypeError(`Invalid referrerPolicy: ${n}`)}}function xo(e){let t=(e.get("referrer-policy")||"").split(/[,\s]+/),a="";for(let n of t)n&&Eo.has(n)&&(a=n);return a}var B=Symbol("Request internals"),Ft=e=>typeof e=="object"&&typeof e[B]=="object",mp=(0,Uo.deprecate)(()=>{},".data is not a valid RequestInit property, use .body instead","https://github.com/node-fetch/node-fetch/issues/1000 (request)"),Ye=class e extends Me{constructor(t,a={}){let n;if(Ft(t)?n=new URL(t.url):(n=new URL(t),t={}),n.username!==""||n.password!=="")throw new TypeError(`${n} is an url with embedded credentials.`);let r=a.method||t.method||"GET";if(/^(delete|get|head|options|post|put)$/i.test(r)&&(r=r.toUpperCase()),!Ft(a)&&"data"in a&&mp(),(a.body!=null||Ft(t)&&t.body!==null)&&(r==="GET"||r==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");let o=a.body?a.body:Ft(t)&&t.body!==null?gt(t):null;super(o,{size:a.size||t.size||0});let s=new J(a.headers||t.headers||{});if(o!==null&&!s.has("Content-Type")){let p=wa(o,this);p&&s.set("Content-Type",p)}let i=Ft(t)?t.signal:null;if("signal"in a&&(i=a.signal),i!=null&&!lo(i))throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");let u=a.referrer==null?t.referrer:a.referrer;if(u==="")u="no-referrer";else if(u){let p=new URL(u);u=/^about:(\/\/)?client$/.test(p)?"client":p}else u=void 0;this[B]={method:r,redirect:a.redirect||t.redirect||"follow",headers:s,parsedURL:n,signal:i,referrer:u},this.follow=a.follow===void 0?t.follow===void 0?20:t.follow:a.follow,this.compress=a.compress===void 0?t.compress===void 0?!0:t.compress:a.compress,this.counter=a.counter||t.counter||0,this.agent=a.agent||t.agent,this.highWaterMark=a.highWaterMark||t.highWaterMark||16384,this.insecureHTTPParser=a.insecureHTTPParser||t.insecureHTTPParser||!1,this.referrerPolicy=a.referrerPolicy||t.referrerPolicy||""}get method(){return this[B].method}get url(){return(0,_o.format)(this[B].parsedURL)}get headers(){return this[B].headers}get redirect(){return this[B].redirect}get signal(){return this[B].signal}get referrer(){if(this[B].referrer==="no-referrer")return"";if(this[B].referrer==="client")return"about:client";if(this[B].referrer)return this[B].referrer.toString()}get referrerPolicy(){return this[B].referrerPolicy}set referrerPolicy(t){this[B].referrerPolicy=ho(t)}clone(){return new e(this)}get[Symbol.toStringTag](){return"Request"}};Object.defineProperties(Ye.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0},referrer:{enumerable:!0},referrerPolicy:{enumerable:!0}});var vo=e=>{let{parsedURL:t}=e[B],a=new J(e[B].headers);a.has("Accept")||a.set("Accept","*/*");let n=null;if(e.body===null&&/^(post|put)$/i.test(e.method)&&(n="0"),e.body!==null){let i=Mo(e);typeof i=="number"&&!Number.isNaN(i)&&(n=String(i))}n&&a.set("Content-Length",n),e.referrerPolicy===""&&(e.referrerPolicy=Co),e.referrer&&e.referrer!=="no-referrer"?e[B].referrer=Do(e):e[B].referrer="no-referrer",e[B].referrer instanceof URL&&a.set("Referer",e.referrer),a.has("User-Agent")||a.set("User-Agent","node-fetch"),e.compress&&!a.has("Accept-Encoding")&&a.set("Accept-Encoding","gzip, deflate, br");let{agent:r}=e;typeof r=="function"&&(r=r(t));let o=Ao(t),s={path:t.pathname+o,method:e.method,headers:a[Symbol.for("nodejs.util.inspect.custom")](),insecureHTTPParser:e.insecureHTTPParser,agent:r};return{parsedURL:t,options:s}};var La=class extends he{constructor(t,a="aborted"){super(t,a)}};_a();Pr();var Rp=new Set(["data:","http:","https:"]);async function qa(e,t){return new Promise((a,n)=>{let r=new Ye(e,t),{parsedURL:o,options:s}=vo(r);if(!Rp.has(o.protocol))throw new TypeError(`node-fetch cannot load ${e}. URL scheme "${o.protocol.replace(/:$/,"")}" is not supported.`);if(o.protocol==="data:"){let l=(0,Da.default)(r.url),b=new ne(l,{headers:{"Content-Type":l.typeFull}});a(b);return}let i=(o.protocol==="https:"?wo.default:To.default).request,{signal:u}=r,p=null,y=()=>{let l=new La("The operation was aborted.");n(l),r.body&&r.body instanceof Z.default.Readable&&r.body.destroy(l),!(!p||!p.body)&&p.body.emit("error",l)};if(u&&u.aborted){y();return}let c=()=>{y(),m()},d=i(o.toString(),s);u&&u.addEventListener("abort",c);let m=()=>{d.abort(),u&&u.removeEventListener("abort",c)};d.on("error",l=>{n(new H(`request to ${r.url} failed, reason: ${l.message}`,"system",l)),m()}),Ap(d,l=>{p&&p.body&&p.body.destroy(l)}),process.version<"v14"&&d.on("socket",l=>{let b;l.prependListener("end",()=>{b=l._eventsCount}),l.prependListener("close",S=>{if(p&&b<l._eventsCount&&!S){let I=new Error("Premature close");I.code="ERR_STREAM_PREMATURE_CLOSE",p.body.emit("error",I)}})}),d.on("response",l=>{d.setTimeout(0);let b=Ro(l.rawHeaders);if(Ba(l.statusCode)){let M=b.get("Location"),P=null;try{P=M===null?null:new URL(M,r.url)}catch{if(r.redirect!=="manual"){n(new H(`uri requested responds with an invalid redirect URL: ${M}`,"invalid-redirect")),m();return}}switch(r.redirect){case"error":n(new H(`uri requested responds with a redirect, redirect mode is set to error: ${r.url}`,"no-redirect")),m();return;case"manual":break;case"follow":{if(P===null)break;if(r.counter>=r.follow){n(new H(`maximum redirect reached at: ${r.url}`,"max-redirect")),m();return}let A={headers:new J(r.headers),follow:r.follow,counter:r.counter+1,agent:r.agent,compress:r.compress,method:r.method,body:gt(r),signal:r.signal,size:r.size,referrer:r.referrer,referrerPolicy:r.referrerPolicy};if(!co(r.url,P)||!yo(r.url,P))for(let q of["authorization","www-authenticate","cookie","cookie2"])A.headers.delete(q);if(l.statusCode!==303&&r.body&&t.body instanceof Z.default.Readable){n(new H("Cannot follow redirect with body being a readable stream","unsupported-redirect")),m();return}(l.statusCode===303||(l.statusCode===301||l.statusCode===302)&&r.method==="POST")&&(A.method="GET",A.body=void 0,A.headers.delete("content-length"));let _=xo(b);_&&(A.referrerPolicy=_),a(qa(new Ye(P,A))),m();return}default:return n(new TypeError(`Redirect option '${r.redirect}' is not a valid value of RequestRedirect`))}}u&&l.once("end",()=>{u.removeEventListener("abort",c)});let S=(0,Z.pipeline)(l,new Z.PassThrough,M=>{M&&n(M)});process.version<"v12.10"&&l.on("aborted",c);let I={url:r.url,status:l.statusCode,statusText:l.statusMessage,headers:b,size:r.size,counter:r.counter,highWaterMark:r.highWaterMark},R=b.get("Content-Encoding");if(!r.compress||r.method==="HEAD"||R===null||l.statusCode===204||l.statusCode===304){p=new ne(S,I),a(p);return}let f={flush:Je.default.Z_SYNC_FLUSH,finishFlush:Je.default.Z_SYNC_FLUSH};if(R==="gzip"||R==="x-gzip"){S=(0,Z.pipeline)(S,Je.default.createGunzip(f),M=>{M&&n(M)}),p=new ne(S,I),a(p);return}if(R==="deflate"||R==="x-deflate"){let M=(0,Z.pipeline)(l,new Z.PassThrough,P=>{P&&n(P)});M.once("data",P=>{(P[0]&15)===8?S=(0,Z.pipeline)(S,Je.default.createInflate(),A=>{A&&n(A)}):S=(0,Z.pipeline)(S,Je.default.createInflateRaw(),A=>{A&&n(A)}),p=new ne(S,I),a(p)}),M.once("end",()=>{p||(p=new ne(S,I),a(p))});return}if(R==="br"){S=(0,Z.pipeline)(S,Je.default.createBrotliDecompress(),M=>{M&&n(M)}),p=new ne(S,I),a(p);return}p=new ne(S,I),a(p)}),mo(d,r).catch(n)})}function Ap(e,t){let a=jt.Buffer.from(`0\r
\r
`),n=!1,r=!1,o;e.on("response",s=>{let{headers:i}=s;n=i["transfer-encoding"]==="chunked"&&!i["content-length"]}),e.on("socket",s=>{let i=()=>{if(n&&!r){let p=new Error("Premature close");p.code="ERR_STREAM_PREMATURE_CLOSE",t(p)}},u=p=>{r=jt.Buffer.compare(p.slice(-5),a)===0,!r&&o&&(r=jt.Buffer.compare(o.slice(-3),a.slice(0,3))===0&&jt.Buffer.compare(p.slice(-2),a.slice(3))===0),o=p};s.prependListener("close",i),s.on("data",u),e.on("close",()=>{s.removeListener("close",i),s.removeListener("data",u)})})}var g=T(require("graphql-tag")),zt=g.default`
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
`,fp=g.default`
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
  ${zt}
`,me=g.default`
  fragment UserFields on User {
    id
    avatarUrl
    name
    login
    isViewer
  }
`,Ht=g.default`
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
  ${me}
`,Na=g.default`
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
  ${Ht}
  ${zt}
  ${me}
`,Pp=g.default`
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
  ${Ht}
  ${zt}
  ${me}
`,Oo=g.default`
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
`,Bo=g.default`
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
`,Lo=g.default`
  fragment RepositoryMentionFields on Repository {
    nameWithOwner
    description
    isPrivate
    isArchived
    owner {
      avatarUrl(size: 64)
    }
  }
`,Ep=g.default`
  fragment ProjectViewerFields on ProjectV2View {
    id
    name
    number
  }
`,qo=g.default`
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
  ${Ht}
  ${Ep}
`,No=g.default`
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
  ${zt}
  ${Ht}
  ${me}
`,Cp=g.default`
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
  ${zt}
  ${Ht}
  ${me}
`,hp=g.default`
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
`,Vo=g.default`
  fragment CommitFields on Commit {
    authoredDate
    oid
    message
  }
`,xr=g.default`
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
`,Dp=g.default`
  fragment ReleaseFields on Release {
    id
    description
    name
    publishedAt
    createdAt
    tagName
    url
  }
`,xp=g.default`
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
`,_p=g.default`
  mutation createRef($input: CreateRefInput!) {
    createRef(input: $input) {
      clientMutationId
      ref {
        id
        name
      }
    }
  }
`,Up=g.default`
  mutation deleteLinkedBranch($input: DeleteLinkedBranchInput!) {
    deleteLinkedBranch(input: $input) {
      clientMutationId
    }
  }
`,vp=g.default`
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
  ${fp}
`,Tp=g.default`
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
`,wp=g.default`
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
  ${me}
`,Op=g.default`
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
`,Bp=g.default`
  query issueDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...IssueDetailFields
    }
  }
  ${Pp}
`,Lp=g.default`
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
  ${Na}
`,qp=g.default`
  query issueByNumber($owner: String!, $name: String!, $issueNumber: Int!) {
    repository(owner: $owner, name: $name) {
      issue(number: $issueNumber) {
        ...IssueFields
      }
    }
  }
  ${Na}
`,Np=g.default`
  mutation closeIssue($nodeId: ID!, $stateReason: IssueClosedStateReason!) {
    closeIssue(input: { issueId: $nodeId, stateReason: $stateReason }) {
      issue {
        id
      }
    }
  }
`,Vp=g.default`
  mutation reopenIssue($nodeId: ID!) {
    reopenIssue(input: { issueId: $nodeId }) {
      issue {
        id
      }
    }
  }
`,kp=g.default`
  mutation changeIssueAssignees($issueId: ID!, $assigneeIds: [ID!]) {
    updateIssue(input: { id: $issueId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,Fp=g.default`
  mutation changeIssueMilestone($issueId: ID!, $milestoneId: ID) {
    updateIssue(input: { id: $issueId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,jp=g.default`
  mutation addIssueToProject($issueId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $issueId }) {
      clientMutationId
    }
  }
`,zp=g.default`
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
  ${Na}
`,Hp=g.default`
  query searchIssueMentions($query: String!, $numberOfItems: Int!) {
    search(query: $query, type: ISSUE, first: $numberOfItems) {
      nodes {
        ... on Issue {
          ...IssueMentionFields
        }
      }
    }
  }
  ${Oo}
`,Gp=g.default`
  query searchPullRequestMentions($query: String!, $numberOfItems: Int!) {
    search(query: $query, type: ISSUE, first: $numberOfItems) {
      nodes {
        ... on PullRequest {
          ...PullRequestMentionFields
        }
      }
    }
  }
  ${Bo}
`,$p=g.default`
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
  ${Oo}
  ${Bo}
`,Qp=g.default`
  query searchRepositoryMentions($query: String!, $numberOfItems: Int!) {
    search(query: $query, type: REPOSITORY, first: $numberOfItems) {
      nodes {
        ... on Repository {
          ...RepositoryMentionFields
        }
      }
    }
  }
  ${Lo}
`,Wp=g.default`
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
  ${Lo}
`,Kp=g.default`
  mutation changeProjectStatus($projectId: ID!, $closed: Boolean!) {
    updateProjectV2(input: { projectId: $projectId, closed: $closed }) {
      clientMutationId
    }
  }
`,Yp=g.default`
  query projectDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...ProjectFields
    }
  }
  ${qo}
`,Jp=g.default`
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
  ${No}
`,Zp=g.default`
  query pullRequestDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...PullRequestDetailsFields
    }
  }
  ${Cp}
`,Xp=g.default`
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
  ${me}
`,el=g.default`
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
`,tl=g.default`
  query pullRequestCommits($nodeId: ID!, $numberOfItems: Int!, $before: String) {
    node(id: $nodeId) {
      ...PullRequestCommitFields
    }
  }
  ${hp}
`,al=g.default`
  mutation closePullRequest($nodeId: ID!) {
    closePullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,rl=g.default`
  mutation reopenPullRequest($nodeId: ID!) {
    reopenPullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,nl=g.default`
  mutation markPullRequestReadyForReview($nodeId: ID!) {
    markPullRequestReadyForReview(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,ol=g.default`
  mutation addPullRequestReview($nodeId: ID!, $event: PullRequestReviewEvent, $body: String) {
    addPullRequestReview(input: { pullRequestId: $nodeId, event: $event, body: $body }) {
      pullRequestReview {
        id
      }
    }
  }
`,il=g.default`
  mutation changePullRequestAssignees($pullRequestId: ID!, $assigneeIds: [ID!]) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,sl=g.default`
  mutation changePullRequestMilestone($pullRequestId: ID!, $milestoneId: ID) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,ul=g.default`
  mutation addPullRequestToProject($pullRequestId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $pullRequestId }) {
      clientMutationId
    }
  }
`,pl=g.default`
  mutation requestReview($pullRequestId: ID!, $collaboratorId: ID!) {
    requestReviews(input: { pullRequestId: $pullRequestId, userIds: [$collaboratorId], union: true }) {
      clientMutationId
    }
  }
`,ll=g.default`
  mutation mergePullRequest($nodeId: ID!, $method: PullRequestMergeMethod!) {
    mergePullRequest(input: { pullRequestId: $nodeId, mergeMethod: $method }) {
      pullRequest {
        nodeId: id
      }
    }
  }
`,cl=g.default`
  mutation addPullRequestToMergeQueue($nodeId: ID!) {
    enqueuePullRequest(input: { pullRequestId: $nodeId }) {
      __typename
    }
  }
`,yl=g.default`
  mutation removePullRequestFromMergeQueue($nodeId: ID!) {
    dequeuePullRequest(input: { id: $nodeId }) {
      __typename
    }
  }
`,dl=g.default`
  mutation enablePullRequestAutoMerge($nodeId: ID!, $mergeMethod: PullRequestMergeMethod) {
    enablePullRequestAutoMerge(input: { pullRequestId: $nodeId, mergeMethod: $mergeMethod }) {
      pullRequest {
        id
      }
    }
  }
`,Sl=g.default`
  mutation disablePullRequestAutoMerge($nodeId: ID!) {
    disablePullRequestAutoMerge(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,bl=g.default`
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
`,Il=g.default`
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
  ${No}
`,gl=g.default`
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
  ${xr}
`,Ml=g.default`
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
  ${xr}
`,ml=g.default`
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
`,Rl=g.default`
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
`,Al=g.default`
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
  ${Vo}
  ${me}
`,fl=g.default`
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
  ${Vo}
`,Pl=g.default`
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
  ${Na}
`,El=g.default`
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
  ${Dp}
`,Cl=g.default`
  mutation addStar($repositoryId: ID!) {
    addStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,hl=g.default`
  mutation removeStar($repositoryId: ID!) {
    removeStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,Dl=g.default`
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
  ${xr}
`,xl=g.default`
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
  ${me}
  ${qo}
`,_l=g.default`
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
  ${me}
`,Ul=g.default`
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
`,vl=(e,t,a,n)=>e();function ko(e,t=vl){return{createLinkedBranch(a,n,r){return t(o=>e.request({document:xp,variables:a,requestHeaders:{...n,...o},signal:r}),"createLinkedBranch","mutation",a)},createRef(a,n,r){return t(o=>e.request({document:_p,variables:a,requestHeaders:{...n,...o},signal:r}),"createRef","mutation",a)},deleteLinkedBranch(a,n,r){return t(o=>e.request({document:Up,variables:a,requestHeaders:{...n,...o},signal:r}),"deleteLinkedBranch","mutation",a)},searchDiscussions(a,n,r){return t(o=>e.request({document:vp,variables:a,requestHeaders:{...n,...o},signal:r}),"searchDiscussions","query",a)},getGitHubDiscussionNumber(a,n,r){return t(o=>e.request({document:Tp,variables:a,requestHeaders:{...n,...o},signal:r}),"getGitHubDiscussionNumber","query",a)},repositoryCollaboratorsForIssues(a,n,r){return t(o=>e.request({document:wp,variables:a,requestHeaders:{...n,...o},signal:r}),"repositoryCollaboratorsForIssues","query",a)},repositoryProjectsForIssues(a,n,r){return t(o=>e.request({document:Op,variables:a,requestHeaders:{...n,...o},signal:r}),"repositoryProjectsForIssues","query",a)},issueDetails(a,n,r){return t(o=>e.request({document:Bp,variables:a,requestHeaders:{...n,...o},signal:r}),"issueDetails","query",a)},searchIssues(a,n,r){return t(o=>e.request({document:Lp,variables:a,requestHeaders:{...n,...o},signal:r}),"searchIssues","query",a)},issueByNumber(a,n,r){return t(o=>e.request({document:qp,variables:a,requestHeaders:{...n,...o},signal:r}),"issueByNumber","query",a)},closeIssue(a,n,r){return t(o=>e.request({document:Np,variables:a,requestHeaders:{...n,...o},signal:r}),"closeIssue","mutation",a)},reopenIssue(a,n,r){return t(o=>e.request({document:Vp,variables:a,requestHeaders:{...n,...o},signal:r}),"reopenIssue","mutation",a)},changeIssueAssignees(a,n,r){return t(o=>e.request({document:kp,variables:a,requestHeaders:{...n,...o},signal:r}),"changeIssueAssignees","mutation",a)},changeIssueMilestone(a,n,r){return t(o=>e.request({document:Fp,variables:a,requestHeaders:{...n,...o},signal:r}),"changeIssueMilestone","mutation",a)},addIssueToProject(a,n,r){return t(o=>e.request({document:jp,variables:a,requestHeaders:{...n,...o},signal:r}),"addIssueToProject","mutation",a)},createIssue(a,n,r){return t(o=>e.request({document:zp,variables:a,requestHeaders:{...n,...o},signal:r}),"createIssue","mutation",a)},searchIssueMentions(a,n,r){return t(o=>e.request({document:Hp,variables:a,requestHeaders:{...n,...o},signal:r}),"searchIssueMentions","query",a)},searchPullRequestMentions(a,n,r){return t(o=>e.request({document:Gp,variables:a,requestHeaders:{...n,...o},signal:r}),"searchPullRequestMentions","query",a)},issueOrPullRequestMention(a,n,r){return t(o=>e.request({document:$p,variables:a,requestHeaders:{...n,...o},signal:r}),"issueOrPullRequestMention","query",a)},searchRepositoryMentions(a,n,r){return t(o=>e.request({document:Qp,variables:a,requestHeaders:{...n,...o},signal:r}),"searchRepositoryMentions","query",a)},viewerRepositoryMentions(a,n,r){return t(o=>e.request({document:Wp,variables:a,requestHeaders:{...n,...o},signal:r}),"viewerRepositoryMentions","query",a)},changeProjectStatus(a,n,r){return t(o=>e.request({document:Kp,variables:a,requestHeaders:{...n,...o},signal:r}),"changeProjectStatus","mutation",a)},projectDetails(a,n,r){return t(o=>e.request({document:Yp,variables:a,requestHeaders:{...n,...o},signal:r}),"projectDetails","query",a)},searchPullRequests(a,n,r){return t(o=>e.request({document:Jp,variables:a,requestHeaders:{...n,...o},signal:r}),"searchPullRequests","query",a)},pullRequestDetails(a,n,r){return t(o=>e.request({document:Zp,variables:a,requestHeaders:{...n,...o},signal:r}),"pullRequestDetails","query",a)},repositoryCollaboratorsForPullRequests(a,n,r){return t(o=>e.request({document:Xp,variables:a,requestHeaders:{...n,...o},signal:r}),"repositoryCollaboratorsForPullRequests","query",a)},repositoryProjectsForPullRequests(a,n,r){return t(o=>e.request({document:el,variables:a,requestHeaders:{...n,...o},signal:r}),"repositoryProjectsForPullRequests","query",a)},pullRequestCommits(a,n,r){return t(o=>e.request({document:tl,variables:a,requestHeaders:{...n,...o},signal:r}),"pullRequestCommits","query",a)},closePullRequest(a,n,r){return t(o=>e.request({document:al,variables:a,requestHeaders:{...n,...o},signal:r}),"closePullRequest","mutation",a)},reopenPullRequest(a,n,r){return t(o=>e.request({document:rl,variables:a,requestHeaders:{...n,...o},signal:r}),"reopenPullRequest","mutation",a)},markPullRequestReadyForReview(a,n,r){return t(o=>e.request({document:nl,variables:a,requestHeaders:{...n,...o},signal:r}),"markPullRequestReadyForReview","mutation",a)},addPullRequestReview(a,n,r){return t(o=>e.request({document:ol,variables:a,requestHeaders:{...n,...o},signal:r}),"addPullRequestReview","mutation",a)},changePullRequestAssignees(a,n,r){return t(o=>e.request({document:il,variables:a,requestHeaders:{...n,...o},signal:r}),"changePullRequestAssignees","mutation",a)},changePullRequestMilestone(a,n,r){return t(o=>e.request({document:sl,variables:a,requestHeaders:{...n,...o},signal:r}),"changePullRequestMilestone","mutation",a)},addPullRequestToProject(a,n,r){return t(o=>e.request({document:ul,variables:a,requestHeaders:{...n,...o},signal:r}),"addPullRequestToProject","mutation",a)},requestReview(a,n,r){return t(o=>e.request({document:pl,variables:a,requestHeaders:{...n,...o},signal:r}),"requestReview","mutation",a)},mergePullRequest(a,n,r){return t(o=>e.request({document:ll,variables:a,requestHeaders:{...n,...o},signal:r}),"mergePullRequest","mutation",a)},addPullRequestToMergeQueue(a,n,r){return t(o=>e.request({document:cl,variables:a,requestHeaders:{...n,...o},signal:r}),"addPullRequestToMergeQueue","mutation",a)},removePullRequestFromMergeQueue(a,n,r){return t(o=>e.request({document:yl,variables:a,requestHeaders:{...n,...o},signal:r}),"removePullRequestFromMergeQueue","mutation",a)},enablePullRequestAutoMerge(a,n,r){return t(o=>e.request({document:dl,variables:a,requestHeaders:{...n,...o},signal:r}),"enablePullRequestAutoMerge","mutation",a)},disablePullRequestAutoMerge(a,n,r){return t(o=>e.request({document:Sl,variables:a,requestHeaders:{...n,...o},signal:r}),"disablePullRequestAutoMerge","mutation",a)},createPullRequest(a,n,r){return t(o=>e.request({document:bl,variables:a,requestHeaders:{...n,...o},signal:r}),"createPullRequest","mutation",a)},initPullRequest(a,n,r){return t(o=>e.request({document:Il,variables:a,requestHeaders:{...n,...o},signal:r}),"initPullRequest","mutation",a)},searchRepositories(a,n,r){return t(o=>e.request({document:gl,variables:a,requestHeaders:{...n,...o},signal:r}),"searchRepositories","query",a)},myLatestRepositories(a,n,r){return t(o=>e.request({document:Ml,variables:a,requestHeaders:{...n,...o},signal:r}),"myLatestRepositories","query",a)},milestonesForRepository(a,n,r){return t(o=>e.request({document:ml,variables:a,requestHeaders:{...n,...o},signal:r}),"milestonesForRepository","query",a)},commentsForPullRequest(a,n,r){return t(o=>e.request({document:Rl,variables:a,requestHeaders:{...n,...o},signal:r}),"commentsForPullRequest","query",a)},dataForRepository(a,n,r){return t(o=>e.request({document:Al,variables:a,requestHeaders:{...n,...o},signal:r}),"dataForRepository","query",a)},searchRepositoryBranches(a,n,r){return t(o=>e.request({document:fl,variables:a,requestHeaders:{...n,...o},signal:r}),"searchRepositoryBranches","query",a)},repositoryIssues(a,n,r){return t(o=>e.request({document:Pl,variables:a,requestHeaders:{...n,...o},signal:r}),"repositoryIssues","query",a)},repositoryReleases(a,n,r){return t(o=>e.request({document:El,variables:a,requestHeaders:{...n,...o},signal:r}),"repositoryReleases","query",a)},addStar(a,n,r){return t(o=>e.request({document:Cl,variables:a,requestHeaders:{...n,...o},signal:r}),"addStar","mutation",a)},removeStar(a,n,r){return t(o=>e.request({document:hl,variables:a,requestHeaders:{...n,...o},signal:r}),"removeStar","mutation",a)},myStarredRepositories(a,n,r){return t(o=>e.request({document:Dl,variables:a,requestHeaders:{...n,...o},signal:r}),"myStarredRepositories","query",a)},getViewer(a,n,r){return t(o=>e.request({document:xl,variables:a,requestHeaders:{...n,...o},signal:r}),"getViewer","query",a)},getViewerStats(a,n,r){return t(o=>e.request({document:_l,variables:a,requestHeaders:{...n,...o},signal:r}),"getViewerStats","query",a)},getViewerStatsDetails(a,n,r){return t(o=>e.request({document:Ul,variables:a,requestHeaders:{...n,...o},signal:r}),"getViewerStatsDetails","query",a)}}}var _r=null,Ur=null,Ho=null,Tl=(0,jo.getPreferenceValues)();function wl({token:e,type:t}){let a=t==="personal"?`token ${e}`:`bearer ${e}`;Ho=e,_r=ko(new ha("https://api.github.com/graphql",{headers:{authorization:a}})),Ur=new Fo.Octokit({auth:e,request:{fetch:qa}})}var Go=zo.OAuthService.github({personalAccessToken:Tl.personalAccessToken,scope:"notifications repo project read:org read:user read:packages",onAuthorize:wl});function mt(){if(!_r||!Ur)throw new Error("GitHub clients not initialized");return{github:_r,octokit:Ur,token:Ho}}function vr(e){return e?.response?.errors?e.response.errors[0].message:e instanceof Error?e.message:String(e)}var xe=require("@raycast/api");var $o=require("@raycast/api");function Qo(e){return e.stateReason==="NOT_PLANNED"?{icon:{source:"skip.svg",tintColor:xe.Color.SecondaryText},text:"Closed as not planned",color:xe.Color.Purple}:e.stateReason==="COMPLETED"?{icon:{source:"issue-closed.svg",tintColor:xe.Color.Purple},text:"Closed as completed",color:xe.Color.Purple}:e.closed?{icon:{source:"issue-closed.svg",tintColor:xe.Color.Purple},text:"Closed",color:xe.Color.Purple}:{icon:{source:"issue-open.svg",tintColor:xe.Color.Green},text:"Open",color:xe.Color.Green}}var Wo=T($e());var Ko=(0,Wo.withAccessToken)(Go);var ei=T($e());var Va=require("node:child_process");var Jo=require("node:util"),$=require("@raycast/api"),Ol=T($e());var Yy=[{title:"github.dev",baseUrl:"https://github.dev/",icon:{source:"github-dev.svg",tintColor:$.Color.PrimaryText},shortcut:$.Keyboard.Shortcut.Common.Open},{title:"VS Code for the Web",baseUrl:"https://vscode.dev/github/",icon:{source:"vscode.svg",tintColor:$.Color.PrimaryText},shortcut:{macOS:{modifiers:["cmd"],key:"v"},Windows:{modifiers:["ctrl"],key:"v"}}},{title:"CodeSandbox",baseUrl:"https://codesandbox.io/s/github/",icon:{source:"codesandbox.svg",tintColor:$.Color.PrimaryText}},{title:"Replit",baseUrl:"https://repl.it/github/",icon:{source:"replit.svg",tintColor:$.Color.PrimaryText}},{title:"Gitpod",baseUrl:"https://gitpod.io/#https://github.com/",icon:{source:"gitpod.svg",tintColor:$.Color.PrimaryText}},{title:"Glitch",baseUrl:"https://glitch.com/edit/#!/import/github/",icon:{source:"glitch.svg",tintColor:$.Color.PrimaryText}},{title:"Sourcegraph",baseUrl:"https://sourcegraph.com/github.com/",icon:{source:"sourcegraph.svg",tintColor:$.Color.PrimaryText},shortcut:{macOS:{modifiers:["cmd"],key:"s"},Windows:{modifiers:["ctrl"],key:"s"}}},{title:"DeepWiki",baseUrl:"https://deepwiki.com/",icon:{source:"deepwiki.png"},shortcut:{macOS:{modifiers:["cmd"],key:"d"},Windows:{modifiers:["ctrl"],key:"d"}}},{title:"VS Code Remote Repositories",baseUrl:"vscode://GitHub.remotehub/open?url=https://github.com/",icon:{source:"vscode.svg",tintColor:$.Color.PrimaryText}}];var Bl=[{title:"Relevance",value:""},{title:"Last Update",value:"sort:updated-desc"},{title:"Name",value:"sort:name-asc"},{title:"Stars",value:"sort:stars-desc"},{title:"Forks",value:"sort:forks-desc"}],Ll=[{title:"Last Pushed",value:"pushed_at:desc"},{title:"Name",value:"name:asc"},{title:"Stars",value:"stargazers:desc"}],ql=[{title:"Recently Starred",value:"starred_at:desc"},{title:"Oldest Starred",value:"starred_at:asc"}],Jy=Bl[0].value,Zy=Ll[0].value,Xy=ql[0].value;var ed=(0,Jo.promisify)(Va.execFile);var Gt="\x1B",Yo="\x07",td=new RegExp(`${Gt}][^${Yo}${Gt}]*(?:${Yo}|${Gt}\\\\)`,"g"),ad=new RegExp(`${Gt}\\[[0-9;?]*[A-Za-z]`,"g"),rd=new RegExp(`${Gt}\\([0-9A-Za-z]`,"g");var Zo=T($e());function Xo(){let{github:e}=mt(),{data:t}=(0,Zo.useCachedPromise)(async()=>(await e.getViewer()).viewer);return t}function ti(){let{github:e}=mt(),n=["user:@me",...Xo()?.organizations?.nodes?.flatMap(r=>r?.login?[`org:${r.login}`]:[])??[]].join(" ");return(0,ei.useCachedPromise)(async r=>{let s=(await Promise.allSettled(r.split(" ").map(i=>e.searchRepositories({query:`${i} archived:false sort:updated-desc`,numberOfItems:100})))).flatMap(i=>i.status==="fulfilled"?i.value.search.nodes:[]);return[...new Map(s.map(i=>[i.id,i])).values()].sort((i,u)=>new Date(u.updatedAt).getTime()-new Date(i.updatedAt).getTime())},[n])}var oe=require("react/jsx-runtime");function ri({draftValues:e}){let{github:t}=mt(),{data:a,isLoading:n}=ti(),{handleSubmit:r,itemProps:o,values:s,setValue:i}=(0,ka.useForm)({onSubmit:async()=>{let c=await(0,h.showToast)({style:h.Toast.Style.Animated,title:"Creating a branch"});try{let d;if(s.issue?.length){let m={repositoryId:s.repository,issueId:s.issue,oid:s.oid};d=(await t.createLinkedBranch({input:s.name===""?m:{...m,name:s.name}})).createLinkedBranch?.linkedBranch?.ref?.name}else if(s.name?.length){let m=s.name.startsWith("refs/heads/")?s.name:`refs/heads/${s.name}`;d=(await t.createRef({input:{repositoryId:s.repository,name:m,oid:s.oid}})).createRef?.ref?.name}c.style=h.Toast.Style.Success,c.title=`${d} is created`,d&&(c.primaryAction={title:"Copy Branch Name",shortcut:h.Keyboard.Shortcut.Common.Copy,onAction:()=>d&&h.Clipboard.copy(d)},c.secondaryAction={title:"Open in Browser",shortcut:h.Keyboard.Shortcut.Common.OpenWith,onAction:async()=>await(0,h.open)(`${s.repoUrl}/tree/${d}`)})}catch(d){(0,h.captureException)(d),c.style=h.Toast.Style.Failure,c.title="Failed creating a branch",c.message=vr(d)}},initialValues:{repository:e?.repository??"",issue:e?.issue??"",name:e?.name??""},validation:{name:c=>{if(!s.issue?.length&&!c?.length)return"Name is required when issue is not provided"}}}),{data:u,isLoading:p}=(0,ka.useCachedPromise)(async c=>{let d=a?.find(m=>m.id===c);if(d)return await t.repositoryIssues({owner:d.owner.login,name:d.name})},[s.repository],{execute:!!s.repository}),y=u?.repository?.issues?.nodes?.filter(c=>c?.linkedBranches.totalCount==0);return(0,ai.useEffect)(()=>{let c=u?.repository?.url,d=u?.repository?.defaultBranchRef?.target?.oid;c&&i("repoUrl",c),d&&i("oid",d)},[u?.repository?.url,u?.repository?.defaultBranchRef?.target?.oid]),(0,oe.jsxs)(h.Form,{actions:(0,oe.jsx)(h.ActionPanel,{children:(0,oe.jsx)(h.Action.SubmitForm,{onSubmit:r,title:"Create Branch",icon:{source:"branch.svg",tintColor:h.Color.PrimaryText}})}),enableDrafts:!0,isLoading:n||p,children:[(0,oe.jsx)(h.Form.Dropdown,{title:"Repository",isLoading:n,...o.repository,autoFocus:!0,storeValue:!0,children:a?.map(c=>(0,oe.jsx)(h.Form.Dropdown.Item,{title:c.nameWithOwner,value:c.id,icon:{source:c.owner.avatarUrl,mask:h.Image.Mask.Circle}},c.id))}),(0,oe.jsx)(h.Form.Separator,{}),(0,oe.jsxs)(h.Form.Dropdown,{title:"Linked Issue",isLoading:p,...o.issue,info:"If you don't select an issue, a ref pointing to the last commit of the selected repository will be created instead of an issue branch",children:[(0,oe.jsx)(h.Form.Dropdown.Item,{title:"No issue",value:""},"default"),y?.map(c=>c?(0,oe.jsx)(h.Form.Dropdown.Item,{title:`#${c.number} ${c.title}`,value:c.id,...Qo(c)},c?.id):null)]}),(0,oe.jsx)(h.Form.TextField,{title:"Name",placeholder:s.issue?"Optional branch name (ie: my new branch)":"Branch name (ie: refs/heads/my_new_branch)",...o.name})]})}var Nl=Ko(ri);0&&(module.exports={BranchForm});
