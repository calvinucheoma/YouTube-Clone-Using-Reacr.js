import { Avatar } from '@mui/material';
import React from 'react';
import './VideoCard.css';



const VideoCard = ({title, channel, views, timestamp, imageCard, imageAvatar}) => {

  return (

    <div className='videoCard'>

       <img src={imageCard} alt="video card" className='videoThumbnail' />

       <div className="videoInfo">

          <Avatar className='videoAvatar' alt={channel} src={imageAvatar} />

          <div className="videoText">
              <h4>{title}</h4>
              <p>{channel}</p>
              <p> {views} • {timestamp} </p>
          </div>

       </div>

    </div>

  );

};

export default VideoCard;