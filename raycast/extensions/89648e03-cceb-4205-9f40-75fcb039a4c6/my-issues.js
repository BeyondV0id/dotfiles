"use strict";var Hi=Object.create;var ba=Object.defineProperty;var Gi=Object.getOwnPropertyDescriptor;var $i=Object.getOwnPropertyNames;var Qi=Object.getPrototypeOf,Wi=Object.prototype.hasOwnProperty;var Ir=(e,t,a)=>()=>{if(a)throw a[0];try{return e&&(t=e(e=0)),t}catch(n){throw a=[n],n}};var x=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(a){throw t=0,a}},dt=(e,t)=>{for(var a in t)ba(e,a,{get:t[a],enumerable:!0})},Sa=(e,t,a,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of $i(t))!Wi.call(e,r)&&r!==a&&ba(e,r,{get:()=>t[r],enumerable:!(n=Gi(t,r))||n.enumerable});return e},Y=(e,t,a)=>(Sa(e,t,"default"),a&&Sa(a,t,"default")),w=(e,t,a)=>(a=e!=null?Hi(Qi(e)):{},Sa(t||!e||!e.__esModule?ba(a,"default",{value:e,enumerable:!0}):a,e)),Ki=e=>Sa(ba({},"__esModule",{value:!0}),e);var ln=x(Ia=>{"use strict";Object.defineProperty(Ia,"__esModule",{value:!0});Ia.useDeepMemo=void 0;var gr=require("react"),Yi=require("dequal/lite");function Ji(e){let t=(0,gr.useRef)(e),a=(0,gr.useRef)(0);return(0,Yi.dequal)(e,t.current)||(t.current=e,a.current+=1),(0,gr.useMemo)(()=>t.current,[a.current])}Ia.useDeepMemo=Ji});var ve=x(ga=>{"use strict";Object.defineProperty(ga,"__esModule",{value:!0});ga.useLatest=void 0;var Zi=require("react");function Xi(e){let t=(0,Zi.useRef)(e);return t.current=e,t}ga.useLatest=Xi});var qt=x(Re=>{"use strict";var es=Re&&Re.__createBinding||(Object.create?(function(e,t,a,n){n===void 0&&(n=a);var r=Object.getOwnPropertyDescriptor(t,a);(!r||("get"in r?!t.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,r)}):(function(e,t,a,n){n===void 0&&(n=a),e[n]=t[a]})),ts=Re&&Re.__setModuleDefault||(Object.create?(function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}):function(e,t){e.default=t}),yn=Re&&Re.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var a in e)a!=="default"&&Object.prototype.hasOwnProperty.call(e,a)&&es(t,e,a);return ts(t,e),t};Object.defineProperty(Re,"__esModule",{value:!0});Re.showFailureToast=void 0;var as=yn(require("fs")),rs=yn(require("path")),St=require("@raycast/api");function ns(e,t){let a=e instanceof Error?e.message:String(e);return(0,St.showToast)({style:St.Toast.Style.Failure,title:t?.title??"Something went wrong",message:t?.message??a,primaryAction:t?.primaryAction??cn(e),secondaryAction:t?.primaryAction?cn(e):void 0})}Re.showFailureToast=ns;var cn=e=>{let t=!0,a="[Extension Name]...",n="";try{let u=JSON.parse(as.readFileSync(rs.join(St.environment.assetsPath,"..","package.json"),"utf8"));a=`[${u.title}]...`,n=`https://raycast.com/${u.owner||u.author}/${u.name}`,(!u.owner||u.access==="public")&&(t=!1)}catch{}let r=St.environment.isDevelopment||t,o=e instanceof Error?e?.stack||e?.message||"":String(e);return{title:r?"Copy Logs":"Report Error",onAction(u){u.hide(),r?St.Clipboard.copy(o):(0,St.open)(`https://github.com/raycast/extensions/issues/new?&labels=extension%2Cbug&template=extension_bug_report.yml&title=${encodeURIComponent(a)}&extension-url=${encodeURI(n)}&description=${encodeURIComponent(`#### Error:
\`\`\`
${o}
\`\`\`
`)}`)}}}});var bt=x(Ma=>{"use strict";Object.defineProperty(Ma,"__esModule",{value:!0});Ma.usePromise=void 0;var re=require("react"),Nt=require("@raycast/api"),os=ln(),je=ve(),is=qt();function ss(e,t,a){let n=(0,re.useRef)(0),[r,o]=(0,re.useState)({isLoading:!0}),u=(0,je.useLatest)(e),s=(0,je.useLatest)(a?.abortable),i=(0,je.useLatest)(t||[]),p=(0,je.useLatest)(a?.onError),d=(0,je.useLatest)(a?.onData),y=(0,je.useLatest)(a?.onWillExecute),M=(0,je.useLatest)(a?.failureToastOptions),A=(0,je.useLatest)(r.data),l=(0,re.useRef)(),g=(0,re.useRef)({page:0}),I=(0,re.useRef)(!1),m=(0,re.useRef)(!0),f=(0,re.useRef)(50),c=(0,re.useCallback)((...j)=>{let L=++n.current;s.current&&(s.current.current?.abort(),s.current.current=new AbortController),y.current?.(j),o(D=>({...D,isLoading:!0}));let ue=us(u.current)(...j);function pe(D){return D.name=="AbortError"||L===n.current&&(p.current?p.current(D):Nt.environment.launchType!==Nt.LaunchType.Background&&(0,is.showFailureToast)(D,{title:"Failed to fetch latest data",primaryAction:{title:"Retry",onAction(K){K.hide(),l.current?.(...i.current||[])}},...M.current}),o({error:D,isLoading:!1})),D}return typeof ue=="function"?(I.current=!0,ue(g.current).then(({data:D,hasMore:K,cursor:_e})=>(L===n.current&&(g.current&&(g.current.cursor=_e,g.current.lastItem=D?.[D.length-1]),d.current&&d.current(D,g.current),K&&(f.current=D.length),m.current=K,o(br=>g.current.page===0?{data:D,isLoading:!1}:{data:(br.data||[])?.concat(D),isLoading:!1})),D),D=>(m.current=!1,pe(D)))):(I.current=!1,ue.then(D=>(L===n.current&&(d.current&&d.current(D),o({data:D,isLoading:!1})),D),pe))},[s,d,p,i,u,o,l,y,g,M]);l.current=c;let b=(0,re.useCallback)(()=>{g.current={page:0};let j=i.current||[];return c(...j)},[c,i]),P=(0,re.useCallback)(async(j,L)=>{let ue;try{if(L?.optimisticUpdate){typeof L?.rollbackOnError!="function"&&L?.rollbackOnError!==!1&&(ue=structuredClone(A.current?.value));let pe=L.optimisticUpdate;o(D=>({...D,data:pe(D.data)}))}return await j}catch(pe){if(typeof L?.rollbackOnError=="function"){let D=L.rollbackOnError;o(K=>({...K,data:D(K.data)}))}else L?.optimisticUpdate&&L?.rollbackOnError!==!1&&o(D=>({...D,data:ue}));throw pe}finally{L?.shouldRevalidateAfter!==!1&&(Nt.environment.launchType===Nt.LaunchType.Background||Nt.environment.commandMode==="menu-bar"?await b():b())}},[b,A,o]),E=(0,re.useCallback)(()=>{g.current.page+=1;let j=i.current||[];c(...j)},[g,i,c]);(0,re.useEffect)(()=>{g.current={page:0},a?.execute!==!1?c(...t||[]):s.current&&s.current.current?.abort()},[(0,os.useDeepMemo)([t,a?.execute,c]),s,g]),(0,re.useEffect)(()=>()=>{s.current&&s.current.current?.abort()},[s]);let U=a?.execute!==!1?r.isLoading:!1,B={...r,isLoading:U},ae=I.current?{pageSize:f.current,hasMore:m.current,onLoadMore:E}:void 0;return{...B,revalidate:b,mutate:P,pagination:ae}}Ma.usePromise=ss;function us(e){return e===Promise.all||e===Promise.race||e===Promise.resolve||e===Promise.reject?e.bind(Promise):e}});var ze=x(Ae=>{"use strict";var ps=Ae&&Ae.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Ae,"__esModule",{value:!0});Ae.hash=Ae.reviver=Ae.replacer=void 0;var ls=ps(require("object-hash"));function cs(e,t){let a=this[e];return a instanceof Date?`__raycast_cached_date__${a.toString()}`:Buffer.isBuffer(a)?`__raycast_cached_buffer__${a.toString("base64")}`:t}Ae.replacer=cs;function ys(e,t){return typeof t=="string"&&t.startsWith("__raycast_cached_date__")?new Date(t.replace("__raycast_cached_date__","")):typeof t=="string"&&t.startsWith("__raycast_cached_buffer__")?Buffer.from(t.replace("__raycast_cached_buffer__",""),"base64"):t}Ae.reviver=ys;function ds(e,t){return(0,ls.default)(e,{replacer:a=>a instanceof URLSearchParams?a.toString():a,...t})}Ae.hash=ds});var Ra=x(ma=>{"use strict";Object.defineProperty(ma,"__esModule",{value:!0});ma.useCachedState=void 0;var Mr=require("react"),Ss=require("@raycast/api"),mr=ve(),dn=ze(),bs=Symbol("cache without namespace"),Sn=new Map;function Is(e,t,a){let n=a?.cacheNamespace||bs,r=Sn.get(n)||Sn.set(n,new Ss.Cache({namespace:a?.cacheNamespace})).get(n);if(!r)throw new Error("Missing cache");let o=(0,mr.useLatest)(e),u=(0,mr.useLatest)(t),s=(0,Mr.useSyncExternalStore)(r.subscribe,()=>{try{return r.get(o.current)}catch(y){console.error("Could not get Cache data:",y);return}}),i=(0,Mr.useMemo)(()=>{if(typeof s<"u"){if(s==="undefined")return;try{return JSON.parse(s,dn.reviver)}catch(y){return console.warn("The cached data is corrupted",y),u.current}}else return u.current},[s,u]),p=(0,mr.useLatest)(i),d=(0,Mr.useCallback)(y=>{let M=typeof y=="function"?y(p.current):y;if(typeof M>"u")r.set(o.current,"undefined");else{let A=JSON.stringify(M,dn.replacer);r.set(o.current,A)}return M},[r,o,p]);return[i,d]}ma.useCachedState=Is});var Ft=x(Aa=>{"use strict";Object.defineProperty(Aa,"__esModule",{value:!0});Aa.useCachedPromise=void 0;var Vt=require("react"),gs=Ra(),Ms=bt(),ms=ve(),bn=ze(),It=Symbol();function Rs(e,t,a){let{initialData:n,keepPreviousData:r,internal_cacheKeySuffix:o,...u}=a||{},s=(0,Vt.useRef)(),[i,p]=(0,gs.useCachedState)((0,bn.hash)(t||[])+o,It,{cacheNamespace:(0,bn.hash)(e)}),d=(0,Vt.useRef)(i!==It?i:n),y=(0,Vt.useRef)(void 0),{mutate:M,revalidate:A,...l}=(0,Ms.usePromise)(e,t||[],{...u,onData(c,b){y.current=b,u.onData&&u.onData(c,b),!(b&&b.page>0)&&(s.current="promise",d.current=c,p(c))}}),g,I=l.pagination;y.current&&y.current.page>0&&l.data?g=l.data:s.current==="promise"?g=d.current:r&&i!==It?(g=i,I&&(I.hasMore=!0,I.pageSize=i.length)):r&&i===It?g=d.current:i!==It?(g=i,I&&(I.hasMore=!0,I.pageSize=i.length)):g=n;let m=(0,ms.useLatest)(g),f=(0,Vt.useCallback)(async(c,b)=>{let P;try{if(b?.optimisticUpdate){typeof b?.rollbackOnError!="function"&&b?.rollbackOnError!==!1&&(P=structuredClone(m.current));let E=b.optimisticUpdate(m.current);s.current="cache",d.current=E,p(E)}return await M(c,{shouldRevalidateAfter:b?.shouldRevalidateAfter})}catch(E){if(typeof b?.rollbackOnError=="function"){let U=b.rollbackOnError(m.current);s.current="cache",d.current=U,p(U)}else b?.optimisticUpdate&&b?.rollbackOnError!==!1&&(s.current="cache",d.current=P,p(P));throw E}},[p,M,m,d,s]);return(0,Vt.useEffect)(()=>{i!==It&&(s.current="cache",d.current=i)},[i]),{data:g,isLoading:l.isLoading,error:l.error,mutate:y.current&&y.current.page>0?M:f,pagination:I,revalidate:A}}Aa.useCachedPromise=Rs});var Dn=x((ge,hn)=>{"use strict";Object.defineProperty(ge,"__esModule",{value:!0});function Rt(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var Ie=Rt(require("stream")),mn=Rt(require("http")),Pa=Rt(require("url")),Rn=Rt(require("whatwg-url")),As=Rt(require("https")),et=Rt(require("zlib")),fs=Ie.Readable,Te=Symbol("buffer"),Rr=Symbol("type"),jt=class e{constructor(){this[Rr]="";let t=arguments[0],a=arguments[1],n=[],r=0;if(t){let u=t,s=Number(u.length);for(let i=0;i<s;i++){let p=u[i],d;p instanceof Buffer?d=p:ArrayBuffer.isView(p)?d=Buffer.from(p.buffer,p.byteOffset,p.byteLength):p instanceof ArrayBuffer?d=Buffer.from(p):p instanceof e?d=p[Te]:d=Buffer.from(typeof p=="string"?p:String(p)),r+=d.length,n.push(d)}}this[Te]=Buffer.concat(n);let o=a&&a.type!==void 0&&String(a.type).toLowerCase();o&&!/[^\u0020-\u007E]/.test(o)&&(this[Rr]=o)}get size(){return this[Te].length}get type(){return this[Rr]}text(){return Promise.resolve(this[Te].toString())}arrayBuffer(){let t=this[Te],a=t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength);return Promise.resolve(a)}stream(){let t=new fs;return t._read=function(){},t.push(this[Te]),t.push(null),t}toString(){return"[object Blob]"}slice(){let t=this.size,a=arguments[0],n=arguments[1],r,o;a===void 0?r=0:a<0?r=Math.max(t+a,0):r=Math.min(a,t),n===void 0?o=t:n<0?o=Math.max(t+n,0):o=Math.min(n,t);let u=Math.max(o-r,0),i=this[Te].slice(r,r+u),p=new e([],{type:arguments[2]});return p[Te]=i,p}};Object.defineProperties(jt.prototype,{size:{enumerable:!0},type:{enumerable:!0},slice:{enumerable:!0}});Object.defineProperty(jt.prototype,Symbol.toStringTag,{value:"Blob",writable:!1,enumerable:!1,configurable:!0});function z(e,t,a){Error.call(this,e),this.message=e,this.type=t,a&&(this.code=this.errno=a.code),Error.captureStackTrace(this,this.constructor)}z.prototype=Object.create(Error.prototype);z.prototype.constructor=z;z.prototype.name="FetchError";var Er;try{Er=require("encoding").convert}catch{}var Oe=Symbol("Body internals"),In=Ie.PassThrough;function q(e){var t=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.size;let r=n===void 0?0:n;var o=a.timeout;let u=o===void 0?0:o;e==null?e=null:An(e)?e=Buffer.from(e.toString()):Ht(e)||Buffer.isBuffer(e)||(Object.prototype.toString.call(e)==="[object ArrayBuffer]"?e=Buffer.from(e):ArrayBuffer.isView(e)?e=Buffer.from(e.buffer,e.byteOffset,e.byteLength):e instanceof Ie||(e=Buffer.from(String(e)))),this[Oe]={body:e,disturbed:!1,error:null},this.size=r,this.timeout=u,e instanceof Ie&&e.on("error",function(s){let i=s.name==="AbortError"?s:new z(`Invalid response body while trying to fetch ${t.url}: ${s.message}`,"system",s);t[Oe].error=i})}q.prototype={get body(){return this[Oe].body},get bodyUsed(){return this[Oe].disturbed},arrayBuffer(){return gt.call(this).then(function(e){return e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength)})},blob(){let e=this.headers&&this.headers.get("content-type")||"";return gt.call(this).then(function(t){return Object.assign(new jt([],{type:e.toLowerCase()}),{[Te]:t})})},json(){var e=this;return gt.call(this).then(function(t){try{return JSON.parse(t.toString())}catch(a){return q.Promise.reject(new z(`invalid json response body at ${e.url} reason: ${a.message}`,"invalid-json"))}})},text(){return gt.call(this).then(function(e){return e.toString()})},buffer(){return gt.call(this)},textConverted(){var e=this;return gt.call(this).then(function(t){return Ps(t,e.headers)})}};Object.defineProperties(q.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0}});q.mixIn=function(e){for(let t of Object.getOwnPropertyNames(q.prototype))if(!(t in e)){let a=Object.getOwnPropertyDescriptor(q.prototype,t);Object.defineProperty(e,t,a)}};function gt(){var e=this;if(this[Oe].disturbed)return q.Promise.reject(new TypeError(`body used already for: ${this.url}`));if(this[Oe].disturbed=!0,this[Oe].error)return q.Promise.reject(this[Oe].error);let t=this.body;if(t===null)return q.Promise.resolve(Buffer.alloc(0));if(Ht(t)&&(t=t.stream()),Buffer.isBuffer(t))return q.Promise.resolve(t);if(!(t instanceof Ie))return q.Promise.resolve(Buffer.alloc(0));let a=[],n=0,r=!1;return new q.Promise(function(o,u){let s;e.timeout&&(s=setTimeout(function(){r=!0,u(new z(`Response timeout while trying to fetch ${e.url} (over ${e.timeout}ms)`,"body-timeout"))},e.timeout)),t.on("error",function(i){i.name==="AbortError"?(r=!0,u(i)):u(new z(`Invalid response body while trying to fetch ${e.url}: ${i.message}`,"system",i))}),t.on("data",function(i){if(!(r||i===null)){if(e.size&&n+i.length>e.size){r=!0,u(new z(`content size at ${e.url} over limit: ${e.size}`,"max-size"));return}n+=i.length,a.push(i)}}),t.on("end",function(){if(!r){clearTimeout(s);try{o(Buffer.concat(a,n))}catch(i){u(new z(`Could not create Buffer from response body for ${e.url}: ${i.message}`,"system",i))}}})})}function Ps(e,t){if(typeof Er!="function")throw new Error("The package `encoding` must be installed to use the textConverted() function");let a=t.get("content-type"),n="utf-8",r,o;return a&&(r=/charset=([^;]*)/i.exec(a)),o=e.slice(0,1024).toString(),!r&&o&&(r=/<meta.+?charset=(['"])(.+?)\1/i.exec(o)),!r&&o&&(r=/<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(o),r||(r=/<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(o),r&&r.pop()),r&&(r=/charset=(.*)/i.exec(r.pop()))),!r&&o&&(r=/<\?xml.+?encoding=(['"])(.+?)\1/i.exec(o)),r&&(n=r.pop(),(n==="gb2312"||n==="gbk")&&(n="gb18030")),Er(e,"UTF-8",n).toString()}function An(e){return typeof e!="object"||typeof e.append!="function"||typeof e.delete!="function"||typeof e.get!="function"||typeof e.getAll!="function"||typeof e.has!="function"||typeof e.set!="function"?!1:e.constructor.name==="URLSearchParams"||Object.prototype.toString.call(e)==="[object URLSearchParams]"||typeof e.sort=="function"}function Ht(e){return typeof e=="object"&&typeof e.arrayBuffer=="function"&&typeof e.type=="string"&&typeof e.stream=="function"&&typeof e.constructor=="function"&&typeof e.constructor.name=="string"&&/^(Blob|File)$/.test(e.constructor.name)&&/^(Blob|File)$/.test(e[Symbol.toStringTag])}function fn(e){let t,a,n=e.body;if(e.bodyUsed)throw new Error("cannot clone body after it is used");return n instanceof Ie&&typeof n.getBoundary!="function"&&(t=new In,a=new In,n.pipe(t),n.pipe(a),e[Oe].body=t,n=a),n}function Pn(e){return e===null?null:typeof e=="string"?"text/plain;charset=UTF-8":An(e)?"application/x-www-form-urlencoded;charset=UTF-8":Ht(e)?e.type||null:Buffer.isBuffer(e)||Object.prototype.toString.call(e)==="[object ArrayBuffer]"||ArrayBuffer.isView(e)?null:typeof e.getBoundary=="function"?`multipart/form-data;boundary=${e.getBoundary()}`:e instanceof Ie?null:"text/plain;charset=UTF-8"}function En(e){let t=e.body;return t===null?0:Ht(t)?t.size:Buffer.isBuffer(t)?t.length:t&&typeof t.getLengthSync=="function"&&(t._lengthRetrievers&&t._lengthRetrievers.length==0||t.hasKnownLength&&t.hasKnownLength())?t.getLengthSync():null}function Es(e,t){let a=t.body;a===null?e.end():Ht(a)?a.stream().pipe(e):Buffer.isBuffer(a)?(e.write(a),e.end()):a.pipe(e)}q.Promise=global.Promise;var Cn=/[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/,Cr=/[^\t\x20-\x7e\x80-\xff]/;function kt(e){if(e=`${e}`,Cn.test(e)||e==="")throw new TypeError(`${e} is not a legal HTTP header name`)}function gn(e){if(e=`${e}`,Cr.test(e))throw new TypeError(`${e} is not a legal HTTP header value`)}function Mt(e,t){t=t.toLowerCase();for(let a in e)if(a.toLowerCase()===t)return a}var O=Symbol("map"),ce=class e{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:void 0;if(this[O]=Object.create(null),t instanceof e){let a=t.raw(),n=Object.keys(a);for(let r of n)for(let o of a[r])this.append(r,o);return}if(t!=null)if(typeof t=="object"){let a=t[Symbol.iterator];if(a!=null){if(typeof a!="function")throw new TypeError("Header pairs must be iterable");let n=[];for(let r of t){if(typeof r!="object"||typeof r[Symbol.iterator]!="function")throw new TypeError("Each header pair must be iterable");n.push(Array.from(r))}for(let r of n){if(r.length!==2)throw new TypeError("Each header pair must be a name/value tuple");this.append(r[0],r[1])}}else for(let n of Object.keys(t)){let r=t[n];this.append(n,r)}}else throw new TypeError("Provided initializer must be an object")}get(t){t=`${t}`,kt(t);let a=Mt(this[O],t);return a===void 0?null:this[O][a].join(", ")}forEach(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:void 0,n=hr(this),r=0;for(;r<n.length;){var o=n[r];let u=o[0],s=o[1];t.call(a,s,u,this),n=hr(this),r++}}set(t,a){t=`${t}`,a=`${a}`,kt(t),gn(a);let n=Mt(this[O],t);this[O][n!==void 0?n:t]=[a]}append(t,a){t=`${t}`,a=`${a}`,kt(t),gn(a);let n=Mt(this[O],t);n!==void 0?this[O][n].push(a):this[O][t]=[a]}has(t){return t=`${t}`,kt(t),Mt(this[O],t)!==void 0}delete(t){t=`${t}`,kt(t);let a=Mt(this[O],t);a!==void 0&&delete this[O][a]}raw(){return this[O]}keys(){return Ar(this,"key")}values(){return Ar(this,"value")}[Symbol.iterator](){return Ar(this,"key+value")}};ce.prototype.entries=ce.prototype[Symbol.iterator];Object.defineProperty(ce.prototype,Symbol.toStringTag,{value:"Headers",writable:!1,enumerable:!1,configurable:!0});Object.defineProperties(ce.prototype,{get:{enumerable:!0},forEach:{enumerable:!0},set:{enumerable:!0},append:{enumerable:!0},has:{enumerable:!0},delete:{enumerable:!0},keys:{enumerable:!0},values:{enumerable:!0},entries:{enumerable:!0}});function hr(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"key+value";return Object.keys(e[O]).sort().map(t==="key"?function(n){return n.toLowerCase()}:t==="value"?function(n){return e[O][n].join(", ")}:function(n){return[n.toLowerCase(),e[O][n].join(", ")]})}var Dr=Symbol("internal");function Ar(e,t){let a=Object.create(xr);return a[Dr]={target:e,kind:t,index:0},a}var xr=Object.setPrototypeOf({next(){if(!this||Object.getPrototypeOf(this)!==xr)throw new TypeError("Value of `this` is not a HeadersIterator");var e=this[Dr];let t=e.target,a=e.kind,n=e.index,r=hr(t,a),o=r.length;return n>=o?{value:void 0,done:!0}:(this[Dr].index=n+1,{value:r[n],done:!1})}},Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));Object.defineProperty(xr,Symbol.toStringTag,{value:"HeadersIterator",writable:!1,enumerable:!1,configurable:!0});function Cs(e){let t=Object.assign({__proto__:null},e[O]),a=Mt(e[O],"Host");return a!==void 0&&(t[a]=t[a][0]),t}function hs(e){let t=new ce;for(let a of Object.keys(e))if(!Cn.test(a))if(Array.isArray(e[a]))for(let n of e[a])Cr.test(n)||(t[O][a]===void 0?t[O][a]=[n]:t[O][a].push(n));else Cr.test(e[a])||(t[O][a]=[e[a]]);return t}var He=Symbol("Response internals"),Ds=mn.STATUS_CODES,le=class e{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};q.call(this,t,a);let n=a.status||200,r=new ce(a.headers);if(t!=null&&!r.has("Content-Type")){let o=Pn(t);o&&r.append("Content-Type",o)}this[He]={url:a.url,status:n,statusText:a.statusText||Ds[n],headers:r,counter:a.counter}}get url(){return this[He].url||""}get status(){return this[He].status}get ok(){return this[He].status>=200&&this[He].status<300}get redirected(){return this[He].counter>0}get statusText(){return this[He].statusText}get headers(){return this[He].headers}clone(){return new e(fn(this),{url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected})}};q.mixIn(le.prototype);Object.defineProperties(le.prototype,{url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}});Object.defineProperty(le.prototype,Symbol.toStringTag,{value:"Response",writable:!1,enumerable:!1,configurable:!0});var we=Symbol("Request internals"),xs=Pa.URL||Rn.URL,Us=Pa.parse,_s=Pa.format;function fr(e){return/^[a-zA-Z][a-zA-Z\d+\-.]*:/.exec(e)&&(e=new xs(e).toString()),Us(e)}var vs="destroy"in Ie.Readable.prototype;function fa(e){return typeof e=="object"&&typeof e[we]=="object"}function Ts(e){let t=e&&typeof e=="object"&&Object.getPrototypeOf(e);return!!(t&&t.constructor.name==="AbortSignal")}var $e=class e{constructor(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n;fa(t)?n=fr(t.url):(t&&t.href?n=fr(t.href):n=fr(`${t}`),t={});let r=a.method||t.method||"GET";if(r=r.toUpperCase(),(a.body!=null||fa(t)&&t.body!==null)&&(r==="GET"||r==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");let o=a.body!=null?a.body:fa(t)&&t.body!==null?fn(t):null;q.call(this,o,{timeout:a.timeout||t.timeout||0,size:a.size||t.size||0});let u=new ce(a.headers||t.headers||{});if(o!=null&&!u.has("Content-Type")){let i=Pn(o);i&&u.append("Content-Type",i)}let s=fa(t)?t.signal:null;if("signal"in a&&(s=a.signal),s!=null&&!Ts(s))throw new TypeError("Expected signal to be an instanceof AbortSignal");this[we]={method:r,redirect:a.redirect||t.redirect||"follow",headers:u,parsedURL:n,signal:s},this.follow=a.follow!==void 0?a.follow:t.follow!==void 0?t.follow:20,this.compress=a.compress!==void 0?a.compress:t.compress!==void 0?t.compress:!0,this.counter=a.counter||t.counter||0,this.agent=a.agent||t.agent}get method(){return this[we].method}get url(){return _s(this[we].parsedURL)}get headers(){return this[we].headers}get redirect(){return this[we].redirect}get signal(){return this[we].signal}clone(){return new e(this)}};q.mixIn($e.prototype);Object.defineProperty($e.prototype,Symbol.toStringTag,{value:"Request",writable:!1,enumerable:!1,configurable:!0});Object.defineProperties($e.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0}});function ws(e){let t=e[we].parsedURL,a=new ce(e[we].headers);if(a.has("Accept")||a.set("Accept","*/*"),!t.protocol||!t.hostname)throw new TypeError("Only absolute URLs are supported");if(!/^https?:$/.test(t.protocol))throw new TypeError("Only HTTP(S) protocols are supported");if(e.signal&&e.body instanceof Ie.Readable&&!vs)throw new Error("Cancellation of streamed requests with AbortSignal is not supported in node < 8");let n=null;if(e.body==null&&/^(POST|PUT)$/i.test(e.method)&&(n="0"),e.body!=null){let o=En(e);typeof o=="number"&&(n=String(o))}n&&a.set("Content-Length",n),a.has("User-Agent")||a.set("User-Agent","node-fetch/1.0 (+https://github.com/bitinn/node-fetch)"),e.compress&&!a.has("Accept-Encoding")&&a.set("Accept-Encoding","gzip,deflate");let r=e.agent;return typeof r=="function"&&(r=r(t)),Object.assign({},t,{method:e.method,headers:Cs(a),agent:r})}function mt(e){Error.call(this,e),this.type="aborted",this.message=e,Error.captureStackTrace(this,this.constructor)}mt.prototype=Object.create(Error.prototype);mt.prototype.constructor=mt;mt.prototype.name="AbortError";var zt=Pa.URL||Rn.URL,Mn=Ie.PassThrough,Os=function(t,a){let n=new zt(a).hostname,r=new zt(t).hostname;return n===r||n[n.length-r.length-1]==="."&&n.endsWith(r)},Bs=function(t,a){let n=new zt(a).protocol,r=new zt(t).protocol;return n===r};function Ge(e,t){if(!Ge.Promise)throw new Error("native promise missing, set fetch.Promise to your favorite alternative");return q.Promise=Ge.Promise,new Ge.Promise(function(a,n){let r=new $e(e,t),o=ws(r),u=(o.protocol==="https:"?As:mn).request,s=r.signal,i=null,p=function(){let g=new mt("The user aborted a request.");n(g),r.body&&r.body instanceof Ie.Readable&&Pr(r.body,g),!(!i||!i.body)&&i.body.emit("error",g)};if(s&&s.aborted){p();return}let d=function(){p(),A()},y=u(o),M;s&&s.addEventListener("abort",d);function A(){y.abort(),s&&s.removeEventListener("abort",d),clearTimeout(M)}r.timeout&&y.once("socket",function(l){M=setTimeout(function(){n(new z(`network timeout at: ${r.url}`,"request-timeout")),A()},r.timeout)}),y.on("error",function(l){n(new z(`request to ${r.url} failed, reason: ${l.message}`,"system",l)),i&&i.body&&Pr(i.body,l),A()}),Ls(y,function(l){s&&s.aborted||i&&i.body&&Pr(i.body,l)}),parseInt(process.version.substring(1))<14&&y.on("socket",function(l){l.addListener("close",function(g){let I=l.listenerCount("data")>0;if(i&&I&&!g&&!(s&&s.aborted)){let m=new Error("Premature close");m.code="ERR_STREAM_PREMATURE_CLOSE",i.body.emit("error",m)}})}),y.on("response",function(l){clearTimeout(M);let g=hs(l.headers);if(Ge.isRedirect(l.statusCode)){let b=g.get("Location"),P=null;try{P=b===null?null:new zt(b,r.url).toString()}catch{if(r.redirect!=="manual"){n(new z(`uri requested responds with an invalid redirect URL: ${b}`,"invalid-redirect")),A();return}}switch(r.redirect){case"error":n(new z(`uri requested responds with a redirect, redirect mode is set to error: ${r.url}`,"no-redirect")),A();return;case"manual":if(P!==null)try{g.set("Location",P)}catch(U){n(U)}break;case"follow":if(P===null)break;if(r.counter>=r.follow){n(new z(`maximum redirect reached at: ${r.url}`,"max-redirect")),A();return}let E={headers:new ce(r.headers),follow:r.follow,counter:r.counter+1,agent:r.agent,compress:r.compress,method:r.method,body:r.body,signal:r.signal,timeout:r.timeout,size:r.size};if(!Os(r.url,P)||!Bs(r.url,P))for(let U of["authorization","www-authenticate","cookie","cookie2"])E.headers.delete(U);if(l.statusCode!==303&&r.body&&En(r)===null){n(new z("Cannot follow redirect with body being a readable stream","unsupported-redirect")),A();return}(l.statusCode===303||(l.statusCode===301||l.statusCode===302)&&r.method==="POST")&&(E.method="GET",E.body=void 0,E.headers.delete("content-length")),a(Ge(new $e(P,E))),A();return}}l.once("end",function(){s&&s.removeEventListener("abort",d)});let I=l.pipe(new Mn),m={url:r.url,status:l.statusCode,statusText:l.statusMessage,headers:g,size:r.size,timeout:r.timeout,counter:r.counter},f=g.get("Content-Encoding");if(!r.compress||r.method==="HEAD"||f===null||l.statusCode===204||l.statusCode===304){i=new le(I,m),a(i);return}let c={flush:et.Z_SYNC_FLUSH,finishFlush:et.Z_SYNC_FLUSH};if(f=="gzip"||f=="x-gzip"){I=I.pipe(et.createGunzip(c)),i=new le(I,m),a(i);return}if(f=="deflate"||f=="x-deflate"){let b=l.pipe(new Mn);b.once("data",function(P){(P[0]&15)===8?I=I.pipe(et.createInflate()):I=I.pipe(et.createInflateRaw()),i=new le(I,m),a(i)}),b.on("end",function(){i||(i=new le(I,m),a(i))});return}if(f=="br"&&typeof et.createBrotliDecompress=="function"){I=I.pipe(et.createBrotliDecompress()),i=new le(I,m),a(i);return}i=new le(I,m),a(i)}),Es(y,r)})}function Ls(e,t){let a;e.on("socket",function(n){a=n}),e.on("response",function(n){let r=n.headers;r["transfer-encoding"]==="chunked"&&!r["content-length"]&&n.once("close",function(o){if(a&&a.listenerCount("data")>0&&!o){let s=new Error("Premature close");s.code="ERR_STREAM_PREMATURE_CLOSE",t(s)}})})}function Pr(e,t){e.destroy?e.destroy(t):(e.emit("error",t),e.end())}Ge.isRedirect=function(e){return e===301||e===302||e===303||e===307||e===308};Ge.Promise=global.Promise;hn.exports=ge=Ge;Object.defineProperty(ge,"__esModule",{value:!0});ge.default=ge;ge.Headers=ce;ge.Request=$e;ge.Response=le;ge.FetchError=z;ge.AbortError=mt});var $t=x((tt,xn)=>{var Gt=Dn(),qs=Gt.default||Gt,Ea=function(e,t){return/^\/\//.test(e)&&(e="https:"+e),qs.call(this,e,t)};Ea.ponyfill=!0;xn.exports=tt=Ea;tt.fetch=Ea;tt.Headers=Gt.Headers;tt.Request=Gt.Request;tt.Response=Gt.Response;tt.default=Ea});var Ur=x(Ca=>{"use strict";Object.defineProperty(Ca,"__esModule",{value:!0});Ca.isJSON=void 0;function Ns(e){if(e){let t=Fs(e);if(!t)return!1;if(t.subtype==="json"||t.suffix==="json"||t.suffix&&/\bjson\b/i.test(t.suffix)||t.subtype&&/\bjson\b/i.test(t.subtype))return!0}return!1}Ca.isJSON=Ns;var Vs=/^([A-Za-z0-9][A-Za-z0-9!#$&^_-]{0,126})\/([A-Za-z0-9][A-Za-z0-9!#$&^_.+-]{0,126});?$/;function Fs(e){let t=e.indexOf(";"),a=t!==-1?e.slice(0,t).trim():e.trim(),n=Vs.exec(a.toLowerCase().toLowerCase());if(!n)return;let r=n[1],o=n[2],u,s=o.lastIndexOf("+");return s!==-1&&(u=o.substring(s+1),o=o.substring(0,s)),{type:r,subtype:o,suffix:u}}});var Tn=x(ha=>{"use strict";Object.defineProperty(ha,"__esModule",{value:!0});ha.useFetch=void 0;var At=require("react"),ks=Ft(),Un=ve(),_n=$t(),js=Ur(),vn=ze();async function zs(e){if(!e.ok)throw new Error(e.statusText);let t=e.headers.get("content-type");return t&&(0,js.isJSON)(t)?await e.json():await e.text()}function Hs(e){return{data:e,hasMore:!1}}function Gs(e,t){let{parseResponse:a,mapResult:n,initialData:r,execute:o,keepPreviousData:u,onError:s,onData:i,onWillExecute:p,failureToastOptions:d,...y}=t||{},M={initialData:r,execute:o,keepPreviousData:u,onError:s,onData:i,onWillExecute:p,failureToastOptions:d},A=(0,Un.useLatest)(a||zs),l=(0,Un.useLatest)(n||Hs),g=(0,At.useRef)(),I=(0,At.useRef)(),m=typeof e=="function"?e({page:0}):void 0;(!g.current||typeof I.current>"u"||I.current!==m)&&(g.current=e),I.current=m;let f=(0,At.useRef)(),c=(0,At.useCallback)((E,U)=>async B=>{let ae=await(0,_n.fetch)(E(B),{signal:f.current?.signal,...U}),j=await A.current(ae);return l.current?.(j)},[A,l]),b=(0,At.useCallback)(async(E,U)=>{let B=await(0,_n.fetch)(E,{signal:f.current?.signal,...U}),ae=await A.current(B);return l.current(ae)?.data},[A,l]),P=(0,At.useMemo)(()=>I.current?c:b,[I,b,c]);return(0,ks.useCachedPromise)(P,[g.current,y],{...M,internal_cacheKeySuffix:I.current+(0,vn.hash)(l.current)+(0,vn.hash)(A.current),abortable:f})}ha.useFetch=Gs});var Da=x(ye=>{"use strict";var $s=ye&&ye.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ye,"__esModule",{value:!0});ye.defaultParsing=ye.handleOutput=ye.getSpawnedResult=ye.getSpawnedPromise=void 0;var Qs=require("node:buffer"),Bn=$s(require("node:stream")),Ws=require("node:util"),Ks=require("signal-exit");function Ys(e,{timeout:t}={}){let a=new Promise((s,i)=>{e.on("exit",(p,d)=>{s({exitCode:p,signal:d,timedOut:!1})}),e.on("error",p=>{i(p)}),e.stdin&&e.stdin.on("error",p=>{i(p)})});if(t===0||t===void 0)return a;let n,r=new Promise((s,i)=>{n=setTimeout(()=>{e.kill("SIGTERM"),i(Object.assign(new Error("Timed out"),{timedOut:!0,signal:"SIGTERM"}))},t)}),o=a.finally(()=>{clearTimeout(n)}),u=(0,Ks.onExit)(()=>{e.kill()});return Promise.race([r,o]).finally(()=>u())}ye.getSpawnedPromise=Ys;var _r=class extends Error{constructor(){super("The output is too big"),this.name="MaxBufferError"}},Js=(0,Ws.promisify)(Bn.default.pipeline);function Zs(e){let{encoding:t}=e,a=t==="buffer",n=new Bn.default.PassThrough({objectMode:!1});t&&t!=="buffer"&&n.setEncoding(t);let r=0,o=[];return n.on("data",u=>{o.push(u),r+=u.length}),n.getBufferedValue=()=>a?Buffer.concat(o,r):o.join(""),n.getBufferedLength=()=>r,n}async function wn(e,t){let a=Zs(t);return await new Promise((n,r)=>{let o=u=>{u&&a.getBufferedLength()<=Qs.constants.MAX_LENGTH&&(u.bufferedData=a.getBufferedValue()),r(u)};(async()=>{try{await Js(e,a),n()}catch(u){o(u)}})(),a.on("data",()=>{a.getBufferedLength()>1e3*1e3*80&&o(new _r)})}),a.getBufferedValue()}async function On(e,t){e.destroy();try{return await t}catch(a){return a.bufferedData}}async function Xs({stdout:e,stderr:t},{encoding:a},n){let r=wn(e,{encoding:a}),o=wn(t,{encoding:a});try{return await Promise.all([n,r,o])}catch(u){return Promise.all([{error:u,exitCode:null,signal:u.signal,timedOut:u.timedOut||!1},On(e,r),On(t,o)])}}ye.getSpawnedResult=Xs;function eu(e){let t=typeof e=="string"?`
`:10,a=typeof e=="string"?"\r":13;return e[e.length-1]===t&&(e=e.slice(0,-1)),e[e.length-1]===a&&(e=e.slice(0,-1)),e}function tu(e,t){return e.stripFinalNewline?eu(t):t}ye.handleOutput=tu;var au=({timedOut:e,timeout:t,signal:a,exitCode:n})=>e?`timed out after ${t} milliseconds`:a!=null?`was killed with ${a}`:n!=null?`failed with exit code ${n}`:"failed",ru=({stdout:e,stderr:t,error:a,signal:n,exitCode:r,command:o,timedOut:u,options:s,parentError:i})=>{let d=`Command ${au({timedOut:u,timeout:s?.timeout,signal:n,exitCode:r})}: ${o}`,y=a?`${d}
${a.message}`:d,M=[y,t,e].filter(Boolean).join(`
`);return a?a.originalMessage=a.message:a=i,a.message=M,a.shortMessage=y,a.command=o,a.exitCode=r,a.signal=n,a.stdout=e,a.stderr=t,"bufferedData"in a&&delete a.bufferedData,a};function nu({stdout:e,stderr:t,error:a,exitCode:n,signal:r,timedOut:o,command:u,options:s,parentError:i}){if(a||n!==0||r!==null)throw ru({error:a,exitCode:n,signal:r,stdout:e,stderr:t,command:u,timedOut:o,options:s,parentError:i});return e}ye.defaultParsing=nu});var qn=x(ft=>{"use strict";var ou=ft&&ft.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ft,"__esModule",{value:!0});ft.useExec=void 0;var iu=ou(require("node:child_process")),Ln=require("react"),su=Ft(),uu=ve(),Qt=Da(),pu=/ +/g;function lu(e,t){if(t)return[e,...t];let a=[];for(let n of e.trim().split(pu)){let r=a[a.length-1];r&&r.endsWith("\\")?a[a.length-1]=`${r.slice(0,-1)} ${n}`:a.push(n)}return a}function cu(e,t,a){let{parseOutput:n,input:r,onData:o,onWillExecute:u,initialData:s,execute:i,keepPreviousData:p,onError:d,failureToastOptions:y,...M}=Array.isArray(t)?a||{}:t||{},A={initialData:s,execute:i,keepPreviousData:p,onError:d,onData:o,onWillExecute:u,failureToastOptions:y},l=(0,Ln.useRef)(),g=(0,uu.useLatest)(n||Qt.defaultParsing),I=(0,Ln.useCallback)(async(m,f,c,b)=>{let[P,...E]=lu(m,f),U=[P,...E].join(" "),B={stripFinalNewline:!0,...c,timeout:c?.timeout||1e4,signal:l.current?.signal,encoding:c?.encoding===null?"buffer":c?.encoding||"utf8",env:{PATH:"/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin",...process.env,...c?.env}},ae=iu.default.spawn(P,E,B),j=(0,Qt.getSpawnedPromise)(ae,B);b&&ae.stdin.end(b);let[{error:L,exitCode:ue,signal:pe,timedOut:D},K,_e]=await(0,Qt.getSpawnedResult)(ae,B,j),br=(0,Qt.handleOutput)(B,K),zi=(0,Qt.handleOutput)(B,_e);return g.current({stdout:br,stderr:zi,error:L,exitCode:ue,signal:pe,timedOut:D,command:U,options:B,parentError:new Error})},[g]);return(0,su.useCachedPromise)(I,[e,Array.isArray(t)?t:[],M,r],{...A,abortable:l})}ft.useExec=cu});var kn=x(Pt=>{"use strict";var Ua=Pt&&Pt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Pt,"__esModule",{value:!0});Pt.useStreamJSON=void 0;var yu=require("@raycast/api"),Nn=Ua($t()),Yt=require("node:fs"),vr=require("node:fs/promises"),xa=require("node:path"),Vn=require("node:stream/promises"),Wt=require("react"),du=Ua(require("stream-chain")),Su=require("stream-json"),bu=Ua(require("stream-json/filters/Pick")),Iu=Ua(require("stream-json/streamers/StreamArray")),Fn=Ur(),gu=Ft(),Mu=ze();async function Kt(e,t,a){if(typeof e=="object"||e.startsWith("http://")||e.startsWith("https://"))return await mu(e,t,a);if(e.startsWith("file://"))return await Ru((0,xa.normalize)(decodeURIComponent(new URL(e).pathname)),t,a?.signal?a.signal:void 0);throw new Error("Only HTTP(S) or file URLs are supported")}async function mu(e,t,a){let n=await(0,Nn.default)(e,a);if(!n.ok)throw new Error("Failed to fetch URL");if(!(0,Fn.isJSON)(n.headers.get("content-type")))throw new Error("URL does not return JSON");if(!n.body)throw new Error("Failed to retrieve expected JSON content: Response body is missing or inaccessible.");await(0,Vn.pipeline)(n.body,(0,Yt.createWriteStream)(t),a?.signal?{signal:a.signal}:void 0)}async function Ru(e,t,a){await(0,Vn.pipeline)((0,Yt.createReadStream)(e),(0,Yt.createWriteStream)(t),a?{signal:a}:void 0)}async function Au(e,t,a,n,r){let o=(0,xa.join)(t,a);try{await(0,vr.stat)(t)}catch{(0,Yt.mkdirSync)(t,{recursive:!0}),await Kt(e,o,r);return}if(n){await Kt(e,o,r);return}let u;try{u=await(0,vr.stat)(o)}catch{await Kt(e,o,r);return}if(typeof e=="object"||e.startsWith("http://")||e.startsWith("https://")){let s=await(0,Nn.default)(e,{...r,method:"HEAD"});if(!s.ok)throw new Error("Could not fetch URL");if(!(0,Fn.isJSON)(s.headers.get("content-type")))throw new Error("URL does not return JSON");let i=Date.parse(s.headers.get("last-modified")??"");if(u.size===0||Number.isNaN(i)||i>u.mtimeMs){await Kt(e,o,r);return}}else if(e.startsWith("file://"))try{(await(0,vr.stat)((0,xa.normalize)(decodeURIComponent(new URL(e).pathname)))).mtimeMs>u.mtimeMs&&await Kt(e,o,r)}catch{throw new Error("Source file could not be read")}else throw new Error("Only HTTP(S) or file URLs are supported")}async function*fu(e,t,a,n,r,o){let u=[],s=new du.default([(0,Yt.createReadStream)(e),n?bu.default.withParser({filter:n}):(0,Su.parser)(),new Iu.default,i=>o?.(i.value)??i.value]);a?.addEventListener("abort",()=>{s.destroy()});try{for await(let i of s){if(a?.aborted)return[];(!r||r(i))&&u.push(i),u.length>=t&&(yield u,u=[])}}catch(i){throw s.destroy(),i}return u.length>0&&(yield u),[]}function Pu(e,t){let{initialData:a,execute:n,keepPreviousData:r,onError:o,onData:u,onWillExecute:s,failureToastOptions:i,dataPath:p,filter:d,transform:y,pageSize:M=20,...A}=t??{},l=(0,Wt.useRef)(),g=(0,Wt.useRef)(),I={initialData:a,execute:n,keepPreviousData:r,onError:o,onData:u,onWillExecute:s,failureToastOptions:i},m=(0,Wt.useRef)(null),f=(0,Wt.useRef)(null),c=(0,Wt.useRef)(!1);return(0,gu.useCachedPromise)((b,P,E,U,B,ae)=>async({page:j})=>{let L=(0,Mu.hash)(b)+".json",ue=yu.environment.supportPath;if(j===0){f.current?.abort(),f.current=new AbortController;let K=(0,xa.join)(ue,L),_e=!!(l.current&&l.current!==b&&g.current&&g.current===K);l.current=b,g.current=K,await Au(b,ue,L,_e,{...E,signal:f.current?.signal}),m.current=fu(K,P,f.current?.signal,U,B,ae)}if(!m.current)return{hasMore:c.current,data:[]};let{value:pe,done:D}=await m.current.next();return c.current=!D,{hasMore:c.current,data:pe??[]}},[e,M,A,p,d,y],I)}Pt.useStreamJSON=Pu});var wr=x(fe=>{"use strict";var Tr=fe&&fe.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(fe,"__esModule",{value:!0});fe.baseExecuteSQL=fe.isPermissionError=fe.PermissionError=void 0;var Eu=require("node:fs"),_a=require("node:fs/promises"),Cu=Tr(require("node:os")),jn=Tr(require("node:child_process")),zn=Tr(require("node:path")),va=Da(),hu=ze(),wa=class extends Error{constructor(t){super(t),this.name="PermissionError"}};fe.PermissionError=wa;function Du(e){return e instanceof Error&&e.name==="PermissionError"}fe.isPermissionError=Du;async function xu(e,t,a){if(!(0,Eu.existsSync)(e))throw new Error("The database does not exist");let n=a?.signal,r,o=jn.default.spawn("sqlite3",["--json","--readonly",e,t],{signal:n}),u=(0,va.getSpawnedPromise)(o),[{error:s,exitCode:i,signal:p},d,y]=await(0,va.getSpawnedResult)(o,{encoding:"utf-8"},u);if(Ta(n),y.match("(5)")||y.match("(14)")){if(!r){let M=zn.default.join(Cu.default.tmpdir(),"useSQL",(0,hu.hash)(e));await(0,_a.mkdir)(M,{recursive:!0}),Ta(n),r=zn.default.join(M,"db.db"),await(0,_a.copyFile)(e,r),await(0,_a.writeFile)(r+"-shm",""),await(0,_a.writeFile)(r+"-wal",""),Ta(n)}o=jn.default.spawn("sqlite3",["--json","--readonly","--vfs","unix-none",r,t],{signal:n}),u=(0,va.getSpawnedPromise)(o),[{error:s,exitCode:i,signal:p},d,y]=await(0,va.getSpawnedResult)(o,{encoding:"utf-8"},u),Ta(n)}if(s||i!==0||p!==null)throw y.includes("authorization denied")?new wa("You do not have permission to access the database."):new Error(y||"Unknown error");return JSON.parse(d.trim()||"[]")}fe.baseExecuteSQL=xu;function Ta(e){if(e?.aborted){let t=new Error("aborted");throw t.name="AbortError",t}}});var Gn=x(Et=>{"use strict";var Uu=Et&&Et.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Et,"__esModule",{value:!0});Et.useSQL=void 0;var Pe=require("react/jsx-runtime"),G=require("@raycast/api"),_u=require("node:fs"),vu=Uu(require("node:os")),Oa=require("react"),Tu=bt(),wu=ve(),Ou=qt(),Or=wr();function Bu(e,t,a){let{permissionPriming:n,...r}=a||{},[o,u]=(0,Oa.useState)(),s=(0,wu.useLatest)(a||{}),i=(0,Oa.useRef)(),p=(0,Oa.useCallback)(y=>{console.error(y);let M=y instanceof Error&&y.message.includes("authorization denied")?new Or.PermissionError("You do not have permission to access the database."):y;(0,Or.isPermissionError)(M)?u((0,Pe.jsx)(Lu,{priming:s.current.permissionPriming})):s.current.onError?s.current.onError(M):G.environment.launchType!==G.LaunchType.Background&&(0,Ou.showFailureToast)(M,{title:"Cannot query the data"})},[s]),d=(0,Oa.useMemo)(()=>{if(!(0,_u.existsSync)(e))throw new Error("The database does not exist");return async(y,M)=>{let A=i.current?.signal;return(0,Or.baseExecuteSQL)(y,M,{signal:A})}},[e]);return{...(0,Tu.usePromise)(d,[e,t],{...r,onError:p}),permissionView:o}}Et.useSQL=Bu;var Hn=parseInt(vu.default.release().split(".")[0])>=22,Br=Hn?"Settings":"Preferences";function Lu(e){let t=Hn?{title:"Open System Settings -> Privacy",target:"x-apple.systempreferences:com.apple.preference.security?Privacy_AllFiles"}:{title:"Open System Preferences -> Security",target:"x-apple.systempreferences:com.apple.preference.security?Privacy_AllFiles"};return G.environment.commandMode==="menu-bar"?(0,Pe.jsxs)(G.MenuBarExtra,{icon:G.Icon.Warning,title:G.environment.commandName,children:[(0,Pe.jsx)(G.MenuBarExtra.Item,{title:"Raycast needs full disk access",tooltip:`You can revert this access in ${Br} whenever you want`}),e.priming?(0,Pe.jsx)(G.MenuBarExtra.Item,{title:e.priming,tooltip:`You can revert this access in ${Br} whenever you want`}):null,(0,Pe.jsx)(G.MenuBarExtra.Separator,{}),(0,Pe.jsx)(G.MenuBarExtra.Item,{title:t.title,onAction:()=>(0,G.open)(t.target)})]}):(0,Pe.jsx)(G.List,{children:(0,Pe.jsx)(G.List.EmptyView,{icon:{source:{light:"https://raycast.com/uploads/extensions-utils-security-permissions-light.png",dark:"https://raycast.com/uploads/extensions-utils-security-permissions-dark.png"}},title:"Raycast needs full disk access.",description:`${e.priming?e.priming+`
`:""}You can revert this access in ${Br} whenever you want.`,actions:(0,Pe.jsx)(G.ActionPanel,{children:(0,Pe.jsx)(G.Action.Open,{...t})})})})}});var Qn=x(Ct=>{"use strict";Object.defineProperty(Ct,"__esModule",{value:!0});Ct.useForm=Ct.FormValidation=void 0;var Be=require("react"),$n=ve(),qr;(function(e){e.Required="required"})(qr||(Ct.FormValidation=qr={}));function Lr(e,t){if(e){if(typeof e=="function")return e(t);if(e===qr.Required){let a=typeof t<"u"&&t!==null;if(a)switch(typeof t){case"string":a=t.length>0;break;case"object":Array.isArray(t)?a=t.length>0:t instanceof Date&&(a=t.getTime()>0);break;default:break}if(!a)return"The item is required"}}}function qu(e){let{onSubmit:t,validation:a,initialValues:n={}}=e,[r,o]=(0,Be.useState)(n),[u,s]=(0,Be.useState)({}),i=(0,Be.useRef)({}),p=(0,$n.useLatest)(a||{}),d=(0,$n.useLatest)(t),y=(0,Be.useCallback)(m=>{i.current[m]?.focus()},[i]),M=(0,Be.useCallback)(async m=>{let f=!1;for(let[b,P]of Object.entries(p.current)){let E=Lr(P,m[b]);E&&(f||(f={},y(b)),f[b]=E)}if(f)return s(f),!1;let c=await d.current(m);return typeof c=="boolean"?c:!0},[p,d,y]),A=(0,Be.useCallback)((m,f)=>{s(c=>({...c,[m]:f}))},[s]),l=(0,Be.useCallback)(function(m,f){o(c=>({...c,[m]:typeof f=="function"?f(c[m]):f}))},[o]),g=(0,Be.useMemo)(()=>new Proxy({},{get(m,f){let c=p.current[f],b=r[f];return{onChange(P){u[f]&&(Lr(c,P)||A(f,void 0)),l(f,P)},onBlur(P){let E=Lr(c,P.target.value);E&&A(f,E)},error:u[f],id:f,value:typeof b>"u"?null:b,ref:P=>{i.current[f]=P}}}}),[u,p,A,r,i,l]),I=(0,Be.useCallback)(m=>{s({}),Object.entries(i.current).forEach(([f,c])=>{m?.[f]||c?.reset()}),m&&o(m)},[o,s,i]);return{handleSubmit:M,setValidationError:A,setValue:l,values:r,itemProps:g,focus:y,reset:I}}Ct.useForm=qu});var Kn=x(Ba=>{"use strict";Object.defineProperty(Ba,"__esModule",{value:!0});Ba.useAI=void 0;var Wn=require("react"),Nu=require("@raycast/api"),Vu=bt();function Fu(e,t={}){let{creativity:a,stream:n,model:r,...o}=t,[u,s]=(0,Wn.useState)(""),i=(0,Wn.useRef)(),{isLoading:p,error:d,revalidate:y}=(0,Vu.usePromise)(async(M,A,l)=>{s("");let g=Nu.AI.ask(M,{creativity:A,model:r,signal:i.current?.signal});l===!1?s(await g):(g.on("data",I=>{s(m=>m+I)}),await g)},[e,a,n],{...o,abortable:i});return{isLoading:p,data:u,error:d,revalidate:y}}Ba.useAI=Fu});var Zn=x(La=>{"use strict";Object.defineProperty(La,"__esModule",{value:!0});La.useFrecencySorting=void 0;var Nr=require("react"),Yn=ve(),ku=Ra(),ju=10,Jn=1440*60*1e3,zu=Math.log(2)/(ju*Jn),Hu={Default:100,Embed:0,Bookmark:140};function Gu(e){let t=Date.now(),a=e?e.lastVisited:0,n=e?e.frecency:0,r=(t-a)/Jn,o=Hu.Default*Math.exp(-zu*r),u=n+o;return{lastVisited:t,frecency:u}}var $u=e=>{if(process.env.NODE_ENV!=="production"&&(typeof e!="object"||!e||!("id"in e)||typeof e.id!="string"))throw new Error("Specify a key function or make sure your items have an 'id' property");return e.id};function Qu(e,t){let a=(0,Yn.useLatest)(t?.key||$u),n=(0,Yn.useLatest)(t?.sortUnvisited),[r,o]=(0,ku.useCachedState)(`raycast_frecency_${t?.namespace}`,{}),u=(0,Nr.useCallback)(async function(d){let y=a.current(d);o(M=>{let A=M[y],l=Gu(A);return{...M,[y]:l}})},[a,o]),s=(0,Nr.useCallback)(async function(d){let y=a.current(d);o(M=>{let A={...M};return delete A[y],A})},[a,o]);return{data:(0,Nr.useMemo)(()=>e?e.sort((p,d)=>{let y=r[a.current(p)],M=r[a.current(d)];return y&&!M?-1:!y&&M?1:y&&M?M.frecency-y.frecency:n.current?n.current(p,d):0}):[],[r,e,a,n]),visitItem:u,resetRanking:s}}La.useFrecencySorting=Qu});var to=x(qa=>{"use strict";Object.defineProperty(qa,"__esModule",{value:!0});qa.useLocalStorage=void 0;var Vr=require("@raycast/api"),Xn=qt(),eo=ze(),Wu=bt();function Ku(e,t){let{data:a,isLoading:n,mutate:r}=(0,Wu.usePromise)(async s=>{let i=await Vr.LocalStorage.getItem(s);return typeof i<"u"?JSON.parse(i,eo.reviver):t},[e]);async function o(s){try{await r(Vr.LocalStorage.setItem(e,JSON.stringify(s,eo.replacer)),{optimisticUpdate(i){return i}})}catch(i){await(0,Xn.showFailureToast)(i,{title:"Failed to set value in local storage"})}}async function u(){try{await r(Vr.LocalStorage.removeItem(e),{optimisticUpdate(){}})}catch(s){await(0,Xn.showFailureToast)(s,{title:"Failed to remove value from local storage"})}}return{value:a,setValue:o,removeValue:u,isLoading:n}}qa.useLocalStorage=Ku});var io=x(ht=>{"use strict";Object.defineProperty(ht,"__esModule",{value:!0});ht.slightlyLighterColor=ht.slightlyDarkerColor=void 0;function Yu(e){let t=0,a=0,n=0;if(e.length===4)t=parseInt(`${e[1]}${e[1]}`,16),a=parseInt(`${e[2]}${e[2]}`,16),n=parseInt(`${e[3]}${e[3]}`,16);else if(e.length===7)t=parseInt(`${e[1]}${e[2]}`,16),a=parseInt(`${e[3]}${e[4]}`,16),n=parseInt(`${e[5]}${e[6]}`,16);else throw new Error(`Malformed hex color: ${e}`);return{r:t,g:a,b:n}}function Ju({r:e,g:t,b:a}){let n=e.toString(16),r=t.toString(16),o=a.toString(16);return n.length===1&&(n=`0${n}`),r.length===1&&(r=`0${r}`),o.length===1&&(o=`0${o}`),`#${n}${r}${o}`}function Zu({r:e,g:t,b:a}){e/=255,t/=255,a/=255;let n=Math.min(e,t,a),r=Math.max(e,t,a),o=r-n,u=0,s=0,i=0;return o===0?u=0:r===e?u=(t-a)/o%6:r===t?u=(a-e)/o+2:u=(e-t)/o+4,u=Math.round(u*60),u<0&&(u+=360),i=(r+n)/2,s=o===0?0:o/(1-Math.abs(2*i-1)),s=+(s*100).toFixed(1),i=+(i*100).toFixed(1),{h:u,s,l:i}}function Xu({h:e,s:t,l:a}){t/=100,a/=100;let n=(1-Math.abs(2*a-1))*t,r=n*(1-Math.abs(e/60%2-1)),o=a-n/2,u=0,s=0,i=0;return e>=0&&e<60?(u=n,s=r,i=0):e>=60&&e<120?(u=r,s=n,i=0):e>=120&&e<180?(u=0,s=n,i=r):e>=180&&e<240?(u=0,s=r,i=n):e>=240&&e<300?(u=r,s=0,i=n):e>=300&&e<360&&(u=n,s=0,i=r),u=Math.round((u+o)*255),s=Math.round((s+o)*255),i=Math.round((i+o)*255),{r:u,g:s,b:i}}function ao(e){return Zu(Yu(e))}function ro(e){return Ju(Xu(e))}function no(e,t,a){return t<a?e<t?t:e>a?a:e:e<a?a:e>t?t:e}var oo=12;function ep(e){let t=ao(e);return ro({h:t.h,s:t.s,l:no(t.l-oo,0,100)})}ht.slightlyDarkerColor=ep;function tp(e){let t=ao(e);return ro({h:t.h,s:t.s,l:no(t.l+oo,0,100)})}ht.slightlyLighterColor=tp});var po=x(Na=>{"use strict";Object.defineProperty(Na,"__esModule",{value:!0});Na.getAvatarIcon=void 0;var so=io();function Dt(e,t){let a=e.charCodeAt(t);if(Number.isNaN(a))return["",t];if(a<55296||a>57343)return[e.charAt(t),t];if(55296<=a&&a<=56319){if(e.length<=t+1)throw new Error("High surrogate without following low surrogate");let r=e.charCodeAt(t+1);if(56320>r||r>57343)throw new Error("High surrogate without following low surrogate");return[e.charAt(t)+e.charAt(t+1),t+1]}if(t===0)throw new Error("Low surrogate without preceding high surrogate");let n=e.charCodeAt(t-1);if(55296>n||n>56319)throw new Error("Low surrogate without preceding high surrogate");return[e.charAt(t+1),t+1]}var uo=["#DC829A","#D64854","#D47600","#D36CDD","#52A9E4","#7871E8","#70920F","#43B93A","#EB6B3E","#26B795","#D85A9B","#A067DC","#BD9500","#5385D9"];function ap(e,t){let a=e.trim().split(" "),n;if(a.length==1&&Dt(a[0],0)[0])n=Dt(a[0],0)[0];else if(a.length>1){let i=Dt(a[0],0)[0]||"",p=Dt(a[a.length-1],0)[0]??"";n=i+p}else n="";let r;if(t?.background)r=t?.background;else{let i=0,[p,d]=Dt(n,0);for(;p;)i+=p.charCodeAt(0),[p,d]=Dt(n,d+1);let y=i%uo.length;r=uo[y]}let u=50-0;return`data:image/svg+xml,${`<svg width="100px" height="100px">
  ${t?.gradient!==!1?`<defs>
      <linearGradient id="Gradient" x1="0.25" x2="0.75" y1="0" y2="1">
        <stop offset="0%" stop-color="${(0,so.slightlyLighterColor)(r)}"/>
        <stop offset="50%" stop-color="${r}"/>
        <stop offset="100%" stop-color="${(0,so.slightlyDarkerColor)(r)}"/>
      </linearGradient>
  </defs>`:""}
      <circle cx="50" cy="50" r="${u}" fill="${t?.gradient!==!1?"url(#Gradient)":r}" />
      ${n?`<text x="50" y="80" font-size="${u-1}" font-family="Inter, sans-serif" text-anchor="middle" fill="white">${n.toUpperCase()}</text>`:""}
    </svg>
  `.replaceAll(`
`,"")}`}Na.getAvatarIcon=ap});var co=x(Va=>{"use strict";Object.defineProperty(Va,"__esModule",{value:!0});Va.getFavicon=void 0;var lo=require("@raycast/api"),rp=require("url");function np(e,t){try{let n=(typeof e=="string"?new rp.URL(e):e).hostname;return{source:`https://www.google.com/s2/favicons?sz=${t?.size??64}&domain=${n}`,fallback:t?.fallback??lo.Icon.Link,mask:t?.mask}}catch(a){return console.error(a),lo.Icon.Link}}Va.getFavicon=np});var bo=x(Fa=>{"use strict";Object.defineProperty(Fa,"__esModule",{value:!0});Fa.getProgressIcon=void 0;var yo=require("@raycast/api");function So(e,t,a,n){let r=(n-90)*Math.PI/180;return{x:e+a*Math.cos(r),y:t+a*Math.sin(r)}}function op(e,t,a,n,r){let o=So(e,t,a,r),u=So(e,t,a,n),s=r-n<=180?"0":"1";return["M",o.x,o.y,"A",a,a,0,s,0,u.x,u.y].join(" ")}function ip(e,t=yo.Color.Red,a){let n=a?.background||(yo.environment.appearance==="light"?"black":"white"),r=a?.backgroundOpacity||.1,o=10,s=50-5-o/2;return`data:image/svg+xml,${`<svg width="100px" height="100px">
      <circle cx="50" cy="50" r="${s}" stroke-width="${o}" stroke="${e<1?n:t}" opacity="${e<1?r:"1"}" fill="none" />
      ${e>0&&e<1?`<path d="${op(50,50,s,0,e*360)}" stroke="${t}" stroke-width="${o}" fill="none" />`:""}
    </svg>
  `.replaceAll(`
`,"")}`}Fa.getProgressIcon=ip});var Io=x(Le=>{"use strict";var sp=Le&&Le.__createBinding||(Object.create?(function(e,t,a,n){n===void 0&&(n=a);var r=Object.getOwnPropertyDescriptor(t,a);(!r||("get"in r?!t.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,r)}):(function(e,t,a,n){n===void 0&&(n=a),e[n]=t[a]})),Fr=Le&&Le.__exportStar||function(e,t){for(var a in e)a!=="default"&&!Object.prototype.hasOwnProperty.call(t,a)&&sp(t,e,a)};Object.defineProperty(Le,"__esModule",{value:!0});Fr(po(),Le);Fr(co(),Le);Fr(bo(),Le)});var go=x(H=>{"use strict";Object.defineProperty(H,"__esModule",{value:!0});H.zoomService=H.slackService=H.linearService=H.jiraService=H.googleService=H.githubService=H.asanaService=void 0;var $=require("@raycast/api"),at=kr(),ka={asana:"1191201745684312",github:"7235fe8d42157f1f38c0",linear:"c8ff37b9225c3c9aefd7d66ea0e5b6f1",slack:"851756884692.5546927290212"},Qe=e=>`data:image/svg+xml,${e}`,rt={asana:Qe('<svg xmlns="http://www.w3.org/2000/svg" width="251" height="232" fill="none"><path fill="#F06A6A" d="M179.383 54.373c0 30.017-24.337 54.374-54.354 54.374-30.035 0-54.373-24.338-54.373-54.374C70.656 24.338 94.993 0 125.029 0c30.017 0 54.354 24.338 54.354 54.373ZM54.393 122.33C24.376 122.33.02 146.668.02 176.685c0 30.017 24.337 54.373 54.373 54.373 30.035 0 54.373-24.338 54.373-54.373 0-30.017-24.338-54.355-54.373-54.355Zm141.253 0c-30.035 0-54.373 24.338-54.373 54.374 0 30.035 24.338 54.373 54.373 54.373 30.017 0 54.374-24.338 54.374-54.373 0-30.036-24.338-54.374-54.374-54.374Z"/></svg>'),github:{source:Qe('<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>'),tintColor:$.Color.PrimaryText},google:Qe('<svg xmlns="http://www.w3.org/2000/svg" style="display:block" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/><path fill="none" d="M0 0h48v48H0z"/></svg>'),jira:Qe('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="2361" height="2500" viewBox="2.59 0 214.091 224"><linearGradient id="a" x1="102.4" x2="56.15" y1="218.63" y2="172.39" gradientTransform="matrix(1 0 0 -1 0 264)" gradientUnits="userSpaceOnUse"><stop offset=".18" stop-color="#0052cc"/><stop offset="1" stop-color="#2684ff"/></linearGradient><linearGradient xlink:href="#a" id="b" x1="114.65" x2="160.81" y1="85.77" y2="131.92"/><path fill="#2684ff" d="M214.06 105.73 117.67 9.34 108.33 0 35.77 72.56 2.59 105.73a8.89 8.89 0 0 0 0 12.54l66.29 66.29L108.33 224l72.55-72.56 1.13-1.12 32.05-32a8.87 8.87 0 0 0 0-12.59zm-105.73 39.39L75.21 112l33.12-33.12L141.44 112z"/><path fill="url(#a)" d="M108.33 78.88a55.75 55.75 0 0 1-.24-78.61L35.62 72.71l39.44 39.44z"/><path fill="url(#b)" d="m141.53 111.91-33.2 33.21a55.77 55.77 0 0 1 0 78.86L181 151.35z"/></svg>'),linear:{source:{light:Qe('<svg xmlns="http://www.w3.org/2000/svg" fill="#222326" width="200" height="200" viewBox="0 0 100 100"><path d="M1.22541 61.5228c-.2225-.9485.90748-1.5459 1.59638-.857L39.3342 97.1782c.6889.6889.0915 1.8189-.857 1.5964C20.0515 94.4522 5.54779 79.9485 1.22541 61.5228ZM.00189135 46.8891c-.01764375.2833.08887215.5599.28957165.7606L52.3503 99.7085c.2007.2007.4773.3075.7606.2896 2.3692-.1476 4.6938-.46 6.9624-.9259.7645-.157 1.0301-1.0963.4782-1.6481L2.57595 39.4485c-.55186-.5519-1.49117-.2863-1.648174.4782-.465915 2.2686-.77832 4.5932-.92588465 6.9624ZM4.21093 29.7054c-.16649.3738-.08169.8106.20765 1.1l64.77602 64.776c.2894.2894.7262.3742 1.1.2077 1.7861-.7956 3.5171-1.6927 5.1855-2.684.5521-.328.6373-1.0867.1832-1.5407L8.43566 24.3367c-.45409-.4541-1.21271-.3689-1.54074.1832-.99132 1.6684-1.88843 3.3994-2.68399 5.1855ZM12.6587 18.074c-.3701-.3701-.393-.9637-.0443-1.3541C21.7795 6.45931 35.1114 0 49.9519 0 77.5927 0 100 22.4073 100 50.0481c0 14.8405-6.4593 28.1724-16.7199 37.3375-.3903.3487-.984.3258-1.3542-.0443L12.6587 18.074Z"/></svg>'),dark:Qe('<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="200" height="200" viewBox="0 0 100 100"><path d="M1.22541 61.5228c-.2225-.9485.90748-1.5459 1.59638-.857L39.3342 97.1782c.6889.6889.0915 1.8189-.857 1.5964C20.0515 94.4522 5.54779 79.9485 1.22541 61.5228ZM.00189135 46.8891c-.01764375.2833.08887215.5599.28957165.7606L52.3503 99.7085c.2007.2007.4773.3075.7606.2896 2.3692-.1476 4.6938-.46 6.9624-.9259.7645-.157 1.0301-1.0963.4782-1.6481L2.57595 39.4485c-.55186-.5519-1.49117-.2863-1.648174.4782-.465915 2.2686-.77832 4.5932-.92588465 6.9624ZM4.21093 29.7054c-.16649.3738-.08169.8106.20765 1.1l64.77602 64.776c.2894.2894.7262.3742 1.1.2077 1.7861-.7956 3.5171-1.6927 5.1855-2.684.5521-.328.6373-1.0867.1832-1.5407L8.43566 24.3367c-.45409-.4541-1.21271-.3689-1.54074.1832-.99132 1.6684-1.88843 3.3994-2.68399 5.1855ZM12.6587 18.074c-.3701-.3701-.393-.9637-.0443-1.3541C21.7795 6.45931 35.1114 0 49.9519 0 77.5927 0 100 22.4073 100 50.0481c0 14.8405-6.4593 28.1724-16.7199 37.3375-.3903.3487-.984.3258-1.3542-.0443L12.6587 18.074Z" /></svg>')}},slack:Qe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="73 73 124 124"><style>.st0{fill:#e01e5a}.st1{fill:#36c5f0}.st2{fill:#2eb67d}.st3{fill:#ecb22e}</style><path d="M99.4 151.2c0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9h12.9v12.9zM105.9 151.2c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v32.3c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9v-32.3z" class="st0"/><path d="M118.8 99.4c-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v12.9h-12.9zM118.8 105.9c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H86.5c-7.1 0-12.9-5.8-12.9-12.9s5.8-12.9 12.9-12.9h32.3z" class="st1"/><path d="M170.6 118.8c0-7.1 5.8-12.9 12.9-12.9 7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9h-12.9v-12.9zM164.1 118.8c0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9V86.5c0-7.1 5.8-12.9 12.9-12.9 7.1 0 12.9 5.8 12.9 12.9v32.3z" class="st2"/><path d="M151.2 170.6c7.1 0 12.9 5.8 12.9 12.9 0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9v-12.9h12.9zM151.2 164.1c-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9h32.3c7.1 0 12.9 5.8 12.9 12.9 0 7.1-5.8 12.9-12.9 12.9h-32.3z" class="st3"/></svg>'),zoom:Qe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 351.845 80"><path d="M73.786 78.835H10.88A10.842 10.842 0 0 1 .833 72.122a10.841 10.841 0 0 1 2.357-11.85L46.764 16.7h-31.23C6.954 16.699 0 9.744 0 1.165h58.014c4.414 0 8.357 2.634 10.046 6.712a10.843 10.843 0 0 1-2.356 11.85L22.13 63.302h36.122c8.58 0 15.534 6.955 15.534 15.534Zm278.059-48.544C351.845 13.588 338.256 0 321.553 0c-8.934 0-16.975 3.89-22.524 10.063C293.48 3.89 285.44 0 276.505 0c-16.703 0-30.291 13.588-30.291 30.291v48.544c8.579 0 15.534-6.955 15.534-15.534v-33.01c0-8.137 6.62-14.757 14.757-14.757s14.757 6.62 14.757 14.757v33.01c0 8.58 6.955 15.534 15.534 15.534V30.291c0-8.137 6.62-14.757 14.757-14.757s14.758 6.62 14.758 14.757v33.01c0 8.58 6.954 15.534 15.534 15.534V30.291ZM238.447 40c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.908-40 40-40 40 17.909 40 40Zm-15.534 0c0-13.512-10.954-24.466-24.466-24.466S173.98 26.488 173.98 40s10.953 24.466 24.466 24.466S222.913 53.512 222.913 40Zm-70.68 0c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.909-40 40-40 40 17.909 40 40Zm-15.534 0c0-13.512-10.954-24.466-24.466-24.466S87.767 26.488 87.767 40s10.954 24.466 24.466 24.466S136.699 53.512 136.699 40Z" style="fill:#0b5cff"/></svg>')},up=e=>new at.OAuthService({client:new $.OAuth.PKCEClient({redirectMethod:$.OAuth.RedirectMethod.Web,providerName:"Asana",providerIcon:rt.asana,providerId:"asana",description:"Connect your Asana account"}),clientId:e.clientId??ka.asana,authorizeUrl:e.authorizeUrl??"https://asana.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://asana.oauth.raycast.com/token",refreshTokenUrl:e.refreshTokenUrl??"https://asana.oauth.raycast.com/refresh-token",scope:e.scope,personalAccessToken:e.personalAccessToken,onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});H.asanaService=up;var pp=e=>new at.OAuthService({client:new $.OAuth.PKCEClient({redirectMethod:$.OAuth.RedirectMethod.Web,providerName:"GitHub",providerIcon:rt.github,providerId:"github",description:"Connect your GitHub account"}),clientId:e.clientId??ka.github,authorizeUrl:e.authorizeUrl??"https://github.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://github.oauth.raycast.com/token",refreshTokenUrl:e.refreshTokenUrl??"https://github.oauth.raycast.com/refresh-token",scope:e.scope,personalAccessToken:e.personalAccessToken,onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});H.githubService=pp;var lp=e=>new at.OAuthService({client:new $.OAuth.PKCEClient({redirectMethod:$.OAuth.RedirectMethod.AppURI,providerName:"Google",providerIcon:rt.google,providerId:"google",description:"Connect your Google account"}),clientId:e.clientId,authorizeUrl:e.authorizeUrl??"https://accounts.google.com/o/oauth2/v2/auth",tokenUrl:e.tokenUrl??"https://oauth2.googleapis.com/token",refreshTokenUrl:e.tokenUrl,scope:e.scope,personalAccessToken:e.personalAccessToken,bodyEncoding:e.bodyEncoding??"url-encoded",onAuthorize:e.onAuthorize,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});H.googleService=lp;var cp=e=>new at.OAuthService({client:new $.OAuth.PKCEClient({redirectMethod:$.OAuth.RedirectMethod.Web,providerName:"Jira",providerIcon:rt.jira,providerId:"jira",description:"Connect your Jira account"}),clientId:e.clientId,authorizeUrl:e.authorizeUrl??"https://auth.atlassian.com/authorize",tokenUrl:e.tokenUrl??"https://auth.atlassian.com/oauth/token",refreshTokenUrl:e.refreshTokenUrl,scope:e.scope,personalAccessToken:e.personalAccessToken,onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});H.jiraService=cp;var yp=e=>new at.OAuthService({client:new $.OAuth.PKCEClient({redirectMethod:$.OAuth.RedirectMethod.Web,providerName:"Linear",providerIcon:rt.linear,providerId:"linear",description:"Connect your Linear account"}),clientId:e.clientId??ka.linear,authorizeUrl:e.authorizeUrl??"https://linear.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://linear.oauth.raycast.com/token",refreshTokenUrl:e.refreshTokenUrl??"https://linear.oauth.raycast.com/refresh-token",scope:e.scope,extraParameters:{actor:"user"},onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});H.linearService=yp;var dp=e=>new at.OAuthService({client:new $.OAuth.PKCEClient({redirectMethod:$.OAuth.RedirectMethod.Web,providerName:"Slack",providerIcon:rt.slack,providerId:"slack",description:"Connect your Slack account"}),clientId:e.clientId??ka.slack,authorizeUrl:e.authorizeUrl??"https://slack.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://slack.oauth.raycast.com/token",refreshTokenUrl:e.tokenUrl??"https://slack.oauth.raycast.com/refresh-token",scope:"",extraParameters:{user_scope:e.scope},personalAccessToken:e.personalAccessToken,bodyEncoding:e.tokenUrl?e.bodyEncoding??"url-encoded":"json",onAuthorize:e.onAuthorize,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser??(t=>({access_token:t.authed_user.access_token,scope:t.authed_user.scope}))});H.slackService=dp;var Sp=e=>new at.OAuthService({client:new $.OAuth.PKCEClient({redirectMethod:$.OAuth.RedirectMethod.Web,providerName:"Zoom",providerIcon:rt.zoom,providerId:"zoom",description:"Connect your Zoom account"}),clientId:e.clientId,authorizeUrl:e.authorizeUrl??"https://zoom.us/oauth/authorize",tokenUrl:e.tokenUrl??"https://zoom.us/oauth/token",refreshTokenUrl:e.refreshTokenUrl,scope:e.scope,personalAccessToken:e.personalAccessToken,bodyEncoding:e.bodyEncoding??"url-encoded",onAuthorize:e.onAuthorize,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});H.zoomService=Sp});var kr=x(xt=>{"use strict";var bp=xt&&xt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(xt,"__esModule",{value:!0});xt.OAuthService=void 0;var Mo=bp($t()),nt=go(),Ee=class{constructor(t){this.clientId=t.clientId,this.scope=Array.isArray(t.scope)?t.scope.join(" "):t.scope,this.personalAccessToken=t.personalAccessToken,this.bodyEncoding=t.bodyEncoding,this.client=t.client,this.extraParameters=t.extraParameters,this.authorizeUrl=t.authorizeUrl,this.tokenUrl=t.tokenUrl,this.refreshTokenUrl=t.refreshTokenUrl,this.onAuthorize=t.onAuthorize,this.tokenResponseParser=t.tokenResponseParser??(a=>a),this.tokenRefreshResponseParser=t.tokenRefreshResponseParser??(a=>a),this.authorize=this.authorize.bind(this)}async authorize(){let t=await this.client.getTokens();if(t?.accessToken){if(t.refreshToken&&t.isExpired()){let o=await this.refreshTokens({token:t.refreshToken});if(o)return await this.client.setTokens(o),o.access_token}return t.accessToken}let a=await this.client.authorizationRequest({endpoint:this.authorizeUrl,clientId:this.clientId,scope:this.scope,extraParameters:this.extraParameters}),{authorizationCode:n}=await this.client.authorize(a),r=await this.fetchTokens({authRequest:a,authorizationCode:n});return await this.client.setTokens(r),r.access_token}async fetchTokens({authRequest:t,authorizationCode:a}){let n;if(this.bodyEncoding==="url-encoded"){let u=new URLSearchParams;u.append("client_id",this.clientId),u.append("code",a),u.append("code_verifier",t.codeVerifier),u.append("grant_type","authorization_code"),u.append("redirect_uri",t.redirectURI),n={body:u}}else n={body:JSON.stringify({client_id:this.clientId,code:a,code_verifier:t.codeVerifier,grant_type:"authorization_code",redirect_uri:t.redirectURI}),headers:{"Content-Type":"application/json"}};let r=await(0,Mo.default)(this.tokenUrl,{method:"POST",...n});if(!r.ok){let u=await r.text();throw console.error("fetch tokens error:",u),new Error(`Error while fetching tokens: ${r.status} (${r.statusText})
${u}`)}let o=this.tokenResponseParser(await r.json());return Array.isArray(o.scope)?{...o,scope:o.scope.join(" ")}:o}async refreshTokens({token:t}){let a;if(this.bodyEncoding==="url-encoded"){let r=new URLSearchParams;r.append("client_id",this.clientId),r.append("refresh_token",t),r.append("grant_type","refresh_token"),a={body:r}}else a={body:JSON.stringify({client_id:this.clientId,refresh_token:t,grant_type:"refresh_token"}),headers:{"Content-Type":"application/json"}};let n=await(0,Mo.default)(this.refreshTokenUrl??this.tokenUrl,{method:"POST",...a});if(n.ok){let r=this.tokenRefreshResponseParser(await n.json());return r.refresh_token=r.refresh_token??t,r}else{let r=await n.text();console.error("refresh tokens error:",r),this.client.description=`${this.client.providerName} needs you to sign-in again. Press \u23CE or click the button below to continue.`,await this.client.removeTokens(),await this.authorize()}}};xt.OAuthService=Ee;Ee.asana=nt.asanaService;Ee.github=nt.githubService;Ee.google=nt.googleService;Ee.jira=nt.jiraService;Ee.linear=nt.linearService;Ee.slack=nt.slackService;Ee.zoom=nt.zoomService});var mo=x(Ut=>{"use strict";Object.defineProperty(Ut,"__esModule",{value:!0});Ut.getAccessToken=Ut.withAccessToken=void 0;var Ip=require("react/jsx-runtime"),gp=require("@raycast/api"),We=null,ot=null,jr=null,zr=null,Hr=null;function Mp(e){return gp.environment.commandMode==="no-view"?t=>async n=>{if(!We){We=e.personalAccessToken??await e.authorize(),ot=e.personalAccessToken?"personal":"oauth";let r=(await e.client?.getTokens())?.idToken;e.onAuthorize&&await Promise.resolve(e.onAuthorize({token:We,type:ot,idToken:r}))}return t(n)}:t=>{let a=n=>{e.personalAccessToken?(We=e.personalAccessToken,ot="personal"):(jr||(jr=Gr(e.authorize())),We=jr.read(),ot="oauth");let r;return e.client&&(zr||(zr=Gr(e.client.getTokens())),r=zr.read()?.idToken),!Hr&&e.onAuthorize&&(Hr=Gr(Promise.resolve(e.onAuthorize({token:We,type:ot,idToken:r})))),Hr?.read(),(0,Ip.jsx)(t,{...n})};return a.displayName=`withAccessToken(${t.displayName||t.name})`,a}}Ut.withAccessToken=Mp;function mp(){if(!We||!ot)throw new Error("getAccessToken must be used when authenticated (eg. used inside `withAccessToken`)");return{token:We,type:ot}}Ut.getAccessToken=mp;function Gr(e){let t="pending",a,n=e.then(o=>{t="success",a=o},o=>{t="error",a=o});return{read:()=>{switch(t){case"pending":throw n;case"error":throw a;default:return a}}}}});var Ao=x(Ke=>{"use strict";var Rp=Ke&&Ke.__createBinding||(Object.create?(function(e,t,a,n){n===void 0&&(n=a);var r=Object.getOwnPropertyDescriptor(t,a);(!r||("get"in r?!t.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,r)}):(function(e,t,a,n){n===void 0&&(n=a),e[n]=t[a]})),Ro=Ke&&Ke.__exportStar||function(e,t){for(var a in e)a!=="default"&&!Object.prototype.hasOwnProperty.call(t,a)&&Rp(t,e,a)};Object.defineProperty(Ke,"__esModule",{value:!0});Ro(kr(),Ke);Ro(mo(),Ke)});var ho=x(de=>{"use strict";var fo=de&&de.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(de,"__esModule",{value:!0});de.createDeeplink=de.createExtensionDeeplink=de.createScriptCommandDeeplink=de.DeeplinkType=void 0;var Qr=require("@raycast/api"),Ap=fo(require("node:fs")),fp=fo(require("node:path")),$r;(function(e){e.ScriptCommand="script-command",e.Extension="extension"})($r||(de.DeeplinkType=$r={}));function Po(){return Qr.environment.raycastVersion.includes("alpha")?"raycastinternal://":"raycast://"}function Pp(){let e=JSON.parse(Ap.default.readFileSync(fp.default.join(Qr.environment.assetsPath,"..","package.json"),"utf8"));return e.owner||e.author}function Eo(e){let t=`${Po()}script-commands/${e.command}`;if(e.arguments){let a="";for(let n of e.arguments)a+="&arguments="+encodeURIComponent(n);t+="?"+a.substring(1)}return t}de.createScriptCommandDeeplink=Eo;function Co(e){let t=Pp(),a=Qr.environment.extensionName;"ownerOrAuthorName"in e&&"extensionName"in e&&(t=e.ownerOrAuthorName,a=e.extensionName);let n=`${Po()}extensions/${t}/${a}/${e.command}`,r="";return e.launchType&&(r+="&launchType="+encodeURIComponent(e.launchType)),e.arguments&&(r+="&arguments="+encodeURIComponent(JSON.stringify(e.arguments))),e.context&&(r+="&context="+encodeURIComponent(JSON.stringify(e.context))),e.fallbackText&&(r+="&fallbackText="+encodeURIComponent(e.fallbackText)),r&&(n+="?"+r.substring(1)),n}de.createExtensionDeeplink=Co;function Ep(e){return e.type===$r.ScriptCommand?Eo(e):Co(e)}de.createDeeplink=Ep});var Do=x(ja=>{"use strict";Object.defineProperty(ja,"__esModule",{value:!0});ja.executeSQL=void 0;var Cp=wr();function hp(e,t){return(0,Cp.baseExecuteSQL)(e,t)}ja.executeSQL=hp});var xo=x(_t=>{"use strict";var Dp=_t&&_t.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(_t,"__esModule",{value:!0});_t.runAppleScript=void 0;var xp=Dp(require("node:child_process")),Jt=Da();async function Up(e,t,a){let{humanReadableOutput:n,language:r,timeout:o,...u}=Array.isArray(t)?a||{}:t||{},s=n!==!1?[]:["-ss"];r==="JavaScript"&&s.push("-l","JavaScript"),Array.isArray(t)&&s.push("-",...t);let i=xp.default.spawn("osascript",s,{...u,env:{PATH:"/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"}}),p=(0,Jt.getSpawnedPromise)(i,{timeout:o??1e4});i.stdin.end(e);let[{error:d,exitCode:y,signal:M,timedOut:A},l,g]=await(0,Jt.getSpawnedResult)(i,{encoding:"utf8"},p),I=(0,Jt.handleOutput)({stripFinalNewline:!0},l),m=(0,Jt.handleOutput)({stripFinalNewline:!0},g);return(0,Jt.defaultParsing)({stdout:I,stderr:m,error:d,exitCode:y,signal:M,timedOut:A,command:"osascript",options:a,parentError:new Error})}_t.runAppleScript=Up});var Uo=x(Ha=>{"use strict";Object.defineProperty(Ha,"__esModule",{value:!0});Ha.withCache=void 0;var _p=require("@raycast/api"),za=ze();function vp(e,t){let a=new _p.Cache({namespace:(0,za.hash)(e)}),n=async(...r)=>{let o=(0,za.hash)(r||[])+t?.internal_cacheKeySuffix,u=a.get(o);if(u){let{data:i,timestamp:p}=JSON.parse(u,za.reviver);if(!(t?.maxAge&&Date.now()-p>t.maxAge)&&(!t?.validate||t.validate(i)))return i}let s=await e(...r);return a.set(o,JSON.stringify({data:s,timestamp:Date.now()},za.replacer)),s};return n.clearCache=()=>{a.clear()},n}Ha.withCache=vp});var Me=x(v=>{"use strict";var Tp=v&&v.__createBinding||(Object.create?(function(e,t,a,n){n===void 0&&(n=a);var r=Object.getOwnPropertyDescriptor(t,a);(!r||("get"in r?!t.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,r)}):(function(e,t,a,n){n===void 0&&(n=a),e[n]=t[a]})),N=v&&v.__exportStar||function(e,t){for(var a in e)a!=="default"&&!Object.prototype.hasOwnProperty.call(t,a)&&Tp(t,e,a)};Object.defineProperty(v,"__esModule",{value:!0});N(bt(),v);N(Ra(),v);N(Ft(),v);N(Tn(),v);N(qn(),v);N(kn(),v);N(Gn(),v);N(Qn(),v);N(Kn(),v);N(Zn(),v);N(to(),v);N(Io(),v);N(Ao(),v);N(ho(),v);N(Do(),v);N(xo(),v);N(qt(),v);N(Uo(),v)});var J={};dt(J,{default:()=>ko.default});var ko,Ja=Ir(()=>{Y(J,require("formdata-polyfill/esm.min.js"));ko=w(require("formdata-polyfill/esm.min.js"))});var ne={};dt(ne,{default:()=>Go.default});var Go,Jr=Ir(()=>{Y(ne,require("fetch-blob/from.js"));Go=w(require("fetch-blob/from.js"))});var Qo={};dt(Qo,{toFormData:()=>Xp});function Zp(e){let t=e.match(/\bfilename=("(.*?)"|([^()<>@,;:\\"/[\]?={}\s\t]+))($|;\s)/i);if(!t)return;let a=t[2]||t[3]||"",n=a.slice(a.lastIndexOf("\\")+1);return n=n.replace(/%22/g,'"'),n=n.replace(/&#(\d{4});/g,(r,o)=>String.fromCharCode(o)),n}async function Xp(e,t){if(!/multipart/i.test(t))throw new TypeError("Failed to fetch");let a=t.match(/boundary=(?:"([^"]+)"|([^;]+))/i);if(!a)throw new TypeError("no or bad content-type header, no multipart boundary");let n=new Zr(a[1]||a[2]),r,o,u,s,i,p,d=[],y=new J.FormData,M=m=>{u+=I.decode(m,{stream:!0})},A=m=>{d.push(m)},l=()=>{let m=new ne.File(d,p,{type:i});y.append(s,m)},g=()=>{y.append(s,u)},I=new TextDecoder("utf-8");I.decode(),n.onPartBegin=function(){n.onPartData=M,n.onPartEnd=g,r="",o="",u="",s="",i="",p=null,d.length=0},n.onHeaderField=function(m){r+=I.decode(m,{stream:!0})},n.onHeaderValue=function(m){o+=I.decode(m,{stream:!0})},n.onHeaderEnd=function(){if(o+=I.decode(),r=r.toLowerCase(),r==="content-disposition"){let m=o.match(/\bname=("([^"]*)"|([^()<>@,;:\\"/[\]?={}\s\t]+))/i);m&&(s=m[2]||m[3]||""),p=Zp(o),p&&(n.onPartData=A,n.onPartEnd=l)}else r==="content-type"&&(i=o);o="",r=""};for await(let m of e)n.write(m);return n.end(),y}var Ce,_,$o,Ze,Xa,er,Qp,ta,Wp,Kp,Yp,Jp,ut,Zr,Wo=Ir(()=>{Jr();Ja();Ce=0,_={START_BOUNDARY:Ce++,HEADER_FIELD_START:Ce++,HEADER_FIELD:Ce++,HEADER_VALUE_START:Ce++,HEADER_VALUE:Ce++,HEADER_VALUE_ALMOST_DONE:Ce++,HEADERS_ALMOST_DONE:Ce++,PART_DATA_START:Ce++,PART_DATA:Ce++,END:Ce++},$o=1,Ze={PART_BOUNDARY:$o,LAST_BOUNDARY:$o*=2},Xa=10,er=13,Qp=32,ta=45,Wp=58,Kp=97,Yp=122,Jp=e=>e|32,ut=()=>{},Zr=class{constructor(t){this.index=0,this.flags=0,this.onHeaderEnd=ut,this.onHeaderField=ut,this.onHeadersEnd=ut,this.onHeaderValue=ut,this.onPartBegin=ut,this.onPartData=ut,this.onPartEnd=ut,this.boundaryChars={},t=`\r
--`+t;let a=new Uint8Array(t.length);for(let n=0;n<t.length;n++)a[n]=t.charCodeAt(n),this.boundaryChars[a[n]]=!0;this.boundary=a,this.lookbehind=new Uint8Array(this.boundary.length+8),this.state=_.START_BOUNDARY}write(t){let a=0,n=t.length,r=this.index,{lookbehind:o,boundary:u,boundaryChars:s,index:i,state:p,flags:d}=this,y=this.boundary.length,M=y-1,A=t.length,l,g,I=b=>{this[b+"Mark"]=a},m=b=>{delete this[b+"Mark"]},f=(b,P,E,U)=>{(P===void 0||P!==E)&&this[b](U&&U.subarray(P,E))},c=(b,P)=>{let E=b+"Mark";E in this&&(P?(f(b,this[E],a,t),delete this[E]):(f(b,this[E],t.length,t),this[E]=0))};for(a=0;a<n;a++)switch(l=t[a],p){case _.START_BOUNDARY:if(i===u.length-2){if(l===ta)d|=Ze.LAST_BOUNDARY;else if(l!==er)return;i++;break}else if(i-1===u.length-2){if(d&Ze.LAST_BOUNDARY&&l===ta)p=_.END,d=0;else if(!(d&Ze.LAST_BOUNDARY)&&l===Xa)i=0,f("onPartBegin"),p=_.HEADER_FIELD_START;else return;break}l!==u[i+2]&&(i=-2),l===u[i+2]&&i++;break;case _.HEADER_FIELD_START:p=_.HEADER_FIELD,I("onHeaderField"),i=0;case _.HEADER_FIELD:if(l===er){m("onHeaderField"),p=_.HEADERS_ALMOST_DONE;break}if(i++,l===ta)break;if(l===Wp){if(i===1)return;c("onHeaderField",!0),p=_.HEADER_VALUE_START;break}if(g=Jp(l),g<Kp||g>Yp)return;break;case _.HEADER_VALUE_START:if(l===Qp)break;I("onHeaderValue"),p=_.HEADER_VALUE;case _.HEADER_VALUE:l===er&&(c("onHeaderValue",!0),f("onHeaderEnd"),p=_.HEADER_VALUE_ALMOST_DONE);break;case _.HEADER_VALUE_ALMOST_DONE:if(l!==Xa)return;p=_.HEADER_FIELD_START;break;case _.HEADERS_ALMOST_DONE:if(l!==Xa)return;f("onHeadersEnd"),p=_.PART_DATA_START;break;case _.PART_DATA_START:p=_.PART_DATA,I("onPartData");case _.PART_DATA:if(r=i,i===0){for(a+=M;a<A&&!(t[a]in s);)a+=y;a-=M,l=t[a]}if(i<u.length)u[i]===l?(i===0&&c("onPartData",!0),i++):i=0;else if(i===u.length)i++,l===er?d|=Ze.PART_BOUNDARY:l===ta?d|=Ze.LAST_BOUNDARY:i=0;else if(i-1===u.length)if(d&Ze.PART_BOUNDARY){if(i=0,l===Xa){d&=~Ze.PART_BOUNDARY,f("onPartEnd"),f("onPartBegin"),p=_.HEADER_FIELD_START;break}}else d&Ze.LAST_BOUNDARY&&l===ta?(f("onPartEnd"),p=_.END,d=0):i=0;if(i>0)o[i-1]=l;else if(r>0){let b=new Uint8Array(o.buffer,o.byteOffset,o.byteLength);f("onPartData",0,r,b),r=0,I("onPartData"),a--}break;case _.END:break;default:throw new Error(`Unexpected state entered: ${p}`)}c("onHeaderField"),c("onHeaderValue"),c("onPartData"),this.index=i,this.state=p,this.flags=d}end(){if(this.state===_.HEADER_FIELD_START&&this.index===0||this.state===_.PART_DATA&&this.index===this.boundary.length)this.onPartEnd();else if(this.state!==_.END)throw new Error("MultipartParser.end(): stream ended unexpectedly")}}});var Uc={};dt(Uc,{default:()=>xc});module.exports=Ki(Uc);var da=require("@raycast/api"),ki=w(Me()),ji=require("react");var Bt=require("@raycast/api");var C=require("@raycast/api"),ct=w(Me()),Li=require("react");var Mi=require("@octokit/rest"),mi=require("@raycast/api"),Ri=w(Me());var Ga=JSON;var _o=e=>e.toUpperCase(),vo=e=>{let t={};return e.forEach((a,n)=>{t[n]=a}),t};var To=(e,t,a)=>e.document?e:{document:e,variables:t,requestHeaders:a,signal:void 0},wo=(e,t,a)=>e.query?e:{query:e,variables:t,requestHeaders:a,signal:void 0},Oo=(e,t)=>e.documents?e:{documents:e,requestHeaders:t,signal:void 0};var $a=require("graphql"),Bo=e=>{let t,a=e.definitions.filter(n=>n.kind==="OperationDefinition");return a.length===1&&(t=a[0]?.name?.value),t},it=e=>{if(typeof e=="string"){let a;try{let n=(0,$a.parse)(e);a=Bo(n)}catch{}return{query:e,operationName:a}}let t=Bo(e);return{query:(0,$a.print)(e),operationName:t}};var st=class e extends Error{constructor(t,a){let n=`${e.extractMessage(t)}: ${JSON.stringify({response:t,request:a})}`;super(n),Object.setPrototypeOf(this,e.prototype),this.response=t,this.request=a,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,e)}static extractMessage(t){return t.errors?.[0]?.message??`GraphQL Error (Code: ${t.status})`}};var Je=w($t(),1);var wp="connection_init",Op="connection_ack",qo="ping",No="pong",Bp="subscribe",Lp="next",qp="error",Vo="complete",Ye=class e{get type(){return this._type}get id(){return this._id}get payload(){return this._payload}constructor(t,a,n){this._type=t,this._payload=a,this._id=n}get text(){let t={type:this.type};return this.id!=null&&this.id!=null&&(t.id=this.id),this.payload!=null&&this.payload!=null&&(t.payload=this.payload),JSON.stringify(t)}static parse(t,a){let{type:n,payload:r,id:o}=JSON.parse(t);return new e(n,a(r),o)}},Qa=class{constructor(t,{onInit:a,onAcknowledged:n,onPing:r,onPong:o}){this.socketState={acknowledged:!1,lastRequestId:0,subscriptions:{}},this.socket=t,t.addEventListener("open",async u=>{this.socketState.acknowledged=!1,this.socketState.subscriptions={},t.send(Vp(a?await a():null).text)}),t.addEventListener("close",u=>{this.socketState.acknowledged=!1,this.socketState.subscriptions={}}),t.addEventListener("error",u=>{console.error(u)}),t.addEventListener("message",u=>{try{let s=Np(u.data);switch(s.type){case Op:{this.socketState.acknowledged?console.warn("Duplicate CONNECTION_ACK message ignored"):(this.socketState.acknowledged=!0,n&&n(s.payload));return}case qo:{r?r(s.payload).then(y=>t.send(Lo(y).text)):t.send(Lo(null).text);return}case No:{o&&o(s.payload);return}}if(!this.socketState.acknowledged||s.id===void 0||s.id===null||!this.socketState.subscriptions[s.id])return;let{query:i,variables:p,subscriber:d}=this.socketState.subscriptions[s.id];switch(s.type){case Lp:{!s.payload.errors&&s.payload.data&&d.next&&d.next(s.payload.data),s.payload.errors&&d.error&&d.error(new st({...s.payload,status:200},{query:i,variables:p}));return}case qp:{d.error&&d.error(new st({errors:s.payload,status:200},{query:i,variables:p}));return}case Vo:{d.complete&&d.complete(),delete this.socketState.subscriptions[s.id];return}}}catch(s){console.error(s),t.close(1006)}t.close(4400,"Unknown graphql-ws message.")})}makeSubscribe(t,a,n,r){let o=(this.socketState.lastRequestId++).toString();return this.socketState.subscriptions[o]={query:t,variables:r,subscriber:n},this.socket.send(kp(o,{query:t,operationName:a,variables:r}).text),()=>{this.socket.send(jp(o).text),delete this.socketState.subscriptions[o]}}rawRequest(t,a){return new Promise((n,r)=>{let o;this.rawSubscribe(t,{next:(u,s)=>o={data:u,extensions:s},error:r,complete:()=>n(o)},a)})}request(t,a){return new Promise((n,r)=>{let o;this.subscribe(t,{next:u=>o=u,error:r,complete:()=>n(o)},a)})}subscribe(t,a,n){let{query:r,operationName:o}=it(t);return this.makeSubscribe(r,o,a,n)}rawSubscribe(t,a,n){return this.makeSubscribe(t,void 0,a,n)}ping(t){this.socket.send(Fp(t).text)}close(){this.socket.close(1e3)}};Qa.PROTOCOL="graphql-transport-ws";function Np(e,t=a=>a){return Ye.parse(e,t)}function Vp(e){return new Ye(wp,e)}function Fp(e){return new Ye(qo,e,void 0)}function Lo(e){return new Ye(No,e,void 0)}function kp(e,t){return new Ye(Bp,t,e)}function jp(e){return new Ye(Vo,void 0,e)}var vt=e=>{let t={};return e&&(typeof Headers<"u"&&e instanceof Headers||Je&&Je.Headers&&e instanceof Je.Headers?t=vo(e):Array.isArray(e)?e.forEach(([a,n])=>{a&&n!==void 0&&(t[a]=n)}):t=e),t},Fo=e=>e.replace(/([\s,]|#[^\n\r]+)+/g," ").trim(),zp=e=>{if(!Array.isArray(e.query)){let n=e,r=[`query=${encodeURIComponent(Fo(n.query))}`];return e.variables&&r.push(`variables=${encodeURIComponent(n.jsonSerializer.stringify(n.variables))}`),n.operationName&&r.push(`operationName=${encodeURIComponent(n.operationName)}`),r.join("&")}if(typeof e.variables<"u"&&!Array.isArray(e.variables))throw new Error("Cannot create query with given variable type, array expected");let t=e,a=e.query.reduce((n,r,o)=>(n.push({query:Fo(r),variables:t.variables?t.jsonSerializer.stringify(t.variables[o]):void 0}),n),[]);return`query=${encodeURIComponent(t.jsonSerializer.stringify(a))}`},Hp=e=>async t=>{let{url:a,query:n,variables:r,operationName:o,fetch:u,fetchOptions:s,middleware:i}=t,p={...t.headers},d="",y;e==="POST"?(y=Gp(n,r,o,s.jsonSerializer),typeof y=="string"&&(p["Content-Type"]="application/json")):d=zp({query:n,variables:r,operationName:o,jsonSerializer:s.jsonSerializer??Ga});let M={method:e,headers:p,body:y,...s},A=a,l=M;if(i){let g=await Promise.resolve(i({...M,url:a,operationName:o,variables:r})),{url:I,...m}=g;A=I,l=m}return d&&(A=`${A}?${d}`),await u(A,l)},Wa=class{constructor(t,a={}){this.url=t,this.requestConfig=a,this.rawRequest=async(...n)=>{let[r,o,u]=n,s=wo(r,o,u),{headers:i,fetch:p=Je.default,method:d="POST",requestMiddleware:y,responseMiddleware:M,...A}=this.requestConfig,{url:l}=this;s.signal!==void 0&&(A.signal=s.signal);let{operationName:g}=it(s.query);return Wr({url:l,query:s.query,variables:s.variables,headers:{...vt(Kr(i)),...vt(s.requestHeaders)},operationName:g,fetch:p,method:d,fetchOptions:A,middleware:y}).then(I=>(M&&M(I),I)).catch(I=>{throw M&&M(I),I})}}async request(t,...a){let[n,r]=a,o=To(t,n,r),{headers:u,fetch:s=Je.default,method:i="POST",requestMiddleware:p,responseMiddleware:d,...y}=this.requestConfig,{url:M}=this;o.signal!==void 0&&(y.signal=o.signal);let{query:A,operationName:l}=it(o.document);return Wr({url:M,query:A,variables:o.variables,headers:{...vt(Kr(u)),...vt(o.requestHeaders)},operationName:l,fetch:s,method:i,fetchOptions:y,middleware:p}).then(g=>(d&&d(g),g.data)).catch(g=>{throw d&&d(g),g})}batchRequests(t,a){let n=Oo(t,a),{headers:r,...o}=this.requestConfig;n.signal!==void 0&&(o.signal=n.signal);let u=n.documents.map(({document:i})=>it(i).query),s=n.documents.map(({variables:i})=>i);return Wr({url:this.url,query:u,variables:s,headers:{...vt(Kr(r)),...vt(n.requestHeaders)},operationName:void 0,fetch:this.requestConfig.fetch??Je.default,method:this.requestConfig.method||"POST",fetchOptions:o,middleware:this.requestConfig.requestMiddleware}).then(i=>(this.requestConfig.responseMiddleware&&this.requestConfig.responseMiddleware(i),i.data)).catch(i=>{throw this.requestConfig.responseMiddleware&&this.requestConfig.responseMiddleware(i),i})}setHeaders(t){return this.requestConfig.headers=t,this}setHeader(t,a){let{headers:n}=this.requestConfig;return n?n[t]=a:this.requestConfig.headers={[t]:a},this}setEndpoint(t){return this.url=t,this}},Wr=async e=>{let{query:t,variables:a,fetchOptions:n}=e,r=Hp(_o(e.method??"post")),o=Array.isArray(e.query),u=await r(e),s=await $p(u,n.jsonSerializer??Ga),i=Array.isArray(s)?!s.some(({data:d})=>!d):!!s.data,p=Array.isArray(s)||!s.errors||Array.isArray(s.errors)&&!s.errors.length||n.errorPolicy==="all"||n.errorPolicy==="ignore";if(u.ok&&p&&i){let{errors:d,...y}=(Array.isArray(s),s),M=n.errorPolicy==="ignore"?y:s;return{...o?{data:M}:M,headers:u.headers,status:u.status}}else{let d=typeof s=="string"?{error:s}:s;throw new st({...d,status:u.status,headers:u.headers},{query:t,variables:a})}};var Gp=(e,t,a,n)=>{let r=n??Ga;if(!Array.isArray(e))return r.stringify({query:e,variables:t,operationName:a});if(typeof t<"u"&&!Array.isArray(t))throw new Error("Cannot create request body with given variable type, array expected");let o=e.reduce((u,s,i)=>(u.push({query:s,variables:t?t[i]:void 0}),u),[]);return r.stringify(o)},$p=async(e,t)=>{let a;return e.headers.forEach((n,r)=>{r.toLowerCase()==="content-type"&&(a=n)}),a&&(a.toLowerCase().startsWith("application/json")||a.toLowerCase().startsWith("application/graphql+json")||a.toLowerCase().startsWith("application/graphql-response+json"))?t.parse(await e.text()):e.text()},Kr=e=>typeof e=="function"?e():e;var pi=w(require("node:http"),1),li=w(require("node:https"),1),lt=w(require("node:zlib"),1),se=w(require("node:stream"),1),na=require("node:buffer");var Zt={};dt(Zt,{default:()=>Ka.default});Y(Zt,require("data-uri-to-buffer"));var Ka=w(require("data-uri-to-buffer"));var Se=w(require("node:stream"),1),Ne=require("node:util"),oe=require("node:buffer");var Xt={};dt(Xt,{default:()=>Ya.default});Y(Xt,require("fetch-blob"));var Ya=w(require("fetch-blob"));Ja();var qe=class extends Error{constructor(t,a){super(t),Error.captureStackTrace(this,this.constructor),this.type=a}get name(){return this.constructor.name}get[Symbol.toStringTag](){return this.constructor.name}};var Z=class extends qe{constructor(t,a,n){super(t,a),n&&(this.code=this.errno=n.code,this.erroredSysCall=n.syscall)}};var Za=Symbol.toStringTag,Yr=e=>typeof e=="object"&&typeof e.append=="function"&&typeof e.delete=="function"&&typeof e.get=="function"&&typeof e.getAll=="function"&&typeof e.has=="function"&&typeof e.set=="function"&&typeof e.sort=="function"&&e[Za]==="URLSearchParams",ea=e=>e&&typeof e=="object"&&typeof e.arrayBuffer=="function"&&typeof e.type=="string"&&typeof e.stream=="function"&&typeof e.constructor=="function"&&/^(Blob|File)$/.test(e[Za]),jo=e=>typeof e=="object"&&(e[Za]==="AbortSignal"||e[Za]==="EventTarget"),zo=(e,t)=>{let a=new URL(t).hostname,n=new URL(e).hostname;return a===n||a.endsWith(`.${n}`)},Ho=(e,t)=>{let a=new URL(t).protocol,n=new URL(e).protocol;return a===n};var el=(0,Ne.promisify)(Se.default.pipeline),X=Symbol("Body internals"),he=class{constructor(t,{size:a=0}={}){let n=null;t===null?t=null:Yr(t)?t=oe.Buffer.from(t.toString()):ea(t)||oe.Buffer.isBuffer(t)||(Ne.types.isAnyArrayBuffer(t)?t=oe.Buffer.from(t):ArrayBuffer.isView(t)?t=oe.Buffer.from(t.buffer,t.byteOffset,t.byteLength):t instanceof Se.default||(t instanceof J.FormData?(t=(0,J.formDataToBlob)(t),n=t.type.split("=")[1]):t=oe.Buffer.from(String(t))));let r=t;oe.Buffer.isBuffer(t)?r=Se.default.Readable.from(t):ea(t)&&(r=Se.default.Readable.from(t.stream())),this[X]={body:t,stream:r,boundary:n,disturbed:!1,error:null},this.size=a,t instanceof Se.default&&t.on("error",o=>{let u=o instanceof qe?o:new Z(`Invalid response body while trying to fetch ${this.url}: ${o.message}`,"system",o);this[X].error=u})}get body(){return this[X].stream}get bodyUsed(){return this[X].disturbed}async arrayBuffer(){let{buffer:t,byteOffset:a,byteLength:n}=await Xr(this);return t.slice(a,a+n)}async formData(){let t=this.headers.get("content-type");if(t.startsWith("application/x-www-form-urlencoded")){let n=new J.FormData,r=new URLSearchParams(await this.text());for(let[o,u]of r)n.append(o,u);return n}let{toFormData:a}=await Promise.resolve().then(()=>(Wo(),Qo));return a(this.body,t)}async blob(){let t=this.headers&&this.headers.get("content-type")||this[X].body&&this[X].body.type||"",a=await this.arrayBuffer();return new Ya.default([a],{type:t})}async json(){let t=await this.text();return JSON.parse(t)}async text(){let t=await Xr(this);return new TextDecoder().decode(t)}buffer(){return Xr(this)}};he.prototype.buffer=(0,Ne.deprecate)(he.prototype.buffer,"Please use 'response.arrayBuffer()' instead of 'response.buffer()'","node-fetch#buffer");Object.defineProperties(he.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0},data:{get:(0,Ne.deprecate)(()=>{},"data doesn't exist, use json(), text(), arrayBuffer(), or body instead","https://github.com/node-fetch/node-fetch/issues/1000 (response)")}});async function Xr(e){if(e[X].disturbed)throw new TypeError(`body used already for: ${e.url}`);if(e[X].disturbed=!0,e[X].error)throw e[X].error;let{body:t}=e;if(t===null)return oe.Buffer.alloc(0);if(!(t instanceof Se.default))return oe.Buffer.alloc(0);let a=[],n=0;try{for await(let r of t){if(e.size>0&&n+r.length>e.size){let o=new Z(`content size at ${e.url} over limit: ${e.size}`,"max-size");throw t.destroy(o),o}n+=r.length,a.push(r)}}catch(r){throw r instanceof qe?r:new Z(`Invalid response body while trying to fetch ${e.url}: ${r.message}`,"system",r)}if(t.readableEnded===!0||t._readableState.ended===!0)try{return a.every(r=>typeof r=="string")?oe.Buffer.from(a.join("")):oe.Buffer.concat(a,n)}catch(r){throw new Z(`Could not create Buffer from response body for ${e.url}: ${r.message}`,"system",r)}else throw new Z(`Premature close of server response while trying to fetch ${e.url}`)}var Tt=(e,t)=>{let a,n,{body:r}=e[X];if(e.bodyUsed)throw new Error("cannot clone body after it is used");return r instanceof Se.default&&typeof r.getBoundary!="function"&&(a=new Se.PassThrough({highWaterMark:t}),n=new Se.PassThrough({highWaterMark:t}),r.pipe(a),r.pipe(n),e[X].stream=a,r=n),r},tl=(0,Ne.deprecate)(e=>e.getBoundary(),"form-data doesn't follow the spec and requires special treatment. Use alternative package","https://github.com/node-fetch/node-fetch/issues/1167"),tr=(e,t)=>e===null?null:typeof e=="string"?"text/plain;charset=UTF-8":Yr(e)?"application/x-www-form-urlencoded;charset=UTF-8":ea(e)?e.type||null:oe.Buffer.isBuffer(e)||Ne.types.isAnyArrayBuffer(e)||ArrayBuffer.isView(e)?null:e instanceof J.FormData?`multipart/form-data; boundary=${t[X].boundary}`:e&&typeof e.getBoundary=="function"?`multipart/form-data;boundary=${tl(e)}`:e instanceof Se.default?null:"text/plain;charset=UTF-8",Ko=e=>{let{body:t}=e[X];return t===null?0:ea(t)?t.size:oe.Buffer.isBuffer(t)?t.length:t&&typeof t.getLengthSync=="function"&&t.hasKnownLength&&t.hasKnownLength()?t.getLengthSync():null},Yo=async(e,{body:t})=>{t===null?e.end():await el(t,e)};var en=require("node:util"),aa=w(require("node:http"),1),ar=typeof aa.default.validateHeaderName=="function"?aa.default.validateHeaderName:e=>{if(!/^[\^`\-\w!#$%&'*+.|~]+$/.test(e)){let t=new TypeError(`Header name must be a valid HTTP token [${e}]`);throw Object.defineProperty(t,"code",{value:"ERR_INVALID_HTTP_TOKEN"}),t}},tn=typeof aa.default.validateHeaderValue=="function"?aa.default.validateHeaderValue:(e,t)=>{if(/[^\t\u0020-\u007E\u0080-\u00FF]/.test(t)){let a=new TypeError(`Invalid character in header content ["${e}"]`);throw Object.defineProperty(a,"code",{value:"ERR_INVALID_CHAR"}),a}},ie=class e extends URLSearchParams{constructor(t){let a=[];if(t instanceof e){let n=t.raw();for(let[r,o]of Object.entries(n))a.push(...o.map(u=>[r,u]))}else if(t!=null)if(typeof t=="object"&&!en.types.isBoxedPrimitive(t)){let n=t[Symbol.iterator];if(n==null)a.push(...Object.entries(t));else{if(typeof n!="function")throw new TypeError("Header pairs must be iterable");a=[...t].map(r=>{if(typeof r!="object"||en.types.isBoxedPrimitive(r))throw new TypeError("Each header pair must be an iterable object");return[...r]}).map(r=>{if(r.length!==2)throw new TypeError("Each header pair must be a name/value tuple");return[...r]})}}else throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");return a=a.length>0?a.map(([n,r])=>(ar(n),tn(n,String(r)),[String(n).toLowerCase(),String(r)])):void 0,super(a),new Proxy(this,{get(n,r,o){switch(r){case"append":case"set":return(u,s)=>(ar(u),tn(u,String(s)),URLSearchParams.prototype[r].call(n,String(u).toLowerCase(),String(s)));case"delete":case"has":case"getAll":return u=>(ar(u),URLSearchParams.prototype[r].call(n,String(u).toLowerCase()));case"keys":return()=>(n.sort(),new Set(URLSearchParams.prototype.keys.call(n)).keys());default:return Reflect.get(n,r,o)}}})}get[Symbol.toStringTag](){return this.constructor.name}toString(){return Object.prototype.toString.call(this)}get(t){let a=this.getAll(t);if(a.length===0)return null;let n=a.join(", ");return/^content-encoding$/i.test(t)&&(n=n.toLowerCase()),n}forEach(t,a=void 0){for(let n of this.keys())Reflect.apply(t,a,[this.get(n),n,this])}*values(){for(let t of this.keys())yield this.get(t)}*entries(){for(let t of this.keys())yield[t,this.get(t)]}[Symbol.iterator](){return this.entries()}raw(){return[...this.keys()].reduce((t,a)=>(t[a]=this.getAll(a),t),{})}[Symbol.for("nodejs.util.inspect.custom")](){return[...this.keys()].reduce((t,a)=>{let n=this.getAll(a);return a==="host"?t[a]=n[0]:t[a]=n.length>1?n:n[0],t},{})}};Object.defineProperties(ie.prototype,["get","entries","forEach","values"].reduce((e,t)=>(e[t]={enumerable:!0},e),{}));function Jo(e=[]){return new ie(e.reduce((t,a,n,r)=>(n%2===0&&t.push(r.slice(n,n+2)),t),[]).filter(([t,a])=>{try{return ar(t),tn(t,String(a)),!0}catch{return!1}}))}var al=new Set([301,302,303,307,308]),rr=e=>al.has(e);var me=Symbol("Response internals"),be=class e extends he{constructor(t=null,a={}){super(t,a);let n=a.status!=null?a.status:200,r=new ie(a.headers);if(t!==null&&!r.has("Content-Type")){let o=tr(t,this);o&&r.append("Content-Type",o)}this[me]={type:"default",url:a.url,status:n,statusText:a.statusText||"",headers:r,counter:a.counter,highWaterMark:a.highWaterMark}}get type(){return this[me].type}get url(){return this[me].url||""}get status(){return this[me].status}get ok(){return this[me].status>=200&&this[me].status<300}get redirected(){return this[me].counter>0}get statusText(){return this[me].statusText}get headers(){return this[me].headers}get highWaterMark(){return this[me].highWaterMark}clone(){return new e(Tt(this,this.highWaterMark),{type:this.type,url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected,size:this.size,highWaterMark:this.highWaterMark})}static redirect(t,a=302){if(!rr(a))throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');return new e(null,{headers:{location:new URL(t).toString()},status:a})}static error(){let t=new e(null,{status:0,statusText:""});return t[me].type="error",t}static json(t=void 0,a={}){let n=JSON.stringify(t);if(n===void 0)throw new TypeError("data is not JSON serializable");let r=new ie(a&&a.headers);return r.has("content-type")||r.set("content-type","application/json"),new e(n,{...a,headers:r})}get[Symbol.toStringTag](){return"Response"}};Object.defineProperties(be.prototype,{type:{enumerable:!0},url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}});var ii=require("node:url"),si=require("node:util");var Zo=e=>{if(e.search)return e.search;let t=e.href.length-1,a=e.hash||(e.href[t]==="#"?"#":"");return e.href[t-a.length]==="?"?"?":""};var ei=require("node:net");function Xo(e,t=!1){return e==null||(e=new URL(e),/^(about|blob|data):$/.test(e.protocol))?"no-referrer":(e.username="",e.password="",e.hash="",t&&(e.pathname="",e.search=""),e)}var ti=new Set(["","no-referrer","no-referrer-when-downgrade","same-origin","origin","strict-origin","origin-when-cross-origin","strict-origin-when-cross-origin","unsafe-url"]),ai="strict-origin-when-cross-origin";function ri(e){if(!ti.has(e))throw new TypeError(`Invalid referrerPolicy: ${e}`);return e}function rl(e){if(/^(http|ws)s:$/.test(e.protocol))return!0;let t=e.host.replace(/(^\[)|(]$)/g,""),a=(0,ei.isIP)(t);return a===4&&/^127\./.test(t)||a===6&&/^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(t)?!0:e.host==="localhost"||e.host.endsWith(".localhost")?!1:e.protocol==="file:"}function wt(e){return/^about:(blank|srcdoc)$/.test(e)||e.protocol==="data:"||/^(blob|filesystem):$/.test(e.protocol)?!0:rl(e)}function ni(e,{referrerURLCallback:t,referrerOriginCallback:a}={}){if(e.referrer==="no-referrer"||e.referrerPolicy==="")return null;let n=e.referrerPolicy;if(e.referrer==="about:client")return"no-referrer";let r=e.referrer,o=Xo(r),u=Xo(r,!0);o.toString().length>4096&&(o=u),t&&(o=t(o)),a&&(u=a(u));let s=new URL(e.url);switch(n){case"no-referrer":return"no-referrer";case"origin":return u;case"unsafe-url":return o;case"strict-origin":return wt(o)&&!wt(s)?"no-referrer":u.toString();case"strict-origin-when-cross-origin":return o.origin===s.origin?o:wt(o)&&!wt(s)?"no-referrer":u;case"same-origin":return o.origin===s.origin?o:"no-referrer";case"origin-when-cross-origin":return o.origin===s.origin?o:u;case"no-referrer-when-downgrade":return wt(o)&&!wt(s)?"no-referrer":o;default:throw new TypeError(`Invalid referrerPolicy: ${n}`)}}function oi(e){let t=(e.get("referrer-policy")||"").split(/[,\s]+/),a="";for(let n of t)n&&ti.has(n)&&(a=n);return a}var V=Symbol("Request internals"),ra=e=>typeof e=="object"&&typeof e[V]=="object",nl=(0,si.deprecate)(()=>{},".data is not a valid RequestInit property, use .body instead","https://github.com/node-fetch/node-fetch/issues/1000 (request)"),pt=class e extends he{constructor(t,a={}){let n;if(ra(t)?n=new URL(t.url):(n=new URL(t),t={}),n.username!==""||n.password!=="")throw new TypeError(`${n} is an url with embedded credentials.`);let r=a.method||t.method||"GET";if(/^(delete|get|head|options|post|put)$/i.test(r)&&(r=r.toUpperCase()),!ra(a)&&"data"in a&&nl(),(a.body!=null||ra(t)&&t.body!==null)&&(r==="GET"||r==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");let o=a.body?a.body:ra(t)&&t.body!==null?Tt(t):null;super(o,{size:a.size||t.size||0});let u=new ie(a.headers||t.headers||{});if(o!==null&&!u.has("Content-Type")){let p=tr(o,this);p&&u.set("Content-Type",p)}let s=ra(t)?t.signal:null;if("signal"in a&&(s=a.signal),s!=null&&!jo(s))throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");let i=a.referrer==null?t.referrer:a.referrer;if(i==="")i="no-referrer";else if(i){let p=new URL(i);i=/^about:(\/\/)?client$/.test(p)?"client":p}else i=void 0;this[V]={method:r,redirect:a.redirect||t.redirect||"follow",headers:u,parsedURL:n,signal:s,referrer:i},this.follow=a.follow===void 0?t.follow===void 0?20:t.follow:a.follow,this.compress=a.compress===void 0?t.compress===void 0?!0:t.compress:a.compress,this.counter=a.counter||t.counter||0,this.agent=a.agent||t.agent,this.highWaterMark=a.highWaterMark||t.highWaterMark||16384,this.insecureHTTPParser=a.insecureHTTPParser||t.insecureHTTPParser||!1,this.referrerPolicy=a.referrerPolicy||t.referrerPolicy||""}get method(){return this[V].method}get url(){return(0,ii.format)(this[V].parsedURL)}get headers(){return this[V].headers}get redirect(){return this[V].redirect}get signal(){return this[V].signal}get referrer(){if(this[V].referrer==="no-referrer")return"";if(this[V].referrer==="client")return"about:client";if(this[V].referrer)return this[V].referrer.toString()}get referrerPolicy(){return this[V].referrerPolicy}set referrerPolicy(t){this[V].referrerPolicy=ri(t)}clone(){return new e(this)}get[Symbol.toStringTag](){return"Request"}};Object.defineProperties(pt.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0},referrer:{enumerable:!0},referrerPolicy:{enumerable:!0}});var ui=e=>{let{parsedURL:t}=e[V],a=new ie(e[V].headers);a.has("Accept")||a.set("Accept","*/*");let n=null;if(e.body===null&&/^(post|put)$/i.test(e.method)&&(n="0"),e.body!==null){let s=Ko(e);typeof s=="number"&&!Number.isNaN(s)&&(n=String(s))}n&&a.set("Content-Length",n),e.referrerPolicy===""&&(e.referrerPolicy=ai),e.referrer&&e.referrer!=="no-referrer"?e[V].referrer=ni(e):e[V].referrer="no-referrer",e[V].referrer instanceof URL&&a.set("Referer",e.referrer),a.has("User-Agent")||a.set("User-Agent","node-fetch"),e.compress&&!a.has("Accept-Encoding")&&a.set("Accept-Encoding","gzip, deflate, br");let{agent:r}=e;typeof r=="function"&&(r=r(t));let o=Zo(t),u={path:t.pathname+o,method:e.method,headers:a[Symbol.for("nodejs.util.inspect.custom")](),insecureHTTPParser:e.insecureHTTPParser,agent:r};return{parsedURL:t,options:u}};var nr=class extends qe{constructor(t,a="aborted"){super(t,a)}};Ja();Jr();var ol=new Set(["data:","http:","https:"]);async function or(e,t){return new Promise((a,n)=>{let r=new pt(e,t),{parsedURL:o,options:u}=ui(r);if(!ol.has(o.protocol))throw new TypeError(`node-fetch cannot load ${e}. URL scheme "${o.protocol.replace(/:$/,"")}" is not supported.`);if(o.protocol==="data:"){let l=(0,Ka.default)(r.url),g=new be(l,{headers:{"Content-Type":l.typeFull}});a(g);return}let s=(o.protocol==="https:"?li.default:pi.default).request,{signal:i}=r,p=null,d=()=>{let l=new nr("The operation was aborted.");n(l),r.body&&r.body instanceof se.default.Readable&&r.body.destroy(l),!(!p||!p.body)&&p.body.emit("error",l)};if(i&&i.aborted){d();return}let y=()=>{d(),A()},M=s(o.toString(),u);i&&i.addEventListener("abort",y);let A=()=>{M.abort(),i&&i.removeEventListener("abort",y)};M.on("error",l=>{n(new Z(`request to ${r.url} failed, reason: ${l.message}`,"system",l)),A()}),il(M,l=>{p&&p.body&&p.body.destroy(l)}),process.version<"v14"&&M.on("socket",l=>{let g;l.prependListener("end",()=>{g=l._eventsCount}),l.prependListener("close",I=>{if(p&&g<l._eventsCount&&!I){let m=new Error("Premature close");m.code="ERR_STREAM_PREMATURE_CLOSE",p.body.emit("error",m)}})}),M.on("response",l=>{M.setTimeout(0);let g=Jo(l.rawHeaders);if(rr(l.statusCode)){let b=g.get("Location"),P=null;try{P=b===null?null:new URL(b,r.url)}catch{if(r.redirect!=="manual"){n(new Z(`uri requested responds with an invalid redirect URL: ${b}`,"invalid-redirect")),A();return}}switch(r.redirect){case"error":n(new Z(`uri requested responds with a redirect, redirect mode is set to error: ${r.url}`,"no-redirect")),A();return;case"manual":break;case"follow":{if(P===null)break;if(r.counter>=r.follow){n(new Z(`maximum redirect reached at: ${r.url}`,"max-redirect")),A();return}let E={headers:new ie(r.headers),follow:r.follow,counter:r.counter+1,agent:r.agent,compress:r.compress,method:r.method,body:Tt(r),signal:r.signal,size:r.size,referrer:r.referrer,referrerPolicy:r.referrerPolicy};if(!zo(r.url,P)||!Ho(r.url,P))for(let B of["authorization","www-authenticate","cookie","cookie2"])E.headers.delete(B);if(l.statusCode!==303&&r.body&&t.body instanceof se.default.Readable){n(new Z("Cannot follow redirect with body being a readable stream","unsupported-redirect")),A();return}(l.statusCode===303||(l.statusCode===301||l.statusCode===302)&&r.method==="POST")&&(E.method="GET",E.body=void 0,E.headers.delete("content-length"));let U=oi(g);U&&(E.referrerPolicy=U),a(or(new pt(P,E))),A();return}default:return n(new TypeError(`Redirect option '${r.redirect}' is not a valid value of RequestRedirect`))}}i&&l.once("end",()=>{i.removeEventListener("abort",y)});let I=(0,se.pipeline)(l,new se.PassThrough,b=>{b&&n(b)});process.version<"v12.10"&&l.on("aborted",y);let m={url:r.url,status:l.statusCode,statusText:l.statusMessage,headers:g,size:r.size,counter:r.counter,highWaterMark:r.highWaterMark},f=g.get("Content-Encoding");if(!r.compress||r.method==="HEAD"||f===null||l.statusCode===204||l.statusCode===304){p=new be(I,m),a(p);return}let c={flush:lt.default.Z_SYNC_FLUSH,finishFlush:lt.default.Z_SYNC_FLUSH};if(f==="gzip"||f==="x-gzip"){I=(0,se.pipeline)(I,lt.default.createGunzip(c),b=>{b&&n(b)}),p=new be(I,m),a(p);return}if(f==="deflate"||f==="x-deflate"){let b=(0,se.pipeline)(l,new se.PassThrough,P=>{P&&n(P)});b.once("data",P=>{(P[0]&15)===8?I=(0,se.pipeline)(I,lt.default.createInflate(),E=>{E&&n(E)}):I=(0,se.pipeline)(I,lt.default.createInflateRaw(),E=>{E&&n(E)}),p=new be(I,m),a(p)}),b.once("end",()=>{p||(p=new be(I,m),a(p))});return}if(f==="br"){I=(0,se.pipeline)(I,lt.default.createBrotliDecompress(),b=>{b&&n(b)}),p=new be(I,m),a(p);return}p=new be(I,m),a(p)}),Yo(M,r).catch(n)})}function il(e,t){let a=na.Buffer.from(`0\r
\r
`),n=!1,r=!1,o;e.on("response",u=>{let{headers:s}=u;n=s["transfer-encoding"]==="chunked"&&!s["content-length"]}),e.on("socket",u=>{let s=()=>{if(n&&!r){let p=new Error("Premature close");p.code="ERR_STREAM_PREMATURE_CLOSE",t(p)}},i=p=>{r=na.Buffer.compare(p.slice(-5),a)===0,!r&&o&&(r=na.Buffer.compare(o.slice(-3),a.slice(0,3))===0&&na.Buffer.compare(p.slice(-2),a.slice(3))===0),o=p};u.prependListener("close",s),u.on("data",i),e.on("close",()=>{u.removeListener("close",s),u.removeListener("data",i)})})}var R=w(require("graphql-tag")),oa=R.default`
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
`,sl=R.default`
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
  ${oa}
`,De=R.default`
  fragment UserFields on User {
    id
    avatarUrl
    name
    login
    isViewer
  }
`,ia=R.default`
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
  ${De}
`,ir=R.default`
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
  ${ia}
  ${oa}
  ${De}
`,ul=R.default`
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
  ${ia}
  ${oa}
  ${De}
`,ci=R.default`
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
`,yi=R.default`
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
`,di=R.default`
  fragment RepositoryMentionFields on Repository {
    nameWithOwner
    description
    isPrivate
    isArchived
    owner {
      avatarUrl(size: 64)
    }
  }
`,pl=R.default`
  fragment ProjectViewerFields on ProjectV2View {
    id
    name
    number
  }
`,Si=R.default`
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
  ${ia}
  ${pl}
`,bi=R.default`
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
  ${oa}
  ${ia}
  ${De}
`,ll=R.default`
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
  ${oa}
  ${ia}
  ${De}
`,cl=R.default`
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
`,Ii=R.default`
  fragment CommitFields on Commit {
    authoredDate
    oid
    message
  }
`,an=R.default`
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
`,yl=R.default`
  fragment ReleaseFields on Release {
    id
    description
    name
    publishedAt
    createdAt
    tagName
    url
  }
`,dl=R.default`
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
`,Sl=R.default`
  mutation createRef($input: CreateRefInput!) {
    createRef(input: $input) {
      clientMutationId
      ref {
        id
        name
      }
    }
  }
`,bl=R.default`
  mutation deleteLinkedBranch($input: DeleteLinkedBranchInput!) {
    deleteLinkedBranch(input: $input) {
      clientMutationId
    }
  }
`,Il=R.default`
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
  ${sl}
`,gl=R.default`
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
`,Ml=R.default`
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
  ${De}
`,ml=R.default`
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
`,Rl=R.default`
  query issueDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...IssueDetailFields
    }
  }
  ${ul}
`,Al=R.default`
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
  ${ir}
`,fl=R.default`
  query issueByNumber($owner: String!, $name: String!, $issueNumber: Int!) {
    repository(owner: $owner, name: $name) {
      issue(number: $issueNumber) {
        ...IssueFields
      }
    }
  }
  ${ir}
`,Pl=R.default`
  mutation closeIssue($nodeId: ID!, $stateReason: IssueClosedStateReason!) {
    closeIssue(input: { issueId: $nodeId, stateReason: $stateReason }) {
      issue {
        id
      }
    }
  }
`,El=R.default`
  mutation reopenIssue($nodeId: ID!) {
    reopenIssue(input: { issueId: $nodeId }) {
      issue {
        id
      }
    }
  }
`,Cl=R.default`
  mutation changeIssueAssignees($issueId: ID!, $assigneeIds: [ID!]) {
    updateIssue(input: { id: $issueId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,hl=R.default`
  mutation changeIssueMilestone($issueId: ID!, $milestoneId: ID) {
    updateIssue(input: { id: $issueId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,Dl=R.default`
  mutation addIssueToProject($issueId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $issueId }) {
      clientMutationId
    }
  }
`,xl=R.default`
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
  ${ir}
`,Ul=R.default`
  query searchIssueMentions($query: String!, $numberOfItems: Int!) {
    search(query: $query, type: ISSUE, first: $numberOfItems) {
      nodes {
        ... on Issue {
          ...IssueMentionFields
        }
      }
    }
  }
  ${ci}
`,_l=R.default`
  query searchPullRequestMentions($query: String!, $numberOfItems: Int!) {
    search(query: $query, type: ISSUE, first: $numberOfItems) {
      nodes {
        ... on PullRequest {
          ...PullRequestMentionFields
        }
      }
    }
  }
  ${yi}
`,vl=R.default`
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
  ${ci}
  ${yi}
`,Tl=R.default`
  query searchRepositoryMentions($query: String!, $numberOfItems: Int!) {
    search(query: $query, type: REPOSITORY, first: $numberOfItems) {
      nodes {
        ... on Repository {
          ...RepositoryMentionFields
        }
      }
    }
  }
  ${di}
`,wl=R.default`
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
  ${di}
`,Ol=R.default`
  mutation changeProjectStatus($projectId: ID!, $closed: Boolean!) {
    updateProjectV2(input: { projectId: $projectId, closed: $closed }) {
      clientMutationId
    }
  }
`,Bl=R.default`
  query projectDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...ProjectFields
    }
  }
  ${Si}
`,Ll=R.default`
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
  ${bi}
`,ql=R.default`
  query pullRequestDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...PullRequestDetailsFields
    }
  }
  ${ll}
