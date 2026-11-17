"use strict";var li=Object.create;var Zt=Object.defineProperty;var ci=Object.getOwnPropertyDescriptor;var yi=Object.getOwnPropertyNames;var di=Object.getPrototypeOf,Si=Object.prototype.hasOwnProperty;var $a=(e,t,a)=>()=>{if(a)throw a[0];try{return e&&(t=e(e=0)),t}catch(r){throw a=[r],r}};var h=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(a){throw t=0,a}},rt=(e,t)=>{for(var a in t)Zt(e,a,{get:t[a],enumerable:!0})},Jt=(e,t,a,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of yi(t))!Si.call(e,n)&&n!==a&&Zt(e,n,{get:()=>t[n],enumerable:!(r=ci(t,n))||r.enumerable});return e},$=(e,t,a)=>(Jt(e,t,"default"),a&&Jt(a,t,"default")),B=(e,t,a)=>(a=e!=null?li(di(e)):{},Jt(t||!e||!e.__esModule?Zt(a,"default",{value:e,enumerable:!0}):a,e)),bi=e=>Jt(Zt({},"__esModule",{value:!0}),e);var qr=h(Xt=>{"use strict";Object.defineProperty(Xt,"__esModule",{value:!0});Xt.useDeepMemo=void 0;var Qa=require("react"),Ii=require("dequal/lite");function gi(e){let t=(0,Qa.useRef)(e),a=(0,Qa.useRef)(0);return(0,Ii.dequal)(e,t.current)||(t.current=e,a.current+=1),(0,Qa.useMemo)(()=>t.current,[a.current])}Xt.useDeepMemo=gi});var Ee=h(ea=>{"use strict";Object.defineProperty(ea,"__esModule",{value:!0});ea.useLatest=void 0;var Mi=require("react");function mi(e){let t=(0,Mi.useRef)(e);return t.current=e,t}ea.useLatest=mi});var ht=h(be=>{"use strict";var Ri=be&&be.__createBinding||(Object.create?(function(e,t,a,r){r===void 0&&(r=a);var n=Object.getOwnPropertyDescriptor(t,a);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,n)}):(function(e,t,a,r){r===void 0&&(r=a),e[r]=t[a]})),Ai=be&&be.__setModuleDefault||(Object.create?(function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}):function(e,t){e.default=t}),Vr=be&&be.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var a in e)a!=="default"&&Object.prototype.hasOwnProperty.call(e,a)&&Ri(t,e,a);return Ai(t,e),t};Object.defineProperty(be,"__esModule",{value:!0});be.showFailureToast=void 0;var fi=Vr(require("fs")),Pi=Vr(require("path")),nt=require("@raycast/api");function Ei(e,t){let a=e instanceof Error?e.message:String(e);return(0,nt.showToast)({style:nt.Toast.Style.Failure,title:t?.title??"Something went wrong",message:t?.message??a,primaryAction:t?.primaryAction??Nr(e),secondaryAction:t?.primaryAction?Nr(e):void 0})}be.showFailureToast=Ei;var Nr=e=>{let t=!0,a="[Extension Name]...",r="";try{let u=JSON.parse(fi.readFileSync(Pi.join(nt.environment.assetsPath,"..","package.json"),"utf8"));a=`[${u.title}]...`,r=`https://raycast.com/${u.owner||u.author}/${u.name}`,(!u.owner||u.access==="public")&&(t=!1)}catch{}let n=nt.environment.isDevelopment||t,o=e instanceof Error?e?.stack||e?.message||"":String(e);return{title:n?"Copy Logs":"Report Error",onAction(u){u.hide(),n?nt.Clipboard.copy(o):(0,nt.open)(`https://github.com/raycast/extensions/issues/new?&labels=extension%2Cbug&template=extension_bug_report.yml&title=${encodeURIComponent(a)}&extension-url=${encodeURI(r)}&description=${encodeURIComponent(`#### Error:
\`\`\`
${o}
\`\`\`
`)}`)}}}});var ot=h(ta=>{"use strict";Object.defineProperty(ta,"__esModule",{value:!0});ta.usePromise=void 0;var X=require("react"),Dt=require("@raycast/api"),Ci=qr(),we=Ee(),hi=ht();function Di(e,t,a){let r=(0,X.useRef)(0),[n,o]=(0,X.useState)({isLoading:!0}),u=(0,we.useLatest)(e),i=(0,we.useLatest)(a?.abortable),s=(0,we.useLatest)(t||[]),p=(0,we.useLatest)(a?.onError),c=(0,we.useLatest)(a?.onData),y=(0,we.useLatest)(a?.onWillExecute),I=(0,we.useLatest)(a?.failureToastOptions),M=(0,we.useLatest)(n.data),l=(0,X.useRef)(),d=(0,X.useRef)({page:0}),S=(0,X.useRef)(!1),b=(0,X.useRef)(!0),R=(0,X.useRef)(50),f=(0,X.useCallback)((...k)=>{let O=++r.current;i.current&&(i.current.current?.abort(),i.current.current=new AbortController),y.current?.(k),o(P=>({...P,isLoading:!0}));let Z=xi(u.current)(...k);function ne(P){return P.name=="AbortError"||O===r.current&&(p.current?p.current(P):Dt.environment.launchType!==Dt.LaunchType.Background&&(0,hi.showFailureToast)(P,{title:"Failed to fetch latest data",primaryAction:{title:"Retry",onAction(v){v.hide(),l.current?.(...s.current||[])}},...I.current}),o({error:P,isLoading:!1})),P}return typeof Z=="function"?(S.current=!0,Z(d.current).then(({data:P,hasMore:v,cursor:L})=>(O===r.current&&(d.current&&(d.current.cursor=L,d.current.lastItem=P?.[P.length-1]),c.current&&c.current(P,d.current),v&&(R.current=P.length),b.current=v,o(F=>d.current.page===0?{data:P,isLoading:!1}:{data:(F.data||[])?.concat(P),isLoading:!1})),P),P=>(b.current=!1,ne(P)))):(S.current=!1,Z.then(P=>(O===r.current&&(c.current&&c.current(P),o({data:P,isLoading:!1})),P),ne))},[i,c,p,s,u,o,l,y,d,I]);l.current=f;let m=(0,X.useCallback)(()=>{d.current={page:0};let k=s.current||[];return f(...k)},[f,s]),C=(0,X.useCallback)(async(k,O)=>{let Z;try{if(O?.optimisticUpdate){typeof O?.rollbackOnError!="function"&&O?.rollbackOnError!==!1&&(Z=structuredClone(M.current?.value));let ne=O.optimisticUpdate;o(P=>({...P,data:ne(P.data)}))}return await k}catch(ne){if(typeof O?.rollbackOnError=="function"){let P=O.rollbackOnError;o(v=>({...v,data:P(v.data)}))}else O?.optimisticUpdate&&O?.rollbackOnError!==!1&&o(P=>({...P,data:Z}));throw ne}finally{O?.shouldRevalidateAfter!==!1&&(Dt.environment.launchType===Dt.LaunchType.Background||Dt.environment.commandMode==="menu-bar"?await m():m())}},[m,M,o]),E=(0,X.useCallback)(()=>{d.current.page+=1;let k=s.current||[];f(...k)},[d,s,f]);(0,X.useEffect)(()=>{d.current={page:0},a?.execute!==!1?f(...t||[]):i.current&&i.current.current?.abort()},[(0,Ci.useDeepMemo)([t,a?.execute,f]),i,d]),(0,X.useEffect)(()=>()=>{i.current&&i.current.current?.abort()},[i]);let _=a?.execute!==!1?n.isLoading:!1,w={...n,isLoading:_},J=S.current?{pageSize:R.current,hasMore:b.current,onLoadMore:E}:void 0;return{...w,revalidate:m,mutate:C,pagination:J}}ta.usePromise=Di;function xi(e){return e===Promise.all||e===Promise.race||e===Promise.resolve||e===Promise.reject?e.bind(Promise):e}});var Oe=h(Ie=>{"use strict";var _i=Ie&&Ie.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Ie,"__esModule",{value:!0});Ie.hash=Ie.reviver=Ie.replacer=void 0;var Ui=_i(require("object-hash"));function vi(e,t){let a=this[e];return a instanceof Date?`__raycast_cached_date__${a.toString()}`:Buffer.isBuffer(a)?`__raycast_cached_buffer__${a.toString("base64")}`:t}Ie.replacer=vi;function Ti(e,t){return typeof t=="string"&&t.startsWith("__raycast_cached_date__")?new Date(t.replace("__raycast_cached_date__","")):typeof t=="string"&&t.startsWith("__raycast_cached_buffer__")?Buffer.from(t.replace("__raycast_cached_buffer__",""),"base64"):t}Ie.reviver=Ti;function wi(e,t){return(0,Ui.default)(e,{replacer:a=>a instanceof URLSearchParams?a.toString():a,...t})}Ie.hash=wi});var ra=h(aa=>{"use strict";Object.defineProperty(aa,"__esModule",{value:!0});aa.useCachedState=void 0;var Wa=require("react"),Oi=require("@raycast/api"),Ka=Ee(),kr=Oe(),Bi=Symbol("cache without namespace"),Fr=new Map;function Li(e,t,a){let r=a?.cacheNamespace||Bi,n=Fr.get(r)||Fr.set(r,new Oi.Cache({namespace:a?.cacheNamespace})).get(r);if(!n)throw new Error("Missing cache");let o=(0,Ka.useLatest)(e),u=(0,Ka.useLatest)(t),i=(0,Wa.useSyncExternalStore)(n.subscribe,()=>{try{return n.get(o.current)}catch(y){console.error("Could not get Cache data:",y);return}}),s=(0,Wa.useMemo)(()=>{if(typeof i<"u"){if(i==="undefined")return;try{return JSON.parse(i,kr.reviver)}catch(y){return console.warn("The cached data is corrupted",y),u.current}}else return u.current},[i,u]),p=(0,Ka.useLatest)(s),c=(0,Wa.useCallback)(y=>{let I=typeof y=="function"?y(p.current):y;if(typeof I>"u")n.set(o.current,"undefined");else{let M=JSON.stringify(I,kr.replacer);n.set(o.current,M)}return I},[n,o,p]);return[s,c]}aa.useCachedState=Li});var _t=h(na=>{"use strict";Object.defineProperty(na,"__esModule",{value:!0});na.useCachedPromise=void 0;var xt=require("react"),qi=ra(),Ni=ot(),Vi=Ee(),jr=Oe(),it=Symbol();function ki(e,t,a){let{initialData:r,keepPreviousData:n,internal_cacheKeySuffix:o,...u}=a||{},i=(0,xt.useRef)(),[s,p]=(0,qi.useCachedState)((0,jr.hash)(t||[])+o,it,{cacheNamespace:(0,jr.hash)(e)}),c=(0,xt.useRef)(s!==it?s:r),y=(0,xt.useRef)(void 0),{mutate:I,revalidate:M,...l}=(0,Ni.usePromise)(e,t||[],{...u,onData(f,m){y.current=m,u.onData&&u.onData(f,m),!(m&&m.page>0)&&(i.current="promise",c.current=f,p(f))}}),d,S=l.pagination;y.current&&y.current.page>0&&l.data?d=l.data:i.current==="promise"?d=c.current:n&&s!==it?(d=s,S&&(S.hasMore=!0,S.pageSize=s.length)):n&&s===it?d=c.current:s!==it?(d=s,S&&(S.hasMore=!0,S.pageSize=s.length)):d=r;let b=(0,Vi.useLatest)(d),R=(0,xt.useCallback)(async(f,m)=>{let C;try{if(m?.optimisticUpdate){typeof m?.rollbackOnError!="function"&&m?.rollbackOnError!==!1&&(C=structuredClone(b.current));let E=m.optimisticUpdate(b.current);i.current="cache",c.current=E,p(E)}return await I(f,{shouldRevalidateAfter:m?.shouldRevalidateAfter})}catch(E){if(typeof m?.rollbackOnError=="function"){let _=m.rollbackOnError(b.current);i.current="cache",c.current=_,p(_)}else m?.optimisticUpdate&&m?.rollbackOnError!==!1&&(i.current="cache",c.current=C,p(C));throw E}},[p,I,b,c,i]);return(0,xt.useEffect)(()=>{s!==it&&(i.current="cache",c.current=s)},[s]),{data:d,isLoading:l.isLoading,error:l.error,mutate:y.current&&y.current.page>0?I:R,pagination:S,revalidate:M}}na.useCachedPromise=ki});var en=h((ye,Xr)=>{"use strict";Object.defineProperty(ye,"__esModule",{value:!0});function lt(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var ce=lt(require("stream")),$r=lt(require("http")),ia=lt(require("url")),Qr=lt(require("whatwg-url")),Fi=lt(require("https")),$e=lt(require("zlib")),ji=ce.Readable,Ce=Symbol("buffer"),Ya=Symbol("type"),vt=class e{constructor(){this[Ya]="";let t=arguments[0],a=arguments[1],r=[],n=0;if(t){let u=t,i=Number(u.length);for(let s=0;s<i;s++){let p=u[s],c;p instanceof Buffer?c=p:ArrayBuffer.isView(p)?c=Buffer.from(p.buffer,p.byteOffset,p.byteLength):p instanceof ArrayBuffer?c=Buffer.from(p):p instanceof e?c=p[Ce]:c=Buffer.from(typeof p=="string"?p:String(p)),n+=c.length,r.push(c)}}this[Ce]=Buffer.concat(r);let o=a&&a.type!==void 0&&String(a.type).toLowerCase();o&&!/[^\u0020-\u007E]/.test(o)&&(this[Ya]=o)}get size(){return this[Ce].length}get type(){return this[Ya]}text(){return Promise.resolve(this[Ce].toString())}arrayBuffer(){let t=this[Ce],a=t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength);return Promise.resolve(a)}stream(){let t=new ji;return t._read=function(){},t.push(this[Ce]),t.push(null),t}toString(){return"[object Blob]"}slice(){let t=this.size,a=arguments[0],r=arguments[1],n,o;a===void 0?n=0:a<0?n=Math.max(t+a,0):n=Math.min(a,t),r===void 0?o=t:r<0?o=Math.max(t+r,0):o=Math.min(r,t);let u=Math.max(o-n,0),s=this[Ce].slice(n,n+u),p=new e([],{type:arguments[2]});return p[Ce]=s,p}};Object.defineProperties(vt.prototype,{size:{enumerable:!0},type:{enumerable:!0},slice:{enumerable:!0}});Object.defineProperty(vt.prototype,Symbol.toStringTag,{value:"Blob",writable:!1,enumerable:!1,configurable:!0});function j(e,t,a){Error.call(this,e),this.message=e,this.type=t,a&&(this.code=this.errno=a.code),Error.captureStackTrace(this,this.constructor)}j.prototype=Object.create(Error.prototype);j.prototype.constructor=j;j.prototype.name="FetchError";var er;try{er=require("encoding").convert}catch{}var De=Symbol("Body internals"),zr=ce.PassThrough;function q(e){var t=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.size;let n=r===void 0?0:r;var o=a.timeout;let u=o===void 0?0:o;e==null?e=null:Wr(e)?e=Buffer.from(e.toString()):wt(e)||Buffer.isBuffer(e)||(Object.prototype.toString.call(e)==="[object ArrayBuffer]"?e=Buffer.from(e):ArrayBuffer.isView(e)?e=Buffer.from(e.buffer,e.byteOffset,e.byteLength):e instanceof ce||(e=Buffer.from(String(e)))),this[De]={body:e,disturbed:!1,error:null},this.size=n,this.timeout=u,e instanceof ce&&e.on("error",function(i){let s=i.name==="AbortError"?i:new j(`Invalid response body while trying to fetch ${t.url}: ${i.message}`,"system",i);t[De].error=s})}q.prototype={get body(){return this[De].body},get bodyUsed(){return this[De].disturbed},arrayBuffer(){return st.call(this).then(function(e){return e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength)})},blob(){let e=this.headers&&this.headers.get("content-type")||"";return st.call(this).then(function(t){return Object.assign(new vt([],{type:e.toLowerCase()}),{[Ce]:t})})},json(){var e=this;return st.call(this).then(function(t){try{return JSON.parse(t.toString())}catch(a){return q.Promise.reject(new j(`invalid json response body at ${e.url} reason: ${a.message}`,"invalid-json"))}})},text(){return st.call(this).then(function(e){return e.toString()})},buffer(){return st.call(this)},textConverted(){var e=this;return st.call(this).then(function(t){return zi(t,e.headers)})}};Object.defineProperties(q.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0}});q.mixIn=function(e){for(let t of Object.getOwnPropertyNames(q.prototype))if(!(t in e)){let a=Object.getOwnPropertyDescriptor(q.prototype,t);Object.defineProperty(e,t,a)}};function st(){var e=this;if(this[De].disturbed)return q.Promise.reject(new TypeError(`body used already for: ${this.url}`));if(this[De].disturbed=!0,this[De].error)return q.Promise.reject(this[De].error);let t=this.body;if(t===null)return q.Promise.resolve(Buffer.alloc(0));if(wt(t)&&(t=t.stream()),Buffer.isBuffer(t))return q.Promise.resolve(t);if(!(t instanceof ce))return q.Promise.resolve(Buffer.alloc(0));let a=[],r=0,n=!1;return new q.Promise(function(o,u){let i;e.timeout&&(i=setTimeout(function(){n=!0,u(new j(`Response timeout while trying to fetch ${e.url} (over ${e.timeout}ms)`,"body-timeout"))},e.timeout)),t.on("error",function(s){s.name==="AbortError"?(n=!0,u(s)):u(new j(`Invalid response body while trying to fetch ${e.url}: ${s.message}`,"system",s))}),t.on("data",function(s){if(!(n||s===null)){if(e.size&&r+s.length>e.size){n=!0,u(new j(`content size at ${e.url} over limit: ${e.size}`,"max-size"));return}r+=s.length,a.push(s)}}),t.on("end",function(){if(!n){clearTimeout(i);try{o(Buffer.concat(a,r))}catch(s){u(new j(`Could not create Buffer from response body for ${e.url}: ${s.message}`,"system",s))}}})})}function zi(e,t){if(typeof er!="function")throw new Error("The package `encoding` must be installed to use the textConverted() function");let a=t.get("content-type"),r="utf-8",n,o;return a&&(n=/charset=([^;]*)/i.exec(a)),o=e.slice(0,1024).toString(),!n&&o&&(n=/<meta.+?charset=(['"])(.+?)\1/i.exec(o)),!n&&o&&(n=/<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(o),n||(n=/<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(o),n&&n.pop()),n&&(n=/charset=(.*)/i.exec(n.pop()))),!n&&o&&(n=/<\?xml.+?encoding=(['"])(.+?)\1/i.exec(o)),n&&(r=n.pop(),(r==="gb2312"||r==="gbk")&&(r="gb18030")),er(e,"UTF-8",r).toString()}function Wr(e){return typeof e!="object"||typeof e.append!="function"||typeof e.delete!="function"||typeof e.get!="function"||typeof e.getAll!="function"||typeof e.has!="function"||typeof e.set!="function"?!1:e.constructor.name==="URLSearchParams"||Object.prototype.toString.call(e)==="[object URLSearchParams]"||typeof e.sort=="function"}function wt(e){return typeof e=="object"&&typeof e.arrayBuffer=="function"&&typeof e.type=="string"&&typeof e.stream=="function"&&typeof e.constructor=="function"&&typeof e.constructor.name=="string"&&/^(Blob|File)$/.test(e.constructor.name)&&/^(Blob|File)$/.test(e[Symbol.toStringTag])}function Kr(e){let t,a,r=e.body;if(e.bodyUsed)throw new Error("cannot clone body after it is used");return r instanceof ce&&typeof r.getBoundary!="function"&&(t=new zr,a=new zr,r.pipe(t),r.pipe(a),e[De].body=t,r=a),r}function Yr(e){return e===null?null:typeof e=="string"?"text/plain;charset=UTF-8":Wr(e)?"application/x-www-form-urlencoded;charset=UTF-8":wt(e)?e.type||null:Buffer.isBuffer(e)||Object.prototype.toString.call(e)==="[object ArrayBuffer]"||ArrayBuffer.isView(e)?null:typeof e.getBoundary=="function"?`multipart/form-data;boundary=${e.getBoundary()}`:e instanceof ce?null:"text/plain;charset=UTF-8"}function Jr(e){let t=e.body;return t===null?0:wt(t)?t.size:Buffer.isBuffer(t)?t.length:t&&typeof t.getLengthSync=="function"&&(t._lengthRetrievers&&t._lengthRetrievers.length==0||t.hasKnownLength&&t.hasKnownLength())?t.getLengthSync():null}function Hi(e,t){let a=t.body;a===null?e.end():wt(a)?a.stream().pipe(e):Buffer.isBuffer(a)?(e.write(a),e.end()):a.pipe(e)}q.Promise=global.Promise;var Zr=/[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/,tr=/[^\t\x20-\x7e\x80-\xff]/;function Ut(e){if(e=`${e}`,Zr.test(e)||e==="")throw new TypeError(`${e} is not a legal HTTP header name`)}function Hr(e){if(e=`${e}`,tr.test(e))throw new TypeError(`${e} is not a legal HTTP header value`)}function ut(e,t){t=t.toLowerCase();for(let a in e)if(a.toLowerCase()===t)return a}var T=Symbol("map"),ie=class e{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:void 0;if(this[T]=Object.create(null),t instanceof e){let a=t.raw(),r=Object.keys(a);for(let n of r)for(let o of a[n])this.append(n,o);return}if(t!=null)if(typeof t=="object"){let a=t[Symbol.iterator];if(a!=null){if(typeof a!="function")throw new TypeError("Header pairs must be iterable");let r=[];for(let n of t){if(typeof n!="object"||typeof n[Symbol.iterator]!="function")throw new TypeError("Each header pair must be iterable");r.push(Array.from(n))}for(let n of r){if(n.length!==2)throw new TypeError("Each header pair must be a name/value tuple");this.append(n[0],n[1])}}else for(let r of Object.keys(t)){let n=t[r];this.append(r,n)}}else throw new TypeError("Provided initializer must be an object")}get(t){t=`${t}`,Ut(t);let a=ut(this[T],t);return a===void 0?null:this[T][a].join(", ")}forEach(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:void 0,r=ar(this),n=0;for(;n<r.length;){var o=r[n];let u=o[0],i=o[1];t.call(a,i,u,this),r=ar(this),n++}}set(t,a){t=`${t}`,a=`${a}`,Ut(t),Hr(a);let r=ut(this[T],t);this[T][r!==void 0?r:t]=[a]}append(t,a){t=`${t}`,a=`${a}`,Ut(t),Hr(a);let r=ut(this[T],t);r!==void 0?this[T][r].push(a):this[T][t]=[a]}has(t){return t=`${t}`,Ut(t),ut(this[T],t)!==void 0}delete(t){t=`${t}`,Ut(t);let a=ut(this[T],t);a!==void 0&&delete this[T][a]}raw(){return this[T]}keys(){return Ja(this,"key")}values(){return Ja(this,"value")}[Symbol.iterator](){return Ja(this,"key+value")}};ie.prototype.entries=ie.prototype[Symbol.iterator];Object.defineProperty(ie.prototype,Symbol.toStringTag,{value:"Headers",writable:!1,enumerable:!1,configurable:!0});Object.defineProperties(ie.prototype,{get:{enumerable:!0},forEach:{enumerable:!0},set:{enumerable:!0},append:{enumerable:!0},has:{enumerable:!0},delete:{enumerable:!0},keys:{enumerable:!0},values:{enumerable:!0},entries:{enumerable:!0}});function ar(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"key+value";return Object.keys(e[T]).sort().map(t==="key"?function(r){return r.toLowerCase()}:t==="value"?function(r){return e[T][r].join(", ")}:function(r){return[r.toLowerCase(),e[T][r].join(", ")]})}var rr=Symbol("internal");function Ja(e,t){let a=Object.create(nr);return a[rr]={target:e,kind:t,index:0},a}var nr=Object.setPrototypeOf({next(){if(!this||Object.getPrototypeOf(this)!==nr)throw new TypeError("Value of `this` is not a HeadersIterator");var e=this[rr];let t=e.target,a=e.kind,r=e.index,n=ar(t,a),o=n.length;return r>=o?{value:void 0,done:!0}:(this[rr].index=r+1,{value:n[r],done:!1})}},Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));Object.defineProperty(nr,Symbol.toStringTag,{value:"HeadersIterator",writable:!1,enumerable:!1,configurable:!0});function Gi(e){let t=Object.assign({__proto__:null},e[T]),a=ut(e[T],"Host");return a!==void 0&&(t[a]=t[a][0]),t}function $i(e){let t=new ie;for(let a of Object.keys(e))if(!Zr.test(a))if(Array.isArray(e[a]))for(let r of e[a])tr.test(r)||(t[T][a]===void 0?t[T][a]=[r]:t[T][a].push(r));else tr.test(e[a])||(t[T][a]=[e[a]]);return t}var Be=Symbol("Response internals"),Qi=$r.STATUS_CODES,oe=class e{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};q.call(this,t,a);let r=a.status||200,n=new ie(a.headers);if(t!=null&&!n.has("Content-Type")){let o=Yr(t);o&&n.append("Content-Type",o)}this[Be]={url:a.url,status:r,statusText:a.statusText||Qi[r],headers:n,counter:a.counter}}get url(){return this[Be].url||""}get status(){return this[Be].status}get ok(){return this[Be].status>=200&&this[Be].status<300}get redirected(){return this[Be].counter>0}get statusText(){return this[Be].statusText}get headers(){return this[Be].headers}clone(){return new e(Kr(this),{url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected})}};q.mixIn(oe.prototype);Object.defineProperties(oe.prototype,{url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}});Object.defineProperty(oe.prototype,Symbol.toStringTag,{value:"Response",writable:!1,enumerable:!1,configurable:!0});var he=Symbol("Request internals"),Wi=ia.URL||Qr.URL,Ki=ia.parse,Yi=ia.format;function Za(e){return/^[a-zA-Z][a-zA-Z\d+\-.]*:/.exec(e)&&(e=new Wi(e).toString()),Ki(e)}var Ji="destroy"in ce.Readable.prototype;function oa(e){return typeof e=="object"&&typeof e[he]=="object"}function Zi(e){let t=e&&typeof e=="object"&&Object.getPrototypeOf(e);return!!(t&&t.constructor.name==="AbortSignal")}var qe=class e{constructor(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r;oa(t)?r=Za(t.url):(t&&t.href?r=Za(t.href):r=Za(`${t}`),t={});let n=a.method||t.method||"GET";if(n=n.toUpperCase(),(a.body!=null||oa(t)&&t.body!==null)&&(n==="GET"||n==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");let o=a.body!=null?a.body:oa(t)&&t.body!==null?Kr(t):null;q.call(this,o,{timeout:a.timeout||t.timeout||0,size:a.size||t.size||0});let u=new ie(a.headers||t.headers||{});if(o!=null&&!u.has("Content-Type")){let s=Yr(o);s&&u.append("Content-Type",s)}let i=oa(t)?t.signal:null;if("signal"in a&&(i=a.signal),i!=null&&!Zi(i))throw new TypeError("Expected signal to be an instanceof AbortSignal");this[he]={method:n,redirect:a.redirect||t.redirect||"follow",headers:u,parsedURL:r,signal:i},this.follow=a.follow!==void 0?a.follow:t.follow!==void 0?t.follow:20,this.compress=a.compress!==void 0?a.compress:t.compress!==void 0?t.compress:!0,this.counter=a.counter||t.counter||0,this.agent=a.agent||t.agent}get method(){return this[he].method}get url(){return Yi(this[he].parsedURL)}get headers(){return this[he].headers}get redirect(){return this[he].redirect}get signal(){return this[he].signal}clone(){return new e(this)}};q.mixIn(qe.prototype);Object.defineProperty(qe.prototype,Symbol.toStringTag,{value:"Request",writable:!1,enumerable:!1,configurable:!0});Object.defineProperties(qe.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0}});function Xi(e){let t=e[he].parsedURL,a=new ie(e[he].headers);if(a.has("Accept")||a.set("Accept","*/*"),!t.protocol||!t.hostname)throw new TypeError("Only absolute URLs are supported");if(!/^https?:$/.test(t.protocol))throw new TypeError("Only HTTP(S) protocols are supported");if(e.signal&&e.body instanceof ce.Readable&&!Ji)throw new Error("Cancellation of streamed requests with AbortSignal is not supported in node < 8");let r=null;if(e.body==null&&/^(POST|PUT)$/i.test(e.method)&&(r="0"),e.body!=null){let o=Jr(e);typeof o=="number"&&(r=String(o))}r&&a.set("Content-Length",r),a.has("User-Agent")||a.set("User-Agent","node-fetch/1.0 (+https://github.com/bitinn/node-fetch)"),e.compress&&!a.has("Accept-Encoding")&&a.set("Accept-Encoding","gzip,deflate");let n=e.agent;return typeof n=="function"&&(n=n(t)),Object.assign({},t,{method:e.method,headers:Gi(a),agent:n})}function pt(e){Error.call(this,e),this.type="aborted",this.message=e,Error.captureStackTrace(this,this.constructor)}pt.prototype=Object.create(Error.prototype);pt.prototype.constructor=pt;pt.prototype.name="AbortError";var Tt=ia.URL||Qr.URL,Gr=ce.PassThrough,es=function(t,a){let r=new Tt(a).hostname,n=new Tt(t).hostname;return r===n||r[r.length-n.length-1]==="."&&r.endsWith(n)},ts=function(t,a){let r=new Tt(a).protocol,n=new Tt(t).protocol;return r===n};function Le(e,t){if(!Le.Promise)throw new Error("native promise missing, set fetch.Promise to your favorite alternative");return q.Promise=Le.Promise,new Le.Promise(function(a,r){let n=new qe(e,t),o=Xi(n),u=(o.protocol==="https:"?Fi:$r).request,i=n.signal,s=null,p=function(){let d=new pt("The user aborted a request.");r(d),n.body&&n.body instanceof ce.Readable&&Xa(n.body,d),!(!s||!s.body)&&s.body.emit("error",d)};if(i&&i.aborted){p();return}let c=function(){p(),M()},y=u(o),I;i&&i.addEventListener("abort",c);function M(){y.abort(),i&&i.removeEventListener("abort",c),clearTimeout(I)}n.timeout&&y.once("socket",function(l){I=setTimeout(function(){r(new j(`network timeout at: ${n.url}`,"request-timeout")),M()},n.timeout)}),y.on("error",function(l){r(new j(`request to ${n.url} failed, reason: ${l.message}`,"system",l)),s&&s.body&&Xa(s.body,l),M()}),as(y,function(l){i&&i.aborted||s&&s.body&&Xa(s.body,l)}),parseInt(process.version.substring(1))<14&&y.on("socket",function(l){l.addListener("close",function(d){let S=l.listenerCount("data")>0;if(s&&S&&!d&&!(i&&i.aborted)){let b=new Error("Premature close");b.code="ERR_STREAM_PREMATURE_CLOSE",s.body.emit("error",b)}})}),y.on("response",function(l){clearTimeout(I);let d=$i(l.headers);if(Le.isRedirect(l.statusCode)){let m=d.get("Location"),C=null;try{C=m===null?null:new Tt(m,n.url).toString()}catch{if(n.redirect!=="manual"){r(new j(`uri requested responds with an invalid redirect URL: ${m}`,"invalid-redirect")),M();return}}switch(n.redirect){case"error":r(new j(`uri requested responds with a redirect, redirect mode is set to error: ${n.url}`,"no-redirect")),M();return;case"manual":if(C!==null)try{d.set("Location",C)}catch(_){r(_)}break;case"follow":if(C===null)break;if(n.counter>=n.follow){r(new j(`maximum redirect reached at: ${n.url}`,"max-redirect")),M();return}let E={headers:new ie(n.headers),follow:n.follow,counter:n.counter+1,agent:n.agent,compress:n.compress,method:n.method,body:n.body,signal:n.signal,timeout:n.timeout,size:n.size};if(!es(n.url,C)||!ts(n.url,C))for(let _ of["authorization","www-authenticate","cookie","cookie2"])E.headers.delete(_);if(l.statusCode!==303&&n.body&&Jr(n)===null){r(new j("Cannot follow redirect with body being a readable stream","unsupported-redirect")),M();return}(l.statusCode===303||(l.statusCode===301||l.statusCode===302)&&n.method==="POST")&&(E.method="GET",E.body=void 0,E.headers.delete("content-length")),a(Le(new qe(C,E))),M();return}}l.once("end",function(){i&&i.removeEventListener("abort",c)});let S=l.pipe(new Gr),b={url:n.url,status:l.statusCode,statusText:l.statusMessage,headers:d,size:n.size,timeout:n.timeout,counter:n.counter},R=d.get("Content-Encoding");if(!n.compress||n.method==="HEAD"||R===null||l.statusCode===204||l.statusCode===304){s=new oe(S,b),a(s);return}let f={flush:$e.Z_SYNC_FLUSH,finishFlush:$e.Z_SYNC_FLUSH};if(R=="gzip"||R=="x-gzip"){S=S.pipe($e.createGunzip(f)),s=new oe(S,b),a(s);return}if(R=="deflate"||R=="x-deflate"){let m=l.pipe(new Gr);m.once("data",function(C){(C[0]&15)===8?S=S.pipe($e.createInflate()):S=S.pipe($e.createInflateRaw()),s=new oe(S,b),a(s)}),m.on("end",function(){s||(s=new oe(S,b),a(s))});return}if(R=="br"&&typeof $e.createBrotliDecompress=="function"){S=S.pipe($e.createBrotliDecompress()),s=new oe(S,b),a(s);return}s=new oe(S,b),a(s)}),Hi(y,n)})}function as(e,t){let a;e.on("socket",function(r){a=r}),e.on("response",function(r){let n=r.headers;n["transfer-encoding"]==="chunked"&&!n["content-length"]&&r.once("close",function(o){if(a&&a.listenerCount("data")>0&&!o){let i=new Error("Premature close");i.code="ERR_STREAM_PREMATURE_CLOSE",t(i)}})})}function Xa(e,t){e.destroy?e.destroy(t):(e.emit("error",t),e.end())}Le.isRedirect=function(e){return e===301||e===302||e===303||e===307||e===308};Le.Promise=global.Promise;Xr.exports=ye=Le;Object.defineProperty(ye,"__esModule",{value:!0});ye.default=ye;ye.Headers=ie;ye.Request=qe;ye.Response=oe;ye.FetchError=j;ye.AbortError=pt});var Bt=h((Qe,tn)=>{var Ot=en(),rs=Ot.default||Ot,sa=function(e,t){return/^\/\//.test(e)&&(e="https:"+e),rs.call(this,e,t)};sa.ponyfill=!0;tn.exports=Qe=sa;Qe.fetch=sa;Qe.Headers=Ot.Headers;Qe.Request=Ot.Request;Qe.Response=Ot.Response;Qe.default=sa});var or=h(ua=>{"use strict";Object.defineProperty(ua,"__esModule",{value:!0});ua.isJSON=void 0;function ns(e){if(e){let t=is(e);if(!t)return!1;if(t.subtype==="json"||t.suffix==="json"||t.suffix&&/\bjson\b/i.test(t.suffix)||t.subtype&&/\bjson\b/i.test(t.subtype))return!0}return!1}ua.isJSON=ns;var os=/^([A-Za-z0-9][A-Za-z0-9!#$&^_-]{0,126})\/([A-Za-z0-9][A-Za-z0-9!#$&^_.+-]{0,126});?$/;function is(e){let t=e.indexOf(";"),a=t!==-1?e.slice(0,t).trim():e.trim(),r=os.exec(a.toLowerCase().toLowerCase());if(!r)return;let n=r[1],o=r[2],u,i=o.lastIndexOf("+");return i!==-1&&(u=o.substring(i+1),o=o.substring(0,i)),{type:n,subtype:o,suffix:u}}});var on=h(pa=>{"use strict";Object.defineProperty(pa,"__esModule",{value:!0});pa.useFetch=void 0;var ct=require("react"),ss=_t(),an=Ee(),rn=Bt(),us=or(),nn=Oe();async function ps(e){if(!e.ok)throw new Error(e.statusText);let t=e.headers.get("content-type");return t&&(0,us.isJSON)(t)?await e.json():await e.text()}function ls(e){return{data:e,hasMore:!1}}function cs(e,t){let{parseResponse:a,mapResult:r,initialData:n,execute:o,keepPreviousData:u,onError:i,onData:s,onWillExecute:p,failureToastOptions:c,...y}=t||{},I={initialData:n,execute:o,keepPreviousData:u,onError:i,onData:s,onWillExecute:p,failureToastOptions:c},M=(0,an.useLatest)(a||ps),l=(0,an.useLatest)(r||ls),d=(0,ct.useRef)(),S=(0,ct.useRef)(),b=typeof e=="function"?e({page:0}):void 0;(!d.current||typeof S.current>"u"||S.current!==b)&&(d.current=e),S.current=b;let R=(0,ct.useRef)(),f=(0,ct.useCallback)((E,_)=>async w=>{let J=await(0,rn.fetch)(E(w),{signal:R.current?.signal,..._}),k=await M.current(J);return l.current?.(k)},[M,l]),m=(0,ct.useCallback)(async(E,_)=>{let w=await(0,rn.fetch)(E,{signal:R.current?.signal,..._}),J=await M.current(w);return l.current(J)?.data},[M,l]),C=(0,ct.useMemo)(()=>S.current?f:m,[S,m,f]);return(0,ss.useCachedPromise)(C,[d.current,y],{...I,internal_cacheKeySuffix:S.current+(0,nn.hash)(l.current)+(0,nn.hash)(M.current),abortable:R})}pa.useFetch=cs});var la=h(se=>{"use strict";var ys=se&&se.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(se,"__esModule",{value:!0});se.defaultParsing=se.handleOutput=se.getSpawnedResult=se.getSpawnedPromise=void 0;var ds=require("node:buffer"),pn=ys(require("node:stream")),Ss=require("node:util"),bs=require("signal-exit");function Is(e,{timeout:t}={}){let a=new Promise((i,s)=>{e.on("exit",(p,c)=>{i({exitCode:p,signal:c,timedOut:!1})}),e.on("error",p=>{s(p)}),e.stdin&&e.stdin.on("error",p=>{s(p)})});if(t===0||t===void 0)return a;let r,n=new Promise((i,s)=>{r=setTimeout(()=>{e.kill("SIGTERM"),s(Object.assign(new Error("Timed out"),{timedOut:!0,signal:"SIGTERM"}))},t)}),o=a.finally(()=>{clearTimeout(r)}),u=(0,bs.onExit)(()=>{e.kill()});return Promise.race([n,o]).finally(()=>u())}se.getSpawnedPromise=Is;var ir=class extends Error{constructor(){super("The output is too big"),this.name="MaxBufferError"}},gs=(0,Ss.promisify)(pn.default.pipeline);function Ms(e){let{encoding:t}=e,a=t==="buffer",r=new pn.default.PassThrough({objectMode:!1});t&&t!=="buffer"&&r.setEncoding(t);let n=0,o=[];return r.on("data",u=>{o.push(u),n+=u.length}),r.getBufferedValue=()=>a?Buffer.concat(o,n):o.join(""),r.getBufferedLength=()=>n,r}async function sn(e,t){let a=Ms(t);return await new Promise((r,n)=>{let o=u=>{u&&a.getBufferedLength()<=ds.constants.MAX_LENGTH&&(u.bufferedData=a.getBufferedValue()),n(u)};(async()=>{try{await gs(e,a),r()}catch(u){o(u)}})(),a.on("data",()=>{a.getBufferedLength()>1e3*1e3*80&&o(new ir)})}),a.getBufferedValue()}async function un(e,t){e.destroy();try{return await t}catch(a){return a.bufferedData}}async function ms({stdout:e,stderr:t},{encoding:a},r){let n=sn(e,{encoding:a}),o=sn(t,{encoding:a});try{return await Promise.all([r,n,o])}catch(u){return Promise.all([{error:u,exitCode:null,signal:u.signal,timedOut:u.timedOut||!1},un(e,n),un(t,o)])}}se.getSpawnedResult=ms;function Rs(e){let t=typeof e=="string"?`
`:10,a=typeof e=="string"?"\r":13;return e[e.length-1]===t&&(e=e.slice(0,-1)),e[e.length-1]===a&&(e=e.slice(0,-1)),e}function As(e,t){return e.stripFinalNewline?Rs(t):t}se.handleOutput=As;var fs=({timedOut:e,timeout:t,signal:a,exitCode:r})=>e?`timed out after ${t} milliseconds`:a!=null?`was killed with ${a}`:r!=null?`failed with exit code ${r}`:"failed",Ps=({stdout:e,stderr:t,error:a,signal:r,exitCode:n,command:o,timedOut:u,options:i,parentError:s})=>{let c=`Command ${fs({timedOut:u,timeout:i?.timeout,signal:r,exitCode:n})}: ${o}`,y=a?`${c}
${a.message}`:c,I=[y,t,e].filter(Boolean).join(`
`);return a?a.originalMessage=a.message:a=s,a.message=I,a.shortMessage=y,a.command=o,a.exitCode=n,a.signal=r,a.stdout=e,a.stderr=t,"bufferedData"in a&&delete a.bufferedData,a};function Es({stdout:e,stderr:t,error:a,exitCode:r,signal:n,timedOut:o,command:u,options:i,parentError:s}){if(a||r!==0||n!==null)throw Ps({error:a,exitCode:r,signal:n,stdout:e,stderr:t,command:u,timedOut:o,options:i,parentError:s});return e}se.defaultParsing=Es});var cn=h(yt=>{"use strict";var Cs=yt&&yt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(yt,"__esModule",{value:!0});yt.useExec=void 0;var hs=Cs(require("node:child_process")),ln=require("react"),Ds=_t(),xs=Ee(),Lt=la(),_s=/ +/g;function Us(e,t){if(t)return[e,...t];let a=[];for(let r of e.trim().split(_s)){let n=a[a.length-1];n&&n.endsWith("\\")?a[a.length-1]=`${n.slice(0,-1)} ${r}`:a.push(r)}return a}function vs(e,t,a){let{parseOutput:r,input:n,onData:o,onWillExecute:u,initialData:i,execute:s,keepPreviousData:p,onError:c,failureToastOptions:y,...I}=Array.isArray(t)?a||{}:t||{},M={initialData:i,execute:s,keepPreviousData:p,onError:c,onData:o,onWillExecute:u,failureToastOptions:y},l=(0,ln.useRef)(),d=(0,xs.useLatest)(r||Lt.defaultParsing),S=(0,ln.useCallback)(async(b,R,f,m)=>{let[C,...E]=Us(b,R),_=[C,...E].join(" "),w={stripFinalNewline:!0,...f,timeout:f?.timeout||1e4,signal:l.current?.signal,encoding:f?.encoding===null?"buffer":f?.encoding||"utf8",env:{PATH:"/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin",...process.env,...f?.env}},J=hs.default.spawn(C,E,w),k=(0,Lt.getSpawnedPromise)(J,w);m&&J.stdin.end(m);let[{error:O,exitCode:Z,signal:ne,timedOut:P},v,L]=await(0,Lt.getSpawnedResult)(J,w,k),F=(0,Lt.handleOutput)(w,v),Ct=(0,Lt.handleOutput)(w,L);return d.current({stdout:F,stderr:Ct,error:O,exitCode:Z,signal:ne,timedOut:P,command:_,options:w,parentError:new Error})},[d]);return(0,Ds.useCachedPromise)(S,[e,Array.isArray(t)?t:[],I,n],{...M,abortable:l})}yt.useExec=vs});var bn=h(dt=>{"use strict";var ya=dt&&dt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(dt,"__esModule",{value:!0});dt.useStreamJSON=void 0;var Ts=require("@raycast/api"),yn=ya(Bt()),Vt=require("node:fs"),sr=require("node:fs/promises"),ca=require("node:path"),dn=require("node:stream/promises"),qt=require("react"),ws=ya(require("stream-chain")),Os=require("stream-json"),Bs=ya(require("stream-json/filters/Pick")),Ls=ya(require("stream-json/streamers/StreamArray")),Sn=or(),qs=_t(),Ns=Oe();async function Nt(e,t,a){if(typeof e=="object"||e.startsWith("http://")||e.startsWith("https://"))return await Vs(e,t,a);if(e.startsWith("file://"))return await ks((0,ca.normalize)(decodeURIComponent(new URL(e).pathname)),t,a?.signal?a.signal:void 0);throw new Error("Only HTTP(S) or file URLs are supported")}async function Vs(e,t,a){let r=await(0,yn.default)(e,a);if(!r.ok)throw new Error("Failed to fetch URL");if(!(0,Sn.isJSON)(r.headers.get("content-type")))throw new Error("URL does not return JSON");if(!r.body)throw new Error("Failed to retrieve expected JSON content: Response body is missing or inaccessible.");await(0,dn.pipeline)(r.body,(0,Vt.createWriteStream)(t),a?.signal?{signal:a.signal}:void 0)}async function ks(e,t,a){await(0,dn.pipeline)((0,Vt.createReadStream)(e),(0,Vt.createWriteStream)(t),a?{signal:a}:void 0)}async function Fs(e,t,a,r,n){let o=(0,ca.join)(t,a);try{await(0,sr.stat)(t)}catch{(0,Vt.mkdirSync)(t,{recursive:!0}),await Nt(e,o,n);return}if(r){await Nt(e,o,n);return}let u;try{u=await(0,sr.stat)(o)}catch{await Nt(e,o,n);return}if(typeof e=="object"||e.startsWith("http://")||e.startsWith("https://")){let i=await(0,yn.default)(e,{...n,method:"HEAD"});if(!i.ok)throw new Error("Could not fetch URL");if(!(0,Sn.isJSON)(i.headers.get("content-type")))throw new Error("URL does not return JSON");let s=Date.parse(i.headers.get("last-modified")??"");if(u.size===0||Number.isNaN(s)||s>u.mtimeMs){await Nt(e,o,n);return}}else if(e.startsWith("file://"))try{(await(0,sr.stat)((0,ca.normalize)(decodeURIComponent(new URL(e).pathname)))).mtimeMs>u.mtimeMs&&await Nt(e,o,n)}catch{throw new Error("Source file could not be read")}else throw new Error("Only HTTP(S) or file URLs are supported")}async function*js(e,t,a,r,n,o){let u=[],i=new ws.default([(0,Vt.createReadStream)(e),r?Bs.default.withParser({filter:r}):(0,Os.parser)(),new Ls.default,s=>o?.(s.value)??s.value]);a?.addEventListener("abort",()=>{i.destroy()});try{for await(let s of i){if(a?.aborted)return[];(!n||n(s))&&u.push(s),u.length>=t&&(yield u,u=[])}}catch(s){throw i.destroy(),s}return u.length>0&&(yield u),[]}function zs(e,t){let{initialData:a,execute:r,keepPreviousData:n,onError:o,onData:u,onWillExecute:i,failureToastOptions:s,dataPath:p,filter:c,transform:y,pageSize:I=20,...M}=t??{},l=(0,qt.useRef)(),d=(0,qt.useRef)(),S={initialData:a,execute:r,keepPreviousData:n,onError:o,onData:u,onWillExecute:i,failureToastOptions:s},b=(0,qt.useRef)(null),R=(0,qt.useRef)(null),f=(0,qt.useRef)(!1);return(0,qs.useCachedPromise)((m,C,E,_,w,J)=>async({page:k})=>{let O=(0,Ns.hash)(m)+".json",Z=Ts.environment.supportPath;if(k===0){R.current?.abort(),R.current=new AbortController;let v=(0,ca.join)(Z,O),L=!!(l.current&&l.current!==m&&d.current&&d.current===v);l.current=m,d.current=v,await Fs(m,Z,O,L,{...E,signal:R.current?.signal}),b.current=js(v,C,R.current?.signal,_,w,J)}if(!b.current)return{hasMore:f.current,data:[]};let{value:ne,done:P}=await b.current.next();return f.current=!P,{hasMore:f.current,data:ne??[]}},[e,I,M,p,c,y],S)}dt.useStreamJSON=zs});var pr=h(ge=>{"use strict";var ur=ge&&ge.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ge,"__esModule",{value:!0});ge.baseExecuteSQL=ge.isPermissionError=ge.PermissionError=void 0;var Hs=require("node:fs"),da=require("node:fs/promises"),Gs=ur(require("node:os")),In=ur(require("node:child_process")),gn=ur(require("node:path")),Sa=la(),$s=Oe(),Ia=class extends Error{constructor(t){super(t),this.name="PermissionError"}};ge.PermissionError=Ia;function Qs(e){return e instanceof Error&&e.name==="PermissionError"}ge.isPermissionError=Qs;async function Ws(e,t,a){if(!(0,Hs.existsSync)(e))throw new Error("The database does not exist");let r=a?.signal,n,o=In.default.spawn("sqlite3",["--json","--readonly",e,t],{signal:r}),u=(0,Sa.getSpawnedPromise)(o),[{error:i,exitCode:s,signal:p},c,y]=await(0,Sa.getSpawnedResult)(o,{encoding:"utf-8"},u);if(ba(r),y.match("(5)")||y.match("(14)")){if(!n){let I=gn.default.join(Gs.default.tmpdir(),"useSQL",(0,$s.hash)(e));await(0,da.mkdir)(I,{recursive:!0}),ba(r),n=gn.default.join(I,"db.db"),await(0,da.copyFile)(e,n),await(0,da.writeFile)(n+"-shm",""),await(0,da.writeFile)(n+"-wal",""),ba(r)}o=In.default.spawn("sqlite3",["--json","--readonly","--vfs","unix-none",n,t],{signal:r}),u=(0,Sa.getSpawnedPromise)(o),[{error:i,exitCode:s,signal:p},c,y]=await(0,Sa.getSpawnedResult)(o,{encoding:"utf-8"},u),ba(r)}if(i||s!==0||p!==null)throw y.includes("authorization denied")?new Ia("You do not have permission to access the database."):new Error(y||"Unknown error");return JSON.parse(c.trim()||"[]")}ge.baseExecuteSQL=Ws;function ba(e){if(e?.aborted){let t=new Error("aborted");throw t.name="AbortError",t}}});var mn=h(St=>{"use strict";var Ks=St&&St.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(St,"__esModule",{value:!0});St.useSQL=void 0;var Me=require("react/jsx-runtime"),H=require("@raycast/api"),Ys=require("node:fs"),Js=Ks(require("node:os")),ga=require("react"),Zs=ot(),Xs=Ee(),eu=ht(),lr=pr();function tu(e,t,a){let{permissionPriming:r,...n}=a||{},[o,u]=(0,ga.useState)(),i=(0,Xs.useLatest)(a||{}),s=(0,ga.useRef)(),p=(0,ga.useCallback)(y=>{console.error(y);let I=y instanceof Error&&y.message.includes("authorization denied")?new lr.PermissionError("You do not have permission to access the database."):y;(0,lr.isPermissionError)(I)?u((0,Me.jsx)(au,{priming:i.current.permissionPriming})):i.current.onError?i.current.onError(I):H.environment.launchType!==H.LaunchType.Background&&(0,eu.showFailureToast)(I,{title:"Cannot query the data"})},[i]),c=(0,ga.useMemo)(()=>{if(!(0,Ys.existsSync)(e))throw new Error("The database does not exist");return async(y,I)=>{let M=s.current?.signal;return(0,lr.baseExecuteSQL)(y,I,{signal:M})}},[e]);return{...(0,Zs.usePromise)(c,[e,t],{...n,onError:p}),permissionView:o}}St.useSQL=tu;var Mn=parseInt(Js.default.release().split(".")[0])>=22,cr=Mn?"Settings":"Preferences";function au(e){let t=Mn?{title:"Open System Settings -> Privacy",target:"x-apple.systempreferences:com.apple.preference.security?Privacy_AllFiles"}:{title:"Open System Preferences -> Security",target:"x-apple.systempreferences:com.apple.preference.security?Privacy_AllFiles"};return H.environment.commandMode==="menu-bar"?(0,Me.jsxs)(H.MenuBarExtra,{icon:H.Icon.Warning,title:H.environment.commandName,children:[(0,Me.jsx)(H.MenuBarExtra.Item,{title:"Raycast needs full disk access",tooltip:`You can revert this access in ${cr} whenever you want`}),e.priming?(0,Me.jsx)(H.MenuBarExtra.Item,{title:e.priming,tooltip:`You can revert this access in ${cr} whenever you want`}):null,(0,Me.jsx)(H.MenuBarExtra.Separator,{}),(0,Me.jsx)(H.MenuBarExtra.Item,{title:t.title,onAction:()=>(0,H.open)(t.target)})]}):(0,Me.jsx)(H.List,{children:(0,Me.jsx)(H.List.EmptyView,{icon:{source:{light:"https://raycast.com/uploads/extensions-utils-security-permissions-light.png",dark:"https://raycast.com/uploads/extensions-utils-security-permissions-dark.png"}},title:"Raycast needs full disk access.",description:`${e.priming?e.priming+`
`:""}You can revert this access in ${cr} whenever you want.`,actions:(0,Me.jsx)(H.ActionPanel,{children:(0,Me.jsx)(H.Action.Open,{...t})})})})}});var An=h(bt=>{"use strict";Object.defineProperty(bt,"__esModule",{value:!0});bt.useForm=bt.FormValidation=void 0;var xe=require("react"),Rn=Ee(),dr;(function(e){e.Required="required"})(dr||(bt.FormValidation=dr={}));function yr(e,t){if(e){if(typeof e=="function")return e(t);if(e===dr.Required){let a=typeof t<"u"&&t!==null;if(a)switch(typeof t){case"string":a=t.length>0;break;case"object":Array.isArray(t)?a=t.length>0:t instanceof Date&&(a=t.getTime()>0);break;default:break}if(!a)return"The item is required"}}}function ru(e){let{onSubmit:t,validation:a,initialValues:r={}}=e,[n,o]=(0,xe.useState)(r),[u,i]=(0,xe.useState)({}),s=(0,xe.useRef)({}),p=(0,Rn.useLatest)(a||{}),c=(0,Rn.useLatest)(t),y=(0,xe.useCallback)(b=>{s.current[b]?.focus()},[s]),I=(0,xe.useCallback)(async b=>{let R=!1;for(let[m,C]of Object.entries(p.current)){let E=yr(C,b[m]);E&&(R||(R={},y(m)),R[m]=E)}if(R)return i(R),!1;let f=await c.current(b);return typeof f=="boolean"?f:!0},[p,c,y]),M=(0,xe.useCallback)((b,R)=>{i(f=>({...f,[b]:R}))},[i]),l=(0,xe.useCallback)(function(b,R){o(f=>({...f,[b]:typeof R=="function"?R(f[b]):R}))},[o]),d=(0,xe.useMemo)(()=>new Proxy({},{get(b,R){let f=p.current[R],m=n[R];return{onChange(C){u[R]&&(yr(f,C)||M(R,void 0)),l(R,C)},onBlur(C){let E=yr(f,C.target.value);E&&M(R,E)},error:u[R],id:R,value:typeof m>"u"?null:m,ref:C=>{s.current[R]=C}}}}),[u,p,M,n,s,l]),S=(0,xe.useCallback)(b=>{i({}),Object.entries(s.current).forEach(([R,f])=>{b?.[R]||f?.reset()}),b&&o(b)},[o,i,s]);return{handleSubmit:I,setValidationError:M,setValue:l,values:n,itemProps:d,focus:y,reset:S}}bt.useForm=ru});var Pn=h(Ma=>{"use strict";Object.defineProperty(Ma,"__esModule",{value:!0});Ma.useAI=void 0;var fn=require("react"),nu=require("@raycast/api"),ou=ot();function iu(e,t={}){let{creativity:a,stream:r,model:n,...o}=t,[u,i]=(0,fn.useState)(""),s=(0,fn.useRef)(),{isLoading:p,error:c,revalidate:y}=(0,ou.usePromise)(async(I,M,l)=>{i("");let d=nu.AI.ask(I,{creativity:M,model:n,signal:s.current?.signal});l===!1?i(await d):(d.on("data",S=>{i(b=>b+S)}),await d)},[e,a,r],{...o,abortable:s});return{isLoading:p,data:u,error:c,revalidate:y}}Ma.useAI=iu});var hn=h(ma=>{"use strict";Object.defineProperty(ma,"__esModule",{value:!0});ma.useFrecencySorting=void 0;var Sr=require("react"),En=Ee(),su=ra(),uu=10,Cn=1440*60*1e3,pu=Math.log(2)/(uu*Cn),lu={Default:100,Embed:0,Bookmark:140};function cu(e){let t=Date.now(),a=e?e.lastVisited:0,r=e?e.frecency:0,n=(t-a)/Cn,o=lu.Default*Math.exp(-pu*n),u=r+o;return{lastVisited:t,frecency:u}}var yu=e=>{if(process.env.NODE_ENV!=="production"&&(typeof e!="object"||!e||!("id"in e)||typeof e.id!="string"))throw new Error("Specify a key function or make sure your items have an 'id' property");return e.id};function du(e,t){let a=(0,En.useLatest)(t?.key||yu),r=(0,En.useLatest)(t?.sortUnvisited),[n,o]=(0,su.useCachedState)(`raycast_frecency_${t?.namespace}`,{}),u=(0,Sr.useCallback)(async function(c){let y=a.current(c);o(I=>{let M=I[y],l=cu(M);return{...I,[y]:l}})},[a,o]),i=(0,Sr.useCallback)(async function(c){let y=a.current(c);o(I=>{let M={...I};return delete M[y],M})},[a,o]);return{data:(0,Sr.useMemo)(()=>e?e.sort((p,c)=>{let y=n[a.current(p)],I=n[a.current(c)];return y&&!I?-1:!y&&I?1:y&&I?I.frecency-y.frecency:r.current?r.current(p,c):0}):[],[n,e,a,r]),visitItem:u,resetRanking:i}}ma.useFrecencySorting=du});var _n=h(Ra=>{"use strict";Object.defineProperty(Ra,"__esModule",{value:!0});Ra.useLocalStorage=void 0;var br=require("@raycast/api"),Dn=ht(),xn=Oe(),Su=ot();function bu(e,t){let{data:a,isLoading:r,mutate:n}=(0,Su.usePromise)(async i=>{let s=await br.LocalStorage.getItem(i);return typeof s<"u"?JSON.parse(s,xn.reviver):t},[e]);async function o(i){try{await n(br.LocalStorage.setItem(e,JSON.stringify(i,xn.replacer)),{optimisticUpdate(s){return s}})}catch(s){await(0,Dn.showFailureToast)(s,{title:"Failed to set value in local storage"})}}async function u(){try{await n(br.LocalStorage.removeItem(e),{optimisticUpdate(){}})}catch(i){await(0,Dn.showFailureToast)(i,{title:"Failed to remove value from local storage"})}}return{value:a,setValue:o,removeValue:u,isLoading:r}}Ra.useLocalStorage=bu});var On=h(It=>{"use strict";Object.defineProperty(It,"__esModule",{value:!0});It.slightlyLighterColor=It.slightlyDarkerColor=void 0;function Iu(e){let t=0,a=0,r=0;if(e.length===4)t=parseInt(`${e[1]}${e[1]}`,16),a=parseInt(`${e[2]}${e[2]}`,16),r=parseInt(`${e[3]}${e[3]}`,16);else if(e.length===7)t=parseInt(`${e[1]}${e[2]}`,16),a=parseInt(`${e[3]}${e[4]}`,16),r=parseInt(`${e[5]}${e[6]}`,16);else throw new Error(`Malformed hex color: ${e}`);return{r:t,g:a,b:r}}function gu({r:e,g:t,b:a}){let r=e.toString(16),n=t.toString(16),o=a.toString(16);return r.length===1&&(r=`0${r}`),n.length===1&&(n=`0${n}`),o.length===1&&(o=`0${o}`),`#${r}${n}${o}`}function Mu({r:e,g:t,b:a}){e/=255,t/=255,a/=255;let r=Math.min(e,t,a),n=Math.max(e,t,a),o=n-r,u=0,i=0,s=0;return o===0?u=0:n===e?u=(t-a)/o%6:n===t?u=(a-e)/o+2:u=(e-t)/o+4,u=Math.round(u*60),u<0&&(u+=360),s=(n+r)/2,i=o===0?0:o/(1-Math.abs(2*s-1)),i=+(i*100).toFixed(1),s=+(s*100).toFixed(1),{h:u,s:i,l:s}}function mu({h:e,s:t,l:a}){t/=100,a/=100;let r=(1-Math.abs(2*a-1))*t,n=r*(1-Math.abs(e/60%2-1)),o=a-r/2,u=0,i=0,s=0;return e>=0&&e<60?(u=r,i=n,s=0):e>=60&&e<120?(u=n,i=r,s=0):e>=120&&e<180?(u=0,i=r,s=n):e>=180&&e<240?(u=0,i=n,s=r):e>=240&&e<300?(u=n,i=0,s=r):e>=300&&e<360&&(u=r,i=0,s=n),u=Math.round((u+o)*255),i=Math.round((i+o)*255),s=Math.round((s+o)*255),{r:u,g:i,b:s}}function Un(e){return Mu(Iu(e))}function vn(e){return gu(mu(e))}function Tn(e,t,a){return t<a?e<t?t:e>a?a:e:e<a?a:e>t?t:e}var wn=12;function Ru(e){let t=Un(e);return vn({h:t.h,s:t.s,l:Tn(t.l-wn,0,100)})}It.slightlyDarkerColor=Ru;function Au(e){let t=Un(e);return vn({h:t.h,s:t.s,l:Tn(t.l+wn,0,100)})}It.slightlyLighterColor=Au});var qn=h(Aa=>{"use strict";Object.defineProperty(Aa,"__esModule",{value:!0});Aa.getAvatarIcon=void 0;var Bn=On();function gt(e,t){let a=e.charCodeAt(t);if(Number.isNaN(a))return["",t];if(a<55296||a>57343)return[e.charAt(t),t];if(55296<=a&&a<=56319){if(e.length<=t+1)throw new Error("High surrogate without following low surrogate");let n=e.charCodeAt(t+1);if(56320>n||n>57343)throw new Error("High surrogate without following low surrogate");return[e.charAt(t)+e.charAt(t+1),t+1]}if(t===0)throw new Error("Low surrogate without preceding high surrogate");let r=e.charCodeAt(t-1);if(55296>r||r>56319)throw new Error("Low surrogate without preceding high surrogate");return[e.charAt(t+1),t+1]}var Ln=["#DC829A","#D64854","#D47600","#D36CDD","#52A9E4","#7871E8","#70920F","#43B93A","#EB6B3E","#26B795","#D85A9B","#A067DC","#BD9500","#5385D9"];function fu(e,t){let a=e.trim().split(" "),r;if(a.length==1&&gt(a[0],0)[0])r=gt(a[0],0)[0];else if(a.length>1){let s=gt(a[0],0)[0]||"",p=gt(a[a.length-1],0)[0]??"";r=s+p}else r="";let n;if(t?.background)n=t?.background;else{let s=0,[p,c]=gt(r,0);for(;p;)s+=p.charCodeAt(0),[p,c]=gt(r,c+1);let y=s%Ln.length;n=Ln[y]}let u=50-0;return`data:image/svg+xml,${`<svg width="100px" height="100px">
  ${t?.gradient!==!1?`<defs>
      <linearGradient id="Gradient" x1="0.25" x2="0.75" y1="0" y2="1">
        <stop offset="0%" stop-color="${(0,Bn.slightlyLighterColor)(n)}"/>
        <stop offset="50%" stop-color="${n}"/>
        <stop offset="100%" stop-color="${(0,Bn.slightlyDarkerColor)(n)}"/>
      </linearGradient>
  </defs>`:""}
      <circle cx="50" cy="50" r="${u}" fill="${t?.gradient!==!1?"url(#Gradient)":n}" />
      ${r?`<text x="50" y="80" font-size="${u-1}" font-family="Inter, sans-serif" text-anchor="middle" fill="white">${r.toUpperCase()}</text>`:""}
    </svg>
  `.replaceAll(`
`,"")}`}Aa.getAvatarIcon=fu});var Vn=h(fa=>{"use strict";Object.defineProperty(fa,"__esModule",{value:!0});fa.getFavicon=void 0;var Nn=require("@raycast/api"),Pu=require("url");function Eu(e,t){try{let r=(typeof e=="string"?new Pu.URL(e):e).hostname;return{source:`https://www.google.com/s2/favicons?sz=${t?.size??64}&domain=${r}`,fallback:t?.fallback??Nn.Icon.Link,mask:t?.mask}}catch(a){return console.error(a),Nn.Icon.Link}}fa.getFavicon=Eu});var jn=h(Pa=>{"use strict";Object.defineProperty(Pa,"__esModule",{value:!0});Pa.getProgressIcon=void 0;var kn=require("@raycast/api");function Fn(e,t,a,r){let n=(r-90)*Math.PI/180;return{x:e+a*Math.cos(n),y:t+a*Math.sin(n)}}function Cu(e,t,a,r,n){let o=Fn(e,t,a,n),u=Fn(e,t,a,r),i=n-r<=180?"0":"1";return["M",o.x,o.y,"A",a,a,0,i,0,u.x,u.y].join(" ")}function hu(e,t=kn.Color.Red,a){let r=a?.background||(kn.environment.appearance==="light"?"black":"white"),n=a?.backgroundOpacity||.1,o=10,i=50-5-o/2;return`data:image/svg+xml,${`<svg width="100px" height="100px">
      <circle cx="50" cy="50" r="${i}" stroke-width="${o}" stroke="${e<1?r:t}" opacity="${e<1?n:"1"}" fill="none" />
      ${e>0&&e<1?`<path d="${Cu(50,50,i,0,e*360)}" stroke="${t}" stroke-width="${o}" fill="none" />`:""}
    </svg>
  `.replaceAll(`
`,"")}`}Pa.getProgressIcon=hu});var zn=h(_e=>{"use strict";var Du=_e&&_e.__createBinding||(Object.create?(function(e,t,a,r){r===void 0&&(r=a);var n=Object.getOwnPropertyDescriptor(t,a);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,n)}):(function(e,t,a,r){r===void 0&&(r=a),e[r]=t[a]})),Ir=_e&&_e.__exportStar||function(e,t){for(var a in e)a!=="default"&&!Object.prototype.hasOwnProperty.call(t,a)&&Du(t,e,a)};Object.defineProperty(_e,"__esModule",{value:!0});Ir(qn(),_e);Ir(Vn(),_e);Ir(jn(),_e)});var Hn=h(z=>{"use strict";Object.defineProperty(z,"__esModule",{value:!0});z.zoomService=z.slackService=z.linearService=z.jiraService=z.googleService=z.githubService=z.asanaService=void 0;var G=require("@raycast/api"),We=gr(),Ea={asana:"1191201745684312",github:"7235fe8d42157f1f38c0",linear:"c8ff37b9225c3c9aefd7d66ea0e5b6f1",slack:"851756884692.5546927290212"},Ne=e=>`data:image/svg+xml,${e}`,Ke={asana:Ne('<svg xmlns="http://www.w3.org/2000/svg" width="251" height="232" fill="none"><path fill="#F06A6A" d="M179.383 54.373c0 30.017-24.337 54.374-54.354 54.374-30.035 0-54.373-24.338-54.373-54.374C70.656 24.338 94.993 0 125.029 0c30.017 0 54.354 24.338 54.354 54.373ZM54.393 122.33C24.376 122.33.02 146.668.02 176.685c0 30.017 24.337 54.373 54.373 54.373 30.035 0 54.373-24.338 54.373-54.373 0-30.017-24.338-54.355-54.373-54.355Zm141.253 0c-30.035 0-54.373 24.338-54.373 54.374 0 30.035 24.338 54.373 54.373 54.373 30.017 0 54.374-24.338 54.374-54.373 0-30.036-24.338-54.374-54.374-54.374Z"/></svg>'),github:{source:Ne('<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>'),tintColor:G.Color.PrimaryText},google:Ne('<svg xmlns="http://www.w3.org/2000/svg" style="display:block" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/><path fill="none" d="M0 0h48v48H0z"/></svg>'),jira:Ne('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="2361" height="2500" viewBox="2.59 0 214.091 224"><linearGradient id="a" x1="102.4" x2="56.15" y1="218.63" y2="172.39" gradientTransform="matrix(1 0 0 -1 0 264)" gradientUnits="userSpaceOnUse"><stop offset=".18" stop-color="#0052cc"/><stop offset="1" stop-color="#2684ff"/></linearGradient><linearGradient xlink:href="#a" id="b" x1="114.65" x2="160.81" y1="85.77" y2="131.92"/><path fill="#2684ff" d="M214.06 105.73 117.67 9.34 108.33 0 35.77 72.56 2.59 105.73a8.89 8.89 0 0 0 0 12.54l66.29 66.29L108.33 224l72.55-72.56 1.13-1.12 32.05-32a8.87 8.87 0 0 0 0-12.59zm-105.73 39.39L75.21 112l33.12-33.12L141.44 112z"/><path fill="url(#a)" d="M108.33 78.88a55.75 55.75 0 0 1-.24-78.61L35.62 72.71l39.44 39.44z"/><path fill="url(#b)" d="m141.53 111.91-33.2 33.21a55.77 55.77 0 0 1 0 78.86L181 151.35z"/></svg>'),linear:{source:{light:Ne('<svg xmlns="http://www.w3.org/2000/svg" fill="#222326" width="200" height="200" viewBox="0 0 100 100"><path d="M1.22541 61.5228c-.2225-.9485.90748-1.5459 1.59638-.857L39.3342 97.1782c.6889.6889.0915 1.8189-.857 1.5964C20.0515 94.4522 5.54779 79.9485 1.22541 61.5228ZM.00189135 46.8891c-.01764375.2833.08887215.5599.28957165.7606L52.3503 99.7085c.2007.2007.4773.3075.7606.2896 2.3692-.1476 4.6938-.46 6.9624-.9259.7645-.157 1.0301-1.0963.4782-1.6481L2.57595 39.4485c-.55186-.5519-1.49117-.2863-1.648174.4782-.465915 2.2686-.77832 4.5932-.92588465 6.9624ZM4.21093 29.7054c-.16649.3738-.08169.8106.20765 1.1l64.77602 64.776c.2894.2894.7262.3742 1.1.2077 1.7861-.7956 3.5171-1.6927 5.1855-2.684.5521-.328.6373-1.0867.1832-1.5407L8.43566 24.3367c-.45409-.4541-1.21271-.3689-1.54074.1832-.99132 1.6684-1.88843 3.3994-2.68399 5.1855ZM12.6587 18.074c-.3701-.3701-.393-.9637-.0443-1.3541C21.7795 6.45931 35.1114 0 49.9519 0 77.5927 0 100 22.4073 100 50.0481c0 14.8405-6.4593 28.1724-16.7199 37.3375-.3903.3487-.984.3258-1.3542-.0443L12.6587 18.074Z"/></svg>'),dark:Ne('<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="200" height="200" viewBox="0 0 100 100"><path d="M1.22541 61.5228c-.2225-.9485.90748-1.5459 1.59638-.857L39.3342 97.1782c.6889.6889.0915 1.8189-.857 1.5964C20.0515 94.4522 5.54779 79.9485 1.22541 61.5228ZM.00189135 46.8891c-.01764375.2833.08887215.5599.28957165.7606L52.3503 99.7085c.2007.2007.4773.3075.7606.2896 2.3692-.1476 4.6938-.46 6.9624-.9259.7645-.157 1.0301-1.0963.4782-1.6481L2.57595 39.4485c-.55186-.5519-1.49117-.2863-1.648174.4782-.465915 2.2686-.77832 4.5932-.92588465 6.9624ZM4.21093 29.7054c-.16649.3738-.08169.8106.20765 1.1l64.77602 64.776c.2894.2894.7262.3742 1.1.2077 1.7861-.7956 3.5171-1.6927 5.1855-2.684.5521-.328.6373-1.0867.1832-1.5407L8.43566 24.3367c-.45409-.4541-1.21271-.3689-1.54074.1832-.99132 1.6684-1.88843 3.3994-2.68399 5.1855ZM12.6587 18.074c-.3701-.3701-.393-.9637-.0443-1.3541C21.7795 6.45931 35.1114 0 49.9519 0 77.5927 0 100 22.4073 100 50.0481c0 14.8405-6.4593 28.1724-16.7199 37.3375-.3903.3487-.984.3258-1.3542-.0443L12.6587 18.074Z" /></svg>')}},slack:Ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="73 73 124 124"><style>.st0{fill:#e01e5a}.st1{fill:#36c5f0}.st2{fill:#2eb67d}.st3{fill:#ecb22e}</style><path d="M99.4 151.2c0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9h12.9v12.9zM105.9 151.2c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v32.3c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9v-32.3z" class="st0"/><path d="M118.8 99.4c-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v12.9h-12.9zM118.8 105.9c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H86.5c-7.1 0-12.9-5.8-12.9-12.9s5.8-12.9 12.9-12.9h32.3z" class="st1"/><path d="M170.6 118.8c0-7.1 5.8-12.9 12.9-12.9 7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9h-12.9v-12.9zM164.1 118.8c0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9V86.5c0-7.1 5.8-12.9 12.9-12.9 7.1 0 12.9 5.8 12.9 12.9v32.3z" class="st2"/><path d="M151.2 170.6c7.1 0 12.9 5.8 12.9 12.9 0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9v-12.9h12.9zM151.2 164.1c-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9h32.3c7.1 0 12.9 5.8 12.9 12.9 0 7.1-5.8 12.9-12.9 12.9h-32.3z" class="st3"/></svg>'),zoom:Ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 351.845 80"><path d="M73.786 78.835H10.88A10.842 10.842 0 0 1 .833 72.122a10.841 10.841 0 0 1 2.357-11.85L46.764 16.7h-31.23C6.954 16.699 0 9.744 0 1.165h58.014c4.414 0 8.357 2.634 10.046 6.712a10.843 10.843 0 0 1-2.356 11.85L22.13 63.302h36.122c8.58 0 15.534 6.955 15.534 15.534Zm278.059-48.544C351.845 13.588 338.256 0 321.553 0c-8.934 0-16.975 3.89-22.524 10.063C293.48 3.89 285.44 0 276.505 0c-16.703 0-30.291 13.588-30.291 30.291v48.544c8.579 0 15.534-6.955 15.534-15.534v-33.01c0-8.137 6.62-14.757 14.757-14.757s14.757 6.62 14.757 14.757v33.01c0 8.58 6.955 15.534 15.534 15.534V30.291c0-8.137 6.62-14.757 14.757-14.757s14.758 6.62 14.758 14.757v33.01c0 8.58 6.954 15.534 15.534 15.534V30.291ZM238.447 40c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.908-40 40-40 40 17.909 40 40Zm-15.534 0c0-13.512-10.954-24.466-24.466-24.466S173.98 26.488 173.98 40s10.953 24.466 24.466 24.466S222.913 53.512 222.913 40Zm-70.68 0c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.909-40 40-40 40 17.909 40 40Zm-15.534 0c0-13.512-10.954-24.466-24.466-24.466S87.767 26.488 87.767 40s10.954 24.466 24.466 24.466S136.699 53.512 136.699 40Z" style="fill:#0b5cff"/></svg>')},xu=e=>new We.OAuthService({client:new G.OAuth.PKCEClient({redirectMethod:G.OAuth.RedirectMethod.Web,providerName:"Asana",providerIcon:Ke.asana,providerId:"asana",description:"Connect your Asana account"}),clientId:e.clientId??Ea.asana,authorizeUrl:e.authorizeUrl??"https://asana.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://asana.oauth.raycast.com/token",refreshTokenUrl:e.refreshTokenUrl??"https://asana.oauth.raycast.com/refresh-token",scope:e.scope,personalAccessToken:e.personalAccessToken,onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});z.asanaService=xu;var _u=e=>new We.OAuthService({client:new G.OAuth.PKCEClient({redirectMethod:G.OAuth.RedirectMethod.Web,providerName:"GitHub",providerIcon:Ke.github,providerId:"github",description:"Connect your GitHub account"}),clientId:e.clientId??Ea.github,authorizeUrl:e.authorizeUrl??"https://github.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://github.oauth.raycast.com/token",refreshTokenUrl:e.refreshTokenUrl??"https://github.oauth.raycast.com/refresh-token",scope:e.scope,personalAccessToken:e.personalAccessToken,onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});z.githubService=_u;var Uu=e=>new We.OAuthService({client:new G.OAuth.PKCEClient({redirectMethod:G.OAuth.RedirectMethod.AppURI,providerName:"Google",providerIcon:Ke.google,providerId:"google",description:"Connect your Google account"}),clientId:e.clientId,authorizeUrl:e.authorizeUrl??"https://accounts.google.com/o/oauth2/v2/auth",tokenUrl:e.tokenUrl??"https://oauth2.googleapis.com/token",refreshTokenUrl:e.tokenUrl,scope:e.scope,personalAccessToken:e.personalAccessToken,bodyEncoding:e.bodyEncoding??"url-encoded",onAuthorize:e.onAuthorize,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});z.googleService=Uu;var vu=e=>new We.OAuthService({client:new G.OAuth.PKCEClient({redirectMethod:G.OAuth.RedirectMethod.Web,providerName:"Jira",providerIcon:Ke.jira,providerId:"jira",description:"Connect your Jira account"}),clientId:e.clientId,authorizeUrl:e.authorizeUrl??"https://auth.atlassian.com/authorize",tokenUrl:e.tokenUrl??"https://auth.atlassian.com/oauth/token",refreshTokenUrl:e.refreshTokenUrl,scope:e.scope,personalAccessToken:e.personalAccessToken,onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});z.jiraService=vu;var Tu=e=>new We.OAuthService({client:new G.OAuth.PKCEClient({redirectMethod:G.OAuth.RedirectMethod.Web,providerName:"Linear",providerIcon:Ke.linear,providerId:"linear",description:"Connect your Linear account"}),clientId:e.clientId??Ea.linear,authorizeUrl:e.authorizeUrl??"https://linear.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://linear.oauth.raycast.com/token",refreshTokenUrl:e.refreshTokenUrl??"https://linear.oauth.raycast.com/refresh-token",scope:e.scope,extraParameters:{actor:"user"},onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});z.linearService=Tu;var wu=e=>new We.OAuthService({client:new G.OAuth.PKCEClient({redirectMethod:G.OAuth.RedirectMethod.Web,providerName:"Slack",providerIcon:Ke.slack,providerId:"slack",description:"Connect your Slack account"}),clientId:e.clientId??Ea.slack,authorizeUrl:e.authorizeUrl??"https://slack.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://slack.oauth.raycast.com/token",refreshTokenUrl:e.tokenUrl??"https://slack.oauth.raycast.com/refresh-token",scope:"",extraParameters:{user_scope:e.scope},personalAccessToken:e.personalAccessToken,bodyEncoding:e.tokenUrl?e.bodyEncoding??"url-encoded":"json",onAuthorize:e.onAuthorize,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser??(t=>({access_token:t.authed_user.access_token,scope:t.authed_user.scope}))});z.slackService=wu;var Ou=e=>new We.OAuthService({client:new G.OAuth.PKCEClient({redirectMethod:G.OAuth.RedirectMethod.Web,providerName:"Zoom",providerIcon:Ke.zoom,providerId:"zoom",description:"Connect your Zoom account"}),clientId:e.clientId,authorizeUrl:e.authorizeUrl??"https://zoom.us/oauth/authorize",tokenUrl:e.tokenUrl??"https://zoom.us/oauth/token",refreshTokenUrl:e.refreshTokenUrl,scope:e.scope,personalAccessToken:e.personalAccessToken,bodyEncoding:e.bodyEncoding??"url-encoded",onAuthorize:e.onAuthorize,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});z.zoomService=Ou});var gr=h(Mt=>{"use strict";var Bu=Mt&&Mt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Mt,"__esModule",{value:!0});Mt.OAuthService=void 0;var Gn=Bu(Bt()),Ye=Hn(),me=class{constructor(t){this.clientId=t.clientId,this.scope=Array.isArray(t.scope)?t.scope.join(" "):t.scope,this.personalAccessToken=t.personalAccessToken,this.bodyEncoding=t.bodyEncoding,this.client=t.client,this.extraParameters=t.extraParameters,this.authorizeUrl=t.authorizeUrl,this.tokenUrl=t.tokenUrl,this.refreshTokenUrl=t.refreshTokenUrl,this.onAuthorize=t.onAuthorize,this.tokenResponseParser=t.tokenResponseParser??(a=>a),this.tokenRefreshResponseParser=t.tokenRefreshResponseParser??(a=>a),this.authorize=this.authorize.bind(this)}async authorize(){let t=await this.client.getTokens();if(t?.accessToken){if(t.refreshToken&&t.isExpired()){let o=await this.refreshTokens({token:t.refreshToken});if(o)return await this.client.setTokens(o),o.access_token}return t.accessToken}let a=await this.client.authorizationRequest({endpoint:this.authorizeUrl,clientId:this.clientId,scope:this.scope,extraParameters:this.extraParameters}),{authorizationCode:r}=await this.client.authorize(a),n=await this.fetchTokens({authRequest:a,authorizationCode:r});return await this.client.setTokens(n),n.access_token}async fetchTokens({authRequest:t,authorizationCode:a}){let r;if(this.bodyEncoding==="url-encoded"){let u=new URLSearchParams;u.append("client_id",this.clientId),u.append("code",a),u.append("code_verifier",t.codeVerifier),u.append("grant_type","authorization_code"),u.append("redirect_uri",t.redirectURI),r={body:u}}else r={body:JSON.stringify({client_id:this.clientId,code:a,code_verifier:t.codeVerifier,grant_type:"authorization_code",redirect_uri:t.redirectURI}),headers:{"Content-Type":"application/json"}};let n=await(0,Gn.default)(this.tokenUrl,{method:"POST",...r});if(!n.ok){let u=await n.text();throw console.error("fetch tokens error:",u),new Error(`Error while fetching tokens: ${n.status} (${n.statusText})
${u}`)}let o=this.tokenResponseParser(await n.json());return Array.isArray(o.scope)?{...o,scope:o.scope.join(" ")}:o}async refreshTokens({token:t}){let a;if(this.bodyEncoding==="url-encoded"){let n=new URLSearchParams;n.append("client_id",this.clientId),n.append("refresh_token",t),n.append("grant_type","refresh_token"),a={body:n}}else a={body:JSON.stringify({client_id:this.clientId,refresh_token:t,grant_type:"refresh_token"}),headers:{"Content-Type":"application/json"}};let r=await(0,Gn.default)(this.refreshTokenUrl??this.tokenUrl,{method:"POST",...a});if(r.ok){let n=this.tokenRefreshResponseParser(await r.json());return n.refresh_token=n.refresh_token??t,n}else{let n=await r.text();console.error("refresh tokens error:",n),this.client.description=`${this.client.providerName} needs you to sign-in again. Press \u23CE or click the button below to continue.`,await this.client.removeTokens(),await this.authorize()}}};Mt.OAuthService=me;me.asana=Ye.asanaService;me.github=Ye.githubService;me.google=Ye.googleService;me.jira=Ye.jiraService;me.linear=Ye.linearService;me.slack=Ye.slackService;me.zoom=Ye.zoomService});var $n=h(mt=>{"use strict";Object.defineProperty(mt,"__esModule",{value:!0});mt.getAccessToken=mt.withAccessToken=void 0;var Lu=require("react/jsx-runtime"),qu=require("@raycast/api"),Ve=null,Je=null,Mr=null,mr=null,Rr=null;function Nu(e){return qu.environment.commandMode==="no-view"?t=>async r=>{if(!Ve){Ve=e.personalAccessToken??await e.authorize(),Je=e.personalAccessToken?"personal":"oauth";let n=(await e.client?.getTokens())?.idToken;e.onAuthorize&&await Promise.resolve(e.onAuthorize({token:Ve,type:Je,idToken:n}))}return t(r)}:t=>{let a=r=>{e.personalAccessToken?(Ve=e.personalAccessToken,Je="personal"):(Mr||(Mr=Ar(e.authorize())),Ve=Mr.read(),Je="oauth");let n;return e.client&&(mr||(mr=Ar(e.client.getTokens())),n=mr.read()?.idToken),!Rr&&e.onAuthorize&&(Rr=Ar(Promise.resolve(e.onAuthorize({token:Ve,type:Je,idToken:n})))),Rr?.read(),(0,Lu.jsx)(t,{...r})};return a.displayName=`withAccessToken(${t.displayName||t.name})`,a}}mt.withAccessToken=Nu;function Vu(){if(!Ve||!Je)throw new Error("getAccessToken must be used when authenticated (eg. used inside `withAccessToken`)");return{token:Ve,type:Je}}mt.getAccessToken=Vu;function Ar(e){let t="pending",a,r=e.then(o=>{t="success",a=o},o=>{t="error",a=o});return{read:()=>{switch(t){case"pending":throw r;case"error":throw a;default:return a}}}}});var Wn=h(ke=>{"use strict";var ku=ke&&ke.__createBinding||(Object.create?(function(e,t,a,r){r===void 0&&(r=a);var n=Object.getOwnPropertyDescriptor(t,a);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,n)}):(function(e,t,a,r){r===void 0&&(r=a),e[r]=t[a]})),Qn=ke&&ke.__exportStar||function(e,t){for(var a in e)a!=="default"&&!Object.prototype.hasOwnProperty.call(t,a)&&ku(t,e,a)};Object.defineProperty(ke,"__esModule",{value:!0});Qn(gr(),ke);Qn($n(),ke)});var Xn=h(ue=>{"use strict";var Kn=ue&&ue.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ue,"__esModule",{value:!0});ue.createDeeplink=ue.createExtensionDeeplink=ue.createScriptCommandDeeplink=ue.DeeplinkType=void 0;var Pr=require("@raycast/api"),Fu=Kn(require("node:fs")),ju=Kn(require("node:path")),fr;(function(e){e.ScriptCommand="script-command",e.Extension="extension"})(fr||(ue.DeeplinkType=fr={}));function Yn(){return Pr.environment.raycastVersion.includes("alpha")?"raycastinternal://":"raycast://"}function zu(){let e=JSON.parse(Fu.default.readFileSync(ju.default.join(Pr.environment.assetsPath,"..","package.json"),"utf8"));return e.owner||e.author}function Jn(e){let t=`${Yn()}script-commands/${e.command}`;if(e.arguments){let a="";for(let r of e.arguments)a+="&arguments="+encodeURIComponent(r);t+="?"+a.substring(1)}return t}ue.createScriptCommandDeeplink=Jn;function Zn(e){let t=zu(),a=Pr.environment.extensionName;"ownerOrAuthorName"in e&&"extensionName"in e&&(t=e.ownerOrAuthorName,a=e.extensionName);let r=`${Yn()}extensions/${t}/${a}/${e.command}`,n="";return e.launchType&&(n+="&launchType="+encodeURIComponent(e.launchType)),e.arguments&&(n+="&arguments="+encodeURIComponent(JSON.stringify(e.arguments))),e.context&&(n+="&context="+encodeURIComponent(JSON.stringify(e.context))),e.fallbackText&&(n+="&fallbackText="+encodeURIComponent(e.fallbackText)),n&&(r+="?"+n.substring(1)),r}ue.createExtensionDeeplink=Zn;function Hu(e){return e.type===fr.ScriptCommand?Jn(e):Zn(e)}ue.createDeeplink=Hu});var eo=h(Ca=>{"use strict";Object.defineProperty(Ca,"__esModule",{value:!0});Ca.executeSQL=void 0;var Gu=pr();function $u(e,t){return(0,Gu.baseExecuteSQL)(e,t)}Ca.executeSQL=$u});var to=h(Rt=>{"use strict";var Qu=Rt&&Rt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Rt,"__esModule",{value:!0});Rt.runAppleScript=void 0;var Wu=Qu(require("node:child_process")),kt=la();async function Ku(e,t,a){let{humanReadableOutput:r,language:n,timeout:o,...u}=Array.isArray(t)?a||{}:t||{},i=r!==!1?[]:["-ss"];n==="JavaScript"&&i.push("-l","JavaScript"),Array.isArray(t)&&i.push("-",...t);let s=Wu.default.spawn("osascript",i,{...u,env:{PATH:"/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"}}),p=(0,kt.getSpawnedPromise)(s,{timeout:o??1e4});s.stdin.end(e);let[{error:c,exitCode:y,signal:I,timedOut:M},l,d]=await(0,kt.getSpawnedResult)(s,{encoding:"utf8"},p),S=(0,kt.handleOutput)({stripFinalNewline:!0},l),b=(0,kt.handleOutput)({stripFinalNewline:!0},d);return(0,kt.defaultParsing)({stdout:S,stderr:b,error:c,exitCode:y,signal:I,timedOut:M,command:"osascript",options:a,parentError:new Error})}Rt.runAppleScript=Ku});var ao=h(Da=>{"use strict";Object.defineProperty(Da,"__esModule",{value:!0});Da.withCache=void 0;var Yu=require("@raycast/api"),ha=Oe();function Ju(e,t){let a=new Yu.Cache({namespace:(0,ha.hash)(e)}),r=async(...n)=>{let o=(0,ha.hash)(n||[])+t?.internal_cacheKeySuffix,u=a.get(o);if(u){let{data:s,timestamp:p}=JSON.parse(u,ha.reviver);if(!(t?.maxAge&&Date.now()-p>t.maxAge)&&(!t?.validate||t.validate(s)))return s}let i=await e(...n);return a.set(o,JSON.stringify({data:i,timestamp:Date.now()},ha.replacer)),i};return r.clearCache=()=>{a.clear()},r}Da.withCache=Ju});var Fe=h(U=>{"use strict";var Zu=U&&U.__createBinding||(Object.create?(function(e,t,a,r){r===void 0&&(r=a);var n=Object.getOwnPropertyDescriptor(t,a);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,n)}):(function(e,t,a,r){r===void 0&&(r=a),e[r]=t[a]})),N=U&&U.__exportStar||function(e,t){for(var a in e)a!=="default"&&!Object.prototype.hasOwnProperty.call(t,a)&&Zu(t,e,a)};Object.defineProperty(U,"__esModule",{value:!0});N(ot(),U);N(ra(),U);N(_t(),U);N(on(),U);N(cn(),U);N(bn(),U);N(mn(),U);N(An(),U);N(Pn(),U);N(hn(),U);N(_n(),U);N(zn(),U);N(Wn(),U);N(Xn(),U);N(eo(),U);N(to(),U);N(ht(),U);N(ao(),U)});var Q={};rt(Q,{default:()=>bo.default});var bo,Oa=$a(()=>{$(Q,require("formdata-polyfill/esm.min.js"));bo=B(require("formdata-polyfill/esm.min.js"))});var ee={};rt(ee,{default:()=>mo.default});var mo,Dr=$a(()=>{$(ee,require("fetch-blob/from.js"));mo=B(require("fetch-blob/from.js"))});var Ao={};rt(Ao,{toFormData:()=>mp});function Mp(e){let t=e.match(/\bfilename=("(.*?)"|([^()<>@,;:\\"/[\]?={}\s\t]+))($|;\s)/i);if(!t)return;let a=t[2]||t[3]||"",r=a.slice(a.lastIndexOf("\\")+1);return r=r.replace(/%22/g,'"'),r=r.replace(/&#(\d{4});/g,(n,o)=>String.fromCharCode(o)),r}async function mp(e,t){if(!/multipart/i.test(t))throw new TypeError("Failed to fetch");let a=t.match(/boundary=(?:"([^"]+)"|([^;]+))/i);if(!a)throw new TypeError("no or bad content-type header, no multipart boundary");let r=new xr(a[1]||a[2]),n,o,u,i,s,p,c=[],y=new Q.FormData,I=b=>{u+=S.decode(b,{stream:!0})},M=b=>{c.push(b)},l=()=>{let b=new ee.File(c,p,{type:s});y.append(i,b)},d=()=>{y.append(i,u)},S=new TextDecoder("utf-8");S.decode(),r.onPartBegin=function(){r.onPartData=I,r.onPartEnd=d,n="",o="",u="",i="",s="",p=null,c.length=0},r.onHeaderField=function(b){n+=S.decode(b,{stream:!0})},r.onHeaderValue=function(b){o+=S.decode(b,{stream:!0})},r.onHeaderEnd=function(){if(o+=S.decode(),n=n.toLowerCase(),n==="content-disposition"){let b=o.match(/\bname=("([^"]*)"|([^()<>@,;:\\"/[\]?={}\s\t]+))/i);b&&(i=b[2]||b[3]||""),p=Mp(o),p&&(r.onPartData=M,r.onPartEnd=l)}else n==="content-type"&&(s=o);o="",n=""};for await(let b of e)r.write(b);return r.end(),y}var Re,x,Ro,He,La,qa,dp,Ht,Sp,bp,Ip,gp,et,xr,fo=$a(()=>{Dr();Oa();Re=0,x={START_BOUNDARY:Re++,HEADER_FIELD_START:Re++,HEADER_FIELD:Re++,HEADER_VALUE_START:Re++,HEADER_VALUE:Re++,HEADER_VALUE_ALMOST_DONE:Re++,HEADERS_ALMOST_DONE:Re++,PART_DATA_START:Re++,PART_DATA:Re++,END:Re++},Ro=1,He={PART_BOUNDARY:Ro,LAST_BOUNDARY:Ro*=2},La=10,qa=13,dp=32,Ht=45,Sp=58,bp=97,Ip=122,gp=e=>e|32,et=()=>{},xr=class{constructor(t){this.index=0,this.flags=0,this.onHeaderEnd=et,this.onHeaderField=et,this.onHeadersEnd=et,this.onHeaderValue=et,this.onPartBegin=et,this.onPartData=et,this.onPartEnd=et,this.boundaryChars={},t=`\r
--`+t;let a=new Uint8Array(t.length);for(let r=0;r<t.length;r++)a[r]=t.charCodeAt(r),this.boundaryChars[a[r]]=!0;this.boundary=a,this.lookbehind=new Uint8Array(this.boundary.length+8),this.state=x.START_BOUNDARY}write(t){let a=0,r=t.length,n=this.index,{lookbehind:o,boundary:u,boundaryChars:i,index:s,state:p,flags:c}=this,y=this.boundary.length,I=y-1,M=t.length,l,d,S=m=>{this[m+"Mark"]=a},b=m=>{delete this[m+"Mark"]},R=(m,C,E,_)=>{(C===void 0||C!==E)&&this[m](_&&_.subarray(C,E))},f=(m,C)=>{let E=m+"Mark";E in this&&(C?(R(m,this[E],a,t),delete this[E]):(R(m,this[E],t.length,t),this[E]=0))};for(a=0;a<r;a++)switch(l=t[a],p){case x.START_BOUNDARY:if(s===u.length-2){if(l===Ht)c|=He.LAST_BOUNDARY;else if(l!==qa)return;s++;break}else if(s-1===u.length-2){if(c&He.LAST_BOUNDARY&&l===Ht)p=x.END,c=0;else if(!(c&He.LAST_BOUNDARY)&&l===La)s=0,R("onPartBegin"),p=x.HEADER_FIELD_START;else return;break}l!==u[s+2]&&(s=-2),l===u[s+2]&&s++;break;case x.HEADER_FIELD_START:p=x.HEADER_FIELD,S("onHeaderField"),s=0;case x.HEADER_FIELD:if(l===qa){b("onHeaderField"),p=x.HEADERS_ALMOST_DONE;break}if(s++,l===Ht)break;if(l===Sp){if(s===1)return;f("onHeaderField",!0),p=x.HEADER_VALUE_START;break}if(d=gp(l),d<bp||d>Ip)return;break;case x.HEADER_VALUE_START:if(l===dp)break;S("onHeaderValue"),p=x.HEADER_VALUE;case x.HEADER_VALUE:l===qa&&(f("onHeaderValue",!0),R("onHeaderEnd"),p=x.HEADER_VALUE_ALMOST_DONE);break;case x.HEADER_VALUE_ALMOST_DONE:if(l!==La)return;p=x.HEADER_FIELD_START;break;case x.HEADERS_ALMOST_DONE:if(l!==La)return;R("onHeadersEnd"),p=x.PART_DATA_START;break;case x.PART_DATA_START:p=x.PART_DATA,S("onPartData");case x.PART_DATA:if(n=s,s===0){for(a+=I;a<M&&!(t[a]in i);)a+=y;a-=I,l=t[a]}if(s<u.length)u[s]===l?(s===0&&f("onPartData",!0),s++):s=0;else if(s===u.length)s++,l===qa?c|=He.PART_BOUNDARY:l===Ht?c|=He.LAST_BOUNDARY:s=0;else if(s-1===u.length)if(c&He.PART_BOUNDARY){if(s=0,l===La){c&=~He.PART_BOUNDARY,R("onPartEnd"),R("onPartBegin"),p=x.HEADER_FIELD_START;break}}else c&He.LAST_BOUNDARY&&l===Ht?(R("onPartEnd"),p=x.END,c=0):s=0;if(s>0)o[s-1]=l;else if(n>0){let m=new Uint8Array(o.buffer,o.byteOffset,o.byteLength);R("onPartData",0,n,m),n=0,S("onPartData"),a--}break;case x.END:break;default:throw new Error(`Unexpected state entered: ${p}`)}f("onHeaderField"),f("onHeaderValue"),f("onPartData"),this.index=s,this.state=p,this.flags=c}end(){if(this.state===x.HEADER_FIELD_START&&this.index===0||this.state===x.PART_DATA&&this.index===this.boundary.length)this.onPartEnd();else if(this.state!==x.END)throw new Error("MultipartParser.end(): stream ended unexpectedly")}}});var Wl={};rt(Wl,{default:()=>Ql});module.exports=bi(Wl);var A=require("@raycast/api"),Ge=B(Fe()),Se=require("react");var $o=require("@octokit/rest"),Qo=require("@raycast/api"),Wo=B(Fe());var xa=JSON;var ro=e=>e.toUpperCase(),no=e=>{let t={};return e.forEach((a,r)=>{t[r]=a}),t};var oo=(e,t,a)=>e.document?e:{document:e,variables:t,requestHeaders:a,signal:void 0},io=(e,t,a)=>e.query?e:{query:e,variables:t,requestHeaders:a,signal:void 0},so=(e,t)=>e.documents?e:{documents:e,requestHeaders:t,signal:void 0};var _a=require("graphql"),uo=e=>{let t,a=e.definitions.filter(r=>r.kind==="OperationDefinition");return a.length===1&&(t=a[0]?.name?.value),t},Ze=e=>{if(typeof e=="string"){let a;try{let r=(0,_a.parse)(e);a=uo(r)}catch{}return{query:e,operationName:a}}let t=uo(e);return{query:(0,_a.print)(e),operationName:t}};var Xe=class e extends Error{constructor(t,a){let r=`${e.extractMessage(t)}: ${JSON.stringify({response:t,request:a})}`;super(r),Object.setPrototypeOf(this,e.prototype),this.response=t,this.request=a,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,e)}static extractMessage(t){return t.errors?.[0]?.message??`GraphQL Error (Code: ${t.status})`}};var ze=B(Bt(),1);var Xu="connection_init",ep="connection_ack",lo="ping",co="pong",tp="subscribe",ap="next",rp="error",yo="complete",je=class e{get type(){return this._type}get id(){return this._id}get payload(){return this._payload}constructor(t,a,r){this._type=t,this._payload=a,this._id=r}get text(){let t={type:this.type};return this.id!=null&&this.id!=null&&(t.id=this.id),this.payload!=null&&this.payload!=null&&(t.payload=this.payload),JSON.stringify(t)}static parse(t,a){let{type:r,payload:n,id:o}=JSON.parse(t);return new e(r,a(n),o)}},Ua=class{constructor(t,{onInit:a,onAcknowledged:r,onPing:n,onPong:o}){this.socketState={acknowledged:!1,lastRequestId:0,subscriptions:{}},this.socket=t,t.addEventListener("open",async u=>{this.socketState.acknowledged=!1,this.socketState.subscriptions={},t.send(op(a?await a():null).text)}),t.addEventListener("close",u=>{this.socketState.acknowledged=!1,this.socketState.subscriptions={}}),t.addEventListener("error",u=>{console.error(u)}),t.addEventListener("message",u=>{try{let i=np(u.data);switch(i.type){case ep:{this.socketState.acknowledged?console.warn("Duplicate CONNECTION_ACK message ignored"):(this.socketState.acknowledged=!0,r&&r(i.payload));return}case lo:{n?n(i.payload).then(y=>t.send(po(y).text)):t.send(po(null).text);return}case co:{o&&o(i.payload);return}}if(!this.socketState.acknowledged||i.id===void 0||i.id===null||!this.socketState.subscriptions[i.id])return;let{query:s,variables:p,subscriber:c}=this.socketState.subscriptions[i.id];switch(i.type){case ap:{!i.payload.errors&&i.payload.data&&c.next&&c.next(i.payload.data),i.payload.errors&&c.error&&c.error(new Xe({...i.payload,status:200},{query:s,variables:p}));return}case rp:{c.error&&c.error(new Xe({errors:i.payload,status:200},{query:s,variables:p}));return}case yo:{c.complete&&c.complete(),delete this.socketState.subscriptions[i.id];return}}}catch(i){console.error(i),t.close(1006)}t.close(4400,"Unknown graphql-ws message.")})}makeSubscribe(t,a,r,n){let o=(this.socketState.lastRequestId++).toString();return this.socketState.subscriptions[o]={query:t,variables:n,subscriber:r},this.socket.send(sp(o,{query:t,operationName:a,variables:n}).text),()=>{this.socket.send(up(o).text),delete this.socketState.subscriptions[o]}}rawRequest(t,a){return new Promise((r,n)=>{let o;this.rawSubscribe(t,{next:(u,i)=>o={data:u,extensions:i},error:n,complete:()=>r(o)},a)})}request(t,a){return new Promise((r,n)=>{let o;this.subscribe(t,{next:u=>o=u,error:n,complete:()=>r(o)},a)})}subscribe(t,a,r){let{query:n,operationName:o}=Ze(t);return this.makeSubscribe(n,o,a,r)}rawSubscribe(t,a,r){return this.makeSubscribe(t,void 0,a,r)}ping(t){this.socket.send(ip(t).text)}close(){this.socket.close(1e3)}};Ua.PROTOCOL="graphql-transport-ws";function np(e,t=a=>a){return je.parse(e,t)}function op(e){return new je(Xu,e)}function ip(e){return new je(lo,e,void 0)}function po(e){return new je(co,e,void 0)}function sp(e,t){return new je(tp,t,e)}function up(e){return new je(yo,void 0,e)}var At=e=>{let t={};return e&&(typeof Headers<"u"&&e instanceof Headers||ze&&ze.Headers&&e instanceof ze.Headers?t=no(e):Array.isArray(e)?e.forEach(([a,r])=>{a&&r!==void 0&&(t[a]=r)}):t=e),t},So=e=>e.replace(/([\s,]|#[^\n\r]+)+/g," ").trim(),pp=e=>{if(!Array.isArray(e.query)){let r=e,n=[`query=${encodeURIComponent(So(r.query))}`];return e.variables&&n.push(`variables=${encodeURIComponent(r.jsonSerializer.stringify(r.variables))}`),r.operationName&&n.push(`operationName=${encodeURIComponent(r.operationName)}`),n.join("&")}if(typeof e.variables<"u"&&!Array.isArray(e.variables))throw new Error("Cannot create query with given variable type, array expected");let t=e,a=e.query.reduce((r,n,o)=>(r.push({query:So(n),variables:t.variables?t.jsonSerializer.stringify(t.variables[o]):void 0}),r),[]);return`query=${encodeURIComponent(t.jsonSerializer.stringify(a))}`},lp=e=>async t=>{let{url:a,query:r,variables:n,operationName:o,fetch:u,fetchOptions:i,middleware:s}=t,p={...t.headers},c="",y;e==="POST"?(y=cp(r,n,o,i.jsonSerializer),typeof y=="string"&&(p["Content-Type"]="application/json")):c=pp({query:r,variables:n,operationName:o,jsonSerializer:i.jsonSerializer??xa});let I={method:e,headers:p,body:y,...i},M=a,l=I;if(s){let d=await Promise.resolve(s({...I,url:a,operationName:o,variables:n})),{url:S,...b}=d;M=S,l=b}return c&&(M=`${M}?${c}`),await u(M,l)},va=class{constructor(t,a={}){this.url=t,this.requestConfig=a,this.rawRequest=async(...r)=>{let[n,o,u]=r,i=io(n,o,u),{headers:s,fetch:p=ze.default,method:c="POST",requestMiddleware:y,responseMiddleware:I,...M}=this.requestConfig,{url:l}=this;i.signal!==void 0&&(M.signal=i.signal);let{operationName:d}=Ze(i.query);return Er({url:l,query:i.query,variables:i.variables,headers:{...At(Cr(s)),...At(i.requestHeaders)},operationName:d,fetch:p,method:c,fetchOptions:M,middleware:y}).then(S=>(I&&I(S),S)).catch(S=>{throw I&&I(S),S})}}async request(t,...a){let[r,n]=a,o=oo(t,r,n),{headers:u,fetch:i=ze.default,method:s="POST",requestMiddleware:p,responseMiddleware:c,...y}=this.requestConfig,{url:I}=this;o.signal!==void 0&&(y.signal=o.signal);let{query:M,operationName:l}=Ze(o.document);return Er({url:I,query:M,variables:o.variables,headers:{...At(Cr(u)),...At(o.requestHeaders)},operationName:l,fetch:i,method:s,fetchOptions:y,middleware:p}).then(d=>(c&&c(d),d.data)).catch(d=>{throw c&&c(d),d})}batchRequests(t,a){let r=so(t,a),{headers:n,...o}=this.requestConfig;r.signal!==void 0&&(o.signal=r.signal);let u=r.documents.map(({document:s})=>Ze(s).query),i=r.documents.map(({variables:s})=>s);return Er({url:this.url,query:u,variables:i,headers:{...At(Cr(n)),...At(r.requestHeaders)},operationName:void 0,fetch:this.requestConfig.fetch??ze.default,method:this.requestConfig.method||"POST",fetchOptions:o,middleware:this.requestConfig.requestMiddleware}).then(s=>(this.requestConfig.responseMiddleware&&this.requestConfig.responseMiddleware(s),s.data)).catch(s=>{throw this.requestConfig.responseMiddleware&&this.requestConfig.responseMiddleware(s),s})}setHeaders(t){return this.requestConfig.headers=t,this}setHeader(t,a){let{headers:r}=this.requestConfig;return r?r[t]=a:this.requestConfig.headers={[t]:a},this}setEndpoint(t){return this.url=t,this}},Er=async e=>{let{query:t,variables:a,fetchOptions:r}=e,n=lp(ro(e.method??"post")),o=Array.isArray(e.query),u=await n(e),i=await yp(u,r.jsonSerializer??xa),s=Array.isArray(i)?!i.some(({data:c})=>!c):!!i.data,p=Array.isArray(i)||!i.errors||Array.isArray(i.errors)&&!i.errors.length||r.errorPolicy==="all"||r.errorPolicy==="ignore";if(u.ok&&p&&s){let{errors:c,...y}=(Array.isArray(i),i),I=r.errorPolicy==="ignore"?y:i;return{...o?{data:I}:I,headers:u.headers,status:u.status}}else{let c=typeof i=="string"?{error:i}:i;throw new Xe({...c,status:u.status,headers:u.headers},{query:t,variables:a})}};var cp=(e,t,a,r)=>{let n=r??xa;if(!Array.isArray(e))return n.stringify({query:e,variables:t,operationName:a});if(typeof t<"u"&&!Array.isArray(t))throw new Error("Cannot create request body with given variable type, array expected");let o=e.reduce((u,i,s)=>(u.push({query:i,variables:t?t[s]:void 0}),u),[]);return n.stringify(o)},yp=async(e,t)=>{let a;return e.headers.forEach((r,n)=>{n.toLowerCase()==="content-type"&&(a=r)}),a&&(a.toLowerCase().startsWith("application/json")||a.toLowerCase().startsWith("application/graphql+json")||a.toLowerCase().startsWith("application/graphql-response+json"))?t.parse(await e.text()):e.text()},Cr=e=>typeof e=="function"?e():e;var qo=B(require("node:http"),1),No=B(require("node:https"),1),at=B(require("node:zlib"),1),re=B(require("node:stream"),1),Qt=require("node:buffer");var Ft={};rt(Ft,{default:()=>Ta.default});$(Ft,require("data-uri-to-buffer"));var Ta=B(require("data-uri-to-buffer"));var pe=B(require("node:stream"),1),ve=require("node:util"),te=require("node:buffer");var jt={};rt(jt,{default:()=>wa.default});$(jt,require("fetch-blob"));var wa=B(require("fetch-blob"));Oa();var Ue=class extends Error{constructor(t,a){super(t),Error.captureStackTrace(this,this.constructor),this.type=a}get name(){return this.constructor.name}get[Symbol.toStringTag](){return this.constructor.name}};var W=class extends Ue{constructor(t,a,r){super(t,a),r&&(this.code=this.errno=r.code,this.erroredSysCall=r.syscall)}};var Ba=Symbol.toStringTag,hr=e=>typeof e=="object"&&typeof e.append=="function"&&typeof e.delete=="function"&&typeof e.get=="function"&&typeof e.getAll=="function"&&typeof e.has=="function"&&typeof e.set=="function"&&typeof e.sort=="function"&&e[Ba]==="URLSearchParams",zt=e=>e&&typeof e=="object"&&typeof e.arrayBuffer=="function"&&typeof e.type=="string"&&typeof e.stream=="function"&&typeof e.constructor=="function"&&/^(Blob|File)$/.test(e[Ba]),Io=e=>typeof e=="object"&&(e[Ba]==="AbortSignal"||e[Ba]==="EventTarget"),go=(e,t)=>{let a=new URL(t).hostname,r=new URL(e).hostname;return a===r||a.endsWith(`.${r}`)},Mo=(e,t)=>{let a=new URL(t).protocol,r=new URL(e).protocol;return a===r};var Rp=(0,ve.promisify)(pe.default.pipeline),K=Symbol("Body internals"),Ae=class{constructor(t,{size:a=0}={}){let r=null;t===null?t=null:hr(t)?t=te.Buffer.from(t.toString()):zt(t)||te.Buffer.isBuffer(t)||(ve.types.isAnyArrayBuffer(t)?t=te.Buffer.from(t):ArrayBuffer.isView(t)?t=te.Buffer.from(t.buffer,t.byteOffset,t.byteLength):t instanceof pe.default||(t instanceof Q.FormData?(t=(0,Q.formDataToBlob)(t),r=t.type.split("=")[1]):t=te.Buffer.from(String(t))));let n=t;te.Buffer.isBuffer(t)?n=pe.default.Readable.from(t):zt(t)&&(n=pe.default.Readable.from(t.stream())),this[K]={body:t,stream:n,boundary:r,disturbed:!1,error:null},this.size=a,t instanceof pe.default&&t.on("error",o=>{let u=o instanceof Ue?o:new W(`Invalid response body while trying to fetch ${this.url}: ${o.message}`,"system",o);this[K].error=u})}get body(){return this[K].stream}get bodyUsed(){return this[K].disturbed}async arrayBuffer(){let{buffer:t,byteOffset:a,byteLength:r}=await _r(this);return t.slice(a,a+r)}async formData(){let t=this.headers.get("content-type");if(t.startsWith("application/x-www-form-urlencoded")){let r=new Q.FormData,n=new URLSearchParams(await this.text());for(let[o,u]of n)r.append(o,u);return r}let{toFormData:a}=await Promise.resolve().then(()=>(fo(),Ao));return a(this.body,t)}async blob(){let t=this.headers&&this.headers.get("content-type")||this[K].body&&this[K].body.type||"",a=await this.arrayBuffer();return new wa.default([a],{type:t})}async json(){let t=await this.text();return JSON.parse(t)}async text(){let t=await _r(this);return new TextDecoder().decode(t)}buffer(){return _r(this)}};Ae.prototype.buffer=(0,ve.deprecate)(Ae.prototype.buffer,"Please use 'response.arrayBuffer()' instead of 'response.buffer()'","node-fetch#buffer");Object.defineProperties(Ae.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0},data:{get:(0,ve.deprecate)(()=>{},"data doesn't exist, use json(), text(), arrayBuffer(), or body instead","https://github.com/node-fetch/node-fetch/issues/1000 (response)")}});async function _r(e){if(e[K].disturbed)throw new TypeError(`body used already for: ${e.url}`);if(e[K].disturbed=!0,e[K].error)throw e[K].error;let{body:t}=e;if(t===null)return te.Buffer.alloc(0);if(!(t instanceof pe.default))return te.Buffer.alloc(0);let a=[],r=0;try{for await(let n of t){if(e.size>0&&r+n.length>e.size){let o=new W(`content size at ${e.url} over limit: ${e.size}`,"max-size");throw t.destroy(o),o}r+=n.length,a.push(n)}}catch(n){throw n instanceof Ue?n:new W(`Invalid response body while trying to fetch ${e.url}: ${n.message}`,"system",n)}if(t.readableEnded===!0||t._readableState.ended===!0)try{return a.every(n=>typeof n=="string")?te.Buffer.from(a.join("")):te.Buffer.concat(a,r)}catch(n){throw new W(`Could not create Buffer from response body for ${e.url}: ${n.message}`,"system",n)}else throw new W(`Premature close of server response while trying to fetch ${e.url}`)}var ft=(e,t)=>{let a,r,{body:n}=e[K];if(e.bodyUsed)throw new Error("cannot clone body after it is used");return n instanceof pe.default&&typeof n.getBoundary!="function"&&(a=new pe.PassThrough({highWaterMark:t}),r=new pe.PassThrough({highWaterMark:t}),n.pipe(a),n.pipe(r),e[K].stream=a,n=r),n},Ap=(0,ve.deprecate)(e=>e.getBoundary(),"form-data doesn't follow the spec and requires special treatment. Use alternative package","https://github.com/node-fetch/node-fetch/issues/1167"),Na=(e,t)=>e===null?null:typeof e=="string"?"text/plain;charset=UTF-8":hr(e)?"application/x-www-form-urlencoded;charset=UTF-8":zt(e)?e.type||null:te.Buffer.isBuffer(e)||ve.types.isAnyArrayBuffer(e)||ArrayBuffer.isView(e)?null:e instanceof Q.FormData?`multipart/form-data; boundary=${t[K].boundary}`:e&&typeof e.getBoundary=="function"?`multipart/form-data;boundary=${Ap(e)}`:e instanceof pe.default?null:"text/plain;charset=UTF-8",Po=e=>{let{body:t}=e[K];return t===null?0:zt(t)?t.size:te.Buffer.isBuffer(t)?t.length:t&&typeof t.getLengthSync=="function"&&t.hasKnownLength&&t.hasKnownLength()?t.getLengthSync():null},Eo=async(e,{body:t})=>{t===null?e.end():await Rp(t,e)};var Ur=require("node:util"),Gt=B(require("node:http"),1),Va=typeof Gt.default.validateHeaderName=="function"?Gt.default.validateHeaderName:e=>{if(!/^[\^`\-\w!#$%&'*+.|~]+$/.test(e)){let t=new TypeError(`Header name must be a valid HTTP token [${e}]`);throw Object.defineProperty(t,"code",{value:"ERR_INVALID_HTTP_TOKEN"}),t}},vr=typeof Gt.default.validateHeaderValue=="function"?Gt.default.validateHeaderValue:(e,t)=>{if(/[^\t\u0020-\u007E\u0080-\u00FF]/.test(t)){let a=new TypeError(`Invalid character in header content ["${e}"]`);throw Object.defineProperty(a,"code",{value:"ERR_INVALID_CHAR"}),a}},ae=class e extends URLSearchParams{constructor(t){let a=[];if(t instanceof e){let r=t.raw();for(let[n,o]of Object.entries(r))a.push(...o.map(u=>[n,u]))}else if(t!=null)if(typeof t=="object"&&!Ur.types.isBoxedPrimitive(t)){let r=t[Symbol.iterator];if(r==null)a.push(...Object.entries(t));else{if(typeof r!="function")throw new TypeError("Header pairs must be iterable");a=[...t].map(n=>{if(typeof n!="object"||Ur.types.isBoxedPrimitive(n))throw new TypeError("Each header pair must be an iterable object");return[...n]}).map(n=>{if(n.length!==2)throw new TypeError("Each header pair must be a name/value tuple");return[...n]})}}else throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");return a=a.length>0?a.map(([r,n])=>(Va(r),vr(r,String(n)),[String(r).toLowerCase(),String(n)])):void 0,super(a),new Proxy(this,{get(r,n,o){switch(n){case"append":case"set":return(u,i)=>(Va(u),vr(u,String(i)),URLSearchParams.prototype[n].call(r,String(u).toLowerCase(),String(i)));case"delete":case"has":case"getAll":return u=>(Va(u),URLSearchParams.prototype[n].call(r,String(u).toLowerCase()));case"keys":return()=>(r.sort(),new Set(URLSearchParams.prototype.keys.call(r)).keys());default:return Reflect.get(r,n,o)}}})}get[Symbol.toStringTag](){return this.constructor.name}toString(){return Object.prototype.toString.call(this)}get(t){let a=this.getAll(t);if(a.length===0)return null;let r=a.join(", ");return/^content-encoding$/i.test(t)&&(r=r.toLowerCase()),r}forEach(t,a=void 0){for(let r of this.keys())Reflect.apply(t,a,[this.get(r),r,this])}*values(){for(let t of this.keys())yield this.get(t)}*entries(){for(let t of this.keys())yield[t,this.get(t)]}[Symbol.iterator](){return this.entries()}raw(){return[...this.keys()].reduce((t,a)=>(t[a]=this.getAll(a),t),{})}[Symbol.for("nodejs.util.inspect.custom")](){return[...this.keys()].reduce((t,a)=>{let r=this.getAll(a);return a==="host"?t[a]=r[0]:t[a]=r.length>1?r:r[0],t},{})}};Object.defineProperties(ae.prototype,["get","entries","forEach","values"].reduce((e,t)=>(e[t]={enumerable:!0},e),{}));function Co(e=[]){return new ae(e.reduce((t,a,r,n)=>(r%2===0&&t.push(n.slice(r,r+2)),t),[]).filter(([t,a])=>{try{return Va(t),vr(t,String(a)),!0}catch{return!1}}))}var fp=new Set([301,302,303,307,308]),ka=e=>fp.has(e);var de=Symbol("Response internals"),le=class e extends Ae{constructor(t=null,a={}){super(t,a);let r=a.status!=null?a.status:200,n=new ae(a.headers);if(t!==null&&!n.has("Content-Type")){let o=Na(t,this);o&&n.append("Content-Type",o)}this[de]={type:"default",url:a.url,status:r,statusText:a.statusText||"",headers:n,counter:a.counter,highWaterMark:a.highWaterMark}}get type(){return this[de].type}get url(){return this[de].url||""}get status(){return this[de].status}get ok(){return this[de].status>=200&&this[de].status<300}get redirected(){return this[de].counter>0}get statusText(){return this[de].statusText}get headers(){return this[de].headers}get highWaterMark(){return this[de].highWaterMark}clone(){return new e(ft(this,this.highWaterMark),{type:this.type,url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected,size:this.size,highWaterMark:this.highWaterMark})}static redirect(t,a=302){if(!ka(a))throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');return new e(null,{headers:{location:new URL(t).toString()},status:a})}static error(){let t=new e(null,{status:0,statusText:""});return t[de].type="error",t}static json(t=void 0,a={}){let r=JSON.stringify(t);if(r===void 0)throw new TypeError("data is not JSON serializable");let n=new ae(a&&a.headers);return n.has("content-type")||n.set("content-type","application/json"),new e(r,{...a,headers:n})}get[Symbol.toStringTag](){return"Response"}};Object.defineProperties(le.prototype,{type:{enumerable:!0},url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}});var Oo=require("node:url"),Bo=require("node:util");var ho=e=>{if(e.search)return e.search;let t=e.href.length-1,a=e.hash||(e.href[t]==="#"?"#":"");return e.href[t-a.length]==="?"?"?":""};var xo=require("node:net");function Do(e,t=!1){return e==null||(e=new URL(e),/^(about|blob|data):$/.test(e.protocol))?"no-referrer":(e.username="",e.password="",e.hash="",t&&(e.pathname="",e.search=""),e)}var _o=new Set(["","no-referrer","no-referrer-when-downgrade","same-origin","origin","strict-origin","origin-when-cross-origin","strict-origin-when-cross-origin","unsafe-url"]),Uo="strict-origin-when-cross-origin";function vo(e){if(!_o.has(e))throw new TypeError(`Invalid referrerPolicy: ${e}`);return e}function Pp(e){if(/^(http|ws)s:$/.test(e.protocol))return!0;let t=e.host.replace(/(^\[)|(]$)/g,""),a=(0,xo.isIP)(t);return a===4&&/^127\./.test(t)||a===6&&/^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(t)?!0:e.host==="localhost"||e.host.endsWith(".localhost")?!1:e.protocol==="file:"}function Pt(e){return/^about:(blank|srcdoc)$/.test(e)||e.protocol==="data:"||/^(blob|filesystem):$/.test(e.protocol)?!0:Pp(e)}function To(e,{referrerURLCallback:t,referrerOriginCallback:a}={}){if(e.referrer==="no-referrer"||e.referrerPolicy==="")return null;let r=e.referrerPolicy;if(e.referrer==="about:client")return"no-referrer";let n=e.referrer,o=Do(n),u=Do(n,!0);o.toString().length>4096&&(o=u),t&&(o=t(o)),a&&(u=a(u));let i=new URL(e.url);switch(r){case"no-referrer":return"no-referrer";case"origin":return u;case"unsafe-url":return o;case"strict-origin":return Pt(o)&&!Pt(i)?"no-referrer":u.toString();case"strict-origin-when-cross-origin":return o.origin===i.origin?o:Pt(o)&&!Pt(i)?"no-referrer":u;case"same-origin":return o.origin===i.origin?o:"no-referrer";case"origin-when-cross-origin":return o.origin===i.origin?o:u;case"no-referrer-when-downgrade":return Pt(o)&&!Pt(i)?"no-referrer":o;default:throw new TypeError(`Invalid referrerPolicy: ${r}`)}}function wo(e){let t=(e.get("referrer-policy")||"").split(/[,\s]+/),a="";for(let r of t)r&&_o.has(r)&&(a=r);return a}var V=Symbol("Request internals"),$t=e=>typeof e=="object"&&typeof e[V]=="object",Ep=(0,Bo.deprecate)(()=>{},".data is not a valid RequestInit property, use .body instead","https://github.com/node-fetch/node-fetch/issues/1000 (request)"),tt=class e extends Ae{constructor(t,a={}){let r;if($t(t)?r=new URL(t.url):(r=new URL(t),t={}),r.username!==""||r.password!=="")throw new TypeError(`${r} is an url with embedded credentials.`);let n=a.method||t.method||"GET";if(/^(delete|get|head|options|post|put)$/i.test(n)&&(n=n.toUpperCase()),!$t(a)&&"data"in a&&Ep(),(a.body!=null||$t(t)&&t.body!==null)&&(n==="GET"||n==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");let o=a.body?a.body:$t(t)&&t.body!==null?ft(t):null;super(o,{size:a.size||t.size||0});let u=new ae(a.headers||t.headers||{});if(o!==null&&!u.has("Content-Type")){let p=Na(o,this);p&&u.set("Content-Type",p)}let i=$t(t)?t.signal:null;if("signal"in a&&(i=a.signal),i!=null&&!Io(i))throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");let s=a.referrer==null?t.referrer:a.referrer;if(s==="")s="no-referrer";else if(s){let p=new URL(s);s=/^about:(\/\/)?client$/.test(p)?"client":p}else s=void 0;this[V]={method:n,redirect:a.redirect||t.redirect||"follow",headers:u,parsedURL:r,signal:i,referrer:s},this.follow=a.follow===void 0?t.follow===void 0?20:t.follow:a.follow,this.compress=a.compress===void 0?t.compress===void 0?!0:t.compress:a.compress,this.counter=a.counter||t.counter||0,this.agent=a.agent||t.agent,this.highWaterMark=a.highWaterMark||t.highWaterMark||16384,this.insecureHTTPParser=a.insecureHTTPParser||t.insecureHTTPParser||!1,this.referrerPolicy=a.referrerPolicy||t.referrerPolicy||""}get method(){return this[V].method}get url(){return(0,Oo.format)(this[V].parsedURL)}get headers(){return this[V].headers}get redirect(){return this[V].redirect}get signal(){return this[V].signal}get referrer(){if(this[V].referrer==="no-referrer")return"";if(this[V].referrer==="client")return"about:client";if(this[V].referrer)return this[V].referrer.toString()}get referrerPolicy(){return this[V].referrerPolicy}set referrerPolicy(t){this[V].referrerPolicy=vo(t)}clone(){return new e(this)}get[Symbol.toStringTag](){return"Request"}};Object.defineProperties(tt.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0},referrer:{enumerable:!0},referrerPolicy:{enumerable:!0}});var Lo=e=>{let{parsedURL:t}=e[V],a=new ae(e[V].headers);a.has("Accept")||a.set("Accept","*/*");let r=null;if(e.body===null&&/^(post|put)$/i.test(e.method)&&(r="0"),e.body!==null){let i=Po(e);typeof i=="number"&&!Number.isNaN(i)&&(r=String(i))}r&&a.set("Content-Length",r),e.referrerPolicy===""&&(e.referrerPolicy=Uo),e.referrer&&e.referrer!=="no-referrer"?e[V].referrer=To(e):e[V].referrer="no-referrer",e[V].referrer instanceof URL&&a.set("Referer",e.referrer),a.has("User-Agent")||a.set("User-Agent","node-fetch"),e.compress&&!a.has("Accept-Encoding")&&a.set("Accept-Encoding","gzip, deflate, br");let{agent:n}=e;typeof n=="function"&&(n=n(t));let o=ho(t),u={path:t.pathname+o,method:e.method,headers:a[Symbol.for("nodejs.util.inspect.custom")](),insecureHTTPParser:e.insecureHTTPParser,agent:n};return{parsedURL:t,options:u}};var Fa=class extends Ue{constructor(t,a="aborted"){super(t,a)}};Oa();Dr();var Cp=new Set(["data:","http:","https:"]);async function ja(e,t){return new Promise((a,r)=>{let n=new tt(e,t),{parsedURL:o,options:u}=Lo(n);if(!Cp.has(o.protocol))throw new TypeError(`node-fetch cannot load ${e}. URL scheme "${o.protocol.replace(/:$/,"")}" is not supported.`);if(o.protocol==="data:"){let l=(0,Ta.default)(n.url),d=new le(l,{headers:{"Content-Type":l.typeFull}});a(d);return}let i=(o.protocol==="https:"?No.default:qo.default).request,{signal:s}=n,p=null,c=()=>{let l=new Fa("The operation was aborted.");r(l),n.body&&n.body instanceof re.default.Readable&&n.body.destroy(l),!(!p||!p.body)&&p.body.emit("error",l)};if(s&&s.aborted){c();return}let y=()=>{c(),M()},I=i(o.toString(),u);s&&s.addEventListener("abort",y);let M=()=>{I.abort(),s&&s.removeEventListener("abort",y)};I.on("error",l=>{r(new W(`request to ${n.url} failed, reason: ${l.message}`,"system",l)),M()}),hp(I,l=>{p&&p.body&&p.body.destroy(l)}),process.version<"v14"&&I.on("socket",l=>{let d;l.prependListener("end",()=>{d=l._eventsCount}),l.prependListener("close",S=>{if(p&&d<l._eventsCount&&!S){let b=new Error("Premature close");b.code="ERR_STREAM_PREMATURE_CLOSE",p.body.emit("error",b)}})}),I.on("response",l=>{I.setTimeout(0);let d=Co(l.rawHeaders);if(ka(l.statusCode)){let m=d.get("Location"),C=null;try{C=m===null?null:new URL(m,n.url)}catch{if(n.redirect!=="manual"){r(new W(`uri requested responds with an invalid redirect URL: ${m}`,"invalid-redirect")),M();return}}switch(n.redirect){case"error":r(new W(`uri requested responds with a redirect, redirect mode is set to error: ${n.url}`,"no-redirect")),M();return;case"manual":break;case"follow":{if(C===null)break;if(n.counter>=n.follow){r(new W(`maximum redirect reached at: ${n.url}`,"max-redirect")),M();return}let E={headers:new ae(n.headers),follow:n.follow,counter:n.counter+1,agent:n.agent,compress:n.compress,method:n.method,body:ft(n),signal:n.signal,size:n.size,referrer:n.referrer,referrerPolicy:n.referrerPolicy};if(!go(n.url,C)||!Mo(n.url,C))for(let w of["authorization","www-authenticate","cookie","cookie2"])E.headers.delete(w);if(l.statusCode!==303&&n.body&&t.body instanceof re.default.Readable){r(new W("Cannot follow redirect with body being a readable stream","unsupported-redirect")),M();return}(l.statusCode===303||(l.statusCode===301||l.statusCode===302)&&n.method==="POST")&&(E.method="GET",E.body=void 0,E.headers.delete("content-length"));let _=wo(d);_&&(E.referrerPolicy=_),a(ja(new tt(C,E))),M();return}default:return r(new TypeError(`Redirect option '${n.redirect}' is not a valid value of RequestRedirect`))}}s&&l.once("end",()=>{s.removeEventListener("abort",y)});let S=(0,re.pipeline)(l,new re.PassThrough,m=>{m&&r(m)});process.version<"v12.10"&&l.on("aborted",y);let b={url:n.url,status:l.statusCode,statusText:l.statusMessage,headers:d,size:n.size,counter:n.counter,highWaterMark:n.highWaterMark},R=d.get("Content-Encoding");if(!n.compress||n.method==="HEAD"||R===null||l.statusCode===204||l.statusCode===304){p=new le(S,b),a(p);return}let f={flush:at.default.Z_SYNC_FLUSH,finishFlush:at.default.Z_SYNC_FLUSH};if(R==="gzip"||R==="x-gzip"){S=(0,re.pipeline)(S,at.default.createGunzip(f),m=>{m&&r(m)}),p=new le(S,b),a(p);return}if(R==="deflate"||R==="x-deflate"){let m=(0,re.pipeline)(l,new re.PassThrough,C=>{C&&r(C)});m.once("data",C=>{(C[0]&15)===8?S=(0,re.pipeline)(S,at.default.createInflate(),E=>{E&&r(E)}):S=(0,re.pipeline)(S,at.default.createInflateRaw(),E=>{E&&r(E)}),p=new le(S,b),a(p)}),m.once("end",()=>{p||(p=new le(S,b),a(p))});return}if(R==="br"){S=(0,re.pipeline)(S,at.default.createBrotliDecompress(),m=>{m&&r(m)}),p=new le(S,b),a(p);return}p=new le(S,b),a(p)}),Eo(I,n).catch(r)})}function hp(e,t){let a=Qt.Buffer.from(`0\r
\r
`),r=!1,n=!1,o;e.on("response",u=>{let{headers:i}=u;r=i["transfer-encoding"]==="chunked"&&!i["content-length"]}),e.on("socket",u=>{let i=()=>{if(r&&!n){let p=new Error("Premature close");p.code="ERR_STREAM_PREMATURE_CLOSE",t(p)}},s=p=>{n=Qt.Buffer.compare(p.slice(-5),a)===0,!n&&o&&(n=Qt.Buffer.compare(o.slice(-3),a.slice(0,3))===0&&Qt.Buffer.compare(p.slice(-2),a.slice(3))===0),o=p};u.prependListener("close",i),u.on("data",s),e.on("close",()=>{u.removeListener("close",i),u.removeListener("data",s)})})}var g=B(require("graphql-tag")),Wt=g.default`
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
`,Dp=g.default`
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
  ${Wt}
`,fe=g.default`
  fragment UserFields on User {
    id
    avatarUrl
    name
    login
    isViewer
  }
`,Kt=g.default`
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
  ${fe}
`,za=g.default`
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
  ${Kt}
  ${Wt}
  ${fe}
`,xp=g.default`
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
  ${Kt}
  ${Wt}
  ${fe}
`,Vo=g.default`
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
`,ko=g.default`
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
`,Fo=g.default`
  fragment RepositoryMentionFields on Repository {
    nameWithOwner
    description
    isPrivate
    isArchived
    owner {
      avatarUrl(size: 64)
    }
  }
`,_p=g.default`
  fragment ProjectViewerFields on ProjectV2View {
    id
    name
    number
  }
`,jo=g.default`
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
  ${Kt}
  ${_p}
`,zo=g.default`
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
  ${Wt}
  ${Kt}
  ${fe}
`,Up=g.default`
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
  ${Wt}
  ${Kt}
  ${fe}
`,vp=g.default`
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
`,Ho=g.default`
  fragment CommitFields on Commit {
    authoredDate
    oid
    message
  }
`,Tr=g.default`
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
`,Tp=g.default`
  fragment ReleaseFields on Release {
    id
    description
    name
    publishedAt
    createdAt
    tagName
    url
  }
`,wp=g.default`
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
`,Op=g.default`
  mutation createRef($input: CreateRefInput!) {
    createRef(input: $input) {
      clientMutationId
      ref {
        id
        name
      }
    }
  }
`,Bp=g.default`
  mutation deleteLinkedBranch($input: DeleteLinkedBranchInput!) {
    deleteLinkedBranch(input: $input) {
      clientMutationId
    }
  }
`,Lp=g.default`
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
  ${Dp}
`,qp=g.default`
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
`,Np=g.default`
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
  ${fe}
`,Vp=g.default`
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
`,kp=g.default`
  query issueDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...IssueDetailFields
    }
  }
  ${xp}
`,Fp=g.default`
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
`,jp=g.default`
  query issueByNumber($owner: String!, $name: String!, $issueNumber: Int!) {
    repository(owner: $owner, name: $name) {
      issue(number: $issueNumber) {
        ...IssueFields
      }
    }
  }
  ${za}
`,zp=g.default`
  mutation closeIssue($nodeId: ID!, $stateReason: IssueClosedStateReason!) {
    closeIssue(input: { issueId: $nodeId, stateReason: $stateReason }) {
      issue {
        id
      }
    }
  }
`,Hp=g.default`
  mutation reopenIssue($nodeId: ID!) {
    reopenIssue(input: { issueId: $nodeId }) {
      issue {
        id
      }
    }
  }
`,Gp=g.default`
  mutation changeIssueAssignees($issueId: ID!, $assigneeIds: [ID!]) {
    updateIssue(input: { id: $issueId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,$p=g.default`
  mutation changeIssueMilestone($issueId: ID!, $milestoneId: ID) {
    updateIssue(input: { id: $issueId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,Qp=g.default`
  mutation addIssueToProject($issueId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $issueId }) {
      clientMutationId
    }
  }
`,Wp=g.default`
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
`,Kp=g.default`
  query searchIssueMentions($query: String!, $numberOfItems: Int!) {
    search(query: $query, type: ISSUE, first: $numberOfItems) {
      nodes {
        ... on Issue {
          ...IssueMentionFields
        }
      }
    }
  }
  ${Vo}
`,Yp=g.default`
  query searchPullRequestMentions($query: String!, $numberOfItems: Int!) {
    search(query: $query, type: ISSUE, first: $numberOfItems) {
      nodes {
        ... on PullRequest {
          ...PullRequestMentionFields
        }
      }
    }
  }
  ${ko}
`,Jp=g.default`
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
  ${Vo}
  ${ko}
`,Zp=g.default`
  query searchRepositoryMentions($query: String!, $numberOfItems: Int!) {
    search(query: $query, type: REPOSITORY, first: $numberOfItems) {
      nodes {
        ... on Repository {
          ...RepositoryMentionFields
        }
      }
    }
  }
  ${Fo}
`,Xp=g.default`
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
  ${Fo}
`,el=g.default`
  mutation changeProjectStatus($projectId: ID!, $closed: Boolean!) {
    updateProjectV2(input: { projectId: $projectId, closed: $closed }) {
      clientMutationId
    }
  }
`,tl=g.default`
  query projectDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...ProjectFields
    }
  }
  ${jo}
`,al=g.default`
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
  ${zo}
`,rl=g.default`
  query pullRequestDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...PullRequestDetailsFields
    }
  }
  ${Up}
