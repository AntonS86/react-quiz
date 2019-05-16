import React from 'react';
import classes from './Quiz.module.css'

export default class Quiz extends React.Component {

    state = {
        quiz: []
    };

    render() {
        return (
            <div className={classes.Quiz}>
                <h1>Quiz</h1>
            </div>
        )
    }
}