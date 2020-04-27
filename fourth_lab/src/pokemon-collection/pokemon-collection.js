export function pokeCollection() {
	const apiData = {
		url:'https://pokeapi.co/api/v2/',
		type:'pokemon'
	};

	const {url, type} = apiData;
	const apiUrl = `${url}${type}`;

	let pokeballTopInf = {
		imgURL: 'img/top-pokeball.png',
		text: 'The top of pokeball'
	};

	let pokeballBottomInf = {
		imgURL: 'img/bottom-pokeball.png',
		text: 'The bottom of pokeball'
	};

	let mainPage = document.querySelector('.main--page'); 
	let navBarMenu = document.querySelector('.main--header').querySelector('.navbar').querySelector('.navbar--menu'); 
	let links = navBarMenu.querySelectorAll('.navbar--menu-li');
	let profileLink = links[0].querySelector('a');
	let collectionLink = links[1].querySelector('a');


	if (collectionLink.classList.contains('active')) {
		mainPage.classList.add('second');
	}

	let makeElement = function(tagName, className, text) {
		let element = document.createElement(tagName);
		element.classList.add(className);
		if (text) {
			element.textContent = text;
		}
		return element;
	};

	let closedButton = makeElement('button', 'closed--button');
	let pokeButtonDiv = makeElement('div', 'poke--div');
	let pokeButton = document.querySelector('#pokeball-button');
	pokeButtonDiv.appendChild(pokeButton);

	let pokeballTop = makeElement('img', 'pokeball--top');
	pokeballTop.src = pokeballTopInf.imgURL;
	pokeballTop.text = pokeballBottomInf.text;
	pokeButton.appendChild(pokeballTop);

	let pokeballBottom = makeElement('img', 'pokeball--bottom');
	pokeballBottom.src = pokeballBottomInf.imgURL;
	pokeballBottom.text = pokeballBottomInf.text;
	pokeButton.appendChild(pokeballBottom);


	async function fetchPokemon() {
		let id = Math.floor(Math.random() * 808); //only 807 pokemos are availabe
		const apiPokemonUrl = apiUrl + '/' + id.toString();
		let data = await fetch(apiPokemonUrl);
		let pokemon = await data.json();
		generateHtml(pokemon);
	};

	function generateHtml(data) {
		let pokemonContainer = makeElement('div', 'pokemon--container');
		mainPage.appendChild(pokemonContainer);

		let pokemonName = makeElement('h3', 'pokemon--name');
		pokemonContainer.appendChild(pokemonName);
		pokemonName.innerText = data.name;

		let pokemonImageDiv = makeElement('div', 'pokemon--image-div');
		let pokemonImage = makeElement('img', 'pokemon--image');
		pokemonImage.src = data.sprites.front_default;
		pokemonImage.alt = 'Pokemon picture';
		pokemonImageDiv.appendChild(pokemonImage);
		pokemonContainer.appendChild(pokemonImageDiv);

		let pokemonAbilitiesDiv = makeElement('div', 'pokemon--abilities-div');
		let pokemonAbilities = makeElement('ul', 'pokemon--abilities');
		createAbilities(data.abilities, pokemonAbilities);
		pokemonAbilitiesDiv.appendChild(pokemonAbilities);
		pokemonContainer.appendChild(pokemonAbilitiesDiv);


		pokemonContainer.appendChild(pokeButtonDiv);
	};

	function createAbilities(abilities, tag) {
		abilities.forEach(async function (ability) { 
			let pokemonAbility = makeElement('li', 'pokemon--ability');
			pokemonAbility.innerText = ability['ability']['name'];
			tag.appendChild(pokemonAbility);
			let url = ability['ability']['url'];

			async function fetchEffect(url, tag) {
				let response = await fetch(url);
				let data = await response.json();
				let effectText = makeElement('p', 'effect--text');
				data.effect_entries.forEach(function (effect) {
					effectText.textContent = effect.short_effect;
				});
				pokemonAbility.appendChild(effectText);
			}
			await fetchEffect(url);
		});
	}
	fetchPokemon().then();

	pokeButton.onclick = fetchPokemon;
	pokeButton.removeEventListener('click', fetchPokemon);
}