import { useState } from "react";

function Card() {
    const [isClicked, setIsClicked] = useState(false);
    const [hstyle, detHstyle] = useState({});
    const [text, setText] = useState("this is Text Context");

    function clickHandler() {
        setIsClicked(true);

        setHstyle(headstyle)
    }
    return (
        <div className="Card">
            <p>This is text</p>
            <button >Change Color</button>
        </div>
    );
}

export default Card;