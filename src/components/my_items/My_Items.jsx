import { async } from '@firebase/util';
import axios from 'axios';
import { signOut } from 'firebase/auth';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../Config/Config';
import UseAuth from '../UseAuth.jsx/UseAuth'
import Private_axios from '../axiosConfig/Private_axios';


const My_Items = () => {

        const [currentus] = UseAuth();
        const [page, setPage] = useState(0);
        const [perpage, setPerpage] = useState(8);
        const [totalPage, setTotalPage] = useState(0);
        const [inventories, setInventories] = useState([]);
        const [loading, setLoading] = useState(false);

        useEffect(() => {
          
            const GetTotalcount = async () => {
                const res = await Private_axios.post(`https://polar-sea-52958.herokuapp.com/my-inventories`, {email: currentus?.email});

                const totalCount = res.data.length;
                console.log(totalCount);

                const pageCount = Math.ceil(totalCount / perpage);
                console.log(pageCount);

                setTotalPage(pageCount);

            }
            GetTotalcount()
        }, [])
        
        useEffect(() => {
            setLoading(true);
            const getInventories = async () =>{

                try {
                    const res = await Private_axios.post(`https://polar-sea-52958.herokuapp.com/my-inventories?page=${page}&perpage=${perpage}`, {email: currentus?.email});
                    const { data } = res;
                    console.log(data);
                    setInventories(data)
                }
                 catch (e) {
                    console.log(e);
                    // if(e.response.status === 401 || e.response.status === 403){
                    //     signOut(auth);
                    //     Navigate('/login')
                    // }
                }
                setLoading(false)
            }
            getInventories()
        }, [])
        

  return (
    <div>
        <div>
        <table className="min-w-full table-auto">
                <thead className="border-b">
                    <tr className="bg-gray-900 text-white">

                        <th width="100px" scope="col" className="text-sm font-medium px-6 py-4 text-left">
                            Image
                        </th>
                        <th scope="col" className="text-sm font-medium px-6 py-4 text-left">
                            Name
                        </th>
                        <th scope="col" className="text-sm font-medium px-6 py-4 text-left">
                            Quantity
                        </th>
                        <th scope="col" className="text-sm font-medium px-6 py-4 text-left">
                            Price
                        </th>
                        <th scope="col" className="text-sm font-medium px-6 py-4 text-left">
                            Supplier
                        </th>
                        <th scope="col" className="text-sm font-medium px-6 py-4 text-left">
                            Delete / Edit
                        </th>

                    </tr>
                </thead>
                <tbody>
                    {inventories.map((item) =>
                        <tr key={item._id} className="border-b">

                            <td className="text-sm text-gray-900 font-light px-6 py-4">
                                <div className="flex rounded-full justify center items-center border-2 w-[70px]">
                                    <img className="rounded-full object-cover" src={item.image} alt="" />
                                </div>
                            </td>
                            <td className="text-gray-900 font-light px-6 py-4">
                                <span className="font-extrabold"> {item.name}</span>
                                <br></br>
                                <p className="text-sm text-gray-500">{item.description.substring(0, 60)}.....</p>
                                <p className="text-sm font-bold">Added By: {item?.user_email}</p>
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4">
                                {item.quantity}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4">
                                ${item.price}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4">
                                {item.supllier_name}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 flex gap-2">
                                {/* <button onClick={() => confirmDelete(item._id)} className="btn border-[1px] border-red-500 py-1 text-red-500 px-5 rounded-full hover:bg-red-500 hover:text-white duration-300"><FontAwesomeIcon icon={faTrash} /></button>
                                <button onClick={() => navigate(`/edit/${item._id}`)} className="btn border-[1px] border-indigo-500 py-1 text-primary px-5 rounded-full hover:bg-primary hover:text-white duration-300">
                                    <FontAwesomeIcon icon={faEdit} /></button> */}
                            </td>

                        </tr>
                    )
                    }

                </tbody>

            </table>
        </div>

    </div>
  )
}

export default My_Items