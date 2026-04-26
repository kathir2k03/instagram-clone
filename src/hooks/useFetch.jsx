import { useEffect, useState } from "react"

const useFetch = (url) =>{

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() =>{
    setTimeout(() =>{
    fetch(url)
    .then((res) => {
        if(res.ok == false){
          setLoading(false)  
          setError(res.statusText)
        }
       return res.json()     
     })
    .then((result) => {
        setLoading(false)
        setData(result)
    })
    .catch((err) => setError(err))
        })
    },[])

    return [data, error, loading]
}

export default useFetch
