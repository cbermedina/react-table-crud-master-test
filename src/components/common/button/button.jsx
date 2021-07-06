import React from "react";
import "./button.css"
const button = ({onEvent,buttonClass, value}) => {
    const createButton = ()=>{
        if(onEvent)
            return (<input
                    onClick={()=>onEvent()}
                    className={buttonClass}
                    type="button"
                    value={value}
                />)
        else
            return <input className={buttonClass} type="submit" value={value}/>
    }
	return (<div>{createButton()}</div>);
};
export default React.memo(button); ;
