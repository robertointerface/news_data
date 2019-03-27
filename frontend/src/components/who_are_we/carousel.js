import React from 'react'
import Carousel from 'react-bootstrap/es/Carousel'

/*
const ServicesCarousel = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <div className="row">
                            <div className="col-12">
                                <h3 className="carouselHeader">Step 1</h3>
                            </div>
                            <div className="col-12">
                                <div className="carousel-caption">
                                    <h3 className="carouselText">Tell us what data you are looking for 1.</h3>
                                </div>
                            </div>
                    </div>
                    <Carousel.Caption>
                        <p>puto</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="row">
                        <div className="col-12">
                            <h3 className="carouselHeader">Step 1</h3>
                        </div>
                        <div className="col-12">
                            <div className="carousel-caption">
                                <h3 className="carouselText">Tell us what data you are looking for 2.</h3>
                            </div>
                        </div>
                    </div>
                    <Carousel.Caption>
                        <p>puto</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}*/

const ServicesCarousel = () => {
    return (
        <Carousel>
              <Carousel.Item>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Item>
              <Carousel.Item>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Item>
              <Carousel.Item>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Item>
        </Carousel>
    )
}

/*const ServicesCarousel = () => {
    return (
        <div id="servicesCarousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#servicesCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#servicesCarousel" data-slide-to="1"></li>
                <li data-target="#servicesCarousel" data-slide-to="2"></li>
                <li data-target="#servicesCarousel" data-slide-to="3"></li>
                <li data-target="#servicesCarousel" data-slide-to="4"></li>
                <li data-target="#servicesCarousel" data-slide-to="5"></li>
            </ol>
            <div className="carousel-inner">

                <div className="carousel-item active">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="carouselHeader">Step 1</h3>
                        </div>
                        <div className="col-12">
                            <div className="row">
                                <div className="offset-4 col-4">
                                    cd
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="carousel-caption">
                                <h3 className="carouselText">Tell us what data you are looking for 1.</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="carousel-item">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="carouselHeader">Step 1</h3>
                        </div>
                        <div className="col-12">
                            <div className="row">
                                <div className="offset-4 col-4">
                                    cd
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="carousel-caption">
                                <h3 className="carouselText">Tell us what data you are looking for 2.</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="carousel-item">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="carouselHeader">Step 1</h3>
                        </div>
                        <div className="col-12">
                            <div className="row">
                                <div className="offset-4 col-4">
                                    cd
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="carousel-caption">
                                <h3 className="carouselText">Tell us what data you are looking for 3.</h3>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}*/

export default ServicesCarousel