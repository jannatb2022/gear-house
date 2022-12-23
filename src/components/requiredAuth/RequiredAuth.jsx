import React from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import UseAuth from '../UseAuth.jsx/UseAuth';
import { Navigate, useLocation } from 'react-router-dom';


const RequiredAuth = ({children}) => {

const [currentus] = UseAuth();
const location = useLocation();

if(!currentus){

    return <Navigate to='/login' state= {{from: location}} replace />;
}
else {
    return children;
}
   
  
}

export default RequiredAuth