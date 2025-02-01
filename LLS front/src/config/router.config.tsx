import { Route, Routes } from "react-router-dom";
import Landingpage from "../pages/landing";
import Ourteam from "../pages/Our Team";
import Areasofpractice from "../pages/Areasofpractice";
import Aboutuspage from "../pages/About Us";
import Signin from "../pages/signin/signin";

export const Routerconfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/ourteam" element={<Ourteam />} />
      <Route path="/areasofpractice" element={<Areasofpractice />} />
      <Route path="/aboutus" element={<Aboutuspage />} />
      <Route path="/signin" element={<Signin />} />
    </Routes>
  );
};
