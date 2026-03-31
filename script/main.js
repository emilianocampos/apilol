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
// Mensaje de bienvenida inicial
function mostrarMensajeBienvenida() {
	setTimeout(() => {
		Swal.fire({
			title: "BIENVENIDO AL EXPLORADOR DE LoL",
			html: `<p>Descubre estadísticas, habilidades y skins de tus campeones favoritos.</p>
                   <p style="margin-top:10px; font-size: 0.9rem; color: #C89B3C;">RECUERDA: Escribe el nombre correctamente (Ej: MissFortune, Aatrox)</p>`,
			showCancelButton: true,
			cancelButtonText: "Cerrar",
			confirmButtonText: "Ver Lista de Campeones",
			confirmButtonColor: '#005A82'
		}).then((result) => {
			if (result.isConfirmed) {
				mostrarLista();
			}
		});
	}, 1000);
}

// Función para mostrar la lista de campeones de forma visual e intuitiva
function mostrarLista() {
	const grid = document.createElement('div');
	grid.className = 'champion-grid';

	nombresDeCampeones.forEach(nombre => {
		const item = document.createElement('div');
		item.className = 'champion-item';
		item.innerHTML = `
            <img src="https://ddragon.leagueoflegends.com/cdn/14.6.1/img/champion/${nombre}.png" alt="${nombre}" onerror="this.src='https://via.placeholder.com/60/0a1428/c89b3c?text=?';">
            <span>${nombre}</span>
        `;
		item.addEventListener('click', () => {
			input.value = nombre;
			Swal.close();
			// Pequeño delay para que se vea el cambio en el input antes de la búsqueda
			setTimeout(() => boton.click(), 100);
		});
		grid.appendChild(item);
	});

	Swal.fire({
		title: 'SELECCIONA UN CAMPEÓN',
		html: grid,
		showConfirmButton: false,
		width: window.innerWidth > 768 ? '80%' : '95%',
		customClass: {
			popup: 'modern-swal-popup'
		}
	});
}

function errorDeBusqueda() {
	if (!nombresDeCampeones.includes(valor)) {
		Swal.fire({
			icon: "error",
			title: "No se encontró el campeón",
			text: "Asegúrate de escribirlo correctamente o búscalo en la lista.",
			showCancelButton: true,
			cancelButtonText: "Cancelar",
			confirmButtonText: "Ver Lista de Campeones",
		}).then((result) => {
			if (result.isConfirmed) {
				mostrarLista();
			}
		});
		return true;
	}
	return false;
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
		// Ocultar loader cuando los datos básicos están listos
		const loader = document.getElementById('loader');
		if (loader) {
			loader.classList.add('loader-hidden');
		}

		mostrarMensajeBienvenida();


		// Manejar el submit del formulario para que funcione con la tecla Enter
		const searchForm = document.getElementById('search-form');
		if (searchForm) {
			searchForm.addEventListener('submit', (e) => {
				e.preventDefault();
				boton.click();
			});
		}

		// Botón ver lista en la pantalla principal
		const btnShowList = document.getElementById('btn-show-list');
		if (btnShowList) {
			btnShowList.addEventListener('click', () => {
				mostrarLista();
			});
		}

		boton.addEventListener('click', (e) => {
			e.preventDefault();
			valor = input.value.trim(); // Trim whitespace

			if (errorDeBusqueda()) return;




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
					const dificultad = datae.data[valor].info.difficulty;
					const ctx = document.getElementById('myChart').getContext('2d');

					new Chart(ctx, {
						type: 'radar',
						data: {
							labels: ['Ataque', 'Defensa', 'Magia', 'Dificultad'],
							datasets: [{
								label: 'Atributos del Campeón',
								data: [ataque, defensa, magia, dificultad],
								fill: true,
								backgroundColor: 'rgba(10, 200, 185, 0.2)',
								borderColor: '#0AC8B9',
								pointBackgroundColor: '#C89B3C',
								pointBorderColor: '#fff',
								pointHoverBackgroundColor: '#fff',
								pointHoverBorderColor: '#0AC8B9'
							}]
						},
						options: {
							scales: {
								r: {
									angleLines: { color: 'rgba(200, 155, 60, 0.2)' },
									grid: { color: 'rgba(200, 155, 60, 0.2)' },
									pointLabels: { color: '#C8AA6E', font: { size: 12, family: 'Lol' } },
									ticks: { display: false },
									suggestedMin: 0,
									suggestedMax: 10
								}
							},
							plugins: {
								legend: { display: false }
							}
						}
					});

				},
				imageUrl: `https://ddragon.leagueoflegends.com/cdn/14.6.1/img/champion/${valor}.png`,
				confirmButtonText: 'Cerrar',
				confirmButtonColor: '#005A82'
			});


		});
	});




nb.addEventListener('click', (e) => {
	e.preventDefault();
	valor = input.value.trim();

	if (errorDeBusqueda()) return;
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
					html: `<div class="modal-btn-container">
                                <img src=${urlFoto} class="modal-spell-img">
                                <p class="modal-spell-desc"><strong>${data.data[valor].spells[currentSpellIndex].name}</strong>: ${data.data[valor].spells[currentSpellIndex].description}</p>
                                <button id="btnNextSpell">Siguiente Habilidad</button>
                           </div>`,

				});

				// Establecer el evento click para el nuevo botón
				document.getElementById('btnNextSpell').addEventListener('click', showNextSpell);
			}


			Swal.fire({
				title: `${data.data[valor].id}`,
				imageUrl: `https://ddragon.leagueoflegends.com/cdn/14.6.1/img/champion/${valor}.png`,
				html: `<div class="modal-btn-container">
                            <button id="btnNextSpell">Ver habilidades</button>
                       </div>`,

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
	valor = input.value.trim();

	if (errorDeBusqueda()) return;
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
	valor = input.value.trim();

	if (errorDeBusqueda()) return;

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
						type: 'bar',
						data: {
							labels: ['Vida', 'Vel. Movimiento', 'Armadura', 'Daño Ataque', 'Maná/Rec'],
							datasets: [{
								label: 'Valores Iniciales',
								data: [vida, velMov, armadura, dañoAtaque, dañoMagia],
								backgroundColor: [
									'rgba(10, 200, 185, 0.6)',
									'rgba(0, 90, 130, 0.6)',
									'rgba(200, 155, 60, 0.6)',
									'rgba(200, 170, 110, 0.6)',
									'rgba(75, 192, 192, 0.6)'
								],
								borderColor: [
									'#0AC8B9',
									'#005A82',
									'#C89B3C',
									'#C8AA6E',
									'#4bc0c0'
								],
								borderWidth: 1,
								borderRadius: 5
							}]
						},
						options: {
							indexAxis: 'y',
							responsive: true,
							scales: {
								x: {
									beginAtZero: true,
									grid: { color: 'rgba(200, 155, 60, 0.1)' },
									ticks: { color: '#C8AA6E' }
								},
								y: {
									grid: { display: false },
									ticks: { color: '#fff', font: { family: 'Lol' } }
								}
							},
							plugins: {
								legend: { display: false }
							}
						}
					});
				}
			})



		})




})