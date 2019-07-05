import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import * as AnimationsActionCreators from '../../actions/animations';

class Header extends Component {

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
            // t, 
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

                    <Link to={"/" + i18n.language + '/'} className="desktop-login">Login</Link>

                    <ul className="desktop-language clearfix">
                        <li><Link to={"/" + i18n.language + '/'}>中</Link></li>
                        <li><Link to={"/" + i18n.language + '/'} className="active">EN</Link></li>
                    </ul>

                    <h1 className="logo-schk">
                        <Link to={"/" + i18n.language + '/'}><img src={require('../../images/img_homepage_logo-schk.png')} alt="" /></Link>
                    </h1>

                    <Link to={"/" + i18n.language + '/'} className="seekHelp"><span>Seek Help</span></Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => (
    {
        members: state.auth,
        route: state.router
    }
);

export default withTranslation()(connect(mapStateToProps)(Header));
