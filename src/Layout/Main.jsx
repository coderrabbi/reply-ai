import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "./SIdebar";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgClose } from "react-icons/cg";
import { useState } from "react";
const Main = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Navbar />
      <div className="flex relative">
        <div className=" lg:w-[410px] w-[6%]   ">
          {open ? (
            <CgClose
              onClick={() => setOpen(!open)}
              className="lg:hidden block md:text-[35px] text-[25px] cursor-pointer  text-white"
            />
          ) : (
            <RxHamburgerMenu
              className="lg:hidden block md:text-[35px] text-[25px] cursor-pointer   text-white"
              onClick={() => setOpen(!open)}
            />
          )}
          <div className="lg:block hidden">
            <Sidebar></Sidebar>
          </div>
        </div>
        <div
          className={`${
            open ? "block absolute w-[320px] z-30 slide-right " : "hidden"
          }`}
        >
          {" "}
          <div className=" bg-[#171127]">
            <CgClose
              onClick={() => setOpen(!open)}
              className="lg:hidden block md:text-[35px] cursor-pointer  text-[25px]  text-white"
            />
          </div>
          <Sidebar />
        </div>
        <div className="w-full h-[100vh] ">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Main;
