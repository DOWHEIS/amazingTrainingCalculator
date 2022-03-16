import {useState, useEffect} from "react";
import ResultComponent from './components/ResultComponent';
import KeyPadComponent from "./components/KeyPadComponent";
import Shake from "./components/Shake";
import './index.css'


const App =() =>  {
  const [display,setDisplay] = useState("")

    return (
        <div>
            <ResultComponent result={display}/>
            <KeyPadComponent className={"calculator-buttons"} display = {display} onClick={setDisplay}/>
        </div>
    );

  }



export default App;
