!function(){const t={DEBUG:"false"};try{if(process)return process.env=Object.assign({},process.env),void Object.assign(process.env,t)}catch(t){}globalThis.process={env:t}}();var t="little-aircon";function e(t,e,i,s){var n,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,i,o):n(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o}"function"==typeof SuppressedError&&SuppressedError;const i=globalThis,s=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),r=new WeakMap;let o=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(e,t))}return t}toString(){return this.cssText}};const a=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,n))(e)})(t):t,{is:c,defineProperty:l,getOwnPropertyDescriptor:h,getOwnPropertyNames:d,getOwnPropertySymbols:u,getPrototypeOf:f}=Object,p=globalThis,m=p.trustedTypes,g=m?m.emptyScript:"",v=p.reactiveElementPolyfillSupport,y=(t,e)=>t,_={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},b=(t,e)=>!c(t,e),$={attribute:!0,type:String,converter:_,reflect:!1,useDefault:!1,hasChanged:b};Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;let w=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=$){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&l(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:n}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const r=s?.call(this);n?.call(this,e),this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??$}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const t=f(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const t=this.properties,e=[...d(t),...u(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(s)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const s of e){const e=document.createElement("style"),n=i.litNonce;void 0!==n&&e.setAttribute("nonce",n),e.textContent=s.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:_).toAttribute(e,i.type);this._$Em=t,null==n?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:_;this._$Em=s;const r=n.fromAttribute(e,t.type);this[s]=r??this._$Ej?.get(s)??r,this._$Em=null}}requestUpdate(t,e,i,s=!1,n){if(void 0!==t){const r=this.constructor;if(!1===s&&(n=this[t]),i??=r.getPropertyOptions(t),!((i.hasChanged??b)(n,e)||i.useDefault&&i.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:n},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),!0!==n||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[y("elementProperties")]=new Map,w[y("finalized")]=new Map,v?.({ReactiveElement:w}),(p.reactiveElementVersions??=[]).push("2.1.2");const x=globalThis,A=t=>t,E=x.trustedTypes,S=E?E.createPolicy("lit-html",{createHTML:t=>t}):void 0,T="$lit$",O=`lit$${Math.random().toFixed(9).slice(2)}$`,C="?"+O,P=`<${C}>`,k=document,R=()=>k.createComment(""),j=t=>null===t||"object"!=typeof t&&"function"!=typeof t,z=Array.isArray,N="[ \t\n\f\r]",I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,M=/-->/g,U=/>/g,H=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),F=/'/g,V=/"/g,D=/^(?:script|style|textarea|title)$/i,L=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),W=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),q=new WeakMap,J=k.createTreeWalker(k,129);function Y(t,e){if(!z(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}const G=(t,e)=>{const i=t.length-1,s=[];let n,r=2===e?"<svg>":3===e?"<math>":"",o=I;for(let e=0;e<i;e++){const i=t[e];let a,c,l=-1,h=0;for(;h<i.length&&(o.lastIndex=h,c=o.exec(i),null!==c);)h=o.lastIndex,o===I?"!--"===c[1]?o=M:void 0!==c[1]?o=U:void 0!==c[2]?(D.test(c[2])&&(n=RegExp("</"+c[2],"g")),o=H):void 0!==c[3]&&(o=H):o===H?">"===c[0]?(o=n??I,l=-1):void 0===c[1]?l=-2:(l=o.lastIndex-c[2].length,a=c[1],o=void 0===c[3]?H:'"'===c[3]?V:F):o===V||o===F?o=H:o===M||o===U?o=I:(o=H,n=void 0);const d=o===H&&t[e+1].startsWith("/>")?" ":"";r+=o===I?i+P:l>=0?(s.push(a),i.slice(0,l)+T+i.slice(l)+O+d):i+O+(-2===l?e:d)}return[Y(t,r+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class K{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,r=0;const o=t.length-1,a=this.parts,[c,l]=G(t,e);if(this.el=K.createElement(c,i),J.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=J.nextNode())&&a.length<o;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(T)){const e=l[r++],i=s.getAttribute(t).split(O),o=/([.?@])?(.*)/.exec(e);a.push({type:1,index:n,name:o[2],strings:i,ctor:"."===o[1]?et:"?"===o[1]?it:"@"===o[1]?st:tt}),s.removeAttribute(t)}else t.startsWith(O)&&(a.push({type:6,index:n}),s.removeAttribute(t));if(D.test(s.tagName)){const t=s.textContent.split(O),e=t.length-1;if(e>0){s.textContent=E?E.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],R()),J.nextNode(),a.push({type:2,index:++n});s.append(t[e],R())}}}else if(8===s.nodeType)if(s.data===C)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(O,t+1));)a.push({type:7,index:n}),t+=O.length-1}n++}}static createElement(t,e){const i=k.createElement("template");return i.innerHTML=t,i}}function Z(t,e,i=t,s){if(e===W)return e;let n=void 0!==s?i._$Co?.[s]:i._$Cl;const r=j(e)?void 0:e._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),void 0===r?n=void 0:(n=new r(t),n._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=n:i._$Cl=n),void 0!==n&&(e=Z(t,n._$AS(t,e.values),n,s)),e}class Q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??k).importNode(e,!0);J.currentNode=s;let n=J.nextNode(),r=0,o=0,a=i[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new X(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new nt(n,this,t)),this._$AV.push(e),a=i[++o]}r!==a?.index&&(n=J.nextNode(),r++)}return J.currentNode=k,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class X{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Z(this,t,e),j(t)?t===B||null==t||""===t?(this._$AH!==B&&this._$AR(),this._$AH=B):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>z(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==B&&j(this._$AH)?this._$AA.nextSibling.data=t:this.T(k.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=K.createElement(Y(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new Q(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=q.get(t.strings);return void 0===e&&q.set(t.strings,e=new K(t)),e}k(t){z(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new X(this.O(R()),this.O(R()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=A(t).nextSibling;A(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,n){this.type=1,this._$AH=B,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=B}_$AI(t,e=this,i,s){const n=this.strings;let r=!1;if(void 0===n)t=Z(this,t,e,0),r=!j(t)||t!==this._$AH&&t!==W,r&&(this._$AH=t);else{const s=t;let o,a;for(t=n[0],o=0;o<n.length-1;o++)a=Z(this,s[i+o],e,o),a===W&&(a=this._$AH[o]),r||=!j(a)||a!==this._$AH[o],a===B?t=B:t!==B&&(t+=(a??"")+n[o+1]),this._$AH[o]=a}r&&!s&&this.j(t)}j(t){t===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===B?void 0:t}}class it extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==B)}}class st extends tt{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){if((t=Z(this,t,e,0)??B)===W)return;const i=this._$AH,s=t===B&&i!==B||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==B&&(i===B||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class nt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Z(this,t)}}const rt=x.litHtmlPolyfillSupport;rt?.(K,X),(x.litHtmlVersions??=[]).push("3.3.2");const ot=globalThis;let at=class extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let n=s._$litPart$;if(void 0===n){const t=i?.renderBefore??null;s._$litPart$=n=new X(e.insertBefore(R(),t),t,void 0,i??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}};at._$litElement$=!0,at.finalized=!0,ot.litElementHydrateSupport?.({LitElement:at});const ct=ot.litElementPolyfillSupport;ct?.({LitElement:at}),(ot.litElementVersions??=[]).push("4.2.2");const lt={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:b},ht=(t=lt,e,i)=>{const{kind:s,metadata:n}=i;let r=globalThis.litPropertyMetadata.get(n);if(void 0===r&&globalThis.litPropertyMetadata.set(n,r=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),r.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const n=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,n,t,!0,i)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=i;return function(i){const n=this[s];e.call(this,i),this.requestUpdate(s,n,t,!0,i)}}throw Error("Unsupported decorator location: "+s)};function dt(t){return(e,i)=>"object"==typeof i?ht(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}var ut=((t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new o(i,t,n)})`:host {
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
    flex-direction: row;
    gap: 4px;
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
.timer-hint {
  padding: 8px 16px;
  font-size: var(--ha-font-size-s);
  color: var(--secondary-text-color);
  text-align: center;
}
.timer-progress-bar {
  margin: 4px 16px 0;
  background: var(--secondary-background-color);
  border-radius: 10px;
  overflow: hidden;
  height: 22px;
}
.timer-progress-fill {
  height: 100%;
  background: var(--st-mode-active-background, var(--primary-color));
  border-radius: 10px;
  transition: width 1s linear;
  display: flex;
  align-items: center;
  min-width: 80px;
  padding: 0 8px;
  box-sizing: border-box;
}
.timer-progress-text {
  color: var(--text-primary-color);
  font-size: var(--ha-font-size-s);
  white-space: nowrap;
  font-weight: 500;
}
`;function ft(t,e,i,s={}){s=s||{},i=null==i?{}:i;const n=new CustomEvent(e,{detail:i,bubbles:void 0===s.bubbles||s.bubbles,cancelable:Boolean(s.cancelable),composed:void 0===s.composed||s.composed});return t.dispatchEvent(n),n}!function(t,e){void 0===e&&(e={});var i=e.insertAt;if(t&&"undefined"!=typeof document){var s=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css","top"===i&&s.firstChild?s.insertBefore(n,s.firstChild):s.appendChild(n),n.styleSheet?n.styleSheet.cssText=t:n.appendChild(document.createTextNode(t))}}(ut);const pt=[{value:"0",label:"0"},{value:"1",label:"1"}],mt=[{value:"0.5",label:"0.5"},{value:"1",label:"1"}],gt=[{value:"column",label:"column"},{value:"row",label:"row"}],vt=[{value:"show",label:"显示"},{value:"hide",label:"隐藏"}],yt=["climate"],_t=["sensor"],bt={header:{},layout:{mode:{}}},$t=t=>JSON.parse(JSON.stringify(t));class wt extends at{constructor(){super(...arguments),this.config={}}static getStubConfig(){return{...bt}}setConfig(t){this.config=t||{...bt}}_openLink(){window.open("https://github.com/sctale/little-aircon/blob/master/README.md")}render(){return this.hass?L`
      <div class="card-config">
        <div class="overall-config">
          <div class="side-by-side">
            <ha-entity-picker
              label="实体（必选）"
              .hass=${this.hass}
              .value=${this.config.entity||""}
              .configValue="entity"
              .includeDomains=${yt}
              @change=${this.valueChanged}
              allow-custom-entity
            ></ha-entity-picker>
          </div>

          <div class="side-by-side">
            <ha-textfield
              label="名称（可选）"
              .value=${this.config.header?.name||""}
              .configValue="header.name"
              @input=${this.valueChanged}
            ></ha-textfield>
            <ha-textfield
              label="图标（可选）"
              .value=${this.config.header?.icon||""}
              .configValue="header.icon"
              @input=${this.valueChanged}
            ></ha-textfield>
          </div>

          <div class="side-by-side">
            <ha-entity-picker
              label="开关实体（可选）"
              .hass=${this.hass}
              .value=${this.config?.header?.toggle?.entity||""}
              .configValue="header.toggle.entity"
              @change=${this.valueChanged}
              allow-custom-entity
            ></ha-entity-picker>
            <ha-textfield
              label="开关标签"
              .value=${this.config?.header?.toggle?.name||""}
              .configValue="header.toggle.name"
              @input=${this.valueChanged}
            ></ha-textfield>
          </div>

          <div class="side-by-side">
            <ha-textfield
              label="占位文本（可选）"
              .value=${this.config.fallback||""}
              .configValue="fallback"
              @input=${this.valueChanged}
            ></ha-textfield>
          </div>

          <div class="side-by-side">
            <ha-select
              label="小数位数（可选）"
              .configValue="decimals"
              .value=${String(this.config.decimals??"")}
              .options=${pt}
              @selected=${this.valueChanged}
              @closed=${t=>t.stopPropagation()}
              fixedMenuPosition
            ></ha-select>

            <ha-textfield
              label="单位（可选）"
              .value=${this.config.unit||""}
              .configValue="unit"
              @input=${this.valueChanged}
            ></ha-textfield>
          </div>

          <div class="side-by-side">
            <ha-select
              label="布局方向（可选）"
              .configValue="layout.step"
              .value=${this.config.layout?.step??""}
              .options=${gt}
              @selected=${this.valueChanged}
              @closed=${t=>t.stopPropagation()}
              fixedMenuPosition
            ></ha-select>

            <ha-select
              label="步进值（可选）"
              .configValue="step_size"
              .value=${String(this.config.step_size??"")}
              .options=${mt}
              @selected=${this.valueChanged}
              @closed=${t=>t.stopPropagation()}
              fixedMenuPosition
            ></ha-select>
          </div>

          <div class="side-by-side">
            <ha-entity-picker
              label="室内温度传感器（可选）"
              .hass=${this.hass}
              .value=${this.config.sensor_entity||""}
              .includeDomains=${_t}
              @value-changed=${t=>this._configChanged("sensor_entity",t.detail.value)}
              allow-custom-entity
            ></ha-entity-picker>
          </div>

          <div class="side-by-side">
            <ha-select
              label="定时关机"
              .value=${!0===this.config.timer||"show"===this.config.timer?"show":"hide"}
              .options=${vt}
              @selected=${this._timerChanged}
              @closed=${t=>t.stopPropagation()}
              fixedMenuPosition
            ></ha-select>
          </div>

          ${!0===this.config.timer||"show"===this.config.timer?L`
            <div class="side-by-side">
              ${this.config.timer_entity?L`<ha-textfield
                    label="定时器实体（已自动创建）"
                    .value=${this.config.timer_entity}
                    disabled
                  ></ha-textfield>`:L`<span class="hint">定时器实体将自动创建...</span>`}
            </div>
          `:B}

          <div class="side-by-side">
            <ha-button @click=${this._openLink}>
              配置选项说明
            </ha-button>
            <span>标签、控制、传感器、故障和隐藏选项只能在代码编辑器中配置</span>
          </div>
        </div>
      </div>
    `:L``}valueChanged(t){if(!this.config||!this.hass)return;const{target:e}=t,i=$t(this.config),s=e.configValue;if(s){const n="HA-SELECT"===e.tagName?t.detail?.value??e.value:e.value;""===n||void 0===n?"HA-SELECT"!==e.tagName&&delete i[s]:function(t,e,i){const s=e.split(".");let n=t;for(;s.length-1;){const t=s.shift();n.hasOwnProperty(t)||(n[t]={}),n=n[t]}n[s[0]]=i}(i,s,void 0!==e.checked?e.checked:n)}ft(this,"config-changed",{config:i})}_timerChanged(t){const e=t.detail.value,i=$t(this.config);i.timer="show"===e||"hide",this.config=i,ft(this,"config-changed",{config:i})}_configChanged(t,e){const i=$t(this.config);""===e||void 0===e?delete i[t]:i[t]=e,this.config=i,ft(this,"config-changed",{config:i})}}wt.styles=ut,e([dt({type:Object})],wt.prototype,"config",void 0),e([dt({type:Object})],wt.prototype,"hass",void 0);const xt=(t,e,i,s)=>{if("length"===i||"prototype"===i)return;if("arguments"===i||"caller"===i)return;const n=Object.getOwnPropertyDescriptor(t,i),r=Object.getOwnPropertyDescriptor(e,i);!At(n,r)&&s||Object.defineProperty(t,i,r)},At=function(t,e){return void 0===t||t.configurable||t.writable===e.writable&&t.enumerable===e.enumerable&&t.configurable===e.configurable&&(t.writable||t.value===e.value)},Et=(t,e)=>`/* Wrapped ${t}*/\n${e}`,St=Object.getOwnPropertyDescriptor(Function.prototype,"toString"),Tt=Object.getOwnPropertyDescriptor(Function.prototype.toString,"name");function Ot(t,e,{ignoreNonConfigurable:i=!1}={}){const{name:s}=t;for(const s of Reflect.ownKeys(e))xt(t,e,s,i);return((t,e)=>{const i=Object.getPrototypeOf(e);i!==Object.getPrototypeOf(t)&&Object.setPrototypeOf(t,i)})(t,e),((t,e,i)=>{const s=""===i?"":`with ${i.trim()}() `,n=Et.bind(null,s,e.toString());Object.defineProperty(n,"name",Tt),Object.defineProperty(t,"toString",{...St,value:n})})(t,e,s),t}const Ct=(t,e={})=>{if("function"!=typeof t)throw new TypeError(`Expected the first argument to be a function, got \`${typeof t}\``);const{wait:i=0,maxWait:s=Number.POSITIVE_INFINITY,before:n=!1,after:r=!0}=e;if(!n&&!r)throw new Error("Both `before` and `after` are false, function wouldn't be called.");let o,a,c;const l=function(...e){const l=this,h=()=>{a=void 0,o&&(clearTimeout(o),o=void 0),r&&(c=t.apply(l,e))},d=n&&!o;return clearTimeout(o),o=setTimeout(()=>{o=void 0,a&&(clearTimeout(a),a=void 0),r&&(c=t.apply(l,e))},i),s>0&&s!==Number.POSITIVE_INFINITY&&!a&&(a=setTimeout(h,s)),d&&(c=t.apply(l,e)),c};return Ot(l,t),l.cancel=()=>{o&&(clearTimeout(o),o=void 0),a&&(clearTimeout(a),a=void 0)},l};function Pt(t,{decimals:e=1,fallback:i="N/A"}={}){return null===t||""===t||["boolean","undefined"].includes(typeof t)?i:Number(t).toFixed(e)}function kt({header:t,toggleEntityChanged:e,entity:i,openEntityPopover:s}){if(!1===t)return B;const n=i.attributes.hvac_action||i.state;let r=t.icon;"object"==typeof t.icon&&(r=r?.[n]??!1);const o=t?.name??!1;return L`
    <header>
      <div
        style="display: flex;"
        class="clickable"
        @click=${()=>s()}
      >
        ${function(t){return t?L` <ha-icon class="header__icon" .icon=${t}></ha-icon> `:B}(r)} ${function(t){return t?L`<h2 class="header__title">${t}</h2>`:B}(o)}
      </div>
      ${function(t,e){if(!t||0===t.length)return B;const i=t.map(({icon:t,hide_inactive:i,state:s})=>L` <ha-icon
      class="fault-icon ${"on"===s.state?"active":i?" hide":""}"
      icon="${t||s.attributes.icon}"
      @click="${()=>e(s.entity_id)}"
    ></ha-icon>`);return L` <div class="faults">${i}</div>`}(t.faults,s)}
      ${function(t,e,i){return t?L`
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
  `:B}(t.toggle,s,e)}
    </header>
  `}"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var Rt={exports:{}};!function(t){function e(t){var i,s,n=new Error(t);return i=n,s=e.prototype,Object.setPrototypeOf?Object.setPrototypeOf(i,s):i.__proto__=s,n}function i(t,i,s){var n=i.slice(0,s).split(/\n/),r=n.length,o=n[r-1].length+1;throw e(t+=" at line "+r+" col "+o+":\n\n  "+i.split(/\n/)[r-1]+"\n  "+Array(o).join(" ")+"^")}e.prototype=Object.create(Error.prototype,{name:{value:"Squirrelly Error",enumerable:!1}});var s=new Function("return this")().Promise,n=!1;try{n=new Function("return (async function(){}).constructor")()}catch(t){if(!(t instanceof SyntaxError))throw t}function r(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function o(t,e,i){for(var s in e)r(e,s)&&(null==e[s]||"object"!=typeof e[s]||"storage"!==s&&"prefixes"!==s||i?t[s]=e[s]:t[s]=o({},e[s]));return t}var a=/^async +/,c=/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})*}|(?!\${)[^\\`])*`/g,l=/'(?:\\[\s\w"'\\`]|[^\n\r'\\])*?'/g,h=/"(?:\\[\s\w"'\\`]|[^\n\r"\\])*?"/g,d=/[.*+\-?^${}()|[\]\\]/g;function u(t){return d.test(t)?t.replace(d,"\\$&"):t}function f(t,s){s.rmWhitespace&&(t=t.replace(/[\r\n]+/g,"\n").replace(/^\s+|\s+$/gm,"")),c.lastIndex=0,l.lastIndex=0,h.lastIndex=0;var n=s.prefixes,r=[n.h,n.b,n.i,n.r,n.c,n.e].reduce(function(t,e){return t&&e?t+"|"+u(e):e?u(e):t},""),o=new RegExp("([|()]|=>)|('|\"|`|\\/\\*)|\\s*((\\/)?(-|_)?"+u(s.tags[1])+")","g"),d=new RegExp("([^]*?)"+u(s.tags[0])+"(-|_)?\\s*("+r+")?\\s*","g"),f=0,p=!1;function m(e,n){var r,u={f:[]},m=0,g="c";function v(e){var n=t.slice(f,e),r=n.trim();if("f"===g)"safe"===r?u.raw=!0:s.async&&a.test(r)?(r=r.replace(a,""),u.f.push([r,"",!0])):u.f.push([r,""]);else if("fp"===g)u.f[u.f.length-1][1]+=r;else if("err"===g){if(r){var o=n.search(/\S/);i("invalid syntax",t,f+o)}}else u[g]=r;f=e+1}for("h"===n||"b"===n||"c"===n?g="n":"r"===n&&(u.raw=!0,n="i"),o.lastIndex=f;null!==(r=o.exec(t));){var y=r[1],_=r[2],b=r[3],$=r[4],w=r[5],x=r.index;if(y)"("===y?(0===m&&("n"===g?(v(x),g="p"):"f"===g&&(v(x),g="fp")),m++):")"===y?0===--m&&"c"!==g&&(v(x),g="err"):0===m&&"|"===y?(v(x),g="f"):"=>"===y&&(v(x),f+=1,g="res");else if(_)if("/*"===_){var A=t.indexOf("*/",o.lastIndex);-1===A&&i("unclosed comment",t,r.index),o.lastIndex=A+2}else"'"===_?(l.lastIndex=r.index,l.exec(t)?o.lastIndex=l.lastIndex:i("unclosed string",t,r.index)):'"'===_?(h.lastIndex=r.index,h.exec(t)?o.lastIndex=h.lastIndex:i("unclosed string",t,r.index)):"`"===_&&(c.lastIndex=r.index,c.exec(t)?o.lastIndex=c.lastIndex:i("unclosed string",t,r.index));else if(b)return v(x),f=x+r[0].length,d.lastIndex=f,p=w,$&&"h"===n&&(n="s"),u.t=n,u}return i("unclosed tag",t,e),u}var g=function r(o,c){o.b=[],o.d=[];var l,h=!1,u=[];function g(t,e){t&&(t=function(t,e,i,s){var n,r;return"string"==typeof e.autoTrim?n=r=e.autoTrim:Array.isArray(e.autoTrim)&&(n=e.autoTrim[1],r=e.autoTrim[0]),(i||!1===i)&&(n=i),(s||!1===s)&&(r=s),"slurp"===n&&"slurp"===r?t.trim():("_"===n||"slurp"===n?t=String.prototype.trimLeft?t.trimLeft():t.replace(/^[\s\uFEFF\xA0]+/,""):"-"!==n&&"nl"!==n||(t=t.replace(/^(?:\n|\r|\r\n)/,"")),"_"===r||"slurp"===r?t=String.prototype.trimRight?t.trimRight():t.replace(/[\s\uFEFF\xA0]+$/,""):"-"!==r&&"nl"!==r||(t=t.replace(/(?:\n|\r|\r\n)$/,"")),t)}(t,s,p,e))&&(t=t.replace(/\\|'/g,"\\$&").replace(/\r\n|\n|\r/g,"\\n"),u.push(t))}for(;null!==(l=d.exec(t));){var v,y=l[1],_=l[2],b=l[3]||"";for(var $ in n)if(n[$]===b){v=$;break}g(y,_),f=l.index+l[0].length,v||i("unrecognized tag type: "+b,t,f);var w=m(l.index,v),x=w.t;if("h"===x){var A=w.n||"";s.async&&a.test(A)&&(w.a=!0,w.n=A.replace(a,"")),w=r(w),u.push(w)}else if("c"===x){if(o.n===w.n)return h?(h.d=u,o.b.push(h)):o.d=u,o;i("Helper start and end don't match",t,l.index+l[0].length)}else if("b"===x){h?(h.d=u,o.b.push(h)):o.d=u;var E=w.n||"";s.async&&a.test(E)&&(w.a=!0,w.n=E.replace(a,"")),h=w,u=[]}else if("s"===x){var S=w.n||"";s.async&&a.test(S)&&(w.a=!0,w.n=S.replace(a,"")),u.push(w)}else u.push(w)}if(!c)throw e('unclosed helper "'+o.n+'"');return g(t.slice(f,t.length),!1),o.d=u,o}({f:[]},!0);if(s.plugins)for(var v=0;v<s.plugins.length;v++){var y=s.plugins[v];y.processAST&&(g.d=y.processAST(g.d,s))}return g.d}function p(t,e){var i=f(t,e),s="var tR='';"+(e.useWith?"with("+e.varName+"||{}){":"")+_(i,e)+"if(cb){cb(null,tR)} return tR"+(e.useWith?"}":"");if(e.plugins)for(var n=0;n<e.plugins.length;n++){var r=e.plugins[n];r.processFnString&&(s=r.processFnString(s,e))}return s}function m(t,e){for(var i=0;i<e.length;i++){var s=e[i][0],n=e[i][1];t=(e[i][2]?"await ":"")+"c.l('F','"+s+"')("+t,n&&(t+=","+n),t+=")"}return t}function g(t,e,i,s,n,r){var o="{exec:"+(n?"async ":"")+y(i,e,t)+",params:["+s+"]";return r&&(o+=",name:'"+r+"'"),n&&(o+=",async:true"),o+"}"}function v(t,e){for(var i="[",s=0;s<t.length;s++){var n=t[s];i+=g(e,n.res||"",n.d,n.p||"",n.a,n.n),s<t.length&&(i+=",")}return i+"]"}function y(t,e,i){return"function("+e+"){var tR='';"+_(t,i)+"return tR}"}function _(t,e){for(var i=0,s=t.length,n="";i<s;i++){var r=t[i];if("string"==typeof r)n+="tR+='"+r+"';";else{var o=r.t,a=r.c||"",c=r.f,l=r.n||"",h=r.p||"",d=r.res||"",u=r.b,f=!!r.a;if("i"===o){e.defaultFilter&&(a="c.l('F','"+e.defaultFilter+"')("+a+")");var p=m(a,c);!r.raw&&e.autoEscape&&(p="c.l('F','e')("+p+")"),n+="tR+="+p+";"}else if("h"===o)if(e.storage.nativeHelpers.get(l))n+=e.storage.nativeHelpers.get(l)(r,e);else{var y=(f?"await ":"")+"c.l('H','"+l+"')("+g(e,d,r.d,h,f);y+=u?","+v(u,e):",[]",n+="tR+="+m(y+=",c)",c)+";"}else"s"===o?n+="tR+="+m((f?"await ":"")+"c.l('H','"+l+"')({params:["+h+"]},[],c)",c)+";":"e"===o&&(n+=a+"\n")}}return n}var b=function(){function t(t){this.cache=t}return t.prototype.define=function(t,e){this.cache[t]=e},t.prototype.get=function(t){return this.cache[t]},t.prototype.remove=function(t){delete this.cache[t]},t.prototype.reset=function(){this.cache={}},t.prototype.load=function(t){o(this.cache,t,!0)},t}();function $(t,i,s,n){if(i&&i.length>0)throw e((n?"Native":"")+"Helper '"+t+"' doesn't accept blocks");if(s&&s.length>0)throw e((n?"Native":"")+"Helper '"+t+"' doesn't accept filters")}var w={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};function x(t){return w[t]}var A=new b({}),E=new b({each:function(t,e){var i="",s=t.params[0];if($("each",e,!1),t.async)return new Promise(function(e){!function t(e,i,s,n,r){s(e[i],i).then(function(o){n+=o,i===e.length-1?r(n):t(e,i+1,s,n,r)})}(s,0,t.exec,i,e)});for(var n=0;n<s.length;n++)i+=t.exec(s[n],n);return i},foreach:function(t,e){var i=t.params[0];if($("foreach",e,!1),t.async)return new Promise(function(e){!function t(e,i,s,n,r,o){n(i[s],e[i[s]]).then(function(a){r+=a,s===i.length-1?o(r):t(e,i,s+1,n,r,o)})}(i,Object.keys(i),0,t.exec,"",e)});var s="";for(var n in i)r(i,n)&&(s+=t.exec(n,i[n]));return s},include:function(t,i,s){$("include",i,!1);var n=s.storage.templates.get(t.params[0]);if(!n)throw e('Could not fetch template "'+t.params[0]+'"');return n(t.params[1],s)},extends:function(t,i,s){var n=t.params[1]||{};n.content=t.exec();for(var r=0;r<i.length;r++){var o=i[r];n[o.name]=o.exec()}var a=s.storage.templates.get(t.params[0]);if(!a)throw e('Could not fetch template "'+t.params[0]+'"');return a(n,s)},useScope:function(t,e){return $("useScope",e,!1),t.exec(t.params[0])}}),S=new b({if:function(t,e){$("if",!1,t.f,!0);var i="if("+t.p+"){"+_(t.d,e)+"}";if(t.b)for(var s=0;s<t.b.length;s++){var n=t.b[s];"else"===n.n?i+="else{"+_(n.d,e)+"}":"elif"===n.n&&(i+="else if("+n.p+"){"+_(n.d,e)+"}")}return i},try:function(t,i){if($("try",!1,t.f,!0),!t.b||1!==t.b.length||"catch"!==t.b[0].n)throw e("native helper 'try' only accepts 1 block, 'catch'");var s="try{"+_(t.d,i)+"}",n=t.b[0];return s+"catch"+(n.res?"("+n.res+")":"")+"{"+_(n.d,i)+"}"},block:function(t,e){return $("block",t.b,t.f,!0),"if(!"+e.varName+"["+t.p+"]){tR+=("+y(t.d,"",e)+")()}else{tR+="+e.varName+"["+t.p+"]}"}}),T=new b({e:function(t){var e=String(t);return/[&<>"']/.test(e)?e.replace(/[&<>"']/g,x):e}}),O={varName:"it",autoTrim:[!1,"nl"],autoEscape:!0,defaultFilter:!1,tags:["{{","}}"],l:function(t,i){if("H"===t){var s=this.storage.helpers.get(i);if(s)return s;throw e("Can't find helper '"+i+"'")}if("F"===t){var n=this.storage.filters.get(i);if(n)return n;throw e("Can't find filter '"+i+"'")}},async:!1,storage:{helpers:E,nativeHelpers:S,filters:T,templates:A},prefixes:{h:"@",b:"#",i:"",r:"*",c:"/",e:"!"},cache:!1,plugins:[],useWith:!1};function C(t,e){var i={};return o(i,O),e&&o(i,e),t&&o(i,t),i.l.bind(i),i}function P(t,i){var s=C(i||{}),r=Function;if(s.async){if(!n)throw e("This environment doesn't support async/await");r=n}try{return new r(s.varName,"c","cb",p(t,s))}catch(i){throw i instanceof SyntaxError?e("Bad template syntax\n\n"+i.message+"\n"+Array(i.message.length+1).join("=")+"\n"+p(t,s)):i}}function k(t,e){var i;return e.cache&&e.name&&e.storage.templates.get(e.name)?e.storage.templates.get(e.name):(i="function"==typeof t?t:P(t,e),e.cache&&e.name&&e.storage.templates.define(e.name,i),i)}O.l.bind(O),t.compile=P,t.compileScope=_,t.compileScopeIntoFunction=y,t.compileToString=p,t.defaultConfig=O,t.filters=T,t.getConfig=C,t.helpers=E,t.nativeHelpers=S,t.parse=f,t.render=function(t,i,n,r){var o=C(n||{});if(!o.async)return k(t,o)(i,o);if(!r){if("function"==typeof s)return new s(function(e,s){try{e(k(t,o)(i,o))}catch(t){s(t)}});throw e("Please provide a callback function, this env doesn't support Promises")}try{k(t,o)(i,o,r)}catch(t){return r(t)}},t.templates=A,Object.defineProperty(t,"__esModule",{value:!0})}(Rt.exports);var jt=Rt.exports;const zt=2;class Nt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}class It extends Nt{constructor(t){if(super(t),this.it=B,t.type!==zt)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===B||null==t)return this._t=void 0,this.it=t;if(t===W)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}It.directiveName="unsafeHTML",It.resultType=1;const Mt=(t=>(...e)=>({_$litDirective$:t,values:e}))(It),Ut=t=>`<ha-icon icon="${t}"></ha-icon>`;function Ht(t,e){const{type:i,labels:s}=t?.layout?.sensors??{type:"table",labels:!0};return L` <div class="sensors ${[s?"with-labels":"without-labels","list"===i?"as-list":"as-table"].join(" ")}">${e}</div> `}function Ft({hide:t=!1,hass:e,state:i,details:s,localize:n,openEntityPopover:r}){if(t||void 0===i)return B;const{type:o,heading:a,icon:c,unit:l,decimals:h}=s;if("relativetime"===o)return L`
      <div class="sensor-value">
        <ha-relative-time .datetime=${i} .hass=${e}></ha-relative-time>
      </div>
    `;if("object"==typeof i){const[t]=i.entity_id.split("."),e=["component",t,"state",i.attributes?.device_class??"_",""].join(".");let s=n(i.state,e);return"number"==typeof h&&(s=Pt(s,{decimals:h})),L`
      <div
        class="sensor-value clickable"
        @click=${()=>r&&r(i.entity_id)}
      >
        ${s} ${l||i.attributes.unit_of_measurement}
      </div>
    `}let d="number"==typeof h?Pt(i,{decimals:h}):i;return L`<div class="sensor-value">${d}${l||""}</div>`}var Vt;jt.defaultConfig.autoEscape=!1,jt.filters.define("icon",Ut),jt.filters.define("join",(t,e=", ")=>t.join(e)),jt.filters.define("css",(t,e)=>`<span style="${Object.entries(e).reduce((t,[e,i])=>`${t}${e}:${i};`,"")}">${t}</span>`),jt.filters.define("debug",t=>{try{return JSON.stringify(t)}catch{return`Not able to read valid JSON object from: ${t}`}}),function(t){t.OFF="off",t.HEAT="heat",t.COOL="cool",t.HEAT_COOL="heat_cool",t.AUTO="auto",t.DRY="dry",t.FAN_ONLY="fan_only"}(Vt||(Vt={}));const Dt={off:"关闭",heat:"制热",cool:"制冷",auto:"自动",dry:"除湿",fan_only:"送风",heat_cool:"冷热",none:"无",eco:"节能",away:"离家",boost:"增强",comfort:"舒适",home:"在家",sleep:"睡眠",activity:"活动",vertical:"上下摆风",horizontal:"左右摆风",both:"全方位摆风",low:"低速",medium:"中速",high:"高速",auto_mode:"自动"};function Lt({state:t,mode:e,modeOptions:i,localize:s,setMode:n}){const{type:r,hide_when_off:o,mode:a="none",list:c,name:l}=e;if(0===c.length||o&&t===Vt.OFF)return B;const h=(()=>{if(l)return"string"==typeof l?l:"";return{hvac:"运行模式",preset:"预设模式",fan:"风速模式",swing:"摆风模式",swing_horizontal:"左右摆风"}[r]??`${r}_mode`})(),d=i?.headings??!0;return L`
    <div class="modes ${d?"heading":""}">
      ${d?L` <div class="mode-title">${h}</div> `:B}
      ${c.map(({value:t,icon:e})=>{return L`
          <div
            class="mode-item ${t===a?"active "+t:""}"
            @click=${()=>n(r,t)}
          >
            ${(t=>t?!1===i?.icons?B:L` <ha-icon class="mode-icon" .icon=${t}></ha-icon> `:B)(e)} ${o=(t=>Dt[t]??s(t))(t),!1===o||!1===i?.names?B:L`${o}`}
          </div>
        `;var o})}
    </div>
  `}const Wt={auto:"mdi:autorenew",cooling:"mdi:snowflake",fan:"mdi:fan",heating:"mdi:fire",idle:"mdi:air-conditioner",off:"mdi:air-conditioner",drying:"mdi:water-percent"},Bt={auto:"mdi:autorenew",cool:"mdi:snowflake",dry:"mdi:water-percent",fan_only:"mdi:fan",heat_cool:"mdi:autorenew",heat:"mdi:fire",off:"mdi:power",swing_horizontal:"mdi:fan",swing:"mdi:fan-sync",none:"mdi:cancel",eco:"mdi:leaf",away:"mdi:account-arrow-right",boost:"mdi:rocket-launch",comfort:"mdi:sofa",home:"mdi:home",sleep:"mdi:sleep",activity:"mdi:run",silent:"mdi:fan-chevron-down",low:"mdi:fan-speed-1",medium_low:"mdi:fan-speed-1",medium:"mdi:fan-speed-2",medium_high:"mdi:fan-speed-2",high:"mdi:fan-speed-3",highest:"mdi:fan-speed-3",full:"mdi:fan-chevron-up",auto_mode:"mdi:fan-auto",timer_off:"mdi:timer-off",timer_30:"mdi:timer-outline",timer_60:"mdi:timer-outline",timer_90:"mdi:timer-outline",timer_120:"mdi:timer-outline"};function qt(t,e){const i=e.states[t.entity];let s="";return s=!0===t?.name?i.attributes.name:t?.name??"",{entity:i,label:s}}function Jt(t,e){return Array.isArray(t)?t.map(({entity:t,...i})=>({...i,state:e.states[t],entity:t})):[]}var Yt;!function(t){t.HVAC="hvac",t.FAN="fan",t.PRESET="preset",t.SWING="swing",t.SWING_HORIZONTAL="swing_horizontal"}(Yt||(Yt={}));const Gt=Object.values(Yt),Kt=[Yt.HVAC,Yt.PRESET],Zt="mdi:chevron-up",Qt="mdi:chevron-down",Xt="mdi:plus",te="mdi:minus",ee={temperature:!1,state:!1},ie=[{value:"timer_off",label:"关闭",minutes:0,icon:"mdi:timer-off"},{value:"timer_30",label:"30分",minutes:30,icon:"mdi:timer-outline"},{value:"timer_60",label:"1时",minutes:60,icon:"mdi:timer-outline"},{value:"timer_90",label:"1.5时",minutes:90,icon:"mdi:timer-outline"},{value:"timer_120",label:"2时",minutes:120,icon:"mdi:timer-outline"}];function se(t,e,i={}){return e[`${t}_modes`].filter(t=>function(t,e){if("object"==typeof e[t])return!1!==e[t].include;return e?.[t]??!0}(t,i)).map(t=>{const e="object"==typeof i[t]?i[t]:{};return{icon:Bt[t]||"mdi:air-conditioner",value:t,name:t,...e}})}class ne extends at{constructor(){super(...arguments),this.config={},this.header=!1,this.service={},this.modes=[],this._hass={},this.entity=void 0,this.sensors=[],this.showSensors=!0,this.name="",this.stepSize=.5,this._values={},this._updatingValues=!1,this._hide=ee,this._timerValue="timer_off",this._timerRemaining=0,this._timerTotal=0,this._uiRefreshInterval=null,this._unsubTimerFinished=null,this._timerCreating=!1,this._debouncedSetTemperature=Ct(t=>{const{domain:e,service:i,data:s={}}=this.service;this._hass.callService(e,i,{entity_id:this.config.entity,...s,...t})},{wait:500}),this.localize=(t,e="")=>{const i=this._hass.selectedLanguage||this._hass.language,s=`${e}${t}`,n=this._hass.resources[i];return n?.[s]??t},this.toggleEntityChanged=t=>{if(!this.header||!this?.header?.toggle)return;const e=t.target;this._hass.callService("homeassistant",e.checked?"turn_on":"turn_off",{entity_id:this.header?.toggle?.entity?.entity_id})},this.setMode=(t,e)=>{t&&e?(this._hass.callService("climate",`set_${t}_mode`,{entity_id:this.config.entity,[`${t}_mode`]:e}),ft(this,"haptic","light")):ft(this,"haptic","failure")},this.openEntityPopover=(t=null)=>{ft(this,"hass-more-info",{entityId:t||this.config.entity})}}static getConfigElement(){return window.document.createElement(`${t}-editor`)}setConfig(t){if(t.entity&&!t.entity.startsWith("climate."))throw new Error(`实体必须是 climate 域，当前: ${t.entity}`);this.config={decimals:1,...t}}updated(){const t=Array.from(this.renderRoot.querySelectorAll("[with-hass]"));for(const e of Array.from(t))Array.from(e.attributes).forEach(t=>{t.name.startsWith("fwd-")&&(e[t.name.replace("fwd-","")]=t.value)}),e.hass=this._hass}set hass(t){if(this._hass=t,!this.config?.entity)return;const e=t.states[this.config.entity];if(!e)return;var i;this.entity!==e&&(this.entity=e),this.header=function(t,e,i){if(!1===t)return!1;let s;s="string"==typeof t?.name?t.name:!1!==t?.name&&e.attributes.friendly_name;let n=e.attributes.hvac_action?Wt:Bt;return void 0!==t?.icon&&(n=t.icon),{name:s,icon:n,toggle:t?.toggle?qt(t.toggle,i):null,faults:Jt(t?.faults,i)}}(this.config.header,e,t),this.service=!1===(i=this.config?.service??!1)?{domain:"climate",service:"set_temperature"}:i;const s=e.attributes;let n=function(t,e){if(!1===t)return{};if(t)return Object.keys(t).reduce((i,s)=>{const n=t[s];return n?.hide?i:{...i,[s]:e?.[s]}},{});const i=function(t){return"number"==typeof t.target_temp_high&&"number"==typeof t.target_temp_low?"dual":"single"}(e);return"dual"===i?{target_temp_low:e.target_temp_low,target_temp_high:e.target_temp_high}:{temperature:e.temperature}}(this.config?.setpoints??null,s);this._updatingValues&&function(t,e){const i=Object.keys(t);return i.length===Object.keys(e).length&&!i.some(i=>t?.[i]!==e?.[i])}(n,this._values)?this._updatingValues=!1:this._updatingValues||(this._values=n);const r=t=>Gt.includes(t)&&s[`${t}_modes`],o=t=>t.filter(r).map(t=>({type:t,hide_when_off:!1,list:se(t,s)}));let a=[];if(!1===this.config.control)a=[];else if(Array.isArray(this.config.control))a=o(this.config.control);else if("object"==typeof this.config.control){const t=Object.entries(this.config.control);a=t.length>0?t.filter(([t])=>r(t)).map(([t,e])=>{const{_name:i,_hide_when_off:n,...r}=e;return{type:t,hide_when_off:n,name:i,list:se(t,s,r)}}):o(Kt)}else a=o(Kt);if(this.modes=a.map(t=>{if(t.type===Yt.HVAC){const i=[],s=Object.values(Vt);return t.list.forEach(t=>{const e=s.indexOf(t.value);i[e]=t}),{...t,list:i,mode:e.state}}const i=s[`${t.type}_mode`];return{...t,mode:i}}),this.config.step_size&&(this.stepSize=+this.config.step_size),this.config.hide&&(this._hide={...this._hide,...this.config.hide}),this.config?.timer&&"hide"!==this.config.timer&&!this.config?.timer_entity&&this._autoCreateTimerEntity(),this.config?.timer&&"hide"!==this.config.timer||!this.config?.timer_entity||this._deleteTimerEntity(this.config.timer_entity),this._syncTimerEntity(),"off"===e.state&&"timer_off"!==this._timerValue){const t=this.config?.timer_entity;t&&"active"===this._hass.states?.[t]?.state&&(this._hass.callService("timer","cancel",{entity_id:t}),this._unsubscribeTimerFinished())}if(!1===this.config.sensors)this.showSensors=!1;else if(3===this.config.version&&Array.isArray(this.config.sensors)){this.sensors=[];const t=this.config.sensors.map((t,e)=>{const i=t?.entity??this.config.entity;let s=this.entity;return t?.entity&&(s=this._hass.states[t.entity]),{id:t?.id??String(e),label:t?.label,template:t.template,show:!1!==t?.show,entityId:i,context:s}}),e=t.map(t=>t.id),i=[];e.includes("state")||i.push({id:"state",label:"当前状态",template:"{{state.text}}",entityId:this.config.entity,context:this.entity}),e.includes("temperature")||i.push({id:"temperature",label:"当前温度",template:"{{current_temperature|formatNumber}}°",entityId:this.config.entity,context:this.entity}),this.sensors=[...i,...t]}else this.config.sensors&&(this.sensors=this.config.sensors.map(({name:e,entity:i,attribute:s,unit:n="",...r})=>{let o;const a=[e];return i?(o=t.states[i],a.push(o?.attributes?.friendly_name),s&&(o=o.attributes[s])):s&&s in this.entity.attributes&&(o=this.entity.attributes[s],a.push(s)),a.push(i),{...r,name:a.find(t=>!!t),state:o,entity:i,unit:n}}))}render(){const t=[];if(this.stepSize<1&&0===this.config.decimals&&t.push(L`
        <hui-warning>
          小数位设为0但步进值小于1，点击减温可能失效，请调整设置。
        </hui-warning>
      `),!this.entity)return L`<hui-warning> 实体不可用: ${this.config.entity} </hui-warning>`;const{attributes:{min_temp:e=null,max_temp:i=null,hvac_action:s}}=this.entity,n=this.getUnit(),r=this.config?.layout?.step??"column",o="row"===r,a=[!this.header&&"no-header",s].filter(t=>!!t);let c;return 3===this.config.version?(c=this.sensors.filter(t=>!1!==t.show).map(t=>function({context:t,entityId:e,template:i="{{state.text}}",label:s,hass:n,variables:r={},config:o,localize:a,openEntityPopover:c}){const{state:l,attributes:h}=t,[d]=e.split("."),u=n.selectedLanguage||n.language,f="ui.card.climate.",p=Object.entries(n.resources[u]||{}).reduce((t,[e,i])=>(e.startsWith(f)&&(t[e.replace(f,"")]=i),t),{}),m={...h,state:{raw:l,text:a(l,`component.${d}.state._.`)},ui:p,v:r};jt.filters.define("formatNumber",(t,e={decimals:o.decimals})=>String(Pt(t,e))),jt.filters.define("relativetime",t=>`<ha-relative-time fwd-datetime=${t} with-hass></ha-relative-time>`),jt.filters.define("translate",(t,e="")=>a(t,e||"climate"!==d&&"humidifier"!==d?e:`state_attributes.${d}.${t}`));const g=t=>jt.render(t,m,{useWith:!0}),v=g(i);if(!1===s||!1===o?.layout?.sensors?.labels)return L`<div class="sensor-value">${Mt(v)}</div>`;const y=s||"{{friendly_name}}",_=y.match(/^(mdi|hass):.*/)?Ut(y):g(y);return L`
    <div class="sensor-heading">${Mt(_)}</div>
    <div class="sensor-value">${Mt(v)}</div>
  `}({...t,variables:this.config.variables,hass:this._hass,config:this.config,localize:this.localize,openEntityPopover:this.openEntityPopover})),c=Ht(this.config,c)):c=this.showSensors?function({_hide:t,entity:e,unit:i,hass:s,sensors:n,config:r,localize:o,openEntityPopover:a}){const{state:c,attributes:{hvac_action:l,current_temperature:h}}=e,d=r?.layout?.sensors?.labels??!0;let u=(t=>({off:"关闭",heat:"制热",cool:"制冷",auto:"自动",dry:"除湿",fan_only:"送风",heat_cool:"冷热",idle:"待机",heating:"加热中",cooling:"制冷中",drying:"除湿中",fan:"送风中"}[t]??t))(c);const f=[Ft({hide:t.temperature,state:`${Pt(h,r)}${i||""}`,hass:s,details:{heading:!!d&&(r?.label?.temperature??"当前温度")}}),Ft({hide:t.state,state:u,hass:s,details:{heading:!!d&&(r?.label?.state??"运行状态")}}),...n.map(({name:t,state:e,...i})=>Ft({state:e,hass:s,localize:o,openEntityPopover:a,details:{...i,heading:d&&t}}))||null].filter(t=>null!==t);return L`${Ht(r,f)}`}({_hide:this._hide,unit:n,hass:this._hass,entity:this.entity,sensors:this.sensors,config:this.config,localize:this.localize,openEntityPopover:this.openEntityPopover}):"",L`
      <ha-card class="${a.join(" ")}">
        ${t}
        ${kt({header:this.header,toggleEntityChanged:this.toggleEntityChanged,entity:this.entity,openEntityPopover:this.openEntityPopover})}
        <section class="body">
          ${c}
          ${Object.entries(this._values).map(([t,s])=>{const a=["string","number"].includes(typeof s),c=!1!==n&&a;return L`
              <div class="current-wrapper ${r}">
                <ha-icon-button
                  ?disabled=${null!==i&&s>=i}
                  class="thermostat-trigger"
                  @click=${()=>this.setTemperature(this.stepSize,t)}
                >
                  <ha-icon .icon=${o?Xt:Zt}></ha-icon>
                </ha-icon-button>

                <h3
                  class="current--value ${this._updatingValues?"updating":""}"
                  @click=${()=>this.openEntityPopover()}
                >
                  ${Pt(s,this.config)}
                  ${c?L`<span class="current--unit">${n}</span>`:B}
                </h3>

                <ha-icon-button
                  ?disabled=${null!==e&&s<=e}
                  class="thermostat-trigger"
                  @click=${()=>this.setTemperature(-this.stepSize,t)}
                >
                  <ha-icon .icon=${o?te:Qt}></ha-icon>
                </ha-icon-button>
              </div>
            `})}
        </section>

        ${this.modes.map(t=>Lt({state:this.entity.state,mode:t,localize:this.localize,modeOptions:this.config?.layout?.mode??{},setMode:this.setMode}))}

        ${this._renderTimer()}
      </ha-card>
    `}setTemperature(t,e){this._updatingValues=!0;const i=this._values[e],s=Number(i)+t,{decimals:n}=this.config;this._values={...this._values,[e]:+Pt(s,{decimals:n})},this._debouncedSetTemperature(this._values)}getCardSize(){return 3}getUnit(){return["boolean","string"].includes(typeof this.config.unit)?this.config?.unit:this._hass.config?.unit_system?.temperature??!1}disconnectedCallback(){super.disconnectedCallback(),this._stopUIRefresh(),this._unsubscribeTimerFinished()}_renderTimer(){const t=this.config?.timer;if(!t||"hide"===t)return B;if(!this.config?.timer_entity)return L`
        <div class="timer-hint">请在配置中指定定时器实体（timer.xxx）</div>
      `;const e=this.config?.layout?.mode?.headings??!0,i=!1!==this.config?.layout?.mode?.names,s=!1!==this.config?.layout?.mode?.icons,n=this._timerRemaining>0&&this._timerTotal>0,r=n?Math.max(0,this._timerRemaining/this._timerTotal*100):0;return L`
      <div class="modes ${e?"heading":""}">
        ${e?L`<div class="mode-title">定时关机</div>`:B}
        ${ie.map(t=>{const e=this._timerValue===t.value;return L`
            <div
              class="mode-item ${e?"active":""}"
              @click=${()=>this._setTimer(t.value)}
            >
              ${s&&t.icon?L`<ha-icon class="mode-icon" .icon=${t.icon}></ha-icon>`:B}
              ${i?L`${t.label}`:B}
            </div>
          `})}
      </div>
      ${n?L`
        <div class="timer-progress-bar">
          <div class="timer-progress-fill" style="width: ${r}%">
            <span class="timer-progress-text">${this._formatRemaining(this._timerRemaining)} 后关机</span>
          </div>
        </div>
      `:B}
    `}_syncTimerEntity(){const t=this.config?.timer_entity;if(!t)return;const e=this._hass.states?.[t];if(!e)return;const i=e.state;if("active"===i){const t=e.attributes?.finishes_at;if(t){const i=new Date(t).getTime(),s=Date.now(),n=Math.max(0,Math.floor((i-s)/1e3));this._timerRemaining=n;const r=e.attributes?.duration;r?this._timerTotal=this._parseDuration(r):0===this._timerTotal&&(this._timerTotal=n)}this._timerValue=this._matchTimerOption(this._timerRemaining),this._startUIRefresh(),this._subscribeTimerFinished()}else if("paused"===i){const t=e.attributes?.remaining;t&&(this._timerRemaining=this._parseDuration(t)),this._timerValue=this._matchTimerOption(this._timerRemaining),this._stopUIRefresh()}else this._timerRemaining=0,this._timerTotal=0,this._timerValue="timer_off",this._stopUIRefresh()}_subscribeTimerFinished(){if(this._unsubTimerFinished)return;const t=this.config?.timer_entity;if(!t)return;const e=this._hass?.connection;e?.subscribeEvents&&(this._unsubTimerFinished=e.subscribeEvents(e=>{const i=e.data;i?.entity_id===t&&(this._hass.callService("climate","turn_off",{entity_id:this.config.entity}),this._unsubscribeTimerFinished())},"timer.finished"))}_unsubscribeTimerFinished(){this._unsubTimerFinished&&(this._unsubTimerFinished(),this._unsubTimerFinished=null)}_matchTimerOption(t){const e=Math.round(t/60),i=ie.find(t=>t.minutes===e);return i?i.value:"timer_off"!==this._timerValue?this._timerValue:"timer_off"}_parseDuration(t){if("number"==typeof t)return t;const e=String(t).split(":").map(Number);return 3===e.length?3600*e[0]+60*e[1]+e[2]:2===e.length?60*e[0]+e[1]:parseInt(String(t),10)||0}_startUIRefresh(){this._uiRefreshInterval||(this._uiRefreshInterval=setInterval(()=>{const t=this.config?.timer_entity;if(!t)return;const e=this._hass.states?.[t];if(!e||"active"!==e.state)return;const i=e.attributes?.finishes_at;if(i){const t=new Date(i).getTime(),e=Date.now();this._timerRemaining=Math.max(0,Math.floor((t-e)/1e3))}this.requestUpdate()},1e3))}_stopUIRefresh(){this._uiRefreshInterval&&(clearInterval(this._uiRefreshInterval),this._uiRefreshInterval=null)}_setTimer(t){const e=this.config?.timer_entity;if(!e)return;if("timer_off"===t)return this._hass.callService("timer","cancel",{entity_id:e}),void this._unsubscribeTimerFinished();const i=ie.find(e=>e.value===t);if(!i)return;const s=Math.floor(i.minutes/60),n=i.minutes%60,r=`${String(s).padStart(2,"0")}:${String(n).padStart(2,"0")}:00`;this._hass.callService("timer","start",{entity_id:e,duration:r}),this._timerValue=t,this._timerTotal=60*i.minutes,this._timerRemaining=this._timerTotal,this.requestUpdate()}_formatRemaining(t){return`${Math.floor(t/60)}:${(t%60).toString().padStart(2,"0")}`}async _autoCreateTimerEntity(){if(!this._timerCreating){this._timerCreating=!0;try{const t=await this._createTimerEntity();t&&(this.config={...this.config,timer_entity:t},ft(this,"config-changed",{config:this.config}))}finally{this._timerCreating=!1}}}async _deleteTimerEntity(t){const e=this._hass.states?.[t];"active"===e?.state&&this._hass.callService("timer","cancel",{entity_id:t}),this._stopUIRefresh(),this._unsubscribeTimerFinished();try{const e=this._hass?.connection;if(e){const i=await e.sendMessagePromise({type:"config/entity_registry/get",entity_id:t}),s=i?.config_entry_id;s&&await e.sendMessagePromise({type:"config_entries/remove",entry_id:s})}}catch(t){console.warn("小空调：删除 timer 实体失败",t)}const i={...this.config};delete i.timer_entity,this.config=i,ft(this,"config-changed",{config:i}),this._timerValue="timer_off",this._timerRemaining=0,this._timerTotal=0}async _createTimerEntity(){const t=this._hass?.connection;if(!t)return null;try{const e=(await t.sendMessagePromise({type:"config_entries/flow/initiate",handler:"timer",show_advanced:!1})).flow_id,i=`小空调定时器_${this.config.entity?.split(".").pop()||"unknown"}`,s=await t.sendMessagePromise({type:"config_entries/flow/step",flow_id:e,user_input:{name:i,duration:"00:30:00",restore:!0}});if(s.result?.entity_id)return s.result.entity_id;const n=Object.keys(this._hass.states).filter(t=>t.startsWith("timer.")&&t.includes("xiao_kong_tiao"));return n.length>0?n[0]:null}catch(t){return console.error("小空调：创建 timer 失败",t),null}}}ne.styles=ut,e([dt({type:Object})],ne.prototype,"config",void 0),e([dt({type:Object})],ne.prototype,"header",void 0),e([dt({type:Object})],ne.prototype,"service",void 0),e([dt({type:Array})],ne.prototype,"modes",void 0),e([dt({type:Object})],ne.prototype,"entity",void 0),e([dt({type:Array})],ne.prototype,"sensors",void 0),e([dt({type:Boolean})],ne.prototype,"showSensors",void 0),e([dt({type:String})],ne.prototype,"name",void 0),e([dt({type:Object})],ne.prototype,"_values",void 0),e([dt({type:Boolean})],ne.prototype,"_updatingValues",void 0),e([dt({type:Object})],ne.prototype,"_hide",void 0),e([dt({type:String})],ne.prototype,"_timerValue",void 0),e([dt({type:Number})],ne.prototype,"_timerRemaining",void 0),e([dt({type:Number})],ne.prototype,"_timerTotal",void 0),customElements.define(t,ne),customElements.define(`${t}-editor`,wt),console.info(`%c${t}: 3.0.4`,"font-weight: bold"),window.customCards=window.customCards||[],window.customCards.push({type:t,name:"小空调",preview:!1,description:"Home Assistant 温控卡片（lit v3 / HASS 2026.x 兼容，中文界面）"});
