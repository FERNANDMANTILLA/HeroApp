import React from 'react'
import { useContext } from 'react'
import { Navigate, useLocation} from 'react-router-dom';
import { AuthContext } from '../auth/context/AuthContext'

export const PrivateRouter = ({children}) => {

  const {isAuthenticated} = useContext(AuthContext);

  const location = useLocation();

  localStorage.setItem('lastLocation', location.pathname+location.search);

  return (isAuthenticated)
    ? children : 
    <Navigate to="login"/>
  
}
