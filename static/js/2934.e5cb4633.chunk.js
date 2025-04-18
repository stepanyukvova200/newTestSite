"use strict";(self.webpackChunkuntitled=self.webpackChunkuntitled||[]).push([[2934],{34338:(e,t,a)=>{var r=a(42316),i=a(80164),o=(a(22823),a(2038),a(47410),a(44460)),s=a(45907);const n=r.AH`
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
`;var c=function(e,t,a,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,a,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(o<3?i(s):o>3?i(t,a,s):i(t,a))||s);return o>3&&s&&Object.defineProperty(t,a,s),s};let l=class extends r.WF{constructor(){super(...arguments),this.variant="accent",this.imageSrc="",this.disabled=!1,this.icon="externalLink",this.size="md",this.text=""}render(){const e="sm"===this.size?"small-600":"paragraph-600";return r.qy`
      <button
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
        data-size=${this.size}
      >
        ${this.imageSrc?r.qy`<wui-image src=${this.imageSrc}></wui-image>`:null}
        <wui-text variant=${e} color="inherit"> ${this.text} </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </button>
    `}};l.styles=[o.W5,o.fD,n],c([(0,i.MZ)()],l.prototype,"variant",void 0),c([(0,i.MZ)()],l.prototype,"imageSrc",void 0),c([(0,i.MZ)({type:Boolean})],l.prototype,"disabled",void 0),c([(0,i.MZ)()],l.prototype,"icon",void 0),c([(0,i.MZ)()],l.prototype,"size",void 0),c([(0,i.MZ)()],l.prototype,"text",void 0),l=c([(0,s.E)("wui-chip-button")],l)},72934:(e,t,a)=>{a.r(t),a.d(t,{W3mWalletReceiveView:()=>k});var r=a(42316),i=a(80164),o=a(43188),s=a(71137),n=a(37825),c=a(21672),l=a(37162),d=a(62643),u=a(51785),w=a(33155),p=a(82606),h=(a(34338),a(22823),a(2038),a(47410),a(37568),a(44460)),g=a(45907);const v=r.AH`
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
`;var b=function(e,t,a,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,a,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(o<3?i(s):o>3?i(t,a,s):i(t,a))||s);return o>3&&s&&Object.defineProperty(t,a,s),s};let m=class extends r.WF{constructor(){super(...arguments),this.networkImages=[""],this.text=""}render(){return r.qy`
      <button>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
        <wui-flex gap="3xs" alignItems="center">
          ${this.networksTemplate()}
          <wui-icon name="chevronRight" size="sm" color="fg-200"></wui-icon>
        </wui-flex>
      </button>
    `}networksTemplate(){const e=this.networkImages.slice(0,5);return r.qy` <wui-flex class="networks">
      ${e?.map((e=>r.qy` <wui-flex class="network-icon"> <wui-image src=${e}></wui-image> </wui-flex>`))}
    </wui-flex>`}};m.styles=[h.W5,h.fD,v],b([(0,i.MZ)({type:Array})],m.prototype,"networkImages",void 0),b([(0,i.MZ)()],m.prototype,"text",void 0),m=b([(0,g.E)("wui-compatible-network")],m);a(99437),a(93999),a(68161);var f=a(32797);const y=r.AH`
  wui-compatible-network {
    margin-top: var(--wui-spacing-l);
  }
`;var x=function(e,t,a,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,a,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(o<3?i(s):o>3?i(t,a,s):i(t,a))||s);return o>3&&s&&Object.defineProperty(t,a,s),s};let k=class extends r.WF{constructor(){super(),this.unsubscribe=[],this.address=s.U.state.address,this.profileName=s.U.state.profileName,this.network=n.W.state.activeCaipNetwork,this.preferredAccountType=s.U.state.preferredAccountType,this.unsubscribe.push(s.U.subscribe((e=>{e.address?(this.address=e.address,this.profileName=e.profileName,this.preferredAccountType=e.preferredAccountType):c.P.showError("Account not found")})),n.W.subscribeKey("activeCaipNetwork",(e=>{e?.id&&(this.network=e)})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){if(!this.address)throw new Error("w3m-wallet-receive-view: No account provided");const e=l.$.getNetworkImage(this.network);return r.qy` <wui-flex
      flexDirection="column"
      .padding=${["0","l","l","l"]}
      alignItems="center"
    >
      <wui-chip-button
        data-testid="receive-address-copy-button"
        @click=${this.onCopyClick.bind(this)}
        text=${p.Zv.getTruncateString({string:this.profileName||this.address||"",charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
        icon="copy"
        size="sm"
        imageSrc=${e||""}
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
    </wui-flex>`}networkTemplate(){const e=n.W.getAllRequestedCaipNetworks(),t=n.W.checkIfSmartAccountEnabled(),a=n.W.state.activeCaipNetwork;if(this.preferredAccountType===f.Vl.ACCOUNT_TYPES.SMART_ACCOUNT&&t)return a?r.qy`<wui-compatible-network
        @click=${this.onReceiveClick.bind(this)}
        text="Only receive assets on this network"
        .networkImages=${[l.$.getNetworkImage(a)??""]}
      ></wui-compatible-network>`:null;const i=e?.filter((e=>e?.assets?.imageId))?.slice(0,5),o=i.map(l.$.getNetworkImage).filter(Boolean);return r.qy`<wui-compatible-network
      @click=${this.onReceiveClick.bind(this)}
      text="Only receive assets on these networks"
      .networkImages=${o}
    ></wui-compatible-network>`}onReceiveClick(){u.I.push("WalletCompatibleNetworks")}onCopyClick(){try{this.address&&(w.w.copyToClopboard(this.address),c.P.showSuccess("Address copied"))}catch{c.P.showError("Failed to copy")}}};k.styles=y,x([(0,i.wk)()],k.prototype,"address",void 0),x([(0,i.wk)()],k.prototype,"profileName",void 0),x([(0,i.wk)()],k.prototype,"network",void 0),x([(0,i.wk)()],k.prototype,"preferredAccountType",void 0),k=x([(0,p.EM)("w3m-wallet-receive-view")],k)}}]);
//# sourceMappingURL=2934.e5cb4633.chunk.js.map