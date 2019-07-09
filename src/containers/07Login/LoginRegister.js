// Essential for all components
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { Tabs, Tab } from 'react-bootstrap';

// Styling
import { CommonStyles } from '../../utils/01MaterialJsStyles/00Common/common'
import { HeaderStyles } from '../../utils/01MaterialJsStyles/00Common/header'
import combineStyles from '../../utils/01MaterialJsStyles/00Common/combineStyles';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';

// Api
// import { apiAuth } from '../../Api/ApiAuth';
// import { apiConferences } from '../../Api/ApiConferences';

// Redux
import { connect } from 'react-redux';
import { login, verifyToken } from '../../Redux/Action/authAction';

// Utils
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

// Children components
import ErrorMessage from '../07Login/ErrorMessage';
// import BreadCrumb from '../../../components/100Include/BreadCrumb';

class LoginRegister extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formSubmitted: false
        }
    }

    _handleTabChange = (e) => {
        this.setState({
            tabIndex: e
        })
    }

    _handleInput = (value, key) => {
        console.log(value);
        this.setState({
            ...this.state,
            [key]: value
        })
    }

    _handleSelect = () => {

    }

    form = ({ values, errors, touched, handleChange }) => {
        const { classes
            //, t, i18n 
        } = this.props;

        return (
            <Form className="content">    
                <Grid container spacing={16}>
                    <Grid item xs={12} className="grid">
                        <Field name="email" type="text" placeholder="Enter your Email" maxLength="100" style={{'width':'100%'}}/>
                        {errors.email && touched.email ? <ErrorMessage message={errors.email} /> : null}
                    </Grid>
                    <Grid item xs={12} className="grid">
                        <Field name="password" type="text" placeholder="Enter your password" maxLength="100" style={{'width':'100%'}}/>
                        {errors.password && touched.password ? <ErrorMessage message={errors.password} /> : null}
                    </Grid>

                    <Grid item xs={12} className="grid">
                        <Button onClick={() =>this.props.history.push()}>Login</Button>
                    </Grid>
                    <Grid item xs={12} className="grid">
                        <Link to={"/"}>Forgot your password?</Link>
                    </Grid>
                </Grid>

                {/* <div className="bottomControl clearfix">
                    <Button className={classes.greyButton}
                        onClick={() => this.props.history.push('school-course-note')}
                    >取消</Button>
                    <span className="right"><Button type="submit" className={classes.blackButton}>确认</Button></span>
                </div> */}
            </Form>
        )
    }

    handleSubmit = (values, { setFieldError }) => {
        // call api
        // TODO
        console.log('GREAT!');
    }

    render() {
        // const { classes, t, i18n } = this.props;

        const Schema = Yup.object().shape({
            email: Yup.string()
                .email('Email has to be a valid email address')
                .required('Email is required'),
            password: Yup.string()
                .required('Password is required'),
        })

        return (
            <div className="wrapper-container-main">
                <div className="container-main">
                    <div className="wrapper-content">
                        <div className="content loginregister">
                            <Tabs defaultActiveKey={1} id="uncontrolled-tab-example" onSelect={(e) => this._handleTabChange(e)}>
                                <Tab eventKey={1} title="Login">
                                    <Formik
                                        initialValues={{
                                            email: '',
                                            password: '',
                                        }}
                                        validationSchema={Schema}
                                        onSubmit={this.handleSubmit}
                                        component={this.form}
                                    />
                                </Tab>
                                <Tab eventKey={2} title="Register"></Tab>
                            </Tabs>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

LoginRegister.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth
});

const mapDispatchToProps = dispatch => ({
    loginP: data => dispatch(login(data)),
    verifyT: token => dispatch(verifyToken(token)),
});

const combinedStyles = combineStyles(CommonStyles, HeaderStyles);

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(withStyles(combinedStyles)(LoginRegister)));
