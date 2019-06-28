import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { map } from 'lodash-es';
import { Carousel } from 'react-responsive-carousel';
import Footer from '../100Include/footer';
import MainMenuBar from '../100Include/MainMenuBar';
import MenuBar from '../100Include/MenuBar';
import 'holderjs';

function renderCarouselImage(image) {
    return <div key={image.url}>
        <img src={image.url} />
    </div>;
}

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
    constructor(props) {
        super(props);
    }

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
        return <div className="stc-common-page stc-quiz-page">
            <MainMenuBar/>
            <MenuBar menuData={{}}/>
            <div className="stc-common-page-container">
                {/*<NavBreadCrumb/>*/}
                <div className="container">
                    <Carousel
                        showThumbs={false}
                    >
                        {map(images, renderCarouselImage)}
                    </Carousel>
                    <div className="stc-common-page-content stc-quiz-page-content">
                        <h1>QUIZ</h1>
                        <div class="aims">AIMS: {aims || 'text for quiz aims'}</div>
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
            <Footer/>
        </div>;
    }
}

MenuBar.propTypes = {
    menuData: PropTypes.object.isRequired
};

export default withTranslation()(QuizPage);
