"use strict";var hi=Object.create;var na=Object.defineProperty;var Di=Object.getOwnPropertyDescriptor;var xi=Object.getOwnPropertyNames;var _i=Object.getPrototypeOf,Ui=Object.prototype.hasOwnProperty;var rr=(e,t,a)=>()=>{if(a)throw a[0];try{return e&&(t=e(e=0)),t}catch(r){throw a=[r],r}};var E=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(a){throw t=0,a}},rt=(e,t)=>{for(var a in t)na(e,a,{get:t[a],enumerable:!0})},ra=(e,t,a,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of xi(t))!Ui.call(e,n)&&n!==a&&na(e,n,{get:()=>t[n],enumerable:!(r=Di(t,n))||r.enumerable});return e},H=(e,t,a)=>(ra(e,t,"default"),a&&ra(a,t,"default")),V=(e,t,a)=>(a=e!=null?hi(_i(e)):{},ra(t||!e||!e.__esModule?na(a,"default",{value:e,enumerable:!0}):a,e)),vi=e=>ra(na({},"__esModule",{value:!0}),e);var Yr=E(ia=>{"use strict";Object.defineProperty(ia,"__esModule",{value:!0});ia.useDeepMemo=void 0;var nr=require("react"),Ti=require("dequal/lite");function wi(e){let t=(0,nr.useRef)(e),a=(0,nr.useRef)(0);return(0,Ti.dequal)(e,t.current)||(t.current=e,a.current+=1),(0,nr.useMemo)(()=>t.current,[a.current])}ia.useDeepMemo=wi});var he=E(sa=>{"use strict";Object.defineProperty(sa,"__esModule",{value:!0});sa.useLatest=void 0;var Oi=require("react");function Bi(e){let t=(0,Oi.useRef)(e);return t.current=e,t}sa.useLatest=Bi});var xt=E(ge=>{"use strict";var Li=ge&&ge.__createBinding||(Object.create?(function(e,t,a,r){r===void 0&&(r=a);var n=Object.getOwnPropertyDescriptor(t,a);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,n)}):(function(e,t,a,r){r===void 0&&(r=a),e[r]=t[a]})),qi=ge&&ge.__setModuleDefault||(Object.create?(function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}):function(e,t){e.default=t}),Zr=ge&&ge.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var a in e)a!=="default"&&Object.prototype.hasOwnProperty.call(e,a)&&Li(t,e,a);return qi(t,e),t};Object.defineProperty(ge,"__esModule",{value:!0});ge.showFailureToast=void 0;var Ni=Zr(require("fs")),Vi=Zr(require("path")),nt=require("@raycast/api");function ki(e,t){let a=e instanceof Error?e.message:String(e);return(0,nt.showToast)({style:nt.Toast.Style.Failure,title:t?.title??"Something went wrong",message:t?.message??a,primaryAction:t?.primaryAction??Jr(e),secondaryAction:t?.primaryAction?Jr(e):void 0})}ge.showFailureToast=ki;var Jr=e=>{let t=!0,a="[Extension Name]...",r="";try{let u=JSON.parse(Ni.readFileSync(Vi.join(nt.environment.assetsPath,"..","package.json"),"utf8"));a=`[${u.title}]...`,r=`https://raycast.com/${u.owner||u.author}/${u.name}`,(!u.owner||u.access==="public")&&(t=!1)}catch{}let n=nt.environment.isDevelopment||t,o=e instanceof Error?e?.stack||e?.message||"":String(e);return{title:n?"Copy Logs":"Report Error",onAction(u){u.hide(),n?nt.Clipboard.copy(o):(0,nt.open)(`https://github.com/raycast/extensions/issues/new?&labels=extension%2Cbug&template=extension_bug_report.yml&title=${encodeURIComponent(a)}&extension-url=${encodeURI(r)}&description=${encodeURIComponent(`#### Error:
\`\`\`
${o}
\`\`\`
`)}`)}}}});var ot=E(ua=>{"use strict";Object.defineProperty(ua,"__esModule",{value:!0});ua.usePromise=void 0;var Y=require("react"),_t=require("@raycast/api"),ji=Yr(),Oe=he(),Fi=xt();function zi(e,t,a){let r=(0,Y.useRef)(0),[n,o]=(0,Y.useState)({isLoading:!0}),u=(0,Oe.useLatest)(e),i=(0,Oe.useLatest)(a?.abortable),s=(0,Oe.useLatest)(t||[]),p=(0,Oe.useLatest)(a?.onError),c=(0,Oe.useLatest)(a?.onData),y=(0,Oe.useLatest)(a?.onWillExecute),g=(0,Oe.useLatest)(a?.failureToastOptions),m=(0,Oe.useLatest)(n.data),l=(0,Y.useRef)(),S=(0,Y.useRef)({page:0}),d=(0,Y.useRef)(!1),b=(0,Y.useRef)(!0),R=(0,Y.useRef)(50),f=(0,Y.useCallback)((...j)=>{let T=++r.current;i.current&&(i.current.current?.abort(),i.current.current=new AbortController),y.current?.(j),o(C=>({...C,isLoading:!0}));let ue=Hi(u.current)(...j);function Ie(C){return C.name=="AbortError"||T===r.current&&(p.current?p.current(C):_t.environment.launchType!==_t.LaunchType.Background&&(0,Fi.showFailureToast)(C,{title:"Failed to fetch latest data",primaryAction:{title:"Retry",onAction(K){K.hide(),l.current?.(...s.current||[])}},...g.current}),o({error:C,isLoading:!1})),C}return typeof ue=="function"?(d.current=!0,ue(S.current).then(({data:C,hasMore:K,cursor:Dt})=>(T===r.current&&(S.current&&(S.current.cursor=Dt,S.current.lastItem=C?.[C.length-1]),c.current&&c.current(C,S.current),K&&(R.current=C.length),b.current=K,o(ar=>S.current.page===0?{data:C,isLoading:!1}:{data:(ar.data||[])?.concat(C),isLoading:!1})),C),C=>(b.current=!1,Ie(C)))):(d.current=!1,ue.then(C=>(T===r.current&&(c.current&&c.current(C),o({data:C,isLoading:!1})),C),Ie))},[i,c,p,s,u,o,l,y,S,g]);l.current=f;let M=(0,Y.useCallback)(()=>{S.current={page:0};let j=s.current||[];return f(...j)},[f,s]),P=(0,Y.useCallback)(async(j,T)=>{let ue;try{if(T?.optimisticUpdate){typeof T?.rollbackOnError!="function"&&T?.rollbackOnError!==!1&&(ue=structuredClone(m.current?.value));let Ie=T.optimisticUpdate;o(C=>({...C,data:Ie(C.data)}))}return await j}catch(Ie){if(typeof T?.rollbackOnError=="function"){let C=T.rollbackOnError;o(K=>({...K,data:C(K.data)}))}else T?.optimisticUpdate&&T?.rollbackOnError!==!1&&o(C=>({...C,data:ue}));throw Ie}finally{T?.shouldRevalidateAfter!==!1&&(_t.environment.launchType===_t.LaunchType.Background||_t.environment.commandMode==="menu-bar"?await M():M())}},[M,m,o]),A=(0,Y.useCallback)(()=>{S.current.page+=1;let j=s.current||[];f(...j)},[S,s,f]);(0,Y.useEffect)(()=>{S.current={page:0},a?.execute!==!1?f(...t||[]):i.current&&i.current.current?.abort()},[(0,ji.useDeepMemo)([t,a?.execute,f]),i,S]),(0,Y.useEffect)(()=>()=>{i.current&&i.current.current?.abort()},[i]);let x=a?.execute!==!1?n.isLoading:!1,N={...n,isLoading:x},se=d.current?{pageSize:R.current,hasMore:b.current,onLoadMore:A}:void 0;return{...N,revalidate:M,mutate:P,pagination:se}}ua.usePromise=zi;function Hi(e){return e===Promise.all||e===Promise.race||e===Promise.resolve||e===Promise.reject?e.bind(Promise):e}});var Be=E(Me=>{"use strict";var Gi=Me&&Me.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Me,"__esModule",{value:!0});Me.hash=Me.reviver=Me.replacer=void 0;var $i=Gi(require("object-hash"));function Qi(e,t){let a=this[e];return a instanceof Date?`__raycast_cached_date__${a.toString()}`:Buffer.isBuffer(a)?`__raycast_cached_buffer__${a.toString("base64")}`:t}Me.replacer=Qi;function Wi(e,t){return typeof t=="string"&&t.startsWith("__raycast_cached_date__")?new Date(t.replace("__raycast_cached_date__","")):typeof t=="string"&&t.startsWith("__raycast_cached_buffer__")?Buffer.from(t.replace("__raycast_cached_buffer__",""),"base64"):t}Me.reviver=Wi;function Ki(e,t){return(0,$i.default)(e,{replacer:a=>a instanceof URLSearchParams?a.toString():a,...t})}Me.hash=Ki});var la=E(pa=>{"use strict";Object.defineProperty(pa,"__esModule",{value:!0});pa.useCachedState=void 0;var or=require("react"),Yi=require("@raycast/api"),ir=he(),Xr=Be(),Ji=Symbol("cache without namespace"),en=new Map;function Zi(e,t,a){let r=a?.cacheNamespace||Ji,n=en.get(r)||en.set(r,new Yi.Cache({namespace:a?.cacheNamespace})).get(r);if(!n)throw new Error("Missing cache");let o=(0,ir.useLatest)(e),u=(0,ir.useLatest)(t),i=(0,or.useSyncExternalStore)(n.subscribe,()=>{try{return n.get(o.current)}catch(y){console.error("Could not get Cache data:",y);return}}),s=(0,or.useMemo)(()=>{if(typeof i<"u"){if(i==="undefined")return;try{return JSON.parse(i,Xr.reviver)}catch(y){return console.warn("The cached data is corrupted",y),u.current}}else return u.current},[i,u]),p=(0,ir.useLatest)(s),c=(0,or.useCallback)(y=>{let g=typeof y=="function"?y(p.current):y;if(typeof g>"u")n.set(o.current,"undefined");else{let m=JSON.stringify(g,Xr.replacer);n.set(o.current,m)}return g},[n,o,p]);return[s,c]}pa.useCachedState=Zi});var vt=E(ca=>{"use strict";Object.defineProperty(ca,"__esModule",{value:!0});ca.useCachedPromise=void 0;var Ut=require("react"),Xi=la(),es=ot(),ts=he(),tn=Be(),it=Symbol();function as(e,t,a){let{initialData:r,keepPreviousData:n,internal_cacheKeySuffix:o,...u}=a||{},i=(0,Ut.useRef)(),[s,p]=(0,Xi.useCachedState)((0,tn.hash)(t||[])+o,it,{cacheNamespace:(0,tn.hash)(e)}),c=(0,Ut.useRef)(s!==it?s:r),y=(0,Ut.useRef)(void 0),{mutate:g,revalidate:m,...l}=(0,es.usePromise)(e,t||[],{...u,onData(f,M){y.current=M,u.onData&&u.onData(f,M),!(M&&M.page>0)&&(i.current="promise",c.current=f,p(f))}}),S,d=l.pagination;y.current&&y.current.page>0&&l.data?S=l.data:i.current==="promise"?S=c.current:n&&s!==it?(S=s,d&&(d.hasMore=!0,d.pageSize=s.length)):n&&s===it?S=c.current:s!==it?(S=s,d&&(d.hasMore=!0,d.pageSize=s.length)):S=r;let b=(0,ts.useLatest)(S),R=(0,Ut.useCallback)(async(f,M)=>{let P;try{if(M?.optimisticUpdate){typeof M?.rollbackOnError!="function"&&M?.rollbackOnError!==!1&&(P=structuredClone(b.current));let A=M.optimisticUpdate(b.current);i.current="cache",c.current=A,p(A)}return await g(f,{shouldRevalidateAfter:M?.shouldRevalidateAfter})}catch(A){if(typeof M?.rollbackOnError=="function"){let x=M.rollbackOnError(b.current);i.current="cache",c.current=x,p(x)}else M?.optimisticUpdate&&M?.rollbackOnError!==!1&&(i.current="cache",c.current=P,p(P));throw A}},[p,g,b,c,i]);return(0,Ut.useEffect)(()=>{s!==it&&(i.current="cache",c.current=s)},[s]),{data:S,isLoading:l.isLoading,error:l.error,mutate:y.current&&y.current.page>0?g:R,pagination:d,revalidate:m}}ca.useCachedPromise=as});var Sn=E((le,dn)=>{"use strict";Object.defineProperty(le,"__esModule",{value:!0});function lt(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var pe=lt(require("stream")),on=lt(require("http")),da=lt(require("url")),sn=lt(require("whatwg-url")),rs=lt(require("https")),$e=lt(require("zlib")),ns=pe.Readable,De=Symbol("buffer"),sr=Symbol("type"),wt=class e{constructor(){this[sr]="";let t=arguments[0],a=arguments[1],r=[],n=0;if(t){let u=t,i=Number(u.length);for(let s=0;s<i;s++){let p=u[s],c;p instanceof Buffer?c=p:ArrayBuffer.isView(p)?c=Buffer.from(p.buffer,p.byteOffset,p.byteLength):p instanceof ArrayBuffer?c=Buffer.from(p):p instanceof e?c=p[De]:c=Buffer.from(typeof p=="string"?p:String(p)),n+=c.length,r.push(c)}}this[De]=Buffer.concat(r);let o=a&&a.type!==void 0&&String(a.type).toLowerCase();o&&!/[^\u0020-\u007E]/.test(o)&&(this[sr]=o)}get size(){return this[De].length}get type(){return this[sr]}text(){return Promise.resolve(this[De].toString())}arrayBuffer(){let t=this[De],a=t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength);return Promise.resolve(a)}stream(){let t=new ns;return t._read=function(){},t.push(this[De]),t.push(null),t}toString(){return"[object Blob]"}slice(){let t=this.size,a=arguments[0],r=arguments[1],n,o;a===void 0?n=0:a<0?n=Math.max(t+a,0):n=Math.min(a,t),r===void 0?o=t:r<0?o=Math.max(t+r,0):o=Math.min(r,t);let u=Math.max(o-n,0),s=this[De].slice(n,n+u),p=new e([],{type:arguments[2]});return p[De]=s,p}};Object.defineProperties(wt.prototype,{size:{enumerable:!0},type:{enumerable:!0},slice:{enumerable:!0}});Object.defineProperty(wt.prototype,Symbol.toStringTag,{value:"Blob",writable:!1,enumerable:!1,configurable:!0});function q(e,t,a){Error.call(this,e),this.message=e,this.type=t,a&&(this.code=this.errno=a.code),Error.captureStackTrace(this,this.constructor)}q.prototype=Object.create(Error.prototype);q.prototype.constructor=q;q.prototype.name="FetchError";var cr;try{cr=require("encoding").convert}catch{}var _e=Symbol("Body internals"),an=pe.PassThrough;function w(e){var t=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.size;let n=r===void 0?0:r;var o=a.timeout;let u=o===void 0?0:o;e==null?e=null:un(e)?e=Buffer.from(e.toString()):Bt(e)||Buffer.isBuffer(e)||(Object.prototype.toString.call(e)==="[object ArrayBuffer]"?e=Buffer.from(e):ArrayBuffer.isView(e)?e=Buffer.from(e.buffer,e.byteOffset,e.byteLength):e instanceof pe||(e=Buffer.from(String(e)))),this[_e]={body:e,disturbed:!1,error:null},this.size=n,this.timeout=u,e instanceof pe&&e.on("error",function(i){let s=i.name==="AbortError"?i:new q(`Invalid response body while trying to fetch ${t.url}: ${i.message}`,"system",i);t[_e].error=s})}w.prototype={get body(){return this[_e].body},get bodyUsed(){return this[_e].disturbed},arrayBuffer(){return st.call(this).then(function(e){return e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength)})},blob(){let e=this.headers&&this.headers.get("content-type")||"";return st.call(this).then(function(t){return Object.assign(new wt([],{type:e.toLowerCase()}),{[De]:t})})},json(){var e=this;return st.call(this).then(function(t){try{return JSON.parse(t.toString())}catch(a){return w.Promise.reject(new q(`invalid json response body at ${e.url} reason: ${a.message}`,"invalid-json"))}})},text(){return st.call(this).then(function(e){return e.toString()})},buffer(){return st.call(this)},textConverted(){var e=this;return st.call(this).then(function(t){return os(t,e.headers)})}};Object.defineProperties(w.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0}});w.mixIn=function(e){for(let t of Object.getOwnPropertyNames(w.prototype))if(!(t in e)){let a=Object.getOwnPropertyDescriptor(w.prototype,t);Object.defineProperty(e,t,a)}};function st(){var e=this;if(this[_e].disturbed)return w.Promise.reject(new TypeError(`body used already for: ${this.url}`));if(this[_e].disturbed=!0,this[_e].error)return w.Promise.reject(this[_e].error);let t=this.body;if(t===null)return w.Promise.resolve(Buffer.alloc(0));if(Bt(t)&&(t=t.stream()),Buffer.isBuffer(t))return w.Promise.resolve(t);if(!(t instanceof pe))return w.Promise.resolve(Buffer.alloc(0));let a=[],r=0,n=!1;return new w.Promise(function(o,u){let i;e.timeout&&(i=setTimeout(function(){n=!0,u(new q(`Response timeout while trying to fetch ${e.url} (over ${e.timeout}ms)`,"body-timeout"))},e.timeout)),t.on("error",function(s){s.name==="AbortError"?(n=!0,u(s)):u(new q(`Invalid response body while trying to fetch ${e.url}: ${s.message}`,"system",s))}),t.on("data",function(s){if(!(n||s===null)){if(e.size&&r+s.length>e.size){n=!0,u(new q(`content size at ${e.url} over limit: ${e.size}`,"max-size"));return}r+=s.length,a.push(s)}}),t.on("end",function(){if(!n){clearTimeout(i);try{o(Buffer.concat(a,r))}catch(s){u(new q(`Could not create Buffer from response body for ${e.url}: ${s.message}`,"system",s))}}})})}function os(e,t){if(typeof cr!="function")throw new Error("The package `encoding` must be installed to use the textConverted() function");let a=t.get("content-type"),r="utf-8",n,o;return a&&(n=/charset=([^;]*)/i.exec(a)),o=e.slice(0,1024).toString(),!n&&o&&(n=/<meta.+?charset=(['"])(.+?)\1/i.exec(o)),!n&&o&&(n=/<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(o),n||(n=/<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(o),n&&n.pop()),n&&(n=/charset=(.*)/i.exec(n.pop()))),!n&&o&&(n=/<\?xml.+?encoding=(['"])(.+?)\1/i.exec(o)),n&&(r=n.pop(),(r==="gb2312"||r==="gbk")&&(r="gb18030")),cr(e,"UTF-8",r).toString()}function un(e){return typeof e!="object"||typeof e.append!="function"||typeof e.delete!="function"||typeof e.get!="function"||typeof e.getAll!="function"||typeof e.has!="function"||typeof e.set!="function"?!1:e.constructor.name==="URLSearchParams"||Object.prototype.toString.call(e)==="[object URLSearchParams]"||typeof e.sort=="function"}function Bt(e){return typeof e=="object"&&typeof e.arrayBuffer=="function"&&typeof e.type=="string"&&typeof e.stream=="function"&&typeof e.constructor=="function"&&typeof e.constructor.name=="string"&&/^(Blob|File)$/.test(e.constructor.name)&&/^(Blob|File)$/.test(e[Symbol.toStringTag])}function pn(e){let t,a,r=e.body;if(e.bodyUsed)throw new Error("cannot clone body after it is used");return r instanceof pe&&typeof r.getBoundary!="function"&&(t=new an,a=new an,r.pipe(t),r.pipe(a),e[_e].body=t,r=a),r}function ln(e){return e===null?null:typeof e=="string"?"text/plain;charset=UTF-8":un(e)?"application/x-www-form-urlencoded;charset=UTF-8":Bt(e)?e.type||null:Buffer.isBuffer(e)||Object.prototype.toString.call(e)==="[object ArrayBuffer]"||ArrayBuffer.isView(e)?null:typeof e.getBoundary=="function"?`multipart/form-data;boundary=${e.getBoundary()}`:e instanceof pe?null:"text/plain;charset=UTF-8"}function cn(e){let t=e.body;return t===null?0:Bt(t)?t.size:Buffer.isBuffer(t)?t.length:t&&typeof t.getLengthSync=="function"&&(t._lengthRetrievers&&t._lengthRetrievers.length==0||t.hasKnownLength&&t.hasKnownLength())?t.getLengthSync():null}function is(e,t){let a=t.body;a===null?e.end():Bt(a)?a.stream().pipe(e):Buffer.isBuffer(a)?(e.write(a),e.end()):a.pipe(e)}w.Promise=global.Promise;var yn=/[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/,yr=/[^\t\x20-\x7e\x80-\xff]/;function Tt(e){if(e=`${e}`,yn.test(e)||e==="")throw new TypeError(`${e} is not a legal HTTP header name`)}function rn(e){if(e=`${e}`,yr.test(e))throw new TypeError(`${e} is not a legal HTTP header value`)}function ut(e,t){t=t.toLowerCase();for(let a in e)if(a.toLowerCase()===t)return a}var _=Symbol("map"),ae=class e{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:void 0;if(this[_]=Object.create(null),t instanceof e){let a=t.raw(),r=Object.keys(a);for(let n of r)for(let o of a[n])this.append(n,o);return}if(t!=null)if(typeof t=="object"){let a=t[Symbol.iterator];if(a!=null){if(typeof a!="function")throw new TypeError("Header pairs must be iterable");let r=[];for(let n of t){if(typeof n!="object"||typeof n[Symbol.iterator]!="function")throw new TypeError("Each header pair must be iterable");r.push(Array.from(n))}for(let n of r){if(n.length!==2)throw new TypeError("Each header pair must be a name/value tuple");this.append(n[0],n[1])}}else for(let r of Object.keys(t)){let n=t[r];this.append(r,n)}}else throw new TypeError("Provided initializer must be an object")}get(t){t=`${t}`,Tt(t);let a=ut(this[_],t);return a===void 0?null:this[_][a].join(", ")}forEach(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:void 0,r=dr(this),n=0;for(;n<r.length;){var o=r[n];let u=o[0],i=o[1];t.call(a,i,u,this),r=dr(this),n++}}set(t,a){t=`${t}`,a=`${a}`,Tt(t),rn(a);let r=ut(this[_],t);this[_][r!==void 0?r:t]=[a]}append(t,a){t=`${t}`,a=`${a}`,Tt(t),rn(a);let r=ut(this[_],t);r!==void 0?this[_][r].push(a):this[_][t]=[a]}has(t){return t=`${t}`,Tt(t),ut(this[_],t)!==void 0}delete(t){t=`${t}`,Tt(t);let a=ut(this[_],t);a!==void 0&&delete this[_][a]}raw(){return this[_]}keys(){return ur(this,"key")}values(){return ur(this,"value")}[Symbol.iterator](){return ur(this,"key+value")}};ae.prototype.entries=ae.prototype[Symbol.iterator];Object.defineProperty(ae.prototype,Symbol.toStringTag,{value:"Headers",writable:!1,enumerable:!1,configurable:!0});Object.defineProperties(ae.prototype,{get:{enumerable:!0},forEach:{enumerable:!0},set:{enumerable:!0},append:{enumerable:!0},has:{enumerable:!0},delete:{enumerable:!0},keys:{enumerable:!0},values:{enumerable:!0},entries:{enumerable:!0}});function dr(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"key+value";return Object.keys(e[_]).sort().map(t==="key"?function(r){return r.toLowerCase()}:t==="value"?function(r){return e[_][r].join(", ")}:function(r){return[r.toLowerCase(),e[_][r].join(", ")]})}var Sr=Symbol("internal");function ur(e,t){let a=Object.create(br);return a[Sr]={target:e,kind:t,index:0},a}var br=Object.setPrototypeOf({next(){if(!this||Object.getPrototypeOf(this)!==br)throw new TypeError("Value of `this` is not a HeadersIterator");var e=this[Sr];let t=e.target,a=e.kind,r=e.index,n=dr(t,a),o=n.length;return r>=o?{value:void 0,done:!0}:(this[Sr].index=r+1,{value:n[r],done:!1})}},Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));Object.defineProperty(br,Symbol.toStringTag,{value:"HeadersIterator",writable:!1,enumerable:!1,configurable:!0});function ss(e){let t=Object.assign({__proto__:null},e[_]),a=ut(e[_],"Host");return a!==void 0&&(t[a]=t[a][0]),t}function us(e){let t=new ae;for(let a of Object.keys(e))if(!yn.test(a))if(Array.isArray(e[a]))for(let r of e[a])yr.test(r)||(t[_][a]===void 0?t[_][a]=[r]:t[_][a].push(r));else yr.test(e[a])||(t[_][a]=[e[a]]);return t}var Le=Symbol("Response internals"),ps=on.STATUS_CODES,te=class e{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};w.call(this,t,a);let r=a.status||200,n=new ae(a.headers);if(t!=null&&!n.has("Content-Type")){let o=ln(t);o&&n.append("Content-Type",o)}this[Le]={url:a.url,status:r,statusText:a.statusText||ps[r],headers:n,counter:a.counter}}get url(){return this[Le].url||""}get status(){return this[Le].status}get ok(){return this[Le].status>=200&&this[Le].status<300}get redirected(){return this[Le].counter>0}get statusText(){return this[Le].statusText}get headers(){return this[Le].headers}clone(){return new e(pn(this),{url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected})}};w.mixIn(te.prototype);Object.defineProperties(te.prototype,{url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}});Object.defineProperty(te.prototype,Symbol.toStringTag,{value:"Response",writable:!1,enumerable:!1,configurable:!0});var xe=Symbol("Request internals"),ls=da.URL||sn.URL,cs=da.parse,ys=da.format;function pr(e){return/^[a-zA-Z][a-zA-Z\d+\-.]*:/.exec(e)&&(e=new ls(e).toString()),cs(e)}var ds="destroy"in pe.Readable.prototype;function ya(e){return typeof e=="object"&&typeof e[xe]=="object"}function Ss(e){let t=e&&typeof e=="object"&&Object.getPrototypeOf(e);return!!(t&&t.constructor.name==="AbortSignal")}var Ne=class e{constructor(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r;ya(t)?r=pr(t.url):(t&&t.href?r=pr(t.href):r=pr(`${t}`),t={});let n=a.method||t.method||"GET";if(n=n.toUpperCase(),(a.body!=null||ya(t)&&t.body!==null)&&(n==="GET"||n==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");let o=a.body!=null?a.body:ya(t)&&t.body!==null?pn(t):null;w.call(this,o,{timeout:a.timeout||t.timeout||0,size:a.size||t.size||0});let u=new ae(a.headers||t.headers||{});if(o!=null&&!u.has("Content-Type")){let s=ln(o);s&&u.append("Content-Type",s)}let i=ya(t)?t.signal:null;if("signal"in a&&(i=a.signal),i!=null&&!Ss(i))throw new TypeError("Expected signal to be an instanceof AbortSignal");this[xe]={method:n,redirect:a.redirect||t.redirect||"follow",headers:u,parsedURL:r,signal:i},this.follow=a.follow!==void 0?a.follow:t.follow!==void 0?t.follow:20,this.compress=a.compress!==void 0?a.compress:t.compress!==void 0?t.compress:!0,this.counter=a.counter||t.counter||0,this.agent=a.agent||t.agent}get method(){return this[xe].method}get url(){return ys(this[xe].parsedURL)}get headers(){return this[xe].headers}get redirect(){return this[xe].redirect}get signal(){return this[xe].signal}clone(){return new e(this)}};w.mixIn(Ne.prototype);Object.defineProperty(Ne.prototype,Symbol.toStringTag,{value:"Request",writable:!1,enumerable:!1,configurable:!0});Object.defineProperties(Ne.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0}});function bs(e){let t=e[xe].parsedURL,a=new ae(e[xe].headers);if(a.has("Accept")||a.set("Accept","*/*"),!t.protocol||!t.hostname)throw new TypeError("Only absolute URLs are supported");if(!/^https?:$/.test(t.protocol))throw new TypeError("Only HTTP(S) protocols are supported");if(e.signal&&e.body instanceof pe.Readable&&!ds)throw new Error("Cancellation of streamed requests with AbortSignal is not supported in node < 8");let r=null;if(e.body==null&&/^(POST|PUT)$/i.test(e.method)&&(r="0"),e.body!=null){let o=cn(e);typeof o=="number"&&(r=String(o))}r&&a.set("Content-Length",r),a.has("User-Agent")||a.set("User-Agent","node-fetch/1.0 (+https://github.com/bitinn/node-fetch)"),e.compress&&!a.has("Accept-Encoding")&&a.set("Accept-Encoding","gzip,deflate");let n=e.agent;return typeof n=="function"&&(n=n(t)),Object.assign({},t,{method:e.method,headers:ss(a),agent:n})}function pt(e){Error.call(this,e),this.type="aborted",this.message=e,Error.captureStackTrace(this,this.constructor)}pt.prototype=Object.create(Error.prototype);pt.prototype.constructor=pt;pt.prototype.name="AbortError";var Ot=da.URL||sn.URL,nn=pe.PassThrough,Is=function(t,a){let r=new Ot(a).hostname,n=new Ot(t).hostname;return r===n||r[r.length-n.length-1]==="."&&r.endsWith(n)},gs=function(t,a){let r=new Ot(a).protocol,n=new Ot(t).protocol;return r===n};function qe(e,t){if(!qe.Promise)throw new Error("native promise missing, set fetch.Promise to your favorite alternative");return w.Promise=qe.Promise,new qe.Promise(function(a,r){let n=new Ne(e,t),o=bs(n),u=(o.protocol==="https:"?rs:on).request,i=n.signal,s=null,p=function(){let S=new pt("The user aborted a request.");r(S),n.body&&n.body instanceof pe.Readable&&lr(n.body,S),!(!s||!s.body)&&s.body.emit("error",S)};if(i&&i.aborted){p();return}let c=function(){p(),m()},y=u(o),g;i&&i.addEventListener("abort",c);function m(){y.abort(),i&&i.removeEventListener("abort",c),clearTimeout(g)}n.timeout&&y.once("socket",function(l){g=setTimeout(function(){r(new q(`network timeout at: ${n.url}`,"request-timeout")),m()},n.timeout)}),y.on("error",function(l){r(new q(`request to ${n.url} failed, reason: ${l.message}`,"system",l)),s&&s.body&&lr(s.body,l),m()}),Ms(y,function(l){i&&i.aborted||s&&s.body&&lr(s.body,l)}),parseInt(process.version.substring(1))<14&&y.on("socket",function(l){l.addListener("close",function(S){let d=l.listenerCount("data")>0;if(s&&d&&!S&&!(i&&i.aborted)){let b=new Error("Premature close");b.code="ERR_STREAM_PREMATURE_CLOSE",s.body.emit("error",b)}})}),y.on("response",function(l){clearTimeout(g);let S=us(l.headers);if(qe.isRedirect(l.statusCode)){let M=S.get("Location"),P=null;try{P=M===null?null:new Ot(M,n.url).toString()}catch{if(n.redirect!=="manual"){r(new q(`uri requested responds with an invalid redirect URL: ${M}`,"invalid-redirect")),m();return}}switch(n.redirect){case"error":r(new q(`uri requested responds with a redirect, redirect mode is set to error: ${n.url}`,"no-redirect")),m();return;case"manual":if(P!==null)try{S.set("Location",P)}catch(x){r(x)}break;case"follow":if(P===null)break;if(n.counter>=n.follow){r(new q(`maximum redirect reached at: ${n.url}`,"max-redirect")),m();return}let A={headers:new ae(n.headers),follow:n.follow,counter:n.counter+1,agent:n.agent,compress:n.compress,method:n.method,body:n.body,signal:n.signal,timeout:n.timeout,size:n.size};if(!Is(n.url,P)||!gs(n.url,P))for(let x of["authorization","www-authenticate","cookie","cookie2"])A.headers.delete(x);if(l.statusCode!==303&&n.body&&cn(n)===null){r(new q("Cannot follow redirect with body being a readable stream","unsupported-redirect")),m();return}(l.statusCode===303||(l.statusCode===301||l.statusCode===302)&&n.method==="POST")&&(A.method="GET",A.body=void 0,A.headers.delete("content-length")),a(qe(new Ne(P,A))),m();return}}l.once("end",function(){i&&i.removeEventListener("abort",c)});let d=l.pipe(new nn),b={url:n.url,status:l.statusCode,statusText:l.statusMessage,headers:S,size:n.size,timeout:n.timeout,counter:n.counter},R=S.get("Content-Encoding");if(!n.compress||n.method==="HEAD"||R===null||l.statusCode===204||l.statusCode===304){s=new te(d,b),a(s);return}let f={flush:$e.Z_SYNC_FLUSH,finishFlush:$e.Z_SYNC_FLUSH};if(R=="gzip"||R=="x-gzip"){d=d.pipe($e.createGunzip(f)),s=new te(d,b),a(s);return}if(R=="deflate"||R=="x-deflate"){let M=l.pipe(new nn);M.once("data",function(P){(P[0]&15)===8?d=d.pipe($e.createInflate()):d=d.pipe($e.createInflateRaw()),s=new te(d,b),a(s)}),M.on("end",function(){s||(s=new te(d,b),a(s))});return}if(R=="br"&&typeof $e.createBrotliDecompress=="function"){d=d.pipe($e.createBrotliDecompress()),s=new te(d,b),a(s);return}s=new te(d,b),a(s)}),is(y,n)})}function Ms(e,t){let a;e.on("socket",function(r){a=r}),e.on("response",function(r){let n=r.headers;n["transfer-encoding"]==="chunked"&&!n["content-length"]&&r.once("close",function(o){if(a&&a.listenerCount("data")>0&&!o){let i=new Error("Premature close");i.code="ERR_STREAM_PREMATURE_CLOSE",t(i)}})})}function lr(e,t){e.destroy?e.destroy(t):(e.emit("error",t),e.end())}qe.isRedirect=function(e){return e===301||e===302||e===303||e===307||e===308};qe.Promise=global.Promise;dn.exports=le=qe;Object.defineProperty(le,"__esModule",{value:!0});le.default=le;le.Headers=ae;le.Request=Ne;le.Response=te;le.FetchError=q;le.AbortError=pt});var qt=E((Qe,bn)=>{var Lt=Sn(),ms=Lt.default||Lt,Sa=function(e,t){return/^\/\//.test(e)&&(e="https:"+e),ms.call(this,e,t)};Sa.ponyfill=!0;bn.exports=Qe=Sa;Qe.fetch=Sa;Qe.Headers=Lt.Headers;Qe.Request=Lt.Request;Qe.Response=Lt.Response;Qe.default=Sa});var Ir=E(ba=>{"use strict";Object.defineProperty(ba,"__esModule",{value:!0});ba.isJSON=void 0;function Rs(e){if(e){let t=fs(e);if(!t)return!1;if(t.subtype==="json"||t.suffix==="json"||t.suffix&&/\bjson\b/i.test(t.suffix)||t.subtype&&/\bjson\b/i.test(t.subtype))return!0}return!1}ba.isJSON=Rs;var As=/^([A-Za-z0-9][A-Za-z0-9!#$&^_-]{0,126})\/([A-Za-z0-9][A-Za-z0-9!#$&^_.+-]{0,126});?$/;function fs(e){let t=e.indexOf(";"),a=t!==-1?e.slice(0,t).trim():e.trim(),r=As.exec(a.toLowerCase().toLowerCase());if(!r)return;let n=r[1],o=r[2],u,i=o.lastIndexOf("+");return i!==-1&&(u=o.substring(i+1),o=o.substring(0,i)),{type:n,subtype:o,suffix:u}}});var mn=E(Ia=>{"use strict";Object.defineProperty(Ia,"__esModule",{value:!0});Ia.useFetch=void 0;var ct=require("react"),Ps=vt(),In=he(),gn=qt(),Es=Ir(),Mn=Be();async function Cs(e){if(!e.ok)throw new Error(e.statusText);let t=e.headers.get("content-type");return t&&(0,Es.isJSON)(t)?await e.json():await e.text()}function hs(e){return{data:e,hasMore:!1}}function Ds(e,t){let{parseResponse:a,mapResult:r,initialData:n,execute:o,keepPreviousData:u,onError:i,onData:s,onWillExecute:p,failureToastOptions:c,...y}=t||{},g={initialData:n,execute:o,keepPreviousData:u,onError:i,onData:s,onWillExecute:p,failureToastOptions:c},m=(0,In.useLatest)(a||Cs),l=(0,In.useLatest)(r||hs),S=(0,ct.useRef)(),d=(0,ct.useRef)(),b=typeof e=="function"?e({page:0}):void 0;(!S.current||typeof d.current>"u"||d.current!==b)&&(S.current=e),d.current=b;let R=(0,ct.useRef)(),f=(0,ct.useCallback)((A,x)=>async N=>{let se=await(0,gn.fetch)(A(N),{signal:R.current?.signal,...x}),j=await m.current(se);return l.current?.(j)},[m,l]),M=(0,ct.useCallback)(async(A,x)=>{let N=await(0,gn.fetch)(A,{signal:R.current?.signal,...x}),se=await m.current(N);return l.current(se)?.data},[m,l]),P=(0,ct.useMemo)(()=>d.current?f:M,[d,M,f]);return(0,Ps.useCachedPromise)(P,[S.current,y],{...g,internal_cacheKeySuffix:d.current+(0,Mn.hash)(l.current)+(0,Mn.hash)(m.current),abortable:R})}Ia.useFetch=Ds});var ga=E(re=>{"use strict";var xs=re&&re.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(re,"__esModule",{value:!0});re.defaultParsing=re.handleOutput=re.getSpawnedResult=re.getSpawnedPromise=void 0;var _s=require("node:buffer"),fn=xs(require("node:stream")),Us=require("node:util"),vs=require("signal-exit");function Ts(e,{timeout:t}={}){let a=new Promise((i,s)=>{e.on("exit",(p,c)=>{i({exitCode:p,signal:c,timedOut:!1})}),e.on("error",p=>{s(p)}),e.stdin&&e.stdin.on("error",p=>{s(p)})});if(t===0||t===void 0)return a;let r,n=new Promise((i,s)=>{r=setTimeout(()=>{e.kill("SIGTERM"),s(Object.assign(new Error("Timed out"),{timedOut:!0,signal:"SIGTERM"}))},t)}),o=a.finally(()=>{clearTimeout(r)}),u=(0,vs.onExit)(()=>{e.kill()});return Promise.race([n,o]).finally(()=>u())}re.getSpawnedPromise=Ts;var gr=class extends Error{constructor(){super("The output is too big"),this.name="MaxBufferError"}},ws=(0,Us.promisify)(fn.default.pipeline);function Os(e){let{encoding:t}=e,a=t==="buffer",r=new fn.default.PassThrough({objectMode:!1});t&&t!=="buffer"&&r.setEncoding(t);let n=0,o=[];return r.on("data",u=>{o.push(u),n+=u.length}),r.getBufferedValue=()=>a?Buffer.concat(o,n):o.join(""),r.getBufferedLength=()=>n,r}async function Rn(e,t){let a=Os(t);return await new Promise((r,n)=>{let o=u=>{u&&a.getBufferedLength()<=_s.constants.MAX_LENGTH&&(u.bufferedData=a.getBufferedValue()),n(u)};(async()=>{try{await ws(e,a),r()}catch(u){o(u)}})(),a.on("data",()=>{a.getBufferedLength()>1e3*1e3*80&&o(new gr)})}),a.getBufferedValue()}async function An(e,t){e.destroy();try{return await t}catch(a){return a.bufferedData}}async function Bs({stdout:e,stderr:t},{encoding:a},r){let n=Rn(e,{encoding:a}),o=Rn(t,{encoding:a});try{return await Promise.all([r,n,o])}catch(u){return Promise.all([{error:u,exitCode:null,signal:u.signal,timedOut:u.timedOut||!1},An(e,n),An(t,o)])}}re.getSpawnedResult=Bs;function Ls(e){let t=typeof e=="string"?`
`:10,a=typeof e=="string"?"\r":13;return e[e.length-1]===t&&(e=e.slice(0,-1)),e[e.length-1]===a&&(e=e.slice(0,-1)),e}function qs(e,t){return e.stripFinalNewline?Ls(t):t}re.handleOutput=qs;var Ns=({timedOut:e,timeout:t,signal:a,exitCode:r})=>e?`timed out after ${t} milliseconds`:a!=null?`was killed with ${a}`:r!=null?`failed with exit code ${r}`:"failed",Vs=({stdout:e,stderr:t,error:a,signal:r,exitCode:n,command:o,timedOut:u,options:i,parentError:s})=>{let c=`Command ${Ns({timedOut:u,timeout:i?.timeout,signal:r,exitCode:n})}: ${o}`,y=a?`${c}
${a.message}`:c,g=[y,t,e].filter(Boolean).join(`
`);return a?a.originalMessage=a.message:a=s,a.message=g,a.shortMessage=y,a.command=o,a.exitCode=n,a.signal=r,a.stdout=e,a.stderr=t,"bufferedData"in a&&delete a.bufferedData,a};function ks({stdout:e,stderr:t,error:a,exitCode:r,signal:n,timedOut:o,command:u,options:i,parentError:s}){if(a||r!==0||n!==null)throw Vs({error:a,exitCode:r,signal:n,stdout:e,stderr:t,command:u,timedOut:o,options:i,parentError:s});return e}re.defaultParsing=ks});var En=E(yt=>{"use strict";var js=yt&&yt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(yt,"__esModule",{value:!0});yt.useExec=void 0;var Fs=js(require("node:child_process")),Pn=require("react"),zs=vt(),Hs=he(),Nt=ga(),Gs=/ +/g;function $s(e,t){if(t)return[e,...t];let a=[];for(let r of e.trim().split(Gs)){let n=a[a.length-1];n&&n.endsWith("\\")?a[a.length-1]=`${n.slice(0,-1)} ${r}`:a.push(r)}return a}function Qs(e,t,a){let{parseOutput:r,input:n,onData:o,onWillExecute:u,initialData:i,execute:s,keepPreviousData:p,onError:c,failureToastOptions:y,...g}=Array.isArray(t)?a||{}:t||{},m={initialData:i,execute:s,keepPreviousData:p,onError:c,onData:o,onWillExecute:u,failureToastOptions:y},l=(0,Pn.useRef)(),S=(0,Hs.useLatest)(r||Nt.defaultParsing),d=(0,Pn.useCallback)(async(b,R,f,M)=>{let[P,...A]=$s(b,R),x=[P,...A].join(" "),N={stripFinalNewline:!0,...f,timeout:f?.timeout||1e4,signal:l.current?.signal,encoding:f?.encoding===null?"buffer":f?.encoding||"utf8",env:{PATH:"/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin",...process.env,...f?.env}},se=Fs.default.spawn(P,A,N),j=(0,Nt.getSpawnedPromise)(se,N);M&&se.stdin.end(M);let[{error:T,exitCode:ue,signal:Ie,timedOut:C},K,Dt]=await(0,Nt.getSpawnedResult)(se,N,j),ar=(0,Nt.handleOutput)(N,K),Ci=(0,Nt.handleOutput)(N,Dt);return S.current({stdout:ar,stderr:Ci,error:T,exitCode:ue,signal:Ie,timedOut:C,command:x,options:N,parentError:new Error})},[S]);return(0,zs.useCachedPromise)(d,[e,Array.isArray(t)?t:[],g,n],{...m,abortable:l})}yt.useExec=Qs});var xn=E(dt=>{"use strict";var ma=dt&&dt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(dt,"__esModule",{value:!0});dt.useStreamJSON=void 0;var Ws=require("@raycast/api"),Cn=ma(qt()),jt=require("node:fs"),Mr=require("node:fs/promises"),Ma=require("node:path"),hn=require("node:stream/promises"),Vt=require("react"),Ks=ma(require("stream-chain")),Ys=require("stream-json"),Js=ma(require("stream-json/filters/Pick")),Zs=ma(require("stream-json/streamers/StreamArray")),Dn=Ir(),Xs=vt(),eu=Be();async function kt(e,t,a){if(typeof e=="object"||e.startsWith("http://")||e.startsWith("https://"))return await tu(e,t,a);if(e.startsWith("file://"))return await au((0,Ma.normalize)(decodeURIComponent(new URL(e).pathname)),t,a?.signal?a.signal:void 0);throw new Error("Only HTTP(S) or file URLs are supported")}async function tu(e,t,a){let r=await(0,Cn.default)(e,a);if(!r.ok)throw new Error("Failed to fetch URL");if(!(0,Dn.isJSON)(r.headers.get("content-type")))throw new Error("URL does not return JSON");if(!r.body)throw new Error("Failed to retrieve expected JSON content: Response body is missing or inaccessible.");await(0,hn.pipeline)(r.body,(0,jt.createWriteStream)(t),a?.signal?{signal:a.signal}:void 0)}async function au(e,t,a){await(0,hn.pipeline)((0,jt.createReadStream)(e),(0,jt.createWriteStream)(t),a?{signal:a}:void 0)}async function ru(e,t,a,r,n){let o=(0,Ma.join)(t,a);try{await(0,Mr.stat)(t)}catch{(0,jt.mkdirSync)(t,{recursive:!0}),await kt(e,o,n);return}if(r){await kt(e,o,n);return}let u;try{u=await(0,Mr.stat)(o)}catch{await kt(e,o,n);return}if(typeof e=="object"||e.startsWith("http://")||e.startsWith("https://")){let i=await(0,Cn.default)(e,{...n,method:"HEAD"});if(!i.ok)throw new Error("Could not fetch URL");if(!(0,Dn.isJSON)(i.headers.get("content-type")))throw new Error("URL does not return JSON");let s=Date.parse(i.headers.get("last-modified")??"");if(u.size===0||Number.isNaN(s)||s>u.mtimeMs){await kt(e,o,n);return}}else if(e.startsWith("file://"))try{(await(0,Mr.stat)((0,Ma.normalize)(decodeURIComponent(new URL(e).pathname)))).mtimeMs>u.mtimeMs&&await kt(e,o,n)}catch{throw new Error("Source file could not be read")}else throw new Error("Only HTTP(S) or file URLs are supported")}async function*nu(e,t,a,r,n,o){let u=[],i=new Ks.default([(0,jt.createReadStream)(e),r?Js.default.withParser({filter:r}):(0,Ys.parser)(),new Zs.default,s=>o?.(s.value)??s.value]);a?.addEventListener("abort",()=>{i.destroy()});try{for await(let s of i){if(a?.aborted)return[];(!n||n(s))&&u.push(s),u.length>=t&&(yield u,u=[])}}catch(s){throw i.destroy(),s}return u.length>0&&(yield u),[]}function ou(e,t){let{initialData:a,execute:r,keepPreviousData:n,onError:o,onData:u,onWillExecute:i,failureToastOptions:s,dataPath:p,filter:c,transform:y,pageSize:g=20,...m}=t??{},l=(0,Vt.useRef)(),S=(0,Vt.useRef)(),d={initialData:a,execute:r,keepPreviousData:n,onError:o,onData:u,onWillExecute:i,failureToastOptions:s},b=(0,Vt.useRef)(null),R=(0,Vt.useRef)(null),f=(0,Vt.useRef)(!1);return(0,Xs.useCachedPromise)((M,P,A,x,N,se)=>async({page:j})=>{let T=(0,eu.hash)(M)+".json",ue=Ws.environment.supportPath;if(j===0){R.current?.abort(),R.current=new AbortController;let K=(0,Ma.join)(ue,T),Dt=!!(l.current&&l.current!==M&&S.current&&S.current===K);l.current=M,S.current=K,await ru(M,ue,T,Dt,{...A,signal:R.current?.signal}),b.current=nu(K,P,R.current?.signal,x,N,se)}if(!b.current)return{hasMore:f.current,data:[]};let{value:Ie,done:C}=await b.current.next();return f.current=!C,{hasMore:f.current,data:Ie??[]}},[e,g,m,p,c,y],d)}dt.useStreamJSON=ou});var Rr=E(me=>{"use strict";var mr=me&&me.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(me,"__esModule",{value:!0});me.baseExecuteSQL=me.isPermissionError=me.PermissionError=void 0;var iu=require("node:fs"),Ra=require("node:fs/promises"),su=mr(require("node:os")),_n=mr(require("node:child_process")),Un=mr(require("node:path")),Aa=ga(),uu=Be(),Pa=class extends Error{constructor(t){super(t),this.name="PermissionError"}};me.PermissionError=Pa;function pu(e){return e instanceof Error&&e.name==="PermissionError"}me.isPermissionError=pu;async function lu(e,t,a){if(!(0,iu.existsSync)(e))throw new Error("The database does not exist");let r=a?.signal,n,o=_n.default.spawn("sqlite3",["--json","--readonly",e,t],{signal:r}),u=(0,Aa.getSpawnedPromise)(o),[{error:i,exitCode:s,signal:p},c,y]=await(0,Aa.getSpawnedResult)(o,{encoding:"utf-8"},u);if(fa(r),y.match("(5)")||y.match("(14)")){if(!n){let g=Un.default.join(su.default.tmpdir(),"useSQL",(0,uu.hash)(e));await(0,Ra.mkdir)(g,{recursive:!0}),fa(r),n=Un.default.join(g,"db.db"),await(0,Ra.copyFile)(e,n),await(0,Ra.writeFile)(n+"-shm",""),await(0,Ra.writeFile)(n+"-wal",""),fa(r)}o=_n.default.spawn("sqlite3",["--json","--readonly","--vfs","unix-none",n,t],{signal:r}),u=(0,Aa.getSpawnedPromise)(o),[{error:i,exitCode:s,signal:p},c,y]=await(0,Aa.getSpawnedResult)(o,{encoding:"utf-8"},u),fa(r)}if(i||s!==0||p!==null)throw y.includes("authorization denied")?new Pa("You do not have permission to access the database."):new Error(y||"Unknown error");return JSON.parse(c.trim()||"[]")}me.baseExecuteSQL=lu;function fa(e){if(e?.aborted){let t=new Error("aborted");throw t.name="AbortError",t}}});var Tn=E(St=>{"use strict";var cu=St&&St.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(St,"__esModule",{value:!0});St.useSQL=void 0;var Re=require("react/jsx-runtime"),F=require("@raycast/api"),yu=require("node:fs"),du=cu(require("node:os")),Ea=require("react"),Su=ot(),bu=he(),Iu=xt(),Ar=Rr();function gu(e,t,a){let{permissionPriming:r,...n}=a||{},[o,u]=(0,Ea.useState)(),i=(0,bu.useLatest)(a||{}),s=(0,Ea.useRef)(),p=(0,Ea.useCallback)(y=>{console.error(y);let g=y instanceof Error&&y.message.includes("authorization denied")?new Ar.PermissionError("You do not have permission to access the database."):y;(0,Ar.isPermissionError)(g)?u((0,Re.jsx)(Mu,{priming:i.current.permissionPriming})):i.current.onError?i.current.onError(g):F.environment.launchType!==F.LaunchType.Background&&(0,Iu.showFailureToast)(g,{title:"Cannot query the data"})},[i]),c=(0,Ea.useMemo)(()=>{if(!(0,yu.existsSync)(e))throw new Error("The database does not exist");return async(y,g)=>{let m=s.current?.signal;return(0,Ar.baseExecuteSQL)(y,g,{signal:m})}},[e]);return{...(0,Su.usePromise)(c,[e,t],{...n,onError:p}),permissionView:o}}St.useSQL=gu;var vn=parseInt(du.default.release().split(".")[0])>=22,fr=vn?"Settings":"Preferences";function Mu(e){let t=vn?{title:"Open System Settings -> Privacy",target:"x-apple.systempreferences:com.apple.preference.security?Privacy_AllFiles"}:{title:"Open System Preferences -> Security",target:"x-apple.systempreferences:com.apple.preference.security?Privacy_AllFiles"};return F.environment.commandMode==="menu-bar"?(0,Re.jsxs)(F.MenuBarExtra,{icon:F.Icon.Warning,title:F.environment.commandName,children:[(0,Re.jsx)(F.MenuBarExtra.Item,{title:"Raycast needs full disk access",tooltip:`You can revert this access in ${fr} whenever you want`}),e.priming?(0,Re.jsx)(F.MenuBarExtra.Item,{title:e.priming,tooltip:`You can revert this access in ${fr} whenever you want`}):null,(0,Re.jsx)(F.MenuBarExtra.Separator,{}),(0,Re.jsx)(F.MenuBarExtra.Item,{title:t.title,onAction:()=>(0,F.open)(t.target)})]}):(0,Re.jsx)(F.List,{children:(0,Re.jsx)(F.List.EmptyView,{icon:{source:{light:"https://raycast.com/uploads/extensions-utils-security-permissions-light.png",dark:"https://raycast.com/uploads/extensions-utils-security-permissions-dark.png"}},title:"Raycast needs full disk access.",description:`${e.priming?e.priming+`
`:""}You can revert this access in ${fr} whenever you want.`,actions:(0,Re.jsx)(F.ActionPanel,{children:(0,Re.jsx)(F.Action.Open,{...t})})})})}});var On=E(bt=>{"use strict";Object.defineProperty(bt,"__esModule",{value:!0});bt.useForm=bt.FormValidation=void 0;var Ue=require("react"),wn=he(),Er;(function(e){e.Required="required"})(Er||(bt.FormValidation=Er={}));function Pr(e,t){if(e){if(typeof e=="function")return e(t);if(e===Er.Required){let a=typeof t<"u"&&t!==null;if(a)switch(typeof t){case"string":a=t.length>0;break;case"object":Array.isArray(t)?a=t.length>0:t instanceof Date&&(a=t.getTime()>0);break;default:break}if(!a)return"The item is required"}}}function mu(e){let{onSubmit:t,validation:a,initialValues:r={}}=e,[n,o]=(0,Ue.useState)(r),[u,i]=(0,Ue.useState)({}),s=(0,Ue.useRef)({}),p=(0,wn.useLatest)(a||{}),c=(0,wn.useLatest)(t),y=(0,Ue.useCallback)(b=>{s.current[b]?.focus()},[s]),g=(0,Ue.useCallback)(async b=>{let R=!1;for(let[M,P]of Object.entries(p.current)){let A=Pr(P,b[M]);A&&(R||(R={},y(M)),R[M]=A)}if(R)return i(R),!1;let f=await c.current(b);return typeof f=="boolean"?f:!0},[p,c,y]),m=(0,Ue.useCallback)((b,R)=>{i(f=>({...f,[b]:R}))},[i]),l=(0,Ue.useCallback)(function(b,R){o(f=>({...f,[b]:typeof R=="function"?R(f[b]):R}))},[o]),S=(0,Ue.useMemo)(()=>new Proxy({},{get(b,R){let f=p.current[R],M=n[R];return{onChange(P){u[R]&&(Pr(f,P)||m(R,void 0)),l(R,P)},onBlur(P){let A=Pr(f,P.target.value);A&&m(R,A)},error:u[R],id:R,value:typeof M>"u"?null:M,ref:P=>{s.current[R]=P}}}}),[u,p,m,n,s,l]),d=(0,Ue.useCallback)(b=>{i({}),Object.entries(s.current).forEach(([R,f])=>{b?.[R]||f?.reset()}),b&&o(b)},[o,i,s]);return{handleSubmit:g,setValidationError:m,setValue:l,values:n,itemProps:S,focus:y,reset:d}}bt.useForm=mu});var Ln=E(Ca=>{"use strict";Object.defineProperty(Ca,"__esModule",{value:!0});Ca.useAI=void 0;var Bn=require("react"),Ru=require("@raycast/api"),Au=ot();function fu(e,t={}){let{creativity:a,stream:r,model:n,...o}=t,[u,i]=(0,Bn.useState)(""),s=(0,Bn.useRef)(),{isLoading:p,error:c,revalidate:y}=(0,Au.usePromise)(async(g,m,l)=>{i("");let S=Ru.AI.ask(g,{creativity:m,model:n,signal:s.current?.signal});l===!1?i(await S):(S.on("data",d=>{i(b=>b+d)}),await S)},[e,a,r],{...o,abortable:s});return{isLoading:p,data:u,error:c,revalidate:y}}Ca.useAI=fu});var Vn=E(ha=>{"use strict";Object.defineProperty(ha,"__esModule",{value:!0});ha.useFrecencySorting=void 0;var Cr=require("react"),qn=he(),Pu=la(),Eu=10,Nn=1440*60*1e3,Cu=Math.log(2)/(Eu*Nn),hu={Default:100,Embed:0,Bookmark:140};function Du(e){let t=Date.now(),a=e?e.lastVisited:0,r=e?e.frecency:0,n=(t-a)/Nn,o=hu.Default*Math.exp(-Cu*n),u=r+o;return{lastVisited:t,frecency:u}}var xu=e=>{if(process.env.NODE_ENV!=="production"&&(typeof e!="object"||!e||!("id"in e)||typeof e.id!="string"))throw new Error("Specify a key function or make sure your items have an 'id' property");return e.id};function _u(e,t){let a=(0,qn.useLatest)(t?.key||xu),r=(0,qn.useLatest)(t?.sortUnvisited),[n,o]=(0,Pu.useCachedState)(`raycast_frecency_${t?.namespace}`,{}),u=(0,Cr.useCallback)(async function(c){let y=a.current(c);o(g=>{let m=g[y],l=Du(m);return{...g,[y]:l}})},[a,o]),i=(0,Cr.useCallback)(async function(c){let y=a.current(c);o(g=>{let m={...g};return delete m[y],m})},[a,o]);return{data:(0,Cr.useMemo)(()=>e?e.sort((p,c)=>{let y=n[a.current(p)],g=n[a.current(c)];return y&&!g?-1:!y&&g?1:y&&g?g.frecency-y.frecency:r.current?r.current(p,c):0}):[],[n,e,a,r]),visitItem:u,resetRanking:i}}ha.useFrecencySorting=_u});var Fn=E(Da=>{"use strict";Object.defineProperty(Da,"__esModule",{value:!0});Da.useLocalStorage=void 0;var hr=require("@raycast/api"),kn=xt(),jn=Be(),Uu=ot();function vu(e,t){let{data:a,isLoading:r,mutate:n}=(0,Uu.usePromise)(async i=>{let s=await hr.LocalStorage.getItem(i);return typeof s<"u"?JSON.parse(s,jn.reviver):t},[e]);async function o(i){try{await n(hr.LocalStorage.setItem(e,JSON.stringify(i,jn.replacer)),{optimisticUpdate(s){return s}})}catch(s){await(0,kn.showFailureToast)(s,{title:"Failed to set value in local storage"})}}async function u(){try{await n(hr.LocalStorage.removeItem(e),{optimisticUpdate(){}})}catch(i){await(0,kn.showFailureToast)(i,{title:"Failed to remove value from local storage"})}}return{value:a,setValue:o,removeValue:u,isLoading:r}}Da.useLocalStorage=vu});var Qn=E(It=>{"use strict";Object.defineProperty(It,"__esModule",{value:!0});It.slightlyLighterColor=It.slightlyDarkerColor=void 0;function Tu(e){let t=0,a=0,r=0;if(e.length===4)t=parseInt(`${e[1]}${e[1]}`,16),a=parseInt(`${e[2]}${e[2]}`,16),r=parseInt(`${e[3]}${e[3]}`,16);else if(e.length===7)t=parseInt(`${e[1]}${e[2]}`,16),a=parseInt(`${e[3]}${e[4]}`,16),r=parseInt(`${e[5]}${e[6]}`,16);else throw new Error(`Malformed hex color: ${e}`);return{r:t,g:a,b:r}}function wu({r:e,g:t,b:a}){let r=e.toString(16),n=t.toString(16),o=a.toString(16);return r.length===1&&(r=`0${r}`),n.length===1&&(n=`0${n}`),o.length===1&&(o=`0${o}`),`#${r}${n}${o}`}function Ou({r:e,g:t,b:a}){e/=255,t/=255,a/=255;let r=Math.min(e,t,a),n=Math.max(e,t,a),o=n-r,u=0,i=0,s=0;return o===0?u=0:n===e?u=(t-a)/o%6:n===t?u=(a-e)/o+2:u=(e-t)/o+4,u=Math.round(u*60),u<0&&(u+=360),s=(n+r)/2,i=o===0?0:o/(1-Math.abs(2*s-1)),i=+(i*100).toFixed(1),s=+(s*100).toFixed(1),{h:u,s:i,l:s}}function Bu({h:e,s:t,l:a}){t/=100,a/=100;let r=(1-Math.abs(2*a-1))*t,n=r*(1-Math.abs(e/60%2-1)),o=a-r/2,u=0,i=0,s=0;return e>=0&&e<60?(u=r,i=n,s=0):e>=60&&e<120?(u=n,i=r,s=0):e>=120&&e<180?(u=0,i=r,s=n):e>=180&&e<240?(u=0,i=n,s=r):e>=240&&e<300?(u=n,i=0,s=r):e>=300&&e<360&&(u=r,i=0,s=n),u=Math.round((u+o)*255),i=Math.round((i+o)*255),s=Math.round((s+o)*255),{r:u,g:i,b:s}}function zn(e){return Ou(Tu(e))}function Hn(e){return wu(Bu(e))}function Gn(e,t,a){return t<a?e<t?t:e>a?a:e:e<a?a:e>t?t:e}var $n=12;function Lu(e){let t=zn(e);return Hn({h:t.h,s:t.s,l:Gn(t.l-$n,0,100)})}It.slightlyDarkerColor=Lu;function qu(e){let t=zn(e);return Hn({h:t.h,s:t.s,l:Gn(t.l+$n,0,100)})}It.slightlyLighterColor=qu});var Yn=E(xa=>{"use strict";Object.defineProperty(xa,"__esModule",{value:!0});xa.getAvatarIcon=void 0;var Wn=Qn();function gt(e,t){let a=e.charCodeAt(t);if(Number.isNaN(a))return["",t];if(a<55296||a>57343)return[e.charAt(t),t];if(55296<=a&&a<=56319){if(e.length<=t+1)throw new Error("High surrogate without following low surrogate");let n=e.charCodeAt(t+1);if(56320>n||n>57343)throw new Error("High surrogate without following low surrogate");return[e.charAt(t)+e.charAt(t+1),t+1]}if(t===0)throw new Error("Low surrogate without preceding high surrogate");let r=e.charCodeAt(t-1);if(55296>r||r>56319)throw new Error("Low surrogate without preceding high surrogate");return[e.charAt(t+1),t+1]}var Kn=["#DC829A","#D64854","#D47600","#D36CDD","#52A9E4","#7871E8","#70920F","#43B93A","#EB6B3E","#26B795","#D85A9B","#A067DC","#BD9500","#5385D9"];function Nu(e,t){let a=e.trim().split(" "),r;if(a.length==1&&gt(a[0],0)[0])r=gt(a[0],0)[0];else if(a.length>1){let s=gt(a[0],0)[0]||"",p=gt(a[a.length-1],0)[0]??"";r=s+p}else r="";let n;if(t?.background)n=t?.background;else{let s=0,[p,c]=gt(r,0);for(;p;)s+=p.charCodeAt(0),[p,c]=gt(r,c+1);let y=s%Kn.length;n=Kn[y]}let u=50-0;return`data:image/svg+xml,${`<svg width="100px" height="100px">
  ${t?.gradient!==!1?`<defs>
      <linearGradient id="Gradient" x1="0.25" x2="0.75" y1="0" y2="1">
        <stop offset="0%" stop-color="${(0,Wn.slightlyLighterColor)(n)}"/>
        <stop offset="50%" stop-color="${n}"/>
        <stop offset="100%" stop-color="${(0,Wn.slightlyDarkerColor)(n)}"/>
      </linearGradient>
  </defs>`:""}
      <circle cx="50" cy="50" r="${u}" fill="${t?.gradient!==!1?"url(#Gradient)":n}" />
      ${r?`<text x="50" y="80" font-size="${u-1}" font-family="Inter, sans-serif" text-anchor="middle" fill="white">${r.toUpperCase()}</text>`:""}
    </svg>
  `.replaceAll(`
`,"")}`}xa.getAvatarIcon=Nu});var Zn=E(_a=>{"use strict";Object.defineProperty(_a,"__esModule",{value:!0});_a.getFavicon=void 0;var Jn=require("@raycast/api"),Vu=require("url");function ku(e,t){try{let r=(typeof e=="string"?new Vu.URL(e):e).hostname;return{source:`https://www.google.com/s2/favicons?sz=${t?.size??64}&domain=${r}`,fallback:t?.fallback??Jn.Icon.Link,mask:t?.mask}}catch(a){return console.error(a),Jn.Icon.Link}}_a.getFavicon=ku});var to=E(Ua=>{"use strict";Object.defineProperty(Ua,"__esModule",{value:!0});Ua.getProgressIcon=void 0;var Xn=require("@raycast/api");function eo(e,t,a,r){let n=(r-90)*Math.PI/180;return{x:e+a*Math.cos(n),y:t+a*Math.sin(n)}}function ju(e,t,a,r,n){let o=eo(e,t,a,n),u=eo(e,t,a,r),i=n-r<=180?"0":"1";return["M",o.x,o.y,"A",a,a,0,i,0,u.x,u.y].join(" ")}function Fu(e,t=Xn.Color.Red,a){let r=a?.background||(Xn.environment.appearance==="light"?"black":"white"),n=a?.backgroundOpacity||.1,o=10,i=50-5-o/2;return`data:image/svg+xml,${`<svg width="100px" height="100px">
      <circle cx="50" cy="50" r="${i}" stroke-width="${o}" stroke="${e<1?r:t}" opacity="${e<1?n:"1"}" fill="none" />
      ${e>0&&e<1?`<path d="${ju(50,50,i,0,e*360)}" stroke="${t}" stroke-width="${o}" fill="none" />`:""}
    </svg>
  `.replaceAll(`
`,"")}`}Ua.getProgressIcon=Fu});var ao=E(ve=>{"use strict";var zu=ve&&ve.__createBinding||(Object.create?(function(e,t,a,r){r===void 0&&(r=a);var n=Object.getOwnPropertyDescriptor(t,a);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,n)}):(function(e,t,a,r){r===void 0&&(r=a),e[r]=t[a]})),Dr=ve&&ve.__exportStar||function(e,t){for(var a in e)a!=="default"&&!Object.prototype.hasOwnProperty.call(t,a)&&zu(t,e,a)};Object.defineProperty(ve,"__esModule",{value:!0});Dr(Yn(),ve);Dr(Zn(),ve);Dr(to(),ve)});var ro=E(k=>{"use strict";Object.defineProperty(k,"__esModule",{value:!0});k.zoomService=k.slackService=k.linearService=k.jiraService=k.googleService=k.githubService=k.asanaService=void 0;var z=require("@raycast/api"),We=xr(),va={asana:"1191201745684312",github:"7235fe8d42157f1f38c0",linear:"c8ff37b9225c3c9aefd7d66ea0e5b6f1",slack:"851756884692.5546927290212"},Ve=e=>`data:image/svg+xml,${e}`,Ke={asana:Ve('<svg xmlns="http://www.w3.org/2000/svg" width="251" height="232" fill="none"><path fill="#F06A6A" d="M179.383 54.373c0 30.017-24.337 54.374-54.354 54.374-30.035 0-54.373-24.338-54.373-54.374C70.656 24.338 94.993 0 125.029 0c30.017 0 54.354 24.338 54.354 54.373ZM54.393 122.33C24.376 122.33.02 146.668.02 176.685c0 30.017 24.337 54.373 54.373 54.373 30.035 0 54.373-24.338 54.373-54.373 0-30.017-24.338-54.355-54.373-54.355Zm141.253 0c-30.035 0-54.373 24.338-54.373 54.374 0 30.035 24.338 54.373 54.373 54.373 30.017 0 54.374-24.338 54.374-54.373 0-30.036-24.338-54.374-54.374-54.374Z"/></svg>'),github:{source:Ve('<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>'),tintColor:z.Color.PrimaryText},google:Ve('<svg xmlns="http://www.w3.org/2000/svg" style="display:block" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/><path fill="none" d="M0 0h48v48H0z"/></svg>'),jira:Ve('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="2361" height="2500" viewBox="2.59 0 214.091 224"><linearGradient id="a" x1="102.4" x2="56.15" y1="218.63" y2="172.39" gradientTransform="matrix(1 0 0 -1 0 264)" gradientUnits="userSpaceOnUse"><stop offset=".18" stop-color="#0052cc"/><stop offset="1" stop-color="#2684ff"/></linearGradient><linearGradient xlink:href="#a" id="b" x1="114.65" x2="160.81" y1="85.77" y2="131.92"/><path fill="#2684ff" d="M214.06 105.73 117.67 9.34 108.33 0 35.77 72.56 2.59 105.73a8.89 8.89 0 0 0 0 12.54l66.29 66.29L108.33 224l72.55-72.56 1.13-1.12 32.05-32a8.87 8.87 0 0 0 0-12.59zm-105.73 39.39L75.21 112l33.12-33.12L141.44 112z"/><path fill="url(#a)" d="M108.33 78.88a55.75 55.75 0 0 1-.24-78.61L35.62 72.71l39.44 39.44z"/><path fill="url(#b)" d="m141.53 111.91-33.2 33.21a55.77 55.77 0 0 1 0 78.86L181 151.35z"/></svg>'),linear:{source:{light:Ve('<svg xmlns="http://www.w3.org/2000/svg" fill="#222326" width="200" height="200" viewBox="0 0 100 100"><path d="M1.22541 61.5228c-.2225-.9485.90748-1.5459 1.59638-.857L39.3342 97.1782c.6889.6889.0915 1.8189-.857 1.5964C20.0515 94.4522 5.54779 79.9485 1.22541 61.5228ZM.00189135 46.8891c-.01764375.2833.08887215.5599.28957165.7606L52.3503 99.7085c.2007.2007.4773.3075.7606.2896 2.3692-.1476 4.6938-.46 6.9624-.9259.7645-.157 1.0301-1.0963.4782-1.6481L2.57595 39.4485c-.55186-.5519-1.49117-.2863-1.648174.4782-.465915 2.2686-.77832 4.5932-.92588465 6.9624ZM4.21093 29.7054c-.16649.3738-.08169.8106.20765 1.1l64.77602 64.776c.2894.2894.7262.3742 1.1.2077 1.7861-.7956 3.5171-1.6927 5.1855-2.684.5521-.328.6373-1.0867.1832-1.5407L8.43566 24.3367c-.45409-.4541-1.21271-.3689-1.54074.1832-.99132 1.6684-1.88843 3.3994-2.68399 5.1855ZM12.6587 18.074c-.3701-.3701-.393-.9637-.0443-1.3541C21.7795 6.45931 35.1114 0 49.9519 0 77.5927 0 100 22.4073 100 50.0481c0 14.8405-6.4593 28.1724-16.7199 37.3375-.3903.3487-.984.3258-1.3542-.0443L12.6587 18.074Z"/></svg>'),dark:Ve('<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="200" height="200" viewBox="0 0 100 100"><path d="M1.22541 61.5228c-.2225-.9485.90748-1.5459 1.59638-.857L39.3342 97.1782c.6889.6889.0915 1.8189-.857 1.5964C20.0515 94.4522 5.54779 79.9485 1.22541 61.5228ZM.00189135 46.8891c-.01764375.2833.08887215.5599.28957165.7606L52.3503 99.7085c.2007.2007.4773.3075.7606.2896 2.3692-.1476 4.6938-.46 6.9624-.9259.7645-.157 1.0301-1.0963.4782-1.6481L2.57595 39.4485c-.55186-.5519-1.49117-.2863-1.648174.4782-.465915 2.2686-.77832 4.5932-.92588465 6.9624ZM4.21093 29.7054c-.16649.3738-.08169.8106.20765 1.1l64.77602 64.776c.2894.2894.7262.3742 1.1.2077 1.7861-.7956 3.5171-1.6927 5.1855-2.684.5521-.328.6373-1.0867.1832-1.5407L8.43566 24.3367c-.45409-.4541-1.21271-.3689-1.54074.1832-.99132 1.6684-1.88843 3.3994-2.68399 5.1855ZM12.6587 18.074c-.3701-.3701-.393-.9637-.0443-1.3541C21.7795 6.45931 35.1114 0 49.9519 0 77.5927 0 100 22.4073 100 50.0481c0 14.8405-6.4593 28.1724-16.7199 37.3375-.3903.3487-.984.3258-1.3542-.0443L12.6587 18.074Z" /></svg>')}},slack:Ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="73 73 124 124"><style>.st0{fill:#e01e5a}.st1{fill:#36c5f0}.st2{fill:#2eb67d}.st3{fill:#ecb22e}</style><path d="M99.4 151.2c0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9h12.9v12.9zM105.9 151.2c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v32.3c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9v-32.3z" class="st0"/><path d="M118.8 99.4c-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v12.9h-12.9zM118.8 105.9c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H86.5c-7.1 0-12.9-5.8-12.9-12.9s5.8-12.9 12.9-12.9h32.3z" class="st1"/><path d="M170.6 118.8c0-7.1 5.8-12.9 12.9-12.9 7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9h-12.9v-12.9zM164.1 118.8c0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9V86.5c0-7.1 5.8-12.9 12.9-12.9 7.1 0 12.9 5.8 12.9 12.9v32.3z" class="st2"/><path d="M151.2 170.6c7.1 0 12.9 5.8 12.9 12.9 0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9v-12.9h12.9zM151.2 164.1c-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9h32.3c7.1 0 12.9 5.8 12.9 12.9 0 7.1-5.8 12.9-12.9 12.9h-32.3z" class="st3"/></svg>'),zoom:Ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 351.845 80"><path d="M73.786 78.835H10.88A10.842 10.842 0 0 1 .833 72.122a10.841 10.841 0 0 1 2.357-11.85L46.764 16.7h-31.23C6.954 16.699 0 9.744 0 1.165h58.014c4.414 0 8.357 2.634 10.046 6.712a10.843 10.843 0 0 1-2.356 11.85L22.13 63.302h36.122c8.58 0 15.534 6.955 15.534 15.534Zm278.059-48.544C351.845 13.588 338.256 0 321.553 0c-8.934 0-16.975 3.89-22.524 10.063C293.48 3.89 285.44 0 276.505 0c-16.703 0-30.291 13.588-30.291 30.291v48.544c8.579 0 15.534-6.955 15.534-15.534v-33.01c0-8.137 6.62-14.757 14.757-14.757s14.757 6.62 14.757 14.757v33.01c0 8.58 6.955 15.534 15.534 15.534V30.291c0-8.137 6.62-14.757 14.757-14.757s14.758 6.62 14.758 14.757v33.01c0 8.58 6.954 15.534 15.534 15.534V30.291ZM238.447 40c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.908-40 40-40 40 17.909 40 40Zm-15.534 0c0-13.512-10.954-24.466-24.466-24.466S173.98 26.488 173.98 40s10.953 24.466 24.466 24.466S222.913 53.512 222.913 40Zm-70.68 0c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.909-40 40-40 40 17.909 40 40Zm-15.534 0c0-13.512-10.954-24.466-24.466-24.466S87.767 26.488 87.767 40s10.954 24.466 24.466 24.466S136.699 53.512 136.699 40Z" style="fill:#0b5cff"/></svg>')},Hu=e=>new We.OAuthService({client:new z.OAuth.PKCEClient({redirectMethod:z.OAuth.RedirectMethod.Web,providerName:"Asana",providerIcon:Ke.asana,providerId:"asana",description:"Connect your Asana account"}),clientId:e.clientId??va.asana,authorizeUrl:e.authorizeUrl??"https://asana.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://asana.oauth.raycast.com/token",refreshTokenUrl:e.refreshTokenUrl??"https://asana.oauth.raycast.com/refresh-token",scope:e.scope,personalAccessToken:e.personalAccessToken,onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});k.asanaService=Hu;var Gu=e=>new We.OAuthService({client:new z.OAuth.PKCEClient({redirectMethod:z.OAuth.RedirectMethod.Web,providerName:"GitHub",providerIcon:Ke.github,providerId:"github",description:"Connect your GitHub account"}),clientId:e.clientId??va.github,authorizeUrl:e.authorizeUrl??"https://github.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://github.oauth.raycast.com/token",refreshTokenUrl:e.refreshTokenUrl??"https://github.oauth.raycast.com/refresh-token",scope:e.scope,personalAccessToken:e.personalAccessToken,onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});k.githubService=Gu;var $u=e=>new We.OAuthService({client:new z.OAuth.PKCEClient({redirectMethod:z.OAuth.RedirectMethod.AppURI,providerName:"Google",providerIcon:Ke.google,providerId:"google",description:"Connect your Google account"}),clientId:e.clientId,authorizeUrl:e.authorizeUrl??"https://accounts.google.com/o/oauth2/v2/auth",tokenUrl:e.tokenUrl??"https://oauth2.googleapis.com/token",refreshTokenUrl:e.tokenUrl,scope:e.scope,personalAccessToken:e.personalAccessToken,bodyEncoding:e.bodyEncoding??"url-encoded",onAuthorize:e.onAuthorize,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});k.googleService=$u;var Qu=e=>new We.OAuthService({client:new z.OAuth.PKCEClient({redirectMethod:z.OAuth.RedirectMethod.Web,providerName:"Jira",providerIcon:Ke.jira,providerId:"jira",description:"Connect your Jira account"}),clientId:e.clientId,authorizeUrl:e.authorizeUrl??"https://auth.atlassian.com/authorize",tokenUrl:e.tokenUrl??"https://auth.atlassian.com/oauth/token",refreshTokenUrl:e.refreshTokenUrl,scope:e.scope,personalAccessToken:e.personalAccessToken,onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});k.jiraService=Qu;var Wu=e=>new We.OAuthService({client:new z.OAuth.PKCEClient({redirectMethod:z.OAuth.RedirectMethod.Web,providerName:"Linear",providerIcon:Ke.linear,providerId:"linear",description:"Connect your Linear account"}),clientId:e.clientId??va.linear,authorizeUrl:e.authorizeUrl??"https://linear.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://linear.oauth.raycast.com/token",refreshTokenUrl:e.refreshTokenUrl??"https://linear.oauth.raycast.com/refresh-token",scope:e.scope,extraParameters:{actor:"user"},onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});k.linearService=Wu;var Ku=e=>new We.OAuthService({client:new z.OAuth.PKCEClient({redirectMethod:z.OAuth.RedirectMethod.Web,providerName:"Slack",providerIcon:Ke.slack,providerId:"slack",description:"Connect your Slack account"}),clientId:e.clientId??va.slack,authorizeUrl:e.authorizeUrl??"https://slack.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://slack.oauth.raycast.com/token",refreshTokenUrl:e.tokenUrl??"https://slack.oauth.raycast.com/refresh-token",scope:"",extraParameters:{user_scope:e.scope},personalAccessToken:e.personalAccessToken,bodyEncoding:e.tokenUrl?e.bodyEncoding??"url-encoded":"json",onAuthorize:e.onAuthorize,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser??(t=>({access_token:t.authed_user.access_token,scope:t.authed_user.scope}))});k.slackService=Ku;var Yu=e=>new We.OAuthService({client:new z.OAuth.PKCEClient({redirectMethod:z.OAuth.RedirectMethod.Web,providerName:"Zoom",providerIcon:Ke.zoom,providerId:"zoom",description:"Connect your Zoom account"}),clientId:e.clientId,authorizeUrl:e.authorizeUrl??"https://zoom.us/oauth/authorize",tokenUrl:e.tokenUrl??"https://zoom.us/oauth/token",refreshTokenUrl:e.refreshTokenUrl,scope:e.scope,personalAccessToken:e.personalAccessToken,bodyEncoding:e.bodyEncoding??"url-encoded",onAuthorize:e.onAuthorize,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});k.zoomService=Yu});var xr=E(Mt=>{"use strict";var Ju=Mt&&Mt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Mt,"__esModule",{value:!0});Mt.OAuthService=void 0;var no=Ju(qt()),Ye=ro(),Ae=class{constructor(t){this.clientId=t.clientId,this.scope=Array.isArray(t.scope)?t.scope.join(" "):t.scope,this.personalAccessToken=t.personalAccessToken,this.bodyEncoding=t.bodyEncoding,this.client=t.client,this.extraParameters=t.extraParameters,this.authorizeUrl=t.authorizeUrl,this.tokenUrl=t.tokenUrl,this.refreshTokenUrl=t.refreshTokenUrl,this.onAuthorize=t.onAuthorize,this.tokenResponseParser=t.tokenResponseParser??(a=>a),this.tokenRefreshResponseParser=t.tokenRefreshResponseParser??(a=>a),this.authorize=this.authorize.bind(this)}async authorize(){let t=await this.client.getTokens();if(t?.accessToken){if(t.refreshToken&&t.isExpired()){let o=await this.refreshTokens({token:t.refreshToken});if(o)return await this.client.setTokens(o),o.access_token}return t.accessToken}let a=await this.client.authorizationRequest({endpoint:this.authorizeUrl,clientId:this.clientId,scope:this.scope,extraParameters:this.extraParameters}),{authorizationCode:r}=await this.client.authorize(a),n=await this.fetchTokens({authRequest:a,authorizationCode:r});return await this.client.setTokens(n),n.access_token}async fetchTokens({authRequest:t,authorizationCode:a}){let r;if(this.bodyEncoding==="url-encoded"){let u=new URLSearchParams;u.append("client_id",this.clientId),u.append("code",a),u.append("code_verifier",t.codeVerifier),u.append("grant_type","authorization_code"),u.append("redirect_uri",t.redirectURI),r={body:u}}else r={body:JSON.stringify({client_id:this.clientId,code:a,code_verifier:t.codeVerifier,grant_type:"authorization_code",redirect_uri:t.redirectURI}),headers:{"Content-Type":"application/json"}};let n=await(0,no.default)(this.tokenUrl,{method:"POST",...r});if(!n.ok){let u=await n.text();throw console.error("fetch tokens error:",u),new Error(`Error while fetching tokens: ${n.status} (${n.statusText})
${u}`)}let o=this.tokenResponseParser(await n.json());return Array.isArray(o.scope)?{...o,scope:o.scope.join(" ")}:o}async refreshTokens({token:t}){let a;if(this.bodyEncoding==="url-encoded"){let n=new URLSearchParams;n.append("client_id",this.clientId),n.append("refresh_token",t),n.append("grant_type","refresh_token"),a={body:n}}else a={body:JSON.stringify({client_id:this.clientId,refresh_token:t,grant_type:"refresh_token"}),headers:{"Content-Type":"application/json"}};let r=await(0,no.default)(this.refreshTokenUrl??this.tokenUrl,{method:"POST",...a});if(r.ok){let n=this.tokenRefreshResponseParser(await r.json());return n.refresh_token=n.refresh_token??t,n}else{let n=await r.text();console.error("refresh tokens error:",n),this.client.description=`${this.client.providerName} needs you to sign-in again. Press \u23CE or click the button below to continue.`,await this.client.removeTokens(),await this.authorize()}}};Mt.OAuthService=Ae;Ae.asana=Ye.asanaService;Ae.github=Ye.githubService;Ae.google=Ye.googleService;Ae.jira=Ye.jiraService;Ae.linear=Ye.linearService;Ae.slack=Ye.slackService;Ae.zoom=Ye.zoomService});var oo=E(mt=>{"use strict";Object.defineProperty(mt,"__esModule",{value:!0});mt.getAccessToken=mt.withAccessToken=void 0;var Zu=require("react/jsx-runtime"),Xu=require("@raycast/api"),ke=null,Je=null,_r=null,Ur=null,vr=null;function ep(e){return Xu.environment.commandMode==="no-view"?t=>async r=>{if(!ke){ke=e.personalAccessToken??await e.authorize(),Je=e.personalAccessToken?"personal":"oauth";let n=(await e.client?.getTokens())?.idToken;e.onAuthorize&&await Promise.resolve(e.onAuthorize({token:ke,type:Je,idToken:n}))}return t(r)}:t=>{let a=r=>{e.personalAccessToken?(ke=e.personalAccessToken,Je="personal"):(_r||(_r=Tr(e.authorize())),ke=_r.read(),Je="oauth");let n;return e.client&&(Ur||(Ur=Tr(e.client.getTokens())),n=Ur.read()?.idToken),!vr&&e.onAuthorize&&(vr=Tr(Promise.resolve(e.onAuthorize({token:ke,type:Je,idToken:n})))),vr?.read(),(0,Zu.jsx)(t,{...r})};return a.displayName=`withAccessToken(${t.displayName||t.name})`,a}}mt.withAccessToken=ep;function tp(){if(!ke||!Je)throw new Error("getAccessToken must be used when authenticated (eg. used inside `withAccessToken`)");return{token:ke,type:Je}}mt.getAccessToken=tp;function Tr(e){let t="pending",a,r=e.then(o=>{t="success",a=o},o=>{t="error",a=o});return{read:()=>{switch(t){case"pending":throw r;case"error":throw a;default:return a}}}}});var so=E(je=>{"use strict";var ap=je&&je.__createBinding||(Object.create?(function(e,t,a,r){r===void 0&&(r=a);var n=Object.getOwnPropertyDescriptor(t,a);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,n)}):(function(e,t,a,r){r===void 0&&(r=a),e[r]=t[a]})),io=je&&je.__exportStar||function(e,t){for(var a in e)a!=="default"&&!Object.prototype.hasOwnProperty.call(t,a)&&ap(t,e,a)};Object.defineProperty(je,"__esModule",{value:!0});io(xr(),je);io(oo(),je)});var yo=E(ne=>{"use strict";var uo=ne&&ne.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ne,"__esModule",{value:!0});ne.createDeeplink=ne.createExtensionDeeplink=ne.createScriptCommandDeeplink=ne.DeeplinkType=void 0;var Or=require("@raycast/api"),rp=uo(require("node:fs")),np=uo(require("node:path")),wr;(function(e){e.ScriptCommand="script-command",e.Extension="extension"})(wr||(ne.DeeplinkType=wr={}));function po(){return Or.environment.raycastVersion.includes("alpha")?"raycastinternal://":"raycast://"}function op(){let e=JSON.parse(rp.default.readFileSync(np.default.join(Or.environment.assetsPath,"..","package.json"),"utf8"));return e.owner||e.author}function lo(e){let t=`${po()}script-commands/${e.command}`;if(e.arguments){let a="";for(let r of e.arguments)a+="&arguments="+encodeURIComponent(r);t+="?"+a.substring(1)}return t}ne.createScriptCommandDeeplink=lo;function co(e){let t=op(),a=Or.environment.extensionName;"ownerOrAuthorName"in e&&"extensionName"in e&&(t=e.ownerOrAuthorName,a=e.extensionName);let r=`${po()}extensions/${t}/${a}/${e.command}`,n="";return e.launchType&&(n+="&launchType="+encodeURIComponent(e.launchType)),e.arguments&&(n+="&arguments="+encodeURIComponent(JSON.stringify(e.arguments))),e.context&&(n+="&context="+encodeURIComponent(JSON.stringify(e.context))),e.fallbackText&&(n+="&fallbackText="+encodeURIComponent(e.fallbackText)),n&&(r+="?"+n.substring(1)),r}ne.createExtensionDeeplink=co;function ip(e){return e.type===wr.ScriptCommand?lo(e):co(e)}ne.createDeeplink=ip});var So=E(Ta=>{"use strict";Object.defineProperty(Ta,"__esModule",{value:!0});Ta.executeSQL=void 0;var sp=Rr();function up(e,t){return(0,sp.baseExecuteSQL)(e,t)}Ta.executeSQL=up});var bo=E(Rt=>{"use strict";var pp=Rt&&Rt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Rt,"__esModule",{value:!0});Rt.runAppleScript=void 0;var lp=pp(require("node:child_process")),Ft=ga();async function cp(e,t,a){let{humanReadableOutput:r,language:n,timeout:o,...u}=Array.isArray(t)?a||{}:t||{},i=r!==!1?[]:["-ss"];n==="JavaScript"&&i.push("-l","JavaScript"),Array.isArray(t)&&i.push("-",...t);let s=lp.default.spawn("osascript",i,{...u,env:{PATH:"/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"}}),p=(0,Ft.getSpawnedPromise)(s,{timeout:o??1e4});s.stdin.end(e);let[{error:c,exitCode:y,signal:g,timedOut:m},l,S]=await(0,Ft.getSpawnedResult)(s,{encoding:"utf8"},p),d=(0,Ft.handleOutput)({stripFinalNewline:!0},l),b=(0,Ft.handleOutput)({stripFinalNewline:!0},S);return(0,Ft.defaultParsing)({stdout:d,stderr:b,error:c,exitCode:y,signal:g,timedOut:m,command:"osascript",options:a,parentError:new Error})}Rt.runAppleScript=cp});var Io=E(Oa=>{"use strict";Object.defineProperty(Oa,"__esModule",{value:!0});Oa.withCache=void 0;var yp=require("@raycast/api"),wa=Be();function dp(e,t){let a=new yp.Cache({namespace:(0,wa.hash)(e)}),r=async(...n)=>{let o=(0,wa.hash)(n||[])+t?.internal_cacheKeySuffix,u=a.get(o);if(u){let{data:s,timestamp:p}=JSON.parse(u,wa.reviver);if(!(t?.maxAge&&Date.now()-p>t.maxAge)&&(!t?.validate||t.validate(s)))return s}let i=await e(...n);return a.set(o,JSON.stringify({data:i,timestamp:Date.now()},wa.replacer)),i};return r.clearCache=()=>{a.clear()},r}Oa.withCache=dp});var zt=E(D=>{"use strict";var Sp=D&&D.__createBinding||(Object.create?(function(e,t,a,r){r===void 0&&(r=a);var n=Object.getOwnPropertyDescriptor(t,a);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,n)}):(function(e,t,a,r){r===void 0&&(r=a),e[r]=t[a]})),O=D&&D.__exportStar||function(e,t){for(var a in e)a!=="default"&&!Object.prototype.hasOwnProperty.call(t,a)&&Sp(t,e,a)};Object.defineProperty(D,"__esModule",{value:!0});O(ot(),D);O(la(),D);O(vt(),D);O(mn(),D);O(En(),D);O(xn(),D);O(Tn(),D);O(On(),D);O(Ln(),D);O(Vn(),D);O(Fn(),D);O(ao(),D);O(so(),D);O(yo(),D);O(So(),D);O(bo(),D);O(xt(),D);O(Io(),D)});var G={};rt(G,{default:()=>xo.default});var xo,ja=rr(()=>{H(G,require("formdata-polyfill/esm.min.js"));xo=V(require("formdata-polyfill/esm.min.js"))});var J={};rt(J,{default:()=>To.default});var To,Nr=rr(()=>{H(J,require("fetch-blob/from.js"));To=V(require("fetch-blob/from.js"))});var Oo={};rt(Oo,{toFormData:()=>Bp});function Op(e){let t=e.match(/\bfilename=("(.*?)"|([^()<>@,;:\\"/[\]?={}\s\t]+))($|;\s)/i);if(!t)return;let a=t[2]||t[3]||"",r=a.slice(a.lastIndexOf("\\")+1);return r=r.replace(/%22/g,'"'),r=r.replace(/&#(\d{4});/g,(n,o)=>String.fromCharCode(o)),r}async function Bp(e,t){if(!/multipart/i.test(t))throw new TypeError("Failed to fetch");let a=t.match(/boundary=(?:"([^"]+)"|([^;]+))/i);if(!a)throw new TypeError("no or bad content-type header, no multipart boundary");let r=new Vr(a[1]||a[2]),n,o,u,i,s,p,c=[],y=new G.FormData,g=b=>{u+=d.decode(b,{stream:!0})},m=b=>{c.push(b)},l=()=>{let b=new J.File(c,p,{type:s});y.append(i,b)},S=()=>{y.append(i,u)},d=new TextDecoder("utf-8");d.decode(),r.onPartBegin=function(){r.onPartData=g,r.onPartEnd=S,n="",o="",u="",i="",s="",p=null,c.length=0},r.onHeaderField=function(b){n+=d.decode(b,{stream:!0})},r.onHeaderValue=function(b){o+=d.decode(b,{stream:!0})},r.onHeaderEnd=function(){if(o+=d.decode(),n=n.toLowerCase(),n==="content-disposition"){let b=o.match(/\bname=("([^"]*)"|([^()<>@,;:\\"/[\]?={}\s\t]+))/i);b&&(i=b[2]||b[3]||""),p=Op(o),p&&(r.onPartData=m,r.onPartEnd=l)}else n==="content-type"&&(s=o);o="",n=""};for await(let b of e)r.write(b);return r.end(),y}var fe,h,wo,He,za,Ha,_p,Qt,Up,vp,Tp,wp,et,Vr,Bo=rr(()=>{Nr();ja();fe=0,h={START_BOUNDARY:fe++,HEADER_FIELD_START:fe++,HEADER_FIELD:fe++,HEADER_VALUE_START:fe++,HEADER_VALUE:fe++,HEADER_VALUE_ALMOST_DONE:fe++,HEADERS_ALMOST_DONE:fe++,PART_DATA_START:fe++,PART_DATA:fe++,END:fe++},wo=1,He={PART_BOUNDARY:wo,LAST_BOUNDARY:wo*=2},za=10,Ha=13,_p=32,Qt=45,Up=58,vp=97,Tp=122,wp=e=>e|32,et=()=>{},Vr=class{constructor(t){this.index=0,this.flags=0,this.onHeaderEnd=et,this.onHeaderField=et,this.onHeadersEnd=et,this.onHeaderValue=et,this.onPartBegin=et,this.onPartData=et,this.onPartEnd=et,this.boundaryChars={},t=`\r
--`+t;let a=new Uint8Array(t.length);for(let r=0;r<t.length;r++)a[r]=t.charCodeAt(r),this.boundaryChars[a[r]]=!0;this.boundary=a,this.lookbehind=new Uint8Array(this.boundary.length+8),this.state=h.START_BOUNDARY}write(t){let a=0,r=t.length,n=this.index,{lookbehind:o,boundary:u,boundaryChars:i,index:s,state:p,flags:c}=this,y=this.boundary.length,g=y-1,m=t.length,l,S,d=M=>{this[M+"Mark"]=a},b=M=>{delete this[M+"Mark"]},R=(M,P,A,x)=>{(P===void 0||P!==A)&&this[M](x&&x.subarray(P,A))},f=(M,P)=>{let A=M+"Mark";A in this&&(P?(R(M,this[A],a,t),delete this[A]):(R(M,this[A],t.length,t),this[A]=0))};for(a=0;a<r;a++)switch(l=t[a],p){case h.START_BOUNDARY:if(s===u.length-2){if(l===Qt)c|=He.LAST_BOUNDARY;else if(l!==Ha)return;s++;break}else if(s-1===u.length-2){if(c&He.LAST_BOUNDARY&&l===Qt)p=h.END,c=0;else if(!(c&He.LAST_BOUNDARY)&&l===za)s=0,R("onPartBegin"),p=h.HEADER_FIELD_START;else return;break}l!==u[s+2]&&(s=-2),l===u[s+2]&&s++;break;case h.HEADER_FIELD_START:p=h.HEADER_FIELD,d("onHeaderField"),s=0;case h.HEADER_FIELD:if(l===Ha){b("onHeaderField"),p=h.HEADERS_ALMOST_DONE;break}if(s++,l===Qt)break;if(l===Up){if(s===1)return;f("onHeaderField",!0),p=h.HEADER_VALUE_START;break}if(S=wp(l),S<vp||S>Tp)return;break;case h.HEADER_VALUE_START:if(l===_p)break;d("onHeaderValue"),p=h.HEADER_VALUE;case h.HEADER_VALUE:l===Ha&&(f("onHeaderValue",!0),R("onHeaderEnd"),p=h.HEADER_VALUE_ALMOST_DONE);break;case h.HEADER_VALUE_ALMOST_DONE:if(l!==za)return;p=h.HEADER_FIELD_START;break;case h.HEADERS_ALMOST_DONE:if(l!==za)return;R("onHeadersEnd"),p=h.PART_DATA_START;break;case h.PART_DATA_START:p=h.PART_DATA,d("onPartData");case h.PART_DATA:if(n=s,s===0){for(a+=g;a<m&&!(t[a]in i);)a+=y;a-=g,l=t[a]}if(s<u.length)u[s]===l?(s===0&&f("onPartData",!0),s++):s=0;else if(s===u.length)s++,l===Ha?c|=He.PART_BOUNDARY:l===Qt?c|=He.LAST_BOUNDARY:s=0;else if(s-1===u.length)if(c&He.PART_BOUNDARY){if(s=0,l===za){c&=~He.PART_BOUNDARY,R("onPartEnd"),R("onPartBegin"),p=h.HEADER_FIELD_START;break}}else c&He.LAST_BOUNDARY&&l===Qt?(R("onPartEnd"),p=h.END,c=0):s=0;if(s>0)o[s-1]=l;else if(n>0){let M=new Uint8Array(o.buffer,o.byteOffset,o.byteLength);R("onPartData",0,n,M),n=0,d("onPartData"),a--}break;case h.END:break;default:throw new Error(`Unexpected state entered: ${p}`)}f("onHeaderField"),f("onHeaderValue"),f("onPartData"),this.index=s,this.state=p,this.flags=c}end(){if(this.state===h.HEADER_FIELD_START&&this.index===0||this.state===h.PART_DATA&&this.index===this.boundary.length)this.onPartEnd();else if(this.state!==h.END)throw new Error("MultipartParser.end(): stream ended unexpectedly")}}});var pc={};rt(pc,{default:()=>uc});module.exports=vi(pc);var W=require("@raycast/api"),ht=require("react");var v=require("@raycast/api");function oa(e){return e?.response?.errors?e.response.errors[0].message:e instanceof Error?e.message:String(e)}var Ii=V(zt());var oi=require("@octokit/rest"),ii=require("@raycast/api"),si=V(zt());var Ba=JSON;var go=e=>e.toUpperCase(),Mo=e=>{let t={};return e.forEach((a,r)=>{t[r]=a}),t};var mo=(e,t,a)=>e.document?e:{document:e,variables:t,requestHeaders:a,signal:void 0},Ro=(e,t,a)=>e.query?e:{query:e,variables:t,requestHeaders:a,signal:void 0},Ao=(e,t)=>e.documents?e:{documents:e,requestHeaders:t,signal:void 0};var La=require("graphql"),fo=e=>{let t,a=e.definitions.filter(r=>r.kind==="OperationDefinition");return a.length===1&&(t=a[0]?.name?.value),t},Ze=e=>{if(typeof e=="string"){let a;try{let r=(0,La.parse)(e);a=fo(r)}catch{}return{query:e,operationName:a}}let t=fo(e);return{query:(0,La.print)(e),operationName:t}};var Xe=class e extends Error{constructor(t,a){let r=`${e.extractMessage(t)}: ${JSON.stringify({response:t,request:a})}`;super(r),Object.setPrototypeOf(this,e.prototype),this.response=t,this.request=a,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,e)}static extractMessage(t){return t.errors?.[0]?.message??`GraphQL Error (Code: ${t.status})`}};var ze=V(qt(),1);var bp="connection_init",Ip="connection_ack",Eo="ping",Co="pong",gp="subscribe",Mp="next",mp="error",ho="complete",Fe=class e{get type(){return this._type}get id(){return this._id}get payload(){return this._payload}constructor(t,a,r){this._type=t,this._payload=a,this._id=r}get text(){let t={type:this.type};return this.id!=null&&this.id!=null&&(t.id=this.id),this.payload!=null&&this.payload!=null&&(t.payload=this.payload),JSON.stringify(t)}static parse(t,a){let{type:r,payload:n,id:o}=JSON.parse(t);return new e(r,a(n),o)}},qa=class{constructor(t,{onInit:a,onAcknowledged:r,onPing:n,onPong:o}){this.socketState={acknowledged:!1,lastRequestId:0,subscriptions:{}},this.socket=t,t.addEventListener("open",async u=>{this.socketState.acknowledged=!1,this.socketState.subscriptions={},t.send(Ap(a?await a():null).text)}),t.addEventListener("close",u=>{this.socketState.acknowledged=!1,this.socketState.subscriptions={}}),t.addEventListener("error",u=>{console.error(u)}),t.addEventListener("message",u=>{try{let i=Rp(u.data);switch(i.type){case Ip:{this.socketState.acknowledged?console.warn("Duplicate CONNECTION_ACK message ignored"):(this.socketState.acknowledged=!0,r&&r(i.payload));return}case Eo:{n?n(i.payload).then(y=>t.send(Po(y).text)):t.send(Po(null).text);return}case Co:{o&&o(i.payload);return}}if(!this.socketState.acknowledged||i.id===void 0||i.id===null||!this.socketState.subscriptions[i.id])return;let{query:s,variables:p,subscriber:c}=this.socketState.subscriptions[i.id];switch(i.type){case Mp:{!i.payload.errors&&i.payload.data&&c.next&&c.next(i.payload.data),i.payload.errors&&c.error&&c.error(new Xe({...i.payload,status:200},{query:s,variables:p}));return}case mp:{c.error&&c.error(new Xe({errors:i.payload,status:200},{query:s,variables:p}));return}case ho:{c.complete&&c.complete(),delete this.socketState.subscriptions[i.id];return}}}catch(i){console.error(i),t.close(1006)}t.close(4400,"Unknown graphql-ws message.")})}makeSubscribe(t,a,r,n){let o=(this.socketState.lastRequestId++).toString();return this.socketState.subscriptions[o]={query:t,variables:n,subscriber:r},this.socket.send(Pp(o,{query:t,operationName:a,variables:n}).text),()=>{this.socket.send(Ep(o).text),delete this.socketState.subscriptions[o]}}rawRequest(t,a){return new Promise((r,n)=>{let o;this.rawSubscribe(t,{next:(u,i)=>o={data:u,extensions:i},error:n,complete:()=>r(o)},a)})}request(t,a){return new Promise((r,n)=>{let o;this.subscribe(t,{next:u=>o=u,error:n,complete:()=>r(o)},a)})}subscribe(t,a,r){let{query:n,operationName:o}=Ze(t);return this.makeSubscribe(n,o,a,r)}rawSubscribe(t,a,r){return this.makeSubscribe(t,void 0,a,r)}ping(t){this.socket.send(fp(t).text)}close(){this.socket.close(1e3)}};qa.PROTOCOL="graphql-transport-ws";function Rp(e,t=a=>a){return Fe.parse(e,t)}function Ap(e){return new Fe(bp,e)}function fp(e){return new Fe(Eo,e,void 0)}function Po(e){return new Fe(Co,e,void 0)}function Pp(e,t){return new Fe(gp,t,e)}function Ep(e){return new Fe(ho,void 0,e)}var At=e=>{let t={};return e&&(typeof Headers<"u"&&e instanceof Headers||ze&&ze.Headers&&e instanceof ze.Headers?t=Mo(e):Array.isArray(e)?e.forEach(([a,r])=>{a&&r!==void 0&&(t[a]=r)}):t=e),t},Do=e=>e.replace(/([\s,]|#[^\n\r]+)+/g," ").trim(),Cp=e=>{if(!Array.isArray(e.query)){let r=e,n=[`query=${encodeURIComponent(Do(r.query))}`];return e.variables&&n.push(`variables=${encodeURIComponent(r.jsonSerializer.stringify(r.variables))}`),r.operationName&&n.push(`operationName=${encodeURIComponent(r.operationName)}`),n.join("&")}if(typeof e.variables<"u"&&!Array.isArray(e.variables))throw new Error("Cannot create query with given variable type, array expected");let t=e,a=e.query.reduce((r,n,o)=>(r.push({query:Do(n),variables:t.variables?t.jsonSerializer.stringify(t.variables[o]):void 0}),r),[]);return`query=${encodeURIComponent(t.jsonSerializer.stringify(a))}`},hp=e=>async t=>{let{url:a,query:r,variables:n,operationName:o,fetch:u,fetchOptions:i,middleware:s}=t,p={...t.headers},c="",y;e==="POST"?(y=Dp(r,n,o,i.jsonSerializer),typeof y=="string"&&(p["Content-Type"]="application/json")):c=Cp({query:r,variables:n,operationName:o,jsonSerializer:i.jsonSerializer??Ba});let g={method:e,headers:p,body:y,...i},m=a,l=g;if(s){let S=await Promise.resolve(s({...g,url:a,operationName:o,variables:n})),{url:d,...b}=S;m=d,l=b}return c&&(m=`${m}?${c}`),await u(m,l)},Na=class{constructor(t,a={}){this.url=t,this.requestConfig=a,this.rawRequest=async(...r)=>{let[n,o,u]=r,i=Ro(n,o,u),{headers:s,fetch:p=ze.default,method:c="POST",requestMiddleware:y,responseMiddleware:g,...m}=this.requestConfig,{url:l}=this;i.signal!==void 0&&(m.signal=i.signal);let{operationName:S}=Ze(i.query);return Br({url:l,query:i.query,variables:i.variables,headers:{...At(Lr(s)),...At(i.requestHeaders)},operationName:S,fetch:p,method:c,fetchOptions:m,middleware:y}).then(d=>(g&&g(d),d)).catch(d=>{throw g&&g(d),d})}}async request(t,...a){let[r,n]=a,o=mo(t,r,n),{headers:u,fetch:i=ze.default,method:s="POST",requestMiddleware:p,responseMiddleware:c,...y}=this.requestConfig,{url:g}=this;o.signal!==void 0&&(y.signal=o.signal);let{query:m,operationName:l}=Ze(o.document);return Br({url:g,query:m,variables:o.variables,headers:{...At(Lr(u)),...At(o.requestHeaders)},operationName:l,fetch:i,method:s,fetchOptions:y,middleware:p}).then(S=>(c&&c(S),S.data)).catch(S=>{throw c&&c(S),S})}batchRequests(t,a){let r=Ao(t,a),{headers:n,...o}=this.requestConfig;r.signal!==void 0&&(o.signal=r.signal);let u=r.documents.map(({document:s})=>Ze(s).query),i=r.documents.map(({variables:s})=>s);return Br({url:this.url,query:u,variables:i,headers:{...At(Lr(n)),...At(r.requestHeaders)},operationName:void 0,fetch:this.requestConfig.fetch??ze.default,method:this.requestConfig.method||"POST",fetchOptions:o,middleware:this.requestConfig.requestMiddleware}).then(s=>(this.requestConfig.responseMiddleware&&this.requestConfig.responseMiddleware(s),s.data)).catch(s=>{throw this.requestConfig.responseMiddleware&&this.requestConfig.responseMiddleware(s),s})}setHeaders(t){return this.requestConfig.headers=t,this}setHeader(t,a){let{headers:r}=this.requestConfig;return r?r[t]=a:this.requestConfig.headers={[t]:a},this}setEndpoint(t){return this.url=t,this}},Br=async e=>{let{query:t,variables:a,fetchOptions:r}=e,n=hp(go(e.method??"post")),o=Array.isArray(e.query),u=await n(e),i=await xp(u,r.jsonSerializer??Ba),s=Array.isArray(i)?!i.some(({data:c})=>!c):!!i.data,p=Array.isArray(i)||!i.errors||Array.isArray(i.errors)&&!i.errors.length||r.errorPolicy==="all"||r.errorPolicy==="ignore";if(u.ok&&p&&s){let{errors:c,...y}=(Array.isArray(i),i),g=r.errorPolicy==="ignore"?y:i;return{...o?{data:g}:g,headers:u.headers,status:u.status}}else{let c=typeof i=="string"?{error:i}:i;throw new Xe({...c,status:u.status,headers:u.headers},{query:t,variables:a})}};var Dp=(e,t,a,r)=>{let n=r??Ba;if(!Array.isArray(e))return n.stringify({query:e,variables:t,operationName:a});if(typeof t<"u"&&!Array.isArray(t))throw new Error("Cannot create request body with given variable type, array expected");let o=e.reduce((u,i,s)=>(u.push({query:i,variables:t?t[s]:void 0}),u),[]);return n.stringify(o)},xp=async(e,t)=>{let a;return e.headers.forEach((r,n)=>{n.toLowerCase()==="content-type"&&(a=r)}),a&&(a.toLowerCase().startsWith("application/json")||a.toLowerCase().startsWith("application/graphql+json")||a.toLowerCase().startsWith("application/graphql-response+json"))?t.parse(await e.text()):e.text()},Lr=e=>typeof e=="function"?e():e;var Yo=V(require("node:http"),1),Jo=V(require("node:https"),1),at=V(require("node:zlib"),1),ee=V(require("node:stream"),1),Yt=require("node:buffer");var Ht={};rt(Ht,{default:()=>Va.default});H(Ht,require("data-uri-to-buffer"));var Va=V(require("data-uri-to-buffer"));var oe=V(require("node:stream"),1),we=require("node:util"),Z=require("node:buffer");var Gt={};rt(Gt,{default:()=>ka.default});H(Gt,require("fetch-blob"));var ka=V(require("fetch-blob"));ja();var Te=class extends Error{constructor(t,a){super(t),Error.captureStackTrace(this,this.constructor),this.type=a}get name(){return this.constructor.name}get[Symbol.toStringTag](){return this.constructor.name}};var $=class extends Te{constructor(t,a,r){super(t,a),r&&(this.code=this.errno=r.code,this.erroredSysCall=r.syscall)}};var Fa=Symbol.toStringTag,qr=e=>typeof e=="object"&&typeof e.append=="function"&&typeof e.delete=="function"&&typeof e.get=="function"&&typeof e.getAll=="function"&&typeof e.has=="function"&&typeof e.set=="function"&&typeof e.sort=="function"&&e[Fa]==="URLSearchParams",$t=e=>e&&typeof e=="object"&&typeof e.arrayBuffer=="function"&&typeof e.type=="string"&&typeof e.stream=="function"&&typeof e.constructor=="function"&&/^(Blob|File)$/.test(e[Fa]),_o=e=>typeof e=="object"&&(e[Fa]==="AbortSignal"||e[Fa]==="EventTarget"),Uo=(e,t)=>{let a=new URL(t).hostname,r=new URL(e).hostname;return a===r||a.endsWith(`.${r}`)},vo=(e,t)=>{let a=new URL(t).protocol,r=new URL(e).protocol;return a===r};var Lp=(0,we.promisify)(oe.default.pipeline),Q=Symbol("Body internals"),Pe=class{constructor(t,{size:a=0}={}){let r=null;t===null?t=null:qr(t)?t=Z.Buffer.from(t.toString()):$t(t)||Z.Buffer.isBuffer(t)||(we.types.isAnyArrayBuffer(t)?t=Z.Buffer.from(t):ArrayBuffer.isView(t)?t=Z.Buffer.from(t.buffer,t.byteOffset,t.byteLength):t instanceof oe.default||(t instanceof G.FormData?(t=(0,G.formDataToBlob)(t),r=t.type.split("=")[1]):t=Z.Buffer.from(String(t))));let n=t;Z.Buffer.isBuffer(t)?n=oe.default.Readable.from(t):$t(t)&&(n=oe.default.Readable.from(t.stream())),this[Q]={body:t,stream:n,boundary:r,disturbed:!1,error:null},this.size=a,t instanceof oe.default&&t.on("error",o=>{let u=o instanceof Te?o:new $(`Invalid response body while trying to fetch ${this.url}: ${o.message}`,"system",o);this[Q].error=u})}get body(){return this[Q].stream}get bodyUsed(){return this[Q].disturbed}async arrayBuffer(){let{buffer:t,byteOffset:a,byteLength:r}=await kr(this);return t.slice(a,a+r)}async formData(){let t=this.headers.get("content-type");if(t.startsWith("application/x-www-form-urlencoded")){let r=new G.FormData,n=new URLSearchParams(await this.text());for(let[o,u]of n)r.append(o,u);return r}let{toFormData:a}=await Promise.resolve().then(()=>(Bo(),Oo));return a(this.body,t)}async blob(){let t=this.headers&&this.headers.get("content-type")||this[Q].body&&this[Q].body.type||"",a=await this.arrayBuffer();return new ka.default([a],{type:t})}async json(){let t=await this.text();return JSON.parse(t)}async text(){let t=await kr(this);return new TextDecoder().decode(t)}buffer(){return kr(this)}};Pe.prototype.buffer=(0,we.deprecate)(Pe.prototype.buffer,"Please use 'response.arrayBuffer()' instead of 'response.buffer()'","node-fetch#buffer");Object.defineProperties(Pe.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0},data:{get:(0,we.deprecate)(()=>{},"data doesn't exist, use json(), text(), arrayBuffer(), or body instead","https://github.com/node-fetch/node-fetch/issues/1000 (response)")}});async function kr(e){if(e[Q].disturbed)throw new TypeError(`body used already for: ${e.url}`);if(e[Q].disturbed=!0,e[Q].error)throw e[Q].error;let{body:t}=e;if(t===null)return Z.Buffer.alloc(0);if(!(t instanceof oe.default))return Z.Buffer.alloc(0);let a=[],r=0;try{for await(let n of t){if(e.size>0&&r+n.length>e.size){let o=new $(`content size at ${e.url} over limit: ${e.size}`,"max-size");throw t.destroy(o),o}r+=n.length,a.push(n)}}catch(n){throw n instanceof Te?n:new $(`Invalid response body while trying to fetch ${e.url}: ${n.message}`,"system",n)}if(t.readableEnded===!0||t._readableState.ended===!0)try{return a.every(n=>typeof n=="string")?Z.Buffer.from(a.join("")):Z.Buffer.concat(a,r)}catch(n){throw new $(`Could not create Buffer from response body for ${e.url}: ${n.message}`,"system",n)}else throw new $(`Premature close of server response while trying to fetch ${e.url}`)}var ft=(e,t)=>{let a,r,{body:n}=e[Q];if(e.bodyUsed)throw new Error("cannot clone body after it is used");return n instanceof oe.default&&typeof n.getBoundary!="function"&&(a=new oe.PassThrough({highWaterMark:t}),r=new oe.PassThrough({highWaterMark:t}),n.pipe(a),n.pipe(r),e[Q].stream=a,n=r),n},qp=(0,we.deprecate)(e=>e.getBoundary(),"form-data doesn't follow the spec and requires special treatment. Use alternative package","https://github.com/node-fetch/node-fetch/issues/1167"),Ga=(e,t)=>e===null?null:typeof e=="string"?"text/plain;charset=UTF-8":qr(e)?"application/x-www-form-urlencoded;charset=UTF-8":$t(e)?e.type||null:Z.Buffer.isBuffer(e)||we.types.isAnyArrayBuffer(e)||ArrayBuffer.isView(e)?null:e instanceof G.FormData?`multipart/form-data; boundary=${t[Q].boundary}`:e&&typeof e.getBoundary=="function"?`multipart/form-data;boundary=${qp(e)}`:e instanceof oe.default?null:"text/plain;charset=UTF-8",Lo=e=>{let{body:t}=e[Q];return t===null?0:$t(t)?t.size:Z.Buffer.isBuffer(t)?t.length:t&&typeof t.getLengthSync=="function"&&t.hasKnownLength&&t.hasKnownLength()?t.getLengthSync():null},qo=async(e,{body:t})=>{t===null?e.end():await Lp(t,e)};var jr=require("node:util"),Wt=V(require("node:http"),1),$a=typeof Wt.default.validateHeaderName=="function"?Wt.default.validateHeaderName:e=>{if(!/^[\^`\-\w!#$%&'*+.|~]+$/.test(e)){let t=new TypeError(`Header name must be a valid HTTP token [${e}]`);throw Object.defineProperty(t,"code",{value:"ERR_INVALID_HTTP_TOKEN"}),t}},Fr=typeof Wt.default.validateHeaderValue=="function"?Wt.default.validateHeaderValue:(e,t)=>{if(/[^\t\u0020-\u007E\u0080-\u00FF]/.test(t)){let a=new TypeError(`Invalid character in header content ["${e}"]`);throw Object.defineProperty(a,"code",{value:"ERR_INVALID_CHAR"}),a}},X=class e extends URLSearchParams{constructor(t){let a=[];if(t instanceof e){let r=t.raw();for(let[n,o]of Object.entries(r))a.push(...o.map(u=>[n,u]))}else if(t!=null)if(typeof t=="object"&&!jr.types.isBoxedPrimitive(t)){let r=t[Symbol.iterator];if(r==null)a.push(...Object.entries(t));else{if(typeof r!="function")throw new TypeError("Header pairs must be iterable");a=[...t].map(n=>{if(typeof n!="object"||jr.types.isBoxedPrimitive(n))throw new TypeError("Each header pair must be an iterable object");return[...n]}).map(n=>{if(n.length!==2)throw new TypeError("Each header pair must be a name/value tuple");return[...n]})}}else throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");return a=a.length>0?a.map(([r,n])=>($a(r),Fr(r,String(n)),[String(r).toLowerCase(),String(n)])):void 0,super(a),new Proxy(this,{get(r,n,o){switch(n){case"append":case"set":return(u,i)=>($a(u),Fr(u,String(i)),URLSearchParams.prototype[n].call(r,String(u).toLowerCase(),String(i)));case"delete":case"has":case"getAll":return u=>($a(u),URLSearchParams.prototype[n].call(r,String(u).toLowerCase()));case"keys":return()=>(r.sort(),new Set(URLSearchParams.prototype.keys.call(r)).keys());default:return Reflect.get(r,n,o)}}})}get[Symbol.toStringTag](){return this.constructor.name}toString(){return Object.prototype.toString.call(this)}get(t){let a=this.getAll(t);if(a.length===0)return null;let r=a.join(", ");return/^content-encoding$/i.test(t)&&(r=r.toLowerCase()),r}forEach(t,a=void 0){for(let r of this.keys())Reflect.apply(t,a,[this.get(r),r,this])}*values(){for(let t of this.keys())yield this.get(t)}*entries(){for(let t of this.keys())yield[t,this.get(t)]}[Symbol.iterator](){return this.entries()}raw(){return[...this.keys()].reduce((t,a)=>(t[a]=this.getAll(a),t),{})}[Symbol.for("nodejs.util.inspect.custom")](){return[...this.keys()].reduce((t,a)=>{let r=this.getAll(a);return a==="host"?t[a]=r[0]:t[a]=r.length>1?r:r[0],t},{})}};Object.defineProperties(X.prototype,["get","entries","forEach","values"].reduce((e,t)=>(e[t]={enumerable:!0},e),{}));function No(e=[]){return new X(e.reduce((t,a,r,n)=>(r%2===0&&t.push(n.slice(r,r+2)),t),[]).filter(([t,a])=>{try{return $a(t),Fr(t,String(a)),!0}catch{return!1}}))}var Np=new Set([301,302,303,307,308]),Qa=e=>Np.has(e);var ce=Symbol("Response internals"),ie=class e extends Pe{constructor(t=null,a={}){super(t,a);let r=a.status!=null?a.status:200,n=new X(a.headers);if(t!==null&&!n.has("Content-Type")){let o=Ga(t,this);o&&n.append("Content-Type",o)}this[ce]={type:"default",url:a.url,status:r,statusText:a.statusText||"",headers:n,counter:a.counter,highWaterMark:a.highWaterMark}}get type(){return this[ce].type}get url(){return this[ce].url||""}get status(){return this[ce].status}get ok(){return this[ce].status>=200&&this[ce].status<300}get redirected(){return this[ce].counter>0}get statusText(){return this[ce].statusText}get headers(){return this[ce].headers}get highWaterMark(){return this[ce].highWaterMark}clone(){return new e(ft(this,this.highWaterMark),{type:this.type,url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected,size:this.size,highWaterMark:this.highWaterMark})}static redirect(t,a=302){if(!Qa(a))throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');return new e(null,{headers:{location:new URL(t).toString()},status:a})}static error(){let t=new e(null,{status:0,statusText:""});return t[ce].type="error",t}static json(t=void 0,a={}){let r=JSON.stringify(t);if(r===void 0)throw new TypeError("data is not JSON serializable");let n=new X(a&&a.headers);return n.has("content-type")||n.set("content-type","application/json"),new e(r,{...a,headers:n})}get[Symbol.toStringTag](){return"Response"}};Object.defineProperties(ie.prototype,{type:{enumerable:!0},url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}});var Qo=require("node:url"),Wo=require("node:util");var Vo=e=>{if(e.search)return e.search;let t=e.href.length-1,a=e.hash||(e.href[t]==="#"?"#":"");return e.href[t-a.length]==="?"?"?":""};var jo=require("node:net");function ko(e,t=!1){return e==null||(e=new URL(e),/^(about|blob|data):$/.test(e.protocol))?"no-referrer":(e.username="",e.password="",e.hash="",t&&(e.pathname="",e.search=""),e)}var Fo=new Set(["","no-referrer","no-referrer-when-downgrade","same-origin","origin","strict-origin","origin-when-cross-origin","strict-origin-when-cross-origin","unsafe-url"]),zo="strict-origin-when-cross-origin";function Ho(e){if(!Fo.has(e))throw new TypeError(`Invalid referrerPolicy: ${e}`);return e}function Vp(e){if(/^(http|ws)s:$/.test(e.protocol))return!0;let t=e.host.replace(/(^\[)|(]$)/g,""),a=(0,jo.isIP)(t);return a===4&&/^127\./.test(t)||a===6&&/^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(t)?!0:e.host==="localhost"||e.host.endsWith(".localhost")?!1:e.protocol==="file:"}function Pt(e){return/^about:(blank|srcdoc)$/.test(e)||e.protocol==="data:"||/^(blob|filesystem):$/.test(e.protocol)?!0:Vp(e)}function Go(e,{referrerURLCallback:t,referrerOriginCallback:a}={}){if(e.referrer==="no-referrer"||e.referrerPolicy==="")return null;let r=e.referrerPolicy;if(e.referrer==="about:client")return"no-referrer";let n=e.referrer,o=ko(n),u=ko(n,!0);o.toString().length>4096&&(o=u),t&&(o=t(o)),a&&(u=a(u));let i=new URL(e.url);switch(r){case"no-referrer":return"no-referrer";case"origin":return u;case"unsafe-url":return o;case"strict-origin":return Pt(o)&&!Pt(i)?"no-referrer":u.toString();case"strict-origin-when-cross-origin":return o.origin===i.origin?o:Pt(o)&&!Pt(i)?"no-referrer":u;case"same-origin":return o.origin===i.origin?o:"no-referrer";case"origin-when-cross-origin":return o.origin===i.origin?o:u;case"no-referrer-when-downgrade":return Pt(o)&&!Pt(i)?"no-referrer":o;default:throw new TypeError(`Invalid referrerPolicy: ${r}`)}}function $o(e){let t=(e.get("referrer-policy")||"").split(/[,\s]+/),a="";for(let r of t)r&&Fo.has(r)&&(a=r);return a}var B=Symbol("Request internals"),Kt=e=>typeof e=="object"&&typeof e[B]=="object",kp=(0,Wo.deprecate)(()=>{},".data is not a valid RequestInit property, use .body instead","https://github.com/node-fetch/node-fetch/issues/1000 (request)"),tt=class e extends Pe{constructor(t,a={}){let r;if(Kt(t)?r=new URL(t.url):(r=new URL(t),t={}),r.username!==""||r.password!=="")throw new TypeError(`${r} is an url with embedded credentials.`);let n=a.method||t.method||"GET";if(/^(delete|get|head|options|post|put)$/i.test(n)&&(n=n.toUpperCase()),!Kt(a)&&"data"in a&&kp(),(a.body!=null||Kt(t)&&t.body!==null)&&(n==="GET"||n==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");let o=a.body?a.body:Kt(t)&&t.body!==null?ft(t):null;super(o,{size:a.size||t.size||0});let u=new X(a.headers||t.headers||{});if(o!==null&&!u.has("Content-Type")){let p=Ga(o,this);p&&u.set("Content-Type",p)}let i=Kt(t)?t.signal:null;if("signal"in a&&(i=a.signal),i!=null&&!_o(i))throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");let s=a.referrer==null?t.referrer:a.referrer;if(s==="")s="no-referrer";else if(s){let p=new URL(s);s=/^about:(\/\/)?client$/.test(p)?"client":p}else s=void 0;this[B]={method:n,redirect:a.redirect||t.redirect||"follow",headers:u,parsedURL:r,signal:i,referrer:s},this.follow=a.follow===void 0?t.follow===void 0?20:t.follow:a.follow,this.compress=a.compress===void 0?t.compress===void 0?!0:t.compress:a.compress,this.counter=a.counter||t.counter||0,this.agent=a.agent||t.agent,this.highWaterMark=a.highWaterMark||t.highWaterMark||16384,this.insecureHTTPParser=a.insecureHTTPParser||t.insecureHTTPParser||!1,this.referrerPolicy=a.referrerPolicy||t.referrerPolicy||""}get method(){return this[B].method}get url(){return(0,Qo.format)(this[B].parsedURL)}get headers(){return this[B].headers}get redirect(){return this[B].redirect}get signal(){return this[B].signal}get referrer(){if(this[B].referrer==="no-referrer")return"";if(this[B].referrer==="client")return"about:client";if(this[B].referrer)return this[B].referrer.toString()}get referrerPolicy(){return this[B].referrerPolicy}set referrerPolicy(t){this[B].referrerPolicy=Ho(t)}clone(){return new e(this)}get[Symbol.toStringTag](){return"Request"}};Object.defineProperties(tt.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0},referrer:{enumerable:!0},referrerPolicy:{enumerable:!0}});var Ko=e=>{let{parsedURL:t}=e[B],a=new X(e[B].headers);a.has("Accept")||a.set("Accept","*/*");let r=null;if(e.body===null&&/^(post|put)$/i.test(e.method)&&(r="0"),e.body!==null){let i=Lo(e);typeof i=="number"&&!Number.isNaN(i)&&(r=String(i))}r&&a.set("Content-Length",r),e.referrerPolicy===""&&(e.referrerPolicy=zo),e.referrer&&e.referrer!=="no-referrer"?e[B].referrer=Go(e):e[B].referrer="no-referrer",e[B].referrer instanceof URL&&a.set("Referer",e.referrer),a.has("User-Agent")||a.set("User-Agent","node-fetch"),e.compress&&!a.has("Accept-Encoding")&&a.set("Accept-Encoding","gzip, deflate, br");let{agent:n}=e;typeof n=="function"&&(n=n(t));let o=Vo(t),u={path:t.pathname+o,method:e.method,headers:a[Symbol.for("nodejs.util.inspect.custom")](),insecureHTTPParser:e.insecureHTTPParser,agent:n};return{parsedURL:t,options:u}};var Wa=class extends Te{constructor(t,a="aborted"){super(t,a)}};ja();Nr();var jp=new Set(["data:","http:","https:"]);async function Ka(e,t){return new Promise((a,r)=>{let n=new tt(e,t),{parsedURL:o,options:u}=Ko(n);if(!jp.has(o.protocol))throw new TypeError(`node-fetch cannot load ${e}. URL scheme "${o.protocol.replace(/:$/,"")}" is not supported.`);if(o.protocol==="data:"){let l=(0,Va.default)(n.url),S=new ie(l,{headers:{"Content-Type":l.typeFull}});a(S);return}let i=(o.protocol==="https:"?Jo.default:Yo.default).request,{signal:s}=n,p=null,c=()=>{let l=new Wa("The operation was aborted.");r(l),n.body&&n.body instanceof ee.default.Readable&&n.body.destroy(l),!(!p||!p.body)&&p.body.emit("error",l)};if(s&&s.aborted){c();return}let y=()=>{c(),m()},g=i(o.toString(),u);s&&s.addEventListener("abort",y);let m=()=>{g.abort(),s&&s.removeEventListener("abort",y)};g.on("error",l=>{r(new $(`request to ${n.url} failed, reason: ${l.message}`,"system",l)),m()}),Fp(g,l=>{p&&p.body&&p.body.destroy(l)}),process.version<"v14"&&g.on("socket",l=>{let S;l.prependListener("end",()=>{S=l._eventsCount}),l.prependListener("close",d=>{if(p&&S<l._eventsCount&&!d){let b=new Error("Premature close");b.code="ERR_STREAM_PREMATURE_CLOSE",p.body.emit("error",b)}})}),g.on("response",l=>{g.setTimeout(0);let S=No(l.rawHeaders);if(Qa(l.statusCode)){let M=S.get("Location"),P=null;try{P=M===null?null:new URL(M,n.url)}catch{if(n.redirect!=="manual"){r(new $(`uri requested responds with an invalid redirect URL: ${M}`,"invalid-redirect")),m();return}}switch(n.redirect){case"error":r(new $(`uri requested responds with a redirect, redirect mode is set to error: ${n.url}`,"no-redirect")),m();return;case"manual":break;case"follow":{if(P===null)break;if(n.counter>=n.follow){r(new $(`maximum redirect reached at: ${n.url}`,"max-redirect")),m();return}let A={headers:new X(n.headers),follow:n.follow,counter:n.counter+1,agent:n.agent,compress:n.compress,method:n.method,body:ft(n),signal:n.signal,size:n.size,referrer:n.referrer,referrerPolicy:n.referrerPolicy};if(!Uo(n.url,P)||!vo(n.url,P))for(let N of["authorization","www-authenticate","cookie","cookie2"])A.headers.delete(N);if(l.statusCode!==303&&n.body&&t.body instanceof ee.default.Readable){r(new $("Cannot follow redirect with body being a readable stream","unsupported-redirect")),m();return}(l.statusCode===303||(l.statusCode===301||l.statusCode===302)&&n.method==="POST")&&(A.method="GET",A.body=void 0,A.headers.delete("content-length"));let x=$o(S);x&&(A.referrerPolicy=x),a(Ka(new tt(P,A))),m();return}default:return r(new TypeError(`Redirect option '${n.redirect}' is not a valid value of RequestRedirect`))}}s&&l.once("end",()=>{s.removeEventListener("abort",y)});let d=(0,ee.pipeline)(l,new ee.PassThrough,M=>{M&&r(M)});process.version<"v12.10"&&l.on("aborted",y);let b={url:n.url,status:l.statusCode,statusText:l.statusMessage,headers:S,size:n.size,counter:n.counter,highWaterMark:n.highWaterMark},R=S.get("Content-Encoding");if(!n.compress||n.method==="HEAD"||R===null||l.statusCode===204||l.statusCode===304){p=new ie(d,b),a(p);return}let f={flush:at.default.Z_SYNC_FLUSH,finishFlush:at.default.Z_SYNC_FLUSH};if(R==="gzip"||R==="x-gzip"){d=(0,ee.pipeline)(d,at.default.createGunzip(f),M=>{M&&r(M)}),p=new ie(d,b),a(p);return}if(R==="deflate"||R==="x-deflate"){let M=(0,ee.pipeline)(l,new ee.PassThrough,P=>{P&&r(P)});M.once("data",P=>{(P[0]&15)===8?d=(0,ee.pipeline)(d,at.default.createInflate(),A=>{A&&r(A)}):d=(0,ee.pipeline)(d,at.default.createInflateRaw(),A=>{A&&r(A)}),p=new ie(d,b),a(p)}),M.once("end",()=>{p||(p=new ie(d,b),a(p))});return}if(R==="br"){d=(0,ee.pipeline)(d,at.default.createBrotliDecompress(),M=>{M&&r(M)}),p=new ie(d,b),a(p);return}p=new ie(d,b),a(p)}),qo(g,n).catch(r)})}function Fp(e,t){let a=Yt.Buffer.from(`0\r
\r
`),r=!1,n=!1,o;e.on("response",u=>{let{headers:i}=u;r=i["transfer-encoding"]==="chunked"&&!i["content-length"]}),e.on("socket",u=>{let i=()=>{if(r&&!n){let p=new Error("Premature close");p.code="ERR_STREAM_PREMATURE_CLOSE",t(p)}},s=p=>{n=Yt.Buffer.compare(p.slice(-5),a)===0,!n&&o&&(n=Yt.Buffer.compare(o.slice(-3),a.slice(0,3))===0&&Yt.Buffer.compare(p.slice(-2),a.slice(3))===0),o=p};u.prependListener("close",i),u.on("data",s),e.on("close",()=>{u.removeListener("close",i),u.removeListener("data",s)})})}var I=V(require("graphql-tag")),Jt=I.default`
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
`,zp=I.default`
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
  ${Jt}
`,Ee=I.default`
  fragment UserFields on User {
    id
    avatarUrl
    name
    login
    isViewer
  }
`,Zt=I.default`
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
  ${Ee}
`,Ya=I.default`
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
  ${Zt}
  ${Jt}
  ${Ee}
`,Hp=I.default`
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
  ${Zt}
  ${Jt}
  ${Ee}
`,Zo=I.default`
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
`,Xo=I.default`
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
`,ei=I.default`
  fragment RepositoryMentionFields on Repository {
    nameWithOwner
    description
    isPrivate
    isArchived
    owner {
      avatarUrl(size: 64)
    }
  }
`,Gp=I.default`
  fragment ProjectViewerFields on ProjectV2View {
    id
    name
    number
  }
`,ti=I.default`
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
  ${Zt}
  ${Gp}
`,ai=I.default`
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
  ${Jt}
  ${Zt}
  ${Ee}
`,$p=I.default`
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
  ${Jt}
  ${Zt}
  ${Ee}
`,Qp=I.default`
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
`,ri=I.default`
  fragment CommitFields on Commit {
    authoredDate
    oid
    message
  }
`,zr=I.default`
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
`,Wp=I.default`
  fragment ReleaseFields on Release {
    id
    description
    name
    publishedAt
    createdAt
    tagName
    url
  }
`,Kp=I.default`
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
`,Yp=I.default`
  mutation createRef($input: CreateRefInput!) {
    createRef(input: $input) {
      clientMutationId
      ref {
        id
        name
      }
    }
  }
`,Jp=I.default`
  mutation deleteLinkedBranch($input: DeleteLinkedBranchInput!) {
    deleteLinkedBranch(input: $input) {
      clientMutationId
    }
  }
`,Zp=I.default`
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
  ${zp}
`,Xp=I.default`
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
`,el=I.default`
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
  ${Ee}
`,tl=I.default`
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
`,al=I.default`
  query issueDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...IssueDetailFields
    }
  }
  ${Hp}
`,rl=I.default`
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
  ${Ya}
`,nl=I.default`
  query issueByNumber($owner: String!, $name: String!, $issueNumber: Int!) {
    repository(owner: $owner, name: $name) {
      issue(number: $issueNumber) {
        ...IssueFields
      }
    }
  }
  ${Ya}
`,ol=I.default`
  mutation closeIssue($nodeId: ID!, $stateReason: IssueClosedStateReason!) {
    closeIssue(input: { issueId: $nodeId, stateReason: $stateReason }) {
      issue {
        id
      }
    }
  }
`,il=I.default`
  mutation reopenIssue($nodeId: ID!) {
    reopenIssue(input: { issueId: $nodeId }) {
      issue {
        id
      }
    }
  }
`,sl=I.default`
  mutation changeIssueAssignees($issueId: ID!, $assigneeIds: [ID!]) {
    updateIssue(input: { id: $issueId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,ul=I.default`
  mutation changeIssueMilestone($issueId: ID!, $milestoneId: ID) {
    updateIssue(input: { id: $issueId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,pl=I.default`
  mutation addIssueToProject($issueId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $issueId }) {
      clientMutationId
    }
  }
`,ll=I.default`
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
  ${Ya}
`,cl=I.default`
  query searchIssueMentions($query: String!, $numberOfItems: Int!) {
    search(query: $query, type: ISSUE, first: $numberOfItems) {
      nodes {
        ... on Issue {
          ...IssueMentionFields
        }
      }
    }
  }
  ${Zo}
`,yl=I.default`
  query searchPullRequestMentions($query: String!, $numberOfItems: Int!) {
    search(query: $query, type: ISSUE, first: $numberOfItems) {
      nodes {
        ... on PullRequest {
          ...PullRequestMentionFields
        }
      }
    }
  }
  ${Xo}
`,dl=I.default`
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
  ${Zo}
  ${Xo}
`,Sl=I.default`
  query searchRepositoryMentions($query: String!, $numberOfItems: Int!) {
    search(query: $query, type: REPOSITORY, first: $numberOfItems) {
      nodes {
        ... on Repository {
          ...RepositoryMentionFields
        }
      }
    }
  }
  ${ei}
`,bl=I.default`
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
  ${ei}
`,Il=I.default`
  mutation changeProjectStatus($projectId: ID!, $closed: Boolean!) {
    updateProjectV2(input: { projectId: $projectId, closed: $closed }) {
      clientMutationId
    }
  }
`,gl=I.default`
  query projectDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...ProjectFields
    }
  }
  ${ti}
`,Ml=I.default`
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
  ${ai}
`,ml=I.default`
  query pullRequestDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...PullRequestDetailsFields
    }
  }
  ${$p}
