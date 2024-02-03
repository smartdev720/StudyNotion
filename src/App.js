import { Route, Routes, useNavigate } from "react-router-dom";
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
import Settings from "./components/core/Dashboard/Settings/Setting";
import EnrolledCourses from "./components/core/Dashboard/Settings/EnrolledCourses";
import { useDispatch, useSelector } from "react-redux";
import { ACCOUNT_TYPE } from "./utils/constants";
import Cart from "./components/core/Dashboard/Cart/Cart";
import AddCourse from "./components/core/Dashboard/AddCourse/AddCourse";
import CoursesTable from "./components/core/Dashboard/Instructor Courses/CourseTable";
import MyCourses from "./components/core/Dashboard/AddCourse/MyCourse";
import EditCourse from "./components/core/Dashboard/EditCourse/EditCourse";

function App() {

  const dispatch = useDispatch();
  const navigate = useNavigate() ;

  const {user} = useSelector((state)=> state.profile);


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
        
        {/* REACT OUTLET FOR ROUTES */}
        <Route element={<Dashboard />}>
            
            {/* outlet wala route */}
            <Route path="/dashboard/my-profile" element={<MyProfile/>} />
            <Route path="/dashboard/settings" element={<Settings/>} />
            
            {
              user?.accountType == ACCOUNT_TYPE.STUDENT && (
                <>
                  <Route path="/dashboard/cart" element={<Cart/>} />
                  <Route path="/dashboard/enrolled-courses" element={<EnrolledCourses />} />
                </>
              )
            }

            <Route path="/dashboard/add-course" element={<AddCourse />} />

            <Route path="/dashboard/my-courses" element={<MyCourses/>} />
            
            <Route path="/dashboard/edit-course/:courseId" element={<EditCourse />} />
            
        </Route>

        

      </Routes>
    </div>
  );
}

export default App;
