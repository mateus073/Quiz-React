import { Question } from "@/types/Question"
import { useState } from "react";

type Props = {
    question: Question;
    count: number;
    onAnswer: (answer: number) => void;
}


export const QuestionItem = ({ question, count, onAnswer }: Props) => {

    const [selectedAnswer, setSelectAnswer] = useState<number | null>(null)
    
    const checkQuestion = (key: number) => {
        if (selectedAnswer === null) {
            setSelectAnswer(key)

            setTimeout(() => {
                onAnswer(key)
                setSelectAnswer(null)
            }, 1000);
        }
    }


    return (
        <div>
            <div className="text-3xl font-bold mb-5"> {count}. {question.question}</div>
            <div>
                {question.options.map((item, key) => (
                    <div
                        key={key}
                        onClick={() => checkQuestion(key)}
                        className={`border border-blue-300 rounded-md   px-3 py-3 rounded-mb text-lg mb-4  bg-blue-100
                            ${selectedAnswer !== null ?    'cursor-autp' : 'hover:opacity-80 cursor-pointer'}
                            ${selectedAnswer !== null && selectedAnswer === question.answer && selectedAnswer === key && 'bg-green-100 border-gren-300' }
                            ${selectedAnswer !== null && selectedAnswer !== question.answer && selectedAnswer === key && 'bg-red-100 border-red-300' }
                        `}>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    )
}