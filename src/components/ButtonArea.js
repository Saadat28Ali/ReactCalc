import exporting from "./Button";
import "./ButtonArea.less"
const Button = exporting.Button;
const LongButton = exporting.LongButton;

export default function ButtonArea({ parentStateDispatch }) {
    return (
        <div className="ButtonArea">
            <table>
                <tr>
                    <td colSpan="2" ><LongButton label="AC" parentStateDispatch={parentStateDispatch}/></td><td><Button label="Del" parentStateDispatch={parentStateDispatch}/></td><td><Button label="/" parentStateDispatch={parentStateDispatch}/></td>
                </tr>
                <tr>
                    <td><Button label="1" parentStateDispatch={parentStateDispatch}/></td><td><Button label="2" parentStateDispatch={parentStateDispatch}/></td><td><Button label="3" parentStateDispatch={parentStateDispatch}/></td><td><Button label="*" parentStateDispatch={parentStateDispatch}/></td>
                </tr>
                <tr>
                    <td><Button label="4" parentStateDispatch={parentStateDispatch}/></td><td><Button label="5" parentStateDispatch={parentStateDispatch}/></td><td><Button label="6" parentStateDispatch={parentStateDispatch}/></td><td><Button label="+" parentStateDispatch={parentStateDispatch}/></td>
                </tr>
                <tr>
                    <td><Button label="7" parentStateDispatch={parentStateDispatch}/></td><td><Button label="8" parentStateDispatch={parentStateDispatch}/></td><td><Button label="9" parentStateDispatch={parentStateDispatch}/></td><td><Button label="-" parentStateDispatch={parentStateDispatch}/></td>
                </tr>
                <tr>
                    <td><Button label="." parentStateDispatch={parentStateDispatch}/></td><td><Button label="0" parentStateDispatch={parentStateDispatch}/></td><td colSpan="2"><LongButton label="=" parentStateDispatch={parentStateDispatch}/></td>
                </tr>
            </table>
        </div>
    );
}