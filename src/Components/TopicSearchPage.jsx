import React, { useState } from "react";
import Navbar from "./Navbar";
import '../CompCSS/TopicSearch.css';
import QuestionRow from "./QuestionRow";
import { useParams } from "react-router";
import sheetData from "../Sheet Data/sheetData.json";

function TopicSearchPage(){
    
    const routeParams = useParams();

    let [paginationBtn, setPaginationBtn] = useState(1);

    const handlePaginationBtn = (val) => {
        setPaginationBtn(val);
    }
    
    return(
        <div className="TopicSearchPageMain">
            <Navbar compActive='Library' activeAlways={true} shadow = {true} />
            <div className="TopicSearchPageContMain">
                <h1 className="HeadingText"> {routeParams.id} Questions</h1>
                <div className="TopicSearchTableMain">
                    <div className="SearchRow1">
                        <div className="QuestionSearchMain">
                            <form className="QuestionSearchForm" role="search">
                                <input className="QuestionsearchTxt" id="searchText" type="search" placeholder="Search..." autoFocus />
                                <button className="QuestionsearchBtn" type="submit">Go</button>    
                            </form>
                        </div>
                        
                        <div className="QuestionDropDown">
                            <select className="questionSelect">
                                <option value={'All'}> All Problem </option>
                                <option value={'Most Asked'}> Most Asked </option>
                                <option value={'Hard'}> Hard</option>
                                <option value={'Medium'}> Medium</option>
                                <option value={'Easy'}> Easy</option>
                            </select>
                        </div>

                    </div>

                    <section className="QuestionTableWrapper">

                        <main className="Questionrow Questiontitle">
                        <ul>
                            <li>Q.No.</li>
                            <li>Problem Title</li>
                            <li>Asked In</li>
                            <li>Difficulty</li>
                        </ul>
                        </main>

                        <QuestionRow questionId={'1'} colorClass={'pga'} questionTopic={routeParams.id} questionTitle={sheetData[0].title} askedIn={sheetData[0].companiesasked} difficulty={sheetData[0].difficulty} questionId2={sheetData[0].id} />
                        <QuestionRow questionId={'2'} colorClass={'pga'} questionTopic={routeParams.id} questionTitle={sheetData[1].title} askedIn={sheetData[1].companiesasked} difficulty={sheetData[1].difficulty} questionId2={sheetData[1].id} />
                        <QuestionRow questionId={'3'} colorClass={'nfl'} questionTopic={routeParams.id} questionTitle={sheetData[2].title} askedIn={sheetData[2].companiesasked} difficulty={sheetData[2].difficulty} questionId2={sheetData[2].id} />
                        <QuestionRow questionId={'4'} colorClass={'nfl'} questionTopic={routeParams.id} questionTitle={sheetData[3].title} askedIn={sheetData[3].companiesasked} difficulty={sheetData[3].difficulty} questionId2={sheetData[3].id} />
                        <QuestionRow questionId={'5'} colorClass={'mlb'} questionTopic={routeParams.id} questionTitle={sheetData[4].title} askedIn={sheetData[4].companiesasked} difficulty={sheetData[4].difficulty} questionId2={sheetData[4].id} />
                        <QuestionRow questionId={'6'} colorClass={'mlb'} questionTopic={routeParams.id} questionTitle={sheetData[0].title} askedIn={sheetData[0].companiesasked} difficulty={sheetData[0].difficulty} questionId2={sheetData[0].id} />
                        <QuestionRow questionId={'7'} colorClass={'nhl'} questionTopic={routeParams.id} questionTitle={sheetData[1].title} askedIn={sheetData[1].companiesasked} difficulty={sheetData[1].difficulty} questionId2={sheetData[1].id} />
                        <QuestionRow questionId={'8'} colorClass={'nhl'} questionTopic={routeParams.id} questionTitle={sheetData[2].title} askedIn={sheetData[2].companiesasked} difficulty={sheetData[2].difficulty} questionId2={sheetData[2].id} />
                        <div id="app" className="Paginationcontainer">  
                            <ul className="page">
                                <li className="page__btn"><i className="fa-solid fa-arrow-left"></i></li>
                                <li className={paginationBtn === 1 ? "page_numbers active" : "page_numbers"} onClick={() => handlePaginationBtn(1)}> 1</li>
                                <li className={paginationBtn === 2 ? "page_numbers active" : "page_numbers"} onClick={() => handlePaginationBtn(2)}>2</li>
                                <li className={paginationBtn === 3 ? "page_numbers active" : "page_numbers"} onClick={() => handlePaginationBtn(3)}>3</li>
                                <li className={paginationBtn === 4 ? "page_numbers active" : "page_numbers"} onClick={() => handlePaginationBtn(4)}>4</li>
                                <li className={paginationBtn === 5 ? "page_numbers active" : "page_numbers"} onClick={() => handlePaginationBtn(5)}>5</li>
                                <li className={paginationBtn === 6 ? "page_numbers active" : "page_numbers"} onClick={() => handlePaginationBtn(6)}>6</li>
                                <li className="page_dots">...</li>
                                <li className={paginationBtn === 10 ? "page_numbers active" : "page_numbers"} onClick={() => handlePaginationBtn(10)}> 10</li>
                                <li className="page_btn"><i className="fa-solid fa-arrow-left"></i></li>
                            </ul>
                        </div>

                    </section>
                </div>
            </div>
        </div>
    );
}

export default TopicSearchPage;