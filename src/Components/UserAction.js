import { logDOM } from "@testing-library/react";
import { useState } from "react";

function UserAction() {
    const [purch,setpurch]=useState(true)
    const [show,setshow]=useState(false)
    const [disable,setdisable]=useState(true)
    const [clear,setclear]=useState(true)
    const price=200;
    const item=8;
    const total=price*item;

    const handlechane=()=>{
        setpurch(false)
        setclear(true)
    }
    console.log(purch)
    const handleclike=()=>{
        setshow(true)
        setdisable(false)
    }
    console.log(show);
   const  handleclear=()=>{
    setclear(false)
    setpurch(true) 
    setdisable(true)
    setshow(false)
   }
//    console.log(purch);
    return ( 
        <div>
            <h1>Generate Transction</h1>
            {(purch)?<h1><button onClick={handlechane}>Create Purchase</button></h1>:
            <div>
                <h6>hnadmade Wooden sausage</h6>
                <p>${price}</p>
                <p>Shopping has almost become an art, and not everyone has the talent to buy the right things. As your shopping buddies grow, it is always better to have some quotes about shopping handy.</p>
                <p><button>+</button>{item}<button>-</button></p>
               
                {disable?<button onClick={handleclike}>submit Purchhase</button>:<h1></h1>}
                {(show)?<h1>purchese Submmited</h1>:<h1></h1>}
                {(clear)?<button onClick={handleclear}>clear</button>:<h1></h1>}
                <p>{total}</p>
            </div>}
         
        </div>
     );
}

export default UserAction;
