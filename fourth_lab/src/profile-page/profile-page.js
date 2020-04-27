export function profilePage() {
	let profilePhoto = {
		imgURL: 'img/profile-image.jpg',
		text: 'Profile photo'
	};

	let personalInf = {
		name: 'Katya Ladokhina',
		age: 'Age: 19',
		position: 'Position: ',
		experience: 'Experience: 2014 - nowadays',
		achievement: 'Max number of episodes per day: 40',
		pokemon: 'Pokemon that suits me: Mew',
		extra: 'Degree: ITMO University M3307'
	};

	let pokeballTopInf = {
		imgURL: 'img/top-pokeball.png',
		text: 'The top of pokeball'
	};

	let pokeballBottomInf = {
		imgURL: 'img/bottom-pokeball.png',
		text: 'The bottom of pokeball'
	};

	let pikachuInf = {
		imgURL: 'img/pikachu-k.png',
		text: 'pikachu'
	};

	let tailInf = {
		imgURL: 'img/tail.png',
		text: 'Tail'
	};

	let mainPage = document.querySelector('.main--page'); 
	let links = document.querySelector('.main--header').querySelector('.navbar').querySelector('.navbar--menu').
	querySelectorAll('.navbar--menu-li'); 
	let profileLink = links[0].querySelector('a');
	let collectionLink = links[1].querySelector('a');

	if (profileLink.classList.contains('active')) {
		mainPage.classList.add('first');
	}

	let makeElement = function(tagName, className, text) {
		let element = document.createElement(tagName);
		element.classList.add(className);
		if (text) {
			element.textContent = text;
		}
		return element;
	};

	let profileCard = makeElement('div', 'profile--card');
	mainPage.appendChild(profileCard);
	let pokeButtonDiv = makeElement('div', 'poke--div');
	let pokeButton = document.querySelector('#pokeball-button');
	pokeButtonDiv.appendChild(pokeButton);

	let photoDiv = makeElement('div', 'photo--div');
	let photo = makeElement('img', 'profile--photo');
	photo.src = profilePhoto.imgURL;
	photo.text = profilePhoto.text;
	photoDiv.appendChild(photo);
	profileCard.appendChild(photoDiv);

	let pokeballTop = makeElement('img', 'pokeball--top');
	pokeballTop.src = pokeballTopInf.imgURL;
	pokeballTop.text = pokeballBottomInf.text;
	pokeButton.appendChild(pokeballTop);

	let pokeballBottom = makeElement('img', 'pokeball--bottom');
	pokeballBottom.src = pokeballBottomInf.imgURL;
	pokeballBottom.text = pokeballBottomInf.text;
	pokeButton.appendChild(pokeballBottom);

	let profileInfDiv = makeElement('div', 'profile--div');
	let profileInf = makeElement('ul', 'profile--inf');
	let h3 = makeElement('h3', 'h3--name');
	let name = makeElement('li', 'my--name',personalInf.name);
	h3.appendChild(name);
	let information = [h3, makeElement('li', 'my--age', 
		personalInf.age), makeElement('li', 'my--position', personalInf.position), makeElement('li', 'my--exp', 
		personalInf.experience), makeElement('li', 'my--achieve', personalInf.achievement), makeElement('li', 
		'my--pokemon', personalInf.pokemon), makeElement('li', 'extra', personalInf.extra)];

	for (let i = 0; i < information.length; i++) {
		profileInf.appendChild(information[i]);
	}

	profileInfDiv.appendChild(profileInf);
	profileCard.appendChild(profileInfDiv);
	profileCard.appendChild(pokeButtonDiv);

	let pikachu = makeElement('div', 'pikachu--div');
	let pikachuImage = makeElement('img', 'pikachu');
	pikachuImage.src = pikachuInf.imgURL;
	pikachuImage.alt = pikachuInf.text; 
	pikachu.append(pikachuImage);

	let tailImage = makeElement('img', 'tail');
	tailImage.src = tailInf.imgURL;
	tailImage.alt = tailInf.text;
	pikachu.append(tailImage);
	pikachu.classList.add('hidden');

	mainPage.append(pikachu);

	pokeButton.onclick = function() {
		if (pikachu.classList.contains('hidden')) {
			pikachu.classList.remove('hidden');
		} else {
			pikachu.classList.add('hidden');	
		}
	};
	
}