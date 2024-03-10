import React, { useRef } from "react";
// uncontrodel compopent for the compponets
function User(){

    let inputref=useRef(null)
    let inputref2=useRef(null)
    let inputref3=useRef(null)
    function apply(e){
e.preventDefault()
console.log("input",inputref.current.value)
console.log("input",inputref2.current.value)
console.log("input",inputref3.current.value)
    }
    return(
            <div>
            <form onSubmit={apply}>
            <input type="text" ref={inputref} placeholder="search here.."></input><br/><br/>

            <input type="text" ref={inputref2} placeholder="search here.."></input><br/><br/>

            <input type="email" ref={inputref3} placeholder="email"></input><br/><br/>
            <button>Submit</button>
            </form>
        </div>
    )
}
export default User