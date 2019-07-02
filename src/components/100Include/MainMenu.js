import React from 'react';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

function MainMenu(props) {
    // const { t, i18n } = props;

    return (
        <div className="wrapper-MainMenu">
            <div className="MainMenu">
                This is Main Menu
            </div>
        </div>
    );
}

export default withTranslation()(MainMenu);
