// Essential for all components
import React, { Component } from 'react';
// import {Redirect} from 'react-router';
import './css/App.scss';
import { withTranslation } from 'react-i18next';

// Api
import { apiAuth } from './Api/ApiAuth';
import { apiMenus } from './Api/ApiMenus';

// Redux
import { connect } from 'react-redux';
import { refreshTokenByRefreshToken } from './Redux/Action/authAction';
import { getAllMenus } from './Redux/Action/menusAction';

import querySearch from "stringquery";

import Header from './components/100Include/Header';
// import MainMenuBar from './components/100Include/MainMenuBar';
import Footer from './components/100Include/Footer';
import HeroMenu from './components/100Include/HeroMenu';
import MainMenu from './components/100Include/MainMenu';
import FooterSitemap from './components/100Include/FooterSitemap';

// import * as HelperDesktopHandle from './utils/00JqueryControl/DesktopHandle';
// import * as HelperMobileHandle from './utils/00JqueryControl/MobileHandle';
// import * as HelperPopup from './utils/00JqueryControl/Popup';

import LoginRegister from './components/101Popup/LoginRegister';

// Home
import Home from './containers/00Home/Home';

/*** About Us ***/
import WhatIsNetizenAcademy from './containers/01AboutUs/WhatIsNetizenAcademy';
import OurMissionAndStrategy from './containers/01AboutUs/OurMissionAndStrategy';
import Sitemap from './containers/01AboutUs/Sitemap';
import ContactUs from './containers/01AboutUs/ContactUs';

/** Resources For You ***/

// Primary School
import PrimarySchoolHome from './containers/02ResourcesForYou/PrimarySchool/PrimarySchoolHome';
import PrimaryGeneralTips from './containers/02ResourcesForYou/PrimarySchool/PrimaryGeneralTips';
import PrimaryVideo from './containers/02ResourcesForYou/PrimarySchool/PrimaryVideo';
import PrimarySocialMediaUserGuide from './containers/02ResourcesForYou/PrimarySchool/PrimarySocialMediaUserGuide';
import PrimaryQuiz from './containers/02ResourcesForYou/PrimarySchool/PrimaryQuiz';
import PrimaryRiskAndDanger from './containers/02ResourcesForYou/PrimarySchool/PrimaryRiskAndDanger';
import PrimaryGame from './containers/02ResourcesForYou/PrimarySchool/PrimaryGame';
import PrimaryNetizenPledge from './containers/02ResourcesForYou/PrimarySchool/PrimaryNetizenPledge';

// Secondary School
// import SecondarySchoolHome from './containers/02ResourcesForYou/SecondarySchool/SecondarySchoolHome';
// import SecondaryGeneralTips from './containers/02ResourcesForYou/SecondarySchool/SecondaryGeneralTips';
import SecondaryGame from './containers/02ResourcesForYou/SecondarySchool/SecondaryGame';
import SecondaryQuiz from './containers/02ResourcesForYou/SecondarySchool/SecondaryQuiz';
// import SecondaryNetizenPledge from './containers/02ResourcesForYou/SecondarySchool/SecondaryNetizenPledge';
// import SecondaryRiskAndDanger from './containers/02ResourcesForYou/SecondarySchool/SecondaryRiskAndDanger';
// import SecondarySocialMediaUserGuide from './containers/02ResourcesForYou/SecondarySchool/SecondarySocialMediaUserGuide';

// Parents
import ParentsHome from './containers/02ResourcesForYou/Parents/ParentsHome';
import ParentsTips from './containers/02ResourcesForYou/Parents/ParentsTips';
import ParentsBlog from './containers/02ResourcesForYou/Parents/ParentsBlog';
import ParentsBlogDetail from './containers/02ResourcesForYou/Parents/ParentsBlogDetail';
import ParentsNetTube from './containers/02ResourcesForYou/Parents/ParentsNetTube';
import ParentsNetTubeDetail from './containers/02ResourcesForYou/Parents/ParentsNetTubeDetail';
import ParentsTrainingWorkshop from './containers/02ResourcesForYou/Parents/ParentsTrainingWorkshop';
import ParentsMoreResources from './containers/02ResourcesForYou/Parents/ParentsMoreResources';

/*** Featured Issues ***/
import OnlineGrooming from './containers/03FeaturedIssues/OnlineGrooming';
import Sexting from './containers/03FeaturedIssues/Sexting';
import PersonalPrivacy from './containers/03FeaturedIssues/PersonalPrivacy';
import Legislations from './containers/03FeaturedIssues/Legislations';

/*** Research Findings ***/
import OurResearch from './containers/04ResearchFindings/OurResearch';
import OtherFindings from './containers/04ResearchFindings/OtherFindings';

