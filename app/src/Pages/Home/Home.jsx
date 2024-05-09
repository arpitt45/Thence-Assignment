import React from "react";
import Navbar from "../../Components/Navbar";
import Hero from "../../assets/Nerd.jpeg";
import { PiRocketLaunchDuotone } from "react-icons/pi";
import Carousel from "../../Components/Carousel";
import { FaArrowRight } from "react-icons/fa6";
import AskQuestion from "../../Components/AskQuestion";
import Footer from "../../Components/Footer";


const Home = () => {
  return (
    <div>
      <Navbar />
      <div>
        <span className="shadow-font">Success Stories</span>
        <div className="font-semibold text-5xl md:mx-1 mx-8 ml-40 md:ml-0 md:grid md:gap-y-2">
          <h1>Every success journey </h1>
          <h1>we've encountered. </h1>
        </div>
      </div>

      <section className="flex flex-wrap ">
        <div>
          <div className="relative">
            <img
              className="w-80 h-80 border rounded-2xl m-10 ml-52"
              src={Hero}
              alt=""
            />
            <div className="w-44 h-36 bg-white absolute top-16 left-24  rounded-xl shadow-md">
              <h4 className="relative top-6 right-4 text-4xl font-semibold">
                40%
              </h4>
              <div
                style={{ textAlign: "left" }}
                className=" text-xs m-6 text-slate-500  "
              >
                Achieved reduction in project execution time by optimizing team
                availability
              </div>
            </div>

            <div className="w-44 h-36 bg-green-950 absolute top-52 right-0  rounded-xl shadow-xl">
              <h4 className="relative top-6 right-1 text-4xl font-semibold text-white">
                $0.5{" "}
                <span className="text-sm text-right text-slate-200">
                  MILLION
                </span>
              </h4>
              <div
                style={{ textAlign: "left" }}
                className=" text-xs m-3  top-5 relative text-slate-200  "
              >
                reduced client expenses by saving on hiring and employee costs
              </div>
            </div>

            <div className="w-44 h-14 absolute bg-white top-60 rounded-full left-40 shadow-xl">
              <div className="relative top-4 left-4 ">
                <PiRocketLaunchDuotone className="text-green-600 bg-green-200 rounded-full w-6 h-6  " />
                <h4 className="font-semibold relative bottom-8 right-5">
                  10 DAYS
                </h4>
                <div
                  style={{ textAlign: "left" }}
                  className=" text-xs m-5 text-slate-500 bottom-14 left-4 relative  "
                >
                  Staff Deployment
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-left relative top-16 text-3xl left-80">
          <Carousel />

          <button className="button text-white text-lg px-10 py-4 rounded-full flex items-center relative top-8">
            <span>Explore More</span>
            <FaArrowRight className="ml-2" />
          </button>
        </div>
      </section>

      
       <section className="flex relative top-20">
       <AskQuestion/>
       </section>
       
       <section className="relative mt-16 top-14">
        <Footer/>
       </section>

    </div>
  );
};

export default Home;
