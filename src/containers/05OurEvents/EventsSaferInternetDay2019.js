// Essential for all components
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { Redirect } from 'react-router';
// import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import Slider from "react-slick";

// Styling
import { CommonStyles } from '../../utils/01MaterialJsStyles/00Common/common'
import { HeaderStyles } from '../../utils/01MaterialJsStyles/00Common/header'
import combineStyles from '../../utils/01MaterialJsStyles/00Common/combineStyles';
import { withStyles } from '@material-ui/core/styles';
// import { Button } from '@material-ui/core';

// Api
// import { apiAuth } from '../../Api/ApiAuth';
// import { apiConferences } from '../../Api/ApiConferences';

// Redux
import { connect } from 'react-redux';
import { login, verifyToken } from '../../Redux/Action/authAction';

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
        // const { classes } = this.props;

        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
        }

        return (
            <div className="wrapper-container-main">
                <div className="container-main">
                    <BreadCrumb />
                    <div className="wrapper-content">
                        <div className="content no-background">
                            <div className="ImageText">
                                <div className="upper" style={{padding:'40px 200px', backgroundColor:'rgb(237,236,250)'}}>
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
                                    <h3>Safer Internet Day 2019 was on 5th Feb 2019!</h3>
                                    <p>Training workshopsTraining workshopsTraining workshopsTraining workshopsTraining workshopsTraining workshopsTraining workshopsTraining workshopsTraining workshopsTraining workshopsTraining workshopsTraining workshopsTraining workshopsTraining workshopsTraining workshopsTraining workshops</p>
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
    loginP: data => dispatch(login(data)),
    verifyT: token => dispatch(verifyToken(token)),
});

const combinedStyles = combineStyles(CommonStyles, HeaderStyles);

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(withStyles(combinedStyles)(SaferInternetDay2019)));
