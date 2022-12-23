import { async } from '@firebase/util';
import axios from 'axios';
import React from 'react'
import { Link, useParams } from 'react-router-dom';
import UseSingleInventory from '../useSingleInventory/UseSingleInventory';

const EditItem = () => {

    const {id} = useParams();

    const [item, setItem, loading] = UseSingleInventory(id)
    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        const newtem = {...item};
        newtem[key] = value;
        setItem(newtem);
        
    }

    const handleUpdate = async(e) => {
        e.preventDefault();

        const data = {...item}

        try {
            const res = await axios.put('https://polar-sea-52958.herokuapp.com/update/', data);
            if(res.data.modifiedCount === 1){
                console.log('updatedddddddd');
            }
        } 
        catch (error) {
            console.log(e);
        }

    }

  return (
    <>
        <div className="py-5 mx-2">
                <div className="card max-w-md mx-auto border-2 shadow-md p-2 md:p-5">

                    <h2 className="text-center text-3xl mb-4">Edit and Update</h2>

                    <form onSubmit={handleUpdate} className="form w-full flex flex-col gap-2">
                        <div className="input-item my-2 mx-1">

                            <input onChange={handleChange} className="w-full p-2 border-2  outline-none rounded-md focus:border-primary" type="text" value={item.name} name="name" placeholder="Name" required />
                        </div>
                        <div className="input-item my-2 mx-1">

                            <input onChange={handleChange} className="w-full p-2 border-2  outline-none rounded-md focus:border-primary" type="number" name="price" value={item.price} placeholder="Price" required />
                        </div>
                        <div className="input-item my-2 mx-1">

                            <input onChange={handleChange} className="w-full p-2 border-2  outline-none rounded-md focus:border-primary" type="number" name="quantity" value={item.quantity} placeholder="Quantity" required />
                        </div>
                        <div className="input-item my-2 mx-1">

                            <input onChange={handleChange} className="w-full p-2 border-2  outline-none rounded-md focus:border-primary" type="text" name="supllier_name" value={item.supllier_name} placeholder="Supplier Name" required />
                        </div>
                        <div className="input-item my-2 mx-1">

                            <input onChange={handleChange} className="w-full p-2 border-2  outline-none rounded-md focus:border-primary" type="text" value={item.image} name="image" placeholder="Image Link" required />
                        </div>
                        <div className="input-item my-2 mx-1">

                            <textarea onChange={handleChange} className="w-full p-2 border-2  outline-none rounded-md focus:border-primary" type="text" value={item.description} name="description" placeholder="Product descrription" required />
                        </div>

                        <input type="submit" className="cursor-pointer btn w-full p-2 border-2 outline-none bg-primary text-white" value="Update" />
                    </form>

                </div>

                <p className="text-center py-5 ">
                    <Link className="text-primary" to="/manage-inventory">Back To Manage Inventory Page</Link>
                </p>
        </div>
    </>
       

  )
}

export default EditItem