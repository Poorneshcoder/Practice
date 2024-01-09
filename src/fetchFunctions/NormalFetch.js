import React, { useEffect, useState } from 'react'

const NormalFetch = () => {
    const [name, setName] = useState([]);
    useEffect(()=>{
        const fetechedData = ()=>{
            fetch("https://jsonplaceholder.typicode.com/users",{
                method:"GET"
            }).then(res=>res.json()).then(data=>setName(data))
        }
        fetechedData();
    },[])
  return (
    <div>
         <hr></hr>
      Normal fetch!
      <hr></hr>
      {name.map((item, idx)=>(<li key={idx}>{item.name}</li>))}
    </div>
  )
}

export default NormalFetch
