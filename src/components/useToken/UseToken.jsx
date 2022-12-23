
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const UseToken = (user) => {

    const [token, setToken] = useState();

    useEffect(() => {
      const GetToken = async () => {  

        const email = user?.email;
        if(email){
            try {
                const {data} =await axios.post(`https://polar-sea-52958.herokuapp.com/get-token`, {email});

                console.log(data);
                const { accessToken } = data;
                console.log(accessToken);
                localStorage.setItem('accessToken', accessToken);
                setToken(accessToken)
            }
             catch (e) {
                console.log(e);
            }
        }

      }
        
      GetToken()
    }, [user])
    

  return [token]
}

export default UseToken