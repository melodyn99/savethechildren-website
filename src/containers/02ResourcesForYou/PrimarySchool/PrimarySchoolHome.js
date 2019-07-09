// Essential for all components
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { Redirect } from 'react-router';
// import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Tabs, Tab } from 'react-bootstrap';

// Styling
import { CommonStyles } from '../../../utils/01MaterialJsStyles/00Common/common'
import { HeaderStyles } from '../../../utils/01MaterialJsStyles/00Common/header'
import combineStyles from '../../../utils/01MaterialJsStyles/00Common/combineStyles';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
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
import ImageGridPrimary from '../../../components/102Grids/ImageGridPrimary';
import ImageGridSecondary from '../../../components/102Grids/ImageGridSecondary';

// function Block(props) {
//     return (
//         <ListType4
//             from={props.from}
//             same={props.same}
//             name={props.name}
//             content={props.content}
//         />
//     )
// }

class PrimarySchoolHome extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formSubmitted: false,
            tabIndex: 0
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
                            <Tabs defaultActiveKey={1} id="uncontrolled-tab-example" className="reacttabs" selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
                                <Tab eventKey={1} title="ImageGridPrimary">
                                    <ImageGridPrimary/>
                                </Tab>
                                <Tab eventKey={2} title="ImageGridSecondary">
                                    <ImageGridSecondary/>
                                </Tab>
                            </Tabs>
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
