import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { toast } from 'react-toastify';

import { Button, Text } from '@mantine/core';
import { openConfirmModal } from '@mantine/modals';
// import { useModals } from '@mantine/modals';
import { modalClasses } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';


const ManageInventories = () => {

  const [perpage, setPerpage] = useState(6);
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [inventories, setInventories] = useState([])
  // const modals = useModals()
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  console.log(location);

const navigate = useNavigate();
console.log(navigate);

  console.log(perpage);
  useEffect(() => {
    
    const getTotalCount = async () => {
      try {
        const getData = await axios.get ('https://polar-sea-52958.herokuapp.com/inventories?count=True');

        // const json = await getData.json();


      const {totalCount} =  getData.data;
      const pageCount = Math.ceil(totalCount / perpage); 
      setTotalPage(pageCount);
      console.log(totalCount);
      console.log(pageCount);
      }
       catch (error) {
        console.log(error);
      }
      
    }

    getTotalCount()

  }, [])
  
  useEffect(() => {
   
    setLoading(true);
    const getInventories = async () => {
      const res = await axios.get (`https://polar-sea-52958.herokuapp.com/inventories?page=${page}&perpage=${perpage}`);

      const { data } = res;
      setLoading(false);
      setInventories(data);

      console.log(res);
      console.log(data);
    }

    getInventories()

  }, [page])
  
   
  const confirmDelete = (product_Id) =>{
    console.log('confirmed');

    // openConfirmModal({
    //   title: 'Please confirm your action',
    //   children: (
    //     <Text size="sm">
    //       This action is so important that you are required to confirm it with a modal. Please click
    //       one of these buttons to proceed.
    //     </Text>
    //   ),
    //   labels: { confirm: 'Confirm', cancel: 'Cancel' },
    //   onCancel: () =>console.log('Cancel') ,
    //   onConfirm: () => console.log('confirm'),
    // });
  
    swal({
      buttons: {
        cancel: true,
        confirm: deleteItem(product_Id),
      },
    });

  }

  const deleteItem = async (product_Id) => {
    const postd = await axios.post(`https://polar-sea-52958.herokuapp.com/delete`, {
      id: product_Id
    });

    const { data} = postd;
    if(data.deletedCount === 1){
      const newInventoryList = inventories.filter(item => item._id !== product_Id)
      setInventories(newInventoryList);
      
    }
    console.log(data);
  }

  // const alert = () => {
  //   return (
  //     <>
  //       <div className='w-full h-full opacity-0  '>
  //         <div className="alert w-5 h-20 mt-4">
  //           <h3 className='text-red-400 '>
  //             Do u really want to delete this?
  //           </h3>
  //           <button className='text-red-400'>
  //             cancel
  //           </button>
  //           <button className='text-red-400' onClick={() => deleteItem(product_Id)}>
  //             okay
  //           </button>
  //         </div>
  //       </div>
  //     </>
  //   )
  // }

  return (
    <>
    <div>
      <table className="min-w-full table-auto">
                <thead className="border-b">
                    <tr className="bg-gray-900 text-white">

                        <th width="100px" scope="col" className="text-sm font-medium px-6 py-4 text-left">
                            Image
                        </th>
                        <th scope="col" className="text-sm font-medium px-6 py-4 text-left">
                            Name - Description
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
                                 <button onClick={() => confirmDelete(item._id)} className="btn border-[1px] border-red-500 py-1 text-red-500 px-5 rounded-full hover:bg-red-500 hover:text-white duration-300" >
                                  
                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M160 400C160 408.8 152.8 416 144 416C135.2 416 128 408.8 128 400V192C128 183.2 135.2 176 144 176C152.8 176 160 183.2 160 192V400zM240 400C240 408.8 232.8 416 224 416C215.2 416 208 408.8 208 400V192C208 183.2 215.2 176 224 176C232.8 176 240 183.2 240 192V400zM320 400C320 408.8 312.8 416 304 416C295.2 416 288 408.8 288 400V192C288 183.2 295.2 176 304 176C312.8 176 320 183.2 320 192V400zM317.5 24.94L354.2 80H424C437.3 80 448 90.75 448 104C448 117.3 437.3 128 424 128H416V432C416 476.2 380.2 512 336 512H112C67.82 512 32 476.2 32 432V128H24C10.75 128 0 117.3 0 104C0 90.75 10.75 80 24 80H93.82L130.5 24.94C140.9 9.357 158.4 0 177.1 0H270.9C289.6 0 307.1 9.358 317.5 24.94H317.5zM151.5 80H296.5L277.5 51.56C276 49.34 273.5 48 270.9 48H177.1C174.5 48 171.1 49.34 170.5 51.56L151.5 80zM80 432C80 449.7 94.33 464 112 464H336C353.7 464 368 449.7 368 432V128H80V432z"/></svg>delete</button>
                                 
                                  {/* <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}

                                <button onClick={()=>navigate(`/edit/${item._id}`)} className="btn border-[1px] border-indigo-500 py-1 text-primary px-5 rounded-full hover:bg-primary hover:text-white duration-300">
                                    {/* <FontAwesomeIcon icon={faEdit} /> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                  </svg>

                                    
                                    </button>
                            </td>

                        </tr>
                    )
                    }
                </tbody>
            </table>
    </div>

    <div>
      
      {
        [...Array(totalPage).keys()].map(x => (
          <button className={`btn py-1 px-3 border-[1px] border-gray-400 rounded-lg mx-1 ${page === x && 'bg-primary text-white'}`} onClick={() => setPage(x) } key={x}>
            {x + 1}
          </button>
        ))
      }
    </div>
      
    </>
  )
}

export default ManageInventories