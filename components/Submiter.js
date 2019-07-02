import React from 'react';
import axios from 'axios';

type Props = {}

const api = 'https://us-central1-dh-backend.cloudfunctions.net/performaceReview';

class Submiter extends React.Component {
	submitPerformace = () => {
		var params = window.location.href.split("/#").pop();
		var review = document.getElementById("review").value;
		location.href = api + "?params=" + params + "&review=" + review;
	}
	
	render = () => {
		return (
			<div>
				<textarea id="review" cols="100" rows="33">
					Digite
				</textarea>
				<br /><br/>
				<input type="button" id="submitPerformace" name="submitPerformace" value="Submit performace review" onClick={this.submitPerformace} />
			</div>
		)
	}
}

export default Submiter
