import React, {useState, useEffect} from 'react';
import Song from './Song';


export default function SongList(){
    const [song, setSong] = useState([]);

    function handleSongFetch(){
        fetch ('https://trendy1-music-librabry.herokuapp.com/songs')
        .then ((resp)=>resp.json())
        .then ((data)=>{
            setSong(data);
        })
    }
    useEffect(handleSongFetch, [])

    function handleDelete(deletedSong) {
        const newSongList=song.filter((song)=>
        song.id!==deletedSong.id);
        setSong(newSongList);
      }

    const songList = song.map((songs)=>(
        <Song key={songs.id}
        songObject = {songs}
        onDelete={handleDelete}
        />
    ))
    return (
        <div>
            <section>
            <h1>Trending songs and Genres</h1>
            {songList} 
            </section>          
                       
        </div>
    );
    
}
