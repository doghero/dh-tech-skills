import React from 'react';
import axios from 'axios';

type Props = {}

const api = 'https://apireview.doghero.com.br/review/create';

class Submiter extends React.Component {
	submitPerformace = () => {
		var data = {
			params: window.location.href.split("/#").pop(),
			review: document.getElementById("review").value
		}
	
		axios.post(api, data).then(res => {
			alert(res.data);
		});
	}
	
	render = () => {
		return (
			<div>
				<p>Para seu review siga essas regras:</p>
				<p>1- Se você está avaliando alguém do seu squad ou time, descreva cada nota dada.</p>
				<p>2- Se você está avaliando alguém que não é do seu time, descreva uma nota por quadrante apenas.</p>
				<textarea id="review" cols="100" rows="33" placeholder="Descreva aqui o motivo de suas notas.">
				</textarea>
				<br /><br/>
				<input type="button" id="submitPerformace" name="submitPerformace" value="Submit performace review" onClick={this.submitPerformace} />
			</div>
		)
	}
}

export default Submiter
