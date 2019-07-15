// Essential for all components
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { Redirect } from 'react-router';
// import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import Slider from "react-slick";

// Styling

// Api
// import { apiAuth } from '../../Api/ApiAuth';

// Redux
import { connect } from 'react-redux';
import { login } from '../../Redux/Action/authAction';

// Utils

// Children components
import BreadCrumb from '../../components/100Include/BreadCrumb';

class SaferInternetDay2019 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formSubmitted: false
        }
    }

    render() {
        const { t } = this.props;

        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dotsClass: 'slickDots1',
        }

        return (
            <div className="wrapper-container-main">
                <div className="container-main">
                    <BreadCrumb />
                    <div className="wrapper-content">
                        <div className="content no-background">
                            <div className="ImageText">
                                <div className="upper lavender" style={{ padding: '40px 200px'}}>
                                    <Slider {...settings}>
                                        <div>
                                            <img src={require('../../images/OurEvents/SaferInternetDay/img_Safer_Internet_Day-01.png')} alt="" />
                                        </div>
                                        <div>
                                            <img src={require('../../images/OurEvents/SaferInternetDay/img_Safer_Internet_Day-02.png')} alt="" />
                                        </div>
                                        <div>
                                            <img src={require('../../images/OurEvents/SaferInternetDay/img_Safer_Internet_Day-03.png')} alt="" />
                                        </div>
                                        <div>
                                            <img src={require('../../images/OurEvents/SaferInternetDay/img_Safer_Internet_Day-04.png')} alt="" />
                                        </div>
                                        <div>
                                            <img src={require('../../images/OurEvents/SaferInternetDay/img_Safer_Internet_Day-05.png')} alt="" />
                                        </div>
                                    </Slider>
                                </div>
                                <div className="bottom">
                                    <h3 style={{ padding: '20px 0px 0px 0px' }}>{t("OurEvents:SaferInternetDay2019.title")}</h3>
                                    <p>{t("OurEvents:SaferInternetDay2019.content")}</p>
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

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(SaferInternetDay2019));
