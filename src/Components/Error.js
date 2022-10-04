import { useState } from "react";

function Error() {
    const [msg, setmsg] = useState(true)
    const [ref, setref] = useState(false)
    const [type, settype] = useState(false)
    const [fetch, setfetch] = useState(false)
    const [custom, setcustom] = useState(false)
    const handleref = () => {
        setref(true)
        settype(false)
        setmsg(false)
        setfetch(false)
        setcustom(false)
    }
    const handletype = () => {
        settype(true)
        setref(false)
        setmsg(false)
        setfetch(false)
        setcustom(false)
    }
    const handlefetch = () => {
        setfetch(true)
        setref(false)
        settype(false)
        setmsg(false)
        setcustom(false)
    }
    const handlecustom = () => {
        setmsg(false)
        setcustom(true)
        setref(false)
        settype(false)
        setfetch(false)
       

    }
    const changetask = () => {
        setref(false)
        settype(false)
        setfetch(false)
        setcustom(false)
        setmsg(true)
    }

    return (
        <div>
            <h1>Error Demo</h1>
            <button onClick={handleref}>Create ReferenceError</button><br></br>
            <button onClick={handletype}>Create TypeError</button><br></br>
            <button onClick={handlefetch}>Create TypeError</button><br></br>
            <button onClick={handlecustom}>Create CustomeError</button>
            {(msg) ? <h1>Select error to Preview</h1>
                : <h1></h1>}
            {(ref) ? <h1>reference error:Hello<br /><button onClick={changetask}>clear</button></h1>
                : <h1></h1>}
            {(type) ? <h1>Type error:hello<br /><button onClick={changetask}>clear</button></h1>
                : <h1></h1>}
            {(fetch) ? <h1>undefineed:TypeError:failed to fetch<br /><button onClick={changetask}>clear</button></h1>
                : <h1></h1>}
            {(custom) ? <h1>undefined:Error:another thing<br /><button onClick={changetask}>clear</button></h1>
                : <h1></h1>}
        </div>
    );
}

export default Error;