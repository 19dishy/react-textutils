import React from 'react'

export default function Alert(props) {
	const capitalize = (word) => {
		const lower=word.toLowerCase();
		return lower.charAt(0).toUpperCase() + lower.slice(1);
	};

	return (
		props.alert &&  
		<div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
			<strong>{capitalize(props.alert.type)}</strong> {props.alert.msg}
		</div>
  )
}

//props.alert && is used to check if the alert prop is not null or undefined, then only the alert message will be displayed. If the alert prop is null or undefined, then nothing will be rendered. 
//${props.alert.type} this was used as in bootstrap there are different types of alerts like success, danger, warning etc.
//capitalize function is used to capitalize the first letter of the alert type and make the rest of the letters lowercase. This is done to make the alert type look better in the alert message. For example, if the alert type is "success", then it will be displayed as "Success" in the alert message.
