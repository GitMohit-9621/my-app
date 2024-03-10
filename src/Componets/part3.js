import React, { useState } from "react";

function User(){
    const [data,setdata]=useState("")

    return(
        <div>
            <h1>Controlled react dom using state</h1>
            <input type="text" value={data} onChange={(e)=>setdata(e.target.value)}></input>
            <h5>{data}</h5>
        </div>
    )
}
export default User;