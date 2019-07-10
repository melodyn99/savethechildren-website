// Essential for all components
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { Redirect } from 'react-router';
// import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

// Styling
import Grid from '@material-ui/core/Grid';
// import { Button } from '@material-ui/core';

// Api
// import { apiAuth } from '../../Api/ApiAuth';
// import { apiConferences } from '../../Api/ApiConferences';

// Redux
import { connect } from 'react-redux';
import { login } from '../../../Redux/Action/authAction';

// Utils

// Children components
import BreadCrumb from '../../../components/100Include/BreadCrumb';

class SecondarySchoolHome extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formSubmitted: false
        }
    }

    render() {
        const { i18n } = this.props;

        return (
            <div className="wrapper-container-main">
                <div className="container-main">
                    <BreadCrumb />
                    <div className="wrapper-content">
                        <div className="content">
                            <div className="ImageGridSecondary">
                                <div className="upper">
                                    <img src={require('../../../images/ResourcesForYou/PrimarySchool/Banner/banner_resourcesforyou-Primary_School.png')} alt="" />
                                </div>
                                <div className="bottom" style={{ backgroundColor: '$majorGreenYellow' }}>
                                    <Grid container spacing={16}>
                                        <Grid item xs={6}>
                                            <div className="grid">
                                                <img src={require('../../../images/ResourcesForYou/SecondarySchool/Button/btn_secondaryschool_01_Generaltips.png')} alt="" />
                                                <div className="text">
                                                    <Link to={"/" + i18n.language + "/secondary-general-tips"}>General Tips</Link>
                                                </div>
                                            </div>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <div className="grid">
                                                <img src={require('../../../images/ResourcesForYou/SecondarySchool/Button/btn_secondaryschool_02_Socialmediauserguide.png')} alt="" />
                                                <div className="text">
                                                    <Link to={"/" + i18n.language + "/secondary-social-media-user-guide"}>Social Media User Guide</Link>
                                                </div>
                                            </div>
                                        </Grid>

                                        <Grid item xs={6}>
                                            <div className="grid">
                                                <img src={require('../../../images/ResourcesForYou/SecondarySchool/Button/btn_secondaryschool_03_quiz.png')} alt="" />
                                                <div className="text">
                                                    <Link to={"/" + i18n.language + "/secondary-quiz"}>Quiz</Link>
                                                </div>
                                            </div>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <div className="grid">
                                                <img src={require('../../../images/ResourcesForYou/SecondarySchool/Button/btn_secondaryschool_04_Riskanddanger.png')} alt="" />
                                                <div className="text">
                                                    <div><Link to={"/" + i18n.language + "/secondary-risk-and-danger"}>Risk and Danger</Link></div>
                                                </div>
                                            </div>
                                        </Grid>

                                        <Grid item xs={6}>
                                            <div className="grid">
                                                <img src={require('../../../images/ResourcesForYou/SecondarySchool/Button/btn_secondaryschool_05_video.png')} alt="" />
                                                <div className="text">
                                                    <Link to={"/" + i18n.language + "/secondary-video"}>Video</Link>
                                                </div>
                                            </div>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <div className="grid">
                                                <img src={require('../../../images/ResourcesForYou/SecondarySchool/Button/btn_secondaryschool_06_game.png')} alt="" />
                                                <div className="text">
                                                    <div><Link to={"/" + i18n.language + "/secondary-game"}>Game</Link></div>
                                                </div>
                                            </div>
                                        </Grid>

                                        <Grid item xs={6}>
                                            <div className="grid">
                                                <img src={require('../../../images/ResourcesForYou/SecondarySchool/Button/btn_secondaryschool_07_TheNetizenPledge.png')} alt="" />
                                                <div className="text">
                                                    <div><Link to={"/" + i18n.language + "/secondary-netizen-pledge"}>The Netizen Pledge</Link></div>
                                                </div>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
});

const mapDispatchToProps = dispatch => ({
    loginP: data => dispatch(login(data))
});

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(SecondarySchoolHome));
