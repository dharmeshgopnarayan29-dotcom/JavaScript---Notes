
import { useEffect } from 'react'
import { useState } from 'react'
// import './App.css'
// import Card from './Components/Card'



// function App() {
//   const [product, setProduct] = useState([])

//   async function getData() {
//     try {
//       const res = await fetch('https://api.restful-api.dev/objects') 
//       const data = await res.json()
//       setProduct(data)
//     } catch (error) {
//       console.error("Error :", error)
//     }
      
//   }

//   useEffect(() => {
//     getData()
//   })
  

//   return (
//     <>
//      <Card data2={product}/>
//     </>
//   )
// }


import axios from 'axios'
import Card from './Components/Card'
import { useEffect } from 'react'
import { useState } from 'react'

function App() {

  const [totalProducts, setTotalProducts] = useState(0)

  async function getProducts() {
    // const res = axios('https://dummyjson.com/products')
    try {
      const
      const res = await axios.get(`https://dummyjson.com/products?limit=30&skip=${30}`)
      console.log(res);
      if(res.status === 200) {
        return res.data
    } else {
      throw res;
    }

  } catch (error) {
    console.log(error)
  }
}
    
    useEffect(() => {
      const data = getProducts()
      setTotalProducts(data.total)
    }, [])

  return (
    <>
    <h2>Axios</h2>
    <Card 
      image=
    />
    <button onClick={getProducts}>Get Product</button>
    
    </>
  )
}

export default App
