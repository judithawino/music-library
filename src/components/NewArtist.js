import React, {useState} from 'react';

export default function NewArtist (){
    const [artistForm, setArtistForm] = useState({
        name: "",
        birth_date: "",
        hometown: "",
        country: "",        
    })


    function inputChange(event){
        setArtistForm({
            ...artistForm,
            [event.target.name]: event.target.value
        })
    }
    // console.log(inputChange())
    
    function handleSubmit(e){
        e.preventDefault();
        fetch ('http://localhost:9292/artists', {
            method: 'POST',
            headers:{"content-type": "application/json"},
            body: JSON.stringify({
                name:artistForm.name,
                birth_date: artistForm.birth_date,
                hometown: artistForm.hometown,
                country: artistForm.country  
            })
            }
        )
    }
    return (
        <form onSubmit = {handleSubmit}>
            <div className="row mb-3">
                <label className="col-sm-2">Artist Name</label>
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
                    name="name"
                    placeholder="Enter Artist Name"
                    value={artistForm.name}
                    onChange={ inputChange }
                    required={true}
                /> 
                </div>
            </div>
                <div className="row mb-3">
                <label className="col-sm-2">Birth Date</label>
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
                    name="birth_date"
                    placeholder="Birth Date format yyyy-mm-dd"
                    value={artistForm.birth_date}
                    onChange={ inputChange }
                    required={true}
                /> 
                </div>
                </div>
                <div className="row mb-3">
                <label className="col-sm-2">Artist Hometown</label>
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
                    name="hometown"
                    placeholder="Enter Artist Hometown"
                    value={artistForm.hometown}
                    onChange={ inputChange }
                    required={true}
                /> 
                </div>
                </div>
                <div className="row mb-3">
                <label className="col-sm-2">Artist Country</label>
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
                    name="country"
                    placeholder="Enter Artist Country"
                    value={artistForm.country}
                    onChange={ inputChange }
                    required={true}
                /> 
                </div>
                </div>            
            <input type="submit" value="Add Artist" />
        </form>
    )

}