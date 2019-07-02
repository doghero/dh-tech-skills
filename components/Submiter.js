import React from 'react';
import axios from 'axios';

type Props = {}

const api = 'http://127.0.0.1:5000/review/create';

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
				<p>1- Auto avaliação ou gestor direto: descrever cada nota.</p>
				<p>2- Outros ou gestor indireto: descrever cada quadrante apenas.</p>
				<p>Por exemplo:&#10;Building: Essas notas por conta disso.&#10;Building Android: Essa nota por conta disso.</p>
				<textarea id="review" cols="100" rows="33" placeholder="Descreva aqui o motivo de suas notas.">
				</textarea>
				<br /><br/>
				<input type="button" id="submitPerformace" name="submitPerformace" value="Submit performace review" onClick={this.submitPerformace} />
			</div>
		)
	}
}

export default Submiter
