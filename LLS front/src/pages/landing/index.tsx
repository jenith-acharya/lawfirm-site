import { Heading1 } from "../../components/common/title";
import Herosection from "../../components/herosection/herosection.tsx";
import Aboutuspage from "../About Us";
import Areasofpractice from "../Areasofpractice";
import Contactform from "../contactpage/index.tsx";
import Ourteam from "../Our Team/index.tsx";

const Landingpage=() => {

    return(
         <>
        
        
        <Herosection/> 
        <br/>    
        
                  
        <Aboutuspage/>
        <br />
        
        <Areasofpractice/>
        <br/>
        <Ourteam/>
        <br/>
        
        
        
        </>
    )
}

export default Landingpage;
