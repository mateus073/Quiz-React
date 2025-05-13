"use client"

import { QuestionItem } from "@/compontens/QuestionItem";
import { Results } from "@/compontens/Result";
import { Questions } from "@/data/Questions";
import { useState } from "react";

function Page() {
  const [answers, setAnswers] = useState<number[]>([]) 
  const [currentQuestion, setCurrentQuest] = useState(0);
  const [showResult, setShowResult] = useState(false)


  // function reposavel por passar pra proxima, adicionando mais 1 a currentQuestion
  // chama a funcao que exibe resultaods quando abacaba as perguntas
  const loadNextQuestion = () => {
    if (Questions[currentQuestion + 1]) {
      setCurrentQuest(currentQuestion + 1)
    } else {
      setShowResult(true)
    }
  }

  // salva reposta no historico, dps chama a funcao que passa pra proxima pergunta
  const handleAnswered = (answer: number) => {
    setAnswers([...answers, answer])
    loadNextQuestion();
  }

  // funcao pra reiniciar o quiz
  const resetQuiz = () => {
    setAnswers([]); 
    setCurrentQuest(0); 
    setShowResult(false); 
  }


  return (
    <div className="bg-blue-600 h-screen w-full flex justify-center items-center">
      <div className="w-full max-w-xl rounded-md  bg-white text-black shadow shadow-black ">

        <div className="p-5 font-bold text-2xl shadow shadow-gray-300">Quiz culinaria</div>

        <div className="p-5">

          {/* verifica se e pra exibir div de resltados */}
          {!showResult &&
            <QuestionItem
              question={Questions[currentQuestion]}
              count={currentQuestion + 1}
              onAnswer={handleAnswered}
            />}

          {/* exibe div de resultado */}
          {showResult &&
            <Results
              answers={answers}
              questions={Questions}
            />}

        </div>

        {/* rodape */}
        <div className="p-5 text-center border-t border-gray-300">
          {!showResult &&
            `${currentQuestion + 1} de ${Questions.length} pergunta${Questions.length === 1 ? '' : 's'}`
          }
          {showResult &&
            <button onClick={resetQuiz} className="px-3 border bg-blue-500 text-white py-2 rounded-md">
              REINICIAR QUIZ
            </button>
          }
        </div>
      </div>
    </div>
  );
}


export default Page