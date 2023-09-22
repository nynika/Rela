import logo from './logo.svg';
import './App.css';
import { Home } from './pages/Home';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

import { Navigation } from './pages/Navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Pincode from './pages/pincode/Pincode';


import Uom from './pages/UOM/UOM';
import Adduom from './pages/UOM/AddUOM';
import Edituom from './pages/UOM/EditUOM';



import Item from './pages/Item/Item';
import AddItemModal from './pages/Item/AddItemModal';
import EditItemModal from './pages/Item/EditItemModal';


import Vendor1Evl from './pages/Vendor_evl/Vendor1Evl';
import Vendor2Evl from './pages/Vendor_evl/Vendor2Evl';
import Vendor3Evl from './pages/Vendor_evl/Vendor3Evl';
import Vendor4Evl from './pages/Vendor_evl/Vendor4Evl';
import Vendor5Evl from './pages/Vendor_evl/Vendor5Evl';
import Vendor6Evl from './pages/Vendor_evl/Vendor6Evl';
import Vendor7Evl from './pages/Vendor_evl/Vendor7Evl';
import Vendor8Evl from './pages/Vendor_evl/Vendor8Evl';



import Itemtrans from './pages/Item_trans/Itemtrans';
import AddItemtrans from './pages/Item_trans/AddItemtrans';
import EditItemtrans from './pages/Item_trans/EditItemtrans';






function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid" style={{ overflow: "hidden", margin: "auto" }}>

        <div className='row'>
          <div className='col-sm-12'>
            <div className='app_title'>
              <img className='App-logo' src='jkrenterprise.png' />
              <h1 className='head'>Capital Goods Management</h1>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-12' >
            <div className='app_nav'>
              <Navbar >
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Nav className="nav">
                  <NavLink className="app_nav_navlink_home " to="/">
                    Home
                  </NavLink>
                  <NavLink className="app_nav_navlink_logout " to="/">
                    Logout
                  </NavLink>
                </Nav>
              </Navbar>
            </div>
          </div>
        </div>


        <div className='row'>
          <div className='col-2 ' style={{ backgroundcolor: '#61dafb' }}  >
            <div className='app_side_nav'>
              <details style={{ marginTop: "20px" }}>
                <summary className="app_side_nav_summary">
                  Login
                </summary>

              </details>
              <details style={{ marginTop: "20px" }}>
                <summary className="app_side_nav_summary">
                  Master
                </summary>
                <Navigation />
              </details>

            </div>
          </div>
          <div className='col-10 padding-0'>
            <div className='app_body'>

              <Routes>

                <Route exact path="/" element={<Home />} />



                <Route exact path="/Item" element={<Item />} />
                <Route exact path="/AddItemModal" element={<AddItemModal />} />
                <Route exact path="/EditItemModal/:id" element={<EditItemModal />} />



                <Route exact path="/vendor1Evl" element={<Vendor1Evl />} />
                <Route exact path="/vendor1Evl/:id" element={<Vendor1Evl />} />
                <Route exact path="/vendor2Evl/:id" element={<Vendor2Evl />} />
                <Route exact path="/vendor3Evl/:id" element={<Vendor3Evl />} />
                <Route exact path="/vendor4Evl/:id" element={<Vendor4Evl />} />
                <Route exact path="/vendor5Evl/:id" element={<Vendor5Evl />} />
                <Route exact path="/vendor6Evl/:id" element={<Vendor6Evl />} />
                <Route exact path="/vendor7Evl/:id" element={<Vendor7Evl />} />
                <Route exact path="/vendor8Evl/:id" element={<Vendor8Evl />} />

 
                <Route exact path="/Pincode" element={<Pincode />} />

 
                <Route exact path="/itemtrans" element={<Itemtrans />} />
                <Route exact path="/additemtrans" element={<AddItemtrans />} />
                <Route exact path="/edititemtrans/:id" element={<EditItemtrans />} />
      


                <Route exact path="/uom" element={<Uom />} />
                <Route exact path="/adduom" element={<Adduom />} />
                <Route exact path="/edituom/:id" element={<Edituom />} />

              </Routes>

            </div>
          </div>
        </div>
      </div>

    </BrowserRouter>

  );
}

export default App;









