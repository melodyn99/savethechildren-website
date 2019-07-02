// Essential for all components
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { Redirect } from 'react-router';
// import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

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

class PrimarySchoolHome extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formSubmitted: false
        }
    }

    render() {
        const { i18n } = this.props;

        return (
            <div className="wrapper-container-main">
                <div className="container-main">
                    <BreadCrumb />
                    <div className="wrapper-content">
                        <div className="content">
                            {/* Grid */}
                            Primary School Home
                            <div><Link to={"/" + i18n.language + "/primary-general-tips"}>General Tips</Link></div>
                            <div><Link to={"/" + i18n.language + "/primary-quiz"}>Quiz</Link></div>
                            <div><Link to={"/" + i18n.language + "/primary-video"}>Video</Link></div>
                            <div><Link to={"/" + i18n.language + "/primary-netizen-pledge"}>The Netizen Pledge</Link></div>
                            <div><Link to={"/" + i18n.language + "/primary-social-media-user-guide"}>Social Media User Guide</Link></div>
                            <div><Link to={"/" + i18n.language + "/primary-risk-and-danger"}>Risk and Danger</Link></div>
                            <div><Link to={"/" + i18n.language + "/primary-game"}>Game</Link></div>
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

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(withStyles(combinedStyles)(PrimarySchoolHome)));
