"use strict";(self.webpackChunkuntitled=self.webpackChunkuntitled||[]).push([[2934],{34338:(t,e,i)=>{var a=i(34872),r=i(80164),o=(i(22823),i(2038),i(47410),i(44460)),n=i(45907);const s=a.AH`
  button {
    border: none;
    border-radius: var(--wui-border-radius-3xl);
  }

  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='gray'] {
    background-color: transparent;
    color: var(--wui-color-fg-200);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='shade'] {
    background-color: transparent;
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-size='sm'] {
    height: 32px;
    padding: 0 var(--wui-spacing-s);
  }

  button[data-size='md'] {
    height: 40px;
    padding: 0 var(--wui-spacing-l);
  }

  button[data-size='sm'] > wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='sm'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  button.disabled > wui-icon,
  button.disabled > wui-image {
    filter: grayscale(1);
  }

  button[data-variant='main'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  button[data-variant='shade'] > wui-image,
  button[data-variant='gray'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:focus-visible {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='shade']:focus-visible,
    button[data-variant='gray']:focus-visible,
    button[data-variant='shade']:hover,
    button[data-variant='gray']:hover {
      background-color: var(--wui-color-gray-glass-002);
    }

    button[data-variant='gray']:active,
    button[data-variant='shade']:active {
      background-color: var(--wui-color-gray-glass-005);
    }
  }

  button.disabled {
    color: var(--wui-color-gray-glass-020);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    pointer-events: none;
  }
`;var c=function(t,e,i,a){var r,o=arguments.length,n=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};let l=class extends a.WF{constructor(){super(...arguments),this.variant="accent",this.imageSrc="",this.disabled=!1,this.icon="externalLink",this.size="md",this.text=""}render(){const t="sm"===this.size?"small-600":"paragraph-600";return a.qy`
      <button
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
        data-size=${this.size}
      >
        ${this.imageSrc?a.qy`<wui-image src=${this.imageSrc}></wui-image>`:null}
        <wui-text variant=${t} color="inherit"> ${this.text} </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </button>
    `}};l.styles=[o.W5,o.fD,s],c([(0,r.MZ)()],l.prototype,"variant",void 0),c([(0,r.MZ)()],l.prototype,"imageSrc",void 0),c([(0,r.MZ)({type:Boolean})],l.prototype,"disabled",void 0),c([(0,r.MZ)()],l.prototype,"icon",void 0),c([(0,r.MZ)()],l.prototype,"size",void 0),c([(0,r.MZ)()],l.prototype,"text",void 0),l=c([(0,n.E)("wui-chip-button")],l)},37568:(t,e,i)=>{var a=i(34872),r=i(80164),o=i(44460),n=i(2511),s=i(45907);const c=a.AH`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var l=function(t,e,i,a){var r,o=arguments.length,n=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};let d=class extends a.WF{render(){return this.style.cssText=`\n      flex-direction: ${this.flexDirection};\n      flex-wrap: ${this.flexWrap};\n      flex-basis: ${this.flexBasis};\n      flex-grow: ${this.flexGrow};\n      flex-shrink: ${this.flexShrink};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};\n      padding-top: ${this.padding&&n.Z.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&n.Z.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&n.Z.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&n.Z.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&n.Z.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&n.Z.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&n.Z.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&n.Z.getSpacingStyles(this.margin,3)};\n    `,a.qy`<slot></slot>`}};d.styles=[o.W5,c],l([(0,r.MZ)()],d.prototype,"flexDirection",void 0),l([(0,r.MZ)()],d.prototype,"flexWrap",void 0),l([(0,r.MZ)()],d.prototype,"flexBasis",void 0),l([(0,r.MZ)()],d.prototype,"flexGrow",void 0),l([(0,r.MZ)()],d.prototype,"flexShrink",void 0),l([(0,r.MZ)()],d.prototype,"alignItems",void 0),l([(0,r.MZ)()],d.prototype,"justifyContent",void 0),l([(0,r.MZ)()],d.prototype,"columnGap",void 0),l([(0,r.MZ)()],d.prototype,"rowGap",void 0),l([(0,r.MZ)()],d.prototype,"gap",void 0),l([(0,r.MZ)()],d.prototype,"padding",void 0),l([(0,r.MZ)()],d.prototype,"margin",void 0),d=l([(0,s.E)("wui-flex")],d)},68161:(t,e,i)=>{i(47410)},72934:(t,e,i)=>{i.r(e),i.d(e,{W3mWalletReceiveView:()=>k});var a=i(34872),r=i(80164),o=i(79024),n=i(71137),s=i(37825),c=i(21672),l=i(37162),d=i(62643),u=i(51785),p=i(33155),g=i(82606),w=(i(34338),i(22823),i(2038),i(47410),i(37568),i(44460)),h=i(45907);const v=a.AH`
  button {
    display: flex;
    gap: var(--wui-spacing-xl);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    padding: var(--wui-spacing-m) var(--wui-spacing-s);
  }

  wui-text {
    width: 100%;
  }

  wui-flex {
    width: auto;
  }

  .network-icon {
    width: var(--wui-spacing-2l);
    height: var(--wui-spacing-2l);
    border-radius: calc(var(--wui-spacing-2l) / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-002),
      0 0 0 3px var(--wui-color-modal-bg);
  }
`;var b=function(t,e,i,a){var r,o=arguments.length,n=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};let f=class extends a.WF{constructor(){super(...arguments),this.networkImages=[""],this.text=""}render(){return a.qy`
      <button>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
        <wui-flex gap="3xs" alignItems="center">
          ${this.networksTemplate()}
          <wui-icon name="chevronRight" size="sm" color="fg-200"></wui-icon>
        </wui-flex>
      </button>
    `}networksTemplate(){const t=this.networkImages.slice(0,5);return a.qy` <wui-flex class="networks">
      ${t?.map((t=>a.qy` <wui-flex class="network-icon"> <wui-image src=${t}></wui-image> </wui-flex>`))}
    </wui-flex>`}};f.styles=[w.W5,w.fD,v],b([(0,r.MZ)({type:Array})],f.prototype,"networkImages",void 0),b([(0,r.MZ)()],f.prototype,"text",void 0),f=b([(0,h.E)("wui-compatible-network")],f);i(99437),i(93999),i(68161);var y=i(32797);const m=a.AH`
  wui-compatible-network {
    margin-top: var(--wui-spacing-l);
  }
`;var x=function(t,e,i,a){var r,o=arguments.length,n=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};let k=class extends a.WF{constructor(){super(),this.unsubscribe=[],this.address=n.U.state.address,this.profileName=n.U.state.profileName,this.network=s.W.state.activeCaipNetwork,this.preferredAccountType=n.U.state.preferredAccountType,this.unsubscribe.push(n.U.subscribe((t=>{t.address?(this.address=t.address,this.profileName=t.profileName,this.preferredAccountType=t.preferredAccountType):c.P.showError("Account not found")})),s.W.subscribeKey("activeCaipNetwork",(t=>{t?.id&&(this.network=t)})))}disconnectedCallback(){this.unsubscribe.forEach((t=>t()))}render(){if(!this.address)throw new Error("w3m-wallet-receive-view: No account provided");const t=l.$.getNetworkImage(this.network);return a.qy` <wui-flex
      flexDirection="column"
      .padding=${["0","l","l","l"]}
      alignItems="center"
    >
      <wui-chip-button
        data-testid="receive-address-copy-button"
        @click=${this.onCopyClick.bind(this)}
        text=${g.Zv.getTruncateString({string:this.profileName||this.address||"",charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
        icon="copy"
        size="sm"
        imageSrc=${t||""}
        variant="gray"
      ></wui-chip-button>
      <wui-flex
        flexDirection="column"
        .padding=${["l","0","0","0"]}
        alignItems="center"
        gap="s"
      >
        <wui-qr-code
          size=${232}
          theme=${d.W.state.themeMode}
          uri=${this.address}
          ?arenaClear=${!0}
          color=${(0,o.J)(d.W.state.themeVariables["--w3m-qr-color"])}
          data-testid="wui-qr-code"
        ></wui-qr-code>
        <wui-text variant="paragraph-500" color="fg-100" align="center">
          Copy your address or scan this QR code
        </wui-text>
      </wui-flex>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){const t=s.W.getAllRequestedCaipNetworks(),e=s.W.checkIfSmartAccountEnabled(),i=s.W.state.activeCaipNetwork;if(this.preferredAccountType===y.Vl.ACCOUNT_TYPES.SMART_ACCOUNT&&e)return i?a.qy`<wui-compatible-network
        @click=${this.onReceiveClick.bind(this)}
        text="Only receive assets on this network"
        .networkImages=${[l.$.getNetworkImage(i)??""]}
      ></wui-compatible-network>`:null;const r=t?.filter((t=>t?.assets?.imageId))?.slice(0,5),o=r.map(l.$.getNetworkImage).filter(Boolean);return a.qy`<wui-compatible-network
      @click=${this.onReceiveClick.bind(this)}
      text="Only receive assets on these networks"
      .networkImages=${o}
    ></wui-compatible-network>`}onReceiveClick(){u.I.push("WalletCompatibleNetworks")}onCopyClick(){try{this.address&&(p.w.copyToClopboard(this.address),c.P.showSuccess("Address copied"))}catch{c.P.showError("Failed to copy")}}};k.styles=m,x([(0,r.wk)()],k.prototype,"address",void 0),x([(0,r.wk)()],k.prototype,"profileName",void 0),x([(0,r.wk)()],k.prototype,"network",void 0),x([(0,r.wk)()],k.prototype,"preferredAccountType",void 0),k=x([(0,g.EM)("w3m-wallet-receive-view")],k)},79024:(t,e,i)=>{i.d(e,{J:()=>a.J});var a=i(54674)},99437:(t,e,i)=>{i(37568)}}]);
//# sourceMappingURL=2934.bd13978f.chunk.js.map