import { Route, Routes } from 'react-router-dom';
import Blogs from './components/blogs/Blogs';
import ContactUs from './components/contactus/ContactUs';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import InventoryItems from './components/inventoryItems/InventoryItems';
import Login from './components/login/Login';
import ManageInventories from './components/manageInventories/ManageInventories';

import Navbar from './components/nav/Navbar';
import NotFoundPage from './components/notfound/NotFoundPage';
import Register from './components/register/Register';
import Slider from './components/slider/Slider';
import TeamMembers from './components/team-members/TeamMembers';
import UseSingleInventory from './components/useSingleInventory/UseSingleInventory';
import logo from './logo.svg';
import 'react-toastify/dist/ReactToastify.css';
import AddItem from './components/addItem/AddItem';
import RequiredAuth from './components/requiredAuth/RequiredAuth';
import EditItem from './components/editItem/EditItem';
import My_Items from './components/my_items/My_Items';
import Update_Inventory from './components/updateInvenory/Update_Inventory';


function App() {
  return (
    <div>

      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home />}> </Route>
        <Route path='/home' element={<Home />}> </Route>
        <Route path='/blogs' element={<Blogs />}> </Route>
        <Route path='/login' element={<Login />}> </Route>
        <Route path='/registration' element={<Register />}> </Route>

        <Route path ='/inventory/:id' element={<RequiredAuth><Update_Inventory /></RequiredAuth>}></Route>

        <Route path='/manage-inventory' element={<RequiredAuth><ManageInventories /></RequiredAuth> }></Route>

        <Route path='/add-item' element={<RequiredAuth><AddItem /></RequiredAuth>}></Route>

        <Route path='/edit/:id' element={<RequiredAuth ><EditItem /></RequiredAuth>}></Route>

        <Route path='/my-items' element={<RequiredAuth><My_Items /></RequiredAuth>}></Route>
        
        <Route path='/*' element={<NotFoundPage />}></Route>



      </Routes>
      {/* <Slider />
      <InventoryItems /> */}
      {/* <TeamMembers /> */}
      {/* <UseSingleInventory />
      <Blogs /> */}
      {/* <ManageInventories />
      <ContactUs /> */}
      <Footer />
    </div>
  );
}

export default App;
