
import './Middle.css';
import React from 'react';
import CreateIcon from '@mui/icons-material/Create';

function MiddleSec() {
  return (
    <div className='feed'>
      <div className="feed-inputContainer">
        <div className="feed-input">
            <CreateIcon/>
     <form >
      <input type="text" />
      <button type="submit">Send</button>
     </form>
        </div>

      </div>
    </div>
  )
}

export default MiddleSec
