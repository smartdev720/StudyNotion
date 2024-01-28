import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/common/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Error from "./pages/Error";
import ForgotPassword from "./pages/ForgotPassword";
import OpenRoute from "./components/core/Auth/OpenRoute";
import UpdatePassword from "./pages/UpdatePassword";
import VerifyEmail from "./pages/VerifyEmail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import MyProfile from "./components/core/Dashboard/MyProfile";

function App() {

  



  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">

      <Navbar />

      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/login" element={<OpenRoute> <Login/> </OpenRoute> } />
        <Route path="/signup" element={<OpenRoute> <Signup /> </OpenRoute> } />
        <Route path="/forgot-password" element={<OpenRoute> <ForgotPassword /> </OpenRoute> } />
        <Route path="/update-password/:id" element={<UpdatePassword/>} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
        
        {/* outlet wala route */}
        <Route path="/dashboard/my-profile" element={<MyProfile/>} />

      </Routes>
    </div>
  );
}

export default App;
