
import React from 'react'

const fetchData = async (id : string) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    console.log(response);
    
    return response.json()
}

async function page(
    {params} : any
   ){

    const user = await fetchData( params.id)
    console.log(user);
    

    return (

        <div className="card w-96 bg-base-100 shadow-xl"><div className="card-body">
                <h2 className="card-title">{user && user.name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>


    )
}

export default page