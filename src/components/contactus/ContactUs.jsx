import React from 'react'

const ContactUs = () => {
  return (
    <div className="pt-10 pb-20">
        <h1 className="text-center text-2xl md:text-4xl text-primary uppercase font-semibold">
            Contact Us
        </h1>
        <hr className="w-1/4 mt-5 text-center m-auto border-blue-300" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:mx-10 py-5 items-center">

            <div className="contact-img w-4/5 p-12 mx-auto text-center">
                <img className="w-full" src="images/contact.svg" alt="" />
            </div>
            <div className="contact-form">
                <form className="w-full p-12 flex flex-col gap-4">
                    <input type="text" name="name" placeholder="Your Name"  className="border-[1px] border-primary w-full py-2 px-4 rounded-lg"/>
                    <input type="email" name="name" placeholder="Your Email"  className="border-[1px] border-primary w-full py-2 px-4 rounded-lg"/>
                    <textarea type="email" name="name" placeholder="Inquiry"  className="border-[1px] border-primary w-full py-2 px-4 rounded-lg"/>
                    <input type="submit" name="name" value="Submit"  className="border-[1px] border-primary w-full py-2 px-4 rounded-lg cursor-pointer hover:bg-primary hover:text-white duration-300"/>
                </form>
            </div>


   




        </div>
    </div>
  )
}

export default ContactUs