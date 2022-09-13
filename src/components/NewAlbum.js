import React, {useState} from 'react';

export default function NewAlbum (){
    const [albumForm, setAlbumForm] = useState({
        album_name: "",
        artist_id: "",
        launched_at: ""               
    })


    function inputChange(event){
        setAlbumForm({
            ...albumForm,
            [event.target.name]: event.target.value
        })
    }
    // console.log(inputChange())
    
    function handleSubmit(e){
        e.preventDefault();
        fetch ('http://localhost:9292/albums', {
            method: 'POST',
            headers:{"content-type": "application/json"},
            body: JSON.stringify({
                album_name:albumForm.album_name,
                artist_id: albumForm.artist_id,
                launched_at: albumForm.launched_at
            })
            }
        )
    }
    return (
        <form onSubmit = {handleSubmit}>
            <div className="row mb-3">
                <label className="col-sm-2">Album Name:</label>
                <div className="col-sm-10">
                <input
                    style={{
                        outline: 1,
                        background: "#001920",
                        color: "#c5c8c8",
                        width: "100%",
                        border: 0,
                        margin: "0 0 15px",
                        padding: "15px",
                        boxSizing: "border-box",
                        fontSize: "14px"}}
                    className="form-control" 
                    name="album_name"
                    placeholder="Enter Album Name"
                    value={albumForm.album_name}
                    onChange={ inputChange }
                    required={true}
                /> 
                </div>
            </div>
                <div className="row mb-3">
                <label className="col-sm-2">Artist ID:</label>
                <div className="col-sm-10">
                <input
                    style={{
                        outline: 1,
                        background: "#001920",
                        color: "#c5c8c8",
                        width: "100%",
                        border: 0,
                        margin: "0 0 15px",
                        padding: "15px",
                        boxSizing: "border-box",
                        fontSize: "14px"}}
                    className="form-control" 
                    name="artist_id"
                    placeholder="Enter album artist_id"
                    value={albumForm.artist_id}
                    onChange={ inputChange }
                    required={true}
                /> 
                </div>
                </div>
                <div className="row mb-3">
                <label className="col-sm-2">Launch Date:</label>
                <div className="col-sm-10">                
                <input                
                    className="form-control" 
                    style={{
                    outline: 1,
                    background: "#001920",
                    color: "#c5c8c8",
                    width: "100%",
                    border: 0,
                    margin: "0 0 15px",
                    padding: "15px",
                    boxSizing: "border-box",
                    fontSize: "14px"}}
                    name="launched_at"
                    placeholder="Enter album launched_at in the format of YYYY-MM-DD"
                    value={albumForm.launched_at}
                    onChange={ inputChange }
                    required={true}
                /> 
                </div>
                </div>
                
            <input type="submit" value="Add Album" />
        </form>
    )

}