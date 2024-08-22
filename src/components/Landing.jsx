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

                <input
                    className="busInputs"
                    type="text"
                    placeholder="Bus Number"
                    name="busNo"
                    onChange={handleChange}
                    value={formData.busNo}
                />
    
                <input
                    className="busInputs"
                    type="text"
                    placeholder="Stop Number"
                    name="stopNo"
                    onChange={handleChange}
                    value={formData.stopNo}
                />

                <button onClick={handleSubmit} className="formSubmit">Submit</button>
            </form>
        </main>
    )
}
