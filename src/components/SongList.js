import React, {useState, useEffect} from 'react';
import Song from './Song';
// import NewSong from './NewSong';

export default function SongList(){
    const [song, setSong] = useState([]);

    function handleSongFetch(){
        fetch ('http://localhost:9292/songs')
        .then ((resp)=>resp.json())
        .then ((data)=>{
            setSong(data);
        })
    }
    useEffect(handleSongFetch, [])

    const songList = song.map((songs)=>(
        <Song key={songs.id}
        songObject = {songs}
        />
    ))
    return (
        <div>
            <section>
            <h1>Trending songs and Genres</h1>
            {songList} 
            </section>
            {/* <NewSong /> */}
                       
        </div>
    );
    
}
