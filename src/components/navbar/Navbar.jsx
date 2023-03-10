import "./navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import logo from '../../assets/logo.png';

import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";

const Navbar = () => {
  const { darkMode, toggle } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="left">
        <Link style={{ textDecoration: "none" }} to="/">
          <div className="logo">
            <img src={logo} alt="logo" />
          {/* <span>Media</span> */}
          </div>
        </Link>

        <Link style={{ textDecoration: "none" }} to="/">
        <HomeOutlinedIcon style={{cursor: 'pointer'}} />
        </Link>
        {darkMode ? (
          <WbSunnyOutlinedIcon  onClick={toggle} style={{cursor: 'pointer'}} />
        ) : (
          <DarkModeOutlinedIcon onClick={toggle} style={{cursor: 'pointer'}} />
        )}
        <GridViewOutlinedIcon style={{cursor: 'pointer'}} />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="test" placeholder="Serach.." />
        </div>
      </div>
      <div className="right">
        <div className="item">
          <EmailOutlinedIcon />
        </div>
        <div className="item">
          <PersonOutlinedIcon />
        </div>
        <div className="item">
          <NotificationsOutlinedIcon />
        </div>
        <div className="item">
          <div className="user">
            <img src={currentUser.profilePic} alt="person" />
            <span>{currentUser.name}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
