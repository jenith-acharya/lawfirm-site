import { Button, Navbar } from "flowbite-react";
import { NavLink } from "react-router-dom";
import Logo from "../../../assets/logo.svg";

export const Homeheader = () => {
  return (
    <>
      <Navbar fluid className="bg-black h-32">
        <Navbar.Brand href="https://legacylegal.com.np">
          <img src={Logo} className="size-40 sm:h-28 sm:w-64" alt="LLS Logo" />
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button
            href="/signin"
            color="failure"
            style={{ width: 150, height: 45, backgroundColor: "dark red" }}
            pill
          >
            Sign In
          </Button>
          <Navbar.Toggle />
        </div>

        <Navbar.Collapse className="decoration-white">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-[15px] ${isActive ? "text-red-800" : "text-white"}`
            }
          >
            HOME
          </NavLink>
          <NavLink
            to="/aboutus"
            className={({ isActive }) =>
              `text-[15px] ${isActive ? "text-red-800" : "text-white"}`
            }
          >
            ABOUT US
          </NavLink>
          <NavLink
            to="/ourteam"
            className={({ isActive }) =>
              `text-[15px] ${isActive ? "text-red-800" : "text-white"}`
            }
          >
            OUR TEAM
          </NavLink>
          <NavLink
            to="/areaofpractice"
            className={({ isActive }) =>
              `text-[15px] ${isActive ? "text-red-800" : "text-white"}`
            }
          >
            AREAS OF PRACTICE
          </NavLink>
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              `text-[15px] ${isActive ? "text-red-800" : "text-white"}`
            }
          >
            BLOGS
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-[15px] ${isActive ? "text-red-800" : "text-white"}`
            }
          >
            CONTACT
          </NavLink>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
