//carousel

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";
import "./main.css";
import banner1 from "../images/crackers-bazaar-banner1.jpg";
import banner2 from '../images/Gift-banner2.jpg';
import banner3 from '../images/banner3.jpg';
import banner4 from '../images/Banner4.jpg';




//carousel


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
        />
    );
}

class Carousel extends React.Component {
    render() {
        const settings = {
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        };
        return (
            <>
                <div className="slide">
                    <h4 >CRACKERS ONLINE</h4>
                    <img src="https://www.crackerbazaar.in/wp-content/uploads/2021/01/line.png" alt=""></img><br /><br /><br /><br />
                </div>
                <div className="carousel">
                    <Slider {...settings} >
                        <div>
                            <img src="https://www.crackerbazaar.in/wp-content/uploads/2021/01/category6.png" alt="Atom Bombs" />
                        </div>
                        <div>
                            <img src="https://www.crackerbazaar.in/wp-content/uploads/2021/01/category5.png" alt="Sparklers" />
                        </div>
                        <div>
                            <img src="https://www.crackerbazaar.in/wp-content/uploads/2021/01/category1.png" alt="Chakkaras" />
                        </div>
                        <div>
                            <img src="https://www.crackerbazaar.in/wp-content/uploads/2021/01/category4.png" alt="Novel Crackers" />
                        </div>
                        <div>
                            <img src="https://www.crackerbazaar.in/wp-content/uploads/2021/01/category8.png" alt="Lars" />
                        </div>
                        <div>
                            <img src="https://www.crackerbazaar.in/wp-content/uploads/2021/01/category9.png" alt="Rocketss" />
                        </div>
                        <div>
                            <img src="https://www.crackerbazaar.in/wp-content/uploads/2021/01/category10.png" alt="Comets" />
                        </div>
                        <div>
                            <img src="https://www.crackerbazaar.in/wp-content/uploads/2021/01/category12.png" alt="Gift Box" />
                        </div>
                        <div>
                            <img src="https://www.crackerbazaar.in/wp-content/uploads/2021/01/category2.png" alt="Flower Pots" />
                        </div>
                        <div>
                            <img src="https://www.crackerbazaar.in/wp-content/uploads/2021/01/category3.png" alt="Bijili" />
                        </div>
                        <div>
                            <img src="https://www.crackerbazaar.in/wp-content/uploads/2021/01/category11.png" alt="Novel Crackers" />
                        </div>
                    </Slider>
                </div>
            </>
        );
    }
}






//Online Crackers Purchase Bangalore

// Product component

function Product(props) {
    return (
        <>

            <div className='A'>
                <img className='I' src={props.image} alt={props.name} />
                <h6 className='H'>{props.name}</h6>
                <p>₹{props.price}</p>
                <button className='Button'>Add to cart</button>
            </div>
        </>
    );
}



// ProductList component

function ProductList(props) {
    return (
        <>
            <img className='banner1' src={banner1} alt='' />
            <p className='p'>Minimum Purchase Value INR 2000 | Delivery available Only In Bangalore</p>
            <br />
            <Carousel />
            <br /><br /><br /><br /><br /><br /><br />

            <img className='banner2' src={banner2} alt='' /><br /><br /><br />


            <div className='online'>
                <h4>ONLINE CRACKERS PURCHASE BANGALORE</h4>
                <img className='online1' src="https://www.crackerbazaar.in/wp-content/uploads/2021/01/line.png" alt=""></img>
            </div>
            <br /><br />
            <div className='B'>
                {props.products.map(product => (
                    <Product
                        key={product.id}
                        image={product.image}
                        name={product.name}
                        price={product.price}
                    />
                ))}
            </div>
        </>

    );
}



// App component


function App1() {
    const products = [
        { id: 1, name: 'Eco 30 gift box', price: 350.00, image: 'https://www.crackerbazaar.in/wp-content/uploads/2021/10/image00020-300x300.jpg' },
        { id: 2, name: 'Anmol Nishan', price: 50.00, image: 'https://www.crackerbazaar.in/wp-content/uploads/2021/09/nishan-gun-300x300.jpg' },
        { id: 3, name: 'Scarlet Saucer(New)', price: 75.00, image: 'https://www.crackerbazaar.in/wp-content/uploads/2021/08/scarlet-saucer-300x300.jpg' },
        { id: 4, name: '500/5 Hitler- 10 CM', price: 26.00, image: 'https://www.crackerbazaar.in/wp-content/uploads/2021/08/hit-300x300.jpg' },
        { id: 5, name: 'SSS Bomb Foils (6)', price: 95.00, image: 'https://www.crackerbazaar.in/wp-content/uploads/2021/08/sss-bomb-300x285.png' },
        { id: 6, name: 'Wonderful (31)', price: 800.00, image: 'https://www.crackerbazaar.in/wp-content/uploads/2021/08/wonder-2.jpg' },
        { id: 7, name: 'Winner (26)', price: 610.00, image: 'https://www.crackerbazaar.in/wp-content/uploads/2021/08/winners-300x300.jpg' },
        { id: 8, name: 'Twinkle Twinkle (30)', price: 748.00, image: 'https://www.crackerbazaar.in/wp-content/uploads/2021/08/twinkle-1-300x300.jpg' },
    ];

    return (
        <div>
            <ProductList products={products} />
        </div>
    );
}



