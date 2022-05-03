import React from 'react';
import { Carousel } from 'react-bootstrap';
import one from '../../Components/Images/car1.png';
import two from '../../Components/Images/car2.png';
import three from '../../Components/Images/car3.png';
import Inventory from '../Inventory/Inventory';
import './Home.css'

const Home = () => {
    return (
        <div className='home-container'>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={one}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>YAMAHA</h3>
                        <p>Introducing Yamaha Motor's brand slogan, "Revs your Heart".</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={two}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>SUDZUKI</h3>
                        <p>"Develop products of superior value by focusing on the customer"</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={three}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>VINTAGE HONDA</h3>
                        <p>A brand that celebrates the rich motorsports history and innovative soul of The Honda Motor Company.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Inventory></Inventory>
        </div>
    );
};

export default Home;