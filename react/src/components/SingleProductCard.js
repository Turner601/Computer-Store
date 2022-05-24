import React from 'react'

const SingleProductCard = (props) => {
    const productData = props.data
    console.log(productData)
    
    return (
            <figure className='single-product-section m-5'>
                <div className='row'>
                    <div className='col-2 single-product-img'>
                        <img src={productData.img} alt="placeholder img" className="img-fluid product-img" />
                    </div>
                    <div className='col-10 single-product-info'>
                        <figcaption className='product-name fw-bold'><u>{productData.product_name}</u></figcaption>
                        <figcaption className='product-description'>{productData.product_description}</figcaption>
                    </div>
                </div>
            </figure>
    )
}

export default SingleProductCard