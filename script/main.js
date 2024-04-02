const input = document.getElementById('texto');
const boton = document.getElementById('boton');
const foto = document.getElementById('fotochamp');
const imgConte = document.getElementById('fotochamp');
let valor = input.value;
const apiKey = 'RGAPI-bd02e23c-21ce-4cee-a7cd-19c256bc28bb';
const nb = document.getElementById('botonhab');
const botonSkin = document.getElementById('botonskn');
const fullInfo = document.getElementById('botonfullinfo');
const nombresDeCampeones = [
	"Aatrox", "Ahri", "Akali", "Akshan", "Alistar", "Amumu", "Anivia", "Annie", "Aphelios", "Ashe",
	"AurelionSol", "Azir", "Bard", "Belveth", "Blitzcrank", "Brand", "Braum", "Briar", "Caitlyn",
	"Camille", "Cassiopeia", "Chogath", "Corki", "Darius", "Diana", "Draven", "DrMundo", "Ekko",
	"Elise", "Evelynn", "Ezreal", "Fiddlesticks", "Fiora", "Fizz", "Galio", "Gangplank", "Garen",
	"Gnar", "Gragas", "Graves", "Gwen", "Hecarim", "Heimerdinger", "Hwei", "Illaoi", "Irelia",
	"Ivern", "Janna", "JarvanIV", "Jax", "Jayce", "Jhin", "Jinx", "Kaisa", "Kalista", "Karma",
	"Karthus", "Kassadin", "Katarina", "Kayle", "Kayn", "Kennen", "Khazix", "Kennen", "Kindred",
	"Kled", "KogMaw", "KSante", "Leblanc", "LeeSin", "Leona", "Lillia", "Lissandra", "Lucian",
	"Lulu", "Lux", "Malphite", "Malzahar", "Maokai", "MasterYi", "Milio", "MissFortune", "MonkeyKing",
	"Mordekaiser", "Morgana", "Naafiri", "Nami", "Nasus", "Nautilus", "Neeko", "Nidalee", "Nilah",
	"Nocturne", "Nunu", "Olaf", "Orianna", "Ornn", "Pantheon", "Poppy", "Pyke", "Qiyana", "Quinn",
	"Rakan", "Rammus", "RekSai", "Rell", "Renata", "Rumble", "Ryze", "Samira", "Sejuani", "Senna",
	"Seraphine", "Sett", "Shaco", "Shen", "Shyvana", "Singed", "Sion", "Sivir", "Skarner", "Smolder",
	"Sona", "Soraka", "Swain", "Sylas", "Syndra", "TahmKench", "Taliyah", "Talon", "Taric", "Teemo",
	"Thresh", "Tristana", "Trundle", "Tryndamere", "TwistedFate", "Twitch", "Udyr", "Urgot", "Varus",
	"Vayne", "Veigar", "Velkoz", "Vex", "Vi", "Viego", "Viktor", "Vladimir", "Volibear", "Warwick",
	"Xayah", "Xerath", "XinZhao", "Yasuo", "Yone", "Yorick", "Yuumi", "Zac", "Zed", "Zoe", "Zyra"
];
const separador = "|";

const nombresFormateados = nombresDeCampeones.map(nombre => `${separador}${nombre}${separador}`);
setTimeout(() => {


	Swal.fire({
		title: "BIENVENIDO AL BUSCADOR DE LoL",
		html: `<h2>Consulte la lista de campeones antes de comenzar, ya que se debe escribir de forma correcta el nombre del campeón que desea buscar(Primer letra en Mays)<h2> <p>Ejemplo: Sion<p> <p>Ejemplo: MissFortune<p>`,
		showCancelButton: true,
		cancelButtonText: "Cancelar",
		confirmButtonText: "Lista de Campeones",
	}).then((result) => {

		if (result.isConfirmed) {

			Swal.fire({
				title: `${nombresFormateados}`,

				icon: "info"
			});
		}
	});


}, 2000)

