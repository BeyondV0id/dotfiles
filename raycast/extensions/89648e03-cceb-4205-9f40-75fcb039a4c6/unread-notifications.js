"use strict";var ai=Object.create;var $t=Object.defineProperty;var ri=Object.getOwnPropertyDescriptor;var ni=Object.getOwnPropertyNames;var oi=Object.getPrototypeOf,ii=Object.prototype.hasOwnProperty;var Va=(e,t,a)=>()=>{if(a)throw a[0];try{return e&&(t=e(e=0)),t}catch(r){throw a=[r],r}};var C=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(a){throw t=0,a}},Ze=(e,t)=>{for(var a in t)$t(e,a,{get:t[a],enumerable:!0})},Gt=(e,t,a,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of ni(t))!ii.call(e,n)&&n!==a&&$t(e,n,{get:()=>t[n],enumerable:!(r=ri(t,n))||r.enumerable});return e},z=(e,t,a)=>(Gt(e,t,"default"),a&&Gt(a,t,"default")),N=(e,t,a)=>(a=e!=null?ai(oi(e)):{},Gt(t||!e||!e.__esModule?$t(a,"default",{value:e,enumerable:!0}):a,e)),si=e=>Gt($t({},"__esModule",{value:!0}),e);var _r=C(Qt=>{"use strict";Object.defineProperty(Qt,"__esModule",{value:!0});Qt.useDeepMemo=void 0;var ka=require("react"),ui=require("dequal/lite");function pi(e){let t=(0,ka.useRef)(e),a=(0,ka.useRef)(0);return(0,ui.dequal)(e,t.current)||(t.current=e,a.current+=1),(0,ka.useMemo)(()=>t.current,[a.current])}Qt.useDeepMemo=pi});var Re=C(Wt=>{"use strict";Object.defineProperty(Wt,"__esModule",{value:!0});Wt.useLatest=void 0;var li=require("react");function ci(e){let t=(0,li.useRef)(e);return t.current=e,t}Wt.useLatest=ci});var Rt=C(ye=>{"use strict";var yi=ye&&ye.__createBinding||(Object.create?(function(e,t,a,r){r===void 0&&(r=a);var n=Object.getOwnPropertyDescriptor(t,a);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,n)}):(function(e,t,a,r){r===void 0&&(r=a),e[r]=t[a]})),di=ye&&ye.__setModuleDefault||(Object.create?(function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}):function(e,t){e.default=t}),Tr=ye&&ye.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var a in e)a!=="default"&&Object.prototype.hasOwnProperty.call(e,a)&&yi(t,e,a);return di(t,e),t};Object.defineProperty(ye,"__esModule",{value:!0});ye.showFailureToast=void 0;var Si=Tr(require("fs")),bi=Tr(require("path")),Xe=require("@raycast/api");function Ii(e,t){let a=e instanceof Error?e.message:String(e);return(0,Xe.showToast)({style:Xe.Toast.Style.Failure,title:t?.title??"Something went wrong",message:t?.message??a,primaryAction:t?.primaryAction??vr(e),secondaryAction:t?.primaryAction?vr(e):void 0})}ye.showFailureToast=Ii;var vr=e=>{let t=!0,a="[Extension Name]...",r="";try{let u=JSON.parse(Si.readFileSync(bi.join(Xe.environment.assetsPath,"..","package.json"),"utf8"));a=`[${u.title}]...`,r=`https://raycast.com/${u.owner||u.author}/${u.name}`,(!u.owner||u.access==="public")&&(t=!1)}catch{}let n=Xe.environment.isDevelopment||t,o=e instanceof Error?e?.stack||e?.message||"":String(e);return{title:n?"Copy Logs":"Report Error",onAction(u){u.hide(),n?Xe.Clipboard.copy(o):(0,Xe.open)(`https://github.com/raycast/extensions/issues/new?&labels=extension%2Cbug&template=extension_bug_report.yml&title=${encodeURIComponent(a)}&extension-url=${encodeURI(r)}&description=${encodeURIComponent(`#### Error:
\`\`\`
${o}
\`\`\`
`)}`)}}}});var et=C(Kt=>{"use strict";Object.defineProperty(Kt,"__esModule",{value:!0});Kt.usePromise=void 0;var W=require("react"),At=require("@raycast/api"),gi=_r(),xe=Re(),Mi=Rt();function mi(e,t,a){let r=(0,W.useRef)(0),[n,o]=(0,W.useState)({isLoading:!0}),u=(0,xe.useLatest)(e),i=(0,xe.useLatest)(a?.abortable),s=(0,xe.useLatest)(t||[]),p=(0,xe.useLatest)(a?.onError),l=(0,xe.useLatest)(a?.onData),y=(0,xe.useLatest)(a?.onWillExecute),d=(0,xe.useLatest)(a?.failureToastOptions),g=(0,xe.useLatest)(n.data),c=(0,W.useRef)(),b=(0,W.useRef)({page:0}),S=(0,W.useRef)(!1),I=(0,W.useRef)(!0),R=(0,W.useRef)(50),f=(0,W.useCallback)((...k)=>{let T=++r.current;i.current&&(i.current.current?.abort(),i.current.current=new AbortController),y.current?.(k),o(h=>({...h,isLoading:!0}));let se=Ri(u.current)(...k);function ce(h){return h.name=="AbortError"||T===r.current&&(p.current?p.current(h):At.environment.launchType!==At.LaunchType.Background&&(0,Mi.showFailureToast)(h,{title:"Failed to fetch latest data",primaryAction:{title:"Retry",onAction(Q){Q.hide(),c.current?.(...s.current||[])}},...d.current}),o({error:h,isLoading:!1})),h}return typeof se=="function"?(S.current=!0,se(b.current).then(({data:h,hasMore:Q,cursor:mt})=>(T===r.current&&(b.current&&(b.current.cursor=mt,b.current.lastItem=h?.[h.length-1]),l.current&&l.current(h,b.current),Q&&(R.current=h.length),I.current=Q,o(Na=>b.current.page===0?{data:h,isLoading:!1}:{data:(Na.data||[])?.concat(h),isLoading:!1})),h),h=>(I.current=!1,ce(h)))):(S.current=!1,se.then(h=>(T===r.current&&(l.current&&l.current(h),o({data:h,isLoading:!1})),h),ce))},[i,l,p,s,u,o,c,y,b,d]);c.current=f;let m=(0,W.useCallback)(()=>{b.current={page:0};let k=s.current||[];return f(...k)},[f,s]),P=(0,W.useCallback)(async(k,T)=>{let se;try{if(T?.optimisticUpdate){typeof T?.rollbackOnError!="function"&&T?.rollbackOnError!==!1&&(se=structuredClone(g.current?.value));let ce=T.optimisticUpdate;o(h=>({...h,data:ce(h.data)}))}return await k}catch(ce){if(typeof T?.rollbackOnError=="function"){let h=T.rollbackOnError;o(Q=>({...Q,data:h(Q.data)}))}else T?.optimisticUpdate&&T?.rollbackOnError!==!1&&o(h=>({...h,data:se}));throw ce}finally{T?.shouldRevalidateAfter!==!1&&(At.environment.launchType===At.LaunchType.Background||At.environment.commandMode==="menu-bar"?await m():m())}},[m,g,o]),A=(0,W.useCallback)(()=>{b.current.page+=1;let k=s.current||[];f(...k)},[b,s,f]);(0,W.useEffect)(()=>{b.current={page:0},a?.execute!==!1?f(...t||[]):i.current&&i.current.current?.abort()},[(0,gi.useDeepMemo)([t,a?.execute,f]),i,b]),(0,W.useEffect)(()=>()=>{i.current&&i.current.current?.abort()},[i]);let U=a?.execute!==!1?n.isLoading:!1,q={...n,isLoading:U},ie=S.current?{pageSize:R.current,hasMore:I.current,onLoadMore:A}:void 0;return{...q,revalidate:m,mutate:P,pagination:ie}}Kt.usePromise=mi;function Ri(e){return e===Promise.all||e===Promise.race||e===Promise.resolve||e===Promise.reject?e.bind(Promise):e}});var Ue=C(de=>{"use strict";var Ai=de&&de.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(de,"__esModule",{value:!0});de.hash=de.reviver=de.replacer=void 0;var fi=Ai(require("object-hash"));function Pi(e,t){let a=this[e];return a instanceof Date?`__raycast_cached_date__${a.toString()}`:Buffer.isBuffer(a)?`__raycast_cached_buffer__${a.toString("base64")}`:t}de.replacer=Pi;function Ei(e,t){return typeof t=="string"&&t.startsWith("__raycast_cached_date__")?new Date(t.replace("__raycast_cached_date__","")):typeof t=="string"&&t.startsWith("__raycast_cached_buffer__")?Buffer.from(t.replace("__raycast_cached_buffer__",""),"base64"):t}de.reviver=Ei;function Ci(e,t){return(0,fi.default)(e,{replacer:a=>a instanceof URLSearchParams?a.toString():a,...t})}de.hash=Ci});var Jt=C(Yt=>{"use strict";Object.defineProperty(Yt,"__esModule",{value:!0});Yt.useCachedState=void 0;var ja=require("react"),hi=require("@raycast/api"),Fa=Re(),wr=Ue(),Di=Symbol("cache without namespace"),Or=new Map;function xi(e,t,a){let r=a?.cacheNamespace||Di,n=Or.get(r)||Or.set(r,new hi.Cache({namespace:a?.cacheNamespace})).get(r);if(!n)throw new Error("Missing cache");let o=(0,Fa.useLatest)(e),u=(0,Fa.useLatest)(t),i=(0,ja.useSyncExternalStore)(n.subscribe,()=>{try{return n.get(o.current)}catch(y){console.error("Could not get Cache data:",y);return}}),s=(0,ja.useMemo)(()=>{if(typeof i<"u"){if(i==="undefined")return;try{return JSON.parse(i,wr.reviver)}catch(y){return console.warn("The cached data is corrupted",y),u.current}}else return u.current},[i,u]),p=(0,Fa.useLatest)(s),l=(0,ja.useCallback)(y=>{let d=typeof y=="function"?y(p.current):y;if(typeof d>"u")n.set(o.current,"undefined");else{let g=JSON.stringify(d,wr.replacer);n.set(o.current,g)}return d},[n,o,p]);return[s,l]}Yt.useCachedState=xi});var Pt=C(Zt=>{"use strict";Object.defineProperty(Zt,"__esModule",{value:!0});Zt.useCachedPromise=void 0;var ft=require("react"),Ui=Jt(),_i=et(),vi=Re(),Br=Ue(),tt=Symbol();function Ti(e,t,a){let{initialData:r,keepPreviousData:n,internal_cacheKeySuffix:o,...u}=a||{},i=(0,ft.useRef)(),[s,p]=(0,Ui.useCachedState)((0,Br.hash)(t||[])+o,tt,{cacheNamespace:(0,Br.hash)(e)}),l=(0,ft.useRef)(s!==tt?s:r),y=(0,ft.useRef)(void 0),{mutate:d,revalidate:g,...c}=(0,_i.usePromise)(e,t||[],{...u,onData(f,m){y.current=m,u.onData&&u.onData(f,m),!(m&&m.page>0)&&(i.current="promise",l.current=f,p(f))}}),b,S=c.pagination;y.current&&y.current.page>0&&c.data?b=c.data:i.current==="promise"?b=l.current:n&&s!==tt?(b=s,S&&(S.hasMore=!0,S.pageSize=s.length)):n&&s===tt?b=l.current:s!==tt?(b=s,S&&(S.hasMore=!0,S.pageSize=s.length)):b=r;let I=(0,vi.useLatest)(b),R=(0,ft.useCallback)(async(f,m)=>{let P;try{if(m?.optimisticUpdate){typeof m?.rollbackOnError!="function"&&m?.rollbackOnError!==!1&&(P=structuredClone(I.current));let A=m.optimisticUpdate(I.current);i.current="cache",l.current=A,p(A)}return await d(f,{shouldRevalidateAfter:m?.shouldRevalidateAfter})}catch(A){if(typeof m?.rollbackOnError=="function"){let U=m.rollbackOnError(I.current);i.current="cache",l.current=U,p(U)}else m?.optimisticUpdate&&m?.rollbackOnError!==!1&&(i.current="cache",l.current=P,p(P));throw A}},[p,d,I,l,i]);return(0,ft.useEffect)(()=>{s!==tt&&(i.current="cache",l.current=s)},[s]),{data:b,isLoading:c.isLoading,error:c.error,mutate:y.current&&y.current.page>0?d:R,pagination:S,revalidate:g}}Zt.useCachedPromise=Ti});var Qr=C((pe,$r)=>{"use strict";Object.defineProperty(pe,"__esModule",{value:!0});function ot(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var ue=ot(require("stream")),Vr=ot(require("http")),ea=ot(require("url")),kr=ot(require("whatwg-url")),wi=ot(require("https")),ke=ot(require("zlib")),Oi=ue.Readable,Ae=Symbol("buffer"),za=Symbol("type"),Ct=class e{constructor(){this[za]="";let t=arguments[0],a=arguments[1],r=[],n=0;if(t){let u=t,i=Number(u.length);for(let s=0;s<i;s++){let p=u[s],l;p instanceof Buffer?l=p:ArrayBuffer.isView(p)?l=Buffer.from(p.buffer,p.byteOffset,p.byteLength):p instanceof ArrayBuffer?l=Buffer.from(p):p instanceof e?l=p[Ae]:l=Buffer.from(typeof p=="string"?p:String(p)),n+=l.length,r.push(l)}}this[Ae]=Buffer.concat(r);let o=a&&a.type!==void 0&&String(a.type).toLowerCase();o&&!/[^\u0020-\u007E]/.test(o)&&(this[za]=o)}get size(){return this[Ae].length}get type(){return this[za]}text(){return Promise.resolve(this[Ae].toString())}arrayBuffer(){let t=this[Ae],a=t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength);return Promise.resolve(a)}stream(){let t=new Oi;return t._read=function(){},t.push(this[Ae]),t.push(null),t}toString(){return"[object Blob]"}slice(){let t=this.size,a=arguments[0],r=arguments[1],n,o;a===void 0?n=0:a<0?n=Math.max(t+a,0):n=Math.min(a,t),r===void 0?o=t:r<0?o=Math.max(t+r,0):o=Math.min(r,t);let u=Math.max(o-n,0),s=this[Ae].slice(n,n+u),p=new e([],{type:arguments[2]});return p[Ae]=s,p}};Object.defineProperties(Ct.prototype,{size:{enumerable:!0},type:{enumerable:!0},slice:{enumerable:!0}});Object.defineProperty(Ct.prototype,Symbol.toStringTag,{value:"Blob",writable:!1,enumerable:!1,configurable:!0});function L(e,t,a){Error.call(this,e),this.message=e,this.type=t,a&&(this.code=this.errno=a.code),Error.captureStackTrace(this,this.constructor)}L.prototype=Object.create(Error.prototype);L.prototype.constructor=L;L.prototype.name="FetchError";var Qa;try{Qa=require("encoding").convert}catch{}var Pe=Symbol("Body internals"),Lr=ue.PassThrough;function w(e){var t=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.size;let n=r===void 0?0:r;var o=a.timeout;let u=o===void 0?0:o;e==null?e=null:jr(e)?e=Buffer.from(e.toString()):Dt(e)||Buffer.isBuffer(e)||(Object.prototype.toString.call(e)==="[object ArrayBuffer]"?e=Buffer.from(e):ArrayBuffer.isView(e)?e=Buffer.from(e.buffer,e.byteOffset,e.byteLength):e instanceof ue||(e=Buffer.from(String(e)))),this[Pe]={body:e,disturbed:!1,error:null},this.size=n,this.timeout=u,e instanceof ue&&e.on("error",function(i){let s=i.name==="AbortError"?i:new L(`Invalid response body while trying to fetch ${t.url}: ${i.message}`,"system",i);t[Pe].error=s})}w.prototype={get body(){return this[Pe].body},get bodyUsed(){return this[Pe].disturbed},arrayBuffer(){return at.call(this).then(function(e){return e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength)})},blob(){let e=this.headers&&this.headers.get("content-type")||"";return at.call(this).then(function(t){return Object.assign(new Ct([],{type:e.toLowerCase()}),{[Ae]:t})})},json(){var e=this;return at.call(this).then(function(t){try{return JSON.parse(t.toString())}catch(a){return w.Promise.reject(new L(`invalid json response body at ${e.url} reason: ${a.message}`,"invalid-json"))}})},text(){return at.call(this).then(function(e){return e.toString()})},buffer(){return at.call(this)},textConverted(){var e=this;return at.call(this).then(function(t){return Bi(t,e.headers)})}};Object.defineProperties(w.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0}});w.mixIn=function(e){for(let t of Object.getOwnPropertyNames(w.prototype))if(!(t in e)){let a=Object.getOwnPropertyDescriptor(w.prototype,t);Object.defineProperty(e,t,a)}};function at(){var e=this;if(this[Pe].disturbed)return w.Promise.reject(new TypeError(`body used already for: ${this.url}`));if(this[Pe].disturbed=!0,this[Pe].error)return w.Promise.reject(this[Pe].error);let t=this.body;if(t===null)return w.Promise.resolve(Buffer.alloc(0));if(Dt(t)&&(t=t.stream()),Buffer.isBuffer(t))return w.Promise.resolve(t);if(!(t instanceof ue))return w.Promise.resolve(Buffer.alloc(0));let a=[],r=0,n=!1;return new w.Promise(function(o,u){let i;e.timeout&&(i=setTimeout(function(){n=!0,u(new L(`Response timeout while trying to fetch ${e.url} (over ${e.timeout}ms)`,"body-timeout"))},e.timeout)),t.on("error",function(s){s.name==="AbortError"?(n=!0,u(s)):u(new L(`Invalid response body while trying to fetch ${e.url}: ${s.message}`,"system",s))}),t.on("data",function(s){if(!(n||s===null)){if(e.size&&r+s.length>e.size){n=!0,u(new L(`content size at ${e.url} over limit: ${e.size}`,"max-size"));return}r+=s.length,a.push(s)}}),t.on("end",function(){if(!n){clearTimeout(i);try{o(Buffer.concat(a,r))}catch(s){u(new L(`Could not create Buffer from response body for ${e.url}: ${s.message}`,"system",s))}}})})}function Bi(e,t){if(typeof Qa!="function")throw new Error("The package `encoding` must be installed to use the textConverted() function");let a=t.get("content-type"),r="utf-8",n,o;return a&&(n=/charset=([^;]*)/i.exec(a)),o=e.slice(0,1024).toString(),!n&&o&&(n=/<meta.+?charset=(['"])(.+?)\1/i.exec(o)),!n&&o&&(n=/<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(o),n||(n=/<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(o),n&&n.pop()),n&&(n=/charset=(.*)/i.exec(n.pop()))),!n&&o&&(n=/<\?xml.+?encoding=(['"])(.+?)\1/i.exec(o)),n&&(r=n.pop(),(r==="gb2312"||r==="gbk")&&(r="gb18030")),Qa(e,"UTF-8",r).toString()}function jr(e){return typeof e!="object"||typeof e.append!="function"||typeof e.delete!="function"||typeof e.get!="function"||typeof e.getAll!="function"||typeof e.has!="function"||typeof e.set!="function"?!1:e.constructor.name==="URLSearchParams"||Object.prototype.toString.call(e)==="[object URLSearchParams]"||typeof e.sort=="function"}function Dt(e){return typeof e=="object"&&typeof e.arrayBuffer=="function"&&typeof e.type=="string"&&typeof e.stream=="function"&&typeof e.constructor=="function"&&typeof e.constructor.name=="string"&&/^(Blob|File)$/.test(e.constructor.name)&&/^(Blob|File)$/.test(e[Symbol.toStringTag])}function Fr(e){let t,a,r=e.body;if(e.bodyUsed)throw new Error("cannot clone body after it is used");return r instanceof ue&&typeof r.getBoundary!="function"&&(t=new Lr,a=new Lr,r.pipe(t),r.pipe(a),e[Pe].body=t,r=a),r}function zr(e){return e===null?null:typeof e=="string"?"text/plain;charset=UTF-8":jr(e)?"application/x-www-form-urlencoded;charset=UTF-8":Dt(e)?e.type||null:Buffer.isBuffer(e)||Object.prototype.toString.call(e)==="[object ArrayBuffer]"||ArrayBuffer.isView(e)?null:typeof e.getBoundary=="function"?`multipart/form-data;boundary=${e.getBoundary()}`:e instanceof ue?null:"text/plain;charset=UTF-8"}function Hr(e){let t=e.body;return t===null?0:Dt(t)?t.size:Buffer.isBuffer(t)?t.length:t&&typeof t.getLengthSync=="function"&&(t._lengthRetrievers&&t._lengthRetrievers.length==0||t.hasKnownLength&&t.hasKnownLength())?t.getLengthSync():null}function Li(e,t){let a=t.body;a===null?e.end():Dt(a)?a.stream().pipe(e):Buffer.isBuffer(a)?(e.write(a),e.end()):a.pipe(e)}w.Promise=global.Promise;var Gr=/[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/,Wa=/[^\t\x20-\x7e\x80-\xff]/;function Et(e){if(e=`${e}`,Gr.test(e)||e==="")throw new TypeError(`${e} is not a legal HTTP header name`)}function qr(e){if(e=`${e}`,Wa.test(e))throw new TypeError(`${e} is not a legal HTTP header value`)}function rt(e,t){t=t.toLowerCase();for(let a in e)if(a.toLowerCase()===t)return a}var v=Symbol("map"),te=class e{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:void 0;if(this[v]=Object.create(null),t instanceof e){let a=t.raw(),r=Object.keys(a);for(let n of r)for(let o of a[n])this.append(n,o);return}if(t!=null)if(typeof t=="object"){let a=t[Symbol.iterator];if(a!=null){if(typeof a!="function")throw new TypeError("Header pairs must be iterable");let r=[];for(let n of t){if(typeof n!="object"||typeof n[Symbol.iterator]!="function")throw new TypeError("Each header pair must be iterable");r.push(Array.from(n))}for(let n of r){if(n.length!==2)throw new TypeError("Each header pair must be a name/value tuple");this.append(n[0],n[1])}}else for(let r of Object.keys(t)){let n=t[r];this.append(r,n)}}else throw new TypeError("Provided initializer must be an object")}get(t){t=`${t}`,Et(t);let a=rt(this[v],t);return a===void 0?null:this[v][a].join(", ")}forEach(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:void 0,r=Ka(this),n=0;for(;n<r.length;){var o=r[n];let u=o[0],i=o[1];t.call(a,i,u,this),r=Ka(this),n++}}set(t,a){t=`${t}`,a=`${a}`,Et(t),qr(a);let r=rt(this[v],t);this[v][r!==void 0?r:t]=[a]}append(t,a){t=`${t}`,a=`${a}`,Et(t),qr(a);let r=rt(this[v],t);r!==void 0?this[v][r].push(a):this[v][t]=[a]}has(t){return t=`${t}`,Et(t),rt(this[v],t)!==void 0}delete(t){t=`${t}`,Et(t);let a=rt(this[v],t);a!==void 0&&delete this[v][a]}raw(){return this[v]}keys(){return Ha(this,"key")}values(){return Ha(this,"value")}[Symbol.iterator](){return Ha(this,"key+value")}};te.prototype.entries=te.prototype[Symbol.iterator];Object.defineProperty(te.prototype,Symbol.toStringTag,{value:"Headers",writable:!1,enumerable:!1,configurable:!0});Object.defineProperties(te.prototype,{get:{enumerable:!0},forEach:{enumerable:!0},set:{enumerable:!0},append:{enumerable:!0},has:{enumerable:!0},delete:{enumerable:!0},keys:{enumerable:!0},values:{enumerable:!0},entries:{enumerable:!0}});function Ka(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"key+value";return Object.keys(e[v]).sort().map(t==="key"?function(r){return r.toLowerCase()}:t==="value"?function(r){return e[v][r].join(", ")}:function(r){return[r.toLowerCase(),e[v][r].join(", ")]})}var Ya=Symbol("internal");function Ha(e,t){let a=Object.create(Ja);return a[Ya]={target:e,kind:t,index:0},a}var Ja=Object.setPrototypeOf({next(){if(!this||Object.getPrototypeOf(this)!==Ja)throw new TypeError("Value of `this` is not a HeadersIterator");var e=this[Ya];let t=e.target,a=e.kind,r=e.index,n=Ka(t,a),o=n.length;return r>=o?{value:void 0,done:!0}:(this[Ya].index=r+1,{value:n[r],done:!1})}},Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));Object.defineProperty(Ja,Symbol.toStringTag,{value:"HeadersIterator",writable:!1,enumerable:!1,configurable:!0});function qi(e){let t=Object.assign({__proto__:null},e[v]),a=rt(e[v],"Host");return a!==void 0&&(t[a]=t[a][0]),t}function Ni(e){let t=new te;for(let a of Object.keys(e))if(!Gr.test(a))if(Array.isArray(e[a]))for(let r of e[a])Wa.test(r)||(t[v][a]===void 0?t[v][a]=[r]:t[v][a].push(r));else Wa.test(e[a])||(t[v][a]=[e[a]]);return t}var _e=Symbol("Response internals"),Vi=Vr.STATUS_CODES,ee=class e{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};w.call(this,t,a);let r=a.status||200,n=new te(a.headers);if(t!=null&&!n.has("Content-Type")){let o=zr(t);o&&n.append("Content-Type",o)}this[_e]={url:a.url,status:r,statusText:a.statusText||Vi[r],headers:n,counter:a.counter}}get url(){return this[_e].url||""}get status(){return this[_e].status}get ok(){return this[_e].status>=200&&this[_e].status<300}get redirected(){return this[_e].counter>0}get statusText(){return this[_e].statusText}get headers(){return this[_e].headers}clone(){return new e(Fr(this),{url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected})}};w.mixIn(ee.prototype);Object.defineProperties(ee.prototype,{url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}});Object.defineProperty(ee.prototype,Symbol.toStringTag,{value:"Response",writable:!1,enumerable:!1,configurable:!0});var fe=Symbol("Request internals"),ki=ea.URL||kr.URL,ji=ea.parse,Fi=ea.format;function Ga(e){return/^[a-zA-Z][a-zA-Z\d+\-.]*:/.exec(e)&&(e=new ki(e).toString()),ji(e)}var zi="destroy"in ue.Readable.prototype;function Xt(e){return typeof e=="object"&&typeof e[fe]=="object"}function Hi(e){let t=e&&typeof e=="object"&&Object.getPrototypeOf(e);return!!(t&&t.constructor.name==="AbortSignal")}var Te=class e{constructor(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r;Xt(t)?r=Ga(t.url):(t&&t.href?r=Ga(t.href):r=Ga(`${t}`),t={});let n=a.method||t.method||"GET";if(n=n.toUpperCase(),(a.body!=null||Xt(t)&&t.body!==null)&&(n==="GET"||n==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");let o=a.body!=null?a.body:Xt(t)&&t.body!==null?Fr(t):null;w.call(this,o,{timeout:a.timeout||t.timeout||0,size:a.size||t.size||0});let u=new te(a.headers||t.headers||{});if(o!=null&&!u.has("Content-Type")){let s=zr(o);s&&u.append("Content-Type",s)}let i=Xt(t)?t.signal:null;if("signal"in a&&(i=a.signal),i!=null&&!Hi(i))throw new TypeError("Expected signal to be an instanceof AbortSignal");this[fe]={method:n,redirect:a.redirect||t.redirect||"follow",headers:u,parsedURL:r,signal:i},this.follow=a.follow!==void 0?a.follow:t.follow!==void 0?t.follow:20,this.compress=a.compress!==void 0?a.compress:t.compress!==void 0?t.compress:!0,this.counter=a.counter||t.counter||0,this.agent=a.agent||t.agent}get method(){return this[fe].method}get url(){return Fi(this[fe].parsedURL)}get headers(){return this[fe].headers}get redirect(){return this[fe].redirect}get signal(){return this[fe].signal}clone(){return new e(this)}};w.mixIn(Te.prototype);Object.defineProperty(Te.prototype,Symbol.toStringTag,{value:"Request",writable:!1,enumerable:!1,configurable:!0});Object.defineProperties(Te.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0}});function Gi(e){let t=e[fe].parsedURL,a=new te(e[fe].headers);if(a.has("Accept")||a.set("Accept","*/*"),!t.protocol||!t.hostname)throw new TypeError("Only absolute URLs are supported");if(!/^https?:$/.test(t.protocol))throw new TypeError("Only HTTP(S) protocols are supported");if(e.signal&&e.body instanceof ue.Readable&&!zi)throw new Error("Cancellation of streamed requests with AbortSignal is not supported in node < 8");let r=null;if(e.body==null&&/^(POST|PUT)$/i.test(e.method)&&(r="0"),e.body!=null){let o=Hr(e);typeof o=="number"&&(r=String(o))}r&&a.set("Content-Length",r),a.has("User-Agent")||a.set("User-Agent","node-fetch/1.0 (+https://github.com/bitinn/node-fetch)"),e.compress&&!a.has("Accept-Encoding")&&a.set("Accept-Encoding","gzip,deflate");let n=e.agent;return typeof n=="function"&&(n=n(t)),Object.assign({},t,{method:e.method,headers:qi(a),agent:n})}function nt(e){Error.call(this,e),this.type="aborted",this.message=e,Error.captureStackTrace(this,this.constructor)}nt.prototype=Object.create(Error.prototype);nt.prototype.constructor=nt;nt.prototype.name="AbortError";var ht=ea.URL||kr.URL,Nr=ue.PassThrough,$i=function(t,a){let r=new ht(a).hostname,n=new ht(t).hostname;return r===n||r[r.length-n.length-1]==="."&&r.endsWith(n)},Qi=function(t,a){let r=new ht(a).protocol,n=new ht(t).protocol;return r===n};function ve(e,t){if(!ve.Promise)throw new Error("native promise missing, set fetch.Promise to your favorite alternative");return w.Promise=ve.Promise,new ve.Promise(function(a,r){let n=new Te(e,t),o=Gi(n),u=(o.protocol==="https:"?wi:Vr).request,i=n.signal,s=null,p=function(){let b=new nt("The user aborted a request.");r(b),n.body&&n.body instanceof ue.Readable&&$a(n.body,b),!(!s||!s.body)&&s.body.emit("error",b)};if(i&&i.aborted){p();return}let l=function(){p(),g()},y=u(o),d;i&&i.addEventListener("abort",l);function g(){y.abort(),i&&i.removeEventListener("abort",l),clearTimeout(d)}n.timeout&&y.once("socket",function(c){d=setTimeout(function(){r(new L(`network timeout at: ${n.url}`,"request-timeout")),g()},n.timeout)}),y.on("error",function(c){r(new L(`request to ${n.url} failed, reason: ${c.message}`,"system",c)),s&&s.body&&$a(s.body,c),g()}),Wi(y,function(c){i&&i.aborted||s&&s.body&&$a(s.body,c)}),parseInt(process.version.substring(1))<14&&y.on("socket",function(c){c.addListener("close",function(b){let S=c.listenerCount("data")>0;if(s&&S&&!b&&!(i&&i.aborted)){let I=new Error("Premature close");I.code="ERR_STREAM_PREMATURE_CLOSE",s.body.emit("error",I)}})}),y.on("response",function(c){clearTimeout(d);let b=Ni(c.headers);if(ve.isRedirect(c.statusCode)){let m=b.get("Location"),P=null;try{P=m===null?null:new ht(m,n.url).toString()}catch{if(n.redirect!=="manual"){r(new L(`uri requested responds with an invalid redirect URL: ${m}`,"invalid-redirect")),g();return}}switch(n.redirect){case"error":r(new L(`uri requested responds with a redirect, redirect mode is set to error: ${n.url}`,"no-redirect")),g();return;case"manual":if(P!==null)try{b.set("Location",P)}catch(U){r(U)}break;case"follow":if(P===null)break;if(n.counter>=n.follow){r(new L(`maximum redirect reached at: ${n.url}`,"max-redirect")),g();return}let A={headers:new te(n.headers),follow:n.follow,counter:n.counter+1,agent:n.agent,compress:n.compress,method:n.method,body:n.body,signal:n.signal,timeout:n.timeout,size:n.size};if(!$i(n.url,P)||!Qi(n.url,P))for(let U of["authorization","www-authenticate","cookie","cookie2"])A.headers.delete(U);if(c.statusCode!==303&&n.body&&Hr(n)===null){r(new L("Cannot follow redirect with body being a readable stream","unsupported-redirect")),g();return}(c.statusCode===303||(c.statusCode===301||c.statusCode===302)&&n.method==="POST")&&(A.method="GET",A.body=void 0,A.headers.delete("content-length")),a(ve(new Te(P,A))),g();return}}c.once("end",function(){i&&i.removeEventListener("abort",l)});let S=c.pipe(new Nr),I={url:n.url,status:c.statusCode,statusText:c.statusMessage,headers:b,size:n.size,timeout:n.timeout,counter:n.counter},R=b.get("Content-Encoding");if(!n.compress||n.method==="HEAD"||R===null||c.statusCode===204||c.statusCode===304){s=new ee(S,I),a(s);return}let f={flush:ke.Z_SYNC_FLUSH,finishFlush:ke.Z_SYNC_FLUSH};if(R=="gzip"||R=="x-gzip"){S=S.pipe(ke.createGunzip(f)),s=new ee(S,I),a(s);return}if(R=="deflate"||R=="x-deflate"){let m=c.pipe(new Nr);m.once("data",function(P){(P[0]&15)===8?S=S.pipe(ke.createInflate()):S=S.pipe(ke.createInflateRaw()),s=new ee(S,I),a(s)}),m.on("end",function(){s||(s=new ee(S,I),a(s))});return}if(R=="br"&&typeof ke.createBrotliDecompress=="function"){S=S.pipe(ke.createBrotliDecompress()),s=new ee(S,I),a(s);return}s=new ee(S,I),a(s)}),Li(y,n)})}function Wi(e,t){let a;e.on("socket",function(r){a=r}),e.on("response",function(r){let n=r.headers;n["transfer-encoding"]==="chunked"&&!n["content-length"]&&r.once("close",function(o){if(a&&a.listenerCount("data")>0&&!o){let i=new Error("Premature close");i.code="ERR_STREAM_PREMATURE_CLOSE",t(i)}})})}function $a(e,t){e.destroy?e.destroy(t):(e.emit("error",t),e.end())}ve.isRedirect=function(e){return e===301||e===302||e===303||e===307||e===308};ve.Promise=global.Promise;$r.exports=pe=ve;Object.defineProperty(pe,"__esModule",{value:!0});pe.default=pe;pe.Headers=te;pe.Request=Te;pe.Response=ee;pe.FetchError=L;pe.AbortError=nt});var Ut=C((je,Wr)=>{var xt=Qr(),Ki=xt.default||xt,ta=function(e,t){return/^\/\//.test(e)&&(e="https:"+e),Ki.call(this,e,t)};ta.ponyfill=!0;Wr.exports=je=ta;je.fetch=ta;je.Headers=xt.Headers;je.Request=xt.Request;je.Response=xt.Response;je.default=ta});var Za=C(aa=>{"use strict";Object.defineProperty(aa,"__esModule",{value:!0});aa.isJSON=void 0;function Yi(e){if(e){let t=Zi(e);if(!t)return!1;if(t.subtype==="json"||t.suffix==="json"||t.suffix&&/\bjson\b/i.test(t.suffix)||t.subtype&&/\bjson\b/i.test(t.subtype))return!0}return!1}aa.isJSON=Yi;var Ji=/^([A-Za-z0-9][A-Za-z0-9!#$&^_-]{0,126})\/([A-Za-z0-9][A-Za-z0-9!#$&^_.+-]{0,126});?$/;function Zi(e){let t=e.indexOf(";"),a=t!==-1?e.slice(0,t).trim():e.trim(),r=Ji.exec(a.toLowerCase().toLowerCase());if(!r)return;let n=r[1],o=r[2],u,i=o.lastIndexOf("+");return i!==-1&&(u=o.substring(i+1),o=o.substring(0,i)),{type:n,subtype:o,suffix:u}}});var Zr=C(ra=>{"use strict";Object.defineProperty(ra,"__esModule",{value:!0});ra.useFetch=void 0;var it=require("react"),Xi=Pt(),Kr=Re(),Yr=Ut(),es=Za(),Jr=Ue();async function ts(e){if(!e.ok)throw new Error(e.statusText);let t=e.headers.get("content-type");return t&&(0,es.isJSON)(t)?await e.json():await e.text()}function as(e){return{data:e,hasMore:!1}}function rs(e,t){let{parseResponse:a,mapResult:r,initialData:n,execute:o,keepPreviousData:u,onError:i,onData:s,onWillExecute:p,failureToastOptions:l,...y}=t||{},d={initialData:n,execute:o,keepPreviousData:u,onError:i,onData:s,onWillExecute:p,failureToastOptions:l},g=(0,Kr.useLatest)(a||ts),c=(0,Kr.useLatest)(r||as),b=(0,it.useRef)(),S=(0,it.useRef)(),I=typeof e=="function"?e({page:0}):void 0;(!b.current||typeof S.current>"u"||S.current!==I)&&(b.current=e),S.current=I;let R=(0,it.useRef)(),f=(0,it.useCallback)((A,U)=>async q=>{let ie=await(0,Yr.fetch)(A(q),{signal:R.current?.signal,...U}),k=await g.current(ie);return c.current?.(k)},[g,c]),m=(0,it.useCallback)(async(A,U)=>{let q=await(0,Yr.fetch)(A,{signal:R.current?.signal,...U}),ie=await g.current(q);return c.current(ie)?.data},[g,c]),P=(0,it.useMemo)(()=>S.current?f:m,[S,m,f]);return(0,Xi.useCachedPromise)(P,[b.current,y],{...d,internal_cacheKeySuffix:S.current+(0,Jr.hash)(c.current)+(0,Jr.hash)(g.current),abortable:R})}ra.useFetch=rs});var na=C(ae=>{"use strict";var ns=ae&&ae.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ae,"__esModule",{value:!0});ae.defaultParsing=ae.handleOutput=ae.getSpawnedResult=ae.getSpawnedPromise=void 0;var os=require("node:buffer"),tn=ns(require("node:stream")),is=require("node:util"),ss=require("signal-exit");function us(e,{timeout:t}={}){let a=new Promise((i,s)=>{e.on("exit",(p,l)=>{i({exitCode:p,signal:l,timedOut:!1})}),e.on("error",p=>{s(p)}),e.stdin&&e.stdin.on("error",p=>{s(p)})});if(t===0||t===void 0)return a;let r,n=new Promise((i,s)=>{r=setTimeout(()=>{e.kill("SIGTERM"),s(Object.assign(new Error("Timed out"),{timedOut:!0,signal:"SIGTERM"}))},t)}),o=a.finally(()=>{clearTimeout(r)}),u=(0,ss.onExit)(()=>{e.kill()});return Promise.race([n,o]).finally(()=>u())}ae.getSpawnedPromise=us;var Xa=class extends Error{constructor(){super("The output is too big"),this.name="MaxBufferError"}},ps=(0,is.promisify)(tn.default.pipeline);function ls(e){let{encoding:t}=e,a=t==="buffer",r=new tn.default.PassThrough({objectMode:!1});t&&t!=="buffer"&&r.setEncoding(t);let n=0,o=[];return r.on("data",u=>{o.push(u),n+=u.length}),r.getBufferedValue=()=>a?Buffer.concat(o,n):o.join(""),r.getBufferedLength=()=>n,r}async function Xr(e,t){let a=ls(t);return await new Promise((r,n)=>{let o=u=>{u&&a.getBufferedLength()<=os.constants.MAX_LENGTH&&(u.bufferedData=a.getBufferedValue()),n(u)};(async()=>{try{await ps(e,a),r()}catch(u){o(u)}})(),a.on("data",()=>{a.getBufferedLength()>1e3*1e3*80&&o(new Xa)})}),a.getBufferedValue()}async function en(e,t){e.destroy();try{return await t}catch(a){return a.bufferedData}}async function cs({stdout:e,stderr:t},{encoding:a},r){let n=Xr(e,{encoding:a}),o=Xr(t,{encoding:a});try{return await Promise.all([r,n,o])}catch(u){return Promise.all([{error:u,exitCode:null,signal:u.signal,timedOut:u.timedOut||!1},en(e,n),en(t,o)])}}ae.getSpawnedResult=cs;function ys(e){let t=typeof e=="string"?`
`:10,a=typeof e=="string"?"\r":13;return e[e.length-1]===t&&(e=e.slice(0,-1)),e[e.length-1]===a&&(e=e.slice(0,-1)),e}function ds(e,t){return e.stripFinalNewline?ys(t):t}ae.handleOutput=ds;var Ss=({timedOut:e,timeout:t,signal:a,exitCode:r})=>e?`timed out after ${t} milliseconds`:a!=null?`was killed with ${a}`:r!=null?`failed with exit code ${r}`:"failed",bs=({stdout:e,stderr:t,error:a,signal:r,exitCode:n,command:o,timedOut:u,options:i,parentError:s})=>{let l=`Command ${Ss({timedOut:u,timeout:i?.timeout,signal:r,exitCode:n})}: ${o}`,y=a?`${l}
${a.message}`:l,d=[y,t,e].filter(Boolean).join(`
`);return a?a.originalMessage=a.message:a=s,a.message=d,a.shortMessage=y,a.command=o,a.exitCode=n,a.signal=r,a.stdout=e,a.stderr=t,"bufferedData"in a&&delete a.bufferedData,a};function Is({stdout:e,stderr:t,error:a,exitCode:r,signal:n,timedOut:o,command:u,options:i,parentError:s}){if(a||r!==0||n!==null)throw bs({error:a,exitCode:r,signal:n,stdout:e,stderr:t,command:u,timedOut:o,options:i,parentError:s});return e}ae.defaultParsing=Is});var rn=C(st=>{"use strict";var gs=st&&st.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(st,"__esModule",{value:!0});st.useExec=void 0;var Ms=gs(require("node:child_process")),an=require("react"),ms=Pt(),Rs=Re(),_t=na(),As=/ +/g;function fs(e,t){if(t)return[e,...t];let a=[];for(let r of e.trim().split(As)){let n=a[a.length-1];n&&n.endsWith("\\")?a[a.length-1]=`${n.slice(0,-1)} ${r}`:a.push(r)}return a}function Ps(e,t,a){let{parseOutput:r,input:n,onData:o,onWillExecute:u,initialData:i,execute:s,keepPreviousData:p,onError:l,failureToastOptions:y,...d}=Array.isArray(t)?a||{}:t||{},g={initialData:i,execute:s,keepPreviousData:p,onError:l,onData:o,onWillExecute:u,failureToastOptions:y},c=(0,an.useRef)(),b=(0,Rs.useLatest)(r||_t.defaultParsing),S=(0,an.useCallback)(async(I,R,f,m)=>{let[P,...A]=fs(I,R),U=[P,...A].join(" "),q={stripFinalNewline:!0,...f,timeout:f?.timeout||1e4,signal:c.current?.signal,encoding:f?.encoding===null?"buffer":f?.encoding||"utf8",env:{PATH:"/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin",...process.env,...f?.env}},ie=Ms.default.spawn(P,A,q),k=(0,_t.getSpawnedPromise)(ie,q);m&&ie.stdin.end(m);let[{error:T,exitCode:se,signal:ce,timedOut:h},Q,mt]=await(0,_t.getSpawnedResult)(ie,q,k),Na=(0,_t.handleOutput)(q,Q),ti=(0,_t.handleOutput)(q,mt);return b.current({stdout:Na,stderr:ti,error:T,exitCode:se,signal:ce,timedOut:h,command:U,options:q,parentError:new Error})},[b]);return(0,ms.useCachedPromise)(S,[e,Array.isArray(t)?t:[],d,n],{...g,abortable:c})}st.useExec=Ps});var un=C(ut=>{"use strict";var ia=ut&&ut.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ut,"__esModule",{value:!0});ut.useStreamJSON=void 0;var Es=require("@raycast/api"),nn=ia(Ut()),wt=require("node:fs"),er=require("node:fs/promises"),oa=require("node:path"),on=require("node:stream/promises"),vt=require("react"),Cs=ia(require("stream-chain")),hs=require("stream-json"),Ds=ia(require("stream-json/filters/Pick")),xs=ia(require("stream-json/streamers/StreamArray")),sn=Za(),Us=Pt(),_s=Ue();async function Tt(e,t,a){if(typeof e=="object"||e.startsWith("http://")||e.startsWith("https://"))return await vs(e,t,a);if(e.startsWith("file://"))return await Ts((0,oa.normalize)(decodeURIComponent(new URL(e).pathname)),t,a?.signal?a.signal:void 0);throw new Error("Only HTTP(S) or file URLs are supported")}async function vs(e,t,a){let r=await(0,nn.default)(e,a);if(!r.ok)throw new Error("Failed to fetch URL");if(!(0,sn.isJSON)(r.headers.get("content-type")))throw new Error("URL does not return JSON");if(!r.body)throw new Error("Failed to retrieve expected JSON content: Response body is missing or inaccessible.");await(0,on.pipeline)(r.body,(0,wt.createWriteStream)(t),a?.signal?{signal:a.signal}:void 0)}async function Ts(e,t,a){await(0,on.pipeline)((0,wt.createReadStream)(e),(0,wt.createWriteStream)(t),a?{signal:a}:void 0)}async function ws(e,t,a,r,n){let o=(0,oa.join)(t,a);try{await(0,er.stat)(t)}catch{(0,wt.mkdirSync)(t,{recursive:!0}),await Tt(e,o,n);return}if(r){await Tt(e,o,n);return}let u;try{u=await(0,er.stat)(o)}catch{await Tt(e,o,n);return}if(typeof e=="object"||e.startsWith("http://")||e.startsWith("https://")){let i=await(0,nn.default)(e,{...n,method:"HEAD"});if(!i.ok)throw new Error("Could not fetch URL");if(!(0,sn.isJSON)(i.headers.get("content-type")))throw new Error("URL does not return JSON");let s=Date.parse(i.headers.get("last-modified")??"");if(u.size===0||Number.isNaN(s)||s>u.mtimeMs){await Tt(e,o,n);return}}else if(e.startsWith("file://"))try{(await(0,er.stat)((0,oa.normalize)(decodeURIComponent(new URL(e).pathname)))).mtimeMs>u.mtimeMs&&await Tt(e,o,n)}catch{throw new Error("Source file could not be read")}else throw new Error("Only HTTP(S) or file URLs are supported")}async function*Os(e,t,a,r,n,o){let u=[],i=new Cs.default([(0,wt.createReadStream)(e),r?Ds.default.withParser({filter:r}):(0,hs.parser)(),new xs.default,s=>o?.(s.value)??s.value]);a?.addEventListener("abort",()=>{i.destroy()});try{for await(let s of i){if(a?.aborted)return[];(!n||n(s))&&u.push(s),u.length>=t&&(yield u,u=[])}}catch(s){throw i.destroy(),s}return u.length>0&&(yield u),[]}function Bs(e,t){let{initialData:a,execute:r,keepPreviousData:n,onError:o,onData:u,onWillExecute:i,failureToastOptions:s,dataPath:p,filter:l,transform:y,pageSize:d=20,...g}=t??{},c=(0,vt.useRef)(),b=(0,vt.useRef)(),S={initialData:a,execute:r,keepPreviousData:n,onError:o,onData:u,onWillExecute:i,failureToastOptions:s},I=(0,vt.useRef)(null),R=(0,vt.useRef)(null),f=(0,vt.useRef)(!1);return(0,Us.useCachedPromise)((m,P,A,U,q,ie)=>async({page:k})=>{let T=(0,_s.hash)(m)+".json",se=Es.environment.supportPath;if(k===0){R.current?.abort(),R.current=new AbortController;let Q=(0,oa.join)(se,T),mt=!!(c.current&&c.current!==m&&b.current&&b.current===Q);c.current=m,b.current=Q,await ws(m,se,T,mt,{...A,signal:R.current?.signal}),I.current=Os(Q,P,R.current?.signal,U,q,ie)}if(!I.current)return{hasMore:f.current,data:[]};let{value:ce,done:h}=await I.current.next();return f.current=!h,{hasMore:f.current,data:ce??[]}},[e,d,g,p,l,y],S)}ut.useStreamJSON=Bs});var ar=C(Se=>{"use strict";var tr=Se&&Se.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Se,"__esModule",{value:!0});Se.baseExecuteSQL=Se.isPermissionError=Se.PermissionError=void 0;var Ls=require("node:fs"),sa=require("node:fs/promises"),qs=tr(require("node:os")),pn=tr(require("node:child_process")),ln=tr(require("node:path")),ua=na(),Ns=Ue(),la=class extends Error{constructor(t){super(t),this.name="PermissionError"}};Se.PermissionError=la;function Vs(e){return e instanceof Error&&e.name==="PermissionError"}Se.isPermissionError=Vs;async function ks(e,t,a){if(!(0,Ls.existsSync)(e))throw new Error("The database does not exist");let r=a?.signal,n,o=pn.default.spawn("sqlite3",["--json","--readonly",e,t],{signal:r}),u=(0,ua.getSpawnedPromise)(o),[{error:i,exitCode:s,signal:p},l,y]=await(0,ua.getSpawnedResult)(o,{encoding:"utf-8"},u);if(pa(r),y.match("(5)")||y.match("(14)")){if(!n){let d=ln.default.join(qs.default.tmpdir(),"useSQL",(0,Ns.hash)(e));await(0,sa.mkdir)(d,{recursive:!0}),pa(r),n=ln.default.join(d,"db.db"),await(0,sa.copyFile)(e,n),await(0,sa.writeFile)(n+"-shm",""),await(0,sa.writeFile)(n+"-wal",""),pa(r)}o=pn.default.spawn("sqlite3",["--json","--readonly","--vfs","unix-none",n,t],{signal:r}),u=(0,ua.getSpawnedPromise)(o),[{error:i,exitCode:s,signal:p},l,y]=await(0,ua.getSpawnedResult)(o,{encoding:"utf-8"},u),pa(r)}if(i||s!==0||p!==null)throw y.includes("authorization denied")?new la("You do not have permission to access the database."):new Error(y||"Unknown error");return JSON.parse(l.trim()||"[]")}Se.baseExecuteSQL=ks;function pa(e){if(e?.aborted){let t=new Error("aborted");throw t.name="AbortError",t}}});var yn=C(pt=>{"use strict";var js=pt&&pt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(pt,"__esModule",{value:!0});pt.useSQL=void 0;var be=require("react/jsx-runtime"),j=require("@raycast/api"),Fs=require("node:fs"),zs=js(require("node:os")),ca=require("react"),Hs=et(),Gs=Re(),$s=Rt(),rr=ar();function Qs(e,t,a){let{permissionPriming:r,...n}=a||{},[o,u]=(0,ca.useState)(),i=(0,Gs.useLatest)(a||{}),s=(0,ca.useRef)(),p=(0,ca.useCallback)(y=>{console.error(y);let d=y instanceof Error&&y.message.includes("authorization denied")?new rr.PermissionError("You do not have permission to access the database."):y;(0,rr.isPermissionError)(d)?u((0,be.jsx)(Ws,{priming:i.current.permissionPriming})):i.current.onError?i.current.onError(d):j.environment.launchType!==j.LaunchType.Background&&(0,$s.showFailureToast)(d,{title:"Cannot query the data"})},[i]),l=(0,ca.useMemo)(()=>{if(!(0,Fs.existsSync)(e))throw new Error("The database does not exist");return async(y,d)=>{let g=s.current?.signal;return(0,rr.baseExecuteSQL)(y,d,{signal:g})}},[e]);return{...(0,Hs.usePromise)(l,[e,t],{...n,onError:p}),permissionView:o}}pt.useSQL=Qs;var cn=parseInt(zs.default.release().split(".")[0])>=22,nr=cn?"Settings":"Preferences";function Ws(e){let t=cn?{title:"Open System Settings -> Privacy",target:"x-apple.systempreferences:com.apple.preference.security?Privacy_AllFiles"}:{title:"Open System Preferences -> Security",target:"x-apple.systempreferences:com.apple.preference.security?Privacy_AllFiles"};return j.environment.commandMode==="menu-bar"?(0,be.jsxs)(j.MenuBarExtra,{icon:j.Icon.Warning,title:j.environment.commandName,children:[(0,be.jsx)(j.MenuBarExtra.Item,{title:"Raycast needs full disk access",tooltip:`You can revert this access in ${nr} whenever you want`}),e.priming?(0,be.jsx)(j.MenuBarExtra.Item,{title:e.priming,tooltip:`You can revert this access in ${nr} whenever you want`}):null,(0,be.jsx)(j.MenuBarExtra.Separator,{}),(0,be.jsx)(j.MenuBarExtra.Item,{title:t.title,onAction:()=>(0,j.open)(t.target)})]}):(0,be.jsx)(j.List,{children:(0,be.jsx)(j.List.EmptyView,{icon:{source:{light:"https://raycast.com/uploads/extensions-utils-security-permissions-light.png",dark:"https://raycast.com/uploads/extensions-utils-security-permissions-dark.png"}},title:"Raycast needs full disk access.",description:`${e.priming?e.priming+`
`:""}You can revert this access in ${nr} whenever you want.`,actions:(0,be.jsx)(j.ActionPanel,{children:(0,be.jsx)(j.Action.Open,{...t})})})})}});var Sn=C(lt=>{"use strict";Object.defineProperty(lt,"__esModule",{value:!0});lt.useForm=lt.FormValidation=void 0;var Ee=require("react"),dn=Re(),ir;(function(e){e.Required="required"})(ir||(lt.FormValidation=ir={}));function or(e,t){if(e){if(typeof e=="function")return e(t);if(e===ir.Required){let a=typeof t<"u"&&t!==null;if(a)switch(typeof t){case"string":a=t.length>0;break;case"object":Array.isArray(t)?a=t.length>0:t instanceof Date&&(a=t.getTime()>0);break;default:break}if(!a)return"The item is required"}}}function Ks(e){let{onSubmit:t,validation:a,initialValues:r={}}=e,[n,o]=(0,Ee.useState)(r),[u,i]=(0,Ee.useState)({}),s=(0,Ee.useRef)({}),p=(0,dn.useLatest)(a||{}),l=(0,dn.useLatest)(t),y=(0,Ee.useCallback)(I=>{s.current[I]?.focus()},[s]),d=(0,Ee.useCallback)(async I=>{let R=!1;for(let[m,P]of Object.entries(p.current)){let A=or(P,I[m]);A&&(R||(R={},y(m)),R[m]=A)}if(R)return i(R),!1;let f=await l.current(I);return typeof f=="boolean"?f:!0},[p,l,y]),g=(0,Ee.useCallback)((I,R)=>{i(f=>({...f,[I]:R}))},[i]),c=(0,Ee.useCallback)(function(I,R){o(f=>({...f,[I]:typeof R=="function"?R(f[I]):R}))},[o]),b=(0,Ee.useMemo)(()=>new Proxy({},{get(I,R){let f=p.current[R],m=n[R];return{onChange(P){u[R]&&(or(f,P)||g(R,void 0)),c(R,P)},onBlur(P){let A=or(f,P.target.value);A&&g(R,A)},error:u[R],id:R,value:typeof m>"u"?null:m,ref:P=>{s.current[R]=P}}}}),[u,p,g,n,s,c]),S=(0,Ee.useCallback)(I=>{i({}),Object.entries(s.current).forEach(([R,f])=>{I?.[R]||f?.reset()}),I&&o(I)},[o,i,s]);return{handleSubmit:d,setValidationError:g,setValue:c,values:n,itemProps:b,focus:y,reset:S}}lt.useForm=Ks});var In=C(ya=>{"use strict";Object.defineProperty(ya,"__esModule",{value:!0});ya.useAI=void 0;var bn=require("react"),Ys=require("@raycast/api"),Js=et();function Zs(e,t={}){let{creativity:a,stream:r,model:n,...o}=t,[u,i]=(0,bn.useState)(""),s=(0,bn.useRef)(),{isLoading:p,error:l,revalidate:y}=(0,Js.usePromise)(async(d,g,c)=>{i("");let b=Ys.AI.ask(d,{creativity:g,model:n,signal:s.current?.signal});c===!1?i(await b):(b.on("data",S=>{i(I=>I+S)}),await b)},[e,a,r],{...o,abortable:s});return{isLoading:p,data:u,error:l,revalidate:y}}ya.useAI=Zs});var mn=C(da=>{"use strict";Object.defineProperty(da,"__esModule",{value:!0});da.useFrecencySorting=void 0;var sr=require("react"),gn=Re(),Xs=Jt(),eu=10,Mn=1440*60*1e3,tu=Math.log(2)/(eu*Mn),au={Default:100,Embed:0,Bookmark:140};function ru(e){let t=Date.now(),a=e?e.lastVisited:0,r=e?e.frecency:0,n=(t-a)/Mn,o=au.Default*Math.exp(-tu*n),u=r+o;return{lastVisited:t,frecency:u}}var nu=e=>{if(process.env.NODE_ENV!=="production"&&(typeof e!="object"||!e||!("id"in e)||typeof e.id!="string"))throw new Error("Specify a key function or make sure your items have an 'id' property");return e.id};function ou(e,t){let a=(0,gn.useLatest)(t?.key||nu),r=(0,gn.useLatest)(t?.sortUnvisited),[n,o]=(0,Xs.useCachedState)(`raycast_frecency_${t?.namespace}`,{}),u=(0,sr.useCallback)(async function(l){let y=a.current(l);o(d=>{let g=d[y],c=ru(g);return{...d,[y]:c}})},[a,o]),i=(0,sr.useCallback)(async function(l){let y=a.current(l);o(d=>{let g={...d};return delete g[y],g})},[a,o]);return{data:(0,sr.useMemo)(()=>e?e.sort((p,l)=>{let y=n[a.current(p)],d=n[a.current(l)];return y&&!d?-1:!y&&d?1:y&&d?d.frecency-y.frecency:r.current?r.current(p,l):0}):[],[n,e,a,r]),visitItem:u,resetRanking:i}}da.useFrecencySorting=ou});var fn=C(Sa=>{"use strict";Object.defineProperty(Sa,"__esModule",{value:!0});Sa.useLocalStorage=void 0;var ur=require("@raycast/api"),Rn=Rt(),An=Ue(),iu=et();function su(e,t){let{data:a,isLoading:r,mutate:n}=(0,iu.usePromise)(async i=>{let s=await ur.LocalStorage.getItem(i);return typeof s<"u"?JSON.parse(s,An.reviver):t},[e]);async function o(i){try{await n(ur.LocalStorage.setItem(e,JSON.stringify(i,An.replacer)),{optimisticUpdate(s){return s}})}catch(s){await(0,Rn.showFailureToast)(s,{title:"Failed to set value in local storage"})}}async function u(){try{await n(ur.LocalStorage.removeItem(e),{optimisticUpdate(){}})}catch(i){await(0,Rn.showFailureToast)(i,{title:"Failed to remove value from local storage"})}}return{value:a,setValue:o,removeValue:u,isLoading:r}}Sa.useLocalStorage=su});var Dn=C(ct=>{"use strict";Object.defineProperty(ct,"__esModule",{value:!0});ct.slightlyLighterColor=ct.slightlyDarkerColor=void 0;function uu(e){let t=0,a=0,r=0;if(e.length===4)t=parseInt(`${e[1]}${e[1]}`,16),a=parseInt(`${e[2]}${e[2]}`,16),r=parseInt(`${e[3]}${e[3]}`,16);else if(e.length===7)t=parseInt(`${e[1]}${e[2]}`,16),a=parseInt(`${e[3]}${e[4]}`,16),r=parseInt(`${e[5]}${e[6]}`,16);else throw new Error(`Malformed hex color: ${e}`);return{r:t,g:a,b:r}}function pu({r:e,g:t,b:a}){let r=e.toString(16),n=t.toString(16),o=a.toString(16);return r.length===1&&(r=`0${r}`),n.length===1&&(n=`0${n}`),o.length===1&&(o=`0${o}`),`#${r}${n}${o}`}function lu({r:e,g:t,b:a}){e/=255,t/=255,a/=255;let r=Math.min(e,t,a),n=Math.max(e,t,a),o=n-r,u=0,i=0,s=0;return o===0?u=0:n===e?u=(t-a)/o%6:n===t?u=(a-e)/o+2:u=(e-t)/o+4,u=Math.round(u*60),u<0&&(u+=360),s=(n+r)/2,i=o===0?0:o/(1-Math.abs(2*s-1)),i=+(i*100).toFixed(1),s=+(s*100).toFixed(1),{h:u,s:i,l:s}}function cu({h:e,s:t,l:a}){t/=100,a/=100;let r=(1-Math.abs(2*a-1))*t,n=r*(1-Math.abs(e/60%2-1)),o=a-r/2,u=0,i=0,s=0;return e>=0&&e<60?(u=r,i=n,s=0):e>=60&&e<120?(u=n,i=r,s=0):e>=120&&e<180?(u=0,i=r,s=n):e>=180&&e<240?(u=0,i=n,s=r):e>=240&&e<300?(u=n,i=0,s=r):e>=300&&e<360&&(u=r,i=0,s=n),u=Math.round((u+o)*255),i=Math.round((i+o)*255),s=Math.round((s+o)*255),{r:u,g:i,b:s}}function Pn(e){return lu(uu(e))}function En(e){return pu(cu(e))}function Cn(e,t,a){return t<a?e<t?t:e>a?a:e:e<a?a:e>t?t:e}var hn=12;function yu(e){let t=Pn(e);return En({h:t.h,s:t.s,l:Cn(t.l-hn,0,100)})}ct.slightlyDarkerColor=yu;function du(e){let t=Pn(e);return En({h:t.h,s:t.s,l:Cn(t.l+hn,0,100)})}ct.slightlyLighterColor=du});var _n=C(ba=>{"use strict";Object.defineProperty(ba,"__esModule",{value:!0});ba.getAvatarIcon=void 0;var xn=Dn();function yt(e,t){let a=e.charCodeAt(t);if(Number.isNaN(a))return["",t];if(a<55296||a>57343)return[e.charAt(t),t];if(55296<=a&&a<=56319){if(e.length<=t+1)throw new Error("High surrogate without following low surrogate");let n=e.charCodeAt(t+1);if(56320>n||n>57343)throw new Error("High surrogate without following low surrogate");return[e.charAt(t)+e.charAt(t+1),t+1]}if(t===0)throw new Error("Low surrogate without preceding high surrogate");let r=e.charCodeAt(t-1);if(55296>r||r>56319)throw new Error("Low surrogate without preceding high surrogate");return[e.charAt(t+1),t+1]}var Un=["#DC829A","#D64854","#D47600","#D36CDD","#52A9E4","#7871E8","#70920F","#43B93A","#EB6B3E","#26B795","#D85A9B","#A067DC","#BD9500","#5385D9"];function Su(e,t){let a=e.trim().split(" "),r;if(a.length==1&&yt(a[0],0)[0])r=yt(a[0],0)[0];else if(a.length>1){let s=yt(a[0],0)[0]||"",p=yt(a[a.length-1],0)[0]??"";r=s+p}else r="";let n;if(t?.background)n=t?.background;else{let s=0,[p,l]=yt(r,0);for(;p;)s+=p.charCodeAt(0),[p,l]=yt(r,l+1);let y=s%Un.length;n=Un[y]}let u=50-0;return`data:image/svg+xml,${`<svg width="100px" height="100px">
  ${t?.gradient!==!1?`<defs>
      <linearGradient id="Gradient" x1="0.25" x2="0.75" y1="0" y2="1">
        <stop offset="0%" stop-color="${(0,xn.slightlyLighterColor)(n)}"/>
        <stop offset="50%" stop-color="${n}"/>
        <stop offset="100%" stop-color="${(0,xn.slightlyDarkerColor)(n)}"/>
      </linearGradient>
  </defs>`:""}
      <circle cx="50" cy="50" r="${u}" fill="${t?.gradient!==!1?"url(#Gradient)":n}" />
      ${r?`<text x="50" y="80" font-size="${u-1}" font-family="Inter, sans-serif" text-anchor="middle" fill="white">${r.toUpperCase()}</text>`:""}
    </svg>
  `.replaceAll(`
`,"")}`}ba.getAvatarIcon=Su});var Tn=C(Ia=>{"use strict";Object.defineProperty(Ia,"__esModule",{value:!0});Ia.getFavicon=void 0;var vn=require("@raycast/api"),bu=require("url");function Iu(e,t){try{let r=(typeof e=="string"?new bu.URL(e):e).hostname;return{source:`https://www.google.com/s2/favicons?sz=${t?.size??64}&domain=${r}`,fallback:t?.fallback??vn.Icon.Link,mask:t?.mask}}catch(a){return console.error(a),vn.Icon.Link}}Ia.getFavicon=Iu});var Bn=C(ga=>{"use strict";Object.defineProperty(ga,"__esModule",{value:!0});ga.getProgressIcon=void 0;var wn=require("@raycast/api");function On(e,t,a,r){let n=(r-90)*Math.PI/180;return{x:e+a*Math.cos(n),y:t+a*Math.sin(n)}}function gu(e,t,a,r,n){let o=On(e,t,a,n),u=On(e,t,a,r),i=n-r<=180?"0":"1";return["M",o.x,o.y,"A",a,a,0,i,0,u.x,u.y].join(" ")}function Mu(e,t=wn.Color.Red,a){let r=a?.background||(wn.environment.appearance==="light"?"black":"white"),n=a?.backgroundOpacity||.1,o=10,i=50-5-o/2;return`data:image/svg+xml,${`<svg width="100px" height="100px">
      <circle cx="50" cy="50" r="${i}" stroke-width="${o}" stroke="${e<1?r:t}" opacity="${e<1?n:"1"}" fill="none" />
      ${e>0&&e<1?`<path d="${gu(50,50,i,0,e*360)}" stroke="${t}" stroke-width="${o}" fill="none" />`:""}
    </svg>
  `.replaceAll(`
`,"")}`}ga.getProgressIcon=Mu});var Ln=C(Ce=>{"use strict";var mu=Ce&&Ce.__createBinding||(Object.create?(function(e,t,a,r){r===void 0&&(r=a);var n=Object.getOwnPropertyDescriptor(t,a);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,n)}):(function(e,t,a,r){r===void 0&&(r=a),e[r]=t[a]})),pr=Ce&&Ce.__exportStar||function(e,t){for(var a in e)a!=="default"&&!Object.prototype.hasOwnProperty.call(t,a)&&mu(t,e,a)};Object.defineProperty(Ce,"__esModule",{value:!0});pr(_n(),Ce);pr(Tn(),Ce);pr(Bn(),Ce)});var qn=C(V=>{"use strict";Object.defineProperty(V,"__esModule",{value:!0});V.zoomService=V.slackService=V.linearService=V.jiraService=V.googleService=V.githubService=V.asanaService=void 0;var F=require("@raycast/api"),Fe=lr(),Ma={asana:"1191201745684312",github:"7235fe8d42157f1f38c0",linear:"c8ff37b9225c3c9aefd7d66ea0e5b6f1",slack:"851756884692.5546927290212"},we=e=>`data:image/svg+xml,${e}`,ze={asana:we('<svg xmlns="http://www.w3.org/2000/svg" width="251" height="232" fill="none"><path fill="#F06A6A" d="M179.383 54.373c0 30.017-24.337 54.374-54.354 54.374-30.035 0-54.373-24.338-54.373-54.374C70.656 24.338 94.993 0 125.029 0c30.017 0 54.354 24.338 54.354 54.373ZM54.393 122.33C24.376 122.33.02 146.668.02 176.685c0 30.017 24.337 54.373 54.373 54.373 30.035 0 54.373-24.338 54.373-54.373 0-30.017-24.338-54.355-54.373-54.355Zm141.253 0c-30.035 0-54.373 24.338-54.373 54.374 0 30.035 24.338 54.373 54.373 54.373 30.017 0 54.374-24.338 54.374-54.373 0-30.036-24.338-54.374-54.374-54.374Z"/></svg>'),github:{source:we('<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>'),tintColor:F.Color.PrimaryText},google:we('<svg xmlns="http://www.w3.org/2000/svg" style="display:block" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/><path fill="none" d="M0 0h48v48H0z"/></svg>'),jira:we('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="2361" height="2500" viewBox="2.59 0 214.091 224"><linearGradient id="a" x1="102.4" x2="56.15" y1="218.63" y2="172.39" gradientTransform="matrix(1 0 0 -1 0 264)" gradientUnits="userSpaceOnUse"><stop offset=".18" stop-color="#0052cc"/><stop offset="1" stop-color="#2684ff"/></linearGradient><linearGradient xlink:href="#a" id="b" x1="114.65" x2="160.81" y1="85.77" y2="131.92"/><path fill="#2684ff" d="M214.06 105.73 117.67 9.34 108.33 0 35.77 72.56 2.59 105.73a8.89 8.89 0 0 0 0 12.54l66.29 66.29L108.33 224l72.55-72.56 1.13-1.12 32.05-32a8.87 8.87 0 0 0 0-12.59zm-105.73 39.39L75.21 112l33.12-33.12L141.44 112z"/><path fill="url(#a)" d="M108.33 78.88a55.75 55.75 0 0 1-.24-78.61L35.62 72.71l39.44 39.44z"/><path fill="url(#b)" d="m141.53 111.91-33.2 33.21a55.77 55.77 0 0 1 0 78.86L181 151.35z"/></svg>'),linear:{source:{light:we('<svg xmlns="http://www.w3.org/2000/svg" fill="#222326" width="200" height="200" viewBox="0 0 100 100"><path d="M1.22541 61.5228c-.2225-.9485.90748-1.5459 1.59638-.857L39.3342 97.1782c.6889.6889.0915 1.8189-.857 1.5964C20.0515 94.4522 5.54779 79.9485 1.22541 61.5228ZM.00189135 46.8891c-.01764375.2833.08887215.5599.28957165.7606L52.3503 99.7085c.2007.2007.4773.3075.7606.2896 2.3692-.1476 4.6938-.46 6.9624-.9259.7645-.157 1.0301-1.0963.4782-1.6481L2.57595 39.4485c-.55186-.5519-1.49117-.2863-1.648174.4782-.465915 2.2686-.77832 4.5932-.92588465 6.9624ZM4.21093 29.7054c-.16649.3738-.08169.8106.20765 1.1l64.77602 64.776c.2894.2894.7262.3742 1.1.2077 1.7861-.7956 3.5171-1.6927 5.1855-2.684.5521-.328.6373-1.0867.1832-1.5407L8.43566 24.3367c-.45409-.4541-1.21271-.3689-1.54074.1832-.99132 1.6684-1.88843 3.3994-2.68399 5.1855ZM12.6587 18.074c-.3701-.3701-.393-.9637-.0443-1.3541C21.7795 6.45931 35.1114 0 49.9519 0 77.5927 0 100 22.4073 100 50.0481c0 14.8405-6.4593 28.1724-16.7199 37.3375-.3903.3487-.984.3258-1.3542-.0443L12.6587 18.074Z"/></svg>'),dark:we('<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="200" height="200" viewBox="0 0 100 100"><path d="M1.22541 61.5228c-.2225-.9485.90748-1.5459 1.59638-.857L39.3342 97.1782c.6889.6889.0915 1.8189-.857 1.5964C20.0515 94.4522 5.54779 79.9485 1.22541 61.5228ZM.00189135 46.8891c-.01764375.2833.08887215.5599.28957165.7606L52.3503 99.7085c.2007.2007.4773.3075.7606.2896 2.3692-.1476 4.6938-.46 6.9624-.9259.7645-.157 1.0301-1.0963.4782-1.6481L2.57595 39.4485c-.55186-.5519-1.49117-.2863-1.648174.4782-.465915 2.2686-.77832 4.5932-.92588465 6.9624ZM4.21093 29.7054c-.16649.3738-.08169.8106.20765 1.1l64.77602 64.776c.2894.2894.7262.3742 1.1.2077 1.7861-.7956 3.5171-1.6927 5.1855-2.684.5521-.328.6373-1.0867.1832-1.5407L8.43566 24.3367c-.45409-.4541-1.21271-.3689-1.54074.1832-.99132 1.6684-1.88843 3.3994-2.68399 5.1855ZM12.6587 18.074c-.3701-.3701-.393-.9637-.0443-1.3541C21.7795 6.45931 35.1114 0 49.9519 0 77.5927 0 100 22.4073 100 50.0481c0 14.8405-6.4593 28.1724-16.7199 37.3375-.3903.3487-.984.3258-1.3542-.0443L12.6587 18.074Z" /></svg>')}},slack:we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="73 73 124 124"><style>.st0{fill:#e01e5a}.st1{fill:#36c5f0}.st2{fill:#2eb67d}.st3{fill:#ecb22e}</style><path d="M99.4 151.2c0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9h12.9v12.9zM105.9 151.2c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v32.3c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9v-32.3z" class="st0"/><path d="M118.8 99.4c-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v12.9h-12.9zM118.8 105.9c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H86.5c-7.1 0-12.9-5.8-12.9-12.9s5.8-12.9 12.9-12.9h32.3z" class="st1"/><path d="M170.6 118.8c0-7.1 5.8-12.9 12.9-12.9 7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9h-12.9v-12.9zM164.1 118.8c0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9V86.5c0-7.1 5.8-12.9 12.9-12.9 7.1 0 12.9 5.8 12.9 12.9v32.3z" class="st2"/><path d="M151.2 170.6c7.1 0 12.9 5.8 12.9 12.9 0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9v-12.9h12.9zM151.2 164.1c-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9h32.3c7.1 0 12.9 5.8 12.9 12.9 0 7.1-5.8 12.9-12.9 12.9h-32.3z" class="st3"/></svg>'),zoom:we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 351.845 80"><path d="M73.786 78.835H10.88A10.842 10.842 0 0 1 .833 72.122a10.841 10.841 0 0 1 2.357-11.85L46.764 16.7h-31.23C6.954 16.699 0 9.744 0 1.165h58.014c4.414 0 8.357 2.634 10.046 6.712a10.843 10.843 0 0 1-2.356 11.85L22.13 63.302h36.122c8.58 0 15.534 6.955 15.534 15.534Zm278.059-48.544C351.845 13.588 338.256 0 321.553 0c-8.934 0-16.975 3.89-22.524 10.063C293.48 3.89 285.44 0 276.505 0c-16.703 0-30.291 13.588-30.291 30.291v48.544c8.579 0 15.534-6.955 15.534-15.534v-33.01c0-8.137 6.62-14.757 14.757-14.757s14.757 6.62 14.757 14.757v33.01c0 8.58 6.955 15.534 15.534 15.534V30.291c0-8.137 6.62-14.757 14.757-14.757s14.758 6.62 14.758 14.757v33.01c0 8.58 6.954 15.534 15.534 15.534V30.291ZM238.447 40c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.908-40 40-40 40 17.909 40 40Zm-15.534 0c0-13.512-10.954-24.466-24.466-24.466S173.98 26.488 173.98 40s10.953 24.466 24.466 24.466S222.913 53.512 222.913 40Zm-70.68 0c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.909-40 40-40 40 17.909 40 40Zm-15.534 0c0-13.512-10.954-24.466-24.466-24.466S87.767 26.488 87.767 40s10.954 24.466 24.466 24.466S136.699 53.512 136.699 40Z" style="fill:#0b5cff"/></svg>')},Ru=e=>new Fe.OAuthService({client:new F.OAuth.PKCEClient({redirectMethod:F.OAuth.RedirectMethod.Web,providerName:"Asana",providerIcon:ze.asana,providerId:"asana",description:"Connect your Asana account"}),clientId:e.clientId??Ma.asana,authorizeUrl:e.authorizeUrl??"https://asana.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://asana.oauth.raycast.com/token",refreshTokenUrl:e.refreshTokenUrl??"https://asana.oauth.raycast.com/refresh-token",scope:e.scope,personalAccessToken:e.personalAccessToken,onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});V.asanaService=Ru;var Au=e=>new Fe.OAuthService({client:new F.OAuth.PKCEClient({redirectMethod:F.OAuth.RedirectMethod.Web,providerName:"GitHub",providerIcon:ze.github,providerId:"github",description:"Connect your GitHub account"}),clientId:e.clientId??Ma.github,authorizeUrl:e.authorizeUrl??"https://github.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://github.oauth.raycast.com/token",refreshTokenUrl:e.refreshTokenUrl??"https://github.oauth.raycast.com/refresh-token",scope:e.scope,personalAccessToken:e.personalAccessToken,onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});V.githubService=Au;var fu=e=>new Fe.OAuthService({client:new F.OAuth.PKCEClient({redirectMethod:F.OAuth.RedirectMethod.AppURI,providerName:"Google",providerIcon:ze.google,providerId:"google",description:"Connect your Google account"}),clientId:e.clientId,authorizeUrl:e.authorizeUrl??"https://accounts.google.com/o/oauth2/v2/auth",tokenUrl:e.tokenUrl??"https://oauth2.googleapis.com/token",refreshTokenUrl:e.tokenUrl,scope:e.scope,personalAccessToken:e.personalAccessToken,bodyEncoding:e.bodyEncoding??"url-encoded",onAuthorize:e.onAuthorize,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});V.googleService=fu;var Pu=e=>new Fe.OAuthService({client:new F.OAuth.PKCEClient({redirectMethod:F.OAuth.RedirectMethod.Web,providerName:"Jira",providerIcon:ze.jira,providerId:"jira",description:"Connect your Jira account"}),clientId:e.clientId,authorizeUrl:e.authorizeUrl??"https://auth.atlassian.com/authorize",tokenUrl:e.tokenUrl??"https://auth.atlassian.com/oauth/token",refreshTokenUrl:e.refreshTokenUrl,scope:e.scope,personalAccessToken:e.personalAccessToken,onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});V.jiraService=Pu;var Eu=e=>new Fe.OAuthService({client:new F.OAuth.PKCEClient({redirectMethod:F.OAuth.RedirectMethod.Web,providerName:"Linear",providerIcon:ze.linear,providerId:"linear",description:"Connect your Linear account"}),clientId:e.clientId??Ma.linear,authorizeUrl:e.authorizeUrl??"https://linear.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://linear.oauth.raycast.com/token",refreshTokenUrl:e.refreshTokenUrl??"https://linear.oauth.raycast.com/refresh-token",scope:e.scope,extraParameters:{actor:"user"},onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});V.linearService=Eu;var Cu=e=>new Fe.OAuthService({client:new F.OAuth.PKCEClient({redirectMethod:F.OAuth.RedirectMethod.Web,providerName:"Slack",providerIcon:ze.slack,providerId:"slack",description:"Connect your Slack account"}),clientId:e.clientId??Ma.slack,authorizeUrl:e.authorizeUrl??"https://slack.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://slack.oauth.raycast.com/token",refreshTokenUrl:e.tokenUrl??"https://slack.oauth.raycast.com/refresh-token",scope:"",extraParameters:{user_scope:e.scope},personalAccessToken:e.personalAccessToken,bodyEncoding:e.tokenUrl?e.bodyEncoding??"url-encoded":"json",onAuthorize:e.onAuthorize,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser??(t=>({access_token:t.authed_user.access_token,scope:t.authed_user.scope}))});V.slackService=Cu;var hu=e=>new Fe.OAuthService({client:new F.OAuth.PKCEClient({redirectMethod:F.OAuth.RedirectMethod.Web,providerName:"Zoom",providerIcon:ze.zoom,providerId:"zoom",description:"Connect your Zoom account"}),clientId:e.clientId,authorizeUrl:e.authorizeUrl??"https://zoom.us/oauth/authorize",tokenUrl:e.tokenUrl??"https://zoom.us/oauth/token",refreshTokenUrl:e.refreshTokenUrl,scope:e.scope,personalAccessToken:e.personalAccessToken,bodyEncoding:e.bodyEncoding??"url-encoded",onAuthorize:e.onAuthorize,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});V.zoomService=hu});var lr=C(dt=>{"use strict";var Du=dt&&dt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(dt,"__esModule",{value:!0});dt.OAuthService=void 0;var Nn=Du(Ut()),He=qn(),Ie=class{constructor(t){this.clientId=t.clientId,this.scope=Array.isArray(t.scope)?t.scope.join(" "):t.scope,this.personalAccessToken=t.personalAccessToken,this.bodyEncoding=t.bodyEncoding,this.client=t.client,this.extraParameters=t.extraParameters,this.authorizeUrl=t.authorizeUrl,this.tokenUrl=t.tokenUrl,this.refreshTokenUrl=t.refreshTokenUrl,this.onAuthorize=t.onAuthorize,this.tokenResponseParser=t.tokenResponseParser??(a=>a),this.tokenRefreshResponseParser=t.tokenRefreshResponseParser??(a=>a),this.authorize=this.authorize.bind(this)}async authorize(){let t=await this.client.getTokens();if(t?.accessToken){if(t.refreshToken&&t.isExpired()){let o=await this.refreshTokens({token:t.refreshToken});if(o)return await this.client.setTokens(o),o.access_token}return t.accessToken}let a=await this.client.authorizationRequest({endpoint:this.authorizeUrl,clientId:this.clientId,scope:this.scope,extraParameters:this.extraParameters}),{authorizationCode:r}=await this.client.authorize(a),n=await this.fetchTokens({authRequest:a,authorizationCode:r});return await this.client.setTokens(n),n.access_token}async fetchTokens({authRequest:t,authorizationCode:a}){let r;if(this.bodyEncoding==="url-encoded"){let u=new URLSearchParams;u.append("client_id",this.clientId),u.append("code",a),u.append("code_verifier",t.codeVerifier),u.append("grant_type","authorization_code"),u.append("redirect_uri",t.redirectURI),r={body:u}}else r={body:JSON.stringify({client_id:this.clientId,code:a,code_verifier:t.codeVerifier,grant_type:"authorization_code",redirect_uri:t.redirectURI}),headers:{"Content-Type":"application/json"}};let n=await(0,Nn.default)(this.tokenUrl,{method:"POST",...r});if(!n.ok){let u=await n.text();throw console.error("fetch tokens error:",u),new Error(`Error while fetching tokens: ${n.status} (${n.statusText})
${u}`)}let o=this.tokenResponseParser(await n.json());return Array.isArray(o.scope)?{...o,scope:o.scope.join(" ")}:o}async refreshTokens({token:t}){let a;if(this.bodyEncoding==="url-encoded"){let n=new URLSearchParams;n.append("client_id",this.clientId),n.append("refresh_token",t),n.append("grant_type","refresh_token"),a={body:n}}else a={body:JSON.stringify({client_id:this.clientId,refresh_token:t,grant_type:"refresh_token"}),headers:{"Content-Type":"application/json"}};let r=await(0,Nn.default)(this.refreshTokenUrl??this.tokenUrl,{method:"POST",...a});if(r.ok){let n=this.tokenRefreshResponseParser(await r.json());return n.refresh_token=n.refresh_token??t,n}else{let n=await r.text();console.error("refresh tokens error:",n),this.client.description=`${this.client.providerName} needs you to sign-in again. Press \u23CE or click the button below to continue.`,await this.client.removeTokens(),await this.authorize()}}};dt.OAuthService=Ie;Ie.asana=He.asanaService;Ie.github=He.githubService;Ie.google=He.googleService;Ie.jira=He.jiraService;Ie.linear=He.linearService;Ie.slack=He.slackService;Ie.zoom=He.zoomService});var Vn=C(St=>{"use strict";Object.defineProperty(St,"__esModule",{value:!0});St.getAccessToken=St.withAccessToken=void 0;var xu=require("react/jsx-runtime"),Uu=require("@raycast/api"),Oe=null,Ge=null,cr=null,yr=null,dr=null;function _u(e){return Uu.environment.commandMode==="no-view"?t=>async r=>{if(!Oe){Oe=e.personalAccessToken??await e.authorize(),Ge=e.personalAccessToken?"personal":"oauth";let n=(await e.client?.getTokens())?.idToken;e.onAuthorize&&await Promise.resolve(e.onAuthorize({token:Oe,type:Ge,idToken:n}))}return t(r)}:t=>{let a=r=>{e.personalAccessToken?(Oe=e.personalAccessToken,Ge="personal"):(cr||(cr=Sr(e.authorize())),Oe=cr.read(),Ge="oauth");let n;return e.client&&(yr||(yr=Sr(e.client.getTokens())),n=yr.read()?.idToken),!dr&&e.onAuthorize&&(dr=Sr(Promise.resolve(e.onAuthorize({token:Oe,type:Ge,idToken:n})))),dr?.read(),(0,xu.jsx)(t,{...r})};return a.displayName=`withAccessToken(${t.displayName||t.name})`,a}}St.withAccessToken=_u;function vu(){if(!Oe||!Ge)throw new Error("getAccessToken must be used when authenticated (eg. used inside `withAccessToken`)");return{token:Oe,type:Ge}}St.getAccessToken=vu;function Sr(e){let t="pending",a,r=e.then(o=>{t="success",a=o},o=>{t="error",a=o});return{read:()=>{switch(t){case"pending":throw r;case"error":throw a;default:return a}}}}});var jn=C(Be=>{"use strict";var Tu=Be&&Be.__createBinding||(Object.create?(function(e,t,a,r){r===void 0&&(r=a);var n=Object.getOwnPropertyDescriptor(t,a);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,n)}):(function(e,t,a,r){r===void 0&&(r=a),e[r]=t[a]})),kn=Be&&Be.__exportStar||function(e,t){for(var a in e)a!=="default"&&!Object.prototype.hasOwnProperty.call(t,a)&&Tu(t,e,a)};Object.defineProperty(Be,"__esModule",{value:!0});kn(lr(),Be);kn(Vn(),Be)});var $n=C(re=>{"use strict";var Fn=re&&re.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(re,"__esModule",{value:!0});re.createDeeplink=re.createExtensionDeeplink=re.createScriptCommandDeeplink=re.DeeplinkType=void 0;var Ir=require("@raycast/api"),wu=Fn(require("node:fs")),Ou=Fn(require("node:path")),br;(function(e){e.ScriptCommand="script-command",e.Extension="extension"})(br||(re.DeeplinkType=br={}));function zn(){return Ir.environment.raycastVersion.includes("alpha")?"raycastinternal://":"raycast://"}function Bu(){let e=JSON.parse(wu.default.readFileSync(Ou.default.join(Ir.environment.assetsPath,"..","package.json"),"utf8"));return e.owner||e.author}function Hn(e){let t=`${zn()}script-commands/${e.command}`;if(e.arguments){let a="";for(let r of e.arguments)a+="&arguments="+encodeURIComponent(r);t+="?"+a.substring(1)}return t}re.createScriptCommandDeeplink=Hn;function Gn(e){let t=Bu(),a=Ir.environment.extensionName;"ownerOrAuthorName"in e&&"extensionName"in e&&(t=e.ownerOrAuthorName,a=e.extensionName);let r=`${zn()}extensions/${t}/${a}/${e.command}`,n="";return e.launchType&&(n+="&launchType="+encodeURIComponent(e.launchType)),e.arguments&&(n+="&arguments="+encodeURIComponent(JSON.stringify(e.arguments))),e.context&&(n+="&context="+encodeURIComponent(JSON.stringify(e.context))),e.fallbackText&&(n+="&fallbackText="+encodeURIComponent(e.fallbackText)),n&&(r+="?"+n.substring(1)),r}re.createExtensionDeeplink=Gn;function Lu(e){return e.type===br.ScriptCommand?Hn(e):Gn(e)}re.createDeeplink=Lu});var Qn=C(ma=>{"use strict";Object.defineProperty(ma,"__esModule",{value:!0});ma.executeSQL=void 0;var qu=ar();function Nu(e,t){return(0,qu.baseExecuteSQL)(e,t)}ma.executeSQL=Nu});var Wn=C(bt=>{"use strict";var Vu=bt&&bt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(bt,"__esModule",{value:!0});bt.runAppleScript=void 0;var ku=Vu(require("node:child_process")),Ot=na();async function ju(e,t,a){let{humanReadableOutput:r,language:n,timeout:o,...u}=Array.isArray(t)?a||{}:t||{},i=r!==!1?[]:["-ss"];n==="JavaScript"&&i.push("-l","JavaScript"),Array.isArray(t)&&i.push("-",...t);let s=ku.default.spawn("osascript",i,{...u,env:{PATH:"/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"}}),p=(0,Ot.getSpawnedPromise)(s,{timeout:o??1e4});s.stdin.end(e);let[{error:l,exitCode:y,signal:d,timedOut:g},c,b]=await(0,Ot.getSpawnedResult)(s,{encoding:"utf8"},p),S=(0,Ot.handleOutput)({stripFinalNewline:!0},c),I=(0,Ot.handleOutput)({stripFinalNewline:!0},b);return(0,Ot.defaultParsing)({stdout:S,stderr:I,error:l,exitCode:y,signal:d,timedOut:g,command:"osascript",options:a,parentError:new Error})}bt.runAppleScript=ju});var Kn=C(Aa=>{"use strict";Object.defineProperty(Aa,"__esModule",{value:!0});Aa.withCache=void 0;var Fu=require("@raycast/api"),Ra=Ue();function zu(e,t){let a=new Fu.Cache({namespace:(0,Ra.hash)(e)}),r=async(...n)=>{let o=(0,Ra.hash)(n||[])+t?.internal_cacheKeySuffix,u=a.get(o);if(u){let{data:s,timestamp:p}=JSON.parse(u,Ra.reviver);if(!(t?.maxAge&&Date.now()-p>t.maxAge)&&(!t?.validate||t.validate(s)))return s}let i=await e(...n);return a.set(o,JSON.stringify({data:i,timestamp:Date.now()},Ra.replacer)),i};return r.clearCache=()=>{a.clear()},r}Aa.withCache=zu});var Bt=C(x=>{"use strict";var Hu=x&&x.__createBinding||(Object.create?(function(e,t,a,r){r===void 0&&(r=a);var n=Object.getOwnPropertyDescriptor(t,a);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,n)}):(function(e,t,a,r){r===void 0&&(r=a),e[r]=t[a]})),O=x&&x.__exportStar||function(e,t){for(var a in e)a!=="default"&&!Object.prototype.hasOwnProperty.call(t,a)&&Hu(t,e,a)};Object.defineProperty(x,"__esModule",{value:!0});O(et(),x);O(Jt(),x);O(Pt(),x);O(Zr(),x);O(rn(),x);O(un(),x);O(yn(),x);O(Sn(),x);O(In(),x);O(mn(),x);O(fn(),x);O(Ln(),x);O(jn(),x);O($n(),x);O(Qn(),x);O(Wn(),x);O(Rt(),x);O(Kn(),x)});var H={};Ze(H,{default:()=>so.default});var so,xa=Va(()=>{z(H,require("formdata-polyfill/esm.min.js"));so=N(require("formdata-polyfill/esm.min.js"))});var K={};Ze(K,{default:()=>co.default});var co,Rr=Va(()=>{z(K,require("fetch-blob/from.js"));co=N(require("fetch-blob/from.js"))});var So={};Ze(So,{toFormData:()=>cp});function lp(e){let t=e.match(/\bfilename=("(.*?)"|([^()<>@,;:\\"/[\]?={}\s\t]+))($|;\s)/i);if(!t)return;let a=t[2]||t[3]||"",r=a.slice(a.lastIndexOf("\\")+1);return r=r.replace(/%22/g,'"'),r=r.replace(/&#(\d{4});/g,(n,o)=>String.fromCharCode(o)),r}async function cp(e,t){if(!/multipart/i.test(t))throw new TypeError("Failed to fetch");let a=t.match(/boundary=(?:"([^"]+)"|([^;]+))/i);if(!a)throw new TypeError("no or bad content-type header, no multipart boundary");let r=new Ar(a[1]||a[2]),n,o,u,i,s,p,l=[],y=new H.FormData,d=I=>{u+=S.decode(I,{stream:!0})},g=I=>{l.push(I)},c=()=>{let I=new K.File(l,p,{type:s});y.append(i,I)},b=()=>{y.append(i,u)},S=new TextDecoder("utf-8");S.decode(),r.onPartBegin=function(){r.onPartData=d,r.onPartEnd=b,n="",o="",u="",i="",s="",p=null,l.length=0},r.onHeaderField=function(I){n+=S.decode(I,{stream:!0})},r.onHeaderValue=function(I){o+=S.decode(I,{stream:!0})},r.onHeaderEnd=function(){if(o+=S.decode(),n=n.toLowerCase(),n==="content-disposition"){let I=o.match(/\bname=("([^"]*)"|([^()<>@,;:\\"/[\]?={}\s\t]+))/i);I&&(i=I[2]||I[3]||""),p=lp(o),p&&(r.onPartData=g,r.onPartEnd=c)}else n==="content-type"&&(s=o);o="",n=""};for await(let I of e)r.write(I);return r.end(),y}var ge,D,yo,Ne,_a,va,op,Vt,ip,sp,up,pp,We,Ar,bo=Va(()=>{Rr();xa();ge=0,D={START_BOUNDARY:ge++,HEADER_FIELD_START:ge++,HEADER_FIELD:ge++,HEADER_VALUE_START:ge++,HEADER_VALUE:ge++,HEADER_VALUE_ALMOST_DONE:ge++,HEADERS_ALMOST_DONE:ge++,PART_DATA_START:ge++,PART_DATA:ge++,END:ge++},yo=1,Ne={PART_BOUNDARY:yo,LAST_BOUNDARY:yo*=2},_a=10,va=13,op=32,Vt=45,ip=58,sp=97,up=122,pp=e=>e|32,We=()=>{},Ar=class{constructor(t){this.index=0,this.flags=0,this.onHeaderEnd=We,this.onHeaderField=We,this.onHeadersEnd=We,this.onHeaderValue=We,this.onPartBegin=We,this.onPartData=We,this.onPartEnd=We,this.boundaryChars={},t=`\r
--`+t;let a=new Uint8Array(t.length);for(let r=0;r<t.length;r++)a[r]=t.charCodeAt(r),this.boundaryChars[a[r]]=!0;this.boundary=a,this.lookbehind=new Uint8Array(this.boundary.length+8),this.state=D.START_BOUNDARY}write(t){let a=0,r=t.length,n=this.index,{lookbehind:o,boundary:u,boundaryChars:i,index:s,state:p,flags:l}=this,y=this.boundary.length,d=y-1,g=t.length,c,b,S=m=>{this[m+"Mark"]=a},I=m=>{delete this[m+"Mark"]},R=(m,P,A,U)=>{(P===void 0||P!==A)&&this[m](U&&U.subarray(P,A))},f=(m,P)=>{let A=m+"Mark";A in this&&(P?(R(m,this[A],a,t),delete this[A]):(R(m,this[A],t.length,t),this[A]=0))};for(a=0;a<r;a++)switch(c=t[a],p){case D.START_BOUNDARY:if(s===u.length-2){if(c===Vt)l|=Ne.LAST_BOUNDARY;else if(c!==va)return;s++;break}else if(s-1===u.length-2){if(l&Ne.LAST_BOUNDARY&&c===Vt)p=D.END,l=0;else if(!(l&Ne.LAST_BOUNDARY)&&c===_a)s=0,R("onPartBegin"),p=D.HEADER_FIELD_START;else return;break}c!==u[s+2]&&(s=-2),c===u[s+2]&&s++;break;case D.HEADER_FIELD_START:p=D.HEADER_FIELD,S("onHeaderField"),s=0;case D.HEADER_FIELD:if(c===va){I("onHeaderField"),p=D.HEADERS_ALMOST_DONE;break}if(s++,c===Vt)break;if(c===ip){if(s===1)return;f("onHeaderField",!0),p=D.HEADER_VALUE_START;break}if(b=pp(c),b<sp||b>up)return;break;case D.HEADER_VALUE_START:if(c===op)break;S("onHeaderValue"),p=D.HEADER_VALUE;case D.HEADER_VALUE:c===va&&(f("onHeaderValue",!0),R("onHeaderEnd"),p=D.HEADER_VALUE_ALMOST_DONE);break;case D.HEADER_VALUE_ALMOST_DONE:if(c!==_a)return;p=D.HEADER_FIELD_START;break;case D.HEADERS_ALMOST_DONE:if(c!==_a)return;R("onHeadersEnd"),p=D.PART_DATA_START;break;case D.PART_DATA_START:p=D.PART_DATA,S("onPartData");case D.PART_DATA:if(n=s,s===0){for(a+=d;a<g&&!(t[a]in i);)a+=y;a-=d,c=t[a]}if(s<u.length)u[s]===c?(s===0&&f("onPartData",!0),s++):s=0;else if(s===u.length)s++,c===va?l|=Ne.PART_BOUNDARY:c===Vt?l|=Ne.LAST_BOUNDARY:s=0;else if(s-1===u.length)if(l&Ne.PART_BOUNDARY){if(s=0,c===_a){l&=~Ne.PART_BOUNDARY,R("onPartEnd"),R("onPartBegin"),p=D.HEADER_FIELD_START;break}}else l&Ne.LAST_BOUNDARY&&c===Vt?(R("onPartEnd"),p=D.END,l=0):s=0;if(s>0)o[s-1]=c;else if(n>0){let m=new Uint8Array(o.buffer,o.byteOffset,o.byteLength);R("onPartData",0,n,m),n=0,S("onPartData"),a--}break;case D.END:break;default:throw new Error(`Unexpected state entered: ${p}`)}f("onHeaderField"),f("onHeaderValue"),f("onPartData"),this.index=s,this.state=p,this.flags=l}end(){if(this.state===D.HEADER_FIELD_START&&this.index===0||this.state===D.PART_DATA&&this.index===this.boundary.length)this.onPartEnd();else if(this.state!==D.END)throw new Error("MultipartParser.end(): stream ended unexpectedly")}}});var Nl={};Ze(Nl,{default:()=>ql});module.exports=si(Nl);var E=require("@raycast/api"),Xo=N(Bt()),ei=require("react");var Vo=require("@octokit/rest"),ko=require("@raycast/api"),jo=N(Bt());var fa=JSON;var Yn=e=>e.toUpperCase(),Jn=e=>{let t={};return e.forEach((a,r)=>{t[r]=a}),t};var Zn=(e,t,a)=>e.document?e:{document:e,variables:t,requestHeaders:a,signal:void 0},Xn=(e,t,a)=>e.query?e:{query:e,variables:t,requestHeaders:a,signal:void 0},eo=(e,t)=>e.documents?e:{documents:e,requestHeaders:t,signal:void 0};var Pa=require("graphql"),to=e=>{let t,a=e.definitions.filter(r=>r.kind==="OperationDefinition");return a.length===1&&(t=a[0]?.name?.value),t},$e=e=>{if(typeof e=="string"){let a;try{let r=(0,Pa.parse)(e);a=to(r)}catch{}return{query:e,operationName:a}}let t=to(e);return{query:(0,Pa.print)(e),operationName:t}};var Qe=class e extends Error{constructor(t,a){let r=`${e.extractMessage(t)}: ${JSON.stringify({response:t,request:a})}`;super(r),Object.setPrototypeOf(this,e.prototype),this.response=t,this.request=a,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,e)}static extractMessage(t){return t.errors?.[0]?.message??`GraphQL Error (Code: ${t.status})`}};var qe=N(Ut(),1);var Gu="connection_init",$u="connection_ack",ro="ping",no="pong",Qu="subscribe",Wu="next",Ku="error",oo="complete",Le=class e{get type(){return this._type}get id(){return this._id}get payload(){return this._payload}constructor(t,a,r){this._type=t,this._payload=a,this._id=r}get text(){let t={type:this.type};return this.id!=null&&this.id!=null&&(t.id=this.id),this.payload!=null&&this.payload!=null&&(t.payload=this.payload),JSON.stringify(t)}static parse(t,a){let{type:r,payload:n,id:o}=JSON.parse(t);return new e(r,a(n),o)}},Ea=class{constructor(t,{onInit:a,onAcknowledged:r,onPing:n,onPong:o}){this.socketState={acknowledged:!1,lastRequestId:0,subscriptions:{}},this.socket=t,t.addEventListener("open",async u=>{this.socketState.acknowledged=!1,this.socketState.subscriptions={},t.send(Ju(a?await a():null).text)}),t.addEventListener("close",u=>{this.socketState.acknowledged=!1,this.socketState.subscriptions={}}),t.addEventListener("error",u=>{console.error(u)}),t.addEventListener("message",u=>{try{let i=Yu(u.data);switch(i.type){case $u:{this.socketState.acknowledged?console.warn("Duplicate CONNECTION_ACK message ignored"):(this.socketState.acknowledged=!0,r&&r(i.payload));return}case ro:{n?n(i.payload).then(y=>t.send(ao(y).text)):t.send(ao(null).text);return}case no:{o&&o(i.payload);return}}if(!this.socketState.acknowledged||i.id===void 0||i.id===null||!this.socketState.subscriptions[i.id])return;let{query:s,variables:p,subscriber:l}=this.socketState.subscriptions[i.id];switch(i.type){case Wu:{!i.payload.errors&&i.payload.data&&l.next&&l.next(i.payload.data),i.payload.errors&&l.error&&l.error(new Qe({...i.payload,status:200},{query:s,variables:p}));return}case Ku:{l.error&&l.error(new Qe({errors:i.payload,status:200},{query:s,variables:p}));return}case oo:{l.complete&&l.complete(),delete this.socketState.subscriptions[i.id];return}}}catch(i){console.error(i),t.close(1006)}t.close(4400,"Unknown graphql-ws message.")})}makeSubscribe(t,a,r,n){let o=(this.socketState.lastRequestId++).toString();return this.socketState.subscriptions[o]={query:t,variables:n,subscriber:r},this.socket.send(Xu(o,{query:t,operationName:a,variables:n}).text),()=>{this.socket.send(ep(o).text),delete this.socketState.subscriptions[o]}}rawRequest(t,a){return new Promise((r,n)=>{let o;this.rawSubscribe(t,{next:(u,i)=>o={data:u,extensions:i},error:n,complete:()=>r(o)},a)})}request(t,a){return new Promise((r,n)=>{let o;this.subscribe(t,{next:u=>o=u,error:n,complete:()=>r(o)},a)})}subscribe(t,a,r){let{query:n,operationName:o}=$e(t);return this.makeSubscribe(n,o,a,r)}rawSubscribe(t,a,r){return this.makeSubscribe(t,void 0,a,r)}ping(t){this.socket.send(Zu(t).text)}close(){this.socket.close(1e3)}};Ea.PROTOCOL="graphql-transport-ws";function Yu(e,t=a=>a){return Le.parse(e,t)}function Ju(e){return new Le(Gu,e)}function Zu(e){return new Le(ro,e,void 0)}function ao(e){return new Le(no,e,void 0)}function Xu(e,t){return new Le(Qu,t,e)}function ep(e){return new Le(oo,void 0,e)}var It=e=>{let t={};return e&&(typeof Headers<"u"&&e instanceof Headers||qe&&qe.Headers&&e instanceof qe.Headers?t=Jn(e):Array.isArray(e)?e.forEach(([a,r])=>{a&&r!==void 0&&(t[a]=r)}):t=e),t},io=e=>e.replace(/([\s,]|#[^\n\r]+)+/g," ").trim(),tp=e=>{if(!Array.isArray(e.query)){let r=e,n=[`query=${encodeURIComponent(io(r.query))}`];return e.variables&&n.push(`variables=${encodeURIComponent(r.jsonSerializer.stringify(r.variables))}`),r.operationName&&n.push(`operationName=${encodeURIComponent(r.operationName)}`),n.join("&")}if(typeof e.variables<"u"&&!Array.isArray(e.variables))throw new Error("Cannot create query with given variable type, array expected");let t=e,a=e.query.reduce((r,n,o)=>(r.push({query:io(n),variables:t.variables?t.jsonSerializer.stringify(t.variables[o]):void 0}),r),[]);return`query=${encodeURIComponent(t.jsonSerializer.stringify(a))}`},ap=e=>async t=>{let{url:a,query:r,variables:n,operationName:o,fetch:u,fetchOptions:i,middleware:s}=t,p={...t.headers},l="",y;e==="POST"?(y=rp(r,n,o,i.jsonSerializer),typeof y=="string"&&(p["Content-Type"]="application/json")):l=tp({query:r,variables:n,operationName:o,jsonSerializer:i.jsonSerializer??fa});let d={method:e,headers:p,body:y,...i},g=a,c=d;if(s){let b=await Promise.resolve(s({...d,url:a,operationName:o,variables:n})),{url:S,...I}=b;g=S,c=I}return l&&(g=`${g}?${l}`),await u(g,c)},Ca=class{constructor(t,a={}){this.url=t,this.requestConfig=a,this.rawRequest=async(...r)=>{let[n,o,u]=r,i=Xn(n,o,u),{headers:s,fetch:p=qe.default,method:l="POST",requestMiddleware:y,responseMiddleware:d,...g}=this.requestConfig,{url:c}=this;i.signal!==void 0&&(g.signal=i.signal);let{operationName:b}=$e(i.query);return gr({url:c,query:i.query,variables:i.variables,headers:{...It(Mr(s)),...It(i.requestHeaders)},operationName:b,fetch:p,method:l,fetchOptions:g,middleware:y}).then(S=>(d&&d(S),S)).catch(S=>{throw d&&d(S),S})}}async request(t,...a){let[r,n]=a,o=Zn(t,r,n),{headers:u,fetch:i=qe.default,method:s="POST",requestMiddleware:p,responseMiddleware:l,...y}=this.requestConfig,{url:d}=this;o.signal!==void 0&&(y.signal=o.signal);let{query:g,operationName:c}=$e(o.document);return gr({url:d,query:g,variables:o.variables,headers:{...It(Mr(u)),...It(o.requestHeaders)},operationName:c,fetch:i,method:s,fetchOptions:y,middleware:p}).then(b=>(l&&l(b),b.data)).catch(b=>{throw l&&l(b),b})}batchRequests(t,a){let r=eo(t,a),{headers:n,...o}=this.requestConfig;r.signal!==void 0&&(o.signal=r.signal);let u=r.documents.map(({document:s})=>$e(s).query),i=r.documents.map(({variables:s})=>s);return gr({url:this.url,query:u,variables:i,headers:{...It(Mr(n)),...It(r.requestHeaders)},operationName:void 0,fetch:this.requestConfig.fetch??qe.default,method:this.requestConfig.method||"POST",fetchOptions:o,middleware:this.requestConfig.requestMiddleware}).then(s=>(this.requestConfig.responseMiddleware&&this.requestConfig.responseMiddleware(s),s.data)).catch(s=>{throw this.requestConfig.responseMiddleware&&this.requestConfig.responseMiddleware(s),s})}setHeaders(t){return this.requestConfig.headers=t,this}setHeader(t,a){let{headers:r}=this.requestConfig;return r?r[t]=a:this.requestConfig.headers={[t]:a},this}setEndpoint(t){return this.url=t,this}},gr=async e=>{let{query:t,variables:a,fetchOptions:r}=e,n=ap(Yn(e.method??"post")),o=Array.isArray(e.query),u=await n(e),i=await np(u,r.jsonSerializer??fa),s=Array.isArray(i)?!i.some(({data:l})=>!l):!!i.data,p=Array.isArray(i)||!i.errors||Array.isArray(i.errors)&&!i.errors.length||r.errorPolicy==="all"||r.errorPolicy==="ignore";if(u.ok&&p&&s){let{errors:l,...y}=(Array.isArray(i),i),d=r.errorPolicy==="ignore"?y:i;return{...o?{data:d}:d,headers:u.headers,status:u.status}}else{let l=typeof i=="string"?{error:i}:i;throw new Qe({...l,status:u.status,headers:u.headers},{query:t,variables:a})}};var rp=(e,t,a,r)=>{let n=r??fa;if(!Array.isArray(e))return n.stringify({query:e,variables:t,operationName:a});if(typeof t<"u"&&!Array.isArray(t))throw new Error("Cannot create request body with given variable type, array expected");let o=e.reduce((u,i,s)=>(u.push({query:i,variables:t?t[s]:void 0}),u),[]);return n.stringify(o)},np=async(e,t)=>{let a;return e.headers.forEach((r,n)=>{n.toLowerCase()==="content-type"&&(a=r)}),a&&(a.toLowerCase().startsWith("application/json")||a.toLowerCase().startsWith("application/graphql+json")||a.toLowerCase().startsWith("application/graphql-response+json"))?t.parse(await e.text()):e.text()},Mr=e=>typeof e=="function"?e():e;var _o=N(require("node:http"),1),vo=N(require("node:https"),1),Ye=N(require("node:zlib"),1),Z=N(require("node:stream"),1),Ft=require("node:buffer");var Lt={};Ze(Lt,{default:()=>ha.default});z(Lt,require("data-uri-to-buffer"));var ha=N(require("data-uri-to-buffer"));var ne=N(require("node:stream"),1),De=require("node:util"),Y=require("node:buffer");var qt={};Ze(qt,{default:()=>Da.default});z(qt,require("fetch-blob"));var Da=N(require("fetch-blob"));xa();var he=class extends Error{constructor(t,a){super(t),Error.captureStackTrace(this,this.constructor),this.type=a}get name(){return this.constructor.name}get[Symbol.toStringTag](){return this.constructor.name}};var G=class extends he{constructor(t,a,r){super(t,a),r&&(this.code=this.errno=r.code,this.erroredSysCall=r.syscall)}};var Ua=Symbol.toStringTag,mr=e=>typeof e=="object"&&typeof e.append=="function"&&typeof e.delete=="function"&&typeof e.get=="function"&&typeof e.getAll=="function"&&typeof e.has=="function"&&typeof e.set=="function"&&typeof e.sort=="function"&&e[Ua]==="URLSearchParams",Nt=e=>e&&typeof e=="object"&&typeof e.arrayBuffer=="function"&&typeof e.type=="string"&&typeof e.stream=="function"&&typeof e.constructor=="function"&&/^(Blob|File)$/.test(e[Ua]),uo=e=>typeof e=="object"&&(e[Ua]==="AbortSignal"||e[Ua]==="EventTarget"),po=(e,t)=>{let a=new URL(t).hostname,r=new URL(e).hostname;return a===r||a.endsWith(`.${r}`)},lo=(e,t)=>{let a=new URL(t).protocol,r=new URL(e).protocol;return a===r};var yp=(0,De.promisify)(ne.default.pipeline),$=Symbol("Body internals"),Me=class{constructor(t,{size:a=0}={}){let r=null;t===null?t=null:mr(t)?t=Y.Buffer.from(t.toString()):Nt(t)||Y.Buffer.isBuffer(t)||(De.types.isAnyArrayBuffer(t)?t=Y.Buffer.from(t):ArrayBuffer.isView(t)?t=Y.Buffer.from(t.buffer,t.byteOffset,t.byteLength):t instanceof ne.default||(t instanceof H.FormData?(t=(0,H.formDataToBlob)(t),r=t.type.split("=")[1]):t=Y.Buffer.from(String(t))));let n=t;Y.Buffer.isBuffer(t)?n=ne.default.Readable.from(t):Nt(t)&&(n=ne.default.Readable.from(t.stream())),this[$]={body:t,stream:n,boundary:r,disturbed:!1,error:null},this.size=a,t instanceof ne.default&&t.on("error",o=>{let u=o instanceof he?o:new G(`Invalid response body while trying to fetch ${this.url}: ${o.message}`,"system",o);this[$].error=u})}get body(){return this[$].stream}get bodyUsed(){return this[$].disturbed}async arrayBuffer(){let{buffer:t,byteOffset:a,byteLength:r}=await fr(this);return t.slice(a,a+r)}async formData(){let t=this.headers.get("content-type");if(t.startsWith("application/x-www-form-urlencoded")){let r=new H.FormData,n=new URLSearchParams(await this.text());for(let[o,u]of n)r.append(o,u);return r}let{toFormData:a}=await Promise.resolve().then(()=>(bo(),So));return a(this.body,t)}async blob(){let t=this.headers&&this.headers.get("content-type")||this[$].body&&this[$].body.type||"",a=await this.arrayBuffer();return new Da.default([a],{type:t})}async json(){let t=await this.text();return JSON.parse(t)}async text(){let t=await fr(this);return new TextDecoder().decode(t)}buffer(){return fr(this)}};Me.prototype.buffer=(0,De.deprecate)(Me.prototype.buffer,"Please use 'response.arrayBuffer()' instead of 'response.buffer()'","node-fetch#buffer");Object.defineProperties(Me.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0},data:{get:(0,De.deprecate)(()=>{},"data doesn't exist, use json(), text(), arrayBuffer(), or body instead","https://github.com/node-fetch/node-fetch/issues/1000 (response)")}});async function fr(e){if(e[$].disturbed)throw new TypeError(`body used already for: ${e.url}`);if(e[$].disturbed=!0,e[$].error)throw e[$].error;let{body:t}=e;if(t===null)return Y.Buffer.alloc(0);if(!(t instanceof ne.default))return Y.Buffer.alloc(0);let a=[],r=0;try{for await(let n of t){if(e.size>0&&r+n.length>e.size){let o=new G(`content size at ${e.url} over limit: ${e.size}`,"max-size");throw t.destroy(o),o}r+=n.length,a.push(n)}}catch(n){throw n instanceof he?n:new G(`Invalid response body while trying to fetch ${e.url}: ${n.message}`,"system",n)}if(t.readableEnded===!0||t._readableState.ended===!0)try{return a.every(n=>typeof n=="string")?Y.Buffer.from(a.join("")):Y.Buffer.concat(a,r)}catch(n){throw new G(`Could not create Buffer from response body for ${e.url}: ${n.message}`,"system",n)}else throw new G(`Premature close of server response while trying to fetch ${e.url}`)}var gt=(e,t)=>{let a,r,{body:n}=e[$];if(e.bodyUsed)throw new Error("cannot clone body after it is used");return n instanceof ne.default&&typeof n.getBoundary!="function"&&(a=new ne.PassThrough({highWaterMark:t}),r=new ne.PassThrough({highWaterMark:t}),n.pipe(a),n.pipe(r),e[$].stream=a,n=r),n},dp=(0,De.deprecate)(e=>e.getBoundary(),"form-data doesn't follow the spec and requires special treatment. Use alternative package","https://github.com/node-fetch/node-fetch/issues/1167"),Ta=(e,t)=>e===null?null:typeof e=="string"?"text/plain;charset=UTF-8":mr(e)?"application/x-www-form-urlencoded;charset=UTF-8":Nt(e)?e.type||null:Y.Buffer.isBuffer(e)||De.types.isAnyArrayBuffer(e)||ArrayBuffer.isView(e)?null:e instanceof H.FormData?`multipart/form-data; boundary=${t[$].boundary}`:e&&typeof e.getBoundary=="function"?`multipart/form-data;boundary=${dp(e)}`:e instanceof ne.default?null:"text/plain;charset=UTF-8",Io=e=>{let{body:t}=e[$];return t===null?0:Nt(t)?t.size:Y.Buffer.isBuffer(t)?t.length:t&&typeof t.getLengthSync=="function"&&t.hasKnownLength&&t.hasKnownLength()?t.getLengthSync():null},go=async(e,{body:t})=>{t===null?e.end():await yp(t,e)};var Pr=require("node:util"),kt=N(require("node:http"),1),wa=typeof kt.default.validateHeaderName=="function"?kt.default.validateHeaderName:e=>{if(!/^[\^`\-\w!#$%&'*+.|~]+$/.test(e)){let t=new TypeError(`Header name must be a valid HTTP token [${e}]`);throw Object.defineProperty(t,"code",{value:"ERR_INVALID_HTTP_TOKEN"}),t}},Er=typeof kt.default.validateHeaderValue=="function"?kt.default.validateHeaderValue:(e,t)=>{if(/[^\t\u0020-\u007E\u0080-\u00FF]/.test(t)){let a=new TypeError(`Invalid character in header content ["${e}"]`);throw Object.defineProperty(a,"code",{value:"ERR_INVALID_CHAR"}),a}},J=class e extends URLSearchParams{constructor(t){let a=[];if(t instanceof e){let r=t.raw();for(let[n,o]of Object.entries(r))a.push(...o.map(u=>[n,u]))}else if(t!=null)if(typeof t=="object"&&!Pr.types.isBoxedPrimitive(t)){let r=t[Symbol.iterator];if(r==null)a.push(...Object.entries(t));else{if(typeof r!="function")throw new TypeError("Header pairs must be iterable");a=[...t].map(n=>{if(typeof n!="object"||Pr.types.isBoxedPrimitive(n))throw new TypeError("Each header pair must be an iterable object");return[...n]}).map(n=>{if(n.length!==2)throw new TypeError("Each header pair must be a name/value tuple");return[...n]})}}else throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");return a=a.length>0?a.map(([r,n])=>(wa(r),Er(r,String(n)),[String(r).toLowerCase(),String(n)])):void 0,super(a),new Proxy(this,{get(r,n,o){switch(n){case"append":case"set":return(u,i)=>(wa(u),Er(u,String(i)),URLSearchParams.prototype[n].call(r,String(u).toLowerCase(),String(i)));case"delete":case"has":case"getAll":return u=>(wa(u),URLSearchParams.prototype[n].call(r,String(u).toLowerCase()));case"keys":return()=>(r.sort(),new Set(URLSearchParams.prototype.keys.call(r)).keys());default:return Reflect.get(r,n,o)}}})}get[Symbol.toStringTag](){return this.constructor.name}toString(){return Object.prototype.toString.call(this)}get(t){let a=this.getAll(t);if(a.length===0)return null;let r=a.join(", ");return/^content-encoding$/i.test(t)&&(r=r.toLowerCase()),r}forEach(t,a=void 0){for(let r of this.keys())Reflect.apply(t,a,[this.get(r),r,this])}*values(){for(let t of this.keys())yield this.get(t)}*entries(){for(let t of this.keys())yield[t,this.get(t)]}[Symbol.iterator](){return this.entries()}raw(){return[...this.keys()].reduce((t,a)=>(t[a]=this.getAll(a),t),{})}[Symbol.for("nodejs.util.inspect.custom")](){return[...this.keys()].reduce((t,a)=>{let r=this.getAll(a);return a==="host"?t[a]=r[0]:t[a]=r.length>1?r:r[0],t},{})}};Object.defineProperties(J.prototype,["get","entries","forEach","values"].reduce((e,t)=>(e[t]={enumerable:!0},e),{}));function Mo(e=[]){return new J(e.reduce((t,a,r,n)=>(r%2===0&&t.push(n.slice(r,r+2)),t),[]).filter(([t,a])=>{try{return wa(t),Er(t,String(a)),!0}catch{return!1}}))}var Sp=new Set([301,302,303,307,308]),Oa=e=>Sp.has(e);var le=Symbol("Response internals"),oe=class e extends Me{constructor(t=null,a={}){super(t,a);let r=a.status!=null?a.status:200,n=new J(a.headers);if(t!==null&&!n.has("Content-Type")){let o=Ta(t,this);o&&n.append("Content-Type",o)}this[le]={type:"default",url:a.url,status:r,statusText:a.statusText||"",headers:n,counter:a.counter,highWaterMark:a.highWaterMark}}get type(){return this[le].type}get url(){return this[le].url||""}get status(){return this[le].status}get ok(){return this[le].status>=200&&this[le].status<300}get redirected(){return this[le].counter>0}get statusText(){return this[le].statusText}get headers(){return this[le].headers}get highWaterMark(){return this[le].highWaterMark}clone(){return new e(gt(this,this.highWaterMark),{type:this.type,url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected,size:this.size,highWaterMark:this.highWaterMark})}static redirect(t,a=302){if(!Oa(a))throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');return new e(null,{headers:{location:new URL(t).toString()},status:a})}static error(){let t=new e(null,{status:0,statusText:""});return t[le].type="error",t}static json(t=void 0,a={}){let r=JSON.stringify(t);if(r===void 0)throw new TypeError("data is not JSON serializable");let n=new J(a&&a.headers);return n.has("content-type")||n.set("content-type","application/json"),new e(r,{...a,headers:n})}get[Symbol.toStringTag](){return"Response"}};Object.defineProperties(oe.prototype,{type:{enumerable:!0},url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}});var Do=require("node:url"),xo=require("node:util");var mo=e=>{if(e.search)return e.search;let t=e.href.length-1,a=e.hash||(e.href[t]==="#"?"#":"");return e.href[t-a.length]==="?"?"?":""};var Ao=require("node:net");function Ro(e,t=!1){return e==null||(e=new URL(e),/^(about|blob|data):$/.test(e.protocol))?"no-referrer":(e.username="",e.password="",e.hash="",t&&(e.pathname="",e.search=""),e)}var fo=new Set(["","no-referrer","no-referrer-when-downgrade","same-origin","origin","strict-origin","origin-when-cross-origin","strict-origin-when-cross-origin","unsafe-url"]),Po="strict-origin-when-cross-origin";function Eo(e){if(!fo.has(e))throw new TypeError(`Invalid referrerPolicy: ${e}`);return e}function bp(e){if(/^(http|ws)s:$/.test(e.protocol))return!0;let t=e.host.replace(/(^\[)|(]$)/g,""),a=(0,Ao.isIP)(t);return a===4&&/^127\./.test(t)||a===6&&/^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(t)?!0:e.host==="localhost"||e.host.endsWith(".localhost")?!1:e.protocol==="file:"}function Mt(e){return/^about:(blank|srcdoc)$/.test(e)||e.protocol==="data:"||/^(blob|filesystem):$/.test(e.protocol)?!0:bp(e)}function Co(e,{referrerURLCallback:t,referrerOriginCallback:a}={}){if(e.referrer==="no-referrer"||e.referrerPolicy==="")return null;let r=e.referrerPolicy;if(e.referrer==="about:client")return"no-referrer";let n=e.referrer,o=Ro(n),u=Ro(n,!0);o.toString().length>4096&&(o=u),t&&(o=t(o)),a&&(u=a(u));let i=new URL(e.url);switch(r){case"no-referrer":return"no-referrer";case"origin":return u;case"unsafe-url":return o;case"strict-origin":return Mt(o)&&!Mt(i)?"no-referrer":u.toString();case"strict-origin-when-cross-origin":return o.origin===i.origin?o:Mt(o)&&!Mt(i)?"no-referrer":u;case"same-origin":return o.origin===i.origin?o:"no-referrer";case"origin-when-cross-origin":return o.origin===i.origin?o:u;case"no-referrer-when-downgrade":return Mt(o)&&!Mt(i)?"no-referrer":o;default:throw new TypeError(`Invalid referrerPolicy: ${r}`)}}function ho(e){let t=(e.get("referrer-policy")||"").split(/[,\s]+/),a="";for(let r of t)r&&fo.has(r)&&(a=r);return a}var B=Symbol("Request internals"),jt=e=>typeof e=="object"&&typeof e[B]=="object",Ip=(0,xo.deprecate)(()=>{},".data is not a valid RequestInit property, use .body instead","https://github.com/node-fetch/node-fetch/issues/1000 (request)"),Ke=class e extends Me{constructor(t,a={}){let r;if(jt(t)?r=new URL(t.url):(r=new URL(t),t={}),r.username!==""||r.password!=="")throw new TypeError(`${r} is an url with embedded credentials.`);let n=a.method||t.method||"GET";if(/^(delete|get|head|options|post|put)$/i.test(n)&&(n=n.toUpperCase()),!jt(a)&&"data"in a&&Ip(),(a.body!=null||jt(t)&&t.body!==null)&&(n==="GET"||n==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");let o=a.body?a.body:jt(t)&&t.body!==null?gt(t):null;super(o,{size:a.size||t.size||0});let u=new J(a.headers||t.headers||{});if(o!==null&&!u.has("Content-Type")){let p=Ta(o,this);p&&u.set("Content-Type",p)}let i=jt(t)?t.signal:null;if("signal"in a&&(i=a.signal),i!=null&&!uo(i))throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");let s=a.referrer==null?t.referrer:a.referrer;if(s==="")s="no-referrer";else if(s){let p=new URL(s);s=/^about:(\/\/)?client$/.test(p)?"client":p}else s=void 0;this[B]={method:n,redirect:a.redirect||t.redirect||"follow",headers:u,parsedURL:r,signal:i,referrer:s},this.follow=a.follow===void 0?t.follow===void 0?20:t.follow:a.follow,this.compress=a.compress===void 0?t.compress===void 0?!0:t.compress:a.compress,this.counter=a.counter||t.counter||0,this.agent=a.agent||t.agent,this.highWaterMark=a.highWaterMark||t.highWaterMark||16384,this.insecureHTTPParser=a.insecureHTTPParser||t.insecureHTTPParser||!1,this.referrerPolicy=a.referrerPolicy||t.referrerPolicy||""}get method(){return this[B].method}get url(){return(0,Do.format)(this[B].parsedURL)}get headers(){return this[B].headers}get redirect(){return this[B].redirect}get signal(){return this[B].signal}get referrer(){if(this[B].referrer==="no-referrer")return"";if(this[B].referrer==="client")return"about:client";if(this[B].referrer)return this[B].referrer.toString()}get referrerPolicy(){return this[B].referrerPolicy}set referrerPolicy(t){this[B].referrerPolicy=Eo(t)}clone(){return new e(this)}get[Symbol.toStringTag](){return"Request"}};Object.defineProperties(Ke.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0},referrer:{enumerable:!0},referrerPolicy:{enumerable:!0}});var Uo=e=>{let{parsedURL:t}=e[B],a=new J(e[B].headers);a.has("Accept")||a.set("Accept","*/*");let r=null;if(e.body===null&&/^(post|put)$/i.test(e.method)&&(r="0"),e.body!==null){let i=Io(e);typeof i=="number"&&!Number.isNaN(i)&&(r=String(i))}r&&a.set("Content-Length",r),e.referrerPolicy===""&&(e.referrerPolicy=Po),e.referrer&&e.referrer!=="no-referrer"?e[B].referrer=Co(e):e[B].referrer="no-referrer",e[B].referrer instanceof URL&&a.set("Referer",e.referrer),a.has("User-Agent")||a.set("User-Agent","node-fetch"),e.compress&&!a.has("Accept-Encoding")&&a.set("Accept-Encoding","gzip, deflate, br");let{agent:n}=e;typeof n=="function"&&(n=n(t));let o=mo(t),u={path:t.pathname+o,method:e.method,headers:a[Symbol.for("nodejs.util.inspect.custom")](),insecureHTTPParser:e.insecureHTTPParser,agent:n};return{parsedURL:t,options:u}};var Ba=class extends he{constructor(t,a="aborted"){super(t,a)}};xa();Rr();var gp=new Set(["data:","http:","https:"]);async function La(e,t){return new Promise((a,r)=>{let n=new Ke(e,t),{parsedURL:o,options:u}=Uo(n);if(!gp.has(o.protocol))throw new TypeError(`node-fetch cannot load ${e}. URL scheme "${o.protocol.replace(/:$/,"")}" is not supported.`);if(o.protocol==="data:"){let c=(0,ha.default)(n.url),b=new oe(c,{headers:{"Content-Type":c.typeFull}});a(b);return}let i=(o.protocol==="https:"?vo.default:_o.default).request,{signal:s}=n,p=null,l=()=>{let c=new Ba("The operation was aborted.");r(c),n.body&&n.body instanceof Z.default.Readable&&n.body.destroy(c),!(!p||!p.body)&&p.body.emit("error",c)};if(s&&s.aborted){l();return}let y=()=>{l(),g()},d=i(o.toString(),u);s&&s.addEventListener("abort",y);let g=()=>{d.abort(),s&&s.removeEventListener("abort",y)};d.on("error",c=>{r(new G(`request to ${n.url} failed, reason: ${c.message}`,"system",c)),g()}),Mp(d,c=>{p&&p.body&&p.body.destroy(c)}),process.version<"v14"&&d.on("socket",c=>{let b;c.prependListener("end",()=>{b=c._eventsCount}),c.prependListener("close",S=>{if(p&&b<c._eventsCount&&!S){let I=new Error("Premature close");I.code="ERR_STREAM_PREMATURE_CLOSE",p.body.emit("error",I)}})}),d.on("response",c=>{d.setTimeout(0);let b=Mo(c.rawHeaders);if(Oa(c.statusCode)){let m=b.get("Location"),P=null;try{P=m===null?null:new URL(m,n.url)}catch{if(n.redirect!=="manual"){r(new G(`uri requested responds with an invalid redirect URL: ${m}`,"invalid-redirect")),g();return}}switch(n.redirect){case"error":r(new G(`uri requested responds with a redirect, redirect mode is set to error: ${n.url}`,"no-redirect")),g();return;case"manual":break;case"follow":{if(P===null)break;if(n.counter>=n.follow){r(new G(`maximum redirect reached at: ${n.url}`,"max-redirect")),g();return}let A={headers:new J(n.headers),follow:n.follow,counter:n.counter+1,agent:n.agent,compress:n.compress,method:n.method,body:gt(n),signal:n.signal,size:n.size,referrer:n.referrer,referrerPolicy:n.referrerPolicy};if(!po(n.url,P)||!lo(n.url,P))for(let q of["authorization","www-authenticate","cookie","cookie2"])A.headers.delete(q);if(c.statusCode!==303&&n.body&&t.body instanceof Z.default.Readable){r(new G("Cannot follow redirect with body being a readable stream","unsupported-redirect")),g();return}(c.statusCode===303||(c.statusCode===301||c.statusCode===302)&&n.method==="POST")&&(A.method="GET",A.body=void 0,A.headers.delete("content-length"));let U=ho(b);U&&(A.referrerPolicy=U),a(La(new Ke(P,A))),g();return}default:return r(new TypeError(`Redirect option '${n.redirect}' is not a valid value of RequestRedirect`))}}s&&c.once("end",()=>{s.removeEventListener("abort",y)});let S=(0,Z.pipeline)(c,new Z.PassThrough,m=>{m&&r(m)});process.version<"v12.10"&&c.on("aborted",y);let I={url:n.url,status:c.statusCode,statusText:c.statusMessage,headers:b,size:n.size,counter:n.counter,highWaterMark:n.highWaterMark},R=b.get("Content-Encoding");if(!n.compress||n.method==="HEAD"||R===null||c.statusCode===204||c.statusCode===304){p=new oe(S,I),a(p);return}let f={flush:Ye.default.Z_SYNC_FLUSH,finishFlush:Ye.default.Z_SYNC_FLUSH};if(R==="gzip"||R==="x-gzip"){S=(0,Z.pipeline)(S,Ye.default.createGunzip(f),m=>{m&&r(m)}),p=new oe(S,I),a(p);return}if(R==="deflate"||R==="x-deflate"){let m=(0,Z.pipeline)(c,new Z.PassThrough,P=>{P&&r(P)});m.once("data",P=>{(P[0]&15)===8?S=(0,Z.pipeline)(S,Ye.default.createInflate(),A=>{A&&r(A)}):S=(0,Z.pipeline)(S,Ye.default.createInflateRaw(),A=>{A&&r(A)}),p=new oe(S,I),a(p)}),m.once("end",()=>{p||(p=new oe(S,I),a(p))});return}if(R==="br"){S=(0,Z.pipeline)(S,Ye.default.createBrotliDecompress(),m=>{m&&r(m)}),p=new oe(S,I),a(p);return}p=new oe(S,I),a(p)}),go(d,n).catch(r)})}function Mp(e,t){let a=Ft.Buffer.from(`0\r
\r
`),r=!1,n=!1,o;e.on("response",u=>{let{headers:i}=u;r=i["transfer-encoding"]==="chunked"&&!i["content-length"]}),e.on("socket",u=>{let i=()=>{if(r&&!n){let p=new Error("Premature close");p.code="ERR_STREAM_PREMATURE_CLOSE",t(p)}},s=p=>{n=Ft.Buffer.compare(p.slice(-5),a)===0,!n&&o&&(n=Ft.Buffer.compare(o.slice(-3),a.slice(0,3))===0&&Ft.Buffer.compare(p.slice(-2),a.slice(3))===0),o=p};u.prependListener("close",i),u.on("data",s),e.on("close",()=>{u.removeListener("close",i),u.removeListener("data",s)})})}var M=N(require("graphql-tag")),zt=M.default`
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
`,mp=M.default`
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
`,me=M.default`
  fragment UserFields on User {
    id
    avatarUrl
    name
    login
    isViewer
  }
`,Ht=M.default`
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
`,qa=M.default`
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
`,Rp=M.default`
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
`,To=M.default`
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
`,wo=M.default`
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
`,Oo=M.default`
  fragment RepositoryMentionFields on Repository {
    nameWithOwner
    description
    isPrivate
    isArchived
    owner {
      avatarUrl(size: 64)
    }
  }
`,Ap=M.default`
  fragment ProjectViewerFields on ProjectV2View {
    id
    name
    number
  }
`,Bo=M.default`
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
  ${Ap}
`,Lo=M.default`
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
`,fp=M.default`
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
`,Pp=M.default`
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
`,qo=M.default`
  fragment CommitFields on Commit {
    authoredDate
    oid
    message
  }
`,Cr=M.default`
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
`,Ep=M.default`
  fragment ReleaseFields on Release {
    id
    description
    name
    publishedAt
    createdAt
    tagName
    url
  }
`,Cp=M.default`
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
`,hp=M.default`
  mutation createRef($input: CreateRefInput!) {
    createRef(input: $input) {
      clientMutationId
      ref {
        id
        name
      }
    }
  }
`,Dp=M.default`
  mutation deleteLinkedBranch($input: DeleteLinkedBranchInput!) {
    deleteLinkedBranch(input: $input) {
      clientMutationId
    }
  }
`,xp=M.default`
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
  ${mp}
`,Up=M.default`
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
`,_p=M.default`
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
`,vp=M.default`
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
`,Tp=M.default`
  query issueDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...IssueDetailFields
    }
  }
  ${Rp}
`,wp=M.default`
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
  ${qa}
`,Op=M.default`
  query issueByNumber($owner: String!, $name: String!, $issueNumber: Int!) {
    repository(owner: $owner, name: $name) {
      issue(number: $issueNumber) {
        ...IssueFields
      }
    }
  }
  ${qa}
`,Bp=M.default`
  mutation closeIssue($nodeId: ID!, $stateReason: IssueClosedStateReason!) {
    closeIssue(input: { issueId: $nodeId, stateReason: $stateReason }) {
      issue {
        id
      }
    }
  }
`,Lp=M.default`
  mutation reopenIssue($nodeId: ID!) {
    reopenIssue(input: { issueId: $nodeId }) {
      issue {
        id
      }
    }
  }
`,qp=M.default`
  mutation changeIssueAssignees($issueId: ID!, $assigneeIds: [ID!]) {
    updateIssue(input: { id: $issueId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,Np=M.default`
  mutation changeIssueMilestone($issueId: ID!, $milestoneId: ID) {
    updateIssue(input: { id: $issueId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,Vp=M.default`
  mutation addIssueToProject($issueId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $issueId }) {
      clientMutationId
    }
  }
`,kp=M.default`
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
  ${qa}
`,jp=M.default`
  query searchIssueMentions($query: String!, $numberOfItems: Int!) {
    search(query: $query, type: ISSUE, first: $numberOfItems) {
      nodes {
        ... on Issue {
          ...IssueMentionFields
        }
      }
    }
  }
  ${To}
`,Fp=M.default`
  query searchPullRequestMentions($query: String!, $numberOfItems: Int!) {
    search(query: $query, type: ISSUE, first: $numberOfItems) {
      nodes {
        ... on PullRequest {
          ...PullRequestMentionFields
        }
      }
    }
  }
  ${wo}
`,zp=M.default`
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
  ${To}
  ${wo}
`,Hp=M.default`
  query searchRepositoryMentions($query: String!, $numberOfItems: Int!) {
    search(query: $query, type: REPOSITORY, first: $numberOfItems) {
      nodes {
        ... on Repository {
          ...RepositoryMentionFields
        }
      }
    }
  }
  ${Oo}
`,Gp=M.default`
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
  ${Oo}
`,$p=M.default`
  mutation changeProjectStatus($projectId: ID!, $closed: Boolean!) {
    updateProjectV2(input: { projectId: $projectId, closed: $closed }) {
      clientMutationId
    }
  }
`,Qp=M.default`
  query projectDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...ProjectFields
    }
  }
  ${Bo}
`,Wp=M.default`
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
  ${Lo}
`,Kp=M.default`
  query pullRequestDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...PullRequestDetailsFields
    }
  }
  ${fp}
