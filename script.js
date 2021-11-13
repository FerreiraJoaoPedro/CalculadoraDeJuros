const calcular = document.getElementById('calcular');

	function calculo () {

	
		const nome = document.getElementById('nome').value;
		const renda = document.getElementById('renda').value;
		const valorFinanciado = document.getElementById('valorFinanciado').value;
		const entrada = document.getElementById('entrada').value;
		const taxaJuros = document.getElementById('taxaJuros').value;
		const numParcelas = document.getElementById('numParcelas').value;
		const resultado = document.getElementById('resultado');

const taxaJurosP = taxaJuros/100;
const trintaPorcento = renda * 0.3;

	if(nome !== '' && renda !== '' && valorFinanciado !== '' && entrada !== '' && taxaJurosP !== '' && numParcelas !== ''){
	const PMT = (valorFinanciado * ((((1+taxaJurosP)**numParcelas)*taxaJurosP) / (((1+taxaJurosP)**numParcelas) - 1))).toFixed(2);

	if (PMT >= trintaPorcento) {
		resultado.textContent = 'Olá '+nome+', o seu financiamento é superior à 30% da sua renda (R$ '+PMT+'), logo não recomendamos realizar o financiamento com esse banco';
	}
	else{
		resultado.textContent = 'Olá '+nome+', o seu financiamento é de: R$ '+PMT+' por mês';
	}
}
else{
	resultado.textContent = 'Por favor, preencha todos os campos!';
}
}

	calcular.addEventListener('click', calculo);