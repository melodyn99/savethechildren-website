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
import { login } from '../../../Redux/Action/authAction';

// Utils

// Children components
import BreadCrumb from '../../../components/100Include/BreadCrumb';

class ParentsHome extends Component {
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
                            <div className="ImageGridParents">
                                <div className="upper">
                                    <img src={require('../../../images/ResourcesForYou/Parents/Banner/banner_resourceforyou-Parents.png')} alt="" />
                                </div>
                                <div className="bottom">
                                    <Grid container spacing={16}>
                                        <Grid item xs={6}>
                                            <div className="grid">
                                                <img src={require('../../../images/ResourcesForYou/Parents/Button/btn_parents_01_blog.png')} alt="" />
                                                <div className="text">
                                                    <Link to={"/" + i18n.language + "/parents-blog"}>Blog</Link>
                                                </div>
                                            </div>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <div className="grid">
                                                <img src={require('../../../images/ResourcesForYou/Parents/Button/btn_parents_02_parentstis.png')} alt="" />
                                                <div className="text">
                                                    <Link to={"/" + i18n.language + "/parents-tips"}>Parenting Tips</Link>
                                                </div>
                                            </div>
                                        </Grid>

                                        <Grid item xs={6}>
                                            <div className="grid">
                                                <img src={require('../../../images/ResourcesForYou/Parents/Button/btn_parents_03_blog_video.png')} alt="" />
                                                <div className="text">
                                                    <Link to={"/" + i18n.language + "/parents-videos-sc-nwb"}>Videos: SC NWB Parents</Link>
                                                </div>
                                            </div>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <div className="grid">
                                                <img src={require('../../../images/ResourcesForYou/Parents/Button/btn_parents_04_blog_video-POPA.png')} alt="" />
                                                <div className="text">
                                                    <Link to={"/" + i18n.language + "/parents-videos-popa"}>Videos: POPA Channel</Link>
                                                </div>
                                            </div>
                                        </Grid>

                                        <Grid item xs={6}>
                                            <div className="grid">
                                                <img src={require('../../../images/ResourcesForYou/Parents/Button/btn_parents_05_training_workshop.png')} alt="" />
                                                <div className="text">
                                                    <Link to={"/" + i18n.language + "/parents-training-workshop"}>Training Workshops</Link>
                                                </div>
                                            </div>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <div className="grid">
                                                <img src={require('../../../images/ResourcesForYou/Parents/Button/btn_parents_06_more_resources_on_parenting.png')} alt="" />
                                                <div className="text">
                                                    <Link to={"/" + i18n.language + "/parents-more-resources"}>More Resources on Parenting</Link>
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

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(ParentsHome));
