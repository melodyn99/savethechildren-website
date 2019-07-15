// Essential for all components
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

// Styling
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';

// Api
import { apiAuth } from '../../Api/ApiAuth';

// Redux
import { connect } from 'react-redux';
import { login, verifyToken, getUserInfo } from '../../Redux/Action/authAction';

// Utils
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Tabs, Tab } from 'react-bootstrap';

// Children components
import ErrorMessage from './ErrorMessage';

class LoginRegister extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formSubmitted: false,
            tabIndex: 1
        }
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

    _handleInput = (value, key) => {
        console.log(value);
        this.setState({
            ...this.state,
            [key]: value
        })
    }

    _handleSelect = () => {

    }

    formLogin = ({ values, errors, touched, handleChange }) => {
        // const { classes
        //     //, t, i18n 
        // } = this.props;

        return (
            <Form className="form-wrapper">
                <Grid container spacing={16}>
                    <Grid item xs={12} className="grid">
                        <Field name="email" type="email" placeholder="Enter your Email" maxLength="100" style={{ 'width': '100%' }} />
                        {errors.email && touched.email ? <ErrorMessage message={errors.email} /> : null}
                    </Grid>
                    <Grid item xs={12} className="grid">
                        <Field name="password" type="password" placeholder="Enter your password" maxLength="100" style={{ 'width': '100%' }} />
                        {errors.password && touched.password ? <ErrorMessage message={errors.password} /> : null}
                    </Grid>

                    <Grid item xs={12} className="grid">
                        <Button type="submit" onClick={() => { this._signInAsync() }}>Login</Button>
                    </Grid>
                    <Grid item xs={12} className="grid">
                        <Link to={"/"}>Forgot your password?</Link>
                    </Grid>
                </Grid>
            </Form>
        )
    }

    formRegister = ({ values, errors, touched, handleChange }) => {
        return (
            <Form className="form-wrapper">
                <Grid container spacing={16}>
                    <Grid item xs={12} className="grid">
                        <Field name="email" type="text" placeholder="Your email" maxLength="100" style={{ 'width': '100%' }} />
                        {errors.email && touched.email ? <ErrorMessage message={errors.email} /> : null}
                    </Grid>
                    <Grid item xs={12} className="grid">
                        <Field name="name" type="text" placeholder="Display name" maxLength="100" style={{ 'width': '100%' }} />
                        {errors.name && touched.name ? <ErrorMessage message={errors.name} /> : null}
                    </Grid>
                    <Grid item xs={12} className="grid">
                        <Field name="password" type="text" placeholder="Your password" maxLength="100" style={{ 'width': '100%' }} />
                        {errors.password && touched.password ? <ErrorMessage message={errors.password} /> : null}
                    </Grid>
                    <Grid item xs={12} className="grid">
                        <Field name="confirmPassword" type="text" placeholder="Confirm password" maxLength="100" style={{ 'width': '100%' }} />
                        {errors.confirmPassword && touched.confirmPassword ? <ErrorMessage message={errors.confirmPassword} /> : null}
                    </Grid>

                    <ul>
                        <li>Must have at least 8 characters with numbers</li>
                        <li>Use upper and lower case letters (eg. Aa)</li>
                    </ul>
                    <Grid item xs={12} className="grid">
                        <Button type="submit">Create New Account</Button>
                    </Grid>
                </Grid>
            </Form >
        )
    }

    handleSubmit = (values, { setFieldError }) => {
        // call api
        // TODO
        console.log('GREAT!');
    }

    _signInAsync = (values) => {
        console.log(values);
        if (typeof (values) !== 'undefined') {
            console.log('hi');
            let submitEmail = values.email;
            let submitPassword = values.password;

            apiAuth.authenticate(submitEmail, submitPassword).then((res) => {
                console.log('hello');
                this.props.loginP(res.access_token);
                this._getUserInformation(res.access_token);
                // this._getSimpleSubject(res.access_token);
            })
        }
    };

    _getUserInformation = (access_token) => {

        const cb = (obj) => {
            console.log("cb : ", obj);
            this.props.getUserInfoP(obj.body);
        }
        const eCb = (obj) => {
            console.log("eCb : ", obj);
        }
        const params = null;

        apiAuth.getUserInformation(params, access_token, cb, eCb);
    }

    render() {
        // const { classes, t, i18n } = this.props;

        const Schema = Yup.object().shape({
            email: Yup.string()
                .email('Email has to be a valid email address')
                .required('Email is required'),
            password: Yup.string()
                .typeError('Password must be a valid string')
                .required('Password is required'),
        })

        const Schema1 = Yup.object().shape({
            email: Yup.string()
                .email('Email has to be a valid email address')
                .required('Email is required'),
            name: Yup.string()
                .required('Name is required'),
            password: Yup.string()
                .typeError('Password must be a valid string')
                .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, "Does not match Password requirements!")
                .required('Password is required'),
            confirmPassword: Yup.string()
                .typeError('Confirm Password must be a valid string')
                .oneOf([Yup.ref('password'), null], "Does not match with Password!")
                .required('Confirm Password is required'),
        })

        return (
            <div className="loginRegister">
                <Tabs defaultActiveKey={1} id="uncontrolled-tab-example" onSelect={(e) => this._handleTabChange(e)}>
                    <Tab eventKey={1} title="Login">
                        <Formik
                            initialValues={{
                                email: 'admin@joyaether.test',
                                password: '123456qwerty',
                            }}
                            validationSchema={Schema}
                            onSubmit={this._signInAsync}
                            component={this.formLogin}
                        />
                    </Tab>
                    <Tab eventKey={2} title="Register">
                        <Formik
                            initialValues={{
                                email: '',
                                name: '',
                                password: '',
                                confirmPassword: ''
                            }}
                            validationSchema={Schema1}
                            onSubmit={this.handleSubmit}
                            component={this.formRegister}
                        />
                    </Tab>
                </Tabs>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
});

const mapDispatchToProps = dispatch => ({
    loginP: data => dispatch(login(data)),
    getUserInfoP: data => dispatch(getUserInfo(data)),
    verifyT: token => dispatch(verifyToken(token)),
});


export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(LoginRegister));
