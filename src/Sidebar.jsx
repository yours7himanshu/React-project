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
        <img src="https://images.unsplash.com/photo-1508898578281-774ac4893c0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="background-image" />
        <Avatar className="sidebar-avatar"></Avatar>
        <h2>Himanshu Dinkar</h2>
        <h4>dinkarhimanshu78@gmail.com</h4>
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
