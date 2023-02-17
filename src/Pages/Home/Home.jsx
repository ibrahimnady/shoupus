import React from 'react'
import '../../Styles/Home.css'
import photo_1 from "../../images/carousel-1.jpg"
import photo_2 from "../../images/carousel-2.jpg"
import photo_3 from "../../images/carousel-3.jpg"
import photo_offer1 from "../../images/offer-1.jpg"
import photo_offer2 from "../../images/offer-2.jpg"
export default function Home() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8 mb-2 mt-2">
                        <div id="carouselExampleCaptions" className="carousel slide " data-bs-ride="false">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={photo_1} className="d-block w-100" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>First slide label</h5>
                                        <p>Some representative placeholder content for the first slide.</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={photo_2} className="d-block w-100" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Second slide label</h5>
                                        <p>Some representative placeholder content for the second slide.</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={photo_3} className="d-block w-100" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Third slide label</h5>
                                        <p>Some representative placeholder content for the third slide.</p>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div className="HM_product_offer pt-2">
                            <img className='HM_img_fluid w-100 ' src={photo_offer1} alt="" />
                            <div className="HM_offer_text mt-2">
                                <h6 className='text-white'>20%</h6>
                                <h3 className='text-white'>head offer</h3>
                                <button className='btn btn-warning'>Shop</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}