import React from "react";
import './style.scss'
import Header from "../../components/header";
import Background from "../../components/background";

const Trenches: React.FC = () => {
    return (
        <>
            <Background />
            <Header />
            <div>Trenches</div>
        </>
    );
};

export default Trenches;