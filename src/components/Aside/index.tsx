import './style.scss'

const Aside = () => {
  return (
    <div className="aside">
      <div className="aside__background"></div>
      <div className="aside__content">
        <div className="aside__content-header">Connect</div>
        <button className="aside__content-quick-account">
          <span className="aside__content-quick-account-new">new!</span>
          <div className="aside__content-quick-account-info">
            <div className="aside__content-quick-account-info-title">
              Jupiter Quick Account
            </div>
            <div className="aside__content-quick-account-info-subtitle">
              Trade instantly without signing transactions!
            </div>
            <div className="aside__content-quick-account-info-img">img</div>
          </div>
        </button>
        <div className="aside__content-top-wallets">
          <div className="aside__content-top-wallets-title">Top wallets</div>
          <button className="aside__content-top-wallets-jupiter">
            content
          </button>
          <div className="aside__content-top-wallets-buttons">
            <button>some button</button>
          </div>
        </div>
        <div className="aside__content-more-wallets">
          <div className="aside__content-top-wallets-title">More wallets</div>
          <div className="aside__content-more-wallets-buttons">
            <button>some button</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aside
