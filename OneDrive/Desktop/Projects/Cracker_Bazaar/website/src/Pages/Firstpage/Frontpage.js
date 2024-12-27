import React, { Component } from 'react';
import "./Frontpage.css";
import Phara from '../Main/main';



export default class Frontpage extends Component {
    render() {
        return (
            <>
                <header className='a'>
                    <div><p>Crackers Available for All Functions – Crackers Available @ 365 Days | Booking open for only Bengaluru</p></div>
                    <div className='b'>
                        <ul>
                            <li>+91-9945710003</li>
                            <li>sales.crackerbazaar@gmail.com</li>
                        </ul>
                        <ul className='c'>
                            <li><a href='#'>ABOUT US</a></li>
                            <li><a href='#'>CONTACT US</a></li>
                            <li><a href='#'>TERMS AND CONDITIONS</a></li>
                        </ul>
                    </div>
                </header>

                <br /><br /><br />

                <div className='form'>
                    <div>
                        <img className='logo' src="https://www.crackerbazaar.in/wp-content/uploads/2021/01/cropped-logo-202x224-3.png" alt="" loading="lazy" />
                    </div>

                    <div className='search'>
                        <input className='input' type="text" placeholder="Search products …" />

                    </div>

                    <div className='cartbutton'>
                        <button className='buttoncart'>₹0.00</button>
                    </div>
                </div>

                <div className="nav">
                    <ul >
                        <li>SPARKLERS</li>
                        <li>ROCKETS</li>
                        <li>FLOWER POTS</li>
                        <li>CHAKKARA</li>
                        <li>ATOM BOMBS</li>
                        <li>CRACKERS</li>
                        <li>LARS</li>
                        <li>TOY PISTOLS</li>
                        <li>GIFT BOX</li>
                        <li>GENERAL ITEMS</li>
                    </ul>
                </div>


               <Phara />


                <footer>
                    <div className="part">
                        <div>
                            <h5>ABOUT CRACKER BAZAAR</h5>
                            <p> Cracker Bazaar is one the leading Crackers dealer in Bangalore. We are in the field of Selling crackers since 1991. We deal with Standard Fireworks Products. We have our own exclusive godown in Bangalore. We offer the best quality products at best price.</p>
                        </div>

                        <div className="list">
                            <h5>OUR PRODUCTS</h5>
                            <div className="ol">
                                <ol>
                                    <li>Atom Bombs</li>
                                    <li>Chakkars</li>
                                    <li>Colour Smoke</li>
                                    <li>Comets</li>
                                    <li>Confetti</li>
                                    <li>Crackers</li>
                                    <li>Fancy Fireworks</li>
                                </ol>
                                <ol>
                                    <li>Gift Box</li>
                                    <li>Lars Crackers</li>
                                    <li>Novel Fireworks</li>
                                    <li>One sound/Two Sound<br /> Crackers</li>
                                    <li>Rockets</li>
                                    <li>Shots OR Cakes</li>
                                    <li>Sparklers</li>
                                    <li>Toy Pistols</li>
                                </ol>
                            </div>
                        </div>

                        <div>
                            <h5>CONTACT INFO</h5>
                            <div>
                                <h6>CRACKER BAZAAR</h6>
                                <p>Store:No,968/1, Next to HGS Chamundi Towers, Service Rd, Kudlu Gate, Bandepalya, Bengaluru 560068</p>
                            </div>
                            <div>
                                <h6>CALL</h6>
                                <p>080-42111001</p>
                                <p>080-42111000</p>
                            </div>
                            <div>
                                <h6>EMAIL</h6>
                                <p>sales.crackerbazaar@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        )
    }
};

