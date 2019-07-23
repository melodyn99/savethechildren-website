// Essential for all components
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { Redirect } from 'react-router';
// import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

// Styling

// Api
import { apiPages } from '../../Api/ApiPages';

// Redux
import { connect } from 'react-redux';

// Utils

// Children components
import BreadCrumb from '../../components/100Include/BreadCrumb';

class OurResearch extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title_en_us: '',
            content_en_us: '',
            title_zh_hk: '',
            content_zh_hk: ''
        }
    }

    componentDidMount = () => {
        this._getPageByRelativePath();
    }

    _getPageByRelativePath = () => {
        const cb = (obj) => {
            console.log("cb : ", obj);
            this.setState({
                ...this.state,
                title_en_us: obj.body[0].title_en,
                content_en_us: obj.body[0].html_en,
                title_zh_hk: obj.body[0].title_zh_cht,
                content_zh_hk: obj.body[0].html_zh_cht,
            })
        }
        const eCb = (obj) => {
            console.log("eCb : ", obj);
        }
        const params = {
            path: 'our-research',
            $expand: `web_content_item/cover_image`,
            $expand: `web_page_media/file`
        };

        apiPages.getPageByRelativePath(params, this.props.auth.token, cb, eCb);
    }

    createMarkup(html) {
        return { __html: html };
    };

    render() {
        const {
            //t, 
            i18n } = this.props;

        return (
            <div className="wrapper-container-main">
                <div className="container-main">
                    <BreadCrumb />
                    <div className="wrapper-content">
                        <div className="content no-background">
                            <div className="ImageText">
                                <div className="upper">
                                    <img src={require('../../images/ResearchFindings/banner_researchfindings-Our_Research.png')} alt="" />
                                </div>
                                <div className="bottom">
                                    <h3>{i18n.language === 'en-US' ? this.state.title_zh_hk : this.state.title_en_us}</h3>

                                    {i18n.language === 'en-US' ?
                                        <div dangerouslySetInnerHTML={this.createMarkup(this.state.content_en_us)} /> :
                                        <div dangerouslySetInnerHTML={this.createMarkup(this.state.content_zh_hk)} />
                                    }
                                </div>
                            </div>
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
});

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(OurResearch));
