import { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
      fetch(url)
          .then(data => {
              return data.json()
      })
          .then(data => {
              setData(data.products)            
          })
          .catch(err => {
              console.log(err);
          })
          .finally(() => {
            setLoading(false)
          })
      }, [url])

      return {data, loading}
}
export default useFetch