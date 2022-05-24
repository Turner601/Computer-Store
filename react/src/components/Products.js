import React from 'react'
import ProductCard from './ProductCard'

const Products = (props) => {
    console.log(props)
    const productData = props.props
    const productElements = productData.map(product => {
        return (
            <ProductCard 
                data={product}
            />
        )
    })

    return (
        <main className='container'>
            <section className="product-section d-flex">
                <div className="product-div col-4 mt-5">
                    <figure className="product-item text-center">
                        <a href="./products/6"><img src={'/media/Cases/Lian-Li-011D-Mini-Black.png'} alt="Computer Cases" /></a>
                        <figcaption>Computer Cases</figcaption>
                    </figure>
                </div>
                <div className="col-4 mt-5">
                    <figure className="product-item text-center">
                        <a href="./products/2"><img src='/media/CPU/Intel_i9-10920X.png' alt="CPUs" /></a>
                        <figcaption>CPUs</figcaption>
                    </figure>
                </div>
                <div className="col-4 mt-5">
                    <figure className="product-item text-center">
                        <a href="./products/4"><img src='/media/Drives/Samsung_870-EVO-1TB-SSD.png' alt="Drives" /></a>
                        <figcaption>Drives/Storage</figcaption>
                    </figure>
                </div>
            </section>
            <section className="d-flex mt-5 mb-5">
                <div className="col-4">
                    <figure className="product-item text-center">
                        <a href="./products/1"><img src='/media/GPU/EVGA_NVIDIA_3090-Ti-FTW3.png' alt="GPUs" /></a>
                        <figcaption>GPUs</figcaption>
                    </figure>
                </div>
                <div className="col-4">
                    <figure className="product-item text-center">
                        <a href="./products/5"><img src='/media/Memory/Corsair_Vengeance-RGB-Pro-32GB(2x16GB).png' alt="Memory" /></a>
                        <figcaption>Memory</figcaption>
                    </figure>
                </div>
                <div className="col-4">
                    <figure className="product-item text-center">
                        <a href="./products/3"><img src='/media/MotherBoard/ASUS_Z690-PLUS-TUF.png' alt="Motherboard" /></a>
                        <figcaption>Motherboards</figcaption>
                    </figure>
                </div>
            </section>
            <section className="d-flex mt-5 mb-5">
                <div className="col-4">
                    <figure className="product-item text-center">
                        <a href="./products/7"><img src='/media/Fans/Lian-Li-UNI-Fan-AL-120-Black.jpg' alt="Case Fans" /></a>
                        <figcaption>Case Fans</figcaption>
                    </figure>
                </div>
                <div className="col-4">
                    <figure className="product-item text-center">
                        <a href="./products/8"><img src='/media/Power/Corsair-RM750-Fully-Modular-White.jpg' alt="Power Supplies" /></a>
                        <figcaption>Power Supplies</figcaption>
                    </figure>
                </div>
                <div className="col-4">
                    <figure className="product-item text-center">
                        <a href="./products/9"><img src='/media/Radiators/Corsair-iCUE-H100i-Elite-Capellix-240MM-White.jpg' alt="Computer Cases" /></a>
                        <figcaption>Water Cooling Kits</figcaption>
                    </figure>
                </div>
            </section>
        </main>
    )
}

export default Products