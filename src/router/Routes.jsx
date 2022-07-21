import React from 'react'
import { Routes, Route} from "react-router-dom";
import { Home } from '../heros/pages';
import { HeroRoutes } from '../heros/routes/HeroRoutes';
import LoginPage from '../pages/LoginPage';

const AppRouter = () => {
  return (
   <>
   <Routes>
   <Route path="login" element={<LoginPage />} />
   <Route path="/" element={<Home />} />
   <Route path="*" element= { <HeroRoutes/>} />
   </Routes>
   </>
  )
}

export default AppRouter
