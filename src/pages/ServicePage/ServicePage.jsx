import "./ServicePage.css";
import imagee from "./backg.png";
import image1 from "./image.jpeg"
import serimage from "./Rectangle.png"

const ServicePage = () => {
  return (
    <>
    <div className="flex">
      <div className="relative flex justify-center items-center w-[50%]">
        {/* Background image */}
        <img className="h-[622px] w-[540px]" src={imagee} alt="Background" />
        
        {/* Text overlay */}
        <h1 className="absolute  w-72 tracking-wide p-1 text-5xl text-white  rounded-md shadow-md">
          IF WE CAN TOUCH YOU THEN <span className="defi-col">DEFINITELY</span>, WE CAN IMPLEMENT IT
        </h1>
      </div>

      <div className="  flex flex-col justify-center items-center" >
        <div className="flex space-x-4"> 
          <img src={image1} className="rounded-3xl in-sha w-52 h-44 " alt="" />
          <img src={image1} className="rounded-3xl in-sha w-52 h-44 mt-12" alt="" />
        </div>
        <div className="flex space-x-4"> 
          <img src={image1} className="rounded-3xl in-sha w-52 h-44 " alt="" />
          <img src={image1} className="rounded-3xl in-sha w-52 h-44 mt-12" alt="" />
        </div>
      </div>
    </div>


    <div className="text-white">

      <div className="flex flex-col items-center px-96">
        <h1 className="text-4xl">SERVICES</h1>
        <h1 className="text-center text-lg pt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia est aliquid quas error ea a voluptas nulla dolorem illum excepturi pariatur quos praesentium nostrum sapiente optio perspiciatis, obcaecati eum modi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia est aliquid quas error ea a voluptas nulla dolorem illum excepturi pariatur quos </h1>
      </div>

      <div className="relative flex justify-center items-center">
        <img src={serimage} alt="" />
        <div className="absolute btn-bg-col space-y-5">
          <div className="space-x-10">

          <button>Feature 1</button>
          <button>Feature 2</button>
          <button>Feature 3</button>
          </div>
          <div className="space-x-10 pl-12">

          <button>Feature 4</button>
          <button>Feature 5</button>
          <button>Feature 6</button>
          </div>
        </div>
      </div>

    </div>



    <div className="text-white">

<div className="flex flex-col items-center px-96">
  <h1 className="text-4xl">TRAINING</h1>
  <h1 className="text-center text-lg pt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia est aliquid quas error ea a voluptas nulla dolorem illum excepturi pariatur quos praesentium nostrum sapiente optio perspiciatis, obcaecati eum modi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia est aliquid quas error ea a voluptas nulla dolorem illum excepturi pariatur quos </h1>
</div>

<div className="relative flex justify-center items-center">
  <img src={serimage} alt="" />
  <div className="absolute btn-bg-col space-y-5">
    <div className="space-x-10  pl-12">
      
    <button>Feature 1</button>
    <button>Feature 2</button>
    <button>Feature 3</button>
    </div>
    <div className="space-x-10">

    <button>Feature 4</button>
    <button>Feature 5</button>
    <button>Feature 6</button>
    </div>
  </div>
</div>



</div>

<div className="w-full px-20">
        <hr className="bg-gray-400 w-full h-[0.1px] mb-16 "/>

        </div>

    </>
  );
};

export default ServicePage;
