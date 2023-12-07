import React from 'react'
import QuizHero from "@/app/components/quiz/QuizHero";
import prisma from "@/lib/prisma";

export const dynamic = 'force-dynamic';

export default async function Page() {
    let quizzes = await prisma.quiz.findMany();

    return (
        <>
            <div className={'grid grid-cols-3'}>
                {quizzes.map((quiz, i) => {
                    return <QuizHero key={i} quiz={quiz}/>
                })}
            </div>
        </>
    )
}