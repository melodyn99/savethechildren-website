// Essential for all components
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { Redirect } from 'react-router';
// import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

// Styling

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

class OurMissionAndStrategy extends Component {
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
                                    <img src={require('../../images/AboutUs/banner_boutus-02Our-mission.png')} alt="" />
                                </div>
                                <div className="bottom">
                                    <h3>Our mission and strategy</h3>
                                    <ul>
                                        <li>To enhance public awareness on the potential child protection risks in the digital world</li>
                                        <li>To equip children and their parents/caregivers, and professionals like teachers and social workers, with knowledge and skills, and practical tips in coping with the challenges being encountered in the digital world</li>
                                        <li>To promote smart use of internet and screen device, and social media</li>
                                    </ul>
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

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(OurMissionAndStrategy));
