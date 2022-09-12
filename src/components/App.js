import './App.css';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import ArtistList from './ArtistList';
// import AlbumList from './AlbumList';
// import GenreList from './GenreList';
// import SongList from './SongList';

function App() {
  return (
    <div className="App">
      <Router>
        <div className='navbar'>
          <h1 className='navbar-brand'>Music Library</h1>
          <Link className="nav-link active" aria-current="page" to="/">Artist</Link>
          <Link className="nav-link active" to="/album">Album</Link>
          <Link className="nav-link active" to="/songs">Songs</Link>                           
        </div>
        <Routes>
          <Route exact path="/" element={<ArtistList />}/>
          {/* <Route exact path="/about" element={<About />}/>
          <Route excat path="/services" element={<Services />}/> 
          <Route excat path="/feedbacks" element={<FeedbackCard />}/> 
          <Route excat path="/gallery" element={<GalleryList />}/> 
          <Route exact path="/contact" element={<Contact />} />       */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
