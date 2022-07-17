import React from 'react'
import { Routes, Route} from "react-router-dom";
import { HeroRoutes } from '../heros/routes/HeroRoutes';
import LoginPage from '../pages/LoginPage';

const AppRouter = () => {
  return (
   <>
   <Routes>
   <Route path="login" element={<LoginPage />} />
   <Route path="*" element= { <HeroRoutes/>} />
   </Routes>
   </>
  )
}

export default AppRouter
