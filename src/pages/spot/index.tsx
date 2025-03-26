import React from "react";
import './style.scss'
import Header from "../../components/header";
import Background from "../../components/background";

const Spot: React.FC = () => {
    return (
        <>
            <Background />
            <Header />
            <div className="spot-container">
                <div className="spot-header">
                    <div className="spot-header-tab">
                        Instant
                    </div>
                    <div className="spot-header-tab">
                        Trigger
                    </div>
                    <div className="spot-header-tab">
                        Recurring
                    </div>
                </div>
            </div>
        </>
    );
};

export default Spot;