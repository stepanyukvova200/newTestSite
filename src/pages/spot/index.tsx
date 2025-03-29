import React from "react";
import './style.scss'
import Header from "../../components/header";
import Background from "../../components/background";
import {useLocation, useNavigate} from "react-router-dom";
import {routes} from "../../constants/routes"
import Instant from "./instant";
import Reccuring from "./recurring";
import Trigger from "./trigger";

const Spot: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <>
            <Background />
            <Header />
            <div className="spot-container">
                <div className="spot-header">
                    <div className={`spot-header-tab ${(location.pathname === routes.spot_instant || location.pathname === '/') ? "active" : ""}`} onClick={() => navigate(routes.spot_instant)}>
                        Instant
                    </div>
                    <div className={`spot-header-tab ${location.pathname === routes.spot_trigger ? "active" : ""}`} onClick={() => navigate(routes.spot_trigger)}>
                        Trigger
                    </div>
                    <div className={`spot-header-tab ${location.pathname === routes.spot_recurring ? "active" : ""}`} onClick={() => navigate(routes.spot_recurring)}>
                        Recurring
                    </div>
                </div>

                {(location.pathname === routes.spot_instant || location.pathname === '/') && (
                    <Instant />
                )}
                {location.pathname === routes.spot_recurring && (
                    <Reccuring />
                )}
                {location.pathname === routes.spot_trigger && (
                    <Trigger />
                )}

            </div>
        </>
    );
};

export default Spot;