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
        const { i18n } = this.props;
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
                                                            <Link to={"/" + i18n.language + "/"}>E-Help</Link>
                                                        </div>
                                                    </div>
                                                    <div className="bottom">
                                                        <h3>E-Help</h3>
                                                        <h4>_____________________________________________________________________________________________________________________________</h4>
                                                    </div>
                                                </div>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <div className="grid">
                                                    <div className="top">
                                                        <img src={require('../../images/ExternalResources/btn_externalresources_02_ACA.png')} alt="" />
                                                        <div className="text">
                                                            <Link to={"/" + i18n.language + "/"}>ACA</Link>
                                                        </div>
                                                    </div>
                                                    <div className="bottom">
                                                        <h3>ACA</h3>
                                                        <h4>_____________________________________________________________________________________________________________________________</h4>                                                    </div>
                                                </div>
                                            </Grid>

                                            <Grid item xs={6}>
                                                <div className="grid">
                                                    <div className="top">
                                                        <img src={require('../../images/ExternalResources/btn_externalresources_03_INHOPE.png')} alt="" />
                                                        <div className="text" style={{ backgroundColor: 'rgba(128,128,128,0.2)' }}>
                                                            <Link to={"/" + i18n.language + "/"}>INHOPE</Link>
                                                        </div>
                                                    </div>
                                                    <div className="bottom">
                                                        <h3>INHOPE</h3>
                                                        <h4>_____________________________________________________________________________________________________________________________</h4>                                                    </div>
                                                </div>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <div className="grid">
                                                    <div className="top">
                                                        <img src={require('../../images/ExternalResources/btn_externalresources_04_Otherresource.png')} alt="" />
                                                        <div className="text">
                                                            <Link to={"/" + i18n.language + "/"}>Other Resource</Link>
                                                        </div>
                                                    </div>
                                                    <div className="bottom">
                                                        <h3>Other Resource</h3>
                                                        <h4>_____________________________________________________________________________________________________________________________</h4>                                                    </div>
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
