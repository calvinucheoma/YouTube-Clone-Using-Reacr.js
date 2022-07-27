// import React from 'react';
// import './VideoInfo.css';
// import { ThumbUp, ThumbDown, Reply, MoreHoriz, PlaylistAdd } from '@mui/icons-material';
// import { Avatar, Button } from '@mui/material';
// import SidebarRow from '../SidebarRow/SidebarRow';


// const VideoInfo = ({title, description, publishedDate, channelTitle, channelImage, viewCount, likeCount, dislikeCount, subs}) => {

//   return (

//         <div className='videoInfo'>

//             <div className='videoInfoHeadline'>
//                 <h1>{title}</h1>
//             </div>

//             <div className='videoInfoStats'>

//                 <p> {viewCount} views • {publishedDate} </p>

//                 <div className="videoInfoLikes">
//                     <SidebarRow Icon={ThumbUp} title={likeCount} />
//                     <SidebarRow Icon={ThumbDown} title={dislikeCount} />
//                     <SidebarRow Icon={Reply} title='SHARE' />
//                     <SidebarRow Icon={PlaylistAdd} title='SAVE' />
//                     <SidebarRow Icon={MoreHoriz} title='' />
//                 </div>
                
//             </div>

//             <hr />

//             <div className="videoInfoChannel">

//                 <div>

//                     <Avatar 
//                         className='videoInfoAvatar' 
//                         alt={channelTitle} 
//                         src={channelImage} 
//                     />

//                     <div className='videoInfoChannelInfo'>
//                         <h3 className='videoInfoChannelTitle'>{channelTitle}</h3>
//                         <p className='videoInfoChannelSubs'>{subs} subscribers</p>
//                     </div>
                    
//                 </div>

//                 <div className='videoInfoSubscribe'>
//                     <Button color='secondary' >SUBSCRIBE</Button>
//                 </div>

//             </div>

//             <div className='videoInfoChannelDesc'>
//                 <p>{description}</p>
//             </div>

//         </div>

//   )

// };

// export default VideoInfo