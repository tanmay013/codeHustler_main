import React from "react";
import '../CompCSS/SolutionSheet.css';
import TabPanel from "./TabPanel";
import EasyImage from "../images/EASY.png";
import MediumImage from '../images/MEDIUM.png';

function SolutionSheet(){

    return(
        <div className="solutionSheetMain">
            <div className="problemHeader">
                
                <h1>  Reverse A String </h1>
                <div className="problemSubHeader">
                    
                    <div className="problemDifficulty">
                        <span> Difficulty : </span>
                        <img src={MediumImage} alt="Difficulty_Icon"></img>
                    </div>
                    <span  className="problemDifficultySpan">||</span>
                    <div className="problemAskedIn">
                        <span> Asked In: </span>
                        <span> Logo_Of_Companies</span>
                        {/* Companied logo grid 3+extra if needed */}
                    </div>
                
                </div>
            </div>
            <hr></hr>

            <div className="solutionApproach">
                <h2> Approach : </h2>
                <p>saddjhasjkdhjashdjasda sdjhasbdkjas das djas djas dja sd askdj as daks dj asdj asjdk asd ka</p>

                <h3> Complexity : </h3>
                <p> Time Complexity : O(|S|).</p>
                <p> Space Complexity : O(1). </p>
            </div>

            <br></br>

            <div className="CodeMain">
                <h2> Optmized Code for Above Approach: </h2>
                <div className="codeArea">
                    <TabPanel />
                </div>
            </div>
            
            
        </div>

    );
}

export default SolutionSheet;