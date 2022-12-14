import React from "react";
import Roofing from "assets/svg/Roofing";
import Plumbing from "assets/svg/Plumbing";
import BathRoom from "assets/svg/BathRoom";
import Kitchen from "assets/svg/Kitchen";

function useContainer() {

    const typesIcons = [
        {
            name: "ROOFING",
            icon: <Roofing width={100} height={70} fill="#AF7822" className='icon' />,
        },
        {
            name: "PLUMBING",
            icon: <Plumbing width={100} height={70} fill="#AF7822" className='icon' />,
        },
        {
            name: "BATHROOM",
            icon: <BathRoom width={100} height={70} fill="#AF7822" className='icon' />,
        },
        {
            name: "KITCHEN",
            icon: <Kitchen width={100} height={70} fill="#AF7822" className='icon' />,
        },
    ];

    return {
        typesIcons,
    }
}

export default useContainer;