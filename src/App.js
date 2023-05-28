import React from "react"; // Importing React in App.
import { Routes, Route } from 'react-router-dom';
import Sheet from "./Components/Sheet";
import HomePage from "./Components/HomePage";
import Feedback from "./Components/Feedback";
import DsaTopicPage from "./Components/DsaTopicPage";
import TopicSearchPage from "./Components/TopicSearchPage";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// import LoginPopup from "./Components/LoginPopup";
// import Login from "./Components/Login";

function App()  // App Main function
{

  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === '') {
      window.scrollTo(0, 0);
      if(pathname === '/'){
        const secelem = document.getElementById('contactClick');
        secelem.className = 'nav-link';
        const thirdelem = document.getElementById('contactChange');
        thirdelem.className = 'nav-link bold';
      }
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if(id === 'contactUs'){
         const secelem = document.getElementById('contactClick');
         const thirdelem = document.getElementById('contactChange');
         if(secelem){
            secelem.className = 'nav-link bold';
            thirdelem.className = 'nav-link';
         } 
        }
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash, key]);
  return(
    <div className="AppMain">   {/* Main Div Of APp Component*/}
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/sheet/:id" element={<Sheet />} />
        <Route exact path="/feedback" element={<Feedback />} />
        {/* <Route exact path="/login" element={<LoginPopup />} />
        <Route exact path="/signup" element={<Login showLogin={false} />} /> */}
        <Route exact path="/dsatopics" element={<DsaTopicPage />} />
        <Route exact path="/topicSearch/:id" element={<TopicSearchPage />} />
      </Routes>
        
    </div>
  );
}

export default App; // Exporting App Component in Index.js