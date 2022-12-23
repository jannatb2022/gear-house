import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { auth } from '../Config/Config';

const UseAuth = () => {
  
    const [currentus, setCurrentus] = useState({}) ;
    useEffect(() => {
    
        const cuser = onAuthStateChanged(auth, (user) =>{
        setCurrentus(user)
        
        })
        return cuser;
  
      }, [])
  
      console.log('cuurrentus', currentus);

  return [currentus];
}

export default UseAuth