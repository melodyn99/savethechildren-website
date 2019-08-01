// Essential for all components
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { Redirect } from 'react-router';
// import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

// Styling
// import Grid from '@material-ui/core/Grid';

// Api
// import { apiAuth } from '../../Api/ApiAuth';

// Redux
import { connect } from 'react-redux';
import { login } from '../../Redux/Action/authAction';

// Utils

// Children components
// import BreadCrumb from '../../../components/100Include/BreadCrumb';

class SeekHelp extends Component {
    // constructor(props) {
    //     super(props);
    // }

    //     // this.state = {
    //     //     formSubmitted: false
    //     // }
    // }

    render() {

        let pathname = this.props.route.location.pathname,
            urlArray = pathname.split("/"),
            currentURL = urlArray[2];

        if (currentURL === '') return (
            <div className={"wrapper-helpBoard" + (currentURL !== '' && typeof currentURL !== 'undefined' ? ' small' : '')}>
                <div className="helpBoard">
                    <div className="icon" onclick={()=>this.props.closeHelp()}>
                    </div>
                    <h3>Seek Help</h3>
                    <div className="text firstChild">
                        <p>Report sexual images of children online</p>
                    </div>
                    <div className="text">
                        <p>Talk to a social worker</p>
                    </div>
                    <div className="text">
                        <p>Connect to Save the Children Hong Kong</p>
                    </div>
                    {/* <Grid container spacing={16}>
                        <Grid item xs={4} className="firstChild">
                            <p>Report sexual images of children online</p>
                        </Grid>
                        <Grid item xs={4}>
                            <p>Talk to a social worker</p>
                        </Grid>
                        <Grid item xs={4}>
                            <p>Connect to Save the Children Hong Kong</p>
                        </Grid>
                    </Grid> */}
                </div>
            </div>
        );

        else return (
            <div className={"wrapper-helpBoard" + (currentURL !== '' && typeof currentURL !== 'undefined' ? ' small' : '')}>
                <div className="helpBoard">
                    <div className="icon" onclick={()=>this.props.closeHelp()}></div>
                    <h3>Seek Help</h3>
                    <div className="text firstChild">
                        <p>Report sexual images of children online</p>
                    </div>
                    <div className="text">
                        <p>Talk to a social worker</p>
                    </div>
                    <div className="text">
                        <p>Connect to Save the Children Hong Kong</p>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => (
    {
        route: state.router,
        members: state.auth
    }
);

const mapDispatchToProps = dispatch => ({
    loginP: data => dispatch(login(data))
});

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(SeekHelp));
