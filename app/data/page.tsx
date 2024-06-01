import React from 'react'
import axios from 'axios'
import { error, log } from 'console'

const url = "https://jsonplaceholder.typicode.com/albums/1"
// const apiData = () => {
//     let data = axios(badURL)
//         .then(i => {
//             log(i.data)
//         })
//         .catch(e => 
//             {throw new Error("failed")}
//         )
// }
const badURL = "https://jsonplaceholder.typicode.com/albumsssssss/1"
const apiData = async () => {
    const respose = await fetch(badURL)

    if(!respose.ok){
        throw new Error("apiData error!!!")
    }

    const data = await respose.json()
    return data
}

async function page () {
    // axios("https://jsonplaceholder.typicode.com/albums/1")
    //     .then(i => log(i.data))
    //     .catch(e => e) 
    // await apiData()
    
  return (
    <div>
        <p>Data Page...</p>
    </div>
  )
}

export default page