import React from 'react'
import './style.scss'
import { useLocation, useNavigate } from 'react-router-dom'
import { routes } from '../../constants/routes'

type HeaderProps = {}

const Header: React.FC<HeaderProps> = () => {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <div className="header-container">
      <div className="header-navigation">
        <img src="" alt="icon" className="header-icon" />
        <div
          className={`navigation-link ${
            location.pathname.includes(routes.spot) || location.pathname === '/newTestSite/'
              ? 'active'
              : ''
          }`}
          onClick={() => navigate(routes.spot)}
        >
          Spot
        </div>
        <div
          className={`navigation-link ${
            location.pathname.includes(routes.trenches) ? 'active' : ''
          }`}
          onClick={() => navigate(routes.trenches)}
        >
          Trenches
        </div>
        <div
          className={`navigation-link ${
            location.pathname.includes(routes.perps) ? 'active' : ''
          }`}
          onClick={() => navigate(routes.perps)}
        >
          Perps
        </div>
        <div className="navigation-info">More</div>
      </div>

      <div className="header-search">Search</div>

      <div className="header-settings">
        <button className="header-portfolio">
          <span>Portfolio</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class=""
          >
            <path
              d="M4.5 11.5L11.5 4.5M11.5 4.5H5.5M11.5 4.5V10.5"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </button>
        <button className="header-setting">
          <span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.71971 1.2926L6.41471 2.9726C6.11846 3.06573 5.83097 3.18635 5.55971 3.32761L4.14971 2.35761L2.33979 4.16753L3.31479 5.57252C3.17292 5.84439 3.05355 6.13003 2.95979 6.42753L1.27979 6.73252V9.29252L2.95979 9.59751C3.05354 9.89564 3.17729 10.18 3.31979 10.4525L2.33979 11.8575L4.14971 13.6674L5.5547 12.6974C5.82719 12.8399 6.11657 12.9587 6.4147 13.0524L6.71969 14.7324H9.27969L9.58468 13.0524C9.88218 12.9587 10.1678 12.8393 10.4397 12.6974L11.8447 13.6674L13.6546 11.8575L12.6796 10.4525C12.8208 10.1813 12.9415 9.89878 13.0346 9.60252L14.7196 9.29252V6.73252L13.0346 6.42753C12.9415 6.1319 12.8252 5.84815 12.6846 5.57753L13.6546 4.16753L11.8447 2.35761L10.4397 3.32761C10.1678 3.18574 9.88218 3.06636 9.58468 2.9726L9.27969 1.2926H6.71971ZM7.9997 4.9726C9.67842 4.9726 11.0397 6.33385 11.0397 8.0126C11.0397 9.69135 9.67846 11.0526 7.9997 11.0526C6.32095 11.0526 4.95971 9.69135 4.95971 8.0126C4.95971 6.33385 6.32095 4.9726 7.9997 4.9726Z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
        </button>
        <button className="header-connect">
          <span>Connect</span>
        </button>
      </div>
    </div>
  )
}

export default Header
