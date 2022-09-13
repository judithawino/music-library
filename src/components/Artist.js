import React from 'react';

export default function Artist({artistObject}){
    const {id, name,birth_date, hometown, country, albums} = artistObject

    return (
    <div>
      {/* <h2>{name}</h2>
      <p>Birth Date: {birth_date}</p>
      <p>Hometown: {hometown}</p>
      <p>Country: {country}</p> 
      <h4>Albums</h4>
      <ul>
      {albums.map((album) => (
            <li key = {album.id}>{album.album_name}</li>
        ))}        
      </ul>  */}
      <table  className="table table-primary">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Birth Date</th>
            <th scope="col">Hometown</th>
            <th scope="col">Country</th>
            <th scope="col">Albums</th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-secondary">
            <th scope="row">{id}</th>
            <td >{name}</td>
            <td>{birth_date}</td>
            <td>{hometown}</td>
            <td>{country}</td>
            <td>{albums.map((album) => (
                <li key = {album.id}>{album.album_name}</li>
                ))}        
            </td>
          </tr>
          </tbody>
          </table>
          
    </div>
  );
    

}