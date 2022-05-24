import React from 'react'
import { useParams, Outlet } from 'react-router-dom'
import SingleProductCard from './SingleProductCard'

const SingleProducts = () => {
    const [productData, setProductData] = React.useState([])
    const params = useParams()
    
    React.useEffect(() => {
        fetch(`http://localhost:3001/api/product/type/${params.id}`)
        .then(res => res.json())
        .then(res => setProductData(res))
    }, [])

    const productElements = productData.map(product => {
        return (
            <SingleProductCard 
                data={product}
            />
        )
    })

    return (
        <main className="product-list">
            <div className="container">
                <div className='row'>
                    {productElements}
                </div>
            </div>
            <Outlet />
        </main>
    )
}

export default SingleProducts