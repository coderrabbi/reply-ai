import logo from "../assets/logo.png";
import twitter from "../assets/mdi_twitter.png";
import arrow from "../assets/right.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgClose } from "react-icons/cg";
import { useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const [open, setOpen] = useState(false);
  const listItems = [
    "About",
    "Our Principle",
    "Compatibility",
    "Features",
    "Pricing",
  ];
  return (
    <div>
      <div className="flex md:flex-row flex-col  items-center justify-center sm:gap-2 gap-1 border-b border-[#4b4b4b] py-2">
        <div className="flex justify-center  items-center gap-2">
          {" "}
          <div>
            <img src={twitter} alt="" />
          </div>{" "}
          <p className="sm:text-[12px] text-[10px]">
            Follow us on Twitter to keep up with our latest updates:
          </p>
        </div>
        <button className="flex gap-2 sm:text-[12px] text-[10px] font-[700] p-0 items-center">
          Follow{" "}
          <div>
            <img src={arrow} alt="" />
          </div>
        </button>
      </div>
      <div className="flex justify-between px-4 ">
        <div className="   flex py-5">
          <img src={logo} alt="reply ai" className="cursor-pointer" />
        </div>
        <div className="  gap-4 items-center justify-end  lg:flex hidden">
          <ul className=" flex gap-5 items-center justify-end">
            {listItems.map((item) => {
              return (
                <li
                  key={item}
                  className="cursor-pointer text-[16px] font-[300] hover:text-primary text-[#bababa]"
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
        <div className=" gap-6 items-center lg:flex hidden">
          <Link className="text-[#bababa] hover:text-[#bababa] font-[400]">
            Login
          </Link>

          <button className="border-primary text-primary border outline-none rounded-[12px] font-[700] px-[24px] py-[14px] hover:border-primary text-[16px]  ">
            Install on Chrome
          </button>
        </div>

        <div className="w-full flex justify-end lg:hidden  items-center relative  ">
          {open ? (
            <CgClose
              onClick={() => setOpen(!open)}
              className="lg:hidden block md:text-[35px] text-[25px] cursor-pointer  text-white"
            />
          ) : (
            <RxHamburgerMenu
              className="lg:hidden block md:text-[35px] text-[25px] cursor-pointer  text-white"
              onClick={() => setOpen(!open)}
            />
          )}
          {open && (
            <div
              className={` gap-4 items-center justify-end px-10 py-4 rounded-lg w-[280px] lg:hidden absolute flex flex-col top-[50px] z-50 bg-bgColor `}
            >
              <ul className=" flex gap-3 flex-col items-center justify-end">
                {listItems.map((item) => {
                  return (
                    <li
                      key={item}
                      className="cursor-pointer text-[16px] font-[300] hover:text-primary text-[#bababa]"
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
              <div className="flex gap-3  flex-col items-center">
                <Link className="text-[#bababa] font-[400] hover:text-[#bababa]">
                  Login
                </Link>

                <button className="border-primary text-primary border outline-none rounded-[12px] font-[700] px-[18px] py-[10px] md:px-[24px] md:py-[14px] hover:border-primary md:text-[16px]  text-[12px]  ">
                  Install on Chrome
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
