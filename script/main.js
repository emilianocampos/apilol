const input = document.getElementById('texto');
const boton = document.getElementById('boton');
const foto = document.getElementById('fotochamp');
const imgConte = document.getElementById('fotochamp');


function capitalizarPrimeraLetra(palabra) {
	return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
}


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
		let imgNodo;

		boton.addEventListener('click', (e) => {
			e.preventDefault();
			const valor = input.value;
			const valorCapitalizado = capitalizarPrimeraLetra(valor);




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
				alert('no exite');
			}
			else {

				Swal.fire({
					title: "Report neniano troll",
					text: "Modal with a custom image.",
					imageUrl: `https://ddragon.leagueoflegends.com/cdn/14.6.1/img/champion/${valorCapitalizado}.png`,
					imageWidth: 100,
					imageHeight: 100,
					imageAlt: "Custom image",
					background: "#fff url(/images/trees.png)",

				});
			}


		});
	})