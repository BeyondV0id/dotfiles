"use strict";var bi=Object.create;var Xt=Object.defineProperty;var Ii=Object.getOwnPropertyDescriptor;var gi=Object.getOwnPropertyNames;var Mi=Object.getPrototypeOf,mi=Object.prototype.hasOwnProperty;var Qa=(e,t,a)=>()=>{if(a)throw a[0];try{return e&&(t=e(e=0)),t}catch(r){throw a=[r],r}};var E=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(a){throw t=0,a}},Xe=(e,t)=>{for(var a in t)Xt(e,a,{get:t[a],enumerable:!0})},Zt=(e,t,a,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of gi(t))!mi.call(e,n)&&n!==a&&Xt(e,n,{get:()=>t[n],enumerable:!(r=Ii(t,n))||r.enumerable});return e},z=(e,t,a)=>(Zt(e,t,"default"),a&&Zt(a,t,"default")),N=(e,t,a)=>(a=e!=null?bi(Mi(e)):{},Zt(t||!e||!e.__esModule?Xt(a,"default",{value:e,enumerable:!0}):a,e)),Ri=e=>Zt(Xt({},"__esModule",{value:!0}),e);var Hr=E(ta=>{"use strict";Object.defineProperty(ta,"__esModule",{value:!0});ta.useDeepMemo=void 0;var Ya=require("react"),Ai=require("dequal/lite");function fi(e){let t=(0,Ya.useRef)(e),a=(0,Ya.useRef)(0);return(0,Ai.dequal)(e,t.current)||(t.current=e,a.current+=1),(0,Ya.useMemo)(()=>t.current,[a.current])}ta.useDeepMemo=fi});var Ae=E(aa=>{"use strict";Object.defineProperty(aa,"__esModule",{value:!0});aa.useLatest=void 0;var Pi=require("react");function Ei(e){let t=(0,Pi.useRef)(e);return t.current=e,t}aa.useLatest=Ei});var Ct=E(de=>{"use strict";var Ci=de&&de.__createBinding||(Object.create?(function(e,t,a,r){r===void 0&&(r=a);var n=Object.getOwnPropertyDescriptor(t,a);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,n)}):(function(e,t,a,r){r===void 0&&(r=a),e[r]=t[a]})),hi=de&&de.__setModuleDefault||(Object.create?(function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}):function(e,t){e.default=t}),$r=de&&de.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var a in e)a!=="default"&&Object.prototype.hasOwnProperty.call(e,a)&&Ci(t,e,a);return hi(t,e),t};Object.defineProperty(de,"__esModule",{value:!0});de.showFailureToast=void 0;var Di=$r(require("fs")),xi=$r(require("path")),tt=require("@raycast/api");function Ui(e,t){let a=e instanceof Error?e.message:String(e);return(0,tt.showToast)({style:tt.Toast.Style.Failure,title:t?.title??"Something went wrong",message:t?.message??a,primaryAction:t?.primaryAction??Gr(e),secondaryAction:t?.primaryAction?Gr(e):void 0})}de.showFailureToast=Ui;var Gr=e=>{let t=!0,a="[Extension Name]...",r="";try{let u=JSON.parse(Di.readFileSync(xi.join(tt.environment.assetsPath,"..","package.json"),"utf8"));a=`[${u.title}]...`,r=`https://raycast.com/${u.owner||u.author}/${u.name}`,(!u.owner||u.access==="public")&&(t=!1)}catch{}let n=tt.environment.isDevelopment||t,o=e instanceof Error?e?.stack||e?.message||"":String(e);return{title:n?"Copy Logs":"Report Error",onAction(u){u.hide(),n?tt.Clipboard.copy(o):(0,tt.open)(`https://github.com/raycast/extensions/issues/new?&labels=extension%2Cbug&template=extension_bug_report.yml&title=${encodeURIComponent(a)}&extension-url=${encodeURI(r)}&description=${encodeURIComponent(`#### Error:
\`\`\`
${o}
\`\`\`
`)}`)}}}});var at=E(ra=>{"use strict";Object.defineProperty(ra,"__esModule",{value:!0});ra.usePromise=void 0;var K=require("react"),ht=require("@raycast/api"),_i=Hr(),_e=Ae(),vi=Ct();function Ti(e,t,a){let r=(0,K.useRef)(0),[n,o]=(0,K.useState)({isLoading:!0}),u=(0,_e.useLatest)(e),s=(0,_e.useLatest)(a?.abortable),i=(0,_e.useLatest)(t||[]),p=(0,_e.useLatest)(a?.onError),c=(0,_e.useLatest)(a?.onData),y=(0,_e.useLatest)(a?.onWillExecute),I=(0,_e.useLatest)(a?.failureToastOptions),m=(0,_e.useLatest)(n.data),l=(0,K.useRef)(),S=(0,K.useRef)({page:0}),d=(0,K.useRef)(!1),b=(0,K.useRef)(!0),R=(0,K.useRef)(50),f=(0,K.useCallback)((...j)=>{let T=++r.current;s.current&&(s.current.current?.abort(),s.current.current=new AbortController),y.current?.(j),o(C=>({...C,isLoading:!0}));let ue=wi(u.current)(...j);function ye(C){return C.name=="AbortError"||T===r.current&&(p.current?p.current(C):ht.environment.launchType!==ht.LaunchType.Background&&(0,vi.showFailureToast)(C,{title:"Failed to fetch latest data",primaryAction:{title:"Retry",onAction(W){W.hide(),l.current?.(...i.current||[])}},...I.current}),o({error:C,isLoading:!1})),C}return typeof ue=="function"?(d.current=!0,ue(S.current).then(({data:C,hasMore:W,cursor:Pt})=>(T===r.current&&(S.current&&(S.current.cursor=Pt,S.current.lastItem=C?.[C.length-1]),c.current&&c.current(C,S.current),W&&(R.current=C.length),b.current=W,o($a=>S.current.page===0?{data:C,isLoading:!1}:{data:($a.data||[])?.concat(C),isLoading:!1})),C),C=>(b.current=!1,ye(C)))):(d.current=!1,ue.then(C=>(T===r.current&&(c.current&&c.current(C),o({data:C,isLoading:!1})),C),ye))},[s,c,p,i,u,o,l,y,S,I]);l.current=f;let M=(0,K.useCallback)(()=>{S.current={page:0};let j=i.current||[];return f(...j)},[f,i]),P=(0,K.useCallback)(async(j,T)=>{let ue;try{if(T?.optimisticUpdate){typeof T?.rollbackOnError!="function"&&T?.rollbackOnError!==!1&&(ue=structuredClone(m.current?.value));let ye=T.optimisticUpdate;o(C=>({...C,data:ye(C.data)}))}return await j}catch(ye){if(typeof T?.rollbackOnError=="function"){let C=T.rollbackOnError;o(W=>({...W,data:C(W.data)}))}else T?.optimisticUpdate&&T?.rollbackOnError!==!1&&o(C=>({...C,data:ue}));throw ye}finally{T?.shouldRevalidateAfter!==!1&&(ht.environment.launchType===ht.LaunchType.Background||ht.environment.commandMode==="menu-bar"?await M():M())}},[M,m,o]),A=(0,K.useCallback)(()=>{S.current.page+=1;let j=i.current||[];f(...j)},[S,i,f]);(0,K.useEffect)(()=>{S.current={page:0},a?.execute!==!1?f(...t||[]):s.current&&s.current.current?.abort()},[(0,_i.useDeepMemo)([t,a?.execute,f]),s,S]),(0,K.useEffect)(()=>()=>{s.current&&s.current.current?.abort()},[s]);let U=a?.execute!==!1?n.isLoading:!1,q={...n,isLoading:U},se=d.current?{pageSize:R.current,hasMore:b.current,onLoadMore:A}:void 0;return{...q,revalidate:M,mutate:P,pagination:se}}ra.usePromise=Ti;function wi(e){return e===Promise.all||e===Promise.race||e===Promise.resolve||e===Promise.reject?e.bind(Promise):e}});var ve=E(Se=>{"use strict";var Oi=Se&&Se.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Se,"__esModule",{value:!0});Se.hash=Se.reviver=Se.replacer=void 0;var Bi=Oi(require("object-hash"));function Li(e,t){let a=this[e];return a instanceof Date?`__raycast_cached_date__${a.toString()}`:Buffer.isBuffer(a)?`__raycast_cached_buffer__${a.toString("base64")}`:t}Se.replacer=Li;function qi(e,t){return typeof t=="string"&&t.startsWith("__raycast_cached_date__")?new Date(t.replace("__raycast_cached_date__","")):typeof t=="string"&&t.startsWith("__raycast_cached_buffer__")?Buffer.from(t.replace("__raycast_cached_buffer__",""),"base64"):t}Se.reviver=qi;function Ni(e,t){return(0,Bi.default)(e,{replacer:a=>a instanceof URLSearchParams?a.toString():a,...t})}Se.hash=Ni});var oa=E(na=>{"use strict";Object.defineProperty(na,"__esModule",{value:!0});na.useCachedState=void 0;var Ja=require("react"),Vi=require("@raycast/api"),Za=Ae(),Qr=ve(),ji=Symbol("cache without namespace"),Wr=new Map;function ki(e,t,a){let r=a?.cacheNamespace||ji,n=Wr.get(r)||Wr.set(r,new Vi.Cache({namespace:a?.cacheNamespace})).get(r);if(!n)throw new Error("Missing cache");let o=(0,Za.useLatest)(e),u=(0,Za.useLatest)(t),s=(0,Ja.useSyncExternalStore)(n.subscribe,()=>{try{return n.get(o.current)}catch(y){console.error("Could not get Cache data:",y);return}}),i=(0,Ja.useMemo)(()=>{if(typeof s<"u"){if(s==="undefined")return;try{return JSON.parse(s,Qr.reviver)}catch(y){return console.warn("The cached data is corrupted",y),u.current}}else return u.current},[s,u]),p=(0,Za.useLatest)(i),c=(0,Ja.useCallback)(y=>{let I=typeof y=="function"?y(p.current):y;if(typeof I>"u")n.set(o.current,"undefined");else{let m=JSON.stringify(I,Qr.replacer);n.set(o.current,m)}return I},[n,o,p]);return[i,c]}na.useCachedState=ki});var xt=E(ia=>{"use strict";Object.defineProperty(ia,"__esModule",{value:!0});ia.useCachedPromise=void 0;var Dt=require("react"),Fi=oa(),zi=at(),Hi=Ae(),Kr=ve(),rt=Symbol();function Gi(e,t,a){let{initialData:r,keepPreviousData:n,internal_cacheKeySuffix:o,...u}=a||{},s=(0,Dt.useRef)(),[i,p]=(0,Fi.useCachedState)((0,Kr.hash)(t||[])+o,rt,{cacheNamespace:(0,Kr.hash)(e)}),c=(0,Dt.useRef)(i!==rt?i:r),y=(0,Dt.useRef)(void 0),{mutate:I,revalidate:m,...l}=(0,zi.usePromise)(e,t||[],{...u,onData(f,M){y.current=M,u.onData&&u.onData(f,M),!(M&&M.page>0)&&(s.current="promise",c.current=f,p(f))}}),S,d=l.pagination;y.current&&y.current.page>0&&l.data?S=l.data:s.current==="promise"?S=c.current:n&&i!==rt?(S=i,d&&(d.hasMore=!0,d.pageSize=i.length)):n&&i===rt?S=c.current:i!==rt?(S=i,d&&(d.hasMore=!0,d.pageSize=i.length)):S=r;let b=(0,Hi.useLatest)(S),R=(0,Dt.useCallback)(async(f,M)=>{let P;try{if(M?.optimisticUpdate){typeof M?.rollbackOnError!="function"&&M?.rollbackOnError!==!1&&(P=structuredClone(b.current));let A=M.optimisticUpdate(b.current);s.current="cache",c.current=A,p(A)}return await I(f,{shouldRevalidateAfter:M?.shouldRevalidateAfter})}catch(A){if(typeof M?.rollbackOnError=="function"){let U=M.rollbackOnError(b.current);s.current="cache",c.current=U,p(U)}else M?.optimisticUpdate&&M?.rollbackOnError!==!1&&(s.current="cache",c.current=P,p(P));throw A}},[p,I,b,c,s]);return(0,Dt.useEffect)(()=>{i!==rt&&(s.current="cache",c.current=i)},[i]),{data:S,isLoading:l.isLoading,error:l.error,mutate:y.current&&y.current.page>0?I:R,pagination:d,revalidate:m}}ia.useCachedPromise=Gi});var un=E((le,sn)=>{"use strict";Object.defineProperty(le,"__esModule",{value:!0});function st(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var pe=st(require("stream")),Xr=st(require("http")),ua=st(require("url")),en=st(require("whatwg-url")),$i=st(require("https")),ke=st(require("zlib")),Qi=pe.Readable,fe=Symbol("buffer"),Xa=Symbol("type"),_t=class e{constructor(){this[Xa]="";let t=arguments[0],a=arguments[1],r=[],n=0;if(t){let u=t,s=Number(u.length);for(let i=0;i<s;i++){let p=u[i],c;p instanceof Buffer?c=p:ArrayBuffer.isView(p)?c=Buffer.from(p.buffer,p.byteOffset,p.byteLength):p instanceof ArrayBuffer?c=Buffer.from(p):p instanceof e?c=p[fe]:c=Buffer.from(typeof p=="string"?p:String(p)),n+=c.length,r.push(c)}}this[fe]=Buffer.concat(r);let o=a&&a.type!==void 0&&String(a.type).toLowerCase();o&&!/[^\u0020-\u007E]/.test(o)&&(this[Xa]=o)}get size(){return this[fe].length}get type(){return this[Xa]}text(){return Promise.resolve(this[fe].toString())}arrayBuffer(){let t=this[fe],a=t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength);return Promise.resolve(a)}stream(){let t=new Qi;return t._read=function(){},t.push(this[fe]),t.push(null),t}toString(){return"[object Blob]"}slice(){let t=this.size,a=arguments[0],r=arguments[1],n,o;a===void 0?n=0:a<0?n=Math.max(t+a,0):n=Math.min(a,t),r===void 0?o=t:r<0?o=Math.max(t+r,0):o=Math.min(r,t);let u=Math.max(o-n,0),i=this[fe].slice(n,n+u),p=new e([],{type:arguments[2]});return p[fe]=i,p}};Object.defineProperties(_t.prototype,{size:{enumerable:!0},type:{enumerable:!0},slice:{enumerable:!0}});Object.defineProperty(_t.prototype,Symbol.toStringTag,{value:"Blob",writable:!1,enumerable:!1,configurable:!0});function L(e,t,a){Error.call(this,e),this.message=e,this.type=t,a&&(this.code=this.errno=a.code),Error.captureStackTrace(this,this.constructor)}L.prototype=Object.create(Error.prototype);L.prototype.constructor=L;L.prototype.name="FetchError";var rr;try{rr=require("encoding").convert}catch{}var Ee=Symbol("Body internals"),Yr=pe.PassThrough;function w(e){var t=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.size;let n=r===void 0?0:r;var o=a.timeout;let u=o===void 0?0:o;e==null?e=null:tn(e)?e=Buffer.from(e.toString()):Tt(e)||Buffer.isBuffer(e)||(Object.prototype.toString.call(e)==="[object ArrayBuffer]"?e=Buffer.from(e):ArrayBuffer.isView(e)?e=Buffer.from(e.buffer,e.byteOffset,e.byteLength):e instanceof pe||(e=Buffer.from(String(e)))),this[Ee]={body:e,disturbed:!1,error:null},this.size=n,this.timeout=u,e instanceof pe&&e.on("error",function(s){let i=s.name==="AbortError"?s:new L(`Invalid response body while trying to fetch ${t.url}: ${s.message}`,"system",s);t[Ee].error=i})}w.prototype={get body(){return this[Ee].body},get bodyUsed(){return this[Ee].disturbed},arrayBuffer(){return nt.call(this).then(function(e){return e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength)})},blob(){let e=this.headers&&this.headers.get("content-type")||"";return nt.call(this).then(function(t){return Object.assign(new _t([],{type:e.toLowerCase()}),{[fe]:t})})},json(){var e=this;return nt.call(this).then(function(t){try{return JSON.parse(t.toString())}catch(a){return w.Promise.reject(new L(`invalid json response body at ${e.url} reason: ${a.message}`,"invalid-json"))}})},text(){return nt.call(this).then(function(e){return e.toString()})},buffer(){return nt.call(this)},textConverted(){var e=this;return nt.call(this).then(function(t){return Wi(t,e.headers)})}};Object.defineProperties(w.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0}});w.mixIn=function(e){for(let t of Object.getOwnPropertyNames(w.prototype))if(!(t in e)){let a=Object.getOwnPropertyDescriptor(w.prototype,t);Object.defineProperty(e,t,a)}};function nt(){var e=this;if(this[Ee].disturbed)return w.Promise.reject(new TypeError(`body used already for: ${this.url}`));if(this[Ee].disturbed=!0,this[Ee].error)return w.Promise.reject(this[Ee].error);let t=this.body;if(t===null)return w.Promise.resolve(Buffer.alloc(0));if(Tt(t)&&(t=t.stream()),Buffer.isBuffer(t))return w.Promise.resolve(t);if(!(t instanceof pe))return w.Promise.resolve(Buffer.alloc(0));let a=[],r=0,n=!1;return new w.Promise(function(o,u){let s;e.timeout&&(s=setTimeout(function(){n=!0,u(new L(`Response timeout while trying to fetch ${e.url} (over ${e.timeout}ms)`,"body-timeout"))},e.timeout)),t.on("error",function(i){i.name==="AbortError"?(n=!0,u(i)):u(new L(`Invalid response body while trying to fetch ${e.url}: ${i.message}`,"system",i))}),t.on("data",function(i){if(!(n||i===null)){if(e.size&&r+i.length>e.size){n=!0,u(new L(`content size at ${e.url} over limit: ${e.size}`,"max-size"));return}r+=i.length,a.push(i)}}),t.on("end",function(){if(!n){clearTimeout(s);try{o(Buffer.concat(a,r))}catch(i){u(new L(`Could not create Buffer from response body for ${e.url}: ${i.message}`,"system",i))}}})})}function Wi(e,t){if(typeof rr!="function")throw new Error("The package `encoding` must be installed to use the textConverted() function");let a=t.get("content-type"),r="utf-8",n,o;return a&&(n=/charset=([^;]*)/i.exec(a)),o=e.slice(0,1024).toString(),!n&&o&&(n=/<meta.+?charset=(['"])(.+?)\1/i.exec(o)),!n&&o&&(n=/<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(o),n||(n=/<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(o),n&&n.pop()),n&&(n=/charset=(.*)/i.exec(n.pop()))),!n&&o&&(n=/<\?xml.+?encoding=(['"])(.+?)\1/i.exec(o)),n&&(r=n.pop(),(r==="gb2312"||r==="gbk")&&(r="gb18030")),rr(e,"UTF-8",r).toString()}function tn(e){return typeof e!="object"||typeof e.append!="function"||typeof e.delete!="function"||typeof e.get!="function"||typeof e.getAll!="function"||typeof e.has!="function"||typeof e.set!="function"?!1:e.constructor.name==="URLSearchParams"||Object.prototype.toString.call(e)==="[object URLSearchParams]"||typeof e.sort=="function"}function Tt(e){return typeof e=="object"&&typeof e.arrayBuffer=="function"&&typeof e.type=="string"&&typeof e.stream=="function"&&typeof e.constructor=="function"&&typeof e.constructor.name=="string"&&/^(Blob|File)$/.test(e.constructor.name)&&/^(Blob|File)$/.test(e[Symbol.toStringTag])}function an(e){let t,a,r=e.body;if(e.bodyUsed)throw new Error("cannot clone body after it is used");return r instanceof pe&&typeof r.getBoundary!="function"&&(t=new Yr,a=new Yr,r.pipe(t),r.pipe(a),e[Ee].body=t,r=a),r}function rn(e){return e===null?null:typeof e=="string"?"text/plain;charset=UTF-8":tn(e)?"application/x-www-form-urlencoded;charset=UTF-8":Tt(e)?e.type||null:Buffer.isBuffer(e)||Object.prototype.toString.call(e)==="[object ArrayBuffer]"||ArrayBuffer.isView(e)?null:typeof e.getBoundary=="function"?`multipart/form-data;boundary=${e.getBoundary()}`:e instanceof pe?null:"text/plain;charset=UTF-8"}function nn(e){let t=e.body;return t===null?0:Tt(t)?t.size:Buffer.isBuffer(t)?t.length:t&&typeof t.getLengthSync=="function"&&(t._lengthRetrievers&&t._lengthRetrievers.length==0||t.hasKnownLength&&t.hasKnownLength())?t.getLengthSync():null}function Ki(e,t){let a=t.body;a===null?e.end():Tt(a)?a.stream().pipe(e):Buffer.isBuffer(a)?(e.write(a),e.end()):a.pipe(e)}w.Promise=global.Promise;var on=/[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/,nr=/[^\t\x20-\x7e\x80-\xff]/;function Ut(e){if(e=`${e}`,on.test(e)||e==="")throw new TypeError(`${e} is not a legal HTTP header name`)}function Jr(e){if(e=`${e}`,nr.test(e))throw new TypeError(`${e} is not a legal HTTP header value`)}function ot(e,t){t=t.toLowerCase();for(let a in e)if(a.toLowerCase()===t)return a}var v=Symbol("map"),ae=class e{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:void 0;if(this[v]=Object.create(null),t instanceof e){let a=t.raw(),r=Object.keys(a);for(let n of r)for(let o of a[n])this.append(n,o);return}if(t!=null)if(typeof t=="object"){let a=t[Symbol.iterator];if(a!=null){if(typeof a!="function")throw new TypeError("Header pairs must be iterable");let r=[];for(let n of t){if(typeof n!="object"||typeof n[Symbol.iterator]!="function")throw new TypeError("Each header pair must be iterable");r.push(Array.from(n))}for(let n of r){if(n.length!==2)throw new TypeError("Each header pair must be a name/value tuple");this.append(n[0],n[1])}}else for(let r of Object.keys(t)){let n=t[r];this.append(r,n)}}else throw new TypeError("Provided initializer must be an object")}get(t){t=`${t}`,Ut(t);let a=ot(this[v],t);return a===void 0?null:this[v][a].join(", ")}forEach(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:void 0,r=or(this),n=0;for(;n<r.length;){var o=r[n];let u=o[0],s=o[1];t.call(a,s,u,this),r=or(this),n++}}set(t,a){t=`${t}`,a=`${a}`,Ut(t),Jr(a);let r=ot(this[v],t);this[v][r!==void 0?r:t]=[a]}append(t,a){t=`${t}`,a=`${a}`,Ut(t),Jr(a);let r=ot(this[v],t);r!==void 0?this[v][r].push(a):this[v][t]=[a]}has(t){return t=`${t}`,Ut(t),ot(this[v],t)!==void 0}delete(t){t=`${t}`,Ut(t);let a=ot(this[v],t);a!==void 0&&delete this[v][a]}raw(){return this[v]}keys(){return er(this,"key")}values(){return er(this,"value")}[Symbol.iterator](){return er(this,"key+value")}};ae.prototype.entries=ae.prototype[Symbol.iterator];Object.defineProperty(ae.prototype,Symbol.toStringTag,{value:"Headers",writable:!1,enumerable:!1,configurable:!0});Object.defineProperties(ae.prototype,{get:{enumerable:!0},forEach:{enumerable:!0},set:{enumerable:!0},append:{enumerable:!0},has:{enumerable:!0},delete:{enumerable:!0},keys:{enumerable:!0},values:{enumerable:!0},entries:{enumerable:!0}});function or(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"key+value";return Object.keys(e[v]).sort().map(t==="key"?function(r){return r.toLowerCase()}:t==="value"?function(r){return e[v][r].join(", ")}:function(r){return[r.toLowerCase(),e[v][r].join(", ")]})}var ir=Symbol("internal");function er(e,t){let a=Object.create(sr);return a[ir]={target:e,kind:t,index:0},a}var sr=Object.setPrototypeOf({next(){if(!this||Object.getPrototypeOf(this)!==sr)throw new TypeError("Value of `this` is not a HeadersIterator");var e=this[ir];let t=e.target,a=e.kind,r=e.index,n=or(t,a),o=n.length;return r>=o?{value:void 0,done:!0}:(this[ir].index=r+1,{value:n[r],done:!1})}},Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));Object.defineProperty(sr,Symbol.toStringTag,{value:"HeadersIterator",writable:!1,enumerable:!1,configurable:!0});function Yi(e){let t=Object.assign({__proto__:null},e[v]),a=ot(e[v],"Host");return a!==void 0&&(t[a]=t[a][0]),t}function Ji(e){let t=new ae;for(let a of Object.keys(e))if(!on.test(a))if(Array.isArray(e[a]))for(let r of e[a])nr.test(r)||(t[v][a]===void 0?t[v][a]=[r]:t[v][a].push(r));else nr.test(e[a])||(t[v][a]=[e[a]]);return t}var Te=Symbol("Response internals"),Zi=Xr.STATUS_CODES,te=class e{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};w.call(this,t,a);let r=a.status||200,n=new ae(a.headers);if(t!=null&&!n.has("Content-Type")){let o=rn(t);o&&n.append("Content-Type",o)}this[Te]={url:a.url,status:r,statusText:a.statusText||Zi[r],headers:n,counter:a.counter}}get url(){return this[Te].url||""}get status(){return this[Te].status}get ok(){return this[Te].status>=200&&this[Te].status<300}get redirected(){return this[Te].counter>0}get statusText(){return this[Te].statusText}get headers(){return this[Te].headers}clone(){return new e(an(this),{url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected})}};w.mixIn(te.prototype);Object.defineProperties(te.prototype,{url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}});Object.defineProperty(te.prototype,Symbol.toStringTag,{value:"Response",writable:!1,enumerable:!1,configurable:!0});var Pe=Symbol("Request internals"),Xi=ua.URL||en.URL,es=ua.parse,ts=ua.format;function tr(e){return/^[a-zA-Z][a-zA-Z\d+\-.]*:/.exec(e)&&(e=new Xi(e).toString()),es(e)}var as="destroy"in pe.Readable.prototype;function sa(e){return typeof e=="object"&&typeof e[Pe]=="object"}function rs(e){let t=e&&typeof e=="object"&&Object.getPrototypeOf(e);return!!(t&&t.constructor.name==="AbortSignal")}var Oe=class e{constructor(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r;sa(t)?r=tr(t.url):(t&&t.href?r=tr(t.href):r=tr(`${t}`),t={});let n=a.method||t.method||"GET";if(n=n.toUpperCase(),(a.body!=null||sa(t)&&t.body!==null)&&(n==="GET"||n==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");let o=a.body!=null?a.body:sa(t)&&t.body!==null?an(t):null;w.call(this,o,{timeout:a.timeout||t.timeout||0,size:a.size||t.size||0});let u=new ae(a.headers||t.headers||{});if(o!=null&&!u.has("Content-Type")){let i=rn(o);i&&u.append("Content-Type",i)}let s=sa(t)?t.signal:null;if("signal"in a&&(s=a.signal),s!=null&&!rs(s))throw new TypeError("Expected signal to be an instanceof AbortSignal");this[Pe]={method:n,redirect:a.redirect||t.redirect||"follow",headers:u,parsedURL:r,signal:s},this.follow=a.follow!==void 0?a.follow:t.follow!==void 0?t.follow:20,this.compress=a.compress!==void 0?a.compress:t.compress!==void 0?t.compress:!0,this.counter=a.counter||t.counter||0,this.agent=a.agent||t.agent}get method(){return this[Pe].method}get url(){return ts(this[Pe].parsedURL)}get headers(){return this[Pe].headers}get redirect(){return this[Pe].redirect}get signal(){return this[Pe].signal}clone(){return new e(this)}};w.mixIn(Oe.prototype);Object.defineProperty(Oe.prototype,Symbol.toStringTag,{value:"Request",writable:!1,enumerable:!1,configurable:!0});Object.defineProperties(Oe.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0}});function ns(e){let t=e[Pe].parsedURL,a=new ae(e[Pe].headers);if(a.has("Accept")||a.set("Accept","*/*"),!t.protocol||!t.hostname)throw new TypeError("Only absolute URLs are supported");if(!/^https?:$/.test(t.protocol))throw new TypeError("Only HTTP(S) protocols are supported");if(e.signal&&e.body instanceof pe.Readable&&!as)throw new Error("Cancellation of streamed requests with AbortSignal is not supported in node < 8");let r=null;if(e.body==null&&/^(POST|PUT)$/i.test(e.method)&&(r="0"),e.body!=null){let o=nn(e);typeof o=="number"&&(r=String(o))}r&&a.set("Content-Length",r),a.has("User-Agent")||a.set("User-Agent","node-fetch/1.0 (+https://github.com/bitinn/node-fetch)"),e.compress&&!a.has("Accept-Encoding")&&a.set("Accept-Encoding","gzip,deflate");let n=e.agent;return typeof n=="function"&&(n=n(t)),Object.assign({},t,{method:e.method,headers:Yi(a),agent:n})}function it(e){Error.call(this,e),this.type="aborted",this.message=e,Error.captureStackTrace(this,this.constructor)}it.prototype=Object.create(Error.prototype);it.prototype.constructor=it;it.prototype.name="AbortError";var vt=ua.URL||en.URL,Zr=pe.PassThrough,os=function(t,a){let r=new vt(a).hostname,n=new vt(t).hostname;return r===n||r[r.length-n.length-1]==="."&&r.endsWith(n)},is=function(t,a){let r=new vt(a).protocol,n=new vt(t).protocol;return r===n};function we(e,t){if(!we.Promise)throw new Error("native promise missing, set fetch.Promise to your favorite alternative");return w.Promise=we.Promise,new we.Promise(function(a,r){let n=new Oe(e,t),o=ns(n),u=(o.protocol==="https:"?$i:Xr).request,s=n.signal,i=null,p=function(){let S=new it("The user aborted a request.");r(S),n.body&&n.body instanceof pe.Readable&&ar(n.body,S),!(!i||!i.body)&&i.body.emit("error",S)};if(s&&s.aborted){p();return}let c=function(){p(),m()},y=u(o),I;s&&s.addEventListener("abort",c);function m(){y.abort(),s&&s.removeEventListener("abort",c),clearTimeout(I)}n.timeout&&y.once("socket",function(l){I=setTimeout(function(){r(new L(`network timeout at: ${n.url}`,"request-timeout")),m()},n.timeout)}),y.on("error",function(l){r(new L(`request to ${n.url} failed, reason: ${l.message}`,"system",l)),i&&i.body&&ar(i.body,l),m()}),ss(y,function(l){s&&s.aborted||i&&i.body&&ar(i.body,l)}),parseInt(process.version.substring(1))<14&&y.on("socket",function(l){l.addListener("close",function(S){let d=l.listenerCount("data")>0;if(i&&d&&!S&&!(s&&s.aborted)){let b=new Error("Premature close");b.code="ERR_STREAM_PREMATURE_CLOSE",i.body.emit("error",b)}})}),y.on("response",function(l){clearTimeout(I);let S=Ji(l.headers);if(we.isRedirect(l.statusCode)){let M=S.get("Location"),P=null;try{P=M===null?null:new vt(M,n.url).toString()}catch{if(n.redirect!=="manual"){r(new L(`uri requested responds with an invalid redirect URL: ${M}`,"invalid-redirect")),m();return}}switch(n.redirect){case"error":r(new L(`uri requested responds with a redirect, redirect mode is set to error: ${n.url}`,"no-redirect")),m();return;case"manual":if(P!==null)try{S.set("Location",P)}catch(U){r(U)}break;case"follow":if(P===null)break;if(n.counter>=n.follow){r(new L(`maximum redirect reached at: ${n.url}`,"max-redirect")),m();return}let A={headers:new ae(n.headers),follow:n.follow,counter:n.counter+1,agent:n.agent,compress:n.compress,method:n.method,body:n.body,signal:n.signal,timeout:n.timeout,size:n.size};if(!os(n.url,P)||!is(n.url,P))for(let U of["authorization","www-authenticate","cookie","cookie2"])A.headers.delete(U);if(l.statusCode!==303&&n.body&&nn(n)===null){r(new L("Cannot follow redirect with body being a readable stream","unsupported-redirect")),m();return}(l.statusCode===303||(l.statusCode===301||l.statusCode===302)&&n.method==="POST")&&(A.method="GET",A.body=void 0,A.headers.delete("content-length")),a(we(new Oe(P,A))),m();return}}l.once("end",function(){s&&s.removeEventListener("abort",c)});let d=l.pipe(new Zr),b={url:n.url,status:l.statusCode,statusText:l.statusMessage,headers:S,size:n.size,timeout:n.timeout,counter:n.counter},R=S.get("Content-Encoding");if(!n.compress||n.method==="HEAD"||R===null||l.statusCode===204||l.statusCode===304){i=new te(d,b),a(i);return}let f={flush:ke.Z_SYNC_FLUSH,finishFlush:ke.Z_SYNC_FLUSH};if(R=="gzip"||R=="x-gzip"){d=d.pipe(ke.createGunzip(f)),i=new te(d,b),a(i);return}if(R=="deflate"||R=="x-deflate"){let M=l.pipe(new Zr);M.once("data",function(P){(P[0]&15)===8?d=d.pipe(ke.createInflate()):d=d.pipe(ke.createInflateRaw()),i=new te(d,b),a(i)}),M.on("end",function(){i||(i=new te(d,b),a(i))});return}if(R=="br"&&typeof ke.createBrotliDecompress=="function"){d=d.pipe(ke.createBrotliDecompress()),i=new te(d,b),a(i);return}i=new te(d,b),a(i)}),Ki(y,n)})}function ss(e,t){let a;e.on("socket",function(r){a=r}),e.on("response",function(r){let n=r.headers;n["transfer-encoding"]==="chunked"&&!n["content-length"]&&r.once("close",function(o){if(a&&a.listenerCount("data")>0&&!o){let s=new Error("Premature close");s.code="ERR_STREAM_PREMATURE_CLOSE",t(s)}})})}function ar(e,t){e.destroy?e.destroy(t):(e.emit("error",t),e.end())}we.isRedirect=function(e){return e===301||e===302||e===303||e===307||e===308};we.Promise=global.Promise;sn.exports=le=we;Object.defineProperty(le,"__esModule",{value:!0});le.default=le;le.Headers=ae;le.Request=Oe;le.Response=te;le.FetchError=L;le.AbortError=it});var Ot=E((Fe,pn)=>{var wt=un(),us=wt.default||wt,pa=function(e,t){return/^\/\//.test(e)&&(e="https:"+e),us.call(this,e,t)};pa.ponyfill=!0;pn.exports=Fe=pa;Fe.fetch=pa;Fe.Headers=wt.Headers;Fe.Request=wt.Request;Fe.Response=wt.Response;Fe.default=pa});var ur=E(la=>{"use strict";Object.defineProperty(la,"__esModule",{value:!0});la.isJSON=void 0;function ps(e){if(e){let t=cs(e);if(!t)return!1;if(t.subtype==="json"||t.suffix==="json"||t.suffix&&/\bjson\b/i.test(t.suffix)||t.subtype&&/\bjson\b/i.test(t.subtype))return!0}return!1}la.isJSON=ps;var ls=/^([A-Za-z0-9][A-Za-z0-9!#$&^_-]{0,126})\/([A-Za-z0-9][A-Za-z0-9!#$&^_.+-]{0,126});?$/;function cs(e){let t=e.indexOf(";"),a=t!==-1?e.slice(0,t).trim():e.trim(),r=ls.exec(a.toLowerCase().toLowerCase());if(!r)return;let n=r[1],o=r[2],u,s=o.lastIndexOf("+");return s!==-1&&(u=o.substring(s+1),o=o.substring(0,s)),{type:n,subtype:o,suffix:u}}});var dn=E(ca=>{"use strict";Object.defineProperty(ca,"__esModule",{value:!0});ca.useFetch=void 0;var ut=require("react"),ys=xt(),ln=Ae(),cn=Ot(),ds=ur(),yn=ve();async function Ss(e){if(!e.ok)throw new Error(e.statusText);let t=e.headers.get("content-type");return t&&(0,ds.isJSON)(t)?await e.json():await e.text()}function bs(e){return{data:e,hasMore:!1}}function Is(e,t){let{parseResponse:a,mapResult:r,initialData:n,execute:o,keepPreviousData:u,onError:s,onData:i,onWillExecute:p,failureToastOptions:c,...y}=t||{},I={initialData:n,execute:o,keepPreviousData:u,onError:s,onData:i,onWillExecute:p,failureToastOptions:c},m=(0,ln.useLatest)(a||Ss),l=(0,ln.useLatest)(r||bs),S=(0,ut.useRef)(),d=(0,ut.useRef)(),b=typeof e=="function"?e({page:0}):void 0;(!S.current||typeof d.current>"u"||d.current!==b)&&(S.current=e),d.current=b;let R=(0,ut.useRef)(),f=(0,ut.useCallback)((A,U)=>async q=>{let se=await(0,cn.fetch)(A(q),{signal:R.current?.signal,...U}),j=await m.current(se);return l.current?.(j)},[m,l]),M=(0,ut.useCallback)(async(A,U)=>{let q=await(0,cn.fetch)(A,{signal:R.current?.signal,...U}),se=await m.current(q);return l.current(se)?.data},[m,l]),P=(0,ut.useMemo)(()=>d.current?f:M,[d,M,f]);return(0,ys.useCachedPromise)(P,[S.current,y],{...I,internal_cacheKeySuffix:d.current+(0,yn.hash)(l.current)+(0,yn.hash)(m.current),abortable:R})}ca.useFetch=Is});var ya=E(re=>{"use strict";var gs=re&&re.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(re,"__esModule",{value:!0});re.defaultParsing=re.handleOutput=re.getSpawnedResult=re.getSpawnedPromise=void 0;var Ms=require("node:buffer"),In=gs(require("node:stream")),ms=require("node:util"),Rs=require("signal-exit");function As(e,{timeout:t}={}){let a=new Promise((s,i)=>{e.on("exit",(p,c)=>{s({exitCode:p,signal:c,timedOut:!1})}),e.on("error",p=>{i(p)}),e.stdin&&e.stdin.on("error",p=>{i(p)})});if(t===0||t===void 0)return a;let r,n=new Promise((s,i)=>{r=setTimeout(()=>{e.kill("SIGTERM"),i(Object.assign(new Error("Timed out"),{timedOut:!0,signal:"SIGTERM"}))},t)}),o=a.finally(()=>{clearTimeout(r)}),u=(0,Rs.onExit)(()=>{e.kill()});return Promise.race([n,o]).finally(()=>u())}re.getSpawnedPromise=As;var pr=class extends Error{constructor(){super("The output is too big"),this.name="MaxBufferError"}},fs=(0,ms.promisify)(In.default.pipeline);function Ps(e){let{encoding:t}=e,a=t==="buffer",r=new In.default.PassThrough({objectMode:!1});t&&t!=="buffer"&&r.setEncoding(t);let n=0,o=[];return r.on("data",u=>{o.push(u),n+=u.length}),r.getBufferedValue=()=>a?Buffer.concat(o,n):o.join(""),r.getBufferedLength=()=>n,r}async function Sn(e,t){let a=Ps(t);return await new Promise((r,n)=>{let o=u=>{u&&a.getBufferedLength()<=Ms.constants.MAX_LENGTH&&(u.bufferedData=a.getBufferedValue()),n(u)};(async()=>{try{await fs(e,a),r()}catch(u){o(u)}})(),a.on("data",()=>{a.getBufferedLength()>1e3*1e3*80&&o(new pr)})}),a.getBufferedValue()}async function bn(e,t){e.destroy();try{return await t}catch(a){return a.bufferedData}}async function Es({stdout:e,stderr:t},{encoding:a},r){let n=Sn(e,{encoding:a}),o=Sn(t,{encoding:a});try{return await Promise.all([r,n,o])}catch(u){return Promise.all([{error:u,exitCode:null,signal:u.signal,timedOut:u.timedOut||!1},bn(e,n),bn(t,o)])}}re.getSpawnedResult=Es;function Cs(e){let t=typeof e=="string"?`
`:10,a=typeof e=="string"?"\r":13;return e[e.length-1]===t&&(e=e.slice(0,-1)),e[e.length-1]===a&&(e=e.slice(0,-1)),e}function hs(e,t){return e.stripFinalNewline?Cs(t):t}re.handleOutput=hs;var Ds=({timedOut:e,timeout:t,signal:a,exitCode:r})=>e?`timed out after ${t} milliseconds`:a!=null?`was killed with ${a}`:r!=null?`failed with exit code ${r}`:"failed",xs=({stdout:e,stderr:t,error:a,signal:r,exitCode:n,command:o,timedOut:u,options:s,parentError:i})=>{let c=`Command ${Ds({timedOut:u,timeout:s?.timeout,signal:r,exitCode:n})}: ${o}`,y=a?`${c}
${a.message}`:c,I=[y,t,e].filter(Boolean).join(`
`);return a?a.originalMessage=a.message:a=i,a.message=I,a.shortMessage=y,a.command=o,a.exitCode=n,a.signal=r,a.stdout=e,a.stderr=t,"bufferedData"in a&&delete a.bufferedData,a};function Us({stdout:e,stderr:t,error:a,exitCode:r,signal:n,timedOut:o,command:u,options:s,parentError:i}){if(a||r!==0||n!==null)throw xs({error:a,exitCode:r,signal:n,stdout:e,stderr:t,command:u,timedOut:o,options:s,parentError:i});return e}re.defaultParsing=Us});var Mn=E(pt=>{"use strict";var _s=pt&&pt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(pt,"__esModule",{value:!0});pt.useExec=void 0;var vs=_s(require("node:child_process")),gn=require("react"),Ts=xt(),ws=Ae(),Bt=ya(),Os=/ +/g;function Bs(e,t){if(t)return[e,...t];let a=[];for(let r of e.trim().split(Os)){let n=a[a.length-1];n&&n.endsWith("\\")?a[a.length-1]=`${n.slice(0,-1)} ${r}`:a.push(r)}return a}function Ls(e,t,a){let{parseOutput:r,input:n,onData:o,onWillExecute:u,initialData:s,execute:i,keepPreviousData:p,onError:c,failureToastOptions:y,...I}=Array.isArray(t)?a||{}:t||{},m={initialData:s,execute:i,keepPreviousData:p,onError:c,onData:o,onWillExecute:u,failureToastOptions:y},l=(0,gn.useRef)(),S=(0,ws.useLatest)(r||Bt.defaultParsing),d=(0,gn.useCallback)(async(b,R,f,M)=>{let[P,...A]=Bs(b,R),U=[P,...A].join(" "),q={stripFinalNewline:!0,...f,timeout:f?.timeout||1e4,signal:l.current?.signal,encoding:f?.encoding===null?"buffer":f?.encoding||"utf8",env:{PATH:"/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin",...process.env,...f?.env}},se=vs.default.spawn(P,A,q),j=(0,Bt.getSpawnedPromise)(se,q);M&&se.stdin.end(M);let[{error:T,exitCode:ue,signal:ye,timedOut:C},W,Pt]=await(0,Bt.getSpawnedResult)(se,q,j),$a=(0,Bt.handleOutput)(q,W),Si=(0,Bt.handleOutput)(q,Pt);return S.current({stdout:$a,stderr:Si,error:T,exitCode:ue,signal:ye,timedOut:C,command:U,options:q,parentError:new Error})},[S]);return(0,Ts.useCachedPromise)(d,[e,Array.isArray(t)?t:[],I,n],{...m,abortable:l})}pt.useExec=Ls});var fn=E(lt=>{"use strict";var Sa=lt&&lt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(lt,"__esModule",{value:!0});lt.useStreamJSON=void 0;var qs=require("@raycast/api"),mn=Sa(Ot()),Nt=require("node:fs"),lr=require("node:fs/promises"),da=require("node:path"),Rn=require("node:stream/promises"),Lt=require("react"),Ns=Sa(require("stream-chain")),Vs=require("stream-json"),js=Sa(require("stream-json/filters/Pick")),ks=Sa(require("stream-json/streamers/StreamArray")),An=ur(),Fs=xt(),zs=ve();async function qt(e,t,a){if(typeof e=="object"||e.startsWith("http://")||e.startsWith("https://"))return await Hs(e,t,a);if(e.startsWith("file://"))return await Gs((0,da.normalize)(decodeURIComponent(new URL(e).pathname)),t,a?.signal?a.signal:void 0);throw new Error("Only HTTP(S) or file URLs are supported")}async function Hs(e,t,a){let r=await(0,mn.default)(e,a);if(!r.ok)throw new Error("Failed to fetch URL");if(!(0,An.isJSON)(r.headers.get("content-type")))throw new Error("URL does not return JSON");if(!r.body)throw new Error("Failed to retrieve expected JSON content: Response body is missing or inaccessible.");await(0,Rn.pipeline)(r.body,(0,Nt.createWriteStream)(t),a?.signal?{signal:a.signal}:void 0)}async function Gs(e,t,a){await(0,Rn.pipeline)((0,Nt.createReadStream)(e),(0,Nt.createWriteStream)(t),a?{signal:a}:void 0)}async function $s(e,t,a,r,n){let o=(0,da.join)(t,a);try{await(0,lr.stat)(t)}catch{(0,Nt.mkdirSync)(t,{recursive:!0}),await qt(e,o,n);return}if(r){await qt(e,o,n);return}let u;try{u=await(0,lr.stat)(o)}catch{await qt(e,o,n);return}if(typeof e=="object"||e.startsWith("http://")||e.startsWith("https://")){let s=await(0,mn.default)(e,{...n,method:"HEAD"});if(!s.ok)throw new Error("Could not fetch URL");if(!(0,An.isJSON)(s.headers.get("content-type")))throw new Error("URL does not return JSON");let i=Date.parse(s.headers.get("last-modified")??"");if(u.size===0||Number.isNaN(i)||i>u.mtimeMs){await qt(e,o,n);return}}else if(e.startsWith("file://"))try{(await(0,lr.stat)((0,da.normalize)(decodeURIComponent(new URL(e).pathname)))).mtimeMs>u.mtimeMs&&await qt(e,o,n)}catch{throw new Error("Source file could not be read")}else throw new Error("Only HTTP(S) or file URLs are supported")}async function*Qs(e,t,a,r,n,o){let u=[],s=new Ns.default([(0,Nt.createReadStream)(e),r?js.default.withParser({filter:r}):(0,Vs.parser)(),new ks.default,i=>o?.(i.value)??i.value]);a?.addEventListener("abort",()=>{s.destroy()});try{for await(let i of s){if(a?.aborted)return[];(!n||n(i))&&u.push(i),u.length>=t&&(yield u,u=[])}}catch(i){throw s.destroy(),i}return u.length>0&&(yield u),[]}function Ws(e,t){let{initialData:a,execute:r,keepPreviousData:n,onError:o,onData:u,onWillExecute:s,failureToastOptions:i,dataPath:p,filter:c,transform:y,pageSize:I=20,...m}=t??{},l=(0,Lt.useRef)(),S=(0,Lt.useRef)(),d={initialData:a,execute:r,keepPreviousData:n,onError:o,onData:u,onWillExecute:s,failureToastOptions:i},b=(0,Lt.useRef)(null),R=(0,Lt.useRef)(null),f=(0,Lt.useRef)(!1);return(0,Fs.useCachedPromise)((M,P,A,U,q,se)=>async({page:j})=>{let T=(0,zs.hash)(M)+".json",ue=qs.environment.supportPath;if(j===0){R.current?.abort(),R.current=new AbortController;let W=(0,da.join)(ue,T),Pt=!!(l.current&&l.current!==M&&S.current&&S.current===W);l.current=M,S.current=W,await $s(M,ue,T,Pt,{...A,signal:R.current?.signal}),b.current=Qs(W,P,R.current?.signal,U,q,se)}if(!b.current)return{hasMore:f.current,data:[]};let{value:ye,done:C}=await b.current.next();return f.current=!C,{hasMore:f.current,data:ye??[]}},[e,I,m,p,c,y],d)}lt.useStreamJSON=Ws});var yr=E(be=>{"use strict";var cr=be&&be.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(be,"__esModule",{value:!0});be.baseExecuteSQL=be.isPermissionError=be.PermissionError=void 0;var Ks=require("node:fs"),ba=require("node:fs/promises"),Ys=cr(require("node:os")),Pn=cr(require("node:child_process")),En=cr(require("node:path")),Ia=ya(),Js=ve(),Ma=class extends Error{constructor(t){super(t),this.name="PermissionError"}};be.PermissionError=Ma;function Zs(e){return e instanceof Error&&e.name==="PermissionError"}be.isPermissionError=Zs;async function Xs(e,t,a){if(!(0,Ks.existsSync)(e))throw new Error("The database does not exist");let r=a?.signal,n,o=Pn.default.spawn("sqlite3",["--json","--readonly",e,t],{signal:r}),u=(0,Ia.getSpawnedPromise)(o),[{error:s,exitCode:i,signal:p},c,y]=await(0,Ia.getSpawnedResult)(o,{encoding:"utf-8"},u);if(ga(r),y.match("(5)")||y.match("(14)")){if(!n){let I=En.default.join(Ys.default.tmpdir(),"useSQL",(0,Js.hash)(e));await(0,ba.mkdir)(I,{recursive:!0}),ga(r),n=En.default.join(I,"db.db"),await(0,ba.copyFile)(e,n),await(0,ba.writeFile)(n+"-shm",""),await(0,ba.writeFile)(n+"-wal",""),ga(r)}o=Pn.default.spawn("sqlite3",["--json","--readonly","--vfs","unix-none",n,t],{signal:r}),u=(0,Ia.getSpawnedPromise)(o),[{error:s,exitCode:i,signal:p},c,y]=await(0,Ia.getSpawnedResult)(o,{encoding:"utf-8"},u),ga(r)}if(s||i!==0||p!==null)throw y.includes("authorization denied")?new Ma("You do not have permission to access the database."):new Error(y||"Unknown error");return JSON.parse(c.trim()||"[]")}be.baseExecuteSQL=Xs;function ga(e){if(e?.aborted){let t=new Error("aborted");throw t.name="AbortError",t}}});var hn=E(ct=>{"use strict";var eu=ct&&ct.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ct,"__esModule",{value:!0});ct.useSQL=void 0;var Ie=require("react/jsx-runtime"),k=require("@raycast/api"),tu=require("node:fs"),au=eu(require("node:os")),ma=require("react"),ru=at(),nu=Ae(),ou=Ct(),dr=yr();function iu(e,t,a){let{permissionPriming:r,...n}=a||{},[o,u]=(0,ma.useState)(),s=(0,nu.useLatest)(a||{}),i=(0,ma.useRef)(),p=(0,ma.useCallback)(y=>{console.error(y);let I=y instanceof Error&&y.message.includes("authorization denied")?new dr.PermissionError("You do not have permission to access the database."):y;(0,dr.isPermissionError)(I)?u((0,Ie.jsx)(su,{priming:s.current.permissionPriming})):s.current.onError?s.current.onError(I):k.environment.launchType!==k.LaunchType.Background&&(0,ou.showFailureToast)(I,{title:"Cannot query the data"})},[s]),c=(0,ma.useMemo)(()=>{if(!(0,tu.existsSync)(e))throw new Error("The database does not exist");return async(y,I)=>{let m=i.current?.signal;return(0,dr.baseExecuteSQL)(y,I,{signal:m})}},[e]);return{...(0,ru.usePromise)(c,[e,t],{...n,onError:p}),permissionView:o}}ct.useSQL=iu;var Cn=parseInt(au.default.release().split(".")[0])>=22,Sr=Cn?"Settings":"Preferences";function su(e){let t=Cn?{title:"Open System Settings -> Privacy",target:"x-apple.systempreferences:com.apple.preference.security?Privacy_AllFiles"}:{title:"Open System Preferences -> Security",target:"x-apple.systempreferences:com.apple.preference.security?Privacy_AllFiles"};return k.environment.commandMode==="menu-bar"?(0,Ie.jsxs)(k.MenuBarExtra,{icon:k.Icon.Warning,title:k.environment.commandName,children:[(0,Ie.jsx)(k.MenuBarExtra.Item,{title:"Raycast needs full disk access",tooltip:`You can revert this access in ${Sr} whenever you want`}),e.priming?(0,Ie.jsx)(k.MenuBarExtra.Item,{title:e.priming,tooltip:`You can revert this access in ${Sr} whenever you want`}):null,(0,Ie.jsx)(k.MenuBarExtra.Separator,{}),(0,Ie.jsx)(k.MenuBarExtra.Item,{title:t.title,onAction:()=>(0,k.open)(t.target)})]}):(0,Ie.jsx)(k.List,{children:(0,Ie.jsx)(k.List.EmptyView,{icon:{source:{light:"https://raycast.com/uploads/extensions-utils-security-permissions-light.png",dark:"https://raycast.com/uploads/extensions-utils-security-permissions-dark.png"}},title:"Raycast needs full disk access.",description:`${e.priming?e.priming+`
`:""}You can revert this access in ${Sr} whenever you want.`,actions:(0,Ie.jsx)(k.ActionPanel,{children:(0,Ie.jsx)(k.Action.Open,{...t})})})})}});var xn=E(yt=>{"use strict";Object.defineProperty(yt,"__esModule",{value:!0});yt.useForm=yt.FormValidation=void 0;var Ce=require("react"),Dn=Ae(),Ir;(function(e){e.Required="required"})(Ir||(yt.FormValidation=Ir={}));function br(e,t){if(e){if(typeof e=="function")return e(t);if(e===Ir.Required){let a=typeof t<"u"&&t!==null;if(a)switch(typeof t){case"string":a=t.length>0;break;case"object":Array.isArray(t)?a=t.length>0:t instanceof Date&&(a=t.getTime()>0);break;default:break}if(!a)return"The item is required"}}}function uu(e){let{onSubmit:t,validation:a,initialValues:r={}}=e,[n,o]=(0,Ce.useState)(r),[u,s]=(0,Ce.useState)({}),i=(0,Ce.useRef)({}),p=(0,Dn.useLatest)(a||{}),c=(0,Dn.useLatest)(t),y=(0,Ce.useCallback)(b=>{i.current[b]?.focus()},[i]),I=(0,Ce.useCallback)(async b=>{let R=!1;for(let[M,P]of Object.entries(p.current)){let A=br(P,b[M]);A&&(R||(R={},y(M)),R[M]=A)}if(R)return s(R),!1;let f=await c.current(b);return typeof f=="boolean"?f:!0},[p,c,y]),m=(0,Ce.useCallback)((b,R)=>{s(f=>({...f,[b]:R}))},[s]),l=(0,Ce.useCallback)(function(b,R){o(f=>({...f,[b]:typeof R=="function"?R(f[b]):R}))},[o]),S=(0,Ce.useMemo)(()=>new Proxy({},{get(b,R){let f=p.current[R],M=n[R];return{onChange(P){u[R]&&(br(f,P)||m(R,void 0)),l(R,P)},onBlur(P){let A=br(f,P.target.value);A&&m(R,A)},error:u[R],id:R,value:typeof M>"u"?null:M,ref:P=>{i.current[R]=P}}}}),[u,p,m,n,i,l]),d=(0,Ce.useCallback)(b=>{s({}),Object.entries(i.current).forEach(([R,f])=>{b?.[R]||f?.reset()}),b&&o(b)},[o,s,i]);return{handleSubmit:I,setValidationError:m,setValue:l,values:n,itemProps:S,focus:y,reset:d}}yt.useForm=uu});var _n=E(Ra=>{"use strict";Object.defineProperty(Ra,"__esModule",{value:!0});Ra.useAI=void 0;var Un=require("react"),pu=require("@raycast/api"),lu=at();function cu(e,t={}){let{creativity:a,stream:r,model:n,...o}=t,[u,s]=(0,Un.useState)(""),i=(0,Un.useRef)(),{isLoading:p,error:c,revalidate:y}=(0,lu.usePromise)(async(I,m,l)=>{s("");let S=pu.AI.ask(I,{creativity:m,model:n,signal:i.current?.signal});l===!1?s(await S):(S.on("data",d=>{s(b=>b+d)}),await S)},[e,a,r],{...o,abortable:i});return{isLoading:p,data:u,error:c,revalidate:y}}Ra.useAI=cu});var wn=E(Aa=>{"use strict";Object.defineProperty(Aa,"__esModule",{value:!0});Aa.useFrecencySorting=void 0;var gr=require("react"),vn=Ae(),yu=oa(),du=10,Tn=1440*60*1e3,Su=Math.log(2)/(du*Tn),bu={Default:100,Embed:0,Bookmark:140};function Iu(e){let t=Date.now(),a=e?e.lastVisited:0,r=e?e.frecency:0,n=(t-a)/Tn,o=bu.Default*Math.exp(-Su*n),u=r+o;return{lastVisited:t,frecency:u}}var gu=e=>{if(process.env.NODE_ENV!=="production"&&(typeof e!="object"||!e||!("id"in e)||typeof e.id!="string"))throw new Error("Specify a key function or make sure your items have an 'id' property");return e.id};function Mu(e,t){let a=(0,vn.useLatest)(t?.key||gu),r=(0,vn.useLatest)(t?.sortUnvisited),[n,o]=(0,yu.useCachedState)(`raycast_frecency_${t?.namespace}`,{}),u=(0,gr.useCallback)(async function(c){let y=a.current(c);o(I=>{let m=I[y],l=Iu(m);return{...I,[y]:l}})},[a,o]),s=(0,gr.useCallback)(async function(c){let y=a.current(c);o(I=>{let m={...I};return delete m[y],m})},[a,o]);return{data:(0,gr.useMemo)(()=>e?e.sort((p,c)=>{let y=n[a.current(p)],I=n[a.current(c)];return y&&!I?-1:!y&&I?1:y&&I?I.frecency-y.frecency:r.current?r.current(p,c):0}):[],[n,e,a,r]),visitItem:u,resetRanking:s}}Aa.useFrecencySorting=Mu});var Ln=E(fa=>{"use strict";Object.defineProperty(fa,"__esModule",{value:!0});fa.useLocalStorage=void 0;var Mr=require("@raycast/api"),On=Ct(),Bn=ve(),mu=at();function Ru(e,t){let{data:a,isLoading:r,mutate:n}=(0,mu.usePromise)(async s=>{let i=await Mr.LocalStorage.getItem(s);return typeof i<"u"?JSON.parse(i,Bn.reviver):t},[e]);async function o(s){try{await n(Mr.LocalStorage.setItem(e,JSON.stringify(s,Bn.replacer)),{optimisticUpdate(i){return i}})}catch(i){await(0,On.showFailureToast)(i,{title:"Failed to set value in local storage"})}}async function u(){try{await n(Mr.LocalStorage.removeItem(e),{optimisticUpdate(){}})}catch(s){await(0,On.showFailureToast)(s,{title:"Failed to remove value from local storage"})}}return{value:a,setValue:o,removeValue:u,isLoading:r}}fa.useLocalStorage=Ru});var kn=E(dt=>{"use strict";Object.defineProperty(dt,"__esModule",{value:!0});dt.slightlyLighterColor=dt.slightlyDarkerColor=void 0;function Au(e){let t=0,a=0,r=0;if(e.length===4)t=parseInt(`${e[1]}${e[1]}`,16),a=parseInt(`${e[2]}${e[2]}`,16),r=parseInt(`${e[3]}${e[3]}`,16);else if(e.length===7)t=parseInt(`${e[1]}${e[2]}`,16),a=parseInt(`${e[3]}${e[4]}`,16),r=parseInt(`${e[5]}${e[6]}`,16);else throw new Error(`Malformed hex color: ${e}`);return{r:t,g:a,b:r}}function fu({r:e,g:t,b:a}){let r=e.toString(16),n=t.toString(16),o=a.toString(16);return r.length===1&&(r=`0${r}`),n.length===1&&(n=`0${n}`),o.length===1&&(o=`0${o}`),`#${r}${n}${o}`}function Pu({r:e,g:t,b:a}){e/=255,t/=255,a/=255;let r=Math.min(e,t,a),n=Math.max(e,t,a),o=n-r,u=0,s=0,i=0;return o===0?u=0:n===e?u=(t-a)/o%6:n===t?u=(a-e)/o+2:u=(e-t)/o+4,u=Math.round(u*60),u<0&&(u+=360),i=(n+r)/2,s=o===0?0:o/(1-Math.abs(2*i-1)),s=+(s*100).toFixed(1),i=+(i*100).toFixed(1),{h:u,s,l:i}}function Eu({h:e,s:t,l:a}){t/=100,a/=100;let r=(1-Math.abs(2*a-1))*t,n=r*(1-Math.abs(e/60%2-1)),o=a-r/2,u=0,s=0,i=0;return e>=0&&e<60?(u=r,s=n,i=0):e>=60&&e<120?(u=n,s=r,i=0):e>=120&&e<180?(u=0,s=r,i=n):e>=180&&e<240?(u=0,s=n,i=r):e>=240&&e<300?(u=n,s=0,i=r):e>=300&&e<360&&(u=r,s=0,i=n),u=Math.round((u+o)*255),s=Math.round((s+o)*255),i=Math.round((i+o)*255),{r:u,g:s,b:i}}function qn(e){return Pu(Au(e))}function Nn(e){return fu(Eu(e))}function Vn(e,t,a){return t<a?e<t?t:e>a?a:e:e<a?a:e>t?t:e}var jn=12;function Cu(e){let t=qn(e);return Nn({h:t.h,s:t.s,l:Vn(t.l-jn,0,100)})}dt.slightlyDarkerColor=Cu;function hu(e){let t=qn(e);return Nn({h:t.h,s:t.s,l:Vn(t.l+jn,0,100)})}dt.slightlyLighterColor=hu});var Hn=E(Pa=>{"use strict";Object.defineProperty(Pa,"__esModule",{value:!0});Pa.getAvatarIcon=void 0;var Fn=kn();function St(e,t){let a=e.charCodeAt(t);if(Number.isNaN(a))return["",t];if(a<55296||a>57343)return[e.charAt(t),t];if(55296<=a&&a<=56319){if(e.length<=t+1)throw new Error("High surrogate without following low surrogate");let n=e.charCodeAt(t+1);if(56320>n||n>57343)throw new Error("High surrogate without following low surrogate");return[e.charAt(t)+e.charAt(t+1),t+1]}if(t===0)throw new Error("Low surrogate without preceding high surrogate");let r=e.charCodeAt(t-1);if(55296>r||r>56319)throw new Error("Low surrogate without preceding high surrogate");return[e.charAt(t+1),t+1]}var zn=["#DC829A","#D64854","#D47600","#D36CDD","#52A9E4","#7871E8","#70920F","#43B93A","#EB6B3E","#26B795","#D85A9B","#A067DC","#BD9500","#5385D9"];function Du(e,t){let a=e.trim().split(" "),r;if(a.length==1&&St(a[0],0)[0])r=St(a[0],0)[0];else if(a.length>1){let i=St(a[0],0)[0]||"",p=St(a[a.length-1],0)[0]??"";r=i+p}else r="";let n;if(t?.background)n=t?.background;else{let i=0,[p,c]=St(r,0);for(;p;)i+=p.charCodeAt(0),[p,c]=St(r,c+1);let y=i%zn.length;n=zn[y]}let u=50-0;return`data:image/svg+xml,${`<svg width="100px" height="100px">
  ${t?.gradient!==!1?`<defs>
      <linearGradient id="Gradient" x1="0.25" x2="0.75" y1="0" y2="1">
        <stop offset="0%" stop-color="${(0,Fn.slightlyLighterColor)(n)}"/>
        <stop offset="50%" stop-color="${n}"/>
        <stop offset="100%" stop-color="${(0,Fn.slightlyDarkerColor)(n)}"/>
      </linearGradient>
  </defs>`:""}
      <circle cx="50" cy="50" r="${u}" fill="${t?.gradient!==!1?"url(#Gradient)":n}" />
      ${r?`<text x="50" y="80" font-size="${u-1}" font-family="Inter, sans-serif" text-anchor="middle" fill="white">${r.toUpperCase()}</text>`:""}
    </svg>
  `.replaceAll(`
`,"")}`}Pa.getAvatarIcon=Du});var $n=E(Ea=>{"use strict";Object.defineProperty(Ea,"__esModule",{value:!0});Ea.getFavicon=void 0;var Gn=require("@raycast/api"),xu=require("url");function Uu(e,t){try{let r=(typeof e=="string"?new xu.URL(e):e).hostname;return{source:`https://www.google.com/s2/favicons?sz=${t?.size??64}&domain=${r}`,fallback:t?.fallback??Gn.Icon.Link,mask:t?.mask}}catch(a){return console.error(a),Gn.Icon.Link}}Ea.getFavicon=Uu});var Kn=E(Ca=>{"use strict";Object.defineProperty(Ca,"__esModule",{value:!0});Ca.getProgressIcon=void 0;var Qn=require("@raycast/api");function Wn(e,t,a,r){let n=(r-90)*Math.PI/180;return{x:e+a*Math.cos(n),y:t+a*Math.sin(n)}}function _u(e,t,a,r,n){let o=Wn(e,t,a,n),u=Wn(e,t,a,r),s=n-r<=180?"0":"1";return["M",o.x,o.y,"A",a,a,0,s,0,u.x,u.y].join(" ")}function vu(e,t=Qn.Color.Red,a){let r=a?.background||(Qn.environment.appearance==="light"?"black":"white"),n=a?.backgroundOpacity||.1,o=10,s=50-5-o/2;return`data:image/svg+xml,${`<svg width="100px" height="100px">
      <circle cx="50" cy="50" r="${s}" stroke-width="${o}" stroke="${e<1?r:t}" opacity="${e<1?n:"1"}" fill="none" />
      ${e>0&&e<1?`<path d="${_u(50,50,s,0,e*360)}" stroke="${t}" stroke-width="${o}" fill="none" />`:""}
    </svg>
  `.replaceAll(`
`,"")}`}Ca.getProgressIcon=vu});var Yn=E(he=>{"use strict";var Tu=he&&he.__createBinding||(Object.create?(function(e,t,a,r){r===void 0&&(r=a);var n=Object.getOwnPropertyDescriptor(t,a);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,n)}):(function(e,t,a,r){r===void 0&&(r=a),e[r]=t[a]})),mr=he&&he.__exportStar||function(e,t){for(var a in e)a!=="default"&&!Object.prototype.hasOwnProperty.call(t,a)&&Tu(t,e,a)};Object.defineProperty(he,"__esModule",{value:!0});mr(Hn(),he);mr($n(),he);mr(Kn(),he)});var Jn=E(V=>{"use strict";Object.defineProperty(V,"__esModule",{value:!0});V.zoomService=V.slackService=V.linearService=V.jiraService=V.googleService=V.githubService=V.asanaService=void 0;var F=require("@raycast/api"),ze=Rr(),ha={asana:"1191201745684312",github:"7235fe8d42157f1f38c0",linear:"c8ff37b9225c3c9aefd7d66ea0e5b6f1",slack:"851756884692.5546927290212"},Be=e=>`data:image/svg+xml,${e}`,He={asana:Be('<svg xmlns="http://www.w3.org/2000/svg" width="251" height="232" fill="none"><path fill="#F06A6A" d="M179.383 54.373c0 30.017-24.337 54.374-54.354 54.374-30.035 0-54.373-24.338-54.373-54.374C70.656 24.338 94.993 0 125.029 0c30.017 0 54.354 24.338 54.354 54.373ZM54.393 122.33C24.376 122.33.02 146.668.02 176.685c0 30.017 24.337 54.373 54.373 54.373 30.035 0 54.373-24.338 54.373-54.373 0-30.017-24.338-54.355-54.373-54.355Zm141.253 0c-30.035 0-54.373 24.338-54.373 54.374 0 30.035 24.338 54.373 54.373 54.373 30.017 0 54.374-24.338 54.374-54.373 0-30.036-24.338-54.374-54.374-54.374Z"/></svg>'),github:{source:Be('<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>'),tintColor:F.Color.PrimaryText},google:Be('<svg xmlns="http://www.w3.org/2000/svg" style="display:block" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/><path fill="none" d="M0 0h48v48H0z"/></svg>'),jira:Be('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="2361" height="2500" viewBox="2.59 0 214.091 224"><linearGradient id="a" x1="102.4" x2="56.15" y1="218.63" y2="172.39" gradientTransform="matrix(1 0 0 -1 0 264)" gradientUnits="userSpaceOnUse"><stop offset=".18" stop-color="#0052cc"/><stop offset="1" stop-color="#2684ff"/></linearGradient><linearGradient xlink:href="#a" id="b" x1="114.65" x2="160.81" y1="85.77" y2="131.92"/><path fill="#2684ff" d="M214.06 105.73 117.67 9.34 108.33 0 35.77 72.56 2.59 105.73a8.89 8.89 0 0 0 0 12.54l66.29 66.29L108.33 224l72.55-72.56 1.13-1.12 32.05-32a8.87 8.87 0 0 0 0-12.59zm-105.73 39.39L75.21 112l33.12-33.12L141.44 112z"/><path fill="url(#a)" d="M108.33 78.88a55.75 55.75 0 0 1-.24-78.61L35.62 72.71l39.44 39.44z"/><path fill="url(#b)" d="m141.53 111.91-33.2 33.21a55.77 55.77 0 0 1 0 78.86L181 151.35z"/></svg>'),linear:{source:{light:Be('<svg xmlns="http://www.w3.org/2000/svg" fill="#222326" width="200" height="200" viewBox="0 0 100 100"><path d="M1.22541 61.5228c-.2225-.9485.90748-1.5459 1.59638-.857L39.3342 97.1782c.6889.6889.0915 1.8189-.857 1.5964C20.0515 94.4522 5.54779 79.9485 1.22541 61.5228ZM.00189135 46.8891c-.01764375.2833.08887215.5599.28957165.7606L52.3503 99.7085c.2007.2007.4773.3075.7606.2896 2.3692-.1476 4.6938-.46 6.9624-.9259.7645-.157 1.0301-1.0963.4782-1.6481L2.57595 39.4485c-.55186-.5519-1.49117-.2863-1.648174.4782-.465915 2.2686-.77832 4.5932-.92588465 6.9624ZM4.21093 29.7054c-.16649.3738-.08169.8106.20765 1.1l64.77602 64.776c.2894.2894.7262.3742 1.1.2077 1.7861-.7956 3.5171-1.6927 5.1855-2.684.5521-.328.6373-1.0867.1832-1.5407L8.43566 24.3367c-.45409-.4541-1.21271-.3689-1.54074.1832-.99132 1.6684-1.88843 3.3994-2.68399 5.1855ZM12.6587 18.074c-.3701-.3701-.393-.9637-.0443-1.3541C21.7795 6.45931 35.1114 0 49.9519 0 77.5927 0 100 22.4073 100 50.0481c0 14.8405-6.4593 28.1724-16.7199 37.3375-.3903.3487-.984.3258-1.3542-.0443L12.6587 18.074Z"/></svg>'),dark:Be('<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="200" height="200" viewBox="0 0 100 100"><path d="M1.22541 61.5228c-.2225-.9485.90748-1.5459 1.59638-.857L39.3342 97.1782c.6889.6889.0915 1.8189-.857 1.5964C20.0515 94.4522 5.54779 79.9485 1.22541 61.5228ZM.00189135 46.8891c-.01764375.2833.08887215.5599.28957165.7606L52.3503 99.7085c.2007.2007.4773.3075.7606.2896 2.3692-.1476 4.6938-.46 6.9624-.9259.7645-.157 1.0301-1.0963.4782-1.6481L2.57595 39.4485c-.55186-.5519-1.49117-.2863-1.648174.4782-.465915 2.2686-.77832 4.5932-.92588465 6.9624ZM4.21093 29.7054c-.16649.3738-.08169.8106.20765 1.1l64.77602 64.776c.2894.2894.7262.3742 1.1.2077 1.7861-.7956 3.5171-1.6927 5.1855-2.684.5521-.328.6373-1.0867.1832-1.5407L8.43566 24.3367c-.45409-.4541-1.21271-.3689-1.54074.1832-.99132 1.6684-1.88843 3.3994-2.68399 5.1855ZM12.6587 18.074c-.3701-.3701-.393-.9637-.0443-1.3541C21.7795 6.45931 35.1114 0 49.9519 0 77.5927 0 100 22.4073 100 50.0481c0 14.8405-6.4593 28.1724-16.7199 37.3375-.3903.3487-.984.3258-1.3542-.0443L12.6587 18.074Z" /></svg>')}},slack:Be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="73 73 124 124"><style>.st0{fill:#e01e5a}.st1{fill:#36c5f0}.st2{fill:#2eb67d}.st3{fill:#ecb22e}</style><path d="M99.4 151.2c0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9h12.9v12.9zM105.9 151.2c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v32.3c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9v-32.3z" class="st0"/><path d="M118.8 99.4c-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v12.9h-12.9zM118.8 105.9c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H86.5c-7.1 0-12.9-5.8-12.9-12.9s5.8-12.9 12.9-12.9h32.3z" class="st1"/><path d="M170.6 118.8c0-7.1 5.8-12.9 12.9-12.9 7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9h-12.9v-12.9zM164.1 118.8c0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9V86.5c0-7.1 5.8-12.9 12.9-12.9 7.1 0 12.9 5.8 12.9 12.9v32.3z" class="st2"/><path d="M151.2 170.6c7.1 0 12.9 5.8 12.9 12.9 0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9v-12.9h12.9zM151.2 164.1c-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9h32.3c7.1 0 12.9 5.8 12.9 12.9 0 7.1-5.8 12.9-12.9 12.9h-32.3z" class="st3"/></svg>'),zoom:Be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 351.845 80"><path d="M73.786 78.835H10.88A10.842 10.842 0 0 1 .833 72.122a10.841 10.841 0 0 1 2.357-11.85L46.764 16.7h-31.23C6.954 16.699 0 9.744 0 1.165h58.014c4.414 0 8.357 2.634 10.046 6.712a10.843 10.843 0 0 1-2.356 11.85L22.13 63.302h36.122c8.58 0 15.534 6.955 15.534 15.534Zm278.059-48.544C351.845 13.588 338.256 0 321.553 0c-8.934 0-16.975 3.89-22.524 10.063C293.48 3.89 285.44 0 276.505 0c-16.703 0-30.291 13.588-30.291 30.291v48.544c8.579 0 15.534-6.955 15.534-15.534v-33.01c0-8.137 6.62-14.757 14.757-14.757s14.757 6.62 14.757 14.757v33.01c0 8.58 6.955 15.534 15.534 15.534V30.291c0-8.137 6.62-14.757 14.757-14.757s14.758 6.62 14.758 14.757v33.01c0 8.58 6.954 15.534 15.534 15.534V30.291ZM238.447 40c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.908-40 40-40 40 17.909 40 40Zm-15.534 0c0-13.512-10.954-24.466-24.466-24.466S173.98 26.488 173.98 40s10.953 24.466 24.466 24.466S222.913 53.512 222.913 40Zm-70.68 0c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.909-40 40-40 40 17.909 40 40Zm-15.534 0c0-13.512-10.954-24.466-24.466-24.466S87.767 26.488 87.767 40s10.954 24.466 24.466 24.466S136.699 53.512 136.699 40Z" style="fill:#0b5cff"/></svg>')},wu=e=>new ze.OAuthService({client:new F.OAuth.PKCEClient({redirectMethod:F.OAuth.RedirectMethod.Web,providerName:"Asana",providerIcon:He.asana,providerId:"asana",description:"Connect your Asana account"}),clientId:e.clientId??ha.asana,authorizeUrl:e.authorizeUrl??"https://asana.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://asana.oauth.raycast.com/token",refreshTokenUrl:e.refreshTokenUrl??"https://asana.oauth.raycast.com/refresh-token",scope:e.scope,personalAccessToken:e.personalAccessToken,onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});V.asanaService=wu;var Ou=e=>new ze.OAuthService({client:new F.OAuth.PKCEClient({redirectMethod:F.OAuth.RedirectMethod.Web,providerName:"GitHub",providerIcon:He.github,providerId:"github",description:"Connect your GitHub account"}),clientId:e.clientId??ha.github,authorizeUrl:e.authorizeUrl??"https://github.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://github.oauth.raycast.com/token",refreshTokenUrl:e.refreshTokenUrl??"https://github.oauth.raycast.com/refresh-token",scope:e.scope,personalAccessToken:e.personalAccessToken,onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});V.githubService=Ou;var Bu=e=>new ze.OAuthService({client:new F.OAuth.PKCEClient({redirectMethod:F.OAuth.RedirectMethod.AppURI,providerName:"Google",providerIcon:He.google,providerId:"google",description:"Connect your Google account"}),clientId:e.clientId,authorizeUrl:e.authorizeUrl??"https://accounts.google.com/o/oauth2/v2/auth",tokenUrl:e.tokenUrl??"https://oauth2.googleapis.com/token",refreshTokenUrl:e.tokenUrl,scope:e.scope,personalAccessToken:e.personalAccessToken,bodyEncoding:e.bodyEncoding??"url-encoded",onAuthorize:e.onAuthorize,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});V.googleService=Bu;var Lu=e=>new ze.OAuthService({client:new F.OAuth.PKCEClient({redirectMethod:F.OAuth.RedirectMethod.Web,providerName:"Jira",providerIcon:He.jira,providerId:"jira",description:"Connect your Jira account"}),clientId:e.clientId,authorizeUrl:e.authorizeUrl??"https://auth.atlassian.com/authorize",tokenUrl:e.tokenUrl??"https://auth.atlassian.com/oauth/token",refreshTokenUrl:e.refreshTokenUrl,scope:e.scope,personalAccessToken:e.personalAccessToken,onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});V.jiraService=Lu;var qu=e=>new ze.OAuthService({client:new F.OAuth.PKCEClient({redirectMethod:F.OAuth.RedirectMethod.Web,providerName:"Linear",providerIcon:He.linear,providerId:"linear",description:"Connect your Linear account"}),clientId:e.clientId??ha.linear,authorizeUrl:e.authorizeUrl??"https://linear.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://linear.oauth.raycast.com/token",refreshTokenUrl:e.refreshTokenUrl??"https://linear.oauth.raycast.com/refresh-token",scope:e.scope,extraParameters:{actor:"user"},onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});V.linearService=qu;var Nu=e=>new ze.OAuthService({client:new F.OAuth.PKCEClient({redirectMethod:F.OAuth.RedirectMethod.Web,providerName:"Slack",providerIcon:He.slack,providerId:"slack",description:"Connect your Slack account"}),clientId:e.clientId??ha.slack,authorizeUrl:e.authorizeUrl??"https://slack.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://slack.oauth.raycast.com/token",refreshTokenUrl:e.tokenUrl??"https://slack.oauth.raycast.com/refresh-token",scope:"",extraParameters:{user_scope:e.scope},personalAccessToken:e.personalAccessToken,bodyEncoding:e.tokenUrl?e.bodyEncoding??"url-encoded":"json",onAuthorize:e.onAuthorize,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser??(t=>({access_token:t.authed_user.access_token,scope:t.authed_user.scope}))});V.slackService=Nu;var Vu=e=>new ze.OAuthService({client:new F.OAuth.PKCEClient({redirectMethod:F.OAuth.RedirectMethod.Web,providerName:"Zoom",providerIcon:He.zoom,providerId:"zoom",description:"Connect your Zoom account"}),clientId:e.clientId,authorizeUrl:e.authorizeUrl??"https://zoom.us/oauth/authorize",tokenUrl:e.tokenUrl??"https://zoom.us/oauth/token",refreshTokenUrl:e.refreshTokenUrl,scope:e.scope,personalAccessToken:e.personalAccessToken,bodyEncoding:e.bodyEncoding??"url-encoded",onAuthorize:e.onAuthorize,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});V.zoomService=Vu});var Rr=E(bt=>{"use strict";var ju=bt&&bt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(bt,"__esModule",{value:!0});bt.OAuthService=void 0;var Zn=ju(Ot()),Ge=Jn(),ge=class{constructor(t){this.clientId=t.clientId,this.scope=Array.isArray(t.scope)?t.scope.join(" "):t.scope,this.personalAccessToken=t.personalAccessToken,this.bodyEncoding=t.bodyEncoding,this.client=t.client,this.extraParameters=t.extraParameters,this.authorizeUrl=t.authorizeUrl,this.tokenUrl=t.tokenUrl,this.refreshTokenUrl=t.refreshTokenUrl,this.onAuthorize=t.onAuthorize,this.tokenResponseParser=t.tokenResponseParser??(a=>a),this.tokenRefreshResponseParser=t.tokenRefreshResponseParser??(a=>a),this.authorize=this.authorize.bind(this)}async authorize(){let t=await this.client.getTokens();if(t?.accessToken){if(t.refreshToken&&t.isExpired()){let o=await this.refreshTokens({token:t.refreshToken});if(o)return await this.client.setTokens(o),o.access_token}return t.accessToken}let a=await this.client.authorizationRequest({endpoint:this.authorizeUrl,clientId:this.clientId,scope:this.scope,extraParameters:this.extraParameters}),{authorizationCode:r}=await this.client.authorize(a),n=await this.fetchTokens({authRequest:a,authorizationCode:r});return await this.client.setTokens(n),n.access_token}async fetchTokens({authRequest:t,authorizationCode:a}){let r;if(this.bodyEncoding==="url-encoded"){let u=new URLSearchParams;u.append("client_id",this.clientId),u.append("code",a),u.append("code_verifier",t.codeVerifier),u.append("grant_type","authorization_code"),u.append("redirect_uri",t.redirectURI),r={body:u}}else r={body:JSON.stringify({client_id:this.clientId,code:a,code_verifier:t.codeVerifier,grant_type:"authorization_code",redirect_uri:t.redirectURI}),headers:{"Content-Type":"application/json"}};let n=await(0,Zn.default)(this.tokenUrl,{method:"POST",...r});if(!n.ok){let u=await n.text();throw console.error("fetch tokens error:",u),new Error(`Error while fetching tokens: ${n.status} (${n.statusText})
${u}`)}let o=this.tokenResponseParser(await n.json());return Array.isArray(o.scope)?{...o,scope:o.scope.join(" ")}:o}async refreshTokens({token:t}){let a;if(this.bodyEncoding==="url-encoded"){let n=new URLSearchParams;n.append("client_id",this.clientId),n.append("refresh_token",t),n.append("grant_type","refresh_token"),a={body:n}}else a={body:JSON.stringify({client_id:this.clientId,refresh_token:t,grant_type:"refresh_token"}),headers:{"Content-Type":"application/json"}};let r=await(0,Zn.default)(this.refreshTokenUrl??this.tokenUrl,{method:"POST",...a});if(r.ok){let n=this.tokenRefreshResponseParser(await r.json());return n.refresh_token=n.refresh_token??t,n}else{let n=await r.text();console.error("refresh tokens error:",n),this.client.description=`${this.client.providerName} needs you to sign-in again. Press \u23CE or click the button below to continue.`,await this.client.removeTokens(),await this.authorize()}}};bt.OAuthService=ge;ge.asana=Ge.asanaService;ge.github=Ge.githubService;ge.google=Ge.googleService;ge.jira=Ge.jiraService;ge.linear=Ge.linearService;ge.slack=Ge.slackService;ge.zoom=Ge.zoomService});var Xn=E(It=>{"use strict";Object.defineProperty(It,"__esModule",{value:!0});It.getAccessToken=It.withAccessToken=void 0;var ku=require("react/jsx-runtime"),Fu=require("@raycast/api"),Le=null,$e=null,Ar=null,fr=null,Pr=null;function zu(e){return Fu.environment.commandMode==="no-view"?t=>async r=>{if(!Le){Le=e.personalAccessToken??await e.authorize(),$e=e.personalAccessToken?"personal":"oauth";let n=(await e.client?.getTokens())?.idToken;e.onAuthorize&&await Promise.resolve(e.onAuthorize({token:Le,type:$e,idToken:n}))}return t(r)}:t=>{let a=r=>{e.personalAccessToken?(Le=e.personalAccessToken,$e="personal"):(Ar||(Ar=Er(e.authorize())),Le=Ar.read(),$e="oauth");let n;return e.client&&(fr||(fr=Er(e.client.getTokens())),n=fr.read()?.idToken),!Pr&&e.onAuthorize&&(Pr=Er(Promise.resolve(e.onAuthorize({token:Le,type:$e,idToken:n})))),Pr?.read(),(0,ku.jsx)(t,{...r})};return a.displayName=`withAccessToken(${t.displayName||t.name})`,a}}It.withAccessToken=zu;function Hu(){if(!Le||!$e)throw new Error("getAccessToken must be used when authenticated (eg. used inside `withAccessToken`)");return{token:Le,type:$e}}It.getAccessToken=Hu;function Er(e){let t="pending",a,r=e.then(o=>{t="success",a=o},o=>{t="error",a=o});return{read:()=>{switch(t){case"pending":throw r;case"error":throw a;default:return a}}}}});var to=E(qe=>{"use strict";var Gu=qe&&qe.__createBinding||(Object.create?(function(e,t,a,r){r===void 0&&(r=a);var n=Object.getOwnPropertyDescriptor(t,a);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,n)}):(function(e,t,a,r){r===void 0&&(r=a),e[r]=t[a]})),eo=qe&&qe.__exportStar||function(e,t){for(var a in e)a!=="default"&&!Object.prototype.hasOwnProperty.call(t,a)&&Gu(t,e,a)};Object.defineProperty(qe,"__esModule",{value:!0});eo(Rr(),qe);eo(Xn(),qe)});var io=E(ne=>{"use strict";var ao=ne&&ne.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ne,"__esModule",{value:!0});ne.createDeeplink=ne.createExtensionDeeplink=ne.createScriptCommandDeeplink=ne.DeeplinkType=void 0;var hr=require("@raycast/api"),$u=ao(require("node:fs")),Qu=ao(require("node:path")),Cr;(function(e){e.ScriptCommand="script-command",e.Extension="extension"})(Cr||(ne.DeeplinkType=Cr={}));function ro(){return hr.environment.raycastVersion.includes("alpha")?"raycastinternal://":"raycast://"}function Wu(){let e=JSON.parse($u.default.readFileSync(Qu.default.join(hr.environment.assetsPath,"..","package.json"),"utf8"));return e.owner||e.author}function no(e){let t=`${ro()}script-commands/${e.command}`;if(e.arguments){let a="";for(let r of e.arguments)a+="&arguments="+encodeURIComponent(r);t+="?"+a.substring(1)}return t}ne.createScriptCommandDeeplink=no;function oo(e){let t=Wu(),a=hr.environment.extensionName;"ownerOrAuthorName"in e&&"extensionName"in e&&(t=e.ownerOrAuthorName,a=e.extensionName);let r=`${ro()}extensions/${t}/${a}/${e.command}`,n="";return e.launchType&&(n+="&launchType="+encodeURIComponent(e.launchType)),e.arguments&&(n+="&arguments="+encodeURIComponent(JSON.stringify(e.arguments))),e.context&&(n+="&context="+encodeURIComponent(JSON.stringify(e.context))),e.fallbackText&&(n+="&fallbackText="+encodeURIComponent(e.fallbackText)),n&&(r+="?"+n.substring(1)),r}ne.createExtensionDeeplink=oo;function Ku(e){return e.type===Cr.ScriptCommand?no(e):oo(e)}ne.createDeeplink=Ku});var so=E(Da=>{"use strict";Object.defineProperty(Da,"__esModule",{value:!0});Da.executeSQL=void 0;var Yu=yr();function Ju(e,t){return(0,Yu.baseExecuteSQL)(e,t)}Da.executeSQL=Ju});var uo=E(gt=>{"use strict";var Zu=gt&&gt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(gt,"__esModule",{value:!0});gt.runAppleScript=void 0;var Xu=Zu(require("node:child_process")),Vt=ya();async function ep(e,t,a){let{humanReadableOutput:r,language:n,timeout:o,...u}=Array.isArray(t)?a||{}:t||{},s=r!==!1?[]:["-ss"];n==="JavaScript"&&s.push("-l","JavaScript"),Array.isArray(t)&&s.push("-",...t);let i=Xu.default.spawn("osascript",s,{...u,env:{PATH:"/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"}}),p=(0,Vt.getSpawnedPromise)(i,{timeout:o??1e4});i.stdin.end(e);let[{error:c,exitCode:y,signal:I,timedOut:m},l,S]=await(0,Vt.getSpawnedResult)(i,{encoding:"utf8"},p),d=(0,Vt.handleOutput)({stripFinalNewline:!0},l),b=(0,Vt.handleOutput)({stripFinalNewline:!0},S);return(0,Vt.defaultParsing)({stdout:d,stderr:b,error:c,exitCode:y,signal:I,timedOut:m,command:"osascript",options:a,parentError:new Error})}gt.runAppleScript=ep});var po=E(Ua=>{"use strict";Object.defineProperty(Ua,"__esModule",{value:!0});Ua.withCache=void 0;var tp=require("@raycast/api"),xa=ve();function ap(e,t){let a=new tp.Cache({namespace:(0,xa.hash)(e)}),r=async(...n)=>{let o=(0,xa.hash)(n||[])+t?.internal_cacheKeySuffix,u=a.get(o);if(u){let{data:i,timestamp:p}=JSON.parse(u,xa.reviver);if(!(t?.maxAge&&Date.now()-p>t.maxAge)&&(!t?.validate||t.validate(i)))return i}let s=await e(...n);return a.set(o,JSON.stringify({data:s,timestamp:Date.now()},xa.replacer)),s};return r.clearCache=()=>{a.clear()},r}Ua.withCache=ap});var jt=E(x=>{"use strict";var rp=x&&x.__createBinding||(Object.create?(function(e,t,a,r){r===void 0&&(r=a);var n=Object.getOwnPropertyDescriptor(t,a);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,n)}):(function(e,t,a,r){r===void 0&&(r=a),e[r]=t[a]})),O=x&&x.__exportStar||function(e,t){for(var a in e)a!=="default"&&!Object.prototype.hasOwnProperty.call(t,a)&&rp(t,e,a)};Object.defineProperty(x,"__esModule",{value:!0});O(at(),x);O(oa(),x);O(xt(),x);O(dn(),x);O(Mn(),x);O(fn(),x);O(hn(),x);O(xn(),x);O(_n(),x);O(wn(),x);O(Ln(),x);O(Yn(),x);O(to(),x);O(io(),x);O(so(),x);O(uo(),x);O(Ct(),x);O(po(),x)});var H={};Xe(H,{default:()=>fo.default});var fo,La=Qa(()=>{z(H,require("formdata-polyfill/esm.min.js"));fo=N(require("formdata-polyfill/esm.min.js"))});var Y={};Xe(Y,{default:()=>ho.default});var ho,_r=Qa(()=>{z(Y,require("fetch-blob/from.js"));ho=N(require("fetch-blob/from.js"))});var xo={};Xe(xo,{toFormData:()=>Ep});function Pp(e){let t=e.match(/\bfilename=("(.*?)"|([^()<>@,;:\\"/[\]?={}\s\t]+))($|;\s)/i);if(!t)return;let a=t[2]||t[3]||"",r=a.slice(a.lastIndexOf("\\")+1);return r=r.replace(/%22/g,'"'),r=r.replace(/&#(\d{4});/g,(n,o)=>String.fromCharCode(o)),r}async function Ep(e,t){if(!/multipart/i.test(t))throw new TypeError("Failed to fetch");let a=t.match(/boundary=(?:"([^"]+)"|([^;]+))/i);if(!a)throw new TypeError("no or bad content-type header, no multipart boundary");let r=new vr(a[1]||a[2]),n,o,u,s,i,p,c=[],y=new H.FormData,I=b=>{u+=d.decode(b,{stream:!0})},m=b=>{c.push(b)},l=()=>{let b=new Y.File(c,p,{type:i});y.append(s,b)},S=()=>{y.append(s,u)},d=new TextDecoder("utf-8");d.decode(),r.onPartBegin=function(){r.onPartData=I,r.onPartEnd=S,n="",o="",u="",s="",i="",p=null,c.length=0},r.onHeaderField=function(b){n+=d.decode(b,{stream:!0})},r.onHeaderValue=function(b){o+=d.decode(b,{stream:!0})},r.onHeaderEnd=function(){if(o+=d.decode(),n=n.toLowerCase(),n==="content-disposition"){let b=o.match(/\bname=("([^"]*)"|([^()<>@,;:\\"/[\]?={}\s\t]+))/i);b&&(s=b[2]||b[3]||""),p=Pp(o),p&&(r.onPartData=m,r.onPartEnd=l)}else n==="content-type"&&(i=o);o="",n=""};for await(let b of e)r.write(b);return r.end(),y}var Me,D,Do,je,Na,Va,Mp,Ht,mp,Rp,Ap,fp,Ke,vr,Uo=Qa(()=>{_r();La();Me=0,D={START_BOUNDARY:Me++,HEADER_FIELD_START:Me++,HEADER_FIELD:Me++,HEADER_VALUE_START:Me++,HEADER_VALUE:Me++,HEADER_VALUE_ALMOST_DONE:Me++,HEADERS_ALMOST_DONE:Me++,PART_DATA_START:Me++,PART_DATA:Me++,END:Me++},Do=1,je={PART_BOUNDARY:Do,LAST_BOUNDARY:Do*=2},Na=10,Va=13,Mp=32,Ht=45,mp=58,Rp=97,Ap=122,fp=e=>e|32,Ke=()=>{},vr=class{constructor(t){this.index=0,this.flags=0,this.onHeaderEnd=Ke,this.onHeaderField=Ke,this.onHeadersEnd=Ke,this.onHeaderValue=Ke,this.onPartBegin=Ke,this.onPartData=Ke,this.onPartEnd=Ke,this.boundaryChars={},t=`\r
--`+t;let a=new Uint8Array(t.length);for(let r=0;r<t.length;r++)a[r]=t.charCodeAt(r),this.boundaryChars[a[r]]=!0;this.boundary=a,this.lookbehind=new Uint8Array(this.boundary.length+8),this.state=D.START_BOUNDARY}write(t){let a=0,r=t.length,n=this.index,{lookbehind:o,boundary:u,boundaryChars:s,index:i,state:p,flags:c}=this,y=this.boundary.length,I=y-1,m=t.length,l,S,d=M=>{this[M+"Mark"]=a},b=M=>{delete this[M+"Mark"]},R=(M,P,A,U)=>{(P===void 0||P!==A)&&this[M](U&&U.subarray(P,A))},f=(M,P)=>{let A=M+"Mark";A in this&&(P?(R(M,this[A],a,t),delete this[A]):(R(M,this[A],t.length,t),this[A]=0))};for(a=0;a<r;a++)switch(l=t[a],p){case D.START_BOUNDARY:if(i===u.length-2){if(l===Ht)c|=je.LAST_BOUNDARY;else if(l!==Va)return;i++;break}else if(i-1===u.length-2){if(c&je.LAST_BOUNDARY&&l===Ht)p=D.END,c=0;else if(!(c&je.LAST_BOUNDARY)&&l===Na)i=0,R("onPartBegin"),p=D.HEADER_FIELD_START;else return;break}l!==u[i+2]&&(i=-2),l===u[i+2]&&i++;break;case D.HEADER_FIELD_START:p=D.HEADER_FIELD,d("onHeaderField"),i=0;case D.HEADER_FIELD:if(l===Va){b("onHeaderField"),p=D.HEADERS_ALMOST_DONE;break}if(i++,l===Ht)break;if(l===mp){if(i===1)return;f("onHeaderField",!0),p=D.HEADER_VALUE_START;break}if(S=fp(l),S<Rp||S>Ap)return;break;case D.HEADER_VALUE_START:if(l===Mp)break;d("onHeaderValue"),p=D.HEADER_VALUE;case D.HEADER_VALUE:l===Va&&(f("onHeaderValue",!0),R("onHeaderEnd"),p=D.HEADER_VALUE_ALMOST_DONE);break;case D.HEADER_VALUE_ALMOST_DONE:if(l!==Na)return;p=D.HEADER_FIELD_START;break;case D.HEADERS_ALMOST_DONE:if(l!==Na)return;R("onHeadersEnd"),p=D.PART_DATA_START;break;case D.PART_DATA_START:p=D.PART_DATA,d("onPartData");case D.PART_DATA:if(n=i,i===0){for(a+=I;a<m&&!(t[a]in s);)a+=y;a-=I,l=t[a]}if(i<u.length)u[i]===l?(i===0&&f("onPartData",!0),i++):i=0;else if(i===u.length)i++,l===Va?c|=je.PART_BOUNDARY:l===Ht?c|=je.LAST_BOUNDARY:i=0;else if(i-1===u.length)if(c&je.PART_BOUNDARY){if(i=0,l===Na){c&=~je.PART_BOUNDARY,R("onPartEnd"),R("onPartBegin"),p=D.HEADER_FIELD_START;break}}else c&je.LAST_BOUNDARY&&l===Ht?(R("onPartEnd"),p=D.END,c=0):i=0;if(i>0)o[i-1]=l;else if(n>0){let M=new Uint8Array(o.buffer,o.byteOffset,o.byteLength);R("onPartData",0,n,M),n=0,d("onPartData"),a--}break;case D.END:break;default:throw new Error(`Unexpected state entered: ${p}`)}f("onHeaderField"),f("onHeaderValue"),f("onPartData"),this.index=i,this.state=p,this.flags=c}end(){if(this.state===D.HEADER_FIELD_START&&this.index===0||this.state===D.PART_DATA&&this.index===this.boundary.length)this.onPartEnd();else if(this.state!==D.END)throw new Error("MultipartParser.end(): stream ended unexpectedly")}}});var $l={};Xe($l,{default:()=>Gl});module.exports=Ri($l);var yi=require("@raycast/api"),di=require("react");var ee=require("@raycast/api"),et=require("react/jsx-runtime");function Wa({setClosed:e}){return(0,et.jsxs)(ee.List.Dropdown,{tooltip:"Select Project State",storeValue:!0,onChange:e,defaultValue:"open",children:[(0,et.jsx)(ee.List.Dropdown.Item,{title:"All",value:"all",icon:ee.Icon.List},"All"),(0,et.jsx)(ee.List.Dropdown.Item,{title:"Open",value:"open",icon:{source:ee.Icon.Checkmark,tintColor:ee.Color.Green}},"Open"),(0,et.jsx)(ee.List.Dropdown.Item,{title:"Closed",value:"closed",icon:{source:ee.Icon.Xmark,tintColor:ee.Color.SecondaryText}},"Closed")]})}var kr=require("@raycast/api"),Fr=require("react/jsx-runtime");function Ka(){return(0,Fr.jsx)(kr.List.EmptyView,{title:"No projects found"})}var Ue=require("@raycast/api"),si=require("date-fns");var Et=require("@raycast/api");function zr(e){return e?{icon:{source:e.avatarUrl??Et.Icon.Person,mask:Et.Image.Mask.Circle},text:(e.name?e.name:e.login)??"-"}:{icon:Et.Icon.Person,text:"Unknown"}}function ea(e){return zr(e.creator)}var h=require("@raycast/api");var Xo=require("@octokit/rest"),ei=require("@raycast/api"),ti=N(jt());var _a=JSON;var lo=e=>e.toUpperCase(),co=e=>{let t={};return e.forEach((a,r)=>{t[r]=a}),t};var yo=(e,t,a)=>e.document?e:{document:e,variables:t,requestHeaders:a,signal:void 0},So=(e,t,a)=>e.query?e:{query:e,variables:t,requestHeaders:a,signal:void 0},bo=(e,t)=>e.documents?e:{documents:e,requestHeaders:t,signal:void 0};var va=require("graphql"),Io=e=>{let t,a=e.definitions.filter(r=>r.kind==="OperationDefinition");return a.length===1&&(t=a[0]?.name?.value),t},Qe=e=>{if(typeof e=="string"){let a;try{let r=(0,va.parse)(e);a=Io(r)}catch{}return{query:e,operationName:a}}let t=Io(e);return{query:(0,va.print)(e),operationName:t}};var We=class e extends Error{constructor(t,a){let r=`${e.extractMessage(t)}: ${JSON.stringify({response:t,request:a})}`;super(r),Object.setPrototypeOf(this,e.prototype),this.response=t,this.request=a,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,e)}static extractMessage(t){return t.errors?.[0]?.message??`GraphQL Error (Code: ${t.status})`}};var Ve=N(Ot(),1);var np="connection_init",op="connection_ack",Mo="ping",mo="pong",ip="subscribe",sp="next",up="error",Ro="complete",Ne=class e{get type(){return this._type}get id(){return this._id}get payload(){return this._payload}constructor(t,a,r){this._type=t,this._payload=a,this._id=r}get text(){let t={type:this.type};return this.id!=null&&this.id!=null&&(t.id=this.id),this.payload!=null&&this.payload!=null&&(t.payload=this.payload),JSON.stringify(t)}static parse(t,a){let{type:r,payload:n,id:o}=JSON.parse(t);return new e(r,a(n),o)}},Ta=class{constructor(t,{onInit:a,onAcknowledged:r,onPing:n,onPong:o}){this.socketState={acknowledged:!1,lastRequestId:0,subscriptions:{}},this.socket=t,t.addEventListener("open",async u=>{this.socketState.acknowledged=!1,this.socketState.subscriptions={},t.send(lp(a?await a():null).text)}),t.addEventListener("close",u=>{this.socketState.acknowledged=!1,this.socketState.subscriptions={}}),t.addEventListener("error",u=>{console.error(u)}),t.addEventListener("message",u=>{try{let s=pp(u.data);switch(s.type){case op:{this.socketState.acknowledged?console.warn("Duplicate CONNECTION_ACK message ignored"):(this.socketState.acknowledged=!0,r&&r(s.payload));return}case Mo:{n?n(s.payload).then(y=>t.send(go(y).text)):t.send(go(null).text);return}case mo:{o&&o(s.payload);return}}if(!this.socketState.acknowledged||s.id===void 0||s.id===null||!this.socketState.subscriptions[s.id])return;let{query:i,variables:p,subscriber:c}=this.socketState.subscriptions[s.id];switch(s.type){case sp:{!s.payload.errors&&s.payload.data&&c.next&&c.next(s.payload.data),s.payload.errors&&c.error&&c.error(new We({...s.payload,status:200},{query:i,variables:p}));return}case up:{c.error&&c.error(new We({errors:s.payload,status:200},{query:i,variables:p}));return}case Ro:{c.complete&&c.complete(),delete this.socketState.subscriptions[s.id];return}}}catch(s){console.error(s),t.close(1006)}t.close(4400,"Unknown graphql-ws message.")})}makeSubscribe(t,a,r,n){let o=(this.socketState.lastRequestId++).toString();return this.socketState.subscriptions[o]={query:t,variables:n,subscriber:r},this.socket.send(yp(o,{query:t,operationName:a,variables:n}).text),()=>{this.socket.send(dp(o).text),delete this.socketState.subscriptions[o]}}rawRequest(t,a){return new Promise((r,n)=>{let o;this.rawSubscribe(t,{next:(u,s)=>o={data:u,extensions:s},error:n,complete:()=>r(o)},a)})}request(t,a){return new Promise((r,n)=>{let o;this.subscribe(t,{next:u=>o=u,error:n,complete:()=>r(o)},a)})}subscribe(t,a,r){let{query:n,operationName:o}=Qe(t);return this.makeSubscribe(n,o,a,r)}rawSubscribe(t,a,r){return this.makeSubscribe(t,void 0,a,r)}ping(t){this.socket.send(cp(t).text)}close(){this.socket.close(1e3)}};Ta.PROTOCOL="graphql-transport-ws";function pp(e,t=a=>a){return Ne.parse(e,t)}function lp(e){return new Ne(np,e)}function cp(e){return new Ne(Mo,e,void 0)}function go(e){return new Ne(mo,e,void 0)}function yp(e,t){return new Ne(ip,t,e)}function dp(e){return new Ne(Ro,void 0,e)}var Mt=e=>{let t={};return e&&(typeof Headers<"u"&&e instanceof Headers||Ve&&Ve.Headers&&e instanceof Ve.Headers?t=co(e):Array.isArray(e)?e.forEach(([a,r])=>{a&&r!==void 0&&(t[a]=r)}):t=e),t},Ao=e=>e.replace(/([\s,]|#[^\n\r]+)+/g," ").trim(),Sp=e=>{if(!Array.isArray(e.query)){let r=e,n=[`query=${encodeURIComponent(Ao(r.query))}`];return e.variables&&n.push(`variables=${encodeURIComponent(r.jsonSerializer.stringify(r.variables))}`),r.operationName&&n.push(`operationName=${encodeURIComponent(r.operationName)}`),n.join("&")}if(typeof e.variables<"u"&&!Array.isArray(e.variables))throw new Error("Cannot create query with given variable type, array expected");let t=e,a=e.query.reduce((r,n,o)=>(r.push({query:Ao(n),variables:t.variables?t.jsonSerializer.stringify(t.variables[o]):void 0}),r),[]);return`query=${encodeURIComponent(t.jsonSerializer.stringify(a))}`},bp=e=>async t=>{let{url:a,query:r,variables:n,operationName:o,fetch:u,fetchOptions:s,middleware:i}=t,p={...t.headers},c="",y;e==="POST"?(y=Ip(r,n,o,s.jsonSerializer),typeof y=="string"&&(p["Content-Type"]="application/json")):c=Sp({query:r,variables:n,operationName:o,jsonSerializer:s.jsonSerializer??_a});let I={method:e,headers:p,body:y,...s},m=a,l=I;if(i){let S=await Promise.resolve(i({...I,url:a,operationName:o,variables:n})),{url:d,...b}=S;m=d,l=b}return c&&(m=`${m}?${c}`),await u(m,l)},wa=class{constructor(t,a={}){this.url=t,this.requestConfig=a,this.rawRequest=async(...r)=>{let[n,o,u]=r,s=So(n,o,u),{headers:i,fetch:p=Ve.default,method:c="POST",requestMiddleware:y,responseMiddleware:I,...m}=this.requestConfig,{url:l}=this;s.signal!==void 0&&(m.signal=s.signal);let{operationName:S}=Qe(s.query);return Dr({url:l,query:s.query,variables:s.variables,headers:{...Mt(xr(i)),...Mt(s.requestHeaders)},operationName:S,fetch:p,method:c,fetchOptions:m,middleware:y}).then(d=>(I&&I(d),d)).catch(d=>{throw I&&I(d),d})}}async request(t,...a){let[r,n]=a,o=yo(t,r,n),{headers:u,fetch:s=Ve.default,method:i="POST",requestMiddleware:p,responseMiddleware:c,...y}=this.requestConfig,{url:I}=this;o.signal!==void 0&&(y.signal=o.signal);let{query:m,operationName:l}=Qe(o.document);return Dr({url:I,query:m,variables:o.variables,headers:{...Mt(xr(u)),...Mt(o.requestHeaders)},operationName:l,fetch:s,method:i,fetchOptions:y,middleware:p}).then(S=>(c&&c(S),S.data)).catch(S=>{throw c&&c(S),S})}batchRequests(t,a){let r=bo(t,a),{headers:n,...o}=this.requestConfig;r.signal!==void 0&&(o.signal=r.signal);let u=r.documents.map(({document:i})=>Qe(i).query),s=r.documents.map(({variables:i})=>i);return Dr({url:this.url,query:u,variables:s,headers:{...Mt(xr(n)),...Mt(r.requestHeaders)},operationName:void 0,fetch:this.requestConfig.fetch??Ve.default,method:this.requestConfig.method||"POST",fetchOptions:o,middleware:this.requestConfig.requestMiddleware}).then(i=>(this.requestConfig.responseMiddleware&&this.requestConfig.responseMiddleware(i),i.data)).catch(i=>{throw this.requestConfig.responseMiddleware&&this.requestConfig.responseMiddleware(i),i})}setHeaders(t){return this.requestConfig.headers=t,this}setHeader(t,a){let{headers:r}=this.requestConfig;return r?r[t]=a:this.requestConfig.headers={[t]:a},this}setEndpoint(t){return this.url=t,this}},Dr=async e=>{let{query:t,variables:a,fetchOptions:r}=e,n=bp(lo(e.method??"post")),o=Array.isArray(e.query),u=await n(e),s=await gp(u,r.jsonSerializer??_a),i=Array.isArray(s)?!s.some(({data:c})=>!c):!!s.data,p=Array.isArray(s)||!s.errors||Array.isArray(s.errors)&&!s.errors.length||r.errorPolicy==="all"||r.errorPolicy==="ignore";if(u.ok&&p&&i){let{errors:c,...y}=(Array.isArray(s),s),I=r.errorPolicy==="ignore"?y:s;return{...o?{data:I}:I,headers:u.headers,status:u.status}}else{let c=typeof s=="string"?{error:s}:s;throw new We({...c,status:u.status,headers:u.headers},{query:t,variables:a})}};var Ip=(e,t,a,r)=>{let n=r??_a;if(!Array.isArray(e))return n.stringify({query:e,variables:t,operationName:a});if(typeof t<"u"&&!Array.isArray(t))throw new Error("Cannot create request body with given variable type, array expected");let o=e.reduce((u,s,i)=>(u.push({query:s,variables:t?t[i]:void 0}),u),[]);return n.stringify(o)},gp=async(e,t)=>{let a;return e.headers.forEach((r,n)=>{n.toLowerCase()==="content-type"&&(a=r)}),a&&(a.toLowerCase().startsWith("application/json")||a.toLowerCase().startsWith("application/graphql+json")||a.toLowerCase().startsWith("application/graphql-response+json"))?t.parse(await e.text()):e.text()},xr=e=>typeof e=="function"?e():e;var Ho=N(require("node:http"),1),Go=N(require("node:https"),1),Je=N(require("node:zlib"),1),X=N(require("node:stream"),1),Qt=require("node:buffer");var kt={};Xe(kt,{default:()=>Oa.default});z(kt,require("data-uri-to-buffer"));var Oa=N(require("data-uri-to-buffer"));var oe=N(require("node:stream"),1),xe=require("node:util"),J=require("node:buffer");var Ft={};Xe(Ft,{default:()=>Ba.default});z(Ft,require("fetch-blob"));var Ba=N(require("fetch-blob"));La();var De=class extends Error{constructor(t,a){super(t),Error.captureStackTrace(this,this.constructor),this.type=a}get name(){return this.constructor.name}get[Symbol.toStringTag](){return this.constructor.name}};var G=class extends De{constructor(t,a,r){super(t,a),r&&(this.code=this.errno=r.code,this.erroredSysCall=r.syscall)}};var qa=Symbol.toStringTag,Ur=e=>typeof e=="object"&&typeof e.append=="function"&&typeof e.delete=="function"&&typeof e.get=="function"&&typeof e.getAll=="function"&&typeof e.has=="function"&&typeof e.set=="function"&&typeof e.sort=="function"&&e[qa]==="URLSearchParams",zt=e=>e&&typeof e=="object"&&typeof e.arrayBuffer=="function"&&typeof e.type=="string"&&typeof e.stream=="function"&&typeof e.constructor=="function"&&/^(Blob|File)$/.test(e[qa]),Po=e=>typeof e=="object"&&(e[qa]==="AbortSignal"||e[qa]==="EventTarget"),Eo=(e,t)=>{let a=new URL(t).hostname,r=new URL(e).hostname;return a===r||a.endsWith(`.${r}`)},Co=(e,t)=>{let a=new URL(t).protocol,r=new URL(e).protocol;return a===r};var Cp=(0,xe.promisify)(oe.default.pipeline),$=Symbol("Body internals"),me=class{constructor(t,{size:a=0}={}){let r=null;t===null?t=null:Ur(t)?t=J.Buffer.from(t.toString()):zt(t)||J.Buffer.isBuffer(t)||(xe.types.isAnyArrayBuffer(t)?t=J.Buffer.from(t):ArrayBuffer.isView(t)?t=J.Buffer.from(t.buffer,t.byteOffset,t.byteLength):t instanceof oe.default||(t instanceof H.FormData?(t=(0,H.formDataToBlob)(t),r=t.type.split("=")[1]):t=J.Buffer.from(String(t))));let n=t;J.Buffer.isBuffer(t)?n=oe.default.Readable.from(t):zt(t)&&(n=oe.default.Readable.from(t.stream())),this[$]={body:t,stream:n,boundary:r,disturbed:!1,error:null},this.size=a,t instanceof oe.default&&t.on("error",o=>{let u=o instanceof De?o:new G(`Invalid response body while trying to fetch ${this.url}: ${o.message}`,"system",o);this[$].error=u})}get body(){return this[$].stream}get bodyUsed(){return this[$].disturbed}async arrayBuffer(){let{buffer:t,byteOffset:a,byteLength:r}=await Tr(this);return t.slice(a,a+r)}async formData(){let t=this.headers.get("content-type");if(t.startsWith("application/x-www-form-urlencoded")){let r=new H.FormData,n=new URLSearchParams(await this.text());for(let[o,u]of n)r.append(o,u);return r}let{toFormData:a}=await Promise.resolve().then(()=>(Uo(),xo));return a(this.body,t)}async blob(){let t=this.headers&&this.headers.get("content-type")||this[$].body&&this[$].body.type||"",a=await this.arrayBuffer();return new Ba.default([a],{type:t})}async json(){let t=await this.text();return JSON.parse(t)}async text(){let t=await Tr(this);return new TextDecoder().decode(t)}buffer(){return Tr(this)}};me.prototype.buffer=(0,xe.deprecate)(me.prototype.buffer,"Please use 'response.arrayBuffer()' instead of 'response.buffer()'","node-fetch#buffer");Object.defineProperties(me.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0},data:{get:(0,xe.deprecate)(()=>{},"data doesn't exist, use json(), text(), arrayBuffer(), or body instead","https://github.com/node-fetch/node-fetch/issues/1000 (response)")}});async function Tr(e){if(e[$].disturbed)throw new TypeError(`body used already for: ${e.url}`);if(e[$].disturbed=!0,e[$].error)throw e[$].error;let{body:t}=e;if(t===null)return J.Buffer.alloc(0);if(!(t instanceof oe.default))return J.Buffer.alloc(0);let a=[],r=0;try{for await(let n of t){if(e.size>0&&r+n.length>e.size){let o=new G(`content size at ${e.url} over limit: ${e.size}`,"max-size");throw t.destroy(o),o}r+=n.length,a.push(n)}}catch(n){throw n instanceof De?n:new G(`Invalid response body while trying to fetch ${e.url}: ${n.message}`,"system",n)}if(t.readableEnded===!0||t._readableState.ended===!0)try{return a.every(n=>typeof n=="string")?J.Buffer.from(a.join("")):J.Buffer.concat(a,r)}catch(n){throw new G(`Could not create Buffer from response body for ${e.url}: ${n.message}`,"system",n)}else throw new G(`Premature close of server response while trying to fetch ${e.url}`)}var mt=(e,t)=>{let a,r,{body:n}=e[$];if(e.bodyUsed)throw new Error("cannot clone body after it is used");return n instanceof oe.default&&typeof n.getBoundary!="function"&&(a=new oe.PassThrough({highWaterMark:t}),r=new oe.PassThrough({highWaterMark:t}),n.pipe(a),n.pipe(r),e[$].stream=a,n=r),n},hp=(0,xe.deprecate)(e=>e.getBoundary(),"form-data doesn't follow the spec and requires special treatment. Use alternative package","https://github.com/node-fetch/node-fetch/issues/1167"),ja=(e,t)=>e===null?null:typeof e=="string"?"text/plain;charset=UTF-8":Ur(e)?"application/x-www-form-urlencoded;charset=UTF-8":zt(e)?e.type||null:J.Buffer.isBuffer(e)||xe.types.isAnyArrayBuffer(e)||ArrayBuffer.isView(e)?null:e instanceof H.FormData?`multipart/form-data; boundary=${t[$].boundary}`:e&&typeof e.getBoundary=="function"?`multipart/form-data;boundary=${hp(e)}`:e instanceof oe.default?null:"text/plain;charset=UTF-8",_o=e=>{let{body:t}=e[$];return t===null?0:zt(t)?t.size:J.Buffer.isBuffer(t)?t.length:t&&typeof t.getLengthSync=="function"&&t.hasKnownLength&&t.hasKnownLength()?t.getLengthSync():null},vo=async(e,{body:t})=>{t===null?e.end():await Cp(t,e)};var wr=require("node:util"),Gt=N(require("node:http"),1),ka=typeof Gt.default.validateHeaderName=="function"?Gt.default.validateHeaderName:e=>{if(!/^[\^`\-\w!#$%&'*+.|~]+$/.test(e)){let t=new TypeError(`Header name must be a valid HTTP token [${e}]`);throw Object.defineProperty(t,"code",{value:"ERR_INVALID_HTTP_TOKEN"}),t}},Or=typeof Gt.default.validateHeaderValue=="function"?Gt.default.validateHeaderValue:(e,t)=>{if(/[^\t\u0020-\u007E\u0080-\u00FF]/.test(t)){let a=new TypeError(`Invalid character in header content ["${e}"]`);throw Object.defineProperty(a,"code",{value:"ERR_INVALID_CHAR"}),a}},Z=class e extends URLSearchParams{constructor(t){let a=[];if(t instanceof e){let r=t.raw();for(let[n,o]of Object.entries(r))a.push(...o.map(u=>[n,u]))}else if(t!=null)if(typeof t=="object"&&!wr.types.isBoxedPrimitive(t)){let r=t[Symbol.iterator];if(r==null)a.push(...Object.entries(t));else{if(typeof r!="function")throw new TypeError("Header pairs must be iterable");a=[...t].map(n=>{if(typeof n!="object"||wr.types.isBoxedPrimitive(n))throw new TypeError("Each header pair must be an iterable object");return[...n]}).map(n=>{if(n.length!==2)throw new TypeError("Each header pair must be a name/value tuple");return[...n]})}}else throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");return a=a.length>0?a.map(([r,n])=>(ka(r),Or(r,String(n)),[String(r).toLowerCase(),String(n)])):void 0,super(a),new Proxy(this,{get(r,n,o){switch(n){case"append":case"set":return(u,s)=>(ka(u),Or(u,String(s)),URLSearchParams.prototype[n].call(r,String(u).toLowerCase(),String(s)));case"delete":case"has":case"getAll":return u=>(ka(u),URLSearchParams.prototype[n].call(r,String(u).toLowerCase()));case"keys":return()=>(r.sort(),new Set(URLSearchParams.prototype.keys.call(r)).keys());default:return Reflect.get(r,n,o)}}})}get[Symbol.toStringTag](){return this.constructor.name}toString(){return Object.prototype.toString.call(this)}get(t){let a=this.getAll(t);if(a.length===0)return null;let r=a.join(", ");return/^content-encoding$/i.test(t)&&(r=r.toLowerCase()),r}forEach(t,a=void 0){for(let r of this.keys())Reflect.apply(t,a,[this.get(r),r,this])}*values(){for(let t of this.keys())yield this.get(t)}*entries(){for(let t of this.keys())yield[t,this.get(t)]}[Symbol.iterator](){return this.entries()}raw(){return[...this.keys()].reduce((t,a)=>(t[a]=this.getAll(a),t),{})}[Symbol.for("nodejs.util.inspect.custom")](){return[...this.keys()].reduce((t,a)=>{let r=this.getAll(a);return a==="host"?t[a]=r[0]:t[a]=r.length>1?r:r[0],t},{})}};Object.defineProperties(Z.prototype,["get","entries","forEach","values"].reduce((e,t)=>(e[t]={enumerable:!0},e),{}));function To(e=[]){return new Z(e.reduce((t,a,r,n)=>(r%2===0&&t.push(n.slice(r,r+2)),t),[]).filter(([t,a])=>{try{return ka(t),Or(t,String(a)),!0}catch{return!1}}))}var Dp=new Set([301,302,303,307,308]),Fa=e=>Dp.has(e);var ce=Symbol("Response internals"),ie=class e extends me{constructor(t=null,a={}){super(t,a);let r=a.status!=null?a.status:200,n=new Z(a.headers);if(t!==null&&!n.has("Content-Type")){let o=ja(t,this);o&&n.append("Content-Type",o)}this[ce]={type:"default",url:a.url,status:r,statusText:a.statusText||"",headers:n,counter:a.counter,highWaterMark:a.highWaterMark}}get type(){return this[ce].type}get url(){return this[ce].url||""}get status(){return this[ce].status}get ok(){return this[ce].status>=200&&this[ce].status<300}get redirected(){return this[ce].counter>0}get statusText(){return this[ce].statusText}get headers(){return this[ce].headers}get highWaterMark(){return this[ce].highWaterMark}clone(){return new e(mt(this,this.highWaterMark),{type:this.type,url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected,size:this.size,highWaterMark:this.highWaterMark})}static redirect(t,a=302){if(!Fa(a))throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');return new e(null,{headers:{location:new URL(t).toString()},status:a})}static error(){let t=new e(null,{status:0,statusText:""});return t[ce].type="error",t}static json(t=void 0,a={}){let r=JSON.stringify(t);if(r===void 0)throw new TypeError("data is not JSON serializable");let n=new Z(a&&a.headers);return n.has("content-type")||n.set("content-type","application/json"),new e(r,{...a,headers:n})}get[Symbol.toStringTag](){return"Response"}};Object.defineProperties(ie.prototype,{type:{enumerable:!0},url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}});var ko=require("node:url"),Fo=require("node:util");var wo=e=>{if(e.search)return e.search;let t=e.href.length-1,a=e.hash||(e.href[t]==="#"?"#":"");return e.href[t-a.length]==="?"?"?":""};var Bo=require("node:net");function Oo(e,t=!1){return e==null||(e=new URL(e),/^(about|blob|data):$/.test(e.protocol))?"no-referrer":(e.username="",e.password="",e.hash="",t&&(e.pathname="",e.search=""),e)}var Lo=new Set(["","no-referrer","no-referrer-when-downgrade","same-origin","origin","strict-origin","origin-when-cross-origin","strict-origin-when-cross-origin","unsafe-url"]),qo="strict-origin-when-cross-origin";function No(e){if(!Lo.has(e))throw new TypeError(`Invalid referrerPolicy: ${e}`);return e}function xp(e){if(/^(http|ws)s:$/.test(e.protocol))return!0;let t=e.host.replace(/(^\[)|(]$)/g,""),a=(0,Bo.isIP)(t);return a===4&&/^127\./.test(t)||a===6&&/^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(t)?!0:e.host==="localhost"||e.host.endsWith(".localhost")?!1:e.protocol==="file:"}function Rt(e){return/^about:(blank|srcdoc)$/.test(e)||e.protocol==="data:"||/^(blob|filesystem):$/.test(e.protocol)?!0:xp(e)}function Vo(e,{referrerURLCallback:t,referrerOriginCallback:a}={}){if(e.referrer==="no-referrer"||e.referrerPolicy==="")return null;let r=e.referrerPolicy;if(e.referrer==="about:client")return"no-referrer";let n=e.referrer,o=Oo(n),u=Oo(n,!0);o.toString().length>4096&&(o=u),t&&(o=t(o)),a&&(u=a(u));let s=new URL(e.url);switch(r){case"no-referrer":return"no-referrer";case"origin":return u;case"unsafe-url":return o;case"strict-origin":return Rt(o)&&!Rt(s)?"no-referrer":u.toString();case"strict-origin-when-cross-origin":return o.origin===s.origin?o:Rt(o)&&!Rt(s)?"no-referrer":u;case"same-origin":return o.origin===s.origin?o:"no-referrer";case"origin-when-cross-origin":return o.origin===s.origin?o:u;case"no-referrer-when-downgrade":return Rt(o)&&!Rt(s)?"no-referrer":o;default:throw new TypeError(`Invalid referrerPolicy: ${r}`)}}function jo(e){let t=(e.get("referrer-policy")||"").split(/[,\s]+/),a="";for(let r of t)r&&Lo.has(r)&&(a=r);return a}var B=Symbol("Request internals"),$t=e=>typeof e=="object"&&typeof e[B]=="object",Up=(0,Fo.deprecate)(()=>{},".data is not a valid RequestInit property, use .body instead","https://github.com/node-fetch/node-fetch/issues/1000 (request)"),Ye=class e extends me{constructor(t,a={}){let r;if($t(t)?r=new URL(t.url):(r=new URL(t),t={}),r.username!==""||r.password!=="")throw new TypeError(`${r} is an url with embedded credentials.`);let n=a.method||t.method||"GET";if(/^(delete|get|head|options|post|put)$/i.test(n)&&(n=n.toUpperCase()),!$t(a)&&"data"in a&&Up(),(a.body!=null||$t(t)&&t.body!==null)&&(n==="GET"||n==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");let o=a.body?a.body:$t(t)&&t.body!==null?mt(t):null;super(o,{size:a.size||t.size||0});let u=new Z(a.headers||t.headers||{});if(o!==null&&!u.has("Content-Type")){let p=ja(o,this);p&&u.set("Content-Type",p)}let s=$t(t)?t.signal:null;if("signal"in a&&(s=a.signal),s!=null&&!Po(s))throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");let i=a.referrer==null?t.referrer:a.referrer;if(i==="")i="no-referrer";else if(i){let p=new URL(i);i=/^about:(\/\/)?client$/.test(p)?"client":p}else i=void 0;this[B]={method:n,redirect:a.redirect||t.redirect||"follow",headers:u,parsedURL:r,signal:s,referrer:i},this.follow=a.follow===void 0?t.follow===void 0?20:t.follow:a.follow,this.compress=a.compress===void 0?t.compress===void 0?!0:t.compress:a.compress,this.counter=a.counter||t.counter||0,this.agent=a.agent||t.agent,this.highWaterMark=a.highWaterMark||t.highWaterMark||16384,this.insecureHTTPParser=a.insecureHTTPParser||t.insecureHTTPParser||!1,this.referrerPolicy=a.referrerPolicy||t.referrerPolicy||""}get method(){return this[B].method}get url(){return(0,ko.format)(this[B].parsedURL)}get headers(){return this[B].headers}get redirect(){return this[B].redirect}get signal(){return this[B].signal}get referrer(){if(this[B].referrer==="no-referrer")return"";if(this[B].referrer==="client")return"about:client";if(this[B].referrer)return this[B].referrer.toString()}get referrerPolicy(){return this[B].referrerPolicy}set referrerPolicy(t){this[B].referrerPolicy=No(t)}clone(){return new e(this)}get[Symbol.toStringTag](){return"Request"}};Object.defineProperties(Ye.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0},referrer:{enumerable:!0},referrerPolicy:{enumerable:!0}});var zo=e=>{let{parsedURL:t}=e[B],a=new Z(e[B].headers);a.has("Accept")||a.set("Accept","*/*");let r=null;if(e.body===null&&/^(post|put)$/i.test(e.method)&&(r="0"),e.body!==null){let s=_o(e);typeof s=="number"&&!Number.isNaN(s)&&(r=String(s))}r&&a.set("Content-Length",r),e.referrerPolicy===""&&(e.referrerPolicy=qo),e.referrer&&e.referrer!=="no-referrer"?e[B].referrer=Vo(e):e[B].referrer="no-referrer",e[B].referrer instanceof URL&&a.set("Referer",e.referrer),a.has("User-Agent")||a.set("User-Agent","node-fetch"),e.compress&&!a.has("Accept-Encoding")&&a.set("Accept-Encoding","gzip, deflate, br");let{agent:n}=e;typeof n=="function"&&(n=n(t));let o=wo(t),u={path:t.pathname+o,method:e.method,headers:a[Symbol.for("nodejs.util.inspect.custom")](),insecureHTTPParser:e.insecureHTTPParser,agent:n};return{parsedURL:t,options:u}};var za=class extends De{constructor(t,a="aborted"){super(t,a)}};La();_r();var _p=new Set(["data:","http:","https:"]);async function Ha(e,t){return new Promise((a,r)=>{let n=new Ye(e,t),{parsedURL:o,options:u}=zo(n);if(!_p.has(o.protocol))throw new TypeError(`node-fetch cannot load ${e}. URL scheme "${o.protocol.replace(/:$/,"")}" is not supported.`);if(o.protocol==="data:"){let l=(0,Oa.default)(n.url),S=new ie(l,{headers:{"Content-Type":l.typeFull}});a(S);return}let s=(o.protocol==="https:"?Go.default:Ho.default).request,{signal:i}=n,p=null,c=()=>{let l=new za("The operation was aborted.");r(l),n.body&&n.body instanceof X.default.Readable&&n.body.destroy(l),!(!p||!p.body)&&p.body.emit("error",l)};if(i&&i.aborted){c();return}let y=()=>{c(),m()},I=s(o.toString(),u);i&&i.addEventListener("abort",y);let m=()=>{I.abort(),i&&i.removeEventListener("abort",y)};I.on("error",l=>{r(new G(`request to ${n.url} failed, reason: ${l.message}`,"system",l)),m()}),vp(I,l=>{p&&p.body&&p.body.destroy(l)}),process.version<"v14"&&I.on("socket",l=>{let S;l.prependListener("end",()=>{S=l._eventsCount}),l.prependListener("close",d=>{if(p&&S<l._eventsCount&&!d){let b=new Error("Premature close");b.code="ERR_STREAM_PREMATURE_CLOSE",p.body.emit("error",b)}})}),I.on("response",l=>{I.setTimeout(0);let S=To(l.rawHeaders);if(Fa(l.statusCode)){let M=S.get("Location"),P=null;try{P=M===null?null:new URL(M,n.url)}catch{if(n.redirect!=="manual"){r(new G(`uri requested responds with an invalid redirect URL: ${M}`,"invalid-redirect")),m();return}}switch(n.redirect){case"error":r(new G(`uri requested responds with a redirect, redirect mode is set to error: ${n.url}`,"no-redirect")),m();return;case"manual":break;case"follow":{if(P===null)break;if(n.counter>=n.follow){r(new G(`maximum redirect reached at: ${n.url}`,"max-redirect")),m();return}let A={headers:new Z(n.headers),follow:n.follow,counter:n.counter+1,agent:n.agent,compress:n.compress,method:n.method,body:mt(n),signal:n.signal,size:n.size,referrer:n.referrer,referrerPolicy:n.referrerPolicy};if(!Eo(n.url,P)||!Co(n.url,P))for(let q of["authorization","www-authenticate","cookie","cookie2"])A.headers.delete(q);if(l.statusCode!==303&&n.body&&t.body instanceof X.default.Readable){r(new G("Cannot follow redirect with body being a readable stream","unsupported-redirect")),m();return}(l.statusCode===303||(l.statusCode===301||l.statusCode===302)&&n.method==="POST")&&(A.method="GET",A.body=void 0,A.headers.delete("content-length"));let U=jo(S);U&&(A.referrerPolicy=U),a(Ha(new Ye(P,A))),m();return}default:return r(new TypeError(`Redirect option '${n.redirect}' is not a valid value of RequestRedirect`))}}i&&l.once("end",()=>{i.removeEventListener("abort",y)});let d=(0,X.pipeline)(l,new X.PassThrough,M=>{M&&r(M)});process.version<"v12.10"&&l.on("aborted",y);let b={url:n.url,status:l.statusCode,statusText:l.statusMessage,headers:S,size:n.size,counter:n.counter,highWaterMark:n.highWaterMark},R=S.get("Content-Encoding");if(!n.compress||n.method==="HEAD"||R===null||l.statusCode===204||l.statusCode===304){p=new ie(d,b),a(p);return}let f={flush:Je.default.Z_SYNC_FLUSH,finishFlush:Je.default.Z_SYNC_FLUSH};if(R==="gzip"||R==="x-gzip"){d=(0,X.pipeline)(d,Je.default.createGunzip(f),M=>{M&&r(M)}),p=new ie(d,b),a(p);return}if(R==="deflate"||R==="x-deflate"){let M=(0,X.pipeline)(l,new X.PassThrough,P=>{P&&r(P)});M.once("data",P=>{(P[0]&15)===8?d=(0,X.pipeline)(d,Je.default.createInflate(),A=>{A&&r(A)}):d=(0,X.pipeline)(d,Je.default.createInflateRaw(),A=>{A&&r(A)}),p=new ie(d,b),a(p)}),M.once("end",()=>{p||(p=new ie(d,b),a(p))});return}if(R==="br"){d=(0,X.pipeline)(d,Je.default.createBrotliDecompress(),M=>{M&&r(M)}),p=new ie(d,b),a(p);return}p=new ie(d,b),a(p)}),vo(I,n).catch(r)})}function vp(e,t){let a=Qt.Buffer.from(`0\r
\r
`),r=!1,n=!1,o;e.on("response",u=>{let{headers:s}=u;r=s["transfer-encoding"]==="chunked"&&!s["content-length"]}),e.on("socket",u=>{let s=()=>{if(r&&!n){let p=new Error("Premature close");p.code="ERR_STREAM_PREMATURE_CLOSE",t(p)}},i=p=>{n=Qt.Buffer.compare(p.slice(-5),a)===0,!n&&o&&(n=Qt.Buffer.compare(o.slice(-3),a.slice(0,3))===0&&Qt.Buffer.compare(p.slice(-2),a.slice(3))===0),o=p};u.prependListener("close",s),u.on("data",i),e.on("close",()=>{u.removeListener("close",s),u.removeListener("data",i)})})}var g=N(require("graphql-tag")),Wt=g.default`
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
`,Tp=g.default`
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
`,Re=g.default`
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
  ${Re}
`,Ga=g.default`
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
  ${Re}
`,wp=g.default`
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
  ${Re}
`,$o=g.default`
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
`,Qo=g.default`
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
`,Wo=g.default`
  fragment RepositoryMentionFields on Repository {
    nameWithOwner
    description
    isPrivate
    isArchived
    owner {
      avatarUrl(size: 64)
    }
  }
`,Op=g.default`
  fragment ProjectViewerFields on ProjectV2View {
    id
    name
    number
  }
`,Ko=g.default`
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
  ${Op}
`,Yo=g.default`
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
  ${Re}
`,Bp=g.default`
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
  ${Re}
`,Lp=g.default`
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
`,Jo=g.default`
  fragment CommitFields on Commit {
    authoredDate
    oid
    message
  }
`,Br=g.default`
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
`,qp=g.default`
  fragment ReleaseFields on Release {
    id
    description
    name
    publishedAt
    createdAt
    tagName
    url
  }
`,Np=g.default`
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
`,Vp=g.default`
  mutation createRef($input: CreateRefInput!) {
    createRef(input: $input) {
      clientMutationId
      ref {
        id
        name
      }
    }
  }
`,jp=g.default`
  mutation deleteLinkedBranch($input: DeleteLinkedBranchInput!) {
    deleteLinkedBranch(input: $input) {
      clientMutationId
    }
  }
`,kp=g.default`
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
  ${Tp}
`,Fp=g.default`
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
`,zp=g.default`
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
  ${Re}
`,Hp=g.default`
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
`,Gp=g.default`
  query issueDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...IssueDetailFields
    }
  }
  ${wp}
`,$p=g.default`
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
  ${Ga}
`,Qp=g.default`
  query issueByNumber($owner: String!, $name: String!, $issueNumber: Int!) {
    repository(owner: $owner, name: $name) {
      issue(number: $issueNumber) {
        ...IssueFields
      }
    }
  }
  ${Ga}
`,Wp=g.default`
  mutation closeIssue($nodeId: ID!, $stateReason: IssueClosedStateReason!) {
    closeIssue(input: { issueId: $nodeId, stateReason: $stateReason }) {
      issue {
        id
      }
    }
  }
`,Kp=g.default`
  mutation reopenIssue($nodeId: ID!) {
    reopenIssue(input: { issueId: $nodeId }) {
      issue {
        id
      }
    }
  }
`,Yp=g.default`
  mutation changeIssueAssignees($issueId: ID!, $assigneeIds: [ID!]) {
    updateIssue(input: { id: $issueId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,Jp=g.default`
  mutation changeIssueMilestone($issueId: ID!, $milestoneId: ID) {
    updateIssue(input: { id: $issueId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,Zp=g.default`
  mutation addIssueToProject($issueId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $issueId }) {
      clientMutationId
    }
  }
`,Xp=g.default`
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
  ${Ga}
`,el=g.default`
  query searchIssueMentions($query: String!, $numberOfItems: Int!) {
    search(query: $query, type: ISSUE, first: $numberOfItems) {
      nodes {
        ... on Issue {
          ...IssueMentionFields
        }
      }
    }
  }
  ${$o}
`,tl=g.default`
  query searchPullRequestMentions($query: String!, $numberOfItems: Int!) {
    search(query: $query, type: ISSUE, first: $numberOfItems) {
      nodes {
        ... on PullRequest {
          ...PullRequestMentionFields
        }
      }
    }
  }
  ${Qo}
`,al=g.default`
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
  ${$o}
  ${Qo}
`,rl=g.default`
  query searchRepositoryMentions($query: String!, $numberOfItems: Int!) {
    search(query: $query, type: REPOSITORY, first: $numberOfItems) {
      nodes {
        ... on Repository {
          ...RepositoryMentionFields
        }
      }
    }
  }
  ${Wo}
`,nl=g.default`
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
  ${Wo}
`,ol=g.default`
  mutation changeProjectStatus($projectId: ID!, $closed: Boolean!) {
    updateProjectV2(input: { projectId: $projectId, closed: $closed }) {
      clientMutationId
    }
  }
`,il=g.default`
  query projectDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...ProjectFields
    }
  }
  ${Ko}
`,sl=g.default`
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
  ${Yo}
`,ul=g.default`
  query pullRequestDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...PullRequestDetailsFields
    }
  }
  ${Bp}
