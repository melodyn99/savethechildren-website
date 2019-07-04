import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import * as AnimationsActionCreators from '../../actions/animations';

class HeroMenu extends Component {

    render() {
        // const {
        //     // t, 
        //     i18n } = this.props;

        return (
            <div className="wrapper-heroMenu">
                <div className="heroMenu clearfix">
                    <img src={require('../../images/HeroMenu/bg_homepage_menu.png')} alt="" />

                    <div className="figure about"></div>
                    <div className="figure resource"></div>
                    <div className="figure featured"></div>
                    <div className="figure research"></div>
                    <div className="figure event"></div>
                    <div className="figure external"></div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => (
    {
        members: state.auth,
        router: state.router
    }
);

export default withTranslation()(connect(mapStateToProps)(HeroMenu));
