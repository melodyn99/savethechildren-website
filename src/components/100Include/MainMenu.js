// Essential for all components
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

// Redux
import { connect } from 'react-redux';
import { mainMenuMouseOver, mainMenuMouseLeave } from '../../Redux/Action/effectAction';

class MainMenu extends Component {

    render() {
        const { // t, 
            i18n } = this.props;

        this._handleMouseOver = (data) => {
            this.props.mainMenuMouseOverP(data);
        }

        this._handleMouseLeave = (data) => {
            this.props.mainMenuMouseLeaveP(data);
        }

        this._handleVoid = (e) => {
            e.preventDefault();
        }

        return (
            <div className="wrapper-MainMenu">
                <div className="MainMenu clearfix">
                    <ul>
                        <li
                            onMouseOver={() => this._handleMouseOver('about')}
                            onMouseLeave={() => this._handleMouseLeave('about')}
                        ><Link to={"/"} className="about" onClick={(e) => this._handleVoid(e)}><span>About Us</span></Link>
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

                        <li
                            onMouseOver={() => this._handleMouseOver('resource')}
                            onMouseLeave={() => this._handleMouseLeave('resource')}
                        ><Link to={"/"} className="resource" onClick={(e) => this._handleVoid(e)}><span>Resources<br />For You</span></Link>
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

                        <li
                            onMouseOver={() => this._handleMouseOver('featured')}
                            onMouseLeave={() => this._handleMouseLeave('featured')}
                        ><Link to={"/"} className="featured" onClick={(e) => this._handleVoid(e)}><span>Featured<br />Issues</span></Link>
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

                        <li
                            onMouseOver={() => this._handleMouseOver('research')}
                            onMouseLeave={() => this._handleMouseLeave('research')}
                        ><Link to={"/"} className="research" onClick={(e) => this._handleVoid(e)}><span>Research<br />Findings</span></Link>
                            <ul>
                                <div className="top"></div>
                                <div className="middle">
                                    <li><Link to={"/" + i18n.language + "/our-research"}><span>Our Research</span></Link></li>
                                    <li><Link to={"/" + i18n.language + "/other-findings"}><span>Other Findings</span></Link></li>
                                </div>
                                <div className="bottom"></div>
                            </ul>

                        </li>

                        <li
                            onMouseOver={() => this._handleMouseOver('event')}
                            onMouseLeave={() => this._handleMouseLeave('event')}
                        ><Link to={"/"} className="event" onClick={(e) => this._handleVoid(e)}><span>Our Events</span></Link>
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

                        <li
                            onMouseOver={() => this._handleMouseOver('external')}
                            onMouseLeave={() => this._handleMouseLeave('external')}
                        ><Link to={"/" + i18n.language + "/external-resources"} className="external"><span>External<br />Resources</span></Link>
                            {/* <ul>
                            <li><Link to={"/" + i18n.language + "/external-resources"}>External Resources</Link></li>
                        </ul> */}
                        </li>

                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    effect: state.effect
});

const mapDispatchToProps = dispatch => ({
    mainMenuMouseOverP: data => dispatch(mainMenuMouseOver(data)),
    mainMenuMouseLeaveP: data => dispatch(mainMenuMouseLeave(data)),
});

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(MainMenu));
