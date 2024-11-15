import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

const Root = () => {
  const location = useLocation();
  const title = location.pathname.substring(1) || "Home";

  return (
    <div>
      <Helmet>
        <title>{title}| Gaget_Heaven</title>
        <link rel="icon" href="/path/to/favicon.ico" /> 
      </Helmet>
      <div className="bg-[#e7e5e5]">
        <div className="max-w-7xl mx-auto mt-4">
          <Navbar />
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Root;