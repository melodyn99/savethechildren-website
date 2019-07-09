import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
// import Modal from 'react-bootstrap/Modal';
// import Tabs from 'react-bootstrap/Tabs';
// import Tab from 'react-bootstrap/Tab';
// import { Form } from 'react-bootstrap/Form';
import { Button, Form, Tab, Tabs, Modal } from 'react-bootstrap';

let nextInstanceId = 1;

class LoginPopup extends Component {
    constructor(props) {
        super(props);
        this.instanceId = nextInstanceId;
        ++nextInstanceId;
    }

    render() {
        const { show, tab, onHide } = this.props;
        return <Modal
            show={show}
            onHide={onHide}
            className="stc-login-popup"
        >
            <Tabs defaultActivekey="login" className="nav-justified">
                <Tab eventKey="login" title="LOGIN">
                    <Form className="login-popup-form text-center">
                        <Form.Group controlId="loginEmail">
                            <Form.Label className="sr-only">EMAIL</Form.Label>
                            <Form.Control type="email" placeholder="ENTER_YOUR_EMAIL" required />
                        </Form.Group>
                        <Form.Group controlId="loginPassword">
                            <Form.Label className="sr-only">PASSWORD</Form.Label>
                            <Form.Control type="password" placeholder="ENTER_YOUR_PASSWORD" required />
                        </Form.Group>
                        <Button variant="primary" type="submit" block>
                            LOGIN
                        </Button>
                        <a class="text-center forget-your-password" href="/">FORGET_YOUR_PASSWORD</a>
                    </Form>
                </Tab>
                <Tab eventKey="register" title="REGISTER">
                    <Form className="login-popup-form text-center">
                        <Form.Group controlId="registerEmail">
                            <Form.Label className="sr-only">EMAIL</Form.Label>
                            <Form.Control type="email" placeholder="YOUR_EMAIL" required />
                        </Form.Group>
                        <Form.Group controlId="registerPassword">
                            <Form.Label className="sr-only">PASSWORD</Form.Label>
                            <Form.Control type="password" placeholder="YOUR_PASSWORD" required />
                        </Form.Group>
                        <Form.Group controlId="registerConfirmPassword">
                            <Form.Label className="sr-only">CONFIRM_PASSWORD</Form.Label>
                            <Form.Control type="password" placeholder="CONFIRM_PASSWORD" required />
                        </Form.Group>
                        <Button variant="primary" type="submit" block>
                            REGISTER
                        </Button>
                    </Form>
                </Tab>
            </Tabs>
        </Modal>;
    }
}

LoginPopup.propTypes = {
    onHide: PropTypes.func
};

export default withTranslation()(LoginPopup);
