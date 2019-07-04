import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { capitalize, get, set, isFunction, reduce } from 'lodash-es';
import correctRobotImage from '../../images/ResourcesForYou/Quiz/ic_Quiz-Correct.png';
import incorrectRobotImage from '../../images/ResourcesForYou/Quiz/ic_Quiz-Incorrect.png';

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = this.getInitialQuizState();
        this.handleRetryQuiz = this.handleRetryQuiz.bind(this);
        this.handleRadioButtonChange = this.handleRadioButtonChange.bind(this);
        this.handleGoToNextQuestion = this.handleGoToNextQuestion.bind(this);
    }

    getInitialQuizState() {
        return {
            currentQuestionIndex: 0,
            userAnswers: [
                // {
                //     userChoice: boolean | 'do_not_know',
                //     correctAnswer: boolean
                // }, ...
            ],
            isShowingQuizResultPage: false,
            selectedRadioButton: null
        };
    }

    render() {
        return get(this, 'state.isShowingQuizResultPage') ?
            this.renderQuizResult() :
            this.renderQuestion();
    }

    renderQuestion() {
        const quizData = get(this, 'props.quizData');
        const questions = get(quizData, 'questions');
        const { currentQuestionIndex, selectedRadioButton, userAnswers } = this.state;
        const currentQuestionData = get(questions, currentQuestionIndex);
        const currentUserAnswer = get(userAnswers, currentQuestionIndex);
        const correctAnswer = get(currentUserAnswer, 'correctAnswer');
        const questionNumber = currentQuestionIndex + 1;

        return <div className="quiz quiz-question">
            <div className="quiz-title">
                <h1>Quiz</h1>
                <h2>Aims: {get(quizData, 'aim')}</h2>
            </div>
            <div className="quiz-content">
                <h3>{questionNumber}. {get(currentQuestionData, 'text')}</h3>
                <label>
                    <input
                        type="radio"
                        name="quiz_answer"
                        onChange={this.handleRadioButtonChange}
                        value="true"
                        checked={selectedRadioButton === 'true'}
                    />
                    True
                </label>
                <label>
                    <input
                        type="radio"
                        name="quiz_answer"
                        onChange={this.handleRadioButtonChange}
                        value="false"
                        checked={selectedRadioButton === 'false'}
                    />
                    False
                </label>
                <label>
                    <input
                        type="radio"
                        name="quiz_answer"
                        onChange={this.handleRadioButtonChange}
                        value="do_not_know"
                        checked={selectedRadioButton === 'do_not_know'}
                    />
                    Don't know
                </label>
                {currentUserAnswer && <div className="quiz-answer-feedback">
                    {currentUserAnswer.userChoice === correctAnswer ? <Fragment>
                        <img src={correctRobotImage} alt="" />
                        Correct!!
                    </Fragment> : <Fragment>
                        <img src={incorrectRobotImage} alt="" />
                        Incorrect: The correct answer is "{capitalize(correctAnswer)}"
                    </Fragment>}
                    <button
                        className="next-question-button"
                        onClick={this.handleGoToNextQuestion}
                    >
                        <span className="sr-only">Go to next question</span>
                        &gt;
                    </button>
                </div>}
                
            </div>
            <div className="quiz-footer">{questionNumber} / {get(questions, 'length')}</div>
        </div>;
    }

    renderQuizResult() {
        const userAnswers = get(this, 'state.userAnswers');
        const scoreBreakdown = reduce(userAnswers, (breakdown, userAnswer) => {
            const userChoice = userAnswer.userChoice;
            if (userChoice === userAnswer.correctAnswer) {
                ++breakdown.correctAnswerCount;
            } else if (userChoice === 'do_not_know') {
                ++breakdown.doNotKnowCount;
            } else {
                ++breakdown.incorrectAnswerCount;
            }
            return breakdown;
        }, {
            correctAnswerCount: 0,
            incorrectAnswerCount: 0,
            doNotKnowCount: 0
        });

        const { correctAnswerCount, incorrectAnswerCount, doNotKnowCount } = scoreBreakdown;
        const score = correctAnswerCount / (correctAnswerCount + incorrectAnswerCount + doNotKnowCount) * 100;

        return <div className="quiz quiz-result">
            <div className="quiz-title">
                <h1>Quiz</h1>
                <h2>Results</h2>
            </div>
            <div className="quiz-content">
                <div className="score">
                    <span className="score-number">{score.toFixed(0)}</span>%
                </div>
                <ul className="score-breakdown">
                    <li><b>{correctAnswerCount}</b> Correct Answer(s)</li>
                    <li><b>{incorrectAnswerCount}</b> Incorrect Answer(s)</li>
                    <li><b>{doNotKnowCount}</b> Don't know</li>
                </ul>
            </div>
            <div className="quiz-footer">
                <button onClick={this.handleRetryQuiz}>&lt; Retry Quiz</button>
            </div>
        </div>;
    }

    handleRetryQuiz() {
        this.setState(this.getInitialQuizState());
        const onRetryQuiz = get(this, 'props.onRetryQuiz');
        if (isFunction(onRetryQuiz)) {
            onRetryQuiz();
        }
    }

    handleRadioButtonChange(evt) {
        const { currentQuestionIndex, userAnswers } = this.state;
        const { quizData, onQuestionAnswered } = this.props;
        const radioValue = evt.target.value;
        const currentQuestionData = get(quizData, ['questions', currentQuestionIndex]);
        let currentUserAnswer = get(userAnswers, currentQuestionIndex);
        let correctAnswer;
        if (currentUserAnswer) {
            correctAnswer = get(currentUserAnswer, 'correctAnswer');
        } else {
            currentUserAnswer = {};
            set(userAnswers, [currentQuestionIndex], currentUserAnswer);
        }
        if (!correctAnswer) {
            correctAnswer = get(currentQuestionData, 'correctAnswer');
            currentUserAnswer.correctAnswer = correctAnswer;
        }
        if (radioValue === 'true' || radioValue === 'false') {
            currentUserAnswer.userChoice = radioValue === 'true';
        } else {
            currentUserAnswer.userChoice = radioValue;
        }
        this.setState({
            selectedRadioButton: radioValue
        });
        if (isFunction(onQuestionAnswered)) {
            onQuestionAnswered(currentUserAnswer, currentQuestionIndex, currentQuestionData);
        }
    }

    handleGoToNextQuestion() {
        const { currentQuestionIndex, userAnswers } = this.state;
        const { quizData, onAnotherQuestionShown, onQuizResultCalculated } = this.props;
        const questions = get(quizData, 'questions');
        const nextQuestionIndex = currentQuestionIndex + 1;
        const newState = {
            currentQuestionIndex: nextQuestionIndex,
            selectedRadioButton: null
        };
        if (nextQuestionIndex < questions.length) {
            this.setState(newState);
            if (isFunction(onAnotherQuestionShown)) {
                onAnotherQuestionShown(nextQuestionIndex, questions[onAnotherQuestionShown]);
            }
        } else {
            newState.isShowingQuizResultPage = true;
            this.setState(newState);
            if (isFunction(onQuizResultCalculated)) {
                onQuizResultCalculated(userAnswers);
            }
        }
    }
}

// quizData = {
//     aim: 'Aims of the quiz',
//     questions: [{
//         text: 'Question 1',
//         correctAnswer: true
//     }, {
//         text: 'Question 2',
//         correctAnswer: false
//     }, ...]
// }

Quiz.propTypes = {
    quizData: PropTypes.object.isRequired,
    onQuestionAnswered: PropTypes.func, // the same question can be answered multiple times with different answers
    onAnotherQuestionShown: PropTypes.func,   // current question index is 0-based
    onQuizResultCalculated: PropTypes.func,
    onRetryQuiz: PropTypes.func,
};

export default withTranslation()(Quiz);