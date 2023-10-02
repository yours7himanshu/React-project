import React from 'react';
import './Post.css';
import { Avatar } from '@mui/material'; 
import { ChatOutlined, SendOutlined, ShareOutlined, ThumbUpAltOutlined } from "@mui/icons-material";
import InputOption from './InputOption';



function Post({name,discription,message,}) {
  return (
    <div className='post'>
      <div className="postheader">
        <Avatar></Avatar>
        <div className="post-info">
          <h2>{name}</h2>
          <p>{discription}</p>
        </div>
      </div>
      <div className="post-body">
        <p>{message}</p>
      </div>
      <div className="post-button">
 <InputOption Icon={ThumbUpAltOutlined} title = "Like" color= "gray" > </InputOption>
 <InputOption Icon={ChatOutlined} title = "Comment" color= "gray" > </InputOption>
 <InputOption Icon={ShareOutlined} title = "Share" color= "gray" > </InputOption>
 <InputOption Icon={SendOutlined} title = "Send" color= "gray" > </InputOption>
 

</div>
    </div>
  )
}

export default Post
