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
import { login } from '../../../Redux/Action/authAction';

// Utils

// Children components
import BreadCrumb from '../../../components/100Include/BreadCrumb';

class ParentsNetTubeDetail extends Component {
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
                            <div className="VideoDetail">
                                <div className="upper">
                                    <img src={require('../../../images/ResourcesForYou/Parents/Banner/banner_resourceforyou-Parents.png')} alt="" />
                                </div>
                                <div className="bottom">
                                    <h3>生活影片</h3>
                                    <h5>Hilary Yip (article and videos under production by SCHK)</h5>
                                    <p>健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活</p>
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

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(ParentsNetTubeDetail));
