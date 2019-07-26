// Essential for all components
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { Redirect } from 'react-router';
// import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

// Styling

// Api
// import { apiAuth } from '../../Api/ApiAuth';

// Redux
import { connect } from 'react-redux';
import { login } from '../../Redux/Action/authAction';

// Utils

// Children components
import BreadCrumb from '../../components/100Include/BreadCrumb';

class WhatIsNetizenAcademy extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formSubmitted: false
        }
    }

    render() {
        const { t } = this.props;

        return (
            <div className="wrapper-container-main">
                <div className="container-main">
                    <BreadCrumb />
                    <div className="wrapper-content">
                        <div className="content">
                            <div className="ImageText">
                                <div className="upper">
                                    <img src={require('../../images/AboutUs/banner_aboutus-01Whymemustact.png')} alt="" />
                                </div>
                                <div className="bottom">
                                    {/* <h3>What is Netizen Academy?</h3>
                                    <p> Netizen Academy is established by Save the Children Hong Kong for providing preventive measures towards the uprising concern of online child protection issues in the digital world.</p>
                                    <p>Netizen Academy is a web-based awareness centre for hosting child-friendly resources for combating the problem of online child sexual abuse. </p>
                                    <h3>Why we should act?</h3><p>The online world is real world. One can benefit from surfing the web and equally can be harmed for lacking awareness and knowledge.</p><p> Connecting to the digital world becomes an integral part of cosmopolitan life. Rights of children and young people in accessing the digital world for sharing opinions and ideas, searching for information and connecting with friends need to be ensured.</p><p> Children have rights to be protected in the physical world, as well as the digital world.</p><h3>The character</h3><p>The character representing Netizen Academy is designed by a student in Hong Kong, whose design adapts from the logo of Save the Children. It aims at protecting children from online threats and risks. Its body, in the form of a tablet, and right arm are specifically designed for analysing and monitoring any threats in the digital world<p> */}
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

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(WhatIsNetizenAcademy));
