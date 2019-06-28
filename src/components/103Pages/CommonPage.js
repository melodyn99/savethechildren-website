// Essential for all components
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

// Utils
// import { map } from 'lodash-es';
import { Carousel } from 'react-responsive-carousel';

class CommonPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <div className="wrapper-container-main">
                    <div className="container-main">
                        123
                        <Carousel
                            showThumbs={false}
                        ></Carousel>
                    </div>
                </div>
            </div>
        )
    }
}

export default withTranslation()(CommonPage);