function errorDeBusqueda() {
	if (!nombresDeCampeones.includes(valor)) {
		Swal.fire({
			icon: "error",
			title: "No se encontró el campeón",

			cancelButtonText: "Cancelar",
			confirmButtonText: "Lista de Campeones",
		}).then((result) => {

			if (result.isConfirmed) {

				Swal.fire({
					title: `${nombresFormateados}`,

					icon: "info"
				});
			}
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



			errorDeBusqueda();




			Swal.fire({
				title: `${datae.data[valor].id}`,


				html: `<p> ${datae.data[valor].title}  </p> <div id="star-rating">Dificultad: </div> <canvas id="myChart"></canvas> `,
				didOpen: function () {
					//backg


					//estrellas
					const container = document.getElementById("star-rating");
					let rating = datae.data[valor].info.difficulty; // Este es el valor numérico del 1 al 10 que deseas mostrar como estrellas

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
					const ataque = datae.data[valor].info.attack;
					const defensa = datae.data[valor].info.defense;
					const magia = datae.data[valor].info.magic;
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
				imageUrl: `https://ddragon.leagueoflegends.com/cdn/14.6.1/img/champion/${valor}.png`,
				confirmButtonText: 'Cerrar',

				confirmButtonColor: '#3085d6'

			});


		});
	});




nb.addEventListener('click', (e) => {
	e.preventDefault();
	valor = input.value;

	errorDeBusqueda();
	const urlsa = `https://ddragon.leagueoflegends.com/cdn/14.6.1/data/es_ES/champion/${valor}.json`;
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
				currentSpellIndex = (currentSpellIndex + 1) % data.data[valor].spells.length;
				// Actualizar el contenido HTML del modal con el nuevo hechizo
				let urlFoto = `https://ddragon.leagueoflegends.com/cdn/14.6.1/img/spell/${data.data[valor].spells[currentSpellIndex].image.full}`;
				Swal.update({
					html: `<img src=${urlFoto}><p>${data.data[valor].spells[currentSpellIndex].id}: ${data.data[valor].spells[currentSpellIndex].description} </p><button id="btnNextSpell">Siguiente Hechizo</button>`,

				});

				// Establecer el evento click para el nuevo botón
				document.getElementById('btnNextSpell').addEventListener('click', showNextSpell);
			}


			Swal.fire({

				title: `${data.data[valor].id}`,
				imageUrl: `https://ddragon.leagueoflegends.com/cdn/14.6.1/img/champion/${valor}.png`,
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

	errorDeBusqueda();
	let numSkin = 0;

	function mostrarSkin(num) {
		const imageUrl = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${valor}_${num}.jpg`;

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

fullInfo.addEventListener('click', (e) => {
	e.preventDefault();
	valor = input.value;

	errorDeBusqueda();

	const urlsc = `https://ddragon.leagueoflegends.com/cdn/14.6.1/data/es_ES/champion/${valor}.json`;
	fetch(urlsc, {
		'Authorization': `Bearer ${apiKey}`
	})
		.then(response => {
			if (!response.ok) {
				throw new Error('F');

			}
			return response.json();

		})

		.then(data => {

			Swal.fire({
				title: `${data.data[valor].id}`,
				imageUrl: `https://ddragon.leagueoflegends.com/cdn/14.6.1/img/champion/${valor}.png`,

				html: `<h2>Tips de uso: </h2><p>  ${data.data[valor].allytips} </p> <h2>Tips para enemigos: </h2><p> ${data.data[valor].enemytips} </p> <canvas id="myCharts"></canvas> `,
				didOpen() {
					const vida = data.data[valor].stats.hp;
					const velMov = data.data[valor].stats.movespeed;
					const armadura = data.data[valor].stats.armor;
					const dañoAtaque = data.data[valor].stats.attackdamage;
					const dañoMagia = data.data[valor].stats.mp;
					console.log(vida)
					const ctxsa = document.getElementById('myCharts').getContext('2d');
					new Chart(ctxsa, {
						type: 'line',
						data: {
							labels: ['Vida', 'Velocidad de movimiento ', 'Armadura', 'Daño de ataque', 'Daño magico'],
							datasets: [{
								label: 'Valores iniciales',
								data: [vida, velMov, armadura, dañoAtaque, dañoMagia],
								fill: false,
								tension: 0.1
							}]
						},
						options: {

							scales: {
								y: {
									beginAtZero: true,

									max: 1000
								}
							},
							animations: {
								tension: {
									duration: 1000,
									easing: 'linear',
									from: 1,
									to: 0,
									loop: true
								}
							},
						}
					});
				}
			})



		})




})