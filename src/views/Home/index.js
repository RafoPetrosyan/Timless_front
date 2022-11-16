import React from "react";
import Header from "views/shared/Header";
import Estimate from "views/Home/Estimate";
import Introduction from "views/Home/Introduction";
import Types from "views/Home/Types";
import Reviews from "views/Home/Reviews";

const Home = () => (
    <div>
        <Header />
        <Estimate />
        <Introduction />
        <Types />
        <Reviews />
    </div>
);

export default Home;