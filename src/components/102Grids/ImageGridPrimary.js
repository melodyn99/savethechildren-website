import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { withTranslation } from 'react-i18next';
import { Tabs, Tab } from 'react-bootstrap';

class ImageGridPrimary extends Component {

    constructor(props) {
        super(props);

        this.state = {
            formSubmitted: false,
            tabIndex: 0
        }
    }

    render() {
        const { i18n } = this.props;

        return (
            <div className="ImageGridPrimary">
                <div className="upper">
                    <img src={require('../../images/ResourcesForYou/PrimarySchool/Banner/banner_resourcesforyou-Primary_School.png')} alt="" />
                </div>
                <div className="bottom" style={{ backgroundColor: '$majorGreenYellow' }}>

                    <Tabs defaultActiveKey={1} id="uncontrolled-tab-example" className="reacttabs" selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
                        <Tab eventKey={1} title="ImageGridPrimary">
                            <Grid container spacing={16}>
                                <Grid item xs={6}>
                                    <div className="grid">
                                        <img src={require('../../images/ResourcesForYou/PrimarySchool/Button/btn_primaryschool_01_Generaltips.png')} alt="" />
                                        <div className="text">
                                            <Link to={"/" + i18n.language + "/primary-general-tips"}>General Tips</Link>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div className="grid">
                                        <img src={require('../../images/ResourcesForYou/PrimarySchool/Button/btn_primaryschool_02_Socialmediauserguide.png')} alt="" />
                                        <div className="text">
                                            <Link to={"/" + i18n.language + "/primary-social-media-user-guide"}>Social Media User Guide</Link>
                                        </div>
                                    </div>
                                </Grid>

                                <Grid item xs={6}>
                                    <div className="grid">
                                        <img src={require('../../images/ResourcesForYou/PrimarySchool/Button/btn_primaryschool_03_quiz.png')} alt="" />
                                        <div className="text">
                                            <Link to={"/" + i18n.language + "/primary-quiz"}>Quiz</Link>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div className="grid">
                                        <img src={require('../../images/ResourcesForYou/PrimarySchool/Button/btn_primaryschool_04_onlinegrooming.png')} alt="" />
                                        <div className="text">
                                            <div><Link to={"/" + i18n.language + "/primary-risk-and-danger"}>Risk and Danger</Link></div>
                                        </div>
                                    </div>
                                </Grid>

                                <Grid item xs={6}>
                                    <div className="grid">
                                        <img src={require('../../images/ResourcesForYou/PrimarySchool/Button/btn_primaryschool_05_video.png')} alt="" />
                                        <div className="text">
                                            <Link to={"/" + i18n.language + "/primary-video"}>Video</Link>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div className="grid">
                                        <img src={require('../../images/ResourcesForYou/PrimarySchool/Button/btn_primaryschool_06_game.png')} alt="" />
                                        <div className="text">
                                            <div><Link to={"/" + i18n.language + "/primary-game"}>Game</Link></div>
                                        </div>
                                    </div>
                                </Grid>

                                <Grid item xs={6}>
                                    <div className="grid">
                                        <img src={require('../../images/ResourcesForYou/PrimarySchool/Button/btn_primaryschool_07_TheNetizenPledge.png')} alt="" />
                                        <div className="text">
                                            <div><Link to={"/" + i18n.language + "/primary-netizen-pledge"}>The Netizen Pledge</Link></div>
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                        </Tab>
                        <Tab eventKey={2} title="ImageGridSecondary">
                            <Grid container spacing={16}>
                                <Grid item xs={6}>
                                    <div className="grid">
                                        <img src={require('../../images/ResourcesForYou/PrimarySchool/Button/btn_primaryschool_01_Generaltips.png')} alt="" />
                                        <div className="text">
                                            <Link to={"/" + i18n.language + "/primary-general-tips"}>General Tips</Link>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div className="grid">
                                        <img src={require('../../images/ResourcesForYou/PrimarySchool/Button/btn_primaryschool_02_Socialmediauserguide.png')} alt="" />
                                        <div className="text">
                                            <Link to={"/" + i18n.language + "/primary-social-media-user-guide"}>Social Media User Guide</Link>
                                        </div>
                                    </div>
                                </Grid>

                                <Grid item xs={6}>
                                    <div className="grid">
                                        <img src={require('../../images/ResourcesForYou/PrimarySchool/Button/btn_primaryschool_03_quiz.png')} alt="" />
                                        <div className="text">
                                            <Link to={"/" + i18n.language + "/primary-quiz"}>Quiz</Link>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div className="grid">
                                        <img src={require('../../images/ResourcesForYou/PrimarySchool/Button/btn_primaryschool_04_onlinegrooming.png')} alt="" />
                                        <div className="text">
                                            <div><Link to={"/" + i18n.language + "/primary-risk-and-danger"}>Risk and Danger</Link></div>
                                        </div>
                                    </div>
                                </Grid>

                                <Grid item xs={6}>
                                    <div className="grid">
                                        <img src={require('../../images/ResourcesForYou/PrimarySchool/Button/btn_primaryschool_05_video.png')} alt="" />
                                        <div className="text">
                                            <Link to={"/" + i18n.language + "/primary-video"}>Video</Link>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div className="grid">
                                        <img src={require('../../images/ResourcesForYou/PrimarySchool/Button/btn_primaryschool_06_game.png')} alt="" />
                                        <div className="text">
                                            <div><Link to={"/" + i18n.language + "/primary-game"}>Game</Link></div>
                                        </div>
                                    </div>
                                </Grid>

                                <Grid item xs={6}>
                                    <div className="grid">
                                        <img src={require('../../images/ResourcesForYou/PrimarySchool/Button/btn_primaryschool_07_TheNetizenPledge.png')} alt="" />
                                        <div className="text">
                                            <div><Link to={"/" + i18n.language + "/primary-netizen-pledge"}>The Netizen Pledge</Link></div>
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                        </Tab>
                    </Tabs>


                </div>
            </div>
        )
    }
}

export default withTranslation()(ImageGridPrimary);