`,pl=g.default`
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
  ${Re}
`,ll=g.default`
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
`,cl=g.default`
  query pullRequestCommits($nodeId: ID!, $numberOfItems: Int!, $before: String) {
    node(id: $nodeId) {
      ...PullRequestCommitFields
    }
  }
  ${Lp}
`,yl=g.default`
  mutation closePullRequest($nodeId: ID!) {
    closePullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,dl=g.default`
  mutation reopenPullRequest($nodeId: ID!) {
    reopenPullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Sl=g.default`
  mutation markPullRequestReadyForReview($nodeId: ID!) {
    markPullRequestReadyForReview(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,bl=g.default`
  mutation addPullRequestReview($nodeId: ID!, $event: PullRequestReviewEvent, $body: String) {
    addPullRequestReview(input: { pullRequestId: $nodeId, event: $event, body: $body }) {
      pullRequestReview {
        id
      }
    }
  }
`,Il=g.default`
  mutation changePullRequestAssignees($pullRequestId: ID!, $assigneeIds: [ID!]) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,gl=g.default`
  mutation changePullRequestMilestone($pullRequestId: ID!, $milestoneId: ID) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,Ml=g.default`
  mutation addPullRequestToProject($pullRequestId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $pullRequestId }) {
      clientMutationId
    }
  }
`,ml=g.default`
  mutation requestReview($pullRequestId: ID!, $collaboratorId: ID!) {
    requestReviews(input: { pullRequestId: $pullRequestId, userIds: [$collaboratorId], union: true }) {
      clientMutationId
    }
  }
`,Rl=g.default`
  mutation mergePullRequest($nodeId: ID!, $method: PullRequestMergeMethod!) {
    mergePullRequest(input: { pullRequestId: $nodeId, mergeMethod: $method }) {
      pullRequest {
        nodeId: id
      }
    }
  }
`,Al=g.default`
  mutation addPullRequestToMergeQueue($nodeId: ID!) {
    enqueuePullRequest(input: { pullRequestId: $nodeId }) {
      __typename
    }
  }
`,fl=g.default`
  mutation removePullRequestFromMergeQueue($nodeId: ID!) {
    dequeuePullRequest(input: { id: $nodeId }) {
      __typename
    }
  }
`,Pl=g.default`
  mutation enablePullRequestAutoMerge($nodeId: ID!, $mergeMethod: PullRequestMergeMethod) {
    enablePullRequestAutoMerge(input: { pullRequestId: $nodeId, mergeMethod: $mergeMethod }) {
      pullRequest {
        id
      }
    }
  }
`,El=g.default`
  mutation disablePullRequestAutoMerge($nodeId: ID!) {
    disablePullRequestAutoMerge(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Cl=g.default`
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
`,hl=g.default`
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
  ${Yo}
`,Dl=g.default`
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
  ${Br}
`,xl=g.default`
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
  ${Br}
`,Ul=g.default`
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
`,_l=g.default`
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
`,vl=g.default`
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
  ${Jo}
  ${Re}
`,Tl=g.default`
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
  ${Jo}
`,wl=g.default`
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
  ${Ga}
`,Ol=g.default`
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
  ${qp}
`,Bl=g.default`
  mutation addStar($repositoryId: ID!) {
    addStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,Ll=g.default`
  mutation removeStar($repositoryId: ID!) {
    removeStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,ql=g.default`
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
  ${Br}
`,Nl=g.default`
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
  ${Re}
  ${Ko}
`,Vl=g.default`
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
  ${Re}
`,jl=g.default`
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
`,kl=(e,t,a,r)=>e();function Zo(e,t=kl){return{createLinkedBranch(a,r,n){return t(o=>e.request({document:Np,variables:a,requestHeaders:{...r,...o},signal:n}),"createLinkedBranch","mutation",a)},createRef(a,r,n){return t(o=>e.request({document:Vp,variables:a,requestHeaders:{...r,...o},signal:n}),"createRef","mutation",a)},deleteLinkedBranch(a,r,n){return t(o=>e.request({document:jp,variables:a,requestHeaders:{...r,...o},signal:n}),"deleteLinkedBranch","mutation",a)},searchDiscussions(a,r,n){return t(o=>e.request({document:kp,variables:a,requestHeaders:{...r,...o},signal:n}),"searchDiscussions","query",a)},getGitHubDiscussionNumber(a,r,n){return t(o=>e.request({document:Fp,variables:a,requestHeaders:{...r,...o},signal:n}),"getGitHubDiscussionNumber","query",a)},repositoryCollaboratorsForIssues(a,r,n){return t(o=>e.request({document:zp,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryCollaboratorsForIssues","query",a)},repositoryProjectsForIssues(a,r,n){return t(o=>e.request({document:Hp,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryProjectsForIssues","query",a)},issueDetails(a,r,n){return t(o=>e.request({document:Gp,variables:a,requestHeaders:{...r,...o},signal:n}),"issueDetails","query",a)},searchIssues(a,r,n){return t(o=>e.request({document:$p,variables:a,requestHeaders:{...r,...o},signal:n}),"searchIssues","query",a)},issueByNumber(a,r,n){return t(o=>e.request({document:Qp,variables:a,requestHeaders:{...r,...o},signal:n}),"issueByNumber","query",a)},closeIssue(a,r,n){return t(o=>e.request({document:Wp,variables:a,requestHeaders:{...r,...o},signal:n}),"closeIssue","mutation",a)},reopenIssue(a,r,n){return t(o=>e.request({document:Kp,variables:a,requestHeaders:{...r,...o},signal:n}),"reopenIssue","mutation",a)},changeIssueAssignees(a,r,n){return t(o=>e.request({document:Yp,variables:a,requestHeaders:{...r,...o},signal:n}),"changeIssueAssignees","mutation",a)},changeIssueMilestone(a,r,n){return t(o=>e.request({document:Jp,variables:a,requestHeaders:{...r,...o},signal:n}),"changeIssueMilestone","mutation",a)},addIssueToProject(a,r,n){return t(o=>e.request({document:Zp,variables:a,requestHeaders:{...r,...o},signal:n}),"addIssueToProject","mutation",a)},createIssue(a,r,n){return t(o=>e.request({document:Xp,variables:a,requestHeaders:{...r,...o},signal:n}),"createIssue","mutation",a)},searchIssueMentions(a,r,n){return t(o=>e.request({document:el,variables:a,requestHeaders:{...r,...o},signal:n}),"searchIssueMentions","query",a)},searchPullRequestMentions(a,r,n){return t(o=>e.request({document:tl,variables:a,requestHeaders:{...r,...o},signal:n}),"searchPullRequestMentions","query",a)},issueOrPullRequestMention(a,r,n){return t(o=>e.request({document:al,variables:a,requestHeaders:{...r,...o},signal:n}),"issueOrPullRequestMention","query",a)},searchRepositoryMentions(a,r,n){return t(o=>e.request({document:rl,variables:a,requestHeaders:{...r,...o},signal:n}),"searchRepositoryMentions","query",a)},viewerRepositoryMentions(a,r,n){return t(o=>e.request({document:nl,variables:a,requestHeaders:{...r,...o},signal:n}),"viewerRepositoryMentions","query",a)},changeProjectStatus(a,r,n){return t(o=>e.request({document:ol,variables:a,requestHeaders:{...r,...o},signal:n}),"changeProjectStatus","mutation",a)},projectDetails(a,r,n){return t(o=>e.request({document:il,variables:a,requestHeaders:{...r,...o},signal:n}),"projectDetails","query",a)},searchPullRequests(a,r,n){return t(o=>e.request({document:sl,variables:a,requestHeaders:{...r,...o},signal:n}),"searchPullRequests","query",a)},pullRequestDetails(a,r,n){return t(o=>e.request({document:ul,variables:a,requestHeaders:{...r,...o},signal:n}),"pullRequestDetails","query",a)},repositoryCollaboratorsForPullRequests(a,r,n){return t(o=>e.request({document:pl,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryCollaboratorsForPullRequests","query",a)},repositoryProjectsForPullRequests(a,r,n){return t(o=>e.request({document:ll,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryProjectsForPullRequests","query",a)},pullRequestCommits(a,r,n){return t(o=>e.request({document:cl,variables:a,requestHeaders:{...r,...o},signal:n}),"pullRequestCommits","query",a)},closePullRequest(a,r,n){return t(o=>e.request({document:yl,variables:a,requestHeaders:{...r,...o},signal:n}),"closePullRequest","mutation",a)},reopenPullRequest(a,r,n){return t(o=>e.request({document:dl,variables:a,requestHeaders:{...r,...o},signal:n}),"reopenPullRequest","mutation",a)},markPullRequestReadyForReview(a,r,n){return t(o=>e.request({document:Sl,variables:a,requestHeaders:{...r,...o},signal:n}),"markPullRequestReadyForReview","mutation",a)},addPullRequestReview(a,r,n){return t(o=>e.request({document:bl,variables:a,requestHeaders:{...r,...o},signal:n}),"addPullRequestReview","mutation",a)},changePullRequestAssignees(a,r,n){return t(o=>e.request({document:Il,variables:a,requestHeaders:{...r,...o},signal:n}),"changePullRequestAssignees","mutation",a)},changePullRequestMilestone(a,r,n){return t(o=>e.request({document:gl,variables:a,requestHeaders:{...r,...o},signal:n}),"changePullRequestMilestone","mutation",a)},addPullRequestToProject(a,r,n){return t(o=>e.request({document:Ml,variables:a,requestHeaders:{...r,...o},signal:n}),"addPullRequestToProject","mutation",a)},requestReview(a,r,n){return t(o=>e.request({document:ml,variables:a,requestHeaders:{...r,...o},signal:n}),"requestReview","mutation",a)},mergePullRequest(a,r,n){return t(o=>e.request({document:Rl,variables:a,requestHeaders:{...r,...o},signal:n}),"mergePullRequest","mutation",a)},addPullRequestToMergeQueue(a,r,n){return t(o=>e.request({document:Al,variables:a,requestHeaders:{...r,...o},signal:n}),"addPullRequestToMergeQueue","mutation",a)},removePullRequestFromMergeQueue(a,r,n){return t(o=>e.request({document:fl,variables:a,requestHeaders:{...r,...o},signal:n}),"removePullRequestFromMergeQueue","mutation",a)},enablePullRequestAutoMerge(a,r,n){return t(o=>e.request({document:Pl,variables:a,requestHeaders:{...r,...o},signal:n}),"enablePullRequestAutoMerge","mutation",a)},disablePullRequestAutoMerge(a,r,n){return t(o=>e.request({document:El,variables:a,requestHeaders:{...r,...o},signal:n}),"disablePullRequestAutoMerge","mutation",a)},createPullRequest(a,r,n){return t(o=>e.request({document:Cl,variables:a,requestHeaders:{...r,...o},signal:n}),"createPullRequest","mutation",a)},initPullRequest(a,r,n){return t(o=>e.request({document:hl,variables:a,requestHeaders:{...r,...o},signal:n}),"initPullRequest","mutation",a)},searchRepositories(a,r,n){return t(o=>e.request({document:Dl,variables:a,requestHeaders:{...r,...o},signal:n}),"searchRepositories","query",a)},myLatestRepositories(a,r,n){return t(o=>e.request({document:xl,variables:a,requestHeaders:{...r,...o},signal:n}),"myLatestRepositories","query",a)},milestonesForRepository(a,r,n){return t(o=>e.request({document:Ul,variables:a,requestHeaders:{...r,...o},signal:n}),"milestonesForRepository","query",a)},commentsForPullRequest(a,r,n){return t(o=>e.request({document:_l,variables:a,requestHeaders:{...r,...o},signal:n}),"commentsForPullRequest","query",a)},dataForRepository(a,r,n){return t(o=>e.request({document:vl,variables:a,requestHeaders:{...r,...o},signal:n}),"dataForRepository","query",a)},searchRepositoryBranches(a,r,n){return t(o=>e.request({document:Tl,variables:a,requestHeaders:{...r,...o},signal:n}),"searchRepositoryBranches","query",a)},repositoryIssues(a,r,n){return t(o=>e.request({document:wl,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryIssues","query",a)},repositoryReleases(a,r,n){return t(o=>e.request({document:Ol,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryReleases","query",a)},addStar(a,r,n){return t(o=>e.request({document:Bl,variables:a,requestHeaders:{...r,...o},signal:n}),"addStar","mutation",a)},removeStar(a,r,n){return t(o=>e.request({document:Ll,variables:a,requestHeaders:{...r,...o},signal:n}),"removeStar","mutation",a)},myStarredRepositories(a,r,n){return t(o=>e.request({document:ql,variables:a,requestHeaders:{...r,...o},signal:n}),"myStarredRepositories","query",a)},getViewer(a,r,n){return t(o=>e.request({document:Nl,variables:a,requestHeaders:{...r,...o},signal:n}),"getViewer","query",a)},getViewerStats(a,r,n){return t(o=>e.request({document:Vl,variables:a,requestHeaders:{...r,...o},signal:n}),"getViewerStats","query",a)},getViewerStatsDetails(a,r,n){return t(o=>e.request({document:jl,variables:a,requestHeaders:{...r,...o},signal:n}),"getViewerStatsDetails","query",a)}}}var Lr=null,qr=null,ai=null,Fl=(0,ei.getPreferenceValues)();function zl({token:e,type:t}){let a=t==="personal"?`token ${e}`:`bearer ${e}`;ai=e,Lr=Zo(new wa("https://api.github.com/graphql",{headers:{authorization:a}})),qr=new Xo.Octokit({auth:e,request:{fetch:Ha}})}var ri=ti.OAuthService.github({personalAccessToken:Fl.personalAccessToken,scope:"notifications repo project read:org read:user read:packages",onAuthorize:zl});function At(){if(!Lr||!qr)throw new Error("GitHub clients not initialized");return{github:Lr,octokit:qr,token:ai}}function ni(e){return e?.response?.errors?e.response.errors[0].message:e instanceof Error?e.message:String(e)}var oi=async(e,t,a=!1)=>{let{headers:r}=await t.request("GET /user"),n=(r["x-oauth-scopes"]||"").split(",").map(u=>u.trim()),o=Array.isArray(e)?e:[e];return a?o.every(u=>n.includes(u)):o.some(u=>n.includes(u))};var Ze=require("react/jsx-runtime");function Yt({project:e,children:t,mutateList:a,mutateDetail:r}){let{github:n,octokit:o}=At(),u=e.viewerCanClose||e.viewerCanReopen||e.viewerCanUpdate;async function s(){a&&await a(),r&&await r()}async function i(p){try{if(await(0,h.showToast)({style:h.Toast.Style.Animated,title:p?"Closing project":"Reopening project"}),!await oi(["project","project:write"],o)){let y={style:h.Toast.Style.Failure,title:"Missing Scopes",message:'You need the "project" or "project:write" scopes to close or reopen a project. Please re-authenticate.',primaryAction:{title:"Re-authenticate",onAction:I=>{(0,h.openExtensionPreferences)(),I.hide()}}};await(0,h.showToast)(y);return}await n.changeProjectStatus({projectId:e.id,closed:p}),await s(),await(0,h.showToast)({style:h.Toast.Style.Success,title:`Project "${e.title}" is now ${p?"closed":"reopened"}`})}catch(c){await(0,h.showToast)({style:h.Toast.Style.Failure,title:`Failed ${p?"closing":"reopening"} project`,message:ni(c)})}}return(0,Ze.jsxs)(h.ActionPanel,{title:`Project: ${e.title}`,children:[t,(0,Ze.jsx)(h.Action.OpenInBrowser,{title:"Open in GitHub",icon:h.Icon.Globe,url:e.url}),u?(0,Ze.jsxs)(h.ActionPanel.Section,{children:[e.viewerCanClose&&e.viewerCanUpdate&&!e.closed?(0,Ze.jsx)(h.Action,{title:"Close Project",icon:h.Icon.Lock,shortcut:h.Keyboard.Shortcut.Common.Copy,style:h.Action.Style.Destructive,onAction:async()=>{await(0,h.confirmAlert)({title:"Close Project",message:"Are you sure you want to close this project?"})&&await i(!0)}}):null,e.viewerCanReopen&&e.viewerCanUpdate&&e.closed?(0,Ze.jsx)(h.Action,{title:"Reopen Project",icon:h.Icon.LockUnlocked,shortcut:h.Keyboard.Shortcut.Common.OpenWith,style:h.Action.Style.Destructive,onAction:async()=>{await(0,h.confirmAlert)({title:"Reopen Project",message:"Are you sure you want to reopen this project?"})&&await i(!1)}}):null]}):null]})}var _=require("@raycast/api"),ii=N(jt()),Nr=require("date-fns");var Q=require("react/jsx-runtime");function Vr({project:e,mutateList:t}){let{github:a}=At(),{data:r,isLoading:n,mutate:o}=(0,ii.useCachedPromise)(async i=>(await a.projectDetails({nodeId:i})).node,[e.id],{initialData:e}),u=ea(r),s=`# ${r.title}

${r.readme??"> No README provided."}`;return(0,Q.jsx)(_.Detail,{markdown:s,isLoading:n,navigationTitle:r.title,metadata:(0,Q.jsxs)(_.Detail.Metadata,{children:[(0,Q.jsx)(_.Detail.Metadata.Label,{title:"Project",text:r.title}),(0,Q.jsx)(_.Detail.Metadata.Label,{title:"Description",text:r.shortDescription??"No description provided"}),(0,Q.jsxs)(_.Detail.Metadata.TagList,{title:"Status",children:[(0,Q.jsx)(_.Detail.Metadata.TagList.Item,{text:r.public?"Public":"Private",color:r.public?_.Color.Green:_.Color.Orange,icon:r.public?_.Icon.Globe:_.Icon.Lock}),(0,Q.jsx)(_.Detail.Metadata.TagList.Item,{text:r.closed?"Closed":"Open",color:r.closed?_.Color.Red:_.Color.Green,icon:r.closed?_.Icon.Xmark:_.Icon.Checkmark})]}),r.updatedAt?(0,Q.jsx)(_.Detail.Metadata.Label,{title:"Updated",text:(0,Nr.format)(new Date(r.updatedAt),"dd MMM yyyy, HH:mm")}):null,(0,Q.jsx)(_.Detail.Metadata.Separator,{}),(0,Q.jsx)(_.Detail.Metadata.Label,{title:"Creator",text:u.text,icon:u.icon}),r.createdAt?(0,Q.jsx)(_.Detail.Metadata.Label,{title:"Created",text:(0,Nr.format)(new Date(r.createdAt),"dd MMM yyyy, HH:mm")}):null]}),actions:(0,Q.jsx)(Yt,{project:r,mutateList:t,mutateDetail:o})})}var Jt=require("react/jsx-runtime");function jr({project:e,mutateList:t}){let a=new Date(e.updatedAt),r=ea(e),n=[{date:a,tooltip:`Updated: ${(0,si.format)(a,"EEEE d MMMM yyyy 'at' HH:mm")}`},{icon:r.icon,tooltip:`Creator: ${r.text}`}];return(0,Jt.jsx)(Ue.List.Item,{title:e.title,subtitle:e.shortDescription??"",icon:{value:{source:"project.svg",tintColor:e.closed?Ue.Color.Orange:Ue.Color.Green},tooltip:`Closed: ${e.closed?"Yes":"No"}`},accessories:n,actions:(0,Jt.jsx)(Yt,{project:e,mutateList:t,children:(0,Jt.jsx)(Ue.Action.Push,{title:"Show Details",icon:Ue.Icon.Sidebar,target:(0,Jt.jsx)(Vr,{project:e})})})})}var ui=N(jt());var pi=(0,ui.withAccessToken)(ri);var li=N(jt());function ci(e){let{github:t}=At();return(0,li.useCachedPromise)(async a=>{let{viewer:r}=await t.getViewer();return a===null?r?.projectsV2?.nodes??[]:r?.projectsV2?.nodes?.filter(n=>n&&n.closed===a)??[]},[e])}var ft=require("react/jsx-runtime");function Hl(){let[e,t]=(0,di.useState)("open"),{data:a,isLoading:r,mutate:n}=ci(e==="all"?null:e==="closed");return(0,ft.jsxs)(yi.List,{isLoading:r,searchBarPlaceholder:"Filter projects by name",searchBarAccessory:(0,ft.jsx)(Wa,{setClosed:t}),children:[(a||[]).map(o=>(0,ft.jsx)(jr,{project:o,mutateList:n},`project-${o.id}-${o.closed?"closed":"open"}`)),(0,ft.jsx)(Ka,{})]})}var Gl=pi(Hl);
