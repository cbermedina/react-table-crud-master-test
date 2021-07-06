import React from "react";
import { useHistory } from "react-router-dom";
import "./header.css"
import Button from "../button/button"
const Header = ({ title, onEvent,buttonClass,value, onReset }) => {
  const history = useHistory()
  const reset =()=> {
    if(onReset)
      return <Button onEvent={onReset} buttonClass="btn reset-button" value="Reset"/>
    else return <Button onEvent={()=>history.push('/')} buttonClass="btn reset-button" value="Cancel"/>
  }
	return (
        <div className="header">
            <h1 className="title">
                {title}
            </h1>
            <div className="container-header">
            {reset()}
              <Button onEvent={onEvent} buttonClass={buttonClass} value={value} />
            </div>
        </div>
	);
};

export default React.memo(Header);
