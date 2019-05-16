import React from 'react';
import classes from './Quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';

export default class Quiz extends React.Component {

    state = {
        activeQuestion: 0,
        quiz          : [
            {
                id           : 1,
                question     : 'Какого цвета небо?',
                rightAnswerId: 2,
                answers      : [
                    {id: 1, text: 'Черный'},
                    {id: 2, text: 'Синий'},
                    {id: 3, text: 'Красный'},
                    {id: 4, text: 'Зеленый'},
                ]
            },
            {
                id           : 2,
                question     : 'В каком году основали Санкт-Петербург?',
                rightAnswerId: 3,
                answers      : [
                    {id: 1, text: '1700'},
                    {id: 2, text: '1702'},
                    {id: 3, text: '1703'},
                    {id: 4, text: '1803'},
                ]
            }
        ]
    };

    onAnswerClickHandler = (answerId) => {
        console.log('Answer id: ', answerId);
        this.setState({
            activeQuestion: this.state.activeQuestion + 1
        })
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Ответьте на все вопросы</h1>
                    <ActiveQuiz
                        question={this.state.quiz[this.state.activeQuestion].question}
                        answers={this.state.quiz[this.state.activeQuestion].answers}
                        onAnswerClick={this.onAnswerClickHandler}
                        quizLength={this.state.quiz.length}
                        answerNumber={this.state.activeQuestion + 1}
                    />
                </div>
            </div>
        )
    }
}