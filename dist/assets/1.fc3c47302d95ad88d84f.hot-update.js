webpackHotUpdate(1,{

/***/ "HLv+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_css__ = __webpack_require__("u7Oe");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_css__);
// import Library from './library';


// function component(){
// 	var element = document.createElement('div');
// 	element.innerHTML = _.join(['Helloooooo',' webpack'],'');
// 	element.classList.add('hello');
// 	return element;
// }
// $('body').append('<p>jquery here</p>');
// document.body.appendChild(component());
// if(module.hot){
// 	module.hot.accept('./library',function(){
// 		console.log('Accepting the uploaded library module!');
// 		library.log();
// 	})
// }

function component() {
	var element = document.createElement('div');
	var button = document.createElement('button');
	var br = document.createElement('br');

	button.innerHTML = "Click me and look at the console!";
	element.innerHTML = _.join(['Hello', ' webpack'], '');
	element.appendChild(br);
	element.appendChild(button);

	// Note that because a network request is involved, some indication
	// of loading would need to be shown in a production-level site/app.
	button.onclick = function (e) {
		return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, "uM3a")).then(function (module) {
			var print = module.default;
			print();
		});
	};

	return element;
}

document.body.appendChild(component());
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("M4fF")))

/***/ })

})
//# sourceMappingURL=main.map