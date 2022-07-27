import React, {useState} from 'react';
import './Header.css';
import {VideoCallSharp, Menu, Search, Apps, Notifications} from '@mui/icons-material';
import {Avatar} from '@mui/material';
import {Link} from 'react-router-dom';


const Header = () => {

  const [inputSearch, setInputSearch] = useState('');

  return (
    
    <div className='header'>

        <div className="headerLeft">
            <Menu className='headerMenu'/>
            <Link to='/'>
              <img 
                className='headerLogo' 
                src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" 
                alt="YouTube Logo" 
              />
            </Link> 
        </div>

        <div className="headerInput">
            <input 
              type='text' 
              placeholder='Search' 
              value={inputSearch} 
              onChange={(e) => setInputSearch(e.target.value)} 
            />
            <Link to={`/search/${inputSearch}`}> <Search className='headerSearch'/> </Link>
            
        </div>

        <div className="headerIcons">
            <VideoCallSharp className='headerIcon'/>
            <Apps className='headerIcon'/>
            <Notifications className='headerIcon'/>
            <Avatar className='headerAvatar' alt="CU" src="https://avatars.githubusercontent.com/u/76457560?s=400&u=6235cb55ca746e5a5e1a70af24ca5f5d0f503d7f&v=4"  />
        </div>


    </div>

  )

};

export default Header;