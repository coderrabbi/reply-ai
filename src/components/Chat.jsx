import linef from "../assets/Line 78.png";
import line2 from "../assets/Line 79.png";
import send from "../assets/send.png";
const Chat = () => {
  return (
    <div className="h-[100vh] pt-4 ">
      <div className="flex flex-col gap-5">
        {/* friend message */}
        <div className="flex items-end gap-3">
          <button className="bg-white text-[16px] text-left text-black border-[0.5px] cursor-default outline-none border-none border-[#33444c13] shadow-buttonShadow font-[400] hover:border-[#33444c13]">
            Lorem Ipsum is simply dummy textprinting.
          </button>
          <span className="text-[#292d32] text-[10px]">12:03 AM</span>
        </div>

        {/* own message */}
        <div className="flex flex-col gap-5">
          <div className="flex justify-end items-end gap-3">
            <span className="text-[#292d32] text-[10px]">12:18 AM</span>
            <button className="bg-primary text-[16px] text-right  text-white  font-[400] cursor-default outline-none border-none  ">
              Lorem Ipsum
            </button>
          </div>
          <div className="flex justify-end items-end gap-3">
            <span className="text-[#292d32] text-[10px]">01:02 AM</span>
            <button className="bg-primary text-[16px] text-right  text-white  font-[400] cursor-default outline-none border-none  ">
              Lorem Ipsum is simply
            </button>
          </div>
        </div>

        <div className="flex justify-center gap-3 items-center">
          <div className="w-[83px] h-[1px] bg-bgGradient">
            <img src={linef} alt="" />
          </div>
          <span className="text-[#292D32] text-center text-[12px] font-poppins font-[500]">
            Today
          </span>
          <div className="w-[83px] h-[1px] bg-bgGradient">
            <img src={line2} alt="" />
          </div>
        </div>

        {/* friend message */}
        <div className="flex items-end gap-3">
          <button className="bg-white text-[16px] text-left text-black border-[0.5px] cursor-default outline-none border-none border-[#33444c13] shadow-buttonShadow font-[400] hover:border-[#33444c13]">
            Lorem Ipsum is simply dummy textprinting.
          </button>
          <span className="text-[#292d32] text-[10px]">03:15 PM</span>
        </div>

        <div className="flex justify-end items-end gap-3">
          <span className="text-[#292d32] text-[10px]">03:18 PM</span>
          <button className="bg-primary text-[16px] text-right  text-white  font-[400] cursor-default outline-none border-none  ">
            Lorem Ipsum is simply
          </button>
        </div>
      </div>

      <div className="bg-white flex gap-2 items-center px-4 rounded-[7.2px] mt-[50%] border  border-primary shadow-buttonShadow text-white text-[14.79px] font-[500] h-[57px] text-center ">
        <input
          type="text"
          className="w-full bg-white outline-none text-black font-[400]"
          placeholder="Can you help me in . . ."
        />
        <img src={send} alt="" />
      </div>
    </div>
  );
};

export default Chat;
