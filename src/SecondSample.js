 import { useState, useEffect } from "react"
import axios from "axios"

// Hello mrinal
const SecondComponent = () => {
    function fetchData() {
        axios.get("https://hai98th.herokuapp.com/get_course/").then((res) => {
            setData(res.data)
            console.log(res.data)
        }).catch(err => {

        })
    }

    // this line means fetchData always run 1 time
    useEffect(fetchData, [])

    const [data, setData] = useState([1, 2, 3])

    return <div className="text-center m-5">
        {
            data.map( (datum, id) =>{
                return <div className="border border-dark m-5" key={id}>

                    <p className="pt-4">Title: {datum.title}</p>
                    <p>Content: {datum.content}</p>
                    <p>Id:{datum.id}</p>
                    <p>Price:{datum.price}</p>
                </div>
            })
        }
    </div>
}

export default SecondComponent
