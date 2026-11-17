"use strict";var Ri=Object.create;var Jt=Object.defineProperty;var Ai=Object.getOwnPropertyDescriptor;var fi=Object.getOwnPropertyNames;var Pi=Object.getPrototypeOf,Ei=Object.prototype.hasOwnProperty;var $a=(e,t,a)=>()=>{if(a)throw a[0];try{return e&&(t=e(e=0)),t}catch(r){throw a=[r],r}};var C=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(a){throw t=0,a}},at=(e,t)=>{for(var a in t)Jt(e,a,{get:t[a],enumerable:!0})},Yt=(e,t,a,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of fi(t))!Ei.call(e,n)&&n!==a&&Jt(e,n,{get:()=>t[n],enumerable:!(r=Ai(t,n))||r.enumerable});return e},H=(e,t,a)=>(Yt(e,t,"default"),a&&Yt(a,t,"default")),T=(e,t,a)=>(a=e!=null?Ri(Pi(e)):{},Yt(t||!e||!e.__esModule?Jt(a,"default",{value:e,enumerable:!0}):a,e)),Ci=e=>Yt(Jt({},"__esModule",{value:!0}),e);var Lr=C(Zt=>{"use strict";Object.defineProperty(Zt,"__esModule",{value:!0});Zt.useDeepMemo=void 0;var Qa=require("react"),hi=require("dequal/lite");function Di(e){let t=(0,Qa.useRef)(e),a=(0,Qa.useRef)(0);return(0,hi.dequal)(e,t.current)||(t.current=e,a.current+=1),(0,Qa.useMemo)(()=>t.current,[a.current])}Zt.useDeepMemo=Di});var Ee=C(Xt=>{"use strict";Object.defineProperty(Xt,"__esModule",{value:!0});Xt.useLatest=void 0;var xi=require("react");function _i(e){let t=(0,xi.useRef)(e);return t.current=e,t}Xt.useLatest=_i});var Ct=C(Se=>{"use strict";var Ui=Se&&Se.__createBinding||(Object.create?(function(e,t,a,r){r===void 0&&(r=a);var n=Object.getOwnPropertyDescriptor(t,a);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,n)}):(function(e,t,a,r){r===void 0&&(r=a),e[r]=t[a]})),vi=Se&&Se.__setModuleDefault||(Object.create?(function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}):function(e,t){e.default=t}),Nr=Se&&Se.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var a in e)a!=="default"&&Object.prototype.hasOwnProperty.call(e,a)&&Ui(t,e,a);return vi(t,e),t};Object.defineProperty(Se,"__esModule",{value:!0});Se.showFailureToast=void 0;var Ti=Nr(require("fs")),wi=Nr(require("path")),rt=require("@raycast/api");function Oi(e,t){let a=e instanceof Error?e.message:String(e);return(0,rt.showToast)({style:rt.Toast.Style.Failure,title:t?.title??"Something went wrong",message:t?.message??a,primaryAction:t?.primaryAction??qr(e),secondaryAction:t?.primaryAction?qr(e):void 0})}Se.showFailureToast=Oi;var qr=e=>{let t=!0,a="[Extension Name]...",r="";try{let u=JSON.parse(Ti.readFileSync(wi.join(rt.environment.assetsPath,"..","package.json"),"utf8"));a=`[${u.title}]...`,r=`https://raycast.com/${u.owner||u.author}/${u.name}`,(!u.owner||u.access==="public")&&(t=!1)}catch{}let n=rt.environment.isDevelopment||t,o=e instanceof Error?e?.stack||e?.message||"":String(e);return{title:n?"Copy Logs":"Report Error",onAction(u){u.hide(),n?rt.Clipboard.copy(o):(0,rt.open)(`https://github.com/raycast/extensions/issues/new?&labels=extension%2Cbug&template=extension_bug_report.yml&title=${encodeURIComponent(a)}&extension-url=${encodeURI(r)}&description=${encodeURIComponent(`#### Error:
\`\`\`
${o}
\`\`\`
`)}`)}}}});var nt=C(ea=>{"use strict";Object.defineProperty(ea,"__esModule",{value:!0});ea.usePromise=void 0;var Y=require("react"),ht=require("@raycast/api"),Bi=Lr(),we=Ee(),Li=Ct();function qi(e,t,a){let r=(0,Y.useRef)(0),[n,o]=(0,Y.useState)({isLoading:!0}),u=(0,we.useLatest)(e),i=(0,we.useLatest)(a?.abortable),s=(0,we.useLatest)(t||[]),p=(0,we.useLatest)(a?.onError),c=(0,we.useLatest)(a?.onData),y=(0,we.useLatest)(a?.onWillExecute),b=(0,we.useLatest)(a?.failureToastOptions),M=(0,we.useLatest)(n.data),l=(0,Y.useRef)(),S=(0,Y.useRef)({page:0}),d=(0,Y.useRef)(!1),I=(0,Y.useRef)(!0),A=(0,Y.useRef)(50),R=(0,Y.useCallback)((...q)=>{let v=++r.current;i.current&&(i.current.current?.abort(),i.current.current=new AbortController),y.current?.(q),o(E=>({...E,isLoading:!0}));let ae=Ni(u.current)(...q);function re(E){return E.name=="AbortError"||v===r.current&&(p.current?p.current(E):ht.environment.launchType!==ht.LaunchType.Background&&(0,Li.showFailureToast)(E,{title:"Failed to fetch latest data",primaryAction:{title:"Retry",onAction(z){z.hide(),l.current?.(...s.current||[])}},...b.current}),o({error:E,isLoading:!1})),E}return typeof ae=="function"?(d.current=!0,ae(S.current).then(({data:E,hasMore:z,cursor:Pe})=>(v===r.current&&(S.current&&(S.current.cursor=Pe,S.current.lastItem=E?.[E.length-1]),c.current&&c.current(E,S.current),z&&(A.current=E.length),I.current=z,o(Ga=>S.current.page===0?{data:E,isLoading:!1}:{data:(Ga.data||[])?.concat(E),isLoading:!1})),E),E=>(I.current=!1,re(E)))):(d.current=!1,ae.then(E=>(v===r.current&&(c.current&&c.current(E),o({data:E,isLoading:!1})),E),re))},[i,c,p,s,u,o,l,y,S,b]);l.current=R;let g=(0,Y.useCallback)(()=>{S.current={page:0};let q=s.current||[];return R(...q)},[R,s]),P=(0,Y.useCallback)(async(q,v)=>{let ae;try{if(v?.optimisticUpdate){typeof v?.rollbackOnError!="function"&&v?.rollbackOnError!==!1&&(ae=structuredClone(M.current?.value));let re=v.optimisticUpdate;o(E=>({...E,data:re(E.data)}))}return await q}catch(re){if(typeof v?.rollbackOnError=="function"){let E=v.rollbackOnError;o(z=>({...z,data:E(z.data)}))}else v?.optimisticUpdate&&v?.rollbackOnError!==!1&&o(E=>({...E,data:ae}));throw re}finally{v?.shouldRevalidateAfter!==!1&&(ht.environment.launchType===ht.LaunchType.Background||ht.environment.commandMode==="menu-bar"?await g():g())}},[g,M,o]),f=(0,Y.useCallback)(()=>{S.current.page+=1;let q=s.current||[];R(...q)},[S,s,R]);(0,Y.useEffect)(()=>{S.current={page:0},a?.execute!==!1?R(...t||[]):i.current&&i.current.current?.abort()},[(0,Bi.useDeepMemo)([t,a?.execute,R]),i,S]),(0,Y.useEffect)(()=>()=>{i.current&&i.current.current?.abort()},[i]);let D=a?.execute!==!1?n.isLoading:!1,U={...n,isLoading:D},K=d.current?{pageSize:A.current,hasMore:I.current,onLoadMore:f}:void 0;return{...U,revalidate:g,mutate:P,pagination:K}}ea.usePromise=qi;function Ni(e){return e===Promise.all||e===Promise.race||e===Promise.resolve||e===Promise.reject?e.bind(Promise):e}});var Oe=C(be=>{"use strict";var Vi=be&&be.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(be,"__esModule",{value:!0});be.hash=be.reviver=be.replacer=void 0;var ki=Vi(require("object-hash"));function Fi(e,t){let a=this[e];return a instanceof Date?`__raycast_cached_date__${a.toString()}`:Buffer.isBuffer(a)?`__raycast_cached_buffer__${a.toString("base64")}`:t}be.replacer=Fi;function ji(e,t){return typeof t=="string"&&t.startsWith("__raycast_cached_date__")?new Date(t.replace("__raycast_cached_date__","")):typeof t=="string"&&t.startsWith("__raycast_cached_buffer__")?Buffer.from(t.replace("__raycast_cached_buffer__",""),"base64"):t}be.reviver=ji;function zi(e,t){return(0,ki.default)(e,{replacer:a=>a instanceof URLSearchParams?a.toString():a,...t})}be.hash=zi});var aa=C(ta=>{"use strict";Object.defineProperty(ta,"__esModule",{value:!0});ta.useCachedState=void 0;var Wa=require("react"),Hi=require("@raycast/api"),Ka=Ee(),Vr=Oe(),Gi=Symbol("cache without namespace"),kr=new Map;function $i(e,t,a){let r=a?.cacheNamespace||Gi,n=kr.get(r)||kr.set(r,new Hi.Cache({namespace:a?.cacheNamespace})).get(r);if(!n)throw new Error("Missing cache");let o=(0,Ka.useLatest)(e),u=(0,Ka.useLatest)(t),i=(0,Wa.useSyncExternalStore)(n.subscribe,()=>{try{return n.get(o.current)}catch(y){console.error("Could not get Cache data:",y);return}}),s=(0,Wa.useMemo)(()=>{if(typeof i<"u"){if(i==="undefined")return;try{return JSON.parse(i,Vr.reviver)}catch(y){return console.warn("The cached data is corrupted",y),u.current}}else return u.current},[i,u]),p=(0,Ka.useLatest)(s),c=(0,Wa.useCallback)(y=>{let b=typeof y=="function"?y(p.current):y;if(typeof b>"u")n.set(o.current,"undefined");else{let M=JSON.stringify(b,Vr.replacer);n.set(o.current,M)}return b},[n,o,p]);return[s,c]}ta.useCachedState=$i});var xt=C(ra=>{"use strict";Object.defineProperty(ra,"__esModule",{value:!0});ra.useCachedPromise=void 0;var Dt=require("react"),Qi=aa(),Wi=nt(),Ki=Ee(),Fr=Oe(),ot=Symbol();function Yi(e,t,a){let{initialData:r,keepPreviousData:n,internal_cacheKeySuffix:o,...u}=a||{},i=(0,Dt.useRef)(),[s,p]=(0,Qi.useCachedState)((0,Fr.hash)(t||[])+o,ot,{cacheNamespace:(0,Fr.hash)(e)}),c=(0,Dt.useRef)(s!==ot?s:r),y=(0,Dt.useRef)(void 0),{mutate:b,revalidate:M,...l}=(0,Wi.usePromise)(e,t||[],{...u,onData(R,g){y.current=g,u.onData&&u.onData(R,g),!(g&&g.page>0)&&(i.current="promise",c.current=R,p(R))}}),S,d=l.pagination;y.current&&y.current.page>0&&l.data?S=l.data:i.current==="promise"?S=c.current:n&&s!==ot?(S=s,d&&(d.hasMore=!0,d.pageSize=s.length)):n&&s===ot?S=c.current:s!==ot?(S=s,d&&(d.hasMore=!0,d.pageSize=s.length)):S=r;let I=(0,Ki.useLatest)(S),A=(0,Dt.useCallback)(async(R,g)=>{let P;try{if(g?.optimisticUpdate){typeof g?.rollbackOnError!="function"&&g?.rollbackOnError!==!1&&(P=structuredClone(I.current));let f=g.optimisticUpdate(I.current);i.current="cache",c.current=f,p(f)}return await b(R,{shouldRevalidateAfter:g?.shouldRevalidateAfter})}catch(f){if(typeof g?.rollbackOnError=="function"){let D=g.rollbackOnError(I.current);i.current="cache",c.current=D,p(D)}else g?.optimisticUpdate&&g?.rollbackOnError!==!1&&(i.current="cache",c.current=P,p(P));throw f}},[p,b,I,c,i]);return(0,Dt.useEffect)(()=>{s!==ot&&(i.current="cache",c.current=s)},[s]),{data:S,isLoading:l.isLoading,error:l.error,mutate:y.current&&y.current.page>0?b:A,pagination:d,revalidate:M}}ra.useCachedPromise=Yi});var Xr=C((ce,Zr)=>{"use strict";Object.defineProperty(ce,"__esModule",{value:!0});function pt(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var le=pt(require("stream")),Gr=pt(require("http")),oa=pt(require("url")),$r=pt(require("whatwg-url")),Ji=pt(require("https")),He=pt(require("zlib")),Zi=le.Readable,Ce=Symbol("buffer"),Ya=Symbol("type"),Ut=class e{constructor(){this[Ya]="";let t=arguments[0],a=arguments[1],r=[],n=0;if(t){let u=t,i=Number(u.length);for(let s=0;s<i;s++){let p=u[s],c;p instanceof Buffer?c=p:ArrayBuffer.isView(p)?c=Buffer.from(p.buffer,p.byteOffset,p.byteLength):p instanceof ArrayBuffer?c=Buffer.from(p):p instanceof e?c=p[Ce]:c=Buffer.from(typeof p=="string"?p:String(p)),n+=c.length,r.push(c)}}this[Ce]=Buffer.concat(r);let o=a&&a.type!==void 0&&String(a.type).toLowerCase();o&&!/[^\u0020-\u007E]/.test(o)&&(this[Ya]=o)}get size(){return this[Ce].length}get type(){return this[Ya]}text(){return Promise.resolve(this[Ce].toString())}arrayBuffer(){let t=this[Ce],a=t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength);return Promise.resolve(a)}stream(){let t=new Zi;return t._read=function(){},t.push(this[Ce]),t.push(null),t}toString(){return"[object Blob]"}slice(){let t=this.size,a=arguments[0],r=arguments[1],n,o;a===void 0?n=0:a<0?n=Math.max(t+a,0):n=Math.min(a,t),r===void 0?o=t:r<0?o=Math.max(t+r,0):o=Math.min(r,t);let u=Math.max(o-n,0),s=this[Ce].slice(n,n+u),p=new e([],{type:arguments[2]});return p[Ce]=s,p}};Object.defineProperties(Ut.prototype,{size:{enumerable:!0},type:{enumerable:!0},slice:{enumerable:!0}});Object.defineProperty(Ut.prototype,Symbol.toStringTag,{value:"Blob",writable:!1,enumerable:!1,configurable:!0});function N(e,t,a){Error.call(this,e),this.message=e,this.type=t,a&&(this.code=this.errno=a.code),Error.captureStackTrace(this,this.constructor)}N.prototype=Object.create(Error.prototype);N.prototype.constructor=N;N.prototype.name="FetchError";var er;try{er=require("encoding").convert}catch{}var De=Symbol("Body internals"),jr=le.PassThrough;function w(e){var t=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.size;let n=r===void 0?0:r;var o=a.timeout;let u=o===void 0?0:o;e==null?e=null:Qr(e)?e=Buffer.from(e.toString()):Tt(e)||Buffer.isBuffer(e)||(Object.prototype.toString.call(e)==="[object ArrayBuffer]"?e=Buffer.from(e):ArrayBuffer.isView(e)?e=Buffer.from(e.buffer,e.byteOffset,e.byteLength):e instanceof le||(e=Buffer.from(String(e)))),this[De]={body:e,disturbed:!1,error:null},this.size=n,this.timeout=u,e instanceof le&&e.on("error",function(i){let s=i.name==="AbortError"?i:new N(`Invalid response body while trying to fetch ${t.url}: ${i.message}`,"system",i);t[De].error=s})}w.prototype={get body(){return this[De].body},get bodyUsed(){return this[De].disturbed},arrayBuffer(){return it.call(this).then(function(e){return e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength)})},blob(){let e=this.headers&&this.headers.get("content-type")||"";return it.call(this).then(function(t){return Object.assign(new Ut([],{type:e.toLowerCase()}),{[Ce]:t})})},json(){var e=this;return it.call(this).then(function(t){try{return JSON.parse(t.toString())}catch(a){return w.Promise.reject(new N(`invalid json response body at ${e.url} reason: ${a.message}`,"invalid-json"))}})},text(){return it.call(this).then(function(e){return e.toString()})},buffer(){return it.call(this)},textConverted(){var e=this;return it.call(this).then(function(t){return Xi(t,e.headers)})}};Object.defineProperties(w.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0}});w.mixIn=function(e){for(let t of Object.getOwnPropertyNames(w.prototype))if(!(t in e)){let a=Object.getOwnPropertyDescriptor(w.prototype,t);Object.defineProperty(e,t,a)}};function it(){var e=this;if(this[De].disturbed)return w.Promise.reject(new TypeError(`body used already for: ${this.url}`));if(this[De].disturbed=!0,this[De].error)return w.Promise.reject(this[De].error);let t=this.body;if(t===null)return w.Promise.resolve(Buffer.alloc(0));if(Tt(t)&&(t=t.stream()),Buffer.isBuffer(t))return w.Promise.resolve(t);if(!(t instanceof le))return w.Promise.resolve(Buffer.alloc(0));let a=[],r=0,n=!1;return new w.Promise(function(o,u){let i;e.timeout&&(i=setTimeout(function(){n=!0,u(new N(`Response timeout while trying to fetch ${e.url} (over ${e.timeout}ms)`,"body-timeout"))},e.timeout)),t.on("error",function(s){s.name==="AbortError"?(n=!0,u(s)):u(new N(`Invalid response body while trying to fetch ${e.url}: ${s.message}`,"system",s))}),t.on("data",function(s){if(!(n||s===null)){if(e.size&&r+s.length>e.size){n=!0,u(new N(`content size at ${e.url} over limit: ${e.size}`,"max-size"));return}r+=s.length,a.push(s)}}),t.on("end",function(){if(!n){clearTimeout(i);try{o(Buffer.concat(a,r))}catch(s){u(new N(`Could not create Buffer from response body for ${e.url}: ${s.message}`,"system",s))}}})})}function Xi(e,t){if(typeof er!="function")throw new Error("The package `encoding` must be installed to use the textConverted() function");let a=t.get("content-type"),r="utf-8",n,o;return a&&(n=/charset=([^;]*)/i.exec(a)),o=e.slice(0,1024).toString(),!n&&o&&(n=/<meta.+?charset=(['"])(.+?)\1/i.exec(o)),!n&&o&&(n=/<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(o),n||(n=/<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(o),n&&n.pop()),n&&(n=/charset=(.*)/i.exec(n.pop()))),!n&&o&&(n=/<\?xml.+?encoding=(['"])(.+?)\1/i.exec(o)),n&&(r=n.pop(),(r==="gb2312"||r==="gbk")&&(r="gb18030")),er(e,"UTF-8",r).toString()}function Qr(e){return typeof e!="object"||typeof e.append!="function"||typeof e.delete!="function"||typeof e.get!="function"||typeof e.getAll!="function"||typeof e.has!="function"||typeof e.set!="function"?!1:e.constructor.name==="URLSearchParams"||Object.prototype.toString.call(e)==="[object URLSearchParams]"||typeof e.sort=="function"}function Tt(e){return typeof e=="object"&&typeof e.arrayBuffer=="function"&&typeof e.type=="string"&&typeof e.stream=="function"&&typeof e.constructor=="function"&&typeof e.constructor.name=="string"&&/^(Blob|File)$/.test(e.constructor.name)&&/^(Blob|File)$/.test(e[Symbol.toStringTag])}function Wr(e){let t,a,r=e.body;if(e.bodyUsed)throw new Error("cannot clone body after it is used");return r instanceof le&&typeof r.getBoundary!="function"&&(t=new jr,a=new jr,r.pipe(t),r.pipe(a),e[De].body=t,r=a),r}function Kr(e){return e===null?null:typeof e=="string"?"text/plain;charset=UTF-8":Qr(e)?"application/x-www-form-urlencoded;charset=UTF-8":Tt(e)?e.type||null:Buffer.isBuffer(e)||Object.prototype.toString.call(e)==="[object ArrayBuffer]"||ArrayBuffer.isView(e)?null:typeof e.getBoundary=="function"?`multipart/form-data;boundary=${e.getBoundary()}`:e instanceof le?null:"text/plain;charset=UTF-8"}function Yr(e){let t=e.body;return t===null?0:Tt(t)?t.size:Buffer.isBuffer(t)?t.length:t&&typeof t.getLengthSync=="function"&&(t._lengthRetrievers&&t._lengthRetrievers.length==0||t.hasKnownLength&&t.hasKnownLength())?t.getLengthSync():null}function es(e,t){let a=t.body;a===null?e.end():Tt(a)?a.stream().pipe(e):Buffer.isBuffer(a)?(e.write(a),e.end()):a.pipe(e)}w.Promise=global.Promise;var Jr=/[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/,tr=/[^\t\x20-\x7e\x80-\xff]/;function _t(e){if(e=`${e}`,Jr.test(e)||e==="")throw new TypeError(`${e} is not a legal HTTP header name`)}function zr(e){if(e=`${e}`,tr.test(e))throw new TypeError(`${e} is not a legal HTTP header value`)}function st(e,t){t=t.toLowerCase();for(let a in e)if(a.toLowerCase()===t)return a}var _=Symbol("map"),oe=class e{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:void 0;if(this[_]=Object.create(null),t instanceof e){let a=t.raw(),r=Object.keys(a);for(let n of r)for(let o of a[n])this.append(n,o);return}if(t!=null)if(typeof t=="object"){let a=t[Symbol.iterator];if(a!=null){if(typeof a!="function")throw new TypeError("Header pairs must be iterable");let r=[];for(let n of t){if(typeof n!="object"||typeof n[Symbol.iterator]!="function")throw new TypeError("Each header pair must be iterable");r.push(Array.from(n))}for(let n of r){if(n.length!==2)throw new TypeError("Each header pair must be a name/value tuple");this.append(n[0],n[1])}}else for(let r of Object.keys(t)){let n=t[r];this.append(r,n)}}else throw new TypeError("Provided initializer must be an object")}get(t){t=`${t}`,_t(t);let a=st(this[_],t);return a===void 0?null:this[_][a].join(", ")}forEach(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:void 0,r=ar(this),n=0;for(;n<r.length;){var o=r[n];let u=o[0],i=o[1];t.call(a,i,u,this),r=ar(this),n++}}set(t,a){t=`${t}`,a=`${a}`,_t(t),zr(a);let r=st(this[_],t);this[_][r!==void 0?r:t]=[a]}append(t,a){t=`${t}`,a=`${a}`,_t(t),zr(a);let r=st(this[_],t);r!==void 0?this[_][r].push(a):this[_][t]=[a]}has(t){return t=`${t}`,_t(t),st(this[_],t)!==void 0}delete(t){t=`${t}`,_t(t);let a=st(this[_],t);a!==void 0&&delete this[_][a]}raw(){return this[_]}keys(){return Ja(this,"key")}values(){return Ja(this,"value")}[Symbol.iterator](){return Ja(this,"key+value")}};oe.prototype.entries=oe.prototype[Symbol.iterator];Object.defineProperty(oe.prototype,Symbol.toStringTag,{value:"Headers",writable:!1,enumerable:!1,configurable:!0});Object.defineProperties(oe.prototype,{get:{enumerable:!0},forEach:{enumerable:!0},set:{enumerable:!0},append:{enumerable:!0},has:{enumerable:!0},delete:{enumerable:!0},keys:{enumerable:!0},values:{enumerable:!0},entries:{enumerable:!0}});function ar(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"key+value";return Object.keys(e[_]).sort().map(t==="key"?function(r){return r.toLowerCase()}:t==="value"?function(r){return e[_][r].join(", ")}:function(r){return[r.toLowerCase(),e[_][r].join(", ")]})}var rr=Symbol("internal");function Ja(e,t){let a=Object.create(nr);return a[rr]={target:e,kind:t,index:0},a}var nr=Object.setPrototypeOf({next(){if(!this||Object.getPrototypeOf(this)!==nr)throw new TypeError("Value of `this` is not a HeadersIterator");var e=this[rr];let t=e.target,a=e.kind,r=e.index,n=ar(t,a),o=n.length;return r>=o?{value:void 0,done:!0}:(this[rr].index=r+1,{value:n[r],done:!1})}},Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));Object.defineProperty(nr,Symbol.toStringTag,{value:"HeadersIterator",writable:!1,enumerable:!1,configurable:!0});function ts(e){let t=Object.assign({__proto__:null},e[_]),a=st(e[_],"Host");return a!==void 0&&(t[a]=t[a][0]),t}function as(e){let t=new oe;for(let a of Object.keys(e))if(!Jr.test(a))if(Array.isArray(e[a]))for(let r of e[a])tr.test(r)||(t[_][a]===void 0?t[_][a]=[r]:t[_][a].push(r));else tr.test(e[a])||(t[_][a]=[e[a]]);return t}var Be=Symbol("Response internals"),rs=Gr.STATUS_CODES,ne=class e{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};w.call(this,t,a);let r=a.status||200,n=new oe(a.headers);if(t!=null&&!n.has("Content-Type")){let o=Kr(t);o&&n.append("Content-Type",o)}this[Be]={url:a.url,status:r,statusText:a.statusText||rs[r],headers:n,counter:a.counter}}get url(){return this[Be].url||""}get status(){return this[Be].status}get ok(){return this[Be].status>=200&&this[Be].status<300}get redirected(){return this[Be].counter>0}get statusText(){return this[Be].statusText}get headers(){return this[Be].headers}clone(){return new e(Wr(this),{url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected})}};w.mixIn(ne.prototype);Object.defineProperties(ne.prototype,{url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}});Object.defineProperty(ne.prototype,Symbol.toStringTag,{value:"Response",writable:!1,enumerable:!1,configurable:!0});var he=Symbol("Request internals"),ns=oa.URL||$r.URL,os=oa.parse,is=oa.format;function Za(e){return/^[a-zA-Z][a-zA-Z\d+\-.]*:/.exec(e)&&(e=new ns(e).toString()),os(e)}var ss="destroy"in le.Readable.prototype;function na(e){return typeof e=="object"&&typeof e[he]=="object"}function us(e){let t=e&&typeof e=="object"&&Object.getPrototypeOf(e);return!!(t&&t.constructor.name==="AbortSignal")}var qe=class e{constructor(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r;na(t)?r=Za(t.url):(t&&t.href?r=Za(t.href):r=Za(`${t}`),t={});let n=a.method||t.method||"GET";if(n=n.toUpperCase(),(a.body!=null||na(t)&&t.body!==null)&&(n==="GET"||n==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");let o=a.body!=null?a.body:na(t)&&t.body!==null?Wr(t):null;w.call(this,o,{timeout:a.timeout||t.timeout||0,size:a.size||t.size||0});let u=new oe(a.headers||t.headers||{});if(o!=null&&!u.has("Content-Type")){let s=Kr(o);s&&u.append("Content-Type",s)}let i=na(t)?t.signal:null;if("signal"in a&&(i=a.signal),i!=null&&!us(i))throw new TypeError("Expected signal to be an instanceof AbortSignal");this[he]={method:n,redirect:a.redirect||t.redirect||"follow",headers:u,parsedURL:r,signal:i},this.follow=a.follow!==void 0?a.follow:t.follow!==void 0?t.follow:20,this.compress=a.compress!==void 0?a.compress:t.compress!==void 0?t.compress:!0,this.counter=a.counter||t.counter||0,this.agent=a.agent||t.agent}get method(){return this[he].method}get url(){return is(this[he].parsedURL)}get headers(){return this[he].headers}get redirect(){return this[he].redirect}get signal(){return this[he].signal}clone(){return new e(this)}};w.mixIn(qe.prototype);Object.defineProperty(qe.prototype,Symbol.toStringTag,{value:"Request",writable:!1,enumerable:!1,configurable:!0});Object.defineProperties(qe.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0}});function ps(e){let t=e[he].parsedURL,a=new oe(e[he].headers);if(a.has("Accept")||a.set("Accept","*/*"),!t.protocol||!t.hostname)throw new TypeError("Only absolute URLs are supported");if(!/^https?:$/.test(t.protocol))throw new TypeError("Only HTTP(S) protocols are supported");if(e.signal&&e.body instanceof le.Readable&&!ss)throw new Error("Cancellation of streamed requests with AbortSignal is not supported in node < 8");let r=null;if(e.body==null&&/^(POST|PUT)$/i.test(e.method)&&(r="0"),e.body!=null){let o=Yr(e);typeof o=="number"&&(r=String(o))}r&&a.set("Content-Length",r),a.has("User-Agent")||a.set("User-Agent","node-fetch/1.0 (+https://github.com/bitinn/node-fetch)"),e.compress&&!a.has("Accept-Encoding")&&a.set("Accept-Encoding","gzip,deflate");let n=e.agent;return typeof n=="function"&&(n=n(t)),Object.assign({},t,{method:e.method,headers:ts(a),agent:n})}function ut(e){Error.call(this,e),this.type="aborted",this.message=e,Error.captureStackTrace(this,this.constructor)}ut.prototype=Object.create(Error.prototype);ut.prototype.constructor=ut;ut.prototype.name="AbortError";var vt=oa.URL||$r.URL,Hr=le.PassThrough,ls=function(t,a){let r=new vt(a).hostname,n=new vt(t).hostname;return r===n||r[r.length-n.length-1]==="."&&r.endsWith(n)},cs=function(t,a){let r=new vt(a).protocol,n=new vt(t).protocol;return r===n};function Le(e,t){if(!Le.Promise)throw new Error("native promise missing, set fetch.Promise to your favorite alternative");return w.Promise=Le.Promise,new Le.Promise(function(a,r){let n=new qe(e,t),o=ps(n),u=(o.protocol==="https:"?Ji:Gr).request,i=n.signal,s=null,p=function(){let S=new ut("The user aborted a request.");r(S),n.body&&n.body instanceof le.Readable&&Xa(n.body,S),!(!s||!s.body)&&s.body.emit("error",S)};if(i&&i.aborted){p();return}let c=function(){p(),M()},y=u(o),b;i&&i.addEventListener("abort",c);function M(){y.abort(),i&&i.removeEventListener("abort",c),clearTimeout(b)}n.timeout&&y.once("socket",function(l){b=setTimeout(function(){r(new N(`network timeout at: ${n.url}`,"request-timeout")),M()},n.timeout)}),y.on("error",function(l){r(new N(`request to ${n.url} failed, reason: ${l.message}`,"system",l)),s&&s.body&&Xa(s.body,l),M()}),ys(y,function(l){i&&i.aborted||s&&s.body&&Xa(s.body,l)}),parseInt(process.version.substring(1))<14&&y.on("socket",function(l){l.addListener("close",function(S){let d=l.listenerCount("data")>0;if(s&&d&&!S&&!(i&&i.aborted)){let I=new Error("Premature close");I.code="ERR_STREAM_PREMATURE_CLOSE",s.body.emit("error",I)}})}),y.on("response",function(l){clearTimeout(b);let S=as(l.headers);if(Le.isRedirect(l.statusCode)){let g=S.get("Location"),P=null;try{P=g===null?null:new vt(g,n.url).toString()}catch{if(n.redirect!=="manual"){r(new N(`uri requested responds with an invalid redirect URL: ${g}`,"invalid-redirect")),M();return}}switch(n.redirect){case"error":r(new N(`uri requested responds with a redirect, redirect mode is set to error: ${n.url}`,"no-redirect")),M();return;case"manual":if(P!==null)try{S.set("Location",P)}catch(D){r(D)}break;case"follow":if(P===null)break;if(n.counter>=n.follow){r(new N(`maximum redirect reached at: ${n.url}`,"max-redirect")),M();return}let f={headers:new oe(n.headers),follow:n.follow,counter:n.counter+1,agent:n.agent,compress:n.compress,method:n.method,body:n.body,signal:n.signal,timeout:n.timeout,size:n.size};if(!ls(n.url,P)||!cs(n.url,P))for(let D of["authorization","www-authenticate","cookie","cookie2"])f.headers.delete(D);if(l.statusCode!==303&&n.body&&Yr(n)===null){r(new N("Cannot follow redirect with body being a readable stream","unsupported-redirect")),M();return}(l.statusCode===303||(l.statusCode===301||l.statusCode===302)&&n.method==="POST")&&(f.method="GET",f.body=void 0,f.headers.delete("content-length")),a(Le(new qe(P,f))),M();return}}l.once("end",function(){i&&i.removeEventListener("abort",c)});let d=l.pipe(new Hr),I={url:n.url,status:l.statusCode,statusText:l.statusMessage,headers:S,size:n.size,timeout:n.timeout,counter:n.counter},A=S.get("Content-Encoding");if(!n.compress||n.method==="HEAD"||A===null||l.statusCode===204||l.statusCode===304){s=new ne(d,I),a(s);return}let R={flush:He.Z_SYNC_FLUSH,finishFlush:He.Z_SYNC_FLUSH};if(A=="gzip"||A=="x-gzip"){d=d.pipe(He.createGunzip(R)),s=new ne(d,I),a(s);return}if(A=="deflate"||A=="x-deflate"){let g=l.pipe(new Hr);g.once("data",function(P){(P[0]&15)===8?d=d.pipe(He.createInflate()):d=d.pipe(He.createInflateRaw()),s=new ne(d,I),a(s)}),g.on("end",function(){s||(s=new ne(d,I),a(s))});return}if(A=="br"&&typeof He.createBrotliDecompress=="function"){d=d.pipe(He.createBrotliDecompress()),s=new ne(d,I),a(s);return}s=new ne(d,I),a(s)}),es(y,n)})}function ys(e,t){let a;e.on("socket",function(r){a=r}),e.on("response",function(r){let n=r.headers;n["transfer-encoding"]==="chunked"&&!n["content-length"]&&r.once("close",function(o){if(a&&a.listenerCount("data")>0&&!o){let i=new Error("Premature close");i.code="ERR_STREAM_PREMATURE_CLOSE",t(i)}})})}function Xa(e,t){e.destroy?e.destroy(t):(e.emit("error",t),e.end())}Le.isRedirect=function(e){return e===301||e===302||e===303||e===307||e===308};Le.Promise=global.Promise;Zr.exports=ce=Le;Object.defineProperty(ce,"__esModule",{value:!0});ce.default=ce;ce.Headers=oe;ce.Request=qe;ce.Response=ne;ce.FetchError=N;ce.AbortError=ut});var Ot=C((Ge,en)=>{var wt=Xr(),ds=wt.default||wt,ia=function(e,t){return/^\/\//.test(e)&&(e="https:"+e),ds.call(this,e,t)};ia.ponyfill=!0;en.exports=Ge=ia;Ge.fetch=ia;Ge.Headers=wt.Headers;Ge.Request=wt.Request;Ge.Response=wt.Response;Ge.default=ia});var or=C(sa=>{"use strict";Object.defineProperty(sa,"__esModule",{value:!0});sa.isJSON=void 0;function Ss(e){if(e){let t=Is(e);if(!t)return!1;if(t.subtype==="json"||t.suffix==="json"||t.suffix&&/\bjson\b/i.test(t.suffix)||t.subtype&&/\bjson\b/i.test(t.subtype))return!0}return!1}sa.isJSON=Ss;var bs=/^([A-Za-z0-9][A-Za-z0-9!#$&^_-]{0,126})\/([A-Za-z0-9][A-Za-z0-9!#$&^_.+-]{0,126});?$/;function Is(e){let t=e.indexOf(";"),a=t!==-1?e.slice(0,t).trim():e.trim(),r=bs.exec(a.toLowerCase().toLowerCase());if(!r)return;let n=r[1],o=r[2],u,i=o.lastIndexOf("+");return i!==-1&&(u=o.substring(i+1),o=o.substring(0,i)),{type:n,subtype:o,suffix:u}}});var nn=C(ua=>{"use strict";Object.defineProperty(ua,"__esModule",{value:!0});ua.useFetch=void 0;var lt=require("react"),gs=xt(),tn=Ee(),an=Ot(),Ms=or(),rn=Oe();async function ms(e){if(!e.ok)throw new Error(e.statusText);let t=e.headers.get("content-type");return t&&(0,Ms.isJSON)(t)?await e.json():await e.text()}function Rs(e){return{data:e,hasMore:!1}}function As(e,t){let{parseResponse:a,mapResult:r,initialData:n,execute:o,keepPreviousData:u,onError:i,onData:s,onWillExecute:p,failureToastOptions:c,...y}=t||{},b={initialData:n,execute:o,keepPreviousData:u,onError:i,onData:s,onWillExecute:p,failureToastOptions:c},M=(0,tn.useLatest)(a||ms),l=(0,tn.useLatest)(r||Rs),S=(0,lt.useRef)(),d=(0,lt.useRef)(),I=typeof e=="function"?e({page:0}):void 0;(!S.current||typeof d.current>"u"||d.current!==I)&&(S.current=e),d.current=I;let A=(0,lt.useRef)(),R=(0,lt.useCallback)((f,D)=>async U=>{let K=await(0,an.fetch)(f(U),{signal:A.current?.signal,...D}),q=await M.current(K);return l.current?.(q)},[M,l]),g=(0,lt.useCallback)(async(f,D)=>{let U=await(0,an.fetch)(f,{signal:A.current?.signal,...D}),K=await M.current(U);return l.current(K)?.data},[M,l]),P=(0,lt.useMemo)(()=>d.current?R:g,[d,g,R]);return(0,gs.useCachedPromise)(P,[S.current,y],{...b,internal_cacheKeySuffix:d.current+(0,rn.hash)(l.current)+(0,rn.hash)(M.current),abortable:A})}ua.useFetch=As});var pa=C(ie=>{"use strict";var fs=ie&&ie.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ie,"__esModule",{value:!0});ie.defaultParsing=ie.handleOutput=ie.getSpawnedResult=ie.getSpawnedPromise=void 0;var Ps=require("node:buffer"),un=fs(require("node:stream")),Es=require("node:util"),Cs=require("signal-exit");function hs(e,{timeout:t}={}){let a=new Promise((i,s)=>{e.on("exit",(p,c)=>{i({exitCode:p,signal:c,timedOut:!1})}),e.on("error",p=>{s(p)}),e.stdin&&e.stdin.on("error",p=>{s(p)})});if(t===0||t===void 0)return a;let r,n=new Promise((i,s)=>{r=setTimeout(()=>{e.kill("SIGTERM"),s(Object.assign(new Error("Timed out"),{timedOut:!0,signal:"SIGTERM"}))},t)}),o=a.finally(()=>{clearTimeout(r)}),u=(0,Cs.onExit)(()=>{e.kill()});return Promise.race([n,o]).finally(()=>u())}ie.getSpawnedPromise=hs;var ir=class extends Error{constructor(){super("The output is too big"),this.name="MaxBufferError"}},Ds=(0,Es.promisify)(un.default.pipeline);function xs(e){let{encoding:t}=e,a=t==="buffer",r=new un.default.PassThrough({objectMode:!1});t&&t!=="buffer"&&r.setEncoding(t);let n=0,o=[];return r.on("data",u=>{o.push(u),n+=u.length}),r.getBufferedValue=()=>a?Buffer.concat(o,n):o.join(""),r.getBufferedLength=()=>n,r}async function on(e,t){let a=xs(t);return await new Promise((r,n)=>{let o=u=>{u&&a.getBufferedLength()<=Ps.constants.MAX_LENGTH&&(u.bufferedData=a.getBufferedValue()),n(u)};(async()=>{try{await Ds(e,a),r()}catch(u){o(u)}})(),a.on("data",()=>{a.getBufferedLength()>1e3*1e3*80&&o(new ir)})}),a.getBufferedValue()}async function sn(e,t){e.destroy();try{return await t}catch(a){return a.bufferedData}}async function _s({stdout:e,stderr:t},{encoding:a},r){let n=on(e,{encoding:a}),o=on(t,{encoding:a});try{return await Promise.all([r,n,o])}catch(u){return Promise.all([{error:u,exitCode:null,signal:u.signal,timedOut:u.timedOut||!1},sn(e,n),sn(t,o)])}}ie.getSpawnedResult=_s;function Us(e){let t=typeof e=="string"?`
`:10,a=typeof e=="string"?"\r":13;return e[e.length-1]===t&&(e=e.slice(0,-1)),e[e.length-1]===a&&(e=e.slice(0,-1)),e}function vs(e,t){return e.stripFinalNewline?Us(t):t}ie.handleOutput=vs;var Ts=({timedOut:e,timeout:t,signal:a,exitCode:r})=>e?`timed out after ${t} milliseconds`:a!=null?`was killed with ${a}`:r!=null?`failed with exit code ${r}`:"failed",ws=({stdout:e,stderr:t,error:a,signal:r,exitCode:n,command:o,timedOut:u,options:i,parentError:s})=>{let c=`Command ${Ts({timedOut:u,timeout:i?.timeout,signal:r,exitCode:n})}: ${o}`,y=a?`${c}
${a.message}`:c,b=[y,t,e].filter(Boolean).join(`
`);return a?a.originalMessage=a.message:a=s,a.message=b,a.shortMessage=y,a.command=o,a.exitCode=n,a.signal=r,a.stdout=e,a.stderr=t,"bufferedData"in a&&delete a.bufferedData,a};function Os({stdout:e,stderr:t,error:a,exitCode:r,signal:n,timedOut:o,command:u,options:i,parentError:s}){if(a||r!==0||n!==null)throw ws({error:a,exitCode:r,signal:n,stdout:e,stderr:t,command:u,timedOut:o,options:i,parentError:s});return e}ie.defaultParsing=Os});var ln=C(ct=>{"use strict";var Bs=ct&&ct.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ct,"__esModule",{value:!0});ct.useExec=void 0;var Ls=Bs(require("node:child_process")),pn=require("react"),qs=xt(),Ns=Ee(),Bt=pa(),Vs=/ +/g;function ks(e,t){if(t)return[e,...t];let a=[];for(let r of e.trim().split(Vs)){let n=a[a.length-1];n&&n.endsWith("\\")?a[a.length-1]=`${n.slice(0,-1)} ${r}`:a.push(r)}return a}function Fs(e,t,a){let{parseOutput:r,input:n,onData:o,onWillExecute:u,initialData:i,execute:s,keepPreviousData:p,onError:c,failureToastOptions:y,...b}=Array.isArray(t)?a||{}:t||{},M={initialData:i,execute:s,keepPreviousData:p,onError:c,onData:o,onWillExecute:u,failureToastOptions:y},l=(0,pn.useRef)(),S=(0,Ns.useLatest)(r||Bt.defaultParsing),d=(0,pn.useCallback)(async(I,A,R,g)=>{let[P,...f]=ks(I,A),D=[P,...f].join(" "),U={stripFinalNewline:!0,...R,timeout:R?.timeout||1e4,signal:l.current?.signal,encoding:R?.encoding===null?"buffer":R?.encoding||"utf8",env:{PATH:"/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin",...process.env,...R?.env}},K=Ls.default.spawn(P,f,U),q=(0,Bt.getSpawnedPromise)(K,U);g&&K.stdin.end(g);let[{error:v,exitCode:ae,signal:re,timedOut:E},z,Pe]=await(0,Bt.getSpawnedResult)(K,U,q),Ga=(0,Bt.handleOutput)(U,z),mi=(0,Bt.handleOutput)(U,Pe);return S.current({stdout:Ga,stderr:mi,error:v,exitCode:ae,signal:re,timedOut:E,command:D,options:U,parentError:new Error})},[S]);return(0,qs.useCachedPromise)(d,[e,Array.isArray(t)?t:[],b,n],{...M,abortable:l})}ct.useExec=Fs});var Sn=C(yt=>{"use strict";var ca=yt&&yt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(yt,"__esModule",{value:!0});yt.useStreamJSON=void 0;var js=require("@raycast/api"),cn=ca(Ot()),Nt=require("node:fs"),sr=require("node:fs/promises"),la=require("node:path"),yn=require("node:stream/promises"),Lt=require("react"),zs=ca(require("stream-chain")),Hs=require("stream-json"),Gs=ca(require("stream-json/filters/Pick")),$s=ca(require("stream-json/streamers/StreamArray")),dn=or(),Qs=xt(),Ws=Oe();async function qt(e,t,a){if(typeof e=="object"||e.startsWith("http://")||e.startsWith("https://"))return await Ks(e,t,a);if(e.startsWith("file://"))return await Ys((0,la.normalize)(decodeURIComponent(new URL(e).pathname)),t,a?.signal?a.signal:void 0);throw new Error("Only HTTP(S) or file URLs are supported")}async function Ks(e,t,a){let r=await(0,cn.default)(e,a);if(!r.ok)throw new Error("Failed to fetch URL");if(!(0,dn.isJSON)(r.headers.get("content-type")))throw new Error("URL does not return JSON");if(!r.body)throw new Error("Failed to retrieve expected JSON content: Response body is missing or inaccessible.");await(0,yn.pipeline)(r.body,(0,Nt.createWriteStream)(t),a?.signal?{signal:a.signal}:void 0)}async function Ys(e,t,a){await(0,yn.pipeline)((0,Nt.createReadStream)(e),(0,Nt.createWriteStream)(t),a?{signal:a}:void 0)}async function Js(e,t,a,r,n){let o=(0,la.join)(t,a);try{await(0,sr.stat)(t)}catch{(0,Nt.mkdirSync)(t,{recursive:!0}),await qt(e,o,n);return}if(r){await qt(e,o,n);return}let u;try{u=await(0,sr.stat)(o)}catch{await qt(e,o,n);return}if(typeof e=="object"||e.startsWith("http://")||e.startsWith("https://")){let i=await(0,cn.default)(e,{...n,method:"HEAD"});if(!i.ok)throw new Error("Could not fetch URL");if(!(0,dn.isJSON)(i.headers.get("content-type")))throw new Error("URL does not return JSON");let s=Date.parse(i.headers.get("last-modified")??"");if(u.size===0||Number.isNaN(s)||s>u.mtimeMs){await qt(e,o,n);return}}else if(e.startsWith("file://"))try{(await(0,sr.stat)((0,la.normalize)(decodeURIComponent(new URL(e).pathname)))).mtimeMs>u.mtimeMs&&await qt(e,o,n)}catch{throw new Error("Source file could not be read")}else throw new Error("Only HTTP(S) or file URLs are supported")}async function*Zs(e,t,a,r,n,o){let u=[],i=new zs.default([(0,Nt.createReadStream)(e),r?Gs.default.withParser({filter:r}):(0,Hs.parser)(),new $s.default,s=>o?.(s.value)??s.value]);a?.addEventListener("abort",()=>{i.destroy()});try{for await(let s of i){if(a?.aborted)return[];(!n||n(s))&&u.push(s),u.length>=t&&(yield u,u=[])}}catch(s){throw i.destroy(),s}return u.length>0&&(yield u),[]}function Xs(e,t){let{initialData:a,execute:r,keepPreviousData:n,onError:o,onData:u,onWillExecute:i,failureToastOptions:s,dataPath:p,filter:c,transform:y,pageSize:b=20,...M}=t??{},l=(0,Lt.useRef)(),S=(0,Lt.useRef)(),d={initialData:a,execute:r,keepPreviousData:n,onError:o,onData:u,onWillExecute:i,failureToastOptions:s},I=(0,Lt.useRef)(null),A=(0,Lt.useRef)(null),R=(0,Lt.useRef)(!1);return(0,Qs.useCachedPromise)((g,P,f,D,U,K)=>async({page:q})=>{let v=(0,Ws.hash)(g)+".json",ae=js.environment.supportPath;if(q===0){A.current?.abort(),A.current=new AbortController;let z=(0,la.join)(ae,v),Pe=!!(l.current&&l.current!==g&&S.current&&S.current===z);l.current=g,S.current=z,await Js(g,ae,v,Pe,{...f,signal:A.current?.signal}),I.current=Zs(z,P,A.current?.signal,D,U,K)}if(!I.current)return{hasMore:R.current,data:[]};let{value:re,done:E}=await I.current.next();return R.current=!E,{hasMore:R.current,data:re??[]}},[e,b,M,p,c,y],d)}yt.useStreamJSON=Xs});var pr=C(Ie=>{"use strict";var ur=Ie&&Ie.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Ie,"__esModule",{value:!0});Ie.baseExecuteSQL=Ie.isPermissionError=Ie.PermissionError=void 0;var eu=require("node:fs"),ya=require("node:fs/promises"),tu=ur(require("node:os")),bn=ur(require("node:child_process")),In=ur(require("node:path")),da=pa(),au=Oe(),ba=class extends Error{constructor(t){super(t),this.name="PermissionError"}};Ie.PermissionError=ba;function ru(e){return e instanceof Error&&e.name==="PermissionError"}Ie.isPermissionError=ru;async function nu(e,t,a){if(!(0,eu.existsSync)(e))throw new Error("The database does not exist");let r=a?.signal,n,o=bn.default.spawn("sqlite3",["--json","--readonly",e,t],{signal:r}),u=(0,da.getSpawnedPromise)(o),[{error:i,exitCode:s,signal:p},c,y]=await(0,da.getSpawnedResult)(o,{encoding:"utf-8"},u);if(Sa(r),y.match("(5)")||y.match("(14)")){if(!n){let b=In.default.join(tu.default.tmpdir(),"useSQL",(0,au.hash)(e));await(0,ya.mkdir)(b,{recursive:!0}),Sa(r),n=In.default.join(b,"db.db"),await(0,ya.copyFile)(e,n),await(0,ya.writeFile)(n+"-shm",""),await(0,ya.writeFile)(n+"-wal",""),Sa(r)}o=bn.default.spawn("sqlite3",["--json","--readonly","--vfs","unix-none",n,t],{signal:r}),u=(0,da.getSpawnedPromise)(o),[{error:i,exitCode:s,signal:p},c,y]=await(0,da.getSpawnedResult)(o,{encoding:"utf-8"},u),Sa(r)}if(i||s!==0||p!==null)throw y.includes("authorization denied")?new ba("You do not have permission to access the database."):new Error(y||"Unknown error");return JSON.parse(c.trim()||"[]")}Ie.baseExecuteSQL=nu;function Sa(e){if(e?.aborted){let t=new Error("aborted");throw t.name="AbortError",t}}});var Mn=C(dt=>{"use strict";var ou=dt&&dt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(dt,"__esModule",{value:!0});dt.useSQL=void 0;var ge=require("react/jsx-runtime"),k=require("@raycast/api"),iu=require("node:fs"),su=ou(require("node:os")),Ia=require("react"),uu=nt(),pu=Ee(),lu=Ct(),lr=pr();function cu(e,t,a){let{permissionPriming:r,...n}=a||{},[o,u]=(0,Ia.useState)(),i=(0,pu.useLatest)(a||{}),s=(0,Ia.useRef)(),p=(0,Ia.useCallback)(y=>{console.error(y);let b=y instanceof Error&&y.message.includes("authorization denied")?new lr.PermissionError("You do not have permission to access the database."):y;(0,lr.isPermissionError)(b)?u((0,ge.jsx)(yu,{priming:i.current.permissionPriming})):i.current.onError?i.current.onError(b):k.environment.launchType!==k.LaunchType.Background&&(0,lu.showFailureToast)(b,{title:"Cannot query the data"})},[i]),c=(0,Ia.useMemo)(()=>{if(!(0,iu.existsSync)(e))throw new Error("The database does not exist");return async(y,b)=>{let M=s.current?.signal;return(0,lr.baseExecuteSQL)(y,b,{signal:M})}},[e]);return{...(0,uu.usePromise)(c,[e,t],{...n,onError:p}),permissionView:o}}dt.useSQL=cu;var gn=parseInt(su.default.release().split(".")[0])>=22,cr=gn?"Settings":"Preferences";function yu(e){let t=gn?{title:"Open System Settings -> Privacy",target:"x-apple.systempreferences:com.apple.preference.security?Privacy_AllFiles"}:{title:"Open System Preferences -> Security",target:"x-apple.systempreferences:com.apple.preference.security?Privacy_AllFiles"};return k.environment.commandMode==="menu-bar"?(0,ge.jsxs)(k.MenuBarExtra,{icon:k.Icon.Warning,title:k.environment.commandName,children:[(0,ge.jsx)(k.MenuBarExtra.Item,{title:"Raycast needs full disk access",tooltip:`You can revert this access in ${cr} whenever you want`}),e.priming?(0,ge.jsx)(k.MenuBarExtra.Item,{title:e.priming,tooltip:`You can revert this access in ${cr} whenever you want`}):null,(0,ge.jsx)(k.MenuBarExtra.Separator,{}),(0,ge.jsx)(k.MenuBarExtra.Item,{title:t.title,onAction:()=>(0,k.open)(t.target)})]}):(0,ge.jsx)(k.List,{children:(0,ge.jsx)(k.List.EmptyView,{icon:{source:{light:"https://raycast.com/uploads/extensions-utils-security-permissions-light.png",dark:"https://raycast.com/uploads/extensions-utils-security-permissions-dark.png"}},title:"Raycast needs full disk access.",description:`${e.priming?e.priming+`
`:""}You can revert this access in ${cr} whenever you want.`,actions:(0,ge.jsx)(k.ActionPanel,{children:(0,ge.jsx)(k.Action.Open,{...t})})})})}});var Rn=C(St=>{"use strict";Object.defineProperty(St,"__esModule",{value:!0});St.useForm=St.FormValidation=void 0;var xe=require("react"),mn=Ee(),dr;(function(e){e.Required="required"})(dr||(St.FormValidation=dr={}));function yr(e,t){if(e){if(typeof e=="function")return e(t);if(e===dr.Required){let a=typeof t<"u"&&t!==null;if(a)switch(typeof t){case"string":a=t.length>0;break;case"object":Array.isArray(t)?a=t.length>0:t instanceof Date&&(a=t.getTime()>0);break;default:break}if(!a)return"The item is required"}}}function du(e){let{onSubmit:t,validation:a,initialValues:r={}}=e,[n,o]=(0,xe.useState)(r),[u,i]=(0,xe.useState)({}),s=(0,xe.useRef)({}),p=(0,mn.useLatest)(a||{}),c=(0,mn.useLatest)(t),y=(0,xe.useCallback)(I=>{s.current[I]?.focus()},[s]),b=(0,xe.useCallback)(async I=>{let A=!1;for(let[g,P]of Object.entries(p.current)){let f=yr(P,I[g]);f&&(A||(A={},y(g)),A[g]=f)}if(A)return i(A),!1;let R=await c.current(I);return typeof R=="boolean"?R:!0},[p,c,y]),M=(0,xe.useCallback)((I,A)=>{i(R=>({...R,[I]:A}))},[i]),l=(0,xe.useCallback)(function(I,A){o(R=>({...R,[I]:typeof A=="function"?A(R[I]):A}))},[o]),S=(0,xe.useMemo)(()=>new Proxy({},{get(I,A){let R=p.current[A],g=n[A];return{onChange(P){u[A]&&(yr(R,P)||M(A,void 0)),l(A,P)},onBlur(P){let f=yr(R,P.target.value);f&&M(A,f)},error:u[A],id:A,value:typeof g>"u"?null:g,ref:P=>{s.current[A]=P}}}}),[u,p,M,n,s,l]),d=(0,xe.useCallback)(I=>{i({}),Object.entries(s.current).forEach(([A,R])=>{I?.[A]||R?.reset()}),I&&o(I)},[o,i,s]);return{handleSubmit:b,setValidationError:M,setValue:l,values:n,itemProps:S,focus:y,reset:d}}St.useForm=du});var fn=C(ga=>{"use strict";Object.defineProperty(ga,"__esModule",{value:!0});ga.useAI=void 0;var An=require("react"),Su=require("@raycast/api"),bu=nt();function Iu(e,t={}){let{creativity:a,stream:r,model:n,...o}=t,[u,i]=(0,An.useState)(""),s=(0,An.useRef)(),{isLoading:p,error:c,revalidate:y}=(0,bu.usePromise)(async(b,M,l)=>{i("");let S=Su.AI.ask(b,{creativity:M,model:n,signal:s.current?.signal});l===!1?i(await S):(S.on("data",d=>{i(I=>I+d)}),await S)},[e,a,r],{...o,abortable:s});return{isLoading:p,data:u,error:c,revalidate:y}}ga.useAI=Iu});var Cn=C(Ma=>{"use strict";Object.defineProperty(Ma,"__esModule",{value:!0});Ma.useFrecencySorting=void 0;var Sr=require("react"),Pn=Ee(),gu=aa(),Mu=10,En=1440*60*1e3,mu=Math.log(2)/(Mu*En),Ru={Default:100,Embed:0,Bookmark:140};function Au(e){let t=Date.now(),a=e?e.lastVisited:0,r=e?e.frecency:0,n=(t-a)/En,o=Ru.Default*Math.exp(-mu*n),u=r+o;return{lastVisited:t,frecency:u}}var fu=e=>{if(process.env.NODE_ENV!=="production"&&(typeof e!="object"||!e||!("id"in e)||typeof e.id!="string"))throw new Error("Specify a key function or make sure your items have an 'id' property");return e.id};function Pu(e,t){let a=(0,Pn.useLatest)(t?.key||fu),r=(0,Pn.useLatest)(t?.sortUnvisited),[n,o]=(0,gu.useCachedState)(`raycast_frecency_${t?.namespace}`,{}),u=(0,Sr.useCallback)(async function(c){let y=a.current(c);o(b=>{let M=b[y],l=Au(M);return{...b,[y]:l}})},[a,o]),i=(0,Sr.useCallback)(async function(c){let y=a.current(c);o(b=>{let M={...b};return delete M[y],M})},[a,o]);return{data:(0,Sr.useMemo)(()=>e?e.sort((p,c)=>{let y=n[a.current(p)],b=n[a.current(c)];return y&&!b?-1:!y&&b?1:y&&b?b.frecency-y.frecency:r.current?r.current(p,c):0}):[],[n,e,a,r]),visitItem:u,resetRanking:i}}Ma.useFrecencySorting=Pu});var xn=C(ma=>{"use strict";Object.defineProperty(ma,"__esModule",{value:!0});ma.useLocalStorage=void 0;var br=require("@raycast/api"),hn=Ct(),Dn=Oe(),Eu=nt();function Cu(e,t){let{data:a,isLoading:r,mutate:n}=(0,Eu.usePromise)(async i=>{let s=await br.LocalStorage.getItem(i);return typeof s<"u"?JSON.parse(s,Dn.reviver):t},[e]);async function o(i){try{await n(br.LocalStorage.setItem(e,JSON.stringify(i,Dn.replacer)),{optimisticUpdate(s){return s}})}catch(s){await(0,hn.showFailureToast)(s,{title:"Failed to set value in local storage"})}}async function u(){try{await n(br.LocalStorage.removeItem(e),{optimisticUpdate(){}})}catch(i){await(0,hn.showFailureToast)(i,{title:"Failed to remove value from local storage"})}}return{value:a,setValue:o,removeValue:u,isLoading:r}}ma.useLocalStorage=Cu});var wn=C(bt=>{"use strict";Object.defineProperty(bt,"__esModule",{value:!0});bt.slightlyLighterColor=bt.slightlyDarkerColor=void 0;function hu(e){let t=0,a=0,r=0;if(e.length===4)t=parseInt(`${e[1]}${e[1]}`,16),a=parseInt(`${e[2]}${e[2]}`,16),r=parseInt(`${e[3]}${e[3]}`,16);else if(e.length===7)t=parseInt(`${e[1]}${e[2]}`,16),a=parseInt(`${e[3]}${e[4]}`,16),r=parseInt(`${e[5]}${e[6]}`,16);else throw new Error(`Malformed hex color: ${e}`);return{r:t,g:a,b:r}}function Du({r:e,g:t,b:a}){let r=e.toString(16),n=t.toString(16),o=a.toString(16);return r.length===1&&(r=`0${r}`),n.length===1&&(n=`0${n}`),o.length===1&&(o=`0${o}`),`#${r}${n}${o}`}function xu({r:e,g:t,b:a}){e/=255,t/=255,a/=255;let r=Math.min(e,t,a),n=Math.max(e,t,a),o=n-r,u=0,i=0,s=0;return o===0?u=0:n===e?u=(t-a)/o%6:n===t?u=(a-e)/o+2:u=(e-t)/o+4,u=Math.round(u*60),u<0&&(u+=360),s=(n+r)/2,i=o===0?0:o/(1-Math.abs(2*s-1)),i=+(i*100).toFixed(1),s=+(s*100).toFixed(1),{h:u,s:i,l:s}}function _u({h:e,s:t,l:a}){t/=100,a/=100;let r=(1-Math.abs(2*a-1))*t,n=r*(1-Math.abs(e/60%2-1)),o=a-r/2,u=0,i=0,s=0;return e>=0&&e<60?(u=r,i=n,s=0):e>=60&&e<120?(u=n,i=r,s=0):e>=120&&e<180?(u=0,i=r,s=n):e>=180&&e<240?(u=0,i=n,s=r):e>=240&&e<300?(u=n,i=0,s=r):e>=300&&e<360&&(u=r,i=0,s=n),u=Math.round((u+o)*255),i=Math.round((i+o)*255),s=Math.round((s+o)*255),{r:u,g:i,b:s}}function _n(e){return xu(hu(e))}function Un(e){return Du(_u(e))}function vn(e,t,a){return t<a?e<t?t:e>a?a:e:e<a?a:e>t?t:e}var Tn=12;function Uu(e){let t=_n(e);return Un({h:t.h,s:t.s,l:vn(t.l-Tn,0,100)})}bt.slightlyDarkerColor=Uu;function vu(e){let t=_n(e);return Un({h:t.h,s:t.s,l:vn(t.l+Tn,0,100)})}bt.slightlyLighterColor=vu});var Ln=C(Ra=>{"use strict";Object.defineProperty(Ra,"__esModule",{value:!0});Ra.getAvatarIcon=void 0;var On=wn();function It(e,t){let a=e.charCodeAt(t);if(Number.isNaN(a))return["",t];if(a<55296||a>57343)return[e.charAt(t),t];if(55296<=a&&a<=56319){if(e.length<=t+1)throw new Error("High surrogate without following low surrogate");let n=e.charCodeAt(t+1);if(56320>n||n>57343)throw new Error("High surrogate without following low surrogate");return[e.charAt(t)+e.charAt(t+1),t+1]}if(t===0)throw new Error("Low surrogate without preceding high surrogate");let r=e.charCodeAt(t-1);if(55296>r||r>56319)throw new Error("Low surrogate without preceding high surrogate");return[e.charAt(t+1),t+1]}var Bn=["#DC829A","#D64854","#D47600","#D36CDD","#52A9E4","#7871E8","#70920F","#43B93A","#EB6B3E","#26B795","#D85A9B","#A067DC","#BD9500","#5385D9"];function Tu(e,t){let a=e.trim().split(" "),r;if(a.length==1&&It(a[0],0)[0])r=It(a[0],0)[0];else if(a.length>1){let s=It(a[0],0)[0]||"",p=It(a[a.length-1],0)[0]??"";r=s+p}else r="";let n;if(t?.background)n=t?.background;else{let s=0,[p,c]=It(r,0);for(;p;)s+=p.charCodeAt(0),[p,c]=It(r,c+1);let y=s%Bn.length;n=Bn[y]}let u=50-0;return`data:image/svg+xml,${`<svg width="100px" height="100px">
  ${t?.gradient!==!1?`<defs>
      <linearGradient id="Gradient" x1="0.25" x2="0.75" y1="0" y2="1">
        <stop offset="0%" stop-color="${(0,On.slightlyLighterColor)(n)}"/>
        <stop offset="50%" stop-color="${n}"/>
        <stop offset="100%" stop-color="${(0,On.slightlyDarkerColor)(n)}"/>
      </linearGradient>
  </defs>`:""}
      <circle cx="50" cy="50" r="${u}" fill="${t?.gradient!==!1?"url(#Gradient)":n}" />
      ${r?`<text x="50" y="80" font-size="${u-1}" font-family="Inter, sans-serif" text-anchor="middle" fill="white">${r.toUpperCase()}</text>`:""}
    </svg>
  `.replaceAll(`
`,"")}`}Ra.getAvatarIcon=Tu});var Nn=C(Aa=>{"use strict";Object.defineProperty(Aa,"__esModule",{value:!0});Aa.getFavicon=void 0;var qn=require("@raycast/api"),wu=require("url");function Ou(e,t){try{let r=(typeof e=="string"?new wu.URL(e):e).hostname;return{source:`https://www.google.com/s2/favicons?sz=${t?.size??64}&domain=${r}`,fallback:t?.fallback??qn.Icon.Link,mask:t?.mask}}catch(a){return console.error(a),qn.Icon.Link}}Aa.getFavicon=Ou});var Fn=C(fa=>{"use strict";Object.defineProperty(fa,"__esModule",{value:!0});fa.getProgressIcon=void 0;var Vn=require("@raycast/api");function kn(e,t,a,r){let n=(r-90)*Math.PI/180;return{x:e+a*Math.cos(n),y:t+a*Math.sin(n)}}function Bu(e,t,a,r,n){let o=kn(e,t,a,n),u=kn(e,t,a,r),i=n-r<=180?"0":"1";return["M",o.x,o.y,"A",a,a,0,i,0,u.x,u.y].join(" ")}function Lu(e,t=Vn.Color.Red,a){let r=a?.background||(Vn.environment.appearance==="light"?"black":"white"),n=a?.backgroundOpacity||.1,o=10,i=50-5-o/2;return`data:image/svg+xml,${`<svg width="100px" height="100px">
      <circle cx="50" cy="50" r="${i}" stroke-width="${o}" stroke="${e<1?r:t}" opacity="${e<1?n:"1"}" fill="none" />
      ${e>0&&e<1?`<path d="${Bu(50,50,i,0,e*360)}" stroke="${t}" stroke-width="${o}" fill="none" />`:""}
    </svg>
  `.replaceAll(`
`,"")}`}fa.getProgressIcon=Lu});var jn=C(_e=>{"use strict";var qu=_e&&_e.__createBinding||(Object.create?(function(e,t,a,r){r===void 0&&(r=a);var n=Object.getOwnPropertyDescriptor(t,a);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,n)}):(function(e,t,a,r){r===void 0&&(r=a),e[r]=t[a]})),Ir=_e&&_e.__exportStar||function(e,t){for(var a in e)a!=="default"&&!Object.prototype.hasOwnProperty.call(t,a)&&qu(t,e,a)};Object.defineProperty(_e,"__esModule",{value:!0});Ir(Ln(),_e);Ir(Nn(),_e);Ir(Fn(),_e)});var zn=C(V=>{"use strict";Object.defineProperty(V,"__esModule",{value:!0});V.zoomService=V.slackService=V.linearService=V.jiraService=V.googleService=V.githubService=V.asanaService=void 0;var F=require("@raycast/api"),$e=gr(),Pa={asana:"1191201745684312",github:"7235fe8d42157f1f38c0",linear:"c8ff37b9225c3c9aefd7d66ea0e5b6f1",slack:"851756884692.5546927290212"},Ne=e=>`data:image/svg+xml,${e}`,Qe={asana:Ne('<svg xmlns="http://www.w3.org/2000/svg" width="251" height="232" fill="none"><path fill="#F06A6A" d="M179.383 54.373c0 30.017-24.337 54.374-54.354 54.374-30.035 0-54.373-24.338-54.373-54.374C70.656 24.338 94.993 0 125.029 0c30.017 0 54.354 24.338 54.354 54.373ZM54.393 122.33C24.376 122.33.02 146.668.02 176.685c0 30.017 24.337 54.373 54.373 54.373 30.035 0 54.373-24.338 54.373-54.373 0-30.017-24.338-54.355-54.373-54.355Zm141.253 0c-30.035 0-54.373 24.338-54.373 54.374 0 30.035 24.338 54.373 54.373 54.373 30.017 0 54.374-24.338 54.374-54.373 0-30.036-24.338-54.374-54.374-54.374Z"/></svg>'),github:{source:Ne('<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>'),tintColor:F.Color.PrimaryText},google:Ne('<svg xmlns="http://www.w3.org/2000/svg" style="display:block" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/><path fill="none" d="M0 0h48v48H0z"/></svg>'),jira:Ne('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="2361" height="2500" viewBox="2.59 0 214.091 224"><linearGradient id="a" x1="102.4" x2="56.15" y1="218.63" y2="172.39" gradientTransform="matrix(1 0 0 -1 0 264)" gradientUnits="userSpaceOnUse"><stop offset=".18" stop-color="#0052cc"/><stop offset="1" stop-color="#2684ff"/></linearGradient><linearGradient xlink:href="#a" id="b" x1="114.65" x2="160.81" y1="85.77" y2="131.92"/><path fill="#2684ff" d="M214.06 105.73 117.67 9.34 108.33 0 35.77 72.56 2.59 105.73a8.89 8.89 0 0 0 0 12.54l66.29 66.29L108.33 224l72.55-72.56 1.13-1.12 32.05-32a8.87 8.87 0 0 0 0-12.59zm-105.73 39.39L75.21 112l33.12-33.12L141.44 112z"/><path fill="url(#a)" d="M108.33 78.88a55.75 55.75 0 0 1-.24-78.61L35.62 72.71l39.44 39.44z"/><path fill="url(#b)" d="m141.53 111.91-33.2 33.21a55.77 55.77 0 0 1 0 78.86L181 151.35z"/></svg>'),linear:{source:{light:Ne('<svg xmlns="http://www.w3.org/2000/svg" fill="#222326" width="200" height="200" viewBox="0 0 100 100"><path d="M1.22541 61.5228c-.2225-.9485.90748-1.5459 1.59638-.857L39.3342 97.1782c.6889.6889.0915 1.8189-.857 1.5964C20.0515 94.4522 5.54779 79.9485 1.22541 61.5228ZM.00189135 46.8891c-.01764375.2833.08887215.5599.28957165.7606L52.3503 99.7085c.2007.2007.4773.3075.7606.2896 2.3692-.1476 4.6938-.46 6.9624-.9259.7645-.157 1.0301-1.0963.4782-1.6481L2.57595 39.4485c-.55186-.5519-1.49117-.2863-1.648174.4782-.465915 2.2686-.77832 4.5932-.92588465 6.9624ZM4.21093 29.7054c-.16649.3738-.08169.8106.20765 1.1l64.77602 64.776c.2894.2894.7262.3742 1.1.2077 1.7861-.7956 3.5171-1.6927 5.1855-2.684.5521-.328.6373-1.0867.1832-1.5407L8.43566 24.3367c-.45409-.4541-1.21271-.3689-1.54074.1832-.99132 1.6684-1.88843 3.3994-2.68399 5.1855ZM12.6587 18.074c-.3701-.3701-.393-.9637-.0443-1.3541C21.7795 6.45931 35.1114 0 49.9519 0 77.5927 0 100 22.4073 100 50.0481c0 14.8405-6.4593 28.1724-16.7199 37.3375-.3903.3487-.984.3258-1.3542-.0443L12.6587 18.074Z"/></svg>'),dark:Ne('<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="200" height="200" viewBox="0 0 100 100"><path d="M1.22541 61.5228c-.2225-.9485.90748-1.5459 1.59638-.857L39.3342 97.1782c.6889.6889.0915 1.8189-.857 1.5964C20.0515 94.4522 5.54779 79.9485 1.22541 61.5228ZM.00189135 46.8891c-.01764375.2833.08887215.5599.28957165.7606L52.3503 99.7085c.2007.2007.4773.3075.7606.2896 2.3692-.1476 4.6938-.46 6.9624-.9259.7645-.157 1.0301-1.0963.4782-1.6481L2.57595 39.4485c-.55186-.5519-1.49117-.2863-1.648174.4782-.465915 2.2686-.77832 4.5932-.92588465 6.9624ZM4.21093 29.7054c-.16649.3738-.08169.8106.20765 1.1l64.77602 64.776c.2894.2894.7262.3742 1.1.2077 1.7861-.7956 3.5171-1.6927 5.1855-2.684.5521-.328.6373-1.0867.1832-1.5407L8.43566 24.3367c-.45409-.4541-1.21271-.3689-1.54074.1832-.99132 1.6684-1.88843 3.3994-2.68399 5.1855ZM12.6587 18.074c-.3701-.3701-.393-.9637-.0443-1.3541C21.7795 6.45931 35.1114 0 49.9519 0 77.5927 0 100 22.4073 100 50.0481c0 14.8405-6.4593 28.1724-16.7199 37.3375-.3903.3487-.984.3258-1.3542-.0443L12.6587 18.074Z" /></svg>')}},slack:Ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="73 73 124 124"><style>.st0{fill:#e01e5a}.st1{fill:#36c5f0}.st2{fill:#2eb67d}.st3{fill:#ecb22e}</style><path d="M99.4 151.2c0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9h12.9v12.9zM105.9 151.2c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v32.3c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9v-32.3z" class="st0"/><path d="M118.8 99.4c-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v12.9h-12.9zM118.8 105.9c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H86.5c-7.1 0-12.9-5.8-12.9-12.9s5.8-12.9 12.9-12.9h32.3z" class="st1"/><path d="M170.6 118.8c0-7.1 5.8-12.9 12.9-12.9 7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9h-12.9v-12.9zM164.1 118.8c0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9V86.5c0-7.1 5.8-12.9 12.9-12.9 7.1 0 12.9 5.8 12.9 12.9v32.3z" class="st2"/><path d="M151.2 170.6c7.1 0 12.9 5.8 12.9 12.9 0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9v-12.9h12.9zM151.2 164.1c-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9h32.3c7.1 0 12.9 5.8 12.9 12.9 0 7.1-5.8 12.9-12.9 12.9h-32.3z" class="st3"/></svg>'),zoom:Ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 351.845 80"><path d="M73.786 78.835H10.88A10.842 10.842 0 0 1 .833 72.122a10.841 10.841 0 0 1 2.357-11.85L46.764 16.7h-31.23C6.954 16.699 0 9.744 0 1.165h58.014c4.414 0 8.357 2.634 10.046 6.712a10.843 10.843 0 0 1-2.356 11.85L22.13 63.302h36.122c8.58 0 15.534 6.955 15.534 15.534Zm278.059-48.544C351.845 13.588 338.256 0 321.553 0c-8.934 0-16.975 3.89-22.524 10.063C293.48 3.89 285.44 0 276.505 0c-16.703 0-30.291 13.588-30.291 30.291v48.544c8.579 0 15.534-6.955 15.534-15.534v-33.01c0-8.137 6.62-14.757 14.757-14.757s14.757 6.62 14.757 14.757v33.01c0 8.58 6.955 15.534 15.534 15.534V30.291c0-8.137 6.62-14.757 14.757-14.757s14.758 6.62 14.758 14.757v33.01c0 8.58 6.954 15.534 15.534 15.534V30.291ZM238.447 40c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.908-40 40-40 40 17.909 40 40Zm-15.534 0c0-13.512-10.954-24.466-24.466-24.466S173.98 26.488 173.98 40s10.953 24.466 24.466 24.466S222.913 53.512 222.913 40Zm-70.68 0c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.909-40 40-40 40 17.909 40 40Zm-15.534 0c0-13.512-10.954-24.466-24.466-24.466S87.767 26.488 87.767 40s10.954 24.466 24.466 24.466S136.699 53.512 136.699 40Z" style="fill:#0b5cff"/></svg>')},Nu=e=>new $e.OAuthService({client:new F.OAuth.PKCEClient({redirectMethod:F.OAuth.RedirectMethod.Web,providerName:"Asana",providerIcon:Qe.asana,providerId:"asana",description:"Connect your Asana account"}),clientId:e.clientId??Pa.asana,authorizeUrl:e.authorizeUrl??"https://asana.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://asana.oauth.raycast.com/token",refreshTokenUrl:e.refreshTokenUrl??"https://asana.oauth.raycast.com/refresh-token",scope:e.scope,personalAccessToken:e.personalAccessToken,onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});V.asanaService=Nu;var Vu=e=>new $e.OAuthService({client:new F.OAuth.PKCEClient({redirectMethod:F.OAuth.RedirectMethod.Web,providerName:"GitHub",providerIcon:Qe.github,providerId:"github",description:"Connect your GitHub account"}),clientId:e.clientId??Pa.github,authorizeUrl:e.authorizeUrl??"https://github.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://github.oauth.raycast.com/token",refreshTokenUrl:e.refreshTokenUrl??"https://github.oauth.raycast.com/refresh-token",scope:e.scope,personalAccessToken:e.personalAccessToken,onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});V.githubService=Vu;var ku=e=>new $e.OAuthService({client:new F.OAuth.PKCEClient({redirectMethod:F.OAuth.RedirectMethod.AppURI,providerName:"Google",providerIcon:Qe.google,providerId:"google",description:"Connect your Google account"}),clientId:e.clientId,authorizeUrl:e.authorizeUrl??"https://accounts.google.com/o/oauth2/v2/auth",tokenUrl:e.tokenUrl??"https://oauth2.googleapis.com/token",refreshTokenUrl:e.tokenUrl,scope:e.scope,personalAccessToken:e.personalAccessToken,bodyEncoding:e.bodyEncoding??"url-encoded",onAuthorize:e.onAuthorize,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});V.googleService=ku;var Fu=e=>new $e.OAuthService({client:new F.OAuth.PKCEClient({redirectMethod:F.OAuth.RedirectMethod.Web,providerName:"Jira",providerIcon:Qe.jira,providerId:"jira",description:"Connect your Jira account"}),clientId:e.clientId,authorizeUrl:e.authorizeUrl??"https://auth.atlassian.com/authorize",tokenUrl:e.tokenUrl??"https://auth.atlassian.com/oauth/token",refreshTokenUrl:e.refreshTokenUrl,scope:e.scope,personalAccessToken:e.personalAccessToken,onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});V.jiraService=Fu;var ju=e=>new $e.OAuthService({client:new F.OAuth.PKCEClient({redirectMethod:F.OAuth.RedirectMethod.Web,providerName:"Linear",providerIcon:Qe.linear,providerId:"linear",description:"Connect your Linear account"}),clientId:e.clientId??Pa.linear,authorizeUrl:e.authorizeUrl??"https://linear.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://linear.oauth.raycast.com/token",refreshTokenUrl:e.refreshTokenUrl??"https://linear.oauth.raycast.com/refresh-token",scope:e.scope,extraParameters:{actor:"user"},onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});V.linearService=ju;var zu=e=>new $e.OAuthService({client:new F.OAuth.PKCEClient({redirectMethod:F.OAuth.RedirectMethod.Web,providerName:"Slack",providerIcon:Qe.slack,providerId:"slack",description:"Connect your Slack account"}),clientId:e.clientId??Pa.slack,authorizeUrl:e.authorizeUrl??"https://slack.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://slack.oauth.raycast.com/token",refreshTokenUrl:e.tokenUrl??"https://slack.oauth.raycast.com/refresh-token",scope:"",extraParameters:{user_scope:e.scope},personalAccessToken:e.personalAccessToken,bodyEncoding:e.tokenUrl?e.bodyEncoding??"url-encoded":"json",onAuthorize:e.onAuthorize,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser??(t=>({access_token:t.authed_user.access_token,scope:t.authed_user.scope}))});V.slackService=zu;var Hu=e=>new $e.OAuthService({client:new F.OAuth.PKCEClient({redirectMethod:F.OAuth.RedirectMethod.Web,providerName:"Zoom",providerIcon:Qe.zoom,providerId:"zoom",description:"Connect your Zoom account"}),clientId:e.clientId,authorizeUrl:e.authorizeUrl??"https://zoom.us/oauth/authorize",tokenUrl:e.tokenUrl??"https://zoom.us/oauth/token",refreshTokenUrl:e.refreshTokenUrl,scope:e.scope,personalAccessToken:e.personalAccessToken,bodyEncoding:e.bodyEncoding??"url-encoded",onAuthorize:e.onAuthorize,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});V.zoomService=Hu});var gr=C(gt=>{"use strict";var Gu=gt&&gt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(gt,"__esModule",{value:!0});gt.OAuthService=void 0;var Hn=Gu(Ot()),We=zn(),Me=class{constructor(t){this.clientId=t.clientId,this.scope=Array.isArray(t.scope)?t.scope.join(" "):t.scope,this.personalAccessToken=t.personalAccessToken,this.bodyEncoding=t.bodyEncoding,this.client=t.client,this.extraParameters=t.extraParameters,this.authorizeUrl=t.authorizeUrl,this.tokenUrl=t.tokenUrl,this.refreshTokenUrl=t.refreshTokenUrl,this.onAuthorize=t.onAuthorize,this.tokenResponseParser=t.tokenResponseParser??(a=>a),this.tokenRefreshResponseParser=t.tokenRefreshResponseParser??(a=>a),this.authorize=this.authorize.bind(this)}async authorize(){let t=await this.client.getTokens();if(t?.accessToken){if(t.refreshToken&&t.isExpired()){let o=await this.refreshTokens({token:t.refreshToken});if(o)return await this.client.setTokens(o),o.access_token}return t.accessToken}let a=await this.client.authorizationRequest({endpoint:this.authorizeUrl,clientId:this.clientId,scope:this.scope,extraParameters:this.extraParameters}),{authorizationCode:r}=await this.client.authorize(a),n=await this.fetchTokens({authRequest:a,authorizationCode:r});return await this.client.setTokens(n),n.access_token}async fetchTokens({authRequest:t,authorizationCode:a}){let r;if(this.bodyEncoding==="url-encoded"){let u=new URLSearchParams;u.append("client_id",this.clientId),u.append("code",a),u.append("code_verifier",t.codeVerifier),u.append("grant_type","authorization_code"),u.append("redirect_uri",t.redirectURI),r={body:u}}else r={body:JSON.stringify({client_id:this.clientId,code:a,code_verifier:t.codeVerifier,grant_type:"authorization_code",redirect_uri:t.redirectURI}),headers:{"Content-Type":"application/json"}};let n=await(0,Hn.default)(this.tokenUrl,{method:"POST",...r});if(!n.ok){let u=await n.text();throw console.error("fetch tokens error:",u),new Error(`Error while fetching tokens: ${n.status} (${n.statusText})
${u}`)}let o=this.tokenResponseParser(await n.json());return Array.isArray(o.scope)?{...o,scope:o.scope.join(" ")}:o}async refreshTokens({token:t}){let a;if(this.bodyEncoding==="url-encoded"){let n=new URLSearchParams;n.append("client_id",this.clientId),n.append("refresh_token",t),n.append("grant_type","refresh_token"),a={body:n}}else a={body:JSON.stringify({client_id:this.clientId,refresh_token:t,grant_type:"refresh_token"}),headers:{"Content-Type":"application/json"}};let r=await(0,Hn.default)(this.refreshTokenUrl??this.tokenUrl,{method:"POST",...a});if(r.ok){let n=this.tokenRefreshResponseParser(await r.json());return n.refresh_token=n.refresh_token??t,n}else{let n=await r.text();console.error("refresh tokens error:",n),this.client.description=`${this.client.providerName} needs you to sign-in again. Press \u23CE or click the button below to continue.`,await this.client.removeTokens(),await this.authorize()}}};gt.OAuthService=Me;Me.asana=We.asanaService;Me.github=We.githubService;Me.google=We.googleService;Me.jira=We.jiraService;Me.linear=We.linearService;Me.slack=We.slackService;Me.zoom=We.zoomService});var Gn=C(Mt=>{"use strict";Object.defineProperty(Mt,"__esModule",{value:!0});Mt.getAccessToken=Mt.withAccessToken=void 0;var $u=require("react/jsx-runtime"),Qu=require("@raycast/api"),Ve=null,Ke=null,Mr=null,mr=null,Rr=null;function Wu(e){return Qu.environment.commandMode==="no-view"?t=>async r=>{if(!Ve){Ve=e.personalAccessToken??await e.authorize(),Ke=e.personalAccessToken?"personal":"oauth";let n=(await e.client?.getTokens())?.idToken;e.onAuthorize&&await Promise.resolve(e.onAuthorize({token:Ve,type:Ke,idToken:n}))}return t(r)}:t=>{let a=r=>{e.personalAccessToken?(Ve=e.personalAccessToken,Ke="personal"):(Mr||(Mr=Ar(e.authorize())),Ve=Mr.read(),Ke="oauth");let n;return e.client&&(mr||(mr=Ar(e.client.getTokens())),n=mr.read()?.idToken),!Rr&&e.onAuthorize&&(Rr=Ar(Promise.resolve(e.onAuthorize({token:Ve,type:Ke,idToken:n})))),Rr?.read(),(0,$u.jsx)(t,{...r})};return a.displayName=`withAccessToken(${t.displayName||t.name})`,a}}Mt.withAccessToken=Wu;function Ku(){if(!Ve||!Ke)throw new Error("getAccessToken must be used when authenticated (eg. used inside `withAccessToken`)");return{token:Ve,type:Ke}}Mt.getAccessToken=Ku;function Ar(e){let t="pending",a,r=e.then(o=>{t="success",a=o},o=>{t="error",a=o});return{read:()=>{switch(t){case"pending":throw r;case"error":throw a;default:return a}}}}});var Qn=C(ke=>{"use strict";var Yu=ke&&ke.__createBinding||(Object.create?(function(e,t,a,r){r===void 0&&(r=a);var n=Object.getOwnPropertyDescriptor(t,a);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,n)}):(function(e,t,a,r){r===void 0&&(r=a),e[r]=t[a]})),$n=ke&&ke.__exportStar||function(e,t){for(var a in e)a!=="default"&&!Object.prototype.hasOwnProperty.call(t,a)&&Yu(t,e,a)};Object.defineProperty(ke,"__esModule",{value:!0});$n(gr(),ke);$n(Gn(),ke)});var Zn=C(se=>{"use strict";var Wn=se&&se.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(se,"__esModule",{value:!0});se.createDeeplink=se.createExtensionDeeplink=se.createScriptCommandDeeplink=se.DeeplinkType=void 0;var Pr=require("@raycast/api"),Ju=Wn(require("node:fs")),Zu=Wn(require("node:path")),fr;(function(e){e.ScriptCommand="script-command",e.Extension="extension"})(fr||(se.DeeplinkType=fr={}));function Kn(){return Pr.environment.raycastVersion.includes("alpha")?"raycastinternal://":"raycast://"}function Xu(){let e=JSON.parse(Ju.default.readFileSync(Zu.default.join(Pr.environment.assetsPath,"..","package.json"),"utf8"));return e.owner||e.author}function Yn(e){let t=`${Kn()}script-commands/${e.command}`;if(e.arguments){let a="";for(let r of e.arguments)a+="&arguments="+encodeURIComponent(r);t+="?"+a.substring(1)}return t}se.createScriptCommandDeeplink=Yn;function Jn(e){let t=Xu(),a=Pr.environment.extensionName;"ownerOrAuthorName"in e&&"extensionName"in e&&(t=e.ownerOrAuthorName,a=e.extensionName);let r=`${Kn()}extensions/${t}/${a}/${e.command}`,n="";return e.launchType&&(n+="&launchType="+encodeURIComponent(e.launchType)),e.arguments&&(n+="&arguments="+encodeURIComponent(JSON.stringify(e.arguments))),e.context&&(n+="&context="+encodeURIComponent(JSON.stringify(e.context))),e.fallbackText&&(n+="&fallbackText="+encodeURIComponent(e.fallbackText)),n&&(r+="?"+n.substring(1)),r}se.createExtensionDeeplink=Jn;function ep(e){return e.type===fr.ScriptCommand?Yn(e):Jn(e)}se.createDeeplink=ep});var Xn=C(Ea=>{"use strict";Object.defineProperty(Ea,"__esModule",{value:!0});Ea.executeSQL=void 0;var tp=pr();function ap(e,t){return(0,tp.baseExecuteSQL)(e,t)}Ea.executeSQL=ap});var eo=C(mt=>{"use strict";var rp=mt&&mt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(mt,"__esModule",{value:!0});mt.runAppleScript=void 0;var np=rp(require("node:child_process")),Vt=pa();async function op(e,t,a){let{humanReadableOutput:r,language:n,timeout:o,...u}=Array.isArray(t)?a||{}:t||{},i=r!==!1?[]:["-ss"];n==="JavaScript"&&i.push("-l","JavaScript"),Array.isArray(t)&&i.push("-",...t);let s=np.default.spawn("osascript",i,{...u,env:{PATH:"/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"}}),p=(0,Vt.getSpawnedPromise)(s,{timeout:o??1e4});s.stdin.end(e);let[{error:c,exitCode:y,signal:b,timedOut:M},l,S]=await(0,Vt.getSpawnedResult)(s,{encoding:"utf8"},p),d=(0,Vt.handleOutput)({stripFinalNewline:!0},l),I=(0,Vt.handleOutput)({stripFinalNewline:!0},S);return(0,Vt.defaultParsing)({stdout:d,stderr:I,error:c,exitCode:y,signal:b,timedOut:M,command:"osascript",options:a,parentError:new Error})}mt.runAppleScript=op});var to=C(ha=>{"use strict";Object.defineProperty(ha,"__esModule",{value:!0});ha.withCache=void 0;var ip=require("@raycast/api"),Ca=Oe();function sp(e,t){let a=new ip.Cache({namespace:(0,Ca.hash)(e)}),r=async(...n)=>{let o=(0,Ca.hash)(n||[])+t?.internal_cacheKeySuffix,u=a.get(o);if(u){let{data:s,timestamp:p}=JSON.parse(u,Ca.reviver);if(!(t?.maxAge&&Date.now()-p>t.maxAge)&&(!t?.validate||t.validate(s)))return s}let i=await e(...n);return a.set(o,JSON.stringify({data:i,timestamp:Date.now()},Ca.replacer)),i};return r.clearCache=()=>{a.clear()},r}ha.withCache=sp});var Rt=C(x=>{"use strict";var up=x&&x.__createBinding||(Object.create?(function(e,t,a,r){r===void 0&&(r=a);var n=Object.getOwnPropertyDescriptor(t,a);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,n)}):(function(e,t,a,r){r===void 0&&(r=a),e[r]=t[a]})),O=x&&x.__exportStar||function(e,t){for(var a in e)a!=="default"&&!Object.prototype.hasOwnProperty.call(t,a)&&up(t,e,a)};Object.defineProperty(x,"__esModule",{value:!0});O(nt(),x);O(aa(),x);O(xt(),x);O(nn(),x);O(ln(),x);O(Sn(),x);O(Mn(),x);O(Rn(),x);O(fn(),x);O(Cn(),x);O(xn(),x);O(jn(),x);O(Qn(),x);O(Zn(),x);O(Xn(),x);O(eo(),x);O(Ct(),x);O(to(),x)});var G={};at(G,{default:()=>vo.default});var vo,Oa=$a(()=>{H(G,require("formdata-polyfill/esm.min.js"));vo=T(require("formdata-polyfill/esm.min.js"))});var Z={};at(Z,{default:()=>Bo.default});var Bo,_r=$a(()=>{H(Z,require("fetch-blob/from.js"));Bo=T(require("fetch-blob/from.js"))});var qo={};at(qo,{toFormData:()=>zl});function jl(e){let t=e.match(/\bfilename=("(.*?)"|([^()<>@,;:\\"/[\]?={}\s\t]+))($|;\s)/i);if(!t)return;let a=t[2]||t[3]||"",r=a.slice(a.lastIndexOf("\\")+1);return r=r.replace(/%22/g,'"'),r=r.replace(/&#(\d{4});/g,(n,o)=>String.fromCharCode(o)),r}async function zl(e,t){if(!/multipart/i.test(t))throw new TypeError("Failed to fetch");let a=t.match(/boundary=(?:"([^"]+)"|([^;]+))/i);if(!a)throw new TypeError("no or bad content-type header, no multipart boundary");let r=new Ur(a[1]||a[2]),n,o,u,i,s,p,c=[],y=new G.FormData,b=I=>{u+=d.decode(I,{stream:!0})},M=I=>{c.push(I)},l=()=>{let I=new Z.File(c,p,{type:s});y.append(i,I)},S=()=>{y.append(i,u)},d=new TextDecoder("utf-8");d.decode(),r.onPartBegin=function(){r.onPartData=b,r.onPartEnd=S,n="",o="",u="",i="",s="",p=null,c.length=0},r.onHeaderField=function(I){n+=d.decode(I,{stream:!0})},r.onHeaderValue=function(I){o+=d.decode(I,{stream:!0})},r.onHeaderEnd=function(){if(o+=d.decode(),n=n.toLowerCase(),n==="content-disposition"){let I=o.match(/\bname=("([^"]*)"|([^()<>@,;:\\"/[\]?={}\s\t]+))/i);I&&(i=I[2]||I[3]||""),p=jl(o),p&&(r.onPartData=M,r.onPartEnd=l)}else n==="content-type"&&(s=o);o="",n=""};for await(let I of e)r.write(I);return r.end(),y}var Ae,h,Lo,ze,La,qa,ql,Gt,Nl,Vl,kl,Fl,Xe,Ur,No=$a(()=>{_r();Oa();Ae=0,h={START_BOUNDARY:Ae++,HEADER_FIELD_START:Ae++,HEADER_FIELD:Ae++,HEADER_VALUE_START:Ae++,HEADER_VALUE:Ae++,HEADER_VALUE_ALMOST_DONE:Ae++,HEADERS_ALMOST_DONE:Ae++,PART_DATA_START:Ae++,PART_DATA:Ae++,END:Ae++},Lo=1,ze={PART_BOUNDARY:Lo,LAST_BOUNDARY:Lo*=2},La=10,qa=13,ql=32,Gt=45,Nl=58,Vl=97,kl=122,Fl=e=>e|32,Xe=()=>{},Ur=class{constructor(t){this.index=0,this.flags=0,this.onHeaderEnd=Xe,this.onHeaderField=Xe,this.onHeadersEnd=Xe,this.onHeaderValue=Xe,this.onPartBegin=Xe,this.onPartData=Xe,this.onPartEnd=Xe,this.boundaryChars={},t=`\r
--`+t;let a=new Uint8Array(t.length);for(let r=0;r<t.length;r++)a[r]=t.charCodeAt(r),this.boundaryChars[a[r]]=!0;this.boundary=a,this.lookbehind=new Uint8Array(this.boundary.length+8),this.state=h.START_BOUNDARY}write(t){let a=0,r=t.length,n=this.index,{lookbehind:o,boundary:u,boundaryChars:i,index:s,state:p,flags:c}=this,y=this.boundary.length,b=y-1,M=t.length,l,S,d=g=>{this[g+"Mark"]=a},I=g=>{delete this[g+"Mark"]},A=(g,P,f,D)=>{(P===void 0||P!==f)&&this[g](D&&D.subarray(P,f))},R=(g,P)=>{let f=g+"Mark";f in this&&(P?(A(g,this[f],a,t),delete this[f]):(A(g,this[f],t.length,t),this[f]=0))};for(a=0;a<r;a++)switch(l=t[a],p){case h.START_BOUNDARY:if(s===u.length-2){if(l===Gt)c|=ze.LAST_BOUNDARY;else if(l!==qa)return;s++;break}else if(s-1===u.length-2){if(c&ze.LAST_BOUNDARY&&l===Gt)p=h.END,c=0;else if(!(c&ze.LAST_BOUNDARY)&&l===La)s=0,A("onPartBegin"),p=h.HEADER_FIELD_START;else return;break}l!==u[s+2]&&(s=-2),l===u[s+2]&&s++;break;case h.HEADER_FIELD_START:p=h.HEADER_FIELD,d("onHeaderField"),s=0;case h.HEADER_FIELD:if(l===qa){I("onHeaderField"),p=h.HEADERS_ALMOST_DONE;break}if(s++,l===Gt)break;if(l===Nl){if(s===1)return;R("onHeaderField",!0),p=h.HEADER_VALUE_START;break}if(S=Fl(l),S<Vl||S>kl)return;break;case h.HEADER_VALUE_START:if(l===ql)break;d("onHeaderValue"),p=h.HEADER_VALUE;case h.HEADER_VALUE:l===qa&&(R("onHeaderValue",!0),A("onHeaderEnd"),p=h.HEADER_VALUE_ALMOST_DONE);break;case h.HEADER_VALUE_ALMOST_DONE:if(l!==La)return;p=h.HEADER_FIELD_START;break;case h.HEADERS_ALMOST_DONE:if(l!==La)return;A("onHeadersEnd"),p=h.PART_DATA_START;break;case h.PART_DATA_START:p=h.PART_DATA,d("onPartData");case h.PART_DATA:if(n=s,s===0){for(a+=b;a<M&&!(t[a]in i);)a+=y;a-=b,l=t[a]}if(s<u.length)u[s]===l?(s===0&&R("onPartData",!0),s++):s=0;else if(s===u.length)s++,l===qa?c|=ze.PART_BOUNDARY:l===Gt?c|=ze.LAST_BOUNDARY:s=0;else if(s-1===u.length)if(c&ze.PART_BOUNDARY){if(s=0,l===La){c&=~ze.PART_BOUNDARY,A("onPartEnd"),A("onPartBegin"),p=h.HEADER_FIELD_START;break}}else c&ze.LAST_BOUNDARY&&l===Gt?(A("onPartEnd"),p=h.END,c=0):s=0;if(s>0)o[s-1]=l;else if(n>0){let g=new Uint8Array(o.buffer,o.byteOffset,o.byteLength);A("onPartData",0,n,g),n=0,d("onPartData"),a--}break;case h.END:break;default:throw new Error(`Unexpected state entered: ${p}`)}R("onHeaderField"),R("onHeaderValue"),R("onPartData"),this.index=s,this.state=p,this.flags=c}end(){if(this.state===h.HEADER_FIELD_START&&this.index===0||this.state===h.PART_DATA&&this.index===this.boundary.length)this.onPartEnd();else if(this.state!==h.END)throw new Error("MultipartParser.end(): stream ended unexpectedly")}}});var sc={};at(sc,{default:()=>ic});module.exports=Ci(sc);var j=require("@raycast/api"),Mi=T(Rt());var B=require("@raycast/api"),ao=T(require("react")),Ye=require("react/jsx-runtime");function pp(e,t=100){return e.length>t?e.slice(0,t)+" ...":e}function ro(e){let t=e.error,a=()=>{(0,B.launchCommand)({name:B.environment.commandName,type:B.LaunchType.UserInitiated})};return(0,Ye.jsx)(B.MenuBarExtra,{icon:e.icon,isLoading:e.isLoading,title:e.title,tooltip:e.tooltip,children:t?(0,Ye.jsx)(At,{title:`Error: ${t}`,icon:{source:B.Icon.Warning},onAction:a}):e.children})}function At(e){return(0,Ye.jsx)(B.MenuBarExtra.Item,{title:pp(e.title),icon:e.icon,subtitle:e.subtitle,shortcut:e.shortcut,onAction:e.onAction,tooltip:e.tooltip})}function lp(e,t){if(!t)return{shown:e,hidden:0};if(ao.default.isValidElement(e))return{shown:[e],hidden:0};let a=e;if(!a||a.length<=0)return{shown:void 0,hidden:0};let r=t||10,n=a.slice(0,r),o=a.length-n.length;return{shown:n,hidden:o}}function cp(e,t){if(!(!e||e.length<=0))return e.join(t)}function Er(e){let t=cp([e.title,e.subtitle].filter(o=>o)," "),{shown:a,hidden:r}=lp(e.children,e.maxChildren),n=a===void 0||a.length<=0;return(0,Ye.jsxs)(B.MenuBarExtra.Section,{title:t,children:[a,r>0&&e.moreElement&&e.moreElement(r),n&&e.emptyElement&&e.emptyElement]})}function no(){return(0,Ye.jsx)(B.MenuBarExtra.Item,{title:"Configure Command",shortcut:{macOS:{modifiers:["cmd"],key:","},Windows:{modifiers:["ctrl"],key:","}},icon:B.Icon.Gear,onAction:()=>(0,B.openCommandPreferences)()})}function oo(e){let t=e.min||1,a=e.max||100,r=e.default||10,o=(0,B.getPreferenceValues)()[e.name]||"",u=Number(o);return isNaN(u)||u<t||u>a?r:u}var J=require("@raycast/api"),me=require("react/jsx-runtime");var so=({sortQuery:e,setSortQuery:t,data:a})=>t?(0,me.jsxs)(J.MenuBarExtra.Submenu,{title:"Sort By",icon:J.Icon.ArrowUp,children:[a.filter(({value:r})=>!r.startsWith("sort:reaction")).map(({title:r,value:n})=>(0,me.jsx)(io,{title:r,value:n,sortQuery:e??"",setSortQuery:t},n||"relevance")),a.some(({value:r})=>r.startsWith("sort:reaction"))&&(0,me.jsx)(J.MenuBarExtra.Section,{title:"Most Reactions",children:a.filter(({value:r})=>r.startsWith("sort:reaction")).map(({title:r,value:n})=>(0,me.jsx)(io,{title:r,value:n,sortQuery:e??"",setSortQuery:t},n))})]}):(0,me.jsx)(me.Fragment,{}),io=({title:e,value:t,sortQuery:a,setSortQuery:r})=>(0,me.jsx)(J.MenuBarExtra.Item,{title:e,icon:a===t?{source:J.Icon.CheckCircle,tintColor:J.Color.Green}:J.Icon.Circle,onAction:()=>r(t)});var Ue=require("@raycast/api");var m=T(require("graphql-tag")),kt=m.default`
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
`,yp=m.default`
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
`,Re=m.default`
  fragment UserFields on User {
    id
    avatarUrl
    name
    login
    isViewer
  }
`,Ft=m.default`
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
`,Da=m.default`
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
  ${Ft}
  ${kt}
  ${Re}
`,dp=m.default`
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
  ${Ft}
  ${kt}
  ${Re}
`,uo=m.default`
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
`,po=m.default`
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
`,lo=m.default`
  fragment RepositoryMentionFields on Repository {
    nameWithOwner
    description
    isPrivate
    isArchived
    owner {
      avatarUrl(size: 64)
    }
  }
`,Sp=m.default`
  fragment ProjectViewerFields on ProjectV2View {
    id
    name
    number
  }
`,co=m.default`
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
  ${Ft}
  ${Sp}
`,yo=m.default`
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
  ${Ft}
  ${Re}
`,bp=m.default`
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
  ${Ft}
  ${Re}
`,Ip=m.default`
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
`,So=m.default`
  fragment CommitFields on Commit {
    authoredDate
    oid
    message
  }
`,Cr=m.default`
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
`,gp=m.default`
  fragment ReleaseFields on Release {
    id
    description
    name
    publishedAt
    createdAt
    tagName
    url
  }
`,Mp=m.default`
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
`,mp=m.default`
  mutation createRef($input: CreateRefInput!) {
    createRef(input: $input) {
      clientMutationId
      ref {
        id
        name
      }
    }
  }
`,Rp=m.default`
  mutation deleteLinkedBranch($input: DeleteLinkedBranchInput!) {
    deleteLinkedBranch(input: $input) {
      clientMutationId
    }
  }
`,Ap=m.default`
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
`,fp=m.default`
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
`,Pp=m.default`
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
`,Ep=m.default`
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
`,Cp=m.default`
  query issueDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...IssueDetailFields
    }
  }
  ${dp}
`,hp=m.default`
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
  ${Da}
`,Dp=m.default`
  query issueByNumber($owner: String!, $name: String!, $issueNumber: Int!) {
    repository(owner: $owner, name: $name) {
      issue(number: $issueNumber) {
        ...IssueFields
      }
    }
  }
  ${Da}
`,xp=m.default`
  mutation closeIssue($nodeId: ID!, $stateReason: IssueClosedStateReason!) {
    closeIssue(input: { issueId: $nodeId, stateReason: $stateReason }) {
      issue {
        id
      }
    }
  }
`,_p=m.default`
  mutation reopenIssue($nodeId: ID!) {
    reopenIssue(input: { issueId: $nodeId }) {
      issue {
        id
      }
    }
  }
`,Up=m.default`
  mutation changeIssueAssignees($issueId: ID!, $assigneeIds: [ID!]) {
    updateIssue(input: { id: $issueId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,vp=m.default`
  mutation changeIssueMilestone($issueId: ID!, $milestoneId: ID) {
    updateIssue(input: { id: $issueId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,Tp=m.default`
  mutation addIssueToProject($issueId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $issueId }) {
      clientMutationId
    }
  }
`,wp=m.default`
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
  ${Da}
`,Op=m.default`
  query searchIssueMentions($query: String!, $numberOfItems: Int!) {
    search(query: $query, type: ISSUE, first: $numberOfItems) {
      nodes {
        ... on Issue {
          ...IssueMentionFields
        }
      }
    }
  }
  ${uo}
`,Bp=m.default`
  query searchPullRequestMentions($query: String!, $numberOfItems: Int!) {
    search(query: $query, type: ISSUE, first: $numberOfItems) {
      nodes {
        ... on PullRequest {
          ...PullRequestMentionFields
        }
      }
    }
  }
  ${po}
`,Lp=m.default`
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
  ${uo}
  ${po}
`,qp=m.default`
  query searchRepositoryMentions($query: String!, $numberOfItems: Int!) {
    search(query: $query, type: REPOSITORY, first: $numberOfItems) {
      nodes {
        ... on Repository {
          ...RepositoryMentionFields
        }
      }
    }
  }
  ${lo}
`,Np=m.default`
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
  ${lo}
`,Vp=m.default`
  mutation changeProjectStatus($projectId: ID!, $closed: Boolean!) {
    updateProjectV2(input: { projectId: $projectId, closed: $closed }) {
      clientMutationId
    }
  }
`,kp=m.default`
  query projectDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...ProjectFields
    }
  }
  ${co}
`,Fp=m.default`
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
  ${yo}
`,jp=m.default`
  query pullRequestDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...PullRequestDetailsFields
    }
  }
  ${bp}
