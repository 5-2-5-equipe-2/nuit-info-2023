import React from 'react'
import prisma from "@/lib/prisma";

export default async function Page({params}: { params: { id: string } }) {
    // verify id is a int
    let id = parseInt(params.id)

    // verify slug is a valid quiz
    let quiz = await prisma.quiz.findFirst(
        {
            where: {
                id: id
            }
        }
    )

    if (!quiz) {
        return {
            notFound: true
        }
    }

    return (
        <div>{quiz.title}</div>
    )
}