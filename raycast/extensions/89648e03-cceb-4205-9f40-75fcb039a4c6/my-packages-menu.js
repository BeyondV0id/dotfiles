"use strict";var Ri=Object.create;var Kt=Object.defineProperty;var Ai=Object.getOwnPropertyDescriptor;var fi=Object.getOwnPropertyNames;var Pi=Object.getPrototypeOf,Ei=Object.prototype.hasOwnProperty;var Ga=(e,t,a)=>()=>{if(a)throw a[0];try{return e&&(t=e(e=0)),t}catch(n){throw a=[n],n}};var E=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(a){throw t=0,a}},et=(e,t)=>{for(var a in t)Kt(e,a,{get:t[a],enumerable:!0})},Wt=(e,t,a,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of fi(t))!Ei.call(e,r)&&r!==a&&Kt(e,r,{get:()=>t[r],enumerable:!(n=Ai(t,r))||n.enumerable});return e},H=(e,t,a)=>(Wt(e,t,"default"),a&&Wt(a,t,"default")),L=(e,t,a)=>(a=e!=null?Ri(Pi(e)):{},Wt(t||!e||!e.__esModule?Kt(a,"default",{value:e,enumerable:!0}):a,e)),Ci=e=>Wt(Kt({},"__esModule",{value:!0}),e);var nn=E(Zt=>{"use strict";Object.defineProperty(Zt,"__esModule",{value:!0});Zt.useDeepMemo=void 0;var Za=require("react"),js=require("dequal/lite");function Fs(e){let t=(0,Za.useRef)(e),a=(0,Za.useRef)(0);return(0,js.dequal)(e,t.current)||(t.current=e,a.current+=1),(0,Za.useMemo)(()=>t.current,[a.current])}Zt.useDeepMemo=Fs});var fe=E(Xt=>{"use strict";Object.defineProperty(Xt,"__esModule",{value:!0});Xt.useLatest=void 0;var zs=require("react");function Hs(e){let t=(0,zs.useRef)(e);return t.current=e,t}Xt.useLatest=Hs});var Ct=E(Se=>{"use strict";var Gs=Se&&Se.__createBinding||(Object.create?(function(e,t,a,n){n===void 0&&(n=a);var r=Object.getOwnPropertyDescriptor(t,a);(!r||("get"in r?!t.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,r)}):(function(e,t,a,n){n===void 0&&(n=a),e[n]=t[a]})),$s=Se&&Se.__setModuleDefault||(Object.create?(function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}):function(e,t){e.default=t}),sn=Se&&Se.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var a in e)a!=="default"&&Object.prototype.hasOwnProperty.call(e,a)&&Gs(t,e,a);return $s(t,e),t};Object.defineProperty(Se,"__esModule",{value:!0});Se.showFailureToast=void 0;var Qs=sn(require("fs")),Ws=sn(require("path")),tt=require("@raycast/api");function Ks(e,t){let a=e instanceof Error?e.message:String(e);return(0,tt.showToast)({style:tt.Toast.Style.Failure,title:t?.title??"Something went wrong",message:t?.message??a,primaryAction:t?.primaryAction??on(e),secondaryAction:t?.primaryAction?on(e):void 0})}Se.showFailureToast=Ks;var on=e=>{let t=!0,a="[Extension Name]...",n="";try{let u=JSON.parse(Qs.readFileSync(Ws.join(tt.environment.assetsPath,"..","package.json"),"utf8"));a=`[${u.title}]...`,n=`https://raycast.com/${u.owner||u.author}/${u.name}`,(!u.owner||u.access==="public")&&(t=!1)}catch{}let r=tt.environment.isDevelopment||t,o=e instanceof Error?e?.stack||e?.message||"":String(e);return{title:r?"Copy Logs":"Report Error",onAction(u){u.hide(),r?tt.Clipboard.copy(o):(0,tt.open)(`https://github.com/raycast/extensions/issues/new?&labels=extension%2Cbug&template=extension_bug_report.yml&title=${encodeURIComponent(a)}&extension-url=${encodeURI(n)}&description=${encodeURIComponent(`#### Error:
\`\`\`
${o}
\`\`\`
`)}`)}}}});var at=E(ea=>{"use strict";Object.defineProperty(ea,"__esModule",{value:!0});ea.usePromise=void 0;var K=require("react"),ht=require("@raycast/api"),Ys=nn(),Ue=fe(),Js=Ct();function Zs(e,t,a){let n=(0,K.useRef)(0),[r,o]=(0,K.useState)({isLoading:!0}),u=(0,Ue.useLatest)(e),s=(0,Ue.useLatest)(a?.abortable),i=(0,Ue.useLatest)(t||[]),p=(0,Ue.useLatest)(a?.onError),c=(0,Ue.useLatest)(a?.onData),y=(0,Ue.useLatest)(a?.onWillExecute),I=(0,Ue.useLatest)(a?.failureToastOptions),m=(0,Ue.useLatest)(r.data),l=(0,K.useRef)(),b=(0,K.useRef)({page:0}),d=(0,K.useRef)(!1),S=(0,K.useRef)(!0),R=(0,K.useRef)(50),f=(0,K.useCallback)((...j)=>{let v=++n.current;s.current&&(s.current.current?.abort(),s.current.current=new AbortController),y.current?.(j),o(C=>({...C,isLoading:!0}));let se=Xs(u.current)(...j);function ce(C){return C.name=="AbortError"||v===n.current&&(p.current?p.current(C):ht.environment.launchType!==ht.LaunchType.Background&&(0,Js.showFailureToast)(C,{title:"Failed to fetch latest data",primaryAction:{title:"Retry",onAction(W){W.hide(),l.current?.(...i.current||[])}},...I.current}),o({error:C,isLoading:!1})),C}return typeof se=="function"?(d.current=!0,se(b.current).then(({data:C,hasMore:W,cursor:ft})=>(v===n.current&&(b.current&&(b.current.cursor=ft,b.current.lastItem=C?.[C.length-1]),c.current&&c.current(C,b.current),W&&(R.current=C.length),S.current=W,o(Ha=>b.current.page===0?{data:C,isLoading:!1}:{data:(Ha.data||[])?.concat(C),isLoading:!1})),C),C=>(S.current=!1,ce(C)))):(d.current=!1,se.then(C=>(v===n.current&&(c.current&&c.current(C),o({data:C,isLoading:!1})),C),ce))},[s,c,p,i,u,o,l,y,b,I]);l.current=f;let M=(0,K.useCallback)(()=>{b.current={page:0};let j=i.current||[];return f(...j)},[f,i]),P=(0,K.useCallback)(async(j,v)=>{let se;try{if(v?.optimisticUpdate){typeof v?.rollbackOnError!="function"&&v?.rollbackOnError!==!1&&(se=structuredClone(m.current?.value));let ce=v.optimisticUpdate;o(C=>({...C,data:ce(C.data)}))}return await j}catch(ce){if(typeof v?.rollbackOnError=="function"){let C=v.rollbackOnError;o(W=>({...W,data:C(W.data)}))}else v?.optimisticUpdate&&v?.rollbackOnError!==!1&&o(C=>({...C,data:se}));throw ce}finally{v?.shouldRevalidateAfter!==!1&&(ht.environment.launchType===ht.LaunchType.Background||ht.environment.commandMode==="menu-bar"?await M():M())}},[M,m,o]),A=(0,K.useCallback)(()=>{b.current.page+=1;let j=i.current||[];f(...j)},[b,i,f]);(0,K.useEffect)(()=>{b.current={page:0},a?.execute!==!1?f(...t||[]):s.current&&s.current.current?.abort()},[(0,Ys.useDeepMemo)([t,a?.execute,f]),s,b]),(0,K.useEffect)(()=>()=>{s.current&&s.current.current?.abort()},[s]);let _=a?.execute!==!1?r.isLoading:!1,V={...r,isLoading:_},ie=d.current?{pageSize:R.current,hasMore:S.current,onLoadMore:A}:void 0;return{...V,revalidate:M,mutate:P,pagination:ie}}ea.usePromise=Zs;function Xs(e){return e===Promise.all||e===Promise.race||e===Promise.resolve||e===Promise.reject?e.bind(Promise):e}});var ve=E(be=>{"use strict";var eu=be&&be.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(be,"__esModule",{value:!0});be.hash=be.reviver=be.replacer=void 0;var tu=eu(require("object-hash"));function au(e,t){let a=this[e];return a instanceof Date?`__raycast_cached_date__${a.toString()}`:Buffer.isBuffer(a)?`__raycast_cached_buffer__${a.toString("base64")}`:t}be.replacer=au;function ru(e,t){return typeof t=="string"&&t.startsWith("__raycast_cached_date__")?new Date(t.replace("__raycast_cached_date__","")):typeof t=="string"&&t.startsWith("__raycast_cached_buffer__")?Buffer.from(t.replace("__raycast_cached_buffer__",""),"base64"):t}be.reviver=ru;function nu(e,t){return(0,tu.default)(e,{replacer:a=>a instanceof URLSearchParams?a.toString():a,...t})}be.hash=nu});var aa=E(ta=>{"use strict";Object.defineProperty(ta,"__esModule",{value:!0});ta.useCachedState=void 0;var Xa=require("react"),ou=require("@raycast/api"),er=fe(),un=ve(),iu=Symbol("cache without namespace"),pn=new Map;function su(e,t,a){let n=a?.cacheNamespace||iu,r=pn.get(n)||pn.set(n,new ou.Cache({namespace:a?.cacheNamespace})).get(n);if(!r)throw new Error("Missing cache");let o=(0,er.useLatest)(e),u=(0,er.useLatest)(t),s=(0,Xa.useSyncExternalStore)(r.subscribe,()=>{try{return r.get(o.current)}catch(y){console.error("Could not get Cache data:",y);return}}),i=(0,Xa.useMemo)(()=>{if(typeof s<"u"){if(s==="undefined")return;try{return JSON.parse(s,un.reviver)}catch(y){return console.warn("The cached data is corrupted",y),u.current}}else return u.current},[s,u]),p=(0,er.useLatest)(i),c=(0,Xa.useCallback)(y=>{let I=typeof y=="function"?y(p.current):y;if(typeof I>"u")r.set(o.current,"undefined");else{let m=JSON.stringify(I,un.replacer);r.set(o.current,m)}return I},[r,o,p]);return[i,c]}ta.useCachedState=su});var xt=E(ra=>{"use strict";Object.defineProperty(ra,"__esModule",{value:!0});ra.useCachedPromise=void 0;var Dt=require("react"),uu=aa(),pu=at(),lu=fe(),ln=ve(),rt=Symbol();function cu(e,t,a){let{initialData:n,keepPreviousData:r,internal_cacheKeySuffix:o,...u}=a||{},s=(0,Dt.useRef)(),[i,p]=(0,uu.useCachedState)((0,ln.hash)(t||[])+o,rt,{cacheNamespace:(0,ln.hash)(e)}),c=(0,Dt.useRef)(i!==rt?i:n),y=(0,Dt.useRef)(void 0),{mutate:I,revalidate:m,...l}=(0,pu.usePromise)(e,t||[],{...u,onData(f,M){y.current=M,u.onData&&u.onData(f,M),!(M&&M.page>0)&&(s.current="promise",c.current=f,p(f))}}),b,d=l.pagination;y.current&&y.current.page>0&&l.data?b=l.data:s.current==="promise"?b=c.current:r&&i!==rt?(b=i,d&&(d.hasMore=!0,d.pageSize=i.length)):r&&i===rt?b=c.current:i!==rt?(b=i,d&&(d.hasMore=!0,d.pageSize=i.length)):b=n;let S=(0,lu.useLatest)(b),R=(0,Dt.useCallback)(async(f,M)=>{let P;try{if(M?.optimisticUpdate){typeof M?.rollbackOnError!="function"&&M?.rollbackOnError!==!1&&(P=structuredClone(S.current));let A=M.optimisticUpdate(S.current);s.current="cache",c.current=A,p(A)}return await I(f,{shouldRevalidateAfter:M?.shouldRevalidateAfter})}catch(A){if(typeof M?.rollbackOnError=="function"){let _=M.rollbackOnError(S.current);s.current="cache",c.current=_,p(_)}else M?.optimisticUpdate&&M?.rollbackOnError!==!1&&(s.current="cache",c.current=P,p(P));throw A}},[p,I,S,c,s]);return(0,Dt.useEffect)(()=>{i!==rt&&(s.current="cache",c.current=i)},[i]),{data:b,isLoading:l.isLoading,error:l.error,mutate:y.current&&y.current.page>0?I:R,pagination:d,revalidate:m}}ra.useCachedPromise=cu});var fn=E((pe,An)=>{"use strict";Object.defineProperty(pe,"__esModule",{value:!0});function st(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var ue=st(require("stream")),Sn=st(require("http")),oa=st(require("url")),bn=st(require("whatwg-url")),yu=st(require("https")),ze=st(require("zlib")),du=ue.Readable,Pe=Symbol("buffer"),tr=Symbol("type"),Ut=class e{constructor(){this[tr]="";let t=arguments[0],a=arguments[1],n=[],r=0;if(t){let u=t,s=Number(u.length);for(let i=0;i<s;i++){let p=u[i],c;p instanceof Buffer?c=p:ArrayBuffer.isView(p)?c=Buffer.from(p.buffer,p.byteOffset,p.byteLength):p instanceof ArrayBuffer?c=Buffer.from(p):p instanceof e?c=p[Pe]:c=Buffer.from(typeof p=="string"?p:String(p)),r+=c.length,n.push(c)}}this[Pe]=Buffer.concat(n);let o=a&&a.type!==void 0&&String(a.type).toLowerCase();o&&!/[^\u0020-\u007E]/.test(o)&&(this[tr]=o)}get size(){return this[Pe].length}get type(){return this[tr]}text(){return Promise.resolve(this[Pe].toString())}arrayBuffer(){let t=this[Pe],a=t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength);return Promise.resolve(a)}stream(){let t=new du;return t._read=function(){},t.push(this[Pe]),t.push(null),t}toString(){return"[object Blob]"}slice(){let t=this.size,a=arguments[0],n=arguments[1],r,o;a===void 0?r=0:a<0?r=Math.max(t+a,0):r=Math.min(a,t),n===void 0?o=t:n<0?o=Math.max(t+n,0):o=Math.min(n,t);let u=Math.max(o-r,0),i=this[Pe].slice(r,r+u),p=new e([],{type:arguments[2]});return p[Pe]=i,p}};Object.defineProperties(Ut.prototype,{size:{enumerable:!0},type:{enumerable:!0},slice:{enumerable:!0}});Object.defineProperty(Ut.prototype,Symbol.toStringTag,{value:"Blob",writable:!1,enumerable:!1,configurable:!0});function q(e,t,a){Error.call(this,e),this.message=e,this.type=t,a&&(this.code=this.errno=a.code),Error.captureStackTrace(this,this.constructor)}q.prototype=Object.create(Error.prototype);q.prototype.constructor=q;q.prototype.name="FetchError";var or;try{or=require("encoding").convert}catch{}var Ce=Symbol("Body internals"),cn=ue.PassThrough;function w(e){var t=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.size;let r=n===void 0?0:n;var o=a.timeout;let u=o===void 0?0:o;e==null?e=null:In(e)?e=Buffer.from(e.toString()):Tt(e)||Buffer.isBuffer(e)||(Object.prototype.toString.call(e)==="[object ArrayBuffer]"?e=Buffer.from(e):ArrayBuffer.isView(e)?e=Buffer.from(e.buffer,e.byteOffset,e.byteLength):e instanceof ue||(e=Buffer.from(String(e)))),this[Ce]={body:e,disturbed:!1,error:null},this.size=r,this.timeout=u,e instanceof ue&&e.on("error",function(s){let i=s.name==="AbortError"?s:new q(`Invalid response body while trying to fetch ${t.url}: ${s.message}`,"system",s);t[Ce].error=i})}w.prototype={get body(){return this[Ce].body},get bodyUsed(){return this[Ce].disturbed},arrayBuffer(){return nt.call(this).then(function(e){return e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength)})},blob(){let e=this.headers&&this.headers.get("content-type")||"";return nt.call(this).then(function(t){return Object.assign(new Ut([],{type:e.toLowerCase()}),{[Pe]:t})})},json(){var e=this;return nt.call(this).then(function(t){try{return JSON.parse(t.toString())}catch(a){return w.Promise.reject(new q(`invalid json response body at ${e.url} reason: ${a.message}`,"invalid-json"))}})},text(){return nt.call(this).then(function(e){return e.toString()})},buffer(){return nt.call(this)},textConverted(){var e=this;return nt.call(this).then(function(t){return Su(t,e.headers)})}};Object.defineProperties(w.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0}});w.mixIn=function(e){for(let t of Object.getOwnPropertyNames(w.prototype))if(!(t in e)){let a=Object.getOwnPropertyDescriptor(w.prototype,t);Object.defineProperty(e,t,a)}};function nt(){var e=this;if(this[Ce].disturbed)return w.Promise.reject(new TypeError(`body used already for: ${this.url}`));if(this[Ce].disturbed=!0,this[Ce].error)return w.Promise.reject(this[Ce].error);let t=this.body;if(t===null)return w.Promise.resolve(Buffer.alloc(0));if(Tt(t)&&(t=t.stream()),Buffer.isBuffer(t))return w.Promise.resolve(t);if(!(t instanceof ue))return w.Promise.resolve(Buffer.alloc(0));let a=[],n=0,r=!1;return new w.Promise(function(o,u){let s;e.timeout&&(s=setTimeout(function(){r=!0,u(new q(`Response timeout while trying to fetch ${e.url} (over ${e.timeout}ms)`,"body-timeout"))},e.timeout)),t.on("error",function(i){i.name==="AbortError"?(r=!0,u(i)):u(new q(`Invalid response body while trying to fetch ${e.url}: ${i.message}`,"system",i))}),t.on("data",function(i){if(!(r||i===null)){if(e.size&&n+i.length>e.size){r=!0,u(new q(`content size at ${e.url} over limit: ${e.size}`,"max-size"));return}n+=i.length,a.push(i)}}),t.on("end",function(){if(!r){clearTimeout(s);try{o(Buffer.concat(a,n))}catch(i){u(new q(`Could not create Buffer from response body for ${e.url}: ${i.message}`,"system",i))}}})})}function Su(e,t){if(typeof or!="function")throw new Error("The package `encoding` must be installed to use the textConverted() function");let a=t.get("content-type"),n="utf-8",r,o;return a&&(r=/charset=([^;]*)/i.exec(a)),o=e.slice(0,1024).toString(),!r&&o&&(r=/<meta.+?charset=(['"])(.+?)\1/i.exec(o)),!r&&o&&(r=/<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(o),r||(r=/<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(o),r&&r.pop()),r&&(r=/charset=(.*)/i.exec(r.pop()))),!r&&o&&(r=/<\?xml.+?encoding=(['"])(.+?)\1/i.exec(o)),r&&(n=r.pop(),(n==="gb2312"||n==="gbk")&&(n="gb18030")),or(e,"UTF-8",n).toString()}function In(e){return typeof e!="object"||typeof e.append!="function"||typeof e.delete!="function"||typeof e.get!="function"||typeof e.getAll!="function"||typeof e.has!="function"||typeof e.set!="function"?!1:e.constructor.name==="URLSearchParams"||Object.prototype.toString.call(e)==="[object URLSearchParams]"||typeof e.sort=="function"}function Tt(e){return typeof e=="object"&&typeof e.arrayBuffer=="function"&&typeof e.type=="string"&&typeof e.stream=="function"&&typeof e.constructor=="function"&&typeof e.constructor.name=="string"&&/^(Blob|File)$/.test(e.constructor.name)&&/^(Blob|File)$/.test(e[Symbol.toStringTag])}function gn(e){let t,a,n=e.body;if(e.bodyUsed)throw new Error("cannot clone body after it is used");return n instanceof ue&&typeof n.getBoundary!="function"&&(t=new cn,a=new cn,n.pipe(t),n.pipe(a),e[Ce].body=t,n=a),n}function Mn(e){return e===null?null:typeof e=="string"?"text/plain;charset=UTF-8":In(e)?"application/x-www-form-urlencoded;charset=UTF-8":Tt(e)?e.type||null:Buffer.isBuffer(e)||Object.prototype.toString.call(e)==="[object ArrayBuffer]"||ArrayBuffer.isView(e)?null:typeof e.getBoundary=="function"?`multipart/form-data;boundary=${e.getBoundary()}`:e instanceof ue?null:"text/plain;charset=UTF-8"}function mn(e){let t=e.body;return t===null?0:Tt(t)?t.size:Buffer.isBuffer(t)?t.length:t&&typeof t.getLengthSync=="function"&&(t._lengthRetrievers&&t._lengthRetrievers.length==0||t.hasKnownLength&&t.hasKnownLength())?t.getLengthSync():null}function bu(e,t){let a=t.body;a===null?e.end():Tt(a)?a.stream().pipe(e):Buffer.isBuffer(a)?(e.write(a),e.end()):a.pipe(e)}w.Promise=global.Promise;var Rn=/[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/,ir=/[^\t\x20-\x7e\x80-\xff]/;function _t(e){if(e=`${e}`,Rn.test(e)||e==="")throw new TypeError(`${e} is not a legal HTTP header name`)}function yn(e){if(e=`${e}`,ir.test(e))throw new TypeError(`${e} is not a legal HTTP header value`)}function ot(e,t){t=t.toLowerCase();for(let a in e)if(a.toLowerCase()===t)return a}var U=Symbol("map"),te=class e{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:void 0;if(this[U]=Object.create(null),t instanceof e){let a=t.raw(),n=Object.keys(a);for(let r of n)for(let o of a[r])this.append(r,o);return}if(t!=null)if(typeof t=="object"){let a=t[Symbol.iterator];if(a!=null){if(typeof a!="function")throw new TypeError("Header pairs must be iterable");let n=[];for(let r of t){if(typeof r!="object"||typeof r[Symbol.iterator]!="function")throw new TypeError("Each header pair must be iterable");n.push(Array.from(r))}for(let r of n){if(r.length!==2)throw new TypeError("Each header pair must be a name/value tuple");this.append(r[0],r[1])}}else for(let n of Object.keys(t)){let r=t[n];this.append(n,r)}}else throw new TypeError("Provided initializer must be an object")}get(t){t=`${t}`,_t(t);let a=ot(this[U],t);return a===void 0?null:this[U][a].join(", ")}forEach(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:void 0,n=sr(this),r=0;for(;r<n.length;){var o=n[r];let u=o[0],s=o[1];t.call(a,s,u,this),n=sr(this),r++}}set(t,a){t=`${t}`,a=`${a}`,_t(t),yn(a);let n=ot(this[U],t);this[U][n!==void 0?n:t]=[a]}append(t,a){t=`${t}`,a=`${a}`,_t(t),yn(a);let n=ot(this[U],t);n!==void 0?this[U][n].push(a):this[U][t]=[a]}has(t){return t=`${t}`,_t(t),ot(this[U],t)!==void 0}delete(t){t=`${t}`,_t(t);let a=ot(this[U],t);a!==void 0&&delete this[U][a]}raw(){return this[U]}keys(){return ar(this,"key")}values(){return ar(this,"value")}[Symbol.iterator](){return ar(this,"key+value")}};te.prototype.entries=te.prototype[Symbol.iterator];Object.defineProperty(te.prototype,Symbol.toStringTag,{value:"Headers",writable:!1,enumerable:!1,configurable:!0});Object.defineProperties(te.prototype,{get:{enumerable:!0},forEach:{enumerable:!0},set:{enumerable:!0},append:{enumerable:!0},has:{enumerable:!0},delete:{enumerable:!0},keys:{enumerable:!0},values:{enumerable:!0},entries:{enumerable:!0}});function sr(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"key+value";return Object.keys(e[U]).sort().map(t==="key"?function(n){return n.toLowerCase()}:t==="value"?function(n){return e[U][n].join(", ")}:function(n){return[n.toLowerCase(),e[U][n].join(", ")]})}var ur=Symbol("internal");function ar(e,t){let a=Object.create(pr);return a[ur]={target:e,kind:t,index:0},a}var pr=Object.setPrototypeOf({next(){if(!this||Object.getPrototypeOf(this)!==pr)throw new TypeError("Value of `this` is not a HeadersIterator");var e=this[ur];let t=e.target,a=e.kind,n=e.index,r=sr(t,a),o=r.length;return n>=o?{value:void 0,done:!0}:(this[ur].index=n+1,{value:r[n],done:!1})}},Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));Object.defineProperty(pr,Symbol.toStringTag,{value:"HeadersIterator",writable:!1,enumerable:!1,configurable:!0});function Iu(e){let t=Object.assign({__proto__:null},e[U]),a=ot(e[U],"Host");return a!==void 0&&(t[a]=t[a][0]),t}function gu(e){let t=new te;for(let a of Object.keys(e))if(!Rn.test(a))if(Array.isArray(e[a]))for(let n of e[a])ir.test(n)||(t[U][a]===void 0?t[U][a]=[n]:t[U][a].push(n));else ir.test(e[a])||(t[U][a]=[e[a]]);return t}var Te=Symbol("Response internals"),Mu=Sn.STATUS_CODES,ee=class e{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};w.call(this,t,a);let n=a.status||200,r=new te(a.headers);if(t!=null&&!r.has("Content-Type")){let o=Mn(t);o&&r.append("Content-Type",o)}this[Te]={url:a.url,status:n,statusText:a.statusText||Mu[n],headers:r,counter:a.counter}}get url(){return this[Te].url||""}get status(){return this[Te].status}get ok(){return this[Te].status>=200&&this[Te].status<300}get redirected(){return this[Te].counter>0}get statusText(){return this[Te].statusText}get headers(){return this[Te].headers}clone(){return new e(gn(this),{url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected})}};w.mixIn(ee.prototype);Object.defineProperties(ee.prototype,{url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}});Object.defineProperty(ee.prototype,Symbol.toStringTag,{value:"Response",writable:!1,enumerable:!1,configurable:!0});var Ee=Symbol("Request internals"),mu=oa.URL||bn.URL,Ru=oa.parse,Au=oa.format;function rr(e){return/^[a-zA-Z][a-zA-Z\d+\-.]*:/.exec(e)&&(e=new mu(e).toString()),Ru(e)}var fu="destroy"in ue.Readable.prototype;function na(e){return typeof e=="object"&&typeof e[Ee]=="object"}function Pu(e){let t=e&&typeof e=="object"&&Object.getPrototypeOf(e);return!!(t&&t.constructor.name==="AbortSignal")}var Oe=class e{constructor(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n;na(t)?n=rr(t.url):(t&&t.href?n=rr(t.href):n=rr(`${t}`),t={});let r=a.method||t.method||"GET";if(r=r.toUpperCase(),(a.body!=null||na(t)&&t.body!==null)&&(r==="GET"||r==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");let o=a.body!=null?a.body:na(t)&&t.body!==null?gn(t):null;w.call(this,o,{timeout:a.timeout||t.timeout||0,size:a.size||t.size||0});let u=new te(a.headers||t.headers||{});if(o!=null&&!u.has("Content-Type")){let i=Mn(o);i&&u.append("Content-Type",i)}let s=na(t)?t.signal:null;if("signal"in a&&(s=a.signal),s!=null&&!Pu(s))throw new TypeError("Expected signal to be an instanceof AbortSignal");this[Ee]={method:r,redirect:a.redirect||t.redirect||"follow",headers:u,parsedURL:n,signal:s},this.follow=a.follow!==void 0?a.follow:t.follow!==void 0?t.follow:20,this.compress=a.compress!==void 0?a.compress:t.compress!==void 0?t.compress:!0,this.counter=a.counter||t.counter||0,this.agent=a.agent||t.agent}get method(){return this[Ee].method}get url(){return Au(this[Ee].parsedURL)}get headers(){return this[Ee].headers}get redirect(){return this[Ee].redirect}get signal(){return this[Ee].signal}clone(){return new e(this)}};w.mixIn(Oe.prototype);Object.defineProperty(Oe.prototype,Symbol.toStringTag,{value:"Request",writable:!1,enumerable:!1,configurable:!0});Object.defineProperties(Oe.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0}});function Eu(e){let t=e[Ee].parsedURL,a=new te(e[Ee].headers);if(a.has("Accept")||a.set("Accept","*/*"),!t.protocol||!t.hostname)throw new TypeError("Only absolute URLs are supported");if(!/^https?:$/.test(t.protocol))throw new TypeError("Only HTTP(S) protocols are supported");if(e.signal&&e.body instanceof ue.Readable&&!fu)throw new Error("Cancellation of streamed requests with AbortSignal is not supported in node < 8");let n=null;if(e.body==null&&/^(POST|PUT)$/i.test(e.method)&&(n="0"),e.body!=null){let o=mn(e);typeof o=="number"&&(n=String(o))}n&&a.set("Content-Length",n),a.has("User-Agent")||a.set("User-Agent","node-fetch/1.0 (+https://github.com/bitinn/node-fetch)"),e.compress&&!a.has("Accept-Encoding")&&a.set("Accept-Encoding","gzip,deflate");let r=e.agent;return typeof r=="function"&&(r=r(t)),Object.assign({},t,{method:e.method,headers:Iu(a),agent:r})}function it(e){Error.call(this,e),this.type="aborted",this.message=e,Error.captureStackTrace(this,this.constructor)}it.prototype=Object.create(Error.prototype);it.prototype.constructor=it;it.prototype.name="AbortError";var vt=oa.URL||bn.URL,dn=ue.PassThrough,Cu=function(t,a){let n=new vt(a).hostname,r=new vt(t).hostname;return n===r||n[n.length-r.length-1]==="."&&n.endsWith(r)},hu=function(t,a){let n=new vt(a).protocol,r=new vt(t).protocol;return n===r};function we(e,t){if(!we.Promise)throw new Error("native promise missing, set fetch.Promise to your favorite alternative");return w.Promise=we.Promise,new we.Promise(function(a,n){let r=new Oe(e,t),o=Eu(r),u=(o.protocol==="https:"?yu:Sn).request,s=r.signal,i=null,p=function(){let b=new it("The user aborted a request.");n(b),r.body&&r.body instanceof ue.Readable&&nr(r.body,b),!(!i||!i.body)&&i.body.emit("error",b)};if(s&&s.aborted){p();return}let c=function(){p(),m()},y=u(o),I;s&&s.addEventListener("abort",c);function m(){y.abort(),s&&s.removeEventListener("abort",c),clearTimeout(I)}r.timeout&&y.once("socket",function(l){I=setTimeout(function(){n(new q(`network timeout at: ${r.url}`,"request-timeout")),m()},r.timeout)}),y.on("error",function(l){n(new q(`request to ${r.url} failed, reason: ${l.message}`,"system",l)),i&&i.body&&nr(i.body,l),m()}),Du(y,function(l){s&&s.aborted||i&&i.body&&nr(i.body,l)}),parseInt(process.version.substring(1))<14&&y.on("socket",function(l){l.addListener("close",function(b){let d=l.listenerCount("data")>0;if(i&&d&&!b&&!(s&&s.aborted)){let S=new Error("Premature close");S.code="ERR_STREAM_PREMATURE_CLOSE",i.body.emit("error",S)}})}),y.on("response",function(l){clearTimeout(I);let b=gu(l.headers);if(we.isRedirect(l.statusCode)){let M=b.get("Location"),P=null;try{P=M===null?null:new vt(M,r.url).toString()}catch{if(r.redirect!=="manual"){n(new q(`uri requested responds with an invalid redirect URL: ${M}`,"invalid-redirect")),m();return}}switch(r.redirect){case"error":n(new q(`uri requested responds with a redirect, redirect mode is set to error: ${r.url}`,"no-redirect")),m();return;case"manual":if(P!==null)try{b.set("Location",P)}catch(_){n(_)}break;case"follow":if(P===null)break;if(r.counter>=r.follow){n(new q(`maximum redirect reached at: ${r.url}`,"max-redirect")),m();return}let A={headers:new te(r.headers),follow:r.follow,counter:r.counter+1,agent:r.agent,compress:r.compress,method:r.method,body:r.body,signal:r.signal,timeout:r.timeout,size:r.size};if(!Cu(r.url,P)||!hu(r.url,P))for(let _ of["authorization","www-authenticate","cookie","cookie2"])A.headers.delete(_);if(l.statusCode!==303&&r.body&&mn(r)===null){n(new q("Cannot follow redirect with body being a readable stream","unsupported-redirect")),m();return}(l.statusCode===303||(l.statusCode===301||l.statusCode===302)&&r.method==="POST")&&(A.method="GET",A.body=void 0,A.headers.delete("content-length")),a(we(new Oe(P,A))),m();return}}l.once("end",function(){s&&s.removeEventListener("abort",c)});let d=l.pipe(new dn),S={url:r.url,status:l.statusCode,statusText:l.statusMessage,headers:b,size:r.size,timeout:r.timeout,counter:r.counter},R=b.get("Content-Encoding");if(!r.compress||r.method==="HEAD"||R===null||l.statusCode===204||l.statusCode===304){i=new ee(d,S),a(i);return}let f={flush:ze.Z_SYNC_FLUSH,finishFlush:ze.Z_SYNC_FLUSH};if(R=="gzip"||R=="x-gzip"){d=d.pipe(ze.createGunzip(f)),i=new ee(d,S),a(i);return}if(R=="deflate"||R=="x-deflate"){let M=l.pipe(new dn);M.once("data",function(P){(P[0]&15)===8?d=d.pipe(ze.createInflate()):d=d.pipe(ze.createInflateRaw()),i=new ee(d,S),a(i)}),M.on("end",function(){i||(i=new ee(d,S),a(i))});return}if(R=="br"&&typeof ze.createBrotliDecompress=="function"){d=d.pipe(ze.createBrotliDecompress()),i=new ee(d,S),a(i);return}i=new ee(d,S),a(i)}),bu(y,r)})}function Du(e,t){let a;e.on("socket",function(n){a=n}),e.on("response",function(n){let r=n.headers;r["transfer-encoding"]==="chunked"&&!r["content-length"]&&n.once("close",function(o){if(a&&a.listenerCount("data")>0&&!o){let s=new Error("Premature close");s.code="ERR_STREAM_PREMATURE_CLOSE",t(s)}})})}function nr(e,t){e.destroy?e.destroy(t):(e.emit("error",t),e.end())}we.isRedirect=function(e){return e===301||e===302||e===303||e===307||e===308};we.Promise=global.Promise;An.exports=pe=we;Object.defineProperty(pe,"__esModule",{value:!0});pe.default=pe;pe.Headers=te;pe.Request=Oe;pe.Response=ee;pe.FetchError=q;pe.AbortError=it});var Ot=E((He,Pn)=>{var wt=fn(),xu=wt.default||wt,ia=function(e,t){return/^\/\//.test(e)&&(e="https:"+e),xu.call(this,e,t)};ia.ponyfill=!0;Pn.exports=He=ia;He.fetch=ia;He.Headers=wt.Headers;He.Request=wt.Request;He.Response=wt.Response;He.default=ia});var lr=E(sa=>{"use strict";Object.defineProperty(sa,"__esModule",{value:!0});sa.isJSON=void 0;function _u(e){if(e){let t=vu(e);if(!t)return!1;if(t.subtype==="json"||t.suffix==="json"||t.suffix&&/\bjson\b/i.test(t.suffix)||t.subtype&&/\bjson\b/i.test(t.subtype))return!0}return!1}sa.isJSON=_u;var Uu=/^([A-Za-z0-9][A-Za-z0-9!#$&^_-]{0,126})\/([A-Za-z0-9][A-Za-z0-9!#$&^_.+-]{0,126});?$/;function vu(e){let t=e.indexOf(";"),a=t!==-1?e.slice(0,t).trim():e.trim(),n=Uu.exec(a.toLowerCase().toLowerCase());if(!n)return;let r=n[1],o=n[2],u,s=o.lastIndexOf("+");return s!==-1&&(u=o.substring(s+1),o=o.substring(0,s)),{type:r,subtype:o,suffix:u}}});var Dn=E(ua=>{"use strict";Object.defineProperty(ua,"__esModule",{value:!0});ua.useFetch=void 0;var ut=require("react"),Tu=xt(),En=fe(),Cn=Ot(),wu=lr(),hn=ve();async function Ou(e){if(!e.ok)throw new Error(e.statusText);let t=e.headers.get("content-type");return t&&(0,wu.isJSON)(t)?await e.json():await e.text()}function Bu(e){return{data:e,hasMore:!1}}function Lu(e,t){let{parseResponse:a,mapResult:n,initialData:r,execute:o,keepPreviousData:u,onError:s,onData:i,onWillExecute:p,failureToastOptions:c,...y}=t||{},I={initialData:r,execute:o,keepPreviousData:u,onError:s,onData:i,onWillExecute:p,failureToastOptions:c},m=(0,En.useLatest)(a||Ou),l=(0,En.useLatest)(n||Bu),b=(0,ut.useRef)(),d=(0,ut.useRef)(),S=typeof e=="function"?e({page:0}):void 0;(!b.current||typeof d.current>"u"||d.current!==S)&&(b.current=e),d.current=S;let R=(0,ut.useRef)(),f=(0,ut.useCallback)((A,_)=>async V=>{let ie=await(0,Cn.fetch)(A(V),{signal:R.current?.signal,..._}),j=await m.current(ie);return l.current?.(j)},[m,l]),M=(0,ut.useCallback)(async(A,_)=>{let V=await(0,Cn.fetch)(A,{signal:R.current?.signal,..._}),ie=await m.current(V);return l.current(ie)?.data},[m,l]),P=(0,ut.useMemo)(()=>d.current?f:M,[d,M,f]);return(0,Tu.useCachedPromise)(P,[b.current,y],{...I,internal_cacheKeySuffix:d.current+(0,hn.hash)(l.current)+(0,hn.hash)(m.current),abortable:R})}ua.useFetch=Lu});var pa=E(ae=>{"use strict";var qu=ae&&ae.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ae,"__esModule",{value:!0});ae.defaultParsing=ae.handleOutput=ae.getSpawnedResult=ae.getSpawnedPromise=void 0;var Nu=require("node:buffer"),Un=qu(require("node:stream")),Vu=require("node:util"),ku=require("signal-exit");function ju(e,{timeout:t}={}){let a=new Promise((s,i)=>{e.on("exit",(p,c)=>{s({exitCode:p,signal:c,timedOut:!1})}),e.on("error",p=>{i(p)}),e.stdin&&e.stdin.on("error",p=>{i(p)})});if(t===0||t===void 0)return a;let n,r=new Promise((s,i)=>{n=setTimeout(()=>{e.kill("SIGTERM"),i(Object.assign(new Error("Timed out"),{timedOut:!0,signal:"SIGTERM"}))},t)}),o=a.finally(()=>{clearTimeout(n)}),u=(0,ku.onExit)(()=>{e.kill()});return Promise.race([r,o]).finally(()=>u())}ae.getSpawnedPromise=ju;var cr=class extends Error{constructor(){super("The output is too big"),this.name="MaxBufferError"}},Fu=(0,Vu.promisify)(Un.default.pipeline);function zu(e){let{encoding:t}=e,a=t==="buffer",n=new Un.default.PassThrough({objectMode:!1});t&&t!=="buffer"&&n.setEncoding(t);let r=0,o=[];return n.on("data",u=>{o.push(u),r+=u.length}),n.getBufferedValue=()=>a?Buffer.concat(o,r):o.join(""),n.getBufferedLength=()=>r,n}async function xn(e,t){let a=zu(t);return await new Promise((n,r)=>{let o=u=>{u&&a.getBufferedLength()<=Nu.constants.MAX_LENGTH&&(u.bufferedData=a.getBufferedValue()),r(u)};(async()=>{try{await Fu(e,a),n()}catch(u){o(u)}})(),a.on("data",()=>{a.getBufferedLength()>1e3*1e3*80&&o(new cr)})}),a.getBufferedValue()}async function _n(e,t){e.destroy();try{return await t}catch(a){return a.bufferedData}}async function Hu({stdout:e,stderr:t},{encoding:a},n){let r=xn(e,{encoding:a}),o=xn(t,{encoding:a});try{return await Promise.all([n,r,o])}catch(u){return Promise.all([{error:u,exitCode:null,signal:u.signal,timedOut:u.timedOut||!1},_n(e,r),_n(t,o)])}}ae.getSpawnedResult=Hu;function Gu(e){let t=typeof e=="string"?`
`:10,a=typeof e=="string"?"\r":13;return e[e.length-1]===t&&(e=e.slice(0,-1)),e[e.length-1]===a&&(e=e.slice(0,-1)),e}function $u(e,t){return e.stripFinalNewline?Gu(t):t}ae.handleOutput=$u;var Qu=({timedOut:e,timeout:t,signal:a,exitCode:n})=>e?`timed out after ${t} milliseconds`:a!=null?`was killed with ${a}`:n!=null?`failed with exit code ${n}`:"failed",Wu=({stdout:e,stderr:t,error:a,signal:n,exitCode:r,command:o,timedOut:u,options:s,parentError:i})=>{let c=`Command ${Qu({timedOut:u,timeout:s?.timeout,signal:n,exitCode:r})}: ${o}`,y=a?`${c}
${a.message}`:c,I=[y,t,e].filter(Boolean).join(`
`);return a?a.originalMessage=a.message:a=i,a.message=I,a.shortMessage=y,a.command=o,a.exitCode=r,a.signal=n,a.stdout=e,a.stderr=t,"bufferedData"in a&&delete a.bufferedData,a};function Ku({stdout:e,stderr:t,error:a,exitCode:n,signal:r,timedOut:o,command:u,options:s,parentError:i}){if(a||n!==0||r!==null)throw Wu({error:a,exitCode:n,signal:r,stdout:e,stderr:t,command:u,timedOut:o,options:s,parentError:i});return e}ae.defaultParsing=Ku});var Tn=E(pt=>{"use strict";var Yu=pt&&pt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(pt,"__esModule",{value:!0});pt.useExec=void 0;var Ju=Yu(require("node:child_process")),vn=require("react"),Zu=xt(),Xu=fe(),Bt=pa(),ep=/ +/g;function tp(e,t){if(t)return[e,...t];let a=[];for(let n of e.trim().split(ep)){let r=a[a.length-1];r&&r.endsWith("\\")?a[a.length-1]=`${r.slice(0,-1)} ${n}`:a.push(n)}return a}function ap(e,t,a){let{parseOutput:n,input:r,onData:o,onWillExecute:u,initialData:s,execute:i,keepPreviousData:p,onError:c,failureToastOptions:y,...I}=Array.isArray(t)?a||{}:t||{},m={initialData:s,execute:i,keepPreviousData:p,onError:c,onData:o,onWillExecute:u,failureToastOptions:y},l=(0,vn.useRef)(),b=(0,Xu.useLatest)(n||Bt.defaultParsing),d=(0,vn.useCallback)(async(S,R,f,M)=>{let[P,...A]=tp(S,R),_=[P,...A].join(" "),V={stripFinalNewline:!0,...f,timeout:f?.timeout||1e4,signal:l.current?.signal,encoding:f?.encoding===null?"buffer":f?.encoding||"utf8",env:{PATH:"/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin",...process.env,...f?.env}},ie=Ju.default.spawn(P,A,V),j=(0,Bt.getSpawnedPromise)(ie,V);M&&ie.stdin.end(M);let[{error:v,exitCode:se,signal:ce,timedOut:C},W,ft]=await(0,Bt.getSpawnedResult)(ie,V,j),Ha=(0,Bt.handleOutput)(V,W),mi=(0,Bt.handleOutput)(V,ft);return b.current({stdout:Ha,stderr:mi,error:v,exitCode:se,signal:ce,timedOut:C,command:_,options:V,parentError:new Error})},[b]);return(0,Zu.useCachedPromise)(d,[e,Array.isArray(t)?t:[],I,r],{...m,abortable:l})}pt.useExec=ap});var Ln=E(lt=>{"use strict";var ca=lt&&lt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(lt,"__esModule",{value:!0});lt.useStreamJSON=void 0;var rp=require("@raycast/api"),wn=ca(Ot()),Nt=require("node:fs"),yr=require("node:fs/promises"),la=require("node:path"),On=require("node:stream/promises"),Lt=require("react"),np=ca(require("stream-chain")),op=require("stream-json"),ip=ca(require("stream-json/filters/Pick")),sp=ca(require("stream-json/streamers/StreamArray")),Bn=lr(),up=xt(),pp=ve();async function qt(e,t,a){if(typeof e=="object"||e.startsWith("http://")||e.startsWith("https://"))return await lp(e,t,a);if(e.startsWith("file://"))return await cp((0,la.normalize)(decodeURIComponent(new URL(e).pathname)),t,a?.signal?a.signal:void 0);throw new Error("Only HTTP(S) or file URLs are supported")}async function lp(e,t,a){let n=await(0,wn.default)(e,a);if(!n.ok)throw new Error("Failed to fetch URL");if(!(0,Bn.isJSON)(n.headers.get("content-type")))throw new Error("URL does not return JSON");if(!n.body)throw new Error("Failed to retrieve expected JSON content: Response body is missing or inaccessible.");await(0,On.pipeline)(n.body,(0,Nt.createWriteStream)(t),a?.signal?{signal:a.signal}:void 0)}async function cp(e,t,a){await(0,On.pipeline)((0,Nt.createReadStream)(e),(0,Nt.createWriteStream)(t),a?{signal:a}:void 0)}async function yp(e,t,a,n,r){let o=(0,la.join)(t,a);try{await(0,yr.stat)(t)}catch{(0,Nt.mkdirSync)(t,{recursive:!0}),await qt(e,o,r);return}if(n){await qt(e,o,r);return}let u;try{u=await(0,yr.stat)(o)}catch{await qt(e,o,r);return}if(typeof e=="object"||e.startsWith("http://")||e.startsWith("https://")){let s=await(0,wn.default)(e,{...r,method:"HEAD"});if(!s.ok)throw new Error("Could not fetch URL");if(!(0,Bn.isJSON)(s.headers.get("content-type")))throw new Error("URL does not return JSON");let i=Date.parse(s.headers.get("last-modified")??"");if(u.size===0||Number.isNaN(i)||i>u.mtimeMs){await qt(e,o,r);return}}else if(e.startsWith("file://"))try{(await(0,yr.stat)((0,la.normalize)(decodeURIComponent(new URL(e).pathname)))).mtimeMs>u.mtimeMs&&await qt(e,o,r)}catch{throw new Error("Source file could not be read")}else throw new Error("Only HTTP(S) or file URLs are supported")}async function*dp(e,t,a,n,r,o){let u=[],s=new np.default([(0,Nt.createReadStream)(e),n?ip.default.withParser({filter:n}):(0,op.parser)(),new sp.default,i=>o?.(i.value)??i.value]);a?.addEventListener("abort",()=>{s.destroy()});try{for await(let i of s){if(a?.aborted)return[];(!r||r(i))&&u.push(i),u.length>=t&&(yield u,u=[])}}catch(i){throw s.destroy(),i}return u.length>0&&(yield u),[]}function Sp(e,t){let{initialData:a,execute:n,keepPreviousData:r,onError:o,onData:u,onWillExecute:s,failureToastOptions:i,dataPath:p,filter:c,transform:y,pageSize:I=20,...m}=t??{},l=(0,Lt.useRef)(),b=(0,Lt.useRef)(),d={initialData:a,execute:n,keepPreviousData:r,onError:o,onData:u,onWillExecute:s,failureToastOptions:i},S=(0,Lt.useRef)(null),R=(0,Lt.useRef)(null),f=(0,Lt.useRef)(!1);return(0,up.useCachedPromise)((M,P,A,_,V,ie)=>async({page:j})=>{let v=(0,pp.hash)(M)+".json",se=rp.environment.supportPath;if(j===0){R.current?.abort(),R.current=new AbortController;let W=(0,la.join)(se,v),ft=!!(l.current&&l.current!==M&&b.current&&b.current===W);l.current=M,b.current=W,await yp(M,se,v,ft,{...A,signal:R.current?.signal}),S.current=dp(W,P,R.current?.signal,_,V,ie)}if(!S.current)return{hasMore:f.current,data:[]};let{value:ce,done:C}=await S.current.next();return f.current=!C,{hasMore:f.current,data:ce??[]}},[e,I,m,p,c,y],d)}lt.useStreamJSON=Sp});var Sr=E(Ie=>{"use strict";var dr=Ie&&Ie.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Ie,"__esModule",{value:!0});Ie.baseExecuteSQL=Ie.isPermissionError=Ie.PermissionError=void 0;var bp=require("node:fs"),ya=require("node:fs/promises"),Ip=dr(require("node:os")),qn=dr(require("node:child_process")),Nn=dr(require("node:path")),da=pa(),gp=ve(),ba=class extends Error{constructor(t){super(t),this.name="PermissionError"}};Ie.PermissionError=ba;function Mp(e){return e instanceof Error&&e.name==="PermissionError"}Ie.isPermissionError=Mp;async function mp(e,t,a){if(!(0,bp.existsSync)(e))throw new Error("The database does not exist");let n=a?.signal,r,o=qn.default.spawn("sqlite3",["--json","--readonly",e,t],{signal:n}),u=(0,da.getSpawnedPromise)(o),[{error:s,exitCode:i,signal:p},c,y]=await(0,da.getSpawnedResult)(o,{encoding:"utf-8"},u);if(Sa(n),y.match("(5)")||y.match("(14)")){if(!r){let I=Nn.default.join(Ip.default.tmpdir(),"useSQL",(0,gp.hash)(e));await(0,ya.mkdir)(I,{recursive:!0}),Sa(n),r=Nn.default.join(I,"db.db"),await(0,ya.copyFile)(e,r),await(0,ya.writeFile)(r+"-shm",""),await(0,ya.writeFile)(r+"-wal",""),Sa(n)}o=qn.default.spawn("sqlite3",["--json","--readonly","--vfs","unix-none",r,t],{signal:n}),u=(0,da.getSpawnedPromise)(o),[{error:s,exitCode:i,signal:p},c,y]=await(0,da.getSpawnedResult)(o,{encoding:"utf-8"},u),Sa(n)}if(s||i!==0||p!==null)throw y.includes("authorization denied")?new ba("You do not have permission to access the database."):new Error(y||"Unknown error");return JSON.parse(c.trim()||"[]")}Ie.baseExecuteSQL=mp;function Sa(e){if(e?.aborted){let t=new Error("aborted");throw t.name="AbortError",t}}});var kn=E(ct=>{"use strict";var Rp=ct&&ct.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ct,"__esModule",{value:!0});ct.useSQL=void 0;var ge=require("react/jsx-runtime"),F=require("@raycast/api"),Ap=require("node:fs"),fp=Rp(require("node:os")),Ia=require("react"),Pp=at(),Ep=fe(),Cp=Ct(),br=Sr();function hp(e,t,a){let{permissionPriming:n,...r}=a||{},[o,u]=(0,Ia.useState)(),s=(0,Ep.useLatest)(a||{}),i=(0,Ia.useRef)(),p=(0,Ia.useCallback)(y=>{console.error(y);let I=y instanceof Error&&y.message.includes("authorization denied")?new br.PermissionError("You do not have permission to access the database."):y;(0,br.isPermissionError)(I)?u((0,ge.jsx)(Dp,{priming:s.current.permissionPriming})):s.current.onError?s.current.onError(I):F.environment.launchType!==F.LaunchType.Background&&(0,Cp.showFailureToast)(I,{title:"Cannot query the data"})},[s]),c=(0,Ia.useMemo)(()=>{if(!(0,Ap.existsSync)(e))throw new Error("The database does not exist");return async(y,I)=>{let m=i.current?.signal;return(0,br.baseExecuteSQL)(y,I,{signal:m})}},[e]);return{...(0,Pp.usePromise)(c,[e,t],{...r,onError:p}),permissionView:o}}ct.useSQL=hp;var Vn=parseInt(fp.default.release().split(".")[0])>=22,Ir=Vn?"Settings":"Preferences";function Dp(e){let t=Vn?{title:"Open System Settings -> Privacy",target:"x-apple.systempreferences:com.apple.preference.security?Privacy_AllFiles"}:{title:"Open System Preferences -> Security",target:"x-apple.systempreferences:com.apple.preference.security?Privacy_AllFiles"};return F.environment.commandMode==="menu-bar"?(0,ge.jsxs)(F.MenuBarExtra,{icon:F.Icon.Warning,title:F.environment.commandName,children:[(0,ge.jsx)(F.MenuBarExtra.Item,{title:"Raycast needs full disk access",tooltip:`You can revert this access in ${Ir} whenever you want`}),e.priming?(0,ge.jsx)(F.MenuBarExtra.Item,{title:e.priming,tooltip:`You can revert this access in ${Ir} whenever you want`}):null,(0,ge.jsx)(F.MenuBarExtra.Separator,{}),(0,ge.jsx)(F.MenuBarExtra.Item,{title:t.title,onAction:()=>(0,F.open)(t.target)})]}):(0,ge.jsx)(F.List,{children:(0,ge.jsx)(F.List.EmptyView,{icon:{source:{light:"https://raycast.com/uploads/extensions-utils-security-permissions-light.png",dark:"https://raycast.com/uploads/extensions-utils-security-permissions-dark.png"}},title:"Raycast needs full disk access.",description:`${e.priming?e.priming+`
`:""}You can revert this access in ${Ir} whenever you want.`,actions:(0,ge.jsx)(F.ActionPanel,{children:(0,ge.jsx)(F.Action.Open,{...t})})})})}});var Fn=E(yt=>{"use strict";Object.defineProperty(yt,"__esModule",{value:!0});yt.useForm=yt.FormValidation=void 0;var he=require("react"),jn=fe(),Mr;(function(e){e.Required="required"})(Mr||(yt.FormValidation=Mr={}));function gr(e,t){if(e){if(typeof e=="function")return e(t);if(e===Mr.Required){let a=typeof t<"u"&&t!==null;if(a)switch(typeof t){case"string":a=t.length>0;break;case"object":Array.isArray(t)?a=t.length>0:t instanceof Date&&(a=t.getTime()>0);break;default:break}if(!a)return"The item is required"}}}function xp(e){let{onSubmit:t,validation:a,initialValues:n={}}=e,[r,o]=(0,he.useState)(n),[u,s]=(0,he.useState)({}),i=(0,he.useRef)({}),p=(0,jn.useLatest)(a||{}),c=(0,jn.useLatest)(t),y=(0,he.useCallback)(S=>{i.current[S]?.focus()},[i]),I=(0,he.useCallback)(async S=>{let R=!1;for(let[M,P]of Object.entries(p.current)){let A=gr(P,S[M]);A&&(R||(R={},y(M)),R[M]=A)}if(R)return s(R),!1;let f=await c.current(S);return typeof f=="boolean"?f:!0},[p,c,y]),m=(0,he.useCallback)((S,R)=>{s(f=>({...f,[S]:R}))},[s]),l=(0,he.useCallback)(function(S,R){o(f=>({...f,[S]:typeof R=="function"?R(f[S]):R}))},[o]),b=(0,he.useMemo)(()=>new Proxy({},{get(S,R){let f=p.current[R],M=r[R];return{onChange(P){u[R]&&(gr(f,P)||m(R,void 0)),l(R,P)},onBlur(P){let A=gr(f,P.target.value);A&&m(R,A)},error:u[R],id:R,value:typeof M>"u"?null:M,ref:P=>{i.current[R]=P}}}}),[u,p,m,r,i,l]),d=(0,he.useCallback)(S=>{s({}),Object.entries(i.current).forEach(([R,f])=>{S?.[R]||f?.reset()}),S&&o(S)},[o,s,i]);return{handleSubmit:I,setValidationError:m,setValue:l,values:r,itemProps:b,focus:y,reset:d}}yt.useForm=xp});var Hn=E(ga=>{"use strict";Object.defineProperty(ga,"__esModule",{value:!0});ga.useAI=void 0;var zn=require("react"),_p=require("@raycast/api"),Up=at();function vp(e,t={}){let{creativity:a,stream:n,model:r,...o}=t,[u,s]=(0,zn.useState)(""),i=(0,zn.useRef)(),{isLoading:p,error:c,revalidate:y}=(0,Up.usePromise)(async(I,m,l)=>{s("");let b=_p.AI.ask(I,{creativity:m,model:r,signal:i.current?.signal});l===!1?s(await b):(b.on("data",d=>{s(S=>S+d)}),await b)},[e,a,n],{...o,abortable:i});return{isLoading:p,data:u,error:c,revalidate:y}}ga.useAI=vp});var Qn=E(Ma=>{"use strict";Object.defineProperty(Ma,"__esModule",{value:!0});Ma.useFrecencySorting=void 0;var mr=require("react"),Gn=fe(),Tp=aa(),wp=10,$n=1440*60*1e3,Op=Math.log(2)/(wp*$n),Bp={Default:100,Embed:0,Bookmark:140};function Lp(e){let t=Date.now(),a=e?e.lastVisited:0,n=e?e.frecency:0,r=(t-a)/$n,o=Bp.Default*Math.exp(-Op*r),u=n+o;return{lastVisited:t,frecency:u}}var qp=e=>{if(process.env.NODE_ENV!=="production"&&(typeof e!="object"||!e||!("id"in e)||typeof e.id!="string"))throw new Error("Specify a key function or make sure your items have an 'id' property");return e.id};function Np(e,t){let a=(0,Gn.useLatest)(t?.key||qp),n=(0,Gn.useLatest)(t?.sortUnvisited),[r,o]=(0,Tp.useCachedState)(`raycast_frecency_${t?.namespace}`,{}),u=(0,mr.useCallback)(async function(c){let y=a.current(c);o(I=>{let m=I[y],l=Lp(m);return{...I,[y]:l}})},[a,o]),s=(0,mr.useCallback)(async function(c){let y=a.current(c);o(I=>{let m={...I};return delete m[y],m})},[a,o]);return{data:(0,mr.useMemo)(()=>e?e.sort((p,c)=>{let y=r[a.current(p)],I=r[a.current(c)];return y&&!I?-1:!y&&I?1:y&&I?I.frecency-y.frecency:n.current?n.current(p,c):0}):[],[r,e,a,n]),visitItem:u,resetRanking:s}}Ma.useFrecencySorting=Np});var Yn=E(ma=>{"use strict";Object.defineProperty(ma,"__esModule",{value:!0});ma.useLocalStorage=void 0;var Rr=require("@raycast/api"),Wn=Ct(),Kn=ve(),Vp=at();function kp(e,t){let{data:a,isLoading:n,mutate:r}=(0,Vp.usePromise)(async s=>{let i=await Rr.LocalStorage.getItem(s);return typeof i<"u"?JSON.parse(i,Kn.reviver):t},[e]);async function o(s){try{await r(Rr.LocalStorage.setItem(e,JSON.stringify(s,Kn.replacer)),{optimisticUpdate(i){return i}})}catch(i){await(0,Wn.showFailureToast)(i,{title:"Failed to set value in local storage"})}}async function u(){try{await r(Rr.LocalStorage.removeItem(e),{optimisticUpdate(){}})}catch(s){await(0,Wn.showFailureToast)(s,{title:"Failed to remove value from local storage"})}}return{value:a,setValue:o,removeValue:u,isLoading:n}}ma.useLocalStorage=kp});var to=E(dt=>{"use strict";Object.defineProperty(dt,"__esModule",{value:!0});dt.slightlyLighterColor=dt.slightlyDarkerColor=void 0;function jp(e){let t=0,a=0,n=0;if(e.length===4)t=parseInt(`${e[1]}${e[1]}`,16),a=parseInt(`${e[2]}${e[2]}`,16),n=parseInt(`${e[3]}${e[3]}`,16);else if(e.length===7)t=parseInt(`${e[1]}${e[2]}`,16),a=parseInt(`${e[3]}${e[4]}`,16),n=parseInt(`${e[5]}${e[6]}`,16);else throw new Error(`Malformed hex color: ${e}`);return{r:t,g:a,b:n}}function Fp({r:e,g:t,b:a}){let n=e.toString(16),r=t.toString(16),o=a.toString(16);return n.length===1&&(n=`0${n}`),r.length===1&&(r=`0${r}`),o.length===1&&(o=`0${o}`),`#${n}${r}${o}`}function zp({r:e,g:t,b:a}){e/=255,t/=255,a/=255;let n=Math.min(e,t,a),r=Math.max(e,t,a),o=r-n,u=0,s=0,i=0;return o===0?u=0:r===e?u=(t-a)/o%6:r===t?u=(a-e)/o+2:u=(e-t)/o+4,u=Math.round(u*60),u<0&&(u+=360),i=(r+n)/2,s=o===0?0:o/(1-Math.abs(2*i-1)),s=+(s*100).toFixed(1),i=+(i*100).toFixed(1),{h:u,s,l:i}}function Hp({h:e,s:t,l:a}){t/=100,a/=100;let n=(1-Math.abs(2*a-1))*t,r=n*(1-Math.abs(e/60%2-1)),o=a-n/2,u=0,s=0,i=0;return e>=0&&e<60?(u=n,s=r,i=0):e>=60&&e<120?(u=r,s=n,i=0):e>=120&&e<180?(u=0,s=n,i=r):e>=180&&e<240?(u=0,s=r,i=n):e>=240&&e<300?(u=r,s=0,i=n):e>=300&&e<360&&(u=n,s=0,i=r),u=Math.round((u+o)*255),s=Math.round((s+o)*255),i=Math.round((i+o)*255),{r:u,g:s,b:i}}function Jn(e){return zp(jp(e))}function Zn(e){return Fp(Hp(e))}function Xn(e,t,a){return t<a?e<t?t:e>a?a:e:e<a?a:e>t?t:e}var eo=12;function Gp(e){let t=Jn(e);return Zn({h:t.h,s:t.s,l:Xn(t.l-eo,0,100)})}dt.slightlyDarkerColor=Gp;function $p(e){let t=Jn(e);return Zn({h:t.h,s:t.s,l:Xn(t.l+eo,0,100)})}dt.slightlyLighterColor=$p});var no=E(Ra=>{"use strict";Object.defineProperty(Ra,"__esModule",{value:!0});Ra.getAvatarIcon=void 0;var ao=to();function St(e,t){let a=e.charCodeAt(t);if(Number.isNaN(a))return["",t];if(a<55296||a>57343)return[e.charAt(t),t];if(55296<=a&&a<=56319){if(e.length<=t+1)throw new Error("High surrogate without following low surrogate");let r=e.charCodeAt(t+1);if(56320>r||r>57343)throw new Error("High surrogate without following low surrogate");return[e.charAt(t)+e.charAt(t+1),t+1]}if(t===0)throw new Error("Low surrogate without preceding high surrogate");let n=e.charCodeAt(t-1);if(55296>n||n>56319)throw new Error("Low surrogate without preceding high surrogate");return[e.charAt(t+1),t+1]}var ro=["#DC829A","#D64854","#D47600","#D36CDD","#52A9E4","#7871E8","#70920F","#43B93A","#EB6B3E","#26B795","#D85A9B","#A067DC","#BD9500","#5385D9"];function Qp(e,t){let a=e.trim().split(" "),n;if(a.length==1&&St(a[0],0)[0])n=St(a[0],0)[0];else if(a.length>1){let i=St(a[0],0)[0]||"",p=St(a[a.length-1],0)[0]??"";n=i+p}else n="";let r;if(t?.background)r=t?.background;else{let i=0,[p,c]=St(n,0);for(;p;)i+=p.charCodeAt(0),[p,c]=St(n,c+1);let y=i%ro.length;r=ro[y]}let u=50-0;return`data:image/svg+xml,${`<svg width="100px" height="100px">
  ${t?.gradient!==!1?`<defs>
      <linearGradient id="Gradient" x1="0.25" x2="0.75" y1="0" y2="1">
        <stop offset="0%" stop-color="${(0,ao.slightlyLighterColor)(r)}"/>
        <stop offset="50%" stop-color="${r}"/>
        <stop offset="100%" stop-color="${(0,ao.slightlyDarkerColor)(r)}"/>
      </linearGradient>
  </defs>`:""}
      <circle cx="50" cy="50" r="${u}" fill="${t?.gradient!==!1?"url(#Gradient)":r}" />
      ${n?`<text x="50" y="80" font-size="${u-1}" font-family="Inter, sans-serif" text-anchor="middle" fill="white">${n.toUpperCase()}</text>`:""}
    </svg>
  `.replaceAll(`
`,"")}`}Ra.getAvatarIcon=Qp});var io=E(Aa=>{"use strict";Object.defineProperty(Aa,"__esModule",{value:!0});Aa.getFavicon=void 0;var oo=require("@raycast/api"),Wp=require("url");function Kp(e,t){try{let n=(typeof e=="string"?new Wp.URL(e):e).hostname;return{source:`https://www.google.com/s2/favicons?sz=${t?.size??64}&domain=${n}`,fallback:t?.fallback??oo.Icon.Link,mask:t?.mask}}catch(a){return console.error(a),oo.Icon.Link}}Aa.getFavicon=Kp});var po=E(fa=>{"use strict";Object.defineProperty(fa,"__esModule",{value:!0});fa.getProgressIcon=void 0;var so=require("@raycast/api");function uo(e,t,a,n){let r=(n-90)*Math.PI/180;return{x:e+a*Math.cos(r),y:t+a*Math.sin(r)}}function Yp(e,t,a,n,r){let o=uo(e,t,a,r),u=uo(e,t,a,n),s=r-n<=180?"0":"1";return["M",o.x,o.y,"A",a,a,0,s,0,u.x,u.y].join(" ")}function Jp(e,t=so.Color.Red,a){let n=a?.background||(so.environment.appearance==="light"?"black":"white"),r=a?.backgroundOpacity||.1,o=10,s=50-5-o/2;return`data:image/svg+xml,${`<svg width="100px" height="100px">
      <circle cx="50" cy="50" r="${s}" stroke-width="${o}" stroke="${e<1?n:t}" opacity="${e<1?r:"1"}" fill="none" />
      ${e>0&&e<1?`<path d="${Yp(50,50,s,0,e*360)}" stroke="${t}" stroke-width="${o}" fill="none" />`:""}
    </svg>
  `.replaceAll(`
`,"")}`}fa.getProgressIcon=Jp});var lo=E(De=>{"use strict";var Zp=De&&De.__createBinding||(Object.create?(function(e,t,a,n){n===void 0&&(n=a);var r=Object.getOwnPropertyDescriptor(t,a);(!r||("get"in r?!t.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,r)}):(function(e,t,a,n){n===void 0&&(n=a),e[n]=t[a]})),Ar=De&&De.__exportStar||function(e,t){for(var a in e)a!=="default"&&!Object.prototype.hasOwnProperty.call(t,a)&&Zp(t,e,a)};Object.defineProperty(De,"__esModule",{value:!0});Ar(no(),De);Ar(io(),De);Ar(po(),De)});var co=E(k=>{"use strict";Object.defineProperty(k,"__esModule",{value:!0});k.zoomService=k.slackService=k.linearService=k.jiraService=k.googleService=k.githubService=k.asanaService=void 0;var z=require("@raycast/api"),Ge=fr(),Pa={asana:"1191201745684312",github:"7235fe8d42157f1f38c0",linear:"c8ff37b9225c3c9aefd7d66ea0e5b6f1",slack:"851756884692.5546927290212"},Be=e=>`data:image/svg+xml,${e}`,$e={asana:Be('<svg xmlns="http://www.w3.org/2000/svg" width="251" height="232" fill="none"><path fill="#F06A6A" d="M179.383 54.373c0 30.017-24.337 54.374-54.354 54.374-30.035 0-54.373-24.338-54.373-54.374C70.656 24.338 94.993 0 125.029 0c30.017 0 54.354 24.338 54.354 54.373ZM54.393 122.33C24.376 122.33.02 146.668.02 176.685c0 30.017 24.337 54.373 54.373 54.373 30.035 0 54.373-24.338 54.373-54.373 0-30.017-24.338-54.355-54.373-54.355Zm141.253 0c-30.035 0-54.373 24.338-54.373 54.374 0 30.035 24.338 54.373 54.373 54.373 30.017 0 54.374-24.338 54.374-54.373 0-30.036-24.338-54.374-54.374-54.374Z"/></svg>'),github:{source:Be('<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>'),tintColor:z.Color.PrimaryText},google:Be('<svg xmlns="http://www.w3.org/2000/svg" style="display:block" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/><path fill="none" d="M0 0h48v48H0z"/></svg>'),jira:Be('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="2361" height="2500" viewBox="2.59 0 214.091 224"><linearGradient id="a" x1="102.4" x2="56.15" y1="218.63" y2="172.39" gradientTransform="matrix(1 0 0 -1 0 264)" gradientUnits="userSpaceOnUse"><stop offset=".18" stop-color="#0052cc"/><stop offset="1" stop-color="#2684ff"/></linearGradient><linearGradient xlink:href="#a" id="b" x1="114.65" x2="160.81" y1="85.77" y2="131.92"/><path fill="#2684ff" d="M214.06 105.73 117.67 9.34 108.33 0 35.77 72.56 2.59 105.73a8.89 8.89 0 0 0 0 12.54l66.29 66.29L108.33 224l72.55-72.56 1.13-1.12 32.05-32a8.87 8.87 0 0 0 0-12.59zm-105.73 39.39L75.21 112l33.12-33.12L141.44 112z"/><path fill="url(#a)" d="M108.33 78.88a55.75 55.75 0 0 1-.24-78.61L35.62 72.71l39.44 39.44z"/><path fill="url(#b)" d="m141.53 111.91-33.2 33.21a55.77 55.77 0 0 1 0 78.86L181 151.35z"/></svg>'),linear:{source:{light:Be('<svg xmlns="http://www.w3.org/2000/svg" fill="#222326" width="200" height="200" viewBox="0 0 100 100"><path d="M1.22541 61.5228c-.2225-.9485.90748-1.5459 1.59638-.857L39.3342 97.1782c.6889.6889.0915 1.8189-.857 1.5964C20.0515 94.4522 5.54779 79.9485 1.22541 61.5228ZM.00189135 46.8891c-.01764375.2833.08887215.5599.28957165.7606L52.3503 99.7085c.2007.2007.4773.3075.7606.2896 2.3692-.1476 4.6938-.46 6.9624-.9259.7645-.157 1.0301-1.0963.4782-1.6481L2.57595 39.4485c-.55186-.5519-1.49117-.2863-1.648174.4782-.465915 2.2686-.77832 4.5932-.92588465 6.9624ZM4.21093 29.7054c-.16649.3738-.08169.8106.20765 1.1l64.77602 64.776c.2894.2894.7262.3742 1.1.2077 1.7861-.7956 3.5171-1.6927 5.1855-2.684.5521-.328.6373-1.0867.1832-1.5407L8.43566 24.3367c-.45409-.4541-1.21271-.3689-1.54074.1832-.99132 1.6684-1.88843 3.3994-2.68399 5.1855ZM12.6587 18.074c-.3701-.3701-.393-.9637-.0443-1.3541C21.7795 6.45931 35.1114 0 49.9519 0 77.5927 0 100 22.4073 100 50.0481c0 14.8405-6.4593 28.1724-16.7199 37.3375-.3903.3487-.984.3258-1.3542-.0443L12.6587 18.074Z"/></svg>'),dark:Be('<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="200" height="200" viewBox="0 0 100 100"><path d="M1.22541 61.5228c-.2225-.9485.90748-1.5459 1.59638-.857L39.3342 97.1782c.6889.6889.0915 1.8189-.857 1.5964C20.0515 94.4522 5.54779 79.9485 1.22541 61.5228ZM.00189135 46.8891c-.01764375.2833.08887215.5599.28957165.7606L52.3503 99.7085c.2007.2007.4773.3075.7606.2896 2.3692-.1476 4.6938-.46 6.9624-.9259.7645-.157 1.0301-1.0963.4782-1.6481L2.57595 39.4485c-.55186-.5519-1.49117-.2863-1.648174.4782-.465915 2.2686-.77832 4.5932-.92588465 6.9624ZM4.21093 29.7054c-.16649.3738-.08169.8106.20765 1.1l64.77602 64.776c.2894.2894.7262.3742 1.1.2077 1.7861-.7956 3.5171-1.6927 5.1855-2.684.5521-.328.6373-1.0867.1832-1.5407L8.43566 24.3367c-.45409-.4541-1.21271-.3689-1.54074.1832-.99132 1.6684-1.88843 3.3994-2.68399 5.1855ZM12.6587 18.074c-.3701-.3701-.393-.9637-.0443-1.3541C21.7795 6.45931 35.1114 0 49.9519 0 77.5927 0 100 22.4073 100 50.0481c0 14.8405-6.4593 28.1724-16.7199 37.3375-.3903.3487-.984.3258-1.3542-.0443L12.6587 18.074Z" /></svg>')}},slack:Be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="73 73 124 124"><style>.st0{fill:#e01e5a}.st1{fill:#36c5f0}.st2{fill:#2eb67d}.st3{fill:#ecb22e}</style><path d="M99.4 151.2c0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9h12.9v12.9zM105.9 151.2c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v32.3c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9v-32.3z" class="st0"/><path d="M118.8 99.4c-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v12.9h-12.9zM118.8 105.9c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H86.5c-7.1 0-12.9-5.8-12.9-12.9s5.8-12.9 12.9-12.9h32.3z" class="st1"/><path d="M170.6 118.8c0-7.1 5.8-12.9 12.9-12.9 7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9h-12.9v-12.9zM164.1 118.8c0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9V86.5c0-7.1 5.8-12.9 12.9-12.9 7.1 0 12.9 5.8 12.9 12.9v32.3z" class="st2"/><path d="M151.2 170.6c7.1 0 12.9 5.8 12.9 12.9 0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9v-12.9h12.9zM151.2 164.1c-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9h32.3c7.1 0 12.9 5.8 12.9 12.9 0 7.1-5.8 12.9-12.9 12.9h-32.3z" class="st3"/></svg>'),zoom:Be('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 351.845 80"><path d="M73.786 78.835H10.88A10.842 10.842 0 0 1 .833 72.122a10.841 10.841 0 0 1 2.357-11.85L46.764 16.7h-31.23C6.954 16.699 0 9.744 0 1.165h58.014c4.414 0 8.357 2.634 10.046 6.712a10.843 10.843 0 0 1-2.356 11.85L22.13 63.302h36.122c8.58 0 15.534 6.955 15.534 15.534Zm278.059-48.544C351.845 13.588 338.256 0 321.553 0c-8.934 0-16.975 3.89-22.524 10.063C293.48 3.89 285.44 0 276.505 0c-16.703 0-30.291 13.588-30.291 30.291v48.544c8.579 0 15.534-6.955 15.534-15.534v-33.01c0-8.137 6.62-14.757 14.757-14.757s14.757 6.62 14.757 14.757v33.01c0 8.58 6.955 15.534 15.534 15.534V30.291c0-8.137 6.62-14.757 14.757-14.757s14.758 6.62 14.758 14.757v33.01c0 8.58 6.954 15.534 15.534 15.534V30.291ZM238.447 40c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.908-40 40-40 40 17.909 40 40Zm-15.534 0c0-13.512-10.954-24.466-24.466-24.466S173.98 26.488 173.98 40s10.953 24.466 24.466 24.466S222.913 53.512 222.913 40Zm-70.68 0c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.909-40 40-40 40 17.909 40 40Zm-15.534 0c0-13.512-10.954-24.466-24.466-24.466S87.767 26.488 87.767 40s10.954 24.466 24.466 24.466S136.699 53.512 136.699 40Z" style="fill:#0b5cff"/></svg>')},Xp=e=>new Ge.OAuthService({client:new z.OAuth.PKCEClient({redirectMethod:z.OAuth.RedirectMethod.Web,providerName:"Asana",providerIcon:$e.asana,providerId:"asana",description:"Connect your Asana account"}),clientId:e.clientId??Pa.asana,authorizeUrl:e.authorizeUrl??"https://asana.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://asana.oauth.raycast.com/token",refreshTokenUrl:e.refreshTokenUrl??"https://asana.oauth.raycast.com/refresh-token",scope:e.scope,personalAccessToken:e.personalAccessToken,onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});k.asanaService=Xp;var el=e=>new Ge.OAuthService({client:new z.OAuth.PKCEClient({redirectMethod:z.OAuth.RedirectMethod.Web,providerName:"GitHub",providerIcon:$e.github,providerId:"github",description:"Connect your GitHub account"}),clientId:e.clientId??Pa.github,authorizeUrl:e.authorizeUrl??"https://github.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://github.oauth.raycast.com/token",refreshTokenUrl:e.refreshTokenUrl??"https://github.oauth.raycast.com/refresh-token",scope:e.scope,personalAccessToken:e.personalAccessToken,onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});k.githubService=el;var tl=e=>new Ge.OAuthService({client:new z.OAuth.PKCEClient({redirectMethod:z.OAuth.RedirectMethod.AppURI,providerName:"Google",providerIcon:$e.google,providerId:"google",description:"Connect your Google account"}),clientId:e.clientId,authorizeUrl:e.authorizeUrl??"https://accounts.google.com/o/oauth2/v2/auth",tokenUrl:e.tokenUrl??"https://oauth2.googleapis.com/token",refreshTokenUrl:e.tokenUrl,scope:e.scope,personalAccessToken:e.personalAccessToken,bodyEncoding:e.bodyEncoding??"url-encoded",onAuthorize:e.onAuthorize,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});k.googleService=tl;var al=e=>new Ge.OAuthService({client:new z.OAuth.PKCEClient({redirectMethod:z.OAuth.RedirectMethod.Web,providerName:"Jira",providerIcon:$e.jira,providerId:"jira",description:"Connect your Jira account"}),clientId:e.clientId,authorizeUrl:e.authorizeUrl??"https://auth.atlassian.com/authorize",tokenUrl:e.tokenUrl??"https://auth.atlassian.com/oauth/token",refreshTokenUrl:e.refreshTokenUrl,scope:e.scope,personalAccessToken:e.personalAccessToken,onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});k.jiraService=al;var rl=e=>new Ge.OAuthService({client:new z.OAuth.PKCEClient({redirectMethod:z.OAuth.RedirectMethod.Web,providerName:"Linear",providerIcon:$e.linear,providerId:"linear",description:"Connect your Linear account"}),clientId:e.clientId??Pa.linear,authorizeUrl:e.authorizeUrl??"https://linear.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://linear.oauth.raycast.com/token",refreshTokenUrl:e.refreshTokenUrl??"https://linear.oauth.raycast.com/refresh-token",scope:e.scope,extraParameters:{actor:"user"},onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});k.linearService=rl;var nl=e=>new Ge.OAuthService({client:new z.OAuth.PKCEClient({redirectMethod:z.OAuth.RedirectMethod.Web,providerName:"Slack",providerIcon:$e.slack,providerId:"slack",description:"Connect your Slack account"}),clientId:e.clientId??Pa.slack,authorizeUrl:e.authorizeUrl??"https://slack.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://slack.oauth.raycast.com/token",refreshTokenUrl:e.tokenUrl??"https://slack.oauth.raycast.com/refresh-token",scope:"",extraParameters:{user_scope:e.scope},personalAccessToken:e.personalAccessToken,bodyEncoding:e.tokenUrl?e.bodyEncoding??"url-encoded":"json",onAuthorize:e.onAuthorize,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser??(t=>({access_token:t.authed_user.access_token,scope:t.authed_user.scope}))});k.slackService=nl;var ol=e=>new Ge.OAuthService({client:new z.OAuth.PKCEClient({redirectMethod:z.OAuth.RedirectMethod.Web,providerName:"Zoom",providerIcon:$e.zoom,providerId:"zoom",description:"Connect your Zoom account"}),clientId:e.clientId,authorizeUrl:e.authorizeUrl??"https://zoom.us/oauth/authorize",tokenUrl:e.tokenUrl??"https://zoom.us/oauth/token",refreshTokenUrl:e.refreshTokenUrl,scope:e.scope,personalAccessToken:e.personalAccessToken,bodyEncoding:e.bodyEncoding??"url-encoded",onAuthorize:e.onAuthorize,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});k.zoomService=ol});var fr=E(bt=>{"use strict";var il=bt&&bt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(bt,"__esModule",{value:!0});bt.OAuthService=void 0;var yo=il(Ot()),Qe=co(),Me=class{constructor(t){this.clientId=t.clientId,this.scope=Array.isArray(t.scope)?t.scope.join(" "):t.scope,this.personalAccessToken=t.personalAccessToken,this.bodyEncoding=t.bodyEncoding,this.client=t.client,this.extraParameters=t.extraParameters,this.authorizeUrl=t.authorizeUrl,this.tokenUrl=t.tokenUrl,this.refreshTokenUrl=t.refreshTokenUrl,this.onAuthorize=t.onAuthorize,this.tokenResponseParser=t.tokenResponseParser??(a=>a),this.tokenRefreshResponseParser=t.tokenRefreshResponseParser??(a=>a),this.authorize=this.authorize.bind(this)}async authorize(){let t=await this.client.getTokens();if(t?.accessToken){if(t.refreshToken&&t.isExpired()){let o=await this.refreshTokens({token:t.refreshToken});if(o)return await this.client.setTokens(o),o.access_token}return t.accessToken}let a=await this.client.authorizationRequest({endpoint:this.authorizeUrl,clientId:this.clientId,scope:this.scope,extraParameters:this.extraParameters}),{authorizationCode:n}=await this.client.authorize(a),r=await this.fetchTokens({authRequest:a,authorizationCode:n});return await this.client.setTokens(r),r.access_token}async fetchTokens({authRequest:t,authorizationCode:a}){let n;if(this.bodyEncoding==="url-encoded"){let u=new URLSearchParams;u.append("client_id",this.clientId),u.append("code",a),u.append("code_verifier",t.codeVerifier),u.append("grant_type","authorization_code"),u.append("redirect_uri",t.redirectURI),n={body:u}}else n={body:JSON.stringify({client_id:this.clientId,code:a,code_verifier:t.codeVerifier,grant_type:"authorization_code",redirect_uri:t.redirectURI}),headers:{"Content-Type":"application/json"}};let r=await(0,yo.default)(this.tokenUrl,{method:"POST",...n});if(!r.ok){let u=await r.text();throw console.error("fetch tokens error:",u),new Error(`Error while fetching tokens: ${r.status} (${r.statusText})
${u}`)}let o=this.tokenResponseParser(await r.json());return Array.isArray(o.scope)?{...o,scope:o.scope.join(" ")}:o}async refreshTokens({token:t}){let a;if(this.bodyEncoding==="url-encoded"){let r=new URLSearchParams;r.append("client_id",this.clientId),r.append("refresh_token",t),r.append("grant_type","refresh_token"),a={body:r}}else a={body:JSON.stringify({client_id:this.clientId,refresh_token:t,grant_type:"refresh_token"}),headers:{"Content-Type":"application/json"}};let n=await(0,yo.default)(this.refreshTokenUrl??this.tokenUrl,{method:"POST",...a});if(n.ok){let r=this.tokenRefreshResponseParser(await n.json());return r.refresh_token=r.refresh_token??t,r}else{let r=await n.text();console.error("refresh tokens error:",r),this.client.description=`${this.client.providerName} needs you to sign-in again. Press \u23CE or click the button below to continue.`,await this.client.removeTokens(),await this.authorize()}}};bt.OAuthService=Me;Me.asana=Qe.asanaService;Me.github=Qe.githubService;Me.google=Qe.googleService;Me.jira=Qe.jiraService;Me.linear=Qe.linearService;Me.slack=Qe.slackService;Me.zoom=Qe.zoomService});var So=E(It=>{"use strict";Object.defineProperty(It,"__esModule",{value:!0});It.getAccessToken=It.withAccessToken=void 0;var sl=require("react/jsx-runtime"),ul=require("@raycast/api"),Le=null,We=null,Pr=null,Er=null,Cr=null;function pl(e){return ul.environment.commandMode==="no-view"?t=>async n=>{if(!Le){Le=e.personalAccessToken??await e.authorize(),We=e.personalAccessToken?"personal":"oauth";let r=(await e.client?.getTokens())?.idToken;e.onAuthorize&&await Promise.resolve(e.onAuthorize({token:Le,type:We,idToken:r}))}return t(n)}:t=>{let a=n=>{e.personalAccessToken?(Le=e.personalAccessToken,We="personal"):(Pr||(Pr=hr(e.authorize())),Le=Pr.read(),We="oauth");let r;return e.client&&(Er||(Er=hr(e.client.getTokens())),r=Er.read()?.idToken),!Cr&&e.onAuthorize&&(Cr=hr(Promise.resolve(e.onAuthorize({token:Le,type:We,idToken:r})))),Cr?.read(),(0,sl.jsx)(t,{...n})};return a.displayName=`withAccessToken(${t.displayName||t.name})`,a}}It.withAccessToken=pl;function ll(){if(!Le||!We)throw new Error("getAccessToken must be used when authenticated (eg. used inside `withAccessToken`)");return{token:Le,type:We}}It.getAccessToken=ll;function hr(e){let t="pending",a,n=e.then(o=>{t="success",a=o},o=>{t="error",a=o});return{read:()=>{switch(t){case"pending":throw n;case"error":throw a;default:return a}}}}});var Io=E(qe=>{"use strict";var cl=qe&&qe.__createBinding||(Object.create?(function(e,t,a,n){n===void 0&&(n=a);var r=Object.getOwnPropertyDescriptor(t,a);(!r||("get"in r?!t.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,r)}):(function(e,t,a,n){n===void 0&&(n=a),e[n]=t[a]})),bo=qe&&qe.__exportStar||function(e,t){for(var a in e)a!=="default"&&!Object.prototype.hasOwnProperty.call(t,a)&&cl(t,e,a)};Object.defineProperty(qe,"__esModule",{value:!0});bo(fr(),qe);bo(So(),qe)});var Ao=E(re=>{"use strict";var go=re&&re.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(re,"__esModule",{value:!0});re.createDeeplink=re.createExtensionDeeplink=re.createScriptCommandDeeplink=re.DeeplinkType=void 0;var xr=require("@raycast/api"),yl=go(require("node:fs")),dl=go(require("node:path")),Dr;(function(e){e.ScriptCommand="script-command",e.Extension="extension"})(Dr||(re.DeeplinkType=Dr={}));function Mo(){return xr.environment.raycastVersion.includes("alpha")?"raycastinternal://":"raycast://"}function Sl(){let e=JSON.parse(yl.default.readFileSync(dl.default.join(xr.environment.assetsPath,"..","package.json"),"utf8"));return e.owner||e.author}function mo(e){let t=`${Mo()}script-commands/${e.command}`;if(e.arguments){let a="";for(let n of e.arguments)a+="&arguments="+encodeURIComponent(n);t+="?"+a.substring(1)}return t}re.createScriptCommandDeeplink=mo;function Ro(e){let t=Sl(),a=xr.environment.extensionName;"ownerOrAuthorName"in e&&"extensionName"in e&&(t=e.ownerOrAuthorName,a=e.extensionName);let n=`${Mo()}extensions/${t}/${a}/${e.command}`,r="";return e.launchType&&(r+="&launchType="+encodeURIComponent(e.launchType)),e.arguments&&(r+="&arguments="+encodeURIComponent(JSON.stringify(e.arguments))),e.context&&(r+="&context="+encodeURIComponent(JSON.stringify(e.context))),e.fallbackText&&(r+="&fallbackText="+encodeURIComponent(e.fallbackText)),r&&(n+="?"+r.substring(1)),n}re.createExtensionDeeplink=Ro;function bl(e){return e.type===Dr.ScriptCommand?mo(e):Ro(e)}re.createDeeplink=bl});var fo=E(Ea=>{"use strict";Object.defineProperty(Ea,"__esModule",{value:!0});Ea.executeSQL=void 0;var Il=Sr();function gl(e,t){return(0,Il.baseExecuteSQL)(e,t)}Ea.executeSQL=gl});var Po=E(gt=>{"use strict";var Ml=gt&&gt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(gt,"__esModule",{value:!0});gt.runAppleScript=void 0;var ml=Ml(require("node:child_process")),Vt=pa();async function Rl(e,t,a){let{humanReadableOutput:n,language:r,timeout:o,...u}=Array.isArray(t)?a||{}:t||{},s=n!==!1?[]:["-ss"];r==="JavaScript"&&s.push("-l","JavaScript"),Array.isArray(t)&&s.push("-",...t);let i=ml.default.spawn("osascript",s,{...u,env:{PATH:"/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"}}),p=(0,Vt.getSpawnedPromise)(i,{timeout:o??1e4});i.stdin.end(e);let[{error:c,exitCode:y,signal:I,timedOut:m},l,b]=await(0,Vt.getSpawnedResult)(i,{encoding:"utf8"},p),d=(0,Vt.handleOutput)({stripFinalNewline:!0},l),S=(0,Vt.handleOutput)({stripFinalNewline:!0},b);return(0,Vt.defaultParsing)({stdout:d,stderr:S,error:c,exitCode:y,signal:I,timedOut:m,command:"osascript",options:a,parentError:new Error})}gt.runAppleScript=Rl});var Eo=E(ha=>{"use strict";Object.defineProperty(ha,"__esModule",{value:!0});ha.withCache=void 0;var Al=require("@raycast/api"),Ca=ve();function fl(e,t){let a=new Al.Cache({namespace:(0,Ca.hash)(e)}),n=async(...r)=>{let o=(0,Ca.hash)(r||[])+t?.internal_cacheKeySuffix,u=a.get(o);if(u){let{data:i,timestamp:p}=JSON.parse(u,Ca.reviver);if(!(t?.maxAge&&Date.now()-p>t.maxAge)&&(!t?.validate||t.validate(i)))return i}let s=await e(...r);return a.set(o,JSON.stringify({data:s,timestamp:Date.now()},Ca.replacer)),s};return n.clearCache=()=>{a.clear()},n}ha.withCache=fl});var kt=E(D=>{"use strict";var Pl=D&&D.__createBinding||(Object.create?(function(e,t,a,n){n===void 0&&(n=a);var r=Object.getOwnPropertyDescriptor(t,a);(!r||("get"in r?!t.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,r)}):(function(e,t,a,n){n===void 0&&(n=a),e[n]=t[a]})),O=D&&D.__exportStar||function(e,t){for(var a in e)a!=="default"&&!Object.prototype.hasOwnProperty.call(t,a)&&Pl(t,e,a)};Object.defineProperty(D,"__esModule",{value:!0});O(at(),D);O(aa(),D);O(xt(),D);O(Dn(),D);O(Tn(),D);O(Ln(),D);O(kn(),D);O(Fn(),D);O(Hn(),D);O(Qn(),D);O(Yn(),D);O(lo(),D);O(Io(),D);O(Ao(),D);O(fo(),D);O(Po(),D);O(Ct(),D);O(Eo(),D)});var G={};et(G,{default:()=>Lo.default});var Lo,wa=Ga(()=>{H(G,require("formdata-polyfill/esm.min.js"));Lo=L(require("formdata-polyfill/esm.min.js"))});var Y={};et(Y,{default:()=>ko.default});var ko,Tr=Ga(()=>{H(Y,require("fetch-blob/from.js"));ko=L(require("fetch-blob/from.js"))});var Fo={};et(Fo,{toFormData:()=>Hl});function zl(e){let t=e.match(/\bfilename=("(.*?)"|([^()<>@,;:\\"/[\]?={}\s\t]+))($|;\s)/i);if(!t)return;let a=t[2]||t[3]||"",n=a.slice(a.lastIndexOf("\\")+1);return n=n.replace(/%22/g,'"'),n=n.replace(/&#(\d{4});/g,(r,o)=>String.fromCharCode(o)),n}async function Hl(e,t){if(!/multipart/i.test(t))throw new TypeError("Failed to fetch");let a=t.match(/boundary=(?:"([^"]+)"|([^;]+))/i);if(!a)throw new TypeError("no or bad content-type header, no multipart boundary");let n=new wr(a[1]||a[2]),r,o,u,s,i,p,c=[],y=new G.FormData,I=S=>{u+=d.decode(S,{stream:!0})},m=S=>{c.push(S)},l=()=>{let S=new Y.File(c,p,{type:i});y.append(s,S)},b=()=>{y.append(s,u)},d=new TextDecoder("utf-8");d.decode(),n.onPartBegin=function(){n.onPartData=I,n.onPartEnd=b,r="",o="",u="",s="",i="",p=null,c.length=0},n.onHeaderField=function(S){r+=d.decode(S,{stream:!0})},n.onHeaderValue=function(S){o+=d.decode(S,{stream:!0})},n.onHeaderEnd=function(){if(o+=d.decode(),r=r.toLowerCase(),r==="content-disposition"){let S=o.match(/\bname=("([^"]*)"|([^()<>@,;:\\"/[\]?={}\s\t]+))/i);S&&(s=S[2]||S[3]||""),p=zl(o),p&&(n.onPartData=m,n.onPartEnd=l)}else r==="content-type"&&(i=o);o="",r=""};for await(let S of e)n.write(S);return n.end(),y}var me,h,jo,ke,Ba,La,Nl,Ht,Vl,kl,jl,Fl,Je,wr,zo=Ga(()=>{Tr();wa();me=0,h={START_BOUNDARY:me++,HEADER_FIELD_START:me++,HEADER_FIELD:me++,HEADER_VALUE_START:me++,HEADER_VALUE:me++,HEADER_VALUE_ALMOST_DONE:me++,HEADERS_ALMOST_DONE:me++,PART_DATA_START:me++,PART_DATA:me++,END:me++},jo=1,ke={PART_BOUNDARY:jo,LAST_BOUNDARY:jo*=2},Ba=10,La=13,Nl=32,Ht=45,Vl=58,kl=97,jl=122,Fl=e=>e|32,Je=()=>{},wr=class{constructor(t){this.index=0,this.flags=0,this.onHeaderEnd=Je,this.onHeaderField=Je,this.onHeadersEnd=Je,this.onHeaderValue=Je,this.onPartBegin=Je,this.onPartData=Je,this.onPartEnd=Je,this.boundaryChars={},t=`\r
--`+t;let a=new Uint8Array(t.length);for(let n=0;n<t.length;n++)a[n]=t.charCodeAt(n),this.boundaryChars[a[n]]=!0;this.boundary=a,this.lookbehind=new Uint8Array(this.boundary.length+8),this.state=h.START_BOUNDARY}write(t){let a=0,n=t.length,r=this.index,{lookbehind:o,boundary:u,boundaryChars:s,index:i,state:p,flags:c}=this,y=this.boundary.length,I=y-1,m=t.length,l,b,d=M=>{this[M+"Mark"]=a},S=M=>{delete this[M+"Mark"]},R=(M,P,A,_)=>{(P===void 0||P!==A)&&this[M](_&&_.subarray(P,A))},f=(M,P)=>{let A=M+"Mark";A in this&&(P?(R(M,this[A],a,t),delete this[A]):(R(M,this[A],t.length,t),this[A]=0))};for(a=0;a<n;a++)switch(l=t[a],p){case h.START_BOUNDARY:if(i===u.length-2){if(l===Ht)c|=ke.LAST_BOUNDARY;else if(l!==La)return;i++;break}else if(i-1===u.length-2){if(c&ke.LAST_BOUNDARY&&l===Ht)p=h.END,c=0;else if(!(c&ke.LAST_BOUNDARY)&&l===Ba)i=0,R("onPartBegin"),p=h.HEADER_FIELD_START;else return;break}l!==u[i+2]&&(i=-2),l===u[i+2]&&i++;break;case h.HEADER_FIELD_START:p=h.HEADER_FIELD,d("onHeaderField"),i=0;case h.HEADER_FIELD:if(l===La){S("onHeaderField"),p=h.HEADERS_ALMOST_DONE;break}if(i++,l===Ht)break;if(l===Vl){if(i===1)return;f("onHeaderField",!0),p=h.HEADER_VALUE_START;break}if(b=Fl(l),b<kl||b>jl)return;break;case h.HEADER_VALUE_START:if(l===Nl)break;d("onHeaderValue"),p=h.HEADER_VALUE;case h.HEADER_VALUE:l===La&&(f("onHeaderValue",!0),R("onHeaderEnd"),p=h.HEADER_VALUE_ALMOST_DONE);break;case h.HEADER_VALUE_ALMOST_DONE:if(l!==Ba)return;p=h.HEADER_FIELD_START;break;case h.HEADERS_ALMOST_DONE:if(l!==Ba)return;R("onHeadersEnd"),p=h.PART_DATA_START;break;case h.PART_DATA_START:p=h.PART_DATA,d("onPartData");case h.PART_DATA:if(r=i,i===0){for(a+=I;a<m&&!(t[a]in s);)a+=y;a-=I,l=t[a]}if(i<u.length)u[i]===l?(i===0&&f("onPartData",!0),i++):i=0;else if(i===u.length)i++,l===La?c|=ke.PART_BOUNDARY:l===Ht?c|=ke.LAST_BOUNDARY:i=0;else if(i-1===u.length)if(c&ke.PART_BOUNDARY){if(i=0,l===Ba){c&=~ke.PART_BOUNDARY,R("onPartEnd"),R("onPartBegin"),p=h.HEADER_FIELD_START;break}}else c&ke.LAST_BOUNDARY&&l===Ht?(R("onPartEnd"),p=h.END,c=0):i=0;if(i>0)o[i-1]=l;else if(r>0){let M=new Uint8Array(o.buffer,o.byteOffset,o.byteLength);R("onPartData",0,r,M),r=0,d("onPartData"),a--}break;case h.END:break;default:throw new Error(`Unexpected state entered: ${p}`)}f("onHeaderField"),f("onHeaderValue"),f("onPartData"),this.index=i,this.state=p,this.flags=c}end(){if(this.state===h.HEADER_FIELD_START&&this.index===0||this.state===h.PART_DATA&&this.index===this.boundary.length)this.onPartEnd();else if(this.state!==h.END)throw new Error("MultipartParser.end(): stream ended unexpectedly")}}});var pc={};et(pc,{default:()=>uc});module.exports=Ci(pc);var x=require("@raycast/api");var T=require("@raycast/api"),Vr=L(require("react")),je=require("react/jsx-runtime");function $a(e,t=100){return e.length>t?e.slice(0,t)+" ...":e}function kr(e){let t=e.error,a=()=>{(0,T.launchCommand)({name:T.environment.commandName,type:T.LaunchType.UserInitiated})};return(0,je.jsx)(T.MenuBarExtra,{icon:e.icon,isLoading:e.isLoading,title:e.title,tooltip:e.tooltip,children:t?(0,je.jsx)(Ae,{title:`Error: ${t}`,icon:{source:T.Icon.Warning},onAction:a}):e.children})}function Ae(e){return(0,je.jsx)(T.MenuBarExtra.Item,{title:$a(e.title),icon:e.icon,subtitle:e.subtitle,shortcut:e.shortcut,onAction:e.onAction,tooltip:e.tooltip})}function hi(e,t){if(!t)return{shown:e,hidden:0};if(Vr.default.isValidElement(e))return{shown:[e],hidden:0};let a=e;if(!a||a.length<=0)return{shown:void 0,hidden:0};let n=t||10,r=a.slice(0,n),o=a.length-r.length;return{shown:r,hidden:o}}function Di(e,t){if(!(!e||e.length<=0))return e.join(t)}function Fe(e){let t=Di([e.title,e.subtitle].filter(o=>o)," "),{shown:a,hidden:n}=hi(e.children,e.maxChildren),r=a===void 0||a.length<=0;return(0,je.jsxs)(T.MenuBarExtra.Section,{title:t,children:[a,n>0&&e.moreElement&&e.moreElement(n),r&&e.emptyElement&&e.emptyElement]})}function jr(){return(0,je.jsx)(T.MenuBarExtra.Item,{title:"Configure Command",shortcut:{macOS:{modifiers:["cmd"],key:","},Windows:{modifiers:["ctrl"],key:","}},icon:T.Icon.Gear,onAction:()=>(0,T.openCommandPreferences)()})}function Fr(e){let t=e.min||1,a=e.max||100,n=e.default||10,o=(0,T.getPreferenceValues)()[e.name]||"",u=Number(o);return isNaN(u)||u<t||u>a?n:u}var Jr=require("@raycast/api"),Ns=require("lodash");var g=L(require("graphql-tag")),Pt=g.default`
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
`,xi=g.default`
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
  ${Pt}
`,ye=g.default`
  fragment UserFields on User {
    id
    avatarUrl
    name
    login
    isViewer
  }
`,Et=g.default`
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
  ${ye}
`,Yt=g.default`
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
  ${Et}
  ${Pt}
  ${ye}
`,_i=g.default`
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
  ${Et}
  ${Pt}
  ${ye}
`,zr=g.default`
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
`,Hr=g.default`
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
`,Gr=g.default`
  fragment RepositoryMentionFields on Repository {
    nameWithOwner
    description
    isPrivate
    isArchived
    owner {
      avatarUrl(size: 64)
    }
  }
`,Ui=g.default`
  fragment ProjectViewerFields on ProjectV2View {
    id
    name
    number
  }
`,$r=g.default`
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
  ${Et}
  ${Ui}
`,Qr=g.default`
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
  ${Pt}
  ${Et}
  ${ye}
`,vi=g.default`
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
  ${Pt}
  ${Et}
  ${ye}
`,Ti=g.default`
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
`,Wr=g.default`
  fragment CommitFields on Commit {
    authoredDate
    oid
    message
  }
`,Qa=g.default`
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
`,wi=g.default`
  fragment ReleaseFields on Release {
    id
    description
    name
    publishedAt
    createdAt
    tagName
    url
  }
`,Oi=g.default`
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
`,Bi=g.default`
  mutation createRef($input: CreateRefInput!) {
    createRef(input: $input) {
      clientMutationId
      ref {
        id
        name
      }
    }
  }
`,Li=g.default`
  mutation deleteLinkedBranch($input: DeleteLinkedBranchInput!) {
    deleteLinkedBranch(input: $input) {
      clientMutationId
    }
  }
`,qi=g.default`
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
  ${xi}
`,Ni=g.default`
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
`,Vi=g.default`
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
  ${ye}
`,ki=g.default`
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
`,ji=g.default`
  query issueDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...IssueDetailFields
    }
  }
  ${_i}
`,Fi=g.default`
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
  ${Yt}
`,zi=g.default`
  query issueByNumber($owner: String!, $name: String!, $issueNumber: Int!) {
    repository(owner: $owner, name: $name) {
      issue(number: $issueNumber) {
        ...IssueFields
      }
    }
  }
  ${Yt}
`,Hi=g.default`
  mutation closeIssue($nodeId: ID!, $stateReason: IssueClosedStateReason!) {
    closeIssue(input: { issueId: $nodeId, stateReason: $stateReason }) {
      issue {
        id
      }
    }
  }
`,Gi=g.default`
  mutation reopenIssue($nodeId: ID!) {
    reopenIssue(input: { issueId: $nodeId }) {
      issue {
        id
      }
    }
  }
`,$i=g.default`
  mutation changeIssueAssignees($issueId: ID!, $assigneeIds: [ID!]) {
    updateIssue(input: { id: $issueId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,Qi=g.default`
  mutation changeIssueMilestone($issueId: ID!, $milestoneId: ID) {
    updateIssue(input: { id: $issueId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,Wi=g.default`
  mutation addIssueToProject($issueId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $issueId }) {
      clientMutationId
    }
  }
`,Ki=g.default`
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
  ${Yt}
`,Yi=g.default`
  query searchIssueMentions($query: String!, $numberOfItems: Int!) {
    search(query: $query, type: ISSUE, first: $numberOfItems) {
      nodes {
        ... on Issue {
          ...IssueMentionFields
        }
      }
    }
  }
  ${zr}
`,Ji=g.default`
  query searchPullRequestMentions($query: String!, $numberOfItems: Int!) {
    search(query: $query, type: ISSUE, first: $numberOfItems) {
      nodes {
        ... on PullRequest {
          ...PullRequestMentionFields
        }
      }
    }
  }
  ${Hr}
`,Zi=g.default`
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
  ${zr}
  ${Hr}
`,Xi=g.default`
  query searchRepositoryMentions($query: String!, $numberOfItems: Int!) {
    search(query: $query, type: REPOSITORY, first: $numberOfItems) {
      nodes {
        ... on Repository {
          ...RepositoryMentionFields
        }
      }
    }
  }
  ${Gr}
`,es=g.default`
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
  ${Gr}
`,ts=g.default`
  mutation changeProjectStatus($projectId: ID!, $closed: Boolean!) {
    updateProjectV2(input: { projectId: $projectId, closed: $closed }) {
      clientMutationId
    }
  }
`,as=g.default`
  query projectDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...ProjectFields
    }
  }
  ${$r}
`,rs=g.default`
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
  ${Qr}
`,ns=g.default`
  query pullRequestDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...PullRequestDetailsFields
    }
  }
  ${vi}
