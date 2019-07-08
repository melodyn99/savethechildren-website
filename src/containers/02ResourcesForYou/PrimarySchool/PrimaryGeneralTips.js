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
// import ImageTextGrid from '../../../components/102Grids/ImageTextGrid';

// function Block(props) {
//     return (
//         <ImageTextGrid
//             img={props.img}
//             title={props.title}
//             p={props.p}
//         />
//     )
// }

// function Cluster(props) {
//     let rows = [];
//     for (let i = 0; i < 7; i++) {
//         rows.push(
//             <div key={i}>
//                 <Block
//                     key={i}
//                     img={props.img}
//                     title={props.title}
//                     p={props.p}
//                 />
//             </div>
//         )
//     }
//     return (rows);
// }

class PrimaryGeneralTips extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formSubmitted: false,
            // img: ['../../../images/ResourcesForYou/PrimarySchool/square_sample.jpg'],
            // title: ['YOU HAVE RIGHTS', 'YOUR VOICE IS IMPORTANT', 'BULLYING IS WRONG', 'KNOW YOUR MEDIA', 'AVOID ADDICTION', 'PROTECT YOURSELF', 'LEARN APPROPRIATE TOOLS AND TAKE PRECAUTIONS'],
            // p: ['Hold on to your rights and behave responsibly online', 'You are entitled to share your opinions and ideas', 'Dont tolerate bullying and report when necessary', 'Dont believe everythign you read online', 'Be a responsible user and avoid internet addiction', 'Protect yourself from sickening and distressing materials', 'Click on Read More o seek help if you run into problems online and woul dlike the assistance of an adult or professional']
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
                            <div className="ImageTextGrid">
                                <div className="upper">
                                    <img src={require('../../../images/ResourcesForYou/PrimarySchool/Banner/banner_resourcesforyou-Primary_School-general_tips.png')} alt="" />
                                <h2>General Tips</h2>
                                </div>
                                <Button style={{'background-color':'orange', 'margin':'10px'}}>
                                    Print
                                </Button>
                                <Button style={{'background-color':'orange', 'margin':'10px'}}>
                                    Share
                                </Button>
                                <Button style={{'background-color':'orange', 'margin':'10px'}}>
                                    Download
                                </Button>
                                <Grid container spacing={16}>
                                    <Grid item xs={6}>
                                        <div className="bottom">
                                            <Grid container spacing={16}>
                                                <Grid item xs={4}>
                                                    <div className="left">
                                                        <img src={require('../../../images/ResourcesForYou/PrimarySchool/square_sample.jpg')} alt="" />
                                                    </div>
                                                </Grid>
                                                <Grid item xs={8}>
                                                    <div className="right">
                                                        <h4>YOU HAVE RIGHTS</h4>
                                                        <p>Hold on to your rights and behave responsibly online</p>
                                                    </div>
                                                </Grid>
                                            </Grid>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div className="bottom">
                                            <Grid container spacing={16}>
                                                <Grid item xs={4}>
                                                    <div className="left">
                                                        <img src={require('../../../images/ResourcesForYou/PrimarySchool/square_sample.jpg')} alt="" />
                                                    </div>
                                                </Grid>
                                                <Grid item xs={8}>
                                                    <div className="right">
                                                        <h4>YOUR VOICE IS IMPORTANT</h4>
                                                        <p>You are entitled to share your opinions and ideas</p>
                                                    </div>
                                                </Grid>
                                            </Grid>
                                        </div>
                                    </Grid>

                                    <Grid item xs={6}>
                                        <div className="bottom">
                                            <Grid container spacing={16}>
                                                <Grid item xs={4}>
                                                    <div className="left">
                                                        <img src={require('../../../images/ResourcesForYou/PrimarySchool/square_sample.jpg')} alt="" />
                                                    </div>
                                                </Grid>
                                                <Grid item xs={8}>
                                                    <div className="right">
                                                        <h4>BULLYING IS WRONG</h4>
                                                        <p>Don't tolerate bullying and report when necessary</p>
                                                    </div>
                                                </Grid>
                                            </Grid>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div className="bottom">
                                            <Grid container spacing={16}>
                                                <Grid item xs={4}>
                                                    <div className="left">
                                                        <img src={require('../../../images/ResourcesForYou/PrimarySchool/square_sample.jpg')} alt="" />
                                                    </div>
                                                </Grid>
                                                <Grid item xs={8}>
                                                    <div className="right">
                                                        <h4>KNOW YOUR MEDIA</h4>
                                                        <p>Don't believe everything you read online</p>
                                                    </div>
                                                </Grid>
                                            </Grid>
                                        </div>
                                    </Grid>

                                    <Grid item xs={6}>
                                        <div className="bottom">
                                            <Grid container spacing={16}>
                                                <Grid item xs={4}>
                                                    <div className="left">
                                                        <img src={require('../../../images/ResourcesForYou/PrimarySchool/square_sample.jpg')} alt="" />
                                                    </div>
                                                </Grid>
                                                <Grid item xs={8}>
                                                    <div className="right">
                                                        <h4>AVOID ADDICTION</h4>
                                                        <p>Be a responsible user and avoid internet addiction</p>
                                                    </div>
                                                </Grid>
                                            </Grid>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div className="bottom">
                                            <Grid container spacing={16}>
                                                <Grid item xs={4}>
                                                    <div className="left">
                                                        <img src={require('../../../images/ResourcesForYou/PrimarySchool/square_sample.jpg')} alt="" />
                                                    </div>
                                                </Grid>
                                                <Grid item xs={8}>
                                                    <div className="right">
                                                        <h4>PROTECT YOURSELF</h4>
                                                        <p>Protect yourself from sickening and distressing materials</p>
                                                    </div>
                                                </Grid>
                                            </Grid>
                                        </div>
                                    </Grid>

                                    <Grid item xs={12}>
                                        <div className="bottom">
                                            <Grid container spacing={16}>
                                                <Grid item xs={2}>
                                                    <div className="left">
                                                        <img src={require('../../../images/ResourcesForYou/PrimarySchool/square_sample.jpg')} alt="" />
                                                    </div>
                                                </Grid>
                                                <Grid item xs={10}>
                                                    <div className="right">
                                                        <h4>LEARN APPROPRIATE TOOLS AND TAKE PRECAUTIONS</h4>
                                                        <p>Click on Read More to seek help if you run into problems online and would like the assistance of an adult or professional</p>
                                                    </div>
                                                </Grid>
                                            </Grid>
                                        </div>
                                    </Grid>
                                </Grid>
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

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(withStyles(combinedStyles)(PrimaryGeneralTips)));
