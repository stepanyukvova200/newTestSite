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
        <div className="navigation-link header-logo">
          <img src={`${process.env.PUBLIC_URL}/jupiter-logo.webp`} alt="icon" className="header-icon" />
          <div className="logo-text">Jup.ag</div>
        </div>
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
          onClick={() => {window.location.href = 'https://jup.ag/trenches?tab=trending';}}
        >
          Trenches
        </div>
        <div
          className={`navigation-link ${
            location.pathname.includes(routes.perps) ? 'active' : ''
          }`}
          onClick={() => {window.location.href = 'https://jup.ag/perps';}}
        >
          Perps
        </div>
        <div className="navigation-info">More</div>
      </div>

      <div className="header-search">
        <svg className="icon-search" width="20" height="16" viewBox="0 0 18 18"
             fill="rgba(232,249,255,.5)" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M7.30327 14.6058C8.75327 14.6074 10.1705 14.1746 11.3729 13.3637L15.5971 17.5871C16.1463 18.1371 17.0377 18.1371 17.5877 17.5871C18.1377 17.0371 18.1377 16.1457 17.5877 15.5964L13.3643 11.3722C14.5823 9.55661 14.9229 7.28943 14.2909 5.19563C13.6596 3.10183 12.1229 1.40183 10.1033 0.56283C8.08365 -0.276231 5.79385 -0.16607 3.86505 0.86283C1.93537 1.89251 0.569053 3.73243 0.140853 5.87683C-0.286487 8.02143 0.269759 10.2448 1.65725 11.9354C3.04397 13.6261 5.11665 14.6064 7.30325 14.6058H7.30327ZM7.30327 1.68943C8.79233 1.68865 10.2197 2.28005 11.2729 3.33319C12.3252 4.38631 12.9166 5.81359 12.9166 7.30279C12.9166 8.79199 12.3252 10.2192 11.2729 11.2724C10.2198 12.3247 8.79247 12.9162 7.30327 12.9162C5.81407 12.9162 4.38687 12.3247 3.33367 11.2724C2.28133 10.2193 1.68913 8.79199 1.68991 7.30279C1.69148 5.81451 2.28287 4.38719 3.33523 3.33479C4.38759 2.28239 5.81483 1.69103 7.30323 1.68947L7.30327 1.68943Z"
              fill="rgba(232,249,255,.5)">
          </path>
        </svg>
        <div className="search-text">
          Search token or address
        </div>
        <div className="search-slash">/</div>
      </div>

      <div className="header-settings">
        <button className="header-portfolio" onClick={() => {window.location.href = 'https://portfolio.jup.ag/';}}>
          <span>Portfolio</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
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
