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
				<textarea id="review" cols="100" rows="33" placeholder="Para seu review siga essas regras:&#10;1- Auto avaliação ou gestor direto: descrever cada nota.&#10;2- Outros ou gestor indireto: descrever cada quadrante apenas.&#10;Por exemplo:&#10;Building: Essas notas por conta disso.&#10;Building Android: Essa nota por conta disso.">
				</textarea>
				<br /><br/>
				<input type="button" id="submitPerformace" name="submitPerformace" value="Submit performace review" onClick={this.submitPerformace} />
			</div>
		)
	}
}

export default Submiter
