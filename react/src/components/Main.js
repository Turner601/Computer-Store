import React from "react"
import Carousel from "./Carousel"

const Main = () => {
    return (
        <main>
            <h2 className="main-header text-center mb-5 fw-bold">Welcome to our site where we strive to meet all your computer part needs</h2>
            <Carousel />
            <section className="section-parts container-fluid mt-5">
                <div className="featured-items-list">
                    <h2 className="text-center mb-5 feat-header fw-bold">Featured Items</h2>
                    <div className="d-flex justify-content-evenly">
                        <figure className="featured-items">
                            <img src="/media/Cases/Lian-Li-011D-Mini-Black.png" alt="Computer Case" className="img-fluid feat-image" />
                                <figcaption className="text-center">Lian Li 011D Mini</figcaption>
                        </figure>
                        <figure className="featured-items">
                            <img src="/media/CPU/Intel_i7-12700K.png" alt="Computer Case" className="img-fluid feat-image" />
                                <figcaption className="text-center">Intel i7-12700K</figcaption>
                        </figure>
                        <figure className="featured-items">
                            <img src="/media/Drives/Samsung_970-EVO-2TB-M2NVMe.png" alt="Computer Case" className="img-fluid feat-image" />
                                <figcaption className="text-center">Samsung 970 EVO 2TB</figcaption>
                        </figure>
                    </div>
                </div>
                <div className="featured-items-list">
                    <div className="d-flex justify-content-evenly">
                        <figure className="featured-items">
                            <img src="/media/Memory/Corsair_Vengeance-RGB-Pro-32GB(2x16GB).png" alt="Computer Case" className="img-fluid feat-image" />
                                <figcaption className="text-center">Corsair Vengeance 32GB</figcaption>
                        </figure>
                        <figure className="featured-items">
                            <img src="/media/MotherBoard/ASUS_Z690-ROG-Maximus.png" alt="Computer Case" className="img-fluid feat-image" />
                                <figcaption className="text-center">ASUS Z690 Maximus</figcaption>
                        </figure>
                        <figure className="featured-items">
                            <img src="/media/GPU/EVGA_NVIDIA_3090-Ti-FTW3.png" alt="Computer Case" className="img-fluid feat-image" />
                                <figcaption className="text-center">NVIDIA 3090 Ti FTW3</figcaption>
                        </figure>
                    </div>
                </div>
            </section>
            <section className="customer-builds mt-5 d-none d-xl-none d-xxl-block">
                <h3 className="text-center fw-bold">Send us a picture of your custom build and have it featured here</h3>
                <div className="pic-ctn">
                    <img src="/media/CustomerBuilds/Custom1.jpg" alt="Customer build" className="pic img-fluid" />
                    <img src="/media/CustomerBuilds/Custom2.jpg" alt="Customer build" className="pic img-fluid" />
                    <img src="/media/CustomerBuilds/Custom3.jpg" alt="Customer build" className="pic img-fluid" />
                    <img src="/media/CustomerBuilds/Custom4.jpg" alt="Customer build" className="pic img-fluid" />
                    <img src="/media/CustomerBuilds/Custom5.jpg" alt="Customer build" className="pic img-fluid" />
                </div>
            </section>
            <section className="test-container container-fluid">
                <div className="test-section container">
                    <div className="test-item">
                        <h3 className="text-center testimonials-header mb-5 fw-bold">What others have to say about us...</h3>
                    </div>
                    <div className="test-item">
                        <p className="text-center">"Hands down the best place to get your computer parts from. If you don't see what you need they will surely get it. The prices are hard to beat and if they are, they will beat that price you found. Will be coming back for sure" -<span className="fw-bold">Billy</span></p>
                    </div>
                    <div className="test-item">
                        <p className="text-center">"I mean what's not to like about this site? If you want to build your dream machine then this is the site to get everything you need. No need to go anywhere else. Tell all my friends about this site" -<span className="fw-bold">Jill</span></p>
                    </div>
                    <div className="test-item">
                        <p className="text-center">"Someone recommended this site to me as I was looking to build not only a gaming setup but also have a seperate server/storage unit. The customer service is beyond excellent and helped me in every way. They didn't have a few things I wanted but that didn't stop them from getting it and in a timely manner. I will be back real soon when it comes time to update my machines." -<span className="fw-bold">Andrew</span></p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Main