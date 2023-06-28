import book from "../assets/archive-book.png";
import heart from "../assets/Vector.png";
import dot from "../assets/more-circle.png";
import heartWc from "../assets/heart.png";
import { Link } from "react-router-dom";
const TextTable = () => {
  return (
    <div className={`lg:mx-10 m-0`}>
      <div className="flex justify-between p-5 mb-5  relative overflow-hidden">
        <div className="w-[1800px] mx-auto h-[1px] bg-[#463967] absolute bottom-0 -left-[100px] overflow-hidden"></div>
        <div>
          <Link
            to="/"
            className="text-[#bababa] md:text-[16px] text-[12px] font-[500] hover:text-[#bababa]"
          >
            Home
          </Link>
        </div>
        <div className="flex gap-3 md:gap-5">
          <div className="flex md:gap-3 gap-1 items-center">
            <div>
              <img src={heartWc} alt="" className="cursor-pointer" />
            </div>
            <span className="text-[10px] md:text-[13.8px] ">Favorites</span>
          </div>
          <div className="flex md:gap-3 gap-1 items-center">
            <div>
              <img src={heartWc} alt="" className="cursor-pointer" />
            </div>
            <span className="text-[10px] md:text-[13.8px] ">New Folder</span>
          </div>
          <div className="flex md:gap-3 gap-1 items-center">
            <div>
              <img src={heartWc} alt="" className="cursor-pointer" />
            </div>
            <span className="text-[10px] md:text-[13.8px] ">New Doument</span>
          </div>
        </div>
      </div>
      {/* table  */}
      <table className="table-auto px-10 w-full">
        <thead className="text-left  border-b relative border-[#463967]">
          <tr>
            <th className="lg:text-[14.6px] text-[10px]  font-[400]">Name</th>
            <th className="lg:text-[14.6px] text-[10px]  font-[400]">Items</th>
            <th className="lg:text-[14.6px] text-[10px]  font-[400]">Words</th>
            <th className="lg:text-[14.6px] text-[10px]  font-[400]">
              Modified
            </th>
          </tr>
        </thead>
        <tbody className="px-10  w-[80%] mx-auto ">
          <tr className="">
            <td className=" ">
              <Link
                to="/edit"
                className=" flex items-center gap-3   md:text-[18.1px] lg:text-[24.1px] sm:text-[14px] text-[12px]  font-[300] text-white hover:text-white"
              >
                {" "}
                <div>
                  {" "}
                  <img src={book} alt="" />
                </div>{" "}
                New Document01
              </Link>
            </td>
            <td className="text-[10px] lg:text-[18px]">__</td>
            <td className="text-[10px] lg:text-[18px]">120</td>
            <td className=" md:text-[14.1px] lg:text-[18.1px] text-[10px]  font-[300]">
              May 25, 05:45 pm
            </td>
            <td className="">
              {" "}
              <div className="cursor-pointer">
                <img src={heart} alt="" />
              </div>
            </td>
            <td>
              <div className="cursor-pointer">
                <img src={dot} alt="" />
              </div>
            </td>
          </tr>
          <tr>
            <td className="flex items-center gap-3 text-[24.1px] font-[300]">
              {" "}
              <Link
                to="/edit"
                className=" flex items-center gap-3  md:text-[18.1px] lg:text-[24.1px] sm:text-[14px] text-[12px] font-[300] text-white hover:text-white"
              >
                {" "}
                <div>
                  {" "}
                  <img src={book} alt="" />
                </div>{" "}
                New Document02
              </Link>
            </td>
            <td className="text-[10px] lg:text-[18px]">__</td>
            <td className="text-[10px] lg:text-[18px]">40</td>{" "}
            <td className=" flex md:text-[14.1px] lg:text-[18.1px] text-[10px]   items-center gap-4 font-[300]">
              May 30, 08:36 pm{" "}
            </td>
            <td className="">
              {" "}
              <div className="cursor-pointer">
                <img src={heart} alt="" />
              </div>
            </td>
            <td>
              <div className="cursor-pointer">
                <img src={dot} alt="" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TextTable;
