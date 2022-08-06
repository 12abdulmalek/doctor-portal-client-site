import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { loadFromLocalstorage } from '../../../../utils/handleLocalhost';

const PrivateRoute = ({children}) => {
 const  getUserData= loadFromLocalstorage();
//  console.log(getUserData.accessToken);
  const location =  useLocation() 
   if(!getUserData?.accessToken){
     return <Navigate to='/login' state={{from:location}}  />
   }
   return children;
};

export default PrivateRoute;