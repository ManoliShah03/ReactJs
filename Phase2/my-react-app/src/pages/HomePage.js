import React, {useEffect, useState} from 'react';
import './HomePage.css';
import "../Components/footer";
import { Link } from 'react-router-dom';
import SimpleImageSlider from "react-simple-image-slider";
export default function App() {
    const sliderImages = [
        {
            url:"images/image6.jpg",
        },
        {
            url:"images/image17.jpg",
        },
        {
            url:"images/image18.jpg",
        },
    ];

    return (
        <div className="home">
            <div id="page_banner">
                <div id="banner">
                    <div id="msg_box">

                        <p className="summer_s">Summer Sales</p>
                        <h1 id="seventy_p">50% OFF</h1>
                        <p className="promo_c">with promo code CN67EW*</p>
                        <Link to="/ProductPage">
                            <button id="shop_now" type="submit" name="shop now" onClick="change()">
                                Shop now <i className="fa-solid fa-arrow-right"></i>
                            </button>
                        </Link>

                    </div>
                </div>
            </div>


           <h1 id="homeh1">Have a Look to our top selling products</h1>
            <div className="containerlook">
                <div className="wrapper">
                    <div className="card"><img
                        src="images/image14.jpg"
                        alt="" className="product_img"/></div>
                    <div className="card"><img
                        src="images/image15.jpg"
                        alt="" className="product_img"/></div>
                    <div className="card"><img
                        src="images/image9.jpeg"
                        alt="" className="product_img"/></div>
                </div>
            </div>
            <div className="banner">
                <SimpleImageSlider
                    width={1468}
                    height={450}
                    images={sliderImages}
                    showNavs={true}
                    slideDuration={0.8}
                    autoPlay={true}

                />
            </div>
            <div className="section6">
                <section>
<span>
<img src="https://i.postimg.cc/tJ05FCJY/icon-4.png" alt=""/>
<p>(+10) 1100 42356</p>
</span>
                    <span>
<img src="https://i.postimg.cc/bvBLNRj0/icon-5.png" alt=""/>
<p>support@websitename.com</p>
</span>
                    <span>
<img src="https://i.postimg.cc/B6Pp81qr/icon-6.png" alt=""/>
<p>5th Floor Auricle Building Levioosa Road<br/> High street Duplex - 0234 Province - US</p>
</span>
                </section>
            </div>
        </div>
    );
}
