"use strict";var Ko=Object.create;var Ht=Object.defineProperty;var Yo=Object.getOwnPropertyDescriptor;var Jo=Object.getOwnPropertyNames;var Zo=Object.getPrototypeOf,Xo=Object.prototype.hasOwnProperty;var Va=(e,t,a)=>()=>{if(a)throw a[0];try{return e&&(t=e(e=0)),t}catch(r){throw a=[r],r}};var C=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(a){throw t=0,a}},Ye=(e,t)=>{for(var a in t)Ht(e,a,{get:t[a],enumerable:!0})},zt=(e,t,a,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Jo(t))!Xo.call(e,n)&&n!==a&&Ht(e,n,{get:()=>t[n],enumerable:!(r=Yo(t,n))||r.enumerable});return e},z=(e,t,a)=>(zt(e,t,"default"),a&&zt(a,t,"default")),k=(e,t,a)=>(a=e!=null?Ko(Zo(e)):{},zt(t||!e||!e.__esModule?Ht(a,"default",{value:e,enumerable:!0}):a,e)),ei=e=>zt(Ht({},"__esModule",{value:!0}),e);var xr=C(Gt=>{"use strict";Object.defineProperty(Gt,"__esModule",{value:!0});Gt.useDeepMemo=void 0;var ka=require("react"),ti=require("dequal/lite");function ai(e){let t=(0,ka.useRef)(e),a=(0,ka.useRef)(0);return(0,ti.dequal)(e,t.current)||(t.current=e,a.current+=1),(0,ka.useMemo)(()=>t.current,[a.current])}Gt.useDeepMemo=ai});var me=C($t=>{"use strict";Object.defineProperty($t,"__esModule",{value:!0});$t.useLatest=void 0;var ri=require("react");function ni(e){let t=(0,ri.useRef)(e);return t.current=e,t}$t.useLatest=ni});var Mt=C(ce=>{"use strict";var oi=ce&&ce.__createBinding||(Object.create?(function(e,t,a,r){r===void 0&&(r=a);var n=Object.getOwnPropertyDescriptor(t,a);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,n)}):(function(e,t,a,r){r===void 0&&(r=a),e[r]=t[a]})),ii=ce&&ce.__setModuleDefault||(Object.create?(function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}):function(e,t){e.default=t}),_r=ce&&ce.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var a in e)a!=="default"&&Object.prototype.hasOwnProperty.call(e,a)&&oi(t,e,a);return ii(t,e),t};Object.defineProperty(ce,"__esModule",{value:!0});ce.showFailureToast=void 0;var si=_r(require("fs")),ui=_r(require("path")),Je=require("@raycast/api");function pi(e,t){let a=e instanceof Error?e.message:String(e);return(0,Je.showToast)({style:Je.Toast.Style.Failure,title:t?.title??"Something went wrong",message:t?.message??a,primaryAction:t?.primaryAction??Ur(e),secondaryAction:t?.primaryAction?Ur(e):void 0})}ce.showFailureToast=pi;var Ur=e=>{let t=!0,a="[Extension Name]...",r="";try{let u=JSON.parse(si.readFileSync(ui.join(Je.environment.assetsPath,"..","package.json"),"utf8"));a=`[${u.title}]...`,r=`https://raycast.com/${u.owner||u.author}/${u.name}`,(!u.owner||u.access==="public")&&(t=!1)}catch{}let n=Je.environment.isDevelopment||t,o=e instanceof Error?e?.stack||e?.message||"":String(e);return{title:n?"Copy Logs":"Report Error",onAction(u){u.hide(),n?Je.Clipboard.copy(o):(0,Je.open)(`https://github.com/raycast/extensions/issues/new?&labels=extension%2Cbug&template=extension_bug_report.yml&title=${encodeURIComponent(a)}&extension-url=${encodeURI(r)}&description=${encodeURIComponent(`#### Error:
\`\`\`
${o}
\`\`\`
`)}`)}}}});var Ze=C(Qt=>{"use strict";Object.defineProperty(Qt,"__esModule",{value:!0});Qt.usePromise=void 0;var W=require("react"),mt=require("@raycast/api"),li=xr(),xe=me(),ci=Mt();function yi(e,t,a){let r=(0,W.useRef)(0),[n,o]=(0,W.useState)({isLoading:!0}),u=(0,xe.useLatest)(e),s=(0,xe.useLatest)(a?.abortable),i=(0,xe.useLatest)(t||[]),p=(0,xe.useLatest)(a?.onError),c=(0,xe.useLatest)(a?.onData),y=(0,xe.useLatest)(a?.onWillExecute),g=(0,xe.useLatest)(a?.failureToastOptions),m=(0,xe.useLatest)(n.data),l=(0,W.useRef)(),S=(0,W.useRef)({page:0}),d=(0,W.useRef)(!1),b=(0,W.useRef)(!0),R=(0,W.useRef)(50),f=(0,W.useCallback)((...V)=>{let v=++r.current;s.current&&(s.current.current?.abort(),s.current.current=new AbortController),y.current?.(V),o(h=>({...h,isLoading:!0}));let ie=di(u.current)(...V);function le(h){return h.name=="AbortError"||v===r.current&&(p.current?p.current(h):mt.environment.launchType!==mt.LaunchType.Background&&(0,ci.showFailureToast)(h,{title:"Failed to fetch latest data",primaryAction:{title:"Retry",onAction(Q){Q.hide(),l.current?.(...i.current||[])}},...g.current}),o({error:h,isLoading:!1})),h}return typeof ie=="function"?(d.current=!0,ie(S.current).then(({data:h,hasMore:Q,cursor:gt})=>(v===r.current&&(S.current&&(S.current.cursor=gt,S.current.lastItem=h?.[h.length-1]),c.current&&c.current(h,S.current),Q&&(R.current=h.length),b.current=Q,o(Na=>S.current.page===0?{data:h,isLoading:!1}:{data:(Na.data||[])?.concat(h),isLoading:!1})),h),h=>(b.current=!1,le(h)))):(d.current=!1,ie.then(h=>(v===r.current&&(c.current&&c.current(h),o({data:h,isLoading:!1})),h),le))},[s,c,p,i,u,o,l,y,S,g]);l.current=f;let M=(0,W.useCallback)(()=>{S.current={page:0};let V=i.current||[];return f(...V)},[f,i]),P=(0,W.useCallback)(async(V,v)=>{let ie;try{if(v?.optimisticUpdate){typeof v?.rollbackOnError!="function"&&v?.rollbackOnError!==!1&&(ie=structuredClone(m.current?.value));let le=v.optimisticUpdate;o(h=>({...h,data:le(h.data)}))}return await V}catch(le){if(typeof v?.rollbackOnError=="function"){let h=v.rollbackOnError;o(Q=>({...Q,data:h(Q.data)}))}else v?.optimisticUpdate&&v?.rollbackOnError!==!1&&o(h=>({...h,data:ie}));throw le}finally{v?.shouldRevalidateAfter!==!1&&(mt.environment.launchType===mt.LaunchType.Background||mt.environment.commandMode==="menu-bar"?await M():M())}},[M,m,o]),A=(0,W.useCallback)(()=>{S.current.page+=1;let V=i.current||[];f(...V)},[S,i,f]);(0,W.useEffect)(()=>{S.current={page:0},a?.execute!==!1?f(...t||[]):s.current&&s.current.current?.abort()},[(0,li.useDeepMemo)([t,a?.execute,f]),s,S]),(0,W.useEffect)(()=>()=>{s.current&&s.current.current?.abort()},[s]);let U=a?.execute!==!1?n.isLoading:!1,q={...n,isLoading:U},oe=d.current?{pageSize:R.current,hasMore:b.current,onLoadMore:A}:void 0;return{...q,revalidate:M,mutate:P,pagination:oe}}Qt.usePromise=yi;function di(e){return e===Promise.all||e===Promise.race||e===Promise.resolve||e===Promise.reject?e.bind(Promise):e}});var Ue=C(ye=>{"use strict";var Si=ye&&ye.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ye,"__esModule",{value:!0});ye.hash=ye.reviver=ye.replacer=void 0;var bi=Si(require("object-hash"));function Ii(e,t){let a=this[e];return a instanceof Date?`__raycast_cached_date__${a.toString()}`:Buffer.isBuffer(a)?`__raycast_cached_buffer__${a.toString("base64")}`:t}ye.replacer=Ii;function gi(e,t){return typeof t=="string"&&t.startsWith("__raycast_cached_date__")?new Date(t.replace("__raycast_cached_date__","")):typeof t=="string"&&t.startsWith("__raycast_cached_buffer__")?Buffer.from(t.replace("__raycast_cached_buffer__",""),"base64"):t}ye.reviver=gi;function Mi(e,t){return(0,bi.default)(e,{replacer:a=>a instanceof URLSearchParams?a.toString():a,...t})}ye.hash=Mi});var Kt=C(Wt=>{"use strict";Object.defineProperty(Wt,"__esModule",{value:!0});Wt.useCachedState=void 0;var ja=require("react"),mi=require("@raycast/api"),Fa=me(),vr=Ue(),Ri=Symbol("cache without namespace"),Tr=new Map;function Ai(e,t,a){let r=a?.cacheNamespace||Ri,n=Tr.get(r)||Tr.set(r,new mi.Cache({namespace:a?.cacheNamespace})).get(r);if(!n)throw new Error("Missing cache");let o=(0,Fa.useLatest)(e),u=(0,Fa.useLatest)(t),s=(0,ja.useSyncExternalStore)(n.subscribe,()=>{try{return n.get(o.current)}catch(y){console.error("Could not get Cache data:",y);return}}),i=(0,ja.useMemo)(()=>{if(typeof s<"u"){if(s==="undefined")return;try{return JSON.parse(s,vr.reviver)}catch(y){return console.warn("The cached data is corrupted",y),u.current}}else return u.current},[s,u]),p=(0,Fa.useLatest)(i),c=(0,ja.useCallback)(y=>{let g=typeof y=="function"?y(p.current):y;if(typeof g>"u")n.set(o.current,"undefined");else{let m=JSON.stringify(g,vr.replacer);n.set(o.current,m)}return g},[n,o,p]);return[i,c]}Wt.useCachedState=Ai});var At=C(Yt=>{"use strict";Object.defineProperty(Yt,"__esModule",{value:!0});Yt.useCachedPromise=void 0;var Rt=require("react"),fi=Kt(),Pi=Ze(),Ei=me(),wr=Ue(),Xe=Symbol();function Ci(e,t,a){let{initialData:r,keepPreviousData:n,internal_cacheKeySuffix:o,...u}=a||{},s=(0,Rt.useRef)(),[i,p]=(0,fi.useCachedState)((0,wr.hash)(t||[])+o,Xe,{cacheNamespace:(0,wr.hash)(e)}),c=(0,Rt.useRef)(i!==Xe?i:r),y=(0,Rt.useRef)(void 0),{mutate:g,revalidate:m,...l}=(0,Pi.usePromise)(e,t||[],{...u,onData(f,M){y.current=M,u.onData&&u.onData(f,M),!(M&&M.page>0)&&(s.current="promise",c.current=f,p(f))}}),S,d=l.pagination;y.current&&y.current.page>0&&l.data?S=l.data:s.current==="promise"?S=c.current:n&&i!==Xe?(S=i,d&&(d.hasMore=!0,d.pageSize=i.length)):n&&i===Xe?S=c.current:i!==Xe?(S=i,d&&(d.hasMore=!0,d.pageSize=i.length)):S=r;let b=(0,Ei.useLatest)(S),R=(0,Rt.useCallback)(async(f,M)=>{let P;try{if(M?.optimisticUpdate){typeof M?.rollbackOnError!="function"&&M?.rollbackOnError!==!1&&(P=structuredClone(b.current));let A=M.optimisticUpdate(b.current);s.current="cache",c.current=A,p(A)}return await g(f,{shouldRevalidateAfter:M?.shouldRevalidateAfter})}catch(A){if(typeof M?.rollbackOnError=="function"){let U=M.rollbackOnError(b.current);s.current="cache",c.current=U,p(U)}else M?.optimisticUpdate&&M?.rollbackOnError!==!1&&(s.current="cache",c.current=P,p(P));throw A}},[p,g,b,c,s]);return(0,Rt.useEffect)(()=>{i!==Xe&&(s.current="cache",c.current=i)},[i]),{data:S,isLoading:l.isLoading,error:l.error,mutate:y.current&&y.current.page>0?g:R,pagination:d,revalidate:m}}Yt.useCachedPromise=Ci});var Gr=C((ue,Hr)=>{"use strict";Object.defineProperty(ue,"__esModule",{value:!0});function rt(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var se=rt(require("stream")),qr=rt(require("http")),Zt=rt(require("url")),Nr=rt(require("whatwg-url")),hi=rt(require("https")),Ve=rt(require("zlib")),Di=se.Readable,Re=Symbol("buffer"),za=Symbol("type"),Pt=class e{constructor(){this[za]="";let t=arguments[0],a=arguments[1],r=[],n=0;if(t){let u=t,s=Number(u.length);for(let i=0;i<s;i++){let p=u[i],c;p instanceof Buffer?c=p:ArrayBuffer.isView(p)?c=Buffer.from(p.buffer,p.byteOffset,p.byteLength):p instanceof ArrayBuffer?c=Buffer.from(p):p instanceof e?c=p[Re]:c=Buffer.from(typeof p=="string"?p:String(p)),n+=c.length,r.push(c)}}this[Re]=Buffer.concat(r);let o=a&&a.type!==void 0&&String(a.type).toLowerCase();o&&!/[^\u0020-\u007E]/.test(o)&&(this[za]=o)}get size(){return this[Re].length}get type(){return this[za]}text(){return Promise.resolve(this[Re].toString())}arrayBuffer(){let t=this[Re],a=t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength);return Promise.resolve(a)}stream(){let t=new Di;return t._read=function(){},t.push(this[Re]),t.push(null),t}toString(){return"[object Blob]"}slice(){let t=this.size,a=arguments[0],r=arguments[1],n,o;a===void 0?n=0:a<0?n=Math.max(t+a,0):n=Math.min(a,t),r===void 0?o=t:r<0?o=Math.max(t+r,0):o=Math.min(r,t);let u=Math.max(o-n,0),i=this[Re].slice(n,n+u),p=new e([],{type:arguments[2]});return p[Re]=i,p}};Object.defineProperties(Pt.prototype,{size:{enumerable:!0},type:{enumerable:!0},slice:{enumerable:!0}});Object.defineProperty(Pt.prototype,Symbol.toStringTag,{value:"Blob",writable:!1,enumerable:!1,configurable:!0});function B(e,t,a){Error.call(this,e),this.message=e,this.type=t,a&&(this.code=this.errno=a.code),Error.captureStackTrace(this,this.constructor)}B.prototype=Object.create(Error.prototype);B.prototype.constructor=B;B.prototype.name="FetchError";var Qa;try{Qa=require("encoding").convert}catch{}var fe=Symbol("Body internals"),Or=se.PassThrough;function T(e){var t=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.size;let n=r===void 0?0:r;var o=a.timeout;let u=o===void 0?0:o;e==null?e=null:Vr(e)?e=Buffer.from(e.toString()):Ct(e)||Buffer.isBuffer(e)||(Object.prototype.toString.call(e)==="[object ArrayBuffer]"?e=Buffer.from(e):ArrayBuffer.isView(e)?e=Buffer.from(e.buffer,e.byteOffset,e.byteLength):e instanceof se||(e=Buffer.from(String(e)))),this[fe]={body:e,disturbed:!1,error:null},this.size=n,this.timeout=u,e instanceof se&&e.on("error",function(s){let i=s.name==="AbortError"?s:new B(`Invalid response body while trying to fetch ${t.url}: ${s.message}`,"system",s);t[fe].error=i})}T.prototype={get body(){return this[fe].body},get bodyUsed(){return this[fe].disturbed},arrayBuffer(){return et.call(this).then(function(e){return e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength)})},blob(){let e=this.headers&&this.headers.get("content-type")||"";return et.call(this).then(function(t){return Object.assign(new Pt([],{type:e.toLowerCase()}),{[Re]:t})})},json(){var e=this;return et.call(this).then(function(t){try{return JSON.parse(t.toString())}catch(a){return T.Promise.reject(new B(`invalid json response body at ${e.url} reason: ${a.message}`,"invalid-json"))}})},text(){return et.call(this).then(function(e){return e.toString()})},buffer(){return et.call(this)},textConverted(){var e=this;return et.call(this).then(function(t){return xi(t,e.headers)})}};Object.defineProperties(T.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0}});T.mixIn=function(e){for(let t of Object.getOwnPropertyNames(T.prototype))if(!(t in e)){let a=Object.getOwnPropertyDescriptor(T.prototype,t);Object.defineProperty(e,t,a)}};function et(){var e=this;if(this[fe].disturbed)return T.Promise.reject(new TypeError(`body used already for: ${this.url}`));if(this[fe].disturbed=!0,this[fe].error)return T.Promise.reject(this[fe].error);let t=this.body;if(t===null)return T.Promise.resolve(Buffer.alloc(0));if(Ct(t)&&(t=t.stream()),Buffer.isBuffer(t))return T.Promise.resolve(t);if(!(t instanceof se))return T.Promise.resolve(Buffer.alloc(0));let a=[],r=0,n=!1;return new T.Promise(function(o,u){let s;e.timeout&&(s=setTimeout(function(){n=!0,u(new B(`Response timeout while trying to fetch ${e.url} (over ${e.timeout}ms)`,"body-timeout"))},e.timeout)),t.on("error",function(i){i.name==="AbortError"?(n=!0,u(i)):u(new B(`Invalid response body while trying to fetch ${e.url}: ${i.message}`,"system",i))}),t.on("data",function(i){if(!(n||i===null)){if(e.size&&r+i.length>e.size){n=!0,u(new B(`content size at ${e.url} over limit: ${e.size}`,"max-size"));return}r+=i.length,a.push(i)}}),t.on("end",function(){if(!n){clearTimeout(s);try{o(Buffer.concat(a,r))}catch(i){u(new B(`Could not create Buffer from response body for ${e.url}: ${i.message}`,"system",i))}}})})}function xi(e,t){if(typeof Qa!="function")throw new Error("The package `encoding` must be installed to use the textConverted() function");let a=t.get("content-type"),r="utf-8",n,o;return a&&(n=/charset=([^;]*)/i.exec(a)),o=e.slice(0,1024).toString(),!n&&o&&(n=/<meta.+?charset=(['"])(.+?)\1/i.exec(o)),!n&&o&&(n=/<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(o),n||(n=/<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(o),n&&n.pop()),n&&(n=/charset=(.*)/i.exec(n.pop()))),!n&&o&&(n=/<\?xml.+?encoding=(['"])(.+?)\1/i.exec(o)),n&&(r=n.pop(),(r==="gb2312"||r==="gbk")&&(r="gb18030")),Qa(e,"UTF-8",r).toString()}function Vr(e){return typeof e!="object"||typeof e.append!="function"||typeof e.delete!="function"||typeof e.get!="function"||typeof e.getAll!="function"||typeof e.has!="function"||typeof e.set!="function"?!1:e.constructor.name==="URLSearchParams"||Object.prototype.toString.call(e)==="[object URLSearchParams]"||typeof e.sort=="function"}function Ct(e){return typeof e=="object"&&typeof e.arrayBuffer=="function"&&typeof e.type=="string"&&typeof e.stream=="function"&&typeof e.constructor=="function"&&typeof e.constructor.name=="string"&&/^(Blob|File)$/.test(e.constructor.name)&&/^(Blob|File)$/.test(e[Symbol.toStringTag])}function kr(e){let t,a,r=e.body;if(e.bodyUsed)throw new Error("cannot clone body after it is used");return r instanceof se&&typeof r.getBoundary!="function"&&(t=new Or,a=new Or,r.pipe(t),r.pipe(a),e[fe].body=t,r=a),r}function jr(e){return e===null?null:typeof e=="string"?"text/plain;charset=UTF-8":Vr(e)?"application/x-www-form-urlencoded;charset=UTF-8":Ct(e)?e.type||null:Buffer.isBuffer(e)||Object.prototype.toString.call(e)==="[object ArrayBuffer]"||ArrayBuffer.isView(e)?null:typeof e.getBoundary=="function"?`multipart/form-data;boundary=${e.getBoundary()}`:e instanceof se?null:"text/plain;charset=UTF-8"}function Fr(e){let t=e.body;return t===null?0:Ct(t)?t.size:Buffer.isBuffer(t)?t.length:t&&typeof t.getLengthSync=="function"&&(t._lengthRetrievers&&t._lengthRetrievers.length==0||t.hasKnownLength&&t.hasKnownLength())?t.getLengthSync():null}function Ui(e,t){let a=t.body;a===null?e.end():Ct(a)?a.stream().pipe(e):Buffer.isBuffer(a)?(e.write(a),e.end()):a.pipe(e)}T.Promise=global.Promise;var zr=/[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/,Wa=/[^\t\x20-\x7e\x80-\xff]/;function ft(e){if(e=`${e}`,zr.test(e)||e==="")throw new TypeError(`${e} is not a legal HTTP header name`)}function Br(e){if(e=`${e}`,Wa.test(e))throw new TypeError(`${e} is not a legal HTTP header value`)}function tt(e,t){t=t.toLowerCase();for(let a in e)if(a.toLowerCase()===t)return a}var _=Symbol("map"),ee=class e{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:void 0;if(this[_]=Object.create(null),t instanceof e){let a=t.raw(),r=Object.keys(a);for(let n of r)for(let o of a[n])this.append(n,o);return}if(t!=null)if(typeof t=="object"){let a=t[Symbol.iterator];if(a!=null){if(typeof a!="function")throw new TypeError("Header pairs must be iterable");let r=[];for(let n of t){if(typeof n!="object"||typeof n[Symbol.iterator]!="function")throw new TypeError("Each header pair must be iterable");r.push(Array.from(n))}for(let n of r){if(n.length!==2)throw new TypeError("Each header pair must be a name/value tuple");this.append(n[0],n[1])}}else for(let r of Object.keys(t)){let n=t[r];this.append(r,n)}}else throw new TypeError("Provided initializer must be an object")}get(t){t=`${t}`,ft(t);let a=tt(this[_],t);return a===void 0?null:this[_][a].join(", ")}forEach(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:void 0,r=Ka(this),n=0;for(;n<r.length;){var o=r[n];let u=o[0],s=o[1];t.call(a,s,u,this),r=Ka(this),n++}}set(t,a){t=`${t}`,a=`${a}`,ft(t),Br(a);let r=tt(this[_],t);this[_][r!==void 0?r:t]=[a]}append(t,a){t=`${t}`,a=`${a}`,ft(t),Br(a);let r=tt(this[_],t);r!==void 0?this[_][r].push(a):this[_][t]=[a]}has(t){return t=`${t}`,ft(t),tt(this[_],t)!==void 0}delete(t){t=`${t}`,ft(t);let a=tt(this[_],t);a!==void 0&&delete this[_][a]}raw(){return this[_]}keys(){return Ha(this,"key")}values(){return Ha(this,"value")}[Symbol.iterator](){return Ha(this,"key+value")}};ee.prototype.entries=ee.prototype[Symbol.iterator];Object.defineProperty(ee.prototype,Symbol.toStringTag,{value:"Headers",writable:!1,enumerable:!1,configurable:!0});Object.defineProperties(ee.prototype,{get:{enumerable:!0},forEach:{enumerable:!0},set:{enumerable:!0},append:{enumerable:!0},has:{enumerable:!0},delete:{enumerable:!0},keys:{enumerable:!0},values:{enumerable:!0},entries:{enumerable:!0}});function Ka(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"key+value";return Object.keys(e[_]).sort().map(t==="key"?function(r){return r.toLowerCase()}:t==="value"?function(r){return e[_][r].join(", ")}:function(r){return[r.toLowerCase(),e[_][r].join(", ")]})}var Ya=Symbol("internal");function Ha(e,t){let a=Object.create(Ja);return a[Ya]={target:e,kind:t,index:0},a}var Ja=Object.setPrototypeOf({next(){if(!this||Object.getPrototypeOf(this)!==Ja)throw new TypeError("Value of `this` is not a HeadersIterator");var e=this[Ya];let t=e.target,a=e.kind,r=e.index,n=Ka(t,a),o=n.length;return r>=o?{value:void 0,done:!0}:(this[Ya].index=r+1,{value:n[r],done:!1})}},Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));Object.defineProperty(Ja,Symbol.toStringTag,{value:"HeadersIterator",writable:!1,enumerable:!1,configurable:!0});function _i(e){let t=Object.assign({__proto__:null},e[_]),a=tt(e[_],"Host");return a!==void 0&&(t[a]=t[a][0]),t}function vi(e){let t=new ee;for(let a of Object.keys(e))if(!zr.test(a))if(Array.isArray(e[a]))for(let r of e[a])Wa.test(r)||(t[_][a]===void 0?t[_][a]=[r]:t[_][a].push(r));else Wa.test(e[a])||(t[_][a]=[e[a]]);return t}var _e=Symbol("Response internals"),Ti=qr.STATUS_CODES,X=class e{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};T.call(this,t,a);let r=a.status||200,n=new ee(a.headers);if(t!=null&&!n.has("Content-Type")){let o=jr(t);o&&n.append("Content-Type",o)}this[_e]={url:a.url,status:r,statusText:a.statusText||Ti[r],headers:n,counter:a.counter}}get url(){return this[_e].url||""}get status(){return this[_e].status}get ok(){return this[_e].status>=200&&this[_e].status<300}get redirected(){return this[_e].counter>0}get statusText(){return this[_e].statusText}get headers(){return this[_e].headers}clone(){return new e(kr(this),{url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected})}};T.mixIn(X.prototype);Object.defineProperties(X.prototype,{url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}});Object.defineProperty(X.prototype,Symbol.toStringTag,{value:"Response",writable:!1,enumerable:!1,configurable:!0});var Ae=Symbol("Request internals"),wi=Zt.URL||Nr.URL,Oi=Zt.parse,Bi=Zt.format;function Ga(e){return/^[a-zA-Z][a-zA-Z\d+\-.]*:/.exec(e)&&(e=new wi(e).toString()),Oi(e)}var Li="destroy"in se.Readable.prototype;function Jt(e){return typeof e=="object"&&typeof e[Ae]=="object"}function qi(e){let t=e&&typeof e=="object"&&Object.getPrototypeOf(e);return!!(t&&t.constructor.name==="AbortSignal")}var Te=class e{constructor(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r;Jt(t)?r=Ga(t.url):(t&&t.href?r=Ga(t.href):r=Ga(`${t}`),t={});let n=a.method||t.method||"GET";if(n=n.toUpperCase(),(a.body!=null||Jt(t)&&t.body!==null)&&(n==="GET"||n==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");let o=a.body!=null?a.body:Jt(t)&&t.body!==null?kr(t):null;T.call(this,o,{timeout:a.timeout||t.timeout||0,size:a.size||t.size||0});let u=new ee(a.headers||t.headers||{});if(o!=null&&!u.has("Content-Type")){let i=jr(o);i&&u.append("Content-Type",i)}let s=Jt(t)?t.signal:null;if("signal"in a&&(s=a.signal),s!=null&&!qi(s))throw new TypeError("Expected signal to be an instanceof AbortSignal");this[Ae]={method:n,redirect:a.redirect||t.redirect||"follow",headers:u,parsedURL:r,signal:s},this.follow=a.follow!==void 0?a.follow:t.follow!==void 0?t.follow:20,this.compress=a.compress!==void 0?a.compress:t.compress!==void 0?t.compress:!0,this.counter=a.counter||t.counter||0,this.agent=a.agent||t.agent}get method(){return this[Ae].method}get url(){return Bi(this[Ae].parsedURL)}get headers(){return this[Ae].headers}get redirect(){return this[Ae].redirect}get signal(){return this[Ae].signal}clone(){return new e(this)}};T.mixIn(Te.prototype);Object.defineProperty(Te.prototype,Symbol.toStringTag,{value:"Request",writable:!1,enumerable:!1,configurable:!0});Object.defineProperties(Te.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0}});function Ni(e){let t=e[Ae].parsedURL,a=new ee(e[Ae].headers);if(a.has("Accept")||a.set("Accept","*/*"),!t.protocol||!t.hostname)throw new TypeError("Only absolute URLs are supported");if(!/^https?:$/.test(t.protocol))throw new TypeError("Only HTTP(S) protocols are supported");if(e.signal&&e.body instanceof se.Readable&&!Li)throw new Error("Cancellation of streamed requests with AbortSignal is not supported in node < 8");let r=null;if(e.body==null&&/^(POST|PUT)$/i.test(e.method)&&(r="0"),e.body!=null){let o=Fr(e);typeof o=="number"&&(r=String(o))}r&&a.set("Content-Length",r),a.has("User-Agent")||a.set("User-Agent","node-fetch/1.0 (+https://github.com/bitinn/node-fetch)"),e.compress&&!a.has("Accept-Encoding")&&a.set("Accept-Encoding","gzip,deflate");let n=e.agent;return typeof n=="function"&&(n=n(t)),Object.assign({},t,{method:e.method,headers:_i(a),agent:n})}function at(e){Error.call(this,e),this.type="aborted",this.message=e,Error.captureStackTrace(this,this.constructor)}at.prototype=Object.create(Error.prototype);at.prototype.constructor=at;at.prototype.name="AbortError";var Et=Zt.URL||Nr.URL,Lr=se.PassThrough,Vi=function(t,a){let r=new Et(a).hostname,n=new Et(t).hostname;return r===n||r[r.length-n.length-1]==="."&&r.endsWith(n)},ki=function(t,a){let r=new Et(a).protocol,n=new Et(t).protocol;return r===n};function ve(e,t){if(!ve.Promise)throw new Error("native promise missing, set fetch.Promise to your favorite alternative");return T.Promise=ve.Promise,new ve.Promise(function(a,r){let n=new Te(e,t),o=Ni(n),u=(o.protocol==="https:"?hi:qr).request,s=n.signal,i=null,p=function(){let S=new at("The user aborted a request.");r(S),n.body&&n.body instanceof se.Readable&&$a(n.body,S),!(!i||!i.body)&&i.body.emit("error",S)};if(s&&s.aborted){p();return}let c=function(){p(),m()},y=u(o),g;s&&s.addEventListener("abort",c);function m(){y.abort(),s&&s.removeEventListener("abort",c),clearTimeout(g)}n.timeout&&y.once("socket",function(l){g=setTimeout(function(){r(new B(`network timeout at: ${n.url}`,"request-timeout")),m()},n.timeout)}),y.on("error",function(l){r(new B(`request to ${n.url} failed, reason: ${l.message}`,"system",l)),i&&i.body&&$a(i.body,l),m()}),ji(y,function(l){s&&s.aborted||i&&i.body&&$a(i.body,l)}),parseInt(process.version.substring(1))<14&&y.on("socket",function(l){l.addListener("close",function(S){let d=l.listenerCount("data")>0;if(i&&d&&!S&&!(s&&s.aborted)){let b=new Error("Premature close");b.code="ERR_STREAM_PREMATURE_CLOSE",i.body.emit("error",b)}})}),y.on("response",function(l){clearTimeout(g);let S=vi(l.headers);if(ve.isRedirect(l.statusCode)){let M=S.get("Location"),P=null;try{P=M===null?null:new Et(M,n.url).toString()}catch{if(n.redirect!=="manual"){r(new B(`uri requested responds with an invalid redirect URL: ${M}`,"invalid-redirect")),m();return}}switch(n.redirect){case"error":r(new B(`uri requested responds with a redirect, redirect mode is set to error: ${n.url}`,"no-redirect")),m();return;case"manual":if(P!==null)try{S.set("Location",P)}catch(U){r(U)}break;case"follow":if(P===null)break;if(n.counter>=n.follow){r(new B(`maximum redirect reached at: ${n.url}`,"max-redirect")),m();return}let A={headers:new ee(n.headers),follow:n.follow,counter:n.counter+1,agent:n.agent,compress:n.compress,method:n.method,body:n.body,signal:n.signal,timeout:n.timeout,size:n.size};if(!Vi(n.url,P)||!ki(n.url,P))for(let U of["authorization","www-authenticate","cookie","cookie2"])A.headers.delete(U);if(l.statusCode!==303&&n.body&&Fr(n)===null){r(new B("Cannot follow redirect with body being a readable stream","unsupported-redirect")),m();return}(l.statusCode===303||(l.statusCode===301||l.statusCode===302)&&n.method==="POST")&&(A.method="GET",A.body=void 0,A.headers.delete("content-length")),a(ve(new Te(P,A))),m();return}}l.once("end",function(){s&&s.removeEventListener("abort",c)});let d=l.pipe(new Lr),b={url:n.url,status:l.statusCode,statusText:l.statusMessage,headers:S,size:n.size,timeout:n.timeout,counter:n.counter},R=S.get("Content-Encoding");if(!n.compress||n.method==="HEAD"||R===null||l.statusCode===204||l.statusCode===304){i=new X(d,b),a(i);return}let f={flush:Ve.Z_SYNC_FLUSH,finishFlush:Ve.Z_SYNC_FLUSH};if(R=="gzip"||R=="x-gzip"){d=d.pipe(Ve.createGunzip(f)),i=new X(d,b),a(i);return}if(R=="deflate"||R=="x-deflate"){let M=l.pipe(new Lr);M.once("data",function(P){(P[0]&15)===8?d=d.pipe(Ve.createInflate()):d=d.pipe(Ve.createInflateRaw()),i=new X(d,b),a(i)}),M.on("end",function(){i||(i=new X(d,b),a(i))});return}if(R=="br"&&typeof Ve.createBrotliDecompress=="function"){d=d.pipe(Ve.createBrotliDecompress()),i=new X(d,b),a(i);return}i=new X(d,b),a(i)}),Ui(y,n)})}function ji(e,t){let a;e.on("socket",function(r){a=r}),e.on("response",function(r){let n=r.headers;n["transfer-encoding"]==="chunked"&&!n["content-length"]&&r.once("close",function(o){if(a&&a.listenerCount("data")>0&&!o){let s=new Error("Premature close");s.code="ERR_STREAM_PREMATURE_CLOSE",t(s)}})})}function $a(e,t){e.destroy?e.destroy(t):(e.emit("error",t),e.end())}ve.isRedirect=function(e){return e===301||e===302||e===303||e===307||e===308};ve.Promise=global.Promise;Hr.exports=ue=ve;Object.defineProperty(ue,"__esModule",{value:!0});ue.default=ue;ue.Headers=ee;ue.Request=Te;ue.Response=X;ue.FetchError=B;ue.AbortError=at});var Dt=C((ke,$r)=>{var ht=Gr(),Fi=ht.default||ht,Xt=function(e,t){return/^\/\//.test(e)&&(e="https:"+e),Fi.call(this,e,t)};Xt.ponyfill=!0;$r.exports=ke=Xt;ke.fetch=Xt;ke.Headers=ht.Headers;ke.Request=ht.Request;ke.Response=ht.Response;ke.default=Xt});var Za=C(ea=>{"use strict";Object.defineProperty(ea,"__esModule",{value:!0});ea.isJSON=void 0;function zi(e){if(e){let t=Gi(e);if(!t)return!1;if(t.subtype==="json"||t.suffix==="json"||t.suffix&&/\bjson\b/i.test(t.suffix)||t.subtype&&/\bjson\b/i.test(t.subtype))return!0}return!1}ea.isJSON=zi;var Hi=/^([A-Za-z0-9][A-Za-z0-9!#$&^_-]{0,126})\/([A-Za-z0-9][A-Za-z0-9!#$&^_.+-]{0,126});?$/;function Gi(e){let t=e.indexOf(";"),a=t!==-1?e.slice(0,t).trim():e.trim(),r=Hi.exec(a.toLowerCase().toLowerCase());if(!r)return;let n=r[1],o=r[2],u,s=o.lastIndexOf("+");return s!==-1&&(u=o.substring(s+1),o=o.substring(0,s)),{type:n,subtype:o,suffix:u}}});var Yr=C(ta=>{"use strict";Object.defineProperty(ta,"__esModule",{value:!0});ta.useFetch=void 0;var nt=require("react"),$i=At(),Qr=me(),Wr=Dt(),Qi=Za(),Kr=Ue();async function Wi(e){if(!e.ok)throw new Error(e.statusText);let t=e.headers.get("content-type");return t&&(0,Qi.isJSON)(t)?await e.json():await e.text()}function Ki(e){return{data:e,hasMore:!1}}function Yi(e,t){let{parseResponse:a,mapResult:r,initialData:n,execute:o,keepPreviousData:u,onError:s,onData:i,onWillExecute:p,failureToastOptions:c,...y}=t||{},g={initialData:n,execute:o,keepPreviousData:u,onError:s,onData:i,onWillExecute:p,failureToastOptions:c},m=(0,Qr.useLatest)(a||Wi),l=(0,Qr.useLatest)(r||Ki),S=(0,nt.useRef)(),d=(0,nt.useRef)(),b=typeof e=="function"?e({page:0}):void 0;(!S.current||typeof d.current>"u"||d.current!==b)&&(S.current=e),d.current=b;let R=(0,nt.useRef)(),f=(0,nt.useCallback)((A,U)=>async q=>{let oe=await(0,Wr.fetch)(A(q),{signal:R.current?.signal,...U}),V=await m.current(oe);return l.current?.(V)},[m,l]),M=(0,nt.useCallback)(async(A,U)=>{let q=await(0,Wr.fetch)(A,{signal:R.current?.signal,...U}),oe=await m.current(q);return l.current(oe)?.data},[m,l]),P=(0,nt.useMemo)(()=>d.current?f:M,[d,M,f]);return(0,$i.useCachedPromise)(P,[S.current,y],{...g,internal_cacheKeySuffix:d.current+(0,Kr.hash)(l.current)+(0,Kr.hash)(m.current),abortable:R})}ta.useFetch=Yi});var aa=C(te=>{"use strict";var Ji=te&&te.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(te,"__esModule",{value:!0});te.defaultParsing=te.handleOutput=te.getSpawnedResult=te.getSpawnedPromise=void 0;var Zi=require("node:buffer"),Xr=Ji(require("node:stream")),Xi=require("node:util"),es=require("signal-exit");function ts(e,{timeout:t}={}){let a=new Promise((s,i)=>{e.on("exit",(p,c)=>{s({exitCode:p,signal:c,timedOut:!1})}),e.on("error",p=>{i(p)}),e.stdin&&e.stdin.on("error",p=>{i(p)})});if(t===0||t===void 0)return a;let r,n=new Promise((s,i)=>{r=setTimeout(()=>{e.kill("SIGTERM"),i(Object.assign(new Error("Timed out"),{timedOut:!0,signal:"SIGTERM"}))},t)}),o=a.finally(()=>{clearTimeout(r)}),u=(0,es.onExit)(()=>{e.kill()});return Promise.race([n,o]).finally(()=>u())}te.getSpawnedPromise=ts;var Xa=class extends Error{constructor(){super("The output is too big"),this.name="MaxBufferError"}},as=(0,Xi.promisify)(Xr.default.pipeline);function rs(e){let{encoding:t}=e,a=t==="buffer",r=new Xr.default.PassThrough({objectMode:!1});t&&t!=="buffer"&&r.setEncoding(t);let n=0,o=[];return r.on("data",u=>{o.push(u),n+=u.length}),r.getBufferedValue=()=>a?Buffer.concat(o,n):o.join(""),r.getBufferedLength=()=>n,r}async function Jr(e,t){let a=rs(t);return await new Promise((r,n)=>{let o=u=>{u&&a.getBufferedLength()<=Zi.constants.MAX_LENGTH&&(u.bufferedData=a.getBufferedValue()),n(u)};(async()=>{try{await as(e,a),r()}catch(u){o(u)}})(),a.on("data",()=>{a.getBufferedLength()>1e3*1e3*80&&o(new Xa)})}),a.getBufferedValue()}async function Zr(e,t){e.destroy();try{return await t}catch(a){return a.bufferedData}}async function ns({stdout:e,stderr:t},{encoding:a},r){let n=Jr(e,{encoding:a}),o=Jr(t,{encoding:a});try{return await Promise.all([r,n,o])}catch(u){return Promise.all([{error:u,exitCode:null,signal:u.signal,timedOut:u.timedOut||!1},Zr(e,n),Zr(t,o)])}}te.getSpawnedResult=ns;function os(e){let t=typeof e=="string"?`
`:10,a=typeof e=="string"?"\r":13;return e[e.length-1]===t&&(e=e.slice(0,-1)),e[e.length-1]===a&&(e=e.slice(0,-1)),e}function is(e,t){return e.stripFinalNewline?os(t):t}te.handleOutput=is;var ss=({timedOut:e,timeout:t,signal:a,exitCode:r})=>e?`timed out after ${t} milliseconds`:a!=null?`was killed with ${a}`:r!=null?`failed with exit code ${r}`:"failed",us=({stdout:e,stderr:t,error:a,signal:r,exitCode:n,command:o,timedOut:u,options:s,parentError:i})=>{let c=`Command ${ss({timedOut:u,timeout:s?.timeout,signal:r,exitCode:n})}: ${o}`,y=a?`${c}
${a.message}`:c,g=[y,t,e].filter(Boolean).join(`
`);return a?a.originalMessage=a.message:a=i,a.message=g,a.shortMessage=y,a.command=o,a.exitCode=n,a.signal=r,a.stdout=e,a.stderr=t,"bufferedData"in a&&delete a.bufferedData,a};function ps({stdout:e,stderr:t,error:a,exitCode:r,signal:n,timedOut:o,command:u,options:s,parentError:i}){if(a||r!==0||n!==null)throw us({error:a,exitCode:r,signal:n,stdout:e,stderr:t,command:u,timedOut:o,options:s,parentError:i});return e}te.defaultParsing=ps});var tn=C(ot=>{"use strict";var ls=ot&&ot.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ot,"__esModule",{value:!0});ot.useExec=void 0;var cs=ls(require("node:child_process")),en=require("react"),ys=At(),ds=me(),xt=aa(),Ss=/ +/g;function bs(e,t){if(t)return[e,...t];let a=[];for(let r of e.trim().split(Ss)){let n=a[a.length-1];n&&n.endsWith("\\")?a[a.length-1]=`${n.slice(0,-1)} ${r}`:a.push(r)}return a}function Is(e,t,a){let{parseOutput:r,input:n,onData:o,onWillExecute:u,initialData:s,execute:i,keepPreviousData:p,onError:c,failureToastOptions:y,...g}=Array.isArray(t)?a||{}:t||{},m={initialData:s,execute:i,keepPreviousData:p,onError:c,onData:o,onWillExecute:u,failureToastOptions:y},l=(0,en.useRef)(),S=(0,ds.useLatest)(r||xt.defaultParsing),d=(0,en.useCallback)(async(b,R,f,M)=>{let[P,...A]=bs(b,R),U=[P,...A].join(" "),q={stripFinalNewline:!0,...f,timeout:f?.timeout||1e4,signal:l.current?.signal,encoding:f?.encoding===null?"buffer":f?.encoding||"utf8",env:{PATH:"/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin",...process.env,...f?.env}},oe=cs.default.spawn(P,A,q),V=(0,xt.getSpawnedPromise)(oe,q);M&&oe.stdin.end(M);let[{error:v,exitCode:ie,signal:le,timedOut:h},Q,gt]=await(0,xt.getSpawnedResult)(oe,q,V),Na=(0,xt.handleOutput)(q,Q),Wo=(0,xt.handleOutput)(q,gt);return S.current({stdout:Na,stderr:Wo,error:v,exitCode:ie,signal:le,timedOut:h,command:U,options:q,parentError:new Error})},[S]);return(0,ys.useCachedPromise)(d,[e,Array.isArray(t)?t:[],g,n],{...m,abortable:l})}ot.useExec=Is});var on=C(it=>{"use strict";var na=it&&it.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(it,"__esModule",{value:!0});it.useStreamJSON=void 0;var gs=require("@raycast/api"),an=na(Dt()),vt=require("node:fs"),er=require("node:fs/promises"),ra=require("node:path"),rn=require("node:stream/promises"),Ut=require("react"),Ms=na(require("stream-chain")),ms=require("stream-json"),Rs=na(require("stream-json/filters/Pick")),As=na(require("stream-json/streamers/StreamArray")),nn=Za(),fs=At(),Ps=Ue();async function _t(e,t,a){if(typeof e=="object"||e.startsWith("http://")||e.startsWith("https://"))return await Es(e,t,a);if(e.startsWith("file://"))return await Cs((0,ra.normalize)(decodeURIComponent(new URL(e).pathname)),t,a?.signal?a.signal:void 0);throw new Error("Only HTTP(S) or file URLs are supported")}async function Es(e,t,a){let r=await(0,an.default)(e,a);if(!r.ok)throw new Error("Failed to fetch URL");if(!(0,nn.isJSON)(r.headers.get("content-type")))throw new Error("URL does not return JSON");if(!r.body)throw new Error("Failed to retrieve expected JSON content: Response body is missing or inaccessible.");await(0,rn.pipeline)(r.body,(0,vt.createWriteStream)(t),a?.signal?{signal:a.signal}:void 0)}async function Cs(e,t,a){await(0,rn.pipeline)((0,vt.createReadStream)(e),(0,vt.createWriteStream)(t),a?{signal:a}:void 0)}async function hs(e,t,a,r,n){let o=(0,ra.join)(t,a);try{await(0,er.stat)(t)}catch{(0,vt.mkdirSync)(t,{recursive:!0}),await _t(e,o,n);return}if(r){await _t(e,o,n);return}let u;try{u=await(0,er.stat)(o)}catch{await _t(e,o,n);return}if(typeof e=="object"||e.startsWith("http://")||e.startsWith("https://")){let s=await(0,an.default)(e,{...n,method:"HEAD"});if(!s.ok)throw new Error("Could not fetch URL");if(!(0,nn.isJSON)(s.headers.get("content-type")))throw new Error("URL does not return JSON");let i=Date.parse(s.headers.get("last-modified")??"");if(u.size===0||Number.isNaN(i)||i>u.mtimeMs){await _t(e,o,n);return}}else if(e.startsWith("file://"))try{(await(0,er.stat)((0,ra.normalize)(decodeURIComponent(new URL(e).pathname)))).mtimeMs>u.mtimeMs&&await _t(e,o,n)}catch{throw new Error("Source file could not be read")}else throw new Error("Only HTTP(S) or file URLs are supported")}async function*Ds(e,t,a,r,n,o){let u=[],s=new Ms.default([(0,vt.createReadStream)(e),r?Rs.default.withParser({filter:r}):(0,ms.parser)(),new As.default,i=>o?.(i.value)??i.value]);a?.addEventListener("abort",()=>{s.destroy()});try{for await(let i of s){if(a?.aborted)return[];(!n||n(i))&&u.push(i),u.length>=t&&(yield u,u=[])}}catch(i){throw s.destroy(),i}return u.length>0&&(yield u),[]}function xs(e,t){let{initialData:a,execute:r,keepPreviousData:n,onError:o,onData:u,onWillExecute:s,failureToastOptions:i,dataPath:p,filter:c,transform:y,pageSize:g=20,...m}=t??{},l=(0,Ut.useRef)(),S=(0,Ut.useRef)(),d={initialData:a,execute:r,keepPreviousData:n,onError:o,onData:u,onWillExecute:s,failureToastOptions:i},b=(0,Ut.useRef)(null),R=(0,Ut.useRef)(null),f=(0,Ut.useRef)(!1);return(0,fs.useCachedPromise)((M,P,A,U,q,oe)=>async({page:V})=>{let v=(0,Ps.hash)(M)+".json",ie=gs.environment.supportPath;if(V===0){R.current?.abort(),R.current=new AbortController;let Q=(0,ra.join)(ie,v),gt=!!(l.current&&l.current!==M&&S.current&&S.current===Q);l.current=M,S.current=Q,await hs(M,ie,v,gt,{...A,signal:R.current?.signal}),b.current=Ds(Q,P,R.current?.signal,U,q,oe)}if(!b.current)return{hasMore:f.current,data:[]};let{value:le,done:h}=await b.current.next();return f.current=!h,{hasMore:f.current,data:le??[]}},[e,g,m,p,c,y],d)}it.useStreamJSON=xs});var ar=C(de=>{"use strict";var tr=de&&de.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(de,"__esModule",{value:!0});de.baseExecuteSQL=de.isPermissionError=de.PermissionError=void 0;var Us=require("node:fs"),oa=require("node:fs/promises"),_s=tr(require("node:os")),sn=tr(require("node:child_process")),un=tr(require("node:path")),ia=aa(),vs=Ue(),ua=class extends Error{constructor(t){super(t),this.name="PermissionError"}};de.PermissionError=ua;function Ts(e){return e instanceof Error&&e.name==="PermissionError"}de.isPermissionError=Ts;async function ws(e,t,a){if(!(0,Us.existsSync)(e))throw new Error("The database does not exist");let r=a?.signal,n,o=sn.default.spawn("sqlite3",["--json","--readonly",e,t],{signal:r}),u=(0,ia.getSpawnedPromise)(o),[{error:s,exitCode:i,signal:p},c,y]=await(0,ia.getSpawnedResult)(o,{encoding:"utf-8"},u);if(sa(r),y.match("(5)")||y.match("(14)")){if(!n){let g=un.default.join(_s.default.tmpdir(),"useSQL",(0,vs.hash)(e));await(0,oa.mkdir)(g,{recursive:!0}),sa(r),n=un.default.join(g,"db.db"),await(0,oa.copyFile)(e,n),await(0,oa.writeFile)(n+"-shm",""),await(0,oa.writeFile)(n+"-wal",""),sa(r)}o=sn.default.spawn("sqlite3",["--json","--readonly","--vfs","unix-none",n,t],{signal:r}),u=(0,ia.getSpawnedPromise)(o),[{error:s,exitCode:i,signal:p},c,y]=await(0,ia.getSpawnedResult)(o,{encoding:"utf-8"},u),sa(r)}if(s||i!==0||p!==null)throw y.includes("authorization denied")?new ua("You do not have permission to access the database."):new Error(y||"Unknown error");return JSON.parse(c.trim()||"[]")}de.baseExecuteSQL=ws;function sa(e){if(e?.aborted){let t=new Error("aborted");throw t.name="AbortError",t}}});var ln=C(st=>{"use strict";var Os=st&&st.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(st,"__esModule",{value:!0});st.useSQL=void 0;var Se=require("react/jsx-runtime"),j=require("@raycast/api"),Bs=require("node:fs"),Ls=Os(require("node:os")),pa=require("react"),qs=Ze(),Ns=me(),Vs=Mt(),rr=ar();function ks(e,t,a){let{permissionPriming:r,...n}=a||{},[o,u]=(0,pa.useState)(),s=(0,Ns.useLatest)(a||{}),i=(0,pa.useRef)(),p=(0,pa.useCallback)(y=>{console.error(y);let g=y instanceof Error&&y.message.includes("authorization denied")?new rr.PermissionError("You do not have permission to access the database."):y;(0,rr.isPermissionError)(g)?u((0,Se.jsx)(js,{priming:s.current.permissionPriming})):s.current.onError?s.current.onError(g):j.environment.launchType!==j.LaunchType.Background&&(0,Vs.showFailureToast)(g,{title:"Cannot query the data"})},[s]),c=(0,pa.useMemo)(()=>{if(!(0,Bs.existsSync)(e))throw new Error("The database does not exist");return async(y,g)=>{let m=i.current?.signal;return(0,rr.baseExecuteSQL)(y,g,{signal:m})}},[e]);return{...(0,qs.usePromise)(c,[e,t],{...n,onError:p}),permissionView:o}}st.useSQL=ks;var pn=parseInt(Ls.default.release().split(".")[0])>=22,nr=pn?"Settings":"Preferences";function js(e){let t=pn?{title:"Open System Settings -> Privacy",target:"x-apple.systempreferences:com.apple.preference.security?Privacy_AllFiles"}:{title:"Open System Preferences -> Security",target:"x-apple.systempreferences:com.apple.preference.security?Privacy_AllFiles"};return j.environment.commandMode==="menu-bar"?(0,Se.jsxs)(j.MenuBarExtra,{icon:j.Icon.Warning,title:j.environment.commandName,children:[(0,Se.jsx)(j.MenuBarExtra.Item,{title:"Raycast needs full disk access",tooltip:`You can revert this access in ${nr} whenever you want`}),e.priming?(0,Se.jsx)(j.MenuBarExtra.Item,{title:e.priming,tooltip:`You can revert this access in ${nr} whenever you want`}):null,(0,Se.jsx)(j.MenuBarExtra.Separator,{}),(0,Se.jsx)(j.MenuBarExtra.Item,{title:t.title,onAction:()=>(0,j.open)(t.target)})]}):(0,Se.jsx)(j.List,{children:(0,Se.jsx)(j.List.EmptyView,{icon:{source:{light:"https://raycast.com/uploads/extensions-utils-security-permissions-light.png",dark:"https://raycast.com/uploads/extensions-utils-security-permissions-dark.png"}},title:"Raycast needs full disk access.",description:`${e.priming?e.priming+`
`:""}You can revert this access in ${nr} whenever you want.`,actions:(0,Se.jsx)(j.ActionPanel,{children:(0,Se.jsx)(j.Action.Open,{...t})})})})}});var yn=C(ut=>{"use strict";Object.defineProperty(ut,"__esModule",{value:!0});ut.useForm=ut.FormValidation=void 0;var Pe=require("react"),cn=me(),ir;(function(e){e.Required="required"})(ir||(ut.FormValidation=ir={}));function or(e,t){if(e){if(typeof e=="function")return e(t);if(e===ir.Required){let a=typeof t<"u"&&t!==null;if(a)switch(typeof t){case"string":a=t.length>0;break;case"object":Array.isArray(t)?a=t.length>0:t instanceof Date&&(a=t.getTime()>0);break;default:break}if(!a)return"The item is required"}}}function Fs(e){let{onSubmit:t,validation:a,initialValues:r={}}=e,[n,o]=(0,Pe.useState)(r),[u,s]=(0,Pe.useState)({}),i=(0,Pe.useRef)({}),p=(0,cn.useLatest)(a||{}),c=(0,cn.useLatest)(t),y=(0,Pe.useCallback)(b=>{i.current[b]?.focus()},[i]),g=(0,Pe.useCallback)(async b=>{let R=!1;for(let[M,P]of Object.entries(p.current)){let A=or(P,b[M]);A&&(R||(R={},y(M)),R[M]=A)}if(R)return s(R),!1;let f=await c.current(b);return typeof f=="boolean"?f:!0},[p,c,y]),m=(0,Pe.useCallback)((b,R)=>{s(f=>({...f,[b]:R}))},[s]),l=(0,Pe.useCallback)(function(b,R){o(f=>({...f,[b]:typeof R=="function"?R(f[b]):R}))},[o]),S=(0,Pe.useMemo)(()=>new Proxy({},{get(b,R){let f=p.current[R],M=n[R];return{onChange(P){u[R]&&(or(f,P)||m(R,void 0)),l(R,P)},onBlur(P){let A=or(f,P.target.value);A&&m(R,A)},error:u[R],id:R,value:typeof M>"u"?null:M,ref:P=>{i.current[R]=P}}}}),[u,p,m,n,i,l]),d=(0,Pe.useCallback)(b=>{s({}),Object.entries(i.current).forEach(([R,f])=>{b?.[R]||f?.reset()}),b&&o(b)},[o,s,i]);return{handleSubmit:g,setValidationError:m,setValue:l,values:n,itemProps:S,focus:y,reset:d}}ut.useForm=Fs});var Sn=C(la=>{"use strict";Object.defineProperty(la,"__esModule",{value:!0});la.useAI=void 0;var dn=require("react"),zs=require("@raycast/api"),Hs=Ze();function Gs(e,t={}){let{creativity:a,stream:r,model:n,...o}=t,[u,s]=(0,dn.useState)(""),i=(0,dn.useRef)(),{isLoading:p,error:c,revalidate:y}=(0,Hs.usePromise)(async(g,m,l)=>{s("");let S=zs.AI.ask(g,{creativity:m,model:n,signal:i.current?.signal});l===!1?s(await S):(S.on("data",d=>{s(b=>b+d)}),await S)},[e,a,r],{...o,abortable:i});return{isLoading:p,data:u,error:c,revalidate:y}}la.useAI=Gs});var gn=C(ca=>{"use strict";Object.defineProperty(ca,"__esModule",{value:!0});ca.useFrecencySorting=void 0;var sr=require("react"),bn=me(),$s=Kt(),Qs=10,In=1440*60*1e3,Ws=Math.log(2)/(Qs*In),Ks={Default:100,Embed:0,Bookmark:140};function Ys(e){let t=Date.now(),a=e?e.lastVisited:0,r=e?e.frecency:0,n=(t-a)/In,o=Ks.Default*Math.exp(-Ws*n),u=r+o;return{lastVisited:t,frecency:u}}var Js=e=>{if(process.env.NODE_ENV!=="production"&&(typeof e!="object"||!e||!("id"in e)||typeof e.id!="string"))throw new Error("Specify a key function or make sure your items have an 'id' property");return e.id};function Zs(e,t){let a=(0,bn.useLatest)(t?.key||Js),r=(0,bn.useLatest)(t?.sortUnvisited),[n,o]=(0,$s.useCachedState)(`raycast_frecency_${t?.namespace}`,{}),u=(0,sr.useCallback)(async function(c){let y=a.current(c);o(g=>{let m=g[y],l=Ys(m);return{...g,[y]:l}})},[a,o]),s=(0,sr.useCallback)(async function(c){let y=a.current(c);o(g=>{let m={...g};return delete m[y],m})},[a,o]);return{data:(0,sr.useMemo)(()=>e?e.sort((p,c)=>{let y=n[a.current(p)],g=n[a.current(c)];return y&&!g?-1:!y&&g?1:y&&g?g.frecency-y.frecency:r.current?r.current(p,c):0}):[],[n,e,a,r]),visitItem:u,resetRanking:s}}ca.useFrecencySorting=Zs});var Rn=C(ya=>{"use strict";Object.defineProperty(ya,"__esModule",{value:!0});ya.useLocalStorage=void 0;var ur=require("@raycast/api"),Mn=Mt(),mn=Ue(),Xs=Ze();function eu(e,t){let{data:a,isLoading:r,mutate:n}=(0,Xs.usePromise)(async s=>{let i=await ur.LocalStorage.getItem(s);return typeof i<"u"?JSON.parse(i,mn.reviver):t},[e]);async function o(s){try{await n(ur.LocalStorage.setItem(e,JSON.stringify(s,mn.replacer)),{optimisticUpdate(i){return i}})}catch(i){await(0,Mn.showFailureToast)(i,{title:"Failed to set value in local storage"})}}async function u(){try{await n(ur.LocalStorage.removeItem(e),{optimisticUpdate(){}})}catch(s){await(0,Mn.showFailureToast)(s,{title:"Failed to remove value from local storage"})}}return{value:a,setValue:o,removeValue:u,isLoading:r}}ya.useLocalStorage=eu});var Cn=C(pt=>{"use strict";Object.defineProperty(pt,"__esModule",{value:!0});pt.slightlyLighterColor=pt.slightlyDarkerColor=void 0;function tu(e){let t=0,a=0,r=0;if(e.length===4)t=parseInt(`${e[1]}${e[1]}`,16),a=parseInt(`${e[2]}${e[2]}`,16),r=parseInt(`${e[3]}${e[3]}`,16);else if(e.length===7)t=parseInt(`${e[1]}${e[2]}`,16),a=parseInt(`${e[3]}${e[4]}`,16),r=parseInt(`${e[5]}${e[6]}`,16);else throw new Error(`Malformed hex color: ${e}`);return{r:t,g:a,b:r}}function au({r:e,g:t,b:a}){let r=e.toString(16),n=t.toString(16),o=a.toString(16);return r.length===1&&(r=`0${r}`),n.length===1&&(n=`0${n}`),o.length===1&&(o=`0${o}`),`#${r}${n}${o}`}function ru({r:e,g:t,b:a}){e/=255,t/=255,a/=255;let r=Math.min(e,t,a),n=Math.max(e,t,a),o=n-r,u=0,s=0,i=0;return o===0?u=0:n===e?u=(t-a)/o%6:n===t?u=(a-e)/o+2:u=(e-t)/o+4,u=Math.round(u*60),u<0&&(u+=360),i=(n+r)/2,s=o===0?0:o/(1-Math.abs(2*i-1)),s=+(s*100).toFixed(1),i=+(i*100).toFixed(1),{h:u,s,l:i}}function nu({h:e,s:t,l:a}){t/=100,a/=100;let r=(1-Math.abs(2*a-1))*t,n=r*(1-Math.abs(e/60%2-1)),o=a-r/2,u=0,s=0,i=0;return e>=0&&e<60?(u=r,s=n,i=0):e>=60&&e<120?(u=n,s=r,i=0):e>=120&&e<180?(u=0,s=r,i=n):e>=180&&e<240?(u=0,s=n,i=r):e>=240&&e<300?(u=n,s=0,i=r):e>=300&&e<360&&(u=r,s=0,i=n),u=Math.round((u+o)*255),s=Math.round((s+o)*255),i=Math.round((i+o)*255),{r:u,g:s,b:i}}function An(e){return ru(tu(e))}function fn(e){return au(nu(e))}function Pn(e,t,a){return t<a?e<t?t:e>a?a:e:e<a?a:e>t?t:e}var En=12;function ou(e){let t=An(e);return fn({h:t.h,s:t.s,l:Pn(t.l-En,0,100)})}pt.slightlyDarkerColor=ou;function iu(e){let t=An(e);return fn({h:t.h,s:t.s,l:Pn(t.l+En,0,100)})}pt.slightlyLighterColor=iu});var xn=C(da=>{"use strict";Object.defineProperty(da,"__esModule",{value:!0});da.getAvatarIcon=void 0;var hn=Cn();function lt(e,t){let a=e.charCodeAt(t);if(Number.isNaN(a))return["",t];if(a<55296||a>57343)return[e.charAt(t),t];if(55296<=a&&a<=56319){if(e.length<=t+1)throw new Error("High surrogate without following low surrogate");let n=e.charCodeAt(t+1);if(56320>n||n>57343)throw new Error("High surrogate without following low surrogate");return[e.charAt(t)+e.charAt(t+1),t+1]}if(t===0)throw new Error("Low surrogate without preceding high surrogate");let r=e.charCodeAt(t-1);if(55296>r||r>56319)throw new Error("Low surrogate without preceding high surrogate");return[e.charAt(t+1),t+1]}var Dn=["#DC829A","#D64854","#D47600","#D36CDD","#52A9E4","#7871E8","#70920F","#43B93A","#EB6B3E","#26B795","#D85A9B","#A067DC","#BD9500","#5385D9"];function su(e,t){let a=e.trim().split(" "),r;if(a.length==1&&lt(a[0],0)[0])r=lt(a[0],0)[0];else if(a.length>1){let i=lt(a[0],0)[0]||"",p=lt(a[a.length-1],0)[0]??"";r=i+p}else r="";let n;if(t?.background)n=t?.background;else{let i=0,[p,c]=lt(r,0);for(;p;)i+=p.charCodeAt(0),[p,c]=lt(r,c+1);let y=i%Dn.length;n=Dn[y]}let u=50-0;return`data:image/svg+xml,${`<svg width="100px" height="100px">
  ${t?.gradient!==!1?`<defs>
      <linearGradient id="Gradient" x1="0.25" x2="0.75" y1="0" y2="1">
        <stop offset="0%" stop-color="${(0,hn.slightlyLighterColor)(n)}"/>
        <stop offset="50%" stop-color="${n}"/>
        <stop offset="100%" stop-color="${(0,hn.slightlyDarkerColor)(n)}"/>
      </linearGradient>
  </defs>`:""}
      <circle cx="50" cy="50" r="${u}" fill="${t?.gradient!==!1?"url(#Gradient)":n}" />
      ${r?`<text x="50" y="80" font-size="${u-1}" font-family="Inter, sans-serif" text-anchor="middle" fill="white">${r.toUpperCase()}</text>`:""}
    </svg>
  `.replaceAll(`
`,"")}`}da.getAvatarIcon=su});var _n=C(Sa=>{"use strict";Object.defineProperty(Sa,"__esModule",{value:!0});Sa.getFavicon=void 0;var Un=require("@raycast/api"),uu=require("url");function pu(e,t){try{let r=(typeof e=="string"?new uu.URL(e):e).hostname;return{source:`https://www.google.com/s2/favicons?sz=${t?.size??64}&domain=${r}`,fallback:t?.fallback??Un.Icon.Link,mask:t?.mask}}catch(a){return console.error(a),Un.Icon.Link}}Sa.getFavicon=pu});var wn=C(ba=>{"use strict";Object.defineProperty(ba,"__esModule",{value:!0});ba.getProgressIcon=void 0;var vn=require("@raycast/api");function Tn(e,t,a,r){let n=(r-90)*Math.PI/180;return{x:e+a*Math.cos(n),y:t+a*Math.sin(n)}}function lu(e,t,a,r,n){let o=Tn(e,t,a,n),u=Tn(e,t,a,r),s=n-r<=180?"0":"1";return["M",o.x,o.y,"A",a,a,0,s,0,u.x,u.y].join(" ")}function cu(e,t=vn.Color.Red,a){let r=a?.background||(vn.environment.appearance==="light"?"black":"white"),n=a?.backgroundOpacity||.1,o=10,s=50-5-o/2;return`data:image/svg+xml,${`<svg width="100px" height="100px">
      <circle cx="50" cy="50" r="${s}" stroke-width="${o}" stroke="${e<1?r:t}" opacity="${e<1?n:"1"}" fill="none" />
      ${e>0&&e<1?`<path d="${lu(50,50,s,0,e*360)}" stroke="${t}" stroke-width="${o}" fill="none" />`:""}
    </svg>
  `.replaceAll(`
`,"")}`}ba.getProgressIcon=cu});var On=C(Ee=>{"use strict";var yu=Ee&&Ee.__createBinding||(Object.create?(function(e,t,a,r){r===void 0&&(r=a);var n=Object.getOwnPropertyDescriptor(t,a);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,n)}):(function(e,t,a,r){r===void 0&&(r=a),e[r]=t[a]})),pr=Ee&&Ee.__exportStar||function(e,t){for(var a in e)a!=="default"&&!Object.prototype.hasOwnProperty.call(t,a)&&yu(t,e,a)};Object.defineProperty(Ee,"__esModule",{value:!0});pr(xn(),Ee);pr(_n(),Ee);pr(wn(),Ee)});var Bn=C(N=>{"use strict";Object.defineProperty(N,"__esModule",{value:!0});N.zoomService=N.slackService=N.linearService=N.jiraService=N.googleService=N.githubService=N.asanaService=void 0;var F=require("@raycast/api"),je=lr(),Ia={asana:"1191201745684312",github:"7235fe8d42157f1f38c0",linear:"c8ff37b9225c3c9aefd7d66ea0e5b6f1",slack:"851756884692.5546927290212"},we=e=>`data:image/svg+xml,${e}`,Fe={asana:we('<svg xmlns="http://www.w3.org/2000/svg" width="251" height="232" fill="none"><path fill="#F06A6A" d="M179.383 54.373c0 30.017-24.337 54.374-54.354 54.374-30.035 0-54.373-24.338-54.373-54.374C70.656 24.338 94.993 0 125.029 0c30.017 0 54.354 24.338 54.354 54.373ZM54.393 122.33C24.376 122.33.02 146.668.02 176.685c0 30.017 24.337 54.373 54.373 54.373 30.035 0 54.373-24.338 54.373-54.373 0-30.017-24.338-54.355-54.373-54.355Zm141.253 0c-30.035 0-54.373 24.338-54.373 54.374 0 30.035 24.338 54.373 54.373 54.373 30.017 0 54.374-24.338 54.374-54.373 0-30.036-24.338-54.374-54.374-54.374Z"/></svg>'),github:{source:we('<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>'),tintColor:F.Color.PrimaryText},google:we('<svg xmlns="http://www.w3.org/2000/svg" style="display:block" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/><path fill="none" d="M0 0h48v48H0z"/></svg>'),jira:we('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="2361" height="2500" viewBox="2.59 0 214.091 224"><linearGradient id="a" x1="102.4" x2="56.15" y1="218.63" y2="172.39" gradientTransform="matrix(1 0 0 -1 0 264)" gradientUnits="userSpaceOnUse"><stop offset=".18" stop-color="#0052cc"/><stop offset="1" stop-color="#2684ff"/></linearGradient><linearGradient xlink:href="#a" id="b" x1="114.65" x2="160.81" y1="85.77" y2="131.92"/><path fill="#2684ff" d="M214.06 105.73 117.67 9.34 108.33 0 35.77 72.56 2.59 105.73a8.89 8.89 0 0 0 0 12.54l66.29 66.29L108.33 224l72.55-72.56 1.13-1.12 32.05-32a8.87 8.87 0 0 0 0-12.59zm-105.73 39.39L75.21 112l33.12-33.12L141.44 112z"/><path fill="url(#a)" d="M108.33 78.88a55.75 55.75 0 0 1-.24-78.61L35.62 72.71l39.44 39.44z"/><path fill="url(#b)" d="m141.53 111.91-33.2 33.21a55.77 55.77 0 0 1 0 78.86L181 151.35z"/></svg>'),linear:{source:{light:we('<svg xmlns="http://www.w3.org/2000/svg" fill="#222326" width="200" height="200" viewBox="0 0 100 100"><path d="M1.22541 61.5228c-.2225-.9485.90748-1.5459 1.59638-.857L39.3342 97.1782c.6889.6889.0915 1.8189-.857 1.5964C20.0515 94.4522 5.54779 79.9485 1.22541 61.5228ZM.00189135 46.8891c-.01764375.2833.08887215.5599.28957165.7606L52.3503 99.7085c.2007.2007.4773.3075.7606.2896 2.3692-.1476 4.6938-.46 6.9624-.9259.7645-.157 1.0301-1.0963.4782-1.6481L2.57595 39.4485c-.55186-.5519-1.49117-.2863-1.648174.4782-.465915 2.2686-.77832 4.5932-.92588465 6.9624ZM4.21093 29.7054c-.16649.3738-.08169.8106.20765 1.1l64.77602 64.776c.2894.2894.7262.3742 1.1.2077 1.7861-.7956 3.5171-1.6927 5.1855-2.684.5521-.328.6373-1.0867.1832-1.5407L8.43566 24.3367c-.45409-.4541-1.21271-.3689-1.54074.1832-.99132 1.6684-1.88843 3.3994-2.68399 5.1855ZM12.6587 18.074c-.3701-.3701-.393-.9637-.0443-1.3541C21.7795 6.45931 35.1114 0 49.9519 0 77.5927 0 100 22.4073 100 50.0481c0 14.8405-6.4593 28.1724-16.7199 37.3375-.3903.3487-.984.3258-1.3542-.0443L12.6587 18.074Z"/></svg>'),dark:we('<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="200" height="200" viewBox="0 0 100 100"><path d="M1.22541 61.5228c-.2225-.9485.90748-1.5459 1.59638-.857L39.3342 97.1782c.6889.6889.0915 1.8189-.857 1.5964C20.0515 94.4522 5.54779 79.9485 1.22541 61.5228ZM.00189135 46.8891c-.01764375.2833.08887215.5599.28957165.7606L52.3503 99.7085c.2007.2007.4773.3075.7606.2896 2.3692-.1476 4.6938-.46 6.9624-.9259.7645-.157 1.0301-1.0963.4782-1.6481L2.57595 39.4485c-.55186-.5519-1.49117-.2863-1.648174.4782-.465915 2.2686-.77832 4.5932-.92588465 6.9624ZM4.21093 29.7054c-.16649.3738-.08169.8106.20765 1.1l64.77602 64.776c.2894.2894.7262.3742 1.1.2077 1.7861-.7956 3.5171-1.6927 5.1855-2.684.5521-.328.6373-1.0867.1832-1.5407L8.43566 24.3367c-.45409-.4541-1.21271-.3689-1.54074.1832-.99132 1.6684-1.88843 3.3994-2.68399 5.1855ZM12.6587 18.074c-.3701-.3701-.393-.9637-.0443-1.3541C21.7795 6.45931 35.1114 0 49.9519 0 77.5927 0 100 22.4073 100 50.0481c0 14.8405-6.4593 28.1724-16.7199 37.3375-.3903.3487-.984.3258-1.3542-.0443L12.6587 18.074Z" /></svg>')}},slack:we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="73 73 124 124"><style>.st0{fill:#e01e5a}.st1{fill:#36c5f0}.st2{fill:#2eb67d}.st3{fill:#ecb22e}</style><path d="M99.4 151.2c0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9h12.9v12.9zM105.9 151.2c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v32.3c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9v-32.3z" class="st0"/><path d="M118.8 99.4c-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v12.9h-12.9zM118.8 105.9c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H86.5c-7.1 0-12.9-5.8-12.9-12.9s5.8-12.9 12.9-12.9h32.3z" class="st1"/><path d="M170.6 118.8c0-7.1 5.8-12.9 12.9-12.9 7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9h-12.9v-12.9zM164.1 118.8c0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9V86.5c0-7.1 5.8-12.9 12.9-12.9 7.1 0 12.9 5.8 12.9 12.9v32.3z" class="st2"/><path d="M151.2 170.6c7.1 0 12.9 5.8 12.9 12.9 0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9v-12.9h12.9zM151.2 164.1c-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9h32.3c7.1 0 12.9 5.8 12.9 12.9 0 7.1-5.8 12.9-12.9 12.9h-32.3z" class="st3"/></svg>'),zoom:we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 351.845 80"><path d="M73.786 78.835H10.88A10.842 10.842 0 0 1 .833 72.122a10.841 10.841 0 0 1 2.357-11.85L46.764 16.7h-31.23C6.954 16.699 0 9.744 0 1.165h58.014c4.414 0 8.357 2.634 10.046 6.712a10.843 10.843 0 0 1-2.356 11.85L22.13 63.302h36.122c8.58 0 15.534 6.955 15.534 15.534Zm278.059-48.544C351.845 13.588 338.256 0 321.553 0c-8.934 0-16.975 3.89-22.524 10.063C293.48 3.89 285.44 0 276.505 0c-16.703 0-30.291 13.588-30.291 30.291v48.544c8.579 0 15.534-6.955 15.534-15.534v-33.01c0-8.137 6.62-14.757 14.757-14.757s14.757 6.62 14.757 14.757v33.01c0 8.58 6.955 15.534 15.534 15.534V30.291c0-8.137 6.62-14.757 14.757-14.757s14.758 6.62 14.758 14.757v33.01c0 8.58 6.954 15.534 15.534 15.534V30.291ZM238.447 40c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.908-40 40-40 40 17.909 40 40Zm-15.534 0c0-13.512-10.954-24.466-24.466-24.466S173.98 26.488 173.98 40s10.953 24.466 24.466 24.466S222.913 53.512 222.913 40Zm-70.68 0c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.909-40 40-40 40 17.909 40 40Zm-15.534 0c0-13.512-10.954-24.466-24.466-24.466S87.767 26.488 87.767 40s10.954 24.466 24.466 24.466S136.699 53.512 136.699 40Z" style="fill:#0b5cff"/></svg>')},du=e=>new je.OAuthService({client:new F.OAuth.PKCEClient({redirectMethod:F.OAuth.RedirectMethod.Web,providerName:"Asana",providerIcon:Fe.asana,providerId:"asana",description:"Connect your Asana account"}),clientId:e.clientId??Ia.asana,authorizeUrl:e.authorizeUrl??"https://asana.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://asana.oauth.raycast.com/token",refreshTokenUrl:e.refreshTokenUrl??"https://asana.oauth.raycast.com/refresh-token",scope:e.scope,personalAccessToken:e.personalAccessToken,onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});N.asanaService=du;var Su=e=>new je.OAuthService({client:new F.OAuth.PKCEClient({redirectMethod:F.OAuth.RedirectMethod.Web,providerName:"GitHub",providerIcon:Fe.github,providerId:"github",description:"Connect your GitHub account"}),clientId:e.clientId??Ia.github,authorizeUrl:e.authorizeUrl??"https://github.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://github.oauth.raycast.com/token",refreshTokenUrl:e.refreshTokenUrl??"https://github.oauth.raycast.com/refresh-token",scope:e.scope,personalAccessToken:e.personalAccessToken,onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});N.githubService=Su;var bu=e=>new je.OAuthService({client:new F.OAuth.PKCEClient({redirectMethod:F.OAuth.RedirectMethod.AppURI,providerName:"Google",providerIcon:Fe.google,providerId:"google",description:"Connect your Google account"}),clientId:e.clientId,authorizeUrl:e.authorizeUrl??"https://accounts.google.com/o/oauth2/v2/auth",tokenUrl:e.tokenUrl??"https://oauth2.googleapis.com/token",refreshTokenUrl:e.tokenUrl,scope:e.scope,personalAccessToken:e.personalAccessToken,bodyEncoding:e.bodyEncoding??"url-encoded",onAuthorize:e.onAuthorize,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});N.googleService=bu;var Iu=e=>new je.OAuthService({client:new F.OAuth.PKCEClient({redirectMethod:F.OAuth.RedirectMethod.Web,providerName:"Jira",providerIcon:Fe.jira,providerId:"jira",description:"Connect your Jira account"}),clientId:e.clientId,authorizeUrl:e.authorizeUrl??"https://auth.atlassian.com/authorize",tokenUrl:e.tokenUrl??"https://auth.atlassian.com/oauth/token",refreshTokenUrl:e.refreshTokenUrl,scope:e.scope,personalAccessToken:e.personalAccessToken,onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});N.jiraService=Iu;var gu=e=>new je.OAuthService({client:new F.OAuth.PKCEClient({redirectMethod:F.OAuth.RedirectMethod.Web,providerName:"Linear",providerIcon:Fe.linear,providerId:"linear",description:"Connect your Linear account"}),clientId:e.clientId??Ia.linear,authorizeUrl:e.authorizeUrl??"https://linear.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://linear.oauth.raycast.com/token",refreshTokenUrl:e.refreshTokenUrl??"https://linear.oauth.raycast.com/refresh-token",scope:e.scope,extraParameters:{actor:"user"},onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});N.linearService=gu;var Mu=e=>new je.OAuthService({client:new F.OAuth.PKCEClient({redirectMethod:F.OAuth.RedirectMethod.Web,providerName:"Slack",providerIcon:Fe.slack,providerId:"slack",description:"Connect your Slack account"}),clientId:e.clientId??Ia.slack,authorizeUrl:e.authorizeUrl??"https://slack.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://slack.oauth.raycast.com/token",refreshTokenUrl:e.tokenUrl??"https://slack.oauth.raycast.com/refresh-token",scope:"",extraParameters:{user_scope:e.scope},personalAccessToken:e.personalAccessToken,bodyEncoding:e.tokenUrl?e.bodyEncoding??"url-encoded":"json",onAuthorize:e.onAuthorize,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser??(t=>({access_token:t.authed_user.access_token,scope:t.authed_user.scope}))});N.slackService=Mu;var mu=e=>new je.OAuthService({client:new F.OAuth.PKCEClient({redirectMethod:F.OAuth.RedirectMethod.Web,providerName:"Zoom",providerIcon:Fe.zoom,providerId:"zoom",description:"Connect your Zoom account"}),clientId:e.clientId,authorizeUrl:e.authorizeUrl??"https://zoom.us/oauth/authorize",tokenUrl:e.tokenUrl??"https://zoom.us/oauth/token",refreshTokenUrl:e.refreshTokenUrl,scope:e.scope,personalAccessToken:e.personalAccessToken,bodyEncoding:e.bodyEncoding??"url-encoded",onAuthorize:e.onAuthorize,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});N.zoomService=mu});var lr=C(ct=>{"use strict";var Ru=ct&&ct.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ct,"__esModule",{value:!0});ct.OAuthService=void 0;var Ln=Ru(Dt()),ze=Bn(),be=class{constructor(t){this.clientId=t.clientId,this.scope=Array.isArray(t.scope)?t.scope.join(" "):t.scope,this.personalAccessToken=t.personalAccessToken,this.bodyEncoding=t.bodyEncoding,this.client=t.client,this.extraParameters=t.extraParameters,this.authorizeUrl=t.authorizeUrl,this.tokenUrl=t.tokenUrl,this.refreshTokenUrl=t.refreshTokenUrl,this.onAuthorize=t.onAuthorize,this.tokenResponseParser=t.tokenResponseParser??(a=>a),this.tokenRefreshResponseParser=t.tokenRefreshResponseParser??(a=>a),this.authorize=this.authorize.bind(this)}async authorize(){let t=await this.client.getTokens();if(t?.accessToken){if(t.refreshToken&&t.isExpired()){let o=await this.refreshTokens({token:t.refreshToken});if(o)return await this.client.setTokens(o),o.access_token}return t.accessToken}let a=await this.client.authorizationRequest({endpoint:this.authorizeUrl,clientId:this.clientId,scope:this.scope,extraParameters:this.extraParameters}),{authorizationCode:r}=await this.client.authorize(a),n=await this.fetchTokens({authRequest:a,authorizationCode:r});return await this.client.setTokens(n),n.access_token}async fetchTokens({authRequest:t,authorizationCode:a}){let r;if(this.bodyEncoding==="url-encoded"){let u=new URLSearchParams;u.append("client_id",this.clientId),u.append("code",a),u.append("code_verifier",t.codeVerifier),u.append("grant_type","authorization_code"),u.append("redirect_uri",t.redirectURI),r={body:u}}else r={body:JSON.stringify({client_id:this.clientId,code:a,code_verifier:t.codeVerifier,grant_type:"authorization_code",redirect_uri:t.redirectURI}),headers:{"Content-Type":"application/json"}};let n=await(0,Ln.default)(this.tokenUrl,{method:"POST",...r});if(!n.ok){let u=await n.text();throw console.error("fetch tokens error:",u),new Error(`Error while fetching tokens: ${n.status} (${n.statusText})
${u}`)}let o=this.tokenResponseParser(await n.json());return Array.isArray(o.scope)?{...o,scope:o.scope.join(" ")}:o}async refreshTokens({token:t}){let a;if(this.bodyEncoding==="url-encoded"){let n=new URLSearchParams;n.append("client_id",this.clientId),n.append("refresh_token",t),n.append("grant_type","refresh_token"),a={body:n}}else a={body:JSON.stringify({client_id:this.clientId,refresh_token:t,grant_type:"refresh_token"}),headers:{"Content-Type":"application/json"}};let r=await(0,Ln.default)(this.refreshTokenUrl??this.tokenUrl,{method:"POST",...a});if(r.ok){let n=this.tokenRefreshResponseParser(await r.json());return n.refresh_token=n.refresh_token??t,n}else{let n=await r.text();console.error("refresh tokens error:",n),this.client.description=`${this.client.providerName} needs you to sign-in again. Press \u23CE or click the button below to continue.`,await this.client.removeTokens(),await this.authorize()}}};ct.OAuthService=be;be.asana=ze.asanaService;be.github=ze.githubService;be.google=ze.googleService;be.jira=ze.jiraService;be.linear=ze.linearService;be.slack=ze.slackService;be.zoom=ze.zoomService});var qn=C(yt=>{"use strict";Object.defineProperty(yt,"__esModule",{value:!0});yt.getAccessToken=yt.withAccessToken=void 0;var Au=require("react/jsx-runtime"),fu=require("@raycast/api"),Oe=null,He=null,cr=null,yr=null,dr=null;function Pu(e){return fu.environment.commandMode==="no-view"?t=>async r=>{if(!Oe){Oe=e.personalAccessToken??await e.authorize(),He=e.personalAccessToken?"personal":"oauth";let n=(await e.client?.getTokens())?.idToken;e.onAuthorize&&await Promise.resolve(e.onAuthorize({token:Oe,type:He,idToken:n}))}return t(r)}:t=>{let a=r=>{e.personalAccessToken?(Oe=e.personalAccessToken,He="personal"):(cr||(cr=Sr(e.authorize())),Oe=cr.read(),He="oauth");let n;return e.client&&(yr||(yr=Sr(e.client.getTokens())),n=yr.read()?.idToken),!dr&&e.onAuthorize&&(dr=Sr(Promise.resolve(e.onAuthorize({token:Oe,type:He,idToken:n})))),dr?.read(),(0,Au.jsx)(t,{...r})};return a.displayName=`withAccessToken(${t.displayName||t.name})`,a}}yt.withAccessToken=Pu;function Eu(){if(!Oe||!He)throw new Error("getAccessToken must be used when authenticated (eg. used inside `withAccessToken`)");return{token:Oe,type:He}}yt.getAccessToken=Eu;function Sr(e){let t="pending",a,r=e.then(o=>{t="success",a=o},o=>{t="error",a=o});return{read:()=>{switch(t){case"pending":throw r;case"error":throw a;default:return a}}}}});var Vn=C(Be=>{"use strict";var Cu=Be&&Be.__createBinding||(Object.create?(function(e,t,a,r){r===void 0&&(r=a);var n=Object.getOwnPropertyDescriptor(t,a);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,n)}):(function(e,t,a,r){r===void 0&&(r=a),e[r]=t[a]})),Nn=Be&&Be.__exportStar||function(e,t){for(var a in e)a!=="default"&&!Object.prototype.hasOwnProperty.call(t,a)&&Cu(t,e,a)};Object.defineProperty(Be,"__esModule",{value:!0});Nn(lr(),Be);Nn(qn(),Be)});var Hn=C(ae=>{"use strict";var kn=ae&&ae.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ae,"__esModule",{value:!0});ae.createDeeplink=ae.createExtensionDeeplink=ae.createScriptCommandDeeplink=ae.DeeplinkType=void 0;var Ir=require("@raycast/api"),hu=kn(require("node:fs")),Du=kn(require("node:path")),br;(function(e){e.ScriptCommand="script-command",e.Extension="extension"})(br||(ae.DeeplinkType=br={}));function jn(){return Ir.environment.raycastVersion.includes("alpha")?"raycastinternal://":"raycast://"}function xu(){let e=JSON.parse(hu.default.readFileSync(Du.default.join(Ir.environment.assetsPath,"..","package.json"),"utf8"));return e.owner||e.author}function Fn(e){let t=`${jn()}script-commands/${e.command}`;if(e.arguments){let a="";for(let r of e.arguments)a+="&arguments="+encodeURIComponent(r);t+="?"+a.substring(1)}return t}ae.createScriptCommandDeeplink=Fn;function zn(e){let t=xu(),a=Ir.environment.extensionName;"ownerOrAuthorName"in e&&"extensionName"in e&&(t=e.ownerOrAuthorName,a=e.extensionName);let r=`${jn()}extensions/${t}/${a}/${e.command}`,n="";return e.launchType&&(n+="&launchType="+encodeURIComponent(e.launchType)),e.arguments&&(n+="&arguments="+encodeURIComponent(JSON.stringify(e.arguments))),e.context&&(n+="&context="+encodeURIComponent(JSON.stringify(e.context))),e.fallbackText&&(n+="&fallbackText="+encodeURIComponent(e.fallbackText)),n&&(r+="?"+n.substring(1)),r}ae.createExtensionDeeplink=zn;function Uu(e){return e.type===br.ScriptCommand?Fn(e):zn(e)}ae.createDeeplink=Uu});var Gn=C(ga=>{"use strict";Object.defineProperty(ga,"__esModule",{value:!0});ga.executeSQL=void 0;var _u=ar();function vu(e,t){return(0,_u.baseExecuteSQL)(e,t)}ga.executeSQL=vu});var $n=C(dt=>{"use strict";var Tu=dt&&dt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(dt,"__esModule",{value:!0});dt.runAppleScript=void 0;var wu=Tu(require("node:child_process")),Tt=aa();async function Ou(e,t,a){let{humanReadableOutput:r,language:n,timeout:o,...u}=Array.isArray(t)?a||{}:t||{},s=r!==!1?[]:["-ss"];n==="JavaScript"&&s.push("-l","JavaScript"),Array.isArray(t)&&s.push("-",...t);let i=wu.default.spawn("osascript",s,{...u,env:{PATH:"/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"}}),p=(0,Tt.getSpawnedPromise)(i,{timeout:o??1e4});i.stdin.end(e);let[{error:c,exitCode:y,signal:g,timedOut:m},l,S]=await(0,Tt.getSpawnedResult)(i,{encoding:"utf8"},p),d=(0,Tt.handleOutput)({stripFinalNewline:!0},l),b=(0,Tt.handleOutput)({stripFinalNewline:!0},S);return(0,Tt.defaultParsing)({stdout:d,stderr:b,error:c,exitCode:y,signal:g,timedOut:m,command:"osascript",options:a,parentError:new Error})}dt.runAppleScript=Ou});var Qn=C(ma=>{"use strict";Object.defineProperty(ma,"__esModule",{value:!0});ma.withCache=void 0;var Bu=require("@raycast/api"),Ma=Ue();function Lu(e,t){let a=new Bu.Cache({namespace:(0,Ma.hash)(e)}),r=async(...n)=>{let o=(0,Ma.hash)(n||[])+t?.internal_cacheKeySuffix,u=a.get(o);if(u){let{data:i,timestamp:p}=JSON.parse(u,Ma.reviver);if(!(t?.maxAge&&Date.now()-p>t.maxAge)&&(!t?.validate||t.validate(i)))return i}let s=await e(...n);return a.set(o,JSON.stringify({data:s,timestamp:Date.now()},Ma.replacer)),s};return r.clearCache=()=>{a.clear()},r}ma.withCache=Lu});var Ra=C(x=>{"use strict";var qu=x&&x.__createBinding||(Object.create?(function(e,t,a,r){r===void 0&&(r=a);var n=Object.getOwnPropertyDescriptor(t,a);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,n)}):(function(e,t,a,r){r===void 0&&(r=a),e[r]=t[a]})),w=x&&x.__exportStar||function(e,t){for(var a in e)a!=="default"&&!Object.prototype.hasOwnProperty.call(t,a)&&qu(t,e,a)};Object.defineProperty(x,"__esModule",{value:!0});w(Ze(),x);w(Kt(),x);w(At(),x);w(Yr(),x);w(tn(),x);w(on(),x);w(ln(),x);w(yn(),x);w(Sn(),x);w(gn(),x);w(Rn(),x);w(On(),x);w(Vn(),x);w(Hn(),x);w(Gn(),x);w($n(),x);w(Mt(),x);w(Qn(),x)});var H={};Ye(H,{default:()=>oo.default});var oo,Da=Va(()=>{z(H,require("formdata-polyfill/esm.min.js"));oo=k(require("formdata-polyfill/esm.min.js"))});var K={};Ye(K,{default:()=>po.default});var po,Rr=Va(()=>{z(K,require("fetch-blob/from.js"));po=k(require("fetch-blob/from.js"))});var co={};Ye(co,{toFormData:()=>np});function rp(e){let t=e.match(/\bfilename=("(.*?)"|([^()<>@,;:\\"/[\]?={}\s\t]+))($|;\s)/i);if(!t)return;let a=t[2]||t[3]||"",r=a.slice(a.lastIndexOf("\\")+1);return r=r.replace(/%22/g,'"'),r=r.replace(/&#(\d{4});/g,(n,o)=>String.fromCharCode(o)),r}async function np(e,t){if(!/multipart/i.test(t))throw new TypeError("Failed to fetch");let a=t.match(/boundary=(?:"([^"]+)"|([^;]+))/i);if(!a)throw new TypeError("no or bad content-type header, no multipart boundary");let r=new Ar(a[1]||a[2]),n,o,u,s,i,p,c=[],y=new H.FormData,g=b=>{u+=d.decode(b,{stream:!0})},m=b=>{c.push(b)},l=()=>{let b=new K.File(c,p,{type:i});y.append(s,b)},S=()=>{y.append(s,u)},d=new TextDecoder("utf-8");d.decode(),r.onPartBegin=function(){r.onPartData=g,r.onPartEnd=S,n="",o="",u="",s="",i="",p=null,c.length=0},r.onHeaderField=function(b){n+=d.decode(b,{stream:!0})},r.onHeaderValue=function(b){o+=d.decode(b,{stream:!0})},r.onHeaderEnd=function(){if(o+=d.decode(),n=n.toLowerCase(),n==="content-disposition"){let b=o.match(/\bname=("([^"]*)"|([^()<>@,;:\\"/[\]?={}\s\t]+))/i);b&&(s=b[2]||b[3]||""),p=rp(o),p&&(r.onPartData=m,r.onPartEnd=l)}else n==="content-type"&&(i=o);o="",n=""};for await(let b of e)r.write(b);return r.end(),y}var Ie,D,lo,Ne,Ua,_a,Zu,Lt,Xu,ep,tp,ap,Qe,Ar,yo=Va(()=>{Rr();Da();Ie=0,D={START_BOUNDARY:Ie++,HEADER_FIELD_START:Ie++,HEADER_FIELD:Ie++,HEADER_VALUE_START:Ie++,HEADER_VALUE:Ie++,HEADER_VALUE_ALMOST_DONE:Ie++,HEADERS_ALMOST_DONE:Ie++,PART_DATA_START:Ie++,PART_DATA:Ie++,END:Ie++},lo=1,Ne={PART_BOUNDARY:lo,LAST_BOUNDARY:lo*=2},Ua=10,_a=13,Zu=32,Lt=45,Xu=58,ep=97,tp=122,ap=e=>e|32,Qe=()=>{},Ar=class{constructor(t){this.index=0,this.flags=0,this.onHeaderEnd=Qe,this.onHeaderField=Qe,this.onHeadersEnd=Qe,this.onHeaderValue=Qe,this.onPartBegin=Qe,this.onPartData=Qe,this.onPartEnd=Qe,this.boundaryChars={},t=`\r
--`+t;let a=new Uint8Array(t.length);for(let r=0;r<t.length;r++)a[r]=t.charCodeAt(r),this.boundaryChars[a[r]]=!0;this.boundary=a,this.lookbehind=new Uint8Array(this.boundary.length+8),this.state=D.START_BOUNDARY}write(t){let a=0,r=t.length,n=this.index,{lookbehind:o,boundary:u,boundaryChars:s,index:i,state:p,flags:c}=this,y=this.boundary.length,g=y-1,m=t.length,l,S,d=M=>{this[M+"Mark"]=a},b=M=>{delete this[M+"Mark"]},R=(M,P,A,U)=>{(P===void 0||P!==A)&&this[M](U&&U.subarray(P,A))},f=(M,P)=>{let A=M+"Mark";A in this&&(P?(R(M,this[A],a,t),delete this[A]):(R(M,this[A],t.length,t),this[A]=0))};for(a=0;a<r;a++)switch(l=t[a],p){case D.START_BOUNDARY:if(i===u.length-2){if(l===Lt)c|=Ne.LAST_BOUNDARY;else if(l!==_a)return;i++;break}else if(i-1===u.length-2){if(c&Ne.LAST_BOUNDARY&&l===Lt)p=D.END,c=0;else if(!(c&Ne.LAST_BOUNDARY)&&l===Ua)i=0,R("onPartBegin"),p=D.HEADER_FIELD_START;else return;break}l!==u[i+2]&&(i=-2),l===u[i+2]&&i++;break;case D.HEADER_FIELD_START:p=D.HEADER_FIELD,d("onHeaderField"),i=0;case D.HEADER_FIELD:if(l===_a){b("onHeaderField"),p=D.HEADERS_ALMOST_DONE;break}if(i++,l===Lt)break;if(l===Xu){if(i===1)return;f("onHeaderField",!0),p=D.HEADER_VALUE_START;break}if(S=ap(l),S<ep||S>tp)return;break;case D.HEADER_VALUE_START:if(l===Zu)break;d("onHeaderValue"),p=D.HEADER_VALUE;case D.HEADER_VALUE:l===_a&&(f("onHeaderValue",!0),R("onHeaderEnd"),p=D.HEADER_VALUE_ALMOST_DONE);break;case D.HEADER_VALUE_ALMOST_DONE:if(l!==Ua)return;p=D.HEADER_FIELD_START;break;case D.HEADERS_ALMOST_DONE:if(l!==Ua)return;R("onHeadersEnd"),p=D.PART_DATA_START;break;case D.PART_DATA_START:p=D.PART_DATA,d("onPartData");case D.PART_DATA:if(n=i,i===0){for(a+=g;a<m&&!(t[a]in s);)a+=y;a-=g,l=t[a]}if(i<u.length)u[i]===l?(i===0&&f("onPartData",!0),i++):i=0;else if(i===u.length)i++,l===_a?c|=Ne.PART_BOUNDARY:l===Lt?c|=Ne.LAST_BOUNDARY:i=0;else if(i-1===u.length)if(c&Ne.PART_BOUNDARY){if(i=0,l===Ua){c&=~Ne.PART_BOUNDARY,R("onPartEnd"),R("onPartBegin"),p=D.HEADER_FIELD_START;break}}else c&Ne.LAST_BOUNDARY&&l===Lt?(R("onPartEnd"),p=D.END,c=0):i=0;if(i>0)o[i-1]=l;else if(n>0){let M=new Uint8Array(o.buffer,o.byteOffset,o.byteLength);R("onPartData",0,n,M),n=0,d("onPartData"),a--}break;case D.END:break;default:throw new Error(`Unexpected state entered: ${p}`)}f("onHeaderField"),f("onHeaderValue"),f("onPartData"),this.index=i,this.state=p,this.flags=c}end(){if(this.state===D.HEADER_FIELD_START&&this.index===0||this.state===D.PART_DATA&&this.index===this.boundary.length)this.onPartEnd();else if(this.state!==D.END)throw new Error("MultipartParser.end(): stream ended unexpectedly")}}});var xl={};Ye(xl,{default:()=>Dl});module.exports=ei(xl);var E=require("@raycast/api"),De=k(Ra()),Qo=require("react");var qo=require("@octokit/rest"),No=require("@raycast/api"),Vo=k(Ra());var Aa=JSON;var Wn=e=>e.toUpperCase(),Kn=e=>{let t={};return e.forEach((a,r)=>{t[r]=a}),t};var Yn=(e,t,a)=>e.document?e:{document:e,variables:t,requestHeaders:a,signal:void 0},Jn=(e,t,a)=>e.query?e:{query:e,variables:t,requestHeaders:a,signal:void 0},Zn=(e,t)=>e.documents?e:{documents:e,requestHeaders:t,signal:void 0};var fa=require("graphql"),Xn=e=>{let t,a=e.definitions.filter(r=>r.kind==="OperationDefinition");return a.length===1&&(t=a[0]?.name?.value),t},Ge=e=>{if(typeof e=="string"){let a;try{let r=(0,fa.parse)(e);a=Xn(r)}catch{}return{query:e,operationName:a}}let t=Xn(e);return{query:(0,fa.print)(e),operationName:t}};var $e=class e extends Error{constructor(t,a){let r=`${e.extractMessage(t)}: ${JSON.stringify({response:t,request:a})}`;super(r),Object.setPrototypeOf(this,e.prototype),this.response=t,this.request=a,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,e)}static extractMessage(t){return t.errors?.[0]?.message??`GraphQL Error (Code: ${t.status})`}};var qe=k(Dt(),1);var Nu="connection_init",Vu="connection_ack",to="ping",ao="pong",ku="subscribe",ju="next",Fu="error",ro="complete",Le=class e{get type(){return this._type}get id(){return this._id}get payload(){return this._payload}constructor(t,a,r){this._type=t,this._payload=a,this._id=r}get text(){let t={type:this.type};return this.id!=null&&this.id!=null&&(t.id=this.id),this.payload!=null&&this.payload!=null&&(t.payload=this.payload),JSON.stringify(t)}static parse(t,a){let{type:r,payload:n,id:o}=JSON.parse(t);return new e(r,a(n),o)}},Pa=class{constructor(t,{onInit:a,onAcknowledged:r,onPing:n,onPong:o}){this.socketState={acknowledged:!1,lastRequestId:0,subscriptions:{}},this.socket=t,t.addEventListener("open",async u=>{this.socketState.acknowledged=!1,this.socketState.subscriptions={},t.send(Hu(a?await a():null).text)}),t.addEventListener("close",u=>{this.socketState.acknowledged=!1,this.socketState.subscriptions={}}),t.addEventListener("error",u=>{console.error(u)}),t.addEventListener("message",u=>{try{let s=zu(u.data);switch(s.type){case Vu:{this.socketState.acknowledged?console.warn("Duplicate CONNECTION_ACK message ignored"):(this.socketState.acknowledged=!0,r&&r(s.payload));return}case to:{n?n(s.payload).then(y=>t.send(eo(y).text)):t.send(eo(null).text);return}case ao:{o&&o(s.payload);return}}if(!this.socketState.acknowledged||s.id===void 0||s.id===null||!this.socketState.subscriptions[s.id])return;let{query:i,variables:p,subscriber:c}=this.socketState.subscriptions[s.id];switch(s.type){case ju:{!s.payload.errors&&s.payload.data&&c.next&&c.next(s.payload.data),s.payload.errors&&c.error&&c.error(new $e({...s.payload,status:200},{query:i,variables:p}));return}case Fu:{c.error&&c.error(new $e({errors:s.payload,status:200},{query:i,variables:p}));return}case ro:{c.complete&&c.complete(),delete this.socketState.subscriptions[s.id];return}}}catch(s){console.error(s),t.close(1006)}t.close(4400,"Unknown graphql-ws message.")})}makeSubscribe(t,a,r,n){let o=(this.socketState.lastRequestId++).toString();return this.socketState.subscriptions[o]={query:t,variables:n,subscriber:r},this.socket.send($u(o,{query:t,operationName:a,variables:n}).text),()=>{this.socket.send(Qu(o).text),delete this.socketState.subscriptions[o]}}rawRequest(t,a){return new Promise((r,n)=>{let o;this.rawSubscribe(t,{next:(u,s)=>o={data:u,extensions:s},error:n,complete:()=>r(o)},a)})}request(t,a){return new Promise((r,n)=>{let o;this.subscribe(t,{next:u=>o=u,error:n,complete:()=>r(o)},a)})}subscribe(t,a,r){let{query:n,operationName:o}=Ge(t);return this.makeSubscribe(n,o,a,r)}rawSubscribe(t,a,r){return this.makeSubscribe(t,void 0,a,r)}ping(t){this.socket.send(Gu(t).text)}close(){this.socket.close(1e3)}};Pa.PROTOCOL="graphql-transport-ws";function zu(e,t=a=>a){return Le.parse(e,t)}function Hu(e){return new Le(Nu,e)}function Gu(e){return new Le(to,e,void 0)}function eo(e){return new Le(ao,e,void 0)}function $u(e,t){return new Le(ku,t,e)}function Qu(e){return new Le(ro,void 0,e)}var St=e=>{let t={};return e&&(typeof Headers<"u"&&e instanceof Headers||qe&&qe.Headers&&e instanceof qe.Headers?t=Kn(e):Array.isArray(e)?e.forEach(([a,r])=>{a&&r!==void 0&&(t[a]=r)}):t=e),t},no=e=>e.replace(/([\s,]|#[^\n\r]+)+/g," ").trim(),Wu=e=>{if(!Array.isArray(e.query)){let r=e,n=[`query=${encodeURIComponent(no(r.query))}`];return e.variables&&n.push(`variables=${encodeURIComponent(r.jsonSerializer.stringify(r.variables))}`),r.operationName&&n.push(`operationName=${encodeURIComponent(r.operationName)}`),n.join("&")}if(typeof e.variables<"u"&&!Array.isArray(e.variables))throw new Error("Cannot create query with given variable type, array expected");let t=e,a=e.query.reduce((r,n,o)=>(r.push({query:no(n),variables:t.variables?t.jsonSerializer.stringify(t.variables[o]):void 0}),r),[]);return`query=${encodeURIComponent(t.jsonSerializer.stringify(a))}`},Ku=e=>async t=>{let{url:a,query:r,variables:n,operationName:o,fetch:u,fetchOptions:s,middleware:i}=t,p={...t.headers},c="",y;e==="POST"?(y=Yu(r,n,o,s.jsonSerializer),typeof y=="string"&&(p["Content-Type"]="application/json")):c=Wu({query:r,variables:n,operationName:o,jsonSerializer:s.jsonSerializer??Aa});let g={method:e,headers:p,body:y,...s},m=a,l=g;if(i){let S=await Promise.resolve(i({...g,url:a,operationName:o,variables:n})),{url:d,...b}=S;m=d,l=b}return c&&(m=`${m}?${c}`),await u(m,l)},Ea=class{constructor(t,a={}){this.url=t,this.requestConfig=a,this.rawRequest=async(...r)=>{let[n,o,u]=r,s=Jn(n,o,u),{headers:i,fetch:p=qe.default,method:c="POST",requestMiddleware:y,responseMiddleware:g,...m}=this.requestConfig,{url:l}=this;s.signal!==void 0&&(m.signal=s.signal);let{operationName:S}=Ge(s.query);return gr({url:l,query:s.query,variables:s.variables,headers:{...St(Mr(i)),...St(s.requestHeaders)},operationName:S,fetch:p,method:c,fetchOptions:m,middleware:y}).then(d=>(g&&g(d),d)).catch(d=>{throw g&&g(d),d})}}async request(t,...a){let[r,n]=a,o=Yn(t,r,n),{headers:u,fetch:s=qe.default,method:i="POST",requestMiddleware:p,responseMiddleware:c,...y}=this.requestConfig,{url:g}=this;o.signal!==void 0&&(y.signal=o.signal);let{query:m,operationName:l}=Ge(o.document);return gr({url:g,query:m,variables:o.variables,headers:{...St(Mr(u)),...St(o.requestHeaders)},operationName:l,fetch:s,method:i,fetchOptions:y,middleware:p}).then(S=>(c&&c(S),S.data)).catch(S=>{throw c&&c(S),S})}batchRequests(t,a){let r=Zn(t,a),{headers:n,...o}=this.requestConfig;r.signal!==void 0&&(o.signal=r.signal);let u=r.documents.map(({document:i})=>Ge(i).query),s=r.documents.map(({variables:i})=>i);return gr({url:this.url,query:u,variables:s,headers:{...St(Mr(n)),...St(r.requestHeaders)},operationName:void 0,fetch:this.requestConfig.fetch??qe.default,method:this.requestConfig.method||"POST",fetchOptions:o,middleware:this.requestConfig.requestMiddleware}).then(i=>(this.requestConfig.responseMiddleware&&this.requestConfig.responseMiddleware(i),i.data)).catch(i=>{throw this.requestConfig.responseMiddleware&&this.requestConfig.responseMiddleware(i),i})}setHeaders(t){return this.requestConfig.headers=t,this}setHeader(t,a){let{headers:r}=this.requestConfig;return r?r[t]=a:this.requestConfig.headers={[t]:a},this}setEndpoint(t){return this.url=t,this}},gr=async e=>{let{query:t,variables:a,fetchOptions:r}=e,n=Ku(Wn(e.method??"post")),o=Array.isArray(e.query),u=await n(e),s=await Ju(u,r.jsonSerializer??Aa),i=Array.isArray(s)?!s.some(({data:c})=>!c):!!s.data,p=Array.isArray(s)||!s.errors||Array.isArray(s.errors)&&!s.errors.length||r.errorPolicy==="all"||r.errorPolicy==="ignore";if(u.ok&&p&&i){let{errors:c,...y}=(Array.isArray(s),s),g=r.errorPolicy==="ignore"?y:s;return{...o?{data:g}:g,headers:u.headers,status:u.status}}else{let c=typeof s=="string"?{error:s}:s;throw new $e({...c,status:u.status,headers:u.headers},{query:t,variables:a})}};var Yu=(e,t,a,r)=>{let n=r??Aa;if(!Array.isArray(e))return n.stringify({query:e,variables:t,operationName:a});if(typeof t<"u"&&!Array.isArray(t))throw new Error("Cannot create request body with given variable type, array expected");let o=e.reduce((u,s,i)=>(u.push({query:s,variables:t?t[i]:void 0}),u),[]);return n.stringify(o)},Ju=async(e,t)=>{let a;return e.headers.forEach((r,n)=>{n.toLowerCase()==="content-type"&&(a=r)}),a&&(a.toLowerCase().startsWith("application/json")||a.toLowerCase().startsWith("application/graphql+json")||a.toLowerCase().startsWith("application/graphql-response+json"))?t.parse(await e.text()):e.text()},Mr=e=>typeof e=="function"?e():e;var xo=k(require("node:http"),1),Uo=k(require("node:https"),1),Ke=k(require("node:zlib"),1),Z=k(require("node:stream"),1),Vt=require("node:buffer");var wt={};Ye(wt,{default:()=>Ca.default});z(wt,require("data-uri-to-buffer"));var Ca=k(require("data-uri-to-buffer"));var re=k(require("node:stream"),1),he=require("node:util"),Y=require("node:buffer");var Ot={};Ye(Ot,{default:()=>ha.default});z(Ot,require("fetch-blob"));var ha=k(require("fetch-blob"));Da();var Ce=class extends Error{constructor(t,a){super(t),Error.captureStackTrace(this,this.constructor),this.type=a}get name(){return this.constructor.name}get[Symbol.toStringTag](){return this.constructor.name}};var G=class extends Ce{constructor(t,a,r){super(t,a),r&&(this.code=this.errno=r.code,this.erroredSysCall=r.syscall)}};var xa=Symbol.toStringTag,mr=e=>typeof e=="object"&&typeof e.append=="function"&&typeof e.delete=="function"&&typeof e.get=="function"&&typeof e.getAll=="function"&&typeof e.has=="function"&&typeof e.set=="function"&&typeof e.sort=="function"&&e[xa]==="URLSearchParams",Bt=e=>e&&typeof e=="object"&&typeof e.arrayBuffer=="function"&&typeof e.type=="string"&&typeof e.stream=="function"&&typeof e.constructor=="function"&&/^(Blob|File)$/.test(e[xa]),io=e=>typeof e=="object"&&(e[xa]==="AbortSignal"||e[xa]==="EventTarget"),so=(e,t)=>{let a=new URL(t).hostname,r=new URL(e).hostname;return a===r||a.endsWith(`.${r}`)},uo=(e,t)=>{let a=new URL(t).protocol,r=new URL(e).protocol;return a===r};var op=(0,he.promisify)(re.default.pipeline),$=Symbol("Body internals"),ge=class{constructor(t,{size:a=0}={}){let r=null;t===null?t=null:mr(t)?t=Y.Buffer.from(t.toString()):Bt(t)||Y.Buffer.isBuffer(t)||(he.types.isAnyArrayBuffer(t)?t=Y.Buffer.from(t):ArrayBuffer.isView(t)?t=Y.Buffer.from(t.buffer,t.byteOffset,t.byteLength):t instanceof re.default||(t instanceof H.FormData?(t=(0,H.formDataToBlob)(t),r=t.type.split("=")[1]):t=Y.Buffer.from(String(t))));let n=t;Y.Buffer.isBuffer(t)?n=re.default.Readable.from(t):Bt(t)&&(n=re.default.Readable.from(t.stream())),this[$]={body:t,stream:n,boundary:r,disturbed:!1,error:null},this.size=a,t instanceof re.default&&t.on("error",o=>{let u=o instanceof Ce?o:new G(`Invalid response body while trying to fetch ${this.url}: ${o.message}`,"system",o);this[$].error=u})}get body(){return this[$].stream}get bodyUsed(){return this[$].disturbed}async arrayBuffer(){let{buffer:t,byteOffset:a,byteLength:r}=await fr(this);return t.slice(a,a+r)}async formData(){let t=this.headers.get("content-type");if(t.startsWith("application/x-www-form-urlencoded")){let r=new H.FormData,n=new URLSearchParams(await this.text());for(let[o,u]of n)r.append(o,u);return r}let{toFormData:a}=await Promise.resolve().then(()=>(yo(),co));return a(this.body,t)}async blob(){let t=this.headers&&this.headers.get("content-type")||this[$].body&&this[$].body.type||"",a=await this.arrayBuffer();return new ha.default([a],{type:t})}async json(){let t=await this.text();return JSON.parse(t)}async text(){let t=await fr(this);return new TextDecoder().decode(t)}buffer(){return fr(this)}};ge.prototype.buffer=(0,he.deprecate)(ge.prototype.buffer,"Please use 'response.arrayBuffer()' instead of 'response.buffer()'","node-fetch#buffer");Object.defineProperties(ge.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0},data:{get:(0,he.deprecate)(()=>{},"data doesn't exist, use json(), text(), arrayBuffer(), or body instead","https://github.com/node-fetch/node-fetch/issues/1000 (response)")}});async function fr(e){if(e[$].disturbed)throw new TypeError(`body used already for: ${e.url}`);if(e[$].disturbed=!0,e[$].error)throw e[$].error;let{body:t}=e;if(t===null)return Y.Buffer.alloc(0);if(!(t instanceof re.default))return Y.Buffer.alloc(0);let a=[],r=0;try{for await(let n of t){if(e.size>0&&r+n.length>e.size){let o=new G(`content size at ${e.url} over limit: ${e.size}`,"max-size");throw t.destroy(o),o}r+=n.length,a.push(n)}}catch(n){throw n instanceof Ce?n:new G(`Invalid response body while trying to fetch ${e.url}: ${n.message}`,"system",n)}if(t.readableEnded===!0||t._readableState.ended===!0)try{return a.every(n=>typeof n=="string")?Y.Buffer.from(a.join("")):Y.Buffer.concat(a,r)}catch(n){throw new G(`Could not create Buffer from response body for ${e.url}: ${n.message}`,"system",n)}else throw new G(`Premature close of server response while trying to fetch ${e.url}`)}var bt=(e,t)=>{let a,r,{body:n}=e[$];if(e.bodyUsed)throw new Error("cannot clone body after it is used");return n instanceof re.default&&typeof n.getBoundary!="function"&&(a=new re.PassThrough({highWaterMark:t}),r=new re.PassThrough({highWaterMark:t}),n.pipe(a),n.pipe(r),e[$].stream=a,n=r),n},ip=(0,he.deprecate)(e=>e.getBoundary(),"form-data doesn't follow the spec and requires special treatment. Use alternative package","https://github.com/node-fetch/node-fetch/issues/1167"),va=(e,t)=>e===null?null:typeof e=="string"?"text/plain;charset=UTF-8":mr(e)?"application/x-www-form-urlencoded;charset=UTF-8":Bt(e)?e.type||null:Y.Buffer.isBuffer(e)||he.types.isAnyArrayBuffer(e)||ArrayBuffer.isView(e)?null:e instanceof H.FormData?`multipart/form-data; boundary=${t[$].boundary}`:e&&typeof e.getBoundary=="function"?`multipart/form-data;boundary=${ip(e)}`:e instanceof re.default?null:"text/plain;charset=UTF-8",So=e=>{let{body:t}=e[$];return t===null?0:Bt(t)?t.size:Y.Buffer.isBuffer(t)?t.length:t&&typeof t.getLengthSync=="function"&&t.hasKnownLength&&t.hasKnownLength()?t.getLengthSync():null},bo=async(e,{body:t})=>{t===null?e.end():await op(t,e)};var Pr=require("node:util"),qt=k(require("node:http"),1),Ta=typeof qt.default.validateHeaderName=="function"?qt.default.validateHeaderName:e=>{if(!/^[\^`\-\w!#$%&'*+.|~]+$/.test(e)){let t=new TypeError(`Header name must be a valid HTTP token [${e}]`);throw Object.defineProperty(t,"code",{value:"ERR_INVALID_HTTP_TOKEN"}),t}},Er=typeof qt.default.validateHeaderValue=="function"?qt.default.validateHeaderValue:(e,t)=>{if(/[^\t\u0020-\u007E\u0080-\u00FF]/.test(t)){let a=new TypeError(`Invalid character in header content ["${e}"]`);throw Object.defineProperty(a,"code",{value:"ERR_INVALID_CHAR"}),a}},J=class e extends URLSearchParams{constructor(t){let a=[];if(t instanceof e){let r=t.raw();for(let[n,o]of Object.entries(r))a.push(...o.map(u=>[n,u]))}else if(t!=null)if(typeof t=="object"&&!Pr.types.isBoxedPrimitive(t)){let r=t[Symbol.iterator];if(r==null)a.push(...Object.entries(t));else{if(typeof r!="function")throw new TypeError("Header pairs must be iterable");a=[...t].map(n=>{if(typeof n!="object"||Pr.types.isBoxedPrimitive(n))throw new TypeError("Each header pair must be an iterable object");return[...n]}).map(n=>{if(n.length!==2)throw new TypeError("Each header pair must be a name/value tuple");return[...n]})}}else throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");return a=a.length>0?a.map(([r,n])=>(Ta(r),Er(r,String(n)),[String(r).toLowerCase(),String(n)])):void 0,super(a),new Proxy(this,{get(r,n,o){switch(n){case"append":case"set":return(u,s)=>(Ta(u),Er(u,String(s)),URLSearchParams.prototype[n].call(r,String(u).toLowerCase(),String(s)));case"delete":case"has":case"getAll":return u=>(Ta(u),URLSearchParams.prototype[n].call(r,String(u).toLowerCase()));case"keys":return()=>(r.sort(),new Set(URLSearchParams.prototype.keys.call(r)).keys());default:return Reflect.get(r,n,o)}}})}get[Symbol.toStringTag](){return this.constructor.name}toString(){return Object.prototype.toString.call(this)}get(t){let a=this.getAll(t);if(a.length===0)return null;let r=a.join(", ");return/^content-encoding$/i.test(t)&&(r=r.toLowerCase()),r}forEach(t,a=void 0){for(let r of this.keys())Reflect.apply(t,a,[this.get(r),r,this])}*values(){for(let t of this.keys())yield this.get(t)}*entries(){for(let t of this.keys())yield[t,this.get(t)]}[Symbol.iterator](){return this.entries()}raw(){return[...this.keys()].reduce((t,a)=>(t[a]=this.getAll(a),t),{})}[Symbol.for("nodejs.util.inspect.custom")](){return[...this.keys()].reduce((t,a)=>{let r=this.getAll(a);return a==="host"?t[a]=r[0]:t[a]=r.length>1?r:r[0],t},{})}};Object.defineProperties(J.prototype,["get","entries","forEach","values"].reduce((e,t)=>(e[t]={enumerable:!0},e),{}));function Io(e=[]){return new J(e.reduce((t,a,r,n)=>(r%2===0&&t.push(n.slice(r,r+2)),t),[]).filter(([t,a])=>{try{return Ta(t),Er(t,String(a)),!0}catch{return!1}}))}var sp=new Set([301,302,303,307,308]),wa=e=>sp.has(e);var pe=Symbol("Response internals"),ne=class e extends ge{constructor(t=null,a={}){super(t,a);let r=a.status!=null?a.status:200,n=new J(a.headers);if(t!==null&&!n.has("Content-Type")){let o=va(t,this);o&&n.append("Content-Type",o)}this[pe]={type:"default",url:a.url,status:r,statusText:a.statusText||"",headers:n,counter:a.counter,highWaterMark:a.highWaterMark}}get type(){return this[pe].type}get url(){return this[pe].url||""}get status(){return this[pe].status}get ok(){return this[pe].status>=200&&this[pe].status<300}get redirected(){return this[pe].counter>0}get statusText(){return this[pe].statusText}get headers(){return this[pe].headers}get highWaterMark(){return this[pe].highWaterMark}clone(){return new e(bt(this,this.highWaterMark),{type:this.type,url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected,size:this.size,highWaterMark:this.highWaterMark})}static redirect(t,a=302){if(!wa(a))throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');return new e(null,{headers:{location:new URL(t).toString()},status:a})}static error(){let t=new e(null,{status:0,statusText:""});return t[pe].type="error",t}static json(t=void 0,a={}){let r=JSON.stringify(t);if(r===void 0)throw new TypeError("data is not JSON serializable");let n=new J(a&&a.headers);return n.has("content-type")||n.set("content-type","application/json"),new e(r,{...a,headers:n})}get[Symbol.toStringTag](){return"Response"}};Object.defineProperties(ne.prototype,{type:{enumerable:!0},url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}});var Co=require("node:url"),ho=require("node:util");var go=e=>{if(e.search)return e.search;let t=e.href.length-1,a=e.hash||(e.href[t]==="#"?"#":"");return e.href[t-a.length]==="?"?"?":""};var mo=require("node:net");function Mo(e,t=!1){return e==null||(e=new URL(e),/^(about|blob|data):$/.test(e.protocol))?"no-referrer":(e.username="",e.password="",e.hash="",t&&(e.pathname="",e.search=""),e)}var Ro=new Set(["","no-referrer","no-referrer-when-downgrade","same-origin","origin","strict-origin","origin-when-cross-origin","strict-origin-when-cross-origin","unsafe-url"]),Ao="strict-origin-when-cross-origin";function fo(e){if(!Ro.has(e))throw new TypeError(`Invalid referrerPolicy: ${e}`);return e}function up(e){if(/^(http|ws)s:$/.test(e.protocol))return!0;let t=e.host.replace(/(^\[)|(]$)/g,""),a=(0,mo.isIP)(t);return a===4&&/^127\./.test(t)||a===6&&/^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(t)?!0:e.host==="localhost"||e.host.endsWith(".localhost")?!1:e.protocol==="file:"}function It(e){return/^about:(blank|srcdoc)$/.test(e)||e.protocol==="data:"||/^(blob|filesystem):$/.test(e.protocol)?!0:up(e)}function Po(e,{referrerURLCallback:t,referrerOriginCallback:a}={}){if(e.referrer==="no-referrer"||e.referrerPolicy==="")return null;let r=e.referrerPolicy;if(e.referrer==="about:client")return"no-referrer";let n=e.referrer,o=Mo(n),u=Mo(n,!0);o.toString().length>4096&&(o=u),t&&(o=t(o)),a&&(u=a(u));let s=new URL(e.url);switch(r){case"no-referrer":return"no-referrer";case"origin":return u;case"unsafe-url":return o;case"strict-origin":return It(o)&&!It(s)?"no-referrer":u.toString();case"strict-origin-when-cross-origin":return o.origin===s.origin?o:It(o)&&!It(s)?"no-referrer":u;case"same-origin":return o.origin===s.origin?o:"no-referrer";case"origin-when-cross-origin":return o.origin===s.origin?o:u;case"no-referrer-when-downgrade":return It(o)&&!It(s)?"no-referrer":o;default:throw new TypeError(`Invalid referrerPolicy: ${r}`)}}function Eo(e){let t=(e.get("referrer-policy")||"").split(/[,\s]+/),a="";for(let r of t)r&&Ro.has(r)&&(a=r);return a}var O=Symbol("Request internals"),Nt=e=>typeof e=="object"&&typeof e[O]=="object",pp=(0,ho.deprecate)(()=>{},".data is not a valid RequestInit property, use .body instead","https://github.com/node-fetch/node-fetch/issues/1000 (request)"),We=class e extends ge{constructor(t,a={}){let r;if(Nt(t)?r=new URL(t.url):(r=new URL(t),t={}),r.username!==""||r.password!=="")throw new TypeError(`${r} is an url with embedded credentials.`);let n=a.method||t.method||"GET";if(/^(delete|get|head|options|post|put)$/i.test(n)&&(n=n.toUpperCase()),!Nt(a)&&"data"in a&&pp(),(a.body!=null||Nt(t)&&t.body!==null)&&(n==="GET"||n==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");let o=a.body?a.body:Nt(t)&&t.body!==null?bt(t):null;super(o,{size:a.size||t.size||0});let u=new J(a.headers||t.headers||{});if(o!==null&&!u.has("Content-Type")){let p=va(o,this);p&&u.set("Content-Type",p)}let s=Nt(t)?t.signal:null;if("signal"in a&&(s=a.signal),s!=null&&!io(s))throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");let i=a.referrer==null?t.referrer:a.referrer;if(i==="")i="no-referrer";else if(i){let p=new URL(i);i=/^about:(\/\/)?client$/.test(p)?"client":p}else i=void 0;this[O]={method:n,redirect:a.redirect||t.redirect||"follow",headers:u,parsedURL:r,signal:s,referrer:i},this.follow=a.follow===void 0?t.follow===void 0?20:t.follow:a.follow,this.compress=a.compress===void 0?t.compress===void 0?!0:t.compress:a.compress,this.counter=a.counter||t.counter||0,this.agent=a.agent||t.agent,this.highWaterMark=a.highWaterMark||t.highWaterMark||16384,this.insecureHTTPParser=a.insecureHTTPParser||t.insecureHTTPParser||!1,this.referrerPolicy=a.referrerPolicy||t.referrerPolicy||""}get method(){return this[O].method}get url(){return(0,Co.format)(this[O].parsedURL)}get headers(){return this[O].headers}get redirect(){return this[O].redirect}get signal(){return this[O].signal}get referrer(){if(this[O].referrer==="no-referrer")return"";if(this[O].referrer==="client")return"about:client";if(this[O].referrer)return this[O].referrer.toString()}get referrerPolicy(){return this[O].referrerPolicy}set referrerPolicy(t){this[O].referrerPolicy=fo(t)}clone(){return new e(this)}get[Symbol.toStringTag](){return"Request"}};Object.defineProperties(We.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0},referrer:{enumerable:!0},referrerPolicy:{enumerable:!0}});var Do=e=>{let{parsedURL:t}=e[O],a=new J(e[O].headers);a.has("Accept")||a.set("Accept","*/*");let r=null;if(e.body===null&&/^(post|put)$/i.test(e.method)&&(r="0"),e.body!==null){let s=So(e);typeof s=="number"&&!Number.isNaN(s)&&(r=String(s))}r&&a.set("Content-Length",r),e.referrerPolicy===""&&(e.referrerPolicy=Ao),e.referrer&&e.referrer!=="no-referrer"?e[O].referrer=Po(e):e[O].referrer="no-referrer",e[O].referrer instanceof URL&&a.set("Referer",e.referrer),a.has("User-Agent")||a.set("User-Agent","node-fetch"),e.compress&&!a.has("Accept-Encoding")&&a.set("Accept-Encoding","gzip, deflate, br");let{agent:n}=e;typeof n=="function"&&(n=n(t));let o=go(t),u={path:t.pathname+o,method:e.method,headers:a[Symbol.for("nodejs.util.inspect.custom")](),insecureHTTPParser:e.insecureHTTPParser,agent:n};return{parsedURL:t,options:u}};var Oa=class extends Ce{constructor(t,a="aborted"){super(t,a)}};Da();Rr();var lp=new Set(["data:","http:","https:"]);async function Ba(e,t){return new Promise((a,r)=>{let n=new We(e,t),{parsedURL:o,options:u}=Do(n);if(!lp.has(o.protocol))throw new TypeError(`node-fetch cannot load ${e}. URL scheme "${o.protocol.replace(/:$/,"")}" is not supported.`);if(o.protocol==="data:"){let l=(0,Ca.default)(n.url),S=new ne(l,{headers:{"Content-Type":l.typeFull}});a(S);return}let s=(o.protocol==="https:"?Uo.default:xo.default).request,{signal:i}=n,p=null,c=()=>{let l=new Oa("The operation was aborted.");r(l),n.body&&n.body instanceof Z.default.Readable&&n.body.destroy(l),!(!p||!p.body)&&p.body.emit("error",l)};if(i&&i.aborted){c();return}let y=()=>{c(),m()},g=s(o.toString(),u);i&&i.addEventListener("abort",y);let m=()=>{g.abort(),i&&i.removeEventListener("abort",y)};g.on("error",l=>{r(new G(`request to ${n.url} failed, reason: ${l.message}`,"system",l)),m()}),cp(g,l=>{p&&p.body&&p.body.destroy(l)}),process.version<"v14"&&g.on("socket",l=>{let S;l.prependListener("end",()=>{S=l._eventsCount}),l.prependListener("close",d=>{if(p&&S<l._eventsCount&&!d){let b=new Error("Premature close");b.code="ERR_STREAM_PREMATURE_CLOSE",p.body.emit("error",b)}})}),g.on("response",l=>{g.setTimeout(0);let S=Io(l.rawHeaders);if(wa(l.statusCode)){let M=S.get("Location"),P=null;try{P=M===null?null:new URL(M,n.url)}catch{if(n.redirect!=="manual"){r(new G(`uri requested responds with an invalid redirect URL: ${M}`,"invalid-redirect")),m();return}}switch(n.redirect){case"error":r(new G(`uri requested responds with a redirect, redirect mode is set to error: ${n.url}`,"no-redirect")),m();return;case"manual":break;case"follow":{if(P===null)break;if(n.counter>=n.follow){r(new G(`maximum redirect reached at: ${n.url}`,"max-redirect")),m();return}let A={headers:new J(n.headers),follow:n.follow,counter:n.counter+1,agent:n.agent,compress:n.compress,method:n.method,body:bt(n),signal:n.signal,size:n.size,referrer:n.referrer,referrerPolicy:n.referrerPolicy};if(!so(n.url,P)||!uo(n.url,P))for(let q of["authorization","www-authenticate","cookie","cookie2"])A.headers.delete(q);if(l.statusCode!==303&&n.body&&t.body instanceof Z.default.Readable){r(new G("Cannot follow redirect with body being a readable stream","unsupported-redirect")),m();return}(l.statusCode===303||(l.statusCode===301||l.statusCode===302)&&n.method==="POST")&&(A.method="GET",A.body=void 0,A.headers.delete("content-length"));let U=Eo(S);U&&(A.referrerPolicy=U),a(Ba(new We(P,A))),m();return}default:return r(new TypeError(`Redirect option '${n.redirect}' is not a valid value of RequestRedirect`))}}i&&l.once("end",()=>{i.removeEventListener("abort",y)});let d=(0,Z.pipeline)(l,new Z.PassThrough,M=>{M&&r(M)});process.version<"v12.10"&&l.on("aborted",y);let b={url:n.url,status:l.statusCode,statusText:l.statusMessage,headers:S,size:n.size,counter:n.counter,highWaterMark:n.highWaterMark},R=S.get("Content-Encoding");if(!n.compress||n.method==="HEAD"||R===null||l.statusCode===204||l.statusCode===304){p=new ne(d,b),a(p);return}let f={flush:Ke.default.Z_SYNC_FLUSH,finishFlush:Ke.default.Z_SYNC_FLUSH};if(R==="gzip"||R==="x-gzip"){d=(0,Z.pipeline)(d,Ke.default.createGunzip(f),M=>{M&&r(M)}),p=new ne(d,b),a(p);return}if(R==="deflate"||R==="x-deflate"){let M=(0,Z.pipeline)(l,new Z.PassThrough,P=>{P&&r(P)});M.once("data",P=>{(P[0]&15)===8?d=(0,Z.pipeline)(d,Ke.default.createInflate(),A=>{A&&r(A)}):d=(0,Z.pipeline)(d,Ke.default.createInflateRaw(),A=>{A&&r(A)}),p=new ne(d,b),a(p)}),M.once("end",()=>{p||(p=new ne(d,b),a(p))});return}if(R==="br"){d=(0,Z.pipeline)(d,Ke.default.createBrotliDecompress(),M=>{M&&r(M)}),p=new ne(d,b),a(p);return}p=new ne(d,b),a(p)}),bo(g,n).catch(r)})}function cp(e,t){let a=Vt.Buffer.from(`0\r
\r
`),r=!1,n=!1,o;e.on("response",u=>{let{headers:s}=u;r=s["transfer-encoding"]==="chunked"&&!s["content-length"]}),e.on("socket",u=>{let s=()=>{if(r&&!n){let p=new Error("Premature close");p.code="ERR_STREAM_PREMATURE_CLOSE",t(p)}},i=p=>{n=Vt.Buffer.compare(p.slice(-5),a)===0,!n&&o&&(n=Vt.Buffer.compare(o.slice(-3),a.slice(0,3))===0&&Vt.Buffer.compare(p.slice(-2),a.slice(3))===0),o=p};u.prependListener("close",s),u.on("data",i),e.on("close",()=>{u.removeListener("close",s),u.removeListener("data",i)})})}var I=k(require("graphql-tag")),kt=I.default`
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
`,yp=I.default`
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
  ${kt}
`,Me=I.default`
  fragment UserFields on User {
    id
    avatarUrl
    name
    login
    isViewer
  }
`,jt=I.default`
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
  ${Me}
`,La=I.default`
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
  ${jt}
  ${kt}
  ${Me}
`,dp=I.default`
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
  ${jt}
  ${kt}
  ${Me}
`,_o=I.default`
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
`,vo=I.default`
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
`,To=I.default`
  fragment RepositoryMentionFields on Repository {
    nameWithOwner
    description
    isPrivate
    isArchived
    owner {
      avatarUrl(size: 64)
    }
  }
`,Sp=I.default`
  fragment ProjectViewerFields on ProjectV2View {
    id
    name
    number
  }
`,wo=I.default`
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
  ${jt}
  ${Sp}
`,Oo=I.default`
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
  ${kt}
  ${jt}
  ${Me}
`,bp=I.default`
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
  ${kt}
  ${jt}
  ${Me}
`,Ip=I.default`
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
`,Bo=I.default`
  fragment CommitFields on Commit {
    authoredDate
    oid
    message
  }
`,Cr=I.default`
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
`,gp=I.default`
  fragment ReleaseFields on Release {
    id
    description
    name
    publishedAt
    createdAt
    tagName
    url
  }
`,Mp=I.default`
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
`,mp=I.default`
  mutation createRef($input: CreateRefInput!) {
    createRef(input: $input) {
      clientMutationId
      ref {
        id
        name
      }
    }
  }
`,Rp=I.default`
  mutation deleteLinkedBranch($input: DeleteLinkedBranchInput!) {
    deleteLinkedBranch(input: $input) {
      clientMutationId
    }
  }
`,Ap=I.default`
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
  ${yp}
`,fp=I.default`
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
`,Pp=I.default`
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
  ${Me}
`,Ep=I.default`
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
`,Cp=I.default`
  query issueDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...IssueDetailFields
    }
  }
  ${dp}
`,hp=I.default`
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
  ${La}
`,Dp=I.default`
  query issueByNumber($owner: String!, $name: String!, $issueNumber: Int!) {
    repository(owner: $owner, name: $name) {
      issue(number: $issueNumber) {
        ...IssueFields
      }
    }
  }
  ${La}
`,xp=I.default`
  mutation closeIssue($nodeId: ID!, $stateReason: IssueClosedStateReason!) {
    closeIssue(input: { issueId: $nodeId, stateReason: $stateReason }) {
      issue {
        id
      }
    }
  }
`,Up=I.default`
  mutation reopenIssue($nodeId: ID!) {
    reopenIssue(input: { issueId: $nodeId }) {
      issue {
        id
      }
    }
  }
`,_p=I.default`
  mutation changeIssueAssignees($issueId: ID!, $assigneeIds: [ID!]) {
    updateIssue(input: { id: $issueId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,vp=I.default`
  mutation changeIssueMilestone($issueId: ID!, $milestoneId: ID) {
    updateIssue(input: { id: $issueId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,Tp=I.default`
  mutation addIssueToProject($issueId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $issueId }) {
      clientMutationId
    }
  }
`,wp=I.default`
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
  ${La}
`,Op=I.default`
  query searchIssueMentions($query: String!, $numberOfItems: Int!) {
    search(query: $query, type: ISSUE, first: $numberOfItems) {
      nodes {
        ... on Issue {
          ...IssueMentionFields
        }
      }
    }
  }
  ${_o}
`,Bp=I.default`
  query searchPullRequestMentions($query: String!, $numberOfItems: Int!) {
    search(query: $query, type: ISSUE, first: $numberOfItems) {
      nodes {
        ... on PullRequest {
          ...PullRequestMentionFields
        }
      }
    }
  }
  ${vo}
`,Lp=I.default`
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
  ${_o}
  ${vo}
`,qp=I.default`
  query searchRepositoryMentions($query: String!, $numberOfItems: Int!) {
    search(query: $query, type: REPOSITORY, first: $numberOfItems) {
      nodes {
        ... on Repository {
          ...RepositoryMentionFields
        }
      }
    }
  }
  ${To}
`,Np=I.default`
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
  ${To}
`,Vp=I.default`
  mutation changeProjectStatus($projectId: ID!, $closed: Boolean!) {
    updateProjectV2(input: { projectId: $projectId, closed: $closed }) {
      clientMutationId
    }
  }
`,kp=I.default`
  query projectDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...ProjectFields
    }
  }
  ${wo}
`,jp=I.default`
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
  ${Oo}
`,Fp=I.default`
  query pullRequestDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...PullRequestDetailsFields
    }
  }
  ${bp}
`,zp=I.default`
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
  ${Me}
`,Hp=I.default`
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
`,Gp=I.default`
  query pullRequestCommits($nodeId: ID!, $numberOfItems: Int!, $before: String) {
    node(id: $nodeId) {
      ...PullRequestCommitFields
    }
  }
  ${Ip}
`,$p=I.default`
  mutation closePullRequest($nodeId: ID!) {
    closePullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Qp=I.default`
  mutation reopenPullRequest($nodeId: ID!) {
    reopenPullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Wp=I.default`
  mutation markPullRequestReadyForReview($nodeId: ID!) {
    markPullRequestReadyForReview(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Kp=I.default`
  mutation addPullRequestReview($nodeId: ID!, $event: PullRequestReviewEvent, $body: String) {
    addPullRequestReview(input: { pullRequestId: $nodeId, event: $event, body: $body }) {
      pullRequestReview {
        id
      }
    }
  }
`,Yp=I.default`
  mutation changePullRequestAssignees($pullRequestId: ID!, $assigneeIds: [ID!]) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,Jp=I.default`
  mutation changePullRequestMilestone($pullRequestId: ID!, $milestoneId: ID) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,Zp=I.default`
  mutation addPullRequestToProject($pullRequestId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $pullRequestId }) {
      clientMutationId
    }
  }
`,Xp=I.default`
  mutation requestReview($pullRequestId: ID!, $collaboratorId: ID!) {
    requestReviews(input: { pullRequestId: $pullRequestId, userIds: [$collaboratorId], union: true }) {
      clientMutationId
    }
  }
`,el=I.default`
  mutation mergePullRequest($nodeId: ID!, $method: PullRequestMergeMethod!) {
    mergePullRequest(input: { pullRequestId: $nodeId, mergeMethod: $method }) {
      pullRequest {
        nodeId: id
      }
    }
  }
`,tl=I.default`
  mutation addPullRequestToMergeQueue($nodeId: ID!) {
    enqueuePullRequest(input: { pullRequestId: $nodeId }) {
      __typename
    }
  }
`,al=I.default`
  mutation removePullRequestFromMergeQueue($nodeId: ID!) {
    dequeuePullRequest(input: { id: $nodeId }) {
      __typename
    }
  }
`,rl=I.default`
  mutation enablePullRequestAutoMerge($nodeId: ID!, $mergeMethod: PullRequestMergeMethod) {
    enablePullRequestAutoMerge(input: { pullRequestId: $nodeId, mergeMethod: $mergeMethod }) {
      pullRequest {
        id
      }
    }
  }
`,nl=I.default`
  mutation disablePullRequestAutoMerge($nodeId: ID!) {
    disablePullRequestAutoMerge(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,ol=I.default`
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
`,il=I.default`
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
  ${Oo}
`,sl=I.default`
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
`,ul=I.default`
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
`,pl=I.default`
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
`,ll=I.default`
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
`,cl=I.default`
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
  ${Bo}
  ${Me}
`,yl=I.default`
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
  ${Bo}
`,dl=I.default`
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
  ${La}
`,Sl=I.default`
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
  ${gp}
`,bl=I.default`
  mutation addStar($repositoryId: ID!) {
    addStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,Il=I.default`
  mutation removeStar($repositoryId: ID!) {
    removeStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,gl=I.default`
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
`,Ml=I.default`
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
  ${Me}
  ${wo}
`,ml=I.default`
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
  ${Me}
`,Rl=I.default`
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
`,Al=(e,t,a,r)=>e();function Lo(e,t=Al){return{createLinkedBranch(a,r,n){return t(o=>e.request({document:Mp,variables:a,requestHeaders:{...r,...o},signal:n}),"createLinkedBranch","mutation",a)},createRef(a,r,n){return t(o=>e.request({document:mp,variables:a,requestHeaders:{...r,...o},signal:n}),"createRef","mutation",a)},deleteLinkedBranch(a,r,n){return t(o=>e.request({document:Rp,variables:a,requestHeaders:{...r,...o},signal:n}),"deleteLinkedBranch","mutation",a)},searchDiscussions(a,r,n){return t(o=>e.request({document:Ap,variables:a,requestHeaders:{...r,...o},signal:n}),"searchDiscussions","query",a)},getGitHubDiscussionNumber(a,r,n){return t(o=>e.request({document:fp,variables:a,requestHeaders:{...r,...o},signal:n}),"getGitHubDiscussionNumber","query",a)},repositoryCollaboratorsForIssues(a,r,n){return t(o=>e.request({document:Pp,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryCollaboratorsForIssues","query",a)},repositoryProjectsForIssues(a,r,n){return t(o=>e.request({document:Ep,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryProjectsForIssues","query",a)},issueDetails(a,r,n){return t(o=>e.request({document:Cp,variables:a,requestHeaders:{...r,...o},signal:n}),"issueDetails","query",a)},searchIssues(a,r,n){return t(o=>e.request({document:hp,variables:a,requestHeaders:{...r,...o},signal:n}),"searchIssues","query",a)},issueByNumber(a,r,n){return t(o=>e.request({document:Dp,variables:a,requestHeaders:{...r,...o},signal:n}),"issueByNumber","query",a)},closeIssue(a,r,n){return t(o=>e.request({document:xp,variables:a,requestHeaders:{...r,...o},signal:n}),"closeIssue","mutation",a)},reopenIssue(a,r,n){return t(o=>e.request({document:Up,variables:a,requestHeaders:{...r,...o},signal:n}),"reopenIssue","mutation",a)},changeIssueAssignees(a,r,n){return t(o=>e.request({document:_p,variables:a,requestHeaders:{...r,...o},signal:n}),"changeIssueAssignees","mutation",a)},changeIssueMilestone(a,r,n){return t(o=>e.request({document:vp,variables:a,requestHeaders:{...r,...o},signal:n}),"changeIssueMilestone","mutation",a)},addIssueToProject(a,r,n){return t(o=>e.request({document:Tp,variables:a,requestHeaders:{...r,...o},signal:n}),"addIssueToProject","mutation",a)},createIssue(a,r,n){return t(o=>e.request({document:wp,variables:a,requestHeaders:{...r,...o},signal:n}),"createIssue","mutation",a)},searchIssueMentions(a,r,n){return t(o=>e.request({document:Op,variables:a,requestHeaders:{...r,...o},signal:n}),"searchIssueMentions","query",a)},searchPullRequestMentions(a,r,n){return t(o=>e.request({document:Bp,variables:a,requestHeaders:{...r,...o},signal:n}),"searchPullRequestMentions","query",a)},issueOrPullRequestMention(a,r,n){return t(o=>e.request({document:Lp,variables:a,requestHeaders:{...r,...o},signal:n}),"issueOrPullRequestMention","query",a)},searchRepositoryMentions(a,r,n){return t(o=>e.request({document:qp,variables:a,requestHeaders:{...r,...o},signal:n}),"searchRepositoryMentions","query",a)},viewerRepositoryMentions(a,r,n){return t(o=>e.request({document:Np,variables:a,requestHeaders:{...r,...o},signal:n}),"viewerRepositoryMentions","query",a)},changeProjectStatus(a,r,n){return t(o=>e.request({document:Vp,variables:a,requestHeaders:{...r,...o},signal:n}),"changeProjectStatus","mutation",a)},projectDetails(a,r,n){return t(o=>e.request({document:kp,variables:a,requestHeaders:{...r,...o},signal:n}),"projectDetails","query",a)},searchPullRequests(a,r,n){return t(o=>e.request({document:jp,variables:a,requestHeaders:{...r,...o},signal:n}),"searchPullRequests","query",a)},pullRequestDetails(a,r,n){return t(o=>e.request({document:Fp,variables:a,requestHeaders:{...r,...o},signal:n}),"pullRequestDetails","query",a)},repositoryCollaboratorsForPullRequests(a,r,n){return t(o=>e.request({document:zp,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryCollaboratorsForPullRequests","query",a)},repositoryProjectsForPullRequests(a,r,n){return t(o=>e.request({document:Hp,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryProjectsForPullRequests","query",a)},pullRequestCommits(a,r,n){return t(o=>e.request({document:Gp,variables:a,requestHeaders:{...r,...o},signal:n}),"pullRequestCommits","query",a)},closePullRequest(a,r,n){return t(o=>e.request({document:$p,variables:a,requestHeaders:{...r,...o},signal:n}),"closePullRequest","mutation",a)},reopenPullRequest(a,r,n){return t(o=>e.request({document:Qp,variables:a,requestHeaders:{...r,...o},signal:n}),"reopenPullRequest","mutation",a)},markPullRequestReadyForReview(a,r,n){return t(o=>e.request({document:Wp,variables:a,requestHeaders:{...r,...o},signal:n}),"markPullRequestReadyForReview","mutation",a)},addPullRequestReview(a,r,n){return t(o=>e.request({document:Kp,variables:a,requestHeaders:{...r,...o},signal:n}),"addPullRequestReview","mutation",a)},changePullRequestAssignees(a,r,n){return t(o=>e.request({document:Yp,variables:a,requestHeaders:{...r,...o},signal:n}),"changePullRequestAssignees","mutation",a)},changePullRequestMilestone(a,r,n){return t(o=>e.request({document:Jp,variables:a,requestHeaders:{...r,...o},signal:n}),"changePullRequestMilestone","mutation",a)},addPullRequestToProject(a,r,n){return t(o=>e.request({document:Zp,variables:a,requestHeaders:{...r,...o},signal:n}),"addPullRequestToProject","mutation",a)},requestReview(a,r,n){return t(o=>e.request({document:Xp,variables:a,requestHeaders:{...r,...o},signal:n}),"requestReview","mutation",a)},mergePullRequest(a,r,n){return t(o=>e.request({document:el,variables:a,requestHeaders:{...r,...o},signal:n}),"mergePullRequest","mutation",a)},addPullRequestToMergeQueue(a,r,n){return t(o=>e.request({document:tl,variables:a,requestHeaders:{...r,...o},signal:n}),"addPullRequestToMergeQueue","mutation",a)},removePullRequestFromMergeQueue(a,r,n){return t(o=>e.request({document:al,variables:a,requestHeaders:{...r,...o},signal:n}),"removePullRequestFromMergeQueue","mutation",a)},enablePullRequestAutoMerge(a,r,n){return t(o=>e.request({document:rl,variables:a,requestHeaders:{...r,...o},signal:n}),"enablePullRequestAutoMerge","mutation",a)},disablePullRequestAutoMerge(a,r,n){return t(o=>e.request({document:nl,variables:a,requestHeaders:{...r,...o},signal:n}),"disablePullRequestAutoMerge","mutation",a)},createPullRequest(a,r,n){return t(o=>e.request({document:ol,variables:a,requestHeaders:{...r,...o},signal:n}),"createPullRequest","mutation",a)},initPullRequest(a,r,n){return t(o=>e.request({document:il,variables:a,requestHeaders:{...r,...o},signal:n}),"initPullRequest","mutation",a)},searchRepositories(a,r,n){return t(o=>e.request({document:sl,variables:a,requestHeaders:{...r,...o},signal:n}),"searchRepositories","query",a)},myLatestRepositories(a,r,n){return t(o=>e.request({document:ul,variables:a,requestHeaders:{...r,...o},signal:n}),"myLatestRepositories","query",a)},milestonesForRepository(a,r,n){return t(o=>e.request({document:pl,variables:a,requestHeaders:{...r,...o},signal:n}),"milestonesForRepository","query",a)},commentsForPullRequest(a,r,n){return t(o=>e.request({document:ll,variables:a,requestHeaders:{...r,...o},signal:n}),"commentsForPullRequest","query",a)},dataForRepository(a,r,n){return t(o=>e.request({document:cl,variables:a,requestHeaders:{...r,...o},signal:n}),"dataForRepository","query",a)},searchRepositoryBranches(a,r,n){return t(o=>e.request({document:yl,variables:a,requestHeaders:{...r,...o},signal:n}),"searchRepositoryBranches","query",a)},repositoryIssues(a,r,n){return t(o=>e.request({document:dl,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryIssues","query",a)},repositoryReleases(a,r,n){return t(o=>e.request({document:Sl,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryReleases","query",a)},addStar(a,r,n){return t(o=>e.request({document:bl,variables:a,requestHeaders:{...r,...o},signal:n}),"addStar","mutation",a)},removeStar(a,r,n){return t(o=>e.request({document:Il,variables:a,requestHeaders:{...r,...o},signal:n}),"removeStar","mutation",a)},myStarredRepositories(a,r,n){return t(o=>e.request({document:gl,variables:a,requestHeaders:{...r,...o},signal:n}),"myStarredRepositories","query",a)},getViewer(a,r,n){return t(o=>e.request({document:Ml,variables:a,requestHeaders:{...r,...o},signal:n}),"getViewer","query",a)},getViewerStats(a,r,n){return t(o=>e.request({document:ml,variables:a,requestHeaders:{...r,...o},signal:n}),"getViewerStats","query",a)},getViewerStatsDetails(a,r,n){return t(o=>e.request({document:Rl,variables:a,requestHeaders:{...r,...o},signal:n}),"getViewerStatsDetails","query",a)}}}var hr=null,Dr=null,ko=null,fl=(0,No.getPreferenceValues)();function Pl({token:e,type:t}){let a=t==="personal"?`token ${e}`:`bearer ${e}`;ko=e,hr=Lo(new Ea("https://api.github.com/graphql",{headers:{authorization:a}})),Dr=new qo.Octokit({auth:e,request:{fetch:Ba}})}var jo=Vo.OAuthService.github({personalAccessToken:fl.personalAccessToken,scope:"notifications repo project read:org read:user read:packages",onAuthorize:Pl});function Ft(){if(!hr||!Dr)throw new Error("GitHub clients not initialized");return{github:hr,octokit:Dr,token:ko}}var Fo=require("@raycast/api");function qa(e){return e?.response?.errors?e.response.errors[0].message:e instanceof Error?e.message:String(e)}async function El(){let{octokit:e}=Ft(),{data:t}=await e.users.getAuthenticated();return t.login}async function zo({name:e,description:t,isPrivate:a,owner:r,autoInit:n}){let{octokit:o}=Ft(),u=await El(),s={name:e,description:t||void 0,private:a,auto_init:n};try{let{data:i}=r.toLowerCase()===u.toLowerCase()?await o.repos.createForAuthenticatedUser(s):await o.repos.createInOrg({org:r,...s});return i}catch(i){throw new Error(Cl(i,e,r))}}function Ho(e){let{repositoryCloneProtocol:t}=(0,Fo.getPreferenceValues)();return t==="ssh"?e.ssh_url:e.clone_url}function Cl(e,t,a){let r=e?.response?.data?.errors?.[0]?.message;switch(e?.status){case 422:return r?.includes("already exists")?`A repository named "${t}" already exists on ${a}`:r??`Invalid repository name "${t}"`;case 403:return`You don't have permission to create repositories on ${a}`;case 404:return`Owner "${a}" not found, or you are not a member of it`;default:return qa(e)}}var Go=k(Ra());var $o=(0,Go.withAccessToken)(jo);var L=require("react/jsx-runtime");function hl(){let{octokit:e}=Ft(),{data:t,isLoading:a}=(0,De.useCachedPromise)(async()=>{let[{data:p},c]=await Promise.all([e.users.getAuthenticated(),e.paginate(e.orgs.listForAuthenticatedUser,{per_page:100}).catch(y=>((0,De.showFailureToast)(y,{title:"Failed loading organizations"}),[]))]);return{viewer:{login:p.login,avatarUrl:p.avatar_url},organizations:c.map(y=>({login:y.login,avatarUrl:y.avatar_url}))}},[],{failureToastOptions:{title:"Failed loading owners"}}),{handleSubmit:r,itemProps:n,values:o,setValue:u,reset:s,focus:i}=(0,De.useForm)({async onSubmit(p){let c=await(0,E.showToast)({style:E.Toast.Style.Animated,title:"Creating repository"});try{let y=await zo({name:p.name.trim(),description:p.description.trim(),isPrivate:p.isPrivate,owner:p.owner,autoInit:p.autoInit});c.style=E.Toast.Style.Success,c.title=`Created ${y.full_name}`,c.primaryAction={title:"Open in Browser",shortcut:E.Keyboard.Shortcut.Common.Open,onAction:()=>(0,E.open)(y.html_url)},c.secondaryAction={title:"Copy Clone URL",shortcut:E.Keyboard.Shortcut.Common.Copy,onAction:()=>E.Clipboard.copy(Ho(y))},s({name:"",description:"",isPrivate:p.isPrivate,owner:p.owner,autoInit:!1}),i("name")}catch(y){(0,E.captureException)(y),c.style=E.Toast.Style.Failure,c.title="Failed creating repository",c.message=qa(y)}},initialValues:{name:"",description:"",isPrivate:!0,owner:"",autoInit:!1},validation:{name:De.FormValidation.Required,owner:De.FormValidation.Required}});return(0,Qo.useEffect)(()=>{t&&!o.owner&&u("owner",t.viewer.login)},[t?.viewer.login]),(0,L.jsxs)(E.Form,{actions:(0,L.jsx)(E.ActionPanel,{children:(0,L.jsx)(E.Action.SubmitForm,{onSubmit:r,title:"Create Repository",icon:E.Icon.Plus})}),isLoading:a,children:[(0,L.jsx)(E.Form.Dropdown,{title:"Owner",isLoading:a,...n.owner,children:t?(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(E.Form.Dropdown.Item,{title:t.viewer.login,value:t.viewer.login,icon:{source:t.viewer.avatarUrl,mask:E.Image.Mask.Circle}}),t.organizations.length>0?(0,L.jsx)(E.Form.Dropdown.Section,{title:"Organizations",children:t.organizations.map(p=>(0,L.jsx)(E.Form.Dropdown.Item,{title:p.login,value:p.login,icon:{source:p.avatarUrl,mask:E.Image.Mask.Circle}},p.login))}):null]}):null}),(0,L.jsx)(E.Form.TextField,{title:"Name",placeholder:"my-new-repository",autoFocus:!0,...n.name}),(0,L.jsx)(E.Form.TextArea,{title:"Description",placeholder:"Optional description",...n.description}),(0,L.jsx)(E.Form.Separator,{}),(0,L.jsx)(E.Form.Checkbox,{label:"Private",info:"Only you and people you share it with can see a private repository",...n.isPrivate}),(0,L.jsx)(E.Form.Checkbox,{label:"Initialize with a README",info:"Creates an initial commit so the repository can be cloned right away",...n.autoInit})]})}var Dl=$o(hl);
