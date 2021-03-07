import {useState} from 'react';

/*imports components */
import QuestionComponent from '../components/question-box';
import PopupLoser from '../components/popup-loser';
import PopupWinner from '../components/popup-winner';

/*imports styles */
import './style/question-page.css';

export default function Question(){

    /*array that simulates the backend response */
    const question = [
        {
            "info_question" : {
                "id" : "1",
                "description" : "Em javascript, qual a diferença entre Set e Map?",
                "correct_answer" : "2"
            },
            "options_list" : [
                {
                    "id": "1",
                    "option_description" : "Opção 1"
                },
                {
                    "id": "2",
                    "option_description" : "Opção 2"
                },
                {
                    "id": "3",
                    "option_description" : "Opção 3"
                },
                {
                    "id": "4",
                    "option_description" : "Opção 4"
                }
            ],
            
        },
        {
            "info_question" : {
                "id" : "2",
                "description" : " O que é closure em javascript?",
                "correct_answer" : "2"
            },
            "options_list" : [
                {
                    "id": "1",
                    "option_description" : "Opção 1"
                },
                {
                    "id": "2",
                    "option_description" : "Opção 2"
                },
                {
                    "id": "3",
                    "option_description" : "Opção 3"
                },
                {
                    "id": "4",
                    "option_description" : "Opção 4"
                }
            ],
            
        },
        {
            "info_question" : {
                "id" : "3",
                "description" : "No CSS, qual a diferença entre pseudo-classes e pseudo-elementos?",
                "correct_answer" : "2"
            },
            "options_list" : [
                {
                    "id": "1",
                    "option_description" : "Opção 1"
                },
                {
                    "id": "2",
                    "option_description" : "Opção 2"
                },
                {
                    "id": "3",
                    "option_description" : "Opção 3"
                },
                {
                    "id": "4",
                    "option_description" : "Opção 4"
                }
            ],
            
        },
        {
            "info_question" : {
                "id" : "4",
                "description" : " Quais tags HTML são usadas para exibir os dados na forma tabular?",
                "correct_answer" : "2"
            },
            "options_list" : [
                {
                    "id": "1",
                    "option_description" : "Opção 1"
                },
                {
                    "id": "2",
                    "option_description" : "Opção 2"
                },
                {
                    "id": "3",
                    "option_description" : "Opção 3"
                },
                {
                    "id": "4",
                    "option_description" : "Opção 4"
                }
            ],
            
        },
        {
            "info_question" : {
                "id" : "5",
                "description" : "Qual a principal diferença entre CSS Grid e Flexbox?",
                "correct_answer" : "2"
            },
            "options_list" : [
                {
                    "id": "1",
                    "option_description" : "Opção 1"
                },
                {
                    "id": "2",
                    "option_description" : "Opção 2"
                },
                {
                    "id": "3",
                    "option_description" : "Opção 3"
                },
                {
                    "id": "4",
                    "option_description" : "Opção 4"
                }
            ],
            
        }
    ];

    /*States */
    const [showPopUpLoser, setShowPopUpLoser] = useState(false);
    const [showPopUpWinner, setShowPopUpWinner] = useState(false);
    const [currentQuestion, setcurrentQuestion] = useState(1);
    const [currentOption, setOption] = useState(-1);
    const [score, setScore] = useState(0);

    function setCurrentOption(id) {
        /*option save the new alternative chosen by the user */
        setOption(id);
    }

    function verifyWinner(){
        if(currentQuestion === 5 && score === 4){
            setScore(score+1);
            return true;
        } else {
            return false;
        }
    }

    function updateScore(){

        
        if(verifyWinner()){
            setShowPopUpWinner(true);
            return ;
        }
        if(question[currentQuestion - 1].info_question.correct_answer === currentOption){
            setScore(score + 1);
            setcurrentQuestion(currentQuestion + 1);
        } else {
            setShowPopUpLoser(true);
        }
    }

    return (
        /*render view */
        <div className="question-quiz">

            {showPopUpLoser ? <PopupLoser/> : null}
            {showPopUpWinner ? <PopupWinner/> : null}
            
            <h1 className="title">Quiz Challenge</h1>
            <div className = "infos">
                <h1>Pontuação : {score}</h1>
                <h2>Questão Atual : {currentQuestion}</h2>
            </div>
            <div className="question-box">
                <form>
                    <QuestionComponent question = {question[currentQuestion - 1]} setOption = {setCurrentOption}/>
                    <a className = "button-next" href="#" onClick = {updateScore}>Next</a>
                </form>
                
            </div>    
        </div>
    );
}