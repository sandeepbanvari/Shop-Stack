import { Route, Routes } from "react-router-dom"
// import { About } from "../pages/About"
import { Contact } from "../pages/Contact"
// import { Deals } from "../pages/Deals"
// import { Home } from "../pages/Home"
import { Products } from "../pages/Products"
import { Signin } from "../pages/Signin"
import { SinglePageProduct } from "../Features/ProductsData/SinglePageProduct"
import { Signup } from "../pages/Signup"
import { UserData } from "../pages/UserData"
import { UserList } from "../pages/UserList"
import React, { Suspense } from "react"
import Loader from "../Components/Loader"
import { DealsPage } from "../pages/Deals Page/DealsPage"


let Home  = React.lazy(() => import('../pages/Home' ))
let About = React.lazy(() => import('../pages/About'))


export const AppRoutes = () => {

    const routeData = [
        { path: '/', element: <Home /> },
        { path: '/products', element: <Products /> },
        { path: '/products/:id', element: <SinglePageProduct /> },
        // { path: '/deals', element: <Deals /> },
        { path: '/about', element: <About /> },
        { path: '/contact', element: <Contact /> },
        { path: '/signin', element: <Signin /> },
        { path: '/signup', element: <Signup /> },
        { path: '/userdata', element: <UserData /> },
        { path: '/userlist', element: <UserList /> },
        { path: '/deals', element: <DealsPage /> },
    ]
    return (
        <>
            <Suspense fallback={<center>....loader</center>}>

                <Routes>
                    {
                        routeData.map((x) => (
                            <Route
                                path={x.path}
                                element={x.element}
                            />
                        ))
                    }
                </Routes>
            </Suspense>

        </>
    )
}