`,Yp=M.default`
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
`,Jp=M.default`
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
`,Zp=M.default`
  query pullRequestCommits($nodeId: ID!, $numberOfItems: Int!, $before: String) {
    node(id: $nodeId) {
      ...PullRequestCommitFields
    }
  }
  ${Pp}
`,Xp=M.default`
  mutation closePullRequest($nodeId: ID!) {
    closePullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,el=M.default`
  mutation reopenPullRequest($nodeId: ID!) {
    reopenPullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,tl=M.default`
  mutation markPullRequestReadyForReview($nodeId: ID!) {
    markPullRequestReadyForReview(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,al=M.default`
  mutation addPullRequestReview($nodeId: ID!, $event: PullRequestReviewEvent, $body: String) {
    addPullRequestReview(input: { pullRequestId: $nodeId, event: $event, body: $body }) {
      pullRequestReview {
        id
      }
    }
  }
`,rl=M.default`
  mutation changePullRequestAssignees($pullRequestId: ID!, $assigneeIds: [ID!]) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,nl=M.default`
  mutation changePullRequestMilestone($pullRequestId: ID!, $milestoneId: ID) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,ol=M.default`
  mutation addPullRequestToProject($pullRequestId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $pullRequestId }) {
      clientMutationId
    }
  }
`,il=M.default`
  mutation requestReview($pullRequestId: ID!, $collaboratorId: ID!) {
    requestReviews(input: { pullRequestId: $pullRequestId, userIds: [$collaboratorId], union: true }) {
      clientMutationId
    }
  }
`,sl=M.default`
  mutation mergePullRequest($nodeId: ID!, $method: PullRequestMergeMethod!) {
    mergePullRequest(input: { pullRequestId: $nodeId, mergeMethod: $method }) {
      pullRequest {
        nodeId: id
      }
    }
  }
`,ul=M.default`
  mutation addPullRequestToMergeQueue($nodeId: ID!) {
    enqueuePullRequest(input: { pullRequestId: $nodeId }) {
      __typename
    }
  }
`,pl=M.default`
  mutation removePullRequestFromMergeQueue($nodeId: ID!) {
    dequeuePullRequest(input: { id: $nodeId }) {
      __typename
    }
  }
`,ll=M.default`
  mutation enablePullRequestAutoMerge($nodeId: ID!, $mergeMethod: PullRequestMergeMethod) {
    enablePullRequestAutoMerge(input: { pullRequestId: $nodeId, mergeMethod: $mergeMethod }) {
      pullRequest {
        id
      }
    }
  }
`,cl=M.default`
  mutation disablePullRequestAutoMerge($nodeId: ID!) {
    disablePullRequestAutoMerge(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,yl=M.default`
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
`,dl=M.default`
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
  ${Lo}
`,Sl=M.default`
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
  ${Cr}
`,bl=M.default`
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
  ${Cr}
`,Il=M.default`
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
`,gl=M.default`
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
`,Ml=M.default`
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
  ${qo}
  ${me}
`,ml=M.default`
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
  ${qo}
`,Rl=M.default`
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
  ${qa}
`,Al=M.default`
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
  ${Ep}
`,fl=M.default`
  mutation addStar($repositoryId: ID!) {
    addStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,Pl=M.default`
  mutation removeStar($repositoryId: ID!) {
    removeStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,El=M.default`
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
  ${Cr}
`,Cl=M.default`
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
  ${Bo}
`,hl=M.default`
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
`,Dl=M.default`
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
`,xl=(e,t,a,r)=>e();function No(e,t=xl){return{createLinkedBranch(a,r,n){return t(o=>e.request({document:Cp,variables:a,requestHeaders:{...r,...o},signal:n}),"createLinkedBranch","mutation",a)},createRef(a,r,n){return t(o=>e.request({document:hp,variables:a,requestHeaders:{...r,...o},signal:n}),"createRef","mutation",a)},deleteLinkedBranch(a,r,n){return t(o=>e.request({document:Dp,variables:a,requestHeaders:{...r,...o},signal:n}),"deleteLinkedBranch","mutation",a)},searchDiscussions(a,r,n){return t(o=>e.request({document:xp,variables:a,requestHeaders:{...r,...o},signal:n}),"searchDiscussions","query",a)},getGitHubDiscussionNumber(a,r,n){return t(o=>e.request({document:Up,variables:a,requestHeaders:{...r,...o},signal:n}),"getGitHubDiscussionNumber","query",a)},repositoryCollaboratorsForIssues(a,r,n){return t(o=>e.request({document:_p,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryCollaboratorsForIssues","query",a)},repositoryProjectsForIssues(a,r,n){return t(o=>e.request({document:vp,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryProjectsForIssues","query",a)},issueDetails(a,r,n){return t(o=>e.request({document:Tp,variables:a,requestHeaders:{...r,...o},signal:n}),"issueDetails","query",a)},searchIssues(a,r,n){return t(o=>e.request({document:wp,variables:a,requestHeaders:{...r,...o},signal:n}),"searchIssues","query",a)},issueByNumber(a,r,n){return t(o=>e.request({document:Op,variables:a,requestHeaders:{...r,...o},signal:n}),"issueByNumber","query",a)},closeIssue(a,r,n){return t(o=>e.request({document:Bp,variables:a,requestHeaders:{...r,...o},signal:n}),"closeIssue","mutation",a)},reopenIssue(a,r,n){return t(o=>e.request({document:Lp,variables:a,requestHeaders:{...r,...o},signal:n}),"reopenIssue","mutation",a)},changeIssueAssignees(a,r,n){return t(o=>e.request({document:qp,variables:a,requestHeaders:{...r,...o},signal:n}),"changeIssueAssignees","mutation",a)},changeIssueMilestone(a,r,n){return t(o=>e.request({document:Np,variables:a,requestHeaders:{...r,...o},signal:n}),"changeIssueMilestone","mutation",a)},addIssueToProject(a,r,n){return t(o=>e.request({document:Vp,variables:a,requestHeaders:{...r,...o},signal:n}),"addIssueToProject","mutation",a)},createIssue(a,r,n){return t(o=>e.request({document:kp,variables:a,requestHeaders:{...r,...o},signal:n}),"createIssue","mutation",a)},searchIssueMentions(a,r,n){return t(o=>e.request({document:jp,variables:a,requestHeaders:{...r,...o},signal:n}),"searchIssueMentions","query",a)},searchPullRequestMentions(a,r,n){return t(o=>e.request({document:Fp,variables:a,requestHeaders:{...r,...o},signal:n}),"searchPullRequestMentions","query",a)},issueOrPullRequestMention(a,r,n){return t(o=>e.request({document:zp,variables:a,requestHeaders:{...r,...o},signal:n}),"issueOrPullRequestMention","query",a)},searchRepositoryMentions(a,r,n){return t(o=>e.request({document:Hp,variables:a,requestHeaders:{...r,...o},signal:n}),"searchRepositoryMentions","query",a)},viewerRepositoryMentions(a,r,n){return t(o=>e.request({document:Gp,variables:a,requestHeaders:{...r,...o},signal:n}),"viewerRepositoryMentions","query",a)},changeProjectStatus(a,r,n){return t(o=>e.request({document:$p,variables:a,requestHeaders:{...r,...o},signal:n}),"changeProjectStatus","mutation",a)},projectDetails(a,r,n){return t(o=>e.request({document:Qp,variables:a,requestHeaders:{...r,...o},signal:n}),"projectDetails","query",a)},searchPullRequests(a,r,n){return t(o=>e.request({document:Wp,variables:a,requestHeaders:{...r,...o},signal:n}),"searchPullRequests","query",a)},pullRequestDetails(a,r,n){return t(o=>e.request({document:Kp,variables:a,requestHeaders:{...r,...o},signal:n}),"pullRequestDetails","query",a)},repositoryCollaboratorsForPullRequests(a,r,n){return t(o=>e.request({document:Yp,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryCollaboratorsForPullRequests","query",a)},repositoryProjectsForPullRequests(a,r,n){return t(o=>e.request({document:Jp,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryProjectsForPullRequests","query",a)},pullRequestCommits(a,r,n){return t(o=>e.request({document:Zp,variables:a,requestHeaders:{...r,...o},signal:n}),"pullRequestCommits","query",a)},closePullRequest(a,r,n){return t(o=>e.request({document:Xp,variables:a,requestHeaders:{...r,...o},signal:n}),"closePullRequest","mutation",a)},reopenPullRequest(a,r,n){return t(o=>e.request({document:el,variables:a,requestHeaders:{...r,...o},signal:n}),"reopenPullRequest","mutation",a)},markPullRequestReadyForReview(a,r,n){return t(o=>e.request({document:tl,variables:a,requestHeaders:{...r,...o},signal:n}),"markPullRequestReadyForReview","mutation",a)},addPullRequestReview(a,r,n){return t(o=>e.request({document:al,variables:a,requestHeaders:{...r,...o},signal:n}),"addPullRequestReview","mutation",a)},changePullRequestAssignees(a,r,n){return t(o=>e.request({document:rl,variables:a,requestHeaders:{...r,...o},signal:n}),"changePullRequestAssignees","mutation",a)},changePullRequestMilestone(a,r,n){return t(o=>e.request({document:nl,variables:a,requestHeaders:{...r,...o},signal:n}),"changePullRequestMilestone","mutation",a)},addPullRequestToProject(a,r,n){return t(o=>e.request({document:ol,variables:a,requestHeaders:{...r,...o},signal:n}),"addPullRequestToProject","mutation",a)},requestReview(a,r,n){return t(o=>e.request({document:il,variables:a,requestHeaders:{...r,...o},signal:n}),"requestReview","mutation",a)},mergePullRequest(a,r,n){return t(o=>e.request({document:sl,variables:a,requestHeaders:{...r,...o},signal:n}),"mergePullRequest","mutation",a)},addPullRequestToMergeQueue(a,r,n){return t(o=>e.request({document:ul,variables:a,requestHeaders:{...r,...o},signal:n}),"addPullRequestToMergeQueue","mutation",a)},removePullRequestFromMergeQueue(a,r,n){return t(o=>e.request({document:pl,variables:a,requestHeaders:{...r,...o},signal:n}),"removePullRequestFromMergeQueue","mutation",a)},enablePullRequestAutoMerge(a,r,n){return t(o=>e.request({document:ll,variables:a,requestHeaders:{...r,...o},signal:n}),"enablePullRequestAutoMerge","mutation",a)},disablePullRequestAutoMerge(a,r,n){return t(o=>e.request({document:cl,variables:a,requestHeaders:{...r,...o},signal:n}),"disablePullRequestAutoMerge","mutation",a)},createPullRequest(a,r,n){return t(o=>e.request({document:yl,variables:a,requestHeaders:{...r,...o},signal:n}),"createPullRequest","mutation",a)},initPullRequest(a,r,n){return t(o=>e.request({document:dl,variables:a,requestHeaders:{...r,...o},signal:n}),"initPullRequest","mutation",a)},searchRepositories(a,r,n){return t(o=>e.request({document:Sl,variables:a,requestHeaders:{...r,...o},signal:n}),"searchRepositories","query",a)},myLatestRepositories(a,r,n){return t(o=>e.request({document:bl,variables:a,requestHeaders:{...r,...o},signal:n}),"myLatestRepositories","query",a)},milestonesForRepository(a,r,n){return t(o=>e.request({document:Il,variables:a,requestHeaders:{...r,...o},signal:n}),"milestonesForRepository","query",a)},commentsForPullRequest(a,r,n){return t(o=>e.request({document:gl,variables:a,requestHeaders:{...r,...o},signal:n}),"commentsForPullRequest","query",a)},dataForRepository(a,r,n){return t(o=>e.request({document:Ml,variables:a,requestHeaders:{...r,...o},signal:n}),"dataForRepository","query",a)},searchRepositoryBranches(a,r,n){return t(o=>e.request({document:ml,variables:a,requestHeaders:{...r,...o},signal:n}),"searchRepositoryBranches","query",a)},repositoryIssues(a,r,n){return t(o=>e.request({document:Rl,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryIssues","query",a)},repositoryReleases(a,r,n){return t(o=>e.request({document:Al,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryReleases","query",a)},addStar(a,r,n){return t(o=>e.request({document:fl,variables:a,requestHeaders:{...r,...o},signal:n}),"addStar","mutation",a)},removeStar(a,r,n){return t(o=>e.request({document:Pl,variables:a,requestHeaders:{...r,...o},signal:n}),"removeStar","mutation",a)},myStarredRepositories(a,r,n){return t(o=>e.request({document:El,variables:a,requestHeaders:{...r,...o},signal:n}),"myStarredRepositories","query",a)},getViewer(a,r,n){return t(o=>e.request({document:Cl,variables:a,requestHeaders:{...r,...o},signal:n}),"getViewer","query",a)},getViewerStats(a,r,n){return t(o=>e.request({document:hl,variables:a,requestHeaders:{...r,...o},signal:n}),"getViewerStats","query",a)},getViewerStatsDetails(a,r,n){return t(o=>e.request({document:Dl,variables:a,requestHeaders:{...r,...o},signal:n}),"getViewerStatsDetails","query",a)}}}var hr=null,Dr=null,Fo=null,Ul=(0,ko.getPreferenceValues)();function _l({token:e,type:t}){let a=t==="personal"?`token ${e}`:`bearer ${e}`;Fo=e,hr=No(new Ca("https://api.github.com/graphql",{headers:{authorization:a}})),Dr=new Vo.Octokit({auth:e,request:{fetch:La}})}var zo=jo.OAuthService.github({personalAccessToken:Ul.personalAccessToken,scope:"notifications repo project read:org read:user read:packages",onAuthorize:_l});function Ve(){if(!hr||!Dr)throw new Error("GitHub clients not initialized");return{github:hr,octokit:Dr,token:Fo}}var _=require("@raycast/api"),Ho=require("date-fns");function vl(e,t){return`notification_referrer_id=${Buffer.from(`018:NotificationThread${e}:${t}`).toString("base64")}`}function xr(e,t,a,r=""){let n=e.replace("api.github.com/repos","github.com");if(n.indexOf("/pulls/")!==-1&&(n=n.replace("/pulls/","/pull/")),n.indexOf("/releases/")!==-1&&(n=n.replace("/repos",""),n=n.substring(0,n.lastIndexOf("/"))),a){let o=vl(t,a);return`${n}?${o}${r}`}return n}var Tl=e=>e?/comments\/(?<id>\d+)/g.exec(e)?.groups?.id:void 0;async function Go(e,t){if(e.subject.url){let a=Tl(e.subject.latest_comment_url);return xr(e.subject.url,e.id,t,a?"#issuecomment-"+a:void 0)}else{if(e.subject.type==="CheckSuite")return xr(`${e.repository.html_url}/actions`,e.id,t);if(e.subject.type==="Discussion"){let a=null;try{a=await Bl(e)}catch(r){console.error("Failed to get discussion number",r)}return xr(`${e.repository.html_url}/discussions/${a??""}`,e.id,t)}}return e.url}async function $o(e){try{if(e.subject.type==="PullRequest"){let{octokit:a}=Ve(),r=await a.pulls.get({owner:e.repository.owner.login,repo:e.repository.name,pull_number:parseInt(e.subject.url.split("/").at(-1))});return r.data.merged?{value:{source:"pull-request-merged.svg",tintColor:_.Color.Purple},tooltip:"Merged"}:r.data.state==="closed"?{value:{source:"pull-request-closed.svg",tintColor:_.Color.Red},tooltip:"Closed"}:r.data.draft?{value:{source:"pull-request-draft.svg",tintColor:_.Color.SecondaryText},tooltip:"Draft"}:{value:{source:"pull-request-open.svg",tintColor:_.Color.Green},tooltip:"Open"}}if(e.subject.type==="Issue"){let{octokit:a}=Ve(),r=await a.rest.issues.get({owner:e.repository.owner.login,repo:e.repository.name,issue_number:parseInt(e.subject.url.split("/").at(-1))});return r.data.state==="closed"?r.data.state_reason==="completed"?{value:{source:"issue-closed.svg",tintColor:_.Color.Purple},tooltip:"Closed as completed"}:r.data.state_reason==="not_planned"?{value:{source:"skip.svg",tintColor:_.Color.SecondaryText},tooltip:"Closed as not planned"}:{value:{source:"issue-closed.svg",tintColor:_.Color.Purple},tooltip:"Closed"}:{value:{source:"issue-open.svg",tintColor:_.Color.Green},tooltip:"Open"}}let t;switch(e.subject.type){case"Commit":t={value:{source:"commit.svg"},tooltip:"Commit"};break;case"Release":t={value:{source:"tag.svg",tintColor:_.Color.Blue},tooltip:"Release"};break;case"CheckSuite":t={value:e.subject.title.match(/(succeeded)/i)?{source:_.Icon.CheckCircle,tintColor:_.Color.Green}:e.subject.title.match(/(failed)/i)?{source:_.Icon.XMarkCircle,tintColor:_.Color.Red}:e.subject.title.match(/(skipped|cancelled)/i)?{source:"skip.svg",tintColor:_.Color.SecondaryText}:{source:_.Icon.QuestionMarkCircle,tintColor:_.Color.SecondaryText},tooltip:"Workflow Run"};break;case"Discussion":t={value:{source:"comment-discussion.svg"},tooltip:"Comment"};break;case"RepositoryInvitation":t={value:{source:"mail.svg"},tooltip:"Repository Invitation"};break;case"RepositoryVulnerabilityAlert":t={value:{source:"alert.svg"},tooltip:"Repository} Vulnerability Alert"};break;default:t={value:{source:_.Icon.Circle},tooltip:"Unknown"};break}return t.tooltip=`Subject type: ${t.tooltip}`,t}catch{return{value:{source:_.Icon.Warning,tintColor:_.Color.Red},tooltip:"Could not load icon"}}}function Qo(e){let t=wl(e),a=Ol(e);return a?`${a} \uFF65 ${e.repository.full_name} \uFF65 ${t}`:`${e.repository.full_name} \uFF65 ${t}`}function wl(e){switch(e.reason){case"assign":return"Assigned";case"author":return"Author";case"comment":return"Commented";case"ci_activity":return"CI Activity";case"invitation":return"Invited";case"manual":return"Subscribed";case"mention":return"Mentioned";case"review_requested":return"Review Requested";case"security_alert":return"Security Alert";case"state_change":return"Changed";case"subscribed":return"Watching";case"team_mention":return"Team Mentioned";default:return""}}function Ol(e){if(e.subject.type!=="Issue"&&e.subject.type!=="PullRequest")return;let t=e.subject.url?.split("/").at(-1);return t?`#${t}`:void 0}function Wo(e){return`Updated: ${(0,Ho.format)(e,"EEEE d MMMM yyyy 'at' HH:mm")}`}function Ur(e=!1){return{source:e?"github-unread.svg":"github.svg",tintColor:_.Color.PrimaryText}}async function Bl(e){let{github:t}=Ve(),a=e.repository.full_name,r=e.updated_at.split("T")[0],n=e.subject.title;return(await t.getGitHubDiscussionNumber({filter:`repo:${a} updated:>=${r} in:title ${n}`}))?.search?.nodes?.[0]?.number??null}var Ko=N(Bt());var Yo=(0,Ko.withAccessToken)(zo);var Jo=N(Bt());function Zo(){let{github:e}=Ve(),{data:t}=(0,Jo.useCachedPromise)(async()=>(await e.getViewer()).viewer);return t}var X=require("react/jsx-runtime"),Je=(0,E.getPreferenceValues)();function Ll(){let{octokit:e}=Ve(),t=Zo(),a=(0,ei.useMemo)(()=>Je.repositoryList?Je.repositoryList.split(",").map(l=>l.trim()).filter(l=>l.length>0):[],[Je.repositoryList]),{data:r,isLoading:n,mutate:o}=(0,Xo.useCachedPromise)(async()=>{let y=await e.paginate(e.activity.listNotificationsForAuthenticatedUser,{per_page:50});return Je.repositoryFilterMode!=="all"&&a.length>0&&(Je.repositoryFilterMode==="include"?y=y.filter(d=>a.some(g=>g.toLowerCase()===d.repository.full_name.toLowerCase())):y=y.filter(d=>!a.some(g=>g.toLowerCase()===d.repository.full_name.toLowerCase()))),Promise.all(y.map(async d=>{let g=await $o(d);return{...d,icon:g}}))}),u=r&&r.length>0;async function i(){try{await o(e.activity.markNotificationsAsRead(),{optimisticUpdate(){return[]}}),(0,E.showToast)({style:E.Toast.Style.Success,title:"Marked all notifications as read"})}catch{(0,E.showToast)({style:E.Toast.Style.Failure,title:"Could not mark all notifications as read"})}}async function s(l){try{await o((async()=>{l.subject.type==="RepositoryInvitation"?(0,E.open)(`${l.repository.html_url}/invitations`):(await(0,E.open)(await Go(l,t?.id)),await e.activity.markThreadAsRead({thread_id:parseInt(l.id)}))})(),{optimisticUpdate(d){return d?.filter(g=>g.id!==l.id)??[]}})}catch{(0,E.showToast)({style:E.Toast.Style.Failure,title:"Could not open notification"})}}async function p(l){try{await o(e.activity.markThreadAsRead({thread_id:parseInt(l.id)}),{optimisticUpdate(y){return y?.filter(d=>d.id!==l.id)??[]}})}catch{(0,E.showToast)({style:E.Toast.Style.Failure,title:"Could not mark notification as read"})}}return!Je.alwaysShow&&!n&&r&&r.length===0?null:(0,X.jsxs)(E.MenuBarExtra,{icon:Ur(u),title:Je.showUnreadCount&&u?String(r.length):void 0,isLoading:n,children:[(0,X.jsx)(E.MenuBarExtra.Item,{icon:Ur(),title:"Open GitHub Notifications",shortcut:E.Keyboard.Shortcut.Common.Open,onAction:()=>(0,E.open)("https://github.com/notifications")}),(0,X.jsx)(E.MenuBarExtra.Section,{children:u?r.map(l=>{let y=l.subject.title,d=new Date(l.updated_at),g=Wo(d);return(0,X.jsx)(E.MenuBarExtra.Item,{icon:{source:l.icon.value.source,tintColor:E.Color.PrimaryText},title:y,subtitle:Qo(l),tooltip:g,onAction:()=>s(l),alternate:(0,X.jsx)(E.MenuBarExtra.Item,{icon:{source:l.icon.value.source,tintColor:E.Color.PrimaryText},title:y,subtitle:"Mark as Read",tooltip:g,onAction:()=>p(l)})},l.id)}):(0,X.jsx)(E.MenuBarExtra.Item,{title:"No Unread Notifications"})}),(0,X.jsxs)(E.MenuBarExtra.Section,{children:[u?(0,X.jsx)(E.MenuBarExtra.Item,{title:"Mark All as Read",icon:E.Icon.Checkmark,shortcut:{macOS:{modifiers:["cmd"],key:"i"},Windows:{modifiers:["ctrl"],key:"i"}},onAction:i}):null,(0,X.jsx)(E.MenuBarExtra.Item,{title:"View All Notifications",icon:E.Icon.Eye,shortcut:E.Keyboard.Shortcut.Common.OpenWith,onAction:()=>(0,E.launchCommand)({name:"notifications",type:E.LaunchType.UserInitiated})}),(0,X.jsx)(E.MenuBarExtra.Item,{title:"Configure Command",icon:E.Icon.Gear,shortcut:{macOS:{modifiers:["cmd"],key:","},Windows:{modifiers:["ctrl"],key:","}},onAction:E.openCommandPreferences,alternate:(0,X.jsx)(E.MenuBarExtra.Item,{title:"Configure Extension",icon:E.Icon.Gear,onAction:E.openExtensionPreferences})})]})]})}var ql=Yo(Ll);
