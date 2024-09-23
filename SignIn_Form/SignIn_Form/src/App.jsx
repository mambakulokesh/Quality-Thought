import './App.css'
import Navbar from "./components/navbar/Navbar";
// import Image from "./components/changeimage/Image";
// import Counter from "./components/counter/Counter";
// import Card from './components/card/Card';
// import State from './components/practice/State';
import SignIn from './components/task/SignIn';



function App() {

  return (
    <div>
      <Navbar />
      {/* <Image /> 
      <Counter />
      <Card />

      <State /> */}
      <SignIn />

    </div>
  );
}

export default App
