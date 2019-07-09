import React from 'react';
import { Button } from '@material-ui/core';
import { withTranslation  } from 'react-i18next';

function Buttons(props) {
    return (
        <div style={{'backgroundColor':'white', 'paddingBottom':'30px'}}>
            <Button style={{'maxWidth':'150px'}}>
                <img src={require('../../images/btn_print.png')} alt="" width="100%"/>
            </Button>
            <Button style={{'maxWidth':'150px'}}>
                <img src={require('../../images/btn_share.png')} alt="" width="100%"/>
            </Button>
            <Button style={{'maxWidth':'150px'}}>
                <img src={require('../../images/btn_download.png')} alt="" width="100%"/>
            </Button>
        </div>
    )
}

export default withTranslation()(Buttons);