import React from "react";
import '../CompCSS/DsaTopicPage.css';
import Navbar from './Navbar.jsx';
import DsaTopicPageCard from "./DsaTopicPageCard";
import ArrayImage from '../images/Array.png';
import StackImage from '../images/Stack.png';
import QueueImage from '../images/Queue.png';
import LLImage from "../images/LinkedList.png";
import TreeImage from "../images/Tree.png";
import GraphImage from '../images/Graph.png';
import SSImage from "../images/SearchSort.png";
import DpImage from "../images/Dp.png";

function DsaTopicPage(){
    return(
        <div className="DsaTopicPageMain">
            <Navbar compActive='Library' activeAlways={true} shadow = {true} />

            <div className="DsaTopicPageContentMain" style={{'marginTop':'0px', 'paddingTop':'12vh'}}>
                <h1> Data Structure And Algorithm Sheet </h1>

                <div className="DsaTopicPageContentCardMain">
                    <DsaTopicPageCard bgimage={ArrayImage} cardText={'An array is a collection of items stored at contiguous memory locations. Arrays work on an index system starting from 0 to (n-1), where n is the size of the array.'} cardLink={'/topicsearch/Array'} />
                    <DsaTopicPageCard bgimage={StackImage} cardText={'A Stack is a linear data structure that follows the LIFO (Last-In-First-Out) principle.'} cardLink={'/topicsearch/Stack'}  />
                    <DsaTopicPageCard bgimage={QueueImage} cardText={'A Queue is a linear data structure that follows the First In First Out (FIFO) principle.'}  cardLink={'/topicsearch/Queue'} />
                    <DsaTopicPageCard bgimage={LLImage} cardText={'A linked list is a linear collection of data elements whose order is not given by their physical placement in memory. Instead, each element points to the next'} cardLink={'/topicsearch/LinkedList'} />
                    <DsaTopicPageCard bgimage={TreeImage} cardText={'A Tree is a widely used abstract data type that represents a hierarchical tree structure with a set of connected nodes.'}  cardLink={'/topicsearch/Tree'} />
                    <DsaTopicPageCard bgimage={GraphImage} cardText={'A Graph is a non-linear data structure consisting of nodes and edges.'} cardLink={'/topicsearch/Graph'}   />
                    <DsaTopicPageCard bgimage={SSImage} cardText={'Searching involves deciding whether a search key is present in the data and Sorting involves arranging data in ascending or descending order.'} cardLink={'/topicsearch/Searching Sorting'}   />
                    <DsaTopicPageCard bgimage={DpImage} cardText={'Dynamic Programming is a technique in computer programming that helps to efficiently solve a class of problems that have overlapping subproblems and optimal substructure property.'} cardLink={'/topicsearch/Dynamic Progmramming'}  />
                </div>

            </div>
        </div>
    );
}

export default DsaTopicPage;