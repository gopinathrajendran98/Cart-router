import React from "react"
import { useNavigate } from "react-router-dom";

const Details = () => {
    const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
    }
    
    return (
        <>
         <p>What I like about Bonfire is the ease of creating 
        t-shirt designs using the design tool and then selling
         them online. I’m able to upload my own designs into 
         Bonfire and easily create items for sale </p>
         <button onClick={goBack}>Back</button>
         </>

    )
    

}

export default Details;