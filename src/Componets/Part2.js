

import React, {forwardRef} from "react";

function Info(props,inputref){
    return(
        <div>
<h1>this is info page</h1>
<input type="text" ref={inputref}></input>
        </div>
    )
}
export default forwardRef(Info)