import React from 'react';
import classes from './Quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';

export default class Quiz extends React.Component {

    state = {
        quiz: [
            {
                question     : 'Какого цвета небо?',
                rightAnswerId: 2,
                answers      : [
                    {id: 1, text: 'Черный'},
                    {id: 2, text: 'Синий'},
                    {id: 3, text: 'Красный'},
                    {id: 3, text: 'Зеленый'},
                ]
            }
        ]
    };

    onAnswerClickHandler = (answerId) => {
        console.log('Answer id: ', answerId);
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Ответьте на все вопросы</h1>
                    <ActiveQuiz
                        question={this.state.quiz[0].question}
                        answers={this.state.quiz[0].answers}
                        onAnswerClick={this.onAnswerClickHandler}
                    />
                </div>
            </div>
        )
    }
}