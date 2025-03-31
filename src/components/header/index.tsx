import React from "react";
import './style.scss'
import {useLocation, useNavigate} from "react-router-dom";
import {routes} from "../../constants/routes";

type HeaderProps = {
};

const Header: React.FC<HeaderProps> = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className="header-container">
            <div className="header-navigation">
                <img src="" alt="icon" className="header-icon" />
                <div className={`navigation-link ${location.pathname.includes(routes.spot) || location.pathname === '/' ? 'active' : ''}`} onClick={() => navigate(routes.spot)}>Spot</div>
                <div className={`navigation-link ${location.pathname.includes(routes.trenches) ? 'active' : ''}`} onClick={() => navigate(routes.trenches)}>Trenches</div>
                <div className={`navigation-link ${location.pathname.includes(routes.perps) ? 'active' : ''}`} onClick={() => navigate(routes.perps)}>Perps</div>
                <div className="navigation-info">More</div>
            </div>

            <div className="header-search">
                Search
            </div>

            <div className="header-settings">
                Настрєчкі
            </div>
        </div>
    );
};

export default Header;