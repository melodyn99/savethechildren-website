// Essential for all components
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

// Redux
import { connect } from 'react-redux';

// Utils
import Popup from "reactjs-popup";

// Children components
import LoginRegister from '../101Popup/LoginRegister';
import SeekHelp from '../101Popup/SeekHelp';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = { open: false, display:false };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal = () => {
        this.setState({ open: true });
    }

    closeModal = () => {
        this.setState({ open: false });
    }

    openHelp = () => {
        this.setState({ display:true });
    }

    closeHelp = () => {
        this.setState({ display:false });
    }

    changeLanguage = (param) => {

        switch (param) {
            case 'zh-HK':
                param = 'zh-HK';
                break;
            case 'en-US':
                param = 'en-US';
                break;
            default:
                param = 'zh-HK';
        }
        this.props.i18n.changeLanguage(param);
    }

    render() {
        const {
            t,
            i18n } = this.props;

        let pathname = this.props.route.location.pathname,
            urlArray = pathname.split("/"),
            currentURL = urlArray[2];

        return (
            <div className="wrapper-header">
                <div className="header clearfix">

                    {(
                        (currentURL !== '' && typeof currentURL !== 'undefined')
                    ) &&
                        <h1 className="logo-NA-top">
                            <Link to={"/" + i18n.language + '/'}><img src={require('../../images/img_homepage_logo-NA.png')} alt="" /></Link>
                        </h1>
                    }

                    <span className="desktop-login" onClick={this.openModal}>{t("Common:General.Login")}</span>

                    <ul className="desktop-language clearfix">
                        <li><Link to={"/zh-HK" + this.props.route.location.pathname.substring(6) + this.props.route.location.search} onClick={() => this.changeLanguage('zh-HK')} className={i18n.language === 'zh-HK' ? 'active' : ''}>{t("Common:General.Language1")}</Link></li>
                        <li><Link to={"/en-US" + this.props.route.location.pathname.substring(6) + this.props.route.location.search} onClick={() => this.changeLanguage('en-US')} className={i18n.language === 'en-US' ? 'active' : ''}>{t("Common:General.Language2")}</Link></li>
                    </ul>

                    <h1 className="logo-schk">
                        <Link to={"/" + i18n.language + '/'}><img src={require('../../images/img_homepage_logo-schk.png')} alt="" /></Link>
                    </h1>

                    <Popup
                        open={this.state.open}
                        closeOnDocumentClick
                        onClose={this.closeModal}
                        contentStyle={{ padding: "0px", border: "none" }}
                    >
                        <LoginRegister open={this.state.open} close={this.closeModal} />

                        {/* <div className="modalhello">
                            <a className="close" onClick={this.closeModal}>&times;</a>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae magni
                            omnis delectus nemo, maxime molestiae dolorem numquam mollitia, voluptate
                            ea, accusamus excepturi deleniti ratione sapiente! Laudantium, aperiam
                            doloribus. Odit, aut.
                        </div> */}
                    </Popup>

                    <div className={"seekHelp " + (currentURL !== '' && typeof currentURL !== 'undefined' ? 'small' : '') + (this.state.display === false ? ' yes' : ' no')} onClick={this.openHelp}><span>{t("Common:General.SeekHelp")}</span></div>

                    <Popup className="seekHelp" 
                        open={this.state.display}
                        closeOnDocumentClick
                        onClose={this.closeHelp}
                        contentStyle={{ padding: "0px", border: "none" }}
                        closeHelp={this.closeHelp}
                        >
                            <SeekHelp open={this.state.open} close={this.closeHelp} />
                    </Popup>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => (
    {
        route: state.router,
        members: state.auth
    }
);

export default withTranslation()(connect(mapStateToProps)(Header));
