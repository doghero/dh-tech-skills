import React from 'react'

type Props = {}

class Submiter extends React.Component {
	submitPerformace = () => {
		alert("Submit");
	}
	
	render = () => {
		return <input type="button" id="submitPerformace" name="submitPerformace" value="Submit performace review" onClick={this.submitPerformace} />
	}
}

export default Submiter
