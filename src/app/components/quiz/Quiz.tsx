"use client"

import React from 'react'

export default function Quiz(props: any) {
    let quiz = props.quiz;
    let [currentQuestion, setCurrentQuestion] = React.useState(0);
    let [correctAnswers, setCorrectAnswers] = React.useState(0);

    if (currentQuestion >= quiz.questions.length) {
        return (
            <>
                <div className={"flex justify-center min-h-max mt-5"}>
                    <div className="stats shadow bg-secondary-content">
                        <div className="stat">
                            <div className="stat-figure text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     className="inline-block w-8 h-8 stroke-current">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                            </div>
                            <div className="stat-title text-primary">Score</div>
                            <div className="stat-value">{correctAnswers}/{quiz.questions.length}</div>
                            <div className="stat-desc">Correct Answers</div>
                        </div>
                    </div>

                </div>
                <div className={"flex flex-col items-center mt-10"}>
                    <div className="carousel w-3/4 bg-secondary-content card shadow-xl">
                        {quiz.questions.map((question: any, i: number) => {
                            return (
                                <div key={i} id={"item-" + i} className="carousel-item w-full">
                                    <div className={"w-full"}>
                                        <h1 className={"text-2xl m-5"}>{question.title}</h1>
                                        <div className={"grid grid-cols-2"}>
                                            {question.answers.map((answer: any, i: number) => {
                                                return (
                                                    <button key={i}
                                                            className={"btn m-5 text-xl  " + (answer.isCorrect ? "btn-success" : "btn-error")}>{answer.title}</button>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <div className="flex justify-center w-3/4 py-2 gap-2 mt-2">
                        {quiz.questions.map((answer: any, i: number) => {
                            return (
                                <a key={i} href={"#item-" + i} className="btn btn-xs">{i}</a>
                            )
                        })}
                    </div>
                </div>
            </>
        )
    }

    return (
        <>

            <div className={"flex justify-center h-full items-center mt-10"}>
                <div className={"w-3/4 card bg-secondary-content shadow-xl p-8"}>
                    <h1 className={"text-4xl mb-5 m-5"}>{quiz.questions[currentQuestion].title}</h1>
                    <div className={"grid grid-cols-2"}>
                        {quiz.questions[currentQuestion].answers.map((answer: any, i: number) => {
                            return (
                                <button key={i} className="btn m-5 btn-outline btn-primary text-xl" onClick={() => {
                                    if (answer.isCorrect) {
                                        // append 1 to correctAnswers
                                        setCorrectAnswers(correctAnswers + 1)
                                    }
                                    setCurrentQuestion(currentQuestion + 1)
                                }
                                }>{answer.title}</button>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}