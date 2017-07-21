// import Library from './library';
import './style.css';

function component(){
	var element = document.createElement('div');
	element.innerHTML = _.join(['Helloooo',' webpack'],'');
	element.classList.add('hellooo');
	return element;
}
$('body').append('<p>jquery here</p>');
document.body.appendChild(component());
if(module.hot){
	module.hot.accept('./library',function(){
		console.log('Accepting the uploaded library module!');
		library.log();
	})
}

// function component(){
// 	var element = document.createElement('div');
// 	var button = document.createElement('button');
// 	var br = document.createElement('br');

// 	button.innerHTML = "Click me and look at the console!";
// 	element.innerHTML = _.join(['Hey I changed it',' webpack'],'');
// 	element.appendChild(br);
// 	element.appendChild(button);

// 	// Note that because a network request is involved, some indication
//    	// of loading would need to be shown in a production-level site/app.
//    	button.onclick = e => import(/* webpackChunkName: "print" */'./print').then(module=>{
//    		var print = module.default;
//    		print();
//    	});

//    	return element;
// }

// document.body.appendChild(component());