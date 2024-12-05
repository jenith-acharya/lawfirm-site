import { Homeheader } from "../../components/common/header/Navbarheader";
import { Heading1 } from "../../components/common/title";
import Herosection from "../../components/herosection/herosection.tsx";
import Aboutuspage from "../About Us";
import Areasofpractice from "../Areasofpractice";
import Footercomponent from "../../components/common/footer/Footer.tsx";
import Contactform from "../contactpage/index.tsx";

const Landingpage=() => {

    return(
         <>
        
        <Homeheader/>
        <Herosection/> 
        <br/>    
        <br/>
                  
        <Aboutuspage/>
        <br />
        <Heading1> Areas of Practice</Heading1>
        <Areasofpractice/>
        <br/>
        <br/>
        <Contactform/>
        
        <Footercomponent/>
        
        </>
    )
}

export default Landingpage;
