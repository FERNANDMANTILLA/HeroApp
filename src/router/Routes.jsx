import React from 'react'
import { Routes, Route} from "react-router-dom";
import { Home } from '../heros/pages';
import { HeroRoutes } from '../heros/routes/HeroRoutes';
import LoginPage from '../pages/LoginPage';
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';

const AppRouter = () => {
  return (
   <>
   <Routes>
   <Route path="login/*" element={<PublicRouter>
    <LoginPage/>
   </PublicRouter>} />
   {/* <Route path="*" element={<Home />} /> */}
   <Route path="*" element= { 
    <PrivateRouter>
      <HeroRoutes/>
    </PrivateRouter>
   } />
   </Routes>
   </>
  )
}

export default AppRouter
