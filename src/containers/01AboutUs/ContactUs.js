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
import { login } from '../../Redux/Action/authAction';

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
                                    <p className="facebook"><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/savethechildrenhk">https://www.facebook.com/savethechildrenhk</a></p>
                                    <p className="instagram"><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/savethechildrenhk">https://www.instagram.com/savethechildrenhk</a></p>
                                    <p className="tel"><a target="_blank" rel="noopener noreferrer" href="tel:+85221125640">(852) 2112-5640</a></p>
                                    <p className="fax"><a target="_blank" rel="noopener noreferrer" href="tel:+85231608685">(852) 3160-8685</a></p>
                                    <p className="email"><a target="_blank" rel="noopener noreferrer" href="mailto:hk.program@savethchildren.org">hk.program@savethechildren.org</a></p>
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
    loginP: data => dispatch(login(data))
});

const combinedStyles = combineStyles(CommonStyles, HeaderStyles);

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(withStyles(combinedStyles)(ContactUs)));
