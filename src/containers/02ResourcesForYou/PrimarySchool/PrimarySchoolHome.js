// Essential for all components
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { Tabs, Tab } from 'react-bootstrap';

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
// import ImageGrid from '../../../components/102Grids/ImageGrid';
// import ImageGridSecondary from '../../../components/102Grids/ImageGridSecondary';

function Block(props) {
    return (
        <Grid item xs={6}>
            <div className="grid">
                <img src={require('../../../images/ResourcesForYou/PrimarySchool/Button/btn_primaryschool_01_Generaltips.png')} alt="" />
                <div className="text">
                    <Link to={"/primary-general-tips"}>General Tips</Link>
                </div>
            </div>
        </Grid>
    )
}

function Cluster(props) {
    let rows = [];
    for (let i = 0; i < 5; i++) {
        rows.push(
            <Grid container spacing={16}>
                <Block
                    key={i}
                />
            </Grid>
        )
    }
    return (rows);
}

class PrimarySchoolHome extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formSubmitted: false,
            tabIndex: 0
        }
    }

    _handleTabChange = () => {

    }

    render() {
        const { i18n } = this.props;

        return (
            <div className="wrapper-container-main">
                <div className="container-main">
                    <BreadCrumb />
                    <div className="wrapper-content">
                        <div className="content">
                            <div className={"ImageGrid " + (this.state.tabIndex === 1 ? 'Primary' : 'Secondary')}>
                                <div className="upper">
                                    <img src={require('../../../images/ResourcesForYou/PrimarySchool/Banner/banner_resourcesforyou-Primary_School.png')} alt="" />
                                </div>
                                <div className="bottom">
                                    <Tabs defaultActiveKey={1} id="uncontrolled-tab-example" onClick={this._handleTabChange}>
                                        <Tab eventKey={1} title=" Primary School (aged 6-12) ">
                                            <div className="inner">
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
                                        </Tab>

                                        <Tab eventKey={2} title=" Secondary School (aged 12-18) ">
                                            <div className="inner">
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
                                        </Tab>
                                    </Tabs>
                                </div>

                                {/* <Tabs defaultActiveKey={1} id="uncontrolled-tab-example" className="reacttabs" selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
                                <Tab eventKey={1} title="ImageGridPrimary">
                                    <ImageGridPrimary />
                                </Tab>
                                <Tab eventKey={2} title="ImageGridSecondary">
                                    <ImageGridSecondary />
                                </Tab>
                            </Tabs> */}
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