`,Nl=R.default`
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
  ${De}
`,Vl=R.default`
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
`,Fl=R.default`
  query pullRequestCommits($nodeId: ID!, $numberOfItems: Int!, $before: String) {
    node(id: $nodeId) {
      ...PullRequestCommitFields
    }
  }
  ${cl}
`,kl=R.default`
  mutation closePullRequest($nodeId: ID!) {
    closePullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,jl=R.default`
  mutation reopenPullRequest($nodeId: ID!) {
    reopenPullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,zl=R.default`
  mutation markPullRequestReadyForReview($nodeId: ID!) {
    markPullRequestReadyForReview(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Hl=R.default`
  mutation addPullRequestReview($nodeId: ID!, $event: PullRequestReviewEvent, $body: String) {
    addPullRequestReview(input: { pullRequestId: $nodeId, event: $event, body: $body }) {
      pullRequestReview {
        id
      }
    }
  }
`,Gl=R.default`
  mutation changePullRequestAssignees($pullRequestId: ID!, $assigneeIds: [ID!]) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,$l=R.default`
  mutation changePullRequestMilestone($pullRequestId: ID!, $milestoneId: ID) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,Ql=R.default`
  mutation addPullRequestToProject($pullRequestId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $pullRequestId }) {
      clientMutationId
    }
  }
`,Wl=R.default`
  mutation requestReview($pullRequestId: ID!, $collaboratorId: ID!) {
    requestReviews(input: { pullRequestId: $pullRequestId, userIds: [$collaboratorId], union: true }) {
      clientMutationId
    }
  }
`,Kl=R.default`
  mutation mergePullRequest($nodeId: ID!, $method: PullRequestMergeMethod!) {
    mergePullRequest(input: { pullRequestId: $nodeId, mergeMethod: $method }) {
      pullRequest {
        nodeId: id
      }
    }
  }
`,Yl=R.default`
  mutation addPullRequestToMergeQueue($nodeId: ID!) {
    enqueuePullRequest(input: { pullRequestId: $nodeId }) {
      __typename
    }
  }
`,Jl=R.default`
  mutation removePullRequestFromMergeQueue($nodeId: ID!) {
    dequeuePullRequest(input: { id: $nodeId }) {
      __typename
    }
  }
`,Zl=R.default`
  mutation enablePullRequestAutoMerge($nodeId: ID!, $mergeMethod: PullRequestMergeMethod) {
    enablePullRequestAutoMerge(input: { pullRequestId: $nodeId, mergeMethod: $mergeMethod }) {
      pullRequest {
        id
      }
    }
  }
`,Xl=R.default`
  mutation disablePullRequestAutoMerge($nodeId: ID!) {
    disablePullRequestAutoMerge(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,ec=R.default`
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
`,tc=R.default`
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
  ${bi}
`,ac=R.default`
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
  ${an}
`,rc=R.default`
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
  ${an}
`,nc=R.default`
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
`,oc=R.default`
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
`,ic=R.default`
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
  ${Ii}
  ${De}
`,sc=R.default`
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
  ${Ii}
`,uc=R.default`
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
  ${ir}
`,pc=R.default`
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
  ${yl}
`,lc=R.default`
  mutation addStar($repositoryId: ID!) {
    addStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,cc=R.default`
  mutation removeStar($repositoryId: ID!) {
    removeStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,yc=R.default`
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
  ${an}
`,dc=R.default`
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
  ${De}
  ${Si}
`,Sc=R.default`
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
  ${De}
`,bc=R.default`
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
`,Ic=(e,t,a,n)=>e();function gi(e,t=Ic){return{createLinkedBranch(a,n,r){return t(o=>e.request({document:dl,variables:a,requestHeaders:{...n,...o},signal:r}),"createLinkedBranch","mutation",a)},createRef(a,n,r){return t(o=>e.request({document:Sl,variables:a,requestHeaders:{...n,...o},signal:r}),"createRef","mutation",a)},deleteLinkedBranch(a,n,r){return t(o=>e.request({document:bl,variables:a,requestHeaders:{...n,...o},signal:r}),"deleteLinkedBranch","mutation",a)},searchDiscussions(a,n,r){return t(o=>e.request({document:Il,variables:a,requestHeaders:{...n,...o},signal:r}),"searchDiscussions","query",a)},getGitHubDiscussionNumber(a,n,r){return t(o=>e.request({document:gl,variables:a,requestHeaders:{...n,...o},signal:r}),"getGitHubDiscussionNumber","query",a)},repositoryCollaboratorsForIssues(a,n,r){return t(o=>e.request({document:Ml,variables:a,requestHeaders:{...n,...o},signal:r}),"repositoryCollaboratorsForIssues","query",a)},repositoryProjectsForIssues(a,n,r){return t(o=>e.request({document:ml,variables:a,requestHeaders:{...n,...o},signal:r}),"repositoryProjectsForIssues","query",a)},issueDetails(a,n,r){return t(o=>e.request({document:Rl,variables:a,requestHeaders:{...n,...o},signal:r}),"issueDetails","query",a)},searchIssues(a,n,r){return t(o=>e.request({document:Al,variables:a,requestHeaders:{...n,...o},signal:r}),"searchIssues","query",a)},issueByNumber(a,n,r){return t(o=>e.request({document:fl,variables:a,requestHeaders:{...n,...o},signal:r}),"issueByNumber","query",a)},closeIssue(a,n,r){return t(o=>e.request({document:Pl,variables:a,requestHeaders:{...n,...o},signal:r}),"closeIssue","mutation",a)},reopenIssue(a,n,r){return t(o=>e.request({document:El,variables:a,requestHeaders:{...n,...o},signal:r}),"reopenIssue","mutation",a)},changeIssueAssignees(a,n,r){return t(o=>e.request({document:Cl,variables:a,requestHeaders:{...n,...o},signal:r}),"changeIssueAssignees","mutation",a)},changeIssueMilestone(a,n,r){return t(o=>e.request({document:hl,variables:a,requestHeaders:{...n,...o},signal:r}),"changeIssueMilestone","mutation",a)},addIssueToProject(a,n,r){return t(o=>e.request({document:Dl,variables:a,requestHeaders:{...n,...o},signal:r}),"addIssueToProject","mutation",a)},createIssue(a,n,r){return t(o=>e.request({document:xl,variables:a,requestHeaders:{...n,...o},signal:r}),"createIssue","mutation",a)},searchIssueMentions(a,n,r){return t(o=>e.request({document:Ul,variables:a,requestHeaders:{...n,...o},signal:r}),"searchIssueMentions","query",a)},searchPullRequestMentions(a,n,r){return t(o=>e.request({document:_l,variables:a,requestHeaders:{...n,...o},signal:r}),"searchPullRequestMentions","query",a)},issueOrPullRequestMention(a,n,r){return t(o=>e.request({document:vl,variables:a,requestHeaders:{...n,...o},signal:r}),"issueOrPullRequestMention","query",a)},searchRepositoryMentions(a,n,r){return t(o=>e.request({document:Tl,variables:a,requestHeaders:{...n,...o},signal:r}),"searchRepositoryMentions","query",a)},viewerRepositoryMentions(a,n,r){return t(o=>e.request({document:wl,variables:a,requestHeaders:{...n,...o},signal:r}),"viewerRepositoryMentions","query",a)},changeProjectStatus(a,n,r){return t(o=>e.request({document:Ol,variables:a,requestHeaders:{...n,...o},signal:r}),"changeProjectStatus","mutation",a)},projectDetails(a,n,r){return t(o=>e.request({document:Bl,variables:a,requestHeaders:{...n,...o},signal:r}),"projectDetails","query",a)},searchPullRequests(a,n,r){return t(o=>e.request({document:Ll,variables:a,requestHeaders:{...n,...o},signal:r}),"searchPullRequests","query",a)},pullRequestDetails(a,n,r){return t(o=>e.request({document:ql,variables:a,requestHeaders:{...n,...o},signal:r}),"pullRequestDetails","query",a)},repositoryCollaboratorsForPullRequests(a,n,r){return t(o=>e.request({document:Nl,variables:a,requestHeaders:{...n,...o},signal:r}),"repositoryCollaboratorsForPullRequests","query",a)},repositoryProjectsForPullRequests(a,n,r){return t(o=>e.request({document:Vl,variables:a,requestHeaders:{...n,...o},signal:r}),"repositoryProjectsForPullRequests","query",a)},pullRequestCommits(a,n,r){return t(o=>e.request({document:Fl,variables:a,requestHeaders:{...n,...o},signal:r}),"pullRequestCommits","query",a)},closePullRequest(a,n,r){return t(o=>e.request({document:kl,variables:a,requestHeaders:{...n,...o},signal:r}),"closePullRequest","mutation",a)},reopenPullRequest(a,n,r){return t(o=>e.request({document:jl,variables:a,requestHeaders:{...n,...o},signal:r}),"reopenPullRequest","mutation",a)},markPullRequestReadyForReview(a,n,r){return t(o=>e.request({document:zl,variables:a,requestHeaders:{...n,...o},signal:r}),"markPullRequestReadyForReview","mutation",a)},addPullRequestReview(a,n,r){return t(o=>e.request({document:Hl,variables:a,requestHeaders:{...n,...o},signal:r}),"addPullRequestReview","mutation",a)},changePullRequestAssignees(a,n,r){return t(o=>e.request({document:Gl,variables:a,requestHeaders:{...n,...o},signal:r}),"changePullRequestAssignees","mutation",a)},changePullRequestMilestone(a,n,r){return t(o=>e.request({document:$l,variables:a,requestHeaders:{...n,...o},signal:r}),"changePullRequestMilestone","mutation",a)},addPullRequestToProject(a,n,r){return t(o=>e.request({document:Ql,variables:a,requestHeaders:{...n,...o},signal:r}),"addPullRequestToProject","mutation",a)},requestReview(a,n,r){return t(o=>e.request({document:Wl,variables:a,requestHeaders:{...n,...o},signal:r}),"requestReview","mutation",a)},mergePullRequest(a,n,r){return t(o=>e.request({document:Kl,variables:a,requestHeaders:{...n,...o},signal:r}),"mergePullRequest","mutation",a)},addPullRequestToMergeQueue(a,n,r){return t(o=>e.request({document:Yl,variables:a,requestHeaders:{...n,...o},signal:r}),"addPullRequestToMergeQueue","mutation",a)},removePullRequestFromMergeQueue(a,n,r){return t(o=>e.request({document:Jl,variables:a,requestHeaders:{...n,...o},signal:r}),"removePullRequestFromMergeQueue","mutation",a)},enablePullRequestAutoMerge(a,n,r){return t(o=>e.request({document:Zl,variables:a,requestHeaders:{...n,...o},signal:r}),"enablePullRequestAutoMerge","mutation",a)},disablePullRequestAutoMerge(a,n,r){return t(o=>e.request({document:Xl,variables:a,requestHeaders:{...n,...o},signal:r}),"disablePullRequestAutoMerge","mutation",a)},createPullRequest(a,n,r){return t(o=>e.request({document:ec,variables:a,requestHeaders:{...n,...o},signal:r}),"createPullRequest","mutation",a)},initPullRequest(a,n,r){return t(o=>e.request({document:tc,variables:a,requestHeaders:{...n,...o},signal:r}),"initPullRequest","mutation",a)},searchRepositories(a,n,r){return t(o=>e.request({document:ac,variables:a,requestHeaders:{...n,...o},signal:r}),"searchRepositories","query",a)},myLatestRepositories(a,n,r){return t(o=>e.request({document:rc,variables:a,requestHeaders:{...n,...o},signal:r}),"myLatestRepositories","query",a)},milestonesForRepository(a,n,r){return t(o=>e.request({document:nc,variables:a,requestHeaders:{...n,...o},signal:r}),"milestonesForRepository","query",a)},commentsForPullRequest(a,n,r){return t(o=>e.request({document:oc,variables:a,requestHeaders:{...n,...o},signal:r}),"commentsForPullRequest","query",a)},dataForRepository(a,n,r){return t(o=>e.request({document:ic,variables:a,requestHeaders:{...n,...o},signal:r}),"dataForRepository","query",a)},searchRepositoryBranches(a,n,r){return t(o=>e.request({document:sc,variables:a,requestHeaders:{...n,...o},signal:r}),"searchRepositoryBranches","query",a)},repositoryIssues(a,n,r){return t(o=>e.request({document:uc,variables:a,requestHeaders:{...n,...o},signal:r}),"repositoryIssues","query",a)},repositoryReleases(a,n,r){return t(o=>e.request({document:pc,variables:a,requestHeaders:{...n,...o},signal:r}),"repositoryReleases","query",a)},addStar(a,n,r){return t(o=>e.request({document:lc,variables:a,requestHeaders:{...n,...o},signal:r}),"addStar","mutation",a)},removeStar(a,n,r){return t(o=>e.request({document:cc,variables:a,requestHeaders:{...n,...o},signal:r}),"removeStar","mutation",a)},myStarredRepositories(a,n,r){return t(o=>e.request({document:yc,variables:a,requestHeaders:{...n,...o},signal:r}),"myStarredRepositories","query",a)},getViewer(a,n,r){return t(o=>e.request({document:dc,variables:a,requestHeaders:{...n,...o},signal:r}),"getViewer","query",a)},getViewerStats(a,n,r){return t(o=>e.request({document:Sc,variables:a,requestHeaders:{...n,...o},signal:r}),"getViewerStats","query",a)},getViewerStatsDetails(a,n,r){return t(o=>e.request({document:bc,variables:a,requestHeaders:{...n,...o},signal:r}),"getViewerStatsDetails","query",a)}}}var rn=null,nn=null,Ai=null,gc=(0,mi.getPreferenceValues)();function Mc({token:e,type:t}){let a=t==="personal"?`token ${e}`:`bearer ${e}`;Ai=e,rn=gi(new Wa("https://api.github.com/graphql",{headers:{authorization:a}})),nn=new Mi.Octokit({auth:e,request:{fetch:or}})}var fi=Ri.OAuthService.github({personalAccessToken:gc.personalAccessToken,scope:"notifications repo project read:org read:user read:packages",onAuthorize:Mc});function Q(){if(!rn||!nn)throw new Error("GitHub clients not initialized");return{github:rn,octokit:nn,token:Ai}}var F=require("@raycast/api"),Ui=w(Me()),_i=require("date-fns");var Pi=require("@raycast/api"),mc=require("lodash");var sa=require("@raycast/api");function xe(e){return e?{icon:{source:e.avatarUrl??sa.Icon.Person,mask:sa.Image.Mask.Circle},text:(e.name?e.name:e.login)??"-"}:{icon:sa.Icon.Person,text:"Unknown"}}function Ot(e,t,{suffix:a="s",withNumber:n=!1}={}){let r=`${t}${e!==1?a:""}`;return n?`${e} ${r}`:r}var Ve=require("@raycast/api");function sr(e){return e.stateReason==="NOT_PLANNED"?{icon:{source:"skip.svg",tintColor:Ve.Color.SecondaryText},text:"Closed as not planned",color:Ve.Color.Purple}:e.stateReason==="COMPLETED"?{icon:{source:"issue-closed.svg",tintColor:Ve.Color.Purple},text:"Closed as completed",color:Ve.Color.Purple}:e.closed?{icon:{source:"issue-closed.svg",tintColor:Ve.Color.Purple},text:"Closed",color:Ve.Color.Purple}:{icon:{source:"issue-open.svg",tintColor:Ve.Color.Green},text:"Open",color:Ve.Color.Green}}function ur(e){return xe(e.author)}var Ei=[{title:"Newest",value:"sort:created-desc"},{title:"Oldest",value:"sort:created-asc"},{title:"Most Commented",value:"sort:comments-desc"},{title:"Least Commented",value:"sort:comments-asc"},{title:"Recently Updated",value:"sort:updated-desc"},{title:"Least Recently Updated",value:"sort:updated-asc"},{title:"Best Match",value:"sort:relevance-desc"},{title:"\u{1F44D}",value:"sort:reactions-+1-desc"},{title:"\u{1F44E}",value:"sort:reactions--1-desc"},{title:"\u{1F604}",value:"sort:reactions-smile-desc"},{title:"\u{1F389}",value:"sort:reactions-tada-desc"},{title:"\u{1F641}",value:"sort:reactions-thinking_face-desc"},{title:"\u2764\uFE0F",value:"sort:reactions-heart-desc"},{title:"\u{1F680}",value:"sort:reactions-rocket-desc"},{title:"\u{1F440}",value:"sort:reactions-eyes-desc"}],Ci="sort:updated-desc";var hi=w(Me());function Xe(){let{github:e}=Q(),{data:t}=(0,hi.useCachedPromise)(async()=>(await e.getViewer()).viewer);return t}var S=require("@raycast/api"),pr=w(Me()),lr=require("react");function W(e){return e?.response?.errors?e.response.errors[0].message:e instanceof Error?e.message:String(e)}var ee=require("@raycast/api"),Ue=require("react/jsx-runtime"),xi=({sortQuery:e,setSortQuery:t,data:a})=>t?(0,Ue.jsxs)(ee.ActionPanel.Submenu,{title:"Sort by",icon:ee.Icon.ArrowUp,shortcut:ee.Keyboard.Shortcut.Common.Duplicate,children:[a.filter(({value:n})=>!n.startsWith("sort:reaction")).map(({title:n,value:r})=>(0,Ue.jsx)(Di,{title:n,value:r,sortQuery:e??"",setSortQuery:t},r||"relevance")),a.some(({value:n})=>n.startsWith("sort:reaction"))&&(0,Ue.jsx)(ee.ActionPanel.Section,{title:"Most Reactions",children:a.filter(({value:n})=>n.startsWith("sort:reaction")).map(({title:n,value:r})=>(0,Ue.jsx)(Di,{title:n,value:r,sortQuery:e??"",setSortQuery:t},r))})]}):(0,Ue.jsx)(Ue.Fragment,{}),Di=({title:e,value:t,sortQuery:a,setSortQuery:n})=>(0,Ue.jsx)(ee.Action,{title:e,icon:a===t?{source:ee.Icon.CheckCircle,tintColor:ee.Color.Green}:ee.Icon.Circle,onAction:()=>n(t)});var h=require("react/jsx-runtime");function ua({issue:e,mutateList:t,mutateDetail:a,children:n,setSortQuery:r,sortQuery:o}){let{github:u}=Q(),s=Xe();async function i(){t&&await t(),a&&await a()}async function p(){try{await(0,S.showToast)({style:S.Toast.Style.Animated,title:`Reopening issue #${e.number}`}),await u.reopenIssue({nodeId:e.id}),await i(),await(0,S.showToast)({style:S.Toast.Style.Success,title:`Issue #${e.number} is now open`})}catch(c){await(0,S.showToast)({style:S.Toast.Style.Failure,title:"Failed reopening issue",message:W(c)})}}async function d(){try{await(0,S.showToast)({style:S.Toast.Style.Animated,title:`Closing issue #${e.number} as completed`}),await u.closeIssue({nodeId:e.id,stateReason:"COMPLETED"}),await i(),await(0,S.showToast)({style:S.Toast.Style.Success,title:`Issue #${e.number} closed as completed`})}catch(c){await(0,S.showToast)({style:S.Toast.Style.Failure,title:"Failed closing issue as completed",message:W(c)})}}async function y(){try{await(0,S.showToast)({style:S.Toast.Style.Animated,title:`Closing issue #${e.number} as not planned`}),await u.closeIssue({nodeId:e.id,stateReason:"NOT_PLANNED"}),await i(),await(0,S.showToast)({style:S.Toast.Style.Success,title:`Issue #${e.number} closed as not planned`})}catch(c){await(0,S.showToast)({style:S.Toast.Style.Failure,title:"Failed closing issue as not planned",message:W(c)})}}async function M(c){try{await(0,S.showToast)({style:S.Toast.Style.Animated,title:"Assigning to me"});let b=e.assignees.nodes?.filter(P=>!!P).map(P=>P?.id)??[];await u.changeIssueAssignees({issueId:e.id,assigneeIds:[...b,c]}),await i(),await(0,S.showToast)({style:S.Toast.Style.Success,title:"Assigned to me"})}catch(b){await(0,S.showToast)({style:S.Toast.Style.Failure,title:"Failed assigning to me",message:W(b)})}}async function A(c){try{await(0,S.showToast)({style:S.Toast.Style.Animated,title:"Un-assigning from me"});let b=e.assignees.nodes?.filter(P=>!!P).map(P=>P?.id)??[];await u.changeIssueAssignees({issueId:e.id,assigneeIds:b?.filter(P=>P!==c)}),await i(),await(0,S.showToast)({style:S.Toast.Style.Success,title:"Un-assigned from me"})}catch(b){await(0,S.showToast)({style:S.Toast.Style.Failure,title:"Failed un-assigning from me",message:W(b)})}}async function l(){try{await(0,S.showToast)({style:S.Toast.Style.Animated,title:`Creating branch for issue #${e.number}`});let c=e.repository.defaultBranchRef?.target?.oid;if(!c)throw new Error("Repository default branch commit SHA is unavailable");let P=(await u.createLinkedBranch({input:{issueId:e.id,oid:c}})).createLinkedBranch?.linkedBranch?.ref?.name;await i(),P&&await(0,S.showToast)({style:S.Toast.Style.Success,title:`${P} is created`,primaryAction:{title:"Copy Branch Name",shortcut:S.Keyboard.Shortcut.Common.Copy,onAction:()=>S.Clipboard.copy(P)}})}catch(c){await(0,S.showToast)({style:S.Toast.Style.Failure,title:"Failed creating a branch",message:W(c)})}}async function g(c,b){if(await(0,S.confirmAlert)({icon:S.Icon.Trash,title:"Delete the branch",message:`${b} will be deleted. Are you sure you want to proceed with the action?`,primaryAction:{title:"Confirm",style:S.Alert.ActionStyle.Destructive}}))try{await(0,S.showToast)({style:S.Toast.Style.Animated,title:"Deleting a branch"}),await u.deleteLinkedBranch({input:{linkedBranchId:c}}),await i(),await(0,S.showToast)({style:S.Toast.Style.Success,title:"Deleted the branch"})}catch(P){await(0,S.showToast)({style:S.Toast.Style.Failure,title:"Failed deleting the branch",message:W(P)})}}let I=xe(s),m=e.assignees.nodes?.some(c=>c?.isViewer),f=e.linkedBranches?.nodes?.length?e.linkedBranches.nodes[0]:null;return(0,h.jsxs)(S.ActionPanel,{title:`#${e.number} in ${e.repository.nameWithOwner}`,children:[n,(0,h.jsx)(S.Action.OpenInBrowser,{url:e.url}),(0,h.jsxs)(S.ActionPanel.Section,{children:[s?(0,h.jsx)(S.Action,{title:m?"Unassign from Me":"Assign to Me",icon:I.icon,shortcut:{macOS:{modifiers:["cmd","shift"],key:"i"},Windows:{modifiers:["ctrl","shift"],key:"i"}},onAction:()=>m?A(s.id):M(s.id)}):null,(0,h.jsx)(Rc,{issue:e,mutate:i}),(0,h.jsx)(Ac,{issue:e,mutate:i}),f?null:(0,h.jsx)(S.Action,{title:"Create Issue Branch",icon:{source:"branch.svg",tintColor:S.Color.PrimaryText},shortcut:{macOS:{modifiers:["cmd","shift"],key:"b"},Windows:{modifiers:["ctrl","shift"],key:"b"}},onAction:()=>l()}),(0,h.jsx)(fc,{issue:e,mutate:i})]}),(0,h.jsx)(S.ActionPanel.Section,{children:e.closed?(0,h.jsx)(S.Action,{title:"Reopen Issue",icon:{source:"issue-reopened.svg",tintColor:S.Color.Green},onAction:p}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(S.Action,{title:"Close Issue as Completed",style:S.Action.Style.Destructive,icon:{source:"issue-closed.svg",tintColor:S.Color.Red},onAction:d}),(0,h.jsx)(S.Action,{title:"Close Issue as Not Planned",style:S.Action.Style.Destructive,icon:{source:"skip.svg",tintColor:S.Color.Red},onAction:y}),f?(0,h.jsx)(S.Action,{title:"Delete Issue Branch",style:S.Action.Style.Destructive,icon:{source:"branch.svg",tintColor:S.Color.Red},onAction:()=>g(f?.id||"",f.ref?.name??"")}):null]})}),(0,h.jsxs)(S.ActionPanel.Section,{children:[(0,h.jsx)(S.Action.CopyToClipboard,{content:e.number,title:"Copy Issue Number",shortcut:{macOS:{modifiers:["cmd","shift"],key:"."},Windows:{modifiers:["ctrl","shift"],key:"."}}}),(0,h.jsx)(S.Action.CopyToClipboard,{content:e.url,title:"Copy Issue URL",shortcut:{macOS:{modifiers:["cmd","shift"],key:","},Windows:{modifiers:["ctrl","shift"],key:","}}}),(0,h.jsx)(S.Action.CopyToClipboard,{content:e.title,title:"Copy Issue Title",shortcut:{macOS:{modifiers:["ctrl","shift"],key:","},Windows:{modifiers:["alt","shift"],key:","}}}),(0,h.jsx)(S.Action.CopyToClipboard,{content:`[${e.title}](${e.url})`,title:"Copy Markdown URL",shortcut:{macOS:{modifiers:["cmd","shift"],key:";"},Windows:{modifiers:["ctrl","shift"],key:";"}}}),f?.ref?.name?(0,h.jsx)(S.Action.CopyToClipboard,{content:f.ref?.name,title:"Copy Branch Name",shortcut:{macOS:{modifiers:["ctrl","shift"],key:"."},Windows:{modifiers:["alt","shift"],key:"."}}}):null]}),(0,h.jsxs)(S.ActionPanel.Section,{children:[(0,h.jsx)(xi,{data:Ei,sortQuery:o,setSortQuery:r}),(0,h.jsx)(S.Action,{icon:S.Icon.ArrowClockwise,title:"Refresh",onAction:i,shortcut:S.Keyboard.Shortcut.Common.Refresh})]})]})}function Rc({issue:e,mutate:t}){let{github:a}=Q(),[n,r]=(0,lr.useState)(!1),{data:o,isLoading:u}=(0,pr.useCachedPromise)(async i=>a.repositoryCollaboratorsForIssues({owner:i.repository.owner.login,name:i.repository.name,issueNumber:i.number}),[e],{execute:n});async function s({id:i,text:p}){try{await(0,S.showToast)({style:S.Toast.Style.Animated,title:"Adding assignee",message:p});let d=o?.repository?.issue?.assignees.nodes?.filter(y=>!!y).map(y=>y?.id)??[];await a.changeIssueAssignees({issueId:e.id,assigneeIds:[...d,i]}),await t(),await(0,S.showToast)({style:S.Toast.Style.Success,title:"Added assignee",message:p})}catch(d){await(0,S.showToast)({style:S.Toast.Style.Failure,title:"Failed adding assignee",message:W(d)})}}return(0,h.jsx)(S.ActionPanel.Submenu,{title:"Add Assignee",icon:S.Icon.AddPerson,shortcut:{macOS:{modifiers:["cmd","shift"],key:"a"},Windows:{modifiers:["ctrl","shift"],key:"a"}},onOpen:()=>r(!0),children:u?(0,h.jsx)(S.Action,{title:"Loading\u2026"}):o?.repository?.collaborators?.nodes?.map(i=>{if(!i)return null;let p=xe(i);return(0,h.jsx)(S.Action,{title:p.text,icon:p.icon,onAction:()=>s({id:i.id,text:p.text})},i.id)})})}function Ac({issue:e,mutate:t}){let{github:a}=Q(),[n,r]=(0,lr.useState)(!1),{data:o,isLoading:u}=(0,pr.useCachedPromise)(async i=>a.repositoryProjectsForIssues({owner:i.repository.owner.login,name:i.repository.name,issueNumber:i.number}),[e],{execute:n});async function s({id:i,text:p}){try{await(0,S.showToast)({style:S.Toast.Style.Animated,title:"Adding to project",message:p}),await a.addIssueToProject({issueId:e.id,projectId:i}),await t(),await(0,S.showToast)({style:S.Toast.Style.Success,title:"Added to project",message:p})}catch(d){await(0,S.showToast)({style:S.Toast.Style.Failure,title:"Failed adding to project",message:W(d)})}}return(0,h.jsx)(S.ActionPanel.Submenu,{title:"Add to Project",icon:{source:"project.svg",tintColor:S.Color.PrimaryText},shortcut:{macOS:{modifiers:["cmd","shift"],key:"p"},Windows:{modifiers:["ctrl","shift"],key:"p"}},onOpen:()=>r(!0),children:u?(0,h.jsx)(S.Action,{title:"Loading\u2026"}):o?.repository?.projectsV2.nodes?.map(i=>i?(0,h.jsx)(S.Action,{title:i.title,onAction:()=>s({id:i.id,text:i.title})},i.id):null)})}function fc({issue:e,mutate:t}){let{github:a}=Q(),[n,r]=(0,lr.useState)(!1),{data:o,isLoading:u}=(0,pr.useCachedPromise)(async p=>a.milestonesForRepository({owner:p.repository.owner.login,name:p.repository.name}),[e],{execute:n});async function s(){try{await(0,S.showToast)({style:S.Toast.Style.Animated,title:"Removing milestone"}),await a.changeIssueMilestone({issueId:e.id,milestoneId:null}),await t(),await(0,S.showToast)({style:S.Toast.Style.Success,title:"Removed milestone"})}catch(p){await(0,S.showToast)({style:S.Toast.Style.Failure,title:"Failed removing milestone",message:W(p)})}}async function i({id:p,text:d}){try{await(0,S.showToast)({style:S.Toast.Style.Animated,title:"Setting milestone",message:d}),await a.changeIssueMilestone({issueId:e.id,milestoneId:p}),await t(),await(0,S.showToast)({style:S.Toast.Style.Success,title:"Milestone set",message:d})}catch(y){await(0,S.showToast)({style:S.Toast.Style.Failure,title:"Failed setting milestone",message:W(y)})}}return(0,h.jsx)(S.ActionPanel.Submenu,{title:"Set Milestone",icon:{source:"milestone.svg",tintColor:S.Color.PrimaryText},shortcut:{macOS:{modifiers:["cmd","shift"],key:"m"},Windows:{modifiers:["ctrl","shift"],key:"m"}},onOpen:()=>r(!0),children:u?(0,h.jsx)(S.Action,{title:"Loading\u2026"}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(S.Action,{title:"No Milestone",onAction:()=>s()}),o?.repository?.milestones?.nodes?.map(p=>p?(0,h.jsx)(S.Action,{title:p.title,onAction:()=>i({id:p.id,text:p.title}),autoFocus:e.milestone?.id===p.id},p.id):null)]})})}var k=require("react/jsx-runtime");function pa({initialIssue:e,mutateList:t}){let{github:a}=Q(),n=Xe(),{data:r,isLoading:o,mutate:u}=(0,Ui.useCachedPromise)(async y=>(await a.issueDetails({nodeId:y})).node,[e.id],{initialData:e}),s=`# ${r.title}`;r?.body&&(s+=`

${r.body}`);let i=sr(r),p=ur(r),d=r.linkedBranches.nodes?.length?r.linkedBranches.nodes[0]?.ref?.name:null;return(0,k.jsx)(F.Detail,{isLoading:o,markdown:s,navigationTitle:`#${r.number}`,metadata:(0,k.jsxs)(F.Detail.Metadata,{children:[(0,k.jsx)(F.Detail.Metadata.Label,{title:"Repository",text:r.repository.nameWithOwner}),(0,k.jsx)(F.Detail.Metadata.TagList,{title:"Status",children:(0,k.jsx)(F.Detail.Metadata.TagList.Item,{...i})}),d?(0,k.jsx)(F.Detail.Metadata.Label,{title:"Branch",icon:{source:"branch.svg",tintColor:F.Color.PrimaryText},text:d}):null,r.updatedAt?(0,k.jsx)(F.Detail.Metadata.Label,{title:"Updated",text:(0,_i.format)(new Date(r.updatedAt),"dd MMM")}):null,(0,k.jsx)(F.Detail.Metadata.Label,{title:"Author",...p}),r.assignees&&r.assignees.totalCount>0?(0,k.jsx)(F.Detail.Metadata.TagList,{title:Ot(r.assignees.totalCount,"Assignee"),children:r.assignees.nodes?.map(y=>{if(!y)return null;let M=xe(y);return(0,k.jsx)(F.Detail.Metadata.TagList.Item,{...M},y.id)})}):null,r.labels&&r.labels.totalCount>0?(0,k.jsx)(F.Detail.Metadata.TagList,{title:Ot(r.labels.totalCount,"Label"),children:r.labels.nodes?.map(y=>y?(0,k.jsx)(F.Detail.Metadata.TagList.Item,{text:y.name,color:y.color},y.id):null)}):null,r.projectsV2&&r.projectsV2.totalCount>0?(0,k.jsx)(F.Detail.Metadata.TagList,{title:Ot(r.projectsV2.totalCount,"Project"),children:r.projectsV2.nodes?.map(y=>y?(0,k.jsx)(F.Detail.Metadata.TagList.Item,{text:y.title},y.id):null)}):null,r.milestone?(0,k.jsx)(F.Detail.Metadata.Label,{title:"Milestone",text:r.milestone.title}):null]}),actions:(0,k.jsx)(ua,{issue:r,viewer:n,mutateList:t,mutateDetail:u})})}var vi=w(Me());var cr=(0,vi.withAccessToken)(fi);var Bi=w(Me());var yr=require("node:child_process");var wi=require("node:util"),te=require("@raycast/api"),Pc=w(Me());var hS=[{title:"github.dev",baseUrl:"https://github.dev/",icon:{source:"github-dev.svg",tintColor:te.Color.PrimaryText},shortcut:te.Keyboard.Shortcut.Common.Open},{title:"VS Code for the Web",baseUrl:"https://vscode.dev/github/",icon:{source:"vscode.svg",tintColor:te.Color.PrimaryText},shortcut:{macOS:{modifiers:["cmd"],key:"v"},Windows:{modifiers:["ctrl"],key:"v"}}},{title:"CodeSandbox",baseUrl:"https://codesandbox.io/s/github/",icon:{source:"codesandbox.svg",tintColor:te.Color.PrimaryText}},{title:"Replit",baseUrl:"https://repl.it/github/",icon:{source:"replit.svg",tintColor:te.Color.PrimaryText}},{title:"Gitpod",baseUrl:"https://gitpod.io/#https://github.com/",icon:{source:"gitpod.svg",tintColor:te.Color.PrimaryText}},{title:"Glitch",baseUrl:"https://glitch.com/edit/#!/import/github/",icon:{source:"glitch.svg",tintColor:te.Color.PrimaryText}},{title:"Sourcegraph",baseUrl:"https://sourcegraph.com/github.com/",icon:{source:"sourcegraph.svg",tintColor:te.Color.PrimaryText},shortcut:{macOS:{modifiers:["cmd"],key:"s"},Windows:{modifiers:["ctrl"],key:"s"}}},{title:"DeepWiki",baseUrl:"https://deepwiki.com/",icon:{source:"deepwiki.png"},shortcut:{macOS:{modifiers:["cmd"],key:"d"},Windows:{modifiers:["ctrl"],key:"d"}}},{title:"VS Code Remote Repositories",baseUrl:"vscode://GitHub.remotehub/open?url=https://github.com/",icon:{source:"vscode.svg",tintColor:te.Color.PrimaryText}}];var Ec=[{title:"Relevance",value:""},{title:"Last Update",value:"sort:updated-desc"},{title:"Name",value:"sort:name-asc"},{title:"Stars",value:"sort:stars-desc"},{title:"Forks",value:"sort:forks-desc"}],Cc=[{title:"Last Pushed",value:"pushed_at:desc"},{title:"Name",value:"name:asc"},{title:"Stars",value:"stargazers:desc"}],hc=[{title:"Recently Starred",value:"starred_at:desc"},{title:"Oldest Starred",value:"starred_at:asc"}],DS=Ec[0].value,xS=Cc[0].value,US=hc[0].value;var _S=(0,wi.promisify)(yr.execFile);var la="\x1B",Ti="\x07",vS=new RegExp(`${la}][^${Ti}${la}]*(?:${Ti}|${la}\\\\)`,"g"),TS=new RegExp(`${la}\\[[0-9;?]*[A-Za-z]`,"g"),wS=new RegExp(`${la}\\([0-9A-Za-z]`,"g");function Oi(e,t,a){if(a)return`repo:${a}`;let n=t.filter(Boolean);return e==="all"?"":e==="exclude"?n.map(r=>`-repo:${r}`).join(" "):n.map(r=>`repo:${r}`).join(" ")}function dr(){let{github:e}=Q(),n=["user:@me",...Xe()?.organizations?.nodes?.flatMap(r=>r?.login?[`org:${r.login}`]:[])??[]].join(" ");return(0,Bi.useCachedPromise)(async r=>{let u=(await Promise.allSettled(r.split(" ").map(s=>e.searchRepositories({query:`${s} archived:false sort:updated-desc`,numberOfItems:100})))).flatMap(s=>s.status==="fulfilled"?s.value.search.nodes:[]);return[...new Map(u.map(s=>[s.id,s])).values()].sort((s,i)=>new Date(i.updatedAt).getTime()-new Date(s.updatedAt).getTime())},[n])}var T=require("react/jsx-runtime");function on({draftValues:e}){let{push:t}=(0,C.useNavigation)(),{data:a}=dr(),{github:n}=Q(),{openInBrowserAfterCreate:r}=(0,C.getPreferenceValues)(),{handleSubmit:o,itemProps:u,values:s,setValue:i,reset:p,focus:d}=(0,ct.useForm)({async onSubmit(c){let b=await(0,C.showToast)({style:C.Toast.Style.Animated,title:"Creating issue"});try{let E=(await n.createIssue({repositoryId:c.repository,title:c.title,body:c.description,assigneeIds:c.assignees,labelIds:c.labels,milestoneId:c.milestone||null,issueTypeId:c.issueType||null}))?.createIssue?.issue;if(E&&(await Promise.all(c.projects.map(U=>n.addIssueToProject({issueId:E.id,projectId:U}))),b.style=C.Toast.Style.Success,b.title="Created issue",b.primaryAction={title:"Open Issue",shortcut:C.Keyboard.Shortcut.Common.OpenWith,onAction:()=>t((0,T.jsx)(pa,{initialIssue:E}))},b.secondaryAction={title:"Copy URL",shortcut:C.Keyboard.Shortcut.Common.Copy,onAction:()=>C.Clipboard.copy(E.url)},r))try{await(0,C.open)(E.url)}catch{}p({title:"",description:"",reviewers:[],assignees:[],labels:[],projects:[],milestone:"",issueType:""}),d("repository")}catch(P){b.style=C.Toast.Style.Failure,b.title="Failed creating issue",b.message=W(P)}},initialValues:{repository:e?.repository??"",title:e?.title??"",description:e?.description??"",reviewers:e?.reviewers??[],assignees:e?.assignees??[],labels:e?.labels??[],projects:e?.projects??[],milestone:e?.milestone??"",issueType:e?.issueType??""},validation:{repository:ct.FormValidation.Required,title:ct.FormValidation.Required}}),{data:y}=(0,ct.useCachedPromise)(c=>{let b=a?.find(P=>P.id===c);return b?n.dataForRepository({owner:b.owner.login,name:b.name}):Promise.resolve(null)},[s.repository],{execute:!!s.repository}),M=y?.repository?.collaborators?.nodes,A=y?.repository?.labels?.nodes,l=y?.repository?.projectsV2?.nodes??[],g=y?.repository?.owner?.__typename==="Organization"?y.repository.owner.projectsV2?.nodes??[]:[],I=[...l,...g].filter((c,b,P)=>c?P.findIndex(E=>E?.id===c.id)===b:!1),m=y?.repository?.milestones?.nodes,f=y?.repository?.issueTypes?.nodes?.filter(c=>c&&c.isEnabled);return(0,Li.useEffect)(()=>{i("description",""),i("assignees",[]),i("labels",[]),i("projects",[]),i("milestone",""),i("issueType","")},[s.repository]),(0,T.jsxs)(C.Form,{actions:(0,T.jsx)(C.ActionPanel,{children:(0,T.jsx)(C.Action.SubmitForm,{onSubmit:o,title:"Create Issue"})}),enableDrafts:!0,children:[(0,T.jsx)(C.Form.Dropdown,{...u.repository,title:"Repository",storeValue:!0,children:a?.map(c=>(0,T.jsx)(C.Form.Dropdown.Item,{title:c.nameWithOwner,value:c.id,icon:{source:c.owner.avatarUrl,mask:C.Image.Mask.Circle}},c.id))}),(0,T.jsx)(C.Form.Separator,{}),(0,T.jsx)(C.Form.TextField,{...u.title,title:"Title",placeholder:"Issue title"}),(0,T.jsx)(C.Form.TextArea,{...u.description,placeholder:"Issue description (e.g **bold**)",title:"Description",enableMarkdown:!0}),(0,T.jsx)(C.Form.TagPicker,{...u.assignees,title:"Assignees",children:M?.map(c=>{if(!c)return null;let b=xe(c);return(0,T.jsx)(C.Form.TagPicker.Item,{icon:b.icon,title:b.text,value:c.id},c.id)})}),(0,T.jsx)(C.Form.TagPicker,{...u.labels,title:"Labels",children:A?.map(c=>c?(0,T.jsx)(C.Form.TagPicker.Item,{title:c.name,value:c.id,icon:{source:C.Icon.Dot,tintColor:c.color}},c.id):null)}),(0,T.jsx)(C.Form.TagPicker,{...u.projects,title:"Projects",children:I?.map(c=>c?(0,T.jsx)(C.Form.TagPicker.Item,{title:c.title,value:c.id},c.id):null)}),(0,T.jsxs)(C.Form.Dropdown,{...u.issueType,title:"Issue Type",children:[(0,T.jsx)(C.Form.Dropdown.Item,{value:"",title:"None"}),f?.map(c=>c?(0,T.jsx)(C.Form.Dropdown.Item,{icon:{source:C.Icon.Dot,tintColor:c.color},title:c.name,value:c.id},c.id):null)]}),(0,T.jsxs)(C.Form.Dropdown,{...u.milestone,title:"Milestone",children:[(0,T.jsx)(C.Form.Dropdown.Item,{value:"",title:"None"}),m?.map(c=>c?(0,T.jsx)(C.Form.Dropdown.Item,{title:c.title,value:c.id},c.id):null)]})]})}var $S=cr(on);var ca=require("react/jsx-runtime");function sn(){return(0,ca.jsx)(Bt.List.EmptyView,{title:"No issues found",actions:(0,ca.jsx)(Bt.ActionPanel,{children:(0,ca.jsx)(Bt.Action.Push,{title:"Create Issue",target:(0,ca.jsx)(on,{})})})})}var Fe=require("@raycast/api"),qi=require("date-fns");var ya=require("react/jsx-runtime");function un({issue:e,viewer:t,mutateList:a,sortQuery:n,setSortQuery:r}){let o=new Date(e.updatedAt),u=ur(e),s=sr(e),i=[{date:o,tooltip:`Updated: ${(0,qi.format)(o,"EEEE d MMMM yyyy 'at' HH:mm")}`},{icon:u.icon,tooltip:`Author: ${u.text}`}];e.comments.totalCount>0&&i.unshift({text:`${e.comments.totalCount}`,icon:Fe.Icon.Bubble}),e.linkedBranches?.nodes?.length&&i.unshift({icon:{source:"branch.svg",tintColor:Fe.Color.SecondaryText},tooltip:e.linkedBranches.nodes[0]?.ref?.name});let p=[`${e.number}`];return e.author?.login&&p.push(e.author.login),(0,ya.jsx)(Fe.List.Item,{title:e.title,subtitle:{value:`#${e.number}`,tooltip:`Repository: ${e.repository.nameWithOwner}`},icon:{value:s.icon,tooltip:`Status: ${s.text}`},keywords:p,accessories:i,actions:(0,ya.jsx)(ua,{issue:e,mutateList:a,viewer:t,sortQuery:n,setSortQuery:r,children:(0,ya.jsx)(Fe.Action.Push,{title:"Show Details",icon:Fe.Icon.Sidebar,target:(0,ya.jsx)(pa,{initialIssue:e,viewer:t,mutateList:a})})})},e.id)}var ke=require("@raycast/api");var Lt=require("react/jsx-runtime");function pn({setSelectedRepository:e,withAllRepositories:t=!0}){let{data:a}=dr();return(0,Lt.jsxs)(ke.List.Dropdown,{tooltip:"Select Repository",storeValue:!0,onChange:e,children:[t?(0,Lt.jsx)(ke.List.Dropdown.Item,{value:"",title:"All Repositories",icon:ke.Icon.List}):null,a&&a.length>0?(0,Lt.jsx)(ke.List.Dropdown.Section,{children:a.map(n=>(0,Lt.jsx)(ke.List.Dropdown.Item,{title:n.nameWithOwner,value:n.nameWithOwner,icon:{source:n.owner.avatarUrl,mask:ke.Image.Mask.Circle}},n.id))}):null]})}var Ni=w(Me()),Sr=require("date-fns"),Vi=require("lodash");function Fi({sortQuery:e,repository:t,showCreated:a,showAssigned:n,showMentioned:r,showRecentlyClosed:o,filterMode:u,repositoryList:s}){let{github:i}=Q(),{data:p,...d}=(0,Ni.useCachedPromise)(async(c,b,P,E,U,B,ae,j)=>{let pe=`updated:>${(0,Sr.format)((0,Sr.subDays)(Date.now(),60),"yyyy-MM-dd")}`,D=Oi(ae,j,c);return(await Promise.all([...P?["is:issue author:@me archived:false is:open"]:[],...B?["is:issue author:@me archived:false is:closed"]:[],...E?["is:issue assignee:@me archived:false is:open"]:[],...E&&B?["is:issue assignee:@me archived:false is:closed"]:[],...U?["is:issue mentions:@me archived:false is:open"]:[],...U&&B?["is:issue mentions:@me archived:false is:closed"]:[]].map(_e=>i.searchIssues({query:`${_e} ${b} ${pe} ${D}`,numberOfItems:20})))).map(_e=>_e.search.nodes)},[t,e,a,n,r,o,u,s]),y,M,A,l,g,I;if(p){let c=0;a&&(y=p[c++]),o&&(M=p[c++]),n&&(A=p[c++],o&&(l=p[c++])),r&&(g=p[c++],o&&(I=p[c++]))}let m=(0,Vi.uniqBy)([...M||[],...l||[],...I||[]],"id");return{data:[{title:"Created",issues:y},{title:"Assigned",issues:A},{title:"Mentioned",issues:g},{title:"Recently Closed",issues:m}].filter(c=>c.issues&&c.issues.length>0).map(c=>{let b=Ot(c.issues?.length??0,"issue",{withNumber:!0});return{...c,subtitle:b}}),...d}}var yt=require("react/jsx-runtime");function Dc(){let e=Xe(),[t,a]=(0,ji.useState)(null),[n,r]=(0,ki.useCachedState)("sort-query",Ci,{cacheNamespace:"github-my-issue"}),{showCreated:o,showAssigned:u,showMentioned:s,showRecentlyClosed:i,repositoryFilterMode:p,repositoryList:d}=(0,da.getPreferenceValues)(),{data:y,isLoading:M,mutate:A}=Fi({repository:t,sortQuery:n,showCreated:o,showAssigned:u,showMentioned:s,showRecentlyClosed:i,filterMode:p,repositoryList:d?.split(",").map(l=>l.trim())||[]});return(0,yt.jsxs)(da.List,{isLoading:M,searchBarPlaceholder:"Filter by title, number, or assignee",searchBarAccessory:(0,yt.jsx)(pn,{setSelectedRepository:a}),children:[y.map(l=>(0,yt.jsx)(da.List.Section,{title:l.title,subtitle:l.subtitle,children:l.issues?.map(g=>(0,yt.jsx)(un,{issue:g,viewer:e,mutateList:A,sortQuery:n,setSortQuery:r},g.id))},l.title)),(0,yt.jsx)(sn,{})]})}var xc=cr(Dc);
