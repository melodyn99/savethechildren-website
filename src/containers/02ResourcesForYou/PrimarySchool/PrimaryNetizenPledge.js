// Essential for all components
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { Redirect } from 'react-router';
// import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

// Styling
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';

// Api
// import { apiAuth } from '../../Api/ApiAuth';

// Redux
import { connect } from 'react-redux';
import { login } from '../../../Redux/Action/authAction';

// Utils

// Children components
import BreadCrumb from '../../../components/100Include/BreadCrumb';

class PrimaryNetizenPledge extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formSubmitted: false,
            lavender: true
        }
    }

    render() {
        const { t } = this.props;

        return (
            <div className="wrapper-container-main">
                <div className="container-main">
                    <BreadCrumb />
                    <div className="wrapper-content">
                        <div className="content lavender-background">
                            <h2>{t("PrimaryNetizenPledge:title")}</h2>
                            <Grid container spacing={16} style={{ 'paddingBottom': '40px' }}>
                                <Grid item xs={2}>
                                    <div className="button-wrapper lavender">
                                        <Button className="button">
                                            <img src={require('../../../images/btn_print.png')} alt="" />
                                        </Button>
                                        <Button className="button">
                                            <img src={require('../../../images/btn_share.png')} alt="" />
                                        </Button>
                                        <Button className="button">
                                            <img src={require('../../../images/btn_download.png')} alt="" />
                                        </Button>
                                    </div>
                                </Grid>
                                <Grid item xs={10}>
                                    <img src={require('../../../images/ResourcesForYou/NetizenPledge/img_netizenpledge-Samplepledge.png')} alt="" width="90%" />
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
    loginP: data => dispatch(login(data))
});

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(PrimaryNetizenPledge));
