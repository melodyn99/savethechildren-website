// Essential for all components
import React from 'react';
import { Button } from '@material-ui/core';
import { withTranslation } from 'react-i18next';

function Buttons(props) {
    return (
        <div className="button-wrapper white">
            <Button className="button">
                <img src={require('../../images/btn_print.png')} alt="" />
            </Button>
            <Button className="button">
                <img src={require('../../images/btn_share.png')} alt="" />
            </Button>
            <Button className="button">
                <img src={require('../../images/btn_download.png')} alt="" />
            </Button>
        </div>
    )
}

export default withTranslation()(Buttons);
