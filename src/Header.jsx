/* eslint-disable no-unused-vars */
import "./Header.css";
import "./index.png";
import HeaderOption from "./HeaderOption";
import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
  return (
    <div className="header">



<div className="left">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png?20140125013055" alt="" />

<div className="search">
    <SearchIcon></SearchIcon>
    <input type="text" placeholder="Search" />
</div>
</div>

<div className="right">
<HeaderOption Icon={HomeIcon} title='Home'></HeaderOption>
<HeaderOption Icon={SupervisorAccountIcon} title='Network'></HeaderOption>
<HeaderOption Icon={BusinessCenterIcon} title='Jobs'></HeaderOption>
<HeaderOption Icon={ChatIcon} title='Messaging'></HeaderOption>
<HeaderOption Icon={NotificationsIcon} title='Notification'></HeaderOption>
<HeaderOption avatar= "https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg"></HeaderOption>
</div>


    </div>



  )
}

export default Header
