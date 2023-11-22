import { loadIndex } from './indexPage.js';
import {renderMenu} from './menu.js';
import {loadContact} from './contact.js';
//loadIndex();
const homeButton = document.getElementById('home');
homeButton.addEventListener('click', loadIndex);
const menuButton = document.getElementById('menu');
menuButton.addEventListener('click', renderMenu);
const contactButton = document.getElementById('contact');
contactButton.addEventListener('click', loadContact);

