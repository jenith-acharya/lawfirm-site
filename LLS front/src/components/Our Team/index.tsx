import { Card } from "flowbite-react";
import drkumar from "../../../../../dr kumar.jpg";
import radha from "../../../../../radha.jpg"
import prerana from "../../../../../prerana.jpg"
import  Heading  from "../common/title";

const Ourteamcomponent = () => {
  return (
    <>
    <Heading>Our Team</Heading>
      <div className=" flex space-x-5 justify-center">
        <Card className="max-w-sm">
          <img
            className="rounded-t-lg h-[300px] w-[300px]"
            src={drkumar}
            alt="Descriptive alt text"
          />
          <div className="p-5">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Dr. Kumar Sharma Acharya
            </h5>
            <h6 className="text-gray-500">Senior Partner</h6>
            <p className="font-normal text-gray-700 dark:text-gray-400"></p>
          </div>
        </Card>

        <Card className="max-w-sm">
          <img
            className="rounded-t-lg h-[300px] w-[300px]"
            src={radha}
            alt="Descriptive alt text"
          />
          <div className="p-5">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Radha Sharma Acharya
            </h5>
            <h6 className="text-gray-500"> Senior Partner</h6>
            <p className="font-normal text-gray-700 dark:text-gray-400"></p>
          </div>
        </Card>

        <Card className="max-w-sm ">
          <img
            className="rounded-t-lg h-[300px] w-[300px]"
            src={prerana}
            alt="Descriptive alt text"
          />
          <div className="p-5">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Prerana Basnet Acharya
            </h5>
            <h6 className="text-gray-500">Partner and Head of Corporate </h6>
            <p className="font-normal text-gray-700 dark:text-gray-400"></p>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Ourteamcomponent;
