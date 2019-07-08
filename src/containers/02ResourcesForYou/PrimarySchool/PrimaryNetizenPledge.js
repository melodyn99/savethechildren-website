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
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';

// Api
// import { apiAuth } from '../../Api/ApiAuth';
// import { apiConferences } from '../../Api/ApiConferences';

// Redux
import { connect } from 'react-redux';
import { login, verifyToken } from '../../../Redux/Action/authAction';

// Utils

// Children components
import BreadCrumb from '../../../components/100Include/BreadCrumb';

class PrimaryNetizenPledge extends Component {
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
                        <div className="content lavender-background">
                            <Grid container spacing={16}>
                                <Grid item xs={2}>
                                    <Button style={{'maxWidth':'150px'}}>
                                        <img src={require('../../../images/btn_print.png')} alt="" width="100%"/>
                                    </Button>
                                    <Button style={{'maxWidth':'150px'}}>
                                        <img src={require('../../../images/btn_share.png')} alt="" width="100%"/>
                                    </Button>"
                                    <Button style={{'maxWidth':'150px'}}>
                                        <img src={require('../../../images/btn_download.png')} alt="" width="100%"/>
                                    </Button>
                                </Grid>
                                <Grid item xs={10}>
                                    <img src={require('../../../images/ResourcesForYou/NetizenPledge/img_netizenpledge-Samplepledge.png')} alt="" width="100%"/>
                                </Grid>
                            </Grid>
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

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(withStyles(combinedStyles)(PrimaryNetizenPledge)));
