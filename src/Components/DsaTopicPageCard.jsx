import React from "react";
import { Link } from "react-router-dom";

function DsaTopicPageCard(props){
    return(
        <div className="DsaTopicPageCard" style={{'--imageUrl':`url(${props.bgimage})`}}>
			  <div className="DsaTopicCardfront" >
			  </div>
			  <Link to={props.cardLink}>
			  <div className="back">
				   <p>{props.cardText}</p> 
				   
			  </div>
			  </Link>
		 </div>
    );
}

export default DsaTopicPageCard;