import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "./SIdebar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <div className="w-[30%] ">
          <Sidebar></Sidebar>
        </div>

        <div className="w-[70%]">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Main;
