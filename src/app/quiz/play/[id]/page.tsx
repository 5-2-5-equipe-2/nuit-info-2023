import React from 'react'
import prisma from "@/lib/prisma";
import Quiz from "@/app/components/quiz/Quiz";

export default async function Page({params}: { params: { id: string } }) {
    // verify id is a int
    let id = parseInt(params.id)

    // verify slug is a valid quiz
    let quiz = await prisma.quiz.findFirst(
        {
            where: {
                id: id
            },
            include: {
                questions: {
                    include: {
                        answers: true
                    }
                }
            }
        }
    )

    if (!quiz) {
        return {notFound: true}
    }

    return (
        <Quiz quiz={quiz}/>
    )
}