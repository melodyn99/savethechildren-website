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
import BreadCrumb from '../../components/100Include/BreadCrumb';

class SmartNetizenCompetition extends Component {
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
                    <BreadCrumb />
                    <div className="wrapper-content">
                        <div className="content">
                            <div className="ImageText">
                                <div className="upper">
                                    <img src={require('../../images/OurEvents/banner-ourevents_Ch_design.png')} alt="" />
                                </div>
                                <div className="bottom short">
                                    <h3>"The Smart Netizen" Character Design Competition</h3>
                                    <p>Training workshopsTraining workshopsTraining workshopsTraining workshopsTraining workshopsTraining workshopsTraining workshopsTraining workshopsTraining workshopsTraining workshopsTraining workshopsTraining workshopsTraining workshopsTraining workshopsTraining workshopsTraining workshops</p>
                                </div>
                            </div>
                            <div className="CategoryGrid">
                                <Grid container spacing={40}>
                                    <Grid item xs={6}>
                                        <div className="Title">
                                            <h2>Group - Junior</h2>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div className="Title">
                                            <h2>Group - Senior</h2>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div className="Title">
                                            <h2 className="left-align">Group - Junior</h2>
                                        </div>
                                    </Grid>
                                </Grid>
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

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(SmartNetizenCompetition)); 
