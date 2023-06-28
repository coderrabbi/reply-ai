import textIcon from "../assets/smallcaps.png";
import note from "../assets/note-2.png";
import map from "../assets/map.png";
import sms from "../assets/sms.png";
import arrow from "../assets/arrow-right.png";
const CopyField = () => {
  return (
    <div className="2xl:h-[150vh] h-[150vh] pt-5">
      {/* heading text  */}
      <div>
        <h2 className="text-[27px] text-primary font-[700] tracking-[0.556px]">
          Generate Content
        </h2>
        <p className="text-[15px] leading-[169.4%]">
          Describe what you need to write. Write from scratch, summarize, answer
          questions, and more. You can also insert a link for context.
        </p>
      </div>
      {/* form */}
      <form action="">
        <div className="mt-10 flex flex-col gap-6">
          {/* select language */}
          <div className="flex flex-col gap-5">
            <label htmlFor="" className="text-[14.246px] px-4">
              Select Language
            </label>
            <div className="bg-white flex gap-2 items-center px-4 rounded-[7.2px] border  border-primary shadow-inputShadow text-white text-[14.79px] font-[500] max-w-[317px] h-[57px] text-center ">
              <img src={textIcon} alt="" className="w-[21px] h-[21px]" />
              <select
                type="select"
                className="text-[#313335] bg-transparent text-[14.79px] font-[400] w-[100%] text-left h-[37px] outline-none leading-7  "
              >
                <option value="English">English</option>
                <option value="English">Spanish</option>
              </select>
            </div>
          </div>
          {/* select tone */}
          <div className="flex flex-col gap-5">
            <label htmlFor="" className="text-[14.246px] px-4">
              Select Tone
            </label>
            <div className="bg-white flex gap-2 items-center px-4 rounded-[7.2px] border  border-primary shadow-inputShadow text-white text-[14.79px] font-[500] max-w-[317px] h-[57px] text-center ">
              <img src={note} alt="" className="w-[21px] h-[21px]" />
              <select
                type="select"
                className="text-[#313335] bg-transparent text-[14.79px] font-[400] w-[100%] text-left h-[37px] outline-none leading-7  "
              >
                <option value="English">Formal</option>
                <option value="English">In-Formal</option>
              </select>
            </div>
          </div>
          {/* choose use case */}
          <div className="flex flex-col gap-5">
            <label htmlFor="" className="text-[14.246px] px-4">
              Choose Use Case
            </label>
            <div className="bg-white flex gap-2 items-center px-4 rounded-[7.2px] border  border-primary shadow-inputShadow text-white text-[14.79px] font-[500] max-w-[317px] h-[57px] text-center ">
              <img src={map} alt="" className="w-[21px] h-[21px]" />
              <select
                type="select"
                className="text-[#313335] bg-transparent text-[14.79px] font-[400] w-[100%] text-left h-[37px] outline-none leading-7  "
              >
                <option value="English">Contract</option>
                <option value="English">Connect</option>
              </select>
            </div>
          </div>
          {/* creativity level */}
          <div className="flex flex-col gap-5">
            <label htmlFor="" className="text-[14.246px] px-4">
              Creativity Level
            </label>
            <div className="flex gap-3">
              <button className="lg:text-[16px] text-[10px] text-white  flex items-center bg-primary border-none rounded-[24px]  ">
                Balanced
              </button>
              <button className="lg:text-[16px] text-[10px] text-white text-center bg-transparent  border-[#bababa] hover:border-[#bababa] rounded-[24px] ">
                Intemidiate
              </button>
              <button className="lg:text-[16px] text-[10px] text-white bg-transparent  border-[#bababa] hover:border-[#bababa] rounded-[24px] ">
                Creative
              </button>
            </div>
          </div>
          {/* instruction */}
          <div className="flex flex-col gap-5">
            <label htmlFor="" className="text-[14.246px] px-4">
              Instruction
            </label>
            <div className="  rounded-[7.2px] border p-10 max-w-[317px] relative border-primary shadow-inputShadow bg-white text-white text-[14.79px] font-[500]   text-center ">
              <img
                src={sms}
                alt=""
                className="w-[21px] h-[21px] absolute top-[50px] left-[10px]"
              />
              <textarea
                name=""
                id=""
                cols="25"
                rows="10"
                className="bg-white w-[100%] text-black  outline-none text-[14.246px] font-[100]"
                maxLength={200}
                placeholder="Enter your writing instructions here.Feel free to use any language.The more detailed and specific out instructions, the accurate and precise the AI's output will be."
              ></textarea>
            </div>
          </div>
          {/* chatting button */}
          <div className="my-[50px] flex gap-8">
            <button className="border-none bg-primary text-[8.8px] flex items-center justify-center w-[152px] h-[29px]">
              Start Chatting{" "}
              <span>
                <img src={arrow} alt="" />
              </span>
            </button>
            <button className=" bg-transparent text-[8.8px] flex items-center border-[#fff]  hover:border-[#fff] justify-center w-[152px] h-[29px]">
              Regenerate
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CopyField;
