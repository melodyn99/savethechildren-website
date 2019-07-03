import React, { Component } from 'react';
// import {Redirect} from 'react-router';
import './css/App.scss';
import { withTranslation } from 'react-i18next';

// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import * as AnimationsActionCreators from './actions/animations';

import querySearch from "stringquery";

import Header from './components/100Include/Header';
import Footer from './components/100Include/Footer';
import MainMenu from './components/100Include/MainMenu';

// import * as HelperDesktopHandle from './utils/00JqueryControl/DesktopHandle';
// import * as HelperMobileHandle from './utils/00JqueryControl/MobileHandle';
// import * as HelperPopup from './utils/00JqueryControl/Popup';

// Home
import Home from './containers/00Home/Home';

/*** About Us ***/
import WhyWeMustAct from './containers/01AboutUs/WhyWeMustAct';
import OurMissionAndStrategy from './containers/01AboutUs/OurMissionAndStrategy';
import Sitemap from './containers/01AboutUs/Sitemap';
import ContactUs from './containers/01AboutUs/ContactUs';

/** Resources For You ***/

// Primary School
import PrimarySchoolHome from './containers/02ResourcesForYou/PrimarySchool/PrimarySchoolHome';
import PrimaryGeneralTips from './containers/02ResourcesForYou/PrimarySchool/PrimaryGeneralTips';
import PrimarySocialMediaUserGuide from './containers/02ResourcesForYou/PrimarySchool/PrimarySocialMediaUserGuide';
import PrimaryQuiz from './containers/02ResourcesForYou/PrimarySchool/PrimaryQuiz';
import PrimaryRiskAndDanger from './containers/02ResourcesForYou/PrimarySchool/PrimaryRiskAndDanger';
import PrimaryGame from './containers/02ResourcesForYou/PrimarySchool/PrimaryGame';
import PrimaryNetizenPledge from './containers/02ResourcesForYou/PrimarySchool/PrimaryNetizenPledge';

// Secondary School
import SecondarySchoolHome from './containers/02ResourcesForYou/SecondarySchool/SecondarySchoolHome';
import SecondaryGeneralTips from './containers/02ResourcesForYou/SecondarySchool/SecondaryGeneralTips';
import SecondaryGame from './containers/02ResourcesForYou/SecondarySchool/SecondaryGame';
import SecondaryQuiz from './containers/02ResourcesForYou/SecondarySchool/SecondaryQuiz';
import SecondaryNetizenPledge from './containers/02ResourcesForYou/SecondarySchool/SecondaryNetizenPledge';
import SecondaryRiskAndDanger from './containers/02ResourcesForYou/SecondarySchool/SecondaryRiskAndDanger';
import SecondarySocialMediaUserGuide from './containers/02ResourcesForYou/SecondarySchool/SecondarySocialMediaUserGuide';

// Parents
import ParentsHome from './containers/02ResourcesForYou/Parents/ParentsHome';
import ParentsTips from './containers/02ResourcesForYou/Parents/ParentsTips';
import ParentsBlog from './containers/02ResourcesForYou/Parents/ParentsBlog';
import ParentsBlogDetail from './containers/02ResourcesForYou/Parents/ParentsBlogDetail';
import ParentsVideosSCNWB from './containers/02ResourcesForYou/Parents/ParentsVideosSCNWB';
import ParentsVideosSCNWBDetail from './containers/02ResourcesForYou/Parents/ParentsVideosSCNWBDetail';
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

// import CommonPage from './components/103Pages/CommonPage';
// import QuizPage from './components/103Pages/QuizPage';
// import GamePage from './components/103Pages/GamePage';

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
    }

    componentDidUpdate = () => {
        window.scrollTo(0, 0);
    }

    windowResize = () => {
        // HelperDesktopHandle.DesktopHandle.resetDesktopMenu();
        // HelperDesktopHandle.DesktopHandle.maxHeightDesktopMenu();
        // HelperMobileHandle.MobileHandle.containersSize();
    }

    getComponent = (currentURL, params) => {

        if (currentURL) {
            // console.log(params);

            switch (currentURL) {

                case 'home': {
                    return <Home />;
                }

                /*** ABOUT US ***/
                case 'why-we-must-act': {
                    return <WhyWeMustAct />;
                }
                case 'our-mission-and-strategy': {
                    return <OurMissionAndStrategy />;
                }
                case 'sitemap': {
                    return <Sitemap />;
                }
                case 'contact-us': {
                    return <ContactUs />;
                }

                /*** RESOURCES FOR YOU ***/

                // Primary School
                case 'primary-school-home': {
                    return <PrimarySchoolHome />;
                }
                case 'primary-general-tips': {
                    return <PrimaryGeneralTips />;
                }
                case 'primary-social-media-user-guide': {
                    return <PrimarySocialMediaUserGuide />;
                }
                case 'primary-quiz': {
                    return <PrimaryQuiz />;
                }
                case 'primary-risk-and-danger': {
                    return <PrimaryRiskAndDanger />;
                }
                case 'primary-game': {
                    return <PrimaryGame />;
                }
                case 'primary-netizen-pledge': {
                    return <PrimaryNetizenPledge />;
                }

                // Secondary School
                case 'secondary-school-home': {
                    return <SecondarySchoolHome />;
                }
                case 'secondary-general-tips': {
                    return <SecondaryGeneralTips />;
                }
                case 'secondary-social-media-user-guide': {
                    return <SecondarySocialMediaUserGuide />;
                }
                case 'secondary-quiz': {
                    return <SecondaryQuiz />;
                }
                case 'secondary-risk-and-danger': {
                    return <SecondaryRiskAndDanger />;
                }
                case 'secondary-game': {
                    return <SecondaryGame />;
                }
                case 'secondary-netizen-pledge': {
                    return <SecondaryNetizenPledge />;
                }

                // Parents
                case 'parents-home': {
                    return <ParentsHome />;
                }
                case 'parents-tips': {
                    return <ParentsTips />;
                }
                case 'parents-blog': {
                    return <ParentsBlog />;
                }
                case 'parents-blog-detail': {
                    return <ParentsBlogDetail />;
                }
                case 'parents-videos-sc-nwb': {
                    return <ParentsVideosSCNWB />;
                }
                case 'parents-videos-sc-nwb-detail': {
                    return <ParentsVideosSCNWBDetail />;
                }
                case 'parents-training-workshop': {
                    return <ParentsTrainingWorkshop />;
                }
                case 'parents-more-resources': {
                    return <ParentsMoreResources />;
                }

                /*** FEATURED ISSUES ***/
                case 'online-grooming': {
                    return <OnlineGrooming />;
                }
                case 'sexting': {
                    return <Sexting />;
                }
                case 'personal-privacy': {
                    return <PersonalPrivacy />;
                }
                case 'legislations': {
                    return <Legislations />;
                }

                /*** RESEARCH FINDINGS ***/
                case 'our-research': {
                    return <OurResearch />;
                }
                case 'other-findings': {
                    return <OtherFindings />;
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

                // case 'home': {
                //     return <CommonPage />;
                // }

                // case 'game': {
                //     return <GamePage />;
                // }

                // case 'quiz': {
                //     return <QuizPage />;
                // }

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
                    <MainMenu />

                    {this.getComponent(currentURL, params)}

                    <Footer />
                    {/* <Sitemap /> */}
                </div>
            </div >
        );
    }
}

const mapStateToProps = (state) => ({
    route: state.router
});

export default withTranslation()(connect(mapStateToProps)(App));