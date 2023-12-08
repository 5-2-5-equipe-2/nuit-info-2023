'use client'

import React from 'react'
import Image from "next/image";
import Link from "next/link";

export default function QuizHero(props: any) {
    let {quiz} = props

    return (
        <div className="card card-side bg-secondary-content shadow-xl m-5">
            <figure><img src={quiz.image} alt="Quiz Image" className={"object-cover h-full w-52 aspect-square"} /></figure>
            <div className="card-body">
                <h2 className="card-title">{quiz.title}</h2>
                <p>{quiz.description}</p>
                <div className="card-actions justify-end">
                    <Link className="btn btn-primary" href={"/quiz/play/" + quiz.id}>Play</Link>
                </div>
            </div>
        </div>
    )
}