import React from 'react';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

function MainMenu(props) {
    const {
        // t, 
        i18n } = props;

    return (
        <div className="wrapper-MainMenu">
            <div className="MainMenu clearfix">
                <ul>
                    <li><Link to={"/" + i18n.language + "/hello"} className="about">About Us</Link>
                        <ul className="leftOne">
                            <div className="top"></div>
                            <div className="middle">
                                <li><Link to={"/" + i18n.language + "/why-we-must-act"}><span>Why We Must Act</span></Link></li>
                                <li><Link to={"/" + i18n.language + "/our-mission-and-strategy"}><span>Our Mission and Strategy</span></Link></li>
                                <li><Link to={"/" + i18n.language + "/contact-us"}><span>Contact Us</span></Link></li>
                                <li><Link to={"/" + i18n.language + "/sitemap"}><span>Sitemap</span></Link></li>
                            </div>
                            <div className="bottom"></div>
                        </ul>
                    </li>

                    <li><Link to={"/" + i18n.language + "/hello"} className="resource">Resources<br />For You</Link>
                        <ul className="leftTwo">
                            <div className="top"></div>
                            <div className="middle clearfix">
                                <li>
                                    <Link to={"/" + i18n.language + "/primary-school-home"}>
                                        <div className="thumb one"></div>
                                        <span>Primary School</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/" + i18n.language + "/secondary-school-home"}>
                                        <div className="thumb two"></div>
                                        <span>Secondary School</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/" + i18n.language + "/parents-home"}>
                                        <div className="thumb three"></div>
                                        <span>Parents</span>
                                    </Link>
                                </li>
                            </div>
                            <div className="bottom"></div>
                        </ul>
                    </li>

                    <li><Link to={"/" + i18n.language + "/hello"} className="featured">Featured<br />Issues</Link>
                        <ul>
                            <div className="top"></div>
                            <div className="middle">
                                <li><Link to={"/" + i18n.language + "/online-grooming"}><span>Online Grooming</span></Link></li>
                                <li><Link to={"/" + i18n.language + "/sexting"}><span>Sexting</span></Link></li>
                                <li><Link to={"/" + i18n.language + "/personal-privacy"}><span>Personal Privacy</span></Link></li>
                                <li><Link to={"/" + i18n.language + "/legislations"}><span>Legislations</span></Link></li>
                            </div>
                            <div className="bottom"></div>
                        </ul>
                    </li>

                    <li><Link to={"/" + i18n.language + "/hello"} className="research">Research<br />Findings</Link>
                        <ul>
                            <div className="top"></div>
                            <div className="middle">
                                <li><Link to={"/" + i18n.language + "/our-research"}><span>Our Research</span></Link></li>
                                <li><Link to={"/" + i18n.language + "/other-findings"}><span>Other Findings</span></Link></li>
                            </div>
                            <div className="bottom"></div>
                        </ul>

                    </li>

                    <li><Link to={"/" + i18n.language + "/hello"} className="event">Our Events</Link>
                        <ul>
                            <div className="top"></div>
                            <div className="middle">
                                <li><Link to={"/" + i18n.language + "/events-safer-internet-day-2019"}><span>Safer Internet Day 2019</span></Link></li>
                                <li><Link to={"/" + i18n.language + "/events-smart-netizen-competition"}><span>"The Smart Netizen" Character Design Competition</span></Link></li>
                                <li><Link to={"/" + i18n.language + "/events-training-workshops"}><span>Training Workshops</span></Link></li>
                            </div>
                            <div className="bottom"></div>
                        </ul>
                    </li>

                    <li><Link to={"/" + i18n.language + "/external-resources"} className="external">External<br />Resources</Link>
                        {/* <ul>
                            <li><Link to={"/" + i18n.language + "/external-resources"}>External Resources</Link></li>
                        </ul> */}
                    </li>

                </ul>
            </div>
        </div>
    );
}

export default withTranslation()(MainMenu);
