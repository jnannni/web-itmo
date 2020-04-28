import {profilePage} from './profile-page/profile-page';
import {pokeCollection} from './pokemon-collection/pokemon-collection';

let profileLink = document.querySelector('.main--header').querySelector('.navbar')
.querySelector('.navbar--menu').querySelector('#first').querySelector('a');
let pokeLink = document.querySelector('.main--header').querySelector('.navbar')
.querySelector('.navbar--menu').querySelector('#second').querySelector('a');

let pokemon = function () {
	pokeCollection();
	localStorage.setItem('tab', 2);
};

let profile = function () {
	profilePage();
	localStorage.setItem('tab', 1);
}


if (localStorage.getItem('tab') == 2) {
	profileLink.classList.remove('active');
	pokeLink.classList.add('active');
	pokemon();
} else {
	pokeLink.classList.remove('active');
	profileLink.classList.add('active');
	profile();
}

pokeLink.onclick = pokemon;

profileLink.onclick = profile;