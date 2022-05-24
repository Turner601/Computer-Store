import React from "react"

const Carousel =()=> {
    return (
        <section className="carousel container">
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active d-flex justify-content-center">
                        <img src="/media/Cases/Corsair-4000D-Airflow-Mid-White.png" className="carousel-image" alt="Computer Case" />
                        <div className="carousel-caption">
                            <h5 className="carousel-caption-header">Computer Cases</h5>
                            <p className="carousel-caption-text">With a variety of cases ranging from mini to full, you can fit everything you need or everything you want.</p>
                        </div>
                    </div>
                    <div className="carousel-item d-flex justify-content-center">
                        <img src="/media/CPU/Intel_i9-10920X.png" className="carousel-image" alt="CPU" />
                        <div className="carousel-caption">
                            <h5 className="carousel-caption-header">Gaming or editing videos?</h5>
                            <p className="carousel-caption-text">Whether you are on a budget or need something to handle your workload, we have it.</p>
                        </div>
                    </div>
                    <div className="carousel-item d-flex justify-content-center">
                        <img src="/media/GPU/ASUS_NVIDIA_3060-ROG.png" className="carousel-image" alt="GPU" />
                        <div className="carousel-caption">
                            <h5 className="carousel-caption-header">Want the best of gaming?</h5>
                            <p className="carousel-caption-text">Want to have the best FPS or best quality image? Don't skimp out here, we've got you covered.</p>
                        </div>
                    </div>
                    <div className="carousel-item d-flex justify-content-center">
                        <img src="/media/Radiators/Corsair-iCUE-H150i-Elite-Capellix-360MM.jpg" className="carousel-image" alt="Radiator" />
                        <div className="carousel-caption">
                            <h5 className="carousel-caption-header">Water Cooling</h5>
                            <p className="carousel-caption-text">Gaming or editing videos can generate a lot of heat so keep things cool with a CPU water cooler</p>
                        </div>
                    </div>
                </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
            </div>
        </section>
    )
}

export default Carousel