// Essential for all components
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

// Utils
// import { map } from 'lodash-es';
// import { Carousel } from 'react-responsive-carousel';

// function renderCarouselImage(image) {
//     return <div key={image.url}>
//         <img src={image.url} />
//     </div>;
// }

class GamePage extends Component {
    render() {
        return (
            <div>
                <div className="wrapper-container-main">
                    <div className="container-main">

                    </div>
                </div>
            </div>
        )
    }
}

export default withTranslation()(GamePage);
