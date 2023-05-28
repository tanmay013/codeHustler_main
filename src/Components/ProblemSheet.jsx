import React from "react";
import "../CompCSS/ProblemSheet.css";

function ProblemSheet(props){
    console.log(props.netdata.links);
    return(
        <div className="problemSheetMain">
        
            <div className="problemHeader">
                
                <h1> {props.netdata.title} </h1>
                <div className="problemSubHeader">
                    
                    <div className="problemDifficulty">
                        <span> Difficulty : {props.netdata.difficulty}</span>
                    </div>
                    <span className="problemDifficultySpan">||</span>
                    <div className="problemAskedIn">
                        <span> Asked In : </span>
                        <span> {props.netdata.companiesasked}</span>
                        {/* Companied logo grid 3+extra if needed */}
                    </div>
                
                </div>
            </div>
            <hr></hr>

            <div className="problemStatement">
                <h2> Problem Statement. </h2>
                <p> {props.netdata.problemstatement} </p>
                
                <h3> Your Task : </h3>
                <p> {props.netdata.task} </p>

                <h3> Example-1 : </h3>
                <h4 className="exampleText"> Sample Input: </h4>
                <p className="exampleText"> s = Birla </p>
                <h4 className="exampleText"> Sample Output: </h4>
                <p className="exampleText"> alriB </p> 


                <h3> Example-2 : </h3>
                <h4 className="exampleText"> Sample Input: </h4>
                <p className="exampleText"> s = Hustler </p>
                <h4 className="exampleText"> Sample Output: </h4>
                <p className="exampleText"> reltusH </p>     
            </div>

            <hr></hr>

            <div className="problemSolvingLinks">
                <h2> Links To Try The Problem : </h2>
                <div className="problemSolvingLinksButtonGroup">
                    <button><a href="https://practice.geeksforgeeks.org/problems/reverse-a-string/1"> GEEK FOR GEEKS </a></button>
                    <button><a href={props.netdata.links}> LEET CODE </a></button>
                    <button><a href="https://practice.geeksforgeeks.org/problems/reverse-a-string/1"> CODE STUDIO </a></button>
                </div>
            </div>

        </div>
    );
}

export default ProblemSheet;