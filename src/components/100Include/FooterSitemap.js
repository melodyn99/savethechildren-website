import React from 'react';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

function FooterSitemap(props) {
    const {
        // t,
        i18n } = props;

    return (
        <div className="wrapper-sitemap">
            <div className="sitemap clearfix">
                <ul>
                    <h2>Login-Register</h2>
                    <li><Link to={'/' + i18n.language + '/login-register'}>Login Register Page (done)</Link></li>

                    <h2>About us</h2>
                    <li><Link to={'/' + i18n.language + '/why-we-must-act'}>Why We Must Act (done)</Link></li>
                    <li><Link to={'/' + i18n.language + '/our-mission-and-strategy'}>Our Mission and Strategy (done)</Link></li>
                    <li><Link to={'/' + i18n.language + '/contact-us'}>Contact us (done)</Link></li>
                    <li><Link to={'/' + i18n.language + '/sitemap'}>Sitemap (done)</Link></li>

                    <div className="sep-20"></div>
                    <h2>Resouces for you</h2>

                    <h3>Primary School</h3>
                    <li><Link to={'/' + i18n.language + '/primary-school-home'}>Primary School Home (done)</Link></li>
                    <li><Link to={'/' + i18n.language + '/primary-general-tips'}>Primary School General Tips (done)</Link></li>
                    <li><Link to={'/' + i18n.language + '/primary-social-media-user-guide'}>Primary School Social Media User Guide (done)</Link></li>
                    <li><Link to={'/' + i18n.language + '/primary-quiz'}>Primary School Quiz (done)</Link></li>
                    <li><Link to={'/' + i18n.language + '/primary-risk-and-danger'}>Primary School Risk and Danger (done)</Link></li>
                    <li><Link to={'/' + i18n.language + '/primary-game'}>Primary School Game</Link></li>
                    <li><Link to={'/' + i18n.language + '/primary-netizen-pledge'}>Primary School Netizen Pledge</Link></li>

                    <h3>Secondary School</h3>
                    <li><Link to={'/' + i18n.language + '/secondary-school-home'}>Secondary School Home (done)</Link></li>
                    <li><Link to={'/' + i18n.language + '/secondary-general-tips'}>Secondary School General Tips</Link></li>
                    <li><Link to={'/' + i18n.language + '/secondary-social-media-user-guide'}>Secondary School Social Media User Guide</Link></li>
                    <li><Link to={'/' + i18n.language + '/secondary-quiz'}>Secondary School Quiz</Link></li>
                    <li><Link to={'/' + i18n.language + '/secondary-risk-and-danger'}>Secondary School Risk and Danger</Link></li>
                    <li><Link to={'/' + i18n.language + '/secondary-game'}>Secondary School Game</Link></li>
                    <li><Link to={'/' + i18n.language + '/secondary-netizen-pledge'}>Secondary School Netizen Pledge</Link></li>

                    <h3>Parents</h3>
                    <li><Link to={'/' + i18n.language + '/parents-home'}>Parents Home (done)</Link></li>
                    <li><Link to={'/' + i18n.language + '/parents-tips'}>Parents Tips (done)</Link></li>
                    <li><Link to={'/' + i18n.language + '/parents-blog'}>Parents Blog (done)</Link></li>
                    <li><Link to={'/' + i18n.language + '/parents-resource-management-homework'}>Parents Blog Detail (done)</Link></li>
                    <li><Link to={'/' + i18n.language + '/parents-videos-sc-nwb'}>Parents Videos SC NWB (done)</Link></li>
                    <li><Link to={'/' + i18n.language + '/parents-videos-sc-nwb-detail'}>Parents Videos SC NWB Detail (done)</Link></li>
                    <li><Link to={'/' + i18n.language + '/parents-training-workshop'}>Parents Training Workshop (done)</Link></li>
                    <li><Link to={'/' + i18n.language + '/parents-more-resources'}>Parents More Resources (done)</Link></li>

                    <h2>Featured Issues</h2>
                    <li><Link to={'/' + i18n.language + '/online-grooming'}>Online Grooming (done)</Link></li>
                    <li><Link to={'/' + i18n.language + '/sexting'}>Sexting (done)</Link></li>
                    <li><Link to={'/' + i18n.language + '/personal-privacy'}>Personal Privacy (done)</Link></li>
                    <li><Link to={'/' + i18n.language + '/legislations'}>Legislations (done)</Link></li>
                    
                    <h2>Research Findings</h2>
                    <li><Link to={'/' + i18n.language + '/our-research'}>Our Research (done)</Link></li>
                    <li><Link to={'/' + i18n.language + '/other-findings'}>Other Findings (done)</Link></li>

                    <h2>Our Events</h2>
                    <li><Link to={'/' + i18n.language + '/events-training-workshops'}>Events Training Workshops (done)</Link></li>
                    <li><Link to={'/' + i18n.language + '/events-safer-internet-day-2019'}>Events Safer Internet Day 2019 (done)</Link></li>
                    <li><Link to={'/' + i18n.language + '/events-smart-netizen-competition'}>Events Smart Netizen Character Design Competition</Link></li>

                    <h2>External Resouces</h2>
                    <li><Link to={'/' + i18n.language + '/external-resources'}>External Resources (done)</Link></li>
                </ul>
            </div>
        </div >
    );
}

export default withTranslation()(FooterSitemap);