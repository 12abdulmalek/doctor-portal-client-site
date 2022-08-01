import logo from './logo.svg';
import './App.css';
import Menubar from './pages/Share/MenuItem/Menubar';
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Login from './pages/Share/Users/Login';
import Register from './pages/Share/Users/Register';
import Profiles from './pages/Share/MenuItem/Profiles';
import Home from './pages/Home/Home/Home';
import AddDoctor from './pages/Home/Dashboard/AddDoctor/AddDoctor';
import Services from './pages/Home/Services/Services';
import Service from './pages/Home/Services/Service';
import AuthProvider from './AuthProvider/AuthProvider';
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
             <Route  path="/specialities/:_id" element={<Service/>}/>
             <Route  path="/profile" element={<Profiles/>}/>
          </Routes>

        </BrowserRouter>
        </AuthProvider>
    </div>
  );
}

export default App;
