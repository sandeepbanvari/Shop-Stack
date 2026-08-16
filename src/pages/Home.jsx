// import Categories from "../Components/Categories"
import { Categories } from "../Components/Categories"
import { FeaturedProducts } from "../Components/FeaturedProducts"
import { Footer } from "../Components/Footer"
import { Header } from "../Components/Header"
import { Hero } from "../Components/Hero"
import { Newsletter } from "../Components/Newsletter"
import { WhyChooseUs } from "../Components/WhyChooseUs"

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <Categories/>
            <FeaturedProducts />
            <WhyChooseUs />
            <Newsletter />
            <Footer/>
        </>
    )
}


export default Home;