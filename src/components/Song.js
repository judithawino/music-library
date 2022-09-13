import React from 'react';

export default function Song({songObject}){
    const {title, artist, id} = songObject
    

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
          </tr>
          </tbody>
          </table>
        
        )
    //     <table className="table">
    //     <thead>
    //       <tr>
    //         <th scope="col">#</th>
    //         <th scope="col">Artist</th>
    //         <th scope="col">Song</th>
    //         <th scope="col">Genre</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       <tr>
    //         <th scope="row">1</th>
    //         <td key = {artist.id}>{artist.name}</td>
    //         <td>{title}</td>
    //         <td>{artist.genres.map((genre) => (
    //                 <li key = {genre.id} class="card-text">{genre.genre_name}</li>
    //                 ))} </td>
    //       </tr>
    //       <tr>
    //         <th scope="row">2</th>
    //         <td>Jacob</td>
    //         <td>Thornton</td>
    //         <td>@fat</td>
    //       </tr>
    //       <tr>
    //         <th scope="row">3</th>
    //         <td colspan="2">Larry the Bird</td>
    //         <td>@twitter</td>
    //       </tr>
    //     </tbody>
    //   </table>
    {/* <div class="card">
            <div class="card-body">
                <h2 class="card-title">Song: {title}</h2>
                <p key = {artist.id} class="card-text">Artist: {artist.name}</p>
            </div>
        </div>
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">Artist's Genres</h3>
                <ul>        
                    {artist.genres.map((genre) => (
                    <li key = {genre.id} class="card-text">{genre.genre_name}</li>
                    ))} 
                </ul> 
            </div>
        </div> */}

}