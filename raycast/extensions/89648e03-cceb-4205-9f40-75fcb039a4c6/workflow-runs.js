"use strict";var Si=Object.create;var Jt=Object.defineProperty;var bi=Object.getOwnPropertyDescriptor;var Ii=Object.getOwnPropertyNames;var gi=Object.getPrototypeOf,Mi=Object.prototype.hasOwnProperty;var Ga=(e,t,a)=>()=>{if(a)throw a[0];try{return e&&(t=e(e=0)),t}catch(r){throw a=[r],r}};var C=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(a){throw t=0,a}},et=(e,t)=>{for(var a in t)Jt(e,a,{get:t[a],enumerable:!0})},Yt=(e,t,a,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Ii(t))!Mi.call(e,n)&&n!==a&&Jt(e,n,{get:()=>t[n],enumerable:!(r=bi(t,n))||r.enumerable});return e},z=(e,t,a)=>(Yt(e,t,"default"),a&&Yt(a,t,"default")),w=(e,t,a)=>(a=e!=null?Si(gi(e)):{},Yt(t||!e||!e.__esModule?Jt(a,"default",{value:e,enumerable:!0}):a,e)),mi=e=>Yt(Jt({},"__esModule",{value:!0}),e);var qr=C(Zt=>{"use strict";Object.defineProperty(Zt,"__esModule",{value:!0});Zt.useDeepMemo=void 0;var $a=require("react"),Ri=require("dequal/lite");function Ai(e){let t=(0,$a.useRef)(e),a=(0,$a.useRef)(0);return(0,Ri.dequal)(e,t.current)||(t.current=e,a.current+=1),(0,$a.useMemo)(()=>t.current,[a.current])}Zt.useDeepMemo=Ai});var Ae=C(Xt=>{"use strict";Object.defineProperty(Xt,"__esModule",{value:!0});Xt.useLatest=void 0;var fi=require("react");function Pi(e){let t=(0,fi.useRef)(e);return t.current=e,t}Xt.useLatest=Pi});var Ct=C(ye=>{"use strict";var Ei=ye&&ye.__createBinding||(Object.create?(function(e,t,a,r){r===void 0&&(r=a);var n=Object.getOwnPropertyDescriptor(t,a);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,n)}):(function(e,t,a,r){r===void 0&&(r=a),e[r]=t[a]})),Ci=ye&&ye.__setModuleDefault||(Object.create?(function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}):function(e,t){e.default=t}),Vr=ye&&ye.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var a in e)a!=="default"&&Object.prototype.hasOwnProperty.call(e,a)&&Ei(t,e,a);return Ci(t,e),t};Object.defineProperty(ye,"__esModule",{value:!0});ye.showFailureToast=void 0;var hi=Vr(require("fs")),Di=Vr(require("path")),tt=require("@raycast/api");function xi(e,t){let a=e instanceof Error?e.message:String(e);return(0,tt.showToast)({style:tt.Toast.Style.Failure,title:t?.title??"Something went wrong",message:t?.message??a,primaryAction:t?.primaryAction??Nr(e),secondaryAction:t?.primaryAction?Nr(e):void 0})}ye.showFailureToast=xi;var Nr=e=>{let t=!0,a="[Extension Name]...",r="";try{let u=JSON.parse(hi.readFileSync(Di.join(tt.environment.assetsPath,"..","package.json"),"utf8"));a=`[${u.title}]...`,r=`https://raycast.com/${u.owner||u.author}/${u.name}`,(!u.owner||u.access==="public")&&(t=!1)}catch{}let n=tt.environment.isDevelopment||t,o=e instanceof Error?e?.stack||e?.message||"":String(e);return{title:n?"Copy Logs":"Report Error",onAction(u){u.hide(),n?tt.Clipboard.copy(o):(0,tt.open)(`https://github.com/raycast/extensions/issues/new?&labels=extension%2Cbug&template=extension_bug_report.yml&title=${encodeURIComponent(a)}&extension-url=${encodeURI(r)}&description=${encodeURIComponent(`#### Error:
\`\`\`
${o}
\`\`\`
`)}`)}}}});var at=C(ea=>{"use strict";Object.defineProperty(ea,"__esModule",{value:!0});ea.usePromise=void 0;var K=require("react"),ht=require("@raycast/api"),_i=qr(),Ue=Ae(),Ui=Ct();function vi(e,t,a){let r=(0,K.useRef)(0),[n,o]=(0,K.useState)({isLoading:!0}),u=(0,Ue.useLatest)(e),i=(0,Ue.useLatest)(a?.abortable),s=(0,Ue.useLatest)(t||[]),p=(0,Ue.useLatest)(a?.onError),c=(0,Ue.useLatest)(a?.onData),y=(0,Ue.useLatest)(a?.onWillExecute),S=(0,Ue.useLatest)(a?.failureToastOptions),g=(0,Ue.useLatest)(n.data),l=(0,K.useRef)(),b=(0,K.useRef)({page:0}),d=(0,K.useRef)(!1),I=(0,K.useRef)(!0),R=(0,K.useRef)(50),f=(0,K.useCallback)((...k)=>{let T=++r.current;i.current&&(i.current.current?.abort(),i.current.current=new AbortController),y.current?.(k),o(h=>({...h,isLoading:!0}));let se=Ti(u.current)(...k);function ce(h){return h.name=="AbortError"||T===r.current&&(p.current?p.current(h):ht.environment.launchType!==ht.LaunchType.Background&&(0,Ui.showFailureToast)(h,{title:"Failed to fetch latest data",primaryAction:{title:"Retry",onAction(W){W.hide(),l.current?.(...s.current||[])}},...S.current}),o({error:h,isLoading:!1})),h}return typeof se=="function"?(d.current=!0,se(b.current).then(({data:h,hasMore:W,cursor:Et})=>(T===r.current&&(b.current&&(b.current.cursor=Et,b.current.lastItem=h?.[h.length-1]),c.current&&c.current(h,b.current),W&&(R.current=h.length),I.current=W,o(Ha=>b.current.page===0?{data:h,isLoading:!1}:{data:(Ha.data||[])?.concat(h),isLoading:!1})),h),h=>(I.current=!1,ce(h)))):(d.current=!1,se.then(h=>(T===r.current&&(c.current&&c.current(h),o({data:h,isLoading:!1})),h),ce))},[i,c,p,s,u,o,l,y,b,S]);l.current=f;let m=(0,K.useCallback)(()=>{b.current={page:0};let k=s.current||[];return f(...k)},[f,s]),P=(0,K.useCallback)(async(k,T)=>{let se;try{if(T?.optimisticUpdate){typeof T?.rollbackOnError!="function"&&T?.rollbackOnError!==!1&&(se=structuredClone(g.current?.value));let ce=T.optimisticUpdate;o(h=>({...h,data:ce(h.data)}))}return await k}catch(ce){if(typeof T?.rollbackOnError=="function"){let h=T.rollbackOnError;o(W=>({...W,data:h(W.data)}))}else T?.optimisticUpdate&&T?.rollbackOnError!==!1&&o(h=>({...h,data:se}));throw ce}finally{T?.shouldRevalidateAfter!==!1&&(ht.environment.launchType===ht.LaunchType.Background||ht.environment.commandMode==="menu-bar"?await m():m())}},[m,g,o]),A=(0,K.useCallback)(()=>{b.current.page+=1;let k=s.current||[];f(...k)},[b,s,f]);(0,K.useEffect)(()=>{b.current={page:0},a?.execute!==!1?f(...t||[]):i.current&&i.current.current?.abort()},[(0,_i.useDeepMemo)([t,a?.execute,f]),i,b]),(0,K.useEffect)(()=>()=>{i.current&&i.current.current?.abort()},[i]);let _=a?.execute!==!1?n.isLoading:!1,N={...n,isLoading:_},ie=d.current?{pageSize:R.current,hasMore:I.current,onLoadMore:A}:void 0;return{...N,revalidate:m,mutate:P,pagination:ie}}ea.usePromise=vi;function Ti(e){return e===Promise.all||e===Promise.race||e===Promise.resolve||e===Promise.reject?e.bind(Promise):e}});var ve=C(de=>{"use strict";var wi=de&&de.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(de,"__esModule",{value:!0});de.hash=de.reviver=de.replacer=void 0;var Oi=wi(require("object-hash"));function Bi(e,t){let a=this[e];return a instanceof Date?`__raycast_cached_date__${a.toString()}`:Buffer.isBuffer(a)?`__raycast_cached_buffer__${a.toString("base64")}`:t}de.replacer=Bi;function Li(e,t){return typeof t=="string"&&t.startsWith("__raycast_cached_date__")?new Date(t.replace("__raycast_cached_date__","")):typeof t=="string"&&t.startsWith("__raycast_cached_buffer__")?Buffer.from(t.replace("__raycast_cached_buffer__",""),"base64"):t}de.reviver=Li;function qi(e,t){return(0,Oi.default)(e,{replacer:a=>a instanceof URLSearchParams?a.toString():a,...t})}de.hash=qi});var aa=C(ta=>{"use strict";Object.defineProperty(ta,"__esModule",{value:!0});ta.useCachedState=void 0;var Qa=require("react"),Ni=require("@raycast/api"),Wa=Ae(),kr=ve(),Vi=Symbol("cache without namespace"),Fr=new Map;function ki(e,t,a){let r=a?.cacheNamespace||Vi,n=Fr.get(r)||Fr.set(r,new Ni.Cache({namespace:a?.cacheNamespace})).get(r);if(!n)throw new Error("Missing cache");let o=(0,Wa.useLatest)(e),u=(0,Wa.useLatest)(t),i=(0,Qa.useSyncExternalStore)(n.subscribe,()=>{try{return n.get(o.current)}catch(y){console.error("Could not get Cache data:",y);return}}),s=(0,Qa.useMemo)(()=>{if(typeof i<"u"){if(i==="undefined")return;try{return JSON.parse(i,kr.reviver)}catch(y){return console.warn("The cached data is corrupted",y),u.current}}else return u.current},[i,u]),p=(0,Wa.useLatest)(s),c=(0,Qa.useCallback)(y=>{let S=typeof y=="function"?y(p.current):y;if(typeof S>"u")n.set(o.current,"undefined");else{let g=JSON.stringify(S,kr.replacer);n.set(o.current,g)}return S},[n,o,p]);return[s,c]}ta.useCachedState=ki});var xt=C(ra=>{"use strict";Object.defineProperty(ra,"__esModule",{value:!0});ra.useCachedPromise=void 0;var Dt=require("react"),Fi=aa(),ji=at(),zi=Ae(),jr=ve(),rt=Symbol();function Hi(e,t,a){let{initialData:r,keepPreviousData:n,internal_cacheKeySuffix:o,...u}=a||{},i=(0,Dt.useRef)(),[s,p]=(0,Fi.useCachedState)((0,jr.hash)(t||[])+o,rt,{cacheNamespace:(0,jr.hash)(e)}),c=(0,Dt.useRef)(s!==rt?s:r),y=(0,Dt.useRef)(void 0),{mutate:S,revalidate:g,...l}=(0,ji.usePromise)(e,t||[],{...u,onData(f,m){y.current=m,u.onData&&u.onData(f,m),!(m&&m.page>0)&&(i.current="promise",c.current=f,p(f))}}),b,d=l.pagination;y.current&&y.current.page>0&&l.data?b=l.data:i.current==="promise"?b=c.current:n&&s!==rt?(b=s,d&&(d.hasMore=!0,d.pageSize=s.length)):n&&s===rt?b=c.current:s!==rt?(b=s,d&&(d.hasMore=!0,d.pageSize=s.length)):b=r;let I=(0,zi.useLatest)(b),R=(0,Dt.useCallback)(async(f,m)=>{let P;try{if(m?.optimisticUpdate){typeof m?.rollbackOnError!="function"&&m?.rollbackOnError!==!1&&(P=structuredClone(I.current));let A=m.optimisticUpdate(I.current);i.current="cache",c.current=A,p(A)}return await S(f,{shouldRevalidateAfter:m?.shouldRevalidateAfter})}catch(A){if(typeof m?.rollbackOnError=="function"){let _=m.rollbackOnError(I.current);i.current="cache",c.current=_,p(_)}else m?.optimisticUpdate&&m?.rollbackOnError!==!1&&(i.current="cache",c.current=P,p(P));throw A}},[p,S,I,c,i]);return(0,Dt.useEffect)(()=>{s!==rt&&(i.current="cache",c.current=s)},[s]),{data:b,isLoading:l.isLoading,error:l.error,mutate:y.current&&y.current.page>0?S:R,pagination:d,revalidate:g}}ra.useCachedPromise=Hi});var en=C((pe,Xr)=>{"use strict";Object.defineProperty(pe,"__esModule",{value:!0});function st(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var ue=st(require("stream")),$r=st(require("http")),oa=st(require("url")),Qr=st(require("whatwg-url")),Gi=st(require("https")),je=st(require("zlib")),$i=ue.Readable,fe=Symbol("buffer"),Ka=Symbol("type"),Ut=class e{constructor(){this[Ka]="";let t=arguments[0],a=arguments[1],r=[],n=0;if(t){let u=t,i=Number(u.length);for(let s=0;s<i;s++){let p=u[s],c;p instanceof Buffer?c=p:ArrayBuffer.isView(p)?c=Buffer.from(p.buffer,p.byteOffset,p.byteLength):p instanceof ArrayBuffer?c=Buffer.from(p):p instanceof e?c=p[fe]:c=Buffer.from(typeof p=="string"?p:String(p)),n+=c.length,r.push(c)}}this[fe]=Buffer.concat(r);let o=a&&a.type!==void 0&&String(a.type).toLowerCase();o&&!/[^\u0020-\u007E]/.test(o)&&(this[Ka]=o)}get size(){return this[fe].length}get type(){return this[Ka]}text(){return Promise.resolve(this[fe].toString())}arrayBuffer(){let t=this[fe],a=t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength);return Promise.resolve(a)}stream(){let t=new $i;return t._read=function(){},t.push(this[fe]),t.push(null),t}toString(){return"[object Blob]"}slice(){let t=this.size,a=arguments[0],r=arguments[1],n,o;a===void 0?n=0:a<0?n=Math.max(t+a,0):n=Math.min(a,t),r===void 0?o=t:r<0?o=Math.max(t+r,0):o=Math.min(r,t);let u=Math.max(o-n,0),s=this[fe].slice(n,n+u),p=new e([],{type:arguments[2]});return p[fe]=s,p}};Object.defineProperties(Ut.prototype,{size:{enumerable:!0},type:{enumerable:!0},slice:{enumerable:!0}});Object.defineProperty(Ut.prototype,Symbol.toStringTag,{value:"Blob",writable:!1,enumerable:!1,configurable:!0});function q(e,t,a){Error.call(this,e),this.message=e,this.type=t,a&&(this.code=this.errno=a.code),Error.captureStackTrace(this,this.constructor)}q.prototype=Object.create(Error.prototype);q.prototype.constructor=q;q.prototype.name="FetchError";var Xa;try{Xa=require("encoding").convert}catch{}var Ee=Symbol("Body internals"),zr=ue.PassThrough;function O(e){var t=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.size;let n=r===void 0?0:r;var o=a.timeout;let u=o===void 0?0:o;e==null?e=null:Wr(e)?e=Buffer.from(e.toString()):Tt(e)||Buffer.isBuffer(e)||(Object.prototype.toString.call(e)==="[object ArrayBuffer]"?e=Buffer.from(e):ArrayBuffer.isView(e)?e=Buffer.from(e.buffer,e.byteOffset,e.byteLength):e instanceof ue||(e=Buffer.from(String(e)))),this[Ee]={body:e,disturbed:!1,error:null},this.size=n,this.timeout=u,e instanceof ue&&e.on("error",function(i){let s=i.name==="AbortError"?i:new q(`Invalid response body while trying to fetch ${t.url}: ${i.message}`,"system",i);t[Ee].error=s})}O.prototype={get body(){return this[Ee].body},get bodyUsed(){return this[Ee].disturbed},arrayBuffer(){return nt.call(this).then(function(e){return e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength)})},blob(){let e=this.headers&&this.headers.get("content-type")||"";return nt.call(this).then(function(t){return Object.assign(new Ut([],{type:e.toLowerCase()}),{[fe]:t})})},json(){var e=this;return nt.call(this).then(function(t){try{return JSON.parse(t.toString())}catch(a){return O.Promise.reject(new q(`invalid json response body at ${e.url} reason: ${a.message}`,"invalid-json"))}})},text(){return nt.call(this).then(function(e){return e.toString()})},buffer(){return nt.call(this)},textConverted(){var e=this;return nt.call(this).then(function(t){return Qi(t,e.headers)})}};Object.defineProperties(O.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0}});O.mixIn=function(e){for(let t of Object.getOwnPropertyNames(O.prototype))if(!(t in e)){let a=Object.getOwnPropertyDescriptor(O.prototype,t);Object.defineProperty(e,t,a)}};function nt(){var e=this;if(this[Ee].disturbed)return O.Promise.reject(new TypeError(`body used already for: ${this.url}`));if(this[Ee].disturbed=!0,this[Ee].error)return O.Promise.reject(this[Ee].error);let t=this.body;if(t===null)return O.Promise.resolve(Buffer.alloc(0));if(Tt(t)&&(t=t.stream()),Buffer.isBuffer(t))return O.Promise.resolve(t);if(!(t instanceof ue))return O.Promise.resolve(Buffer.alloc(0));let a=[],r=0,n=!1;return new O.Promise(function(o,u){let i;e.timeout&&(i=setTimeout(function(){n=!0,u(new q(`Response timeout while trying to fetch ${e.url} (over ${e.timeout}ms)`,"body-timeout"))},e.timeout)),t.on("error",function(s){s.name==="AbortError"?(n=!0,u(s)):u(new q(`Invalid response body while trying to fetch ${e.url}: ${s.message}`,"system",s))}),t.on("data",function(s){if(!(n||s===null)){if(e.size&&r+s.length>e.size){n=!0,u(new q(`content size at ${e.url} over limit: ${e.size}`,"max-size"));return}r+=s.length,a.push(s)}}),t.on("end",function(){if(!n){clearTimeout(i);try{o(Buffer.concat(a,r))}catch(s){u(new q(`Could not create Buffer from response body for ${e.url}: ${s.message}`,"system",s))}}})})}function Qi(e,t){if(typeof Xa!="function")throw new Error("The package `encoding` must be installed to use the textConverted() function");let a=t.get("content-type"),r="utf-8",n,o;return a&&(n=/charset=([^;]*)/i.exec(a)),o=e.slice(0,1024).toString(),!n&&o&&(n=/<meta.+?charset=(['"])(.+?)\1/i.exec(o)),!n&&o&&(n=/<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(o),n||(n=/<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(o),n&&n.pop()),n&&(n=/charset=(.*)/i.exec(n.pop()))),!n&&o&&(n=/<\?xml.+?encoding=(['"])(.+?)\1/i.exec(o)),n&&(r=n.pop(),(r==="gb2312"||r==="gbk")&&(r="gb18030")),Xa(e,"UTF-8",r).toString()}function Wr(e){return typeof e!="object"||typeof e.append!="function"||typeof e.delete!="function"||typeof e.get!="function"||typeof e.getAll!="function"||typeof e.has!="function"||typeof e.set!="function"?!1:e.constructor.name==="URLSearchParams"||Object.prototype.toString.call(e)==="[object URLSearchParams]"||typeof e.sort=="function"}function Tt(e){return typeof e=="object"&&typeof e.arrayBuffer=="function"&&typeof e.type=="string"&&typeof e.stream=="function"&&typeof e.constructor=="function"&&typeof e.constructor.name=="string"&&/^(Blob|File)$/.test(e.constructor.name)&&/^(Blob|File)$/.test(e[Symbol.toStringTag])}function Kr(e){let t,a,r=e.body;if(e.bodyUsed)throw new Error("cannot clone body after it is used");return r instanceof ue&&typeof r.getBoundary!="function"&&(t=new zr,a=new zr,r.pipe(t),r.pipe(a),e[Ee].body=t,r=a),r}function Yr(e){return e===null?null:typeof e=="string"?"text/plain;charset=UTF-8":Wr(e)?"application/x-www-form-urlencoded;charset=UTF-8":Tt(e)?e.type||null:Buffer.isBuffer(e)||Object.prototype.toString.call(e)==="[object ArrayBuffer]"||ArrayBuffer.isView(e)?null:typeof e.getBoundary=="function"?`multipart/form-data;boundary=${e.getBoundary()}`:e instanceof ue?null:"text/plain;charset=UTF-8"}function Jr(e){let t=e.body;return t===null?0:Tt(t)?t.size:Buffer.isBuffer(t)?t.length:t&&typeof t.getLengthSync=="function"&&(t._lengthRetrievers&&t._lengthRetrievers.length==0||t.hasKnownLength&&t.hasKnownLength())?t.getLengthSync():null}function Wi(e,t){let a=t.body;a===null?e.end():Tt(a)?a.stream().pipe(e):Buffer.isBuffer(a)?(e.write(a),e.end()):a.pipe(e)}O.Promise=global.Promise;var Zr=/[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/,er=/[^\t\x20-\x7e\x80-\xff]/;function _t(e){if(e=`${e}`,Zr.test(e)||e==="")throw new TypeError(`${e} is not a legal HTTP header name`)}function Hr(e){if(e=`${e}`,er.test(e))throw new TypeError(`${e} is not a legal HTTP header value`)}function ot(e,t){t=t.toLowerCase();for(let a in e)if(a.toLowerCase()===t)return a}var v=Symbol("map"),te=class e{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:void 0;if(this[v]=Object.create(null),t instanceof e){let a=t.raw(),r=Object.keys(a);for(let n of r)for(let o of a[n])this.append(n,o);return}if(t!=null)if(typeof t=="object"){let a=t[Symbol.iterator];if(a!=null){if(typeof a!="function")throw new TypeError("Header pairs must be iterable");let r=[];for(let n of t){if(typeof n!="object"||typeof n[Symbol.iterator]!="function")throw new TypeError("Each header pair must be iterable");r.push(Array.from(n))}for(let n of r){if(n.length!==2)throw new TypeError("Each header pair must be a name/value tuple");this.append(n[0],n[1])}}else for(let r of Object.keys(t)){let n=t[r];this.append(r,n)}}else throw new TypeError("Provided initializer must be an object")}get(t){t=`${t}`,_t(t);let a=ot(this[v],t);return a===void 0?null:this[v][a].join(", ")}forEach(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:void 0,r=tr(this),n=0;for(;n<r.length;){var o=r[n];let u=o[0],i=o[1];t.call(a,i,u,this),r=tr(this),n++}}set(t,a){t=`${t}`,a=`${a}`,_t(t),Hr(a);let r=ot(this[v],t);this[v][r!==void 0?r:t]=[a]}append(t,a){t=`${t}`,a=`${a}`,_t(t),Hr(a);let r=ot(this[v],t);r!==void 0?this[v][r].push(a):this[v][t]=[a]}has(t){return t=`${t}`,_t(t),ot(this[v],t)!==void 0}delete(t){t=`${t}`,_t(t);let a=ot(this[v],t);a!==void 0&&delete this[v][a]}raw(){return this[v]}keys(){return Ya(this,"key")}values(){return Ya(this,"value")}[Symbol.iterator](){return Ya(this,"key+value")}};te.prototype.entries=te.prototype[Symbol.iterator];Object.defineProperty(te.prototype,Symbol.toStringTag,{value:"Headers",writable:!1,enumerable:!1,configurable:!0});Object.defineProperties(te.prototype,{get:{enumerable:!0},forEach:{enumerable:!0},set:{enumerable:!0},append:{enumerable:!0},has:{enumerable:!0},delete:{enumerable:!0},keys:{enumerable:!0},values:{enumerable:!0},entries:{enumerable:!0}});function tr(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"key+value";return Object.keys(e[v]).sort().map(t==="key"?function(r){return r.toLowerCase()}:t==="value"?function(r){return e[v][r].join(", ")}:function(r){return[r.toLowerCase(),e[v][r].join(", ")]})}var ar=Symbol("internal");function Ya(e,t){let a=Object.create(rr);return a[ar]={target:e,kind:t,index:0},a}var rr=Object.setPrototypeOf({next(){if(!this||Object.getPrototypeOf(this)!==rr)throw new TypeError("Value of `this` is not a HeadersIterator");var e=this[ar];let t=e.target,a=e.kind,r=e.index,n=tr(t,a),o=n.length;return r>=o?{value:void 0,done:!0}:(this[ar].index=r+1,{value:n[r],done:!1})}},Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));Object.defineProperty(rr,Symbol.toStringTag,{value:"HeadersIterator",writable:!1,enumerable:!1,configurable:!0});function Ki(e){let t=Object.assign({__proto__:null},e[v]),a=ot(e[v],"Host");return a!==void 0&&(t[a]=t[a][0]),t}function Yi(e){let t=new te;for(let a of Object.keys(e))if(!Zr.test(a))if(Array.isArray(e[a]))for(let r of e[a])er.test(r)||(t[v][a]===void 0?t[v][a]=[r]:t[v][a].push(r));else er.test(e[a])||(t[v][a]=[e[a]]);return t}var Te=Symbol("Response internals"),Ji=$r.STATUS_CODES,ee=class e{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};O.call(this,t,a);let r=a.status||200,n=new te(a.headers);if(t!=null&&!n.has("Content-Type")){let o=Yr(t);o&&n.append("Content-Type",o)}this[Te]={url:a.url,status:r,statusText:a.statusText||Ji[r],headers:n,counter:a.counter}}get url(){return this[Te].url||""}get status(){return this[Te].status}get ok(){return this[Te].status>=200&&this[Te].status<300}get redirected(){return this[Te].counter>0}get statusText(){return this[Te].statusText}get headers(){return this[Te].headers}clone(){return new e(Kr(this),{url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected})}};O.mixIn(ee.prototype);Object.defineProperties(ee.prototype,{url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}});Object.defineProperty(ee.prototype,Symbol.toStringTag,{value:"Response",writable:!1,enumerable:!1,configurable:!0});var Pe=Symbol("Request internals"),Zi=oa.URL||Qr.URL,Xi=oa.parse,es=oa.format;function Ja(e){return/^[a-zA-Z][a-zA-Z\d+\-.]*:/.exec(e)&&(e=new Zi(e).toString()),Xi(e)}var ts="destroy"in ue.Readable.prototype;function na(e){return typeof e=="object"&&typeof e[Pe]=="object"}function as(e){let t=e&&typeof e=="object"&&Object.getPrototypeOf(e);return!!(t&&t.constructor.name==="AbortSignal")}var Oe=class e{constructor(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r;na(t)?r=Ja(t.url):(t&&t.href?r=Ja(t.href):r=Ja(`${t}`),t={});let n=a.method||t.method||"GET";if(n=n.toUpperCase(),(a.body!=null||na(t)&&t.body!==null)&&(n==="GET"||n==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");let o=a.body!=null?a.body:na(t)&&t.body!==null?Kr(t):null;O.call(this,o,{timeout:a.timeout||t.timeout||0,size:a.size||t.size||0});let u=new te(a.headers||t.headers||{});if(o!=null&&!u.has("Content-Type")){let s=Yr(o);s&&u.append("Content-Type",s)}let i=na(t)?t.signal:null;if("signal"in a&&(i=a.signal),i!=null&&!as(i))throw new TypeError("Expected signal to be an instanceof AbortSignal");this[Pe]={method:n,redirect:a.redirect||t.redirect||"follow",headers:u,parsedURL:r,signal:i},this.follow=a.follow!==void 0?a.follow:t.follow!==void 0?t.follow:20,this.compress=a.compress!==void 0?a.compress:t.compress!==void 0?t.compress:!0,this.counter=a.counter||t.counter||0,this.agent=a.agent||t.agent}get method(){return this[Pe].method}get url(){return es(this[Pe].parsedURL)}get headers(){return this[Pe].headers}get redirect(){return this[Pe].redirect}get signal(){return this[Pe].signal}clone(){return new e(this)}};O.mixIn(Oe.prototype);Object.defineProperty(Oe.prototype,Symbol.toStringTag,{value:"Request",writable:!1,enumerable:!1,configurable:!0});Object.defineProperties(Oe.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0}});function rs(e){let t=e[Pe].parsedURL,a=new te(e[Pe].headers);if(a.has("Accept")||a.set("Accept","*/*"),!t.protocol||!t.hostname)throw new TypeError("Only absolute URLs are supported");if(!/^https?:$/.test(t.protocol))throw new TypeError("Only HTTP(S) protocols are supported");if(e.signal&&e.body instanceof ue.Readable&&!ts)throw new Error("Cancellation of streamed requests with AbortSignal is not supported in node < 8");let r=null;if(e.body==null&&/^(POST|PUT)$/i.test(e.method)&&(r="0"),e.body!=null){let o=Jr(e);typeof o=="number"&&(r=String(o))}r&&a.set("Content-Length",r),a.has("User-Agent")||a.set("User-Agent","node-fetch/1.0 (+https://github.com/bitinn/node-fetch)"),e.compress&&!a.has("Accept-Encoding")&&a.set("Accept-Encoding","gzip,deflate");let n=e.agent;return typeof n=="function"&&(n=n(t)),Object.assign({},t,{method:e.method,headers:Ki(a),agent:n})}function it(e){Error.call(this,e),this.type="aborted",this.message=e,Error.captureStackTrace(this,this.constructor)}it.prototype=Object.create(Error.prototype);it.prototype.constructor=it;it.prototype.name="AbortError";var vt=oa.URL||Qr.URL,Gr=ue.PassThrough,ns=function(t,a){let r=new vt(a).hostname,n=new vt(t).hostname;return r===n||r[r.length-n.length-1]==="."&&r.endsWith(n)},os=function(t,a){let r=new vt(a).protocol,n=new vt(t).protocol;return r===n};function we(e,t){if(!we.Promise)throw new Error("native promise missing, set fetch.Promise to your favorite alternative");return O.Promise=we.Promise,new we.Promise(function(a,r){let n=new Oe(e,t),o=rs(n),u=(o.protocol==="https:"?Gi:$r).request,i=n.signal,s=null,p=function(){let b=new it("The user aborted a request.");r(b),n.body&&n.body instanceof ue.Readable&&Za(n.body,b),!(!s||!s.body)&&s.body.emit("error",b)};if(i&&i.aborted){p();return}let c=function(){p(),g()},y=u(o),S;i&&i.addEventListener("abort",c);function g(){y.abort(),i&&i.removeEventListener("abort",c),clearTimeout(S)}n.timeout&&y.once("socket",function(l){S=setTimeout(function(){r(new q(`network timeout at: ${n.url}`,"request-timeout")),g()},n.timeout)}),y.on("error",function(l){r(new q(`request to ${n.url} failed, reason: ${l.message}`,"system",l)),s&&s.body&&Za(s.body,l),g()}),is(y,function(l){i&&i.aborted||s&&s.body&&Za(s.body,l)}),parseInt(process.version.substring(1))<14&&y.on("socket",function(l){l.addListener("close",function(b){let d=l.listenerCount("data")>0;if(s&&d&&!b&&!(i&&i.aborted)){let I=new Error("Premature close");I.code="ERR_STREAM_PREMATURE_CLOSE",s.body.emit("error",I)}})}),y.on("response",function(l){clearTimeout(S);let b=Yi(l.headers);if(we.isRedirect(l.statusCode)){let m=b.get("Location"),P=null;try{P=m===null?null:new vt(m,n.url).toString()}catch{if(n.redirect!=="manual"){r(new q(`uri requested responds with an invalid redirect URL: ${m}`,"invalid-redirect")),g();return}}switch(n.redirect){case"error":r(new q(`uri requested responds with a redirect, redirect mode is set to error: ${n.url}`,"no-redirect")),g();return;case"manual":if(P!==null)try{b.set("Location",P)}catch(_){r(_)}break;case"follow":if(P===null)break;if(n.counter>=n.follow){r(new q(`maximum redirect reached at: ${n.url}`,"max-redirect")),g();return}let A={headers:new te(n.headers),follow:n.follow,counter:n.counter+1,agent:n.agent,compress:n.compress,method:n.method,body:n.body,signal:n.signal,timeout:n.timeout,size:n.size};if(!ns(n.url,P)||!os(n.url,P))for(let _ of["authorization","www-authenticate","cookie","cookie2"])A.headers.delete(_);if(l.statusCode!==303&&n.body&&Jr(n)===null){r(new q("Cannot follow redirect with body being a readable stream","unsupported-redirect")),g();return}(l.statusCode===303||(l.statusCode===301||l.statusCode===302)&&n.method==="POST")&&(A.method="GET",A.body=void 0,A.headers.delete("content-length")),a(we(new Oe(P,A))),g();return}}l.once("end",function(){i&&i.removeEventListener("abort",c)});let d=l.pipe(new Gr),I={url:n.url,status:l.statusCode,statusText:l.statusMessage,headers:b,size:n.size,timeout:n.timeout,counter:n.counter},R=b.get("Content-Encoding");if(!n.compress||n.method==="HEAD"||R===null||l.statusCode===204||l.statusCode===304){s=new ee(d,I),a(s);return}let f={flush:je.Z_SYNC_FLUSH,finishFlush:je.Z_SYNC_FLUSH};if(R=="gzip"||R=="x-gzip"){d=d.pipe(je.createGunzip(f)),s=new ee(d,I),a(s);return}if(R=="deflate"||R=="x-deflate"){let m=l.pipe(new Gr);m.once("data",function(P){(P[0]&15)===8?d=d.pipe(je.createInflate()):d=d.pipe(je.createInflateRaw()),s=new ee(d,I),a(s)}),m.on("end",function(){s||(s=new ee(d,I),a(s))});return}if(R=="br"&&typeof je.createBrotliDecompress=="function"){d=d.pipe(je.createBrotliDecompress()),s=new ee(d,I),a(s);return}s=new ee(d,I),a(s)}),Wi(y,n)})}function is(e,t){let a;e.on("socket",function(r){a=r}),e.on("response",function(r){let n=r.headers;n["transfer-encoding"]==="chunked"&&!n["content-length"]&&r.once("close",function(o){if(a&&a.listenerCount("data")>0&&!o){let i=new Error("Premature close");i.code="ERR_STREAM_PREMATURE_CLOSE",t(i)}})})}function Za(e,t){e.destroy?e.destroy(t):(e.emit("error",t),e.end())}we.isRedirect=function(e){return e===301||e===302||e===303||e===307||e===308};we.Promise=global.Promise;Xr.exports=pe=we;Object.defineProperty(pe,"__esModule",{value:!0});pe.default=pe;pe.Headers=te;pe.Request=Oe;pe.Response=ee;pe.FetchError=q;pe.AbortError=it});var Ot=C((ze,tn)=>{var wt=en(),ss=wt.default||wt,ia=function(e,t){return/^\/\//.test(e)&&(e="https:"+e),ss.call(this,e,t)};ia.ponyfill=!0;tn.exports=ze=ia;ze.fetch=ia;ze.Headers=wt.Headers;ze.Request=wt.Request;ze.Response=wt.Response;ze.default=ia});var nr=C(sa=>{"use strict";Object.defineProperty(sa,"__esModule",{value:!0});sa.isJSON=void 0;function us(e){if(e){let t=ls(e);if(!t)return!1;if(t.subtype==="json"||t.suffix==="json"||t.suffix&&/\bjson\b/i.test(t.suffix)||t.subtype&&/\bjson\b/i.test(t.subtype))return!0}return!1}sa.isJSON=us;var ps=/^([A-Za-z0-9][A-Za-z0-9!#$&^_-]{0,126})\/([A-Za-z0-9][A-Za-z0-9!#$&^_.+-]{0,126});?$/;function ls(e){let t=e.indexOf(";"),a=t!==-1?e.slice(0,t).trim():e.trim(),r=ps.exec(a.toLowerCase().toLowerCase());if(!r)return;let n=r[1],o=r[2],u,i=o.lastIndexOf("+");return i!==-1&&(u=o.substring(i+1),o=o.substring(0,i)),{type:n,subtype:o,suffix:u}}});var on=C(ua=>{"use strict";Object.defineProperty(ua,"__esModule",{value:!0});ua.useFetch=void 0;var ut=require("react"),cs=xt(),an=Ae(),rn=Ot(),ys=nr(),nn=ve();async function ds(e){if(!e.ok)throw new Error(e.statusText);let t=e.headers.get("content-type");return t&&(0,ys.isJSON)(t)?await e.json():await e.text()}function Ss(e){return{data:e,hasMore:!1}}function bs(e,t){let{parseResponse:a,mapResult:r,initialData:n,execute:o,keepPreviousData:u,onError:i,onData:s,onWillExecute:p,failureToastOptions:c,...y}=t||{},S={initialData:n,execute:o,keepPreviousData:u,onError:i,onData:s,onWillExecute:p,failureToastOptions:c},g=(0,an.useLatest)(a||ds),l=(0,an.useLatest)(r||Ss),b=(0,ut.useRef)(),d=(0,ut.useRef)(),I=typeof e=="function"?e({page:0}):void 0;(!b.current||typeof d.current>"u"||d.current!==I)&&(b.current=e),d.current=I;let R=(0,ut.useRef)(),f=(0,ut.useCallback)((A,_)=>async N=>{let ie=await(0,rn.fetch)(A(N),{signal:R.current?.signal,..._}),k=await g.current(ie);return l.current?.(k)},[g,l]),m=(0,ut.useCallback)(async(A,_)=>{let N=await(0,rn.fetch)(A,{signal:R.current?.signal,..._}),ie=await g.current(N);return l.current(ie)?.data},[g,l]),P=(0,ut.useMemo)(()=>d.current?f:m,[d,m,f]);return(0,cs.useCachedPromise)(P,[b.current,y],{...S,internal_cacheKeySuffix:d.current+(0,nn.hash)(l.current)+(0,nn.hash)(g.current),abortable:R})}ua.useFetch=bs});var pa=C(ae=>{"use strict";var Is=ae&&ae.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ae,"__esModule",{value:!0});ae.defaultParsing=ae.handleOutput=ae.getSpawnedResult=ae.getSpawnedPromise=void 0;var gs=require("node:buffer"),pn=Is(require("node:stream")),Ms=require("node:util"),ms=require("signal-exit");function Rs(e,{timeout:t}={}){let a=new Promise((i,s)=>{e.on("exit",(p,c)=>{i({exitCode:p,signal:c,timedOut:!1})}),e.on("error",p=>{s(p)}),e.stdin&&e.stdin.on("error",p=>{s(p)})});if(t===0||t===void 0)return a;let r,n=new Promise((i,s)=>{r=setTimeout(()=>{e.kill("SIGTERM"),s(Object.assign(new Error("Timed out"),{timedOut:!0,signal:"SIGTERM"}))},t)}),o=a.finally(()=>{clearTimeout(r)}),u=(0,ms.onExit)(()=>{e.kill()});return Promise.race([n,o]).finally(()=>u())}ae.getSpawnedPromise=Rs;var or=class extends Error{constructor(){super("The output is too big"),this.name="MaxBufferError"}},As=(0,Ms.promisify)(pn.default.pipeline);function fs(e){let{encoding:t}=e,a=t==="buffer",r=new pn.default.PassThrough({objectMode:!1});t&&t!=="buffer"&&r.setEncoding(t);let n=0,o=[];return r.on("data",u=>{o.push(u),n+=u.length}),r.getBufferedValue=()=>a?Buffer.concat(o,n):o.join(""),r.getBufferedLength=()=>n,r}async function sn(e,t){let a=fs(t);return await new Promise((r,n)=>{let o=u=>{u&&a.getBufferedLength()<=gs.constants.MAX_LENGTH&&(u.bufferedData=a.getBufferedValue()),n(u)};(async()=>{try{await As(e,a),r()}catch(u){o(u)}})(),a.on("data",()=>{a.getBufferedLength()>1e3*1e3*80&&o(new or)})}),a.getBufferedValue()}async function un(e,t){e.destroy();try{return await t}catch(a){return a.bufferedData}}async function Ps({stdout:e,stderr:t},{encoding:a},r){let n=sn(e,{encoding:a}),o=sn(t,{encoding:a});try{return await Promise.all([r,n,o])}catch(u){return Promise.all([{error:u,exitCode:null,signal:u.signal,timedOut:u.timedOut||!1},un(e,n),un(t,o)])}}ae.getSpawnedResult=Ps;function Es(e){let t=typeof e=="string"?`
`:10,a=typeof e=="string"?"\r":13;return e[e.length-1]===t&&(e=e.slice(0,-1)),e[e.length-1]===a&&(e=e.slice(0,-1)),e}function Cs(e,t){return e.stripFinalNewline?Es(t):t}ae.handleOutput=Cs;var hs=({timedOut:e,timeout:t,signal:a,exitCode:r})=>e?`timed out after ${t} milliseconds`:a!=null?`was killed with ${a}`:r!=null?`failed with exit code ${r}`:"failed",Ds=({stdout:e,stderr:t,error:a,signal:r,exitCode:n,command:o,timedOut:u,options:i,parentError:s})=>{let c=`Command ${hs({timedOut:u,timeout:i?.timeout,signal:r,exitCode:n})}: ${o}`,y=a?`${c}
${a.message}`:c,S=[y,t,e].filter(Boolean).join(`
`);return a?a.originalMessage=a.message:a=s,a.message=S,a.shortMessage=y,a.command=o,a.exitCode=n,a.signal=r,a.stdout=e,a.stderr=t,"bufferedData"in a&&delete a.bufferedData,a};function xs({stdout:e,stderr:t,error:a,exitCode:r,signal:n,timedOut:o,command:u,options:i,parentError:s}){if(a||r!==0||n!==null)throw Ds({error:a,exitCode:r,signal:n,stdout:e,stderr:t,command:u,timedOut:o,options:i,parentError:s});return e}ae.defaultParsing=xs});var cn=C(pt=>{"use strict";var _s=pt&&pt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(pt,"__esModule",{value:!0});pt.useExec=void 0;var Us=_s(require("node:child_process")),ln=require("react"),vs=xt(),Ts=Ae(),Bt=pa(),ws=/ +/g;function Os(e,t){if(t)return[e,...t];let a=[];for(let r of e.trim().split(ws)){let n=a[a.length-1];n&&n.endsWith("\\")?a[a.length-1]=`${n.slice(0,-1)} ${r}`:a.push(r)}return a}function Bs(e,t,a){let{parseOutput:r,input:n,onData:o,onWillExecute:u,initialData:i,execute:s,keepPreviousData:p,onError:c,failureToastOptions:y,...S}=Array.isArray(t)?a||{}:t||{},g={initialData:i,execute:s,keepPreviousData:p,onError:c,onData:o,onWillExecute:u,failureToastOptions:y},l=(0,ln.useRef)(),b=(0,Ts.useLatest)(r||Bt.defaultParsing),d=(0,ln.useCallback)(async(I,R,f,m)=>{let[P,...A]=Os(I,R),_=[P,...A].join(" "),N={stripFinalNewline:!0,...f,timeout:f?.timeout||1e4,signal:l.current?.signal,encoding:f?.encoding===null?"buffer":f?.encoding||"utf8",env:{PATH:"/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin",...process.env,...f?.env}},ie=Us.default.spawn(P,A,N),k=(0,Bt.getSpawnedPromise)(ie,N);m&&ie.stdin.end(m);let[{error:T,exitCode:se,signal:ce,timedOut:h},W,Et]=await(0,Bt.getSpawnedResult)(ie,N,k),Ha=(0,Bt.handleOutput)(N,W),di=(0,Bt.handleOutput)(N,Et);return b.current({stdout:Ha,stderr:di,error:T,exitCode:se,signal:ce,timedOut:h,command:_,options:N,parentError:new Error})},[b]);return(0,vs.useCachedPromise)(d,[e,Array.isArray(t)?t:[],S,n],{...g,abortable:l})}pt.useExec=Bs});var bn=C(lt=>{"use strict";var ca=lt&&lt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(lt,"__esModule",{value:!0});lt.useStreamJSON=void 0;var Ls=require("@raycast/api"),yn=ca(Ot()),Nt=require("node:fs"),ir=require("node:fs/promises"),la=require("node:path"),dn=require("node:stream/promises"),Lt=require("react"),qs=ca(require("stream-chain")),Ns=require("stream-json"),Vs=ca(require("stream-json/filters/Pick")),ks=ca(require("stream-json/streamers/StreamArray")),Sn=nr(),Fs=xt(),js=ve();async function qt(e,t,a){if(typeof e=="object"||e.startsWith("http://")||e.startsWith("https://"))return await zs(e,t,a);if(e.startsWith("file://"))return await Hs((0,la.normalize)(decodeURIComponent(new URL(e).pathname)),t,a?.signal?a.signal:void 0);throw new Error("Only HTTP(S) or file URLs are supported")}async function zs(e,t,a){let r=await(0,yn.default)(e,a);if(!r.ok)throw new Error("Failed to fetch URL");if(!(0,Sn.isJSON)(r.headers.get("content-type")))throw new Error("URL does not return JSON");if(!r.body)throw new Error("Failed to retrieve expected JSON content: Response body is missing or inaccessible.");await(0,dn.pipeline)(r.body,(0,Nt.createWriteStream)(t),a?.signal?{signal:a.signal}:void 0)}async function Hs(e,t,a){await(0,dn.pipeline)((0,Nt.createReadStream)(e),(0,Nt.createWriteStream)(t),a?{signal:a}:void 0)}async function Gs(e,t,a,r,n){let o=(0,la.join)(t,a);try{await(0,ir.stat)(t)}catch{(0,Nt.mkdirSync)(t,{recursive:!0}),await qt(e,o,n);return}if(r){await qt(e,o,n);return}let u;try{u=await(0,ir.stat)(o)}catch{await qt(e,o,n);return}if(typeof e=="object"||e.startsWith("http://")||e.startsWith("https://")){let i=await(0,yn.default)(e,{...n,method:"HEAD"});if(!i.ok)throw new Error("Could not fetch URL");if(!(0,Sn.isJSON)(i.headers.get("content-type")))throw new Error("URL does not return JSON");let s=Date.parse(i.headers.get("last-modified")??"");if(u.size===0||Number.isNaN(s)||s>u.mtimeMs){await qt(e,o,n);return}}else if(e.startsWith("file://"))try{(await(0,ir.stat)((0,la.normalize)(decodeURIComponent(new URL(e).pathname)))).mtimeMs>u.mtimeMs&&await qt(e,o,n)}catch{throw new Error("Source file could not be read")}else throw new Error("Only HTTP(S) or file URLs are supported")}async function*$s(e,t,a,r,n,o){let u=[],i=new qs.default([(0,Nt.createReadStream)(e),r?Vs.default.withParser({filter:r}):(0,Ns.parser)(),new ks.default,s=>o?.(s.value)??s.value]);a?.addEventListener("abort",()=>{i.destroy()});try{for await(let s of i){if(a?.aborted)return[];(!n||n(s))&&u.push(s),u.length>=t&&(yield u,u=[])}}catch(s){throw i.destroy(),s}return u.length>0&&(yield u),[]}function Qs(e,t){let{initialData:a,execute:r,keepPreviousData:n,onError:o,onData:u,onWillExecute:i,failureToastOptions:s,dataPath:p,filter:c,transform:y,pageSize:S=20,...g}=t??{},l=(0,Lt.useRef)(),b=(0,Lt.useRef)(),d={initialData:a,execute:r,keepPreviousData:n,onError:o,onData:u,onWillExecute:i,failureToastOptions:s},I=(0,Lt.useRef)(null),R=(0,Lt.useRef)(null),f=(0,Lt.useRef)(!1);return(0,Fs.useCachedPromise)((m,P,A,_,N,ie)=>async({page:k})=>{let T=(0,js.hash)(m)+".json",se=Ls.environment.supportPath;if(k===0){R.current?.abort(),R.current=new AbortController;let W=(0,la.join)(se,T),Et=!!(l.current&&l.current!==m&&b.current&&b.current===W);l.current=m,b.current=W,await Gs(m,se,T,Et,{...A,signal:R.current?.signal}),I.current=$s(W,P,R.current?.signal,_,N,ie)}if(!I.current)return{hasMore:f.current,data:[]};let{value:ce,done:h}=await I.current.next();return f.current=!h,{hasMore:f.current,data:ce??[]}},[e,S,g,p,c,y],d)}lt.useStreamJSON=Qs});var ur=C(Se=>{"use strict";var sr=Se&&Se.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Se,"__esModule",{value:!0});Se.baseExecuteSQL=Se.isPermissionError=Se.PermissionError=void 0;var Ws=require("node:fs"),ya=require("node:fs/promises"),Ks=sr(require("node:os")),In=sr(require("node:child_process")),gn=sr(require("node:path")),da=pa(),Ys=ve(),ba=class extends Error{constructor(t){super(t),this.name="PermissionError"}};Se.PermissionError=ba;function Js(e){return e instanceof Error&&e.name==="PermissionError"}Se.isPermissionError=Js;async function Zs(e,t,a){if(!(0,Ws.existsSync)(e))throw new Error("The database does not exist");let r=a?.signal,n,o=In.default.spawn("sqlite3",["--json","--readonly",e,t],{signal:r}),u=(0,da.getSpawnedPromise)(o),[{error:i,exitCode:s,signal:p},c,y]=await(0,da.getSpawnedResult)(o,{encoding:"utf-8"},u);if(Sa(r),y.match("(5)")||y.match("(14)")){if(!n){let S=gn.default.join(Ks.default.tmpdir(),"useSQL",(0,Ys.hash)(e));await(0,ya.mkdir)(S,{recursive:!0}),Sa(r),n=gn.default.join(S,"db.db"),await(0,ya.copyFile)(e,n),await(0,ya.writeFile)(n+"-shm",""),await(0,ya.writeFile)(n+"-wal",""),Sa(r)}o=In.default.spawn("sqlite3",["--json","--readonly","--vfs","unix-none",n,t],{signal:r}),u=(0,da.getSpawnedPromise)(o),[{error:i,exitCode:s,signal:p},c,y]=await(0,da.getSpawnedResult)(o,{encoding:"utf-8"},u),Sa(r)}if(i||s!==0||p!==null)throw y.includes("authorization denied")?new ba("You do not have permission to access the database."):new Error(y||"Unknown error");return JSON.parse(c.trim()||"[]")}Se.baseExecuteSQL=Zs;function Sa(e){if(e?.aborted){let t=new Error("aborted");throw t.name="AbortError",t}}});var mn=C(ct=>{"use strict";var Xs=ct&&ct.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ct,"__esModule",{value:!0});ct.useSQL=void 0;var be=require("react/jsx-runtime"),F=require("@raycast/api"),eu=require("node:fs"),tu=Xs(require("node:os")),Ia=require("react"),au=at(),ru=Ae(),nu=Ct(),pr=ur();function ou(e,t,a){let{permissionPriming:r,...n}=a||{},[o,u]=(0,Ia.useState)(),i=(0,ru.useLatest)(a||{}),s=(0,Ia.useRef)(),p=(0,Ia.useCallback)(y=>{console.error(y);let S=y instanceof Error&&y.message.includes("authorization denied")?new pr.PermissionError("You do not have permission to access the database."):y;(0,pr.isPermissionError)(S)?u((0,be.jsx)(iu,{priming:i.current.permissionPriming})):i.current.onError?i.current.onError(S):F.environment.launchType!==F.LaunchType.Background&&(0,nu.showFailureToast)(S,{title:"Cannot query the data"})},[i]),c=(0,Ia.useMemo)(()=>{if(!(0,eu.existsSync)(e))throw new Error("The database does not exist");return async(y,S)=>{let g=s.current?.signal;return(0,pr.baseExecuteSQL)(y,S,{signal:g})}},[e]);return{...(0,au.usePromise)(c,[e,t],{...n,onError:p}),permissionView:o}}ct.useSQL=ou;var Mn=parseInt(tu.default.release().split(".")[0])>=22,lr=Mn?"Settings":"Preferences";function iu(e){let t=Mn?{title:"Open System Settings -> Privacy",target:"x-apple.systempreferences:com.apple.preference.security?Privacy_AllFiles"}:{title:"Open System Preferences -> Security",target:"x-apple.systempreferences:com.apple.preference.security?Privacy_AllFiles"};return F.environment.commandMode==="menu-bar"?(0,be.jsxs)(F.MenuBarExtra,{icon:F.Icon.Warning,title:F.environment.commandName,children:[(0,be.jsx)(F.MenuBarExtra.Item,{title:"Raycast needs full disk access",tooltip:`You can revert this access in ${lr} whenever you want`}),e.priming?(0,be.jsx)(F.MenuBarExtra.Item,{title:e.priming,tooltip:`You can revert this access in ${lr} whenever you want`}):null,(0,be.jsx)(F.MenuBarExtra.Separator,{}),(0,be.jsx)(F.MenuBarExtra.Item,{title:t.title,onAction:()=>(0,F.open)(t.target)})]}):(0,be.jsx)(F.List,{children:(0,be.jsx)(F.List.EmptyView,{icon:{source:{light:"https://raycast.com/uploads/extensions-utils-security-permissions-light.png",dark:"https://raycast.com/uploads/extensions-utils-security-permissions-dark.png"}},title:"Raycast needs full disk access.",description:`${e.priming?e.priming+`
`:""}You can revert this access in ${lr} whenever you want.`,actions:(0,be.jsx)(F.ActionPanel,{children:(0,be.jsx)(F.Action.Open,{...t})})})})}});var An=C(yt=>{"use strict";Object.defineProperty(yt,"__esModule",{value:!0});yt.useForm=yt.FormValidation=void 0;var Ce=require("react"),Rn=Ae(),yr;(function(e){e.Required="required"})(yr||(yt.FormValidation=yr={}));function cr(e,t){if(e){if(typeof e=="function")return e(t);if(e===yr.Required){let a=typeof t<"u"&&t!==null;if(a)switch(typeof t){case"string":a=t.length>0;break;case"object":Array.isArray(t)?a=t.length>0:t instanceof Date&&(a=t.getTime()>0);break;default:break}if(!a)return"The item is required"}}}function su(e){let{onSubmit:t,validation:a,initialValues:r={}}=e,[n,o]=(0,Ce.useState)(r),[u,i]=(0,Ce.useState)({}),s=(0,Ce.useRef)({}),p=(0,Rn.useLatest)(a||{}),c=(0,Rn.useLatest)(t),y=(0,Ce.useCallback)(I=>{s.current[I]?.focus()},[s]),S=(0,Ce.useCallback)(async I=>{let R=!1;for(let[m,P]of Object.entries(p.current)){let A=cr(P,I[m]);A&&(R||(R={},y(m)),R[m]=A)}if(R)return i(R),!1;let f=await c.current(I);return typeof f=="boolean"?f:!0},[p,c,y]),g=(0,Ce.useCallback)((I,R)=>{i(f=>({...f,[I]:R}))},[i]),l=(0,Ce.useCallback)(function(I,R){o(f=>({...f,[I]:typeof R=="function"?R(f[I]):R}))},[o]),b=(0,Ce.useMemo)(()=>new Proxy({},{get(I,R){let f=p.current[R],m=n[R];return{onChange(P){u[R]&&(cr(f,P)||g(R,void 0)),l(R,P)},onBlur(P){let A=cr(f,P.target.value);A&&g(R,A)},error:u[R],id:R,value:typeof m>"u"?null:m,ref:P=>{s.current[R]=P}}}}),[u,p,g,n,s,l]),d=(0,Ce.useCallback)(I=>{i({}),Object.entries(s.current).forEach(([R,f])=>{I?.[R]||f?.reset()}),I&&o(I)},[o,i,s]);return{handleSubmit:S,setValidationError:g,setValue:l,values:n,itemProps:b,focus:y,reset:d}}yt.useForm=su});var Pn=C(ga=>{"use strict";Object.defineProperty(ga,"__esModule",{value:!0});ga.useAI=void 0;var fn=require("react"),uu=require("@raycast/api"),pu=at();function lu(e,t={}){let{creativity:a,stream:r,model:n,...o}=t,[u,i]=(0,fn.useState)(""),s=(0,fn.useRef)(),{isLoading:p,error:c,revalidate:y}=(0,pu.usePromise)(async(S,g,l)=>{i("");let b=uu.AI.ask(S,{creativity:g,model:n,signal:s.current?.signal});l===!1?i(await b):(b.on("data",d=>{i(I=>I+d)}),await b)},[e,a,r],{...o,abortable:s});return{isLoading:p,data:u,error:c,revalidate:y}}ga.useAI=lu});var hn=C(Ma=>{"use strict";Object.defineProperty(Ma,"__esModule",{value:!0});Ma.useFrecencySorting=void 0;var dr=require("react"),En=Ae(),cu=aa(),yu=10,Cn=1440*60*1e3,du=Math.log(2)/(yu*Cn),Su={Default:100,Embed:0,Bookmark:140};function bu(e){let t=Date.now(),a=e?e.lastVisited:0,r=e?e.frecency:0,n=(t-a)/Cn,o=Su.Default*Math.exp(-du*n),u=r+o;return{lastVisited:t,frecency:u}}var Iu=e=>{if(process.env.NODE_ENV!=="production"&&(typeof e!="object"||!e||!("id"in e)||typeof e.id!="string"))throw new Error("Specify a key function or make sure your items have an 'id' property");return e.id};function gu(e,t){let a=(0,En.useLatest)(t?.key||Iu),r=(0,En.useLatest)(t?.sortUnvisited),[n,o]=(0,cu.useCachedState)(`raycast_frecency_${t?.namespace}`,{}),u=(0,dr.useCallback)(async function(c){let y=a.current(c);o(S=>{let g=S[y],l=bu(g);return{...S,[y]:l}})},[a,o]),i=(0,dr.useCallback)(async function(c){let y=a.current(c);o(S=>{let g={...S};return delete g[y],g})},[a,o]);return{data:(0,dr.useMemo)(()=>e?e.sort((p,c)=>{let y=n[a.current(p)],S=n[a.current(c)];return y&&!S?-1:!y&&S?1:y&&S?S.frecency-y.frecency:r.current?r.current(p,c):0}):[],[n,e,a,r]),visitItem:u,resetRanking:i}}Ma.useFrecencySorting=gu});var _n=C(ma=>{"use strict";Object.defineProperty(ma,"__esModule",{value:!0});ma.useLocalStorage=void 0;var Sr=require("@raycast/api"),Dn=Ct(),xn=ve(),Mu=at();function mu(e,t){let{data:a,isLoading:r,mutate:n}=(0,Mu.usePromise)(async i=>{let s=await Sr.LocalStorage.getItem(i);return typeof s<"u"?JSON.parse(s,xn.reviver):t},[e]);async function o(i){try{await n(Sr.LocalStorage.setItem(e,JSON.stringify(i,xn.replacer)),{optimisticUpdate(s){return s}})}catch(s){await(0,Dn.showFailureToast)(s,{title:"Failed to set value in local storage"})}}async function u(){try{await n(Sr.LocalStorage.removeItem(e),{optimisticUpdate(){}})}catch(i){await(0,Dn.showFailureToast)(i,{title:"Failed to remove value from local storage"})}}return{value:a,setValue:o,removeValue:u,isLoading:r}}ma.useLocalStorage=mu});var On=C(dt=>{"use strict";Object.defineProperty(dt,"__esModule",{value:!0});dt.slightlyLighterColor=dt.slightlyDarkerColor=void 0;function Ru(e){let t=0,a=0,r=0;if(e.length===4)t=parseInt(`${e[1]}${e[1]}`,16),a=parseInt(`${e[2]}${e[2]}`,16),r=parseInt(`${e[3]}${e[3]}`,16);else if(e.length===7)t=parseInt(`${e[1]}${e[2]}`,16),a=parseInt(`${e[3]}${e[4]}`,16),r=parseInt(`${e[5]}${e[6]}`,16);else throw new Error(`Malformed hex color: ${e}`);return{r:t,g:a,b:r}}function Au({r:e,g:t,b:a}){let r=e.toString(16),n=t.toString(16),o=a.toString(16);return r.length===1&&(r=`0${r}`),n.length===1&&(n=`0${n}`),o.length===1&&(o=`0${o}`),`#${r}${n}${o}`}function fu({r:e,g:t,b:a}){e/=255,t/=255,a/=255;let r=Math.min(e,t,a),n=Math.max(e,t,a),o=n-r,u=0,i=0,s=0;return o===0?u=0:n===e?u=(t-a)/o%6:n===t?u=(a-e)/o+2:u=(e-t)/o+4,u=Math.round(u*60),u<0&&(u+=360),s=(n+r)/2,i=o===0?0:o/(1-Math.abs(2*s-1)),i=+(i*100).toFixed(1),s=+(s*100).toFixed(1),{h:u,s:i,l:s}}function Pu({h:e,s:t,l:a}){t/=100,a/=100;let r=(1-Math.abs(2*a-1))*t,n=r*(1-Math.abs(e/60%2-1)),o=a-r/2,u=0,i=0,s=0;return e>=0&&e<60?(u=r,i=n,s=0):e>=60&&e<120?(u=n,i=r,s=0):e>=120&&e<180?(u=0,i=r,s=n):e>=180&&e<240?(u=0,i=n,s=r):e>=240&&e<300?(u=n,i=0,s=r):e>=300&&e<360&&(u=r,i=0,s=n),u=Math.round((u+o)*255),i=Math.round((i+o)*255),s=Math.round((s+o)*255),{r:u,g:i,b:s}}function Un(e){return fu(Ru(e))}function vn(e){return Au(Pu(e))}function Tn(e,t,a){return t<a?e<t?t:e>a?a:e:e<a?a:e>t?t:e}var wn=12;function Eu(e){let t=Un(e);return vn({h:t.h,s:t.s,l:Tn(t.l-wn,0,100)})}dt.slightlyDarkerColor=Eu;function Cu(e){let t=Un(e);return vn({h:t.h,s:t.s,l:Tn(t.l+wn,0,100)})}dt.slightlyLighterColor=Cu});var qn=C(Ra=>{"use strict";Object.defineProperty(Ra,"__esModule",{value:!0});Ra.getAvatarIcon=void 0;var Bn=On();function St(e,t){let a=e.charCodeAt(t);if(Number.isNaN(a))return["",t];if(a<55296||a>57343)return[e.charAt(t),t];if(55296<=a&&a<=56319){if(e.length<=t+1)throw new Error("High surrogate without following low surrogate");let n=e.charCodeAt(t+1);if(56320>n||n>57343)throw new Error("High surrogate without following low surrogate");return[e.charAt(t)+e.charAt(t+1),t+1]}if(t===0)throw new Error("Low surrogate without preceding high surrogate");let r=e.charCodeAt(t-1);if(55296>r||r>56319)throw new Error("Low surrogate without preceding high surrogate");return[e.charAt(t+1),t+1]}var Ln=["#DC829A","#D64854","#D47600","#D36CDD","#52A9E4","#7871E8","#70920F","#43B93A","#EB6B3E","#26B795","#D85A9B","#A067DC","#BD9500","#5385D9"];function hu(e,t){let a=e.trim().split(" "),r;if(a.length==1&&St(a[0],0)[0])r=St(a[0],0)[0];else if(a.length>1){let s=St(a[0],0)[0]||"",p=St(a[a.length-1],0)[0]??"";r=s+p}else r="";let n;if(t?.background)n=t?.background;else{let s=0,[p,c]=St(r,0);for(;p;)s+=p.charCodeAt(0),[p,c]=St(r,c+1);let y=s%Ln.length;n=Ln[y]}let u=50-0;return`data:image/svg+xml,${`<svg width="100px" height="100px">
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
`,"")}`}Ra.getAvatarIcon=hu});var Vn=C(Aa=>{"use strict";Object.defineProperty(Aa,"__esModule",{value:!0});Aa.getFavicon=void 0;var Nn=require("@raycast/api"),Du=require("url");function xu(e,t){try{let r=(typeof e=="string"?new Du.URL(e):e).hostname;return{source:`https://www.google.com/s2/favicons?sz=${t?.size??64}&domain=${r}`,fallback:t?.fallback??Nn.Icon.Link,mask:t?.mask}}catch(a){return console.error(a),Nn.Icon.Link}}Aa.getFavicon=xu});var jn=C(fa=>{"use strict";Object.defineProperty(fa,"__esModule",{value:!0});fa.getProgressIcon=void 0;var kn=require("@raycast/api");function Fn(e,t,a,r){let n=(r-90)*Math.PI/180;return{x:e+a*Math.cos(n),y:t+a*Math.sin(n)}}function _u(e,t,a,r,n){let o=Fn(e,t,a,n),u=Fn(e,t,a,r),i=n-r<=180?"0":"1";return["M",o.x,o.y,"A",a,a,0,i,0,u.x,u.y].join(" ")}function Uu(e,t=kn.Color.Red,a){let r=a?.background||(kn.environment.appearance==="light"?"black":"white"),n=a?.backgroundOpacity||.1,o=10,i=50-5-o/2;return`data:image/svg+xml,${`<svg width="100px" height="100px">
      <circle cx="50" cy="50" r="${i}" stroke-width="${o}" stroke="${e<1?r:t}" opacity="${e<1?n:"1"}" fill="none" />
      ${e>0&&e<1?`<path d="${_u(50,50,i,0,e*360)}" stroke="${t}" stroke-width="${o}" fill="none" />`:""}
    </svg>
  `.replaceAll(`
`,"")}`}fa.getProgressIcon=Uu});var zn=C(he=>{"use strict";var vu=he&&he.__createBinding||(Object.create?(function(e,t,a,r){r===void 0&&(r=a);var n=Object.getOwnPropertyDescriptor(t,a);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,n)}):(function(e,t,a,r){r===void 0&&(r=a),e[r]=t[a]})),br=he&&he.__exportStar||function(e,t){for(var a in e)a!=="default"&&!Object.prototype.hasOwnProperty.call(t,a)&&vu(t,e,a)};Object.defineProperty(he,"__esModule",{value:!0});br(qn(),he);br(Vn(),he);br(jn(),he)});var Hn=C(V=>{"use strict";Object.defineProperty(V,"__esModule",{value:!0});V.zoomService=V.slackService=V.linearService=V.jiraService=V.googleService=V.githubService=V.asanaService=void 0;var j=require("@raycast/api"),He=Ir(),Pa={asana:"1191201745684312",github:"7235fe8d42157f1f38c0",linear:"c8ff37b9225c3c9aefd7d66ea0e5b6f1",slack:"851756884692.5546927290212"},Be=e=>`data:image/svg+xml,${e}`,Ge={asana:Be('<svg xmlns="http://www.w3.org/2000/svg" width="251" height="232" fill="none"><path fill="#F06A6A" d="M179.383 54.373c0 30.017-24.337 54.374-54.354 54.374-30.035 0-54.373-24.338-54.373-54.374C70.656 24.338 94.993 0 125.029 0c30.017 0 54.354 24.338 54.354 54.373ZM54.393 122.33C24.376 122.33.02 146.668.02 176.685c0 30.017 24.337 54.373 54.373 54.373 30.035 0 54.373-24.338 54.373-54.373 0-30.017-24.338-54.355-54.373-54.355Zm141.253 0c-30.035 0-54.373 24.338-54.373 54.374 0 30.035 24.338 54.373 54.373 54.373 30.017 0 54.374-24.338 54.374-54.373 0-30.036-24.338-54.374-54.374-54.374Z"/></svg>'),github:{source:Be('<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>'),tintColor:j.Color.PrimaryText},google:Be('<svg xmlns="http://www.w3.org/2000/svg" style="display:block" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/><path fill="none" d="M0 0h48v48H0z"/></svg>'),jira:Be('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="2361" height="2500" viewBox="2.59 0 214.091 224"><linearGradient id="a" x1="102.4" x2="56.15" y1="218.63" y2="172.39" gradientTransform="matrix(1 0 0 -1 0 264)" gradientUnits="userSpaceOnUse"><stop offset=".18" stop-color="#0052cc"/><stop offset="1" stop-color="#2684ff"/></linearGradient><linearGradient xlink:href="#a" id="b" x1="114.65" x2="160.81" y1="85.77" y2="131.92"/><path fill="#2684ff" d="M214.06 105.73 117.67 9.34 108.33 0 35.77 72.56 2.59 105.73a8.89 8.89 0 0 0 0 12.54l66.29 66.29L108.33 224l72.55-72.56 1.13-1.12 32.05-32a8.87 8.87 0 0 0 0-12.59zm-105.73 39.39L75.21 112l33.12-33.12L141.44 112z"/><path fill="url(#a)" d="M108.33 78.88a55.75 55.75 0 0 1-.24-78.61L35.62 72.71l39.44 39.44z"/><path fill="url(#b)" d="m141.53 111.91-33.2 33.21a55.77 55.77 0 0 1 0 78.86L181 151.35z"/></svg>'),linear:{source:{light:Be('<svg xmlns="http://www.w3.org/2000/svg" fill="#222326" width="200" height="200" viewBox="0 0 100 100"><path d="M1.22541 61.5228c-.2225-.9485.90748-1.5459 1.59638-.857L39.3342 97.1782c.6889.6889.0915 1.8189-.857 1.5964C20.0515 94.4522 5.54779 79.9485 1.22541 61.5228ZM.00189135 46.8891c-.01764375.2833.08887215.5599.28957165.7606L52.3503 99.7085c.2007.2007.4773.3075.7606.2896 2.3692-.1476 4.6938-.46 6.9624-.9259.7645-.157 1.0301-1.0963.4782-1.6481L2.57595 39.4485c-.55186-.5519-1.49117-.2863-1.648174.4782-.465915 2.2686-.77832 4.5932-.92588465 6.9624ZM4.21093 29.7054c-.16649.3738-.08169.8106.20765 1.1l64.77602 64.776c.2894.2894.7262.3742 1.1.2077 1.7861-.7956 3.5171-1.6927 5.1855-2.684.5521-.328.6373-1.0867.1832-1.5407L8.43566 24.3367c-.45409-.4541-1.21271-.3689-1.54074.1832-.99132 1.6684-1.88843 3.3994-2.68399 5.1855ZM12.6587 18.074c-.3701-.3701-.393-.9637-.0443-1.3541C21.7795 6.45931 35.1114 0 49.9519 0 77.5927 0 100 22.4073 100 50.0481c0 14.8405-6.4593 28.1724-16.7199 37.3375-.3903.3487-.984.3258-1.3542-.0443L12.6587 18.074Z"/></svg>'),dark:Be('<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="200" height="200" viewBox="0 0 100 100"><path d="M1.22541 61.5228c-.2225-.9485.90748-1.5459 1.59638-.857L39.3342 97.1782c.6889.6889.0915 1.8189-.857 1.5964C20.0515 94.4522 5.54779 79.9485 1.22541 61.5228ZM.00189135 46.8891c-.01764375.2833.08887215.5599.28957165.7606L52.3503 99.7085c.2007.2007.4773.3075.7606.2896 2.3692-.1476 4.6938-.46 6.9624-.9259.7645-.157 1.0301-1.0963.4782-1.6481L2.57595 39.4485c-.55186-.5519-1.49117-.2863-1.648174.4782-.465915 2.2686-.77832 4.5932-.92588465 6.9624ZM4.21093 29.7054c-.16649.3738-.08169.8106.20765 1.1l64.77602 64.776c.2894.2894.7262.3742 1.1.2077 1.7861-.7956 3.5171-1.6927 5.1855-2.684.5521-.328.6373-1.0867.1832-1.5407L8.43566 24.3367c-.45409-.4541-1.21271-.3689-1.54074.1832-.99132 1.6684-1.88843 3.3994-2.68399 5.1855ZM12.6587 18.074c-.3701-.3701-.393-.9637-.0443-1.3541C21.7795 6.45931 35.1114 0 49.9519 0 77.5927 0 100 22.4073 100 50.0481c0 14.8405-6.4593 28.1724-16.7199 37.3375-.3903.3487-.984.3258-1.3542-.0443L12.6587 18.074Z" /></svg>')}},slack:Be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="73 73 124 124"><style>.st0{fill:#e01e5a}.st1{fill:#36c5f0}.st2{fill:#2eb67d}.st3{fill:#ecb22e}</style><path d="M99.4 151.2c0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9h12.9v12.9zM105.9 151.2c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v32.3c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9v-32.3z" class="st0"/><path d="M118.8 99.4c-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v12.9h-12.9zM118.8 105.9c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H86.5c-7.1 0-12.9-5.8-12.9-12.9s5.8-12.9 12.9-12.9h32.3z" class="st1"/><path d="M170.6 118.8c0-7.1 5.8-12.9 12.9-12.9 7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9h-12.9v-12.9zM164.1 118.8c0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9V86.5c0-7.1 5.8-12.9 12.9-12.9 7.1 0 12.9 5.8 12.9 12.9v32.3z" class="st2"/><path d="M151.2 170.6c7.1 0 12.9 5.8 12.9 12.9 0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9v-12.9h12.9zM151.2 164.1c-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9h32.3c7.1 0 12.9 5.8 12.9 12.9 0 7.1-5.8 12.9-12.9 12.9h-32.3z" class="st3"/></svg>'),zoom:Be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 351.845 80"><path d="M73.786 78.835H10.88A10.842 10.842 0 0 1 .833 72.122a10.841 10.841 0 0 1 2.357-11.85L46.764 16.7h-31.23C6.954 16.699 0 9.744 0 1.165h58.014c4.414 0 8.357 2.634 10.046 6.712a10.843 10.843 0 0 1-2.356 11.85L22.13 63.302h36.122c8.58 0 15.534 6.955 15.534 15.534Zm278.059-48.544C351.845 13.588 338.256 0 321.553 0c-8.934 0-16.975 3.89-22.524 10.063C293.48 3.89 285.44 0 276.505 0c-16.703 0-30.291 13.588-30.291 30.291v48.544c8.579 0 15.534-6.955 15.534-15.534v-33.01c0-8.137 6.62-14.757 14.757-14.757s14.757 6.62 14.757 14.757v33.01c0 8.58 6.955 15.534 15.534 15.534V30.291c0-8.137 6.62-14.757 14.757-14.757s14.758 6.62 14.758 14.757v33.01c0 8.58 6.954 15.534 15.534 15.534V30.291ZM238.447 40c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.908-40 40-40 40 17.909 40 40Zm-15.534 0c0-13.512-10.954-24.466-24.466-24.466S173.98 26.488 173.98 40s10.953 24.466 24.466 24.466S222.913 53.512 222.913 40Zm-70.68 0c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.909-40 40-40 40 17.909 40 40Zm-15.534 0c0-13.512-10.954-24.466-24.466-24.466S87.767 26.488 87.767 40s10.954 24.466 24.466 24.466S136.699 53.512 136.699 40Z" style="fill:#0b5cff"/></svg>')},Tu=e=>new He.OAuthService({client:new j.OAuth.PKCEClient({redirectMethod:j.OAuth.RedirectMethod.Web,providerName:"Asana",providerIcon:Ge.asana,providerId:"asana",description:"Connect your Asana account"}),clientId:e.clientId??Pa.asana,authorizeUrl:e.authorizeUrl??"https://asana.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://asana.oauth.raycast.com/token",refreshTokenUrl:e.refreshTokenUrl??"https://asana.oauth.raycast.com/refresh-token",scope:e.scope,personalAccessToken:e.personalAccessToken,onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});V.asanaService=Tu;var wu=e=>new He.OAuthService({client:new j.OAuth.PKCEClient({redirectMethod:j.OAuth.RedirectMethod.Web,providerName:"GitHub",providerIcon:Ge.github,providerId:"github",description:"Connect your GitHub account"}),clientId:e.clientId??Pa.github,authorizeUrl:e.authorizeUrl??"https://github.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://github.oauth.raycast.com/token",refreshTokenUrl:e.refreshTokenUrl??"https://github.oauth.raycast.com/refresh-token",scope:e.scope,personalAccessToken:e.personalAccessToken,onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});V.githubService=wu;var Ou=e=>new He.OAuthService({client:new j.OAuth.PKCEClient({redirectMethod:j.OAuth.RedirectMethod.AppURI,providerName:"Google",providerIcon:Ge.google,providerId:"google",description:"Connect your Google account"}),clientId:e.clientId,authorizeUrl:e.authorizeUrl??"https://accounts.google.com/o/oauth2/v2/auth",tokenUrl:e.tokenUrl??"https://oauth2.googleapis.com/token",refreshTokenUrl:e.tokenUrl,scope:e.scope,personalAccessToken:e.personalAccessToken,bodyEncoding:e.bodyEncoding??"url-encoded",onAuthorize:e.onAuthorize,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});V.googleService=Ou;var Bu=e=>new He.OAuthService({client:new j.OAuth.PKCEClient({redirectMethod:j.OAuth.RedirectMethod.Web,providerName:"Jira",providerIcon:Ge.jira,providerId:"jira",description:"Connect your Jira account"}),clientId:e.clientId,authorizeUrl:e.authorizeUrl??"https://auth.atlassian.com/authorize",tokenUrl:e.tokenUrl??"https://auth.atlassian.com/oauth/token",refreshTokenUrl:e.refreshTokenUrl,scope:e.scope,personalAccessToken:e.personalAccessToken,onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});V.jiraService=Bu;var Lu=e=>new He.OAuthService({client:new j.OAuth.PKCEClient({redirectMethod:j.OAuth.RedirectMethod.Web,providerName:"Linear",providerIcon:Ge.linear,providerId:"linear",description:"Connect your Linear account"}),clientId:e.clientId??Pa.linear,authorizeUrl:e.authorizeUrl??"https://linear.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://linear.oauth.raycast.com/token",refreshTokenUrl:e.refreshTokenUrl??"https://linear.oauth.raycast.com/refresh-token",scope:e.scope,extraParameters:{actor:"user"},onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});V.linearService=Lu;var qu=e=>new He.OAuthService({client:new j.OAuth.PKCEClient({redirectMethod:j.OAuth.RedirectMethod.Web,providerName:"Slack",providerIcon:Ge.slack,providerId:"slack",description:"Connect your Slack account"}),clientId:e.clientId??Pa.slack,authorizeUrl:e.authorizeUrl??"https://slack.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://slack.oauth.raycast.com/token",refreshTokenUrl:e.tokenUrl??"https://slack.oauth.raycast.com/refresh-token",scope:"",extraParameters:{user_scope:e.scope},personalAccessToken:e.personalAccessToken,bodyEncoding:e.tokenUrl?e.bodyEncoding??"url-encoded":"json",onAuthorize:e.onAuthorize,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser??(t=>({access_token:t.authed_user.access_token,scope:t.authed_user.scope}))});V.slackService=qu;var Nu=e=>new He.OAuthService({client:new j.OAuth.PKCEClient({redirectMethod:j.OAuth.RedirectMethod.Web,providerName:"Zoom",providerIcon:Ge.zoom,providerId:"zoom",description:"Connect your Zoom account"}),clientId:e.clientId,authorizeUrl:e.authorizeUrl??"https://zoom.us/oauth/authorize",tokenUrl:e.tokenUrl??"https://zoom.us/oauth/token",refreshTokenUrl:e.refreshTokenUrl,scope:e.scope,personalAccessToken:e.personalAccessToken,bodyEncoding:e.bodyEncoding??"url-encoded",onAuthorize:e.onAuthorize,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});V.zoomService=Nu});var Ir=C(bt=>{"use strict";var Vu=bt&&bt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(bt,"__esModule",{value:!0});bt.OAuthService=void 0;var Gn=Vu(Ot()),$e=Hn(),Ie=class{constructor(t){this.clientId=t.clientId,this.scope=Array.isArray(t.scope)?t.scope.join(" "):t.scope,this.personalAccessToken=t.personalAccessToken,this.bodyEncoding=t.bodyEncoding,this.client=t.client,this.extraParameters=t.extraParameters,this.authorizeUrl=t.authorizeUrl,this.tokenUrl=t.tokenUrl,this.refreshTokenUrl=t.refreshTokenUrl,this.onAuthorize=t.onAuthorize,this.tokenResponseParser=t.tokenResponseParser??(a=>a),this.tokenRefreshResponseParser=t.tokenRefreshResponseParser??(a=>a),this.authorize=this.authorize.bind(this)}async authorize(){let t=await this.client.getTokens();if(t?.accessToken){if(t.refreshToken&&t.isExpired()){let o=await this.refreshTokens({token:t.refreshToken});if(o)return await this.client.setTokens(o),o.access_token}return t.accessToken}let a=await this.client.authorizationRequest({endpoint:this.authorizeUrl,clientId:this.clientId,scope:this.scope,extraParameters:this.extraParameters}),{authorizationCode:r}=await this.client.authorize(a),n=await this.fetchTokens({authRequest:a,authorizationCode:r});return await this.client.setTokens(n),n.access_token}async fetchTokens({authRequest:t,authorizationCode:a}){let r;if(this.bodyEncoding==="url-encoded"){let u=new URLSearchParams;u.append("client_id",this.clientId),u.append("code",a),u.append("code_verifier",t.codeVerifier),u.append("grant_type","authorization_code"),u.append("redirect_uri",t.redirectURI),r={body:u}}else r={body:JSON.stringify({client_id:this.clientId,code:a,code_verifier:t.codeVerifier,grant_type:"authorization_code",redirect_uri:t.redirectURI}),headers:{"Content-Type":"application/json"}};let n=await(0,Gn.default)(this.tokenUrl,{method:"POST",...r});if(!n.ok){let u=await n.text();throw console.error("fetch tokens error:",u),new Error(`Error while fetching tokens: ${n.status} (${n.statusText})
${u}`)}let o=this.tokenResponseParser(await n.json());return Array.isArray(o.scope)?{...o,scope:o.scope.join(" ")}:o}async refreshTokens({token:t}){let a;if(this.bodyEncoding==="url-encoded"){let n=new URLSearchParams;n.append("client_id",this.clientId),n.append("refresh_token",t),n.append("grant_type","refresh_token"),a={body:n}}else a={body:JSON.stringify({client_id:this.clientId,refresh_token:t,grant_type:"refresh_token"}),headers:{"Content-Type":"application/json"}};let r=await(0,Gn.default)(this.refreshTokenUrl??this.tokenUrl,{method:"POST",...a});if(r.ok){let n=this.tokenRefreshResponseParser(await r.json());return n.refresh_token=n.refresh_token??t,n}else{let n=await r.text();console.error("refresh tokens error:",n),this.client.description=`${this.client.providerName} needs you to sign-in again. Press \u23CE or click the button below to continue.`,await this.client.removeTokens(),await this.authorize()}}};bt.OAuthService=Ie;Ie.asana=$e.asanaService;Ie.github=$e.githubService;Ie.google=$e.googleService;Ie.jira=$e.jiraService;Ie.linear=$e.linearService;Ie.slack=$e.slackService;Ie.zoom=$e.zoomService});var $n=C(It=>{"use strict";Object.defineProperty(It,"__esModule",{value:!0});It.getAccessToken=It.withAccessToken=void 0;var ku=require("react/jsx-runtime"),Fu=require("@raycast/api"),Le=null,Qe=null,gr=null,Mr=null,mr=null;function ju(e){return Fu.environment.commandMode==="no-view"?t=>async r=>{if(!Le){Le=e.personalAccessToken??await e.authorize(),Qe=e.personalAccessToken?"personal":"oauth";let n=(await e.client?.getTokens())?.idToken;e.onAuthorize&&await Promise.resolve(e.onAuthorize({token:Le,type:Qe,idToken:n}))}return t(r)}:t=>{let a=r=>{e.personalAccessToken?(Le=e.personalAccessToken,Qe="personal"):(gr||(gr=Rr(e.authorize())),Le=gr.read(),Qe="oauth");let n;return e.client&&(Mr||(Mr=Rr(e.client.getTokens())),n=Mr.read()?.idToken),!mr&&e.onAuthorize&&(mr=Rr(Promise.resolve(e.onAuthorize({token:Le,type:Qe,idToken:n})))),mr?.read(),(0,ku.jsx)(t,{...r})};return a.displayName=`withAccessToken(${t.displayName||t.name})`,a}}It.withAccessToken=ju;function zu(){if(!Le||!Qe)throw new Error("getAccessToken must be used when authenticated (eg. used inside `withAccessToken`)");return{token:Le,type:Qe}}It.getAccessToken=zu;function Rr(e){let t="pending",a,r=e.then(o=>{t="success",a=o},o=>{t="error",a=o});return{read:()=>{switch(t){case"pending":throw r;case"error":throw a;default:return a}}}}});var Wn=C(qe=>{"use strict";var Hu=qe&&qe.__createBinding||(Object.create?(function(e,t,a,r){r===void 0&&(r=a);var n=Object.getOwnPropertyDescriptor(t,a);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,n)}):(function(e,t,a,r){r===void 0&&(r=a),e[r]=t[a]})),Qn=qe&&qe.__exportStar||function(e,t){for(var a in e)a!=="default"&&!Object.prototype.hasOwnProperty.call(t,a)&&Hu(t,e,a)};Object.defineProperty(qe,"__esModule",{value:!0});Qn(Ir(),qe);Qn($n(),qe)});var Xn=C(re=>{"use strict";var Kn=re&&re.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(re,"__esModule",{value:!0});re.createDeeplink=re.createExtensionDeeplink=re.createScriptCommandDeeplink=re.DeeplinkType=void 0;var fr=require("@raycast/api"),Gu=Kn(require("node:fs")),$u=Kn(require("node:path")),Ar;(function(e){e.ScriptCommand="script-command",e.Extension="extension"})(Ar||(re.DeeplinkType=Ar={}));function Yn(){return fr.environment.raycastVersion.includes("alpha")?"raycastinternal://":"raycast://"}function Qu(){let e=JSON.parse(Gu.default.readFileSync($u.default.join(fr.environment.assetsPath,"..","package.json"),"utf8"));return e.owner||e.author}function Jn(e){let t=`${Yn()}script-commands/${e.command}`;if(e.arguments){let a="";for(let r of e.arguments)a+="&arguments="+encodeURIComponent(r);t+="?"+a.substring(1)}return t}re.createScriptCommandDeeplink=Jn;function Zn(e){let t=Qu(),a=fr.environment.extensionName;"ownerOrAuthorName"in e&&"extensionName"in e&&(t=e.ownerOrAuthorName,a=e.extensionName);let r=`${Yn()}extensions/${t}/${a}/${e.command}`,n="";return e.launchType&&(n+="&launchType="+encodeURIComponent(e.launchType)),e.arguments&&(n+="&arguments="+encodeURIComponent(JSON.stringify(e.arguments))),e.context&&(n+="&context="+encodeURIComponent(JSON.stringify(e.context))),e.fallbackText&&(n+="&fallbackText="+encodeURIComponent(e.fallbackText)),n&&(r+="?"+n.substring(1)),r}re.createExtensionDeeplink=Zn;function Wu(e){return e.type===Ar.ScriptCommand?Jn(e):Zn(e)}re.createDeeplink=Wu});var eo=C(Ea=>{"use strict";Object.defineProperty(Ea,"__esModule",{value:!0});Ea.executeSQL=void 0;var Ku=ur();function Yu(e,t){return(0,Ku.baseExecuteSQL)(e,t)}Ea.executeSQL=Yu});var to=C(gt=>{"use strict";var Ju=gt&&gt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(gt,"__esModule",{value:!0});gt.runAppleScript=void 0;var Zu=Ju(require("node:child_process")),Vt=pa();async function Xu(e,t,a){let{humanReadableOutput:r,language:n,timeout:o,...u}=Array.isArray(t)?a||{}:t||{},i=r!==!1?[]:["-ss"];n==="JavaScript"&&i.push("-l","JavaScript"),Array.isArray(t)&&i.push("-",...t);let s=Zu.default.spawn("osascript",i,{...u,env:{PATH:"/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"}}),p=(0,Vt.getSpawnedPromise)(s,{timeout:o??1e4});s.stdin.end(e);let[{error:c,exitCode:y,signal:S,timedOut:g},l,b]=await(0,Vt.getSpawnedResult)(s,{encoding:"utf8"},p),d=(0,Vt.handleOutput)({stripFinalNewline:!0},l),I=(0,Vt.handleOutput)({stripFinalNewline:!0},b);return(0,Vt.defaultParsing)({stdout:d,stderr:I,error:c,exitCode:y,signal:S,timedOut:g,command:"osascript",options:a,parentError:new Error})}gt.runAppleScript=Xu});var ao=C(ha=>{"use strict";Object.defineProperty(ha,"__esModule",{value:!0});ha.withCache=void 0;var ep=require("@raycast/api"),Ca=ve();function tp(e,t){let a=new ep.Cache({namespace:(0,Ca.hash)(e)}),r=async(...n)=>{let o=(0,Ca.hash)(n||[])+t?.internal_cacheKeySuffix,u=a.get(o);if(u){let{data:s,timestamp:p}=JSON.parse(u,Ca.reviver);if(!(t?.maxAge&&Date.now()-p>t.maxAge)&&(!t?.validate||t.validate(s)))return s}let i=await e(...n);return a.set(o,JSON.stringify({data:i,timestamp:Date.now()},Ca.replacer)),i};return r.clearCache=()=>{a.clear()},r}ha.withCache=tp});var We=C(x=>{"use strict";var ap=x&&x.__createBinding||(Object.create?(function(e,t,a,r){r===void 0&&(r=a);var n=Object.getOwnPropertyDescriptor(t,a);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,n)}):(function(e,t,a,r){r===void 0&&(r=a),e[r]=t[a]})),B=x&&x.__exportStar||function(e,t){for(var a in e)a!=="default"&&!Object.prototype.hasOwnProperty.call(t,a)&&ap(t,e,a)};Object.defineProperty(x,"__esModule",{value:!0});B(at(),x);B(aa(),x);B(xt(),x);B(on(),x);B(cn(),x);B(bn(),x);B(mn(),x);B(An(),x);B(Pn(),x);B(hn(),x);B(_n(),x);B(zn(),x);B(Wn(),x);B(Xn(),x);B(eo(),x);B(to(),x);B(Ct(),x);B(ao(),x)});var H={};et(H,{default:()=>bo.default});var bo,wa=Ga(()=>{z(H,require("formdata-polyfill/esm.min.js"));bo=w(require("formdata-polyfill/esm.min.js"))});var Y={};et(Y,{default:()=>mo.default});var mo,hr=Ga(()=>{z(Y,require("fetch-blob/from.js"));mo=w(require("fetch-blob/from.js"))});var Ao={};et(Ao,{toFormData:()=>Pp});function fp(e){let t=e.match(/\bfilename=("(.*?)"|([^()<>@,;:\\"/[\]?={}\s\t]+))($|;\s)/i);if(!t)return;let a=t[2]||t[3]||"",r=a.slice(a.lastIndexOf("\\")+1);return r=r.replace(/%22/g,'"'),r=r.replace(/&#(\d{4});/g,(n,o)=>String.fromCharCode(o)),r}async function Pp(e,t){if(!/multipart/i.test(t))throw new TypeError("Failed to fetch");let a=t.match(/boundary=(?:"([^"]+)"|([^;]+))/i);if(!a)throw new TypeError("no or bad content-type header, no multipart boundary");let r=new Dr(a[1]||a[2]),n,o,u,i,s,p,c=[],y=new H.FormData,S=I=>{u+=d.decode(I,{stream:!0})},g=I=>{c.push(I)},l=()=>{let I=new Y.File(c,p,{type:s});y.append(i,I)},b=()=>{y.append(i,u)},d=new TextDecoder("utf-8");d.decode(),r.onPartBegin=function(){r.onPartData=S,r.onPartEnd=b,n="",o="",u="",i="",s="",p=null,c.length=0},r.onHeaderField=function(I){n+=d.decode(I,{stream:!0})},r.onHeaderValue=function(I){o+=d.decode(I,{stream:!0})},r.onHeaderEnd=function(){if(o+=d.decode(),n=n.toLowerCase(),n==="content-disposition"){let I=o.match(/\bname=("([^"]*)"|([^()<>@,;:\\"/[\]?={}\s\t]+))/i);I&&(i=I[2]||I[3]||""),p=fp(o),p&&(r.onPartData=g,r.onPartEnd=l)}else n==="content-type"&&(s=o);o="",n=""};for await(let I of e)r.write(I);return r.end(),y}var ge,D,Ro,ke,Ba,La,gp,zt,Mp,mp,Rp,Ap,Je,Dr,fo=Ga(()=>{hr();wa();ge=0,D={START_BOUNDARY:ge++,HEADER_FIELD_START:ge++,HEADER_FIELD:ge++,HEADER_VALUE_START:ge++,HEADER_VALUE:ge++,HEADER_VALUE_ALMOST_DONE:ge++,HEADERS_ALMOST_DONE:ge++,PART_DATA_START:ge++,PART_DATA:ge++,END:ge++},Ro=1,ke={PART_BOUNDARY:Ro,LAST_BOUNDARY:Ro*=2},Ba=10,La=13,gp=32,zt=45,Mp=58,mp=97,Rp=122,Ap=e=>e|32,Je=()=>{},Dr=class{constructor(t){this.index=0,this.flags=0,this.onHeaderEnd=Je,this.onHeaderField=Je,this.onHeadersEnd=Je,this.onHeaderValue=Je,this.onPartBegin=Je,this.onPartData=Je,this.onPartEnd=Je,this.boundaryChars={},t=`\r
--`+t;let a=new Uint8Array(t.length);for(let r=0;r<t.length;r++)a[r]=t.charCodeAt(r),this.boundaryChars[a[r]]=!0;this.boundary=a,this.lookbehind=new Uint8Array(this.boundary.length+8),this.state=D.START_BOUNDARY}write(t){let a=0,r=t.length,n=this.index,{lookbehind:o,boundary:u,boundaryChars:i,index:s,state:p,flags:c}=this,y=this.boundary.length,S=y-1,g=t.length,l,b,d=m=>{this[m+"Mark"]=a},I=m=>{delete this[m+"Mark"]},R=(m,P,A,_)=>{(P===void 0||P!==A)&&this[m](_&&_.subarray(P,A))},f=(m,P)=>{let A=m+"Mark";A in this&&(P?(R(m,this[A],a,t),delete this[A]):(R(m,this[A],t.length,t),this[A]=0))};for(a=0;a<r;a++)switch(l=t[a],p){case D.START_BOUNDARY:if(s===u.length-2){if(l===zt)c|=ke.LAST_BOUNDARY;else if(l!==La)return;s++;break}else if(s-1===u.length-2){if(c&ke.LAST_BOUNDARY&&l===zt)p=D.END,c=0;else if(!(c&ke.LAST_BOUNDARY)&&l===Ba)s=0,R("onPartBegin"),p=D.HEADER_FIELD_START;else return;break}l!==u[s+2]&&(s=-2),l===u[s+2]&&s++;break;case D.HEADER_FIELD_START:p=D.HEADER_FIELD,d("onHeaderField"),s=0;case D.HEADER_FIELD:if(l===La){I("onHeaderField"),p=D.HEADERS_ALMOST_DONE;break}if(s++,l===zt)break;if(l===Mp){if(s===1)return;f("onHeaderField",!0),p=D.HEADER_VALUE_START;break}if(b=Ap(l),b<mp||b>Rp)return;break;case D.HEADER_VALUE_START:if(l===gp)break;d("onHeaderValue"),p=D.HEADER_VALUE;case D.HEADER_VALUE:l===La&&(f("onHeaderValue",!0),R("onHeaderEnd"),p=D.HEADER_VALUE_ALMOST_DONE);break;case D.HEADER_VALUE_ALMOST_DONE:if(l!==Ba)return;p=D.HEADER_FIELD_START;break;case D.HEADERS_ALMOST_DONE:if(l!==Ba)return;R("onHeadersEnd"),p=D.PART_DATA_START;break;case D.PART_DATA_START:p=D.PART_DATA,d("onPartData");case D.PART_DATA:if(n=s,s===0){for(a+=S;a<g&&!(t[a]in i);)a+=y;a-=S,l=t[a]}if(s<u.length)u[s]===l?(s===0&&f("onPartData",!0),s++):s=0;else if(s===u.length)s++,l===La?c|=ke.PART_BOUNDARY:l===zt?c|=ke.LAST_BOUNDARY:s=0;else if(s-1===u.length)if(c&ke.PART_BOUNDARY){if(s=0,l===Ba){c&=~ke.PART_BOUNDARY,R("onPartEnd"),R("onPartBegin"),p=D.HEADER_FIELD_START;break}}else c&ke.LAST_BOUNDARY&&l===zt?(R("onPartEnd"),p=D.END,c=0):s=0;if(s>0)o[s-1]=l;else if(n>0){let m=new Uint8Array(o.buffer,o.byteOffset,o.byteLength);R("onPartData",0,n,m),n=0,d("onPartData"),a--}break;case D.END:break;default:throw new Error(`Unexpected state entered: ${p}`)}f("onHeaderField"),f("onHeaderValue"),f("onPartData"),this.index=s,this.state=p,this.flags=c}end(){if(this.state===D.HEADER_FIELD_START&&this.index===0||this.state===D.PART_DATA&&this.index===this.boundary.length)this.onPartEnd();else if(this.state!==D.END)throw new Error("MultipartParser.end(): stream ended unexpectedly")}}});var Kl={};et(Kl,{default:()=>Wl});module.exports=mi(Kl);var Lr=require("@raycast/api"),ci=w(We()),yi=require("react");var $o=require("@octokit/rest"),Qo=require("@raycast/api"),Wo=w(We());var Da=JSON;var ro=e=>e.toUpperCase(),no=e=>{let t={};return e.forEach((a,r)=>{t[r]=a}),t};var oo=(e,t,a)=>e.document?e:{document:e,variables:t,requestHeaders:a,signal:void 0},io=(e,t,a)=>e.query?e:{query:e,variables:t,requestHeaders:a,signal:void 0},so=(e,t)=>e.documents?e:{documents:e,requestHeaders:t,signal:void 0};var xa=require("graphql"),uo=e=>{let t,a=e.definitions.filter(r=>r.kind==="OperationDefinition");return a.length===1&&(t=a[0]?.name?.value),t},Ke=e=>{if(typeof e=="string"){let a;try{let r=(0,xa.parse)(e);a=uo(r)}catch{}return{query:e,operationName:a}}let t=uo(e);return{query:(0,xa.print)(e),operationName:t}};var Ye=class e extends Error{constructor(t,a){let r=`${e.extractMessage(t)}: ${JSON.stringify({response:t,request:a})}`;super(r),Object.setPrototypeOf(this,e.prototype),this.response=t,this.request=a,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,e)}static extractMessage(t){return t.errors?.[0]?.message??`GraphQL Error (Code: ${t.status})`}};var Ve=w(Ot(),1);var rp="connection_init",np="connection_ack",lo="ping",co="pong",op="subscribe",ip="next",sp="error",yo="complete",Ne=class e{get type(){return this._type}get id(){return this._id}get payload(){return this._payload}constructor(t,a,r){this._type=t,this._payload=a,this._id=r}get text(){let t={type:this.type};return this.id!=null&&this.id!=null&&(t.id=this.id),this.payload!=null&&this.payload!=null&&(t.payload=this.payload),JSON.stringify(t)}static parse(t,a){let{type:r,payload:n,id:o}=JSON.parse(t);return new e(r,a(n),o)}},_a=class{constructor(t,{onInit:a,onAcknowledged:r,onPing:n,onPong:o}){this.socketState={acknowledged:!1,lastRequestId:0,subscriptions:{}},this.socket=t,t.addEventListener("open",async u=>{this.socketState.acknowledged=!1,this.socketState.subscriptions={},t.send(pp(a?await a():null).text)}),t.addEventListener("close",u=>{this.socketState.acknowledged=!1,this.socketState.subscriptions={}}),t.addEventListener("error",u=>{console.error(u)}),t.addEventListener("message",u=>{try{let i=up(u.data);switch(i.type){case np:{this.socketState.acknowledged?console.warn("Duplicate CONNECTION_ACK message ignored"):(this.socketState.acknowledged=!0,r&&r(i.payload));return}case lo:{n?n(i.payload).then(y=>t.send(po(y).text)):t.send(po(null).text);return}case co:{o&&o(i.payload);return}}if(!this.socketState.acknowledged||i.id===void 0||i.id===null||!this.socketState.subscriptions[i.id])return;let{query:s,variables:p,subscriber:c}=this.socketState.subscriptions[i.id];switch(i.type){case ip:{!i.payload.errors&&i.payload.data&&c.next&&c.next(i.payload.data),i.payload.errors&&c.error&&c.error(new Ye({...i.payload,status:200},{query:s,variables:p}));return}case sp:{c.error&&c.error(new Ye({errors:i.payload,status:200},{query:s,variables:p}));return}case yo:{c.complete&&c.complete(),delete this.socketState.subscriptions[i.id];return}}}catch(i){console.error(i),t.close(1006)}t.close(4400,"Unknown graphql-ws message.")})}makeSubscribe(t,a,r,n){let o=(this.socketState.lastRequestId++).toString();return this.socketState.subscriptions[o]={query:t,variables:n,subscriber:r},this.socket.send(cp(o,{query:t,operationName:a,variables:n}).text),()=>{this.socket.send(yp(o).text),delete this.socketState.subscriptions[o]}}rawRequest(t,a){return new Promise((r,n)=>{let o;this.rawSubscribe(t,{next:(u,i)=>o={data:u,extensions:i},error:n,complete:()=>r(o)},a)})}request(t,a){return new Promise((r,n)=>{let o;this.subscribe(t,{next:u=>o=u,error:n,complete:()=>r(o)},a)})}subscribe(t,a,r){let{query:n,operationName:o}=Ke(t);return this.makeSubscribe(n,o,a,r)}rawSubscribe(t,a,r){return this.makeSubscribe(t,void 0,a,r)}ping(t){this.socket.send(lp(t).text)}close(){this.socket.close(1e3)}};_a.PROTOCOL="graphql-transport-ws";function up(e,t=a=>a){return Ne.parse(e,t)}function pp(e){return new Ne(rp,e)}function lp(e){return new Ne(lo,e,void 0)}function po(e){return new Ne(co,e,void 0)}function cp(e,t){return new Ne(op,t,e)}function yp(e){return new Ne(yo,void 0,e)}var Mt=e=>{let t={};return e&&(typeof Headers<"u"&&e instanceof Headers||Ve&&Ve.Headers&&e instanceof Ve.Headers?t=no(e):Array.isArray(e)?e.forEach(([a,r])=>{a&&r!==void 0&&(t[a]=r)}):t=e),t},So=e=>e.replace(/([\s,]|#[^\n\r]+)+/g," ").trim(),dp=e=>{if(!Array.isArray(e.query)){let r=e,n=[`query=${encodeURIComponent(So(r.query))}`];return e.variables&&n.push(`variables=${encodeURIComponent(r.jsonSerializer.stringify(r.variables))}`),r.operationName&&n.push(`operationName=${encodeURIComponent(r.operationName)}`),n.join("&")}if(typeof e.variables<"u"&&!Array.isArray(e.variables))throw new Error("Cannot create query with given variable type, array expected");let t=e,a=e.query.reduce((r,n,o)=>(r.push({query:So(n),variables:t.variables?t.jsonSerializer.stringify(t.variables[o]):void 0}),r),[]);return`query=${encodeURIComponent(t.jsonSerializer.stringify(a))}`},Sp=e=>async t=>{let{url:a,query:r,variables:n,operationName:o,fetch:u,fetchOptions:i,middleware:s}=t,p={...t.headers},c="",y;e==="POST"?(y=bp(r,n,o,i.jsonSerializer),typeof y=="string"&&(p["Content-Type"]="application/json")):c=dp({query:r,variables:n,operationName:o,jsonSerializer:i.jsonSerializer??Da});let S={method:e,headers:p,body:y,...i},g=a,l=S;if(s){let b=await Promise.resolve(s({...S,url:a,operationName:o,variables:n})),{url:d,...I}=b;g=d,l=I}return c&&(g=`${g}?${c}`),await u(g,l)},Ua=class{constructor(t,a={}){this.url=t,this.requestConfig=a,this.rawRequest=async(...r)=>{let[n,o,u]=r,i=io(n,o,u),{headers:s,fetch:p=Ve.default,method:c="POST",requestMiddleware:y,responseMiddleware:S,...g}=this.requestConfig,{url:l}=this;i.signal!==void 0&&(g.signal=i.signal);let{operationName:b}=Ke(i.query);return Pr({url:l,query:i.query,variables:i.variables,headers:{...Mt(Er(s)),...Mt(i.requestHeaders)},operationName:b,fetch:p,method:c,fetchOptions:g,middleware:y}).then(d=>(S&&S(d),d)).catch(d=>{throw S&&S(d),d})}}async request(t,...a){let[r,n]=a,o=oo(t,r,n),{headers:u,fetch:i=Ve.default,method:s="POST",requestMiddleware:p,responseMiddleware:c,...y}=this.requestConfig,{url:S}=this;o.signal!==void 0&&(y.signal=o.signal);let{query:g,operationName:l}=Ke(o.document);return Pr({url:S,query:g,variables:o.variables,headers:{...Mt(Er(u)),...Mt(o.requestHeaders)},operationName:l,fetch:i,method:s,fetchOptions:y,middleware:p}).then(b=>(c&&c(b),b.data)).catch(b=>{throw c&&c(b),b})}batchRequests(t,a){let r=so(t,a),{headers:n,...o}=this.requestConfig;r.signal!==void 0&&(o.signal=r.signal);let u=r.documents.map(({document:s})=>Ke(s).query),i=r.documents.map(({variables:s})=>s);return Pr({url:this.url,query:u,variables:i,headers:{...Mt(Er(n)),...Mt(r.requestHeaders)},operationName:void 0,fetch:this.requestConfig.fetch??Ve.default,method:this.requestConfig.method||"POST",fetchOptions:o,middleware:this.requestConfig.requestMiddleware}).then(s=>(this.requestConfig.responseMiddleware&&this.requestConfig.responseMiddleware(s),s.data)).catch(s=>{throw this.requestConfig.responseMiddleware&&this.requestConfig.responseMiddleware(s),s})}setHeaders(t){return this.requestConfig.headers=t,this}setHeader(t,a){let{headers:r}=this.requestConfig;return r?r[t]=a:this.requestConfig.headers={[t]:a},this}setEndpoint(t){return this.url=t,this}},Pr=async e=>{let{query:t,variables:a,fetchOptions:r}=e,n=Sp(ro(e.method??"post")),o=Array.isArray(e.query),u=await n(e),i=await Ip(u,r.jsonSerializer??Da),s=Array.isArray(i)?!i.some(({data:c})=>!c):!!i.data,p=Array.isArray(i)||!i.errors||Array.isArray(i.errors)&&!i.errors.length||r.errorPolicy==="all"||r.errorPolicy==="ignore";if(u.ok&&p&&s){let{errors:c,...y}=(Array.isArray(i),i),S=r.errorPolicy==="ignore"?y:i;return{...o?{data:S}:S,headers:u.headers,status:u.status}}else{let c=typeof i=="string"?{error:i}:i;throw new Ye({...c,status:u.status,headers:u.headers},{query:t,variables:a})}};var bp=(e,t,a,r)=>{let n=r??Da;if(!Array.isArray(e))return n.stringify({query:e,variables:t,operationName:a});if(typeof t<"u"&&!Array.isArray(t))throw new Error("Cannot create request body with given variable type, array expected");let o=e.reduce((u,i,s)=>(u.push({query:i,variables:t?t[s]:void 0}),u),[]);return n.stringify(o)},Ip=async(e,t)=>{let a;return e.headers.forEach((r,n)=>{n.toLowerCase()==="content-type"&&(a=r)}),a&&(a.toLowerCase().startsWith("application/json")||a.toLowerCase().startsWith("application/graphql+json")||a.toLowerCase().startsWith("application/graphql-response+json"))?t.parse(await e.text()):e.text()},Er=e=>typeof e=="function"?e():e;var qo=w(require("node:http"),1),No=w(require("node:https"),1),Xe=w(require("node:zlib"),1),X=w(require("node:stream"),1),$t=require("node:buffer");var kt={};et(kt,{default:()=>va.default});z(kt,require("data-uri-to-buffer"));var va=w(require("data-uri-to-buffer"));var ne=w(require("node:stream"),1),xe=require("node:util"),J=require("node:buffer");var Ft={};et(Ft,{default:()=>Ta.default});z(Ft,require("fetch-blob"));var Ta=w(require("fetch-blob"));wa();var De=class extends Error{constructor(t,a){super(t),Error.captureStackTrace(this,this.constructor),this.type=a}get name(){return this.constructor.name}get[Symbol.toStringTag](){return this.constructor.name}};var G=class extends De{constructor(t,a,r){super(t,a),r&&(this.code=this.errno=r.code,this.erroredSysCall=r.syscall)}};var Oa=Symbol.toStringTag,Cr=e=>typeof e=="object"&&typeof e.append=="function"&&typeof e.delete=="function"&&typeof e.get=="function"&&typeof e.getAll=="function"&&typeof e.has=="function"&&typeof e.set=="function"&&typeof e.sort=="function"&&e[Oa]==="URLSearchParams",jt=e=>e&&typeof e=="object"&&typeof e.arrayBuffer=="function"&&typeof e.type=="string"&&typeof e.stream=="function"&&typeof e.constructor=="function"&&/^(Blob|File)$/.test(e[Oa]),Io=e=>typeof e=="object"&&(e[Oa]==="AbortSignal"||e[Oa]==="EventTarget"),go=(e,t)=>{let a=new URL(t).hostname,r=new URL(e).hostname;return a===r||a.endsWith(`.${r}`)},Mo=(e,t)=>{let a=new URL(t).protocol,r=new URL(e).protocol;return a===r};var Ep=(0,xe.promisify)(ne.default.pipeline),$=Symbol("Body internals"),Me=class{constructor(t,{size:a=0}={}){let r=null;t===null?t=null:Cr(t)?t=J.Buffer.from(t.toString()):jt(t)||J.Buffer.isBuffer(t)||(xe.types.isAnyArrayBuffer(t)?t=J.Buffer.from(t):ArrayBuffer.isView(t)?t=J.Buffer.from(t.buffer,t.byteOffset,t.byteLength):t instanceof ne.default||(t instanceof H.FormData?(t=(0,H.formDataToBlob)(t),r=t.type.split("=")[1]):t=J.Buffer.from(String(t))));let n=t;J.Buffer.isBuffer(t)?n=ne.default.Readable.from(t):jt(t)&&(n=ne.default.Readable.from(t.stream())),this[$]={body:t,stream:n,boundary:r,disturbed:!1,error:null},this.size=a,t instanceof ne.default&&t.on("error",o=>{let u=o instanceof De?o:new G(`Invalid response body while trying to fetch ${this.url}: ${o.message}`,"system",o);this[$].error=u})}get body(){return this[$].stream}get bodyUsed(){return this[$].disturbed}async arrayBuffer(){let{buffer:t,byteOffset:a,byteLength:r}=await xr(this);return t.slice(a,a+r)}async formData(){let t=this.headers.get("content-type");if(t.startsWith("application/x-www-form-urlencoded")){let r=new H.FormData,n=new URLSearchParams(await this.text());for(let[o,u]of n)r.append(o,u);return r}let{toFormData:a}=await Promise.resolve().then(()=>(fo(),Ao));return a(this.body,t)}async blob(){let t=this.headers&&this.headers.get("content-type")||this[$].body&&this[$].body.type||"",a=await this.arrayBuffer();return new Ta.default([a],{type:t})}async json(){let t=await this.text();return JSON.parse(t)}async text(){let t=await xr(this);return new TextDecoder().decode(t)}buffer(){return xr(this)}};Me.prototype.buffer=(0,xe.deprecate)(Me.prototype.buffer,"Please use 'response.arrayBuffer()' instead of 'response.buffer()'","node-fetch#buffer");Object.defineProperties(Me.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0},data:{get:(0,xe.deprecate)(()=>{},"data doesn't exist, use json(), text(), arrayBuffer(), or body instead","https://github.com/node-fetch/node-fetch/issues/1000 (response)")}});async function xr(e){if(e[$].disturbed)throw new TypeError(`body used already for: ${e.url}`);if(e[$].disturbed=!0,e[$].error)throw e[$].error;let{body:t}=e;if(t===null)return J.Buffer.alloc(0);if(!(t instanceof ne.default))return J.Buffer.alloc(0);let a=[],r=0;try{for await(let n of t){if(e.size>0&&r+n.length>e.size){let o=new G(`content size at ${e.url} over limit: ${e.size}`,"max-size");throw t.destroy(o),o}r+=n.length,a.push(n)}}catch(n){throw n instanceof De?n:new G(`Invalid response body while trying to fetch ${e.url}: ${n.message}`,"system",n)}if(t.readableEnded===!0||t._readableState.ended===!0)try{return a.every(n=>typeof n=="string")?J.Buffer.from(a.join("")):J.Buffer.concat(a,r)}catch(n){throw new G(`Could not create Buffer from response body for ${e.url}: ${n.message}`,"system",n)}else throw new G(`Premature close of server response while trying to fetch ${e.url}`)}var mt=(e,t)=>{let a,r,{body:n}=e[$];if(e.bodyUsed)throw new Error("cannot clone body after it is used");return n instanceof ne.default&&typeof n.getBoundary!="function"&&(a=new ne.PassThrough({highWaterMark:t}),r=new ne.PassThrough({highWaterMark:t}),n.pipe(a),n.pipe(r),e[$].stream=a,n=r),n},Cp=(0,xe.deprecate)(e=>e.getBoundary(),"form-data doesn't follow the spec and requires special treatment. Use alternative package","https://github.com/node-fetch/node-fetch/issues/1167"),qa=(e,t)=>e===null?null:typeof e=="string"?"text/plain;charset=UTF-8":Cr(e)?"application/x-www-form-urlencoded;charset=UTF-8":jt(e)?e.type||null:J.Buffer.isBuffer(e)||xe.types.isAnyArrayBuffer(e)||ArrayBuffer.isView(e)?null:e instanceof H.FormData?`multipart/form-data; boundary=${t[$].boundary}`:e&&typeof e.getBoundary=="function"?`multipart/form-data;boundary=${Cp(e)}`:e instanceof ne.default?null:"text/plain;charset=UTF-8",Po=e=>{let{body:t}=e[$];return t===null?0:jt(t)?t.size:J.Buffer.isBuffer(t)?t.length:t&&typeof t.getLengthSync=="function"&&t.hasKnownLength&&t.hasKnownLength()?t.getLengthSync():null},Eo=async(e,{body:t})=>{t===null?e.end():await Ep(t,e)};var _r=require("node:util"),Ht=w(require("node:http"),1),Na=typeof Ht.default.validateHeaderName=="function"?Ht.default.validateHeaderName:e=>{if(!/^[\^`\-\w!#$%&'*+.|~]+$/.test(e)){let t=new TypeError(`Header name must be a valid HTTP token [${e}]`);throw Object.defineProperty(t,"code",{value:"ERR_INVALID_HTTP_TOKEN"}),t}},Ur=typeof Ht.default.validateHeaderValue=="function"?Ht.default.validateHeaderValue:(e,t)=>{if(/[^\t\u0020-\u007E\u0080-\u00FF]/.test(t)){let a=new TypeError(`Invalid character in header content ["${e}"]`);throw Object.defineProperty(a,"code",{value:"ERR_INVALID_CHAR"}),a}},Z=class e extends URLSearchParams{constructor(t){let a=[];if(t instanceof e){let r=t.raw();for(let[n,o]of Object.entries(r))a.push(...o.map(u=>[n,u]))}else if(t!=null)if(typeof t=="object"&&!_r.types.isBoxedPrimitive(t)){let r=t[Symbol.iterator];if(r==null)a.push(...Object.entries(t));else{if(typeof r!="function")throw new TypeError("Header pairs must be iterable");a=[...t].map(n=>{if(typeof n!="object"||_r.types.isBoxedPrimitive(n))throw new TypeError("Each header pair must be an iterable object");return[...n]}).map(n=>{if(n.length!==2)throw new TypeError("Each header pair must be a name/value tuple");return[...n]})}}else throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");return a=a.length>0?a.map(([r,n])=>(Na(r),Ur(r,String(n)),[String(r).toLowerCase(),String(n)])):void 0,super(a),new Proxy(this,{get(r,n,o){switch(n){case"append":case"set":return(u,i)=>(Na(u),Ur(u,String(i)),URLSearchParams.prototype[n].call(r,String(u).toLowerCase(),String(i)));case"delete":case"has":case"getAll":return u=>(Na(u),URLSearchParams.prototype[n].call(r,String(u).toLowerCase()));case"keys":return()=>(r.sort(),new Set(URLSearchParams.prototype.keys.call(r)).keys());default:return Reflect.get(r,n,o)}}})}get[Symbol.toStringTag](){return this.constructor.name}toString(){return Object.prototype.toString.call(this)}get(t){let a=this.getAll(t);if(a.length===0)return null;let r=a.join(", ");return/^content-encoding$/i.test(t)&&(r=r.toLowerCase()),r}forEach(t,a=void 0){for(let r of this.keys())Reflect.apply(t,a,[this.get(r),r,this])}*values(){for(let t of this.keys())yield this.get(t)}*entries(){for(let t of this.keys())yield[t,this.get(t)]}[Symbol.iterator](){return this.entries()}raw(){return[...this.keys()].reduce((t,a)=>(t[a]=this.getAll(a),t),{})}[Symbol.for("nodejs.util.inspect.custom")](){return[...this.keys()].reduce((t,a)=>{let r=this.getAll(a);return a==="host"?t[a]=r[0]:t[a]=r.length>1?r:r[0],t},{})}};Object.defineProperties(Z.prototype,["get","entries","forEach","values"].reduce((e,t)=>(e[t]={enumerable:!0},e),{}));function Co(e=[]){return new Z(e.reduce((t,a,r,n)=>(r%2===0&&t.push(n.slice(r,r+2)),t),[]).filter(([t,a])=>{try{return Na(t),Ur(t,String(a)),!0}catch{return!1}}))}var hp=new Set([301,302,303,307,308]),Va=e=>hp.has(e);var le=Symbol("Response internals"),oe=class e extends Me{constructor(t=null,a={}){super(t,a);let r=a.status!=null?a.status:200,n=new Z(a.headers);if(t!==null&&!n.has("Content-Type")){let o=qa(t,this);o&&n.append("Content-Type",o)}this[le]={type:"default",url:a.url,status:r,statusText:a.statusText||"",headers:n,counter:a.counter,highWaterMark:a.highWaterMark}}get type(){return this[le].type}get url(){return this[le].url||""}get status(){return this[le].status}get ok(){return this[le].status>=200&&this[le].status<300}get redirected(){return this[le].counter>0}get statusText(){return this[le].statusText}get headers(){return this[le].headers}get highWaterMark(){return this[le].highWaterMark}clone(){return new e(mt(this,this.highWaterMark),{type:this.type,url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected,size:this.size,highWaterMark:this.highWaterMark})}static redirect(t,a=302){if(!Va(a))throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');return new e(null,{headers:{location:new URL(t).toString()},status:a})}static error(){let t=new e(null,{status:0,statusText:""});return t[le].type="error",t}static json(t=void 0,a={}){let r=JSON.stringify(t);if(r===void 0)throw new TypeError("data is not JSON serializable");let n=new Z(a&&a.headers);return n.has("content-type")||n.set("content-type","application/json"),new e(r,{...a,headers:n})}get[Symbol.toStringTag](){return"Response"}};Object.defineProperties(oe.prototype,{type:{enumerable:!0},url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}});var Oo=require("node:url"),Bo=require("node:util");var ho=e=>{if(e.search)return e.search;let t=e.href.length-1,a=e.hash||(e.href[t]==="#"?"#":"");return e.href[t-a.length]==="?"?"?":""};var xo=require("node:net");function Do(e,t=!1){return e==null||(e=new URL(e),/^(about|blob|data):$/.test(e.protocol))?"no-referrer":(e.username="",e.password="",e.hash="",t&&(e.pathname="",e.search=""),e)}var _o=new Set(["","no-referrer","no-referrer-when-downgrade","same-origin","origin","strict-origin","origin-when-cross-origin","strict-origin-when-cross-origin","unsafe-url"]),Uo="strict-origin-when-cross-origin";function vo(e){if(!_o.has(e))throw new TypeError(`Invalid referrerPolicy: ${e}`);return e}function Dp(e){if(/^(http|ws)s:$/.test(e.protocol))return!0;let t=e.host.replace(/(^\[)|(]$)/g,""),a=(0,xo.isIP)(t);return a===4&&/^127\./.test(t)||a===6&&/^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(t)?!0:e.host==="localhost"||e.host.endsWith(".localhost")?!1:e.protocol==="file:"}function Rt(e){return/^about:(blank|srcdoc)$/.test(e)||e.protocol==="data:"||/^(blob|filesystem):$/.test(e.protocol)?!0:Dp(e)}function To(e,{referrerURLCallback:t,referrerOriginCallback:a}={}){if(e.referrer==="no-referrer"||e.referrerPolicy==="")return null;let r=e.referrerPolicy;if(e.referrer==="about:client")return"no-referrer";let n=e.referrer,o=Do(n),u=Do(n,!0);o.toString().length>4096&&(o=u),t&&(o=t(o)),a&&(u=a(u));let i=new URL(e.url);switch(r){case"no-referrer":return"no-referrer";case"origin":return u;case"unsafe-url":return o;case"strict-origin":return Rt(o)&&!Rt(i)?"no-referrer":u.toString();case"strict-origin-when-cross-origin":return o.origin===i.origin?o:Rt(o)&&!Rt(i)?"no-referrer":u;case"same-origin":return o.origin===i.origin?o:"no-referrer";case"origin-when-cross-origin":return o.origin===i.origin?o:u;case"no-referrer-when-downgrade":return Rt(o)&&!Rt(i)?"no-referrer":o;default:throw new TypeError(`Invalid referrerPolicy: ${r}`)}}function wo(e){let t=(e.get("referrer-policy")||"").split(/[,\s]+/),a="";for(let r of t)r&&_o.has(r)&&(a=r);return a}var L=Symbol("Request internals"),Gt=e=>typeof e=="object"&&typeof e[L]=="object",xp=(0,Bo.deprecate)(()=>{},".data is not a valid RequestInit property, use .body instead","https://github.com/node-fetch/node-fetch/issues/1000 (request)"),Ze=class e extends Me{constructor(t,a={}){let r;if(Gt(t)?r=new URL(t.url):(r=new URL(t),t={}),r.username!==""||r.password!=="")throw new TypeError(`${r} is an url with embedded credentials.`);let n=a.method||t.method||"GET";if(/^(delete|get|head|options|post|put)$/i.test(n)&&(n=n.toUpperCase()),!Gt(a)&&"data"in a&&xp(),(a.body!=null||Gt(t)&&t.body!==null)&&(n==="GET"||n==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");let o=a.body?a.body:Gt(t)&&t.body!==null?mt(t):null;super(o,{size:a.size||t.size||0});let u=new Z(a.headers||t.headers||{});if(o!==null&&!u.has("Content-Type")){let p=qa(o,this);p&&u.set("Content-Type",p)}let i=Gt(t)?t.signal:null;if("signal"in a&&(i=a.signal),i!=null&&!Io(i))throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");let s=a.referrer==null?t.referrer:a.referrer;if(s==="")s="no-referrer";else if(s){let p=new URL(s);s=/^about:(\/\/)?client$/.test(p)?"client":p}else s=void 0;this[L]={method:n,redirect:a.redirect||t.redirect||"follow",headers:u,parsedURL:r,signal:i,referrer:s},this.follow=a.follow===void 0?t.follow===void 0?20:t.follow:a.follow,this.compress=a.compress===void 0?t.compress===void 0?!0:t.compress:a.compress,this.counter=a.counter||t.counter||0,this.agent=a.agent||t.agent,this.highWaterMark=a.highWaterMark||t.highWaterMark||16384,this.insecureHTTPParser=a.insecureHTTPParser||t.insecureHTTPParser||!1,this.referrerPolicy=a.referrerPolicy||t.referrerPolicy||""}get method(){return this[L].method}get url(){return(0,Oo.format)(this[L].parsedURL)}get headers(){return this[L].headers}get redirect(){return this[L].redirect}get signal(){return this[L].signal}get referrer(){if(this[L].referrer==="no-referrer")return"";if(this[L].referrer==="client")return"about:client";if(this[L].referrer)return this[L].referrer.toString()}get referrerPolicy(){return this[L].referrerPolicy}set referrerPolicy(t){this[L].referrerPolicy=vo(t)}clone(){return new e(this)}get[Symbol.toStringTag](){return"Request"}};Object.defineProperties(Ze.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0},referrer:{enumerable:!0},referrerPolicy:{enumerable:!0}});var Lo=e=>{let{parsedURL:t}=e[L],a=new Z(e[L].headers);a.has("Accept")||a.set("Accept","*/*");let r=null;if(e.body===null&&/^(post|put)$/i.test(e.method)&&(r="0"),e.body!==null){let i=Po(e);typeof i=="number"&&!Number.isNaN(i)&&(r=String(i))}r&&a.set("Content-Length",r),e.referrerPolicy===""&&(e.referrerPolicy=Uo),e.referrer&&e.referrer!=="no-referrer"?e[L].referrer=To(e):e[L].referrer="no-referrer",e[L].referrer instanceof URL&&a.set("Referer",e.referrer),a.has("User-Agent")||a.set("User-Agent","node-fetch"),e.compress&&!a.has("Accept-Encoding")&&a.set("Accept-Encoding","gzip, deflate, br");let{agent:n}=e;typeof n=="function"&&(n=n(t));let o=ho(t),u={path:t.pathname+o,method:e.method,headers:a[Symbol.for("nodejs.util.inspect.custom")](),insecureHTTPParser:e.insecureHTTPParser,agent:n};return{parsedURL:t,options:u}};var ka=class extends De{constructor(t,a="aborted"){super(t,a)}};wa();hr();var _p=new Set(["data:","http:","https:"]);async function Fa(e,t){return new Promise((a,r)=>{let n=new Ze(e,t),{parsedURL:o,options:u}=Lo(n);if(!_p.has(o.protocol))throw new TypeError(`node-fetch cannot load ${e}. URL scheme "${o.protocol.replace(/:$/,"")}" is not supported.`);if(o.protocol==="data:"){let l=(0,va.default)(n.url),b=new oe(l,{headers:{"Content-Type":l.typeFull}});a(b);return}let i=(o.protocol==="https:"?No.default:qo.default).request,{signal:s}=n,p=null,c=()=>{let l=new ka("The operation was aborted.");r(l),n.body&&n.body instanceof X.default.Readable&&n.body.destroy(l),!(!p||!p.body)&&p.body.emit("error",l)};if(s&&s.aborted){c();return}let y=()=>{c(),g()},S=i(o.toString(),u);s&&s.addEventListener("abort",y);let g=()=>{S.abort(),s&&s.removeEventListener("abort",y)};S.on("error",l=>{r(new G(`request to ${n.url} failed, reason: ${l.message}`,"system",l)),g()}),Up(S,l=>{p&&p.body&&p.body.destroy(l)}),process.version<"v14"&&S.on("socket",l=>{let b;l.prependListener("end",()=>{b=l._eventsCount}),l.prependListener("close",d=>{if(p&&b<l._eventsCount&&!d){let I=new Error("Premature close");I.code="ERR_STREAM_PREMATURE_CLOSE",p.body.emit("error",I)}})}),S.on("response",l=>{S.setTimeout(0);let b=Co(l.rawHeaders);if(Va(l.statusCode)){let m=b.get("Location"),P=null;try{P=m===null?null:new URL(m,n.url)}catch{if(n.redirect!=="manual"){r(new G(`uri requested responds with an invalid redirect URL: ${m}`,"invalid-redirect")),g();return}}switch(n.redirect){case"error":r(new G(`uri requested responds with a redirect, redirect mode is set to error: ${n.url}`,"no-redirect")),g();return;case"manual":break;case"follow":{if(P===null)break;if(n.counter>=n.follow){r(new G(`maximum redirect reached at: ${n.url}`,"max-redirect")),g();return}let A={headers:new Z(n.headers),follow:n.follow,counter:n.counter+1,agent:n.agent,compress:n.compress,method:n.method,body:mt(n),signal:n.signal,size:n.size,referrer:n.referrer,referrerPolicy:n.referrerPolicy};if(!go(n.url,P)||!Mo(n.url,P))for(let N of["authorization","www-authenticate","cookie","cookie2"])A.headers.delete(N);if(l.statusCode!==303&&n.body&&t.body instanceof X.default.Readable){r(new G("Cannot follow redirect with body being a readable stream","unsupported-redirect")),g();return}(l.statusCode===303||(l.statusCode===301||l.statusCode===302)&&n.method==="POST")&&(A.method="GET",A.body=void 0,A.headers.delete("content-length"));let _=wo(b);_&&(A.referrerPolicy=_),a(Fa(new Ze(P,A))),g();return}default:return r(new TypeError(`Redirect option '${n.redirect}' is not a valid value of RequestRedirect`))}}s&&l.once("end",()=>{s.removeEventListener("abort",y)});let d=(0,X.pipeline)(l,new X.PassThrough,m=>{m&&r(m)});process.version<"v12.10"&&l.on("aborted",y);let I={url:n.url,status:l.statusCode,statusText:l.statusMessage,headers:b,size:n.size,counter:n.counter,highWaterMark:n.highWaterMark},R=b.get("Content-Encoding");if(!n.compress||n.method==="HEAD"||R===null||l.statusCode===204||l.statusCode===304){p=new oe(d,I),a(p);return}let f={flush:Xe.default.Z_SYNC_FLUSH,finishFlush:Xe.default.Z_SYNC_FLUSH};if(R==="gzip"||R==="x-gzip"){d=(0,X.pipeline)(d,Xe.default.createGunzip(f),m=>{m&&r(m)}),p=new oe(d,I),a(p);return}if(R==="deflate"||R==="x-deflate"){let m=(0,X.pipeline)(l,new X.PassThrough,P=>{P&&r(P)});m.once("data",P=>{(P[0]&15)===8?d=(0,X.pipeline)(d,Xe.default.createInflate(),A=>{A&&r(A)}):d=(0,X.pipeline)(d,Xe.default.createInflateRaw(),A=>{A&&r(A)}),p=new oe(d,I),a(p)}),m.once("end",()=>{p||(p=new oe(d,I),a(p))});return}if(R==="br"){d=(0,X.pipeline)(d,Xe.default.createBrotliDecompress(),m=>{m&&r(m)}),p=new oe(d,I),a(p);return}p=new oe(d,I),a(p)}),Eo(S,n).catch(r)})}function Up(e,t){let a=$t.Buffer.from(`0\r
\r
`),r=!1,n=!1,o;e.on("response",u=>{let{headers:i}=u;r=i["transfer-encoding"]==="chunked"&&!i["content-length"]}),e.on("socket",u=>{let i=()=>{if(r&&!n){let p=new Error("Premature close");p.code="ERR_STREAM_PREMATURE_CLOSE",t(p)}},s=p=>{n=$t.Buffer.compare(p.slice(-5),a)===0,!n&&o&&(n=$t.Buffer.compare(o.slice(-3),a.slice(0,3))===0&&$t.Buffer.compare(p.slice(-2),a.slice(3))===0),o=p};u.prependListener("close",i),u.on("data",s),e.on("close",()=>{u.removeListener("close",i),u.removeListener("data",s)})})}var M=w(require("graphql-tag")),Qt=M.default`
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
`,vp=M.default`
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
  ${Qt}
`,me=M.default`
  fragment UserFields on User {
    id
    avatarUrl
    name
    login
    isViewer
  }
`,Wt=M.default`
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
`,ja=M.default`
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
  ${Wt}
  ${Qt}
  ${me}
`,Tp=M.default`
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
  ${Wt}
  ${Qt}
  ${me}
`,Vo=M.default`
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
`,ko=M.default`
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
`,Fo=M.default`
  fragment RepositoryMentionFields on Repository {
    nameWithOwner
    description
    isPrivate
    isArchived
    owner {
      avatarUrl(size: 64)
    }
  }
`,wp=M.default`
  fragment ProjectViewerFields on ProjectV2View {
    id
    name
    number
  }
`,jo=M.default`
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
  ${Wt}
  ${wp}
`,zo=M.default`
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
  ${Qt}
  ${Wt}
  ${me}
`,Op=M.default`
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
  ${Qt}
  ${Wt}
  ${me}
`,Bp=M.default`
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
`,Ho=M.default`
  fragment CommitFields on Commit {
    authoredDate
    oid
    message
  }
`,vr=M.default`
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
`,Lp=M.default`
  fragment ReleaseFields on Release {
    id
    description
    name
    publishedAt
    createdAt
    tagName
    url
  }
`,qp=M.default`
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
`,Np=M.default`
  mutation createRef($input: CreateRefInput!) {
    createRef(input: $input) {
      clientMutationId
      ref {
        id
        name
      }
    }
  }
`,Vp=M.default`
  mutation deleteLinkedBranch($input: DeleteLinkedBranchInput!) {
    deleteLinkedBranch(input: $input) {
      clientMutationId
    }
  }
`,kp=M.default`
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
  ${vp}
`,Fp=M.default`
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
`,jp=M.default`
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
`,zp=M.default`
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
`,Hp=M.default`
  query issueDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...IssueDetailFields
    }
  }
  ${Tp}
`,Gp=M.default`
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
  ${ja}
`,$p=M.default`
  query issueByNumber($owner: String!, $name: String!, $issueNumber: Int!) {
    repository(owner: $owner, name: $name) {
      issue(number: $issueNumber) {
        ...IssueFields
      }
    }
  }
  ${ja}
`,Qp=M.default`
  mutation closeIssue($nodeId: ID!, $stateReason: IssueClosedStateReason!) {
    closeIssue(input: { issueId: $nodeId, stateReason: $stateReason }) {
      issue {
        id
      }
    }
  }
`,Wp=M.default`
  mutation reopenIssue($nodeId: ID!) {
    reopenIssue(input: { issueId: $nodeId }) {
      issue {
        id
      }
    }
  }
`,Kp=M.default`
  mutation changeIssueAssignees($issueId: ID!, $assigneeIds: [ID!]) {
    updateIssue(input: { id: $issueId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,Yp=M.default`
  mutation changeIssueMilestone($issueId: ID!, $milestoneId: ID) {
    updateIssue(input: { id: $issueId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,Jp=M.default`
  mutation addIssueToProject($issueId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $issueId }) {
      clientMutationId
    }
  }
`,Zp=M.default`
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
  ${ja}
`,Xp=M.default`
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
`,el=M.default`
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
`,tl=M.default`
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
`,al=M.default`
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
`,rl=M.default`
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
`,nl=M.default`
  mutation changeProjectStatus($projectId: ID!, $closed: Boolean!) {
    updateProjectV2(input: { projectId: $projectId, closed: $closed }) {
      clientMutationId
    }
  }
`,ol=M.default`
  query projectDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...ProjectFields
    }
  }
  ${jo}
`,il=M.default`
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
`,sl=M.default`
  query pullRequestDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...PullRequestDetailsFields
    }
  }
  ${Op}
