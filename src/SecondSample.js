import { useState, useEffect } from "react"
import axios from "axios"


const SecondComponent = () => {
    function fetchData(){
        axios.get("https://hai98th.herokuapp.com/get_course/").then((res) => {
            setData(res.data)
        }).catch(err => {

        })
    }

    // this line means fetchData always run 1 time
    useEffect( fetchData, [] ) 

    const [data, setData] = useState([1,2,3])

    return <div style={{marginTop: "100px", textAlign: "center"}}>
        <div style={{border: "1px solid black"}}>
            <p>Title: {data[0].title}</p>
            <p>Content: {data[0].content}</p>
        </div>
        Hello world
    </div>
}

export default SecondComponent
