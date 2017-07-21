import _ from 'lodash';
import './style.css';
import '../font/font.css';
import Icon from './metro.png';
import Data from './data.xml';

function component(){
	var element = document.createElement('div');

	element.innerHTML = _.join(['Salut', ' webpack'], '');
	element.classList.add('hello');
	
	// Add image to our existing div
	var myIcon = new Image();
	myIcon.src = Icon;

	element.appendChild(myIcon);

	// element.innerHTML = _.join([''+Data+''],'');
	console.log(Data);

	return element;
}

document.body.appendChild(component());