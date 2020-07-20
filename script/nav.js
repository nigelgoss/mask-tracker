$.nav = (() => {

const goTo = ($page, $input) => {
	
	$.pages[$page]($input, $ele => {
		let main = document.body.querySelector("main");
		main.parentNode.replaceChild($ele, main);
	});
	
};

return {
	goTo: goTo,
};
  
})();
