import React from 'react';
import NewAlbum from './NewAlbum';
import NewArtist from './NewArtist';
import NewSong from './NewSong';
import NewGenre from './NewGenre';

export default function Form(){

    return(
        <div>
            <div>
            <h1>Artist Form</h1>
            <NewArtist />
            </div>
            <div>
            <h1>Album Form</h1>
            <NewAlbum/>
            </div>
            <div>
                <h1>Genre Form</h1>
                <NewGenre />
            </div>
            <div>
                <h1>Song Form</h1>
                <NewSong />
            </div>
        </div>
    )
}

