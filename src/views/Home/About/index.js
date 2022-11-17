import React from "react";
import AboutInfoCard from "views/shared/AboutInfoCard";
import ExperiencedTeam from "assets/svg/ExperiencedTeam";
import FinancialOptions from "assets/svg/FinancialOptions";
import LicensedAndBonde from "assets/svg/LicensedAndBonde";
import "./style.scss";

const About = () => {

    return (
        <div className="about">
            <div className="content">
                <div className='cards'>
                    <AboutInfoCard
                        icon={<ExperiencedTeam fill="#cda251" width={70} height={64} />}
                        title="Experienced Team"
                        text="Experienced and dedicated professionals available to assist you at any moment"
                    />
                    <AboutInfoCard
                        icon={<FinancialOptions fill="#cda251" width={70} height={64} />}
                        title="Financing Options"
                        text="A variety of financing options to meet your budget capacity"
                    />
                    <AboutInfoCard
                        icon={<LicensedAndBonde fill="#cda251" width={70} height={64} />}
                        title="Licensed and Bonded"
                        text="Licensed to perform our operations and bonded for professional protection"
                    />
                </div>
            </div>
        </div>
    )
}

export default About;