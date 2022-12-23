import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';


const UseSingleInventory = (id) => {

    const [item, setItem] = useState([]);
    
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      
        const GetSingleItem = async () => {
            setLoading(true)

           try{
                
                const res = await axios.get(`https://polar-sea-52958.herokuapp.com/inventory/${id}`);
                                                                              
                setLoading(false)
                setItem(res.data)
                // console.log(item);
             
            } 
            
            catch (e){
                console.log(e);
            }
            
        }
        GetSingleItem()
        
      
    }, [])

    // useEffect(() => {
    //     (async function() {
    //         try {
    //             const response = await fetch(
    //                 `https://jsonplaceholder.typicode.com/users`
    //             );
    //             const json = await response.json();
    //             setItem(json.data);
    //             console.log(json);
                
    //         } catch (e) {
    //             console.error(e);
    //         }
    //     })();
    // }, []);
    
    
   return [item, setItem, loading]
  
  
}

export  default UseSingleInventory