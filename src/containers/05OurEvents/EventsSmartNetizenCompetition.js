// Essential for all components
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { Redirect } from 'react-router';
// import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

// Styling
import Grid from '@material-ui/core/Grid';

// Api
// import { apiAuth } from '../../Api/ApiAuth';

// Redux
import { connect } from 'react-redux';
import { login } from '../../Redux/Action/authAction';

// Utils

// Children components
import BreadCrumb from '../../components/100Include/BreadCrumb';

class SmartNetizenCompetition extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formSubmitted: false
        }
    }

    render() {
        // const { classes } = this.props;

        let juniorData = [
            { id: 1, title: 'Champion', image: 'img_Characterdesign-Junior-01Champion_J07.png', competitor: 'Competitor Name', character: 'Character Name', description: 'Description Description DescriptionDescription Description DescriptionDescriptionDescriptionDescriptionDescriptionDescription'},
            { id: 2, title: 'Second', image: 'img_Characterdesign-Junior-02Second_J12.png', competitor: 'Competitor Name', character: 'Character Name', description: 'Description Description DescriptionDescription Description DescriptionDescriptionDescriptionDescriptionDescriptionDescription'},
            { id: 3, title: 'Third', image: 'img_Characterdesign-Junior-03Third_J04.png', competitor: 'Competitor Name', character: 'Character Name', description: 'Description Description DescriptionDescription Description DescriptionDescriptionDescriptionDescriptionDescriptionDescription'},
            { id: 4, title: 'Merit Prize', image: 'img_Characterdesign-Junior-04Merit_Prize_J08.png', competitor: 'Competitor Name', character: 'Character Name', description: 'Description Description DescriptionDescription Description DescriptionDescriptionDescriptionDescriptionDescriptionDescription'},
            { id: 5, title: 'Merit Prize', image: 'img_Characterdesign-Junior-05Merit_Prize_J13.png', competitor: 'Competitor Name', character: 'Character Name', description: 'Description Description DescriptionDescription Description DescriptionDescriptionDescriptionDescriptionDescriptionDescription'},
            { id: 6, title: 'Merit Prize', image: 'img_Characterdesign-Junior-06Merit_Prize_J01.png', competitor: 'Competitor Name', character: 'Character Name', description: 'Description Description DescriptionDescription Description DescriptionDescriptionDescriptionDescriptionDescriptionDescription'},   
        ]

        let seniorData = [
            { id: 1, title: 'Champion', image: 'img_Characterdesign-Senior-01Champion_S01.png', competitor: 'Competitor Name', character: 'Character Name', description: 'Description Description DescriptionDescription Description DescriptionDescriptionDescriptionDescriptionDescriptionDescription'},
            { id: 2, title: 'Second', image: 'img_Characterdesign-Senior-02Secornd_S02.png', competitor: 'Competitor Name', character: 'Character Name', description: 'Description Description DescriptionDescription Description DescriptionDescriptionDescriptionDescriptionDescriptionDescription'},
            { id: 3, title: 'Third', image: 'img_Characterdesign-Senior-03Third_S11.png', competitor: 'Competitor Name', character: 'Character Name', description: 'Description Description DescriptionDescription Description DescriptionDescriptionDescriptionDescriptionDescriptionDescription'},
            { id: 4, title: 'Merit Prize', image: 'img_Characterdesign-Senior-04Merit_Prize_S03.png', competitor: 'Competitor Name', character: 'Character Name', description: 'Description Description DescriptionDescription Description DescriptionDescriptionDescriptionDescriptionDescriptionDescription'},
            { id: 5, title: 'Merit Prize', image: 'img_Characterdesign-Senior-05Merit_Prize_S06.png', competitor: 'Competitor Name', character: 'Character Name', description: 'Description Description DescriptionDescription Description DescriptionDescriptionDescriptionDescriptionDescriptionDescription'},
            { id: 6, title: 'Merit Prize', image: 'img_Characterdesign-Senior-06Merit_Prize_S05.png', competitor: 'Competitor Name', character: 'Character Name', description: 'Description Description DescriptionDescription Description DescriptionDescriptionDescriptionDescriptionDescriptionDescription'},   
        ]

        return (
            <div className="wrapper-container-main">
                <div className="container-main">
                    <BreadCrumb />
                    <div className="wrapper-content">
                        <div className="content">
                            <div className="ImageText">
                                <div className="upper">
                                    <img src={require('../../images/OurEvents/banner-ourevents_Ch_design.png')} alt="" />
                                </div>
                                <div className="bottom short">
                                    <h3>"The Smart Netizen" Character Design Competition</h3>
                                    <p>Training workshopsTraining workshopsTraining workshopsTraining workshopsTraining workshopsTraining workshopsTraining workshopsTraining workshopsTraining workshopsTraining workshopsTraining workshopsTraining workshopsTraining workshopsTraining workshopsTraining workshopsTraining workshops</p>
                                </div>
                            </div>
                            <div className="CategoryGrid">
                                <Grid container spacing={40}>
                                    <Grid item xs={6}>
                                        <div className="Title">
                                            <h2>Group - Junior</h2>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div className="Title">
                                            <h2>Group - Senior</h2>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div className="Title">
                                            <h2 className="left-align spacing">Group - Junior</h2>
                                        </div>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={16}>
                                    {(seniorData.map(
                                        (data, i) => {
                                            return (
                                                <Grid item xs={4} key={data.id}>
                                                    <div className="Contestor">
                                                        <h3>{data.title}</h3>
                                                        <div className="img">
                                                            <img src={require('../../images/OurEvents/CharacterDesignCompetition/' + data.image)} alt="" />
                                                        </div>
                                                        <h5>{data.competitor}</h5>
                                                        <h4>{data.character}</h4>
                                                        <p>{data.description}</p>
                                                    </div>
                                                </Grid>
                                            )
                                        }
                                    ))}
                                </Grid>
                                <Grid container spacing={40}>
                                    <Grid item xs={12}>
                                        <div className="Title">
                                            <h2 className="left-align spacing">Group - Senior</h2>
                                        </div>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={16}>
                                    {(juniorData.map(
                                        (data, i) => {
                                            return (
                                                <Grid item xs={4} key={data.id}>
                                                    <div className="Contestor">
                                                        <h3>{data.title}</h3>
                                                        <div className="img">
                                                            <img src={require('../../images/OurEvents/CharacterDesignCompetition/' + data.image)} alt="" />
                                                        </div>
                                                        <h5>{data.competitor}</h5>
                                                        <h4>{data.character}</h4>
                                                        <p>{data.description}</p>
                                                    </div>
                                                </Grid>
                                            )
                                        }
                                    ))}
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
    loginP: data => dispatch(login(data))
});

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(SmartNetizenCompetition)); 
