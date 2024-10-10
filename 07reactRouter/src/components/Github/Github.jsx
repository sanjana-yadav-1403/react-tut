import React, { useEffect, useState } from "react";

function Github(){

    const [data, setData] = useState([])
    useEffect(() => {
     fetch('https://api.github.com/users/sanjana-yadav-1403')
     .then(response => response.json())
     .then(data => {
        console.log(data);
        setData(data)
     })
    }, [])

    return (
        <div className='text-3xl bg-gray-600 text-center m-4 text-white p-4'>Github Followers: {data.followers}</div>
    )
}

export default Github