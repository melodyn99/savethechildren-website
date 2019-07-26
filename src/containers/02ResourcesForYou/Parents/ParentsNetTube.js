// Essential for all components
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';

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

class ParentsNetTube extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formSubmitted: false
        }
    }

    _goToDetail = (url) => {

        // const { i18n } = this.props;
        
        this.props.history.push(url);
        
    }

    render() {
        const { i18n } = this.props;

        return (
            <div className="wrapper-container-main">
                <div className="container-main">
                    <BreadCrumb />
                    <div className="wrapper-content">
                        <div className="content no-background">
                            <Grid container spacing={16}>
                                <Grid item xs={6}>
                                    <div className="ImageGrid2 left" onClick={() => this._goToDetail("/" + i18n.language + "/parents-nettube-detail")}>
                                        <div className="upper">
                                            <img src={require('../../../images/ResourcesForYou/Parents/Button/btn_parents_01_blog.png')} alt="" />
                                        </div>
                                        <div className="bottom">
                                            <h3>生活影片</h3>
                                            <h5>Hilary Yip (article and videos under production by SCHK)</h5>
                                            <p>KidZu是适用健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活</p>
                                            <p>官方网站: http://www.kidzui.com</p>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div className="ImageGrid2 right" onClick={() => this._goToDetail("/" + i18n.language + "/parents-nettube-detail")}>
                                        <div className="upper">
                                            <img src={require('../../../images/ResourcesForYou/Parents/Button/btn_parents_01_blog.png')} alt="" />
                                        </div>
                                        <div className="bottom">
                                            <h3>生活影片</h3>
                                            <h5>Hilary Yip (article and videos under production by SCHK)</h5>
                                            <p>KidZu是适用健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活</p>
                                            <p>官方网站: http://www.kidzui.com</p>
                                        </div>
                                    </div>
                                </Grid>

                                <Grid item xs={6}>
                                    <div className="ImageGrid2 left" onClick={() => this._goToDetail("/" + i18n.language + "/parents-nettube-detail")}>
                                        <div className="upper">
                                            <img src={require('../../../images/ResourcesForYou/Parents/Button/btn_parents_01_blog.png')} alt="" />
                                        </div>
                                        <div className="bottom">
                                            <h3>生活影片</h3>
                                            <h5>Hilary Yip (article and videos under production by SCHK)</h5>
                                            <p>KidZu是适用健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活</p>
                                            <p>官方网站: http://www.kidzui.com</p>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div className="ImageGrid2 right" onClick={() => this._goToDetail("/" + i18n.language + "/parents-nettube-detail")}>
                                        <div className="upper">
                                            <img src={require('../../../images/ResourcesForYou/Parents/Button/btn_parents_01_blog.png')} alt="" />
                                        </div>
                                        <div className="bottom">
                                            <h3>生活影片</h3>
                                            <h5>Hilary Yip (article and videos under production by SCHK)</h5>
                                            <p>KidZu是适用健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活</p>
                                            <p>官方网站: http://www.kidzui.com</p>
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                            <div><Link to={"/" + i18n.language + "/parents-videos-sc-nwb-detail"}>Video Detail</Link></div>
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

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(withRouter(ParentsNetTube)));
