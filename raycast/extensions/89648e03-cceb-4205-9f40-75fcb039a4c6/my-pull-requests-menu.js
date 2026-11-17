"use strict";var _i=Object.create;var Xt=Object.defineProperty;var Ui=Object.getOwnPropertyDescriptor;var vi=Object.getOwnPropertyNames;var Ti=Object.getPrototypeOf,wi=Object.prototype.hasOwnProperty;var Ya=(e,t,a)=>()=>{if(a)throw a[0];try{return e&&(t=e(e=0)),t}catch(r){throw a=[r],r}};var h=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(a){throw t=0,a}},at=(e,t)=>{for(var a in t)Xt(e,a,{get:t[a],enumerable:!0})},Zt=(e,t,a,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of vi(t))!wi.call(e,n)&&n!==a&&Xt(e,n,{get:()=>t[n],enumerable:!(r=Ui(t,n))||r.enumerable});return e},$=(e,t,a)=>(Zt(e,t,"default"),a&&Zt(a,t,"default")),B=(e,t,a)=>(a=e!=null?_i(Ti(e)):{},Zt(t||!e||!e.__esModule?Xt(a,"default",{value:e,enumerable:!0}):a,e)),Oi=e=>Zt(Xt({},"__esModule",{value:!0}),e);var jr=h(ea=>{"use strict";Object.defineProperty(ea,"__esModule",{value:!0});ea.useDeepMemo=void 0;var Ja=require("react"),Bi=require("dequal/lite");function qi(e){let t=(0,Ja.useRef)(e),a=(0,Ja.useRef)(0);return(0,Bi.dequal)(e,t.current)||(t.current=e,a.current+=1),(0,Ja.useMemo)(()=>t.current,[a.current])}ea.useDeepMemo=qi});var Pe=h(ta=>{"use strict";Object.defineProperty(ta,"__esModule",{value:!0});ta.useLatest=void 0;var Li=require("react");function Ni(e){let t=(0,Li.useRef)(e);return t.current=e,t}ta.useLatest=Ni});var Dt=h(Se=>{"use strict";var Vi=Se&&Se.__createBinding||(Object.create?(function(e,t,a,r){r===void 0&&(r=a);var n=Object.getOwnPropertyDescriptor(t,a);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,n)}):(function(e,t,a,r){r===void 0&&(r=a),e[r]=t[a]})),ki=Se&&Se.__setModuleDefault||(Object.create?(function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}):function(e,t){e.default=t}),Hr=Se&&Se.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var a in e)a!=="default"&&Object.prototype.hasOwnProperty.call(e,a)&&Vi(t,e,a);return ki(t,e),t};Object.defineProperty(Se,"__esModule",{value:!0});Se.showFailureToast=void 0;var Fi=Hr(require("fs")),ji=Hr(require("path")),rt=require("@raycast/api");function zi(e,t){let a=e instanceof Error?e.message:String(e);return(0,rt.showToast)({style:rt.Toast.Style.Failure,title:t?.title??"Something went wrong",message:t?.message??a,primaryAction:t?.primaryAction??zr(e),secondaryAction:t?.primaryAction?zr(e):void 0})}Se.showFailureToast=zi;var zr=e=>{let t=!0,a="[Extension Name]...",r="";try{let u=JSON.parse(Fi.readFileSync(ji.join(rt.environment.assetsPath,"..","package.json"),"utf8"));a=`[${u.title}]...`,r=`https://raycast.com/${u.owner||u.author}/${u.name}`,(!u.owner||u.access==="public")&&(t=!1)}catch{}let n=rt.environment.isDevelopment||t,o=e instanceof Error?e?.stack||e?.message||"":String(e);return{title:n?"Copy Logs":"Report Error",onAction(u){u.hide(),n?rt.Clipboard.copy(o):(0,rt.open)(`https://github.com/raycast/extensions/issues/new?&labels=extension%2Cbug&template=extension_bug_report.yml&title=${encodeURIComponent(a)}&extension-url=${encodeURI(r)}&description=${encodeURIComponent(`#### Error:
\`\`\`
${o}
\`\`\`
`)}`)}}}});var nt=h(aa=>{"use strict";Object.defineProperty(aa,"__esModule",{value:!0});aa.usePromise=void 0;var Z=require("react"),xt=require("@raycast/api"),Hi=jr(),Te=Pe(),Gi=Dt();function $i(e,t,a){let r=(0,Z.useRef)(0),[n,o]=(0,Z.useState)({isLoading:!0}),u=(0,Te.useLatest)(e),i=(0,Te.useLatest)(a?.abortable),s=(0,Te.useLatest)(t||[]),p=(0,Te.useLatest)(a?.onError),c=(0,Te.useLatest)(a?.onData),y=(0,Te.useLatest)(a?.onWillExecute),g=(0,Te.useLatest)(a?.failureToastOptions),R=(0,Te.useLatest)(n.data),l=(0,Z.useRef)(),S=(0,Z.useRef)({page:0}),d=(0,Z.useRef)(!1),b=(0,Z.useRef)(!0),I=(0,Z.useRef)(50),A=(0,Z.useCallback)((...j)=>{let E=++r.current;i.current&&(i.current.current?.abort(),i.current.current=new AbortController),y.current?.(j),o(C=>({...C,isLoading:!0}));let T=Qi(u.current)(...j);function w(C){return C.name=="AbortError"||E===r.current&&(p.current?p.current(C):xt.environment.launchType!==xt.LaunchType.Background&&(0,Gi.showFailureToast)(C,{title:"Failed to fetch latest data",primaryAction:{title:"Retry",onAction(O){O.hide(),l.current?.(...s.current||[])}},...g.current}),o({error:C,isLoading:!1})),C}return typeof T=="function"?(d.current=!0,T(S.current).then(({data:C,hasMore:O,cursor:ve})=>(E===r.current&&(S.current&&(S.current.cursor=ve,S.current.lastItem=C?.[C.length-1]),c.current&&c.current(C,S.current),O&&(I.current=C.length),b.current=O,o(tt=>S.current.page===0?{data:C,isLoading:!1}:{data:(tt.data||[])?.concat(C),isLoading:!1})),C),C=>(b.current=!1,w(C)))):(d.current=!1,T.then(C=>(E===r.current&&(c.current&&c.current(C),o({data:C,isLoading:!1})),C),w))},[i,c,p,s,u,o,l,y,S,g]);l.current=A;let M=(0,Z.useCallback)(()=>{S.current={page:0};let j=s.current||[];return A(...j)},[A,s]),P=(0,Z.useCallback)(async(j,E)=>{let T;try{if(E?.optimisticUpdate){typeof E?.rollbackOnError!="function"&&E?.rollbackOnError!==!1&&(T=structuredClone(R.current?.value));let w=E.optimisticUpdate;o(C=>({...C,data:w(C.data)}))}return await j}catch(w){if(typeof E?.rollbackOnError=="function"){let C=E.rollbackOnError;o(O=>({...O,data:C(O.data)}))}else E?.optimisticUpdate&&E?.rollbackOnError!==!1&&o(C=>({...C,data:T}));throw w}finally{E?.shouldRevalidateAfter!==!1&&(xt.environment.launchType===xt.LaunchType.Background||xt.environment.commandMode==="menu-bar"?await M():M())}},[M,R,o]),f=(0,Z.useCallback)(()=>{S.current.page+=1;let j=s.current||[];A(...j)},[S,s,A]);(0,Z.useEffect)(()=>{S.current={page:0},a?.execute!==!1?A(...t||[]):i.current&&i.current.current?.abort()},[(0,Hi.useDeepMemo)([t,a?.execute,A]),i,S]),(0,Z.useEffect)(()=>()=>{i.current&&i.current.current?.abort()},[i]);let D=a?.execute!==!1?n.isLoading:!1,v={...n,isLoading:D},J=d.current?{pageSize:I.current,hasMore:b.current,onLoadMore:f}:void 0;return{...v,revalidate:M,mutate:P,pagination:J}}aa.usePromise=$i;function Qi(e){return e===Promise.all||e===Promise.race||e===Promise.resolve||e===Promise.reject?e.bind(Promise):e}});var we=h(be=>{"use strict";var Wi=be&&be.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(be,"__esModule",{value:!0});be.hash=be.reviver=be.replacer=void 0;var Ki=Wi(require("object-hash"));function Yi(e,t){let a=this[e];return a instanceof Date?`__raycast_cached_date__${a.toString()}`:Buffer.isBuffer(a)?`__raycast_cached_buffer__${a.toString("base64")}`:t}be.replacer=Yi;function Ji(e,t){return typeof t=="string"&&t.startsWith("__raycast_cached_date__")?new Date(t.replace("__raycast_cached_date__","")):typeof t=="string"&&t.startsWith("__raycast_cached_buffer__")?Buffer.from(t.replace("__raycast_cached_buffer__",""),"base64"):t}be.reviver=Ji;function Zi(e,t){return(0,Ki.default)(e,{replacer:a=>a instanceof URLSearchParams?a.toString():a,...t})}be.hash=Zi});var na=h(ra=>{"use strict";Object.defineProperty(ra,"__esModule",{value:!0});ra.useCachedState=void 0;var Za=require("react"),Xi=require("@raycast/api"),Xa=Pe(),Gr=we(),es=Symbol("cache without namespace"),$r=new Map;function ts(e,t,a){let r=a?.cacheNamespace||es,n=$r.get(r)||$r.set(r,new Xi.Cache({namespace:a?.cacheNamespace})).get(r);if(!n)throw new Error("Missing cache");let o=(0,Xa.useLatest)(e),u=(0,Xa.useLatest)(t),i=(0,Za.useSyncExternalStore)(n.subscribe,()=>{try{return n.get(o.current)}catch(y){console.error("Could not get Cache data:",y);return}}),s=(0,Za.useMemo)(()=>{if(typeof i<"u"){if(i==="undefined")return;try{return JSON.parse(i,Gr.reviver)}catch(y){return console.warn("The cached data is corrupted",y),u.current}}else return u.current},[i,u]),p=(0,Xa.useLatest)(s),c=(0,Za.useCallback)(y=>{let g=typeof y=="function"?y(p.current):y;if(typeof g>"u")n.set(o.current,"undefined");else{let R=JSON.stringify(g,Gr.replacer);n.set(o.current,R)}return g},[n,o,p]);return[s,c]}ra.useCachedState=ts});var Ut=h(oa=>{"use strict";Object.defineProperty(oa,"__esModule",{value:!0});oa.useCachedPromise=void 0;var _t=require("react"),as=na(),rs=nt(),ns=Pe(),Qr=we(),ot=Symbol();function os(e,t,a){let{initialData:r,keepPreviousData:n,internal_cacheKeySuffix:o,...u}=a||{},i=(0,_t.useRef)(),[s,p]=(0,as.useCachedState)((0,Qr.hash)(t||[])+o,ot,{cacheNamespace:(0,Qr.hash)(e)}),c=(0,_t.useRef)(s!==ot?s:r),y=(0,_t.useRef)(void 0),{mutate:g,revalidate:R,...l}=(0,rs.usePromise)(e,t||[],{...u,onData(A,M){y.current=M,u.onData&&u.onData(A,M),!(M&&M.page>0)&&(i.current="promise",c.current=A,p(A))}}),S,d=l.pagination;y.current&&y.current.page>0&&l.data?S=l.data:i.current==="promise"?S=c.current:n&&s!==ot?(S=s,d&&(d.hasMore=!0,d.pageSize=s.length)):n&&s===ot?S=c.current:s!==ot?(S=s,d&&(d.hasMore=!0,d.pageSize=s.length)):S=r;let b=(0,ns.useLatest)(S),I=(0,_t.useCallback)(async(A,M)=>{let P;try{if(M?.optimisticUpdate){typeof M?.rollbackOnError!="function"&&M?.rollbackOnError!==!1&&(P=structuredClone(b.current));let f=M.optimisticUpdate(b.current);i.current="cache",c.current=f,p(f)}return await g(A,{shouldRevalidateAfter:M?.shouldRevalidateAfter})}catch(f){if(typeof M?.rollbackOnError=="function"){let D=M.rollbackOnError(b.current);i.current="cache",c.current=D,p(D)}else M?.optimisticUpdate&&M?.rollbackOnError!==!1&&(i.current="cache",c.current=P,p(P));throw f}},[p,g,b,c,i]);return(0,_t.useEffect)(()=>{s!==ot&&(i.current="cache",c.current=s)},[s]),{data:S,isLoading:l.isLoading,error:l.error,mutate:y.current&&y.current.page>0?g:I,pagination:d,revalidate:R}}oa.useCachedPromise=os});var on=h((ce,nn)=>{"use strict";Object.defineProperty(ce,"__esModule",{value:!0});function pt(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var le=pt(require("stream")),Jr=pt(require("http")),sa=pt(require("url")),Zr=pt(require("whatwg-url")),is=pt(require("https")),ze=pt(require("zlib")),ss=le.Readable,Ee=Symbol("buffer"),er=Symbol("type"),Tt=class e{constructor(){this[er]="";let t=arguments[0],a=arguments[1],r=[],n=0;if(t){let u=t,i=Number(u.length);for(let s=0;s<i;s++){let p=u[s],c;p instanceof Buffer?c=p:ArrayBuffer.isView(p)?c=Buffer.from(p.buffer,p.byteOffset,p.byteLength):p instanceof ArrayBuffer?c=Buffer.from(p):p instanceof e?c=p[Ee]:c=Buffer.from(typeof p=="string"?p:String(p)),n+=c.length,r.push(c)}}this[Ee]=Buffer.concat(r);let o=a&&a.type!==void 0&&String(a.type).toLowerCase();o&&!/[^\u0020-\u007E]/.test(o)&&(this[er]=o)}get size(){return this[Ee].length}get type(){return this[er]}text(){return Promise.resolve(this[Ee].toString())}arrayBuffer(){let t=this[Ee],a=t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength);return Promise.resolve(a)}stream(){let t=new ss;return t._read=function(){},t.push(this[Ee]),t.push(null),t}toString(){return"[object Blob]"}slice(){let t=this.size,a=arguments[0],r=arguments[1],n,o;a===void 0?n=0:a<0?n=Math.max(t+a,0):n=Math.min(a,t),r===void 0?o=t:r<0?o=Math.max(t+r,0):o=Math.min(r,t);let u=Math.max(o-n,0),s=this[Ee].slice(n,n+u),p=new e([],{type:arguments[2]});return p[Ee]=s,p}};Object.defineProperties(Tt.prototype,{size:{enumerable:!0},type:{enumerable:!0},slice:{enumerable:!0}});Object.defineProperty(Tt.prototype,Symbol.toStringTag,{value:"Blob",writable:!1,enumerable:!1,configurable:!0});function F(e,t,a){Error.call(this,e),this.message=e,this.type=t,a&&(this.code=this.errno=a.code),Error.captureStackTrace(this,this.constructor)}F.prototype=Object.create(Error.prototype);F.prototype.constructor=F;F.prototype.name="FetchError";var nr;try{nr=require("encoding").convert}catch{}var he=Symbol("Body internals"),Wr=le.PassThrough;function q(e){var t=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.size;let n=r===void 0?0:r;var o=a.timeout;let u=o===void 0?0:o;e==null?e=null:Xr(e)?e=Buffer.from(e.toString()):Ot(e)||Buffer.isBuffer(e)||(Object.prototype.toString.call(e)==="[object ArrayBuffer]"?e=Buffer.from(e):ArrayBuffer.isView(e)?e=Buffer.from(e.buffer,e.byteOffset,e.byteLength):e instanceof le||(e=Buffer.from(String(e)))),this[he]={body:e,disturbed:!1,error:null},this.size=n,this.timeout=u,e instanceof le&&e.on("error",function(i){let s=i.name==="AbortError"?i:new F(`Invalid response body while trying to fetch ${t.url}: ${i.message}`,"system",i);t[he].error=s})}q.prototype={get body(){return this[he].body},get bodyUsed(){return this[he].disturbed},arrayBuffer(){return it.call(this).then(function(e){return e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength)})},blob(){let e=this.headers&&this.headers.get("content-type")||"";return it.call(this).then(function(t){return Object.assign(new Tt([],{type:e.toLowerCase()}),{[Ee]:t})})},json(){var e=this;return it.call(this).then(function(t){try{return JSON.parse(t.toString())}catch(a){return q.Promise.reject(new F(`invalid json response body at ${e.url} reason: ${a.message}`,"invalid-json"))}})},text(){return it.call(this).then(function(e){return e.toString()})},buffer(){return it.call(this)},textConverted(){var e=this;return it.call(this).then(function(t){return us(t,e.headers)})}};Object.defineProperties(q.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0}});q.mixIn=function(e){for(let t of Object.getOwnPropertyNames(q.prototype))if(!(t in e)){let a=Object.getOwnPropertyDescriptor(q.prototype,t);Object.defineProperty(e,t,a)}};function it(){var e=this;if(this[he].disturbed)return q.Promise.reject(new TypeError(`body used already for: ${this.url}`));if(this[he].disturbed=!0,this[he].error)return q.Promise.reject(this[he].error);let t=this.body;if(t===null)return q.Promise.resolve(Buffer.alloc(0));if(Ot(t)&&(t=t.stream()),Buffer.isBuffer(t))return q.Promise.resolve(t);if(!(t instanceof le))return q.Promise.resolve(Buffer.alloc(0));let a=[],r=0,n=!1;return new q.Promise(function(o,u){let i;e.timeout&&(i=setTimeout(function(){n=!0,u(new F(`Response timeout while trying to fetch ${e.url} (over ${e.timeout}ms)`,"body-timeout"))},e.timeout)),t.on("error",function(s){s.name==="AbortError"?(n=!0,u(s)):u(new F(`Invalid response body while trying to fetch ${e.url}: ${s.message}`,"system",s))}),t.on("data",function(s){if(!(n||s===null)){if(e.size&&r+s.length>e.size){n=!0,u(new F(`content size at ${e.url} over limit: ${e.size}`,"max-size"));return}r+=s.length,a.push(s)}}),t.on("end",function(){if(!n){clearTimeout(i);try{o(Buffer.concat(a,r))}catch(s){u(new F(`Could not create Buffer from response body for ${e.url}: ${s.message}`,"system",s))}}})})}function us(e,t){if(typeof nr!="function")throw new Error("The package `encoding` must be installed to use the textConverted() function");let a=t.get("content-type"),r="utf-8",n,o;return a&&(n=/charset=([^;]*)/i.exec(a)),o=e.slice(0,1024).toString(),!n&&o&&(n=/<meta.+?charset=(['"])(.+?)\1/i.exec(o)),!n&&o&&(n=/<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(o),n||(n=/<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(o),n&&n.pop()),n&&(n=/charset=(.*)/i.exec(n.pop()))),!n&&o&&(n=/<\?xml.+?encoding=(['"])(.+?)\1/i.exec(o)),n&&(r=n.pop(),(r==="gb2312"||r==="gbk")&&(r="gb18030")),nr(e,"UTF-8",r).toString()}function Xr(e){return typeof e!="object"||typeof e.append!="function"||typeof e.delete!="function"||typeof e.get!="function"||typeof e.getAll!="function"||typeof e.has!="function"||typeof e.set!="function"?!1:e.constructor.name==="URLSearchParams"||Object.prototype.toString.call(e)==="[object URLSearchParams]"||typeof e.sort=="function"}function Ot(e){return typeof e=="object"&&typeof e.arrayBuffer=="function"&&typeof e.type=="string"&&typeof e.stream=="function"&&typeof e.constructor=="function"&&typeof e.constructor.name=="string"&&/^(Blob|File)$/.test(e.constructor.name)&&/^(Blob|File)$/.test(e[Symbol.toStringTag])}function en(e){let t,a,r=e.body;if(e.bodyUsed)throw new Error("cannot clone body after it is used");return r instanceof le&&typeof r.getBoundary!="function"&&(t=new Wr,a=new Wr,r.pipe(t),r.pipe(a),e[he].body=t,r=a),r}function tn(e){return e===null?null:typeof e=="string"?"text/plain;charset=UTF-8":Xr(e)?"application/x-www-form-urlencoded;charset=UTF-8":Ot(e)?e.type||null:Buffer.isBuffer(e)||Object.prototype.toString.call(e)==="[object ArrayBuffer]"||ArrayBuffer.isView(e)?null:typeof e.getBoundary=="function"?`multipart/form-data;boundary=${e.getBoundary()}`:e instanceof le?null:"text/plain;charset=UTF-8"}function an(e){let t=e.body;return t===null?0:Ot(t)?t.size:Buffer.isBuffer(t)?t.length:t&&typeof t.getLengthSync=="function"&&(t._lengthRetrievers&&t._lengthRetrievers.length==0||t.hasKnownLength&&t.hasKnownLength())?t.getLengthSync():null}function ps(e,t){let a=t.body;a===null?e.end():Ot(a)?a.stream().pipe(e):Buffer.isBuffer(a)?(e.write(a),e.end()):a.pipe(e)}q.Promise=global.Promise;var rn=/[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/,or=/[^\t\x20-\x7e\x80-\xff]/;function vt(e){if(e=`${e}`,rn.test(e)||e==="")throw new TypeError(`${e} is not a legal HTTP header name`)}function Kr(e){if(e=`${e}`,or.test(e))throw new TypeError(`${e} is not a legal HTTP header value`)}function st(e,t){t=t.toLowerCase();for(let a in e)if(a.toLowerCase()===t)return a}var U=Symbol("map"),oe=class e{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:void 0;if(this[U]=Object.create(null),t instanceof e){let a=t.raw(),r=Object.keys(a);for(let n of r)for(let o of a[n])this.append(n,o);return}if(t!=null)if(typeof t=="object"){let a=t[Symbol.iterator];if(a!=null){if(typeof a!="function")throw new TypeError("Header pairs must be iterable");let r=[];for(let n of t){if(typeof n!="object"||typeof n[Symbol.iterator]!="function")throw new TypeError("Each header pair must be iterable");r.push(Array.from(n))}for(let n of r){if(n.length!==2)throw new TypeError("Each header pair must be a name/value tuple");this.append(n[0],n[1])}}else for(let r of Object.keys(t)){let n=t[r];this.append(r,n)}}else throw new TypeError("Provided initializer must be an object")}get(t){t=`${t}`,vt(t);let a=st(this[U],t);return a===void 0?null:this[U][a].join(", ")}forEach(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:void 0,r=ir(this),n=0;for(;n<r.length;){var o=r[n];let u=o[0],i=o[1];t.call(a,i,u,this),r=ir(this),n++}}set(t,a){t=`${t}`,a=`${a}`,vt(t),Kr(a);let r=st(this[U],t);this[U][r!==void 0?r:t]=[a]}append(t,a){t=`${t}`,a=`${a}`,vt(t),Kr(a);let r=st(this[U],t);r!==void 0?this[U][r].push(a):this[U][t]=[a]}has(t){return t=`${t}`,vt(t),st(this[U],t)!==void 0}delete(t){t=`${t}`,vt(t);let a=st(this[U],t);a!==void 0&&delete this[U][a]}raw(){return this[U]}keys(){return tr(this,"key")}values(){return tr(this,"value")}[Symbol.iterator](){return tr(this,"key+value")}};oe.prototype.entries=oe.prototype[Symbol.iterator];Object.defineProperty(oe.prototype,Symbol.toStringTag,{value:"Headers",writable:!1,enumerable:!1,configurable:!0});Object.defineProperties(oe.prototype,{get:{enumerable:!0},forEach:{enumerable:!0},set:{enumerable:!0},append:{enumerable:!0},has:{enumerable:!0},delete:{enumerable:!0},keys:{enumerable:!0},values:{enumerable:!0},entries:{enumerable:!0}});function ir(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"key+value";return Object.keys(e[U]).sort().map(t==="key"?function(r){return r.toLowerCase()}:t==="value"?function(r){return e[U][r].join(", ")}:function(r){return[r.toLowerCase(),e[U][r].join(", ")]})}var sr=Symbol("internal");function tr(e,t){let a=Object.create(ur);return a[sr]={target:e,kind:t,index:0},a}var ur=Object.setPrototypeOf({next(){if(!this||Object.getPrototypeOf(this)!==ur)throw new TypeError("Value of `this` is not a HeadersIterator");var e=this[sr];let t=e.target,a=e.kind,r=e.index,n=ir(t,a),o=n.length;return r>=o?{value:void 0,done:!0}:(this[sr].index=r+1,{value:n[r],done:!1})}},Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));Object.defineProperty(ur,Symbol.toStringTag,{value:"HeadersIterator",writable:!1,enumerable:!1,configurable:!0});function ls(e){let t=Object.assign({__proto__:null},e[U]),a=st(e[U],"Host");return a!==void 0&&(t[a]=t[a][0]),t}function cs(e){let t=new oe;for(let a of Object.keys(e))if(!rn.test(a))if(Array.isArray(e[a]))for(let r of e[a])or.test(r)||(t[U][a]===void 0?t[U][a]=[r]:t[U][a].push(r));else or.test(e[a])||(t[U][a]=[e[a]]);return t}var Oe=Symbol("Response internals"),ys=Jr.STATUS_CODES,ne=class e{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};q.call(this,t,a);let r=a.status||200,n=new oe(a.headers);if(t!=null&&!n.has("Content-Type")){let o=tn(t);o&&n.append("Content-Type",o)}this[Oe]={url:a.url,status:r,statusText:a.statusText||ys[r],headers:n,counter:a.counter}}get url(){return this[Oe].url||""}get status(){return this[Oe].status}get ok(){return this[Oe].status>=200&&this[Oe].status<300}get redirected(){return this[Oe].counter>0}get statusText(){return this[Oe].statusText}get headers(){return this[Oe].headers}clone(){return new e(en(this),{url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected})}};q.mixIn(ne.prototype);Object.defineProperties(ne.prototype,{url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}});Object.defineProperty(ne.prototype,Symbol.toStringTag,{value:"Response",writable:!1,enumerable:!1,configurable:!0});var Ce=Symbol("Request internals"),ds=sa.URL||Zr.URL,Ss=sa.parse,bs=sa.format;function ar(e){return/^[a-zA-Z][a-zA-Z\d+\-.]*:/.exec(e)&&(e=new ds(e).toString()),Ss(e)}var Is="destroy"in le.Readable.prototype;function ia(e){return typeof e=="object"&&typeof e[Ce]=="object"}function gs(e){let t=e&&typeof e=="object"&&Object.getPrototypeOf(e);return!!(t&&t.constructor.name==="AbortSignal")}var qe=class e{constructor(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r;ia(t)?r=ar(t.url):(t&&t.href?r=ar(t.href):r=ar(`${t}`),t={});let n=a.method||t.method||"GET";if(n=n.toUpperCase(),(a.body!=null||ia(t)&&t.body!==null)&&(n==="GET"||n==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");let o=a.body!=null?a.body:ia(t)&&t.body!==null?en(t):null;q.call(this,o,{timeout:a.timeout||t.timeout||0,size:a.size||t.size||0});let u=new oe(a.headers||t.headers||{});if(o!=null&&!u.has("Content-Type")){let s=tn(o);s&&u.append("Content-Type",s)}let i=ia(t)?t.signal:null;if("signal"in a&&(i=a.signal),i!=null&&!gs(i))throw new TypeError("Expected signal to be an instanceof AbortSignal");this[Ce]={method:n,redirect:a.redirect||t.redirect||"follow",headers:u,parsedURL:r,signal:i},this.follow=a.follow!==void 0?a.follow:t.follow!==void 0?t.follow:20,this.compress=a.compress!==void 0?a.compress:t.compress!==void 0?t.compress:!0,this.counter=a.counter||t.counter||0,this.agent=a.agent||t.agent}get method(){return this[Ce].method}get url(){return bs(this[Ce].parsedURL)}get headers(){return this[Ce].headers}get redirect(){return this[Ce].redirect}get signal(){return this[Ce].signal}clone(){return new e(this)}};q.mixIn(qe.prototype);Object.defineProperty(qe.prototype,Symbol.toStringTag,{value:"Request",writable:!1,enumerable:!1,configurable:!0});Object.defineProperties(qe.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0}});function Ms(e){let t=e[Ce].parsedURL,a=new oe(e[Ce].headers);if(a.has("Accept")||a.set("Accept","*/*"),!t.protocol||!t.hostname)throw new TypeError("Only absolute URLs are supported");if(!/^https?:$/.test(t.protocol))throw new TypeError("Only HTTP(S) protocols are supported");if(e.signal&&e.body instanceof le.Readable&&!Is)throw new Error("Cancellation of streamed requests with AbortSignal is not supported in node < 8");let r=null;if(e.body==null&&/^(POST|PUT)$/i.test(e.method)&&(r="0"),e.body!=null){let o=an(e);typeof o=="number"&&(r=String(o))}r&&a.set("Content-Length",r),a.has("User-Agent")||a.set("User-Agent","node-fetch/1.0 (+https://github.com/bitinn/node-fetch)"),e.compress&&!a.has("Accept-Encoding")&&a.set("Accept-Encoding","gzip,deflate");let n=e.agent;return typeof n=="function"&&(n=n(t)),Object.assign({},t,{method:e.method,headers:ls(a),agent:n})}function ut(e){Error.call(this,e),this.type="aborted",this.message=e,Error.captureStackTrace(this,this.constructor)}ut.prototype=Object.create(Error.prototype);ut.prototype.constructor=ut;ut.prototype.name="AbortError";var wt=sa.URL||Zr.URL,Yr=le.PassThrough,ms=function(t,a){let r=new wt(a).hostname,n=new wt(t).hostname;return r===n||r[r.length-n.length-1]==="."&&r.endsWith(n)},Rs=function(t,a){let r=new wt(a).protocol,n=new wt(t).protocol;return r===n};function Be(e,t){if(!Be.Promise)throw new Error("native promise missing, set fetch.Promise to your favorite alternative");return q.Promise=Be.Promise,new Be.Promise(function(a,r){let n=new qe(e,t),o=Ms(n),u=(o.protocol==="https:"?is:Jr).request,i=n.signal,s=null,p=function(){let S=new ut("The user aborted a request.");r(S),n.body&&n.body instanceof le.Readable&&rr(n.body,S),!(!s||!s.body)&&s.body.emit("error",S)};if(i&&i.aborted){p();return}let c=function(){p(),R()},y=u(o),g;i&&i.addEventListener("abort",c);function R(){y.abort(),i&&i.removeEventListener("abort",c),clearTimeout(g)}n.timeout&&y.once("socket",function(l){g=setTimeout(function(){r(new F(`network timeout at: ${n.url}`,"request-timeout")),R()},n.timeout)}),y.on("error",function(l){r(new F(`request to ${n.url} failed, reason: ${l.message}`,"system",l)),s&&s.body&&rr(s.body,l),R()}),As(y,function(l){i&&i.aborted||s&&s.body&&rr(s.body,l)}),parseInt(process.version.substring(1))<14&&y.on("socket",function(l){l.addListener("close",function(S){let d=l.listenerCount("data")>0;if(s&&d&&!S&&!(i&&i.aborted)){let b=new Error("Premature close");b.code="ERR_STREAM_PREMATURE_CLOSE",s.body.emit("error",b)}})}),y.on("response",function(l){clearTimeout(g);let S=cs(l.headers);if(Be.isRedirect(l.statusCode)){let M=S.get("Location"),P=null;try{P=M===null?null:new wt(M,n.url).toString()}catch{if(n.redirect!=="manual"){r(new F(`uri requested responds with an invalid redirect URL: ${M}`,"invalid-redirect")),R();return}}switch(n.redirect){case"error":r(new F(`uri requested responds with a redirect, redirect mode is set to error: ${n.url}`,"no-redirect")),R();return;case"manual":if(P!==null)try{S.set("Location",P)}catch(D){r(D)}break;case"follow":if(P===null)break;if(n.counter>=n.follow){r(new F(`maximum redirect reached at: ${n.url}`,"max-redirect")),R();return}let f={headers:new oe(n.headers),follow:n.follow,counter:n.counter+1,agent:n.agent,compress:n.compress,method:n.method,body:n.body,signal:n.signal,timeout:n.timeout,size:n.size};if(!ms(n.url,P)||!Rs(n.url,P))for(let D of["authorization","www-authenticate","cookie","cookie2"])f.headers.delete(D);if(l.statusCode!==303&&n.body&&an(n)===null){r(new F("Cannot follow redirect with body being a readable stream","unsupported-redirect")),R();return}(l.statusCode===303||(l.statusCode===301||l.statusCode===302)&&n.method==="POST")&&(f.method="GET",f.body=void 0,f.headers.delete("content-length")),a(Be(new qe(P,f))),R();return}}l.once("end",function(){i&&i.removeEventListener("abort",c)});let d=l.pipe(new Yr),b={url:n.url,status:l.statusCode,statusText:l.statusMessage,headers:S,size:n.size,timeout:n.timeout,counter:n.counter},I=S.get("Content-Encoding");if(!n.compress||n.method==="HEAD"||I===null||l.statusCode===204||l.statusCode===304){s=new ne(d,b),a(s);return}let A={flush:ze.Z_SYNC_FLUSH,finishFlush:ze.Z_SYNC_FLUSH};if(I=="gzip"||I=="x-gzip"){d=d.pipe(ze.createGunzip(A)),s=new ne(d,b),a(s);return}if(I=="deflate"||I=="x-deflate"){let M=l.pipe(new Yr);M.once("data",function(P){(P[0]&15)===8?d=d.pipe(ze.createInflate()):d=d.pipe(ze.createInflateRaw()),s=new ne(d,b),a(s)}),M.on("end",function(){s||(s=new ne(d,b),a(s))});return}if(I=="br"&&typeof ze.createBrotliDecompress=="function"){d=d.pipe(ze.createBrotliDecompress()),s=new ne(d,b),a(s);return}s=new ne(d,b),a(s)}),ps(y,n)})}function As(e,t){let a;e.on("socket",function(r){a=r}),e.on("response",function(r){let n=r.headers;n["transfer-encoding"]==="chunked"&&!n["content-length"]&&r.once("close",function(o){if(a&&a.listenerCount("data")>0&&!o){let i=new Error("Premature close");i.code="ERR_STREAM_PREMATURE_CLOSE",t(i)}})})}function rr(e,t){e.destroy?e.destroy(t):(e.emit("error",t),e.end())}Be.isRedirect=function(e){return e===301||e===302||e===303||e===307||e===308};Be.Promise=global.Promise;nn.exports=ce=Be;Object.defineProperty(ce,"__esModule",{value:!0});ce.default=ce;ce.Headers=oe;ce.Request=qe;ce.Response=ne;ce.FetchError=F;ce.AbortError=ut});var qt=h((He,sn)=>{var Bt=on(),fs=Bt.default||Bt,ua=function(e,t){return/^\/\//.test(e)&&(e="https:"+e),fs.call(this,e,t)};ua.ponyfill=!0;sn.exports=He=ua;He.fetch=ua;He.Headers=Bt.Headers;He.Request=Bt.Request;He.Response=Bt.Response;He.default=ua});var pr=h(pa=>{"use strict";Object.defineProperty(pa,"__esModule",{value:!0});pa.isJSON=void 0;function Ps(e){if(e){let t=Cs(e);if(!t)return!1;if(t.subtype==="json"||t.suffix==="json"||t.suffix&&/\bjson\b/i.test(t.suffix)||t.subtype&&/\bjson\b/i.test(t.subtype))return!0}return!1}pa.isJSON=Ps;var Es=/^([A-Za-z0-9][A-Za-z0-9!#$&^_-]{0,126})\/([A-Za-z0-9][A-Za-z0-9!#$&^_.+-]{0,126});?$/;function Cs(e){let t=e.indexOf(";"),a=t!==-1?e.slice(0,t).trim():e.trim(),r=Es.exec(a.toLowerCase().toLowerCase());if(!r)return;let n=r[1],o=r[2],u,i=o.lastIndexOf("+");return i!==-1&&(u=o.substring(i+1),o=o.substring(0,i)),{type:n,subtype:o,suffix:u}}});var cn=h(la=>{"use strict";Object.defineProperty(la,"__esModule",{value:!0});la.useFetch=void 0;var lt=require("react"),hs=Ut(),un=Pe(),pn=qt(),Ds=pr(),ln=we();async function xs(e){if(!e.ok)throw new Error(e.statusText);let t=e.headers.get("content-type");return t&&(0,Ds.isJSON)(t)?await e.json():await e.text()}function _s(e){return{data:e,hasMore:!1}}function Us(e,t){let{parseResponse:a,mapResult:r,initialData:n,execute:o,keepPreviousData:u,onError:i,onData:s,onWillExecute:p,failureToastOptions:c,...y}=t||{},g={initialData:n,execute:o,keepPreviousData:u,onError:i,onData:s,onWillExecute:p,failureToastOptions:c},R=(0,un.useLatest)(a||xs),l=(0,un.useLatest)(r||_s),S=(0,lt.useRef)(),d=(0,lt.useRef)(),b=typeof e=="function"?e({page:0}):void 0;(!S.current||typeof d.current>"u"||d.current!==b)&&(S.current=e),d.current=b;let I=(0,lt.useRef)(),A=(0,lt.useCallback)((f,D)=>async v=>{let J=await(0,pn.fetch)(f(v),{signal:I.current?.signal,...D}),j=await R.current(J);return l.current?.(j)},[R,l]),M=(0,lt.useCallback)(async(f,D)=>{let v=await(0,pn.fetch)(f,{signal:I.current?.signal,...D}),J=await R.current(v);return l.current(J)?.data},[R,l]),P=(0,lt.useMemo)(()=>d.current?A:M,[d,M,A]);return(0,hs.useCachedPromise)(P,[S.current,y],{...g,internal_cacheKeySuffix:d.current+(0,ln.hash)(l.current)+(0,ln.hash)(R.current),abortable:I})}la.useFetch=Us});var ca=h(ie=>{"use strict";var vs=ie&&ie.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ie,"__esModule",{value:!0});ie.defaultParsing=ie.handleOutput=ie.getSpawnedResult=ie.getSpawnedPromise=void 0;var Ts=require("node:buffer"),Sn=vs(require("node:stream")),ws=require("node:util"),Os=require("signal-exit");function Bs(e,{timeout:t}={}){let a=new Promise((i,s)=>{e.on("exit",(p,c)=>{i({exitCode:p,signal:c,timedOut:!1})}),e.on("error",p=>{s(p)}),e.stdin&&e.stdin.on("error",p=>{s(p)})});if(t===0||t===void 0)return a;let r,n=new Promise((i,s)=>{r=setTimeout(()=>{e.kill("SIGTERM"),s(Object.assign(new Error("Timed out"),{timedOut:!0,signal:"SIGTERM"}))},t)}),o=a.finally(()=>{clearTimeout(r)}),u=(0,Os.onExit)(()=>{e.kill()});return Promise.race([n,o]).finally(()=>u())}ie.getSpawnedPromise=Bs;var lr=class extends Error{constructor(){super("The output is too big"),this.name="MaxBufferError"}},qs=(0,ws.promisify)(Sn.default.pipeline);function Ls(e){let{encoding:t}=e,a=t==="buffer",r=new Sn.default.PassThrough({objectMode:!1});t&&t!=="buffer"&&r.setEncoding(t);let n=0,o=[];return r.on("data",u=>{o.push(u),n+=u.length}),r.getBufferedValue=()=>a?Buffer.concat(o,n):o.join(""),r.getBufferedLength=()=>n,r}async function yn(e,t){let a=Ls(t);return await new Promise((r,n)=>{let o=u=>{u&&a.getBufferedLength()<=Ts.constants.MAX_LENGTH&&(u.bufferedData=a.getBufferedValue()),n(u)};(async()=>{try{await qs(e,a),r()}catch(u){o(u)}})(),a.on("data",()=>{a.getBufferedLength()>1e3*1e3*80&&o(new lr)})}),a.getBufferedValue()}async function dn(e,t){e.destroy();try{return await t}catch(a){return a.bufferedData}}async function Ns({stdout:e,stderr:t},{encoding:a},r){let n=yn(e,{encoding:a}),o=yn(t,{encoding:a});try{return await Promise.all([r,n,o])}catch(u){return Promise.all([{error:u,exitCode:null,signal:u.signal,timedOut:u.timedOut||!1},dn(e,n),dn(t,o)])}}ie.getSpawnedResult=Ns;function Vs(e){let t=typeof e=="string"?`
`:10,a=typeof e=="string"?"\r":13;return e[e.length-1]===t&&(e=e.slice(0,-1)),e[e.length-1]===a&&(e=e.slice(0,-1)),e}function ks(e,t){return e.stripFinalNewline?Vs(t):t}ie.handleOutput=ks;var Fs=({timedOut:e,timeout:t,signal:a,exitCode:r})=>e?`timed out after ${t} milliseconds`:a!=null?`was killed with ${a}`:r!=null?`failed with exit code ${r}`:"failed",js=({stdout:e,stderr:t,error:a,signal:r,exitCode:n,command:o,timedOut:u,options:i,parentError:s})=>{let c=`Command ${Fs({timedOut:u,timeout:i?.timeout,signal:r,exitCode:n})}: ${o}`,y=a?`${c}
${a.message}`:c,g=[y,t,e].filter(Boolean).join(`
`);return a?a.originalMessage=a.message:a=s,a.message=g,a.shortMessage=y,a.command=o,a.exitCode=n,a.signal=r,a.stdout=e,a.stderr=t,"bufferedData"in a&&delete a.bufferedData,a};function zs({stdout:e,stderr:t,error:a,exitCode:r,signal:n,timedOut:o,command:u,options:i,parentError:s}){if(a||r!==0||n!==null)throw js({error:a,exitCode:r,signal:n,stdout:e,stderr:t,command:u,timedOut:o,options:i,parentError:s});return e}ie.defaultParsing=zs});var In=h(ct=>{"use strict";var Hs=ct&&ct.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ct,"__esModule",{value:!0});ct.useExec=void 0;var Gs=Hs(require("node:child_process")),bn=require("react"),$s=Ut(),Qs=Pe(),Lt=ca(),Ws=/ +/g;function Ks(e,t){if(t)return[e,...t];let a=[];for(let r of e.trim().split(Ws)){let n=a[a.length-1];n&&n.endsWith("\\")?a[a.length-1]=`${n.slice(0,-1)} ${r}`:a.push(r)}return a}function Ys(e,t,a){let{parseOutput:r,input:n,onData:o,onWillExecute:u,initialData:i,execute:s,keepPreviousData:p,onError:c,failureToastOptions:y,...g}=Array.isArray(t)?a||{}:t||{},R={initialData:i,execute:s,keepPreviousData:p,onError:c,onData:o,onWillExecute:u,failureToastOptions:y},l=(0,bn.useRef)(),S=(0,Qs.useLatest)(r||Lt.defaultParsing),d=(0,bn.useCallback)(async(b,I,A,M)=>{let[P,...f]=Ks(b,I),D=[P,...f].join(" "),v={stripFinalNewline:!0,...A,timeout:A?.timeout||1e4,signal:l.current?.signal,encoding:A?.encoding===null?"buffer":A?.encoding||"utf8",env:{PATH:"/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin",...process.env,...A?.env}},J=Gs.default.spawn(P,f,v),j=(0,Lt.getSpawnedPromise)(J,v);M&&J.stdin.end(M);let[{error:E,exitCode:T,signal:w,timedOut:C},O,ve]=await(0,Lt.getSpawnedResult)(J,v,j),tt=(0,Lt.handleOutput)(v,O),Qa=(0,Lt.handleOutput)(v,ve);return S.current({stdout:tt,stderr:Qa,error:E,exitCode:T,signal:w,timedOut:C,command:D,options:v,parentError:new Error})},[S]);return(0,$s.useCachedPromise)(d,[e,Array.isArray(t)?t:[],g,n],{...R,abortable:l})}ct.useExec=Ys});var Rn=h(yt=>{"use strict";var da=yt&&yt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(yt,"__esModule",{value:!0});yt.useStreamJSON=void 0;var Js=require("@raycast/api"),gn=da(qt()),kt=require("node:fs"),cr=require("node:fs/promises"),ya=require("node:path"),Mn=require("node:stream/promises"),Nt=require("react"),Zs=da(require("stream-chain")),Xs=require("stream-json"),eu=da(require("stream-json/filters/Pick")),tu=da(require("stream-json/streamers/StreamArray")),mn=pr(),au=Ut(),ru=we();async function Vt(e,t,a){if(typeof e=="object"||e.startsWith("http://")||e.startsWith("https://"))return await nu(e,t,a);if(e.startsWith("file://"))return await ou((0,ya.normalize)(decodeURIComponent(new URL(e).pathname)),t,a?.signal?a.signal:void 0);throw new Error("Only HTTP(S) or file URLs are supported")}async function nu(e,t,a){let r=await(0,gn.default)(e,a);if(!r.ok)throw new Error("Failed to fetch URL");if(!(0,mn.isJSON)(r.headers.get("content-type")))throw new Error("URL does not return JSON");if(!r.body)throw new Error("Failed to retrieve expected JSON content: Response body is missing or inaccessible.");await(0,Mn.pipeline)(r.body,(0,kt.createWriteStream)(t),a?.signal?{signal:a.signal}:void 0)}async function ou(e,t,a){await(0,Mn.pipeline)((0,kt.createReadStream)(e),(0,kt.createWriteStream)(t),a?{signal:a}:void 0)}async function iu(e,t,a,r,n){let o=(0,ya.join)(t,a);try{await(0,cr.stat)(t)}catch{(0,kt.mkdirSync)(t,{recursive:!0}),await Vt(e,o,n);return}if(r){await Vt(e,o,n);return}let u;try{u=await(0,cr.stat)(o)}catch{await Vt(e,o,n);return}if(typeof e=="object"||e.startsWith("http://")||e.startsWith("https://")){let i=await(0,gn.default)(e,{...n,method:"HEAD"});if(!i.ok)throw new Error("Could not fetch URL");if(!(0,mn.isJSON)(i.headers.get("content-type")))throw new Error("URL does not return JSON");let s=Date.parse(i.headers.get("last-modified")??"");if(u.size===0||Number.isNaN(s)||s>u.mtimeMs){await Vt(e,o,n);return}}else if(e.startsWith("file://"))try{(await(0,cr.stat)((0,ya.normalize)(decodeURIComponent(new URL(e).pathname)))).mtimeMs>u.mtimeMs&&await Vt(e,o,n)}catch{throw new Error("Source file could not be read")}else throw new Error("Only HTTP(S) or file URLs are supported")}async function*su(e,t,a,r,n,o){let u=[],i=new Zs.default([(0,kt.createReadStream)(e),r?eu.default.withParser({filter:r}):(0,Xs.parser)(),new tu.default,s=>o?.(s.value)??s.value]);a?.addEventListener("abort",()=>{i.destroy()});try{for await(let s of i){if(a?.aborted)return[];(!n||n(s))&&u.push(s),u.length>=t&&(yield u,u=[])}}catch(s){throw i.destroy(),s}return u.length>0&&(yield u),[]}function uu(e,t){let{initialData:a,execute:r,keepPreviousData:n,onError:o,onData:u,onWillExecute:i,failureToastOptions:s,dataPath:p,filter:c,transform:y,pageSize:g=20,...R}=t??{},l=(0,Nt.useRef)(),S=(0,Nt.useRef)(),d={initialData:a,execute:r,keepPreviousData:n,onError:o,onData:u,onWillExecute:i,failureToastOptions:s},b=(0,Nt.useRef)(null),I=(0,Nt.useRef)(null),A=(0,Nt.useRef)(!1);return(0,au.useCachedPromise)((M,P,f,D,v,J)=>async({page:j})=>{let E=(0,ru.hash)(M)+".json",T=Js.environment.supportPath;if(j===0){I.current?.abort(),I.current=new AbortController;let O=(0,ya.join)(T,E),ve=!!(l.current&&l.current!==M&&S.current&&S.current===O);l.current=M,S.current=O,await iu(M,T,E,ve,{...f,signal:I.current?.signal}),b.current=su(O,P,I.current?.signal,D,v,J)}if(!b.current)return{hasMore:A.current,data:[]};let{value:w,done:C}=await b.current.next();return A.current=!C,{hasMore:A.current,data:w??[]}},[e,g,R,p,c,y],d)}yt.useStreamJSON=uu});var dr=h(Ie=>{"use strict";var yr=Ie&&Ie.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Ie,"__esModule",{value:!0});Ie.baseExecuteSQL=Ie.isPermissionError=Ie.PermissionError=void 0;var pu=require("node:fs"),Sa=require("node:fs/promises"),lu=yr(require("node:os")),An=yr(require("node:child_process")),fn=yr(require("node:path")),ba=ca(),cu=we(),ga=class extends Error{constructor(t){super(t),this.name="PermissionError"}};Ie.PermissionError=ga;function yu(e){return e instanceof Error&&e.name==="PermissionError"}Ie.isPermissionError=yu;async function du(e,t,a){if(!(0,pu.existsSync)(e))throw new Error("The database does not exist");let r=a?.signal,n,o=An.default.spawn("sqlite3",["--json","--readonly",e,t],{signal:r}),u=(0,ba.getSpawnedPromise)(o),[{error:i,exitCode:s,signal:p},c,y]=await(0,ba.getSpawnedResult)(o,{encoding:"utf-8"},u);if(Ia(r),y.match("(5)")||y.match("(14)")){if(!n){let g=fn.default.join(lu.default.tmpdir(),"useSQL",(0,cu.hash)(e));await(0,Sa.mkdir)(g,{recursive:!0}),Ia(r),n=fn.default.join(g,"db.db"),await(0,Sa.copyFile)(e,n),await(0,Sa.writeFile)(n+"-shm",""),await(0,Sa.writeFile)(n+"-wal",""),Ia(r)}o=An.default.spawn("sqlite3",["--json","--readonly","--vfs","unix-none",n,t],{signal:r}),u=(0,ba.getSpawnedPromise)(o),[{error:i,exitCode:s,signal:p},c,y]=await(0,ba.getSpawnedResult)(o,{encoding:"utf-8"},u),Ia(r)}if(i||s!==0||p!==null)throw y.includes("authorization denied")?new ga("You do not have permission to access the database."):new Error(y||"Unknown error");return JSON.parse(c.trim()||"[]")}Ie.baseExecuteSQL=du;function Ia(e){if(e?.aborted){let t=new Error("aborted");throw t.name="AbortError",t}}});var En=h(dt=>{"use strict";var Su=dt&&dt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(dt,"__esModule",{value:!0});dt.useSQL=void 0;var ge=require("react/jsx-runtime"),H=require("@raycast/api"),bu=require("node:fs"),Iu=Su(require("node:os")),Ma=require("react"),gu=nt(),Mu=Pe(),mu=Dt(),Sr=dr();function Ru(e,t,a){let{permissionPriming:r,...n}=a||{},[o,u]=(0,Ma.useState)(),i=(0,Mu.useLatest)(a||{}),s=(0,Ma.useRef)(),p=(0,Ma.useCallback)(y=>{console.error(y);let g=y instanceof Error&&y.message.includes("authorization denied")?new Sr.PermissionError("You do not have permission to access the database."):y;(0,Sr.isPermissionError)(g)?u((0,ge.jsx)(Au,{priming:i.current.permissionPriming})):i.current.onError?i.current.onError(g):H.environment.launchType!==H.LaunchType.Background&&(0,mu.showFailureToast)(g,{title:"Cannot query the data"})},[i]),c=(0,Ma.useMemo)(()=>{if(!(0,bu.existsSync)(e))throw new Error("The database does not exist");return async(y,g)=>{let R=s.current?.signal;return(0,Sr.baseExecuteSQL)(y,g,{signal:R})}},[e]);return{...(0,gu.usePromise)(c,[e,t],{...n,onError:p}),permissionView:o}}dt.useSQL=Ru;var Pn=parseInt(Iu.default.release().split(".")[0])>=22,br=Pn?"Settings":"Preferences";function Au(e){let t=Pn?{title:"Open System Settings -> Privacy",target:"x-apple.systempreferences:com.apple.preference.security?Privacy_AllFiles"}:{title:"Open System Preferences -> Security",target:"x-apple.systempreferences:com.apple.preference.security?Privacy_AllFiles"};return H.environment.commandMode==="menu-bar"?(0,ge.jsxs)(H.MenuBarExtra,{icon:H.Icon.Warning,title:H.environment.commandName,children:[(0,ge.jsx)(H.MenuBarExtra.Item,{title:"Raycast needs full disk access",tooltip:`You can revert this access in ${br} whenever you want`}),e.priming?(0,ge.jsx)(H.MenuBarExtra.Item,{title:e.priming,tooltip:`You can revert this access in ${br} whenever you want`}):null,(0,ge.jsx)(H.MenuBarExtra.Separator,{}),(0,ge.jsx)(H.MenuBarExtra.Item,{title:t.title,onAction:()=>(0,H.open)(t.target)})]}):(0,ge.jsx)(H.List,{children:(0,ge.jsx)(H.List.EmptyView,{icon:{source:{light:"https://raycast.com/uploads/extensions-utils-security-permissions-light.png",dark:"https://raycast.com/uploads/extensions-utils-security-permissions-dark.png"}},title:"Raycast needs full disk access.",description:`${e.priming?e.priming+`
`:""}You can revert this access in ${br} whenever you want.`,actions:(0,ge.jsx)(H.ActionPanel,{children:(0,ge.jsx)(H.Action.Open,{...t})})})})}});var hn=h(St=>{"use strict";Object.defineProperty(St,"__esModule",{value:!0});St.useForm=St.FormValidation=void 0;var De=require("react"),Cn=Pe(),gr;(function(e){e.Required="required"})(gr||(St.FormValidation=gr={}));function Ir(e,t){if(e){if(typeof e=="function")return e(t);if(e===gr.Required){let a=typeof t<"u"&&t!==null;if(a)switch(typeof t){case"string":a=t.length>0;break;case"object":Array.isArray(t)?a=t.length>0:t instanceof Date&&(a=t.getTime()>0);break;default:break}if(!a)return"The item is required"}}}function fu(e){let{onSubmit:t,validation:a,initialValues:r={}}=e,[n,o]=(0,De.useState)(r),[u,i]=(0,De.useState)({}),s=(0,De.useRef)({}),p=(0,Cn.useLatest)(a||{}),c=(0,Cn.useLatest)(t),y=(0,De.useCallback)(b=>{s.current[b]?.focus()},[s]),g=(0,De.useCallback)(async b=>{let I=!1;for(let[M,P]of Object.entries(p.current)){let f=Ir(P,b[M]);f&&(I||(I={},y(M)),I[M]=f)}if(I)return i(I),!1;let A=await c.current(b);return typeof A=="boolean"?A:!0},[p,c,y]),R=(0,De.useCallback)((b,I)=>{i(A=>({...A,[b]:I}))},[i]),l=(0,De.useCallback)(function(b,I){o(A=>({...A,[b]:typeof I=="function"?I(A[b]):I}))},[o]),S=(0,De.useMemo)(()=>new Proxy({},{get(b,I){let A=p.current[I],M=n[I];return{onChange(P){u[I]&&(Ir(A,P)||R(I,void 0)),l(I,P)},onBlur(P){let f=Ir(A,P.target.value);f&&R(I,f)},error:u[I],id:I,value:typeof M>"u"?null:M,ref:P=>{s.current[I]=P}}}}),[u,p,R,n,s,l]),d=(0,De.useCallback)(b=>{i({}),Object.entries(s.current).forEach(([I,A])=>{b?.[I]||A?.reset()}),b&&o(b)},[o,i,s]);return{handleSubmit:g,setValidationError:R,setValue:l,values:n,itemProps:S,focus:y,reset:d}}St.useForm=fu});var xn=h(ma=>{"use strict";Object.defineProperty(ma,"__esModule",{value:!0});ma.useAI=void 0;var Dn=require("react"),Pu=require("@raycast/api"),Eu=nt();function Cu(e,t={}){let{creativity:a,stream:r,model:n,...o}=t,[u,i]=(0,Dn.useState)(""),s=(0,Dn.useRef)(),{isLoading:p,error:c,revalidate:y}=(0,Eu.usePromise)(async(g,R,l)=>{i("");let S=Pu.AI.ask(g,{creativity:R,model:n,signal:s.current?.signal});l===!1?i(await S):(S.on("data",d=>{i(b=>b+d)}),await S)},[e,a,r],{...o,abortable:s});return{isLoading:p,data:u,error:c,revalidate:y}}ma.useAI=Cu});var vn=h(Ra=>{"use strict";Object.defineProperty(Ra,"__esModule",{value:!0});Ra.useFrecencySorting=void 0;var Mr=require("react"),_n=Pe(),hu=na(),Du=10,Un=1440*60*1e3,xu=Math.log(2)/(Du*Un),_u={Default:100,Embed:0,Bookmark:140};function Uu(e){let t=Date.now(),a=e?e.lastVisited:0,r=e?e.frecency:0,n=(t-a)/Un,o=_u.Default*Math.exp(-xu*n),u=r+o;return{lastVisited:t,frecency:u}}var vu=e=>{if(process.env.NODE_ENV!=="production"&&(typeof e!="object"||!e||!("id"in e)||typeof e.id!="string"))throw new Error("Specify a key function or make sure your items have an 'id' property");return e.id};function Tu(e,t){let a=(0,_n.useLatest)(t?.key||vu),r=(0,_n.useLatest)(t?.sortUnvisited),[n,o]=(0,hu.useCachedState)(`raycast_frecency_${t?.namespace}`,{}),u=(0,Mr.useCallback)(async function(c){let y=a.current(c);o(g=>{let R=g[y],l=Uu(R);return{...g,[y]:l}})},[a,o]),i=(0,Mr.useCallback)(async function(c){let y=a.current(c);o(g=>{let R={...g};return delete R[y],R})},[a,o]);return{data:(0,Mr.useMemo)(()=>e?e.sort((p,c)=>{let y=n[a.current(p)],g=n[a.current(c)];return y&&!g?-1:!y&&g?1:y&&g?g.frecency-y.frecency:r.current?r.current(p,c):0}):[],[n,e,a,r]),visitItem:u,resetRanking:i}}Ra.useFrecencySorting=Tu});var On=h(Aa=>{"use strict";Object.defineProperty(Aa,"__esModule",{value:!0});Aa.useLocalStorage=void 0;var mr=require("@raycast/api"),Tn=Dt(),wn=we(),wu=nt();function Ou(e,t){let{data:a,isLoading:r,mutate:n}=(0,wu.usePromise)(async i=>{let s=await mr.LocalStorage.getItem(i);return typeof s<"u"?JSON.parse(s,wn.reviver):t},[e]);async function o(i){try{await n(mr.LocalStorage.setItem(e,JSON.stringify(i,wn.replacer)),{optimisticUpdate(s){return s}})}catch(s){await(0,Tn.showFailureToast)(s,{title:"Failed to set value in local storage"})}}async function u(){try{await n(mr.LocalStorage.removeItem(e),{optimisticUpdate(){}})}catch(i){await(0,Tn.showFailureToast)(i,{title:"Failed to remove value from local storage"})}}return{value:a,setValue:o,removeValue:u,isLoading:r}}Aa.useLocalStorage=Ou});var Vn=h(bt=>{"use strict";Object.defineProperty(bt,"__esModule",{value:!0});bt.slightlyLighterColor=bt.slightlyDarkerColor=void 0;function Bu(e){let t=0,a=0,r=0;if(e.length===4)t=parseInt(`${e[1]}${e[1]}`,16),a=parseInt(`${e[2]}${e[2]}`,16),r=parseInt(`${e[3]}${e[3]}`,16);else if(e.length===7)t=parseInt(`${e[1]}${e[2]}`,16),a=parseInt(`${e[3]}${e[4]}`,16),r=parseInt(`${e[5]}${e[6]}`,16);else throw new Error(`Malformed hex color: ${e}`);return{r:t,g:a,b:r}}function qu({r:e,g:t,b:a}){let r=e.toString(16),n=t.toString(16),o=a.toString(16);return r.length===1&&(r=`0${r}`),n.length===1&&(n=`0${n}`),o.length===1&&(o=`0${o}`),`#${r}${n}${o}`}function Lu({r:e,g:t,b:a}){e/=255,t/=255,a/=255;let r=Math.min(e,t,a),n=Math.max(e,t,a),o=n-r,u=0,i=0,s=0;return o===0?u=0:n===e?u=(t-a)/o%6:n===t?u=(a-e)/o+2:u=(e-t)/o+4,u=Math.round(u*60),u<0&&(u+=360),s=(n+r)/2,i=o===0?0:o/(1-Math.abs(2*s-1)),i=+(i*100).toFixed(1),s=+(s*100).toFixed(1),{h:u,s:i,l:s}}function Nu({h:e,s:t,l:a}){t/=100,a/=100;let r=(1-Math.abs(2*a-1))*t,n=r*(1-Math.abs(e/60%2-1)),o=a-r/2,u=0,i=0,s=0;return e>=0&&e<60?(u=r,i=n,s=0):e>=60&&e<120?(u=n,i=r,s=0):e>=120&&e<180?(u=0,i=r,s=n):e>=180&&e<240?(u=0,i=n,s=r):e>=240&&e<300?(u=n,i=0,s=r):e>=300&&e<360&&(u=r,i=0,s=n),u=Math.round((u+o)*255),i=Math.round((i+o)*255),s=Math.round((s+o)*255),{r:u,g:i,b:s}}function Bn(e){return Lu(Bu(e))}function qn(e){return qu(Nu(e))}function Ln(e,t,a){return t<a?e<t?t:e>a?a:e:e<a?a:e>t?t:e}var Nn=12;function Vu(e){let t=Bn(e);return qn({h:t.h,s:t.s,l:Ln(t.l-Nn,0,100)})}bt.slightlyDarkerColor=Vu;function ku(e){let t=Bn(e);return qn({h:t.h,s:t.s,l:Ln(t.l+Nn,0,100)})}bt.slightlyLighterColor=ku});var jn=h(fa=>{"use strict";Object.defineProperty(fa,"__esModule",{value:!0});fa.getAvatarIcon=void 0;var kn=Vn();function It(e,t){let a=e.charCodeAt(t);if(Number.isNaN(a))return["",t];if(a<55296||a>57343)return[e.charAt(t),t];if(55296<=a&&a<=56319){if(e.length<=t+1)throw new Error("High surrogate without following low surrogate");let n=e.charCodeAt(t+1);if(56320>n||n>57343)throw new Error("High surrogate without following low surrogate");return[e.charAt(t)+e.charAt(t+1),t+1]}if(t===0)throw new Error("Low surrogate without preceding high surrogate");let r=e.charCodeAt(t-1);if(55296>r||r>56319)throw new Error("Low surrogate without preceding high surrogate");return[e.charAt(t+1),t+1]}var Fn=["#DC829A","#D64854","#D47600","#D36CDD","#52A9E4","#7871E8","#70920F","#43B93A","#EB6B3E","#26B795","#D85A9B","#A067DC","#BD9500","#5385D9"];function Fu(e,t){let a=e.trim().split(" "),r;if(a.length==1&&It(a[0],0)[0])r=It(a[0],0)[0];else if(a.length>1){let s=It(a[0],0)[0]||"",p=It(a[a.length-1],0)[0]??"";r=s+p}else r="";let n;if(t?.background)n=t?.background;else{let s=0,[p,c]=It(r,0);for(;p;)s+=p.charCodeAt(0),[p,c]=It(r,c+1);let y=s%Fn.length;n=Fn[y]}let u=50-0;return`data:image/svg+xml,${`<svg width="100px" height="100px">
  ${t?.gradient!==!1?`<defs>
      <linearGradient id="Gradient" x1="0.25" x2="0.75" y1="0" y2="1">
        <stop offset="0%" stop-color="${(0,kn.slightlyLighterColor)(n)}"/>
        <stop offset="50%" stop-color="${n}"/>
        <stop offset="100%" stop-color="${(0,kn.slightlyDarkerColor)(n)}"/>
      </linearGradient>
  </defs>`:""}
      <circle cx="50" cy="50" r="${u}" fill="${t?.gradient!==!1?"url(#Gradient)":n}" />
      ${r?`<text x="50" y="80" font-size="${u-1}" font-family="Inter, sans-serif" text-anchor="middle" fill="white">${r.toUpperCase()}</text>`:""}
    </svg>
  `.replaceAll(`
`,"")}`}fa.getAvatarIcon=Fu});var Hn=h(Pa=>{"use strict";Object.defineProperty(Pa,"__esModule",{value:!0});Pa.getFavicon=void 0;var zn=require("@raycast/api"),ju=require("url");function zu(e,t){try{let r=(typeof e=="string"?new ju.URL(e):e).hostname;return{source:`https://www.google.com/s2/favicons?sz=${t?.size??64}&domain=${r}`,fallback:t?.fallback??zn.Icon.Link,mask:t?.mask}}catch(a){return console.error(a),zn.Icon.Link}}Pa.getFavicon=zu});var Qn=h(Ea=>{"use strict";Object.defineProperty(Ea,"__esModule",{value:!0});Ea.getProgressIcon=void 0;var Gn=require("@raycast/api");function $n(e,t,a,r){let n=(r-90)*Math.PI/180;return{x:e+a*Math.cos(n),y:t+a*Math.sin(n)}}function Hu(e,t,a,r,n){let o=$n(e,t,a,n),u=$n(e,t,a,r),i=n-r<=180?"0":"1";return["M",o.x,o.y,"A",a,a,0,i,0,u.x,u.y].join(" ")}function Gu(e,t=Gn.Color.Red,a){let r=a?.background||(Gn.environment.appearance==="light"?"black":"white"),n=a?.backgroundOpacity||.1,o=10,i=50-5-o/2;return`data:image/svg+xml,${`<svg width="100px" height="100px">
      <circle cx="50" cy="50" r="${i}" stroke-width="${o}" stroke="${e<1?r:t}" opacity="${e<1?n:"1"}" fill="none" />
      ${e>0&&e<1?`<path d="${Hu(50,50,i,0,e*360)}" stroke="${t}" stroke-width="${o}" fill="none" />`:""}
    </svg>
  `.replaceAll(`
`,"")}`}Ea.getProgressIcon=Gu});var Wn=h(xe=>{"use strict";var $u=xe&&xe.__createBinding||(Object.create?(function(e,t,a,r){r===void 0&&(r=a);var n=Object.getOwnPropertyDescriptor(t,a);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,n)}):(function(e,t,a,r){r===void 0&&(r=a),e[r]=t[a]})),Rr=xe&&xe.__exportStar||function(e,t){for(var a in e)a!=="default"&&!Object.prototype.hasOwnProperty.call(t,a)&&$u(t,e,a)};Object.defineProperty(xe,"__esModule",{value:!0});Rr(jn(),xe);Rr(Hn(),xe);Rr(Qn(),xe)});var Kn=h(z=>{"use strict";Object.defineProperty(z,"__esModule",{value:!0});z.zoomService=z.slackService=z.linearService=z.jiraService=z.googleService=z.githubService=z.asanaService=void 0;var G=require("@raycast/api"),Ge=Ar(),Ca={asana:"1191201745684312",github:"7235fe8d42157f1f38c0",linear:"c8ff37b9225c3c9aefd7d66ea0e5b6f1",slack:"851756884692.5546927290212"},Le=e=>`data:image/svg+xml,${e}`,$e={asana:Le('<svg xmlns="http://www.w3.org/2000/svg" width="251" height="232" fill="none"><path fill="#F06A6A" d="M179.383 54.373c0 30.017-24.337 54.374-54.354 54.374-30.035 0-54.373-24.338-54.373-54.374C70.656 24.338 94.993 0 125.029 0c30.017 0 54.354 24.338 54.354 54.373ZM54.393 122.33C24.376 122.33.02 146.668.02 176.685c0 30.017 24.337 54.373 54.373 54.373 30.035 0 54.373-24.338 54.373-54.373 0-30.017-24.338-54.355-54.373-54.355Zm141.253 0c-30.035 0-54.373 24.338-54.373 54.374 0 30.035 24.338 54.373 54.373 54.373 30.017 0 54.374-24.338 54.374-54.373 0-30.036-24.338-54.374-54.374-54.374Z"/></svg>'),github:{source:Le('<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>'),tintColor:G.Color.PrimaryText},google:Le('<svg xmlns="http://www.w3.org/2000/svg" style="display:block" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/><path fill="none" d="M0 0h48v48H0z"/></svg>'),jira:Le('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="2361" height="2500" viewBox="2.59 0 214.091 224"><linearGradient id="a" x1="102.4" x2="56.15" y1="218.63" y2="172.39" gradientTransform="matrix(1 0 0 -1 0 264)" gradientUnits="userSpaceOnUse"><stop offset=".18" stop-color="#0052cc"/><stop offset="1" stop-color="#2684ff"/></linearGradient><linearGradient xlink:href="#a" id="b" x1="114.65" x2="160.81" y1="85.77" y2="131.92"/><path fill="#2684ff" d="M214.06 105.73 117.67 9.34 108.33 0 35.77 72.56 2.59 105.73a8.89 8.89 0 0 0 0 12.54l66.29 66.29L108.33 224l72.55-72.56 1.13-1.12 32.05-32a8.87 8.87 0 0 0 0-12.59zm-105.73 39.39L75.21 112l33.12-33.12L141.44 112z"/><path fill="url(#a)" d="M108.33 78.88a55.75 55.75 0 0 1-.24-78.61L35.62 72.71l39.44 39.44z"/><path fill="url(#b)" d="m141.53 111.91-33.2 33.21a55.77 55.77 0 0 1 0 78.86L181 151.35z"/></svg>'),linear:{source:{light:Le('<svg xmlns="http://www.w3.org/2000/svg" fill="#222326" width="200" height="200" viewBox="0 0 100 100"><path d="M1.22541 61.5228c-.2225-.9485.90748-1.5459 1.59638-.857L39.3342 97.1782c.6889.6889.0915 1.8189-.857 1.5964C20.0515 94.4522 5.54779 79.9485 1.22541 61.5228ZM.00189135 46.8891c-.01764375.2833.08887215.5599.28957165.7606L52.3503 99.7085c.2007.2007.4773.3075.7606.2896 2.3692-.1476 4.6938-.46 6.9624-.9259.7645-.157 1.0301-1.0963.4782-1.6481L2.57595 39.4485c-.55186-.5519-1.49117-.2863-1.648174.4782-.465915 2.2686-.77832 4.5932-.92588465 6.9624ZM4.21093 29.7054c-.16649.3738-.08169.8106.20765 1.1l64.77602 64.776c.2894.2894.7262.3742 1.1.2077 1.7861-.7956 3.5171-1.6927 5.1855-2.684.5521-.328.6373-1.0867.1832-1.5407L8.43566 24.3367c-.45409-.4541-1.21271-.3689-1.54074.1832-.99132 1.6684-1.88843 3.3994-2.68399 5.1855ZM12.6587 18.074c-.3701-.3701-.393-.9637-.0443-1.3541C21.7795 6.45931 35.1114 0 49.9519 0 77.5927 0 100 22.4073 100 50.0481c0 14.8405-6.4593 28.1724-16.7199 37.3375-.3903.3487-.984.3258-1.3542-.0443L12.6587 18.074Z"/></svg>'),dark:Le('<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="200" height="200" viewBox="0 0 100 100"><path d="M1.22541 61.5228c-.2225-.9485.90748-1.5459 1.59638-.857L39.3342 97.1782c.6889.6889.0915 1.8189-.857 1.5964C20.0515 94.4522 5.54779 79.9485 1.22541 61.5228ZM.00189135 46.8891c-.01764375.2833.08887215.5599.28957165.7606L52.3503 99.7085c.2007.2007.4773.3075.7606.2896 2.3692-.1476 4.6938-.46 6.9624-.9259.7645-.157 1.0301-1.0963.4782-1.6481L2.57595 39.4485c-.55186-.5519-1.49117-.2863-1.648174.4782-.465915 2.2686-.77832 4.5932-.92588465 6.9624ZM4.21093 29.7054c-.16649.3738-.08169.8106.20765 1.1l64.77602 64.776c.2894.2894.7262.3742 1.1.2077 1.7861-.7956 3.5171-1.6927 5.1855-2.684.5521-.328.6373-1.0867.1832-1.5407L8.43566 24.3367c-.45409-.4541-1.21271-.3689-1.54074.1832-.99132 1.6684-1.88843 3.3994-2.68399 5.1855ZM12.6587 18.074c-.3701-.3701-.393-.9637-.0443-1.3541C21.7795 6.45931 35.1114 0 49.9519 0 77.5927 0 100 22.4073 100 50.0481c0 14.8405-6.4593 28.1724-16.7199 37.3375-.3903.3487-.984.3258-1.3542-.0443L12.6587 18.074Z" /></svg>')}},slack:Le('<svg xmlns="http://www.w3.org/2000/svg" viewBox="73 73 124 124"><style>.st0{fill:#e01e5a}.st1{fill:#36c5f0}.st2{fill:#2eb67d}.st3{fill:#ecb22e}</style><path d="M99.4 151.2c0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9h12.9v12.9zM105.9 151.2c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v32.3c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9v-32.3z" class="st0"/><path d="M118.8 99.4c-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v12.9h-12.9zM118.8 105.9c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H86.5c-7.1 0-12.9-5.8-12.9-12.9s5.8-12.9 12.9-12.9h32.3z" class="st1"/><path d="M170.6 118.8c0-7.1 5.8-12.9 12.9-12.9 7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9h-12.9v-12.9zM164.1 118.8c0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9V86.5c0-7.1 5.8-12.9 12.9-12.9 7.1 0 12.9 5.8 12.9 12.9v32.3z" class="st2"/><path d="M151.2 170.6c7.1 0 12.9 5.8 12.9 12.9 0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9v-12.9h12.9zM151.2 164.1c-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9h32.3c7.1 0 12.9 5.8 12.9 12.9 0 7.1-5.8 12.9-12.9 12.9h-32.3z" class="st3"/></svg>'),zoom:Le('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 351.845 80"><path d="M73.786 78.835H10.88A10.842 10.842 0 0 1 .833 72.122a10.841 10.841 0 0 1 2.357-11.85L46.764 16.7h-31.23C6.954 16.699 0 9.744 0 1.165h58.014c4.414 0 8.357 2.634 10.046 6.712a10.843 10.843 0 0 1-2.356 11.85L22.13 63.302h36.122c8.58 0 15.534 6.955 15.534 15.534Zm278.059-48.544C351.845 13.588 338.256 0 321.553 0c-8.934 0-16.975 3.89-22.524 10.063C293.48 3.89 285.44 0 276.505 0c-16.703 0-30.291 13.588-30.291 30.291v48.544c8.579 0 15.534-6.955 15.534-15.534v-33.01c0-8.137 6.62-14.757 14.757-14.757s14.757 6.62 14.757 14.757v33.01c0 8.58 6.955 15.534 15.534 15.534V30.291c0-8.137 6.62-14.757 14.757-14.757s14.758 6.62 14.758 14.757v33.01c0 8.58 6.954 15.534 15.534 15.534V30.291ZM238.447 40c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.908-40 40-40 40 17.909 40 40Zm-15.534 0c0-13.512-10.954-24.466-24.466-24.466S173.98 26.488 173.98 40s10.953 24.466 24.466 24.466S222.913 53.512 222.913 40Zm-70.68 0c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.909-40 40-40 40 17.909 40 40Zm-15.534 0c0-13.512-10.954-24.466-24.466-24.466S87.767 26.488 87.767 40s10.954 24.466 24.466 24.466S136.699 53.512 136.699 40Z" style="fill:#0b5cff"/></svg>')},Qu=e=>new Ge.OAuthService({client:new G.OAuth.PKCEClient({redirectMethod:G.OAuth.RedirectMethod.Web,providerName:"Asana",providerIcon:$e.asana,providerId:"asana",description:"Connect your Asana account"}),clientId:e.clientId??Ca.asana,authorizeUrl:e.authorizeUrl??"https://asana.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://asana.oauth.raycast.com/token",refreshTokenUrl:e.refreshTokenUrl??"https://asana.oauth.raycast.com/refresh-token",scope:e.scope,personalAccessToken:e.personalAccessToken,onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});z.asanaService=Qu;var Wu=e=>new Ge.OAuthService({client:new G.OAuth.PKCEClient({redirectMethod:G.OAuth.RedirectMethod.Web,providerName:"GitHub",providerIcon:$e.github,providerId:"github",description:"Connect your GitHub account"}),clientId:e.clientId??Ca.github,authorizeUrl:e.authorizeUrl??"https://github.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://github.oauth.raycast.com/token",refreshTokenUrl:e.refreshTokenUrl??"https://github.oauth.raycast.com/refresh-token",scope:e.scope,personalAccessToken:e.personalAccessToken,onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});z.githubService=Wu;var Ku=e=>new Ge.OAuthService({client:new G.OAuth.PKCEClient({redirectMethod:G.OAuth.RedirectMethod.AppURI,providerName:"Google",providerIcon:$e.google,providerId:"google",description:"Connect your Google account"}),clientId:e.clientId,authorizeUrl:e.authorizeUrl??"https://accounts.google.com/o/oauth2/v2/auth",tokenUrl:e.tokenUrl??"https://oauth2.googleapis.com/token",refreshTokenUrl:e.tokenUrl,scope:e.scope,personalAccessToken:e.personalAccessToken,bodyEncoding:e.bodyEncoding??"url-encoded",onAuthorize:e.onAuthorize,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});z.googleService=Ku;var Yu=e=>new Ge.OAuthService({client:new G.OAuth.PKCEClient({redirectMethod:G.OAuth.RedirectMethod.Web,providerName:"Jira",providerIcon:$e.jira,providerId:"jira",description:"Connect your Jira account"}),clientId:e.clientId,authorizeUrl:e.authorizeUrl??"https://auth.atlassian.com/authorize",tokenUrl:e.tokenUrl??"https://auth.atlassian.com/oauth/token",refreshTokenUrl:e.refreshTokenUrl,scope:e.scope,personalAccessToken:e.personalAccessToken,onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});z.jiraService=Yu;var Ju=e=>new Ge.OAuthService({client:new G.OAuth.PKCEClient({redirectMethod:G.OAuth.RedirectMethod.Web,providerName:"Linear",providerIcon:$e.linear,providerId:"linear",description:"Connect your Linear account"}),clientId:e.clientId??Ca.linear,authorizeUrl:e.authorizeUrl??"https://linear.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://linear.oauth.raycast.com/token",refreshTokenUrl:e.refreshTokenUrl??"https://linear.oauth.raycast.com/refresh-token",scope:e.scope,extraParameters:{actor:"user"},onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});z.linearService=Ju;var Zu=e=>new Ge.OAuthService({client:new G.OAuth.PKCEClient({redirectMethod:G.OAuth.RedirectMethod.Web,providerName:"Slack",providerIcon:$e.slack,providerId:"slack",description:"Connect your Slack account"}),clientId:e.clientId??Ca.slack,authorizeUrl:e.authorizeUrl??"https://slack.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://slack.oauth.raycast.com/token",refreshTokenUrl:e.tokenUrl??"https://slack.oauth.raycast.com/refresh-token",scope:"",extraParameters:{user_scope:e.scope},personalAccessToken:e.personalAccessToken,bodyEncoding:e.tokenUrl?e.bodyEncoding??"url-encoded":"json",onAuthorize:e.onAuthorize,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser??(t=>({access_token:t.authed_user.access_token,scope:t.authed_user.scope}))});z.slackService=Zu;var Xu=e=>new Ge.OAuthService({client:new G.OAuth.PKCEClient({redirectMethod:G.OAuth.RedirectMethod.Web,providerName:"Zoom",providerIcon:$e.zoom,providerId:"zoom",description:"Connect your Zoom account"}),clientId:e.clientId,authorizeUrl:e.authorizeUrl??"https://zoom.us/oauth/authorize",tokenUrl:e.tokenUrl??"https://zoom.us/oauth/token",refreshTokenUrl:e.refreshTokenUrl,scope:e.scope,personalAccessToken:e.personalAccessToken,bodyEncoding:e.bodyEncoding??"url-encoded",onAuthorize:e.onAuthorize,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});z.zoomService=Xu});var Ar=h(gt=>{"use strict";var ep=gt&&gt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(gt,"__esModule",{value:!0});gt.OAuthService=void 0;var Yn=ep(qt()),Qe=Kn(),Me=class{constructor(t){this.clientId=t.clientId,this.scope=Array.isArray(t.scope)?t.scope.join(" "):t.scope,this.personalAccessToken=t.personalAccessToken,this.bodyEncoding=t.bodyEncoding,this.client=t.client,this.extraParameters=t.extraParameters,this.authorizeUrl=t.authorizeUrl,this.tokenUrl=t.tokenUrl,this.refreshTokenUrl=t.refreshTokenUrl,this.onAuthorize=t.onAuthorize,this.tokenResponseParser=t.tokenResponseParser??(a=>a),this.tokenRefreshResponseParser=t.tokenRefreshResponseParser??(a=>a),this.authorize=this.authorize.bind(this)}async authorize(){let t=await this.client.getTokens();if(t?.accessToken){if(t.refreshToken&&t.isExpired()){let o=await this.refreshTokens({token:t.refreshToken});if(o)return await this.client.setTokens(o),o.access_token}return t.accessToken}let a=await this.client.authorizationRequest({endpoint:this.authorizeUrl,clientId:this.clientId,scope:this.scope,extraParameters:this.extraParameters}),{authorizationCode:r}=await this.client.authorize(a),n=await this.fetchTokens({authRequest:a,authorizationCode:r});return await this.client.setTokens(n),n.access_token}async fetchTokens({authRequest:t,authorizationCode:a}){let r;if(this.bodyEncoding==="url-encoded"){let u=new URLSearchParams;u.append("client_id",this.clientId),u.append("code",a),u.append("code_verifier",t.codeVerifier),u.append("grant_type","authorization_code"),u.append("redirect_uri",t.redirectURI),r={body:u}}else r={body:JSON.stringify({client_id:this.clientId,code:a,code_verifier:t.codeVerifier,grant_type:"authorization_code",redirect_uri:t.redirectURI}),headers:{"Content-Type":"application/json"}};let n=await(0,Yn.default)(this.tokenUrl,{method:"POST",...r});if(!n.ok){let u=await n.text();throw console.error("fetch tokens error:",u),new Error(`Error while fetching tokens: ${n.status} (${n.statusText})
${u}`)}let o=this.tokenResponseParser(await n.json());return Array.isArray(o.scope)?{...o,scope:o.scope.join(" ")}:o}async refreshTokens({token:t}){let a;if(this.bodyEncoding==="url-encoded"){let n=new URLSearchParams;n.append("client_id",this.clientId),n.append("refresh_token",t),n.append("grant_type","refresh_token"),a={body:n}}else a={body:JSON.stringify({client_id:this.clientId,refresh_token:t,grant_type:"refresh_token"}),headers:{"Content-Type":"application/json"}};let r=await(0,Yn.default)(this.refreshTokenUrl??this.tokenUrl,{method:"POST",...a});if(r.ok){let n=this.tokenRefreshResponseParser(await r.json());return n.refresh_token=n.refresh_token??t,n}else{let n=await r.text();console.error("refresh tokens error:",n),this.client.description=`${this.client.providerName} needs you to sign-in again. Press \u23CE or click the button below to continue.`,await this.client.removeTokens(),await this.authorize()}}};gt.OAuthService=Me;Me.asana=Qe.asanaService;Me.github=Qe.githubService;Me.google=Qe.googleService;Me.jira=Qe.jiraService;Me.linear=Qe.linearService;Me.slack=Qe.slackService;Me.zoom=Qe.zoomService});var Jn=h(Mt=>{"use strict";Object.defineProperty(Mt,"__esModule",{value:!0});Mt.getAccessToken=Mt.withAccessToken=void 0;var tp=require("react/jsx-runtime"),ap=require("@raycast/api"),Ne=null,We=null,fr=null,Pr=null,Er=null;function rp(e){return ap.environment.commandMode==="no-view"?t=>async r=>{if(!Ne){Ne=e.personalAccessToken??await e.authorize(),We=e.personalAccessToken?"personal":"oauth";let n=(await e.client?.getTokens())?.idToken;e.onAuthorize&&await Promise.resolve(e.onAuthorize({token:Ne,type:We,idToken:n}))}return t(r)}:t=>{let a=r=>{e.personalAccessToken?(Ne=e.personalAccessToken,We="personal"):(fr||(fr=Cr(e.authorize())),Ne=fr.read(),We="oauth");let n;return e.client&&(Pr||(Pr=Cr(e.client.getTokens())),n=Pr.read()?.idToken),!Er&&e.onAuthorize&&(Er=Cr(Promise.resolve(e.onAuthorize({token:Ne,type:We,idToken:n})))),Er?.read(),(0,tp.jsx)(t,{...r})};return a.displayName=`withAccessToken(${t.displayName||t.name})`,a}}Mt.withAccessToken=rp;function np(){if(!Ne||!We)throw new Error("getAccessToken must be used when authenticated (eg. used inside `withAccessToken`)");return{token:Ne,type:We}}Mt.getAccessToken=np;function Cr(e){let t="pending",a,r=e.then(o=>{t="success",a=o},o=>{t="error",a=o});return{read:()=>{switch(t){case"pending":throw r;case"error":throw a;default:return a}}}}});var Xn=h(Ve=>{"use strict";var op=Ve&&Ve.__createBinding||(Object.create?(function(e,t,a,r){r===void 0&&(r=a);var n=Object.getOwnPropertyDescriptor(t,a);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,n)}):(function(e,t,a,r){r===void 0&&(r=a),e[r]=t[a]})),Zn=Ve&&Ve.__exportStar||function(e,t){for(var a in e)a!=="default"&&!Object.prototype.hasOwnProperty.call(t,a)&&op(t,e,a)};Object.defineProperty(Ve,"__esModule",{value:!0});Zn(Ar(),Ve);Zn(Jn(),Ve)});var no=h(se=>{"use strict";var eo=se&&se.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(se,"__esModule",{value:!0});se.createDeeplink=se.createExtensionDeeplink=se.createScriptCommandDeeplink=se.DeeplinkType=void 0;var Dr=require("@raycast/api"),ip=eo(require("node:fs")),sp=eo(require("node:path")),hr;(function(e){e.ScriptCommand="script-command",e.Extension="extension"})(hr||(se.DeeplinkType=hr={}));function to(){return Dr.environment.raycastVersion.includes("alpha")?"raycastinternal://":"raycast://"}function up(){let e=JSON.parse(ip.default.readFileSync(sp.default.join(Dr.environment.assetsPath,"..","package.json"),"utf8"));return e.owner||e.author}function ao(e){let t=`${to()}script-commands/${e.command}`;if(e.arguments){let a="";for(let r of e.arguments)a+="&arguments="+encodeURIComponent(r);t+="?"+a.substring(1)}return t}se.createScriptCommandDeeplink=ao;function ro(e){let t=up(),a=Dr.environment.extensionName;"ownerOrAuthorName"in e&&"extensionName"in e&&(t=e.ownerOrAuthorName,a=e.extensionName);let r=`${to()}extensions/${t}/${a}/${e.command}`,n="";return e.launchType&&(n+="&launchType="+encodeURIComponent(e.launchType)),e.arguments&&(n+="&arguments="+encodeURIComponent(JSON.stringify(e.arguments))),e.context&&(n+="&context="+encodeURIComponent(JSON.stringify(e.context))),e.fallbackText&&(n+="&fallbackText="+encodeURIComponent(e.fallbackText)),n&&(r+="?"+n.substring(1)),r}se.createExtensionDeeplink=ro;function pp(e){return e.type===hr.ScriptCommand?ao(e):ro(e)}se.createDeeplink=pp});var oo=h(ha=>{"use strict";Object.defineProperty(ha,"__esModule",{value:!0});ha.executeSQL=void 0;var lp=dr();function cp(e,t){return(0,lp.baseExecuteSQL)(e,t)}ha.executeSQL=cp});var io=h(mt=>{"use strict";var yp=mt&&mt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(mt,"__esModule",{value:!0});mt.runAppleScript=void 0;var dp=yp(require("node:child_process")),Ft=ca();async function Sp(e,t,a){let{humanReadableOutput:r,language:n,timeout:o,...u}=Array.isArray(t)?a||{}:t||{},i=r!==!1?[]:["-ss"];n==="JavaScript"&&i.push("-l","JavaScript"),Array.isArray(t)&&i.push("-",...t);let s=dp.default.spawn("osascript",i,{...u,env:{PATH:"/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"}}),p=(0,Ft.getSpawnedPromise)(s,{timeout:o??1e4});s.stdin.end(e);let[{error:c,exitCode:y,signal:g,timedOut:R},l,S]=await(0,Ft.getSpawnedResult)(s,{encoding:"utf8"},p),d=(0,Ft.handleOutput)({stripFinalNewline:!0},l),b=(0,Ft.handleOutput)({stripFinalNewline:!0},S);return(0,Ft.defaultParsing)({stdout:d,stderr:b,error:c,exitCode:y,signal:g,timedOut:R,command:"osascript",options:a,parentError:new Error})}mt.runAppleScript=Sp});var so=h(xa=>{"use strict";Object.defineProperty(xa,"__esModule",{value:!0});xa.withCache=void 0;var bp=require("@raycast/api"),Da=we();function Ip(e,t){let a=new bp.Cache({namespace:(0,Da.hash)(e)}),r=async(...n)=>{let o=(0,Da.hash)(n||[])+t?.internal_cacheKeySuffix,u=a.get(o);if(u){let{data:s,timestamp:p}=JSON.parse(u,Da.reviver);if(!(t?.maxAge&&Date.now()-p>t.maxAge)&&(!t?.validate||t.validate(s)))return s}let i=await e(...n);return a.set(o,JSON.stringify({data:i,timestamp:Date.now()},Da.replacer)),i};return r.clearCache=()=>{a.clear()},r}xa.withCache=Ip});var Rt=h(_=>{"use strict";var gp=_&&_.__createBinding||(Object.create?(function(e,t,a,r){r===void 0&&(r=a);var n=Object.getOwnPropertyDescriptor(t,a);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,n)}):(function(e,t,a,r){r===void 0&&(r=a),e[r]=t[a]})),L=_&&_.__exportStar||function(e,t){for(var a in e)a!=="default"&&!Object.prototype.hasOwnProperty.call(t,a)&&gp(t,e,a)};Object.defineProperty(_,"__esModule",{value:!0});L(nt(),_);L(na(),_);L(Ut(),_);L(cn(),_);L(In(),_);L(Rn(),_);L(En(),_);L(hn(),_);L(xn(),_);L(vn(),_);L(On(),_);L(Wn(),_);L(Xn(),_);L(no(),_);L(oo(),_);L(io(),_);L(Dt(),_);L(so(),_)});var Q={};at(Q,{default:()=>Lo.default});var Lo,qa=Ya(()=>{$(Q,require("formdata-polyfill/esm.min.js"));Lo=B(require("formdata-polyfill/esm.min.js"))});var ee={};at(ee,{default:()=>Fo.default});var Fo,wr=Ya(()=>{$(ee,require("fetch-blob/from.js"));Fo=B(require("fetch-blob/from.js"))});var zo={};at(zo,{toFormData:()=>Zl});function Jl(e){let t=e.match(/\bfilename=("(.*?)"|([^()<>@,;:\\"/[\]?={}\s\t]+))($|;\s)/i);if(!t)return;let a=t[2]||t[3]||"",r=a.slice(a.lastIndexOf("\\")+1);return r=r.replace(/%22/g,'"'),r=r.replace(/&#(\d{4});/g,(n,o)=>String.fromCharCode(o)),r}async function Zl(e,t){if(!/multipart/i.test(t))throw new TypeError("Failed to fetch");let a=t.match(/boundary=(?:"([^"]+)"|([^;]+))/i);if(!a)throw new TypeError("no or bad content-type header, no multipart boundary");let r=new Or(a[1]||a[2]),n,o,u,i,s,p,c=[],y=new Q.FormData,g=b=>{u+=d.decode(b,{stream:!0})},R=b=>{c.push(b)},l=()=>{let b=new ee.File(c,p,{type:s});y.append(i,b)},S=()=>{y.append(i,u)},d=new TextDecoder("utf-8");d.decode(),r.onPartBegin=function(){r.onPartData=g,r.onPartEnd=S,n="",o="",u="",i="",s="",p=null,c.length=0},r.onHeaderField=function(b){n+=d.decode(b,{stream:!0})},r.onHeaderValue=function(b){o+=d.decode(b,{stream:!0})},r.onHeaderEnd=function(){if(o+=d.decode(),n=n.toLowerCase(),n==="content-disposition"){let b=o.match(/\bname=("([^"]*)"|([^()<>@,;:\\"/[\]?={}\s\t]+))/i);b&&(i=b[2]||b[3]||""),p=Jl(o),p&&(r.onPartData=R,r.onPartEnd=l)}else n==="content-type"&&(s=o);o="",n=""};for await(let b of e)r.write(b);return r.end(),y}var Ae,x,jo,je,Na,Va,$l,Qt,Ql,Wl,Kl,Yl,Ze,Or,Ho=Ya(()=>{wr();qa();Ae=0,x={START_BOUNDARY:Ae++,HEADER_FIELD_START:Ae++,HEADER_FIELD:Ae++,HEADER_VALUE_START:Ae++,HEADER_VALUE:Ae++,HEADER_VALUE_ALMOST_DONE:Ae++,HEADERS_ALMOST_DONE:Ae++,PART_DATA_START:Ae++,PART_DATA:Ae++,END:Ae++},jo=1,je={PART_BOUNDARY:jo,LAST_BOUNDARY:jo*=2},Na=10,Va=13,$l=32,Qt=45,Ql=58,Wl=97,Kl=122,Yl=e=>e|32,Ze=()=>{},Or=class{constructor(t){this.index=0,this.flags=0,this.onHeaderEnd=Ze,this.onHeaderField=Ze,this.onHeadersEnd=Ze,this.onHeaderValue=Ze,this.onPartBegin=Ze,this.onPartData=Ze,this.onPartEnd=Ze,this.boundaryChars={},t=`\r
--`+t;let a=new Uint8Array(t.length);for(let r=0;r<t.length;r++)a[r]=t.charCodeAt(r),this.boundaryChars[a[r]]=!0;this.boundary=a,this.lookbehind=new Uint8Array(this.boundary.length+8),this.state=x.START_BOUNDARY}write(t){let a=0,r=t.length,n=this.index,{lookbehind:o,boundary:u,boundaryChars:i,index:s,state:p,flags:c}=this,y=this.boundary.length,g=y-1,R=t.length,l,S,d=M=>{this[M+"Mark"]=a},b=M=>{delete this[M+"Mark"]},I=(M,P,f,D)=>{(P===void 0||P!==f)&&this[M](D&&D.subarray(P,f))},A=(M,P)=>{let f=M+"Mark";f in this&&(P?(I(M,this[f],a,t),delete this[f]):(I(M,this[f],t.length,t),this[f]=0))};for(a=0;a<r;a++)switch(l=t[a],p){case x.START_BOUNDARY:if(s===u.length-2){if(l===Qt)c|=je.LAST_BOUNDARY;else if(l!==Va)return;s++;break}else if(s-1===u.length-2){if(c&je.LAST_BOUNDARY&&l===Qt)p=x.END,c=0;else if(!(c&je.LAST_BOUNDARY)&&l===Na)s=0,I("onPartBegin"),p=x.HEADER_FIELD_START;else return;break}l!==u[s+2]&&(s=-2),l===u[s+2]&&s++;break;case x.HEADER_FIELD_START:p=x.HEADER_FIELD,d("onHeaderField"),s=0;case x.HEADER_FIELD:if(l===Va){b("onHeaderField"),p=x.HEADERS_ALMOST_DONE;break}if(s++,l===Qt)break;if(l===Ql){if(s===1)return;A("onHeaderField",!0),p=x.HEADER_VALUE_START;break}if(S=Yl(l),S<Wl||S>Kl)return;break;case x.HEADER_VALUE_START:if(l===$l)break;d("onHeaderValue"),p=x.HEADER_VALUE;case x.HEADER_VALUE:l===Va&&(A("onHeaderValue",!0),I("onHeaderEnd"),p=x.HEADER_VALUE_ALMOST_DONE);break;case x.HEADER_VALUE_ALMOST_DONE:if(l!==Na)return;p=x.HEADER_FIELD_START;break;case x.HEADERS_ALMOST_DONE:if(l!==Na)return;I("onHeadersEnd"),p=x.PART_DATA_START;break;case x.PART_DATA_START:p=x.PART_DATA,d("onPartData");case x.PART_DATA:if(n=s,s===0){for(a+=g;a<R&&!(t[a]in i);)a+=y;a-=g,l=t[a]}if(s<u.length)u[s]===l?(s===0&&A("onPartData",!0),s++):s=0;else if(s===u.length)s++,l===Va?c|=je.PART_BOUNDARY:l===Qt?c|=je.LAST_BOUNDARY:s=0;else if(s-1===u.length)if(c&je.PART_BOUNDARY){if(s=0,l===Na){c&=~je.PART_BOUNDARY,I("onPartEnd"),I("onPartBegin"),p=x.HEADER_FIELD_START;break}}else c&je.LAST_BOUNDARY&&l===Qt?(I("onPartEnd"),p=x.END,c=0):s=0;if(s>0)o[s-1]=l;else if(n>0){let M=new Uint8Array(o.buffer,o.byteOffset,o.byteLength);I("onPartData",0,n,M),n=0,d("onPartData"),a--}break;case x.END:break;default:throw new Error(`Unexpected state entered: ${p}`)}A("onHeaderField"),A("onHeaderValue"),A("onPartData"),this.index=s,this.state=p,this.flags=c}end(){if(this.state===x.HEADER_FIELD_START&&this.index===0||this.state===x.PART_DATA&&this.index===this.boundary.length)this.onPartEnd();else if(this.state!==x.END)throw new Error("MultipartParser.end(): stream ended unexpectedly")}}});var Ic={};at(Ic,{default:()=>bc});module.exports=Oi(Ic);var k=require("@raycast/api"),Ei=B(Rt()),kr=require("react");var N=require("@raycast/api"),uo=B(require("react")),Ke=require("react/jsx-runtime");function Mp(e,t=100){return e.length>t?e.slice(0,t)+" ...":e}function po(e){let t=e.error,a=()=>{(0,N.launchCommand)({name:N.environment.commandName,type:N.LaunchType.UserInitiated})};return(0,Ke.jsx)(N.MenuBarExtra,{icon:e.icon,isLoading:e.isLoading,title:e.title,tooltip:e.tooltip,children:t?(0,Ke.jsx)(At,{title:`Error: ${t}`,icon:{source:N.Icon.Warning},onAction:a}):e.children})}function At(e){return(0,Ke.jsx)(N.MenuBarExtra.Item,{title:Mp(e.title),icon:e.icon,subtitle:e.subtitle,shortcut:e.shortcut,onAction:e.onAction,tooltip:e.tooltip})}function mp(e,t){if(!t)return{shown:e,hidden:0};if(uo.default.isValidElement(e))return{shown:[e],hidden:0};let a=e;if(!a||a.length<=0)return{shown:void 0,hidden:0};let r=t||10,n=a.slice(0,r),o=a.length-n.length;return{shown:n,hidden:o}}function Rp(e,t){if(!(!e||e.length<=0))return e.join(t)}function xr(e){let t=Rp([e.title,e.subtitle].filter(o=>o)," "),{shown:a,hidden:r}=mp(e.children,e.maxChildren),n=a===void 0||a.length<=0;return(0,Ke.jsxs)(N.MenuBarExtra.Section,{title:t,children:[a,r>0&&e.moreElement&&e.moreElement(r),n&&e.emptyElement&&e.emptyElement]})}function lo(){return(0,Ke.jsx)(N.MenuBarExtra.Item,{title:"Configure Command",shortcut:{macOS:{modifiers:["cmd"],key:","},Windows:{modifiers:["ctrl"],key:","}},icon:N.Icon.Gear,onAction:()=>(0,N.openCommandPreferences)()})}function co(e){let t=e.min||1,a=e.max||100,r=e.default||10,o=(0,N.getPreferenceValues)()[e.name]||"",u=Number(o);return isNaN(u)||u<t||u>a?r:u}var X=require("@raycast/api"),me=require("react/jsx-runtime");var So=({sortQuery:e,setSortQuery:t,data:a})=>t?(0,me.jsxs)(X.MenuBarExtra.Submenu,{title:"Sort By",icon:X.Icon.ArrowUp,children:[a.filter(({value:r})=>!r.startsWith("sort:reaction")).map(({title:r,value:n})=>(0,me.jsx)(yo,{title:r,value:n,sortQuery:e??"",setSortQuery:t},n||"relevance")),a.some(({value:r})=>r.startsWith("sort:reaction"))&&(0,me.jsx)(X.MenuBarExtra.Section,{title:"Most Reactions",children:a.filter(({value:r})=>r.startsWith("sort:reaction")).map(({title:r,value:n})=>(0,me.jsx)(yo,{title:r,value:n,sortQuery:e??"",setSortQuery:t},n))})]}):(0,me.jsx)(me.Fragment,{}),yo=({title:e,value:t,sortQuery:a,setSortQuery:r})=>(0,me.jsx)(X.MenuBarExtra.Item,{title:e,icon:a===t?{source:X.Icon.CheckCircle,tintColor:X.Color.Green}:X.Icon.Circle,onAction:()=>r(t)});var Po=require("@raycast/api"),vl=require("lodash");var m=B(require("graphql-tag")),jt=m.default`
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
`,Ap=m.default`
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
  ${jt}
`,Re=m.default`
  fragment UserFields on User {
    id
    avatarUrl
    name
    login
    isViewer
  }
`,zt=m.default`
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
`,_a=m.default`
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
  ${zt}
  ${jt}
  ${Re}
`,fp=m.default`
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
  ${zt}
  ${jt}
  ${Re}
`,bo=m.default`
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
`,Io=m.default`
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
`,go=m.default`
  fragment RepositoryMentionFields on Repository {
    nameWithOwner
    description
    isPrivate
    isArchived
    owner {
      avatarUrl(size: 64)
    }
  }
`,Pp=m.default`
  fragment ProjectViewerFields on ProjectV2View {
    id
    name
    number
  }
`,Mo=m.default`
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
  ${zt}
  ${Pp}
`,mo=m.default`
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
  ${jt}
  ${zt}
  ${Re}
`,Ep=m.default`
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
  ${jt}
  ${zt}
  ${Re}
`,Cp=m.default`
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
`,Ro=m.default`
  fragment CommitFields on Commit {
    authoredDate
    oid
    message
  }
`,_r=m.default`
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
`,hp=m.default`
  fragment ReleaseFields on Release {
    id
    description
    name
    publishedAt
    createdAt
    tagName
    url
  }
`,Dp=m.default`
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
`,xp=m.default`
  mutation createRef($input: CreateRefInput!) {
    createRef(input: $input) {
      clientMutationId
      ref {
        id
        name
      }
    }
  }
`,_p=m.default`
  mutation deleteLinkedBranch($input: DeleteLinkedBranchInput!) {
    deleteLinkedBranch(input: $input) {
      clientMutationId
    }
  }
`,Up=m.default`
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
  ${Ap}
`,vp=m.default`
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
`,Tp=m.default`
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
`,wp=m.default`
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
`,Op=m.default`
  query issueDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...IssueDetailFields
    }
  }
  ${fp}
`,Bp=m.default`
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
  ${_a}
`,qp=m.default`
  query issueByNumber($owner: String!, $name: String!, $issueNumber: Int!) {
    repository(owner: $owner, name: $name) {
      issue(number: $issueNumber) {
        ...IssueFields
      }
    }
  }
  ${_a}
`,Lp=m.default`
  mutation closeIssue($nodeId: ID!, $stateReason: IssueClosedStateReason!) {
    closeIssue(input: { issueId: $nodeId, stateReason: $stateReason }) {
      issue {
        id
      }
    }
  }
`,Np=m.default`
  mutation reopenIssue($nodeId: ID!) {
    reopenIssue(input: { issueId: $nodeId }) {
      issue {
        id
      }
    }
  }
`,Vp=m.default`
  mutation changeIssueAssignees($issueId: ID!, $assigneeIds: [ID!]) {
    updateIssue(input: { id: $issueId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,kp=m.default`
  mutation changeIssueMilestone($issueId: ID!, $milestoneId: ID) {
    updateIssue(input: { id: $issueId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,Fp=m.default`
  mutation addIssueToProject($issueId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $issueId }) {
      clientMutationId
    }
  }
`,jp=m.default`
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
  ${_a}
`,zp=m.default`
  query searchIssueMentions($query: String!, $numberOfItems: Int!) {
    search(query: $query, type: ISSUE, first: $numberOfItems) {
      nodes {
        ... on Issue {
          ...IssueMentionFields
        }
      }
    }
  }
  ${bo}
`,Hp=m.default`
  query searchPullRequestMentions($query: String!, $numberOfItems: Int!) {
    search(query: $query, type: ISSUE, first: $numberOfItems) {
      nodes {
        ... on PullRequest {
          ...PullRequestMentionFields
        }
      }
    }
  }
  ${Io}
`,Gp=m.default`
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
  ${bo}
  ${Io}
`,$p=m.default`
  query searchRepositoryMentions($query: String!, $numberOfItems: Int!) {
    search(query: $query, type: REPOSITORY, first: $numberOfItems) {
      nodes {
        ... on Repository {
          ...RepositoryMentionFields
        }
      }
    }
  }
  ${go}
`,Qp=m.default`
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
  ${go}
`,Wp=m.default`
  mutation changeProjectStatus($projectId: ID!, $closed: Boolean!) {
    updateProjectV2(input: { projectId: $projectId, closed: $closed }) {
      clientMutationId
    }
  }
`,Kp=m.default`
  query projectDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...ProjectFields
    }
  }
  ${Mo}
`,Yp=m.default`
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
  ${mo}
`,Jp=m.default`
  query pullRequestDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...PullRequestDetailsFields
    }
  }
  ${Ep}
