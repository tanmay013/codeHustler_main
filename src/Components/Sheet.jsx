import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "../CompCSS/Sheet.css";
import SolutionSheet from "./SolutionSheet";
import filterAdd from "../images/filter-add.svg";
import filterRemove from "../images/filter-remove.svg";
// import SidebarSelect from "../images/sidebarSelect.svg";
// import ProblemSheet from "./ProblemSheet";
import star1 from "../images/Star1.svg";
import star2 from "../images/star2.svg";
import Google from "../images/Google1.png";
import Amazon from "../images/amazon1.png";
import Microsoft from "../images/Microsoft1.png";
import Facebook from "../images/Facebook1.png";
import Twitter from "../images/Twitter1.png";
import GFG from "../images/gfg.png";
import Leet from "../images/Leet.png";
import CodeStudio from "../images/codeStudio.png";
import HomePageFooter from "./HomePageFooter";
import TabPanel from "./TabPanel.jsx";
import SearchIcon from "../images/Search.svg";
import sheetData from "../Sheet Data/sheetData.json";
import CS from "../images/codeStudio.jpg";
import { useParams } from "react-router";
import CF from "../images/CF.png";

function Sheet(){

    const [showSidebar, setShowSidebar] = useState(false);
    const [showProblem, setShowProblem] = useState(true);
    const [selectedRadio, setSelectedRadio] = useState("AllProblems");
    const qid = useParams();
    const [qno, setqno] = useState(0);

    // const getData = () => {
    //     const options = {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json',
    //           'Access-Control-Request-Headers': '*',
    //           'api-key': '3PpRJ6soXfQ31E5uBuwX7EVVcvC6d1BlNkWFmAakNgszGsFz4JeRjltC0KYuhxBT'
    //         },
    //         body: {"collection":"code","database":"CodeHustler","dataSource":"CodeHustler"}
    //       };
          
    //       fetch('https://data.mongodb-api.com/app/data-gdjbb/endpoint/data/v1/action/findOne', options)
    //         .then(response => response.json())
    //         .then(response => console.log(response))
    //         .catch(err => console.error(err));
  
    // }

    // useEffect(() => {
    //     getData();
    // });

    const handleRadio = (e) => {
        setSelectedRadio(e.target.name);
    }

    useEffect(() => {
        sheetData.map((value, index) => {
            if(value.id === qid.id){
                setqno(index);
            }
        })
        console.log(qid.id)
    });

    return(
        <div className="SheetMain">
            <Navbar sheet={true} padding='2vh' compActive='Library' activeAlways={true} shadow = {false} />
            
            <div className="SidebarMain">
                {/* <img className="sidebarSelect" src={SidebarSelect}></img> */}
                <div className="SidebarBase">
                    <div className="sidebarImage" onClick={() => {setShowSidebar(!showSidebar); }}>{showSidebar ? <img src={filterRemove} /> : <img src={filterAdd} /> }</div>
                    <div className={showProblem ? "sidebarText active" : "sidebarText"}  onClick={() => {setShowProblem(true);}}>Problem</div>
                    <div className={!showProblem ? "sidebarText active" : "sidebarText"}  onClick={() => {setShowProblem(false);}}>Solution</div>
                    <span className="indicator" style={showProblem ? {'left':'11vw'} : {'left':'21.5vw'}} />
                </div>
                {showSidebar && <div className="SidebarOpen">
                    <div className="SidebarFilterSearch" >
                        <h2> Filters </h2>
                        <div className="SideSearchBarMain"><img src={SearchIcon} /><input className="SideSearchBar" type="search" placeholder="Search here" /></div>
                    </div>
                    <div className="SidebarRadio">
                        <input type="radio" value="AllProblems" name="AllProblems" checked={selectedRadio === "AllProblems"} onChange={handleRadio} /> All Problems
                        <input type="radio" value="Array" name="Array" checked={selectedRadio === "Array"} onChange={handleRadio} /> Array
                        <input type="radio" value="Stack" name="Stack" checked={selectedRadio === "Stack"} onChange={handleRadio} /> Stack
                        <input type="radio" value="Queue" name="Queue" checked={selectedRadio === "Queue"} onChange={handleRadio} /> Queue
                        <input type="radio" value="LinkedList" name="LinkedList" checked={selectedRadio === "LinkedList"} onChange={handleRadio} /> Linked List
                        <input type="radio" value="Tree" name="Tree" checked={selectedRadio === "Tree"} onChange={handleRadio} /> Tree
                        <input type="radio" value="Graph" name="Graph" checked={selectedRadio === "Graph"} onChange={handleRadio} /> Graph
                    </div>
                    <div className="SidebarQuestionsDropMain">
                        <div className="SidebarQuestion" >
                            <h2> Questions </h2>
                            <select className="SidebarDropdownMain" name="dog-names" id="dog-names">
                                <option className="sidebarDropdownOptions" value="rigatoni"><span> Reverse A String </span> <img src={star1} /><img src={star1} /><img src={star1} /><img src={star1} /></option>
                                <option className="sidebarDropdownOptions" value="dave">Palandromic Count</option>
                                <option className="sidebarDropdownOptions" value="pumpernickel">Sorting Problem</option>
                                <option className="sidebarDropdownOptions" value="reeses">Shortest Path</option>
                            </select>
                        </div>
                        <div className="SidebarCompanies">
                            <h2> Companies </h2>
                            <select className="SidebarDropdownMain short" name="dog-names" id="dog-names">
                                <option value="rigatoni">Amazon</option>
                                <option value="dave">Google</option>
                                <option value="pumpernickel">Facebook</option>
                                <option value="reeses">Microsoft</option>
                            </select>
                        </div>

                    </div>

                </div>}
            </div>

            <div className={showSidebar ? "SheetContentMain active" : "SheetContentMain"}>
                <h1> {sheetData[qno].title} </h1>
                <h2> Difficulty : <div className="stars"> {[...Array(sheetData[qno].difficulty)].map((e, i) => <img src={star2}/>)} {[...Array(5-sheetData[qno].difficulty)].map((e, i) => <img src={star1}/>)} </div> </h2>
                
                <div style={{'display':'flex', 'paddingTop':'21px'}}><h2 style={{'padding':'5px'}}> Asked In :</h2> <div className="Sheetcompanies"> {sheetData[qno].companiesasked.map((value, index) => {switch(value){
                    case 'Google':
                        return <img src={Google} />
                    case 'Microsoft':
                        return <img src={Microsoft} />
                    case 'Amazon' :
                        return <img src={Amazon} />
                    case 'Facebook':
                        return <img src={Facebook} />
                    default:
                        return <img src={Twitter} />
                }} )}    </div> </div>

                <hr style={{'marginTop':'32px'}} />
                {showProblem ? <div className="ProblemContent">
                    <h2 style={{'marginTop': '16px'}}> Problem Statement : </h2>
                    <pre>{sheetData[qno].problemstatement} </pre>
                    <h2 style={{'marginTop': '8px'}}> Your Task : </h2>
                    <pre>{sheetData[qno].task} </pre>
                    <h2 style={{'marginTop': '8px'}}> Example 1: </h2>
                    <div className="exampleSheet"> 
                        <pre>{sheetData[qno].example[0]} </pre>
                    </div>
                    <h2 style={{'marginTop': '8px'}}> Example 2: </h2>
                    <div className="exampleSheet"> 
                        <pre>{sheetData[qno].example[1]} </pre>
                    </div>
                </div> : <div className="SolutionContent">
                    <h2 style={{'marginTop': '16px'}}> Approach : </h2>
                    <pre>{sheetData[qno].solutionexplanation} </pre>
                    <h2 style={{'marginTop': '8px'}}> Complexity : </h2>
                    <pre>Time Complexity : {sheetData[qno].timecomplexity[0]}<br /><br />
                        Space Complexity : {sheetData[qno].timecomplexity[1]} </pre>
                    <h2 style={{'marginTop': '8px'}}> Optimized Code : </h2>
                    <div className="codeArea" style={{'marginBottom':'24vh'}}>
                        <TabPanel codeData={sheetData[qno].solution} />
                    </div>
                   </div> }
                </div>
                {showProblem && <div className="sheetPractice">
                    <div className="content">Try the problems on : </div>
                    { sheetData[qno].links[0].length !== 0 && <a href={sheetData[qno].links[0]} target="_blank"><div className="PracticeLink"><img src={Leet} style={{'height':'28px', 'width':'28px', 'marginTop':'16px', 'marginRight':'8px', 'marginLeft':'4vw'}} /><span>Leet Code</span></div></a>}
                    { sheetData[qno].links[1].length !== 0 && <a href={sheetData[qno].links[1]} target="_blank"><div className="PracticeLink"><img src={CS} style={{'marginLeft':'3vw', 'height':'24px', 'width':'24px', 'marginTop':'16px'}} /><span>Code Studio</span></div></a>}
                    { sheetData[qno].links[2].length !== 0 && <a href={sheetData[qno].links[2]} target="_blank"><div className="PracticeLink"><img src={GFG} /><span>Geeks For Geeks</span></div></a>}
                    { sheetData[qno].links[3].length !== 0 && <a href={sheetData[qno].links[3]} target="_blank"><div className="PracticeLink"><img src={CF} /><span>Code Forces</span></div></a>}
                </div>}
                <HomePageFooter />
            </div>
    );
}

