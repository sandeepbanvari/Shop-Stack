import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";

import { AboutHero }     from "./AboutHero/AboutHero";
import { AboutStory }    from "./AboutStory/AboutStory";
import { AboutValues }   from "./AboutValues/AboutValues";
import { AboutBenefits } from "./AboutBenefits/AboutBenefits";
import { AboutStats }    from "./AboutStats/AboutStats";
import { AboutCTA }      from "./AboutCTA/AboutCTA";

import "./About.css";

export const About = () => {
    return (
        <>
            <Header />

            {/* <main className="about-page"> */}

                <AboutHero />

                <AboutStory />

                <AboutValues />

                <AboutBenefits />

                <AboutStats />

                <AboutCTA />

            {/* </main> */}

            <Footer />
        </>
    );
};

export default About;