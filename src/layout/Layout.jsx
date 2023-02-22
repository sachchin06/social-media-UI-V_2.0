import Navbar from "../components/navbar/Navbar";
import LeftBar from "../components/leftBar/LeftBar";
import RightBar from "../components/rightBar/RightBar";
import {
  
  Outlet,
} from "react-router-dom";
const Layout = () => {
    return (
      <div className="layout">
        <Navbar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{ flex: '6'}}><Outlet /></div>
          <RightBar />
        </div>
      </div>
    );
  };

  export default Layout