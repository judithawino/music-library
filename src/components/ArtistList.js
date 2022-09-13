import React, {useState, useEffect} from 'react';
import Artist from './Artist';


export default function ArtistList(){
    const [artist, setArtist] = useState([]);

    function handleArtistFetch(){
        fetch ('https://trendy1-music-librabry.herokuapp.com/artists')
        .then ((resp)=>resp.json())
        .then ((data)=>{
            setArtist(data);
        })
    }
    useEffect(handleArtistFetch, [])

    const artistList = artist.map((artists)=>(
        <Artist key={artists.id}
        artistObject = {artists}
        />
    ))
    return (
        <div>
            <section>
            <h1>Trending Artists</h1>
            {artistList} 
            </section>           
                       
        </div>
    );
    
}
