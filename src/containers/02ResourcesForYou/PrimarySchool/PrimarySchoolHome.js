// Essential for all components
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { Redirect } from 'react-router';
// import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

// Styling
import { CommonStyles } from '../../../utils/01MaterialJsStyles/00Common/common'
import { HeaderStyles } from '../../../utils/01MaterialJsStyles/00Common/header'
import combineStyles from '../../../utils/01MaterialJsStyles/00Common/combineStyles';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// import { Button } from '@material-ui/core';

// Api
// import { apiAuth } from '../../Api/ApiAuth';
// import { apiConferences } from '../../Api/ApiConferences';

// Redux
import { connect } from 'react-redux';
import { login, verifyToken } from '../../../Redux/Action/authAction';

// Utils

// Children components
import BreadCrumb from '../../../components/100Include/BreadCrumb';

class PrimarySchoolHome extends Component {
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
                        <div className="content no-background">
                            <div className="ImageGridPrimary">
                                    <div className="upper">
                                        <img src={require('../../../images/ResourcesForYou/PrimarySchool/Banner/banner_resourcesforyou-Primary_School.png')} alt="" />
                                    </div>
                                    <div className="bottom" style={{backgroundColor:'$majorGreenYellow'}}>
                                        <Grid container spacing={16}>
                                            <Grid item xs={6}>
                                                <div className="grid">
                                                    <img src={require('../../../images/ResourcesForYou/PrimarySchool/Button/btn_primaryschool_01_Generaltips.png')} alt="" />
                                                    <div className="text">
                                                        <Link to={"/" + i18n.language + "/primary-general-tips"}>General Tips</Link>
                                                    </div>
                                                </div>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <div className="grid">
                                                    <img src={require('../../../images/ResourcesForYou/PrimarySchool/Button/btn_primaryschool_02_Socialmediauserguide.png')} alt="" />
                                                    <div className="text">
                                                        <Link to={"/" + i18n.language + "/primary-social-media-user-guide"}>Social Media User Guide</Link>
                                                    </div>
                                                </div>
                                            </Grid>

                                            <Grid item xs={6}>
                                                <div className="grid">
                                                    <img src={require('../../../images/ResourcesForYou/PrimarySchool/Button/btn_primaryschool_03_quiz.png')} alt="" />
                                                    <div className="text">
                                                        <Link to={"/" + i18n.language + "/primary-quiz"}>Quiz</Link>
                                                    </div>
                                                </div>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <div className="grid">
                                                    <img src={require('../../../images/ResourcesForYou/PrimarySchool/Button/btn_primaryschool_04_onlinegrooming.png')} alt="" />
                                                    <div className="text">
                                                        <div><Link to={"/" + i18n.language + "/primary-risk-and-danger"}>Risk and Danger</Link></div>
                                                    </div>
                                                </div>
                                            </Grid>

                                            <Grid item xs={6}>
                                                <div className="grid">
                                                    <img src={require('../../../images/ResourcesForYou/PrimarySchool/Button/btn_primaryschool_05_video.png')} alt="" />
                                                    <div className="text">
                                                        <Link to={"/" + i18n.language + "/primary-video"}>Video</Link>
                                                    </div>
                                                </div>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <div className="grid">
                                                    <img src={require('../../../images/ResourcesForYou/PrimarySchool/Button/btn_primaryschool_06_game.png')} alt="" />
                                                    <div className="text">
                                                        <div><Link to={"/" + i18n.language + "/primary-game"}>Game</Link></div>
                                                    </div>
                                                </div>
                                            </Grid>

                                            <Grid item xs={6}>
                                                <div className="grid">
                                                    <img src={require('../../../images/ResourcesForYou/PrimarySchool/Button/btn_primaryschool_07_TheNetizenPledge.png')} alt="" />
                                                    <div className="text">
                                                        <div><Link to={"/" + i18n.language + "/primary-netizen-pledge"}>The Netizen Pledge</Link></div>
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
    loginP: data => dispatch(login(data)),
    verifyT: token => dispatch(verifyToken(token)),
});

const combinedStyles = combineStyles(CommonStyles, HeaderStyles);

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(withStyles(combinedStyles)(PrimarySchoolHome)));
