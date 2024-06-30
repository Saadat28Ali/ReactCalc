import "./CalcDisplay.less"

export default function CalcDisplay({ bottom_display_text, top_display_text }) {
    return (
        <div className="Display">
                <div className="DisplayUpper"> {top_display_text} </div>
                <div className="DisplayLower"> {bottom_display_text} </div>
        </div>
    );

}