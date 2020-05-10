import { greeting } from './greeting';
import { start, handleStart } from '../action/start';

function text(getText) {
	const element = document.createElement('div');

	element.innerHTML = getText();

	return element;
}

function button(getLabel) {
	const element = document.createElement('button');
	element.onclick = handleStart;
	element.innerHTML = getLabel();
	return element;
}

document.body.appendChild(text(greeting))
document.body.appendChild(button(start))
