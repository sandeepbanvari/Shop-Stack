import { Footer } from "../Components/Footer"
import { Header } from "../Components/Header"
import { ProductsData } from "../Features/ProductsData/ProductsData"
// import { ProductsData } from "../Features/ProductsData/ProductsData"

export const Products = () => {
    return (
        <>
            <Header />
            <ProductsData/>
            <Footer />
        </>
    )
}