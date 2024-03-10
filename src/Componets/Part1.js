import React, { useMemo, useState } from 'react'

// useMemo hook are used to functional componets enhace the websites
function User(){

    const [count ,setcount]=useState(0)
    const [items ,setitems]=useState(10)

const memo=useMemo(()=>{
    return count*10
})


    return(
        <div>
            <h1>count:{count}</h1>
            <h1>items:{items}</h1>
            <h1>meno:{memo}</h1>
 <button onClick={()=>setcount(count+1)}>updatecount</button>
 <button onClick={()=>setitems(items*10)}>updateitems</button>
        </div>
    )
}
export default User