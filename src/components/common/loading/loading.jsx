import React from "react";
import "./loading.css";
const Loading = ({text}) => {
	return (
		<div className="container-loading">
            <div className="loader"></div>
            <span>{text}</span>
        </div>
	);
};

export default Loading;
