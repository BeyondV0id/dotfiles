"use strict";var Ei=Object.create;var na=Object.defineProperty;var Ci=Object.getOwnPropertyDescriptor;var hi=Object.getOwnPropertyNames;var Di=Object.getPrototypeOf,xi=Object.prototype.hasOwnProperty;var tr=(e,t,a)=>()=>{if(a)throw a[0];try{return e&&(t=e(e=0)),t}catch(n){throw a=[n],n}};var D=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(a){throw t=0,a}},ut=(e,t)=>{for(var a in t)na(e,a,{get:t[a],enumerable:!0})},ra=(e,t,a,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of hi(t))!xi.call(e,r)&&r!==a&&na(e,r,{get:()=>t[r],enumerable:!(n=Ci(t,r))||n.enumerable});return e},W=(e,t,a)=>(ra(e,t,"default"),a&&ra(a,t,"default")),O=(e,t,a)=>(a=e!=null?Ei(Di(e)):{},ra(t||!e||!e.__esModule?na(a,"default",{value:e,enumerable:!0}):a,e)),_i=e=>ra(na({},"__esModule",{value:!0}),e);var $r=D(oa=>{"use strict";Object.defineProperty(oa,"__esModule",{value:!0});oa.useDeepMemo=void 0;var ar=require("react"),Ui=require("dequal/lite");function vi(e){let t=(0,ar.useRef)(e),a=(0,ar.useRef)(0);return(0,Ui.dequal)(e,t.current)||(t.current=e,a.current+=1),(0,ar.useMemo)(()=>t.current,[a.current])}oa.useDeepMemo=vi});var _e=D(ia=>{"use strict";Object.defineProperty(ia,"__esModule",{value:!0});ia.useLatest=void 0;var Ti=require("react");function wi(e){let t=(0,Ti.useRef)(e);return t.current=e,t}ia.useLatest=wi});var vt=D(me=>{"use strict";var Oi=me&&me.__createBinding||(Object.create?(function(e,t,a,n){n===void 0&&(n=a);var r=Object.getOwnPropertyDescriptor(t,a);(!r||("get"in r?!t.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,r)}):(function(e,t,a,n){n===void 0&&(n=a),e[n]=t[a]})),Bi=me&&me.__setModuleDefault||(Object.create?(function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}):function(e,t){e.default=t}),Wr=me&&me.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var a in e)a!=="default"&&Object.prototype.hasOwnProperty.call(e,a)&&Oi(t,e,a);return Bi(t,e),t};Object.defineProperty(me,"__esModule",{value:!0});me.showFailureToast=void 0;var Li=Wr(require("fs")),qi=Wr(require("path")),pt=require("@raycast/api");function Ni(e,t){let a=e instanceof Error?e.message:String(e);return(0,pt.showToast)({style:pt.Toast.Style.Failure,title:t?.title??"Something went wrong",message:t?.message??a,primaryAction:t?.primaryAction??Qr(e),secondaryAction:t?.primaryAction?Qr(e):void 0})}me.showFailureToast=Ni;var Qr=e=>{let t=!0,a="[Extension Name]...",n="";try{let u=JSON.parse(Li.readFileSync(qi.join(pt.environment.assetsPath,"..","package.json"),"utf8"));a=`[${u.title}]...`,n=`https://raycast.com/${u.owner||u.author}/${u.name}`,(!u.owner||u.access==="public")&&(t=!1)}catch{}let r=pt.environment.isDevelopment||t,o=e instanceof Error?e?.stack||e?.message||"":String(e);return{title:r?"Copy Logs":"Report Error",onAction(u){u.hide(),r?pt.Clipboard.copy(o):(0,pt.open)(`https://github.com/raycast/extensions/issues/new?&labels=extension%2Cbug&template=extension_bug_report.yml&title=${encodeURIComponent(a)}&extension-url=${encodeURI(n)}&description=${encodeURIComponent(`#### Error:
\`\`\`
${o}
\`\`\`
`)}`)}}}});var lt=D(sa=>{"use strict";Object.defineProperty(sa,"__esModule",{value:!0});sa.usePromise=void 0;var te=require("react"),Tt=require("@raycast/api"),Vi=$r(),Ve=_e(),Fi=vt();function ki(e,t,a){let n=(0,te.useRef)(0),[r,o]=(0,te.useState)({isLoading:!0}),u=(0,Ve.useLatest)(e),s=(0,Ve.useLatest)(a?.abortable),i=(0,Ve.useLatest)(t||[]),p=(0,Ve.useLatest)(a?.onError),c=(0,Ve.useLatest)(a?.onData),y=(0,Ve.useLatest)(a?.onWillExecute),m=(0,Ve.useLatest)(a?.failureToastOptions),P=(0,Ve.useLatest)(r.data),l=(0,te.useRef)(),g=(0,te.useRef)({page:0}),I=(0,te.useRef)(!1),M=(0,te.useRef)(!0),A=(0,te.useRef)(50),S=(0,te.useCallback)((...H)=>{let B=++n.current;s.current&&(s.current.current?.abort(),s.current.current=new AbortController),y.current?.(H),o(x=>({...x,isLoading:!0}));let Se=ji(u.current)(...H);function Me(x){return x.name=="AbortError"||B===n.current&&(p.current?p.current(x):Tt.environment.launchType!==Tt.LaunchType.Background&&(0,Fi.showFailureToast)(x,{title:"Failed to fetch latest data",primaryAction:{title:"Retry",onAction(ee){ee.hide(),l.current?.(...i.current||[])}},...m.current}),o({error:x,isLoading:!1})),x}return typeof Se=="function"?(I.current=!0,Se(g.current).then(({data:x,hasMore:ee,cursor:Ut})=>(B===n.current&&(g.current&&(g.current.cursor=Ut,g.current.lastItem=x?.[x.length-1]),c.current&&c.current(x,g.current),ee&&(A.current=x.length),M.current=ee,o(er=>g.current.page===0?{data:x,isLoading:!1}:{data:(er.data||[])?.concat(x),isLoading:!1})),x),x=>(M.current=!1,Me(x)))):(I.current=!1,Se.then(x=>(B===n.current&&(c.current&&c.current(x),o({data:x,isLoading:!1})),x),Me))},[s,c,p,i,u,o,l,y,g,m]);l.current=S;let b=(0,te.useCallback)(()=>{g.current={page:0};let H=i.current||[];return S(...H)},[S,i]),f=(0,te.useCallback)(async(H,B)=>{let Se;try{if(B?.optimisticUpdate){typeof B?.rollbackOnError!="function"&&B?.rollbackOnError!==!1&&(Se=structuredClone(P.current?.value));let Me=B.optimisticUpdate;o(x=>({...x,data:Me(x.data)}))}return await H}catch(Me){if(typeof B?.rollbackOnError=="function"){let x=B.rollbackOnError;o(ee=>({...ee,data:x(ee.data)}))}else B?.optimisticUpdate&&B?.rollbackOnError!==!1&&o(x=>({...x,data:Se}));throw Me}finally{B?.shouldRevalidateAfter!==!1&&(Tt.environment.launchType===Tt.LaunchType.Background||Tt.environment.commandMode==="menu-bar"?await b():b())}},[b,P,o]),E=(0,te.useCallback)(()=>{g.current.page+=1;let H=i.current||[];S(...H)},[g,i,S]);(0,te.useEffect)(()=>{g.current={page:0},a?.execute!==!1?S(...t||[]):s.current&&s.current.current?.abort()},[(0,Vi.useDeepMemo)([t,a?.execute,S]),s,g]),(0,te.useEffect)(()=>()=>{s.current&&s.current.current?.abort()},[s]);let U=a?.execute!==!1?r.isLoading:!1,j={...r,isLoading:U},de=I.current?{pageSize:A.current,hasMore:M.current,onLoadMore:E}:void 0;return{...j,revalidate:b,mutate:f,pagination:de}}sa.usePromise=ki;function ji(e){return e===Promise.all||e===Promise.race||e===Promise.resolve||e===Promise.reject?e.bind(Promise):e}});var Fe=D(Re=>{"use strict";var zi=Re&&Re.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Re,"__esModule",{value:!0});Re.hash=Re.reviver=Re.replacer=void 0;var Hi=zi(require("object-hash"));function Gi(e,t){let a=this[e];return a instanceof Date?`__raycast_cached_date__${a.toString()}`:Buffer.isBuffer(a)?`__raycast_cached_buffer__${a.toString("base64")}`:t}Re.replacer=Gi;function $i(e,t){return typeof t=="string"&&t.startsWith("__raycast_cached_date__")?new Date(t.replace("__raycast_cached_date__","")):typeof t=="string"&&t.startsWith("__raycast_cached_buffer__")?Buffer.from(t.replace("__raycast_cached_buffer__",""),"base64"):t}Re.reviver=$i;function Qi(e,t){return(0,Hi.default)(e,{replacer:a=>a instanceof URLSearchParams?a.toString():a,...t})}Re.hash=Qi});var pa=D(ua=>{"use strict";Object.defineProperty(ua,"__esModule",{value:!0});ua.useCachedState=void 0;var rr=require("react"),Wi=require("@raycast/api"),nr=_e(),Kr=Fe(),Ki=Symbol("cache without namespace"),Yr=new Map;function Yi(e,t,a){let n=a?.cacheNamespace||Ki,r=Yr.get(n)||Yr.set(n,new Wi.Cache({namespace:a?.cacheNamespace})).get(n);if(!r)throw new Error("Missing cache");let o=(0,nr.useLatest)(e),u=(0,nr.useLatest)(t),s=(0,rr.useSyncExternalStore)(r.subscribe,()=>{try{return r.get(o.current)}catch(y){console.error("Could not get Cache data:",y);return}}),i=(0,rr.useMemo)(()=>{if(typeof s<"u"){if(s==="undefined")return;try{return JSON.parse(s,Kr.reviver)}catch(y){return console.warn("The cached data is corrupted",y),u.current}}else return u.current},[s,u]),p=(0,nr.useLatest)(i),c=(0,rr.useCallback)(y=>{let m=typeof y=="function"?y(p.current):y;if(typeof m>"u")r.set(o.current,"undefined");else{let P=JSON.stringify(m,Kr.replacer);r.set(o.current,P)}return m},[r,o,p]);return[i,c]}ua.useCachedState=Yi});var Ot=D(la=>{"use strict";Object.defineProperty(la,"__esModule",{value:!0});la.useCachedPromise=void 0;var wt=require("react"),Ji=pa(),Zi=lt(),Xi=_e(),Jr=Fe(),ct=Symbol();function es(e,t,a){let{initialData:n,keepPreviousData:r,internal_cacheKeySuffix:o,...u}=a||{},s=(0,wt.useRef)(),[i,p]=(0,Ji.useCachedState)((0,Jr.hash)(t||[])+o,ct,{cacheNamespace:(0,Jr.hash)(e)}),c=(0,wt.useRef)(i!==ct?i:n),y=(0,wt.useRef)(void 0),{mutate:m,revalidate:P,...l}=(0,Zi.usePromise)(e,t||[],{...u,onData(S,b){y.current=b,u.onData&&u.onData(S,b),!(b&&b.page>0)&&(s.current="promise",c.current=S,p(S))}}),g,I=l.pagination;y.current&&y.current.page>0&&l.data?g=l.data:s.current==="promise"?g=c.current:r&&i!==ct?(g=i,I&&(I.hasMore=!0,I.pageSize=i.length)):r&&i===ct?g=c.current:i!==ct?(g=i,I&&(I.hasMore=!0,I.pageSize=i.length)):g=n;let M=(0,Xi.useLatest)(g),A=(0,wt.useCallback)(async(S,b)=>{let f;try{if(b?.optimisticUpdate){typeof b?.rollbackOnError!="function"&&b?.rollbackOnError!==!1&&(f=structuredClone(M.current));let E=b.optimisticUpdate(M.current);s.current="cache",c.current=E,p(E)}return await m(S,{shouldRevalidateAfter:b?.shouldRevalidateAfter})}catch(E){if(typeof b?.rollbackOnError=="function"){let U=b.rollbackOnError(M.current);s.current="cache",c.current=U,p(U)}else b?.optimisticUpdate&&b?.rollbackOnError!==!1&&(s.current="cache",c.current=f,p(f));throw E}},[p,m,M,c,s]);return(0,wt.useEffect)(()=>{i!==ct&&(s.current="cache",c.current=i)},[i]),{data:g,isLoading:l.isLoading,error:l.error,mutate:y.current&&y.current.page>0?m:A,pagination:I,revalidate:P}}la.useCachedPromise=es});var ln=D((Ie,pn)=>{"use strict";Object.defineProperty(Ie,"__esModule",{value:!0});function bt(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var be=bt(require("stream")),tn=bt(require("http")),ya=bt(require("url")),an=bt(require("whatwg-url")),ts=bt(require("https")),Ye=bt(require("zlib")),as=be.Readable,Ue=Symbol("buffer"),or=Symbol("type"),Lt=class e{constructor(){this[or]="";let t=arguments[0],a=arguments[1],n=[],r=0;if(t){let u=t,s=Number(u.length);for(let i=0;i<s;i++){let p=u[i],c;p instanceof Buffer?c=p:ArrayBuffer.isView(p)?c=Buffer.from(p.buffer,p.byteOffset,p.byteLength):p instanceof ArrayBuffer?c=Buffer.from(p):p instanceof e?c=p[Ue]:c=Buffer.from(typeof p=="string"?p:String(p)),r+=c.length,n.push(c)}}this[Ue]=Buffer.concat(n);let o=a&&a.type!==void 0&&String(a.type).toLowerCase();o&&!/[^\u0020-\u007E]/.test(o)&&(this[or]=o)}get size(){return this[Ue].length}get type(){return this[or]}text(){return Promise.resolve(this[Ue].toString())}arrayBuffer(){let t=this[Ue],a=t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength);return Promise.resolve(a)}stream(){let t=new as;return t._read=function(){},t.push(this[Ue]),t.push(null),t}toString(){return"[object Blob]"}slice(){let t=this.size,a=arguments[0],n=arguments[1],r,o;a===void 0?r=0:a<0?r=Math.max(t+a,0):r=Math.min(a,t),n===void 0?o=t:n<0?o=Math.max(t+n,0):o=Math.min(n,t);let u=Math.max(o-r,0),i=this[Ue].slice(r,r+u),p=new e([],{type:arguments[2]});return p[Ue]=i,p}};Object.defineProperties(Lt.prototype,{size:{enumerable:!0},type:{enumerable:!0},slice:{enumerable:!0}});Object.defineProperty(Lt.prototype,Symbol.toStringTag,{value:"Blob",writable:!1,enumerable:!1,configurable:!0});function k(e,t,a){Error.call(this,e),this.message=e,this.type=t,a&&(this.code=this.errno=a.code),Error.captureStackTrace(this,this.constructor)}k.prototype=Object.create(Error.prototype);k.prototype.constructor=k;k.prototype.name="FetchError";var pr;try{pr=require("encoding").convert}catch{}var Te=Symbol("Body internals"),Zr=be.PassThrough;function L(e){var t=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.size;let r=n===void 0?0:n;var o=a.timeout;let u=o===void 0?0:o;e==null?e=null:rn(e)?e=Buffer.from(e.toString()):Nt(e)||Buffer.isBuffer(e)||(Object.prototype.toString.call(e)==="[object ArrayBuffer]"?e=Buffer.from(e):ArrayBuffer.isView(e)?e=Buffer.from(e.buffer,e.byteOffset,e.byteLength):e instanceof be||(e=Buffer.from(String(e)))),this[Te]={body:e,disturbed:!1,error:null},this.size=r,this.timeout=u,e instanceof be&&e.on("error",function(s){let i=s.name==="AbortError"?s:new k(`Invalid response body while trying to fetch ${t.url}: ${s.message}`,"system",s);t[Te].error=i})}L.prototype={get body(){return this[Te].body},get bodyUsed(){return this[Te].disturbed},arrayBuffer(){return yt.call(this).then(function(e){return e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength)})},blob(){let e=this.headers&&this.headers.get("content-type")||"";return yt.call(this).then(function(t){return Object.assign(new Lt([],{type:e.toLowerCase()}),{[Ue]:t})})},json(){var e=this;return yt.call(this).then(function(t){try{return JSON.parse(t.toString())}catch(a){return L.Promise.reject(new k(`invalid json response body at ${e.url} reason: ${a.message}`,"invalid-json"))}})},text(){return yt.call(this).then(function(e){return e.toString()})},buffer(){return yt.call(this)},textConverted(){var e=this;return yt.call(this).then(function(t){return rs(t,e.headers)})}};Object.defineProperties(L.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0}});L.mixIn=function(e){for(let t of Object.getOwnPropertyNames(L.prototype))if(!(t in e)){let a=Object.getOwnPropertyDescriptor(L.prototype,t);Object.defineProperty(e,t,a)}};function yt(){var e=this;if(this[Te].disturbed)return L.Promise.reject(new TypeError(`body used already for: ${this.url}`));if(this[Te].disturbed=!0,this[Te].error)return L.Promise.reject(this[Te].error);let t=this.body;if(t===null)return L.Promise.resolve(Buffer.alloc(0));if(Nt(t)&&(t=t.stream()),Buffer.isBuffer(t))return L.Promise.resolve(t);if(!(t instanceof be))return L.Promise.resolve(Buffer.alloc(0));let a=[],n=0,r=!1;return new L.Promise(function(o,u){let s;e.timeout&&(s=setTimeout(function(){r=!0,u(new k(`Response timeout while trying to fetch ${e.url} (over ${e.timeout}ms)`,"body-timeout"))},e.timeout)),t.on("error",function(i){i.name==="AbortError"?(r=!0,u(i)):u(new k(`Invalid response body while trying to fetch ${e.url}: ${i.message}`,"system",i))}),t.on("data",function(i){if(!(r||i===null)){if(e.size&&n+i.length>e.size){r=!0,u(new k(`content size at ${e.url} over limit: ${e.size}`,"max-size"));return}n+=i.length,a.push(i)}}),t.on("end",function(){if(!r){clearTimeout(s);try{o(Buffer.concat(a,n))}catch(i){u(new k(`Could not create Buffer from response body for ${e.url}: ${i.message}`,"system",i))}}})})}function rs(e,t){if(typeof pr!="function")throw new Error("The package `encoding` must be installed to use the textConverted() function");let a=t.get("content-type"),n="utf-8",r,o;return a&&(r=/charset=([^;]*)/i.exec(a)),o=e.slice(0,1024).toString(),!r&&o&&(r=/<meta.+?charset=(['"])(.+?)\1/i.exec(o)),!r&&o&&(r=/<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(o),r||(r=/<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(o),r&&r.pop()),r&&(r=/charset=(.*)/i.exec(r.pop()))),!r&&o&&(r=/<\?xml.+?encoding=(['"])(.+?)\1/i.exec(o)),r&&(n=r.pop(),(n==="gb2312"||n==="gbk")&&(n="gb18030")),pr(e,"UTF-8",n).toString()}function rn(e){return typeof e!="object"||typeof e.append!="function"||typeof e.delete!="function"||typeof e.get!="function"||typeof e.getAll!="function"||typeof e.has!="function"||typeof e.set!="function"?!1:e.constructor.name==="URLSearchParams"||Object.prototype.toString.call(e)==="[object URLSearchParams]"||typeof e.sort=="function"}function Nt(e){return typeof e=="object"&&typeof e.arrayBuffer=="function"&&typeof e.type=="string"&&typeof e.stream=="function"&&typeof e.constructor=="function"&&typeof e.constructor.name=="string"&&/^(Blob|File)$/.test(e.constructor.name)&&/^(Blob|File)$/.test(e[Symbol.toStringTag])}function nn(e){let t,a,n=e.body;if(e.bodyUsed)throw new Error("cannot clone body after it is used");return n instanceof be&&typeof n.getBoundary!="function"&&(t=new Zr,a=new Zr,n.pipe(t),n.pipe(a),e[Te].body=t,n=a),n}function on(e){return e===null?null:typeof e=="string"?"text/plain;charset=UTF-8":rn(e)?"application/x-www-form-urlencoded;charset=UTF-8":Nt(e)?e.type||null:Buffer.isBuffer(e)||Object.prototype.toString.call(e)==="[object ArrayBuffer]"||ArrayBuffer.isView(e)?null:typeof e.getBoundary=="function"?`multipart/form-data;boundary=${e.getBoundary()}`:e instanceof be?null:"text/plain;charset=UTF-8"}function sn(e){let t=e.body;return t===null?0:Nt(t)?t.size:Buffer.isBuffer(t)?t.length:t&&typeof t.getLengthSync=="function"&&(t._lengthRetrievers&&t._lengthRetrievers.length==0||t.hasKnownLength&&t.hasKnownLength())?t.getLengthSync():null}function ns(e,t){let a=t.body;a===null?e.end():Nt(a)?a.stream().pipe(e):Buffer.isBuffer(a)?(e.write(a),e.end()):a.pipe(e)}L.Promise=global.Promise;var un=/[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/,lr=/[^\t\x20-\x7e\x80-\xff]/;function Bt(e){if(e=`${e}`,un.test(e)||e==="")throw new TypeError(`${e} is not a legal HTTP header name`)}function Xr(e){if(e=`${e}`,lr.test(e))throw new TypeError(`${e} is not a legal HTTP header value`)}function dt(e,t){t=t.toLowerCase();for(let a in e)if(a.toLowerCase()===t)return a}var w=Symbol("map"),ue=class e{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:void 0;if(this[w]=Object.create(null),t instanceof e){let a=t.raw(),n=Object.keys(a);for(let r of n)for(let o of a[r])this.append(r,o);return}if(t!=null)if(typeof t=="object"){let a=t[Symbol.iterator];if(a!=null){if(typeof a!="function")throw new TypeError("Header pairs must be iterable");let n=[];for(let r of t){if(typeof r!="object"||typeof r[Symbol.iterator]!="function")throw new TypeError("Each header pair must be iterable");n.push(Array.from(r))}for(let r of n){if(r.length!==2)throw new TypeError("Each header pair must be a name/value tuple");this.append(r[0],r[1])}}else for(let n of Object.keys(t)){let r=t[n];this.append(n,r)}}else throw new TypeError("Provided initializer must be an object")}get(t){t=`${t}`,Bt(t);let a=dt(this[w],t);return a===void 0?null:this[w][a].join(", ")}forEach(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:void 0,n=cr(this),r=0;for(;r<n.length;){var o=n[r];let u=o[0],s=o[1];t.call(a,s,u,this),n=cr(this),r++}}set(t,a){t=`${t}`,a=`${a}`,Bt(t),Xr(a);let n=dt(this[w],t);this[w][n!==void 0?n:t]=[a]}append(t,a){t=`${t}`,a=`${a}`,Bt(t),Xr(a);let n=dt(this[w],t);n!==void 0?this[w][n].push(a):this[w][t]=[a]}has(t){return t=`${t}`,Bt(t),dt(this[w],t)!==void 0}delete(t){t=`${t}`,Bt(t);let a=dt(this[w],t);a!==void 0&&delete this[w][a]}raw(){return this[w]}keys(){return ir(this,"key")}values(){return ir(this,"value")}[Symbol.iterator](){return ir(this,"key+value")}};ue.prototype.entries=ue.prototype[Symbol.iterator];Object.defineProperty(ue.prototype,Symbol.toStringTag,{value:"Headers",writable:!1,enumerable:!1,configurable:!0});Object.defineProperties(ue.prototype,{get:{enumerable:!0},forEach:{enumerable:!0},set:{enumerable:!0},append:{enumerable:!0},has:{enumerable:!0},delete:{enumerable:!0},keys:{enumerable:!0},values:{enumerable:!0},entries:{enumerable:!0}});function cr(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"key+value";return Object.keys(e[w]).sort().map(t==="key"?function(n){return n.toLowerCase()}:t==="value"?function(n){return e[w][n].join(", ")}:function(n){return[n.toLowerCase(),e[w][n].join(", ")]})}var yr=Symbol("internal");function ir(e,t){let a=Object.create(dr);return a[yr]={target:e,kind:t,index:0},a}var dr=Object.setPrototypeOf({next(){if(!this||Object.getPrototypeOf(this)!==dr)throw new TypeError("Value of `this` is not a HeadersIterator");var e=this[yr];let t=e.target,a=e.kind,n=e.index,r=cr(t,a),o=r.length;return n>=o?{value:void 0,done:!0}:(this[yr].index=n+1,{value:r[n],done:!1})}},Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));Object.defineProperty(dr,Symbol.toStringTag,{value:"HeadersIterator",writable:!1,enumerable:!1,configurable:!0});function os(e){let t=Object.assign({__proto__:null},e[w]),a=dt(e[w],"Host");return a!==void 0&&(t[a]=t[a][0]),t}function is(e){let t=new ue;for(let a of Object.keys(e))if(!un.test(a))if(Array.isArray(e[a]))for(let n of e[a])lr.test(n)||(t[w][a]===void 0?t[w][a]=[n]:t[w][a].push(n));else lr.test(e[a])||(t[w][a]=[e[a]]);return t}var ke=Symbol("Response internals"),ss=tn.STATUS_CODES,se=class e{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};L.call(this,t,a);let n=a.status||200,r=new ue(a.headers);if(t!=null&&!r.has("Content-Type")){let o=on(t);o&&r.append("Content-Type",o)}this[ke]={url:a.url,status:n,statusText:a.statusText||ss[n],headers:r,counter:a.counter}}get url(){return this[ke].url||""}get status(){return this[ke].status}get ok(){return this[ke].status>=200&&this[ke].status<300}get redirected(){return this[ke].counter>0}get statusText(){return this[ke].statusText}get headers(){return this[ke].headers}clone(){return new e(nn(this),{url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected})}};L.mixIn(se.prototype);Object.defineProperties(se.prototype,{url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}});Object.defineProperty(se.prototype,Symbol.toStringTag,{value:"Response",writable:!1,enumerable:!1,configurable:!0});var ve=Symbol("Request internals"),us=ya.URL||an.URL,ps=ya.parse,ls=ya.format;function sr(e){return/^[a-zA-Z][a-zA-Z\d+\-.]*:/.exec(e)&&(e=new us(e).toString()),ps(e)}var cs="destroy"in be.Readable.prototype;function ca(e){return typeof e=="object"&&typeof e[ve]=="object"}function ys(e){let t=e&&typeof e=="object"&&Object.getPrototypeOf(e);return!!(t&&t.constructor.name==="AbortSignal")}var ze=class e{constructor(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n;ca(t)?n=sr(t.url):(t&&t.href?n=sr(t.href):n=sr(`${t}`),t={});let r=a.method||t.method||"GET";if(r=r.toUpperCase(),(a.body!=null||ca(t)&&t.body!==null)&&(r==="GET"||r==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");let o=a.body!=null?a.body:ca(t)&&t.body!==null?nn(t):null;L.call(this,o,{timeout:a.timeout||t.timeout||0,size:a.size||t.size||0});let u=new ue(a.headers||t.headers||{});if(o!=null&&!u.has("Content-Type")){let i=on(o);i&&u.append("Content-Type",i)}let s=ca(t)?t.signal:null;if("signal"in a&&(s=a.signal),s!=null&&!ys(s))throw new TypeError("Expected signal to be an instanceof AbortSignal");this[ve]={method:r,redirect:a.redirect||t.redirect||"follow",headers:u,parsedURL:n,signal:s},this.follow=a.follow!==void 0?a.follow:t.follow!==void 0?t.follow:20,this.compress=a.compress!==void 0?a.compress:t.compress!==void 0?t.compress:!0,this.counter=a.counter||t.counter||0,this.agent=a.agent||t.agent}get method(){return this[ve].method}get url(){return ls(this[ve].parsedURL)}get headers(){return this[ve].headers}get redirect(){return this[ve].redirect}get signal(){return this[ve].signal}clone(){return new e(this)}};L.mixIn(ze.prototype);Object.defineProperty(ze.prototype,Symbol.toStringTag,{value:"Request",writable:!1,enumerable:!1,configurable:!0});Object.defineProperties(ze.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0}});function ds(e){let t=e[ve].parsedURL,a=new ue(e[ve].headers);if(a.has("Accept")||a.set("Accept","*/*"),!t.protocol||!t.hostname)throw new TypeError("Only absolute URLs are supported");if(!/^https?:$/.test(t.protocol))throw new TypeError("Only HTTP(S) protocols are supported");if(e.signal&&e.body instanceof be.Readable&&!cs)throw new Error("Cancellation of streamed requests with AbortSignal is not supported in node < 8");let n=null;if(e.body==null&&/^(POST|PUT)$/i.test(e.method)&&(n="0"),e.body!=null){let o=sn(e);typeof o=="number"&&(n=String(o))}n&&a.set("Content-Length",n),a.has("User-Agent")||a.set("User-Agent","node-fetch/1.0 (+https://github.com/bitinn/node-fetch)"),e.compress&&!a.has("Accept-Encoding")&&a.set("Accept-Encoding","gzip,deflate");let r=e.agent;return typeof r=="function"&&(r=r(t)),Object.assign({},t,{method:e.method,headers:os(a),agent:r})}function St(e){Error.call(this,e),this.type="aborted",this.message=e,Error.captureStackTrace(this,this.constructor)}St.prototype=Object.create(Error.prototype);St.prototype.constructor=St;St.prototype.name="AbortError";var qt=ya.URL||an.URL,en=be.PassThrough,Ss=function(t,a){let n=new qt(a).hostname,r=new qt(t).hostname;return n===r||n[n.length-r.length-1]==="."&&n.endsWith(r)},bs=function(t,a){let n=new qt(a).protocol,r=new qt(t).protocol;return n===r};function je(e,t){if(!je.Promise)throw new Error("native promise missing, set fetch.Promise to your favorite alternative");return L.Promise=je.Promise,new je.Promise(function(a,n){let r=new ze(e,t),o=ds(r),u=(o.protocol==="https:"?ts:tn).request,s=r.signal,i=null,p=function(){let g=new St("The user aborted a request.");n(g),r.body&&r.body instanceof be.Readable&&ur(r.body,g),!(!i||!i.body)&&i.body.emit("error",g)};if(s&&s.aborted){p();return}let c=function(){p(),P()},y=u(o),m;s&&s.addEventListener("abort",c);function P(){y.abort(),s&&s.removeEventListener("abort",c),clearTimeout(m)}r.timeout&&y.once("socket",function(l){m=setTimeout(function(){n(new k(`network timeout at: ${r.url}`,"request-timeout")),P()},r.timeout)}),y.on("error",function(l){n(new k(`request to ${r.url} failed, reason: ${l.message}`,"system",l)),i&&i.body&&ur(i.body,l),P()}),Is(y,function(l){s&&s.aborted||i&&i.body&&ur(i.body,l)}),parseInt(process.version.substring(1))<14&&y.on("socket",function(l){l.addListener("close",function(g){let I=l.listenerCount("data")>0;if(i&&I&&!g&&!(s&&s.aborted)){let M=new Error("Premature close");M.code="ERR_STREAM_PREMATURE_CLOSE",i.body.emit("error",M)}})}),y.on("response",function(l){clearTimeout(m);let g=is(l.headers);if(je.isRedirect(l.statusCode)){let b=g.get("Location"),f=null;try{f=b===null?null:new qt(b,r.url).toString()}catch{if(r.redirect!=="manual"){n(new k(`uri requested responds with an invalid redirect URL: ${b}`,"invalid-redirect")),P();return}}switch(r.redirect){case"error":n(new k(`uri requested responds with a redirect, redirect mode is set to error: ${r.url}`,"no-redirect")),P();return;case"manual":if(f!==null)try{g.set("Location",f)}catch(U){n(U)}break;case"follow":if(f===null)break;if(r.counter>=r.follow){n(new k(`maximum redirect reached at: ${r.url}`,"max-redirect")),P();return}let E={headers:new ue(r.headers),follow:r.follow,counter:r.counter+1,agent:r.agent,compress:r.compress,method:r.method,body:r.body,signal:r.signal,timeout:r.timeout,size:r.size};if(!Ss(r.url,f)||!bs(r.url,f))for(let U of["authorization","www-authenticate","cookie","cookie2"])E.headers.delete(U);if(l.statusCode!==303&&r.body&&sn(r)===null){n(new k("Cannot follow redirect with body being a readable stream","unsupported-redirect")),P();return}(l.statusCode===303||(l.statusCode===301||l.statusCode===302)&&r.method==="POST")&&(E.method="GET",E.body=void 0,E.headers.delete("content-length")),a(je(new ze(f,E))),P();return}}l.once("end",function(){s&&s.removeEventListener("abort",c)});let I=l.pipe(new en),M={url:r.url,status:l.statusCode,statusText:l.statusMessage,headers:g,size:r.size,timeout:r.timeout,counter:r.counter},A=g.get("Content-Encoding");if(!r.compress||r.method==="HEAD"||A===null||l.statusCode===204||l.statusCode===304){i=new se(I,M),a(i);return}let S={flush:Ye.Z_SYNC_FLUSH,finishFlush:Ye.Z_SYNC_FLUSH};if(A=="gzip"||A=="x-gzip"){I=I.pipe(Ye.createGunzip(S)),i=new se(I,M),a(i);return}if(A=="deflate"||A=="x-deflate"){let b=l.pipe(new en);b.once("data",function(f){(f[0]&15)===8?I=I.pipe(Ye.createInflate()):I=I.pipe(Ye.createInflateRaw()),i=new se(I,M),a(i)}),b.on("end",function(){i||(i=new se(I,M),a(i))});return}if(A=="br"&&typeof Ye.createBrotliDecompress=="function"){I=I.pipe(Ye.createBrotliDecompress()),i=new se(I,M),a(i);return}i=new se(I,M),a(i)}),ns(y,r)})}function Is(e,t){let a;e.on("socket",function(n){a=n}),e.on("response",function(n){let r=n.headers;r["transfer-encoding"]==="chunked"&&!r["content-length"]&&n.once("close",function(o){if(a&&a.listenerCount("data")>0&&!o){let s=new Error("Premature close");s.code="ERR_STREAM_PREMATURE_CLOSE",t(s)}})})}function ur(e,t){e.destroy?e.destroy(t):(e.emit("error",t),e.end())}je.isRedirect=function(e){return e===301||e===302||e===303||e===307||e===308};je.Promise=global.Promise;pn.exports=Ie=je;Object.defineProperty(Ie,"__esModule",{value:!0});Ie.default=Ie;Ie.Headers=ue;Ie.Request=ze;Ie.Response=se;Ie.FetchError=k;Ie.AbortError=St});var Ft=D((Je,cn)=>{var Vt=ln(),gs=Vt.default||Vt,da=function(e,t){return/^\/\//.test(e)&&(e="https:"+e),gs.call(this,e,t)};da.ponyfill=!0;cn.exports=Je=da;Je.fetch=da;Je.Headers=Vt.Headers;Je.Request=Vt.Request;Je.Response=Vt.Response;Je.default=da});var Sr=D(Sa=>{"use strict";Object.defineProperty(Sa,"__esModule",{value:!0});Sa.isJSON=void 0;function Ms(e){if(e){let t=Rs(e);if(!t)return!1;if(t.subtype==="json"||t.suffix==="json"||t.suffix&&/\bjson\b/i.test(t.suffix)||t.subtype&&/\bjson\b/i.test(t.subtype))return!0}return!1}Sa.isJSON=Ms;var ms=/^([A-Za-z0-9][A-Za-z0-9!#$&^_-]{0,126})\/([A-Za-z0-9][A-Za-z0-9!#$&^_.+-]{0,126});?$/;function Rs(e){let t=e.indexOf(";"),a=t!==-1?e.slice(0,t).trim():e.trim(),n=ms.exec(a.toLowerCase().toLowerCase());if(!n)return;let r=n[1],o=n[2],u,s=o.lastIndexOf("+");return s!==-1&&(u=o.substring(s+1),o=o.substring(0,s)),{type:r,subtype:o,suffix:u}}});var bn=D(ba=>{"use strict";Object.defineProperty(ba,"__esModule",{value:!0});ba.useFetch=void 0;var It=require("react"),As=Ot(),yn=_e(),dn=Ft(),fs=Sr(),Sn=Fe();async function Ps(e){if(!e.ok)throw new Error(e.statusText);let t=e.headers.get("content-type");return t&&(0,fs.isJSON)(t)?await e.json():await e.text()}function Es(e){return{data:e,hasMore:!1}}function Cs(e,t){let{parseResponse:a,mapResult:n,initialData:r,execute:o,keepPreviousData:u,onError:s,onData:i,onWillExecute:p,failureToastOptions:c,...y}=t||{},m={initialData:r,execute:o,keepPreviousData:u,onError:s,onData:i,onWillExecute:p,failureToastOptions:c},P=(0,yn.useLatest)(a||Ps),l=(0,yn.useLatest)(n||Es),g=(0,It.useRef)(),I=(0,It.useRef)(),M=typeof e=="function"?e({page:0}):void 0;(!g.current||typeof I.current>"u"||I.current!==M)&&(g.current=e),I.current=M;let A=(0,It.useRef)(),S=(0,It.useCallback)((E,U)=>async j=>{let de=await(0,dn.fetch)(E(j),{signal:A.current?.signal,...U}),H=await P.current(de);return l.current?.(H)},[P,l]),b=(0,It.useCallback)(async(E,U)=>{let j=await(0,dn.fetch)(E,{signal:A.current?.signal,...U}),de=await P.current(j);return l.current(de)?.data},[P,l]),f=(0,It.useMemo)(()=>I.current?S:b,[I,b,S]);return(0,As.useCachedPromise)(f,[g.current,y],{...m,internal_cacheKeySuffix:I.current+(0,Sn.hash)(l.current)+(0,Sn.hash)(P.current),abortable:A})}ba.useFetch=Cs});var Ia=D(pe=>{"use strict";var hs=pe&&pe.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(pe,"__esModule",{value:!0});pe.defaultParsing=pe.handleOutput=pe.getSpawnedResult=pe.getSpawnedPromise=void 0;var Ds=require("node:buffer"),Mn=hs(require("node:stream")),xs=require("node:util"),_s=require("signal-exit");function Us(e,{timeout:t}={}){let a=new Promise((s,i)=>{e.on("exit",(p,c)=>{s({exitCode:p,signal:c,timedOut:!1})}),e.on("error",p=>{i(p)}),e.stdin&&e.stdin.on("error",p=>{i(p)})});if(t===0||t===void 0)return a;let n,r=new Promise((s,i)=>{n=setTimeout(()=>{e.kill("SIGTERM"),i(Object.assign(new Error("Timed out"),{timedOut:!0,signal:"SIGTERM"}))},t)}),o=a.finally(()=>{clearTimeout(n)}),u=(0,_s.onExit)(()=>{e.kill()});return Promise.race([r,o]).finally(()=>u())}pe.getSpawnedPromise=Us;var br=class extends Error{constructor(){super("The output is too big"),this.name="MaxBufferError"}},vs=(0,xs.promisify)(Mn.default.pipeline);function Ts(e){let{encoding:t}=e,a=t==="buffer",n=new Mn.default.PassThrough({objectMode:!1});t&&t!=="buffer"&&n.setEncoding(t);let r=0,o=[];return n.on("data",u=>{o.push(u),r+=u.length}),n.getBufferedValue=()=>a?Buffer.concat(o,r):o.join(""),n.getBufferedLength=()=>r,n}async function In(e,t){let a=Ts(t);return await new Promise((n,r)=>{let o=u=>{u&&a.getBufferedLength()<=Ds.constants.MAX_LENGTH&&(u.bufferedData=a.getBufferedValue()),r(u)};(async()=>{try{await vs(e,a),n()}catch(u){o(u)}})(),a.on("data",()=>{a.getBufferedLength()>1e3*1e3*80&&o(new br)})}),a.getBufferedValue()}async function gn(e,t){e.destroy();try{return await t}catch(a){return a.bufferedData}}async function ws({stdout:e,stderr:t},{encoding:a},n){let r=In(e,{encoding:a}),o=In(t,{encoding:a});try{return await Promise.all([n,r,o])}catch(u){return Promise.all([{error:u,exitCode:null,signal:u.signal,timedOut:u.timedOut||!1},gn(e,r),gn(t,o)])}}pe.getSpawnedResult=ws;function Os(e){let t=typeof e=="string"?`
`:10,a=typeof e=="string"?"\r":13;return e[e.length-1]===t&&(e=e.slice(0,-1)),e[e.length-1]===a&&(e=e.slice(0,-1)),e}function Bs(e,t){return e.stripFinalNewline?Os(t):t}pe.handleOutput=Bs;var Ls=({timedOut:e,timeout:t,signal:a,exitCode:n})=>e?`timed out after ${t} milliseconds`:a!=null?`was killed with ${a}`:n!=null?`failed with exit code ${n}`:"failed",qs=({stdout:e,stderr:t,error:a,signal:n,exitCode:r,command:o,timedOut:u,options:s,parentError:i})=>{let c=`Command ${Ls({timedOut:u,timeout:s?.timeout,signal:n,exitCode:r})}: ${o}`,y=a?`${c}
${a.message}`:c,m=[y,t,e].filter(Boolean).join(`
`);return a?a.originalMessage=a.message:a=i,a.message=m,a.shortMessage=y,a.command=o,a.exitCode=r,a.signal=n,a.stdout=e,a.stderr=t,"bufferedData"in a&&delete a.bufferedData,a};function Ns({stdout:e,stderr:t,error:a,exitCode:n,signal:r,timedOut:o,command:u,options:s,parentError:i}){if(a||n!==0||r!==null)throw qs({error:a,exitCode:n,signal:r,stdout:e,stderr:t,command:u,timedOut:o,options:s,parentError:i});return e}pe.defaultParsing=Ns});var Rn=D(gt=>{"use strict";var Vs=gt&&gt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(gt,"__esModule",{value:!0});gt.useExec=void 0;var Fs=Vs(require("node:child_process")),mn=require("react"),ks=Ot(),js=_e(),kt=Ia(),zs=/ +/g;function Hs(e,t){if(t)return[e,...t];let a=[];for(let n of e.trim().split(zs)){let r=a[a.length-1];r&&r.endsWith("\\")?a[a.length-1]=`${r.slice(0,-1)} ${n}`:a.push(n)}return a}function Gs(e,t,a){let{parseOutput:n,input:r,onData:o,onWillExecute:u,initialData:s,execute:i,keepPreviousData:p,onError:c,failureToastOptions:y,...m}=Array.isArray(t)?a||{}:t||{},P={initialData:s,execute:i,keepPreviousData:p,onError:c,onData:o,onWillExecute:u,failureToastOptions:y},l=(0,mn.useRef)(),g=(0,js.useLatest)(n||kt.defaultParsing),I=(0,mn.useCallback)(async(M,A,S,b)=>{let[f,...E]=Hs(M,A),U=[f,...E].join(" "),j={stripFinalNewline:!0,...S,timeout:S?.timeout||1e4,signal:l.current?.signal,encoding:S?.encoding===null?"buffer":S?.encoding||"utf8",env:{PATH:"/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin",...process.env,...S?.env}},de=Fs.default.spawn(f,E,j),H=(0,kt.getSpawnedPromise)(de,j);b&&de.stdin.end(b);let[{error:B,exitCode:Se,signal:Me,timedOut:x},ee,Ut]=await(0,kt.getSpawnedResult)(de,j,H),er=(0,kt.handleOutput)(j,ee),Pi=(0,kt.handleOutput)(j,Ut);return g.current({stdout:er,stderr:Pi,error:B,exitCode:Se,signal:Me,timedOut:x,command:U,options:j,parentError:new Error})},[g]);return(0,ks.useCachedPromise)(I,[e,Array.isArray(t)?t:[],m,r],{...P,abortable:l})}gt.useExec=Gs});var En=D(Mt=>{"use strict";var Ma=Mt&&Mt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Mt,"__esModule",{value:!0});Mt.useStreamJSON=void 0;var $s=require("@raycast/api"),An=Ma(Ft()),Ht=require("node:fs"),Ir=require("node:fs/promises"),ga=require("node:path"),fn=require("node:stream/promises"),jt=require("react"),Qs=Ma(require("stream-chain")),Ws=require("stream-json"),Ks=Ma(require("stream-json/filters/Pick")),Ys=Ma(require("stream-json/streamers/StreamArray")),Pn=Sr(),Js=Ot(),Zs=Fe();async function zt(e,t,a){if(typeof e=="object"||e.startsWith("http://")||e.startsWith("https://"))return await Xs(e,t,a);if(e.startsWith("file://"))return await eu((0,ga.normalize)(decodeURIComponent(new URL(e).pathname)),t,a?.signal?a.signal:void 0);throw new Error("Only HTTP(S) or file URLs are supported")}async function Xs(e,t,a){let n=await(0,An.default)(e,a);if(!n.ok)throw new Error("Failed to fetch URL");if(!(0,Pn.isJSON)(n.headers.get("content-type")))throw new Error("URL does not return JSON");if(!n.body)throw new Error("Failed to retrieve expected JSON content: Response body is missing or inaccessible.");await(0,fn.pipeline)(n.body,(0,Ht.createWriteStream)(t),a?.signal?{signal:a.signal}:void 0)}async function eu(e,t,a){await(0,fn.pipeline)((0,Ht.createReadStream)(e),(0,Ht.createWriteStream)(t),a?{signal:a}:void 0)}async function tu(e,t,a,n,r){let o=(0,ga.join)(t,a);try{await(0,Ir.stat)(t)}catch{(0,Ht.mkdirSync)(t,{recursive:!0}),await zt(e,o,r);return}if(n){await zt(e,o,r);return}let u;try{u=await(0,Ir.stat)(o)}catch{await zt(e,o,r);return}if(typeof e=="object"||e.startsWith("http://")||e.startsWith("https://")){let s=await(0,An.default)(e,{...r,method:"HEAD"});if(!s.ok)throw new Error("Could not fetch URL");if(!(0,Pn.isJSON)(s.headers.get("content-type")))throw new Error("URL does not return JSON");let i=Date.parse(s.headers.get("last-modified")??"");if(u.size===0||Number.isNaN(i)||i>u.mtimeMs){await zt(e,o,r);return}}else if(e.startsWith("file://"))try{(await(0,Ir.stat)((0,ga.normalize)(decodeURIComponent(new URL(e).pathname)))).mtimeMs>u.mtimeMs&&await zt(e,o,r)}catch{throw new Error("Source file could not be read")}else throw new Error("Only HTTP(S) or file URLs are supported")}async function*au(e,t,a,n,r,o){let u=[],s=new Qs.default([(0,Ht.createReadStream)(e),n?Ks.default.withParser({filter:n}):(0,Ws.parser)(),new Ys.default,i=>o?.(i.value)??i.value]);a?.addEventListener("abort",()=>{s.destroy()});try{for await(let i of s){if(a?.aborted)return[];(!r||r(i))&&u.push(i),u.length>=t&&(yield u,u=[])}}catch(i){throw s.destroy(),i}return u.length>0&&(yield u),[]}function ru(e,t){let{initialData:a,execute:n,keepPreviousData:r,onError:o,onData:u,onWillExecute:s,failureToastOptions:i,dataPath:p,filter:c,transform:y,pageSize:m=20,...P}=t??{},l=(0,jt.useRef)(),g=(0,jt.useRef)(),I={initialData:a,execute:n,keepPreviousData:r,onError:o,onData:u,onWillExecute:s,failureToastOptions:i},M=(0,jt.useRef)(null),A=(0,jt.useRef)(null),S=(0,jt.useRef)(!1);return(0,Js.useCachedPromise)((b,f,E,U,j,de)=>async({page:H})=>{let B=(0,Zs.hash)(b)+".json",Se=$s.environment.supportPath;if(H===0){A.current?.abort(),A.current=new AbortController;let ee=(0,ga.join)(Se,B),Ut=!!(l.current&&l.current!==b&&g.current&&g.current===ee);l.current=b,g.current=ee,await tu(b,Se,B,Ut,{...E,signal:A.current?.signal}),M.current=au(ee,f,A.current?.signal,U,j,de)}if(!M.current)return{hasMore:S.current,data:[]};let{value:Me,done:x}=await M.current.next();return S.current=!x,{hasMore:S.current,data:Me??[]}},[e,m,P,p,c,y],I)}Mt.useStreamJSON=ru});var Mr=D(Ae=>{"use strict";var gr=Ae&&Ae.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Ae,"__esModule",{value:!0});Ae.baseExecuteSQL=Ae.isPermissionError=Ae.PermissionError=void 0;var nu=require("node:fs"),ma=require("node:fs/promises"),ou=gr(require("node:os")),Cn=gr(require("node:child_process")),hn=gr(require("node:path")),Ra=Ia(),iu=Fe(),fa=class extends Error{constructor(t){super(t),this.name="PermissionError"}};Ae.PermissionError=fa;function su(e){return e instanceof Error&&e.name==="PermissionError"}Ae.isPermissionError=su;async function uu(e,t,a){if(!(0,nu.existsSync)(e))throw new Error("The database does not exist");let n=a?.signal,r,o=Cn.default.spawn("sqlite3",["--json","--readonly",e,t],{signal:n}),u=(0,Ra.getSpawnedPromise)(o),[{error:s,exitCode:i,signal:p},c,y]=await(0,Ra.getSpawnedResult)(o,{encoding:"utf-8"},u);if(Aa(n),y.match("(5)")||y.match("(14)")){if(!r){let m=hn.default.join(ou.default.tmpdir(),"useSQL",(0,iu.hash)(e));await(0,ma.mkdir)(m,{recursive:!0}),Aa(n),r=hn.default.join(m,"db.db"),await(0,ma.copyFile)(e,r),await(0,ma.writeFile)(r+"-shm",""),await(0,ma.writeFile)(r+"-wal",""),Aa(n)}o=Cn.default.spawn("sqlite3",["--json","--readonly","--vfs","unix-none",r,t],{signal:n}),u=(0,Ra.getSpawnedPromise)(o),[{error:s,exitCode:i,signal:p},c,y]=await(0,Ra.getSpawnedResult)(o,{encoding:"utf-8"},u),Aa(n)}if(s||i!==0||p!==null)throw y.includes("authorization denied")?new fa("You do not have permission to access the database."):new Error(y||"Unknown error");return JSON.parse(c.trim()||"[]")}Ae.baseExecuteSQL=uu;function Aa(e){if(e?.aborted){let t=new Error("aborted");throw t.name="AbortError",t}}});var xn=D(mt=>{"use strict";var pu=mt&&mt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(mt,"__esModule",{value:!0});mt.useSQL=void 0;var fe=require("react/jsx-runtime"),G=require("@raycast/api"),lu=require("node:fs"),cu=pu(require("node:os")),Pa=require("react"),yu=lt(),du=_e(),Su=vt(),mr=Mr();function bu(e,t,a){let{permissionPriming:n,...r}=a||{},[o,u]=(0,Pa.useState)(),s=(0,du.useLatest)(a||{}),i=(0,Pa.useRef)(),p=(0,Pa.useCallback)(y=>{console.error(y);let m=y instanceof Error&&y.message.includes("authorization denied")?new mr.PermissionError("You do not have permission to access the database."):y;(0,mr.isPermissionError)(m)?u((0,fe.jsx)(Iu,{priming:s.current.permissionPriming})):s.current.onError?s.current.onError(m):G.environment.launchType!==G.LaunchType.Background&&(0,Su.showFailureToast)(m,{title:"Cannot query the data"})},[s]),c=(0,Pa.useMemo)(()=>{if(!(0,lu.existsSync)(e))throw new Error("The database does not exist");return async(y,m)=>{let P=i.current?.signal;return(0,mr.baseExecuteSQL)(y,m,{signal:P})}},[e]);return{...(0,yu.usePromise)(c,[e,t],{...r,onError:p}),permissionView:o}}mt.useSQL=bu;var Dn=parseInt(cu.default.release().split(".")[0])>=22,Rr=Dn?"Settings":"Preferences";function Iu(e){let t=Dn?{title:"Open System Settings -> Privacy",target:"x-apple.systempreferences:com.apple.preference.security?Privacy_AllFiles"}:{title:"Open System Preferences -> Security",target:"x-apple.systempreferences:com.apple.preference.security?Privacy_AllFiles"};return G.environment.commandMode==="menu-bar"?(0,fe.jsxs)(G.MenuBarExtra,{icon:G.Icon.Warning,title:G.environment.commandName,children:[(0,fe.jsx)(G.MenuBarExtra.Item,{title:"Raycast needs full disk access",tooltip:`You can revert this access in ${Rr} whenever you want`}),e.priming?(0,fe.jsx)(G.MenuBarExtra.Item,{title:e.priming,tooltip:`You can revert this access in ${Rr} whenever you want`}):null,(0,fe.jsx)(G.MenuBarExtra.Separator,{}),(0,fe.jsx)(G.MenuBarExtra.Item,{title:t.title,onAction:()=>(0,G.open)(t.target)})]}):(0,fe.jsx)(G.List,{children:(0,fe.jsx)(G.List.EmptyView,{icon:{source:{light:"https://raycast.com/uploads/extensions-utils-security-permissions-light.png",dark:"https://raycast.com/uploads/extensions-utils-security-permissions-dark.png"}},title:"Raycast needs full disk access.",description:`${e.priming?e.priming+`
`:""}You can revert this access in ${Rr} whenever you want.`,actions:(0,fe.jsx)(G.ActionPanel,{children:(0,fe.jsx)(G.Action.Open,{...t})})})})}});var Un=D(Rt=>{"use strict";Object.defineProperty(Rt,"__esModule",{value:!0});Rt.useForm=Rt.FormValidation=void 0;var we=require("react"),_n=_e(),fr;(function(e){e.Required="required"})(fr||(Rt.FormValidation=fr={}));function Ar(e,t){if(e){if(typeof e=="function")return e(t);if(e===fr.Required){let a=typeof t<"u"&&t!==null;if(a)switch(typeof t){case"string":a=t.length>0;break;case"object":Array.isArray(t)?a=t.length>0:t instanceof Date&&(a=t.getTime()>0);break;default:break}if(!a)return"The item is required"}}}function gu(e){let{onSubmit:t,validation:a,initialValues:n={}}=e,[r,o]=(0,we.useState)(n),[u,s]=(0,we.useState)({}),i=(0,we.useRef)({}),p=(0,_n.useLatest)(a||{}),c=(0,_n.useLatest)(t),y=(0,we.useCallback)(M=>{i.current[M]?.focus()},[i]),m=(0,we.useCallback)(async M=>{let A=!1;for(let[b,f]of Object.entries(p.current)){let E=Ar(f,M[b]);E&&(A||(A={},y(b)),A[b]=E)}if(A)return s(A),!1;let S=await c.current(M);return typeof S=="boolean"?S:!0},[p,c,y]),P=(0,we.useCallback)((M,A)=>{s(S=>({...S,[M]:A}))},[s]),l=(0,we.useCallback)(function(M,A){o(S=>({...S,[M]:typeof A=="function"?A(S[M]):A}))},[o]),g=(0,we.useMemo)(()=>new Proxy({},{get(M,A){let S=p.current[A],b=r[A];return{onChange(f){u[A]&&(Ar(S,f)||P(A,void 0)),l(A,f)},onBlur(f){let E=Ar(S,f.target.value);E&&P(A,E)},error:u[A],id:A,value:typeof b>"u"?null:b,ref:f=>{i.current[A]=f}}}}),[u,p,P,r,i,l]),I=(0,we.useCallback)(M=>{s({}),Object.entries(i.current).forEach(([A,S])=>{M?.[A]||S?.reset()}),M&&o(M)},[o,s,i]);return{handleSubmit:m,setValidationError:P,setValue:l,values:r,itemProps:g,focus:y,reset:I}}Rt.useForm=gu});var Tn=D(Ea=>{"use strict";Object.defineProperty(Ea,"__esModule",{value:!0});Ea.useAI=void 0;var vn=require("react"),Mu=require("@raycast/api"),mu=lt();function Ru(e,t={}){let{creativity:a,stream:n,model:r,...o}=t,[u,s]=(0,vn.useState)(""),i=(0,vn.useRef)(),{isLoading:p,error:c,revalidate:y}=(0,mu.usePromise)(async(m,P,l)=>{s("");let g=Mu.AI.ask(m,{creativity:P,model:r,signal:i.current?.signal});l===!1?s(await g):(g.on("data",I=>{s(M=>M+I)}),await g)},[e,a,n],{...o,abortable:i});return{isLoading:p,data:u,error:c,revalidate:y}}Ea.useAI=Ru});var Bn=D(Ca=>{"use strict";Object.defineProperty(Ca,"__esModule",{value:!0});Ca.useFrecencySorting=void 0;var Pr=require("react"),wn=_e(),Au=pa(),fu=10,On=1440*60*1e3,Pu=Math.log(2)/(fu*On),Eu={Default:100,Embed:0,Bookmark:140};function Cu(e){let t=Date.now(),a=e?e.lastVisited:0,n=e?e.frecency:0,r=(t-a)/On,o=Eu.Default*Math.exp(-Pu*r),u=n+o;return{lastVisited:t,frecency:u}}var hu=e=>{if(process.env.NODE_ENV!=="production"&&(typeof e!="object"||!e||!("id"in e)||typeof e.id!="string"))throw new Error("Specify a key function or make sure your items have an 'id' property");return e.id};function Du(e,t){let a=(0,wn.useLatest)(t?.key||hu),n=(0,wn.useLatest)(t?.sortUnvisited),[r,o]=(0,Au.useCachedState)(`raycast_frecency_${t?.namespace}`,{}),u=(0,Pr.useCallback)(async function(c){let y=a.current(c);o(m=>{let P=m[y],l=Cu(P);return{...m,[y]:l}})},[a,o]),s=(0,Pr.useCallback)(async function(c){let y=a.current(c);o(m=>{let P={...m};return delete P[y],P})},[a,o]);return{data:(0,Pr.useMemo)(()=>e?e.sort((p,c)=>{let y=r[a.current(p)],m=r[a.current(c)];return y&&!m?-1:!y&&m?1:y&&m?m.frecency-y.frecency:n.current?n.current(p,c):0}):[],[r,e,a,n]),visitItem:u,resetRanking:s}}Ca.useFrecencySorting=Du});var Nn=D(ha=>{"use strict";Object.defineProperty(ha,"__esModule",{value:!0});ha.useLocalStorage=void 0;var Er=require("@raycast/api"),Ln=vt(),qn=Fe(),xu=lt();function _u(e,t){let{data:a,isLoading:n,mutate:r}=(0,xu.usePromise)(async s=>{let i=await Er.LocalStorage.getItem(s);return typeof i<"u"?JSON.parse(i,qn.reviver):t},[e]);async function o(s){try{await r(Er.LocalStorage.setItem(e,JSON.stringify(s,qn.replacer)),{optimisticUpdate(i){return i}})}catch(i){await(0,Ln.showFailureToast)(i,{title:"Failed to set value in local storage"})}}async function u(){try{await r(Er.LocalStorage.removeItem(e),{optimisticUpdate(){}})}catch(s){await(0,Ln.showFailureToast)(s,{title:"Failed to remove value from local storage"})}}return{value:a,setValue:o,removeValue:u,isLoading:n}}ha.useLocalStorage=_u});var zn=D(At=>{"use strict";Object.defineProperty(At,"__esModule",{value:!0});At.slightlyLighterColor=At.slightlyDarkerColor=void 0;function Uu(e){let t=0,a=0,n=0;if(e.length===4)t=parseInt(`${e[1]}${e[1]}`,16),a=parseInt(`${e[2]}${e[2]}`,16),n=parseInt(`${e[3]}${e[3]}`,16);else if(e.length===7)t=parseInt(`${e[1]}${e[2]}`,16),a=parseInt(`${e[3]}${e[4]}`,16),n=parseInt(`${e[5]}${e[6]}`,16);else throw new Error(`Malformed hex color: ${e}`);return{r:t,g:a,b:n}}function vu({r:e,g:t,b:a}){let n=e.toString(16),r=t.toString(16),o=a.toString(16);return n.length===1&&(n=`0${n}`),r.length===1&&(r=`0${r}`),o.length===1&&(o=`0${o}`),`#${n}${r}${o}`}function Tu({r:e,g:t,b:a}){e/=255,t/=255,a/=255;let n=Math.min(e,t,a),r=Math.max(e,t,a),o=r-n,u=0,s=0,i=0;return o===0?u=0:r===e?u=(t-a)/o%6:r===t?u=(a-e)/o+2:u=(e-t)/o+4,u=Math.round(u*60),u<0&&(u+=360),i=(r+n)/2,s=o===0?0:o/(1-Math.abs(2*i-1)),s=+(s*100).toFixed(1),i=+(i*100).toFixed(1),{h:u,s,l:i}}function wu({h:e,s:t,l:a}){t/=100,a/=100;let n=(1-Math.abs(2*a-1))*t,r=n*(1-Math.abs(e/60%2-1)),o=a-n/2,u=0,s=0,i=0;return e>=0&&e<60?(u=n,s=r,i=0):e>=60&&e<120?(u=r,s=n,i=0):e>=120&&e<180?(u=0,s=n,i=r):e>=180&&e<240?(u=0,s=r,i=n):e>=240&&e<300?(u=r,s=0,i=n):e>=300&&e<360&&(u=n,s=0,i=r),u=Math.round((u+o)*255),s=Math.round((s+o)*255),i=Math.round((i+o)*255),{r:u,g:s,b:i}}function Vn(e){return Tu(Uu(e))}function Fn(e){return vu(wu(e))}function kn(e,t,a){return t<a?e<t?t:e>a?a:e:e<a?a:e>t?t:e}var jn=12;function Ou(e){let t=Vn(e);return Fn({h:t.h,s:t.s,l:kn(t.l-jn,0,100)})}At.slightlyDarkerColor=Ou;function Bu(e){let t=Vn(e);return Fn({h:t.h,s:t.s,l:kn(t.l+jn,0,100)})}At.slightlyLighterColor=Bu});var $n=D(Da=>{"use strict";Object.defineProperty(Da,"__esModule",{value:!0});Da.getAvatarIcon=void 0;var Hn=zn();function ft(e,t){let a=e.charCodeAt(t);if(Number.isNaN(a))return["",t];if(a<55296||a>57343)return[e.charAt(t),t];if(55296<=a&&a<=56319){if(e.length<=t+1)throw new Error("High surrogate without following low surrogate");let r=e.charCodeAt(t+1);if(56320>r||r>57343)throw new Error("High surrogate without following low surrogate");return[e.charAt(t)+e.charAt(t+1),t+1]}if(t===0)throw new Error("Low surrogate without preceding high surrogate");let n=e.charCodeAt(t-1);if(55296>n||n>56319)throw new Error("Low surrogate without preceding high surrogate");return[e.charAt(t+1),t+1]}var Gn=["#DC829A","#D64854","#D47600","#D36CDD","#52A9E4","#7871E8","#70920F","#43B93A","#EB6B3E","#26B795","#D85A9B","#A067DC","#BD9500","#5385D9"];function Lu(e,t){let a=e.trim().split(" "),n;if(a.length==1&&ft(a[0],0)[0])n=ft(a[0],0)[0];else if(a.length>1){let i=ft(a[0],0)[0]||"",p=ft(a[a.length-1],0)[0]??"";n=i+p}else n="";let r;if(t?.background)r=t?.background;else{let i=0,[p,c]=ft(n,0);for(;p;)i+=p.charCodeAt(0),[p,c]=ft(n,c+1);let y=i%Gn.length;r=Gn[y]}let u=50-0;return`data:image/svg+xml,${`<svg width="100px" height="100px">
  ${t?.gradient!==!1?`<defs>
      <linearGradient id="Gradient" x1="0.25" x2="0.75" y1="0" y2="1">
        <stop offset="0%" stop-color="${(0,Hn.slightlyLighterColor)(r)}"/>
        <stop offset="50%" stop-color="${r}"/>
        <stop offset="100%" stop-color="${(0,Hn.slightlyDarkerColor)(r)}"/>
      </linearGradient>
  </defs>`:""}
      <circle cx="50" cy="50" r="${u}" fill="${t?.gradient!==!1?"url(#Gradient)":r}" />
      ${n?`<text x="50" y="80" font-size="${u-1}" font-family="Inter, sans-serif" text-anchor="middle" fill="white">${n.toUpperCase()}</text>`:""}
    </svg>
  `.replaceAll(`
`,"")}`}Da.getAvatarIcon=Lu});var Wn=D(xa=>{"use strict";Object.defineProperty(xa,"__esModule",{value:!0});xa.getFavicon=void 0;var Qn=require("@raycast/api"),qu=require("url");function Nu(e,t){try{let n=(typeof e=="string"?new qu.URL(e):e).hostname;return{source:`https://www.google.com/s2/favicons?sz=${t?.size??64}&domain=${n}`,fallback:t?.fallback??Qn.Icon.Link,mask:t?.mask}}catch(a){return console.error(a),Qn.Icon.Link}}xa.getFavicon=Nu});var Jn=D(_a=>{"use strict";Object.defineProperty(_a,"__esModule",{value:!0});_a.getProgressIcon=void 0;var Kn=require("@raycast/api");function Yn(e,t,a,n){let r=(n-90)*Math.PI/180;return{x:e+a*Math.cos(r),y:t+a*Math.sin(r)}}function Vu(e,t,a,n,r){let o=Yn(e,t,a,r),u=Yn(e,t,a,n),s=r-n<=180?"0":"1";return["M",o.x,o.y,"A",a,a,0,s,0,u.x,u.y].join(" ")}function Fu(e,t=Kn.Color.Red,a){let n=a?.background||(Kn.environment.appearance==="light"?"black":"white"),r=a?.backgroundOpacity||.1,o=10,s=50-5-o/2;return`data:image/svg+xml,${`<svg width="100px" height="100px">
      <circle cx="50" cy="50" r="${s}" stroke-width="${o}" stroke="${e<1?n:t}" opacity="${e<1?r:"1"}" fill="none" />
      ${e>0&&e<1?`<path d="${Vu(50,50,s,0,e*360)}" stroke="${t}" stroke-width="${o}" fill="none" />`:""}
    </svg>
  `.replaceAll(`
`,"")}`}_a.getProgressIcon=Fu});var Zn=D(Oe=>{"use strict";var ku=Oe&&Oe.__createBinding||(Object.create?(function(e,t,a,n){n===void 0&&(n=a);var r=Object.getOwnPropertyDescriptor(t,a);(!r||("get"in r?!t.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,r)}):(function(e,t,a,n){n===void 0&&(n=a),e[n]=t[a]})),Cr=Oe&&Oe.__exportStar||function(e,t){for(var a in e)a!=="default"&&!Object.prototype.hasOwnProperty.call(t,a)&&ku(t,e,a)};Object.defineProperty(Oe,"__esModule",{value:!0});Cr($n(),Oe);Cr(Wn(),Oe);Cr(Jn(),Oe)});var Xn=D(z=>{"use strict";Object.defineProperty(z,"__esModule",{value:!0});z.zoomService=z.slackService=z.linearService=z.jiraService=z.googleService=z.githubService=z.asanaService=void 0;var $=require("@raycast/api"),Ze=hr(),Ua={asana:"1191201745684312",github:"7235fe8d42157f1f38c0",linear:"c8ff37b9225c3c9aefd7d66ea0e5b6f1",slack:"851756884692.5546927290212"},He=e=>`data:image/svg+xml,${e}`,Xe={asana:He('<svg xmlns="http://www.w3.org/2000/svg" width="251" height="232" fill="none"><path fill="#F06A6A" d="M179.383 54.373c0 30.017-24.337 54.374-54.354 54.374-30.035 0-54.373-24.338-54.373-54.374C70.656 24.338 94.993 0 125.029 0c30.017 0 54.354 24.338 54.354 54.373ZM54.393 122.33C24.376 122.33.02 146.668.02 176.685c0 30.017 24.337 54.373 54.373 54.373 30.035 0 54.373-24.338 54.373-54.373 0-30.017-24.338-54.355-54.373-54.355Zm141.253 0c-30.035 0-54.373 24.338-54.373 54.374 0 30.035 24.338 54.373 54.373 54.373 30.017 0 54.374-24.338 54.374-54.373 0-30.036-24.338-54.374-54.374-54.374Z"/></svg>'),github:{source:He('<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>'),tintColor:$.Color.PrimaryText},google:He('<svg xmlns="http://www.w3.org/2000/svg" style="display:block" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/><path fill="none" d="M0 0h48v48H0z"/></svg>'),jira:He('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="2361" height="2500" viewBox="2.59 0 214.091 224"><linearGradient id="a" x1="102.4" x2="56.15" y1="218.63" y2="172.39" gradientTransform="matrix(1 0 0 -1 0 264)" gradientUnits="userSpaceOnUse"><stop offset=".18" stop-color="#0052cc"/><stop offset="1" stop-color="#2684ff"/></linearGradient><linearGradient xlink:href="#a" id="b" x1="114.65" x2="160.81" y1="85.77" y2="131.92"/><path fill="#2684ff" d="M214.06 105.73 117.67 9.34 108.33 0 35.77 72.56 2.59 105.73a8.89 8.89 0 0 0 0 12.54l66.29 66.29L108.33 224l72.55-72.56 1.13-1.12 32.05-32a8.87 8.87 0 0 0 0-12.59zm-105.73 39.39L75.21 112l33.12-33.12L141.44 112z"/><path fill="url(#a)" d="M108.33 78.88a55.75 55.75 0 0 1-.24-78.61L35.62 72.71l39.44 39.44z"/><path fill="url(#b)" d="m141.53 111.91-33.2 33.21a55.77 55.77 0 0 1 0 78.86L181 151.35z"/></svg>'),linear:{source:{light:He('<svg xmlns="http://www.w3.org/2000/svg" fill="#222326" width="200" height="200" viewBox="0 0 100 100"><path d="M1.22541 61.5228c-.2225-.9485.90748-1.5459 1.59638-.857L39.3342 97.1782c.6889.6889.0915 1.8189-.857 1.5964C20.0515 94.4522 5.54779 79.9485 1.22541 61.5228ZM.00189135 46.8891c-.01764375.2833.08887215.5599.28957165.7606L52.3503 99.7085c.2007.2007.4773.3075.7606.2896 2.3692-.1476 4.6938-.46 6.9624-.9259.7645-.157 1.0301-1.0963.4782-1.6481L2.57595 39.4485c-.55186-.5519-1.49117-.2863-1.648174.4782-.465915 2.2686-.77832 4.5932-.92588465 6.9624ZM4.21093 29.7054c-.16649.3738-.08169.8106.20765 1.1l64.77602 64.776c.2894.2894.7262.3742 1.1.2077 1.7861-.7956 3.5171-1.6927 5.1855-2.684.5521-.328.6373-1.0867.1832-1.5407L8.43566 24.3367c-.45409-.4541-1.21271-.3689-1.54074.1832-.99132 1.6684-1.88843 3.3994-2.68399 5.1855ZM12.6587 18.074c-.3701-.3701-.393-.9637-.0443-1.3541C21.7795 6.45931 35.1114 0 49.9519 0 77.5927 0 100 22.4073 100 50.0481c0 14.8405-6.4593 28.1724-16.7199 37.3375-.3903.3487-.984.3258-1.3542-.0443L12.6587 18.074Z"/></svg>'),dark:He('<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="200" height="200" viewBox="0 0 100 100"><path d="M1.22541 61.5228c-.2225-.9485.90748-1.5459 1.59638-.857L39.3342 97.1782c.6889.6889.0915 1.8189-.857 1.5964C20.0515 94.4522 5.54779 79.9485 1.22541 61.5228ZM.00189135 46.8891c-.01764375.2833.08887215.5599.28957165.7606L52.3503 99.7085c.2007.2007.4773.3075.7606.2896 2.3692-.1476 4.6938-.46 6.9624-.9259.7645-.157 1.0301-1.0963.4782-1.6481L2.57595 39.4485c-.55186-.5519-1.49117-.2863-1.648174.4782-.465915 2.2686-.77832 4.5932-.92588465 6.9624ZM4.21093 29.7054c-.16649.3738-.08169.8106.20765 1.1l64.77602 64.776c.2894.2894.7262.3742 1.1.2077 1.7861-.7956 3.5171-1.6927 5.1855-2.684.5521-.328.6373-1.0867.1832-1.5407L8.43566 24.3367c-.45409-.4541-1.21271-.3689-1.54074.1832-.99132 1.6684-1.88843 3.3994-2.68399 5.1855ZM12.6587 18.074c-.3701-.3701-.393-.9637-.0443-1.3541C21.7795 6.45931 35.1114 0 49.9519 0 77.5927 0 100 22.4073 100 50.0481c0 14.8405-6.4593 28.1724-16.7199 37.3375-.3903.3487-.984.3258-1.3542-.0443L12.6587 18.074Z" /></svg>')}},slack:He('<svg xmlns="http://www.w3.org/2000/svg" viewBox="73 73 124 124"><style>.st0{fill:#e01e5a}.st1{fill:#36c5f0}.st2{fill:#2eb67d}.st3{fill:#ecb22e}</style><path d="M99.4 151.2c0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9h12.9v12.9zM105.9 151.2c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v32.3c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9v-32.3z" class="st0"/><path d="M118.8 99.4c-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v12.9h-12.9zM118.8 105.9c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H86.5c-7.1 0-12.9-5.8-12.9-12.9s5.8-12.9 12.9-12.9h32.3z" class="st1"/><path d="M170.6 118.8c0-7.1 5.8-12.9 12.9-12.9 7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9h-12.9v-12.9zM164.1 118.8c0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9V86.5c0-7.1 5.8-12.9 12.9-12.9 7.1 0 12.9 5.8 12.9 12.9v32.3z" class="st2"/><path d="M151.2 170.6c7.1 0 12.9 5.8 12.9 12.9 0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9v-12.9h12.9zM151.2 164.1c-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9h32.3c7.1 0 12.9 5.8 12.9 12.9 0 7.1-5.8 12.9-12.9 12.9h-32.3z" class="st3"/></svg>'),zoom:He('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 351.845 80"><path d="M73.786 78.835H10.88A10.842 10.842 0 0 1 .833 72.122a10.841 10.841 0 0 1 2.357-11.85L46.764 16.7h-31.23C6.954 16.699 0 9.744 0 1.165h58.014c4.414 0 8.357 2.634 10.046 6.712a10.843 10.843 0 0 1-2.356 11.85L22.13 63.302h36.122c8.58 0 15.534 6.955 15.534 15.534Zm278.059-48.544C351.845 13.588 338.256 0 321.553 0c-8.934 0-16.975 3.89-22.524 10.063C293.48 3.89 285.44 0 276.505 0c-16.703 0-30.291 13.588-30.291 30.291v48.544c8.579 0 15.534-6.955 15.534-15.534v-33.01c0-8.137 6.62-14.757 14.757-14.757s14.757 6.62 14.757 14.757v33.01c0 8.58 6.955 15.534 15.534 15.534V30.291c0-8.137 6.62-14.757 14.757-14.757s14.758 6.62 14.758 14.757v33.01c0 8.58 6.954 15.534 15.534 15.534V30.291ZM238.447 40c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.908-40 40-40 40 17.909 40 40Zm-15.534 0c0-13.512-10.954-24.466-24.466-24.466S173.98 26.488 173.98 40s10.953 24.466 24.466 24.466S222.913 53.512 222.913 40Zm-70.68 0c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.909-40 40-40 40 17.909 40 40Zm-15.534 0c0-13.512-10.954-24.466-24.466-24.466S87.767 26.488 87.767 40s10.954 24.466 24.466 24.466S136.699 53.512 136.699 40Z" style="fill:#0b5cff"/></svg>')},ju=e=>new Ze.OAuthService({client:new $.OAuth.PKCEClient({redirectMethod:$.OAuth.RedirectMethod.Web,providerName:"Asana",providerIcon:Xe.asana,providerId:"asana",description:"Connect your Asana account"}),clientId:e.clientId??Ua.asana,authorizeUrl:e.authorizeUrl??"https://asana.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://asana.oauth.raycast.com/token",refreshTokenUrl:e.refreshTokenUrl??"https://asana.oauth.raycast.com/refresh-token",scope:e.scope,personalAccessToken:e.personalAccessToken,onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});z.asanaService=ju;var zu=e=>new Ze.OAuthService({client:new $.OAuth.PKCEClient({redirectMethod:$.OAuth.RedirectMethod.Web,providerName:"GitHub",providerIcon:Xe.github,providerId:"github",description:"Connect your GitHub account"}),clientId:e.clientId??Ua.github,authorizeUrl:e.authorizeUrl??"https://github.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://github.oauth.raycast.com/token",refreshTokenUrl:e.refreshTokenUrl??"https://github.oauth.raycast.com/refresh-token",scope:e.scope,personalAccessToken:e.personalAccessToken,onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});z.githubService=zu;var Hu=e=>new Ze.OAuthService({client:new $.OAuth.PKCEClient({redirectMethod:$.OAuth.RedirectMethod.AppURI,providerName:"Google",providerIcon:Xe.google,providerId:"google",description:"Connect your Google account"}),clientId:e.clientId,authorizeUrl:e.authorizeUrl??"https://accounts.google.com/o/oauth2/v2/auth",tokenUrl:e.tokenUrl??"https://oauth2.googleapis.com/token",refreshTokenUrl:e.tokenUrl,scope:e.scope,personalAccessToken:e.personalAccessToken,bodyEncoding:e.bodyEncoding??"url-encoded",onAuthorize:e.onAuthorize,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});z.googleService=Hu;var Gu=e=>new Ze.OAuthService({client:new $.OAuth.PKCEClient({redirectMethod:$.OAuth.RedirectMethod.Web,providerName:"Jira",providerIcon:Xe.jira,providerId:"jira",description:"Connect your Jira account"}),clientId:e.clientId,authorizeUrl:e.authorizeUrl??"https://auth.atlassian.com/authorize",tokenUrl:e.tokenUrl??"https://auth.atlassian.com/oauth/token",refreshTokenUrl:e.refreshTokenUrl,scope:e.scope,personalAccessToken:e.personalAccessToken,onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});z.jiraService=Gu;var $u=e=>new Ze.OAuthService({client:new $.OAuth.PKCEClient({redirectMethod:$.OAuth.RedirectMethod.Web,providerName:"Linear",providerIcon:Xe.linear,providerId:"linear",description:"Connect your Linear account"}),clientId:e.clientId??Ua.linear,authorizeUrl:e.authorizeUrl??"https://linear.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://linear.oauth.raycast.com/token",refreshTokenUrl:e.refreshTokenUrl??"https://linear.oauth.raycast.com/refresh-token",scope:e.scope,extraParameters:{actor:"user"},onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});z.linearService=$u;var Qu=e=>new Ze.OAuthService({client:new $.OAuth.PKCEClient({redirectMethod:$.OAuth.RedirectMethod.Web,providerName:"Slack",providerIcon:Xe.slack,providerId:"slack",description:"Connect your Slack account"}),clientId:e.clientId??Ua.slack,authorizeUrl:e.authorizeUrl??"https://slack.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://slack.oauth.raycast.com/token",refreshTokenUrl:e.tokenUrl??"https://slack.oauth.raycast.com/refresh-token",scope:"",extraParameters:{user_scope:e.scope},personalAccessToken:e.personalAccessToken,bodyEncoding:e.tokenUrl?e.bodyEncoding??"url-encoded":"json",onAuthorize:e.onAuthorize,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser??(t=>({access_token:t.authed_user.access_token,scope:t.authed_user.scope}))});z.slackService=Qu;var Wu=e=>new Ze.OAuthService({client:new $.OAuth.PKCEClient({redirectMethod:$.OAuth.RedirectMethod.Web,providerName:"Zoom",providerIcon:Xe.zoom,providerId:"zoom",description:"Connect your Zoom account"}),clientId:e.clientId,authorizeUrl:e.authorizeUrl??"https://zoom.us/oauth/authorize",tokenUrl:e.tokenUrl??"https://zoom.us/oauth/token",refreshTokenUrl:e.refreshTokenUrl,scope:e.scope,personalAccessToken:e.personalAccessToken,bodyEncoding:e.bodyEncoding??"url-encoded",onAuthorize:e.onAuthorize,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});z.zoomService=Wu});var hr=D(Pt=>{"use strict";var Ku=Pt&&Pt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Pt,"__esModule",{value:!0});Pt.OAuthService=void 0;var eo=Ku(Ft()),et=Xn(),Pe=class{constructor(t){this.clientId=t.clientId,this.scope=Array.isArray(t.scope)?t.scope.join(" "):t.scope,this.personalAccessToken=t.personalAccessToken,this.bodyEncoding=t.bodyEncoding,this.client=t.client,this.extraParameters=t.extraParameters,this.authorizeUrl=t.authorizeUrl,this.tokenUrl=t.tokenUrl,this.refreshTokenUrl=t.refreshTokenUrl,this.onAuthorize=t.onAuthorize,this.tokenResponseParser=t.tokenResponseParser??(a=>a),this.tokenRefreshResponseParser=t.tokenRefreshResponseParser??(a=>a),this.authorize=this.authorize.bind(this)}async authorize(){let t=await this.client.getTokens();if(t?.accessToken){if(t.refreshToken&&t.isExpired()){let o=await this.refreshTokens({token:t.refreshToken});if(o)return await this.client.setTokens(o),o.access_token}return t.accessToken}let a=await this.client.authorizationRequest({endpoint:this.authorizeUrl,clientId:this.clientId,scope:this.scope,extraParameters:this.extraParameters}),{authorizationCode:n}=await this.client.authorize(a),r=await this.fetchTokens({authRequest:a,authorizationCode:n});return await this.client.setTokens(r),r.access_token}async fetchTokens({authRequest:t,authorizationCode:a}){let n;if(this.bodyEncoding==="url-encoded"){let u=new URLSearchParams;u.append("client_id",this.clientId),u.append("code",a),u.append("code_verifier",t.codeVerifier),u.append("grant_type","authorization_code"),u.append("redirect_uri",t.redirectURI),n={body:u}}else n={body:JSON.stringify({client_id:this.clientId,code:a,code_verifier:t.codeVerifier,grant_type:"authorization_code",redirect_uri:t.redirectURI}),headers:{"Content-Type":"application/json"}};let r=await(0,eo.default)(this.tokenUrl,{method:"POST",...n});if(!r.ok){let u=await r.text();throw console.error("fetch tokens error:",u),new Error(`Error while fetching tokens: ${r.status} (${r.statusText})
${u}`)}let o=this.tokenResponseParser(await r.json());return Array.isArray(o.scope)?{...o,scope:o.scope.join(" ")}:o}async refreshTokens({token:t}){let a;if(this.bodyEncoding==="url-encoded"){let r=new URLSearchParams;r.append("client_id",this.clientId),r.append("refresh_token",t),r.append("grant_type","refresh_token"),a={body:r}}else a={body:JSON.stringify({client_id:this.clientId,refresh_token:t,grant_type:"refresh_token"}),headers:{"Content-Type":"application/json"}};let n=await(0,eo.default)(this.refreshTokenUrl??this.tokenUrl,{method:"POST",...a});if(n.ok){let r=this.tokenRefreshResponseParser(await n.json());return r.refresh_token=r.refresh_token??t,r}else{let r=await n.text();console.error("refresh tokens error:",r),this.client.description=`${this.client.providerName} needs you to sign-in again. Press \u23CE or click the button below to continue.`,await this.client.removeTokens(),await this.authorize()}}};Pt.OAuthService=Pe;Pe.asana=et.asanaService;Pe.github=et.githubService;Pe.google=et.googleService;Pe.jira=et.jiraService;Pe.linear=et.linearService;Pe.slack=et.slackService;Pe.zoom=et.zoomService});var to=D(Et=>{"use strict";Object.defineProperty(Et,"__esModule",{value:!0});Et.getAccessToken=Et.withAccessToken=void 0;var Yu=require("react/jsx-runtime"),Ju=require("@raycast/api"),Ge=null,tt=null,Dr=null,xr=null,_r=null;function Zu(e){return Ju.environment.commandMode==="no-view"?t=>async n=>{if(!Ge){Ge=e.personalAccessToken??await e.authorize(),tt=e.personalAccessToken?"personal":"oauth";let r=(await e.client?.getTokens())?.idToken;e.onAuthorize&&await Promise.resolve(e.onAuthorize({token:Ge,type:tt,idToken:r}))}return t(n)}:t=>{let a=n=>{e.personalAccessToken?(Ge=e.personalAccessToken,tt="personal"):(Dr||(Dr=Ur(e.authorize())),Ge=Dr.read(),tt="oauth");let r;return e.client&&(xr||(xr=Ur(e.client.getTokens())),r=xr.read()?.idToken),!_r&&e.onAuthorize&&(_r=Ur(Promise.resolve(e.onAuthorize({token:Ge,type:tt,idToken:r})))),_r?.read(),(0,Yu.jsx)(t,{...n})};return a.displayName=`withAccessToken(${t.displayName||t.name})`,a}}Et.withAccessToken=Zu;function Xu(){if(!Ge||!tt)throw new Error("getAccessToken must be used when authenticated (eg. used inside `withAccessToken`)");return{token:Ge,type:tt}}Et.getAccessToken=Xu;function Ur(e){let t="pending",a,n=e.then(o=>{t="success",a=o},o=>{t="error",a=o});return{read:()=>{switch(t){case"pending":throw n;case"error":throw a;default:return a}}}}});var ro=D($e=>{"use strict";var ep=$e&&$e.__createBinding||(Object.create?(function(e,t,a,n){n===void 0&&(n=a);var r=Object.getOwnPropertyDescriptor(t,a);(!r||("get"in r?!t.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,r)}):(function(e,t,a,n){n===void 0&&(n=a),e[n]=t[a]})),ao=$e&&$e.__exportStar||function(e,t){for(var a in e)a!=="default"&&!Object.prototype.hasOwnProperty.call(t,a)&&ep(t,e,a)};Object.defineProperty($e,"__esModule",{value:!0});ao(hr(),$e);ao(to(),$e)});var uo=D(le=>{"use strict";var no=le&&le.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(le,"__esModule",{value:!0});le.createDeeplink=le.createExtensionDeeplink=le.createScriptCommandDeeplink=le.DeeplinkType=void 0;var Tr=require("@raycast/api"),tp=no(require("node:fs")),ap=no(require("node:path")),vr;(function(e){e.ScriptCommand="script-command",e.Extension="extension"})(vr||(le.DeeplinkType=vr={}));function oo(){return Tr.environment.raycastVersion.includes("alpha")?"raycastinternal://":"raycast://"}function rp(){let e=JSON.parse(tp.default.readFileSync(ap.default.join(Tr.environment.assetsPath,"..","package.json"),"utf8"));return e.owner||e.author}function io(e){let t=`${oo()}script-commands/${e.command}`;if(e.arguments){let a="";for(let n of e.arguments)a+="&arguments="+encodeURIComponent(n);t+="?"+a.substring(1)}return t}le.createScriptCommandDeeplink=io;function so(e){let t=rp(),a=Tr.environment.extensionName;"ownerOrAuthorName"in e&&"extensionName"in e&&(t=e.ownerOrAuthorName,a=e.extensionName);let n=`${oo()}extensions/${t}/${a}/${e.command}`,r="";return e.launchType&&(r+="&launchType="+encodeURIComponent(e.launchType)),e.arguments&&(r+="&arguments="+encodeURIComponent(JSON.stringify(e.arguments))),e.context&&(r+="&context="+encodeURIComponent(JSON.stringify(e.context))),e.fallbackText&&(r+="&fallbackText="+encodeURIComponent(e.fallbackText)),r&&(n+="?"+r.substring(1)),n}le.createExtensionDeeplink=so;function np(e){return e.type===vr.ScriptCommand?io(e):so(e)}le.createDeeplink=np});var po=D(va=>{"use strict";Object.defineProperty(va,"__esModule",{value:!0});va.executeSQL=void 0;var op=Mr();function ip(e,t){return(0,op.baseExecuteSQL)(e,t)}va.executeSQL=ip});var lo=D(Ct=>{"use strict";var sp=Ct&&Ct.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Ct,"__esModule",{value:!0});Ct.runAppleScript=void 0;var up=sp(require("node:child_process")),Gt=Ia();async function pp(e,t,a){let{humanReadableOutput:n,language:r,timeout:o,...u}=Array.isArray(t)?a||{}:t||{},s=n!==!1?[]:["-ss"];r==="JavaScript"&&s.push("-l","JavaScript"),Array.isArray(t)&&s.push("-",...t);let i=up.default.spawn("osascript",s,{...u,env:{PATH:"/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"}}),p=(0,Gt.getSpawnedPromise)(i,{timeout:o??1e4});i.stdin.end(e);let[{error:c,exitCode:y,signal:m,timedOut:P},l,g]=await(0,Gt.getSpawnedResult)(i,{encoding:"utf8"},p),I=(0,Gt.handleOutput)({stripFinalNewline:!0},l),M=(0,Gt.handleOutput)({stripFinalNewline:!0},g);return(0,Gt.defaultParsing)({stdout:I,stderr:M,error:c,exitCode:y,signal:m,timedOut:P,command:"osascript",options:a,parentError:new Error})}Ct.runAppleScript=pp});var co=D(wa=>{"use strict";Object.defineProperty(wa,"__esModule",{value:!0});wa.withCache=void 0;var lp=require("@raycast/api"),Ta=Fe();function cp(e,t){let a=new lp.Cache({namespace:(0,Ta.hash)(e)}),n=async(...r)=>{let o=(0,Ta.hash)(r||[])+t?.internal_cacheKeySuffix,u=a.get(o);if(u){let{data:i,timestamp:p}=JSON.parse(u,Ta.reviver);if(!(t?.maxAge&&Date.now()-p>t.maxAge)&&(!t?.validate||t.validate(i)))return i}let s=await e(...r);return a.set(o,JSON.stringify({data:s,timestamp:Date.now()},Ta.replacer)),s};return n.clearCache=()=>{a.clear()},n}wa.withCache=cp});var Be=D(v=>{"use strict";var yp=v&&v.__createBinding||(Object.create?(function(e,t,a,n){n===void 0&&(n=a);var r=Object.getOwnPropertyDescriptor(t,a);(!r||("get"in r?!t.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,r)}):(function(e,t,a,n){n===void 0&&(n=a),e[n]=t[a]})),q=v&&v.__exportStar||function(e,t){for(var a in e)a!=="default"&&!Object.prototype.hasOwnProperty.call(t,a)&&yp(t,e,a)};Object.defineProperty(v,"__esModule",{value:!0});q(lt(),v);q(pa(),v);q(Ot(),v);q(bn(),v);q(Rn(),v);q(En(),v);q(xn(),v);q(Un(),v);q(Tn(),v);q(Bn(),v);q(Nn(),v);q(Zn(),v);q(ro(),v);q(uo(),v);q(po(),v);q(lo(),v);q(vt(),v);q(co(),v)});var K={};ut(K,{default:()=>Eo.default});var Eo,Fa=tr(()=>{W(K,require("formdata-polyfill/esm.min.js"));Eo=O(require("formdata-polyfill/esm.min.js"))});var ae={};ut(ae,{default:()=>xo.default});var xo,Lr=tr(()=>{W(ae,require("fetch-blob/from.js"));xo=O(require("fetch-blob/from.js"))});var Uo={};ut(Uo,{toFormData:()=>wp});function Tp(e){let t=e.match(/\bfilename=("(.*?)"|([^()<>@,;:\\"/[\]?={}\s\t]+))($|;\s)/i);if(!t)return;let a=t[2]||t[3]||"",n=a.slice(a.lastIndexOf("\\")+1);return n=n.replace(/%22/g,'"'),n=n.replace(/&#(\d{4});/g,(r,o)=>String.fromCharCode(o)),n}async function wp(e,t){if(!/multipart/i.test(t))throw new TypeError("Failed to fetch");let a=t.match(/boundary=(?:"([^"]+)"|([^;]+))/i);if(!a)throw new TypeError("no or bad content-type header, no multipart boundary");let n=new qr(a[1]||a[2]),r,o,u,s,i,p,c=[],y=new K.FormData,m=M=>{u+=I.decode(M,{stream:!0})},P=M=>{c.push(M)},l=()=>{let M=new ae.File(c,p,{type:i});y.append(s,M)},g=()=>{y.append(s,u)},I=new TextDecoder("utf-8");I.decode(),n.onPartBegin=function(){n.onPartData=m,n.onPartEnd=g,r="",o="",u="",s="",i="",p=null,c.length=0},n.onHeaderField=function(M){r+=I.decode(M,{stream:!0})},n.onHeaderValue=function(M){o+=I.decode(M,{stream:!0})},n.onHeaderEnd=function(){if(o+=I.decode(),r=r.toLowerCase(),r==="content-disposition"){let M=o.match(/\bname=("([^"]*)"|([^()<>@,;:\\"/[\]?={}\s\t]+))/i);M&&(s=M[2]||M[3]||""),p=Tp(o),p&&(n.onPartData=P,n.onPartEnd=l)}else r==="content-type"&&(i=o);o="",r=""};for await(let M of e)n.write(M);return n.end(),y}var Ee,_,_o,Ke,ja,za,Dp,Kt,xp,_p,Up,vp,nt,qr,vo=tr(()=>{Lr();Fa();Ee=0,_={START_BOUNDARY:Ee++,HEADER_FIELD_START:Ee++,HEADER_FIELD:Ee++,HEADER_VALUE_START:Ee++,HEADER_VALUE:Ee++,HEADER_VALUE_ALMOST_DONE:Ee++,HEADERS_ALMOST_DONE:Ee++,PART_DATA_START:Ee++,PART_DATA:Ee++,END:Ee++},_o=1,Ke={PART_BOUNDARY:_o,LAST_BOUNDARY:_o*=2},ja=10,za=13,Dp=32,Kt=45,xp=58,_p=97,Up=122,vp=e=>e|32,nt=()=>{},qr=class{constructor(t){this.index=0,this.flags=0,this.onHeaderEnd=nt,this.onHeaderField=nt,this.onHeadersEnd=nt,this.onHeaderValue=nt,this.onPartBegin=nt,this.onPartData=nt,this.onPartEnd=nt,this.boundaryChars={},t=`\r
--`+t;let a=new Uint8Array(t.length);for(let n=0;n<t.length;n++)a[n]=t.charCodeAt(n),this.boundaryChars[a[n]]=!0;this.boundary=a,this.lookbehind=new Uint8Array(this.boundary.length+8),this.state=_.START_BOUNDARY}write(t){let a=0,n=t.length,r=this.index,{lookbehind:o,boundary:u,boundaryChars:s,index:i,state:p,flags:c}=this,y=this.boundary.length,m=y-1,P=t.length,l,g,I=b=>{this[b+"Mark"]=a},M=b=>{delete this[b+"Mark"]},A=(b,f,E,U)=>{(f===void 0||f!==E)&&this[b](U&&U.subarray(f,E))},S=(b,f)=>{let E=b+"Mark";E in this&&(f?(A(b,this[E],a,t),delete this[E]):(A(b,this[E],t.length,t),this[E]=0))};for(a=0;a<n;a++)switch(l=t[a],p){case _.START_BOUNDARY:if(i===u.length-2){if(l===Kt)c|=Ke.LAST_BOUNDARY;else if(l!==za)return;i++;break}else if(i-1===u.length-2){if(c&Ke.LAST_BOUNDARY&&l===Kt)p=_.END,c=0;else if(!(c&Ke.LAST_BOUNDARY)&&l===ja)i=0,A("onPartBegin"),p=_.HEADER_FIELD_START;else return;break}l!==u[i+2]&&(i=-2),l===u[i+2]&&i++;break;case _.HEADER_FIELD_START:p=_.HEADER_FIELD,I("onHeaderField"),i=0;case _.HEADER_FIELD:if(l===za){M("onHeaderField"),p=_.HEADERS_ALMOST_DONE;break}if(i++,l===Kt)break;if(l===xp){if(i===1)return;S("onHeaderField",!0),p=_.HEADER_VALUE_START;break}if(g=vp(l),g<_p||g>Up)return;break;case _.HEADER_VALUE_START:if(l===Dp)break;I("onHeaderValue"),p=_.HEADER_VALUE;case _.HEADER_VALUE:l===za&&(S("onHeaderValue",!0),A("onHeaderEnd"),p=_.HEADER_VALUE_ALMOST_DONE);break;case _.HEADER_VALUE_ALMOST_DONE:if(l!==ja)return;p=_.HEADER_FIELD_START;break;case _.HEADERS_ALMOST_DONE:if(l!==ja)return;A("onHeadersEnd"),p=_.PART_DATA_START;break;case _.PART_DATA_START:p=_.PART_DATA,I("onPartData");case _.PART_DATA:if(r=i,i===0){for(a+=m;a<P&&!(t[a]in s);)a+=y;a-=m,l=t[a]}if(i<u.length)u[i]===l?(i===0&&S("onPartData",!0),i++):i=0;else if(i===u.length)i++,l===za?c|=Ke.PART_BOUNDARY:l===Kt?c|=Ke.LAST_BOUNDARY:i=0;else if(i-1===u.length)if(c&Ke.PART_BOUNDARY){if(i=0,l===ja){c&=~Ke.PART_BOUNDARY,A("onPartEnd"),A("onPartBegin"),p=_.HEADER_FIELD_START;break}}else c&Ke.LAST_BOUNDARY&&l===Kt?(A("onPartEnd"),p=_.END,c=0):i=0;if(i>0)o[i-1]=l;else if(r>0){let b=new Uint8Array(o.buffer,o.byteOffset,o.byteLength);A("onPartData",0,r,b),r=0,I("onPartData"),a--}break;case _.END:break;default:throw new Error(`Unexpected state entered: ${p}`)}S("onHeaderField"),S("onHeaderValue"),S("onPartData"),this.index=i,this.state=p,this.flags=c}end(){if(this.state===_.HEADER_FIELD_START&&this.index===0||this.state===_.PART_DATA&&this.index===this.boundary.length)this.onPartEnd();else if(this.state!==_.END)throw new Error("MultipartParser.end(): stream ended unexpectedly")}}});var uc={};ut(uc,{IssueForm:()=>fi,default:()=>sc});module.exports=_i(uc);var C=require("@raycast/api"),st=O(Be()),Ai=require("react");var ti=require("@octokit/rest"),ai=require("@raycast/api"),ri=O(Be());var Oa=JSON;var yo=e=>e.toUpperCase(),So=e=>{let t={};return e.forEach((a,n)=>{t[n]=a}),t};var bo=(e,t,a)=>e.document?e:{document:e,variables:t,requestHeaders:a,signal:void 0},Io=(e,t,a)=>e.query?e:{query:e,variables:t,requestHeaders:a,signal:void 0},go=(e,t)=>e.documents?e:{documents:e,requestHeaders:t,signal:void 0};var Ba=require("graphql"),Mo=e=>{let t,a=e.definitions.filter(n=>n.kind==="OperationDefinition");return a.length===1&&(t=a[0]?.name?.value),t},at=e=>{if(typeof e=="string"){let a;try{let n=(0,Ba.parse)(e);a=Mo(n)}catch{}return{query:e,operationName:a}}let t=Mo(e);return{query:(0,Ba.print)(e),operationName:t}};var rt=class e extends Error{constructor(t,a){let n=`${e.extractMessage(t)}: ${JSON.stringify({response:t,request:a})}`;super(n),Object.setPrototypeOf(this,e.prototype),this.response=t,this.request=a,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,e)}static extractMessage(t){return t.errors?.[0]?.message??`GraphQL Error (Code: ${t.status})`}};var We=O(Ft(),1);var dp="connection_init",Sp="connection_ack",Ro="ping",Ao="pong",bp="subscribe",Ip="next",gp="error",fo="complete",Qe=class e{get type(){return this._type}get id(){return this._id}get payload(){return this._payload}constructor(t,a,n){this._type=t,this._payload=a,this._id=n}get text(){let t={type:this.type};return this.id!=null&&this.id!=null&&(t.id=this.id),this.payload!=null&&this.payload!=null&&(t.payload=this.payload),JSON.stringify(t)}static parse(t,a){let{type:n,payload:r,id:o}=JSON.parse(t);return new e(n,a(r),o)}},La=class{constructor(t,{onInit:a,onAcknowledged:n,onPing:r,onPong:o}){this.socketState={acknowledged:!1,lastRequestId:0,subscriptions:{}},this.socket=t,t.addEventListener("open",async u=>{this.socketState.acknowledged=!1,this.socketState.subscriptions={},t.send(mp(a?await a():null).text)}),t.addEventListener("close",u=>{this.socketState.acknowledged=!1,this.socketState.subscriptions={}}),t.addEventListener("error",u=>{console.error(u)}),t.addEventListener("message",u=>{try{let s=Mp(u.data);switch(s.type){case Sp:{this.socketState.acknowledged?console.warn("Duplicate CONNECTION_ACK message ignored"):(this.socketState.acknowledged=!0,n&&n(s.payload));return}case Ro:{r?r(s.payload).then(y=>t.send(mo(y).text)):t.send(mo(null).text);return}case Ao:{o&&o(s.payload);return}}if(!this.socketState.acknowledged||s.id===void 0||s.id===null||!this.socketState.subscriptions[s.id])return;let{query:i,variables:p,subscriber:c}=this.socketState.subscriptions[s.id];switch(s.type){case Ip:{!s.payload.errors&&s.payload.data&&c.next&&c.next(s.payload.data),s.payload.errors&&c.error&&c.error(new rt({...s.payload,status:200},{query:i,variables:p}));return}case gp:{c.error&&c.error(new rt({errors:s.payload,status:200},{query:i,variables:p}));return}case fo:{c.complete&&c.complete(),delete this.socketState.subscriptions[s.id];return}}}catch(s){console.error(s),t.close(1006)}t.close(4400,"Unknown graphql-ws message.")})}makeSubscribe(t,a,n,r){let o=(this.socketState.lastRequestId++).toString();return this.socketState.subscriptions[o]={query:t,variables:r,subscriber:n},this.socket.send(Ap(o,{query:t,operationName:a,variables:r}).text),()=>{this.socket.send(fp(o).text),delete this.socketState.subscriptions[o]}}rawRequest(t,a){return new Promise((n,r)=>{let o;this.rawSubscribe(t,{next:(u,s)=>o={data:u,extensions:s},error:r,complete:()=>n(o)},a)})}request(t,a){return new Promise((n,r)=>{let o;this.subscribe(t,{next:u=>o=u,error:r,complete:()=>n(o)},a)})}subscribe(t,a,n){let{query:r,operationName:o}=at(t);return this.makeSubscribe(r,o,a,n)}rawSubscribe(t,a,n){return this.makeSubscribe(t,void 0,a,n)}ping(t){this.socket.send(Rp(t).text)}close(){this.socket.close(1e3)}};La.PROTOCOL="graphql-transport-ws";function Mp(e,t=a=>a){return Qe.parse(e,t)}function mp(e){return new Qe(dp,e)}function Rp(e){return new Qe(Ro,e,void 0)}function mo(e){return new Qe(Ao,e,void 0)}function Ap(e,t){return new Qe(bp,t,e)}function fp(e){return new Qe(fo,void 0,e)}var ht=e=>{let t={};return e&&(typeof Headers<"u"&&e instanceof Headers||We&&We.Headers&&e instanceof We.Headers?t=So(e):Array.isArray(e)?e.forEach(([a,n])=>{a&&n!==void 0&&(t[a]=n)}):t=e),t},Po=e=>e.replace(/([\s,]|#[^\n\r]+)+/g," ").trim(),Pp=e=>{if(!Array.isArray(e.query)){let n=e,r=[`query=${encodeURIComponent(Po(n.query))}`];return e.variables&&r.push(`variables=${encodeURIComponent(n.jsonSerializer.stringify(n.variables))}`),n.operationName&&r.push(`operationName=${encodeURIComponent(n.operationName)}`),r.join("&")}if(typeof e.variables<"u"&&!Array.isArray(e.variables))throw new Error("Cannot create query with given variable type, array expected");let t=e,a=e.query.reduce((n,r,o)=>(n.push({query:Po(r),variables:t.variables?t.jsonSerializer.stringify(t.variables[o]):void 0}),n),[]);return`query=${encodeURIComponent(t.jsonSerializer.stringify(a))}`},Ep=e=>async t=>{let{url:a,query:n,variables:r,operationName:o,fetch:u,fetchOptions:s,middleware:i}=t,p={...t.headers},c="",y;e==="POST"?(y=Cp(n,r,o,s.jsonSerializer),typeof y=="string"&&(p["Content-Type"]="application/json")):c=Pp({query:n,variables:r,operationName:o,jsonSerializer:s.jsonSerializer??Oa});let m={method:e,headers:p,body:y,...s},P=a,l=m;if(i){let g=await Promise.resolve(i({...m,url:a,operationName:o,variables:r})),{url:I,...M}=g;P=I,l=M}return c&&(P=`${P}?${c}`),await u(P,l)},qa=class{constructor(t,a={}){this.url=t,this.requestConfig=a,this.rawRequest=async(...n)=>{let[r,o,u]=n,s=Io(r,o,u),{headers:i,fetch:p=We.default,method:c="POST",requestMiddleware:y,responseMiddleware:m,...P}=this.requestConfig,{url:l}=this;s.signal!==void 0&&(P.signal=s.signal);let{operationName:g}=at(s.query);return wr({url:l,query:s.query,variables:s.variables,headers:{...ht(Or(i)),...ht(s.requestHeaders)},operationName:g,fetch:p,method:c,fetchOptions:P,middleware:y}).then(I=>(m&&m(I),I)).catch(I=>{throw m&&m(I),I})}}async request(t,...a){let[n,r]=a,o=bo(t,n,r),{headers:u,fetch:s=We.default,method:i="POST",requestMiddleware:p,responseMiddleware:c,...y}=this.requestConfig,{url:m}=this;o.signal!==void 0&&(y.signal=o.signal);let{query:P,operationName:l}=at(o.document);return wr({url:m,query:P,variables:o.variables,headers:{...ht(Or(u)),...ht(o.requestHeaders)},operationName:l,fetch:s,method:i,fetchOptions:y,middleware:p}).then(g=>(c&&c(g),g.data)).catch(g=>{throw c&&c(g),g})}batchRequests(t,a){let n=go(t,a),{headers:r,...o}=this.requestConfig;n.signal!==void 0&&(o.signal=n.signal);let u=n.documents.map(({document:i})=>at(i).query),s=n.documents.map(({variables:i})=>i);return wr({url:this.url,query:u,variables:s,headers:{...ht(Or(r)),...ht(n.requestHeaders)},operationName:void 0,fetch:this.requestConfig.fetch??We.default,method:this.requestConfig.method||"POST",fetchOptions:o,middleware:this.requestConfig.requestMiddleware}).then(i=>(this.requestConfig.responseMiddleware&&this.requestConfig.responseMiddleware(i),i.data)).catch(i=>{throw this.requestConfig.responseMiddleware&&this.requestConfig.responseMiddleware(i),i})}setHeaders(t){return this.requestConfig.headers=t,this}setHeader(t,a){let{headers:n}=this.requestConfig;return n?n[t]=a:this.requestConfig.headers={[t]:a},this}setEndpoint(t){return this.url=t,this}},wr=async e=>{let{query:t,variables:a,fetchOptions:n}=e,r=Ep(yo(e.method??"post")),o=Array.isArray(e.query),u=await r(e),s=await hp(u,n.jsonSerializer??Oa),i=Array.isArray(s)?!s.some(({data:c})=>!c):!!s.data,p=Array.isArray(s)||!s.errors||Array.isArray(s.errors)&&!s.errors.length||n.errorPolicy==="all"||n.errorPolicy==="ignore";if(u.ok&&p&&i){let{errors:c,...y}=(Array.isArray(s),s),m=n.errorPolicy==="ignore"?y:s;return{...o?{data:m}:m,headers:u.headers,status:u.status}}else{let c=typeof s=="string"?{error:s}:s;throw new rt({...c,status:u.status,headers:u.headers},{query:t,variables:a})}};var Cp=(e,t,a,n)=>{let r=n??Oa;if(!Array.isArray(e))return r.stringify({query:e,variables:t,operationName:a});if(typeof t<"u"&&!Array.isArray(t))throw new Error("Cannot create request body with given variable type, array expected");let o=e.reduce((u,s,i)=>(u.push({query:s,variables:t?t[i]:void 0}),u),[]);return r.stringify(o)},hp=async(e,t)=>{let a;return e.headers.forEach((n,r)=>{r.toLowerCase()==="content-type"&&(a=n)}),a&&(a.toLowerCase().startsWith("application/json")||a.toLowerCase().startsWith("application/graphql+json")||a.toLowerCase().startsWith("application/graphql-response+json"))?t.parse(await e.text()):e.text()},Or=e=>typeof e=="function"?e():e;var $o=O(require("node:http"),1),Qo=O(require("node:https"),1),it=O(require("node:zlib"),1),oe=O(require("node:stream"),1),Zt=require("node:buffer");var $t={};ut($t,{default:()=>Na.default});W($t,require("data-uri-to-buffer"));var Na=O(require("data-uri-to-buffer"));var ce=O(require("node:stream"),1),qe=require("node:util"),re=require("node:buffer");var Qt={};ut(Qt,{default:()=>Va.default});W(Qt,require("fetch-blob"));var Va=O(require("fetch-blob"));Fa();var Le=class extends Error{constructor(t,a){super(t),Error.captureStackTrace(this,this.constructor),this.type=a}get name(){return this.constructor.name}get[Symbol.toStringTag](){return this.constructor.name}};var Y=class extends Le{constructor(t,a,n){super(t,a),n&&(this.code=this.errno=n.code,this.erroredSysCall=n.syscall)}};var ka=Symbol.toStringTag,Br=e=>typeof e=="object"&&typeof e.append=="function"&&typeof e.delete=="function"&&typeof e.get=="function"&&typeof e.getAll=="function"&&typeof e.has=="function"&&typeof e.set=="function"&&typeof e.sort=="function"&&e[ka]==="URLSearchParams",Wt=e=>e&&typeof e=="object"&&typeof e.arrayBuffer=="function"&&typeof e.type=="string"&&typeof e.stream=="function"&&typeof e.constructor=="function"&&/^(Blob|File)$/.test(e[ka]),Co=e=>typeof e=="object"&&(e[ka]==="AbortSignal"||e[ka]==="EventTarget"),ho=(e,t)=>{let a=new URL(t).hostname,n=new URL(e).hostname;return a===n||a.endsWith(`.${n}`)},Do=(e,t)=>{let a=new URL(t).protocol,n=new URL(e).protocol;return a===n};var Op=(0,qe.promisify)(ce.default.pipeline),J=Symbol("Body internals"),Ce=class{constructor(t,{size:a=0}={}){let n=null;t===null?t=null:Br(t)?t=re.Buffer.from(t.toString()):Wt(t)||re.Buffer.isBuffer(t)||(qe.types.isAnyArrayBuffer(t)?t=re.Buffer.from(t):ArrayBuffer.isView(t)?t=re.Buffer.from(t.buffer,t.byteOffset,t.byteLength):t instanceof ce.default||(t instanceof K.FormData?(t=(0,K.formDataToBlob)(t),n=t.type.split("=")[1]):t=re.Buffer.from(String(t))));let r=t;re.Buffer.isBuffer(t)?r=ce.default.Readable.from(t):Wt(t)&&(r=ce.default.Readable.from(t.stream())),this[J]={body:t,stream:r,boundary:n,disturbed:!1,error:null},this.size=a,t instanceof ce.default&&t.on("error",o=>{let u=o instanceof Le?o:new Y(`Invalid response body while trying to fetch ${this.url}: ${o.message}`,"system",o);this[J].error=u})}get body(){return this[J].stream}get bodyUsed(){return this[J].disturbed}async arrayBuffer(){let{buffer:t,byteOffset:a,byteLength:n}=await Nr(this);return t.slice(a,a+n)}async formData(){let t=this.headers.get("content-type");if(t.startsWith("application/x-www-form-urlencoded")){let n=new K.FormData,r=new URLSearchParams(await this.text());for(let[o,u]of r)n.append(o,u);return n}let{toFormData:a}=await Promise.resolve().then(()=>(vo(),Uo));return a(this.body,t)}async blob(){let t=this.headers&&this.headers.get("content-type")||this[J].body&&this[J].body.type||"",a=await this.arrayBuffer();return new Va.default([a],{type:t})}async json(){let t=await this.text();return JSON.parse(t)}async text(){let t=await Nr(this);return new TextDecoder().decode(t)}buffer(){return Nr(this)}};Ce.prototype.buffer=(0,qe.deprecate)(Ce.prototype.buffer,"Please use 'response.arrayBuffer()' instead of 'response.buffer()'","node-fetch#buffer");Object.defineProperties(Ce.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0},data:{get:(0,qe.deprecate)(()=>{},"data doesn't exist, use json(), text(), arrayBuffer(), or body instead","https://github.com/node-fetch/node-fetch/issues/1000 (response)")}});async function Nr(e){if(e[J].disturbed)throw new TypeError(`body used already for: ${e.url}`);if(e[J].disturbed=!0,e[J].error)throw e[J].error;let{body:t}=e;if(t===null)return re.Buffer.alloc(0);if(!(t instanceof ce.default))return re.Buffer.alloc(0);let a=[],n=0;try{for await(let r of t){if(e.size>0&&n+r.length>e.size){let o=new Y(`content size at ${e.url} over limit: ${e.size}`,"max-size");throw t.destroy(o),o}n+=r.length,a.push(r)}}catch(r){throw r instanceof Le?r:new Y(`Invalid response body while trying to fetch ${e.url}: ${r.message}`,"system",r)}if(t.readableEnded===!0||t._readableState.ended===!0)try{return a.every(r=>typeof r=="string")?re.Buffer.from(a.join("")):re.Buffer.concat(a,n)}catch(r){throw new Y(`Could not create Buffer from response body for ${e.url}: ${r.message}`,"system",r)}else throw new Y(`Premature close of server response while trying to fetch ${e.url}`)}var Dt=(e,t)=>{let a,n,{body:r}=e[J];if(e.bodyUsed)throw new Error("cannot clone body after it is used");return r instanceof ce.default&&typeof r.getBoundary!="function"&&(a=new ce.PassThrough({highWaterMark:t}),n=new ce.PassThrough({highWaterMark:t}),r.pipe(a),r.pipe(n),e[J].stream=a,r=n),r},Bp=(0,qe.deprecate)(e=>e.getBoundary(),"form-data doesn't follow the spec and requires special treatment. Use alternative package","https://github.com/node-fetch/node-fetch/issues/1167"),Ha=(e,t)=>e===null?null:typeof e=="string"?"text/plain;charset=UTF-8":Br(e)?"application/x-www-form-urlencoded;charset=UTF-8":Wt(e)?e.type||null:re.Buffer.isBuffer(e)||qe.types.isAnyArrayBuffer(e)||ArrayBuffer.isView(e)?null:e instanceof K.FormData?`multipart/form-data; boundary=${t[J].boundary}`:e&&typeof e.getBoundary=="function"?`multipart/form-data;boundary=${Bp(e)}`:e instanceof ce.default?null:"text/plain;charset=UTF-8",To=e=>{let{body:t}=e[J];return t===null?0:Wt(t)?t.size:re.Buffer.isBuffer(t)?t.length:t&&typeof t.getLengthSync=="function"&&t.hasKnownLength&&t.hasKnownLength()?t.getLengthSync():null},wo=async(e,{body:t})=>{t===null?e.end():await Op(t,e)};var Vr=require("node:util"),Yt=O(require("node:http"),1),Ga=typeof Yt.default.validateHeaderName=="function"?Yt.default.validateHeaderName:e=>{if(!/^[\^`\-\w!#$%&'*+.|~]+$/.test(e)){let t=new TypeError(`Header name must be a valid HTTP token [${e}]`);throw Object.defineProperty(t,"code",{value:"ERR_INVALID_HTTP_TOKEN"}),t}},Fr=typeof Yt.default.validateHeaderValue=="function"?Yt.default.validateHeaderValue:(e,t)=>{if(/[^\t\u0020-\u007E\u0080-\u00FF]/.test(t)){let a=new TypeError(`Invalid character in header content ["${e}"]`);throw Object.defineProperty(a,"code",{value:"ERR_INVALID_CHAR"}),a}},ne=class e extends URLSearchParams{constructor(t){let a=[];if(t instanceof e){let n=t.raw();for(let[r,o]of Object.entries(n))a.push(...o.map(u=>[r,u]))}else if(t!=null)if(typeof t=="object"&&!Vr.types.isBoxedPrimitive(t)){let n=t[Symbol.iterator];if(n==null)a.push(...Object.entries(t));else{if(typeof n!="function")throw new TypeError("Header pairs must be iterable");a=[...t].map(r=>{if(typeof r!="object"||Vr.types.isBoxedPrimitive(r))throw new TypeError("Each header pair must be an iterable object");return[...r]}).map(r=>{if(r.length!==2)throw new TypeError("Each header pair must be a name/value tuple");return[...r]})}}else throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");return a=a.length>0?a.map(([n,r])=>(Ga(n),Fr(n,String(r)),[String(n).toLowerCase(),String(r)])):void 0,super(a),new Proxy(this,{get(n,r,o){switch(r){case"append":case"set":return(u,s)=>(Ga(u),Fr(u,String(s)),URLSearchParams.prototype[r].call(n,String(u).toLowerCase(),String(s)));case"delete":case"has":case"getAll":return u=>(Ga(u),URLSearchParams.prototype[r].call(n,String(u).toLowerCase()));case"keys":return()=>(n.sort(),new Set(URLSearchParams.prototype.keys.call(n)).keys());default:return Reflect.get(n,r,o)}}})}get[Symbol.toStringTag](){return this.constructor.name}toString(){return Object.prototype.toString.call(this)}get(t){let a=this.getAll(t);if(a.length===0)return null;let n=a.join(", ");return/^content-encoding$/i.test(t)&&(n=n.toLowerCase()),n}forEach(t,a=void 0){for(let n of this.keys())Reflect.apply(t,a,[this.get(n),n,this])}*values(){for(let t of this.keys())yield this.get(t)}*entries(){for(let t of this.keys())yield[t,this.get(t)]}[Symbol.iterator](){return this.entries()}raw(){return[...this.keys()].reduce((t,a)=>(t[a]=this.getAll(a),t),{})}[Symbol.for("nodejs.util.inspect.custom")](){return[...this.keys()].reduce((t,a)=>{let n=this.getAll(a);return a==="host"?t[a]=n[0]:t[a]=n.length>1?n:n[0],t},{})}};Object.defineProperties(ne.prototype,["get","entries","forEach","values"].reduce((e,t)=>(e[t]={enumerable:!0},e),{}));function Oo(e=[]){return new ne(e.reduce((t,a,n,r)=>(n%2===0&&t.push(r.slice(n,n+2)),t),[]).filter(([t,a])=>{try{return Ga(t),Fr(t,String(a)),!0}catch{return!1}}))}var Lp=new Set([301,302,303,307,308]),$a=e=>Lp.has(e);var ge=Symbol("Response internals"),ye=class e extends Ce{constructor(t=null,a={}){super(t,a);let n=a.status!=null?a.status:200,r=new ne(a.headers);if(t!==null&&!r.has("Content-Type")){let o=Ha(t,this);o&&r.append("Content-Type",o)}this[ge]={type:"default",url:a.url,status:n,statusText:a.statusText||"",headers:r,counter:a.counter,highWaterMark:a.highWaterMark}}get type(){return this[ge].type}get url(){return this[ge].url||""}get status(){return this[ge].status}get ok(){return this[ge].status>=200&&this[ge].status<300}get redirected(){return this[ge].counter>0}get statusText(){return this[ge].statusText}get headers(){return this[ge].headers}get highWaterMark(){return this[ge].highWaterMark}clone(){return new e(Dt(this,this.highWaterMark),{type:this.type,url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected,size:this.size,highWaterMark:this.highWaterMark})}static redirect(t,a=302){if(!$a(a))throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');return new e(null,{headers:{location:new URL(t).toString()},status:a})}static error(){let t=new e(null,{status:0,statusText:""});return t[ge].type="error",t}static json(t=void 0,a={}){let n=JSON.stringify(t);if(n===void 0)throw new TypeError("data is not JSON serializable");let r=new ne(a&&a.headers);return r.has("content-type")||r.set("content-type","application/json"),new e(n,{...a,headers:r})}get[Symbol.toStringTag](){return"Response"}};Object.defineProperties(ye.prototype,{type:{enumerable:!0},url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}});var zo=require("node:url"),Ho=require("node:util");var Bo=e=>{if(e.search)return e.search;let t=e.href.length-1,a=e.hash||(e.href[t]==="#"?"#":"");return e.href[t-a.length]==="?"?"?":""};var qo=require("node:net");function Lo(e,t=!1){return e==null||(e=new URL(e),/^(about|blob|data):$/.test(e.protocol))?"no-referrer":(e.username="",e.password="",e.hash="",t&&(e.pathname="",e.search=""),e)}var No=new Set(["","no-referrer","no-referrer-when-downgrade","same-origin","origin","strict-origin","origin-when-cross-origin","strict-origin-when-cross-origin","unsafe-url"]),Vo="strict-origin-when-cross-origin";function Fo(e){if(!No.has(e))throw new TypeError(`Invalid referrerPolicy: ${e}`);return e}function qp(e){if(/^(http|ws)s:$/.test(e.protocol))return!0;let t=e.host.replace(/(^\[)|(]$)/g,""),a=(0,qo.isIP)(t);return a===4&&/^127\./.test(t)||a===6&&/^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(t)?!0:e.host==="localhost"||e.host.endsWith(".localhost")?!1:e.protocol==="file:"}function xt(e){return/^about:(blank|srcdoc)$/.test(e)||e.protocol==="data:"||/^(blob|filesystem):$/.test(e.protocol)?!0:qp(e)}function ko(e,{referrerURLCallback:t,referrerOriginCallback:a}={}){if(e.referrer==="no-referrer"||e.referrerPolicy==="")return null;let n=e.referrerPolicy;if(e.referrer==="about:client")return"no-referrer";let r=e.referrer,o=Lo(r),u=Lo(r,!0);o.toString().length>4096&&(o=u),t&&(o=t(o)),a&&(u=a(u));let s=new URL(e.url);switch(n){case"no-referrer":return"no-referrer";case"origin":return u;case"unsafe-url":return o;case"strict-origin":return xt(o)&&!xt(s)?"no-referrer":u.toString();case"strict-origin-when-cross-origin":return o.origin===s.origin?o:xt(o)&&!xt(s)?"no-referrer":u;case"same-origin":return o.origin===s.origin?o:"no-referrer";case"origin-when-cross-origin":return o.origin===s.origin?o:u;case"no-referrer-when-downgrade":return xt(o)&&!xt(s)?"no-referrer":o;default:throw new TypeError(`Invalid referrerPolicy: ${n}`)}}function jo(e){let t=(e.get("referrer-policy")||"").split(/[,\s]+/),a="";for(let n of t)n&&No.has(n)&&(a=n);return a}var N=Symbol("Request internals"),Jt=e=>typeof e=="object"&&typeof e[N]=="object",Np=(0,Ho.deprecate)(()=>{},".data is not a valid RequestInit property, use .body instead","https://github.com/node-fetch/node-fetch/issues/1000 (request)"),ot=class e extends Ce{constructor(t,a={}){let n;if(Jt(t)?n=new URL(t.url):(n=new URL(t),t={}),n.username!==""||n.password!=="")throw new TypeError(`${n} is an url with embedded credentials.`);let r=a.method||t.method||"GET";if(/^(delete|get|head|options|post|put)$/i.test(r)&&(r=r.toUpperCase()),!Jt(a)&&"data"in a&&Np(),(a.body!=null||Jt(t)&&t.body!==null)&&(r==="GET"||r==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");let o=a.body?a.body:Jt(t)&&t.body!==null?Dt(t):null;super(o,{size:a.size||t.size||0});let u=new ne(a.headers||t.headers||{});if(o!==null&&!u.has("Content-Type")){let p=Ha(o,this);p&&u.set("Content-Type",p)}let s=Jt(t)?t.signal:null;if("signal"in a&&(s=a.signal),s!=null&&!Co(s))throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");let i=a.referrer==null?t.referrer:a.referrer;if(i==="")i="no-referrer";else if(i){let p=new URL(i);i=/^about:(\/\/)?client$/.test(p)?"client":p}else i=void 0;this[N]={method:r,redirect:a.redirect||t.redirect||"follow",headers:u,parsedURL:n,signal:s,referrer:i},this.follow=a.follow===void 0?t.follow===void 0?20:t.follow:a.follow,this.compress=a.compress===void 0?t.compress===void 0?!0:t.compress:a.compress,this.counter=a.counter||t.counter||0,this.agent=a.agent||t.agent,this.highWaterMark=a.highWaterMark||t.highWaterMark||16384,this.insecureHTTPParser=a.insecureHTTPParser||t.insecureHTTPParser||!1,this.referrerPolicy=a.referrerPolicy||t.referrerPolicy||""}get method(){return this[N].method}get url(){return(0,zo.format)(this[N].parsedURL)}get headers(){return this[N].headers}get redirect(){return this[N].redirect}get signal(){return this[N].signal}get referrer(){if(this[N].referrer==="no-referrer")return"";if(this[N].referrer==="client")return"about:client";if(this[N].referrer)return this[N].referrer.toString()}get referrerPolicy(){return this[N].referrerPolicy}set referrerPolicy(t){this[N].referrerPolicy=Fo(t)}clone(){return new e(this)}get[Symbol.toStringTag](){return"Request"}};Object.defineProperties(ot.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0},referrer:{enumerable:!0},referrerPolicy:{enumerable:!0}});var Go=e=>{let{parsedURL:t}=e[N],a=new ne(e[N].headers);a.has("Accept")||a.set("Accept","*/*");let n=null;if(e.body===null&&/^(post|put)$/i.test(e.method)&&(n="0"),e.body!==null){let s=To(e);typeof s=="number"&&!Number.isNaN(s)&&(n=String(s))}n&&a.set("Content-Length",n),e.referrerPolicy===""&&(e.referrerPolicy=Vo),e.referrer&&e.referrer!=="no-referrer"?e[N].referrer=ko(e):e[N].referrer="no-referrer",e[N].referrer instanceof URL&&a.set("Referer",e.referrer),a.has("User-Agent")||a.set("User-Agent","node-fetch"),e.compress&&!a.has("Accept-Encoding")&&a.set("Accept-Encoding","gzip, deflate, br");let{agent:r}=e;typeof r=="function"&&(r=r(t));let o=Bo(t),u={path:t.pathname+o,method:e.method,headers:a[Symbol.for("nodejs.util.inspect.custom")](),insecureHTTPParser:e.insecureHTTPParser,agent:r};return{parsedURL:t,options:u}};var Qa=class extends Le{constructor(t,a="aborted"){super(t,a)}};Fa();Lr();var Vp=new Set(["data:","http:","https:"]);async function Wa(e,t){return new Promise((a,n)=>{let r=new ot(e,t),{parsedURL:o,options:u}=Go(r);if(!Vp.has(o.protocol))throw new TypeError(`node-fetch cannot load ${e}. URL scheme "${o.protocol.replace(/:$/,"")}" is not supported.`);if(o.protocol==="data:"){let l=(0,Na.default)(r.url),g=new ye(l,{headers:{"Content-Type":l.typeFull}});a(g);return}let s=(o.protocol==="https:"?Qo.default:$o.default).request,{signal:i}=r,p=null,c=()=>{let l=new Qa("The operation was aborted.");n(l),r.body&&r.body instanceof oe.default.Readable&&r.body.destroy(l),!(!p||!p.body)&&p.body.emit("error",l)};if(i&&i.aborted){c();return}let y=()=>{c(),P()},m=s(o.toString(),u);i&&i.addEventListener("abort",y);let P=()=>{m.abort(),i&&i.removeEventListener("abort",y)};m.on("error",l=>{n(new Y(`request to ${r.url} failed, reason: ${l.message}`,"system",l)),P()}),Fp(m,l=>{p&&p.body&&p.body.destroy(l)}),process.version<"v14"&&m.on("socket",l=>{let g;l.prependListener("end",()=>{g=l._eventsCount}),l.prependListener("close",I=>{if(p&&g<l._eventsCount&&!I){let M=new Error("Premature close");M.code="ERR_STREAM_PREMATURE_CLOSE",p.body.emit("error",M)}})}),m.on("response",l=>{m.setTimeout(0);let g=Oo(l.rawHeaders);if($a(l.statusCode)){let b=g.get("Location"),f=null;try{f=b===null?null:new URL(b,r.url)}catch{if(r.redirect!=="manual"){n(new Y(`uri requested responds with an invalid redirect URL: ${b}`,"invalid-redirect")),P();return}}switch(r.redirect){case"error":n(new Y(`uri requested responds with a redirect, redirect mode is set to error: ${r.url}`,"no-redirect")),P();return;case"manual":break;case"follow":{if(f===null)break;if(r.counter>=r.follow){n(new Y(`maximum redirect reached at: ${r.url}`,"max-redirect")),P();return}let E={headers:new ne(r.headers),follow:r.follow,counter:r.counter+1,agent:r.agent,compress:r.compress,method:r.method,body:Dt(r),signal:r.signal,size:r.size,referrer:r.referrer,referrerPolicy:r.referrerPolicy};if(!ho(r.url,f)||!Do(r.url,f))for(let j of["authorization","www-authenticate","cookie","cookie2"])E.headers.delete(j);if(l.statusCode!==303&&r.body&&t.body instanceof oe.default.Readable){n(new Y("Cannot follow redirect with body being a readable stream","unsupported-redirect")),P();return}(l.statusCode===303||(l.statusCode===301||l.statusCode===302)&&r.method==="POST")&&(E.method="GET",E.body=void 0,E.headers.delete("content-length"));let U=jo(g);U&&(E.referrerPolicy=U),a(Wa(new ot(f,E))),P();return}default:return n(new TypeError(`Redirect option '${r.redirect}' is not a valid value of RequestRedirect`))}}i&&l.once("end",()=>{i.removeEventListener("abort",y)});let I=(0,oe.pipeline)(l,new oe.PassThrough,b=>{b&&n(b)});process.version<"v12.10"&&l.on("aborted",y);let M={url:r.url,status:l.statusCode,statusText:l.statusMessage,headers:g,size:r.size,counter:r.counter,highWaterMark:r.highWaterMark},A=g.get("Content-Encoding");if(!r.compress||r.method==="HEAD"||A===null||l.statusCode===204||l.statusCode===304){p=new ye(I,M),a(p);return}let S={flush:it.default.Z_SYNC_FLUSH,finishFlush:it.default.Z_SYNC_FLUSH};if(A==="gzip"||A==="x-gzip"){I=(0,oe.pipeline)(I,it.default.createGunzip(S),b=>{b&&n(b)}),p=new ye(I,M),a(p);return}if(A==="deflate"||A==="x-deflate"){let b=(0,oe.pipeline)(l,new oe.PassThrough,f=>{f&&n(f)});b.once("data",f=>{(f[0]&15)===8?I=(0,oe.pipeline)(I,it.default.createInflate(),E=>{E&&n(E)}):I=(0,oe.pipeline)(I,it.default.createInflateRaw(),E=>{E&&n(E)}),p=new ye(I,M),a(p)}),b.once("end",()=>{p||(p=new ye(I,M),a(p))});return}if(A==="br"){I=(0,oe.pipeline)(I,it.default.createBrotliDecompress(),b=>{b&&n(b)}),p=new ye(I,M),a(p);return}p=new ye(I,M),a(p)}),wo(m,r).catch(n)})}function Fp(e,t){let a=Zt.Buffer.from(`0\r
\r
`),n=!1,r=!1,o;e.on("response",u=>{let{headers:s}=u;n=s["transfer-encoding"]==="chunked"&&!s["content-length"]}),e.on("socket",u=>{let s=()=>{if(n&&!r){let p=new Error("Premature close");p.code="ERR_STREAM_PREMATURE_CLOSE",t(p)}},i=p=>{r=Zt.Buffer.compare(p.slice(-5),a)===0,!r&&o&&(r=Zt.Buffer.compare(o.slice(-3),a.slice(0,3))===0&&Zt.Buffer.compare(p.slice(-2),a.slice(3))===0),o=p};u.prependListener("close",s),u.on("data",i),e.on("close",()=>{u.removeListener("close",s),u.removeListener("data",i)})})}var R=O(require("graphql-tag")),Xt=R.default`
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
`,kp=R.default`
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
  ${Xt}
`,he=R.default`
  fragment UserFields on User {
    id
    avatarUrl
    name
    login
    isViewer
  }
`,ea=R.default`
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
  ${he}
`,Ka=R.default`
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
  ${ea}
  ${Xt}
  ${he}
`,jp=R.default`
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
  ${ea}
  ${Xt}
  ${he}
`,Wo=R.default`
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
`,Ko=R.default`
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
`,Yo=R.default`
  fragment RepositoryMentionFields on Repository {
    nameWithOwner
    description
    isPrivate
    isArchived
    owner {
      avatarUrl(size: 64)
    }
  }
`,zp=R.default`
  fragment ProjectViewerFields on ProjectV2View {
    id
    name
    number
  }
`,Jo=R.default`
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
  ${ea}
  ${zp}
`,Zo=R.default`
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
  ${Xt}
  ${ea}
  ${he}
`,Hp=R.default`
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
  ${Xt}
  ${ea}
  ${he}
`,Gp=R.default`
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
`,Xo=R.default`
  fragment CommitFields on Commit {
    authoredDate
    oid
    message
  }
`,kr=R.default`
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
`,$p=R.default`
  fragment ReleaseFields on Release {
    id
    description
    name
    publishedAt
    createdAt
    tagName
    url
  }
`,Qp=R.default`
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
`,Wp=R.default`
  mutation createRef($input: CreateRefInput!) {
    createRef(input: $input) {
      clientMutationId
      ref {
        id
        name
      }
    }
  }
`,Kp=R.default`
  mutation deleteLinkedBranch($input: DeleteLinkedBranchInput!) {
    deleteLinkedBranch(input: $input) {
      clientMutationId
    }
  }
`,Yp=R.default`
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
  ${kp}
`,Jp=R.default`
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
`,Zp=R.default`
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
  ${he}
`,Xp=R.default`
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
`,el=R.default`
  query issueDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...IssueDetailFields
    }
  }
  ${jp}
`,tl=R.default`
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
  ${Ka}
`,al=R.default`
  query issueByNumber($owner: String!, $name: String!, $issueNumber: Int!) {
    repository(owner: $owner, name: $name) {
      issue(number: $issueNumber) {
        ...IssueFields
      }
    }
  }
  ${Ka}
`,rl=R.default`
  mutation closeIssue($nodeId: ID!, $stateReason: IssueClosedStateReason!) {
    closeIssue(input: { issueId: $nodeId, stateReason: $stateReason }) {
      issue {
        id
      }
    }
  }
`,nl=R.default`
  mutation reopenIssue($nodeId: ID!) {
    reopenIssue(input: { issueId: $nodeId }) {
      issue {
        id
      }
    }
  }
`,ol=R.default`
  mutation changeIssueAssignees($issueId: ID!, $assigneeIds: [ID!]) {
    updateIssue(input: { id: $issueId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,il=R.default`
  mutation changeIssueMilestone($issueId: ID!, $milestoneId: ID) {
    updateIssue(input: { id: $issueId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,sl=R.default`
  mutation addIssueToProject($issueId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $issueId }) {
      clientMutationId
    }
  }
`,ul=R.default`
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
  ${Ka}
`,pl=R.default`
  query searchIssueMentions($query: String!, $numberOfItems: Int!) {
    search(query: $query, type: ISSUE, first: $numberOfItems) {
      nodes {
        ... on Issue {
          ...IssueMentionFields
        }
      }
    }
  }
  ${Wo}
`,ll=R.default`
  query searchPullRequestMentions($query: String!, $numberOfItems: Int!) {
    search(query: $query, type: ISSUE, first: $numberOfItems) {
      nodes {
        ... on PullRequest {
          ...PullRequestMentionFields
        }
      }
    }
  }
  ${Ko}
`,cl=R.default`
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
  ${Wo}
  ${Ko}
`,yl=R.default`
  query searchRepositoryMentions($query: String!, $numberOfItems: Int!) {
    search(query: $query, type: REPOSITORY, first: $numberOfItems) {
      nodes {
        ... on Repository {
          ...RepositoryMentionFields
        }
      }
    }
  }
  ${Yo}
`,dl=R.default`
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
  ${Yo}
`,Sl=R.default`
  mutation changeProjectStatus($projectId: ID!, $closed: Boolean!) {
    updateProjectV2(input: { projectId: $projectId, closed: $closed }) {
      clientMutationId
    }
  }
`,bl=R.default`
  query projectDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...ProjectFields
    }
  }
  ${Jo}
`,Il=R.default`
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
  ${Zo}
`,gl=R.default`
  query pullRequestDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...PullRequestDetailsFields
    }
  }
  ${Hp}
`,Ml=R.default`
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
  ${he}
`,ml=R.default`
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
`,Rl=R.default`
  query pullRequestCommits($nodeId: ID!, $numberOfItems: Int!, $before: String) {
    node(id: $nodeId) {
      ...PullRequestCommitFields
    }
  }
  ${Gp}
`,Al=R.default`
  mutation closePullRequest($nodeId: ID!) {
    closePullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,fl=R.default`
  mutation reopenPullRequest($nodeId: ID!) {
    reopenPullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Pl=R.default`
  mutation markPullRequestReadyForReview($nodeId: ID!) {
    markPullRequestReadyForReview(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,El=R.default`
  mutation addPullRequestReview($nodeId: ID!, $event: PullRequestReviewEvent, $body: String) {
    addPullRequestReview(input: { pullRequestId: $nodeId, event: $event, body: $body }) {
      pullRequestReview {
        id
      }
    }
  }
`,Cl=R.default`
  mutation changePullRequestAssignees($pullRequestId: ID!, $assigneeIds: [ID!]) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,hl=R.default`
  mutation changePullRequestMilestone($pullRequestId: ID!, $milestoneId: ID) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,Dl=R.default`
  mutation addPullRequestToProject($pullRequestId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $pullRequestId }) {
      clientMutationId
    }
  }
`,xl=R.default`
  mutation requestReview($pullRequestId: ID!, $collaboratorId: ID!) {
    requestReviews(input: { pullRequestId: $pullRequestId, userIds: [$collaboratorId], union: true }) {
      clientMutationId
    }
  }
`,_l=R.default`
  mutation mergePullRequest($nodeId: ID!, $method: PullRequestMergeMethod!) {
    mergePullRequest(input: { pullRequestId: $nodeId, mergeMethod: $method }) {
      pullRequest {
        nodeId: id
      }
    }
  }
`,Ul=R.default`
  mutation addPullRequestToMergeQueue($nodeId: ID!) {
    enqueuePullRequest(input: { pullRequestId: $nodeId }) {
      __typename
    }
  }
`,vl=R.default`
  mutation removePullRequestFromMergeQueue($nodeId: ID!) {
    dequeuePullRequest(input: { id: $nodeId }) {
      __typename
    }
  }
`,Tl=R.default`
  mutation enablePullRequestAutoMerge($nodeId: ID!, $mergeMethod: PullRequestMergeMethod) {
    enablePullRequestAutoMerge(input: { pullRequestId: $nodeId, mergeMethod: $mergeMethod }) {
      pullRequest {
        id
      }
    }
  }
`,wl=R.default`
  mutation disablePullRequestAutoMerge($nodeId: ID!) {
    disablePullRequestAutoMerge(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,Ol=R.default`
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
`,Bl=R.default`
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
  ${Zo}
`,Ll=R.default`
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
  ${kr}
`,ql=R.default`
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
  ${kr}
`,Nl=R.default`
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
`,Vl=R.default`
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
`,Fl=R.default`
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
  ${Xo}
  ${he}
`,kl=R.default`
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
  ${Xo}
`,jl=R.default`
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
  ${Ka}
`,zl=R.default`
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
`,Hl=R.default`
  mutation addStar($repositoryId: ID!) {
    addStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,Gl=R.default`
  mutation removeStar($repositoryId: ID!) {
    removeStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,$l=R.default`
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
  ${kr}
`,Ql=R.default`
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
  ${he}
  ${Jo}
`,Wl=R.default`
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
  ${he}
`,Kl=R.default`
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
`,Yl=(e,t,a,n)=>e();function ei(e,t=Yl){return{createLinkedBranch(a,n,r){return t(o=>e.request({document:Qp,variables:a,requestHeaders:{...n,...o},signal:r}),"createLinkedBranch","mutation",a)},createRef(a,n,r){return t(o=>e.request({document:Wp,variables:a,requestHeaders:{...n,...o},signal:r}),"createRef","mutation",a)},deleteLinkedBranch(a,n,r){return t(o=>e.request({document:Kp,variables:a,requestHeaders:{...n,...o},signal:r}),"deleteLinkedBranch","mutation",a)},searchDiscussions(a,n,r){return t(o=>e.request({document:Yp,variables:a,requestHeaders:{...n,...o},signal:r}),"searchDiscussions","query",a)},getGitHubDiscussionNumber(a,n,r){return t(o=>e.request({document:Jp,variables:a,requestHeaders:{...n,...o},signal:r}),"getGitHubDiscussionNumber","query",a)},repositoryCollaboratorsForIssues(a,n,r){return t(o=>e.request({document:Zp,variables:a,requestHeaders:{...n,...o},signal:r}),"repositoryCollaboratorsForIssues","query",a)},repositoryProjectsForIssues(a,n,r){return t(o=>e.request({document:Xp,variables:a,requestHeaders:{...n,...o},signal:r}),"repositoryProjectsForIssues","query",a)},issueDetails(a,n,r){return t(o=>e.request({document:el,variables:a,requestHeaders:{...n,...o},signal:r}),"issueDetails","query",a)},searchIssues(a,n,r){return t(o=>e.request({document:tl,variables:a,requestHeaders:{...n,...o},signal:r}),"searchIssues","query",a)},issueByNumber(a,n,r){return t(o=>e.request({document:al,variables:a,requestHeaders:{...n,...o},signal:r}),"issueByNumber","query",a)},closeIssue(a,n,r){return t(o=>e.request({document:rl,variables:a,requestHeaders:{...n,...o},signal:r}),"closeIssue","mutation",a)},reopenIssue(a,n,r){return t(o=>e.request({document:nl,variables:a,requestHeaders:{...n,...o},signal:r}),"reopenIssue","mutation",a)},changeIssueAssignees(a,n,r){return t(o=>e.request({document:ol,variables:a,requestHeaders:{...n,...o},signal:r}),"changeIssueAssignees","mutation",a)},changeIssueMilestone(a,n,r){return t(o=>e.request({document:il,variables:a,requestHeaders:{...n,...o},signal:r}),"changeIssueMilestone","mutation",a)},addIssueToProject(a,n,r){return t(o=>e.request({document:sl,variables:a,requestHeaders:{...n,...o},signal:r}),"addIssueToProject","mutation",a)},createIssue(a,n,r){return t(o=>e.request({document:ul,variables:a,requestHeaders:{...n,...o},signal:r}),"createIssue","mutation",a)},searchIssueMentions(a,n,r){return t(o=>e.request({document:pl,variables:a,requestHeaders:{...n,...o},signal:r}),"searchIssueMentions","query",a)},searchPullRequestMentions(a,n,r){return t(o=>e.request({document:ll,variables:a,requestHeaders:{...n,...o},signal:r}),"searchPullRequestMentions","query",a)},issueOrPullRequestMention(a,n,r){return t(o=>e.request({document:cl,variables:a,requestHeaders:{...n,...o},signal:r}),"issueOrPullRequestMention","query",a)},searchRepositoryMentions(a,n,r){return t(o=>e.request({document:yl,variables:a,requestHeaders:{...n,...o},signal:r}),"searchRepositoryMentions","query",a)},viewerRepositoryMentions(a,n,r){return t(o=>e.request({document:dl,variables:a,requestHeaders:{...n,...o},signal:r}),"viewerRepositoryMentions","query",a)},changeProjectStatus(a,n,r){return t(o=>e.request({document:Sl,variables:a,requestHeaders:{...n,...o},signal:r}),"changeProjectStatus","mutation",a)},projectDetails(a,n,r){return t(o=>e.request({document:bl,variables:a,requestHeaders:{...n,...o},signal:r}),"projectDetails","query",a)},searchPullRequests(a,n,r){return t(o=>e.request({document:Il,variables:a,requestHeaders:{...n,...o},signal:r}),"searchPullRequests","query",a)},pullRequestDetails(a,n,r){return t(o=>e.request({document:gl,variables:a,requestHeaders:{...n,...o},signal:r}),"pullRequestDetails","query",a)},repositoryCollaboratorsForPullRequests(a,n,r){return t(o=>e.request({document:Ml,variables:a,requestHeaders:{...n,...o},signal:r}),"repositoryCollaboratorsForPullRequests","query",a)},repositoryProjectsForPullRequests(a,n,r){return t(o=>e.request({document:ml,variables:a,requestHeaders:{...n,...o},signal:r}),"repositoryProjectsForPullRequests","query",a)},pullRequestCommits(a,n,r){return t(o=>e.request({document:Rl,variables:a,requestHeaders:{...n,...o},signal:r}),"pullRequestCommits","query",a)},closePullRequest(a,n,r){return t(o=>e.request({document:Al,variables:a,requestHeaders:{...n,...o},signal:r}),"closePullRequest","mutation",a)},reopenPullRequest(a,n,r){return t(o=>e.request({document:fl,variables:a,requestHeaders:{...n,...o},signal:r}),"reopenPullRequest","mutation",a)},markPullRequestReadyForReview(a,n,r){return t(o=>e.request({document:Pl,variables:a,requestHeaders:{...n,...o},signal:r}),"markPullRequestReadyForReview","mutation",a)},addPullRequestReview(a,n,r){return t(o=>e.request({document:El,variables:a,requestHeaders:{...n,...o},signal:r}),"addPullRequestReview","mutation",a)},changePullRequestAssignees(a,n,r){return t(o=>e.request({document:Cl,variables:a,requestHeaders:{...n,...o},signal:r}),"changePullRequestAssignees","mutation",a)},changePullRequestMilestone(a,n,r){return t(o=>e.request({document:hl,variables:a,requestHeaders:{...n,...o},signal:r}),"changePullRequestMilestone","mutation",a)},addPullRequestToProject(a,n,r){return t(o=>e.request({document:Dl,variables:a,requestHeaders:{...n,...o},signal:r}),"addPullRequestToProject","mutation",a)},requestReview(a,n,r){return t(o=>e.request({document:xl,variables:a,requestHeaders:{...n,...o},signal:r}),"requestReview","mutation",a)},mergePullRequest(a,n,r){return t(o=>e.request({document:_l,variables:a,requestHeaders:{...n,...o},signal:r}),"mergePullRequest","mutation",a)},addPullRequestToMergeQueue(a,n,r){return t(o=>e.request({document:Ul,variables:a,requestHeaders:{...n,...o},signal:r}),"addPullRequestToMergeQueue","mutation",a)},removePullRequestFromMergeQueue(a,n,r){return t(o=>e.request({document:vl,variables:a,requestHeaders:{...n,...o},signal:r}),"removePullRequestFromMergeQueue","mutation",a)},enablePullRequestAutoMerge(a,n,r){return t(o=>e.request({document:Tl,variables:a,requestHeaders:{...n,...o},signal:r}),"enablePullRequestAutoMerge","mutation",a)},disablePullRequestAutoMerge(a,n,r){return t(o=>e.request({document:wl,variables:a,requestHeaders:{...n,...o},signal:r}),"disablePullRequestAutoMerge","mutation",a)},createPullRequest(a,n,r){return t(o=>e.request({document:Ol,variables:a,requestHeaders:{...n,...o},signal:r}),"createPullRequest","mutation",a)},initPullRequest(a,n,r){return t(o=>e.request({document:Bl,variables:a,requestHeaders:{...n,...o},signal:r}),"initPullRequest","mutation",a)},searchRepositories(a,n,r){return t(o=>e.request({document:Ll,variables:a,requestHeaders:{...n,...o},signal:r}),"searchRepositories","query",a)},myLatestRepositories(a,n,r){return t(o=>e.request({document:ql,variables:a,requestHeaders:{...n,...o},signal:r}),"myLatestRepositories","query",a)},milestonesForRepository(a,n,r){return t(o=>e.request({document:Nl,variables:a,requestHeaders:{...n,...o},signal:r}),"milestonesForRepository","query",a)},commentsForPullRequest(a,n,r){return t(o=>e.request({document:Vl,variables:a,requestHeaders:{...n,...o},signal:r}),"commentsForPullRequest","query",a)},dataForRepository(a,n,r){return t(o=>e.request({document:Fl,variables:a,requestHeaders:{...n,...o},signal:r}),"dataForRepository","query",a)},searchRepositoryBranches(a,n,r){return t(o=>e.request({document:kl,variables:a,requestHeaders:{...n,...o},signal:r}),"searchRepositoryBranches","query",a)},repositoryIssues(a,n,r){return t(o=>e.request({document:jl,variables:a,requestHeaders:{...n,...o},signal:r}),"repositoryIssues","query",a)},repositoryReleases(a,n,r){return t(o=>e.request({document:zl,variables:a,requestHeaders:{...n,...o},signal:r}),"repositoryReleases","query",a)},addStar(a,n,r){return t(o=>e.request({document:Hl,variables:a,requestHeaders:{...n,...o},signal:r}),"addStar","mutation",a)},removeStar(a,n,r){return t(o=>e.request({document:Gl,variables:a,requestHeaders:{...n,...o},signal:r}),"removeStar","mutation",a)},myStarredRepositories(a,n,r){return t(o=>e.request({document:$l,variables:a,requestHeaders:{...n,...o},signal:r}),"myStarredRepositories","query",a)},getViewer(a,n,r){return t(o=>e.request({document:Ql,variables:a,requestHeaders:{...n,...o},signal:r}),"getViewer","query",a)},getViewerStats(a,n,r){return t(o=>e.request({document:Wl,variables:a,requestHeaders:{...n,...o},signal:r}),"getViewerStats","query",a)},getViewerStatsDetails(a,n,r){return t(o=>e.request({document:Kl,variables:a,requestHeaders:{...n,...o},signal:r}),"getViewerStatsDetails","query",a)}}}var jr=null,zr=null,ni=null,Jl=(0,ai.getPreferenceValues)();function Zl({token:e,type:t}){let a=t==="personal"?`token ${e}`:`bearer ${e}`;ni=e,jr=ei(new qa("https://api.github.com/graphql",{headers:{authorization:a}})),zr=new ti.Octokit({auth:e,request:{fetch:Wa}})}var oi=ri.OAuthService.github({personalAccessToken:Jl.personalAccessToken,scope:"notifications repo project read:org read:user read:packages",onAuthorize:Zl});function ie(){if(!jr||!zr)throw new Error("GitHub clients not initialized");return{github:jr,octokit:zr,token:ni}}var V=require("@raycast/api"),di=O(Be()),Si=require("date-fns");var ii=require("@raycast/api"),Xl=require("lodash");var ta=require("@raycast/api");function De(e){return e?{icon:{source:e.avatarUrl??ta.Icon.Person,mask:ta.Image.Mask.Circle},text:(e.name?e.name:e.login)??"-"}:{icon:ta.Icon.Person,text:"Unknown"}}function Ya(e,t,{suffix:a="s",withNumber:n=!1}={}){let r=`${t}${e!==1?a:""}`;return n?`${e} ${r}`:r}var Ne=require("@raycast/api");function si(e){return e.stateReason==="NOT_PLANNED"?{icon:{source:"skip.svg",tintColor:Ne.Color.SecondaryText},text:"Closed as not planned",color:Ne.Color.Purple}:e.stateReason==="COMPLETED"?{icon:{source:"issue-closed.svg",tintColor:Ne.Color.Purple},text:"Closed as completed",color:Ne.Color.Purple}:e.closed?{icon:{source:"issue-closed.svg",tintColor:Ne.Color.Purple},text:"Closed",color:Ne.Color.Purple}:{icon:{source:"issue-open.svg",tintColor:Ne.Color.Green},text:"Open",color:Ne.Color.Green}}function ui(e){return De(e.author)}var pi=[{title:"Newest",value:"sort:created-desc"},{title:"Oldest",value:"sort:created-asc"},{title:"Most Commented",value:"sort:comments-desc"},{title:"Least Commented",value:"sort:comments-asc"},{title:"Recently Updated",value:"sort:updated-desc"},{title:"Least Recently Updated",value:"sort:updated-asc"},{title:"Best Match",value:"sort:relevance-desc"},{title:"\u{1F44D}",value:"sort:reactions-+1-desc"},{title:"\u{1F44E}",value:"sort:reactions--1-desc"},{title:"\u{1F604}",value:"sort:reactions-smile-desc"},{title:"\u{1F389}",value:"sort:reactions-tada-desc"},{title:"\u{1F641}",value:"sort:reactions-thinking_face-desc"},{title:"\u2764\uFE0F",value:"sort:reactions-heart-desc"},{title:"\u{1F680}",value:"sort:reactions-rocket-desc"},{title:"\u{1F440}",value:"sort:reactions-eyes-desc"}];var li=O(Be());function _t(){let{github:e}=ie(),{data:t}=(0,li.useCachedPromise)(async()=>(await e.getViewer()).viewer);return t}var d=require("@raycast/api"),Ja=O(Be()),Za=require("react");function Q(e){return e?.response?.errors?e.response.errors[0].message:e instanceof Error?e.message:String(e)}var Z=require("@raycast/api"),xe=require("react/jsx-runtime"),yi=({sortQuery:e,setSortQuery:t,data:a})=>t?(0,xe.jsxs)(Z.ActionPanel.Submenu,{title:"Sort by",icon:Z.Icon.ArrowUp,shortcut:Z.Keyboard.Shortcut.Common.Duplicate,children:[a.filter(({value:n})=>!n.startsWith("sort:reaction")).map(({title:n,value:r})=>(0,xe.jsx)(ci,{title:n,value:r,sortQuery:e??"",setSortQuery:t},r||"relevance")),a.some(({value:n})=>n.startsWith("sort:reaction"))&&(0,xe.jsx)(Z.ActionPanel.Section,{title:"Most Reactions",children:a.filter(({value:n})=>n.startsWith("sort:reaction")).map(({title:n,value:r})=>(0,xe.jsx)(ci,{title:n,value:r,sortQuery:e??"",setSortQuery:t},r))})]}):(0,xe.jsx)(xe.Fragment,{}),ci=({title:e,value:t,sortQuery:a,setSortQuery:n})=>(0,xe.jsx)(Z.Action,{title:e,icon:a===t?{source:Z.Icon.CheckCircle,tintColor:Z.Color.Green}:Z.Icon.Circle,onAction:()=>n(t)});var h=require("react/jsx-runtime");function Hr({issue:e,mutateList:t,mutateDetail:a,children:n,setSortQuery:r,sortQuery:o}){let{github:u}=ie(),s=_t();async function i(){t&&await t(),a&&await a()}async function p(){try{await(0,d.showToast)({style:d.Toast.Style.Animated,title:`Reopening issue #${e.number}`}),await u.reopenIssue({nodeId:e.id}),await i(),await(0,d.showToast)({style:d.Toast.Style.Success,title:`Issue #${e.number} is now open`})}catch(S){await(0,d.showToast)({style:d.Toast.Style.Failure,title:"Failed reopening issue",message:Q(S)})}}async function c(){try{await(0,d.showToast)({style:d.Toast.Style.Animated,title:`Closing issue #${e.number} as completed`}),await u.closeIssue({nodeId:e.id,stateReason:"COMPLETED"}),await i(),await(0,d.showToast)({style:d.Toast.Style.Success,title:`Issue #${e.number} closed as completed`})}catch(S){await(0,d.showToast)({style:d.Toast.Style.Failure,title:"Failed closing issue as completed",message:Q(S)})}}async function y(){try{await(0,d.showToast)({style:d.Toast.Style.Animated,title:`Closing issue #${e.number} as not planned`}),await u.closeIssue({nodeId:e.id,stateReason:"NOT_PLANNED"}),await i(),await(0,d.showToast)({style:d.Toast.Style.Success,title:`Issue #${e.number} closed as not planned`})}catch(S){await(0,d.showToast)({style:d.Toast.Style.Failure,title:"Failed closing issue as not planned",message:Q(S)})}}async function m(S){try{await(0,d.showToast)({style:d.Toast.Style.Animated,title:"Assigning to me"});let b=e.assignees.nodes?.filter(f=>!!f).map(f=>f?.id)??[];await u.changeIssueAssignees({issueId:e.id,assigneeIds:[...b,S]}),await i(),await(0,d.showToast)({style:d.Toast.Style.Success,title:"Assigned to me"})}catch(b){await(0,d.showToast)({style:d.Toast.Style.Failure,title:"Failed assigning to me",message:Q(b)})}}async function P(S){try{await(0,d.showToast)({style:d.Toast.Style.Animated,title:"Un-assigning from me"});let b=e.assignees.nodes?.filter(f=>!!f).map(f=>f?.id)??[];await u.changeIssueAssignees({issueId:e.id,assigneeIds:b?.filter(f=>f!==S)}),await i(),await(0,d.showToast)({style:d.Toast.Style.Success,title:"Un-assigned from me"})}catch(b){await(0,d.showToast)({style:d.Toast.Style.Failure,title:"Failed un-assigning from me",message:Q(b)})}}async function l(){try{await(0,d.showToast)({style:d.Toast.Style.Animated,title:`Creating branch for issue #${e.number}`});let S=e.repository.defaultBranchRef?.target?.oid;if(!S)throw new Error("Repository default branch commit SHA is unavailable");let f=(await u.createLinkedBranch({input:{issueId:e.id,oid:S}})).createLinkedBranch?.linkedBranch?.ref?.name;await i(),f&&await(0,d.showToast)({style:d.Toast.Style.Success,title:`${f} is created`,primaryAction:{title:"Copy Branch Name",shortcut:d.Keyboard.Shortcut.Common.Copy,onAction:()=>d.Clipboard.copy(f)}})}catch(S){await(0,d.showToast)({style:d.Toast.Style.Failure,title:"Failed creating a branch",message:Q(S)})}}async function g(S,b){if(await(0,d.confirmAlert)({icon:d.Icon.Trash,title:"Delete the branch",message:`${b} will be deleted. Are you sure you want to proceed with the action?`,primaryAction:{title:"Confirm",style:d.Alert.ActionStyle.Destructive}}))try{await(0,d.showToast)({style:d.Toast.Style.Animated,title:"Deleting a branch"}),await u.deleteLinkedBranch({input:{linkedBranchId:S}}),await i(),await(0,d.showToast)({style:d.Toast.Style.Success,title:"Deleted the branch"})}catch(f){await(0,d.showToast)({style:d.Toast.Style.Failure,title:"Failed deleting the branch",message:Q(f)})}}let I=De(s),M=e.assignees.nodes?.some(S=>S?.isViewer),A=e.linkedBranches?.nodes?.length?e.linkedBranches.nodes[0]:null;return(0,h.jsxs)(d.ActionPanel,{title:`#${e.number} in ${e.repository.nameWithOwner}`,children:[n,(0,h.jsx)(d.Action.OpenInBrowser,{url:e.url}),(0,h.jsxs)(d.ActionPanel.Section,{children:[s?(0,h.jsx)(d.Action,{title:M?"Unassign from Me":"Assign to Me",icon:I.icon,shortcut:{macOS:{modifiers:["cmd","shift"],key:"i"},Windows:{modifiers:["ctrl","shift"],key:"i"}},onAction:()=>M?P(s.id):m(s.id)}):null,(0,h.jsx)(ec,{issue:e,mutate:i}),(0,h.jsx)(tc,{issue:e,mutate:i}),A?null:(0,h.jsx)(d.Action,{title:"Create Issue Branch",icon:{source:"branch.svg",tintColor:d.Color.PrimaryText},shortcut:{macOS:{modifiers:["cmd","shift"],key:"b"},Windows:{modifiers:["ctrl","shift"],key:"b"}},onAction:()=>l()}),(0,h.jsx)(ac,{issue:e,mutate:i})]}),(0,h.jsx)(d.ActionPanel.Section,{children:e.closed?(0,h.jsx)(d.Action,{title:"Reopen Issue",icon:{source:"issue-reopened.svg",tintColor:d.Color.Green},onAction:p}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(d.Action,{title:"Close Issue as Completed",style:d.Action.Style.Destructive,icon:{source:"issue-closed.svg",tintColor:d.Color.Red},onAction:c}),(0,h.jsx)(d.Action,{title:"Close Issue as Not Planned",style:d.Action.Style.Destructive,icon:{source:"skip.svg",tintColor:d.Color.Red},onAction:y}),A?(0,h.jsx)(d.Action,{title:"Delete Issue Branch",style:d.Action.Style.Destructive,icon:{source:"branch.svg",tintColor:d.Color.Red},onAction:()=>g(A?.id||"",A.ref?.name??"")}):null]})}),(0,h.jsxs)(d.ActionPanel.Section,{children:[(0,h.jsx)(d.Action.CopyToClipboard,{content:e.number,title:"Copy Issue Number",shortcut:{macOS:{modifiers:["cmd","shift"],key:"."},Windows:{modifiers:["ctrl","shift"],key:"."}}}),(0,h.jsx)(d.Action.CopyToClipboard,{content:e.url,title:"Copy Issue URL",shortcut:{macOS:{modifiers:["cmd","shift"],key:","},Windows:{modifiers:["ctrl","shift"],key:","}}}),(0,h.jsx)(d.Action.CopyToClipboard,{content:e.title,title:"Copy Issue Title",shortcut:{macOS:{modifiers:["ctrl","shift"],key:","},Windows:{modifiers:["alt","shift"],key:","}}}),(0,h.jsx)(d.Action.CopyToClipboard,{content:`[${e.title}](${e.url})`,title:"Copy Markdown URL",shortcut:{macOS:{modifiers:["cmd","shift"],key:";"},Windows:{modifiers:["ctrl","shift"],key:";"}}}),A?.ref?.name?(0,h.jsx)(d.Action.CopyToClipboard,{content:A.ref?.name,title:"Copy Branch Name",shortcut:{macOS:{modifiers:["ctrl","shift"],key:"."},Windows:{modifiers:["alt","shift"],key:"."}}}):null]}),(0,h.jsxs)(d.ActionPanel.Section,{children:[(0,h.jsx)(yi,{data:pi,sortQuery:o,setSortQuery:r}),(0,h.jsx)(d.Action,{icon:d.Icon.ArrowClockwise,title:"Refresh",onAction:i,shortcut:d.Keyboard.Shortcut.Common.Refresh})]})]})}function ec({issue:e,mutate:t}){let{github:a}=ie(),[n,r]=(0,Za.useState)(!1),{data:o,isLoading:u}=(0,Ja.useCachedPromise)(async i=>a.repositoryCollaboratorsForIssues({owner:i.repository.owner.login,name:i.repository.name,issueNumber:i.number}),[e],{execute:n});async function s({id:i,text:p}){try{await(0,d.showToast)({style:d.Toast.Style.Animated,title:"Adding assignee",message:p});let c=o?.repository?.issue?.assignees.nodes?.filter(y=>!!y).map(y=>y?.id)??[];await a.changeIssueAssignees({issueId:e.id,assigneeIds:[...c,i]}),await t(),await(0,d.showToast)({style:d.Toast.Style.Success,title:"Added assignee",message:p})}catch(c){await(0,d.showToast)({style:d.Toast.Style.Failure,title:"Failed adding assignee",message:Q(c)})}}return(0,h.jsx)(d.ActionPanel.Submenu,{title:"Add Assignee",icon:d.Icon.AddPerson,shortcut:{macOS:{modifiers:["cmd","shift"],key:"a"},Windows:{modifiers:["ctrl","shift"],key:"a"}},onOpen:()=>r(!0),children:u?(0,h.jsx)(d.Action,{title:"Loading\u2026"}):o?.repository?.collaborators?.nodes?.map(i=>{if(!i)return null;let p=De(i);return(0,h.jsx)(d.Action,{title:p.text,icon:p.icon,onAction:()=>s({id:i.id,text:p.text})},i.id)})})}function tc({issue:e,mutate:t}){let{github:a}=ie(),[n,r]=(0,Za.useState)(!1),{data:o,isLoading:u}=(0,Ja.useCachedPromise)(async i=>a.repositoryProjectsForIssues({owner:i.repository.owner.login,name:i.repository.name,issueNumber:i.number}),[e],{execute:n});async function s({id:i,text:p}){try{await(0,d.showToast)({style:d.Toast.Style.Animated,title:"Adding to project",message:p}),await a.addIssueToProject({issueId:e.id,projectId:i}),await t(),await(0,d.showToast)({style:d.Toast.Style.Success,title:"Added to project",message:p})}catch(c){await(0,d.showToast)({style:d.Toast.Style.Failure,title:"Failed adding to project",message:Q(c)})}}return(0,h.jsx)(d.ActionPanel.Submenu,{title:"Add to Project",icon:{source:"project.svg",tintColor:d.Color.PrimaryText},shortcut:{macOS:{modifiers:["cmd","shift"],key:"p"},Windows:{modifiers:["ctrl","shift"],key:"p"}},onOpen:()=>r(!0),children:u?(0,h.jsx)(d.Action,{title:"Loading\u2026"}):o?.repository?.projectsV2.nodes?.map(i=>i?(0,h.jsx)(d.Action,{title:i.title,onAction:()=>s({id:i.id,text:i.title})},i.id):null)})}function ac({issue:e,mutate:t}){let{github:a}=ie(),[n,r]=(0,Za.useState)(!1),{data:o,isLoading:u}=(0,Ja.useCachedPromise)(async p=>a.milestonesForRepository({owner:p.repository.owner.login,name:p.repository.name}),[e],{execute:n});async function s(){try{await(0,d.showToast)({style:d.Toast.Style.Animated,title:"Removing milestone"}),await a.changeIssueMilestone({issueId:e.id,milestoneId:null}),await t(),await(0,d.showToast)({style:d.Toast.Style.Success,title:"Removed milestone"})}catch(p){await(0,d.showToast)({style:d.Toast.Style.Failure,title:"Failed removing milestone",message:Q(p)})}}async function i({id:p,text:c}){try{await(0,d.showToast)({style:d.Toast.Style.Animated,title:"Setting milestone",message:c}),await a.changeIssueMilestone({issueId:e.id,milestoneId:p}),await t(),await(0,d.showToast)({style:d.Toast.Style.Success,title:"Milestone set",message:c})}catch(y){await(0,d.showToast)({style:d.Toast.Style.Failure,title:"Failed setting milestone",message:Q(y)})}}return(0,h.jsx)(d.ActionPanel.Submenu,{title:"Set Milestone",icon:{source:"milestone.svg",tintColor:d.Color.PrimaryText},shortcut:{macOS:{modifiers:["cmd","shift"],key:"m"},Windows:{modifiers:["ctrl","shift"],key:"m"}},onOpen:()=>r(!0),children:u?(0,h.jsx)(d.Action,{title:"Loading\u2026"}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(d.Action,{title:"No Milestone",onAction:()=>s()}),o?.repository?.milestones?.nodes?.map(p=>p?(0,h.jsx)(d.Action,{title:p.title,onAction:()=>i({id:p.id,text:p.title}),autoFocus:e.milestone?.id===p.id},p.id):null)]})})}var F=require("react/jsx-runtime");function Gr({initialIssue:e,mutateList:t}){let{github:a}=ie(),n=_t(),{data:r,isLoading:o,mutate:u}=(0,di.useCachedPromise)(async y=>(await a.issueDetails({nodeId:y})).node,[e.id],{initialData:e}),s=`# ${r.title}`;r?.body&&(s+=`

${r.body}`);let i=si(r),p=ui(r),c=r.linkedBranches.nodes?.length?r.linkedBranches.nodes[0]?.ref?.name:null;return(0,F.jsx)(V.Detail,{isLoading:o,markdown:s,navigationTitle:`#${r.number}`,metadata:(0,F.jsxs)(V.Detail.Metadata,{children:[(0,F.jsx)(V.Detail.Metadata.Label,{title:"Repository",text:r.repository.nameWithOwner}),(0,F.jsx)(V.Detail.Metadata.TagList,{title:"Status",children:(0,F.jsx)(V.Detail.Metadata.TagList.Item,{...i})}),c?(0,F.jsx)(V.Detail.Metadata.Label,{title:"Branch",icon:{source:"branch.svg",tintColor:V.Color.PrimaryText},text:c}):null,r.updatedAt?(0,F.jsx)(V.Detail.Metadata.Label,{title:"Updated",text:(0,Si.format)(new Date(r.updatedAt),"dd MMM")}):null,(0,F.jsx)(V.Detail.Metadata.Label,{title:"Author",...p}),r.assignees&&r.assignees.totalCount>0?(0,F.jsx)(V.Detail.Metadata.TagList,{title:Ya(r.assignees.totalCount,"Assignee"),children:r.assignees.nodes?.map(y=>{if(!y)return null;let m=De(y);return(0,F.jsx)(V.Detail.Metadata.TagList.Item,{...m},y.id)})}):null,r.labels&&r.labels.totalCount>0?(0,F.jsx)(V.Detail.Metadata.TagList,{title:Ya(r.labels.totalCount,"Label"),children:r.labels.nodes?.map(y=>y?(0,F.jsx)(V.Detail.Metadata.TagList.Item,{text:y.name,color:y.color},y.id):null)}):null,r.projectsV2&&r.projectsV2.totalCount>0?(0,F.jsx)(V.Detail.Metadata.TagList,{title:Ya(r.projectsV2.totalCount,"Project"),children:r.projectsV2.nodes?.map(y=>y?(0,F.jsx)(V.Detail.Metadata.TagList.Item,{text:y.title},y.id):null)}):null,r.milestone?(0,F.jsx)(V.Detail.Metadata.Label,{title:"Milestone",text:r.milestone.title}):null]}),actions:(0,F.jsx)(Hr,{issue:r,viewer:n,mutateList:t,mutateDetail:u})})}var bi=O(Be());var Ii=(0,bi.withAccessToken)(oi);var mi=O(Be());var Xa=require("node:child_process");var Mi=require("node:util"),X=require("@raycast/api"),rc=O(Be());var oS=[{title:"github.dev",baseUrl:"https://github.dev/",icon:{source:"github-dev.svg",tintColor:X.Color.PrimaryText},shortcut:X.Keyboard.Shortcut.Common.Open},{title:"VS Code for the Web",baseUrl:"https://vscode.dev/github/",icon:{source:"vscode.svg",tintColor:X.Color.PrimaryText},shortcut:{macOS:{modifiers:["cmd"],key:"v"},Windows:{modifiers:["ctrl"],key:"v"}}},{title:"CodeSandbox",baseUrl:"https://codesandbox.io/s/github/",icon:{source:"codesandbox.svg",tintColor:X.Color.PrimaryText}},{title:"Replit",baseUrl:"https://repl.it/github/",icon:{source:"replit.svg",tintColor:X.Color.PrimaryText}},{title:"Gitpod",baseUrl:"https://gitpod.io/#https://github.com/",icon:{source:"gitpod.svg",tintColor:X.Color.PrimaryText}},{title:"Glitch",baseUrl:"https://glitch.com/edit/#!/import/github/",icon:{source:"glitch.svg",tintColor:X.Color.PrimaryText}},{title:"Sourcegraph",baseUrl:"https://sourcegraph.com/github.com/",icon:{source:"sourcegraph.svg",tintColor:X.Color.PrimaryText},shortcut:{macOS:{modifiers:["cmd"],key:"s"},Windows:{modifiers:["ctrl"],key:"s"}}},{title:"DeepWiki",baseUrl:"https://deepwiki.com/",icon:{source:"deepwiki.png"},shortcut:{macOS:{modifiers:["cmd"],key:"d"},Windows:{modifiers:["ctrl"],key:"d"}}},{title:"VS Code Remote Repositories",baseUrl:"vscode://GitHub.remotehub/open?url=https://github.com/",icon:{source:"vscode.svg",tintColor:X.Color.PrimaryText}}];var nc=[{title:"Relevance",value:""},{title:"Last Update",value:"sort:updated-desc"},{title:"Name",value:"sort:name-asc"},{title:"Stars",value:"sort:stars-desc"},{title:"Forks",value:"sort:forks-desc"}],oc=[{title:"Last Pushed",value:"pushed_at:desc"},{title:"Name",value:"name:asc"},{title:"Stars",value:"stargazers:desc"}],ic=[{title:"Recently Starred",value:"starred_at:desc"},{title:"Oldest Starred",value:"starred_at:asc"}],iS=nc[0].value,sS=oc[0].value,uS=ic[0].value;var pS=(0,Mi.promisify)(Xa.execFile);var aa="\x1B",gi="\x07",lS=new RegExp(`${aa}][^${gi}${aa}]*(?:${gi}|${aa}\\\\)`,"g"),cS=new RegExp(`${aa}\\[[0-9;?]*[A-Za-z]`,"g"),yS=new RegExp(`${aa}\\([0-9A-Za-z]`,"g");function Ri(){let{github:e}=ie(),n=["user:@me",..._t()?.organizations?.nodes?.flatMap(r=>r?.login?[`org:${r.login}`]:[])??[]].join(" ");return(0,mi.useCachedPromise)(async r=>{let u=(await Promise.allSettled(r.split(" ").map(s=>e.searchRepositories({query:`${s} archived:false sort:updated-desc`,numberOfItems:100})))).flatMap(s=>s.status==="fulfilled"?s.value.search.nodes:[]);return[...new Map(u.map(s=>[s.id,s])).values()].sort((s,i)=>new Date(i.updatedAt).getTime()-new Date(s.updatedAt).getTime())},[n])}var T=require("react/jsx-runtime");function fi({draftValues:e}){let{push:t}=(0,C.useNavigation)(),{data:a}=Ri(),{github:n}=ie(),{openInBrowserAfterCreate:r}=(0,C.getPreferenceValues)(),{handleSubmit:o,itemProps:u,values:s,setValue:i,reset:p,focus:c}=(0,st.useForm)({async onSubmit(S){let b=await(0,C.showToast)({style:C.Toast.Style.Animated,title:"Creating issue"});try{let E=(await n.createIssue({repositoryId:S.repository,title:S.title,body:S.description,assigneeIds:S.assignees,labelIds:S.labels,milestoneId:S.milestone||null,issueTypeId:S.issueType||null}))?.createIssue?.issue;if(E&&(await Promise.all(S.projects.map(U=>n.addIssueToProject({issueId:E.id,projectId:U}))),b.style=C.Toast.Style.Success,b.title="Created issue",b.primaryAction={title:"Open Issue",shortcut:C.Keyboard.Shortcut.Common.OpenWith,onAction:()=>t((0,T.jsx)(Gr,{initialIssue:E}))},b.secondaryAction={title:"Copy URL",shortcut:C.Keyboard.Shortcut.Common.Copy,onAction:()=>C.Clipboard.copy(E.url)},r))try{await(0,C.open)(E.url)}catch{}p({title:"",description:"",reviewers:[],assignees:[],labels:[],projects:[],milestone:"",issueType:""}),c("repository")}catch(f){b.style=C.Toast.Style.Failure,b.title="Failed creating issue",b.message=Q(f)}},initialValues:{repository:e?.repository??"",title:e?.title??"",description:e?.description??"",reviewers:e?.reviewers??[],assignees:e?.assignees??[],labels:e?.labels??[],projects:e?.projects??[],milestone:e?.milestone??"",issueType:e?.issueType??""},validation:{repository:st.FormValidation.Required,title:st.FormValidation.Required}}),{data:y}=(0,st.useCachedPromise)(S=>{let b=a?.find(f=>f.id===S);return b?n.dataForRepository({owner:b.owner.login,name:b.name}):Promise.resolve(null)},[s.repository],{execute:!!s.repository}),m=y?.repository?.collaborators?.nodes,P=y?.repository?.labels?.nodes,l=y?.repository?.projectsV2?.nodes??[],g=y?.repository?.owner?.__typename==="Organization"?y.repository.owner.projectsV2?.nodes??[]:[],I=[...l,...g].filter((S,b,f)=>S?f.findIndex(E=>E?.id===S.id)===b:!1),M=y?.repository?.milestones?.nodes,A=y?.repository?.issueTypes?.nodes?.filter(S=>S&&S.isEnabled);return(0,Ai.useEffect)(()=>{i("description",""),i("assignees",[]),i("labels",[]),i("projects",[]),i("milestone",""),i("issueType","")},[s.repository]),(0,T.jsxs)(C.Form,{actions:(0,T.jsx)(C.ActionPanel,{children:(0,T.jsx)(C.Action.SubmitForm,{onSubmit:o,title:"Create Issue"})}),enableDrafts:!0,children:[(0,T.jsx)(C.Form.Dropdown,{...u.repository,title:"Repository",storeValue:!0,children:a?.map(S=>(0,T.jsx)(C.Form.Dropdown.Item,{title:S.nameWithOwner,value:S.id,icon:{source:S.owner.avatarUrl,mask:C.Image.Mask.Circle}},S.id))}),(0,T.jsx)(C.Form.Separator,{}),(0,T.jsx)(C.Form.TextField,{...u.title,title:"Title",placeholder:"Issue title"}),(0,T.jsx)(C.Form.TextArea,{...u.description,placeholder:"Issue description (e.g **bold**)",title:"Description",enableMarkdown:!0}),(0,T.jsx)(C.Form.TagPicker,{...u.assignees,title:"Assignees",children:m?.map(S=>{if(!S)return null;let b=De(S);return(0,T.jsx)(C.Form.TagPicker.Item,{icon:b.icon,title:b.text,value:S.id},S.id)})}),(0,T.jsx)(C.Form.TagPicker,{...u.labels,title:"Labels",children:P?.map(S=>S?(0,T.jsx)(C.Form.TagPicker.Item,{title:S.name,value:S.id,icon:{source:C.Icon.Dot,tintColor:S.color}},S.id):null)}),(0,T.jsx)(C.Form.TagPicker,{...u.projects,title:"Projects",children:I?.map(S=>S?(0,T.jsx)(C.Form.TagPicker.Item,{title:S.title,value:S.id},S.id):null)}),(0,T.jsxs)(C.Form.Dropdown,{...u.issueType,title:"Issue Type",children:[(0,T.jsx)(C.Form.Dropdown.Item,{value:"",title:"None"}),A?.map(S=>S?(0,T.jsx)(C.Form.Dropdown.Item,{icon:{source:C.Icon.Dot,tintColor:S.color},title:S.name,value:S.id},S.id):null)]}),(0,T.jsxs)(C.Form.Dropdown,{...u.milestone,title:"Milestone",children:[(0,T.jsx)(C.Form.Dropdown.Item,{value:"",title:"None"}),M?.map(S=>S?(0,T.jsx)(C.Form.Dropdown.Item,{title:S.title,value:S.id},S.id):null)]})]})}var sc=Ii(fi);0&&(module.exports={IssueForm});
