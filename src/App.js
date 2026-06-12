/*
while adding bootstap components liek navbar make sure if a void tag is there to put / 
class shuld be className in react
href should be # or / or any link
*/

import './App.css';
import React,{useState} from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import TaskForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

		const [alert, setAlert] = useState(null);

		//will pass this function as a prop to the navbar component and will call it from there when the user clicks on the toggle button and also for TextForm component when the user clicks on the buttons to show the alert message
		const showAlert =(message,typeOfAlert) =>{	// this is the function which has two parameters message and typeOfAlert which will be used to set the alert state variable
			setAlert({
				msg: message,
				type: typeOfAlert
			});
			setTimeout(() => {	// this will set the alert state variable to null after 3 seconds so that the alert message will disappear after 3 seconds
				setAlert(null);
			}, 3000);	
		}

	const [DarkMode, setDarkMode] = useState('light');
	const toggleMode = () =>{
		if(DarkMode === 'dark'){
			setDarkMode('light');
			document.body.style.backgroundColor = 'white';
			document.body.style.color = 'black';
			showAlert("Light mode has been enabled", "success");
			document.title="TextUtils - Light Mode";
		} else {
			setDarkMode('dark');
			document.body.style.backgroundColor = 'black';
			document.body.style.color 	= 'white';
			showAlert("Dark mode has been enabled", "success");
			document.title="TextUtils - Dark Mode";
		}
	};
	return (
	<>	
	<Router>
		<Navbar title="TextUtils" about="About" mode={DarkMode} toggleMode={toggleMode}/>
		<Alert alert={alert}/> {/* alert is a state variable which is being passed as a prop */}

		<Routes>
          <Route exact path="/about" element={<About mode={DarkMode}/>} />    

          <Route exact path="/"  element={
			<div className="container">
				<TaskForm heading="Enter the text:" mode={DarkMode} showAlert={showAlert}/>
			</div>}/>
        </Routes>
	</Router>
		</>
	);
}
export default App;