`,Zp=m.default`
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
`,Xp=m.default`
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
`,el=m.default`
  query pullRequestCommits($nodeId: ID!, $numberOfItems: Int!, $before: String) {
    node(id: $nodeId) {
      ...PullRequestCommitFields
    }
  }
  ${Cp}
`,tl=m.default`
  mutation closePullRequest($nodeId: ID!) {
    closePullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,al=m.default`
  mutation reopenPullRequest($nodeId: ID!) {
    reopenPullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,rl=m.default`
  mutation markPullRequestReadyForReview($nodeId: ID!) {
    markPullRequestReadyForReview(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,nl=m.default`
  mutation addPullRequestReview($nodeId: ID!, $event: PullRequestReviewEvent, $body: String) {
    addPullRequestReview(input: { pullRequestId: $nodeId, event: $event, body: $body }) {
      pullRequestReview {
        id
      }
    }
  }
`,ol=m.default`
  mutation changePullRequestAssignees($pullRequestId: ID!, $assigneeIds: [ID!]) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,il=m.default`
  mutation changePullRequestMilestone($pullRequestId: ID!, $milestoneId: ID) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,sl=m.default`
  mutation addPullRequestToProject($pullRequestId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $pullRequestId }) {
      clientMutationId
    }
  }
`,ul=m.default`
  mutation requestReview($pullRequestId: ID!, $collaboratorId: ID!) {
    requestReviews(input: { pullRequestId: $pullRequestId, userIds: [$collaboratorId], union: true }) {
      clientMutationId
    }
  }
`,pl=m.default`
  mutation mergePullRequest($nodeId: ID!, $method: PullRequestMergeMethod!) {
    mergePullRequest(input: { pullRequestId: $nodeId, mergeMethod: $method }) {
      pullRequest {
        nodeId: id
      }
    }
  }
`,ll=m.default`
  mutation addPullRequestToMergeQueue($nodeId: ID!) {
    enqueuePullRequest(input: { pullRequestId: $nodeId }) {
      __typename
    }
  }
`,cl=m.default`
  mutation removePullRequestFromMergeQueue($nodeId: ID!) {
    dequeuePullRequest(input: { id: $nodeId }) {
      __typename
    }
  }
`,yl=m.default`
  mutation enablePullRequestAutoMerge($nodeId: ID!, $mergeMethod: PullRequestMergeMethod) {
    enablePullRequestAutoMerge(input: { pullRequestId: $nodeId, mergeMethod: $mergeMethod }) {
      pullRequest {
        id
      }
    }
  }
`,dl=m.default`
  mutation disablePullRequestAutoMerge($nodeId: ID!) {
    disablePullRequestAutoMerge(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Sl=m.default`
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
`,bl=m.default`
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
  ${mo}
`,Il=m.default`
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
  ${_r}
`,gl=m.default`
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
  ${_r}
`,Ml=m.default`
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
`,ml=m.default`
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
`,Rl=m.default`
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
  ${Ro}
  ${Re}
`,Al=m.default`
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
  ${Ro}
`,fl=m.default`
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
  ${_a}
`,Pl=m.default`
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
  ${hp}
`,El=m.default`
  mutation addStar($repositoryId: ID!) {
    addStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,Cl=m.default`
  mutation removeStar($repositoryId: ID!) {
    removeStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,hl=m.default`
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
  ${_r}
`,Dl=m.default`
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
  ${Mo}
`,xl=m.default`
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
`,_l=m.default`
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
`,Ul=(e,t,a,r)=>e();function Ao(e,t=Ul){return{createLinkedBranch(a,r,n){return t(o=>e.request({document:Dp,variables:a,requestHeaders:{...r,...o},signal:n}),"createLinkedBranch","mutation",a)},createRef(a,r,n){return t(o=>e.request({document:xp,variables:a,requestHeaders:{...r,...o},signal:n}),"createRef","mutation",a)},deleteLinkedBranch(a,r,n){return t(o=>e.request({document:_p,variables:a,requestHeaders:{...r,...o},signal:n}),"deleteLinkedBranch","mutation",a)},searchDiscussions(a,r,n){return t(o=>e.request({document:Up,variables:a,requestHeaders:{...r,...o},signal:n}),"searchDiscussions","query",a)},getGitHubDiscussionNumber(a,r,n){return t(o=>e.request({document:vp,variables:a,requestHeaders:{...r,...o},signal:n}),"getGitHubDiscussionNumber","query",a)},repositoryCollaboratorsForIssues(a,r,n){return t(o=>e.request({document:Tp,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryCollaboratorsForIssues","query",a)},repositoryProjectsForIssues(a,r,n){return t(o=>e.request({document:wp,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryProjectsForIssues","query",a)},issueDetails(a,r,n){return t(o=>e.request({document:Op,variables:a,requestHeaders:{...r,...o},signal:n}),"issueDetails","query",a)},searchIssues(a,r,n){return t(o=>e.request({document:Bp,variables:a,requestHeaders:{...r,...o},signal:n}),"searchIssues","query",a)},issueByNumber(a,r,n){return t(o=>e.request({document:qp,variables:a,requestHeaders:{...r,...o},signal:n}),"issueByNumber","query",a)},closeIssue(a,r,n){return t(o=>e.request({document:Lp,variables:a,requestHeaders:{...r,...o},signal:n}),"closeIssue","mutation",a)},reopenIssue(a,r,n){return t(o=>e.request({document:Np,variables:a,requestHeaders:{...r,...o},signal:n}),"reopenIssue","mutation",a)},changeIssueAssignees(a,r,n){return t(o=>e.request({document:Vp,variables:a,requestHeaders:{...r,...o},signal:n}),"changeIssueAssignees","mutation",a)},changeIssueMilestone(a,r,n){return t(o=>e.request({document:kp,variables:a,requestHeaders:{...r,...o},signal:n}),"changeIssueMilestone","mutation",a)},addIssueToProject(a,r,n){return t(o=>e.request({document:Fp,variables:a,requestHeaders:{...r,...o},signal:n}),"addIssueToProject","mutation",a)},createIssue(a,r,n){return t(o=>e.request({document:jp,variables:a,requestHeaders:{...r,...o},signal:n}),"createIssue","mutation",a)},searchIssueMentions(a,r,n){return t(o=>e.request({document:zp,variables:a,requestHeaders:{...r,...o},signal:n}),"searchIssueMentions","query",a)},searchPullRequestMentions(a,r,n){return t(o=>e.request({document:Hp,variables:a,requestHeaders:{...r,...o},signal:n}),"searchPullRequestMentions","query",a)},issueOrPullRequestMention(a,r,n){return t(o=>e.request({document:Gp,variables:a,requestHeaders:{...r,...o},signal:n}),"issueOrPullRequestMention","query",a)},searchRepositoryMentions(a,r,n){return t(o=>e.request({document:$p,variables:a,requestHeaders:{...r,...o},signal:n}),"searchRepositoryMentions","query",a)},viewerRepositoryMentions(a,r,n){return t(o=>e.request({document:Qp,variables:a,requestHeaders:{...r,...o},signal:n}),"viewerRepositoryMentions","query",a)},changeProjectStatus(a,r,n){return t(o=>e.request({document:Wp,variables:a,requestHeaders:{...r,...o},signal:n}),"changeProjectStatus","mutation",a)},projectDetails(a,r,n){return t(o=>e.request({document:Kp,variables:a,requestHeaders:{...r,...o},signal:n}),"projectDetails","query",a)},searchPullRequests(a,r,n){return t(o=>e.request({document:Yp,variables:a,requestHeaders:{...r,...o},signal:n}),"searchPullRequests","query",a)},pullRequestDetails(a,r,n){return t(o=>e.request({document:Jp,variables:a,requestHeaders:{...r,...o},signal:n}),"pullRequestDetails","query",a)},repositoryCollaboratorsForPullRequests(a,r,n){return t(o=>e.request({document:Zp,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryCollaboratorsForPullRequests","query",a)},repositoryProjectsForPullRequests(a,r,n){return t(o=>e.request({document:Xp,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryProjectsForPullRequests","query",a)},pullRequestCommits(a,r,n){return t(o=>e.request({document:el,variables:a,requestHeaders:{...r,...o},signal:n}),"pullRequestCommits","query",a)},closePullRequest(a,r,n){return t(o=>e.request({document:tl,variables:a,requestHeaders:{...r,...o},signal:n}),"closePullRequest","mutation",a)},reopenPullRequest(a,r,n){return t(o=>e.request({document:al,variables:a,requestHeaders:{...r,...o},signal:n}),"reopenPullRequest","mutation",a)},markPullRequestReadyForReview(a,r,n){return t(o=>e.request({document:rl,variables:a,requestHeaders:{...r,...o},signal:n}),"markPullRequestReadyForReview","mutation",a)},addPullRequestReview(a,r,n){return t(o=>e.request({document:nl,variables:a,requestHeaders:{...r,...o},signal:n}),"addPullRequestReview","mutation",a)},changePullRequestAssignees(a,r,n){return t(o=>e.request({document:ol,variables:a,requestHeaders:{...r,...o},signal:n}),"changePullRequestAssignees","mutation",a)},changePullRequestMilestone(a,r,n){return t(o=>e.request({document:il,variables:a,requestHeaders:{...r,...o},signal:n}),"changePullRequestMilestone","mutation",a)},addPullRequestToProject(a,r,n){return t(o=>e.request({document:sl,variables:a,requestHeaders:{...r,...o},signal:n}),"addPullRequestToProject","mutation",a)},requestReview(a,r,n){return t(o=>e.request({document:ul,variables:a,requestHeaders:{...r,...o},signal:n}),"requestReview","mutation",a)},mergePullRequest(a,r,n){return t(o=>e.request({document:pl,variables:a,requestHeaders:{...r,...o},signal:n}),"mergePullRequest","mutation",a)},addPullRequestToMergeQueue(a,r,n){return t(o=>e.request({document:ll,variables:a,requestHeaders:{...r,...o},signal:n}),"addPullRequestToMergeQueue","mutation",a)},removePullRequestFromMergeQueue(a,r,n){return t(o=>e.request({document:cl,variables:a,requestHeaders:{...r,...o},signal:n}),"removePullRequestFromMergeQueue","mutation",a)},enablePullRequestAutoMerge(a,r,n){return t(o=>e.request({document:yl,variables:a,requestHeaders:{...r,...o},signal:n}),"enablePullRequestAutoMerge","mutation",a)},disablePullRequestAutoMerge(a,r,n){return t(o=>e.request({document:dl,variables:a,requestHeaders:{...r,...o},signal:n}),"disablePullRequestAutoMerge","mutation",a)},createPullRequest(a,r,n){return t(o=>e.request({document:Sl,variables:a,requestHeaders:{...r,...o},signal:n}),"createPullRequest","mutation",a)},initPullRequest(a,r,n){return t(o=>e.request({document:bl,variables:a,requestHeaders:{...r,...o},signal:n}),"initPullRequest","mutation",a)},searchRepositories(a,r,n){return t(o=>e.request({document:Il,variables:a,requestHeaders:{...r,...o},signal:n}),"searchRepositories","query",a)},myLatestRepositories(a,r,n){return t(o=>e.request({document:gl,variables:a,requestHeaders:{...r,...o},signal:n}),"myLatestRepositories","query",a)},milestonesForRepository(a,r,n){return t(o=>e.request({document:Ml,variables:a,requestHeaders:{...r,...o},signal:n}),"milestonesForRepository","query",a)},commentsForPullRequest(a,r,n){return t(o=>e.request({document:ml,variables:a,requestHeaders:{...r,...o},signal:n}),"commentsForPullRequest","query",a)},dataForRepository(a,r,n){return t(o=>e.request({document:Rl,variables:a,requestHeaders:{...r,...o},signal:n}),"dataForRepository","query",a)},searchRepositoryBranches(a,r,n){return t(o=>e.request({document:Al,variables:a,requestHeaders:{...r,...o},signal:n}),"searchRepositoryBranches","query",a)},repositoryIssues(a,r,n){return t(o=>e.request({document:fl,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryIssues","query",a)},repositoryReleases(a,r,n){return t(o=>e.request({document:Pl,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryReleases","query",a)},addStar(a,r,n){return t(o=>e.request({document:El,variables:a,requestHeaders:{...r,...o},signal:n}),"addStar","mutation",a)},removeStar(a,r,n){return t(o=>e.request({document:Cl,variables:a,requestHeaders:{...r,...o},signal:n}),"removeStar","mutation",a)},myStarredRepositories(a,r,n){return t(o=>e.request({document:hl,variables:a,requestHeaders:{...r,...o},signal:n}),"myStarredRepositories","query",a)},getViewer(a,r,n){return t(o=>e.request({document:Dl,variables:a,requestHeaders:{...r,...o},signal:n}),"getViewer","query",a)},getViewerStats(a,r,n){return t(o=>e.request({document:xl,variables:a,requestHeaders:{...r,...o},signal:n}),"getViewerStats","query",a)},getViewerStatsDetails(a,r,n){return t(o=>e.request({document:_l,variables:a,requestHeaders:{...r,...o},signal:n}),"getViewerStatsDetails","query",a)}}}var fo=require("@raycast/api");var Eo=[{title:"Newest",value:"sort:created-desc"},{title:"Oldest",value:"sort:created-asc"},{title:"Most Commented",value:"sort:comments-desc"},{title:"Least Commented",value:"sort:comments-asc"},{title:"Recently Updated",value:"sort:updated-desc"},{title:"Least Recently Updated",value:"sort:updated-asc"},{title:"Best Match",value:"sort:relevance-desc"},{title:"\u{1F44D}",value:"sort:reactions-+1-desc"},{title:"\u{1F44E}",value:"sort:reactions--1-desc"},{title:"\u{1F604}",value:"sort:reactions-smile-desc"},{title:"\u{1F389}",value:"sort:reactions-tada-desc"},{title:"\u{1F641}",value:"sort:reactions-thinking_face-desc"},{title:"\u2764\uFE0F",value:"sort:reactions-heart-desc"},{title:"\u{1F680}",value:"sort:reactions-rocket-desc"},{title:"\u{1F440}",value:"sort:reactions-eyes-desc"}],Co="sort:updated-desc";var di=B(Rt());var si=require("@octokit/rest"),ui=require("@raycast/api"),pi=B(Rt());var Ua=JSON;var ho=e=>e.toUpperCase(),Do=e=>{let t={};return e.forEach((a,r)=>{t[r]=a}),t};var xo=(e,t,a)=>e.document?e:{document:e,variables:t,requestHeaders:a,signal:void 0},_o=(e,t,a)=>e.query?e:{query:e,variables:t,requestHeaders:a,signal:void 0},Uo=(e,t)=>e.documents?e:{documents:e,requestHeaders:t,signal:void 0};var va=require("graphql"),vo=e=>{let t,a=e.definitions.filter(r=>r.kind==="OperationDefinition");return a.length===1&&(t=a[0]?.name?.value),t},Ye=e=>{if(typeof e=="string"){let a;try{let r=(0,va.parse)(e);a=vo(r)}catch{}return{query:e,operationName:a}}let t=vo(e);return{query:(0,va.print)(e),operationName:t}};var Je=class e extends Error{constructor(t,a){let r=`${e.extractMessage(t)}: ${JSON.stringify({response:t,request:a})}`;super(r),Object.setPrototypeOf(this,e.prototype),this.response=t,this.request=a,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,e)}static extractMessage(t){return t.errors?.[0]?.message??`GraphQL Error (Code: ${t.status})`}};var Fe=B(qt(),1);var Tl="connection_init",wl="connection_ack",wo="ping",Oo="pong",Ol="subscribe",Bl="next",ql="error",Bo="complete",ke=class e{get type(){return this._type}get id(){return this._id}get payload(){return this._payload}constructor(t,a,r){this._type=t,this._payload=a,this._id=r}get text(){let t={type:this.type};return this.id!=null&&this.id!=null&&(t.id=this.id),this.payload!=null&&this.payload!=null&&(t.payload=this.payload),JSON.stringify(t)}static parse(t,a){let{type:r,payload:n,id:o}=JSON.parse(t);return new e(r,a(n),o)}},Ta=class{constructor(t,{onInit:a,onAcknowledged:r,onPing:n,onPong:o}){this.socketState={acknowledged:!1,lastRequestId:0,subscriptions:{}},this.socket=t,t.addEventListener("open",async u=>{this.socketState.acknowledged=!1,this.socketState.subscriptions={},t.send(Nl(a?await a():null).text)}),t.addEventListener("close",u=>{this.socketState.acknowledged=!1,this.socketState.subscriptions={}}),t.addEventListener("error",u=>{console.error(u)}),t.addEventListener("message",u=>{try{let i=Ll(u.data);switch(i.type){case wl:{this.socketState.acknowledged?console.warn("Duplicate CONNECTION_ACK message ignored"):(this.socketState.acknowledged=!0,r&&r(i.payload));return}case wo:{n?n(i.payload).then(y=>t.send(To(y).text)):t.send(To(null).text);return}case Oo:{o&&o(i.payload);return}}if(!this.socketState.acknowledged||i.id===void 0||i.id===null||!this.socketState.subscriptions[i.id])return;let{query:s,variables:p,subscriber:c}=this.socketState.subscriptions[i.id];switch(i.type){case Bl:{!i.payload.errors&&i.payload.data&&c.next&&c.next(i.payload.data),i.payload.errors&&c.error&&c.error(new Je({...i.payload,status:200},{query:s,variables:p}));return}case ql:{c.error&&c.error(new Je({errors:i.payload,status:200},{query:s,variables:p}));return}case Bo:{c.complete&&c.complete(),delete this.socketState.subscriptions[i.id];return}}}catch(i){console.error(i),t.close(1006)}t.close(4400,"Unknown graphql-ws message.")})}makeSubscribe(t,a,r,n){let o=(this.socketState.lastRequestId++).toString();return this.socketState.subscriptions[o]={query:t,variables:n,subscriber:r},this.socket.send(kl(o,{query:t,operationName:a,variables:n}).text),()=>{this.socket.send(Fl(o).text),delete this.socketState.subscriptions[o]}}rawRequest(t,a){return new Promise((r,n)=>{let o;this.rawSubscribe(t,{next:(u,i)=>o={data:u,extensions:i},error:n,complete:()=>r(o)},a)})}request(t,a){return new Promise((r,n)=>{let o;this.subscribe(t,{next:u=>o=u,error:n,complete:()=>r(o)},a)})}subscribe(t,a,r){let{query:n,operationName:o}=Ye(t);return this.makeSubscribe(n,o,a,r)}rawSubscribe(t,a,r){return this.makeSubscribe(t,void 0,a,r)}ping(t){this.socket.send(Vl(t).text)}close(){this.socket.close(1e3)}};Ta.PROTOCOL="graphql-transport-ws";function Ll(e,t=a=>a){return ke.parse(e,t)}function Nl(e){return new ke(Tl,e)}function Vl(e){return new ke(wo,e,void 0)}function To(e){return new ke(Oo,e,void 0)}function kl(e,t){return new ke(Ol,t,e)}function Fl(e){return new ke(Bo,void 0,e)}var ft=e=>{let t={};return e&&(typeof Headers<"u"&&e instanceof Headers||Fe&&Fe.Headers&&e instanceof Fe.Headers?t=Do(e):Array.isArray(e)?e.forEach(([a,r])=>{a&&r!==void 0&&(t[a]=r)}):t=e),t},qo=e=>e.replace(/([\s,]|#[^\n\r]+)+/g," ").trim(),jl=e=>{if(!Array.isArray(e.query)){let r=e,n=[`query=${encodeURIComponent(qo(r.query))}`];return e.variables&&n.push(`variables=${encodeURIComponent(r.jsonSerializer.stringify(r.variables))}`),r.operationName&&n.push(`operationName=${encodeURIComponent(r.operationName)}`),n.join("&")}if(typeof e.variables<"u"&&!Array.isArray(e.variables))throw new Error("Cannot create query with given variable type, array expected");let t=e,a=e.query.reduce((r,n,o)=>(r.push({query:qo(n),variables:t.variables?t.jsonSerializer.stringify(t.variables[o]):void 0}),r),[]);return`query=${encodeURIComponent(t.jsonSerializer.stringify(a))}`},zl=e=>async t=>{let{url:a,query:r,variables:n,operationName:o,fetch:u,fetchOptions:i,middleware:s}=t,p={...t.headers},c="",y;e==="POST"?(y=Hl(r,n,o,i.jsonSerializer),typeof y=="string"&&(p["Content-Type"]="application/json")):c=jl({query:r,variables:n,operationName:o,jsonSerializer:i.jsonSerializer??Ua});let g={method:e,headers:p,body:y,...i},R=a,l=g;if(s){let S=await Promise.resolve(s({...g,url:a,operationName:o,variables:n})),{url:d,...b}=S;R=d,l=b}return c&&(R=`${R}?${c}`),await u(R,l)},wa=class{constructor(t,a={}){this.url=t,this.requestConfig=a,this.rawRequest=async(...r)=>{let[n,o,u]=r,i=_o(n,o,u),{headers:s,fetch:p=Fe.default,method:c="POST",requestMiddleware:y,responseMiddleware:g,...R}=this.requestConfig,{url:l}=this;i.signal!==void 0&&(R.signal=i.signal);let{operationName:S}=Ye(i.query);return Ur({url:l,query:i.query,variables:i.variables,headers:{...ft(vr(s)),...ft(i.requestHeaders)},operationName:S,fetch:p,method:c,fetchOptions:R,middleware:y}).then(d=>(g&&g(d),d)).catch(d=>{throw g&&g(d),d})}}async request(t,...a){let[r,n]=a,o=xo(t,r,n),{headers:u,fetch:i=Fe.default,method:s="POST",requestMiddleware:p,responseMiddleware:c,...y}=this.requestConfig,{url:g}=this;o.signal!==void 0&&(y.signal=o.signal);let{query:R,operationName:l}=Ye(o.document);return Ur({url:g,query:R,variables:o.variables,headers:{...ft(vr(u)),...ft(o.requestHeaders)},operationName:l,fetch:i,method:s,fetchOptions:y,middleware:p}).then(S=>(c&&c(S),S.data)).catch(S=>{throw c&&c(S),S})}batchRequests(t,a){let r=Uo(t,a),{headers:n,...o}=this.requestConfig;r.signal!==void 0&&(o.signal=r.signal);let u=r.documents.map(({document:s})=>Ye(s).query),i=r.documents.map(({variables:s})=>s);return Ur({url:this.url,query:u,variables:i,headers:{...ft(vr(n)),...ft(r.requestHeaders)},operationName:void 0,fetch:this.requestConfig.fetch??Fe.default,method:this.requestConfig.method||"POST",fetchOptions:o,middleware:this.requestConfig.requestMiddleware}).then(s=>(this.requestConfig.responseMiddleware&&this.requestConfig.responseMiddleware(s),s.data)).catch(s=>{throw this.requestConfig.responseMiddleware&&this.requestConfig.responseMiddleware(s),s})}setHeaders(t){return this.requestConfig.headers=t,this}setHeader(t,a){let{headers:r}=this.requestConfig;return r?r[t]=a:this.requestConfig.headers={[t]:a},this}setEndpoint(t){return this.url=t,this}},Ur=async e=>{let{query:t,variables:a,fetchOptions:r}=e,n=zl(ho(e.method??"post")),o=Array.isArray(e.query),u=await n(e),i=await Gl(u,r.jsonSerializer??Ua),s=Array.isArray(i)?!i.some(({data:c})=>!c):!!i.data,p=Array.isArray(i)||!i.errors||Array.isArray(i.errors)&&!i.errors.length||r.errorPolicy==="all"||r.errorPolicy==="ignore";if(u.ok&&p&&s){let{errors:c,...y}=(Array.isArray(i),i),g=r.errorPolicy==="ignore"?y:i;return{...o?{data:g}:g,headers:u.headers,status:u.status}}else{let c=typeof i=="string"?{error:i}:i;throw new Je({...c,status:u.status,headers:u.headers},{query:t,variables:a})}};var Hl=(e,t,a,r)=>{let n=r??Ua;if(!Array.isArray(e))return n.stringify({query:e,variables:t,operationName:a});if(typeof t<"u"&&!Array.isArray(t))throw new Error("Cannot create request body with given variable type, array expected");let o=e.reduce((u,i,s)=>(u.push({query:i,variables:t?t[s]:void 0}),u),[]);return n.stringify(o)},Gl=async(e,t)=>{let a;return e.headers.forEach((r,n)=>{n.toLowerCase()==="content-type"&&(a=r)}),a&&(a.toLowerCase().startsWith("application/json")||a.toLowerCase().startsWith("application/graphql+json")||a.toLowerCase().startsWith("application/graphql-response+json"))?t.parse(await e.text()):e.text()},vr=e=>typeof e=="function"?e():e;var oi=B(require("node:http"),1),ii=B(require("node:https"),1),et=B(require("node:zlib"),1),re=B(require("node:stream"),1),Yt=require("node:buffer");var Ht={};at(Ht,{default:()=>Oa.default});$(Ht,require("data-uri-to-buffer"));var Oa=B(require("data-uri-to-buffer"));var ue=B(require("node:stream"),1),Ue=require("node:util"),te=require("node:buffer");var Gt={};at(Gt,{default:()=>Ba.default});$(Gt,require("fetch-blob"));var Ba=B(require("fetch-blob"));qa();var _e=class extends Error{constructor(t,a){super(t),Error.captureStackTrace(this,this.constructor),this.type=a}get name(){return this.constructor.name}get[Symbol.toStringTag](){return this.constructor.name}};var W=class extends _e{constructor(t,a,r){super(t,a),r&&(this.code=this.errno=r.code,this.erroredSysCall=r.syscall)}};var La=Symbol.toStringTag,Tr=e=>typeof e=="object"&&typeof e.append=="function"&&typeof e.delete=="function"&&typeof e.get=="function"&&typeof e.getAll=="function"&&typeof e.has=="function"&&typeof e.set=="function"&&typeof e.sort=="function"&&e[La]==="URLSearchParams",$t=e=>e&&typeof e=="object"&&typeof e.arrayBuffer=="function"&&typeof e.type=="string"&&typeof e.stream=="function"&&typeof e.constructor=="function"&&/^(Blob|File)$/.test(e[La]),No=e=>typeof e=="object"&&(e[La]==="AbortSignal"||e[La]==="EventTarget"),Vo=(e,t)=>{let a=new URL(t).hostname,r=new URL(e).hostname;return a===r||a.endsWith(`.${r}`)},ko=(e,t)=>{let a=new URL(t).protocol,r=new URL(e).protocol;return a===r};var Xl=(0,Ue.promisify)(ue.default.pipeline),K=Symbol("Body internals"),fe=class{constructor(t,{size:a=0}={}){let r=null;t===null?t=null:Tr(t)?t=te.Buffer.from(t.toString()):$t(t)||te.Buffer.isBuffer(t)||(Ue.types.isAnyArrayBuffer(t)?t=te.Buffer.from(t):ArrayBuffer.isView(t)?t=te.Buffer.from(t.buffer,t.byteOffset,t.byteLength):t instanceof ue.default||(t instanceof Q.FormData?(t=(0,Q.formDataToBlob)(t),r=t.type.split("=")[1]):t=te.Buffer.from(String(t))));let n=t;te.Buffer.isBuffer(t)?n=ue.default.Readable.from(t):$t(t)&&(n=ue.default.Readable.from(t.stream())),this[K]={body:t,stream:n,boundary:r,disturbed:!1,error:null},this.size=a,t instanceof ue.default&&t.on("error",o=>{let u=o instanceof _e?o:new W(`Invalid response body while trying to fetch ${this.url}: ${o.message}`,"system",o);this[K].error=u})}get body(){return this[K].stream}get bodyUsed(){return this[K].disturbed}async arrayBuffer(){let{buffer:t,byteOffset:a,byteLength:r}=await Br(this);return t.slice(a,a+r)}async formData(){let t=this.headers.get("content-type");if(t.startsWith("application/x-www-form-urlencoded")){let r=new Q.FormData,n=new URLSearchParams(await this.text());for(let[o,u]of n)r.append(o,u);return r}let{toFormData:a}=await Promise.resolve().then(()=>(Ho(),zo));return a(this.body,t)}async blob(){let t=this.headers&&this.headers.get("content-type")||this[K].body&&this[K].body.type||"",a=await this.arrayBuffer();return new Ba.default([a],{type:t})}async json(){let t=await this.text();return JSON.parse(t)}async text(){let t=await Br(this);return new TextDecoder().decode(t)}buffer(){return Br(this)}};fe.prototype.buffer=(0,Ue.deprecate)(fe.prototype.buffer,"Please use 'response.arrayBuffer()' instead of 'response.buffer()'","node-fetch#buffer");Object.defineProperties(fe.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0},data:{get:(0,Ue.deprecate)(()=>{},"data doesn't exist, use json(), text(), arrayBuffer(), or body instead","https://github.com/node-fetch/node-fetch/issues/1000 (response)")}});async function Br(e){if(e[K].disturbed)throw new TypeError(`body used already for: ${e.url}`);if(e[K].disturbed=!0,e[K].error)throw e[K].error;let{body:t}=e;if(t===null)return te.Buffer.alloc(0);if(!(t instanceof ue.default))return te.Buffer.alloc(0);let a=[],r=0;try{for await(let n of t){if(e.size>0&&r+n.length>e.size){let o=new W(`content size at ${e.url} over limit: ${e.size}`,"max-size");throw t.destroy(o),o}r+=n.length,a.push(n)}}catch(n){throw n instanceof _e?n:new W(`Invalid response body while trying to fetch ${e.url}: ${n.message}`,"system",n)}if(t.readableEnded===!0||t._readableState.ended===!0)try{return a.every(n=>typeof n=="string")?te.Buffer.from(a.join("")):te.Buffer.concat(a,r)}catch(n){throw new W(`Could not create Buffer from response body for ${e.url}: ${n.message}`,"system",n)}else throw new W(`Premature close of server response while trying to fetch ${e.url}`)}var Pt=(e,t)=>{let a,r,{body:n}=e[K];if(e.bodyUsed)throw new Error("cannot clone body after it is used");return n instanceof ue.default&&typeof n.getBoundary!="function"&&(a=new ue.PassThrough({highWaterMark:t}),r=new ue.PassThrough({highWaterMark:t}),n.pipe(a),n.pipe(r),e[K].stream=a,n=r),n},ec=(0,Ue.deprecate)(e=>e.getBoundary(),"form-data doesn't follow the spec and requires special treatment. Use alternative package","https://github.com/node-fetch/node-fetch/issues/1167"),ka=(e,t)=>e===null?null:typeof e=="string"?"text/plain;charset=UTF-8":Tr(e)?"application/x-www-form-urlencoded;charset=UTF-8":$t(e)?e.type||null:te.Buffer.isBuffer(e)||Ue.types.isAnyArrayBuffer(e)||ArrayBuffer.isView(e)?null:e instanceof Q.FormData?`multipart/form-data; boundary=${t[K].boundary}`:e&&typeof e.getBoundary=="function"?`multipart/form-data;boundary=${ec(e)}`:e instanceof ue.default?null:"text/plain;charset=UTF-8",Go=e=>{let{body:t}=e[K];return t===null?0:$t(t)?t.size:te.Buffer.isBuffer(t)?t.length:t&&typeof t.getLengthSync=="function"&&t.hasKnownLength&&t.hasKnownLength()?t.getLengthSync():null},$o=async(e,{body:t})=>{t===null?e.end():await Xl(t,e)};var qr=require("node:util"),Wt=B(require("node:http"),1),Fa=typeof Wt.default.validateHeaderName=="function"?Wt.default.validateHeaderName:e=>{if(!/^[\^`\-\w!#$%&'*+.|~]+$/.test(e)){let t=new TypeError(`Header name must be a valid HTTP token [${e}]`);throw Object.defineProperty(t,"code",{value:"ERR_INVALID_HTTP_TOKEN"}),t}},Lr=typeof Wt.default.validateHeaderValue=="function"?Wt.default.validateHeaderValue:(e,t)=>{if(/[^\t\u0020-\u007E\u0080-\u00FF]/.test(t)){let a=new TypeError(`Invalid character in header content ["${e}"]`);throw Object.defineProperty(a,"code",{value:"ERR_INVALID_CHAR"}),a}},ae=class e extends URLSearchParams{constructor(t){let a=[];if(t instanceof e){let r=t.raw();for(let[n,o]of Object.entries(r))a.push(...o.map(u=>[n,u]))}else if(t!=null)if(typeof t=="object"&&!qr.types.isBoxedPrimitive(t)){let r=t[Symbol.iterator];if(r==null)a.push(...Object.entries(t));else{if(typeof r!="function")throw new TypeError("Header pairs must be iterable");a=[...t].map(n=>{if(typeof n!="object"||qr.types.isBoxedPrimitive(n))throw new TypeError("Each header pair must be an iterable object");return[...n]}).map(n=>{if(n.length!==2)throw new TypeError("Each header pair must be a name/value tuple");return[...n]})}}else throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");return a=a.length>0?a.map(([r,n])=>(Fa(r),Lr(r,String(n)),[String(r).toLowerCase(),String(n)])):void 0,super(a),new Proxy(this,{get(r,n,o){switch(n){case"append":case"set":return(u,i)=>(Fa(u),Lr(u,String(i)),URLSearchParams.prototype[n].call(r,String(u).toLowerCase(),String(i)));case"delete":case"has":case"getAll":return u=>(Fa(u),URLSearchParams.prototype[n].call(r,String(u).toLowerCase()));case"keys":return()=>(r.sort(),new Set(URLSearchParams.prototype.keys.call(r)).keys());default:return Reflect.get(r,n,o)}}})}get[Symbol.toStringTag](){return this.constructor.name}toString(){return Object.prototype.toString.call(this)}get(t){let a=this.getAll(t);if(a.length===0)return null;let r=a.join(", ");return/^content-encoding$/i.test(t)&&(r=r.toLowerCase()),r}forEach(t,a=void 0){for(let r of this.keys())Reflect.apply(t,a,[this.get(r),r,this])}*values(){for(let t of this.keys())yield this.get(t)}*entries(){for(let t of this.keys())yield[t,this.get(t)]}[Symbol.iterator](){return this.entries()}raw(){return[...this.keys()].reduce((t,a)=>(t[a]=this.getAll(a),t),{})}[Symbol.for("nodejs.util.inspect.custom")](){return[...this.keys()].reduce((t,a)=>{let r=this.getAll(a);return a==="host"?t[a]=r[0]:t[a]=r.length>1?r:r[0],t},{})}};Object.defineProperties(ae.prototype,["get","entries","forEach","values"].reduce((e,t)=>(e[t]={enumerable:!0},e),{}));function Qo(e=[]){return new ae(e.reduce((t,a,r,n)=>(r%2===0&&t.push(n.slice(r,r+2)),t),[]).filter(([t,a])=>{try{return Fa(t),Lr(t,String(a)),!0}catch{return!1}}))}var tc=new Set([301,302,303,307,308]),ja=e=>tc.has(e);var ye=Symbol("Response internals"),pe=class e extends fe{constructor(t=null,a={}){super(t,a);let r=a.status!=null?a.status:200,n=new ae(a.headers);if(t!==null&&!n.has("Content-Type")){let o=ka(t,this);o&&n.append("Content-Type",o)}this[ye]={type:"default",url:a.url,status:r,statusText:a.statusText||"",headers:n,counter:a.counter,highWaterMark:a.highWaterMark}}get type(){return this[ye].type}get url(){return this[ye].url||""}get status(){return this[ye].status}get ok(){return this[ye].status>=200&&this[ye].status<300}get redirected(){return this[ye].counter>0}get statusText(){return this[ye].statusText}get headers(){return this[ye].headers}get highWaterMark(){return this[ye].highWaterMark}clone(){return new e(Pt(this,this.highWaterMark),{type:this.type,url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected,size:this.size,highWaterMark:this.highWaterMark})}static redirect(t,a=302){if(!ja(a))throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');return new e(null,{headers:{location:new URL(t).toString()},status:a})}static error(){let t=new e(null,{status:0,statusText:""});return t[ye].type="error",t}static json(t=void 0,a={}){let r=JSON.stringify(t);if(r===void 0)throw new TypeError("data is not JSON serializable");let n=new ae(a&&a.headers);return n.has("content-type")||n.set("content-type","application/json"),new e(r,{...a,headers:n})}get[Symbol.toStringTag](){return"Response"}};Object.defineProperties(pe.prototype,{type:{enumerable:!0},url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}});var ai=require("node:url"),ri=require("node:util");var Wo=e=>{if(e.search)return e.search;let t=e.href.length-1,a=e.hash||(e.href[t]==="#"?"#":"");return e.href[t-a.length]==="?"?"?":""};var Yo=require("node:net");function Ko(e,t=!1){return e==null||(e=new URL(e),/^(about|blob|data):$/.test(e.protocol))?"no-referrer":(e.username="",e.password="",e.hash="",t&&(e.pathname="",e.search=""),e)}var Jo=new Set(["","no-referrer","no-referrer-when-downgrade","same-origin","origin","strict-origin","origin-when-cross-origin","strict-origin-when-cross-origin","unsafe-url"]),Zo="strict-origin-when-cross-origin";function Xo(e){if(!Jo.has(e))throw new TypeError(`Invalid referrerPolicy: ${e}`);return e}function ac(e){if(/^(http|ws)s:$/.test(e.protocol))return!0;let t=e.host.replace(/(^\[)|(]$)/g,""),a=(0,Yo.isIP)(t);return a===4&&/^127\./.test(t)||a===6&&/^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(t)?!0:e.host==="localhost"||e.host.endsWith(".localhost")?!1:e.protocol==="file:"}function Et(e){return/^about:(blank|srcdoc)$/.test(e)||e.protocol==="data:"||/^(blob|filesystem):$/.test(e.protocol)?!0:ac(e)}function ei(e,{referrerURLCallback:t,referrerOriginCallback:a}={}){if(e.referrer==="no-referrer"||e.referrerPolicy==="")return null;let r=e.referrerPolicy;if(e.referrer==="about:client")return"no-referrer";let n=e.referrer,o=Ko(n),u=Ko(n,!0);o.toString().length>4096&&(o=u),t&&(o=t(o)),a&&(u=a(u));let i=new URL(e.url);switch(r){case"no-referrer":return"no-referrer";case"origin":return u;case"unsafe-url":return o;case"strict-origin":return Et(o)&&!Et(i)?"no-referrer":u.toString();case"strict-origin-when-cross-origin":return o.origin===i.origin?o:Et(o)&&!Et(i)?"no-referrer":u;case"same-origin":return o.origin===i.origin?o:"no-referrer";case"origin-when-cross-origin":return o.origin===i.origin?o:u;case"no-referrer-when-downgrade":return Et(o)&&!Et(i)?"no-referrer":o;default:throw new TypeError(`Invalid referrerPolicy: ${r}`)}}function ti(e){let t=(e.get("referrer-policy")||"").split(/[,\s]+/),a="";for(let r of t)r&&Jo.has(r)&&(a=r);return a}var V=Symbol("Request internals"),Kt=e=>typeof e=="object"&&typeof e[V]=="object",rc=(0,ri.deprecate)(()=>{},".data is not a valid RequestInit property, use .body instead","https://github.com/node-fetch/node-fetch/issues/1000 (request)"),Xe=class e extends fe{constructor(t,a={}){let r;if(Kt(t)?r=new URL(t.url):(r=new URL(t),t={}),r.username!==""||r.password!=="")throw new TypeError(`${r} is an url with embedded credentials.`);let n=a.method||t.method||"GET";if(/^(delete|get|head|options|post|put)$/i.test(n)&&(n=n.toUpperCase()),!Kt(a)&&"data"in a&&rc(),(a.body!=null||Kt(t)&&t.body!==null)&&(n==="GET"||n==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");let o=a.body?a.body:Kt(t)&&t.body!==null?Pt(t):null;super(o,{size:a.size||t.size||0});let u=new ae(a.headers||t.headers||{});if(o!==null&&!u.has("Content-Type")){let p=ka(o,this);p&&u.set("Content-Type",p)}let i=Kt(t)?t.signal:null;if("signal"in a&&(i=a.signal),i!=null&&!No(i))throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");let s=a.referrer==null?t.referrer:a.referrer;if(s==="")s="no-referrer";else if(s){let p=new URL(s);s=/^about:(\/\/)?client$/.test(p)?"client":p}else s=void 0;this[V]={method:n,redirect:a.redirect||t.redirect||"follow",headers:u,parsedURL:r,signal:i,referrer:s},this.follow=a.follow===void 0?t.follow===void 0?20:t.follow:a.follow,this.compress=a.compress===void 0?t.compress===void 0?!0:t.compress:a.compress,this.counter=a.counter||t.counter||0,this.agent=a.agent||t.agent,this.highWaterMark=a.highWaterMark||t.highWaterMark||16384,this.insecureHTTPParser=a.insecureHTTPParser||t.insecureHTTPParser||!1,this.referrerPolicy=a.referrerPolicy||t.referrerPolicy||""}get method(){return this[V].method}get url(){return(0,ai.format)(this[V].parsedURL)}get headers(){return this[V].headers}get redirect(){return this[V].redirect}get signal(){return this[V].signal}get referrer(){if(this[V].referrer==="no-referrer")return"";if(this[V].referrer==="client")return"about:client";if(this[V].referrer)return this[V].referrer.toString()}get referrerPolicy(){return this[V].referrerPolicy}set referrerPolicy(t){this[V].referrerPolicy=Xo(t)}clone(){return new e(this)}get[Symbol.toStringTag](){return"Request"}};Object.defineProperties(Xe.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0},referrer:{enumerable:!0},referrerPolicy:{enumerable:!0}});var ni=e=>{let{parsedURL:t}=e[V],a=new ae(e[V].headers);a.has("Accept")||a.set("Accept","*/*");let r=null;if(e.body===null&&/^(post|put)$/i.test(e.method)&&(r="0"),e.body!==null){let i=Go(e);typeof i=="number"&&!Number.isNaN(i)&&(r=String(i))}r&&a.set("Content-Length",r),e.referrerPolicy===""&&(e.referrerPolicy=Zo),e.referrer&&e.referrer!=="no-referrer"?e[V].referrer=ei(e):e[V].referrer="no-referrer",e[V].referrer instanceof URL&&a.set("Referer",e.referrer),a.has("User-Agent")||a.set("User-Agent","node-fetch"),e.compress&&!a.has("Accept-Encoding")&&a.set("Accept-Encoding","gzip, deflate, br");let{agent:n}=e;typeof n=="function"&&(n=n(t));let o=Wo(t),u={path:t.pathname+o,method:e.method,headers:a[Symbol.for("nodejs.util.inspect.custom")](),insecureHTTPParser:e.insecureHTTPParser,agent:n};return{parsedURL:t,options:u}};var za=class extends _e{constructor(t,a="aborted"){super(t,a)}};qa();wr();var nc=new Set(["data:","http:","https:"]);async function Ha(e,t){return new Promise((a,r)=>{let n=new Xe(e,t),{parsedURL:o,options:u}=ni(n);if(!nc.has(o.protocol))throw new TypeError(`node-fetch cannot load ${e}. URL scheme "${o.protocol.replace(/:$/,"")}" is not supported.`);if(o.protocol==="data:"){let l=(0,Oa.default)(n.url),S=new pe(l,{headers:{"Content-Type":l.typeFull}});a(S);return}let i=(o.protocol==="https:"?ii.default:oi.default).request,{signal:s}=n,p=null,c=()=>{let l=new za("The operation was aborted.");r(l),n.body&&n.body instanceof re.default.Readable&&n.body.destroy(l),!(!p||!p.body)&&p.body.emit("error",l)};if(s&&s.aborted){c();return}let y=()=>{c(),R()},g=i(o.toString(),u);s&&s.addEventListener("abort",y);let R=()=>{g.abort(),s&&s.removeEventListener("abort",y)};g.on("error",l=>{r(new W(`request to ${n.url} failed, reason: ${l.message}`,"system",l)),R()}),oc(g,l=>{p&&p.body&&p.body.destroy(l)}),process.version<"v14"&&g.on("socket",l=>{let S;l.prependListener("end",()=>{S=l._eventsCount}),l.prependListener("close",d=>{if(p&&S<l._eventsCount&&!d){let b=new Error("Premature close");b.code="ERR_STREAM_PREMATURE_CLOSE",p.body.emit("error",b)}})}),g.on("response",l=>{g.setTimeout(0);let S=Qo(l.rawHeaders);if(ja(l.statusCode)){let M=S.get("Location"),P=null;try{P=M===null?null:new URL(M,n.url)}catch{if(n.redirect!=="manual"){r(new W(`uri requested responds with an invalid redirect URL: ${M}`,"invalid-redirect")),R();return}}switch(n.redirect){case"error":r(new W(`uri requested responds with a redirect, redirect mode is set to error: ${n.url}`,"no-redirect")),R();return;case"manual":break;case"follow":{if(P===null)break;if(n.counter>=n.follow){r(new W(`maximum redirect reached at: ${n.url}`,"max-redirect")),R();return}let f={headers:new ae(n.headers),follow:n.follow,counter:n.counter+1,agent:n.agent,compress:n.compress,method:n.method,body:Pt(n),signal:n.signal,size:n.size,referrer:n.referrer,referrerPolicy:n.referrerPolicy};if(!Vo(n.url,P)||!ko(n.url,P))for(let v of["authorization","www-authenticate","cookie","cookie2"])f.headers.delete(v);if(l.statusCode!==303&&n.body&&t.body instanceof re.default.Readable){r(new W("Cannot follow redirect with body being a readable stream","unsupported-redirect")),R();return}(l.statusCode===303||(l.statusCode===301||l.statusCode===302)&&n.method==="POST")&&(f.method="GET",f.body=void 0,f.headers.delete("content-length"));let D=ti(S);D&&(f.referrerPolicy=D),a(Ha(new Xe(P,f))),R();return}default:return r(new TypeError(`Redirect option '${n.redirect}' is not a valid value of RequestRedirect`))}}s&&l.once("end",()=>{s.removeEventListener("abort",y)});let d=(0,re.pipeline)(l,new re.PassThrough,M=>{M&&r(M)});process.version<"v12.10"&&l.on("aborted",y);let b={url:n.url,status:l.statusCode,statusText:l.statusMessage,headers:S,size:n.size,counter:n.counter,highWaterMark:n.highWaterMark},I=S.get("Content-Encoding");if(!n.compress||n.method==="HEAD"||I===null||l.statusCode===204||l.statusCode===304){p=new pe(d,b),a(p);return}let A={flush:et.default.Z_SYNC_FLUSH,finishFlush:et.default.Z_SYNC_FLUSH};if(I==="gzip"||I==="x-gzip"){d=(0,re.pipeline)(d,et.default.createGunzip(A),M=>{M&&r(M)}),p=new pe(d,b),a(p);return}if(I==="deflate"||I==="x-deflate"){let M=(0,re.pipeline)(l,new re.PassThrough,P=>{P&&r(P)});M.once("data",P=>{(P[0]&15)===8?d=(0,re.pipeline)(d,et.default.createInflate(),f=>{f&&r(f)}):d=(0,re.pipeline)(d,et.default.createInflateRaw(),f=>{f&&r(f)}),p=new pe(d,b),a(p)}),M.once("end",()=>{p||(p=new pe(d,b),a(p))});return}if(I==="br"){d=(0,re.pipeline)(d,et.default.createBrotliDecompress(),M=>{M&&r(M)}),p=new pe(d,b),a(p);return}p=new pe(d,b),a(p)}),$o(g,n).catch(r)})}function oc(e,t){let a=Yt.Buffer.from(`0\r
\r
`),r=!1,n=!1,o;e.on("response",u=>{let{headers:i}=u;r=i["transfer-encoding"]==="chunked"&&!i["content-length"]}),e.on("socket",u=>{let i=()=>{if(r&&!n){let p=new Error("Premature close");p.code="ERR_STREAM_PREMATURE_CLOSE",t(p)}},s=p=>{n=Yt.Buffer.compare(p.slice(-5),a)===0,!n&&o&&(n=Yt.Buffer.compare(o.slice(-3),a.slice(0,3))===0&&Yt.Buffer.compare(p.slice(-2),a.slice(3))===0),o=p};u.prependListener("close",i),u.on("data",s),e.on("close",()=>{u.removeListener("close",i),u.removeListener("data",s)})})}var Nr=null,Vr=null,li=null,ic=(0,ui.getPreferenceValues)();function sc({token:e,type:t}){let a=t==="personal"?`token ${e}`:`bearer ${e}`;li=e,Nr=Ao(new wa("https://api.github.com/graphql",{headers:{authorization:a}})),Vr=new si.Octokit({auth:e,request:{fetch:Ha}})}var ci=pi.OAuthService.github({personalAccessToken:ic.personalAccessToken,scope:"notifications repo project read:org read:user read:packages",onAuthorize:sc});function yi(){if(!Nr||!Vr)throw new Error("GitHub clients not initialized");return{github:Nr,octokit:Vr,token:li}}var Si=(0,di.withAccessToken)(ci);var mi=require("@raycast/api"),Ri=B(Rt()),$a=require("date-fns"),Ai=require("lodash");function bi(e,t,{suffix:a="s",withNumber:r=!1}={}){let n=`${t}${e!==1?a:""}`;return r?`${e} ${n}`:n}var Ga=require("node:child_process");var gi=require("node:util"),Y=require("@raycast/api"),uc=B(Rt());var $d=[{title:"github.dev",baseUrl:"https://github.dev/",icon:{source:"github-dev.svg",tintColor:Y.Color.PrimaryText},shortcut:Y.Keyboard.Shortcut.Common.Open},{title:"VS Code for the Web",baseUrl:"https://vscode.dev/github/",icon:{source:"vscode.svg",tintColor:Y.Color.PrimaryText},shortcut:{macOS:{modifiers:["cmd"],key:"v"},Windows:{modifiers:["ctrl"],key:"v"}}},{title:"CodeSandbox",baseUrl:"https://codesandbox.io/s/github/",icon:{source:"codesandbox.svg",tintColor:Y.Color.PrimaryText}},{title:"Replit",baseUrl:"https://repl.it/github/",icon:{source:"replit.svg",tintColor:Y.Color.PrimaryText}},{title:"Gitpod",baseUrl:"https://gitpod.io/#https://github.com/",icon:{source:"gitpod.svg",tintColor:Y.Color.PrimaryText}},{title:"Glitch",baseUrl:"https://glitch.com/edit/#!/import/github/",icon:{source:"glitch.svg",tintColor:Y.Color.PrimaryText}},{title:"Sourcegraph",baseUrl:"https://sourcegraph.com/github.com/",icon:{source:"sourcegraph.svg",tintColor:Y.Color.PrimaryText},shortcut:{macOS:{modifiers:["cmd"],key:"s"},Windows:{modifiers:["ctrl"],key:"s"}}},{title:"DeepWiki",baseUrl:"https://deepwiki.com/",icon:{source:"deepwiki.png"},shortcut:{macOS:{modifiers:["cmd"],key:"d"},Windows:{modifiers:["ctrl"],key:"d"}}},{title:"VS Code Remote Repositories",baseUrl:"vscode://GitHub.remotehub/open?url=https://github.com/",icon:{source:"vscode.svg",tintColor:Y.Color.PrimaryText}}];var pc=[{title:"Relevance",value:""},{title:"Last Update",value:"sort:updated-desc"},{title:"Name",value:"sort:name-asc"},{title:"Stars",value:"sort:stars-desc"},{title:"Forks",value:"sort:forks-desc"}],lc=[{title:"Last Pushed",value:"pushed_at:desc"},{title:"Name",value:"name:asc"},{title:"Stars",value:"stargazers:desc"}],cc=[{title:"Recently Starred",value:"starred_at:desc"},{title:"Oldest Starred",value:"starred_at:asc"}],Qd=pc[0].value,Wd=lc[0].value,Kd=cc[0].value;var Yd=(0,gi.promisify)(Ga.execFile);var Jt="\x1B",Ii="\x07",Jd=new RegExp(`${Jt}][^${Ii}${Jt}]*(?:${Ii}|${Jt}\\\\)`,"g"),Zd=new RegExp(`${Jt}\\[[0-9;?]*[A-Za-z]`,"g"),Xd=new RegExp(`${Jt}\\([0-9A-Za-z]`,"g");function Mi(e,t,a){if(a)return`repo:${a}`;let r=t.filter(Boolean);return e==="all"?"":e==="exclude"?r.map(n=>`-repo:${n}`).join(" "):r.map(n=>`repo:${n}`).join(" ")}function fi({repository:e,sortQuery:t,includeMentioned:a,includeAssigned:r,includeRecentlyClosed:n,includeReviewRequests:o,includeReviewed:u,includeDrafts:i,filterMode:s,repositoryList:p}){let{github:c}=yi(),{data:y,...g}=(0,Ri.useCachedPromise)(async(E,T,w,C,O,ve,tt,Qa,Ci,hi)=>{let Ct=`updated:>${(0,$a.format)((0,$a.subDays)(Date.now(),14),"yyyy-MM-dd")}`,ht=Qa?"":"draft:false",Di=Mi(Ci,hi,E),{includeTeamReviewRequests:xi}=(0,mi.getPreferenceValues)(),Fr=xi?"review-requested":"user-review-requested";return(await Promise.all([`is:pr author:@me archived:false is:open ${ht}`,...O?[`is:pr author:@me archived:false is:closed ${Ct}`]:[],...w?[`is:pr assignee:@me archived:false is:open ${ht}`]:[],...w&&O?[`is:pr assignee:@me archived:false is:closed ${Ct}`]:[],...C?[`is:pr mentions:@me archived:false is:open ${ht}`]:[],...C&&O?[`is:pr mentions:@me archived:false is:closed ${Ct}`]:[],...ve?[`is:pr ${Fr}:@me archived:false is:open ${ht}`]:[],...ve&&O?[`is:pr ${Fr}:@me archived:false is:closed ${Ct}`]:[],...tt?[`is:pr reviewed-by:@me archived:false is:open ${ht}`]:[],...tt&&O?[`is:pr reviewed-by:@me archived:false is:closed ${Ct}`]:[]].map(Wa=>c.searchPullRequests({query:`${Wa} ${T} ${Di}`,numberOfItems:20})))).map(Wa=>Wa.search.edges?.map(Ka=>Ka?.node).filter(Ka=>Ka!=null))},[e,t,r,a,n,o,u,i,s,p]),R,l,S,d,b,I,A,M,P,f;if(y){let E=0;R=y[E++],n&&(l=y[E++]),r&&(S=y[E++],n&&(d=y[E++])),a&&(b=y[E++],n&&(I=y[E++])),o&&(A=y[E++],n&&(M=y[E++])),u&&(P=y[E++],n&&(f=y[E++]))}let D=(0,Ai.uniqBy)([...l||[],...d||[],...I||[],...M||[],...f||[]],"id"),v=[];function J(E){let T=E?.filter(w=>!v.includes(w.id));return v.push(...T?.map(w=>w.id)??[]),T}return{data:[{type:"Open",pullRequests:R},{type:"Assigned",pullRequests:S},{type:"Mentioned",pullRequests:b},{type:"Review Requests",pullRequests:A},{type:"Reviewed",pullRequests:P},{type:"Recently Closed",pullRequests:D}].filter(E=>E.pullRequests&&E.pullRequests.length>0).map(E=>{let T=J(E.pullRequests),w=bi(T?.length??0,"pull request",{withNumber:!0});return{...E,subtitle:w,pullRequests:T}}),...g}}var de=require("react/jsx-runtime");async function Pi(){return(0,k.launchCommand)({name:"my-pull-requests",type:k.LaunchType.UserInitiated})}function yc(){return co({name:"maxitems"})}function dc(e){if(e.merged)return"pull-request-merged.svg";if(e.closed)return"pull-request-closed.svg";if(e.isDraft)return"pull-request-draft.svg";if(e.isInMergeQueue)return"pull-request-merge-queue.svg";switch(e.commits.nodes?e.commits.nodes[0]?.commit.statusCheckRollup?.state:null){case"SUCCESS":return k.Icon.Check;case"ERROR":case"FAILURE":return k.Icon.Xmark;case"PENDING":return k.Icon.Clock;default:return"pull-request-open.svg"}}function Sc(){let e=(0,k.getPreferenceValues)(),{showtext:t,includeAssigned:a,includeMentioned:r,includeReviewed:n,includeReviewRequests:o,includeRecentlyClosed:u,includeDrafts:i,useUnreadIndicator:s,repositoryFilterMode:p,repositoryList:c}=e,y=(0,kr.useMemo)(()=>c?c.split(",").map(I=>I.trim()).filter(I=>I.length>0):[],[c]),[g,R]=(0,Ei.useCachedState)("sort-query",Co,{cacheNamespace:"github-my-pr-menu"}),{data:l,isLoading:S}=fi({repository:null,sortQuery:g,includeAssigned:a,includeMentioned:r,includeRecentlyClosed:u,includeReviewRequests:o,includeReviewed:n,includeDrafts:i,filterMode:p,repositoryList:y}),d=(0,kr.useMemo)(()=>!l||p==="all"||y.length===0?l:l.map(I=>{let A=I.pullRequests?.filter(M=>{if(!M)return!1;let P=M.repository.nameWithOwner,f=y.some(D=>D.toLowerCase()===P.toLowerCase());return p==="include"?f:!f});return{...I,pullRequests:A}}),[l,y,p]),b=d?.reduce((I,A)=>I+(A.pullRequests??[]).length,0);return(0,de.jsxs)(po,{title:t?`${b}`:void 0,icon:{source:`pull-request-open${s&&b>0?"-unread":""}.svg`,tintColor:k.Color.PrimaryText},isLoading:S,children:[d?.map(I=>(0,de.jsx)(xr,{title:I.type,maxChildren:yc(),moreElement:A=>(0,de.jsx)(At,{title:`... ${A} more`,onAction:()=>Pi()}),emptyElement:(0,de.jsx)(At,{title:"No Pull Requests"}),children:I.pullRequests?.map(A=>A?(0,de.jsx)(At,{title:`#${A.number} ${A.title}`,icon:{source:dc(A),tintColor:k.Color.PrimaryText},tooltip:A.repository.nameWithOwner,onAction:()=>(0,k.open)(A.permalink)},A.id):null)},I.type)),(0,de.jsxs)(xr,{children:[(0,de.jsx)(At,{title:"Open My Pull Requests",icon:k.Icon.AppWindowList,shortcut:k.Keyboard.Shortcut.Common.Open,onAction:()=>Pi()}),(0,de.jsx)(So,{sortQuery:g,setSortQuery:R,data:Eo}),(0,de.jsx)(lo,{})]})]})}var bc=Si(Sc);
