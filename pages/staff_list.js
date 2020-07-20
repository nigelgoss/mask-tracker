$.pages["Patient List"] = (() => {

const load = () => {
	$.db.query("patient_list", {}, ($d) => {
		build($d);
		$cb(main);
	});
};

const main = document.createElement("main");
main.textContent = "132";

return load;

})();
