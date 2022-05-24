import React from "react";
import Home from "./HomeComponent";
import About from "./AboutComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Contact from "./ContactComponent";
import Createacc from "./CreateaccComponent";
import Info from "./InfoComponent";
import Login from "./LoginComponent";
import Mycredits from "./MycreditsComponent";
import Myprofile from "./MyprofileComponent";
import Repaycredit from "./RepaycreditComponent";
import Takecredit from "./TakecreditComponent";
import Updateprofile from "./UpdateprofileComponent";

import {Route, Routes} from "react-router-dom";

function Main() {

  return (
      <React.Fragment>
          <Header/>
          <Routes>
              <Route exact path='/' element={<Home/>}/>
              <Route exact path='/about' element={<About/>}/>
              <Route exact path='/contact' element={<Contact/>}/>
              <Route exact path='/createacc' element={<Createacc/>}/>
              <Route exact path='/info' element={<Info/>}/>
              <Route exact path='/login' element={<Login/>}/>
              <Route exact path='/mycredits' element={<Mycredits/>}/>
              <Route exact path='/myprofile' element={<Myprofile/>}/>
              <Route exact path='/repaycredit' element={<Repaycredit/>}/>
              <Route exact path='/takecredit' element={<Takecredit/>}/>
              <Route exact path='/updateprofile' element={<Updateprofile/>}/>
          </Routes>
          <Footer/>
      </React.Fragment>
  );
}

export default Main;
