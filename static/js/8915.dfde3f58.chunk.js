"use strict";(self.webpackChunkuntitled=self.webpackChunkuntitled||[]).push([[8915],{2038:(e,r,o)=>{var t=o(42316),i=o(80164),s=o(44460),a=o(45907);const l=t.AH`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`;var c=function(e,r,o,t){var i,s=arguments.length,a=s<3?r:null===t?t=Object.getOwnPropertyDescriptor(r,o):t;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,r,o,t);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(a=(s<3?i(a):s>3?i(r,o,a):i(r,o))||a);return s>3&&a&&Object.defineProperty(r,o,a),a};let n=class extends t.WF{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0}render(){return this.style.cssText=`\n      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};\n      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};\n      `,t.qy`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};n.styles=[s.W5,s.ck,l],c([(0,i.MZ)()],n.prototype,"src",void 0),c([(0,i.MZ)()],n.prototype,"alt",void 0),c([(0,i.MZ)()],n.prototype,"size",void 0),n=c([(0,a.E)("wui-image")],n)},3830:(e,r,o)=>{var t=o(42316),i=o(80164),s=o(43188),a=(o(47410),o(44460)),l=o(45907);const c=t.AH`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-color-gray-glass-015);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }
`;var n=function(e,r,o,t){var i,s=arguments.length,a=s<3?r:null===t?t=Object.getOwnPropertyDescriptor(r,o):t;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,r,o,t);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(a=(s<3?i(a):s>3?i(r,o,a):i(r,o))||a);return s>3&&a&&Object.defineProperty(r,o,a),a};let d=class extends t.WF{constructor(){super(...arguments),this.tabIdx=void 0,this.disabled=!1,this.color="inherit"}render(){return t.qy`
      <button ?disabled=${this.disabled} tabindex=${(0,s.J)(this.tabIdx)}>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};d.styles=[a.W5,a.fD,c],n([(0,i.MZ)()],d.prototype,"tabIdx",void 0),n([(0,i.MZ)({type:Boolean})],d.prototype,"disabled",void 0),n([(0,i.MZ)()],d.prototype,"color",void 0),d=n([(0,l.E)("wui-link")],d)},30408:(e,r,o)=>{var t=o(42316),i=o(80164),s=(o(22823),o(44460)),a=o(45907);const l=t.AH`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-color-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    box-sizing: content-box;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;var c=function(e,r,o,t){var i,s=arguments.length,a=s<3?r:null===t?t=Object.getOwnPropertyDescriptor(r,o):t;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,r,o,t);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(a=(s<3?i(a):s>3?i(r,o,a):i(r,o))||a);return s>3&&a&&Object.defineProperty(r,o,a),a};let n=class extends t.WF{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const e=this.iconSize||this.size,r="lg"===this.size,o="xl"===this.size,i=r?"12%":"16%",s=r?"xxs":o?"s":"3xl",a="gray"===this.background,l="opaque"===this.background,c="accent-100"===this.backgroundColor&&l||"success-100"===this.backgroundColor&&l||"error-100"===this.backgroundColor&&l||"inverse-100"===this.backgroundColor&&l;let n=`var(--wui-color-${this.backgroundColor})`;return c?n=`var(--wui-icon-box-bg-${this.backgroundColor})`:a&&(n=`var(--wui-color-gray-${this.backgroundColor})`),this.style.cssText=`\n       --local-bg-value: ${n};\n       --local-bg-mix: ${c||a?"100%":i};\n       --local-border-radius: var(--wui-border-radius-${s});\n       --local-size: var(--wui-icon-box-size-${this.size});\n       --local-border: ${"wui-color-bg-125"===this.borderColor?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}\n   `,t.qy` <wui-icon color=${this.iconColor} size=${e} name=${this.icon}></wui-icon> `}};n.styles=[s.W5,s.fD,l],c([(0,i.MZ)()],n.prototype,"size",void 0),c([(0,i.MZ)()],n.prototype,"backgroundColor",void 0),c([(0,i.MZ)()],n.prototype,"iconColor",void 0),c([(0,i.MZ)()],n.prototype,"iconSize",void 0),c([(0,i.MZ)()],n.prototype,"background",void 0),c([(0,i.MZ)({type:Boolean})],n.prototype,"border",void 0),c([(0,i.MZ)()],n.prototype,"borderColor",void 0),c([(0,i.MZ)()],n.prototype,"icon",void 0),n=c([(0,a.E)("wui-icon-box")],n)},34663:(e,r,o)=>{o(30408)},46304:(e,r,o)=>{var t=o(42316),i=o(80164),s=o(45907);const a=t.AH`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  :host([variant='light']) {
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-150) 5%,
      var(--wui-color-bg-150) 48%,
      var(--wui-color-bg-200) 55%,
      var(--wui-color-bg-200) 60%,
      var(--wui-color-bg-200) calc(60% + 10px),
      var(--wui-color-bg-150) calc(60% + 12px),
      var(--wui-color-bg-150) 100%
    );
    background-size: 250%;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`;var l=function(e,r,o,t){var i,s=arguments.length,a=s<3?r:null===t?t=Object.getOwnPropertyDescriptor(r,o):t;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,r,o,t);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(a=(s<3?i(a):s>3?i(r,o,a):i(r,o))||a);return s>3&&a&&Object.defineProperty(r,o,a),a};let c=class extends t.WF{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m",this.variant="default"}render(){return this.style.cssText=`\n      width: ${this.width};\n      height: ${this.height};\n      border-radius: clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px);\n    `,t.qy`<slot></slot>`}};c.styles=[a],l([(0,i.MZ)()],c.prototype,"width",void 0),l([(0,i.MZ)()],c.prototype,"height",void 0),l([(0,i.MZ)()],c.prototype,"borderRadius",void 0),l([(0,i.MZ)()],c.prototype,"variant",void 0),c=l([(0,s.E)("wui-shimmer")],c)},68916:(e,r,o)=>{o.r(r),o.d(r,{W3mTransactionsView:()=>l});var t=o(42316),i=o(82606);o(99437),o(99180);const s=t.AH`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;var a=function(e,r,o,t){var i,s=arguments.length,a=s<3?r:null===t?t=Object.getOwnPropertyDescriptor(r,o):t;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,r,o,t);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(a=(s<3?i(a):s>3?i(r,o,a):i(r,o))||a);return s>3&&a&&Object.defineProperty(r,o,a),a};let l=class extends t.WF{render(){return t.qy`
      <wui-flex flexDirection="column" .padding=${["0","m","m","m"]} gap="s">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};l.styles=s,l=a([(0,i.EM)("w3m-transactions-view")],l)},95974:(e,r,o)=>{var t=o(42316),i=(o(46304),o(37568),o(44460)),s=o(45907);const a=t.AH`
  :host > wui-flex:first-child {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;var l=function(e,r,o,t){var i,s=arguments.length,a=s<3?r:null===t?t=Object.getOwnPropertyDescriptor(r,o):t;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,r,o,t);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(a=(s<3?i(a):s>3?i(r,o,a):i(r,o))||a);return s>3&&a&&Object.defineProperty(r,o,a),a};let c=class extends t.WF{render(){return t.qy`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px"></wui-shimmer>
        <wui-flex flexDirection="column" gap="2xs">
          <wui-shimmer width="72px" height="16px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="148px" height="14px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" borderRadius="5xs"></wui-shimmer>
      </wui-flex>
    `}};c.styles=[i.W5,a],c=l([(0,s.E)("wui-transaction-list-item-loader")],c)}}]);
//# sourceMappingURL=8915.dfde3f58.chunk.js.map