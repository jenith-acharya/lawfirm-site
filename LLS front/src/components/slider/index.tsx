import { Carousel } from "flowbite-react"
import law from "../../assets/Untitled.jpg"
const Sliderphoto = ()=>{
    return(
        <>
        <div className="h-96 sm:h-96 xl:h-[500px] 2xl:h-96">
      <Carousel >
        <img src={law} alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
      </Carousel>
        </div>
        </>
    )
}

export default Sliderphoto;