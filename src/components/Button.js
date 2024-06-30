// import { useReducer } from "react";
import "./Button.less"

function Button({ label , parentStateDispatch }) {
    return (
        <div className="Button" onClick={() => {parentStateDispatch({ "type": "click", "button_value": label})}}>
            {label}
        </div>
    );
}

function LongButton({ label, parentStateDispatch }) {
    return (
        <div className="LongButton" onClick={() => {parentStateDispatch({ "type": "click", "button_value": label })}}>
            {label}
        </div>
    );
}

const exporting = {Button, LongButton};
export default exporting;