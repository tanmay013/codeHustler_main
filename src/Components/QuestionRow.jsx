import { string } from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

function QuestionRow(props){
 
    var topic = props.questionTopic;
    if(topic === 'Dynamic Progmramming'){
        topic = 'DP.';
    }else if(topic === 'Searching Sorting'){
        topic = "Search Sort"
    }

    const CheckDifficulty = (diff) => {
        switch(diff){
            case 1:
                return 'Super Easy';
            case 2:
                return 'Easy';
            case 3:
                return "Medium";
            case 4:
                return "Hard";
            case 5:
                return "Super Hard";
            default:
                return " ";
        }
    }
    const qid = `/sheet/${props.questionId2}`;

    return(
            <article className={'Questionrow ' + props.colorClass}>
            <ul>
                <Link to={qid}>
                <li>{props.questionId}<span className="small">({topic})</span></li>
                <li>{props.questionTitle}</li>
                <li>{props.askedIn.map((value) => { return value+" " })}</li>
                <li>{CheckDifficulty(props.difficulty)}</li>
                </Link>
            </ul>
            <ul className="more-content">
                <li></li>
            </ul>
        </article>
    );
}

export default QuestionRow;