$.nav = (() => {

const goTo = ($page, $input) => {
	let main = document.body.querySelector("main");
	main.parentNode.replaceChild($.pages[$page](), main);
};

return {
	goTo: goTo,
};
  
})();
