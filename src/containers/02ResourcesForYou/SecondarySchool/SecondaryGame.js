// Essential for all components
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { Redirect } from 'react-router';
// import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

// Component dependencies
import Unity, { UnityContent } from 'react-unity-webgl';

// Styling

// Api
import { apiAuth } from '../../../Api/ApiAuth';
import { apiGame } from '../../../Api/ApiGame';

// Redux
import { connect } from 'react-redux';
import { login } from '../../../Redux/Action/authAction';

// Utils
import { get } from 'lodash-es';

// Children components
import BreadCrumb from '../../../components/100Include/BreadCrumb';


function createUnityCallbackJsonObject(data, errorMessage) {
    let result;
    const status = data.status;
    const dataBody = data.body;
    if (status >= 200 && status < 300 && dataBody && dataBody.length > 0) {
        result = data.body[0];
    } else {
        result = {
            error: `${errorMessage}. Status code = ${status}`
        };
    }
    return result;
}

function createUnityErrorJsonObject(error) {
    let errorResult;
    if (error.error) {
        errorResult = error;
    } else {
        errorResult = {
            error: error instanceof Error ? error.message : error
        };
    }
    return errorResult;
}

class SecondaryGame extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formSubmitted: false,
            userInfo: null,
            unityInitialized: false
        };
    }

    initUnityContent() {
        // The ../ path is used to skip the locale segment in url when fetching the unity code.
        // This assume the current url is in the format <react_base_path>/<locale>/<route>
        // TODO: get the base url of the react app and use it to construct the correct path.
        const gameBasePath = '../RollingBall/Build/';

        const gameObjectName = 'GameManager';

        const unityContent = new UnityContent(
            gameBasePath + 'RollingBall.json',
            gameBasePath + 'UnityLoader.js'
        );
        this.unityContent = unityContent;

        unityContent.on('GetDisplayName', () => {
            return get(this, 'state.userInfo.display_name') || '';
        });
        unityContent.on('GetLanguage', () => {
            return get(this, 'props.i18n.language') || 'zh-HK';
        });
        unityContent.on('RequestLeaderBoardData', () => {
            const token = get(this, 'props.auth.token');
            apiGame.getLeaderBoardData(token, (data) => {
                let result = createUnityCallbackJsonObject(data, 'Cannot retrieve leader board data');
                this.unityContent.send(gameObjectName, 'OnLeaderBoardDataReady', JSON.stringify(result));
            }, (error) => {
                let errorResult = createUnityErrorJsonObject(error);
                this.unityContent.send(gameObjectName, 'OnLeaderBoardDataReady', JSON.stringify(errorResult));
            });
        });
        unityContent.on('RequestGameData', (gameId) => {
            const token = get(this, 'props.auth.token');
            const username = get(this, 'state.userInfo.username');
            if (username) {
                apiGame.getGameData({
                    primary_reference_id: gameId,
                    user: username
                }, token, (data) => {
                    let result = createUnityCallbackJsonObject(data, 'Cannot retrieve game data');
                    this.unityContent.send(gameObjectName, 'OnRequestedGameData', JSON.stringify(result));
                }, (error) => {
                    let errorResult = createUnityErrorJsonObject(error);
                    this.unityContent.send(gameObjectName, 'OnRequestedGameData', JSON.stringify(errorResult));
                });
            } else {
                this.unityContent.send(gameObjectName, 'OnRequestedGameData', JSON.stringify({
                    error: 'User is not logged in.'
                }));
            }
        });
        unityContent.on('UpdateGameData', (gameId, gameData) => {
            const token = get(this, 'props.auth.token');
            apiGame.updateGameData(gameId, gameData, token, (data) => {
                let result = createUnityCallbackJsonObject(data, 'Cannot update game data');
                this.unityContent.send(gameObjectName, 'OnUpdatedGameData', JSON.stringify(result));
            }, (error) => {
                let errorResult = createUnityErrorJsonObject(error);
                this.unityContent.send(gameObjectName, 'OnUpdatedGameData', JSON.stringify(errorResult));
            });
        });

        this.setState({ unityInitialized: true });
    }

    componentDidMount() {
        const token = get(this, 'props.auth.token');
        apiAuth.getUserInformation(null, token, (data) => {
            const status = data.status;
            if (status >= 200 && status < 300) {
                this.setState({ userInfo: data.body });
            } else {
                console.error('Cannot retrieve user info. Status code = ', status);
            }
            this.initUnityContent();
        }, (error) => {
            console.error(error);
            this.initUnityContent();
        });
    }

    render() {
        // const { classes } = this.props;

        return (
            <div className="wrapper-container-main">
                <div className="container-main">
                    <BreadCrumb />
                    <div className="wrapper-content">
                        <div className="content no-padding">
                            {this.state.unityInitialized && (
                                <Unity unityContent={this.unityContent} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
});

const mapDispatchToProps = dispatch => ({
    loginP: data => dispatch(login(data))
});

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(SecondaryGame));
