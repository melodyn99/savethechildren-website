// Essential for all components
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

// Redux
import { connect } from 'react-redux';

class Breadcrumb extends Component {

    renderSwitch = (currentPath) => {
        const { //t, 
            i18n } = this.props;

        switch (currentPath) {

            /*** ABOUT US ***/
            case 'why-we-must-act': {
                return (<div><span><Link to="/">About Us</Link></span> > <span>Why we must act</span></div>);
            }
            case 'our-mission-and-strategy': {
                return (<div><span><Link to="/">About Us</Link></span> > <span>Our mission and strategy</span></div>);
            }
            case 'contact-us': {
                return (<div><span><Link to="/">About Us</Link></span> > <span>Contact us</span></div>);
            }
            case 'sitemap': {
                return (<div><span><Link to="/">About Us</Link></span> > <span>Sitemap</span></div>);
            }

            /*** RESOURCES FOR YOU ***/

            // Primary School
            case 'primary-school-home': {
                return (<div><span><Link to="/">Resources for you</Link></span> > <span>Primary school</span></div>);
            }
            case 'primary-general-tips': {
                return (<div><span><Link to="/">Resources for you</Link></span> > <span><Link to={"/" + i18n.language + "/primary-school-home"}>Primary school</Link></span> > <span>General tips</span></div>);
            }
            case 'primary-social-media-user-guide': {
                return (<div><span><Link to="/">Resources for you</Link></span> > <span><Link to={"/" + i18n.language + "/primary-school-home"}>Primary school</Link></span> > <span>Social media user guide</span></div>);
            }
            case 'primary-quiz': {
                return (<div><span><Link to="/">Resources for you</Link></span> > <span><Link to={"/" + i18n.language + "/primary-school-home"}>Primary school</Link></span> > <span>Quiz</span></div>);
            }
            case 'primary-risk-and-danger': {
                return (<div><span><Link to="/">Resources for you</Link></span> > <span><Link to={"/" + i18n.language + "/primary-school-home"}>Primary school</Link></span> > <span>Risk and danger</span></div>);
            }
            case 'primary-game': {
                return (<div><span><Link to="/">Resources for you</Link></span> > <span><Link to={"/" + i18n.language + "/primary-school-home"}>Primary school</Link></span> > <span>Netizen Adventure</span></div>);
            }
            case 'primary-netizen-pledge': {
                return (<div><span><Link to="/">Resources for you</Link></span> > <span><Link to={"/" + i18n.language + "/primary-school-home"}>Primary school</Link></span> > <span>The Netizen Pledge</span></div>);
            }

            // Secondary School
            case 'secondary-school-home': {
                return (<div><span><Link to="/">Resources for you</Link></span> > <span>Secondary school</span></div>);
            }
            case 'secondary-general-tips': {
                return (<div><span><Link to="/">Resources for you</Link></span> > <span><Link to={"/" + i18n.language + "/secondary-school-home"}>Secondary school</Link></span> > <span>General tips</span></div>);
            }
            case 'secondary-social-media-user-guide': {
                return (<div><span><Link to="/">Resources for you</Link></span> > <span><Link to={"/" + i18n.language + "/secondary-school-home"}>Secondary school</Link></span> > <span>Social media user guide</span></div>);
            }
            case 'secondary-quiz': {
                return (<div><span><Link to="/">Resources for you</Link></span> > <span><Link to={"/" + i18n.language + "/secondary-school-home"}>Secondary school</Link></span> > <span>Quiz</span></div>);
            }
            case 'secondary-risk-and-danger': {
                return (<div><span><Link to="/">Resources for you</Link></span> > <span><Link to={"/" + i18n.language + "/secondary-school-home"}>Secondary school</Link></span> > <span>Risk and danger</span></div>);
            }
            case 'secondary-game': {
                return (<div><span><Link to="/">Resources for you</Link></span> > <span><Link to={"/" + i18n.language + "/secondary-school-home"}>Secondary school</Link></span> > <span>Netizen Adventure</span></div>);
            }
            case 'secondary-netizen-pledge': {
                return (<div><span><Link to="/">Resources for you</Link></span> > <span><Link to={"/" + i18n.language + "/secondary-school-home"}>Secondary school</Link></span> > <span>The Netizen Pledge</span></div>);
            }

            // Parents
            case 'parents-home': {
                return (<div><span><Link to="/">Resources for you</Link></span> > <span>Parents</span></div>);
            }
            case 'parents-tips': {
                return (<div><span><Link to="/">Resources for you</Link></span> > <span><Link to={"/" + i18n.language + "/parents-home"}>Parents</Link></span> > <span>Parents tips</span></div>);
            }
            case 'parents-blog': {
                return (<div><span><Link to="/">Resources for you</Link></span> > <span><Link to={"/" + i18n.language + "/parents-home"}>Parents</Link></span> > <span>Blog</span></div>);
            }
            case 'parents-blog-detail': {
                return (<div><span><Link to="/">Resources for you</Link></span> > <span><Link to={"/" + i18n.language + "/parents-home"}>Parents</Link></span> > <span><Link to={"/" + i18n.language + "/parents-blog"}>Blog</Link></span> > <span>儿童安全上网工具</span></div>);
            }
            case 'parents-videos-sc-nwb': {
                return (<div><span><Link to="/">Resources for you</Link></span> > <span><Link to={"/" + i18n.language + "/parents-home"}>Parents</Link></span> > <span>Videos: SC NWB</span></div>);
            }
            case 'parents-videos-sc-nwb-detail': {
                return (<div><span><Link to="/">Resources for you</Link></span> > <span><Link to={"/" + i18n.language + "/parents-home"}>Parents</Link></span> > <span><Link to={"/" + i18n.language + "/parents-videos-sc-nwb"}>Videos: SC NWB</Link></span> > <span>生活影片</span></div>);
            }
            case 'parents-training-workshop': {
                return (<div><span><Link to="/">Resources for you</Link></span> > <span><Link to={"/" + i18n.language + "/parents-home"}>Parents</Link></span> > <span>Training Workshop</span></div>);
            }
            case 'parents-more-resources': {
                return (<div><span><Link to="/">Resources for you</Link></span> > <span><Link to={"/" + i18n.language + "/parents-home"}>Parents</Link></span> > <span>More resources on parenting</span></div>);
            }

            /*** FEATURED ISSUES ***/
            case 'online-grooming': {
                return (<div><span><Link to="/">Featured Issues</Link></span> > <span>Online grooming</span></div>);
            }
            case 'sexting': {
                return (<div><span><Link to="/">Featured Issues</Link></span> > <span>Sexting</span></div>);
            }
            case 'personal-privacy': {
                return (<div><span><Link to="/">Featured Issues</Link></span> > <span>Personal privacy</span></div>);
            }
            case 'legislations': {
                return (<div><span><Link to="/">Featured Issues</Link></span> > <span>Legislations</span></div>);
            }

            /*** RESEARCH FINDINGS ***/
            case 'our-research': {
                return (<div><span><Link to="/">Research Findings</Link></span> > <span>Our research</span></div>);
            }
            case 'other-findings': {
                return (<div><span><Link to="/">Research Findings</Link></span> > <span>Other findings</span></div>);
            }

            /*** OUR EVENTS ***/
            case 'events-safer-internet-day-2019': {
                return (<div><span><Link to="/">Our Events</Link></span> > <span>Safer Inernet Day 2019</span></div>);
            }
            case 'events-smart-netizen-competition': {
                return (<div><span><Link to="/">Our Events</Link></span> > <span>"The Smart Netizen" Character Design Competition</span></div>);
            }
            case 'events-training-workshops': {
                return (<div><span><Link to="/">Our Events</Link></span> > <span>Training workshops</span></div>);
            }

            case 'external-resources': {
                return (<div><span>External Resources</span></div>)
            }

            default: {
                return (<div><span> <Link to="/">主頁</Link></span></div>);
            }
        }
    }

    render() {
        // const { t, i18n } = props;

        let pathname = this.props.route.location.pathname,
            urlArray = pathname.split("/"),
            currentPath = urlArray[2];

        return (
            <div className="Breadcrumb">
                {this.renderSwitch(currentPath)}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    route: state.router
});

export default withTranslation()(connect(mapStateToProps)(Breadcrumb));
