$.pages["Staff List"] = (() => {

const load = () => {
	$.db.query("staff_list", {}, ($d) => {
		build($d);
		$cb(main);
	});
};

const main = document.createElement("main");
main.textContent = "132";

const build = () => {};
	
return load;

})();
