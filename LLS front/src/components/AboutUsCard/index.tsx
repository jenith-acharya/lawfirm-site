import { Card } from "flowbite-react";

const Aboutus =() => {
    return(
        <>
        <Card className="max-w-sm" imgSrc="https://judiciallearningcenter.org/law-and-the-rule-of-law/" horizontal>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
    </Card>
        </>        
    )
}
export default Aboutus;