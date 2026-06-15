!function(){const t={DEBUG:"false"};try{if(process)return process.env=Object.assign({},process.env),void Object.assign(process.env,t)}catch(t){}globalThis.process={env:t}}();var t="little-aircon";function e(t,e,i,s){var n,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,i,o):n(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o}"function"==typeof SuppressedError&&SuppressedError;const i=globalThis,s=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),r=new WeakMap;let o=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(e,t))}return t}toString(){return this.cssText}};const a=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,n))(e)})(t):t,{is:c,defineProperty:l,getOwnPropertyDescriptor:h,getOwnPropertyNames:d,getOwnPropertySymbols:u,getPrototypeOf:p}=Object,f=globalThis,g=f.trustedTypes,m=g?g.emptyScript:"",v=f.reactiveElementPolyfillSupport,y=(t,e)=>t,_={toAttribute(t,e){switch(e){case Boolean:t=t?m:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},$=(t,e)=>!c(t,e),b={attribute:!0,type:String,converter:_,reflect:!1,useDefault:!1,hasChanged:$};Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;let w=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&l(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:n}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const r=s?.call(this);n?.call(this,e),this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const t=this.properties,e=[...d(t),...u(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(s)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const s of e){const e=document.createElement("style"),n=i.litNonce;void 0!==n&&e.setAttribute("nonce",n),e.textContent=s.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:_).toAttribute(e,i.type);this._$Em=t,null==n?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:_;this._$Em=s;const r=n.fromAttribute(e,t.type);this[s]=r??this._$Ej?.get(s)??r,this._$Em=null}}requestUpdate(t,e,i,s=!1,n){if(void 0!==t){const r=this.constructor;if(!1===s&&(n=this[t]),i??=r.getPropertyOptions(t),!((i.hasChanged??$)(n,e)||i.useDefault&&i.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:n},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),!0!==n||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[y("elementProperties")]=new Map,w[y("finalized")]=new Map,v?.({ReactiveElement:w}),(f.reactiveElementVersions??=[]).push("2.1.2");const x=globalThis,A=t=>t,E=x.trustedTypes,S=E?E.createPolicy("lit-html",{createHTML:t=>t}):void 0,O="$lit$",P=`lit$${Math.random().toFixed(9).slice(2)}$`,C="?"+P,k=`<${C}>`,T=document,j=()=>T.createComment(""),z=t=>null===t||"object"!=typeof t&&"function"!=typeof t,N=Array.isArray,R="[ \t\n\f\r]",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,U=/-->/g,M=/>/g,I=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),F=/'/g,D=/"/g,L=/^(?:script|style|textarea|title)$/i,B=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),W=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),q=new WeakMap,J=T.createTreeWalker(T,129);function Y(t,e){if(!N(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}const G=(t,e)=>{const i=t.length-1,s=[];let n,r=2===e?"<svg>":3===e?"<math>":"",o=H;for(let e=0;e<i;e++){const i=t[e];let a,c,l=-1,h=0;for(;h<i.length&&(o.lastIndex=h,c=o.exec(i),null!==c);)h=o.lastIndex,o===H?"!--"===c[1]?o=U:void 0!==c[1]?o=M:void 0!==c[2]?(L.test(c[2])&&(n=RegExp("</"+c[2],"g")),o=I):void 0!==c[3]&&(o=I):o===I?">"===c[0]?(o=n??H,l=-1):void 0===c[1]?l=-2:(l=o.lastIndex-c[2].length,a=c[1],o=void 0===c[3]?I:'"'===c[3]?D:F):o===D||o===F?o=I:o===U||o===M?o=H:(o=I,n=void 0);const d=o===I&&t[e+1].startsWith("/>")?" ":"";r+=o===H?i+k:l>=0?(s.push(a),i.slice(0,l)+O+i.slice(l)+P+d):i+P+(-2===l?e:d)}return[Y(t,r+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class K{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,r=0;const o=t.length-1,a=this.parts,[c,l]=G(t,e);if(this.el=K.createElement(c,i),J.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=J.nextNode())&&a.length<o;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(O)){const e=l[r++],i=s.getAttribute(t).split(P),o=/([.?@])?(.*)/.exec(e);a.push({type:1,index:n,name:o[2],strings:i,ctor:"."===o[1]?et:"?"===o[1]?it:"@"===o[1]?st:tt}),s.removeAttribute(t)}else t.startsWith(P)&&(a.push({type:6,index:n}),s.removeAttribute(t));if(L.test(s.tagName)){const t=s.textContent.split(P),e=t.length-1;if(e>0){s.textContent=E?E.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],j()),J.nextNode(),a.push({type:2,index:++n});s.append(t[e],j())}}}else if(8===s.nodeType)if(s.data===C)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(P,t+1));)a.push({type:7,index:n}),t+=P.length-1}n++}}static createElement(t,e){const i=T.createElement("template");return i.innerHTML=t,i}}function Z(t,e,i=t,s){if(e===W)return e;let n=void 0!==s?i._$Co?.[s]:i._$Cl;const r=z(e)?void 0:e._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),void 0===r?n=void 0:(n=new r(t),n._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=n:i._$Cl=n),void 0!==n&&(e=Z(t,n._$AS(t,e.values),n,s)),e}class Q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??T).importNode(e,!0);J.currentNode=s;let n=J.nextNode(),r=0,o=0,a=i[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new X(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new nt(n,this,t)),this._$AV.push(e),a=i[++o]}r!==a?.index&&(n=J.nextNode(),r++)}return J.currentNode=T,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class X{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Z(this,t,e),z(t)?t===V||null==t||""===t?(this._$AH!==V&&this._$AR(),this._$AH=V):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>N(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==V&&z(this._$AH)?this._$AA.nextSibling.data=t:this.T(T.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=K.createElement(Y(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new Q(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=q.get(t.strings);return void 0===e&&q.set(t.strings,e=new K(t)),e}k(t){N(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new X(this.O(j()),this.O(j()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=A(t).nextSibling;A(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,n){this.type=1,this._$AH=V,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=V}_$AI(t,e=this,i,s){const n=this.strings;let r=!1;if(void 0===n)t=Z(this,t,e,0),r=!z(t)||t!==this._$AH&&t!==W,r&&(this._$AH=t);else{const s=t;let o,a;for(t=n[0],o=0;o<n.length-1;o++)a=Z(this,s[i+o],e,o),a===W&&(a=this._$AH[o]),r||=!z(a)||a!==this._$AH[o],a===V?t=V:t!==V&&(t+=(a??"")+n[o+1]),this._$AH[o]=a}r&&!s&&this.j(t)}j(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===V?void 0:t}}class it extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==V)}}class st extends tt{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){if((t=Z(this,t,e,0)??V)===W)return;const i=this._$AH,s=t===V&&i!==V||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==V&&(i===V||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class nt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Z(this,t)}}const rt=x.litHtmlPolyfillSupport;rt?.(K,X),(x.litHtmlVersions??=[]).push("3.3.2");const ot=globalThis;let at=class extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let n=s._$litPart$;if(void 0===n){const t=i?.renderBefore??null;s._$litPart$=n=new X(e.insertBefore(j(),t),t,void 0,i??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}};at._$litElement$=!0,at.finalized=!0,ot.litElementHydrateSupport?.({LitElement:at});const ct=ot.litElementPolyfillSupport;ct?.({LitElement:at}),(ot.litElementVersions??=[]).push("4.2.2");const lt={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:$},ht=(t=lt,e,i)=>{const{kind:s,metadata:n}=i;let r=globalThis.litPropertyMetadata.get(n);if(void 0===r&&globalThis.litPropertyMetadata.set(n,r=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),r.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const n=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,n,t,!0,i)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=i;return function(i){const n=this[s];e.call(this,i),this.requestUpdate(s,n,t,!0,i)}}throw Error("Unsupported decorator location: "+s)};function dt(t){return(e,i)=>"object"==typeof i?ht(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}var ut=((t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new o(i,t,n)})`:host {
  --st-default-spacing: 4px;
}
ha-card {
  font-smoothing: var(--ha-font-smoothing);
  font-size: var(--ha-font-size-m);
  font-weight: var(--ha-font-weight-body);
  line-height: var(--ha-line-height-normal);

  padding-bottom: calc(var(--st-spacing, var(--st-default-spacing)) * 2);

  --auto-color: green;
  --heat_cool-color: springgreen;
  --cool-color: #2b9af9;
  --heat-color: #ff8100;
  --manual-color: #44739e;
  --off-color: #8a8a8a;
  --fan_only-color: #8a8a8a;
  --dry-color: #efbd07;
}

ha-card.no-header {
  padding: calc(var(--st-spacing, var(--st-default-spacing)) * 4) 0;
}

.body {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(min-content, auto);
  align-items: center;
  justify-items: center;
  place-items: center;
  padding: 0 calc(var(--st-spacing, var(--st-default-spacing)) * 4);
  padding-bottom: calc(var(--st-spacing, var(--st-default-spacing)) * 2);
}

.toggle-label {
  color: var(--st-toggle-label-color, var(--primary-text-color));
  margin-right: calc(var(--st-spacing, var(--st-default-spacing)) * 2);
  font-size: var(
    --st-font-size-toggle-label,
    var(--ha-font-size-m)
  );
}

.faults {
  display: flex;
  flex-direction: row;
  margin-left: calc(var(--st-spacing, var(--st-default-spacing)) * 2);
}
.fault-icon {
  padding: 2px;
  cursor: pointer;
  color: var(--st-fault-inactive-color, var(--secondary-background-color));
}
.fault-icon.active {
    color: var(--st-fault-active-color, var(--accent-color));
  }
.fault-icon.hide {
    display: none;
  }

.sensors {
  display: grid;
  grid-gap: var(--st-spacing, var(--st-default-spacing));
  font-size: var(
    --st-font-size-sensors,
    var(--ha-font-size-m)
  );
}
.sensors.as-list {
  grid-auto-flow: column;
  grid-template-columns: min-content;
}

.sensors.as-table.without-labels {
    grid: auto-flow / 100%;
    align-items: start;
    justify-items: start;
    place-items: start;
  }

.sensors.as-table.with-labels {
    grid: auto-flow / auto auto;
    align-items: start;
    justify-items: start;
    place-items: start;
  }

.sensor-value {
  display: flex;
  align-items: center;
  padding-bottom: 4px;
}
.sensor-heading {
  font-weight: 300;
  padding-right: 8px;
  padding-bottom: 4px;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.sensors:empty {
  display: none;
}
header {
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: calc(var(--st-spacing, var(--st-default-spacing)) * 6)
    calc(var(--st-spacing, var(--st-default-spacing)) * 4)
    calc(var(--st-spacing, var(--st-default-spacing)) * 4);
}
.header__icon {
  margin-right: calc(var(--st-spacing, var(--st-default-spacing)) * 2);
  color: #44739e;
  color: var(--state-icon-color, #44739e);
}
.header__title {
  font-size: var(--st-font-size-title, var(--ha-card-header-font-size, var(--ha-font-size-2xl)));
  line-height: var(--st-font-size-title, var(--ha-card-header-font-size, var(--ha-font-size-2xl)));
  font-smoothing: var(--ha-font-smoothing);
  font-weight: var(--ha-font-weight-heading);
  margin: 0;
  align-self: left;
}
.current-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow: hidden;
  flex-wrap: wrap;
}
.current-wrapper.row {
    flex-direction: row-reverse;
  }
.current--value {
  display: flex;
  align-items: center;
  margin: 0;
  font-weight: 400;
  line-height: var(--st-font-size-l, var(--ha-font-size-3xl));
  font-size: var(--st-font-size-l, var(--ha-font-size-3xl));
}
@media (min-width: 768px) {
.current--value {
    font-size: var(--st-font-size-xl, var(--ha-font-size-4xl));
    line-height: var(--st-font-size-xl, var(--ha-font-size-4xl));
}
  }
.current--value.updating {
    color: var(--error-color);
  }
.current--unit {
  font-size: var(--st-font-size-m, var(--ha-font-size-l));
}
.thermostat-trigger {
  padding: 0px;
}
.clickable {
  cursor: pointer;
}
.modes {
  display: grid;
  grid-template-columns: auto;
  grid-auto-flow: column;
  grid-gap: 2px;
  margin-top: calc(var(--st-spacing, var(--st-default-spacing)) * 2);
  padding: var(--st-spacing, var(--st-default-spacing));
}
.modes.heading {
    grid-template-columns: min-content;
  }
.mode-title {
  padding: 0 16px;
  align-self: center;
  justify-self: center;
  place-self: center;
  font-size: var(
    --st-font-size-sensors,
    var(--ha-font-size-m)
  );
  font-weight: 300;
  white-space: nowrap;
}
.mode-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  min-height: 24px;
  padding: var(--st-spacing, var(--st-default-spacing)) 0;
  background: var(--st-mode-background, var(--secondary-background-color));
  color: var(--secondary-text-color);
  cursor: pointer;
  border-radius: var(--st-spacing, var(--st-default-spacing));
}
.mode-item:hover {
    color: var(--st-mode-active-color, var(--primary-text-color));
  }
.mode-item.active,
  .mode-item.active:hover {
    background: var(--st-mode-active-background, var(--primary-color));
    color: var(--st-mode-active-color, var(--text-primary-color));
  }
.mode-item.active.off {
    background: var(--st-mode-active-background, var(--off-color));
  }
.mode-item.active.heat {
    background: var(--st-mode-active-background, var(--heat-color));
  }
.mode-item.active.cool {
    background: var(--st-mode-active-background, var(--cool-color));
  }
.mode-item.active.heat_cool {
    background: var(--st-mode-active-background, var(--heat_cool-color));
  }
.mode-item.active.auto {
    background: var(--st-mode-active-background, var(--auto-color));
  }
.mode-item.active.dry {
    background: var(--st-mode-active-background, var(--dry-color));
  }
.mode-item.active.fan_only {
    background: var(--st-mode-active-background, var(--fan_only-color));
  }
.mode-icon {
  --iron-icon-width: 24px;
  --iron-icon-height: 24px;
  display: block;
}
ha-switch {
  padding: 16px 6px;
}
.side-by-side {
  display: flex;
  align-items: center;
}
.side-by-side > * {
  flex: 1;
  padding-right: 4px;
}
`;function pt(t,e,i,s={}){s=s||{},i=null==i?{}:i;const n=new Event(e,{bubbles:void 0===s.bubbles||s.bubbles,cancelable:Boolean(s.cancelable),composed:void 0===s.composed||s.composed});return n.detail=i,t.dispatchEvent(n),n}!function(t,e){void 0===e&&(e={});var i=e.insertAt;if(t&&"undefined"!=typeof document){var s=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css","top"===i&&s.firstChild?s.insertBefore(n,s.firstChild):s.appendChild(n),n.styleSheet?n.styleSheet.cssText=t:n.appendChild(document.createTextNode(t))}}(ut);const ft=[0,1],gt=[.5,1],mt=["column","row"],vt=["climate"];class yt extends at{static getStubConfig(){return{header:{},layout:{mode:{}}}}setConfig(t){this._config=t}_openLink(){window.open("https://github.com/sctale/little-aircon/blob/master/README.md")}render(){if(!this.hass||!this._config)return V;const t=this._config;return B`
      <div class="card-config">
        <div class="overall-config">
          <div class="side-by-side">
            <ha-entity-picker
              label="实体（必选）"
              .hass=${this.hass}
              .value=${t.entity||""}
              .includeDomains=${vt}
              @value-changed=${this._entityPicked}
              allow-custom-entity
            ></ha-entity-picker>
          </div>

          <div class="side-by-side">
            <ha-textfield
              label="名称（可选）"
              .value=${t.header?.name||""}
              @input=${t=>this._configChanged("header.name",t.target.value)}
            ></ha-textfield>
            <ha-textfield
              label="图标（可选）"
              .value=${t.header?.icon||""}
              @input=${t=>this._configChanged("header.icon",t.target.value)}
            ></ha-textfield>
          </div>

          <div class="side-by-side">
            <ha-entity-picker
              label="开关实体（可选）"
              .hass=${this.hass}
              .value=${t?.header?.toggle?.entity||""}
              @value-changed=${t=>this._configChanged("header.toggle.entity",t.detail.value)}
              allow-custom-entity
            ></ha-entity-picker>
            <ha-textfield
              label="开关标签"
              .value=${t?.header?.toggle?.name||""}
              @input=${t=>this._configChanged("header.toggle.name",t.target.value)}
            ></ha-textfield>
          </div>

          <div class="side-by-side">
            <ha-textfield
              label="占位文本（可选）"
              .value=${t.fallback||""}
              @input=${t=>this._configChanged("fallback",t.target.value)}
            ></ha-textfield>
          </div>

          <div class="side-by-side">
            <ha-select
              label="小数位数（可选）"
              @selected=${t=>this._configChanged("decimals",t.target.value)}
              @closed=${t=>t.stopPropagation()}
              fixedMenuPosition
            >
              ${ft.map(e=>B`<ha-list-item .value=${String(e)} ?selected=${t.decimals===e}>${e}</ha-list-item>`)}
            </ha-select>

            <ha-textfield
              label="单位（可选）"
              .value=${t.unit||""}
              @input=${t=>this._configChanged("unit",t.target.value)}
            ></ha-textfield>
          </div>

          <div class="side-by-side">
            <ha-select
              label="布局方向（可选）"
              @selected=${t=>this._configChanged("layout.step",t.target.value)}
              @closed=${t=>t.stopPropagation()}
              fixedMenuPosition
            >
              ${mt.map(e=>B`<ha-list-item .value=${e} ?selected=${t.layout?.step===e}>${e}</ha-list-item>`)}
            </ha-select>

            <ha-select
              label="步进值（可选）"
              @selected=${t=>this._configChanged("step_size",t.target.value)}
              @closed=${t=>t.stopPropagation()}
              fixedMenuPosition
            >
              ${gt.map(e=>B`<ha-list-item .value=${String(e)} ?selected=${t.step_size===e}>${e}</ha-list-item>`)}
            </ha-select>
          </div>

          <div class="side-by-side">
            <ha-button @click=${this._openLink}>
              配置选项说明
            </ha-button>
            <span>标签、控制、传感器、故障和隐藏选项只能在代码编辑器中配置</span>
          </div>
        </div>
      </div>
    `}_entityPicked(t){const e=t.detail?.value??t.target?.value;void 0!==e&&this._configChanged("entity",e)}_configChanged(t,e){if(!this._config||!this.hass)return;const i=(s=this._config,JSON.parse(JSON.stringify(s)));var s;""===e||null==e?"entity"!==t&&function(t,e){const i=e.split(".");let s=t;for(;i.length>1;){const t=i.shift();if(!s[t])return;s=s[t]}delete s[i[0]]}(i,t):function(t,e,i){const s=e.split(".");let n=t;for(;s.length>1;){const t=s.shift();n[t]||(n[t]={}),n=n[t]}n[s[0]]=i}(i,t,e),pt(this,"config-changed",{config:i})}}yt.styles=ut,e([dt({attribute:!1})],yt.prototype,"hass",void 0),e([function(t){return dt({...t,state:!0,attribute:!1})}()],yt.prototype,"_config",void 0);const _t=(t,e,i,s)=>{if("length"===i||"prototype"===i)return;if("arguments"===i||"caller"===i)return;const n=Object.getOwnPropertyDescriptor(t,i),r=Object.getOwnPropertyDescriptor(e,i);!$t(n,r)&&s||Object.defineProperty(t,i,r)},$t=function(t,e){return void 0===t||t.configurable||t.writable===e.writable&&t.enumerable===e.enumerable&&t.configurable===e.configurable&&(t.writable||t.value===e.value)},bt=(t,e)=>`/* Wrapped ${t}*/\n${e}`,wt=Object.getOwnPropertyDescriptor(Function.prototype,"toString"),xt=Object.getOwnPropertyDescriptor(Function.prototype.toString,"name");function At(t,e,{ignoreNonConfigurable:i=!1}={}){const{name:s}=t;for(const s of Reflect.ownKeys(e))_t(t,e,s,i);return((t,e)=>{const i=Object.getPrototypeOf(e);i!==Object.getPrototypeOf(t)&&Object.setPrototypeOf(t,i)})(t,e),((t,e,i)=>{const s=""===i?"":`with ${i.trim()}() `,n=bt.bind(null,s,e.toString());Object.defineProperty(n,"name",xt),Object.defineProperty(t,"toString",{...wt,value:n})})(t,e,s),t}const Et=(t,e={})=>{if("function"!=typeof t)throw new TypeError(`Expected the first argument to be a function, got \`${typeof t}\``);const{wait:i=0,maxWait:s=Number.POSITIVE_INFINITY,before:n=!1,after:r=!0}=e;if(!n&&!r)throw new Error("Both `before` and `after` are false, function wouldn't be called.");let o,a,c;const l=function(...e){const l=this,h=()=>{a=void 0,o&&(clearTimeout(o),o=void 0),r&&(c=t.apply(l,e))},d=n&&!o;return clearTimeout(o),o=setTimeout(()=>{o=void 0,a&&(clearTimeout(a),a=void 0),r&&(c=t.apply(l,e))},i),s>0&&s!==Number.POSITIVE_INFINITY&&!a&&(a=setTimeout(h,s)),d&&(c=t.apply(l,e)),c};return At(l,t),l.cancel=()=>{o&&(clearTimeout(o),o=void 0),a&&(clearTimeout(a),a=void 0)},l};function St(t,{decimals:e=1,fallback:i="N/A"}={}){return null===t||""===t||["boolean","undefined"].includes(typeof t)?i:Number(t).toFixed(e)}function Ot({header:t,toggleEntityChanged:e,entity:i,openEntityPopover:s}){if(!1===t)return V;const n=i.attributes.hvac_action||i.state;let r=t.icon;"object"==typeof t.icon&&(r=r?.[n]??!1);const o=t?.name??!1;return B`
    <header>
      <div
        style="display: flex;"
        class="clickable"
        @click=${()=>s()}
      >
        ${function(t){return t?B` <ha-icon class="header__icon" .icon=${t}></ha-icon> `:V}(r)} ${function(t){return t?B`<h2 class="header__title">${t}</h2>`:V}(o)}
      </div>
      ${function(t,e){if(!t||0===t.length)return V;const i=t.map(({icon:t,hide_inactive:i,state:s})=>B` <ha-icon
      class="fault-icon ${"on"===s.state?"active":i?" hide":""}"
      .icon=${t||s.attributes.icon}
      @click=${()=>e(s.entity_id)}
    ></ha-icon>`);return B` <div class="faults">${i}</div>`}(t.faults,s)}
      ${function(t,e,i){return t?B`
    <div style="margin-left: auto;">
      <span
        class="clickable toggle-label"
        @click=${()=>e(t.entity.entity_id)}
        >${t.label}
      </span>
      <ha-switch
        .checked=${"on"===t.entity?.state}
        @change=${i}
      ></ha-switch>
    </div>
  `:V}(t.toggle,s,e)}
    </header>
  `}"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var Pt={exports:{}};!function(t){function e(t){var i,s,n=new Error(t);return i=n,s=e.prototype,Object.setPrototypeOf?Object.setPrototypeOf(i,s):i.__proto__=s,n}function i(t,i,s){var n=i.slice(0,s).split(/\n/),r=n.length,o=n[r-1].length+1;throw e(t+=" at line "+r+" col "+o+":\n\n  "+i.split(/\n/)[r-1]+"\n  "+Array(o).join(" ")+"^")}e.prototype=Object.create(Error.prototype,{name:{value:"Squirrelly Error",enumerable:!1}});var s=new Function("return this")().Promise,n=!1;try{n=new Function("return (async function(){}).constructor")()}catch(t){if(!(t instanceof SyntaxError))throw t}function r(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function o(t,e,i){for(var s in e)r(e,s)&&(null==e[s]||"object"!=typeof e[s]||"storage"!==s&&"prefixes"!==s||i?t[s]=e[s]:t[s]=o({},e[s]));return t}var a=/^async +/,c=/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})*}|(?!\${)[^\\`])*`/g,l=/'(?:\\[\s\w"'\\`]|[^\n\r'\\])*?'/g,h=/"(?:\\[\s\w"'\\`]|[^\n\r"\\])*?"/g,d=/[.*+\-?^${}()|[\]\\]/g;function u(t){return d.test(t)?t.replace(d,"\\$&"):t}function p(t,s){s.rmWhitespace&&(t=t.replace(/[\r\n]+/g,"\n").replace(/^\s+|\s+$/gm,"")),c.lastIndex=0,l.lastIndex=0,h.lastIndex=0;var n=s.prefixes,r=[n.h,n.b,n.i,n.r,n.c,n.e].reduce(function(t,e){return t&&e?t+"|"+u(e):e?u(e):t},""),o=new RegExp("([|()]|=>)|('|\"|`|\\/\\*)|\\s*((\\/)?(-|_)?"+u(s.tags[1])+")","g"),d=new RegExp("([^]*?)"+u(s.tags[0])+"(-|_)?\\s*("+r+")?\\s*","g"),p=0,f=!1;function g(e,n){var r,u={f:[]},g=0,m="c";function v(e){var n=t.slice(p,e),r=n.trim();if("f"===m)"safe"===r?u.raw=!0:s.async&&a.test(r)?(r=r.replace(a,""),u.f.push([r,"",!0])):u.f.push([r,""]);else if("fp"===m)u.f[u.f.length-1][1]+=r;else if("err"===m){if(r){var o=n.search(/\S/);i("invalid syntax",t,p+o)}}else u[m]=r;p=e+1}for("h"===n||"b"===n||"c"===n?m="n":"r"===n&&(u.raw=!0,n="i"),o.lastIndex=p;null!==(r=o.exec(t));){var y=r[1],_=r[2],$=r[3],b=r[4],w=r[5],x=r.index;if(y)"("===y?(0===g&&("n"===m?(v(x),m="p"):"f"===m&&(v(x),m="fp")),g++):")"===y?0===--g&&"c"!==m&&(v(x),m="err"):0===g&&"|"===y?(v(x),m="f"):"=>"===y&&(v(x),p+=1,m="res");else if(_)if("/*"===_){var A=t.indexOf("*/",o.lastIndex);-1===A&&i("unclosed comment",t,r.index),o.lastIndex=A+2}else"'"===_?(l.lastIndex=r.index,l.exec(t)?o.lastIndex=l.lastIndex:i("unclosed string",t,r.index)):'"'===_?(h.lastIndex=r.index,h.exec(t)?o.lastIndex=h.lastIndex:i("unclosed string",t,r.index)):"`"===_&&(c.lastIndex=r.index,c.exec(t)?o.lastIndex=c.lastIndex:i("unclosed string",t,r.index));else if($)return v(x),p=x+r[0].length,d.lastIndex=p,f=w,b&&"h"===n&&(n="s"),u.t=n,u}return i("unclosed tag",t,e),u}var m=function r(o,c){o.b=[],o.d=[];var l,h=!1,u=[];function m(t,e){t&&(t=function(t,e,i,s){var n,r;return"string"==typeof e.autoTrim?n=r=e.autoTrim:Array.isArray(e.autoTrim)&&(n=e.autoTrim[1],r=e.autoTrim[0]),(i||!1===i)&&(n=i),(s||!1===s)&&(r=s),"slurp"===n&&"slurp"===r?t.trim():("_"===n||"slurp"===n?t=String.prototype.trimLeft?t.trimLeft():t.replace(/^[\s\uFEFF\xA0]+/,""):"-"!==n&&"nl"!==n||(t=t.replace(/^(?:\n|\r|\r\n)/,"")),"_"===r||"slurp"===r?t=String.prototype.trimRight?t.trimRight():t.replace(/[\s\uFEFF\xA0]+$/,""):"-"!==r&&"nl"!==r||(t=t.replace(/(?:\n|\r|\r\n)$/,"")),t)}(t,s,f,e))&&(t=t.replace(/\\|'/g,"\\$&").replace(/\r\n|\n|\r/g,"\\n"),u.push(t))}for(;null!==(l=d.exec(t));){var v,y=l[1],_=l[2],$=l[3]||"";for(var b in n)if(n[b]===$){v=b;break}m(y,_),p=l.index+l[0].length,v||i("unrecognized tag type: "+$,t,p);var w=g(l.index,v),x=w.t;if("h"===x){var A=w.n||"";s.async&&a.test(A)&&(w.a=!0,w.n=A.replace(a,"")),w=r(w),u.push(w)}else if("c"===x){if(o.n===w.n)return h?(h.d=u,o.b.push(h)):o.d=u,o;i("Helper start and end don't match",t,l.index+l[0].length)}else if("b"===x){h?(h.d=u,o.b.push(h)):o.d=u;var E=w.n||"";s.async&&a.test(E)&&(w.a=!0,w.n=E.replace(a,"")),h=w,u=[]}else if("s"===x){var S=w.n||"";s.async&&a.test(S)&&(w.a=!0,w.n=S.replace(a,"")),u.push(w)}else u.push(w)}if(!c)throw e('unclosed helper "'+o.n+'"');return m(t.slice(p,t.length),!1),o.d=u,o}({f:[]},!0);if(s.plugins)for(var v=0;v<s.plugins.length;v++){var y=s.plugins[v];y.processAST&&(m.d=y.processAST(m.d,s))}return m.d}function f(t,e){var i=p(t,e),s="var tR='';"+(e.useWith?"with("+e.varName+"||{}){":"")+_(i,e)+"if(cb){cb(null,tR)} return tR"+(e.useWith?"}":"");if(e.plugins)for(var n=0;n<e.plugins.length;n++){var r=e.plugins[n];r.processFnString&&(s=r.processFnString(s,e))}return s}function g(t,e){for(var i=0;i<e.length;i++){var s=e[i][0],n=e[i][1];t=(e[i][2]?"await ":"")+"c.l('F','"+s+"')("+t,n&&(t+=","+n),t+=")"}return t}function m(t,e,i,s,n,r){var o="{exec:"+(n?"async ":"")+y(i,e,t)+",params:["+s+"]";return r&&(o+=",name:'"+r+"'"),n&&(o+=",async:true"),o+"}"}function v(t,e){for(var i="[",s=0;s<t.length;s++){var n=t[s];i+=m(e,n.res||"",n.d,n.p||"",n.a,n.n),s<t.length&&(i+=",")}return i+"]"}function y(t,e,i){return"function("+e+"){var tR='';"+_(t,i)+"return tR}"}function _(t,e){for(var i=0,s=t.length,n="";i<s;i++){var r=t[i];if("string"==typeof r)n+="tR+='"+r+"';";else{var o=r.t,a=r.c||"",c=r.f,l=r.n||"",h=r.p||"",d=r.res||"",u=r.b,p=!!r.a;if("i"===o){e.defaultFilter&&(a="c.l('F','"+e.defaultFilter+"')("+a+")");var f=g(a,c);!r.raw&&e.autoEscape&&(f="c.l('F','e')("+f+")"),n+="tR+="+f+";"}else if("h"===o)if(e.storage.nativeHelpers.get(l))n+=e.storage.nativeHelpers.get(l)(r,e);else{var y=(p?"await ":"")+"c.l('H','"+l+"')("+m(e,d,r.d,h,p);y+=u?","+v(u,e):",[]",n+="tR+="+g(y+=",c)",c)+";"}else"s"===o?n+="tR+="+g((p?"await ":"")+"c.l('H','"+l+"')({params:["+h+"]},[],c)",c)+";":"e"===o&&(n+=a+"\n")}}return n}var $=function(){function t(t){this.cache=t}return t.prototype.define=function(t,e){this.cache[t]=e},t.prototype.get=function(t){return this.cache[t]},t.prototype.remove=function(t){delete this.cache[t]},t.prototype.reset=function(){this.cache={}},t.prototype.load=function(t){o(this.cache,t,!0)},t}();function b(t,i,s,n){if(i&&i.length>0)throw e((n?"Native":"")+"Helper '"+t+"' doesn't accept blocks");if(s&&s.length>0)throw e((n?"Native":"")+"Helper '"+t+"' doesn't accept filters")}var w={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};function x(t){return w[t]}var A=new $({}),E=new $({each:function(t,e){var i="",s=t.params[0];if(b("each",e,!1),t.async)return new Promise(function(e){!function t(e,i,s,n,r){s(e[i],i).then(function(o){n+=o,i===e.length-1?r(n):t(e,i+1,s,n,r)})}(s,0,t.exec,i,e)});for(var n=0;n<s.length;n++)i+=t.exec(s[n],n);return i},foreach:function(t,e){var i=t.params[0];if(b("foreach",e,!1),t.async)return new Promise(function(e){!function t(e,i,s,n,r,o){n(i[s],e[i[s]]).then(function(a){r+=a,s===i.length-1?o(r):t(e,i,s+1,n,r,o)})}(i,Object.keys(i),0,t.exec,"",e)});var s="";for(var n in i)r(i,n)&&(s+=t.exec(n,i[n]));return s},include:function(t,i,s){b("include",i,!1);var n=s.storage.templates.get(t.params[0]);if(!n)throw e('Could not fetch template "'+t.params[0]+'"');return n(t.params[1],s)},extends:function(t,i,s){var n=t.params[1]||{};n.content=t.exec();for(var r=0;r<i.length;r++){var o=i[r];n[o.name]=o.exec()}var a=s.storage.templates.get(t.params[0]);if(!a)throw e('Could not fetch template "'+t.params[0]+'"');return a(n,s)},useScope:function(t,e){return b("useScope",e,!1),t.exec(t.params[0])}}),S=new $({if:function(t,e){b("if",!1,t.f,!0);var i="if("+t.p+"){"+_(t.d,e)+"}";if(t.b)for(var s=0;s<t.b.length;s++){var n=t.b[s];"else"===n.n?i+="else{"+_(n.d,e)+"}":"elif"===n.n&&(i+="else if("+n.p+"){"+_(n.d,e)+"}")}return i},try:function(t,i){if(b("try",!1,t.f,!0),!t.b||1!==t.b.length||"catch"!==t.b[0].n)throw e("native helper 'try' only accepts 1 block, 'catch'");var s="try{"+_(t.d,i)+"}",n=t.b[0];return s+"catch"+(n.res?"("+n.res+")":"")+"{"+_(n.d,i)+"}"},block:function(t,e){return b("block",t.b,t.f,!0),"if(!"+e.varName+"["+t.p+"]){tR+=("+y(t.d,"",e)+")()}else{tR+="+e.varName+"["+t.p+"]}"}}),O=new $({e:function(t){var e=String(t);return/[&<>"']/.test(e)?e.replace(/[&<>"']/g,x):e}}),P={varName:"it",autoTrim:[!1,"nl"],autoEscape:!0,defaultFilter:!1,tags:["{{","}}"],l:function(t,i){if("H"===t){var s=this.storage.helpers.get(i);if(s)return s;throw e("Can't find helper '"+i+"'")}if("F"===t){var n=this.storage.filters.get(i);if(n)return n;throw e("Can't find filter '"+i+"'")}},async:!1,storage:{helpers:E,nativeHelpers:S,filters:O,templates:A},prefixes:{h:"@",b:"#",i:"",r:"*",c:"/",e:"!"},cache:!1,plugins:[],useWith:!1};function C(t,e){var i={};return o(i,P),e&&o(i,e),t&&o(i,t),i.l.bind(i),i}function k(t,i){var s=C(i||{}),r=Function;if(s.async){if(!n)throw e("This environment doesn't support async/await");r=n}try{return new r(s.varName,"c","cb",f(t,s))}catch(i){throw i instanceof SyntaxError?e("Bad template syntax\n\n"+i.message+"\n"+Array(i.message.length+1).join("=")+"\n"+f(t,s)):i}}function T(t,e){var i;return e.cache&&e.name&&e.storage.templates.get(e.name)?e.storage.templates.get(e.name):(i="function"==typeof t?t:k(t,e),e.cache&&e.name&&e.storage.templates.define(e.name,i),i)}P.l.bind(P),t.compile=k,t.compileScope=_,t.compileScopeIntoFunction=y,t.compileToString=f,t.defaultConfig=P,t.filters=O,t.getConfig=C,t.helpers=E,t.nativeHelpers=S,t.parse=p,t.render=function(t,i,n,r){var o=C(n||{});if(!o.async)return T(t,o)(i,o);if(!r){if("function"==typeof s)return new s(function(e,s){try{e(T(t,o)(i,o))}catch(t){s(t)}});throw e("Please provide a callback function, this env doesn't support Promises")}try{T(t,o)(i,o,r)}catch(t){return r(t)}},t.templates=A,Object.defineProperty(t,"__esModule",{value:!0})}(Pt.exports);var Ct=Pt.exports;const kt=2;class Tt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}class jt extends Tt{constructor(t){if(super(t),this.it=V,t.type!==kt)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===V||null==t)return this._t=void 0,this.it=t;if(t===W)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}jt.directiveName="unsafeHTML",jt.resultType=1;const zt=(t=>(...e)=>({_$litDirective$:t,values:e}))(jt),Nt=t=>`<ha-icon icon="${t}"></ha-icon>`;function Rt(t,e){const{type:i,labels:s}=t?.layout?.sensors??{type:"table",labels:!0};return B` <div class="sensors ${[s?"with-labels":"without-labels","list"===i?"as-list":"as-table"].join(" ")}">${e}</div> `}function Ht({hide:t=!1,hass:e,state:i,details:s,localize:n,openEntityPopover:r}){if(t||void 0===i)return V;const{type:o,heading:a,icon:c,unit:l,decimals:h}=s;if("relativetime"===o)return B`
      <div class="sensor-value">
        <ha-relative-time .datetime=${i} .hass=${e}></ha-relative-time>
      </div>
    `;if("object"==typeof i){const[t]=i.entity_id.split("."),e=["component",t,"state",i.attributes?.device_class??"_",""].join(".");let s=n(i.state,e);return"number"==typeof h&&(s=St(s,{decimals:h})),B`
      <div
        class="sensor-value clickable"
        @click=${()=>r&&r(i.entity_id)}
      >
        ${s} ${l||i.attributes.unit_of_measurement}
      </div>
    `}let d="number"==typeof h?St(i,{decimals:h}):i;return B`<div class="sensor-value">${d}${l||""}</div>`}var Ut;Ct.defaultConfig.autoEscape=!1,Ct.filters.define("icon",Nt),Ct.filters.define("join",(t,e=", ")=>t.join(e)),Ct.filters.define("css",(t,e)=>`<span style="${Object.entries(e).reduce((t,[e,i])=>`${t}${e}:${i};`,"")}">${t}</span>`),Ct.filters.define("debug",t=>{try{return JSON.stringify(t)}catch{return`Not able to read valid JSON object from: ${t}`}}),function(t){t.OFF="off",t.HEAT="heat",t.COOL="cool",t.HEAT_COOL="heat_cool",t.AUTO="auto",t.DRY="dry",t.FAN_ONLY="fan_only"}(Ut||(Ut={}));const Mt={off:"关闭",heat:"制热",cool:"制冷",auto:"自动",dry:"除湿",fan_only:"送风",heat_cool:"冷热",none:"无",eco:"节能",away:"离家",boost:"增强",comfort:"舒适",home:"在家",sleep:"睡眠",activity:"活动",vertical:"上下摆风",horizontal:"左右摆风",both:"全方位摆风",low:"低速",medium:"中速",high:"高速",auto_mode:"自动"};function It({state:t,mode:e,modeOptions:i,localize:s,setMode:n}){const{type:r,hide_when_off:o,mode:a="none",list:c,name:l}=e;if(0===c.length||o&&t===Ut.OFF)return V;const h=(()=>{if(l)return"string"==typeof l?l:"";return{hvac:"运行模式",preset:"预设模式",fan:"风速模式",swing:"摆风模式",swing_horizontal:"左右摆风"}[r]??`${r}_mode`})(),d=i?.headings??!0;return B`
    <div class="modes ${d?"heading":""}">
      ${d?B` <div class="mode-title">${h}</div> `:V}
      ${c.map(({value:t,icon:e})=>{return B`
          <div
            class="mode-item ${t===a?"active "+t:""}"
            @click=${()=>n(r,t)}
          >
            ${(t=>t?!1===i?.icons?V:B` <ha-icon class="mode-icon" .icon=${t}></ha-icon> `:V)(e)} ${o=(t=>Mt[t]??s(t))(t),!1===o||!1===i?.names?V:B`${o}`}
          </div>
        `;var o})}
    </div>
  `}const Ft={auto:"mdi:radiator",cooling:"mdi:snowflake",fan:"mdi:fan",heating:"mdi:radiator",idle:"mdi:radiator-disabled",off:"mdi:radiator-off"},Dt={auto:"hass:autorenew",cool:"hass:snowflake",dry:"hass:water-percent",fan_only:"hass:fan",heat_cool:"hass:autorenew",heat:"hass:fire",off:"hass:power",swing_horizontal:"mdi:fan",swing:"mdi:fan-sync"};function Lt(t,e){const i=e.states[t.entity];let s="";return s=!0===t?.name?i.attributes.name:t?.name??"",{entity:i,label:s}}function Bt(t,e){return Array.isArray(t)?t.map(({entity:t,...i})=>({...i,state:e.states[t],entity:t})):[]}var Wt;!function(t){t.HVAC="hvac",t.FAN="fan",t.PRESET="preset",t.SWING="swing",t.SWING_HORIZONTAL="swing_horizontal"}(Wt||(Wt={}));const Vt=Object.values(Wt),qt=[Wt.HVAC,Wt.PRESET],Jt="hass:chevron-up",Yt="hass:chevron-down",Gt="mdi:plus",Kt="mdi:minus",Zt={temperature:!1,state:!1};function Qt(t,e,i={}){return e[`${t}_modes`].filter(t=>function(t,e){if("object"==typeof e[t])return!1!==e[t].include;return e?.[t]??!0}(t,i)).map(t=>{const e="object"==typeof i[t]?i[t]:{};return{icon:Dt[t]||"hass:radiator",value:t,name:t,...e}})}class Xt extends at{constructor(){super(...arguments),this.config={},this.header=!1,this.service={},this.modes=[],this._hass={},this.sensors=[],this.showSensors=!0,this.name="",this.stepSize=.5,this._values={},this._updatingValues=!1,this._hide=Zt,this._debouncedSetTemperature=Et(t=>{const{domain:e,service:i,data:s={}}=this.service;this._hass.callService(e,i,{entity_id:this.config.entity,...s,...t})},{wait:500}),this.localize=(t,e="")=>{const i=this._hass.selectedLanguage||this._hass.language,s=`${e}${t}`,n=this._hass.resources[i];return n?.[s]??t},this.toggleEntityChanged=t=>{if(!this.header||!this?.header?.toggle)return;const e=t.target;this._hass.callService("homeassistant",e.checked?"turn_on":"turn_off",{entity_id:this.header?.toggle?.entity?.entity_id})},this.setMode=(t,e)=>{t&&e?(this._hass.callService("climate",`set_${t}_mode`,{entity_id:this.config.entity,[`${t}_mode`]:e}),pt(this,"haptic","light")):pt(this,"haptic","failure")},this.openEntityPopover=(t=null)=>{pt(this,"hass-more-info",{entityId:t||this.config.entity})}}static getConfigElement(){return window.document.createElement(`${t}-editor`)}setConfig(t){if(!t.entity||!t.entity.startsWith("climate."))throw new Error("需要指定 climate 域的实体");this.config={decimals:1,...t}}updated(){const t=Array.from(this.renderRoot.querySelectorAll("[with-hass]"));for(const e of Array.from(t))Array.from(e.attributes).forEach(t=>{t.name.startsWith("fwd-")&&(e[t.name.replace("fwd-","")]=t.value)}),e.hass=this._hass}set hass(t){if(this._hass=t,!this.config?.entity)return;const e=t.states[this.config.entity];if(!e)return;var i;this.entity!==e&&(this.entity=e),this.header=function(t,e,i){if(!1===t)return!1;let s;s="string"==typeof t?.name?t.name:!1!==t?.name&&e.attributes.friendly_name;let n=e.attributes.hvac_action?Ft:Dt;return void 0!==t?.icon&&(n=t.icon),{name:s,icon:n,toggle:t?.toggle?Lt(t.toggle,i):null,faults:Bt(t?.faults,i)}}(this.config.header,e,t),this.service=!1===(i=this.config?.service??!1)?{domain:"climate",service:"set_temperature"}:i;const s=e.attributes;let n=function(t,e){if(!1===t)return{};if(t)return Object.keys(t).reduce((i,s)=>{const n=t[s];return n?.hide?i:{...i,[s]:e?.[s]}},{});const i=function(t){return"number"==typeof t.target_temp_high&&"number"==typeof t.target_temp_low?"dual":"single"}(e);return"dual"===i?{target_temp_low:e.target_temp_low,target_temp_high:e.target_temp_high}:{temperature:e.temperature}}(this.config?.setpoints??null,s);this._updatingValues&&function(t,e){const i=Object.keys(t);return i.length===Object.keys(e).length&&!i.some(i=>t?.[i]!==e?.[i])}(n,this._values)?this._updatingValues=!1:this._updatingValues||(this._values=n);const r=t=>Vt.includes(t)&&s[`${t}_modes`],o=t=>t.filter(r).map(t=>({type:t,hide_when_off:!1,list:Qt(t,s)}));let a=[];if(!1===this.config.control)a=[];else if(Array.isArray(this.config.control))a=o(this.config.control);else if("object"==typeof this.config.control){const t=Object.entries(this.config.control);a=t.length>0?t.filter(([t])=>r(t)).map(([t,e])=>{const{_name:i,_hide_when_off:n,...r}=e;return{type:t,hide_when_off:n,name:i,list:Qt(t,s,r)}}):o(qt)}else a=o(qt);if(this.modes=a.map(t=>{if(t.type===Wt.HVAC){const i=[],s=Object.values(Ut);return t.list.forEach(t=>{const e=s.indexOf(t.value);i[e]=t}),{...t,list:i,mode:e.state}}const i=s[`${t.type}_mode`];return{...t,mode:i}}),this.config.step_size&&(this.stepSize=+this.config.step_size),this.config.hide&&(this._hide={...this._hide,...this.config.hide}),!1===this.config.sensors)this.showSensors=!1;else if(3===this.config.version&&Array.isArray(this.config.sensors)){this.sensors=[];const t=this.config.sensors.map((t,e)=>{const i=t?.entity??this.config.entity;let s=this.entity;return t?.entity&&(s=this._hass.states[t.entity]),{id:t?.id??String(e),label:t?.label,template:t.template,show:!1!==t?.show,entityId:i,context:s}}),e=t.map(t=>t.id),i=[];e.includes("state")||i.push({id:"state",label:"当前状态",template:"{{state.text}}",entityId:this.config.entity,context:this.entity}),e.includes("temperature")||i.push({id:"temperature",label:"当前温度",template:"{{current_temperature|formatNumber}}°",entityId:this.config.entity,context:this.entity}),this.sensors=[...i,...t]}else this.config.sensors&&(this.sensors=this.config.sensors.map(({name:e,entity:i,attribute:s,unit:n="",...r})=>{let o;const a=[e];return i?(o=t.states[i],a.push(o?.attributes?.friendly_name),s&&(o=o.attributes[s])):s&&s in this.entity.attributes&&(o=this.entity.attributes[s],a.push(s)),a.push(i),{...r,name:a.find(t=>!!t),state:o,entity:i,unit:n}}))}render(){const t=[];if(this.stepSize<1&&0===this.config.decimals&&t.push(B`
        <hui-warning>
          小数位设为0但步进值小于1，点击减温可能失效，请调整设置。
        </hui-warning>
      `),!this.entity||!this.entity.attributes)return B`<hui-warning .hass=${this._hass}> 实体不可用: ${this.config.entity} </hui-warning>`;const{attributes:{min_temp:e=null,max_temp:i=null,hvac_action:s}}=this.entity,n=this.getUnit(),r=this.config?.layout?.step??"column",o="row"===r,a=[!this.header&&"no-header",s].filter(t=>!!t);let c;return 3===this.config.version?(c=this.sensors.filter(t=>!1!==t.show).map(t=>function({context:t,entityId:e,template:i="{{state.text}}",label:s,hass:n,variables:r={},config:o,localize:a,openEntityPopover:c}){const{state:l,attributes:h}=t,[d]=e.split("."),u=n.selectedLanguage||n.language,p="ui.card.climate.",f=Object.entries(n.resources[u]||{}).reduce((t,[e,i])=>(e.startsWith(p)&&(t[e.replace(p,"")]=i),t),{}),g={...h,state:{raw:l,text:a(l,`component.${d}.state._.`)},ui:f,v:r};Ct.filters.define("formatNumber",(t,e={decimals:o.decimals})=>String(St(t,e))),Ct.filters.define("relativetime",t=>`<ha-relative-time fwd-datetime=${t} with-hass></ha-relative-time>`),Ct.filters.define("translate",(t,e="")=>a(t,e||"climate"!==d&&"humidifier"!==d?e:`state_attributes.${d}.${t}`));const m=t=>Ct.render(t,g,{useWith:!0}),v=m(i);if(!1===s||!1===o?.layout?.sensors?.labels)return B`<div class="sensor-value">${zt(v)}</div>`;const y=s||"{{friendly_name}}",_=y.match(/^(mdi|hass):.*/)?Nt(y):m(y);return B`
    <div class="sensor-heading">${zt(_)}</div>
    <div class="sensor-value">${zt(v)}</div>
  `}({...t,variables:this.config.variables,hass:this._hass,config:this.config,localize:this.localize,openEntityPopover:this.openEntityPopover})),c=Rt(this.config,c)):c=this.showSensors?function({_hide:t,entity:e,unit:i,hass:s,sensors:n,config:r,localize:o,openEntityPopover:a}){const{state:c,attributes:{hvac_action:l,current_temperature:h}}=e,d=r?.layout?.sensors?.labels??!0;let u=(t=>({off:"关闭",heat:"制热",cool:"制冷",auto:"自动",dry:"除湿",fan_only:"送风",heat_cool:"冷热",idle:"待机",heating:"加热中",cooling:"制冷中",drying:"除湿中",fan:"送风中"}[t]??t))(c);l&&(u=`${(t=>({idle:"待机",heating:"正在制热",cooling:"正在制冷",drying:"正在除湿",fan:"正在送风",off:"已关闭"}[t]??t))(l)} (${u})`);const p=[Ht({hide:t.temperature,state:`${St(h,r)}${i||""}`,hass:s,details:{heading:!!d&&(r?.label?.temperature??"当前温度")}}),Ht({hide:t.state,state:u,hass:s,details:{heading:!!d&&(r?.label?.state??"运行状态")}}),...n.map(({name:t,state:e,...i})=>Ht({state:e,hass:s,localize:o,openEntityPopover:a,details:{...i,heading:d&&t}}))||null].filter(t=>null!==t);return B`${Rt(r,p)}`}({_hide:this._hide,unit:n,hass:this._hass,entity:this.entity,sensors:this.sensors,config:this.config,localize:this.localize,openEntityPopover:this.openEntityPopover}):"",B`
      <ha-card class="${a.join(" ")}">
        ${t}
        ${Ot({header:this.header,toggleEntityChanged:this.toggleEntityChanged,entity:this.entity,openEntityPopover:this.openEntityPopover})}
        <section class="body">
          ${c}
          ${Object.entries(this._values).map(([t,s])=>{const a=["string","number"].includes(typeof s),c=!1!==n&&a;return B`
              <div class="current-wrapper ${r}">
                <ha-icon-button
                  label="升温"
                  ?disabled=${null!==i&&s>=i}
                  class="thermostat-trigger"
                  @click=${()=>this.setTemperature(this.stepSize,t)}
                >
                  <ha-icon .icon=${o?Gt:Jt}></ha-icon>
                </ha-icon-button>

                <h3
                  class="current--value ${this._updatingValues?"updating":""}"
                  @click=${()=>this.openEntityPopover()}
                >
                  ${St(s,this.config)}
                  ${c?B`<span class="current--unit">${n}</span>`:V}
                </h3>

                <ha-icon-button
                  label="降温"
                  ?disabled=${null!==e&&s<=e}
                  class="thermostat-trigger"
                  @click=${()=>this.setTemperature(-this.stepSize,t)}
                >
                  <ha-icon .icon=${o?Kt:Yt}></ha-icon>
                </ha-icon-button>
              </div>
            `})}
        </section>

        ${this.modes.map(t=>It({state:this.entity.state,mode:t,localize:this.localize,modeOptions:this.config?.layout?.mode??{},setMode:this.setMode}))}
      </ha-card>
    `}setTemperature(t,e){this._updatingValues=!0;const i=this._values[e],s=Number(i)+t,{decimals:n}=this.config;this._values={...this._values,[e]:+St(s,{decimals:n})},this._debouncedSetTemperature(this._values)}getCardSize(){return 3}getUnit(){return["boolean","string"].includes(typeof this.config.unit)?this.config?.unit:this._hass.config?.unit_system?.temperature??!1}}Xt.styles=ut,e([dt({type:Object})],Xt.prototype,"config",void 0),e([dt({type:Object})],Xt.prototype,"header",void 0),e([dt({type:Object})],Xt.prototype,"service",void 0),e([dt({type:Array})],Xt.prototype,"modes",void 0),e([dt({type:Object})],Xt.prototype,"entity",void 0),e([dt({type:Array})],Xt.prototype,"sensors",void 0),e([dt({type:Boolean})],Xt.prototype,"showSensors",void 0),e([dt({type:String})],Xt.prototype,"name",void 0),e([dt({type:Object})],Xt.prototype,"_values",void 0),e([dt({type:Boolean})],Xt.prototype,"_updatingValues",void 0),e([dt({type:Object})],Xt.prototype,"_hide",void 0),customElements.define(t,Xt),customElements.define(`${t}-editor`,yt),console.info(`%c${t}: 3.0.13`,"font-weight: bold"),window.customCards=window.customCards||[],window.customCards.push({type:t,name:"小空调",preview:!1,description:"Home Assistant 温控卡片（lit v3 / HASS 2026.x 兼容，中文界面）"});
