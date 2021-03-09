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
                    "option_description" : "No Map qualquer objeto pode ser uma chave. No Set as chaves são os indices do Array, ele não guarda valores repetidos"
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
                    "option_description" : "Um closure é uma função que se lembra do ambiente ou escopo lexico no qual ela foi criada"
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
                    "option_description" : ("Pseudo-classes são usadas para definir um estado especial para o objeto, como por exemplo,"
                    +" :hover, que quando o usuário passa o mouse por cima de um objeto, os estilos definidos em classe:hover são ativados"+
                    "economizando JS. Já os pseudo elementos nos ajudam a referenciar parte de algum elemento"
                    +" como ::first-letter, que aplica alguma propriedade na primeira letra de um texto")
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
                    "option_description" : "<form>"
                },
                {
                    "id": "2",
                    "option_description" : "<table>, <tr> - table row, <td> - table data"
                },
                {
                    "id": "3",
                    "option_description" : "<h1>"
                },
                {
                    "id": "4",
                    "option_description" : "<p>"
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
                    "option_description" : ("CSS Grid é multidimensional (o layout pode ser organizado como uma tabela), ou seja, "
                    +"linhas e colunas. Já o flexbox Flexbox é unidimensiona")
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