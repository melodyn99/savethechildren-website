// Essential for all components
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { Redirect } from 'react-router';
// import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

// Styling
import Grid from '@material-ui/core/Grid';

// Api
// import { apiAuth } from '../../Api/ApiAuth';

// Redux
import { connect } from 'react-redux';
import { login } from '../../Redux/Action/authAction';

// Utils

// Children components
import BreadCrumb from '../../components/100Include/BreadCrumb';

class ExternalResources extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formSubmitted: false
        }
    }

    render() {
        const { i18n, t } = this.props;
        // const { classes } = this.props;

        return (
            <div>
                <div className="wrapper-container-main">
                    <div className="container-main">
                        <BreadCrumb />
                        <div className="wrapper-content">
                            <div className="content">
                                <div className="GridGrid">
                                    <div className="upper">
                                        <img src={require('../../images/ExternalResources/banner-External_Resources.png')} alt="" />
                                    </div>
                                    <div className="lower">
                                        <Grid container spacing={16}>
                                            <Grid item xs={6}>
                                                <div className="grid">
                                                    <div className="top">
                                                        <img src={require('../../images/ExternalResources/HKedCity.png')} alt="" />
                                                        <div className="text">
                                                            <Link to={"/" + i18n.language + "/"}>{t("ExternalResources:block1.title")}</Link>
                                                        </div>
                                                    </div>
                                                    <div className="bottom">
                                                        <h3>{t("ExternalResources:block1.subtitle")}</h3>
                                                        <a href="https://www.hkedcity.net/home/">{t("ExternalResources:block1.content")}</a>
                                                    </div>
                                                </div>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <div className="grid">
                                                    <div className="top">
                                                        <img src={require('../../images/ExternalResources/btn_externalresources_02_ACA.png')} alt="" />
                                                        <div className="text">
                                                            <Link to={"/" + i18n.language + "/"}>{t("ExternalResources:block2.title")}</Link>
                                                        </div>
                                                    </div>
                                                    <div className="bottom">
                                                        <h3>{t("ExternalResources:block2.subtitle")}</h3>
                                                        <a href="https://www.aca.org.hk/index-en.php#.XT6HiY2QzzA">{t("ExternalResources:block2.content")}</a>                                                 
                                                    </div>
                                                </div>
                                            </Grid>

                                            <Grid item xs={6}>
                                                <div className="grid">
                                                    <div className="top">
                                                        <img src={require('../../images/ExternalResources/btn_externalresources_01_EHelp.png')} alt="" />
                                                        <div className="text light-background">
                                                            <Link to={"/" + i18n.language + "/"}>{t("ExternalResources:block3.title")}</Link>
                                                        </div>
                                                    </div>
                                                    <div className="bottom">
                                                        <h3>{t("ExternalResources:block3.subtitle")}</h3>
                                                        <a href="http://www.ehelp.org.hk/web/subpage.php?mid=64">{t("ExternalResources:block3.content")}</a>                                                   
                                                    </div>
                                                </div>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <div className="grid">
                                                    <div className="top">
                                                        <img src={require('../../images/ExternalResources/btn_externalresources_04_Otherresource.png')} alt="" />
                                                        <div className="text">
                                                            <Link to={"/" + i18n.language + "/"}>{t("ExternalResources:block4.title")}</Link>
                                                        </div>
                                                    </div>
                                                    <div className="bottom">
                                                        <h3>{t("ExternalResources:block4.subtitle")}</h3>
                                                        <a href="http://www.ecsaf.org.hk/English/index.php">{t("ExternalResources:block4.content")}</a>                                                 
                                                    </div>
                                                </div>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <div className="grid">
                                                    <div className="top">
                                                        <img src={require('../../images/ExternalResources/Google Safety-Center-for-Families.png')} alt="" />
                                                        <div className="text">
                                                            <Link to={"/" + i18n.language + "/"}>{t("ExternalResources:block5.title")}</Link>
                                                        </div>
                                                    </div>
                                                    <div className="bottom">
                                                        <h3>{t("ExternalResources:block5.subtitle")}</h3>
                                                        <a href="https://safety.google/">{t("ExternalResources:block5.content")}</a>                                                     
                                                    </div>
                                                </div>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <div className="grid">
                                                    <div className="top">
                                                        <img src={require('../../images/ExternalResources/Facebook Safety Center 1.png')} alt="" />
                                                        <div className="text">
                                                            <Link to={"/" + i18n.language + "/"}>{t("ExternalResources:block6.title")}</Link>
                                                        </div>
                                                    </div>
                                                    <div className="bottom">
                                                        <h3>{t("ExternalResources:block6.subtitle")}</h3>
                                                        <a href="https://www.facebook.com/safety">{t("ExternalResources:block6.content")}</a>                                                     
                                                    </div>
                                                </div>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <div className="grid">
                                                    <div className="top">
                                                        <img src={require('../../images/ExternalResources/btn_externalresources_03_INHOPE.png')} alt="" />
                                                        <div className="text">
                                                            <Link to={"/" + i18n.language + "/"}>{t("ExternalResources:block7.title")}</Link>
                                                        </div>
                                                    </div>
                                                    <div className="bottom">
                                                        <h3>{t("ExternalResources:block7.subtitle")}</h3>
                                                        <a href="http://88.208.218.79/">{t("ExternalResources:block7.content")}</a>                                                     
                                                    </div>
                                                </div>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <div className="grid">
                                                    <div className="top">
                                                        <img src={require('../../images/ExternalResources/uk-safer-internet-centre.jpg')} alt="" />
                                                        <div className="text">
                                                            <Link to={"/" + i18n.language + "/"}>{t("ExternalResources:block8.title")}</Link>
                                                        </div>
                                                    </div>
                                                    <div className="bottom">
                                                        <h3>{t("ExternalResources:block8.subtitle")}</h3>
                                                        <a href="https://www.saferinternet.org.uk/">{t("ExternalResources:block8.content")}</a>                                                     
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

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(ExternalResources));