export default Sheet;

// import EasyImage from "../images/EASY.png";
// import MediumImage from "../images/MEDIUM.png";
// import HardImage from "../images/HARD.png";
// import { useParams } from "react-router";
// import axios from 'axios';

// function Sheet(props){

//     let {id} = useParams();

//     var [sideBarToggle, setSideBarToggle] = useState(false);
//     var [probSolShift, setProbSolShift] = useState(false);

//     const handleSideMenu = () => {
//         setSideBarToggle(!sideBarToggle)
//     }

//     const handleProblemBtn = () => {
//         setProbSolShift(false)
//     }

//     const handleSolutionBtn = () =>{
//         setProbSolShift(true)
//     }
   

//     const [data,setData]=useState([]);

//     useEffect(() => {
//         const getData = async() => {
//             try{
//                 var res = await axios.get('https://code-hustler.herokuapp.com/showSpecificCode/'+id);
//                 setData(res.data);
//             }catch(e){
//                 console.log(e);
//             }  
//         }
//         getData();
//     }, [id]);

//     return(
//         <div className="sheetMain">
//             <Navbar compActive='Library' activeAlways={true} shadow = {false} />
//             <div className="SidebarMain">

//                 <div className={ sideBarToggle ? "activeSidebarMain show" : "activeSidebarMain"}>
//                     <div className="activeSidebarHeader">
//                         <div className="activeSidebarDropdown">
//                             <select className="activeSidebarSelect">
//                                 <option value={'All'}> All Problem </option>
//                                 <option value={'Array'}> Array </option>
//                                 <option value={'Stack'}> Stack </option>
//                                 <option value={'Queue'}> Queue </option>
//                                 <option value={'LinkedList'}> Linked List </option>
//                                 <option value={'Tree'}> Tree </option>
//                                 <option value={'Graph'}> Graph </option>
//                             </select>
//                         </div>

