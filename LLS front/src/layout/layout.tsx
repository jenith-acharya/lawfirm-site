import { Outlet } from "react-router-dom";
import { Homeheader}  from "../components/common/header/Navbarheader";
import Footercomponent  from "../components/common/footer/Footer";

const Layout = () => {
  return (
    <>
      <Homeheader />
      <main>
        <Outlet /> {/* This renders the page content dynamically */}
      </main>
      <Footercomponent />
    </>
  );
};

export default Layout;
