// Essential for all components
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { Redirect } from 'react-router';
// import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

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

class ContactUs extends Component {
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
                        <div className="content contact">
                            <div className="ImageTextGrid2">
                                <div className="upper">
                                    <img src={require('../../images/AboutUs/banner_aboutus-03Contact_us.png')} alt="" />
                                </div>
                                <div className="narrow">
                                    {/* <div className="bottom"> */}
                                    {/* <img src={require('../../images/AboutUs/ContactUs/ic_contactus-01FB.png')} alt="" /> */}
                                    <p>https://www.facebook.com/savethechildrenhk/</p>
                                    {/* </div>
                                    <div className="bottom">
                                    <img src={require('../../images/AboutUs/ContactUs/ic_contactus-02IG.png')} alt="" /> */}
                                    <p>https://www.instagram.com/savethechildrenhk/</p>
                                    {/* </div> */}
                                    {/* <div className="bottom">
                                    <img src={require('../../images/AboutUs/ContactUs/ic_contactus-03Tel.png')} alt="" /> */}
                                    <p>(852) 2112-5640</p>
                                    {/* </div> */}
                                    {/* <div className="bottom"> */}
                                    {/* <img src={require('../../images/AboutUs/ContactUs/ic_contactus-04Fax.png')} alt="" /> */}
                                    <p>(852 3160-8685</p>

                                    {/* <img src={require('../../images/AboutUs/ContactUs/ic_contactus-05Email.png')} alt="" /> */}
                                    <p>hk.program@savethechildren.org</p>

                                    {/* <img src={require('../../images/AboutUs/ContactUs/ic_contactus-06Address.png')} alt="" /> */}
                                    <p className="address">8/F Pacific Plaza, 410-418 Des Voeux Road West, Sai Wan, Hong Kong</p>
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

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(withStyles(combinedStyles)(ContactUs)));