//                         <div className="searchFormMain">
//                             <form className="SearchForm" role="search">
//                                 <input className="searchTxt" id="searchText" type="search" placeholder="Search..." autoFocus />
//                                 <button className="searchBtn" type="submit">Go</button>    
//                             </form>
//                         </div>

//                     </div>
//                     <hr className="sidebarLine"></hr>
                    
//                     <div className="activeSidebarContentMain">
//                         <table className="sidebarTableMain">   
//                         <thead>
//                             <tr>
//                                 <th> Problem Title </th>
//                                 <th> Asked In Companies </th>
//                                 <th> Difficulty </th>
//                             </tr>
//                         </thead> 
//                         <tbody>
//                         <tr>
//                                 <td>Reverse a String</td>
//                                 <td>Google,  Microsoft, Amazon</td>
//                                 <td> <img src={EasyImage} alt="easy"></img></td>
//                             </tr>
//                             <tr>
//                                 <td>Reverse a String</td>
//                                 <td>Google,  Microsoft, Amazon</td>
//                                 <td><img src={MediumImage} alt="Medium"></img></td>
//                             </tr>
//                             <tr>
//                                 <td>Reverse a String</td>
//                                 <td>Google,  Microsoft, Amazon</td>
//                                 <td><img src={HardImage} alt="Hard"></img></td>
//                             </tr>
//                             <tr>
//                                 <td>Reverse a String</td>
//                                 <td>Google,  Microsoft, Amazon</td>
//                                 <td><img src={EasyImage} alt="easy"></img></td>
//                             </tr>
//                             <tr>
//                                 <td>Reverse a String</td>
//                                 <td>Google,  Microsoft, Amazon</td>
//                                 <td><img src={MediumImage} alt="Medium"></img></td>
//                             </tr>
//                             <tr>
//                                 <td>Reverse a String</td>
//                                 <td>Google,  Microsoft, Amazon</td>
//                                 <td><img src={HardImage} alt="Hard"></img></td>
//                             </tr>
//                             <tr>
//                                 <td>Reverse a String</td>
//                                 <td>Google,  Microsoft, Amazon</td>
//                                 <td><img src={EasyImage} alt="easy"></img></td>
//                             </tr>
//                             <tr>
//                                 <td>Reverse a String</td>
//                                 <td>Google,  Microsoft, Amazon</td>
//                                 <td><img src={EasyImage} alt="easy"></img></td>
//                             </tr>
//                             <tr>
//                                 <td>Reverse a String</td>
//                                 <td>Google,  Microsoft, Amazon</td>
//                                 <td><img src={EasyImage} alt="easy"></img></td>
//                             </tr>
//                             <tr>
//                                 <td>Reverse a String</td>
//                                 <td>Google,  Microsoft, Amazon</td>
//                                 <td><img src={MediumImage} alt="Medium"></img></td>
//                             </tr>
//                             <tr>
//                                 <td>Reverse a String</td>
//                                 <td>Google,  Microsoft, Amazon</td>
//                                 <td><img src={HardImage} alt="Hard"></img></td>
//                             </tr>
//                             <tr>
//                                 <td>Reverse a String</td>
//                                 <td>Google,  Microsoft, Amazon</td>
//                                 <td><img src={EasyImage} alt="easy"></img></td>
//                             </tr>
//                             <tr>
//                                 <td>Reverse a String</td>
//                                 <td>Google,  Microsoft, Amazon</td>
//                                 <td><img src={HardImage} alt="Hard"></img></td>
//                             </tr>
//                             <tr>
//                                 <td>Reverse a String</td>
//                                 <td>Google,  Microsoft, Amazon</td>
//                                 <td><img src={EasyImage} alt="easy"></img></td>
//                             </tr>
//                         </tbody>    
                            
//                         </table>
//                     </div>



//                 </div>

//                 <div className={sideBarToggle ? "hamburgerMenu openhamburgerMenu" : "hamburgerMenu"} onClick={handleSideMenu}>
//                     <div>
//                         <span className="line1"></span>
//                         <span className="line2"></span>
//                         <span className="line3"></span>
//                     </div>
//                 </div>

//                 <div className={probSolShift ? "problemButton" : "problemButton active"} onClick={handleProblemBtn}>
//                     <span>Problem</span>
//                 </div>
//                 <div className={probSolShift ? "solutionButton active" : "solutionButton"}  onClick={handleSolutionBtn}>
//                     <span>Solution</span>
//                 </div>
//             </div>
//             {probSolShift ? <SolutionSheet /> : <ProblemSheet netdata = {data} />}
//         </div>
//     );
// }
// export default Sheet;