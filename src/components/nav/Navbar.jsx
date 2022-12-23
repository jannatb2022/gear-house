import React, { useEffect } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react'
import { Disclosure } from '@headlessui/react'
import { Link, NavLink } from 'react-router-dom';
import {  onAuthStateChanged , signOut} from "firebase/auth";
import { auth } from '../Config/Config';
import { useState } from 'react';
import UseAuth from '../UseAuth.jsx/UseAuth';

const Navbar = () => {
  
    const [currentus] = UseAuth();
    
    // useEffect(() => {
    
    //   const cuser = onAuthStateChanged(auth, (user) =>{
    //   setCurrentus(user)
      
    //   })
    //   return cuser;

    // }, [])

    // console.log('cuurrentus', currentus);

  const navigation = [
    {
      links: 'Home',
    },

    {
      links: 'Blogs',
    }
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
  

  
  return (
    <>
        <header className="navbar bg-slate-500 z-40 mb-40">
            <div className="container mx-auto flex gap-3 bg-slate-600">
              <div>   
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-content justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                        {
                          !open ? (
                          
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>)
                    
                    :
                     (
                    
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    )
                        }
                      

                        
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 flex flex-col">

                      <div className="  sm:ml-6">
                        <div className="flex space-x-4">  
                            {
                              navigation.map((item) => (
                                
                                  
                                <NavLink
                                    key={item.links}
                                    to={`/${item.links.toLowerCase()}`}
                                    className='text-red-400 hover:bg-gray-700 hover:text-white
          px-3 py-2 rounded-md text-sm font-medium cursor-pointer' >
                                    {item.links}
                                </NavLink>
                                
                                  ))

                                  
                                }
                        </div>  
                         </div>   
                            
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                
      
              </div>
              <div className='flex items-center justify-center'>
                  
              <NavLink className="flex-shrink-0 flex items-center cursor-pointer" as={NavLink} to="/">
                                        <img
                                            className="block h-8 w-auto"
                                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                                            alt="Workflow"
                                        />
                                        <span className=" font-bold ml-3">Gears House</span>

                                    </NavLink>
                  
              </div>
              <div>
              <div className="text-red-400  sm:ml-6">
                                        <div className="flex ">
                                            {navigation.map((item) => (
                                                <NavLink
                                                    key={item.links}
                                                    to={`/${item.links.toLowerCase()}`}
                                                    className=' 
                          px-3 py-2 rounded-md  font-medium cursor-pointer' >
                                                    {item.links}
                                                </NavLink>
                                            ))}
                                        </div>
                                    </div>
              </div>
              <div>
                  {  

                    currentus ?
                       
                        <Menu as="div" className="ml-3 relative">
                                        <div>
                                            <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                                <span className="sr-only">Open user menu</span>
                                                <img
                                                    className="h-8 w-8 rounded-full"
                                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                    alt=""
                                                />
                                            </Menu.Button>
                                        </div>
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                            
                                                            to={'/manage-inventory'}
                                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                        >
                                                            Manage Inventories
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                            to="/my-items"
                                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                        >
                                                            My Items
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                            to="/add-item"
                                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                        >
                                                           Add Item
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                            to="#"
                                                            onClick={()=>signOut(auth)}
                                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                        >
                                                            Sign out ({currentus?.email?.split('@')[0]})
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                            </Menu.Items>
                                        </Transition>                                    </Menu>
                     
                     :                       
                                
                       <div>
                        <NavLink
                                
                                to={`/login`}
                                className={'px-3 py-2 rounded-md text-base font-medium  hidden sm:block'}

                                >
                               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                              </svg>
                        </NavLink> 
                        <NavLink
                                
                                    to={`/registration`}
                                    className={'block px-3 py-2 rounded-md text-base font-medium '}

                                    >
                                    SignUp
                                    </NavLink>    
                      </div>
                      

                    
                  }
                                 
              </div>

              
            </div>
        </header>
    </>
  )
}

export default Navbar