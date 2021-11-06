
import './App.css';
// import About from './components/About';
import NavBar  from './components/NavBar';
import TextForm from './components/TextForm';
import React ,{useState} from 'react';
import Alert from './components/Alert';
function App() {
  const [mode, setMode] = useState('light'); // Wheether dark mode is enabled or not
  const [alert, setAlert] = useState('');
  const showAlert = (message , type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 3000);
  }
  const toggleMode = (mode) =>{
    setMode(mode);
    console.log(style.light.backgroundColor)
    console.log(style[mode].backgroundColor)
    document.body.style.backgroundColor = style[mode].backgroundColor;
    showAlert(style[mode].alertmsg,"success")  

  }
  
  const style = {
    light:{
      button:"btn-light",
      textarea:"txtareaLight",
      headingsContainer:"headingsContainerWhite",
      navbar:"navbar-light bg-light",
      backgroundColor:"white",
      alertmsg:"Light mode has been enabled"
    },
    dark:{
      button:"btn-dark",
      textarea:"txtareaDark",
      headingsContainer:"headingsContainerDark",
      navbar:"navbar-dark bg-dark",
      backgroundColor : "#808080",
      alertmsg:"Dark mode has been enabled",
    },
    red:{
      button:"btn-danger",
      textarea:"txtareaRed",
      headingsContainer:"headingsContainerRed",
      navbar:"navbar-dark bg-danger",
      backgroundColor:"#FF4040",
      alertmsg:"Red mode has been enabled"
    },
    yellow:{
      button:"btn-warning",
      textarea:"txtareaYellow",
      headingsContainer:"headingContainerYellow",
      navbar:"navbar-light bg-warning",
      backgroundColor:"#FFDA8F",
      alertmsg:"Yellow mode has been enabled"
    },
    green:{
      button:"btn-success",
      textarea:"txtareaGreen",
      headingsContainer:"headingContainerGreen",
      navbar:"navbar-dark bg-success",
      backgroundColor:"#39ec73",
      alertmsg:"Green mode has been enabled"
    },
    blue:{
      button:"btn-primary",
      textarea:"txtareaBlue",
      headingsContainer:"headingContainerBlue",
      navbar:"navbar-light bg-info",
      backgroundColor:"#65cbf2",
      alertmsg:"Blue mode has been enabled"
    }

  }

  return (
    <>
      <NavBar title = "Textutils" mode = {style[mode]} aboutText="About TextUtils" toggleMode = {toggleMode}/>
      <Alert alert = {alert}/>
      <div className= "container my-3">
      {/* <About/> */}
      <TextForm heading = "This is heading" mode = {style[mode]} showAlert = {showAlert}/>
      </div>
    </>
  );
}

export default App;
