import { Routes, Route } from "react-router-dom";
import MainLayout from "../pages/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Career from "../pages/Career";




export default function AppRoutes(){
    return(
        <Routes>
             <Route path="/" element={<MainLayout/>}>
                <Route index element={<Home/>} />
                <Route path="home" element={<Home />} />
                <Route path="about" element={<About/>} />
                <Route path="career" element={<Career/>} />
            </Route>
        </Routes>
    )
}