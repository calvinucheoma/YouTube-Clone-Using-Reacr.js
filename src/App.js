import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import RecommendedVideos from './components/Recommended Videos/RecommendedVideos';
import Sidebar from './components/Sidebar/Sidebar';
import SearchedVideos from './components/SearchedVideos/SearchedVideos';
// import VideoPlayer from './components/VideoPlayer/VideoPlayer';
// import SuggestedVideosTemplate from './components/SuggestedVideosTemplate/SuggestedVideosTemplate';


function App() {

  return (

    <div className="app">

      <Router>

          <Header/>
            
            <div className="appPage">

              <Sidebar/>
              
              <Routes>
                <Route path='/' element={<RecommendedVideos/>} />
                <Route path='/search/:searchQuery' element={<SearchedVideos/>} />
                <Route path='*' element={<p style={{fontSize: "6px", marginLeft: '15px'}}>Please enter a search term or click on the YouTube logo to go back to the Home page</p>} />         
                {/* <Route path='/video/:videoId' element={<VideoPlayer/>} />
                <Route path='/suggestedVideos' element={<SuggestedVideosTemplate/>} /> */}
              </Routes>
              
            </div>

      </Router>
  
    </div>

  );

};

export default App;