/*** Our Events ***/
import EventsSaferInternetDay2019 from './containers/05OurEvents/EventsSaferInternetDay2019';
import EventsSmartNetizenCompetition from './containers/05OurEvents/EventsSmartNetizenCompetition';
import EventsTrainingWorkshops from './containers/05OurEvents/EventsTrainingWorkshops';

/*** External Resources ***/
import ExternalResources from './containers/06ExternalResources/ExternalResources';

/*** Templates ***/
// import ImageText from './containers/10Templates/ImageText';
// import ImageGrid from './containers/10Templates/ImageGrid';
// import ImageTabGrid from './containers/10Templates/ImageTabGrid';

// 404
import PageNotFound from './containers/PageNotFound';

class App extends Component {

    // change URL
    constructor(props) {
        super(props);
        this.state = {
            debug: false
        }
    }

    componentDidMount = () => {
        // HelperDesktopHandle.DesktopHandle.init();
        // HelperMobileHandle.MobileHandle.init();
        // HelperMobileHandle.MobileHandle.containersSize();
        // window.addEventListener("resize", this.windowResize);

        // get all menus from Credentials
        if (this.props.menus.allMenus.length === 0) {
            apiAuth.getClientCredentials().then((res) => {
                this._getAllMenus(res.access_token);
            })
        }

        // check if token has expired
        if (this.props.auth.auth) {
            this._getUserInformation(this.props.auth.token);
        }
    }

    componentDidUpdate = () => {
        window.scrollTo(0, 0);
    }

    // windowResize = () => {
    //     HelperDesktopHandle.DesktopHandle.resetDesktopMenu();
    //     HelperDesktopHandle.DesktopHandle.maxHeightDesktopMenu();
    //     HelperMobileHandle.MobileHandle.containersSize();
    // }

    // check if token has expired
    _getUserInformation = (access_token) => {

        console.log('check if token has expired');

        const cb = (obj) => {
            // console.log("check cb : ", obj);

            if (obj.status === 401) {
                this._refreshTokenByRefreshToken(this.props.auth.refreshToken);
            }
        }
        const eCb = (obj) => {
            // console.log("eCb : ", obj);
        }
        const params = null;

        apiAuth.getUserInformation(params, access_token, cb, eCb);
    }

    // refresh token by refresh_token
    _refreshTokenByRefreshToken = (refresh_token) => {

        console.log('refresh token by refresh_token');

        const cb = (obj) => {
            // console.log("123 cb : ", obj);
            this.props.refreshTokenByRefreshTokenP(obj.body);
        }
        const eCb = (obj) => {
            // console.log("eCb : ", obj);
        }

        apiAuth.refreshTokenByRefreshToken(refresh_token, cb, eCb);
    }

    _getAllMenus = (token) => {

        if (typeof token !== 'undefined') {

            const cb = (obj) => {
                console.log("cb : ", obj);
                this.props.getAllMenusP(obj.body);
            }
            const eCb = (obj) => {
                console.log("eCb : ", obj);
            }
            const params = null;

            apiMenus.getAllMenus(params, token, cb, eCb);
        }
    }

