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
                                    <h3>{t("AboutUs:whatIsNetizenAcademy.title1")}</h3>
                                    <p>{t("AboutUs:whatIsNetizenAcademy.content1")}</p>
                                    <p>{t("AboutUs:whatIsNetizenAcademy.content2")}</p>
                                    <h3>{t("AboutUs:whatIsNetizenAcademy.title2")}</h3>
                                    <p>{t("AboutUs:whatIsNetizenAcademy.content3")}</p>
                                    <p>{t("AboutUs:whatIsNetizenAcademy.content4")}</p>
                                    <p>{t("AboutUs:whatIsNetizenAcademy.content5")}</p>
                                    <h3>{t("AboutUs:whatIsNetizenAcademy.title3")}</h3>
                                    <p>{t("AboutUs:whatIsNetizenAcademy.content6")}</p>
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
