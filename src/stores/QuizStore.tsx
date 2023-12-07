import { create } from 'zustand'
import {Quiz} from "@prisma/client";

const quizStore = create((set) => ({
    quiz: null,
    setQuiz: (quiz: Quiz) => set({ quiz }),

}))
