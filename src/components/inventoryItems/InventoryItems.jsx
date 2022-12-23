import React, { useEffect } from "react";
import { Skeleton } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";




const InventoryItems = () => {

    // const [loading, setLoading] = useState(false);
    // const [inventory, setInventory] = useState([]);
    
    const [item, setItem] = useState([]);
    const [item1, setItem1] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      
        const GetSingleItem = async () => {
            setLoading(true)

           try{
                
                const res2 = await fetch('https://polar-sea-52958.herokuapp.com/inventories?limit=6');
                const res1 = await fetch ('https://jsonplaceholder.typicode.com/albums');

                const res22 = await res2.json();
                const res11 = await res1.json()

                
                console.log(res22);
                console.log(res11)
                setLoading(false)
                setItem(res22)
                setItem1(res11.data)
                // console.log(item);
             
            } 
            
            catch (e){
                console.log(e);
            }
            
        }
        GetSingleItem()
        
      
    }, [])

  
  
    // useEffect(() => {
      
    //    const getInventories = async () => {
    //         setLoading(true);

    //         try {
    //             const response = await  fetch("https://polar-sea-52958.herokuapp.com/inventories?limit=6");

    //             const res = await response.json();
    //             console.log(res);

    //             setLoading(false);
    //             setInventory(res)
    //         } 
            
    //         catch (error) {
    //             console.log(error)
    //         }
            
    //     }
    //     getInventories();
    // }, [])

    const Loadings = () => {
        return (
            <>
            

            {/* <Skeleton height={500} width={800}/>
            <Skeleton height={500} width={800}/>
            <Skeleton height={500} width={800}/> */}
            
          <div className="w-{100rem}">
          <Skeleton height={300} width={300}/>
          </div>
          <div className="w-{100rem}">
              <Skeleton height={300} width={300}/>
          </div>
          <div className="w-{100rem}">
              <Skeleton height={300} width={300}/>
          </div>
          <div className="w-{100rem}">
              <Skeleton height={300} width={300}/>
          </div>
          <div className="w-{100rem}">
              <Skeleton height={300} width={300}/>
          </div>
          <div className="w-{100rem}">
              <Skeleton height={300} width={300}/>
          </div>
        
            </>
        )
    }
    
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
      {
        loading ? <Loadings />
          : 

        item.map(ele => (
          
        

        
          
          <div key={ele._id} className="single-item border-[1px] rounded-md border-primary m-1 lg:mx-10 p-1 hover:shadow-lg duration-300">
                        <div className="item-image overflow-hidden cursor-pointer md:h-[150px] lg:h-[230px]">
                            <img src={ele.image} className="hover:scale-110 duration-300"  alt={ele.name} />


                        </div>
                        <div className="item-details p-4">
                            <div className="item-title uppercase font-bold text-l md:text-xl">
                               {ele.name}
                            </div>
                            <div className="flex justify-between my-2 text-sm lg:text-base">
                                <div className="price font-semibold">Rate: ${ele.price}</div>
                                <div className="quantity font-semibold">Quantity: {ele.quantity}</div>
                            </div>
                            <div className="description text-sm text-gray-500">
                                {ele.description.length > 80 ? ele.description.slice(0,80) : ele.description}...

                            </div>
                            <p className="suplier font-medium pt-2 text-sm lg:text-md">Supplier: {ele.supllier_name}</p>
                            <Link to={`/inventory/${item._id}`} className="update btn bg-primary text-white py-1 px-6 rounded-full inline-block text-center justify-center align-center mx-auto mt-5">Update</Link>

                        </div>


                    </div>
        ))
      }
    </div>

    </>
  )
}

export default InventoryItems