import { TuneOutlined } from '@mui/icons-material';
import React from 'react';
import ChannelRow from '../ChannelRow/ChannelRow';
import VideoRow from '../VideoRow/VideoRow';
import './SearchedVideos.css';



const SearchedVideos = () => {

  return (

    <div className='searchedVideos'>

        <div className="searchedVideosFilter">
            <TuneOutlined/>
            <h2> FILTER </h2>
        </div>

        <hr/>

        <ChannelRow 
          image='https://yt3.ggpht.com/FjeN785fVWx0Pr6xCbwPhhq8hHj_gocc3FygDXYDEQgp2gE_FQzRNsFHFAjQ3oE-VJaeGR1a=s176-c-k-c0x00ffffff-no-rj' 
          channel='Sonny Sangha ' 
          verified 
          subs='153K' 
          noOfVideos={86} 
          description="I'm Sonny💯. You might also know me as PAPA React! 
            I've been coding for over 10 years now. As a Full Stack developer,
            I've worked both with startups and large corporations to help 
            build & scale their companies. Along the journey I realised my 
            passion existed in helping others excel and pursue their dreams
            as upcoming developers and if that’s not enough I have cloned 
            most of the applications you have used in your life! 
            🌟🚨 Join the world’s BEST developer community 
            “Zero to Full Stack Hero” NOW: https://www.papareact.com/course" 
        />

        <hr/>

        <VideoRow 
          views="89,053 views"
          subs="153K"
          description=""
          timestamp="2 weeks ago"
          channel="Sonny Sangha"
          title="🔴 Let's build Deliveroo 2.0 with REACT NATIVE! (Navigation, Redux, Tailwind CSS & Sanity.io)"
          image="https://i.ytimg.com/an_webp/taPz40VmyzQ/mqdefault_6s.webp?du=3000&sqp=CLiBgZcG&rs=AOn4CLA0UcnbVQHZujuIr9RjOYRMn3p_tQ"
        />

        <VideoRow 
          views="483K"
          subs="153K"
          description="A Spotify Clone made using Next.js"
          timestamp="Streamed 8 months ago"
          channel="Sonny Sangha"
          title="🔴 Let's build Spotify 2.0 with NEXT.JS 12.0! (Middleware, Spotify API, Tailwind, NextAuth, Recoil)"
          image="https://i.ytimg.com/an_webp/3xrko3GpYoU/mqdefault_6s.webp?du=3000&sqp=CLiigZcG&rs=AOn4CLCsBAZ9wjb_gca83wKY1p70GeoSCg"
        />

        <VideoRow 
          views="170K"
          subs="153K"
          description="A Tinder Clone made using React Native"
          timestamp="Streamed 8 months ago"
          channel="Sonny Sangha"
          title="🔴 Let's build Tinder 2.0 with REACT NATIVE! (Messaging, ContextAPI, Tailwind, Google Auth, Firebase)"
          image="https://i.ytimg.com/an_webp/qJaFIGjyRms/mqdefault_6s.webp?du=3000&sqp=CJGhgZcG&rs=AOn4CLACgD5khLQZVdTCgrpHa5s37xBXug"
        />

        <VideoRow 
          views="312K"
          subs="153K"
          description="An Instagram Clone made using Next.js"
          timestamp="Streamed 9 months ago"
          channel="Sonny Sangha"
          title="🔴 Let's build Instagram 2.0 with REACT.JS! (Next.js, Tailwind CSS, Firebase v9, NextAuth, Recoil)"
          image="https://i.ytimg.com/an_webp/a6Xs2Ir40OI/mqdefault_6s.webp?du=3000&sqp=CNaogZcG&rs=AOn4CLBUmBhexaYW0IeR88BQDApGRX9XrQ"
        />

        <VideoRow 
          views="914K"
          subs="153K"
          description="An Uber Clone made using React Native"
          timestamp="Streamed 11 months ago"
          channel="Sonny Sangha"
          title="🔴 Let's build Uber 2.0 with REACT NATIVE! (Navigation, Redux, Tailwind CSS & Google Autocomplete)"
          image="https://i.ytimg.com/an_webp/bvn_HYpix6s/mqdefault_6s.webp?du=3000&sqp=CNGugZcG&rs=AOn4CLCNvZ6TM243EEYrH5wbRPORjfkYJA"
        />

        <VideoRow 
          views="372K"
          subs="153K"
          description="An Facebook Clone made using Next.js"
          timestamp="Streamed 1 year ago"
          channel="Sonny Sangha"
          title="🔴 Let's build Facebook 2.0 with REACT.JS! (Next.js, Tailwind CSS, Image Uploading, Facebook Login)"
          image="https://i.ytimg.com/vi/dBotWYKYYWc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCfidMkM7OZTbndorBUm8_YN9QG8Q"
        />

        <VideoRow 
          views="239K"
          subs="153K"
          description="A Hulu Clone made using Next.js"
          timestamp="Streamed 1 year ago"
          channel="Sonny Sangha"
          title="🔴 Let's build Hulu 2.0 with REACT.JS! (Next.js, Tailwind CSS, Responsive)"
          image="https://i.ytimg.com/an_webp/MqDlsjc8GLo/mqdefault_6s.webp?du=3000&sqp=CKCJgZcG&rs=AOn4CLApP8D1b_awGvTAMoYs4Um30PHFbA"
        />

        <VideoRow 
          views="166K"
          subs="153K"
          description="A Google Clone made using Next.js"
          timestamp="Streamed 1 year ago"
          channel="Sonny Sangha"
          title="🔴 Let's build Google 2.0 with Tailwind CSS & NEXT.JS! (Responsive, SSR React, Pagination)"
          image="https://i.ytimg.com/an_webp/24xpTmaPOdY/mqdefault_6s.webp?du=3000&sqp=CNCHgZcG&rs=AOn4CLAVLdhqf0naQecEyF1TVOVmUkP1Iw"
        />

        <VideoRow 
          views="594K"
          subs="153K"
          description="A Whatsapp Clone made using Next.js"
          timestamp="Streamed 1 year ago"
          channel="Sonny Sangha"
          title="🔴 Let's build Whatsapp 2.0 with NEXT.JS! (1-1 Messaging, Live Status, Styled-Components, React.JS)"
          image="https://i.ytimg.com/an_webp/svlEVg0To_c/mqdefault_6s.webp?du=3000&sqp=CJa6gZcG&rs=AOn4CLA4zZWD_UfG-jAcv6w87jdaSHiVMQ"
        />

        <VideoRow 
          views="265K"
          subs="153K"
          description="A Slack Clone made using React.js"
          timestamp="Streamed 1 year ago"
          channel="Sonny Sangha"
          title="🔴 Let's build SLACK 2.0 with REACT.JS! (REDUX, Styled components & Firebase Hooks)"
          image="https://i.ytimg.com/an_webp/QiTq5WrWoJw/mqdefault_6s.webp?du=3000&sqp=CNSpgZcG&rs=AOn4CLAk0Od0mWXf_MzyEW3WgsU6tZy3hw"
        />

        <VideoRow 
          views="213K"
          subs="153K"
          description="A Snapchat Clone made using React.js"
          timestamp="Streamed 1 year ago"
          channel="Sonny Sangha"
          title="🔴 Let's build SNAPCHAT with REACT.JS! (with Camera, REDUX & Firebase)"
          image="https://i.ytimg.com/an_webp/1kGISk5ft2w/mqdefault_6s.webp?du=3000&sqp=CLSigZcG&rs=AOn4CLB5YJXHp9YRwH0qfvOpjLtV3mJVUQ"
        />

        <VideoRow 
          views="122K"
          subs="153K"
          description="A Gmail Clone made using React.js"
          timestamp="Streamed 1 year ago"
          channel="Sonny Sangha"
          title="🔴 Let's build Gmail with REACT.JS! (with React-Router, REDUX & Firebase)"
          image="https://i.ytimg.com/an_webp/b7nrXjS6Dqs/mqdefault_6s.webp?du=3000&sqp=CJG3gZcG&rs=AOn4CLCqyhd-dthlttU-Si8lDHGnMH74xA"
        />

        <VideoRow 
          views="210K"
          subs="153K"
          description="A LinkedIn Clone made using React.js"
          timestamp="Streamed 1 year ago"
          channel="Sonny Sangha"
          title="🔴 Let's build LinkedIn with REACT.JS! (with Redux & Firebase)"
          image="https://i.ytimg.com/an_webp/QaYts9sPmcY/mqdefault_6s.webp?du=3000&sqp=CNi7gZcG&rs=AOn4CLAgJTvdhWL_PuzQyW5Pmrb0b3PKGw"
        />

        <VideoRow 
          views="62K"
          subs="153K"
          description="A Reddit Clone made using Next.js"
          timestamp="Streamed 2 months ago"
          channel="Sonny Sangha"
          title="🔴 Let's build Reddit 2.0 with NEXT.JS! (React, SQL, Supabase, StepZen, GraphQL, TypeScript,Tailwind)"
          image="https://i.ytimg.com/an_webp/O0AhmAVzOo4/mqdefault_6s.webp?du=3000&sqp=CJi8gZcG&rs=AOn4CLAmsw27WsBjVjJNMNp0R2E6Ea0YaQ"
        />

        <VideoRow 
          views="77K"
          subs="153K"
          description="A Twitter Clone made using Next.js"
          timestamp="Streamed 2 months ago"
          channel="Sonny Sangha"
          title="🔴 Let's build Twitter 2.0 with REACT.JS! (Next.js, Sanity CMS, Typescript, SSR, Tailwind & NextAuth)"
          image="https://i.ytimg.com/an_webp/rCselwxbUgA/mqdefault_6s.webp?du=3000&sqp=CID-gJcG&rs=AOn4CLCOKKCsnrTpZSJ8CdUGYrleaCbuBA"
        />

        <VideoRow 
          views="130K"
          subs="153K"
          description="A Medium Clone made using Nextjs"
          timestamp="Streamed 6 months ago"
          channel="Sonny Sangha"
          title="🔴 Let's build Medium 2.0 with NEXT.JS! (TypeScript, Sanity CMS, React, Tailwind CSS, ISR)"
          image="https://i.ytimg.com/an_webp/I2dcpatq54o/mqdefault_6s.webp?du=3000&sqp=CPyegZcG&rs=AOn4CLDCTQQ4vwsbvy9txUD4_QkRbu82Zw"
        />
        
    </div>

  )

};

export default SearchedVideos;

