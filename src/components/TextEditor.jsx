// external Import
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
// internal import

import text from "../assets/text.png";
import textCenter from "../assets/textalign-center.png";
import textLeft from "../assets/textalign-left.png";
import textRight from "../assets/textalign-right.png";
import textBlock from "../assets/text-block.png";
import textBold from "../assets/text-bold.png";
import textItalic from "../assets/text-italic.png";
import textUnderline from "../assets/text-underline.png";
import textTranslate from "../assets/translate.png";
import textFirstLine from "../assets/firstline.png";
import textLink from "../assets/link-2.png";
import textSmallCaps from "../assets/smallcaps (1).png";
import quote from "../assets/quote-down.png";

const TextEditor = () => {
  const editIcons = [
    {
      img: textBold,
    },
    {
      img: textItalic,
    },
    {
      img: textUnderline,
    },
    {
      img: quote,
    },
    {
      img: textFirstLine,
    },
    {
      img: textLeft,
    },
    {
      img: textCenter,
    },
    {
      img: textRight,
    },
    {
      img: textBlock,
    },
    {
      img: text,
    },
    {
      img: textSmallCaps,
    },
    {
      img: textLink,
    },
    {
      img: textTranslate,
    },
  ];
  return (
    <div className="relative  ">
      <div className="border-y border-[#463967] pt-4 lg:pb-8 pb-3">
        <div className="absolute top-0 z-20">
          <Link to="/">
            <button className="bg-transparent flex gap-2 items-center border-none lg:text-[22px] text-[15px] text-[#cdcdcd]">
              <IoIosArrowBack />
              Back
            </button>
          </Link>
        </div>
        <div className="text-center  flex flex-col md:justify-center justify-end lg:gap-3 gap-1 sm:pl-4 md:mt-0 mt-4 ">
          <h1 className="lg:text-[53px] md:text-[40px] sm:text-[30px] text-[20px] ">
            New Document 01
          </h1>
          <div className="flex justify-center lg:gap-4 gap-4">
            {" "}
            <div className="flex flex-col">
              <span className="text-[#e7e7e7] lg:text-[17px] text-[12px] ">
                Words
              </span>
              <span className="text-[#e7e7e7] lg:text-[17px] text-[12px]">
                345
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[#e7e7e7] lg:text-[17px] text-[12px]">
                Characters
              </span>
              <span className="text-[#e7e7e7] lg:text-[17px] text-[12px]">
                1120
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex py-4 border-b px-4 border-[#463967] justify-center lg:gap-10 md:gap-5 sm:gap-4 gap-3">
        {editIcons.map((icon) => {
          return (
            <button
              className="p-0 bg-transparent border-none cursor-pointer"
              key={icon.length}
            >
              <img src={icon.img} alt="" />
            </button>
          );
        })}
      </div>

      <div className="md:px-[60px] md:py-[20px] p-[10px]">
        <p className="md:text-[25px] sm:text-[20px] text-[18px] ">
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.{" "}
          </p>
          <br />{" "}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>{" "}
          <p>
            {" "}
            <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </p>
      </div>
    </div>
  );
};

export default TextEditor;
