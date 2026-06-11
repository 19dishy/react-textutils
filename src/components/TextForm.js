import React ,{useState} from 'react';
import PropTypes from 'prop-types';

export default function TextForm(props) {	
	const style = {
		backgroundColor: props.mode==='dark'?'black':'white', 
		color: props.mode==='dark'?'white':'black'
	}
	const handleUpCase = () =>{
		setText(text.toUpperCase());
		props.showAlert("Converted to Uppercase", "success");	// this is the function which is being passed as a prop from the App component and is being called here when the user clicks on the button to show the alert message
	}

	const handleLowCase = () =>{
		setText(text.toLowerCase());
		props.showAlert("Converted to Lowercase", "success");
	};

	const handleOnChange = (event) =>{
		setText(event.target.value);
	}

	const handleRev = () =>{
		setText(text.split("").reverse().join(""));
		props.showAlert("Text reversed", "success");	
	};

	const handleClear =() =>{
		setText("");
		props.showAlert("Text cleared", "success");
	};

	const handleCopy = () =>{
		navigator.clipboard.writeText(text);
		props.showAlert("Text copied to clipboard", "success");
	};
	const [text, setText] = useState("");

  return (
    <div>
        <div className="mb-3" style={style}>
			<h3 htmlFor="textBox" className="form-label">{props.heading}</h3>
			<textarea className="form-control" id="textBox" rows="8" value={text} onChange={handleOnChange} style={style}></textarea> 
        </div>

        <button className="btn btn-primary mx-2" onClick={handleUpCase}>Convert to Uppercase</button>

        <button className="btn btn-primary mx-2" onClick={handleLowCase}>Convert to Lowercase</button>

        <button className="btn btn-primary mx-2" onClick={handleRev}>Reverse Text</button>

        <button className="btn btn-primary mx-2" onClick={handleClear}>Clear Text</button>

        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>

        <div className="container my-3">
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length - 1} words and {text.length} characters</p>
            <p>Time to read: {text.split(" ").length * 0.008} minutes</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
    </div>
  )
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired
};