    getComponent = (currentURL, params) => {

        if (currentURL) {
            // console.log(params);

            switch (currentURL) {

                case 'home': {
                    return <Home />;
                }
                case 'login-register': {
                    return <LoginRegister />;
                }

                /*** ABOUT US ***/
                case 'what-is-netizen-academy': {
                    return <WhatIsNetizenAcademy />;
                    // return <ImageText
                    //     relativePath={currentURL}
                    // />
                }
                case 'our-mission-and-strategy': {
                    return <OurMissionAndStrategy />;
                    // return <ImageText
                    //     relativePath={currentURL}
                    // />
                }
                case 'sitemap': {
                    return <Sitemap />;
                    // return <ImageText
                    //     relativePath={currentURL}
                    // />
                }
                case 'contact-us': {
                    return <ContactUs />;
                }

                /*** RESOURCES FOR YOU ***/

                // Primary School
                case 'primary-school-home': {
                    return <PrimarySchoolHome
                        tabIndex={1}
                    />
                    // return <ImageTabGrid
                    //     tabIndex={1}
                    // />;
                }
                case 'primary-general-tips': {
                    return <PrimaryGeneralTips />;
                }
                case 'primary-social-media-user-guide': {
                    return <PrimarySocialMediaUserGuide />;
                    // return <ImageText
                    //     relativePath={currentURL}
                    // />
                }
                case 'primary-quiz': {
                    return <PrimaryQuiz />;
                }
                case 'primary-video': {
                    return <PrimaryVideo />;
                }
                case 'primary-risk-and-danger': {
                    return <PrimaryRiskAndDanger />;
                    // return <ImageText
                    //     relativePath={currentURL}
                    // />
                }
                case 'primary-game': {
                    return <PrimaryGame />;
                }
                case 'primary-netizen-pledge': {
                    return <PrimaryNetizenPledge />;
                }

                // Secondary School
                case 'secondary-school-home': {
                    return <PrimarySchoolHome
                        tabIndex={2}
                    />;
                    // return <ImageTabGrid
                    //     tabIndex={2}
                    // />;
                }
                case 'secondary-general-tips': {
                    return <PrimaryGeneralTips />;
                }
                case 'secondary-social-media-user-guide': {
                    return <PrimarySocialMediaUserGuide />
                    // return <ImageText
                    //     relativePath={currentURL}
                    // />
                }
                case 'secondary-quiz': {
                    return <SecondaryQuiz />;
                }
                case 'secondary-risk-and-danger': {
                    return <PrimaryRiskAndDanger />
                    // return <ImageText
                    //     relativePath={currentURL}
                    // />
                }
                case 'secondary-game': {
                    return <SecondaryGame />;
                }
                case 'secondary-video': {
                    return <PrimaryVideo />;
                }
                case 'secondary-netizen-pledge': {
                    return <PrimaryNetizenPledge />;
                }

                // Parents
                case 'parents-home': {
                    return <ParentsHome />;
                    // return <ImageGrid />;
                }
                case 'parents-tips': {
                    return <ParentsTips />;
                    // return <ImageText
                    //     relativePath={currentURL}
                    // />
                }
                case 'parents-blog': {
                    return <ParentsBlog />;
                }
                case 'parents-blog-detail': {
                    return <ParentsBlogDetail />;
                }
                case 'parents-nettube': {
                    return <ParentsNetTube />;
                }
                case 'parents-nettube-detail': {
                    return <ParentsNetTubeDetail />;
                }
                case 'parents-training-workshop': {
                    return <ParentsTrainingWorkshop />;
                    // return <ImageText
                    //     relativePath={currentURL}
                    // />
                }
                case 'parents-more-resources': {
                    return <ParentsMoreResources />;
                    // return <ImageText
                    //     relativePath={currentURL}
                    // />
                }

                /*** FEATURED ISSUES ***/
                case 'online-grooming': {
                    return <OnlineGrooming />;
                    // return <ImageText
                    //     relativePath={currentURL}
                    // />
                }
                case 'sexting': {
                    return <Sexting />;
                    // return <ImageText
                    //     relativePath={currentURL}
                    // />
                }
                case 'personal-privacy': {
                    return <PersonalPrivacy />;
                    // return <ImageText
                    //     relativePath={currentURL}
                    // />
                }
                case 'legislations': {
                    return <Legislations />;
                    // return <ImageText
                    //     relativePath={currentURL}
                    // />
                }

                /*** RESEARCH FINDINGS ***/
                case 'our-research': {
                    return <OurResearch />;
                    // return <ImageText
                    //     relativePath={currentURL}
                    // />
                }
                case 'other-findings': {
                    return <OtherFindings />;
                    // return <ImageText
                    //     relativePath={currentURL}
                    // />
                }

                /*** OUR EVENTS ***/
                case 'events-safer-internet-day-2019': {
                    return <EventsSaferInternetDay2019 />;
                }
                case 'events-smart-netizen-competition': {
                    return <EventsSmartNetizenCompetition />;
                }
                case 'events-training-workshops': {
                    return <EventsTrainingWorkshops />;
                }

                /*** EXTERNAL RESOURCES ***/
                case 'external-resources': {
                    return <ExternalResources />;
                }

                default: {
                    return <PageNotFound />;
                }
            }
        } else {
            return <Home />
        }
    }

    render() {
        // console.log(this.props.route.location.pathname);

        let pathname = this.props.route.location.pathname,
            search = this.props.route.location.search,
            urlArray = pathname.split("/"),
            currentURL = urlArray[2],
            params = null;

        if (search !== "")
            params = querySearch(search);

        return (
            <div>
                <div id="wrap">
                    <Header />
                    {(currentURL === '' || typeof currentURL === 'undefined') &&
                        <HeroMenu />
                    }
                    <MainMenu />

                    {this.getComponent(currentURL, params)}

                    <Footer />

                    {this.state.debug &&
                        <FooterSitemap />
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    route: state.router,
    auth: state.auth,
    menus: state.menus
});

const mapDispatchToProps = dispatch => ({
    refreshTokenByRefreshTokenP: data => dispatch(refreshTokenByRefreshToken(data)),
    getAllMenusP: data => dispatch(getAllMenus(data)),
});

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(App));
