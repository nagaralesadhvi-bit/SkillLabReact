import  {useState, React } from "react";

export default function App() {
  const[items, setItem] = useState({})
  return (
    <div className="App">
      <div>{items}</div>
      
      <button onClick={()=> {setItem([...items, `${items.length+1}`])}}
        >Add Items</button>
    </div>
    
  )
}
