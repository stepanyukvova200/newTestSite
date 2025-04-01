import React from 'react'
import './style.scss'
import Header from '../../components/header'
import Background from '../../components/background'
import { useLocation, useNavigate } from 'react-router-dom'
import { routes } from '../../constants/routes'
import Instant from './instant'
import Reccuring from './recurring'
import Trigger from './trigger'
import Aside from '../../components/Aside'

const Spot: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <>
      <Background />
      <Header />
      {/* <Aside /> */}
      <div className="spot-container">
        <div className="spot-header">
          <div
            className={`spot-header-tab ${
              location.pathname === routes.spot_instant ||
              location.pathname === '/newTestSite/' ||
              location.pathname === routes.spot
                ? 'active'
                : ''
            }`}
            onClick={() => navigate(routes.spot_instant)}
          >
            Instant
          </div>
          <div
            className={`spot-header-tab ${
              location.pathname === routes.spot_trigger ? 'active' : ''
            }`}
            onClick={() => navigate(routes.spot_trigger)}
          >
            Trigger
          </div>
          <div
            className={`spot-header-tab ${
              location.pathname === routes.spot_recurring ? 'active' : ''
            }`}
            onClick={() => navigate(routes.spot_recurring)}
          >
            Recurring
          </div>
        </div>

        {(location.pathname === routes.spot_instant ||
          location.pathname === '/newTestSite/' ||
          location.pathname === routes.spot) && <Instant />}
        {location.pathname === routes.spot_recurring && <Reccuring />}
        {location.pathname === routes.spot_trigger && <Trigger />}
      </div>

      <div className="spot-chart">
                <div className="chart-btn-expand">Expand Chart</div>
                <div className="chart-diagrams">
                    <div className="diagram-container">
                        1
                    </div>
                    <div className="diagram-container">
                        2
                    </div>
                </div>
            </div>

      <div className="spot-history">
        <div className="history-text">View History</div>
        <div className="history-btn-connect">Connect</div>
      </div>

      <div className="talk-to-us">
        <svg height="14" width="14" viewBox="0 0 14 14" fill="hsla(0,0%,100%,.5)" xmlns="http://www.w3.org/2000/svg"><path d="M0.855036 13.4987L2.91504 11.4387C3.29067 11.0643 3.7994 10.8537 4.33004 10.8537H11.0001C11.7958 10.8531 12.5583 10.5368 13.1208 9.97431C13.6833 9.41181 13.9995 8.64932 14.0001 7.85367V3.35367C14.0001 2.55804 13.6845 1.79492 13.1214 1.23239C12.5589 0.669894 11.7958 0.353638 11.0001 0.353638H3.00011C2.20448 0.353638 1.44136 0.669894 0.878828 1.23239C0.315708 1.79489 7.62939e-05 2.55802 7.62939e-05 3.35367V13.1437C7.62939e-05 13.3462 0.122575 13.5287 0.309452 13.6062C0.496332 13.6844 0.711276 13.6418 0.855036 13.4987ZM4.26496 4.06364C4.40683 3.63738 4.72558 3.29301 5.13997 3.11865C5.18497 3.09865 5.22996 3.07865 5.27496 3.06365V3.06427C5.98997 2.85365 6.74871 3.21865 7.03 3.90864L7.15 4.18864V4.18926C7.20688 4.31989 7.35876 4.38051 7.49001 4.32426L7.76501 4.20426C8.44439 3.90239 9.24252 4.15801 9.62005 4.79863C9.64005 4.84363 9.66505 4.88863 9.68505 4.93363C9.86193 5.34738 9.85318 5.81738 9.66005 6.22426C9.48569 6.5855 9.18255 6.86925 8.81005 7.01862L6.05997 8.19862C5.9581 8.243 5.84247 8.24425 5.73935 8.203C5.63622 8.16175 5.55372 8.08112 5.50997 7.97863L4.33496 5.22855C4.16997 4.86229 4.14496 4.44801 4.26496 4.06364Z" fill="hsla(0,0%,100%,.5)"></path></svg>
        <div className="talk-to-us-text">Talk to us</div>
      </div>
    </>
  )
}

export default Spot
