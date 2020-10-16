import React from "react";
import facebookLogo from "./img/Facebook_Logo.png";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import StorefrontIcon from "@material-ui/icons/Storefront";
import PeopleIcon from "@material-ui/icons/People";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AddIcon from "@material-ui/icons/Add";
import MessageIcon from "@material-ui/icons/Message";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
export const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img src={facebookLogo} alt="facebook logo" />
        <div className="header__left__input">
          <SearchIcon />
          <input placeholder="Search" />
        </div>
      </div>
      <div className="header__middle">
        <div
          className="header__middle__option 
        header__middle__option--active"
        >
          <HomeIcon fontSize="large" />
        </div>
        <div className="header__middle__option">
          <FlagIcon fontSize="large" />
        </div>
        <div className="header__middle__option">
          <VideoLibraryIcon fontSize="large" />
        </div>
        <div className="header__middle__option">
          <StorefrontIcon fontSize="large" />
        </div>
        <div className="header__middle__option">
          <PeopleIcon fontSize="large" />
        </div>
      </div>
      <div className="header__right">
        <AccountCircleIcon fontSize="large" />
        <h5>jaber youssef</h5>
        <AddIcon fontSize="large" />
        <MessageIcon fontSize="large" />
        <NotificationsIcon fontSize="large" />
        <ExpandMoreIcon fontSize="large" />
      </div>
    </div>
  );
};
