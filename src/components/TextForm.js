import React ,{useState} from 'react';
import PropTypes from 'prop-types';

export default function TextForm(props) {	
	const style = {
		backgroundColor: props.mode==='dark'?'black':'white', 
		color: props.mode==='dark'?'white':'black'
	}
	const handleUpCase = () =>{
		setText(text.toUpperCase());
	}

	const handleLowCase = () =>{
		setText(text.toLowerCase());
	};

	const handleOnChange = (event) =>{
		setText(event.target.value);
	}

	const handleRev = () =>{
		setText(text.split("").reverse().join(""));
	};

	const handleClear =() =>{
		setText("");
	};

	const handleCopy = () =>{
		navigator.clipboard.writeText(text);
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
            <p>{text.split(" ").length} words and {text.length} characters</p>
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

