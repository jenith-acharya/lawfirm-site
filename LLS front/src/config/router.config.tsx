import { Route, Routes } from "react-router-dom";
import Layout from "../layout/layout";
import Landingpage from "../pages/landing";
import Ourteam from "../pages/Our Team";
import Areasofpractice from "../pages/Areasofpractice";
import Aboutus from "../components/AboutUsCard";
import Signin from "../pages/signin/signin";
import Contact from "../pages/contactpage";
import Aboutuspage from "../pages/About Us";


export const Routerconfig = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Landingpage />} />
        <Route path="/aboutus" element={<Aboutuspage/>} />
        <Route path="/ourteam" element={<Ourteam />} />
        <Route path="/areaofpractice" element={<Areasofpractice />} />
        <Route path="/blogs" element={<Ourteam/>} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      <Route path="/signin" element={<Signin />} /> {/* Signin without Header/Footer */}
    </Routes>
  );
};
