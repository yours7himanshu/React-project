import React from 'react';
import "./HeaderOption.css";
import { Avatar } from '@mui/material';

function HeaderOption({ avatar, Icon, title }) {
  return (
    <div className='headerOption'>
       {Icon && <Icon className='header-icon'/> }
       {avatar &&  <Avatar className='header-icon' src={avatar} alt={title} />}
       <h3 className='header-title'>{title}</h3>
    </div>
  )
}

export default HeaderOption;
