import drkumar from "../../../../../5686eaa2e530ebc4de0719f02f9b24a5.jpg"
import { Card } from "flowbite-react";

const Ourteam=() => {
    return(
        <>
        <div className="flex mx-20 my-20 ">
        <Card className=" mx-4 max-w-sm my-4 md:max-[700] text-black "
      imgAlt="."
      imgSrc={drkumar} >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
       Dr. Kumar Sharma Acharya
      </h5>
      <p className="font-normal text-gray-500 dark:text-gray-400">
      Phone: +977 <br/>
      Email: kumar@legacylegal.com.np 
      </p>
    </Card>

    <Card
      className="mx-4 max-w-sm grid-rows-2 md:max-[700] text-black"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Statua_Iustitiae.jpg/170px-Statua_Iustitiae.jpg"
      >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Radha Pant Acharya
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      Senior Partner<br/>
      Phone: +977 <br/>
      Email: radha@legacylegal.com.np
      </p>
    </Card>

    <Card
      className="mx-4 max-w-sm grid-rows-2 md:max-[700] text-black"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="/images/blog/image-1.jpg"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Prerana Basnet Acharya
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Partner and Head of Corporate Department  <br/>
        Phone: +977 <br/>
        Email: prerana@legacylegal.com.np
              </p>
    </Card></div>
        </>
    )
}

export default Ourteam;