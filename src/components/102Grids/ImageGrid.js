import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { withTranslation } from 'react-i18next';
import { Tabs, Tab } from 'react-bootstrap';

class ImageGrid extends Component {

    constructor(props) {
        super(props);

        this.state = {
            formSubmitted: false,
            tabIndex: 0
        }
    }

    render() {
        const { i18n } = this.props;

        return (
            <Grid item xs={6} key={this.props.id}>
                <div className="grid">
                    <img src={require('../../images/ResourcesForYou/PrimarySchool/Button/btn_primaryschool_01_Generaltips.png')} alt="" />
                    <div className="text">
                        <Link to={"/" + i18n.language + "/" + this.props.url}>{this.props.text}</Link>
                    </div>
                </div>
            </Grid>
        )
    }
}

export default withTranslation()(ImageGrid);
