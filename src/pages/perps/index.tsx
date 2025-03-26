import React from "react";
import './style.scss'
import Header from "../../components/header";
import Background from "../../components/background";

type PerpsProps = {
};

const Perps: React.FC<PerpsProps> = ({}) => {
    return (
        <>
            <Background />
            <Header />
        </>
    );
};

export default Perps;