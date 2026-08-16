import viteLogo from './assets/vite.svg'
import { ScrollToTop } from './Components/ScrollToTop'
import { AppRoutes } from './routes/AppRoutes'
// import { Home } from './pages/Home'
// import { AppRoutes } from './routes/AppRoutes'



export const App = () => {
  return (
    <>
      <ScrollToTop />
      <AppRoutes />
    </>
  )
}
