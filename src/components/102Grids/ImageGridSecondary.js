import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { withTranslation } from 'react-i18next';

function ImageGridSecondary(props) {
    const { i18n } = props;
    return (
        <div className="ImageGridSecondary">
            <div className="upper">
                <img src={require('../../images/ResourcesForYou/SecondarySchool/Banner/banner_resourceforyou-SecondarySchool.png')} alt="" />
            </div>
            <div className="bottom" style={{backgroundColor:'$majorGreenYellow'}}>
                <Grid container spacing={16}>
                    <Grid item xs={6}>
                        <div className="grid">
                            <img src={require('../../images/ResourcesForYou/SecondarySchool/Button/btn_secondaryschool_01_Generaltips.png')} alt="" />
                            <div className="text">
                                <Link to={"/" + i18n.language + "/secondary-general-tips"}>General Tips</Link>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className="grid">
                            <img src={require('../../images/ResourcesForYou/SecondarySchool/Button/btn_secondaryschool_02_Socialmediauserguide.png')} alt="" />
                            <div className="text">
                                <Link to={"/" + i18n.language + "/secondary-social-media-user-guide"}>Social Media User Guide</Link>
                            </div>
                        </div>
                    </Grid>

                    <Grid item xs={6}>
                        <div className="grid">
                            <img src={require('../../images/ResourcesForYou/SecondarySchool/Button/btn_secondaryschool_03_quiz.png')} alt="" />
                            <div className="text">
                                <Link to={"/" + i18n.language + "/secondary-quiz"}>Quiz</Link>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className="grid">
                            <img src={require('../../images/ResourcesForYou/SecondarySchool/Button/btn_secondaryschool_04_Riskanddanger.png')} alt="" />
                            <div className="text">
                                <div><Link to={"/" + i18n.language + "/secondary-risk-and-danger"}>Risk and Danger</Link></div>
                            </div>
                        </div>
                    </Grid>

                    <Grid item xs={6}>
                        <div className="grid">
                            <img src={require('../../images/ResourcesForYou/SecondarySchool/Button/btn_secondaryschool_05_video.png')} alt="" />
                            <div className="text">
                                <Link to={"/" + i18n.language + "/secondary-video"}>Video</Link>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className="grid">
                            <img src={require('../../images/ResourcesForYou/SecondarySchool/Button/btn_secondaryschool_06_game.png')} alt="" />
                            <div className="text">
                                <div><Link to={"/" + i18n.language + "/secondary-game"}>Game</Link></div>
                            </div>
                        </div>
                    </Grid>

                    <Grid item xs={6}>
                        <div className="grid">
                            <img src={require('../../images/ResourcesForYou/SecondarySchool/Button/btn_secondaryschool_07_TheNetizenPledge.png')} alt="" />
                            <div className="text">
                                <div><Link to={"/" + i18n.language + "/secondary-netizen-pledge"}>The Netizen Pledge</Link></div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default withTranslation()(ImageGridSecondary);
