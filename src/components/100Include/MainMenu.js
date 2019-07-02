import React from 'react';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

function MainMenu(props) {
    const {
        // t, 
        i18n } = props;

    return (
        <div className="wrapper-MainMenu">
            <div className="MainMenu">
                <ul>
                    <li><Link to={"/" + i18n.language + "/hello"}>hello</Link>
                        <ul>
                            <li><Link to={"/" + i18n.language + "/hello"}>hello</Link></li>
                            <li><Link to={"/" + i18n.language + "/hello"}>hello</Link></li>
                            <li><Link to={"/" + i18n.language + "/hello"}>hello</Link></li>
                            <li><Link to={"/" + i18n.language + "/hello"}>hello</Link></li>
                            <li><Link to={"/" + i18n.language + "/hello"}>hello</Link></li>
                        </ul>
                    </li>

                    <li><Link to={"/" + i18n.language + "/hello"}>hello</Link>
                        <ul>
                            <li><Link to={"/" + i18n.language + "/hello"}>hello</Link></li>
                            <li><Link to={"/" + i18n.language + "/hello"}>hello</Link></li>
                            <li><Link to={"/" + i18n.language + "/hello"}>hello</Link></li>
                            <li><Link to={"/" + i18n.language + "/hello"}>hello</Link></li>
                            <li><Link to={"/" + i18n.language + "/hello"}>hello</Link></li>
                        </ul>
                    </li>

                    <li><Link to={"/" + i18n.language + "/hello"}>hello</Link>
                        <ul>
                            <li><Link to={"/" + i18n.language + "/hello"}>hello</Link></li>
                            <li><Link to={"/" + i18n.language + "/hello"}>hello</Link></li>
                            <li><Link to={"/" + i18n.language + "/hello"}>hello</Link></li>
                            <li><Link to={"/" + i18n.language + "/hello"}>hello</Link></li>
                            <li><Link to={"/" + i18n.language + "/hello"}>hello</Link></li>
                        </ul>
                    </li>

                    <li><Link to={"/" + i18n.language + "/hello"}>hello</Link>
                        <ul>
                            <li><Link to={"/" + i18n.language + "/hello"}>hello</Link></li>
                            <li><Link to={"/" + i18n.language + "/hello"}>hello</Link></li>
                            <li><Link to={"/" + i18n.language + "/hello"}>hello</Link></li>
                            <li><Link to={"/" + i18n.language + "/hello"}>hello</Link></li>
                            <li><Link to={"/" + i18n.language + "/hello"}>hello</Link></li>
                        </ul>
                    </li>

                    <li><Link to={"/" + i18n.language + "/hello"}>hello</Link>
                        <ul>
                            <li><Link to={"/" + i18n.language + "/hello"}>hello</Link></li>
                            <li><Link to={"/" + i18n.language + "/hello"}>hello</Link></li>
                            <li><Link to={"/" + i18n.language + "/hello"}>hello</Link></li>
                            <li><Link to={"/" + i18n.language + "/hello"}>hello</Link></li>
                            <li><Link to={"/" + i18n.language + "/hello"}>hello</Link></li>
                        </ul>
                    </li>

                    <li><Link to={"/" + i18n.language + "/hello"}>hello</Link>
                        <ul>
                            <li><Link to={"/" + i18n.language + "/hello"}>hello</Link></li>
                            <li><Link to={"/" + i18n.language + "/hello"}>hello</Link></li>
                            <li><Link to={"/" + i18n.language + "/hello"}>hello</Link></li>
                            <li><Link to={"/" + i18n.language + "/hello"}>hello</Link></li>
                            <li><Link to={"/" + i18n.language + "/hello"}>hello</Link></li>
                        </ul>
                    </li>

                </ul>
            </div>
        </div>
    );
}

export default withTranslation()(MainMenu);
