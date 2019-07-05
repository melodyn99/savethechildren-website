import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { capitalize, get, set, isFunction, reduce } from 'lodash-es';
import correctRobotImage from '../../images/ResourcesForYou/Quiz/ic_Quiz-Correct.png';
import incorrectRobotImage from '../../images/ResourcesForYou/Quiz/ic_Quiz-Incorrect.png';
import nextQuestionImage from '../../images/ResourcesForYou/Quiz/btn_Quiz-Next.png';
import retryQuizImage from '../../images/ResourcesForYou/Quiz/btn_Quiz-Retry.png';

let nextInstanceId = 1;

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.instanceId = nextInstanceId;
        ++nextInstanceId;
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
        const instanceId = this.instanceId;
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
                <div className="quiz-answer-choices">
                    <div className="quiz-answer-choice quiz-answer-choice-left">
                        <input
                            type="radio"
                            name="quiz_answer"
                            onChange={this.handleRadioButtonChange}
                            id={'quiz_answer_true_' + instanceId}
                            value="true"
                            checked={selectedRadioButton === 'true'}
                        />
                        <label htmlFor={'quiz_answer_true_' + instanceId}>
                            True
                        </label>
                    </div>
                    <div className="quiz-answer-choice">
                        <input
                            type="radio"
                            name="quiz_answer"
                            onChange={this.handleRadioButtonChange}
                            id={'quiz_answer_false_' + instanceId}
                            value="false"
                            checked={selectedRadioButton === 'false'}
                        />
                        <label htmlFor={'quiz_answer_false_' + instanceId}>
                            False
                        </label>
                    </div>
                    <div className="quiz-answer-choice quiz-answer-choice-right">
                        <input
                            type="radio"
                            name="quiz_answer"
                            onChange={this.handleRadioButtonChange}
                            id={'quiz_answer_do_not_know_' + instanceId}
                            value="do_not_know"
                            checked={selectedRadioButton === 'do_not_know'}
                        />
                        <label htmlFor={'quiz_answer_do_not_know_' + instanceId}>
                            Don't know
                        </label>
                    </div>
                </div>
                <div className={'quiz-answer-feedback' + (currentUserAnswer ? '' : ' hide-quiz-answer-feedback')}>
                    {get(currentUserAnswer, 'userChoice') === correctAnswer ? <div className="answer">
                        <img src={correctRobotImage} alt="" width="150" />
                        <span className="answer-text">Correct!!</span>
                    </div> : <div className="answer">
                        <img src={incorrectRobotImage} alt="" width="150" />
                        <span className="answer-text">Incorrect: The correct answer is "{capitalize(correctAnswer)}"</span>
                    </div>}
                    <div className="next-question-button-div">
                        <img
                            className="next-question-button"
                            onClick={this.handleGoToNextQuestion}
                            src={nextQuestionImage}
                            alt="Go to next question"
                            width="60"
                        />
                    </div>
                </div>
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
                    <div className="score-circle">
                        <div className="score-value">
                            <span className="score-number">{score.toFixed(0)}</span>%
                        </div>
                    </div>
                </div>
                <ul className="score-breakdown">
                    <li><b>{correctAnswerCount}</b> Correct Answer(s)</li>
                    <li><b>{incorrectAnswerCount}</b> Incorrect Answer(s)</li>
                    <li><b>{doNotKnowCount}</b> Don't know</li>
                </ul>
            </div>
            <div className="quiz-footer">
                <button onClick={this.handleRetryQuiz}>
                    <img src={retryQuizImage} alt="" />
                    Retry Quiz
                </button>
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