`,zp=m.default`
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
`,Hp=m.default`
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
`,Gp=m.default`
  query pullRequestCommits($nodeId: ID!, $numberOfItems: Int!, $before: String) {
    node(id: $nodeId) {
      ...PullRequestCommitFields
    }
  }
  ${Ip}
`,$p=m.default`
  mutation closePullRequest($nodeId: ID!) {
    closePullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Qp=m.default`
  mutation reopenPullRequest($nodeId: ID!) {
    reopenPullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Wp=m.default`
  mutation markPullRequestReadyForReview($nodeId: ID!) {
    markPullRequestReadyForReview(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Kp=m.default`
  mutation addPullRequestReview($nodeId: ID!, $event: PullRequestReviewEvent, $body: String) {
    addPullRequestReview(input: { pullRequestId: $nodeId, event: $event, body: $body }) {
      pullRequestReview {
        id
      }
    }
  }
`,Yp=m.default`
  mutation changePullRequestAssignees($pullRequestId: ID!, $assigneeIds: [ID!]) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,Jp=m.default`
  mutation changePullRequestMilestone($pullRequestId: ID!, $milestoneId: ID) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,Zp=m.default`
  mutation addPullRequestToProject($pullRequestId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $pullRequestId }) {
      clientMutationId
    }
  }
`,Xp=m.default`
  mutation requestReview($pullRequestId: ID!, $collaboratorId: ID!) {
    requestReviews(input: { pullRequestId: $pullRequestId, userIds: [$collaboratorId], union: true }) {
      clientMutationId
    }
  }
`,el=m.default`
  mutation mergePullRequest($nodeId: ID!, $method: PullRequestMergeMethod!) {
    mergePullRequest(input: { pullRequestId: $nodeId, mergeMethod: $method }) {
      pullRequest {
        nodeId: id
      }
    }
  }
`,tl=m.default`
  mutation addPullRequestToMergeQueue($nodeId: ID!) {
    enqueuePullRequest(input: { pullRequestId: $nodeId }) {
      __typename
    }
  }
`,al=m.default`
  mutation removePullRequestFromMergeQueue($nodeId: ID!) {
    dequeuePullRequest(input: { id: $nodeId }) {
      __typename
    }
  }
`,rl=m.default`
  mutation enablePullRequestAutoMerge($nodeId: ID!, $mergeMethod: PullRequestMergeMethod) {
    enablePullRequestAutoMerge(input: { pullRequestId: $nodeId, mergeMethod: $mergeMethod }) {
      pullRequest {
        id
      }
    }
  }
`,nl=m.default`
  mutation disablePullRequestAutoMerge($nodeId: ID!) {
    disablePullRequestAutoMerge(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,ol=m.default`
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
`,il=m.default`
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
  ${yo}
`,sl=m.default`
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
`,ul=m.default`
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
`,pl=m.default`
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
`,ll=m.default`
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
`,cl=m.default`
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
  ${So}
  ${Re}
`,yl=m.default`
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
  ${So}
`,dl=m.default`
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
  ${Da}
`,Sl=m.default`
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
`,bl=m.default`
  mutation addStar($repositoryId: ID!) {
    addStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,Il=m.default`
  mutation removeStar($repositoryId: ID!) {
    removeStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,gl=m.default`
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
`,Ml=m.default`
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
  ${co}
`,ml=m.default`
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
`,Rl=m.default`
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
`,Al=(e,t,a,r)=>e();function bo(e,t=Al){return{createLinkedBranch(a,r,n){return t(o=>e.request({document:Mp,variables:a,requestHeaders:{...r,...o},signal:n}),"createLinkedBranch","mutation",a)},createRef(a,r,n){return t(o=>e.request({document:mp,variables:a,requestHeaders:{...r,...o},signal:n}),"createRef","mutation",a)},deleteLinkedBranch(a,r,n){return t(o=>e.request({document:Rp,variables:a,requestHeaders:{...r,...o},signal:n}),"deleteLinkedBranch","mutation",a)},searchDiscussions(a,r,n){return t(o=>e.request({document:Ap,variables:a,requestHeaders:{...r,...o},signal:n}),"searchDiscussions","query",a)},getGitHubDiscussionNumber(a,r,n){return t(o=>e.request({document:fp,variables:a,requestHeaders:{...r,...o},signal:n}),"getGitHubDiscussionNumber","query",a)},repositoryCollaboratorsForIssues(a,r,n){return t(o=>e.request({document:Pp,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryCollaboratorsForIssues","query",a)},repositoryProjectsForIssues(a,r,n){return t(o=>e.request({document:Ep,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryProjectsForIssues","query",a)},issueDetails(a,r,n){return t(o=>e.request({document:Cp,variables:a,requestHeaders:{...r,...o},signal:n}),"issueDetails","query",a)},searchIssues(a,r,n){return t(o=>e.request({document:hp,variables:a,requestHeaders:{...r,...o},signal:n}),"searchIssues","query",a)},issueByNumber(a,r,n){return t(o=>e.request({document:Dp,variables:a,requestHeaders:{...r,...o},signal:n}),"issueByNumber","query",a)},closeIssue(a,r,n){return t(o=>e.request({document:xp,variables:a,requestHeaders:{...r,...o},signal:n}),"closeIssue","mutation",a)},reopenIssue(a,r,n){return t(o=>e.request({document:_p,variables:a,requestHeaders:{...r,...o},signal:n}),"reopenIssue","mutation",a)},changeIssueAssignees(a,r,n){return t(o=>e.request({document:Up,variables:a,requestHeaders:{...r,...o},signal:n}),"changeIssueAssignees","mutation",a)},changeIssueMilestone(a,r,n){return t(o=>e.request({document:vp,variables:a,requestHeaders:{...r,...o},signal:n}),"changeIssueMilestone","mutation",a)},addIssueToProject(a,r,n){return t(o=>e.request({document:Tp,variables:a,requestHeaders:{...r,...o},signal:n}),"addIssueToProject","mutation",a)},createIssue(a,r,n){return t(o=>e.request({document:wp,variables:a,requestHeaders:{...r,...o},signal:n}),"createIssue","mutation",a)},searchIssueMentions(a,r,n){return t(o=>e.request({document:Op,variables:a,requestHeaders:{...r,...o},signal:n}),"searchIssueMentions","query",a)},searchPullRequestMentions(a,r,n){return t(o=>e.request({document:Bp,variables:a,requestHeaders:{...r,...o},signal:n}),"searchPullRequestMentions","query",a)},issueOrPullRequestMention(a,r,n){return t(o=>e.request({document:Lp,variables:a,requestHeaders:{...r,...o},signal:n}),"issueOrPullRequestMention","query",a)},searchRepositoryMentions(a,r,n){return t(o=>e.request({document:qp,variables:a,requestHeaders:{...r,...o},signal:n}),"searchRepositoryMentions","query",a)},viewerRepositoryMentions(a,r,n){return t(o=>e.request({document:Np,variables:a,requestHeaders:{...r,...o},signal:n}),"viewerRepositoryMentions","query",a)},changeProjectStatus(a,r,n){return t(o=>e.request({document:Vp,variables:a,requestHeaders:{...r,...o},signal:n}),"changeProjectStatus","mutation",a)},projectDetails(a,r,n){return t(o=>e.request({document:kp,variables:a,requestHeaders:{...r,...o},signal:n}),"projectDetails","query",a)},searchPullRequests(a,r,n){return t(o=>e.request({document:Fp,variables:a,requestHeaders:{...r,...o},signal:n}),"searchPullRequests","query",a)},pullRequestDetails(a,r,n){return t(o=>e.request({document:jp,variables:a,requestHeaders:{...r,...o},signal:n}),"pullRequestDetails","query",a)},repositoryCollaboratorsForPullRequests(a,r,n){return t(o=>e.request({document:zp,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryCollaboratorsForPullRequests","query",a)},repositoryProjectsForPullRequests(a,r,n){return t(o=>e.request({document:Hp,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryProjectsForPullRequests","query",a)},pullRequestCommits(a,r,n){return t(o=>e.request({document:Gp,variables:a,requestHeaders:{...r,...o},signal:n}),"pullRequestCommits","query",a)},closePullRequest(a,r,n){return t(o=>e.request({document:$p,variables:a,requestHeaders:{...r,...o},signal:n}),"closePullRequest","mutation",a)},reopenPullRequest(a,r,n){return t(o=>e.request({document:Qp,variables:a,requestHeaders:{...r,...o},signal:n}),"reopenPullRequest","mutation",a)},markPullRequestReadyForReview(a,r,n){return t(o=>e.request({document:Wp,variables:a,requestHeaders:{...r,...o},signal:n}),"markPullRequestReadyForReview","mutation",a)},addPullRequestReview(a,r,n){return t(o=>e.request({document:Kp,variables:a,requestHeaders:{...r,...o},signal:n}),"addPullRequestReview","mutation",a)},changePullRequestAssignees(a,r,n){return t(o=>e.request({document:Yp,variables:a,requestHeaders:{...r,...o},signal:n}),"changePullRequestAssignees","mutation",a)},changePullRequestMilestone(a,r,n){return t(o=>e.request({document:Jp,variables:a,requestHeaders:{...r,...o},signal:n}),"changePullRequestMilestone","mutation",a)},addPullRequestToProject(a,r,n){return t(o=>e.request({document:Zp,variables:a,requestHeaders:{...r,...o},signal:n}),"addPullRequestToProject","mutation",a)},requestReview(a,r,n){return t(o=>e.request({document:Xp,variables:a,requestHeaders:{...r,...o},signal:n}),"requestReview","mutation",a)},mergePullRequest(a,r,n){return t(o=>e.request({document:el,variables:a,requestHeaders:{...r,...o},signal:n}),"mergePullRequest","mutation",a)},addPullRequestToMergeQueue(a,r,n){return t(o=>e.request({document:tl,variables:a,requestHeaders:{...r,...o},signal:n}),"addPullRequestToMergeQueue","mutation",a)},removePullRequestFromMergeQueue(a,r,n){return t(o=>e.request({document:al,variables:a,requestHeaders:{...r,...o},signal:n}),"removePullRequestFromMergeQueue","mutation",a)},enablePullRequestAutoMerge(a,r,n){return t(o=>e.request({document:rl,variables:a,requestHeaders:{...r,...o},signal:n}),"enablePullRequestAutoMerge","mutation",a)},disablePullRequestAutoMerge(a,r,n){return t(o=>e.request({document:nl,variables:a,requestHeaders:{...r,...o},signal:n}),"disablePullRequestAutoMerge","mutation",a)},createPullRequest(a,r,n){return t(o=>e.request({document:ol,variables:a,requestHeaders:{...r,...o},signal:n}),"createPullRequest","mutation",a)},initPullRequest(a,r,n){return t(o=>e.request({document:il,variables:a,requestHeaders:{...r,...o},signal:n}),"initPullRequest","mutation",a)},searchRepositories(a,r,n){return t(o=>e.request({document:sl,variables:a,requestHeaders:{...r,...o},signal:n}),"searchRepositories","query",a)},myLatestRepositories(a,r,n){return t(o=>e.request({document:ul,variables:a,requestHeaders:{...r,...o},signal:n}),"myLatestRepositories","query",a)},milestonesForRepository(a,r,n){return t(o=>e.request({document:pl,variables:a,requestHeaders:{...r,...o},signal:n}),"milestonesForRepository","query",a)},commentsForPullRequest(a,r,n){return t(o=>e.request({document:ll,variables:a,requestHeaders:{...r,...o},signal:n}),"commentsForPullRequest","query",a)},dataForRepository(a,r,n){return t(o=>e.request({document:cl,variables:a,requestHeaders:{...r,...o},signal:n}),"dataForRepository","query",a)},searchRepositoryBranches(a,r,n){return t(o=>e.request({document:yl,variables:a,requestHeaders:{...r,...o},signal:n}),"searchRepositoryBranches","query",a)},repositoryIssues(a,r,n){return t(o=>e.request({document:dl,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryIssues","query",a)},repositoryReleases(a,r,n){return t(o=>e.request({document:Sl,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryReleases","query",a)},addStar(a,r,n){return t(o=>e.request({document:bl,variables:a,requestHeaders:{...r,...o},signal:n}),"addStar","mutation",a)},removeStar(a,r,n){return t(o=>e.request({document:Il,variables:a,requestHeaders:{...r,...o},signal:n}),"removeStar","mutation",a)},myStarredRepositories(a,r,n){return t(o=>e.request({document:gl,variables:a,requestHeaders:{...r,...o},signal:n}),"myStarredRepositories","query",a)},getViewer(a,r,n){return t(o=>e.request({document:Ml,variables:a,requestHeaders:{...r,...o},signal:n}),"getViewer","query",a)},getViewerStats(a,r,n){return t(o=>e.request({document:ml,variables:a,requestHeaders:{...r,...o},signal:n}),"getViewerStats","query",a)},getViewerStatsDetails(a,r,n){return t(o=>e.request({document:Rl,variables:a,requestHeaders:{...r,...o},signal:n}),"getViewerStatsDetails","query",a)}}}var Io=require("@raycast/api");function go(e){return e.stateReason==="NOT_PLANNED"?{icon:{source:"skip.svg",tintColor:Ue.Color.SecondaryText},text:"Closed as not planned",color:Ue.Color.Purple}:e.stateReason==="COMPLETED"?{icon:{source:"issue-closed.svg",tintColor:Ue.Color.Purple},text:"Closed as completed",color:Ue.Color.Purple}:e.closed?{icon:{source:"issue-closed.svg",tintColor:Ue.Color.Purple},text:"Closed",color:Ue.Color.Purple}:{icon:{source:"issue-open.svg",tintColor:Ue.Color.Green},text:"Open",color:Ue.Color.Green}}var Mo=[{title:"Newest",value:"sort:created-desc"},{title:"Oldest",value:"sort:created-asc"},{title:"Most Commented",value:"sort:comments-desc"},{title:"Least Commented",value:"sort:comments-asc"},{title:"Recently Updated",value:"sort:updated-desc"},{title:"Least Recently Updated",value:"sort:updated-asc"},{title:"Best Match",value:"sort:relevance-desc"},{title:"\u{1F44D}",value:"sort:reactions-+1-desc"},{title:"\u{1F44E}",value:"sort:reactions--1-desc"},{title:"\u{1F604}",value:"sort:reactions-smile-desc"},{title:"\u{1F389}",value:"sort:reactions-tada-desc"},{title:"\u{1F641}",value:"sort:reactions-thinking_face-desc"},{title:"\u2764\uFE0F",value:"sort:reactions-heart-desc"},{title:"\u{1F680}",value:"sort:reactions-rocket-desc"},{title:"\u{1F440}",value:"sort:reactions-eyes-desc"}],mo="sort:updated-desc";var si=T(Rt());var ti=require("@octokit/rest"),ai=require("@raycast/api"),ri=T(Rt());var xa=JSON;var Ro=e=>e.toUpperCase(),Ao=e=>{let t={};return e.forEach((a,r)=>{t[r]=a}),t};var fo=(e,t,a)=>e.document?e:{document:e,variables:t,requestHeaders:a,signal:void 0},Po=(e,t,a)=>e.query?e:{query:e,variables:t,requestHeaders:a,signal:void 0},Eo=(e,t)=>e.documents?e:{documents:e,requestHeaders:t,signal:void 0};var _a=require("graphql"),Co=e=>{let t,a=e.definitions.filter(r=>r.kind==="OperationDefinition");return a.length===1&&(t=a[0]?.name?.value),t},Je=e=>{if(typeof e=="string"){let a;try{let r=(0,_a.parse)(e);a=Co(r)}catch{}return{query:e,operationName:a}}let t=Co(e);return{query:(0,_a.print)(e),operationName:t}};var Ze=class e extends Error{constructor(t,a){let r=`${e.extractMessage(t)}: ${JSON.stringify({response:t,request:a})}`;super(r),Object.setPrototypeOf(this,e.prototype),this.response=t,this.request=a,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,e)}static extractMessage(t){return t.errors?.[0]?.message??`GraphQL Error (Code: ${t.status})`}};var je=T(Ot(),1);var Pl="connection_init",El="connection_ack",Do="ping",xo="pong",Cl="subscribe",hl="next",Dl="error",_o="complete",Fe=class e{get type(){return this._type}get id(){return this._id}get payload(){return this._payload}constructor(t,a,r){this._type=t,this._payload=a,this._id=r}get text(){let t={type:this.type};return this.id!=null&&this.id!=null&&(t.id=this.id),this.payload!=null&&this.payload!=null&&(t.payload=this.payload),JSON.stringify(t)}static parse(t,a){let{type:r,payload:n,id:o}=JSON.parse(t);return new e(r,a(n),o)}},Ua=class{constructor(t,{onInit:a,onAcknowledged:r,onPing:n,onPong:o}){this.socketState={acknowledged:!1,lastRequestId:0,subscriptions:{}},this.socket=t,t.addEventListener("open",async u=>{this.socketState.acknowledged=!1,this.socketState.subscriptions={},t.send(_l(a?await a():null).text)}),t.addEventListener("close",u=>{this.socketState.acknowledged=!1,this.socketState.subscriptions={}}),t.addEventListener("error",u=>{console.error(u)}),t.addEventListener("message",u=>{try{let i=xl(u.data);switch(i.type){case El:{this.socketState.acknowledged?console.warn("Duplicate CONNECTION_ACK message ignored"):(this.socketState.acknowledged=!0,r&&r(i.payload));return}case Do:{n?n(i.payload).then(y=>t.send(ho(y).text)):t.send(ho(null).text);return}case xo:{o&&o(i.payload);return}}if(!this.socketState.acknowledged||i.id===void 0||i.id===null||!this.socketState.subscriptions[i.id])return;let{query:s,variables:p,subscriber:c}=this.socketState.subscriptions[i.id];switch(i.type){case hl:{!i.payload.errors&&i.payload.data&&c.next&&c.next(i.payload.data),i.payload.errors&&c.error&&c.error(new Ze({...i.payload,status:200},{query:s,variables:p}));return}case Dl:{c.error&&c.error(new Ze({errors:i.payload,status:200},{query:s,variables:p}));return}case _o:{c.complete&&c.complete(),delete this.socketState.subscriptions[i.id];return}}}catch(i){console.error(i),t.close(1006)}t.close(4400,"Unknown graphql-ws message.")})}makeSubscribe(t,a,r,n){let o=(this.socketState.lastRequestId++).toString();return this.socketState.subscriptions[o]={query:t,variables:n,subscriber:r},this.socket.send(vl(o,{query:t,operationName:a,variables:n}).text),()=>{this.socket.send(Tl(o).text),delete this.socketState.subscriptions[o]}}rawRequest(t,a){return new Promise((r,n)=>{let o;this.rawSubscribe(t,{next:(u,i)=>o={data:u,extensions:i},error:n,complete:()=>r(o)},a)})}request(t,a){return new Promise((r,n)=>{let o;this.subscribe(t,{next:u=>o=u,error:n,complete:()=>r(o)},a)})}subscribe(t,a,r){let{query:n,operationName:o}=Je(t);return this.makeSubscribe(n,o,a,r)}rawSubscribe(t,a,r){return this.makeSubscribe(t,void 0,a,r)}ping(t){this.socket.send(Ul(t).text)}close(){this.socket.close(1e3)}};Ua.PROTOCOL="graphql-transport-ws";function xl(e,t=a=>a){return Fe.parse(e,t)}function _l(e){return new Fe(Pl,e)}function Ul(e){return new Fe(Do,e,void 0)}function ho(e){return new Fe(xo,e,void 0)}function vl(e,t){return new Fe(Cl,t,e)}function Tl(e){return new Fe(_o,void 0,e)}var ft=e=>{let t={};return e&&(typeof Headers<"u"&&e instanceof Headers||je&&je.Headers&&e instanceof je.Headers?t=Ao(e):Array.isArray(e)?e.forEach(([a,r])=>{a&&r!==void 0&&(t[a]=r)}):t=e),t},Uo=e=>e.replace(/([\s,]|#[^\n\r]+)+/g," ").trim(),wl=e=>{if(!Array.isArray(e.query)){let r=e,n=[`query=${encodeURIComponent(Uo(r.query))}`];return e.variables&&n.push(`variables=${encodeURIComponent(r.jsonSerializer.stringify(r.variables))}`),r.operationName&&n.push(`operationName=${encodeURIComponent(r.operationName)}`),n.join("&")}if(typeof e.variables<"u"&&!Array.isArray(e.variables))throw new Error("Cannot create query with given variable type, array expected");let t=e,a=e.query.reduce((r,n,o)=>(r.push({query:Uo(n),variables:t.variables?t.jsonSerializer.stringify(t.variables[o]):void 0}),r),[]);return`query=${encodeURIComponent(t.jsonSerializer.stringify(a))}`},Ol=e=>async t=>{let{url:a,query:r,variables:n,operationName:o,fetch:u,fetchOptions:i,middleware:s}=t,p={...t.headers},c="",y;e==="POST"?(y=Bl(r,n,o,i.jsonSerializer),typeof y=="string"&&(p["Content-Type"]="application/json")):c=wl({query:r,variables:n,operationName:o,jsonSerializer:i.jsonSerializer??xa});let b={method:e,headers:p,body:y,...i},M=a,l=b;if(s){let S=await Promise.resolve(s({...b,url:a,operationName:o,variables:n})),{url:d,...I}=S;M=d,l=I}return c&&(M=`${M}?${c}`),await u(M,l)},va=class{constructor(t,a={}){this.url=t,this.requestConfig=a,this.rawRequest=async(...r)=>{let[n,o,u]=r,i=Po(n,o,u),{headers:s,fetch:p=je.default,method:c="POST",requestMiddleware:y,responseMiddleware:b,...M}=this.requestConfig,{url:l}=this;i.signal!==void 0&&(M.signal=i.signal);let{operationName:S}=Je(i.query);return hr({url:l,query:i.query,variables:i.variables,headers:{...ft(Dr(s)),...ft(i.requestHeaders)},operationName:S,fetch:p,method:c,fetchOptions:M,middleware:y}).then(d=>(b&&b(d),d)).catch(d=>{throw b&&b(d),d})}}async request(t,...a){let[r,n]=a,o=fo(t,r,n),{headers:u,fetch:i=je.default,method:s="POST",requestMiddleware:p,responseMiddleware:c,...y}=this.requestConfig,{url:b}=this;o.signal!==void 0&&(y.signal=o.signal);let{query:M,operationName:l}=Je(o.document);return hr({url:b,query:M,variables:o.variables,headers:{...ft(Dr(u)),...ft(o.requestHeaders)},operationName:l,fetch:i,method:s,fetchOptions:y,middleware:p}).then(S=>(c&&c(S),S.data)).catch(S=>{throw c&&c(S),S})}batchRequests(t,a){let r=Eo(t,a),{headers:n,...o}=this.requestConfig;r.signal!==void 0&&(o.signal=r.signal);let u=r.documents.map(({document:s})=>Je(s).query),i=r.documents.map(({variables:s})=>s);return hr({url:this.url,query:u,variables:i,headers:{...ft(Dr(n)),...ft(r.requestHeaders)},operationName:void 0,fetch:this.requestConfig.fetch??je.default,method:this.requestConfig.method||"POST",fetchOptions:o,middleware:this.requestConfig.requestMiddleware}).then(s=>(this.requestConfig.responseMiddleware&&this.requestConfig.responseMiddleware(s),s.data)).catch(s=>{throw this.requestConfig.responseMiddleware&&this.requestConfig.responseMiddleware(s),s})}setHeaders(t){return this.requestConfig.headers=t,this}setHeader(t,a){let{headers:r}=this.requestConfig;return r?r[t]=a:this.requestConfig.headers={[t]:a},this}setEndpoint(t){return this.url=t,this}},hr=async e=>{let{query:t,variables:a,fetchOptions:r}=e,n=Ol(Ro(e.method??"post")),o=Array.isArray(e.query),u=await n(e),i=await Ll(u,r.jsonSerializer??xa),s=Array.isArray(i)?!i.some(({data:c})=>!c):!!i.data,p=Array.isArray(i)||!i.errors||Array.isArray(i.errors)&&!i.errors.length||r.errorPolicy==="all"||r.errorPolicy==="ignore";if(u.ok&&p&&s){let{errors:c,...y}=(Array.isArray(i),i),b=r.errorPolicy==="ignore"?y:i;return{...o?{data:b}:b,headers:u.headers,status:u.status}}else{let c=typeof i=="string"?{error:i}:i;throw new Ze({...c,status:u.status,headers:u.headers},{query:t,variables:a})}};var Bl=(e,t,a,r)=>{let n=r??xa;if(!Array.isArray(e))return n.stringify({query:e,variables:t,operationName:a});if(typeof t<"u"&&!Array.isArray(t))throw new Error("Cannot create request body with given variable type, array expected");let o=e.reduce((u,i,s)=>(u.push({query:i,variables:t?t[s]:void 0}),u),[]);return n.stringify(o)},Ll=async(e,t)=>{let a;return e.headers.forEach((r,n)=>{n.toLowerCase()==="content-type"&&(a=r)}),a&&(a.toLowerCase().startsWith("application/json")||a.toLowerCase().startsWith("application/graphql+json")||a.toLowerCase().startsWith("application/graphql-response+json"))?t.parse(await e.text()):e.text()},Dr=e=>typeof e=="function"?e():e;var Xo=T(require("node:http"),1),ei=T(require("node:https"),1),tt=T(require("node:zlib"),1),te=T(require("node:stream"),1),Wt=require("node:buffer");var jt={};at(jt,{default:()=>Ta.default});H(jt,require("data-uri-to-buffer"));var Ta=T(require("data-uri-to-buffer"));var ue=T(require("node:stream"),1),Te=require("node:util"),X=require("node:buffer");var zt={};at(zt,{default:()=>wa.default});H(zt,require("fetch-blob"));var wa=T(require("fetch-blob"));Oa();var ve=class extends Error{constructor(t,a){super(t),Error.captureStackTrace(this,this.constructor),this.type=a}get name(){return this.constructor.name}get[Symbol.toStringTag](){return this.constructor.name}};var $=class extends ve{constructor(t,a,r){super(t,a),r&&(this.code=this.errno=r.code,this.erroredSysCall=r.syscall)}};var Ba=Symbol.toStringTag,xr=e=>typeof e=="object"&&typeof e.append=="function"&&typeof e.delete=="function"&&typeof e.get=="function"&&typeof e.getAll=="function"&&typeof e.has=="function"&&typeof e.set=="function"&&typeof e.sort=="function"&&e[Ba]==="URLSearchParams",Ht=e=>e&&typeof e=="object"&&typeof e.arrayBuffer=="function"&&typeof e.type=="string"&&typeof e.stream=="function"&&typeof e.constructor=="function"&&/^(Blob|File)$/.test(e[Ba]),To=e=>typeof e=="object"&&(e[Ba]==="AbortSignal"||e[Ba]==="EventTarget"),wo=(e,t)=>{let a=new URL(t).hostname,r=new URL(e).hostname;return a===r||a.endsWith(`.${r}`)},Oo=(e,t)=>{let a=new URL(t).protocol,r=new URL(e).protocol;return a===r};var Hl=(0,Te.promisify)(ue.default.pipeline),Q=Symbol("Body internals"),fe=class{constructor(t,{size:a=0}={}){let r=null;t===null?t=null:xr(t)?t=X.Buffer.from(t.toString()):Ht(t)||X.Buffer.isBuffer(t)||(Te.types.isAnyArrayBuffer(t)?t=X.Buffer.from(t):ArrayBuffer.isView(t)?t=X.Buffer.from(t.buffer,t.byteOffset,t.byteLength):t instanceof ue.default||(t instanceof G.FormData?(t=(0,G.formDataToBlob)(t),r=t.type.split("=")[1]):t=X.Buffer.from(String(t))));let n=t;X.Buffer.isBuffer(t)?n=ue.default.Readable.from(t):Ht(t)&&(n=ue.default.Readable.from(t.stream())),this[Q]={body:t,stream:n,boundary:r,disturbed:!1,error:null},this.size=a,t instanceof ue.default&&t.on("error",o=>{let u=o instanceof ve?o:new $(`Invalid response body while trying to fetch ${this.url}: ${o.message}`,"system",o);this[Q].error=u})}get body(){return this[Q].stream}get bodyUsed(){return this[Q].disturbed}async arrayBuffer(){let{buffer:t,byteOffset:a,byteLength:r}=await vr(this);return t.slice(a,a+r)}async formData(){let t=this.headers.get("content-type");if(t.startsWith("application/x-www-form-urlencoded")){let r=new G.FormData,n=new URLSearchParams(await this.text());for(let[o,u]of n)r.append(o,u);return r}let{toFormData:a}=await Promise.resolve().then(()=>(No(),qo));return a(this.body,t)}async blob(){let t=this.headers&&this.headers.get("content-type")||this[Q].body&&this[Q].body.type||"",a=await this.arrayBuffer();return new wa.default([a],{type:t})}async json(){let t=await this.text();return JSON.parse(t)}async text(){let t=await vr(this);return new TextDecoder().decode(t)}buffer(){return vr(this)}};fe.prototype.buffer=(0,Te.deprecate)(fe.prototype.buffer,"Please use 'response.arrayBuffer()' instead of 'response.buffer()'","node-fetch#buffer");Object.defineProperties(fe.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0},data:{get:(0,Te.deprecate)(()=>{},"data doesn't exist, use json(), text(), arrayBuffer(), or body instead","https://github.com/node-fetch/node-fetch/issues/1000 (response)")}});async function vr(e){if(e[Q].disturbed)throw new TypeError(`body used already for: ${e.url}`);if(e[Q].disturbed=!0,e[Q].error)throw e[Q].error;let{body:t}=e;if(t===null)return X.Buffer.alloc(0);if(!(t instanceof ue.default))return X.Buffer.alloc(0);let a=[],r=0;try{for await(let n of t){if(e.size>0&&r+n.length>e.size){let o=new $(`content size at ${e.url} over limit: ${e.size}`,"max-size");throw t.destroy(o),o}r+=n.length,a.push(n)}}catch(n){throw n instanceof ve?n:new $(`Invalid response body while trying to fetch ${e.url}: ${n.message}`,"system",n)}if(t.readableEnded===!0||t._readableState.ended===!0)try{return a.every(n=>typeof n=="string")?X.Buffer.from(a.join("")):X.Buffer.concat(a,r)}catch(n){throw new $(`Could not create Buffer from response body for ${e.url}: ${n.message}`,"system",n)}else throw new $(`Premature close of server response while trying to fetch ${e.url}`)}var Pt=(e,t)=>{let a,r,{body:n}=e[Q];if(e.bodyUsed)throw new Error("cannot clone body after it is used");return n instanceof ue.default&&typeof n.getBoundary!="function"&&(a=new ue.PassThrough({highWaterMark:t}),r=new ue.PassThrough({highWaterMark:t}),n.pipe(a),n.pipe(r),e[Q].stream=a,n=r),n},Gl=(0,Te.deprecate)(e=>e.getBoundary(),"form-data doesn't follow the spec and requires special treatment. Use alternative package","https://github.com/node-fetch/node-fetch/issues/1167"),Na=(e,t)=>e===null?null:typeof e=="string"?"text/plain;charset=UTF-8":xr(e)?"application/x-www-form-urlencoded;charset=UTF-8":Ht(e)?e.type||null:X.Buffer.isBuffer(e)||Te.types.isAnyArrayBuffer(e)||ArrayBuffer.isView(e)?null:e instanceof G.FormData?`multipart/form-data; boundary=${t[Q].boundary}`:e&&typeof e.getBoundary=="function"?`multipart/form-data;boundary=${Gl(e)}`:e instanceof ue.default?null:"text/plain;charset=UTF-8",Vo=e=>{let{body:t}=e[Q];return t===null?0:Ht(t)?t.size:X.Buffer.isBuffer(t)?t.length:t&&typeof t.getLengthSync=="function"&&t.hasKnownLength&&t.hasKnownLength()?t.getLengthSync():null},ko=async(e,{body:t})=>{t===null?e.end():await Hl(t,e)};var Tr=require("node:util"),$t=T(require("node:http"),1),Va=typeof $t.default.validateHeaderName=="function"?$t.default.validateHeaderName:e=>{if(!/^[\^`\-\w!#$%&'*+.|~]+$/.test(e)){let t=new TypeError(`Header name must be a valid HTTP token [${e}]`);throw Object.defineProperty(t,"code",{value:"ERR_INVALID_HTTP_TOKEN"}),t}},wr=typeof $t.default.validateHeaderValue=="function"?$t.default.validateHeaderValue:(e,t)=>{if(/[^\t\u0020-\u007E\u0080-\u00FF]/.test(t)){let a=new TypeError(`Invalid character in header content ["${e}"]`);throw Object.defineProperty(a,"code",{value:"ERR_INVALID_CHAR"}),a}},ee=class e extends URLSearchParams{constructor(t){let a=[];if(t instanceof e){let r=t.raw();for(let[n,o]of Object.entries(r))a.push(...o.map(u=>[n,u]))}else if(t!=null)if(typeof t=="object"&&!Tr.types.isBoxedPrimitive(t)){let r=t[Symbol.iterator];if(r==null)a.push(...Object.entries(t));else{if(typeof r!="function")throw new TypeError("Header pairs must be iterable");a=[...t].map(n=>{if(typeof n!="object"||Tr.types.isBoxedPrimitive(n))throw new TypeError("Each header pair must be an iterable object");return[...n]}).map(n=>{if(n.length!==2)throw new TypeError("Each header pair must be a name/value tuple");return[...n]})}}else throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");return a=a.length>0?a.map(([r,n])=>(Va(r),wr(r,String(n)),[String(r).toLowerCase(),String(n)])):void 0,super(a),new Proxy(this,{get(r,n,o){switch(n){case"append":case"set":return(u,i)=>(Va(u),wr(u,String(i)),URLSearchParams.prototype[n].call(r,String(u).toLowerCase(),String(i)));case"delete":case"has":case"getAll":return u=>(Va(u),URLSearchParams.prototype[n].call(r,String(u).toLowerCase()));case"keys":return()=>(r.sort(),new Set(URLSearchParams.prototype.keys.call(r)).keys());default:return Reflect.get(r,n,o)}}})}get[Symbol.toStringTag](){return this.constructor.name}toString(){return Object.prototype.toString.call(this)}get(t){let a=this.getAll(t);if(a.length===0)return null;let r=a.join(", ");return/^content-encoding$/i.test(t)&&(r=r.toLowerCase()),r}forEach(t,a=void 0){for(let r of this.keys())Reflect.apply(t,a,[this.get(r),r,this])}*values(){for(let t of this.keys())yield this.get(t)}*entries(){for(let t of this.keys())yield[t,this.get(t)]}[Symbol.iterator](){return this.entries()}raw(){return[...this.keys()].reduce((t,a)=>(t[a]=this.getAll(a),t),{})}[Symbol.for("nodejs.util.inspect.custom")](){return[...this.keys()].reduce((t,a)=>{let r=this.getAll(a);return a==="host"?t[a]=r[0]:t[a]=r.length>1?r:r[0],t},{})}};Object.defineProperties(ee.prototype,["get","entries","forEach","values"].reduce((e,t)=>(e[t]={enumerable:!0},e),{}));function Fo(e=[]){return new ee(e.reduce((t,a,r,n)=>(r%2===0&&t.push(n.slice(r,r+2)),t),[]).filter(([t,a])=>{try{return Va(t),wr(t,String(a)),!0}catch{return!1}}))}var $l=new Set([301,302,303,307,308]),ka=e=>$l.has(e);var ye=Symbol("Response internals"),pe=class e extends fe{constructor(t=null,a={}){super(t,a);let r=a.status!=null?a.status:200,n=new ee(a.headers);if(t!==null&&!n.has("Content-Type")){let o=Na(t,this);o&&n.append("Content-Type",o)}this[ye]={type:"default",url:a.url,status:r,statusText:a.statusText||"",headers:n,counter:a.counter,highWaterMark:a.highWaterMark}}get type(){return this[ye].type}get url(){return this[ye].url||""}get status(){return this[ye].status}get ok(){return this[ye].status>=200&&this[ye].status<300}get redirected(){return this[ye].counter>0}get statusText(){return this[ye].statusText}get headers(){return this[ye].headers}get highWaterMark(){return this[ye].highWaterMark}clone(){return new e(Pt(this,this.highWaterMark),{type:this.type,url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected,size:this.size,highWaterMark:this.highWaterMark})}static redirect(t,a=302){if(!ka(a))throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');return new e(null,{headers:{location:new URL(t).toString()},status:a})}static error(){let t=new e(null,{status:0,statusText:""});return t[ye].type="error",t}static json(t=void 0,a={}){let r=JSON.stringify(t);if(r===void 0)throw new TypeError("data is not JSON serializable");let n=new ee(a&&a.headers);return n.has("content-type")||n.set("content-type","application/json"),new e(r,{...a,headers:n})}get[Symbol.toStringTag](){return"Response"}};Object.defineProperties(pe.prototype,{type:{enumerable:!0},url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}});var Yo=require("node:url"),Jo=require("node:util");var jo=e=>{if(e.search)return e.search;let t=e.href.length-1,a=e.hash||(e.href[t]==="#"?"#":"");return e.href[t-a.length]==="?"?"?":""};var Ho=require("node:net");function zo(e,t=!1){return e==null||(e=new URL(e),/^(about|blob|data):$/.test(e.protocol))?"no-referrer":(e.username="",e.password="",e.hash="",t&&(e.pathname="",e.search=""),e)}var Go=new Set(["","no-referrer","no-referrer-when-downgrade","same-origin","origin","strict-origin","origin-when-cross-origin","strict-origin-when-cross-origin","unsafe-url"]),$o="strict-origin-when-cross-origin";function Qo(e){if(!Go.has(e))throw new TypeError(`Invalid referrerPolicy: ${e}`);return e}function Ql(e){if(/^(http|ws)s:$/.test(e.protocol))return!0;let t=e.host.replace(/(^\[)|(]$)/g,""),a=(0,Ho.isIP)(t);return a===4&&/^127\./.test(t)||a===6&&/^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(t)?!0:e.host==="localhost"||e.host.endsWith(".localhost")?!1:e.protocol==="file:"}function Et(e){return/^about:(blank|srcdoc)$/.test(e)||e.protocol==="data:"||/^(blob|filesystem):$/.test(e.protocol)?!0:Ql(e)}function Wo(e,{referrerURLCallback:t,referrerOriginCallback:a}={}){if(e.referrer==="no-referrer"||e.referrerPolicy==="")return null;let r=e.referrerPolicy;if(e.referrer==="about:client")return"no-referrer";let n=e.referrer,o=zo(n),u=zo(n,!0);o.toString().length>4096&&(o=u),t&&(o=t(o)),a&&(u=a(u));let i=new URL(e.url);switch(r){case"no-referrer":return"no-referrer";case"origin":return u;case"unsafe-url":return o;case"strict-origin":return Et(o)&&!Et(i)?"no-referrer":u.toString();case"strict-origin-when-cross-origin":return o.origin===i.origin?o:Et(o)&&!Et(i)?"no-referrer":u;case"same-origin":return o.origin===i.origin?o:"no-referrer";case"origin-when-cross-origin":return o.origin===i.origin?o:u;case"no-referrer-when-downgrade":return Et(o)&&!Et(i)?"no-referrer":o;default:throw new TypeError(`Invalid referrerPolicy: ${r}`)}}function Ko(e){let t=(e.get("referrer-policy")||"").split(/[,\s]+/),a="";for(let r of t)r&&Go.has(r)&&(a=r);return a}var L=Symbol("Request internals"),Qt=e=>typeof e=="object"&&typeof e[L]=="object",Wl=(0,Jo.deprecate)(()=>{},".data is not a valid RequestInit property, use .body instead","https://github.com/node-fetch/node-fetch/issues/1000 (request)"),et=class e extends fe{constructor(t,a={}){let r;if(Qt(t)?r=new URL(t.url):(r=new URL(t),t={}),r.username!==""||r.password!=="")throw new TypeError(`${r} is an url with embedded credentials.`);let n=a.method||t.method||"GET";if(/^(delete|get|head|options|post|put)$/i.test(n)&&(n=n.toUpperCase()),!Qt(a)&&"data"in a&&Wl(),(a.body!=null||Qt(t)&&t.body!==null)&&(n==="GET"||n==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");let o=a.body?a.body:Qt(t)&&t.body!==null?Pt(t):null;super(o,{size:a.size||t.size||0});let u=new ee(a.headers||t.headers||{});if(o!==null&&!u.has("Content-Type")){let p=Na(o,this);p&&u.set("Content-Type",p)}let i=Qt(t)?t.signal:null;if("signal"in a&&(i=a.signal),i!=null&&!To(i))throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");let s=a.referrer==null?t.referrer:a.referrer;if(s==="")s="no-referrer";else if(s){let p=new URL(s);s=/^about:(\/\/)?client$/.test(p)?"client":p}else s=void 0;this[L]={method:n,redirect:a.redirect||t.redirect||"follow",headers:u,parsedURL:r,signal:i,referrer:s},this.follow=a.follow===void 0?t.follow===void 0?20:t.follow:a.follow,this.compress=a.compress===void 0?t.compress===void 0?!0:t.compress:a.compress,this.counter=a.counter||t.counter||0,this.agent=a.agent||t.agent,this.highWaterMark=a.highWaterMark||t.highWaterMark||16384,this.insecureHTTPParser=a.insecureHTTPParser||t.insecureHTTPParser||!1,this.referrerPolicy=a.referrerPolicy||t.referrerPolicy||""}get method(){return this[L].method}get url(){return(0,Yo.format)(this[L].parsedURL)}get headers(){return this[L].headers}get redirect(){return this[L].redirect}get signal(){return this[L].signal}get referrer(){if(this[L].referrer==="no-referrer")return"";if(this[L].referrer==="client")return"about:client";if(this[L].referrer)return this[L].referrer.toString()}get referrerPolicy(){return this[L].referrerPolicy}set referrerPolicy(t){this[L].referrerPolicy=Qo(t)}clone(){return new e(this)}get[Symbol.toStringTag](){return"Request"}};Object.defineProperties(et.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0},referrer:{enumerable:!0},referrerPolicy:{enumerable:!0}});var Zo=e=>{let{parsedURL:t}=e[L],a=new ee(e[L].headers);a.has("Accept")||a.set("Accept","*/*");let r=null;if(e.body===null&&/^(post|put)$/i.test(e.method)&&(r="0"),e.body!==null){let i=Vo(e);typeof i=="number"&&!Number.isNaN(i)&&(r=String(i))}r&&a.set("Content-Length",r),e.referrerPolicy===""&&(e.referrerPolicy=$o),e.referrer&&e.referrer!=="no-referrer"?e[L].referrer=Wo(e):e[L].referrer="no-referrer",e[L].referrer instanceof URL&&a.set("Referer",e.referrer),a.has("User-Agent")||a.set("User-Agent","node-fetch"),e.compress&&!a.has("Accept-Encoding")&&a.set("Accept-Encoding","gzip, deflate, br");let{agent:n}=e;typeof n=="function"&&(n=n(t));let o=jo(t),u={path:t.pathname+o,method:e.method,headers:a[Symbol.for("nodejs.util.inspect.custom")](),insecureHTTPParser:e.insecureHTTPParser,agent:n};return{parsedURL:t,options:u}};var Fa=class extends ve{constructor(t,a="aborted"){super(t,a)}};Oa();_r();var Kl=new Set(["data:","http:","https:"]);async function ja(e,t){return new Promise((a,r)=>{let n=new et(e,t),{parsedURL:o,options:u}=Zo(n);if(!Kl.has(o.protocol))throw new TypeError(`node-fetch cannot load ${e}. URL scheme "${o.protocol.replace(/:$/,"")}" is not supported.`);if(o.protocol==="data:"){let l=(0,Ta.default)(n.url),S=new pe(l,{headers:{"Content-Type":l.typeFull}});a(S);return}let i=(o.protocol==="https:"?ei.default:Xo.default).request,{signal:s}=n,p=null,c=()=>{let l=new Fa("The operation was aborted.");r(l),n.body&&n.body instanceof te.default.Readable&&n.body.destroy(l),!(!p||!p.body)&&p.body.emit("error",l)};if(s&&s.aborted){c();return}let y=()=>{c(),M()},b=i(o.toString(),u);s&&s.addEventListener("abort",y);let M=()=>{b.abort(),s&&s.removeEventListener("abort",y)};b.on("error",l=>{r(new $(`request to ${n.url} failed, reason: ${l.message}`,"system",l)),M()}),Yl(b,l=>{p&&p.body&&p.body.destroy(l)}),process.version<"v14"&&b.on("socket",l=>{let S;l.prependListener("end",()=>{S=l._eventsCount}),l.prependListener("close",d=>{if(p&&S<l._eventsCount&&!d){let I=new Error("Premature close");I.code="ERR_STREAM_PREMATURE_CLOSE",p.body.emit("error",I)}})}),b.on("response",l=>{b.setTimeout(0);let S=Fo(l.rawHeaders);if(ka(l.statusCode)){let g=S.get("Location"),P=null;try{P=g===null?null:new URL(g,n.url)}catch{if(n.redirect!=="manual"){r(new $(`uri requested responds with an invalid redirect URL: ${g}`,"invalid-redirect")),M();return}}switch(n.redirect){case"error":r(new $(`uri requested responds with a redirect, redirect mode is set to error: ${n.url}`,"no-redirect")),M();return;case"manual":break;case"follow":{if(P===null)break;if(n.counter>=n.follow){r(new $(`maximum redirect reached at: ${n.url}`,"max-redirect")),M();return}let f={headers:new ee(n.headers),follow:n.follow,counter:n.counter+1,agent:n.agent,compress:n.compress,method:n.method,body:Pt(n),signal:n.signal,size:n.size,referrer:n.referrer,referrerPolicy:n.referrerPolicy};if(!wo(n.url,P)||!Oo(n.url,P))for(let U of["authorization","www-authenticate","cookie","cookie2"])f.headers.delete(U);if(l.statusCode!==303&&n.body&&t.body instanceof te.default.Readable){r(new $("Cannot follow redirect with body being a readable stream","unsupported-redirect")),M();return}(l.statusCode===303||(l.statusCode===301||l.statusCode===302)&&n.method==="POST")&&(f.method="GET",f.body=void 0,f.headers.delete("content-length"));let D=Ko(S);D&&(f.referrerPolicy=D),a(ja(new et(P,f))),M();return}default:return r(new TypeError(`Redirect option '${n.redirect}' is not a valid value of RequestRedirect`))}}s&&l.once("end",()=>{s.removeEventListener("abort",y)});let d=(0,te.pipeline)(l,new te.PassThrough,g=>{g&&r(g)});process.version<"v12.10"&&l.on("aborted",y);let I={url:n.url,status:l.statusCode,statusText:l.statusMessage,headers:S,size:n.size,counter:n.counter,highWaterMark:n.highWaterMark},A=S.get("Content-Encoding");if(!n.compress||n.method==="HEAD"||A===null||l.statusCode===204||l.statusCode===304){p=new pe(d,I),a(p);return}let R={flush:tt.default.Z_SYNC_FLUSH,finishFlush:tt.default.Z_SYNC_FLUSH};if(A==="gzip"||A==="x-gzip"){d=(0,te.pipeline)(d,tt.default.createGunzip(R),g=>{g&&r(g)}),p=new pe(d,I),a(p);return}if(A==="deflate"||A==="x-deflate"){let g=(0,te.pipeline)(l,new te.PassThrough,P=>{P&&r(P)});g.once("data",P=>{(P[0]&15)===8?d=(0,te.pipeline)(d,tt.default.createInflate(),f=>{f&&r(f)}):d=(0,te.pipeline)(d,tt.default.createInflateRaw(),f=>{f&&r(f)}),p=new pe(d,I),a(p)}),g.once("end",()=>{p||(p=new pe(d,I),a(p))});return}if(A==="br"){d=(0,te.pipeline)(d,tt.default.createBrotliDecompress(),g=>{g&&r(g)}),p=new pe(d,I),a(p);return}p=new pe(d,I),a(p)}),ko(b,n).catch(r)})}function Yl(e,t){let a=Wt.Buffer.from(`0\r
\r
`),r=!1,n=!1,o;e.on("response",u=>{let{headers:i}=u;r=i["transfer-encoding"]==="chunked"&&!i["content-length"]}),e.on("socket",u=>{let i=()=>{if(r&&!n){let p=new Error("Premature close");p.code="ERR_STREAM_PREMATURE_CLOSE",t(p)}},s=p=>{n=Wt.Buffer.compare(p.slice(-5),a)===0,!n&&o&&(n=Wt.Buffer.compare(o.slice(-3),a.slice(0,3))===0&&Wt.Buffer.compare(p.slice(-2),a.slice(3))===0),o=p};u.prependListener("close",i),u.on("data",s),e.on("close",()=>{u.removeListener("close",i),u.removeListener("data",s)})})}var Or=null,Br=null,ni=null,Jl=(0,ai.getPreferenceValues)();function Zl({token:e,type:t}){let a=t==="personal"?`token ${e}`:`bearer ${e}`;ni=e,Or=bo(new va("https://api.github.com/graphql",{headers:{authorization:a}})),Br=new ti.Octokit({auth:e,request:{fetch:ja}})}var oi=ri.OAuthService.github({personalAccessToken:Jl.personalAccessToken,scope:"notifications repo project read:org read:user read:packages",onAuthorize:Zl});function ii(){if(!Or||!Br)throw new Error("GitHub clients not initialized");return{github:Or,octokit:Br,token:ni}}var ui=(0,si.withAccessToken)(oi);var Si=T(Rt()),Ha=require("date-fns"),bi=require("lodash");var pi=require("@raycast/api"),Xl=require("lodash");function li(e,t,{suffix:a="s",withNumber:r=!1}={}){let n=`${t}${e!==1?a:""}`;return r?`${e} ${n}`:n}var za=require("node:child_process");var yi=require("node:util"),W=require("@raycast/api"),ec=T(Rt());var Vd=[{title:"github.dev",baseUrl:"https://github.dev/",icon:{source:"github-dev.svg",tintColor:W.Color.PrimaryText},shortcut:W.Keyboard.Shortcut.Common.Open},{title:"VS Code for the Web",baseUrl:"https://vscode.dev/github/",icon:{source:"vscode.svg",tintColor:W.Color.PrimaryText},shortcut:{macOS:{modifiers:["cmd"],key:"v"},Windows:{modifiers:["ctrl"],key:"v"}}},{title:"CodeSandbox",baseUrl:"https://codesandbox.io/s/github/",icon:{source:"codesandbox.svg",tintColor:W.Color.PrimaryText}},{title:"Replit",baseUrl:"https://repl.it/github/",icon:{source:"replit.svg",tintColor:W.Color.PrimaryText}},{title:"Gitpod",baseUrl:"https://gitpod.io/#https://github.com/",icon:{source:"gitpod.svg",tintColor:W.Color.PrimaryText}},{title:"Glitch",baseUrl:"https://glitch.com/edit/#!/import/github/",icon:{source:"glitch.svg",tintColor:W.Color.PrimaryText}},{title:"Sourcegraph",baseUrl:"https://sourcegraph.com/github.com/",icon:{source:"sourcegraph.svg",tintColor:W.Color.PrimaryText},shortcut:{macOS:{modifiers:["cmd"],key:"s"},Windows:{modifiers:["ctrl"],key:"s"}}},{title:"DeepWiki",baseUrl:"https://deepwiki.com/",icon:{source:"deepwiki.png"},shortcut:{macOS:{modifiers:["cmd"],key:"d"},Windows:{modifiers:["ctrl"],key:"d"}}},{title:"VS Code Remote Repositories",baseUrl:"vscode://GitHub.remotehub/open?url=https://github.com/",icon:{source:"vscode.svg",tintColor:W.Color.PrimaryText}}];var tc=[{title:"Relevance",value:""},{title:"Last Update",value:"sort:updated-desc"},{title:"Name",value:"sort:name-asc"},{title:"Stars",value:"sort:stars-desc"},{title:"Forks",value:"sort:forks-desc"}],ac=[{title:"Last Pushed",value:"pushed_at:desc"},{title:"Name",value:"name:asc"},{title:"Stars",value:"stargazers:desc"}],rc=[{title:"Recently Starred",value:"starred_at:desc"},{title:"Oldest Starred",value:"starred_at:asc"}],kd=tc[0].value,Fd=ac[0].value,jd=rc[0].value;var zd=(0,yi.promisify)(za.execFile);var Kt="\x1B",ci="\x07",Hd=new RegExp(`${Kt}][^${ci}${Kt}]*(?:${ci}|${Kt}\\\\)`,"g"),Gd=new RegExp(`${Kt}\\[[0-9;?]*[A-Za-z]`,"g"),$d=new RegExp(`${Kt}\\([0-9A-Za-z]`,"g");function di(e,t,a){if(a)return`repo:${a}`;let r=t.filter(Boolean);return e==="all"?"":e==="exclude"?r.map(n=>`-repo:${n}`).join(" "):r.map(n=>`repo:${n}`).join(" ")}function Ii({sortQuery:e,repository:t,showCreated:a,showAssigned:r,showMentioned:n,showRecentlyClosed:o,filterMode:u,repositoryList:i}){let{github:s}=ii(),{data:p,...c}=(0,Si.useCachedPromise)(async(R,g,P,f,D,U,K,q)=>{let re=`updated:>${(0,Ha.format)((0,Ha.subDays)(Date.now(),60),"yyyy-MM-dd")}`,E=di(K,q,R);return(await Promise.all([...P?["is:issue author:@me archived:false is:open"]:[],...U?["is:issue author:@me archived:false is:closed"]:[],...f?["is:issue assignee:@me archived:false is:open"]:[],...f&&U?["is:issue assignee:@me archived:false is:closed"]:[],...D?["is:issue mentions:@me archived:false is:open"]:[],...D&&U?["is:issue mentions:@me archived:false is:closed"]:[]].map(Pe=>s.searchIssues({query:`${Pe} ${g} ${re} ${E}`,numberOfItems:20})))).map(Pe=>Pe.search.nodes)},[t,e,a,r,n,o,u,i]),y,b,M,l,S,d;if(p){let R=0;a&&(y=p[R++]),o&&(b=p[R++]),r&&(M=p[R++],o&&(l=p[R++])),n&&(S=p[R++],o&&(d=p[R++]))}let I=(0,bi.uniqBy)([...b||[],...l||[],...d||[]],"id");return{data:[{title:"Created",issues:y},{title:"Assigned",issues:M},{title:"Mentioned",issues:S},{title:"Recently Closed",issues:I}].filter(R=>R.issues&&R.issues.length>0).map(R=>{let g=li(R.issues?.length??0,"issue",{withNumber:!0});return{...R,subtitle:g}}),...c}}var de=require("react/jsx-runtime");async function gi(){return(0,j.launchCommand)({name:"my-issues",type:j.LaunchType.UserInitiated})}function nc(){return oo({name:"maxitems"})}function oc(){let[e,t]=(0,Mi.useCachedState)("sort-query",mo,{cacheNamespace:"github-my-issue-menu"}),{showtext:a,showCreated:r,showAssigned:n,showMentioned:o,showRecentlyClosed:u,useUnreadIndicator:i,repositoryFilterMode:s,repositoryList:p}=(0,j.getPreferenceValues)(),{data:c,isLoading:y}=Ii({repository:null,sortQuery:e,showCreated:r,showAssigned:n,showMentioned:o,showRecentlyClosed:u,filterMode:s,repositoryList:p?.split(",").map(M=>M.trim())||[]}),b=c?.reduce((M,l)=>M+(l.issues??[]).length,0);return(0,de.jsxs)(ro,{title:a?`${b}`:void 0,icon:{source:`issue-open${i&&b>0?"-unread":""}.svg`,tintColor:j.Color.PrimaryText},isLoading:y,children:[c?.map(M=>(0,de.jsx)(Er,{title:M.title,maxChildren:nc(),moreElement:l=>(0,de.jsx)(At,{title:`... ${l} more`,onAction:()=>gi()}),emptyElement:(0,de.jsx)(At,{title:"No Issues"}),children:M.issues?.map(l=>{let S=go(l);return(0,de.jsx)(At,{title:`#${l.number} ${l.title}`,icon:{source:S.icon.source,tintColor:j.Color.PrimaryText},onAction:()=>(0,j.open)(l.url)},l.id)})},M.title)),(0,de.jsxs)(Er,{children:[(0,de.jsx)(At,{title:"Open My Issues",icon:j.Icon.AppWindowList,shortcut:j.Keyboard.Shortcut.Common.Open,onAction:()=>gi()}),(0,de.jsx)(so,{sortQuery:e,setSortQuery:t,data:Mo}),(0,de.jsx)(no,{})]})]})}var ic=ui(oc);
