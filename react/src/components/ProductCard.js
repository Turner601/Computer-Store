import React from 'react'

import case2 from '../media/Cases/Lian-Li-011D-Mini-Black.png'
import cpu9 from '../media/CPU/Intel_i9-10920X.png'
import drive4 from '../media/Drives/Samsung_870-EVO-1TB-SSD.png'
import gpu9 from '../media/GPU/EVGA_NVIDIA_3090-Ti-FTW3.png'
import memory2 from '../media/Memory/Corsair_Vengeance-RGB-Pro-32GB(2x16GB).png'
import motherboard8 from '../media/MotherBoard/ASUS_Z690-PLUS-TUF.png'
import fan4 from '../media/Fans/Lian-Li-UNI-Fan-AL-120-Black.jpg'
import power1 from '../media/Power/Corsair-RM750-Fully-Modular-White.jpg'
import radiator2 from '../media/Radiators/Corsair-iCUE-H100i-Elite-Capellix-240MM-White.jpg'


const ProductCard = () => {

    return (
        <main>
            <section className="product-section d-flex">
                <div className="product-div col-4 mt-5">
                    <figure className="product-item text-center">
                        <a href="./products/6"><img src={case2} alt="Computer Cases" /></a>
                        <figcaption>Computer Cases</figcaption>
                    </figure>
                </div>
                <div className="col-4 mt-5">
                    <figure className="product-item text-center">
                        <a href="./products/2"><img src={cpu9} alt="CPUs" /></a>
                        <figcaption>CPUs</figcaption>
                    </figure>
                </div>
                <div className="col-4 mt-5">
                    <figure className="product-item text-center">
                        <a href="./products/4"><img src={drive4} alt="Drives" /></a>
                        <figcaption>Drives/Storage</figcaption>
                    </figure>
                </div>
            </section>
            <section className="d-flex mt-5 mb-5">
                <div className="col-4">
                    <figure className="product-item text-center">
                        <a href="./products/1"><img src={gpu9} alt="GPUs" /></a>
                        <figcaption>GPUs</figcaption>
                    </figure>
                </div>
                <div className="col-4">
                    <figure className="product-item text-center">
                        <a href="./products/5"><img src={memory2} alt="Memory" /></a>
                        <figcaption>Memory</figcaption>
                    </figure>
                </div>
                <div className="col-4">
                    <figure className="product-item text-center">
                        <a href="./products/3"><img src={motherboard8} alt="Motherboard" /></a>
                        <figcaption>Motherboards</figcaption>
                    </figure>
                </div>
            </section>
            <section className="d-flex mt-5 mb-5">
                <div className="col-4">
                    <figure className="product-item text-center">
                        <a href="./products/7"><img src={fan4} alt="Case Fans" /></a>
                        <figcaption>Case Fans</figcaption>
                    </figure>
                </div>
                <div className="col-4">
                    <figure className="product-item text-center">
                        <a href="./products/8"><img src={power1} alt="Power Supplies" /></a>
                        <figcaption>Power Supplies</figcaption>
                    </figure>
                </div>
                <div className="col-4">
                    <figure className="product-item text-center">
                        <a href="./products/9"><img src={radiator2} alt="Computer Cases" /></a>
                        <figcaption>Water Cooling Kits</figcaption>
                    </figure>
                </div>
            </section>
        </main>
    )
}

export default ProductCard