`,nl=g.default`
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
  ${fe}
`,ol=g.default`
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
`,il=g.default`
  query pullRequestCommits($nodeId: ID!, $numberOfItems: Int!, $before: String) {
    node(id: $nodeId) {
      ...PullRequestCommitFields
    }
  }
  ${vp}
`,sl=g.default`
  mutation closePullRequest($nodeId: ID!) {
    closePullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,ul=g.default`
  mutation reopenPullRequest($nodeId: ID!) {
    reopenPullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,pl=g.default`
  mutation markPullRequestReadyForReview($nodeId: ID!) {
    markPullRequestReadyForReview(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,ll=g.default`
  mutation addPullRequestReview($nodeId: ID!, $event: PullRequestReviewEvent, $body: String) {
    addPullRequestReview(input: { pullRequestId: $nodeId, event: $event, body: $body }) {
      pullRequestReview {
        id
      }
    }
  }
`,cl=g.default`
  mutation changePullRequestAssignees($pullRequestId: ID!, $assigneeIds: [ID!]) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,yl=g.default`
  mutation changePullRequestMilestone($pullRequestId: ID!, $milestoneId: ID) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,dl=g.default`
  mutation addPullRequestToProject($pullRequestId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $pullRequestId }) {
      clientMutationId
    }
  }
`,Sl=g.default`
  mutation requestReview($pullRequestId: ID!, $collaboratorId: ID!) {
    requestReviews(input: { pullRequestId: $pullRequestId, userIds: [$collaboratorId], union: true }) {
      clientMutationId
    }
  }
`,bl=g.default`
  mutation mergePullRequest($nodeId: ID!, $method: PullRequestMergeMethod!) {
    mergePullRequest(input: { pullRequestId: $nodeId, mergeMethod: $method }) {
      pullRequest {
        nodeId: id
      }
    }
  }
`,Il=g.default`
  mutation addPullRequestToMergeQueue($nodeId: ID!) {
    enqueuePullRequest(input: { pullRequestId: $nodeId }) {
      __typename
    }
  }
`,gl=g.default`
  mutation removePullRequestFromMergeQueue($nodeId: ID!) {
    dequeuePullRequest(input: { id: $nodeId }) {
      __typename
    }
  }
`,Ml=g.default`
  mutation enablePullRequestAutoMerge($nodeId: ID!, $mergeMethod: PullRequestMergeMethod) {
    enablePullRequestAutoMerge(input: { pullRequestId: $nodeId, mergeMethod: $mergeMethod }) {
      pullRequest {
        id
      }
    }
  }
`,ml=g.default`
  mutation disablePullRequestAutoMerge($nodeId: ID!) {
    disablePullRequestAutoMerge(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Rl=g.default`
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
`,Al=g.default`
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
  ${zo}
`,fl=g.default`
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
  ${Tr}
`,Pl=g.default`
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
  ${Tr}
`,El=g.default`
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
`,Cl=g.default`
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
`,hl=g.default`
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
  ${Ho}
  ${fe}
`,Dl=g.default`
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
  ${Ho}
`,xl=g.default`
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
`,_l=g.default`
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
  ${Tp}
`,Ul=g.default`
  mutation addStar($repositoryId: ID!) {
    addStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,vl=g.default`
  mutation removeStar($repositoryId: ID!) {
    removeStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,Tl=g.default`
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
  ${Tr}
`,wl=g.default`
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
  ${fe}
  ${jo}
`,Ol=g.default`
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
  ${fe}
`,Bl=g.default`
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
`,Ll=(e,t,a,r)=>e();function Go(e,t=Ll){return{createLinkedBranch(a,r,n){return t(o=>e.request({document:wp,variables:a,requestHeaders:{...r,...o},signal:n}),"createLinkedBranch","mutation",a)},createRef(a,r,n){return t(o=>e.request({document:Op,variables:a,requestHeaders:{...r,...o},signal:n}),"createRef","mutation",a)},deleteLinkedBranch(a,r,n){return t(o=>e.request({document:Bp,variables:a,requestHeaders:{...r,...o},signal:n}),"deleteLinkedBranch","mutation",a)},searchDiscussions(a,r,n){return t(o=>e.request({document:Lp,variables:a,requestHeaders:{...r,...o},signal:n}),"searchDiscussions","query",a)},getGitHubDiscussionNumber(a,r,n){return t(o=>e.request({document:qp,variables:a,requestHeaders:{...r,...o},signal:n}),"getGitHubDiscussionNumber","query",a)},repositoryCollaboratorsForIssues(a,r,n){return t(o=>e.request({document:Np,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryCollaboratorsForIssues","query",a)},repositoryProjectsForIssues(a,r,n){return t(o=>e.request({document:Vp,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryProjectsForIssues","query",a)},issueDetails(a,r,n){return t(o=>e.request({document:kp,variables:a,requestHeaders:{...r,...o},signal:n}),"issueDetails","query",a)},searchIssues(a,r,n){return t(o=>e.request({document:Fp,variables:a,requestHeaders:{...r,...o},signal:n}),"searchIssues","query",a)},issueByNumber(a,r,n){return t(o=>e.request({document:jp,variables:a,requestHeaders:{...r,...o},signal:n}),"issueByNumber","query",a)},closeIssue(a,r,n){return t(o=>e.request({document:zp,variables:a,requestHeaders:{...r,...o},signal:n}),"closeIssue","mutation",a)},reopenIssue(a,r,n){return t(o=>e.request({document:Hp,variables:a,requestHeaders:{...r,...o},signal:n}),"reopenIssue","mutation",a)},changeIssueAssignees(a,r,n){return t(o=>e.request({document:Gp,variables:a,requestHeaders:{...r,...o},signal:n}),"changeIssueAssignees","mutation",a)},changeIssueMilestone(a,r,n){return t(o=>e.request({document:$p,variables:a,requestHeaders:{...r,...o},signal:n}),"changeIssueMilestone","mutation",a)},addIssueToProject(a,r,n){return t(o=>e.request({document:Qp,variables:a,requestHeaders:{...r,...o},signal:n}),"addIssueToProject","mutation",a)},createIssue(a,r,n){return t(o=>e.request({document:Wp,variables:a,requestHeaders:{...r,...o},signal:n}),"createIssue","mutation",a)},searchIssueMentions(a,r,n){return t(o=>e.request({document:Kp,variables:a,requestHeaders:{...r,...o},signal:n}),"searchIssueMentions","query",a)},searchPullRequestMentions(a,r,n){return t(o=>e.request({document:Yp,variables:a,requestHeaders:{...r,...o},signal:n}),"searchPullRequestMentions","query",a)},issueOrPullRequestMention(a,r,n){return t(o=>e.request({document:Jp,variables:a,requestHeaders:{...r,...o},signal:n}),"issueOrPullRequestMention","query",a)},searchRepositoryMentions(a,r,n){return t(o=>e.request({document:Zp,variables:a,requestHeaders:{...r,...o},signal:n}),"searchRepositoryMentions","query",a)},viewerRepositoryMentions(a,r,n){return t(o=>e.request({document:Xp,variables:a,requestHeaders:{...r,...o},signal:n}),"viewerRepositoryMentions","query",a)},changeProjectStatus(a,r,n){return t(o=>e.request({document:el,variables:a,requestHeaders:{...r,...o},signal:n}),"changeProjectStatus","mutation",a)},projectDetails(a,r,n){return t(o=>e.request({document:tl,variables:a,requestHeaders:{...r,...o},signal:n}),"projectDetails","query",a)},searchPullRequests(a,r,n){return t(o=>e.request({document:al,variables:a,requestHeaders:{...r,...o},signal:n}),"searchPullRequests","query",a)},pullRequestDetails(a,r,n){return t(o=>e.request({document:rl,variables:a,requestHeaders:{...r,...o},signal:n}),"pullRequestDetails","query",a)},repositoryCollaboratorsForPullRequests(a,r,n){return t(o=>e.request({document:nl,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryCollaboratorsForPullRequests","query",a)},repositoryProjectsForPullRequests(a,r,n){return t(o=>e.request({document:ol,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryProjectsForPullRequests","query",a)},pullRequestCommits(a,r,n){return t(o=>e.request({document:il,variables:a,requestHeaders:{...r,...o},signal:n}),"pullRequestCommits","query",a)},closePullRequest(a,r,n){return t(o=>e.request({document:sl,variables:a,requestHeaders:{...r,...o},signal:n}),"closePullRequest","mutation",a)},reopenPullRequest(a,r,n){return t(o=>e.request({document:ul,variables:a,requestHeaders:{...r,...o},signal:n}),"reopenPullRequest","mutation",a)},markPullRequestReadyForReview(a,r,n){return t(o=>e.request({document:pl,variables:a,requestHeaders:{...r,...o},signal:n}),"markPullRequestReadyForReview","mutation",a)},addPullRequestReview(a,r,n){return t(o=>e.request({document:ll,variables:a,requestHeaders:{...r,...o},signal:n}),"addPullRequestReview","mutation",a)},changePullRequestAssignees(a,r,n){return t(o=>e.request({document:cl,variables:a,requestHeaders:{...r,...o},signal:n}),"changePullRequestAssignees","mutation",a)},changePullRequestMilestone(a,r,n){return t(o=>e.request({document:yl,variables:a,requestHeaders:{...r,...o},signal:n}),"changePullRequestMilestone","mutation",a)},addPullRequestToProject(a,r,n){return t(o=>e.request({document:dl,variables:a,requestHeaders:{...r,...o},signal:n}),"addPullRequestToProject","mutation",a)},requestReview(a,r,n){return t(o=>e.request({document:Sl,variables:a,requestHeaders:{...r,...o},signal:n}),"requestReview","mutation",a)},mergePullRequest(a,r,n){return t(o=>e.request({document:bl,variables:a,requestHeaders:{...r,...o},signal:n}),"mergePullRequest","mutation",a)},addPullRequestToMergeQueue(a,r,n){return t(o=>e.request({document:Il,variables:a,requestHeaders:{...r,...o},signal:n}),"addPullRequestToMergeQueue","mutation",a)},removePullRequestFromMergeQueue(a,r,n){return t(o=>e.request({document:gl,variables:a,requestHeaders:{...r,...o},signal:n}),"removePullRequestFromMergeQueue","mutation",a)},enablePullRequestAutoMerge(a,r,n){return t(o=>e.request({document:Ml,variables:a,requestHeaders:{...r,...o},signal:n}),"enablePullRequestAutoMerge","mutation",a)},disablePullRequestAutoMerge(a,r,n){return t(o=>e.request({document:ml,variables:a,requestHeaders:{...r,...o},signal:n}),"disablePullRequestAutoMerge","mutation",a)},createPullRequest(a,r,n){return t(o=>e.request({document:Rl,variables:a,requestHeaders:{...r,...o},signal:n}),"createPullRequest","mutation",a)},initPullRequest(a,r,n){return t(o=>e.request({document:Al,variables:a,requestHeaders:{...r,...o},signal:n}),"initPullRequest","mutation",a)},searchRepositories(a,r,n){return t(o=>e.request({document:fl,variables:a,requestHeaders:{...r,...o},signal:n}),"searchRepositories","query",a)},myLatestRepositories(a,r,n){return t(o=>e.request({document:Pl,variables:a,requestHeaders:{...r,...o},signal:n}),"myLatestRepositories","query",a)},milestonesForRepository(a,r,n){return t(o=>e.request({document:El,variables:a,requestHeaders:{...r,...o},signal:n}),"milestonesForRepository","query",a)},commentsForPullRequest(a,r,n){return t(o=>e.request({document:Cl,variables:a,requestHeaders:{...r,...o},signal:n}),"commentsForPullRequest","query",a)},dataForRepository(a,r,n){return t(o=>e.request({document:hl,variables:a,requestHeaders:{...r,...o},signal:n}),"dataForRepository","query",a)},searchRepositoryBranches(a,r,n){return t(o=>e.request({document:Dl,variables:a,requestHeaders:{...r,...o},signal:n}),"searchRepositoryBranches","query",a)},repositoryIssues(a,r,n){return t(o=>e.request({document:xl,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryIssues","query",a)},repositoryReleases(a,r,n){return t(o=>e.request({document:_l,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryReleases","query",a)},addStar(a,r,n){return t(o=>e.request({document:Ul,variables:a,requestHeaders:{...r,...o},signal:n}),"addStar","mutation",a)},removeStar(a,r,n){return t(o=>e.request({document:vl,variables:a,requestHeaders:{...r,...o},signal:n}),"removeStar","mutation",a)},myStarredRepositories(a,r,n){return t(o=>e.request({document:Tl,variables:a,requestHeaders:{...r,...o},signal:n}),"myStarredRepositories","query",a)},getViewer(a,r,n){return t(o=>e.request({document:wl,variables:a,requestHeaders:{...r,...o},signal:n}),"getViewer","query",a)},getViewerStats(a,r,n){return t(o=>e.request({document:Ol,variables:a,requestHeaders:{...r,...o},signal:n}),"getViewerStats","query",a)},getViewerStatsDetails(a,r,n){return t(o=>e.request({document:Bl,variables:a,requestHeaders:{...r,...o},signal:n}),"getViewerStatsDetails","query",a)}}}var wr=null,Or=null,Ko=null,ql=(0,Qo.getPreferenceValues)();function Nl({token:e,type:t}){let a=t==="personal"?`token ${e}`:`bearer ${e}`;Ko=e,wr=Go(new va("https://api.github.com/graphql",{headers:{authorization:a}})),Or=new $o.Octokit({auth:e,request:{fetch:ja}})}var Yo=Wo.OAuthService.github({personalAccessToken:ql.personalAccessToken,scope:"notifications repo project read:org read:user read:packages",onAuthorize:Nl});function Pe(){if(!wr||!Or)throw new Error("GitHub clients not initialized");return{github:wr,octokit:Or,token:Ko}}var Te=require("@raycast/api");var ti=B(Fe());var Ga=require("node:child_process");var Zo=require("node:util"),Y=require("@raycast/api"),Vl=B(Fe());function Ha(e){return e?.response?.errors?e.response.errors[0].message:e instanceof Error?e.message:String(e)}var Ky=[{title:"github.dev",baseUrl:"https://github.dev/",icon:{source:"github-dev.svg",tintColor:Y.Color.PrimaryText},shortcut:Y.Keyboard.Shortcut.Common.Open},{title:"VS Code for the Web",baseUrl:"https://vscode.dev/github/",icon:{source:"vscode.svg",tintColor:Y.Color.PrimaryText},shortcut:{macOS:{modifiers:["cmd"],key:"v"},Windows:{modifiers:["ctrl"],key:"v"}}},{title:"CodeSandbox",baseUrl:"https://codesandbox.io/s/github/",icon:{source:"codesandbox.svg",tintColor:Y.Color.PrimaryText}},{title:"Replit",baseUrl:"https://repl.it/github/",icon:{source:"replit.svg",tintColor:Y.Color.PrimaryText}},{title:"Gitpod",baseUrl:"https://gitpod.io/#https://github.com/",icon:{source:"gitpod.svg",tintColor:Y.Color.PrimaryText}},{title:"Glitch",baseUrl:"https://glitch.com/edit/#!/import/github/",icon:{source:"glitch.svg",tintColor:Y.Color.PrimaryText}},{title:"Sourcegraph",baseUrl:"https://sourcegraph.com/github.com/",icon:{source:"sourcegraph.svg",tintColor:Y.Color.PrimaryText},shortcut:{macOS:{modifiers:["cmd"],key:"s"},Windows:{modifiers:["ctrl"],key:"s"}}},{title:"DeepWiki",baseUrl:"https://deepwiki.com/",icon:{source:"deepwiki.png"},shortcut:{macOS:{modifiers:["cmd"],key:"d"},Windows:{modifiers:["ctrl"],key:"d"}}},{title:"VS Code Remote Repositories",baseUrl:"vscode://GitHub.remotehub/open?url=https://github.com/",icon:{source:"vscode.svg",tintColor:Y.Color.PrimaryText}}];var kl=[{title:"Relevance",value:""},{title:"Last Update",value:"sort:updated-desc"},{title:"Name",value:"sort:name-asc"},{title:"Stars",value:"sort:stars-desc"},{title:"Forks",value:"sort:forks-desc"}],Fl=[{title:"Last Pushed",value:"pushed_at:desc"},{title:"Name",value:"name:asc"},{title:"Stars",value:"stargazers:desc"}],jl=[{title:"Recently Starred",value:"starred_at:desc"},{title:"Oldest Starred",value:"starred_at:asc"}],Yy=kl[0].value,Jy=Fl[0].value,Zy=jl[0].value;var Xy=(0,Zo.promisify)(Ga.execFile);var Yt="\x1B",Jo="\x07",ed=new RegExp(`${Yt}][^${Jo}${Yt}]*(?:${Jo}|${Yt}\\\\)`,"g"),td=new RegExp(`${Yt}\\[[0-9;?]*[A-Za-z]`,"g"),ad=new RegExp(`${Yt}\\([0-9A-Za-z]`,"g");var Xo=B(Fe());function ei(){let{github:e}=Pe(),{data:t}=(0,Xo.useCachedPromise)(async()=>(await e.getViewer()).viewer);return t}function ai(){let{github:e}=Pe(),r=["user:@me",...ei()?.organizations?.nodes?.flatMap(n=>n?.login?[`org:${n.login}`]:[])??[]].join(" ");return(0,ti.useCachedPromise)(async n=>{let u=(await Promise.allSettled(n.split(" ").map(i=>e.searchRepositories({query:`${i} archived:false sort:updated-desc`,numberOfItems:100})))).flatMap(i=>i.status==="fulfilled"?i.value.search.nodes:[]);return[...new Map(u.map(i=>[i.id,i])).values()].sort((i,s)=>new Date(s.updatedAt).getTime()-new Date(i.updatedAt).getTime())},[r])}var Et=require("react/jsx-runtime");function Br({setSelectedRepository:e,withAllRepositories:t=!0}){let{data:a}=ai();return(0,Et.jsxs)(Te.List.Dropdown,{tooltip:"Select Repository",storeValue:!0,onChange:e,children:[t?(0,Et.jsx)(Te.List.Dropdown.Item,{value:"",title:"All Repositories",icon:Te.Icon.List}):null,a&&a.length>0?(0,Et.jsx)(Te.List.Dropdown.Section,{children:a.map(r=>(0,Et.jsx)(Te.List.Dropdown.Item,{title:r.nameWithOwner,value:r.nameWithOwner,icon:{source:r.owner.avatarUrl,mask:Te.Image.Mask.Circle}},r.id))}):null]})}function ri(e,t,a,r){let n=a.trim().toLowerCase(),o=n?e.filter(s=>s.toLowerCase().includes(n)):e,u=n?[...t??[],...o]:o,i=[...new Set(u)];return r&&!i.includes(r)?[r,...i]:i}var ni=B(Fe());var oi=(0,ni.withAccessToken)(Yo);var Lr=B(Fe());var ii=100,zl=3;function si(e){let{octokit:t}=Pe(),[a,r]=(e??"").split("/");return(0,Lr.useCachedPromise)(async(n,o)=>{let i=(async()=>{let y=[];for(let I=1;I<=zl;I++){let{data:M}=await t.repos.listBranches({owner:n,repo:o,per_page:ii,page:I});if(y.push(...M.map(l=>l.name)),M.length<ii)break}return y})().catch(y=>{if(y.status===409)return[];throw y}),[{data:s},p]=await Promise.all([t.repos.get({owner:n,repo:o}),i]),c=s.default_branch;return{branches:[c,...p.filter(y=>y!==c)],defaultBranch:c}},[a,r],{execute:!!(a&&r)})}function ui(e,t){let{github:a}=Pe(),[r,n]=(e??"").split("/"),o=t.trim();return(0,Lr.useCachedPromise)(async(u,i,s)=>((await a.searchRepositoryBranches({owner:u,name:i,query:s})).repository?.refs?.nodes??[]).flatMap(c=>c?.name?[c.name]:[]),[r,n,o],{execute:!!(r&&n&&o)})}var D=require("react/jsx-runtime"),Hl=30;function Gl(e){if(!e)return"v1.0.0";let t=e.match(/^v?(\d+)\.(\d+)\.(\d+)$/);if(!t)return"";let[,a,r,n]=t;return`${e.startsWith("v")?"v":""}${a}.${r}.${Number(n)+1}`}function $l(){let{octokit:e}=Pe(),[t,a]=(0,Se.useState)(null),{data:r,isLoading:n,mutate:o}=(0,Ge.useCachedPromise)(async i=>{if(!i)return[];let[s,p]=i.split("/"),{data:c}=await e.repos.listReleases({owner:s,repo:p,per_page:Hl});return c},[t],{execute:!!t}),u=r??[];return(0,D.jsxs)(A.List,{isLoading:n,navigationTitle:"Create Release",searchBarPlaceholder:"Filter releases by tag or name",searchBarAccessory:(0,D.jsx)(Br,{setSelectedRepository:a,withAllRepositories:!1}),children:[t?(0,D.jsx)(A.List.Item,{title:"Create Release",subtitle:t,icon:A.Icon.Plus,actions:(0,D.jsxs)(A.ActionPanel,{children:[(0,D.jsx)(A.Action.Push,{title:"Create Release",icon:A.Icon.Plus,target:(0,D.jsx)(pi,{repository:t,onCreated:o})}),(0,D.jsx)(A.Action.OpenInBrowser,{title:"Open Releases in Browser",url:`https://github.com/${t}/releases`}),(0,D.jsx)(A.Action,{title:"Refresh Releases",icon:A.Icon.ArrowClockwise,shortcut:A.Keyboard.Shortcut.Common.Refresh,onAction:()=>o()})]})}):null,t?u.map(i=>(0,D.jsx)(A.List.Item,{title:i.name||i.tag_name,subtitle:i.draft?"Draft":i.prerelease?"Pre-release":void 0,icon:i.draft?A.Icon.Circle:A.Icon.CheckCircle,accessories:[{tag:i.tag_name},{date:new Date(i.published_at??i.created_at),tooltip:i.published_at?`Published at: ${new Date(i.published_at).toLocaleString()}`:`Created at: ${new Date(i.created_at).toLocaleString()}`}],actions:(0,D.jsxs)(A.ActionPanel,{children:[(0,D.jsx)(A.Action.Push,{title:"Create Release",icon:A.Icon.Plus,target:(0,D.jsx)(pi,{repository:t,onCreated:o})}),(0,D.jsx)(A.Action.OpenInBrowser,{url:i.html_url}),(0,D.jsx)(A.Action.CopyToClipboard,{title:"Copy Release URL",content:i.html_url,shortcut:{macOS:{modifiers:["cmd","shift"],key:"c"},Windows:{modifiers:["ctrl","shift"],key:"c"}}}),(0,D.jsx)(A.Action,{title:"Refresh Releases",icon:A.Icon.ArrowClockwise,shortcut:A.Keyboard.Shortcut.Common.Refresh,onAction:()=>o()})]})},i.id)):null,t?null:(0,D.jsx)(A.List.EmptyView,{title:"Select a Repository",description:"Choose a repository from the dropdown to see its releases.",icon:A.Icon.Tag})]})}function pi({repository:e,onCreated:t}){let{octokit:a}=Pe(),[r,n]=e.split("/"),[o,u]=(0,Se.useState)(!1),[i,s]=(0,Se.useState)(""),{data:p,isLoading:c}=si(e),{data:y,isLoading:I}=ui(e,i),{data:M,isLoading:l}=(0,Ge.useCachedPromise)(async(P,v)=>{let{data:L}=await a.repos.listReleases({owner:P,repo:v,per_page:1});return L[0]??null},[r,n]),d=l?"":Gl(M?.tag_name??""),{handleSubmit:S,itemProps:b,values:R,setValue:f}=(0,Ge.useForm)({async onSubmit(P){let v=P.notes.trim(),L=await(0,A.showToast)({style:A.Toast.Style.Animated,title:"Creating release"});try{let{data:F}=await a.repos.createRelease({owner:r,repo:n,tag_name:P.tag.trim(),target_commitish:P.target,name:P.title.trim()||void 0,body:v||void 0,generate_release_notes:!v,draft:P.draft,prerelease:P.prerelease});L.style=A.Toast.Style.Success,L.title=`Created release ${F.tag_name}`,L.primaryAction={title:"Open Release in Browser",shortcut:A.Keyboard.Shortcut.Common.OpenWith,onAction:()=>(0,A.open)(F.html_url)},L.secondaryAction={title:"Copy Release URL",shortcut:A.Keyboard.Shortcut.Common.Copy,onAction:()=>A.Clipboard.copy(F.html_url)},t?.(),await(0,A.popToRoot)()}catch(F){L.style=A.Toast.Style.Failure,L.title="Failed creating release",L.message=Ha(F)}},initialValues:{tag:"",title:"",target:"",draft:!1,prerelease:!1,notes:""},validation:{tag:Ge.FormValidation.Required,target:Ge.FormValidation.Required}}),m=ri(p?.branches??[],y,i,R.target),C=(0,Se.useRef)(0),E=(0,Se.useRef)(!1);(0,Se.useEffect)(()=>{E.current||l||(E.current=!0,f("tag",d),f("title",d))},[l,d]);let _=(0,Se.useRef)(!1);(0,Se.useEffect)(()=>{_.current||c||!p||(_.current=!0,f("target",p.branches.includes("main")?"main":p.defaultBranch))},[p,c]);function w(){C.current+=1}async function J(){let P=R.tag.trim(),v=R.target||void 0;if(!P){await(0,A.showToast)({style:A.Toast.Style.Failure,title:"Enter a tag first"});return}let L=++C.current,F=await(0,A.showToast)({style:A.Toast.Style.Animated,title:"Generating release notes"});try{let{data:Ct}=await a.repos.generateReleaseNotes({owner:r,repo:n,tag_name:P,target_commitish:v});if(L!==C.current){await F.hide();return}f("notes",Ct.body??""),u(!0),F.style=A.Toast.Style.Success,F.title="Release notes generated"}catch(Ct){if(L!==C.current){await F.hide();return}F.style=A.Toast.Style.Failure,F.title="Failed generating release notes",F.message=Ha(Ct)}}function k(P){w();let v=R.tag;f("tag",P),(!R.title||R.title===v)&&f("title",P),o&&(f("notes",""),u(!1))}function O(P){w(),f("target",P),o&&(f("notes",""),u(!1))}function Z(P){w(),f("notes",P),o&&u(!1)}let ne=M?`${e} \xB7 ${M.tag_name}`:e;return(0,D.jsxs)(A.Form,{isLoading:c||l,navigationTitle:ne,searchBarAccessory:M?(0,D.jsx)(A.Form.LinkAccessory,{text:`Latest release: ${M.tag_name}`,target:M.html_url}):l?void 0:(0,D.jsx)(A.Form.LinkAccessory,{text:"No releases yet",target:`https://github.com/${e}/releases`}),actions:(0,D.jsxs)(A.ActionPanel,{children:[(0,D.jsx)(A.Action.SubmitForm,{title:"Create Release",icon:A.Icon.Upload,onSubmit:S}),(0,D.jsx)(A.Action,{title:o?"Regenerate Release Notes":"Generate Release Notes",icon:A.Icon.Wand,shortcut:{macOS:{modifiers:["cmd"],key:"g"},Windows:{modifiers:["ctrl"],key:"g"}},onAction:J}),(0,D.jsx)(A.Action.OpenInBrowser,{title:"Open Releases in Browser",url:`https://github.com/${e}/releases`})]}),children:[(0,D.jsx)(A.Form.TextField,{...b.tag,title:"Tag",placeholder:"v1.0.0",info:d?`Suggested: ${d}`:void 0,onChange:k}),(0,D.jsx)(A.Form.TextField,{...b.title,title:"Title",placeholder:"Defaults to the tag name"}),(0,D.jsx)(A.Form.Dropdown,{...b.target,title:"Target",isLoading:c||I,throttle:!0,onSearchTextChange:s,onChange:O,children:m.map(P=>(0,D.jsx)(A.Form.Dropdown.Item,{title:P,value:P},P))}),(0,D.jsx)(A.Form.Checkbox,{...b.draft,label:"Draft"}),(0,D.jsx)(A.Form.Checkbox,{...b.prerelease,label:"Pre-release"}),(0,D.jsx)(A.Form.Separator,{}),(0,D.jsx)(A.Form.TextArea,{...b.notes,title:"Notes",placeholder:"Generate notes from merged pull requests or write your own Markdown.",enableMarkdown:!0,info:"Leave empty to let GitHub generate the release notes automatically.",onChange:Z})]})}var Ql=oi($l);
