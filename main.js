import 'normalize.css'
import './style.scss'

document.getElementById("quote-button").addEventListener("click", updateQuote);

function updateQuote(e){
	fetch("https://api.adviceslip.com/advice").then((response) => response.json()).then((data) => {
		console.log(data);
		document.getElementById("advice-id").innerText = `Advice #${data.slip.id}`;
		document.getElementById("quote").innerText = data.slip.advice;
	})
}

