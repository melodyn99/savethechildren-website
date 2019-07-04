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

                    <div className={"figure about " + (this.props.effect.heroMenu.about ? 'active' : '')}></div>
                    <div className={"figure resource " + (this.props.effect.heroMenu.resource ? 'active' : '')}></div>
                    <div className={"figure featured " + (this.props.effect.heroMenu.featured ? 'active' : '')}></div>
                    <div className={"figure research " + (this.props.effect.heroMenu.research ? 'active' : '')}></div>
                    <div className={"figure event " + (this.props.effect.heroMenu.event ? 'active' : '')}></div>
                    <div className={"figure external " + (this.props.effect.heroMenu.external ? 'active' : '')}></div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    effect: state.effect
});

export default withTranslation()(connect(mapStateToProps)(HeroMenu));
