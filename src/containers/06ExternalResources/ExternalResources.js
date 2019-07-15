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
                                                        <img src={require('../../images/ExternalResources/btn_externalresources_01_EHelp.png')} alt="" />
                                                        <div className="text">
                                                            <Link to={"/" + i18n.language + "/"}>{t("ExternalResources:block1.title")}</Link>
                                                        </div>
                                                    </div>
                                                    <div className="bottom">
                                                        <h3>{t("ExternalResources:block1.subtitle")}</h3>
                                                        <h4>{t("ExternalResources:block1.content")}</h4>
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
                                                        <h4>{t("ExternalResources:block2.content")}</h4>                                                    
                                                    </div>
                                                </div>
                                            </Grid>

                                            <Grid item xs={6}>
                                                <div className="grid">
                                                    <div className="top">
                                                        <img src={require('../../images/ExternalResources/btn_externalresources_03_INHOPE.png')} alt="" />
                                                        <div className="text light-background">
                                                            <Link to={"/" + i18n.language + "/"}>{t("ExternalResources:block3.title")}</Link>
                                                        </div>
                                                    </div>
                                                    <div className="bottom">
                                                        <h3>{t("ExternalResources:block3.subtitle")}</h3>
                                                        <h4>{t("ExternalResources:block3.content")}</h4>                                                    
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
                                                        <h4>{t("ExternalResources:block4.content")}</h4>                                                    
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
