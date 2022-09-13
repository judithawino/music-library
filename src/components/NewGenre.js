import React, {useState} from 'react';

export default function NewGenre (){
    const [genreForm, setGenreForm] = useState({
        genre_name: "",
        created_at: ""
                       
    })


    function inputChange(event){
        setGenreForm({
            ...genreForm,
            [event.target.name]: event.target.value
        })
    }
    // console.log(inputChange())
    
    function handleSubmit(e){
        e.preventDefault();
        fetch ('http://localhost:9292/genres', {
            method: 'POST',
            headers:{"content-type": "application/json"},
            body: JSON.stringify({
                genre_name:genreForm.genre_name,
                created_at: genreForm.created_at                
            })
            }
        )
    }
    return (
        
        <form onSubmit = {handleSubmit}>
            <div className="row mb-3">
                <label className="col-sm-2">Genre Name</label>
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
                    name="genre_name"
                    placeholder="Enter Genre Name"
                    value={genreForm.genre_name}
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
                    name="created_at"
                    placeholder="Enter genre created_at in the format of 'YYYY-MM-DD"
                    value={genreForm.created_at}
                    onChange={ inputChange }
                    required={true}
                /> 
                </div>
                </div>                
                
            <input type="submit" value="Add Genre" />
        </form>
        
    )

}