// Essential for all components
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import { Tabs, Tab } from 'react-bootstrap';

// Styling
import Grid from '@material-ui/core/Grid';

// Api
// import { apiAuth } from '../../Api/ApiAuth';

// Redux
import { connect } from 'react-redux';
import { login } from '../../../Redux/Action/authAction';

// Utils

// Children components
import BreadCrumb from '../../../components/100Include/BreadCrumb';

class PrimarySchoolHome extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formSubmitted: false,
            tabIndex: 1
        }
    }

    _goToDetail = (url) => {

        // const { i18n } = this.props;
        
        this.props.history.push(url);
        
    }

    componentDidMount = () => {
        if (this.props.tabIndex === 1) {
            this.setState({
                tabIndex: 1
            })
        } else if (this.props.tabIndex === 2) {
            this.setState({
                tabIndex: 2
            })
        }
    }

    _handleTabChange = (e) => {
        this.setState({
            tabIndex: e
        })
    }

    render() {
        const { i18n, t } = this.props;

        let primaryData = [
            { id: 1, image: 'btn_primaryschool_01_Generaltips.png', url: 'primary-general-tips', text: t("PrimaryHome:block1") },
            { id: 2, image: 'btn_primaryschool_02_Socialmediauserguide.png', url: 'primary-social-media-user-guide', text: t("PrimaryHome:block2") },
            { id: 3, image: 'btn_primaryschool_03_quiz.png', url: 'primary-quiz', text: t("PrimaryHome:block3") },
            { id: 4, image: 'btn_primaryschool_04_onlinegrooming.png', url: 'primary-risk-and-danger', text: t("PrimaryHome:block4") },
            { id: 5, image: 'btn_primaryschool_05_video.png', url: 'primary-video', text: t("PrimaryHome:block5") },
            { id: 6, image: 'btn_primaryschool_06_game.png', url: 'primary-game', text: t("PrimaryHome:block6") },
            { id: 7, image: 'btn_primaryschool_07_TheNetizenPledge.png', url: 'primary-netizen-pledge', text: t("PrimaryHome:block7") },
        ]

        let secondaryData = [
            { id: 1, image: 'btn_secondaryschool_01_Generaltips.png', url: 'secondary-general-tips', text: t("SecondaryHome:block1") },
            { id: 2, image: 'btn_secondaryschool_02_Socialmediauserguide.png', url: 'secondary-social-media-user-guide', text: t("SecondaryHome:block2") },
            { id: 3, image: 'btn_secondaryschool_03_quiz.png', url: 'secondary-quiz', text: t("SecondaryHome:block3") },
            { id: 4, image: 'btn_secondaryschool_04_Riskanddanger.png', url: 'secondary-risk-and-danger', text: t("SecondaryHome:block4") },
            { id: 5, image: 'btn_secondaryschool_05_video.png', url: 'secondary-video', text: t("SecondaryHome:block5") },
            { id: 6, image: 'btn_secondaryschool_06_game.png', url: 'secondary-game', text: t("SecondaryHome:block6") },
            { id: 7, image: 'btn_secondaryschool_07_TheNetizenPledge.png', url: 'secondary-netizen-pledge', text: t("SecondaryHome:block7") },
        ]

        return (
            <div className="wrapper-container-main">
                <div className="container-main">
                    <BreadCrumb />
                    <div className="wrapper-content">
                        <div className="content">
                            <div className={"ImageGrid " + (this.state.tabIndex === 1 ? 'Primary' : 'Secondary')}>
                                <div className="upper">
                                    <img src={require('../../../images/ResourcesForYou/PrimarySchool/Banner/banner_resourcesforyou-Primary_School.png')} alt="" />
                                </div>
                                <div className="bottom">
                                    <Tabs defaultActiveKey={1} id="uncontrolled-tab-example" onSelect={(e) => this._handleTabChange(e)}>
                                        <Tab eventKey={1} title=" Primary School (aged 6-12) ">
                                            <div className="inner">
                                                <Grid container spacing={16}>
                                                    {(primaryData.map(
                                                        (data, i) => {
                                                            return (
                                                                <Grid item xs={6} key={data.id}>
                                                                    <div className="grid" onClick={() => this._goToDetail("/" + i18n.language + "/" + data.url)}>
                                                                        <img src={require('../../../images/ResourcesForYou/PrimarySchool/Button/' + data.image)} alt="" />
                                                                        <div className="text">
                                                                            <Link to={"/" + i18n.language + "/" + data.url}>{data.text}</Link>
                                                                        </div>
                                                                    </div>
                                                                </Grid>
                                                            )
                                                        }
                                                    ))}
                                                </Grid>
                                            </div>
                                        </Tab>

                                        <Tab eventKey={2} title=" Secondary School (aged 12-18) ">
                                            <div className="inner">
                                                <Grid container spacing={16}>
                                                    {(secondaryData.map(
                                                        (data, i) => {
                                                            return (
                                                                <Grid item xs={6} key={data.id}>
                                                                    <div className="grid" onClick={() => this._goToDetail("/" + i18n.language + "/" + data.url)}>
                                                                        <img src={require('../../../images/ResourcesForYou/SecondarySchool/Button/' + data.image)} alt="" />
                                                                        <div className="text">
                                                                            <Link to={"/" + i18n.language + "/" + data.url}>{data.text}</Link>
                                                                        </div>
                                                                    </div>
                                                                </Grid>
                                                            )
                                                        }
                                                    ))}
                                                </Grid>
                                            </div>
                                        </Tab>
                                    </Tabs>
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

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(withRouter(PrimarySchoolHome)));
