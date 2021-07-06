import React from "react";
import PropTypes from 'prop-types';
import "./checkbox.css"
const checkbox = ({checked,onClick}) => {
	return (
		<div>
			<input type="checkbox" onChange={onClick} checked={checked}></input>
		</div>
	);
};

checkbox.protoType = {
    checked:PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
};
export default React.memo(checkbox); ;
