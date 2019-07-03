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
                                <li><Link to={"/" + i18n.language + "/why-we-must-act"}>Why We Must Act</Link></li>
                                <li><Link to={"/" + i18n.language + "/our-mission-and-strategy"}>Our Mission and Strategy</Link></li>
                                <li><Link to={"/" + i18n.language + "/sitemap"}>Sitemap</Link></li>
                                <li><Link to={"/" + i18n.language + "/contact-us"}>Contact Us</Link></li>
                            </div>
                            <div className="bottom"></div>
                        </ul>
                    </li>

                    <li><Link to={"/" + i18n.language + "/hello"} className="resource">Resources<br />For You</Link>
                        <ul className="leftTwo">
                            <div className="top"></div>
                            <div className="middle">
                                <li><Link to={"/" + i18n.language + "/primary-school-home"}>Primary School</Link></li>
                                <li><Link to={"/" + i18n.language + "/secondary-school-home"}>Secondary School</Link></li>
                                <li><Link to={"/" + i18n.language + "/parents-home"}>Parents</Link></li>
                            </div>
                            <div className="bottom"></div>
                        </ul>
                    </li>

                    <li><Link to={"/" + i18n.language + "/hello"} className="featured">Featured<br />Issues</Link>
                        <ul>
                            <div className="top"></div>
                            <div className="middle">
                                <li><Link to={"/" + i18n.language + "/online-grooming"}>Online Grooming</Link></li>
                                <li><Link to={"/" + i18n.language + "/sexting"}>Sexting</Link></li>
                                <li><Link to={"/" + i18n.language + "/personal-privacy"}>Personal Privacy</Link></li>
                                <li><Link to={"/" + i18n.language + "/legislations"}>Legislations</Link></li>
                            </div>
                            <div className="bottom"></div>
                        </ul>
                    </li>

                    <li><Link to={"/" + i18n.language + "/hello"} className="research">Research<br />Findings</Link>
                        <ul>
                            <div className="top"></div>
                            <div className="middle">
                                <li><Link to={"/" + i18n.language + "/our-research"}>Our Research</Link></li>
                                <li><Link to={"/" + i18n.language + "/other-findings"}>Other Findings</Link></li>
                            </div>
                            <div className="bottom"></div>
                        </ul>

                    </li>

                    <li><Link to={"/" + i18n.language + "/hello"} className="event">Our Events</Link>
                        <ul>
                            <div className="top"></div>
                            <div className="middle">
                                <li><Link to={"/" + i18n.language + "/events-safer-internet-day-2019"}>Safer Internet Day 2019</Link></li>
                                <li><Link to={"/" + i18n.language + "/events-smart-netizen-competition"}>"The Smart Netizen" Character Design Competition</Link></li>
                                <li><Link to={"/" + i18n.language + "/events-training-workshops"}>Training Workshops</Link></li>
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
