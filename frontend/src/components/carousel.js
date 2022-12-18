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
                        <h3>Here is a generic story about technology</h3>
                        <p>Look at this fun caption</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img className="picture-container" src="/container-2.jpg" alt="Second slide" />
                <Carousel.Caption className="caption-text">
                    <div className="captiontext">
                        <h3>Space Robots!</h3>
                        <p>Will the murder us all? Who knows?</p>
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
                        <h3>Sports ball match!</h3>
                        <p>
                            Have you seen the people getting hurt on the sports ball field?
                        </p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselFadeExample;