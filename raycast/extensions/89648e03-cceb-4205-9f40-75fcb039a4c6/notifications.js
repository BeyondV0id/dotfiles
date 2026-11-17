"use strict";var Ei=Object.create;var Xt=Object.defineProperty;var Ci=Object.getOwnPropertyDescriptor;var hi=Object.getOwnPropertyNames;var Di=Object.getPrototypeOf,xi=Object.prototype.hasOwnProperty;var Ja=(e,t,a)=>()=>{if(a)throw a[0];try{return e&&(t=e(e=0)),t}catch(r){throw a=[r],r}};var C=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(a){throw t=0,a}},rt=(e,t)=>{for(var a in t)Xt(e,a,{get:t[a],enumerable:!0})},Zt=(e,t,a,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of hi(t))!xi.call(e,n)&&n!==a&&Xt(e,n,{get:()=>t[n],enumerable:!(r=Ci(t,n))||r.enumerable});return e},H=(e,t,a)=>(Zt(e,t,"default"),a&&Zt(a,t,"default")),T=(e,t,a)=>(a=e!=null?Ei(Di(e)):{},Zt(t||!e||!e.__esModule?Xt(a,"default",{value:e,enumerable:!0}):a,e)),_i=e=>Zt(Xt({},"__esModule",{value:!0}),e);var Gr=C(ea=>{"use strict";Object.defineProperty(ea,"__esModule",{value:!0});ea.useDeepMemo=void 0;var Za=require("react"),Ui=require("dequal/lite");function vi(e){let t=(0,Za.useRef)(e),a=(0,Za.useRef)(0);return(0,Ui.dequal)(e,t.current)||(t.current=e,a.current+=1),(0,Za.useMemo)(()=>t.current,[a.current])}ea.useDeepMemo=vi});var Pe=C(ta=>{"use strict";Object.defineProperty(ta,"__esModule",{value:!0});ta.useLatest=void 0;var Ti=require("react");function wi(e){let t=(0,Ti.useRef)(e);return t.current=e,t}ta.useLatest=wi});var ht=C(Se=>{"use strict";var Oi=Se&&Se.__createBinding||(Object.create?(function(e,t,a,r){r===void 0&&(r=a);var n=Object.getOwnPropertyDescriptor(t,a);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,n)}):(function(e,t,a,r){r===void 0&&(r=a),e[r]=t[a]})),Bi=Se&&Se.__setModuleDefault||(Object.create?(function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}):function(e,t){e.default=t}),Qr=Se&&Se.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var a in e)a!=="default"&&Object.prototype.hasOwnProperty.call(e,a)&&Oi(t,e,a);return Bi(t,e),t};Object.defineProperty(Se,"__esModule",{value:!0});Se.showFailureToast=void 0;var Li=Qr(require("fs")),qi=Qr(require("path")),nt=require("@raycast/api");function Ni(e,t){let a=e instanceof Error?e.message:String(e);return(0,nt.showToast)({style:nt.Toast.Style.Failure,title:t?.title??"Something went wrong",message:t?.message??a,primaryAction:t?.primaryAction??$r(e),secondaryAction:t?.primaryAction?$r(e):void 0})}Se.showFailureToast=Ni;var $r=e=>{let t=!0,a="[Extension Name]...",r="";try{let u=JSON.parse(Li.readFileSync(qi.join(nt.environment.assetsPath,"..","package.json"),"utf8"));a=`[${u.title}]...`,r=`https://raycast.com/${u.owner||u.author}/${u.name}`,(!u.owner||u.access==="public")&&(t=!1)}catch{}let n=nt.environment.isDevelopment||t,o=e instanceof Error?e?.stack||e?.message||"":String(e);return{title:n?"Copy Logs":"Report Error",onAction(u){u.hide(),n?nt.Clipboard.copy(o):(0,nt.open)(`https://github.com/raycast/extensions/issues/new?&labels=extension%2Cbug&template=extension_bug_report.yml&title=${encodeURIComponent(a)}&extension-url=${encodeURI(r)}&description=${encodeURIComponent(`#### Error:
\`\`\`
${o}
\`\`\`
`)}`)}}}});var ot=C(aa=>{"use strict";Object.defineProperty(aa,"__esModule",{value:!0});aa.usePromise=void 0;var Y=require("react"),Dt=require("@raycast/api"),Vi=Gr(),we=Pe(),ki=ht();function Fi(e,t,a){let r=(0,Y.useRef)(0),[n,o]=(0,Y.useState)({isLoading:!0}),u=(0,we.useLatest)(e),i=(0,we.useLatest)(a?.abortable),s=(0,we.useLatest)(t||[]),p=(0,we.useLatest)(a?.onError),c=(0,we.useLatest)(a?.onData),d=(0,we.useLatest)(a?.onWillExecute),y=(0,we.useLatest)(a?.failureToastOptions),M=(0,we.useLatest)(n.data),l=(0,Y.useRef)(),b=(0,Y.useRef)({page:0}),S=(0,Y.useRef)(!1),I=(0,Y.useRef)(!0),R=(0,Y.useRef)(50),P=(0,Y.useCallback)((...F)=>{let w=++r.current;i.current&&(i.current.current?.abort(),i.current.current=new AbortController),d.current?.(F),o(h=>({...h,isLoading:!0}));let pe=ji(u.current)(...F);function de(h){return h.name=="AbortError"||w===r.current&&(p.current?p.current(h):Dt.environment.launchType!==Dt.LaunchType.Background&&(0,ki.showFailureToast)(h,{title:"Failed to fetch latest data",primaryAction:{title:"Retry",onAction(K){K.hide(),l.current?.(...s.current||[])}},...y.current}),o({error:h,isLoading:!1})),h}return typeof pe=="function"?(S.current=!0,pe(b.current).then(({data:h,hasMore:K,cursor:Ct})=>(w===r.current&&(b.current&&(b.current.cursor=Ct,b.current.lastItem=h?.[h.length-1]),c.current&&c.current(h,b.current),K&&(R.current=h.length),I.current=K,o(Ya=>b.current.page===0?{data:h,isLoading:!1}:{data:(Ya.data||[])?.concat(h),isLoading:!1})),h),h=>(I.current=!1,de(h)))):(S.current=!1,pe.then(h=>(w===r.current&&(c.current&&c.current(h),o({data:h,isLoading:!1})),h),de))},[i,c,p,s,u,o,l,d,b,y]);l.current=P;let m=(0,Y.useCallback)(()=>{b.current={page:0};let F=s.current||[];return P(...F)},[P,s]),E=(0,Y.useCallback)(async(F,w)=>{let pe;try{if(w?.optimisticUpdate){typeof w?.rollbackOnError!="function"&&w?.rollbackOnError!==!1&&(pe=structuredClone(M.current?.value));let de=w.optimisticUpdate;o(h=>({...h,data:de(h.data)}))}return await F}catch(de){if(typeof w?.rollbackOnError=="function"){let h=w.rollbackOnError;o(K=>({...K,data:h(K.data)}))}else w?.optimisticUpdate&&w?.rollbackOnError!==!1&&o(h=>({...h,data:pe}));throw de}finally{w?.shouldRevalidateAfter!==!1&&(Dt.environment.launchType===Dt.LaunchType.Background||Dt.environment.commandMode==="menu-bar"?await m():m())}},[m,M,o]),f=(0,Y.useCallback)(()=>{b.current.page+=1;let F=s.current||[];P(...F)},[b,s,P]);(0,Y.useEffect)(()=>{b.current={page:0},a?.execute!==!1?P(...t||[]):i.current&&i.current.current?.abort()},[(0,Vi.useDeepMemo)([t,a?.execute,P]),i,b]),(0,Y.useEffect)(()=>()=>{i.current&&i.current.current?.abort()},[i]);let _=a?.execute!==!1?n.isLoading:!1,N={...n,isLoading:_},ue=S.current?{pageSize:R.current,hasMore:I.current,onLoadMore:f}:void 0;return{...N,revalidate:m,mutate:E,pagination:ue}}aa.usePromise=Fi;function ji(e){return e===Promise.all||e===Promise.race||e===Promise.resolve||e===Promise.reject?e.bind(Promise):e}});var Oe=C(be=>{"use strict";var zi=be&&be.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(be,"__esModule",{value:!0});be.hash=be.reviver=be.replacer=void 0;var Hi=zi(require("object-hash"));function Gi(e,t){let a=this[e];return a instanceof Date?`__raycast_cached_date__${a.toString()}`:Buffer.isBuffer(a)?`__raycast_cached_buffer__${a.toString("base64")}`:t}be.replacer=Gi;function $i(e,t){return typeof t=="string"&&t.startsWith("__raycast_cached_date__")?new Date(t.replace("__raycast_cached_date__","")):typeof t=="string"&&t.startsWith("__raycast_cached_buffer__")?Buffer.from(t.replace("__raycast_cached_buffer__",""),"base64"):t}be.reviver=$i;function Qi(e,t){return(0,Hi.default)(e,{replacer:a=>a instanceof URLSearchParams?a.toString():a,...t})}be.hash=Qi});var na=C(ra=>{"use strict";Object.defineProperty(ra,"__esModule",{value:!0});ra.useCachedState=void 0;var Xa=require("react"),Wi=require("@raycast/api"),er=Pe(),Wr=Oe(),Ki=Symbol("cache without namespace"),Kr=new Map;function Yi(e,t,a){let r=a?.cacheNamespace||Ki,n=Kr.get(r)||Kr.set(r,new Wi.Cache({namespace:a?.cacheNamespace})).get(r);if(!n)throw new Error("Missing cache");let o=(0,er.useLatest)(e),u=(0,er.useLatest)(t),i=(0,Xa.useSyncExternalStore)(n.subscribe,()=>{try{return n.get(o.current)}catch(d){console.error("Could not get Cache data:",d);return}}),s=(0,Xa.useMemo)(()=>{if(typeof i<"u"){if(i==="undefined")return;try{return JSON.parse(i,Wr.reviver)}catch(d){return console.warn("The cached data is corrupted",d),u.current}}else return u.current},[i,u]),p=(0,er.useLatest)(s),c=(0,Xa.useCallback)(d=>{let y=typeof d=="function"?d(p.current):d;if(typeof y>"u")n.set(o.current,"undefined");else{let M=JSON.stringify(y,Wr.replacer);n.set(o.current,M)}return y},[n,o,p]);return[s,c]}ra.useCachedState=Yi});var _t=C(oa=>{"use strict";Object.defineProperty(oa,"__esModule",{value:!0});oa.useCachedPromise=void 0;var xt=require("react"),Ji=na(),Zi=ot(),Xi=Pe(),Yr=Oe(),it=Symbol();function es(e,t,a){let{initialData:r,keepPreviousData:n,internal_cacheKeySuffix:o,...u}=a||{},i=(0,xt.useRef)(),[s,p]=(0,Ji.useCachedState)((0,Yr.hash)(t||[])+o,it,{cacheNamespace:(0,Yr.hash)(e)}),c=(0,xt.useRef)(s!==it?s:r),d=(0,xt.useRef)(void 0),{mutate:y,revalidate:M,...l}=(0,Zi.usePromise)(e,t||[],{...u,onData(P,m){d.current=m,u.onData&&u.onData(P,m),!(m&&m.page>0)&&(i.current="promise",c.current=P,p(P))}}),b,S=l.pagination;d.current&&d.current.page>0&&l.data?b=l.data:i.current==="promise"?b=c.current:n&&s!==it?(b=s,S&&(S.hasMore=!0,S.pageSize=s.length)):n&&s===it?b=c.current:s!==it?(b=s,S&&(S.hasMore=!0,S.pageSize=s.length)):b=r;let I=(0,Xi.useLatest)(b),R=(0,xt.useCallback)(async(P,m)=>{let E;try{if(m?.optimisticUpdate){typeof m?.rollbackOnError!="function"&&m?.rollbackOnError!==!1&&(E=structuredClone(I.current));let f=m.optimisticUpdate(I.current);i.current="cache",c.current=f,p(f)}return await y(P,{shouldRevalidateAfter:m?.shouldRevalidateAfter})}catch(f){if(typeof m?.rollbackOnError=="function"){let _=m.rollbackOnError(I.current);i.current="cache",c.current=_,p(_)}else m?.optimisticUpdate&&m?.rollbackOnError!==!1&&(i.current="cache",c.current=E,p(E));throw f}},[p,y,I,c,i]);return(0,xt.useEffect)(()=>{s!==it&&(i.current="cache",c.current=s)},[s]),{data:b,isLoading:l.isLoading,error:l.error,mutate:d.current&&d.current.page>0?y:R,pagination:S,revalidate:M}}oa.useCachedPromise=es});var pn=C((ce,un)=>{"use strict";Object.defineProperty(ce,"__esModule",{value:!0});function lt(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var le=lt(require("stream")),en=lt(require("http")),sa=lt(require("url")),tn=lt(require("whatwg-url")),ts=lt(require("https")),Ge=lt(require("zlib")),as=le.Readable,Ee=Symbol("buffer"),tr=Symbol("type"),vt=class e{constructor(){this[tr]="";let t=arguments[0],a=arguments[1],r=[],n=0;if(t){let u=t,i=Number(u.length);for(let s=0;s<i;s++){let p=u[s],c;p instanceof Buffer?c=p:ArrayBuffer.isView(p)?c=Buffer.from(p.buffer,p.byteOffset,p.byteLength):p instanceof ArrayBuffer?c=Buffer.from(p):p instanceof e?c=p[Ee]:c=Buffer.from(typeof p=="string"?p:String(p)),n+=c.length,r.push(c)}}this[Ee]=Buffer.concat(r);let o=a&&a.type!==void 0&&String(a.type).toLowerCase();o&&!/[^\u0020-\u007E]/.test(o)&&(this[tr]=o)}get size(){return this[Ee].length}get type(){return this[tr]}text(){return Promise.resolve(this[Ee].toString())}arrayBuffer(){let t=this[Ee],a=t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength);return Promise.resolve(a)}stream(){let t=new as;return t._read=function(){},t.push(this[Ee]),t.push(null),t}toString(){return"[object Blob]"}slice(){let t=this.size,a=arguments[0],r=arguments[1],n,o;a===void 0?n=0:a<0?n=Math.max(t+a,0):n=Math.min(a,t),r===void 0?o=t:r<0?o=Math.max(t+r,0):o=Math.min(r,t);let u=Math.max(o-n,0),s=this[Ee].slice(n,n+u),p=new e([],{type:arguments[2]});return p[Ee]=s,p}};Object.defineProperties(vt.prototype,{size:{enumerable:!0},type:{enumerable:!0},slice:{enumerable:!0}});Object.defineProperty(vt.prototype,Symbol.toStringTag,{value:"Blob",writable:!1,enumerable:!1,configurable:!0});function q(e,t,a){Error.call(this,e),this.message=e,this.type=t,a&&(this.code=this.errno=a.code),Error.captureStackTrace(this,this.constructor)}q.prototype=Object.create(Error.prototype);q.prototype.constructor=q;q.prototype.name="FetchError";var or;try{or=require("encoding").convert}catch{}var he=Symbol("Body internals"),Jr=le.PassThrough;function O(e){var t=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.size;let n=r===void 0?0:r;var o=a.timeout;let u=o===void 0?0:o;e==null?e=null:an(e)?e=Buffer.from(e.toString()):wt(e)||Buffer.isBuffer(e)||(Object.prototype.toString.call(e)==="[object ArrayBuffer]"?e=Buffer.from(e):ArrayBuffer.isView(e)?e=Buffer.from(e.buffer,e.byteOffset,e.byteLength):e instanceof le||(e=Buffer.from(String(e)))),this[he]={body:e,disturbed:!1,error:null},this.size=n,this.timeout=u,e instanceof le&&e.on("error",function(i){let s=i.name==="AbortError"?i:new q(`Invalid response body while trying to fetch ${t.url}: ${i.message}`,"system",i);t[he].error=s})}O.prototype={get body(){return this[he].body},get bodyUsed(){return this[he].disturbed},arrayBuffer(){return st.call(this).then(function(e){return e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength)})},blob(){let e=this.headers&&this.headers.get("content-type")||"";return st.call(this).then(function(t){return Object.assign(new vt([],{type:e.toLowerCase()}),{[Ee]:t})})},json(){var e=this;return st.call(this).then(function(t){try{return JSON.parse(t.toString())}catch(a){return O.Promise.reject(new q(`invalid json response body at ${e.url} reason: ${a.message}`,"invalid-json"))}})},text(){return st.call(this).then(function(e){return e.toString()})},buffer(){return st.call(this)},textConverted(){var e=this;return st.call(this).then(function(t){return rs(t,e.headers)})}};Object.defineProperties(O.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0}});O.mixIn=function(e){for(let t of Object.getOwnPropertyNames(O.prototype))if(!(t in e)){let a=Object.getOwnPropertyDescriptor(O.prototype,t);Object.defineProperty(e,t,a)}};function st(){var e=this;if(this[he].disturbed)return O.Promise.reject(new TypeError(`body used already for: ${this.url}`));if(this[he].disturbed=!0,this[he].error)return O.Promise.reject(this[he].error);let t=this.body;if(t===null)return O.Promise.resolve(Buffer.alloc(0));if(wt(t)&&(t=t.stream()),Buffer.isBuffer(t))return O.Promise.resolve(t);if(!(t instanceof le))return O.Promise.resolve(Buffer.alloc(0));let a=[],r=0,n=!1;return new O.Promise(function(o,u){let i;e.timeout&&(i=setTimeout(function(){n=!0,u(new q(`Response timeout while trying to fetch ${e.url} (over ${e.timeout}ms)`,"body-timeout"))},e.timeout)),t.on("error",function(s){s.name==="AbortError"?(n=!0,u(s)):u(new q(`Invalid response body while trying to fetch ${e.url}: ${s.message}`,"system",s))}),t.on("data",function(s){if(!(n||s===null)){if(e.size&&r+s.length>e.size){n=!0,u(new q(`content size at ${e.url} over limit: ${e.size}`,"max-size"));return}r+=s.length,a.push(s)}}),t.on("end",function(){if(!n){clearTimeout(i);try{o(Buffer.concat(a,r))}catch(s){u(new q(`Could not create Buffer from response body for ${e.url}: ${s.message}`,"system",s))}}})})}function rs(e,t){if(typeof or!="function")throw new Error("The package `encoding` must be installed to use the textConverted() function");let a=t.get("content-type"),r="utf-8",n,o;return a&&(n=/charset=([^;]*)/i.exec(a)),o=e.slice(0,1024).toString(),!n&&o&&(n=/<meta.+?charset=(['"])(.+?)\1/i.exec(o)),!n&&o&&(n=/<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(o),n||(n=/<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(o),n&&n.pop()),n&&(n=/charset=(.*)/i.exec(n.pop()))),!n&&o&&(n=/<\?xml.+?encoding=(['"])(.+?)\1/i.exec(o)),n&&(r=n.pop(),(r==="gb2312"||r==="gbk")&&(r="gb18030")),or(e,"UTF-8",r).toString()}function an(e){return typeof e!="object"||typeof e.append!="function"||typeof e.delete!="function"||typeof e.get!="function"||typeof e.getAll!="function"||typeof e.has!="function"||typeof e.set!="function"?!1:e.constructor.name==="URLSearchParams"||Object.prototype.toString.call(e)==="[object URLSearchParams]"||typeof e.sort=="function"}function wt(e){return typeof e=="object"&&typeof e.arrayBuffer=="function"&&typeof e.type=="string"&&typeof e.stream=="function"&&typeof e.constructor=="function"&&typeof e.constructor.name=="string"&&/^(Blob|File)$/.test(e.constructor.name)&&/^(Blob|File)$/.test(e[Symbol.toStringTag])}function rn(e){let t,a,r=e.body;if(e.bodyUsed)throw new Error("cannot clone body after it is used");return r instanceof le&&typeof r.getBoundary!="function"&&(t=new Jr,a=new Jr,r.pipe(t),r.pipe(a),e[he].body=t,r=a),r}function nn(e){return e===null?null:typeof e=="string"?"text/plain;charset=UTF-8":an(e)?"application/x-www-form-urlencoded;charset=UTF-8":wt(e)?e.type||null:Buffer.isBuffer(e)||Object.prototype.toString.call(e)==="[object ArrayBuffer]"||ArrayBuffer.isView(e)?null:typeof e.getBoundary=="function"?`multipart/form-data;boundary=${e.getBoundary()}`:e instanceof le?null:"text/plain;charset=UTF-8"}function on(e){let t=e.body;return t===null?0:wt(t)?t.size:Buffer.isBuffer(t)?t.length:t&&typeof t.getLengthSync=="function"&&(t._lengthRetrievers&&t._lengthRetrievers.length==0||t.hasKnownLength&&t.hasKnownLength())?t.getLengthSync():null}function ns(e,t){let a=t.body;a===null?e.end():wt(a)?a.stream().pipe(e):Buffer.isBuffer(a)?(e.write(a),e.end()):a.pipe(e)}O.Promise=global.Promise;var sn=/[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/,ir=/[^\t\x20-\x7e\x80-\xff]/;function Ut(e){if(e=`${e}`,sn.test(e)||e==="")throw new TypeError(`${e} is not a legal HTTP header name`)}function Zr(e){if(e=`${e}`,ir.test(e))throw new TypeError(`${e} is not a legal HTTP header value`)}function ut(e,t){t=t.toLowerCase();for(let a in e)if(a.toLowerCase()===t)return a}var U=Symbol("map"),ae=class e{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:void 0;if(this[U]=Object.create(null),t instanceof e){let a=t.raw(),r=Object.keys(a);for(let n of r)for(let o of a[n])this.append(n,o);return}if(t!=null)if(typeof t=="object"){let a=t[Symbol.iterator];if(a!=null){if(typeof a!="function")throw new TypeError("Header pairs must be iterable");let r=[];for(let n of t){if(typeof n!="object"||typeof n[Symbol.iterator]!="function")throw new TypeError("Each header pair must be iterable");r.push(Array.from(n))}for(let n of r){if(n.length!==2)throw new TypeError("Each header pair must be a name/value tuple");this.append(n[0],n[1])}}else for(let r of Object.keys(t)){let n=t[r];this.append(r,n)}}else throw new TypeError("Provided initializer must be an object")}get(t){t=`${t}`,Ut(t);let a=ut(this[U],t);return a===void 0?null:this[U][a].join(", ")}forEach(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:void 0,r=sr(this),n=0;for(;n<r.length;){var o=r[n];let u=o[0],i=o[1];t.call(a,i,u,this),r=sr(this),n++}}set(t,a){t=`${t}`,a=`${a}`,Ut(t),Zr(a);let r=ut(this[U],t);this[U][r!==void 0?r:t]=[a]}append(t,a){t=`${t}`,a=`${a}`,Ut(t),Zr(a);let r=ut(this[U],t);r!==void 0?this[U][r].push(a):this[U][t]=[a]}has(t){return t=`${t}`,Ut(t),ut(this[U],t)!==void 0}delete(t){t=`${t}`,Ut(t);let a=ut(this[U],t);a!==void 0&&delete this[U][a]}raw(){return this[U]}keys(){return ar(this,"key")}values(){return ar(this,"value")}[Symbol.iterator](){return ar(this,"key+value")}};ae.prototype.entries=ae.prototype[Symbol.iterator];Object.defineProperty(ae.prototype,Symbol.toStringTag,{value:"Headers",writable:!1,enumerable:!1,configurable:!0});Object.defineProperties(ae.prototype,{get:{enumerable:!0},forEach:{enumerable:!0},set:{enumerable:!0},append:{enumerable:!0},has:{enumerable:!0},delete:{enumerable:!0},keys:{enumerable:!0},values:{enumerable:!0},entries:{enumerable:!0}});function sr(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"key+value";return Object.keys(e[U]).sort().map(t==="key"?function(r){return r.toLowerCase()}:t==="value"?function(r){return e[U][r].join(", ")}:function(r){return[r.toLowerCase(),e[U][r].join(", ")]})}var ur=Symbol("internal");function ar(e,t){let a=Object.create(pr);return a[ur]={target:e,kind:t,index:0},a}var pr=Object.setPrototypeOf({next(){if(!this||Object.getPrototypeOf(this)!==pr)throw new TypeError("Value of `this` is not a HeadersIterator");var e=this[ur];let t=e.target,a=e.kind,r=e.index,n=sr(t,a),o=n.length;return r>=o?{value:void 0,done:!0}:(this[ur].index=r+1,{value:n[r],done:!1})}},Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));Object.defineProperty(pr,Symbol.toStringTag,{value:"HeadersIterator",writable:!1,enumerable:!1,configurable:!0});function os(e){let t=Object.assign({__proto__:null},e[U]),a=ut(e[U],"Host");return a!==void 0&&(t[a]=t[a][0]),t}function is(e){let t=new ae;for(let a of Object.keys(e))if(!sn.test(a))if(Array.isArray(e[a]))for(let r of e[a])ir.test(r)||(t[U][a]===void 0?t[U][a]=[r]:t[U][a].push(r));else ir.test(e[a])||(t[U][a]=[e[a]]);return t}var Be=Symbol("Response internals"),ss=en.STATUS_CODES,te=class e{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};O.call(this,t,a);let r=a.status||200,n=new ae(a.headers);if(t!=null&&!n.has("Content-Type")){let o=nn(t);o&&n.append("Content-Type",o)}this[Be]={url:a.url,status:r,statusText:a.statusText||ss[r],headers:n,counter:a.counter}}get url(){return this[Be].url||""}get status(){return this[Be].status}get ok(){return this[Be].status>=200&&this[Be].status<300}get redirected(){return this[Be].counter>0}get statusText(){return this[Be].statusText}get headers(){return this[Be].headers}clone(){return new e(rn(this),{url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected})}};O.mixIn(te.prototype);Object.defineProperties(te.prototype,{url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}});Object.defineProperty(te.prototype,Symbol.toStringTag,{value:"Response",writable:!1,enumerable:!1,configurable:!0});var Ce=Symbol("Request internals"),us=sa.URL||tn.URL,ps=sa.parse,ls=sa.format;function rr(e){return/^[a-zA-Z][a-zA-Z\d+\-.]*:/.exec(e)&&(e=new us(e).toString()),ps(e)}var cs="destroy"in le.Readable.prototype;function ia(e){return typeof e=="object"&&typeof e[Ce]=="object"}function ys(e){let t=e&&typeof e=="object"&&Object.getPrototypeOf(e);return!!(t&&t.constructor.name==="AbortSignal")}var qe=class e{constructor(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r;ia(t)?r=rr(t.url):(t&&t.href?r=rr(t.href):r=rr(`${t}`),t={});let n=a.method||t.method||"GET";if(n=n.toUpperCase(),(a.body!=null||ia(t)&&t.body!==null)&&(n==="GET"||n==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");let o=a.body!=null?a.body:ia(t)&&t.body!==null?rn(t):null;O.call(this,o,{timeout:a.timeout||t.timeout||0,size:a.size||t.size||0});let u=new ae(a.headers||t.headers||{});if(o!=null&&!u.has("Content-Type")){let s=nn(o);s&&u.append("Content-Type",s)}let i=ia(t)?t.signal:null;if("signal"in a&&(i=a.signal),i!=null&&!ys(i))throw new TypeError("Expected signal to be an instanceof AbortSignal");this[Ce]={method:n,redirect:a.redirect||t.redirect||"follow",headers:u,parsedURL:r,signal:i},this.follow=a.follow!==void 0?a.follow:t.follow!==void 0?t.follow:20,this.compress=a.compress!==void 0?a.compress:t.compress!==void 0?t.compress:!0,this.counter=a.counter||t.counter||0,this.agent=a.agent||t.agent}get method(){return this[Ce].method}get url(){return ls(this[Ce].parsedURL)}get headers(){return this[Ce].headers}get redirect(){return this[Ce].redirect}get signal(){return this[Ce].signal}clone(){return new e(this)}};O.mixIn(qe.prototype);Object.defineProperty(qe.prototype,Symbol.toStringTag,{value:"Request",writable:!1,enumerable:!1,configurable:!0});Object.defineProperties(qe.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0}});function ds(e){let t=e[Ce].parsedURL,a=new ae(e[Ce].headers);if(a.has("Accept")||a.set("Accept","*/*"),!t.protocol||!t.hostname)throw new TypeError("Only absolute URLs are supported");if(!/^https?:$/.test(t.protocol))throw new TypeError("Only HTTP(S) protocols are supported");if(e.signal&&e.body instanceof le.Readable&&!cs)throw new Error("Cancellation of streamed requests with AbortSignal is not supported in node < 8");let r=null;if(e.body==null&&/^(POST|PUT)$/i.test(e.method)&&(r="0"),e.body!=null){let o=on(e);typeof o=="number"&&(r=String(o))}r&&a.set("Content-Length",r),a.has("User-Agent")||a.set("User-Agent","node-fetch/1.0 (+https://github.com/bitinn/node-fetch)"),e.compress&&!a.has("Accept-Encoding")&&a.set("Accept-Encoding","gzip,deflate");let n=e.agent;return typeof n=="function"&&(n=n(t)),Object.assign({},t,{method:e.method,headers:os(a),agent:n})}function pt(e){Error.call(this,e),this.type="aborted",this.message=e,Error.captureStackTrace(this,this.constructor)}pt.prototype=Object.create(Error.prototype);pt.prototype.constructor=pt;pt.prototype.name="AbortError";var Tt=sa.URL||tn.URL,Xr=le.PassThrough,Ss=function(t,a){let r=new Tt(a).hostname,n=new Tt(t).hostname;return r===n||r[r.length-n.length-1]==="."&&r.endsWith(n)},bs=function(t,a){let r=new Tt(a).protocol,n=new Tt(t).protocol;return r===n};function Le(e,t){if(!Le.Promise)throw new Error("native promise missing, set fetch.Promise to your favorite alternative");return O.Promise=Le.Promise,new Le.Promise(function(a,r){let n=new qe(e,t),o=ds(n),u=(o.protocol==="https:"?ts:en).request,i=n.signal,s=null,p=function(){let b=new pt("The user aborted a request.");r(b),n.body&&n.body instanceof le.Readable&&nr(n.body,b),!(!s||!s.body)&&s.body.emit("error",b)};if(i&&i.aborted){p();return}let c=function(){p(),M()},d=u(o),y;i&&i.addEventListener("abort",c);function M(){d.abort(),i&&i.removeEventListener("abort",c),clearTimeout(y)}n.timeout&&d.once("socket",function(l){y=setTimeout(function(){r(new q(`network timeout at: ${n.url}`,"request-timeout")),M()},n.timeout)}),d.on("error",function(l){r(new q(`request to ${n.url} failed, reason: ${l.message}`,"system",l)),s&&s.body&&nr(s.body,l),M()}),Is(d,function(l){i&&i.aborted||s&&s.body&&nr(s.body,l)}),parseInt(process.version.substring(1))<14&&d.on("socket",function(l){l.addListener("close",function(b){let S=l.listenerCount("data")>0;if(s&&S&&!b&&!(i&&i.aborted)){let I=new Error("Premature close");I.code="ERR_STREAM_PREMATURE_CLOSE",s.body.emit("error",I)}})}),d.on("response",function(l){clearTimeout(y);let b=is(l.headers);if(Le.isRedirect(l.statusCode)){let m=b.get("Location"),E=null;try{E=m===null?null:new Tt(m,n.url).toString()}catch{if(n.redirect!=="manual"){r(new q(`uri requested responds with an invalid redirect URL: ${m}`,"invalid-redirect")),M();return}}switch(n.redirect){case"error":r(new q(`uri requested responds with a redirect, redirect mode is set to error: ${n.url}`,"no-redirect")),M();return;case"manual":if(E!==null)try{b.set("Location",E)}catch(_){r(_)}break;case"follow":if(E===null)break;if(n.counter>=n.follow){r(new q(`maximum redirect reached at: ${n.url}`,"max-redirect")),M();return}let f={headers:new ae(n.headers),follow:n.follow,counter:n.counter+1,agent:n.agent,compress:n.compress,method:n.method,body:n.body,signal:n.signal,timeout:n.timeout,size:n.size};if(!Ss(n.url,E)||!bs(n.url,E))for(let _ of["authorization","www-authenticate","cookie","cookie2"])f.headers.delete(_);if(l.statusCode!==303&&n.body&&on(n)===null){r(new q("Cannot follow redirect with body being a readable stream","unsupported-redirect")),M();return}(l.statusCode===303||(l.statusCode===301||l.statusCode===302)&&n.method==="POST")&&(f.method="GET",f.body=void 0,f.headers.delete("content-length")),a(Le(new qe(E,f))),M();return}}l.once("end",function(){i&&i.removeEventListener("abort",c)});let S=l.pipe(new Xr),I={url:n.url,status:l.statusCode,statusText:l.statusMessage,headers:b,size:n.size,timeout:n.timeout,counter:n.counter},R=b.get("Content-Encoding");if(!n.compress||n.method==="HEAD"||R===null||l.statusCode===204||l.statusCode===304){s=new te(S,I),a(s);return}let P={flush:Ge.Z_SYNC_FLUSH,finishFlush:Ge.Z_SYNC_FLUSH};if(R=="gzip"||R=="x-gzip"){S=S.pipe(Ge.createGunzip(P)),s=new te(S,I),a(s);return}if(R=="deflate"||R=="x-deflate"){let m=l.pipe(new Xr);m.once("data",function(E){(E[0]&15)===8?S=S.pipe(Ge.createInflate()):S=S.pipe(Ge.createInflateRaw()),s=new te(S,I),a(s)}),m.on("end",function(){s||(s=new te(S,I),a(s))});return}if(R=="br"&&typeof Ge.createBrotliDecompress=="function"){S=S.pipe(Ge.createBrotliDecompress()),s=new te(S,I),a(s);return}s=new te(S,I),a(s)}),ns(d,n)})}function Is(e,t){let a;e.on("socket",function(r){a=r}),e.on("response",function(r){let n=r.headers;n["transfer-encoding"]==="chunked"&&!n["content-length"]&&r.once("close",function(o){if(a&&a.listenerCount("data")>0&&!o){let i=new Error("Premature close");i.code="ERR_STREAM_PREMATURE_CLOSE",t(i)}})})}function nr(e,t){e.destroy?e.destroy(t):(e.emit("error",t),e.end())}Le.isRedirect=function(e){return e===301||e===302||e===303||e===307||e===308};Le.Promise=global.Promise;un.exports=ce=Le;Object.defineProperty(ce,"__esModule",{value:!0});ce.default=ce;ce.Headers=ae;ce.Request=qe;ce.Response=te;ce.FetchError=q;ce.AbortError=pt});var Bt=C(($e,ln)=>{var Ot=pn(),gs=Ot.default||Ot,ua=function(e,t){return/^\/\//.test(e)&&(e="https:"+e),gs.call(this,e,t)};ua.ponyfill=!0;ln.exports=$e=ua;$e.fetch=ua;$e.Headers=Ot.Headers;$e.Request=Ot.Request;$e.Response=Ot.Response;$e.default=ua});var lr=C(pa=>{"use strict";Object.defineProperty(pa,"__esModule",{value:!0});pa.isJSON=void 0;function Ms(e){if(e){let t=Rs(e);if(!t)return!1;if(t.subtype==="json"||t.suffix==="json"||t.suffix&&/\bjson\b/i.test(t.suffix)||t.subtype&&/\bjson\b/i.test(t.subtype))return!0}return!1}pa.isJSON=Ms;var ms=/^([A-Za-z0-9][A-Za-z0-9!#$&^_-]{0,126})\/([A-Za-z0-9][A-Za-z0-9!#$&^_.+-]{0,126});?$/;function Rs(e){let t=e.indexOf(";"),a=t!==-1?e.slice(0,t).trim():e.trim(),r=ms.exec(a.toLowerCase().toLowerCase());if(!r)return;let n=r[1],o=r[2],u,i=o.lastIndexOf("+");return i!==-1&&(u=o.substring(i+1),o=o.substring(0,i)),{type:n,subtype:o,suffix:u}}});var Sn=C(la=>{"use strict";Object.defineProperty(la,"__esModule",{value:!0});la.useFetch=void 0;var ct=require("react"),As=_t(),cn=Pe(),yn=Bt(),fs=lr(),dn=Oe();async function Ps(e){if(!e.ok)throw new Error(e.statusText);let t=e.headers.get("content-type");return t&&(0,fs.isJSON)(t)?await e.json():await e.text()}function Es(e){return{data:e,hasMore:!1}}function Cs(e,t){let{parseResponse:a,mapResult:r,initialData:n,execute:o,keepPreviousData:u,onError:i,onData:s,onWillExecute:p,failureToastOptions:c,...d}=t||{},y={initialData:n,execute:o,keepPreviousData:u,onError:i,onData:s,onWillExecute:p,failureToastOptions:c},M=(0,cn.useLatest)(a||Ps),l=(0,cn.useLatest)(r||Es),b=(0,ct.useRef)(),S=(0,ct.useRef)(),I=typeof e=="function"?e({page:0}):void 0;(!b.current||typeof S.current>"u"||S.current!==I)&&(b.current=e),S.current=I;let R=(0,ct.useRef)(),P=(0,ct.useCallback)((f,_)=>async N=>{let ue=await(0,yn.fetch)(f(N),{signal:R.current?.signal,..._}),F=await M.current(ue);return l.current?.(F)},[M,l]),m=(0,ct.useCallback)(async(f,_)=>{let N=await(0,yn.fetch)(f,{signal:R.current?.signal,..._}),ue=await M.current(N);return l.current(ue)?.data},[M,l]),E=(0,ct.useMemo)(()=>S.current?P:m,[S,m,P]);return(0,As.useCachedPromise)(E,[b.current,d],{...y,internal_cacheKeySuffix:S.current+(0,dn.hash)(l.current)+(0,dn.hash)(M.current),abortable:R})}la.useFetch=Cs});var ca=C(re=>{"use strict";var hs=re&&re.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(re,"__esModule",{value:!0});re.defaultParsing=re.handleOutput=re.getSpawnedResult=re.getSpawnedPromise=void 0;var Ds=require("node:buffer"),gn=hs(require("node:stream")),xs=require("node:util"),_s=require("signal-exit");function Us(e,{timeout:t}={}){let a=new Promise((i,s)=>{e.on("exit",(p,c)=>{i({exitCode:p,signal:c,timedOut:!1})}),e.on("error",p=>{s(p)}),e.stdin&&e.stdin.on("error",p=>{s(p)})});if(t===0||t===void 0)return a;let r,n=new Promise((i,s)=>{r=setTimeout(()=>{e.kill("SIGTERM"),s(Object.assign(new Error("Timed out"),{timedOut:!0,signal:"SIGTERM"}))},t)}),o=a.finally(()=>{clearTimeout(r)}),u=(0,_s.onExit)(()=>{e.kill()});return Promise.race([n,o]).finally(()=>u())}re.getSpawnedPromise=Us;var cr=class extends Error{constructor(){super("The output is too big"),this.name="MaxBufferError"}},vs=(0,xs.promisify)(gn.default.pipeline);function Ts(e){let{encoding:t}=e,a=t==="buffer",r=new gn.default.PassThrough({objectMode:!1});t&&t!=="buffer"&&r.setEncoding(t);let n=0,o=[];return r.on("data",u=>{o.push(u),n+=u.length}),r.getBufferedValue=()=>a?Buffer.concat(o,n):o.join(""),r.getBufferedLength=()=>n,r}async function bn(e,t){let a=Ts(t);return await new Promise((r,n)=>{let o=u=>{u&&a.getBufferedLength()<=Ds.constants.MAX_LENGTH&&(u.bufferedData=a.getBufferedValue()),n(u)};(async()=>{try{await vs(e,a),r()}catch(u){o(u)}})(),a.on("data",()=>{a.getBufferedLength()>1e3*1e3*80&&o(new cr)})}),a.getBufferedValue()}async function In(e,t){e.destroy();try{return await t}catch(a){return a.bufferedData}}async function ws({stdout:e,stderr:t},{encoding:a},r){let n=bn(e,{encoding:a}),o=bn(t,{encoding:a});try{return await Promise.all([r,n,o])}catch(u){return Promise.all([{error:u,exitCode:null,signal:u.signal,timedOut:u.timedOut||!1},In(e,n),In(t,o)])}}re.getSpawnedResult=ws;function Os(e){let t=typeof e=="string"?`
`:10,a=typeof e=="string"?"\r":13;return e[e.length-1]===t&&(e=e.slice(0,-1)),e[e.length-1]===a&&(e=e.slice(0,-1)),e}function Bs(e,t){return e.stripFinalNewline?Os(t):t}re.handleOutput=Bs;var Ls=({timedOut:e,timeout:t,signal:a,exitCode:r})=>e?`timed out after ${t} milliseconds`:a!=null?`was killed with ${a}`:r!=null?`failed with exit code ${r}`:"failed",qs=({stdout:e,stderr:t,error:a,signal:r,exitCode:n,command:o,timedOut:u,options:i,parentError:s})=>{let c=`Command ${Ls({timedOut:u,timeout:i?.timeout,signal:r,exitCode:n})}: ${o}`,d=a?`${c}
${a.message}`:c,y=[d,t,e].filter(Boolean).join(`
`);return a?a.originalMessage=a.message:a=s,a.message=y,a.shortMessage=d,a.command=o,a.exitCode=n,a.signal=r,a.stdout=e,a.stderr=t,"bufferedData"in a&&delete a.bufferedData,a};function Ns({stdout:e,stderr:t,error:a,exitCode:r,signal:n,timedOut:o,command:u,options:i,parentError:s}){if(a||r!==0||n!==null)throw qs({error:a,exitCode:r,signal:n,stdout:e,stderr:t,command:u,timedOut:o,options:i,parentError:s});return e}re.defaultParsing=Ns});var mn=C(yt=>{"use strict";var Vs=yt&&yt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(yt,"__esModule",{value:!0});yt.useExec=void 0;var ks=Vs(require("node:child_process")),Mn=require("react"),Fs=_t(),js=Pe(),Lt=ca(),zs=/ +/g;function Hs(e,t){if(t)return[e,...t];let a=[];for(let r of e.trim().split(zs)){let n=a[a.length-1];n&&n.endsWith("\\")?a[a.length-1]=`${n.slice(0,-1)} ${r}`:a.push(r)}return a}function Gs(e,t,a){let{parseOutput:r,input:n,onData:o,onWillExecute:u,initialData:i,execute:s,keepPreviousData:p,onError:c,failureToastOptions:d,...y}=Array.isArray(t)?a||{}:t||{},M={initialData:i,execute:s,keepPreviousData:p,onError:c,onData:o,onWillExecute:u,failureToastOptions:d},l=(0,Mn.useRef)(),b=(0,js.useLatest)(r||Lt.defaultParsing),S=(0,Mn.useCallback)(async(I,R,P,m)=>{let[E,...f]=Hs(I,R),_=[E,...f].join(" "),N={stripFinalNewline:!0,...P,timeout:P?.timeout||1e4,signal:l.current?.signal,encoding:P?.encoding===null?"buffer":P?.encoding||"utf8",env:{PATH:"/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin",...process.env,...P?.env}},ue=ks.default.spawn(E,f,N),F=(0,Lt.getSpawnedPromise)(ue,N);m&&ue.stdin.end(m);let[{error:w,exitCode:pe,signal:de,timedOut:h},K,Ct]=await(0,Lt.getSpawnedResult)(ue,N,F),Ya=(0,Lt.handleOutput)(N,K),Pi=(0,Lt.handleOutput)(N,Ct);return b.current({stdout:Ya,stderr:Pi,error:w,exitCode:pe,signal:de,timedOut:h,command:_,options:N,parentError:new Error})},[b]);return(0,Fs.useCachedPromise)(S,[e,Array.isArray(t)?t:[],y,n],{...M,abortable:l})}yt.useExec=Gs});var Pn=C(dt=>{"use strict";var da=dt&&dt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(dt,"__esModule",{value:!0});dt.useStreamJSON=void 0;var $s=require("@raycast/api"),Rn=da(Bt()),Vt=require("node:fs"),yr=require("node:fs/promises"),ya=require("node:path"),An=require("node:stream/promises"),qt=require("react"),Qs=da(require("stream-chain")),Ws=require("stream-json"),Ks=da(require("stream-json/filters/Pick")),Ys=da(require("stream-json/streamers/StreamArray")),fn=lr(),Js=_t(),Zs=Oe();async function Nt(e,t,a){if(typeof e=="object"||e.startsWith("http://")||e.startsWith("https://"))return await Xs(e,t,a);if(e.startsWith("file://"))return await eu((0,ya.normalize)(decodeURIComponent(new URL(e).pathname)),t,a?.signal?a.signal:void 0);throw new Error("Only HTTP(S) or file URLs are supported")}async function Xs(e,t,a){let r=await(0,Rn.default)(e,a);if(!r.ok)throw new Error("Failed to fetch URL");if(!(0,fn.isJSON)(r.headers.get("content-type")))throw new Error("URL does not return JSON");if(!r.body)throw new Error("Failed to retrieve expected JSON content: Response body is missing or inaccessible.");await(0,An.pipeline)(r.body,(0,Vt.createWriteStream)(t),a?.signal?{signal:a.signal}:void 0)}async function eu(e,t,a){await(0,An.pipeline)((0,Vt.createReadStream)(e),(0,Vt.createWriteStream)(t),a?{signal:a}:void 0)}async function tu(e,t,a,r,n){let o=(0,ya.join)(t,a);try{await(0,yr.stat)(t)}catch{(0,Vt.mkdirSync)(t,{recursive:!0}),await Nt(e,o,n);return}if(r){await Nt(e,o,n);return}let u;try{u=await(0,yr.stat)(o)}catch{await Nt(e,o,n);return}if(typeof e=="object"||e.startsWith("http://")||e.startsWith("https://")){let i=await(0,Rn.default)(e,{...n,method:"HEAD"});if(!i.ok)throw new Error("Could not fetch URL");if(!(0,fn.isJSON)(i.headers.get("content-type")))throw new Error("URL does not return JSON");let s=Date.parse(i.headers.get("last-modified")??"");if(u.size===0||Number.isNaN(s)||s>u.mtimeMs){await Nt(e,o,n);return}}else if(e.startsWith("file://"))try{(await(0,yr.stat)((0,ya.normalize)(decodeURIComponent(new URL(e).pathname)))).mtimeMs>u.mtimeMs&&await Nt(e,o,n)}catch{throw new Error("Source file could not be read")}else throw new Error("Only HTTP(S) or file URLs are supported")}async function*au(e,t,a,r,n,o){let u=[],i=new Qs.default([(0,Vt.createReadStream)(e),r?Ks.default.withParser({filter:r}):(0,Ws.parser)(),new Ys.default,s=>o?.(s.value)??s.value]);a?.addEventListener("abort",()=>{i.destroy()});try{for await(let s of i){if(a?.aborted)return[];(!n||n(s))&&u.push(s),u.length>=t&&(yield u,u=[])}}catch(s){throw i.destroy(),s}return u.length>0&&(yield u),[]}function ru(e,t){let{initialData:a,execute:r,keepPreviousData:n,onError:o,onData:u,onWillExecute:i,failureToastOptions:s,dataPath:p,filter:c,transform:d,pageSize:y=20,...M}=t??{},l=(0,qt.useRef)(),b=(0,qt.useRef)(),S={initialData:a,execute:r,keepPreviousData:n,onError:o,onData:u,onWillExecute:i,failureToastOptions:s},I=(0,qt.useRef)(null),R=(0,qt.useRef)(null),P=(0,qt.useRef)(!1);return(0,Js.useCachedPromise)((m,E,f,_,N,ue)=>async({page:F})=>{let w=(0,Zs.hash)(m)+".json",pe=$s.environment.supportPath;if(F===0){R.current?.abort(),R.current=new AbortController;let K=(0,ya.join)(pe,w),Ct=!!(l.current&&l.current!==m&&b.current&&b.current===K);l.current=m,b.current=K,await tu(m,pe,w,Ct,{...f,signal:R.current?.signal}),I.current=au(K,E,R.current?.signal,_,N,ue)}if(!I.current)return{hasMore:P.current,data:[]};let{value:de,done:h}=await I.current.next();return P.current=!h,{hasMore:P.current,data:de??[]}},[e,y,M,p,c,d],S)}dt.useStreamJSON=ru});var Sr=C(Ie=>{"use strict";var dr=Ie&&Ie.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Ie,"__esModule",{value:!0});Ie.baseExecuteSQL=Ie.isPermissionError=Ie.PermissionError=void 0;var nu=require("node:fs"),Sa=require("node:fs/promises"),ou=dr(require("node:os")),En=dr(require("node:child_process")),Cn=dr(require("node:path")),ba=ca(),iu=Oe(),ga=class extends Error{constructor(t){super(t),this.name="PermissionError"}};Ie.PermissionError=ga;function su(e){return e instanceof Error&&e.name==="PermissionError"}Ie.isPermissionError=su;async function uu(e,t,a){if(!(0,nu.existsSync)(e))throw new Error("The database does not exist");let r=a?.signal,n,o=En.default.spawn("sqlite3",["--json","--readonly",e,t],{signal:r}),u=(0,ba.getSpawnedPromise)(o),[{error:i,exitCode:s,signal:p},c,d]=await(0,ba.getSpawnedResult)(o,{encoding:"utf-8"},u);if(Ia(r),d.match("(5)")||d.match("(14)")){if(!n){let y=Cn.default.join(ou.default.tmpdir(),"useSQL",(0,iu.hash)(e));await(0,Sa.mkdir)(y,{recursive:!0}),Ia(r),n=Cn.default.join(y,"db.db"),await(0,Sa.copyFile)(e,n),await(0,Sa.writeFile)(n+"-shm",""),await(0,Sa.writeFile)(n+"-wal",""),Ia(r)}o=En.default.spawn("sqlite3",["--json","--readonly","--vfs","unix-none",n,t],{signal:r}),u=(0,ba.getSpawnedPromise)(o),[{error:i,exitCode:s,signal:p},c,d]=await(0,ba.getSpawnedResult)(o,{encoding:"utf-8"},u),Ia(r)}if(i||s!==0||p!==null)throw d.includes("authorization denied")?new ga("You do not have permission to access the database."):new Error(d||"Unknown error");return JSON.parse(c.trim()||"[]")}Ie.baseExecuteSQL=uu;function Ia(e){if(e?.aborted){let t=new Error("aborted");throw t.name="AbortError",t}}});var Dn=C(St=>{"use strict";var pu=St&&St.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(St,"__esModule",{value:!0});St.useSQL=void 0;var ge=require("react/jsx-runtime"),j=require("@raycast/api"),lu=require("node:fs"),cu=pu(require("node:os")),Ma=require("react"),yu=ot(),du=Pe(),Su=ht(),br=Sr();function bu(e,t,a){let{permissionPriming:r,...n}=a||{},[o,u]=(0,Ma.useState)(),i=(0,du.useLatest)(a||{}),s=(0,Ma.useRef)(),p=(0,Ma.useCallback)(d=>{console.error(d);let y=d instanceof Error&&d.message.includes("authorization denied")?new br.PermissionError("You do not have permission to access the database."):d;(0,br.isPermissionError)(y)?u((0,ge.jsx)(Iu,{priming:i.current.permissionPriming})):i.current.onError?i.current.onError(y):j.environment.launchType!==j.LaunchType.Background&&(0,Su.showFailureToast)(y,{title:"Cannot query the data"})},[i]),c=(0,Ma.useMemo)(()=>{if(!(0,lu.existsSync)(e))throw new Error("The database does not exist");return async(d,y)=>{let M=s.current?.signal;return(0,br.baseExecuteSQL)(d,y,{signal:M})}},[e]);return{...(0,yu.usePromise)(c,[e,t],{...n,onError:p}),permissionView:o}}St.useSQL=bu;var hn=parseInt(cu.default.release().split(".")[0])>=22,Ir=hn?"Settings":"Preferences";function Iu(e){let t=hn?{title:"Open System Settings -> Privacy",target:"x-apple.systempreferences:com.apple.preference.security?Privacy_AllFiles"}:{title:"Open System Preferences -> Security",target:"x-apple.systempreferences:com.apple.preference.security?Privacy_AllFiles"};return j.environment.commandMode==="menu-bar"?(0,ge.jsxs)(j.MenuBarExtra,{icon:j.Icon.Warning,title:j.environment.commandName,children:[(0,ge.jsx)(j.MenuBarExtra.Item,{title:"Raycast needs full disk access",tooltip:`You can revert this access in ${Ir} whenever you want`}),e.priming?(0,ge.jsx)(j.MenuBarExtra.Item,{title:e.priming,tooltip:`You can revert this access in ${Ir} whenever you want`}):null,(0,ge.jsx)(j.MenuBarExtra.Separator,{}),(0,ge.jsx)(j.MenuBarExtra.Item,{title:t.title,onAction:()=>(0,j.open)(t.target)})]}):(0,ge.jsx)(j.List,{children:(0,ge.jsx)(j.List.EmptyView,{icon:{source:{light:"https://raycast.com/uploads/extensions-utils-security-permissions-light.png",dark:"https://raycast.com/uploads/extensions-utils-security-permissions-dark.png"}},title:"Raycast needs full disk access.",description:`${e.priming?e.priming+`
`:""}You can revert this access in ${Ir} whenever you want.`,actions:(0,ge.jsx)(j.ActionPanel,{children:(0,ge.jsx)(j.Action.Open,{...t})})})})}});var _n=C(bt=>{"use strict";Object.defineProperty(bt,"__esModule",{value:!0});bt.useForm=bt.FormValidation=void 0;var De=require("react"),xn=Pe(),Mr;(function(e){e.Required="required"})(Mr||(bt.FormValidation=Mr={}));function gr(e,t){if(e){if(typeof e=="function")return e(t);if(e===Mr.Required){let a=typeof t<"u"&&t!==null;if(a)switch(typeof t){case"string":a=t.length>0;break;case"object":Array.isArray(t)?a=t.length>0:t instanceof Date&&(a=t.getTime()>0);break;default:break}if(!a)return"The item is required"}}}function gu(e){let{onSubmit:t,validation:a,initialValues:r={}}=e,[n,o]=(0,De.useState)(r),[u,i]=(0,De.useState)({}),s=(0,De.useRef)({}),p=(0,xn.useLatest)(a||{}),c=(0,xn.useLatest)(t),d=(0,De.useCallback)(I=>{s.current[I]?.focus()},[s]),y=(0,De.useCallback)(async I=>{let R=!1;for(let[m,E]of Object.entries(p.current)){let f=gr(E,I[m]);f&&(R||(R={},d(m)),R[m]=f)}if(R)return i(R),!1;let P=await c.current(I);return typeof P=="boolean"?P:!0},[p,c,d]),M=(0,De.useCallback)((I,R)=>{i(P=>({...P,[I]:R}))},[i]),l=(0,De.useCallback)(function(I,R){o(P=>({...P,[I]:typeof R=="function"?R(P[I]):R}))},[o]),b=(0,De.useMemo)(()=>new Proxy({},{get(I,R){let P=p.current[R],m=n[R];return{onChange(E){u[R]&&(gr(P,E)||M(R,void 0)),l(R,E)},onBlur(E){let f=gr(P,E.target.value);f&&M(R,f)},error:u[R],id:R,value:typeof m>"u"?null:m,ref:E=>{s.current[R]=E}}}}),[u,p,M,n,s,l]),S=(0,De.useCallback)(I=>{i({}),Object.entries(s.current).forEach(([R,P])=>{I?.[R]||P?.reset()}),I&&o(I)},[o,i,s]);return{handleSubmit:y,setValidationError:M,setValue:l,values:n,itemProps:b,focus:d,reset:S}}bt.useForm=gu});var vn=C(ma=>{"use strict";Object.defineProperty(ma,"__esModule",{value:!0});ma.useAI=void 0;var Un=require("react"),Mu=require("@raycast/api"),mu=ot();function Ru(e,t={}){let{creativity:a,stream:r,model:n,...o}=t,[u,i]=(0,Un.useState)(""),s=(0,Un.useRef)(),{isLoading:p,error:c,revalidate:d}=(0,mu.usePromise)(async(y,M,l)=>{i("");let b=Mu.AI.ask(y,{creativity:M,model:n,signal:s.current?.signal});l===!1?i(await b):(b.on("data",S=>{i(I=>I+S)}),await b)},[e,a,r],{...o,abortable:s});return{isLoading:p,data:u,error:c,revalidate:d}}ma.useAI=Ru});var On=C(Ra=>{"use strict";Object.defineProperty(Ra,"__esModule",{value:!0});Ra.useFrecencySorting=void 0;var mr=require("react"),Tn=Pe(),Au=na(),fu=10,wn=1440*60*1e3,Pu=Math.log(2)/(fu*wn),Eu={Default:100,Embed:0,Bookmark:140};function Cu(e){let t=Date.now(),a=e?e.lastVisited:0,r=e?e.frecency:0,n=(t-a)/wn,o=Eu.Default*Math.exp(-Pu*n),u=r+o;return{lastVisited:t,frecency:u}}var hu=e=>{if(process.env.NODE_ENV!=="production"&&(typeof e!="object"||!e||!("id"in e)||typeof e.id!="string"))throw new Error("Specify a key function or make sure your items have an 'id' property");return e.id};function Du(e,t){let a=(0,Tn.useLatest)(t?.key||hu),r=(0,Tn.useLatest)(t?.sortUnvisited),[n,o]=(0,Au.useCachedState)(`raycast_frecency_${t?.namespace}`,{}),u=(0,mr.useCallback)(async function(c){let d=a.current(c);o(y=>{let M=y[d],l=Cu(M);return{...y,[d]:l}})},[a,o]),i=(0,mr.useCallback)(async function(c){let d=a.current(c);o(y=>{let M={...y};return delete M[d],M})},[a,o]);return{data:(0,mr.useMemo)(()=>e?e.sort((p,c)=>{let d=n[a.current(p)],y=n[a.current(c)];return d&&!y?-1:!d&&y?1:d&&y?y.frecency-d.frecency:r.current?r.current(p,c):0}):[],[n,e,a,r]),visitItem:u,resetRanking:i}}Ra.useFrecencySorting=Du});var qn=C(Aa=>{"use strict";Object.defineProperty(Aa,"__esModule",{value:!0});Aa.useLocalStorage=void 0;var Rr=require("@raycast/api"),Bn=ht(),Ln=Oe(),xu=ot();function _u(e,t){let{data:a,isLoading:r,mutate:n}=(0,xu.usePromise)(async i=>{let s=await Rr.LocalStorage.getItem(i);return typeof s<"u"?JSON.parse(s,Ln.reviver):t},[e]);async function o(i){try{await n(Rr.LocalStorage.setItem(e,JSON.stringify(i,Ln.replacer)),{optimisticUpdate(s){return s}})}catch(s){await(0,Bn.showFailureToast)(s,{title:"Failed to set value in local storage"})}}async function u(){try{await n(Rr.LocalStorage.removeItem(e),{optimisticUpdate(){}})}catch(i){await(0,Bn.showFailureToast)(i,{title:"Failed to remove value from local storage"})}}return{value:a,setValue:o,removeValue:u,isLoading:r}}Aa.useLocalStorage=_u});var jn=C(It=>{"use strict";Object.defineProperty(It,"__esModule",{value:!0});It.slightlyLighterColor=It.slightlyDarkerColor=void 0;function Uu(e){let t=0,a=0,r=0;if(e.length===4)t=parseInt(`${e[1]}${e[1]}`,16),a=parseInt(`${e[2]}${e[2]}`,16),r=parseInt(`${e[3]}${e[3]}`,16);else if(e.length===7)t=parseInt(`${e[1]}${e[2]}`,16),a=parseInt(`${e[3]}${e[4]}`,16),r=parseInt(`${e[5]}${e[6]}`,16);else throw new Error(`Malformed hex color: ${e}`);return{r:t,g:a,b:r}}function vu({r:e,g:t,b:a}){let r=e.toString(16),n=t.toString(16),o=a.toString(16);return r.length===1&&(r=`0${r}`),n.length===1&&(n=`0${n}`),o.length===1&&(o=`0${o}`),`#${r}${n}${o}`}function Tu({r:e,g:t,b:a}){e/=255,t/=255,a/=255;let r=Math.min(e,t,a),n=Math.max(e,t,a),o=n-r,u=0,i=0,s=0;return o===0?u=0:n===e?u=(t-a)/o%6:n===t?u=(a-e)/o+2:u=(e-t)/o+4,u=Math.round(u*60),u<0&&(u+=360),s=(n+r)/2,i=o===0?0:o/(1-Math.abs(2*s-1)),i=+(i*100).toFixed(1),s=+(s*100).toFixed(1),{h:u,s:i,l:s}}function wu({h:e,s:t,l:a}){t/=100,a/=100;let r=(1-Math.abs(2*a-1))*t,n=r*(1-Math.abs(e/60%2-1)),o=a-r/2,u=0,i=0,s=0;return e>=0&&e<60?(u=r,i=n,s=0):e>=60&&e<120?(u=n,i=r,s=0):e>=120&&e<180?(u=0,i=r,s=n):e>=180&&e<240?(u=0,i=n,s=r):e>=240&&e<300?(u=n,i=0,s=r):e>=300&&e<360&&(u=r,i=0,s=n),u=Math.round((u+o)*255),i=Math.round((i+o)*255),s=Math.round((s+o)*255),{r:u,g:i,b:s}}function Nn(e){return Tu(Uu(e))}function Vn(e){return vu(wu(e))}function kn(e,t,a){return t<a?e<t?t:e>a?a:e:e<a?a:e>t?t:e}var Fn=12;function Ou(e){let t=Nn(e);return Vn({h:t.h,s:t.s,l:kn(t.l-Fn,0,100)})}It.slightlyDarkerColor=Ou;function Bu(e){let t=Nn(e);return Vn({h:t.h,s:t.s,l:kn(t.l+Fn,0,100)})}It.slightlyLighterColor=Bu});var Gn=C(fa=>{"use strict";Object.defineProperty(fa,"__esModule",{value:!0});fa.getAvatarIcon=void 0;var zn=jn();function gt(e,t){let a=e.charCodeAt(t);if(Number.isNaN(a))return["",t];if(a<55296||a>57343)return[e.charAt(t),t];if(55296<=a&&a<=56319){if(e.length<=t+1)throw new Error("High surrogate without following low surrogate");let n=e.charCodeAt(t+1);if(56320>n||n>57343)throw new Error("High surrogate without following low surrogate");return[e.charAt(t)+e.charAt(t+1),t+1]}if(t===0)throw new Error("Low surrogate without preceding high surrogate");let r=e.charCodeAt(t-1);if(55296>r||r>56319)throw new Error("Low surrogate without preceding high surrogate");return[e.charAt(t+1),t+1]}var Hn=["#DC829A","#D64854","#D47600","#D36CDD","#52A9E4","#7871E8","#70920F","#43B93A","#EB6B3E","#26B795","#D85A9B","#A067DC","#BD9500","#5385D9"];function Lu(e,t){let a=e.trim().split(" "),r;if(a.length==1&&gt(a[0],0)[0])r=gt(a[0],0)[0];else if(a.length>1){let s=gt(a[0],0)[0]||"",p=gt(a[a.length-1],0)[0]??"";r=s+p}else r="";let n;if(t?.background)n=t?.background;else{let s=0,[p,c]=gt(r,0);for(;p;)s+=p.charCodeAt(0),[p,c]=gt(r,c+1);let d=s%Hn.length;n=Hn[d]}let u=50-0;return`data:image/svg+xml,${`<svg width="100px" height="100px">
  ${t?.gradient!==!1?`<defs>
      <linearGradient id="Gradient" x1="0.25" x2="0.75" y1="0" y2="1">
        <stop offset="0%" stop-color="${(0,zn.slightlyLighterColor)(n)}"/>
        <stop offset="50%" stop-color="${n}"/>
        <stop offset="100%" stop-color="${(0,zn.slightlyDarkerColor)(n)}"/>
      </linearGradient>
  </defs>`:""}
      <circle cx="50" cy="50" r="${u}" fill="${t?.gradient!==!1?"url(#Gradient)":n}" />
      ${r?`<text x="50" y="80" font-size="${u-1}" font-family="Inter, sans-serif" text-anchor="middle" fill="white">${r.toUpperCase()}</text>`:""}
    </svg>
  `.replaceAll(`
`,"")}`}fa.getAvatarIcon=Lu});var Qn=C(Pa=>{"use strict";Object.defineProperty(Pa,"__esModule",{value:!0});Pa.getFavicon=void 0;var $n=require("@raycast/api"),qu=require("url");function Nu(e,t){try{let r=(typeof e=="string"?new qu.URL(e):e).hostname;return{source:`https://www.google.com/s2/favicons?sz=${t?.size??64}&domain=${r}`,fallback:t?.fallback??$n.Icon.Link,mask:t?.mask}}catch(a){return console.error(a),$n.Icon.Link}}Pa.getFavicon=Nu});var Yn=C(Ea=>{"use strict";Object.defineProperty(Ea,"__esModule",{value:!0});Ea.getProgressIcon=void 0;var Wn=require("@raycast/api");function Kn(e,t,a,r){let n=(r-90)*Math.PI/180;return{x:e+a*Math.cos(n),y:t+a*Math.sin(n)}}function Vu(e,t,a,r,n){let o=Kn(e,t,a,n),u=Kn(e,t,a,r),i=n-r<=180?"0":"1";return["M",o.x,o.y,"A",a,a,0,i,0,u.x,u.y].join(" ")}function ku(e,t=Wn.Color.Red,a){let r=a?.background||(Wn.environment.appearance==="light"?"black":"white"),n=a?.backgroundOpacity||.1,o=10,i=50-5-o/2;return`data:image/svg+xml,${`<svg width="100px" height="100px">
      <circle cx="50" cy="50" r="${i}" stroke-width="${o}" stroke="${e<1?r:t}" opacity="${e<1?n:"1"}" fill="none" />
      ${e>0&&e<1?`<path d="${Vu(50,50,i,0,e*360)}" stroke="${t}" stroke-width="${o}" fill="none" />`:""}
    </svg>
  `.replaceAll(`
`,"")}`}Ea.getProgressIcon=ku});var Jn=C(xe=>{"use strict";var Fu=xe&&xe.__createBinding||(Object.create?(function(e,t,a,r){r===void 0&&(r=a);var n=Object.getOwnPropertyDescriptor(t,a);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,n)}):(function(e,t,a,r){r===void 0&&(r=a),e[r]=t[a]})),Ar=xe&&xe.__exportStar||function(e,t){for(var a in e)a!=="default"&&!Object.prototype.hasOwnProperty.call(t,a)&&Fu(t,e,a)};Object.defineProperty(xe,"__esModule",{value:!0});Ar(Gn(),xe);Ar(Qn(),xe);Ar(Yn(),xe)});var Zn=C(V=>{"use strict";Object.defineProperty(V,"__esModule",{value:!0});V.zoomService=V.slackService=V.linearService=V.jiraService=V.googleService=V.githubService=V.asanaService=void 0;var z=require("@raycast/api"),Qe=fr(),Ca={asana:"1191201745684312",github:"7235fe8d42157f1f38c0",linear:"c8ff37b9225c3c9aefd7d66ea0e5b6f1",slack:"851756884692.5546927290212"},Ne=e=>`data:image/svg+xml,${e}`,We={asana:Ne('<svg xmlns="http://www.w3.org/2000/svg" width="251" height="232" fill="none"><path fill="#F06A6A" d="M179.383 54.373c0 30.017-24.337 54.374-54.354 54.374-30.035 0-54.373-24.338-54.373-54.374C70.656 24.338 94.993 0 125.029 0c30.017 0 54.354 24.338 54.354 54.373ZM54.393 122.33C24.376 122.33.02 146.668.02 176.685c0 30.017 24.337 54.373 54.373 54.373 30.035 0 54.373-24.338 54.373-54.373 0-30.017-24.338-54.355-54.373-54.355Zm141.253 0c-30.035 0-54.373 24.338-54.373 54.374 0 30.035 24.338 54.373 54.373 54.373 30.017 0 54.374-24.338 54.374-54.373 0-30.036-24.338-54.374-54.374-54.374Z"/></svg>'),github:{source:Ne('<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>'),tintColor:z.Color.PrimaryText},google:Ne('<svg xmlns="http://www.w3.org/2000/svg" style="display:block" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/><path fill="none" d="M0 0h48v48H0z"/></svg>'),jira:Ne('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="2361" height="2500" viewBox="2.59 0 214.091 224"><linearGradient id="a" x1="102.4" x2="56.15" y1="218.63" y2="172.39" gradientTransform="matrix(1 0 0 -1 0 264)" gradientUnits="userSpaceOnUse"><stop offset=".18" stop-color="#0052cc"/><stop offset="1" stop-color="#2684ff"/></linearGradient><linearGradient xlink:href="#a" id="b" x1="114.65" x2="160.81" y1="85.77" y2="131.92"/><path fill="#2684ff" d="M214.06 105.73 117.67 9.34 108.33 0 35.77 72.56 2.59 105.73a8.89 8.89 0 0 0 0 12.54l66.29 66.29L108.33 224l72.55-72.56 1.13-1.12 32.05-32a8.87 8.87 0 0 0 0-12.59zm-105.73 39.39L75.21 112l33.12-33.12L141.44 112z"/><path fill="url(#a)" d="M108.33 78.88a55.75 55.75 0 0 1-.24-78.61L35.62 72.71l39.44 39.44z"/><path fill="url(#b)" d="m141.53 111.91-33.2 33.21a55.77 55.77 0 0 1 0 78.86L181 151.35z"/></svg>'),linear:{source:{light:Ne('<svg xmlns="http://www.w3.org/2000/svg" fill="#222326" width="200" height="200" viewBox="0 0 100 100"><path d="M1.22541 61.5228c-.2225-.9485.90748-1.5459 1.59638-.857L39.3342 97.1782c.6889.6889.0915 1.8189-.857 1.5964C20.0515 94.4522 5.54779 79.9485 1.22541 61.5228ZM.00189135 46.8891c-.01764375.2833.08887215.5599.28957165.7606L52.3503 99.7085c.2007.2007.4773.3075.7606.2896 2.3692-.1476 4.6938-.46 6.9624-.9259.7645-.157 1.0301-1.0963.4782-1.6481L2.57595 39.4485c-.55186-.5519-1.49117-.2863-1.648174.4782-.465915 2.2686-.77832 4.5932-.92588465 6.9624ZM4.21093 29.7054c-.16649.3738-.08169.8106.20765 1.1l64.77602 64.776c.2894.2894.7262.3742 1.1.2077 1.7861-.7956 3.5171-1.6927 5.1855-2.684.5521-.328.6373-1.0867.1832-1.5407L8.43566 24.3367c-.45409-.4541-1.21271-.3689-1.54074.1832-.99132 1.6684-1.88843 3.3994-2.68399 5.1855ZM12.6587 18.074c-.3701-.3701-.393-.9637-.0443-1.3541C21.7795 6.45931 35.1114 0 49.9519 0 77.5927 0 100 22.4073 100 50.0481c0 14.8405-6.4593 28.1724-16.7199 37.3375-.3903.3487-.984.3258-1.3542-.0443L12.6587 18.074Z"/></svg>'),dark:Ne('<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="200" height="200" viewBox="0 0 100 100"><path d="M1.22541 61.5228c-.2225-.9485.90748-1.5459 1.59638-.857L39.3342 97.1782c.6889.6889.0915 1.8189-.857 1.5964C20.0515 94.4522 5.54779 79.9485 1.22541 61.5228ZM.00189135 46.8891c-.01764375.2833.08887215.5599.28957165.7606L52.3503 99.7085c.2007.2007.4773.3075.7606.2896 2.3692-.1476 4.6938-.46 6.9624-.9259.7645-.157 1.0301-1.0963.4782-1.6481L2.57595 39.4485c-.55186-.5519-1.49117-.2863-1.648174.4782-.465915 2.2686-.77832 4.5932-.92588465 6.9624ZM4.21093 29.7054c-.16649.3738-.08169.8106.20765 1.1l64.77602 64.776c.2894.2894.7262.3742 1.1.2077 1.7861-.7956 3.5171-1.6927 5.1855-2.684.5521-.328.6373-1.0867.1832-1.5407L8.43566 24.3367c-.45409-.4541-1.21271-.3689-1.54074.1832-.99132 1.6684-1.88843 3.3994-2.68399 5.1855ZM12.6587 18.074c-.3701-.3701-.393-.9637-.0443-1.3541C21.7795 6.45931 35.1114 0 49.9519 0 77.5927 0 100 22.4073 100 50.0481c0 14.8405-6.4593 28.1724-16.7199 37.3375-.3903.3487-.984.3258-1.3542-.0443L12.6587 18.074Z" /></svg>')}},slack:Ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="73 73 124 124"><style>.st0{fill:#e01e5a}.st1{fill:#36c5f0}.st2{fill:#2eb67d}.st3{fill:#ecb22e}</style><path d="M99.4 151.2c0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9h12.9v12.9zM105.9 151.2c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v32.3c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9v-32.3z" class="st0"/><path d="M118.8 99.4c-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v12.9h-12.9zM118.8 105.9c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H86.5c-7.1 0-12.9-5.8-12.9-12.9s5.8-12.9 12.9-12.9h32.3z" class="st1"/><path d="M170.6 118.8c0-7.1 5.8-12.9 12.9-12.9 7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9h-12.9v-12.9zM164.1 118.8c0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9V86.5c0-7.1 5.8-12.9 12.9-12.9 7.1 0 12.9 5.8 12.9 12.9v32.3z" class="st2"/><path d="M151.2 170.6c7.1 0 12.9 5.8 12.9 12.9 0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9v-12.9h12.9zM151.2 164.1c-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9h32.3c7.1 0 12.9 5.8 12.9 12.9 0 7.1-5.8 12.9-12.9 12.9h-32.3z" class="st3"/></svg>'),zoom:Ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 351.845 80"><path d="M73.786 78.835H10.88A10.842 10.842 0 0 1 .833 72.122a10.841 10.841 0 0 1 2.357-11.85L46.764 16.7h-31.23C6.954 16.699 0 9.744 0 1.165h58.014c4.414 0 8.357 2.634 10.046 6.712a10.843 10.843 0 0 1-2.356 11.85L22.13 63.302h36.122c8.58 0 15.534 6.955 15.534 15.534Zm278.059-48.544C351.845 13.588 338.256 0 321.553 0c-8.934 0-16.975 3.89-22.524 10.063C293.48 3.89 285.44 0 276.505 0c-16.703 0-30.291 13.588-30.291 30.291v48.544c8.579 0 15.534-6.955 15.534-15.534v-33.01c0-8.137 6.62-14.757 14.757-14.757s14.757 6.62 14.757 14.757v33.01c0 8.58 6.955 15.534 15.534 15.534V30.291c0-8.137 6.62-14.757 14.757-14.757s14.758 6.62 14.758 14.757v33.01c0 8.58 6.954 15.534 15.534 15.534V30.291ZM238.447 40c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.908-40 40-40 40 17.909 40 40Zm-15.534 0c0-13.512-10.954-24.466-24.466-24.466S173.98 26.488 173.98 40s10.953 24.466 24.466 24.466S222.913 53.512 222.913 40Zm-70.68 0c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.909-40 40-40 40 17.909 40 40Zm-15.534 0c0-13.512-10.954-24.466-24.466-24.466S87.767 26.488 87.767 40s10.954 24.466 24.466 24.466S136.699 53.512 136.699 40Z" style="fill:#0b5cff"/></svg>')},ju=e=>new Qe.OAuthService({client:new z.OAuth.PKCEClient({redirectMethod:z.OAuth.RedirectMethod.Web,providerName:"Asana",providerIcon:We.asana,providerId:"asana",description:"Connect your Asana account"}),clientId:e.clientId??Ca.asana,authorizeUrl:e.authorizeUrl??"https://asana.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://asana.oauth.raycast.com/token",refreshTokenUrl:e.refreshTokenUrl??"https://asana.oauth.raycast.com/refresh-token",scope:e.scope,personalAccessToken:e.personalAccessToken,onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});V.asanaService=ju;var zu=e=>new Qe.OAuthService({client:new z.OAuth.PKCEClient({redirectMethod:z.OAuth.RedirectMethod.Web,providerName:"GitHub",providerIcon:We.github,providerId:"github",description:"Connect your GitHub account"}),clientId:e.clientId??Ca.github,authorizeUrl:e.authorizeUrl??"https://github.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://github.oauth.raycast.com/token",refreshTokenUrl:e.refreshTokenUrl??"https://github.oauth.raycast.com/refresh-token",scope:e.scope,personalAccessToken:e.personalAccessToken,onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});V.githubService=zu;var Hu=e=>new Qe.OAuthService({client:new z.OAuth.PKCEClient({redirectMethod:z.OAuth.RedirectMethod.AppURI,providerName:"Google",providerIcon:We.google,providerId:"google",description:"Connect your Google account"}),clientId:e.clientId,authorizeUrl:e.authorizeUrl??"https://accounts.google.com/o/oauth2/v2/auth",tokenUrl:e.tokenUrl??"https://oauth2.googleapis.com/token",refreshTokenUrl:e.tokenUrl,scope:e.scope,personalAccessToken:e.personalAccessToken,bodyEncoding:e.bodyEncoding??"url-encoded",onAuthorize:e.onAuthorize,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});V.googleService=Hu;var Gu=e=>new Qe.OAuthService({client:new z.OAuth.PKCEClient({redirectMethod:z.OAuth.RedirectMethod.Web,providerName:"Jira",providerIcon:We.jira,providerId:"jira",description:"Connect your Jira account"}),clientId:e.clientId,authorizeUrl:e.authorizeUrl??"https://auth.atlassian.com/authorize",tokenUrl:e.tokenUrl??"https://auth.atlassian.com/oauth/token",refreshTokenUrl:e.refreshTokenUrl,scope:e.scope,personalAccessToken:e.personalAccessToken,onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});V.jiraService=Gu;var $u=e=>new Qe.OAuthService({client:new z.OAuth.PKCEClient({redirectMethod:z.OAuth.RedirectMethod.Web,providerName:"Linear",providerIcon:We.linear,providerId:"linear",description:"Connect your Linear account"}),clientId:e.clientId??Ca.linear,authorizeUrl:e.authorizeUrl??"https://linear.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://linear.oauth.raycast.com/token",refreshTokenUrl:e.refreshTokenUrl??"https://linear.oauth.raycast.com/refresh-token",scope:e.scope,extraParameters:{actor:"user"},onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});V.linearService=$u;var Qu=e=>new Qe.OAuthService({client:new z.OAuth.PKCEClient({redirectMethod:z.OAuth.RedirectMethod.Web,providerName:"Slack",providerIcon:We.slack,providerId:"slack",description:"Connect your Slack account"}),clientId:e.clientId??Ca.slack,authorizeUrl:e.authorizeUrl??"https://slack.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://slack.oauth.raycast.com/token",refreshTokenUrl:e.tokenUrl??"https://slack.oauth.raycast.com/refresh-token",scope:"",extraParameters:{user_scope:e.scope},personalAccessToken:e.personalAccessToken,bodyEncoding:e.tokenUrl?e.bodyEncoding??"url-encoded":"json",onAuthorize:e.onAuthorize,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser??(t=>({access_token:t.authed_user.access_token,scope:t.authed_user.scope}))});V.slackService=Qu;var Wu=e=>new Qe.OAuthService({client:new z.OAuth.PKCEClient({redirectMethod:z.OAuth.RedirectMethod.Web,providerName:"Zoom",providerIcon:We.zoom,providerId:"zoom",description:"Connect your Zoom account"}),clientId:e.clientId,authorizeUrl:e.authorizeUrl??"https://zoom.us/oauth/authorize",tokenUrl:e.tokenUrl??"https://zoom.us/oauth/token",refreshTokenUrl:e.refreshTokenUrl,scope:e.scope,personalAccessToken:e.personalAccessToken,bodyEncoding:e.bodyEncoding??"url-encoded",onAuthorize:e.onAuthorize,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});V.zoomService=Wu});var fr=C(Mt=>{"use strict";var Ku=Mt&&Mt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Mt,"__esModule",{value:!0});Mt.OAuthService=void 0;var Xn=Ku(Bt()),Ke=Zn(),Me=class{constructor(t){this.clientId=t.clientId,this.scope=Array.isArray(t.scope)?t.scope.join(" "):t.scope,this.personalAccessToken=t.personalAccessToken,this.bodyEncoding=t.bodyEncoding,this.client=t.client,this.extraParameters=t.extraParameters,this.authorizeUrl=t.authorizeUrl,this.tokenUrl=t.tokenUrl,this.refreshTokenUrl=t.refreshTokenUrl,this.onAuthorize=t.onAuthorize,this.tokenResponseParser=t.tokenResponseParser??(a=>a),this.tokenRefreshResponseParser=t.tokenRefreshResponseParser??(a=>a),this.authorize=this.authorize.bind(this)}async authorize(){let t=await this.client.getTokens();if(t?.accessToken){if(t.refreshToken&&t.isExpired()){let o=await this.refreshTokens({token:t.refreshToken});if(o)return await this.client.setTokens(o),o.access_token}return t.accessToken}let a=await this.client.authorizationRequest({endpoint:this.authorizeUrl,clientId:this.clientId,scope:this.scope,extraParameters:this.extraParameters}),{authorizationCode:r}=await this.client.authorize(a),n=await this.fetchTokens({authRequest:a,authorizationCode:r});return await this.client.setTokens(n),n.access_token}async fetchTokens({authRequest:t,authorizationCode:a}){let r;if(this.bodyEncoding==="url-encoded"){let u=new URLSearchParams;u.append("client_id",this.clientId),u.append("code",a),u.append("code_verifier",t.codeVerifier),u.append("grant_type","authorization_code"),u.append("redirect_uri",t.redirectURI),r={body:u}}else r={body:JSON.stringify({client_id:this.clientId,code:a,code_verifier:t.codeVerifier,grant_type:"authorization_code",redirect_uri:t.redirectURI}),headers:{"Content-Type":"application/json"}};let n=await(0,Xn.default)(this.tokenUrl,{method:"POST",...r});if(!n.ok){let u=await n.text();throw console.error("fetch tokens error:",u),new Error(`Error while fetching tokens: ${n.status} (${n.statusText})
${u}`)}let o=this.tokenResponseParser(await n.json());return Array.isArray(o.scope)?{...o,scope:o.scope.join(" ")}:o}async refreshTokens({token:t}){let a;if(this.bodyEncoding==="url-encoded"){let n=new URLSearchParams;n.append("client_id",this.clientId),n.append("refresh_token",t),n.append("grant_type","refresh_token"),a={body:n}}else a={body:JSON.stringify({client_id:this.clientId,refresh_token:t,grant_type:"refresh_token"}),headers:{"Content-Type":"application/json"}};let r=await(0,Xn.default)(this.refreshTokenUrl??this.tokenUrl,{method:"POST",...a});if(r.ok){let n=this.tokenRefreshResponseParser(await r.json());return n.refresh_token=n.refresh_token??t,n}else{let n=await r.text();console.error("refresh tokens error:",n),this.client.description=`${this.client.providerName} needs you to sign-in again. Press \u23CE or click the button below to continue.`,await this.client.removeTokens(),await this.authorize()}}};Mt.OAuthService=Me;Me.asana=Ke.asanaService;Me.github=Ke.githubService;Me.google=Ke.googleService;Me.jira=Ke.jiraService;Me.linear=Ke.linearService;Me.slack=Ke.slackService;Me.zoom=Ke.zoomService});var eo=C(mt=>{"use strict";Object.defineProperty(mt,"__esModule",{value:!0});mt.getAccessToken=mt.withAccessToken=void 0;var Yu=require("react/jsx-runtime"),Ju=require("@raycast/api"),Ve=null,Ye=null,Pr=null,Er=null,Cr=null;function Zu(e){return Ju.environment.commandMode==="no-view"?t=>async r=>{if(!Ve){Ve=e.personalAccessToken??await e.authorize(),Ye=e.personalAccessToken?"personal":"oauth";let n=(await e.client?.getTokens())?.idToken;e.onAuthorize&&await Promise.resolve(e.onAuthorize({token:Ve,type:Ye,idToken:n}))}return t(r)}:t=>{let a=r=>{e.personalAccessToken?(Ve=e.personalAccessToken,Ye="personal"):(Pr||(Pr=hr(e.authorize())),Ve=Pr.read(),Ye="oauth");let n;return e.client&&(Er||(Er=hr(e.client.getTokens())),n=Er.read()?.idToken),!Cr&&e.onAuthorize&&(Cr=hr(Promise.resolve(e.onAuthorize({token:Ve,type:Ye,idToken:n})))),Cr?.read(),(0,Yu.jsx)(t,{...r})};return a.displayName=`withAccessToken(${t.displayName||t.name})`,a}}mt.withAccessToken=Zu;function Xu(){if(!Ve||!Ye)throw new Error("getAccessToken must be used when authenticated (eg. used inside `withAccessToken`)");return{token:Ve,type:Ye}}mt.getAccessToken=Xu;function hr(e){let t="pending",a,r=e.then(o=>{t="success",a=o},o=>{t="error",a=o});return{read:()=>{switch(t){case"pending":throw r;case"error":throw a;default:return a}}}}});var ao=C(ke=>{"use strict";var ep=ke&&ke.__createBinding||(Object.create?(function(e,t,a,r){r===void 0&&(r=a);var n=Object.getOwnPropertyDescriptor(t,a);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,n)}):(function(e,t,a,r){r===void 0&&(r=a),e[r]=t[a]})),to=ke&&ke.__exportStar||function(e,t){for(var a in e)a!=="default"&&!Object.prototype.hasOwnProperty.call(t,a)&&ep(t,e,a)};Object.defineProperty(ke,"__esModule",{value:!0});to(fr(),ke);to(eo(),ke)});var so=C(ne=>{"use strict";var ro=ne&&ne.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ne,"__esModule",{value:!0});ne.createDeeplink=ne.createExtensionDeeplink=ne.createScriptCommandDeeplink=ne.DeeplinkType=void 0;var xr=require("@raycast/api"),tp=ro(require("node:fs")),ap=ro(require("node:path")),Dr;(function(e){e.ScriptCommand="script-command",e.Extension="extension"})(Dr||(ne.DeeplinkType=Dr={}));function no(){return xr.environment.raycastVersion.includes("alpha")?"raycastinternal://":"raycast://"}function rp(){let e=JSON.parse(tp.default.readFileSync(ap.default.join(xr.environment.assetsPath,"..","package.json"),"utf8"));return e.owner||e.author}function oo(e){let t=`${no()}script-commands/${e.command}`;if(e.arguments){let a="";for(let r of e.arguments)a+="&arguments="+encodeURIComponent(r);t+="?"+a.substring(1)}return t}ne.createScriptCommandDeeplink=oo;function io(e){let t=rp(),a=xr.environment.extensionName;"ownerOrAuthorName"in e&&"extensionName"in e&&(t=e.ownerOrAuthorName,a=e.extensionName);let r=`${no()}extensions/${t}/${a}/${e.command}`,n="";return e.launchType&&(n+="&launchType="+encodeURIComponent(e.launchType)),e.arguments&&(n+="&arguments="+encodeURIComponent(JSON.stringify(e.arguments))),e.context&&(n+="&context="+encodeURIComponent(JSON.stringify(e.context))),e.fallbackText&&(n+="&fallbackText="+encodeURIComponent(e.fallbackText)),n&&(r+="?"+n.substring(1)),r}ne.createExtensionDeeplink=io;function np(e){return e.type===Dr.ScriptCommand?oo(e):io(e)}ne.createDeeplink=np});var uo=C(ha=>{"use strict";Object.defineProperty(ha,"__esModule",{value:!0});ha.executeSQL=void 0;var op=Sr();function ip(e,t){return(0,op.baseExecuteSQL)(e,t)}ha.executeSQL=ip});var po=C(Rt=>{"use strict";var sp=Rt&&Rt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Rt,"__esModule",{value:!0});Rt.runAppleScript=void 0;var up=sp(require("node:child_process")),kt=ca();async function pp(e,t,a){let{humanReadableOutput:r,language:n,timeout:o,...u}=Array.isArray(t)?a||{}:t||{},i=r!==!1?[]:["-ss"];n==="JavaScript"&&i.push("-l","JavaScript"),Array.isArray(t)&&i.push("-",...t);let s=up.default.spawn("osascript",i,{...u,env:{PATH:"/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"}}),p=(0,kt.getSpawnedPromise)(s,{timeout:o??1e4});s.stdin.end(e);let[{error:c,exitCode:d,signal:y,timedOut:M},l,b]=await(0,kt.getSpawnedResult)(s,{encoding:"utf8"},p),S=(0,kt.handleOutput)({stripFinalNewline:!0},l),I=(0,kt.handleOutput)({stripFinalNewline:!0},b);return(0,kt.defaultParsing)({stdout:S,stderr:I,error:c,exitCode:d,signal:y,timedOut:M,command:"osascript",options:a,parentError:new Error})}Rt.runAppleScript=pp});var lo=C(xa=>{"use strict";Object.defineProperty(xa,"__esModule",{value:!0});xa.withCache=void 0;var lp=require("@raycast/api"),Da=Oe();function cp(e,t){let a=new lp.Cache({namespace:(0,Da.hash)(e)}),r=async(...n)=>{let o=(0,Da.hash)(n||[])+t?.internal_cacheKeySuffix,u=a.get(o);if(u){let{data:s,timestamp:p}=JSON.parse(u,Da.reviver);if(!(t?.maxAge&&Date.now()-p>t.maxAge)&&(!t?.validate||t.validate(s)))return s}let i=await e(...n);return a.set(o,JSON.stringify({data:i,timestamp:Date.now()},Da.replacer)),i};return r.clearCache=()=>{a.clear()},r}xa.withCache=cp});var Fe=C(x=>{"use strict";var yp=x&&x.__createBinding||(Object.create?(function(e,t,a,r){r===void 0&&(r=a);var n=Object.getOwnPropertyDescriptor(t,a);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,n)}):(function(e,t,a,r){r===void 0&&(r=a),e[r]=t[a]})),B=x&&x.__exportStar||function(e,t){for(var a in e)a!=="default"&&!Object.prototype.hasOwnProperty.call(t,a)&&yp(t,e,a)};Object.defineProperty(x,"__esModule",{value:!0});B(ot(),x);B(na(),x);B(_t(),x);B(Sn(),x);B(mn(),x);B(Pn(),x);B(Dn(),x);B(_n(),x);B(vn(),x);B(On(),x);B(qn(),x);B(Jn(),x);B(ao(),x);B(so(),x);B(uo(),x);B(po(),x);B(ht(),x);B(lo(),x)});var G={};rt(G,{default:()=>Po.default});var Po,Ba=Ja(()=>{H(G,require("formdata-polyfill/esm.min.js"));Po=T(require("formdata-polyfill/esm.min.js"))});var J={};rt(J,{default:()=>Do.default});var Do,Tr=Ja(()=>{H(J,require("fetch-blob/from.js"));Do=T(require("fetch-blob/from.js"))});var _o={};rt(_o,{toFormData:()=>wp});function Tp(e){let t=e.match(/\bfilename=("(.*?)"|([^()<>@,;:\\"/[\]?={}\s\t]+))($|;\s)/i);if(!t)return;let a=t[2]||t[3]||"",r=a.slice(a.lastIndexOf("\\")+1);return r=r.replace(/%22/g,'"'),r=r.replace(/&#(\d{4});/g,(n,o)=>String.fromCharCode(o)),r}async function wp(e,t){if(!/multipart/i.test(t))throw new TypeError("Failed to fetch");let a=t.match(/boundary=(?:"([^"]+)"|([^;]+))/i);if(!a)throw new TypeError("no or bad content-type header, no multipart boundary");let r=new wr(a[1]||a[2]),n,o,u,i,s,p,c=[],d=new G.FormData,y=I=>{u+=S.decode(I,{stream:!0})},M=I=>{c.push(I)},l=()=>{let I=new J.File(c,p,{type:s});d.append(i,I)},b=()=>{d.append(i,u)},S=new TextDecoder("utf-8");S.decode(),r.onPartBegin=function(){r.onPartData=y,r.onPartEnd=b,n="",o="",u="",i="",s="",p=null,c.length=0},r.onHeaderField=function(I){n+=S.decode(I,{stream:!0})},r.onHeaderValue=function(I){o+=S.decode(I,{stream:!0})},r.onHeaderEnd=function(){if(o+=S.decode(),n=n.toLowerCase(),n==="content-disposition"){let I=o.match(/\bname=("([^"]*)"|([^()<>@,;:\\"/[\]?={}\s\t]+))/i);I&&(i=I[2]||I[3]||""),p=Tp(o),p&&(r.onPartData=M,r.onPartEnd=l)}else n==="content-type"&&(s=o);o="",n=""};for await(let I of e)r.write(I);return r.end(),d}var me,D,xo,He,qa,Na,Dp,Ht,xp,_p,Up,vp,Xe,wr,Uo=Ja(()=>{Tr();Ba();me=0,D={START_BOUNDARY:me++,HEADER_FIELD_START:me++,HEADER_FIELD:me++,HEADER_VALUE_START:me++,HEADER_VALUE:me++,HEADER_VALUE_ALMOST_DONE:me++,HEADERS_ALMOST_DONE:me++,PART_DATA_START:me++,PART_DATA:me++,END:me++},xo=1,He={PART_BOUNDARY:xo,LAST_BOUNDARY:xo*=2},qa=10,Na=13,Dp=32,Ht=45,xp=58,_p=97,Up=122,vp=e=>e|32,Xe=()=>{},wr=class{constructor(t){this.index=0,this.flags=0,this.onHeaderEnd=Xe,this.onHeaderField=Xe,this.onHeadersEnd=Xe,this.onHeaderValue=Xe,this.onPartBegin=Xe,this.onPartData=Xe,this.onPartEnd=Xe,this.boundaryChars={},t=`\r
--`+t;let a=new Uint8Array(t.length);for(let r=0;r<t.length;r++)a[r]=t.charCodeAt(r),this.boundaryChars[a[r]]=!0;this.boundary=a,this.lookbehind=new Uint8Array(this.boundary.length+8),this.state=D.START_BOUNDARY}write(t){let a=0,r=t.length,n=this.index,{lookbehind:o,boundary:u,boundaryChars:i,index:s,state:p,flags:c}=this,d=this.boundary.length,y=d-1,M=t.length,l,b,S=m=>{this[m+"Mark"]=a},I=m=>{delete this[m+"Mark"]},R=(m,E,f,_)=>{(E===void 0||E!==f)&&this[m](_&&_.subarray(E,f))},P=(m,E)=>{let f=m+"Mark";f in this&&(E?(R(m,this[f],a,t),delete this[f]):(R(m,this[f],t.length,t),this[f]=0))};for(a=0;a<r;a++)switch(l=t[a],p){case D.START_BOUNDARY:if(s===u.length-2){if(l===Ht)c|=He.LAST_BOUNDARY;else if(l!==Na)return;s++;break}else if(s-1===u.length-2){if(c&He.LAST_BOUNDARY&&l===Ht)p=D.END,c=0;else if(!(c&He.LAST_BOUNDARY)&&l===qa)s=0,R("onPartBegin"),p=D.HEADER_FIELD_START;else return;break}l!==u[s+2]&&(s=-2),l===u[s+2]&&s++;break;case D.HEADER_FIELD_START:p=D.HEADER_FIELD,S("onHeaderField"),s=0;case D.HEADER_FIELD:if(l===Na){I("onHeaderField"),p=D.HEADERS_ALMOST_DONE;break}if(s++,l===Ht)break;if(l===xp){if(s===1)return;P("onHeaderField",!0),p=D.HEADER_VALUE_START;break}if(b=vp(l),b<_p||b>Up)return;break;case D.HEADER_VALUE_START:if(l===Dp)break;S("onHeaderValue"),p=D.HEADER_VALUE;case D.HEADER_VALUE:l===Na&&(P("onHeaderValue",!0),R("onHeaderEnd"),p=D.HEADER_VALUE_ALMOST_DONE);break;case D.HEADER_VALUE_ALMOST_DONE:if(l!==qa)return;p=D.HEADER_FIELD_START;break;case D.HEADERS_ALMOST_DONE:if(l!==qa)return;R("onHeadersEnd"),p=D.PART_DATA_START;break;case D.PART_DATA_START:p=D.PART_DATA,S("onPartData");case D.PART_DATA:if(n=s,s===0){for(a+=y;a<M&&!(t[a]in i);)a+=d;a-=y,l=t[a]}if(s<u.length)u[s]===l?(s===0&&P("onPartData",!0),s++):s=0;else if(s===u.length)s++,l===Na?c|=He.PART_BOUNDARY:l===Ht?c|=He.LAST_BOUNDARY:s=0;else if(s-1===u.length)if(c&He.PART_BOUNDARY){if(s=0,l===qa){c&=~He.PART_BOUNDARY,R("onPartEnd"),R("onPartBegin"),p=D.HEADER_FIELD_START;break}}else c&He.LAST_BOUNDARY&&l===Ht?(R("onPartEnd"),p=D.END,c=0):s=0;if(s>0)o[s-1]=l;else if(n>0){let m=new Uint8Array(o.buffer,o.byteOffset,o.byteLength);R("onPartData",0,n,m),n=0,S("onPartData"),a--}break;case D.END:break;default:throw new Error(`Unexpected state entered: ${p}`)}P("onHeaderField"),P("onHeaderValue"),P("onPartData"),this.index=s,this.state=p,this.flags=c}end(){if(this.state===D.HEADER_FIELD_START&&this.index===0||this.state===D.PART_DATA&&this.index===this.boundary.length)this.onPartEnd();else if(this.state!==D.END)throw new Error("MultipartParser.end(): stream ended unexpectedly")}}});var cc={};rt(cc,{default:()=>lc});module.exports=_i(cc);var at=require("@raycast/api"),Ai=T(Fe()),fi=require("lodash"),Ka=require("react");var ei=require("@octokit/rest"),ti=require("@raycast/api"),ai=T(Fe());var _a=JSON;var co=e=>e.toUpperCase(),yo=e=>{let t={};return e.forEach((a,r)=>{t[r]=a}),t};var So=(e,t,a)=>e.document?e:{document:e,variables:t,requestHeaders:a,signal:void 0},bo=(e,t,a)=>e.query?e:{query:e,variables:t,requestHeaders:a,signal:void 0},Io=(e,t)=>e.documents?e:{documents:e,requestHeaders:t,signal:void 0};var Ua=require("graphql"),go=e=>{let t,a=e.definitions.filter(r=>r.kind==="OperationDefinition");return a.length===1&&(t=a[0]?.name?.value),t},Je=e=>{if(typeof e=="string"){let a;try{let r=(0,Ua.parse)(e);a=go(r)}catch{}return{query:e,operationName:a}}let t=go(e);return{query:(0,Ua.print)(e),operationName:t}};var Ze=class e extends Error{constructor(t,a){let r=`${e.extractMessage(t)}: ${JSON.stringify({response:t,request:a})}`;super(r),Object.setPrototypeOf(this,e.prototype),this.response=t,this.request=a,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,e)}static extractMessage(t){return t.errors?.[0]?.message??`GraphQL Error (Code: ${t.status})`}};var ze=T(Bt(),1);var dp="connection_init",Sp="connection_ack",mo="ping",Ro="pong",bp="subscribe",Ip="next",gp="error",Ao="complete",je=class e{get type(){return this._type}get id(){return this._id}get payload(){return this._payload}constructor(t,a,r){this._type=t,this._payload=a,this._id=r}get text(){let t={type:this.type};return this.id!=null&&this.id!=null&&(t.id=this.id),this.payload!=null&&this.payload!=null&&(t.payload=this.payload),JSON.stringify(t)}static parse(t,a){let{type:r,payload:n,id:o}=JSON.parse(t);return new e(r,a(n),o)}},va=class{constructor(t,{onInit:a,onAcknowledged:r,onPing:n,onPong:o}){this.socketState={acknowledged:!1,lastRequestId:0,subscriptions:{}},this.socket=t,t.addEventListener("open",async u=>{this.socketState.acknowledged=!1,this.socketState.subscriptions={},t.send(mp(a?await a():null).text)}),t.addEventListener("close",u=>{this.socketState.acknowledged=!1,this.socketState.subscriptions={}}),t.addEventListener("error",u=>{console.error(u)}),t.addEventListener("message",u=>{try{let i=Mp(u.data);switch(i.type){case Sp:{this.socketState.acknowledged?console.warn("Duplicate CONNECTION_ACK message ignored"):(this.socketState.acknowledged=!0,r&&r(i.payload));return}case mo:{n?n(i.payload).then(d=>t.send(Mo(d).text)):t.send(Mo(null).text);return}case Ro:{o&&o(i.payload);return}}if(!this.socketState.acknowledged||i.id===void 0||i.id===null||!this.socketState.subscriptions[i.id])return;let{query:s,variables:p,subscriber:c}=this.socketState.subscriptions[i.id];switch(i.type){case Ip:{!i.payload.errors&&i.payload.data&&c.next&&c.next(i.payload.data),i.payload.errors&&c.error&&c.error(new Ze({...i.payload,status:200},{query:s,variables:p}));return}case gp:{c.error&&c.error(new Ze({errors:i.payload,status:200},{query:s,variables:p}));return}case Ao:{c.complete&&c.complete(),delete this.socketState.subscriptions[i.id];return}}}catch(i){console.error(i),t.close(1006)}t.close(4400,"Unknown graphql-ws message.")})}makeSubscribe(t,a,r,n){let o=(this.socketState.lastRequestId++).toString();return this.socketState.subscriptions[o]={query:t,variables:n,subscriber:r},this.socket.send(Ap(o,{query:t,operationName:a,variables:n}).text),()=>{this.socket.send(fp(o).text),delete this.socketState.subscriptions[o]}}rawRequest(t,a){return new Promise((r,n)=>{let o;this.rawSubscribe(t,{next:(u,i)=>o={data:u,extensions:i},error:n,complete:()=>r(o)},a)})}request(t,a){return new Promise((r,n)=>{let o;this.subscribe(t,{next:u=>o=u,error:n,complete:()=>r(o)},a)})}subscribe(t,a,r){let{query:n,operationName:o}=Je(t);return this.makeSubscribe(n,o,a,r)}rawSubscribe(t,a,r){return this.makeSubscribe(t,void 0,a,r)}ping(t){this.socket.send(Rp(t).text)}close(){this.socket.close(1e3)}};va.PROTOCOL="graphql-transport-ws";function Mp(e,t=a=>a){return je.parse(e,t)}function mp(e){return new je(dp,e)}function Rp(e){return new je(mo,e,void 0)}function Mo(e){return new je(Ro,e,void 0)}function Ap(e,t){return new je(bp,t,e)}function fp(e){return new je(Ao,void 0,e)}var At=e=>{let t={};return e&&(typeof Headers<"u"&&e instanceof Headers||ze&&ze.Headers&&e instanceof ze.Headers?t=yo(e):Array.isArray(e)?e.forEach(([a,r])=>{a&&r!==void 0&&(t[a]=r)}):t=e),t},fo=e=>e.replace(/([\s,]|#[^\n\r]+)+/g," ").trim(),Pp=e=>{if(!Array.isArray(e.query)){let r=e,n=[`query=${encodeURIComponent(fo(r.query))}`];return e.variables&&n.push(`variables=${encodeURIComponent(r.jsonSerializer.stringify(r.variables))}`),r.operationName&&n.push(`operationName=${encodeURIComponent(r.operationName)}`),n.join("&")}if(typeof e.variables<"u"&&!Array.isArray(e.variables))throw new Error("Cannot create query with given variable type, array expected");let t=e,a=e.query.reduce((r,n,o)=>(r.push({query:fo(n),variables:t.variables?t.jsonSerializer.stringify(t.variables[o]):void 0}),r),[]);return`query=${encodeURIComponent(t.jsonSerializer.stringify(a))}`},Ep=e=>async t=>{let{url:a,query:r,variables:n,operationName:o,fetch:u,fetchOptions:i,middleware:s}=t,p={...t.headers},c="",d;e==="POST"?(d=Cp(r,n,o,i.jsonSerializer),typeof d=="string"&&(p["Content-Type"]="application/json")):c=Pp({query:r,variables:n,operationName:o,jsonSerializer:i.jsonSerializer??_a});let y={method:e,headers:p,body:d,...i},M=a,l=y;if(s){let b=await Promise.resolve(s({...y,url:a,operationName:o,variables:n})),{url:S,...I}=b;M=S,l=I}return c&&(M=`${M}?${c}`),await u(M,l)},Ta=class{constructor(t,a={}){this.url=t,this.requestConfig=a,this.rawRequest=async(...r)=>{let[n,o,u]=r,i=bo(n,o,u),{headers:s,fetch:p=ze.default,method:c="POST",requestMiddleware:d,responseMiddleware:y,...M}=this.requestConfig,{url:l}=this;i.signal!==void 0&&(M.signal=i.signal);let{operationName:b}=Je(i.query);return _r({url:l,query:i.query,variables:i.variables,headers:{...At(Ur(s)),...At(i.requestHeaders)},operationName:b,fetch:p,method:c,fetchOptions:M,middleware:d}).then(S=>(y&&y(S),S)).catch(S=>{throw y&&y(S),S})}}async request(t,...a){let[r,n]=a,o=So(t,r,n),{headers:u,fetch:i=ze.default,method:s="POST",requestMiddleware:p,responseMiddleware:c,...d}=this.requestConfig,{url:y}=this;o.signal!==void 0&&(d.signal=o.signal);let{query:M,operationName:l}=Je(o.document);return _r({url:y,query:M,variables:o.variables,headers:{...At(Ur(u)),...At(o.requestHeaders)},operationName:l,fetch:i,method:s,fetchOptions:d,middleware:p}).then(b=>(c&&c(b),b.data)).catch(b=>{throw c&&c(b),b})}batchRequests(t,a){let r=Io(t,a),{headers:n,...o}=this.requestConfig;r.signal!==void 0&&(o.signal=r.signal);let u=r.documents.map(({document:s})=>Je(s).query),i=r.documents.map(({variables:s})=>s);return _r({url:this.url,query:u,variables:i,headers:{...At(Ur(n)),...At(r.requestHeaders)},operationName:void 0,fetch:this.requestConfig.fetch??ze.default,method:this.requestConfig.method||"POST",fetchOptions:o,middleware:this.requestConfig.requestMiddleware}).then(s=>(this.requestConfig.responseMiddleware&&this.requestConfig.responseMiddleware(s),s.data)).catch(s=>{throw this.requestConfig.responseMiddleware&&this.requestConfig.responseMiddleware(s),s})}setHeaders(t){return this.requestConfig.headers=t,this}setHeader(t,a){let{headers:r}=this.requestConfig;return r?r[t]=a:this.requestConfig.headers={[t]:a},this}setEndpoint(t){return this.url=t,this}},_r=async e=>{let{query:t,variables:a,fetchOptions:r}=e,n=Ep(co(e.method??"post")),o=Array.isArray(e.query),u=await n(e),i=await hp(u,r.jsonSerializer??_a),s=Array.isArray(i)?!i.some(({data:c})=>!c):!!i.data,p=Array.isArray(i)||!i.errors||Array.isArray(i.errors)&&!i.errors.length||r.errorPolicy==="all"||r.errorPolicy==="ignore";if(u.ok&&p&&s){let{errors:c,...d}=(Array.isArray(i),i),y=r.errorPolicy==="ignore"?d:i;return{...o?{data:y}:y,headers:u.headers,status:u.status}}else{let c=typeof i=="string"?{error:i}:i;throw new Ze({...c,status:u.status,headers:u.headers},{query:t,variables:a})}};var Cp=(e,t,a,r)=>{let n=r??_a;if(!Array.isArray(e))return n.stringify({query:e,variables:t,operationName:a});if(typeof t<"u"&&!Array.isArray(t))throw new Error("Cannot create request body with given variable type, array expected");let o=e.reduce((u,i,s)=>(u.push({query:i,variables:t?t[s]:void 0}),u),[]);return n.stringify(o)},hp=async(e,t)=>{let a;return e.headers.forEach((r,n)=>{n.toLowerCase()==="content-type"&&(a=r)}),a&&(a.toLowerCase().startsWith("application/json")||a.toLowerCase().startsWith("application/graphql+json")||a.toLowerCase().startsWith("application/graphql-response+json"))?t.parse(await e.text()):e.text()},Ur=e=>typeof e=="function"?e():e;var Go=T(require("node:http"),1),$o=T(require("node:https"),1),tt=T(require("node:zlib"),1),ee=T(require("node:stream"),1),Qt=require("node:buffer");var Ft={};rt(Ft,{default:()=>wa.default});H(Ft,require("data-uri-to-buffer"));var wa=T(require("data-uri-to-buffer"));var oe=T(require("node:stream"),1),Ue=require("node:util"),Z=require("node:buffer");var jt={};rt(jt,{default:()=>Oa.default});H(jt,require("fetch-blob"));var Oa=T(require("fetch-blob"));Ba();var _e=class extends Error{constructor(t,a){super(t),Error.captureStackTrace(this,this.constructor),this.type=a}get name(){return this.constructor.name}get[Symbol.toStringTag](){return this.constructor.name}};var $=class extends _e{constructor(t,a,r){super(t,a),r&&(this.code=this.errno=r.code,this.erroredSysCall=r.syscall)}};var La=Symbol.toStringTag,vr=e=>typeof e=="object"&&typeof e.append=="function"&&typeof e.delete=="function"&&typeof e.get=="function"&&typeof e.getAll=="function"&&typeof e.has=="function"&&typeof e.set=="function"&&typeof e.sort=="function"&&e[La]==="URLSearchParams",zt=e=>e&&typeof e=="object"&&typeof e.arrayBuffer=="function"&&typeof e.type=="string"&&typeof e.stream=="function"&&typeof e.constructor=="function"&&/^(Blob|File)$/.test(e[La]),Eo=e=>typeof e=="object"&&(e[La]==="AbortSignal"||e[La]==="EventTarget"),Co=(e,t)=>{let a=new URL(t).hostname,r=new URL(e).hostname;return a===r||a.endsWith(`.${r}`)},ho=(e,t)=>{let a=new URL(t).protocol,r=new URL(e).protocol;return a===r};var Op=(0,Ue.promisify)(oe.default.pipeline),Q=Symbol("Body internals"),Re=class{constructor(t,{size:a=0}={}){let r=null;t===null?t=null:vr(t)?t=Z.Buffer.from(t.toString()):zt(t)||Z.Buffer.isBuffer(t)||(Ue.types.isAnyArrayBuffer(t)?t=Z.Buffer.from(t):ArrayBuffer.isView(t)?t=Z.Buffer.from(t.buffer,t.byteOffset,t.byteLength):t instanceof oe.default||(t instanceof G.FormData?(t=(0,G.formDataToBlob)(t),r=t.type.split("=")[1]):t=Z.Buffer.from(String(t))));let n=t;Z.Buffer.isBuffer(t)?n=oe.default.Readable.from(t):zt(t)&&(n=oe.default.Readable.from(t.stream())),this[Q]={body:t,stream:n,boundary:r,disturbed:!1,error:null},this.size=a,t instanceof oe.default&&t.on("error",o=>{let u=o instanceof _e?o:new $(`Invalid response body while trying to fetch ${this.url}: ${o.message}`,"system",o);this[Q].error=u})}get body(){return this[Q].stream}get bodyUsed(){return this[Q].disturbed}async arrayBuffer(){let{buffer:t,byteOffset:a,byteLength:r}=await Or(this);return t.slice(a,a+r)}async formData(){let t=this.headers.get("content-type");if(t.startsWith("application/x-www-form-urlencoded")){let r=new G.FormData,n=new URLSearchParams(await this.text());for(let[o,u]of n)r.append(o,u);return r}let{toFormData:a}=await Promise.resolve().then(()=>(Uo(),_o));return a(this.body,t)}async blob(){let t=this.headers&&this.headers.get("content-type")||this[Q].body&&this[Q].body.type||"",a=await this.arrayBuffer();return new Oa.default([a],{type:t})}async json(){let t=await this.text();return JSON.parse(t)}async text(){let t=await Or(this);return new TextDecoder().decode(t)}buffer(){return Or(this)}};Re.prototype.buffer=(0,Ue.deprecate)(Re.prototype.buffer,"Please use 'response.arrayBuffer()' instead of 'response.buffer()'","node-fetch#buffer");Object.defineProperties(Re.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0},data:{get:(0,Ue.deprecate)(()=>{},"data doesn't exist, use json(), text(), arrayBuffer(), or body instead","https://github.com/node-fetch/node-fetch/issues/1000 (response)")}});async function Or(e){if(e[Q].disturbed)throw new TypeError(`body used already for: ${e.url}`);if(e[Q].disturbed=!0,e[Q].error)throw e[Q].error;let{body:t}=e;if(t===null)return Z.Buffer.alloc(0);if(!(t instanceof oe.default))return Z.Buffer.alloc(0);let a=[],r=0;try{for await(let n of t){if(e.size>0&&r+n.length>e.size){let o=new $(`content size at ${e.url} over limit: ${e.size}`,"max-size");throw t.destroy(o),o}r+=n.length,a.push(n)}}catch(n){throw n instanceof _e?n:new $(`Invalid response body while trying to fetch ${e.url}: ${n.message}`,"system",n)}if(t.readableEnded===!0||t._readableState.ended===!0)try{return a.every(n=>typeof n=="string")?Z.Buffer.from(a.join("")):Z.Buffer.concat(a,r)}catch(n){throw new $(`Could not create Buffer from response body for ${e.url}: ${n.message}`,"system",n)}else throw new $(`Premature close of server response while trying to fetch ${e.url}`)}var ft=(e,t)=>{let a,r,{body:n}=e[Q];if(e.bodyUsed)throw new Error("cannot clone body after it is used");return n instanceof oe.default&&typeof n.getBoundary!="function"&&(a=new oe.PassThrough({highWaterMark:t}),r=new oe.PassThrough({highWaterMark:t}),n.pipe(a),n.pipe(r),e[Q].stream=a,n=r),n},Bp=(0,Ue.deprecate)(e=>e.getBoundary(),"form-data doesn't follow the spec and requires special treatment. Use alternative package","https://github.com/node-fetch/node-fetch/issues/1167"),Va=(e,t)=>e===null?null:typeof e=="string"?"text/plain;charset=UTF-8":vr(e)?"application/x-www-form-urlencoded;charset=UTF-8":zt(e)?e.type||null:Z.Buffer.isBuffer(e)||Ue.types.isAnyArrayBuffer(e)||ArrayBuffer.isView(e)?null:e instanceof G.FormData?`multipart/form-data; boundary=${t[Q].boundary}`:e&&typeof e.getBoundary=="function"?`multipart/form-data;boundary=${Bp(e)}`:e instanceof oe.default?null:"text/plain;charset=UTF-8",vo=e=>{let{body:t}=e[Q];return t===null?0:zt(t)?t.size:Z.Buffer.isBuffer(t)?t.length:t&&typeof t.getLengthSync=="function"&&t.hasKnownLength&&t.hasKnownLength()?t.getLengthSync():null},To=async(e,{body:t})=>{t===null?e.end():await Op(t,e)};var Br=require("node:util"),Gt=T(require("node:http"),1),ka=typeof Gt.default.validateHeaderName=="function"?Gt.default.validateHeaderName:e=>{if(!/^[\^`\-\w!#$%&'*+.|~]+$/.test(e)){let t=new TypeError(`Header name must be a valid HTTP token [${e}]`);throw Object.defineProperty(t,"code",{value:"ERR_INVALID_HTTP_TOKEN"}),t}},Lr=typeof Gt.default.validateHeaderValue=="function"?Gt.default.validateHeaderValue:(e,t)=>{if(/[^\t\u0020-\u007E\u0080-\u00FF]/.test(t)){let a=new TypeError(`Invalid character in header content ["${e}"]`);throw Object.defineProperty(a,"code",{value:"ERR_INVALID_CHAR"}),a}},X=class e extends URLSearchParams{constructor(t){let a=[];if(t instanceof e){let r=t.raw();for(let[n,o]of Object.entries(r))a.push(...o.map(u=>[n,u]))}else if(t!=null)if(typeof t=="object"&&!Br.types.isBoxedPrimitive(t)){let r=t[Symbol.iterator];if(r==null)a.push(...Object.entries(t));else{if(typeof r!="function")throw new TypeError("Header pairs must be iterable");a=[...t].map(n=>{if(typeof n!="object"||Br.types.isBoxedPrimitive(n))throw new TypeError("Each header pair must be an iterable object");return[...n]}).map(n=>{if(n.length!==2)throw new TypeError("Each header pair must be a name/value tuple");return[...n]})}}else throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");return a=a.length>0?a.map(([r,n])=>(ka(r),Lr(r,String(n)),[String(r).toLowerCase(),String(n)])):void 0,super(a),new Proxy(this,{get(r,n,o){switch(n){case"append":case"set":return(u,i)=>(ka(u),Lr(u,String(i)),URLSearchParams.prototype[n].call(r,String(u).toLowerCase(),String(i)));case"delete":case"has":case"getAll":return u=>(ka(u),URLSearchParams.prototype[n].call(r,String(u).toLowerCase()));case"keys":return()=>(r.sort(),new Set(URLSearchParams.prototype.keys.call(r)).keys());default:return Reflect.get(r,n,o)}}})}get[Symbol.toStringTag](){return this.constructor.name}toString(){return Object.prototype.toString.call(this)}get(t){let a=this.getAll(t);if(a.length===0)return null;let r=a.join(", ");return/^content-encoding$/i.test(t)&&(r=r.toLowerCase()),r}forEach(t,a=void 0){for(let r of this.keys())Reflect.apply(t,a,[this.get(r),r,this])}*values(){for(let t of this.keys())yield this.get(t)}*entries(){for(let t of this.keys())yield[t,this.get(t)]}[Symbol.iterator](){return this.entries()}raw(){return[...this.keys()].reduce((t,a)=>(t[a]=this.getAll(a),t),{})}[Symbol.for("nodejs.util.inspect.custom")](){return[...this.keys()].reduce((t,a)=>{let r=this.getAll(a);return a==="host"?t[a]=r[0]:t[a]=r.length>1?r:r[0],t},{})}};Object.defineProperties(X.prototype,["get","entries","forEach","values"].reduce((e,t)=>(e[t]={enumerable:!0},e),{}));function wo(e=[]){return new X(e.reduce((t,a,r,n)=>(r%2===0&&t.push(n.slice(r,r+2)),t),[]).filter(([t,a])=>{try{return ka(t),Lr(t,String(a)),!0}catch{return!1}}))}var Lp=new Set([301,302,303,307,308]),Fa=e=>Lp.has(e);var ye=Symbol("Response internals"),ie=class e extends Re{constructor(t=null,a={}){super(t,a);let r=a.status!=null?a.status:200,n=new X(a.headers);if(t!==null&&!n.has("Content-Type")){let o=Va(t,this);o&&n.append("Content-Type",o)}this[ye]={type:"default",url:a.url,status:r,statusText:a.statusText||"",headers:n,counter:a.counter,highWaterMark:a.highWaterMark}}get type(){return this[ye].type}get url(){return this[ye].url||""}get status(){return this[ye].status}get ok(){return this[ye].status>=200&&this[ye].status<300}get redirected(){return this[ye].counter>0}get statusText(){return this[ye].statusText}get headers(){return this[ye].headers}get highWaterMark(){return this[ye].highWaterMark}clone(){return new e(ft(this,this.highWaterMark),{type:this.type,url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected,size:this.size,highWaterMark:this.highWaterMark})}static redirect(t,a=302){if(!Fa(a))throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');return new e(null,{headers:{location:new URL(t).toString()},status:a})}static error(){let t=new e(null,{status:0,statusText:""});return t[ye].type="error",t}static json(t=void 0,a={}){let r=JSON.stringify(t);if(r===void 0)throw new TypeError("data is not JSON serializable");let n=new X(a&&a.headers);return n.has("content-type")||n.set("content-type","application/json"),new e(r,{...a,headers:n})}get[Symbol.toStringTag](){return"Response"}};Object.defineProperties(ie.prototype,{type:{enumerable:!0},url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}});var jo=require("node:url"),zo=require("node:util");var Oo=e=>{if(e.search)return e.search;let t=e.href.length-1,a=e.hash||(e.href[t]==="#"?"#":"");return e.href[t-a.length]==="?"?"?":""};var Lo=require("node:net");function Bo(e,t=!1){return e==null||(e=new URL(e),/^(about|blob|data):$/.test(e.protocol))?"no-referrer":(e.username="",e.password="",e.hash="",t&&(e.pathname="",e.search=""),e)}var qo=new Set(["","no-referrer","no-referrer-when-downgrade","same-origin","origin","strict-origin","origin-when-cross-origin","strict-origin-when-cross-origin","unsafe-url"]),No="strict-origin-when-cross-origin";function Vo(e){if(!qo.has(e))throw new TypeError(`Invalid referrerPolicy: ${e}`);return e}function qp(e){if(/^(http|ws)s:$/.test(e.protocol))return!0;let t=e.host.replace(/(^\[)|(]$)/g,""),a=(0,Lo.isIP)(t);return a===4&&/^127\./.test(t)||a===6&&/^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(t)?!0:e.host==="localhost"||e.host.endsWith(".localhost")?!1:e.protocol==="file:"}function Pt(e){return/^about:(blank|srcdoc)$/.test(e)||e.protocol==="data:"||/^(blob|filesystem):$/.test(e.protocol)?!0:qp(e)}function ko(e,{referrerURLCallback:t,referrerOriginCallback:a}={}){if(e.referrer==="no-referrer"||e.referrerPolicy==="")return null;let r=e.referrerPolicy;if(e.referrer==="about:client")return"no-referrer";let n=e.referrer,o=Bo(n),u=Bo(n,!0);o.toString().length>4096&&(o=u),t&&(o=t(o)),a&&(u=a(u));let i=new URL(e.url);switch(r){case"no-referrer":return"no-referrer";case"origin":return u;case"unsafe-url":return o;case"strict-origin":return Pt(o)&&!Pt(i)?"no-referrer":u.toString();case"strict-origin-when-cross-origin":return o.origin===i.origin?o:Pt(o)&&!Pt(i)?"no-referrer":u;case"same-origin":return o.origin===i.origin?o:"no-referrer";case"origin-when-cross-origin":return o.origin===i.origin?o:u;case"no-referrer-when-downgrade":return Pt(o)&&!Pt(i)?"no-referrer":o;default:throw new TypeError(`Invalid referrerPolicy: ${r}`)}}function Fo(e){let t=(e.get("referrer-policy")||"").split(/[,\s]+/),a="";for(let r of t)r&&qo.has(r)&&(a=r);return a}var L=Symbol("Request internals"),$t=e=>typeof e=="object"&&typeof e[L]=="object",Np=(0,zo.deprecate)(()=>{},".data is not a valid RequestInit property, use .body instead","https://github.com/node-fetch/node-fetch/issues/1000 (request)"),et=class e extends Re{constructor(t,a={}){let r;if($t(t)?r=new URL(t.url):(r=new URL(t),t={}),r.username!==""||r.password!=="")throw new TypeError(`${r} is an url with embedded credentials.`);let n=a.method||t.method||"GET";if(/^(delete|get|head|options|post|put)$/i.test(n)&&(n=n.toUpperCase()),!$t(a)&&"data"in a&&Np(),(a.body!=null||$t(t)&&t.body!==null)&&(n==="GET"||n==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");let o=a.body?a.body:$t(t)&&t.body!==null?ft(t):null;super(o,{size:a.size||t.size||0});let u=new X(a.headers||t.headers||{});if(o!==null&&!u.has("Content-Type")){let p=Va(o,this);p&&u.set("Content-Type",p)}let i=$t(t)?t.signal:null;if("signal"in a&&(i=a.signal),i!=null&&!Eo(i))throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");let s=a.referrer==null?t.referrer:a.referrer;if(s==="")s="no-referrer";else if(s){let p=new URL(s);s=/^about:(\/\/)?client$/.test(p)?"client":p}else s=void 0;this[L]={method:n,redirect:a.redirect||t.redirect||"follow",headers:u,parsedURL:r,signal:i,referrer:s},this.follow=a.follow===void 0?t.follow===void 0?20:t.follow:a.follow,this.compress=a.compress===void 0?t.compress===void 0?!0:t.compress:a.compress,this.counter=a.counter||t.counter||0,this.agent=a.agent||t.agent,this.highWaterMark=a.highWaterMark||t.highWaterMark||16384,this.insecureHTTPParser=a.insecureHTTPParser||t.insecureHTTPParser||!1,this.referrerPolicy=a.referrerPolicy||t.referrerPolicy||""}get method(){return this[L].method}get url(){return(0,jo.format)(this[L].parsedURL)}get headers(){return this[L].headers}get redirect(){return this[L].redirect}get signal(){return this[L].signal}get referrer(){if(this[L].referrer==="no-referrer")return"";if(this[L].referrer==="client")return"about:client";if(this[L].referrer)return this[L].referrer.toString()}get referrerPolicy(){return this[L].referrerPolicy}set referrerPolicy(t){this[L].referrerPolicy=Vo(t)}clone(){return new e(this)}get[Symbol.toStringTag](){return"Request"}};Object.defineProperties(et.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0},referrer:{enumerable:!0},referrerPolicy:{enumerable:!0}});var Ho=e=>{let{parsedURL:t}=e[L],a=new X(e[L].headers);a.has("Accept")||a.set("Accept","*/*");let r=null;if(e.body===null&&/^(post|put)$/i.test(e.method)&&(r="0"),e.body!==null){let i=vo(e);typeof i=="number"&&!Number.isNaN(i)&&(r=String(i))}r&&a.set("Content-Length",r),e.referrerPolicy===""&&(e.referrerPolicy=No),e.referrer&&e.referrer!=="no-referrer"?e[L].referrer=ko(e):e[L].referrer="no-referrer",e[L].referrer instanceof URL&&a.set("Referer",e.referrer),a.has("User-Agent")||a.set("User-Agent","node-fetch"),e.compress&&!a.has("Accept-Encoding")&&a.set("Accept-Encoding","gzip, deflate, br");let{agent:n}=e;typeof n=="function"&&(n=n(t));let o=Oo(t),u={path:t.pathname+o,method:e.method,headers:a[Symbol.for("nodejs.util.inspect.custom")](),insecureHTTPParser:e.insecureHTTPParser,agent:n};return{parsedURL:t,options:u}};var ja=class extends _e{constructor(t,a="aborted"){super(t,a)}};Ba();Tr();var Vp=new Set(["data:","http:","https:"]);async function za(e,t){return new Promise((a,r)=>{let n=new et(e,t),{parsedURL:o,options:u}=Ho(n);if(!Vp.has(o.protocol))throw new TypeError(`node-fetch cannot load ${e}. URL scheme "${o.protocol.replace(/:$/,"")}" is not supported.`);if(o.protocol==="data:"){let l=(0,wa.default)(n.url),b=new ie(l,{headers:{"Content-Type":l.typeFull}});a(b);return}let i=(o.protocol==="https:"?$o.default:Go.default).request,{signal:s}=n,p=null,c=()=>{let l=new ja("The operation was aborted.");r(l),n.body&&n.body instanceof ee.default.Readable&&n.body.destroy(l),!(!p||!p.body)&&p.body.emit("error",l)};if(s&&s.aborted){c();return}let d=()=>{c(),M()},y=i(o.toString(),u);s&&s.addEventListener("abort",d);let M=()=>{y.abort(),s&&s.removeEventListener("abort",d)};y.on("error",l=>{r(new $(`request to ${n.url} failed, reason: ${l.message}`,"system",l)),M()}),kp(y,l=>{p&&p.body&&p.body.destroy(l)}),process.version<"v14"&&y.on("socket",l=>{let b;l.prependListener("end",()=>{b=l._eventsCount}),l.prependListener("close",S=>{if(p&&b<l._eventsCount&&!S){let I=new Error("Premature close");I.code="ERR_STREAM_PREMATURE_CLOSE",p.body.emit("error",I)}})}),y.on("response",l=>{y.setTimeout(0);let b=wo(l.rawHeaders);if(Fa(l.statusCode)){let m=b.get("Location"),E=null;try{E=m===null?null:new URL(m,n.url)}catch{if(n.redirect!=="manual"){r(new $(`uri requested responds with an invalid redirect URL: ${m}`,"invalid-redirect")),M();return}}switch(n.redirect){case"error":r(new $(`uri requested responds with a redirect, redirect mode is set to error: ${n.url}`,"no-redirect")),M();return;case"manual":break;case"follow":{if(E===null)break;if(n.counter>=n.follow){r(new $(`maximum redirect reached at: ${n.url}`,"max-redirect")),M();return}let f={headers:new X(n.headers),follow:n.follow,counter:n.counter+1,agent:n.agent,compress:n.compress,method:n.method,body:ft(n),signal:n.signal,size:n.size,referrer:n.referrer,referrerPolicy:n.referrerPolicy};if(!Co(n.url,E)||!ho(n.url,E))for(let N of["authorization","www-authenticate","cookie","cookie2"])f.headers.delete(N);if(l.statusCode!==303&&n.body&&t.body instanceof ee.default.Readable){r(new $("Cannot follow redirect with body being a readable stream","unsupported-redirect")),M();return}(l.statusCode===303||(l.statusCode===301||l.statusCode===302)&&n.method==="POST")&&(f.method="GET",f.body=void 0,f.headers.delete("content-length"));let _=Fo(b);_&&(f.referrerPolicy=_),a(za(new et(E,f))),M();return}default:return r(new TypeError(`Redirect option '${n.redirect}' is not a valid value of RequestRedirect`))}}s&&l.once("end",()=>{s.removeEventListener("abort",d)});let S=(0,ee.pipeline)(l,new ee.PassThrough,m=>{m&&r(m)});process.version<"v12.10"&&l.on("aborted",d);let I={url:n.url,status:l.statusCode,statusText:l.statusMessage,headers:b,size:n.size,counter:n.counter,highWaterMark:n.highWaterMark},R=b.get("Content-Encoding");if(!n.compress||n.method==="HEAD"||R===null||l.statusCode===204||l.statusCode===304){p=new ie(S,I),a(p);return}let P={flush:tt.default.Z_SYNC_FLUSH,finishFlush:tt.default.Z_SYNC_FLUSH};if(R==="gzip"||R==="x-gzip"){S=(0,ee.pipeline)(S,tt.default.createGunzip(P),m=>{m&&r(m)}),p=new ie(S,I),a(p);return}if(R==="deflate"||R==="x-deflate"){let m=(0,ee.pipeline)(l,new ee.PassThrough,E=>{E&&r(E)});m.once("data",E=>{(E[0]&15)===8?S=(0,ee.pipeline)(S,tt.default.createInflate(),f=>{f&&r(f)}):S=(0,ee.pipeline)(S,tt.default.createInflateRaw(),f=>{f&&r(f)}),p=new ie(S,I),a(p)}),m.once("end",()=>{p||(p=new ie(S,I),a(p))});return}if(R==="br"){S=(0,ee.pipeline)(S,tt.default.createBrotliDecompress(),m=>{m&&r(m)}),p=new ie(S,I),a(p);return}p=new ie(S,I),a(p)}),To(y,n).catch(r)})}function kp(e,t){let a=Qt.Buffer.from(`0\r
\r
`),r=!1,n=!1,o;e.on("response",u=>{let{headers:i}=u;r=i["transfer-encoding"]==="chunked"&&!i["content-length"]}),e.on("socket",u=>{let i=()=>{if(r&&!n){let p=new Error("Premature close");p.code="ERR_STREAM_PREMATURE_CLOSE",t(p)}},s=p=>{n=Qt.Buffer.compare(p.slice(-5),a)===0,!n&&o&&(n=Qt.Buffer.compare(o.slice(-3),a.slice(0,3))===0&&Qt.Buffer.compare(p.slice(-2),a.slice(3))===0),o=p};u.prependListener("close",i),u.on("data",s),e.on("close",()=>{u.removeListener("close",i),u.removeListener("data",s)})})}var g=T(require("graphql-tag")),Wt=g.default`
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
`,Fp=g.default`
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
`,Ae=g.default`
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
  ${Ae}
`,Ha=g.default`
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
  ${Ae}
`,jp=g.default`
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
  ${Ae}
`,Qo=g.default`
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
`,Wo=g.default`
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
`,Ko=g.default`
  fragment RepositoryMentionFields on Repository {
    nameWithOwner
    description
    isPrivate
    isArchived
    owner {
      avatarUrl(size: 64)
    }
  }
`,zp=g.default`
  fragment ProjectViewerFields on ProjectV2View {
    id
    name
    number
  }
`,Yo=g.default`
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
  ${zp}
`,Jo=g.default`
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
  ${Ae}
`,Hp=g.default`
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
  ${Ae}
`,Gp=g.default`
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
`,Zo=g.default`
  fragment CommitFields on Commit {
    authoredDate
    oid
    message
  }
`,qr=g.default`
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
`,$p=g.default`
  fragment ReleaseFields on Release {
    id
    description
    name
    publishedAt
    createdAt
    tagName
    url
  }
`,Qp=g.default`
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
`,Wp=g.default`
  mutation createRef($input: CreateRefInput!) {
    createRef(input: $input) {
      clientMutationId
      ref {
        id
        name
      }
    }
  }
`,Kp=g.default`
  mutation deleteLinkedBranch($input: DeleteLinkedBranchInput!) {
    deleteLinkedBranch(input: $input) {
      clientMutationId
    }
  }
`,Yp=g.default`
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
  ${Fp}
`,Jp=g.default`
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
`,Zp=g.default`
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
  ${Ae}
`,Xp=g.default`
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
`,el=g.default`
  query issueDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...IssueDetailFields
    }
  }
  ${jp}
`,tl=g.default`
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
  ${Ha}
`,al=g.default`
  query issueByNumber($owner: String!, $name: String!, $issueNumber: Int!) {
    repository(owner: $owner, name: $name) {
      issue(number: $issueNumber) {
        ...IssueFields
      }
    }
  }
  ${Ha}
`,rl=g.default`
  mutation closeIssue($nodeId: ID!, $stateReason: IssueClosedStateReason!) {
    closeIssue(input: { issueId: $nodeId, stateReason: $stateReason }) {
      issue {
        id
      }
    }
  }
`,nl=g.default`
  mutation reopenIssue($nodeId: ID!) {
    reopenIssue(input: { issueId: $nodeId }) {
      issue {
        id
      }
    }
  }
`,ol=g.default`
  mutation changeIssueAssignees($issueId: ID!, $assigneeIds: [ID!]) {
    updateIssue(input: { id: $issueId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,il=g.default`
  mutation changeIssueMilestone($issueId: ID!, $milestoneId: ID) {
    updateIssue(input: { id: $issueId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,sl=g.default`
  mutation addIssueToProject($issueId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $issueId }) {
      clientMutationId
    }
  }
`,ul=g.default`
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
  ${Ha}
`,pl=g.default`
  query searchIssueMentions($query: String!, $numberOfItems: Int!) {
    search(query: $query, type: ISSUE, first: $numberOfItems) {
      nodes {
        ... on Issue {
          ...IssueMentionFields
        }
      }
    }
  }
  ${Qo}
`,ll=g.default`
  query searchPullRequestMentions($query: String!, $numberOfItems: Int!) {
    search(query: $query, type: ISSUE, first: $numberOfItems) {
      nodes {
        ... on PullRequest {
          ...PullRequestMentionFields
        }
      }
    }
  }
  ${Wo}
`,cl=g.default`
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
  ${Qo}
  ${Wo}
`,yl=g.default`
  query searchRepositoryMentions($query: String!, $numberOfItems: Int!) {
    search(query: $query, type: REPOSITORY, first: $numberOfItems) {
      nodes {
        ... on Repository {
          ...RepositoryMentionFields
        }
      }
    }
  }
  ${Ko}
`,dl=g.default`
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
  ${Ko}
`,Sl=g.default`
  mutation changeProjectStatus($projectId: ID!, $closed: Boolean!) {
    updateProjectV2(input: { projectId: $projectId, closed: $closed }) {
      clientMutationId
    }
  }
`,bl=g.default`
  query projectDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...ProjectFields
    }
  }
  ${Yo}
`,Il=g.default`
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
  ${Jo}
`,gl=g.default`
  query pullRequestDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...PullRequestDetailsFields
    }
  }
  ${Hp}
