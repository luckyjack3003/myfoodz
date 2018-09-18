import React from 'react'
import {Link,withRouter } from 'react-router-dom'
const axios = require('axios');

class FoodzHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = { menus:[],count:0 };
    }
    componentDidMount(){
        let self = this;
        axios.get('http://localhost:8081/api/menus')
            .then(function ({data}) {
                self.setState({menus:data})
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
            });

    }
    updateCount=()=> {
        this.setState({count: ++this.state.count})
    }
    render(){
        console.info(this.state.menus)
        return (

            <div className='fh-header-container'>
                <div>
            <div className="container fh-header">
                <div className="row">
                    <div className="col-md-3"><h1 className="fh-header-logo"></h1></div>
                    <div className="col-md-7">   <div className="fh-header-main">
                        <Link to="/client" className="fh-header-main-link">OUR MENU</Link>
                        <Link to="/client" className="fh-header-main-link">MEAL PLANS</Link>
                        <Link to="/client" className="fh-header-main-link">ABOUT US</Link>
                        <Link to="/client" className="fh-header-main-link">STOCKISTS</Link>
                        <Link to="/client" className="fh-header-main-link">DELIVERY AREAS</Link>
                    </div></div>
                    <div className="col-md-2"> <div className="fh-header-right">
                        <Link to="/client" className="fh-header-right-link">LOG IN</Link>
                        <Link to="/client" className="fh-header-right-link"><span className="glyphicon glyphicon-search" aria-hidden="true"></span></Link>
                        <Link to="/client" className="fh-header-right-link"><span className="fh-header-main-cart"> <span className="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span><span className="cart_badge">{this.state.count}</span></span>
                           </Link>
                    </div></div>
                </div>

            </div>
                <div className="notification-bar">
                    <a className="notification-bar-message">Order now for delivery Wednesday *</a>
                </div>

                <div className="container fh-header-second">
                    <div className="col-md-2"><a>Filters<span className="glyphicon glyphicon-tasks" aria-hidden="true"></span></a></div>
                    <div className="col-md-9">
                        <a>Spring Clean Sale </a>
                        <a>Spring Clean Sale</a>
                        <a>YF Bundles</a>
                        <a>Lunch & Dinner</a>
                        <a>Breakfast</a>
                        <a>Snacks</a>
                        <a>Drinks</a>
                        <a>Gifts</a>
                    </div>
                </div>
                </div>

                <div className="divide-line">
                </div>

                <div className="container fh-content-hero">

                </div>
                <div className="container">
                    {this.state.menus.map((item, i) => <Card key = {i} updateCount= {this.updateCount}
                                                                  data = {item} />)}
                </div>


                <div className="container fh-footer-menu divide-line">
                    <div className="row">
                        <div className="col-md-2">
                            <div className="fh-footer-menu-heading">
                                YOUFOODZ
                            </div>
                            <ul className="menu__list">
                                <li>Meals</li>
                                <li>Snacks</li>
                                <li>Drinks</li>
                                <li> Gift Cards</li>
                            </ul>
                        </div>
                        <div className="col-md-2">
                            <div className="fh-footer-menu-heading">
                                ABOUT
                            </div>
                            <ul className="menu__list">
                                <li>Our Story</li>
                                <li>Blog</li>
                                <li>Reviews</li>
                                <li>Stockists</li>
                                <li>Youfoodz App</li>
                            </ul>
                        </div>
                        <div className="col-md-2">
                            <div className="fh-footer-menu-heading">
                                HELP & SUPPORT
                            </div>
                            <ul className="menu__list">
                                <li>Delivery Areas</li>
                                <li>AfterPay</li>
                                <li>ZipPay</li>
                                <li>FAQs</li>
                                <li>Recurring Orders</li>
                                <li>Contact us</li>
                            </ul>
                        </div>
                        <div className="col-md-2">
                            <div className="fh-footer-menu-heading">
                                JOIN US
                            </div>
                            <ul className="menu__list">
                                <li>Careers</li>
                                <li>Wholesale</li>
                            </ul>
                        </div>
                        <div className="col-md-2">
                            <div className="fh-footer-menu-heading">
                                YOUFOODZ APP

                            </div>

                            <div>
                                <a href="https://itunes.apple.com/au/app/youfoodz/id1265572034" className="app-download-menu--link"><img src="https://cdn.shopify.com/s/files/1/0506/7861/t/274/assets/app-store-logo.png?17385451883256246056" alt="Download on the App Store" className="app-download-menu--icon"/>
                                </a>
                            </div>

                            <div>
                                <a href="https://itunes.apple.com/au/app/youfoodz/id1265572034" className="app-download-menu--link"><img src="https://cdn.shopify.com/s/files/1/0506/7861/t/274/assets/play-store-logo.png?17385451883256246056" alt="Download on the App Store" className="app-download-menu--icon"/>
                                </a>
                            </div>

                        </div>
                        <div className="col-md-2">
                            <div className="fh-footer-menu-heading">
                                <img src="https://cdn.shopify.com/s/files/1/0506/7861/t/274/assets/yf-promise-green.png?17385451883256246056" className="yf-promise-logo"/>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="container footer__branding">
                    <div className="footer__branding footer__branding--tagline">We got you!</div>
                    <div className="footer__branding footer__branding--hashtag">#MealtimeNailed</div>
                </div>

                <div className="footer__bottom"><p>© 2018 Youfoodz&nbsp;<a href="https://youfoodz.com/pages/terms-conditions">Terms &amp; Conditions</a></p></div>
            </div>
        )
    }
}

class Card extends React.Component {
    render() {
        const {data}=this.props;
        console.info(data)
        return (
            <span className="product-card">
                <span className="product-card__photo" style={{backgroundImage:`url(${data.url}`}}>
                    <span className="product-card__photo_detail">
                        <span className="product-card__photo_detail_item">
                        <div>{data.calories}</div>
                        <div>Carolies</div>
                        </span>
                         <span className="product-card__photo_detail_item">
                        <div>{data.protein}</div>
                        <div>Protein</div>
                        </span>
                         <span className="product-card__photo_detail_item">
                        <div>{data.carbs}</div>
                        <div>Carbs</div>
                        </span>
                         <span className="product-card__photo_detail_item">
                        <div>{data.fat}</div>
                        <div>Fat</div>
                        </span>
                    </span>

                </span>
                <span className="product-card__title">{data.name}</span>
                <div className="product-card__footer">
                    <div>
                         <span className="product-card__footer_price">{'$'+data.price}</span>
                    <span className="product-card__footer_discount">{'$'+data.discount}</span>
                    </div>

                    <span className="product-card__footer_buy" onClick={()=>{
                        this.props.updateCount();
                    }}>+</span>
                </div>
            </span>
        );
    }
}

export default withRouter(FoodzHeader)