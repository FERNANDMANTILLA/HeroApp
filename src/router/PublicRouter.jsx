import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../auth/context/AuthContext';

export const PublicRouter = ({children}) => {

  const {isAuthenticated} = useContext(AuthContext);
  
  const lastLocation = localStorage.getItem('lastLocation');

  return (!isAuthenticated) ? children: <Navigate to={lastLocation} /> ; 
}
