import "./Middle.css";
import React from "react";
import CreateIcon from "@mui/icons-material/Create";
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';

function MiddleSec() {
  
  return (
    <div className="feed">
      <div className="feed-inputContainer">
        <div className="feed-input">
          <CreateIcon />
          <form>
            <input type="text" placeholder="Start a Post" />
            <button  type="submit">Send</button>
          </form>
        </div>
        <div className="feed-inputOptions">
          <InputOption Icon={ImageIcon} title='Photo' color="#70b59f"></InputOption>
          <InputOption Icon={SubscriptionsIcon} title='Video' color="#e7a33e"></InputOption>
          <InputOption Icon={EventNoteIcon} title='Event' color="#c0cbcd"></InputOption>
          <InputOption Icon={CalendarViewDayIcon} title='Write article' color="#7fc15e"></InputOption>
        </div>
      </div>
     

      < Post name = 'Himanshu Dinkar'
      discription = 'This is a test'
      message = 'Wow this is working'
      />

    </div>
  );
}

export default MiddleSec;
