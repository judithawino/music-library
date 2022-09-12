import React from 'react';

export default function NewArtist (){
    const [artistForm, setArtistForm] = useState({
        name:"",
        birth_date: "",
        hometown: "",
        country: ""        
    })

    function inputChange (event){
        setArtistForm({
            ...artistForm,
            [event.target.name]:event.target.value
        })
    }
    function handleArtistPost(e){
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
        <form onSubmit = { handleArtistPost }>
            <div>
                <label>Artist Name</label>
                <div>
                <input
                    className="form-control" 
                    name="Artist Name"
                    placeholder="Enter Artist Name"
                    value={artistForm.name}
                    onChange={ inputChange}
                    required={true}
                /> 
                </div>
                <label>Birth Date</label>
                <div>
                <input
                    className="form-control" 
                    name="Birth Date"
                    placeholder="Birth Date format yyyy-mm-dd"
                    value={artistForm.birth_date}
                    onChange={ inputChange}
                    required={true}
                /> 
                </div>
                <label>Artist Hometown</label>
                <div>
                <input
                    className="form-control" 
                    name="Artist Hometown"
                    placeholder="Enter Artist Hometown"
                    value={artistForm.hometown}
                    onChange={ inputChange}
                    required={true}
                /> 
                </div>
                <label>Artist Country</label>
                <div>
                <input
                    className="form-control" 
                    name="Artist Country"
                    placeholder="Enter Artist Country"
                    value={artistForm.country}
                    onChange={ inputChange}
                    required={true}
                /> 
                </div>
            </div>
            <input type="submit" value="Add Artist" />
        </form>
    )

}