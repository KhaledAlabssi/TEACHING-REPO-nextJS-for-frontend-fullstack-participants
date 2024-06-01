import React from 'react'
import axios from 'axios'
import { log } from 'console'

const url = "https://jsonplaceholder.typicode.com/albums/1"
const apiData = () :{}=> {
    let data = axios(url)
        .then(i => i.data)
        .then(e => log(e))

    return data

}

function page() {
    // axios("https://jsonplaceholder.typicode.com/albums/1")
    //     .then(i => log(i.data))
    //     .catch(e => e) 
    const fetchData = async () => {
        setTimeout(() => {
            
            log(apiData())
        }, 1500);
    }

    fetchData()
    
  return (
    <div>
        <p>Data Page...</p>
    </div>
  )
}

export default page