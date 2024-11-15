import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <div className="bg-[#e9e5e5]">
        <div className="max-w-7xl mx-auto mt-4">
          <Navbar></Navbar>
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
