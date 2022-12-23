import React from 'react'
import Blogs from '../blogs/Blogs'
import ContactUs from '../contactus/ContactUs'
import InventoryItems from '../inventoryItems/InventoryItems'
import Slider from '../slider/Slider'

const Home = () => {
  return (
    <div>
        <div>
          <Slider />
          </div> 
        <div>
          <InventoryItems />
          </div> 
        <div>
          <Blogs />
          </div> 
        <div>
          <ContactUs />
          </div> 
        
        
        
    </div>
  )
}

export default Home