import React from "react";
import Header from "views/shared/Header";
import Estimate from "views/Home/Estimate";
import Introduction from "views/Home/Introduction";
import Types from "views/Home/Types";
import Reviews from "views/Home/Reviews";
import About from "views/Home/About";
import Footer from "views/shared/Footer";
import "./style.scss";

const Home = () => (
    <div className="home">
        <Header />
        <Estimate />
        <Introduction />
        {/*<Types />*/}
        {/*<Reviews />*/}
        {/*<About />*/}
        {/*<Footer />*/}
    </div>
);

export default Home;