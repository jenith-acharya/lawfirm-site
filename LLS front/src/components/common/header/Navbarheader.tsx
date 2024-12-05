import { Button, Navbar } from "flowbite-react";
import Logo from "../../../assets/logo.svg"

export const Homeheader = () => {
    return(
    <>
    
    <Navbar fluid className="bg-black h-32	">
      <Navbar.Brand href="https://legacylegal.com.np">
        <img src={Logo} className="size-40 sm:h-28 sm:w-64" alt="LLS Logo" />
      </Navbar.Brand>
      <div className="flex md:order-2">
      <Button href="/contact" color="failure" style={{width:150 , height:45 , backgroundColor:"dark red", }} pill> CONTACT US </Button>
        <Navbar.Toggle />
      </div>
      
      
      <Navbar.Collapse className="decoration-white ">
        <Navbar.Link className="text-[15px] text-white " href="/" active>HOME</Navbar.Link >
        <Navbar.Link className="text-[15px] text-white " href="/about">ABOUT</Navbar.Link>
        <Navbar.Link className="text-[15px] text-white "href="/ourteam">OUR TEAM</Navbar.Link>
        <Navbar.Link className="text-[15px] text-white "href="/areaofpractice">AREAS OF PRACTICE</Navbar.Link>
        <Navbar.Link className="text-[15px] text-white " href="/blogs">BLOGS</Navbar.Link>
        <Navbar.Link className="text-[15px] text-white " href="/contact">CONTACT</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    </>
    )
}