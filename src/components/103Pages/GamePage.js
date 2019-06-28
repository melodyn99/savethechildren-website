import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { map } from 'lodash-es';
import { Carousel } from 'react-responsive-carousel';
import Footer from '../100Include/footer';
import MainMenuBar from '../100Include/MainMenuBar';
import MenuBar from '../100Include/MenuBar';
import 'holderjs';

function renderCarouselImage(image) {
    return <div key={image.url}>
        <img src={image.url} />
    </div>;
}

class GamePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { images, content } = this.props;
        if (!images || images.length === 0) {
            images = [{
                url: 'holder.js/640x480'
            }];
        }
        if (!content) {
            content = 'Sample page content';
        }
        return <div className="stc-common-page stc-game-page">
            <MainMenuBar/>
            <MenuBar menuData={{}}/>
            <div className="stc-common-page-container">
                {/*<NavBreadCrumb/>*/}
                <div className="container">
                    <div className="stc-game-page-content"></div>
                </div>
            </div>
            <Footer/>
        </div>;
    }
}

MenuBar.propTypes = {
    menuData: PropTypes.object.isRequired
};

export default withTranslation()(GamePage);
