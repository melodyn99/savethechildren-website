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

class ContactUs extends Component {
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
                        <div className="content contact">
                            <div className="ImageTextGrid2">
                                <div className="upper">
                                    <img src={require('../../images/AboutUs/banner_aboutus-03Contact_us.png')} alt="" />
                                </div>
                                <div className="narrow">
                                    <p className="facebook"><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/savethechildrenhk">{t("AboutUs:contactUs.fb")}</a></p>
                                    <p className="instagram"><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/savethechildrenhk">{t("AboutUs:contactUs.ig")}</a></p>
                                    <p className="tel"><a target="_blank" rel="noopener noreferrer" href="tel:+85221125640">{t("AboutUs:contactUs.phone")}</a></p>
                                    <p className="fax"><a target="_blank" rel="noopener noreferrer" href="tel:+85231608685">{t("AboutUs:contactUs.fax")}</a></p>
                                    <p className="email"><a target="_blank" rel="noopener noreferrer" href="mailto:hk.program@savethchildren.org">{t("AboutUs:contactUs.email")}</a></p>
                                    <p className="address">{t("AboutUs:contactUs.address")}</p>
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

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(ContactUs));