`,Ml=g.default`
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
  ${Ae}
`,ml=g.default`
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
`,Rl=g.default`
  query pullRequestCommits($nodeId: ID!, $numberOfItems: Int!, $before: String) {
    node(id: $nodeId) {
      ...PullRequestCommitFields
    }
  }
  ${Gp}
`,Al=g.default`
  mutation closePullRequest($nodeId: ID!) {
    closePullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,fl=g.default`
  mutation reopenPullRequest($nodeId: ID!) {
    reopenPullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Pl=g.default`
  mutation markPullRequestReadyForReview($nodeId: ID!) {
    markPullRequestReadyForReview(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,El=g.default`
  mutation addPullRequestReview($nodeId: ID!, $event: PullRequestReviewEvent, $body: String) {
    addPullRequestReview(input: { pullRequestId: $nodeId, event: $event, body: $body }) {
      pullRequestReview {
        id
      }
    }
  }
`,Cl=g.default`
  mutation changePullRequestAssignees($pullRequestId: ID!, $assigneeIds: [ID!]) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,hl=g.default`
  mutation changePullRequestMilestone($pullRequestId: ID!, $milestoneId: ID) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,Dl=g.default`
  mutation addPullRequestToProject($pullRequestId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $pullRequestId }) {
      clientMutationId
    }
  }
`,xl=g.default`
  mutation requestReview($pullRequestId: ID!, $collaboratorId: ID!) {
    requestReviews(input: { pullRequestId: $pullRequestId, userIds: [$collaboratorId], union: true }) {
      clientMutationId
    }
  }
`,_l=g.default`
  mutation mergePullRequest($nodeId: ID!, $method: PullRequestMergeMethod!) {
    mergePullRequest(input: { pullRequestId: $nodeId, mergeMethod: $method }) {
      pullRequest {
        nodeId: id
      }
    }
  }
`,Ul=g.default`
  mutation addPullRequestToMergeQueue($nodeId: ID!) {
    enqueuePullRequest(input: { pullRequestId: $nodeId }) {
      __typename
    }
  }
`,vl=g.default`
  mutation removePullRequestFromMergeQueue($nodeId: ID!) {
    dequeuePullRequest(input: { id: $nodeId }) {
      __typename
    }
  }
`,Tl=g.default`
  mutation enablePullRequestAutoMerge($nodeId: ID!, $mergeMethod: PullRequestMergeMethod) {
    enablePullRequestAutoMerge(input: { pullRequestId: $nodeId, mergeMethod: $mergeMethod }) {
      pullRequest {
        id
      }
    }
  }
`,wl=g.default`
  mutation disablePullRequestAutoMerge($nodeId: ID!) {
    disablePullRequestAutoMerge(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Ol=g.default`
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
`,Bl=g.default`
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
  ${Jo}
`,Ll=g.default`
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
  ${qr}
`,ql=g.default`
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
  ${qr}
`,Nl=g.default`
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
`,Vl=g.default`
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
`,kl=g.default`
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
  ${Zo}
  ${Ae}
`,Fl=g.default`
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
  ${Zo}
`,jl=g.default`
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
  ${Ha}
`,zl=g.default`
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
  ${$p}
`,Hl=g.default`
  mutation addStar($repositoryId: ID!) {
    addStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,Gl=g.default`
  mutation removeStar($repositoryId: ID!) {
    removeStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,$l=g.default`
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
  ${qr}
`,Ql=g.default`
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
  ${Ae}
  ${Yo}
`,Wl=g.default`
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
  ${Ae}
`,Kl=g.default`
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
`,Yl=(e,t,a,r)=>e();function Xo(e,t=Yl){return{createLinkedBranch(a,r,n){return t(o=>e.request({document:Qp,variables:a,requestHeaders:{...r,...o},signal:n}),"createLinkedBranch","mutation",a)},createRef(a,r,n){return t(o=>e.request({document:Wp,variables:a,requestHeaders:{...r,...o},signal:n}),"createRef","mutation",a)},deleteLinkedBranch(a,r,n){return t(o=>e.request({document:Kp,variables:a,requestHeaders:{...r,...o},signal:n}),"deleteLinkedBranch","mutation",a)},searchDiscussions(a,r,n){return t(o=>e.request({document:Yp,variables:a,requestHeaders:{...r,...o},signal:n}),"searchDiscussions","query",a)},getGitHubDiscussionNumber(a,r,n){return t(o=>e.request({document:Jp,variables:a,requestHeaders:{...r,...o},signal:n}),"getGitHubDiscussionNumber","query",a)},repositoryCollaboratorsForIssues(a,r,n){return t(o=>e.request({document:Zp,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryCollaboratorsForIssues","query",a)},repositoryProjectsForIssues(a,r,n){return t(o=>e.request({document:Xp,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryProjectsForIssues","query",a)},issueDetails(a,r,n){return t(o=>e.request({document:el,variables:a,requestHeaders:{...r,...o},signal:n}),"issueDetails","query",a)},searchIssues(a,r,n){return t(o=>e.request({document:tl,variables:a,requestHeaders:{...r,...o},signal:n}),"searchIssues","query",a)},issueByNumber(a,r,n){return t(o=>e.request({document:al,variables:a,requestHeaders:{...r,...o},signal:n}),"issueByNumber","query",a)},closeIssue(a,r,n){return t(o=>e.request({document:rl,variables:a,requestHeaders:{...r,...o},signal:n}),"closeIssue","mutation",a)},reopenIssue(a,r,n){return t(o=>e.request({document:nl,variables:a,requestHeaders:{...r,...o},signal:n}),"reopenIssue","mutation",a)},changeIssueAssignees(a,r,n){return t(o=>e.request({document:ol,variables:a,requestHeaders:{...r,...o},signal:n}),"changeIssueAssignees","mutation",a)},changeIssueMilestone(a,r,n){return t(o=>e.request({document:il,variables:a,requestHeaders:{...r,...o},signal:n}),"changeIssueMilestone","mutation",a)},addIssueToProject(a,r,n){return t(o=>e.request({document:sl,variables:a,requestHeaders:{...r,...o},signal:n}),"addIssueToProject","mutation",a)},createIssue(a,r,n){return t(o=>e.request({document:ul,variables:a,requestHeaders:{...r,...o},signal:n}),"createIssue","mutation",a)},searchIssueMentions(a,r,n){return t(o=>e.request({document:pl,variables:a,requestHeaders:{...r,...o},signal:n}),"searchIssueMentions","query",a)},searchPullRequestMentions(a,r,n){return t(o=>e.request({document:ll,variables:a,requestHeaders:{...r,...o},signal:n}),"searchPullRequestMentions","query",a)},issueOrPullRequestMention(a,r,n){return t(o=>e.request({document:cl,variables:a,requestHeaders:{...r,...o},signal:n}),"issueOrPullRequestMention","query",a)},searchRepositoryMentions(a,r,n){return t(o=>e.request({document:yl,variables:a,requestHeaders:{...r,...o},signal:n}),"searchRepositoryMentions","query",a)},viewerRepositoryMentions(a,r,n){return t(o=>e.request({document:dl,variables:a,requestHeaders:{...r,...o},signal:n}),"viewerRepositoryMentions","query",a)},changeProjectStatus(a,r,n){return t(o=>e.request({document:Sl,variables:a,requestHeaders:{...r,...o},signal:n}),"changeProjectStatus","mutation",a)},projectDetails(a,r,n){return t(o=>e.request({document:bl,variables:a,requestHeaders:{...r,...o},signal:n}),"projectDetails","query",a)},searchPullRequests(a,r,n){return t(o=>e.request({document:Il,variables:a,requestHeaders:{...r,...o},signal:n}),"searchPullRequests","query",a)},pullRequestDetails(a,r,n){return t(o=>e.request({document:gl,variables:a,requestHeaders:{...r,...o},signal:n}),"pullRequestDetails","query",a)},repositoryCollaboratorsForPullRequests(a,r,n){return t(o=>e.request({document:Ml,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryCollaboratorsForPullRequests","query",a)},repositoryProjectsForPullRequests(a,r,n){return t(o=>e.request({document:ml,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryProjectsForPullRequests","query",a)},pullRequestCommits(a,r,n){return t(o=>e.request({document:Rl,variables:a,requestHeaders:{...r,...o},signal:n}),"pullRequestCommits","query",a)},closePullRequest(a,r,n){return t(o=>e.request({document:Al,variables:a,requestHeaders:{...r,...o},signal:n}),"closePullRequest","mutation",a)},reopenPullRequest(a,r,n){return t(o=>e.request({document:fl,variables:a,requestHeaders:{...r,...o},signal:n}),"reopenPullRequest","mutation",a)},markPullRequestReadyForReview(a,r,n){return t(o=>e.request({document:Pl,variables:a,requestHeaders:{...r,...o},signal:n}),"markPullRequestReadyForReview","mutation",a)},addPullRequestReview(a,r,n){return t(o=>e.request({document:El,variables:a,requestHeaders:{...r,...o},signal:n}),"addPullRequestReview","mutation",a)},changePullRequestAssignees(a,r,n){return t(o=>e.request({document:Cl,variables:a,requestHeaders:{...r,...o},signal:n}),"changePullRequestAssignees","mutation",a)},changePullRequestMilestone(a,r,n){return t(o=>e.request({document:hl,variables:a,requestHeaders:{...r,...o},signal:n}),"changePullRequestMilestone","mutation",a)},addPullRequestToProject(a,r,n){return t(o=>e.request({document:Dl,variables:a,requestHeaders:{...r,...o},signal:n}),"addPullRequestToProject","mutation",a)},requestReview(a,r,n){return t(o=>e.request({document:xl,variables:a,requestHeaders:{...r,...o},signal:n}),"requestReview","mutation",a)},mergePullRequest(a,r,n){return t(o=>e.request({document:_l,variables:a,requestHeaders:{...r,...o},signal:n}),"mergePullRequest","mutation",a)},addPullRequestToMergeQueue(a,r,n){return t(o=>e.request({document:Ul,variables:a,requestHeaders:{...r,...o},signal:n}),"addPullRequestToMergeQueue","mutation",a)},removePullRequestFromMergeQueue(a,r,n){return t(o=>e.request({document:vl,variables:a,requestHeaders:{...r,...o},signal:n}),"removePullRequestFromMergeQueue","mutation",a)},enablePullRequestAutoMerge(a,r,n){return t(o=>e.request({document:Tl,variables:a,requestHeaders:{...r,...o},signal:n}),"enablePullRequestAutoMerge","mutation",a)},disablePullRequestAutoMerge(a,r,n){return t(o=>e.request({document:wl,variables:a,requestHeaders:{...r,...o},signal:n}),"disablePullRequestAutoMerge","mutation",a)},createPullRequest(a,r,n){return t(o=>e.request({document:Ol,variables:a,requestHeaders:{...r,...o},signal:n}),"createPullRequest","mutation",a)},initPullRequest(a,r,n){return t(o=>e.request({document:Bl,variables:a,requestHeaders:{...r,...o},signal:n}),"initPullRequest","mutation",a)},searchRepositories(a,r,n){return t(o=>e.request({document:Ll,variables:a,requestHeaders:{...r,...o},signal:n}),"searchRepositories","query",a)},myLatestRepositories(a,r,n){return t(o=>e.request({document:ql,variables:a,requestHeaders:{...r,...o},signal:n}),"myLatestRepositories","query",a)},milestonesForRepository(a,r,n){return t(o=>e.request({document:Nl,variables:a,requestHeaders:{...r,...o},signal:n}),"milestonesForRepository","query",a)},commentsForPullRequest(a,r,n){return t(o=>e.request({document:Vl,variables:a,requestHeaders:{...r,...o},signal:n}),"commentsForPullRequest","query",a)},dataForRepository(a,r,n){return t(o=>e.request({document:kl,variables:a,requestHeaders:{...r,...o},signal:n}),"dataForRepository","query",a)},searchRepositoryBranches(a,r,n){return t(o=>e.request({document:Fl,variables:a,requestHeaders:{...r,...o},signal:n}),"searchRepositoryBranches","query",a)},repositoryIssues(a,r,n){return t(o=>e.request({document:jl,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryIssues","query",a)},repositoryReleases(a,r,n){return t(o=>e.request({document:zl,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryReleases","query",a)},addStar(a,r,n){return t(o=>e.request({document:Hl,variables:a,requestHeaders:{...r,...o},signal:n}),"addStar","mutation",a)},removeStar(a,r,n){return t(o=>e.request({document:Gl,variables:a,requestHeaders:{...r,...o},signal:n}),"removeStar","mutation",a)},myStarredRepositories(a,r,n){return t(o=>e.request({document:$l,variables:a,requestHeaders:{...r,...o},signal:n}),"myStarredRepositories","query",a)},getViewer(a,r,n){return t(o=>e.request({document:Ql,variables:a,requestHeaders:{...r,...o},signal:n}),"getViewer","query",a)},getViewerStats(a,r,n){return t(o=>e.request({document:Wl,variables:a,requestHeaders:{...r,...o},signal:n}),"getViewerStats","query",a)},getViewerStatsDetails(a,r,n){return t(o=>e.request({document:Kl,variables:a,requestHeaders:{...r,...o},signal:n}),"getViewerStatsDetails","query",a)}}}var Nr=null,Vr=null,ri=null,Jl=(0,ti.getPreferenceValues)();function Zl({token:e,type:t}){let a=t==="personal"?`token ${e}`:`bearer ${e}`;ri=e,Nr=Xo(new Ta("https://api.github.com/graphql",{headers:{authorization:a}})),Vr=new ei.Octokit({auth:e,request:{fetch:za}})}var ni=ai.OAuthService.github({personalAccessToken:Jl.personalAccessToken,scope:"notifications repo project read:org read:user read:packages",onAuthorize:Zl});function se(){if(!Nr||!Vr)throw new Error("GitHub clients not initialized");return{github:Nr,octokit:Vr,token:ri}}var li=require("@raycast/api");var v=require("@raycast/api"),oi=require("date-fns");function Xl(e,t){return`notification_referrer_id=${Buffer.from(`018:NotificationThread${e}:${t}`).toString("base64")}`}function kr(e,t,a,r=""){let n=e.replace("api.github.com/repos","github.com");if(n.indexOf("/pulls/")!==-1&&(n=n.replace("/pulls/","/pull/")),n.indexOf("/releases/")!==-1&&(n=n.replace("/repos",""),n=n.substring(0,n.lastIndexOf("/"))),a){let o=Xl(t,a);return`${n}?${o}${r}`}return n}var ec=e=>e?/comments\/(?<id>\d+)/g.exec(e)?.groups?.id:void 0;async function ii(e,t){if(e.subject.url){let a=ec(e.subject.latest_comment_url);return kr(e.subject.url,e.id,t,a?"#issuecomment-"+a:void 0)}else{if(e.subject.type==="CheckSuite")return kr(`${e.repository.html_url}/actions`,e.id,t);if(e.subject.type==="Discussion"){let a=null;try{a=await rc(e)}catch(r){console.error("Failed to get discussion number",r)}return kr(`${e.repository.html_url}/discussions/${a??""}`,e.id,t)}}return e.url}async function si(e){try{if(e.subject.type==="PullRequest"){let{octokit:a}=se(),r=await a.pulls.get({owner:e.repository.owner.login,repo:e.repository.name,pull_number:parseInt(e.subject.url.split("/").at(-1))});return r.data.merged?{value:{source:"pull-request-merged.svg",tintColor:v.Color.Purple},tooltip:"Merged"}:r.data.state==="closed"?{value:{source:"pull-request-closed.svg",tintColor:v.Color.Red},tooltip:"Closed"}:r.data.draft?{value:{source:"pull-request-draft.svg",tintColor:v.Color.SecondaryText},tooltip:"Draft"}:{value:{source:"pull-request-open.svg",tintColor:v.Color.Green},tooltip:"Open"}}if(e.subject.type==="Issue"){let{octokit:a}=se(),r=await a.rest.issues.get({owner:e.repository.owner.login,repo:e.repository.name,issue_number:parseInt(e.subject.url.split("/").at(-1))});return r.data.state==="closed"?r.data.state_reason==="completed"?{value:{source:"issue-closed.svg",tintColor:v.Color.Purple},tooltip:"Closed as completed"}:r.data.state_reason==="not_planned"?{value:{source:"skip.svg",tintColor:v.Color.SecondaryText},tooltip:"Closed as not planned"}:{value:{source:"issue-closed.svg",tintColor:v.Color.Purple},tooltip:"Closed"}:{value:{source:"issue-open.svg",tintColor:v.Color.Green},tooltip:"Open"}}let t;switch(e.subject.type){case"Commit":t={value:{source:"commit.svg"},tooltip:"Commit"};break;case"Release":t={value:{source:"tag.svg",tintColor:v.Color.Blue},tooltip:"Release"};break;case"CheckSuite":t={value:e.subject.title.match(/(succeeded)/i)?{source:v.Icon.CheckCircle,tintColor:v.Color.Green}:e.subject.title.match(/(failed)/i)?{source:v.Icon.XMarkCircle,tintColor:v.Color.Red}:e.subject.title.match(/(skipped|cancelled)/i)?{source:"skip.svg",tintColor:v.Color.SecondaryText}:{source:v.Icon.QuestionMarkCircle,tintColor:v.Color.SecondaryText},tooltip:"Workflow Run"};break;case"Discussion":t={value:{source:"comment-discussion.svg"},tooltip:"Comment"};break;case"RepositoryInvitation":t={value:{source:"mail.svg"},tooltip:"Repository Invitation"};break;case"RepositoryVulnerabilityAlert":t={value:{source:"alert.svg"},tooltip:"Repository} Vulnerability Alert"};break;default:t={value:{source:v.Icon.Circle},tooltip:"Unknown"};break}return t.tooltip=`Subject type: ${t.tooltip}`,t}catch{return{value:{source:v.Icon.Warning,tintColor:v.Color.Red},tooltip:"Could not load icon"}}}function Yt(e){switch(e.subject.type){case"PullRequest":return"Pull Request";case"CheckSuite":return"Check Suite";case"RepositoryInvitation":return"Repository Invitation";case"RepositoryVulnerabilityAlert":return"Repository Vulnerability Alert";default:return e.subject.type}}function Ga(e){let t=tc(e),a=ac(e);return a?`${a} \uFF65 ${e.repository.full_name} \uFF65 ${t}`:`${e.repository.full_name} \uFF65 ${t}`}function tc(e){switch(e.reason){case"assign":return"Assigned";case"author":return"Author";case"comment":return"Commented";case"ci_activity":return"CI Activity";case"invitation":return"Invited";case"manual":return"Subscribed";case"mention":return"Mentioned";case"review_requested":return"Review Requested";case"security_alert":return"Security Alert";case"state_change":return"Changed";case"subscribed":return"Watching";case"team_mention":return"Team Mentioned";default:return""}}function ac(e){if(e.subject.type!=="Issue"&&e.subject.type!=="PullRequest")return;let t=e.subject.url?.split("/").at(-1);return t?`#${t}`:void 0}function ui(e){return`Updated: ${(0,oi.format)(e,"EEEE d MMMM yyyy 'at' HH:mm")}`}async function rc(e){let{github:t}=se(),a=e.repository.full_name,r=e.updated_at.split("T")[0],n=e.subject.title;return(await t.getGitHubDiscussionNumber({filter:`repo:${a} updated:>=${r} in:title ${n}`}))?.search?.nodes?.[0]?.number??null}var A=require("@raycast/api"),pi=T(Fe());function fe(e){return e?.response?.errors?e.response.errors[0].message:e instanceof Error?e.message:String(e)}var k=require("react/jsx-runtime");function Fr({notification:e,userId:t,mutateList:a}){let{octokit:r}=se(),{data:n}=(0,pi.usePromise)((y,M)=>ii(y,M),[e,t]);async function o(){await(0,A.showToast)({style:A.Toast.Style.Animated,title:"Marking notification as read"});try{await r.activity.markThreadAsRead({thread_id:parseInt(e.id)}),await a(),await(0,A.launchCommand)({name:"unread-notifications",type:A.LaunchType.UserInitiated}),await(0,A.showToast)({style:A.Toast.Style.Success,title:"Marked notification as read"})}catch(y){await(0,A.showToast)({style:A.Toast.Style.Failure,title:"Failed marking notification as read",message:fe(y)})}}async function u(){await(0,A.showToast)({style:A.Toast.Style.Animated,title:"Marking notification as done"});try{await r.activity.markThreadAsDone({thread_id:parseInt(e.id)}),await a(),await(0,A.launchCommand)({name:"unread-notifications",type:A.LaunchType.UserInitiated}),await(0,A.showToast)({style:A.Toast.Style.Success,title:"Marked notification as done"})}catch(y){await(0,A.showToast)({style:A.Toast.Style.Failure,title:"Failed marking notification as done",message:fe(y)})}}async function i(y){try{n&&await(0,A.open)(n),y&&(await r.activity.markThreadAsRead({thread_id:parseInt(e.id)}),await a())}catch(M){await(0,A.showToast)({style:A.Toast.Style.Failure,title:"Failed opening notification",message:fe(M)})}}async function s(){try{let M=(await r.repos.listInvitationsForAuthenticatedUser()).data.find(l=>l.repository.url===e.repository.url);await r.repos.acceptInvitationForAuthenticatedUser({invitation_id:M?.id||0}),(0,A.open)(e.repository.html_url),await a()}catch(y){await(0,A.showToast)({style:A.Toast.Style.Failure,title:"Failed opening notification",message:fe(y)})}}async function p(){await(0,A.showToast)({style:A.Toast.Style.Animated,title:"Marking all notifications as read"});try{await r.activity.markNotificationsAsRead(),await a(),await(0,A.launchCommand)({name:"unread-notifications",type:A.LaunchType.UserInitiated}),await(0,A.showToast)({style:A.Toast.Style.Success,title:"Marked all notifications as read"})}catch(y){await(0,A.showToast)({style:A.Toast.Style.Failure,title:"Failed marking all notification as read",message:fe(y)})}}async function c(){await(0,A.showToast)({style:A.Toast.Style.Animated,title:"Unsubscribing"});try{await r.activity.deleteThreadSubscription({thread_id:parseInt(e.id)}),await a(),await(0,A.showToast)({style:A.Toast.Style.Success,title:"Unsubscribed"})}catch(y){await(0,A.showToast)({style:A.Toast.Style.Failure,title:"Failed unsubscribing",message:fe(y)})}}let d=e.subject.type==="RepositoryInvitation";return(0,k.jsxs)(A.ActionPanel,{title:Ga(e),children:[(0,k.jsx)(A.Action,{title:d?"Accept Invitation":"Open in Browser",icon:A.Icon.Globe,onAction:()=>d?s():i(e.unread)}),e.unread?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(A.Action,{title:"Mark as Read",icon:A.Icon.Circle,onAction:o}),(0,k.jsx)(A.Action,{title:"Mark All as Read",icon:A.Icon.Circle,shortcut:{macOS:{modifiers:["cmd","shift"],key:"enter"},Windows:{modifiers:["ctrl","shift"],key:"enter"}},onAction:p})]}):null,(0,k.jsx)(A.Action,{title:"Mark as Done",icon:A.Icon.Circle,onAction:u,shortcut:{macOS:{modifiers:["cmd","shift"],key:"d"},Windows:{modifiers:["ctrl","shift"],key:"d"}}}),(0,k.jsx)(A.Action,{title:"Unsubscribe",icon:A.Icon.BellDisabled,shortcut:A.Keyboard.Shortcut.Common.Pin,onAction:c}),(0,k.jsxs)(A.ActionPanel.Section,{children:[n?(0,k.jsx)(A.Action.CopyToClipboard,{content:n,title:`Copy ${Yt(e)} URL`,shortcut:{macOS:{modifiers:["cmd","shift"],key:","},Windows:{modifiers:["ctrl","shift"],key:","}}}):null,(0,k.jsx)(A.Action.CopyToClipboard,{content:e.subject.title,title:`Copy ${Yt(e)} Title`,shortcut:{macOS:{modifiers:["ctrl","shift"],key:","},Windows:{modifiers:["alt","shift"],key:","}}})]}),(0,k.jsx)(A.ActionPanel.Section,{children:(0,k.jsx)(A.Action,{icon:A.Icon.ArrowClockwise,title:"Refresh",onAction:a,shortcut:A.Keyboard.Shortcut.Common.Refresh})})]})}var jr=require("react/jsx-runtime");function $a({notification:e,userId:t,mutateList:a}){let r=new Date(e.updated_at);return(0,jr.jsx)(li.List.Item,{icon:{value:e.icon.value,tooltip:Yt(e)},title:e.subject.title,subtitle:Ga(e),accessories:[{date:r,tooltip:ui(r)}],actions:(0,jr.jsx)(Fr,{notification:e,userId:t,mutateList:a})})}var ve=require("@raycast/api");var Si=T(Fe());var Qa=require("node:child_process");var yi=require("node:util"),W=require("@raycast/api"),nc=T(Fe());var fd=[{title:"github.dev",baseUrl:"https://github.dev/",icon:{source:"github-dev.svg",tintColor:W.Color.PrimaryText},shortcut:W.Keyboard.Shortcut.Common.Open},{title:"VS Code for the Web",baseUrl:"https://vscode.dev/github/",icon:{source:"vscode.svg",tintColor:W.Color.PrimaryText},shortcut:{macOS:{modifiers:["cmd"],key:"v"},Windows:{modifiers:["ctrl"],key:"v"}}},{title:"CodeSandbox",baseUrl:"https://codesandbox.io/s/github/",icon:{source:"codesandbox.svg",tintColor:W.Color.PrimaryText}},{title:"Replit",baseUrl:"https://repl.it/github/",icon:{source:"replit.svg",tintColor:W.Color.PrimaryText}},{title:"Gitpod",baseUrl:"https://gitpod.io/#https://github.com/",icon:{source:"gitpod.svg",tintColor:W.Color.PrimaryText}},{title:"Glitch",baseUrl:"https://glitch.com/edit/#!/import/github/",icon:{source:"glitch.svg",tintColor:W.Color.PrimaryText}},{title:"Sourcegraph",baseUrl:"https://sourcegraph.com/github.com/",icon:{source:"sourcegraph.svg",tintColor:W.Color.PrimaryText},shortcut:{macOS:{modifiers:["cmd"],key:"s"},Windows:{modifiers:["ctrl"],key:"s"}}},{title:"DeepWiki",baseUrl:"https://deepwiki.com/",icon:{source:"deepwiki.png"},shortcut:{macOS:{modifiers:["cmd"],key:"d"},Windows:{modifiers:["ctrl"],key:"d"}}},{title:"VS Code Remote Repositories",baseUrl:"vscode://GitHub.remotehub/open?url=https://github.com/",icon:{source:"vscode.svg",tintColor:W.Color.PrimaryText}}];var oc=[{title:"Relevance",value:""},{title:"Last Update",value:"sort:updated-desc"},{title:"Name",value:"sort:name-asc"},{title:"Stars",value:"sort:stars-desc"},{title:"Forks",value:"sort:forks-desc"}],ic=[{title:"Last Pushed",value:"pushed_at:desc"},{title:"Name",value:"name:asc"},{title:"Stars",value:"stargazers:desc"}],sc=[{title:"Recently Starred",value:"starred_at:desc"},{title:"Oldest Starred",value:"starred_at:asc"}],Pd=oc[0].value,Ed=ic[0].value,Cd=sc[0].value;var hd=(0,yi.promisify)(Qa.execFile);var Jt="\x1B",ci="\x07",Dd=new RegExp(`${Jt}][^${ci}${Jt}]*(?:${ci}|${Jt}\\\\)`,"g"),xd=new RegExp(`${Jt}\\[[0-9;?]*[A-Za-z]`,"g"),_d=new RegExp(`${Jt}\\([0-9A-Za-z]`,"g");var di=T(Fe());function Wa(){let{github:e}=se(),{data:t}=(0,di.useCachedPromise)(async()=>(await e.getViewer()).viewer);return t}function bi(){let{github:e}=se(),r=["user:@me",...Wa()?.organizations?.nodes?.flatMap(n=>n?.login?[`org:${n.login}`]:[])??[]].join(" ");return(0,Si.useCachedPromise)(async n=>{let u=(await Promise.allSettled(n.split(" ").map(i=>e.searchRepositories({query:`${i} archived:false sort:updated-desc`,numberOfItems:100})))).flatMap(i=>i.status==="fulfilled"?i.value.search.nodes:[]);return[...new Map(u.map(i=>[i.id,i])).values()].sort((i,s)=>new Date(s.updatedAt).getTime()-new Date(i.updatedAt).getTime())},[r])}var Et=require("react/jsx-runtime");function zr({setSelectedRepository:e,withAllRepositories:t=!0}){let{data:a}=bi();return(0,Et.jsxs)(ve.List.Dropdown,{tooltip:"Select Repository",storeValue:!0,onChange:e,children:[t?(0,Et.jsx)(ve.List.Dropdown.Item,{value:"",title:"All Repositories",icon:ve.Icon.List}):null,a&&a.length>0?(0,Et.jsx)(ve.List.Dropdown.Section,{children:a.map(r=>(0,Et.jsx)(ve.List.Dropdown.Item,{title:r.nameWithOwner,value:r.nameWithOwner,icon:{source:r.owner.avatarUrl,mask:ve.Image.Mask.Circle}},r.id))}):null]})}var gi=require("@raycast/api"),uc=require("lodash");var Ii=require("@raycast/api");function Mi(e){return[...new Map(e.map(t=>[t.id,t])).values()]}var mi=T(Fe());var Ri=(0,mi.withAccessToken)(ni);var Te=require("react/jsx-runtime"),Hr=25;function pc(){let{octokit:e}=se(),t=Wa(),[a,r]=(0,Ka.useState)(null),{data:n,isLoading:o,error:u,mutate:i,pagination:s}=(0,Ai.useCachedPromise)(y=>async({cursor:M})=>{let l=M?Number(M):1,b=y?await e.activity.listRepoNotificationsForAuthenticatedUser({owner:y.split("/")[0],repo:y.split("/")[1],all:!0,per_page:Hr,page:l}):await e.activity.listNotificationsForAuthenticatedUser({all:!0,per_page:Hr,page:l}),S=b.headers.link?.includes('rel="next"')??b.data.length===Hr;return{data:await Promise.all(b.data.map(async R=>({...R,icon:await si(R)}))),hasMore:S,cursor:S?String(l+1):void 0}},[a]),p=(0,Ka.useMemo)(()=>Mi(n??[]),[n]),[c,d]=(0,fi.partition)(p,y=>y.unread);return(0,Te.jsxs)(at.List,{isLoading:o,searchBarPlaceholder:"Filter by title",searchBarAccessory:(0,Te.jsx)(zr,{setSelectedRepository:r}),pagination:s,children:[c.length>0?(0,Te.jsx)(at.List.Section,{title:"Unread",children:c.map(y=>(0,Te.jsx)($a,{notification:y,userId:t?.id,mutateList:i},y.id))}):null,d.length>0?(0,Te.jsx)(at.List.Section,{title:"Read",children:d.map(y=>(0,Te.jsx)($a,{notification:y,userId:t?.id,mutateList:i},y.id))}):null,(0,Te.jsx)(at.List.EmptyView,{icon:u?at.Icon.Warning:void 0,title:u?"Failed to Load Notifications":"No recent notifications found",description:u?fe(u):void 0})]})}var lc=Ri(pc);
