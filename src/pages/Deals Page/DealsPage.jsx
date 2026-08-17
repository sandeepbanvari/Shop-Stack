import { Footer } from "../../Components/Footer"
import { Header } from "../../Components/Header"
import { DealCoupons } from "./Deal Coupons/DealCoupons"
import { DealsCTA } from "./Deals CTA/DealsCTA"
import { DealsHero } from "./Deals Hero/DealsHero"
import { MegaDeal } from "./Mega Deal/MegaDeal"

export const DealsPage = () => {
    return(
        <>
        <Header />
        <DealsHero />
        <MegaDeal />
        <DealCoupons />
        <DealsCTA />
        <Footer />
        </>
    )
}