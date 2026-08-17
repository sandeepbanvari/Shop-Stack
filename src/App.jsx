import viteLogo from './assets/vite.svg'
// import Loader from './Components/Loader'
import { ScrollToTop } from './Components/ScrollToTop'
import { AppRoutes } from './routes/AppRoutes'
// import { Home } from './pages/Home'
// import { AppRoutes } from './routes/AppRoutes'



export const App = () => {
  return (
    <>
    {/* <Loader /> */}
      <ScrollToTop />
      <AppRoutes />
    </>
  )
}
