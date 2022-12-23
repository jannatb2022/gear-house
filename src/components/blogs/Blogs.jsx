import React, { useState } from 'react'
import { useEffect } from 'react';
import LoadingSpinner from '../loadingSpinner/LoadingSpinner';
import parse from 'html-react-parser';

const Blogs = ({limit}) => {

    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const Blog = async () => {
            setLoading(true)
            try {
                const res = await fetch ('https://polar-sea-52958.herokuapp.com/blogs/')

                const resd = await res.json()
                console.log(resd);

                if (limit) {
                    setBlogs(resd.slice(0, limit))
                }
                else (
                    setBlogs(resd)
                )
            }
            catch (error) {
                console.log(error)
            }

            setLoading(false)
        }

        Blog()

      
    }, [])

    if(loading) {
        return <LoadingSpinner />
    }

    const blogImgStyle = {
       
            minHeight: "163px"
        
    }
    
  return (
    <>
       <div className="pt-10 pb-20">
            <h1 className="text-center text-2xl md:text-4xl text-primary uppercase font-semibold">
                Recent Blogs
            </h1>
            <hr className="w-1/4 mt-5 text-center m-auto border-blue-300" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:mx-10 py-5">


        {
            blogs.map(blog => 
                
                <div key={blog._id} className="blog-grid border-[1px] rounded-md bg-white mx-10 p-1 hover:shadow-lg duration-300">
                    <div className="blog-image overflow-hidden cursor-pointer m-4 rounded-">
                        <img style={blogImgStyle} className="hover:scale-110 duration-300" src={blog.image} alt="" />


                    </div>
                    <div className="item-details px-4">
                        <div className="blog-title uppercase font-bold text-l md:text-xl">
                            {blog.title}
                        </div>

                        <div className="description text-sm text-gray-500">
                            {blog.description.substring(0, 70)}...

                        </div>

                        <div to={`/blog/${blog._id}`} className="update btn bg-primary text-white py-1 px-6 rounded-full inline-block text-center justify-center align-center mx-auto my-5">Read More</div>

                    </div>


                </div>

            )
        }




            </div>
        </div> 
    </>
  )
}

export default Blogs