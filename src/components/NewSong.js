import React, {useState} from 'react';

export default function NewSong (){
    const [songForm, setSongForm] = useState({
        title: "",
        artist_id: "",
        album_id: "",
        genre_id: "",
        has_lyrics: "",
               
    })


    function inputChange(event){
        setSongForm({
            ...songForm,
            [event.target.name]: event.target.value
        })
    }
    // console.log(inputChange())
    
    function handleSubmit(e){
        e.preventDefault();
        fetch ('http://localhost:9292/songs', {
            method: 'POST',
            headers:{"content-type": "application/json"},
            body: JSON.stringify({
                title:songForm.title,
                artist_id: songForm.artist_id,
                album_id: songForm.album_id,
                genre_id: songForm.genre_id, 
                has_lyrics: songForm.genre_id
            })
            }
        )
    }
    return (
        <form onSubmit = {handleSubmit}>
            <div className="row mb-3">
                <label className="col-sm-2">Song Name</label>
                <div className="col-sm-10">
                <input
                    className="form-control" 
                    name="title"
                    placeholder="Enter Song Name"
                    value={songForm.title}
                    onChange={ inputChange }
                    required={true}
                /> 
                </div>
            </div>
                <div className="row mb-3">
                <label className="col-sm-2">Artist ID:</label>
                <div className="col-sm-10">
                <input
                    className="form-control" 
                    name="artist_id"
                    placeholder="Enter Song artist_id"
                    value={songForm.artist_id}
                    onChange={ inputChange }
                    required={true}
                /> 
                </div>
                </div>
                <div className="row mb-3">
                <label className="col-sm-2">Album ID:</label>
                <div className="col-sm-10">                
                <input
                    className="form-control" 
                    name="album_id"
                    placeholder="Enter Song album_id"
                    value={songForm.album_id}
                    onChange={ inputChange }
                    required={true}
                /> 
                </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2">Genre ID:</label>
                    <div className="col-sm-10">
                    <input
                        className="form-control" 
                        name="genre_id"
                        placeholder="Enter Song genre_id"
                        value={songForm.genre_id}
                        onChange={ inputChange }
                        required={true}
                    /> 
                    </div>
                </div> 
                <div className="row mb-3">
                    <label className="col-sm-2">Has Lyrics:</label>
                    <div className="col-sm-10">
                    <input
                        className="form-control" 
                        name="has_lyrics"
                        placeholder="Enter Song has_lyrics"
                        value={songForm.has_lyrics}
                        onChange={ inputChange }
                        required={true}
                    /> 
                    </div>
                </div>           
            <input type="submit" value="Add Song" />
        </form>
    )

}