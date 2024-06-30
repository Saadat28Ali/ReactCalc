import { useReducer } from "react";

import './App.less';
import CalcDisplay from "./components/CalcDisplay";
import ButtonArea from "./components/ButtonArea";

function reducer(state, action) {

  function evaluate({ num1, oper, num2 }) {
    console.log(num1, oper, num2);
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    switch (oper) {
      case "+": return (num1 + num2).toString(); break;
      case "-": return (num1 - num2).toString(); break;
      case "*": return (num1 * num2).toString(); break;
      case "/": return (num1 / num2).toString(); break;
      default: return num2;
    }
  }

  if (action["type"] === "click") {
    if ("0123456789".includes(action["button_value"])) {
  
      if (state["bottom_display_val"] === "0") {
        return {
          "bottom_display_val": action["button_value"], 
          "point_added": state["point_added"], 
          "top_display_val": state["top_display_val"], 
          "oper_added": state["oper_added"]
        };
      }
      else {
        return {
          "bottom_display_val": state["bottom_display_val"] + action["button_value"], 
          "point_added": state["point_added"], 
          "top_display_val": state["top_display_val"], 
          "oper_added": state["oper_added"]
        }
      };
      
    }
    else if (action["button_value"] === "AC") {
      return {
        "bottom_display_val": "0", 
        "top_display_val": "",
        "point_added": false, 
        "oper_added": false
      };
    }
    else if (action["button_value"] === "Del") {
      if (state["bottom_display_val"] !== "0") {
        const length = state["bottom_display_val"].length;
        let point_added = state["bottom_display_val"].charAt(length - 1)=== ".";

        // console.log(point_added);

        if (length > 1) {
          return {
            "bottom_display_val": state["bottom_display_val"].substring(0, length - 1), 
            "point_added": (point_added) ? !point_added : state["point_added"], 
            "top_display_val": state["top_display_val"], 
            "oper_added": state["oper_added"]
          };
        }
        else {
          return {
            "bottom_display_val": "0", 
            "point_added": (point_added) ? !point_added : state["point_added"], 
            "top_display_val": state["top_display_val"], 
            "oper_added": state["oper_added"]
          };
        }
      }
      else {
        return state;
      }
    }
    else if (action["button_value"] === ".") {
      if (!state["point_added"]) {
        return {
          "bottom_display_val": state["bottom_display_val"] + ".", 
          "point_added": true, 
          "top_display_val": state["top_display_val"], 
          "oper_added": state["oper_added"]
        };
      }
      else {return state;}
    }
    else if ("+-*/".includes(action["button_value"])) {
      const oper_added = state["oper_added"];
      if (!oper_added) {
        return {
          "top_display_val": state["bottom_display_val"] + action["button_value"], 
          "bottom_display_val": "0", 
          "point_added": false, 
          "oper_added": true
        }
      }
      else {
        return state;
      }
    }
    else if (action["button_value"] === "=") {

      const args = {
        "num1": state["top_display_val"].substring(0, state["top_display_val"].length - 1), 
        "oper": state["top_display_val"].charAt(state["top_display_val"].length - 1), 
        "num2": state["bottom_display_val"]
      };

      const evaluated = evaluate(args);
      const point_added = evaluated.includes(".");

      return {
        "top_display_val": "", 
        "bottom_display_val": evaluated, 
        "point_added": point_added, 
        "oper_added": false
      }
    }
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, {
    "type": null, 
    "button_value": "init", 
    "bottom_display_val": "0", 
    "top_display_val": "", 
    "point_added": false, 
    "oper_added": false
  });

  return (
    <div className="App">
      <div className="CalcContainer">
        <CalcDisplay bottom_display_text={state["bottom_display_val"]} top_display_text={state["top_display_val"]}/>
        <ButtonArea parentStateDispatch={dispatch}/> 
      </div>
      <div className="some_random_label">
        {state["value"]}
      </div>
    </div>
  );
}

export default App;
