import React, {useState} from 'react'
import './style.scss'
import Header from '../../components/header'
import Background from '../../components/background'
import { useLocation, useNavigate } from 'react-router-dom'
import { routes } from '../../constants/routes'
import Instant from './instant'
import Reccuring from './recurring'
import Trigger from './trigger'
import {motion, useAnimation} from "framer-motion";
import Aside from '../../components/Aside'

const Spot: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const [isCarouselPaused, setIsCarouselPaused] = useState(false);
  const controls = useAnimation();
  const items = Array.from({ length: 10 }, (_, i) => `Елемент ${i + 1}`);

  const marqueeAnimation = {
    x: ["0%", "-100%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 10,
        ease: "linear",
      },
    },
  };

  return (
    <>
      <Background />
      <Header />
       <Aside /> 

      <div className="spot-carousel">
        <div className="carousel-text-container">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M9.91639 2.04229C9.86569 1.94071 9.79394 1.8511 9.70593 1.77939C9.61792 1.70769 9.51565 1.65553 9.40593 1.6264C9.29621 1.59727 9.18154 1.59182 9.06955 1.61042C8.95756 1.62902 8.85081 1.67125 8.75639 1.73429C8.48039 1.91829 8.2652 2.18069 8.0988 2.43829C7.9276 2.70229 7.7764 3.00869 7.6428 3.33109C7.3756 3.97429 7.1516 4.74549 6.9708 5.51829C6.75214 6.46268 6.5884 7.41895 6.4804 8.38229C6.1549 8.17245 5.89337 7.87715 5.7244 7.52869C5.462 6.98469 5.40599 6.30149 5.40599 5.40549C5.40596 5.24729 5.35902 5.09265 5.27112 4.96112C5.18321 4.82959 5.05828 4.72708 4.91212 4.66654C4.76596 4.60601 4.60513 4.59017 4.44997 4.62102C4.29481 4.65187 4.15228 4.72804 4.04039 4.83989C3.51973 5.35944 3.10682 5.97672 2.82538 6.65629C2.54394 7.33587 2.39951 8.06434 2.40039 8.79989C2.40046 9.72078 2.62763 10.6275 3.06179 11.4396C3.49594 12.2517 4.12368 12.9442 4.88939 13.4558C5.65511 13.9674 6.53518 14.2823 7.45164 14.3725C8.36811 14.4628 9.29268 14.3256 10.1435 13.9732C10.9943 13.6208 11.745 13.064 12.3292 12.3521C12.9134 11.6402 13.3131 10.7953 13.4928 9.8921C13.6724 8.9889 13.6266 8.05533 13.3593 7.17408C13.092 6.29283 12.6115 5.49109 11.9604 4.83989C11.4868 4.36709 11.1764 4.05189 10.882 3.66629C10.5916 3.28549 10.3028 2.81589 9.91639 2.04229ZM9.69639 12.0959C9.36076 12.4311 8.93331 12.6593 8.46803 12.7518C8.00275 12.8442 7.52052 12.7967 7.08224 12.6152C6.64396 12.4337 6.26928 12.1264 6.00554 11.7321C5.7418 11.3379 5.60081 10.8743 5.60039 10.3999C5.60039 10.3999 6.30359 10.7999 7.60039 10.7999C7.60039 9.99989 8.00039 7.59989 8.60039 7.19989C9.00039 7.99989 9.22919 8.23429 9.69719 8.70309C9.92043 8.92563 10.0975 9.1901 10.2181 9.4813C10.3388 9.7725 10.4008 10.0847 10.4004 10.3999C10.4008 10.7151 10.3388 11.0273 10.2181 11.3185C10.0975 11.6097 9.92043 11.8741 9.69719 12.0967L9.69639 12.0959Z"
                  fill="#c7f284">
            </path>
          </svg>
          Trending
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"
               className="mt-px h-2.5 w-2.5 self-start">
            <path fill="#c7f284"
                  d="M204 64v104a12 12 0 0 1-24 0V93L72.49 200.49a12 12 0 0 1-17-17L163 76H88a12 12 0 0 1 0-24h104a12 12 0 0 1 12 12"></path>
          </svg>
        </div>
        <div
          className="carousel-container"
          onMouseEnter={() => {
            setIsCarouselPaused(true);
            controls.stop();
          }}
          onMouseLeave={() => {
            setIsCarouselPaused(false);
            controls.start(marqueeAnimation);
          }}
        >
          <div className="fade-left" />
          <motion.div className="carousel-track" animate={controls} initial={marqueeAnimation}>
            {items.concat(items).map((item, index) => (
              <div key={index} className="carousel-item">
                {item}
              </div>
            ))}
          </motion.div>
          <div className="fade-right" />
        </div>
      </div>

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

        {(location.pathname === routes.spot_instant || location.pathname === '/newTestSite/' || location.pathname === routes.spot) && (
          <Instant/>
        )}
        {location.pathname === routes.spot_recurring && (
          <Reccuring/>
        )}
        {location.pathname === routes.spot_trigger && (
          <Trigger/>
        )}
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
        <svg height="14" width="14" viewBox="0 0 14 14" fill="hsla(0,0%,100%,.5)" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0.855036 13.4987L2.91504 11.4387C3.29067 11.0643 3.7994 10.8537 4.33004 10.8537H11.0001C11.7958 10.8531 12.5583 10.5368 13.1208 9.97431C13.6833 9.41181 13.9995 8.64932 14.0001 7.85367V3.35367C14.0001 2.55804 13.6845 1.79492 13.1214 1.23239C12.5589 0.669894 11.7958 0.353638 11.0001 0.353638H3.00011C2.20448 0.353638 1.44136 0.669894 0.878828 1.23239C0.315708 1.79489 7.62939e-05 2.55802 7.62939e-05 3.35367V13.1437C7.62939e-05 13.3462 0.122575 13.5287 0.309452 13.6062C0.496332 13.6844 0.711276 13.6418 0.855036 13.4987ZM4.26496 4.06364C4.40683 3.63738 4.72558 3.29301 5.13997 3.11865C5.18497 3.09865 5.22996 3.07865 5.27496 3.06365V3.06427C5.98997 2.85365 6.74871 3.21865 7.03 3.90864L7.15 4.18864V4.18926C7.20688 4.31989 7.35876 4.38051 7.49001 4.32426L7.76501 4.20426C8.44439 3.90239 9.24252 4.15801 9.62005 4.79863C9.64005 4.84363 9.66505 4.88863 9.68505 4.93363C9.86193 5.34738 9.85318 5.81738 9.66005 6.22426C9.48569 6.5855 9.18255 6.86925 8.81005 7.01862L6.05997 8.19862C5.9581 8.243 5.84247 8.24425 5.73935 8.203C5.63622 8.16175 5.55372 8.08112 5.50997 7.97863L4.33496 5.22855C4.16997 4.86229 4.14496 4.44801 4.26496 4.06364Z"
            fill="hsla(0,0%,100%,.5)"></path>
        </svg>
        <div className="talk-to-us-text">Talk to us</div>
      </div>
    </>
  )
}

export default Spot
