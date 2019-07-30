// Essential for all components
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

// Redux
import { connect } from 'react-redux';
import { mainMenuMouseOver, mainMenuMouseLeave } from '../../Redux/Action/effectAction';

class MainMenu extends Component {

    render() {
        const { t,
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

        const mainMenu = this.props.menus.allMenus[0];

        const i = i18n.language;
        // console.log(mainMenu.menus[0]);

        // console.log(i18n.language);

        return (
            <div className="wrapper-MainMenu">
                <div className="MainMenu clearfix">
                    {this.props.menus.allMenus[0] &&
                        <ul className="clearfix">
                            <li
                                onMouseOver={() => this._handleMouseOver('about')}
                                onMouseLeave={() => this._handleMouseLeave('about')}
                            ><Link to={"/"} className="about" onClick={(e) => this._handleVoid(e)}><span>{(i === "zh-HK" ? mainMenu.menus[0].text_zh_cht : mainMenu.menus[0].text_en)}</span></Link>
                                <ul className={"leftOne " + (this.props.currentURL === '' || typeof this.props.currentURL === 'undefined' ? 'atHome' : '')}>
                                    <div className="top"></div>
                                    <div className="middle">
                                        {mainMenu.menus[0].menu_items.map((subMenus) =>
                                            <li key={subMenus.menu_item_id}><Link to={"/" + i18n.language + "/" + subMenus.dest}><span>{(i === "zh-HK" ? subMenus.text_zh_cht : subMenus.text_en)}</span></Link></li>
                                        )}
                                        {/* <li><Link to={"/" + i18n.language + "/why-we-must-act"}><span>Why We Must Act</span></Link></li>
                                    <li><Link to={"/" + i18n.language + "/our-mission-and-strategy"}><span>Our Mission and Strategy</span></Link></li>
                                    <li><Link to={"/" + i18n.language + "/contact-us"}><span>Contact Us</span></Link></li>
                                    <li><Link to={"/" + i18n.language + "/sitemap"}><span>Sitemap</span></Link></li> */}
                                    </div>
                                    <div className="bottom"></div>
                                </ul>
                            </li>

                            <li
                                onMouseOver={() => this._handleMouseOver('resource')}
                                onMouseLeave={() => this._handleMouseLeave('resource')}
                            ><Link to={"/"} className="resource" onClick={(e) => this._handleVoid(e)}><span>{(i === "zh-HK" ? mainMenu.menus[1].text_zh_cht : mainMenu.menus[1].text_en)}</span></Link>
                                <ul className={"leftTwo " + (this.props.currentURL === '' || typeof this.props.currentURL === 'undefined' ? 'atHome' : '')}>
                                    <div className="top"></div>
                                    <div className="middle clearfix">
                                        {/* {mainMenu.menus[1].menu_items.map((subMenus, i) =>
                                            <li key={subMenus.menu_item_id}>
                                                <Link to={"/" + i18n.language + "/" + subMenus.dest}>
                                                    <div className={"thumb " + (i === 0 ? "one" : i === 1 ? "two" : i === 2 ? "three" : "one")}></div>
                                                    <span>{(i === "zh-HK" ? subMenus.text_zh_cht : subMenus.text_en)}</span>
                                                </Link>
                                            </li>
                                        )} */}
                                        <li>
                                            <Link to={"/" + i18n.language + "/primary-school-home"}>
                                                <div className="thumb one"></div>
                                                <span>{t("Common:SubMenu-ResourcesForYou.Primary")}</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={"/" + i18n.language + "/secondary-school-home"}>
                                                <div className="thumb two"></div>
                                                <span>{t("Common:SubMenu-ResourcesForYou.Secondary")}</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={"/" + i18n.language + "/parents-home"}>
                                                <div className="thumb three"></div>
                                                <span>{t("Common:SubMenu-ResourcesForYou.Parents")}</span>
                                            </Link>
                                        </li>
                                    </div>
                                    <div className="bottom"></div>
                                </ul>
                            </li>

                            <li
                                onMouseOver={() => this._handleMouseOver('featured')}
                                onMouseLeave={() => this._handleMouseLeave('featured')}
                            ><Link to={"/"} className="featured" onClick={(e) => this._handleVoid(e)}><span>{(i === "zh-HK" ? mainMenu.menus[2].text_zh_cht : mainMenu.menus[2].text_en)}</span></Link>
                                <ul className={(this.props.currentURL === '' || typeof this.props.currentURL === 'undefined' ? 'atHome' : '')}>
                                    <div className="top"></div>
                                    <div className="middle">
                                        {mainMenu.menus[2].menu_items.map((subMenus) =>
                                            <li key={subMenus.menu_item_id}><Link to={"/" + i18n.language + "/" + subMenus.dest}><span>{(i === "zh-HK" ? subMenus.text_zh_cht : subMenus.text_en)}</span></Link></li>
                                        )}
                                        {/* <li><Link to={"/" + i18n.language + "/online-grooming"}><span>Online Grooming</span></Link></li>
                                    <li><Link to={"/" + i18n.language + "/sexting"}><span>Sexting</span></Link></li>
                                    <li><Link to={"/" + i18n.language + "/personal-privacy"}><span>Personal Privacy</span></Link></li>
                                    <li><Link to={"/" + i18n.language + "/legislations"}><span>Legislations</span></Link></li> */}
                                    </div>
                                    <div className="bottom"></div>
                                </ul>
                            </li>

                            <li
                                onMouseOver={() => this._handleMouseOver('research')}
                                onMouseLeave={() => this._handleMouseLeave('research')}
                            ><Link to={"/"} className="research" onClick={(e) => this._handleVoid(e)}><span>{(i === "zh-HK" ? mainMenu.menus[3].text_zh_cht : mainMenu.menus[3].text_en)}</span></Link>
                                <ul className={(this.props.currentURL === '' || typeof this.props.currentURL === 'undefined' ? 'atHome' : '')}>
                                    <div className="top"></div>
                                    <div className="middle">
                                        {mainMenu.menus[3].menu_items.map((subMenus) =>
                                            <li key={subMenus.menu_item_id}><Link to={"/" + i18n.language + "/" + subMenus.dest}><span>{(i === "zh-HK" ? subMenus.text_zh_cht : subMenus.text_en)}</span></Link></li>
                                        )}
                                        {/* <li><Link to={"/" + i18n.language + "/our-research"}><span>Our Research</span></Link></li>
                                    <li><Link to={"/" + i18n.language + "/other-findings"}><span>Other Findings</span></Link></li> */}
                                    </div>
                                    <div className="bottom"></div>
                                </ul>

                            </li>

                            <li
                                onMouseOver={() => this._handleMouseOver('event')}
                                onMouseLeave={() => this._handleMouseLeave('event')}
                            ><Link to={"/"} className="event" onClick={(e) => this._handleVoid(e)}><span>{(i === "zh-HK" ? mainMenu.menus[4].text_zh_cht : mainMenu.menus[4].text_en)}</span></Link>
                                <ul className={(this.props.currentURL === '' || typeof this.props.currentURL === 'undefined' ? 'atHome' : '')}>
                                    <div className="top"></div>
                                    <div className="middle">
                                        {mainMenu.menus[4].menu_items.map((subMenus) =>
                                            <li key={subMenus.menu_item_id}><Link to={"/" + i18n.language + "/" + subMenus.dest}><span>{(i === "zh-HK" ? subMenus.text_zh_cht : subMenus.text_en)}</span></Link></li>
                                        )}
                                        {/* <li><Link to={"/" + i18n.language + "/events-safer-internet-day-2019"}><span>Safer Internet Day 2019</span></Link></li>
                                    <li><Link to={"/" + i18n.language + "/events-smart-netizen-competition"}><span>"The Smart Netizen" Character Design Competition</span></Link></li>
                                    <li><Link to={"/" + i18n.language + "/events-training-workshops"}><span>Training Workshops</span></Link></li> */}
                                    </div>
                                    <div className="bottom"></div>
                                </ul>
                            </li>

                            <li
                                onMouseOver={() => this._handleMouseOver('external')}
                                onMouseLeave={() => this._handleMouseLeave('external')}
                            ><Link to={"/" + i18n.language + "/external-resources"} className="external">
                                <span>{t("Common:ExternalResources.1")}<br />{t("Common:ExternalResources.2")}</span>
                            </Link>
                            </li>
                        </ul>
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    effect: state.effect,
    menus: state.menus
});

const mapDispatchToProps = dispatch => ({
    mainMenuMouseOverP: data => dispatch(mainMenuMouseOver(data)),
    mainMenuMouseLeaveP: data => dispatch(mainMenuMouseLeave(data)),
});

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(MainMenu));
