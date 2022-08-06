import logo from './logo.svg';
import './App.css';
import Menubar from './pages/Share/MenuItem/Menubar';
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Login from './pages/Share/Users/Login';
import Register from './pages/Share/Users/Register';
import Home from './pages/Home/Home/Home';
import AddDoctor from './pages/Home/Dashboard/AddDoctor/AddDoctor';
import Services from './pages/Home/Services/Services';
import Service from './pages/Home/Services/Service';
import AuthProvider from './AuthProvider/AuthProvider';
import { useState } from 'react';
import Appointment from './pages/Home/AppointMent/Appointment';
import PrivateRoute from './pages/Share/Users/PrivateRoute/PrivateRoute';
import UpdateProfile from './pages/Home/Profile/UpdateProfile';
import Profile from './pages/Home/Profile/Profile';

function App() {
  
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
        <Menubar></Menubar>
    
          <Routes>
             {/* <Route  path="/" element={}/> */}
             <Route  path="/" element={<Home/>}/>
             <Route  path="/login" element={<Login/>}/>
             <Route  path="/register" element={<Register/>}/>
             <Route  path="/specialities" element={<Services/>}/>
             <Route  path="/addDoctor" element={<AddDoctor/>}/>
             <Route  path="/appointment" element={<Appointment/>}/>
             <Route  path="/profile/update/:id" element={   <UpdateProfile></UpdateProfile>}/>
             <Route  path="/profile/:id" element={   <Profile></Profile>}/>
             <Route  path="/specialities/:_id" element={<PrivateRoute>
              <Service/>
             </PrivateRoute>}/>
            
          </Routes>

        </BrowserRouter>
        </AuthProvider>
    </div>
  );
}

export default App;
