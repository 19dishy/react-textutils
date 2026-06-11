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

function App() {

		// const [alert, setAlert] = useState(null);

		// const showAlert =(message,typeOfAlert) =>{
		// 	setAlert({
		// 		msg: message,
		// 		type: typeOfAlert
		// 	});
		// }

	const [DarkMode, setDarkMode] = useState('light');
	const toggleMode = () =>{
		if(DarkMode === 'dark'){
			setDarkMode('light');
			document.body.style.backgroundColor = 'white';
			document.body.style.color = 'black';

			//setAlert("Light mode has been enabled", "success");
		} else {
			setDarkMode('dark');
			document.body.style.backgroundColor = 'black';
			document.body.style.color 	= 'white';
			//setAlert("Dark mode has been enabled", "success");
		}
	};
	return (
	<>
	<Navbar title="TextUtils" about="About" mode={DarkMode} toggleMode={toggleMode}/>

	<Alert alert="This is a sample alert"/>

	<div className="container">
		<TaskForm heading="Enter the text:" mode={DarkMode}/>
	</div>

	<About mode={DarkMode}/>

	</>
	);
}
export default App;
