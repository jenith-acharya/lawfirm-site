import {BrowserRouter, Route, Routes} from "react-router-dom";
import Landingpage from "../pages/landing";
import Ourteam from "../pages/Our Team";
import Areasofpractice from "../pages/Areasofpractice";
import Aboutuspage from "../pages/About Us";

const Routerconfig =() =>{
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Landingpage/>}/>
            <Route path="/ourteam" element={<Ourteam/>}/>
            <Route path="/about" element={<Aboutuspage/>}/> 
            <Route path="/areaofpractice" element={<Areasofpractice/>}/>   
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default Routerconfig;

