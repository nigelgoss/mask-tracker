"use strict";
(() => {

window.$ = {
	"pages": {},
};

Object.defineProperties(HTMLElement.prototype, {

	"ngpointerdown": {
		"set": function ($d) {
			this.style.cursor = "pointer";
			if (this._ngX === undefined) this._ngX = {}; 
			if (this.onpointerdown === null) this.onpointerdown = () => { this._ngX.pointerdown(); };
			if (this.ontouchstart === null) this.ontouchstart = () => {}; // iOS
			this._ngX.pointerdown = $d;
		},
		"get": function () {
			return this?._ngX?.pointerdown;
		},
	},
				
	"ngstyle": {
		"set": function ($d) {
			Object.keys($d).forEach($v => { this.style.setProperty($v, $d[$v]); });
		},
	},

});

[
	"resources/spinner.png"
].forEach(($v) => {
	let link = document.createElement("link"); document.head.appendChild(link);
	link.href = $v;
	link.as = "image";
	link.rel = "preload";
	link.crossOrigin = "anonymous";
});

[
	["FARegular", "resources/fa-regular-400.woff2"],
	["FASolid", "resources/fa-solid-900.woff2"],
].forEach(($v) => {
	let font = new FontFace($v[0], "url('"+$v[1]+"')");
	font.load().then(() => { document.fonts.add(font); });
});
	
[
	"script/db.js",
	"script/nav.js",
	"pages/sign_in.js",
	"pages/staff_list.js",
].forEach(($v) => {
	let script = document.createElement("script"); document.head.appendChild(script);
	script.src = $v;
});
			
window.onload = () => {
	$.nav.goTo("Staff List");
	document.body.ngstyle = { animation:"opacityFade 3s", opacity:"1" };
};

})();
