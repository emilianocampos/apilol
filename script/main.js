const input = document.getElementById('texto');
const boton = document.getElementById('boton');
const foto = document.getElementById('fotochamp');
const imgConte = document.getElementById('fotochamp');
let valor = input.value;
const apiKey = 'RGAPI-bd02e23c-21ce-4cee-a7cd-19c256bc28bb';
const nb = document.getElementById('botonhab');
const botonSkin = document.getElementById('botonskn');
function capitalizarPrimeraLetra(palabra) {
	return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
}

let valorCapitalizado = capitalizarPrimeraLetra(valor);
function errorDeBusqueda() {
	if (valorCapitalizado !== "Aatrox" &&
		valorCapitalizado !== "Ahri" &&
		valorCapitalizado !== "Akali" &&
		valorCapitalizado !== "Akshan" &&
		valorCapitalizado !== "Alistar" &&
		valorCapitalizado !== "Amumu" &&
		valorCapitalizado !== "Anivia" &&
		valorCapitalizado !== "Annie" &&
		valorCapitalizado !== "Aphelios" &&
		valorCapitalizado !== "Ashe" &&
		valorCapitalizado !== "AurelionSol" &&
		valorCapitalizado !== "Azir" &&
		valorCapitalizado !== "Bard" &&
		valorCapitalizado !== "Belveth" &&
		valorCapitalizado !== "Blitzcrank" &&
		valorCapitalizado !== "Brand" &&
		valorCapitalizado !== "Braum" &&
		valorCapitalizado !== "Briar" &&
		valorCapitalizado !== "Caitlyn" &&
		valorCapitalizado !== "Camille" &&
		valorCapitalizado !== "Cassiopeia" &&
		valorCapitalizado !== "Chogath" &&
		valorCapitalizado !== "Corki" &&
		valorCapitalizado !== "Darius" &&
		valorCapitalizado !== "Diana" &&
		valorCapitalizado !== "Draven" &&
		valorCapitalizado !== "DrMundo" &&
		valorCapitalizado !== "Ekko" &&
		valorCapitalizado !== "Elise" &&
		valorCapitalizado !== "Evelynn" &&
		valorCapitalizado !== "Ezreal" &&
		valorCapitalizado !== "Fiddlesticks" &&
		valorCapitalizado !== "Fiora" &&
		valorCapitalizado !== "Fizz" &&
		valorCapitalizado !== "Galio" &&
		valorCapitalizado !== "Gangplank" &&
		valorCapitalizado !== "Garen" &&
		valorCapitalizado !== "Gnar" &&
		valorCapitalizado !== "Gragas" &&
		valorCapitalizado !== "Graves" &&
		valorCapitalizado !== "Gwen" &&
		valorCapitalizado !== "Hecarim" &&
		valorCapitalizado !== "Heimerdinger" &&
		valorCapitalizado !== "Hwei" &&
		valorCapitalizado !== "Illaoi" &&
		valorCapitalizado !== "Irelia" &&
		valorCapitalizado !== "Ivern" &&
		valorCapitalizado !== "Janna" &&
		valorCapitalizado !== "JarvanIV" &&
		valorCapitalizado !== "Jax" &&
		valorCapitalizado !== "Jayce" &&
		valorCapitalizado !== "Jhin" &&
		valorCapitalizado !== "Jinx" &&
		valorCapitalizado !== "Kaisa" &&
		valorCapitalizado !== "Kalista" &&
		valorCapitalizado !== "Karma" &&
		valorCapitalizado !== "Karthus" &&
		valorCapitalizado !== "Kassadin" &&
		valorCapitalizado !== "Katarina" &&
		valorCapitalizado !== "Kayle" &&
		valorCapitalizado !== "Kayn" &&
		valorCapitalizado !== "Kennen" &&
		valorCapitalizado !== "Khazix" &&
		valorCapitalizado !== "Kennen" &&
		valorCapitalizado !== "Kindred" &&
		valorCapitalizado !== "Kled" &&
		valorCapitalizado !== "KogMaw" &&
		valorCapitalizado !== "KSante" &&
		valorCapitalizado !== "Leblanc" &&
		valorCapitalizado !== "LeeSin" &&
		valorCapitalizado !== "Leona" &&
		valorCapitalizado !== "Lillia" &&
		valorCapitalizado !== "Lissandra" &&
		valorCapitalizado !== "Lucian" &&
		valorCapitalizado !== "Lulu" &&
		valorCapitalizado !== "Lux" &&
		valorCapitalizado !== "Malphite" &&
		valorCapitalizado !== "Malzahar" &&
		valorCapitalizado !== "Maokai" &&
		valorCapitalizado !== "MasterYi" &&
		valorCapitalizado !== "Milio" &&
		valorCapitalizado !== "MissFortune" &&
		valorCapitalizado !== "MonkeyKing" &&
		valorCapitalizado !== "Mordekaiser" &&
		valorCapitalizado !== "Morgana" &&
		valorCapitalizado !== "Naafiri" &&
		valorCapitalizado !== "Nami" &&
		valorCapitalizado !== "Nasus" &&
		valorCapitalizado !== "Nautilus" &&
		valorCapitalizado !== "Neeko" &&
		valorCapitalizado !== "Nidalee" &&
		valorCapitalizado !== "Nilah" &&
		valorCapitalizado !== "Nocturne" &&
		valorCapitalizado !== "Nunu" &&
		valorCapitalizado !== "Olaf" &&
		valorCapitalizado !== "Orianna" &&
		valorCapitalizado !== "Ornn" &&
		valorCapitalizado !== "Pantheon" &&
		valorCapitalizado !== "Poppy" &&
		valorCapitalizado !== "Pyke" &&
		valorCapitalizado !== "Qiyana" &&
		valorCapitalizado !== "Quinn" &&
		valorCapitalizado !== "Rakan" &&
		valorCapitalizado !== "Rammus" &&
		valorCapitalizado !== "RekSai" &&
		valorCapitalizado !== "Rell" &&
		valorCapitalizado !== "Renata" &&
		valorCapitalizado !== "Rumble" &&
		valorCapitalizado !== "Ryze" &&
		valorCapitalizado !== "Samira" &&
		valorCapitalizado !== "Sejuani" &&
		valorCapitalizado !== "Senna" &&
		valorCapitalizado !== "Seraphine" &&
		valorCapitalizado !== "Sett" &&
		valorCapitalizado !== "Shaco" &&
		valorCapitalizado !== "Shen" &&
		valorCapitalizado !== "Shyvana" &&
		valorCapitalizado !== "Singed" &&
		valorCapitalizado !== "Sion" &&
		valorCapitalizado !== "Sivir" &&
		valorCapitalizado !== "Skarner" &&
		valorCapitalizado !== "Smolder" &&
		valorCapitalizado !== "Sona" &&
		valorCapitalizado !== "Soraka" &&
		valorCapitalizado !== "Swain" &&
		valorCapitalizado !== "Sylas" &&
		valorCapitalizado !== "Syndra" &&
		valorCapitalizado !== "TahmKench" &&
		valorCapitalizado !== "Taliyah" &&
		valorCapitalizado !== "Talon" &&
		valorCapitalizado !== "Taric" &&
		valorCapitalizado !== "Teemo" &&
		valorCapitalizado !== "Thresh" &&
		valorCapitalizado !== "Tristana" &&
		valorCapitalizado !== "Trundle" &&
		valorCapitalizado !== "Tryndamere" &&
		valorCapitalizado !== "TwistedFate" &&
		valorCapitalizado !== "Twitch" &&
		valorCapitalizado !== "Udyr" &&
		valorCapitalizado !== "Urgot" &&
		valorCapitalizado !== "Varus" &&
		valorCapitalizado !== "Vayne" &&
		valorCapitalizado !== "Veigar" &&
		valorCapitalizado !== "Velkoz" &&
		valorCapitalizado !== "Vex" &&
		valorCapitalizado !== "Vi" &&
		valorCapitalizado !== "Udyr" &&
		valorCapitalizado !== "Tristana" &&
		valorCapitalizado !== "Trundle" &&
		valorCapitalizado !== "Tryndamere" &&
		valorCapitalizado !== "TwistedFate" &&
		valorCapitalizado !== "Twitch" &&
		valorCapitalizado !== "Udyr" &&
		valorCapitalizado !== "Urgot" &&
		valorCapitalizado !== "Varus" &&
		valorCapitalizado !== "Vayne" &&
		valorCapitalizado !== "Veigar" &&
		valorCapitalizado !== "Velkoz" &&
		valorCapitalizado !== "Vex" &&
		valorCapitalizado !== "Vi" &&
		valorCapitalizado !== "Udyr" &&
		valorCapitalizado !== "Viego" &&
		valorCapitalizado !== "Viktor" &&
		valorCapitalizado !== "Vladimir" &&
		valorCapitalizado !== "Volibear" &&
		valorCapitalizado !== "Warwick" &&
		valorCapitalizado !== "Xayah" &&
		valorCapitalizado !== "Xerath" &&
		valorCapitalizado !== "XinZhao" &&
		valorCapitalizado !== "Yasuo" &&
		valorCapitalizado !== "Yone" &&
		valorCapitalizado !== "Yorick" &&
		valorCapitalizado !== "Yuumi" &&
		valorCapitalizado !== "Zac" &&
		valorCapitalizado !== "Zed" &&
		valorCapitalizado !== "Zoe" &&
		valorCapitalizado !== "Zyra"

	) {

		Swal.fire({
			icon: "error",
			title: "No se encontro el campeon"
			,
			text: "No se encontro el campeon",
			footer: '<a href="#">Why do I have this issue?</a>'
		});

	}
}
const url = 'https://ddragon.leagueoflegends.com/cdn/14.6.1/data/es_ES/champion.json';


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


		boton.addEventListener('click', (e) => {
			e.preventDefault();
			valor = input.value;
			valorCapitalizado = capitalizarPrimeraLetra(valor);


			errorDeBusqueda();




			Swal.fire({
				title: `${datae.data[valorCapitalizado].id}`,


				html: `<p> ${datae.data[valorCapitalizado].title}  </p> <div id="star-rating">Dificultad: </div> <canvas id="myChart"></canvas> `,
				didOpen: function () {
					//backg


					//estrellas
					const container = document.getElementById("star-rating");
					let rating = datae.data[valorCapitalizado].info.difficulty; // Este es el valor numérico del 1 al 10 que deseas mostrar como estrellas

					for (let i = 1; i <= 10; i++) {
						const star = document.createElement("span");
						star.classList.add("star");
						if (i <= rating) {
							star.classList.add("active");
						}
						star.innerHTML = "&#9733;"; // Código HTML de la estrella
						container.appendChild(star);
					}
					//grafico
					const ataque = datae.data[valorCapitalizado].info.attack;
					const defensa = datae.data[valorCapitalizado].info.defense;
					const magia = datae.data[valorCapitalizado].info.magic;
					const ctx = document.getElementById('myChart').getContext('2d');
					new Chart(ctx, {
						type: 'line',
						data: {
							labels: ['ataque', 'defensa', 'magia'],
							datasets: [{
								label: 'Estadisticas generales',
								data: [ataque, defensa, magia],
								fill: false,
								borderColor: 'rgb(75, 192, 192)',
								tension: 0.1


							}]
						},
						options: {
							scales: {
								y: {
									beginAtZero: true,
									stepSize: 12,
									max: 10
								}
							}
						}
					});

				},
				imageUrl: `https://ddragon.leagueoflegends.com/cdn/14.6.1/img/champion/${valorCapitalizado}.png`,
				confirmButtonText: 'Cerrar',

				confirmButtonColor: '#3085d6'

			});


		});
	});