// Product component

function Product1(props) {
    return (
        <div className='A'>
            <img className='I' src={props.image} alt={props.name} />
            <h6 className='H'>{props.name}</h6>
            <p>₹{props.price}</p>
            <button className='Button'>Add to cart</button>
        </div>
    );
}





function ProductList1(props) {
    return (
        <>
            <App1 /><br /><br />
            <div className='banner34'>
                <img className='banner3' src={banner3} alt='' />
                <img className='banner4' src={banner4} alt='' /><br /><br /><br /><br />
            </div>
            <div className='diwali'>
                <h4>DIWALI CRACKERS OFFERS</h4>
                <img className='diwali1' src="https://www.crackerbazaar.in/wp-content/uploads/2021/01/line.png" alt=""></img>
            </div>
            <br /><br />

            <div className='B'>
                {props.products.map(product => (
                    <Product1
                        key={product.id}
                        image={product.image}
                        name={product.name}
                        price={product.price}
                    />
                ))}
            </div>
        </>

    );
}







function App2() {
    const products = [
        { id: 1, name: 'Eco 30 gift box', price: 350.00, image: 'https://www.crackerbazaar.in/wp-content/uploads/2021/10/image00020-300x300.jpg' },
        { id: 2, name: 'Childrens Special', price: 1250.00, image: 'https://www.crackerbazaar.in/wp-content/uploads/2021/10/image00016-300x300.jpeg' },
        { id: 3, name: 'Eco 5', price: 700.00, image: 'https://www.crackerbazaar.in/wp-content/uploads/2021/10/image00044-300x300.jpeg' },
        { id: 4, name: 'RKR 20', price: 310.00, image: 'https://www.crackerbazaar.in/wp-content/uploads/2021/10/image00037-300x300.jpeg' },
        { id: 5, name: 'Ladies Special Medium', price: 790.00, image: 'https://www.crackerbazaar.in/wp-content/uploads/2021/10/image00033-300x300.jpeg' },
        { id: 6, name: 'Boys Special Medium', price: 770.00, image: 'https://www.crackerbazaar.in/wp-content/uploads/2021/10/image00041-300x300.jpeg' },
        { id: 7, name: 'Childrens Mini', price: 660.00, image: 'https://www.crackerbazaar.in/wp-content/uploads/2021/10/image00046-300x300.jpeg' },
        { id: 8, name: 'Silver Streak Eco', price: 600.00, image: 'https://www.crackerbazaar.in/wp-content/uploads/2021/10/image00028-300x300.jpeg' },
    ];

    return (
        <div>
            <ProductList1 products={products} />
        </div>
    );
}










class Phara extends React.Component {
    render() {
        return (
            <>
                <App2 /><br /><br /><br />
                <div className='heading'>
                    <h4>TESTIMONIALS</h4>
                    <img src="https://www.crackerbazaar.in/wp-content/uploads/2021/01/line.png" alt=""></img>
                </div><br /><br />

                <div className='testi'>
                    <div>
                        <p>I got extra discounts and happy to shop many products. Best website for crackers shopping site</p>
                        <h5>Ramesh Shukla</h5>
                        <p>Bangalore - Hebbal</p>
                        <img src='' alt='' />
                    </div>

                    <div>
                        <p>Excellent Service For Off Season. Pakka Water Proof Packing and On Time Delivery. Wish you a Happy Diwali Team.</p>
                        <h5>Shwetha Shetty</h5>
                        <p>Bangalore-penya</p>
                    </div>

                    <div>
                        <p>Done my thala diwali purchase here for around 25000rs. Best price for standard brands and happy with 10000 wala🤩</p>
                        <h5>Yogesh</h5>
                        <p>Bangalore-Indranagar</p>
                    </div>
                </div>


                <br /><br /><br /><br /><br /><br />



                <div className='main'>
                    <div>
                        <div className='first'>
                            <img src="https://www.crackerbazaar.in/wp-content/uploads/2021/01/coupon.png" alt='' />
                            <h5>Wholesale Price</h5>
                        </div>
                        <p>At wholesale price,10 th year anniversary sale hurry up, Happy Diwali</p>
                    </div>

                    <div>
                        <div className='second'>
                            <img src="https://www.crackerbazaar.in/wp-content/uploads/2021/01/shopping-bag.png" alt='' />
                            <h5>Minimum Order</h5>
                        </div>
                        <p>Min order rs 2000,door step delivery,good relationship with customer</p>
                    </div>


                    <div>
                        <div className='third'>
                            <img src="https://www.crackerbazaar.in/wp-content/uploads/2021/01/offer.png" alt='' />
                            <h5>What We Offer</h5>
                        </div>
                        <p>We offer wide range of fancy fireworks,sparkles, atom bomb, rocket,chakkars</p>
                    </div>


                </div>

                <br/><br/>
            </>

        )
    }
}

export default Phara;