import FbIcon from "assets/svg/FbIcon";
import Yelp from "assets/svg/Yelp";
import Houzz from "assets/svg/Houzz";
import Google from "assets/svg/Google";
import Instagram from "assets/svg/Instagram";
import Twitter from "assets/svg/Twitter";
import TikTok from "assets/svg/Tiktok";
import Pinterest from "assets/svg/Pinterest";
import React from "react";

function useContainer() {
    const contentStyle = {
        color: '#fff',
        textAlign: 'center',
        background: '#707070',
    };

    const socialIcons = {
        fb: <FbIcon width={25} height={25} fill={'#707070'} className='icon' />,
        yelp: <Yelp width={25} height={25} fill={'#707070'} className='icon' />,
        houzz: <Houzz width={25} height={25} fill={'#707070'} className='icon' />,
        google: <Google width={25} height={25} fill={'#707070'} className='icon' />,
        instagram: <Instagram width={25} height={25} fill={'#707070'} className='icon' />,
        twitter: <Twitter width={25} height={25} fill={'#707070'} className='icon' />,
        tiktok: <TikTok width={25} height={25} fill={'#707070'} className='icon' />,
        pinterest: <Pinterest width={25} height={25} fill={'#707070'} className='icon' />,
    }

    return {
        contentStyle,
        socialIcons,
    }
};

export default useContainer;