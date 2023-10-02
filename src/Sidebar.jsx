import React from "react";
import "./Sidebar.css";
import { Avatar } from "@mui/material";

function Sidebar() {
const recentItem = (topic)=>(
  <div className="sidebar_recentItem">
    <span className="sidebar-hash">#</span>
    <p>{topic}</p>
  </div>
 
);



  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <img src="https://t3.ftcdn.net/jpg/05/28/86/66/360_F_528866602_aiVwnOnkooTrqo3MgicCf83SVVzt1Gnd.jpg" alt="background-image" />
        <Avatar className="sidebar-avatar"></Avatar>
        <h2>Himanshu Dinkar</h2>
        <p>First Year Student | Exploring Open Source | Tech Enthusiast | Currently Learning Java☕</p>
      </div>
      <div className="sidebar-stats">
        {/* Sidebar stat 1 */}
        <div className="sidebar-stat">
          <p>Who viewed you</p>
          <p className="sidebar-statnum">2,546</p>
        </div>
    

{/* Sidebar stat 2 */}
        <div className="sidebar-stat">
        <p>Views on post</p>
          <p className="sidebar-statnum">2,446</p>
        </div>

      </div>

      <div className="sidebar-bottom">
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('programming')}
        {recentItem('Software Engineer')}
        {recentItem('Software Design')}
        {recentItem('Algorithm')}

      </div>
    </div>
  );
}

export default Sidebar;
