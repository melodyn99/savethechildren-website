// Essential for all components
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { Redirect } from 'react-router';
// import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

// Styling

// import { Button } from '@material-ui/core';

// Api
// import { apiAuth } from '../../Api/ApiAuth';
// import { apiConferences } from '../../Api/ApiConferences';

// Redux
import { connect } from 'react-redux';
import { login } from '../../../Redux/Action/authAction';

// Utils

// Children components
import BreadCrumb from '../../../components/100Include/BreadCrumb';
import Quiz from '../../../components/100Include/Quiz';

class PrimaryQuiz extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formSubmitted: false,

            testQuizData: {
                aim: 'Aims of the quiz',
                questions: [{
                    text: 'Question 1 (answer is True)',
                    correctAnswer: true
                }, {
                    text: 'Question 2 (answer is False) a long question a long question a long question a long question a long question a long question a long question a long question a long question a long question a long question',
                    correctAnswer: false
                }, {
                    text: 'Question 3 (answer is True)',
                    correctAnswer: true
                }, {
                    text: 'Question 4 (answer is False)',
                    correctAnswer: false
                }]
            }
        };
    }

    render() {
        // const { classes } = this.props;
        const { testQuizData } = this.state;

        return (
            <div className="wrapper-container-main">
                <div className="container-main primary-quix">
                    <BreadCrumb />
                    <div className="wrapper-content">
                        <div className="content no-padding">
                            {/* Quiz */}
                            <Quiz
                                quizData={testQuizData}
                            />
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

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(PrimaryQuiz));
