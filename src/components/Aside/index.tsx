import { CloseIcon, QuickAccountIcon, QuickIcon } from '../icons'
import './style.scss'

const Aside = () => {
  return (
    <div className="aside">
      <div className="aside__background"></div>
      <div className="aside__content">
        <button className="aside__close-btn">
          <CloseIcon />
        </button>
        <div className="aside__content-header">Connect</div>
        <button className="aside__content-quick-account">
          <span className="aside__content-quick-account-new">NEW!</span>
          <div className="aside__content-quick-account-info">
            <div>
              <div className="aside__content-quick-account-info-title">
                <QuickIcon />
                Jupiter Quick Account
              </div>
              <div className="aside__content-quick-account-info-subtitle">
                Trade instantly without signing transactions!
              </div>
            </div>

            <div className="aside__content-quick-account-info-img">
              <QuickAccountIcon />
            </div>
          </div>
        </button>

        <div style={{ padding: '0 4px' }}>
          <div className="aside__content-top-wallets">
            <div className="aside__content-top-wallets-title">Top wallets</div>
            <button className="aside__content-top-wallets-jupiter">
              <img
                src={`${process.env.PUBLIC_URL}/walletImg/jupiter.webp`}
                alt=""
              />
              <div>
                <div className="aside__content-top-wallets-jupiter-title">
                  Jupiter Mobile
                </div>
                <div className="aside__content-top-wallets-jupiter-subtitle">
                  On-the-go and Desktop
                </div>
              </div>
            </button>
            <div className="aside__content-top-wallets-buttons">
              <button className="aside__content-top-wallets-button">
                <img
                  src={`${process.env.PUBLIC_URL}/walletImg/phantom.svg`}
                  alt=""
                />
              </button>

              <button className="aside__content-top-wallets-button">
                <img
                  src={`${process.env.PUBLIC_URL}/walletImg/solfare.svg`}
                  alt=""
                />
              </button>
              <button className="aside__content-top-wallets-button">
                <img
                  src={`${process.env.PUBLIC_URL}/walletImg/backpack.png`}
                  alt=""
                />
              </button>
              <button className="aside__content-top-wallets-button">
                <img
                  src={`${process.env.PUBLIC_URL}/walletImg/coinbase.svg`}
                  alt=""
                />
              </button>
              <button className="aside__content-top-wallets-button">
                <img
                  src={`${process.env.PUBLIC_URL}/walletImg/magicEden.svg`}
                  alt=""
                />
              </button>
              <button className="aside__content-top-wallets-button">
                <img
                  src={`${process.env.PUBLIC_URL}/walletImg/reown.svg`}
                  alt=""
                />
                QR
              </button>
            </div>
          </div>
          <div className="aside__content-more-wallets">
            <div className="aside__content-top-wallets-title">More wallets</div>
            <div className="aside__content-top-wallets-buttons">
              <button className="aside__content-top-wallets-button">
                <img
                  src={`${process.env.PUBLIC_URL}/walletImg/trust.svg`}
                  alt=""
                />
              </button>
              <button className="aside__content-top-wallets-button">
                <img
                  src={`${process.env.PUBLIC_URL}/walletImg/ledger.svg`}
                  alt=""
                />
              </button>
              <button className="aside__content-top-wallets-button">
                <img
                  src={`${process.env.PUBLIC_URL}/walletImg/trezor.svg`}
                  alt=""
                />
              </button>
              <button className="aside__content-top-wallets-button">
                <img
                  src={`${process.env.PUBLIC_URL}/walletImg/ethereum.svg`}
                  alt=""
                />
              </button>
              <button className="aside__content-top-wallets-button">
                <img
                  src={`${process.env.PUBLIC_URL}/walletImg/coin98.svg`}
                  alt=""
                />
              </button>
              <button className="aside__content-top-wallets-button">
                <img
                  src={`${process.env.PUBLIC_URL}/walletImg/tipLink.svg`}
                  alt=""
                />
              </button>
              <button className="aside__content-top-wallets-button">
                <img
                  src={`${process.env.PUBLIC_URL}/walletImg/bitget.png`}
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aside
