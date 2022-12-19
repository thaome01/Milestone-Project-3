import Carousel from "react-bootstrap/Carousel";
import "./carousel.css";


function CarouselFadeExample() {
    return (
        <Carousel>
            <Carousel.Item>
                <img className="picture-container"
                    src="/container-1.jpg"
                    alt="First slide" />
                <Carousel.Caption className="caption-text">
                    <div className="captiontext">
                        <h1>NOW AVAILABLE</h1>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img className="picture-container" src="/container-2.jpg" alt="Second slide" />
                <Carousel.Caption className="caption-text">
                    <div className="captiontext">
                    <h1>NOW AVAILABLE</h1>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="picture-container"
                    src="container-3.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption className="caption-text">
                    <div className="captiontext">
                    <h1>NOW AVAILABLE</h1>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselFadeExample;