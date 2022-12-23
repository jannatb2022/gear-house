import axios from 'axios';
import React from 'react'
import { Link, useParams } from 'react-router-dom';
import UseSingleInventory from '../useSingleInventory/UseSingleInventory'

const Update_Inventory = () => {

    const [item, setItem, loading] = UseSingleInventory(id);
    const { id } = useParams();

    const makeDelivered = async (item_id) => {
        if(item.quantity > 0){
            try {
                const res = await axios.get(`https://polar-sea-52958.herokuapp.com/delivered/${item_id}`);

                const newItem = {...item, quantity : item.quantity - 1}
                setItem(newItem)
                console.log(newItem);
            } 
            catch (error) {
                console.log(error);
            }
        }
        else {
            alert('You dont have enough to deliver. Please update stock')
            return
        }
    }


    const updateQuantity = async (e) => {

        e.preventDefault();

        try {
            const qty = parseInt(e.target.qty.value) + parseInt(item.quantity);

            const res = await axios.post(`https://polar-sea-52958.herokuapp.com/update/${item._id}`, { qty });

            const newitem = {...item, quantity: qty}
            setItem(newitem)
            e.target.reset();
            alert('updated')
        }
         catch (e) {
            console.log(e);
        }
        

    }

  return (
    <div className="w-full px-5 pb-20 md:px-10">

            <div className="grid grid-cols md:grid-cols-2 gap-5">
                <div className="p-2 md:p-4">
                    <img src={item.image} className="w-full border-[1px] border-gray-200 p-1 md:p-10 shadow-md" alt="" />
                </div>

                <div className="p-2 md:p-4 md:mt-5">
                    <h1 className="text-xl md:text-3xl mb-4">{item.name}</h1>

                    <p className="text-xl">Price: ${item.price}</p>
                    <p className="text-xl">Quantity: {item.quantity}</p>
                    <p className="text-xl">Supplier Name: {item.supllier_name}</p>

                    <p className="text-md my-2">{item.description}</p>



                    <div>
                        {item.quantity > 0 ? 
                        
                        <button className="btn p-2 px-6 rounded-full bg-primary hover:bg-gray-900 duration-200 text-white" onClick={() => makeDelivered(item._id)}>Delivered</button>
                        :
                        <button className="btn p-2 px-6 rounded-full bg-red-600 text-white">Stock Out</button>

                        }


                        <form onSubmit={updateQuantity} className="form mt-5 flex justify-center flex-col items-center gap-4">
                            <label htmlFor="quantity">Update Quantity</label>

                            <input className="py-2 px-6 border-none outline-none bg-gray-200 rounded-full" type="number" name="qty" id="" required />
                            <input type="submit" className="btn p-2 px-6 rounded-full font-bold border-2 border-primary text-primary cursor-pointer hover:bg-primary hover:text-white duration-300" value="Update" />

                        </form>

                        <div className="flex justify-center items-center">

                            <p className="my-2 mx-2">Or</p>

                        </div>
                        <Link className="block w-3/4 text-center md:w-1/3 btn bg-gradient-to-r from-cyan-500 to-blue-500 py-2 px-6 mx-auto rounded-full text-white" to={'/manage-inventory'}>Manage Inventories</Link>

                    </div>



                </div>
            </div>


        </div>
  )
}

export default Update_Inventory