import { Header }           from "../../Components/Header";
import { Footer }           from "../../Components/Footer";
import { Hero }             from "./Hero/Hero";
import { Categories }       from "./Categories/Categories";
import { FeaturedProducts } from "./FeaturedProducts/FeaturedProducts";
import { WhyChooseUs }      from "./WhyChooseUs/WhyChooseUs";
import { Newsletter }       from "./Newsletter/Newsletter";

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <Categories />
            <FeaturedProducts />
            <WhyChooseUs />
            <Newsletter />
            <Footer />
        </>
    )
}

export default Home;