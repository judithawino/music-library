import React from 'react';

export default function Song({songObject}){
    const {title, has_lyrics, artist, genres} = songObject

    return (
    <div>
      <h2>{title}</h2>
      <p>Lyrics: {has_lyrics}</p>       
      <h4>Artists</h4>
      <ul>
      {artist.map((artist) => (
            <li key = {artist.id}>{artist.name}</li>
        ))}                
      </ul>
      <h3>Genres</h3> 
      <ul>
      {genres.map((genre) => (
            <li key = {genre.id}>{genres.genre_name}</li>
        ))} 
      </ul>  
    </div>
  );
    

}