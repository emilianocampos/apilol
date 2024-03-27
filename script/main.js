const input = document.getElementById('text');
const button = document.getElementById('button');









const url = 'https://ddragon.leagueoflegends.com/cdn/14.6.1/data/es_ES/champion.json';
const apiKey = 'RGAPI-bd02e23c-21ce-4cee-a7cd-19c256bc28bb';

fetch(url, {
	'Authorization': `Bearer ${apiKey}`
})

	.then(response => {
		if (!response.ok) {
			throw new Error('F');

		}
		return response.json();

	})
	.then(datae => {

		button.addEventListener('click', () => {

			if (input.value === 'zyra') {

				alert(datae.data.Zyra.title)
				alert(datae.data.Zyra.blurb)
				
			}


		})







	})