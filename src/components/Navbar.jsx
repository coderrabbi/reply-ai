import logo from "../assets/logo.png";
import lanIcon from "../assets/global.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgClose } from "react-icons/cg";
import { useState } from "react";
function Navbar() {
  const [open, setOpen] = useState(false);
  const listItems = [
    "About",
    "Features",
    "Review",
    "Pricing",
    "WebApp",
    "Sign out",
  ];
  return (
    <div className="flex justify-between ">
      <div className=" w-[410px] bg-bgColor  flex  px-10 py-5">
        <img src={logo} alt="reply ai" className="cursor-pointer" />
      </div>
      <div className="  gap-4 items-center justify-end px-10 lg:flex hidden">
        <ul className=" flex gap-3 items-center justify-end">
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
        <div className="flex gap-3 items-center">
          <div className="bg-[#848387] flex items-center px-4 rounded-[7.2px] border  border-white text-white text-[8.79px] font-[500] w-[118px] h-[39px] text-center ">
            <img src={lanIcon} alt="" className="w-[17px] h-[17px]" />
            <select
              type="select"
              className="bg-[#848387] text-white text-[8.79px] font-[500] w-[100px] h-[37px] outline-none leading-7 text-center "
            >
              <option value="English">English</option>
              <option value="English">Spanish</option>
            </select>
          </div>
          <button className="border-primary border outline-none rounded-[31px] hover:border-primary text-[11.6px] w-[152px] h-[57px] bg-[#575069]">
            Install on Chrome
          </button>
        </div>
      </div>

      <div className="w-full flex justify-end lg:hidden px-5 items-center relative bg-bgColor ">
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
            className={` gap-4 items-center justify-end px-10 py-4 rounded-lg lg:hidden absolute flex flex-col top-[50px] z-50 bg-bgColor `}
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
              <div className="bg-[#848387] flex items-center px-4 rounded-[7.2px] border  border-white text-white text-[8.79px] font-[500] w-[118px] h-[39px] text-center ">
                <img src={lanIcon} alt="" className="w-[17px] h-[17px]" />
                <select
                  type="select"
                  className="bg-[#848387] text-white text-[8.79px] font-[500] w-[100px] h-[37px] outline-none leading-7 text-center "
                >
                  <option value="English">English</option>
                  <option value="English">Spanish</option>
                </select>
              </div>
              <button className="border-primary border outline-none rounded-[31px] hover:border-primary text-[11.6px] w-[152px] h-[50px] bg-[#575069]">
                Install on Chrome
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
