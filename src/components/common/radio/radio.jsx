import React from "react";
import "./radio.css"
const Radio = ({group,name,value,onChange,checked}) => {
	return (
		<div>
            <input
				type="radio"
				name={group}
				value={value}
				onChange={()=>{onChange(value)}}
				checked={checked?"checked":""}>
			</input>
			{name}
		</div>
	);
};
Radio.defaultProps = {
	value: 0,
}
export default Radio;
