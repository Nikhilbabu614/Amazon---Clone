import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div id="carouselExampleControls" class="mainhome carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">

                    <div className="carousel-item active">
                        <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/GW/June_21/Pantry/01_7TH-JUN-pc1x._CB667426691_.jpg" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/OnePlusNordNewLaunch/June_5th/Nord_June_5th__1500x600._CB667420464_.jpg" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Avatar/HeroPC_1500x600_Bills._CB667391360_.jpg" alt="..." />
                    </div>

                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            {/* products */}

            <div className="home_row">
                <Product id="1" title="2020 Apple MacBook Air (13-inch, Apple M1 chip with 8‑core CPU and 8‑core GPU, 8GB RAM, 512GB SSD) - Silver"
                    price={117900}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71TPda7cwUL._SL1500_.jpg"
                />
                <Product id="2" title="New Apple iPhone 12 Mini (128GB) - White"
                    price={67900}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71tT8J5cKuL._SL1500_.jpg"
                />
                <Product id="3" title="Samsung 108 cm (43 inches) Crystal 4K Pro Series Ultra HD Smart LED TV UA43AUE70AKLXL (Black) (2021 Model)"
                    price={38990}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61GwJAhftvS._SL1500_.jpg"
                />
            </div>

            <div className="home_row">
                <Product id="4" title="Samsung 700 L Inverter Frost Free Side-by-Side Refrigerator (RS72R5001M9TL, Gentle Silver Matt, SpaceMax Technology)"
                    price={71990}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61EcvMbH7zL._SL1500_.jpg"
                />
                <Product id="5" title="New Apple Watch Series 6 (GPS + Cellular, 40mm) - Product(RED) - Aluminium Case with Product(RED) - Sport Band"
                    price={44900}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/81xjdZjthHL._SL1500_.jpg"
                />
            </div>

            <div className="home_row">
                <Product id="6" title="Echo Dot (3rd Gen) - #1 smart speaker brand in India with Alexa (Black)"
                    price={2799}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61EXU8BuGZL._SL1100_.jpg"
                />
                <Product id="7" title="Nikon D5600 with AF-P 18-55 mm + AF-P 70-300 mm VR Kit"
                    price={65990}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/41ysoC0mdHL.jpg"
                />
                <Product id="8" title="Philips Audio SPA8000B/94 5.1 Channel Multimedia Speakers System (Black)"
                    price={8744}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61L2mqYHruS._SL1500_.jpg"
                />
            </div>


        </div>

    )
}

export default Home
