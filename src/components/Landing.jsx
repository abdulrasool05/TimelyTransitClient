import React from "react"

export default function Landing(props){

    const [formData, setFormData] = React.useState(
        {
            busNo: "",
            stopNo: ""
        }   
    )

    function handleChange(event){
        const {name, value} = event.target

        setFormData(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        fetch("https://timelytransitbackend.onrender.com/buses", {
            method: "POST",
            headers:{
                "Content-type": "application/json"
            },
            body: JSON.stringify(formData)


        })
        .then(data => props.toggleContent())
    }
    
    return (
        
        <main className="landingPage">
            <form className="landingForm" onSubmit={handleSubmit}>
                
                <h1 className="landingTitle">Timely Transit</h1>
                
                
                <label for="busNum">Bus Number</label>
                <input
                    className="busInputs"
                    type="text"
                    placeholder="Ex: 97"
                    name="busNo"
                    onChange={handleChange}
                    value={formData.busNo}
                    id="busNum"
                />

                <label for="stopNum">Stop Number</label>
                <input
                    className="busInputs"
                    type="text"
                    placeholder="Ex: 8366"
                    name="stopNo"
                    onChange={handleChange}
                    value={formData.stopNo}
                    id= "stopNum"
                />

                <button onClick={handleSubmit} className="formSubmit">Submit</button>
                <div className="note">
                    <p><strong>NOTE:</strong> Since this is being hosted on a free plan, after periods of inactivity it takes 50 seconds to send a request to the server </p>
                </div>
            </form>
            
        </main>
    )
}