/*
				Swal.fire({
					title: `${datae.data[valorCapitalizado].id}`,
					text: ` ataque: ${datae.data[valorCapitalizado].info.attack}`,
					imageUrl: `https://ddragon.leagueoflegends.com/cdn/14.6.1/img/champion/${valorCapitalizado}.png`,
					imageWidth: 100,
					imageHeight: 100,
					imageAlt: `${valorCapitalizado}`,
	
					confirmButtonText: 'Botón de Confirmar',
					confirmButtonColor: '#3085d6',
				});
	
				*/


nb.addEventListener('click', (e) => {
	e.preventDefault();
	valor = input.value;
	valorCapitalizado = capitalizarPrimeraLetra(valor);
	errorDeBusqueda();
	const urlsa = `https://ddragon.leagueoflegends.com/cdn/14.6.1/data/es_ES/champion/${valorCapitalizado}.json`;
	fetch(urlsa, {
		'Authorization': `Bearer ${apiKey}`
	})
		.then(response => {
			if (!response.ok) {
				throw new Error('F');

			}
			return response.json();

		})

		.then(data => {
			let currentSpellIndex = -1; // Índice del hechizo actual

			function showNextSpell() {
				currentSpellIndex = (currentSpellIndex + 1) % data.data[valorCapitalizado].spells.length;
				// Actualizar el contenido HTML del modal con el nuevo hechizo
				let urlFoto = `https://ddragon.leagueoflegends.com/cdn/14.6.1/img/spell/${data.data[valorCapitalizado].spells[currentSpellIndex].image.full}`;
				Swal.update({
					html: `<img src=${urlFoto}><p>${data.data[valorCapitalizado].spells[currentSpellIndex].id}: ${data.data[valorCapitalizado].spells[currentSpellIndex].description} </p><button id="btnNextSpell">Siguiente Hechizo</button>`,

				});

				// Establecer el evento click para el nuevo botón
				document.getElementById('btnNextSpell').addEventListener('click', showNextSpell);
			}


			Swal.fire({

				title: `${data.data[valorCapitalizado].id}`,
				imageUrl: `https://ddragon.leagueoflegends.com/cdn/14.6.1/img/champion/${valorCapitalizado}.png`,
				html: ` <button id="btnNextSpell">Mostrar habilidades</button>`,

				confirmButtonText: 'Cerrar',
				willClose: () => {
					// Limpiar el estado del slider al cerrar el modal
					currentSpellIndex = 0;

				},
				confirmButtonColor: '#3085d6',
				didOpen: () => {
					// Establecer el evento click para el botón de siguiente hechizo
					document.getElementById('btnNextSpell').addEventListener('click', showNextSpell);
				}
			});
		})
		.catch(error => {
			console.error('Error:', error);
		});

})
botonSkin.addEventListener('click', (e) => {
	e.preventDefault();
	valor = input.value;
	valorCapitalizado = capitalizarPrimeraLetra(valor);
	errorDeBusqueda();
	let numSkin = 0;

	function mostrarSkin(num) {
		const imageUrl = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${valorCapitalizado}_${num}.jpg`;

		// Verificar si la imagen está disponible
		fetch(imageUrl)
			.then(response => {
				if (!response.ok) {
					// Si la imagen no está disponible, muestra la primera skin nuevamente
					numSkin = 0;
					mostrarSkin(numSkin);
				} else {
					// Si la imagen está disponible, muestra el modal con la skin actual
					Swal.fire({
						imageUrl: imageUrl,
						imageWidth: 200,
						showConfirmButton: true,
						showCancelButton: true,
						cancelButtonText: 'Siguiente Skin',
					}).then((result) => {
						if (result.isDismissed) {
							// Si se hace clic en el botón para aumentar el número de skin
							numSkin++;
							mostrarSkin(numSkin);
						}
					});
				}
			})
			.catch(error => {
				console.error('Error al verificar la disponibilidad de la imagen:', error);
			});
	}

	mostrarSkin(numSkin); // Muestra la primera skin al abrir el modal
});