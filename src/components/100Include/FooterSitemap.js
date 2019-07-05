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
                    <h2>About us</h2>
                    <li><Link to={'/' + i18n.language + '/why-we-must-act'}>Why We Must Act</Link></li>
                    <li><Link to={'/' + i18n.language + '/our-mission-and-strategy'}>Our Mission and Strategy</Link></li>
                    <li><Link to={'/' + i18n.language + '/contact-us'}>Contact us</Link></li>
                    <li><Link to={'/' + i18n.language + '/sitemap'}>Sitemap</Link></li>

                    <div className="sep-20"></div>
                    <h2>Resouces for you</h2>

                    <h3>Primary School</h3>
                    <li><Link to={'/' + i18n.language + '/primary-school-home'}>Primary School Home</Link></li>
                    <li><Link to={'/' + i18n.language + '/primary-general-tips'}>Primary School General Tips</Link></li>
                    <li><Link to={'/' + i18n.language + '/primary-social-media-user-guide'}>Primary School Social Media User Guide</Link></li>
                    <li><Link to={'/' + i18n.language + '/primary-quiz'}>Primary School Quiz</Link></li>
                    <li><Link to={'/' + i18n.language + '/primary-risk-and-danger'}>Primary School Risk and Danger</Link></li>
                    <li><Link to={'/' + i18n.language + '/primary-game'}>Primary School Game</Link></li>
                    <li><Link to={'/' + i18n.language + '/primary-netizen-pledge'}>Primary School Netizen Pledge</Link></li>

                    <h3>Secondary School</h3>
                    <li><Link to={'/' + i18n.language + '/secondary-school-home'}>Secondary School Home</Link></li>
                    <li><Link to={'/' + i18n.language + '/secondary-general-tips'}>Secondary School General Tips</Link></li>
                    <li><Link to={'/' + i18n.language + '/secondary-social-media-user-guide'}>Secondary School Social Media User Guide</Link></li>
                    <li><Link to={'/' + i18n.language + '/secondary-quiz'}>Secondary School Quiz</Link></li>
                    <li><Link to={'/' + i18n.language + '/secondary-risk-and-danger'}>Secondary School Risk and Danger</Link></li>
                    <li><Link to={'/' + i18n.language + '/secondary-game'}>Secondary School Game</Link></li>
                    <li><Link to={'/' + i18n.language + '/secondary-netizen-pledge'}>Secondary School Netizen Pledge</Link></li>

                    <h3>Parents</h3>
                    <li><Link to={'/' + i18n.language + '/parents-home'}>Parents Home</Link></li>
                    <li><Link to={'/' + i18n.language + '/parents-tips'}>Parents Tips</Link></li>
                    <li><Link to={'/' + i18n.language + '/parents-blog'}>Parents Blog</Link></li>
                    <li><Link to={'/' + i18n.language + '/parents-resource-management-homework'}>Parents Blog Detail</Link></li>
                    <li><Link to={'/' + i18n.language + '/parents-videos-sc-nwb'}>Parents Videos SC NWB</Link></li>
                    <li><Link to={'/' + i18n.language + '/parents-videos-sc-nwb-detail'}>Parents Videos SC NWB Detail</Link></li>
                    <li><Link to={'/' + i18n.language + '/parents-training-workshop'}>Parents Training Workshop</Link></li>
                    <li><Link to={'/' + i18n.language + '/parents-more-resources'}>Parents More Resources</Link></li>

                    <h2>Featured Issues</h2>
                    <li><Link to={'/' + i18n.language + '/online-grooming'}>Online Grooming</Link></li>
                    <li><Link to={'/' + i18n.language + '/sexting'}>Sexting</Link></li>
                    <li><Link to={'/' + i18n.language + '/personal-privacy'}>Personal Privacy</Link></li>
                    <li><Link to={'/' + i18n.language + '/legislations'}>Legislations</Link></li>
                    
                    <h2>Research Findings</h2>
                    <li><Link to={'/' + i18n.language + '/our-research'}>Our Research</Link></li>
                    <li><Link to={'/' + i18n.language + '/other-findings'}>Other Findings</Link></li>

                    <h2>Our Events</h2>
                    <li><Link to={'/' + i18n.language + '/events-training-workshops'}>Events Training Workshops</Link></li>
                    <li><Link to={'/' + i18n.language + '/events-safer-internet-day-2019'}>Events Safer Internet Day 2019</Link></li>
                    <li><Link to={'/' + i18n.language + '/events-smart-netizen-competition'}>Events Smart Netizen Character Design Competition</Link></li>

                    <h2>External Resouces</h2>
                    <li><Link to={'/' + i18n.language + '/external-resources'}>External Resources</Link></li>
                </ul>
            </div>
        </div >
    );
}

export default withTranslation()(FooterSitemap);