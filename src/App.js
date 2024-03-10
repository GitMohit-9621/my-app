// import User from "./Componets/Part1";
// import { useRef } from "react";
// import Info from "./Componets/Part2";
// import User from "./Componets/part3";

import { useState } from "react";

// import User from "./Componets/Part4";
function App() {
  // const inputref=useRef(null)

  // function apply(){
  //   inputref.current.value=1000
  //   inputref.current.style.color="red"
  //   inputref.current.focus()
  // }

  // high order componets (HOC)

  return (
    <div className="App">
      <Red cmp={Counter} />
      <Green cmp={Counter} />
      <Blue cmp={Counter} />
    </div>
  );
}

function Red(props) {
  return (
    <div>
      <h1 style={{ background: "red", border: 1, color: "cyan", width: 100 }}>
        <props.cmp />
      </h1>
     
      
    </div>
  );
}

function Green(props) {
  return (
    <div>
      <h1>Green Componets</h1>
      <h1 style={{ background: "Green", border: 1, color: "cyan", width: 100 }}>
        <props.cmp />
      </h1>
    </div>
  );
}
function Blue(props) {
  return (
    <div>
      <h5>blue components</h5>
      <h1
        style={{ background: "blue", border: 1, color: "black", width: 100 }}
      >
        <props.cmp />
      </h1>
    </div>
  );
}
function Counter() {
  const [count, setcount] = useState(null);
  return (
    <dvi>
      <h1>{count}</h1>
      <button onClick={() => setcount(count + 1)}>update</button>
    </dvi>
  );
}
export default App;
