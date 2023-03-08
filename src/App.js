import { useState } from "react";
import "./App.css";
import data from './data';
import List from './List';


function App() {
  const [people, setPeople] = useState(data)
  return <main>
    
    <section className="container">
 
      <h3>BASKETBOL MİLLİ TAKIM</h3>
      <List people={people}/>
      <button onClick={()=> console.log("you clicked me")} >
        clear All
      </button>
      <button onClick={()=> console.log("you clicked me")} >
        see all
      </button>
    </section>
  </main>
}

export default App;
