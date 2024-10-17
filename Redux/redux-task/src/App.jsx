
import './App.css';

import Nav from './components/Nav';
import A from './components/A';
import B from './components/B';
import Display from './components/Display';

import { Routes, Route} from "react-router-dom";

function App() {

  return (
    <div style={{padding : "30px"}}>
      <Nav />

      <Routes>
        <Route path={"/"} element={<div>  <A /> <hr /> <B /></div>} />
        <Route path={"/result"} element={<Display />} />
      </Routes>
      
    </div>
  )
}

export default App
