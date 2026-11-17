"use strict";var as=Object.create;var ia=Object.defineProperty;var rs=Object.getOwnPropertyDescriptor;var ns=Object.getOwnPropertyNames;var os=Object.getPrototypeOf,is=Object.prototype.hasOwnProperty;var pr=(e,t,a)=>()=>{if(a)throw a[0];try{return e&&(t=e(e=0)),t}catch(r){throw a=[r],r}};var C=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(a){throw t=0,a}},st=(e,t)=>{for(var a in t)ia(e,a,{get:t[a],enumerable:!0})},oa=(e,t,a,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of ns(t))!is.call(e,n)&&n!==a&&ia(e,n,{get:()=>t[n],enumerable:!(r=rs(t,n))||r.enumerable});return e},$=(e,t,a)=>(oa(e,t,"default"),a&&oa(a,t,"default")),T=(e,t,a)=>(a=e!=null?as(os(e)):{},oa(t||!e||!e.__esModule?ia(a,"default",{value:e,enumerable:!0}):a,e)),ss=e=>oa(ia({},"__esModule",{value:!0}),e);var dn=C(sa=>{"use strict";Object.defineProperty(sa,"__esModule",{value:!0});sa.useDeepMemo=void 0;var lr=require("react"),us=require("dequal/lite");function ps(e){let t=(0,lr.useRef)(e),a=(0,lr.useRef)(0);return(0,us.dequal)(e,t.current)||(t.current=e,a.current+=1),(0,lr.useMemo)(()=>t.current,[a.current])}sa.useDeepMemo=ps});var fe=C(ua=>{"use strict";Object.defineProperty(ua,"__esModule",{value:!0});ua.useLatest=void 0;var ls=require("react");function cs(e){let t=(0,ls.useRef)(e);return t.current=e,t}ua.useLatest=cs});var vt=C(ce=>{"use strict";var ys=ce&&ce.__createBinding||(Object.create?(function(e,t,a,r){r===void 0&&(r=a);var n=Object.getOwnPropertyDescriptor(t,a);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,n)}):(function(e,t,a,r){r===void 0&&(r=a),e[r]=t[a]})),ds=ce&&ce.__setModuleDefault||(Object.create?(function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}):function(e,t){e.default=t}),bn=ce&&ce.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var a in e)a!=="default"&&Object.prototype.hasOwnProperty.call(e,a)&&ys(t,e,a);return ds(t,e),t};Object.defineProperty(ce,"__esModule",{value:!0});ce.showFailureToast=void 0;var Ss=bn(require("fs")),bs=bn(require("path")),ut=require("@raycast/api");function Is(e,t){let a=e instanceof Error?e.message:String(e);return(0,ut.showToast)({style:ut.Toast.Style.Failure,title:t?.title??"Something went wrong",message:t?.message??a,primaryAction:t?.primaryAction??Sn(e),secondaryAction:t?.primaryAction?Sn(e):void 0})}ce.showFailureToast=Is;var Sn=e=>{let t=!0,a="[Extension Name]...",r="";try{let i=JSON.parse(Ss.readFileSync(bs.join(ut.environment.assetsPath,"..","package.json"),"utf8"));a=`[${i.title}]...`,r=`https://raycast.com/${i.owner||i.author}/${i.name}`,(!i.owner||i.access==="public")&&(t=!1)}catch{}let n=ut.environment.isDevelopment||t,o=e instanceof Error?e?.stack||e?.message||"":String(e);return{title:n?"Copy Logs":"Report Error",onAction(i){i.hide(),n?ut.Clipboard.copy(o):(0,ut.open)(`https://github.com/raycast/extensions/issues/new?&labels=extension%2Cbug&template=extension_bug_report.yml&title=${encodeURIComponent(a)}&extension-url=${encodeURI(r)}&description=${encodeURIComponent(`#### Error:
\`\`\`
${o}
\`\`\`
`)}`)}}}});var pt=C(pa=>{"use strict";Object.defineProperty(pa,"__esModule",{value:!0});pa.usePromise=void 0;var Y=require("react"),Tt=require("@raycast/api"),gs=dn(),Oe=fe(),Ms=vt();function ms(e,t,a){let r=(0,Y.useRef)(0),[n,o]=(0,Y.useState)({isLoading:!0}),i=(0,Oe.useLatest)(e),s=(0,Oe.useLatest)(a?.abortable),u=(0,Oe.useLatest)(t||[]),p=(0,Oe.useLatest)(a?.onError),l=(0,Oe.useLatest)(a?.onData),y=(0,Oe.useLatest)(a?.onWillExecute),d=(0,Oe.useLatest)(a?.failureToastOptions),I=(0,Oe.useLatest)(n.data),c=(0,Y.useRef)(),S=(0,Y.useRef)({page:0}),b=(0,Y.useRef)(!1),g=(0,Y.useRef)(!0),R=(0,Y.useRef)(50),f=(0,Y.useCallback)((...v)=>{let x=++r.current;s.current&&(s.current.current?.abort(),s.current.current=new AbortController),y.current?.(v),o(P=>({...P,isLoading:!0}));let G=Rs(i.current)(...v);function k(P){return P.name=="AbortError"||x===r.current&&(p.current?p.current(P):Tt.environment.launchType!==Tt.LaunchType.Background&&(0,Ms.showFailureToast)(P,{title:"Failed to fetch latest data",primaryAction:{title:"Retry",onAction(F){F.hide(),c.current?.(...u.current||[])}},...d.current}),o({error:P,isLoading:!1})),P}return typeof G=="function"?(b.current=!0,G(S.current).then(({data:P,hasMore:F,cursor:We})=>(x===r.current&&(S.current&&(S.current.cursor=We,S.current.lastItem=P?.[P.length-1]),l.current&&l.current(P,S.current),F&&(R.current=P.length),g.current=F,o(Ke=>S.current.page===0?{data:P,isLoading:!1}:{data:(Ke.data||[])?.concat(P),isLoading:!1})),P),P=>(g.current=!1,k(P)))):(b.current=!1,G.then(P=>(x===r.current&&(l.current&&l.current(P),o({data:P,isLoading:!1})),P),k))},[s,l,p,u,i,o,c,y,S,d]);c.current=f;let M=(0,Y.useCallback)(()=>{S.current={page:0};let v=u.current||[];return f(...v)},[f,u]),E=(0,Y.useCallback)(async(v,x)=>{let G;try{if(x?.optimisticUpdate){typeof x?.rollbackOnError!="function"&&x?.rollbackOnError!==!1&&(G=structuredClone(I.current?.value));let k=x.optimisticUpdate;o(P=>({...P,data:k(P.data)}))}return await v}catch(k){if(typeof x?.rollbackOnError=="function"){let P=x.rollbackOnError;o(F=>({...F,data:P(F.data)}))}else x?.optimisticUpdate&&x?.rollbackOnError!==!1&&o(P=>({...P,data:G}));throw k}finally{x?.shouldRevalidateAfter!==!1&&(Tt.environment.launchType===Tt.LaunchType.Background||Tt.environment.commandMode==="menu-bar"?await M():M())}},[M,I,o]),A=(0,Y.useCallback)(()=>{S.current.page+=1;let v=u.current||[];f(...v)},[S,u,f]);(0,Y.useEffect)(()=>{S.current={page:0},a?.execute!==!1?f(...t||[]):s.current&&s.current.current?.abort()},[(0,gs.useDeepMemo)([t,a?.execute,f]),s,S]),(0,Y.useEffect)(()=>()=>{s.current&&s.current.current?.abort()},[s]);let h=a?.execute!==!1?n.isLoading:!1,O={...n,isLoading:h},B=b.current?{pageSize:R.current,hasMore:g.current,onLoadMore:A}:void 0;return{...O,revalidate:M,mutate:E,pagination:B}}pa.usePromise=ms;function Rs(e){return e===Promise.all||e===Promise.race||e===Promise.resolve||e===Promise.reject?e.bind(Promise):e}});var Be=C(ye=>{"use strict";var fs=ye&&ye.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ye,"__esModule",{value:!0});ye.hash=ye.reviver=ye.replacer=void 0;var As=fs(require("object-hash"));function Es(e,t){let a=this[e];return a instanceof Date?`__raycast_cached_date__${a.toString()}`:Buffer.isBuffer(a)?`__raycast_cached_buffer__${a.toString("base64")}`:t}ye.replacer=Es;function Ps(e,t){return typeof t=="string"&&t.startsWith("__raycast_cached_date__")?new Date(t.replace("__raycast_cached_date__","")):typeof t=="string"&&t.startsWith("__raycast_cached_buffer__")?Buffer.from(t.replace("__raycast_cached_buffer__",""),"base64"):t}ye.reviver=Ps;function Cs(e,t){return(0,As.default)(e,{replacer:a=>a instanceof URLSearchParams?a.toString():a,...t})}ye.hash=Cs});var ca=C(la=>{"use strict";Object.defineProperty(la,"__esModule",{value:!0});la.useCachedState=void 0;var cr=require("react"),hs=require("@raycast/api"),yr=fe(),In=Be(),xs=Symbol("cache without namespace"),gn=new Map;function Ds(e,t,a){let r=a?.cacheNamespace||xs,n=gn.get(r)||gn.set(r,new hs.Cache({namespace:a?.cacheNamespace})).get(r);if(!n)throw new Error("Missing cache");let o=(0,yr.useLatest)(e),i=(0,yr.useLatest)(t),s=(0,cr.useSyncExternalStore)(n.subscribe,()=>{try{return n.get(o.current)}catch(y){console.error("Could not get Cache data:",y);return}}),u=(0,cr.useMemo)(()=>{if(typeof s<"u"){if(s==="undefined")return;try{return JSON.parse(s,In.reviver)}catch(y){return console.warn("The cached data is corrupted",y),i.current}}else return i.current},[s,i]),p=(0,yr.useLatest)(u),l=(0,cr.useCallback)(y=>{let d=typeof y=="function"?y(p.current):y;if(typeof d>"u")n.set(o.current,"undefined");else{let I=JSON.stringify(d,In.replacer);n.set(o.current,I)}return d},[n,o,p]);return[u,l]}la.useCachedState=Ds});var Ot=C(ya=>{"use strict";Object.defineProperty(ya,"__esModule",{value:!0});ya.useCachedPromise=void 0;var wt=require("react"),Us=ca(),_s=pt(),vs=fe(),Mn=Be(),lt=Symbol();function Ts(e,t,a){let{initialData:r,keepPreviousData:n,internal_cacheKeySuffix:o,...i}=a||{},s=(0,wt.useRef)(),[u,p]=(0,Us.useCachedState)((0,Mn.hash)(t||[])+o,lt,{cacheNamespace:(0,Mn.hash)(e)}),l=(0,wt.useRef)(u!==lt?u:r),y=(0,wt.useRef)(void 0),{mutate:d,revalidate:I,...c}=(0,_s.usePromise)(e,t||[],{...i,onData(f,M){y.current=M,i.onData&&i.onData(f,M),!(M&&M.page>0)&&(s.current="promise",l.current=f,p(f))}}),S,b=c.pagination;y.current&&y.current.page>0&&c.data?S=c.data:s.current==="promise"?S=l.current:n&&u!==lt?(S=u,b&&(b.hasMore=!0,b.pageSize=u.length)):n&&u===lt?S=l.current:u!==lt?(S=u,b&&(b.hasMore=!0,b.pageSize=u.length)):S=r;let g=(0,vs.useLatest)(S),R=(0,wt.useCallback)(async(f,M)=>{let E;try{if(M?.optimisticUpdate){typeof M?.rollbackOnError!="function"&&M?.rollbackOnError!==!1&&(E=structuredClone(g.current));let A=M.optimisticUpdate(g.current);s.current="cache",l.current=A,p(A)}return await d(f,{shouldRevalidateAfter:M?.shouldRevalidateAfter})}catch(A){if(typeof M?.rollbackOnError=="function"){let h=M.rollbackOnError(g.current);s.current="cache",l.current=h,p(h)}else M?.optimisticUpdate&&M?.rollbackOnError!==!1&&(s.current="cache",l.current=E,p(E));throw A}},[p,d,g,l,s]);return(0,wt.useEffect)(()=>{u!==lt&&(s.current="cache",l.current=u)},[u]),{data:S,isLoading:c.isLoading,error:c.error,mutate:y.current&&y.current.page>0?d:R,pagination:b,revalidate:I}}ya.useCachedPromise=Ts});var _n=C((pe,Un)=>{"use strict";Object.defineProperty(pe,"__esModule",{value:!0});function St(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var ue=St(require("stream")),An=St(require("http")),Sa=St(require("url")),En=St(require("whatwg-url")),ws=St(require("https")),Ye=St(require("zlib")),Os=ue.Readable,Ae=Symbol("buffer"),dr=Symbol("type"),Lt=class e{constructor(){this[dr]="";let t=arguments[0],a=arguments[1],r=[],n=0;if(t){let i=t,s=Number(i.length);for(let u=0;u<s;u++){let p=i[u],l;p instanceof Buffer?l=p:ArrayBuffer.isView(p)?l=Buffer.from(p.buffer,p.byteOffset,p.byteLength):p instanceof ArrayBuffer?l=Buffer.from(p):p instanceof e?l=p[Ae]:l=Buffer.from(typeof p=="string"?p:String(p)),n+=l.length,r.push(l)}}this[Ae]=Buffer.concat(r);let o=a&&a.type!==void 0&&String(a.type).toLowerCase();o&&!/[^\u0020-\u007E]/.test(o)&&(this[dr]=o)}get size(){return this[Ae].length}get type(){return this[dr]}text(){return Promise.resolve(this[Ae].toString())}arrayBuffer(){let t=this[Ae],a=t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength);return Promise.resolve(a)}stream(){let t=new Os;return t._read=function(){},t.push(this[Ae]),t.push(null),t}toString(){return"[object Blob]"}slice(){let t=this.size,a=arguments[0],r=arguments[1],n,o;a===void 0?n=0:a<0?n=Math.max(t+a,0):n=Math.min(a,t),r===void 0?o=t:r<0?o=Math.max(t+r,0):o=Math.min(r,t);let i=Math.max(o-n,0),u=this[Ae].slice(n,n+i),p=new e([],{type:arguments[2]});return p[Ae]=u,p}};Object.defineProperties(Lt.prototype,{size:{enumerable:!0},type:{enumerable:!0},slice:{enumerable:!0}});Object.defineProperty(Lt.prototype,Symbol.toStringTag,{value:"Blob",writable:!1,enumerable:!1,configurable:!0});function V(e,t,a){Error.call(this,e),this.message=e,this.type=t,a&&(this.code=this.errno=a.code),Error.captureStackTrace(this,this.constructor)}V.prototype=Object.create(Error.prototype);V.prototype.constructor=V;V.prototype.name="FetchError";var gr;try{gr=require("encoding").convert}catch{}var Pe=Symbol("Body internals"),mn=ue.PassThrough;function L(e){var t=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.size;let n=r===void 0?0:r;var o=a.timeout;let i=o===void 0?0:o;e==null?e=null:Pn(e)?e=Buffer.from(e.toString()):Nt(e)||Buffer.isBuffer(e)||(Object.prototype.toString.call(e)==="[object ArrayBuffer]"?e=Buffer.from(e):ArrayBuffer.isView(e)?e=Buffer.from(e.buffer,e.byteOffset,e.byteLength):e instanceof ue||(e=Buffer.from(String(e)))),this[Pe]={body:e,disturbed:!1,error:null},this.size=n,this.timeout=i,e instanceof ue&&e.on("error",function(s){let u=s.name==="AbortError"?s:new V(`Invalid response body while trying to fetch ${t.url}: ${s.message}`,"system",s);t[Pe].error=u})}L.prototype={get body(){return this[Pe].body},get bodyUsed(){return this[Pe].disturbed},arrayBuffer(){return ct.call(this).then(function(e){return e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength)})},blob(){let e=this.headers&&this.headers.get("content-type")||"";return ct.call(this).then(function(t){return Object.assign(new Lt([],{type:e.toLowerCase()}),{[Ae]:t})})},json(){var e=this;return ct.call(this).then(function(t){try{return JSON.parse(t.toString())}catch(a){return L.Promise.reject(new V(`invalid json response body at ${e.url} reason: ${a.message}`,"invalid-json"))}})},text(){return ct.call(this).then(function(e){return e.toString()})},buffer(){return ct.call(this)},textConverted(){var e=this;return ct.call(this).then(function(t){return Bs(t,e.headers)})}};Object.defineProperties(L.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0}});L.mixIn=function(e){for(let t of Object.getOwnPropertyNames(L.prototype))if(!(t in e)){let a=Object.getOwnPropertyDescriptor(L.prototype,t);Object.defineProperty(e,t,a)}};function ct(){var e=this;if(this[Pe].disturbed)return L.Promise.reject(new TypeError(`body used already for: ${this.url}`));if(this[Pe].disturbed=!0,this[Pe].error)return L.Promise.reject(this[Pe].error);let t=this.body;if(t===null)return L.Promise.resolve(Buffer.alloc(0));if(Nt(t)&&(t=t.stream()),Buffer.isBuffer(t))return L.Promise.resolve(t);if(!(t instanceof ue))return L.Promise.resolve(Buffer.alloc(0));let a=[],r=0,n=!1;return new L.Promise(function(o,i){let s;e.timeout&&(s=setTimeout(function(){n=!0,i(new V(`Response timeout while trying to fetch ${e.url} (over ${e.timeout}ms)`,"body-timeout"))},e.timeout)),t.on("error",function(u){u.name==="AbortError"?(n=!0,i(u)):i(new V(`Invalid response body while trying to fetch ${e.url}: ${u.message}`,"system",u))}),t.on("data",function(u){if(!(n||u===null)){if(e.size&&r+u.length>e.size){n=!0,i(new V(`content size at ${e.url} over limit: ${e.size}`,"max-size"));return}r+=u.length,a.push(u)}}),t.on("end",function(){if(!n){clearTimeout(s);try{o(Buffer.concat(a,r))}catch(u){i(new V(`Could not create Buffer from response body for ${e.url}: ${u.message}`,"system",u))}}})})}function Bs(e,t){if(typeof gr!="function")throw new Error("The package `encoding` must be installed to use the textConverted() function");let a=t.get("content-type"),r="utf-8",n,o;return a&&(n=/charset=([^;]*)/i.exec(a)),o=e.slice(0,1024).toString(),!n&&o&&(n=/<meta.+?charset=(['"])(.+?)\1/i.exec(o)),!n&&o&&(n=/<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(o),n||(n=/<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(o),n&&n.pop()),n&&(n=/charset=(.*)/i.exec(n.pop()))),!n&&o&&(n=/<\?xml.+?encoding=(['"])(.+?)\1/i.exec(o)),n&&(r=n.pop(),(r==="gb2312"||r==="gbk")&&(r="gb18030")),gr(e,"UTF-8",r).toString()}function Pn(e){return typeof e!="object"||typeof e.append!="function"||typeof e.delete!="function"||typeof e.get!="function"||typeof e.getAll!="function"||typeof e.has!="function"||typeof e.set!="function"?!1:e.constructor.name==="URLSearchParams"||Object.prototype.toString.call(e)==="[object URLSearchParams]"||typeof e.sort=="function"}function Nt(e){return typeof e=="object"&&typeof e.arrayBuffer=="function"&&typeof e.type=="string"&&typeof e.stream=="function"&&typeof e.constructor=="function"&&typeof e.constructor.name=="string"&&/^(Blob|File)$/.test(e.constructor.name)&&/^(Blob|File)$/.test(e[Symbol.toStringTag])}function Cn(e){let t,a,r=e.body;if(e.bodyUsed)throw new Error("cannot clone body after it is used");return r instanceof ue&&typeof r.getBoundary!="function"&&(t=new mn,a=new mn,r.pipe(t),r.pipe(a),e[Pe].body=t,r=a),r}function hn(e){return e===null?null:typeof e=="string"?"text/plain;charset=UTF-8":Pn(e)?"application/x-www-form-urlencoded;charset=UTF-8":Nt(e)?e.type||null:Buffer.isBuffer(e)||Object.prototype.toString.call(e)==="[object ArrayBuffer]"||ArrayBuffer.isView(e)?null:typeof e.getBoundary=="function"?`multipart/form-data;boundary=${e.getBoundary()}`:e instanceof ue?null:"text/plain;charset=UTF-8"}function xn(e){let t=e.body;return t===null?0:Nt(t)?t.size:Buffer.isBuffer(t)?t.length:t&&typeof t.getLengthSync=="function"&&(t._lengthRetrievers&&t._lengthRetrievers.length==0||t.hasKnownLength&&t.hasKnownLength())?t.getLengthSync():null}function Ls(e,t){let a=t.body;a===null?e.end():Nt(a)?a.stream().pipe(e):Buffer.isBuffer(a)?(e.write(a),e.end()):a.pipe(e)}L.Promise=global.Promise;var Dn=/[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/,Mr=/[^\t\x20-\x7e\x80-\xff]/;function Bt(e){if(e=`${e}`,Dn.test(e)||e==="")throw new TypeError(`${e} is not a legal HTTP header name`)}function Rn(e){if(e=`${e}`,Mr.test(e))throw new TypeError(`${e} is not a legal HTTP header value`)}function yt(e,t){t=t.toLowerCase();for(let a in e)if(a.toLowerCase()===t)return a}var w=Symbol("map"),re=class e{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:void 0;if(this[w]=Object.create(null),t instanceof e){let a=t.raw(),r=Object.keys(a);for(let n of r)for(let o of a[n])this.append(n,o);return}if(t!=null)if(typeof t=="object"){let a=t[Symbol.iterator];if(a!=null){if(typeof a!="function")throw new TypeError("Header pairs must be iterable");let r=[];for(let n of t){if(typeof n!="object"||typeof n[Symbol.iterator]!="function")throw new TypeError("Each header pair must be iterable");r.push(Array.from(n))}for(let n of r){if(n.length!==2)throw new TypeError("Each header pair must be a name/value tuple");this.append(n[0],n[1])}}else for(let r of Object.keys(t)){let n=t[r];this.append(r,n)}}else throw new TypeError("Provided initializer must be an object")}get(t){t=`${t}`,Bt(t);let a=yt(this[w],t);return a===void 0?null:this[w][a].join(", ")}forEach(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:void 0,r=mr(this),n=0;for(;n<r.length;){var o=r[n];let i=o[0],s=o[1];t.call(a,s,i,this),r=mr(this),n++}}set(t,a){t=`${t}`,a=`${a}`,Bt(t),Rn(a);let r=yt(this[w],t);this[w][r!==void 0?r:t]=[a]}append(t,a){t=`${t}`,a=`${a}`,Bt(t),Rn(a);let r=yt(this[w],t);r!==void 0?this[w][r].push(a):this[w][t]=[a]}has(t){return t=`${t}`,Bt(t),yt(this[w],t)!==void 0}delete(t){t=`${t}`,Bt(t);let a=yt(this[w],t);a!==void 0&&delete this[w][a]}raw(){return this[w]}keys(){return Sr(this,"key")}values(){return Sr(this,"value")}[Symbol.iterator](){return Sr(this,"key+value")}};re.prototype.entries=re.prototype[Symbol.iterator];Object.defineProperty(re.prototype,Symbol.toStringTag,{value:"Headers",writable:!1,enumerable:!1,configurable:!0});Object.defineProperties(re.prototype,{get:{enumerable:!0},forEach:{enumerable:!0},set:{enumerable:!0},append:{enumerable:!0},has:{enumerable:!0},delete:{enumerable:!0},keys:{enumerable:!0},values:{enumerable:!0},entries:{enumerable:!0}});function mr(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"key+value";return Object.keys(e[w]).sort().map(t==="key"?function(r){return r.toLowerCase()}:t==="value"?function(r){return e[w][r].join(", ")}:function(r){return[r.toLowerCase(),e[w][r].join(", ")]})}var Rr=Symbol("internal");function Sr(e,t){let a=Object.create(fr);return a[Rr]={target:e,kind:t,index:0},a}var fr=Object.setPrototypeOf({next(){if(!this||Object.getPrototypeOf(this)!==fr)throw new TypeError("Value of `this` is not a HeadersIterator");var e=this[Rr];let t=e.target,a=e.kind,r=e.index,n=mr(t,a),o=n.length;return r>=o?{value:void 0,done:!0}:(this[Rr].index=r+1,{value:n[r],done:!1})}},Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));Object.defineProperty(fr,Symbol.toStringTag,{value:"HeadersIterator",writable:!1,enumerable:!1,configurable:!0});function qs(e){let t=Object.assign({__proto__:null},e[w]),a=yt(e[w],"Host");return a!==void 0&&(t[a]=t[a][0]),t}function Ns(e){let t=new re;for(let a of Object.keys(e))if(!Dn.test(a))if(Array.isArray(e[a]))for(let r of e[a])Mr.test(r)||(t[w][a]===void 0?t[w][a]=[r]:t[w][a].push(r));else Mr.test(e[a])||(t[w][a]=[e[a]]);return t}var Le=Symbol("Response internals"),Vs=An.STATUS_CODES,ae=class e{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};L.call(this,t,a);let r=a.status||200,n=new re(a.headers);if(t!=null&&!n.has("Content-Type")){let o=hn(t);o&&n.append("Content-Type",o)}this[Le]={url:a.url,status:r,statusText:a.statusText||Vs[r],headers:n,counter:a.counter}}get url(){return this[Le].url||""}get status(){return this[Le].status}get ok(){return this[Le].status>=200&&this[Le].status<300}get redirected(){return this[Le].counter>0}get statusText(){return this[Le].statusText}get headers(){return this[Le].headers}clone(){return new e(Cn(this),{url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected})}};L.mixIn(ae.prototype);Object.defineProperties(ae.prototype,{url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}});Object.defineProperty(ae.prototype,Symbol.toStringTag,{value:"Response",writable:!1,enumerable:!1,configurable:!0});var Ee=Symbol("Request internals"),Fs=Sa.URL||En.URL,js=Sa.parse,ks=Sa.format;function br(e){return/^[a-zA-Z][a-zA-Z\d+\-.]*:/.exec(e)&&(e=new Fs(e).toString()),js(e)}var zs="destroy"in ue.Readable.prototype;function da(e){return typeof e=="object"&&typeof e[Ee]=="object"}function Hs(e){let t=e&&typeof e=="object"&&Object.getPrototypeOf(e);return!!(t&&t.constructor.name==="AbortSignal")}var Ne=class e{constructor(t){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r;da(t)?r=br(t.url):(t&&t.href?r=br(t.href):r=br(`${t}`),t={});let n=a.method||t.method||"GET";if(n=n.toUpperCase(),(a.body!=null||da(t)&&t.body!==null)&&(n==="GET"||n==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");let o=a.body!=null?a.body:da(t)&&t.body!==null?Cn(t):null;L.call(this,o,{timeout:a.timeout||t.timeout||0,size:a.size||t.size||0});let i=new re(a.headers||t.headers||{});if(o!=null&&!i.has("Content-Type")){let u=hn(o);u&&i.append("Content-Type",u)}let s=da(t)?t.signal:null;if("signal"in a&&(s=a.signal),s!=null&&!Hs(s))throw new TypeError("Expected signal to be an instanceof AbortSignal");this[Ee]={method:n,redirect:a.redirect||t.redirect||"follow",headers:i,parsedURL:r,signal:s},this.follow=a.follow!==void 0?a.follow:t.follow!==void 0?t.follow:20,this.compress=a.compress!==void 0?a.compress:t.compress!==void 0?t.compress:!0,this.counter=a.counter||t.counter||0,this.agent=a.agent||t.agent}get method(){return this[Ee].method}get url(){return ks(this[Ee].parsedURL)}get headers(){return this[Ee].headers}get redirect(){return this[Ee].redirect}get signal(){return this[Ee].signal}clone(){return new e(this)}};L.mixIn(Ne.prototype);Object.defineProperty(Ne.prototype,Symbol.toStringTag,{value:"Request",writable:!1,enumerable:!1,configurable:!0});Object.defineProperties(Ne.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0}});function Gs(e){let t=e[Ee].parsedURL,a=new re(e[Ee].headers);if(a.has("Accept")||a.set("Accept","*/*"),!t.protocol||!t.hostname)throw new TypeError("Only absolute URLs are supported");if(!/^https?:$/.test(t.protocol))throw new TypeError("Only HTTP(S) protocols are supported");if(e.signal&&e.body instanceof ue.Readable&&!zs)throw new Error("Cancellation of streamed requests with AbortSignal is not supported in node < 8");let r=null;if(e.body==null&&/^(POST|PUT)$/i.test(e.method)&&(r="0"),e.body!=null){let o=xn(e);typeof o=="number"&&(r=String(o))}r&&a.set("Content-Length",r),a.has("User-Agent")||a.set("User-Agent","node-fetch/1.0 (+https://github.com/bitinn/node-fetch)"),e.compress&&!a.has("Accept-Encoding")&&a.set("Accept-Encoding","gzip,deflate");let n=e.agent;return typeof n=="function"&&(n=n(t)),Object.assign({},t,{method:e.method,headers:qs(a),agent:n})}function dt(e){Error.call(this,e),this.type="aborted",this.message=e,Error.captureStackTrace(this,this.constructor)}dt.prototype=Object.create(Error.prototype);dt.prototype.constructor=dt;dt.prototype.name="AbortError";var qt=Sa.URL||En.URL,fn=ue.PassThrough,$s=function(t,a){let r=new qt(a).hostname,n=new qt(t).hostname;return r===n||r[r.length-n.length-1]==="."&&r.endsWith(n)},Qs=function(t,a){let r=new qt(a).protocol,n=new qt(t).protocol;return r===n};function qe(e,t){if(!qe.Promise)throw new Error("native promise missing, set fetch.Promise to your favorite alternative");return L.Promise=qe.Promise,new qe.Promise(function(a,r){let n=new Ne(e,t),o=Gs(n),i=(o.protocol==="https:"?ws:An).request,s=n.signal,u=null,p=function(){let S=new dt("The user aborted a request.");r(S),n.body&&n.body instanceof ue.Readable&&Ir(n.body,S),!(!u||!u.body)&&u.body.emit("error",S)};if(s&&s.aborted){p();return}let l=function(){p(),I()},y=i(o),d;s&&s.addEventListener("abort",l);function I(){y.abort(),s&&s.removeEventListener("abort",l),clearTimeout(d)}n.timeout&&y.once("socket",function(c){d=setTimeout(function(){r(new V(`network timeout at: ${n.url}`,"request-timeout")),I()},n.timeout)}),y.on("error",function(c){r(new V(`request to ${n.url} failed, reason: ${c.message}`,"system",c)),u&&u.body&&Ir(u.body,c),I()}),Ws(y,function(c){s&&s.aborted||u&&u.body&&Ir(u.body,c)}),parseInt(process.version.substring(1))<14&&y.on("socket",function(c){c.addListener("close",function(S){let b=c.listenerCount("data")>0;if(u&&b&&!S&&!(s&&s.aborted)){let g=new Error("Premature close");g.code="ERR_STREAM_PREMATURE_CLOSE",u.body.emit("error",g)}})}),y.on("response",function(c){clearTimeout(d);let S=Ns(c.headers);if(qe.isRedirect(c.statusCode)){let M=S.get("Location"),E=null;try{E=M===null?null:new qt(M,n.url).toString()}catch{if(n.redirect!=="manual"){r(new V(`uri requested responds with an invalid redirect URL: ${M}`,"invalid-redirect")),I();return}}switch(n.redirect){case"error":r(new V(`uri requested responds with a redirect, redirect mode is set to error: ${n.url}`,"no-redirect")),I();return;case"manual":if(E!==null)try{S.set("Location",E)}catch(h){r(h)}break;case"follow":if(E===null)break;if(n.counter>=n.follow){r(new V(`maximum redirect reached at: ${n.url}`,"max-redirect")),I();return}let A={headers:new re(n.headers),follow:n.follow,counter:n.counter+1,agent:n.agent,compress:n.compress,method:n.method,body:n.body,signal:n.signal,timeout:n.timeout,size:n.size};if(!$s(n.url,E)||!Qs(n.url,E))for(let h of["authorization","www-authenticate","cookie","cookie2"])A.headers.delete(h);if(c.statusCode!==303&&n.body&&xn(n)===null){r(new V("Cannot follow redirect with body being a readable stream","unsupported-redirect")),I();return}(c.statusCode===303||(c.statusCode===301||c.statusCode===302)&&n.method==="POST")&&(A.method="GET",A.body=void 0,A.headers.delete("content-length")),a(qe(new Ne(E,A))),I();return}}c.once("end",function(){s&&s.removeEventListener("abort",l)});let b=c.pipe(new fn),g={url:n.url,status:c.statusCode,statusText:c.statusMessage,headers:S,size:n.size,timeout:n.timeout,counter:n.counter},R=S.get("Content-Encoding");if(!n.compress||n.method==="HEAD"||R===null||c.statusCode===204||c.statusCode===304){u=new ae(b,g),a(u);return}let f={flush:Ye.Z_SYNC_FLUSH,finishFlush:Ye.Z_SYNC_FLUSH};if(R=="gzip"||R=="x-gzip"){b=b.pipe(Ye.createGunzip(f)),u=new ae(b,g),a(u);return}if(R=="deflate"||R=="x-deflate"){let M=c.pipe(new fn);M.once("data",function(E){(E[0]&15)===8?b=b.pipe(Ye.createInflate()):b=b.pipe(Ye.createInflateRaw()),u=new ae(b,g),a(u)}),M.on("end",function(){u||(u=new ae(b,g),a(u))});return}if(R=="br"&&typeof Ye.createBrotliDecompress=="function"){b=b.pipe(Ye.createBrotliDecompress()),u=new ae(b,g),a(u);return}u=new ae(b,g),a(u)}),Ls(y,n)})}function Ws(e,t){let a;e.on("socket",function(r){a=r}),e.on("response",function(r){let n=r.headers;n["transfer-encoding"]==="chunked"&&!n["content-length"]&&r.once("close",function(o){if(a&&a.listenerCount("data")>0&&!o){let s=new Error("Premature close");s.code="ERR_STREAM_PREMATURE_CLOSE",t(s)}})})}function Ir(e,t){e.destroy?e.destroy(t):(e.emit("error",t),e.end())}qe.isRedirect=function(e){return e===301||e===302||e===303||e===307||e===308};qe.Promise=global.Promise;Un.exports=pe=qe;Object.defineProperty(pe,"__esModule",{value:!0});pe.default=pe;pe.Headers=re;pe.Request=Ne;pe.Response=ae;pe.FetchError=V;pe.AbortError=dt});var Ft=C((Je,vn)=>{var Vt=_n(),Ks=Vt.default||Vt,ba=function(e,t){return/^\/\//.test(e)&&(e="https:"+e),Ks.call(this,e,t)};ba.ponyfill=!0;vn.exports=Je=ba;Je.fetch=ba;Je.Headers=Vt.Headers;Je.Request=Vt.Request;Je.Response=Vt.Response;Je.default=ba});var Ar=C(Ia=>{"use strict";Object.defineProperty(Ia,"__esModule",{value:!0});Ia.isJSON=void 0;function Ys(e){if(e){let t=Zs(e);if(!t)return!1;if(t.subtype==="json"||t.suffix==="json"||t.suffix&&/\bjson\b/i.test(t.suffix)||t.subtype&&/\bjson\b/i.test(t.subtype))return!0}return!1}Ia.isJSON=Ys;var Js=/^([A-Za-z0-9][A-Za-z0-9!#$&^_-]{0,126})\/([A-Za-z0-9][A-Za-z0-9!#$&^_.+-]{0,126});?$/;function Zs(e){let t=e.indexOf(";"),a=t!==-1?e.slice(0,t).trim():e.trim(),r=Js.exec(a.toLowerCase().toLowerCase());if(!r)return;let n=r[1],o=r[2],i,s=o.lastIndexOf("+");return s!==-1&&(i=o.substring(s+1),o=o.substring(0,s)),{type:n,subtype:o,suffix:i}}});var Bn=C(ga=>{"use strict";Object.defineProperty(ga,"__esModule",{value:!0});ga.useFetch=void 0;var bt=require("react"),Xs=Ot(),Tn=fe(),wn=Ft(),eu=Ar(),On=Be();async function tu(e){if(!e.ok)throw new Error(e.statusText);let t=e.headers.get("content-type");return t&&(0,eu.isJSON)(t)?await e.json():await e.text()}function au(e){return{data:e,hasMore:!1}}function ru(e,t){let{parseResponse:a,mapResult:r,initialData:n,execute:o,keepPreviousData:i,onError:s,onData:u,onWillExecute:p,failureToastOptions:l,...y}=t||{},d={initialData:n,execute:o,keepPreviousData:i,onError:s,onData:u,onWillExecute:p,failureToastOptions:l},I=(0,Tn.useLatest)(a||tu),c=(0,Tn.useLatest)(r||au),S=(0,bt.useRef)(),b=(0,bt.useRef)(),g=typeof e=="function"?e({page:0}):void 0;(!S.current||typeof b.current>"u"||b.current!==g)&&(S.current=e),b.current=g;let R=(0,bt.useRef)(),f=(0,bt.useCallback)((A,h)=>async O=>{let B=await(0,wn.fetch)(A(O),{signal:R.current?.signal,...h}),v=await I.current(B);return c.current?.(v)},[I,c]),M=(0,bt.useCallback)(async(A,h)=>{let O=await(0,wn.fetch)(A,{signal:R.current?.signal,...h}),B=await I.current(O);return c.current(B)?.data},[I,c]),E=(0,bt.useMemo)(()=>b.current?f:M,[b,M,f]);return(0,Xs.useCachedPromise)(E,[S.current,y],{...d,internal_cacheKeySuffix:b.current+(0,On.hash)(c.current)+(0,On.hash)(I.current),abortable:R})}ga.useFetch=ru});var Ma=C(ne=>{"use strict";var nu=ne&&ne.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ne,"__esModule",{value:!0});ne.defaultParsing=ne.handleOutput=ne.getSpawnedResult=ne.getSpawnedPromise=void 0;var ou=require("node:buffer"),Nn=nu(require("node:stream")),iu=require("node:util"),su=require("signal-exit");function uu(e,{timeout:t}={}){let a=new Promise((s,u)=>{e.on("exit",(p,l)=>{s({exitCode:p,signal:l,timedOut:!1})}),e.on("error",p=>{u(p)}),e.stdin&&e.stdin.on("error",p=>{u(p)})});if(t===0||t===void 0)return a;let r,n=new Promise((s,u)=>{r=setTimeout(()=>{e.kill("SIGTERM"),u(Object.assign(new Error("Timed out"),{timedOut:!0,signal:"SIGTERM"}))},t)}),o=a.finally(()=>{clearTimeout(r)}),i=(0,su.onExit)(()=>{e.kill()});return Promise.race([n,o]).finally(()=>i())}ne.getSpawnedPromise=uu;var Er=class extends Error{constructor(){super("The output is too big"),this.name="MaxBufferError"}},pu=(0,iu.promisify)(Nn.default.pipeline);function lu(e){let{encoding:t}=e,a=t==="buffer",r=new Nn.default.PassThrough({objectMode:!1});t&&t!=="buffer"&&r.setEncoding(t);let n=0,o=[];return r.on("data",i=>{o.push(i),n+=i.length}),r.getBufferedValue=()=>a?Buffer.concat(o,n):o.join(""),r.getBufferedLength=()=>n,r}async function Ln(e,t){let a=lu(t);return await new Promise((r,n)=>{let o=i=>{i&&a.getBufferedLength()<=ou.constants.MAX_LENGTH&&(i.bufferedData=a.getBufferedValue()),n(i)};(async()=>{try{await pu(e,a),r()}catch(i){o(i)}})(),a.on("data",()=>{a.getBufferedLength()>1e3*1e3*80&&o(new Er)})}),a.getBufferedValue()}async function qn(e,t){e.destroy();try{return await t}catch(a){return a.bufferedData}}async function cu({stdout:e,stderr:t},{encoding:a},r){let n=Ln(e,{encoding:a}),o=Ln(t,{encoding:a});try{return await Promise.all([r,n,o])}catch(i){return Promise.all([{error:i,exitCode:null,signal:i.signal,timedOut:i.timedOut||!1},qn(e,n),qn(t,o)])}}ne.getSpawnedResult=cu;function yu(e){let t=typeof e=="string"?`
`:10,a=typeof e=="string"?"\r":13;return e[e.length-1]===t&&(e=e.slice(0,-1)),e[e.length-1]===a&&(e=e.slice(0,-1)),e}function du(e,t){return e.stripFinalNewline?yu(t):t}ne.handleOutput=du;var Su=({timedOut:e,timeout:t,signal:a,exitCode:r})=>e?`timed out after ${t} milliseconds`:a!=null?`was killed with ${a}`:r!=null?`failed with exit code ${r}`:"failed",bu=({stdout:e,stderr:t,error:a,signal:r,exitCode:n,command:o,timedOut:i,options:s,parentError:u})=>{let l=`Command ${Su({timedOut:i,timeout:s?.timeout,signal:r,exitCode:n})}: ${o}`,y=a?`${l}
${a.message}`:l,d=[y,t,e].filter(Boolean).join(`
`);return a?a.originalMessage=a.message:a=u,a.message=d,a.shortMessage=y,a.command=o,a.exitCode=n,a.signal=r,a.stdout=e,a.stderr=t,"bufferedData"in a&&delete a.bufferedData,a};function Iu({stdout:e,stderr:t,error:a,exitCode:r,signal:n,timedOut:o,command:i,options:s,parentError:u}){if(a||r!==0||n!==null)throw bu({error:a,exitCode:r,signal:n,stdout:e,stderr:t,command:i,timedOut:o,options:s,parentError:u});return e}ne.defaultParsing=Iu});var Fn=C(It=>{"use strict";var gu=It&&It.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(It,"__esModule",{value:!0});It.useExec=void 0;var Mu=gu(require("node:child_process")),Vn=require("react"),mu=Ot(),Ru=fe(),jt=Ma(),fu=/ +/g;function Au(e,t){if(t)return[e,...t];let a=[];for(let r of e.trim().split(fu)){let n=a[a.length-1];n&&n.endsWith("\\")?a[a.length-1]=`${n.slice(0,-1)} ${r}`:a.push(r)}return a}function Eu(e,t,a){let{parseOutput:r,input:n,onData:o,onWillExecute:i,initialData:s,execute:u,keepPreviousData:p,onError:l,failureToastOptions:y,...d}=Array.isArray(t)?a||{}:t||{},I={initialData:s,execute:u,keepPreviousData:p,onError:l,onData:o,onWillExecute:i,failureToastOptions:y},c=(0,Vn.useRef)(),S=(0,Ru.useLatest)(r||jt.defaultParsing),b=(0,Vn.useCallback)(async(g,R,f,M)=>{let[E,...A]=Au(g,R),h=[E,...A].join(" "),O={stripFinalNewline:!0,...f,timeout:f?.timeout||1e4,signal:c.current?.signal,encoding:f?.encoding===null?"buffer":f?.encoding||"utf8",env:{PATH:"/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin",...process.env,...f?.env}},B=Mu.default.spawn(E,A,O),v=(0,jt.getSpawnedPromise)(B,O);M&&B.stdin.end(M);let[{error:x,exitCode:G,signal:k,timedOut:P},F,We]=await(0,jt.getSpawnedResult)(B,O,v),Ke=(0,jt.handleOutput)(O,F),ur=(0,jt.handleOutput)(O,We);return S.current({stdout:Ke,stderr:ur,error:x,exitCode:G,signal:k,timedOut:P,command:h,options:O,parentError:new Error})},[S]);return(0,mu.useCachedPromise)(b,[e,Array.isArray(t)?t:[],d,n],{...I,abortable:c})}It.useExec=Eu});var Hn=C(gt=>{"use strict";var Ra=gt&&gt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(gt,"__esModule",{value:!0});gt.useStreamJSON=void 0;var Pu=require("@raycast/api"),jn=Ra(Ft()),Ht=require("node:fs"),Pr=require("node:fs/promises"),ma=require("node:path"),kn=require("node:stream/promises"),kt=require("react"),Cu=Ra(require("stream-chain")),hu=require("stream-json"),xu=Ra(require("stream-json/filters/Pick")),Du=Ra(require("stream-json/streamers/StreamArray")),zn=Ar(),Uu=Ot(),_u=Be();async function zt(e,t,a){if(typeof e=="object"||e.startsWith("http://")||e.startsWith("https://"))return await vu(e,t,a);if(e.startsWith("file://"))return await Tu((0,ma.normalize)(decodeURIComponent(new URL(e).pathname)),t,a?.signal?a.signal:void 0);throw new Error("Only HTTP(S) or file URLs are supported")}async function vu(e,t,a){let r=await(0,jn.default)(e,a);if(!r.ok)throw new Error("Failed to fetch URL");if(!(0,zn.isJSON)(r.headers.get("content-type")))throw new Error("URL does not return JSON");if(!r.body)throw new Error("Failed to retrieve expected JSON content: Response body is missing or inaccessible.");await(0,kn.pipeline)(r.body,(0,Ht.createWriteStream)(t),a?.signal?{signal:a.signal}:void 0)}async function Tu(e,t,a){await(0,kn.pipeline)((0,Ht.createReadStream)(e),(0,Ht.createWriteStream)(t),a?{signal:a}:void 0)}async function wu(e,t,a,r,n){let o=(0,ma.join)(t,a);try{await(0,Pr.stat)(t)}catch{(0,Ht.mkdirSync)(t,{recursive:!0}),await zt(e,o,n);return}if(r){await zt(e,o,n);return}let i;try{i=await(0,Pr.stat)(o)}catch{await zt(e,o,n);return}if(typeof e=="object"||e.startsWith("http://")||e.startsWith("https://")){let s=await(0,jn.default)(e,{...n,method:"HEAD"});if(!s.ok)throw new Error("Could not fetch URL");if(!(0,zn.isJSON)(s.headers.get("content-type")))throw new Error("URL does not return JSON");let u=Date.parse(s.headers.get("last-modified")??"");if(i.size===0||Number.isNaN(u)||u>i.mtimeMs){await zt(e,o,n);return}}else if(e.startsWith("file://"))try{(await(0,Pr.stat)((0,ma.normalize)(decodeURIComponent(new URL(e).pathname)))).mtimeMs>i.mtimeMs&&await zt(e,o,n)}catch{throw new Error("Source file could not be read")}else throw new Error("Only HTTP(S) or file URLs are supported")}async function*Ou(e,t,a,r,n,o){let i=[],s=new Cu.default([(0,Ht.createReadStream)(e),r?xu.default.withParser({filter:r}):(0,hu.parser)(),new Du.default,u=>o?.(u.value)??u.value]);a?.addEventListener("abort",()=>{s.destroy()});try{for await(let u of s){if(a?.aborted)return[];(!n||n(u))&&i.push(u),i.length>=t&&(yield i,i=[])}}catch(u){throw s.destroy(),u}return i.length>0&&(yield i),[]}function Bu(e,t){let{initialData:a,execute:r,keepPreviousData:n,onError:o,onData:i,onWillExecute:s,failureToastOptions:u,dataPath:p,filter:l,transform:y,pageSize:d=20,...I}=t??{},c=(0,kt.useRef)(),S=(0,kt.useRef)(),b={initialData:a,execute:r,keepPreviousData:n,onError:o,onData:i,onWillExecute:s,failureToastOptions:u},g=(0,kt.useRef)(null),R=(0,kt.useRef)(null),f=(0,kt.useRef)(!1);return(0,Uu.useCachedPromise)((M,E,A,h,O,B)=>async({page:v})=>{let x=(0,_u.hash)(M)+".json",G=Pu.environment.supportPath;if(v===0){R.current?.abort(),R.current=new AbortController;let F=(0,ma.join)(G,x),We=!!(c.current&&c.current!==M&&S.current&&S.current===F);c.current=M,S.current=F,await wu(M,G,x,We,{...A,signal:R.current?.signal}),g.current=Ou(F,E,R.current?.signal,h,O,B)}if(!g.current)return{hasMore:f.current,data:[]};let{value:k,done:P}=await g.current.next();return f.current=!P,{hasMore:f.current,data:k??[]}},[e,d,I,p,l,y],b)}gt.useStreamJSON=Bu});var hr=C(de=>{"use strict";var Cr=de&&de.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(de,"__esModule",{value:!0});de.baseExecuteSQL=de.isPermissionError=de.PermissionError=void 0;var Lu=require("node:fs"),fa=require("node:fs/promises"),qu=Cr(require("node:os")),Gn=Cr(require("node:child_process")),$n=Cr(require("node:path")),Aa=Ma(),Nu=Be(),Pa=class extends Error{constructor(t){super(t),this.name="PermissionError"}};de.PermissionError=Pa;function Vu(e){return e instanceof Error&&e.name==="PermissionError"}de.isPermissionError=Vu;async function Fu(e,t,a){if(!(0,Lu.existsSync)(e))throw new Error("The database does not exist");let r=a?.signal,n,o=Gn.default.spawn("sqlite3",["--json","--readonly",e,t],{signal:r}),i=(0,Aa.getSpawnedPromise)(o),[{error:s,exitCode:u,signal:p},l,y]=await(0,Aa.getSpawnedResult)(o,{encoding:"utf-8"},i);if(Ea(r),y.match("(5)")||y.match("(14)")){if(!n){let d=$n.default.join(qu.default.tmpdir(),"useSQL",(0,Nu.hash)(e));await(0,fa.mkdir)(d,{recursive:!0}),Ea(r),n=$n.default.join(d,"db.db"),await(0,fa.copyFile)(e,n),await(0,fa.writeFile)(n+"-shm",""),await(0,fa.writeFile)(n+"-wal",""),Ea(r)}o=Gn.default.spawn("sqlite3",["--json","--readonly","--vfs","unix-none",n,t],{signal:r}),i=(0,Aa.getSpawnedPromise)(o),[{error:s,exitCode:u,signal:p},l,y]=await(0,Aa.getSpawnedResult)(o,{encoding:"utf-8"},i),Ea(r)}if(s||u!==0||p!==null)throw y.includes("authorization denied")?new Pa("You do not have permission to access the database."):new Error(y||"Unknown error");return JSON.parse(l.trim()||"[]")}de.baseExecuteSQL=Fu;function Ea(e){if(e?.aborted){let t=new Error("aborted");throw t.name="AbortError",t}}});var Wn=C(Mt=>{"use strict";var ju=Mt&&Mt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Mt,"__esModule",{value:!0});Mt.useSQL=void 0;var Se=require("react/jsx-runtime"),z=require("@raycast/api"),ku=require("node:fs"),zu=ju(require("node:os")),Ca=require("react"),Hu=pt(),Gu=fe(),$u=vt(),xr=hr();function Qu(e,t,a){let{permissionPriming:r,...n}=a||{},[o,i]=(0,Ca.useState)(),s=(0,Gu.useLatest)(a||{}),u=(0,Ca.useRef)(),p=(0,Ca.useCallback)(y=>{console.error(y);let d=y instanceof Error&&y.message.includes("authorization denied")?new xr.PermissionError("You do not have permission to access the database."):y;(0,xr.isPermissionError)(d)?i((0,Se.jsx)(Wu,{priming:s.current.permissionPriming})):s.current.onError?s.current.onError(d):z.environment.launchType!==z.LaunchType.Background&&(0,$u.showFailureToast)(d,{title:"Cannot query the data"})},[s]),l=(0,Ca.useMemo)(()=>{if(!(0,ku.existsSync)(e))throw new Error("The database does not exist");return async(y,d)=>{let I=u.current?.signal;return(0,xr.baseExecuteSQL)(y,d,{signal:I})}},[e]);return{...(0,Hu.usePromise)(l,[e,t],{...n,onError:p}),permissionView:o}}Mt.useSQL=Qu;var Qn=parseInt(zu.default.release().split(".")[0])>=22,Dr=Qn?"Settings":"Preferences";function Wu(e){let t=Qn?{title:"Open System Settings -> Privacy",target:"x-apple.systempreferences:com.apple.preference.security?Privacy_AllFiles"}:{title:"Open System Preferences -> Security",target:"x-apple.systempreferences:com.apple.preference.security?Privacy_AllFiles"};return z.environment.commandMode==="menu-bar"?(0,Se.jsxs)(z.MenuBarExtra,{icon:z.Icon.Warning,title:z.environment.commandName,children:[(0,Se.jsx)(z.MenuBarExtra.Item,{title:"Raycast needs full disk access",tooltip:`You can revert this access in ${Dr} whenever you want`}),e.priming?(0,Se.jsx)(z.MenuBarExtra.Item,{title:e.priming,tooltip:`You can revert this access in ${Dr} whenever you want`}):null,(0,Se.jsx)(z.MenuBarExtra.Separator,{}),(0,Se.jsx)(z.MenuBarExtra.Item,{title:t.title,onAction:()=>(0,z.open)(t.target)})]}):(0,Se.jsx)(z.List,{children:(0,Se.jsx)(z.List.EmptyView,{icon:{source:{light:"https://raycast.com/uploads/extensions-utils-security-permissions-light.png",dark:"https://raycast.com/uploads/extensions-utils-security-permissions-dark.png"}},title:"Raycast needs full disk access.",description:`${e.priming?e.priming+`
`:""}You can revert this access in ${Dr} whenever you want.`,actions:(0,Se.jsx)(z.ActionPanel,{children:(0,Se.jsx)(z.Action.Open,{...t})})})})}});var Yn=C(mt=>{"use strict";Object.defineProperty(mt,"__esModule",{value:!0});mt.useForm=mt.FormValidation=void 0;var Ce=require("react"),Kn=fe(),_r;(function(e){e.Required="required"})(_r||(mt.FormValidation=_r={}));function Ur(e,t){if(e){if(typeof e=="function")return e(t);if(e===_r.Required){let a=typeof t<"u"&&t!==null;if(a)switch(typeof t){case"string":a=t.length>0;break;case"object":Array.isArray(t)?a=t.length>0:t instanceof Date&&(a=t.getTime()>0);break;default:break}if(!a)return"The item is required"}}}function Ku(e){let{onSubmit:t,validation:a,initialValues:r={}}=e,[n,o]=(0,Ce.useState)(r),[i,s]=(0,Ce.useState)({}),u=(0,Ce.useRef)({}),p=(0,Kn.useLatest)(a||{}),l=(0,Kn.useLatest)(t),y=(0,Ce.useCallback)(g=>{u.current[g]?.focus()},[u]),d=(0,Ce.useCallback)(async g=>{let R=!1;for(let[M,E]of Object.entries(p.current)){let A=Ur(E,g[M]);A&&(R||(R={},y(M)),R[M]=A)}if(R)return s(R),!1;let f=await l.current(g);return typeof f=="boolean"?f:!0},[p,l,y]),I=(0,Ce.useCallback)((g,R)=>{s(f=>({...f,[g]:R}))},[s]),c=(0,Ce.useCallback)(function(g,R){o(f=>({...f,[g]:typeof R=="function"?R(f[g]):R}))},[o]),S=(0,Ce.useMemo)(()=>new Proxy({},{get(g,R){let f=p.current[R],M=n[R];return{onChange(E){i[R]&&(Ur(f,E)||I(R,void 0)),c(R,E)},onBlur(E){let A=Ur(f,E.target.value);A&&I(R,A)},error:i[R],id:R,value:typeof M>"u"?null:M,ref:E=>{u.current[R]=E}}}}),[i,p,I,n,u,c]),b=(0,Ce.useCallback)(g=>{s({}),Object.entries(u.current).forEach(([R,f])=>{g?.[R]||f?.reset()}),g&&o(g)},[o,s,u]);return{handleSubmit:d,setValidationError:I,setValue:c,values:n,itemProps:S,focus:y,reset:b}}mt.useForm=Ku});var Zn=C(ha=>{"use strict";Object.defineProperty(ha,"__esModule",{value:!0});ha.useAI=void 0;var Jn=require("react"),Yu=require("@raycast/api"),Ju=pt();function Zu(e,t={}){let{creativity:a,stream:r,model:n,...o}=t,[i,s]=(0,Jn.useState)(""),u=(0,Jn.useRef)(),{isLoading:p,error:l,revalidate:y}=(0,Ju.usePromise)(async(d,I,c)=>{s("");let S=Yu.AI.ask(d,{creativity:I,model:n,signal:u.current?.signal});c===!1?s(await S):(S.on("data",b=>{s(g=>g+b)}),await S)},[e,a,r],{...o,abortable:u});return{isLoading:p,data:i,error:l,revalidate:y}}ha.useAI=Zu});var to=C(xa=>{"use strict";Object.defineProperty(xa,"__esModule",{value:!0});xa.useFrecencySorting=void 0;var vr=require("react"),Xn=fe(),Xu=ca(),ep=10,eo=1440*60*1e3,tp=Math.log(2)/(ep*eo),ap={Default:100,Embed:0,Bookmark:140};function rp(e){let t=Date.now(),a=e?e.lastVisited:0,r=e?e.frecency:0,n=(t-a)/eo,o=ap.Default*Math.exp(-tp*n),i=r+o;return{lastVisited:t,frecency:i}}var np=e=>{if(process.env.NODE_ENV!=="production"&&(typeof e!="object"||!e||!("id"in e)||typeof e.id!="string"))throw new Error("Specify a key function or make sure your items have an 'id' property");return e.id};function op(e,t){let a=(0,Xn.useLatest)(t?.key||np),r=(0,Xn.useLatest)(t?.sortUnvisited),[n,o]=(0,Xu.useCachedState)(`raycast_frecency_${t?.namespace}`,{}),i=(0,vr.useCallback)(async function(l){let y=a.current(l);o(d=>{let I=d[y],c=rp(I);return{...d,[y]:c}})},[a,o]),s=(0,vr.useCallback)(async function(l){let y=a.current(l);o(d=>{let I={...d};return delete I[y],I})},[a,o]);return{data:(0,vr.useMemo)(()=>e?e.sort((p,l)=>{let y=n[a.current(p)],d=n[a.current(l)];return y&&!d?-1:!y&&d?1:y&&d?d.frecency-y.frecency:r.current?r.current(p,l):0}):[],[n,e,a,r]),visitItem:i,resetRanking:s}}xa.useFrecencySorting=op});var no=C(Da=>{"use strict";Object.defineProperty(Da,"__esModule",{value:!0});Da.useLocalStorage=void 0;var Tr=require("@raycast/api"),ao=vt(),ro=Be(),ip=pt();function sp(e,t){let{data:a,isLoading:r,mutate:n}=(0,ip.usePromise)(async s=>{let u=await Tr.LocalStorage.getItem(s);return typeof u<"u"?JSON.parse(u,ro.reviver):t},[e]);async function o(s){try{await n(Tr.LocalStorage.setItem(e,JSON.stringify(s,ro.replacer)),{optimisticUpdate(u){return u}})}catch(u){await(0,ao.showFailureToast)(u,{title:"Failed to set value in local storage"})}}async function i(){try{await n(Tr.LocalStorage.removeItem(e),{optimisticUpdate(){}})}catch(s){await(0,ao.showFailureToast)(s,{title:"Failed to remove value from local storage"})}}return{value:a,setValue:o,removeValue:i,isLoading:r}}Da.useLocalStorage=sp});var po=C(Rt=>{"use strict";Object.defineProperty(Rt,"__esModule",{value:!0});Rt.slightlyLighterColor=Rt.slightlyDarkerColor=void 0;function up(e){let t=0,a=0,r=0;if(e.length===4)t=parseInt(`${e[1]}${e[1]}`,16),a=parseInt(`${e[2]}${e[2]}`,16),r=parseInt(`${e[3]}${e[3]}`,16);else if(e.length===7)t=parseInt(`${e[1]}${e[2]}`,16),a=parseInt(`${e[3]}${e[4]}`,16),r=parseInt(`${e[5]}${e[6]}`,16);else throw new Error(`Malformed hex color: ${e}`);return{r:t,g:a,b:r}}function pp({r:e,g:t,b:a}){let r=e.toString(16),n=t.toString(16),o=a.toString(16);return r.length===1&&(r=`0${r}`),n.length===1&&(n=`0${n}`),o.length===1&&(o=`0${o}`),`#${r}${n}${o}`}function lp({r:e,g:t,b:a}){e/=255,t/=255,a/=255;let r=Math.min(e,t,a),n=Math.max(e,t,a),o=n-r,i=0,s=0,u=0;return o===0?i=0:n===e?i=(t-a)/o%6:n===t?i=(a-e)/o+2:i=(e-t)/o+4,i=Math.round(i*60),i<0&&(i+=360),u=(n+r)/2,s=o===0?0:o/(1-Math.abs(2*u-1)),s=+(s*100).toFixed(1),u=+(u*100).toFixed(1),{h:i,s,l:u}}function cp({h:e,s:t,l:a}){t/=100,a/=100;let r=(1-Math.abs(2*a-1))*t,n=r*(1-Math.abs(e/60%2-1)),o=a-r/2,i=0,s=0,u=0;return e>=0&&e<60?(i=r,s=n,u=0):e>=60&&e<120?(i=n,s=r,u=0):e>=120&&e<180?(i=0,s=r,u=n):e>=180&&e<240?(i=0,s=n,u=r):e>=240&&e<300?(i=n,s=0,u=r):e>=300&&e<360&&(i=r,s=0,u=n),i=Math.round((i+o)*255),s=Math.round((s+o)*255),u=Math.round((u+o)*255),{r:i,g:s,b:u}}function oo(e){return lp(up(e))}function io(e){return pp(cp(e))}function so(e,t,a){return t<a?e<t?t:e>a?a:e:e<a?a:e>t?t:e}var uo=12;function yp(e){let t=oo(e);return io({h:t.h,s:t.s,l:so(t.l-uo,0,100)})}Rt.slightlyDarkerColor=yp;function dp(e){let t=oo(e);return io({h:t.h,s:t.s,l:so(t.l+uo,0,100)})}Rt.slightlyLighterColor=dp});var yo=C(Ua=>{"use strict";Object.defineProperty(Ua,"__esModule",{value:!0});Ua.getAvatarIcon=void 0;var lo=po();function ft(e,t){let a=e.charCodeAt(t);if(Number.isNaN(a))return["",t];if(a<55296||a>57343)return[e.charAt(t),t];if(55296<=a&&a<=56319){if(e.length<=t+1)throw new Error("High surrogate without following low surrogate");let n=e.charCodeAt(t+1);if(56320>n||n>57343)throw new Error("High surrogate without following low surrogate");return[e.charAt(t)+e.charAt(t+1),t+1]}if(t===0)throw new Error("Low surrogate without preceding high surrogate");let r=e.charCodeAt(t-1);if(55296>r||r>56319)throw new Error("Low surrogate without preceding high surrogate");return[e.charAt(t+1),t+1]}var co=["#DC829A","#D64854","#D47600","#D36CDD","#52A9E4","#7871E8","#70920F","#43B93A","#EB6B3E","#26B795","#D85A9B","#A067DC","#BD9500","#5385D9"];function Sp(e,t){let a=e.trim().split(" "),r;if(a.length==1&&ft(a[0],0)[0])r=ft(a[0],0)[0];else if(a.length>1){let u=ft(a[0],0)[0]||"",p=ft(a[a.length-1],0)[0]??"";r=u+p}else r="";let n;if(t?.background)n=t?.background;else{let u=0,[p,l]=ft(r,0);for(;p;)u+=p.charCodeAt(0),[p,l]=ft(r,l+1);let y=u%co.length;n=co[y]}let i=50-0;return`data:image/svg+xml,${`<svg width="100px" height="100px">
  ${t?.gradient!==!1?`<defs>
      <linearGradient id="Gradient" x1="0.25" x2="0.75" y1="0" y2="1">
        <stop offset="0%" stop-color="${(0,lo.slightlyLighterColor)(n)}"/>
        <stop offset="50%" stop-color="${n}"/>
        <stop offset="100%" stop-color="${(0,lo.slightlyDarkerColor)(n)}"/>
      </linearGradient>
  </defs>`:""}
      <circle cx="50" cy="50" r="${i}" fill="${t?.gradient!==!1?"url(#Gradient)":n}" />
      ${r?`<text x="50" y="80" font-size="${i-1}" font-family="Inter, sans-serif" text-anchor="middle" fill="white">${r.toUpperCase()}</text>`:""}
    </svg>
  `.replaceAll(`
`,"")}`}Ua.getAvatarIcon=Sp});var bo=C(_a=>{"use strict";Object.defineProperty(_a,"__esModule",{value:!0});_a.getFavicon=void 0;var So=require("@raycast/api"),bp=require("url");function Ip(e,t){try{let r=(typeof e=="string"?new bp.URL(e):e).hostname;return{source:`https://www.google.com/s2/favicons?sz=${t?.size??64}&domain=${r}`,fallback:t?.fallback??So.Icon.Link,mask:t?.mask}}catch(a){return console.error(a),So.Icon.Link}}_a.getFavicon=Ip});var Mo=C(va=>{"use strict";Object.defineProperty(va,"__esModule",{value:!0});va.getProgressIcon=void 0;var Io=require("@raycast/api");function go(e,t,a,r){let n=(r-90)*Math.PI/180;return{x:e+a*Math.cos(n),y:t+a*Math.sin(n)}}function gp(e,t,a,r,n){let o=go(e,t,a,n),i=go(e,t,a,r),s=n-r<=180?"0":"1";return["M",o.x,o.y,"A",a,a,0,s,0,i.x,i.y].join(" ")}function Mp(e,t=Io.Color.Red,a){let r=a?.background||(Io.environment.appearance==="light"?"black":"white"),n=a?.backgroundOpacity||.1,o=10,s=50-5-o/2;return`data:image/svg+xml,${`<svg width="100px" height="100px">
      <circle cx="50" cy="50" r="${s}" stroke-width="${o}" stroke="${e<1?r:t}" opacity="${e<1?n:"1"}" fill="none" />
      ${e>0&&e<1?`<path d="${gp(50,50,s,0,e*360)}" stroke="${t}" stroke-width="${o}" fill="none" />`:""}
    </svg>
  `.replaceAll(`
`,"")}`}va.getProgressIcon=Mp});var mo=C(he=>{"use strict";var mp=he&&he.__createBinding||(Object.create?(function(e,t,a,r){r===void 0&&(r=a);var n=Object.getOwnPropertyDescriptor(t,a);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,n)}):(function(e,t,a,r){r===void 0&&(r=a),e[r]=t[a]})),wr=he&&he.__exportStar||function(e,t){for(var a in e)a!=="default"&&!Object.prototype.hasOwnProperty.call(t,a)&&mp(t,e,a)};Object.defineProperty(he,"__esModule",{value:!0});wr(yo(),he);wr(bo(),he);wr(Mo(),he)});var Ro=C(j=>{"use strict";Object.defineProperty(j,"__esModule",{value:!0});j.zoomService=j.slackService=j.linearService=j.jiraService=j.googleService=j.githubService=j.asanaService=void 0;var H=require("@raycast/api"),Ze=Or(),Ta={asana:"1191201745684312",github:"7235fe8d42157f1f38c0",linear:"c8ff37b9225c3c9aefd7d66ea0e5b6f1",slack:"851756884692.5546927290212"},Ve=e=>`data:image/svg+xml,${e}`,Xe={asana:Ve('<svg xmlns="http://www.w3.org/2000/svg" width="251" height="232" fill="none"><path fill="#F06A6A" d="M179.383 54.373c0 30.017-24.337 54.374-54.354 54.374-30.035 0-54.373-24.338-54.373-54.374C70.656 24.338 94.993 0 125.029 0c30.017 0 54.354 24.338 54.354 54.373ZM54.393 122.33C24.376 122.33.02 146.668.02 176.685c0 30.017 24.337 54.373 54.373 54.373 30.035 0 54.373-24.338 54.373-54.373 0-30.017-24.338-54.355-54.373-54.355Zm141.253 0c-30.035 0-54.373 24.338-54.373 54.374 0 30.035 24.338 54.373 54.373 54.373 30.017 0 54.374-24.338 54.374-54.373 0-30.036-24.338-54.374-54.374-54.374Z"/></svg>'),github:{source:Ve('<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>'),tintColor:H.Color.PrimaryText},google:Ve('<svg xmlns="http://www.w3.org/2000/svg" style="display:block" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/><path fill="none" d="M0 0h48v48H0z"/></svg>'),jira:Ve('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="2361" height="2500" viewBox="2.59 0 214.091 224"><linearGradient id="a" x1="102.4" x2="56.15" y1="218.63" y2="172.39" gradientTransform="matrix(1 0 0 -1 0 264)" gradientUnits="userSpaceOnUse"><stop offset=".18" stop-color="#0052cc"/><stop offset="1" stop-color="#2684ff"/></linearGradient><linearGradient xlink:href="#a" id="b" x1="114.65" x2="160.81" y1="85.77" y2="131.92"/><path fill="#2684ff" d="M214.06 105.73 117.67 9.34 108.33 0 35.77 72.56 2.59 105.73a8.89 8.89 0 0 0 0 12.54l66.29 66.29L108.33 224l72.55-72.56 1.13-1.12 32.05-32a8.87 8.87 0 0 0 0-12.59zm-105.73 39.39L75.21 112l33.12-33.12L141.44 112z"/><path fill="url(#a)" d="M108.33 78.88a55.75 55.75 0 0 1-.24-78.61L35.62 72.71l39.44 39.44z"/><path fill="url(#b)" d="m141.53 111.91-33.2 33.21a55.77 55.77 0 0 1 0 78.86L181 151.35z"/></svg>'),linear:{source:{light:Ve('<svg xmlns="http://www.w3.org/2000/svg" fill="#222326" width="200" height="200" viewBox="0 0 100 100"><path d="M1.22541 61.5228c-.2225-.9485.90748-1.5459 1.59638-.857L39.3342 97.1782c.6889.6889.0915 1.8189-.857 1.5964C20.0515 94.4522 5.54779 79.9485 1.22541 61.5228ZM.00189135 46.8891c-.01764375.2833.08887215.5599.28957165.7606L52.3503 99.7085c.2007.2007.4773.3075.7606.2896 2.3692-.1476 4.6938-.46 6.9624-.9259.7645-.157 1.0301-1.0963.4782-1.6481L2.57595 39.4485c-.55186-.5519-1.49117-.2863-1.648174.4782-.465915 2.2686-.77832 4.5932-.92588465 6.9624ZM4.21093 29.7054c-.16649.3738-.08169.8106.20765 1.1l64.77602 64.776c.2894.2894.7262.3742 1.1.2077 1.7861-.7956 3.5171-1.6927 5.1855-2.684.5521-.328.6373-1.0867.1832-1.5407L8.43566 24.3367c-.45409-.4541-1.21271-.3689-1.54074.1832-.99132 1.6684-1.88843 3.3994-2.68399 5.1855ZM12.6587 18.074c-.3701-.3701-.393-.9637-.0443-1.3541C21.7795 6.45931 35.1114 0 49.9519 0 77.5927 0 100 22.4073 100 50.0481c0 14.8405-6.4593 28.1724-16.7199 37.3375-.3903.3487-.984.3258-1.3542-.0443L12.6587 18.074Z"/></svg>'),dark:Ve('<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="200" height="200" viewBox="0 0 100 100"><path d="M1.22541 61.5228c-.2225-.9485.90748-1.5459 1.59638-.857L39.3342 97.1782c.6889.6889.0915 1.8189-.857 1.5964C20.0515 94.4522 5.54779 79.9485 1.22541 61.5228ZM.00189135 46.8891c-.01764375.2833.08887215.5599.28957165.7606L52.3503 99.7085c.2007.2007.4773.3075.7606.2896 2.3692-.1476 4.6938-.46 6.9624-.9259.7645-.157 1.0301-1.0963.4782-1.6481L2.57595 39.4485c-.55186-.5519-1.49117-.2863-1.648174.4782-.465915 2.2686-.77832 4.5932-.92588465 6.9624ZM4.21093 29.7054c-.16649.3738-.08169.8106.20765 1.1l64.77602 64.776c.2894.2894.7262.3742 1.1.2077 1.7861-.7956 3.5171-1.6927 5.1855-2.684.5521-.328.6373-1.0867.1832-1.5407L8.43566 24.3367c-.45409-.4541-1.21271-.3689-1.54074.1832-.99132 1.6684-1.88843 3.3994-2.68399 5.1855ZM12.6587 18.074c-.3701-.3701-.393-.9637-.0443-1.3541C21.7795 6.45931 35.1114 0 49.9519 0 77.5927 0 100 22.4073 100 50.0481c0 14.8405-6.4593 28.1724-16.7199 37.3375-.3903.3487-.984.3258-1.3542-.0443L12.6587 18.074Z" /></svg>')}},slack:Ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="73 73 124 124"><style>.st0{fill:#e01e5a}.st1{fill:#36c5f0}.st2{fill:#2eb67d}.st3{fill:#ecb22e}</style><path d="M99.4 151.2c0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9h12.9v12.9zM105.9 151.2c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v32.3c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9v-32.3z" class="st0"/><path d="M118.8 99.4c-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v12.9h-12.9zM118.8 105.9c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H86.5c-7.1 0-12.9-5.8-12.9-12.9s5.8-12.9 12.9-12.9h32.3z" class="st1"/><path d="M170.6 118.8c0-7.1 5.8-12.9 12.9-12.9 7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9h-12.9v-12.9zM164.1 118.8c0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9V86.5c0-7.1 5.8-12.9 12.9-12.9 7.1 0 12.9 5.8 12.9 12.9v32.3z" class="st2"/><path d="M151.2 170.6c7.1 0 12.9 5.8 12.9 12.9 0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.9-5.8-12.9-12.9v-12.9h12.9zM151.2 164.1c-7.1 0-12.9-5.8-12.9-12.9 0-7.1 5.8-12.9 12.9-12.9h32.3c7.1 0 12.9 5.8 12.9 12.9 0 7.1-5.8 12.9-12.9 12.9h-32.3z" class="st3"/></svg>'),zoom:Ve('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 351.845 80"><path d="M73.786 78.835H10.88A10.842 10.842 0 0 1 .833 72.122a10.841 10.841 0 0 1 2.357-11.85L46.764 16.7h-31.23C6.954 16.699 0 9.744 0 1.165h58.014c4.414 0 8.357 2.634 10.046 6.712a10.843 10.843 0 0 1-2.356 11.85L22.13 63.302h36.122c8.58 0 15.534 6.955 15.534 15.534Zm278.059-48.544C351.845 13.588 338.256 0 321.553 0c-8.934 0-16.975 3.89-22.524 10.063C293.48 3.89 285.44 0 276.505 0c-16.703 0-30.291 13.588-30.291 30.291v48.544c8.579 0 15.534-6.955 15.534-15.534v-33.01c0-8.137 6.62-14.757 14.757-14.757s14.757 6.62 14.757 14.757v33.01c0 8.58 6.955 15.534 15.534 15.534V30.291c0-8.137 6.62-14.757 14.757-14.757s14.758 6.62 14.758 14.757v33.01c0 8.58 6.954 15.534 15.534 15.534V30.291ZM238.447 40c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.908-40 40-40 40 17.909 40 40Zm-15.534 0c0-13.512-10.954-24.466-24.466-24.466S173.98 26.488 173.98 40s10.953 24.466 24.466 24.466S222.913 53.512 222.913 40Zm-70.68 0c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.909-40 40-40 40 17.909 40 40Zm-15.534 0c0-13.512-10.954-24.466-24.466-24.466S87.767 26.488 87.767 40s10.954 24.466 24.466 24.466S136.699 53.512 136.699 40Z" style="fill:#0b5cff"/></svg>')},Rp=e=>new Ze.OAuthService({client:new H.OAuth.PKCEClient({redirectMethod:H.OAuth.RedirectMethod.Web,providerName:"Asana",providerIcon:Xe.asana,providerId:"asana",description:"Connect your Asana account"}),clientId:e.clientId??Ta.asana,authorizeUrl:e.authorizeUrl??"https://asana.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://asana.oauth.raycast.com/token",refreshTokenUrl:e.refreshTokenUrl??"https://asana.oauth.raycast.com/refresh-token",scope:e.scope,personalAccessToken:e.personalAccessToken,onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});j.asanaService=Rp;var fp=e=>new Ze.OAuthService({client:new H.OAuth.PKCEClient({redirectMethod:H.OAuth.RedirectMethod.Web,providerName:"GitHub",providerIcon:Xe.github,providerId:"github",description:"Connect your GitHub account"}),clientId:e.clientId??Ta.github,authorizeUrl:e.authorizeUrl??"https://github.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://github.oauth.raycast.com/token",refreshTokenUrl:e.refreshTokenUrl??"https://github.oauth.raycast.com/refresh-token",scope:e.scope,personalAccessToken:e.personalAccessToken,onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});j.githubService=fp;var Ap=e=>new Ze.OAuthService({client:new H.OAuth.PKCEClient({redirectMethod:H.OAuth.RedirectMethod.AppURI,providerName:"Google",providerIcon:Xe.google,providerId:"google",description:"Connect your Google account"}),clientId:e.clientId,authorizeUrl:e.authorizeUrl??"https://accounts.google.com/o/oauth2/v2/auth",tokenUrl:e.tokenUrl??"https://oauth2.googleapis.com/token",refreshTokenUrl:e.tokenUrl,scope:e.scope,personalAccessToken:e.personalAccessToken,bodyEncoding:e.bodyEncoding??"url-encoded",onAuthorize:e.onAuthorize,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});j.googleService=Ap;var Ep=e=>new Ze.OAuthService({client:new H.OAuth.PKCEClient({redirectMethod:H.OAuth.RedirectMethod.Web,providerName:"Jira",providerIcon:Xe.jira,providerId:"jira",description:"Connect your Jira account"}),clientId:e.clientId,authorizeUrl:e.authorizeUrl??"https://auth.atlassian.com/authorize",tokenUrl:e.tokenUrl??"https://auth.atlassian.com/oauth/token",refreshTokenUrl:e.refreshTokenUrl,scope:e.scope,personalAccessToken:e.personalAccessToken,onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});j.jiraService=Ep;var Pp=e=>new Ze.OAuthService({client:new H.OAuth.PKCEClient({redirectMethod:H.OAuth.RedirectMethod.Web,providerName:"Linear",providerIcon:Xe.linear,providerId:"linear",description:"Connect your Linear account"}),clientId:e.clientId??Ta.linear,authorizeUrl:e.authorizeUrl??"https://linear.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://linear.oauth.raycast.com/token",refreshTokenUrl:e.refreshTokenUrl??"https://linear.oauth.raycast.com/refresh-token",scope:e.scope,extraParameters:{actor:"user"},onAuthorize:e.onAuthorize,bodyEncoding:e.bodyEncoding,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});j.linearService=Pp;var Cp=e=>new Ze.OAuthService({client:new H.OAuth.PKCEClient({redirectMethod:H.OAuth.RedirectMethod.Web,providerName:"Slack",providerIcon:Xe.slack,providerId:"slack",description:"Connect your Slack account"}),clientId:e.clientId??Ta.slack,authorizeUrl:e.authorizeUrl??"https://slack.oauth.raycast.com/authorize",tokenUrl:e.tokenUrl??"https://slack.oauth.raycast.com/token",refreshTokenUrl:e.tokenUrl??"https://slack.oauth.raycast.com/refresh-token",scope:"",extraParameters:{user_scope:e.scope},personalAccessToken:e.personalAccessToken,bodyEncoding:e.tokenUrl?e.bodyEncoding??"url-encoded":"json",onAuthorize:e.onAuthorize,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser??(t=>({access_token:t.authed_user.access_token,scope:t.authed_user.scope}))});j.slackService=Cp;var hp=e=>new Ze.OAuthService({client:new H.OAuth.PKCEClient({redirectMethod:H.OAuth.RedirectMethod.Web,providerName:"Zoom",providerIcon:Xe.zoom,providerId:"zoom",description:"Connect your Zoom account"}),clientId:e.clientId,authorizeUrl:e.authorizeUrl??"https://zoom.us/oauth/authorize",tokenUrl:e.tokenUrl??"https://zoom.us/oauth/token",refreshTokenUrl:e.refreshTokenUrl,scope:e.scope,personalAccessToken:e.personalAccessToken,bodyEncoding:e.bodyEncoding??"url-encoded",onAuthorize:e.onAuthorize,tokenRefreshResponseParser:e.tokenRefreshResponseParser,tokenResponseParser:e.tokenResponseParser});j.zoomService=hp});var Or=C(At=>{"use strict";var xp=At&&At.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(At,"__esModule",{value:!0});At.OAuthService=void 0;var fo=xp(Ft()),et=Ro(),be=class{constructor(t){this.clientId=t.clientId,this.scope=Array.isArray(t.scope)?t.scope.join(" "):t.scope,this.personalAccessToken=t.personalAccessToken,this.bodyEncoding=t.bodyEncoding,this.client=t.client,this.extraParameters=t.extraParameters,this.authorizeUrl=t.authorizeUrl,this.tokenUrl=t.tokenUrl,this.refreshTokenUrl=t.refreshTokenUrl,this.onAuthorize=t.onAuthorize,this.tokenResponseParser=t.tokenResponseParser??(a=>a),this.tokenRefreshResponseParser=t.tokenRefreshResponseParser??(a=>a),this.authorize=this.authorize.bind(this)}async authorize(){let t=await this.client.getTokens();if(t?.accessToken){if(t.refreshToken&&t.isExpired()){let o=await this.refreshTokens({token:t.refreshToken});if(o)return await this.client.setTokens(o),o.access_token}return t.accessToken}let a=await this.client.authorizationRequest({endpoint:this.authorizeUrl,clientId:this.clientId,scope:this.scope,extraParameters:this.extraParameters}),{authorizationCode:r}=await this.client.authorize(a),n=await this.fetchTokens({authRequest:a,authorizationCode:r});return await this.client.setTokens(n),n.access_token}async fetchTokens({authRequest:t,authorizationCode:a}){let r;if(this.bodyEncoding==="url-encoded"){let i=new URLSearchParams;i.append("client_id",this.clientId),i.append("code",a),i.append("code_verifier",t.codeVerifier),i.append("grant_type","authorization_code"),i.append("redirect_uri",t.redirectURI),r={body:i}}else r={body:JSON.stringify({client_id:this.clientId,code:a,code_verifier:t.codeVerifier,grant_type:"authorization_code",redirect_uri:t.redirectURI}),headers:{"Content-Type":"application/json"}};let n=await(0,fo.default)(this.tokenUrl,{method:"POST",...r});if(!n.ok){let i=await n.text();throw console.error("fetch tokens error:",i),new Error(`Error while fetching tokens: ${n.status} (${n.statusText})
${i}`)}let o=this.tokenResponseParser(await n.json());return Array.isArray(o.scope)?{...o,scope:o.scope.join(" ")}:o}async refreshTokens({token:t}){let a;if(this.bodyEncoding==="url-encoded"){let n=new URLSearchParams;n.append("client_id",this.clientId),n.append("refresh_token",t),n.append("grant_type","refresh_token"),a={body:n}}else a={body:JSON.stringify({client_id:this.clientId,refresh_token:t,grant_type:"refresh_token"}),headers:{"Content-Type":"application/json"}};let r=await(0,fo.default)(this.refreshTokenUrl??this.tokenUrl,{method:"POST",...a});if(r.ok){let n=this.tokenRefreshResponseParser(await r.json());return n.refresh_token=n.refresh_token??t,n}else{let n=await r.text();console.error("refresh tokens error:",n),this.client.description=`${this.client.providerName} needs you to sign-in again. Press \u23CE or click the button below to continue.`,await this.client.removeTokens(),await this.authorize()}}};At.OAuthService=be;be.asana=et.asanaService;be.github=et.githubService;be.google=et.googleService;be.jira=et.jiraService;be.linear=et.linearService;be.slack=et.slackService;be.zoom=et.zoomService});var Ao=C(Et=>{"use strict";Object.defineProperty(Et,"__esModule",{value:!0});Et.getAccessToken=Et.withAccessToken=void 0;var Dp=require("react/jsx-runtime"),Up=require("@raycast/api"),Fe=null,tt=null,Br=null,Lr=null,qr=null;function _p(e){return Up.environment.commandMode==="no-view"?t=>async r=>{if(!Fe){Fe=e.personalAccessToken??await e.authorize(),tt=e.personalAccessToken?"personal":"oauth";let n=(await e.client?.getTokens())?.idToken;e.onAuthorize&&await Promise.resolve(e.onAuthorize({token:Fe,type:tt,idToken:n}))}return t(r)}:t=>{let a=r=>{e.personalAccessToken?(Fe=e.personalAccessToken,tt="personal"):(Br||(Br=Nr(e.authorize())),Fe=Br.read(),tt="oauth");let n;return e.client&&(Lr||(Lr=Nr(e.client.getTokens())),n=Lr.read()?.idToken),!qr&&e.onAuthorize&&(qr=Nr(Promise.resolve(e.onAuthorize({token:Fe,type:tt,idToken:n})))),qr?.read(),(0,Dp.jsx)(t,{...r})};return a.displayName=`withAccessToken(${t.displayName||t.name})`,a}}Et.withAccessToken=_p;function vp(){if(!Fe||!tt)throw new Error("getAccessToken must be used when authenticated (eg. used inside `withAccessToken`)");return{token:Fe,type:tt}}Et.getAccessToken=vp;function Nr(e){let t="pending",a,r=e.then(o=>{t="success",a=o},o=>{t="error",a=o});return{read:()=>{switch(t){case"pending":throw r;case"error":throw a;default:return a}}}}});var Po=C(je=>{"use strict";var Tp=je&&je.__createBinding||(Object.create?(function(e,t,a,r){r===void 0&&(r=a);var n=Object.getOwnPropertyDescriptor(t,a);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,n)}):(function(e,t,a,r){r===void 0&&(r=a),e[r]=t[a]})),Eo=je&&je.__exportStar||function(e,t){for(var a in e)a!=="default"&&!Object.prototype.hasOwnProperty.call(t,a)&&Tp(t,e,a)};Object.defineProperty(je,"__esModule",{value:!0});Eo(Or(),je);Eo(Ao(),je)});var Uo=C(oe=>{"use strict";var Co=oe&&oe.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(oe,"__esModule",{value:!0});oe.createDeeplink=oe.createExtensionDeeplink=oe.createScriptCommandDeeplink=oe.DeeplinkType=void 0;var Fr=require("@raycast/api"),wp=Co(require("node:fs")),Op=Co(require("node:path")),Vr;(function(e){e.ScriptCommand="script-command",e.Extension="extension"})(Vr||(oe.DeeplinkType=Vr={}));function ho(){return Fr.environment.raycastVersion.includes("alpha")?"raycastinternal://":"raycast://"}function Bp(){let e=JSON.parse(wp.default.readFileSync(Op.default.join(Fr.environment.assetsPath,"..","package.json"),"utf8"));return e.owner||e.author}function xo(e){let t=`${ho()}script-commands/${e.command}`;if(e.arguments){let a="";for(let r of e.arguments)a+="&arguments="+encodeURIComponent(r);t+="?"+a.substring(1)}return t}oe.createScriptCommandDeeplink=xo;function Do(e){let t=Bp(),a=Fr.environment.extensionName;"ownerOrAuthorName"in e&&"extensionName"in e&&(t=e.ownerOrAuthorName,a=e.extensionName);let r=`${ho()}extensions/${t}/${a}/${e.command}`,n="";return e.launchType&&(n+="&launchType="+encodeURIComponent(e.launchType)),e.arguments&&(n+="&arguments="+encodeURIComponent(JSON.stringify(e.arguments))),e.context&&(n+="&context="+encodeURIComponent(JSON.stringify(e.context))),e.fallbackText&&(n+="&fallbackText="+encodeURIComponent(e.fallbackText)),n&&(r+="?"+n.substring(1)),r}oe.createExtensionDeeplink=Do;function Lp(e){return e.type===Vr.ScriptCommand?xo(e):Do(e)}oe.createDeeplink=Lp});var _o=C(wa=>{"use strict";Object.defineProperty(wa,"__esModule",{value:!0});wa.executeSQL=void 0;var qp=hr();function Np(e,t){return(0,qp.baseExecuteSQL)(e,t)}wa.executeSQL=Np});var vo=C(Pt=>{"use strict";var Vp=Pt&&Pt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Pt,"__esModule",{value:!0});Pt.runAppleScript=void 0;var Fp=Vp(require("node:child_process")),Gt=Ma();async function jp(e,t,a){let{humanReadableOutput:r,language:n,timeout:o,...i}=Array.isArray(t)?a||{}:t||{},s=r!==!1?[]:["-ss"];n==="JavaScript"&&s.push("-l","JavaScript"),Array.isArray(t)&&s.push("-",...t);let u=Fp.default.spawn("osascript",s,{...i,env:{PATH:"/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"}}),p=(0,Gt.getSpawnedPromise)(u,{timeout:o??1e4});u.stdin.end(e);let[{error:l,exitCode:y,signal:d,timedOut:I},c,S]=await(0,Gt.getSpawnedResult)(u,{encoding:"utf8"},p),b=(0,Gt.handleOutput)({stripFinalNewline:!0},c),g=(0,Gt.handleOutput)({stripFinalNewline:!0},S);return(0,Gt.defaultParsing)({stdout:b,stderr:g,error:l,exitCode:y,signal:d,timedOut:I,command:"osascript",options:a,parentError:new Error})}Pt.runAppleScript=jp});var To=C(Ba=>{"use strict";Object.defineProperty(Ba,"__esModule",{value:!0});Ba.withCache=void 0;var kp=require("@raycast/api"),Oa=Be();function zp(e,t){let a=new kp.Cache({namespace:(0,Oa.hash)(e)}),r=async(...n)=>{let o=(0,Oa.hash)(n||[])+t?.internal_cacheKeySuffix,i=a.get(o);if(i){let{data:u,timestamp:p}=JSON.parse(i,Oa.reviver);if(!(t?.maxAge&&Date.now()-p>t.maxAge)&&(!t?.validate||t.validate(u)))return u}let s=await e(...n);return a.set(o,JSON.stringify({data:s,timestamp:Date.now()},Oa.replacer)),s};return r.clearCache=()=>{a.clear()},r}Ba.withCache=zp});var jr=C(_=>{"use strict";var Hp=_&&_.__createBinding||(Object.create?(function(e,t,a,r){r===void 0&&(r=a);var n=Object.getOwnPropertyDescriptor(t,a);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,n)}):(function(e,t,a,r){r===void 0&&(r=a),e[r]=t[a]})),q=_&&_.__exportStar||function(e,t){for(var a in e)a!=="default"&&!Object.prototype.hasOwnProperty.call(t,a)&&Hp(t,e,a)};Object.defineProperty(_,"__esModule",{value:!0});q(pt(),_);q(ca(),_);q(Ot(),_);q(Bn(),_);q(Fn(),_);q(Hn(),_);q(Wn(),_);q(Yn(),_);q(Zn(),_);q(to(),_);q(no(),_);q(mo(),_);q(Po(),_);q(Uo(),_);q(_o(),_);q(vo(),_);q(vt(),_);q(To(),_)});var Q={};st(Q,{default:()=>Ho.default});var Ho,ka=pr(()=>{$(Q,require("formdata-polyfill/esm.min.js"));Ho=T(require("formdata-polyfill/esm.min.js"))});var J={};st(J,{default:()=>Wo.default});var Wo,Gr=pr(()=>{$(J,require("fetch-blob/from.js"));Wo=T(require("fetch-blob/from.js"))});var Yo={};st(Yo,{toFormData:()=>cl});function ll(e){let t=e.match(/\bfilename=("(.*?)"|([^()<>@,;:\\"/[\]?={}\s\t]+))($|;\s)/i);if(!t)return;let a=t[2]||t[3]||"",r=a.slice(a.lastIndexOf("\\")+1);return r=r.replace(/%22/g,'"'),r=r.replace(/&#(\d{4});/g,(n,o)=>String.fromCharCode(o)),r}async function cl(e,t){if(!/multipart/i.test(t))throw new TypeError("Failed to fetch");let a=t.match(/boundary=(?:"([^"]+)"|([^;]+))/i);if(!a)throw new TypeError("no or bad content-type header, no multipart boundary");let r=new $r(a[1]||a[2]),n,o,i,s,u,p,l=[],y=new Q.FormData,d=g=>{i+=b.decode(g,{stream:!0})},I=g=>{l.push(g)},c=()=>{let g=new J.File(l,p,{type:u});y.append(s,g)},S=()=>{y.append(s,i)},b=new TextDecoder("utf-8");b.decode(),r.onPartBegin=function(){r.onPartData=d,r.onPartEnd=S,n="",o="",i="",s="",u="",p=null,l.length=0},r.onHeaderField=function(g){n+=b.decode(g,{stream:!0})},r.onHeaderValue=function(g){o+=b.decode(g,{stream:!0})},r.onHeaderEnd=function(){if(o+=b.decode(),n=n.toLowerCase(),n==="content-disposition"){let g=o.match(/\bname=("([^"]*)"|([^()<>@,;:\\"/[\]?={}\s\t]+))/i);g&&(s=g[2]||g[3]||""),p=ll(o),p&&(r.onPartData=I,r.onPartEnd=c)}else n==="content-type"&&(u=o);o="",n=""};for await(let g of e)r.write(g);return r.end(),y}var Ie,D,Ko,He,Ha,Ga,ol,Kt,il,sl,ul,pl,nt,$r,Jo=pr(()=>{Gr();ka();Ie=0,D={START_BOUNDARY:Ie++,HEADER_FIELD_START:Ie++,HEADER_FIELD:Ie++,HEADER_VALUE_START:Ie++,HEADER_VALUE:Ie++,HEADER_VALUE_ALMOST_DONE:Ie++,HEADERS_ALMOST_DONE:Ie++,PART_DATA_START:Ie++,PART_DATA:Ie++,END:Ie++},Ko=1,He={PART_BOUNDARY:Ko,LAST_BOUNDARY:Ko*=2},Ha=10,Ga=13,ol=32,Kt=45,il=58,sl=97,ul=122,pl=e=>e|32,nt=()=>{},$r=class{constructor(t){this.index=0,this.flags=0,this.onHeaderEnd=nt,this.onHeaderField=nt,this.onHeadersEnd=nt,this.onHeaderValue=nt,this.onPartBegin=nt,this.onPartData=nt,this.onPartEnd=nt,this.boundaryChars={},t=`\r
--`+t;let a=new Uint8Array(t.length);for(let r=0;r<t.length;r++)a[r]=t.charCodeAt(r),this.boundaryChars[a[r]]=!0;this.boundary=a,this.lookbehind=new Uint8Array(this.boundary.length+8),this.state=D.START_BOUNDARY}write(t){let a=0,r=t.length,n=this.index,{lookbehind:o,boundary:i,boundaryChars:s,index:u,state:p,flags:l}=this,y=this.boundary.length,d=y-1,I=t.length,c,S,b=M=>{this[M+"Mark"]=a},g=M=>{delete this[M+"Mark"]},R=(M,E,A,h)=>{(E===void 0||E!==A)&&this[M](h&&h.subarray(E,A))},f=(M,E)=>{let A=M+"Mark";A in this&&(E?(R(M,this[A],a,t),delete this[A]):(R(M,this[A],t.length,t),this[A]=0))};for(a=0;a<r;a++)switch(c=t[a],p){case D.START_BOUNDARY:if(u===i.length-2){if(c===Kt)l|=He.LAST_BOUNDARY;else if(c!==Ga)return;u++;break}else if(u-1===i.length-2){if(l&He.LAST_BOUNDARY&&c===Kt)p=D.END,l=0;else if(!(l&He.LAST_BOUNDARY)&&c===Ha)u=0,R("onPartBegin"),p=D.HEADER_FIELD_START;else return;break}c!==i[u+2]&&(u=-2),c===i[u+2]&&u++;break;case D.HEADER_FIELD_START:p=D.HEADER_FIELD,b("onHeaderField"),u=0;case D.HEADER_FIELD:if(c===Ga){g("onHeaderField"),p=D.HEADERS_ALMOST_DONE;break}if(u++,c===Kt)break;if(c===il){if(u===1)return;f("onHeaderField",!0),p=D.HEADER_VALUE_START;break}if(S=pl(c),S<sl||S>ul)return;break;case D.HEADER_VALUE_START:if(c===ol)break;b("onHeaderValue"),p=D.HEADER_VALUE;case D.HEADER_VALUE:c===Ga&&(f("onHeaderValue",!0),R("onHeaderEnd"),p=D.HEADER_VALUE_ALMOST_DONE);break;case D.HEADER_VALUE_ALMOST_DONE:if(c!==Ha)return;p=D.HEADER_FIELD_START;break;case D.HEADERS_ALMOST_DONE:if(c!==Ha)return;R("onHeadersEnd"),p=D.PART_DATA_START;break;case D.PART_DATA_START:p=D.PART_DATA,b("onPartData");case D.PART_DATA:if(n=u,u===0){for(a+=d;a<I&&!(t[a]in s);)a+=y;a-=d,c=t[a]}if(u<i.length)i[u]===c?(u===0&&f("onPartData",!0),u++):u=0;else if(u===i.length)u++,c===Ga?l|=He.PART_BOUNDARY:c===Kt?l|=He.LAST_BOUNDARY:u=0;else if(u-1===i.length)if(l&He.PART_BOUNDARY){if(u=0,c===Ha){l&=~He.PART_BOUNDARY,R("onPartEnd"),R("onPartBegin"),p=D.HEADER_FIELD_START;break}}else l&He.LAST_BOUNDARY&&c===Kt?(R("onPartEnd"),p=D.END,l=0):u=0;if(u>0)o[u-1]=c;else if(n>0){let M=new Uint8Array(o.buffer,o.byteOffset,o.byteLength);R("onPartData",0,n,M),n=0,b("onPartData"),a--}break;case D.END:break;default:throw new Error(`Unexpected state entered: ${p}`)}f("onHeaderField"),f("onHeaderValue"),f("onPartData"),this.index=u,this.state=p,this.flags=l}end(){if(this.state===D.HEADER_FIELD_START&&this.index===0||this.state===D.PART_DATA&&this.index===this.boundary.length)this.onPartEnd();else if(this.state!==D.END)throw new Error("MultipartParser.end(): stream ended unexpectedly")}}});var _i=C((jd,Ui)=>{Ui.exports=Za;function Za(){this.pending=0,this.max=1/0,this.listeners=[],this.waiting=[],this.error=null}Za.prototype.go=function(e){this.pending<this.max?Di(this,e):this.waiting.push(e)};Za.prototype.wait=function(e){this.pending===0?e(this.error):this.listeners.push(e)};Za.prototype.hold=function(){return xi(this)};function xi(e){e.pending+=1;var t=!1;return a;function a(n){if(t)throw new Error("callback called twice");if(t=!0,e.error=e.error||n,e.pending-=1,e.waiting.length>0&&e.pending<e.max)Di(e,e.waiting.shift());else if(e.pending===0){var o=e.listeners;e.listeners=[],o.forEach(r)}}function r(n){n(e.error)}}function Di(e,t){t(xi(e))}});var Ti=C(aa=>{var ta=require("fs"),Xa=require("util"),Xr=require("stream"),vi=Xr.Readable,en=Xr.Writable,vc=Xr.PassThrough,Tc=_i(),er=require("events").EventEmitter;aa.createFromBuffer=wc;aa.createFromFd=Oc;aa.BufferSlicer=_e;aa.FdSlicer=Ue;Xa.inherits(Ue,er);function Ue(e,t){t=t||{},er.call(this),this.fd=e,this.pend=new Tc,this.pend.max=1,this.refCount=0,this.autoClose=!!t.autoClose}Ue.prototype.read=function(e,t,a,r,n){var o=this;o.pend.go(function(i){ta.read(o.fd,e,t,a,r,function(s,u,p){i(),n(s,u,p)})})};Ue.prototype.write=function(e,t,a,r,n){var o=this;o.pend.go(function(i){ta.write(o.fd,e,t,a,r,function(s,u,p){i(),n(s,u,p)})})};Ue.prototype.createReadStream=function(e){return new tr(this,e)};Ue.prototype.createWriteStream=function(e){return new ar(this,e)};Ue.prototype.ref=function(){this.refCount+=1};Ue.prototype.unref=function(){var e=this;if(e.refCount-=1,e.refCount>0)return;if(e.refCount<0)throw new Error("invalid unref");e.autoClose&&ta.close(e.fd,t);function t(a){a?e.emit("error",a):e.emit("close")}};Xa.inherits(tr,vi);function tr(e,t){t=t||{},vi.call(this,t),this.context=e,this.context.ref(),this.start=t.start||0,this.endOffset=t.end,this.pos=this.start,this.destroyed=!1}tr.prototype._read=function(e){var t=this;if(!t.destroyed){var a=Math.min(t._readableState.highWaterMark,e);if(t.endOffset!=null&&(a=Math.min(a,t.endOffset-t.pos)),a<=0){t.destroyed=!0,t.push(null),t.context.unref();return}t.context.pend.go(function(r){if(t.destroyed)return r();var n=Buffer.allocUnsafe(a);ta.read(t.context.fd,n,0,a,t.pos,function(o,i){o?t.destroy(o):i===0?(t.destroyed=!0,t.push(null),t.context.unref()):(t.pos+=i,t.push(n.slice(0,i))),r()})})}};tr.prototype.destroy=function(e){this.destroyed||(e=e||new Error("stream destroyed"),this.destroyed=!0,this.emit("error",e),this.context.unref())};Xa.inherits(ar,en);function ar(e,t){t=t||{},en.call(this,t),this.context=e,this.context.ref(),this.start=t.start||0,this.endOffset=t.end==null?1/0:+t.end,this.bytesWritten=0,this.pos=this.start,this.destroyed=!1,this.on("finish",this.destroy.bind(this))}ar.prototype._write=function(e,t,a){var r=this;if(!r.destroyed){if(r.pos+e.length>r.endOffset){var n=new Error("maximum file length exceeded");n.code="ETOOBIG",r.destroy(),a(n);return}r.context.pend.go(function(o){if(r.destroyed)return o();ta.write(r.context.fd,e,0,e.length,r.pos,function(i,s){i?(r.destroy(),o(),a(i)):(r.bytesWritten+=s,r.pos+=s,r.emit("progress"),o(),a())})})}};ar.prototype.destroy=function(){this.destroyed||(this.destroyed=!0,this.context.unref())};Xa.inherits(_e,er);function _e(e,t){er.call(this),t=t||{},this.refCount=0,this.buffer=e,this.maxChunkSize=t.maxChunkSize||Number.MAX_SAFE_INTEGER}_e.prototype.read=function(e,t,a,r,n){if(!(0<=t&&t<=e.length))throw new RangeError("offset outside buffer: 0 <= "+t+" <= "+e.length);if(r<0)throw new RangeError("position is negative: "+r);if(t+a>e.length&&(a=e.length-t),r+a>this.buffer.length&&(a=this.buffer.length-r),a<=0){setImmediate(function(){n(null,0)});return}this.buffer.copy(e,t,r,r+a),setImmediate(function(){n(null,a)})};_e.prototype.write=function(e,t,a,r,n){e.copy(this.buffer,r,t,t+a),setImmediate(function(){n(null,a,e)})};_e.prototype.createReadStream=function(e){e=e||{};var t=new vc(e);t.destroyed=!1,t.start=e.start||0,t.endOffset=e.end,t.pos=t.endOffset||this.buffer.length;for(var a=this.buffer.slice(t.start,t.pos),r=0;;){var n=r+this.maxChunkSize;if(n>=a.length){r<a.length&&t.write(a.slice(r,a.length));break}t.write(a.slice(r,n)),r=n}return t.end(),t.destroy=function(){t.destroyed=!0},t};_e.prototype.createWriteStream=function(e){var t=this;e=e||{};var a=new en(e);return a.start=e.start||0,a.endOffset=e.end==null?this.buffer.length:+e.end,a.bytesWritten=0,a.pos=a.start,a.destroyed=!1,a._write=function(r,n,o){if(!a.destroyed){var i=a.pos+r.length;if(i>a.endOffset){var s=new Error("maximum file length exceeded");s.code="ETOOBIG",a.destroyed=!0,o(s);return}r.copy(t.buffer,a.pos,0,r.length),a.bytesWritten+=r.length,a.pos=i,a.emit("progress"),o()}},a.destroy=function(){a.destroyed=!0},a};_e.prototype.ref=function(){this.refCount+=1};_e.prototype.unref=function(){if(this.refCount-=1,this.refCount<0)throw new Error("invalid unref")};function wc(e,t){return new _e(e,t)}function Oc(e,t){return new Ue(e,t)}});var Bi=C((zd,Oi)=>{var Ge=require("buffer").Buffer,tn=[0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117];typeof Int32Array<"u"&&(tn=new Int32Array(tn));function wi(e){if(Ge.isBuffer(e))return e;var t=typeof Ge.alloc=="function"&&typeof Ge.from=="function";if(typeof e=="number")return t?Ge.alloc(e):new Ge(e);if(typeof e=="string")return t?Ge.from(e):new Ge(e);throw new Error("input must be buffer, number, or string, received "+typeof e)}function Bc(e){var t=wi(4);return t.writeInt32BE(e,0),t}function an(e,t){e=wi(e),Ge.isBuffer(t)&&(t=t.readUInt32BE(0));for(var a=~~t^-1,r=0;r<e.length;r++)a=tn[(a^e[r])&255]^a>>>8;return a^-1}function rn(){return Bc(an.apply(null,arguments))}rn.signed=function(){return an.apply(null,arguments)};rn.unsigned=function(){return an.apply(null,arguments)>>>0};Oi.exports=rn});var Gi=C(te=>{var nn=require("fs"),Lc=require("zlib"),Li=Ti(),qc=Bi(),or=require("util"),ir=require("events").EventEmitter,qi=require("stream").Transform,sn=require("stream").PassThrough,Nc=require("stream").Writable;te.open=Vc;te.fromFd=Ni;te.fromBuffer=Fc;te.fromRandomAccessReader=un;te.dosDateTimeToDate=ji;te.getFileNameLowLevel=ki;te.validateFileName=zi;te.parseExtraFields=Hi;te.ZipFile=Re;te.Entry=_t;te.LocalFileHeader=Fi;te.RandomAccessReader=$e;function Vc(e,t,a){typeof t=="function"&&(a=t,t=null),t==null&&(t={}),t.autoClose==null&&(t.autoClose=!0),t.lazyEntries==null&&(t.lazyEntries=!1),t.decodeStrings==null&&(t.decodeStrings=!0),t.validateEntrySizes==null&&(t.validateEntrySizes=!0),t.strictFileNames==null&&(t.strictFileNames=!1),a==null&&(a=nr),nn.open(e,"r",function(r,n){if(r)return a(r);Ni(n,t,function(o,i){o&&nn.close(n,nr),a(o,i)})})}function Ni(e,t,a){typeof t=="function"&&(a=t,t=null),t==null&&(t={}),t.autoClose==null&&(t.autoClose=!1),t.lazyEntries==null&&(t.lazyEntries=!1),t.decodeStrings==null&&(t.decodeStrings=!0),t.validateEntrySizes==null&&(t.validateEntrySizes=!0),t.strictFileNames==null&&(t.strictFileNames=!1),a==null&&(a=nr),nn.fstat(e,function(r,n){if(r)return a(r);var o=Li.createFromFd(e,{autoClose:!0});un(o,n.size,t,a)})}function Fc(e,t,a){typeof t=="function"&&(a=t,t=null),t==null&&(t={}),t.autoClose=!1,t.lazyEntries==null&&(t.lazyEntries=!1),t.decodeStrings==null&&(t.decodeStrings=!0),t.validateEntrySizes==null&&(t.validateEntrySizes=!0),t.strictFileNames==null&&(t.strictFileNames=!1);var r=Li.createFromBuffer(e,{maxChunkSize:65536});un(r,e.length,t,a)}function un(e,t,a,r){typeof a=="function"&&(r=a,a=null),a==null&&(a={}),a.autoClose==null&&(a.autoClose=!0),a.lazyEntries==null&&(a.lazyEntries=!1),a.decodeStrings==null&&(a.decodeStrings=!0);var n=!!a.decodeStrings;if(a.validateEntrySizes==null&&(a.validateEntrySizes=!0),a.strictFileNames==null&&(a.strictFileNames=!1),r==null&&(r=nr),typeof t!="number")throw new Error("expected totalSize parameter to be a number");if(t>Number.MAX_SAFE_INTEGER)throw new Error("zip file too large. only file sizes up to 2^52 are supported due to JavaScript's Number type being an IEEE 754 double.");e.ref();var o=22,i=20,s=65535,u=Math.min(i+o+s,t),p=ve(u),l=t-p.length;Ut(e,p,0,u,l,function(y){if(y)return r(y);for(var d=u-o;d>=0;d-=1)if(p.readUInt32LE(d)===101010256){var I=p.subarray(d),c=I.readUInt16LE(4),S=I.readUInt16LE(10),b=I.readUInt32LE(16),g=I.readUInt16LE(20),R=I.length-o;if(g!==R)return r(new Error("Invalid comment length. Expected: "+R+". Found: "+g+". Are there extra bytes at the end of the file? Or is the end of central dir signature `PK\u263A\u263B` in the comment?"));var f=n?rr(I.subarray(22),!1):I.subarray(22);if(d-i>=0&&p.readUInt32LE(d-i)===117853008){var M=p.subarray(d-i,d-i+i),E=Dt(M,8),A=ve(56);return Ut(e,A,0,A.length,E,function(h){return h?r(h):A.readUInt32LE(0)!==101075792?r(new Error("invalid zip64 end of central directory record signature")):(c=A.readUInt32LE(16),c!==0?r(new Error("multi-disk zip files are not supported: found disk number: "+c)):(S=Dt(A,32),b=Dt(A,48),r(null,new Re(e,b,t,S,f,a.autoClose,a.lazyEntries,n,a.validateEntrySizes,a.strictFileNames))))})}return c!==0?r(new Error("multi-disk zip files are not supported: found disk number: "+c)):r(null,new Re(e,b,t,S,f,a.autoClose,a.lazyEntries,n,a.validateEntrySizes,a.strictFileNames))}r(new Error("End of central directory record signature not found. Either not a zip file, or file is truncated."))})}or.inherits(Re,ir);function Re(e,t,a,r,n,o,i,s,u,p){var l=this;ir.call(l),l.reader=e,l.reader.on("error",function(y){Vi(l,y)}),l.reader.once("close",function(){l.emit("close")}),l.readEntryCursor=t,l.fileSize=a,l.entryCount=r,l.comment=n,l.entriesRead=0,l.autoClose=!!o,l.lazyEntries=!!i,l.decodeStrings=!!s,l.validateEntrySizes=!!u,l.strictFileNames=!!p,l.isOpen=!0,l.emittedError=!1,l.lazyEntries||l._readEntry()}Re.prototype.close=function(){this.isOpen&&(this.isOpen=!1,this.reader.unref())};function me(e,t){e.autoClose&&e.close(),Vi(e,t)}function Vi(e,t){e.emittedError||(e.emittedError=!0,e.emit("error",t))}Re.prototype.readEntry=function(){if(!this.lazyEntries)throw new Error("readEntry() called without lazyEntries:true");this._readEntry()};Re.prototype._readEntry=function(){var e=this;if(e.entryCount===e.entriesRead){setImmediate(function(){e.autoClose&&e.close(),!e.emittedError&&e.emit("end")});return}if(!e.emittedError){var t=ve(46);Ut(e.reader,t,0,t.length,e.readEntryCursor,function(a){if(a)return me(e,a);if(!e.emittedError){var r=new _t,n=t.readUInt32LE(0);if(n!==33639248)return me(e,new Error("invalid central directory file header signature: 0x"+n.toString(16)));if(r.versionMadeBy=t.readUInt16LE(4),r.versionNeededToExtract=t.readUInt16LE(6),r.generalPurposeBitFlag=t.readUInt16LE(8),r.compressionMethod=t.readUInt16LE(10),r.lastModFileTime=t.readUInt16LE(12),r.lastModFileDate=t.readUInt16LE(14),r.crc32=t.readUInt32LE(16),r.compressedSize=t.readUInt32LE(20),r.uncompressedSize=t.readUInt32LE(24),r.fileNameLength=t.readUInt16LE(28),r.extraFieldLength=t.readUInt16LE(30),r.fileCommentLength=t.readUInt16LE(32),r.internalFileAttributes=t.readUInt16LE(36),r.externalFileAttributes=t.readUInt32LE(38),r.relativeOffsetOfLocalHeader=t.readUInt32LE(42),r.generalPurposeBitFlag&64)return me(e,new Error("strong encryption is not supported"));e.readEntryCursor+=46,t=ve(r.fileNameLength+r.extraFieldLength+r.fileCommentLength),Ut(e.reader,t,0,t.length,e.readEntryCursor,function(o){if(o)return me(e,o);if(!e.emittedError){r.fileNameRaw=t.subarray(0,r.fileNameLength);var i=r.fileNameLength+r.extraFieldLength;r.extraFieldRaw=t.subarray(r.fileNameLength,i),r.fileCommentRaw=t.subarray(i,i+r.fileCommentLength);try{r.extraFields=Hi(r.extraFieldRaw)}catch(S){return me(e,S)}if(e.decodeStrings){var s=(r.generalPurposeBitFlag&2048)!==0;r.fileComment=rr(r.fileCommentRaw,s),r.fileName=ki(r.generalPurposeBitFlag,r.fileNameRaw,r.extraFields,e.strictFileNames);var u=zi(r.fileName);if(u!=null)return me(e,new Error(u))}else r.fileComment=r.fileCommentRaw,r.fileName=r.fileNameRaw;r.comment=r.fileComment,e.readEntryCursor+=t.length,e.entriesRead+=1;for(var p=0;p<r.extraFields.length;p++){var l=r.extraFields[p];if(l.id===1){var y=l.data,d=0;if(r.uncompressedSize===4294967295){if(d+8>y.length)return me(e,new Error("zip64 extended information extra field does not include uncompressed size"));r.uncompressedSize=Dt(y,d),d+=8}if(r.compressedSize===4294967295){if(d+8>y.length)return me(e,new Error("zip64 extended information extra field does not include compressed size"));r.compressedSize=Dt(y,d),d+=8}if(r.relativeOffsetOfLocalHeader===4294967295){if(d+8>y.length)return me(e,new Error("zip64 extended information extra field does not include relative header offset"));r.relativeOffsetOfLocalHeader=Dt(y,d),d+=8}break}}if(e.validateEntrySizes&&r.compressionMethod===0){var I=r.uncompressedSize;if(r.isEncrypted()&&(I+=12),r.compressedSize!==I){var c="compressed/uncompressed size mismatch for stored file: "+r.compressedSize+" != "+r.uncompressedSize;return me(e,new Error(c))}}e.emit("entry",r),e.lazyEntries||e._readEntry()}})}})}};Re.prototype.openReadStream=function(e,t,a){var r=this,n=0,o=e.compressedSize;if(a==null&&(a=t,t=null),t==null)t={};else{if(t.decodeFileData===!1){if(t.decrypt!=null)throw new Error("cannot use options.decrypt when options.decodeFileData === false");if(t.decompress!=null)throw new Error("cannot use options.decompress when options.decodeFileData === false")}else{if(t.decrypt!=null){if(!e.isEncrypted())throw new Error("options.decrypt can only be specified for encrypted entries. See also option decodeFileData.");if(t.decrypt!==!1)throw new Error("invalid options.decrypt value: "+t.decrypt);if(e.isCompressed()&&t.decompress!==!1)throw new Error("entry is encrypted and compressed, and options.decompress !== false. See also option decodeFileData.")}if(t.decompress!=null){if(!e.isCompressed())throw new Error("options.decompress can only be specified for compressed entries. See also option decodeFileData.");if(!(t.decompress===!1||t.decompress===!0))throw new Error("invalid options.decompress value: "+t.decompress);s=t.decompress}}if(t.start!=null){if(n=t.start,n<0)throw new Error("options.start < 0");if(n>e.compressedSize)throw new Error("options.start > entry.compressedSize")}if(t.end!=null){if(o=t.end,o<0)throw new Error("options.end < 0");if(o>e.compressedSize)throw new Error("options.end > entry.compressedSize");if(o<n)throw new Error("options.end < options.start")}}var i=t.decodeFileData===!1||(e.compressionMethod===0||e.compressionMethod===8&&t.decompress===!1)&&(!e.isEncrypted()||t.decrypt===!1);if((t.start!=null||t.end!=null)&&!i)throw new Error("start/end range require options.decodeFileData === false for non-trivial encoded entries.");if(!r.isOpen)return a(new Error("closed"));if(e.isEncrypted()&&!i&&t.decrypt!==!1)return a(new Error("entry is encrypted, and options.decodeFileData !== false"));var s;if(i)s=!1;else if(e.compressionMethod===8)s=t.decodeFileData!==!0;else return a(new Error("unsupported compression method: "+e.compressionMethod));r.readLocalFileHeader(e,{minimal:!0},function(u,p){if(u)return a(u);r.openReadStreamLowLevel(p.fileDataStart,e.compressedSize,n,o,s,e.uncompressedSize,a)})};Re.prototype.openReadStreamLowLevel=function(e,t,a,r,n,o,i){var s=this,u=e+t,p=s.reader.createReadStream({start:e+a,end:e+r}),l=p;if(n){var y=!1,d=Lc.createInflateRaw();p.on("error",function(I){setImmediate(function(){y||d.emit("error",I)})}),p.pipe(d),s.validateEntrySizes?(l=new ra(o),d.on("error",function(I){setImmediate(function(){y||l.emit("error",I)})}),d.pipe(l)):l=d,on(l,function(){y=!0,d!==l&&d.unpipe(l),p.unpipe(d),p.destroy()})}i(null,l)};Re.prototype.readLocalFileHeader=function(e,t,a){var r=this;a==null&&(a=t,t=null),t==null&&(t={}),r.reader.ref();var n=ve(30);Ut(r.reader,n,0,n.length,e.relativeOffsetOfLocalHeader,function(o){try{if(o)return a(o);var i=n.readUInt32LE(0);if(i!==67324752)return a(new Error("invalid local file header signature: 0x"+i.toString(16)));var s=n.readUInt16LE(26),u=n.readUInt16LE(28),p=e.relativeOffsetOfLocalHeader+30+s+u;if(p+e.compressedSize>r.fileSize)return a(new Error("file data overflows file bounds: "+p+" + "+e.compressedSize+" > "+r.fileSize));if(t.minimal)return a(null,{fileDataStart:p});var l=new Fi;l.fileDataStart=p,l.versionNeededToExtract=n.readUInt16LE(4),l.generalPurposeBitFlag=n.readUInt16LE(6),l.compressionMethod=n.readUInt16LE(8),l.lastModFileTime=n.readUInt16LE(10),l.lastModFileDate=n.readUInt16LE(12),l.crc32=n.readUInt32LE(14),l.compressedSize=n.readUInt32LE(18),l.uncompressedSize=n.readUInt32LE(22),l.fileNameLength=s,l.extraFieldLength=u,n=ve(s+u),r.reader.ref(),Ut(r.reader,n,0,n.length,e.relativeOffsetOfLocalHeader+30,function(y){try{return y?a(y):(l.fileName=n.subarray(0,s),l.extraField=n.subarray(s),a(null,l))}finally{r.reader.unref()}})}finally{r.reader.unref()}})};function _t(){}_t.prototype.getLastModDate=function(e){if(e==null&&(e={}),!e.forceDosFormat)for(var t=0;t<this.extraFields.length;t++){var a=this.extraFields[t];if(a.id===21589){var r=a.data;if(r.length<5)continue;var n=r[0],o=1;if(!(n&o))continue;var i=r.readInt32LE(1);return new Date(i*1e3)}else if(a.id===10){var r=a.data;if(r.length!==32||r.readUInt16LE(4)!==1||r.readUInt16LE(6)!==24)continue;var s=r.readUInt32LE(8)+4294967296*r.readInt32LE(12),u=s/1e4-116444736e5;return new Date(u)}}return ji(this.lastModFileDate,this.lastModFileTime,e.timezone)};_t.prototype.canDecodeFileData=function(){return!this.isEncrypted()&&(this.compressionMethod===0||this.compressionMethod===8)};_t.prototype.isEncrypted=function(){return(this.generalPurposeBitFlag&1)!==0};_t.prototype.isCompressed=function(){return this.compressionMethod===8};function Fi(){}function ji(e,t,a){var r=e&31,n=(e>>5&15)-1,o=(e>>9&127)+1980,i=0,s=(t&31)*2,u=t>>5&63,p=t>>11&31;if(a==null||a==="local")return new Date(o,n,r,p,u,s,i);if(a==="UTC")return new Date(Date.UTC(o,n,r,p,u,s,i));throw new Error("unrecognized options.timezone: "+options.timezone)}function ki(e,t,a,r){for(var n=null,o=0;o<a.length;o++){var i=a[o];if(i.id===28789){if(i.data.length<6||i.data.readUInt8(0)!==1)continue;var s=i.data.readUInt32LE(1);if(qc.unsigned(t)!==s)continue;n=rr(i.data.subarray(5),!0);break}}if(n==null){var u=(e&2048)!==0;n=rr(t,u)}return r||(n=n.replace(/\\/g,"/")),n}function zi(e){return e.indexOf("\\")!==-1?"invalid characters in fileName: "+e:/^[a-zA-Z]:/.test(e)||/^\//.test(e)?"absolute path: "+e:e.split("/").indexOf("..")!==-1?"invalid relative path: "+e:null}function Hi(e){for(var t=[],a=0;a<e.length-3;){var r=e.readUInt16LE(a+0),n=e.readUInt16LE(a+2),o=a+4,i=o+n;if(i>e.length)throw new Error("extra field length exceeds extra field buffer size");var s=e.subarray(o,i);t.push({id:r,data:s}),a=i}return t}function Ut(e,t,a,r,n,o){if(r===0)return setImmediate(function(){o(null,ve(0))});e.read(t,a,r,n,function(i,s){if(i)return o(i);if(s<r)return o(new Error("unexpected EOF"));o()})}or.inherits(ra,qi);function ra(e){qi.call(this),this.actualByteCount=0,this.expectedByteCount=e}ra.prototype._transform=function(e,t,a){if(this.actualByteCount+=e.length,this.actualByteCount>this.expectedByteCount){var r="too many bytes in the stream. expected "+this.expectedByteCount+". got at least "+this.actualByteCount;return a(new Error(r))}a(null,e)};ra.prototype._flush=function(e){if(this.actualByteCount<this.expectedByteCount){var t="not enough bytes in the stream. expected "+this.expectedByteCount+". got only "+this.actualByteCount;return e(new Error(t))}e()};or.inherits($e,ir);function $e(){ir.call(this),this.refCount=0}$e.prototype.ref=function(){this.refCount+=1};$e.prototype.unref=function(){var e=this;if(e.refCount-=1,e.refCount>0)return;if(e.refCount<0)throw new Error("invalid unref");e.close(t);function t(a){if(a)return e.emit("error",a);e.emit("close")}};$e.prototype.createReadStream=function(e){e==null&&(e={});var t=e.start,a=e.end;if(t===a){var r=new sn;return setImmediate(function(){r.end()}),r}var n=this._readStreamForRange(t,a),o=!1,i=new sr(this);n.on("error",function(u){setImmediate(function(){o||i.emit("error",u)})}),on(i,function(){n.unpipe(i),i.unref(),n.destroy()});var s=new ra(a-t);return i.on("error",function(u){setImmediate(function(){o||s.emit("error",u)})}),on(s,function(){o=!0,i.unpipe(s),i.destroy()}),n.pipe(i).pipe(s)};$e.prototype._readStreamForRange=function(e,t){throw new Error("not implemented")};$e.prototype.read=function(e,t,a,r,n){var o=this.createReadStream({start:r,end:r+a}),i=new Nc,s=0;i._write=function(u,p,l){u.copy(e,t+s,0,u.length),s+=u.length,l()},i.on("finish",n),o.on("error",function(u){n(u)}),o.pipe(i)};$e.prototype.close=function(e){setImmediate(e)};or.inherits(sr,sn);function sr(e){sn.call(this),this.context=e,this.context.ref(),this.unreffedYet=!1}sr.prototype._flush=function(e){this.unref(),e()};sr.prototype.unref=function(e){this.unreffedYet||(this.unreffedYet=!0,this.context.unref())};var jc="\0\u263A\u263B\u2665\u2666\u2663\u2660\u2022\u25D8\u25CB\u25D9\u2642\u2640\u266A\u266B\u263C\u25BA\u25C4\u2195\u203C\xB6\xA7\u25AC\u21A8\u2191\u2193\u2192\u2190\u221F\u2194\u25B2\u25BC !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\u2302\xC7\xFC\xE9\xE2\xE4\xE0\xE5\xE7\xEA\xEB\xE8\xEF\xEE\xEC\xC4\xC5\xC9\xE6\xC6\xF4\xF6\xF2\xFB\xF9\xFF\xD6\xDC\xA2\xA3\xA5\u20A7\u0192\xE1\xED\xF3\xFA\xF1\xD1\xAA\xBA\xBF\u2310\xAC\xBD\xBC\xA1\xAB\xBB\u2591\u2592\u2593\u2502\u2524\u2561\u2562\u2556\u2555\u2563\u2551\u2557\u255D\u255C\u255B\u2510\u2514\u2534\u252C\u251C\u2500\u253C\u255E\u255F\u255A\u2554\u2569\u2566\u2560\u2550\u256C\u2567\u2568\u2564\u2565\u2559\u2558\u2552\u2553\u256B\u256A\u2518\u250C\u2588\u2584\u258C\u2590\u2580\u03B1\xDF\u0393\u03C0\u03A3\u03C3\xB5\u03C4\u03A6\u0398\u03A9\u03B4\u221E\u03C6\u03B5\u2229\u2261\xB1\u2265\u2264\u2320\u2321\xF7\u2248\xB0\u2219\xB7\u221A\u207F\xB2\u25A0\xA0";function rr(e,t){if(t)return e.toString("utf8");for(var a="",r=0;r<e.length;r++)a+=jc[e[r]];return a}function Dt(e,t){var a=e.readUInt32LE(t),r=e.readUInt32LE(t+4);return r*4294967296+a}var ve;typeof Buffer.allocUnsafe=="function"?ve=function(e){return Buffer.allocUnsafe(e)}:ve=function(e){return new Buffer(e)};function on(e,t){typeof e.destroy=="function"?e._destroy=function(a,r){t(),r?.(a)}:e.destroy=t}function nr(e){if(e)throw e}});var Gc={};st(Gc,{default:()=>Hc});module.exports=ss(Gc);var ln=T(require("fs")),Xi=T(require("os")),cn=T(require("path")),U=require("@raycast/api"),Qe=require("react");var fi=require("@octokit/rest"),Ai=require("@raycast/api"),Ei=T(jr());var La=JSON;var wo=e=>e.toUpperCase(),Oo=e=>{let t={};return e.forEach((a,r)=>{t[r]=a}),t};var Bo=(e,t,a)=>e.document?e:{document:e,variables:t,requestHeaders:a,signal:void 0},Lo=(e,t,a)=>e.query?e:{query:e,variables:t,requestHeaders:a,signal:void 0},qo=(e,t)=>e.documents?e:{documents:e,requestHeaders:t,signal:void 0};var qa=require("graphql"),No=e=>{let t,a=e.definitions.filter(r=>r.kind==="OperationDefinition");return a.length===1&&(t=a[0]?.name?.value),t},at=e=>{if(typeof e=="string"){let a;try{let r=(0,qa.parse)(e);a=No(r)}catch{}return{query:e,operationName:a}}let t=No(e);return{query:(0,qa.print)(e),operationName:t}};var rt=class e extends Error{constructor(t,a){let r=`${e.extractMessage(t)}: ${JSON.stringify({response:t,request:a})}`;super(r),Object.setPrototypeOf(this,e.prototype),this.response=t,this.request=a,typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,e)}static extractMessage(t){return t.errors?.[0]?.message??`GraphQL Error (Code: ${t.status})`}};var ze=T(Ft(),1);var Gp="connection_init",$p="connection_ack",Fo="ping",jo="pong",Qp="subscribe",Wp="next",Kp="error",ko="complete",ke=class e{get type(){return this._type}get id(){return this._id}get payload(){return this._payload}constructor(t,a,r){this._type=t,this._payload=a,this._id=r}get text(){let t={type:this.type};return this.id!=null&&this.id!=null&&(t.id=this.id),this.payload!=null&&this.payload!=null&&(t.payload=this.payload),JSON.stringify(t)}static parse(t,a){let{type:r,payload:n,id:o}=JSON.parse(t);return new e(r,a(n),o)}},Na=class{constructor(t,{onInit:a,onAcknowledged:r,onPing:n,onPong:o}){this.socketState={acknowledged:!1,lastRequestId:0,subscriptions:{}},this.socket=t,t.addEventListener("open",async i=>{this.socketState.acknowledged=!1,this.socketState.subscriptions={},t.send(Jp(a?await a():null).text)}),t.addEventListener("close",i=>{this.socketState.acknowledged=!1,this.socketState.subscriptions={}}),t.addEventListener("error",i=>{console.error(i)}),t.addEventListener("message",i=>{try{let s=Yp(i.data);switch(s.type){case $p:{this.socketState.acknowledged?console.warn("Duplicate CONNECTION_ACK message ignored"):(this.socketState.acknowledged=!0,r&&r(s.payload));return}case Fo:{n?n(s.payload).then(y=>t.send(Vo(y).text)):t.send(Vo(null).text);return}case jo:{o&&o(s.payload);return}}if(!this.socketState.acknowledged||s.id===void 0||s.id===null||!this.socketState.subscriptions[s.id])return;let{query:u,variables:p,subscriber:l}=this.socketState.subscriptions[s.id];switch(s.type){case Wp:{!s.payload.errors&&s.payload.data&&l.next&&l.next(s.payload.data),s.payload.errors&&l.error&&l.error(new rt({...s.payload,status:200},{query:u,variables:p}));return}case Kp:{l.error&&l.error(new rt({errors:s.payload,status:200},{query:u,variables:p}));return}case ko:{l.complete&&l.complete(),delete this.socketState.subscriptions[s.id];return}}}catch(s){console.error(s),t.close(1006)}t.close(4400,"Unknown graphql-ws message.")})}makeSubscribe(t,a,r,n){let o=(this.socketState.lastRequestId++).toString();return this.socketState.subscriptions[o]={query:t,variables:n,subscriber:r},this.socket.send(Xp(o,{query:t,operationName:a,variables:n}).text),()=>{this.socket.send(el(o).text),delete this.socketState.subscriptions[o]}}rawRequest(t,a){return new Promise((r,n)=>{let o;this.rawSubscribe(t,{next:(i,s)=>o={data:i,extensions:s},error:n,complete:()=>r(o)},a)})}request(t,a){return new Promise((r,n)=>{let o;this.subscribe(t,{next:i=>o=i,error:n,complete:()=>r(o)},a)})}subscribe(t,a,r){let{query:n,operationName:o}=at(t);return this.makeSubscribe(n,o,a,r)}rawSubscribe(t,a,r){return this.makeSubscribe(t,void 0,a,r)}ping(t){this.socket.send(Zp(t).text)}close(){this.socket.close(1e3)}};Na.PROTOCOL="graphql-transport-ws";function Yp(e,t=a=>a){return ke.parse(e,t)}function Jp(e){return new ke(Gp,e)}function Zp(e){return new ke(Fo,e,void 0)}function Vo(e){return new ke(jo,e,void 0)}function Xp(e,t){return new ke(Qp,t,e)}function el(e){return new ke(ko,void 0,e)}var Ct=e=>{let t={};return e&&(typeof Headers<"u"&&e instanceof Headers||ze&&ze.Headers&&e instanceof ze.Headers?t=Oo(e):Array.isArray(e)?e.forEach(([a,r])=>{a&&r!==void 0&&(t[a]=r)}):t=e),t},zo=e=>e.replace(/([\s,]|#[^\n\r]+)+/g," ").trim(),tl=e=>{if(!Array.isArray(e.query)){let r=e,n=[`query=${encodeURIComponent(zo(r.query))}`];return e.variables&&n.push(`variables=${encodeURIComponent(r.jsonSerializer.stringify(r.variables))}`),r.operationName&&n.push(`operationName=${encodeURIComponent(r.operationName)}`),n.join("&")}if(typeof e.variables<"u"&&!Array.isArray(e.variables))throw new Error("Cannot create query with given variable type, array expected");let t=e,a=e.query.reduce((r,n,o)=>(r.push({query:zo(n),variables:t.variables?t.jsonSerializer.stringify(t.variables[o]):void 0}),r),[]);return`query=${encodeURIComponent(t.jsonSerializer.stringify(a))}`},al=e=>async t=>{let{url:a,query:r,variables:n,operationName:o,fetch:i,fetchOptions:s,middleware:u}=t,p={...t.headers},l="",y;e==="POST"?(y=rl(r,n,o,s.jsonSerializer),typeof y=="string"&&(p["Content-Type"]="application/json")):l=tl({query:r,variables:n,operationName:o,jsonSerializer:s.jsonSerializer??La});let d={method:e,headers:p,body:y,...s},I=a,c=d;if(u){let S=await Promise.resolve(u({...d,url:a,operationName:o,variables:n})),{url:b,...g}=S;I=b,c=g}return l&&(I=`${I}?${l}`),await i(I,c)},Va=class{constructor(t,a={}){this.url=t,this.requestConfig=a,this.rawRequest=async(...r)=>{let[n,o,i]=r,s=Lo(n,o,i),{headers:u,fetch:p=ze.default,method:l="POST",requestMiddleware:y,responseMiddleware:d,...I}=this.requestConfig,{url:c}=this;s.signal!==void 0&&(I.signal=s.signal);let{operationName:S}=at(s.query);return kr({url:c,query:s.query,variables:s.variables,headers:{...Ct(zr(u)),...Ct(s.requestHeaders)},operationName:S,fetch:p,method:l,fetchOptions:I,middleware:y}).then(b=>(d&&d(b),b)).catch(b=>{throw d&&d(b),b})}}async request(t,...a){let[r,n]=a,o=Bo(t,r,n),{headers:i,fetch:s=ze.default,method:u="POST",requestMiddleware:p,responseMiddleware:l,...y}=this.requestConfig,{url:d}=this;o.signal!==void 0&&(y.signal=o.signal);let{query:I,operationName:c}=at(o.document);return kr({url:d,query:I,variables:o.variables,headers:{...Ct(zr(i)),...Ct(o.requestHeaders)},operationName:c,fetch:s,method:u,fetchOptions:y,middleware:p}).then(S=>(l&&l(S),S.data)).catch(S=>{throw l&&l(S),S})}batchRequests(t,a){let r=qo(t,a),{headers:n,...o}=this.requestConfig;r.signal!==void 0&&(o.signal=r.signal);let i=r.documents.map(({document:u})=>at(u).query),s=r.documents.map(({variables:u})=>u);return kr({url:this.url,query:i,variables:s,headers:{...Ct(zr(n)),...Ct(r.requestHeaders)},operationName:void 0,fetch:this.requestConfig.fetch??ze.default,method:this.requestConfig.method||"POST",fetchOptions:o,middleware:this.requestConfig.requestMiddleware}).then(u=>(this.requestConfig.responseMiddleware&&this.requestConfig.responseMiddleware(u),u.data)).catch(u=>{throw this.requestConfig.responseMiddleware&&this.requestConfig.responseMiddleware(u),u})}setHeaders(t){return this.requestConfig.headers=t,this}setHeader(t,a){let{headers:r}=this.requestConfig;return r?r[t]=a:this.requestConfig.headers={[t]:a},this}setEndpoint(t){return this.url=t,this}},kr=async e=>{let{query:t,variables:a,fetchOptions:r}=e,n=al(wo(e.method??"post")),o=Array.isArray(e.query),i=await n(e),s=await nl(i,r.jsonSerializer??La),u=Array.isArray(s)?!s.some(({data:l})=>!l):!!s.data,p=Array.isArray(s)||!s.errors||Array.isArray(s.errors)&&!s.errors.length||r.errorPolicy==="all"||r.errorPolicy==="ignore";if(i.ok&&p&&u){let{errors:l,...y}=(Array.isArray(s),s),d=r.errorPolicy==="ignore"?y:s;return{...o?{data:d}:d,headers:i.headers,status:i.status}}else{let l=typeof s=="string"?{error:s}:s;throw new rt({...l,status:i.status,headers:i.headers},{query:t,variables:a})}};var rl=(e,t,a,r)=>{let n=r??La;if(!Array.isArray(e))return n.stringify({query:e,variables:t,operationName:a});if(typeof t<"u"&&!Array.isArray(t))throw new Error("Cannot create request body with given variable type, array expected");let o=e.reduce((i,s,u)=>(i.push({query:s,variables:t?t[u]:void 0}),i),[]);return n.stringify(o)},nl=async(e,t)=>{let a;return e.headers.forEach((r,n)=>{n.toLowerCase()==="content-type"&&(a=r)}),a&&(a.toLowerCase().startsWith("application/json")||a.toLowerCase().startsWith("application/graphql+json")||a.toLowerCase().startsWith("application/graphql-response+json"))?t.parse(await e.text()):e.text()},zr=e=>typeof e=="function"?e():e;var yi=T(require("node:http"),1),di=T(require("node:https"),1),it=T(require("node:zlib"),1),ee=T(require("node:stream"),1),Zt=require("node:buffer");var $t={};st($t,{default:()=>Fa.default});$($t,require("data-uri-to-buffer"));var Fa=T(require("data-uri-to-buffer"));var ie=T(require("node:stream"),1),De=require("node:util"),Z=require("node:buffer");var Qt={};st(Qt,{default:()=>ja.default});$(Qt,require("fetch-blob"));var ja=T(require("fetch-blob"));ka();var xe=class extends Error{constructor(t,a){super(t),Error.captureStackTrace(this,this.constructor),this.type=a}get name(){return this.constructor.name}get[Symbol.toStringTag](){return this.constructor.name}};var W=class extends xe{constructor(t,a,r){super(t,a),r&&(this.code=this.errno=r.code,this.erroredSysCall=r.syscall)}};var za=Symbol.toStringTag,Hr=e=>typeof e=="object"&&typeof e.append=="function"&&typeof e.delete=="function"&&typeof e.get=="function"&&typeof e.getAll=="function"&&typeof e.has=="function"&&typeof e.set=="function"&&typeof e.sort=="function"&&e[za]==="URLSearchParams",Wt=e=>e&&typeof e=="object"&&typeof e.arrayBuffer=="function"&&typeof e.type=="string"&&typeof e.stream=="function"&&typeof e.constructor=="function"&&/^(Blob|File)$/.test(e[za]),Go=e=>typeof e=="object"&&(e[za]==="AbortSignal"||e[za]==="EventTarget"),$o=(e,t)=>{let a=new URL(t).hostname,r=new URL(e).hostname;return a===r||a.endsWith(`.${r}`)},Qo=(e,t)=>{let a=new URL(t).protocol,r=new URL(e).protocol;return a===r};var yl=(0,De.promisify)(ie.default.pipeline),K=Symbol("Body internals"),ge=class{constructor(t,{size:a=0}={}){let r=null;t===null?t=null:Hr(t)?t=Z.Buffer.from(t.toString()):Wt(t)||Z.Buffer.isBuffer(t)||(De.types.isAnyArrayBuffer(t)?t=Z.Buffer.from(t):ArrayBuffer.isView(t)?t=Z.Buffer.from(t.buffer,t.byteOffset,t.byteLength):t instanceof ie.default||(t instanceof Q.FormData?(t=(0,Q.formDataToBlob)(t),r=t.type.split("=")[1]):t=Z.Buffer.from(String(t))));let n=t;Z.Buffer.isBuffer(t)?n=ie.default.Readable.from(t):Wt(t)&&(n=ie.default.Readable.from(t.stream())),this[K]={body:t,stream:n,boundary:r,disturbed:!1,error:null},this.size=a,t instanceof ie.default&&t.on("error",o=>{let i=o instanceof xe?o:new W(`Invalid response body while trying to fetch ${this.url}: ${o.message}`,"system",o);this[K].error=i})}get body(){return this[K].stream}get bodyUsed(){return this[K].disturbed}async arrayBuffer(){let{buffer:t,byteOffset:a,byteLength:r}=await Qr(this);return t.slice(a,a+r)}async formData(){let t=this.headers.get("content-type");if(t.startsWith("application/x-www-form-urlencoded")){let r=new Q.FormData,n=new URLSearchParams(await this.text());for(let[o,i]of n)r.append(o,i);return r}let{toFormData:a}=await Promise.resolve().then(()=>(Jo(),Yo));return a(this.body,t)}async blob(){let t=this.headers&&this.headers.get("content-type")||this[K].body&&this[K].body.type||"",a=await this.arrayBuffer();return new ja.default([a],{type:t})}async json(){let t=await this.text();return JSON.parse(t)}async text(){let t=await Qr(this);return new TextDecoder().decode(t)}buffer(){return Qr(this)}};ge.prototype.buffer=(0,De.deprecate)(ge.prototype.buffer,"Please use 'response.arrayBuffer()' instead of 'response.buffer()'","node-fetch#buffer");Object.defineProperties(ge.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0},data:{get:(0,De.deprecate)(()=>{},"data doesn't exist, use json(), text(), arrayBuffer(), or body instead","https://github.com/node-fetch/node-fetch/issues/1000 (response)")}});async function Qr(e){if(e[K].disturbed)throw new TypeError(`body used already for: ${e.url}`);if(e[K].disturbed=!0,e[K].error)throw e[K].error;let{body:t}=e;if(t===null)return Z.Buffer.alloc(0);if(!(t instanceof ie.default))return Z.Buffer.alloc(0);let a=[],r=0;try{for await(let n of t){if(e.size>0&&r+n.length>e.size){let o=new W(`content size at ${e.url} over limit: ${e.size}`,"max-size");throw t.destroy(o),o}r+=n.length,a.push(n)}}catch(n){throw n instanceof xe?n:new W(`Invalid response body while trying to fetch ${e.url}: ${n.message}`,"system",n)}if(t.readableEnded===!0||t._readableState.ended===!0)try{return a.every(n=>typeof n=="string")?Z.Buffer.from(a.join("")):Z.Buffer.concat(a,r)}catch(n){throw new W(`Could not create Buffer from response body for ${e.url}: ${n.message}`,"system",n)}else throw new W(`Premature close of server response while trying to fetch ${e.url}`)}var ht=(e,t)=>{let a,r,{body:n}=e[K];if(e.bodyUsed)throw new Error("cannot clone body after it is used");return n instanceof ie.default&&typeof n.getBoundary!="function"&&(a=new ie.PassThrough({highWaterMark:t}),r=new ie.PassThrough({highWaterMark:t}),n.pipe(a),n.pipe(r),e[K].stream=a,n=r),n},dl=(0,De.deprecate)(e=>e.getBoundary(),"form-data doesn't follow the spec and requires special treatment. Use alternative package","https://github.com/node-fetch/node-fetch/issues/1167"),$a=(e,t)=>e===null?null:typeof e=="string"?"text/plain;charset=UTF-8":Hr(e)?"application/x-www-form-urlencoded;charset=UTF-8":Wt(e)?e.type||null:Z.Buffer.isBuffer(e)||De.types.isAnyArrayBuffer(e)||ArrayBuffer.isView(e)?null:e instanceof Q.FormData?`multipart/form-data; boundary=${t[K].boundary}`:e&&typeof e.getBoundary=="function"?`multipart/form-data;boundary=${dl(e)}`:e instanceof ie.default?null:"text/plain;charset=UTF-8",Zo=e=>{let{body:t}=e[K];return t===null?0:Wt(t)?t.size:Z.Buffer.isBuffer(t)?t.length:t&&typeof t.getLengthSync=="function"&&t.hasKnownLength&&t.hasKnownLength()?t.getLengthSync():null},Xo=async(e,{body:t})=>{t===null?e.end():await yl(t,e)};var Wr=require("node:util"),Yt=T(require("node:http"),1),Qa=typeof Yt.default.validateHeaderName=="function"?Yt.default.validateHeaderName:e=>{if(!/^[\^`\-\w!#$%&'*+.|~]+$/.test(e)){let t=new TypeError(`Header name must be a valid HTTP token [${e}]`);throw Object.defineProperty(t,"code",{value:"ERR_INVALID_HTTP_TOKEN"}),t}},Kr=typeof Yt.default.validateHeaderValue=="function"?Yt.default.validateHeaderValue:(e,t)=>{if(/[^\t\u0020-\u007E\u0080-\u00FF]/.test(t)){let a=new TypeError(`Invalid character in header content ["${e}"]`);throw Object.defineProperty(a,"code",{value:"ERR_INVALID_CHAR"}),a}},X=class e extends URLSearchParams{constructor(t){let a=[];if(t instanceof e){let r=t.raw();for(let[n,o]of Object.entries(r))a.push(...o.map(i=>[n,i]))}else if(t!=null)if(typeof t=="object"&&!Wr.types.isBoxedPrimitive(t)){let r=t[Symbol.iterator];if(r==null)a.push(...Object.entries(t));else{if(typeof r!="function")throw new TypeError("Header pairs must be iterable");a=[...t].map(n=>{if(typeof n!="object"||Wr.types.isBoxedPrimitive(n))throw new TypeError("Each header pair must be an iterable object");return[...n]}).map(n=>{if(n.length!==2)throw new TypeError("Each header pair must be a name/value tuple");return[...n]})}}else throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");return a=a.length>0?a.map(([r,n])=>(Qa(r),Kr(r,String(n)),[String(r).toLowerCase(),String(n)])):void 0,super(a),new Proxy(this,{get(r,n,o){switch(n){case"append":case"set":return(i,s)=>(Qa(i),Kr(i,String(s)),URLSearchParams.prototype[n].call(r,String(i).toLowerCase(),String(s)));case"delete":case"has":case"getAll":return i=>(Qa(i),URLSearchParams.prototype[n].call(r,String(i).toLowerCase()));case"keys":return()=>(r.sort(),new Set(URLSearchParams.prototype.keys.call(r)).keys());default:return Reflect.get(r,n,o)}}})}get[Symbol.toStringTag](){return this.constructor.name}toString(){return Object.prototype.toString.call(this)}get(t){let a=this.getAll(t);if(a.length===0)return null;let r=a.join(", ");return/^content-encoding$/i.test(t)&&(r=r.toLowerCase()),r}forEach(t,a=void 0){for(let r of this.keys())Reflect.apply(t,a,[this.get(r),r,this])}*values(){for(let t of this.keys())yield this.get(t)}*entries(){for(let t of this.keys())yield[t,this.get(t)]}[Symbol.iterator](){return this.entries()}raw(){return[...this.keys()].reduce((t,a)=>(t[a]=this.getAll(a),t),{})}[Symbol.for("nodejs.util.inspect.custom")](){return[...this.keys()].reduce((t,a)=>{let r=this.getAll(a);return a==="host"?t[a]=r[0]:t[a]=r.length>1?r:r[0],t},{})}};Object.defineProperties(X.prototype,["get","entries","forEach","values"].reduce((e,t)=>(e[t]={enumerable:!0},e),{}));function ei(e=[]){return new X(e.reduce((t,a,r,n)=>(r%2===0&&t.push(n.slice(r,r+2)),t),[]).filter(([t,a])=>{try{return Qa(t),Kr(t,String(a)),!0}catch{return!1}}))}var Sl=new Set([301,302,303,307,308]),Wa=e=>Sl.has(e);var le=Symbol("Response internals"),se=class e extends ge{constructor(t=null,a={}){super(t,a);let r=a.status!=null?a.status:200,n=new X(a.headers);if(t!==null&&!n.has("Content-Type")){let o=$a(t,this);o&&n.append("Content-Type",o)}this[le]={type:"default",url:a.url,status:r,statusText:a.statusText||"",headers:n,counter:a.counter,highWaterMark:a.highWaterMark}}get type(){return this[le].type}get url(){return this[le].url||""}get status(){return this[le].status}get ok(){return this[le].status>=200&&this[le].status<300}get redirected(){return this[le].counter>0}get statusText(){return this[le].statusText}get headers(){return this[le].headers}get highWaterMark(){return this[le].highWaterMark}clone(){return new e(ht(this,this.highWaterMark),{type:this.type,url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected,size:this.size,highWaterMark:this.highWaterMark})}static redirect(t,a=302){if(!Wa(a))throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');return new e(null,{headers:{location:new URL(t).toString()},status:a})}static error(){let t=new e(null,{status:0,statusText:""});return t[le].type="error",t}static json(t=void 0,a={}){let r=JSON.stringify(t);if(r===void 0)throw new TypeError("data is not JSON serializable");let n=new X(a&&a.headers);return n.has("content-type")||n.set("content-type","application/json"),new e(r,{...a,headers:n})}get[Symbol.toStringTag](){return"Response"}};Object.defineProperties(se.prototype,{type:{enumerable:!0},url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}});var pi=require("node:url"),li=require("node:util");var ti=e=>{if(e.search)return e.search;let t=e.href.length-1,a=e.hash||(e.href[t]==="#"?"#":"");return e.href[t-a.length]==="?"?"?":""};var ri=require("node:net");function ai(e,t=!1){return e==null||(e=new URL(e),/^(about|blob|data):$/.test(e.protocol))?"no-referrer":(e.username="",e.password="",e.hash="",t&&(e.pathname="",e.search=""),e)}var ni=new Set(["","no-referrer","no-referrer-when-downgrade","same-origin","origin","strict-origin","origin-when-cross-origin","strict-origin-when-cross-origin","unsafe-url"]),oi="strict-origin-when-cross-origin";function ii(e){if(!ni.has(e))throw new TypeError(`Invalid referrerPolicy: ${e}`);return e}function bl(e){if(/^(http|ws)s:$/.test(e.protocol))return!0;let t=e.host.replace(/(^\[)|(]$)/g,""),a=(0,ri.isIP)(t);return a===4&&/^127\./.test(t)||a===6&&/^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(t)?!0:e.host==="localhost"||e.host.endsWith(".localhost")?!1:e.protocol==="file:"}function xt(e){return/^about:(blank|srcdoc)$/.test(e)||e.protocol==="data:"||/^(blob|filesystem):$/.test(e.protocol)?!0:bl(e)}function si(e,{referrerURLCallback:t,referrerOriginCallback:a}={}){if(e.referrer==="no-referrer"||e.referrerPolicy==="")return null;let r=e.referrerPolicy;if(e.referrer==="about:client")return"no-referrer";let n=e.referrer,o=ai(n),i=ai(n,!0);o.toString().length>4096&&(o=i),t&&(o=t(o)),a&&(i=a(i));let s=new URL(e.url);switch(r){case"no-referrer":return"no-referrer";case"origin":return i;case"unsafe-url":return o;case"strict-origin":return xt(o)&&!xt(s)?"no-referrer":i.toString();case"strict-origin-when-cross-origin":return o.origin===s.origin?o:xt(o)&&!xt(s)?"no-referrer":i;case"same-origin":return o.origin===s.origin?o:"no-referrer";case"origin-when-cross-origin":return o.origin===s.origin?o:i;case"no-referrer-when-downgrade":return xt(o)&&!xt(s)?"no-referrer":o;default:throw new TypeError(`Invalid referrerPolicy: ${r}`)}}function ui(e){let t=(e.get("referrer-policy")||"").split(/[,\s]+/),a="";for(let r of t)r&&ni.has(r)&&(a=r);return a}var N=Symbol("Request internals"),Jt=e=>typeof e=="object"&&typeof e[N]=="object",Il=(0,li.deprecate)(()=>{},".data is not a valid RequestInit property, use .body instead","https://github.com/node-fetch/node-fetch/issues/1000 (request)"),ot=class e extends ge{constructor(t,a={}){let r;if(Jt(t)?r=new URL(t.url):(r=new URL(t),t={}),r.username!==""||r.password!=="")throw new TypeError(`${r} is an url with embedded credentials.`);let n=a.method||t.method||"GET";if(/^(delete|get|head|options|post|put)$/i.test(n)&&(n=n.toUpperCase()),!Jt(a)&&"data"in a&&Il(),(a.body!=null||Jt(t)&&t.body!==null)&&(n==="GET"||n==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");let o=a.body?a.body:Jt(t)&&t.body!==null?ht(t):null;super(o,{size:a.size||t.size||0});let i=new X(a.headers||t.headers||{});if(o!==null&&!i.has("Content-Type")){let p=$a(o,this);p&&i.set("Content-Type",p)}let s=Jt(t)?t.signal:null;if("signal"in a&&(s=a.signal),s!=null&&!Go(s))throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");let u=a.referrer==null?t.referrer:a.referrer;if(u==="")u="no-referrer";else if(u){let p=new URL(u);u=/^about:(\/\/)?client$/.test(p)?"client":p}else u=void 0;this[N]={method:n,redirect:a.redirect||t.redirect||"follow",headers:i,parsedURL:r,signal:s,referrer:u},this.follow=a.follow===void 0?t.follow===void 0?20:t.follow:a.follow,this.compress=a.compress===void 0?t.compress===void 0?!0:t.compress:a.compress,this.counter=a.counter||t.counter||0,this.agent=a.agent||t.agent,this.highWaterMark=a.highWaterMark||t.highWaterMark||16384,this.insecureHTTPParser=a.insecureHTTPParser||t.insecureHTTPParser||!1,this.referrerPolicy=a.referrerPolicy||t.referrerPolicy||""}get method(){return this[N].method}get url(){return(0,pi.format)(this[N].parsedURL)}get headers(){return this[N].headers}get redirect(){return this[N].redirect}get signal(){return this[N].signal}get referrer(){if(this[N].referrer==="no-referrer")return"";if(this[N].referrer==="client")return"about:client";if(this[N].referrer)return this[N].referrer.toString()}get referrerPolicy(){return this[N].referrerPolicy}set referrerPolicy(t){this[N].referrerPolicy=ii(t)}clone(){return new e(this)}get[Symbol.toStringTag](){return"Request"}};Object.defineProperties(ot.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0},referrer:{enumerable:!0},referrerPolicy:{enumerable:!0}});var ci=e=>{let{parsedURL:t}=e[N],a=new X(e[N].headers);a.has("Accept")||a.set("Accept","*/*");let r=null;if(e.body===null&&/^(post|put)$/i.test(e.method)&&(r="0"),e.body!==null){let s=Zo(e);typeof s=="number"&&!Number.isNaN(s)&&(r=String(s))}r&&a.set("Content-Length",r),e.referrerPolicy===""&&(e.referrerPolicy=oi),e.referrer&&e.referrer!=="no-referrer"?e[N].referrer=si(e):e[N].referrer="no-referrer",e[N].referrer instanceof URL&&a.set("Referer",e.referrer),a.has("User-Agent")||a.set("User-Agent","node-fetch"),e.compress&&!a.has("Accept-Encoding")&&a.set("Accept-Encoding","gzip, deflate, br");let{agent:n}=e;typeof n=="function"&&(n=n(t));let o=ti(t),i={path:t.pathname+o,method:e.method,headers:a[Symbol.for("nodejs.util.inspect.custom")](),insecureHTTPParser:e.insecureHTTPParser,agent:n};return{parsedURL:t,options:i}};var Ka=class extends xe{constructor(t,a="aborted"){super(t,a)}};ka();Gr();var gl=new Set(["data:","http:","https:"]);async function Ya(e,t){return new Promise((a,r)=>{let n=new ot(e,t),{parsedURL:o,options:i}=ci(n);if(!gl.has(o.protocol))throw new TypeError(`node-fetch cannot load ${e}. URL scheme "${o.protocol.replace(/:$/,"")}" is not supported.`);if(o.protocol==="data:"){let c=(0,Fa.default)(n.url),S=new se(c,{headers:{"Content-Type":c.typeFull}});a(S);return}let s=(o.protocol==="https:"?di.default:yi.default).request,{signal:u}=n,p=null,l=()=>{let c=new Ka("The operation was aborted.");r(c),n.body&&n.body instanceof ee.default.Readable&&n.body.destroy(c),!(!p||!p.body)&&p.body.emit("error",c)};if(u&&u.aborted){l();return}let y=()=>{l(),I()},d=s(o.toString(),i);u&&u.addEventListener("abort",y);let I=()=>{d.abort(),u&&u.removeEventListener("abort",y)};d.on("error",c=>{r(new W(`request to ${n.url} failed, reason: ${c.message}`,"system",c)),I()}),Ml(d,c=>{p&&p.body&&p.body.destroy(c)}),process.version<"v14"&&d.on("socket",c=>{let S;c.prependListener("end",()=>{S=c._eventsCount}),c.prependListener("close",b=>{if(p&&S<c._eventsCount&&!b){let g=new Error("Premature close");g.code="ERR_STREAM_PREMATURE_CLOSE",p.body.emit("error",g)}})}),d.on("response",c=>{d.setTimeout(0);let S=ei(c.rawHeaders);if(Wa(c.statusCode)){let M=S.get("Location"),E=null;try{E=M===null?null:new URL(M,n.url)}catch{if(n.redirect!=="manual"){r(new W(`uri requested responds with an invalid redirect URL: ${M}`,"invalid-redirect")),I();return}}switch(n.redirect){case"error":r(new W(`uri requested responds with a redirect, redirect mode is set to error: ${n.url}`,"no-redirect")),I();return;case"manual":break;case"follow":{if(E===null)break;if(n.counter>=n.follow){r(new W(`maximum redirect reached at: ${n.url}`,"max-redirect")),I();return}let A={headers:new X(n.headers),follow:n.follow,counter:n.counter+1,agent:n.agent,compress:n.compress,method:n.method,body:ht(n),signal:n.signal,size:n.size,referrer:n.referrer,referrerPolicy:n.referrerPolicy};if(!$o(n.url,E)||!Qo(n.url,E))for(let O of["authorization","www-authenticate","cookie","cookie2"])A.headers.delete(O);if(c.statusCode!==303&&n.body&&t.body instanceof ee.default.Readable){r(new W("Cannot follow redirect with body being a readable stream","unsupported-redirect")),I();return}(c.statusCode===303||(c.statusCode===301||c.statusCode===302)&&n.method==="POST")&&(A.method="GET",A.body=void 0,A.headers.delete("content-length"));let h=ui(S);h&&(A.referrerPolicy=h),a(Ya(new ot(E,A))),I();return}default:return r(new TypeError(`Redirect option '${n.redirect}' is not a valid value of RequestRedirect`))}}u&&c.once("end",()=>{u.removeEventListener("abort",y)});let b=(0,ee.pipeline)(c,new ee.PassThrough,M=>{M&&r(M)});process.version<"v12.10"&&c.on("aborted",y);let g={url:n.url,status:c.statusCode,statusText:c.statusMessage,headers:S,size:n.size,counter:n.counter,highWaterMark:n.highWaterMark},R=S.get("Content-Encoding");if(!n.compress||n.method==="HEAD"||R===null||c.statusCode===204||c.statusCode===304){p=new se(b,g),a(p);return}let f={flush:it.default.Z_SYNC_FLUSH,finishFlush:it.default.Z_SYNC_FLUSH};if(R==="gzip"||R==="x-gzip"){b=(0,ee.pipeline)(b,it.default.createGunzip(f),M=>{M&&r(M)}),p=new se(b,g),a(p);return}if(R==="deflate"||R==="x-deflate"){let M=(0,ee.pipeline)(c,new ee.PassThrough,E=>{E&&r(E)});M.once("data",E=>{(E[0]&15)===8?b=(0,ee.pipeline)(b,it.default.createInflate(),A=>{A&&r(A)}):b=(0,ee.pipeline)(b,it.default.createInflateRaw(),A=>{A&&r(A)}),p=new se(b,g),a(p)}),M.once("end",()=>{p||(p=new se(b,g),a(p))});return}if(R==="br"){b=(0,ee.pipeline)(b,it.default.createBrotliDecompress(),M=>{M&&r(M)}),p=new se(b,g),a(p);return}p=new se(b,g),a(p)}),Xo(d,n).catch(r)})}function Ml(e,t){let a=Zt.Buffer.from(`0\r
\r
`),r=!1,n=!1,o;e.on("response",i=>{let{headers:s}=i;r=s["transfer-encoding"]==="chunked"&&!s["content-length"]}),e.on("socket",i=>{let s=()=>{if(r&&!n){let p=new Error("Premature close");p.code="ERR_STREAM_PREMATURE_CLOSE",t(p)}},u=p=>{n=Zt.Buffer.compare(p.slice(-5),a)===0,!n&&o&&(n=Zt.Buffer.compare(o.slice(-3),a.slice(0,3))===0&&Zt.Buffer.compare(p.slice(-2),a.slice(3))===0),o=p};i.prependListener("close",s),i.on("data",u),e.on("close",()=>{i.removeListener("close",s),i.removeListener("data",u)})})}var m=T(require("graphql-tag")),Xt=m.default`
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
`,ml=m.default`
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
`,Me=m.default`
  fragment UserFields on User {
    id
    avatarUrl
    name
    login
    isViewer
  }
`,ea=m.default`
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
`,Ja=m.default`
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
  ${Me}
`,Rl=m.default`
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
  ${Me}
`,Si=m.default`
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
`,bi=m.default`
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
`,Ii=m.default`
  fragment RepositoryMentionFields on Repository {
    nameWithOwner
    description
    isPrivate
    isArchived
    owner {
      avatarUrl(size: 64)
    }
  }
`,fl=m.default`
  fragment ProjectViewerFields on ProjectV2View {
    id
    name
    number
  }
`,gi=m.default`
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
  ${fl}
`,Mi=m.default`
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
  ${Me}
`,Al=m.default`
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
  ${Me}
`,El=m.default`
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
`,mi=m.default`
  fragment CommitFields on Commit {
    authoredDate
    oid
    message
  }
`,Yr=m.default`
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
`,Pl=m.default`
  fragment ReleaseFields on Release {
    id
    description
    name
    publishedAt
    createdAt
    tagName
    url
  }
`,Cl=m.default`
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
`,hl=m.default`
  mutation createRef($input: CreateRefInput!) {
    createRef(input: $input) {
      clientMutationId
      ref {
        id
        name
      }
    }
  }
`,xl=m.default`
  mutation deleteLinkedBranch($input: DeleteLinkedBranchInput!) {
    deleteLinkedBranch(input: $input) {
      clientMutationId
    }
  }
`,Dl=m.default`
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
  ${ml}
`,Ul=m.default`
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
`,_l=m.default`
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
`,vl=m.default`
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
`,Tl=m.default`
  query issueDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...IssueDetailFields
    }
  }
  ${Rl}
`,wl=m.default`
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
  ${Ja}
`,Ol=m.default`
  query issueByNumber($owner: String!, $name: String!, $issueNumber: Int!) {
    repository(owner: $owner, name: $name) {
      issue(number: $issueNumber) {
        ...IssueFields
      }
    }
  }
  ${Ja}
`,Bl=m.default`
  mutation closeIssue($nodeId: ID!, $stateReason: IssueClosedStateReason!) {
    closeIssue(input: { issueId: $nodeId, stateReason: $stateReason }) {
      issue {
        id
      }
    }
  }
`,Ll=m.default`
  mutation reopenIssue($nodeId: ID!) {
    reopenIssue(input: { issueId: $nodeId }) {
      issue {
        id
      }
    }
  }
`,ql=m.default`
  mutation changeIssueAssignees($issueId: ID!, $assigneeIds: [ID!]) {
    updateIssue(input: { id: $issueId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,Nl=m.default`
  mutation changeIssueMilestone($issueId: ID!, $milestoneId: ID) {
    updateIssue(input: { id: $issueId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,Vl=m.default`
  mutation addIssueToProject($issueId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $issueId }) {
      clientMutationId
    }
  }
`,Fl=m.default`
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
  ${Ja}
`,jl=m.default`
  query searchIssueMentions($query: String!, $numberOfItems: Int!) {
    search(query: $query, type: ISSUE, first: $numberOfItems) {
      nodes {
        ... on Issue {
          ...IssueMentionFields
        }
      }
    }
  }
  ${Si}
`,kl=m.default`
  query searchPullRequestMentions($query: String!, $numberOfItems: Int!) {
    search(query: $query, type: ISSUE, first: $numberOfItems) {
      nodes {
        ... on PullRequest {
          ...PullRequestMentionFields
        }
      }
    }
  }
  ${bi}
`,zl=m.default`
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
  ${Si}
  ${bi}
`,Hl=m.default`
  query searchRepositoryMentions($query: String!, $numberOfItems: Int!) {
    search(query: $query, type: REPOSITORY, first: $numberOfItems) {
      nodes {
        ... on Repository {
          ...RepositoryMentionFields
        }
      }
    }
  }
  ${Ii}
`,Gl=m.default`
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
  ${Ii}
`,$l=m.default`
  mutation changeProjectStatus($projectId: ID!, $closed: Boolean!) {
    updateProjectV2(input: { projectId: $projectId, closed: $closed }) {
      clientMutationId
    }
  }
`,Ql=m.default`
  query projectDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...ProjectFields
    }
  }
  ${gi}
`,Wl=m.default`
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
  ${Mi}
`,Kl=m.default`
  query pullRequestDetails($nodeId: ID!) {
    node(id: $nodeId) {
      ...PullRequestDetailsFields
    }
  }
  ${Al}
`,Yl=m.default`
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
`,Jl=m.default`
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
`,Zl=m.default`
  query pullRequestCommits($nodeId: ID!, $numberOfItems: Int!, $before: String) {
    node(id: $nodeId) {
      ...PullRequestCommitFields
    }
  }
  ${El}
`,Xl=m.default`
  mutation closePullRequest($nodeId: ID!) {
    closePullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,ec=m.default`
  mutation reopenPullRequest($nodeId: ID!) {
    reopenPullRequest(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,tc=m.default`
  mutation markPullRequestReadyForReview($nodeId: ID!) {
    markPullRequestReadyForReview(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,ac=m.default`
  mutation addPullRequestReview($nodeId: ID!, $event: PullRequestReviewEvent, $body: String) {
    addPullRequestReview(input: { pullRequestId: $nodeId, event: $event, body: $body }) {
      pullRequestReview {
        id
      }
    }
  }
`,rc=m.default`
  mutation changePullRequestAssignees($pullRequestId: ID!, $assigneeIds: [ID!]) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, assigneeIds: $assigneeIds }) {
      clientMutationId
    }
  }
`,nc=m.default`
  mutation changePullRequestMilestone($pullRequestId: ID!, $milestoneId: ID) {
    updatePullRequest(input: { pullRequestId: $pullRequestId, milestoneId: $milestoneId }) {
      clientMutationId
    }
  }
`,oc=m.default`
  mutation addPullRequestToProject($pullRequestId: ID!, $projectId: ID!) {
    addProjectV2ItemById(input: { projectId: $projectId, contentId: $pullRequestId }) {
      clientMutationId
    }
  }
`,ic=m.default`
  mutation requestReview($pullRequestId: ID!, $collaboratorId: ID!) {
    requestReviews(input: { pullRequestId: $pullRequestId, userIds: [$collaboratorId], union: true }) {
      clientMutationId
    }
  }
`,sc=m.default`
  mutation mergePullRequest($nodeId: ID!, $method: PullRequestMergeMethod!) {
    mergePullRequest(input: { pullRequestId: $nodeId, mergeMethod: $method }) {
      pullRequest {
        nodeId: id
      }
    }
  }
`,uc=m.default`
  mutation addPullRequestToMergeQueue($nodeId: ID!) {
    enqueuePullRequest(input: { pullRequestId: $nodeId }) {
      __typename
    }
  }
`,pc=m.default`
  mutation removePullRequestFromMergeQueue($nodeId: ID!) {
    dequeuePullRequest(input: { id: $nodeId }) {
      __typename
    }
  }
`,lc=m.default`
  mutation enablePullRequestAutoMerge($nodeId: ID!, $mergeMethod: PullRequestMergeMethod) {
    enablePullRequestAutoMerge(input: { pullRequestId: $nodeId, mergeMethod: $mergeMethod }) {
      pullRequest {
        id
      }
    }
  }
`,cc=m.default`
  mutation disablePullRequestAutoMerge($nodeId: ID!) {
    disablePullRequestAutoMerge(input: { pullRequestId: $nodeId }) {
      pullRequest {
        id
      }
    }
  }
`,yc=m.default`
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
`,dc=m.default`
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
  ${Mi}
`,Sc=m.default`
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
  ${Yr}
`,bc=m.default`
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
  ${Yr}
`,Ic=m.default`
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
`,gc=m.default`
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
`,Mc=m.default`
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
  ${mi}
  ${Me}
`,mc=m.default`
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
  ${mi}
`,Rc=m.default`
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
  ${Ja}
`,fc=m.default`
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
  ${Pl}
`,Ac=m.default`
  mutation addStar($repositoryId: ID!) {
    addStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,Ec=m.default`
  mutation removeStar($repositoryId: ID!) {
    removeStar(input: { starrableId: $repositoryId }) {
      clientMutationId
    }
  }
`,Pc=m.default`
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
  ${Yr}
`,Cc=m.default`
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
  ${gi}
`,hc=m.default`
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
`,xc=m.default`
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
`,Dc=(e,t,a,r)=>e();function Ri(e,t=Dc){return{createLinkedBranch(a,r,n){return t(o=>e.request({document:Cl,variables:a,requestHeaders:{...r,...o},signal:n}),"createLinkedBranch","mutation",a)},createRef(a,r,n){return t(o=>e.request({document:hl,variables:a,requestHeaders:{...r,...o},signal:n}),"createRef","mutation",a)},deleteLinkedBranch(a,r,n){return t(o=>e.request({document:xl,variables:a,requestHeaders:{...r,...o},signal:n}),"deleteLinkedBranch","mutation",a)},searchDiscussions(a,r,n){return t(o=>e.request({document:Dl,variables:a,requestHeaders:{...r,...o},signal:n}),"searchDiscussions","query",a)},getGitHubDiscussionNumber(a,r,n){return t(o=>e.request({document:Ul,variables:a,requestHeaders:{...r,...o},signal:n}),"getGitHubDiscussionNumber","query",a)},repositoryCollaboratorsForIssues(a,r,n){return t(o=>e.request({document:_l,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryCollaboratorsForIssues","query",a)},repositoryProjectsForIssues(a,r,n){return t(o=>e.request({document:vl,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryProjectsForIssues","query",a)},issueDetails(a,r,n){return t(o=>e.request({document:Tl,variables:a,requestHeaders:{...r,...o},signal:n}),"issueDetails","query",a)},searchIssues(a,r,n){return t(o=>e.request({document:wl,variables:a,requestHeaders:{...r,...o},signal:n}),"searchIssues","query",a)},issueByNumber(a,r,n){return t(o=>e.request({document:Ol,variables:a,requestHeaders:{...r,...o},signal:n}),"issueByNumber","query",a)},closeIssue(a,r,n){return t(o=>e.request({document:Bl,variables:a,requestHeaders:{...r,...o},signal:n}),"closeIssue","mutation",a)},reopenIssue(a,r,n){return t(o=>e.request({document:Ll,variables:a,requestHeaders:{...r,...o},signal:n}),"reopenIssue","mutation",a)},changeIssueAssignees(a,r,n){return t(o=>e.request({document:ql,variables:a,requestHeaders:{...r,...o},signal:n}),"changeIssueAssignees","mutation",a)},changeIssueMilestone(a,r,n){return t(o=>e.request({document:Nl,variables:a,requestHeaders:{...r,...o},signal:n}),"changeIssueMilestone","mutation",a)},addIssueToProject(a,r,n){return t(o=>e.request({document:Vl,variables:a,requestHeaders:{...r,...o},signal:n}),"addIssueToProject","mutation",a)},createIssue(a,r,n){return t(o=>e.request({document:Fl,variables:a,requestHeaders:{...r,...o},signal:n}),"createIssue","mutation",a)},searchIssueMentions(a,r,n){return t(o=>e.request({document:jl,variables:a,requestHeaders:{...r,...o},signal:n}),"searchIssueMentions","query",a)},searchPullRequestMentions(a,r,n){return t(o=>e.request({document:kl,variables:a,requestHeaders:{...r,...o},signal:n}),"searchPullRequestMentions","query",a)},issueOrPullRequestMention(a,r,n){return t(o=>e.request({document:zl,variables:a,requestHeaders:{...r,...o},signal:n}),"issueOrPullRequestMention","query",a)},searchRepositoryMentions(a,r,n){return t(o=>e.request({document:Hl,variables:a,requestHeaders:{...r,...o},signal:n}),"searchRepositoryMentions","query",a)},viewerRepositoryMentions(a,r,n){return t(o=>e.request({document:Gl,variables:a,requestHeaders:{...r,...o},signal:n}),"viewerRepositoryMentions","query",a)},changeProjectStatus(a,r,n){return t(o=>e.request({document:$l,variables:a,requestHeaders:{...r,...o},signal:n}),"changeProjectStatus","mutation",a)},projectDetails(a,r,n){return t(o=>e.request({document:Ql,variables:a,requestHeaders:{...r,...o},signal:n}),"projectDetails","query",a)},searchPullRequests(a,r,n){return t(o=>e.request({document:Wl,variables:a,requestHeaders:{...r,...o},signal:n}),"searchPullRequests","query",a)},pullRequestDetails(a,r,n){return t(o=>e.request({document:Kl,variables:a,requestHeaders:{...r,...o},signal:n}),"pullRequestDetails","query",a)},repositoryCollaboratorsForPullRequests(a,r,n){return t(o=>e.request({document:Yl,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryCollaboratorsForPullRequests","query",a)},repositoryProjectsForPullRequests(a,r,n){return t(o=>e.request({document:Jl,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryProjectsForPullRequests","query",a)},pullRequestCommits(a,r,n){return t(o=>e.request({document:Zl,variables:a,requestHeaders:{...r,...o},signal:n}),"pullRequestCommits","query",a)},closePullRequest(a,r,n){return t(o=>e.request({document:Xl,variables:a,requestHeaders:{...r,...o},signal:n}),"closePullRequest","mutation",a)},reopenPullRequest(a,r,n){return t(o=>e.request({document:ec,variables:a,requestHeaders:{...r,...o},signal:n}),"reopenPullRequest","mutation",a)},markPullRequestReadyForReview(a,r,n){return t(o=>e.request({document:tc,variables:a,requestHeaders:{...r,...o},signal:n}),"markPullRequestReadyForReview","mutation",a)},addPullRequestReview(a,r,n){return t(o=>e.request({document:ac,variables:a,requestHeaders:{...r,...o},signal:n}),"addPullRequestReview","mutation",a)},changePullRequestAssignees(a,r,n){return t(o=>e.request({document:rc,variables:a,requestHeaders:{...r,...o},signal:n}),"changePullRequestAssignees","mutation",a)},changePullRequestMilestone(a,r,n){return t(o=>e.request({document:nc,variables:a,requestHeaders:{...r,...o},signal:n}),"changePullRequestMilestone","mutation",a)},addPullRequestToProject(a,r,n){return t(o=>e.request({document:oc,variables:a,requestHeaders:{...r,...o},signal:n}),"addPullRequestToProject","mutation",a)},requestReview(a,r,n){return t(o=>e.request({document:ic,variables:a,requestHeaders:{...r,...o},signal:n}),"requestReview","mutation",a)},mergePullRequest(a,r,n){return t(o=>e.request({document:sc,variables:a,requestHeaders:{...r,...o},signal:n}),"mergePullRequest","mutation",a)},addPullRequestToMergeQueue(a,r,n){return t(o=>e.request({document:uc,variables:a,requestHeaders:{...r,...o},signal:n}),"addPullRequestToMergeQueue","mutation",a)},removePullRequestFromMergeQueue(a,r,n){return t(o=>e.request({document:pc,variables:a,requestHeaders:{...r,...o},signal:n}),"removePullRequestFromMergeQueue","mutation",a)},enablePullRequestAutoMerge(a,r,n){return t(o=>e.request({document:lc,variables:a,requestHeaders:{...r,...o},signal:n}),"enablePullRequestAutoMerge","mutation",a)},disablePullRequestAutoMerge(a,r,n){return t(o=>e.request({document:cc,variables:a,requestHeaders:{...r,...o},signal:n}),"disablePullRequestAutoMerge","mutation",a)},createPullRequest(a,r,n){return t(o=>e.request({document:yc,variables:a,requestHeaders:{...r,...o},signal:n}),"createPullRequest","mutation",a)},initPullRequest(a,r,n){return t(o=>e.request({document:dc,variables:a,requestHeaders:{...r,...o},signal:n}),"initPullRequest","mutation",a)},searchRepositories(a,r,n){return t(o=>e.request({document:Sc,variables:a,requestHeaders:{...r,...o},signal:n}),"searchRepositories","query",a)},myLatestRepositories(a,r,n){return t(o=>e.request({document:bc,variables:a,requestHeaders:{...r,...o},signal:n}),"myLatestRepositories","query",a)},milestonesForRepository(a,r,n){return t(o=>e.request({document:Ic,variables:a,requestHeaders:{...r,...o},signal:n}),"milestonesForRepository","query",a)},commentsForPullRequest(a,r,n){return t(o=>e.request({document:gc,variables:a,requestHeaders:{...r,...o},signal:n}),"commentsForPullRequest","query",a)},dataForRepository(a,r,n){return t(o=>e.request({document:Mc,variables:a,requestHeaders:{...r,...o},signal:n}),"dataForRepository","query",a)},searchRepositoryBranches(a,r,n){return t(o=>e.request({document:mc,variables:a,requestHeaders:{...r,...o},signal:n}),"searchRepositoryBranches","query",a)},repositoryIssues(a,r,n){return t(o=>e.request({document:Rc,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryIssues","query",a)},repositoryReleases(a,r,n){return t(o=>e.request({document:fc,variables:a,requestHeaders:{...r,...o},signal:n}),"repositoryReleases","query",a)},addStar(a,r,n){return t(o=>e.request({document:Ac,variables:a,requestHeaders:{...r,...o},signal:n}),"addStar","mutation",a)},removeStar(a,r,n){return t(o=>e.request({document:Ec,variables:a,requestHeaders:{...r,...o},signal:n}),"removeStar","mutation",a)},myStarredRepositories(a,r,n){return t(o=>e.request({document:Pc,variables:a,requestHeaders:{...r,...o},signal:n}),"myStarredRepositories","query",a)},getViewer(a,r,n){return t(o=>e.request({document:Cc,variables:a,requestHeaders:{...r,...o},signal:n}),"getViewer","query",a)},getViewerStats(a,r,n){return t(o=>e.request({document:hc,variables:a,requestHeaders:{...r,...o},signal:n}),"getViewerStats","query",a)},getViewerStatsDetails(a,r,n){return t(o=>e.request({document:xc,variables:a,requestHeaders:{...r,...o},signal:n}),"getViewerStatsDetails","query",a)}}}var Jr=null,Zr=null,Pi=null,Uc=(0,Ai.getPreferenceValues)();function _c({token:e,type:t}){let a=t==="personal"?`token ${e}`:`bearer ${e}`;Pi=e,Jr=Ri(new Va("https://api.github.com/graphql",{headers:{authorization:a}})),Zr=new fi.Octokit({auth:e,request:{fetch:Ya}})}var Ci=Ei.OAuthService.github({personalAccessToken:Uc.personalAccessToken,scope:"notifications repo project read:org read:user read:packages",onAuthorize:_c});function hi(){if(!Jr||!Zr)throw new Error("GitHub clients not initialized");return{github:Jr,octokit:Zr,token:Pi}}var na=T(require("fs")),pn=require("fs/promises"),Qi=T(require("os")),Te=T(require("path")),Wi=require("stream/promises"),Ki=T(Gi());function kc(e){let a=new URL(e).pathname.split("/").filter(Boolean),r=a[0],n=a[1],o="root",i,s;if(a.length>2){let u=a[2];u==="tree"?(o="tree",i=a[3],a.length>4&&(s=a.slice(4).join("/"))):u==="blob"&&(o="blob",i=a[3],a.length>4&&(s=a.slice(4).join("/")))}return{owner:r,repo:n,type:o,ref:i,path:s}}async function $i(e,t,a){await new Promise((r,n)=>{let o=na.default.createWriteStream(t);o.on("finish",r),o.on("error",n);let i=e.getReader();(async()=>{try{let s=!1;for(;!s;){let{done:u,value:p}=await i.read();s=u,p&&(a?.(p),o.write(Buffer.from(p))||await new Promise(l=>o.once("drain",l)))}o.end()}catch(s){o.destroy(),n(s)}})()})}async function Yi(e,t,a,r){let n=kc(e),{owner:o,repo:i,type:s}=n,{ref:u}=n,{path:p}=n,l={Accept:"application/vnd.github.v3+json"};a&&(l.Authorization=`token ${a}`),r("Checking repository access...");let y=await fetch(`https://api.github.com/repos/${o}/${i}`,{headers:l});if(!y.ok)throw y.status===404?new Error("Repository not found. Ensure you have the correct permissions."):y.status===403?new Error("Access denied. Please check your GitHub token permissions."):new Error(`GitHub API Error: ${y.statusText}`);let d=await y.json();if(u||(u=d.default_branch||"main"),s==="blob"&&p){let g=Te.default.basename(p),R=Te.default.join(t,g);r(`Downloading file: ${g}...`);let f=`https://api.github.com/repos/${o}/${i}/contents/${p}?ref=${u}`,M={...l,Accept:"application/vnd.github.v3.raw"},E=await fetch(f,{headers:M});if(!E.ok)throw new Error(`Failed to download file: ${E.statusText}`);if(!E.body)throw new Error("Empty response body");return await $i(E.body,R),R}r("Downloading archive...");let I=`https://api.github.com/repos/${o}/${i}/zipball/${u}`,c=Qi.default.tmpdir(),S=i.replace(/[^a-zA-Z0-9._-]/g,"_"),b=Te.default.join(c,`${S}-${Date.now()}.zip`);try{let g=await fetch(I,{headers:l});if(!g.ok)throw new Error(`Failed to download archive: ${g.statusText}`);if(!g.body)throw new Error("Empty response body");let R=g.body,f=Number(g.headers.get("content-length"))||void 0,M=f?(f/(1024*1024)).toFixed(1):void 0,E=0;await $i(R,b,O=>{E+=O.length;let v=`Downloading... ${(E/(1024*1024)).toFixed(1)} MB`;if(f&&M){let x=Math.min(Math.round(E/f*100),100);v+=` / ${M} MB (${x}%)`}r(v)}),r("Extracting files...");let A=p?Te.default.basename(p):i,h=Te.default.join(t,A);return await(0,pn.mkdir)(h,{recursive:!0}),await new Promise((O,B)=>{Ki.default.open(b,{lazyEntries:!0},(v,x)=>{if(v)return B(v);let G=0,k="";x.readEntry(),x.on("entry",P=>{k||(k=P.fileName.split("/")[0]+"/");let F=p?`${k}${p}/`:k;if(P.fileName.endsWith("/"))x.readEntry();else if(P.fileName.startsWith(F)){let We=P.fileName.substring(F.length),Ke=Te.default.join(h,We);if(!Ke.startsWith(h+Te.default.sep)){x.readEntry();return}let ur=Te.default.dirname(Ke);(0,pn.mkdir)(ur,{recursive:!0}).then(()=>{x.openReadStream(P,(yn,es)=>{if(yn)return B(yn);let ts=na.default.createWriteStream(Ke);(0,Wi.pipeline)(es,ts).then(()=>{G++,x.readEntry()}).catch(B)})}).catch(B)}else x.readEntry()}),x.on("end",()=>{G===0?B(new Error(`No files found in '${p||"repository"}'`)):O()}),x.on("error",B)})}),h}finally{na.default.existsSync(b)&&na.default.unlinkSync(b)}}var Ji=T(jr());var Zi=(0,Ji.withAccessToken)(Ci);var we=require("react/jsx-runtime");function zc(){let[e,t]=(0,Qe.useState)([]),[a,r]=(0,Qe.useState)(""),[n,o]=(0,Qe.useState)(!1),[i,s]=(0,Qe.useState)(),[u,p]=(0,Qe.useState)(!1);(0,Qe.useEffect)(()=>{async function I(){let c=await U.LocalStorage.getItem("lastDownloadPath");if(c&&ln.default.existsSync(c))t([c]);else{let b=Xi.default.homedir(),g=cn.default.join(b,"Downloads");ln.default.existsSync(g)&&t([g])}let S=await U.Clipboard.readText();S&&l(S)&&r(S),p(!0)}I()},[]);function l(I){try{return new URL(I).hostname==="github.com"}catch{return!1}}function y(I){if(!I)return"GitHub URL is required";try{let c=new URL(I);if(c.hostname!=="github.com")return"Must be a valid GitHub URL (github.com)";if(c.pathname.split("/").filter(Boolean).length<2)return"Invalid repository URL (needs owner/repo)"}catch{return"Invalid URL format"}}async function d(I){let c=y(I.url);if(c){s(c);return}if(!I.downloadPath||I.downloadPath.length===0){await(0,U.showToast)({style:U.Toast.Style.Failure,title:"Please select a download location"});return}o(!0);let S=await(0,U.showToast)({style:U.Toast.Style.Animated,title:"Starting Download..."});try{let{token:b}=hi(),g=I.downloadPath[0];await U.LocalStorage.setItem("lastDownloadPath",g);let R=await Yi(I.url,g,b,f=>{S.message=f});S.style=U.Toast.Style.Success,S.title="Download Complete",S.message=`Saved to ${cn.default.basename(R)}`,S.primaryAction={title:"Open in Finder",onAction:()=>(0,U.open)(R)}}catch(b){S.style=U.Toast.Style.Failure,S.title="Download Failed",S.message=b instanceof Error?b.message:"Unknown error"}finally{o(!1)}}return u?(0,we.jsxs)(U.Form,{navigationTitle:"Download Repository as ZIP",isLoading:n,actions:(0,we.jsx)(U.ActionPanel,{children:(0,we.jsx)(U.Action.SubmitForm,{title:"Download ZIP",onSubmit:d})}),children:[(0,we.jsx)(U.Form.Description,{title:"ZIP Download",text:"Downloads GitHub content as an archive. This does not create a Git repository or use the Default Clone Path."}),(0,we.jsx)(U.Form.TextField,{id:"url",title:"GitHub URL",placeholder:"https://github.com/owner/repo/tree/main/folder",value:a,error:i,onChange:I=>{r(I),i&&s(void 0)}}),(0,we.jsx)(U.Form.FilePicker,{id:"downloadPath",title:"Download Location",allowMultipleSelection:!1,canChooseDirectories:!0,canChooseFiles:!1,value:e,onChange:t})]}):(0,we.jsx)(U.Form,{isLoading:!0})}var Hc=Zi(zc);
