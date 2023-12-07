"use client"

import React from 'react'

export default function Quiz(props: any) {
    let quiz = props.quiz;
    let [currentQuestion, setCurrentQuestion] = React.useState(0);
    let [correctAnswers, setCorrectAnswers] = React.useState(0);

    if (currentQuestion >= quiz.questions.length) {
        return (
            <>
                <h1>Quiz Complete!</h1>
                <p>You got {correctAnswers} correct answers out of {quiz.questions.length} questions.</p>
            </>
        )
    }

    return (
        <>
            <h1>{quiz.questions[currentQuestion].title}</h1>
            <div className={"grid grid-rows-2"}>
                {quiz.questions[currentQuestion].answers.map((answer: any, i: number) => {
                    return (
                        <button key={i} className="btn btn-block btn-primary" onClick={() => {
                            if (answer.isCorrect) {
                                // append 1 to correctAnswers
                                setCorrectAnswers(correctAnswers+1)
                            } else {
                                // append 0 to correctAnswers
                            }
                            setCurrentQuestion(currentQuestion+1)}
                        }>{answer.title}</button>
                    )
                })}
            </div>
        </>
    )
}