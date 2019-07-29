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

class PrimaryVideo extends Component {
    // constructor(props) {
    //     super(props);

    // }

    render() {
        const { t } = this.props;

        return (
            <div className="wrapper-container-main">
                <div className="container-main">
                    <BreadCrumb />
                    <div className="wrapper-content">
                        <div className="content">
                            <div className="Video">
                                <div className="upper">
                                    <h3>{t("PrimaryVideo:title")}</h3>
                                </div>
                                <div className="bottom">
                                    <video controls="controls" autoplay="true"> 
                                        <source src={require('../../../videos/Animation_savethechildren_NewVersion_V3_1920x1080.mp4')} type='video/mp4'/>
                                    </video>
                                    {/* <video source src={require('../../../videos/Animation_savethechildren_NewVersion_V3_1920x1080.mp4')} alt="" /> */}
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

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(PrimaryVideo));
