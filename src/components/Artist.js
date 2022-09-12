import React from 'react';

export default function Artist({artistObject}){
    const {name,birth_date, hometown, country, albums} = artistObject

    return (
    <div>
      <h2>{name}</h2>
      <p>Birth Date: {birth_date}</p>
      <p>Hometown: {hometown}</p>
      <p>Country: {country}</p> 
      <h4>Albums</h4>
      <ul>
      {albums.map((album) => (
            <li>{album.album_name}</li>
        ))}        
      </ul>   
    </div>
  );
    

}