`,ul=M.default`
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
`,pl=M.default`
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
`,ll=M.default`
  query pullRequestCommits($nodeId: ID!, $numberOfItems: Int!, $before: String) {
    node(id: $nodeId) {
      ...PullRequestCommitFields
    }
  }
  ${Bp}
`,cl=M.default`
  mutation closePullRequest($nodeId: ID!) {
    closePullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,yl=M.default`
  mutation reopenPullRequest($nodeId: ID!) {
    reopenPullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,dl=M.default`
  mutation markPullRequestReadyForReview($nodeId: ID!) {
    markPullRequestReadyForReview(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Sl=M.default`
  mutation addPullRequestReview($nodeId: ID!, $event: PullRequestReviewEvent, $body: String) {
    addPullRequestReview(input: { pullRequestId: $nodeId, event: $event, body: $body }) {
      pullRequestReview {
        id
      }
    }
  }
`,bl=M.default`
  mutation changePullRequestAssignees($pullRequestId: ID!, $assigneeIds: [ID!]) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,Il=M.default`
  mutation changePullRequestMilestone($pullRequestId: ID!, $milestoneId: ID) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,gl=M.default`
  mutation addPullRequestToProject($pullRequestId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $pullRequestId }) {
      clientMutationId
    }
  }
`,Ml=M.default`
  mutation requestReview($pullRequestId: ID!, $collaboratorId: ID!) {
    requestReviews(input: { pullRequestId: $pullRequestId, userIds: [$collaboratorId], union: true }) {
      clientMutationId
    }
  }
`,ml=M.default`
  mutation mergePullRequest($nodeId: ID!, $method: PullRequestMergeMethod!) {
    mergePullRequest(input: { pullRequestId: $nodeId, mergeMethod: $method }) {
      pullRequest {
        nodeId: id
      }
    }
  }
`,Rl=M.default`
  mutation addPullRequestToMergeQueue($nodeId: ID!) {
    enqueuePullRequest(input: { pullRequestId: $nodeId }) {
      __typename
    }
  }
`,Al=M.default`
  mutation removePullRequestFromMergeQueue($nodeId: ID!) {
    dequeuePullRequest(input: { id: $nodeId }) {
      __typename
    }
  }
`,fl=M.default`
  mutation enablePullRequestAutoMerge($nodeId: ID!, $mergeMethod: PullRequestMergeMethod) {
    enablePullRequestAutoMerge(input: { pullRequestId: $nodeId, mergeMethod: $mergeMethod }) {
      pullRequest {
        id
      }
    }
  }
`,Pl=M.default`
  mutation disablePullRequestAutoMerge($nodeId: ID!) {
    disablePullRequestAutoMerge(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,El=M.default`
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
`,Cl=M.default`
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
`,hl=M.default`
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
  ${vr}
`,Dl=M.default`
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
  ${vr}
`,xl=M.default`
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
`,_l=M.default`
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
`,Ul=M.default`
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
  ${me}
`,vl=M.default`
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
`,Tl=M.default`
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
  ${ja}
`,wl=M.default`
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
  ${Lp}
`,Ol=M.default`
  mutation addStar($repositoryId: ID!) {
    addStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,Bl=M.default`
  mutation removeStar($repositoryId: ID!) {
    removeStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,Ll=M.default`
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
  ${vr}
`,ql=M.default`
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
  ${jo}
`,Nl=M.default`
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
`,Vl=M.default`
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
`,kl=(e,t,a,r)=>e();function Go(e,t=kl){return{createLinkedBranch(a,r,n){return t(o=>e.request({document:qp,variables:a,requestHeaders:{...r,...o},signal:n}),"createLinkedBranch","mutation",a)},createRef(a,r,n){return t(o=>e.request({document:Np,variables:a,requestHeaders:{...r,...o},signal:n}),"createRef","mutation",a)},deleteLinkedBranch(a,r,n){return t(o=>e.request({document:Vp,variables:a,requestHeaders:{...r,...o},signal:n}),"deleteLinkedBranch","mutation",a)},searchDiscussions(a,r,n){return t(o=>e.request({document:kp,variables:a,requestHeaders:{...r,...o},signal:n}),"searchDiscussions","query",a)},getGitHubDiscussionNumber(a,r,n){return t(o=>e.request({document:Fp,variables:a,requestHeaders:{...r,...o},signal:n}),"getGitHubDiscussionNumber","query",a)},repositoryCollaboratorsForIssues(a,r,n){return t(o=>e.request({document:jp,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryCollaboratorsForIssues","query",a)},repositoryProjectsForIssues(a,r,n){return t(o=>e.request({document:zp,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryProjectsForIssues","query",a)},issueDetails(a,r,n){return t(o=>e.request({document:Hp,variables:a,requestHeaders:{...r,...o},signal:n}),"issueDetails","query",a)},searchIssues(a,r,n){return t(o=>e.request({document:Gp,variables:a,requestHeaders:{...r,...o},signal:n}),"searchIssues","query",a)},issueByNumber(a,r,n){return t(o=>e.request({document:$p,variables:a,requestHeaders:{...r,...o},signal:n}),"issueByNumber","query",a)},closeIssue(a,r,n){return t(o=>e.request({document:Qp,variables:a,requestHeaders:{...r,...o},signal:n}),"closeIssue","mutation",a)},reopenIssue(a,r,n){return t(o=>e.request({document:Wp,variables:a,requestHeaders:{...r,...o},signal:n}),"reopenIssue","mutation",a)},changeIssueAssignees(a,r,n){return t(o=>e.request({document:Kp,variables:a,requestHeaders:{...r,...o},signal:n}),"changeIssueAssignees","mutation",a)},changeIssueMilestone(a,r,n){return t(o=>e.request({document:Yp,variables:a,requestHeaders:{...r,...o},signal:n}),"changeIssueMilestone","mutation",a)},addIssueToProject(a,r,n){return t(o=>e.request({document:Jp,variables:a,requestHeaders:{...r,...o},signal:n}),"addIssueToProject","mutation",a)},createIssue(a,r,n){return t(o=>e.request({document:Zp,variables:a,requestHeaders:{...r,...o},signal:n}),"createIssue","mutation",a)},searchIssueMentions(a,r,n){return t(o=>e.request({document:Xp,variables:a,requestHeaders:{...r,...o},signal:n}),"searchIssueMentions","query",a)},searchPullRequestMentions(a,r,n){return t(o=>e.request({document:el,variables:a,requestHeaders:{...r,...o},signal:n}),"searchPullRequestMentions","query",a)},issueOrPullRequestMention(a,r,n){return t(o=>e.request({document:tl,variables:a,requestHeaders:{...r,...o},signal:n}),"issueOrPullRequestMention","query",a)},searchRepositoryMentions(a,r,n){return t(o=>e.request({document:al,variables:a,requestHeaders:{...r,...o},signal:n}),"searchRepositoryMentions","query",a)},viewerRepositoryMentions(a,r,n){return t(o=>e.request({document:rl,variables:a,requestHeaders:{...r,...o},signal:n}),"viewerRepositoryMentions","query",a)},changeProjectStatus(a,r,n){return t(o=>e.request({document:nl,variables:a,requestHeaders:{...r,...o},signal:n}),"changeProjectStatus","mutation",a)},projectDetails(a,r,n){return t(o=>e.request({document:ol,variables:a,requestHeaders:{...r,...o},signal:n}),"projectDetails","query",a)},searchPullRequests(a,r,n){return t(o=>e.request({document:il,variables:a,requestHeaders:{...r,...o},signal:n}),"searchPullRequests","query",a)},pullRequestDetails(a,r,n){return t(o=>e.request({document:sl,variables:a,requestHeaders:{...r,...o},signal:n}),"pullRequestDetails","query",a)},repositoryCollaboratorsForPullRequests(a,r,n){return t(o=>e.request({document:ul,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryCollaboratorsForPullRequests","query",a)},repositoryProjectsForPullRequests(a,r,n){return t(o=>e.request({document:pl,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryProjectsForPullRequests","query",a)},pullRequestCommits(a,r,n){return t(o=>e.request({document:ll,variables:a,requestHeaders:{...r,...o},signal:n}),"pullRequestCommits","query",a)},closePullRequest(a,r,n){return t(o=>e.request({document:cl,variables:a,requestHeaders:{...r,...o},signal:n}),"closePullRequest","mutation",a)},reopenPullRequest(a,r,n){return t(o=>e.request({document:yl,variables:a,requestHeaders:{...r,...o},signal:n}),"reopenPullRequest","mutation",a)},markPullRequestReadyForReview(a,r,n){return t(o=>e.request({document:dl,variables:a,requestHeaders:{...r,...o},signal:n}),"markPullRequestReadyForReview","mutation",a)},addPullRequestReview(a,r,n){return t(o=>e.request({document:Sl,variables:a,requestHeaders:{...r,...o},signal:n}),"addPullRequestReview","mutation",a)},changePullRequestAssignees(a,r,n){return t(o=>e.request({document:bl,variables:a,requestHeaders:{...r,...o},signal:n}),"changePullRequestAssignees","mutation",a)},changePullRequestMilestone(a,r,n){return t(o=>e.request({document:Il,variables:a,requestHeaders:{...r,...o},signal:n}),"changePullRequestMilestone","mutation",a)},addPullRequestToProject(a,r,n){return t(o=>e.request({document:gl,variables:a,requestHeaders:{...r,...o},signal:n}),"addPullRequestToProject","mutation",a)},requestReview(a,r,n){return t(o=>e.request({document:Ml,variables:a,requestHeaders:{...r,...o},signal:n}),"requestReview","mutation",a)},mergePullRequest(a,r,n){return t(o=>e.request({document:ml,variables:a,requestHeaders:{...r,...o},signal:n}),"mergePullRequest","mutation",a)},addPullRequestToMergeQueue(a,r,n){return t(o=>e.request({document:Rl,variables:a,requestHeaders:{...r,...o},signal:n}),"addPullRequestToMergeQueue","mutation",a)},removePullRequestFromMergeQueue(a,r,n){return t(o=>e.request({document:Al,variables:a,requestHeaders:{...r,...o},signal:n}),"removePullRequestFromMergeQueue","mutation",a)},enablePullRequestAutoMerge(a,r,n){return t(o=>e.request({document:fl,variables:a,requestHeaders:{...r,...o},signal:n}),"enablePullRequestAutoMerge","mutation",a)},disablePullRequestAutoMerge(a,r,n){return t(o=>e.request({document:Pl,variables:a,requestHeaders:{...r,...o},signal:n}),"disablePullRequestAutoMerge","mutation",a)},createPullRequest(a,r,n){return t(o=>e.request({document:El,variables:a,requestHeaders:{...r,...o},signal:n}),"createPullRequest","mutation",a)},initPullRequest(a,r,n){return t(o=>e.request({document:Cl,variables:a,requestHeaders:{...r,...o},signal:n}),"initPullRequest","mutation",a)},searchRepositories(a,r,n){return t(o=>e.request({document:hl,variables:a,requestHeaders:{...r,...o},signal:n}),"searchRepositories","query",a)},myLatestRepositories(a,r,n){return t(o=>e.request({document:Dl,variables:a,requestHeaders:{...r,...o},signal:n}),"myLatestRepositories","query",a)},milestonesForRepository(a,r,n){return t(o=>e.request({document:xl,variables:a,requestHeaders:{...r,...o},signal:n}),"milestonesForRepository","query",a)},commentsForPullRequest(a,r,n){return t(o=>e.request({document:_l,variables:a,requestHeaders:{...r,...o},signal:n}),"commentsForPullRequest","query",a)},dataForRepository(a,r,n){return t(o=>e.request({document:Ul,variables:a,requestHeaders:{...r,...o},signal:n}),"dataForRepository","query",a)},searchRepositoryBranches(a,r,n){return t(o=>e.request({document:vl,variables:a,requestHeaders:{...r,...o},signal:n}),"searchRepositoryBranches","query",a)},repositoryIssues(a,r,n){return t(o=>e.request({document:Tl,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryIssues","query",a)},repositoryReleases(a,r,n){return t(o=>e.request({document:wl,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryReleases","query",a)},addStar(a,r,n){return t(o=>e.request({document:Ol,variables:a,requestHeaders:{...r,...o},signal:n}),"addStar","mutation",a)},removeStar(a,r,n){return t(o=>e.request({document:Bl,variables:a,requestHeaders:{...r,...o},signal:n}),"removeStar","mutation",a)},myStarredRepositories(a,r,n){return t(o=>e.request({document:Ll,variables:a,requestHeaders:{...r,...o},signal:n}),"myStarredRepositories","query",a)},getViewer(a,r,n){return t(o=>e.request({document:ql,variables:a,requestHeaders:{...r,...o},signal:n}),"getViewer","query",a)},getViewerStats(a,r,n){return t(o=>e.request({document:Nl,variables:a,requestHeaders:{...r,...o},signal:n}),"getViewerStats","query",a)},getViewerStatsDetails(a,r,n){return t(o=>e.request({document:Vl,variables:a,requestHeaders:{...r,...o},signal:n}),"getViewerStatsDetails","query",a)}}}var Tr=null,wr=null,Ko=null,Fl=(0,Qo.getPreferenceValues)();function jl({token:e,type:t}){let a=t==="personal"?`token ${e}`:`bearer ${e}`;Ko=e,Tr=Go(new Ua("https://api.github.com/graphql",{headers:{authorization:a}})),wr=new $o.Octokit({auth:e,request:{fetch:Fa}})}var Yo=Wo.OAuthService.github({personalAccessToken:Fl.personalAccessToken,scope:"notifications repo project read:org read:user read:packages",onAuthorize:jl});function Fe(){if(!Tr||!wr)throw new Error("GitHub clients not initialized");return{github:Tr,octokit:wr,token:Ko}}var _e=require("@raycast/api");var ti=w(We());var za=require("node:child_process");var Zo=require("node:util"),Q=require("@raycast/api"),zl=w(We());function At(e){return e?.response?.errors?e.response.errors[0].message:e instanceof Error?e.message:String(e)}var Yy=[{title:"github.dev",baseUrl:"https://github.dev/",icon:{source:"github-dev.svg",tintColor:Q.Color.PrimaryText},shortcut:Q.Keyboard.Shortcut.Common.Open},{title:"VS Code for the Web",baseUrl:"https://vscode.dev/github/",icon:{source:"vscode.svg",tintColor:Q.Color.PrimaryText},shortcut:{macOS:{modifiers:["cmd"],key:"v"},Windows:{modifiers:["ctrl"],key:"v"}}},{title:"CodeSandbox",baseUrl:"https://codesandbox.io/s/github/",icon:{source:"codesandbox.svg",tintColor:Q.Color.PrimaryText}},{title:"Replit",baseUrl:"https://repl.it/github/",icon:{source:"replit.svg",tintColor:Q.Color.PrimaryText}},{title:"Gitpod",baseUrl:"https://gitpod.io/#https://github.com/",icon:{source:"gitpod.svg",tintColor:Q.Color.PrimaryText}},{title:"Glitch",baseUrl:"https://glitch.com/edit/#!/import/github/",icon:{source:"glitch.svg",tintColor:Q.Color.PrimaryText}},{title:"Sourcegraph",baseUrl:"https://sourcegraph.com/github.com/",icon:{source:"sourcegraph.svg",tintColor:Q.Color.PrimaryText},shortcut:{macOS:{modifiers:["cmd"],key:"s"},Windows:{modifiers:["ctrl"],key:"s"}}},{title:"DeepWiki",baseUrl:"https://deepwiki.com/",icon:{source:"deepwiki.png"},shortcut:{macOS:{modifiers:["cmd"],key:"d"},Windows:{modifiers:["ctrl"],key:"d"}}},{title:"VS Code Remote Repositories",baseUrl:"vscode://GitHub.remotehub/open?url=https://github.com/",icon:{source:"vscode.svg",tintColor:Q.Color.PrimaryText}}];var Hl=[{title:"Relevance",value:""},{title:"Last Update",value:"sort:updated-desc"},{title:"Name",value:"sort:name-asc"},{title:"Stars",value:"sort:stars-desc"},{title:"Forks",value:"sort:forks-desc"}],Gl=[{title:"Last Pushed",value:"pushed_at:desc"},{title:"Name",value:"name:asc"},{title:"Stars",value:"stargazers:desc"}],$l=[{title:"Recently Starred",value:"starred_at:desc"},{title:"Oldest Starred",value:"starred_at:asc"}],Jy=Hl[0].value,Zy=Gl[0].value,Xy=$l[0].value;var ed=(0,Zo.promisify)(za.execFile);var Kt="\x1B",Jo="\x07",td=new RegExp(`${Kt}][^${Jo}${Kt}]*(?:${Jo}|${Kt}\\\\)`,"g"),ad=new RegExp(`${Kt}\\[[0-9;?]*[A-Za-z]`,"g"),rd=new RegExp(`${Kt}\\([0-9A-Za-z]`,"g");var Xo=w(We());function ei(){let{github:e}=Fe(),{data:t}=(0,Xo.useCachedPromise)(async()=>(await e.getViewer()).viewer);return t}function ai(){let{github:e}=Fe(),r=["user:@me",...ei()?.organizations?.nodes?.flatMap(n=>n?.login?[`org:${n.login}`]:[])??[]].join(" ");return(0,ti.useCachedPromise)(async n=>{let u=(await Promise.allSettled(n.split(" ").map(i=>e.searchRepositories({query:`${i} archived:false sort:updated-desc`,numberOfItems:100})))).flatMap(i=>i.status==="fulfilled"?i.value.search.nodes:[]);return[...new Map(u.map(i=>[i.id,i])).values()].sort((i,s)=>new Date(s.updatedAt).getTime()-new Date(i.updatedAt).getTime())},[r])}var ft=require("react/jsx-runtime");function Or({setSelectedRepository:e,withAllRepositories:t=!0}){let{data:a}=ai();return(0,ft.jsxs)(_e.List.Dropdown,{tooltip:"Select Repository",storeValue:!0,onChange:e,children:[t?(0,ft.jsx)(_e.List.Dropdown.Item,{value:"",title:"All Repositories",icon:_e.Icon.List}):null,a&&a.length>0?(0,ft.jsx)(_e.List.Dropdown.Section,{children:a.map(r=>(0,ft.jsx)(_e.List.Dropdown.Item,{title:r.nameWithOwner,value:r.nameWithOwner,icon:{source:r.owner.avatarUrl,mask:_e.Image.Mask.Circle}},r.id))}):null]})}var ii=require("@raycast/api");var U=require("@raycast/api"),ri=require("date-fns");function ni(e){let t=e.status,a=e.conclusion;switch(t){case"queued":return{value:{source:U.Icon.Circle,tintColor:U.Color.Yellow},tooltip:"Status: In Queue"};case"in_progress":return{value:{source:U.Icon.Circle,tintColor:U.Color.Yellow},tooltip:"Status: In Progress"};case"completed":switch(a){case"success":return{value:{source:U.Icon.CheckCircle,tintColor:U.Color.Green},tooltip:`Status: Completed in ${(0,ri.differenceInSeconds)(new Date(e.updated_at),new Date(e.created_at))}s`};case"failure":case"startup_failure":return{value:{source:U.Icon.XMarkCircle,tintColor:U.Color.Red},tooltip:"Status: Failure"};case"neutral":return{value:{source:U.Icon.Circle,tintColor:U.Color.SecondaryText},tooltip:"Status: Neutral"};case"cancelled":return{value:{source:U.Icon.MinusCircle,tintColor:U.Color.SecondaryText},tooltip:"Status: Cancelled"};case"skipped":return{value:{source:U.Icon.Circle,tintColor:U.Color.SecondaryText},tooltip:"Status: Skipped"};case"timed_out":return{value:{source:U.Icon.Circle,tintColor:U.Color.SecondaryText},tooltip:"Status: Timed Out"};case"action_required":return{value:{source:U.Icon.Circle,tintColor:U.Color.SecondaryText},tooltip:"Status: Action Required"};default:return{source:U.Icon.QuestionMark,tooltip:"Status: Unknown"}}default:return{source:U.Icon.QuestionMark,tooltip:"Status: Unknown"}}}var E=require("@raycast/api");var Re=require("react/jsx-runtime");function oi({workflowRun:e,repository:t,mutateList:a}){let{octokit:r}=Fe(),[n,o]=t.split("/"),u=e.head_sha.slice(0,7),i=[e.head_sha],s=[{text:u,tooltip:`Author: ${e.head_commit?.author?.name??e.head_commit?.author?.email}`}];e.head_branch&&(s.unshift({text:e.head_branch}),i.push(e.head_branch));async function p(){await(0,E.showToast)({style:E.Toast.Style.Animated,title:"Sending re-run request"});try{await r.actions.reRunWorkflow({run_id:e.id,owner:n,repo:o}),await a(),await(0,E.showToast)({style:E.Toast.Style.Success,title:"Sent re-run request",message:"Refresh in 5-10 seconds."})}catch(g){await(0,E.showToast)({style:E.Toast.Style.Failure,title:"Failed sending re-run request",message:At(g)})}}async function c(){await(0,E.showToast)({style:E.Toast.Style.Animated,title:"Sending re-run workflow failed jobs request"});try{await r.actions.reRunWorkflowFailedJobs({run_id:e.id,owner:n,repo:o}),await a(),await(0,E.showToast)({style:E.Toast.Style.Success,title:"Sent re-run workflow failed jobs request",message:"Refresh in 5-10 seconds."})}catch(g){await(0,E.showToast)({style:E.Toast.Style.Failure,title:"Failed sending re-run workflow failed jobs request",message:At(g)})}}async function y(){await(0,E.showToast)({style:E.Toast.Style.Animated,title:"Sending cancel request"});try{await r.actions.cancelWorkflowRun({run_id:e.id,owner:n,repo:o}),await a(),await(0,E.showToast)({style:E.Toast.Style.Success,title:"Sent cancel request",message:"Refresh in 10-15 seconds."})}catch(g){await(0,E.showToast)({style:E.Toast.Style.Failure,title:"Failed sending cancel request",message:At(g)})}}async function S(){await(0,E.showToast)({style:E.Toast.Style.Animated,title:"Deleting Run"});try{await r.actions.deleteWorkflowRun({run_id:e.id,owner:n,repo:o}),await a(),await(0,E.showToast)({style:E.Toast.Style.Success,title:"Deleted run"})}catch(g){await(0,E.showToast)({style:E.Toast.Style.Failure,title:"Failed deleting run",message:At(g)})}}return(0,Re.jsxs)(E.ActionPanel,{title:u,children:[(0,Re.jsx)(E.Action.OpenInBrowser,{url:e.html_url}),e.status==="completed"?(0,Re.jsx)(E.Action,{title:"Rerun Workflow",icon:E.Icon.Clock,onAction:p}):null,e.status==="completed"&&e.conclusion!=="success"?(0,Re.jsx)(E.Action,{title:"Rerun Workflow Failed Jobs",icon:E.Icon.Redo,onAction:c,shortcut:{macOS:{modifiers:["cmd","shift"],key:"f"},Windows:{modifiers:["ctrl","shift"],key:"f"}}}):null,e.status==="queued"||e.status==="in_progress"?(0,Re.jsx)(E.Action,{title:"Cancel Run",icon:E.Icon.XMarkCircle,onAction:y}):null,(0,Re.jsx)(E.Action,{icon:E.Icon.Trash,title:"Delete Run",style:E.Action.Style.Destructive,onAction:S,shortcut:E.Keyboard.Shortcut.Common.Remove}),(0,Re.jsx)(E.ActionPanel.Section,{children:(0,Re.jsx)(E.Action,{icon:E.Icon.ArrowClockwise,title:"Refresh",onAction:a,shortcut:E.Keyboard.Shortcut.Common.Refresh})})]})}var Br=require("react/jsx-runtime");function si({workflowRun:e,repository:t,mutateList:a}){let r=e.head_sha.slice(0,7),n=[e.head_sha],o=[{text:r,tooltip:`Author: ${e.head_commit?.author?.name??e.head_commit?.author?.email}`}];return e.head_branch&&(o.unshift({tag:e.head_branch}),n.push(e.head_branch)),(0,Br.jsx)(ii.List.Item,{icon:ni(e),title:`${e.name}: ${e.head_commit?.message}`,accessories:o,keywords:n,actions:(0,Br.jsx)(oi,{workflowRun:e,repository:t,mutateList:a})})}var ui=w(We());var pi=(0,ui.withAccessToken)(Yo);var Pt=require("react/jsx-runtime"),li=25;function Ql(){let{octokit:e}=Fe(),[t,a]=(0,yi.useState)(null),{data:r,isLoading:n,mutate:o,pagination:u}=(0,ci.useCachedPromise)(s=>async({cursor:p})=>{let[c,y]=s.split("/"),S=p?Number(p):1,g=await e.actions.listWorkflowRunsForRepo({owner:c,repo:y,per_page:li,page:S}),l=S*li<g.data.total_count;return{data:g.data.workflow_runs,hasMore:l,cursor:l?String(S+1):void 0}},[t],{execute:!!t}),i=[...new Map((r??[]).map(s=>[s.id,s])).values()];return(0,Pt.jsxs)(Lr.List,{isLoading:n,searchBarPlaceholder:"Filter by title, branch, or commit",searchBarAccessory:(0,Pt.jsx)(Or,{setSelectedRepository:a,withAllRepositories:!1}),pagination:u,children:[i&&i.length>0?i.map(s=>(0,Pt.jsx)(si,{workflowRun:s,repository:s.repository.full_name,mutateList:o},s.id)):null,(0,Pt.jsx)(Lr.List.EmptyView,{title:"No recent workflow runs found"})]})}var Wl=pi(Ql);
