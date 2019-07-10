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

    form = ({ values, errors, touched, handleChange }) => {
        // const { classes
        //     //, t, i18n 
        // } = this.props;

        if (this.state.tabIndex === 1) {
            return (
                <Form className="content">
                    <Grid container spacing={16}>
                        <Grid item xs={12} className="grid">
                            <Field name="email" type="text" placeholder="Enter your Email" maxLength="100" style={{ 'width': '100%' }} />
                            {errors.email && touched.email ? <ErrorMessage message={errors.email} /> : null}
                        </Grid>
                        <Grid item xs={12} className="grid">
                            <Field name="password" type="text" placeholder="Enter your password" maxLength="100" style={{ 'width': '100%' }} />
                            {errors.password && touched.password ? <ErrorMessage message={errors.password} /> : null}
                        </Grid>

                        <Grid item xs={12} className="grid">
                            <Button onClick={() => this.props.history.push()}>Login</Button>
                        </Grid>
                        <Grid item xs={12} className="grid">
                            <Link to={"/"}>Forgot your password?</Link>
                        </Grid>
                    </Grid>
                </Form>
            )
        }
        else {
            return (
                <Form className="content">
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
                            <Button onClick={() => this.props.history.push()}>Create New Account</Button>
                        </Grid>
                    </Grid>
                </Form>
            )
        }
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
            <div className="loginregister">
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
                    <Tab eventKey={2} title="Register">
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
                </Tabs>
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
