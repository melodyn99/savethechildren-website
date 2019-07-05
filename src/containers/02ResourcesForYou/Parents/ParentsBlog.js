// Essential for all components
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

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

class ParentsBlog extends Component {
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
                            <Grid container spacing={16}>
                                <Grid item xs={6}>
                                    <div className="ImageGrid2 left">
                                        <div className="upper">
                                            <img src={require('../../../images/ResourcesForYou/Parents/Button/btn_parents_01_blog.png')} alt="" />
                                        </div>
                                        <div className="bottom">
                                            <h3>儿童安全上网工作</h3>
                                            <h5>Hilary Yip (article and videos under production by SCHK)</h5>
                                            <p>KidZu是适用健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活</p>
                                            <p>官方网站: http://www.kidzui.com</p>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div className="ImageGrid2 right">
                                        <div className="upper">
                                            <img src={require('../../../images/ResourcesForYou/Parents/Button/btn_parents_01_blog.png')} alt="" />
                                        </div>
                                        <div className="bottom">
                                            <h3>儿童安全上网工作</h3>
                                            <h5>Hilary Yip (article and videos under production by SCHK)</h5>
                                            <p>KidZu是适用健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活</p>
                                            <p>官方网站: http://www.kidzui.com</p>
                                        </div>
                                    </div>
                                </Grid>

                                <Grid item xs={6}>
                                    <div className="ImageGrid2 left">
                                        <div className="upper">
                                            <img src={require('../../../images/ResourcesForYou/Parents/Button/btn_parents_01_blog.png')} alt="" />
                                        </div>
                                        <div className="bottom">
                                            <h3>儿童安全上网工作</h3>
                                            <h5>Hilary Yip (article and videos under production by SCHK)</h5>
                                            <p>KidZu是适用健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活</p>
                                            <p>官方网站: http://www.kidzui.com</p>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div className="ImageGrid2 right">
                                        <div className="upper">
                                            <img src={require('../../../images/ResourcesForYou/Parents/Button/btn_parents_01_blog.png')} alt="" />
                                        </div>
                                        <div className="bottom">
                                            <h3>儿童安全上网工作</h3>
                                            <h5>Hilary Yip (article and videos under production by SCHK)</h5>
                                            <p>KidZu是适用健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活</p>
                                            <p>官方网站: http://www.kidzui.com</p>
                                        </div>
                                    </div>
                                </Grid>

                                <Grid item xs={6}>
                                    <div className="ImageGrid2 left">
                                        <div className="upper">
                                            <img src={require('../../../images/ResourcesForYou/Parents/Button/btn_parents_01_blog.png')} alt="" />
                                        </div>
                                        <div className="bottom">
                                            <h3>儿童安全上网工作</h3>
                                            <h5>Hilary Yip (article and videos under production by SCHK)</h5>
                                            <p>KidZu是适用健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活</p>
                                            <p>官方网站: http://www.kidzui.com</p>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div className="ImageGrid2 right">
                                        <div className="upper">
                                            <img src={require('../../../images/ResourcesForYou/Parents/Button/btn_parents_01_blog.png')} alt="" />
                                        </div>
                                        <div className="bottom">
                                            <h3>儿童安全上网工作</h3>
                                            <h5>Hilary Yip (article and videos under production by SCHK)</h5>
                                            <p>KidZu是适用健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活健康生活</p>
                                            <p>官方网站: http://www.kidzui.com</p>
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                            {/* Grid */}
                            <div><Link to={"/" + i18n.language + "/parents-blog-detail"}>Parents Blog Detail</Link></div>
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

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(withStyles(combinedStyles)(ParentsBlog)));