`,Rl=I.default`
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
  ${Ee}
`,Al=I.default`
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
`,fl=I.default`
  query pullRequestCommits($nodeId: ID!, $numberOfItems: Int!, $before: String) {
    node(id: $nodeId) {
      ...PullRequestCommitFields
    }
  }
  ${Qp}
`,Pl=I.default`
  mutation closePullRequest($nodeId: ID!) {
    closePullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,El=I.default`
  mutation reopenPullRequest($nodeId: ID!) {
    reopenPullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Cl=I.default`
  mutation markPullRequestReadyForReview($nodeId: ID!) {
    markPullRequestReadyForReview(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,hl=I.default`
  mutation addPullRequestReview($nodeId: ID!, $event: PullRequestReviewEvent, $body: String) {
    addPullRequestReview(input: { pullRequestId: $nodeId, event: $event, body: $body }) {
      pullRequestReview {
        id
      }
    }
  }
`,Dl=I.default`
  mutation changePullRequestAssignees($pullRequestId: ID!, $assigneeIds: [ID!]) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,xl=I.default`
  mutation changePullRequestMilestone($pullRequestId: ID!, $milestoneId: ID) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,_l=I.default`
  mutation addPullRequestToProject($pullRequestId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $pullRequestId }) {
      clientMutationId
    }
  }
`,Ul=I.default`
  mutation requestReview($pullRequestId: ID!, $collaboratorId: ID!) {
    requestReviews(input: { pullRequestId: $pullRequestId, userIds: [$collaboratorId], union: true }) {
      clientMutationId
    }
  }
`,vl=I.default`
  mutation mergePullRequest($nodeId: ID!, $method: PullRequestMergeMethod!) {
    mergePullRequest(input: { pullRequestId: $nodeId, mergeMethod: $method }) {
      pullRequest {
        nodeId: id
      }
    }
  }
`,Tl=I.default`
  mutation addPullRequestToMergeQueue($nodeId: ID!) {
    enqueuePullRequest(input: { pullRequestId: $nodeId }) {
      __typename
    }
  }
`,wl=I.default`
  mutation removePullRequestFromMergeQueue($nodeId: ID!) {
    dequeuePullRequest(input: { id: $nodeId }) {
      __typename
    }
  }
`,Ol=I.default`
  mutation enablePullRequestAutoMerge($nodeId: ID!, $mergeMethod: PullRequestMergeMethod) {
    enablePullRequestAutoMerge(input: { pullRequestId: $nodeId, mergeMethod: $mergeMethod }) {
      pullRequest {
        id
      }
    }
  }
`,Bl=I.default`
  mutation disablePullRequestAutoMerge($nodeId: ID!) {
    disablePullRequestAutoMerge(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Ll=I.default`
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
`,ql=I.default`
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
  ${ai}
`,Nl=I.default`
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
  ${zr}
`,Vl=I.default`
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
  ${zr}
`,kl=I.default`
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
`,jl=I.default`
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
`,Fl=I.default`
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
  ${ri}
  ${Ee}
`,zl=I.default`
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
  ${ri}
`,Hl=I.default`
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
  ${Ya}
`,Gl=I.default`
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
  ${Wp}
`,$l=I.default`
  mutation addStar($repositoryId: ID!) {
    addStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,Ql=I.default`
  mutation removeStar($repositoryId: ID!) {
    removeStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,Wl=I.default`
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
  ${zr}
`,Kl=I.default`
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
  ${Ee}
  ${ti}
`,Yl=I.default`
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
  ${Ee}
`,Jl=I.default`
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
`,Zl=(e,t,a,r)=>e();function ni(e,t=Zl){return{createLinkedBranch(a,r,n){return t(o=>e.request({document:Kp,variables:a,requestHeaders:{...r,...o},signal:n}),"createLinkedBranch","mutation",a)},createRef(a,r,n){return t(o=>e.request({document:Yp,variables:a,requestHeaders:{...r,...o},signal:n}),"createRef","mutation",a)},deleteLinkedBranch(a,r,n){return t(o=>e.request({document:Jp,variables:a,requestHeaders:{...r,...o},signal:n}),"deleteLinkedBranch","mutation",a)},searchDiscussions(a,r,n){return t(o=>e.request({document:Zp,variables:a,requestHeaders:{...r,...o},signal:n}),"searchDiscussions","query",a)},getGitHubDiscussionNumber(a,r,n){return t(o=>e.request({document:Xp,variables:a,requestHeaders:{...r,...o},signal:n}),"getGitHubDiscussionNumber","query",a)},repositoryCollaboratorsForIssues(a,r,n){return t(o=>e.request({document:el,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryCollaboratorsForIssues","query",a)},repositoryProjectsForIssues(a,r,n){return t(o=>e.request({document:tl,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryProjectsForIssues","query",a)},issueDetails(a,r,n){return t(o=>e.request({document:al,variables:a,requestHeaders:{...r,...o},signal:n}),"issueDetails","query",a)},searchIssues(a,r,n){return t(o=>e.request({document:rl,variables:a,requestHeaders:{...r,...o},signal:n}),"searchIssues","query",a)},issueByNumber(a,r,n){return t(o=>e.request({document:nl,variables:a,requestHeaders:{...r,...o},signal:n}),"issueByNumber","query",a)},closeIssue(a,r,n){return t(o=>e.request({document:ol,variables:a,requestHeaders:{...r,...o},signal:n}),"closeIssue","mutation",a)},reopenIssue(a,r,n){return t(o=>e.request({document:il,variables:a,requestHeaders:{...r,...o},signal:n}),"reopenIssue","mutation",a)},changeIssueAssignees(a,r,n){return t(o=>e.request({document:sl,variables:a,requestHeaders:{...r,...o},signal:n}),"changeIssueAssignees","mutation",a)},changeIssueMilestone(a,r,n){return t(o=>e.request({document:ul,variables:a,requestHeaders:{...r,...o},signal:n}),"changeIssueMilestone","mutation",a)},addIssueToProject(a,r,n){return t(o=>e.request({document:pl,variables:a,requestHeaders:{...r,...o},signal:n}),"addIssueToProject","mutation",a)},createIssue(a,r,n){return t(o=>e.request({document:ll,variables:a,requestHeaders:{...r,...o},signal:n}),"createIssue","mutation",a)},searchIssueMentions(a,r,n){return t(o=>e.request({document:cl,variables:a,requestHeaders:{...r,...o},signal:n}),"searchIssueMentions","query",a)},searchPullRequestMentions(a,r,n){return t(o=>e.request({document:yl,variables:a,requestHeaders:{...r,...o},signal:n}),"searchPullRequestMentions","query",a)},issueOrPullRequestMention(a,r,n){return t(o=>e.request({document:dl,variables:a,requestHeaders:{...r,...o},signal:n}),"issueOrPullRequestMention","query",a)},searchRepositoryMentions(a,r,n){return t(o=>e.request({document:Sl,variables:a,requestHeaders:{...r,...o},signal:n}),"searchRepositoryMentions","query",a)},viewerRepositoryMentions(a,r,n){return t(o=>e.request({document:bl,variables:a,requestHeaders:{...r,...o},signal:n}),"viewerRepositoryMentions","query",a)},changeProjectStatus(a,r,n){return t(o=>e.request({document:Il,variables:a,requestHeaders:{...r,...o},signal:n}),"changeProjectStatus","mutation",a)},projectDetails(a,r,n){return t(o=>e.request({document:gl,variables:a,requestHeaders:{...r,...o},signal:n}),"projectDetails","query",a)},searchPullRequests(a,r,n){return t(o=>e.request({document:Ml,variables:a,requestHeaders:{...r,...o},signal:n}),"searchPullRequests","query",a)},pullRequestDetails(a,r,n){return t(o=>e.request({document:ml,variables:a,requestHeaders:{...r,...o},signal:n}),"pullRequestDetails","query",a)},repositoryCollaboratorsForPullRequests(a,r,n){return t(o=>e.request({document:Rl,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryCollaboratorsForPullRequests","query",a)},repositoryProjectsForPullRequests(a,r,n){return t(o=>e.request({document:Al,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryProjectsForPullRequests","query",a)},pullRequestCommits(a,r,n){return t(o=>e.request({document:fl,variables:a,requestHeaders:{...r,...o},signal:n}),"pullRequestCommits","query",a)},closePullRequest(a,r,n){return t(o=>e.request({document:Pl,variables:a,requestHeaders:{...r,...o},signal:n}),"closePullRequest","mutation",a)},reopenPullRequest(a,r,n){return t(o=>e.request({document:El,variables:a,requestHeaders:{...r,...o},signal:n}),"reopenPullRequest","mutation",a)},markPullRequestReadyForReview(a,r,n){return t(o=>e.request({document:Cl,variables:a,requestHeaders:{...r,...o},signal:n}),"markPullRequestReadyForReview","mutation",a)},addPullRequestReview(a,r,n){return t(o=>e.request({document:hl,variables:a,requestHeaders:{...r,...o},signal:n}),"addPullRequestReview","mutation",a)},changePullRequestAssignees(a,r,n){return t(o=>e.request({document:Dl,variables:a,requestHeaders:{...r,...o},signal:n}),"changePullRequestAssignees","mutation",a)},changePullRequestMilestone(a,r,n){return t(o=>e.request({document:xl,variables:a,requestHeaders:{...r,...o},signal:n}),"changePullRequestMilestone","mutation",a)},addPullRequestToProject(a,r,n){return t(o=>e.request({document:_l,variables:a,requestHeaders:{...r,...o},signal:n}),"addPullRequestToProject","mutation",a)},requestReview(a,r,n){return t(o=>e.request({document:Ul,variables:a,requestHeaders:{...r,...o},signal:n}),"requestReview","mutation",a)},mergePullRequest(a,r,n){return t(o=>e.request({document:vl,variables:a,requestHeaders:{...r,...o},signal:n}),"mergePullRequest","mutation",a)},addPullRequestToMergeQueue(a,r,n){return t(o=>e.request({document:Tl,variables:a,requestHeaders:{...r,...o},signal:n}),"addPullRequestToMergeQueue","mutation",a)},removePullRequestFromMergeQueue(a,r,n){return t(o=>e.request({document:wl,variables:a,requestHeaders:{...r,...o},signal:n}),"removePullRequestFromMergeQueue","mutation",a)},enablePullRequestAutoMerge(a,r,n){return t(o=>e.request({document:Ol,variables:a,requestHeaders:{...r,...o},signal:n}),"enablePullRequestAutoMerge","mutation",a)},disablePullRequestAutoMerge(a,r,n){return t(o=>e.request({document:Bl,variables:a,requestHeaders:{...r,...o},signal:n}),"disablePullRequestAutoMerge","mutation",a)},createPullRequest(a,r,n){return t(o=>e.request({document:Ll,variables:a,requestHeaders:{...r,...o},signal:n}),"createPullRequest","mutation",a)},initPullRequest(a,r,n){return t(o=>e.request({document:ql,variables:a,requestHeaders:{...r,...o},signal:n}),"initPullRequest","mutation",a)},searchRepositories(a,r,n){return t(o=>e.request({document:Nl,variables:a,requestHeaders:{...r,...o},signal:n}),"searchRepositories","query",a)},myLatestRepositories(a,r,n){return t(o=>e.request({document:Vl,variables:a,requestHeaders:{...r,...o},signal:n}),"myLatestRepositories","query",a)},milestonesForRepository(a,r,n){return t(o=>e.request({document:kl,variables:a,requestHeaders:{...r,...o},signal:n}),"milestonesForRepository","query",a)},commentsForPullRequest(a,r,n){return t(o=>e.request({document:jl,variables:a,requestHeaders:{...r,...o},signal:n}),"commentsForPullRequest","query",a)},dataForRepository(a,r,n){return t(o=>e.request({document:Fl,variables:a,requestHeaders:{...r,...o},signal:n}),"dataForRepository","query",a)},searchRepositoryBranches(a,r,n){return t(o=>e.request({document:zl,variables:a,requestHeaders:{...r,...o},signal:n}),"searchRepositoryBranches","query",a)},repositoryIssues(a,r,n){return t(o=>e.request({document:Hl,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryIssues","query",a)},repositoryReleases(a,r,n){return t(o=>e.request({document:Gl,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryReleases","query",a)},addStar(a,r,n){return t(o=>e.request({document:$l,variables:a,requestHeaders:{...r,...o},signal:n}),"addStar","mutation",a)},removeStar(a,r,n){return t(o=>e.request({document:Ql,variables:a,requestHeaders:{...r,...o},signal:n}),"removeStar","mutation",a)},myStarredRepositories(a,r,n){return t(o=>e.request({document:Wl,variables:a,requestHeaders:{...r,...o},signal:n}),"myStarredRepositories","query",a)},getViewer(a,r,n){return t(o=>e.request({document:Kl,variables:a,requestHeaders:{...r,...o},signal:n}),"getViewer","query",a)},getViewerStats(a,r,n){return t(o=>e.request({document:Yl,variables:a,requestHeaders:{...r,...o},signal:n}),"getViewerStats","query",a)},getViewerStatsDetails(a,r,n){return t(o=>e.request({document:Jl,variables:a,requestHeaders:{...r,...o},signal:n}),"getViewerStatsDetails","query",a)}}}var Hr=null,Gr=null,ui=null,Xl=(0,ii.getPreferenceValues)();function ec({token:e,type:t}){let a=t==="personal"?`token ${e}`:`bearer ${e}`;ui=e,Hr=ni(new Na("https://api.github.com/graphql",{headers:{authorization:a}})),Gr=new oi.Octokit({auth:e,request:{fetch:Ka}})}var pi=si.OAuthService.github({personalAccessToken:Xl.personalAccessToken,scope:"notifications repo project read:org read:user read:packages",onAuthorize:ec});function Ja(){if(!Hr||!Gr)throw new Error("GitHub clients not initialized");return{github:Hr,octokit:Gr,token:ui}}var Ce=require("@raycast/api"),Et=["container","npm","maven","docker","nuget","rubygems"],Xt=100,li=5,tc={container:"Container",npm:"npm",maven:"Maven",docker:"Docker",nuget:"NuGet",rubygems:"RubyGems"},ac={container:Ce.Color.Blue,npm:Ce.Color.Red,maven:Ce.Color.Orange,docker:Ce.Color.SecondaryText,nuget:Ce.Color.Purple,rubygems:Ce.Color.Magenta};function Ge(e){return tc[e]??e}function Ct(e){return{source:Ce.Icon.Box,tintColor:ac[e]??Ce.Color.PrimaryText}}function ci(e){return e.visibility==="private"}function yi(e){return typeof e.version_count=="number"?e.version_count:void 0}function di(e){return[...e].sort((t,a)=>new Date(a.updated_at).getTime()-new Date(t.updated_at).getTime())}function Si(e){return Et.flatMap(t=>{let a=e.filter(r=>r.package_type===t);return a.length===0?[]:[{packageType:t,title:Ge(t),packages:a}]})}function bi(e){return e.metadata?.container?.tags??e.metadata?.docker?.tag??[]}var ta="read:packages",ea=class extends Error{constructor(){super(`Your GitHub token is missing the "${ta}" scope.`),this.name="MissingPackagesScopeError"}};function rc(e){let t=e;return t?.response?.data?.message??t?.message??""}function nc(e){return e?.status!==403?!1:rc(e).toLowerCase().includes(ta)}async function oc(e,t){let a=[];for(let r=1;r<=li;r++){let{data:n}=await e.request("GET /user/packages",{package_type:t,per_page:Xt,page:r});if(a.push(...n),n.length<Xt)break}return a}function gi(){let{octokit:e}=Ja();return(0,Ii.useCachedPromise)(async()=>{let t=await Promise.allSettled(Et.map(n=>oc(e,n)));if(t.every(n=>n.status==="rejected")){let n=t;throw n.some(o=>nc(o.reason))?new ea:n[0].reason}let a=t.flatMap(n=>n.status==="fulfilled"?n.value:[]),r=Et.filter((n,o)=>t[o].status==="rejected");return{packages:di(a),failedTypes:r}},[],{keepPreviousData:!0})}var ye=require("react/jsx-runtime");function $r({isLoading:e,error:t}){return t instanceof ea?(0,ye.jsx)(v.List.EmptyView,{icon:v.Icon.Lock,title:"Missing Packages Scope",description:`Listing packages requires the "${ta}" scope. Sign out and sign back in, or use a personal access token that has it.`,actions:(0,ye.jsxs)(v.ActionPanel,{children:[(0,ye.jsx)(v.Action,{title:"Open Extension Preferences",icon:v.Icon.Gear,onAction:v.openExtensionPreferences}),(0,ye.jsx)(v.Action.OpenInBrowser,{title:"Create a Personal Access Token",url:`https://github.com/settings/tokens/new?description=Raycast&scopes=repo,read:org,read:user,project,notifications,${ta}`})]})}):t?(0,ye.jsx)(v.List.EmptyView,{icon:v.Icon.Warning,title:"Failed to Load Packages",description:oa(t)}):e?(0,ye.jsx)(v.List.EmptyView,{title:"Loading packages..."}):(0,ye.jsx)(v.List.EmptyView,{icon:v.Icon.Box,title:"No Packages",description:"You haven't published any package to GitHub Packages yet.",actions:(0,ye.jsx)(v.ActionPanel,{children:(0,ye.jsx)(v.Action.OpenInBrowser,{title:"Learn About GitHub Packages",url:"https://docs.github.com/en/packages/learn-github-packages/introduction-to-github-packages"})})})}var U=require("@raycast/api"),Xa=require("date-fns");var mi=require("@raycast/api"),ic=require("lodash");var Mi=require("@raycast/api");function Ri(e,t,{suffix:a="s",withNumber:r=!1}={}){let n=`${t}${e!==1?a:""}`;return r?`${e} ${n}`:n}var L=require("@raycast/api"),Za=require("date-fns");var Ai=V(zt());function fi(e){let{octokit:t}=Ja();return(0,Ai.useCachedPromise)((a,r)=>async({page:n})=>{let{data:o,headers:u}=await t.request("GET /user/packages/{package_type}/{package_name}/versions",{package_type:a,package_name:r,per_page:Xt,page:n+1});return{data:o,hasMore:u.link?.includes('rel="next"')??!1}},[e.package_type,e.name])}var de=require("react/jsx-runtime");function Qr({pkg:e}){let{data:t,isLoading:a,error:r,pagination:n}=fi(e),o=t??[],u=o.length>0?`${o.length}${n?.hasMore?"+":""}`:void 0;return(0,de.jsxs)(L.List,{isLoading:a,navigationTitle:e.name,searchBarPlaceholder:"Filter versions",pagination:n,children:[(0,de.jsx)(L.List.Section,{title:"Versions",subtitle:u,children:o.map(i=>{let s=bi(i),p=new Date(i.created_at),c=i.html_url??e.html_url;return(0,de.jsx)(L.List.Item,{icon:Ct(e.package_type),title:i.name,subtitle:s.length>0?s.join(", "):void 0,accessories:[{date:p,tooltip:`Published ${(0,Za.format)(p,"dd MMM yyyy 'at' HH:mm")} (${(0,Za.formatDistanceToNow)(p,{addSuffix:!0})})`}],actions:(0,de.jsxs)(L.ActionPanel,{title:`Version: ${i.name}`,children:[(0,de.jsx)(L.Action.OpenInBrowser,{title:"Open in GitHub",icon:L.Icon.Globe,url:c}),(0,de.jsx)(L.Action.CopyToClipboard,{title:"Copy Version Name",content:i.name,shortcut:{macOS:{modifiers:["cmd","shift"],key:"."},Windows:{modifiers:["ctrl","shift"],key:"."}}}),(0,de.jsx)(L.Action.CopyToClipboard,{title:"Copy Version URL",content:c,shortcut:{macOS:{modifiers:["cmd","shift"],key:","},Windows:{modifiers:["ctrl","shift"],key:","}}})]})},i.id)})}),r?(0,de.jsx)(L.List.EmptyView,{icon:L.Icon.Warning,title:"Failed to Load Versions",description:oa(r)}):(0,de.jsx)(L.List.EmptyView,{icon:{source:L.Icon.Box,tintColor:L.Color.SecondaryText},title:"No Versions",description:"This package doesn't have any published version."})]})}var Se=require("react/jsx-runtime");function Wr({pkg:e}){let t=new Date(e.updated_at),a=yi(e),r=[];return ci(e)&&r.push({icon:{source:U.Icon.Lock,tintColor:U.Color.Orange},tooltip:"This package is private"}),a!==void 0&&r.push({text:`${a}`,icon:{source:U.Icon.Tag,tintColor:U.Color.SecondaryText},tooltip:Ri(a,"version",{withNumber:!0})}),r.push({date:t,tooltip:`Updated ${(0,Xa.format)(t,"dd MMM yyyy 'at' HH:mm")} (${(0,Xa.formatDistanceToNow)(t,{addSuffix:!0})})`}),(0,Se.jsx)(U.List.Item,{icon:Ct(e.package_type),title:e.name,subtitle:e.repository?.full_name??Ge(e.package_type),keywords:[e.package_type,Ge(e.package_type)],accessories:r,actions:(0,Se.jsxs)(U.ActionPanel,{title:`Package: ${e.name}`,children:[(0,Se.jsx)(U.Action.OpenInBrowser,{title:"Open in GitHub",icon:U.Icon.Globe,url:e.html_url}),(0,Se.jsx)(U.Action.Push,{title:"Show Versions",icon:U.Icon.Tag,shortcut:{macOS:{modifiers:["cmd"],key:"v"},Windows:{modifiers:["ctrl"],key:"v"}},target:(0,Se.jsx)(Qr,{pkg:e})}),e.repository?(0,Se.jsx)(U.Action.OpenInBrowser,{title:"Open Repository",icon:U.Icon.Folder,url:e.repository.html_url,shortcut:{macOS:{modifiers:["cmd"],key:"r"},Windows:{modifiers:["ctrl"],key:"r"}}}):null,(0,Se.jsxs)(U.ActionPanel.Section,{children:[(0,Se.jsx)(U.Action.CopyToClipboard,{title:"Copy Package Name",content:e.name,shortcut:{macOS:{modifiers:["cmd","shift"],key:"."},Windows:{modifiers:["ctrl","shift"],key:"."}}}),(0,Se.jsx)(U.Action.CopyToClipboard,{title:"Copy Package URL",content:e.html_url,shortcut:{macOS:{modifiers:["cmd","shift"],key:","},Windows:{modifiers:["ctrl","shift"],key:","}}})]})]})})}var er=require("@raycast/api");var aa=require("react/jsx-runtime"),tr="all";function Kr({packageTypes:e,setPackageType:t}){let a=Et.filter(r=>e.includes(r));return(0,aa.jsxs)(er.List.Dropdown,{tooltip:"Filter by Package Type",storeValue:!0,onChange:t,children:[(0,aa.jsx)(er.List.Dropdown.Item,{title:"All Types",value:tr}),a.map(r=>(0,aa.jsx)(er.List.Dropdown.Item,{title:Ge(r),value:r,icon:Ct(r)},r))]})}var Pi=V(zt());var Ei=(0,Pi.withAccessToken)(pi);var be=require("react/jsx-runtime");function sc(){let{data:e,isLoading:t,error:a,revalidate:r}=gi(),[n,o]=(0,ht.useState)(tr),u=(0,ht.useMemo)(()=>e?.packages??[],[e]),i=e?.failedTypes??[],s=(0,ht.useMemo)(()=>[...new Set(u.map(c=>c.package_type))],[u]),p=(0,ht.useMemo)(()=>{let c=n===tr?u:u.filter(y=>y.package_type===n);return Si(c)},[u,n]);return(0,be.jsxs)(W.List,{isLoading:t,searchBarPlaceholder:"Filter packages by name",searchBarAccessory:s.length>1?(0,be.jsx)(Kr,{packageTypes:s,setPackageType:o}):void 0,children:[i.length>0?(0,be.jsx)(W.List.Section,{title:"Incomplete",children:(0,be.jsx)(W.List.Item,{icon:{source:W.Icon.Warning,tintColor:W.Color.Orange},title:`Couldn't load ${i.map(Ge).join(", ")}`,subtitle:"Some packages may be missing from this list",actions:(0,be.jsx)(W.ActionPanel,{children:(0,be.jsx)(W.Action,{title:"Reload",icon:W.Icon.ArrowClockwise,onAction:r})})})}):null,p.length>0?p.map(c=>(0,be.jsx)(W.List.Section,{title:c.title,subtitle:`${c.packages.length}`,children:c.packages.map(y=>(0,be.jsx)(Wr,{pkg:y},y.id))},c.packageType)):(0,be.jsx)($r,{isLoading:t,error:a})]})}var uc=Ei(sc);
