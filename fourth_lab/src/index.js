import {profilePage} from './profile-page/profile-page';
import {pokeCollection} from './pokemon-collection/pokemon-collection';

let profileLink = document.getElementById('first');
let pokeLink = document.getElementById('second');

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