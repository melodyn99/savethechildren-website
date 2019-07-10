// Essential for all components
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { Redirect } from 'react-router';
// import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

// Styling
import Grid from '@material-ui/core/Grid';


// Api
// import { apiAuth } from '../../Api/ApiAuth';

// Redux
import { connect } from 'react-redux';
import { login } from '../../Redux/Action/authAction';

// Utils

// Children components
// import BreadCrumb from '../../components/100Include/BreadCrumb';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formSubmitted: false
        }
    }

    render() {
        // const { classes } = this.props;

        return (
            <div className="wrapper-container-main">
                <div className="container-main">
                    <div className="wrapper-content">
                        <div className="content">
                            <div className="home">
                                <h1>Introduction of Netizen Academy</h1>
                                <p>____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________</p>
                                <div className="bottom">
                                    <Grid container spacing={16}>
                                        <Grid item xs={4}>
                                            <div className="section">
                                                <img src={require('../../images/Homepage/img_homepage_content_Resourcefoyou-02_Primary-School.png')} alt="" />
                                                <h6>Primary school</h6>
                                            </div>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <div className="section">
                                                <img src={require('../../images/Homepage/img_homepage_content_Resourcefoyou-03_Secondry-School.png')} alt="" />
                                                <h6>Secondary school</h6>
                                            </div>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <div className="section">
                                                <img src={require('../../images/Homepage/img_homepage_content_Resourcefoyou-04_Parents.png')} alt="" />
                                                <h6>Parents</h6>
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

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(Home));
