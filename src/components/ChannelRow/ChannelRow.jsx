import { Verified } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import React from 'react';
import './ChannelRow.css';


const ChannelRow = ({image, channel, verified, subs, noOfVideos, description}) => {

  return (

    <div className='channelRow'>

        <Avatar className='channelRowLogo' src={image} alt={channel} />

        <div className='channelRowText'>
            <h4> {channel} {verified && <Verified className='verified'/>} </h4>
            <p> {subs} subscribers • {noOfVideos} </p>
            <p> {description} </p>
        </div>

    </div>

  )

};

export default ChannelRow;