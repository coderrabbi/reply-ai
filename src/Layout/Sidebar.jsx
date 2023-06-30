import { useState } from "react";
import copy from "../assets/copy.png";
import message from "../assets/message.png";
import Chat from "../components/Chat";
import CopyField from "../components/CopyField";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const Sidebar = () => {
  const [active, setActive] = useState(false);
  console.log(active);
  return (
    <div className="h-[100vh] lg:w-[410px] w-[320px]">
      <Tabs>
        <TabList className="flex bg-[#463967]">
          <Tab className="w-[50%]">
            {" "}
            <button
              onClick={() => setActive(false)}
              className={`text-white gap-2 bg-[#463967] w-full border-r ${
                !active &&
                "border-primary border bg-[#6c5a9b] border-r hover:border-primary rounded-r-[11px] "
              } outline-none flex justify-center items-center cursor-pointer  rounded-none hover:border-primary`}
            >
              <div>
                {" "}
                <img src={copy} alt="" />
              </div>{" "}
              Copy
            </button>
          </Tab>
          <Tab className="w-[50%]">
            {" "}
            <button
              onClick={() => setActive(true)}
              className={`text-white gap-2 bg-[#463967] w-full border-r ${
                active &&
                "border-primary border bg-[#6c5a9b] border-r hover:border-primary rounded-l-[11px] "
              } outline-none flex justify-center items-center cursor-pointer  rounded-none hover:border-primary`}
            >
              <div>
                {" "}
                <img src={message} alt="" />
              </div>{" "}
              Chat
            </button>
          </Tab>
        </TabList>

        <TabPanel>
          <div className="bg-bgColor">
            <div className="px-4">
              <CopyField />
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="bg-white">
            <div className="px-4">
              <Chat />
            </div>
          </div>
        </TabPanel>
      </Tabs>

      <div className="flex bg-[#6c5a9b]"></div>
    </div>
  );
};

export default Sidebar;
