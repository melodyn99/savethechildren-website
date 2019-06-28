// Essential for all components
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

// Utils
import { map } from 'lodash-es';
import { Carousel } from 'react-responsive-carousel';

function renderQuestion(question, index) {
    const qid = index + 1;
    const id = 'q' + qid;
    return <tr key={id}>
        <th>{qid}</th>
        <th>{question.question}</th>
        <th><input className="quizPageAnswerCheckbox" type="radio" name={qid} value="true" /></th>
        <th><input className="quizPageAnswerCheckbox" type="radio" name={qid} value="false" /></th>
        <th><input className="quizPageAnswerCheckbox" type="radio" name={qid} value="dont_know" /></th>
    </tr>;
}

class QuizPage extends Component {

    render() {
        let { images, aims, questions } = this.props;
        if (!images || !images.length) {
            images = [{
                url: 'holder.js/640x480'
            }];
        }
        if (!questions || questions.length) {
            questions = [{
                question: 'Question',
                answer: true
            }];
        }
        return (
            <div>
                <div className="wrapper-container-main">
                    <div className="container-main">
                        <Carousel
                            showThumbs={false}
                        >
                            {/* {map(images, renderCarouselImage)} */}
                        </Carousel>
                        <div className="stc-common-page-content stc-quiz-page-content">
                            <h1>QUIZ</h1>
                            <div className="aims">AIMS: {aims || 'text for quiz aims'}</div>
                            <table>
                                <thead><tr>
                                    <th></th>
                                    <th>QUESTIONS</th>
                                    <th>TRUE</th>
                                    <th>FALSE</th>
                                    <th>DONT_KNOW</th>
                                </tr></thead>
                                <tbody>
                                    {map(questions, renderQuestion)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withTranslation()(QuizPage);
