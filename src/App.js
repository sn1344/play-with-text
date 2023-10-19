import './App.css';
import Navbar from './components/Navbar';
import TextForms from './components/TextForm';
import { useState } from 'react';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode , setMode] = useState('light')// Whether Dark Mode is enabeled or not
  const [alert , setAlert] = useState(null);

  const showAlert = (message , type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
    showAlert("Dark mode has been enabled","success");
    // document.title = 'TextUtils - Dark Mode';
    // setInterval(() =>{
    //   document.title = 'TextUtils is Amazing Mode'
    // },2000);
    // setInterval(() =>{
    //   document.title = 'Install TextUtils Now!'
    // },1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
      // document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
  {/* <Navbar title="TextUtils" aboutText = "About TextUtils" /> */}
  {/* <Navbar/> */}
  <Router>
  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <div className="container my-3">
  <Switch>
    {/* /user --> Component 1
    /user/home --> Component 2 */}
          <Route exact path="/about">
            <About  mode={mode}/>
          </Route>
          <Route exact path="/">
          <TextForms showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Space(s)" mode={mode}/>
          </Route>
  </Switch>
  </div>
  </Router>
    </>
  );
}

export default App;
