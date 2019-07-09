import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
// import Navbar from 'react-bootstrap/Navbar';
import { Nav, Navbar } from 'react-bootstrap';
import LoginPopup from '../101Popup/LoginPopup';
import netizenLogo from '../../images/img_homepage_logo-NA.png';
import saveTheChildrenLogo from '../../images/img_homepage_logo-schk.png';

let nextInstanceId = 1;

class MainMenuBar extends Component {
    constructor(props) {
        super(props);
        this.instanceId = nextInstanceId;
        ++nextInstanceId;
        this.state = { isPopupVisible: false };
        this.showPopup = this.showPopup.bind(this);
        this.hidePopup = this.hidePopup.bind(this);
    }

    showPopup() {
        this.setState({ isPopupVisible: true });
    }

    hidePopup() {
        this.setState({ isPopupVisible: false });
    }

    render() {
        const { instanceId: id } = this;
        const mainMenuBarContentId = 'mainMenuBarContent_' + id;
        const { isPopupVisible } = this.state;
        return <Fragment>
            <Navbar fixed="top" bg="light" expand="sm" className="stc-mainmenubar">
                <Navbar.Brand href="#"><img className="stc-mainmenubar-logo" src={netizenLogo} alt="Netizen Academy logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls={mainMenuBarContentId} />
                <Navbar.Collapse id={mainMenuBarContentId}>
                    <img className="ml-auto" src={saveTheChildrenLogo} alt="Save the Children logo" />
                    <Nav>
                        <Nav.Link href="zh">ZH</Nav.Link>
                        |
                        <Nav.Link href="en">EN</Nav.Link>
                        <Nav.Link
                            href="#"
                            onSelect={this.showPopup}
                            className="mainMenuBarLoginButton"
                        >LOGIN</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <LoginPopup
                show={isPopupVisible}
                onHide={this.hidePopup}
            />
        </Fragment>;
    }
}

MainMenuBar.propTypes = {
    menuData: PropTypes.object
};

export default withTranslation()(MainMenuBar);
