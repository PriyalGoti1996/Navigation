import { useState } from "react";

function Resource() {
    const [click, setclick] = useState(true)
    const handlechange = () => {
        setclick(!click)
    }
    console.log(click);
    const date = new Date();
    console.log(date);
    return (
        <div>{
            (click) ? <h1><button onClick={handlechange}>Display world clock</button></h1>
            : <h1>{date.toLocaleString()}<br/><button onClick={() => setclick(true)}>close</button></h1>


        }

        </div>
    );
}

export default Resource;