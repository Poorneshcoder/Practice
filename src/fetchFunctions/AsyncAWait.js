import React, { useEffect, useState } from "react";

const AsynFunction = () => {
    const [name, setName] = useState([]);

    useEffect(()=> {
        const fetchData = async () => {
            try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users",{
                method:"GET"
            })
            const data = await response.json();
            setName(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
        
    },[])
    return(
        <div>
            <hr></hr>
            AsynFunction
        <hr></hr>
            {name.map((item,index)=> (<li key={index}>{item.name}</li>))}
        </div>
    )
}

export default AsynFunction;