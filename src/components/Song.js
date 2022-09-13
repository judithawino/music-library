import React from 'react';

export default function Song({songObject, onDelete}){
    const {title, artist, id} = songObject    

    function handleDeleteClick() {
        fetch(`https://trendy1-music-librabry.herokuapp.com/songs/${songObject.id}`, {
          method: "DELETE",
        })
          .then((r) => r.json())
          .then(() => onDelete(songObject));
      }
    

    return (
    <table  className="table table-primary">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Artist</th>
            <th scope="col">Song</th>
            <th scope="col">Genre</th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-secondary">
            <th scope="row">{id}</th>
            <td key = {artist.id}>{artist.name}</td>
            <td>{title}</td>
            <td>{artist.genres.map((genre) => (
                    <li key = {genre.id} >{genre.genre_name}</li>
                    ))} </td>
            <td><button className="btn btn-primary" type="button" style={{background:'#27104e', color:'#FFFFFF'}} onClick={handleDeleteClick}>Delete</button></td>        
          </tr>
          
          </tbody>
          
          </table>
        
        )

}