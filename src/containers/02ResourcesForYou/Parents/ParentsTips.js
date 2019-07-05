// Essential for all components
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { Redirect } from 'react-router';
// import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

// Styling
import { CommonStyles } from '../../../utils/01MaterialJsStyles/00Common/common'
import { HeaderStyles } from '../../../utils/01MaterialJsStyles/00Common/header'
import combineStyles from '../../../utils/01MaterialJsStyles/00Common/combineStyles';
import { withStyles } from '@material-ui/core/styles';
// import { Button } from '@material-ui/core';

// Api
// import { apiAuth } from '../../Api/ApiAuth';
// import { apiConferences } from '../../Api/ApiConferences';

// Redux
import { connect } from 'react-redux';
import { login, verifyToken } from '../../../Redux/Action/authAction';

// Utils

// Children components
import BreadCrumb from '../../../components/100Include/BreadCrumb';

class ParentsTips extends Component {
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
                        <div className="content no-background">
                            <div className="ImageText">
                                <div className="upper">
                                    <img src={require('../../../images/ResourcesForYou/Parents/Banner/banner_resourcesforyou-Parents_general_tips.png')} alt="" />
                                </div>
                                <div className="bottom">
                                    <h3>Parents tips</h3>
                                    <h4>An adult's coring presence adult's coring presenceadult's coring presenceadult's coring presenceadult's coring presenceadult's coring presenceadult's coring presenceadult's coring presence</h4>
                                    <h4>6+1 instructions for parents</h4>
                                    <p>
                                        <ul>
                                            <li>Be positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positive</li>
                                            <li>Be positiveBe positiveBe positiveBe positiveBe positiveBe positive</li>
                                            <li>Be positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positive</li>
                                            <li>Be positiveBe positive</li>
                                            <li>Be positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positive</li>
                                            <li>Be positiveBe positiveBe positiveBe positive</li>
                                            <li>Be positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positiveBe positive</li>
                                            <li>Be positiveBe positiveBe positiveBe positive</li>
                                        </ul>
                                        Read more >>
                                    </p>
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

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(withStyles(combinedStyles)(ParentsTips)));