`,os=g.default`
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
  ${ye}
`,is=g.default`
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
`,ss=g.default`
  query pullRequestCommits($nodeId: ID!, $numberOfItems: Int!, $before: String) {
    node(id: $nodeId) {
      ...PullRequestCommitFields
    }
  }
  ${Ti}
`,us=g.default`
  mutation closePullRequest($nodeId: ID!) {
    closePullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,ps=g.default`
  mutation reopenPullRequest($nodeId: ID!) {
    reopenPullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,ls=g.default`
  mutation markPullRequestReadyForReview($nodeId: ID!) {
    markPullRequestReadyForReview(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,cs=g.default`
  mutation addPullRequestReview($nodeId: ID!, $event: PullRequestReviewEvent, $body: String) {
    addPullRequestReview(input: { pullRequestId: $nodeId, event: $event, body: $body }) {
      pullRequestReview {
        id
      }
    }
  }
`,ys=g.default`
  mutation changePullRequestAssignees($pullRequestId: ID!, $assigneeIds: [ID!]) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,ds=g.default`
  mutation changePullRequestMilestone($pullRequestId: ID!, $milestoneId: ID) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,Ss=g.default`
  mutation addPullRequestToProject($pullRequestId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $pullRequestId }) {
      clientMutationId
    }
  }
`,bs=g.default`
  mutation requestReview($pullRequestId: ID!, $collaboratorId: ID!) {
    requestReviews(input: { pullRequestId: $pullRequestId, userIds: [$collaboratorId], union: true }) {
      clientMutationId
    }
  }
`,Is=g.default`
  mutation mergePullRequest($nodeId: ID!, $method: PullRequestMergeMethod!) {
    mergePullRequest(input: { pullRequestId: $nodeId, mergeMethod: $method }) {
      pullRequest {
        nodeId: id
      }
    }
  }
`,gs=g.default`
  mutation addPullRequestToMergeQueue($nodeId: ID!) {
    enqueuePullRequest(input: { pullRequestId: $nodeId }) {
      __typename
    }
  }
`,Ms=g.default`
  mutation removePullRequestFromMergeQueue($nodeId: ID!) {
    dequeuePullRequest(input: { id: $nodeId }) {
      __typename
    }
  }
`,ms=g.default`
  mutation enablePullRequestAutoMerge($nodeId: ID!, $mergeMethod: PullRequestMergeMethod) {
    enablePullRequestAutoMerge(input: { pullRequestId: $nodeId, mergeMethod: $mergeMethod }) {
      pullRequest {
        id
      }
    }
  }
`,Rs=g.default`
  mutation disablePullRequestAutoMerge($nodeId: ID!) {
    disablePullRequestAutoMerge(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,As=g.default`
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
`,fs=g.default`
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
  ${Qr}
`,Ps=g.default`
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
  ${Qa}
`,Es=g.default`
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
  ${Qa}
`,Cs=g.default`
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
`,hs=g.default`
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
`,Ds=g.default`
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
  ${Wr}
  ${ye}
`,xs=g.default`
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
  ${Wr}
`,_s=g.default`
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
  ${Yt}
`,Us=g.default`
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
  ${wi}
`,vs=g.default`
  mutation addStar($repositoryId: ID!) {
    addStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,Ts=g.default`
  mutation removeStar($repositoryId: ID!) {
    removeStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,ws=g.default`
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
  ${Qa}
`,Os=g.default`
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
  ${ye}
  ${$r}
`,Bs=g.default`
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
  ${ye}
`,Ls=g.default`
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
`,qs=(e,t,a,n)=>e();function Kr(e,t=qs){return{createLinkedBranch(a,n,r){return t(o=>e.request({document:Oi,variables:a,requestHeaders:{...n,...o},signal:r}),"createLinkedBranch","mutation",a)},createRef(a,n,r){return t(o=>e.request({document:Bi,variables:a,requestHeaders:{...n,...o},signal:r}),"createRef","mutation",a)},deleteLinkedBranch(a,n,r){return t(o=>e.request({document:Li,variables:a,requestHeaders:{...n,...o},signal:r}),"deleteLinkedBranch","mutation",a)},searchDiscussions(a,n,r){return t(o=>e.request({document:qi,variables:a,requestHeaders:{...n,...o},signal:r}),"searchDiscussions","query",a)},getGitHubDiscussionNumber(a,n,r){return t(o=>e.request({document:Ni,variables:a,requestHeaders:{...n,...o},signal:r}),"getGitHubDiscussionNumber","query",a)},repositoryCollaboratorsForIssues(a,n,r){return t(o=>e.request({document:Vi,variables:a,requestHeaders:{...n,...o},signal:r}),"repositoryCollaboratorsForIssues","query",a)},repositoryProjectsForIssues(a,n,r){return t(o=>e.request({document:ki,variables:a,requestHeaders:{...n,...o},signal:r}),"repositoryProjectsForIssues","query",a)},issueDetails(a,n,r){return t(o=>e.request({document:ji,variables:a,requestHeaders:{...n,...o},signal:r}),"issueDetails","query",a)},searchIssues(a,n,r){return t(o=>e.request({document:Fi,variables:a,requestHeaders:{...n,...o},signal:r}),"searchIssues","query",a)},issueByNumber(a,n,r){return t(o=>e.request({document:zi,variables:a,requestHeaders:{...n,...o},signal:r}),"issueByNumber","query",a)},closeIssue(a,n,r){return t(o=>e.request({document:Hi,variables:a,requestHeaders:{...n,...o},signal:r}),"closeIssue","mutation",a)},reopenIssue(a,n,r){return t(o=>e.request({document:Gi,variables:a,requestHeaders:{...n,...o},signal:r}),"reopenIssue","mutation",a)},changeIssueAssignees(a,n,r){return t(o=>e.request({document:$i,variables:a,requestHeaders:{...n,...o},signal:r}),"changeIssueAssignees","mutation",a)},changeIssueMilestone(a,n,r){return t(o=>e.request({document:Qi,variables:a,requestHeaders:{...n,...o},signal:r}),"changeIssueMilestone","mutation",a)},addIssueToProject(a,n,r){return t(o=>e.request({document:Wi,variables:a,requestHeaders:{...n,...o},signal:r}),"addIssueToProject","mutation",a)},createIssue(a,n,r){return t(o=>e.request({document:Ki,variables:a,requestHeaders:{...n,...o},signal:r}),"createIssue","mutation",a)},searchIssueMentions(a,n,r){return t(o=>e.request({document:Yi,variables:a,requestHeaders:{...n,...o},signal:r}),"searchIssueMentions","query",a)},searchPullRequestMentions(a,n,r){return t(o=>e.request({document:Ji,variables:a,requestHeaders:{...n,...o},signal:r}),"searchPullRequestMentions","query",a)},issueOrPullRequestMention(a,n,r){return t(o=>e.request({document:Zi,variables:a,requestHeaders:{...n,...o},signal:r}),"issueOrPullRequestMention","query",a)},searchRepositoryMentions(a,n,r){return t(o=>e.request({document:Xi,variables:a,requestHeaders:{...n,...o},signal:r}),"searchRepositoryMentions","query",a)},viewerRepositoryMentions(a,n,r){return t(o=>e.request({document:es,variables:a,requestHeaders:{...n,...o},signal:r}),"viewerRepositoryMentions","query",a)},changeProjectStatus(a,n,r){return t(o=>e.request({document:ts,variables:a,requestHeaders:{...n,...o},signal:r}),"changeProjectStatus","mutation",a)},projectDetails(a,n,r){return t(o=>e.request({document:as,variables:a,requestHeaders:{...n,...o},signal:r}),"projectDetails","query",a)},searchPullRequests(a,n,r){return t(o=>e.request({document:rs,variables:a,requestHeaders:{...n,...o},signal:r}),"searchPullRequests","query",a)},pullRequestDetails(a,n,r){return t(o=>e.request({document:ns,variables:a,requestHeaders:{...n,...o},signal:r}),"pullRequestDetails","query",a)},repositoryCollaboratorsForPullRequests(a,n,r){return t(o=>e.request({document:os,variables:a,requestHeaders:{...n,...o},signal:r}),"repositoryCollaboratorsForPullRequests","query",a)},repositoryProjectsForPullRequests(a,n,r){return t(o=>e.request({document:is,variables:a,requestHeaders:{...n,...o},signal:r}),"repositoryProjectsForPullRequests","query",a)},pullRequestCommits(a,n,r){return t(o=>e.request({document:ss,variables:a,requestHeaders:{...n,...o},signal:r}),"pullRequestCommits","query",a)},closePullRequest(a,n,r){return t(o=>e.request({document:us,variables:a,requestHeaders:{...n,...o},signal:r}),"closePullRequest","mutation",a)},reopenPullRequest(a,n,r){return t(o=>e.request({document:ps,variables:a,requestHeaders:{...n,...o},signal:r}),"reopenPullRequest","mutation",a)},markPullRequestReadyForReview(a,n,r){return t(o=>e.request({document:ls,variables:a,requestHeaders:{...n,...o},signal:r}),"markPullRequestReadyForReview","mutation",a)},addPullRequestReview(a,n,r){return t(o=>e.request({document:cs,variables:a,requestHeaders:{...n,...o},signal:r}),"addPullRequestReview","mutation",a)},changePullRequestAssignees(a,n,r){return t(o=>e.request({document:ys,variables:a,requestHeaders:{...n,...o},signal:r}),"changePullRequestAssignees","mutation",a)},changePullRequestMilestone(a,n,r){return t(o=>e.request({document:ds,variables:a,requestHeaders:{...n,...o},signal:r}),"changePullRequestMilestone","mutation",a)},addPullRequestToProject(a,n,r){return t(o=>e.request({document:Ss,variables:a,requestHeaders:{...n,...o},signal:r}),"addPullRequestToProject","mutation",a)},requestReview(a,n,r){return t(o=>e.request({document:bs,variables:a,requestHeaders:{...n,...o},signal:r}),"requestReview","mutation",a)},mergePullRequest(a,n,r){return t(o=>e.request({document:Is,variables:a,requestHeaders:{...n,...o},signal:r}),"mergePullRequest","mutation",a)},addPullRequestToMergeQueue(a,n,r){return t(o=>e.request({document:gs,variables:a,requestHeaders:{...n,...o},signal:r}),"addPullRequestToMergeQueue","mutation",a)},removePullRequestFromMergeQueue(a,n,r){return t(o=>e.request({document:Ms,variables:a,requestHeaders:{...n,...o},signal:r}),"removePullRequestFromMergeQueue","mutation",a)},enablePullRequestAutoMerge(a,n,r){return t(o=>e.request({document:ms,variables:a,requestHeaders:{...n,...o},signal:r}),"enablePullRequestAutoMerge","mutation",a)},disablePullRequestAutoMerge(a,n,r){return t(o=>e.request({document:Rs,variables:a,requestHeaders:{...n,...o},signal:r}),"disablePullRequestAutoMerge","mutation",a)},createPullRequest(a,n,r){return t(o=>e.request({document:As,variables:a,requestHeaders:{...n,...o},signal:r}),"createPullRequest","mutation",a)},initPullRequest(a,n,r){return t(o=>e.request({document:fs,variables:a,requestHeaders:{...n,...o},signal:r}),"initPullRequest","mutation",a)},searchRepositories(a,n,r){return t(o=>e.request({document:Ps,variables:a,requestHeaders:{...n,...o},signal:r}),"searchRepositories","query",a)},myLatestRepositories(a,n,r){return t(o=>e.request({document:Es,variables:a,requestHeaders:{...n,...o},signal:r}),"myLatestRepositories","query",a)},milestonesForRepository(a,n,r){return t(o=>e.request({document:Cs,variables:a,requestHeaders:{...n,...o},signal:r}),"milestonesForRepository","query",a)},commentsForPullRequest(a,n,r){return t(o=>e.request({document:hs,variables:a,requestHeaders:{...n,...o},signal:r}),"commentsForPullRequest","query",a)},dataForRepository(a,n,r){return t(o=>e.request({document:Ds,variables:a,requestHeaders:{...n,...o},signal:r}),"dataForRepository","query",a)},searchRepositoryBranches(a,n,r){return t(o=>e.request({document:xs,variables:a,requestHeaders:{...n,...o},signal:r}),"searchRepositoryBranches","query",a)},repositoryIssues(a,n,r){return t(o=>e.request({document:_s,variables:a,requestHeaders:{...n,...o},signal:r}),"repositoryIssues","query",a)},repositoryReleases(a,n,r){return t(o=>e.request({document:Us,variables:a,requestHeaders:{...n,...o},signal:r}),"repositoryReleases","query",a)},addStar(a,n,r){return t(o=>e.request({document:vs,variables:a,requestHeaders:{...n,...o},signal:r}),"addStar","mutation",a)},removeStar(a,n,r){return t(o=>e.request({document:Ts,variables:a,requestHeaders:{...n,...o},signal:r}),"removeStar","mutation",a)},myStarredRepositories(a,n,r){return t(o=>e.request({document:ws,variables:a,requestHeaders:{...n,...o},signal:r}),"myStarredRepositories","query",a)},getViewer(a,n,r){return t(o=>e.request({document:Os,variables:a,requestHeaders:{...n,...o},signal:r}),"getViewer","query",a)},getViewerStats(a,n,r){return t(o=>e.request({document:Bs,variables:a,requestHeaders:{...n,...o},signal:r}),"getViewerStats","query",a)},getViewerStatsDetails(a,n,r){return t(o=>e.request({document:Ls,variables:a,requestHeaders:{...n,...o},signal:r}),"getViewerStatsDetails","query",a)}}}var Yr=require("@raycast/api");function Wa(e,t,{suffix:a="s",withNumber:n=!1}={}){let r=`${t}${e!==1?a:""}`;return n?`${e} ${r}`:r}var de=require("@raycast/api"),Jt=["container","npm","maven","docker","nuget","rubygems"],Ka=100,Zr=5,Vs={container:"Container",npm:"npm",maven:"Maven",docker:"Docker",nuget:"NuGet",rubygems:"RubyGems"},ks={container:de.Color.Blue,npm:de.Color.Red,maven:de.Color.Orange,docker:de.Color.SecondaryText,nuget:de.Color.Purple,rubygems:de.Color.Magenta};function Ya(e){return Vs[e]??e}function Xr(e){return{source:de.Icon.Box,tintColor:ks[e]??de.Color.PrimaryText}}function en(e){return typeof e.version_count=="number"?e.version_count:void 0}function tn(e){return[...e].sort((t,a)=>new Date(a.updated_at).getTime()-new Date(t.updated_at).getTime())}function Ja(e){return Jt.flatMap(t=>{let a=e.filter(n=>n.package_type===t);return a.length===0?[]:[{packageType:t,title:Ya(t),packages:a}]})}function an(e,t){let a=t.trim().toLowerCase();if(a.length===0)return;let n=a.includes("/")?e.filter(r=>r.repository?.full_name?.toLowerCase()===a):e.filter(r=>r.name.toLowerCase()===a);return Ja(n)[0]?.packages[0]}function rn(e){return new Intl.NumberFormat("en-US",{notation:"compact",maximumFractionDigits:1}).format(e)}var yi=L(kt());var ii=require("@octokit/rest"),si=require("@raycast/api"),ui=L(kt());var Da=JSON;var Co=e=>e.toUpperCase(),ho=e=>{let t={};return e.forEach((a,n)=>{t[n]=a}),t};var Do=(e,t,a)=>e.document?e:{document:e,variables:t,requestHeaders:a,signal:void 0},xo=(e,t,a)=>e.query?e:{query:e,variables:t,requestHeaders:a,signal:void 0},_o=(e,t)=>e.documents?e:{documents:e,requestHeaders:t,signal:void 0};var xa=require("graphql"),Uo=e=>{let t,a=e.definitions.filter(n=>n.kind==="OperationDefinition");return a.length===1&&(t=a[0]?.name?.value),t},Ke=e=>{if(typeof e=="string"){let a;try{let n=(0,xa.parse)(e);a=Uo(n)}catch{}return{query:e,operationName:a}}let t=Uo(e);return{query:(0,xa.print)(e),operationName:t}};var Ye=class e extends Error{constructor(t,a){let n=`${e.extractMessage(t)}: ${JSON.stringify({response:t,request:a})}`;super(n),Object.setPrototypeOf(this,e.prototype),this.response=t,this.request=a,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,e)}static extractMessage(t){return t.errors?.[0]?.message??`GraphQL Error (Code: ${t.status})`}};var Ve=L(Ot(),1);var El="connection_init",Cl="connection_ack",To="ping",wo="pong",hl="subscribe",Dl="next",xl="error",Oo="complete",Ne=class e{get type(){return this._type}get id(){return this._id}get payload(){return this._payload}constructor(t,a,n){this._type=t,this._payload=a,this._id=n}get text(){let t={type:this.type};return this.id!=null&&this.id!=null&&(t.id=this.id),this.payload!=null&&this.payload!=null&&(t.payload=this.payload),JSON.stringify(t)}static parse(t,a){let{type:n,payload:r,id:o}=JSON.parse(t);return new e(n,a(r),o)}},_a=class{constructor(t,{onInit:a,onAcknowledged:n,onPing:r,onPong:o}){this.socketState={acknowledged:!1,lastRequestId:0,subscriptions:{}},this.socket=t,t.addEventListener("open",async u=>{this.socketState.acknowledged=!1,this.socketState.subscriptions={},t.send(Ul(a?await a():null).text)}),t.addEventListener("close",u=>{this.socketState.acknowledged=!1,this.socketState.subscriptions={}}),t.addEventListener("error",u=>{console.error(u)}),t.addEventListener("message",u=>{try{let s=_l(u.data);switch(s.type){case Cl:{this.socketState.acknowledged?console.warn("Duplicate CONNECTION_ACK message ignored"):(this.socketState.acknowledged=!0,n&&n(s.payload));return}case To:{r?r(s.payload).then(y=>t.send(vo(y).text)):t.send(vo(null).text);return}case wo:{o&&o(s.payload);return}}if(!this.socketState.acknowledged||s.id===void 0||s.id===null||!this.socketState.subscriptions[s.id])return;let{query:i,variables:p,subscriber:c}=this.socketState.subscriptions[s.id];switch(s.type){case Dl:{!s.payload.errors&&s.payload.data&&c.next&&c.next(s.payload.data),s.payload.errors&&c.error&&c.error(new Ye({...s.payload,status:200},{query:i,variables:p}));return}case xl:{c.error&&c.error(new Ye({errors:s.payload,status:200},{query:i,variables:p}));return}case Oo:{c.complete&&c.complete(),delete this.socketState.subscriptions[s.id];return}}}catch(s){console.error(s),t.close(1006)}t.close(4400,"Unknown graphql-ws message.")})}makeSubscribe(t,a,n,r){let o=(this.socketState.lastRequestId++).toString();return this.socketState.subscriptions[o]={query:t,variables:r,subscriber:n},this.socket.send(Tl(o,{query:t,operationName:a,variables:r}).text),()=>{this.socket.send(wl(o).text),delete this.socketState.subscriptions[o]}}rawRequest(t,a){return new Promise((n,r)=>{let o;this.rawSubscribe(t,{next:(u,s)=>o={data:u,extensions:s},error:r,complete:()=>n(o)},a)})}request(t,a){return new Promise((n,r)=>{let o;this.subscribe(t,{next:u=>o=u,error:r,complete:()=>n(o)},a)})}subscribe(t,a,n){let{query:r,operationName:o}=Ke(t);return this.makeSubscribe(r,o,a,n)}rawSubscribe(t,a,n){return this.makeSubscribe(t,void 0,a,n)}ping(t){this.socket.send(vl(t).text)}close(){this.socket.close(1e3)}};_a.PROTOCOL="graphql-transport-ws";function _l(e,t=a=>a){return Ne.parse(e,t)}function Ul(e){return new Ne(El,e)}function vl(e){return new Ne(To,e,void 0)}function vo(e){return new Ne(wo,e,void 0)}function Tl(e,t){return new Ne(hl,t,e)}function wl(e){return new Ne(Oo,void 0,e)}var Mt=e=>{let t={};return e&&(typeof Headers<"u"&&e instanceof Headers||Ve&&Ve.Headers&&e instanceof Ve.Headers?t=ho(e):Array.isArray(e)?e.forEach(([a,n])=>{a&&n!==void 0&&(t[a]=n)}):t=e),t},Bo=e=>e.replace(/([\s,]|#[^\n\r]+)+/g," ").trim(),Ol=e=>{if(!Array.isArray(e.query)){let n=e,r=[`query=${encodeURIComponent(Bo(n.query))}`];return e.variables&&r.push(`variables=${encodeURIComponent(n.jsonSerializer.stringify(n.variables))}`),n.operationName&&r.push(`operationName=${encodeURIComponent(n.operationName)}`),r.join("&")}if(typeof e.variables<"u"&&!Array.isArray(e.variables))throw new Error("Cannot create query with given variable type, array expected");let t=e,a=e.query.reduce((n,r,o)=>(n.push({query:Bo(r),variables:t.variables?t.jsonSerializer.stringify(t.variables[o]):void 0}),n),[]);return`query=${encodeURIComponent(t.jsonSerializer.stringify(a))}`},Bl=e=>async t=>{let{url:a,query:n,variables:r,operationName:o,fetch:u,fetchOptions:s,middleware:i}=t,p={...t.headers},c="",y;e==="POST"?(y=Ll(n,r,o,s.jsonSerializer),typeof y=="string"&&(p["Content-Type"]="application/json")):c=Ol({query:n,variables:r,operationName:o,jsonSerializer:s.jsonSerializer??Da});let I={method:e,headers:p,body:y,...s},m=a,l=I;if(i){let b=await Promise.resolve(i({...I,url:a,operationName:o,variables:r})),{url:d,...S}=b;m=d,l=S}return c&&(m=`${m}?${c}`),await u(m,l)},Ua=class{constructor(t,a={}){this.url=t,this.requestConfig=a,this.rawRequest=async(...n)=>{let[r,o,u]=n,s=xo(r,o,u),{headers:i,fetch:p=Ve.default,method:c="POST",requestMiddleware:y,responseMiddleware:I,...m}=this.requestConfig,{url:l}=this;s.signal!==void 0&&(m.signal=s.signal);let{operationName:b}=Ke(s.query);return _r({url:l,query:s.query,variables:s.variables,headers:{...Mt(Ur(i)),...Mt(s.requestHeaders)},operationName:b,fetch:p,method:c,fetchOptions:m,middleware:y}).then(d=>(I&&I(d),d)).catch(d=>{throw I&&I(d),d})}}async request(t,...a){let[n,r]=a,o=Do(t,n,r),{headers:u,fetch:s=Ve.default,method:i="POST",requestMiddleware:p,responseMiddleware:c,...y}=this.requestConfig,{url:I}=this;o.signal!==void 0&&(y.signal=o.signal);let{query:m,operationName:l}=Ke(o.document);return _r({url:I,query:m,variables:o.variables,headers:{...Mt(Ur(u)),...Mt(o.requestHeaders)},operationName:l,fetch:s,method:i,fetchOptions:y,middleware:p}).then(b=>(c&&c(b),b.data)).catch(b=>{throw c&&c(b),b})}batchRequests(t,a){let n=_o(t,a),{headers:r,...o}=this.requestConfig;n.signal!==void 0&&(o.signal=n.signal);let u=n.documents.map(({document:i})=>Ke(i).query),s=n.documents.map(({variables:i})=>i);return _r({url:this.url,query:u,variables:s,headers:{...Mt(Ur(r)),...Mt(n.requestHeaders)},operationName:void 0,fetch:this.requestConfig.fetch??Ve.default,method:this.requestConfig.method||"POST",fetchOptions:o,middleware:this.requestConfig.requestMiddleware}).then(i=>(this.requestConfig.responseMiddleware&&this.requestConfig.responseMiddleware(i),i.data)).catch(i=>{throw this.requestConfig.responseMiddleware&&this.requestConfig.responseMiddleware(i),i})}setHeaders(t){return this.requestConfig.headers=t,this}setHeader(t,a){let{headers:n}=this.requestConfig;return n?n[t]=a:this.requestConfig.headers={[t]:a},this}setEndpoint(t){return this.url=t,this}},_r=async e=>{let{query:t,variables:a,fetchOptions:n}=e,r=Bl(Co(e.method??"post")),o=Array.isArray(e.query),u=await r(e),s=await ql(u,n.jsonSerializer??Da),i=Array.isArray(s)?!s.some(({data:c})=>!c):!!s.data,p=Array.isArray(s)||!s.errors||Array.isArray(s.errors)&&!s.errors.length||n.errorPolicy==="all"||n.errorPolicy==="ignore";if(u.ok&&p&&i){let{errors:c,...y}=(Array.isArray(s),s),I=n.errorPolicy==="ignore"?y:s;return{...o?{data:I}:I,headers:u.headers,status:u.status}}else{let c=typeof s=="string"?{error:s}:s;throw new Ye({...c,status:u.status,headers:u.headers},{query:t,variables:a})}};var Ll=(e,t,a,n)=>{let r=n??Da;if(!Array.isArray(e))return r.stringify({query:e,variables:t,operationName:a});if(typeof t<"u"&&!Array.isArray(t))throw new Error("Cannot create request body with given variable type, array expected");let o=e.reduce((u,s,i)=>(u.push({query:s,variables:t?t[i]:void 0}),u),[]);return r.stringify(o)},ql=async(e,t)=>{let a;return e.headers.forEach((n,r)=>{r.toLowerCase()==="content-type"&&(a=n)}),a&&(a.toLowerCase().startsWith("application/json")||a.toLowerCase().startsWith("application/graphql+json")||a.toLowerCase().startsWith("application/graphql-response+json"))?t.parse(await e.text()):e.text()},Ur=e=>typeof e=="function"?e():e;var ni=L(require("node:http"),1),oi=L(require("node:https"),1),Xe=L(require("node:zlib"),1),X=L(require("node:stream"),1),Qt=require("node:buffer");var jt={};et(jt,{default:()=>va.default});H(jt,require("data-uri-to-buffer"));var va=L(require("data-uri-to-buffer"));var ne=L(require("node:stream"),1),_e=require("node:util"),J=require("node:buffer");var Ft={};et(Ft,{default:()=>Ta.default});H(Ft,require("fetch-blob"));var Ta=L(require("fetch-blob"));wa();var xe=class extends Error{constructor(t,a){super(t),Error.captureStackTrace(this,this.constructor),this.type=a}get name(){return this.constructor.name}get[Symbol.toStringTag](){return this.constructor.name}};var $=class extends xe{constructor(t,a,n){super(t,a),n&&(this.code=this.errno=n.code,this.erroredSysCall=n.syscall)}};var Oa=Symbol.toStringTag,vr=e=>typeof e=="object"&&typeof e.append=="function"&&typeof e.delete=="function"&&typeof e.get=="function"&&typeof e.getAll=="function"&&typeof e.has=="function"&&typeof e.set=="function"&&typeof e.sort=="function"&&e[Oa]==="URLSearchParams",zt=e=>e&&typeof e=="object"&&typeof e.arrayBuffer=="function"&&typeof e.type=="string"&&typeof e.stream=="function"&&typeof e.constructor=="function"&&/^(Blob|File)$/.test(e[Oa]),qo=e=>typeof e=="object"&&(e[Oa]==="AbortSignal"||e[Oa]==="EventTarget"),No=(e,t)=>{let a=new URL(t).hostname,n=new URL(e).hostname;return a===n||a.endsWith(`.${n}`)},Vo=(e,t)=>{let a=new URL(t).protocol,n=new URL(e).protocol;return a===n};var Gl=(0,_e.promisify)(ne.default.pipeline),Q=Symbol("Body internals"),Re=class{constructor(t,{size:a=0}={}){let n=null;t===null?t=null:vr(t)?t=J.Buffer.from(t.toString()):zt(t)||J.Buffer.isBuffer(t)||(_e.types.isAnyArrayBuffer(t)?t=J.Buffer.from(t):ArrayBuffer.isView(t)?t=J.Buffer.from(t.buffer,t.byteOffset,t.byteLength):t instanceof ne.default||(t instanceof G.FormData?(t=(0,G.formDataToBlob)(t),n=t.type.split("=")[1]):t=J.Buffer.from(String(t))));let r=t;J.Buffer.isBuffer(t)?r=ne.default.Readable.from(t):zt(t)&&(r=ne.default.Readable.from(t.stream())),this[Q]={body:t,stream:r,boundary:n,disturbed:!1,error:null},this.size=a,t instanceof ne.default&&t.on("error",o=>{let u=o instanceof xe?o:new $(`Invalid response body while trying to fetch ${this.url}: ${o.message}`,"system",o);this[Q].error=u})}get body(){return this[Q].stream}get bodyUsed(){return this[Q].disturbed}async arrayBuffer(){let{buffer:t,byteOffset:a,byteLength:n}=await Or(this);return t.slice(a,a+n)}async formData(){let t=this.headers.get("content-type");if(t.startsWith("application/x-www-form-urlencoded")){let n=new G.FormData,r=new URLSearchParams(await this.text());for(let[o,u]of r)n.append(o,u);return n}let{toFormData:a}=await Promise.resolve().then(()=>(zo(),Fo));return a(this.body,t)}async blob(){let t=this.headers&&this.headers.get("content-type")||this[Q].body&&this[Q].body.type||"",a=await this.arrayBuffer();return new Ta.default([a],{type:t})}async json(){let t=await this.text();return JSON.parse(t)}async text(){let t=await Or(this);return new TextDecoder().decode(t)}buffer(){return Or(this)}};Re.prototype.buffer=(0,_e.deprecate)(Re.prototype.buffer,"Please use 'response.arrayBuffer()' instead of 'response.buffer()'","node-fetch#buffer");Object.defineProperties(Re.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0},data:{get:(0,_e.deprecate)(()=>{},"data doesn't exist, use json(), text(), arrayBuffer(), or body instead","https://github.com/node-fetch/node-fetch/issues/1000 (response)")}});async function Or(e){if(e[Q].disturbed)throw new TypeError(`body used already for: ${e.url}`);if(e[Q].disturbed=!0,e[Q].error)throw e[Q].error;let{body:t}=e;if(t===null)return J.Buffer.alloc(0);if(!(t instanceof ne.default))return J.Buffer.alloc(0);let a=[],n=0;try{for await(let r of t){if(e.size>0&&n+r.length>e.size){let o=new $(`content size at ${e.url} over limit: ${e.size}`,"max-size");throw t.destroy(o),o}n+=r.length,a.push(r)}}catch(r){throw r instanceof xe?r:new $(`Invalid response body while trying to fetch ${e.url}: ${r.message}`,"system",r)}if(t.readableEnded===!0||t._readableState.ended===!0)try{return a.every(r=>typeof r=="string")?J.Buffer.from(a.join("")):J.Buffer.concat(a,n)}catch(r){throw new $(`Could not create Buffer from response body for ${e.url}: ${r.message}`,"system",r)}else throw new $(`Premature close of server response while trying to fetch ${e.url}`)}var mt=(e,t)=>{let a,n,{body:r}=e[Q];if(e.bodyUsed)throw new Error("cannot clone body after it is used");return r instanceof ne.default&&typeof r.getBoundary!="function"&&(a=new ne.PassThrough({highWaterMark:t}),n=new ne.PassThrough({highWaterMark:t}),r.pipe(a),r.pipe(n),e[Q].stream=a,r=n),r},$l=(0,_e.deprecate)(e=>e.getBoundary(),"form-data doesn't follow the spec and requires special treatment. Use alternative package","https://github.com/node-fetch/node-fetch/issues/1167"),qa=(e,t)=>e===null?null:typeof e=="string"?"text/plain;charset=UTF-8":vr(e)?"application/x-www-form-urlencoded;charset=UTF-8":zt(e)?e.type||null:J.Buffer.isBuffer(e)||_e.types.isAnyArrayBuffer(e)||ArrayBuffer.isView(e)?null:e instanceof G.FormData?`multipart/form-data; boundary=${t[Q].boundary}`:e&&typeof e.getBoundary=="function"?`multipart/form-data;boundary=${$l(e)}`:e instanceof ne.default?null:"text/plain;charset=UTF-8",Ho=e=>{let{body:t}=e[Q];return t===null?0:zt(t)?t.size:J.Buffer.isBuffer(t)?t.length:t&&typeof t.getLengthSync=="function"&&t.hasKnownLength&&t.hasKnownLength()?t.getLengthSync():null},Go=async(e,{body:t})=>{t===null?e.end():await Gl(t,e)};var Br=require("node:util"),Gt=L(require("node:http"),1),Na=typeof Gt.default.validateHeaderName=="function"?Gt.default.validateHeaderName:e=>{if(!/^[\^`\-\w!#$%&'*+.|~]+$/.test(e)){let t=new TypeError(`Header name must be a valid HTTP token [${e}]`);throw Object.defineProperty(t,"code",{value:"ERR_INVALID_HTTP_TOKEN"}),t}},Lr=typeof Gt.default.validateHeaderValue=="function"?Gt.default.validateHeaderValue:(e,t)=>{if(/[^\t\u0020-\u007E\u0080-\u00FF]/.test(t)){let a=new TypeError(`Invalid character in header content ["${e}"]`);throw Object.defineProperty(a,"code",{value:"ERR_INVALID_CHAR"}),a}},Z=class e extends URLSearchParams{constructor(t){let a=[];if(t instanceof e){let n=t.raw();for(let[r,o]of Object.entries(n))a.push(...o.map(u=>[r,u]))}else if(t!=null)if(typeof t=="object"&&!Br.types.isBoxedPrimitive(t)){let n=t[Symbol.iterator];if(n==null)a.push(...Object.entries(t));else{if(typeof n!="function")throw new TypeError("Header pairs must be iterable");a=[...t].map(r=>{if(typeof r!="object"||Br.types.isBoxedPrimitive(r))throw new TypeError("Each header pair must be an iterable object");return[...r]}).map(r=>{if(r.length!==2)throw new TypeError("Each header pair must be a name/value tuple");return[...r]})}}else throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");return a=a.length>0?a.map(([n,r])=>(Na(n),Lr(n,String(r)),[String(n).toLowerCase(),String(r)])):void 0,super(a),new Proxy(this,{get(n,r,o){switch(r){case"append":case"set":return(u,s)=>(Na(u),Lr(u,String(s)),URLSearchParams.prototype[r].call(n,String(u).toLowerCase(),String(s)));case"delete":case"has":case"getAll":return u=>(Na(u),URLSearchParams.prototype[r].call(n,String(u).toLowerCase()));case"keys":return()=>(n.sort(),new Set(URLSearchParams.prototype.keys.call(n)).keys());default:return Reflect.get(n,r,o)}}})}get[Symbol.toStringTag](){return this.constructor.name}toString(){return Object.prototype.toString.call(this)}get(t){let a=this.getAll(t);if(a.length===0)return null;let n=a.join(", ");return/^content-encoding$/i.test(t)&&(n=n.toLowerCase()),n}forEach(t,a=void 0){for(let n of this.keys())Reflect.apply(t,a,[this.get(n),n,this])}*values(){for(let t of this.keys())yield this.get(t)}*entries(){for(let t of this.keys())yield[t,this.get(t)]}[Symbol.iterator](){return this.entries()}raw(){return[...this.keys()].reduce((t,a)=>(t[a]=this.getAll(a),t),{})}[Symbol.for("nodejs.util.inspect.custom")](){return[...this.keys()].reduce((t,a)=>{let n=this.getAll(a);return a==="host"?t[a]=n[0]:t[a]=n.length>1?n:n[0],t},{})}};Object.defineProperties(Z.prototype,["get","entries","forEach","values"].reduce((e,t)=>(e[t]={enumerable:!0},e),{}));function $o(e=[]){return new Z(e.reduce((t,a,n,r)=>(n%2===0&&t.push(r.slice(n,n+2)),t),[]).filter(([t,a])=>{try{return Na(t),Lr(t,String(a)),!0}catch{return!1}}))}var Ql=new Set([301,302,303,307,308]),Va=e=>Ql.has(e);var le=Symbol("Response internals"),oe=class e extends Re{constructor(t=null,a={}){super(t,a);let n=a.status!=null?a.status:200,r=new Z(a.headers);if(t!==null&&!r.has("Content-Type")){let o=qa(t,this);o&&r.append("Content-Type",o)}this[le]={type:"default",url:a.url,status:n,statusText:a.statusText||"",headers:r,counter:a.counter,highWaterMark:a.highWaterMark}}get type(){return this[le].type}get url(){return this[le].url||""}get status(){return this[le].status}get ok(){return this[le].status>=200&&this[le].status<300}get redirected(){return this[le].counter>0}get statusText(){return this[le].statusText}get headers(){return this[le].headers}get highWaterMark(){return this[le].highWaterMark}clone(){return new e(mt(this,this.highWaterMark),{type:this.type,url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected,size:this.size,highWaterMark:this.highWaterMark})}static redirect(t,a=302){if(!Va(a))throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');return new e(null,{headers:{location:new URL(t).toString()},status:a})}static error(){let t=new e(null,{status:0,statusText:""});return t[le].type="error",t}static json(t=void 0,a={}){let n=JSON.stringify(t);if(n===void 0)throw new TypeError("data is not JSON serializable");let r=new Z(a&&a.headers);return r.has("content-type")||r.set("content-type","application/json"),new e(n,{...a,headers:r})}get[Symbol.toStringTag](){return"Response"}};Object.defineProperties(oe.prototype,{type:{enumerable:!0},url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}});var ti=require("node:url"),ai=require("node:util");var Qo=e=>{if(e.search)return e.search;let t=e.href.length-1,a=e.hash||(e.href[t]==="#"?"#":"");return e.href[t-a.length]==="?"?"?":""};var Ko=require("node:net");function Wo(e,t=!1){return e==null||(e=new URL(e),/^(about|blob|data):$/.test(e.protocol))?"no-referrer":(e.username="",e.password="",e.hash="",t&&(e.pathname="",e.search=""),e)}var Yo=new Set(["","no-referrer","no-referrer-when-downgrade","same-origin","origin","strict-origin","origin-when-cross-origin","strict-origin-when-cross-origin","unsafe-url"]),Jo="strict-origin-when-cross-origin";function Zo(e){if(!Yo.has(e))throw new TypeError(`Invalid referrerPolicy: ${e}`);return e}function Wl(e){if(/^(http|ws)s:$/.test(e.protocol))return!0;let t=e.host.replace(/(^\[)|(]$)/g,""),a=(0,Ko.isIP)(t);return a===4&&/^127\./.test(t)||a===6&&/^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(t)?!0:e.host==="localhost"||e.host.endsWith(".localhost")?!1:e.protocol==="file:"}function Rt(e){return/^about:(blank|srcdoc)$/.test(e)||e.protocol==="data:"||/^(blob|filesystem):$/.test(e.protocol)?!0:Wl(e)}function Xo(e,{referrerURLCallback:t,referrerOriginCallback:a}={}){if(e.referrer==="no-referrer"||e.referrerPolicy==="")return null;let n=e.referrerPolicy;if(e.referrer==="about:client")return"no-referrer";let r=e.referrer,o=Wo(r),u=Wo(r,!0);o.toString().length>4096&&(o=u),t&&(o=t(o)),a&&(u=a(u));let s=new URL(e.url);switch(n){case"no-referrer":return"no-referrer";case"origin":return u;case"unsafe-url":return o;case"strict-origin":return Rt(o)&&!Rt(s)?"no-referrer":u.toString();case"strict-origin-when-cross-origin":return o.origin===s.origin?o:Rt(o)&&!Rt(s)?"no-referrer":u;case"same-origin":return o.origin===s.origin?o:"no-referrer";case"origin-when-cross-origin":return o.origin===s.origin?o:u;case"no-referrer-when-downgrade":return Rt(o)&&!Rt(s)?"no-referrer":o;default:throw new TypeError(`Invalid referrerPolicy: ${n}`)}}function ei(e){let t=(e.get("referrer-policy")||"").split(/[,\s]+/),a="";for(let n of t)n&&Yo.has(n)&&(a=n);return a}var B=Symbol("Request internals"),$t=e=>typeof e=="object"&&typeof e[B]=="object",Kl=(0,ai.deprecate)(()=>{},".data is not a valid RequestInit property, use .body instead","https://github.com/node-fetch/node-fetch/issues/1000 (request)"),Ze=class e extends Re{constructor(t,a={}){let n;if($t(t)?n=new URL(t.url):(n=new URL(t),t={}),n.username!==""||n.password!=="")throw new TypeError(`${n} is an url with embedded credentials.`);let r=a.method||t.method||"GET";if(/^(delete|get|head|options|post|put)$/i.test(r)&&(r=r.toUpperCase()),!$t(a)&&"data"in a&&Kl(),(a.body!=null||$t(t)&&t.body!==null)&&(r==="GET"||r==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");let o=a.body?a.body:$t(t)&&t.body!==null?mt(t):null;super(o,{size:a.size||t.size||0});let u=new Z(a.headers||t.headers||{});if(o!==null&&!u.has("Content-Type")){let p=qa(o,this);p&&u.set("Content-Type",p)}let s=$t(t)?t.signal:null;if("signal"in a&&(s=a.signal),s!=null&&!qo(s))throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");let i=a.referrer==null?t.referrer:a.referrer;if(i==="")i="no-referrer";else if(i){let p=new URL(i);i=/^about:(\/\/)?client$/.test(p)?"client":p}else i=void 0;this[B]={method:r,redirect:a.redirect||t.redirect||"follow",headers:u,parsedURL:n,signal:s,referrer:i},this.follow=a.follow===void 0?t.follow===void 0?20:t.follow:a.follow,this.compress=a.compress===void 0?t.compress===void 0?!0:t.compress:a.compress,this.counter=a.counter||t.counter||0,this.agent=a.agent||t.agent,this.highWaterMark=a.highWaterMark||t.highWaterMark||16384,this.insecureHTTPParser=a.insecureHTTPParser||t.insecureHTTPParser||!1,this.referrerPolicy=a.referrerPolicy||t.referrerPolicy||""}get method(){return this[B].method}get url(){return(0,ti.format)(this[B].parsedURL)}get headers(){return this[B].headers}get redirect(){return this[B].redirect}get signal(){return this[B].signal}get referrer(){if(this[B].referrer==="no-referrer")return"";if(this[B].referrer==="client")return"about:client";if(this[B].referrer)return this[B].referrer.toString()}get referrerPolicy(){return this[B].referrerPolicy}set referrerPolicy(t){this[B].referrerPolicy=Zo(t)}clone(){return new e(this)}get[Symbol.toStringTag](){return"Request"}};Object.defineProperties(Ze.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0},referrer:{enumerable:!0},referrerPolicy:{enumerable:!0}});var ri=e=>{let{parsedURL:t}=e[B],a=new Z(e[B].headers);a.has("Accept")||a.set("Accept","*/*");let n=null;if(e.body===null&&/^(post|put)$/i.test(e.method)&&(n="0"),e.body!==null){let s=Ho(e);typeof s=="number"&&!Number.isNaN(s)&&(n=String(s))}n&&a.set("Content-Length",n),e.referrerPolicy===""&&(e.referrerPolicy=Jo),e.referrer&&e.referrer!=="no-referrer"?e[B].referrer=Xo(e):e[B].referrer="no-referrer",e[B].referrer instanceof URL&&a.set("Referer",e.referrer),a.has("User-Agent")||a.set("User-Agent","node-fetch"),e.compress&&!a.has("Accept-Encoding")&&a.set("Accept-Encoding","gzip, deflate, br");let{agent:r}=e;typeof r=="function"&&(r=r(t));let o=Qo(t),u={path:t.pathname+o,method:e.method,headers:a[Symbol.for("nodejs.util.inspect.custom")](),insecureHTTPParser:e.insecureHTTPParser,agent:r};return{parsedURL:t,options:u}};var ka=class extends xe{constructor(t,a="aborted"){super(t,a)}};wa();Tr();var Yl=new Set(["data:","http:","https:"]);async function ja(e,t){return new Promise((a,n)=>{let r=new Ze(e,t),{parsedURL:o,options:u}=ri(r);if(!Yl.has(o.protocol))throw new TypeError(`node-fetch cannot load ${e}. URL scheme "${o.protocol.replace(/:$/,"")}" is not supported.`);if(o.protocol==="data:"){let l=(0,va.default)(r.url),b=new oe(l,{headers:{"Content-Type":l.typeFull}});a(b);return}let s=(o.protocol==="https:"?oi.default:ni.default).request,{signal:i}=r,p=null,c=()=>{let l=new ka("The operation was aborted.");n(l),r.body&&r.body instanceof X.default.Readable&&r.body.destroy(l),!(!p||!p.body)&&p.body.emit("error",l)};if(i&&i.aborted){c();return}let y=()=>{c(),m()},I=s(o.toString(),u);i&&i.addEventListener("abort",y);let m=()=>{I.abort(),i&&i.removeEventListener("abort",y)};I.on("error",l=>{n(new $(`request to ${r.url} failed, reason: ${l.message}`,"system",l)),m()}),Jl(I,l=>{p&&p.body&&p.body.destroy(l)}),process.version<"v14"&&I.on("socket",l=>{let b;l.prependListener("end",()=>{b=l._eventsCount}),l.prependListener("close",d=>{if(p&&b<l._eventsCount&&!d){let S=new Error("Premature close");S.code="ERR_STREAM_PREMATURE_CLOSE",p.body.emit("error",S)}})}),I.on("response",l=>{I.setTimeout(0);let b=$o(l.rawHeaders);if(Va(l.statusCode)){let M=b.get("Location"),P=null;try{P=M===null?null:new URL(M,r.url)}catch{if(r.redirect!=="manual"){n(new $(`uri requested responds with an invalid redirect URL: ${M}`,"invalid-redirect")),m();return}}switch(r.redirect){case"error":n(new $(`uri requested responds with a redirect, redirect mode is set to error: ${r.url}`,"no-redirect")),m();return;case"manual":break;case"follow":{if(P===null)break;if(r.counter>=r.follow){n(new $(`maximum redirect reached at: ${r.url}`,"max-redirect")),m();return}let A={headers:new Z(r.headers),follow:r.follow,counter:r.counter+1,agent:r.agent,compress:r.compress,method:r.method,body:mt(r),signal:r.signal,size:r.size,referrer:r.referrer,referrerPolicy:r.referrerPolicy};if(!No(r.url,P)||!Vo(r.url,P))for(let V of["authorization","www-authenticate","cookie","cookie2"])A.headers.delete(V);if(l.statusCode!==303&&r.body&&t.body instanceof X.default.Readable){n(new $("Cannot follow redirect with body being a readable stream","unsupported-redirect")),m();return}(l.statusCode===303||(l.statusCode===301||l.statusCode===302)&&r.method==="POST")&&(A.method="GET",A.body=void 0,A.headers.delete("content-length"));let _=ei(b);_&&(A.referrerPolicy=_),a(ja(new Ze(P,A))),m();return}default:return n(new TypeError(`Redirect option '${r.redirect}' is not a valid value of RequestRedirect`))}}i&&l.once("end",()=>{i.removeEventListener("abort",y)});let d=(0,X.pipeline)(l,new X.PassThrough,M=>{M&&n(M)});process.version<"v12.10"&&l.on("aborted",y);let S={url:r.url,status:l.statusCode,statusText:l.statusMessage,headers:b,size:r.size,counter:r.counter,highWaterMark:r.highWaterMark},R=b.get("Content-Encoding");if(!r.compress||r.method==="HEAD"||R===null||l.statusCode===204||l.statusCode===304){p=new oe(d,S),a(p);return}let f={flush:Xe.default.Z_SYNC_FLUSH,finishFlush:Xe.default.Z_SYNC_FLUSH};if(R==="gzip"||R==="x-gzip"){d=(0,X.pipeline)(d,Xe.default.createGunzip(f),M=>{M&&n(M)}),p=new oe(d,S),a(p);return}if(R==="deflate"||R==="x-deflate"){let M=(0,X.pipeline)(l,new X.PassThrough,P=>{P&&n(P)});M.once("data",P=>{(P[0]&15)===8?d=(0,X.pipeline)(d,Xe.default.createInflate(),A=>{A&&n(A)}):d=(0,X.pipeline)(d,Xe.default.createInflateRaw(),A=>{A&&n(A)}),p=new oe(d,S),a(p)}),M.once("end",()=>{p||(p=new oe(d,S),a(p))});return}if(R==="br"){d=(0,X.pipeline)(d,Xe.default.createBrotliDecompress(),M=>{M&&n(M)}),p=new oe(d,S),a(p);return}p=new oe(d,S),a(p)}),Go(I,r).catch(n)})}function Jl(e,t){let a=Qt.Buffer.from(`0\r
\r
`),n=!1,r=!1,o;e.on("response",u=>{let{headers:s}=u;n=s["transfer-encoding"]==="chunked"&&!s["content-length"]}),e.on("socket",u=>{let s=()=>{if(n&&!r){let p=new Error("Premature close");p.code="ERR_STREAM_PREMATURE_CLOSE",t(p)}},i=p=>{r=Qt.Buffer.compare(p.slice(-5),a)===0,!r&&o&&(r=Qt.Buffer.compare(o.slice(-3),a.slice(0,3))===0&&Qt.Buffer.compare(p.slice(-2),a.slice(3))===0),o=p};u.prependListener("close",s),u.on("data",i),e.on("close",()=>{u.removeListener("close",s),u.removeListener("data",i)})})}var qr=null,Nr=null,pi=null,Zl=(0,si.getPreferenceValues)();function Xl({token:e,type:t}){let a=t==="personal"?`token ${e}`:`bearer ${e}`;pi=e,qr=Kr(new Ua("https://api.github.com/graphql",{headers:{authorization:a}})),Nr=new ii.Octokit({auth:e,request:{fetch:ja}})}var li=ui.OAuthService.github({personalAccessToken:Zl.personalAccessToken,scope:"notifications repo project read:org read:user read:packages",onAuthorize:Xl});function ci(){if(!qr||!Nr)throw new Error("GitHub clients not initialized");return{github:qr,octokit:Nr,token:pi}}var di=(0,yi.withAccessToken)(li);var Si=L(kt());var Fa="read:packages",At=class extends Error{constructor(){super(`Your GitHub token is missing the "${Fa}" scope.`),this.name="MissingPackagesScopeError"}};function ec(e){let t=e;return t?.response?.data?.message??t?.message??""}function tc(e){return e?.status!==403?!1:ec(e).toLowerCase().includes(Fa)}async function ac(e,t){let a=[];for(let n=1;n<=Zr;n++){let{data:r}=await e.request("GET /user/packages",{package_type:t,per_page:Ka,page:n});if(a.push(...r),r.length<Ka)break}return a}function bi(){let{octokit:e}=ci();return(0,Si.useCachedPromise)(async()=>{let t=await Promise.allSettled(Jt.map(r=>ac(e,r)));if(t.every(r=>r.status==="rejected")){let r=t;throw r.some(o=>tc(o.reason))?new At:r[0].reason}let a=t.flatMap(r=>r.status==="fulfilled"?r.value:[]),n=Jt.filter((r,o)=>t[o].status==="rejected");return{packages:tn(a),failedTypes:n}},[],{keepPreviousData:!0})}var gi=L(kt());var rc="Total downloads",nc=/<h3[^>]*title="([\d,]+)"/;async function Ii(e){let t=new AbortController,a=setTimeout(()=>t.abort(),1e4);try{let n=await fetch(e,{headers:{accept:"text/html"},signal:t.signal});if(!n.ok)return;let r=await n.text(),o=r.indexOf(rc);if(o===-1)return;let u=nc.exec(r.slice(o,o+500));if(!u)return;let s=Number(u[1].replace(/,/g,""));return Number.isFinite(s)?s:void 0}catch{return}finally{clearTimeout(a)}}function Mi(e){return(0,gi.useCachedPromise)(t=>Ii(t),[e?.html_url??""],{execute:e!==void 0})}var N=require("react/jsx-runtime");async function za(){return(0,x.launchCommand)({name:"my-packages",type:x.LaunchType.UserInitiated})}var oc=30;function ic(){return Fr({name:"maxitems"})}function sc(){let{showtext:e,titlePackage:t}=(0,x.getPreferenceValues)(),{data:a,isLoading:n,error:r}=bi(),o=a?.packages??[],u=a?.failedTypes??[],s=Ja(o),i=t?an(o,t):void 0,{data:p,isLoading:c}=Mi(i),y=i?[$a(i.name,oc),p===void 0?void 0:rn(p)].filter(Boolean).join(" \xB7 "):e?`${o.length}`:void 0,I=i?p===void 0?i.name:`${i.name} \u2014 ${p.toLocaleString()} ${Wa(p,"download")}`:"My Packages",m=r?r instanceof At?`Missing "${Fa}" scope \u2014 re-authenticate in the extension preferences`:r.message:void 0,b=r instanceof At||o.length===0?m:void 0;return(0,N.jsxs)(kr,{title:y,icon:{source:x.Icon.Box,tintColor:x.Color.PrimaryText},tooltip:I,isLoading:n||c,error:b,children:[s.map(d=>(0,N.jsx)(Fe,{title:d.title,subtitle:`${d.packages.length}`,maxChildren:ic(),moreElement:S=>(0,N.jsx)(Ae,{title:`... ${S} more`,onAction:()=>za()}),children:d.packages.map(S=>{let R=en(S);return(0,N.jsx)(Ae,{title:S.name,subtitle:S.repository?.full_name,icon:Xr(S.package_type),tooltip:R===void 0?void 0:Wa(R,"version",{withNumber:!0}),onAction:()=>(0,x.open)(S.html_url)},S.id)})},d.packageType)),!n&&s.length===0?(0,N.jsx)(Fe,{children:(0,N.jsx)(Ae,{title:"No Packages",icon:x.Icon.Info})}):null,u.length>0?(0,N.jsx)(Fe,{children:(0,N.jsx)(Ae,{title:`Couldn't load ${u.map(Ya).join(", ")}`,icon:{source:x.Icon.Warning,tintColor:x.Color.Orange},tooltip:"Some packages may be missing from this menu",onAction:()=>za()})}):null,m&&!b?(0,N.jsx)(Fe,{children:(0,N.jsx)(Ae,{title:"Couldn't refresh packages",icon:{source:x.Icon.Warning,tintColor:x.Color.Orange},tooltip:m,onAction:()=>za()})}):null,t&&!i&&o.length>0?(0,N.jsx)(Fe,{children:(0,N.jsx)(Ae,{title:`No package named "${t}"`,icon:{source:x.Icon.Warning,tintColor:x.Color.Orange},tooltip:"Check the Menu Bar Title preference",onAction:()=>(0,x.openCommandPreferences)()})}):null,(0,N.jsxs)(Fe,{children:[(0,N.jsx)(Ae,{title:"Open My Packages",icon:x.Icon.AppWindowList,shortcut:x.Keyboard.Shortcut.Common.Open,onAction:()=>za()}),(0,N.jsx)(jr,{})]})]})}var uc=di(sc);
