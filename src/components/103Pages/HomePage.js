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

class HomePage extends Component {
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
        return <div className="stc-home-page">
            <MainMenuBar/>
            <div className="stc-home-page-front-container">
                <div className="seek-help-button-div">
                    <Button className="seek-help-button">SEEK_HELP</Button>
                </div>
                <Carousel
                    showThumbs={false}
                >
                    {map(images, renderCarouselImage)}
                </Carousel>
                <MainMenuBar menuData={{}}/>
            </div>
            <MenuBar menuData={{}}/>
            <div className="stc-common-page-container">
                {/*<NavBreadCrumb/>*/}
                <div className="container">
                    <Carousel
                        showThumbs={false}
                    >
                        {map(images, renderCarouselImage)}
                    </Carousel>
                    <div className="stc-common-page-content" dangerouslySetInnerHTML={{__html: content}}></div>
                </div>
            </div>
            <Footer/>
        </div>;
    }
}

MenuBar.propTypes = {
    menuData: PropTypes.object.isRequired
};

export default withTranslation()(HomePage);
