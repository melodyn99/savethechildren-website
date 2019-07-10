// Essential for all components
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { Redirect } from 'react-router';
// import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import Slider from "react-slick";

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

class EventsTrainingWorkshops extends Component {
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
            dotsClass: 'slickDots',
        }

        return (
            <div className="wrapper-container-main">
                <div className="container-main">
                    <BreadCrumb />
                    <div className="wrapper-content">
                        <div className="content">
                            <div className="ImageText">
                                <div className="upper">
                                    <Slider {...settings}>
                                        <div>
                                            <img src={require('../../images/FeaturedIssues/banner_featured issues-Sexting.png')} alt="" />
                                        </div>
                                        <div>
                                            <img src={require('../../images/FeaturedIssues/banner_featured issues-Sexting.png')} alt="" />
                                        </div>
                                        <div>
                                            <img src={require('../../images/FeaturedIssues/banner_featured issues-Sexting.png')} alt="" />
                                        </div>
                                        <div>
                                            <img src={require('../../images/FeaturedIssues/banner_featured issues-Sexting.png')} alt="" />
                                        </div>
                                    </Slider>
                                </div>
                                <div className="bottom">
                                    <h3>Training workshops</h3>
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
    loginP: data => dispatch(login(data))
});

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(EventsTrainingWorkshops)); 
